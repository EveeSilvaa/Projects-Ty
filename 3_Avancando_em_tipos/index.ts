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

// 3 - any
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