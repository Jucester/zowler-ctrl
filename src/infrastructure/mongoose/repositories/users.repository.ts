import { Model } from "mongoose";
import User from "../schemas/users/user.schema";

class UserRepository {
  private _model: Model<any, any>;

  constructor(model: Model<any, any>) {
    this._model = model;
  }

  async findAll() {
    try {
      const res = await this._model.find();
      return [res, null];
    } catch (error) {
      return [null, error];
    }
  }

  async create(body: any) {
    try {
      const res = await this._model.create(body);
      return [res, null];
    } catch (error) {
      return [null, error];
    }
  }
}

export default new UserRepository(User);
