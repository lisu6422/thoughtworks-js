'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  let res = [];
  res = collection_a.filter(function(x){
    return collection_b.includes(x);
  });
  return res;
}

module.exports = choose_common_elements;
