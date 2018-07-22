'use strict';
var number_map_to_word = function(collection){
 
  var res = [];
  res = collection.map(function(x){
      return String.fromCharCode(96 + parseInt(x));
  });
  return res;
};

module.exports = number_map_to_word;
