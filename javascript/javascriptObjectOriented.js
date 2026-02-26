class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    displayPerson(){
        console.log(`Name : ${this.name} \nAge : ${this.age}`);
    }
    isAlive = true;
    isAliveFunction(){
        return this.isAlive;
    }
}
const personOne = new Person("Bigesh Shrestha", 19);
personOne.displayPerson();
console.log(personOne.isAliveFunction());