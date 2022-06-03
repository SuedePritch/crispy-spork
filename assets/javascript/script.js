//element variables
var peopleTopicEl = document.getElementById('topic-people')
var speciesTopicEl = document.getElementById('topic-species')
var planetsTopicEl = document.getElementById('topic-planets')
var starshipsTopicEl = document.getElementById('topic-starships')

var span = document.getElementsByClassName("close")[0];
var modalEl = document.getElementById('topic-list-modal')
var modalTitleEL = document.getElementById('modal-title')
var fullListEl = document.getElementById('full-list')
//arrays created from the fetch requests
var peopleArray = [];
var speciesArray = [];
var planetsArray = [];
var starshipsArray = [];
var filmsArray = [];
//WikiAPI variables
var wikiPageId;
//this needs to accept input from search bar
var wikiSearchText = 'Han Solo'

//variables for main characters/species/planets/starships/films
//"Top Searches"
var CHAR_Luke                   = peopleArray[0];
var CHAR_C3po                   = peopleArray[1];
var CHAR_Leia                   = peopleArray[4];
var CHAR_ObiWan                 = peopleArray[9];
var CHAR_Anikin                 = peopleArray[72];
var CHAR_Chewy                  = peopleArray[74];
var CHAR_HanSolo                = peopleArray[75];
var CHAR_Yoda                   = peopleArray[80];

var SPECIES_Human               = speciesArray[0];
var SPECIES_Droid               = speciesArray[1];
var SPECIES_Wookie              = speciesArray[2];
var SPECIES_Yoda                = speciesArray[5];
var SPECIES_Ewok                = speciesArray[8];

var PLANETS_Tatooine            = planetsArray[0];
var PLANETS_Alderaan            = planetsArray[1];
var PLANETS_Hoth                = planetsArray[3];
var PLANETS_Dagobah             = planetsArray[4];
var PLANETS_Endor               = planetsArray[6];
var PLANETS_Naboo               = planetsArray[7];
var PLANETS_Coruscant           = planetsArray[8];                

var STARSHIPS_Cr90Corvette      = starshipsArray[0];
var STARSHIPS_StarDestroyer     = starshipsArray[1];
var STARSHIPS_DeathStar         = starshipsArray[3];
var STARSHIPS_MillenniumFalcon  = starshipsArray[4];
var STARSHIPS_YWing             = starshipsArray[5];
var STARSHIPS_XWing             = starshipsArray[6];
var STARSHIPS_TieAdvancedX1     = starshipsArray[7];
var STARSHIPS_DroidControlShip  = starshipsArray[33];
var STARSHIPS_NabooFighter      = starshipsArray[34];
var STARSHIPS_NabooRoyalStarship= starshipsArray[35];

var FILMS_ANewHope              = filmsArray[0];
var FILMS_TheEmpireStrikesBack  = filmsArray[1];
var FILMS_ReturnOfTheJedi       = filmsArray[2];
var FILMS_ThePhantomMenace      = filmsArray[3];
var FILMS_AttackOfTheClones     = filmsArray[4];
var FILMS_RevengeOfTheSith      = filmsArray[5];


function fetchAllPeople(){
    //Fetch All People
    for (let i = 1; i < 83; i++) {
        fetch(`https://swapi.dev/api/people/${i}`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            let people = data;
            
            if(people){
                localStorage.setItem(people.url, JSON.stringify(people))
            }
        })
    }
}
peopleTopicEl.addEventListener('click', function(){
    fullListEl.innerHTML = '';
    modalEl.style.display = 'block';
    modalTitleEL.textContent = peopleTopicEl.textContent
    for (let i = 0; i < 83; i++) {
        const peopleListName = JSON.parse(localStorage.getItem(`https://swapi.dev/api/people/${i}/`))
        var peopleListItem = $("<li>")
        if(peopleListName){
            peopleListItem.text(peopleListName.name)
            peopleListItem.addClass('full-list-item')
            $("#full-list").append(peopleListItem)
        }
    }

})
function fetchAllSpecies(){
    //Fetch All Species
    for (let i = 1; i < 38; i++) {
        fetch(`https://swapi.dev/api/species/${i}`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            let species = data;
            
            if(species){
                localStorage.setItem(species.url, JSON.stringify(species))
            }
        })
    }
}
speciesTopicEl.addEventListener('click', function(){
    fullListEl.innerHTML = '';
    modalEl.style.display = 'block';
    modalTitleEL.textContent = speciesTopicEl.textContent
    for (let i = 0; i < 38; i++) {
        const speciesListName = JSON.parse(localStorage.getItem(`https://swapi.dev/api/species/${i}/`))
        var speciesListItem = $("<li>")
        if(speciesListName){
            speciesListItem.text(speciesListName.name)
            speciesListItem.addClass('full-list-item')
            $("#full-list").append(speciesListItem)
        }
    }
})
function fetchAllPlanets(){
    //Fetch All Planets
    for (let i = 1; i < 30; i++) {
        fetch(`https://swapi.dev/api/planets/${i}`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            let planets = data;
            
            if(planets){
                localStorage.setItem(planets.url, JSON.stringify(planets))
            }
        })
    }
}
planetsTopicEl.addEventListener('click', function(){
    fullListEl.innerHTML = '';
    modalEl.style.display = 'block';
    modalTitleEL.textContent = planetsTopicEl.textContent
    for (let i = 0; i < 30; i++) {
        const planetsListName = JSON.parse(localStorage.getItem(`https://swapi.dev/api/planets/${i}/`))
        var planetsListItem = $("<li>")
        if(planetsListName){
            planetsListItem.text(planetsListName.name)
            planetsListItem.addClass('full-list-item')
            $("#full-list").append(planetsListItem)
        }
    }
})
function fetchAllStarships(){
    //Fetch All Starships
    for (let i = 1; i < 80; i++) {
        fetch(`https://swapi.dev/api/starships/${i}`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            let starships = data;
            
            if(starships){
                localStorage.setItem(starships.url, JSON.stringify(starships))
            }
        })
    }
}
starshipsTopicEl.addEventListener('click', function(){
    fullListEl.innerHTML = '';
    modalEl.style.display = 'block';
    modalTitleEL.textContent = starshipsTopicEl.textContent
    for (let i = 0; i < 80; i++) {
        const starshipsListName = JSON.parse(localStorage.getItem(`https://swapi.dev/api/starships/${i}/`))
        var starshipsListItem = $("<li>")
        if(starshipsListName){
            starshipsListItem.text(starshipsListName.name)
            starshipsListItem.addClass('full-list-item')
            $("#full-list").append(starshipsListItem)
        }
    }
})

function wikiAPI(){
    //this url will return a list of best matches and pageid
    // http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Leia20%Organa&format=json
    // query.search.pageid
    //This url will grab info on specifc page including url
    // https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=50784&inprop=url&format=json
    //This fetch grabs pageid
    fetch(`http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${wikiSearchText}&format=json&origin=*`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        wikiPageId = data.query.search[0].pageid
        wikiPageSnippet = data.query.search[0].snippet
    })
    .then(function(){
        fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=${wikiPageId}&inprop=url&format=json&origin=*`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        wikiPageInfo = data.query.pages
        wikiUrl = wikiPageInfo[`${wikiPageId}`].fullurl
})})
}



span.onclick = function() {
    modalEl.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalEl) {
    modalEl.style.display = "none";
    }
}

function onInit(){

    fetchAllPeople();
    fetchAllSpecies();
    fetchAllPlanets();
    fetchAllStarships();
}
onInit();
// wikiAPI();

