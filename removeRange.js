function removeRange(array, start, end){
  
 array.splice(start,end-start+1)
  console.log(array);
}

console.log(removeRange([20,30,40,50,60,70], 2, 4))