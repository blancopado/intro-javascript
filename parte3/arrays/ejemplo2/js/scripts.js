var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// for (var i = 0; i < peliculas.length; i++) {
//   console.log(peliculas[i]);
// }

// numeros.forEach(function (numero) {
//   if (numero % 2 === 0) {
//     console.log(numero);
//   }
// });

function sumaArray(array) {
  var suma = 0;
  array.forEach(function(numero) {
    suma += numero;
  });
  return suma;
}

console.log(sumaArray(numeros));
