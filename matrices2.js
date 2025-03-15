console.log("Continuación Temática de Matrices");
document.write("<br/>","Continuación Temática de Matrices","<br/>");

/*
Método .join --> Nos permite concatenar o adicionar los datos de una matriz por fila o por columna
y visualizarlos por consola

Sintaxis: 

console.log (Nombre_Fila o Nombre_Columna.join(",         "))

o

console.log (Nombre_Fila o Nombre_Columna.join(", /  "))

console.log (Nombre_Fila o Nombre_Columna.join(", ***  "))
*/

var ejemploMatriz = [["Tecnólogo", "ADSO", "2024"],
                     [2758358, 2758359, 2758360],
                     ["Virtual", "Regional", "Garzón"]];

/*
ejemploMatriz =
            0             1          2      

0       Tecnólogo       ADSO        2024
1        2758358       2758359     2758360
2        Virtual       Regional     Garzón

*/

console.log ("Ejemplo No. 1. Datos de la Matriz denominada ejemploMatriz visualizados con el Método .join son: ",
               ejemploMatriz.join(" ,                   "));

document.write ("<br/>, ","Ejemplo No. 1. Datos de la Matriz denominada ejemploMatriz visualizados con el Método .join son: ",
                ejemploMatriz);

console.log ("Ejemplo No. 2. Datos de la Matriz denominada ejemploMatriz visualizados con el Método .join son: ",
                ejemploMatriz.join(", / "));
 
document.write ("<br/>, ","Ejemplo No. 2. Datos de la Matriz denominada ejemploMatriz visualizados con el Método .join son: ",
                 ejemploMatriz);

console.log ("Ejemplo No. 3. Datos de la Matriz denominada ejemploMatriz visualizados con el Método .join son: ",
                 ejemploMatriz.join(" *** "));
  
document.write ("<br/>, ","Ejemplo No. 3. Datos de la Matriz denominada ejemploMatriz visualizados con el Método .join son: ",
                  ejemploMatriz);

console.log ("Ejemplo No. 4. Datos de la Matriz denominada ejemploMatriz visualizados con el Método .join son: ",
                  ejemploMatriz.join(" / "));
   
document.write ("<br/>, ","Ejemplo No. 4. Datos de la Matriz denominada ejemploMatriz visualizados con el Método .join son: ",
                   ejemploMatriz); 

//Otro forma de visualizar los datos de una matriz por fila

//                     0   1    2   3   4
var ejemploMatriz2 = [[10, 20, 30, 40, 50],             //  0
                      [60, 70, 80, 90, 100],            //  1
                      [110, 120, 130, 140, 150],        //  2
                      [160, 170, 180, 190, 200]];       //  3

console.log ("Datos de la Matriz denominada ejemploMatriz2 son: ", ejemploMatriz2);
       
document.write ("<br/>, ","Datos de la Matriz denominada ejemploMatriz2 son: ", ejemploMatriz2);

for (var fila = 0; fila < ejemploMatriz2.length; fila++)   // fila = 0, 1, 2, 3
    {
        console.log ("Los datos de la fila ", fila, " de la Matriz denominada ejemploMatriz2 son: ",
                        ejemploMatriz2[fila]);
        document.write ("<br/>", "Los datos de la fila ", fila, " de la Matriz denominada ejemploMatriz2 son: ",
                        ejemploMatriz2[fila]);    
    }

/*

typeof --> Operador que nos permite determinar el tipo de dato que almacena o guarda una variable o 
           constante.

Sintaxis:

typeof Nombre_Variable;

En JS los Arreglos y las Matrices son consideradas como un tipo de dato OBJET.

OBJET --> Permite guardar una colección o un conjungto de datos

*/

var tipoVariableFila = typeof fila;              // tipoVariableFila = Numérico o Number
var tipoVariableMatriz = typeof ejemploMatriz;   // ejemploMatriz = Objeto u Objet

console.log ("Los datos de la Variable denomianda FILA es de tipo: ", tipoVariableFila);
console.log ("Los datos de la Variable denominada EJEMPLOMATRIZ es de tipo: ", tipoVariableMatriz);
console.log ("Los datos de la Variable denominada EJEMPLOMATRIZ2 es de tipo: ", typeof ejemploMatriz2);

document.write ("<br/>", "Los datos de la Variable denomianda FILA es de tipo: ", tipoVariableFila);
document.write ("<br/>", "Los datos de la Variable denominada EJEMPLOMATRIZ es de tipo: ", 
                    tipoVariableMatriz);
document.write ("<br/>", "Los datos de la Variable denominada EJEMPLOMATRIZ2 es de tipo: ", 
                    typeof ejemploMatriz2);

var ejemploArreglo = ["ADSO", "CONTABILIDAD", "COMERCIO EXTERIOR"];
const regional = "Garzón";
const validacion = true;

console.log ("Los datos de la Variable denomianda EJEMPLOARREGLO es de tipo: ", typeof ejemploArreglo);
console.log ("Los datos de la constante denominada REGIONAL es de tipo: ", typeof regional);
console.log ("Los datos de la constante denominada VALIDACIÓN es de tipo: ", typeof validacion);

document.write ("<br/>", "Los datos de la Variable denomianda EJEMPLOARREGLO es de tipo: ", 
                    typeof ejemploArreglo);
document.write ("<br/>", "Los datos de la constante denominada REGIONAL es de tipo: ", typeof regional);
document.write ("<br/>", "Los datos de la constante denominada VALIDACIÓN es de tipo: ", typeof validacion);

if (tipoVariableFila == "object")
    {
        for (var fila = 0; fila < ejemploMatriz2.length; fila++)   // fila = 0, 1, 2, 3
            {
                console.log ("Los datos de la variable FILA ", fila, " son: ", fila);
                document.write ("<br/>", "Los datos de la variable FILA ", fila, " son: ", fila);    
            }
    }
else 
    {
        console.log ("El dato de la variable FILA es: ", fila);
        document.write ("<br/>", "El dato de la variable FILA es: ", fila); 
    }

if (tipoVariableMatriz == "object")
        {
            for (var fila = 0; fila < ejemploMatriz.length; fila++)   // fila = 0, 1, 2, 3
                {
                    console.log ("Los datos de la variable EJEMPLOMATRIZ de la ", fila, " son: ",
                                    ejemploMatriz[fila]);
                    document.write ("<br/>", "Los datos de la variable EJEMPLOMATRIZ de la ", fila, 
                                        " son: ", ejemploMatriz[fila]);    
                }
        }
    else 
        {
            console.log ("El dato de la variable EJEMPLOMATRIZ es: ", ejemploMatriz);
            document.write ("<br/>", "El dato de la variable EJEMPLO MATRIZ es: ", ejemploMatriz); 
        }


console.log("Fin Continuación Temática de Matrices");
document.write("<br/>","Fin Continuación Temática de Matrices","<br/>");