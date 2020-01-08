webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_poster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/poster */ "./components/poster.js");
/* harmony import */ var _components_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/register */ "./components/register.js");
/* harmony import */ var _components_paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/paper */ "./components/paper.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _data_dictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/dictionary */ "./data/dictionary.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/slider */ "./components/slider.js");
/* harmony import */ var _components_slider_teamSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/slider/teamSlider */ "./components/slider/teamSlider.js");
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Testimonials */ "./components/Testimonials.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Speakers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Speakers */ "./components/Speakers.js");
/* harmony import */ var _components_useScript__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/useScript */ "./components/useScript.js");













var text = __webpack_require__(/*! ../data/text */ "./data/text.js");

var Home = function Home(props) {
  Object(_components_useScript__WEBPACK_IMPORTED_MODULE_11__["default"])('https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
  Object(_components_useScript__WEBPACK_IMPORTED_MODULE_11__["default"])('./static/js/jquery-migrate-1.2.1.min.js'); //useScript('./static/js/jquery.flexslider.js');

  Object(_components_useScript__WEBPACK_IMPORTED_MODULE_11__["default"])('./static/js/waypoints.js');
  Object(_components_useScript__WEBPACK_IMPORTED_MODULE_11__["default"])('./static/js/jquery.fittext.js');
  Object(_components_useScript__WEBPACK_IMPORTED_MODULE_11__["default"])('./static/js/magnific-popup.js');
  Object(_components_useScript__WEBPACK_IMPORTED_MODULE_11__["default"])('./static/js/init.js');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_slider__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "About the event"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-quote-left"
  }), text.aboutPara1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, text.aboutPara2), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, text.aboutPara3, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-quote-right"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Testimonials__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: _data_dictionary__WEBPACK_IMPORTED_MODULE_5__["default"].testimonials
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "register"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Enroll your participation here!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "portfolio-wrapper",
    className: "bgrid-thirds s-bgrid-thirds cf"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns portfolio-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_poster__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns portfolio-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_register__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns portfolio-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_paper__WEBPACK_IMPORTED_MODULE_3__["default"], null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "speakers"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "KEYNOTE SPEAKERS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Speakers__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "contact"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_slider_teamSlider__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.5598f42a1d14f040c7a7.hot-update.js.map