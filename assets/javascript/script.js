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
//this needs to accept input from search bar
var wikiSearchText = 'Han Solo'

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
})


span.onclick = function() {
    modalEl.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalEl) {
    modalEl.style.display = "none";
    }
}
//event listener for clicking on list item in modal
$('#full-list').on('click', '.full-list-item' , function(event){
    var whichList = $('#modal-title').text().toLowerCase();
    var listItemClicked = event.target.dataset.index
    var linkCreator = `https://swapi.dev/api/${whichList}/${listItemClicked}/`
    dataFromLocal = JSON.parse(localStorage.getItem(linkCreator))
    console.log(dataFromLocal);
    
})

function onInit(){
    fetchAllPeople();
    fetchAllSpecies();
    fetchAllPlanets();
    fetchAllStarships();
}

onInit();

