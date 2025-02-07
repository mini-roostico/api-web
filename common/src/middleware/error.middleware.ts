import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../utils/response/response.js";
import { StatusCodes } from "http-status-codes";
import { ErrorTypes } from "../errors/error.types.js";
import { HttpBaseError } from "../errors/errors.js";

export async function defaultErrorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const response: ErrorResponse = {
    success: false,
    code: StatusCodes.INTERNAL_SERVER_ERROR,
    error: {
      name: error.name,
      type: ErrorTypes.GENERIC_ERROR,
      message: error.message,
    },
  };
  if (error instanceof HttpBaseError) {
    response.code = error.code;
    response.error.name = error.name;
    response.error.message = error.message;
    response.error.type = error.type;
  }

  res.status(response.code);
  return res.send(response);
}
