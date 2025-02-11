import { HydratedDocument, Model, Schema, Types } from "mongoose";
import validator from "validator";
const { isEmail } = validator;
import { JwtHandler } from "../../utils/jwt/jwt.handler.js";
import { UnauthorizedError } from "../../errors/errors.js";
import { UserDocumentType } from "../users/users.js";

interface IJsonWebToken {
  _id: Types.ObjectId;
  refreshToken: string;
  accessToken: string;
  email: string;
  createdAt?: Date;
  enabled?: boolean;
}

interface IJsonWebTokenMethods {
  validateRefreshToken();
  validateAccessToken();
}

interface IJsonWebTokenModel
  extends Model<IJsonWebToken, object, IJsonWebTokenMethods> {
  createTokenPair(
    user,
    expirations?: { accessToken?: string; refreshToken?: string },
  ): Promise<HydratedDocument<IJsonWebToken, IJsonWebTokenMethods>>;
}

function createJwtSchema(
  userModel: UserDocumentType,
): Schema<IJsonWebToken, IJsonWebTokenModel, IJsonWebTokenMethods> {
  const jwtSchema = new Schema<
    IJsonWebToken,
    IJsonWebTokenModel,
    IJsonWebTokenMethods
  >(
    {
      refreshToken: {
        type: String,
        required: true,
      },
      accessToken: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        validate: {
          validator: async function (value): Promise<boolean> {
            const isValidMail = isEmail(value);
            if (isValidMail) {
              return !!(await userModel.exists({ email: value }));
            }
            return false;
          },
        },
      },
      enabled: {
        type: Boolean,
        default: true,
      },
    },
    { timestamps: { createdAt: true, updatedAt: false } },
  );

  jwtSchema.static(
    "createTokenPair",
    async function createTokenPair(
      user,
      expirations: { accessToken?: string; refreshToken?: string } = {},
    ): Promise<HydratedDocument<IJsonWebToken, IJsonWebTokenMethods>> {
      const refreshToken = JwtHandler.getInstance().signRefreshToken(
        user,
        expirations.refreshToken,
      );
      const accessToken = JwtHandler.getInstance().signAccessToken(
        user,
        expirations.accessToken,
      );
      // Other token are disabled
      await this.updateMany({ email: user.email }, { enabled: false });
      return new this({
        refreshToken: refreshToken,
        accessToken: accessToken,
        email: user.email,
      }).save();
    },
  );

  jwtSchema.method(
    "validateRefreshToken",
    async function validateRefreshToken() {
      if (!this.enabled) {
        throw new UnauthorizedError(
          "The token is disabled, please login again",
        );
      }
      return JwtHandler.getInstance().verifyRefreshToken(this.refreshToken);
    },
  );

  jwtSchema.method("validateAccessToken", async function validateAccessToken() {
    if (!this.enabled) {
      throw new UnauthorizedError("The token is disabled, please login again");
    }
    return JwtHandler.getInstance().verifyAccessToken(this.accessToken);
  });
  return jwtSchema;
}

export { IJsonWebToken, IJsonWebTokenModel, createJwtSchema };
