const buttonInput = document.getElementById("btnForm");

const getDataInput=()=>{
    const textoInput = document.getElementById("texto").value;
    console.log(textoInput); // Mostramos el valor capturado
    alert("Has ingresado:"+ textoInput);
}

buttonInput.addEventListener("click", () => {
    getDataInput();  // Captura y muestra el dato al hacer clic
});