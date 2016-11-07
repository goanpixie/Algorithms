function FilterRange(Arr,Min, Max){
  var difference=Max-Min;
  Arr.splice(Min,difference)
return Arr;
}
console.log(FilterRange([1,2,3,4,5],2,4))