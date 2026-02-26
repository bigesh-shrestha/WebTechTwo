let arr = [1,2,3,4,5];
arr.forEach(array => console.log(array));
let squareNumbers = arr.map((element) => Math.pow(element, 2));
let cubicNumbers = arr.map((element) => Math.pow(element, 3));
let evenNumbers = arr.filter((element) => element % 2 === 0);
let oddNumbers = arr.filter((element) => element % 2 !== 0);
let totalNumbers = arr.reduce((accumulator, element) => accumulator + element);
document.getElementById("displayOutput").innerHTML = totalNumbers;

