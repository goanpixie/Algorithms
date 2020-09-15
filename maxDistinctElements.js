const Heap = require('./collections/heap'); //http://www.collectionsjs.com

function find_maximum_distinct_elements(nums, k) {
  distinctElementsCount = 0;
  if (nums.length <= k) {
    return distinctElementsCount;
  }

  // find the frequency of each number
  numFrequencyMap = {};
  nums.forEach((num) => {
    if (!(num in numFrequencyMap)) {
      numFrequencyMap[num] = 1;
    } else {
      numFrequencyMap[num]++;
    }
  });

  const minHeap = new Heap([], null, (a, b) => b - a);
  // insert all numbers with frequency greater than '1' into the min-heap
  Object.keys(numFrequencyMap).forEach((num) => {
    if (numFrequencyMap[num] === 1) {
      distinctElementsCount += 1;
    } else {
      minHeap.push(numFrequencyMap[num]);
    }
  });

  // following a greedy approach, try removing the least frequent numbers first from the min-heap
  while (k > 0 && minHeap.length > 0) {
    const frequency = minHeap.pop();
    // to make an element distinct, we need to remove all of its occurrences except one
    k -= frequency - 1;
    if (k >= 0) {
      distinctElementsCount += 1;
    }
  }

  // if k > 0, this means we have to remove some distinct numbers
  if (k > 0) {
    distinctElementsCount -= k;
  }

  return distinctElementsCount;
}
