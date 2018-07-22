function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var res = [];
  for(var i=0; i<collection_a.length; i++)
  {
    if(object_b.value.includes(collection_a[i]))
    {
      res.push(collection_a[i]);
    }
  }
  return res;
}

module.exports = collect_same_elements;
