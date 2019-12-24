webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/banner.js":
/*!******************************!*\
  !*** ./components/banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/dictionary */ "./config/dictionary.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Countdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Countdown, _React$Component);

  function Countdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Countdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Countdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined
    });

    return _this;
  }

  _createClass(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        var _this2$props = _this2.props,
            timeTillDate = _this2$props.timeTillDate,
            timeFormat = _this2$props.timeFormat;
        var then = moment__WEBPACK_IMPORTED_MODULE_1___default()(timeTillDate, timeFormat);
        var now = moment__WEBPACK_IMPORTED_MODULE_1___default()();
        var countdown = moment__WEBPACK_IMPORTED_MODULE_1___default()(then - now);
        var days = countdown.format('D');
        var hours = countdown.format('HH');
        var minutes = countdown.format('mm');
        var seconds = countdown.format('ss');

        _this2.setState({
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        });
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          days = _this$state.days,
          hours = _this$state.hours,
          minutes = _this$state.minutes,
          seconds = _this$state.seconds;
      var daysRadius = mapNumber(days, 30, 0, 0, 360);
      var hoursRadius = mapNumber(hours, 24, 0, 0, 360);
      var minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
      var secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

      if (!seconds) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        jsx: true
      }, "\n                    body {\n                        background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n                        \n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        flex-direction: column;\n\n                        min-height: 100vh;\n                        font-family: 'Lato', sans-serif;\n                        margin: 0;\n                    }\n\n                    h1 {\n                        letter-spacing: 2px;\n                        text-align: center;\n                        text-transform: uppercase;\n                    }\n\n                    .countdown-wrapper {\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        flex-wrap: wrap;\n                    }\n\n                    .countdown-item {\n                        color: #111;\n                        font-size: 40px;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        flex-direction: column;\n                        line-height: 30px;\n                        margin: 10px;\n                        padding-top: 10px;\n                        position: relative;\n                        width: 100px;\n                        height: 100px;\n                    }\n\n                    .countdown-item span {\n                        color: #333;\n                        font-size: 12px;\n                        font-weight: 600;\n                        text-transform: uppercase;\n                    }\n\n                    .countdown-svg {\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        width: 100px;\n                        height: 100px;\n                    }\n\n                    footer {\n                        background-color: #222;\n                        color: #fff;\n                        font-size: 14px;\n                        bottom: 0;\n                        position: fixed;\n                        left: 0;\n                        right: 0;\n                        text-align: center;\n                        z-index: 999;\n                    }\n                "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "countdown-wrapper"
      }, days && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "countdown-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SVGCircle, {
        radius: daysRadius
      }), days, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "days")), hours && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "countdown-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SVGCircle, {
        radius: hoursRadius
      }), hours, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "hours")), minutes && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "countdown-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SVGCircle, {
        radius: minutesRadius
      }), minutes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "minutes")), seconds && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "countdown-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SVGCircle, {
        radius: secondsRadius
      }), seconds, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "seconds"))));
    }
  }]);

  return Countdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var SVGCircle = function SVGCircle(_ref) {
  var radius = _ref.radius;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "countdown-svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "none",
    stroke: "#333",
    "stroke-width": "4",
    d: describeArc(50, 50, 48, 0, radius)
  }));
}; // From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle


function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  var d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(" ");
  return d;
} // Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers


function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

var Banner = function Banner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "above-the-fold",
    id: "home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true
  }, "\n            .above-the-fold {\n                background-image: url( \"./static/images/cover.jpg\" );\n                background-size: 100%;\n                background-repeat: no-repeat;\n                background-size: cover;\n                height: 100vh;\n                position: relative;\n                color: #eee;\n            }\n\n            .above-the-fold .centered-text {\n                position: absolute;\n                height: 200px;\n                top: 0;\n                bottom: 0;\n                left: 0;\n                right: 0;\n                margin: auto;\n            }\n\n            .above-the-fold h1 {\n                color: #f1c40f;\n                font-size: 3rem;\n                margin: 30px;\n            }\n\n            .overlay {\n                background: -webkit-radial-gradient(circle, rgba(0,0,0,0.5), #2F2727);\n                position: absolute;\n                top: 0;\n                bottom: 0;\n                left: 0;\n                right: 0;\n            }\n        "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "centered-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Countdown, {
    timeTillDate: "05 26 2019, 6:00 am",
    timeFormat: "MM DD YYYY, h:mm a"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _config_dictionary__WEBPACK_IMPORTED_MODULE_2__["default"].event.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, _config_dictionary__WEBPACK_IMPORTED_MODULE_2__["default"].event.period), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _config_dictionary__WEBPACK_IMPORTED_MODULE_2__["default"].event.place)));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ })

})
//# sourceMappingURL=index.js.342885c9dd69554ce549.hot-update.js.map