console.log("Ejercicio Heladeria haciendo uso de Matriz(ces)");
document.write("<br/>","Ejercicio Heladeria haciendo uso de Matriz(ces)","<br/>");

/*Realizar un código para una Heladería, que nos permita ingresar el dato de 3 clientes y de 2 tipos
de menú por cada cliente.

La idea es que el código nos permita mostrar por consola y en el documentos, si se repite algún tipo de
menú y cuántas veces se repite.

Cliente 1:  Batido
            Granizado       *

Cliente 2:  Helado
            Granizado       *

Cliente 3:  Ensalada
            Hamburguesa

Menú granizado fue escogido por 2 clientes


Matriz pedidosClientes:
                                    3 Columnas

                 0                         1                          2     
     F  C                        F  C
0   [0][0]      Ana             [0][1]   Batido           [0][2]   Granizado
1   [1][0]      Pedro           [1][1]   Helado           [1][2]   Granizado                     3 Filas
2   [2][0]      José            [2][1]  Ensalada          [2][2]  Hamburguesa

for (indiceFila = 0; indiceFila < pedidosClientes.length; indiceFila++)
    {
        for (indiceColumna = 1; indiceColumna < pedidosClientes.length; indiceColumna++)
            {

            }
    }


*/

// Establecer o declarar variable que se va a utilizar como Matriz para guardar los datos de los pedidos
var pedidosClientes = [];
var indiceColumna;

//Ciclo iterativo para guardar los datos en la matriz
for (var indiceFila = 0; indiceFila < 3; indiceFila++)
    {
        pedidosClientes[indiceFila] = [];
        indiceColumna = 0;
        //pedidosClientes[indiceFila][indiceColumna] = prompt ("Por favor ingrese el nombre del Cliente");
        pedidosClientes[indiceFila][indiceColumna] = prompt (`Por favor ingrese el nombre del Cliente No. ${indiceFila+1}`);
        indiceColumna++;
        //pedidosClientes[indiceFila][indiceColumna] = prompt ("Por favor ingrese el Menú del Cliente");
        pedidosClientes[indiceFila][indiceColumna] = prompt (`Por favor ingrese el Menú No. ${indiceColumna} del Cliente ${pedidosClientes[indiceFila][0]}`);
        indiceColumna++;
        //pedidosClientes[indiceFila][indiceColumna] = prompt ("Por favor ingrese el Menú del Cliente");
        pedidosClientes[indiceFila][indiceColumna] = prompt (`Por favor ingrese el Menú No. ${indiceColumna} del Cliente ${pedidosClientes[indiceFila][0]}`);
    }

console.log("***   Datos en una misma línea   ***");
console.log("Los datos de la Matriz denominada PEDIDOSCLIENTES son: [", pedidosClientes, "]", "<br/>",);

document.write("<br/>","***   Datos en una misma línea   ***")
document.write("<br/>","Los datos de la Matriz denominada PEDIDOSCLIENTES son: [", pedidosClientes, "]",
                        "<br/>",
)

console.log("***   Listado de Datos por fila   ***");
document.write("<br/>","***   Listado de Datos por fila   ***")

for (indiceFila = 0; indiceFila < 3; indiceFila++)
    {
        console.log(indiceFila+1, ") [",pedidosClientes[indiceFila],"]");
        document.write("<br/>", indiceFila+1, ") [",pedidosClientes[indiceFila],"]", "<br/>");
    }

/*
Matriz pedidosClientes:
                                    3 Columnas

                 0                         1                          2     
     F  C                        F  C
0   [0][0]      Ana             [0][1]   Batido           [0][2]   Granizado
1   [1][0]      Pedro           [1][1]   Helado           [1][2]   Granizado                     3 Filas
2   [2][0]      José            [2][1]  Ensalada          [2][2]  Hamburguesa

*/

//Declarar o establecer una variable a utilizar como contador

var contador = 0;


//Validar los Menús para determinar cuáles se repiten
for (indiceFila = 0; indiceFila < pedidosClientes.length; indiceFila++)
    {
        for (indiceColumna = 1; indiceColumna < pedidosClientes.length; indiceColumna++)
            {
                if (pedidosClientes[indiceFila][indiceColumna] == pedidosClientes[indiceFila+1][indiceColumna])
                    {
                        contador++
                    }
            }
    }





console.log("Fin Ejercicio Heladeria haciendo uso de Matriz(ces)");
document.write("<br/>","Fin Ejercicio Heladeria haciendo uso de Matriz(ces)","<br/>");
