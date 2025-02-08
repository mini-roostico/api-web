import {model} from "mongoose";
import {
    User,
    IUser,
    UserDocumentType,
    IJsonWebToken,
    IJsonWebTokenModel,
    createJwtSchema,
} from "@mini-roostico/api-common";

export const UserModel = model<IUser, UserDocumentType>("Users", User);

const Jwt = createJwtSchema(UserModel);
export const JwtModel = model<IJsonWebToken, IJsonWebTokenModel>("Jwt", Jwt);
