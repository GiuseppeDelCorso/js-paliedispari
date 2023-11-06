const parola = prompt ("Inserisci Parola" );

for (let i = 0; i < parola.length; i++) {
    
    console.log ( parola [i] );
}


function invertiParola(stringa){

    for (var l=stringa.length-1; l>=0; l--)console.log(stringa.charAt(l));
    document.write("");
    
    }
    parole=new Array (parola);
    for (i=0;i < parole.length; i++){
    invertiParola(parole[i]);
    
    }