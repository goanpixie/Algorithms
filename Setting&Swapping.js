var mynumber=42;
var myName="Priyanka";
var result;
function swap(){
	var temp=mynumber;
	mynumber=myName;
	myName=temp;
	console.log(mynumber);
	console.log(myName);
	return result;
}

swap();