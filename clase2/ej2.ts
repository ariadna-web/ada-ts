function saludar(nombre: string, saludo: string = "Hola"): string {
    return `${saludo}, ${nombre}`;
  }
  
  console.log(saludar("Juan"));  // Salida: "Hola, Juan"
  console.log(saludar("Maria", "Buenos días"));  // Salida: "Buenos días, Maria"
  