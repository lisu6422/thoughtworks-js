'use strict';
var calculate_median = function(collection){
let arr = collection.filter(function(e,i,s){
    return !(i % 2 === 0);
})

var lowMiddle = Math.floor((arr.length - 1) / 2);
var highMiddle = Math.ceil((arr.length - 1) / 2);
let midnum = (Number(arr[lowMiddle]) + Number(arr[highMiddle])) / 2;
return midnum;
};
module.exports = calculate_median;
