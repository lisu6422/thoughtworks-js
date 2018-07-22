'use strict';
var number_map_to_word_over_26 = function(collection){
 
  let res = [];
 

res = collection.map(function(x){
    let num = x;
    let str = '';
    while(num > 0)
    {
      let temp = num % 26;
      num = parseInt(num / 26);      
      str = String.fromCharCode(96 + parseInt(temp)) + str;
    }   
    return str;
});
return res;
};

module.exports = number_map_to_word_over_26;
