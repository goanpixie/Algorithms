function contains(starting_pointer,value){
  var head=starting_pointer;
  var runner=head.next;
  while(runner){
    if(runner.value==value){
      return "Here is your friend "+value
    }
    runner=runner.next;
  }
  return "Your friend isnt here"
}

var starting_pointer={
  value:4,
  next:{
    value:5,
    next:{
      value:6,
      next:null
      
    }
  }
}

var linkedlist=contains(starting_pointer,7);
console.log(linkedlist);