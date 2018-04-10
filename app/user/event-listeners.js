const { el } = require('./elements');
const { helpers } = require('./helpers');

const listeners = {

  hotdogMaker: () => {
    el.hotdogMaker.addEventListener('change', () => {
      helpers.updateIngredients();
      helpers.bind();
    });
    
    el.hotdogMaker.addEventListener('submit', (e) => {
      e.preventDefault();
      helpers.orderResult();
    });
  },
}

module.exports = { listeners };