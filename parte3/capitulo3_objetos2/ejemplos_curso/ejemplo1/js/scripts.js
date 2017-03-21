var objeto1 = {
    nombre: "nombre del objeto 1"
};

// Creamos objeto2 a partir del prototipo objeto1
var objeto2 = Object.create(objeto1);
// asignamos una propiedad nombre al objeto2
objeto2.nombre = "Objeto2";

console.log(objeto2.nombre);
console.log(objeto2.vida);

console.log(objeto2);
