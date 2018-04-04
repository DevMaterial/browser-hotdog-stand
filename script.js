let dogMaker = document.forms.hotdogMaker;
let result = document.getElementById('result');
let ingredients = [...dogMaker.querySelectorAll('input:checked')];

class Hotdog {
  constructor(ingredients) {
    this.hotdog = ingredients[0];
    this.bun = ingredients[1];
    this.condiments = ingredients.slice(2);
  }

  bind() {
    // let i = this[option];
    // document.querySelector(`#preview > ul > [name="${i.name}"]`).innerHTML = this[option].map(c => c.value);
    document.querySelector('#preview > .order > ul > [name="hotdog"]').innerHTML = ingredients[0].value;
    document.querySelector('#preview > .order > ul > [name="bun"]').innerHTML = ingredients[1].value;
    document.querySelector('#preview > .order > ul > [name="condiments"]').innerHTML = ingredients.slice(2).map(c => c.value).join(', ');
  }

  orderResult() {
    result.innerHTML = `Your order of a ${this.hotdog.value} hotdog on a ${this.bun.value} bun topped off with ${this.condiments.map(c => c.value).join(', ')} is coming up!`;
  }

  initialize() {
    this.bind();
  }
}

let newOrder = new Hotdog(ingredients);

dogMaker.addEventListener('change', () => {
  ingredients = [...dogMaker.querySelectorAll('input:checked')];
  newOrder.initialize();
});

dogMaker.addEventListener('submit', (e) => {
  e.preventDefault();
  newOrder = new Hotdog(ingredients);
  newOrder.orderResult();
});
