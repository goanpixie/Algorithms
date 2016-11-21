
function solution(arr1,arr2){
  var answer={};
  for(var i=0;i<arr1.length;i++){
    if(arr2){
    answer[arr1[i]]=arr2[i]
    }
  }
  return answer;
  
}
console.log(solution(["a","b"],[1,2]))
