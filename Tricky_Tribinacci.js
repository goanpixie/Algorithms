function Fib(num){
  if(num<=2){
    return 0;
  }
  if(num<=4&&num>2){
    return 1;
  }
  else{
  return(Fib(num-1)+Fib(num-2)+Fib(num-3))
  }
}
  
console.log(Fib(11))