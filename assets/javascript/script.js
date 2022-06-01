var CHAR_Luke;
var CHAR_Leia;
var CHAR_C3po;
var CHAR_HanSolo;
var CHAR_Chewy;
var CHAR_Yoda;
var CHAR_Anikin;
var CHAR_ObiWan;

var SPECIES_Human;
var SPECIES_Droid;
var SPECIES_Wookie;
var SPECIES_Yoda;
var SPECIES_Ewok;

var PLANETS_Tatooine;
var PLANETS_Alderaan;
var PLANETS_Dagobah;
var PLANETS_Coruscant;
var PLANETS_Hoth;
var PLANETS_Endor;
var PLANETS_Naboo;

function fetchMainCharacters(){
    fetch(`https://swapi.dev/api/people`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //Pull main characters from page one
        CHAR_Luke = data.results[0];
        CHAR_Leia = data.results[4];
        CHAR_C3po = data.results[1];
        CHAR_ObiWan = data.results[9];
        
    }).then(function(){
        //Pull main characters from page two
        fetch(`https://swapi.dev/api/people?page=2`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            CHAR_Anikin = data.results[0];
            CHAR_Chewy = data.results[2];
            CHAR_HanSolo = data.results[3];
            CHAR_Yoda = data.results[8];
    }).then(function(){
        localStorage.setItem('MainCharacters', 
            JSON.stringify([
                CHAR_Luke,
                CHAR_Leia,
                CHAR_C3po,
                CHAR_ObiWan,
                CHAR_Anikin,
                CHAR_Chewy,
                CHAR_HanSolo
                ,CHAR_Yoda
            ]))
    })
})
}
function fetchMainSpecies(){
    fetch(`https://swapi.dev/api/species`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //Pull main species from page one
        SPECIES_Human = data.results[0];
        SPECIES_Droid = data.results[1];
        SPECIES_Wookie = data.results[2];
        SPECIES_Yoda = data.results[5];
        SPECIES_Ewok = data.results[8];
    }).then(function(){
        localStorage.setItem('MainSpecies', 
            JSON.stringify([
                SPECIES_Human,
                SPECIES_Droid,
                SPECIES_Wookie,
                SPECIES_Yoda,
                SPECIES_Ewok,

            ]))
    })
}
function fetchMainPlanets(){
    fetch(`https://swapi.dev/api/planets`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //Pull main planets from page one
        PLANETS_Tatooine = data.results[0];
        PLANETS_Alderaan = data.results[1];
        PLANETS_Hoth = data.results[3];
        PLANETS_Dagobah = data.results[4];
        PLANETS_Endor = data.results[6];
        PLANETS_Naboo = data.results[7];
        PLANETS_Coruscant = data.results[8];
    }).then(function(){
        localStorage.setItem('MainPlanets', 
            JSON.stringify([
                PLANETS_Tatooine,
                PLANETS_Alderaan,
                PLANETS_Hoth,
                PLANETS_Dagobah,
                PLANETS_Endor,
                PLANETS_Naboo,
                PLANETS_Coruscant

            ]))
    })
}
fetchMainCharacters();
fetchMainSpecies();
fetchMainPlanets();

