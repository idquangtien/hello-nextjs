"use strict";
(() => {
var exports = {};
exports.id = 264;
exports.ids = [264];
exports.modules = {

/***/ 3986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ card)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Card/index.jsx




const Card = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "card p-16px shadow-100 rounded-8px",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "card__image mb-8px",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "https://cdn.dribbble.com/userupload/3982464/file/original-548ac7eb6fdadc19494b3357076e5eed.png?compress=1&resize=1024x768",
        alt: "",
        className: "h-100 w-100"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card__content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "card__title mb-8px",
        children: "Skillex Edtech Case Study"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "card__desc mb-8px",
        children: "Skillex has facilitated practical learning experiences for students all over the globe for 10 years now. This platform is a place to learn from world-leading experts in their field. It is priceless to become a member of a supportive community. Students can choose between 250 online courses in 10 fields, including data science, art, business, and many others."
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#",
        className: "link",
        children: "View Detail"
      })]
    })]
  });
};

/* harmony default export */ const components_Card = (Card);
// EXTERNAL MODULE: ./core/Layout/PrimaryLayout/index.jsx + 4 modules
var PrimaryLayout = __webpack_require__(2499);
;// CONCATENATED MODULE: ./pages/card/index.jsx






const CardPage = () => {
  const {
    0: count,
    1: setCount
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    setCount(p => p + 1);
    console.log('set 1', count);
    setCount(p => p + 1);
    console.log('set 3', count);
    setCount(p => p + 1);
    console.log('set 3', count);
  }, []);
  console.log(count);
  return /*#__PURE__*/jsx_runtime_.jsx(PrimaryLayout/* PrimaryLayout */.t, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row gap-8px",
        children: Array(3).fill(0).map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-4",
          children: /*#__PURE__*/jsx_runtime_.jsx(components_Card, {})
        }))
      })
    })
  });
};

/* harmony default export */ const card = (CardPage);

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [499], () => (__webpack_exec__(3986)));
module.exports = __webpack_exports__;

})();