// Función para obtener el valor del input y guardarlo en localStorage
const getInput = () => {
  const email = document.getElementById("emailInput").value;
  localStorage.setItem(
    "emailDato",
    JSON.stringify({
      email,
    })
  );
};

// Evento para el botón que recupera el valor de localStorage
const buttoninput = document
  .getElementById("buttonInput")
  .addEventListener("click", () => {
    // Primero guardamos el valor del input en localStorage
    getInput();

    // Luego recuperamos el valor almacenado
    const result = localStorage.getItem("emailDato");

    if (result) {
      console.log(JSON.parse(result));
      mostrarResultado(result);
      crearBotonEliminar();
    } else {
      console.log("No existen");
      mostrarResultado(null);
    }
  });

// Mostrar el dato recuperado en el div 'resultado'
function mostrarResultado(result) {
  const resultadoDiv = document.getElementById("resultado");
  if (result) {
    const emailGuardado = JSON.parse(result).email; // Obtener el email desde el JSON
    resultadoDiv.textContent = `Email guardado: ${emailGuardado}`;
  } else {
    resultadoDiv.textContent = "No hay datos";
  }
}

// Función para crear un nuevo botón dinámicamente y eliminar mail
function crearBotonEliminar() {
  const botonContainer = document.getElementById("botonContainer");

  //verificar si el boton ya fue creado
  if (!document.getElementById("eliminar")) {
    //crear Boton Eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.id = "eliminar"; // Asignar ID
    botonEliminar.textContent = "Eliminar Email";

    // Agregar funcionalidad para eliminar el email
    botonEliminar.addEventListener("click", () => {
      localStorage.removeItem("emailDato");
      mostrarResultado(null); // Actualizar la vista mostrando que no hay datos
    });

    // Insertar el botón en el DOM dentro de 'botonContainer'
    botonContainer.appendChild(botonEliminar);
  }
}
