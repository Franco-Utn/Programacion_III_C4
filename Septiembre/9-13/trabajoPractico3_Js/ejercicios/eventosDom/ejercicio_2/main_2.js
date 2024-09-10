// Obtenemos los elementos del DOM
const campoTexto = document.getElementById("texto"); 
const buttonHabilitar = document.getElementById("btnHabilitar"); 
const buttonDeshabilitar = document.getElementById("btnDeshabilitar");

// Inicializamos una variable para controlar si el campo está habilitado o no
let estaHabilitado = true;

// Añadimos un evento para el botón que habilita/deshabilita el campo de texto
buttonDeshabilitar.addEventListener("click", () => {
    // Alternamos el estado de habilitación
    estaHabilitado = false;
    
    // Activamos o desactivamos el campo de texto
    campoTexto.disabled = !estaHabilitado;
    
    campoTexto.classList.remove("campo-habilitado");
    campoTexto.classList.add("campo-deshabilitado");
    // Mostramos en consola que se ha hecho clic en el botón
    console.log("Click en botón deshabilitar");
});
// Añadimos un evento para el botón que habilita/deshabilita el campo de texto
buttonHabilitar.addEventListener("click", () => {
    // Alternamos el estado de habilitación
    estaHabilitado = true;
    
    // Activamos o desactivamos el campo de texto
    campoTexto.disabled = !estaHabilitado;

    campoTexto.classList.remove("campo-deshabilitado");
    campoTexto.classList.add("campo-habilitado");

    // Mostramos en consola que se ha hecho clic en el botón
    console.log("Click en botón habilitar");
});