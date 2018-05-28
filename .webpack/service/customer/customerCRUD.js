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

/***/ "./common/common.js":
/*!**************************!*\
  !*** ./common/common.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar common = function () {\n\tfunction common() {\n\t\t// console.log('In common js constructor');\n\n\t\t(0, _classCallCheck3.default)(this, common);\n\t}\n\n\t(0, _createClass3.default)(common, [{\n\t\tkey: 'callbackHandler',\n\t\tvalue: function callbackHandler(statusCode, message) {\n\n\t\t\tvar res = {\n\t\t\t\tStatusCode: statusCode,\n\t\t\t\theaders: {\n\t\t\t\t\t'Access-Control-Allow-Origin': '*',\n\t\t\t\t\t'Access-Control-Allow-Headers': '*',\n\t\t\t\t\t'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT'\n\t\t\t\t},\n\t\t\t\tbody: (0, _stringify2.default)(message)\n\t\t\t};\n\n\t\t\treturn res;\n\t\t}\n\t}, {\n\t\tkey: 'postParams',\n\t\tvalue: function postParams(tableName, items) {\n\t\t\tvar params = {\n\t\t\t\tTableName: tableName,\n\t\t\t\tItem: items\n\t\t\t};\n\n\t\t\treturn params;\n\t\t}\n\t}, {\n\t\tkey: 'scanParams',\n\t\tvalue: function scanParams(tableName) {\n\t\t\tvar params = {\n\t\t\t\tTableName: tableName\n\t\t\t};\n\n\t\t\treturn params;\n\t\t}\n\t}, {\n\t\tkey: 'queryParams',\n\t\tvalue: function queryParams(tableName, key, keyvalue) {\n\t\t\tvar params = {\n\t\t\t\tTableName: tableName,\n\t\t\t\tKeyConditionExpression: key + ' = :pk',\n\t\t\t\tExpressionAttributeValues: {\n\t\t\t\t\t':pk': decodeURIComponent(keyvalue)\n\t\t\t\t}\n\t\t\t};\n\t\t\treturn params;\n\t\t}\n\t}]);\n\treturn common;\n}();\n\nexports.default = common;\n\n//# sourceURL=webpack:///./common/common.js?");

/***/ }),

/***/ "./common/dynamodb.js":
/*!****************************!*\
  !*** ./common/dynamodb.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n\nvar _awsSdk = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n\n// eslint-disable-line import/no-extraneous-dependencies\n// import AWS from 'aws-sdk';\n__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config({ path: \"../.env\" /* path to your project root folder */ });\nvar options = {};\nconsole.log('Envoirment -----> ', process.env.IS_OFFLINE);\n// connect to local DB if running offline\nif (process.env.IS_OFFLINE) {\n\tconsole.log('Inside of offline');\n\toptions = {\n\t\tregion: process.env.AWS_REGION,\n\t\tendpoint: 'http://localhost:8000'\n\t};\n}\nconsole.log('Outside');\nvar dynamoDB = new _awsSdk.DynamoDB.DocumentClient(options);\n\nexports.default = dynamoDB;\n\n//# sourceURL=webpack:///./common/dynamodb.js?");

/***/ }),

/***/ "./common/statusCode.js":
/*!******************************!*\
  !*** ./common/statusCode.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar StatusCode = function () {\n\tfunction StatusCode() {\n\t\t// console.log('Inside Status code file');\n\n\t\t(0, _classCallCheck3.default)(this, StatusCode);\n\t}\n\n\t(0, _createClass3.default)(StatusCode, [{\n\t\tkey: 'getStatusCode',\n\t\tvalue: function getStatusCode() {\n\t\t\tvar code_status = {\n\t\t\t\t'OK': 200,\n\t\t\t\t'CREATED': 201,\n\t\t\t\t'NO_CONTENT': 204,\n\t\t\t\t'PARTIAL_CONTENT': 206,\n\t\t\t\t'NOT_MODIFIED': 304,\n\t\t\t\t'BAD_REQUEST': 400,\n\t\t\t\t'UNAUTHORIZED': 401,\n\t\t\t\t'FORBIDDEN': 403,\n\t\t\t\t'NOT_FOUND': 404,\n\t\t\t\t'INTERNAL_SERVER_ERROR': 500\n\t\t\t};\n\n\t\t\treturn code_status;\n\t\t}\n\t}]);\n\treturn StatusCode;\n}();\n\nexports.default = StatusCode;\n\n//# sourceURL=webpack:///./common/statusCode.js?");

/***/ }),

/***/ "./customer/customerCRUD.js":
/*!**********************************!*\
  !*** ./customer/customerCRUD.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nexports.addCustomer = addCustomer;\nexports.getCustomersList = getCustomersList;\nexports.getCustomer = getCustomer;\n\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n\nvar _common = __webpack_require__(/*! ../common/common */ \"./common/common.js\");\n\nvar _common2 = _interopRequireDefault(_common);\n\nvar _awsSdk = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n\nvar _awsSdk2 = _interopRequireDefault(_awsSdk);\n\nvar _dynamodb = __webpack_require__(/*! ../common/dynamodb */ \"./common/dynamodb.js\");\n\nvar _dynamodb2 = _interopRequireDefault(_dynamodb);\n\nvar _statusCode = __webpack_require__(/*! ../common/statusCode */ \"./common/statusCode.js\");\n\nvar _statusCode2 = _interopRequireDefault(_statusCode);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar statusCode = new _statusCode2.default().getStatusCode();\n// AWS.config.region = 'us-east-1';\n\nfunction addCustomer(event, context, callback) {\n\n\tvar eventData = void 0;\n\tvar email = void 0;\n\tvar created_at = new Date().getTime();\n\tif (!event.body || !event.pathParameters.email) {\n\t\tcallback(null, new _common2.default().callbackHandler(statusCode.BAD_REQUEST, 'Event Body or email is missing !!!'));\n\t\t// callback(null, new Error('Malformed input ...'));\n\t\treturn;\n\t} else {\n\t\teventData = JSON.parse(event.body);\n\t\temail = event.pathParameters.email;\n\t}\n\n\tvar Item = {\n\t\temail: decodeURIComponent(email),\n\t\tcreated_at: created_at,\n\t\tcustomerData: eventData\n\t};\n\n\tvar postParams = new _common2.default().postParams(process.env.CUSTOMER_INFO, Item);\n\n\t// console.log(postParams);\n\n\t_dynamodb2.default.put(postParams, function (err, data) {\n\t\tif (err) {\n\t\t\tconsole.log('Unable to add records in table. Error JSON: ', (0, _stringify2.default)(err, undefined, 2));\n\t\t\tcallback(null, new _common2.default().callbackHandler(statusCode.NO_CONTENT, err));\n\t\t\treturn;\n\t\t}\n\n\t\tconsole.log('Data added successfully', data);\n\t\tcallback(null, new _common2.default().callbackHandler(statusCode.OK, { email: decodeURIComponent(email), cutsomerData: eventData }));\n\t\treturn;\n\t});\n}\n\nfunction getCustomersList(event, context, callback) {\n\n\tvar scanParams = new _common2.default().scanParams(process.env.CUSTOMER_INFO || 'customer-info');\n\tconsole.log(scanParams);\n\n\t_dynamodb2.default.scan(scanParams, function (err, data) {\n\t\tif (err) {\n\t\t\tconsole.log('Unable to scan table. ERROR JSON: ', (0, _stringify2.default)(err, undefined, 2));\n\t\t\tcallback(null, new _common2.default().callbackHandler(statusCode.BAD_REQUEST, err));\n\t\t\treturn;\n\t\t}\n\n\t\tconsole.log('Result - ', data);\n\t\tcallback(null, new _common2.default().callbackHandler(statusCode.OK, data));\n\t\treturn;\n\t});\n}\n\nfunction getCustomer(event, context, callback) {\n\n\tvar email = null;\n\n\tif (!event.pathParameters || !event.pathParameters) {\n\t\tconsole.log('Email is missing!!');\n\t\tcallback(null, new _common2.default().callbackHandler(statusCode.BAD_REQUEST, 'Email is missing !!!'));\n\t\treturn;\n\t} else {\n\t\temail = decodeURIComponent(event.pathParameters.email);\n\t}\n\n\tvar queryParams = new _common2.default().queryParams(process.env.CUSTOMER_INFO, 'email', email);\n\n\t_dynamodb2.default.query(queryParams, function (err, result) {\n\n\t\tif (err) {\n\t\t\tconsole.log('Unable to scan table. Error JOSN: ', (0, _stringify2.default)(err, undefined, 2));\n\t\t\tcallback(null, new _common2.default().callbackHandler(statusCode.BAD_REQUEST, err));\n\t\t\treturn;\n\t\t}\n\n\t\tif (result.Items.length) {\n\t\t\tconsole.log('Result - ', result.Items[0]);\n\t\t\tcallback(null, new _common2.default().callbackHandler(statusCode.OK, result.Items[0]));\n\t\t\treturn;\n\t\t} else {\n\t\t\tcallback(null, new _common2.default().callbackHandler(statusCode.OK, 'No data associated with this ID'));\n\t\t\treturn;\n\t\t}\n\t});\n}\n\n//# sourceURL=webpack:///./customer/customerCRUD.js?");

/***/ }),

/***/ "./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst fs = __webpack_require__(/*! fs */ \"fs\")\nconst path = __webpack_require__(/*! path */ \"path\")\n\n/*\n * Parses a string or buffer into an object\n * @param {(string|Buffer)} src - source to be parsed\n * @returns {Object} keys and values from src\n*/\nfunction parse (src) {\n  const obj = {}\n\n  // convert Buffers before splitting into lines and processing\n  src.toString().split('\\n').forEach(function (line) {\n    // matching \"KEY' and 'VAL' in 'KEY=VAL'\n    const keyValueArr = line.match(/^\\s*([\\w\\.\\-]+)\\s*=\\s*(.*)?\\s*$/)\n    // matched?\n    if (keyValueArr != null) {\n      const key = keyValueArr[1]\n\n      // default undefined or missing values to empty string\n      let value = keyValueArr[2] || ''\n\n      // expand newlines in quoted values\n      const len = value ? value.length : 0\n      if (len > 0 && value.charAt(0) === '\"' && value.charAt(len - 1) === '\"') {\n        value = value.replace(/\\\\n/gm, '\\n')\n      }\n\n      // remove any surrounding quotes and extra spaces\n      value = value.replace(/(^['\"]|['\"]$)/g, '').trim()\n\n      obj[key] = value\n    }\n  })\n\n  return obj\n}\n\n/*\n * Main entry point into dotenv. Allows configuration before loading .env\n * @param {Object} options - options for parsing .env file\n * @param {string} [options.path=.env] - path to .env file\n * @param {string} [options.encoding=utf8] - encoding of .env file\n * @returns {Object} parsed object or error\n*/\nfunction config (options) {\n  let dotenvPath = path.resolve(process.cwd(), '.env')\n  let encoding = 'utf8'\n\n  if (options) {\n    if (options.path) {\n      dotenvPath = options.path\n    }\n    if (options.encoding) {\n      encoding = options.encoding\n    }\n  }\n\n  try {\n    // specifying an encoding returns a string instead of a buffer\n    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }))\n\n    Object.keys(parsed).forEach(function (key) {\n      if (!process.env.hasOwnProperty(key)) {\n        process.env[key] = parsed[key]\n      }\n    })\n\n    return { parsed }\n  } catch (e) {\n    return { error: e }\n  }\n}\n\nmodule.exports.config = config\nmodule.exports.load = config\nmodule.exports.parse = parse\n\n\n//# sourceURL=webpack:///./node_modules/dotenv/lib/main.js?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/createClass%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"source-map-support/register\");\n\n//# sourceURL=webpack:///external_%22source-map-support/register%22?");

/***/ })

/******/ })));