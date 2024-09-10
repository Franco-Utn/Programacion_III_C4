// const pElements = document.getElementsByClassName("pElement")

// for (let p of pElements) {
//     console.log(p.innerHTML);  // Muestra el contenido de cada elemento <p>
//   }

// const btn = document.getElementById("btnColor")
// console.log(btn.innerHTML)

// const handleStyleP =()=>{
//     for (let p of pElements) {
//         if (p.classList.contains('blue')) {
//           p.classList.remove('blue');
//         } else {
//           p.classList.add('blue');
//         }
//       }
//     };
    

// btn.addEventListener("click",()=>{
//     handleStyleP();
// })

// resolucion chatgpt
// Explicación:

// Los elementos <p> se seleccionan con querySelectorAll.
// Se alterna (toggle) la clase blue al hacer clic en el botón, aplicando el estilo azul a todos los elementos <p>.
const btn = document.getElementById("btnColor");
const pElements = document.querySelectorAll("p");

btn.addEventListener("click", () => {
pElements.forEach(p => p.classList.toggle("blue"));
});