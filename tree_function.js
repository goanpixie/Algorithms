//All you nbeed to know about tree functions:

//Creatinga node:
function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

//Start a BST tree with the root:
function BSTtree(){
  this.root = null;
}

//Creating a push function to insert value:
BSTtree.prototype.push = function(val){
  var root = this.root;
   
  if(!root){
    this.root = new Node(val);
    return;
  }
  var newNode = new Node(val);
  var currentNode = root;
  
  while(currentNode){
    if(val<currentNode.value){
      if(!currentNode.left){
        currentNode.left =newNode;
        break;
      }
      else{
        currentNode = currentNode.left;
      }
    }
    else{
     if(!currentNode.right){
        currentNode.right =newNode;
        break;
      }
      else{
        currentNode = currentNode.right;
      } 
    }   
  }
}


//Creating contain function to check if given tree contains the given value:
BSTtree.prototype.contains = function(value) {
    var node = this.root;
    var traverse = function(node) {
        if (!node) return false;
        if (value === node.value) {
            return true;
        } else if (value > node.value) {
            return traverse(node.right);
        } else if (value < node.value) {
            return traverse(node.left);
        }
    };
    return traverse(node);
};

//find the left most node to find the min value of a binary tree;
BSTtree.prototype.findMin = function() {
    var node = this.root;
    var traverse = function(node) {
        return !node.left ? node.value : traverse(node.left);
    };
    return traverse(node);
};

//find the right most node to find the max value of a binary tree;
BSTtree.prototype.findMax = function() {
    var node = this.root;
    var traverse = function(node) {
        return !node.right ? node.value : traverse(node.right);
    };
    return traverse(node);
};

//Find the depth of tree in units:
BSTtree.prototype.getDepth = function() {
    var node = this.root;
    var maxDepth = 0;
    var traverse = function(node, depth) {
        if (!node) return null;
        if (node) {
            maxDepth = depth > maxDepth ? depth : maxDepth;
            traverse(node.left, depth + 1);
            traverse(node.right, depth + 1);
        }
    };
    traverse(node, 0);
    return maxDepth;
};

//Find the number of terminal nodes(Nodes without any children):
BSTtree.prototype.countLeaves = function() {
    var count = 0;
    var node = this.root;
    var traverse = function(node) {
        if (!node) return null;
        if (!node.left && !node.right) count++;
        else traverse(node.left) + traverse(node.right);
    };
    traverse(node);
    return count;
}

//Root->Left subtree-->Right subtree
BSTtree.prototype.breadthFirstLTR = function() {
    var node = this.root;
    var queue = [node];
    var result = [];
    while (node = queue.shift()) {
        result.push(node.value);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return result;
};

//Root->Right subtree-->Left subtree
BSTtree.prototype.breadthFirstRTL = function() {
    var node = this.root;
    var queue = [node];
    var result = [];
    while (node = queue.shift()) {
        result.push(node.value);
        node.right && queue.push(node.right);
        node.left && queue.push(node.left);
    }
    return result;
};

/*DEPTH FIRST TRAVERSALS*/

/*  preOrder is a type of depth-first traversal that tries 
    togo deeper in the tree before exploring siblings. It 
    returns the shallowest descendants first.
    1) Display the data part of root element (or current element)
    2) Traverse the left subtree by recursively calling the pre-order function.
    3) Traverse the right subtree by recursively calling the pre-order function. */

BSTtree.prototype.preOrder = function() {
    var result = [];
    var node = this.root;
    var traverse = function(node) {
        result.push(node.value);
        node.left && traverse(node.left);
        node.right && traverse(node.right);
    };
    traverse(node);
    return result;
};

/*  inOrder traversal is a type of depth-first traversal
    that also tries to go deeper in the tree before exploring siblings.
    however, it returns the deepest descendents first
    1) Traverse the left subtree by recursively calling the pre-order function.
    2) Display the data part of root element (or current element)
    3) Traverse the right subtree by recursively calling the pre-order function. */

BSTtree.prototype.inOrder = function() {
    var result = [];
    var node = this.root;
    var traverse = function(node) {
        node.left && traverse(node.left);
        result.push(node.value);
        node.right && traverse(node.right);
    };
    traverse(node);
    return result;
};

/*  postOrder traversal is a type of depth-first traversal
    that also tries to go deeper in the tree before exploring siblings.
    however, it returns the deepest descendents first
    1) Traverse the left subtree by recursively calling the pre-order function.
    2) Display the data part of root element (or current element)
    3) Traverse the right subtree by recursively calling the pre-order function. */

BSTtree.prototype.postOrder = function() {
    var result = [];
    var node = this.root;
    var traverse = function(node) {
        
        node.left && traverse(node.left);
        node.right && traverse(node.right);
        result.push(node.value);
    };
    traverse(node);
    return result;
};

var bst = new BSTtree;
bst.push(4);
bst.push(9);
bst.push(10);
bst.push(1);
console.log(bst)
console.log(bst.contains(2))
console.log(bst.findMin())
console.log(bst.findMax())
console.log(bst.getDepth())
console.log(bst.countLeaves())
console.log(bst.breadthFirstLTR())
console.log(bst.breadthFirstRTL())
console.log(bst.inOrder())
console.log(bst.postOrder())
console.log(bst.preOrder())