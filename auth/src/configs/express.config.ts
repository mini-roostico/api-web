import {
  defaultErrorHandler,
  defaultResponseHandler,
  JwtHandler,
} from "@mini-roostico/api-common";
import { resolve } from "path";
import express, { Application } from "express";
import MongooseConfig from "./mongoose.config.js";
import bodyParser from "body-parser";
import authRouter from "../routes/auth.route.js";

const ATPrivateKeyPath =
  (process.env.AT_PRIVATE_KEY as string) || "./secrets/at_private.pem";
const RTPrivateKeyPath =
  (process.env.RT_PRIVATE_KEY as string) || "./secrets/Rt_private.pem";

const ExpressConfig = (): Application => {
  JwtHandler.config({
    ATPrivateKeyPath: resolve(ATPrivateKeyPath),
    RTPrivateKeyPath: resolve(RTPrivateKeyPath),
  });

  MongooseConfig();
  const app = express();

  // Express configurations
  app.use(express.json());
  app.use(bodyParser.json());
  app.use((_req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, DELETE, PATCH",
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization",
    );
    next();
  });

  app.use("/auth", authRouter);

  app.use(defaultResponseHandler);
  app.use(defaultErrorHandler);

  return app;
};

export default ExpressConfig;
