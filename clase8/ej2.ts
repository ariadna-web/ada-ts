//clase base 
class Negocio{
    protected operar():void{
        console.log("el negocio esta operando");
    }
    //metodo publico para llamar al metodo
public iniciarOperacion():void{
    this.operar()   
}
}
//clase derivada 
class consultoria extends Negocio{
    protected operar():void{
        console.log("el negocio de consultoria esta operando");
    }
    public iniciarOperacion(): void {
        this.operar
    }
}
//prueba
const miConsultoirio= new consultoria()
miConsultoirio.iniciarOperacion
