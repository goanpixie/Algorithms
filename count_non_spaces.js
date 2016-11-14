function count_non_spaces(str){
  var array=[];
  var sentence= str.split("");
  for(var i=0;i<sentence.length;i++){
    if(sentence[i]!==" "){
      array.push(sentence[i])
    }
  }
  return array.length;
}
console.log(count_non_spaces("live from jnjnhj"))