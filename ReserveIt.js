function Reverse(Arr){
  var temp;
  for(var i=0;i<Arr.length/2;i++){
    temp=Arr[i];
    Arr[i]=Arr[Arr.length-1-i];
    Arr[Arr.length-1-i]=temp;
  }
  return Arr;
}
console.log(Reverse([3,1,6,4,2]))