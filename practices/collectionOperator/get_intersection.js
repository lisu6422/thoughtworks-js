'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var res = [];
  for(var i=0; i<collection_b.length; i++)
  {
    if(collection_a.includes(collection_b[i]))
    {
      res.push(collection_b[i]);
    }
  }
  return res;
  
}

module.exports = get_intersection;
