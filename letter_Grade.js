function letter_Grade(num){
  if(num>=90){
    console.log("Score: "+num+" Grade:A")
  }
  if(num<=90 && num>80){
    console.log("Score: "+num+" Grade:B")
  }
  if(num<=80 && num>70){
    console.log("Score: "+num+" Grade:C")
  }
  if(num<=70 && num>60){
    console.log("Score: "+num+" Grade:D")
  }
  if(num<60){
    console.log("Score: "+num+" Grade:F")
  }
  
}
(letter_Grade(78))