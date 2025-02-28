// campos com classe 
class user {
    name! : string
    age ! : number
}

const mavie = new user()

console.log(mavie)

mavie.name = "mavie"

console.log(mavie)

// 2 - constructor
class NewUser {
    name 
    age

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}
const joao = new NewUser("joao", 20)
console.log(joao)

// 3 - campos readonly

class Car {
    name 
    readonly wheels1 = 4

    constructor(name: string){
        this.name = name
    }
}
const mustang = new Car("mustang")
console.log(mustang)

console.log(mustang.wheels1)
mustang.name = "ferrari"
// mustang.wheels1 = 2 // nao pode ser alterado, pois é readonly


// 4 - Herança e Super
class Machine {
    name 

    constructor(name: string){
        this.name = name
    }
}

const machine = new Machine("Machine")

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number){
        super(name)
        this.guns = guns
    }
}
const killerMachine = new KillerMachine("KillerMachine", 4)
console.log(killerMachine)
console.log(Machine)

// 5 - Metodos
class dwarf {
    name

    constructor(name: string){
        this.name = name
    }

    greeting(){
        console.log("hey stranger!")
    }
}

const gimli = new dwarf("gimli")

console.log(gimli.name)

gimli.greeting()

// 6 - This
class cinna {
    name 
    hp

    constructor(model: string, hp: number){
        this.name = model
        this.hp = hp
    }
    showDetails(){
        console.log(`Caminhão do modelo ${this.name} tem ${this.hp} cavalos de potencia`)
    }
}

const scania = new cinna("scania", 500)
scania.showDetails()

// 7 - Getters 
class Person {
    name 
    surname

    constructor(name: string, surname: string){
        this.name = name
        this.surname = surname
    }

    get fullName(){
        return this.name + " " + this.surname
    }
}

const barbieSilva = new Person("Barbie", "Silva")
console.log(barbieSilva.name)

console.log(barbieSilva.fullName)

// 8 - Setters
class Coords {
    x!: number
    y!: number

    set fillX(x: number){
        if(x === 0){
            return
        }
        this.x = x

        console.log("X foi preenchido com sucesso")
    }

    set fillY(y: number){
        if(y === 0){
            return
        }
        this.y = y

        console.log("y foi preenchido com sucesso")
    }

    get getCoords(){
        return `x: ${this.x}, y: ${this.y}`
    }
}

const myCoords = new Coords()
myCoords.fillX = 10
myCoords.fillY = 20

console.log(myCoords)

console.log(myCoords.getCoords)

// 9 - Herança de interfaces
interface ShowTitle {
   itemTitle(): string
}

class blogPost implements ShowTitle {
    title

    constructor(title: string){
        this.title = title
    }

    itemTitle(){
        return `O titulo de post é ${this.title}`
    }
}

const post = new blogPost("Ola mundo")
console.log(post.itemTitle())

// 10 - overrride de metodos 
class Base {
    someMethod(){
        console.log("Metodo base")
    }
}

class Child extends Base {
    someMethod(){
        console.log("Metodo filho")
    }
}

const child = new Child()
child.someMethod()

// 11 - Visibilidade public
class CustomClass {
    public x = 10
}

class D extends CustomClass {

}

const cInstance = new CustomClass()

console.log(cInstance.x)

const dInstance = new D()

console.log(dInstance.x)

// 12 - Visibilidade prOtected
class ProtectedClass {
    protected x = 10
}

class E extends ProtectedClass {

    showX(){
        console.log("X: " + this.x)
    }
}

const eInstance = new E()

eInstance.showX()
// eInstance.x // nao pode ser acessado fora da classe

// 13 - Visibilidade private
class PrivateClass {
    private name = "Private"

    showName(){
        return this.name
    }

    private privateMethod(){
        console.log("Metodo privado")
    }
    showPrivateMethod(){
        this.privateMethod()
    }
}

const privateInstance = new PrivateClass()
// privateInstance.name // nao pode ser acessado fora da classe

console.log(privateInstance)

console.log(privateInstance.showName())

// console.log(privateInstance.privateMethod()) // nao pode ser acessado fora da classe

console.log(privateInstance.showPrivateMethod())

// 14 - Static members
class StaticClass {
    static prop = "Teste static"

    static showProp(){
        console.log("Este é um modo statico")
    }
}
console.log(StaticClass.prop)

StaticClass.showProp()

// 15 - Generics classes
class GenericClass<T, U> {
    first
    second

    constructor(first: T, second: U){
        this.first = first
        this.second = second
    }

    get showFirst(){
        return `O first é: $(this.first)`
    }
}

const genericInstance = new GenericClass("caixa","surpresa" )

console.log(genericInstance)

console.log(genericInstance.showFirst)
console.log( typeof genericInstance.first)

// 16 - Parameters proprerties