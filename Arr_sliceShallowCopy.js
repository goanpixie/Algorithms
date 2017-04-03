// #shallow copy using slice:
// var obj={name: "Shane"}
// var arr = ["sita","geeta","babita"]
// // var copy = arr.slice();
// // copy[1].name =("amrita")
// // console.log(arr);
// // console.log(copy);

// var copy = arr.slice(0,-1);
// console.log(copy)

var person={
  name:"shane-osbourne"
}

var filters={
  'deslugify': x=>x.replace("-"," "),
  'uppercase': x=>x.toUpperCase()
}

var input = 'name | deslugify | uppercase'
  console.log(input);

var sections = input.split("|").map(x=>x.trim())
  console.log(sections)
  
var ref = person[sections[0]]
  console.log(ref)
  
var output = sections
                        .slice(1)
                        .reduce((prev,next)=>{
                          if (filters[next]){
                            return filters[next].call(null,prev)
                          }
                          else{
                            return prev;
                          }
                        },ref);
  console.log(output)