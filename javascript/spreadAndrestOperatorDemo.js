function sum(...numbers){
    let sum =0;
    for(let number of numbers){
        sum+=number;
        console.log(number);
    }
    console.log(sum);
    console.log(numbers);
}
sum(1,2,3,4);

let name = ["Amrit", "Bigesh", "Anugraha"];