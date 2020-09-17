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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var terminal_in_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! terminal-in-react */ "./node_modules/terminal-in-react/lib/js/index.js");
/* harmony import */ var terminal_in_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(terminal_in_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/k3ndr1c/react-projects/nextjs-blog/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Home(_ref) {
  var router = _ref.router;
  var openingMessage = 'Welcome to my home on the internet! For a list of all commands, type in `help`';
  var educationDetails = [['Rutgers University – New Brunswick', 'September 2018 – October 2019', 'M.S. Computer Engineering', 'GPA: 4.0'], ['Rutgers University – New Brunswick', 'September 2014 – May 2018', 'B.S. Electrical & Computer Engineering, Minor in Mathematics', 'GPA: 3.54']];
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    home: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, ".dev")), __jsx(terminal_in_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      fontSize: "1.1em",
      overflowX: "auto"
    },
    color: "orange",
    outputColor: "orange",
    barColor: "#1d1f21",
    backgroundColor: "#1d1f21",
    prompt: "orange",
    promptSymbol: "~$  ",
    msg: openingMessage,
    hideTopBar: false,
    allowTabs: false,
    actionHandlers: {
      handleMinimise: function handleMinimise() {
        return null;
      },
      handleClose: function handleClose() {
        return null;
      },
      handleMaximise: function handleMaximise() {
        return null;
      }
    },
    commands: {
      'education': function education(args, print, runCommand) {
        educationDetails.forEach(function (school) {
          return school.forEach(function (line) {
            return print(line);
          });
        });
      }
    },
    descriptions: {
      'blog': 'view blog posts',
      'contact': 'ways to reach me',
      'education': 'show education',
      'projects': 'view projects'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Home));

/***/ })

})
//# sourceMappingURL=index.js.53b503cd0142a2e0fa09.hot-update.js.map