function Sigma(num){
  var ans=0;
  for(var i=0;i<=num;i++){
    ans=i+ans;
  }
  return ans
}
console.log(Sigma(4))