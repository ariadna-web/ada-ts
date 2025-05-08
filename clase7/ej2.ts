class libro{
    private _titulo: string;
    private _autor: string;
    private _anio: number;
    private _disponible: boolean;

    constructor(titulo: string, autor: string, anio: number, disponible: boolean){
        this._titulo = titulo;
        this._autor =autor;
        this._anio=anio;
        this._disponible =disponible;
    }
    public set disponibilidad(value:boolean){
        if(value===true){
            console.log("el libro esta disponiblñe");
            this._disponible=value
        }
        else if(value===false){
            console.log("el libro no esta disponiblñe");
            this._disponible=value
        }
    }
    presentarLibro():void{
        console.log("este libro fue prestado");
    }
    devolverLibro():void{
        console.log("este libro ya fue devuelto");
    }
}
//("las 3 coronas", "Kendare Blake", 2017)
const Librito= new libro ("las 3 coronas", "Kendare Blake", 2017, true)
Librito.devolverLibro()
Librito.presentarLibro()
Librito.disponibilidad= false
console.log(Librito)
