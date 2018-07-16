'use strict';
var number_map_to_word = function(collection){
  var coll = ['a', 'b', 'c', 'd', 'e'];
  var res = [];
  collection.forEach(element => {
    res.push(coll[element-1]);
  });
  return res;
};

module.exports = number_map_to_word;
