/*Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/




var threeSum = function(nums) {
   const sets = [];
  for(let i = 0; i < nums.length - 2; i++){
    for(let j = i + 1; j < nums.length -1; j++){
      for(let k = j + 1; k < nums.length; k++){
        const a = nums[i];
        const b = nums[j];
        const c = nums[k];
        const set = [a,b,c].sort().toString();
        if(a + b +c === 0 && sets.indexOf(set) ===-1) {
          sets.push(set);
        }
      }
    }
  }
  
  return sets;
};