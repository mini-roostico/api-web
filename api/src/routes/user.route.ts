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
import { JwtModel, UserModel } from "../models/models.js";

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
const authenticationHandler = makeAuthenticationHandlerWithModel(
  UserModel,
  JwtModel,
);

userRouter.use(apiLimiter(API_LIMITER_RULES, limitStorage));

/**
 * @openapi
 *
 * paths:
 *   /users:
 *      get:
 *          summary: Return the profile of the user
 *          parameters:
 *              - name: email
 *                in: body
 *                description: The email of the user to get. If not present, the authentication token will be used.
 *                required: false
 *                schema:
 *                  type: string
 *          responses:
 *              '200':
 *                  description: Ok
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/CommonResponse'
 *              '400':
 *                  description: Bad Request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/BadRequestError'
 *
 *              '429':
 *                  description: Too many requests
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/TooManyRequestError'
 *              '500':
 *                  description: Generic server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/InternalServerError'
 *
 */
userRouter.get(
  "/",
  authenticationHandler,
  validationHandler([body("data.email").optional().isEmail()]),
  getProfile,
);

/**
 * @openapi
 *
 * paths:
 *   /users:
 *      put:
 *          summary: Update a specific user
 *          parameters:
 *              - name: data
 *                in: body
 *                description: The data to update the user with
 *                required: true
 *                schema:
 *                  type: object
 *                  properties:
 *                      firstName:
 *                          type: string,
 *                          description: The first name of the user,
 *                          required: false
 *                      secondName:
 *                          type: string,
 *                          description: The second name of the user,
 *                          required: false
 *          responses:
 *              '200':
 *                  description: Ok
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/CommonResponse'
 *              '400':
 *                  description: Bad Request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/BadRequestError'
 *
 *              '429':
 *                  description: Too many requests
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/TooManyRequestError'
 *              '500':
 *                  description: Generic server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/InternalServerError'
 *
 */
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
    body("data.password").not().exists(),
  ]),
  editProfile,
);

/**
 * @openapi
 *
 * paths:
 *   /users:
 *      get:
 *          summary: Delete specified user
 *          parameters:
 *              - name: email
 *                in: body
 *                description: The email of the user to delete. If not present, the authentication token will be used.
 *                required: false
 *                schema:
 *                  type: string
 *          responses:
 *              '200':
 *                  description: Ok
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/CommonResponse'
 *              '400':
 *                  description: Bad Request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/BadRequestError'
 *
 *              '429':
 *                  description: Too many requests
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/TooManyRequestError'
 *              '500':
 *                  description: Generic server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/InternalServerError'
 *
 */
userRouter.delete(
  "/",
  authenticationHandler,
  validationHandler([body("data.email").optional().isEmail()]),
  deleteProfile,
);

/**
 * @openapi
 *
 * paths:
 *   /users:
 *      post:
 *          summary: Create a new user
 *          parameters:
 *              - name: data
 *                in: body
 *                description: The data to create the user with
 *                required: true
 *                schema:
 *                  type: object
 *                  properties:
 *                      email:
 *                          type: string,
 *                          description: The email of the user,
 *                          required: true
 *                      password:
 *                          type: string,
 *                          description: The password of the user, this will be encrypted,
 *                          required: true
 *                      firstName:
 *                          type: string,
 *                          description: The first name of the user,
 *                          required: true
 *                      secondName:
 *                          type: string,
 *                          description: The second name of the user,
 *                          required: true
 *          responses:
 *              '200':
 *                  description: Ok
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/CommonResponse'
 *              '400':
 *                  description: Bad Request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/BadRequestError'
 *
 *              '429':
 *                  description: Too many requests
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/TooManyRequestError'
 *              '500':
 *                  description: Generic server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/InternalServerError'
 *
 */
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
