function obtenerDatos(exito){
return new Promise((Request, resolve)=>{
    setTimeout(()=>{
        if(exito){
            resolve("datos recibidos con exito")
        }else{
            reject ("error")
        }
    },2000)
})
}
async function obtenerDatos() {
    try{
        console.log("iniciando consulta de datos");
        const resultado= await obtenerDatos(false)
        console.log(resultado)
    }catch(error){
        console.error("ERROR", error)
    }finally{
        console.log("finalizado")
    }
}
consultar(datos)