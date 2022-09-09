import { Operations } from './interface'

export class Handler implements Operations{

    constructor(){

    }

    /**
     * 
     * @param url url of the query 
     * @returns a list of all the numbers  
     */
    static extract = ( url : string) : number[] =>{ 
        return url.split(',').map(e => Number.parseInt(e)).filter( e => !isNaN(e))
    }

    /**
     * 
     * @param res response object
     * handles invalid command requests
     */
    static error( res : any ) {

        console.log("\x1b[31m" + " [ ERROR ] " + "\x1b[0m" + " [ INVALID QUERY ]" )
        res.status(404).end("<code> [ error ] :: [ Invalid request ] </code>")

    }


    add() {
        return ( req ? :  any , res ? : any ) =>{
                const queryData : any  = req.query.values ? req.query.values : 0 ;
                if(queryData === 0) Handler.error(res)
                else res.send(`<code>${ Handler.extract(queryData).reduce( ( a, b ) => a + b)}</code>`);
        }
        
            

    }
    sub() {
        return ( req ? : any , res ? : any) => {
                const queryData : any  = req.query.values ? req.query.values : 0 ;
                if(queryData === 0) Handler.error( res ) 
                else res.send(`<code>${Handler.extract(queryData).reduce( ( a, b ) => a - b )}</code>`)
        }
    }
    mul() {

        return ( req ?: any , res ? : any) => {
                const queryData : any  = req.query.values ? req.query.values : 0 ;
                if( queryData === 0 ) Handler.error( res ) 
                else res.send( `<code>${ Handler.extract(queryData).reduce((a , b) => a * b )}</code>` )
        }
            
    }
    div() {

        return ( req ?: any , res ? : any) => {
                const queryData : any  = req.query.values ? req.query.values : 0 ;
                if( queryData === 0 ) Handler.error( res ) 
                else res.send( `<code>${ Handler.extract(queryData).reduce((a , b) => a / b )}</code>` )
        }
    }

    error(){
        return ( req ?: any , res ? : any) => {
                Handler.error( res ) 
        }
    }
}

