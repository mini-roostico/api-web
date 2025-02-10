import { ISource, SourceDocumentType } from "../source/sources.js";
import { Types } from "mongoose";

export class SourceRepository {
  private Source: SourceDocumentType;

  constructor(SourceModel: SourceDocumentType) {
    this.Source = SourceModel;
  }

  async createSource(source: ISource) {
    return new this.Source(source).save();
  }

  async editSource(sourceId: Types.ObjectId, data) {
    return this.Source.updateOne({ _id: sourceId }, { $set: data });
  }

  async getAllSources() {
    return this.Source.find({});
  }

  async getSourcesForUser(userId: Types.ObjectId) {
    return this.Source.find({ user: userId }).lean().exec();
  }

  async getASourceForUser(userId: Types.ObjectId, sourceId: Types.ObjectId) {
    const sources = await this.getSourcesForUser(userId);
    return sources.find((source) => source._id.equals(sourceId));
  }

  async deleteSource(sourceId: Types.ObjectId) {
    return this.Source.deleteOne({ _id: sourceId });
  }
}
