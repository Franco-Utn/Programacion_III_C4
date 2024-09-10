const Persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Barcelona',
    actualizarCiudad: function(){
        this.ciudad = prompt("Cambiar ciudad: ");
    }

}

console.log(Persona.ciudad);  // Muestra la ciudad actual
Persona.actualizarCiudad();    // Actualiza la ciudad
console.log("Ciudad actualizada:",Persona.ciudad);  // Muestra la nueva ciudad