let arrayNumeros =[1,2,3,4,5,6,7,8,9,10]
// let newArrayNumeros=[]
// for (let i in arrayNumeros){
//     newArrayNumeros[i] = arrayNumeros[i]*2
    
// }


 let newArrayNumeros=arrayNumeros.map((item)=>{
     return item*2
 })

console.log("NUMEROS ORIGINALES: ",arrayNumeros)
console.log("NUMEROS MULTIPLICADOS",newArrayNumeros)
