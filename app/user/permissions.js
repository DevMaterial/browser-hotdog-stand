const { generateUserTemplate } = require('./render-menu');
const { el } = require('./elements');
const { listeners } = require('./event-listeners');

const checkSwitch = () => {
  if (el.switch.checked) {
    el.user.style.display = "none";
    el.admin.style.display = "flex";
  } else {
    el.admin.style.display = "none";
    el.user.style.display = "flex";
  }
}

const role = () => {
  el.switch.addEventListener('change', () => {
    checkSwitch();
  });
}

module.exports = { checkSwitch, role };