function isPalindrome(str){
  var sentence=str.toLowerCase();
  var only_characters=(sentence.match(/[a-zA-Z]/gi));
  console.log(only_characters)
  for(var i=0;i<only_characters.length/2;i++){
    console.log(only_characters[i]);
    console.log(only_characters[only_characters.length-1-i]);
    if((only_characters[i])!==(only_characters[only_characters.length-1-i])){
    return false;
    }
    

  }
  return true
  
}
console.log(isPalindrome("Madam"))