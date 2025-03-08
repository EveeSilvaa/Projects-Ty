// importação de arquivos
import importGreet from "./greet";

importGreet();

// importação de variavel
import { X } from "./variable";

console.log(X);

// multiplas importaçoes
import { a, b, myFunction } from "./multiplo";

console.log(a);
console.log(b);

myFunction();

// alias para importação
import { someName as name } from "./changeName";

console.log(name);

// importar tudo 
import * as myNumbers from "./myNumbers";

const nX = myNumbers.n1;

console.log(nX);

myNumbers.showNumber();

// importar tipos 
import { Human } from "./myType";

class User implements Human {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age; 
    }
}