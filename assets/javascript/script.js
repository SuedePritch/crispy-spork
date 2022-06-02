var peopleArray = [];
var speciesArray = [];
var planetsArray = [];
var starshipsArray = [];
var filmsArray = [];
var wikiPageId;
//this needs to accept input from search bar
var wikiSearchText = 'Han Solo'

//these need to be verified as the idex was relating to the page number 
//could be as easy as adding 10 to the index for each page
var CHAR_Luke                   = peopleArray[0];
var CHAR_Leia                   = peopleArray[4];
var CHAR_C3po                   = peopleArray[1];
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


function fetchAllData(){
    //Fetch All People
    fetch(`https://swapi.dev/api/people`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.results.length; i++) {
            let people = data.results[i];
            peopleArray.push(people)
        }
        
    }).then(function(){
        fetch(`https://swapi.dev/api/people?page=2`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let people = data.results[i];
                peopleArray.push(people)
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/people?page=3`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let people = data.results[i];
                peopleArray.push(people)    
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/people?page=4`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let people = data.results[i];
                peopleArray.push(people)    
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/people?page=5`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let people = data.results[i];
                peopleArray.push(people)    
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/people?page=6`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let people = data.results[i];
                peopleArray.push(people)    
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/people?page=7`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let people = data.results[i];
                peopleArray.push(people)    
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/people?page=8`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let people = data.results[i];
                peopleArray.push(people)    
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/people?page=9`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let people = data.results[i];
                peopleArray.push(people)    
            }
        })





        //fetch all species
    }).then(function(){
        fetch(`https://swapi.dev/api/species`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.results.length; i++) {
            let species = data.results[i];
            speciesArray.push(species)
        }
        
    }).then(function(){
        fetch(`https://swapi.dev/api/species?page=2`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let species = data.results[i];
                speciesArray.push(species)
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/species?page=3`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let species = data.results[i];
                speciesArray.push(species)    
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/species?page=4`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let species = data.results[i];
                speciesArray.push(species)    
            }
        })
    })



        //fetch all planets
    }).then(function(){
        fetch(`https://swapi.dev/api/planets`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.results.length; i++) {
            let planets = data.results[i];
            planetsArray.push(planets)
        }
        
    }).then(function(){
        fetch(`https://swapi.dev/api/planets?page=2`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let planets = data.results[i];
                planetsArray.push(planets)
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/planets?page=3`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let planets = data.results[i];
                planetsArray.push(planets)    
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/planets?page=4`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let planets = data.results[i];
                planetsArray.push(planets)    
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/planets?page=5`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let planets = data.results[i];
                planetsArray.push(planets)    
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/planets?page=6`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let planets = data.results[i];
                planetsArray.push(planets)    
            }
        })

        //fetch all starships
    }).then(function(){
        fetch(`https://swapi.dev/api/starships`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.results.length; i++) {
            let starships = data.results[i];
            starshipsArray.push(starships)
        }
        
    }).then(function(){
        fetch(`https://swapi.dev/api/starships?page=2`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let starships = data.results[i];
                starshipsArray.push(starships)
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/starships?page=3`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let starships = data.results[i];
                starshipsArray.push(starships)    
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/starships?page=4`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let starships = data.results[i];
                starshipsArray.push(starships)    
            }
        })
    }).then(function(){
        fetch(`https://swapi.dev/api/films`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                let films = data.results[i];
                filmsArray.push(films)    
            }
        })    
    }) 
})})
}

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
        console.log(wikiPageSnippet);
    })
    .then(function(){
        fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=${wikiPageId}&inprop=url&format=json&origin=*`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        wikiPageInfo = data.query.pages
        wikiUrl = wikiPageInfo[`${wikiPageId}`].fullurl
        
    })
    })
}

fetchAllData();
wikiAPI();

