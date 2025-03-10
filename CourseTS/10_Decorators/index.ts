// 1 - exemplo decorator
function myDecorator(){
    console.log("iniciando decorator!");

    return function(
        target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor
    ) {
        console.log("executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}


class myClass {
    name!: string; 

    @myDecorator()
    testing() {
        console.log("terminando execução do metodo")
    }
}

const myObj5 = new myClass();

myObj5.testing();

// Multiplos decorators
function d(){
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ){
        console.log("executou d.")
    }
}

class MultipleDecorators{
    @d()
    testing() {
        console.log("Terminando execução")
    }
}

const multiple = new MultipleDecorators();

multiple.testing();

// class decorator
function classDec(constructor: Function) {
    console.log(constructor)
    if(constructor.name === "girafa"){
        console.log("criando novo animal")
    }
}
@classDec
class animal {
    name

    constructor(name: string){
        this.name = name;
    }
}

const girafa = new animal("girafa");

console.log(girafa);

// decorator de metodo
function enumerable(value: boolean) {
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
class Livro {
    name

    constructor(name: string) {
        this.name = name
    }

    @enumerable(false)
    showName() {
        console.log(this);
        return `O nome do livro é: ${this.name}`
    }
}

const Pequenoprincipe = new Livro("pequeno principe");

console.log(Pequenoprincipe.showName());

// acessor decorator
class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @enumerable(false)
    get showName() {
        return `Nome do Monstro: ${this.name}`
    }

    @enumerable(true) 
    get showAge() {
        return `Idade do Monstro: ${this.age}`
    }
}

const charmander = new Monster("charmander", 10);

console.log(charmander);

// property decorator
function formatNumber() {
    return function(target: Object, propertyKey: string) {
        let value: string

        const getter = function(){
            return value
        }

        const setter = function(newVal: string){
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        })
    }
}
class ID {
    @formatNumber()
    id;

    constructor(id: string) {
        this.id = id; 
    }
}

const newItem = new ID("1")

console.log(newItem);

// exemplo real: Class Decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id
    createdAt?: Date;

    constructor(id: Number) {
        this.id = id;
    }
}

@createdDate
class Pen {
    id;

    constructor(id: Number) {
        this.id = id;
    }
}

const newBook = new Book(12)
const pen = new Pen(55);

console.log(newBook.createdAt);
console.log(pen);
