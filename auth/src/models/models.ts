import mongoose from "mongoose";
import {
    User,
    IUser,
    UserDocumentType,
} from "@mini-roostico/api-common";

export const UserModel = mongoose.model<IUser, UserDocumentType>("Users", User);