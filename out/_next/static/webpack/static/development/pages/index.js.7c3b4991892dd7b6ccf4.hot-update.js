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
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/banner */ "./components/banner.js");
/* harmony import */ var _components_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/timer */ "./components/timer.js");
/* harmony import */ var _components_speakerSpotlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/speakerSpotlight */ "./components/speakerSpotlight.js");
/* harmony import */ var _components_sponsorSpotlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sponsorSpotlight */ "./components/sponsorSpotlight.js");







var speakers = __webpack_require__(/*! ../data/speakers */ "./data/speakers.js");

var sponsors = __webpack_require__(/*! ../data/sponsors */ "./data/sponsors.js");

var text = __webpack_require__(/*! ../data/text */ "./data/text.js");

var Home = function Home(props) {
  var speakerSpotlights = speakers.map(function (speaker) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_speakerSpotlight__WEBPACK_IMPORTED_MODULE_4__["default"], {
      details: speaker,
      key: speaker.id
    });
  });
  var sponsorSpotlights = sponsors.map(function (sponsor) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sponsorSpotlight__WEBPACK_IMPORTED_MODULE_5__["default"], {
      details: sponsor,
      key: sponsor.id
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_banner__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section color",
    id: "about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_timer__WEBPACK_IMPORTED_MODULE_3__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "About the event"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.aboutPara1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.aboutPara2), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.aboutPara3))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Director's Message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.directorMsg), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.directorName))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section color",
    id: "speakers"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "KEYNOTE Speakers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, speakerSpotlights)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "agenda"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Schedule"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Curabitur vestibulum ante maximus maximus consectetur. Morbi elementum nisl nec risus varius volutpat. Sed vehicula, odio at gravida feugiat, urna lectus cursus metus, in molestie lorem purus ut risus. In ac volutpat metus, id iaculis est. Phasellus in nisi pharetra, ultricies est non, accumsan mauris. Suspendisse vel consequat quam. Aenean interdum lectus eget magna pellentesque, at posuere dui egestas. Morbi at lectus nulla. Nunc tristique, leo eget tincidunt iaculis, turpis nulla semper dolor, a molestie justo lacus id nulla."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Fusce dignissim quam aliquam orci bibendum dignissim. Nunc vehicula ante non diam consequat, sed mattis nibh dictum. Proin est nisl, placerat at lectus quis, eleifend ultrices nisi. Donec ac interdum lectus, nec consectetur erat. Suspendisse eget libero at nisl consectetur viverra. Quisque sit amet mauris ac nibh rhoncus bibendum id eu sapien. Vestibulum a urna non nisl vehicula hendrerit. Vivamus id odio vel leo consequat rhoncus a in diam. Quisque rhoncus vulputate lacus ac luctus. Curabitur leo orci, mattis pellentesque augue nec, hendrerit faucibus nulla. Vestibulum a efficitur nisl."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section dark",
    id: "sponsors"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Sponsors")), sponsorSpotlights), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section color",
    id: "register"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Register"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "gallery"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Gallery"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section dark",
    id: "contact"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Team-RSD-IITP-2020")), speakerSpotlights), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section color"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Join us on 7th, March 2020."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.7c3b4991892dd7b6ccf4.hot-update.js.map