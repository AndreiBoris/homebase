'use strict';
/* globals define, it, describe, expect */

define(['app/testmodule'], function(testmodule){

  describe('jasmine', function(){
      it('has been loaded', function(){
        expect(testmodule.meaning).toEqual(42);
      })
  })

})