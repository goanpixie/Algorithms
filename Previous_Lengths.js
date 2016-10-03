function  Previous_Lengths(Arr){
  var length=0;
  var temp;
  for(var i=0; i+1<Arr.length;i++){
  temp=Arr[i];
  var first_temp=Arr[Arr.length-1];
  Arr[0]=first_temp.length
  Arr[i+1]=temp.length;
  
  }
  return Arr;
}

console.log(Previous_Lengths(["bus","care","perfume"]))