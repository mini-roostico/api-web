import { Router } from "express";
import RedisLimiterStorage from "../configs/redis.config.js";
import {
  apiLimiter,
  ApiLimiterEntry,
  makeAuthenticationHandlerWithModel,
} from "@mini-roostico/api-common";
import {
  deleteSource,
  editSource,
  getSources,
  saveSource,
  submitSource,
} from "../controllers/sources.js";
import { JwtModel, UserModel } from "../models/models.js";

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
    PUT: {
      time: 10,
      limit: 100,
    },
    DELETE: {
      time: 10,
      limit: 100,
    },
  },
  "/submit": {
    POST: {
      time: 10,
      limit: 100,
    },
  },
};

const authenticationHandler = makeAuthenticationHandlerWithModel(
  UserModel,
  JwtModel,
);
const limitStorage = new RedisLimiterStorage();

sourceRoute.use(apiLimiter(API_LIMITER_RULES, limitStorage));

/**
 * @openapi
 *
 * paths:
 *   /sources:
 *      get:
 *          summary: Return the sources of the user
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
sourceRoute.get("/", authenticationHandler, getSources);

/**
 * @openapi
 *
 * paths:
 *   /sources:
 *      post:
 *          summary: Create a source
 *          parameters:
 *              - name: data
 *                in: body
 *                description: The data to update the source with.
 *                required: true
 *                schema:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type: string,
 *                          description: The source name,
 *                          required: true
 *                      subjects:
 *                          type: Subject[],
 *                          description: A list of subjects,
 *                          required: false
 *                      parameters:
 *                          type: Parameter[],
 *                          description: The source parameters,
 *                          required: false
 *                      macros:
 *                          type: Macro[],
 *                          description: The source macros,
 *                          required: false
 *                      configuration:
 *                          type: Map<string, string>,
 *                          description: The source configuration,
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
sourceRoute.post("/", authenticationHandler, saveSource);

/**
 * @openapi
 *
 * paths:
 *   /sources:
 *      put:
 *          summary: Update a specific source
 *          parameters:
 *              - name: data
 *                in: body
 *                description: The data to update the source with.
 *                required: true
 *                schema:
 *                  type: object
 *                  properties:
 *                      _id:
 *                          type: string
 *                          description: The source id to modify
 *                          required: true
 *                      name:
 *                          type: string,
 *                          description: The source name,
 *                          required: false
 *                      subjects:
 *                          type: Subject[],
 *                          description: A list of subjects,
 *                          required: false
 *                      parameters:
 *                          type: Parameter[],
 *                          description: The source parameters,
 *                          required: false
 *                      macros:
 *                          type: Macro[],
 *                          description: The source macros,
 *                          required: false
 *                      configuration:
 *                          type: Map<string, string>,
 *                          description: The source configuration,
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
sourceRoute.put("/", authenticationHandler, editSource);

/**
 * @openapi
 *
 * paths:
 *   /sources:
 *      delete:
 *          summary: Delete a specific source
 *          parameters:
 *              - name: data
 *                in: body
 *                description: The data to update the source with.
 *                required: true
 *                schema:
 *                  type: object
 *                  properties:
 *                      _id:
 *                          type: string
 *                          description: The source id to modify
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
sourceRoute.delete("/", authenticationHandler, deleteSource);

/**
 * @openapi
 *
 * paths:
 *   /sources/submit:
 *      post:
 *          summary: Submit a new generation based on the source
 *          parameters:
 *              - name: data
 *                in: body
 *                description: The data to build the source used in generation
 *                required: true
 *                schema:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type: string,
 *                          description: The source name,
 *                          required: true
 *                      subjects:
 *                          type: Subject[],
 *                          description: A list of subjects,
 *                          required: false
 *                      parameters:
 *                          type: Parameter[],
 *                          description: The source parameters,
 *                          required: false
 *                      macros:
 *                          type: Macro[],
 *                          description: The source macros,
 *                          required: false
 *                      configuration:
 *                          type: Map<string, string>,
 *                          description: The source configuration,
 *                          required: false
 *          responses:
 *              '200':
 *                  description: Ok
 *                  content:
 *                      application/json:
 *                          schema:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/CommonResponse'
 *                                  - type: object,
 *                                    properties:
 *                                        data:
 *                                            type: object,
 *                                            properties:
 *                                                resolvedSubjects:
 *                                                    type: array,
 *                                                    items:
 *                                                        type: object,
 *                                                        properties:
 *                                                            name:
 *                                                                type: string,
 *                                                                required: false
 *                                                            code:
 *                                                                type: string,
 *                                                                required: false
 *                                                generationGraph:
 *                                                    type: object,
 *                                                    description: Graph structure as map of subject index -> list of names or resolved subject generated from the subject,
 *                                                    properties:
 *                                                        index:
 *                                                            type: integer
 *                                                        resolved_subject:
 *                                                            type: array,
 *                                                            items:
 *                                                                type: string
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
sourceRoute.post("/submit", authenticationHandler, submitSource);

export default sourceRoute;
