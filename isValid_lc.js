//
//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

//Solution1:155ms
function isValid(s){
	if (s.charAt(0) === "}" ||s.charAt(0)=== ")" ||s.charAt(0)=== "]" ){
    return false;
  }
  var lc = s.slice(-1);
	if (lc=== "{" || lc ==="(" ||lc === "[" ){
    return false;
  } 
  else{
    var stack =[];
    var opening_brackets = "({[";
    
     for(var i=0;i<s.length;i++){
     		if(opening_brackets.indexOf(s[i]) >-1 ){
          stack.push(s[i]);
        	}
        else{
        console.log(s[i])
        	var combo = (stack.pop() + s[i]);
        	if(combo === "()" || combo ==="{}"|| combo ==="[]"){     
          }
          else{
          return false;
          }
        }  
   	 }
 	}
  if(stack.length!==0){
  return false;
  }
 return true;
}

//Solution2:102ms
var isValid = function(s) {
 let stack = [];
let pairs = {
    "{" : "}",
    "}" : "{",
    ")" : "(",
    "]": "[",
    "(" : ")",
    "[" : "]"
}
  for (let ch of s) {
    if (ch === '[' || ch === '(' || ch === "{") {
      stack.push(ch);
    } else if (ch === ']' || ch === ")" || ch === "}"){
      if (stack.length === 0) {
        return false;
      }
      let r = stack.pop()
      if (r !== pairs[ch]) {
          return false;
      }
    }
  }
  return (stack.length === 0); 
};