import {
  defaultErrorHandler,
  defaultResponseHandler,
  JwtHandler,
  healthCheckRouter,
} from "@mini-roostico/api-common";
import { resolve } from "path";
import express, { Application } from "express";
import MongooseConfig from "./mongoose.config.js";
import bodyParser from "body-parser";
import authRouter from "../routes/auth.route.js";
import { RedisConfig } from "./redis.config.js";
import swaggerUi from "swagger-ui-express";
import * as fs from "fs";

const docPath = (process.env.DOCS as string) || "./swagger.json";
const ATPrivateKeyPath =
  (process.env.AT_PRIVATE as string) || "./secrets/at_private.pem";
const RTPrivateKeyPath =
  (process.env.RT_PRIVATE as string) || "./secrets/rt_private.pem";

const ExpressConfig = (externalServices: boolean = true): Application => {
  JwtHandler.config({
    ATPrivateKeyPath: resolve(ATPrivateKeyPath),
    RTPrivateKeyPath: resolve(RTPrivateKeyPath),
  });

  if (externalServices) {
    MongooseConfig().then(() => {
      console.log("Connected to MongoDB");
    });
    RedisConfig().then(() => {
      console.log("Connected to Redis");
    });
  }

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
  app.use("/health", healthCheckRouter);

  const swaggerDocument = JSON.parse(fs.readFileSync(docPath, "utf8"));

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use(defaultResponseHandler);
  app.use(defaultErrorHandler);

  return app;
};

export default ExpressConfig;
