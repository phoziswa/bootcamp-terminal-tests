module.exports = function (reg,location){
      var numberOfRegs = [];
    var splittedRegs = reg.split(',');
     for (var i=0; i<splittedRegs.length;i++){
       var allRegs = splittedRegs[i];
       var allRegsTrimmed = allRegs.trim();
       if (allRegsTrimmed.startsWith(location))
         numberOfRegs.push(allRegsTrimmed);
       }
       return(numberOfRegs.length);
     }
     