// var data = [1,2,3,4,3,23,2,1,1,1];

// var reducer = function(total, value){
//   return total+value
// }

// var answer = data.reduce(reducer,0);
// console.log(answer/data.length);

 
var data = [1,2,3,4,3,23,2,1,1,1]; 
var reducer = function(total, value, index, array){
  var intermediaryvalue = total+value;
  
  if(index == array.length-1){
    return intermediaryvalue/array.length
  }
  return intermediaryvalue;
}

var answer = data.reduce(reducer,0);
console.log(answer)