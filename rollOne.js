function rollOne() {
  return Math.floor((Math.random()*6)+1);
}
// rollOne()

function playFives(num){
  for(var i=1; i<=num; i++){
    rollOne();
  }
}

// playFives(3);

function playStatistics() {
  var newArray=[];
  var count=1;
  while(count<=8) {
    newArray.push(rollOne());
    count++;
  }
  // console.log(newArray.sort())
  return {
    min: newArray[0],
    max: newArray[newArray.length - 1]
   
  };
  // return playStatistics()
}

function playStatistics2(){
  var newArray=[];
  var count=1;
  while(count<=8) {
    newArray.push(rollOne());
    count++;
    console.log(newArray)
  }
  return newArray.reduce(function(a, b) {
  return a + b;
}, 0);
}
console.log(playStatistics2());

function playStatistics4(){
  var newArray=[];
  var count=1;
  while(count<=8) {
    newArray.push(rollOne());
    count++;
    console.log(newArray)
  }
  var sum= newArray.reduce(function(a, b) {
  return a + b;
}, 0);
  return sum/(newArray.length-1)
}
console.log(playStatistics4());


// console.log(playStatistics())

// var name;

// function greet (name) {
//   return 'Hello ' + name 
// }

// console.log(greet('Suhas'));

// console.log('name is', name);