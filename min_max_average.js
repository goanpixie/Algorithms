function answer(arr){
  var min=arr[0]
  var max=arr[0]
  var sum=0
  for(var i=0;i<arr.length;i++){
    
    if(arr[i]<min){
      min=arr[i];

    }
    if(arr[i]>max){
      max=arr[i];
      
    }
    sum=sum+arr[i];
    
  }
  console.log(min)
  console.log(max)
  console.log(sum)
  var average=sum/arr.length;
  var solution={minimum:min, maximum:max, average:average};
  return solution
  
}
console.log(answer([3,2,1]))