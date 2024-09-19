/*Ejercicio 2: Peticiones Asíncronas con Fetch
Descripción: Realiza una petición fetch a una API pública (por ejemplo, jsonplaceholder)
 para obtener una lista de tareas y filtra aquellas que están completadas.
Requerimientos:
Usa fetch para realizar la petición.
Define una interfaz para los datos recibidos.
Filtra las tareas completadas y muéstralas en la consola.

link de api: https://jsonplaceholder.typicode.com/todos */

const link = "https://jsonplaceholder.typicode.com/todos"

interface Tarea {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTareasFn = async () => {
    try {
        const response = await fetch(link)
        const data:  Tarea[] = await response.json()
        const tareasCompletadas = data.filter(tarea => tarea.completed)
        console.log(tareasCompletadas) 
    } catch (error) {
        console.log(error)
    }
    
}
getTareasFn()