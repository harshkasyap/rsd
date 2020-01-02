webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/speakerSpotlight.js":
/*!****************************************!*\
  !*** ./components/speakerSpotlight.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/theme */ "./data/theme.js");




var SpeakerSpotlight = function SpeakerSpotlight(_ref) {
  var details = _ref.details;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "speaker-pic"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true
  }, "\n            .speaker-pic {\n                display: inline-block;\n                width: 25%;\n                margin-bottom: 30px;\n            }\n\n            .rounded {\n                border-radius: 200px;\n                height: 200px;\n                width: 200px;\n                overflow: hidden;\n                margin: auto;\n                position: relative;\n                cursor: pointer;\n            }\n\n            .speaker-pic img {\n                width: 200px;\n            }\n\n            .rounded:hover .social {\n                opacity: 1;\n                transform: translateY( 0 );\n            }\n\n            .rounded:hover .overlay {\n                opacity: 0.5;\n            }\n\n            .social {\n                position: absolute;\n                margin: auto;\n                transition: all 0.2s;\n                top: 45%;\n                opacity: 0;\n                width: 100%;\n                transform: translateY( 100px );\n            }\n\n            .overlay {\n                position: absolute;\n                top: 0;\n                bottom: 0;\n                left: 0;\n                right: 0;\n                opacity: 0;\n                background-color: ".concat(_data_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor, ";\n                transition: all 1s;\n            }\n\n            .social a {\n                margin: 10px;\n                border: 1px solid black;\n                padding: 5px 7px;\n                border-radius: 100%;\n                text-decoration: none;\n                color: ").concat(_data_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor, ";\n            }\n        ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: details.imageUrl,
    alt: details.name
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: details.twitter,
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-twitter"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: details.github,
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-github"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: details.site,
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-link"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    align: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, details.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, details.position), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, details.company));
};

var shape = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape,
    string = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string;
SpeakerSpotlight.propTypes = {
  details: shape({
    name: string.isRequired,
    position: string.isRequired,
    company: string.isRequired,
    imageUrl: string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SpeakerSpotlight);

/***/ })

})
//# sourceMappingURL=index.js.cc226736bb05cf094a31.hot-update.js.map