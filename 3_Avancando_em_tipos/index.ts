// 1 - Arrays
let numbers: number[] = [1, 2, 3]

numbers.push(5)
console.log(numbers[2])

//numbers = "teste" nao pode colocar string como number
const nomes: string[] = ["maria", "julha"]
nomes.push("maria")

// nomes.push(4)

// 2 - outra sintaxe array
const nums: Array<number> = [100, 200]

nums.push(300)
console.log(nums)

// nums.push("teste") // nao funciona pois string nao pode ser atribuido ao tipo number

console.log(nums[0])

// 3 - any(serve para todos os tipos)
const arr1: any = [1, "teste", true, [], {nome: "maria"}]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)

// 4 - parametros tipados
function soma(a: number, b: number) {
    console.log(a + b)
}

soma(4, 5)

// 5 - tipo retornos de funcao

function greeting(name: string): string {
    return `olá ${name}`
}

console.log(greeting("maria"));

// 6 - funcoes anonimas
setTimeout(function() {
    
    const sallary: number = 1000

    //console.log(parseFloat(sallary))

    //console.log(sallary)

}, 2000)

// 7 - tipos de objetos
function passCorordinates(coord: {x: number, y: number}) {
    console.log("X coordinates: " + coord.x)
    console.log("X coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCorordinates(objCoord)

const pessoaObj:{nome: string, surname: string} = {nome: "evellyn", surname: "silva"}

// 8 - props opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if(c) {
        console.log("C: " + c)
    }
}

showNumbers(1, 2, 3)
showNumbers(4, 5) //sem a interrogação esse argumento não funciona

// 9 - validando argumento opcional
function advanceGreeting(firstName?: string, lastName?: string) {

    if(lastName !== undefined) {
        console.log(`olá, ${firstName} ${lastName}, tudo bem?`)
    }

    return `olá, ${firstName}, tudo bem?`
}

console.log(advanceGreeting("maria", "silva"))
console.log(advanceGreeting("kaio"))

// 10 - union type
function showBalance(balance: string | number) {
    console.log(`o saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")
//showBalance(true) //O argumento do tipo 'boolean' não é atribuível ao parâmetro do tipo 'string | number'

const arr2: Array<number | string | boolean> = [1, "teste", true]

// 11 - avançando em union type
function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
        return "Usúario não aprovado!"
    }

    return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12 - type alias
type ID = string | number

function showId(id: string | number) {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")

// 13 - interface
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

// 14 - diferença entre type alias e interface
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "maria", age: 21}

console.log(somePerson)

type personType = {
    name: string
}

// type personType = {
//     age: number
// }

// 15 - literal types
let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`)
}

showDirection("left")

//showDirection("top") //O argumento do tipo '"top"' não é atribuível ao parâmetro do tipo '"left" | "right" | "center"'

// 16 - non-null assertion operators
const p = document.getElementById("some-p")

console.log(p!.innerText)

// 17 - bigint
let n: bigint

//n = 1 //O tipo 'number' não pode ser atribuído ao tipo 'bigint'.

n = 1000n //Os literais de BigInt só estarão disponíveis ao direcionar para menos de ES2020.
console.log(n)

console.log(typeof n)

console.log(n + 100n)

// 18 - symbol(serve para criar um valor único)
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("b") 

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)