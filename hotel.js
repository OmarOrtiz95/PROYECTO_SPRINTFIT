var precioDiabaja = 413000, precioDiaAlta = 549000, descuento1 = 0.40;
var temporada, numCliente, numDias = 4, edadClientes = 61, valorDescuento;
if (numDias>5 && edadClientes>60 || numDias==5 && edadClientes != 0)

{
    valorDescuento = (precioDiaAlta*numDias)*descuento1;
    console.log("Tiene derecho a descuento");
    document.write ("<br/>", "Tiene derecho a descuento");

}
//else 
 //{
    console.log("No tiene derecho a descuento");
    document.write ("<br/>", "No tiene derecho a descuento");
 //}

 /* (baja o alta)
    usuario digite numero de clientes
    while (cont 1 hasta numero de clientes)
     usuario digite edades
    if (dias > 5)
        usuario digite edades
        if (edad > 60)
            contadorpersonas1= contadorpersonas1+1 --> 1
        else if (edad > 18)
            contadorpersonas2 = contadorpersonas2+1 --> 1
*/