function Display(starting_pointer){
  var head=starting_pointer;
  var runner=head.next;
  var display="";
  display+=head.value;
  while(runner){
    display=display+runner.value;
      runner=runner.next;
  }
  return display;
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