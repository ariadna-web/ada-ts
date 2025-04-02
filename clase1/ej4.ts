function imprimirInformacion(nombre: string, edad?: number) {
    if (edad) {
      console.log(`Nombre: ${nombre}, Edad: ${edad}`);
    } else {
      console.log(`Nombre: ${nombre}, Edad no proporcionada`);
    }
  }
  
  imprimirInformacion('Juan', 25);
  imprimirInformacion('Maria');
  