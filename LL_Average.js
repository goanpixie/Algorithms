function Display(starting_pointer){
  var head=starting_pointer;
  var runner=head.next;
  var count=1;
  var sum=head.value;
  while(runner){
    sum=sum+runner.value;
    count++;
      runner=runner.next;
  }
  return sum/count;
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