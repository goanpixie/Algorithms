function parenthesesAreBalanced(string) {
var parenthesis ="(){}[]",
stack=[],
character,  i, braceposition;
  for(i=0;character=string[i];i++){
    braceposition= parenthesis.indexOf(character);
      if(braceposition=== -1){
        continue;
      }
      if(braceposition%2===0){
        stack.push(braceposition+1) //expected position of next pair bracket;
      }
      else{
        if( stack.length===0 || stack.pop()!== braceposition){
        return false;
        }
      }
  }
  return stack.length===0;
}
console.log(parenthesesAreBalanced("A(1)s[on]0(}}{t})0k}}}"))