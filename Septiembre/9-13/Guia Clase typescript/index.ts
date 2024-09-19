// Primer archivo TypeScript
let message: string = "Hello, TypeScript!";
console.log(message);

// Tipos básicos
let age  = 30;
let nameUser: string = "Alice";
let isStudent: boolean = true;

console.log(age, nameUser, isStudent);

// Arrays y Tuplas
let numbers: number[] = [1, 2, 3];
let person: [string, number] = ["Bob", 25];

console.log(numbers);
console.log(person);

// Tipos en Funciones
function greet(name: string): string {
  return `Hello, ${name}!`;
}

let message2: string = greet("Charlie");
console.log(message2);

let add = (a: number, b: number): number => a + b;

console.log(add(5, 3));

// Interfaces
interface Person {
  name: string;
  age: number;
}

let person2: Person = {
  name: "David",
  age: 40,
};

console.log(person2);

// Tipos Alias
type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };

console.log(point);

// Clases y Herencia
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}

let myDog = new Dog("Buddy");
myDog.makeSound();
myDog.bark();

// Uso de Genéricos
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(42));


// Clase genérica Box que almacena un valor de cualquier tipo
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  // Método para obtener el valor almacenado
  getValue(): T {
    return this.value;
  }

  // Método para actualizar el valor almacenado
  setValue(newValue: T): void {
    this.value = newValue;
  }
}

// Creando instancias de Box con diferentes tipos
let numberBox = new Box<number>(123);
let stringBox = new Box<string>("Hello, TypeScript!");
let booleanBox = new Box<boolean>(true);

console.log(numberBox.getValue());  // Output: 123
console.log(stringBox.getValue());  // Output: Hello, TypeScript!
console.log(booleanBox.getValue()); // Output: true

// Actualizando los valores almacenados
numberBox.setValue(456);
stringBox.setValue("New Value");

console.log(numberBox.getValue());  // Output: 456
console.log(stringBox.getValue());  // Output: New Value



// Petición a una API Pública
async function fetchData(): Promise<void> {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();

    // Mostrar datos en consola
    console.log(data);

    // Manipulación del DOM
    let postTitleElement: HTMLElement | null =
      document.getElementById("post-title");
    let postBodyElement: HTMLElement | null =
      document.getElementById("post-body");

    if (postTitleElement && postBodyElement) {
      postTitleElement.textContent = data.title;
      postBodyElement.textContent = data.body;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();


