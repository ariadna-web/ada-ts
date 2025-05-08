class coche{
    private _marca: string;
    private _modelo: string;
    private _anio: number;
    private _kilometraje: number;

    constructor(marca: string, modelo: string, anio: number, kilometraje: number){
        this._marca=marca;
        this._modelo=modelo;
        this._anio= anio;
        this._kilometraje=kilometraje;
    }
    
    public set kilometraje(value:number){
        if(value> 35000){
            this._anio=value
        }
        else{
             console.log("tiene demasiado kilometraje")
        }
        
    }
    encender(): void{
        console.log("el auto esta encendido");
    }
    realizarViajee():void{
        console.log("el auto se encuentra en viaje");
    }
}
const auto= new coche("audi", "bora", 2019, 40000)
auto.anio=2020
auto.kilometraje= 60000
Car.realizarViaje()
Car.encender()
console.log(auto)

