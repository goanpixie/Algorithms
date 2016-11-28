var Recursive_Sigma=function(number){
  if(number<=0){
    return 0;
  }
  else{
  var num=Math.floor(number);
  return(num+Recursive_Sigma(number-1));
  }
}
console.log(Recursive_Sigma(5))