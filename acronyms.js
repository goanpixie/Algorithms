function acronyms(str){
  var array=[];
  var sentence= str.split("");
  array.push(sentence[0].toUpperCase())
  for(var i=0;i<sentence.length;i++){
    if(sentence[i]==" "){
      array.push(sentence[i+1].toUpperCase())
    }
  }
  return array.join("");
}
console.log(acronyms("live from new york , it is saturday night"))