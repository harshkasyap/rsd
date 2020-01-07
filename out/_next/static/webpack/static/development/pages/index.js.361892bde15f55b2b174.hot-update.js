webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      if (this.props.data) {
        var networks = this.props.data.social.map(function (network) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: network.name
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: network.url
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: network.className
          })));
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "twelve columns"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "social-links"
      }, networks), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "copyright"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\xA9 Copyright 2017 Tim Baker"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Design by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        title: "Styleshout",
        href: "http://www.styleshout.com/"
      }, "Styleshout")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "go-top"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "smoothscroll",
        title: "Back to Top",
        href: "#home"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-up-open"
      })))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

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
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");








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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "About the event"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.aboutPara1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.aboutPara2), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text.aboutPara3))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Testimonials__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: _data_dictionary__WEBPACK_IMPORTED_MODULE_6__["default"].testimonials
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section light",
    id: "register"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Enroll your participation here!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
//# sourceMappingURL=index.js.361892bde15f55b2b174.hot-update.js.map