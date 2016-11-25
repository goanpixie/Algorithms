function Second_to_Last(head){
 var prev=head;
 var current=head.next;
 if(head.next==null){
   return null;
 }
 while(current){
   if(current.next==null){
    console.log(prev.value);
    current=current.next;
   }
   else{
     prev=current;
     current=current.next;
   }
  }
  return head;
}


var head={
  value:6,
  next:{
    value:4,
    next:{
      value:3,
      next:{
        value:2,
        next:null
      }
    }
  }
}




var linkedlist=Second_to_Last(head);
console.log(linkedlist);