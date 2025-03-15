// Ejemplo utilizando el comando prompt() con la condicional if
var nombreAprendiz, apellidoAprendiz, edadA;
nombreAprendiz = prompt("Digite el nombre del Aprendiz", "_");
apellidoAprendiz = prompt("Digite el apellido del Aprendiz");
edadA = prompt("Digite la edad del Aprendiz", "#");
console.log("Nombre y Apellido del Aprendiz es: ", nombreAprendiz+ " ", apellidoAprendiz);
document.write ("<br/>", "Nombre y Apellido del Aprendiz es: ", nombreAprendiz+ " ",apellidoAprendiz);
if (edadA>=18)
 {
    console.log("El Aprendiz es mayor de edad, porque tiene: ", edadA+ " años");
    document.write ("<br/>", "El Aprendiz es mayor de edad, porque tiene: ", edadA+ " años");
 }
 else
  {    
    console.log("El Aprendiz es menor de edad, porque tiene: ", edadA+ " años");
    document.write ("<br/>", "El Aprendiz es menor de edad, porque tiene: ", edadA+ " años");
  }































/* let nombre1,apellido1, edadAprendiz;

nombre1 = prompt("Digite el Nombre del Aprendiz","_");
apellido1 = prompt("Digite el Apellido del Aprendiz", "_");

console.log("El Nombre del Aprendiz es:",nombre1);
console.log("El Apellido del Aprendiz es:",apellido1);

document.write("<br/>","El Nombre del Aprendiz es: ", nombre1);
document.write("<br/>","El Apellido del Aprendiz es: ", apellido1);

edadAprendiz = prompt("Digite la Edad","_");

if (edadAprendiz>=18){

console.log("El Aprendiz:",nombre1+" " + apellido1+ " Es Mayor de Edad, porque la Edad es de: "+edadAprendiz+" Años, que es >= 18 Años");
    
document.write("<br/>","El Aprendiz:",nombre1+" " + apellido1+ " Es Mayor de Edad, porque la Edad es de: "+edadAprendiz+" Años, que es >= 18 Años");    
}

else{

console.log("El Aprendiz:",nombre1+" " + apellido1+ " Es Menor de Edad, porque la Edad es de: "+edadAprendiz+" Años, que es < 18 Años");
    
document.write("<br/>","El Aprendiz:",nombre1+" " + apellido1+ " Es Menor de Edad, porque la Edad es de: "+edadAprendiz+" Años, que es < 18 Años");    

} */