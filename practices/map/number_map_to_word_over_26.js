'use strict';
var number_map_to_word_over_26 = function(collection){
  let coll = ["a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
  let res = [];
  for(let i=0; i<collection.length; i++)
{
  let num = collection[i];
    let element = "";
    while(num > 0)
    {
      let temp = (num-1) % 26;
      num = (num-1) / 26;      
      element = coll[temp] + element; 
      //element.concat(coll[temp-1]);    
    }
    res.push(element);
}
};

module.exports = number_map_to_word_over_26;
