import mongoose, {Model, Schema, Types} from "mongoose"

type Func = (...args: unknown[]) => unknown

export interface ISource {
    parameters?: Map<string, string | number | boolean>, // TODO check if is okay like this
    macros?: Map<string, Func>,
    configurations?: Map<string, unknown[]>,
    user: Types.ObjectId,
}

interface SourceDocumentType extends Model<ISource> {
    getSourcesForUser(userId: Types.ObjectId): Promise<ISource[]>;
}

const Source = new Schema<ISource, SourceDocumentType>({
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
});

Source.static('getSourcesForUser', async function getSourcesForUser(userId: Types.ObjectId){
    return this.find({ user: userId }).lean().exec();
});

const SourceModel = mongoose.model<ISource, SourceDocumentType>("Source", Source);
export {SourceModel as Source};
