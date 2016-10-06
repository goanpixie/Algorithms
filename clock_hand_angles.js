function clock_hand_angles(secs){
  var time=[];
  var CT=[3600,60,1];
  for (var i=0;i<CT.length;i++){
    var quotient= (secs/CT[i]);
    time.push(Math.trunc(quotient));
    var remainder=(secs%CT[i]);
    secs=remainder;
  }
  var sec_degrees=(time[2]*6);
  console.log(sec_degrees);
  var min_degrees=(time[1]*6 + time[2]*0.1);
  console.log(min_degrees);
  if (time[0]>12){
    var new_hr=time[0]-24
  }
  var hr_degrees=(new_hr*30 + time[1]*0.5 +time[2]*0.0083);
  console.log(hr_degrees);
  
  console.log("Hour hand: ",hr_degrees, "degs","Minute hand: ",min_degrees, "degs","Second hand:",sec_degrees, "degs")
  return(time)
}
console.log(clock_hand_angles(119730))