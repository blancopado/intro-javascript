// 2. Muestra el número de días del mes (version1)

var mes = Number(prompt("Introduce el número del mes:"));

  /* Solución 1
  Date cuenta de que en ciertos casos no hemos utilizado el break. Así, pasamos
  de un caso al siguiente para todos los meses que tengan los mismos días, hasta
  llegar al caso que muestre el mensaje apropiado y salga del switch.
  Con esto, evitamos la duplicación de código de console.log().
  */

switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
      console.log("Este mes tiene 31 días.");
      break;
  case 4:
  case 6:
  case 9:
  case 11:
      console.log("Este mes tiene 30 días.");
      break;
  case 2:
      console.log("Este mes tiene 28 días");
      break;
  default:
      console.log("No has elegido un mes del 1 al 12");
}
