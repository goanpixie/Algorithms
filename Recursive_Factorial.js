var Recursive_Factorial=function(number){
  if(number<=0){
    return 1;
  }
  else{
  var num=Math.floor(number);
  return(num*Recursive_Factorial(number-1));
  }
}
console.log(Recursive_Factorial(4))