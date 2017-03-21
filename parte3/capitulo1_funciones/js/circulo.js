// Number convierte el número introducido de cadena a numérico
var radio = Number(prompt("Introduce el radio del círculo: "));

// Retorna el perímetro de un círculo
function perimetro(radio) {
    return 2 * radio * Math.PI;
}

// Retorna el área de un círculo
function area(radio) {
    return Math.pow(radio, 2) * Math.PI;
}

console.log("El valor del perímetro es: " + perimetro(radio));
console.log("El valor del área es: " + area(radio));
