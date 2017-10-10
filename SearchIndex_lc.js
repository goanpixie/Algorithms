/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
*/




//Solution1:
var searchInsert = function(nums, target) {
 	var index = nums.indexOf(target);
   if(index>=0){
   	return index;
   }else if(target<nums[0]){
   return 0;
   }else if(target>nums[nums.length-1]){
   return nums.length;
   }
   	for(var i=0;i<nums.length;i++){
      if(target<=nums[i]){
      	return i;
      }
   	}
};



//Solution2: 92ms
var searchInsert = function(nums, target) {
    let len = nums.length
    if (!len) return 0

    let start = 0, end = len - 1
    while (true) {
      if (start == end && nums[start] != target) return nums[start] > target ? start : start + 1

      let mid = (start + end) >> 1

      if (nums[mid] == target) return mid

      if (nums[mid] < target) {
        if (nums[mid + 1] > target) return mid + 1

        start = Math.ceil((start + end) / 2)
      }

      if (nums[mid] > target) { 
        if (mid == start) return start
        else if (nums[mid - 1] < target) {
          return mid
        }
        end = mid 
      }      
    }
}