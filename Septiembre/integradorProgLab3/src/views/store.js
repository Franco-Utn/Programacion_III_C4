//STORE

import { hadleGetproductLocalStorage } from "../persistence/localStorage"

export const handleGetProductsToStorage=()=>{
    const products = hadleGetproductLocalStorage()
    handleRenderList(products)
}

export const handleRenderList = (productosIn) =>{
    const burgers = productosIn.filter((el)=> el.categoria === "Hamburguesas")
    const fries = productosIn.filter((el)=> el.categoria === "Papas")
    const drinks = productosIn.filter((el)=> el.categoria === "Gaseosas")

    const renderProductGroup = (productos, title)=>{
        console.log(productos)
        if(
            productos.length >0
        ){
            const productosHTML = productos.map((producto,index)=>{
                return `
                <div>
                 <div>
                    <img src= ${producto.imagen}/>
                 </div>
                 <div>
                  <h2>${producto.nombre}</h2>
                 </div>
                 <div>
                  <p><b>Precio:</b>${producto.precio}</p>
                  <p><b>categoria:</b>${producto.categoria}</p>

                 </div>
                </div>

                `
            })

            return `
            <section>
                <h3>${title}</h3>
                <div>${productosHTML.join("")}</div>
            </section>`
        }else{
            return ""
        }
        }
        //Renderizar los producots dentro de sus categorias
        const appContainer = document.getElementById("storeContainer");
        appContainer.innerHTML = `
        ${renderProductGroup(burgers,"Hamburguesas")}
        ${renderProductGroup(fries,"Papas")}
        ${renderProductGroup(drinks,"Gaseosas")}

        `;
    console.log("Hola",productosIn)

    }
