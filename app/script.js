const data = require('./data.json');
const { generateUserTemplate } = require('./user/render-menu');
const { el } = require('./user/elements');
const { listeners } = require('./user/event-listeners');
const { checkSwitch, role } = require('./user/permissions');

let ingredients = [...el.select, ...el.hotdogMaker.querySelectorAll('input:checked')];

(initialize => {
  listeners.hotdogMaker();
  role();
})();