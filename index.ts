
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
person.greet()



