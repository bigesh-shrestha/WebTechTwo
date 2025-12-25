
function generatePassword(length, uppercase, lowercase, numbers, symbols){
    const PasswordDisplay = document.getElementById("PasswordDisplay");
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const numbersList = "0123456789";
    const symbolsList = "@#!$&-_?/";
    let allCharacters = "";
    let password = "";
    allCharacters += lowercase ? lowercaseChars:"";
    allCharacters += uppercase ? uppercaseChars:"";
    allCharacters += numbers ? numbersList:"";
    allCharacters += symbols ? symbolsList:"";
    if(length <= 0){
        PasswordDisplay.innerHTML = `The Length Must Be greater than zero.`
        return;
    }
    if(allCharacters === ""){
        PasswordDisplay.innerHTML = `At least one content must be selected.`
        return;
    }
    for(let i = 0;i < length; i++){
        const randomLength = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomLength];
    }
    PasswordDisplay.innerHTML = `Generated Password : ${password}`;
}
document.getElementById("createBtn").onclick = function(){
    
        const length = Number(document.getElementById("length").value);
        const uppercase = document.getElementById("uppercase");
        const lowercase = document.getElementById("lowercase");
        const numbers = document.getElementById("numbers");
        const symbols = document.getElementById("symbols")
        let upper = false;
        let lower = false;
        let num = false;
        let symbol = false;
        if(uppercase.checked){
            upper = true;
        }
        if(lowercase.checked){
            lower = true;
        }
        if(numbers.checked){
            num = true;
        }
        if(symbols.checked){
            symbol = true;
        }
    generatePassword(length, upper, lower, num, symbol);
}