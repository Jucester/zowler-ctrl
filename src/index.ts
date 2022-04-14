import { App } from "./infrastructure/express/index";
import 'dotenv';

const app = new App(process.env.PORT, process.env.STAGE);
app.listen();