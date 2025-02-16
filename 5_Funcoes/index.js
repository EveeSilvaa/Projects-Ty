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
// generics functions
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
