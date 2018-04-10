let { el } = require('./elements');

let updateIngredients = () => {
  ingredients = [...el.select, ...el.hotdogMaker.querySelectorAll('input:checked')];
}

module.exports = { updateIngredients };