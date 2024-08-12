
// PRINCIPE DE BASE

// Type de base
let message:string = "Hello mister"
let num:number = 30
let scores: number[] = [40,90,34]
let human: [string,number] = ['Alice',40]

enum Color {red, green, blue}   
let color:Color = Color.red


// Function
// function greet (name:string):string{
//     return `Hello ${name}`
// }

function greet (name:string, greeting:string = 'Hello'):string{
    return `${greeting} ${name}`
}


// CLASSE ET INTERFACE

// classe
class Person {
    name:string
    age:number

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    greet(){
        console.log(`Hello ${this.name}, you're ${this.age} old...`)
    }
}

let person = new Person("Paul",40)
// person.greet()


// Interface : Definir l'interface
interface Student{
    name:string
    age:number
    grade:string
}

let student: Student = {name:'Pascal', age:25, grade:'Graduate'}
// console.log(student)

// Interface : using interface for define interface in function
function printStudent(student: Student):void{
    console.log(`${student.name} is ${student.age} years old and is in grade ${student.grade}`)
}

// printStudent(student)


// TYPE AVANCEE
// union type
let id: number|string
id = 30
id = "Xvftgkola44"


// Intersection type
interface Employee {
    employeeId: number
}

interface Manager extends Employee {
    departement: string
}

let manager: Manager = {employeeId: 101 ,departement: 'HR'}
console.log(manager)


// Type alias
type ID = number | string
let userId: ID = 1001

