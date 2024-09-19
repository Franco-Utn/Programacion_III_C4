/*
Ejercicio 3: Movimiento de un Cubo dentro de un Contenedor
Descripción: Vamos a crear un cubo que se moverá dentro de 
un contenedor cuando el usuario presione las teclas de flecha
 (arriba, abajo, izquierda, derecha). El cubo deberá mantenerse dentro de los límites del contenedor.

Requerimientos:

1)Crea un contenedor div que actúe como el área de movimiento. 
2)Crea un div más pequeño dentro del contenedor que representará el cubo.
3)Usa TypeScript para manejar los eventos del teclado y mover el cubo dentro del contenedor.
    --crea una clase cubo la cual debe tener como propiedad: areaMovimientoElement, cuboElement, velocidadDeMovimiento 
    --define los metodos: moverArriba, moverAbajo, moverDerecha, moverIzquierda
    --Asegúrate de que el cubo no se salga del contenedor.
4)Instancia tu clase cubo con sus propiedades
5)Define un evento para escuchar las teclas y que se disparen los metodos del objetooo


Palabras claves para resolver el ejercicio:
--position: relative
--position: absolute
--top
--left
--clientHeight
--clientWidth
--offsetTop
--offsetLeft
--keydown */

class Cubo {
    areaMovimientoElement:HTMLElement;
    cuboElement:HTMLElement;
    velocidadDeMovimiento: number;

    constructor(areaMovimientoElement:HTMLElement,cuboElement: HTMLElement, velocidadDeMovimiento: number) {
     this.areaMovimientoElement=areaMovimientoElement
     this.cuboElement=cuboElement
     this.velocidadDeMovimiento=velocidadDeMovimiento
    }

    moverArriba(){
        const nuevaPosicion = this.cuboElement.offsetTop - this.velocidadDeMovimiento;
        if (nuevaPosicion >= 0) {  // Evita que se salga del contenedor
            this.cuboElement.style.top = `${nuevaPosicion}px`;
        }
    }
    moverAbajo(){
        // Obtener la altura del contenedor y del cubo
        const limiteInferior = this.areaMovimientoElement.clientHeight - this.cuboElement.clientHeight;

        // Calcular la nueva posición del cubo
        const nuevaPosicion = this.cuboElement.offsetTop + this.velocidadDeMovimiento;

        // Verificar si la nueva posición está dentro de los límites del contenedor
        if (nuevaPosicion <= limiteInferior) {
            this.cuboElement.style.top = `${nuevaPosicion}px`; // Actualizar la posición del cubo
        }

    }

    moverDerecha() {
        // Obtener el ancho del contenedor y del cubo
        const limiteDerecho = this.areaMovimientoElement.clientWidth - this.cuboElement.clientWidth;
    
        // Calcular la nueva posición del cubo
        const nuevaPosicion = this.cuboElement.offsetLeft + this.velocidadDeMovimiento;
    
        // Verificar que la nueva posición no exceda el límite derecho
        if (nuevaPosicion <= limiteDerecho) {
            this.cuboElement.style.left = `${nuevaPosicion}px`; // Actualizar la posición del cubo
        
    }}
    moverIzquierda() {
        // Calcular la nueva posición del cubo
        const nuevaPosicion = this.cuboElement.offsetLeft - this.velocidadDeMovimiento;
    
        // Verificar que la nueva posición no sea menor que 0 (límite izquierdo)
        if (nuevaPosicion >= 0) {
            this.cuboElement.style.left = `${nuevaPosicion}px`; // Actualizar la posición del cubo
        }
    }

}

const areaMovimiento = document.getElementById('area-movimiento') as HTMLElement;
const cuboElemento = document.getElementById('cubo') as HTMLElement;

const cubo = new Cubo(areaMovimiento, cuboElemento, 10); // Instanciamos la clase Cubo con una velocidad de 10


// Añadimos los event listeners después de crear la instancia
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            cubo.moverArriba();
            break;
        case 'ArrowDown':
            cubo.moverAbajo();
            break;
        case 'ArrowLeft':
            cubo.moverIzquierda();
            break;
        case 'ArrowRight':
            cubo.moverDerecha();
            break;
    }
});