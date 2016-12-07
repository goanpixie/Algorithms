function bad_characters(arr1,arr2){
  var obj={};
  var combo=arr1.concat(arr2);
  console.log(combo) ;
    for(var i=0,j=combo.length;i<j;i++){
     (obj[combo[i]]=(obj[combo[i]] || 0)+1)
    }
    
    for(var key in obj){
      if(obj.hasOwnProperty(key)){
        if(obj[key]>1){
          obj[key]=1;
          
        }
      }
    }
    return Object.keys(obj);
}
console.log(bad_characters(["a","b","c"],["a","d"]))