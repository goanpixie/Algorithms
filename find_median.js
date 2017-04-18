function median(arr1,arr2){
  var newArr=arr1.concat(arr2).sort();
  console.log(newArr)
   if(newArr.length%2==0){
     return (newArr[((newArr.length/2)+1)]+newArr[((newArr.length/2)-1)])/2
   }
   else{
     return (newArr[Math.floor(newArr.length/2)])
   }
   
  
} 

console.log(median([1,5,9],[1,2,3,4,5,6]))