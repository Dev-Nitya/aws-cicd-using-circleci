(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./customer/customerCRUD.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./customer/customerCRUD.js":
/*!**********************************!*\
  !*** ./customer/customerCRUD.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: await is a reserved word (41:17)\\n\\n\\u001b[0m \\u001b[90m 39 | \\u001b[39m\\n \\u001b[90m 40 | \\u001b[39m\\t\\tconsole\\u001b[33m.\\u001b[39mlog(\\u001b[32m'Data added successfully'\\u001b[39m\\u001b[33m,\\u001b[39m data)\\u001b[33m;\\u001b[39m\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 41 | \\u001b[39m\\t\\tcallback(\\u001b[36mnull\\u001b[39m\\u001b[33m,\\u001b[39m await \\u001b[36mnew\\u001b[39m \\u001b[33mCommon\\u001b[39m()\\u001b[33m.\\u001b[39mcallbackHandler(statusCode\\u001b[33m.\\u001b[39m\\u001b[33mOK\\u001b[39m\\u001b[33m,\\u001b[39m { email\\u001b[33m:\\u001b[39m decodeURIComponent(email)\\u001b[33m,\\u001b[39m cutsomerData\\u001b[33m:\\u001b[39m eventData }))\\u001b[33m;\\u001b[39m\\n \\u001b[90m    | \\u001b[39m\\t\\t               \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 42 | \\u001b[39m\\t\\t\\u001b[36mreturn\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m 43 | \\u001b[39m\\t})\\u001b[33m;\\u001b[39m\\n \\u001b[90m 44 | \\u001b[39m\\u001b[0m\\n\");\n\n//# sourceURL=webpack:///./customer/customerCRUD.js?");

/***/ })

/******/ })));