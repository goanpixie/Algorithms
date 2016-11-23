function front(starting_pointer){
  var head=starting_pointer;
  return head.value;
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

var linkedlist=front(starting_pointer);
console.log(linkedlist);