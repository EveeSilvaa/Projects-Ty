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
