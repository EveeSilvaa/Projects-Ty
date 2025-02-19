// 1 - tipo, de objeto para função
interface Product {
    name: string
    price: number
    isAvailable: true
}
function showProductDetails(name: string, price: number, isAvailable: true): Product {
    return { name, price, isAvailable }
}
    