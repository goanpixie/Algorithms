function OddSwap(Arr){
  var temp;
  for(var i=0;i<Arr.length/2;i+2){
    temp=Arr[i];
    Arr[i]=Arr[Arr.length-1-i];
    Arr[Arr.length-1-i]=temp;
  }
  return Arr;
}
console.log(OddSwap([3,1,6,5,4,2]))