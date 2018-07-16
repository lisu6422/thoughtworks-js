'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  let arr = [];
  let len = collection.length;
  for(let i=0; i<len; i++)
  {
    if(collection[i] % 3 === 0)
    {
      arr.push(collection[i]);
    }
  }
  return arr;
}

module.exports = choose_multiples_of_three;
