import { Router } from "express"
import 'reflect-metadata'
import { MetadataKeys } from "./Enums/MetadataKeys";
import { Methods } from "./Enums/Methods";

const router = Router()

export function controller(routePrefix:string){

    return function(target:Function){


        for(let key in target.prototype){

            const routeHandler = target.prototype[key];
            // const path = Reflect.getMetadata('path', target.prototype, key);
            // const method:Methods = Reflect.getMetadata('method', target.prototype, key);
            // const middlewares = Reflect.getMetadata('middleware', target.prototype, key) || [];

            const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
            const method:Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];

            if(path){
                console.log('method:',`router[${method}](${routePrefix}${path})`);
                router[method](`${routePrefix}${path}`,...middlewares, routeHandler)
                // if(method === 'get'){
                //     router.get(`${routePrefix}${path}`,...middlewares, routeHandler)
                // }
                // else if(method === 'post'){
                //     router.post(`${routePrefix}${path}`,...middlewares, routeHandler)
                // }
               
            }
        }
    }
}

export const appRouter = router