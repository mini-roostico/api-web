import express from "express";
import bodyParser from "body-parser";
import {
  defaultErrorHandler,
  defaultResponseHandler,
  JwtHandler,
} from "@mini-roostico/api-common";
import { resolve } from "path";
import { createServer, Server } from "node:http";
import MongooseConfig from "./mongoose.config.js";
import userRouter from "../routes/user.route.js";
import sourceRoute from "../routes/source.route.js";
import { RedisConfig } from "./redis.config.js";
const ATPrivateKeyPath =
  (process.env.AT_PRIVATE as string) || "./secrets/at_private.pem";
const RTPrivateKeyPath =
  (process.env.RT_PRIVATE as string) || "./secrets/rt_private.pem";

const ServerConfig = (externalServices: boolean = true): Server => {
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
  const httpServer = createServer(app);

  // Express configurations
  app.use(express.json());
  app.use(bodyParser.json());
  app.use((req, res, next) => {
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

  app.use("/users", userRouter);
  app.use("/sources", sourceRoute);

  app.use(defaultResponseHandler);
  app.use(defaultErrorHandler);

  return httpServer;
};

export default ServerConfig;
