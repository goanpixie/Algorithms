//find duplicate number between given array of numbers from 0-10;

function find_duplicates(arr){
	var Array= (arr.sort(function(a, b){return a-b}))

	var sum=0;
	for (var i=0;i<Array.length;i++){
		sum=Array[i]++;
	}
	var duplicate_num=55-sum;
}