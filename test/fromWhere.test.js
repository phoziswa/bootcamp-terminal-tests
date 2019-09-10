let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('fromWhere' , function(){
    it('should return CY if the car is from Bellville' , function(){

        assert.equal(fromWhere('CY'),'Bellville');
   });

   it('should return CJ if the car is from Paarl' , function(){

    assert.equal(fromWhere('CJ'),'Paarl');
});
it('should return CA if the car is from Cape town' , function(){

    assert.equal(fromWhere('CA'),'Cape Town');
});
});