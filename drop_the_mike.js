function drop_the_mike(str){
  var new_string="";
  var publish=""
  
  var sentence=str.trim().split(" ");
     
  for(var i=0;i<sentence.length;i++){
      new_string=(sentence[i][0].toUpperCase()+sentence[i].slice(1))+" ";
      var compared_word=(new_string.trim())
      
      if(compared_word =="Mike"){
        return "stunned silence"
      }
  publish=publish+(new_string)
  }
  
  return publish
  
}
console.log(drop_the_mike(" lets do this Mike ! "))