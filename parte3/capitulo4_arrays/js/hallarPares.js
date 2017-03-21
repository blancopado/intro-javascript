var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function hallarPares(array) {
  var arrayPares = [];
  // bucle que ejecuta la función pasada como parámetro
  // por cada elemento del array
  array.forEach(function(elemento) {
    // si el elemento del array es par, se añade a arrayPares
    if (elemento % 2 === 0) {
      arrayPares.push(elemento);
    }
  });
  return arrayPares;
}

function hallarPares2(array) {
  var arrayPares = [];
  // bucle for que continúa mientras la variable contador 'i'
  // sea menos que la longitud el array
  for (var i=0; i<array.length; i++) {
    // si el elemento del array es par, se añade a arrayPares
    if (array[i] % 2 === 0) {
      arrayPares.push(array[i]);
    }
  }
  return arrayPares;
}

console.log(hallarPares(arr)); // Muestra [2, 4, 6, 8]
console.log(hallarPares2(arr)); // Muestra [2, 4, 6, 8]
