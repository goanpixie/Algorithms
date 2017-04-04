// #Book Index:

var pages = [1,13,14,15,37,38,70] //ans:[1,13-15,37-38,70]
var index = [];
for(var i=0;i<pages.length;i++){
  if(pages[i+1]){
  if(pages[i+1]-pages[i] ==1){
    
    var start= (pages[i] +"-");
    var end;
    var diff=1;
    
    
   
                      
    
    
  
    
    console.log(section)    
            
    
  }
  else{
    index.push(pages[i])
  }
  
  }

  
}
console.log("ans"+index)