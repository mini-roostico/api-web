import { Router } from "express";
import { login, logout, refreshToken } from "../controllers/auth.js";
import {
  apiLimiter,
  makeAuthenticationHandlerWithModel,
  validationHandler,
  ApiLimiterEntry,
} from "@mini-roostico/api-common";
import RedisLimiterStorage from "../configs/redis.config.js";
import { body } from "express-validator";
import { JwtModel, UserModel } from "../models/models.js";

const API_LIMITER_RULES: ApiLimiterEntry = {
  "/login": {
    POST: {
      time: 20,
      limit: 100,
    },
  },
  "/logout": {
    POST: {
      time: 20,
      limit: 100,
    },
  },
  "/refresh": {
    POST: {
      time: 20,
      limit: 100,
    },
  },
};

const limitStorage = new RedisLimiterStorage();

const authRouter = Router();

authRouter.use(apiLimiter(API_LIMITER_RULES, limitStorage));

authRouter.post(
  "/login",
  validationHandler([
    body("email").exists().isEmail(),
    body("password").exists().isString(),
  ]),
  login,
);

const authenticationHandler = makeAuthenticationHandlerWithModel(
  UserModel,
  JwtModel,
);
authRouter.post("/logout", authenticationHandler, logout);

authRouter.post(
  "/refresh",
  validationHandler([
    body("email").exists().isEmail(),
    body("refreshToken").exists().isJWT(),
  ]),
  refreshToken,
);

export default authRouter;
