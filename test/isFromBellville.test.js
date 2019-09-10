let assert = require('assert');
let isFromBellville = require("../isFromBellvile");


describe('isFromBellville' , function(){
    it( 'should returns true if a registration number is for Bellville.' , function(){
        
        assert.equal(isFromBellville('CY'),true);
    });

    it( 'should returns false if registration number is not for Bellville' , function(){
        
        assert.equal(isFromBellville('CJ'),false);
    });
});