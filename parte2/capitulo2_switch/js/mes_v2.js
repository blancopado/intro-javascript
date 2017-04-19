// 2. Muestra el número de días del mes (version2)

var mes = Number(prompt("Introduce el número del mes:"));

  /* Solución que combina if y switch
  El if inicial permite eliminar todos valores que no sean números entre 1 y 12.
  Después, la variable por defecto "numeroDias" permite ahorrarnos todos los
  casos de meses con 31 días.
   */

if ((mes >= 1) && (mes <= 12)) {
  var numeroDias = 31;
  switch (mes) {
    case 4:
    case 6:
    case 9:
    case 11:
        numeroDias = 30; // si se verifica uno de estos casos, actualizamos la variable
        break;
    case 2:
        numeroDias = 28; // si se verifica este caso, actualizamos la variable
        break;
    }
    console.log("Este mes tiene " + numeroDias + " días.");
} else {
    console.log("No has elegido un mes del 1 al 12");
}
