let assert = require("assert");
let transportFee = require("../transportFee");


describe('trasportFee' , function(){
    it('should return R20 if a person is working in the morning' , function(){

        assert.equal(transportFee("morning"),"R20");
   });

   it('should return R10 if a person is working in the afternoon ' , function(){

    assert.equal(transportFee("afternoon"),"R10");
});
it('should be free if a person is working nightshift' , function(){

    assert.equal(transportFee("nightshift"),"free");
});
});