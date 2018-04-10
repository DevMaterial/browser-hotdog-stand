let { el } = require('./elements');
let { helpers } = require('./helpers');

let listeners = {
  hotdogMaker: () => {
    el.hotdogMaker.addEventListener('change', () => {
      console.log('yeet');
      helpers.updateIngredients();
      helpers.bind();
    });
    
    el.hotdogMaker.addEventListener('submit', (e) => {
      e.preventDefault();
      helpers.orderResult();
    });
  },

  role: () => {
    el.switch.addEventListener('change', () => {
      helpers.permissions();
    });
  }
}

module.exports = listeners;