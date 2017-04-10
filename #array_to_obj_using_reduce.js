#array to obj using reduce


var votes=[
  "angular",
  "angular",
  "rails",
  "angular",
  "Python",
  "angular",
  "Python",
  "angular",
  "Vanilla"
  ]
 var initialvalue = {};
 
 var reducer = function(tally,vote){
   if(!tally[vote]){
     tally[vote]=1;
   }
   else{
     tally[vote] = tally[vote]+1;
   }
   return tally;
 }
 
var answer = votes.reduce(reducer, initialvalue)

 console.log(answer)