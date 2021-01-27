webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _styles_style_letter_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style-letter.module.css */ "./pages/styles/style-letter.module.css");
/* harmony import */ var _styles_style_letter_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_style_letter_module_css__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\Eder\\Desktop\\projetos\\homepage\\pages\\index.js";


function returnDateAndHour() {
  return _returnDateAndHour.apply(this, arguments);
}

function _returnDateAndHour() {
  _returnDateAndHour = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var date, seconds, minute, hour, day, month, year;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            date = new Date();
            seconds = date.getSeconds();
            minute = date.getMinutes();
            hour = date.getHours();
            day = date.getDate();
            month = date.getMonth();
            year = date.getFullYear();
            return _context.abrupt("return", [day, month, year, hour, minute, seconds]);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _returnDateAndHour.apply(this, arguments);
}

function home() {
  var horario = returnDateAndHour();
  var dia = horario[0];
  var mes = horario[1];
  var ano = horario[2];
  console.log(horario.PromiseResult);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: _styles_style_letter_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.letter,
    children: ["welcome Eder, today is: ", horario[0], "/", horario[1], "/", horario[2]]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 12
  }, this);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicmV0dXJuRGF0ZUFuZEhvdXIiLCJkYXRlIiwiRGF0ZSIsInNlY29uZHMiLCJnZXRTZWNvbmRzIiwibWludXRlIiwiZ2V0TWludXRlcyIsImhvdXIiLCJnZXRIb3VycyIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaG9tZSIsImhvcmFyaW8iLCJkaWEiLCJtZXMiLCJhbm8iLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZVJlc3VsdCIsInN0eWxlcyIsImxldHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7U0FFZUEsaUI7Ozs7O3dNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxnQkFEUixHQUNlLElBQUlDLElBQUosRUFEZjtBQUVRQyxtQkFGUixHQUVrQkYsSUFBSSxDQUFDRyxVQUFMLEVBRmxCO0FBR1FDLGtCQUhSLEdBR2lCSixJQUFJLENBQUNLLFVBQUwsRUFIakI7QUFJUUMsZ0JBSlIsR0FJZU4sSUFBSSxDQUFDTyxRQUFMLEVBSmY7QUFLUUMsZUFMUixHQUtjUixJQUFJLENBQUNTLE9BQUwsRUFMZDtBQU1RQyxpQkFOUixHQU1nQlYsSUFBSSxDQUFDVyxRQUFMLEVBTmhCO0FBT1FDLGdCQVBSLEdBT2VaLElBQUksQ0FBQ2EsV0FBTCxFQVBmO0FBQUEsNkNBUVcsQ0FBQ0wsR0FBRCxFQUFLRSxLQUFMLEVBQVdFLElBQVgsRUFBZ0JOLElBQWhCLEVBQXFCRixNQUFyQixFQUE0QkYsT0FBNUIsQ0FSWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBV2UsU0FBU1ksSUFBVCxHQUFlO0FBQzFCLE1BQU1DLE9BQU8sR0FBR2hCLGlCQUFpQixFQUFqQztBQUNBLE1BQU1pQixHQUFHLEdBQUdELE9BQU8sQ0FBQyxDQUFELENBQW5CO0FBQ0EsTUFBTUUsR0FBRyxHQUFHRixPQUFPLENBQUMsQ0FBRCxDQUFuQjtBQUNBLE1BQU1HLEdBQUcsR0FBR0gsT0FBTyxDQUFDLENBQUQsQ0FBbkI7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVlMLE9BQU8sQ0FBQ00sYUFBcEI7QUFDQSxzQkFBTztBQUFLLGFBQVMsRUFBRUMsc0VBQU0sQ0FBQ0MsTUFBdkI7QUFBQSwyQ0FBd0RSLE9BQU8sQ0FBQyxDQUFELENBQS9ELE9BQXFFQSxPQUFPLENBQUMsQ0FBRCxDQUE1RSxPQUFrRkEsT0FBTyxDQUFDLENBQUQsQ0FBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40Y2QyNzYxNTA1ODUyNzkwZGExNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9zdHlsZS1sZXR0ZXIubW9kdWxlLmNzcydcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJldHVybkRhdGVBbmRIb3VyKCl7XHJcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpXHJcbiAgICB2YXIgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICB2YXIgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgcmV0dXJuIFtkYXksbW9udGgseWVhcixob3VyLG1pbnV0ZSxzZWNvbmRzXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCl7XHJcbiAgICBjb25zdCBob3JhcmlvID0gcmV0dXJuRGF0ZUFuZEhvdXIoKVxyXG4gICAgY29uc3QgZGlhID0gaG9yYXJpb1swXTtcclxuICAgIGNvbnN0IG1lcyA9IGhvcmFyaW9bMV07XHJcbiAgICBjb25zdCBhbm8gPSBob3JhcmlvWzJdO1xyXG4gICAgY29uc29sZS5sb2coaG9yYXJpby5Qcm9taXNlUmVzdWx0KVxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGV0dGVyfT53ZWxjb21lIEVkZXIsIHRvZGF5IGlzOiB7aG9yYXJpb1swXX0ve2hvcmFyaW9bMV19L3tob3JhcmlvWzJdfVxyXG4gICAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9