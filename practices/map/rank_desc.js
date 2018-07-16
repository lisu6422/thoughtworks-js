'use strict';
var rank_desc = function(collection){
  return collection.sort();
};

var desc = function(x,y)
{
  if(x > y)
  return -1;
  else
  return 1;
}

var asc = function(x,y)
{
  if(x > y)
  return 1;
  else
  return -1;
}


module.exports = rank_desc;
