'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let res = {};
  collection.forEach(function (e) {
    res[e] = res[e] >= 1 ? res[e] + 1 : 1
  });
  console.log(res);
  return res;
}

module.exports = grouping_count;
