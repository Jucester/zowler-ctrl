import UsersRepository from "../../infrastructure/mongoose/repositories/users.repository";
class UsersService {

    private _repo: any;

    constructor(public readonly repo: any) {
        this._repo = repo;
    }

    async findAll(queryParams: any) {
        const res = await this._repo.findAll();
        return {
            statusCode: 200,
            body: res,
        }
    }

    async create(entity: any) {
        const res = await this._repo.create(entity);
        return {
            statusCode: 200,
            body: res,
        }
    }
}

export default new UsersService(UsersRepository);