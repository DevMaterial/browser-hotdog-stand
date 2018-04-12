let data = require('../data.json');
let hotdog = data.food.hotdog
let status = document.getElementById('toggleStatus');
let dogMaker = document.forms.hotdogMaker;

let generateUserTemplate = () => {
    dogMaker.innerHTML = '';

hotdog.forEach((h, i) => {
  for (var key in h) {
    console.log(i, key, h[key]);
    var div = document.createElement('div');
    div.className = key;

    var h2 = document.createElement('h2');
    h2.innerHTML = key;
    div.appendChild(h2);

    if (h[key].type === "select") {
      var select = document.createElement('select');
      select.name = key;
      div.appendChild(select);

      h[key].options.forEach((x) => {
        var type = h[key].type;
        var name = x.name;

        var option = document.createElement('option');
              option.value = name
              option.innerHTML = name;
  
        var br = document.createElement('br');

          select.appendChild(option);
          div.appendChild(br);
      });
    } else {
      h[key].options.forEach((x) => {
        var type = h[key].type;
        var name = x.name;

        var input = document.createElement('input');
            input.type = type;
            input.name = key;
            input.value = name;
  
        var label = document.createElement('label');
            label.setAttribute('for', name);
            label.innerHTML += name;
  
        var br = document.createElement('br');
  
        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(br);
      });
    }

    dogMaker.appendChild(div);
    // console.log(div);
  }
});

let submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'submit';
    dogMaker.appendChild(submit);
}

generateUserTemplate();

module.exports = { generateUserTemplate };