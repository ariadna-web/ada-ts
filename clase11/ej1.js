function simulacionServidor(){
    return new Promise((resolve)=>{
        const esperaAleatoria=Math.floor(Math.random()*2000)+1000
        setTimeout(()=>resolve("servidor listo"), esperaAleatoria)
    })
}
async function ejecutarServidor(){
    console.log("iniciando servidor ...")
    const resultado= await simulacionServidor()
    console.log(resultado);
    console.log("servidor cerrado")
}
ejecutarServidor()