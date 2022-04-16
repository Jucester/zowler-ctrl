import { App } from "./infrastructure/express/index";
import dotenv from 'dotenv';
dotenv.config();

const app = new App(process.env.PORT, process.env.STAGE);
app.listen();