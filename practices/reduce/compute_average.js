'use strict';

function compute_average(collection) {
  //在这里写入代码
  let res = 0;
  res = collection.reduce(function(x,y){
    return x + y;
  });

  res = res / collection.length;
  return res;
}

module.exports = compute_average;

