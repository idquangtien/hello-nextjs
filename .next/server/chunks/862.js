"use strict";
exports.id = 862;
exports.ids = [862];
exports.modules = {

/***/ 3862:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getInitSaving),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9876);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_apis__WEBPACK_IMPORTED_MODULE_1__]);
_core_apis__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const name = 'saving';
const initialState = {
  loading: false,
  error: '',
  data: {
    customerInfo: {},
    savingInfo: {
      amount: "100",
      term: '6M'
    }
  }
};
const TermDepositSlicer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name,
  initialState,
  reducers: {
    updateAmount: (state, action) => {
      state.data.savingInfo.amount = action.payload;
    },
    updateTerm: (state, action) => {
      console.log(action.payload);
      state.data.savingInfo.term = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(getInitSaving.pending, (state, action) => {
      console.log('pending');
      state.loading = true;
    }).addCase(getInitSaving.fulfilled, (state, action) => {
      console.log('fulfilled');
      state.loading = false;
      console.log('action >>>>', action.payload);
    }).addCase(getInitSaving.rejected, (state, action) => {
      console.log('rejected');
      state.loading = false;
    });
  }
});
const getInitSaving = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(`${name}/getInitSaving`, async request => {
  const {
    data
  } = await _core_apis__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post('getInitSaving');
  return data;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TermDepositSlicer);
});

/***/ })

};
;