const parola = prompt ("Inserisci Parola" );

for (let i = 0; i < parola.length; i++) {
    
    console.log ( parola [i] );
}


/****function invertiParola(stringa){

    for (var i=stringa.length-1; i>=0; i--)console.log(stringa[i]);
    document.write("");
    
    parolaInv += (stringa[i]);
      return parolaInv
    }


    parolaInv=new Array (parola);
    for (i=0;i < parolaInv.length; i++){
    invertiParola(parolaInv[i]);
    
    }


    if (parola == parolaInv) {
        console.log("esatto")

    }else {
        console.log("errato")
    }
    ******/

    var parolaSplit = parola.split("")
    var parolaSplit = parolaSplit.reverse()
    var parolaInv = parolaSplit.join("")

    if (parola == parolaInv) {
         
        console.log(Yes)
        
    }else