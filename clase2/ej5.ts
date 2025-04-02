
  function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((a, b) => a + b, 0);
  }
  
  console.log(sumarTodos(1, 2, 3, 4, 5));