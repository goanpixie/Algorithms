function interleaved_str(str1,str2,str3){
  for(var i =0; i<str1.length;i++){
    if(str3[i+i]!==str1[i] || str3[i+1+i]!==str2[i]){
      return false;
    }
  
  }
  return true;
 
}
console.log(interleaved_str("dne","ail","daniel"))

//Added algorithm"
