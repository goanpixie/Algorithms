function Prepend_value(head,newNode,before){
  var newNode={
    value:newNode,
    next:null
  }
 
 if(head.value===before){
      var save=head.next;
      head=newNode;
      newNode.next=head;
      head.next=save;
 }
 else{
      var prev=head;
      var current=head.next;
    }
      while(current){
      if(current.value===before){
        console.log(current.value)
        prev.next=newNode;
        newNode.next=current;
        current=current.next;
                break;
            } else {
                prev = current;
                current = current.next;
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



var list=Prepend_value(head,8,6);
console.log(list)