'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  let arr = [];
  let len = collection.length;
  let temp = collection[0];
  arr.push(temp);
  for(let i=1; i<len; i++)
  {
    if(collection[i] != temp)
    {
      temp = collection[i];
      arr.push(temp);
    }
  }
  return arr;
}

module.exports = choose_no_repeat_number;
