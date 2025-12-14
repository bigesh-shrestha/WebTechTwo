const temp = document.getElementById("temp");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const submitBtn = document.getElementById("submitBtn");
const sub_container_two = document.getElementById("sub-container-two");
submitBtn.onclick = function(){
    if(temp.value == "" || isNaN(temp.value)){
        sub_container_two.innerHTML = `Please Enter the Temperature Correctly.`;
        return;
    }
    let tempNum = Number(temp.value);
    let conversion;
    if(celsius.checked){
        conversion = (tempNum *9/5) + 32;
        sub_container_two.innerHTML = `${tempNum}°C = ${conversion}°F`;
        return;
    }
    else if(fahrenheit.checked){
        conversion = (tempNum - 32) *5/9;
        sub_container_two.innerHTML = `${tempNum}°F = ${conversion}°C`;
        return;
    }
    else{
        sub_container_two.innerHTML = `Please Choose the Temperature conversion type!!`;
        return;
    }
}