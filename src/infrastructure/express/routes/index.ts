import { Application } from "express";
import { UserRoutes } from "./users.routes";


export const setupRoutes = (app: Application) => {
    UserRoutes(app)
}