function even_length(arr){
  for(var i=0;i<arr.length;i++){
   
   var sentence = arr[i].split(""); 
   if((sentence.length%2)==0){
     arr.splice(i,1);
     i--;
    
   }
   
  }
  return arr;
  
}

console.log((even_length(["love","loves","Its","Kris","K!",".","of"])))