
var queue = [];
function enqueue(val){
  queue.push(val);
  return(queue)
}

function dequeue(){
  queue.shift();
  return (queue)
}

function peek(){
  console.log(queue[0]);
}

function contains(val){
  for(var i=0;i<queue.length;i++){
    if(queue[i]==val){
      return "Value found"
    }
  }
  return "Given value is not present"
}

console.log(enqueue(2))
console.log(enqueue(3))
console.log(enqueue(4))
console.log(dequeue())
console.log(peek())
console.log(contains(4))
