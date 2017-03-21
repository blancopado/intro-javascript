var cadenaUsuario = prompt("Introduce una palabra");

function contarCaracteres(cadena) {
  return "la cadena " +  cadena +  " contiene " + cadena.length + " caracteres";
}

function candenaMayusculas(cadena) {
  return "la cadena en mayúsculas es: " + cadena.toUpperCase();
}

function candenaMinusculas(cadena) {
  return "la cadena en mayúsculas es: " + cadena.toLowerCase();
}

function contarVocales(cadena) {
  var numeroVocales = 0;
  var cadenaMinus = cadena.toLowerCase();
  for (var i=0; i < cadenaMinus.length; i++) {
    if (cadenaMinus[i] === "a" || cadenaMinus[i] === "e"
      || cadenaMinus[i] === "i" || cadenaMinus[i] === "o"
      || cadenaMinus[i] === "u") {
      numeroVocales += 1;
    }
  }
  return "La palabra " + cadena + " contiene " + numeroVocales + " vocales";
}

function invertirCadena(cadena) {
  var palabraInvertida = '';
  for (var i=cadena.length-1; i>=0; i--) {
    palabraInvertida += cadena[i];
  }
  return palabraInvertida;
}

function palindromo(cadena) {
  return cadena.toLowerCase() === invertirCadena(cadena).toLowerCase();
}

console.log(contarCaracteres(cadenaUsuario));
console.log(candenaMayusculas(cadenaUsuario));
console.log(candenaMinusculas(cadenaUsuario));
console.log(contarVocales(cadenaUsuario));
console.log(invertirCadena(cadenaUsuario));
console.log(palindromo(cadenaUsuario));
