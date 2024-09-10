async function getUserData() {
    try{const response = await fetch("https://randomuser.me/api/")

    const data = await response.json();
    console.log(data)

    const person = data.results[0];

    const nombre = `${person.name.first} ${person.name.last}`

    const ubicacion = `${person.location.country}`

    const imagen = `${person.picture.medium}`

    console.log(nombre)
    console.log(ubicacion)

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
// getUserData()

async function getPostsData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

        const data = await response.json()
        
        const postList= document.getElementById["postList"]


    }catch(error){
        console.log(error)
    }
}

