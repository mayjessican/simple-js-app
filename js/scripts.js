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
      pokemonRepository.push(pokemon);
}

function getAll() {
      return Repository;
}

return {
      add: add,
      getAll: getAll
};
})();

console.log(Repository.getAll());
repository.add({ name: 'repository' });
console.log(repository.getAll());

repository.forEach (function(){
  console.log('<h2>' + repository.creatureName + '</h2>' + 'Height:' + repository.creatureHeight);
  if (repository.creatureHeight === 2.00);{
    document.write('(Wow that\'s big)!')
    }
});
