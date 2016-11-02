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

// 4.Given a number btw 1-12, gives the month:

function monthName(monthNum){
  var month;
  
  switch(monthNum){
    case 1:
      month="January";
      break;
    case 2:
      month="February";
      break;  
    case 3:
     month="March";
      break;
    case 4:
      month="April";
      break;
    case 5:
      month="May";
      break;
    case 6:
     month="June";
      break;
    case 7:
      month="July";
      break;
    case 8:
      month="August";
      break;
    case 9:
      month="September";
      break;
    case 10:
      month="October";
      break;
    case 11:
      month="November";
      break;
    case 12:
      month="Decemeber";
      break;
  }
  console.log("This is ",month)
}

(monthName(12));

// ----------------------------------------------------------------------------------------------------------------------------------------

// 4.Given a number btw 1-12, gives the month and number of days/month:

function monthToDays(monthNum){
  var month;
  var days;
  
  switch(monthNum){
    case 1:
      month="January";
      days=31;
      break;
    case 2:
      month="February";
      days=28
      break;  
    case 3:
     month="March";
     days=31
      break;
    case 4:
      month="April";
      days=30
      break;
    case 5:
      month="May";
      days=31
      break;
    case 6:
     month="June";
     days=30
      break;
    case 7:
      month="July";
      days=31;
      break;
    case 8:
      month="August";
      break;
      days=31
    case 9:
      month="September";
      days=30
      break;
    case 10:
      month="October";
      days=31
      break;
    case 11:
      month="November";
      days=30
      break;
    case 12:
      month="Decemeber";
      days=31
      break;
  }
  console.log("Welcome to ",month, "which has ", days, "days")
}

(monthToDays(12));

// ----------------------------------------------------------------------------------------------------------------------------------------

// 5.Given a number btw 1-365, gives the month:



function dayTomonth(days){
var monthNum;
if (days>31){
 var temp=days-31;
 if (temp>28){
   var temp1=temp-28;
    if (temp1>31){
      var temp2=temp1-31
        if (temp2>30){
        var temp3=temp2-30;
          if (temp3>31){
          var temp4=temp3-31;
            if (temp4>30){
            var temp5=temp4-30;
               if (temp5>31){
               var temp6=temp5-31;
                 if (temp6>31){
                 var temp7=temp6-31;
                   if (temp7>30){
                   var temp8=temp7-30;
                     if (temp8>31){
                     var temp9=temp8-31;
                       if (temp9>30){
                       monthNum=12;
                       }
                       else{monthNum=11}
                     }
                     else{monthNum=10}
                   }
                   else{monthNum=9}
                 }
                 else{monthNum=8}
               }
               else{monthNum=7}
            }
            else{monthNum=6}
          }
          else{monthNum=5}
        }
        else{monthNum=4}
    }
    else{monthNum=3}
 }
  else{monthNum=2}
}
else{monthNum=1}
monthName(monthNum);
}
dayTomonth(375);



