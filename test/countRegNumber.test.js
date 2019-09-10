let assert = require("assert");
let countRegNumber = require("../countRegNumber")

describe('countRegNumber' , function(){
    it('should return the number of registration numbers in the string' , function(){
        
        assert.deepEqual(countRegNumber('CA 182736,CY 523519,CJ 812328'),(3));
    });
    it('should return 2 registration numbers in the string' , function(){
        
        assert.deepEqual(countRegNumber('CA 182736,CY 523519'),(2));
    });
});