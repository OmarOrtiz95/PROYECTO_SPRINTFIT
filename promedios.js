var curso1_a = 18;
var curso1_o = 12;
var curso2_a = 19;
var curso2_3_o = 13;
var curso3_a = 11;
var curso4_a = 8;
var curso4_o = 23;
var curso5_a = 14;
var curso5_o = 15;
var promedio_a, promedio_o, promedioTotal;
promedio_a = (curso1_a + curso2_a + curso3_a + curso4_a + curso5_a)/5; //(18+19+11+8+14)/5
promedio_o = (curso1_o+curso2_3_o+curso2_3_o+curso4_o+curso5_o)/5;     //(12+13+13+24+15)/5
//promedioTotal= (curso1_a+curso1_o+curso2_3_o+curso2_3_o+curso2_a+curso3_a+curso4_a+curso4_o+curso5_a+curso5_o)/10  //
promedioTotal = (promedio_a+promedio_o)/2;

console.log("El promedio de niñas es de:", promedio_a);
document.write("<br/>", "El promedio de niñas es de: ", promedio_a);    


console.log("El promedio de niños es de:", promedio_o);
document.write("<br/>", "El promedio de niños es de: ", promedio_o);    


console.log("El promedio total de alumnos es de:", promedioTotal);
document.write("<br/>", "El promedio total de alumnos es de: ", promedioTotal);    

if (curso1_a>curso1_o)
 {
    console.log("En el curso 501 hay más niñas que niños. Niñas:", curso1_a, "Niños:", curso1_o);
    document.write("<br/>", "En el curso 501 hay más niñas que niños. Niñas: ", curso1_a, "Niños: ", curso1_o);    

 }
if (curso4_o>curso4_a)
 {
    console.log("En el curso 504 hay más niños que niñas. Niños:", curso4_o, "Niños:", curso4_a);
    document.write("<br/>", "En el curso 504 hay más niños que niñas. Niños: ", curso4_o, "Niñas: ", curso4_a);    

 }
if (curso2_3_o>curso3_a)
 {

    console.log("En el curso 503 hay más niños que niñas. Niños:", curso2_3_o, "Niños:", curso3_a);
    document.write("<br/>", "En el curso 503 hay más niños que niñas. Niños: ", curso2_3_o, "Niñas: ", curso3_a);    

 }

