let data = require('./data.json');
let { generateUserTemplate } = require('./user/render-menu');
let { el } = require('./user/elements');
let listeners = require('./user/event-listeners');

console.log(listeners);

let ingredients = [...el.select, ...el.hotdogMaker.querySelectorAll('input:checked')];

(initialize => {
  listeners.hotdogMaker();
  listeners.role();
})();