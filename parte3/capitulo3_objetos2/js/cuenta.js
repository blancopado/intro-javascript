var CuentaBancaria = {
    // Iniciar la cuenta bancaria
    iniciarCB: function (titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    },
    // Abonar a la cuenta un importe
    abonar: function (importe) {
        this.saldo = this.saldo + importe;
    },
    // Débite le compte d'un certain importe
    extraer: function (importe) {
        this.saldo = this.saldo - importe;
    },
    // Renvoie la descripcion du compte
    describir: function () {
        var descripcion = "titular : " + this.titular +
            ", saldo : " + this.saldo + " euros";
        return descripcion;
    }
};

var CompteEpargne = Object.create(CuentaBancaria);
// Initialise le compte épargne
CompteEpargne.initCE = function (titular, saldo, tauxInteret) {
    this.iniciarCB(titular, saldo);
    this.tauxInteret = tauxInteret;
};
// Calcule et ajoute les intérêts au saldo cu compte
CompteEpargne.ajouterInterets = function () {
    var interets = this.saldo * this.tauxInteret;
    this.saldo += interets;
};

var compte1 = Object.create(CuentaBancaria);
compte1.iniciarCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.describir());
console.log(compte2.describir());

var importe = Number(prompt("Entrez le importe à transférer entre les comptes :"));
compte1.extraer(importe);
compte2.abonar(importe);

compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.describir());
console.log(compte2.describir());

