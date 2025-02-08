import mongoose from "mongoose";
import {
    User,
    IUser,
    UserDocumentType,
    ISource,
    SourceDocumentType,
    Source,
} from "@mini-roostico/api-common";

export const UserModel = mongoose.model<IUser, UserDocumentType>("Users", User);

export const SourceModel = mongoose.model<ISource, SourceDocumentType>("Source", Source);