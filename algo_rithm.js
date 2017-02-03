function sentenceCount(string) {
var count=0;
  for(var i=0;i<string.length;i++){
    if("!.?".indexOf(string[i])>-1){
      count++;
    }
  }
return count;
}

//return string.match(/[!?\.]/g).length ---one sentence answer
