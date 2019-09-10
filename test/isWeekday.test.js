let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday' , function(){
    it('shound return false if it is not the day of the week ' , function(){
        
        assert.equal(isWeekday('Saturday'),false)       
    });
    it('should return true if it is a weekday' , function(){
        assert.equal(isWeekday('Monday'), true);
});
 });
