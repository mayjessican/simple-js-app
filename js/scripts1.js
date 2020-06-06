//Wrap repository array in an IIFE to avoid accidentally accessing the global state
var pokemonRepository = (function() {
    //Creates an empty repository
    var repository = [];
    //Creates a variable to access the pokemon API
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    var pokemonContainer = document.querySelector('.pokemon-list')

    //Function to create a list of items from API
    function addListItem(pokemon) {
        //Assigns a variable to the ul list
        var pokemonList = document.querySelector('.pokemon-list');
        //Assigns a variable to the list item
        var listItem = document.createElement('li');
        //Assigns a variable to the button
        var button = document.createElement('button');
        //Displays the current pokemon name on their button
        button.innerText = pokemon.name;
        //Adds a CSS class to the button
        button.classList.add('.class-list');
        //var button = ('<button class="class-list">' + pokemon.name + '</button>');
        //Nests a button inside the list item
        listItem.appendChild(button);
        //Nests list items inside a ul item
        pokemonList.appendChild(listItem);
        //Creates an event listener for when the button is clicked
        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        })
    }

    //Function to add each pokemon and attributes
    function add(pokemon) {
        repository.push(pokemon);
        console.log(pokemon);
    }

    //Function to pull all pokemon data
    function getAll() {
        return repository;
    }

    //Function to load pokemon list from API
    function loadList() {
        return fetch(apiUrl).then(function(response) {
            // JSON used to exchange data back and forth with external servers
            return response.json();
            // If the promise is resolved, .then is run
        }).then(function(json) {
            json.results.forEach(function(item) {
                var pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
            // If the promise is rejected, .catch is run
        }).catch(function(e) {
            console.error(e);
        })
    }

    // Function to load details for each pokemon:
    function loadDetails(item) {
        var url = item.detailsUrl;
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function(pokemon) {
            // Adds the details to each item
            item.imageUrl = pokemon.sprites.front_default;
            item.height = pokemon.height;
            item.types = [];
            // Foreach loop for types
            for (var i = 0; i < pokemon.types.length; i++) {
              item.types.push(pokemon.types[i].type.name);
            }
            return item;
          }).catch(function(e) {
            console.error(e);
        });
    }

    // Function to console.log pokemon details
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function() {
            console.log(item);
            showModal(item);
        });
    }

    // Shows modal content
    function showModal(item) {
        var modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.add('is-visible');
        // Clears existing modal content
        modalContainer.innerHTML = '';
        // Creats div element in DOM
        var modal = document.createElement('div');
        // Adds class to div DOM element
        modal.classList.add('modal');
        // Adds the new modal content
        var closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);
        // Creates element for name in modal content
        var titleElement = document.createElement('h1');
        titleElement.innerText = item.name;
        var contentElement = document.createElement('p')
        contentElement.innerText = '';
        // Creates img in modal content
        var imageElement = document.createElement('img');
        imageElement.classList.add('modal-img');
        imageElement.setAttribute('src', item.imageUrl);
        // Creates element for height in modal content
        var heightElement = document.createElement('p');
        heightElement.innerText = 'height : ' + item.height + 'm';
        // Appends modal content to webpage
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(imageElement);
        modal.appendChild(heightElement);
        modalContainer.appendChild(modal);
        //modalContainer.appendChild('is-visible');

        // Adds class to show modal
        modalContainer.classList.add('is-visible');
    }

    document.querySelector('#show-modal').addEventListener('click', () => {
      showModal('modal title', 'this is the modal content');
    });

    // Hides modal with close button click
    function hideModal() {
        var modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
    };

    // Returns the values that can be accessed outside of the IIFE
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };

    // Hides model with ESC key click
    window.addEventListener('keydown', e => {
        var modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' &&
            modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    modalContainer.addEventListener('click', (e) => {
      var target = e.target;
      if (target === modalContainer){
        hideModal();
      }
    });

    // Hides modal with click outside of modal
    var modalContainer = document.querySelector('#modal-container');
    modalContainer.addEventListener('click', (e) => {
        var target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });
})();

// Creates a list of pokemon with their name on the button
pokemonRepository.loadList().then(function(pokemon) {
    pokemonRepository.getAll().forEach(function(pokemon) {
        console.log(pokemon);
        pokemonRepository.addListItem(pokemon);
    });
});
