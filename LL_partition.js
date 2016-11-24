function Partition(head,val){
 var current=head;
  if(head.value==val){
    if(current.next.value<val){
      var save=current.next.next;
      head=current.next;
      head.next=current;
      current.next=save;
      current=current.next;
    }
    else{
      current=current.next;
    }
    
      
  }

  // while(current){
  //   if(current.next==null){
  //     current.next=head2;
  //     break;
  //   }
  //   else{
  //     current=current.next;
  //   }
  // }
 
  return head;
}

var head={
  value:6,
  next:{
    value:4,
    next:{
      value:9,
      next:{
        value:7,
        next:null
      }
    }
  }
}




var linkedlist=Partition(head,6);
console.log(linkedlist);