interface Deportista {
    nombre: string;
    deporte: string;
    energia: number;
  }
  
  function entrenar(deportista: Deportista, horas: number): void {
    deportista.energia -= horas * 5;
  }
  
  let deportista: Deportista = {
    nombre: "Juan",
    deporte: "Fútbol",
    energia: 100
  };
  
  console.log(`Energía inicial: ${deportista.energia}`);
  
  entrenar(deportista, 2);
  
  console.log(`Energía después de entrenar: ${deportista.energia}`);