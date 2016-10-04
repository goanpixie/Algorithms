function swapAltIndices(arr) {
  var i = 0;
  var j = arr.length - 1;
  var isAlt = true;
  while(i <= j) {
    if (isAlt === true) {
      // var temp = arr[i];
      // arr[i] = arr[j];
      // arr[j] = temp;
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i += 1;
      j -= 1;
      isAlt = false;
    } else {
     i += 1;
     j -= 1;
     isAlt = true
    }
  }
  return arr;
}


console.log(swapAltIndices([45,3,1,6,5,4,2,7]))

// Explanation:
// var arr = [3, 2, 4, 5, 6, 1]


// [1, 2, 3]

/*
 i = 0
 j = 5
 
 i = 1
 j = 4
 isAlt = false
 
 1 <= 4 SO while loop will proceed
 
 isAlt is false so let's go to else part
 i = 2
 j = 3
 isAlt = true
 
 2 <= 3
 isAlt === true
 
 
*/