console.log("Continuación Comandos y/o métodos para trabajar con Arreglos");
document.write("<br/>","Continuación Comandos y/o métodos para trabajar con Arreglos","<br/>");

// Otra forma de realizar una copia de un arreglo a otro --> ...
// nombre del arreglo inicial = [... nombre del segundo arreglo o copia del arreglo]

var y = 0;
var arreglo1 = ["Tecnólogo", "Análisis", "Y", "Desarrollo", "De", "Software"] //longitud 6
//                   0            1        2       3          4        5
var copiaArreglo1 = [... arreglo1];

console.log ("Datos del arreglo1: ", arreglo1);
console.log("Datos del arreglo copiaArreglo1: ", copiaArreglo1);

document.write("<br/>", "Datos del arreglo1: ", arreglo1, " ");
document.write("<br/>", "Datos del arreglo copiaArreglo1: ", copiaArreglo1, " ")

copiaArreglo1.shift();

console.log ("Datos actulizados del arreglo1: ", arreglo1, " ");
console.log("Datos actulizados del arreglo1: ", arreglo1, " ");

document.write("<br/>", "Datos actulizados del arreglo1: ", arreglo1, " ");
document.write("<br/>", "Datos actualizados del arreglo copiaArreglo1: ", copiaArreglo1, " ")

//Para validar si una variable contiene un dato tipo array (arreglo) --> Array.isArray (nombre_variable)

var validacion1 = Array.isArray(y);           // true o false  [Verdadero o falso]
var validacion2 = Array.isArray(arreglo1);    // true o false  [Verdadero o falso]
var validacion3 = Array.isArray(copiaArreglo1); // true o false  [Verdadero o falso]

document.write("<br/>", "Dato variable Y = ", y);
document.write("<br/>", "Dato variable VALIDACION1 = ", validacion1);
document.write("<br/>", "Dato variable VALIDACION2 = ", validacion2);
document.write("<br/>", "Dato variable VALIDACION3 = ", validacion3);

if (validacion1 == true)
    {
        console.log("La variable Y contiene un dato tipo Array o Arreglo");
        document.write("<br/>", "La variable Y contiene un dato tipo Array o Arreglo");
    }
else 
{
    console.log("La variable Y NO contiene un dato tipo Array o Arreglo");
    document.write("<br/>", "La variable Y NO contiene un dato tipo Array o Arreglo");

}

switch (validacion2)
{
    case true:
        console.log("La variable ARREGLO1 contiene un dato tipo Array o Arreglo");
        document.write("<br/>", "La variable ARREGLO1 contiene un dato tipo Array o Arreglo");
        break;
    default:        
        console.log("La variable ARREGLO1 NO contiene un dato tipo Array o Arreglo");
        document.write("<br/>", "La variable ARREGLO1 No contiene un dato tipo Array o Arreglo");
        break;
}

while (validacion3 == true)
    {
        console.log("La variable COPIAARREGLO1 contiene un dato tipo Array o Arreglo");
        document.write("<br/>", "La variable COPIAARREGLO contiene un dato tipo Array o Arreglo");
        
        copiaArreglo1.pop();
        console.log("Datos actualizados del arreglo COPIAARREGLO1: ", copiaArreglo1);
        document.write("<br/>", "Datos actualizados del arreglo COPIAARREGLO1: ", copiaArreglo1, " ");

        validacion3 = false;
    }
if ((validacion3 = Array.isArray(copiaArreglo1)) == false)
    {
        console.log("La variable COPIAARREGLO1 NO contiene un dato tipo Array o Arreglo");
        document.write("<br/>", "La variable COPIAARREGLO NO contiene un dato tipo Array o Arreglo");
    }

//Para ordenar datos de un arreglo de forma ascendente --> .sort -> nombre_arreglo.sort()

var numeros = [20, 18, 78];

console.log("Los Datos del arreglo ARREGLO1 ordenados de forma ascendente son: ", arreglo1.sort());
console.log("Los Datos del arreglo NUMEROS ordenados de forma ascendente son: ", numeros.sort());

document.write("<br/>", "Los Datos del arreglo ARREGLO1 ordenados de forma ascendente son: ", 
                arreglo1.sort());
document.write("<br/>", "Los Datos del arreglo NUMEROS ordenados de forma ascendente son: ", numeros.sort());

/*Para ordenar datos tipo numérico de un arreglo de forma descendente 
.sort ((a, b) => (b-a)) -> nombre_arreglo.sort((a, b) => (b-a))*/

//numeros = [20, 18, 78];


console.log("Los Datos del arreglo NUMEROS ordenados de forma descendente son: ", 
            numeros.sort((a,b) => (b-a)));
document.write("<br/>", "Los Datos del arreglo NUMEROS ordenados de forma descendente son: ", 
            numeros.sort((a,b) => (b-a))); 

/*
console.log("Los Datos del arreglo NUMEROS ordenados de forma descendente son: ", 
            numeros.reverse());
document.write("<br/>", "Los Datos del arreglo NUMEROS ordenados de forma descendente son: ", 
            numeros.reverse());*/

/*Para ordenar datos tipo string o cadena de caracteres de un arreglo de forma descendente   
1) ordenar los datos del arreglo en forma ascendente --> nombre_Arreglo.sort();
2) ordenar los datos del arreglo en forma descendente --> .reverse --> nombre.Arreglo.reverse();
*/

console.log("Los Datos del arreglo ARREGLO1 ordenados de forma descendente son: ", arreglo1.reverse());
document.write("<br/>", "Los Datos del arreglo ARREGLO1 ordenados de forma descendente son: ", 
            arreglo1.reverse()); 

console.log("Fin Comandos y/o métodos para trabajar con Arreglos");
document.write("<br/>","Fin Comandos y/o métodos para trabajar con Arreglos","<br/>");
