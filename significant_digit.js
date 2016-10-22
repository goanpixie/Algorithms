function significant_digit(num){
  var power=1;
  var truncated_num=Math.trunc(num)
  var n=truncated_num.toString().split([]).reverse()
  console.log(n);
    if (n.length > 0 && n[0]!=0) 
    {console.log(n[n.length-1])
      
    }
    else {function recall(num){
      var multipled_num=Math.trunc(num*Math.pow(10,power));
        if (multipled_num>0){
          console.log(multipled_num)
      }
        power++;
        recall(multipled_num)
    }
    }
 }
significant_digit(0.99)

//spits out the digit greater than 0 in the number from the leftmost side