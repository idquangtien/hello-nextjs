"use strict";
(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 2842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useForm */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const useForm = options => {
  const {
    0: data,
    1: setData
  } = useState((options === null || options === void 0 ? void 0 : options.initialValues) || {});
  const {
    0: errors,
    1: setErrors
  } = useState({});

  const handleChange = (key, sanitizeFn) => e => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    setData(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [key]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validations = options === null || options === void 0 ? void 0 : options.validations;

    if (validations) {
      let valid = true;
      const newErrors = {};

      for (const key in validations) {
        var _validation$required;

        const value = data[key];
        const validation = validations[key];
        console.log('value', value);
        console.log('validation', validation);

        if (validation !== null && validation !== void 0 && (_validation$required = validation.required) !== null && _validation$required !== void 0 && _validation$required.value && !value) {
          var _validation$required2;

          valid = false;
          newErrors[key] = validation === null || validation === void 0 ? void 0 : (_validation$required2 = validation.required) === null || _validation$required2 === void 0 ? void 0 : _validation$required2.message;
        }

        const pattern = validation === null || validation === void 0 ? void 0 : validation.pattern;

        if (pattern !== null && pattern !== void 0 && pattern.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation === null || validation === void 0 ? void 0 : validation.custom;

        if (custom !== null && custom !== void 0 && custom.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    if (options !== null && options !== void 0 && options.onSubmit) {
      options.onSubmit();
    }
  };

  return {
    data,
    errors,
    handleChange,
    handleSubmit
  };
};

/***/ }),

/***/ 4729:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_hooks_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2842);
/* harmony import */ var _components_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2020);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const initData = {
  email: "",
  password: '',
  password2: ''
};

const RegisterForm = () => {
  const {
    0: formData,
    1: setFormData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initData);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: dirty,
    1: setDirty
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // if (Object.keys(errorMessage).length === 0) {
    // }
    dirty && onValidate();
  }, [formData]);

  const onChange = e => {
    setDirty(true);
    const {
      name,
      value
    } = e.target;
    setFormData(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const onValidate = () => {
    console.log('formData', formData);
    const {
      valid,
      error
    } = Validator(formData);
    setErrorMessage(error);
    return valid;
  };

  const onSubmit = e => {
    e.preventDefault();
    const valid = onValidate();

    if (valid) {
      axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("http://localhost:8080/", formData);
    } else {
      alert('Error, Please check again');
    }
  };

  console.log('errorMessage', errorMessage);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
      onSubmit: onSubmit,
      autoComplete: "off",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
        children: "RegisterForm"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("hr", {
        className: "hr my-16px"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        name: "email",
        label: "Email",
        autoComplete: "off" // required
        ,
        value: formData.email,
        onChange: onChange,
        error: errorMessage && errorMessage.email ? true : false,
        message: errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.email
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        type: "password",
        name: "password",
        label: "Password" // required
        ,
        value: formData.password,
        onChange: onChange,
        error: errorMessage && errorMessage.password ? true : false,
        message: errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.password
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        type: "password",
        name: "password2",
        label: "Confirm password" // required
        ,
        value: formData.password2,
        onChange: onChange,
        error: errorMessage && errorMessage.password2 ? true : false,
        message: errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.password2
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
        type: "submit",
        className: "btn btn-default btn-border-gradient-pill",
        children: "submit"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterForm);

const Validator = data => {
  let err = {};
  let valid = true;
  const {
    email,
    password,
    password2
  } = data;

  if (!email || email.trim() === "") {
    valid = false;
    err.email = 'Email is required';
  } else if (email.length < 3 || email.length > 16) {
    err.email = 'Email has length between 3 and 6';
  } else if (!validateEmail(email)) {
    err.email = `Don't format email`;
  } else {
    valid = true;
    err.email = null;
  }

  if (!password || password.trim() === "") {
    valid = false;
    err.password = 'Password is required';
  } else if (password.length < 3) {
    valid = false;
    err.password = 'Password >= 3';
  } else {
    valid = true;
    err.password = null;
  }

  if (!password2 || password2.trim() === "") {
    valid = false;
    err.password2 = 'Confirm password is required';
  } else if (password2 !== password) {
    valid = false;
    err.password2 = 'Confirm password is not map';
  } else {
    valid = true;
    err.password2 = null;
  }

  return {
    valid: valid,
    error: err
  };
};

const validateEmail = mail => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }

  return false;
};
});

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [20], () => (__webpack_exec__(4729)));
module.exports = __webpack_exports__;

})();