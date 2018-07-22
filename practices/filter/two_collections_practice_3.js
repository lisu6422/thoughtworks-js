'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let res = [];
 

  res = collection_a.filter(function(x){
    let temp = x;
    for(var ele2 of collection_b){
      if(temp % ele2 === 0){
        return true;
      }   
    }
  });
  return res;
}

module.exports = choose_divisible_integer;
