function until_doubles(){
  return(Math.floor((Math.random()*20)+1))
}
// console.log(until_doubles())

function twice_in_a_row() {
  var newArray=[];
  var count=1;
  newArray.push(until_doubles());
  newArray.push(until_doubles());
  while(newArray[count]!=newArray[count-1])
  {
    newArray.push(until_doubles());
    count++;
  }
  
  return{
    newArray
   }
}
console.log(twice_in_a_row())