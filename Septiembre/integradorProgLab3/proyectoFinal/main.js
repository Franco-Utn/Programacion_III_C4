import { setInLocalStorage } from "../src/persistence/localStorage";
import { renderCategories } from "../src/services/categories";
import { handleGetProductsToStorage } from "../src/views/store";
import './style.css'

handleGetProductsToStorage()
renderCategories()
//Product

const buttonAdd = document.getElementById("buttonAddElement")

buttonAdd.addEventListener("click",()=>{
    openModal()
})

// PopUP

const buttonCancel = document.getElementById("cancelButton")

buttonCancel.addEventListener("click",()=>{
    handleCancelButton()
})

const handleCancelButton=()=>{
    closeModal();
}

//Funciones Abrir Cerrar Modal
const openModal = ()=>{
    const modal = document.getElementById("modalPopUp")
    modal.style.display = "flex"
}
const closeModal = ()=>{
    const modal = document.getElementById("modalPopUp"); 
    modal.style.display = "none"; // Esto cerrará el modal
}

//Guardar o Modificar elemntos
const acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener("click",()=>{
    handleSaveModifyElements()
})
const handleSaveModifyElements =()=>{
    const nombre = document.getElementById("name").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categoria = document.getElementById("categoria").value
   
    let object={
        id: new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categoria
    }

    console.log("Producto a guardar:", object); // Verifica que los datos no estén vacíos
    setInLocalStorage(object);
    closeModal();
}