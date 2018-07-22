function count_same_elements(collection) {
  //在这里写入代码
  let res = [];
  for (var i = 0; i < collection.length;) {

    var count = 0;
    let obj = {};
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
  return res;
}

module.exports = count_same_elements;
