const { generateUserTemplate } = require('./render-menu');
const { el } = require('./elements');

let helpers = {
  bind: () => {
    // let i = this[option];
    // document.querySelector(`#preview > ul > [name="${i.name}"]`).innerHTML = this[option].map(c => c.value);
    document.querySelector('#preview > .order > ul > [name="meat"]').innerHTML = ingredients[0].value;
    document.querySelector('#preview > .order > ul > [name="bun"]').innerHTML = ingredients[1].value;
    document.querySelector('#preview > .order > ul > [name="condiments"]').innerHTML = ingredients.slice(2).map(c => c.value).join(', ');
  },

  updateIngredients: () => {
    ingredients = [...el.select, ...el.hotdogMaker.querySelectorAll('input:checked')];
  },
  
  orderResult: () => {
    result.innerHTML = `Your order of a ${ingredients[0].value} 
                        hotdog on a ${ingredients[1].value} 
                        bun topped off with ${ingredients.slice(2).map(c => c.value).join(', ')} is coming up!`;
  },
}

module.exports = { helpers };