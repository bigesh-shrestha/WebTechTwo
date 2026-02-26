function showTime(){
    const date = new Date();
    let hour = date.getHours();
    const meridiem = hour >= 12? "PM" : "AM";
    hour = hour % 12 || 12;
    hour = hour.toString().padStart(2, 0);
    const min = date.getMinutes().toString().padStart(2, 0);
    const sec = date.getSeconds().toString().padStart(2, 0);
    document.getElementById("clock").innerHTML = `${hour}:${min}:${sec}:${meridiem}`;
}
showTime();
setInterval(showTime, 1000);
