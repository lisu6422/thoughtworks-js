'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let arr = collection.filter(function(x){
    return !(x % 2 === 0);
  });

  let res = arr.map(function(x){
    return x*3 +2;
  });
  return res;
}

module.exports = hybrid_operation_to_uneven;

