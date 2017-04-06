// Objetos
var personaje = {
  nombre: "Héroe",
  vida: 100,
  fuerza: 15,

  describir: function() {
    var descripcion = this.nombre + " tiene "
                    + this.vida + " puntos de vida y "
                    + this.fuerza + " de fuerza";
    return descripcion;
  }
}

console.log(personaje.describir());
