function height(node){
   if(!node) return 0;
   var leftHeight = height(node.left);
   var rightHeight = height(node.right);

   return Math.max(leftHeight, rightHeight) + 1;
}
    