//IIFE wrap
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

//function to push pokemon repository
function add(pokemon) {
      repository.push(pokemon);
}

function getAll() {
      return repository;
}

return{
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  createReusableModal: createReusableModal,
  showModal: showModal,
  hideModal: hideModal
};

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
}

//Function to add another element
console.log(pokemonRepository.getAll());
pokemonRepository.add({ creatureName: 'Pikachu' });
console.log(pokemonRepository.getAll());

//Creates list of Pokemon with Pokemon's name on the button
pokemonRepository.loadList().then(function() {
  //Creates a reusable modal once
pokemonRepository.createReusableModal();
  //Data loaded
pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
  });
});
