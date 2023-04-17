

var studentiRes = "http://localhost:3000/studenti";
// //fetch per poter "leggere" (GET) i dati del db.json
// fetch(studentiRes)
// .then(data =>{return data.json()})
// .then(res => {
//     console.log(res);
// })

//funzione costruttore dello studente

function Studente(nome, cognome, matricola, materia){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.materia = materia
}


var btn = document.querySelector("#btn");

//aggiungo un nuovo studente
function aggiungiStudente(){
    let nome = document.querySelector("#nome").value;
    let cognome = document.querySelector("#cognome").value;
    let matricola = document.querySelector("#matricola").value;
    let materia = document.querySelector("#sceltaMateria").value;

    let nuovoStudente = new Studente(nome, cognome, matricola, materia);

    //fetch per poter "registrare" (POST) il nuovo studente nel DB
    fetch(studentiRes, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuovoStudente),
    })
    .then(data => {data.json()})
    .then(res =>{
        console.log("Inserimento avvenuto", res);
    })
}

btn.addEventListener("click", aggiungiStudente);