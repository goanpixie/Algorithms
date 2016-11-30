function printAncestor(node, target){
   if(!node) return false

   if(node.value == target) return true;
   
   if(printAncestor(node.left, target) || printAncestor(node.rigth, target)){
     console.log(node.value);
     return true;
  }

  return false
}
      