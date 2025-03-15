console.log("Comandos y/o métodos para trabajar con Arreglos");
document.write("<br/>","Comandos y/o métodos para trabajar con Arreglos","<br/>");

var i;

//Formas o métodos para crear arreglos sin datos -->El tamaño se determina a medida que se ejecuta el códio
var array1 = new Array();
var array2 = [];
var array3 = Array.of();

console.log("Array1: (", array1, "), Array2: (", array2, "), Array3: (", array3, ")");
document.write("<br/>","Array1: (", array1, "), Array2: (", array2, "), Array3: (", array3, ")","<br/>");

//Método para crear un arreglo con un tamaño específico
var array4 = new Array(5);

console.log ("Array4: (", array4, ")")
document.write("<br/>", "Array4: (",array4, ")");

for (i=0; i<3; i++)
    {
        array1 [i] = prompt("Digite nombre Aprendiz");     
        array2[i] = prompt("Digite nota del Aprendiz");
    }
console.log("Nombres Aprendices ingresados por el Usuario: ", array1, ",");
console.log("Notas de Aprendices ingresados por el Usuario: ", array2, ",");

document.write("<br/>","Nombres Aprendices ingresados por el Usuario:: ", array1, ",","<br/>");
document.write("<br/>","NoNotas de Aprendices ingresados por el Usuario: ", array2, ",","<br/>");

//Para adicionar un dato al final de los arreglos array1 y array2 --> nombre_arreglo.push
array1.push("Ángel");
array2.push("5");

console.log("Aprendices con un registro nuevo al final (push): ", array1, ",");
console.log("Notas Aprendices con un registro nuevo al final (push): ", array2, ",");

document.write("<br/>","Aprendices con un registro nuevo al final (push): ", array1, ",","<br/>");
document.write("<br/>","Notas Aprendices con un registro nuevo al final (push): ", array2, ",","<br/>");

//Para adicionar un dato al inicio de los arreglos array1 y array2 --> nombre_arreglo.unshift
array1.unshift("Cristina");
array2.unshift("4");

console.log("Aprendices con un registro nuevo al inicio (unshift): ", array1, ",");
console.log("Notas Aprendices con un registro nuevo al inicio (unshift): ", array2, ",");

document.write("<br/>","Aprendices con un registro nuevo al inicio (unshift): ", array1, ",","<br/>");
document.write("<br/>","Notas Aprendices con un registro nuevo al inicio (unshift) ", array2, ",","<br/>");

//Para crear una copia de un arreglo a otro arreglo diferente --> .slice()
var copiaArray1 = array1.slice();
var copiaArray2 = array2.slice();

//Para eliminar el último dato de los arreglos array1 y array2 --> nombre_arreglo.pop()
array1.pop();
array2.pop();

console.log("Aprendices con un registro eliminado al final (pop): ", array1, ",");
console.log("Notas Aprendices con un registro eliminado al final (pop): ", array2, ",");

document.write("<br/>","Aprendices con un registro eliminado al final (pop): ", array1, ",","<br/>");
document.write("<br/>","Notas Aprendices con un registro eliminado al final (pop): ", array2, ",","<br/>");

//Para elminar el primer dagto de los arreglos array1 y array2 --> nombre_arreglo.shift()
array1.shift();
array2.shift();

console.log("Aprendices con un registro eliminado al inicio (shift): ", array1, ",");
console.log("Notas Aprendices con un registro eliminado al inicio (shift): ", array2, ",");
console.log("Copia del Arreglo array1: ", copiaArray1, ",");
console.log("Copia del Arreglo array2: ", copiaArray2, ",");

document.write("<br/>","Aprendices con un registro eliminado al inicio (shift): ", array1, ",","<br/>");
document.write("<br/>","Notas Aprendices con un registro eliminado al inicio (shift): ", array2, ",","<br/>");
document.write("<br/>","Copia del Arreglo array1: ", copiaArray1, ",","<br/>");
document.write("<br/>","Copia del Arreglo array2: ", copiaArray2, ",","<br/>");





console.log("Fin Comandos y/o métodos para trabajar con Arreglos");
document.write("<br/>","Fin Comandos y/o métodos para trabajar con Arreglos","<br/>");



