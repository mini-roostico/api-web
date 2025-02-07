import {
  defaultErrorHandler,
  defaultResponseHandler,
  JwtHandler,
} from "@mini-roostico/api-common";
import { resolve } from "path";
import express, { Application } from "express";
import MongooseConfig from "./mongoose.config";
import bodyParser from "body-parser";

const ExpressConfig = (): Application => {
  JwtHandler.config({
    ATPrivateKeyPath: resolve("./secrets/at_private.pem"),
    RTPrivateKeyPath: resolve("./secrets/rt_private.pem"),
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

  app.use(defaultResponseHandler);
  app.use(defaultErrorHandler);

  return app;
};

export default ExpressConfig;
