"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/../../node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar */ \"(app-pages-browser)/./app/components/Navbar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [domains, setDomains] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function calling() {\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://192.168.18.118:8000/getdomains/\");\n                if (response.data.status === 200) {\n                    setDomains(response.data.data);\n                }\n            } catch (error) {\n                console.log(error);\n            }\n        }\n        calling();\n    }, []);\n    const link = \"/chooseidea/\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen bg-slate-500 text-black font-sans\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/saurabhwagh/Desktop/IdeaPot/frontend/ideapot/src/app/page.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                domains && domains.length !== 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center pt-32 text-3xl text-white font-semibold\",\n                    children: \"Domain's\"\n                }, void 0, false, {\n                    fileName: \"/Users/saurabhwagh/Desktop/IdeaPot/frontend/ideapot/src/app/page.js\",\n                    lineNumber: 27,\n                    columnNumber: 40\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                domains && domains.length !== 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap gap-10 justify-center items-center pt-12 mt-6 box-border px-6 pb-10\",\n                    children: domains.map((domain)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: link + \"\".concat(domain.domain, \"/\"),\n                            className: \"bg-slate-700 text-white px-12 py-6 rounded-2xl shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-3xl pb-6\",\n                                    children: domain.domain\n                                }, void 0, false, {\n                                    fileName: \"/Users/saurabhwagh/Desktop/IdeaPot/frontend/ideapot/src/app/page.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xl\",\n                                    children: [\n                                        \"Total Count: \",\n                                        domain.totalCount\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/saurabhwagh/Desktop/IdeaPot/frontend/ideapot/src/app/page.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xl\",\n                                    children: [\n                                        \"Available Count: \",\n                                        domain.availableCount\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/saurabhwagh/Desktop/IdeaPot/frontend/ideapot/src/app/page.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabhwagh/Desktop/IdeaPot/frontend/ideapot/src/app/page.js\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/saurabhwagh/Desktop/IdeaPot/frontend/ideapot/src/app/page.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center pt-32 text-3xl text-white font-semibold\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/saurabhwagh/Desktop/IdeaPot/frontend/ideapot/src/app/page.js\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/saurabhwagh/Desktop/IdeaPot/frontend/ideapot/src/app/page.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"jxC9GQ7cCVYnofLpOQ2RJ+yNOFU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ2lCO0FBQ0Y7QUFFMUIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBUUMsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN0Q0QsZ0RBQVNBLENBQUM7UUFDUixlQUFlTTtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNUiw2Q0FBS0EsQ0FBQ1MsR0FBRyxDQUFDO2dCQUNqQyxJQUFHRCxTQUFTRSxJQUFJLENBQUNDLE1BQU0sS0FBRyxLQUFJO29CQUM1QkwsV0FBV0UsU0FBU0UsSUFBSSxDQUFDQSxJQUFJO2dCQUMvQjtZQUNGLEVBQUUsT0FBT0UsT0FBTztnQkFDZEMsUUFBUUMsR0FBRyxDQUFDRjtZQUNkO1FBQ0Y7UUFDQUw7SUFDRixHQUFFLEVBQUU7SUFDSixNQUFNUSxPQUFRO0lBQ2QscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDZCwwREFBTUE7Ozs7O2dCQUNMRSxXQUFTQSxRQUFRYSxNQUFNLEtBQUcsa0JBQUcsOERBQUNDO29CQUFHRixXQUFVOzhCQUFzRDs7Ozs7eUNBQWM7Z0JBQzlHWixXQUFXQSxRQUFRYSxNQUFNLEtBQUssa0JBQzdCLDhEQUFDRjtvQkFBSUMsV0FBVTs4QkFDWlosUUFBUWUsR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDQzs0QkFBRUMsTUFBTVIsT0FBSyxHQUFpQixPQUFkTSxPQUFPQSxNQUFNLEVBQUM7NEJBQUlKLFdBQVU7OzhDQUMzQyw4REFBQ087b0NBQUdQLFdBQVU7OENBQWlCSSxPQUFPQSxNQUFNOzs7Ozs7OENBQzVDLDhEQUFDSTtvQ0FBRVIsV0FBVTs7d0NBQVU7d0NBQWNJLE9BQU9LLFVBQVU7Ozs7Ozs7OENBQ3RELDhEQUFDRDtvQ0FBRVIsV0FBVTs7d0NBQVU7d0NBQWtCSSxPQUFPTSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FLcEUsOERBQUNGO29CQUFFUixXQUFVOzhCQUFzRDs7Ozs7Ozs7Ozs7OztBQVEvRTtHQXpDd0JiO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RvbWFpbnMsc2V0RG9tYWluc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgYXN5bmMgZnVuY3Rpb24gY2FsbGluZygpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xOTIuMTY4LjE4LjExODo4MDAwL2dldGRvbWFpbnMvJyk7XG4gICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3RhdHVzPT09MjAwKXtcbiAgICAgICAgICBzZXREb21haW5zKHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2FsbGluZygpO1xuICB9LFtdKTtcbiAgY29uc3QgbGluayA9IGAvY2hvb3NlaWRlYS9gO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWluLWgtc2NyZWVuIGJnLXNsYXRlLTUwMCB0ZXh0LWJsYWNrIGZvbnQtc2Fucyc+XG4gICAgICAgIFxuICAgICAgICA8TmF2YmFyLz5cbiAgICAgICAgeyhkb21haW5zJiZkb21haW5zLmxlbmd0aCE9PTApPzxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB0LTMyIHRleHQtM3hsIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCc+RG9tYWluJ3M8L2gxPjo8PjwvPn1cbiAgICAgICAgICB7ZG9tYWlucyAmJiBkb21haW5zLmxlbmd0aCAhPT0gMCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCBnYXAtMTAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB0LTEyIG10LTYgYm94LWJvcmRlciBweC02IHBiLTEwJz5cbiAgICAgICAgICAgICAge2RvbWFpbnMubWFwKChkb21haW4pID0+IChcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rK2Ake2RvbWFpbi5kb21haW59L2B9IGNsYXNzTmFtZT0nYmctc2xhdGUtNzAwIHRleHQtd2hpdGUgcHgtMTIgcHktNiByb3VuZGVkLTJ4bCBzaGFkb3ctbWQnPlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0zeGwgcGItNic+e2RvbWFpbi5kb21haW59PC9oMj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14bCc+VG90YWwgQ291bnQ6IHtkb21haW4udG90YWxDb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteGwnPkF2YWlsYWJsZSBDb3VudDoge2RvbWFpbi5hdmFpbGFibGVDb3VudH08L3A+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB0LTMyIHRleHQtM3hsIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCc+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXZiYXIiLCJIb21lIiwiZG9tYWlucyIsInNldERvbWFpbnMiLCJjYWxsaW5nIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibGluayIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsImgxIiwibWFwIiwiZG9tYWluIiwiYSIsImhyZWYiLCJoMiIsInAiLCJ0b3RhbENvdW50IiwiYXZhaWxhYmxlQ291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});