function count_same_elements(collection) {
  //在这里写入代码
  let res = [];
  for (var i = 0; i < collection.length;) {

    var count = 0;
    let obj = {};
    if (collection[i].includes('-'))
      {
        obj.key = collection[i].split('-')[0];
        obj.count =  parseInt(collection[i].split('-')[1]);
        res.push(obj);
        i ++;
      }
      else
      {
        for (var j = i; j < collection.length; j++) {

          if (collection[i] == collection[j]) {
            count++;
          }
    
        }
        obj.key = collection[i];
        obj.count = count;
        i += count;
        res.push(obj);
      }
      }
    
  return res;
}

module.exports = count_same_elements;
