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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./myapp/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./myapp/app.js":
/*!**********************!*\
  !*** ./myapp/app.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ \"./myapp/styles/app.scss\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_refinery3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/refinery3.jpg */ \"./myapp/images/refinery3.jpg\");\n/* harmony import */ var _images_refinery4_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/refinery4.jpg */ \"./myapp/images/refinery4.jpg\");\n/* harmony import */ var _images_taladro1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/taladro1.jpg */ \"./myapp/images/taladro1.jpg\");\n/* harmony import */ var _images_img_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/img_1.jpg */ \"./myapp/images/img_1.jpg\");\n/* harmony import */ var _images_img_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/img_2.jpg */ \"./myapp/images/img_2.jpg\");\n/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/logo.jpg */ \"./myapp/images/logo.jpg\");\n/* harmony import */ var _images_logo_1_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/logo_1.jpg */ \"./myapp/images/logo_1.jpg\");\n/* harmony import */ var _images_pozo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/pozo.png */ \"./myapp/images/pozo.png\");\n/* harmony import */ var _images_t5_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/t5.jpg */ \"./myapp/images/t5.jpg\");\n/* harmony import */ var _images_refinery1_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/refinery1.jpg */ \"./myapp/images/refinery1.jpg\");\n/* harmony import */ var _images_refinery2_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/refinery2.jpg */ \"./myapp/images/refinery2.jpg\");\n/* harmony import */ var _images_img_contact_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/img-contact.jpg */ \"./myapp/images/img-contact.jpg\");\n/* harmony import */ var _images_producto_quimico_2_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/producto_quimico-2.jpg */ \"./myapp/images/producto_quimico-2.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./myapp/app.js?");

/***/ }),

/***/ "./myapp/images/img-contact.jpg":
/*!**************************************!*\
  !*** ./myapp/images/img-contact.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/img-contact.jpg\");\n\n//# sourceURL=webpack:///./myapp/images/img-contact.jpg?");

/***/ }),

/***/ "./myapp/images/img_1.jpg":
/*!********************************!*\
  !*** ./myapp/images/img_1.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/img_1.jpg\");\n\n//# sourceURL=webpack:///./myapp/images/img_1.jpg?");

/***/ }),

/***/ "./myapp/images/img_2.jpg":
/*!********************************!*\
  !*** ./myapp/images/img_2.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/img_2.jpg\");\n\n//# sourceURL=webpack:///./myapp/images/img_2.jpg?");

/***/ }),

/***/ "./myapp/images/logo.jpg":
/*!*******************************!*\
  !*** ./myapp/images/logo.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/logo.jpg\");\n\n//# sourceURL=webpack:///./myapp/images/logo.jpg?");

/***/ }),

/***/ "./myapp/images/logo_1.jpg":
/*!*********************************!*\
  !*** ./myapp/images/logo_1.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/logo_1.jpg\");\n\n//# sourceURL=webpack:///./myapp/images/logo_1.jpg?");

/***/ }),

/***/ "./myapp/images/pozo.png":
/*!*******************************!*\
  !*** ./myapp/images/pozo.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/pozo.png\");\n\n//# sourceURL=webpack:///./myapp/images/pozo.png?");

/***/ }),

/***/ "./myapp/images/producto_quimico-2.jpg":
/*!*********************************************!*\
  !*** ./myapp/images/producto_quimico-2.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/producto_quimico-2.jpg\");\n\n//# sourceURL=webpack:///./myapp/images/producto_quimico-2.jpg?");

/***/ }),

/***/ "./myapp/images/refinery1.jpg":
/*!************************************!*\
  !*** ./myapp/images/refinery1.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/refinery1.jpg\");\n\n//# sourceURL=webpack:///./myapp/images/refinery1.jpg?");

/***/ }),

/***/ "./myapp/images/refinery2.jpg":
/*!************************************!*\
  !*** ./myapp/images/refinery2.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/refinery2.jpg\");\n\n//# sourceURL=webpack:///./myapp/images/refinery2.jpg?");

/***/ }),

/***/ "./myapp/images/refinery3.jpg":
/*!************************************!*\
  !*** ./myapp/images/refinery3.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/refinery3.jpg\");\n\n//# sourceURL=webpack:///./myapp/images/refinery3.jpg?");

/***/ }),

/***/ "./myapp/images/refinery4.jpg":
/*!************************************!*\
  !*** ./myapp/images/refinery4.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/refinery4.jpg\");\n\n//# sourceURL=webpack:///./myapp/images/refinery4.jpg?");

/***/ }),

/***/ "./myapp/images/t5.jpg":
/*!*****************************!*\
  !*** ./myapp/images/t5.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/t5.jpg\");\n\n//# sourceURL=webpack:///./myapp/images/t5.jpg?");

/***/ }),

/***/ "./myapp/images/taladro1.jpg":
/*!***********************************!*\
  !*** ./myapp/images/taladro1.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/taladro1.jpg\");\n\n//# sourceURL=webpack:///./myapp/images/taladro1.jpg?");

/***/ }),

/***/ "./myapp/styles/app.scss":
/*!*******************************!*\
  !*** ./myapp/styles/app.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./myapp/styles/app.scss?");

/***/ })

/******/ });