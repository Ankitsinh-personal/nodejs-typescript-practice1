import { NextFunction, Request, Response } from "express"
import { controller } from "../decorators/controller";
import { use } from "../decorators/middleware";
import {  get } from "../decorators/routes";


function requireAuth(req:Request, res:Response , next: NextFunction){
    if(req.session && req.session.loggedIn){
      next();
      return
    }
    res.status(403)
    res.send('login is required')
  }
  
@controller('')
class RootController {
    @get('/')
    getRoot(req: Request, res: Response) {

        if (req.session && req.session.loggedIn) {
            res.send(`
        <div>
            <div> You are loggedIn </div>
            <a href="/auth/logout" >Logout</a>
        </div>
        `)
        }
        else {
            res.send(`
        <div>
            <div> You are not loggedIn </div>
            <a href="/auth/login" >Login</a>
        </div>
        `)
        }
    }

    @get('/protected')
    @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.send('welcome to protected route, logged in user')
    }

}