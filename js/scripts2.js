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

function showDetails(pokemon) {
     console.log(pokemon.name + pokemon.height + pokemon.type);
     alert(pokemon.name);
   }

console.log(pokemonRepository.getAll());
pokemonRepository.add({ creatureName: 'Pikachu' });
console.log(pokemonRepository.getAll());

function add(pokemon) {
      repository.push(pokemon);
};

function getAll() {
      return repository;
};

return {
      add: add,
      getAll: getAll
};

pokemonRepository.getAll().forEach (function(pokemon));
  })();
