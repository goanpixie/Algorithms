var string= "IslanD"
// var regex = new RegExp("A-Z")
var firstChar =string.charAt(0)
console.log(firstChar)
var regex = /^[A-Z]/g
// console.log(regex.test(string.charAt(0)))
if(firstChar.match(regex)){
  console.log("First character of string is uppercase")
}
else{
  console.log("First character of string is not uppercase")
}
