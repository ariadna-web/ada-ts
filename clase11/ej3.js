function tarea1(){
    return new Promise(resolve =>setTimeout(()=>resolve("tarea 1 lista"),1000))
}
function tarea2(){
    return new Promise(resolve =>setTimeout(()=>resolve("tarea 2 lista"),2000))
}
function tarea3(){
    return new Promise(resolve =>setTimeout(()=>resolve("tarea 3 lista"),3000))
}
async function ejecutarTareas() {
    try{
        const resultado1=await tarea1()
        const resultado2=await tarea2()
        const resultado3=await tarea3()
        const resultados=[resultado1, resultado2, resultado3]
    console.log(resultados)
    }catch(error){
        conasole.error("ERROR", error)
    }
}
ejecutarTareas()