function Count_Positive(Arr){
  var count=0;
  for(var i=0;i<Arr.length;i++){
    if(Arr[i]>0){
      count++
    }
    Arr[Arr.length-1]=count;
  }
  return Arr;
}

console.log(Count_Positive([-1,1,1,1]))