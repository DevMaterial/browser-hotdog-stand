let data = require('./data.json');
let { generateUserTemplate } = require('./user/render-menu');
let listeners = require('./user/event-listeners');
let { el } = require('./user/elements');
// let { updateIngredients } = require('./user/helpers');

let status = document.getElementById('toggleStatus');
let ingredients = [...el.select, ...el.hotdogMaker.querySelectorAll('input:checked')];

let hotdog = data.food.hotdog

let bind = () => {
  // let i = this[option];
  // document.querySelector(`#preview > ul > [name="${i.name}"]`).innerHTML = this[option].map(c => c.value);
  document.querySelector('#preview > .order > ul > [name="meat"]').innerHTML = ingredients[0].value;
  document.querySelector('#preview > .order > ul > [name="bun"]').innerHTML = ingredients[1].value;
  document.querySelector('#preview > .order > ul > [name="condiments"]').innerHTML = ingredients.slice(2).map(c => c.value).join(', ');
}

let orderResult = () => {
  result.innerHTML = `Your order of a ${ingredients[0].value} hotdog on a ${ingredients[1].value} bun topped off with ${ingredients.slice(2).map(c => c.value).join(', ')} is coming up!`;
}

let updateIngredients = () => {
  ingredients = [...el.select, ...el.hotdogMaker.querySelectorAll('input:checked')];
}

el.hotdogMaker.addEventListener('change', () => {
  updateIngredients();
  bind();
});

el.hotdogMaker.addEventListener('submit', (e) => {
  e.preventDefault();
  orderResult();
});

let userOrAdmin = () => {
  if (el.switch.checked) {
    status.innerHTML = '';
  } else {
    status.innerHTML = '';
    generateUserTemplate();
  }
}

el.switch.addEventListener('change', () => {
  userOrAdmin();
});