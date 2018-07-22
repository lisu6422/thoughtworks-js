'use strict';
var calculate_average = function (collection) {
    let arr = collection.filter(function (ele, index, self) {
        return !(index % 2 === 0);
    });

    return arr.reduce(function (x, y) {
        return x + y;
    })/arr.length;
};
module.exports = calculate_average;
