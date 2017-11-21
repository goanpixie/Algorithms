// Identify if two trees are identical:

function same_or_not(bst1,bst2){
var p = bst1.root;
var q = bst2.root;

	if(p==null && q==null)
	{
	return true;

	}else if(p==null || q==null){
	return false;
	
	}else{
	return (p.value == q.value &&
	       same_or_not(p.left , q.left) &&
	       same_or_not(p.right , q.right)
	       )
	}
}
console.log(same_or_not(bst1,bst2))
