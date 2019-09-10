let assert =  require("assert");
let findItemsOver = require("../findItemsOver");

describe('findItemsOver' , function(){
    it('should return products that have quantity higher than the threshold' , function(){
 
   assert.deepEqual(findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37}], 20),[{"name":"pears","qty":37}]);
   });
   it('should return an emty array if products  have quantity not higher than the threshold' , function(){
  
    assert.deepEqual(findItemsOver([{"name":"apples","qty":3},{"name":"apples","qty":10}], 20),[]);
    });
    
});