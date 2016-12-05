function word_array(str){
  var obj={};
  var newArr=[]
  var sentence=str.split("");
  for(var i=0,j=sentence.length;i<j;i++){
      (obj[sentence[i]])=(obj[sentence[i]] || 0)+1
    }
  
  for(var key in obj ){
    if(obj.hasOwnProperty(key)){
      if(obj[key]==1){
       newArr.push((key));
      }
    }
  }
  return newArr.join("")  
}
  


console.log(word_array("Snap! Crackle! Poop!"))