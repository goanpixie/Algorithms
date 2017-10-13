//Find Palindrome in an array:

//Solution1:
console.time('find_palidromes');
function find_palidromes(Arr){
var P_arr = [];
for(var i=0;i<Arr.length;i++){
var word = Arr[i].toLowerCase();
var length = word.length;
var j = 0;
 while(j<length/2){
 	if(word.charAt(j) == word.charAt(length-i-1)){
   j++;
  }
  else{
  break;
  }
  P_arr.push(word);
 }
 console.log(P_arr)
}
return P_arr;
}

//Solution2:
var isPalindrome = function(s) {
console.log(s)
var no_P = s.replace(/[^A-Za-z0-9]|_/g, "")
         							.replace(/\s+/g, "") 
if(no_P.length <=1){
return true;
}
var word = no_P.toLowerCase();
console.log(word)
var length = word.length;
var j = 0;
 while(j<length/2){
 	if(word.charAt(j) == word.charAt(length-j-1)){
   j++;
  }
  else{
  return false;
  }
 }
 return true;
};
console.log(isPalindrome("aA"))


