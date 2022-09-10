import { AxiosResponse } from 'axios'
import {App} from '../../src/app'
import { result } from '../../src/interface'


const app: App = new App()
app.setPort(3030)



beforeEach(() => { app.start() });

afterEach(() => { app.stop() });

describe( " Invalid route request " , ()  => {
    test(" Invalid route URL ", async () => {
        const data = await result("http://localhost:3030/calclator/add")
        const info = JSON.parse(data as string );
        expect( info.status ).toEqual( 404 )
    })
})



describe( " valid add request " , () => {
    test(" Adding 1 + 2 + 3 = 6  ", async () => {
        const data : AxiosResponse<any, any> | undefined | string = await result("http://localhost:3030/calculator/add?values=1,2,3")
        const info = (data as AxiosResponse<any, any> )  ;
        
        expect( info.status ).toEqual( 200 )
        expect( info.statusText ).toEqual("OK") ;
        expect( info.data ).toEqual( "<code>6</code>")
})
})

describe( " test missing values  " , () => {
    test(" Adding 1 + 3 = 4  ", async () => {
        const data : AxiosResponse<any, any> | undefined | string = await result("http://localhost:3030/calculator/add?values=1,,3")
        const info = (data as AxiosResponse<any, any> )  ;
        
        expect( info.status ).toEqual( 200 )
        expect( info.statusText ).toEqual("OK") ;
        expect( info.data ).toEqual( "<code>4</code>")
})
})

describe( " Invalid values " , () => {
    test(" Adding one + two  ", async () => {
        const data  = await result("http://localhost:3030/calculator/add?values=one,two")
        const info = JSON.parse(data as string );
        expect( info.status ).toEqual( 404 )
        expect( info.message ).toEqual( "Request failed with status code 404")
})
})
