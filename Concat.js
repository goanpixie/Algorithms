// Built Concat function:


function Concat(Arr1,Arr2){
  for(var i=0;i<Arr2.length;i++){
    Arr1.push(Arr2[i]);
    
  }
  return Arr1;
}
console.log(Concat([1,2],[3,4]))