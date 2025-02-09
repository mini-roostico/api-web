import { Model, Schema, Types } from "mongoose";

type Subject = Map<string, string>;
type Parameter = Map<string, Array<string>>;
type Macro = Map<string, Array<string>>;

interface ISource {
  name: string;
  subjects: Array<Subject>;
  parameters?: Array<Parameter>;
  macros?: Array<Macro>;
  configurations?: Map<string, string>;
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
    type: [Map],
    required: true,
  },
  parameters: {
    type: [Map],
    required: false,
  },
  macros: {
    type: [Map],
    required: false,
  },
  configurations: {
    type: Map,
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

export { ISource, SourceDocumentType, Source, Subject, Macro, Parameter };
