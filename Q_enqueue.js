
var queue = [];
function enqueue(val){
  queue.push(val);
  return(queue)
}

function dequeue(){
  queue.shift();
  return (queue)
}

console.log(enqueue(4))
console.log(enqueue(5))
console.log(enqueue(5))
console.log(dequeue())

