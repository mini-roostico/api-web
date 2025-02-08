import { Router } from "express";
import RedisLimiterStorage from "../configs/redis.config.js";
import {
  apiLimiter,
  ApiLimiterEntry,
  makeAuthenticationHandlerWithModel,
} from "@mini-roostico/api-common";
import { getSources, submitSource } from "../controllers/sources.js";
import { UserModel } from "../models/models.js";

const sourceRoute = Router();

const API_LIMITER_RULES: ApiLimiterEntry = {
  "/": {
    GET: {
      time: 20,
      limit: 100,
    },
    POST: {
      time: 10,
      limit: 100,
    },
  },
};


const authenticationHandler = makeAuthenticationHandlerWithModel(UserModel);
const limitStorage = new RedisLimiterStorage();

sourceRoute.use(apiLimiter(API_LIMITER_RULES, limitStorage));

sourceRoute.get("/", authenticationHandler, getSources);

sourceRoute.post("/", authenticationHandler, submitSource);

export default sourceRoute;
