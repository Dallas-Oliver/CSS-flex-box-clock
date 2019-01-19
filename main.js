function updateTime() {
  let today = new Date();
  let day = today.getDay();
  let month = today.getMonth();
  let date = today.getDate();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  let timePeriod = hours < 12 ? "AM" : "PM";
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours === 0 ? 12 : hours;

  let currentTime = hours + ":" + minutes + ":" + seconds;

  let clockDisplay = document.getElementById("time-numbers");
  clockDisplay.innerHTML = currentTime;

  let timeOfDay = document.getElementById("time-period");
  timeOfDay.innerHTML = timePeriod;

  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  let displayDay = document.getElementById("day-portion");
  displayDay.innerHTML = day;

  let displayMonth = document.getElementById("month-portion");
  displayMonth.innerHTML = month;

  let displayDate = document.getElementById("date-portion");
  displayDate.innerHTML = date;
}

setInterval(updateTime, 1000);
