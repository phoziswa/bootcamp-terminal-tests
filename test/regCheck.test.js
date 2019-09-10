let assert = require("assert");
let regCheck = require("../regCheck");
describe('regCheck' , function(){
    it('should check if the registration number is for GP, L, EC, MP registration plates' , function(){
        
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });

        it('should returns false if the registration number is not for GP, L, EC, MP registration plates' , function(){
        
        assert.equal(regCheck('DV 23 LP GP', 'MP'),false);
    });
});