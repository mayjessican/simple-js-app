var pokemonRepository = (function () {
  var repository = [{
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

function addListItem(){
  var pokemonList = document.querySelector('ul')
  var listItem = document.querySelector('li');
  var button = document.querySelector('button');
  button.innerText = 'pokemon.creatuerName';
  button.classList.add('creatureName');
  listItem.appendChild(button);
  pokemonList.appendChild(li);
  button.addEventListener('click', function(event) {
    showDetails(pokemon)
});

function add(pokemon) {
      repository.push(pokemon);
};

function getAll() {
      return repository;
};

function showDetails(pokemon) {
     console.log(pokemon.creatureName + pokemon.creatureHeight + pokemon.creatureType);
     alert(pokemon.name);
   }

return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      showDetails: showDetails
};
})();

pokemonRepository.getAll().forEach (function(pokemon){
  pokemonRepository.addListItem(pokemon)
});
