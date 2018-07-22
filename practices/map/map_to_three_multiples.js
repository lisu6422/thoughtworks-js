'use strict';
var map_to_three_multiples = function(collections){
  let arr = [];
  arr = collections.map(function(x){
    return x*3;
   });
  return arr;
};

module.exports = map_to_three_multiples;
