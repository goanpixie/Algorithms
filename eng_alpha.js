function eng_alpha(){
  var lookup ={0:" "}
  for(var i=0;i<26;i++){
  lookup[i+1]=String.fromCharCode(97+i)}
  return lookup;
}

console.log(eng_alpha())

//lookup table for eng alphabets.