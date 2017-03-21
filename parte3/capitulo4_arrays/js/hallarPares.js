var arr = [1,2,3,4,5,6,7,8];

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

console.log(hallarPares(arr)); // Muestra [2, 4, 6, 8]
