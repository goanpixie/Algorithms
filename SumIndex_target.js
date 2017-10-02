var twoSum = function(nums, target) {
 var ans =[];
 var map ={};
 	for(var i=0;i<nums.length;i++){
  	if(map[target - nums[i]] !== undefined){
    ans[0] = parseInt(map[target - nums[i]]);
    ans[1] = i; 
    return ans;
    }
    map[nums[i]] = i;
    console.log(map)
  } 
}
console.log(twoSum([3,2,5,4],8))