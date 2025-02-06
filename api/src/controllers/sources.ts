import { NextFunction, Request, Response } from "express";
import { ac } from "../configs/accesscontrol.config";
import {
  ErrorTypes,
  Source,
  UnauthorizedError,
} from "@mini-roostico/api-common";
import { StatusCodes } from "http-status-codes";

export async function getSources(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  if (!ac.can(res.locals.user.role).readAny("sources").granted) {
    next(
      new UnauthorizedError(
        "Can't access the resource",
        undefined,
        ErrorTypes.AUTHENTICATION_ERROR,
      ),
    );
  }
  try {
    const sources: object = await Source.getSourcesForUser(res.locals.user._id);
    res.locals.code = StatusCodes.OK;
    res.locals.data = sources;
  } catch (err) {
    next(err);
  }

  next();
}

export async function submitSource(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (!ac.can(res.locals.user.role).createAny("sources").granted) {
    next(
      new UnauthorizedError(
        "Can't create the resource",
        undefined,
        ErrorTypes.AUTHENTICATION_ERROR,
      ),
    );
  }

  const parameters: Map<string, string | number | boolean> =
    req.body.parameters ?? new Map();
  type Func = (...args: unknown[]) => unknown;
  const macros: Map<string, Func> = req.body.macros ?? new Map();
  const configurations: Map<string, unknown[]> =
    req.body.configurations ?? new Map();

  const source = new Source({
    parameters,
    macros,
    configurations,
    user: res.locals.user._id,
  });

  try {
    await source.save();
    // TODO add subjekt call and get result
    res.locals.code = StatusCodes.CREATED;
    res.locals.data = source;
  } catch (err) {
    next(err);
  }
}
