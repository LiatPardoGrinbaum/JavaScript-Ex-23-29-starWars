const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;

  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}

// const func = getStrength.bind(hero);
// console.log(whoIsStronger.call(hero, hero.getStrength));

// const getStrengthFunc = function () {
//   return this.getStrength;
// };

// console.log(whoIsStronger(getStrengthFunc.call(hero)));

console.log(whoIsStronger(hero.getStrength.bind(hero)));
