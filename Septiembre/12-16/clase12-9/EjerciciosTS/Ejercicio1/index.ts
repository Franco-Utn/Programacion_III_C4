// Ejercicio 1: Clases y Métodos
// Descripción: Crea una clase Coche que tenga propiedades como marca, 
// modelo y velocidad. Implementa métodos para acelerar, frenar y mostrar el estado del coche.

class Coche {
    private marca: string;
    private modelo: string;
    private velocidad: number;
    constructor(marca : string, modelo:string, velocidad:number){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    
    
    public getVelocidad() : number {
        return this.velocidad
    }

    /**
     * acelerar
     */
    public acelerar(): void {
        this.velocidad += 100;
        console.log(`El coche ${this.marca} ${this.modelo} ha acelerado a ${this.velocidad} km/h.`);
    }
    /**
     * frenar
     */
    public frenar(): void {
        this.velocidad -= 50;
        console.log(`El coche ${this.marca} ${this.modelo} ha frenado a ${this.velocidad} km/h.`);
    }
    /**
     * mostrar estado del Coche 
     */
    public mostrarEstado() : void {
        console.log(`Estado del coche ${this.marca} ${this.modelo} está a una velocidad de ${this.velocidad} km/h.`);
    }
}

let miCoche = new Coche("Porche","911",100)
miCoche.acelerar();
miCoche.frenar();
miCoche.mostrarEstado();

