"use strict";
exports.id = 499;
exports.ids = [499];
exports.modules = {

/***/ 2499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* reexport */ PrimaryLayout_PrimaryLayout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./core/Layout/PrimaryLayout/Header.jsx




const Header = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "d-flex align-items-center h-80px",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mr-auto",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "material-icons-outlined",
            children: "menu"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "tc",
          children: "Logo"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ml-auto",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "material-icons-outlined",
            children: "more_vert"
          })
        })]
      })
    })
  });
};

/* harmony default export */ const PrimaryLayout_Header = (Header);
;// CONCATENATED MODULE: ./core/Layout/PrimaryLayout/Footer.jsx



const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Footer"
  });
};

/* harmony default export */ const PrimaryLayout_Footer = (Footer);
;// CONCATENATED MODULE: ./core/Layout/PrimaryLayout/Sidebar.jsx



const Sidebar = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Sidebar"
  });
};

/* harmony default export */ const PrimaryLayout_Sidebar = (Sidebar);
;// CONCATENATED MODULE: ./core/Layout/PrimaryLayout/PrimaryLayout.jsx








const PrimaryLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "d-flex flex-col min-h-100vh",
      children: [/*#__PURE__*/jsx_runtime_.jsx(PrimaryLayout_Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
        className: "flex-1",
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx(PrimaryLayout_Footer, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(PrimaryLayout_Sidebar, {})]
  });
};

/* harmony default export */ const PrimaryLayout_PrimaryLayout = (PrimaryLayout);
;// CONCATENATED MODULE: ./core/Layout/PrimaryLayout/index.jsx


/***/ })

};
;