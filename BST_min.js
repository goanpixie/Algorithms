function minNode(node){
   if(!node){
      return 0;
   }
   if(node.left){
     return minNode(node.left)
  }
  return node.value
}