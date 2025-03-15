var numJugador, contador;
numJugador = prompt("Digite el número de Jugadores"); //Usuario digita el número 5
contador=numJugador; // contador = 5
while (contador>=1)  //Mientras que 5 >= 1
 {
    console.log("El número de jugador es = ", contador); // contador = 5
    document.write("<br/>", "El número de jugador es = ", contador);
    contador--; //contador=contador-1; // contador = 5 - 1 = 4
 }
 console.log("Número máximo de jugadores es = ", numJugador);
 document.write("<br/>", "Número máximo de jugadores es = ", numJugador);

 /* Visualización por consola y en el documento html

 El número de jugador es = 5
 El número de jugador es = 4
 El número de jugador es = 3
 El número de jugador es = 2
 El número de jugador es = 1
 El Número máximo de jugadores es = 5

 */