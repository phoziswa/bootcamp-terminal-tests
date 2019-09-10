let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");


describe('countAllFromTown' , function(){
    it('should return number registration numbers in the string that is for that town' , function(){
         
         assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
     });
     it('should return nothing if it is not from town' , function(){
         
         assert.deepEqual(countAllFromTown('GP'),0);
     });
 
 });