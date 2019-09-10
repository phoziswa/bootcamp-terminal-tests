module.exports = function(reg){
      var number2 = [];
    var location = reg.split(', ');
     for(var i=0; i<location.length;i++){
       var number = location[i];
       //console.log(number)
       if(number.startsWith('CJ')){
       number2.push(number);
       }
           }
      return(number2.length)
    }
    var reg = "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123";