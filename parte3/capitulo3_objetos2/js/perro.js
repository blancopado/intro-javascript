var Perro = {
    // Inicia el perro
    init: function (nombre, raza, talla) {
      this.nombre = nombre;
      this.raza = raza;
      this.talla = talla;
    },

    ladrar: function() {
      var ladrido = "¡guau!";
      if (this.talla < 25) {
          ladrido = "¡buf buf!";
      } else if (this.talla > 60) {
          ladrido = "¡GRRRRRRRRRR!";
      }
      return ladrido;
    }

}

var peluca = Object.create(Perro);
peluca.init("Peluca", "Pastor Aleman", 40);
console.log(peluca.nombre + " es un " + peluca.raza + " y mide " + peluca.talla + " cm");
console.log("¡Mira un gato! " + peluca.nombre + " ladra: " + peluca.ladrar());

var pitu = Object.create(Perro);
pitu.init("Pitu", "Salchicha", 19);
console.log(pitu.nombre + " es un " + pitu.raza + " y mide " + pitu.talla + " cm");
console.log("¡Mira un gato! " + pitu.nombre + " ladra: " + pitu.ladrar());
