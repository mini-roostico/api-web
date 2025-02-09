import mongoose, { model } from "mongoose";
import {
  User,
  IUser,
  UserDocumentType,
  ISource,
  SourceDocumentType,
  Source,
  IJsonWebToken,
  IJsonWebTokenModel,
  createJwtSchema,
} from "@mini-roostico/api-common";

export const UserModel = mongoose.model<IUser, UserDocumentType>("Users", User);

export const SourceModel = mongoose.model<ISource, SourceDocumentType>(
  "Source",
  Source,
);

const Jwt = createJwtSchema(UserModel);
export const JwtModel = model<IJsonWebToken, IJsonWebTokenModel>("Jwt", Jwt);
