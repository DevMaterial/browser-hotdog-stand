let data = require('../data.json');
let hotdog = data.food.hotdog
let status = document.getElementById('toggleStatus');

let generateUserTemplate = () => {
  var container = document.createElement('div');
    container.className = "container";
    status.appendChild(container);

var form = document.createElement('form');
    form.id = "hotdogMaker";
    form.autocomplete = "off";
    container.appendChild(form);

var preview = document.createElement('div');
    preview.id = "preview";
    container.appendChild(preview);

var order = document.createElement('div');
    order.className = "order";
    preview.appendChild(order);

var h2 = document.createElement('h2');
    h2.innerHTML = "Preview";
    order.appendChild(h2);

var ul = document.createElement('ul');
    hotdog.forEach((h, i) => { 
      for (var key in h) { 
        var li = document.createElement('li');
            li.setAttribute('name', key);
            ul.appendChild(li); 
      } 
    });
    order.appendChild(ul);

var div = document.createElement('div');
    div.id = "result";
    status.appendChild(div);

let dogMaker = document.forms.hotdogMaker;

hotdog.forEach((h, i) => {
  for (var key in h) {
    // console.log(i, key, h[key]);
    var div = document.createElement('div');
    div.className = key;

    var h2 = document.createElement('h2');
    h2.innerHTML = key;
    div.appendChild(h2);

    if (h[key][0].type === "select") {
      var select = document.createElement('select');
      select.name = key;
      div.appendChild(select);

      h[key].forEach((x) => {
        var type = h[key][0].type;
  
        if (typeof x !== 'object') {
          var option = document.createElement('option');
              option.value = x
              option.innerHTML = x;
  
          var br = document.createElement('br');

          select.appendChild(option);
          div.appendChild(br);
        }
      });
    } else {
      h[key].forEach((x) => {
        var type = h[key][0].type;
  
        if (typeof x !== 'object') {
          var input = document.createElement('input');
              input.type = type;
              input.name = key;
              input.value = x;
  
          var label = document.createElement('label');
              label.setAttribute('for', x);
              label.innerHTML += x;
  
          var br = document.createElement('br');
  
          div.appendChild(input);
          div.appendChild(label);
          div.appendChild(br);
        }
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