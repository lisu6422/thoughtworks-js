'use strict';

function choose_even(collection) {

  //在这里写入代码
  let arr = [];
  arr = collection.filter(function (x) {
    return x % 2 === 0;
  });
  return arr;
}

module.exports = choose_even;
