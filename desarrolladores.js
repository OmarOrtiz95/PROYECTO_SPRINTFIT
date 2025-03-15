console.log("Sistema de Información para conformar un Equipo de 8 Desarrolladores de Software");
document.write("<br/>","Sistema de Información para conformar un Equipo de 8 Desarrolladores de Software",
                "<br/>");

//El número de máximo de participantes: 10 --> Nombres, Edad, Domicilio y Puntaje (Ingresa el Usuario)
//El número de personas a seleccionar: 8 --> Seleccionar el Sistema o valida el Sistema
//1) Puntaje --> mayor o igual a 85
//2) Puntaje --> igual a 84. Edad--> Mayor de edad. Domicilio --> Garzón

//Establecer variables
var nombresS = new Array(); 
var nombresP = new Array(); 
var edadP = new Array();
var domicilioP = new Array();
var puntajeP = new Array();
var indiceP, xpuntajeP, contadorS = 0;

//Ingresar datos por el Usuario
for(indiceP=0; indiceP<3; indiceP++) // el número 3 se debe cambiar por el número 10
    {
        nombresP[indiceP] = prompt("Digite los nombres del participante");
        edadP[indiceP] = prompt("Digite la edad del participante");
        domicilioP[indiceP] = prompt("Digite el domicilio del participante");
        xpuntajeP=0;
        while (xpuntajeP == 0) //validar que el puntaje ingresado fuera de 0-1 hasta 100
            {
                puntajeP[indiceP] = prompt("Digite el puntaje del participante"); //Validar 0 a 100
                if (puntajeP[indiceP]>=0 && puntajeP[indiceP]<=100)
                    {
                        xpuntajeP++; 
                    }
                else
                 {
                    alert('[Error] El puntaje ingresado no es un dato válido. Por favor, ingrese nuevamente el puntaje de 0 a 100');
                 }
            }
        
    }

//Mostrar datos ingresados por el Usuario
console.log("Mostrar datos ingresados por el Usuario de los Participantes");
console.log("Nombres: ", nombresP);
console.log("Edades: ", edadP);
console.log("Domicilios: ", domicilioP);
console.log("Puntajes: ", puntajeP);

document.write("<br/>","Mostrar datos ingresados por el Usuario de los Participantes", "<br/>");
document.write("<br/>","Nombres: ", nombresP, "<br/>");
document.write("<br/>","Edades: ", edadP, "<br/>");
document.write("<br/>","Domicilios: ", domicilioP, "<br/>");
document.write("<br/>","Puntajes: ", puntajeP, "<br/>");

var indiceS=0;
while (contadorS <= 2) // el número es temporal para las pruebas. Se debe cambiar por el número 8
    {
        for (indiceP = 0; indiceP < 3; indiceP++) //Pedro:     85        / Pepito: 70 / Ana: 83: Garzón
            {                                     //nombreP    puntajeP [85, 70, 83]
                if (puntajeP[indiceP] >= 85) //85>=85
                    {
                        nombresS[indiceS] = nombresP[indiceP]; // nombresS[Pedro]
                        contadorS++; //1 --> 2 persona selecciona, porque cumple con el primer criterio
                        indiceS++; //1 --> Índice para el arreglo nombresS
                    }
            }
        
        for (indiceP = 0; indiceP < 3; indiceP++) //Pedro:     85        / Pepito: 70 / Ana: 83: Garzón
            {   
                if (puntajeP[indiceP] == 84 && edadP [indiceP] >=18 && domicilioP[indiceP] == "Garzón")
                    {
                        nombresS[indiceS] = nombresP[indiceP]; // nombres[Pedro]
                        contadorS++; //3
                        indiceS++; //2
                    }
            }
        break;
    }

//console.log("Arreglo nombresS ordenado de forma ascendente: ", nombresS.sort()); 
//document.write("<br/>","Arreglo nombresS ordenado de forma ascendente: ", nombresS.sort());

//console.log("Arreglo puntajeP ordenado de forma descendente: ", puntajeP.sort((a,b) => (b-a)));
//document.write("<br/>","Arreglo puntajeP ordenado de forma descendente: ", puntajeP.sort((a,b) => (b-a)));

//arreglo puntajeP [89,87, 85]

if (contadorS >= 2 )
 {
    console.log(contadorS, " personas cumplieron con los criterios de selección para hacer parte del Equipo de 2 Desarrolladores de Software");
    console.log("Serán seleccionados para hacer parte del Equipo de 2 Desarrolladores de Software: ");

    document.write("<br/>",contadorS, " Personas cumplieron con los criterios de selección para hacer parte del Equipo de 2 Desarrolladores de Software",
                    "<br/>");
    document.write("<br/>","Serán seleccionados para hacer parte del Equipo de 2 Desarrolladores de Software: ","<br/>");

    for (indiceS = 0; indiceS <2; indiceS++)
        {
            console.log(indiceS+1, ". ", nombresS[indiceS]);
            document.write("<br/>",indiceS+1, ". ", nombresS[indiceS], "<br/>");
        }    
 }
else
 {
    console.log(contadorS, " persona(s) cumplió(eron) con los criterios de selección para hacer parte del Equipo de 2 Desarrolladores de Software");
    console.log("NO se obtuvo el número mínimo para conformar el Equipo de 2 Desarrolladores de Software: ");

    document.write("<br/>",contadorS, " persona(s) cumplió(eron) con los criterios de selección para hacer parte del Equipo de 2 Desarrolladores de Software",
                "<br/>");
    document.write("<br/>","NO se obtuvo el número mínimo para conformar el Equipo de 2 Desarrolladores de Software: ", "<br/>");
 }

// Pedro, 85 --> Seleccionador [Pedro, Pepito, ]

// nombresP[Pedro, ---]
//EdadP[18]

console.log("Fin del Sistema de Información para conformar un Equipo de 8 Desarrolladores de Software");
document.write("<br/>","Fin del Sistema de Información para conformar un Equipo de 8 Desarrolladores de Software",
                "<br/>");