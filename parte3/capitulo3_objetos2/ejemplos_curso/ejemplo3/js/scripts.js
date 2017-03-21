var Personaje = {
    // Inicia el personaje
    initPersonaje: function (nombre, vida, fuerza) {
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
    },

    // Ataca a un personaje objetivo
    atacar: function (objetivo) {
        if (this.vida > 0) {
            var golpe = this.fuerza;
            console.log(this.nombre + " ataca a "
                        + objetivo.nombre + " produciéndole un daño de "
                        + golpe + " puntos");
            objetivo.vida = objetivo.vida - golpe;
            if (objetivo.vida > 0) {
                console.log(objetivo.nombre + " tiene todavía "
                            + objetivo.vida + " puntos de vida");
            } else {
                objetivo.vida = 0;
                console.log(objetivo.nombre + " ha muerto");
            }
        } else {
            console.log(this.nombre + " no puede atacar: está muerto...");
        }
    }
};


var Jugador = Object.create(Personaje);
// Inicia el personaje
Jugador.initJugador = function (nombre, vida, fuerza) {
    this.initPersonaje(nombre, vida, fuerza);
    this.xp = 0;
};
// Retorna la descripción del jugador
Jugador.describir = function () {
    var descripcion = this.nombre + " tiene "
                    + this.vida + " puntos de vida, "
                    + this.fuerza + " de fuerza y "
                    + this.xp + " puntos de experiencia";
    return descripcion;
};
// Combate a un adversario
Jugador.combatir = function (adversario) {
    this.atacar(adversario);
    if (adversario.vida === 0) {
        console.log(this.nombre + " ha matado "
                    + adversario.nombre + " y gana "
                    + adversario.cantidadXp + " puntos de experiencia");
        this.xp += adversario.cantidadXp;
    }
};

var Enemigo = Object.create(Personaje);
// Metodo que inicia el enemigo
Enemigo.initEnemigo = function (nombre, vida, fuerza, raza, cantidadXp) {
    this.initPersonaje(nombre, vida, fuerza);
    this.raza = raza;
    this.cantidadXp = cantidadXp;
};

var jugador1 = Object.create(Jugador);
jugador1.initJugador("Diego", 150, 25);

var jugador2 = Object.create(Jugador);
jugador2.initJugador("Coco", 130, 35);


console.log(jugador1.describir());
console.log("----+++++----");
console.log(jugador2.describir());
console.log("----+++++----");

var monstruo = Object.create(Enemigo);
monstruo.initEnemigo("ZogZog", 40, 20, "orco", 10);

console.log(monstruo.nombre + ", un " + monstruo.raza + ", aparece de repente ");

monstruo.atacar(jugador1);
monstruo.atacar(jugador2);

jugador1.combatir(monstruo);
jugador2.combatir(monstruo);

console.log(jugador1.describir());
console.log(jugador2.describir());
