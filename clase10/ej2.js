class Pedido {
  nombre: string;
  cantidad: number;
  tipo: string;

  constructor(nombre: string, cantidad: number, tipo: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipo = tipo;
  }
}

class envioDeFlores {
  stock: Pedido[] = [];

  public agregarPedido(pedido: Pedido): void {
    this.stock.push(pedido);
  }

  mostrarPedido(): void {
    this.stock.forEach(p => {
      console.log(`El cliente ${p.nombre} llevó ${p.cantidad} de ${p.tipo}`);
    });
  }
}

const pedidos = new envioDeFlores();
const pedido1 = new Pedido("Lucia", 2, "tulipanes");
pedidos.agregarPedido(pedido1);

const pedido2 = new Pedido("Juan", 5, "rosas");
pedidos.agregarPedido(pedido2);

pedidos.mostrarPedido();


