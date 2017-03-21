var cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function(cantidad) {
    console.log("Has ingresado " + cantidad + " euros");
    return this.saldo += cantidad;
  },

  extraer: function(cantidad) {
    console.log("Has extraido " + cantidad + " euros");
    return this.saldo -= cantidad;
  },

  informar: function() {
    return "Nombre del titular: " + this.titular + "\nEl saldo actual de la cuenta es: " + this.saldo + " euros";
  }

}

console.log(cuenta.titular);
console.log(cuenta.saldo);
console.log('-------------')
console.log(cuenta.ingresar(80));
console.log(cuenta.extraer(20));

console.log(cuenta.informar());
