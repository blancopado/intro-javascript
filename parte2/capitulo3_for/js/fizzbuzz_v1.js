/*
  4. FizzBuzz versión1
  Escribe un programa que muestre los números del 1 al 50, con las siguientes excepciones:
    - Para los múltiplos de 3 muestra la palabra "Fizz" en lugar del número.
    - Para los múltiplos de 5 muestra la palabra "Buzz" en lugar del número.
    - Para los múltiplos de 3 y 5 muestra la palabra "FizzBuzz" en lugar del número.
*/

for (var i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
     console.log("FizzBuzz");
   } else if (i % 3 == 0) {
     console.log("Fizz");
   } else if (i % 5 == 0) {
     console.log("Buzz");
   } else {
     console.log(i);
   }
 }

/*
  Ten en cuenta que la condición (i % 3 == 0 && i % 5 == 0) tiene que ir antes de (i % 3 == 0) y (i % 5 == 0)
  ya que  éstas tambien cumplen la condición y entonces se ejecutaría el bloque de código con Fizz o Buzz en lugar
  de FizzBuzz.

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
