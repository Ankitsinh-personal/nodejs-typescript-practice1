import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import express ,{Request , Response} from "express";
// import { appRouter } from "./decorators/routes";
import './controllers/LoginController';
import './controllers/RootController';
import { appRouter } from "./decorators/controller";

import * as dotenv from 'dotenv';
dotenv.config()

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieSession({keys: ['dhsjhfhdskd']}))

app.use(appRouter)

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`port listen at : ${port}`);
})