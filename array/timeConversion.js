function timeConversion(s) {
  let timePeriod = s.slice(-2);
  let hour = s.slice(0, 2);
  
  if(timePeriod == 'AM' && hour == 12){

      s = s.replace('12','00',1)

  }else if(timePeriod == 'PM' && hour != 12){
      
      let newHour = Number(hour) + 12
      s = s.replace(hour, newHour,1)
  }
  s = s.substring(0, s.length - 2);
  console.log(s)
}

string = "12:30:11PM";
timeConversion(string);
