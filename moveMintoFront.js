// Detect minimum number in the given array and move it to the front without altering the remaining array:

function moveMintoFront(arr){
  var min=arr[
  for(var i=1;i<arr.length;i++){
    if (arr[i]<min){
    min=arr[i];
      
    }
  }
  (arr.unshift(min));
  var cut=(arr.indexOf(min,1));
  arr.splice(cut,1);
  return arr;
}

console.log(moveMintoFront([4,2,1,3,5]))