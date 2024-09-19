/*5. **Mostrar una lista de tareas**
   - **API Endpoint**: https://jsonplaceholder.typicode.com/todos
   - **Documentación**: https://jsonplaceholder.typicode.com/
   - **Descripción**: Similar al ejercicio 2, se utiliza JSONPlaceholder para obtener datos simulados. 
   En este caso, se usa el endpoint "/todos" para obtener una lista de tareas. Se muestran las primeras 5 tareas en una lista desordenada, indicando si están completadas o no, en el contenedor HTML con el id="todoList".*/
const link = "https://jsonplaceholder.typicode.com/todos"

const getTarea = async() => {

   try {
    const response = await fetch(link)
    const data = await response.json()
    
    const tareas = document.getElementById("todoList")

    let tareasHtml = ""

    for (let i = 0; i < 5; i++) {
      // Verifica si la tarea está completada
      if (data[i].completed === true) {
          tareasHtml += `
              <li>${data[i].title} - Tarea Completada</li>
          `;
      } else {
          tareasHtml += `
              <li>${data[i].title} - Tarea No Completada</li>
          `;
      }
  }

  // Inserta la lista de tareas en el contenedor
  tareas.innerHTML = `<ul>${tareasHtml}</ul>`

   } catch (error) {
    console.log("Error al hacer fetch", error)
   }
    
}
getTarea();