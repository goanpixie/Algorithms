const Heap = require('./collections/heap'); //http://www.collectionsjs.com

function find_sum_of_elements(nums, k1, k2) {
  // insert all numbers in a min heap
  const minHeap = new Heap(nums, null, (a, b) => b - a);

  // remove k1 small numbers from the min heap
  for (i = 0; i < k1; i++) {
    minHeap.pop();
  }

  let elementSum = 0;
  // sum next k2-k1-1 numbers
  for (i = 0; i < k2 - k1 - 1; i++) {
    elementSum += minHeap.pop();
  }

  return elementSum;
}

console.log(
  `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
    [1, 3, 12, 5, 15, 11],
    3,
    6
  )}`
);
console.log(
  `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
    [3, 5, 8, 7],
    1,
    4
  )}`
);
