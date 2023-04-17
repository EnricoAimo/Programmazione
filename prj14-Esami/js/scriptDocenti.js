// fetch dei docenti
//creazione dei campi option per la select "#sceltaDocente" ---- nomeDocente - Materia
//al click su un docente stampo i relativi studenti collegati con quella materia

var sceltaDocente = document.querySelector("#sceltaDocente");

var urlDoc = "http://localhost:3000/docenti";

fetch(urlDoc)
    .then(data => {
        return data.json()
    })
    .then(res => {
        res.forEach(docente => {
            let option = document.createElement("option");
            option.innerHTML = `${docente.nome} ${docente.cognome} - ${docente.materia}`;
            option.value = docente.materia
            sceltaDocente.appendChild(option)
        });
    })

sceltaDocente.addEventListener("change", function () {
    stampaRelativiStudenti(this.value)
});

var listaStudenti = document.querySelector("#listaStudenti");

function stampaRelativiStudenti(materia) {
    listaStudenti.innerHTML = "";

    console.log("stampo gli studenti per quella materia " + materia);

    var studentiRes = "http://localhost:3000/studenti?materia=" + materia;

    listaStudenti.innerHTML += `<h3>Studenti iscritti all'esame di ${materia} </h3>`;

    fetch(studentiRes)
        .then(data => {
            return data.json()
        })
        .then(res => {
            res.forEach(studente =>{
                listaStudenti.innerHTML += `<li> ${studente.nome} ${studente.cognome} Matr: ${studente.matricola} </li>`;
            })
        })
}