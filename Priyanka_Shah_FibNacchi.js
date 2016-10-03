function fib() {
  var first = 1;
  var second = 1;
  var counter = 0;
  function nacci() {
    if (counter == 0 || counter == 1) {
      console.log(first)
      counter += 1;
      return first;
    } else {
      counter += 1;
      var newFibNumber = first + second;
      first = second;
      second = newFibNumber;
      console.log(newFibNumber);
      return newFibNumber;
    }
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter()
