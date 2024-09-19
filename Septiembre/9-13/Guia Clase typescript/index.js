"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Primer archivo TypeScript
let message = "Hello, TypeScript!";
console.log(message);
// Tipos básicos
let age = 30;
let nameUser = "Alice";
let isStudent = true;
console.log(age, nameUser, isStudent);
// Arrays y Tuplas
let numbers = [1, 2, 3];
let person = ["Bob", 25];
console.log(numbers);
console.log(person);
// Tipos en Funciones
function greet(name) {
    return `Hello, ${name}!`;
}
let message2 = greet("Charlie");
console.log(message2);
let add = (a, b) => a + b;
console.log(add(5, 3));
let person2 = {
    name: "David",
    age: 40,
};
console.log(person2);
let point = { x: 10, y: 20 };
console.log(point);
// Clases y Herencia
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
let myDog = new Dog("Buddy");
myDog.makeSound();
myDog.bark();
// Uso de Genéricos
function identity(arg) {
    return arg;
}
console.log(identity("Hello"));
console.log(identity(42));
// Clase genérica Box que almacena un valor de cualquier tipo
class Box {
    constructor(value) {
        this.value = value;
    }
    // Método para obtener el valor almacenado
    getValue() {
        return this.value;
    }
    // Método para actualizar el valor almacenado
    setValue(newValue) {
        this.value = newValue;
    }
}
// Creando instancias de Box con diferentes tipos
let numberBox = new Box(123);
let stringBox = new Box("Hello, TypeScript!");
let booleanBox = new Box(true);
console.log(numberBox.getValue()); // Output: 123
console.log(stringBox.getValue()); // Output: Hello, TypeScript!
console.log(booleanBox.getValue()); // Output: true
// Actualizando los valores almacenados
numberBox.setValue(456);
stringBox.setValue("New Value");
console.log(numberBox.getValue()); // Output: 456
console.log(stringBox.getValue()); // Output: New Value
// Petición a una API Pública
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
            let data = yield response.json();
            // Mostrar datos en consola
            console.log(data);
            // Manipulación del DOM
            let postTitleElement = document.getElementById("post-title");
            let postBodyElement = document.getElementById("post-body");
            if (postTitleElement && postBodyElement) {
                postTitleElement.textContent = data.title;
                postBodyElement.textContent = data.body;
            }
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    });
}
fetchData();
