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
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Gallery */ "./components/Gallery.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _data_dictionary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/dictionary */ "./data/dictionary.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/slider */ "./components/slider.js");
/* harmony import */ var _components_speakerSpotlight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/speakerSpotlight */ "./components/speakerSpotlight.js");
/* harmony import */ var _components_slider_sponsorSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/slider/sponsorSlider */ "./components/slider/sponsorSlider.js");
/* harmony import */ var _components_slider_teamSlider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/slider/teamSlider */ "./components/slider/teamSlider.js");
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Testimonials */ "./components/Testimonials.js");








 //import SpeakerSlider from "../components/slider/speakerSlider"



var speakers = __webpack_require__(/*! ../data/speakers */ "./data/speakers.js");





var text = __webpack_require__(/*! ../data/text */ "./data/text.js");

var Home = function Home(props) {
  var speakerSpotlights = speakers.map(function (speaker) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_speakerSpotlight__WEBPACK_IMPORTED_MODULE_9__["default"], {
      details: speaker,
      key: speaker.id
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_slider__WEBPACK_IMPORTED_MODULE_8__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "About the event"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.aboutPara1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.aboutPara2), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.aboutPara3))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Testimonials__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: _data_dictionary__WEBPACK_IMPORTED_MODULE_6__["default"].testimonials
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "register"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Enroll your participation here!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 24
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_poster__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_register__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_paper__WEBPACK_IMPORTED_MODULE_3__["default"], null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "speakers"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "KEYNOTE Speakers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, speakerSpotlights)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "gallery"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Shades of Previous Events"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Gallery__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section color",
    id: "contact"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_slider_teamSlider__WEBPACK_IMPORTED_MODULE_11__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "gallery"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Sponsors and Partners"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_slider_sponsorSlider__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, _data_dictionary__WEBPACK_IMPORTED_MODULE_6__["default"].footer), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Copyright \xA92020 All Rights Reserved | Design By RSDP Team"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.cae16a6c581a735e495b.hot-update.js.map