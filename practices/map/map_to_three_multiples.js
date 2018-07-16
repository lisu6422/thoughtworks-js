'use strict';
var map_to_three_multiples = function(collections){
  let arr = [];
  collections.forEach(element => {
    arr.push(element * 3);
  });
  return arr;
};

module.exports = map_to_three_multiples;
