let data = require('./data.json');
// let menu = require('./user/render-menu');
let { generateUserTemplate } = require('./user/render-menu');
let listeners = require('./user/event-listeners');

let { el } = require('./user/elements');
// let { updateIngredients } = require('./user/helpers');

let status = document.getElementById('toggleStatus');
let ingredients = [...el.select, ...el.hotdogMaker.querySelectorAll('input:checked')];

let hotdog = data.food.hotdog

class Hotdog {
  constructor(ingredients) {
    this.hotdog = ingredients[0];
    this.bun = ingredients[1];
    this.condiments = ingredients.slice(2);
  }

  bind() {
    // let i = this[option];
    // document.querySelector(`#preview > ul > [name="${i.name}"]`).innerHTML = this[option].map(c => c.value);
    document.querySelector('#preview > .order > ul > [name="meat"]').innerHTML = this.hotdog.value;
    document.querySelector('#preview > .order > ul > [name="bun"]').innerHTML = this.bun.value;
    document.querySelector('#preview > .order > ul > [name="condiments"]').innerHTML = this.condiments.map(c => c.value).join(', ');
  }

  orderResult() {
    result.innerHTML = `Your order of a ${this.hotdog.value} hotdog on a ${this.bun.value} bun topped off with ${this.condiments.map(c => c.value).join(', ')} is coming up!`;
  }

  initialize() {
    this.bind();
  }
}

let updateIngredients = () => {
  ingredients = [...el.select, ...el.hotdogMaker.querySelectorAll('input:checked')];
}

let newOrder;

el.hotdogMaker.addEventListener('change', () => {
  updateIngredients();
  newOrder = new Hotdog(ingredients)
  newOrder.initialize();
});

el.hotdogMaker.addEventListener('submit', (e) => {
  e.preventDefault();
  newOrder = new Hotdog(ingredients);
  newOrder.orderResult();
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