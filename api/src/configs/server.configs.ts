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

const ATPrivateKeyPath =
    (process.env.AT_PRIVATE_KEY as string) ||
    "./secrets/at_private.pem";
const RTPrivateKeyPath =
    (process.env.RT_PRIVATE_KEY as string) ||
    "./secrets/Rt_private.pem";

const ServerConfig = (): Server => {
  JwtHandler.config({
    ATPrivateKeyPath: resolve(ATPrivateKeyPath),
    RTPrivateKeyPath: resolve(RTPrivateKeyPath),
  });

  MongooseConfig();

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
