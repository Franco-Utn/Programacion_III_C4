//EJERCICIO 2
console.log("Ejercicio 2 corriendo desde typescript")
//EJERCICIO 3
let texto = "Hola, Soy un texto"
let numero = 123
let boolean = true
let fecha : Date = new Date (8/3/2022)
//EJERCICIO 4
function numberToString(number1:number) {
    return number1.toString();
}
const resultEj4 = numberToString(50)
const resultEj4Element = document.getElementById('resultEj4')
if (resultEj4Element) {
    resultEj4Element.textContent = `El número fue convertido a String: ${resultEj4}`;
}

console.log("El numero fue convertido a String: ",numberToString(50))

//EJERCICIO 5
let myArray : Array<number> =[5,5,4]
function myArraySum(myArray: Array<number>) {
    let resulSum = 0
    for (let i = 0; i < myArray.length; i++) {
        resulSum += myArray[i]
    }
    return resulSum
}
const resultEj5 = myArraySum(myArray)
const resultEj5Element = document.getElementById('resultEj5')
if (resultEj5Element) {
    resultEj5Element.textContent = `La suma del Array: ${resultEj5}`;
}
console.log(myArraySum(myArray))

//EJERCICIO 6
interface Student{
    name: string,
    age: number,
    grade: string
}

let student: Student = {
    name: "Franco",
    age: 19,
    grade: "5c"
};
// Get the result element from the DOM
const resultEj6Element = document.getElementById('resultEj6');

if (resultEj6Element) {
    // Use template literals correctly within the textContent
    resultEj6Element.textContent = `Nombre: ${student.name}\nEdad: ${student.age}\nGrado: ${student.grade}`;
}

// EJERCICIO 7

type Address = {
    street: string,
    city: string,
    code: number
}

let address : Address = {
    street: "Calle 123",
    city: "Ciudad",
    code: 12345
}

const resultEj7Element = document.getElementById('resultEj7');
if (resultEj7Element) {
    // Use template literals correctly within the textContent
    resultEj7Element.textContent = `Direccion: ${address.street}\nCiudad: ${address.city}\nCP: ${address.code}`;
}
//EJERCICIO8

interface User{
    name: string,
    email: string,
    hi:()=> string
}

let user: User = {
    name: "Franco",
    email: "franquisardi@gmail.com",
    hi: function(){
        return "Hola, soy " + this.name
    }
};
// Get the result element from the DOM
const resultEj8Element = document.getElementById('resultEj8');

if (resultEj8Element) {
    // Use template literals correctly within the textContent
    resultEj8Element.textContent = user.hi();
}

//EJERCICIO 9
class Person{
    name:string
    age:number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    hi(){
        return `Hola, mi nombre es ${this.name} y tengo ${this.age} años.`;
    }
}
let person : Person = new Person("Franco", 19)
const resultEj9Element = document.getElementById('resultEj9');

if (resultEj9Element) {
    // Use template literals correctly within the textContent
    resultEj9Element.textContent = person.hi();
}

//EJERCICIO 10
class box<T> {
    generic : T
    constructor(generic: T) {
        this.generic = generic
    }
    genericFunction(generic:T) {
     return this.generic
    }
}
let boxNumber : box<number> = new box<number>(10)
let boxString : box<string> = new box<string>("Hola")

const resultEj10Element = document.getElementById('resultEj10');
if (resultEj10Element) {
    resultEj10Element.innerHTML = `
    El valor de la caja de números es: ${boxNumber.genericFunction(boxNumber.generic)}<br>
    El valor de la caja de Texto es: ${boxString.genericFunction(boxString.generic)}
`;
}

//EJERCICIO 11
function identidad<T>(valor: T): T {
    return valor;
}

// Usar la función con diferentes tipos
const numberResult = identidad<number>(42);
const stringResult = identidad<string>("Hola, Mundo!");
const booleanResult = identidad<boolean>(true);

// Obtener el elemento del DOM
const resultElement = document.getElementById('resultEj11');
if (resultElement) {
    // Usar innerHTML para permitir HTML en el contenido
    resultElement.innerHTML = `
        Valor numérico: ${numberResult}<br>
        Valor de texto: ${stringResult}<br>
        Valor booleano: ${booleanResult}
    `;
}

//EJERCICIO 12

// Definir la enumeración Color
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}

// Asignar un color favorito
const colorFavorito: Color = Color.Verde;

// Obtener el elemento del DOM
const resultElement12 = document.getElementById('resultEj12');
if (resultElement12) {
    // Mostrar el color favorito en el HTML
    resultElement12.textContent = `El color favorito es: ${colorFavorito}`;
}
