var kilometri =prompt("Quanti chilometri deve percorrere?:");
var eta = parseInt(prompt("Quale è la sua età:"));
var k = 0.21;
var prezzoBiglietto = kilometri * k;
var totale = document.getElementById("tot");

console.log(kilometri, eta);

if(eta < 18){
    console.log("il prezzo del biglietto è :" + (prezzoBiglietto - ((prezzoBiglietto * 20) / 100)) + "$");
    totale.innerHTML +=(prezzoBiglietto - ((prezzoBiglietto * 20) / 100)) + "$";
}
else if(eta > 65){
    console.log("il prezzo del biglietto è :" + (prezzoBiglietto - ((prezzoBiglietto * 40) / 100)) + "$");
}
else{
    console.log("il prezzo del biglietto è :" + prezzoBiglietto + "$");
}

var id = 0;
function moveOn() {
  var elem = document.getElementById("train");
  var icon= document.getElementById("iconPulse");
  icon.style.opacity=0;
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 2350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.right = pos + 'px';
    }
  }
}