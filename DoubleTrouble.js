function doubletrouble(arr){
  var newarr=[];
for(var i=0;i<arr.length;i++){
  newarr.push(arr[i])
  newarr.push(arr[i]);
}
return newarr;
}
console.log(doubletrouble([14,"ulsyn",42,false]))