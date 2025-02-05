/**
 * Exporting models
 */
export { User } from "./models/users/users";

export { Jwt } from "./models/jwt/jwt";

export { Source } from "./models/source/sources";

/**
 * Exporting errors
 */
export {
  HttpBaseError,
  BadRequestError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
  TooManyRequests,
} from "./errors/errors";

export { ErrorTypes } from "./errors/error.types";

/**
 * Exporting middlewares
 */
export { defaultErrorHandler } from "./middleware/error.middleware";

export { apiLimiter } from "./middleware/limiter.middleware";

export { defaultResponseHandler } from "./middleware/response.middleware";

export { validationHandler } from "./middleware/validation.middleware";

export { authenticationHandler } from "./middleware/authentication.middleware";

/**
 * Exporting interfaces
 */
export type {
  ApiLimiterRule,
  ApiLimiterEntry,
} from "./middleware/limiter.middleware";

export type { ApiLimiterStorage } from "./utils/limiter_storage/limiter.storage";

export type { IJwtHandler, ConfigurationObject } from "./utils/jwt/jwt.handler";

/**
 * Exporting JWT handlers
 */
import { JwtHandler as h, IJwtHandler } from "./utils/jwt/jwt.handler";
const JwtHandler = h as unknown as IJwtHandler;
export { JwtHandler };
