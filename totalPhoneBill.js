module.exports = function (param){ 
    // console.log(param)
      var phone = param.split(', ');
      //console.log(phone)
     var calls = [];
     var sms = [];
     //console.log(phone)
      for(var i=0;i<phone.length;i++){
       if (phone[i].startsWith('c')){
          calls.push(phone[i]);
        }
        else {
          sms.push(phone[i]);
        }
      }
    var callBill = calls.length *2.75;
    var smsBill = sms.length *0.65;
    var totalBills = callBill + smsBill;
    var totals = totalBills.toFixed(2);   
    var phoneBillTotals = "R" + totals;
      console.log(phoneBillTotals)
      return phoneBillTotals
    
    }