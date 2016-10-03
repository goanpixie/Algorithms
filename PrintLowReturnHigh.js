function PrintLow_ReturnHigh(Arr){
	var lowest=Arr[0];
	var highest=Arr[0];
	for (var i=0; i<Arr.length;i++){
		if (Arr[i]<lowest){
			lowest=Arr[i]
		}

		if (Arr[i]>highest){
			highest=Arr[i]
		}

	}
	console.log(lowest);
	return(highest);
}

console.log(PrintLow_ReturnHigh([-1,2,3,5,8]))
