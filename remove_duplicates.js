function remove_duplicates(arr){
  var obj={};
  for(var i=0,j=arr.length;i<j;i++){
    (obj[arr[i]]=obj[arr[i]] || 0)+1
  }
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      if((obj[key])>1){
        obj[key]=1;
      }
    }
  }
  return (Object.keys(obj));
}
console.log(remove_duplicates([1,2,1,3,4,2]))