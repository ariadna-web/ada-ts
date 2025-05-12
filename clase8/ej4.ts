abstract class instrumentoMusical{
    //metodo abstracto
    abstract tocar():void
    abstract tocar(conAcompaniamiento: boolean): void
}
class guitarra extends instrumentoMusical{
    //sobrescriturqa del metodo tocar
    tocar():void;
    tocar(conAcompaniamiento:boolean):void
    tocar(conAcompaniamiento?:boolean):void{
        if(conAcompaniamiento){
            console.log("tocando la guitarr con gente")
        }else{
            console.log("tocando la guitarra solo");
        }
    }
}
class Piano extends instrumentoMusical {
    //saobrescritura del metodo tocar
    tocar(): void;
    tocar(conAcompaniamiento: boolean): void;
    tocar(conAcompaniamiento?: boolean): void {
        if(conAcompaniamiento){
            console.log("tocando el piano con gente")
        }else{
            console.log("tocando el piano solo");
        }
    }
}
//prueba
const Guitarra= new guitarra()
Guitarra.tocar()
Guitarra.tocar(true)

const piano= new Piano()
piano.tocar()
piano.tocar(true)