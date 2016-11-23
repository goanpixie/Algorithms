function length(starting_pointer){
  var head=starting_pointer;
  var runner=head.next;
  var count=1;
  while(runner){
    count++;
    runner=runner.next;
  }
  return count;
}

var starting_pointer={
  value:4,
  next:{
    value:5,
    next:{
      value:6,
      next:{
        value:7,
        next:null
      }
    }
  }
}

var linkedlist=length(starting_pointer);
console.log(linkedlist);