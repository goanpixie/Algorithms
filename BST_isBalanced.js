
function isBST(node){
   if(!node){
     return true; 
  }

  if(node.left != null && node.left.value > node.value){ 
    return false;
  }

  if(node.right !=null && node.right.value < node.value) {
    return false;
  }

  if(!isBST(node.left) || !isBST(node.right)) {
    return false;
  }

  return true;  
}