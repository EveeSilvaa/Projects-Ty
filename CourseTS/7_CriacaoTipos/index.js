"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData("Olá, mundo!"));
console.log(showData(10));
console.log(showData(true));
// 2 - constrains em generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "marrom" };
const otherProduct = { name: "carro", wheels: 4, engine: 1.8 };
console.log(showProductName(otherProduct));
console.log(showProductName(myObj));
const myCar = { name: "Fusca", wheels: 4, engine: 1.6, color: "azul" };
const myPen = { name: "Bic", wheels: true, engine: false, color: "vermelha" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomekey(obj, key) {
    return `A chave ${String(key)} está presente no objeto e tem o valor ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '16GB',
};
console.log(getSomekey(server, 'hd'));
console.log(getSomekey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Eve",
    age: 25,
    hasDriverLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// 6 - typeof type operator
const userName = "maria";
const userName2 = "Eve";
const userName4 = "Evellyn";
const newTruck = {
    km: 10000,
    kg: 2000,
    description: "Caminhão baú"
};
function showKm(km) {
    return `O caminhão percorreu ${km} km`;
}
showKm(newTruck.km);
const someVar = 10;
const testing = "some text";
