/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ContactLoad.js":
/*!****************************!*\
  !*** ./src/ContactLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactLoad\": () => (/* binding */ contactLoad)\n/* harmony export */ });\nconst contactLoad = () => {\n    const container = document.querySelector('.container');\n    container.innerHTML = '';\n\n    const title = document.createElement('h1');\n    title.textContent = 'Wish to Contact Us?'\n    title.classList.add('title');\n    container.appendChild(title);\n\n    const chefContact = document.createElement('p');\n    chefContact.textContent = 'Sam Fisher';\n    chefContact.classList.add('intro');\n    container.appendChild(chefContact);\n\n    const chefImg = new Image();\n    chefImg.src = \"img/chef.jpg\";\n    chefImg.classList.add('images');\n    container.appendChild(chefImg);\n\n    const managerContact = document.createElement('p');\n    managerContact.textContent = 'Rick Dollar';\n    managerContact.classList.add('intro');\n    container.appendChild(managerContact);\n\n    const managerImg = new Image();\n    managerImg.src = \"img/manager.jpg\";\n    managerImg.classList.add('images');\n    container.appendChild(managerImg);\n\n    const waiterContact = document.createElement('p');\n    waiterContact.textContent = 'José Armando';\n    waiterContact.classList.add('intro');\n    container.appendChild(waiterContact);\n\n    const waiterImg = new Image();\n    waiterImg.src = \"img/waiter.jpg\";\n    waiterImg.classList.add('images');\n    container.appendChild(waiterImg);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/ContactLoad.js?");

/***/ }),

/***/ "./src/HomeLoad.js":
/*!*************************!*\
  !*** ./src/HomeLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeLoad\": () => (/* binding */ homeLoad)\n/* harmony export */ });\nconst homeLoad = () => {\n    const container = document.querySelector('.container');\n    container.innerHTML = '';\n\n    const title = document.createElement('h1');\n    title.textContent = 'Welcome to Our Restaurant!'\n    title.classList.add('title');\n    container.appendChild(title);\n\n    const kidImg = new Image();\n    kidImg.src = \"img/front.jpg\";\n    kidImg.classList.add('images');\n    container.appendChild(kidImg);\n\n    const intro = document.createElement('p');\n    intro.textContent = 'We are pleased to see you visiting our website! If you are hungry, you have come to the perfect place. Our meals are the best in town!';\n    intro.classList.add('intro');\n    container.appendChild(intro);\n\n    const openingHours = document.createElement('h2');\n    openingHours.textContent = 'Opening Hours';\n    openingHours.classList.add('open');\n    container.appendChild(openingHours);\n    const monday = document.createElement('p');\n    monday.textContent = 'Monday: 11:00 - 23:00';\n    monday.classList.add('open');\n    container.appendChild(monday);\n    const tuesday = document.createElement('p');\n    tuesday.textContent = 'Tuesday: 11:00 - 23:00';\n    tuesday.classList.add('open');\n    container.appendChild(tuesday);\n    const wednesday = document.createElement('p');\n    wednesday.textContent = 'Wednesday: 11:00 - 23:00';\n    wednesday.classList.add('open');\n    container.appendChild(wednesday);\n    const thursday = document.createElement('p');\n    thursday.textContent = 'Thursday: 11:00 - 23:00';\n    thursday.classList.add('open');\n    container.appendChild(thursday);\n    const friday = document.createElement('p');\n    friday.textContent = 'Friday: 10:00 - 02:00';\n    friday.classList.add('open');\n    container.appendChild(friday);\n    const saturday = document.createElement('p');\n    saturday.textContent = 'Saturday: 12:00 - 02:00';\n    saturday.classList.add('open');\n    container.appendChild(saturday);\n    const sunday = document.createElement('p');\n    sunday.textContent = 'Sunday: 12:00 - 23:00';\n    sunday.classList.add('open');\n    container.appendChild(sunday);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/HomeLoad.js?");

/***/ }),

/***/ "./src/MenuLoad.js":
/*!*************************!*\
  !*** ./src/MenuLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuLoad\": () => (/* binding */ menuLoad)\n/* harmony export */ });\nconst menuLoad = () => {\n    const container = document.querySelector('.container');\n    container.innerHTML = '';\n\n    const title = document.createElement('h1');\n    title.textContent = 'Our Delicious Menu'\n    title.classList.add('title');\n    container.appendChild(title);\n\n    const burgerTitle = document.createElement('p');\n    burgerTitle.textContent = 'The Burger of the Gods';\n    burgerTitle.classList.add('intro');\n    container.appendChild(burgerTitle);\n\n    const burgerImg = new Image();\n    burgerImg.src = \"img/burger.jpg\";\n    burgerImg.classList.add('images');\n    container.appendChild(burgerImg);\n\n    const lasagneTitle = document.createElement('p');\n    lasagneTitle.textContent = 'Lasagne from Mamma';\n    lasagneTitle.classList.add('intro');\n    container.appendChild(lasagneTitle);\n\n    const lasagneImg = new Image();\n    lasagneImg.src = \"img/lasagne.jpg\";\n    lasagneImg.classList.add('images');\n    container.appendChild(lasagneImg);\n\n    const sushiTitle = document.createElement('p');\n    sushiTitle.textContent = 'Sushi from the Mysterious Depths';\n    sushiTitle.classList.add('intro');\n    container.appendChild(sushiTitle);\n\n    const sushiImg = new Image();\n    sushiImg.src = \"img/sushi.jpg\";\n    sushiImg.classList.add('images');\n    container.appendChild(sushiImg);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/MenuLoad.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HomeLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeLoad */ \"./src/HomeLoad.js\");\n/* harmony import */ var _MenuLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuLoad */ \"./src/MenuLoad.js\");\n/* harmony import */ var _ContactLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactLoad */ \"./src/ContactLoad.js\");\n\n\n\n\nconst baseLoad = (() => {\n    const content = document.querySelector('#content');\n    const nav = document.createElement('div');\n    nav.classList.add('navigation');\n    content.appendChild(nav);\n\n    const navHome = document.createElement('div');\n    navHome.textContent = 'Home';\n    navHome.classList.add('navigation-item');\n    nav.appendChild(navHome);\n    navHome.addEventListener('click', _HomeLoad__WEBPACK_IMPORTED_MODULE_0__.homeLoad);\n\n    const navMenu = document.createElement('div');\n    navMenu.textContent = 'Menu';\n    navMenu.classList.add('navigation-item');\n    nav.appendChild(navMenu);\n    navMenu.addEventListener('click', _MenuLoad__WEBPACK_IMPORTED_MODULE_1__.menuLoad);\n\n    const navContact = document.createElement('div');\n    navContact.textContent = 'Contact';\n    navContact.classList.add('navigation-item');\n    nav.appendChild(navContact);\n    navContact.addEventListener('click', _ContactLoad__WEBPACK_IMPORTED_MODULE_2__.contactLoad);\n\n    const container = document.createElement('div');\n    container.classList.add('container');\n    content.appendChild(container);\n    (0,_HomeLoad__WEBPACK_IMPORTED_MODULE_0__.homeLoad)();\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;