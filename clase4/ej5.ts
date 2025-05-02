/*Crea una variable de tipo any y haz una conversión con aserciones dobles para
convertirla en un number. Muestra el resultado */

let deporte: any= "acrotela deja heridas y moretones en todo el cuerpo"
let deporteDificil=(deporte as unknown as number)
console.log(` al igual que la mayoria de deportes, ${deporteDificil}.`);
