var pokemonRepository = (function () {
  var pokemon = [{
    creatureName: 'Ninetales',
    creatureHeight: 1.1,
    creatureAbilities: ['Flash-fire', 'Drought'],
    creatureTypes: ['Field'],
  },
  {
    creatureName: 'Mew',
    creatureHeight: 0.4,
    creatureAbilities: ['Synchronize'],
    creatureTypes: ['Cat'],
  },
  {
    creatureName: 'Charmander',
    creatureHeight: 2.00,
    creatureAbilities: ['Blaze', 'Solar-power'],
    creatureTypes: ['Fire'],
  },
  {
    creatureName: 'Jigglypuff',
    creatureHeight: 0.5,
    creatureAbilities: ['Cute-charm', 'Friend-guard'],
    creatureTypes: ['Sleep', 'Charm'],
  }];

function addListItem(pokemon){
  var pokemonList = document.querySelector('.pokemon-list');
  var listItem = document.createElement('li');
  var button = document.createElement('button');
  button.innerText = pokemon.creatureName + ' ' + pokemon.creatureHeight + ' ' + pokemon.creatureTypes;
  button.classList.add('.creatureName');
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);
  button.addEventListener('click', function(event) {
    showDetails(pokemon)
});
}

function add(pokemon) {
      repository.push(pokemon);
      console.log(pokemon);
};

function getAll() {
      return pokemon;
};

function showDetails(pokemon) {
     console.log(pokemon.creatureName + pokemon.creatureHeight + pokemon.creatureTypes);
     alert(pokemon.creatureName);
   }

return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      showDetails: showDetails
};
})();

// var pokemonRepository = document.querySelectorAll('.pokemon-list');

pokemonRepository.getAll().forEach (function(pokemon){
  console.log(pokemon);
  pokemonRepository.addListItem(pokemon)
});
