function Double(Arr){
  var NewArray=[];
  for(var i=0;i<Arr.length;i++){
    NewArray.push(Arr[i]*2)
  }
  return NewArray;
}
		  
	console.log(Double([2,3,4]))
