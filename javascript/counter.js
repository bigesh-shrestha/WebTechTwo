const prevNumber = document.getElementById("prevNumber");
const reset = document.getElementById("reset");
const nextNumber = document.getElementById("nextNumber");
const display = document.getElementById("displayNumbers");
let count = 0;

prevNumber.onclick = function(){
    count--;
    display.textContent = count;
    console.log(count);
}

reset.onclick = function(){
    count = 0;
    display.textContent = count;
    console.log(count);
}

nextNumber.onclick = function(){
    count++;
    display.textContent = count;
    console.log(count);
}