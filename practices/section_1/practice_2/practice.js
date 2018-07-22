function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码

  let arr_b = [];
  for (var i = 0; i < collection_b.length; i++) {
    arr_b = arr_b.concat(collection_b[i]);
  }

  var res = [];
  for(var i=0; i<collection_a.length; i++)
  {
    if(arr_b.includes(collection_a[i]))
    {
      res.push(collection_a[i]);
    }
  }
  return res;
}

module.exports = collect_same_elements;
