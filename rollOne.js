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