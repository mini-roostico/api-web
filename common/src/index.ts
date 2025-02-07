/**
 * Exporting models
 */
export { User } from "./models/users/users.js";

export { Jwt } from "./models/jwt/jwt.js";

export { Source } from "./models/source/sources.js";

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
} from "./errors/errors.js";

export { ErrorTypes } from "./errors/error.types.js";

/**
 * Exporting middlewares
 */
export { defaultErrorHandler } from "./middleware/error.middleware.js";

export { apiLimiter } from "./middleware/limiter.middleware.js";

export { defaultResponseHandler } from "./middleware/response.middleware.js";

export { validationHandler } from "./middleware/validation.middleware.js";

export { authenticationHandler } from "./middleware/authentication.middleware.js";

/**
 * Exporting interfaces
 */
export type {
  ApiLimiterRule,
  ApiLimiterEntry,
} from "./middleware/limiter.middleware.js";

export type { ApiLimiterStorage } from "./utils/limiter_storage/limiter.storage.js";

export type {
  IJwtHandler,
  ConfigurationObject,
} from "./utils/jwt/jwt.handler.js";

/**
 * Exporting JWT handlers
 */
import { JwtHandler as h, IJwtHandler } from "./utils/jwt/jwt.handler.js";
const JwtHandler = h as unknown as IJwtHandler;
export { JwtHandler };
