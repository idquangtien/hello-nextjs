"use strict";
(() => {
var exports = {};
exports.id = 755;
exports.ids = [755];
exports.modules = {

/***/ 7266:
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
/* harmony import */ var _redux_slicer_todoSlicer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8248);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6555);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_slicer_todoSlicer__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_3__]);
([_redux_slicer_todoSlicer__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







function Todo(props) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.todo.data);
  const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.todo.loading);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_redux_slicer_todoSlicer__WEBPACK_IMPORTED_MODULE_2__/* .fetchTodos */ .zB)());
  }, []);

  const handleAddTodo = () => {
    dispatch((0,_redux_slicer_todoSlicer__WEBPACK_IMPORTED_MODULE_2__/* .addTodo */ .rk)({
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),
      name: 'learn nextjs',
      completed: false,
      priority: 'medium'
    }));
  };

  const handleUpdateTodo = id => {
    dispatch((0,_redux_slicer_todoSlicer__WEBPACK_IMPORTED_MODULE_2__/* .updateTodo */ .CU)({
      id: id,
      name: `------> update name ${(0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)()}`,
      completed: true,
      priority: 'medium'
    }));
  };

  const handleDeleteTodo = id => {
    dispatch((0,_redux_slicer_todoSlicer__WEBPACK_IMPORTED_MODULE_2__/* .deleteTodo */ .aS)({
      id
    }));
  };

  console.log('data', data);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "loading",
      style: {
        backgroundColor: 'yellow'
      },
      children: loading && 'loading..'
    }), data && data.length > 0 && data.map(item => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [item.name, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
          onClick: () => handleUpdateTodo(item.id),
          children: "update"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
          onClick: () => handleDeleteTodo(item.id),
          children: "delete"
        })]
      }, item.id);
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
      onClick: handleAddTodo,
      children: "add todo"
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);
});

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [248], () => (__webpack_exec__(7266)));
module.exports = __webpack_exports__;

})();