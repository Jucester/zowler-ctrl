import UsersRepository from "../../infrastructure/mongoose/repositories/users.repository";
class UsersService {
  private _repo: any;

  constructor(public readonly repo: any) {
    this._repo = repo;
  }

  async findAll(queryParams: any) {
    const [res, error] = await this._repo.findAll();

    if (error) {
      return {
        statusCode: 500,
        body: {
          error: error,
        },
      };
    }

    return {
      statusCode: 200,
      body: res,
    };
  }

  async create(entity: any) {
    const [res, error] = await this._repo.create(entity);

    if (error) {
      return {
        statusCode: 500,
        body: {
          error: error
        },
      };
    }
    return {
      statusCode: 200,
      body: res,
    };
  }
}

export default new UsersService(UsersRepository);
