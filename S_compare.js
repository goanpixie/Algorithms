
var s1 = [];
function push(val){
  s1.push(val);
  return(s1)
}

function dequeue(){
  s1.pop();
  return (s1)
}

function peek(){
  return(s1[s1.length-1]);
}

function contains(val){
  for(var i=0;i<s1.length;i++){
    if(s1[i]==val){
      return "Value found"
    }
  }
  return "Given value is not present"
}

function isEmpty(){
  if(s1.length==0){
    return true
  }
  return false
}

function size(){
  return (s1.length);
}

var s2 = [];
function pushs2(val){
  s2.push(val);
  return(s2)
}

function dequeues2(){
  s2.pop();
  return (s2)
}

function peeks2(){
  console.log(s2[s2.length-1]);
}

function containss2(val){
  for(var i=0;i<s2.length;i++){
    if(s2[i]==val){
      return "Value found"
    }
  }
  return "Given value is not present"
}

function isEmptys2(){
  if(s2.length==0){
    return true
  }
  return false
}

function sizes2(){
  return (s2.length);
}

function compare(s1,s2){
  var s3=[];
  var i=s1.length-1;
 while(s1.length!==0&&s2.length!==0){
  if(s1[i]!==s2[i]){
      return "not same"}
      
    s3.push(s1.pop());
    s3.push(s2.pop());
    console.log(s3);
    i++;
  }
  
 while(s3.length!==0){
   s1.push(s3.pop())
   s2.push(s3.pop())
 }
 console.log(s1)
 console.log(s2)
 return "same";

}




console.log(push(2))
console.log(push(3))
console.log(push(4))

console.log(pushs2(2))
console.log(pushs2(3))
console.log(pushs2(4))
// console.log(peek())
// console.log(peeks2())


// console.log(contains(3))
// console.log(isEmpty())
// console.log(size())
console.log(compare(s1,s2))