// import { RequestHandler, Router } from 'express'
// import 'reflect-metadata'


// const _router = Router()

// function get(path: string) {
//     return function (target: any, key: string, desc: PropertyDescriptor) {
//         Reflect.defineMetadata('path', path, target, key)
//         _router.get(path,target[key])       //path = '/login'  target[key] = getLogin
//     }
// }

// function post(path: string) {
//     return function (target: any, key: string, desc: PropertyDescriptor) {
//         Reflect.defineMetadata('path', path, target, key)
//         // _router.post(path,target[key])       //path = '/login'  target[key] = postLogin
//     }
// }

// function use(middleware: RequestHandler) {
//     return function (target: any, key: string, desc: PropertyDescriptor) {
//         const middlewares = Reflect.getMetadata(
//             'middleware',
//             target,
//             key
//         ) || [];

//         middlewares.push(middleware)
//         // const middlewares1 = Reflect.getMetadata('middleware', target.prototype, key) || [];
//         _router.get('middleware', ...middlewares , target[key])      //path = '/login'  target[key] = getLogin
//     }
// }

// function bodyValidator(...keys: string[]) {
//     return function (target: any, key: string, desc: PropertyDescriptor) {
//         Reflect.defineMetadata('validator', keys, target, key)
//     }
// }

// function controller(rootPath:string){
//     return function(target: any){
//         for(let key in target.prototype){
//             const path = Reflect.getMetadata('path', target.prototype, key);
//             console.log(`${rootPath}${path}`);
//             // console.log(target.prototype);
//             _router.get(`${rootPath}${path}`,target.prototype[key])
//         }
//     }
// }

// export {get , post, use , bodyValidator , controller}

// export const appRouter = _router



// import { Router } from "express"

///========================================================================
import 'reflect-metadata'
import { MetadataKeys } from './Enums/MetadataKeys'
import { Methods } from './Enums/Methods'


function routeBuilder(method: string) {
    return function (path: string) {
        return function (target: any, key: string, desc: PropertyDescriptor) {
            // Reflect.defineMetadata('path', path, target, key)
            // Reflect.defineMetadata('method', method, target, key)
            Reflect.defineMetadata(MetadataKeys.path, path, target, key)
            Reflect.defineMetadata(MetadataKeys.method, method, target, key)
        }
    }
}

export const get = routeBuilder(Methods.get)
export const post = routeBuilder(Methods.post)



