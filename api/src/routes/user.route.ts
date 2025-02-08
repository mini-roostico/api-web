import { Router } from "express";
import {
  createUser,
  getProfile,
  editProfile,
  deleteProfile,
} from "../controllers/users.js";
import {
  makeAuthenticationHandlerWithModel,
  validationHandler,
  ApiLimiterEntry,
  apiLimiter,
} from "@mini-roostico/api-common";
import { body } from "express-validator";
import RedisLimiterStorage from "../configs/redis.config.js";
import {UserModel} from "../models/models.js";

const userRouter = Router();

const API_LIMITER_RULES: ApiLimiterEntry = {
  "/": {
    GET: {
      time: 20,
      limit: 100,
    },
    PUT: {
      time: 20,
      limit: 100,
    },
    DELETE: {
      time: 20,
      limit: 100,
    },
    POST: {
      time: 10,
      limit: 100,
    },
  },
};

const limitStorage = new RedisLimiterStorage();
const authenticationHandler = makeAuthenticationHandlerWithModel(UserModel);

userRouter.use(apiLimiter(API_LIMITER_RULES, limitStorage));

userRouter.get("/", authenticationHandler, getProfile);

userRouter.put(
  "/",
  authenticationHandler,
  validationHandler([
    // Body validation
    body("data").isObject().notEmpty(),
    body("data.firstName").optional().isAlpha(),
    body("data.secondName").optional().isAlpha(),
    // Check that the user is not trying to change the email or the password
    body("data.email").not().exists(),
  ]),
  editProfile,
);

userRouter.delete(
  "/",
  authenticationHandler,
  validationHandler([body("email").exists().isEmail()]),
  deleteProfile,
);

userRouter.post(
  "/",
  validationHandler([
    body("email").exists().isEmail(),
    body("password").exists().isStrongPassword(),
    body("firstName").exists().isAlpha(),
    body("secondName").exists().isAlpha(),
  ]),
  createUser,
);

export default userRouter;
