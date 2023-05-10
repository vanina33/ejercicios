 //jercicio 3
// Definir la clase Producto
class Producto {
  constructor(nombre, precio, unidades) {
    this.nombre = nombre;
    this.precio = precio;
    this.unidades = unidades;
  }
}

// Definir la clase CarritoDeCompras
class CarritoDeCompras {
  constructor(montoTotal, productos) {
    this.montoTotal = montoTotal;
    this.productos = productos;
  }

  agregarProducto(producto) {
    this.productos.push(producto);
    this.montoTotal += producto.precio * producto.unidades;
  }
}

// Crear un objeto Producto "Leche"
let leche = new Producto("Leche", 10, 1);

// Crear un objeto CarritoDeCompras y agregar el producto "Leche"
let carrito = new CarritoDeCompras(10,[leche]);

// Agregar otro producto al carrito
let azucar = new Producto("azucar", 5, 2);
carrito.agregarProducto(azucar);

// Mostrar el carrito en la consola
console.log(carrito);
 


