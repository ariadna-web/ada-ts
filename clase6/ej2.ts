class maestro{
    protected nombre: string
    protected materia: string
    constructor(nombre: string, materia: string){
    this.nombre=nombre
    this.materia=materia
}
enseniar():void{
    console.log(`el profesor ${this.nombre} enseña ${this.materia}`)
}
}
class maestroMatematicas extends maestro{
    constructor(nombre: string, materia: string){
        super(nombre, materia)
    }
    enseniar(): void {
        console.log(`las matematicas sirven para todo en la vida`);
    }
}
const profesor1=new maestro("juan", "historia")
profesor1.enseniar()
const profesor2= new maestro("marcos", "matematicas")
profesor2.enseniar()