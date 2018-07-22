function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let res = [];
  for (var i = 0; i < collection_a.length;) {

    var count = 0;
    let obj = {};
    for (var j = i; j < collection_a.length; j++) {

      if (collection_a[i] == collection_a[j]) {
        count++;
      }
    }
    obj.key = collection_a[i];
    obj.count = count;
    i += count;
    res.push(obj);
  }

  for (let i = 0; i < res.length; i++) {
    if (object_b.value.includes(res[i].key)) {
      res[i].count = res[i].count - parseInt(res[i].count / 3);
    }
   
  }
  return res;
}

module.exports = create_updated_collection;
