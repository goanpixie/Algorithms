function Add_Front(starting_pointer){
  var node=starting_pointer;
  var newNode={
    value:3,
    next:null};
  var save=node;
  node=newNode;
  newNode.next=save;
  return node;
}

var starting_pointer={
  value:4,
  next:{
    value:5,
    next:{
      value:6,
      next:null
      
    }
  }
}

var linkedlist=Add_Front(starting_pointer);
console.log(linkedlist)