// 29.

const carrito = {
  productos: [
    {
      nombre: 'papel higienico',
      unidades: 4,
      precio: 5,
    },
    {
      nombre: 'chocolate',
      unidades: 2,
      precio: 1.5,
    },
  ],
  get precioTotal() {
    let subtotal = 0;
    let total = 0;
    this.productos.forEach((elemento) => {
      subtotal = elemento.precio * elemento.unidades;
      total += subtotal;
    });
    return total;
  },
};

console.log(carrito.precioTotal);
