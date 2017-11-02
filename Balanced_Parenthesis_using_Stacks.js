//Balanced Parenthesis using Stacks:

//Solution:
function balancedParenthesis(exp){
  var stack = [],
      isBalanced = "(){}[]",
      character,i;
  for(i=0; character=exp[i];i++){
    index = isBalanced.indexOf(character);
    console.log(index)
    if(index === -1){
      continue;
  }
      if(index%2 === 0){
        stack.push(index +1);
      }
      else{
        if(stack.length === 0 ||  stack.pop()!== isBalanced.indexOf(character) ){
         return false;
        }
      }
    }
  return stack.length === 0;
}