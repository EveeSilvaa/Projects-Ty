"use strict";
function showProductDetails1(product) {
    console.log(`O nomedo produto é ${product.name} e seu preço é  ${product.price}`);
    if (product.isAvailable) {
        console.log('Este produto está disponível');
    }
}
const shirt1 = {
    name: "camisa polo",
    price: 39.90,
    isAvailable: true
};
showProductDetails1(shirt1);
showProductDetails1({ name: "camisa polo", price: 39.90, isAvailable: false });
function showUserDetails(user) {
    console.log(`O email do usuário é: ${user.email}`);
    if (user.role) {
        console.log(`E seu papel é: ${user.role}`);
    }
}
const u1 = {
    email: "evesilva.contato@gmail.com", role: "admin",
    name: ""
};
const u2 = {
    email: "evellynsilva@gmail.com",
    name: ""
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "Ford",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 20;
console.log(coords);
const mario = {
    name: "Maria",
    age: 25
};
console.log(mario);
const goku = {
    name: "Goku",
    age: 35,
    superPower: ["Super Sayajin", "Kamehameha"]
};
console.log(goku);
console.log(goku.superPower[1]);
const arnold = {
    name: "Arnold",
    age: 70,
    type: "Desert Eagle",
    caliber: 50
};
console.log(arnold);
console.log(arnold.name);
console.log(arnold.caliber);
// 7 - readonly array
let myArray = ["maçã", "Laranja", "Banana"];
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6] // nao posso adicionar mais array que utrapassem 5
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]
console.log(myNumberArray);
const anotherUser = ["Eve", 25];
console.log(anotherUser[0]);
anotherUser[0] = "Evellyn";
console.log(anotherUser[0]);
// 9 - tuplas com readonly
function showNumbers1(number) {
    console.log(number[0]);
    console.log(number[1]);
}
showNumbers1([1, 2]);
