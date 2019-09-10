let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl' , function(){
    var reg = "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123";

    it('should return egistration numbers separated with commas and returns the number of registration numbers in the string for Paarl' , function(){  
        assert.equal(countAllPaarl(reg), 3);
    });
    it('should return nothing if it is not from Paarl' , function(){  
        assert.equal(countAllPaarl('CL 123-546, CK 345'), 0);
    });
    
});