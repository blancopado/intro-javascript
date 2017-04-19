/*
  4. FizzBuzz versión2 -> solucion con concatenacion
  Escribe un programa que muestre los números del 1 al 50, con las siguientes excepciones:
    - Para los múltiplos de 3 muestra la palabra "Fizz" en lugar del número.
    - Para los múltiplos de 5 muestra la palabra "Buzz" en lugar del número.
    - Para los múltiplos de 3 y 5 muestra la palabra "FizzBuzz" en lugar del número.
*/

for (var i = 1; i <= 50; i++) {
  var mensaje = ""; // Mensaje a mostrar, inicialmente vacío
  if (i % 3 === 0) {
      // Número divisible por 3: añadimos "Fizz" al mensaje
      mensaje += 'Fizz';
  }
  if (i % 5 === 0) {
      // Número divisible por 5: añadimos "Buzz" al mensaje
      mensaje += 'Buzz';
  }
  if (mensaje === "") {
      // Si el mensaje está vacío, el número no es divisible ni por 3, ni por 5:
      // el mensaje mostrado será el número
      mensaje = i;
  }
  console.log(mensaje);
}

/*

  Salida:
  1
  2
  3 Fizz
  4
  5 Buzz
  6 Fizz
  7
  8
  9 Fizz
  10 Buzz
  11
  12 Fizz
  13
  14
  15 FizzBuzz
  16
  17
  18 Fizz
  19
  20 Buzz

  .
  .
  .
  ... así hasta 50
*/
