console.log("Continuación Temática de Matrices");
document.write("<br/>","Continuación Temática de Matrices","<br/>");

//Declarar o establecer un arreglo, para posteriormente ingresar datos --> Matriz

var datosAprendices = [];

/*
           0                 1                      2
        Nombres             Edad                Programa

0        Jesús               25                   ADSO                      Arreglo1
1        María               20                 Contabilidad                Arreglo2
2        José                18                 Comercio Exterior           Agrreglo

*/

//Declarar o establecer variables

var numeroAprendices;
var indiceC;

//Ingresar datos

numeroAprendices = prompt ("Por favor ingrese el número de Aprendices a registrar")  //3

//Opción 1 para ingresar los datos de los Aprendices

/*
for (var indiceF = 0; indiceF < numeroAprendices; indiceF++)
    {
        datosAprendices [indiceF] = [];
        indiceC = 0;

        //for (var indiceC = 0; indiceC < numeroAprendices; indiceC++)
         //   {
        datosAprendices[indiceF][indiceC] = prompt ("Por favor ingrese el Nombre del Aprendiz");
        indiceC++;
        datosAprendices[indiceF][indiceC] = prompt ("Por favor ingrese la edad del Aprendiz");
        indiceC++;
        datosAprendices[indiceF][indiceC] = prompt ("Por favor ingrese el Programa del Aprendiz");                
           // }
    }
*/

//Opción 2 para ingresar los datos de los Aprendices

for (var indiceF = 0; indiceF < numeroAprendices; indiceF++)
    {
        datosAprendices [indiceF] = [];
        indiceC = 0;

        //for (var indiceC = 0; indiceC < numeroAprendices; indiceC++)
         //   {
        datosAprendices[indiceF][indiceC] = prompt (`Por favor ingrese el Nombre del Aprendiz No. ${indiceF+1}`);
        indiceC++;
        datosAprendices[indiceF][indiceC] = prompt (`Por favor ingrese la edad del Aprendiz ${datosAprendices[indiceF][0]}`);
        indiceC++;
        datosAprendices[indiceF][indiceC] = prompt (`Por favor ingrese el Programa del Aprendiz ${datosAprendices[indiceF][0]}`);                
         //   }
    }

//Visualizar los datos de la Matriz denominada DATOSAPRENDICES en una misma línea en el documento

console.log("DATOS APRENDICES = [", datosAprendices, "]");
document.write("<br/>", "DATOS APRENDICES = [", datosAprendices, "]", "<br/>")  //Muestra en una sola línea

//Visualizar los datos de la Matriz denominada DATOSAPRENDICES por filas

console.log("***  LISTADO DE LOS DATOS DE LOS APRENDICES  ***");
document.write("<br/>", "***  LISTADO DE LOS DATOS DE LOS APRENDICES  ***", "<br/>")  //Muestra en una sola línea

for (indiceF = 0; indiceF < numeroAprendices; indiceF++)
    {
        console.log (indiceF+1, ") ", datosAprendices[indiceF])    //  1) Maria   18     ADSO
        document.write("<br/>", indiceF+1, ") ", datosAprendices[indiceF], "<br/>")  //  1) Maria   18  ADSO
    }

/*
Ordenar de forma ascendente los datos de la Matriz denominada DATOSAPRENDICES por la primera 
columna --> Nombre del Aprendiz  
*/

datosAprendices = datosAprendices.sort();

console.log ("Los datos de los Aprendices ordenados de forma ascendente por la primera columna [Nombre] son: ", 
                datosAprendices);    // Visualiza en una misma línea todos los datos de la Matriz

document.write("<br/>", "Los datos de los Aprendices ordenados de forma ascendente por la primera columna [Nombre] son: ", 
datosAprendices, "<br/>")

//Visualizar los datos de la Matriz denominada DATOSAPRENDICES por filas, ya ordenados de forma ascendente

console.log("***  LISTADO DE LOS DATOS DE LOS APRENDICES ORDENADOS DE FORMA ASCEDENTE  ***");
document.write("<br/>", "***  LISTADO DE LOS DATOS DE LOS APRENDICES ORDENADOS DE FORMA ASCENDENTE  ***",
                     "<br/>")  //Muestra en una sola línea

for (indiceF = 0; indiceF < numeroAprendices; indiceF++)
    {
        console.log(indiceF+1, ") ", datosAprendices[indiceF]);
        document.write("<br/>", indiceF+1, ") ", datosAprendices[indiceF], "<br/>");
    }

/*
Ordenar de forma descendente los datos de la Matriz denominada DATOSAPRENDICES por la primera columna
--> Nombre del Aprendiz
*/

datosAprendices = datosAprendices.reverse();  // El dato de la última fila lo pasa a la primera posición

console.log("Los datos de los Aprendices ordenados de forma descendente por la primera columna [Nombre] son: ",
                datosAprendices);
document.write("<br/>", "Los datos de los Aprendices ordenados de forma descendente por la primera columna [Nombre] son: ",
datosAprendices, "<br/>")

//Visualizar los datos de la Matriz denominada DATOSAPRENDICES por filas, ya ordenados de forma descendente

console.log("***  LISTADO DE LOS DATOS DE LOS APRENDICES ORDENADOS DE FORMA DESCEDENTE  ***");
document.write("<br/>", "***  LISTADO DE LOS DATOS DE LOS APRENDICES ORDENADOS DE FORMA DESCENDENTE  ***",
                     "<br/>")  //Muestra en una sola línea

for (indiceF = 0; indiceF < numeroAprendices; indiceF++)
    {
        console.log(indiceF+1, ") ", datosAprendices[indiceF]);
        document.write("<br/>", indiceF+1, ") ", datosAprendices[indiceF], "<br/>");
    }

console.log("Fin Continuación Temática de Matrices");
document.write("<br/>","Fin Continuación Temática de Matrices","<br/>");