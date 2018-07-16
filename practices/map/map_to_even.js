'use strict';
function map_to_even(collection){
  
  let arr = [];
  collection.forEach(element => {
    arr.push(element * 2);
  });
  return arr;
}
module.exports = map_to_even;
