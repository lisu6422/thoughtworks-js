'use strict';
var single_element = function(collection){
    let arr = collection.filter(function(element,index,self){
        return !(index % 2 === 0);
    });
    let res = [];
   for(let i=0; i<arr.length; i++){
       let count = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[j] === arr[i]){
                count ++;
            }
        }
        if(count == 1){
            res.push(arr[i]);
        }
        
   }

   res.sort(function(x, y){
       return x > y;
   });
    return res;
};
module.exports = single_element;
