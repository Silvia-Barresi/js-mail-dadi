// Gioco dei dadi, chi fa di più vince.


var userN = Math.floor (Math.random ()*12);
alert("Il tuo numero:" +   userN);

var pcN = Math.floor (Math.random ()*12);
alert("Il suo numero:" +   pcN);

if (userN > pcN){
  document.getElementById('dadi').innerHTML= "Hai vinto!";
} else if (userN < pcN){
  document.getElementById('dadi').innerHTML= "Hai perso..";
} else{
  document.getElementById('dadi').innerHTML= "Avete pareggiato.";
}
