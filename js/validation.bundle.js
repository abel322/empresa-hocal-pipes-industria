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
/******/ 	return __webpack_require__(__webpack_require__.s = "./myapp/view/js/validation.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./myapp/view/js/validation.js":
/*!*************************************!*\
  !*** ./myapp/view/js/validation.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var formulario = document.getElementById('form');\nvar inputs = document.querySelectorAll('.form-control');\nvar expresiones = {\n  nombre: /^[a-zA-ZÀ-ÿ\\s]{1,40}$/,\n  // Letras y espacios, pueden llevar acentos.\n  correo: /^(([^<>()\\[\\]\\\\.,:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,\n  telefono: /^\\d{7,14}$/ // 7 a 14 numeros.\n\n};\nvar campos = {\n  nombre: false,\n  correo: false,\n  telefono: false,\n  mensaje: false\n};\n\nvar validarValorInput = function validarValorInput(posicion, expresionName) {\n  if (inputs[posicion].value.trim().length > 0) {\n    if (expresionName.test(inputs[posicion].value)) {\n      inputs[posicion].classList.add('focus');\n      inputs[posicion].classList.remove('error');\n    } else {\n      inputs[posicion].classList.remove('focus');\n      inputs[posicion].classList.add('error');\n    }\n  }\n};\n\nfor (var i = 0; i < inputs.length; i++) {\n  switch (i) {\n    case 0:\n      validarValorInput(0, expresiones.nombre);\n      break;\n\n    case 1:\n      validarValorInput(1, expresiones.correo);\n      break;\n\n    case 2:\n      validarValorInput(2, expresiones.telefono);\n      break;\n  }\n}\n\nvar validarFormulario = function validarFormulario(e) {\n  switch (e.target.name) {\n    case \"nombre\":\n      validarCampo(expresiones.nombre, e.target, 0, 'nombre');\n      break;\n\n    case \"correo\":\n      validarCampo(expresiones.correo, e.target, 1, 'correo');\n      break;\n\n    case \"telefono\":\n      validarCampo(expresiones.telefono, e.target, 2, 'telefono');\n      break;\n  }\n};\n\nvar validarCampo = function validarCampo(expresion, input, key, campo) {\n  if (inputs[key].value.trim().length > 0) {\n    campos[campo] = true;\n\n    if (expresion.test(input.value)) {\n      inputs[key].classList.add('focus');\n      inputs[key].classList.remove('error');\n    } else {\n      inputs[key].classList.remove('focus');\n      inputs[key].classList.add('error');\n    }\n  } else {\n    campos[campo] = false;\n    inputs[key].classList.remove('error');\n    inputs[key].classList.add('focus');\n  }\n};\n\ninputs.forEach(function (input) {\n  input.addEventListener('keyup', validarFormulario);\n  input.addEventListener('blur', validarFormulario);\n  input.addEventListener('mouseenter', validarFormulario);\n});\nformulario.addEventListener('submit', function (e) {\n  e.preventDefault();\n\n  if (campos.nombre && campos.correo && campos.telefono) {\n    formulario.reset();\n    document.getElementById('message-sucess').classList.add('message-sucess--active');\n    setTimeout(function () {\n      document.getElementById('message-sucess').classList.remove('message-sucess--active');\n    }, 5000);\n  } else {\n    var error = document.querySelectorAll('.message-error');\n    error.forEach(function (errors) {\n      errors.classList.remove('d-none');\n    });\n  }\n});\n\n//# sourceURL=webpack:///./myapp/view/js/validation.js?");

/***/ })

/******/ });