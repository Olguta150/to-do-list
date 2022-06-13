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

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewProjectPopUp\": () => (/* binding */ addNewProjectPopUp)\n/* harmony export */ });\n/* harmony import */ var _windowsDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./windowsDOM */ \"./src/windowsDOM.js\");\n\n\nfunction addNewProjectPopUp() {\n    const addNewProject = document.querySelector('.add-new-project-btn');\n\n    addNewProject.addEventListener('click', _windowsDOM__WEBPACK_IMPORTED_MODULE_0__.newProject);\n}\n\n//# sourceURL=webpack://to-do-list/./src/eventListeners.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\n\n(0,_eventListeners__WEBPACK_IMPORTED_MODULE_0__.addNewProjectPopUp)();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/windowsDOM.js":
/*!***************************!*\
  !*** ./src/windowsDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProject\": () => (/* binding */ newProject)\n/* harmony export */ });\nfunction newProject() {\n    const container = document.querySelector('.container');\n\n    const darkBackground = document.createElement('div');\n    darkBackground.classList.add('dark-background');\n    container.appendChild(darkBackground);\n\n    const newProjectContainer = document.createElement('div');\n    newProjectContainer.classList.add('new-project-container');\n    container.appendChild(newProjectContainer);\n\n    const newField = document.createElement('div');\n    newField.classList.add('new-field');\n    newProjectContainer.appendChild(newField);\n    \n    const newLabel  = document.createElement('label');\n    newLabel.setAttribute('for', 'name');\n    newLabel.innerHTML = 'Name:';\n    newField.appendChild(newLabel);\n    \n    const newInput = document.createElement('input');\n    newInput.setAttribute('type', 'text');\n    newInput.setAttribute('name', 'name');\n    newInput.setAttribute('id', 'name');\n    newField.appendChild(newInput);\n\n    const newBtns = document.createElement('div');\n    newBtns.classList.add('new-btns');\n    newProjectContainer.appendChild(newBtns);\n\n    const addBtn = document.createElement('button');\n    addBtn.classList.add('project-add-btn', 'project-btn');\n    addBtn.textContent = 'Add';\n    newBtns.appendChild(addBtn);\n\n    const cancelBtn = document.createElement('button');\n    cancelBtn.classList.add('project-cancel-btn', 'project-btn');\n    cancelBtn.textContent = 'Cancel';\n    newBtns.appendChild(cancelBtn);\n\n}\n\n//# sourceURL=webpack://to-do-list/./src/windowsDOM.js?");

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