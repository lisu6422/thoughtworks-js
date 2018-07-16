'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let arr = [];
  for (var i = 0; i < collection.length; i++) {
    arr = arr.concat(collection[i]);
  }
  return arr;
ß

}

module.exports = double_to_one;
