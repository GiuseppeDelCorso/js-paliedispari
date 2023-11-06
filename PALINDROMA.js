/**const parola = prompt ("Inserisci Parola" );

for (let i = 0; i < parola.length; i++) {
    
    
}


function invertiParola(stringa){

let parolaInv = ""

    for (let i=stringa.length-1; i>=0; i--){
        
        console.log(stringa[i]);
        parolaInv += stringa[i];
    }
    
    return parolaInv
} 

let parolaInv = invertiParola(parola);


    if (parola == parolaInv) {
        console.log("esatto")

    }else {
        console.log("errato")
    }





/** *  var parolaSplit = parola.split("")
    var parolaSplit = parolaSplit.reverse()
    var parolaInv = parolaSplit.join("")

    if (parola == parolaInv) {
         
        console.log("yes")
        
    }else{
        console.log("no")
    }**/