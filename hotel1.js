console.log("DATOS DE SU RESERVA: ");
document.write("<br/>", "DATOS DE SU RESERVA:");


const precioDiaBaja = 413000, precioDiaAlta = 549000; 
var temporada = ['Alta', 'Baja'];
 var numClientes,
  numDias,
  edadClientes,
  valorParcial,
  valorDescuento,
  valorTotal;
var contador = 1, contador2=1, contador3=1, contador4=1, contador5=1;
  numAdultoMayor = 0;
(numMenorEdad = 0), (numAdultos = 0); // Declaración de contadores

while (contador5==1)
 {


temporada = prompt("Por favor digite el tipo de temporada", "Baja / Alta");

  switch (temporada) {
    case 'Baja':

      while(contador2==1)
      {
        numClientes = prompt("Por favor digite el número de clientes a hospedarse");
        if(numClientes <= 0) {
        alert('[ERROR] Numero de clientes no válido, por favor intente nuevamente');
          } 
        else 
          {
            contador2++;
          }
      }
  
      while (contador <= numClientes) {
        edadClientes = prompt("Por favor digite la edad del cliente");

        if (edadClientes > 60) {
          numAdultoMayor++;
          console.log("Número de adultos mayores: ", numAdultoMayor);
          document.write("<br/>","Número de adultos mayores: ", numAdultoMayor);
        } else if (edadClientes >= 18 && edadClientes <= 60) {
          numAdultos++; 
          console.log("Número de adultos: ", numAdultos);
          document.write("<br/>", "Número de adultos: ", numAdultos);
        } else if (edadClientes >= 0 && edadClientes < 18) {
          numMenorEdad++;
          console.log("Número de menores de edad: ", numMenorEdad);
          document.write("<br/>", "Número de menores de edad: ", numMenorEdad);
        } else {
          alert('[ERROR] Edad no válida')
          contador--;
        }
        contador++;
      }
      
      while(contador3==1)
      {
        numDias = prompt("Por favor digite el número de días a reservar");
        if(numDias <= 0) {
          alert('[ERROR] Número de días no válido')
        }
        else
        {
          contador3++;
        }   
      }      

      if (numDias > 5 && numDias <= 9) {
        valorDescuento =
          precioDiaBaja * numDias * numAdultoMayor * 0.4 + 
          precioDiaBaja * numDias * numAdultos * 0.05 + 
          precioDiaBaja * numDias * numMenorEdad * 0.5; 
      } else if (numDias > 9) {
        valorDescuento =
          precioDiaBaja * numDias * numAdultoMayor * 0.2 +
          precioDiaBaja * numDias * numAdultos * 0.2 +
          precioDiaBaja * numDias * numMenorEdad * 0.5;
      } else if (numDias > 0 && numDias <= 5) {
        valorDescuento = precioDiaBaja * numDias * numMenorEdad * 0.5;
      }        
      
      valorParcial = precioDiaBaja * numDias * numClientes; 
      valorTotal = valorParcial - valorDescuento;

      console.log("Tipo de Temporada: ", temporada, "\n", "Número de Clientes: ", numClientes, "\n", "Numero de días: ", numDias);
      document.write("<br/>", "Tipo de Temporada: ", temporada, "<br/>", "Número de Clientes: ", numClientes, "<br/>", "Numero de días: ", numDias);
      contador5++;
      break;

    case 'Alta':
      
    while(contador2==1)
    {
      numClientes = prompt("Por favor digite el número de clientes a hospedarse");
      if(numClientes <= 0) {
      alert('[ERROR] Numero de clientes no válido, por favor intente nuevamente');      
        } 
      else 
        {
          contador2++;
        }
    }
      while (contador <= numClientes) {
        edadClientes = prompt("Por favor digite la edad del cliente");

        if (edadClientes > 60) {
          numAdultoMayor++;
          console.log("Número de adultos mayores: ", numAdultoMayor);
          document.write("<br/>","Número de adultos mayores: ", numAdultoMayor);
        } else if (edadClientes >= 18 && edadClientes <= 60) {
          numAdultos++; 
          console.log("Número de adultos: ", numAdultos);
          document.write("<br/>", "Número de adultos: ", numAdultos);
        } else if (edadClientes >= 0 && edadClientes < 18) {
          numMenorEdad++;
          console.log("Número de menores de edad: ", numMenorEdad);
          document.write("<br/>", "Número de menores de edad: ", numMenorEdad);
        } else {
          alert('[ERROR] Edad no válida')
          contador--;
        }
        contador++;
      }

      while(contador3==1)
      {
        numDias = prompt("Por favor digite el número de días a reservar");
        if(numDias <= 0) {
          alert('[ERROR] Número de días no válido')
        }
        else
        {
          contador3++;
        }   
      }      
     
      if (numDias > 5 && numDias <= 9) {
        valorDescuento =
          precioDiaAlta * numDias * numAdultoMayor * 0.2 +  
          precioDiaAlta * numDias * numMenorEdad * 0.25; 
      } else if (numDias > 9) {
        valorDescuento =
          precioDiaAlta * numDias * numAdultos * 0.1 +
          precioDiaAlta * numDias * numMenorEdad * 0.25;
      } else if (numDias > 0 && numDias <= 5) {
        valorDescuento = precioDiaAlta * numDias * numMenorEdad * 0.25;
      } 
      
      valorParcial = precioDiaAlta * numDias * numClientes; 
      valorTotal = valorParcial - valorDescuento;

      console.log("Tipo de Temporada: ", temporada, "\n", "Número de Clientes: ", numClientes, "\n", "Numero de días: ", numDias);
      document.write("<br/>", "Tipo de Temporada: ", temporada, "<br/>", "Número de Clientes: ", numClientes, "<br/>", "Numero de días: ", numDias);
      contador5++;
      break;

  default: 

  alert('[ERROR] Temporada no válida, por favor intente nuevamente');


    }
  }  
    var confirmacion = window.confirm ('Desea confirmar su reserva?')
     if (confirmacion == true) {
      console.log("Valor Parcial: $", valorParcial);
      console.log("Valor Descuento: $", valorDescuento);
      console.log("Valor Total a pagar: $", valorTotal);
      document.write("<br/>", "Valor Parcial: $", valorParcial);
      document.write("<br/>", "Valor Descuento: $", valorDescuento);
      document.write("<br/>", "Valor Total a pagar: $", valorTotal);
     }
     else {
      console.log('RESERVA NO CONFIRMADA... Gracias por utilizar el servicio');
      document.write("<br/>", "RESERVA NO CONFIRMADA... Gracias por utilizar el servicio")
     }