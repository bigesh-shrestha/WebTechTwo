const validateForm = document.getElementById("validateForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passInput = document.getElementById("passInput");
const repeatPass = document.getElementById("repeatPass");
validateForm.addEventListener("submit", (e) =>{
    let hasError = false;
    hasError = validate(nameInput.value.trim(), emailInput.value.trim(), passInput.value.trim(), repeatPass.value.trim());
    if(hasError){
        e.preventDefault();
    }
});
function validate(name, email, pass, repPass){
    let hasError = false;
    if(name === ""){
        nameInput.parentElement.querySelector('.error-message').innerHTML = "!Name Must Be Given!";
        hasError = true;
    }
    else if(/\d/.test(name)){
        nameInput.parentElement.querySelector('.error-message').innerHTML = "!Name Can't Be In Number!";
        hasError = true;
    }
    if(email === ""){
        emailInput.parentElement.querySelector('.error-message').innerHTML = "!Email Must Be Given.";
        hasError = true;
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ // here ^ outside the bracket is used to indicate the beginning of the string and ^ inside the [] is used to indicate not
        emailInput.parentElement.querySelector('.error-message').innerHTML = "!Please Enter the email correctly";
        hasError = true;
    }
    if(pass === ""){
        passInput.parentElement.querySelector('.error-message').innerHTML = "!Password Must Be Given.";
        hasError = true;
    }
    else if(pass.includes(' ')){
        passInput.parentElement.querySelector('.error-message').innerHTML = "!Password must not contain empty spaces.";
        hasError = true;
    }
    else if(pass.length < 8){
        passInput.parentElement.querySelector('.error-message').innerHTML = "!Password must contain at least 8 characters.";
        hasError = true;
    }
    if(repPass === ""){
        repeatPass.parentElement.querySelector('.error-message').innerHTML = "!Please confirm the password.";
        hasError = true;
    }
    else if(pass !== repPass){
        repeatPass.parentElement.querySelector('.error-message').innerHTML = "!Password doesn't match.";
        hasError = true;
    }
    return hasError;
}

allInputs = [nameInput, emailInput, passInput, repeatPass];

allInputs.forEach(input => {
    input.addEventListener("input", () => {
        input.parentElement.querySelector('.error-message').innerHTML = "";
    })
});