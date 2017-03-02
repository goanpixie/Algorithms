
function findShort(s){
var word= s.split(" ");
var shortest_word=word[0].length;

for(var i=1;i< word.length;i++){
if (word[i].length <= shortest_word){
shortest_word= word[i].length;
}

}
return(shortest_word);
}
console.log(findShort("bitcoin take over the world"))