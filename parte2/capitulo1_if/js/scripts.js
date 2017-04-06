var numero = Number(prompt("Introduce un número"));
/*

Si numero es mayor que 0
  -> Muestra por consola -> numero es mayor que 0
Si numero es menor que 0
  -> Muestra por consola -> numero es menor que 0
Si no
  -> Muestra por consola -> numero es igual a 0
*/
if (numero > 0) {
  console.log(numero + " es mayor que 0");
} else if (numero < 0) {
  console.log(numero + " es menor que 0");
} else {
  console.log(numero + " es igual a 0");
}
