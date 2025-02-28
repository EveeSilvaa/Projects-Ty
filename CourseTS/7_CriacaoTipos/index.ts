// 1 - generics
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`;
}

console.log(showData("Olá, mundo!"));
console.log(showData(10));
console.log(showData(true));

// 2 - constrains em generics
function showProductName<T extends {name: string}> (obj: T) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = {name: "Porta", cor: "marrom"};
const otherProduct = {name: "carro", wheels:4, engine: 1.8};


console.log(showProductName(otherProduct));
console.log(showProductName(myObj));

// 3 - iterfaces com generics
interface myObject<T, U, Q> {
    name: string,
    wheels: T
    engine: U
    color: Q
}
type Car1 = myObject<number, number, string>;
type Pen = myObject<boolean, boolean, string>;

const myCar: Car1 = {name: "Fusca", wheels: 4, engine: 1.6, color: "azul"};
const myPen: Pen = {name: "Bic", wheels: true, engine: false, color: "vermelha"};

console.log(myCar);
console.log(myPen);

// 4 - type parameters
function getSomekey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${String(key)} está presente no objeto e tem o valor ${obj[key]}`;
}

const server = {
    hd: '2TB',
    ram: '16GB',
}

console.log(getSomekey(server, 'hd'));
console.log(getSomekey(server, 'ram'));

// 5 - keyof type operator
type Character1 = {name: string, age: number, hasDriverLicense: boolean};

type C = keyof Character1;

function showCharName(obj: Character1, name: C): string {
    return `${obj[name]}`;
}

const myChar: Character1 = {
    name: "Eve", 
    age: 25, 
    hasDriverLicense: true
};

console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));

// 6 - typeof type operator
const userName: string = "maria";

const userName2: typeof userName = "Eve";

type X = typeof userName
const userName4: X = "Evellyn";

// 7 - indexed access types
type Truck = {km: number, kg: number, description: string};

type km = Truck['km'];

const newTruck: Truck = {
    km: 10000,
    kg: 2000,
    description: "Caminhão baú"
}
function showKm(km: km) {
    return `O caminhão percorreu ${km} km`;
}

showKm(newTruck.km);

// 8 - conditional types
interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string;

const someVar: myType = 10;

type myTypeB = Teste extends {showNumber(): number} ? string : boolean;

// template literal types
type TestA = "text"

type CustomType = `some ${TestA}`;

const testing: CustomType = "some text";

type a1 = "testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`;