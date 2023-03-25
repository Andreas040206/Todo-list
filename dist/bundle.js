/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Icons/addBtn.png */ "./src/img/Icons/addBtn.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Icons/trashcanIcon.png */ "./src/img/Icons/trashcanIcon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Icons/editIcon.png */ "./src/img/Icons/editIcon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Icons/taskIconOrange.png */ "./src/img/Icons/taskIconOrange.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Icons/extendBtnIcon.png */ "./src/img/Icons/extendBtnIcon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0px;\n  font-family: sans-serif;\n}\n\n/*  Header  */\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.headerUpper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 160px;\n  display: flex;\n  padding: 20px 100px;\n  display: flex;\n}\n\n.headerText {\n  font-size: 80px;\n  font-weight: 1000;\n}\n\n.purpleSpan1 {\n  color: #8e35dc;\n}\n\n.purpleSpan2 {\n  color: #aa51a5;\n}\n\n.loginBtn {\n  font-size: 35px;\n  font-weight: 900;\n  padding: 8px 20px;\n  border: rgb(243, 243, 243) 4px solid;\n  border-radius: 15px;\n  color: white;\n  background: linear-gradient(90deg, rgb(247, 132, 0), orange);\n}\n\n.headerLower {\n  height: 12px;\n  background: linear-gradient(90deg, #8e35dc, orange);\n}\n/*  Header End */\n\n/* Current page content */\n.currentPageContent {\n  display: grid;\n  grid-template-columns: 400px 1fr;\n  height: 200vh;\n}\n\n/* Current page content End */\n\n/* sidebar */\n.sidebar {\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n  border-radius: 19px;\n  width: 270px;\n  height: 620px;\n  background-color: white;\n  margin-top: 120px;\n  margin-left: 20px;\n  position: sticky;\n  top: 100px;\n  box-shadow: 0px 0px 15px rgba(128, 128, 128, 0.368);\n}\n\n.sidebarBtnCon {\n  display: grid;\n  grid-template-columns: 40px 5fr 1fr;\n  align-items: center;\n  justify-content: flex-start;\n  width: 240px;\n  height: 50px;\n  gap: 15px;\n}\n\n.sidebarBtn {\n  font-size: 40px;\n  font-weight: 400;\n  color: #aa51a5;\n  background-color: white;\n  border: none;\n  text-align: start;\n}\n\n.projectBtnCon {\n  display: grid;\n  align-items: center;\n  grid-template-rows: 50px auto;\n  row-gap: 8px;\n  grid-template-areas:\n    \". . .\"\n    \"DropdownBox DropdownBox DropdownBox\";\n}\n\n.projectDropDownBtn {\n  font-size: 40px;\n  color: #aa51a5;\n}\n\n.sidebarIcon {\n  height: 40px;\n  width: auto;\n}\n\n.projectDropDownCon {\n  grid-area: DropdownBox;\n  display: grid;\n  grid-template-columns: 1fr 2.5fr;\n  row-gap: 12px;\n  grid-auto-rows: 30px;\n  justify-content: flex-end;\n}\n\n.projectDropDownText {\n  display: flex;\n  height: 30px;\n  font-size: 30px;\n  color: #aa51a5;\n  background-color: white;\n  border: none;\n}\n\n.sidebarDot {\n  font-size: 30px;\n  color: #aa51a5;\n  text-align: end;\n  padding-right: 12px;\n}\n/* sidebar End */\n\n/* Project page*/\n\n.ProjectContentEl {\n  display: flex;\n  flex-direction: column;\n  padding: 0px 50px;\n  padding-top: 125px;\n  gap: 50px;\n}\n\n/* Project page End*/\n\n/* specifik project page*/\n\n/* specifik project page End */\n\n/*  Other styling that dosen't fall under that catagori */\n\n/* Project Element */\n.specificProjectContentEl {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  padding: 0px 50px;\n  padding-top: 125px;\n}\n\n.projectHeaderCon {\n  height: 200px;\n  background: linear-gradient(90deg, #aa51a5, orange);\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.226);\n  border-radius: 15px;\n  width: auto;\n}\n.projectHeader {\n  background-color: white;\n  height: 140px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 20px 50px;\n  padding-right: 25px;\n}\n\n.addProjectBtn {\n  background: #efefefff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 140px;\n}\n\n.projectAddBtnIcon {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 100px;\n  width: 110px;\n}\n\n.newProjectElLeft {\n  width: max(450px, 50%);\n  display: grid;\n  grid-template-columns: 12px 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas:\n    \"header header\"\n    \". description\";\n}\n\n.projectHeaderText {\n  font-size: 50px;\n  font-weight: 900;\n  color: #aa51a5;\n  grid-area: header;\n}\n\n.newProjectElDisciption {\n  grid-area: description;\n  font-size: 22px;\n  color: #aa51a5;\n}\n\n.newProjectElRight {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  gap: 60px;\n}\n\n.projectElRightBtnCon {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 8px;\n}\n\n.deleteProjectBtn {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  height: 35px;\n  width: 28px;\n  margin-left: 5px;\n}\n\n.editProjectBtn {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  height: 28px;\n  width: 30px;\n}\n\n.projectTaskIcon {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  width: 33px;\n  height: 30px;\n}\n\n.projectTaskNumText {\n  font-size: 30px;\n  font-weight: 900;\n  color: orange;\n  margin-right: 30px;\n}\n\n/* Project Element END */\n\n/* Task Element */\n\n.taskCon {\n  height: 130px;\n  background: linear-gradient(90deg, #aa51a5, orange);\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.226);\n  border-radius: 15px;\n  width: auto;\n  transition: 0.7s;\n}\n\n.taskEl {\n  background-color: white;\n  height: 115px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  display: grid;\n  grid-template-columns: 1fr 600px;\n  overflow: hidden;\n  transition: 0.7s;\n}\n\n.taskAddBtn {\n  height: 120px;\n}\n\n.taskAddBtnIcon {\n  height: 80px;\n  width: 80px;\n}\n\n.taskElSideCon {\n  display: grid;\n  grid-template-rows: 115px 1fr;\n}\n\n.taskHeaderEl {\n  font-size: 45px;\n  font-weight: 900;\n  padding-left: 50px;\n  color: #aa51a5;\n  display: flex;\n  align-items: center;\n  height: 115px;\n  gap: 15px;\n}\n\n.extendBtn {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  height: 25px;\n  width: 25px;\n}\n\n.taskDescriptionText {\n  font-size: 20px;\n  padding-top: 20px;\n  padding-left: 50px;\n  color: #aa51a5;\n}\n\n.rightSideUpper {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n  justify-items: center;\n  align-items: center;\n}\n\n.priorityBox {\n  height: 45px;\n}\n\n.rightSideLower {\n}\n\n/* Task Element End */\n\n.smallProjectElBtn {\n  border: none;\n  border-radius: 0px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/*  Other styling that dosen't fall under that catagori END */ ;\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  margin: 0px;\n  font-family: sans-serif;\n}\n\n/*  Header  */\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.headerUpper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 160px;\n  display: flex;\n  padding: 20px 100px;\n  display: flex;\n}\n\n.headerText {\n  font-size: 80px;\n  font-weight: 1000;\n}\n\n.purpleSpan1 {\n  color: #8e35dc;\n}\n\n.purpleSpan2 {\n  color: #aa51a5;\n}\n\n.loginBtn {\n  font-size: 35px;\n  font-weight: 900;\n  padding: 8px 20px;\n  border: rgb(243, 243, 243) 4px solid;\n  border-radius: 15px;\n  color: white;\n  background: linear-gradient(90deg, rgb(247, 132, 0), orange);\n}\n\n.headerLower {\n  height: 12px;\n  background: linear-gradient(90deg, #8e35dc, orange);\n}\n/*  Header End */\n\n/* Current page content */\n.currentPageContent {\n  display: grid;\n  grid-template-columns: 400px 1fr;\n  height: 200vh;\n}\n\n/* Current page content End */\n\n/* sidebar */\n.sidebar {\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n  border-radius: 19px;\n  width: 270px;\n  height: 620px;\n  background-color: white;\n  margin-top: 120px;\n  margin-left: 20px;\n  position: sticky;\n  top: 100px;\n  box-shadow: 0px 0px 15px rgba(128, 128, 128, 0.368);\n}\n\n.sidebarBtnCon {\n  display: grid;\n  grid-template-columns: 40px 5fr 1fr;\n  align-items: center;\n  justify-content: flex-start;\n  width: 240px;\n  height: 50px;\n  gap: 15px;\n}\n\n.sidebarBtn {\n  font-size: 40px;\n  font-weight: 400;\n  color: #aa51a5;\n  background-color: white;\n  border: none;\n  text-align: start;\n}\n\n.projectBtnCon {\n  display: grid;\n  align-items: center;\n  grid-template-rows: 50px auto;\n  row-gap: 8px;\n  grid-template-areas:\n    \". . .\"\n    \"DropdownBox DropdownBox DropdownBox\";\n}\n\n.projectDropDownBtn {\n  font-size: 40px;\n  color: #aa51a5;\n}\n\n.sidebarIcon {\n  height: 40px;\n  width: auto;\n}\n\n.projectDropDownCon {\n  grid-area: DropdownBox;\n  display: grid;\n  grid-template-columns: 1fr 2.5fr;\n  row-gap: 12px;\n  grid-auto-rows: 30px;\n  justify-content: flex-end;\n}\n\n.projectDropDownText {\n  display: flex;\n  height: 30px;\n  font-size: 30px;\n  color: #aa51a5;\n  background-color: white;\n  border: none;\n}\n\n.sidebarDot {\n  font-size: 30px;\n  color: #aa51a5;\n  text-align: end;\n  padding-right: 12px;\n}\n/* sidebar End */\n\n/* Project page*/\n\n.ProjectContentEl {\n  display: flex;\n  flex-direction: column;\n  padding: 0px 50px;\n  padding-top: 125px;\n  gap: 50px;\n}\n\n/* Project page End*/\n\n/* specifik project page*/\n\n/* specifik project page End */\n\n/*  Other styling that dosen't fall under that catagori */\n\n/* Project Element */\n.specificProjectContentEl {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  padding: 0px 50px;\n  padding-top: 125px;\n}\n\n.projectHeaderCon {\n  height: 200px;\n  background: linear-gradient(90deg, #aa51a5, orange);\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.226);\n  border-radius: 15px;\n  width: auto;\n}\n.projectHeader {\n  background-color: white;\n  height: 140px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 20px 50px;\n  padding-right: 25px;\n}\n\n.addProjectBtn {\n  background: #efefefff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 140px;\n}\n\n.projectAddBtnIcon {\n  background: url(./img/Icons/addBtn.png);\n  height: 100px;\n  width: 110px;\n}\n\n.newProjectElLeft {\n  width: max(450px, 50%);\n  display: grid;\n  grid-template-columns: 12px 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas:\n    \"header header\"\n    \". description\";\n}\n\n.projectHeaderText {\n  font-size: 50px;\n  font-weight: 900;\n  color: #aa51a5;\n  grid-area: header;\n}\n\n.newProjectElDisciption {\n  grid-area: description;\n  font-size: 22px;\n  color: #aa51a5;\n}\n\n.newProjectElRight {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  gap: 60px;\n}\n\n.projectElRightBtnCon {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 8px;\n}\n\n.deleteProjectBtn {\n  background: url(./img/Icons/trashcanIcon.png);\n  height: 35px;\n  width: 28px;\n  margin-left: 5px;\n}\n\n.editProjectBtn {\n  background: url(./img/Icons/editIcon.png);\n  height: 28px;\n  width: 30px;\n}\n\n.projectTaskIcon {\n  background: url(./img/Icons/taskIconOrange.png);\n  width: 33px;\n  height: 30px;\n}\n\n.projectTaskNumText {\n  font-size: 30px;\n  font-weight: 900;\n  color: orange;\n  margin-right: 30px;\n}\n\n/* Project Element END */\n\n/* Task Element */\n\n.taskCon {\n  height: 130px;\n  background: linear-gradient(90deg, #aa51a5, orange);\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.226);\n  border-radius: 15px;\n  width: auto;\n  transition: 0.7s;\n}\n\n.taskEl {\n  background-color: white;\n  height: 115px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  display: grid;\n  grid-template-columns: 1fr 600px;\n  overflow: hidden;\n  transition: 0.7s;\n}\n\n.taskAddBtn {\n  height: 120px;\n}\n\n.taskAddBtnIcon {\n  height: 80px;\n  width: 80px;\n}\n\n.taskElSideCon {\n  display: grid;\n  grid-template-rows: 115px 1fr;\n}\n\n.taskHeaderEl {\n  font-size: 45px;\n  font-weight: 900;\n  padding-left: 50px;\n  color: #aa51a5;\n  display: flex;\n  align-items: center;\n  height: 115px;\n  gap: 15px;\n}\n\n.extendBtn {\n  background: url(./img/Icons/extendBtnIcon.png);\n  height: 25px;\n  width: 25px;\n}\n\n.taskDescriptionText {\n  font-size: 20px;\n  padding-top: 20px;\n  padding-left: 50px;\n  color: #aa51a5;\n}\n\n.rightSideUpper {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n  justify-items: center;\n  align-items: center;\n}\n\n.priorityBox {\n  height: 45px;\n}\n\n.rightSideLower {\n}\n\n/* Task Element End */\n\n.smallProjectElBtn {\n  border: none;\n  border-radius: 0px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/*  Other styling that dosen't fall under that catagori END */ ;\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/ObjectCreator.js":
/*!******************************!*\
  !*** ./src/ObjectCreator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "projectArray": () => (/* binding */ projectArray)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");


const projectArray = [];

function addProject() {
  projectArray.push(_controller__WEBPACK_IMPORTED_MODULE_0__.createObjFromValues.forProject(ProjectCreater));
}

class ProjectCreater {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.TaskList = [];
  }
  addTask() {
    this.TaskList.push(_controller__WEBPACK_IMPORTED_MODULE_0__.createObjFromValues.forTask(Task));
  }
}

function Task(project, name, description, deadline, priority) {
  this.project = project;
  this.name = name;
  this.description = description;
  this.deadline = deadline;
  this.priority = priority;
}

const TOPProject = new ProjectCreater(
  "TOP1",
  "Learning how to program through an open source programming course",
  "purple"
);

const TOPProject2 = new ProjectCreater(
  "TOP2",
  "Learning how to program through an open source programming course",
  "purple"
);

const TOPProject3 = new ProjectCreater(
  "TOP3",
  "Learning how to program through an open source programming course",
  "purple"
);
TOPProject3.TaskList.push(
  new Task(
    "TOPProject3",
    "Java",
    "Learning java instead od javascript so i can move on to CS and make my own minecraft",
    "20/5",
    "high",
    "none"
  )
);

projectArray.push(TOPProject);
projectArray.push(TOPProject2);
projectArray.push(TOPProject3);
console.log(projectArray);




/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "btnActivation": () => (/* binding */ btnActivation),
/* harmony export */   "createObjFromValues": () => (/* binding */ createObjFromValues),
/* harmony export */   "currentPageChecker": () => (/* binding */ currentPageChecker)
/* harmony export */ });
/* harmony import */ var _ObjectCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectCreator */ "./src/ObjectCreator.js");
/* harmony import */ var _pageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoader */ "./src/pageLoader.js");



const getValuesByConsole = {
  forProject: function () {
    let name = prompt("Project name:");
    let description = prompt("Project desciption:");
    return { name, description };
  },
  forTask: function () {
    let name = prompt("Name please");
    let desciption = prompt("desciption please");
    let deadline = prompt("Deadline please");
    let priority = prompt("priority please");
    return { name, desciption, deadline, priority };
  },
};

const createObjFromValues = {
  forTask: function (constructor) {
    let newObj = getValuesByConsole.forTask();
    const newTask = new constructor(
      this.name,
      newObj.name,
      newObj.desciption,
      newObj.deadline,
      newObj.priority
    );
    return newTask;
  },
  forProject: function (constructor) {
    let newObj = getValuesByConsole.forProject();
    const newProject = new constructor(
      newObj.name,
      newObj.description,
      newObj.color
    );
    return newProject;
  },
};

let currentPageChecker = "home";

const btnActivation = {
  pageDirections: {
    homeBtnActivated: function () {
      console.log("home button clicked");
      currentPageChecker = "home";
      (0,_pageLoader__WEBPACK_IMPORTED_MODULE_1__.loader)();
    },
    extraTaskBtnActivated: function () {
      console.log("extra Task Button clicked");
      currentPageChecker = "tasks";
      (0,_pageLoader__WEBPACK_IMPORTED_MODULE_1__.loader)();
    },
    projectBtnActivated: function () {
      console.log("project Button clicked");
      currentPageChecker = "projects";
      (0,_pageLoader__WEBPACK_IMPORTED_MODULE_1__.loader)();
    },
    specificProjectBtnActivated: function (btnNum) {
      currentPageChecker = btnNum;
      console.log(_ObjectCreator__WEBPACK_IMPORTED_MODULE_0__.projectArray[btnNum]);
      (0,_pageLoader__WEBPACK_IMPORTED_MODULE_1__.loader)();
    },
  },
  projectArrayEdits: {
    editBtn: function (btnNum) {
      console.log(`edit ${btnNum}`);
      (0,_pageLoader__WEBPACK_IMPORTED_MODULE_1__.loader)();
    },
    deleteBtn: function (btnNum) {
      console.log(`deleting ${btnNum}`);
      _ObjectCreator__WEBPACK_IMPORTED_MODULE_0__.projectArray.splice(btnNum, 1);
      btnActivation.pageDirections.projectBtnActivated();
      (0,_pageLoader__WEBPACK_IMPORTED_MODULE_1__.loader)();
    },
    addProjectBtn: function () {
      console.log("adding project");
      (0,_ObjectCreator__WEBPACK_IMPORTED_MODULE_0__.addProject)();
      (0,_pageLoader__WEBPACK_IMPORTED_MODULE_1__.loader)();
    },
    taskArrayEdits: function (btnNum) {
      console.log(`adding task to ${_ObjectCreator__WEBPACK_IMPORTED_MODULE_0__.projectArray[btnNum].name}`);
      _ObjectCreator__WEBPACK_IMPORTED_MODULE_0__.projectArray[btnNum].addTask();
      (0,_pageLoader__WEBPACK_IMPORTED_MODULE_1__.loader)();
    },
  },
};




/***/ }),

/***/ "./src/pageLoader.js":
/*!***************************!*\
  !*** ./src/pageLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAndAppendChildren": () => (/* binding */ createAndAppendChildren),
/* harmony export */   "createFinalPageObject": () => (/* binding */ createFinalPageObject),
/* harmony export */   "loader": () => (/* binding */ loader)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _img_Icons_homeIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/Icons/homeIcon.png */ "./src/img/Icons/homeIcon.png");
/* harmony import */ var _img_Icons_taskIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/Icons/taskIcon.png */ "./src/img/Icons/taskIcon.png");
/* harmony import */ var _img_Icons_projectIcon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/Icons/projectIcon.png */ "./src/img/Icons/projectIcon.png");
/* harmony import */ var _ObjectCreator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ObjectCreator.js */ "./src/ObjectCreator.js");
/* harmony import */ var _img_Icons_priorityHighIcon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/Icons/priorityHighIcon.png */ "./src/img/Icons/priorityHighIcon.png");
/* harmony import */ var _img_Icons_priorityLowIcon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/Icons/priorityLowIcon.png */ "./src/img/Icons/priorityLowIcon.png");
/* harmony import */ var _img_Icons_priorityMediumIcon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/Icons/priorityMediumIcon.png */ "./src/img/Icons/priorityMediumIcon.png");









const loader = function () {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  document.body.appendChild(createFinalPageObject());
};

const createFinalPageObject = function () {
  let pageContent = document.createElement("div");
  pageContent.classList.add("pageContent");

  pageContent.appendChild(createHeader());
  pageContent.appendChild(createContent());

  return pageContent;
};

const createHeader = function () {
  const header = document.createElement("div");
  header.classList.add("header");

  const headerUpper = document.createElement("div");
  headerUpper.classList.add("headerUpper");

  let headerText = document.createElement("div");
  headerText.classList.add("headerText");

  let spanPurple1 = document.createElement("span");
  spanPurple1.classList.add("purpleSpan1", "headerText");
  spanPurple1.textContent = "Get";

  let spanBlack1 = document.createElement("span");
  spanBlack1.classList.add("headerText");
  spanBlack1.textContent = "Done";

  let spanPurple2 = document.createElement("span");
  spanPurple2.classList.add("purpleSpan2", "headerText");
  spanPurple2.textContent = ".";

  let spanBlack2 = document.createElement("span");
  spanBlack2.classList.add("blackSpan", "headerText");
  spanBlack2.textContent = "com";

  headerText.appendChild(spanPurple1);
  headerText.appendChild(spanBlack1);
  headerText.appendChild(spanPurple2);
  headerText.appendChild(spanBlack2);

  headerUpper.appendChild(headerText);

  let loginBtn = document.createElement("button");
  loginBtn.classList.add("loginBtn");
  loginBtn.textContent = "Sign in";

  headerUpper.appendChild(loginBtn);

  const headerLower = document.createElement("div");
  headerLower.classList.add("headerLower");

  header.appendChild(headerUpper);
  header.appendChild(headerLower);

  return header;
};

const createContent = function () {
  const currentPageContent = document.createElement("div");
  currentPageContent.classList.add("currentPageContent");

  currentPageContent.appendChild(createSideBar());
  currentPageContent.appendChild(createCurrentPageContentContent());

  return currentPageContent;
};

const createSideBar = function () {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  let homeIconImg = new Image();
  homeIconImg.src = _img_Icons_homeIcon_png__WEBPACK_IMPORTED_MODULE_1__;
  homeIconImg.classList.add("sidebarIcon");

  let homeBtnCon = document.createElement("div");
  homeBtnCon.classList.add("sidebarBtnCon");

  let homeBtn = document.createElement("button");
  homeBtn.classList.add("homeBtn", "sidebarBtn");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", function () {
    _controller__WEBPACK_IMPORTED_MODULE_0__.btnActivation.pageDirections.homeBtnActivated();
  });

  homeBtnCon.appendChild(homeIconImg);
  homeBtnCon.appendChild(homeBtn);

  let extraTaskBtnCon = document.createElement("div");
  extraTaskBtnCon.classList.add("sidebarBtnCon");

  let taskIconImg = new Image();
  taskIconImg.src = _img_Icons_taskIcon_png__WEBPACK_IMPORTED_MODULE_2__;
  taskIconImg.classList.add("sidebarIcon");

  let extraTaskBtn = document.createElement("button");
  extraTaskBtn.classList.add("extraTaskBtn", "sidebarBtn");
  extraTaskBtn.textContent = "Tasks";
  extraTaskBtn.addEventListener("click", function () {
    _controller__WEBPACK_IMPORTED_MODULE_0__.btnActivation.pageDirections.extraTaskBtnActivated();
  });

  extraTaskBtnCon.appendChild(taskIconImg);
  extraTaskBtnCon.appendChild(extraTaskBtn);

  let projectBtnCon = document.createElement("div");
  projectBtnCon.classList.add("projectBtnCon");

  let projectIconImg = new Image();
  projectIconImg.src = _img_Icons_projectIcon_png__WEBPACK_IMPORTED_MODULE_3__;
  projectIconImg.classList.add("sidebarIcon");

  let projectBtn = document.createElement("button");
  projectBtn.classList.add("projectBtn", "sidebarBtn");
  projectBtn.textContent = "Projects";
  projectBtn.addEventListener("click", function () {
    _controller__WEBPACK_IMPORTED_MODULE_0__.btnActivation.pageDirections.projectBtnActivated();
  });

  createAndAppendChildren.forSidebarProjectlist(_ObjectCreator_js__WEBPACK_IMPORTED_MODULE_4__.projectArray, projectBtnCon);

  projectBtnCon.appendChild(projectIconImg);
  projectBtnCon.appendChild(projectBtn);

  sidebar.appendChild(homeBtnCon);
  sidebar.appendChild(extraTaskBtnCon);
  sidebar.appendChild(projectBtnCon);

  return sidebar;
};

const currentPageContentContentLoader = function () {
  while (currentPageContentContent.firstChild) {
    currentPageContentContent.removeChild(currentPageContentContent.firstChild);
  }
  document.body.appendChild(createFinalPageObject());
};

const createCurrentPageContentContent = function () {
  const currentPageContent = document.createElement("div");
  currentPageContent.classList.add("currentPageContentContent");
  currentPageContent.setAttribute("id", "currentPageContentContent");

  if (_controller__WEBPACK_IMPORTED_MODULE_0__.currentPageChecker === "home") {
    currentPageContent.appendChild(homePage());
  } else if (_controller__WEBPACK_IMPORTED_MODULE_0__.currentPageChecker === "tasks") {
    currentPageContent.appendChild(tasksPage());
  } else if (_controller__WEBPACK_IMPORTED_MODULE_0__.currentPageChecker === "projects") {
    currentPageContent.appendChild(projectsPage());
  } else {
    currentPageContent.appendChild(specificProjectPage());
  }
  return currentPageContent;
};

const homePage = function () {
  let homePageContent = document.createElement("div");

  return homePageContent;
};

const tasksPage = function () {
  let tasksContent = document.createElement("div");

  return tasksContent;
};

const projectsPage = function () {
  let projectsContent = document.createElement("div");
  projectsContent.classList.add("ProjectContentEl");

  createAndAppendChildren.forAllProjects(_ObjectCreator_js__WEBPACK_IMPORTED_MODULE_4__.projectArray, projectsContent);

  return projectsContent;
};

const specificProjectPage = function () {
  let specificProjectContent = document.createElement("div");
  specificProjectContent.classList.add("specificProjectContentEl");

  createAndAppendChildren.forSpecificProjectPage(
    _controller__WEBPACK_IMPORTED_MODULE_0__.currentPageChecker,
    specificProjectContent
  );

  return specificProjectContent;
};

const createAndAppendChildren = {
  forSidebarProjectlist: function (Array, parrent) {
    let el = document.createElement("div");
    el.classList.add("projectDropDownCon");
    for (let i = 0; i < Array.length; i++) {
      let dotEl = document.createElement("div");
      dotEl.classList.add("sidebarDot");
      dotEl.textContent = "-";

      let newProjectBtn = document.createElement("button");
      newProjectBtn.classList.add("projectDropDownText");
      newProjectBtn.textContent = Array[i].name;

      newProjectBtn.addEventListener("click", function () {
        let btnNum = i;
        _controller__WEBPACK_IMPORTED_MODULE_0__.btnActivation.pageDirections.specificProjectBtnActivated(btnNum);
      });

      el.appendChild(dotEl);
      el.appendChild(newProjectBtn);
    }
    parrent.appendChild(el);
  },
  forAllProjects: function (Array, parrent) {
    for (let i = 0; i < Array.length; i++) {
      parrent.appendChild(createAndAppendChildren.forCreatingProjectEl(i));
    }

    let addBtn = document.createElement("btn");
    addBtn.classList.add("projectHeaderCon", "addProjectBtn");

    let addBtnIcon = document.createElement("div");
    addBtnIcon.classList.add("projectAddBtnIcon", "smallProjectElBtn");

    addBtn.appendChild(addBtnIcon);

    addBtn.addEventListener("click", function () {
      _controller__WEBPACK_IMPORTED_MODULE_0__.btnActivation.projectArrayEdits.addProjectBtn();
    });

    parrent.appendChild(addBtn);
  },
  forSpecificProjectPage: function (projectArrayNum, parrent) {
    parrent.appendChild(this.forCreatingProjectEl(projectArrayNum));

    for (let i = 0; i < _ObjectCreator_js__WEBPACK_IMPORTED_MODULE_4__.projectArray[projectArrayNum].TaskList.length; i++) {
      parrent.appendChild(
        createAndAppendChildren.forCreatingTaskEl(
          _ObjectCreator_js__WEBPACK_IMPORTED_MODULE_4__.projectArray[projectArrayNum].TaskList[i]
        )
      );
    }

    const addBtn = document.createElement("btn");
    addBtn.classList.add("projectHeaderCon", "addProjectBtn", "taskAddBtn");

    let addBtnIcon = document.createElement("div");
    addBtnIcon.classList.add(
      "projectAddBtnIcon",
      "smallProjectElBtn",
      "taskAddBtnIcon"
    );

    addBtn.appendChild(addBtnIcon);

    addBtn.addEventListener("click", function () {
      _controller__WEBPACK_IMPORTED_MODULE_0__.btnActivation.projectArrayEdits.taskArrayEdits(projectArrayNum);
    });

    parrent.appendChild(addBtn);
  },
  forCreatingProjectEl: function (projectArrayNum) {
    let newProjectElCon = document.createElement("div");
    newProjectElCon.classList.add("projectHeaderCon");

    let newProjectEl = document.createElement("div");
    newProjectEl.classList.add("projectHeader");

    // Creating left side

    let newProjectElLeft = document.createElement("div");
    newProjectElLeft.classList.add("newProjectElLeft");

    newProjectElLeft.addEventListener("click", function () {
      _controller__WEBPACK_IMPORTED_MODULE_0__.btnActivation.pageDirections.specificProjectBtnActivated(projectArrayNum);
    });

    let newProjectElHeaderText = document.createElement("div");
    newProjectElHeaderText.classList.add("projectHeaderText");
    newProjectElHeaderText.textContent = `${_ObjectCreator_js__WEBPACK_IMPORTED_MODULE_4__.projectArray[projectArrayNum].name}`;

    let newProjectElDisciption = document.createElement("div");
    newProjectElDisciption.classList.add("newProjectElDisciption");
    newProjectElDisciption.textContent = `${_ObjectCreator_js__WEBPACK_IMPORTED_MODULE_4__.projectArray[projectArrayNum].description}`;

    newProjectElLeft.appendChild(newProjectElHeaderText);
    newProjectElLeft.appendChild(newProjectElDisciption);

    // Creating right side

    let newProjectElRight = document.createElement("div");
    newProjectElRight.classList.add("newProjectElRight");

    // Upper Right side

    let newProjectElUpperRightCon = document.createElement("div");
    newProjectElUpperRightCon.classList.add("projectElRightBtnCon");

    let deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.classList.add("deleteProjectBtn", "smallProjectElBtn");
    deleteProjectBtn.addEventListener("click", function () {
      _controller__WEBPACK_IMPORTED_MODULE_0__.btnActivation.projectArrayEdits.deleteBtn(projectArrayNum);
    });

    let editProjectBtn = document.createElement("button");
    editProjectBtn.classList.add("editProjectBtn", "smallProjectElBtn");
    editProjectBtn.addEventListener("click", function () {
      _controller__WEBPACK_IMPORTED_MODULE_0__.btnActivation.projectArrayEdits.editBtn(projectArrayNum);
    });

    newProjectElUpperRightCon.appendChild(editProjectBtn);
    newProjectElUpperRightCon.appendChild(deleteProjectBtn);

    // lower Right side

    let newProjectElLowerRightCon = document.createElement("div");
    newProjectElLowerRightCon.classList.add("projectElRightBtnCon");

    let projectTaskIcon = document.createElement("div");
    projectTaskIcon.classList.add("projectTaskIcon", "smallProjectElBtn");

    let projectTaskNumText = document.createElement("div");
    projectTaskNumText.classList.add("projectTaskNumText");
    projectTaskNumText.textContent = `Tasks: ${_ObjectCreator_js__WEBPACK_IMPORTED_MODULE_4__.projectArray[projectArrayNum].TaskList.length}`;

    newProjectElLowerRightCon.appendChild(projectTaskIcon);
    newProjectElLowerRightCon.appendChild(projectTaskNumText);

    newProjectElRight.appendChild(newProjectElUpperRightCon);
    newProjectElRight.appendChild(newProjectElLowerRightCon);

    // appending all

    newProjectEl.appendChild(newProjectElLeft);
    newProjectEl.appendChild(newProjectElRight);

    newProjectElCon.appendChild(newProjectEl);

    return newProjectElCon;
  },
  forCreatingTaskEl: function (taskInfoEl) {
    const taskCon = document.createElement("div");
    taskCon.classList.add("taskCon");

    const taskEl = document.createElement("div");
    taskEl.classList.add("taskEl");

    // creating the left side
    const leftSide = document.createElement("div");
    leftSide.classList.add("taskElSideCon");

    const titleEl = document.createElement("div");
    titleEl.classList.add("taskHeaderEl");

    let titleText = document.createElement("div");
    titleText.textContent = taskInfoEl.name;

    let extendBtn = document.createElement("div");
    extendBtn.classList.add("smallProjectElBtn", "extendBtn");

    let i = 0;
    extendBtn.addEventListener("click", function () {
      i++;
      if (i % 2 === 1) {
        taskEl.style.height = "220px";
        taskCon.style.height = "235px";
        extendBtn.style.rotate = "180deg";
      } else {
        taskEl.style.height = "115px";
        taskCon.style.height = "130px";
        extendBtn.style.rotate = "0deg";
      }
    });

    titleEl.appendChild(titleText);
    titleEl.appendChild(extendBtn);

    let descriptionEl = document.createElement("div");
    descriptionEl.classList.add("taskDescriptionText");
    descriptionEl.textContent = taskInfoEl.description;

    leftSide.appendChild(titleEl);
    leftSide.appendChild(descriptionEl);

    // creating the right side
    const rightSide = document.createElement("div");
    rightSide.classList.add("taskElSideCon");

    const rightSideUpper = document.createElement("div");
    rightSideUpper.classList.add("rightSideUpper");

    let priorityBox = new Image();
    if (taskInfoEl.priority === "low") {
      priorityBox.src = _img_Icons_priorityLowIcon_png__WEBPACK_IMPORTED_MODULE_6__;
    } else if (taskInfoEl.priority === "high") {
      priorityBox.src = _img_Icons_priorityHighIcon_png__WEBPACK_IMPORTED_MODULE_5__;
    } else {
      priorityBox.src = _img_Icons_priorityMediumIcon_png__WEBPACK_IMPORTED_MODULE_7__;
    }
    priorityBox.classList.add("priorityBox");

    let daysLeftEl = document.createElement("div");
    daysLeftEl.classList.add("daysLeftEl");

    rightSideUpper.appendChild(priorityBox);
    rightSideUpper.appendChild(daysLeftEl);

    const rightSideLower = document.createElement("div");
    rightSideLower.classList.add("rightSideLower");

    rightSide.appendChild(rightSideUpper);
    rightSide.appendChild(rightSideLower);

    taskEl.appendChild(leftSide);
    taskEl.appendChild(rightSide);

    taskCon.appendChild(taskEl);

    return taskCon;
  },
};

const getValueElByForm = {
  forProject: function () {
    return {};
  },
  forTask: function () {},
};




/***/ }),

/***/ "./src/img/Icons/addBtn.png":
/*!**********************************!*\
  !*** ./src/img/Icons/addBtn.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed13679bb8b5423b42be.png";

/***/ }),

/***/ "./src/img/Icons/editIcon.png":
/*!************************************!*\
  !*** ./src/img/Icons/editIcon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ed4aefcbde1f132b3fb.png";

/***/ }),

/***/ "./src/img/Icons/extendBtnIcon.png":
/*!*****************************************!*\
  !*** ./src/img/Icons/extendBtnIcon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c08f4cd6bb8c2b2c7ce6.png";

/***/ }),

/***/ "./src/img/Icons/homeIcon.png":
/*!************************************!*\
  !*** ./src/img/Icons/homeIcon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d45f0e17f6c2f74f5a7.png";

/***/ }),

/***/ "./src/img/Icons/priorityHighIcon.png":
/*!********************************************!*\
  !*** ./src/img/Icons/priorityHighIcon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "699134b13583d8713a1e.png";

/***/ }),

/***/ "./src/img/Icons/priorityLowIcon.png":
/*!*******************************************!*\
  !*** ./src/img/Icons/priorityLowIcon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e17fe5c36ab9a55e39dd.png";

/***/ }),

/***/ "./src/img/Icons/priorityMediumIcon.png":
/*!**********************************************!*\
  !*** ./src/img/Icons/priorityMediumIcon.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6042a3643f549a235d06.png";

/***/ }),

/***/ "./src/img/Icons/projectIcon.png":
/*!***************************************!*\
  !*** ./src/img/Icons/projectIcon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67a5c64e9c5392f72342.png";

/***/ }),

/***/ "./src/img/Icons/taskIcon.png":
/*!************************************!*\
  !*** ./src/img/Icons/taskIcon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b24484eef86b3c5c2b1e.png";

/***/ }),

/***/ "./src/img/Icons/taskIconOrange.png":
/*!******************************************!*\
  !*** ./src/img/Icons/taskIconOrange.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e90407a9e1366975cb4.png";

/***/ }),

/***/ "./src/img/Icons/trashcanIcon.png":
/*!****************************************!*\
  !*** ./src/img/Icons/trashcanIcon.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "554ad541a3c5190ec774.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoader */ "./src/pageLoader.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



document.body.appendChild((0,_pageLoader__WEBPACK_IMPORTED_MODULE_0__.createFinalPageObject)());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLGFBQWEsY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLGFBQWEsY0FBYyxjQUFjLGNBQWMsYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUss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Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxRDtBQUNoQzs7QUFFckIsMEJBQTBCLGtFQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9PYmplY3RDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlTG9hZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9JY29ucy9hZGRCdG4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvSWNvbnMvdHJhc2hjYW5JY29uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL0ljb25zL2VkaXRJY29uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL0ljb25zL3Rhc2tJY29uT3JhbmdlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1nL0ljb25zL2V4dGVuZEJ0bkljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogIEhlYWRlciAgKi9cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXJVcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTYwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMjBweCAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oZWFkZXJUZXh0IHtcXG4gIGZvbnQtc2l6ZTogODBweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbn1cXG5cXG4ucHVycGxlU3BhbjEge1xcbiAgY29sb3I6ICM4ZTM1ZGM7XFxufVxcblxcbi5wdXJwbGVTcGFuMiB7XFxuICBjb2xvcjogI2FhNTFhNTtcXG59XFxuXFxuLmxvZ2luQnRuIHtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBwYWRkaW5nOiA4cHggMjBweDtcXG4gIGJvcmRlcjogcmdiKDI0MywgMjQzLCAyNDMpIDRweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigyNDcsIDEzMiwgMCksIG9yYW5nZSk7XFxufVxcblxcbi5oZWFkZXJMb3dlciB7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM4ZTM1ZGMsIG9yYW5nZSk7XFxufVxcbi8qICBIZWFkZXIgRW5kICovXFxuXFxuLyogQ3VycmVudCBwYWdlIGNvbnRlbnQgKi9cXG4uY3VycmVudFBhZ2VDb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4IDFmcjtcXG4gIGhlaWdodDogMjAwdmg7XFxufVxcblxcbi8qIEN1cnJlbnQgcGFnZSBjb250ZW50IEVuZCAqL1xcblxcbi8qIHNpZGViYXIgKi9cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTlweDtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGhlaWdodDogNjIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxMDBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzY4KTtcXG59XFxuXFxuLnNpZGViYXJCdG5Db24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCA1ZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLnNpZGViYXJCdG4ge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjYWE1MWE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLnByb2plY3RCdG5Db24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggYXV0bztcXG4gIHJvdy1nYXA6IDhweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCIuIC4gLlxcXCJcXG4gICAgXFxcIkRyb3Bkb3duQm94IERyb3Bkb3duQm94IERyb3Bkb3duQm94XFxcIjtcXG59XFxuXFxuLnByb2plY3REcm9wRG93bkJ0biB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBjb2xvcjogI2FhNTFhNTtcXG59XFxuXFxuLnNpZGViYXJJY29uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdERyb3BEb3duQ29uIHtcXG4gIGdyaWQtYXJlYTogRHJvcGRvd25Cb3g7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMi41ZnI7XFxuICByb3ctZ2FwOiAxMnB4O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucHJvamVjdERyb3BEb3duVGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6ICNhYTUxYTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXJEb3Qge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6ICNhYTUxYTU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbn1cXG4vKiBzaWRlYmFyIEVuZCAqL1xcblxcbi8qIFByb2plY3QgcGFnZSovXFxuXFxuLlByb2plY3RDb250ZW50RWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwcHggNTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMjVweDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLyogUHJvamVjdCBwYWdlIEVuZCovXFxuXFxuLyogc3BlY2lmaWsgcHJvamVjdCBwYWdlKi9cXG5cXG4vKiBzcGVjaWZpayBwcm9qZWN0IHBhZ2UgRW5kICovXFxuXFxuLyogIE90aGVyIHN0eWxpbmcgdGhhdCBkb3Nlbid0IGZhbGwgdW5kZXIgdGhhdCBjYXRhZ29yaSAqL1xcblxcbi8qIFByb2plY3QgRWxlbWVudCAqL1xcbi5zcGVjaWZpY1Byb2plY3RDb250ZW50RWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDUwcHg7XFxuICBwYWRkaW5nOiAwcHggNTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMjVweDtcXG59XFxuXFxuLnByb2plY3RIZWFkZXJDb24ge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2FhNTFhNSwgb3JhbmdlKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjI2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnByb2plY3RIZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ0biB7XFxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxNDBweDtcXG59XFxuXFxuLnByb2plY3RBZGRCdG5JY29uIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDExMHB4O1xcbn1cXG5cXG4ubmV3UHJvamVjdEVsTGVmdCB7XFxuICB3aWR0aDogbWF4KDQ1MHB4LCA1MCUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTJweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIi4gZGVzY3JpcHRpb25cXFwiO1xcbn1cXG5cXG4ucHJvamVjdEhlYWRlclRleHQge1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiAjYWE1MWE1O1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbi5uZXdQcm9qZWN0RWxEaXNjaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogI2FhNTFhNTtcXG59XFxuXFxuLm5ld1Byb2plY3RFbFJpZ2h0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDYwcHg7XFxufVxcblxcbi5wcm9qZWN0RWxSaWdodEJ0bkNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5kZWxldGVQcm9qZWN0QnRuIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMjhweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5lZGl0UHJvamVjdEJ0biB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0VGFza0ljb24ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIHdpZHRoOiAzM3B4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdFRhc2tOdW1UZXh0IHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4vKiBQcm9qZWN0IEVsZW1lbnQgRU5EICovXFxuXFxuLyogVGFzayBFbGVtZW50ICovXFxuXFxuLnRhc2tDb24ge1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2FhNTFhNSwgb3JhbmdlKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjI2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aWR0aDogYXV0bztcXG4gIHRyYW5zaXRpb246IDAuN3M7XFxufVxcblxcbi50YXNrRWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDExNXB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDYwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IDAuN3M7XFxufVxcblxcbi50YXNrQWRkQnRuIHtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcblxcbi50YXNrQWRkQnRuSWNvbiB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuLnRhc2tFbFNpZGVDb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTE1cHggMWZyO1xcbn1cXG5cXG4udGFza0hlYWRlckVsIHtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICBjb2xvcjogI2FhNTFhNTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMTVweDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLmV4dGVuZEJ0biB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi50YXNrRGVzY3JpcHRpb25UZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgY29sb3I6ICNhYTUxYTU7XFxufVxcblxcbi5yaWdodFNpZGVVcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5Qm94IHtcXG4gIGhlaWdodDogNDVweDtcXG59XFxuXFxuLnJpZ2h0U2lkZUxvd2VyIHtcXG59XFxuXFxuLyogVGFzayBFbGVtZW50IEVuZCAqL1xcblxcbi5zbWFsbFByb2plY3RFbEJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLyogIE90aGVyIHN0eWxpbmcgdGhhdCBkb3Nlbid0IGZhbGwgdW5kZXIgdGhhdCBjYXRhZ29yaSBFTkQgKi8gO1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBLGFBQWE7QUFDYjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osNERBQTREO0FBQzlEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1EQUFtRDtBQUNyRDtBQUNBLGdCQUFnQjs7QUFFaEIseUJBQXlCO0FBQ3pCO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUEsNkJBQTZCOztBQUU3QixZQUFZO0FBQ1o7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1o7O3lDQUV1QztBQUN6Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQSxnQkFBZ0I7O0FBRWhCLGdCQUFnQjs7QUFFaEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBLG9CQUFvQjs7QUFFcEIseUJBQXlCOztBQUV6Qiw4QkFBOEI7O0FBRTlCLHlEQUF5RDs7QUFFekQsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtREFBbUQ7RUFDbkQsNkNBQTZDO0VBQzdDLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1EQUF1QztFQUN2QyxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCOzttQkFFaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxtREFBNkM7RUFDN0MsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtREFBeUM7RUFDekMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1EQUErQztFQUMvQyxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBLHdCQUF3Qjs7QUFFeEIsaUJBQWlCOztBQUVqQjtFQUNFLGFBQWE7RUFDYixtREFBbUQ7RUFDbkQsNkNBQTZDO0VBQzdDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1EQUE4QztFQUM5QyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUEsNkRBQTZEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogIEhlYWRlciAgKi9cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXJVcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTYwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMjBweCAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oZWFkZXJUZXh0IHtcXG4gIGZvbnQtc2l6ZTogODBweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbn1cXG5cXG4ucHVycGxlU3BhbjEge1xcbiAgY29sb3I6ICM4ZTM1ZGM7XFxufVxcblxcbi5wdXJwbGVTcGFuMiB7XFxuICBjb2xvcjogI2FhNTFhNTtcXG59XFxuXFxuLmxvZ2luQnRuIHtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBwYWRkaW5nOiA4cHggMjBweDtcXG4gIGJvcmRlcjogcmdiKDI0MywgMjQzLCAyNDMpIDRweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigyNDcsIDEzMiwgMCksIG9yYW5nZSk7XFxufVxcblxcbi5oZWFkZXJMb3dlciB7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM4ZTM1ZGMsIG9yYW5nZSk7XFxufVxcbi8qICBIZWFkZXIgRW5kICovXFxuXFxuLyogQ3VycmVudCBwYWdlIGNvbnRlbnQgKi9cXG4uY3VycmVudFBhZ2VDb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4IDFmcjtcXG4gIGhlaWdodDogMjAwdmg7XFxufVxcblxcbi8qIEN1cnJlbnQgcGFnZSBjb250ZW50IEVuZCAqL1xcblxcbi8qIHNpZGViYXIgKi9cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTlweDtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGhlaWdodDogNjIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxMDBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzY4KTtcXG59XFxuXFxuLnNpZGViYXJCdG5Db24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCA1ZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLnNpZGViYXJCdG4ge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjYWE1MWE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLnByb2plY3RCdG5Db24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggYXV0bztcXG4gIHJvdy1nYXA6IDhweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCIuIC4gLlxcXCJcXG4gICAgXFxcIkRyb3Bkb3duQm94IERyb3Bkb3duQm94IERyb3Bkb3duQm94XFxcIjtcXG59XFxuXFxuLnByb2plY3REcm9wRG93bkJ0biB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBjb2xvcjogI2FhNTFhNTtcXG59XFxuXFxuLnNpZGViYXJJY29uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdERyb3BEb3duQ29uIHtcXG4gIGdyaWQtYXJlYTogRHJvcGRvd25Cb3g7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMi41ZnI7XFxuICByb3ctZ2FwOiAxMnB4O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucHJvamVjdERyb3BEb3duVGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6ICNhYTUxYTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXJEb3Qge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6ICNhYTUxYTU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbn1cXG4vKiBzaWRlYmFyIEVuZCAqL1xcblxcbi8qIFByb2plY3QgcGFnZSovXFxuXFxuLlByb2plY3RDb250ZW50RWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwcHggNTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMjVweDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLyogUHJvamVjdCBwYWdlIEVuZCovXFxuXFxuLyogc3BlY2lmaWsgcHJvamVjdCBwYWdlKi9cXG5cXG4vKiBzcGVjaWZpayBwcm9qZWN0IHBhZ2UgRW5kICovXFxuXFxuLyogIE90aGVyIHN0eWxpbmcgdGhhdCBkb3Nlbid0IGZhbGwgdW5kZXIgdGhhdCBjYXRhZ29yaSAqL1xcblxcbi8qIFByb2plY3QgRWxlbWVudCAqL1xcbi5zcGVjaWZpY1Byb2plY3RDb250ZW50RWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDUwcHg7XFxuICBwYWRkaW5nOiAwcHggNTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMjVweDtcXG59XFxuXFxuLnByb2plY3RIZWFkZXJDb24ge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2FhNTFhNSwgb3JhbmdlKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjI2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnByb2plY3RIZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ0biB7XFxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxNDBweDtcXG59XFxuXFxuLnByb2plY3RBZGRCdG5JY29uIHtcXG4gIGJhY2tncm91bmQ6IHVybCguL2ltZy9JY29ucy9hZGRCdG4ucG5nKTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMTEwcHg7XFxufVxcblxcbi5uZXdQcm9qZWN0RWxMZWZ0IHtcXG4gIHdpZHRoOiBtYXgoNDUwcHgsIDUwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMnB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwiLiBkZXNjcmlwdGlvblxcXCI7XFxufVxcblxcbi5wcm9qZWN0SGVhZGVyVGV4dCB7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6ICNhYTUxYTU7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuLm5ld1Byb2plY3RFbERpc2NpcHRpb24ge1xcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiAjYWE1MWE1O1xcbn1cXG5cXG4ubmV3UHJvamVjdEVsUmlnaHQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogNjBweDtcXG59XFxuXFxuLnByb2plY3RFbFJpZ2h0QnRuQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmRlbGV0ZVByb2plY3RCdG4ge1xcbiAgYmFja2dyb3VuZDogdXJsKC4vaW1nL0ljb25zL3RyYXNoY2FuSWNvbi5wbmcpO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDI4cHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uZWRpdFByb2plY3RCdG4ge1xcbiAgYmFja2dyb3VuZDogdXJsKC4vaW1nL0ljb25zL2VkaXRJY29uLnBuZyk7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnByb2plY3RUYXNrSWNvbiB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWcvSWNvbnMvdGFza0ljb25PcmFuZ2UucG5nKTtcXG4gIHdpZHRoOiAzM3B4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdFRhc2tOdW1UZXh0IHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4vKiBQcm9qZWN0IEVsZW1lbnQgRU5EICovXFxuXFxuLyogVGFzayBFbGVtZW50ICovXFxuXFxuLnRhc2tDb24ge1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2FhNTFhNSwgb3JhbmdlKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjI2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aWR0aDogYXV0bztcXG4gIHRyYW5zaXRpb246IDAuN3M7XFxufVxcblxcbi50YXNrRWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDExNXB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDYwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IDAuN3M7XFxufVxcblxcbi50YXNrQWRkQnRuIHtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcblxcbi50YXNrQWRkQnRuSWNvbiB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuLnRhc2tFbFNpZGVDb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTE1cHggMWZyO1xcbn1cXG5cXG4udGFza0hlYWRlckVsIHtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICBjb2xvcjogI2FhNTFhNTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMTVweDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLmV4dGVuZEJ0biB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWcvSWNvbnMvZXh0ZW5kQnRuSWNvbi5wbmcpO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi50YXNrRGVzY3JpcHRpb25UZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgY29sb3I6ICNhYTUxYTU7XFxufVxcblxcbi5yaWdodFNpZGVVcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5Qm94IHtcXG4gIGhlaWdodDogNDVweDtcXG59XFxuXFxuLnJpZ2h0U2lkZUxvd2VyIHtcXG59XFxuXFxuLyogVGFzayBFbGVtZW50IEVuZCAqL1xcblxcbi5zbWFsbFByb2plY3RFbEJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLyogIE90aGVyIHN0eWxpbmcgdGhhdCBkb3Nlbid0IGZhbGwgdW5kZXIgdGhhdCBjYXRhZ29yaSBFTkQgKi8gO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVPYmpGcm9tVmFsdWVzIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuXG5jb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgcHJvamVjdEFycmF5LnB1c2goY3JlYXRlT2JqRnJvbVZhbHVlcy5mb3JQcm9qZWN0KFByb2plY3RDcmVhdGVyKSk7XG59XG5cbmNsYXNzIFByb2plY3RDcmVhdGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLlRhc2tMaXN0ID0gW107XG4gIH1cbiAgYWRkVGFzaygpIHtcbiAgICB0aGlzLlRhc2tMaXN0LnB1c2goY3JlYXRlT2JqRnJvbVZhbHVlcy5mb3JUYXNrKFRhc2spKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBUYXNrKHByb2plY3QsIG5hbWUsIGRlc2NyaXB0aW9uLCBkZWFkbGluZSwgcHJpb3JpdHkpIHtcbiAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmRlYWRsaW5lID0gZGVhZGxpbmU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbn1cblxuY29uc3QgVE9QUHJvamVjdCA9IG5ldyBQcm9qZWN0Q3JlYXRlcihcbiAgXCJUT1AxXCIsXG4gIFwiTGVhcm5pbmcgaG93IHRvIHByb2dyYW0gdGhyb3VnaCBhbiBvcGVuIHNvdXJjZSBwcm9ncmFtbWluZyBjb3Vyc2VcIixcbiAgXCJwdXJwbGVcIlxuKTtcblxuY29uc3QgVE9QUHJvamVjdDIgPSBuZXcgUHJvamVjdENyZWF0ZXIoXG4gIFwiVE9QMlwiLFxuICBcIkxlYXJuaW5nIGhvdyB0byBwcm9ncmFtIHRocm91Z2ggYW4gb3BlbiBzb3VyY2UgcHJvZ3JhbW1pbmcgY291cnNlXCIsXG4gIFwicHVycGxlXCJcbik7XG5cbmNvbnN0IFRPUFByb2plY3QzID0gbmV3IFByb2plY3RDcmVhdGVyKFxuICBcIlRPUDNcIixcbiAgXCJMZWFybmluZyBob3cgdG8gcHJvZ3JhbSB0aHJvdWdoIGFuIG9wZW4gc291cmNlIHByb2dyYW1taW5nIGNvdXJzZVwiLFxuICBcInB1cnBsZVwiXG4pO1xuVE9QUHJvamVjdDMuVGFza0xpc3QucHVzaChcbiAgbmV3IFRhc2soXG4gICAgXCJUT1BQcm9qZWN0M1wiLFxuICAgIFwiSmF2YVwiLFxuICAgIFwiTGVhcm5pbmcgamF2YSBpbnN0ZWFkIG9kIGphdmFzY3JpcHQgc28gaSBjYW4gbW92ZSBvbiB0byBDUyBhbmQgbWFrZSBteSBvd24gbWluZWNyYWZ0XCIsXG4gICAgXCIyMC81XCIsXG4gICAgXCJoaWdoXCIsXG4gICAgXCJub25lXCJcbiAgKVxuKTtcblxucHJvamVjdEFycmF5LnB1c2goVE9QUHJvamVjdCk7XG5wcm9qZWN0QXJyYXkucHVzaChUT1BQcm9qZWN0Mik7XG5wcm9qZWN0QXJyYXkucHVzaChUT1BQcm9qZWN0Myk7XG5jb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuXG5leHBvcnQgeyBwcm9qZWN0QXJyYXksIGFkZFByb2plY3QgfTtcbiIsImltcG9ydCB7IGFkZFByb2plY3QsIHByb2plY3RBcnJheSB9IGZyb20gXCIuL09iamVjdENyZWF0b3JcIjtcbmltcG9ydCB7IGxvYWRlciB9IGZyb20gXCIuL3BhZ2VMb2FkZXJcIjtcblxuY29uc3QgZ2V0VmFsdWVzQnlDb25zb2xlID0ge1xuICBmb3JQcm9qZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG5hbWUgPSBwcm9tcHQoXCJQcm9qZWN0IG5hbWU6XCIpO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IHByb21wdChcIlByb2plY3QgZGVzY2lwdGlvbjpcIik7XG4gICAgcmV0dXJuIHsgbmFtZSwgZGVzY3JpcHRpb24gfTtcbiAgfSxcbiAgZm9yVGFzazogZnVuY3Rpb24gKCkge1xuICAgIGxldCBuYW1lID0gcHJvbXB0KFwiTmFtZSBwbGVhc2VcIik7XG4gICAgbGV0IGRlc2NpcHRpb24gPSBwcm9tcHQoXCJkZXNjaXB0aW9uIHBsZWFzZVwiKTtcbiAgICBsZXQgZGVhZGxpbmUgPSBwcm9tcHQoXCJEZWFkbGluZSBwbGVhc2VcIik7XG4gICAgbGV0IHByaW9yaXR5ID0gcHJvbXB0KFwicHJpb3JpdHkgcGxlYXNlXCIpO1xuICAgIHJldHVybiB7IG5hbWUsIGRlc2NpcHRpb24sIGRlYWRsaW5lLCBwcmlvcml0eSB9O1xuICB9LFxufTtcblxuY29uc3QgY3JlYXRlT2JqRnJvbVZhbHVlcyA9IHtcbiAgZm9yVGFzazogZnVuY3Rpb24gKGNvbnN0cnVjdG9yKSB7XG4gICAgbGV0IG5ld09iaiA9IGdldFZhbHVlc0J5Q29uc29sZS5mb3JUYXNrKCk7XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBjb25zdHJ1Y3RvcihcbiAgICAgIHRoaXMubmFtZSxcbiAgICAgIG5ld09iai5uYW1lLFxuICAgICAgbmV3T2JqLmRlc2NpcHRpb24sXG4gICAgICBuZXdPYmouZGVhZGxpbmUsXG4gICAgICBuZXdPYmoucHJpb3JpdHlcbiAgICApO1xuICAgIHJldHVybiBuZXdUYXNrO1xuICB9LFxuICBmb3JQcm9qZWN0OiBmdW5jdGlvbiAoY29uc3RydWN0b3IpIHtcbiAgICBsZXQgbmV3T2JqID0gZ2V0VmFsdWVzQnlDb25zb2xlLmZvclByb2plY3QoKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IGNvbnN0cnVjdG9yKFxuICAgICAgbmV3T2JqLm5hbWUsXG4gICAgICBuZXdPYmouZGVzY3JpcHRpb24sXG4gICAgICBuZXdPYmouY29sb3JcbiAgICApO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICB9LFxufTtcblxubGV0IGN1cnJlbnRQYWdlQ2hlY2tlciA9IFwiaG9tZVwiO1xuXG5jb25zdCBidG5BY3RpdmF0aW9uID0ge1xuICBwYWdlRGlyZWN0aW9uczoge1xuICAgIGhvbWVCdG5BY3RpdmF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaG9tZSBidXR0b24gY2xpY2tlZFwiKTtcbiAgICAgIGN1cnJlbnRQYWdlQ2hlY2tlciA9IFwiaG9tZVwiO1xuICAgICAgbG9hZGVyKCk7XG4gICAgfSxcbiAgICBleHRyYVRhc2tCdG5BY3RpdmF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXh0cmEgVGFzayBCdXR0b24gY2xpY2tlZFwiKTtcbiAgICAgIGN1cnJlbnRQYWdlQ2hlY2tlciA9IFwidGFza3NcIjtcbiAgICAgIGxvYWRlcigpO1xuICAgIH0sXG4gICAgcHJvamVjdEJ0bkFjdGl2YXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0IEJ1dHRvbiBjbGlja2VkXCIpO1xuICAgICAgY3VycmVudFBhZ2VDaGVja2VyID0gXCJwcm9qZWN0c1wiO1xuICAgICAgbG9hZGVyKCk7XG4gICAgfSxcbiAgICBzcGVjaWZpY1Byb2plY3RCdG5BY3RpdmF0ZWQ6IGZ1bmN0aW9uIChidG5OdW0pIHtcbiAgICAgIGN1cnJlbnRQYWdlQ2hlY2tlciA9IGJ0bk51bTtcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheVtidG5OdW1dKTtcbiAgICAgIGxvYWRlcigpO1xuICAgIH0sXG4gIH0sXG4gIHByb2plY3RBcnJheUVkaXRzOiB7XG4gICAgZWRpdEJ0bjogZnVuY3Rpb24gKGJ0bk51bSkge1xuICAgICAgY29uc29sZS5sb2coYGVkaXQgJHtidG5OdW19YCk7XG4gICAgICBsb2FkZXIoKTtcbiAgICB9LFxuICAgIGRlbGV0ZUJ0bjogZnVuY3Rpb24gKGJ0bk51bSkge1xuICAgICAgY29uc29sZS5sb2coYGRlbGV0aW5nICR7YnRuTnVtfWApO1xuICAgICAgcHJvamVjdEFycmF5LnNwbGljZShidG5OdW0sIDEpO1xuICAgICAgYnRuQWN0aXZhdGlvbi5wYWdlRGlyZWN0aW9ucy5wcm9qZWN0QnRuQWN0aXZhdGVkKCk7XG4gICAgICBsb2FkZXIoKTtcbiAgICB9LFxuICAgIGFkZFByb2plY3RCdG46IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYWRkaW5nIHByb2plY3RcIik7XG4gICAgICBhZGRQcm9qZWN0KCk7XG4gICAgICBsb2FkZXIoKTtcbiAgICB9LFxuICAgIHRhc2tBcnJheUVkaXRzOiBmdW5jdGlvbiAoYnRuTnVtKSB7XG4gICAgICBjb25zb2xlLmxvZyhgYWRkaW5nIHRhc2sgdG8gJHtwcm9qZWN0QXJyYXlbYnRuTnVtXS5uYW1lfWApO1xuICAgICAgcHJvamVjdEFycmF5W2J0bk51bV0uYWRkVGFzaygpO1xuICAgICAgbG9hZGVyKCk7XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU9iakZyb21WYWx1ZXMsIGJ0bkFjdGl2YXRpb24sIGN1cnJlbnRQYWdlQ2hlY2tlciB9O1xuIiwiaW1wb3J0IHsgYnRuQWN0aXZhdGlvbiwgY3VycmVudFBhZ2VDaGVja2VyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0IGhvbWVJY29uIGZyb20gXCIuL2ltZy9JY29ucy9ob21lSWNvbi5wbmdcIjtcbmltcG9ydCB0YXNrSWNvbiBmcm9tIFwiLi9pbWcvSWNvbnMvdGFza0ljb24ucG5nXCI7XG5pbXBvcnQgcHJvamVjdEljb24gZnJvbSBcIi4vaW1nL0ljb25zL3Byb2plY3RJY29uLnBuZ1wiO1xuaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vT2JqZWN0Q3JlYXRvci5qc1wiO1xuaW1wb3J0IHByaW9yaXR5SGlnaEljb24gZnJvbSBcIi4vaW1nL0ljb25zL3ByaW9yaXR5SGlnaEljb24ucG5nXCI7XG5pbXBvcnQgcHJpb3JpdHlMb3dJY29uIGZyb20gXCIuL2ltZy9JY29ucy9wcmlvcml0eUxvd0ljb24ucG5nXCI7XG5pbXBvcnQgcHJpb3JpdHlNZWRpdW1JY29uIGZyb20gXCIuL2ltZy9JY29ucy9wcmlvcml0eU1lZGl1bUljb24ucG5nXCI7XG5cbmNvbnN0IGxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZpbmFsUGFnZU9iamVjdCgpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZpbmFsUGFnZU9iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInBhZ2VDb250ZW50XCIpO1xuXG4gIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGVudCgpKTtcblxuICByZXR1cm4gcGFnZUNvbnRlbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IGhlYWRlclVwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyVXBwZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclVwcGVyXCIpO1xuXG4gIGxldCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyVGV4dFwiKTtcblxuICBsZXQgc3BhblB1cnBsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3BhblB1cnBsZTEuY2xhc3NMaXN0LmFkZChcInB1cnBsZVNwYW4xXCIsIFwiaGVhZGVyVGV4dFwiKTtcbiAgc3BhblB1cnBsZTEudGV4dENvbnRlbnQgPSBcIkdldFwiO1xuXG4gIGxldCBzcGFuQmxhY2sxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW5CbGFjazEuY2xhc3NMaXN0LmFkZChcImhlYWRlclRleHRcIik7XG4gIHNwYW5CbGFjazEudGV4dENvbnRlbnQgPSBcIkRvbmVcIjtcblxuICBsZXQgc3BhblB1cnBsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3BhblB1cnBsZTIuY2xhc3NMaXN0LmFkZChcInB1cnBsZVNwYW4yXCIsIFwiaGVhZGVyVGV4dFwiKTtcbiAgc3BhblB1cnBsZTIudGV4dENvbnRlbnQgPSBcIi5cIjtcblxuICBsZXQgc3BhbkJsYWNrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuQmxhY2syLmNsYXNzTGlzdC5hZGQoXCJibGFja1NwYW5cIiwgXCJoZWFkZXJUZXh0XCIpO1xuICBzcGFuQmxhY2syLnRleHRDb250ZW50ID0gXCJjb21cIjtcblxuICBoZWFkZXJUZXh0LmFwcGVuZENoaWxkKHNwYW5QdXJwbGUxKTtcbiAgaGVhZGVyVGV4dC5hcHBlbmRDaGlsZChzcGFuQmxhY2sxKTtcbiAgaGVhZGVyVGV4dC5hcHBlbmRDaGlsZChzcGFuUHVycGxlMik7XG4gIGhlYWRlclRleHQuYXBwZW5kQ2hpbGQoc3BhbkJsYWNrMik7XG5cbiAgaGVhZGVyVXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cbiAgbGV0IGxvZ2luQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbG9naW5CdG4uY2xhc3NMaXN0LmFkZChcImxvZ2luQnRuXCIpO1xuICBsb2dpbkJ0bi50ZXh0Q29udGVudCA9IFwiU2lnbiBpblwiO1xuXG4gIGhlYWRlclVwcGVyLmFwcGVuZENoaWxkKGxvZ2luQnRuKTtcblxuICBjb25zdCBoZWFkZXJMb3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlckxvd2VyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJMb3dlclwiKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVXBwZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTG93ZXIpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCBjcmVhdGVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjdXJyZW50UGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50UGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRQYWdlQ29udGVudFwiKTtcblxuICBjdXJyZW50UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZUJhcigpKTtcbiAgY3VycmVudFBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUN1cnJlbnRQYWdlQ29udGVudENvbnRlbnQoKSk7XG5cbiAgcmV0dXJuIGN1cnJlbnRQYWdlQ29udGVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZVNpZGVCYXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gIGxldCBob21lSWNvbkltZyA9IG5ldyBJbWFnZSgpO1xuICBob21lSWNvbkltZy5zcmMgPSBob21lSWNvbjtcbiAgaG9tZUljb25JbWcuY2xhc3NMaXN0LmFkZChcInNpZGViYXJJY29uXCIpO1xuXG4gIGxldCBob21lQnRuQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZUJ0bkNvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhckJ0bkNvblwiKTtcblxuICBsZXQgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImhvbWVCdG5cIiwgXCJzaWRlYmFyQnRuXCIpO1xuICBob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBidG5BY3RpdmF0aW9uLnBhZ2VEaXJlY3Rpb25zLmhvbWVCdG5BY3RpdmF0ZWQoKTtcbiAgfSk7XG5cbiAgaG9tZUJ0bkNvbi5hcHBlbmRDaGlsZChob21lSWNvbkltZyk7XG4gIGhvbWVCdG5Db24uYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG5cbiAgbGV0IGV4dHJhVGFza0J0bkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGV4dHJhVGFza0J0bkNvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhckJ0bkNvblwiKTtcblxuICBsZXQgdGFza0ljb25JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgdGFza0ljb25JbWcuc3JjID0gdGFza0ljb247XG4gIHRhc2tJY29uSW1nLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFySWNvblwiKTtcblxuICBsZXQgZXh0cmFUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZXh0cmFUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJleHRyYVRhc2tCdG5cIiwgXCJzaWRlYmFyQnRuXCIpO1xuICBleHRyYVRhc2tCdG4udGV4dENvbnRlbnQgPSBcIlRhc2tzXCI7XG4gIGV4dHJhVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGJ0bkFjdGl2YXRpb24ucGFnZURpcmVjdGlvbnMuZXh0cmFUYXNrQnRuQWN0aXZhdGVkKCk7XG4gIH0pO1xuXG4gIGV4dHJhVGFza0J0bkNvbi5hcHBlbmRDaGlsZCh0YXNrSWNvbkltZyk7XG4gIGV4dHJhVGFza0J0bkNvbi5hcHBlbmRDaGlsZChleHRyYVRhc2tCdG4pO1xuXG4gIGxldCBwcm9qZWN0QnRuQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEJ0bkNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ0bkNvblwiKTtcblxuICBsZXQgcHJvamVjdEljb25JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgcHJvamVjdEljb25JbWcuc3JjID0gcHJvamVjdEljb247XG4gIHByb2plY3RJY29uSW1nLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFySWNvblwiKTtcblxuICBsZXQgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RCdG5cIiwgXCJzaWRlYmFyQnRuXCIpO1xuICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlRGlyZWN0aW9ucy5wcm9qZWN0QnRuQWN0aXZhdGVkKCk7XG4gIH0pO1xuXG4gIGNyZWF0ZUFuZEFwcGVuZENoaWxkcmVuLmZvclNpZGViYXJQcm9qZWN0bGlzdChwcm9qZWN0QXJyYXksIHByb2plY3RCdG5Db24pO1xuXG4gIHByb2plY3RCdG5Db24uYXBwZW5kQ2hpbGQocHJvamVjdEljb25JbWcpO1xuICBwcm9qZWN0QnRuQ29uLmFwcGVuZENoaWxkKHByb2plY3RCdG4pO1xuXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoaG9tZUJ0bkNvbik7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoZXh0cmFUYXNrQnRuQ29uKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0QnRuQ29uKTtcblxuICByZXR1cm4gc2lkZWJhcjtcbn07XG5cbmNvbnN0IGN1cnJlbnRQYWdlQ29udGVudENvbnRlbnRMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHdoaWxlIChjdXJyZW50UGFnZUNvbnRlbnRDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjdXJyZW50UGFnZUNvbnRlbnRDb250ZW50LnJlbW92ZUNoaWxkKGN1cnJlbnRQYWdlQ29udGVudENvbnRlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbFBhZ2VPYmplY3QoKSk7XG59O1xuXG5jb25zdCBjcmVhdGVDdXJyZW50UGFnZUNvbnRlbnRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjdXJyZW50UGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50UGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRQYWdlQ29udGVudENvbnRlbnRcIik7XG4gIGN1cnJlbnRQYWdlQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnJlbnRQYWdlQ29udGVudENvbnRlbnRcIik7XG5cbiAgaWYgKGN1cnJlbnRQYWdlQ2hlY2tlciA9PT0gXCJob21lXCIpIHtcbiAgICBjdXJyZW50UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoKSk7XG4gIH0gZWxzZSBpZiAoY3VycmVudFBhZ2VDaGVja2VyID09PSBcInRhc2tzXCIpIHtcbiAgICBjdXJyZW50UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3NQYWdlKCkpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlQ2hlY2tlciA9PT0gXCJwcm9qZWN0c1wiKSB7XG4gICAgY3VycmVudFBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzUGFnZSgpKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoc3BlY2lmaWNQcm9qZWN0UGFnZSgpKTtcbiAgfVxuICByZXR1cm4gY3VycmVudFBhZ2VDb250ZW50O1xufTtcblxuY29uc3QgaG9tZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBob21lUGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHJldHVybiBob21lUGFnZUNvbnRlbnQ7XG59O1xuXG5jb25zdCB0YXNrc1BhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCB0YXNrc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHJldHVybiB0YXNrc0NvbnRlbnQ7XG59O1xuXG5jb25zdCBwcm9qZWN0c1BhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBwcm9qZWN0c0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0c0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcIlByb2plY3RDb250ZW50RWxcIik7XG5cbiAgY3JlYXRlQW5kQXBwZW5kQ2hpbGRyZW4uZm9yQWxsUHJvamVjdHMocHJvamVjdEFycmF5LCBwcm9qZWN0c0NvbnRlbnQpO1xuXG4gIHJldHVybiBwcm9qZWN0c0NvbnRlbnQ7XG59O1xuXG5jb25zdCBzcGVjaWZpY1Byb2plY3RQYWdlID0gZnVuY3Rpb24gKCkge1xuICBsZXQgc3BlY2lmaWNQcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNwZWNpZmljUHJvamVjdENvbnRlbnQuY2xhc3NMaXN0LmFkZChcInNwZWNpZmljUHJvamVjdENvbnRlbnRFbFwiKTtcblxuICBjcmVhdGVBbmRBcHBlbmRDaGlsZHJlbi5mb3JTcGVjaWZpY1Byb2plY3RQYWdlKFxuICAgIGN1cnJlbnRQYWdlQ2hlY2tlcixcbiAgICBzcGVjaWZpY1Byb2plY3RDb250ZW50XG4gICk7XG5cbiAgcmV0dXJuIHNwZWNpZmljUHJvamVjdENvbnRlbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVBbmRBcHBlbmRDaGlsZHJlbiA9IHtcbiAgZm9yU2lkZWJhclByb2plY3RsaXN0OiBmdW5jdGlvbiAoQXJyYXksIHBhcnJlbnQpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RHJvcERvd25Db25cIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRvdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRvdEVsLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyRG90XCIpO1xuICAgICAgZG90RWwudGV4dENvbnRlbnQgPSBcIi1cIjtcblxuICAgICAgbGV0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbmV3UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERyb3BEb3duVGV4dFwiKTtcbiAgICAgIG5ld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSBBcnJheVtpXS5uYW1lO1xuXG4gICAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBidG5OdW0gPSBpO1xuICAgICAgICBidG5BY3RpdmF0aW9uLnBhZ2VEaXJlY3Rpb25zLnNwZWNpZmljUHJvamVjdEJ0bkFjdGl2YXRlZChidG5OdW0pO1xuICAgICAgfSk7XG5cbiAgICAgIGVsLmFwcGVuZENoaWxkKGRvdEVsKTtcbiAgICAgIGVsLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xuICAgIH1cbiAgICBwYXJyZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgfSxcbiAgZm9yQWxsUHJvamVjdHM6IGZ1bmN0aW9uIChBcnJheSwgcGFycmVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBhcnJlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQW5kQXBwZW5kQ2hpbGRyZW4uZm9yQ3JlYXRpbmdQcm9qZWN0RWwoaSkpO1xuICAgIH1cblxuICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnRuXCIpO1xuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEhlYWRlckNvblwiLCBcImFkZFByb2plY3RCdG5cIik7XG5cbiAgICBsZXQgYWRkQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQnRuSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEFkZEJ0bkljb25cIiwgXCJzbWFsbFByb2plY3RFbEJ0blwiKTtcblxuICAgIGFkZEJ0bi5hcHBlbmRDaGlsZChhZGRCdG5JY29uKTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYnRuQWN0aXZhdGlvbi5wcm9qZWN0QXJyYXlFZGl0cy5hZGRQcm9qZWN0QnRuKCk7XG4gICAgfSk7XG5cbiAgICBwYXJyZW50LmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gIH0sXG4gIGZvclNwZWNpZmljUHJvamVjdFBhZ2U6IGZ1bmN0aW9uIChwcm9qZWN0QXJyYXlOdW0sIHBhcnJlbnQpIHtcbiAgICBwYXJyZW50LmFwcGVuZENoaWxkKHRoaXMuZm9yQ3JlYXRpbmdQcm9qZWN0RWwocHJvamVjdEFycmF5TnVtKSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheVtwcm9qZWN0QXJyYXlOdW1dLlRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBwYXJyZW50LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVBbmRBcHBlbmRDaGlsZHJlbi5mb3JDcmVhdGluZ1Rhc2tFbChcbiAgICAgICAgICBwcm9qZWN0QXJyYXlbcHJvamVjdEFycmF5TnVtXS5UYXNrTGlzdFtpXVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidG5cIik7XG4gICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SGVhZGVyQ29uXCIsIFwiYWRkUHJvamVjdEJ0blwiLCBcInRhc2tBZGRCdG5cIik7XG5cbiAgICBsZXQgYWRkQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQnRuSWNvbi5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJwcm9qZWN0QWRkQnRuSWNvblwiLFxuICAgICAgXCJzbWFsbFByb2plY3RFbEJ0blwiLFxuICAgICAgXCJ0YXNrQWRkQnRuSWNvblwiXG4gICAgKTtcblxuICAgIGFkZEJ0bi5hcHBlbmRDaGlsZChhZGRCdG5JY29uKTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYnRuQWN0aXZhdGlvbi5wcm9qZWN0QXJyYXlFZGl0cy50YXNrQXJyYXlFZGl0cyhwcm9qZWN0QXJyYXlOdW0pO1xuICAgIH0pO1xuXG4gICAgcGFycmVudC5hcHBlbmRDaGlsZChhZGRCdG4pO1xuICB9LFxuICBmb3JDcmVhdGluZ1Byb2plY3RFbDogZnVuY3Rpb24gKHByb2plY3RBcnJheU51bSkge1xuICAgIGxldCBuZXdQcm9qZWN0RWxDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RFbENvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEhlYWRlckNvblwiKTtcblxuICAgIGxldCBuZXdQcm9qZWN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RFbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEhlYWRlclwiKTtcblxuICAgIC8vIENyZWF0aW5nIGxlZnQgc2lkZVxuXG4gICAgbGV0IG5ld1Byb2plY3RFbExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RFbExlZnQuY2xhc3NMaXN0LmFkZChcIm5ld1Byb2plY3RFbExlZnRcIik7XG5cbiAgICBuZXdQcm9qZWN0RWxMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBidG5BY3RpdmF0aW9uLnBhZ2VEaXJlY3Rpb25zLnNwZWNpZmljUHJvamVjdEJ0bkFjdGl2YXRlZChwcm9qZWN0QXJyYXlOdW0pO1xuICAgIH0pO1xuXG4gICAgbGV0IG5ld1Byb2plY3RFbEhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RFbEhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcInByb2plY3RIZWFkZXJUZXh0XCIpO1xuICAgIG5ld1Byb2plY3RFbEhlYWRlclRleHQudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0QXJyYXlbcHJvamVjdEFycmF5TnVtXS5uYW1lfWA7XG5cbiAgICBsZXQgbmV3UHJvamVjdEVsRGlzY2lwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEVsRGlzY2lwdGlvbi5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdEVsRGlzY2lwdGlvblwiKTtcbiAgICBuZXdQcm9qZWN0RWxEaXNjaXB0aW9uLnRleHRDb250ZW50ID0gYCR7cHJvamVjdEFycmF5W3Byb2plY3RBcnJheU51bV0uZGVzY3JpcHRpb259YDtcblxuICAgIG5ld1Byb2plY3RFbExlZnQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEVsSGVhZGVyVGV4dCk7XG4gICAgbmV3UHJvamVjdEVsTGVmdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RWxEaXNjaXB0aW9uKTtcblxuICAgIC8vIENyZWF0aW5nIHJpZ2h0IHNpZGVcblxuICAgIGxldCBuZXdQcm9qZWN0RWxSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEVsUmlnaHQuY2xhc3NMaXN0LmFkZChcIm5ld1Byb2plY3RFbFJpZ2h0XCIpO1xuXG4gICAgLy8gVXBwZXIgUmlnaHQgc2lkZVxuXG4gICAgbGV0IG5ld1Byb2plY3RFbFVwcGVyUmlnaHRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RFbFVwcGVyUmlnaHRDb24uY2xhc3NMaXN0LmFkZChcInByb2plY3RFbFJpZ2h0QnRuQ29uXCIpO1xuXG4gICAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVByb2plY3RCdG5cIiwgXCJzbWFsbFByb2plY3RFbEJ0blwiKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBidG5BY3RpdmF0aW9uLnByb2plY3RBcnJheUVkaXRzLmRlbGV0ZUJ0bihwcm9qZWN0QXJyYXlOdW0pO1xuICAgIH0pO1xuXG4gICAgbGV0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdFByb2plY3RCdG5cIiwgXCJzbWFsbFByb2plY3RFbEJ0blwiKTtcbiAgICBlZGl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYnRuQWN0aXZhdGlvbi5wcm9qZWN0QXJyYXlFZGl0cy5lZGl0QnRuKHByb2plY3RBcnJheU51bSk7XG4gICAgfSk7XG5cbiAgICBuZXdQcm9qZWN0RWxVcHBlclJpZ2h0Q29uLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0QnRuKTtcbiAgICBuZXdQcm9qZWN0RWxVcHBlclJpZ2h0Q29uLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuXG4gICAgLy8gbG93ZXIgUmlnaHQgc2lkZVxuXG4gICAgbGV0IG5ld1Byb2plY3RFbExvd2VyUmlnaHRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RFbExvd2VyUmlnaHRDb24uY2xhc3NMaXN0LmFkZChcInByb2plY3RFbFJpZ2h0QnRuQ29uXCIpO1xuXG4gICAgbGV0IHByb2plY3RUYXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdFRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGFza0ljb25cIiwgXCJzbWFsbFByb2plY3RFbEJ0blwiKTtcblxuICAgIGxldCBwcm9qZWN0VGFza051bVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RUYXNrTnVtVGV4dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRhc2tOdW1UZXh0XCIpO1xuICAgIHByb2plY3RUYXNrTnVtVGV4dC50ZXh0Q29udGVudCA9IGBUYXNrczogJHtwcm9qZWN0QXJyYXlbcHJvamVjdEFycmF5TnVtXS5UYXNrTGlzdC5sZW5ndGh9YDtcblxuICAgIG5ld1Byb2plY3RFbExvd2VyUmlnaHRDb24uYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tJY29uKTtcbiAgICBuZXdQcm9qZWN0RWxMb3dlclJpZ2h0Q29uLmFwcGVuZENoaWxkKHByb2plY3RUYXNrTnVtVGV4dCk7XG5cbiAgICBuZXdQcm9qZWN0RWxSaWdodC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RWxVcHBlclJpZ2h0Q29uKTtcbiAgICBuZXdQcm9qZWN0RWxSaWdodC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RWxMb3dlclJpZ2h0Q29uKTtcblxuICAgIC8vIGFwcGVuZGluZyBhbGxcblxuICAgIG5ld1Byb2plY3RFbC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RWxMZWZ0KTtcbiAgICBuZXdQcm9qZWN0RWwuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEVsUmlnaHQpO1xuXG4gICAgbmV3UHJvamVjdEVsQ29uLmFwcGVuZENoaWxkKG5ld1Byb2plY3RFbCk7XG5cbiAgICByZXR1cm4gbmV3UHJvamVjdEVsQ29uO1xuICB9LFxuICBmb3JDcmVhdGluZ1Rhc2tFbDogZnVuY3Rpb24gKHRhc2tJbmZvRWwpIHtcbiAgICBjb25zdCB0YXNrQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29uXCIpO1xuXG4gICAgY29uc3QgdGFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZChcInRhc2tFbFwiKTtcblxuICAgIC8vIGNyZWF0aW5nIHRoZSBsZWZ0IHNpZGVcbiAgICBjb25zdCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVmdFNpZGUuY2xhc3NMaXN0LmFkZChcInRhc2tFbFNpZGVDb25cIik7XG5cbiAgICBjb25zdCB0aXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZUVsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrSGVhZGVyRWxcIik7XG5cbiAgICBsZXQgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSB0YXNrSW5mb0VsLm5hbWU7XG5cbiAgICBsZXQgZXh0ZW5kQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBleHRlbmRCdG4uY2xhc3NMaXN0LmFkZChcInNtYWxsUHJvamVjdEVsQnRuXCIsIFwiZXh0ZW5kQnRuXCIpO1xuXG4gICAgbGV0IGkgPSAwO1xuICAgIGV4dGVuZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaSsrO1xuICAgICAgaWYgKGkgJSAyID09PSAxKSB7XG4gICAgICAgIHRhc2tFbC5zdHlsZS5oZWlnaHQgPSBcIjIyMHB4XCI7XG4gICAgICAgIHRhc2tDb24uc3R5bGUuaGVpZ2h0ID0gXCIyMzVweFwiO1xuICAgICAgICBleHRlbmRCdG4uc3R5bGUucm90YXRlID0gXCIxODBkZWdcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tFbC5zdHlsZS5oZWlnaHQgPSBcIjExNXB4XCI7XG4gICAgICAgIHRhc2tDb24uc3R5bGUuaGVpZ2h0ID0gXCIxMzBweFwiO1xuICAgICAgICBleHRlbmRCdG4uc3R5bGUucm90YXRlID0gXCIwZGVnXCI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aXRsZUVsLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gICAgdGl0bGVFbC5hcHBlbmRDaGlsZChleHRlbmRCdG4pO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uRWwuY2xhc3NMaXN0LmFkZChcInRhc2tEZXNjcmlwdGlvblRleHRcIik7XG4gICAgZGVzY3JpcHRpb25FbC50ZXh0Q29udGVudCA9IHRhc2tJbmZvRWwuZGVzY3JpcHRpb247XG5cbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZCh0aXRsZUVsKTtcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsKTtcblxuICAgIC8vIGNyZWF0aW5nIHRoZSByaWdodCBzaWRlXG4gICAgY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByaWdodFNpZGUuY2xhc3NMaXN0LmFkZChcInRhc2tFbFNpZGVDb25cIik7XG5cbiAgICBjb25zdCByaWdodFNpZGVVcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmlnaHRTaWRlVXBwZXIuY2xhc3NMaXN0LmFkZChcInJpZ2h0U2lkZVVwcGVyXCIpO1xuXG4gICAgbGV0IHByaW9yaXR5Qm94ID0gbmV3IEltYWdlKCk7XG4gICAgaWYgKHRhc2tJbmZvRWwucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgIHByaW9yaXR5Qm94LnNyYyA9IHByaW9yaXR5TG93SWNvbjtcbiAgICB9IGVsc2UgaWYgKHRhc2tJbmZvRWwucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICBwcmlvcml0eUJveC5zcmMgPSBwcmlvcml0eUhpZ2hJY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmlvcml0eUJveC5zcmMgPSBwcmlvcml0eU1lZGl1bUljb247XG4gICAgfVxuICAgIHByaW9yaXR5Qm94LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eUJveFwiKTtcblxuICAgIGxldCBkYXlzTGVmdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXlzTGVmdEVsLmNsYXNzTGlzdC5hZGQoXCJkYXlzTGVmdEVsXCIpO1xuXG4gICAgcmlnaHRTaWRlVXBwZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlCb3gpO1xuICAgIHJpZ2h0U2lkZVVwcGVyLmFwcGVuZENoaWxkKGRheXNMZWZ0RWwpO1xuXG4gICAgY29uc3QgcmlnaHRTaWRlTG93ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJpZ2h0U2lkZUxvd2VyLmNsYXNzTGlzdC5hZGQoXCJyaWdodFNpZGVMb3dlclwiKTtcblxuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChyaWdodFNpZGVVcHBlcik7XG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHJpZ2h0U2lkZUxvd2VyKTtcblxuICAgIHRhc2tFbC5hcHBlbmRDaGlsZChsZWZ0U2lkZSk7XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG5cbiAgICB0YXNrQ29uLmFwcGVuZENoaWxkKHRhc2tFbCk7XG5cbiAgICByZXR1cm4gdGFza0NvbjtcbiAgfSxcbn07XG5cbmNvbnN0IGdldFZhbHVlRWxCeUZvcm0gPSB7XG4gIGZvclByb2plY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIGZvclRhc2s6IGZ1bmN0aW9uICgpIHt9LFxufTtcblxuZXhwb3J0IHsgY3JlYXRlRmluYWxQYWdlT2JqZWN0LCBjcmVhdGVBbmRBcHBlbmRDaGlsZHJlbiwgbG9hZGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY3JlYXRlRmluYWxQYWdlT2JqZWN0IH0gZnJvbSBcIi4vcGFnZUxvYWRlclwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGaW5hbFBhZ2VPYmplY3QoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=