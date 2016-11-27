
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

console.log(enqueue(2))
console.log(enqueue(3))
console.log(enqueue(4))
console.log(dequeue())
console.log(peek())

