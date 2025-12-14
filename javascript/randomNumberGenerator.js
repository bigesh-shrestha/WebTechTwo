const buttonPress = document.getElementById("generateBtn");
const displayOne = document.getElementById("displayGenNumberOne");
const displayTwo = document.getElementById("displayGenNumberTwo");
const displayThree = document.getElementById("displayGenNumberThree");
const maxInput = document.getElementById("maxValue");
const minInput = document.getElementById("minValue");
let randomNumbOne;
let randomNumbTwo;
let randomNumbThree;
buttonPress.onclick = function(){
    if(maxInput.value == "" || minInput.value == ""){
        document.getElementById("display").textContent = `Both Fields Are Required`;
        return;
    }
    let max = Number(maxInput.value);
    let min = Number(minInput.value);
    randomNumbOne = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbTwo =Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbThree = Math.floor(Math.random() * (max - min + 1)) + min;
    displayOne.textContent = randomNumbOne;
     displayTwo.textContent = randomNumbTwo;
      displayThree.textContent = randomNumbThree;
}