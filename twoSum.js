//Given an array if the sum of any two numbers is 0 return true else false.

function twoSum(arr){
    //sort the array in ascending order
    let sortedArr = arr.sort((a,b)=>(b-a))
    let startWindow =0;
    let endWindow = arr.length-1;
    while(startWindow<endWindow){
        let sum = sortedArr[startWindow]+sortedArr[endWindow];
        if(sum ===0){
            return true;
        }else if(sum>0){
            endWindow--
        }else{
            startWindow++
        }
    }
    return true;
}

console.log(twoSum([-4,3,5,7,4]))
console.log(twoSum([-11,5,-7,7,4]))