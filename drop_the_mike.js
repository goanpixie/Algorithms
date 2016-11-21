function drop_the_mike(str){
  var new_string="";
  
  var sentence=str.trim().split(" ");
  for(var i=0;i<sentence.length;i++){
      new_string+=(sentence[i][0].toUpperCase()+sentence[i].slice(1))+" "
  }
  return new_string.trim();
}
console.log(drop_the_mike(" lets do this! "))