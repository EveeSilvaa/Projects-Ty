"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("impossível realizar a soma!"); // exemplo de caso para o terceiro caso retornar inavalido
    }
}
sum("4", "59"); //exemplo com numero de string
sum(12, 42.3); // emplo com number 
sum("4", 6); // exemplo com string e number
// 2- checando se o valor existe 
function operations(arr, operations) {
    if (operations) {
        if (operations === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operations === "multply") {
            const multply = arr.reduce((i, total) => i * total);
            console.log(multply);
        }
    }
    else {
        console.log("por favor, defina uma operação");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([1, 2, 8], "multply");
// 3 - instanceof 
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const maria = new User("maria");
const kaio = new SuperUser("kaio");
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(maria);
userGreeting(kaio);
// 4 - operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("bob", "pinscher");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log("o cachorro é um srd");
    }
}
showDogDetails(turca);
showDogDetails(bob);
