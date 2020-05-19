//IIFE
var pokemonRepository = (function(pokemon) {
    var pokemonList = [];
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function loadList() {
        return fetch(apiUrl).then(function(response) {
            return response.json();
        }).then(function(json) {
            json.results.forEach(function(item) {
                var pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function(e) {
            console.error(e);
        })
    }
})();

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon) {
        addListItem(pokemon);
    });

//function to push pokemon repository
function add(pokemon) {
    pokemnonRepository.push(pokemon);
}

function getAll() {
    return pokemonRepository;
}

//Function to add list for each pokemon object
function addListItem(pokemon) {
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = pokemon.creatuerName;
    button.classList.add('pokemon-name');
    listItem.appendChild(button);
    $pokemonList.appendChild(listItem)
    button.addEventListener('click', function() {
        showDetails(pokemon)
    })

    //Function to add another element
    console.log(pokemonRepository.getAll());
    pokemonRepository.add({
        creatureName: 'Pikachu'
    });
    console.log(pokemonRepository.getAll());

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        createReusableModal: createReusableModal,
        showModal: showModal,
        hideModal: hideModal
    };
})();

    //Creates list of Pokemon with Pokemon's name on the button
    pokemonRepository.loadList().then(function() {
                //Creates a reusable modal once
                pokemonRepository.createReusableModal();
                //Data loaded
                pokemonRepository.getAll().forEach(function(pokemon) {
                    pokemonRepository.addListItem(pokemon);
    });
