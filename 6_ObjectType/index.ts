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