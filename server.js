module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Home_Home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dashboard_Dashboard__ = __webpack_require__(11);



var routes = [{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_0__Home_Home__["a" /* default */],
    exact: true
}, {
    path: '/dashboard',
    component: __WEBPACK_IMPORTED_MODULE_1__Dashboard_Dashboard__["a" /* default */]
}];
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_App__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_routes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_serialize_javascript__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_source_map_support__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_source_map_support___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_source_map_support__);
var _jsxFileName = "/home/bhavin.padiya/Downloads/ssr/ReactCasts-master/episode12/src/server/index.js",
    _this = this;











if (process.env.NODE_ENV === "development") __WEBPACK_IMPORTED_MODULE_8_source_map_support___default.a.install();

var app = __WEBPACK_IMPORTED_MODULE_0_express___default.a();

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static("public"));

app.get("/api/news", function (req, res) {
  res.json([{
    id: 1,
    upvotes: 257,
    title: "Fianto Duri, the complete tutorial",
    author: "RubeusH",
    date: new Date(Date.now() - 15000000)
  }, {
    id: 2,
    upvotes: 221,
    title: "Untransfiguration classes to become compulsory at Hogwarts",
    author: "Baddock",
    date: new Date(Date.now() - 45000000)
  }, {
    id: 3,
    upvotes: 198,
    title: "Cracking the Aurologist Interview ",
    author: "Hetty",
    date: new Date(Date.now() - 900000)
  }, {
    id: 4,
    upvotes: 171,
    title: "ASK WN: What do you use to digitalize your scrolls?",
    author: "Alphard",
    date: new Date(Date.now() - 40000000)
  }, {
    id: 5,
    upvotes: 166,
    title: "The Pragmatic Dragon Feeder",
    author: "Baruffio",
    date: new Date(Date.now() - 10000000)
  }, {
    id: 6,
    upvotes: 145,
    title: "The complete quidditch statistics",
    author: "Hbeery",
    date: new Date(Date.now() - 5000000)
  }, {
    id: 7,
    upvotes: 126,
    title: "Ordinary Wizarding Levels study guide",
    author: "BathBabb",
    date: new Date(Date.now() - 600000)
  }, {
    id: 8,
    upvotes: 114,
    title: "Is muggle-baiting ever acceptable?",
    author: "Falco",
    date: new Date(Date.now() - 60000000)
  }, {
    id: 9,
    upvotes: 74,
    title: "Conserving waterplants cheatsheet.",
    author: "Otto",
    date: new Date(Date.now() - 3000000)
  }, {
    id: 10,
    upvotes: 59,
    title: "Could wizards prevent WW3?",
    author: "Cuthbert",
    date: new Date(Date.now() - 6000000)
  }, {
    id: 11,
    upvotes: 46,
    title: "Show WN: Wand-Extinguishing Protection",
    author: "Humphrey22",
    date: new Date(Date.now() - 50000)
  }, {
    id: 12,
    upvotes: 30,
    title: "Do you still use Alarte Ascendare?",
    author: "Bellatrix1",
    date: new Date(Date.now() - 6000000)
  }, {
    id: 13,
    upvotes: 10,
    title: "Mailing lists WN readers ought to know about?",
    author: "Dracod",
    date: new Date(Date.now() - 60000)
  }, {
    id: 14,
    upvotes: 8,
    title: "How to tell which spell used on a bug?",
    author: "Lupin",
    date: new Date()
  }]);
});

app.get("*", function (req, res, next) {

  var currentRoute = __WEBPACK_IMPORTED_MODULE_5__shared_routes__["a" /* default */].find(function (route) {
    return __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["matchPath"](req.url, route);
  });
  var requestInitialData = currentRoute && currentRoute.component && currentRoute.component.requestInitialData && currentRoute.component.requestInitialData();
  Promise.resolve(requestInitialData).then(function (initialData) {

    var context = { initialData: initialData };
    var markup = __WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"](__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["StaticRouter"],
      { location: req.url, context: context, __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_App__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: _this
      })
    ));
    res.send("\n      <!DOCTYPE html>\n      <head>\n        <title>Universal React</title>\n        <link rel=\"stylesheet\" href=\"/css/main.css\">\n      </head>\n\n      <body>\n        <div id=\"root\">" + markup + "</div>\n        <script src=\"/bundle.js\" defer></script>\n        <script>window.__initialData__ = " + __WEBPACK_IMPORTED_MODULE_7_serialize_javascript___default.a(initialData) + " </script>\n      </body>\n    </html>\n  ");
  }).catch(next);
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening");
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(2);


var _jsxFileName = '/home/bhavin.padiya/Downloads/ssr/ReactCasts-master/episode12/src/shared/App.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */].map(function (route, i) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], Object.assign({ key: i }, route, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: _this2
          }));
        })
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_svg__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App_css__);


var _jsxFileName = "/home/bhavin.padiya/Downloads/ssr/ReactCasts-master/episode12/src/shared/Home/Home.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _initialiseProps.call(_this);

        console.log(props);
        var initialData = void 0;
        if (props.staticContext) {
            initialData = props.staticContext.initialData;
        } else {
            initialData = window.__initialData__;
            delete window.__initialData__;
        }

        _this.state = {
            news: initialData
        };
        return _this;
    }

    _createClass(Home, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var news = this.state.news;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "App", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 49
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "App-header", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 50
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: __WEBPACK_IMPORTED_MODULE_1__logo_svg___default.a, className: "App-logo", alt: "logo", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 51
                            },
                            __self: this
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h2",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 52
                                },
                                __self: this
                            },
                            "Welcome to React in the Server"
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        { className: "App-intro", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                            },
                            __self: this
                        },
                        "Isn't this cool?"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "button",
                    { type: "button", onClick: function onClick() {
                            _this2.ascDsc(news);
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        },
                        __self: this
                    },
                    "Asc/Dsc"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "ul",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        },
                        __self: this
                    },
                    news && news.map(function (nw) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            { key: nw.id, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 61
                                },
                                __self: _this2
                            },
                            nw.title
                        );
                    })
                )
            );
        }
    }], [{
        key: "requestInitialData",
        value: function requestInitialData() {
            return fetch('http://localhost:3000/api/news').then(function (response) {
                return response.json();
            });
        }
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.ascDsc = function (data) {
        console.log(data);
    };

    this.componentDidMount = function () {
        if (!_this3.state || !_this3.state.news) {
            Promise.resolve(Home.requestInitialData()).then(function (initialData) {
                _this3.setState({
                    news: initialData
                });
            });
        }
    };
};

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "/media/logo.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports) {



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);


var _jsxFileName = "/home/bhavin.padiya/Downloads/ssr/ReactCasts-master/episode12/src/shared/Dashboard/Dashboard.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Dashboard = function (_Component) {
    _inherits(Dashboard, _Component);

    function Dashboard() {
        _classCallCheck(this, Dashboard);

        return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
    }

    _createClass(Dashboard, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "h1",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10
                        },
                        __self: this
                    },
                    "Welcome to dashboard..."
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
                    { to: "/", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        },
                        __self: this
                    },
                    "News"
                )
            );
        }
    }]);

    return Dashboard;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Dashboard);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map