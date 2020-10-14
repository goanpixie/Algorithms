//Find K largest number in given array
const Heap = require('./collections/heap');

function TopK(nums, k) {
  const minHeap = new Heap([], null, (a, b) => b - a);
  for (let i = 0; i < k; i++) {
    minHeap.push(num[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }

  return minHeap.toArray();
}
