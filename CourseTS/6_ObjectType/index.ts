// 1 - tipo, de objeto para função
interface Product {
    name: string
    price: number
    isAvailable: boolean
}
function showProductDetails1(product: Product) {
    console.log(`O nomedo produto é ${product.name} e seu preço é  ${product.price}`)
    if(product.isAvailable) {
        console.log('Este produto está disponível')
    }
}

const shirt1:Product = {
    name:"camisa polo",
    price: 39.90,
    isAvailable: true 
}
showProductDetails1(shirt1)
showProductDetails1({name: "camisa polo", price: 39.90, isAvailable: false})

// 2 - inteface com parametro opcional
// interface User {
//     email: string, 
//     role?: string
// }

// function showUserDetails(user: User) {
//     console.log(`O email do usuário é: ${user.email}`)
    
//     if(user.role) {
//         console.log(`E seu papel é: ${user.role}`)
//     }
// }
// const u1:User = {
//     email: "evesilva.contato@gmail.com", role: "admin"
// }

// showUserDetails(u1)


// 3 - propriedades readonly
interface Car {
    brand: string,
    readonly wheels: number
}

const ferrari: Car = {
    brand: "Ford",
    wheels: 4
}
console.log(ferrari)


// 4 - index signature
interface CoordObject {
    [index: string]: number
}

let coords : CoordObject = {
    x: 10
}
coords.y = 20

console.log(coords)
// 5 - herança de interface
interface Human {
    name: string
    age: number
}
interface SuperHuman extends Human {
    superPower: string[]
}

const mario: Human = {
    name: "Maria",
    age: 25
}
console.log(mario)

const goku: SuperHuman = {
    name: "Goku",
    age: 35,
    superPower: ["Super Sayajin", "Kamehameha"]
}
console.log(goku)
console.log(goku.superPower[1])
// 6 - intersection types
interface Character {
    name: string
}


interface Gun {
    type: string
    caliber: number
}

type humanWithGun = Human & Gun 

const arnold: humanWithGun = {
    name: "Arnold",
    age: 70,
    type: "Desert Eagle",
    caliber: 50
}
console.log(arnold)
console.log(arnold.name)
console.log(arnold.caliber)

// 7 - readonly array
let myArray: ReadonlyArray<string> = ["maçã", "Laranja", "Banana"]
console.log(myArray)

myArray.forEach((item) =>{
    console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})
console.log(myArray)

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6] // nao posso adicionar mais array que utrapassem 5
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser:nameAndAge = ["Eve", 25]
console.log(anotherUser[0])

anotherUser[0] = "Evellyn"
console.log(anotherUser[0])

// 9 - tuplas com readonly
function showNumbers1(number: readonly [number, number]) {
    console.log(number[0])
    console.log(number[1])
}

showNumbers1([1, 2])


