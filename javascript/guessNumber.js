const max = document.getElementById("max");
const min = document.getElementById("min");
const enterBtn = document.getElementById("enterBtn");
const guessSection = document.getElementById("guessSection");
let randomNum;
enterBtn.onclick = function(){
    if(max.value == "" || min.value == ""){
        guessSection.innerHTML = `<br><b>Both Input Must Be Given!</b>`;
        return;
    }

    if(isNaN(max.value) || isNaN(min.value)){
        guessSection.innerHTML = `<br><b>Both inputs must be Number.<b>`
        return;
    }

    let maxNum = Number(max.value);
    let minNum = Number(min.value);

    if(minNum > maxNum){
        guessSection.innerHTML = `<br><b>Minimum Value Cannot Be Greater Than Maximum Value!</b>`
        return;
    }


    randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    guessSection.innerHTML = `<br><hr>Guess the Number : <input type = "text" id = "guessInput" placeholder = "Guess"><br><br>
                                <input type = "submit" id = "enterGuess" value = "Guess Enter"><hr>`;
    const guessInput = document.getElementById("guessInput");
    const enterGuess = document.getElementById("enterGuess");
    const guessResult = document.getElementById("guessResult");
    let tries = 0;
    enterGuess.onclick = function(){
        
        if(guessInput.value == ""){
            guessResult.innerHTML = `<br><b>First Guess the Number!</b>`;
            return;
        }
        if(isNaN(guessInput.value)){
            guessResult.innerHTML=`<br><b>Please Guess the Number only.</b>`;
            return;
        }
        let guessedNumber = Number(guessInput.value);
        if(guessedNumber<minNum || guessedNumber>maxNum){
            guessResult.innerHTML=`<br><b>Please Only enter number within the range ${minNum} to ${maxNum}.</b>`
            return;
        }

        tries++;
    
        if(guessedNumber == randomNum){
            guessResult.innerHTML = `<br> <b>You Guessed the right number. The Number was ${randomNum} <br> Total Tries : ${tries}</b>`;
            return;
        }
        else if(guessedNumber < randomNum){
            guessResult.innerHTML = `Wrong Number!!<br>T<b>he Number is greater than ${guessedNumber}<br> Total Tries : ${tries}</b>`;
            return;
        }
        else{
            guessResult.innerHTML = `Wrong Number!!<br><b>The Number is lesser than ${guessedNumber}<br> Total Tries : ${tries}</b>`;
            return;
        }

        
    }
    
}