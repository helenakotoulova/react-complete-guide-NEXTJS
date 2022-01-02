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

var _jsxFileName = "D:\\Helena\\IT\\React\\ReactKurzComplete\\nextJs-BIGGER-PROJECT\\nextJs-BIGGER-PROJECT\\nextJs-BIGGER-PROJECT\\pages\\index.js";


function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 10
  }, this); // jsou to ty meetups z getStaticProps
} // getStaticProps je fce pro STATIC GENERATION (pre-rendering), jde zavolat jen v zalozce pages
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBc0JBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUCxDQUR1QixDQUN3QjtBQUNoRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7OztLQVBTRixRO0FBb0NUO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZUEsdUVBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2UyOTJmNTZiOGU2YzNlNDAzM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQge01vbmdvQ2xpZW50fSBmcm9tICdtb25nb2RiJztcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwibTFcIixcclxuICAgIHRpdGxlOiBcIkEgRmlyc3QgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXAhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtMlwiLFxyXG4gICAgdGl0bGU6IFwiQSBTZWNvbmQgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBzZWNvbmQgbWVldHVwIVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjsgLy8ganNvdSB0byB0eSBtZWV0dXBzIHogZ2V0U3RhdGljUHJvcHNcclxufVxyXG5cclxuLy8gZ2V0U3RhdGljUHJvcHMgamUgZmNlIHBybyBTVEFUSUMgR0VORVJBVElPTiAocHJlLXJlbmRlcmluZyksIGpkZSB6YXZvbGF0IGplbiB2IHphbG96Y2UgcGFnZXNcclxuLy8gcG9rdWQgbmV4dEpTIG5hamRlIHR1aGxlIGZjaSwgdGFrIGppIHphdm9sYSBuZWpkcml2IChidHcuIG11emUgYnl0IGFzeW5jLCB0em4gdnJhY2kgcHJvbWlzZSkgYVxyXG4vLyB6aXNrYSB0eSBzdGF0aWMgUHJvcHMsIGt0ZXJ5IHBvdXppamUgcHJvIHZ5cmVuZGVyb3ZhbmkgdGUga29tcG9uZW50eVxyXG4vLyBqZSB0byBjb2RlLCBrdGVyeSBuaWtkeSBuZXBvamVkZSBuYSBjbGllbnQtc2lkZSwgcHJvdG96ZSBqZSBleGVjdXRlZCBkdXJpbmcgdGhlIGJ1aWxkIHByb2Nlc3NcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vIGZldGNoIGRhdGEgZnJvbSBhbiBBUElcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgJ21vbmdvZGIrc3J2Oi8vaGVsZW5hOjEyMzQ1Njc4OTBAY2x1c3RlcjAuam1hdmYubW9uZ29kYi5uZXQvbXlGaXJzdERhdGFiYXNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG4gIC8vIHdlIG11c3QgcmV0dXJuIGFuIG9iamVjdC5cclxuICByZXR1cm4ge1xyXG4gICAgLy8gb2JqZWN0IHMgcHJvcHMsIGt0ZXJlIHBhayBkYW1lIGpha28gaW5wdXQgZG8gdGUga29tcG9uZW50eSBIb21lUGFnZVxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuICAgICAgLy8geiBtb25nb2RiOlxyXG4gICAgICAvKm1lZXR1cHM6IG1lZXR1cHMubWFwKG1lZXR1cD0+ICh7XHJcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgIH0pKVxyXG4gICAgICAqL1xyXG4gICAgfSxcclxuICAgIC8vIGFub3RoZXIgcHJvcDogcmV2YWxpZGF0ZSAtIGNoY2UgY2lzbG8gLSBjb3ogamUgcG9jZXQgc2VrdW5kLCBuZXogcHJvYmVobmUgcmV2YWxpZGFjZSB0ZWNoIGRhdCwgamVzdGxpIG5lanNvdSBvdXRkYXRlZFxyXG4gICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgfTtcclxufVxyXG5cclxuLy8gcHJvIFNFUlZFUi1TSURFIFJFTkRFUklOR1xyXG4vLyBuZXBvYmV6aSBkdXJpbmcgdGhlIGJ1aWxkIHByb2Nlc3MsIGFsZSBwbyBkZXBsb3ltZW50XHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSSAtIGl0IHdpbGwgbmV2ZXIgcnVuIG9uIGNsaWVudC1zaWRlXHJcbiAvLyBvcGV0IHZyYWNpIG9iamVrdC4gYWxlIG5lbmkgdGFkeSByZXZhbGlkYXRlIHByb3AsIHRhIG5lbWEgdGFkeSB2eXpuYW0sIHByb3RvemUgc2UgdG8gYWt0dWFsaXphdWplIHBybyBrYXpkb3UgaW5jb21pbmcgcmVxdWVzdCBcclxuIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxOyAvLyByZXF1ZXN0IC0gbXV6ZSBzZSBob2RpdCwga2R5eiBuYXMgemFqaW1hIHR5cGUgb2YgcmVxdWVzdCAtIG5hcHIuIGF1dGhlbnRpY2F0aW9uIFxyXG4gY29uc3QgcmVzID0gY29udGV4dC5yZXM7IC8vIHJlc3BvbnNlXHJcbiBcclxuIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4qL1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkZldGNoaW5nIGRhdGEgd2l0aCBOZXh0SlMgbXV6ZSB2ZXN0IGsgcHJvYmxlbXVtOlxyXG5OZXh0SnMgcHJlcmVuZGVydWplIHN0cmFua3UsIGFsZSBqZXN0ZSBuZW1hIGZldGNobHkgZGF0YSxcclxudGFremUgbXV6ZSB2eXJlbmRlcm92YXQgcHJhemRub3Ugc3RyYW5rdS5cclxuUHJvdG8gZXhpc3R1amkgMiBmb3JteSBvZiBwcmUtcmVuZGVyaW5nOlxyXG4xLiBzdGF0aWMgZ2VuZXJhdGlvbiAtIHZ5dHZvcmkgc2UgdG8gcHJpIGFwcCBkZXBsb3ltZW50IChwbyBucG0gcnVuIGJ1aWxkKVxyXG5LZHl6IHBhayBkYW1lIG5wbSBydW4gYnVpbGQsIHRhayBzZSBuYW0gdWthemUsIHplIHNlIG5hbG9hZG92YWxpIDQgc3RyYW5reS5cclxuSG9tZVBhZ2UgamUgc3NnIChzdGF0aWMgaHRtbCArIGpzb24pIC0gdXNlcyBnZXRTdGF0aWNQcm9wcywgc3NnID0gc3RhdGljIHNpdGUgZ2VuZXJhdGlvblxyXG5Pc3RhdG5pIGpzb3UgemF0aW0gc3RhdGljIC0gc3RhdGljIGh0bWwsIG5vIGluaXRpYWwgcHJvcHNcclxuTmV3TWVldHVwRm9ybSBrbGlkbmUgbXV6ZSB6dXN0YXQgc3RhdGljIGJleiBpbml0aWFsIHByb3BzLlxyXG5HZXRTdGF0aWNQcm9wcyBhbGUgcHJpZGFtZSBpIHBybyBtZWV0dXBEZXRhaWwgUGFnZS5cclxuUHJpZGFtZSBpIHByb3AgcmV2YWxpZGF0ZSwgcG9wc2Fub3UgdnlzZS5cclxuS0RZWiBQT1VaSVZBTUUgR0VUU1RBVElDUFJPUFMsIE1VU0lNRSBQT1VaSVQgSSBGQ0kgR0VUU1RBVElDUEFUSFMuXHJcblxyXG4yLiBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcclxuQWxlIG5la2R5IGFuaSB0byByZXZhbGlkb3ZhbmkgcG8ga2F6ZHljaCB4IHNla3VuZGFjaCBuZW5pIGRvc3RhdGVjbmUsXHJcbm5la2R5IGNoY2VtZSBhYnkgc2UgdG8gcmV2YWxpZG92YWxvIHByaSBrYXpkZSBpbmNvbWluZyByZXF1ZXN0LFxyXG50YWt6ZSBjaGNlbWUgcHJlLWdlbmVyYXRlIHRoZSBwYWdlIGR5bmFtaWNhbGx5IC0gYWZ0ZXIgZGVwbG95bWVudCxcclxubm90IGR1cmluZyB0aGUgYnVpbGQgcHJvY2VzcyBhbmQgbm90IGV2ZXJ5IGNvdXBsZSBvZiBzZWNvbmRzLCBCVVQgRk9SIEVWRVJZIFJFUVVFU1RcclxuUHJvIG5hcyBqZSB2IHRvbXRvIHByaXBhZGUgbGVwc2kgdG8gZ2V0U3RhdGljUHJvcHMsICBwcm90b3plIHNlIG5hbSB0eSBkYXRhIG1vYyBuZW1lbmksXHJcbmFsZSB1a2F6ZW1lIHNpIGkgYWx0ZXJuYXRpdnUgPT4gZ2V0U2VydmVyU2lkZVByb3BzKClcclxuXHJcblRaTi4gUE9LVUQgU0UgTkFNIERBVEEgTkVNRU5JIE1PQyBDQVNUTyBBIFBPS1VEIE5FUE9UUkVCVUpFTUUgUFJJU1RVUCBLIFRZUEUgT0YgUkVRVUVTVCxcclxuSkUgTEVQU0kgUE9VWklUIEdFVFNUQVRJQ1BST1BTIC0gcGFrIGplIHRvIHJ5Y2hsZWpzaS5cclxuKi9cclxuXHJcbi8qXHJcbk5leHRKUyBlbmFibGVzIHVzIHRvIGJ1aWxkIG91ciBvd24gYmFja2VuZCB3aXRoaW4gdGhpcyBQUk9KRUNUIVxyXG49PiBBUEkgcm91dGVzLiAtIHNwZWNpYWwgcm91dGVzIChwYWdlcyksIGt0ZXJlIG5ldnJhY2kga29tcG9uZW50eSwgYWxlIG9ic2FodWppIGtvZCBwcm9cclxuaHR0cCByZXF1ZXN0cywgZmV0Y2hpbmcgZGF0YSwgc3RvcmluZyBkYXRhXHJcbj0+IHNwZWNpYWwgZm9sZGVyIGluIHBhZ2VzIGZvbGRlcjogYXBpXHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==