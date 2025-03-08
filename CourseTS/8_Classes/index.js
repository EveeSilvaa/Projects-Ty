"use strict";
// campos com classe 
class user {
}
const mavie = new user();
console.log(mavie);
mavie.name = "mavie";
console.log(mavie);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("joao", 20);
console.log(joao);
// 3 - campos readonly
class Car {
    constructor(name) {
        this.wheels1 = 4;
        this.name = name;
    }
}
const mustang = new Car("mustang");
console.log(mustang);
console.log(mustang.wheels1);
mustang.name = "ferrari";
// mustang.wheels1 = 2 // nao pode ser alterado, pois é readonly
// 4 - Herança e Super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const machine = new Machine("Machine");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const killerMachine = new KillerMachine("KillerMachine", 4);
console.log(killerMachine);
console.log(Machine);
// 5 - Metodos
class dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("hey stranger!");
    }
}
const gimli = new dwarf("gimli");
console.log(gimli.name);
gimli.greeting();
// 6 - This
class cinna {
    constructor(model, hp) {
        this.name = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo ${this.name} tem ${this.hp} cavalos de potencia`);
    }
}
const scania = new cinna("scania", 500);
scania.showDetails();
// 7 - Getters 
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const barbieSilva = new Person("Barbie", "Silva");
console.log(barbieSilva.name);
console.log(barbieSilva.fullName);
// 8 - Setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X foi preenchido com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("y foi preenchido com sucesso");
    }
    get getCoords() {
        return `x: ${this.x}, y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 10;
myCoords.fillY = 20;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo de post é ${this.title}`;
    }
}
const post = new blogPost("Ola mundo");
console.log(post.itemTitle());
// 10 - overrride de metodos 
class Base {
    someMethod() {
        console.log("Metodo base");
    }
}
class Child extends Base {
    someMethod() {
        console.log("Metodo filho");
    }
}
const child = new Child();
child.someMethod();
// 11 - Visibilidade public
class CustomClass {
    constructor() {
        this.x = 10;
    }
}
class D extends CustomClass {
}
const cInstance = new CustomClass();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
// 12 - Visibilidade prOtected
class ProtectedClass {
    constructor() {
        this.x = 10;
    }
}
class E extends ProtectedClass {
    showX() {
        console.log("X: " + this.x);
    }
}
const eInstance = new E();
eInstance.showX();
// eInstance.x // nao pode ser acessado fora da classe
// 13 - Visibilidade private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Metodo privado");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const privateInstance = new PrivateClass();
// privateInstance.name // nao pode ser acessado fora da classe
console.log(privateInstance);
console.log(privateInstance.showName());
// console.log(privateInstance.privateMethod()) // nao pode ser acessado fora da classe
console.log(privateInstance.showPrivateMethod());
// 14 - Static members
class StaticClass {
    static showProp() {
        console.log("Este é um modo statico");
    }
}
StaticClass.prop = "Teste static";
console.log(StaticClass.prop);
StaticClass.showProp();
// 15 - Generics classes
class GenericClass {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: $(this.first)`;
    }
}
const genericInstance = new GenericClass("caixa", "surpresa");
console.log(genericInstance);
console.log(genericInstance.showFirst);
console.log(typeof genericInstance.first);
// 16 - Parameters proprerties
class ParametersProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `Qtd total: ${this.price}`;
    } // o get funciona tbm como um metodo que consegue acessar o private
}
const newShoes = new ParametersProperties("Sapato", 5, 115.99);
console.log(newShoes.name);
// console.log(newShoes.price) 
console.log(newShoes.showPrice);
console.log(newShoes.showQty);
// 17 - class Expressions
const classMy = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new classMy("lily");
console.log(pessoa);
console.log(pessoa.name);
// 18 - classe abstract 
class AbstractClass {
}
// const newObject = new AbstractClass();
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`o nome é: ${this.name}`);
    }
}
const newAbstractObject = new AbstractExample("josias");
newAbstractObject.showName();
// Realações entre classes
class Bird {
}
class Cat {
}
const passarinho = new Cat();
console.log(passarinho);
