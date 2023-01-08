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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAboutUs)\n/* harmony export */ });\n\r\nconst aboutUs = () => {\r\n    function _generateTitle() {\r\n        const titleContainer = document.createElement('div')\r\n        titleContainer.className = 'title-container'\r\n        const p = document.createElement('p')\r\n        p.innerHTML = 'About Us'\r\n        titleContainer.appendChild(p)\r\n        return titleContainer;\r\n    }\r\n\r\n    function _generateDescription() {\r\n        const descContainer = document.createElement('div')\r\n        descContainer.className = 'desc-container'\r\n        const p = document.createElement('p')\r\n        p.innerHTML = `Welcome to Zach's Burger Shack where we make every burger with sheer care and absolute passion. \r\n       <br><br>\r\n        We ensure you that every bite will be so delightful, that it makes you want to take another one.`\r\n        descContainer.appendChild(p)\r\n        return descContainer;\r\n    }\r\n\r\n    function generateAboutUs() {\r\n        const container = document.createElement('div')\r\n        container.appendChild(_generateTitle())\r\n        container.appendChild(_generateDescription())\r\n        container.className = 'about-us-container'\r\n        return container;\r\n    }\r\n\r\n    return generateAboutUs();\r\n}\r\n\r\nfunction loadAboutUs() {\r\n    //wipe out page content before injecting new content\r\n    document.getElementById('content').innerHTML = ''\r\n    document.getElementById('content').append(aboutUs())\r\n}   \r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _openingHours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openingHours */ \"./src/openingHours.js\");\n\r\n\r\n\r\nconst homePage = () => {\r\n    function _generateName() {\r\n        const restaurantName = document.createElement('div')\r\n        restaurantName.className = 'restaurant-name'\r\n        restaurantName.innerHTML = `Zach's Burger Shack`\r\n\r\n        return restaurantName\r\n    }\r\n\r\n    function _generateLogo() {\r\n        const restaurantLogo = document.createElement('img')\r\n        restaurantLogo.className = 'logo'\r\n        restaurantLogo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;\r\n        restaurantLogo.alt = 'restaurant logo'\r\n        return restaurantLogo;\r\n    }\r\n\r\n    function _generateDescription() {\r\n        const restaurantDescription = document.createElement('div')\r\n        restaurantDescription.className = 'restaurant-description'\r\n        const p1 = document.createElement('p')\r\n        p1.className = 'best-burgers-sentence'\r\n        p1.innerHTML = 'The <span id=\"best\">best</span> burgers in town!'\r\n        const p2 = document.createElement('p')\r\n        p2.className = 'warning'\r\n        p2.innerHTML = 'Warning: our burgers are highly addictive.'\r\n        restaurantDescription.append(p1, p2)\r\n        return restaurantDescription;\r\n    }\r\n\r\n    function _generateOpenHours() {\r\n        const openHours = document.createElement('div')\r\n        openHours.className = 'opening-hours'\r\n        openHours.innerHTML = _openingHours__WEBPACK_IMPORTED_MODULE_1__.openingHours;\r\n        return openHours;\r\n    }\r\n\r\n    function generateHomePage() {\r\n        const container = document.createElement('div')\r\n        container.className = 'homepage-container'\r\n        container.appendChild(_generateName())\r\n        container.appendChild(_generateLogo())\r\n        container.appendChild(_generateDescription())\r\n        container.appendChild(_generateOpenHours())\r\n        return container\r\n    }\r\n\r\n    return generateHomePage();\r\n}\r\n\r\nfunction loadHomePage() {\r\n    //wipe out page content before injecting new content\r\n    document.getElementById('content').innerHTML = ''\r\n    document.querySelector('#content').appendChild(homePage())\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _assets_background_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/background.jpg */ \"./src/assets/background.jpg\");\n\r\n\r\n\r\n\r\n\r\ndocument.body.style.backgroundImage = `url(${_assets_background_jpg__WEBPACK_IMPORTED_MODULE_3__})`;\r\n\r\nfunction setNavIndicator(navElement) {\r\n    navElement.style.borderBottom = '2px solid white'\r\n}\r\nfunction removeNavIndicators(...args) {\r\n    args.forEach((element) => {\r\n        element.style.borderBottom = 'none'\r\n    })\r\n}\r\n\r\nconst homepageNav = document.querySelector('.homepage')\r\nconst menuNav = document.querySelector('.menu')\r\nconst aboutUsNav = document.querySelector('.about-us')\r\n\r\nhomepageNav.addEventListener('click', () => {\r\n    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    setNavIndicator(homepageNav)\r\n    removeNavIndicators(menuNav, aboutUsNav)\r\n});\r\n\r\nmenuNav.addEventListener('click', () => {\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    setNavIndicator(menuNav)\r\n    removeNavIndicators(homepageNav, aboutUsNav)\r\n})\r\n\r\naboutUsNav.addEventListener('click', () => {\r\n    ;(0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    setNavIndicator(aboutUsNav)\r\n    removeNavIndicators(menuNav, homepageNav)\r\n})\r\n\r\nconst initializeWebsite = (() => {\r\n    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    setNavIndicator(homepageNav)\r\n    // loadMenu();\r\n    // loadAboutUs();\r\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/burger.jpg */ \"./src/assets/burger.jpg\");\n/* harmony import */ var _assets_deluxe_burger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/deluxe_burger.jpg */ \"./src/assets/deluxe_burger.jpg\");\n/* harmony import */ var _assets_cheese_mania_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/cheese_mania.jpg */ \"./src/assets/cheese_mania.jpg\");\n\r\n\r\n\r\n\r\nconst makeMenuContainer = () => {\r\n    const menuContainer = document.createElement('div')\r\n    menuContainer.className = 'menu-container'\r\n    return menuContainer;\r\n}\r\n\r\nconst makeMenuItem = (image, description) => {\r\n    function _generateItemContainer() {\r\n        const itemContainer = document.createElement('div')\r\n        itemContainer.className = 'item-container'\r\n        return itemContainer;\r\n    }\r\n\r\n    function _generateDishDesc() {\r\n        const dishDescription = document.createElement('div')\r\n        dishDescription.className = 'dish-description'\r\n        const p = document.createElement('p')\r\n        p.innerHTML = description;\r\n        dishDescription.appendChild(p)\r\n        return dishDescription;\r\n    }\r\n\r\n    function _generateDishImg() {\r\n        const dishImage = document.createElement('img')\r\n        dishImage.src = image;\r\n        return dishImage;\r\n    }\r\n\r\n    function generateMenuItem() {\r\n        const menuItem = _generateItemContainer();\r\n        menuItem.appendChild(_generateDishDesc())\r\n        menuItem.appendChild(_generateDishImg())\r\n        return menuItem;\r\n    }\r\n    return generateMenuItem();\r\n}\r\n\r\nfunction loadMenu() {\r\n    const normalBurger = makeMenuItem(_assets_burger_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Classic burger and fries. <br> <br> It can never go wrong with this one. <br> <br> CHF 18.00');\r\n    const deluxeBurger = makeMenuItem(_assets_deluxe_burger_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Burger deluxe with our finest Wagyu beef. <br> <br> Burger patty topped with cheddar cheese and truffles. <br> <br> CHF 28.00')\r\n    const cheeseMania = makeMenuItem(_assets_cheese_mania_jpg__WEBPACK_IMPORTED_MODULE_2__, 'A cheese mania! Perfect for cheese lovers (like me). <br> <br> CHF 22.00')\r\n\r\n    const menuContainer = makeMenuContainer();\r\n    menuContainer.append(normalBurger, deluxeBurger, cheeseMania)\r\n\r\n    //wipe out page content before injecting new content\r\n    document.getElementById('content').innerHTML = ''\r\n    document.getElementById('content').append(menuContainer)\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/openingHours.js":
/*!*****************************!*\
  !*** ./src/openingHours.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openingHours\": () => (/* binding */ openingHours)\n/* harmony export */ });\nlet openingHours = `<table>\r\n<tbody>\r\n    <tr>\r\n        <td>Monday</td>\r\n        <td>09:00 - 17:00</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Tuesday</td>\r\n        <td>09:00 - 17:00</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Wednesday</td>\r\n        <td>09:00 - 17:00</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Thursday</td>\r\n        <td>09:00 - 17:00</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Friday</td>\r\n        <td>09:00 - 17:00</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Saturday</td>\r\n        <td>13:00 - 17:00</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Sunday</td>\r\n        <td>Closed, sorry</td>\r\n    </tr>\r\n</tbody>\r\n</table>`\n\n//# sourceURL=webpack://restaurant-page/./src/openingHours.js?");

/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"23062a982295605ede38.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/background.jpg?");

/***/ }),

/***/ "./src/assets/burger.jpg":
/*!*******************************!*\
  !*** ./src/assets/burger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f9254f9d5d581528348d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/burger.jpg?");

/***/ }),

/***/ "./src/assets/cheese_mania.jpg":
/*!*************************************!*\
  !*** ./src/assets/cheese_mania.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d714b86d4fed0dcde241.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cheese_mania.jpg?");

/***/ }),

/***/ "./src/assets/deluxe_burger.jpg":
/*!**************************************!*\
  !*** ./src/assets/deluxe_burger.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54d7ca3f4107c6610f42.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/deluxe_burger.jpg?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"040e476f7d27bf4ac10f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/logo.png?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "http://localhost:8081/";
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