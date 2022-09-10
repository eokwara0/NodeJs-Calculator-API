import {App} from '../../src/app'
import { result } from "../../src/interface";
import { AxiosResponse } from 'axios'

let app = new App()
app.setPort(3030)

beforeEach( () => {
    app.start() 
})

afterEach( () => {
    app.stop() 
})


describe( " SUBTRACT ROUTE " , () => {
    test( " INVALID ROUTE " , async () => {
        const data = await result( "http://localhost:3030/calculator/subtract" )
        const info = JSON.parse( data as string );
        expect( info.status ).toEqual( 404 )
    })
})