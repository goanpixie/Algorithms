/*
Divide two integers without using multiplication, division and mod operator.

If it is overflow, return MAX_INT.
*/


//Solution:
var divide = function(dividend, divisor) {
    var count = 0;
    if(dividend<2147483648 && dividend>-2147483648){
    console.log("I am here")
      var ans = Math.abs(dividend);
      var positive_divisor = Math.abs(divisor);
        while(ans!==0){
          ans = ans - positive_divisor;
            if(ans>=0){
              count++;
            }
            else{
            break;
            }
        }
      if(divisor<0 && dividend<0){
      console.log("I am at 1")
      return count;
      } else if(divisor<0 || dividend<0){
      console.log("I am at 2")
      return -count;
      }   
      else{
      console.log("I am at 3")
      return count;
      }
    }
    else{
    return false;
    }
};