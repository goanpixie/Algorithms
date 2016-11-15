function remove_shorter_strings(str,length){
  var array=[];
  var split= str.split("");
  console.log(split);
  var i=0;
  while(var i<split.length){
  var position=split.indexOf(" ");
  console.log(position);
  var sentence=split.slice(0,position);
  if(sentence.length>length){
    array.push(sentence[0]);
   
  }
  i+position;
  
  }