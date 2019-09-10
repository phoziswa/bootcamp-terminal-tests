let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill")

describe('totalPhoneBill' , function(){
    it('should take in a string calls made  ' , function(){

        assert.equal(totalPhoneBill("call, call"),"R5.50");
   });

   it('should take in a string sms sent' , function(){

    assert.equal(totalPhoneBill(" sms, sms, sms"),"R1.95");
    
});
it('should take in a string calls made and sms sent ' , function(){

    assert.equal(totalPhoneBill("call, sms, call, sms, sms"),"R7.45")
});

});