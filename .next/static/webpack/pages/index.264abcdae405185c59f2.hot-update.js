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
  console.log(dia, mes, ano);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicmV0dXJuRGF0ZUFuZEhvdXIiLCJkYXRlIiwiRGF0ZSIsInNlY29uZHMiLCJnZXRTZWNvbmRzIiwibWludXRlIiwiZ2V0TWludXRlcyIsImhvdXIiLCJnZXRIb3VycyIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaG9tZSIsImhvcmFyaW8iLCJkaWEiLCJtZXMiLCJhbm8iLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwibGV0dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztTQUVlQSxpQjs7Ozs7d01BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGdCQURSLEdBQ2UsSUFBSUMsSUFBSixFQURmO0FBRVFDLG1CQUZSLEdBRWtCRixJQUFJLENBQUNHLFVBQUwsRUFGbEI7QUFHUUMsa0JBSFIsR0FHaUJKLElBQUksQ0FBQ0ssVUFBTCxFQUhqQjtBQUlRQyxnQkFKUixHQUllTixJQUFJLENBQUNPLFFBQUwsRUFKZjtBQUtRQyxlQUxSLEdBS2NSLElBQUksQ0FBQ1MsT0FBTCxFQUxkO0FBTVFDLGlCQU5SLEdBTWdCVixJQUFJLENBQUNXLFFBQUwsRUFOaEI7QUFPUUMsZ0JBUFIsR0FPZVosSUFBSSxDQUFDYSxXQUFMLEVBUGY7QUFBQSw2Q0FRVyxDQUFDTCxHQUFELEVBQUtFLEtBQUwsRUFBV0UsSUFBWCxFQUFnQk4sSUFBaEIsRUFBcUJGLE1BQXJCLEVBQTRCRixPQUE1QixDQVJYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFXZSxTQUFTWSxJQUFULEdBQWU7QUFDMUIsTUFBTUMsT0FBTyxHQUFHaEIsaUJBQWlCLEVBQWpDO0FBQ0EsTUFBTWlCLEdBQUcsR0FBR0QsT0FBTyxDQUFDLENBQUQsQ0FBbkI7QUFDQSxNQUFNRSxHQUFHLEdBQUdGLE9BQU8sQ0FBQyxDQUFELENBQW5CO0FBQ0EsTUFBTUcsR0FBRyxHQUFHSCxPQUFPLENBQUMsQ0FBRCxDQUFuQjtBQUNBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWUosR0FBWixFQUFnQkMsR0FBaEIsRUFBb0JDLEdBQXBCO0FBQ0Esc0JBQU87QUFBSyxhQUFTLEVBQUVHLHNFQUFNLENBQUNDLE1BQXZCO0FBQUEsMkNBQXdEUCxPQUFPLENBQUMsQ0FBRCxDQUEvRCxPQUFxRUEsT0FBTyxDQUFDLENBQUQsQ0FBNUUsT0FBa0ZBLE9BQU8sQ0FBQyxDQUFELENBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRUgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjY0YWJjZGFlNDA1MTg1YzU5ZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvc3R5bGUtbGV0dGVyLm1vZHVsZS5jc3MnXHJcblxyXG5hc3luYyBmdW5jdGlvbiByZXR1cm5EYXRlQW5kSG91cigpe1xyXG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKVxyXG4gICAgdmFyIG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgdmFyIGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XHJcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIHJldHVybiBbZGF5LG1vbnRoLHllYXIsaG91cixtaW51dGUsc2Vjb25kc11cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpe1xyXG4gICAgY29uc3QgaG9yYXJpbyA9IHJldHVybkRhdGVBbmRIb3VyKClcclxuICAgIGNvbnN0IGRpYSA9IGhvcmFyaW9bMF07XHJcbiAgICBjb25zdCBtZXMgPSBob3JhcmlvWzFdO1xyXG4gICAgY29uc3QgYW5vID0gaG9yYXJpb1syXTtcclxuICAgIGNvbnNvbGUubG9nKGRpYSxtZXMsYW5vKVxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGV0dGVyfT53ZWxjb21lIEVkZXIsIHRvZGF5IGlzOiB7aG9yYXJpb1swXX0ve2hvcmFyaW9bMV19L3tob3JhcmlvWzJdfVxyXG4gICAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9