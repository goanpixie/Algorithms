function toRoman(num) {  
  var result = '';
  var decimal = [1000, 500, 100, 50, 10, 5, 1];
  var roman = ["M", "D", "C", "L", "X", "V", "I"];
  for (var i = 0;i<=decimal.length;i++) {
  // looping over every element of our arrays
    while (num%decimal[i] < num) {   
    // keep trying the same number until we need to move to a smaller one     
      result += roman[i];
      // add the matching roman number to our result string
      num -= decimal[i];
      // subtract the decimal value of the roman number from our number
    }
  }
  return result;
}

console.log(toRoman(8));