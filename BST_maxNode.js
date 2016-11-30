function maxNode(node){
   if(!node){
     return 0;
  }
  if(node.right){
     return maxNode(node.right)
  }
  return node.value;
}