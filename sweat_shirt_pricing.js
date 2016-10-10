function sweat_shirt_pricing(num){
  if (num==1){
    console.log("Your total is :$20")
  }
  if(num==2){
    var total= Math.round((num*20)-0.09*(num*20));
    console.log("Your total is : "+"$"
    +total)
  }
  if(num==3){
    var total= Math.round((num*20)-0.19*(num*20));
    console.log("Your total is : "+"$"
    +total)
  } 
  if(num==4 || num>4){
    var total= Math.round((num*20)-0.35*(num*20));
    console.log("Your total is : "+"$"
    +total)
  } 
}
sweat_shirt_pricing(9)