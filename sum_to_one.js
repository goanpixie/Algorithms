// var Add=0;
// function SumToOne(num){
//     var output = [],
//     sNumber = num.toString();
// for (var i = 0, len = sNumber.length; i < len; i ++) {
//     output.push(+sNumber.charAt(i));
// }
// if(output.length>1){
//   for(var j=0;j<output.length;j++){
//     Add=Add+output[j];
//   }
// }
// else return{output
  
// }
// return Add;
// }
// console.log(SumToOne(193));

function SumToOne(num){
	var ans=num%9;
	if (ans==0 && num>0)
		ans=9;
	return ans;
}