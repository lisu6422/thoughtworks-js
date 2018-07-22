'use strict';
var even_asc_odd_desc = function(collection){
    let res = [];
    let arr1 = collection.filter(function(x){
        return x% 2 === 0;
    });
    let arr2 = collection.filter(function(x){
        return !(x% 2 === 0);
    });
    arr1.sort(function(x, y){
        return x > y;
    });
    arr2.sort(function(x, y){
        return y > x;
    });

        res = res.concat(arr1).concat(arr2);
    

    return res;
};
module.exports = even_asc_odd_desc;
