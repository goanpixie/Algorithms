/*
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
*/

//Solution1: 262ms
var removeDuplicates = function(nums) {
    var j=0;
    for(var i=1;i<nums.length;i++){
    	if (nums[j]==nums[i]){
      	nums.splice(i,1);
      	i--;   
      }
      else{
       j++;
      }
    }
    return nums.length;   
};

//Solution2: 152ms

var removeDuplicates = function(nums) {
    if(nums.length==0){
    return 0};
    let j=0;
    for(var i=1;i<nums.length;i++){
      if (nums[i]!==nums[j]){
          j++;
          nums[j]=nums[i];
      }
     }
    return j+1;   
};