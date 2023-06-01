//getTime func getting  live local time using js date class
const getTime = () => {
  const timeClass = new Date();
  const liveTimeDiv = document.getElementById("live-time");
  const liveTime = timeClass.toLocaleTimeString();
  liveTimeDiv.innerHTML = ` ${liveTime}`;
  //return live time t00
  return liveTime;
};

//using set setInterval Showing Live Time otherwise it would not be dynamic
setInterval(getTime, 1000);
const time = getTime();
//getting important elements from HTML
const alarmListDiv = document.getElementById("alarm-list-container");
const setAlarmButton = document.getElementById("set-alarm-button");

//on clink on setalarm function the alarm will be set
setAlarmButton.onclick = () => {
  //getting important elements from HTML
  const getHour = document.getElementById("input-hour").value;
  const getMinute = document.getElementById("input-minute").value;
  const getSecond = document.getElementById("input-second").value;
  const getAmPm = document.getElementById("am-pm-selector").value;

  //checking some boundaries
  if (getHour <= 12 && getMinute <= 60 && getSecond <= 60) {
    alarmListDiv.innerHTML += `<div 
    style="width:90%;
    height:2rem;
    background-color:rgba(24, 23, 23, 0.527);
    display:flex;
    margin: 0.5rem 1rem;
    border-radius:0.6rem;
    color:white;
    justify-content:space-between">

    <div class="alarm-list-item""
    style="padding:0.2rem 1rem;
    ">${getHour}:${getMinute}:${getSecond} ${getAmPm}</div>
    <button class="alarm-delete-button"
    style="background-color:rgba(34, 25, 23, 0.527);
    color:white;
    border:none;
    width:5rem;
    border-radius:0.6rem"
    >delete</buttom>
    </div>`;
  } else {
    alert("Hour Sould be <= 12 ,Minute Sould be <= 60 ,Second Sould be <= 60 ");
  }

  //settiong alarm button
  const alarmDeleteButton = document.querySelectorAll(".alarm-delete-button");
  alarmDeleteButton.forEach((button) => {
    //on click the specific alarm div will be deleted
    button.onclick = () => {
      button.parentNode.remove();
    };
  });


  //setting alarm button
  const ringAlarm = () => {
    const alarmAlertDiv = document.querySelectorAll(".alarm-list-item");
    alarmAlertDiv.forEach((div) => {
      const alarmTime = div.innerText.replace("delete", "");
      //if liveTime match with any alarm time it will show a alert
      if (alarmTime === getTime()) {
        alert(`its ${alarmTime}`);
      }
    });
  };
  setInterval(ringAlarm, 1000);
};
