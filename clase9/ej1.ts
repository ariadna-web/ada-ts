class Mueble{
nombre: string
precio: number
id: number
constructor(nombre: string, precio: number, id:number){
    this.nombre=nombre
    this.precio=precio
    this.id=id

}
cambiarPrecio(value:number):void { //metodo
if (value>0){
    setTimeout(()=>{
        this.precio=value
    console.log(`el precio de ${this.nombre} cambio a ${value}`)
},3000)
 
}else{
    console.log("ERROR");  
}
}
}
class Inventario{
    stock:Mueble[]=[];
    public agregarMueble(mueble: Mueble):void{
        this.stock.push(mueble)
    }
     mostrarInventario():any{
        this.stock.forEach(m=>{
            console.log(`id: ${m.id}, nombre: ${m.nombre}, precio ${m.precio}`);
            
        })
    }
}
const muebleria =new Inventario();
const ropero= new Mueble("ropero",800000, 1);
const silla= new Mueble("silla", 35000, 2);
muebleria.agregarMueble(ropero);
muebleria.agregarMueble(silla);
muebleria.mostrarInventario()
silla.cambiarPrecio(40000)