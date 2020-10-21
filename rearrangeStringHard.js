const Heap = require('./collections/heap'); //http://www.collectionsjs.com

function rearrange_string(str) {
  charFrequencyMap = {};
  for (i = 0; i < str.length; i++) {
    const chr = str[i];
    if (!(chr in charFrequencyMap)) {
      charFrequencyMap[chr] = 1;
    } else {
      charFrequencyMap[chr]++;
    }
  }

  const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  // add all characters to the max heap
  Object.keys(charFrequencyMap).forEach((char) => {
    maxHeap.push([charFrequencyMap[char], char]);
  });

  let previousChar = null,
    previousFrequency = 0,
    resultString = [];
  while (maxHeap.length > 0) {
    const [frequency, char] = maxHeap.pop();
    // add the previous entry back in the heap if its frequency is greater than zero
    if (previousChar !== null && previousFrequency > 0) {
      maxHeap.push([previousFrequency, previousChar]);
    }
    // append the current character to the result string and decrement its count
    resultString.push(char);
    previousChar = char;
    previousFrequency = frequency - 1; // decrement the frequency
  }

  // if we were successful in appending all the characters to the result string, return it
  if (resultString.length === str.length) {
    return resultString.join('');
  }
  return '';
}

console.log(`Rearranged string:  ${rearrange_string('aappp')}`);
console.log(`Rearranged string:  ${rearrange_string('Programming')}`);
console.log(`Rearranged string:  ${rearrange_string('aapa')}`);
