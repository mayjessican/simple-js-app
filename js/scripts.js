var pokemonRepository = (function () {
  var respository = [{
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
      pokemonList.push(pokemon);
}

function getAll() {
      return pokemonList;
}

return {
      add: add,
      getAll: getAll
};
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll());


repository.forEach (function(pokemon){
  document.write('<h2>' + repository.creatureName + '</h2>' + 'Height:' + repository.creatureHeight);
  if (repository.creatureHeight === 2.00);{
    document.write('(Wow that\'s big)!')
    }
})
