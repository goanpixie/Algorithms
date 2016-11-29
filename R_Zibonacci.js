
var Zibonacci = function(n) {
    if(n <= 2) {
        return 1;
    } else if(n%2===1){
      return Zibonacci(n/2) + Zibonacci(n/2 - 1) +1;
    }
    else{
       return Zibonacci(n/2) + Zibonacci(n/2 +1) + 1;
    }
};
console.log(Zibonacci(5))