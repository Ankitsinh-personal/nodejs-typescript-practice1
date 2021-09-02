import { NextFunction, Request, Response } from "express";
import { controller } from "../decorators/controller";
// import {bodyValidator, controller, get , post , use} from "../decorators/routes";

import {  get , post } from "../decorators/routes";
import path from 'path'
function requireAuth(req:Request, res:Response , next: NextFunction){
    if(req.session && req.session.loggedIn){
      next();
      return
    }
    res.status(403)
    res.send('not permitted')
  }
  
@controller('/auth')
class LoginController {
    @get('/login')
    getLogin(req:Request,res:Response){
        // console.log("get login data");
        
        // res.send(
        //     `
        //     <form method="POST">
        //         <div>
        //             <label> Email </label>
        //             <input name="email"/>
        //         </div>
        //         <div>
        //             <label> Password </label>
        //             <input name="password" type="password"/>
        //         </div>
        //         <button type='submit'>Submit</button>
        //     </form>
        //     `
        // )
        const srcFolder = path.join(__dirname,'../../src')
        const indexFile = path.join(srcFolder,'index.html')        
        res.sendFile(indexFile)
    }

    @post('/login')
    postLogin(req:Request,res:Response){
        
        const { email , password } = req.body;
    
        if(email=="aaa" && password=='123'){
            req.session = { loggedIn: true };
            res.redirect('/')
        }
        else{
            console.log('invalid email or password');   
            res.redirect('/auth/login')
        }
    }
    
    
    @get('/logout')
    getLogout(req:Request,res:Response){
        req.session = undefined;
        res.redirect('/')
    }


}