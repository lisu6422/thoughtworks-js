'use strict';

function double_to_one(collection) {

  //在这里写入代码

  let arr = [];
  let temp;
  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < collection[i].length; j++) {
      temp = collection[i][j];
      if (!arr.includes(temp)) {
        arr.push(temp);
      }

    }
  }
  return arr;
}

module.exports = double_to_one;
