// 2. **Mostrar una lista de posts**
//    - **API Endpoint**: https://jsonplaceholder.typicode.com/posts
//    - **Documentación**: https://jsonplaceholder.typicode.com/
//    - **Descripción**: JSONPlaceholder es una API de prueba que proporciona datos simulados como posts,
//     comentarios, tareas, etc. En este ejercicio, se utiliza el endpoint "/posts" para obtener una lista de publicaciones,
//      mostrando los títulos de los primeros 10 posts en una lista desordenada dentro del contenedor HTML con el id="postsList".
const link = "https://jsonplaceholder.typicode.com/posts"

const getUserData = async() => {

    try {
        const response = await fetch(link);
        const data = await response.json();

        const posts = document.getElementById("postsList")

        // Inicializa una variable para almacenar el HTML generado
        let titlesHtml = "";

        for (let i = 0; i < 10; i++) {  // Limita a 10 posts
            titlesHtml += `
                <ul>
                    <li>${data[i].title}</li>
                </ul>
            `;
        }

        posts.innerHTML = titlesHtml


    } catch (error) {
        console.log(error)
    }
   



}
getUserData()  