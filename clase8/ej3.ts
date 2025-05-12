//encapsulamiento
class Bodega{
    private _nombre: string
    private _direccion: string
    private _inventario: {producto: string; cantidad: number}[]
    constructor(nombre: string, direccion: string){
        this._nombre= nombre
        this._direccion= direccion
        this._inventario=[]
    }
    //getter par asle nombre
    public get nombre():string{
        return this._nombre
    }
    public agregarProducto(producto: string, cantidad:number){
        if(cantidad <0){
            console.log(`la cantiodad no puede ser negativa`)
        }else{
            this._inventario.push({producto,cantidad })
            console.log(`producto ${producto}`);
            
        }
    }
    public eliminarProducto(producto:string):void{
        const index =this._inventario.findIndex(item=> item.producto==producto)
        if (index === -1){
            console.log(`èl producto ${producto} no esta en el inventario`);
            
        }else{
            this._inventario.splice(index,1)
            console.log(`producto ${producto} eliminado del inventario`)
        }
    }
    public listaInventario():{producto: string; cantidad: number}[]{
        return this._inventario
    }
}
//pruevas
const bodega = new Bodega("bodega central", "calle principal")
bodega.agregarProducto(`manzanas`, 50)
bodega.agregarProducto(`limones`, -12)
bodega.eliminarProducto(`naranjas`)
bodega.eliminarProducto(`limones`)
console.log(`inventario de ${bodega.nombre}: `, bodega.listaInventario())