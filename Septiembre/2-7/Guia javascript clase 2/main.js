//DOOOM
// 1. Selección por ID
const elementoPorId = document.getElementById("miId");
console.log("Elemento por ID:", elementoPorId);

// 2. Selección por clase
const elementosPorClase = document.getElementsByClassName("miClase");
console.log("Elementos por clase:", elementosPorClase);

// 3. Selección por etiqueta
const elementosPorEtiqueta = document.getElementsByTagName("p");
console.log("Elementos por etiqueta:", elementosPorEtiqueta);

// 4. Selección con querySelector (primera coincidencia)
const primerElementoPorSelector = document.querySelector(".miClase");
console.log("Primer elemento por querySelector:", primerElementoPorSelector);

// 5. Selección con querySelectorAll (todas las coincidencias)
const todosElementosPorSelector = document.querySelectorAll(".miClase");
console.log(
  "Todos los elementos por querySelectorAll:",
  todosElementosPorSelector
);

// 6. Selección por atributo name
const elementosPorNombre = document.getElementsByName("miNombre");
console.log("Elementos por atributo name:", elementosPorNombre);

// Ejercicio 1: Cambiar el Contenido de un Elemento
document.getElementById("cambiarTexto").addEventListener("click", function () {
  document.getElementById("texto").innerText = "El texto ha sido cambiado.";
});

// Ejercicio 2: Agregar Elementos a una Lista
document
  .getElementById("agregarElemento")
  .addEventListener("click", function () {
    const nuevoElemento = document.getElementById("nuevoElemento").value;
    if (nuevoElemento) {
      const li = document.createElement("li");
      li.innerText = nuevoElemento;
      document.getElementById("lista").appendChild(li);
      document.getElementById("nuevoElemento").value = "";
    }
  });

// Ejercicio 3: Cambiar Estilo de un Elemento
document.getElementById("cambiarColor").addEventListener("click", function () {
  document.getElementById("cuadro").style.backgroundColor = "lightgreen";
});

// Ejercicio 4: Mostrar y Ocultar Elementos
document.getElementById("toggleTexto").addEventListener("click", function () {
  const texto = document.getElementById("textoOculto");
  if (texto.style.display === "none") {
    texto.style.display = "block";
    this.innerText = "Ocultar";
  } else {
    texto.style.display = "none";
    this.innerText = "Mostrar";
  }
});

// Ejercicio 5: Crear una Tabla Dinámicamente
document.getElementById("crearTabla").addEventListener("click", function () {
  const datos = [
    { nombre: "Luciano", edad: 30 },
    { nombre: "Carlos", edad: 25 },
    { nombre: "Juan", edad: 35 },
  ];

  const tbody = document.getElementById("miTabla").querySelector("tbody");
  tbody.innerHTML = ""; // Limpiar la tabla

  datos.forEach(function (item) {
    const fila = document.createElement("tr");
    const celdaNombre = document.createElement("td");
    celdaNombre.innerText = item.nombre;
    const celdaEdad = document.createElement("td");
    celdaEdad.innerText = item.edad;

    fila.appendChild(celdaNombre);
    fila.appendChild(celdaEdad);
    tbody.appendChild(fila);
  });
});

// Ejercicio 6: Resaltar Elementos al Pasar el Mouse
const items = document.querySelectorAll("#miLista li");

items.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    this.style.backgroundColor = "yellow";
  });

  item.addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });
});

// Ejercicio 1: Función Asíncrona Básica
// -------------------------------------
// Creamos una función que simula una operación asíncrona usando setTimeout.
// Luego usamos async/await para esperar a que se complete antes de continuar.
function loadData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos cargados");
    }, 2000); // Simula una carga de 2 segundos
  });
}

async function displayData() {
  console.log("Cargando...");
  const data = await loadData();
  console.log(data); // Imprime "Datos cargados" después de 2 segundos
}

loadData().then((data) => {
  console.log(data);
});

displayData();

// Ejercicio 2: Manejo de Errores en Funciones Asíncronas
// ------------------------------------------------------
// Modificamos la función anterior para que simule un error durante la carga de datos.
// Usamos try/catch para manejar el error.
function loadDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error al cargar los datos");
    }, 2000); // Simula un error después de 2 segundos
  });
}

async function displayDataWithErrorHandling() {
  console.log("Cargando...");
  try {
    const data = await loadDataWithError();
    console.log(data); // Este código no se ejecutará debido al error
  } catch (error) {
    console.error(error); // Imprime "Error al cargar los datos"
  }
}

//displayDataWithErrorHandling();

// Ejercicio 3: Uso de async/await con fetch
// -----------------------------------------
// Realizamos una petición fetch a la API de JSONPlaceholder usando async/await.
// Los datos obtenidos se muestran en la consola.
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log(posts); // Imprime el array de posts obtenidos de la API
  } catch (error) {
    console.error("Error al obtener los posts:", error);
  }
}

//fetchPosts();

// Ejercicio 4: Encadenamiento de Promesas con async/await
// -------------------------------------------------------
// Creamos dos funciones asíncronas donde una espera el resultado de la otra.
// Primero obtenemos un usuario, luego sus posts, y mostramos ambos en la consola.
async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return await response.json(); // Devuelve los datos del usuario con ID 1
}

async function fetchUserPosts(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return await response.json(); // Devuelve los posts del usuario con el ID dado
}

async function displayUserAndPosts() {
  try {
    const user = await fetchUser();
    console.log("Usuario:", user); // Muestra la información del usuario

    const posts = await fetchUserPosts(user.id);
    console.log("Posts del usuario:", posts); // Muestra los posts del usuario
  } catch (error) {
    console.error("Error:", error);
  }
}

//displayUserAndPosts();

// Ejercicio 5: Función Asíncrona con Múltiples await
// --------------------------------------------------
// Realizamos varias operaciones asíncronas en secuencia usando await.
// Mostramos el resultado de cada operación en la consola.
async function performTasks() {
  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve("Tarea 1 completada"), 1000)
  );
  console.log(result1); // Después de 1 segundo: "Tarea 1 completada"

  const result2 = await new Promise((resolve) =>
    setTimeout(() => resolve("Tarea 2 completada"), 2000)
  );
  console.log(result2); // Después de otros 2 segundos: "Tarea 2 completada"

  const result3 = await new Promise((resolve) =>
    setTimeout(() => resolve("Tarea 3 completada"), 1500)
  );
  console.log(result3); // Después de otros 1.5 segundos: "Tarea 3 completada"

  console.log("Todas las tareas completadas"); // Finalmente: "Todas las tareas completadas"
}

//performTasks();

// Función asíncrona para obtener datos desde una API
async function fetchAndDisplayPosts() {
  try {
    // Realizamos la petición a la API de JSONPlaceholder
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    setTimeout(() => {
      // Seleccionamos el contenedor donde mostraremos los datos
      const postContainer = document.getElementById("postContainer");

      // Ocultamos el mensaje de "Cargando..."
      document.getElementById("loadingMessage").style.display = "none";

      // Mostramos los primeros 5 posts en el DOM
      posts.slice(0, 5).forEach((post) => {
        const postElement = document.createElement("div");
        postElement.style.border = "1px solid grey";
        postElement.style.marginTop = "2vh";
        postElement.style.padding = ".4rem";
        postElement.style.borderRadius = ".4rem";


        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        postContainer.appendChild(postElement);
      });
    }, 1500);
  } catch (error) {
    console.error("Error al obtener los posts:", error);
  }
}

// Llamamos a la función para cargar y mostrar los posts
fetchAndDisplayPosts();
