var str_anagrams(str){
  var sentence=str.split("");
  var count=0;
  var s_l=sentence.length*2;
  var obj={};
  obj.push(sentence.join(""))
  
  while(count<=s_l){
    var new_anagram=sentence.Math.random();
    if(new_anagram.join("")!==obj(key){
      obj.push(new_anagram.join(""));
    })
  }
  return obj;
}
console.log(str_anagrams("lim"))