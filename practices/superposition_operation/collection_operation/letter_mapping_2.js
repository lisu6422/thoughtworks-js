'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let sum = collection.reduce(function(x,y){
return x +y;
  });

  return String.fromCharCode(96 + parseInt(sum/(collection.length-1)));
}

module.exports = average_to_letter;

