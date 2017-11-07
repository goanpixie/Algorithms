//Find HammingDistance between two numbers.

/*
Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

var hammingDistance = function(a,b){
var result = 0;
var aBit = a.toString(2);
var bBit = b.toString(2);
var Diff = Math.abs(aBit.length - bBit.length);
console.log("Diff",Diff);
if(aBit.length < bBit.length){
	for(var i=0; i<Diff;i++){
  aBit = 0 + aBit;
  }
  console.log("aBit",aBit)
}

else if(bBit.length < aBit.length){
	for(var i=0; i<Diff;i++){
  bBit = 0 + bBit;
  }
  console.log("bBit",bBit)
}

for(var i=0; i<aBit.length;i++){
	if(aBit[i] !=bBit[i]){
  	result++;
  }
}
return result;
}
console.log(hammingDistance(1,4));