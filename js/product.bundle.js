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
/******/ 	return __webpack_require__(__webpack_require__.s = "./myapp/view/js/product.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./myapp/view/js/product.js":
/*!**********************************!*\
  !*** ./myapp/view/js/product.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// CONDICIONES INICIALES\nvar contenido = [[\"Antiespumante\", \"Anticorrosivos\", \"Asfalto Liquido\", \"Acido Sulfurico\", \"Anhidrido Maleico\", \"Acido Dodecanóico(Acido Láurico)\", \"Alcohol Metilico(Metanol)\", \"Azufre Liquido\", \"Azufre Solido\", \"Almidón Modificado\", \"Acido Acético\", \"Acido Clorhídrico\", \"Acido Fluorhídrico\", \"Acido Sulfonico Alquilbenceno Lineal (LABSA 96%)\"], [\"Biocidas\", \"Bentonita\", \"Barita\", \"Butilglicol (Butiloxitol) Etilenglicol Monobutil Eter\"], [\"Cloruro de Potasio\", \"Cal Hidratada\", \"Carbonato de Calcio\", \"Coagulantes Orgánicos\"], [\"Dispersante de asfaltenos\", \"Desemulsificantes\", \"Dietilentriamina\", \"Dipropilenglicol (DPG)\", \"Dietanolamina (DEA)\", \"Diesel\"], [\"Etilenglicol\", \"Etilenvinil Acetato (EVA)\"], [\"Fenol o Acido Fenico\", \"Formol (Formaldehido)\", \"Fosfonatos\"], [\"Goma Xantano Clarificada\", \"Glicerina USP 99%\"], [\"Hidróxido de Potasio\", \"Hexametilendiamina (HMPA)\"], [\"Inhibidor de Hinchamiento de Arcilla (KCL)\"], [\"\"], [\"\"], [\"Lauril Sulfato de Sodio (LSS)\", \"Lubricante\", \"Laurileter Sulfato de Sodio 70% (LESS)\"], [\"Monoetanolamina (MEA)\"], [\"Nonilphenol Etoxilado 10 Moles (NPE-10)\"], [\"Oleina de Soya\"], [\"Polietilenglicol (PET)\", \"Parcialmente Hidrolizada Poliacril Amida (PI \", \"PAC LV\", \"Polímeros\", \"Polifosfatos\", \"Propilenglicol\", \"Polialfaolefina\", \"Polialquil Metacrilato\"], [\"\"], [\"\"], [\"Surfactantes\", \"Sales Inorgánicas\", \"Soda Caustica en Escamas\"], [\"Trietanolamina (TEA)\", \"Tall Oil Fatty Acid (TOFA)\"], [\"\"], [\"\"], [\"\"], [\"Xileno\"], [\"\"], [\"\"]];\n\nvar button = _toConsumableArray(document.querySelectorAll('.button'));\n\nvar ul = document.getElementById('ul');\nvar fragment = document.createDocumentFragment();\nvar active = 0;\n\nvar _iterator = _createForOfIteratorHelper(contenido[0]),\n    _step;\n\ntry {\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    var content = _step.value;\n    var itemlist = document.createElement('li');\n    itemlist.textContent = content;\n    itemlist.classList.add('text-white', 'w-100', 'border-bottom', 'my-1', 'nav-item', 'pb-2', 'responsive-text', 'lead');\n    fragment.appendChild(itemlist);\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\nul.appendChild(fragment);\nvar boton = button[0].firstElementChild;\nboton.classList.add('btn-primary');\n\nvar _loop = function _loop(i) {\n  button[i].addEventListener('click', function (e) {\n    var conte = contenido[i];\n    var letra = conte[0].substr(0, 1);\n    var valor = e.target.textContent;\n    var valor_nodo = ul.firstChild.textContent.substr(0, 1);\n    var boton = button[i].firstElementChild;\n\n    for (var index = 0; index < button.length; index++) {\n      var clas = button[index].children;\n\n      if (clas[0].classList.contains('btn-primary')) {\n        clas[0].classList.remove('btn-primary');\n      }\n    }\n\n    boton.classList.add('btn-primary');\n\n    if (letra == valor && letra != valor_nodo) {\n      ul.innerHTML = '';\n\n      var _iterator2 = _createForOfIteratorHelper(conte),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var _content = _step2.value;\n\n          var _itemlist = document.createElement('li');\n\n          _itemlist.textContent = _content;\n\n          _itemlist.classList.add('text-white', 'w-100', 'border-bottom', 'my-1', 'nav-item', 'pb-2', 'responsive-text', 'lead');\n\n          fragment.appendChild(_itemlist);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n\n      ul.appendChild(fragment);\n    } else if (letra == valor_nodo) {} else {\n      ul.innerHTML = '<li class=\"text-white w-100 my-1 responsive-text lead\">no hay productos en esta lista</li>';\n      active++;\n    }\n  });\n};\n\nfor (var i = 0; i < button.length; i++) {\n  _loop(i);\n}\n\n//# sourceURL=webpack:///./myapp/view/js/product.js?");

/***/ })

/******/ });