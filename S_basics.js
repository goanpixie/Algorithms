
var q1 = [];
function push(val){
  q1.push(val);
  return(q1)
}

function dequeue(){
  q1.pop();
  return (q1)
}

function peek(){
  console.log(q1[q1.length-1]);
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



console.log(push(2))
console.log(push(3))
console.log(push(4))
console.log(dequeue())
console.log(peek())
console.log(contains(3))
console.log(isEmpty())
console.log(size())