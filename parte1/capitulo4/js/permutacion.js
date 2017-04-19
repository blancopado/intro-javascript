
// 4. Intercambia el valor de dos variables

var num1 = 5;
var num2 = 3;

console.log("num1 = " + num1); // Muestra 5
console.log("num2 = " + num2); // Muestra 3

// Solución utilizando una variable temporal
var temp = num1;
num1 = num2;
num2 = temp;

console.log("Permutamos los valores de las variables:");
console.log("num1 = " + num1); // Muestra 3
console.log("num2 = " + num2); // Muestra 5
