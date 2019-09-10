module.exports = function (list1,threshold){
    //console.log(threshold)
    console.log(list1)
  var items = [];
  for(var i=0; i<list1.length;i++){
   var products = list1[i].qty
   if(products > threshold){
     items.push(list1[i])
  }
  }
    return items
  }