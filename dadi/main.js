// Gioco dei dadi, chi fa di più vince.


var userN = prompt("Scegli un numero tra uno e 12");
var pcN = Math.floor (Math.random ()*12);

if (userN > pcN){
  document.getElementById('dadi').innerHTML= "Hai vinto!";
} else {
  document.getElementById('dadi').innerHTML= "Hai perso..";
} 
