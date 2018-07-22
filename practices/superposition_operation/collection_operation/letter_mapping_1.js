'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  let arr = [], res = [];
  arr = collection.filter(function(x){
    return x % 2 === 0;
  });
  res = arr.map(function(x){
    return String.fromCharCode(96 + parseInt(x));
  });
return res;
}

module.exports = even_to_letter;
