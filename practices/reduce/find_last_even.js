'use strict';

function find_last_even(collection) {
  //在这里写入代码
  let arr;
  arr = collection.filter(e=>e%2==0);
  return arr[arr.length-1];
}

module.exports = find_last_even;
