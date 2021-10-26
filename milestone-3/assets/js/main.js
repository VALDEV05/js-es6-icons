/*

Milestone 1
    Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Milestone 2
    Coloriamo le icone per tipo
Milestone 3
    Creiamo una select con i tipi di icone e usiamola per filtrare le icone
-
-
-
-
Consigli:
Mangiate e poi iniziate a lavorare subito.
riprodurre layout fedelmente
fate una milestone alla volta
mettete ciascuna milestone in una cartella (es. js-es6-icons/milestone_1)
completata una milestone passate alla successiva, copiando il contenuto della milestone precedente nella cartella di quella nuova.
per ciascuna milestone scrivete quello che volete fare, passo passo, in italiano.
leggete le slide e la documentazione degli strumenti che volete utulizzare
Divertitievi. */


const icon = [{
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];


const select = document.getElementById('select')
console.log(select.value);
/* Milestone 3
    Creiamo una select con i tipi di icone e usiamola per filtrare le icone */

const placeToPrintCard = document.querySelector('.row')
icon.forEach(element => {

    card = `<div class="col-2 p-3">
                <div class="card rounded-3 shadow p-3 mb-5 bg-white rounded ${element.type}">
                    <div class="card-body d-flex justify-content-center align-items-center flex-column">
                        <h5 class="card-title"><i class="${element.prefix + element.name + ' ' + element.family}"></i></h5>
                        <p>${element.name}</p>
                    </div>
                </div>
            </div>`
    placeToPrintCard.innerHTML += card


});