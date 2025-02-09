import { Request, Response, NextFunction, Router } from "express";
import { StatusCodes } from "http-status-codes";

export const healthCheckRouter = Router();

healthCheckRouter.get("/", healthCheck);

async function healthCheck(_: Request, res: Response, next: NextFunction) {
  res.locals.code = StatusCodes.OK;
  res.locals.data = {
    message: "Service is up and running",
  };
  return next();
}
