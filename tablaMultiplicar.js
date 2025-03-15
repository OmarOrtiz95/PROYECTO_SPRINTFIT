console.log("Sistema de Información que muestra la Tabla de Multiplicar de un número digitado por el Usuario");
document.write("<br/>","Sistema de Información que muestra la Tabla de Multiplicar de un número digitado por el Usuario");
var numero, incremento, multiplicacion;
numero = prompt("Bienvenido. Por favor digite el número del 1 al 10");  // Usuario digita el número 3
incremento = 1;
console.log ("Tabla de multiplicar del número ", numero);
document.write ("<br/>","Tabla de multiplicar del número ", numero);
if (numero >= 1 && numero <=10)
 { 
    while (incremento<=10)  // Mientras que 1  <= 10
        {
            multiplicacion = numero*incremento;  // multiplicación = 3*1 = 3
            console.log (numero," x ", incremento, " = ", multiplicacion);
            document.write ("<br/>",numero," x ", incremento, " = ", multiplicacion);
            incremento++;
        }
    console.log ("Fin. Gracias");
    document.write ("<br/>","Fin. Gracias");
 }
else
 {    
    console.log (numero," Número digitado es inválido. Debe digitar un número de 1 a 10. Intende nuevamente");
    document.write ("<br/>",numero, " Número digitado es inválido. Debe digitar un número de 1 a 10. Intende nuevamente");
 }

/*
Tabla de multiplicar del número 3:

3 x 1 = 3
...
3 x 10 = 30
Fin. Gracias
*/
