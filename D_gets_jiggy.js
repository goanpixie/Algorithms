function D_gets_jiggy(str){
  
  var capitalize_cut =str.charAt(1).toUpperCase()+str.slice(2);
  
  return capitalize_cut +" to the "+str[0]+ "!";
}
console.log(D_gets_jiggy("Dylan"))