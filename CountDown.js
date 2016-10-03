function Countdown(num){
  var NewArray=[];
  for(var i=num;i>=0;i--){
    NewArray.push(num);
    num--
  }
  return NewArray
}
console.log(Countdown(9));