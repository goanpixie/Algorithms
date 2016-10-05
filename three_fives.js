function three_fives(start,end){
  var ans=0;
  for(var i=start;i<=end;i++){
    ans=i+ans;
  }
  if(ans%3==0 ||ans%5==0){
    if(ans%3==0 &&ans%5==0){
      return false;
    }
    else{return ans}
  }
  else{console.log("Not divisible by both 3 and 5")}
}
console.log(three_fives(4,7))