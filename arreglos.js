console.log("Ejemplo de Arreglos haciendo uso del Bucle o ciclo iterativo del FOR");
document.write("<br/>","Ejemplo de Arreglos haciendo uso del Bucle o ciclo iterativo del FOR");
var nombres = ["Pepito", 'Jesús', "Maria", "José"]; //Longitud = 4 - Índices = 3
           //     0         1        2        3
var x, y;
console.log("Datos del Arreglo denominado { NOMBRES } son: ",nombres);
document.write("<br/>","Datos del Arreglo denominado { NOMBRES } son: ",nombres);

console.log("El Dato correspondiente al índice 2 del Arreglo denominado { NOMBRES } es: ",nombres[2]);
document.write("<br/>","El Dato correspondiente al índice 2 del Arreglo denominado { NOMBRES } es: ",nombres[2]);

console.log("La longitud del Arreglo denominado { NOMBRES } es: ",nombres.length);
document.write("<br/>","La longitud del Arreglo denominado { NOMBRES } es: ",nombres.length);

for(x=nombres.length-1;x>=0; x--){ //Para x =3 hasta x >= 0 x--
    console.log("Dato Índice No. ",x," = ", nombres[x]);
    document.write("<br/>","Dato Índice No. ",x," = ", nombres[x]);
}

nombres[nombres.length-1] = "Pedro";
nombres[0] = "Juan";

x= 0;

while (x<nombres.length)
 {
    console.log("Dato Índice No. ",x," = ", nombres[x]);
    document.write("<br/>","<br/>","Dato Índice No. ",x," = ", nombres[x]);
    x++;
}

var edades = new Array(); // Declarando o creando una variable tipo Array sin datos y sin longitud
y = prompt("Digite el número de clientes"); //Un número de clientes para digitar las edades

for(x=0; x<y; x++) //Ciclo iterativo para guardar las edades en el arreglo
{
    edades[x] = prompt("Digite la edad"); //Usuario digita las edades del número de clientes
}

console.log("Las edades de ",y," clientes son ", edades); //Mostrar por consola las edades de los clientes
document.write("<br/>","<br/>","Las edades de ",y," clientes son ", edades); //Mostrar en el documento las edades de los clientes


console.log("Fin del Ejemplo de Arreglos haciendo uso del Bucle o ciclo iterativo del FOR");
document.write("<br/>","<br/>","Fin del Ejemplo de Arreglos haciendo uso del Bucle o ciclo iterativo del FOR");