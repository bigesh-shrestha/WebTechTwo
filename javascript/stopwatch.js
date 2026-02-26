const stopwatch = document.getElementById("stopwatch");
let starttime = 0;
let elapsedTime = 0;
let isRunning = false;
let timer = null
function start(){
    if(!isRunning){
        starttime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
    starttime = 0;
    elapsedTime = 0;
    isRunning = false;
    stopwatch.innerHTML = `00:00:00:00`;
}
function update(){
    elapsedTime = Date.now() - starttime;
    let hours = Math.floor(elpasedTime / (1000 * 60 *60)).toString().padStart(2,0);
    let minutes = Math.floor((elpasedTime / (1000 * 60)) % 60).toString().padStart(2, 0);
    let seconds = Math.floor((elpasedTime / 1000) % 60).toString().padStart(2,0);
    let milliseconds = Math.floor((elpasedTime % 1000)/10).toString().padStart(2,0);
    stopwatch.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`
}