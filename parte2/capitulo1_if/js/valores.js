// 2. Deduce los valores de las variables

var num1 = Number(prompt("Introduce el primer número:"));
var num2 = Number(prompt("Introduce el segundo número: :"));
var num3 = Number(prompt("Introduce el tercer número:"));

if (num1 > num2) {
    num1 = num3 * 2;
} else {
    num1++;
    if (num2 > num3) {
        num1 = num1 + num3 * 3;
    } else {
        num1 = 0;
        num3 = num3 * 2 + num2;
    }
}

console.log("num1 = " + num1);
console.log("num2 = " + num2);
console.log("num3 = " + num3);
