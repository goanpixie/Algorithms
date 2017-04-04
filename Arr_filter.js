// #filter
// var num=[4,5,6,7,8,9]
// var filtered=num.filter(x => x>7)
// console.log(filtered)

var lessons=[
  {name:"Big Bang Theory",
  views:7575,
  category:["Comedy","Science"]
    
  },
  
  {name:"Modern Family",
  views:8876,
  category:["Gayism","Comedy"]
    
  },
  
   {name:"Grey's Anatomy",
  views:8785,
  category:["Melodrama","Medicine"]
    
  },
  
   {name:"Seinfield",
  views:8988,
  category:["Comedy","Nothing"]
    
  }
  
  ]
  
  var minViews = 8500;
  var serchTerm="Comedy"
  
  var filtered=lessons
                      .filter(x => x.category.indexOf(serchTerm)>-1)
                      .filter(x => x.views > minViews)
                      .sort((a,b)=>b.views-a.views)
                      .map(x=>` <li>${x.name}(${x.views})</li>`)
  console.log(filtered)