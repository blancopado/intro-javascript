// 3. Muestra la tabla de multiplicar del número elegido

var numero = 0; // Valor inicial que permite entrar en el bucle

while (numero < 2 || numero > 10) {
  numero = Number(prompt("Elige una tabla de multiplicar entre 2 y 10"));
}

var i = 1; // Variable contador. Usamos el incremento para obtener el valor de cada vuelta
while (i <= 10) {
  console.log(numero + " * " + i + " = " + numero * i);
  i++;
}
