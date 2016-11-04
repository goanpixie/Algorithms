// Reverse the array element order in-place:

function Reverse(arr){
  var temp;
  for(var i=0;i<arr.length/2;i++){
    var temp=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
  }
  return arr;
}
console.log(Reverse([1,2,3,4,5]))