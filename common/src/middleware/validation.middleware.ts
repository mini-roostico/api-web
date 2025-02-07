import { NextFunction, Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";
import { BadRequestError } from "../errors/errors.js";
import { ErrorTypes } from "../errors/error.types.js";

export function validationHandler(validations: ValidationChain[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (const validation of validations) {
      const result = await validation.run(req);
      if (result.array().length) break;
    }

    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    return next(
      new BadRequestError(
        "Some validation errors occurred.",
        undefined,
        ErrorTypes.VALIDATION_ERROR,
      ),
    );
  };
}
