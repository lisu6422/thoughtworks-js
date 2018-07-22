'use strict';
function rank_by_two_large_one_small(collection) {
  //这里写代码。。。
  let arr = collection.sort(function (x, y) {
    return x > y;
  });

  for (let i = 0; i < arr.length; i = i + 3) {
    if (i + 2 <= arr.length - 1) {
      for (let j = i; j < i + 2; j++) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
module.exports = rank_by_two_large_one_small;
