console.log("Sistema de Información para mostrar el factorial de un número");
document.write("<br/>","Sistema de Información para mostrar el factorial de un número","<br/>");
var numFactorial, factorialNum=1, x;

numFactorial = prompt("Por favor digite el número al que se desea conocer su factorial");
// Número ingresado--> 7 El factorial: 1 x 2 x 3 x 4 x 5 x 6 x7


for (x=1; x<=numFactorial;x++)  // x <= 7
    {
        factorialNum=factorialNum*x;  // --> Forma simplificada: factorialNum*=x;   
                                      //factorialNum = 1*1 = 1
        
        console.log(x, " x "); // 1 x 1 x 2 
        document.write(x, " x ");
        
    }

console.log("El Factorial del número ", numFactorial, " es: ", factorialNum);
document.write("<br/>","El Factorial del número ", numFactorial, " es: ", factorialNum,"<br/>");

console.log("Fin del Sistema de Información para mostrar el factorial de un número");
document.write("<br/>","Fin del Sistema de Información para mostrar el factorial de un número","<br/>");