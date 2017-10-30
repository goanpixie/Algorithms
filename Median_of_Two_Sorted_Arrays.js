Median of Two Sorted Arrays


//Solution1:(399ms)
var findMedianSortedArrays = function(nums1, nums2) {
    var Arr = nums1.concat(nums2).sort(function(a, b){return a - b});
    console.log(Arr)
    var halfway = Arr.length/2;
    if(Arr.length%2 !== 0){
      return(Arr[Math.floor(halfway)])
    }
    var ans = ((Arr[halfway]) + (Arr[(halfway)-1]))/2;
    return ans;   
};


//Solution2:(236ms)
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = nums1.concat(nums2);
    newArr.sort(function(a, b) {
        if (parseInt(a) >= parseInt(b)) {
            return 1;
        } else if (parseInt(a) == parseInt(b)) {
            return 0;
        } else {
            return -1;
        }
    });
    let left = Math.floor((newArr.length-1)/2);
    let right = Math.ceil((newArr.length-1)/2);
    // console.log(newArr);
    // console.log(newArr.length);
    // console.log(left);
    // console.log(right);
    return (newArr[left] + newArr[right])/2;
};