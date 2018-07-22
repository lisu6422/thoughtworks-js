'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var lowMiddle = Math.floor((collection.length - 1) / 2);
    var highMiddle = Math.ceil((collection.length - 1) / 2);
    let midnum = Math.ceil((Number(collection[lowMiddle]) + Number(collection[highMiddle])) / 2);
   
    let str = '';
    while(midnum > 0)
    {
      let temp = midnum % 26;
      midnum = parseInt(midnum / 26);      
      str = String.fromCharCode(96 + parseInt(temp)) + str;
    }   
    return str;
}

module.exports = median_to_letter;
