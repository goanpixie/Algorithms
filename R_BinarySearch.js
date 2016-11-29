var a=[
  1,45,65,98,34,6,7,8,9
  ]

var Arr=a.sort(function (a, b) {
  return a-b});
  
  console.log(Arr)

var B_Search=function(Arr,n){
  var mid=Math.floor(Arr.length/2)
  console.log(mid);
  if(Arr[mid]==n){
    return "Value found"
  }
  else if(n>Arr[mid] && Arr.length>1){
    console.log("higher range", Arr[mid], n)
    return B_Search(Arr.splice(mid,Number.MAX_VALUE),n)
  }
  else if(n<Arr[mid] &&Arr.length>1){
    console.log("lower range",Arr[mid], n)
    return B_Search(Arr.splice(0,mid),n)
  }
  else{
    return "Value not found"
  }
}
console.log(B_Search(Arr,45))
