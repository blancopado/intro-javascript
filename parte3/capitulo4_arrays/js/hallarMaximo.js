var arr = [5, 2, 19, 14, 25, 11, 2];

function hallarMaximo(array) {
  var max = 0;
  array.forEach(function(elemento) {
    if (elemento > max) {
      max = elemento;
    }
  });
  return max;
}

console.log(hallarMaximo(arr));
