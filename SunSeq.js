const sequenceSum = (begin, end, step) => {
 var sum= 0;
 if (begin>end){
 return 0;
 }
 
 else{
 for(var i=begin; i<=end;i+=step){
 sum+=i;
 
 }
 return sum;