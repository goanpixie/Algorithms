function Move_MaxBack(starting_pointer,value){
  var head=starting_pointer;
  
 
 if(head.value===value){
      head=head.next;
 }
 else{
      var prev=head;
      var current=head.next;
    }
      while(current){
      if(current.value===value){
        console.log(current.value)
        prev.next=current.next;
        current= current.next;
                break;
            } else {
                prev = current;
                current = current.next;
            }
  }
  return head
}

var starting_pointer={
  value:4,
  next:{
    value:6,
    next:{
      value:9,
      next:{
        value:7,
        next:null
      }
    }
  }
}

var linkedlist=Move_MaxBack(starting_pointer,9);
console.log(linkedlist);