// #sort 

// var num=["Issac","Albert","Heisenberg"]
// console.log(num.sort((a,b)=>b.length-a.length))
                        
var lesson =[
  {title:"JS",
  view:8768
},
{title:"Ruby",
  view:1753
  
},

{title:"Python",
  view:7656
  }]
  
  var output=lesson
                  .sort((a,b)=>(b.view-a.view))
                  .map(x =>`${x.title} (${x.view})`)
                  .join("\n")
  
  
  console.log(output)

// #Reduce:
var val = [1,2,3,4,5]
var answer = val.reduce((prev,next)=> prev+next)  
console.log(answer)
