let persona={
    nombre: "analia",
    edad: 26,
    ciudad: "merlo LS"
};
for(let propiedades in persona){
    console.log(`datos: ${propiedades} ${persona [propiedades as keyof typeof persona]}`)
}