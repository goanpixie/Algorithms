
function LV(num1,num2){
	var NewArray=[];
  if(num1!=num2){
  for(var i=0;i<num1;i++){
  NewArray.push(num2)
  }
  }
 else{
 console.log("Jinx");
 }
  return NewArray;
}

console.log(LV(5,7))