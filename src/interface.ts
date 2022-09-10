export  type Operations = {
    add( req ? : any , res ? : any) : any ;
    sub( req ? : any , res ? : any ) : any ;
    mul( req ? : any , res ? : any ) : any ;
    div( req ? : any , res ? : any ) : any ;
}

export const colors = {
    bright : '\x1b[1m',
    dim : '\x1b[2m',
    under : "\x1b[4m",
    reverse : "\x1b[7m" ,
    hidden : "\x1b[8m" ,
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    reset: '\x1b[0m'
}
