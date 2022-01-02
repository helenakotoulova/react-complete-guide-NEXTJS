webpackHotUpdate_N_E("pages/index",{

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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a huge list of React meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFxQkE7QUFDQTtBQUNBO0FBQ0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRCxDLENBQ0Q7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0tBaEJTRixRO0FBNkNUO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUEsdUVBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWNkYTdmZTIyYzVjMmQ4N2Y1ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwibTFcIixcclxuICAgIHRpdGxlOiBcIkEgRmlyc3QgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXAhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtMlwiLFxyXG4gICAgdGl0bGU6IFwiQSBTZWNvbmQgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBzZWNvbmQgbWVldHVwIVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vLyBEVUxFWklURVxyXG4vLyB0YWt5IHByaWRhbWUgaGVhZCBNZXRhZGF0YSAtIGJ1ZGUgdGFtIG5lamFreSBrcmF0a3kgcG9waXMgdGUgbmFzaSBzdHJhbmt5LCBrZHl6IG5la2RvIHR1IHN0cmFua3UgdnlobGVkdmEgbmEgZ29vZ2xlLlxyXG4vLyBwbHVzIG11c2ltZSBwcmlkYXQgdGl0bGUuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlJlYWN0IE1lZXR1cHM8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJCcm93c2UgYSBodWdlIGxpc3Qgb2YgUmVhY3QgbWVldHVwc1wiPjwvbWV0YT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcbi8vIGpzb3UgdG8gdHkgbWVldHVwcyB6IGdldFN0YXRpY1Byb3BzXHJcblxyXG4vLyBnZXRTdGF0aWNQcm9wcyBqZSBmY2UgcHJvIFNUQVRJQyBHRU5FUkFUSU9OIChwcmUtcmVuZGVyaW5nKSwgamRlIHphdm9sYXQgamVuIHYgemFsb3pjZSBwYWdlc1xyXG4vLyBwb2t1ZCBuZXh0SlMgbmFqZGUgdHVobGUgZmNpLCB0YWsgamkgemF2b2xhIG5lamRyaXYgKGJ0dy4gbXV6ZSBieXQgYXN5bmMsIHR6biB2cmFjaSBwcm9taXNlKSBhXHJcbi8vIHppc2thIHR5IHN0YXRpYyBQcm9wcywga3RlcnkgcG91emlqZSBwcm8gdnlyZW5kZXJvdmFuaSB0ZSBrb21wb25lbnR5XHJcbi8vIGplIHRvIGNvZGUsIGt0ZXJ5IG5pa2R5IG5lcG9qZWRlIG5hIGNsaWVudC1zaWRlLCBwcm90b3plIGplIGV4ZWN1dGVkIGR1cmluZyB0aGUgYnVpbGQgcHJvY2Vzc1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vaGVsZW5hOjEyMzQ1Njc4OTBAY2x1c3RlcjAuam1hdmYubW9uZ29kYi5uZXQvbXlGaXJzdERhdGFiYXNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG4gIC8vIHdlIG11c3QgcmV0dXJuIGFuIG9iamVjdC5cclxuICByZXR1cm4ge1xyXG4gICAgLy8gb2JqZWN0IHMgcHJvcHMsIGt0ZXJlIHBhayBkYW1lIGpha28gaW5wdXQgZG8gdGUga29tcG9uZW50eSBIb21lUGFnZVxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuICAgICAgLy8geiBtb25nb2RiOlxyXG4gICAgICAvKm1lZXR1cHM6IG1lZXR1cHMubWFwKG1lZXR1cD0+ICh7XHJcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgIH0pKVxyXG4gICAgICAqL1xyXG4gICAgfSxcclxuICAgIC8vIGFub3RoZXIgcHJvcDogcmV2YWxpZGF0ZSAtIGNoY2UgY2lzbG8gLSBjb3ogamUgcG9jZXQgc2VrdW5kLCBuZXogcHJvYmVobmUgcmV2YWxpZGFjZSB0ZWNoIGRhdCwgamVzdGxpIG5lanNvdSBvdXRkYXRlZFxyXG4gICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgfTtcclxufVxyXG5cclxuLy8gcHJvIFNFUlZFUi1TSURFIFJFTkRFUklOR1xyXG4vLyBuZXBvYmV6aSBkdXJpbmcgdGhlIGJ1aWxkIHByb2Nlc3MsIGFsZSBwbyBkZXBsb3ltZW50XHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSSAtIGl0IHdpbGwgbmV2ZXIgcnVuIG9uIGNsaWVudC1zaWRlXHJcbiAvLyBvcGV0IHZyYWNpIG9iamVrdC4gYWxlIG5lbmkgdGFkeSByZXZhbGlkYXRlIHByb3AsIHRhIG5lbWEgdGFkeSB2eXpuYW0sIHByb3RvemUgc2UgdG8gYWt0dWFsaXphdWplIHBybyBrYXpkb3UgaW5jb21pbmcgcmVxdWVzdCBcclxuIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxOyAvLyByZXF1ZXN0IC0gbXV6ZSBzZSBob2RpdCwga2R5eiBuYXMgemFqaW1hIHR5cGUgb2YgcmVxdWVzdCAtIG5hcHIuIGF1dGhlbnRpY2F0aW9uIFxyXG4gY29uc3QgcmVzID0gY29udGV4dC5yZXM7IC8vIHJlc3BvbnNlXHJcbiBcclxuIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuRmV0Y2hpbmcgZGF0YSB3aXRoIE5leHRKUyBtdXplIHZlc3QgayBwcm9ibGVtdW06XHJcbk5leHRKcyBwcmVyZW5kZXJ1amUgc3RyYW5rdSwgYWxlIGplc3RlIG5lbWEgZmV0Y2hseSBkYXRhLFxyXG50YWt6ZSBtdXplIHZ5cmVuZGVyb3ZhdCBwcmF6ZG5vdSBzdHJhbmt1LlxyXG5Qcm90byBleGlzdHVqaSAyIGZvcm15IG9mIHByZS1yZW5kZXJpbmc6XHJcbjEuIHN0YXRpYyBnZW5lcmF0aW9uIC0gdnl0dm9yaSBzZSB0byBwcmkgYXBwIGRlcGxveW1lbnQgKHBvIG5wbSBydW4gYnVpbGQpXHJcbktkeXogcGFrIGRhbWUgbnBtIHJ1biBidWlsZCwgdGFrIHNlIG5hbSB1a2F6ZSwgemUgc2UgbmFsb2Fkb3ZhbGkgNCBzdHJhbmt5LlxyXG5Ib21lUGFnZSBqZSBzc2cgKHN0YXRpYyBodG1sICsganNvbikgLSB1c2VzIGdldFN0YXRpY1Byb3BzLCBzc2cgPSBzdGF0aWMgc2l0ZSBnZW5lcmF0aW9uXHJcbk9zdGF0bmkganNvdSB6YXRpbSBzdGF0aWMgLSBzdGF0aWMgaHRtbCwgbm8gaW5pdGlhbCBwcm9wc1xyXG5OZXdNZWV0dXBGb3JtIGtsaWRuZSBtdXplIHp1c3RhdCBzdGF0aWMgYmV6IGluaXRpYWwgcHJvcHMuXHJcbkdldFN0YXRpY1Byb3BzIGFsZSBwcmlkYW1lIGkgcHJvIG1lZXR1cERldGFpbCBQYWdlLlxyXG5QcmlkYW1lIGkgcHJvcCByZXZhbGlkYXRlLCBwb3BzYW5vdSB2eXNlLlxyXG5LRFlaIFBPVVpJVkFNRSBHRVRTVEFUSUNQUk9QUywgTVVTSU1FIFBPVVpJVCBJIEZDSSBHRVRTVEFUSUNQQVRIUy5cclxuXHJcbjIuIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xyXG5BbGUgbmVrZHkgYW5pIHRvIHJldmFsaWRvdmFuaSBwbyBrYXpkeWNoIHggc2VrdW5kYWNoIG5lbmkgZG9zdGF0ZWNuZSxcclxubmVrZHkgY2hjZW1lIGFieSBzZSB0byByZXZhbGlkb3ZhbG8gcHJpIGthemRlIGluY29taW5nIHJlcXVlc3QsXHJcbnRha3plIGNoY2VtZSBwcmUtZ2VuZXJhdGUgdGhlIHBhZ2UgZHluYW1pY2FsbHkgLSBhZnRlciBkZXBsb3ltZW50LFxyXG5ub3QgZHVyaW5nIHRoZSBidWlsZCBwcm9jZXNzIGFuZCBub3QgZXZlcnkgY291cGxlIG9mIHNlY29uZHMsIEJVVCBGT1IgRVZFUlkgUkVRVUVTVFxyXG5Qcm8gbmFzIGplIHYgdG9tdG8gcHJpcGFkZSBsZXBzaSB0byBnZXRTdGF0aWNQcm9wcywgIHByb3RvemUgc2UgbmFtIHR5IGRhdGEgbW9jIG5lbWVuaSxcclxuYWxlIHVrYXplbWUgc2kgaSBhbHRlcm5hdGl2dSA9PiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKVxyXG5cclxuVFpOLiBQT0tVRCBTRSBOQU0gREFUQSBORU1FTkkgTU9DIENBU1RPIEEgUE9LVUQgTkVQT1RSRUJVSkVNRSBQUklTVFVQIEsgVFlQRSBPRiBSRVFVRVNULFxyXG5KRSBMRVBTSSBQT1VaSVQgR0VUU1RBVElDUFJPUFMgLSBwYWsgamUgdG8gcnljaGxlanNpLlxyXG4qL1xyXG5cclxuLypcclxuTmV4dEpTIGVuYWJsZXMgdXMgdG8gYnVpbGQgb3VyIG93biBiYWNrZW5kIHdpdGhpbiB0aGlzIFBST0pFQ1QhXHJcbj0+IEFQSSByb3V0ZXMuIC0gc3BlY2lhbCByb3V0ZXMgKHBhZ2VzKSwga3RlcmUgbmV2cmFjaSBrb21wb25lbnR5LCBhbGUgb2JzYWh1amkga29kIHByb1xyXG5odHRwIHJlcXVlc3RzLCBmZXRjaGluZyBkYXRhLCBzdG9yaW5nIGRhdGFcclxuPT4gc3BlY2lhbCBmb2xkZXIgaW4gcGFnZXMgZm9sZGVyOiBhcGlcclxuKi9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==