import { Operations } from './interface'
import { colors } from './interface';


export class Handler implements Operations{

    private query   : object | any  ; 
    private keys     : string [] | any ;
    private isvalid : boolean | any;
    private nums    : number[] | any  ;
    constructor(){

    }

    /**
     * 
     * @param url url of the query 
     * @returns a list of all the numbers  
     */
    static extract = ( url : string ) : number[] => {
        const nums = url.match(/(\d{1,})(?!\w+)/gi)
        return nums === null ? [] : nums.map( ( el ) => Number.parseInt( el ) )
    }

    /**
     * 
     * @param res response object
     * handles invalid command requests
     */
    static error( res : any ) {

        console.log(` ${ colors.red + colors.bright } [ ERROR ] ${ colors.reset } [ INVALID QUERY ] ` )
        res.status(404).send("<code> [ error ] :: [ Invalid request ] </code>")

    }

    static success( res : any , answer : number ){

        console.log( ` ${ colors.green + colors.bright } [ SUCCESSFUL REQUEST ] ${ colors.reset} [ ${ answer } ]`)
        res.send( `<code>${answer}</code>`)

    }


    add() {
        return ( req ? :  any , res ? : any ) =>{

            this.query = ( req.query as object )
            this.keys   = Object.keys( this.query )
            this.isvalid = (  this.keys.length > 0 && this.keys.includes( "values" ) )

            
            if ( !this.isvalid) {

                Handler.error( res )

            }else{

               this.nums = Handler.extract( ( this.query as any ).values )
               this.nums.length == 0 ? Handler.error( res ) : Handler.success( res , this.nums.reduce( ( a : number , b : number  ) => a + b ) ) 


            }
        }
        
            

    }
    sub() {
        return ( req ? : any , res ? : any) => {
            this.query = ( req.query as object )
            this.keys   = Object.keys( this.query )
            this.isvalid = (  this.keys.length > 0 && this.keys.includes( "values" ) )

            
            if ( !this.isvalid) {

                Handler.error( res )

            }else{

               this.nums = Handler.extract( ( this.query as any ).values )
               this.nums.length == 0 ? Handler.error( res ) : Handler.success( res , this.nums.reduce( ( a : number , b : number  ) => a - b ) ) 


            }
        }
    }
    mul() {

        return ( req ?: any , res ? : any) => {
            this.query = ( req.query as object )
            this.keys   = Object.keys( this.query )
            this.isvalid = (  this.keys.length > 0 && this.keys.includes( "values" ) )

            
            if ( !this.isvalid) {

                Handler.error( res )

            }else{

               this.nums = Handler.extract( ( this.query as any ).values )
               this.nums.length == 0 ? Handler.error( res ) : Handler.success( res , this.nums.reduce( ( a : number , b : number  ) => a * b ) ) 


            }
        }
            
    }
    div() {

        return ( req ?: any , res ? : any) => {
            this.query = ( req.query as object )
            this.keys   = Object.keys( this.query )
            this.isvalid = (  this.keys.length > 0 && this.keys.includes( "values" ) )

            
            if ( !this.isvalid) {

                Handler.error( res )

            }else{

               this.nums = Handler.extract( ( this.query as any ).values )
               this.nums.length == 0 ? Handler.error( res ) : Handler.success( res , this.nums.reduce( ( a : number , b : number  ) => a / b ) ) 


            }
        }
    }

    error(){
        return ( req ?: any , res ? : any) => {
                Handler.error( res ) 
        }
    }
}

