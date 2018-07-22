'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let arr = collection.filter(function (x) {
    return !(x % 2 === 0);
  });
  return arr.reduce(function (x, y) {
    return x + y;
  })/arr.length;
}

module.exports = average_uneven;
