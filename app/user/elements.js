const el = {
  hotdogMaker: document.forms.hotdogMaker,
  result: document.getElementById('result'),
  select: hotdogMaker.querySelectorAll('select'),
  switch: document.querySelector('.switch').querySelector("input[type=checkbox]"),
  status: document.getElementById('toggleStatus'),
}

module.exports = { el };