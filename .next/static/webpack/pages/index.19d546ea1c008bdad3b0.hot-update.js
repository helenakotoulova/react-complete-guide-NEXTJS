webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Helena\\IT\\React\\ReactKurzComplete\\nextJs-BIGGER-PROJECT\\nextJs-BIGGER-PROJECT\\nextJs-BIGGER-PROJECT\\pages\\index.js";




// DULEZITE
// taky pridame head Metadata - bude tam nejaky kratky popis te nasi stranky, kdyz nekdo tu stranku vyhledva na google.
// plus musime pridat title.
function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
} // jsou to ty meetups z getStaticProps
// getStaticProps je fce pro STATIC GENERATION (pre-rendering), jde zavolat jen v zalozce pages
// pokud nextJS najde tuhle fci, tak ji zavola nejdriv (btw. muze byt async, tzn vraci promise) a
// ziska ty static Props, ktery pouzije pro vyrenderovani te komponenty
// je to code, ktery nikdy nepojede na client-side, protoze je executed during the build process


_c = HomePage;
// pro SERVER-SIDE RENDERING
// nepobezi during the build process, ale po deployment

/*
export async function getServerSideProps(context) {
 // fetch data from an API - it will never run on client-side
 // opet vraci objekt. ale neni tady revalidate prop, ta nema tady vyznam, protoze se to aktualizauje pro kazdou incoming request 
 const req = context.req; // request - muze se hodit, kdyz nas zajima type of request - napr. authentication 
 const res = context.res; // response
 
 return {
    props: {
      meetups: DUMMY_MEETUPS,
    }
  }
}
*/
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);
/* ---------------------------------------------------------------
Fetching data with NextJS muze vest k problemum:
NextJs prerenderuje stranku, ale jeste nema fetchly data,
takze muze vyrenderovat prazdnou stranku.
Proto existuji 2 formy of pre-rendering:
1. static generation - vytvori se to pri app deployment (po npm run build)
Kdyz pak dame npm run build, tak se nam ukaze, ze se naloadovali 4 stranky.
HomePage je ssg (static html + json) - uses getStaticProps, ssg = static site generation
Ostatni jsou zatim static - static html, no initial props
NewMeetupForm klidne muze zustat static bez initial props.
GetStaticProps ale pridame i pro meetupDetail Page.
Pridame i prop revalidate, popsanou vyse.
KDYZ POUZIVAME GETSTATICPROPS, MUSIME POUZIT I FCI GETSTATICPATHS.

2. server-side rendering
Ale nekdy ani to revalidovani po kazdych x sekundach neni dostatecne,
nekdy chceme aby se to revalidovalo pri kazde incoming request,
takze chceme pre-generate the page dynamically - after deployment,
not during the build process and not every couple of seconds, BUT FOR EVERY REQUEST
Pro nas je v tomto pripade lepsi to getStaticProps,  protoze se nam ty data moc nemeni,
ale ukazeme si i alternativu => getServerSideProps()

TZN. POKUD SE NAM DATA NEMENI MOC CASTO A POKUD NEPOTREBUJEME PRISTUP K TYPE OF REQUEST,
JE LEPSI POUZIT GETSTATICPROPS - pak je to rychlejsi.
*/

/*
NextJS enables us to build our own backend within this PROJECT!
=> API routes. - special routes (pages), ktere nevraci komponenty, ale obsahuji kod pro
http requests, fetching data, storing data
=> special folder in pages folder: api
*/

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlCQUFpQixtQkFBTyxDQUFDLHFGQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXREO0FBRUE7QUFDQTs7QUFxQkE7QUFDQTtBQUNBO0FBQ0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQsQyxDQUNEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztLQWZTRixRO0FBNENUO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUEsdUVBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTlkNTQ2ZWExYzAwOGJkYWQzYjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkJylcbiIsImltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwibTFcIixcclxuICAgIHRpdGxlOiBcIkEgRmlyc3QgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXAhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtMlwiLFxyXG4gICAgdGl0bGU6IFwiQSBTZWNvbmQgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBzZWNvbmQgbWVldHVwIVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vLyBEVUxFWklURVxyXG4vLyB0YWt5IHByaWRhbWUgaGVhZCBNZXRhZGF0YSAtIGJ1ZGUgdGFtIG5lamFreSBrcmF0a3kgcG9waXMgdGUgbmFzaSBzdHJhbmt5LCBrZHl6IG5la2RvIHR1IHN0cmFua3UgdnlobGVkdmEgbmEgZ29vZ2xlLlxyXG4vLyBwbHVzIG11c2ltZSBwcmlkYXQgdGl0bGUuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlJlYWN0IE1lZXR1cHM8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuLy8ganNvdSB0byB0eSBtZWV0dXBzIHogZ2V0U3RhdGljUHJvcHNcclxuXHJcbi8vIGdldFN0YXRpY1Byb3BzIGplIGZjZSBwcm8gU1RBVElDIEdFTkVSQVRJT04gKHByZS1yZW5kZXJpbmcpLCBqZGUgemF2b2xhdCBqZW4gdiB6YWxvemNlIHBhZ2VzXHJcbi8vIHBva3VkIG5leHRKUyBuYWpkZSB0dWhsZSBmY2ksIHRhayBqaSB6YXZvbGEgbmVqZHJpdiAoYnR3LiBtdXplIGJ5dCBhc3luYywgdHpuIHZyYWNpIHByb21pc2UpIGFcclxuLy8gemlza2EgdHkgc3RhdGljIFByb3BzLCBrdGVyeSBwb3V6aWplIHBybyB2eXJlbmRlcm92YW5pIHRlIGtvbXBvbmVudHlcclxuLy8gamUgdG8gY29kZSwga3RlcnkgbmlrZHkgbmVwb2plZGUgbmEgY2xpZW50LXNpZGUsIHByb3RvemUgamUgZXhlY3V0ZWQgZHVyaW5nIHRoZSBidWlsZCBwcm9jZXNzXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9oZWxlbmE6MTIzNDU2Nzg5MEBjbHVzdGVyMC5qbWF2Zi5tb25nb2RiLm5ldC9teUZpcnN0RGF0YWJhc2U/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgLy8gd2UgbXVzdCByZXR1cm4gYW4gb2JqZWN0LlxyXG4gIHJldHVybiB7XHJcbiAgICAvLyBvYmplY3QgcyBwcm9wcywga3RlcmUgcGFrIGRhbWUgamFrbyBpbnB1dCBkbyB0ZSBrb21wb25lbnR5IEhvbWVQYWdlXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4gICAgICAvLyB6IG1vbmdvZGI6XHJcbiAgICAgIC8qbWVldHVwczogbWVldHVwcy5tYXAobWVldHVwPT4gKHtcclxuICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgfSkpXHJcbiAgICAgICovXHJcbiAgICB9LFxyXG4gICAgLy8gYW5vdGhlciBwcm9wOiByZXZhbGlkYXRlIC0gY2hjZSBjaXNsbyAtIGNveiBqZSBwb2NldCBzZWt1bmQsIG5leiBwcm9iZWhuZSByZXZhbGlkYWNlIHRlY2ggZGF0LCBqZXN0bGkgbmVqc291IG91dGRhdGVkXHJcbiAgICByZXZhbGlkYXRlOiAxMCxcclxuICB9O1xyXG59XHJcblxyXG4vLyBwcm8gU0VSVkVSLVNJREUgUkVOREVSSU5HXHJcbi8vIG5lcG9iZXppIGR1cmluZyB0aGUgYnVpbGQgcHJvY2VzcywgYWxlIHBvIGRlcGxveW1lbnRcclxuLypcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJIC0gaXQgd2lsbCBuZXZlciBydW4gb24gY2xpZW50LXNpZGVcclxuIC8vIG9wZXQgdnJhY2kgb2JqZWt0LiBhbGUgbmVuaSB0YWR5IHJldmFsaWRhdGUgcHJvcCwgdGEgbmVtYSB0YWR5IHZ5em5hbSwgcHJvdG96ZSBzZSB0byBha3R1YWxpemF1amUgcHJvIGthemRvdSBpbmNvbWluZyByZXF1ZXN0IFxyXG4gY29uc3QgcmVxID0gY29udGV4dC5yZXE7IC8vIHJlcXVlc3QgLSBtdXplIHNlIGhvZGl0LCBrZHl6IG5hcyB6YWppbWEgdHlwZSBvZiByZXF1ZXN0IC0gbmFwci4gYXV0aGVudGljYXRpb24gXHJcbiBjb25zdCByZXMgPSBjb250ZXh0LnJlczsgLy8gcmVzcG9uc2VcclxuIFxyXG4gcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5GZXRjaGluZyBkYXRhIHdpdGggTmV4dEpTIG11emUgdmVzdCBrIHByb2JsZW11bTpcclxuTmV4dEpzIHByZXJlbmRlcnVqZSBzdHJhbmt1LCBhbGUgamVzdGUgbmVtYSBmZXRjaGx5IGRhdGEsXHJcbnRha3plIG11emUgdnlyZW5kZXJvdmF0IHByYXpkbm91IHN0cmFua3UuXHJcblByb3RvIGV4aXN0dWppIDIgZm9ybXkgb2YgcHJlLXJlbmRlcmluZzpcclxuMS4gc3RhdGljIGdlbmVyYXRpb24gLSB2eXR2b3JpIHNlIHRvIHByaSBhcHAgZGVwbG95bWVudCAocG8gbnBtIHJ1biBidWlsZClcclxuS2R5eiBwYWsgZGFtZSBucG0gcnVuIGJ1aWxkLCB0YWsgc2UgbmFtIHVrYXplLCB6ZSBzZSBuYWxvYWRvdmFsaSA0IHN0cmFua3kuXHJcbkhvbWVQYWdlIGplIHNzZyAoc3RhdGljIGh0bWwgKyBqc29uKSAtIHVzZXMgZ2V0U3RhdGljUHJvcHMsIHNzZyA9IHN0YXRpYyBzaXRlIGdlbmVyYXRpb25cclxuT3N0YXRuaSBqc291IHphdGltIHN0YXRpYyAtIHN0YXRpYyBodG1sLCBubyBpbml0aWFsIHByb3BzXHJcbk5ld01lZXR1cEZvcm0ga2xpZG5lIG11emUgenVzdGF0IHN0YXRpYyBiZXogaW5pdGlhbCBwcm9wcy5cclxuR2V0U3RhdGljUHJvcHMgYWxlIHByaWRhbWUgaSBwcm8gbWVldHVwRGV0YWlsIFBhZ2UuXHJcblByaWRhbWUgaSBwcm9wIHJldmFsaWRhdGUsIHBvcHNhbm91IHZ5c2UuXHJcbktEWVogUE9VWklWQU1FIEdFVFNUQVRJQ1BST1BTLCBNVVNJTUUgUE9VWklUIEkgRkNJIEdFVFNUQVRJQ1BBVEhTLlxyXG5cclxuMi4gc2VydmVyLXNpZGUgcmVuZGVyaW5nXHJcbkFsZSBuZWtkeSBhbmkgdG8gcmV2YWxpZG92YW5pIHBvIGthemR5Y2ggeCBzZWt1bmRhY2ggbmVuaSBkb3N0YXRlY25lLFxyXG5uZWtkeSBjaGNlbWUgYWJ5IHNlIHRvIHJldmFsaWRvdmFsbyBwcmkga2F6ZGUgaW5jb21pbmcgcmVxdWVzdCxcclxudGFremUgY2hjZW1lIHByZS1nZW5lcmF0ZSB0aGUgcGFnZSBkeW5hbWljYWxseSAtIGFmdGVyIGRlcGxveW1lbnQsXHJcbm5vdCBkdXJpbmcgdGhlIGJ1aWxkIHByb2Nlc3MgYW5kIG5vdCBldmVyeSBjb3VwbGUgb2Ygc2Vjb25kcywgQlVUIEZPUiBFVkVSWSBSRVFVRVNUXHJcblBybyBuYXMgamUgdiB0b210byBwcmlwYWRlIGxlcHNpIHRvIGdldFN0YXRpY1Byb3BzLCAgcHJvdG96ZSBzZSBuYW0gdHkgZGF0YSBtb2MgbmVtZW5pLFxyXG5hbGUgdWthemVtZSBzaSBpIGFsdGVybmF0aXZ1ID0+IGdldFNlcnZlclNpZGVQcm9wcygpXHJcblxyXG5UWk4uIFBPS1VEIFNFIE5BTSBEQVRBIE5FTUVOSSBNT0MgQ0FTVE8gQSBQT0tVRCBORVBPVFJFQlVKRU1FIFBSSVNUVVAgSyBUWVBFIE9GIFJFUVVFU1QsXHJcbkpFIExFUFNJIFBPVVpJVCBHRVRTVEFUSUNQUk9QUyAtIHBhayBqZSB0byByeWNobGVqc2kuXHJcbiovXHJcblxyXG4vKlxyXG5OZXh0SlMgZW5hYmxlcyB1cyB0byBidWlsZCBvdXIgb3duIGJhY2tlbmQgd2l0aGluIHRoaXMgUFJPSkVDVCFcclxuPT4gQVBJIHJvdXRlcy4gLSBzcGVjaWFsIHJvdXRlcyAocGFnZXMpLCBrdGVyZSBuZXZyYWNpIGtvbXBvbmVudHksIGFsZSBvYnNhaHVqaSBrb2QgcHJvXHJcbmh0dHAgcmVxdWVzdHMsIGZldGNoaW5nIGRhdGEsIHN0b3JpbmcgZGF0YVxyXG49PiBzcGVjaWFsIGZvbGRlciBpbiBwYWdlcyBmb2xkZXI6IGFwaVxyXG4qL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9