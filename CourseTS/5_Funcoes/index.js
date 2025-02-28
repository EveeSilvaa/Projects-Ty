"use strict";
// 1 - funcoes que nao retornam
function withoutReturn() {
    console.log("Esta funcao nao tem retorno!");
}
withoutReturn();
// 2 - callback
function greeting(name) {
    return `olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "maria");
preGreeting(greeting, "kaio");
// 3 - generics functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement(["a", "b", "c"]));
console.log(firstElement([1, 2, 3]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "maria" }, { age: 21, job: "programmer" });
console.log(newObject);
// 4 - constraints nas generics function 
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(4, 7));
console.log(biggestNumber("12", "5"));
// 5 -  especificar tipo de argumento
function mergeArrays(arr1, arr3) {
    return arr1.concat(arr3);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays([1, 2, 3], ["teste", "testando"]));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Ola ${greet} ${name}, tudo bem?`;
    }
    return `Ola ${name}, tudo bem?`;
}
console.log(modernGreeting("maria"));
console.log(modernGreeting("maria", "Dr."));
// 7 - Parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 6));
// 8 - tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("x é um número");
    }
}
doSomething([1, 2, 3]);
doSomething(5);
// 9 - never
function showErroMessage(msg) {
    throw new Error(msg);
}
// showErroMessage("Algum erro!")
// 10 - rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 349, 2004));
// 11 - destructing com parametro
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa ${price}`;
}
const shirt = { name: "camisa", price: 49.99 };
console.log(showProductDetails(shirt));
