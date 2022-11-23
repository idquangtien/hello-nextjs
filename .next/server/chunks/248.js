"use strict";
exports.id = 248;
exports.ids = [248];
exports.modules = {

/***/ 9876:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
 // const url = process.env.REACT_APP_API_URL + '/api/';

const url = '/api/';
const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: url,
  // timeout: 1000,
  // mode: "cors",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);
});

/***/ }),

/***/ 8248:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zB": () => (/* binding */ fetchTodos),
/* harmony export */   "rk": () => (/* binding */ addTodo),
/* harmony export */   "CU": () => (/* binding */ updateTodo),
/* harmony export */   "aS": () => (/* binding */ deleteTodo),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9876);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_apis__WEBPACK_IMPORTED_MODULE_1__]);
_core_apis__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const name = 'todo';
const initialState = {
  data: null,
  loading: false,
  error: null
};
const TodoSlicer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.loading = true;
    }).addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    }).addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }) // add todo
    .addCase(addTodo.pending, (state, action) => {
      state.loading = true;
    }).addCase(addTodo.fulfilled, (state, action) => {
      console.log('action', action);
      state.loading = false;
      state.data = action.payload;
    }).addCase(addTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }) // update todo
    .addCase(updateTodo.pending, (state, action) => {
      state.loading = true;
    }).addCase(updateTodo.fulfilled, (state, action) => {
      console.log('action', action);
      state.loading = false;
      state.data = action.payload;
    }).addCase(updateTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }) // delete todo
    .addCase(deleteTodo.pending, (state, action) => {
      state.loading = true;
    }).addCase(deleteTodo.fulfilled, (state, action) => {
      console.log('payload', action.payload);
      state.loading = false;
      state.data = action.payload;
    }).addCase(deleteTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});
const fetchTodos = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(`${name}/fetchTodos`, async request => {
  const {
    data
  } = await _core_apis__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get('todos');
  return data;
});
const addTodo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(`${name}/addTodo`, async request => {
  const {
    data
  } = await _core_apis__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post('addTodo', request);
  return data;
});
const updateTodo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(`${name}/updateTodo`, async request => {
  const {
    data
  } = await _core_apis__WEBPACK_IMPORTED_MODULE_1__/* ["default"].put */ .Z.put('updateTodo', request);
  return data;
});
const deleteTodo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(`${name}/deleteTodo`, async request => {
  const {
    data
  } = await _core_apis__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post('deleteTodo', request);
  console.log('response data delete', data);
  return data;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoSlicer);
});

/***/ })

};
;