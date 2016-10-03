function GreaterThanSecond(Arr){
  var NewArray=[];
  var count=2;
  if (Arr.length<2){
    return Arr
  }
  else {
    while(count<Arr.length){
      NewArray.push(Arr[count])
      count++;
    }
  }
  return(NewArray.length)
}
console.log (GreaterThanSecond([1,7,9,9,0]));