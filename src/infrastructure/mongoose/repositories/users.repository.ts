import { Model } from 'mongoose';
import User from '../schemas/users/user.schema';

class UserRepository {

    private _model: Model<any, any>;

    constructor(model: Model<any, any>) {
        this._model = model;
    }

    async findAll() {
        return await this._model.find();
    }

    async create(body: any) {
        return await this._model.create(body);
    }
}

export default new UserRepository(User);