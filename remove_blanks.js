function remove_blanks(str){
  var array=[];
  var sentence=str.split("");
  console.log(sentence);
  for(var i=0;i<sentence.length;i++){
    if(sentence[i]!=" "){
      array.push(sentence[i])
    }
  }
  return array.join("");
}
console.log(remove_blanks("Pl ayTha tF u nkyM usi c"))