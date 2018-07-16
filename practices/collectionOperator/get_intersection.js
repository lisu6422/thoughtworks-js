'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var res = [];
  for(var i=0; i<collection_a.length; i++)
  {
    if(collection_b.includes(collection_a[i]))
    {
      res.push(collection_a[i]);
    }
  }
  return res;
  
}

module.exports = get_intersection;
