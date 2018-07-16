'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  if (collection_a.size !== collection_b.size) return false;
  for (var a of collection_a) if (!collection_b.includes(a)) return false;
  return true;
}

module.exports = compare_collections;


