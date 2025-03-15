var nombreCliente, apellidoCliente, cantidadCel, marcaCel;
const descuentoMoto = 0.2;
const descuentoSam = 0.15;
const descuentoXia = 0.1;
const descuentoApple = 0.05;
const precioMoto = 5000000;
const precioSam = 800000;
const precioXia = 600000;
const precioApple = 1000000;

nombreCliente = prompt("Por favor digite su nombre: ");
apellidoCliente = prompt("Por favor ingrese su apellido: ");
cantidadCel = parseInt(prompt("Por favor digite la cantidad del producto que desea comprar: "), 10);
marcaCel = prompt("Digite la marca de celular a adquirir: ");
console.log(nombreCliente, " ", apellidoCliente, " ", "Los detalles de su compra fueron: ", cantidadCel, " ", "Celulares marca ", marcaCel);
document.write("<br/>", nombreCliente, " ", apellidoCliente, " ", "Los detalles de su compra fueron: " + cantidadCel + " ", "celulares marca ", marcaCel);

switch (marcaCel.toLowerCase()) {
    case "motorola":
        var compra = precioMoto * cantidadCel;
        console.log("El precio de su compra fue ", "$", compra);
        document.write("<br/>", "El precio de su compra fue $", compra);
        if (cantidadCel > 2) {
            var descuento = compra * descuentoMoto;
            var total = compra - descuento;
            console.log("Se aplicó un descuento de ", "$", descuento, " y el total a pagar es ", "$", total);
            document.write("<br/>", "Se aplicó un descuento de $", descuento, " y el total a pagar es $", total);
        }
        break; // <--- Aquí se añade el break
    // ... (otros casos)
    default:
        console.log("Marca no reconocida");
        document.write("<br/>", "Marca no reconocida");
}

console.log("Nombres y Apellidos del cliente: ", nombreCliente + " " + apellidoCliente);
document.write("<br/>", "Nombres y Apellidos del cliente: ", nombreCliente + " " + apellidoCliente);

console.log("Cantidad Celular: ", cantidadCel, " Marca Celular: ", marcaCel);
document.write("<br/>", "Cantidad Celular: ", cantidadCel, " Marca Celular: ", marcaCel);
