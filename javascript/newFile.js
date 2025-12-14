//type conversion
/*let age = window.prompt("Enter Your Age : "); // input are by default in string type in JS.

age += 1;

console.log(age, typeof age);19

let ageTwo = window.prompt("Enter Your Age : ");
ageTwo = Number(ageTwo);//converting string age to number age
ageTwo +=1;
console.log(ageTwo, typeof ageTwo);
*/
//string that contains only numerical characters can be converted to string but otherwise not possible


//taking user input using text
const BIRTH_YEAR = 2063; // declering constant value/variable 
let namePerson;
document.getElementById("submitBtn").onclick = function(){
    namePerson = document.getElementById("textEnter").value.trim();
    document.getElementById("heading").textContent = `Hello, ${namePerson}`;
    console.log(namePerson);
}