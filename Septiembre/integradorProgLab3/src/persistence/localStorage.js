//LOCALSTORAGE

export const hadleGetproductLocalStorage = ()=>{
    const products = JSON.parse(localStorage.getItem("products"))
    if(products){
        return products
    }else{
        return []
    }
}

//Guardar en LocalStorage

//recibir un producto
export const setInLocalStorage = (productIn) => {
    //Traer un producto
    let productsInLocal =hadleGetproductLocalStorage();

    const existingIndex = productsInLocal.findIndex((productsLocal)=>
    productsLocal.id === productIn.id
    );

    //verificar si un producto existe
    if(existingIndex !== -1){
        productsInLocal[existingIndex] = productIn
        }else{
            productsInLocal.push(productIn)
        }
    //Setear nuevo array
    localStorage.setItem('products', JSON.stringify(productsInLocal));
    console.log("Productos guardados en localStorage:", productsInLocal);
}
