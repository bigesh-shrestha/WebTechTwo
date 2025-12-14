const PI = 3.1415926535; //constant number variables are all capital/uppercase
const display = document.getElementById("displayOutput");
let radius;
let area;
let circumference;
document.getElementById("isSubmitBtn").onclick = function(){
    radius = document.getElementById("circleRadius").value;
    if(radius == ""){
        display.innerHTML = `Radius Must be Given`;
        return;
    }
    if(isNaN(radius)){
        display.innerHTML = `Radius Must be a Number`;
        return;
    }
    radius = Number(radius);
    area = PI * radius ** 2;
    circumference = 2 * PI * radius; 
    display.innerHTML = `AREA = ${area}<br> CIRCUMFERENCE = ${circumference}`;
    console.log(`Area of the Circle is ${area}.`);
    console.log(`CIRCUMFERENCE if Circele is ${circumference}`);
}