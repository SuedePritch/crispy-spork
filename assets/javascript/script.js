//element variables
var peopleTopicEl = document.getElementById('topic-people')
var speciesTopicEl = document.getElementById('topic-species')
var planetsTopicEl = document.getElementById('topic-planets')
var starshipsTopicEl = document.getElementById('topic-starships')

var span = document.getElementsByClassName("close")[0];
var modalEl = document.getElementById('topic-list-modal')
var modalTitleEL = document.getElementById('modal-title')
var fullListEl = document.getElementById('full-list')

//WikiAPI variables
var wikiPageId;
var wikiUrl;
//this needs to accept input from search bar
var wikiSearchText;

var dataFromLocal;

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
            peopleListItem.attr('data-index', i)
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
            speciesListItem.attr('data-index', i)
            
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
        planetsListItem.attr('data-index', i)
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
            starshipsListItem.attr('data-index', i)
            $("#full-list").append(starshipsListItem)
        }
    }
}
)

function fetchAllFilms(){
        //Fetch All Films
        for (let i = 1; i < 7; i++) {
            fetch(`https://swapi.dev/api/films/${i}`)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                let films = data;
                
                if(films){
                    localStorage.setItem(films.url, JSON.stringify(films))
                }
            })
        }
    }
$('.films-list-item').on('click', function(event){
    var filmClicked = event.target.dataset.film
    var filmObject = JSON.parse(localStorage.getItem(`${filmClicked}`))
    fullListEl.innerHTML = '';
    modalEl.style.display = 'block';
    modalTitleEL.textContent = filmObject.title
    var filmDetails = `
        <li>Episode ${filmObject.episode_id}</li>
        <li>${filmObject.opening_crawl}</li>
        `

    $("#full-list").append(filmDetails)

}
)
function wikiAPI(dataFromLocal){
    //this url will return a list of best matches and pageid
    // http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Leia20%Organa&format=json
    // query.search.pageid
    //This url will grab info on specifc page including url
    // https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=50784&inprop=url&format=json
    //This fetch grabs pageid
    wikiSearchText = dataFromLocal.name
    console.log(wikiSearchText);
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
    })
    .then(function(){
        $('#more-info').attr('href', wikiUrl)
    })
})
}





span.onclick = function() {
    $("#full-list").empty()
    $("#details-list").empty()
    modalEl.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalEl) {
        $("#full-list").empty()
        $("#details-list").empty()
        modalEl.style.display = "none";
    }
}
//event listener for clicking on list item in modal
$('#full-list').on('click', '.full-list-item' , function(event){
    var whichList = $('#modal-title').text().toLowerCase();
    var listItemClicked = event.target.dataset.index
    var linkCreator = `https://swapi.dev/api/${whichList}/${listItemClicked}/`
    dataFromLocal = JSON.parse(localStorage.getItem(linkCreator))
    wikiAPI(dataFromLocal);
    loadDetails(dataFromLocal, whichList);
    
})


function loadDetails(dataFromLocal, whichList, wikiUrl){
    modalTitleEL.textContent = dataFromLocal.name.toLowerCase()
    $("#full-list").empty()
    if(whichList == 'people'){
        var createDetailsList = `
        <li>Skin color:  ${dataFromLocal.skin_color}</li>
        <li>Eye color:  ${dataFromLocal.eye_color}</li>
        <li>Height:  ${dataFromLocal.height}<small>cm</small></li>
        <li>Mass:  ${dataFromLocal.mass}<small>kg</small></li>
        <li>Gender:  ${dataFromLocal.gender}</li>
        <li>Birth Year:  ${dataFromLocal.birth_year}</li>
        <li> <a id="more-info">More Info </a> </li>
        `;
    }else if(whichList == 'species'){
        var createDetailsList = `
        <li>Language:  ${dataFromLocal.language}</li>
        <li>Average Height:  ${dataFromLocal.average_height}<small>cm</small></li>
        <li>Average Lifespan:  ${dataFromLocal.average_lifespan}<small>years</small></li>
        <li>Skin Color:  ${dataFromLocal.skin_colors}</li>
        <li> <a id="more-info">More Info </a> </li>
        `
    }else if(whichList == 'planets'){
        var createDetailsList = `
        <li>Diameter:  ${dataFromLocal.diameter}</li>
        <li>Climate:  ${dataFromLocal.climate}</li>
        <li>Terrain:  ${dataFromLocal.terrain}</li>
        <li>Year:  ${dataFromLocal.orbital_period}<small>days</small></li>
        <li>Day:  ${dataFromLocal.rotation_period}<small>hours</small></li>
        <li>Population:  ${dataFromLocal.population}</li>
        <li> <a id="more-info">More Info </a> </li>
        `
    }else if(whichList == 'starships'){
        var createDetailsList = `
        <li>Crew:  ${dataFromLocal.crew}</li>
        <li>Cost:  ${dataFromLocal.cost_in_credits}<small>credits</small></li>
        <li>HyperDrive Rating:  ${dataFromLocal.hyperdrive_rating}</li>
        <li>Length:  ${dataFromLocal.length} <small>meters</small></li>
        <li>Cargo Capacity:  ${dataFromLocal.cargo_capacity}</li>
        <li> <a id="more-info">More Info </a> </li>
        `
    }else{
        return
    }
    $("#details-list").append(createDetailsList)
}

function onInit(){
    fetchAllFilms();
    fetchAllPeople();
    fetchAllSpecies();
    fetchAllPlanets();
    fetchAllStarships();
}

onInit();

