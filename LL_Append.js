function Append_value(head,newNode,after){
  var newNode={
    value:newNode,
    next:null
  }
 
 if(head.value===after){
      var save=head.next.next;
      head.next=newNode;
      newNode.next=save;
      
 }
 else{
      var prev=head;
      var current=head.next;
      var save=head.next.next
    }
      while(current){
      if(current.value===after){
        console.log(current.value)
        current.next=newNode;
        newNode.next=save;
        current=current.next;
                break;
            } else {
                prev = current;
                current = current.next;
                save=current.next.next;
            }
  }
  return head
}
var head = {
  value:4,
  next:{
    value:6,
    next:{
      value:7,
      next:{
        value:9,
        next:null
      }
    }
  }
}



var list=Append_value(head,8,6);
console.log(list)