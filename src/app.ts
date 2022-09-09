import { log } from 'console';
import express from 'express';
import { Server, ServerResponse } from 'http';
import { controller_ } from './controller';




export class App {

    private app : any  = express();
    private PORT : number | undefined | string = process.env.PORT || 3000  ;
    private server : Server | undefined ;  


    /**
     * constructor {}
     * @param { None }
     */
    constructor( ){

        this.app.use( controller_.add() )
        this.app.use( controller_.mul() )
        this.app.use( controller_.div() )
        this.app.use( controller_.sub() )
        this.app.use( controller_.error() ) ;
    }

    /**
     * set's the port number 
     */
    public setPort( port : number  ) {
        this.PORT = port ; 
    }

    /**
     * @return {  any   }
     * return port number 
     */
    public port(): any{
        return this.PORT ;
    }

    /**
     * Applying routers to express server
     */
    start(){

        this.server = this.app.listen( this.PORT, () => {
            this.log() 
        } )  // Running server
        

    }

    log(){
        console.log(`\x1b[36m [ SERVER STARTED ] \x1b[0m => http://locahost:${this.PORT}/calculator/<command>?values=1,2,4,5,5,`);
    }

    /**
     * @method stop closes server
     * @param {none}
     */
    stop(){
        this.server?.close() ; 
        console.log( `[ SERVER CLOSED ]` );
        
    }
}











