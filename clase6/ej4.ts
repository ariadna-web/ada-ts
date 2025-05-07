class flor{
    describir():void{
        console.log(`esta flor huele lindo`)
    }
}
class rosa extends flor{
    describir(): void {
        console.log(`la rosa es la flor del amor`);
    }
}
class tulipan extends flor{
    describir(): void {
        console.log("el tulipan es una flor elegante");
    }
}
const flower= new flor
flower.describir()
const miFlor= new flor
miFlor.describir()