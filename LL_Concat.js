function Concat(head1,head2){
 var current=head1;
  if(head1.next==null){
    head1.next=head2;
    return head1;
  }
  else{
  current=current.next;
  }
  while(current){
    if(current.next==null){
      current.next=head2;
      break;
    }
    else{
      current=current.next;
    }
  }
 
  return head1;
}

var head1={
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

var head2={
  value:10,
  next:null
}



var linkedlist=Concat(head1,head2);
console.log(linkedlist);