'use strict';
function one_add_next_multiply_three(collection){
  let res = [];
  for(let i=0; i<collection.length-1; i++){
    res.push((collection[i]+collection[i+1])*3);
  }
  return res;
}
module.exports = one_add_next_multiply_three;
