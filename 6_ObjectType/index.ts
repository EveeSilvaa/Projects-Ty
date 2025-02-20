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
interface User {
    email: string, 
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O email do usuário é: ${user.email}`)
    
    if(user.role) {
        console.log(`E seu papel é: ${user.role}`)
    }
}
const u1:User = {
    email: "evesilva.contato@gmail.com", role: "admin",
    name: ""
}
const u2:User = {
    email: "evellynsilva@gmail.com",
    name: ""
}

showUserDetails(u1)
showUserDetails(u2)

// 3 - propriedades readonly
interface Car {
    brand: string,
    readonly wheels: number
}

const fusca: Car = {
    brand: "Ford",
    wheels: 4
}
console.log(fusca)




// 4 - index signature
// 5 - herança de interface
// 6 - intersection type
// 7 - readonly array
// 8 - tuplas
// 9 - tuplas com readonly


