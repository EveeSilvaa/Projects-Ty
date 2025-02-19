// 1 - tipo, de objeto para função
interface Product {
    name: string
    price: number
    isAvailable: boolean
}
function showProductDetails(product: Product) {
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
showProductDetails(shirt1)
showProductDetails({name: "camisa polo", price: 39.90, isAvailable: false})