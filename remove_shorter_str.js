function remove_shorter_str(arr,value){
  for(var i=0;i<arr.length;i++){
    console.log(arr[i].length)
    if((arr[i].length)<value){
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}
console.log(remove_shorter_str(["pig","doge","bolt","trick"],5))