'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let res = [];
  for (var ele1 of collection_a) {
    for(var ele2 of collection_b)
    {
      if (ele1 % ele2 === 0) {
        res.push(ele1);
      }
    }
   
  }
  return res;
}

module.exports = choose_divisible_integer;
