'use strict';
function map_to_even(collection){
  
  let arr = [];

arr = collection.map(function(x){
 return x*2;
});
return arr;

}
module.exports = map_to_even;
