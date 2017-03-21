// Retorna el menor de los dos numeros pasados
function minimo(num1, num2) {
  if (num1 < num2) {
      return num1;
  } else {
      return num2;
  }
}

console.log(minimo(3, 5));// Muestra 3
console.log(minimo(11, 8)); // Muestra 8
console.log(minimo(2,2)); // Muestra 2
