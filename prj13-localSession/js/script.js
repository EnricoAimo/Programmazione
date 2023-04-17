var nomeUtente = "dario";

var utente = {
    nome: "Pippo",
    cognome: "Rossi",
    eta: 30
}

var btn = document.querySelector("#btn");


function login(){
 localStorage.setItem("username", nomeUtente);

 //per poter salvare un oggetto devo trasformalo in JSON
 let utenteJSON = JSON.stringify(utente);
 localStorage.setItem("utente", utenteJSON)
 

 //location.reload() ricarica la pagina
 location.reload();
}

btn.addEventListener("click", login);

var feed = document.querySelector("#feed");

function recuperaUtenza(){
    //recuperare ciò che è salvato nella localStorage
    let utenteConnessoJSON = localStorage.getItem("utente");
    console.log(utenteConnessoJSON);

    let utenteConnesso = JSON.parse(utenteConnessoJSON);
    console.log(utenteConnesso);

    if(utenteConnesso == null){
        feed.innerHTML = "Nessun utente connesso";
    }else{
        feed.innerHTML = "Ciao " + utenteConnesso.nome + ", benvenuto !"
    }


}

recuperaUtenza();


var btnOut = document.querySelector("#btnOut");

function logout(){
    // localStorage.clear();
    localStorage.removeItem("utente");
    location.reload()
}

btnOut.addEventListener("click", logout);