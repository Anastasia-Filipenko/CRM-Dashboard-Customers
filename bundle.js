/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.sass":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.sass ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Poppins-Regular.ttf */ "./src/assets/fonts/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Poppins-Medium.ttf */ "./src/assets/fonts/Poppins-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Poppins-SemiBold.ttf */ "./src/assets/fonts/Poppins-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  margin-left: 346px;
  margin-bottom: 53px;
}
.header__title {
  margin-top: 40px;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .header {
    margin-left: 60px;
  }
}
@media (max-width: 480px) {
  .header {
    margin-left: 60px;
    margin-bottom: 10px;
  }
  .header__title {
    margin-top: 10px;
  }
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 306px;
  height: 100vh;
}
.sidebar__container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ffffff;
}
.sidebar__container__nav {
  height: 100vh;
}
.sidebar__menu {
  display: none;
  width: 325px;
  height: 35px;
}
.sidebar__logo {
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 1.3px;
  margin-left: 31px;
  margin-bottom: 58px;
  margin-top: 40px;
}
.sidebar__logo__icon {
  width: 37px;
  height: 37px;
  margin-right: 11px;
}
.sidebar__logo__span {
  color: #838383;
  font-weight: 500;
  font-size: 10px;
  padding-left: 4px;
  letter-spacing: 0px;
  padding-top: 12px;
}
.sidebar__list {
  width: 100%;
}
.sidebar__item {
  display: flex;
  align-items: center;
  color: #9197B3;
  margin-bottom: 20px;
  height: 48px;
  width: 266px;
  margin-left: 30px;
  transition: transform 1s ease;
}
.sidebar__item:hover {
  transform: scale(1.1);
}
.sidebar__item.current {
  border-radius: 8px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  background-color: #5932EA;
}
.sidebar__item.current .sidebar__icon__right {
  stroke: #fff;
  fill: none;
}
.sidebar__item__title {
  font-weight: 500;
  font-size: 14px;
  width: 78px;
  padding-right: 85px;
  letter-spacing: 0.5px;
  padding-left: 15px;
  padding-top: 2px;
}
.sidebar__icon {
  width: 25px;
  height: 25px;
  padding-left: 12px;
}
.sidebar__icon__right {
  width: 16px;
  height: 16px;
  stroke: #9197B3;
  fill: none;
  margin-left: 27px;
}
.sidebar__user {
  display: flex;
  align-items: center;
  margin-bottom: 133px;
  margin-left: 31px;
  height: 42px;
  transition: transform 1s ease;
}
.sidebar__user:hover {
  transform: scale(1.1);
}
.sidebar__user__avatar {
  width: 43px;
  height: 43px;
}
.sidebar__user__info {
  margin-left: 14px;
}
.sidebar__user__info__name {
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.5px;
}
.sidebar__user__info__position {
  color: #757575;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.5px;
}

.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;
}
.overlay.open {
  display: block;
}

@media (max-width: 768px) {
  .sidebar {
    height: 100%;
    display: none;
    position: fixed;
  }
  .sidebar__logo {
    color: black;
  }
  .sidebar__container {
    justify-content: space-between;
    height: 100%;
  }
  .sidebar__menu {
    display: inline-block;
    position: fixed;
    top: 10px;
    left: 10px;
    width: 35px;
  }
  .sidebar.active {
    display: block;
    z-index: 10;
  }
  .sidebar__user {
    color: black;
    margin-bottom: 50px;
  }
}
.customers {
  flex-direction: column;
  background-color: #FFFFFF;
  width: 968px;
  height: 812px;
  margin-left: 375px;
  border-radius: 30px;
}
.customers__container {
  display: flex;
  justify-content: space-between;
  padding-top: 38px;
  margin-bottom: 40px;
}
.customers__title__container {
  margin-left: 38px;
}
.customers__title {
  font-weight: 600;
  font-size: 22px;
  letter-spacing: -0.5px;
  margin-bottom: 7px;
}
.customers__title__p {
  color: #16C098;
}

.search__box {
  display: flex;
  align-items: center;
  position: relative;
  width: 216px;
  margin-right: 53px;
}
.search__input {
  padding: 10px 15px 10px 40px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: #F9FBFF;
  font-size: 12px;
  color: #B5B7C0;
  outline: none;
  transition: border-color 1s ease;
}
.search__input:active {
  border-color: #7E7E7E;
}
.search__input:focus {
  border-color: #7E7E7E;
}
.search__icon {
  fill: none;
  stroke: #7E7E7E;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

.customers__table {
  width: 968px;
  text-align: left;
  border-collapse: collapse;
  box-sizing: border-box;
  padding: 0 30px;
}

.table__thead {
  background-color: #f9fbff;
  display: table-header-group;
}
.table__th {
  padding: 20px 0 20px 30px;
  font-weight: 500;
  font-size: 14px;
  color: #B5B7C0;
  letter-spacing: -0.5px;
  border-bottom: 1px solid #e2e8f0;
}
.table__th:first-child {
  padding: 12px 0 12px 30px;
}
.table__body {
  padding-left: 30px;
  padding-right: 30px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.5px;
}
.table__tr {
  position: relative;
}
.table__tr::before {
  content: "";
  position: absolute;
  bottom: -1px;
  right: 30px;
  width: calc(100% - 60px);
  border-bottom: 1px solid #e2e8f0;
  transform: translateZ(0);
  overflow: hidden;
  z-index: 9;
}
.table__td {
  padding: 20px 0 20px 30px;
  font-size: 14px;
  color: #2d3748;
}
.table__td:first-child {
  padding-left: 30px;
}
.table__td .status {
  height: 29px;
  width: 80px;
  padding: 5px 10px;
  font-weight: 500;
  border-radius: 4px;
}
.table__td .status.active {
  background-color: #e6fffa;
  color: #38a169;
  border: 1px solid #38a169;
  padding-left: 18px;
  padding-right: 18px;
}
.table__td .status.inactive {
  background-color: #fff5f5;
  border: 1px solid #e53e3e;
  color: #e53e3e;
  padding-left: 12px;
  padding-right: 12px;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}
.pagination__info {
  color: #B5B7C0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin-left: 38px;
}
.pagination__box__btn {
  display: flex;
  align-items: center;
  margin-right: 40px;
}
.pagination__numbers {
  display: flex;
}
.pagination__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #404B52;
  background-color: #F5F5F5;
  border-radius: 4px;
  margin-left: 6px;
  margin-right: 6px;
  width: 25px;
  height: 25px;
  border: none;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.5px;
  transition: background-color 1s ease;
}
.pagination__btn:hover {
  color: white;
  background-color: #5932EA;
}
.pagination__btn:hover .pagination__btn__icon {
  fill: white;
}
.pagination__btn__icon {
  width: 8px;
  height: 12px;
  fill: #404B52;
}

.active {
  background-color: #5932EA;
  color: #FFFFFF;
}

.table__th, .table__td {
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .customers {
    width: 708px;
    margin-left: 30px;
  }
  .customers__table {
    width: 550px;
  }
}
@media (max-width: 480px) {
  .customers {
    margin-left: 0;
    width: 100%;
    height: 200px;
  }
  .customers__table__container {
    overflow-x: auto;
  }
  .customers__title {
    font-size: 14px;
  }
  .customers__title__container {
    margin-left: 20px;
  }
  .customers__title__p {
    font-size: 10px;
  }
  .search__box {
    margin: 0;
  }
  .table__th {
    font-size: 10px;
    padding: 12px 0 12px 10px;
  }
  .table__th :first-child {
    padding: 12px 0 12px 10px;
  }
  .table__td {
    font-size: 10px;
    padding: 12px 0 12px 10px;
  }
  .pagination {
    flex-direction: column;
  }
  .pagination__info {
    margin: 0;
  }
  .pagination__box__btn {
    margin: 0;
  }
  .pagination__box {
    margin: 0;
  }
  .pagination__btn__icon {
    width: 8px;
    height: 12px;
  }
}
@font-face {
  font-family: "Poppins";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Poppins";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Poppins";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
body {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  background-color: #F9FBFF;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}

p {
  padding: 0;
  margin: 0;
}

.container {
  display: flex;
}`, "",{"version":3,"sources":["webpack://./src/styles/components/_header.sass","webpack://./src/styles/index.sass","webpack://./src/styles/components/_sidebar.sass","webpack://./src/styles/components/_customers.sass"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.sass":
/*!*******************************!*\
  !*** ./src/styles/index.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Poppins-Medium.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Poppins-Medium.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "673ed42382ab264e0bf5.ttf";

/***/ }),

/***/ "./src/assets/fonts/Poppins-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Poppins-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35d26b781dc5fda684cc.ttf";

/***/ }),

/***/ "./src/assets/fonts/Poppins-SemiBold.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Poppins-SemiBold.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac8d04b620e54be9b0f0.ttf";

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"name":"Jane Cooper","company":"Microsoft","phone":"(225) 555-0118","email":"jane@microsoft.com","country":"United States","status":"Active"},{"name":"Floyd Miles","company":"Yahoo","phone":"(205) 555-0100","email":"floyd@yahoo.com","country":"Kiribati","status":"Inactive"},{"name":"Ronald Richards","company":"Adobe","phone":"(302) 555-0107","email":"ronald@adobe.com","country":"Israel","status":"Inactive"},{"name":"Marvin McKinney","company":"Tesla","phone":"(252) 555-0126","email":"marvin@tesla.com","country":"Iran","status":"Active"},{"name":"Jerome Bell","company":"Google","phone":"(629) 555-0129","email":"jerome@google.com","country":"Réunion","status":"Active"},{"name":"Kathryn Murphy","company":"Microsoft","phone":"(406) 555-0120","email":"kathryn@microsoft.com","country":"Curaçao","status":"Active"},{"name":"Jacob Jones","company":"Yahoo","phone":"(208) 555-0112","email":"jacob@yahoo.com","country":"Brazil","status":"Active"},{"name":"Kristin Watson","company":"Facebook","phone":"(704) 555-0127","email":"kristin@facebook.com","country":"Åland Islands","status":"Inactive"},{"name":"Emily Davis","company":"Apple","phone":"(315) 555-0130","email":"emily@apple.com","country":"Canada","status":"Active"},{"name":"Oliver Smith","company":"Amazon","phone":"(415) 555-0145","email":"oliver@amazon.com","country":"United Kingdom","status":"Inactive"},{"name":"Sophia Johnson","company":"Netflix","phone":"(505) 555-0152","email":"sophia@netflix.com","country":"Australia","status":"Active"},{"name":"James Wilson","company":"Twitter","phone":"(606) 555-0168","email":"james@twitter.com","country":"Germany","status":"Inactive"},{"name":"Mia Brown","company":"Salesforce","phone":"(707) 555-0175","email":"mia@salesforce.com","country":"Japan","status":"Active"},{"name":"Ethan Davis","company":"IBM","phone":"(808) 555-0183","email":"ethan@ibm.com","country":"France","status":"Active"},{"name":"Ava Martin","company":"Oracle","phone":"(919) 555-0190","email":"ava@oracle.com","country":"South Korea","status":"Inactive"},{"name":"Jane Cooper","company":"Microsoft","phone":"(225) 555-0118","email":"jane@microsoft.com","country":"United States","status":"Active"},{"name":"Floyd Miles","company":"Yahoo","phone":"(205) 555-0100","email":"floyd@yahoo.com","country":"Kiribati","status":"Inactive"},{"name":"Ronald Richards","company":"Adobe","phone":"(302) 555-0107","email":"ronald@adobe.com","country":"Israel","status":"Inactive"},{"name":"Marvin McKinney","company":"Tesla","phone":"(252) 555-0126","email":"marvin@tesla.com","country":"Iran","status":"Active"},{"name":"Jerome Bell","company":"Google","phone":"(629) 555-0129","email":"jerome@google.com","country":"Réunion","status":"Active"},{"name":"Kathryn Murphy","company":"Microsoft","phone":"(406) 555-0120","email":"kathryn@microsoft.com","country":"Curaçao","status":"Active"},{"name":"Jacob Jones","company":"Yahoo","phone":"(208) 555-0112","email":"jacob@yahoo.com","country":"Brazil","status":"Active"},{"name":"Kristin Watson","company":"Facebook","phone":"(704) 555-0127","email":"kristin@facebook.com","country":"Åland Islands","status":"Inactive"},{"name":"Emily Davis","company":"Apple","phone":"(315) 555-0130","email":"emily@apple.com","country":"Canada","status":"Active"},{"name":"Oliver Smith","company":"Amazon","phone":"(415) 555-0145","email":"oliver@amazon.com","country":"United Kingdom","status":"Inactive"},{"name":"Sophia Johnson","company":"Netflix","phone":"(505) 555-0152","email":"sophia@netflix.com","country":"Australia","status":"Active"},{"name":"James Wilson","company":"Twitter","phone":"(606) 555-0168","email":"james@twitter.com","country":"Germany","status":"Inactive"},{"name":"Mia Brown","company":"Salesforce","phone":"(707) 555-0175","email":"mia@salesforce.com","country":"Japan","status":"Active"},{"name":"Ethan Davis","company":"IBM","phone":"(808) 555-0183","email":"ethan@ibm.com","country":"France","status":"Active"},{"name":"Ava Martin","company":"Oracle","phone":"(919) 555-0190","email":"ava@oracle.com","country":"South Korea","status":"Inactive"},{"name":"Jane Cooper","company":"Microsoft","phone":"(225) 555-0118","email":"jane@microsoft.com","country":"United States","status":"Active"},{"name":"Floyd Miles","company":"Yahoo","phone":"(205) 555-0100","email":"floyd@yahoo.com","country":"Kiribati","status":"Inactive"},{"name":"Ronald Richards","company":"Adobe","phone":"(302) 555-0107","email":"ronald@adobe.com","country":"Israel","status":"Inactive"},{"name":"Marvin McKinney","company":"Tesla","phone":"(252) 555-0126","email":"marvin@tesla.com","country":"Iran","status":"Active"},{"name":"Jerome Bell","company":"Google","phone":"(629) 555-0129","email":"jerome@google.com","country":"Réunion","status":"Active"},{"name":"Kathryn Murphy","company":"Microsoft","phone":"(406) 555-0120","email":"kathryn@microsoft.com","country":"Curaçao","status":"Active"},{"name":"Jacob Jones","company":"Yahoo","phone":"(208) 555-0112","email":"jacob@yahoo.com","country":"Brazil","status":"Active"},{"name":"Kristin Watson","company":"Facebook","phone":"(704) 555-0127","email":"kristin@facebook.com","country":"Åland Islands","status":"Inactive"},{"name":"Emily Davis","company":"Apple","phone":"(315) 555-0130","email":"emily@apple.com","country":"Canada","status":"Active"},{"name":"Oliver Smith","company":"Amazon","phone":"(415) 555-0145","email":"oliver@amazon.com","country":"United Kingdom","status":"Inactive"},{"name":"Sophia Johnson","company":"Netflix","phone":"(505) 555-0152","email":"sophia@netflix.com","country":"Australia","status":"Active"},{"name":"James Wilson","company":"Twitter","phone":"(606) 555-0168","email":"james@twitter.com","country":"Germany","status":"Inactive"},{"name":"Mia Brown","company":"Salesforce","phone":"(707) 555-0175","email":"mia@salesforce.com","country":"Japan","status":"Active"},{"name":"Ethan Davis","company":"IBM","phone":"(808) 555-0183","email":"ethan@ibm.com","country":"France","status":"Active"},{"name":"Ava Martin","company":"Oracle","phone":"(919) 555-0190","email":"ava@oracle.com","country":"South Korea","status":"Inactive"},{"name":"Jane Cooper","company":"Microsoft","phone":"(225) 555-0118","email":"jane@microsoft.com","country":"United States","status":"Active"},{"name":"Floyd Miles","company":"Yahoo","phone":"(205) 555-0100","email":"floyd@yahoo.com","country":"Kiribati","status":"Inactive"},{"name":"Ronald Richards","company":"Adobe","phone":"(302) 555-0107","email":"ronald@adobe.com","country":"Israel","status":"Inactive"},{"name":"Marvin McKinney","company":"Tesla","phone":"(252) 555-0126","email":"marvin@tesla.com","country":"Iran","status":"Active"},{"name":"Jerome Bell","company":"Google","phone":"(629) 555-0129","email":"jerome@google.com","country":"Réunion","status":"Active"},{"name":"Kathryn Murphy","company":"Microsoft","phone":"(406) 555-0120","email":"kathryn@microsoft.com","country":"Curaçao","status":"Active"},{"name":"Jacob Jones","company":"Yahoo","phone":"(208) 555-0112","email":"jacob@yahoo.com","country":"Brazil","status":"Active"},{"name":"Kristin Watson","company":"Facebook","phone":"(704) 555-0127","email":"kristin@facebook.com","country":"Åland Islands","status":"Inactive"},{"name":"Emily Davis","company":"Apple","phone":"(315) 555-0130","email":"emily@apple.com","country":"Canada","status":"Active"},{"name":"Oliver Smith","company":"Amazon","phone":"(415) 555-0145","email":"oliver@amazon.com","country":"United Kingdom","status":"Inactive"},{"name":"Sophia Johnson","company":"Netflix","phone":"(505) 555-0152","email":"sophia@netflix.com","country":"Australia","status":"Active"},{"name":"James Wilson","company":"Twitter","phone":"(606) 555-0168","email":"james@twitter.com","country":"Germany","status":"Inactive"},{"name":"Mia Brown","company":"Salesforce","phone":"(707) 555-0175","email":"mia@salesforce.com","country":"Japan","status":"Active"},{"name":"Ethan Davis","company":"IBM","phone":"(808) 555-0183","email":"ethan@ibm.com","country":"France","status":"Active"},{"name":"Ava Martin","company":"Oracle","phone":"(919) 555-0190","email":"ava@oracle.com","country":"South Korea","status":"Inactive"},{"name":"Jane Cooper","company":"Microsoft","phone":"(225) 555-0118","email":"jane@microsoft.com","country":"United States","status":"Active"},{"name":"Floyd Miles","company":"Yahoo","phone":"(205) 555-0100","email":"floyd@yahoo.com","country":"Kiribati","status":"Inactive"},{"name":"Ronald Richards","company":"Adobe","phone":"(302) 555-0107","email":"ronald@adobe.com","country":"Israel","status":"Inactive"},{"name":"Marvin McKinney","company":"Tesla","phone":"(252) 555-0126","email":"marvin@tesla.com","country":"Iran","status":"Active"},{"name":"Jerome Bell","company":"Google","phone":"(629) 555-0129","email":"jerome@google.com","country":"Réunion","status":"Active"},{"name":"Kathryn Murphy","company":"Microsoft","phone":"(406) 555-0120","email":"kathryn@microsoft.com","country":"Curaçao","status":"Active"},{"name":"Jacob Jones","company":"Yahoo","phone":"(208) 555-0112","email":"jacob@yahoo.com","country":"Brazil","status":"Active"},{"name":"Kristin Watson","company":"Facebook","phone":"(704) 555-0127","email":"kristin@facebook.com","country":"Åland Islands","status":"Inactive"},{"name":"Emily Davis","company":"Apple","phone":"(315) 555-0130","email":"emily@apple.com","country":"Canada","status":"Active"},{"name":"Oliver Smith","company":"Amazon","phone":"(415) 555-0145","email":"oliver@amazon.com","country":"United Kingdom","status":"Inactive"},{"name":"Sophia Johnson","company":"Netflix","phone":"(505) 555-0152","email":"sophia@netflix.com","country":"Australia","status":"Active"},{"name":"James Wilson","company":"Twitter","phone":"(606) 555-0168","email":"james@twitter.com","country":"Germany","status":"Inactive"},{"name":"Mia Brown","company":"Salesforce","phone":"(707) 555-0175","email":"mia@salesforce.com","country":"Japan","status":"Active"},{"name":"Ethan Davis","company":"IBM","phone":"(808) 555-0183","email":"ethan@ibm.com","country":"France","status":"Active"},{"name":"Ava Martin","company":"Oracle","phone":"(919) 555-0190","email":"ava@oracle.com","country":"South Korea","status":"Inactive"},{"name":"Jane Cooper","company":"Microsoft","phone":"(225) 555-0118","email":"jane@microsoft.com","country":"United States","status":"Active"},{"name":"Floyd Miles","company":"Yahoo","phone":"(205) 555-0100","email":"floyd@yahoo.com","country":"Kiribati","status":"Inactive"},{"name":"Ronald Richards","company":"Adobe","phone":"(302) 555-0107","email":"ronald@adobe.com","country":"Israel","status":"Inactive"},{"name":"Marvin McKinney","company":"Tesla","phone":"(252) 555-0126","email":"marvin@tesla.com","country":"Iran","status":"Active"},{"name":"Jerome Bell","company":"Google","phone":"(629) 555-0129","email":"jerome@google.com","country":"Réunion","status":"Active"},{"name":"Kathryn Murphy","company":"Microsoft","phone":"(406) 555-0120","email":"kathryn@microsoft.com","country":"Curaçao","status":"Active"},{"name":"Jacob Jones","company":"Yahoo","phone":"(208) 555-0112","email":"jacob@yahoo.com","country":"Brazil","status":"Active"},{"name":"Kristin Watson","company":"Facebook","phone":"(704) 555-0127","email":"kristin@facebook.com","country":"Åland Islands","status":"Inactive"},{"name":"Emily Davis","company":"Apple","phone":"(315) 555-0130","email":"emily@apple.com","country":"Canada","status":"Active"},{"name":"Oliver Smith","company":"Amazon","phone":"(415) 555-0145","email":"oliver@amazon.com","country":"United Kingdom","status":"Inactive"},{"name":"Sophia Johnson","company":"Netflix","phone":"(505) 555-0152","email":"sophia@netflix.com","country":"Australia","status":"Active"},{"name":"James Wilson","company":"Twitter","phone":"(606) 555-0168","email":"james@twitter.com","country":"Germany","status":"Inactive"},{"name":"Mia Brown","company":"Salesforce","phone":"(707) 555-0175","email":"mia@salesforce.com","country":"Japan","status":"Active"},{"name":"Ethan Davis","company":"IBM","phone":"(808) 555-0183","email":"ethan@ibm.com","country":"France","status":"Active"},{"name":"Ava Martin","company":"Oracle","phone":"(919) 555-0190","email":"ava@oracle.com","country":"South Korea","status":"Inactive"},{"name":"Jane Cooper","company":"Microsoft","phone":"(225) 555-0118","email":"jane@microsoft.com","country":"United States","status":"Active"},{"name":"Floyd Miles","company":"Yahoo","phone":"(205) 555-0100","email":"floyd@yahoo.com","country":"Kiribati","status":"Inactive"},{"name":"Ronald Richards","company":"Adobe","phone":"(302) 555-0107","email":"ronald@adobe.com","country":"Israel","status":"Inactive"},{"name":"Marvin McKinney","company":"Tesla","phone":"(252) 555-0126","email":"marvin@tesla.com","country":"Iran","status":"Active"},{"name":"Jerome Bell","company":"Google","phone":"(629) 555-0129","email":"jerome@google.com","country":"Réunion","status":"Active"},{"name":"Kathryn Murphy","company":"Microsoft","phone":"(406) 555-0120","email":"kathryn@microsoft.com","country":"Curaçao","status":"Active"},{"name":"Jacob Jones","company":"Yahoo","phone":"(208) 555-0112","email":"jacob@yahoo.com","country":"Brazil","status":"Active"},{"name":"Kristin Watson","company":"Facebook","phone":"(704) 555-0127","email":"kristin@facebook.com","country":"Åland Islands","status":"Inactive"},{"name":"Emily Davis","company":"Apple","phone":"(315) 555-0130","email":"emily@apple.com","country":"Canada","status":"Active"},{"name":"Oliver Smith","company":"Amazon","phone":"(415) 555-0145","email":"oliver@amazon.com","country":"United Kingdom","status":"Inactive"},{"name":"Sophia Johnson","company":"Netflix","phone":"(505) 555-0152","email":"sophia@netflix.com","country":"Australia","status":"Active"},{"name":"James Wilson","company":"Twitter","phone":"(606) 555-0168","email":"james@twitter.com","country":"Germany","status":"Inactive"},{"name":"Mia Brown","company":"Salesforce","phone":"(707) 555-0175","email":"mia@salesforce.com","country":"Japan","status":"Active"},{"name":"Ethan Davis","company":"IBM","phone":"(808) 555-0183","email":"ethan@ibm.com","country":"France","status":"Active"},{"name":"Ava Martin","company":"Oracle","phone":"(919) 555-0190","email":"ava@oracle.com","country":"South Korea","status":"Inactive"},{"name":"Jane Cooper","company":"Microsoft","phone":"(225) 555-0118","email":"jane@microsoft.com","country":"United States","status":"Active"},{"name":"Floyd Miles","company":"Yahoo","phone":"(205) 555-0100","email":"floyd@yahoo.com","country":"Kiribati","status":"Inactive"},{"name":"Ronald Richards","company":"Adobe","phone":"(302) 555-0107","email":"ronald@adobe.com","country":"Israel","status":"Inactive"},{"name":"Marvin McKinney","company":"Tesla","phone":"(252) 555-0126","email":"marvin@tesla.com","country":"Iran","status":"Active"},{"name":"Jerome Bell","company":"Google","phone":"(629) 555-0129","email":"jerome@google.com","country":"Réunion","status":"Active"},{"name":"Kathryn Murphy","company":"Microsoft","phone":"(406) 555-0120","email":"kathryn@microsoft.com","country":"Curaçao","status":"Active"},{"name":"Jacob Jones","company":"Yahoo","phone":"(208) 555-0112","email":"jacob@yahoo.com","country":"Brazil","status":"Active"},{"name":"Kristin Watson","company":"Facebook","phone":"(704) 555-0127","email":"kristin@facebook.com","country":"Åland Islands","status":"Inactive"},{"name":"Emily Davis","company":"Apple","phone":"(315) 555-0130","email":"emily@apple.com","country":"Canada","status":"Active"},{"name":"Oliver Smith","company":"Amazon","phone":"(415) 555-0145","email":"oliver@amazon.com","country":"United Kingdom","status":"Inactive"},{"name":"Sophia Johnson","company":"Netflix","phone":"(505) 555-0152","email":"sophia@netflix.com","country":"Australia","status":"Active"},{"name":"James Wilson","company":"Twitter","phone":"(606) 555-0168","email":"james@twitter.com","country":"Germany","status":"Inactive"},{"name":"Mia Brown","company":"Salesforce","phone":"(707) 555-0175","email":"mia@salesforce.com","country":"Japan","status":"Active"},{"name":"Ethan Davis","company":"IBM","phone":"(808) 555-0183","email":"ethan@ibm.com","country":"France","status":"Active"},{"name":"Ava Martin","company":"Oracle","phone":"(919) 555-0190","email":"ava@oracle.com","country":"South Korea","status":"Inactive"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.sass */ "./src/styles/index.sass");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.json */ "./src/data.json");


var rowsPerPage = 8;
var currentPage = 1;
var filteredData = _data_json__WEBPACK_IMPORTED_MODULE_1__;
function displayTable() {
  var tableBody = document.getElementById("customerTable");
  tableBody.innerHTML = "";
  var startIndex = (currentPage - 1) * rowsPerPage;
  var endIndex = Math.min(startIndex + rowsPerPage, filteredData.length);
  for (var i = startIndex; i < endIndex; i++) {
    var customer = filteredData[i];
    var row = document.createElement("tr");
    row.className = "table__tr";
    row.innerHTML = "\n      <td class='table__td'>".concat(customer.name, "</td>\n      <td class='table__td'>").concat(customer.company, "s</td>\n      <td class='table__td'>").concat(customer.phone, "</td>\n      <td class='table__td'>").concat(customer.email, "</td>\n      <td class='table__td'>").concat(customer.country, "</td>\n      <td class='table__td'><span class=\"status ").concat(customer.status.toLowerCase(), "\">").concat(customer.status, "</span></td>\n    ");
    tableBody.appendChild(row);
  }
  updatePagination();
  updatePaginationInfo();
}
function updatePagination() {
  var totalPages = Math.ceil(filteredData.length / rowsPerPage);
  var pageNumbersContainer = document.querySelector(".pagination__numbers");
  pageNumbersContainer.innerHTML = "";
  var prevPageButton = document.getElementById("prevPage");
  if (prevPageButton) {
    prevPageButton.disabled = currentPage === 1;
  }
  if (totalPages > 1) {
    var firstPageButton = document.createElement("button");
    firstPageButton.textContent = "1";
    firstPageButton.className = currentPage === 1 ? "active pagination__btn" : "pagination__btn";
    firstPageButton.addEventListener("click", function () {
      currentPage = 1;
      displayTable();
    });
    pageNumbersContainer.appendChild(firstPageButton);
  }
  if (currentPage > 4) {
    var dots = document.createElement("span");
    dots.textContent = "...";
    pageNumbersContainer.appendChild(dots);
  }
  var startPage = Math.max(2, currentPage - 1);
  var endPage = Math.min(totalPages - 1, currentPage + 3);
  var _loop = function _loop(i) {
    var pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.className = i === currentPage ? "active pagination__btn" : "pagination__btn";
    pageButton.addEventListener("click", function () {
      currentPage = i;
      displayTable();
    });
    pageNumbersContainer.appendChild(pageButton);
  };
  for (var i = startPage; i <= endPage; i++) {
    _loop(i);
  }
  if (currentPage < totalPages - 3) {
    var _dots = document.createElement("span");
    _dots.textContent = "...";
    pageNumbersContainer.appendChild(_dots);
  }
  if (totalPages > 1) {
    var lastPageButton = document.createElement("button");
    lastPageButton.textContent = totalPages;
    lastPageButton.className = currentPage === totalPages ? "active pagination__btn" : "pagination__btn";
    lastPageButton.addEventListener("click", function () {
      currentPage = totalPages;
      displayTable();
    });
    pageNumbersContainer.appendChild(lastPageButton);
  }
  var nextPageButton = document.getElementById("nextPage");
  if (nextPageButton) {
    nextPageButton.disabled = currentPage === totalPages;
  }
}
function updatePaginationInfo() {
  var totalEntries = filteredData.length;
  var startEntry = (currentPage - 1) * rowsPerPage + 1;
  var endEntry = Math.min(currentPage * rowsPerPage, totalEntries);
  var paginationInfo = document.getElementById("paginationInfo");
  paginationInfo.textContent = "Showing data ".concat(startEntry, " to ").concat(endEntry, " of ").concat(totalEntries.toLocaleString(), " entries");
}
function searchByName() {
  var searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function () {
    var filter = searchInput.value.toLowerCase();
    filteredData = _data_json__WEBPACK_IMPORTED_MODULE_1__.filter(function (customer) {
      return customer.name.toLowerCase().includes(filter);
    });
    currentPage = 1;
    displayTable();
  });
}
document.addEventListener("DOMContentLoaded", function () {
  displayTable();
  searchByName();
  var prevPageButton = document.getElementById("prevPage");
  var nextPageButton = document.getElementById("nextPage");
  prevPageButton.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      displayTable();
    }
  });
  nextPageButton.addEventListener("click", function () {
    var totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      displayTable();
    }
  });
});
document.querySelector(".sidebar__menu").addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("open");
  document.querySelector(".sidebar").classList.add("active");
});
document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("open");
  document.querySelector(".sidebar").classList.remove("active");
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map