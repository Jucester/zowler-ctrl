import express from "express";
import morgan from 'morgan';
import { setupRoutes } from "./routes";
import os from 'os';
import { connectDB } from "../mongoose/connection";

export class App {

    private port: string;
    private stage: string;
    public app: express.Application;

    constructor(port: string = '3000', stage: string = 'DEV') {
        this.port = port;
        this.stage = stage;
        this.app = express();

        this.database();
        this.middlewares();
        this.routes();
    }

    private async database() {
        await connectDB()
    }


    private middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(morgan('combined'));
    }

    private routes() {
        setupRoutes(this.app);
    }

    public listen() {
        const app = this.app.listen(this.port, () => {
            console.log('Stage', this.stage);
            console.log(`Server executing on ${os.hostname()}:${this.port}`);
        })
    }
}