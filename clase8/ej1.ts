//interfaz electrica
interface Electrico{
    cargarBateria():void
}

//INTERFAZ COMBUSTIBLE
interface Combustible{
    llenarTanque():void
}
//clase abstracta transporte
abstract class transporte{
    constructor(protected pasajeros: number){}
    //metodo abstracto que deben implementar las clases
    abstract mover():void
    //metodo abstracto para describir el transporte
    describir():void{
        console.log(`este transporte lleva ${this.pasajeros} pasajeros`);
        
    }
}
//clase autobusElectrico quer extiende transporte e implementa electrico
class autobusElectrico extends transporte implements Electrico{
    mover():void{
        console.log(`el autobus electrico se mueve por la ciudad`)
    }
    cargarBateria(): void {
            console.log((`cargando la bateria del autobus`));
            
        }
    }

//clase taxi que extiende transporte e implementa electrico
          class Taxi extends transporte implements Combustible{
            mover():void{
                console.log(`el taxi se mueve en ruta`);
            }
            llenarTanque(): void {
                console.log(`llenando el tanque del taxi`);
            }
          }
          //pruebas:
          const autobus= new autobusElectrico(30)
          autobus.describir()
          autobus.cargarBateria()
          autobus.mover()

          const taxi= new Taxi(2)
          taxi.describir()
          taxi.llenarTanque()
          taxi.mover()
          