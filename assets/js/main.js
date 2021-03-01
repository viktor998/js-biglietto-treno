var kilometri =prompt("Quanti chilometri deve percorrere?:");
var eta = parseInt(prompt("Quale è la sua età:"));
var k = 0.21;
var prezzoBiglietto = kilometri * k;

console.log(kilometri, eta);

if(eta < 18){
    console.log("il prezzo del biglietto è :" + (prezzoBiglietto - ((prezzoBiglietto * 20) / 100)) + "$");
}
else if(eta > 65){
    console.log("il prezzo del biglietto è :" + (prezzoBiglietto - ((prezzoBiglietto * 40) / 100)) + "$");
}
else{
    console.log("il prezzo del biglietto è :" + prezzoBiglietto + "$");
}