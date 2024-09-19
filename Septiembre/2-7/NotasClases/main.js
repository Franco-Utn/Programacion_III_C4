//CALLBACKS
/*Un callback es una función que es usada como parámetro en otra función*/
/*Ejemplo: 1 */

function callback(){
    console.log("Mostrando el callback")
}

/*Funcion que ejecuta el mensaje*/ 
function mostrarMensaje(fn){
    fn();
}

/*Ejecutamos la función mostrarMensaje y le pasamos la función callback*/
mostrarMensaje(callback);

/*Ejemplo: 2*/

function function1(){
    console.log("Mensaje 1");
}
function function2(){
    console.log("Mensaje 2")
}

/*Funcion que ejecuta el mensaje*/
function mostrarMensajeConCallback(fn1,fn2){
    setTimeout(function(){
        fn1();
        fn2();
    }, 1000)
}

mostrarMensajeConCallback(function1,function2)

//ASINCRONIA , PROMESAS, AWAIT
/*Un callback es una función que es usada como parámetro en otra función*/
/*Ejemplo: 1 */

const data = [
    {id:1, name:"Juan"},
    {id:2, name:"Pedro"},
    {id:3, name:"Maria"}
]

function getData(){
    return new Promise((resolve, reject)=>{
        if(data.length === 0 ){
            console.log()
            reject(new Error("Data is empty"))
        }
        setTimeout(()=>{
            resolve(data)
        },2000)

    })
}

const books = await getData();
console.log(books)