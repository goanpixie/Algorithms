var q1 = [];
function enqueue(val){
  q1.push(val);
  return(q1)
}

function dequeue(){
  queue.shift();
  return (queue)
}

var s1 = [];
function push(val){
  s1.push(val);
  return(s1)
}

function reorder_absolute(s1,q1){
  var max=console.log(dequeue());
  console.log(max)
  var i=0;
  while(q1.length!==0){
    var next=console.log(dequeue());
    if(next>max){
      max=next;
      i++;
    }
    s1.push(next);
    i++;
    
  }
  q1.push(max);
  
}




console.log(enqueue(2))
console.log(enqueue(3))
console.log(enqueue(4))

// console.log(pushs2(2))
// console.log(pushs2(3))
// console.log(pushs2(4))
// console.log(peek())
// console.log(peeks2())


// console.log(contains(3))
// console.log(isEmpty())
// console.log(size())
console.log(compare(s1,s2))
