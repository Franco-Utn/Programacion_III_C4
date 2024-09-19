 async function getUserData() {
     try{
        
        //Traemos el link de la api y lo guardamos en una constante response, si o si tiene que tener la palabra await porque es una petición asíncrona.
        const response = await fetch("https://randomuser.me/api/")

        //La variable data almacena el cuerpo de la respuesta y lo convierte en un objeto JavaScript si el contenido está en formato JSON. Si el objeto de respuesta no está en formato json, lanza un error
        const data = await response.json();
        console.log(data)

        //accede a la primera posición del array results, que contiene un objeto representando una persona, y por eso ves todos los detalles de la persona cuando haces console.log(person).
        const person = data.results[0];

        //Estamos accediendo al nombre y apellido dentro del objeto de name en nuestro array de personas de la api.
        //La sintaxis de template literals con ${} es más legible y limpia en comparación con concatenar variables usando el operador +. Antes de los template literals, habrías tenido que escribir algo como:
        // ---const nombre = person.name.first + " " + person.name.last;---
        const nombre = `${person.name.first} ${person.name.last}`

        const ubicacion = `${person.location.country}`

        const imagen = `${person.picture.medium}`

        console.log(nombre)
        console.log(ubicacion)

        // Obtiene el elemento con id "userInfo" y actualiza su contenido para 
        // mostrar el nombre, ubicación y una imagen del usuario utilizando template literals.
        const divInfo = document.getElementById("userInfo")
        divInfo.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Ubicacion: ${ubicacion}</p>
        <img src= ${imagen} width= 150>
        `
    
 }catch(error){
     console.log(error)
 }
 }
  getUserData()

 async function getPostsData() {
     try {
         const response = await fetch("https://jsonplaceholder.typicode.com/posts")

         const data = await response.json()
        
         const postList= document.getElementById["postList"]


     }catch(error){
         console.log(error)
     }
 }
