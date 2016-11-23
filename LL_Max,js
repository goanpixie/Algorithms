function Max(starting_pointer){
  var head=starting_pointer;
  var runner=head.next;
  var max=head.value;
  while(runner){
    if(runner.value>max){
      max=runner.value;
      runner=runner.next;
    }
  }
  return max;
}

var starting_pointer={
  value:4,
  next:{
    value:5,
    next:{
      value:6,
      next:{
        value:9,
        next:null
      }
    }
  }
}

var linkedlist=Max(starting_pointer);
console.log(linkedlist);