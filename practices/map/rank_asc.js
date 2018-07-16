'use strict';
var rank_asc = function(collection){
  return collection.sort(desc);
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

module.exports = rank_asc;
