'use strict';

function collect_max_number(collection) {
  //在这里写入代码
 let res = 0;
 res = collection.reduce(function(x,y){
   return x>y?x:y;
 });
 return res;
}

module.exports = collect_max_number;
