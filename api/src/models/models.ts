import mongoose, { model } from "mongoose";
import {
  User,
  IUser,
  UserDocumentType,
  ISource,
  SourceDocumentType,
  Source,
  UserRepository,
  SourceRepository,
  IJsonWebToken,
  IJsonWebTokenModel,
  createJwtSchema,
} from "@mini-roostico/api-common";

const UserModel = mongoose.model<IUser, UserDocumentType>("Users", User);
const SourceModel = mongoose.model<ISource, SourceDocumentType>(
  "Source",
  Source,
);
const Jwt = createJwtSchema(UserModel);

export const UserRepositoryModel = new UserRepository(UserModel);
export const SourceRepositoryModel = new SourceRepository(SourceModel);
export const JwtModel = model<IJsonWebToken, IJsonWebTokenModel>("Jwt", Jwt);
