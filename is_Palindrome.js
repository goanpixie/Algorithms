function is_Palindrome(str){
  var obj={};
  var lower_case=str.toLowerCase().split("");
  console.log(lower_case)
  
  
    for(var i=0,j=lower_case.length;i<j;i++){
      obj[lower_case[i]]=(obj[lower_case[i]] || 0)+1
    }
    
    for(var key in obj){
      if(obj.hasOwnProperty(key)){
        if(key>1 && key!==" "){
          return false
        }
        else{
          return true;
        }
        
          
        
      }
    }
    
    console.log(obj) 
}
console.log(is_Palindrome("Mr Jock TV quiz PhD bags few lynx"))