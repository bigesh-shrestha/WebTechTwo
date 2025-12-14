console.log(`Hello`);
console.log(`I am bigesh`);
//this is a single line comment
/*
 this is multi line comment
 */
//window.alert(`This is an alert`);
//window.alert(`I like pizza.`);
document.getElementById("head").textContent = `Bigesh`;
document.getElementById("paragraph").textContent = `This is written from JS.`;

//variables behave as if it were the value it contains
let variable = 100.5;//declaring variable
console.log(variable);
console.log(typeof variable);
let age = 19;
console.log(typeof age);//type of a variable
console.log(`You are ${age} years old`);
let nameFirst = "Bigesh";
console.log(typeof nameFirst);
console.log(`First name = ${nameFirst}`);


document.getElementById("first").textContent = `You are ${age} years old.`; // displaying in html page

/*
operators precedance
1. Parenthesis()
2. exponents **
3. Multiplication and division and modulo
4. addition and subtraction
*/

//to take input from user LOLusing window prompt
let book = window.prompt("Book Name : ");
console.log(book);