function iSum(arr){
 var i=0;
  var ret=[];
  for(var i=0;i<arr.length;i+10){
  if(arr.length>=10){
    var section = arr.slice(0,i+10);
    console.log(section)
    var answer = section.reduce((prev,next)=>prev+next)
    console.log(answer)
    ret= ret + section + "," + answer
    i=i+10;
  }
  else{
    var red= arr.slice(i,arr.length)
    var ans=red.reduce((prev,next)=>prev+next)
    ret= ret + section + "," + answer
    
    
  }
  
  }

  return ret;
}
console.log(iSum([1,2,1,2,1,2,1,2,1,2,,1,2]))