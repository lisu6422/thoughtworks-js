'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let coll = ["a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
  let res = [];
  for(let i=number_a; i<number_b; i++)
  {
    let num = i;
    let element = '';
    while(num != 0)
    {
      let temp = i % 26;
      num = num / 26;      
      element = coll[temp-1] + element;     
    }
    res.push(element);

  }
  return res;
}

module.exports = get_letter_interval_2;

