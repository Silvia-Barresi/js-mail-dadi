// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;



var listaMail = ["smart@gmail.com", "digital@gmail.it", "pedrochaval@hotmail.com", "santanna@gmail.it" ];

var mail = prompt("Inserisci la tua mail");


for (var i= 0; i < listaMail.length; i++ ){
  if (listaMail[i] == mail){
    msg = "Access granted";
    i = listaMail.length;
  } else {
    msg= "Access denied";
  }
}

document.getElementById('mail').innerHTML= msg;
