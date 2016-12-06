function Missing_value(arr){
  var N=arr.sort(function(a,b){
    return a-b;
  
  })
  console.log(N)
  for(var i=0;i<N.length-1;i++){
    if(N[i+1]!==(N[i]+1)){
      return N[i+1]-1
    }
    
  }
  
  
}
console.log(Missing_value([1,6,8,4,5,2,3]))