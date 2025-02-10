import { Model, Schema } from "mongoose";
import { MongoError } from "mongodb";
import bcrypt from "bcryptjs";
import validator from "validator";
const { isEmail, isStrongPassword, isAlpha } = validator;
import { BadRequestError } from "../../errors/errors.js";

const SALT_WORK_FACTOR: number = 10;

interface IUser {
  email: string;
  password: string;
  firstName: string;
  secondName: string;
  role: string;
}

interface UserDocumentProps extends IUser, Document {
  comparePassword: (
    password: string,
    next: (err: Error | undefined, same: boolean | undefined) => unknown,
  ) => Promise<boolean>;
}

type UserDocumentType = Model<IUser, object, UserDocumentProps>;

const User = new Schema<IUser, UserDocumentType>({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => isEmail(value),
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => isStrongPassword(value),
      message: "Password is not strong enough",
    },
  },
  firstName: {
    type: String,
    validate: {
      validator: (value: string) => isAlpha(value, "en-US"),
      message: "First name must contain only letters",
    },
  },
  secondName: {
    type: String,
    validate: {
      validator: (value: string) => isAlpha(value, "en-US"),
      message: "Second name must contain only letters",
    },
  },
  role: {
    type: String,
    required: false,
    default: "user",
    validate: {
      validator: (value: string) => value === "user" || value === "admin",
      message: "Role must be either 'user' or 'admin'",
    },
  },
});

User.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
});

User.pre("updateOne", async function (next) {
  try {
    const update = this.getUpdate() as Record<string, unknown>;

    if (update?.password) {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      update.password = await bcrypt.hash(update.password, salt);
      this.setUpdate(update);
    }

    next();
  } catch (error) {
    next(error);
  }
});

User.post("save", function (error: Error, _doc: Document, next) {
  if (error && error instanceof MongoError) {
    if (error.code === 11000) {
      return next(new BadRequestError("The entered email is already present"));
    }
    next(error);
  }

  next();
});

User.methods.comparePassword = function (
  password: string | Buffer,
  next: (err: Error | undefined, same: boolean | undefined) => unknown,
) {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error) {
      return next(error, undefined);
    }
    return next(undefined, isMatch);
  });
};

export { User, IUser, UserDocumentType };
