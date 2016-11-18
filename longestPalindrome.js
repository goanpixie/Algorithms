var longestPalindrome = function(string) {

  var length = string.length;
  var result = "";

  var centeredPalindrome = function(left, right) {
    while (left >= 0 && right < length && string[left] === string[right]) {
      //expand in each direction.
      left--;
      right++;
    }

    return string.slice(left + 1, right);
  }; 

  for (var i = 0; i < length - 1; i++) {
    var oddPal = centeredPalindrome(i, i); 
    var evenPal = centeredPalindrome(i, i);

    if (oddPal.length > result.length)
      result = oddPal;
    if (evenPal.length > result.length)
      result = evenPal;
  }

  return "the palindrome is: " + result + " and its length is: " + result.length;
};
console.log(longestPalindrome("Yikes my favorite racecar erupted!"))
