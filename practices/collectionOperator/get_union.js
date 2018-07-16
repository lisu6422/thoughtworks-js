'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
    var arr = [];
    for (var i = 0; i < collection_a.length; i++) 
    {
		  arr.push(collection_a[i]);
		}
			var dup;
			for (var i = 0; i < collection_b.length; i++){
			  dup = false;
        for (var j = 0; j < collection_a.length; j++)
        {
          if (collection_b[i] == collection_a[j])
          {
			      dup = true;
            break;
          }
	
		    }
			if (!dup){
			  arr.push(collection_b[i]);
			}
		}
		
		return arr;
}

module.exports = get_union;

