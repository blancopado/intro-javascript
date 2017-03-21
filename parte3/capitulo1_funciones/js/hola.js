var nombre = prompt("Introduce tu nombre: ");
var apellido = prompt("Introduce tu apellido: ");

// Retorna un mensaje de bienvenida
function decirHola(nombre, apellido) {
  var mensaje = "Hola, " + nombre + " " + apellido;
  return mensaje;
}

// llamada a la función decirHola() con los argumentos nombre y apellido
console.log(decirHola(nombre, apellido));
