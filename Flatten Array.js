// #Flatten Array:

function flatten(list) {
  var ret = [];
  for(var i=0; i<list.length; i++){
    if (Array.isArray(list[i])){
      ret = ret.concat(flatten(list[i]));
    }
    else{
      ret.push(list[i])
    }
    
  }
  return ret;
  
}
// console.log(flatten(1,[[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]))

console.log(flatten([1,[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]) ) 