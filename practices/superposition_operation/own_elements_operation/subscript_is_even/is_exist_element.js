'use strict';
var is_exist_element = function(collection,element){
let arr = collection.filter(function(e, i, s){
    return i % 2 === 0;
});

return arr.includes(element);
};
module.exports = is_exist_element;
