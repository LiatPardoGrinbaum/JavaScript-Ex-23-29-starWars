function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const pokemon1 = new Pokemon("Charmander", "Fire", ["Blaze", "Solar Power"]);
const pokemon2 = new Pokemon("Squirtle", "Water", ["Torrent", "Rain Dish"]);
const pokemon3 = new Pokemon("Pikachu", "Electric", ["Thunder Shock", "Wild Charge", "Iron Tail"]);

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function (attackNum) {
  console.log(`${this.name} used ${this.attackList[attackNum]}`);
};

pokemon1.callPokemon();
pokemon1.attack(0);

pokemon2.callPokemon();
pokemon2.attack(1);

pokemon3.callPokemon();
pokemon3.attack(1);
