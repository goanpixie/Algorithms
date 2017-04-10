function Zipit(arr1,arr2){
  var answer=[];
  
  var newarr=arr1.concat(arr2)
    for(var i=0;i<newarr.length;i++){
      if(i<arr1.length){
      answer.push(newarr[i]);
      }
      if(i<arr2.length){
      answer.push(newarr[arr1.length+i])
      }
    }
return answer;

}
console.log(Zipit([1,2],[3,4]))