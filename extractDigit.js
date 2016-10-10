function extractDigit(num,digitNum){
  var n=num.toString().split([])
  console.log(n);
  
  if(digitNum<n.length){
  console.log((Math.floor(num/Math.pow(10,digitNum)))%10)
  }
  else{console.log("0")}
}
extractDigit(3276890,1)

// alternate strategy:
// function extractDigit(num,digitNum){
//   var n=num.toString().split([]).reverse()
//   console.log(n);
//   if (n.length >= digitNum ) console.log(n[digitNum])
//   // if(digitNum<n.length){
//   // console.log((Math.floor(num/Math.pow(10,digitNum)))%10)
//   // }
//   // else{console.log("0")}
// }
// extractDigit(3276890, 6)