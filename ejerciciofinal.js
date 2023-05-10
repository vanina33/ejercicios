class carrito4 {
    constructor() {
        this.montoTotal = 0;
        this.productos = [];
    }
    agregarProducto(nombre, precio, unidades) {
        const productoExistente =
            this.productos.find((producto) => producto.nombre === nombre);
        if (productoExistente) {
            console.log(`ya existe ${nombre} con $ {productoExistente.unidades}unidades`);
        } else {
            const producto = {
                nombre, precio, unidades,
            };
            this.productos.push(producto);
            this.montoTotal += precio * unidades;
        }
    }
};
let carrito5 = new carrito4();
carrito5.agregarProducto('Azucar', 2, 10)
carrito5.agregarProducto('Azucar', 5, 2)
console.log(carrito5);
