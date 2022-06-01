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

var STARSHIPS_Cr90Corvette;
var STARSHIPS_StarDestroyer;
var STARSHIPS_DeathStar;
var STARSHIPS_MillenniumFalcon;
var STARSHIPS_YWing
var STARSHIPS_XWing
var STARSHIPS_TieAdvancedX1;
var STARSHIPS_DroidControlShip;
var STARSHIPS_NabooFighter;
var STARSHIPS_NabooRoyalStarship;

var FILMS_ANewHope;
var FILMS_TheEmpireStrikesBack;
var FILMS_ReturnOfTheJedi;
var FILMS_ThePhantomMenace;
var FILMS_AttackOfTheClones;
var FILMS_RevengeOfTheSith;

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
function fetchMainStarships(){
    fetch(`https://swapi.dev/api/starships`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //Pull main starships from page one
        STARSHIPS_Cr90Corvette = data.results[0];
        STARSHIPS_StarDestroyer = data.results[1];
        STARSHIPS_DeathStar = data.results[3];
        STARSHIPS_MillenniumFalcon = data.results[4];
        STARSHIPS_YWing= data.results[5];
        STARSHIPS_XWing= data.results[6];
        STARSHIPS_TieAdvancedX1= data.results[7];

    }).then(function(){
        //Pull main starships from page two
        fetch(`https://swapi.dev/api/starships?page=2`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            STARSHIPS_DroidControlShip = data.results[7];
            STARSHIPS_NabooFighter = data.results[8];
            STARSHIPS_NabooRoyalStarship = data.results[9];
    }).then(function(){
        localStorage.setItem('MainStarships', 
            JSON.stringify([
                STARSHIPS_Cr90Corvette,
                STARSHIPS_StarDestroyer,
                STARSHIPS_DeathStar,
                STARSHIPS_MillenniumFalcon,
                STARSHIPS_YWing,
                STARSHIPS_XWing,
                STARSHIPS_TieAdvancedX1,
                STARSHIPS_DroidControlShip,
                STARSHIPS_NabooFighter,
                STARSHIPS_NabooRoyalStarship
            ]))
        })
    })
}
function fetchFilms(){
    fetch(`https://swapi.dev/api/films`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //Pull films from page one
        FILMS_ANewHope = data.results[0];
        FILMS_TheEmpireStrikesBack = data.results[1];
        FILMS_ReturnOfTheJedi = data.results[2];
        FILMS_ThePhantomMenace = data.results[3];
        FILMS_AttackOfTheClones = data.results[4];
        FILMS_RevengeOfTheSith = data.results[5];
    }).then(function(){
        localStorage.setItem('Films', 
            JSON.stringify([
                FILMS_ANewHope,
                FILMS_TheEmpireStrikesBack,
                FILMS_ReturnOfTheJedi,
                FILMS_ThePhantomMenace,
                FILMS_AttackOfTheClones,
                FILMS_RevengeOfTheSith,
            ]))
    })
}
fetchMainCharacters();
fetchMainSpecies();
fetchMainPlanets();
fetchMainStarships();
fetchFilms();
