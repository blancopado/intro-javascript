/*
 * Recibe un array de números y retorna el valor máximo
 *
 */

function hallarMaximo(array) {
  // Declaración de la variable que guarda el valor máximo
  var valorMaximo = 0;

  // Iteración sobre el array
  array.forEach(function(elemento) {
    // Si el elemento es mayor que el valor máximo actual -> actualiza el valor máximo
    if (elemento > valorMaximo) {
      valorMaximo = elemento;
    }
  });

  // Retorna el valor máximo
  return valorMaximo;
}

var miArray = [12, 25, 17, 4, 9, 32, 22, 19];
var valorMax = hallaMaximo(miArray);

console.log(valorMax); // Muestra 32
