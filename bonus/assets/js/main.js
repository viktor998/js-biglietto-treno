var id = 0;
function moveOn() {
  var elem = document.getElementById("train");
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

function biglietto(){
    var kilometri = document.querySelector('#kilometri').value;
    var eta = document.querySelector("#eta").value;
    var k = 0.21;
    var prezzoBiglietto = kilometri * k;
    document.getElementById("myForm").submit();

    if(eta < 18){
        console.log("il prezzo del biglietto è :" + (prezzoBiglietto - ((prezzoBiglietto * 20) / 100)) + "$");
        document.getElementById("totale").value =(prezzoBiglietto - ((prezzoBiglietto * 20) / 100));
    }
    else if(eta > 65){
        console.log("il prezzo del biglietto è :" + (prezzoBiglietto - ((prezzoBiglietto * 40) / 100)) + "$");
        document.getElementById("totale").value =(prezzoBiglietto - ((prezzoBiglietto * 40) / 100));
    }
    else{
        console.log("il prezzo del biglietto è :" + prezzoBiglietto + "$");
        document.getElementById("totale").value =prezzoBiglietto ;
    }

}