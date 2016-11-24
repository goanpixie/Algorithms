function Remove_negatives(starting_pointer){
  var head=starting_pointer;
  
 
 if(head.value<0){
   
     var save=head.next;
     head=save;
 }
 else{
      var prev=head;
      var current=head.next;
    }
      while(current){
      if(current.value<0){
        console.log(current.value)
        var save=current.next;
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
    value:-6,
    next:{
      value:9,
      next:{
        value:7,
        next:null
      }
    }
  }
}

var linkedlist=Remove_negatives(starting_pointer);
console.log(linkedlist);