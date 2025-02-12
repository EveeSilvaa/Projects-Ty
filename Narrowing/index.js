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
