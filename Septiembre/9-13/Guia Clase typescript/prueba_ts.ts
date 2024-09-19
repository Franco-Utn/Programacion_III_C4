function sum(n1:number,n2:number) {
    return n1 + n2
}
console.log(sum(3,4))

//arrays

const miArray: Array<string|number> = ["Hola"]
miArray.push("Franco")
console.log(miArray)
console.log(typeof miArray)

//set

const miSet : Set<number | string> = new Set(["B",2,3,"a"])
// const miSet2 : String{} = new Set(["a",3])

miSet.add(4)
console.log(miSet)
// console.log(miSet2)

//mapas
let miMapa : Map<string,number> = new Map([["numero" , 2]])
miMapa.set("numero2", 4)
console.log(miMapa)

//For

for (const value of miArray) {
    // console.log(value)
    console.log("0",miArray[0])
}