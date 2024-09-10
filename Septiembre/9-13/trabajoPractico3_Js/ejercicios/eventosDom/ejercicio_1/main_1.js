const listItems = document.getElementsByTagName("li")  // Creamos una colección HTML de elementos <li>, iterable.

 

function saludar(event) {
    
    console.log(event.target.textContent)
    
}

// Asignar el evento onclick a cada elemento <li>
for (let elemento of listItems) {
    elemento.onclick = saludar;  // Ejecuta la función saludar al hacer clic en cada <li>
}