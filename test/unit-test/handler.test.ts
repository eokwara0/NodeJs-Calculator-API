import { Handler } from '../../src/handler'

describe( " handler test " , () => {
    test( " String of Numbers  " , () => {
        expect( Handler.extract( "1,2,3,4,5,6,7")).toEqual([1,2,3,4,5,6,7]);
    })
})

describe( " Handler test for method extract " , () => {
    test( " test invalid url " , () => {
        expect ( Handler.extract( "nan, done , gone" ) ).toEqual( [] )
    })
})