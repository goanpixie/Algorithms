/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
*/

//Solution1:

var reverse = function(x) {
    var str = x.toString()
    if(str[0] === "-"){
    var only_num = str.substring(1)
    var reverse = only_num.split("").reverse().join("")
     if((parseInt(reverse))>2147483647){
     return 0;
     }else{
     var full_number = Math.abs(reverse) * -1.
     return full_number;
     }
    }
    var reverse = str.split("").reverse().join("");
     if((parseInt(reverse))>2147483647){
     return 0;
     }
    return parseInt(reverse); 
};

//Solution2:

var reverse = function(x) {
    var isNegative = (x < 0);
    var val = Math.abs(x);
    var revVal = val.toString().split('').reverse().join('');
    var result =  +revVal * ((x < 0) ? -1 : 1);
    
  
    if(+revVal <= Math.pow(2, 31)) {
        return result;
    } else {
        return 0;
    }
};