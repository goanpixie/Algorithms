function Negative(Arr){
  for(var i=0;i<Arr.length;i++){
    if(Arr[i]>0){
      Arr[i]=Arr[i]*-1
    }
  }
  return Arr
}

console.log(Negative([1,-3,5]))