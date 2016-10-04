function What_happens_today(){
  var events={"Volcano":0.1,"Tsunami":0.15,"Earthquake":0.2,"Blizzard":0.25,"Meteor Strike":0.3};
  for (var key in events){
    console.log("Possibility of "+key+" today is:"+events[key]*100+"%")
  }
  
}
console.log(What_happens_today())