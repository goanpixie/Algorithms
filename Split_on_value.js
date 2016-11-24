function Split_on_value(head,num){
while(head){
  if(head.value==num){
    return head;
  }
  else{
    head=head.next;
  }
  return head;
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



var list=Split_on_value(head,6);
console.log(list)