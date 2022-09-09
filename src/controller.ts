
import { Operations as operation, Operations } from './interface'
import { Handler, Handler as handler  } from './handler';
import { Router } from 'express';


/**
 * Controller class 
 * creates routes and handles each route
 */
class controller implements operation , Operations{

    handler : Handler  ;            // handler
    router  : Router ;             // router 


    constructor(){
        this.router  = Router()    
        this.handler = new handler() ; 
    }

    /**
     * creates router for add api
     * @returns add route
     */
    add() {
        return this.router.get( '/calculator/add', this.handler.add())
    }

    /**
     * creates route for add api
     * @returns subtract route
     */
    sub() {
        return this.router.get( '/calculator/subtract', this.handler.sub() );
    }

    /**
     * creates route for multiply api
     * @returns subtract route
     */
    mul() {
        return this.router.get( '/calculator/multiply', this.handler.mul() );
    }

    /**
     * creates route for divide api
     * @returns divide route
     */
    div() {
        return this.router.get( '/calculator/divide', this.handler.div() )
    }

    error(){
        return this.router.get( '*' , this.handler.error())
    }
    
}

export const controller_ = new controller();