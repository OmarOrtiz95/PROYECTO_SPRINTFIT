console.log("Continuación Comandos y/o métodos para trabajar con Arreglos");
document.write("<br/>","Continuación Comandos y/o métodos para trabajar con Arreglos","<br/>");


//Para ordenar datos tipo numérico de un arreglo de forma ascendente

var arrayNumber1 = [15, 74, 14];

console.log("Los datos del Arreglo arrayNumber1 son: ", arrayNumber1);
document.write("<br/>","Los datos del Arreglo arrayNumber1 son: ", arrayNumber1);

console.log("Los datos del Arreglo arrayNumber1 ordenados de forma ascendente son: ", arrayNumber1.sort());
document.write("<br/>","Los datos del Arreglo arrayNumber1 ordenados de forma ascendente son: ", 
                arrayNumber1.sort());

/*Para ordenar datos tipo numérico de un arreglo de forma descendente 
.sort ((a, b) => (b-a)) -> nombre_arreglo.sort((a, b) => (b-a))*/

var arrayNumber2 = [1, 85, 2];

console.log("Los datos del Arreglo arrayNumber2 son: ", arrayNumber2);
document.write("<br/>","Los datos del Arreglo arrayNumber2 son: ", arrayNumber2);

console.log("Los datos del Arreglo arrayNumber2 ordenados de forma descendente son: ", 
                arrayNumber2.sort ((a,b) => (b-a)));
document.write("<br/>","Los datos del Arreglo arrayNumber ordenados de forma descendente son: ", 
                arrayNumber2.sort ((a,b) => (b-a)));

//Para ordenar datos tipo string o cadena de carácteres de un arreglo de forma ascendente

var arrayString1 = ["Pedro", "Ana", "Carlos"];

console.log("Los datos del Arreglo arrayNumber1 son: ", arrayString1);
document.write("<br/>","Los datos del Arreglo arrayNumber1 son: ", arrayString1);

console.log("Los datos del Arreglo arrayNumber1 ordenados de forma ascendente son: ", arrayString1.sort());
document.write("<br/>","Los datos del Arreglo arrayNumber1 ordenados de forma ascendente son: ", 
                arrayString1.sort());

/*Para ordenar datos tipo string o cadena de carácteres de un arreglo de forma descendente:

1) Se debe ordenar el arreglo de forma ascedente
2) Utilizar el método .reverse [el último dato del arreglo y lo ubica en la primera posición y así
    sucesivamente]  Pedro, Ana, Carlos --> .reverse () --> Carlos, Ana, Pedro y

Ejemplo: 
arrayString2 = ["Cali", "Boyacá", "Antioquia", "Bogotá"]

1) arrayString2 = ["Antioquia", "Bogotá", "Boyacá", "Cali"]
2) arrayString2 = ["Cali", "Boyacá", "Bogota", "Antioquia"]
*/

var arrayString2 = ["Cali", "Boyacá", "Antioquia", "Bogotá"];

console.log("Los datos del Arreglo arrayString2 son: ", arrayString2);
document.write("<br/>","Los datos del Arreglo arraySgtring2 son: ", arrayString2);

//1) Ordenar de forma ascedente

console.log("Los datos del Arreglo arraySgtring2 ordenados de forma ascendente son: ", 
                arrayString2.sort ());
document.write("<br/>","Los datos del Arreglo arraySgtring2 ordenados de forma ascendente son: ", 
                arrayString2.sort ());

//2) Utilizar el método .reverse ()

arrayString2 = arrayString2.reverse();

console.log("Los datos del Arreglo arraySgtring2 ordenados de forma descendente son: ", 
                arrayString2);
document.write("<br/>","Los datos del Arreglo arraySgtring2 ordenados de forma descendente son: ", 
                arrayString2);

/*Asignar datos a más de una variable utilizando cualquier tipo de dato.

Para utilizar o asingar emojis a una variable:

Pulsar teclas: Ctrl p

Pulsar tecla: >

Digitar Emoji y seleccionar del menú que se despliega la opción de insert

Digitar el nombre del emoji en inglés y seleccionar el deseado

*/

var [pato, ballena, leon] = ["🦆", "🐋", "🦁"];

console.log("Los datos de las variables son: Pato = ", pato, ", Ballena = ", ballena, ", León = ", leon);
document.write("<br/>","Los datos de las variables son: Pato = ", pato, ", Ballena = ", ballena, 
                ", León = ", leon, "<br/>");

//Crear un arreglo con datos de variables

var animales = [pato, ballena, leon];

console.log("Los datos del arreglo animales son: ", animales);
document.write("<br/>","Los datos del arreglo animales son: ", animales, "<br/>");

//Otro ejemplos con tipo de dato numérico

var [uno, dos, tres] = [1, 2, 3];

console.log("Los datos de las variables son: Uno = ", uno, ", Dos = ", dos, ", tres = ", tres);
document.write("<br/>","Los datos de las variables son: Uno = ", uno, ", Dos = ", dos, ", tres = ", 
                tres, "<br/>");

var arrayNumeros = [uno, dos, tres];

console.log("Los datos del arreglo animales son: ", arrayNumeros);
document.write("<br/>","Los datos del arreglo animales son: ", arrayNumeros, "<br/>");

//Asignar datos de un arreglo a distintas variables

var frutas =["🟠", "🍎", "🍍"];

console.log("Los datos del arreglo frutas son: ", frutas);
document.write("<br/>","Los datos del arreglo frutas son: ", frutas, "<br/>");

var [naranja, manzana, pina] = frutas;

console.log("Los datos de las variables son: Naranja = ", naranja, ", Manzana = ", manzana, ", Piña = ",
                pina);
document.write("<br/>","Los datos de las variables son: Naranja = ", naranja, ", Manzana = ", manzana, ", Piña = ",
                pina, "<br/>");

//Otro ejemplo con tipo de dato string 

var nombreCompleto = ["Pepito", "Pérez", "Álvarez"];

console.log("Los datos del arreglo NombreCompleto son: ", nombreCompleto);
document.write("<br/>","Los datos del arreglo NombreCompleto son: ", nombreCompleto, "<br/>");

var [primerNombre, primerApellido, segundoApellido] = nombreCompleto;

console.log("Los datos de las variables son: PrimerNombre = ", primerNombre,
                ", PrimerApellido = ", primerApellido, ", SegundoApellido = ", segundoApellido);
document.write("<br/>","Los datos de las variables son: PrimerNombre = ", primerNombre,
                ", PrimerApellido = ", primerApellido, ", SegundoApellido = ", segundoApellido, "<br/>");

console.log("Fin Continuación Comandos y/o métodos para trabajar con Arreglos");
document.write("<br/>","Fin Continuación Comandos y/o métodos para trabajar con Arreglos","<br/>");