//Optimizing finding out Prime numbers:


function isPrime1(num){
	if(num<2 || num !=parseInt(num)){
		return false;
	}

	for(var count=2; count<num; count++){
		if(num/count == parseInt(num/count)){
			return false;
		}
	}
return true;
}

function isPrime2(num){
	if(num<2 || num !=Math.floor(num)){
		return false;
	}

	for(var count=2; count<num; count++){
		if(num/count == Math.floor(num/count)){
			return false;
		}
	}
return true;
}

function isPrime3(num){
	if(num<2 || num%1){
		return false;
	}

	for(var count=2; count<num; count++){
		if(num%count == 0){
			return false;
		}
	}
return true;
}


function isPrime4(num){
	if(num%2 ==0 && num>2){
		return false;
	}
  	if(num<2 || num%1){
		return false;
	}

	for(var count=3; count<num; count+=2){
		if(num%count == 0){
			return false;
		}
	}
return true;
}

function isPrime5(num){
	if(num%2 ==0 && num>2){
		return false;
	}
  	if(num<2 || num%1){
		return false;
	}

	for(var count=3; count<Math.sqrt(num); count+=2){
		if(num%count == 0){
			return false;
		}
	}
return true;
}

function isPrime6(num){
	if(num%2 ==0 && num>2){
		return false;
	}
  	if(num%3 ==0 && num>3){
		return false;
	}
  	if(num<2 || num%1){
		return false;
	}

	for(var count=5; count<Math.sqrt(num); count+=4){
		if(num%count == 0){
			return false;
		}
    count+=2;
    if(num%count == 0){
			return false;
		}
	}
return true;
}

function countPrimesUpTo(limit, primeFn){
	var count = 0;
	var start = performance.now();
	for(var num = 0;  num<=limit; num++){
	 if (primeFn(num)){
	 	count++;
	 }
	}
	var end = performance.now();
	return "The function " + primeFn.name +"()" +" found " +count + " prime" +" in " +(end-start) +" msec.";
}

console.log(countPrimesUpTo(1000000,isPrime6));