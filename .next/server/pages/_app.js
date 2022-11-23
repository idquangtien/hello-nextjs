"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3572:
/***/ (() => {


// UNUSED EXPORTS: default

;// CONCATENATED MODULE: external "miragejs"
const external_miragejs_namespaceObject = require("miragejs");
;// CONCATENATED MODULE: ./fakeApis/index.js

const todos = [{
  id: 1,
  name: 'learn nextjs',
  completed: false,
  priority: 'medium'
}, {
  id: 2,
  name: 'learn react',
  completed: false,
  priority: 'high'
}, {
  id: 3,
  name: 'learn javascript',
  completed: false,
  priority: 'low'
}];
const initSavingData = {
  data: {
    customerInfo: {},
    savingInfo: {}
  }
};
/* harmony default export */ function fakeApis() {
  let server = createServer({
    models: {
      todos: Model // saving: Model,

    },

    seeds(server) {
      server.db.loadData({
        todos: todos,
        saving: initSavingData
      });
    },

    routes() {
      this.namespace = 'api';
      this.get('/todos', schema => {
        return schema.db.todos;
      });
      this.post('/addTodo', (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        schema.db.todos.insert(payload);
        return schema.db.todos;
      });
      this.put('/updateTodo', (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        const todoUpdate = schema.db.todos.find(payload.id);
        schema.db.todos.update(todoUpdate.id, payload);
        return schema.db.todos;
      });
      this.post('/deleteTodo', (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        const todoDelete = schema.db.todos.find(payload.id);
        schema.db.todos.remove(todoDelete.id);
        return schema.db.todos;
      });
      this.post('/getInitSaving', schema => {
        console.log('there', schema);
        return schema.db.saving;
      });
      this.namespace = "";
      this.passthrough();
    }

  });
}

/***/ }),

/***/ 1679:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3843);
/* harmony import */ var _fakeApis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3572);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_store__WEBPACK_IMPORTED_MODULE_2__]);
_redux_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
const _excluded = ["Component", "pageProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();

if (false) {}

const MyApp = _ref => {
  let {
    Component,
    pageProps
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {
    client: queryClient,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
      store: _redux_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Component, _objectSpread({}, pageProps))]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
});

/***/ }),

/***/ 3843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slicer_todoSlicer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8248);
/* harmony import */ var _slicer_termDepositSlicer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3862);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_slicer_termDepositSlicer__WEBPACK_IMPORTED_MODULE_2__, _slicer_todoSlicer__WEBPACK_IMPORTED_MODULE_1__]);
([_slicer_termDepositSlicer__WEBPACK_IMPORTED_MODULE_2__, _slicer_todoSlicer__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    todo: _slicer_todoSlicer__WEBPACK_IMPORTED_MODULE_1__/* ["default"].reducer */ .ZP.reducer,
    termDeposit: _slicer_termDepositSlicer__WEBPACK_IMPORTED_MODULE_2__/* ["default"].reducer */ .Z.reducer
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);
});

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [248,862], () => (__webpack_exec__(1679)));
module.exports = __webpack_exports__;

})();