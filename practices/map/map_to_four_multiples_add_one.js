'use strict';
var map_to_four_multiples_add_one = function(collection){
  let arr = [];
  collection.forEach(element => {
    arr.push(element * 4 + 1);
  });
  return arr;
};

module.exports = map_to_four_multiples_add_one;
