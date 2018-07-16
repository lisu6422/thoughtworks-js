'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  let res = [];
  let len = collection_a.length;
  for (var i = 0; i < len; i++) {
    if (!collection_b.includes(collection_a[i])) {
      res.push(collection_a[i]);
    }
  }
  return res;
}

module.exports = choose_no_common_elements;
