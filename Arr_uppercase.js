var arr = "sita geeta"
 var name = (arr.split(" "))
              .map(x=> x.charAt(0).toUpperCase() + x.slice(1))
              .join(" "); 
console.log(name)