// 1. Comparar dos números

var numero1 = Number(prompt("Introduce el primer número:"));
var numero2 = Number(prompt("Introduce el segundo número:"));

if (numero1 < numero2) {
    console.log(numero1 + " es más pequeño que " + numero2);
} else if (numero1 > numero2) {
    console.log(numero1 + " es más grande que " + numero2);
} else {
    console.log(numero1 + " y " + numero2 + " son iguales");
}
