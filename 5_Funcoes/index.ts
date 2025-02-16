// 1 - funcoes que nao retornam
function withoutReturn(): void {
    console.log("Esta funcao nao tem retorno!")
}

withoutReturn()

// 2 - callback
function greeting(name: string) {
    return `olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log("preparando a função")

    const greet = f(userName)
    
    console.log(greet)
}

preGreeting(greeting, "maria")
preGreeting(greeting, "kaio")

// generics functions
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement(["a", "b", "c"]))
console.log(firstElement([1, 2, 3]))

function mergeObjects<U, T> (obj1: U, obj2: T) { //funcao que une obejetos
    return {
        ...obj1,
        ...obj2
    }
}
const newObject = mergeObjects({name: "maria"}, {age: 21, job: "programmer"})

console.log(newObject)