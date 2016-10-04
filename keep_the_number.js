function keep_the_number(Arr,num){
  return(Arr.slice((Arr.length-num),Arr.length))
}
console.log(keep_the_number([1,2,3,6,8,8],2))