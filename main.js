
import {products} from './data/products.js';

const CAT1 = "men's clothing";
const CAT2 = "electronics"

function filtrarCategorias(array, cat1, cat2) {
    return array.filter(producto => producto.category === cat1 || producto.category === cat2);
}

let productos = filtrarCategorias(products, CAT1, CAT2);
const NOMBRES_PRODUCTOS = productos.map(producto => producto.title);

function refactorizarProductos(array) {

    let lista_productos = "";
    array.sort();

    for (let i = 0; i < array.length; i++) {
        lista_productos += (i + 1) + ") " + array[i];
        
        if (i < array.length - 1) {
            lista_productos += "\n";
        }
    }

    return lista_productos;
}

let listaProductos = refactorizarProductos(NOMBRES_PRODUCTOS);


alert(" Bienvenido a nuestra tienda!");
alert("Actualmente contamos con las siguientes categorías de productos: \n 1) Ropa de hombres \n 2) Electrónica");
let eleccionCompra = parseInt(prompt("¿Qué producto desea comprar? Tenemos los siguientes: \n ELEGIR EL PRODUCTO CON NÚMERO \n" + listaProductos));
if (isNaN(eleccionCompra)) {
    alert("Muchas gracias por su visita!");
} else {
    while (eleccionCompra < 1 || eleccionCompra > 10) {
        eleccionCompra = parseInt(prompt("Producto no encontrado. Por favor, ingrese el número de producto nuevamente: \n" + listaProductos))
    }

    let productoSeleccionado;

    do {
    // Obtener el nombre del producto seleccionado por el usuario
    const nombreElegido = NOMBRES_PRODUCTOS[eleccionCompra - 1];
    
    // Buscar el producto correspondiente según su nombre
    productoSeleccionado = productos.find(producto => producto.title === nombreElegido);
    
    if (productoSeleccionado) {
        // Mostrar la información del producto
        const mensaje = `Nombre: ${productoSeleccionado.title} \n\n Descripción: ${productoSeleccionado.description} \n\n Precio: $${productoSeleccionado.price}`;
        const confirmarCompra = confirm(`Información del producto:\n\n${mensaje}\n\n¿Desea completar la compra?`);

        if (confirmarCompra) {
            const FECHA_ACTUAL = new Date();
            const FECHA_ENTREGA = new Date(FECHA_ACTUAL);
            FECHA_ENTREGA.setDate(FECHA_ENTREGA.getDate() + 7);
            alert("¡Gracias por su compra! La fecha estimada de entrega es: " + FECHA_ENTREGA);
        } else {
            alert("Gracias por la visita!");
        }
        } else {
            eleccionCompra = parseInt(prompt("El producto seleccionado no se encuentra. Por favor, ingrese el número del producto nuevamente:\n" + listaProductos));
        }
    } while (!productoSeleccionado);
}