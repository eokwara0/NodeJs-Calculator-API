import axios, { AxiosResponse } from 'axios'
import {App} from '../../src/app'


const app: App = new App()
app.setPort(8080)

async function result(url: string) {

    try {
        const data = await axios.get(url);
        return data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            return JSON.stringify(err);
        }
    }


}

beforeEach(() => { app.start() });

afterEach(() => { app.stop() });

describe( " Invalid route request " , ()  => {
    test(" Invalid route URL ", async () => {
        const data = await result("http://localhost:8080/calclator/add")
        const info = JSON.parse(data as string );
        expect( info.status ).toEqual( 404 )
    })
})



describe( " valid add request " , () => {
    test(" Adding 1 + 2 + 3 = 6  ", async () => {
        const data : AxiosResponse<any, any> | undefined | string = await result("http://localhost:8080/calculator/add?values=1,2,3")
        const info = (data as AxiosResponse<any, any> )  ;
        
        expect( info.status ).toEqual( 200 )
        expect( info.statusText ).toEqual("OK") ;
        expect( info.data ).toEqual( "<code>6</code>")
})
})
