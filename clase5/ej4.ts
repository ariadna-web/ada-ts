/*Define una clase llamada Animal con propiedades nombre y tipo, y un
método hacerSonido().
2. Crea una instancia de la clase Animal y llama al método */
export class Animal{
    public nombre: string;
    public tipo: string;

    constructor( nombre: string, tipo: string){
    this.nombre= nombre;
    this.tipo= tipo;
    }
    public hacerSonido():void{
        console.log(`el ${this.nombre} hace un sonido`)

    }
}
const gato= new Animal ("muzzarella", "Tortoiseshell")
gato.hacerSonido()