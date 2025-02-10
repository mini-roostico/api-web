import { model } from "mongoose";
import {
  User,
  IUser,
  UserDocumentType,
  IJsonWebToken,
  IJsonWebTokenModel,
  createJwtSchema,
  UserRepository,
} from "@mini-roostico/api-common";

const UserModel = model<IUser, UserDocumentType>("Users", User);

const Jwt = createJwtSchema(UserModel);
export const UserRepositoryModel = new UserRepository(UserModel);
export const JwtModel = model<IJsonWebToken, IJsonWebTokenModel>("Jwt", Jwt);
