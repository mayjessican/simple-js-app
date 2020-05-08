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

function add(pokemon) {
      repository.push(pokemon);
}

function getAll() {
      return repository;
}

return {
      add: add,
      getAll: getAll
};
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ creatureName: 'Pikachu' });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach (function(pokemon){
  console.log('<h2>' + pokemon.creatureName + '</h2>' + 'Height:' + pokemon.creatureHeight);
  if (pokemon.creatureHeight >= 2.00){
    document.write('<h2>' + pokemon.creatureName + '</h2>' + 'Height:' + pokemon.creatureHeight + '(Wow that\'s big)!')
  } else {
    document.write('<h2>' + pokemon.creatureName + '</h2>' + 'Height:' + pokemon.creatureHeight);
  }
}); 
