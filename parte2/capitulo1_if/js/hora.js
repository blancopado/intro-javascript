// 3. Muestra la hora un segundo más tarde

var horas = Number(prompt("Introduce las horas:"));
var minutos = Number(prompt("Introduce los minutos:"));
var segundos = Number(prompt("Introduce los segundos:"));

// Verificamos todos los casos que pueden dar lugar a error
if ((horas >= 0) && (horas <= 23) && (minutos >= 0) && (minutos <= 59) &&
    (segundos >= 0) && (segundos <= 59)) {
    segundos++; // Se incrementan los segundos
    if (segundos === 60) {
        // Hay que pasar los segundos a 0 y sumar una hora más
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            // Hay que pasar los minutos a 0 y sumar una hora más
            minutos = 0;
            horas++;
            if (horas === 24) { // La siguiente hora es medianoche, empieza un nuevo día
                horas = 0;
            }
        }
    }
    console.log("En un segundo, serán las " + horas + " horas, " +
        minutos + " minutos y " + segundos + " segundos");
} else {
    console.log("Hora incorrecta");
}
