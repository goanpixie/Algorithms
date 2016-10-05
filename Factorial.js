function Factorial(num){
  var ans=1;
  for(var i=1;i<=num;i++){
    ans=i*ans;
  }
  return ans
}
console.log(Factorial(171))//maximum limit of factorial till it hits Infinity.