let dogMaker = document.forms.hotdogMaker;
let result = document.getElementById('result');

dogMaker.addEventListener('change', () => {
  let ingredients = [...dogMaker.querySelectorAll('input:checked')];

  class Hotdog {
    constructor() {
      this.hotdog = ingredients[0];
      this.bun = ingredients[1];
      this.condiments = ingredients.slice(2);
    }

    bind(option) {
      let i = this[option];
      document.querySelector(`#preview > ul > [name="${i.name}"]`).innerHTML = this[option].map(c => c.value);
    }

    test() {
      console.log([this.hotdog, this.bun, this.condiments]);
      result.innerHTML = `Your order of a ${this.hotdog} hotdog with a ${this.bun} bun topped off with ${this.condiments} is coming up`; 
    }
  }

  document.querySelector('#preview > ul > [name="hotdog"]').innerHTML = ingredients[0].name;
  document.querySelector('#preview > ul > [name="bun"]').innerHTML = ingredients[1].name;
  document.querySelector('#preview > ul > [name="condiments"]').innerHTML = ingredients.slice(2).map(c => c.value);

  let testing = new Hotdog();
  // testing.bind('condiments');
  // testing.test();
})

// dogMaker.addEventListener('submit', (e) => {
//   e.preventDefault();
//   let data = {
//     hotdog: dogMaker.querySelector('input[name="hotdog"]:checked').value,
//     bun: dogMaker.querySelector('input[name="bun"]:checked').value,
//     condiments: [...document.querySelectorAll('input[name="condiments"]:checked')].map(c => c.value),
//   }

//   class Hotdog {
//     constructor() {
//       this.hotdog = data.hotdog;
//       this.bun = data.bun;
//       this.condiments = data.condiments;
//     }

//     test() {
//       console.log([this.hotdog, this.bun, this.condiments]);
//       result.innerHTML = `Your order of a ${this.hotdog} hotdog with a ${this.bun} bun topped off with ${this.condiments} is coming up`; 
//     }
//   }
//   let testing = new Hotdog();
//   testing.test();
// });