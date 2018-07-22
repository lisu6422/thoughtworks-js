'use strict';

function amount_even(collection) {

  //在这里写入代码
  let arr = collection.filter(function (x) {
    return x % 2 === 0;
  });
  return arr.reduce(function (x, y) {
    return x + y;
  });
}

module.exports = amount_even;
