var ciudad;
console.log("Sistema de informacion para conocer el clima de la ciudad");
document.write("<br/>","Sistema de Información para conocer el clima de una ciudad");
ciudad = prompt("Por favor digite la ciudad de interes");
switch (ciudad){
    case "Garzon":
    case "Pitalito":
    case "Popayan":
        console.log("La Ciudad: ", ciudad, "es de clima: templado");
        document.write("<br/>", "La ciudad: ", ciudad, "es de clima: templado");
    break;
    case "Neiva":
    case "Barranquilla":
    case "Cali":
        console.log("La Ciudad: ", ciudad, "es de clima: calida");
        document.write("<br/>", "La ciudad: ", ciudad, "es de clima: calida");
    break;
    case "Bogotá":
    case "Pasto":
    case "Boyacá":
        console.log("La Ciudad: ", ciudad, "es de clima: fria");
        document.write("<br/>", "La ciudad: ", ciudad, "es de clima: fria");
    break;
    default:
    console.log("La Ciudad: ", ciudad, ", no se tiene dato del clima");
    document.write("<br/>", "La ciudad: ", ciudad, ", no se tiene dato del clima");
    break;
}