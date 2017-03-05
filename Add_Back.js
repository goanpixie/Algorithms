//Add back

function Add_Back(starting_pointer){
  var head=starting_pointer;
  var newNode={
    value:8,
    next:null
  }
  var runner=head.next;
  while(runner){
    console.log(runner.value)
    if(runner.next==null){
      runner.next=newNode;
      newNode.next=null
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

var linkedlist=Add_Back(starting_pointer);
console.log(linkedlist);