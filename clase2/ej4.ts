interface Libro {
    titulo: string;
    autor: string;
    paginas: number;
  }
  
  function crearLibro(titulo: string, autor: string, paginas: number): Libro {
    return {
      titulo,
      autor,
      paginas
    };
  }
  
  let libro1: Libro = crearLibro("El Señor de los Anillos", "J.R.R. Tolkien", 1000);
  let libro2: Libro = crearLibro("Cien años de soledad", "Gabriel García Márquez", 500);
  
  console.log(`Libro 1: ${libro1.titulo} de ${libro1.autor}, ${libro1.paginas} páginas`);
  console.log(`Libro 2: ${libro2.titulo} de ${libro2.autor}, ${libro2.paginas} páginas`);
