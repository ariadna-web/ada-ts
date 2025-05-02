export const libro = {
    titulo: "el hobbit",
    autor: "tolkien",
    anio: 1937,
    //ejercicio 3
    descripcion: function(){
      return ` el libro ${this.titulo} fue escrito por ${this.autor}, en el año: ${this.anio}.`;
    }
  };

  console.log(libro.descripcion());
  
  