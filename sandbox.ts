/*
let myname = 'christian'
console.log(myname);

myname = 'haboi'

const inputs = document.querySelectorAll('input')
console.log(inputs)

inputs.forEach(
    input =>
        input
    // console.log(input)
)

const circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circ('hey'));
*/


/*
// arrays
let names = ['chris', 4, 'ruganimanzi']
names.push('billy')
names.push(1)
names.push(1.4)

let numbers = [10, 20, 30, 40, 50]

// objects
let ninja = {
    name: 'ninja',
    age: 30,
    isNinja: true
}

ninja.age = 40
// ninja.skills = ['coding']
// console.log(ninja);


// explicit types
let character: string
character = 'christian'
// console.log(character);

let age: number
age = 40
// console.log(age);

// define array of strings
let ninjas: string[] = []
ninjas.push('hey')
let ages: number[]

ninjas = ['chris', 'ruganimanzi']

// difine array of mixed types
let mixed: (string | boolean | number)[] = []
mixed.push('hello')
mixed.push(5)
mixed.push(false)
// console.log(mixed)

let uid: string | number | boolean

uid = 1
uid = 'hello'
uid = false
// console.log(uid);

// objects
let ninjaOne: object
ninjaOne = {
    name: 'ninja',
    age: 30
}

let ninjaTwo: {
    name: string
    age: number
    beltColor: string
}

ninjaTwo = {
    name: 'ninja',
    age: 30,
    beltColor: 'red'
}
*/

let age: any = 25
age = [1, 2, 'hello']
// console.log(age);

let mixed: any[] = []
mixed.push({ name: 'ninja', age: 4 })
mixed.push(5)
mixed.push(false)
// console.log(mixed);

// console.log('test');


// function type
// let greet: Function
// greet = () => {
//     console.log('Hello World!');
// }
// greet()

const add = (a: number, b: number, c: number | string = 'result') => {
    console.log(c);

    // return `${c} = ${a + b}`;
}

// console.log(add(5, 15, 'Sum'));

const minus = (a: number, b: number) => {
    return a + b
}

let result = minus(10, 5)

// declare our own type
type StringOrNumber = string | number
type User = {
    name: string
    email: string
    uid: StringOrNumber
}

/*
// Type Alias
const longDetails = (uid: StringOrNumber, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: User) => {
    console.log(`${user.name} says hello`);
}
*/

// function signature
// let greet: Function

// example 1: 
let greet: (a: string, b: string) => void
greet = (name: string, greeting: string) => {
    return 2
}
// example 2
let calc: (a: number, b: number, c: string) => number
calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') return numOne + numTwo
    return numOne - numTwo
}

// example 3
let logDetails: (obj: { name: string, age: number }) => void
logDetails = (ninja: { name: string, age: number }) => {
    return 4
}