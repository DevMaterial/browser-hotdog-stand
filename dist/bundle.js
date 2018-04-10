/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/data.json":
/*!***********************!*\
  !*** ./app/data.json ***!
  \***********************/
/*! exports provided: food, default */
/***/ (function(module) {

eval("module.exports = {\"food\":{\"hotdog\":[{\"meat\":[{\"type\":\"select\"},\"beef\",\"sausage\"]},{\"bun\":[{\"type\":\"select\"},\"regular\",\"sourdough\",\"gluten-free\"]},{\"condiments\":[{\"type\":\"checkbox\"},\"ketchup\",\"mustard\",\"relish\",\"onions\"]}]}};\n\n//# sourceURL=webpack:///./app/data.json?");

/***/ }),

/***/ "./app/script.js":
/*!***********************!*\
  !*** ./app/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const data = __webpack_require__(/*! ./data.json */ \"./app/data.json\");\nconst { generateUserTemplate } = __webpack_require__(/*! ./user/render-menu */ \"./app/user/render-menu.js\");\nconst { el } = __webpack_require__(/*! ./user/elements */ \"./app/user/elements.js\");\nconst { listeners } = __webpack_require__(/*! ./user/event-listeners */ \"./app/user/event-listeners.js\");\nconst { checkSwitch, role } = __webpack_require__(/*! ./user/permissions */ \"./app/user/permissions.js\");\n\nlet ingredients = [...el.select, ...el.hotdogMaker.querySelectorAll('input:checked')];\n\n(initialize => {\n  listeners.hotdogMaker();\n  role();\n})();\n\n//# sourceURL=webpack:///./app/script.js?");

/***/ }),

/***/ "./app/user/elements.js":
/*!******************************!*\
  !*** ./app/user/elements.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const el = {\n  hotdogMaker: document.forms.hotdogMaker,\n  result: document.getElementById('result'),\n  select: hotdogMaker.querySelectorAll('select'),\n  switch: document.querySelector('.switch').querySelector(\"input[type=checkbox]\"),\n  status: document.getElementById('toggleStatus'),\n}\n\nmodule.exports = { el };\n\n//# sourceURL=webpack:///./app/user/elements.js?");

/***/ }),

/***/ "./app/user/event-listeners.js":
/*!*************************************!*\
  !*** ./app/user/event-listeners.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { el } = __webpack_require__(/*! ./elements */ \"./app/user/elements.js\");\nconst { helpers } = __webpack_require__(/*! ./helpers */ \"./app/user/helpers.js\");\n\nconst listeners = {\n\n  hotdogMaker: () => {\n    el.hotdogMaker.addEventListener('change', () => {\n      helpers.updateIngredients();\n      helpers.bind();\n    });\n    \n    el.hotdogMaker.addEventListener('submit', (e) => {\n      e.preventDefault();\n      helpers.orderResult();\n    });\n  },\n}\n\nmodule.exports = { listeners };\n\n//# sourceURL=webpack:///./app/user/event-listeners.js?");

/***/ }),

/***/ "./app/user/helpers.js":
/*!*****************************!*\
  !*** ./app/user/helpers.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { generateUserTemplate } = __webpack_require__(/*! ./render-menu */ \"./app/user/render-menu.js\");\nconst { el } = __webpack_require__(/*! ./elements */ \"./app/user/elements.js\");\n\nlet helpers = {\n  bind: () => {\n    // let i = this[option];\n    // document.querySelector(`#preview > ul > [name=\"${i.name}\"]`).innerHTML = this[option].map(c => c.value);\n    document.querySelector('#preview > .order > ul > [name=\"meat\"]').innerHTML = ingredients[0].value;\n    document.querySelector('#preview > .order > ul > [name=\"bun\"]').innerHTML = ingredients[1].value;\n    document.querySelector('#preview > .order > ul > [name=\"condiments\"]').innerHTML = ingredients.slice(2).map(c => c.value).join(', ');\n  },\n\n  updateIngredients: () => {\n    ingredients = [...el.select, ...el.hotdogMaker.querySelectorAll('input:checked')];\n  },\n  \n  orderResult: () => {\n    result.innerHTML = `Your order of a ${ingredients[0].value} \n                        hotdog on a ${ingredients[1].value} \n                        bun topped off with ${ingredients.slice(2).map(c => c.value).join(', ')} is coming up!`;\n  },\n}\n\nmodule.exports = { helpers };\n\n//# sourceURL=webpack:///./app/user/helpers.js?");

/***/ }),

/***/ "./app/user/permissions.js":
/*!*********************************!*\
  !*** ./app/user/permissions.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { generateUserTemplate } = __webpack_require__(/*! ./render-menu */ \"./app/user/render-menu.js\");\nconst { el } = __webpack_require__(/*! ./elements */ \"./app/user/elements.js\");\nconst { listeners } = __webpack_require__(/*! ./event-listeners */ \"./app/user/event-listeners.js\");\n\nconst checkSwitch = () => {\n  if (el.switch.checked) {\n    el.status.innerHTML = '';\n  } else {\n    el.status.innerHTML = '';\n    generateUserTemplate();\n    listeners.hotdogMaker();\n  }\n}\n\nconst role = () => {\n  el.switch.addEventListener('change', () => {\n    checkSwitch();\n  });\n}\n\nmodule.exports = { checkSwitch, role };\n\n//# sourceURL=webpack:///./app/user/permissions.js?");

/***/ }),

/***/ "./app/user/render-menu.js":
/*!*********************************!*\
  !*** ./app/user/render-menu.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let data = __webpack_require__(/*! ../data.json */ \"./app/data.json\");\nlet hotdog = data.food.hotdog\nlet status = document.getElementById('toggleStatus');\n\nlet generateUserTemplate = () => {\n  var container = document.createElement('div');\n    container.className = \"container\";\n    status.appendChild(container);\n\nvar form = document.createElement('form');\n    form.id = \"hotdogMaker\";\n    form.autocomplete = \"off\";\n    container.appendChild(form);\n\nvar preview = document.createElement('div');\n    preview.id = \"preview\";\n    container.appendChild(preview);\n\nvar order = document.createElement('div');\n    order.className = \"order\";\n    preview.appendChild(order);\n\nvar h2 = document.createElement('h2');\n    h2.innerHTML = \"Preview\";\n    order.appendChild(h2);\n\nvar ul = document.createElement('ul');\n    hotdog.forEach((h, i) => { \n      for (var key in h) { \n        var li = document.createElement('li');\n            li.setAttribute('name', key);\n            ul.appendChild(li); \n      } \n    });\n    order.appendChild(ul);\n\nvar div = document.createElement('div');\n    div.id = \"result\";\n    status.appendChild(div);\n\nlet dogMaker = document.forms.hotdogMaker;\n\nhotdog.forEach((h, i) => {\n  for (var key in h) {\n    // console.log(i, key, h[key]);\n    var div = document.createElement('div');\n    div.className = key;\n\n    var h2 = document.createElement('h2');\n    h2.innerHTML = key;\n    div.appendChild(h2);\n\n    if (h[key][0].type === \"select\") {\n      var select = document.createElement('select');\n      select.name = key;\n      div.appendChild(select);\n\n      h[key].forEach((x) => {\n        var type = h[key][0].type;\n  \n        if (typeof x !== 'object') {\n          var option = document.createElement('option');\n              option.value = x\n              option.innerHTML = x;\n  \n          var br = document.createElement('br');\n\n          select.appendChild(option);\n          div.appendChild(br);\n        }\n      });\n    } else {\n      h[key].forEach((x) => {\n        var type = h[key][0].type;\n  \n        if (typeof x !== 'object') {\n          var input = document.createElement('input');\n              input.type = type;\n              input.name = key;\n              input.value = x;\n  \n          var label = document.createElement('label');\n              label.setAttribute('for', x);\n              label.innerHTML += x;\n  \n          var br = document.createElement('br');\n  \n          div.appendChild(input);\n          div.appendChild(label);\n          div.appendChild(br);\n        }\n      });\n    }\n\n    dogMaker.appendChild(div);\n    // console.log(div);\n  }\n});\n\nlet submit = document.createElement('input');\n    submit.type = 'submit';\n    submit.value = 'submit';\n    dogMaker.appendChild(submit);\n}\n\ngenerateUserTemplate();\n\nmodule.exports = { generateUserTemplate };\n\n//# sourceURL=webpack:///./app/user/render-menu.js?");

/***/ })

/******/ });