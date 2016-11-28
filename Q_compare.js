
var q1 = [];
function enqueue(val){
  q1.push(val);
  return(q1)
}

function dequeue(){
  q1.shift();
  return (q1)
}

function peek(){
  console.log(q1[0]);
}

function contains(val){
  for(var i=0;i<q1.length;i++){
    if(q1[i]==val){
      return "Value found"
    }
  }
  return "Given value is not present"
}

function isEmpty(){
  if(q1.length==0){
    return true
  }
  return false
}

function size(){
  return (q1.length);
}

var q2 = [];
function enqueueq2(val){
  q2.push(val);
  return(q2)
}

function dequeueq2(){
  q2.shift();
  return (q2)
}

function peekq2(){
  console.log(q2[0]);
}

function containsq2(val){
  for(var i=0;i<q2.length;i++){
    if(q2[i]==val){
      return "Value found"
    }
  }
  return "Given value is not present"
}

function isEmptyq2(){
  if(q2.length==0){
    return true
  }
  return false
}

function sizeq2(){
  return (q2.length);
}

function Compare_queues(q1,q2){
  for(var i=0;i<=q1.length &&i<=q2.length;i++){
    console.log(q1[i])
  if(q1[i]!==q2[i]){
    return "Not same";
  }
}
return "q1 and q2 are same";
}

console.log(enqueue(2))
console.log(enqueue(3))
console.log(enqueue(4))
// console.log(dequeue())
// console.log(peek())
// console.log(contains(4))
// console.log(isEmpty())
// console.log(size())

console.log(enqueueq2(2))
console.log(enqueueq2(3))
console.log(enqueueq2(4))
// console.log(dequeueq2())
// console.log(peekq2())
// console.log(containsq2(7))
// console.log(isEmptyq2())
// console.log(sizeq2())
// console.log(peek())
console.log(Compare_queues(q1,q2))