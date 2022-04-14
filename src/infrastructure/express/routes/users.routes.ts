import { Application, Router } from "express";
import UsersController from "../../../application/controllers/users.controller";

export const UserRoutes = (app: Application) => {
    const router: Router = Router();

    app.use('/api/users', router);
    app.get('/api/users', UsersController.findAll);


    return router;
}