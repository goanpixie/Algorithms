// Rotate given Array by the number given in the shift:

function Rotate(Arr,shift){
  for(var i=0;i<shift;i++){
    var num= Arr.pop();
    Arr.unshift(num);
  }
  return Arr;
}
console.log(Rotate([1,2,3],2))