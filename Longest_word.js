function Longest_word(str){
  var word=str.split(" ");
  var count=0;
  var max_string="";
  for(var i=0;i<word.length;i++){
    var test=word[i].split("");
    var size=test.length;
    if(size>max_string.length){
      max_string=test.join("")
    }
    
    
  }
  return max_string;
}
console.log(Longest_word("Life is not a drill go for it"))