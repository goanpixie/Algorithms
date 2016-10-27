// Deseted island:
// 1. Given number btw 1-7, give day of the week

// function weekdayName(weekdayNum){
//   var day;
//   switch(weekdayNum){
//     case 1:
//       day="Sunday";
//       break;
//     case 2:
//       day="Monday";
//       break;  
//     case 3:
//       day="Tuesday";
//       break;
//     case 4:
//       day="Wednesday";
//       break;
//     case 5:
//       day="Thursday";
//       break;
//     case 6:
//       day="Friday";
//       break;
//     case 7:
//       day="Saturday";
//       break;
//   }
//   console.log("Today is "+ day)
// }
// weekdayName(6)

// ---------------------------------------------------------------------------------------------------------------------------------------

// 2. Given number btw 1-365, give day of the week:

function weekdayName2(dayNum){
  var day;
  var weekdayNum= dayNum%7;
  
  switch(weekdayNum){
    case 1:
      day="Sunday";
      break;
    case 2:
      day="Monday";
      break;  
    case 3:
      day="Tuesday";
      break;
    case 4:
      day="Wednesday";
      break;
    case 5:
      day="Thursday";
      break;
    case 6:
      day="Friday";
      break;
    case 7:
      day="Saturday";
      break;
  }
  console.log("Today is "+ day)
}
weekdayName2(8)

// ----------------------------------------------------------------------------------------------------------------------------------------

// 3. Select a random  number btw 1-365 for 17 times, give day of the week and the statement for each day selected:
function weekdayName2(dayNum){
  var day;
  var weekdayNum= dayNum%7;
  var st;
  
  switch(weekdayNum){
    case 1:
      day="Sunday";
      st="Enjoy your day off";
      break;
    case 2:
      day="Monday";
      st="Work Hard";
      break;  
    case 3:
      day="Tuesday";
      st="Work Hard";
      break;
    case 4:
      day="Wednesday";
      st="Work Hard";
      break;
    case 5:
      day="Thursday";
      st="Work Hard";
      break;
    case 6:
      day="Friday";
      st="Work Hard";
      break;
    case 7:
      day="Saturday";
      st="Enjoy your day off";
      break;
  }
  console.log("Today is ",day, st)
}

function someDays(){
  var num;
    for(var i=0; i<18;i++){
    var dayNum=Math.floor((Math.random() * 365) + 1);
     weekdayName2(dayNum)
    }
}
(someDays());

// ----------------------------------------------------------------------------------------------------------------------------------------

