function Back(starting_pointer){
  var head=starting_pointer;
  while(head){
    if(head.next==null){
      return head.value;
    }
      head=head.next;
  }
}

var starting_pointer={
  value:4,
  next:{
    value:5,
    next:{
      value:6,
      next:{
        value:10,
        next:null
      }
    }
  }
}

var linkedlist=Back(starting_pointer);
console.log(linkedlist);