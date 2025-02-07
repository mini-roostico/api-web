import { StatusCodes } from "http-status-codes";
import { ErrorTypes } from "../../errors/error.types.js";

export interface DefaultResponse {
  success: boolean;
  // date: Date,
  code: StatusCodes;
}

export interface Response extends DefaultResponse {
  data: unknown;
}

export interface ErrorResponse extends DefaultResponse {
  error: {
    name: string;
    type: ErrorTypes;
    message: string;
  };
}
