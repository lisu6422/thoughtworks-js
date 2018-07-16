'use strict';

function choose_even(collection) {

  //在这里写入代码
  let arr = [];
  let len = collection.length;
  for(let i=0; i<len; i++)
  {
    if(collection[i] % 2 === 0)
    {
      arr.push(collection[i]);
    }
  }
  return arr;
}

module.exports = choose_even;
