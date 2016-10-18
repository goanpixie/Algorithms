//find the missing number from giving array of numbers between 1-10


// 1.
function find_num_missing(arr){
	var sum=0;
	for (var i=0;i<arr.length;i++){
		sum=arr[i]++;
	}
	var missing_num=55-sum;
}


// 2.
function find_num_missing(arr){
	var temp;
	for (var i=0;i<arr.length;i++){

		if (arr[i+1]-arr[i]!==1){
			return {
				missing num: arr[i]+1;
			}
		}
	}
}