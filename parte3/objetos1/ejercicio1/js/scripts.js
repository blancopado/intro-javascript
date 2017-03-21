var coche = {
  color: "rojo",
  marca: "Seat",
  modelo: "Toledo",
  arrancado: false,

  arrancar: function() {
    console.log("Coche arrancado");
    // this apunta al objeto al cual pertenece el método -> coche
    // cambiamos el estado de la característica arrancado a true
    return this.arrancado = true;
  }
}

console.log(coche.color);
console.log(coche.marca);
console.log(coche.modelo);
console.log(coche.arrancado);
console.log('-------------')
console.log(coche.arrancar());
