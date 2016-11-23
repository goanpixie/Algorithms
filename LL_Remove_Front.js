// Case1:

function Remove_Front(starting_pointer){
  var head=starting_pointer;
  if(head.next){
  var save=head.next;
  head=save;
  return head;
}
return "null_value";
}

var starting_pointer={
  value:4,
  next:null
 
}

var linkedlist=Remove_Front(starting_pointer);
console.log(linkedlist)

// Case2:

function Remove_Front(starting_pointer){
  var head=starting_pointer;
  if(head.next){
  var save=head.next;
  head=save;
  return head;
}
return "null_value";
}

var starting_pointer={
  value:4,
  next:null
 
}

var linkedlist=Remove_Front(starting_pointer);
console.log(linkedlist)