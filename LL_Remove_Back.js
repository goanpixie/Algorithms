function Remove_Back(starting_pointer){
  var head=starting_pointer;
  var runner=head;
  while(runner){
    console.log(runner.value)
    if(runner.next.next==null){
      runner.next=null;
    }
      runner=runner.next;
  }
  return head
  
  
}

var starting_pointer={
  value:4,
  next:{
    value:5,
    next:{
      value:6,
      next:{
        value:7,
        next:null
      }
    }
  }
}

var linkedlist=Remove_Back(starting_pointer);
console.log(linkedlist);