'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var coll = ['a', 'b', 'c', 'd', 'e'];
  var res = [];
  if(number_a < number_b)
  {
    for(let i=number_a; i<=number_b; i++)
    {
      res.push(coll[i-1]);
    }
  }
  else
  {
    for(let j=number_a; j>=number_b; j--)
    {
      res.push(coll[j-1]);
    }
  }

  return res;
}

module.exports = get_letter_interval;
