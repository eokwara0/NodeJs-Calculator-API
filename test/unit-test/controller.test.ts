import {describe, expect, test} from '@jest/globals'
import e, { Router } from 'express';
import { controller_ } from '../../src/controller'
import { Handler } from '../../src/handler';




/**
 * TESTING RETURN VALUE OF EACH METHOD
 * WITHIN THE CONTROLLER CLASS
 */

describe( ' controller method add ', ( ) => {
  test( " Test Add Instance " ,  ( ) => {
    expect( controller_.add() instanceof e.Router() );
  })
});

describe( ' controller method mul ', ( ) => {
  test( " Test Multiply Instance " ,  ( ) => {
    expect( controller_.mul() instanceof e.Router() );
  })
})

describe( ' controller method div ', ( ) => {
  test( " Test Divide Instance " ,  ( ) => {
    expect( controller_.div() instanceof Router);
  })
})

describe( ' controller method sub ', ( ) => {
  test( " Test Subtract Instance " ,  ( ) => {
    expect( controller_.sub() instanceof e.Router() );
  })
})


/**
 * TESTING PROPERTIES WITHIN 
 * controller_ CLASS
 */

describe( ' controller properties ' , () => {
  test( ' Test controler_ handler property ' , () => {
    expect( controller_.handler instanceof Handler )
  })
})


describe( ' controller properties ' , () => {
  test( ' Test controller_ router property ' , () => {
    expect( controller_.router instanceof Router)
  })
})


