/*

Determine whether an integer is a palindrome. Do this without extra space.

click to show spoilers.

Some hints:
Could negative integers be palindromes? (ie, -1)

If you are thinking of converting the integer to string, note the restriction of using extra space.

You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

There is a more generic way of solving this problem.
*/

//Solution1: consider even negative number can be palindrome
var isPalindrome = function(x) {
    var y = Math.abs(x);
     if(-2147447412<y< Math.pow(2, 31)){
    var z = y.toString().split('');
       for(var i=0;i<z.length/2;i++){
         if(z[i] === z[z.length -1-i]){
         } else{
         return false;
         }
        }
        return true;
        }
     else{
     return false;
   }
};

console.log(isPalindrome([-2147447412]))


//Solution2: All negative number return false
var isPalindrome = function(x) {
    let num_str = '' + x;
    
    let i = 0;    
    while(num_str.length/2 > i){
        if(num_str[i] !== num_str[num_str.length - i - 1]){
            return false;
        }
        
        i++;
    }
    
    return true;
};


//