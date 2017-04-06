// Objetos
var Personaje = {
  nombre: "Nombre",
  vida: 100,
  fuerza: 15,

  describir: function() {
    var descripcion = this.nombre + " tiene "
                    + this.vida + " puntos de vida y "
                    + this.fuerza + " de fuerza";
    return descripcion;
  }
}

var perso1 = Object.create(Personaje);
perso1.nombre = "Héroe";
perso1.vida = 80;
perso1.fuerza= 20;

var perso2 = Object.create(Personaje);
perso2.nombre = "Mago";
perso2.vida = 70;
perso2.fuerza = 12;

console.log(perso1.describir());
console.log(perso2.describir());
