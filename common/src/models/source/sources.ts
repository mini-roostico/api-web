import { Model, Schema, Types } from "mongoose";

type Func = (...args: unknown[]) => unknown;

interface ISource {
  name: string;
  subjects: Map<string, string>;
  parameters?: Map<string, string | number | boolean>;
  macros?: Map<string, Func>;
  configurations?: Map<string, unknown[]>;
  user: Types.ObjectId;
  last_update?: Date;
}

interface SourceDocumentType extends Model<ISource> {
  getSourcesForUser(userId: Types.ObjectId): Promise<ISource[]>;
}

const Source = new Schema<ISource, SourceDocumentType>({
  name: {
    type: String,
    required: true,
  },
  subjects: {
    type: Map<string, string>,
    required: true,
  },
  parameters: {
    type: Map<string, string | number | boolean>,
    required: false,
  },
  macros: {
    type: Map<string, Func>,
    required: false,
  },
  configurations: {
    type: Map<string, unknown[]>,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  last_update: {
    type: Date,
    default: Date.now,
  },
});

Source.static(
  "getSourcesForUser",
  async function getSourcesForUser(userId: Types.ObjectId) {
    return this.find({ user: userId }).lean().exec();
  },
);

export { ISource, SourceDocumentType, Source };
