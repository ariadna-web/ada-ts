class torta{
    nombre: string
    tipo: string

    constructor(nombre: string, tipo: string){
        this.nombre=nombre
        this.tipo=tipo
    }
    hacerDescripcion():void{
        console.log(`esta torta ${this.nombre} se conoce como ${this.tipo}`)
    }
}
class tortaChocolate extends torta{
    constructor(nombre: string, tipo: string){
        super(nombre, tipo)
    }
    hacerDescripcion():void{
        console.log("soy una torta de chocolate rica y suave.")
    }
}
const tortita= new torta("chocolate", "chocolina")
tortita.hacerDescripcion()
const tortitaChoco= new torta("bolcan", "chocoblack")
tortitaChoco.hacerDescripcion()