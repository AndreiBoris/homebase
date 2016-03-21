'use strict';
/* globals define, it, describe, expect */

define(['jquery'], function($){

  describe('title', function(){
      it('has correct text', function(){
        expect($('#title').text()).toEqual('Living on the Land');
      })
  })

})