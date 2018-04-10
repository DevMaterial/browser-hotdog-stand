const { generateUserTemplate } = require('./render-menu');
const { el } = require('./elements');
const { listeners } = require('./event-listeners');

const checkSwitch = () => {
  if (el.switch.checked) {
    el.status.innerHTML = '';
  } else {
    el.status.innerHTML = '';
    generateUserTemplate();
    listeners.hotdogMaker();
  }
}

const role = () => {
  el.switch.addEventListener('change', () => {
    checkSwitch();
  });
}

module.exports = { checkSwitch, role };