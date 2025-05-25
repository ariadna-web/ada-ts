function prepararPedidos(plato, tiempo, callback) {
    console.log(`preparando ${plato}`);
    setTimeout(() => {
        console.log(`${plato} listo`)
        callback()
    }, tiempo)
}
function completarTodosLosPedidos() {
    console.log("todos los platos fueron completados")
    prepararPedidos("piza", 3000, () => {
        prepararPedidos("hamburguesa", 5000, () => {
            prepararPedidos("ensalada", 500, completarTodosLosPedidos)
        })
    })
}