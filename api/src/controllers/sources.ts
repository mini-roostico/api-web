import { NextFunction, Request, Response } from "express";
import { ac } from "../configs/accesscontrol.config.js";
import {
  ErrorTypes,
  UnauthorizedError,
  BadRequestError,
  Subject,
  Macro,
  Parameter,
} from "@mini-roostico/api-common";
import { SourceModel as Source } from "../models/models.js";
import { StatusCodes } from "http-status-codes";
import { ObjectId } from "mongodb";

async function getSource(userId: string, sourceId: string) {
  const sources = await Source.getSourcesForUser(userId);
  return sources.find((source) => source._id.equals(new ObjectId(sourceId)));
}

export async function getSources(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  if (!ac.can(res.locals.user.role).readOwn("sources").granted) {
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

export async function saveSource(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (!ac.can(res.locals.user.role).createOwn("sources").granted) {
    next(
      new UnauthorizedError(
        "Can't create the resource",
        undefined,
        ErrorTypes.AUTHENTICATION_ERROR,
      ),
    );
  }

  const name: string = req.body.name;
  const subjects: Subject[] = req.body.subjects;
  const parameters: Parameter[] = req.body.parameters ?? [];
  const macros: Macro[] = req.body.macros ?? [];
  const configurations: Map<string, string> =
    req.body.configurations ?? new Map();
  const last_update: Date = new Date(Date.now());

  const source = new Source({
    name,
    subjects,
    parameters,
    macros,
    configurations,
    user: res.locals.user._id,
    last_update,
  });
  try {
    await source.save();
    res.locals.code = StatusCodes.CREATED;
    res.locals.data = source;
    next();
  } catch (err) {
    next(err);
  }
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
  const subjects: Subject[] = req.body.subjects ?? [];
  const parameters: Parameter[] = req.body.parameters ?? [];
  const macros: Macro[] = req.body.macros ?? [];
  const configurations: Map<string, string> =
    req.body.configurations ?? new Map();

  const source = new Source({
    subjects,
    parameters,
    macros,
    configurations,
    user: res.locals.user._id,
  });

  try {
    // TODO add subjekt call and get result
    res.locals.code = StatusCodes.CREATED;
    res.locals.data = source;
  } catch (err) {
    next(err);
  }
}

/**
 * Edit the source
 * @param req
 * @param res
 * @param next
 */
export async function editSource(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const isAllowed = ac.can(res.locals.user.role).updateOwn("sources").granted;
  if (!isAllowed) {
    next(
      new UnauthorizedError(
        "Can't access to the resource",
        undefined,
        ErrorTypes.AUTHENTICATION_ERROR,
      ),
    );
  }

  const data = req.body.data;
  if (
    data === null ||
    data === undefined ||
    data.data === undefined ||
    data.data === null
  ) {
    return next(
      new BadRequestError(
        'Request need to have a "data" field',
        undefined,
        ErrorTypes.VALIDATION_ERROR,
      ),
    );
  }
  try {
    const source = await getSource(res.locals.user._id, data._id);
    await Source.updateOne({ _id: source._id }, data.data);
    res.locals.code = StatusCodes.OK;
    res.locals.data = true;
  } catch (error) {
    return next(error);
  }
  return next();
}

/**
 * Delete a source
 * @param req
 * @param res
 * @param next
 */
export async function deleteSource(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const isAllowed = ac.can(res.locals.user.role).deleteOwn("sources").granted;
  if (!isAllowed) {
    next(
      new UnauthorizedError(
        "Can't access to the resource",
        undefined,
        ErrorTypes.AUTHENTICATION_ERROR,
      ),
    );
  }

  const data = req.body.data;
  if (data === null || data === undefined) {
    return next(
      new BadRequestError(
        'Request need to have a "data" field',
        undefined,
        ErrorTypes.VALIDATION_ERROR,
      ),
    );
  }
  try {
    const source = await getSource(res.locals.user._id, data._id);
    await Source.deleteOne({ _id: source._id });
    res.locals.code = StatusCodes.OK;
    res.locals.data = true;
  } catch (error) {
    return next(error);
  }
  return next();
}
