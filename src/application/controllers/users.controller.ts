import { Request, Response } from 'express';
import UsersService from '../../domain/services/users.service';

class UsersController {
    async findAll(req: Request, res: Response) {
        const { statusCode, body} = await UsersService.findAll(req.query);
        return res.status(statusCode).json(body);
    }

    async create(req: Request, res: Response) {
        const { statusCode, body } = await UsersService.create(req.body);
        return res.status(statusCode).json(body);
    }
}

export default new UsersController();