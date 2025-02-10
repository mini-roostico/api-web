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
import subjektpkg from "@mini-roostico/subjekt";
import subjekt = subjektpkg.io.github.subjekt.Subjekt;
import { SourceModel as Source } from "../models/models.js";
import { StatusCodes } from "http-status-codes";
import { ObjectId } from "mongodb";

async function getSource(userId: string, sourceId: string) {
  const sources = await Source.getSourcesForUser(userId);
  console.log("[getSource] sources: ", sources);
  return sources.find((source) => source._id.equals(new ObjectId(sourceId)));
}

export async function getSources(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  let sources;
  let ownSource = true;
  if (!ac.can(res.locals.user.role).readAny("sources").granted) {
    if (!ac.can(res.locals.user.role).readOwn("sources").granted) {
      next(
        new UnauthorizedError(
          "Can't access the resource",
          undefined,
          ErrorTypes.AUTHENTICATION_ERROR,
        ),
      );
    }
  } else {
    ownSource = false;
  }
  try {
    if (ownSource) {
      sources = await Source.getSourcesForUser(res.locals.user._id);
    } else {
      sources = await Source.find({});
    }
  } catch (err) {
    next(err);
  }
  res.locals.code = StatusCodes.OK;
  res.locals.data = sources;

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
  const configuration: Map<string, string> =
    req.body.configuration ?? new Map();
  const last_update: Date = new Date(Date.now());

  const source = new Source({
    name,
    subjects,
    parameters,
    macros,
    configuration,
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
  const subjects: Subject[] = req.body.subjects ?? [];
  const parameters: Parameter[] = req.body.parameters ?? [];
  const macros: Macro[] = req.body.macros ?? [];
  const configuration: Map<string, string> =
    req.body.configuration ?? new Map();

  const source = {
    name,
    subjects,
    parameters,
    macros,
    configuration,
  };

  try {
    const subjektInstance = subjekt.fromJson(JSON.stringify(source));
    const result = JSON.parse(
      subjektInstance.resolveSubjectsAsJson().asString(),
    ) as Array<object>;
    const graph = JSON.parse(subjektInstance.getGenerationGraph().asString());
    res.locals.code = StatusCodes.OK;
    res.locals.data = {
      resolvedSubjects: result,
      generationGraph: graph,
    };
    next();
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
  console.log("[editSource] data: ", data);
  if (
    data === null ||
    data === undefined
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
    const updates = {};
    for (const key in data) {
      if (data[key] !== source[key]) {
        updates[key] = data[key];
      }
    }

    if (Object.keys(updates).length > 0) {
      await Source.updateOne({ _id: source._id }, { $set: updates });
    }

    const newSource = await getSource(res.locals.user._id, data._id);
    res.locals.code = StatusCodes.OK;
    res.locals.data = newSource;
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
