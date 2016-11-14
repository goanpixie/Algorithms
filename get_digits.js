function get_digits(str){
  var array=[];
  var sentence=str.split("");
  for(var i=0;i<sentence.length;i++){
    if(isNaN(sentence[i])==false){
      array.push(sentence[i]);
    };
    
  }
  return array.join("");
}
console.log(get_digits("j98789hjbhjbhjbhj2jkmklmn87jnjkn8787"))
