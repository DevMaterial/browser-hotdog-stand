const el = {
  hotdogMaker: document.forms.hotdogMaker,
  result: document.getElementById('result'),
  select: hotdogMaker.querySelectorAll('select'),
  user: document.querySelector('.user'),
  admin: document.querySelector('.admin'),
  switch: document.querySelector('.switch').querySelector("input[type=checkbox]"),
  status: document.getElementById('toggleStatus'),
}

module.exports = { el };