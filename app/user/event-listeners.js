let { el } = require('./elements');

let event = () => {
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
}

module.exports = { event };