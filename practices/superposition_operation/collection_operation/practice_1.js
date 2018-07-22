'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  let arr = collection.map(function(x){
    return x*3 + 2;
  });
  
  let res = arr.reduce(function(x, y){
    return x + y;
  });
  return res;
}

module.exports = hybrid_operation;

