class polizas{
    nombre: string;
    montoAsegurado:number;
    id:number;
    constructor(nombre:string, montoAsegurado:number, id:number, fecha:number ){
        this.nombre=nombre
        this.montoAsegurado=montoAsegurado
        this.id=id
    }
    Poliza(value:number):void{
        if(value>0){
            setTimeout(()=>{
                this.montoAsegurado=value
                console.log(`la poliza de ${this.nombre} se renovo a ${value}`)
            },3000)
        }else{
            console.log("ERROR DE ACTUALIZACION")
        }
    }
   
    }