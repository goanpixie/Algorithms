function cc_isvalid(digitArr){
  if(digitArr.length>=13 && digitArr.length<=19){
    var num = digitArr.pop();
    console.log(num);
    console.log(digitArr);
    for(var i=digitArr.length-1;i>=0;i-2){
      if(digitArr.length%2===1){
        var ans=digitArr[i]*2;
        console.log(ans);
        // digitArr.splice(i,1,ans);
      }
    }
  }
  return digitArr;
  
}
cc_isvalid([1,2,3,4,5,6,7,8,9,1,2,3,4])