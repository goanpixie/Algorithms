

//whitelist:
function  whitelist(str){
var str =str.replace(/[^\w\s]/gi, "");
return str;
}

console.log(whitelist("car,!p:'[]ool"))
//Answer:"carpool"


//blacklist:
function blacklist(str){
var str =str.replace(/[\w\s]/gi, "");
return str;
}

console.log(blacklist("fr5*():king Awe'\]some"))
//ANswer:*():'