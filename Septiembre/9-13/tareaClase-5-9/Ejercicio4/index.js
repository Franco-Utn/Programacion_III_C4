/*4. **Mostrar una imagen de un perro aleatorio**
   - **API Endpoint**: https://dog.ceo/api/breeds/image/random
   - **Documentación**: https://dog.ceo/dog-api/
   - **Descripción**: La Dog API proporciona imágenes aleatorias de diferentes razas de perros. 
   En este ejercicio, se utiliza el endpoint "/breeds/image/random" para obtener una imagen aleatoria 
   de un perro y se muestra en el contenedor HTML con el id="dogImage".*/
const link = "https://dog.ceo/api/breeds/image/random"

const getImage = async() => {

   try {
    const response = await fetch(link)
    const data = await response.json()


    const imagenPerro = document.getElementById("dogImage")
    imagenPerro.innerHTML = `
    <img src="${data.message}" alt="Imagen de un perro aleatorio"/>`
   } catch (error) {
    console.log("Error al hacer fetch", error)
   }
    
}
getImage();