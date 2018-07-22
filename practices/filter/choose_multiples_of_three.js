'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  let arr = [];
  arr = collection.filter(function (x) {
    return x % 3 === 0;
  });
  return arr;
}

module.exports = choose_multiples_of_three;
