function zipline(head1, head2){
  while(head1.next &&head2.next){
    var save1=head1.next;
    var save2=head2.next;
    head1.next=head2;
    head2.next=save1;
    save1.next=save2;
    head1=head1.next;
    head2=head2.next;
  }
  return head1;zipline
}


var head1={
  value:1,
  next:{
    value:2,
    next:{
      value:3,
      next:{
        value:4,
        next:null
      }
    }
  }
}

var head2={
  value:5,
  next:{
    value:6,
    next:{
      value:7,
      next:{
        value:8,
        next:null
      }
    }
  }
}

var linkedlist=zipline(head1,head2);
console.log(linkedlist);