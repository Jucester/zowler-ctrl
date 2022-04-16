import UsersRepository from "../../infrastructure/mongoose/repositories/users.repository";
class UsersService {

    private _repo: any;

    constructor(public readonly repo: any) {
        this._repo = repo;
    }

    async findAll(queryParams: any) {
        return this._repo.findAll()
    }

    async create(entity: any) {
        return this._repo.create(entity);
    }
}

export default new UsersService(UsersRepository);