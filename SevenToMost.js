function SevenToMost(Arr){
  var NewArray=[];
  for (var i=1;i<Arr.length;i++){
    NewArray.push(Arr[i]+7)
    }
  return NewArray;
  
}
  
  console.log(SevenToMost([1,2,3,4]))