import { IUser, UserDocumentType } from "../users/users.js";

export class UserRepository {
  private User: UserDocumentType;

  constructor(UserModel: UserDocumentType) {
    this.User = UserModel;
  }

  async createUser(user: IUser) {
    return new this.User(user).save();
  }

  async editUser(email: string, data) {
    return this.User.updateOne({ email: email }, data);
  }

  async getUser(email: string) {
    return this.User.findOne({ email: email });
  }

  async deleteUser(email: string) {
    return this.User.deleteOne({ email: email });
  }

  async deleteManyUsers(properties: object) {
    return this.User.deleteMany(properties);
  }
}
