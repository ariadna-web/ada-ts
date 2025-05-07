interface volador{
    volar():void
}
interface transportar{
    transportar(): void
}
class avion implements volador, transportar{
    volar(): void{
        console.log(`este avion esta aumentando su altura`)
    }
    transportar(): void{
        console.log(`este avion transporta componentes de pc`)
    }
}
const avioncito= new avion()
avioncito.volar()
avioncito.transportar()