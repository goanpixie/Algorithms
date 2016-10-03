function  IncrementS(Arr){
  for(var i=1; i<Arr.length;i++){
    if(i%2==1){
      Arr[i]=Arr[i]+1;
      console.log(Arr[i]+1);
    }
    
  }
  return Arr;
}

console.log(IncrementS([1,2,3,4,5]))