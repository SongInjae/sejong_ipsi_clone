/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./index.js":
      /*!******************!*\
  !*** ./index.js ***!
  \******************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./scss/main.scss");\n\n\n/* popup창 관련 js - \'X\'나 \'+\' 누르면 클래스 toggle과 글자 변환 */\nconst btnElement = document.getElementById("close");\n\nbtnElement.addEventListener("click", () => {\n  const ulElement = document.querySelector(".popup ul");\n  ulElement.classList.toggle("on");\n  if (ulElement.className === "on") {\n    btnElement.textContent = "+";\n  } else {\n    btnElement.textContent = "\\u00D7";\n  }\n});\n\n/* main__content관련 js코드 - 각 탭의 주제를 누르면 관련 내용으로 바뀌도록 하기 */\nconst tabBoxElement = document.getElementsByClassName("board__tabBox")[0];\n\ntabBoxElement.addEventListener("click", (e) => {\n  const liElements = document.getElementsByClassName("tab");\n  const liArray = Array.from(liElements);\n  liArray.forEach((liElement) => {\n    liElement.classList.remove("on");\n  });\n  const clickElement = e.target.closest("li");\n  clickElement.classList.toggle("on");\n\n  const { id } = clickElement.dataset;\n  const contentElements = document.getElementsByClassName("content");\n  const contentArray = Array.from(contentElements);\n  contentArray.forEach((contentElement) => {\n    const checkId = contentElement.getAttribute("data-id");\n    if (checkId === id) {\n      if (!contentElement.classList.contains("on"))\n        contentElement.classList.toggle("on");\n    } else {\n      contentElement.classList.remove("on");\n    }\n  });\n\n  /* board__tabBox 관련 js 코드 - +버튼 클릭시 그에 맞는 해당 페이지로 이동 */\n  const atagElement = document.getElementsByClassName("tabPlus")[0];\n  console.log(atagElement, id);\n  if (id === "1") {\n    atagElement.setAttribute(\n      "href",\n      "http://ipsi.sejong.ac.kr/sub_page/sub5/0107_list.asp?tab1=5&B_CODE=BOARD_1455878015&B_CATEGORY=0"\n    );\n  } else if (id === "2") {\n    atagElement.setAttribute(\n      "href",\n      "http://ipsi.sejong.ac.kr/sub_page/sub5/0102_list.asp?tab1=5&B_CODE=BOARD_1455985403&B_CATEGORY=0"\n    );\n  } else if (id === "3") {\n    atagElement.setAttribute(\n      "href",\n      "http://ipsi.sejong.ac.kr/sub_page/sub5/0109_list.asp?tab1=5&B_CODE=BOARD_1464099007&B_CATEGORY=0"\n    );\n  }\n});\n\n/* main__image--pictuer 관련 js코드 -  이미지가 5초에 한 번씩 바뀌도록 변환 */\nconst pictureItems = document.querySelectorAll(".picture--item");\nconst tabSquare = document.querySelectorAll(".tab--square");\nlet currentIndex = 0;\nlet intervalId;\n\nconst tabArray = Array.from(tabSquare);\ntabArray.forEach((tab, idx) => {\n  tab.addEventListener("click", () => {\n    const previousIndex = currentIndex;\n    currentIndex = idx;\n    showNextImage(previousIndex, currentIndex);\n  });\n});\n\nfunction checkIdx() {\n  const previousIndex = currentIndex;\n  currentIndex = (currentIndex + 1) % pictureItems.length;\n\n  showNextImage(previousIndex, currentIndex);\n}\n\nfunction showNextImage(prvIdx, nextIdx) {\n  pictureItems[prvIdx].querySelector("img").style.opacity = 0;\n  pictureItems[nextIdx].querySelector("img").style.opacity = 1;\n\n  tabSquare[prvIdx].classList.remove("on");\n  tabSquare[nextIdx].classList.add("on");\n}\n\nfunction startInterval() {\n  intervalId = setInterval(checkIdx, 5000);\n}\n\nfunction stopInterval() {\n  clearInterval(intervalId);\n}\n\nstartInterval();\n\nconst stopButton = document.querySelector(".stop");\nstopButton.addEventListener("click", () => {\n  if (stopButton.classList.contains("on")) {\n    stopButton.textContent = "►";\n  } else {\n    stopButton.textContent = "||";\n  }\n  stopButton.classList.toggle("on");\n  if (intervalId) {\n    stopInterval();\n    intervalId = null;\n  } else {\n    startInterval();\n  }\n});\n\n/* siteGo관련 js 코드 - 클릭했을 때 그의 자식요소 display: none -> block시키기 */\nconst divElement = document.getElementsByClassName("siteGo")[0];\n\ndivElement.addEventListener("click", (e) => {\n  const depthElement = e.target.parentElement.querySelector(".depth2");\n  console.log(e.target);\n  depthElement.classList.toggle("on");\n});\n\nconst goElement = document.getElementsByClassName("go")[0];\ngoElement.addEventListener("click", () => alert("주요 사이트를 선택해주세요."));\n\n\n//# sourceURL=webpack://fedc4-8_css/./index.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss":
      /*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss ***!
  \*****************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/sejong_u_home_arrow.png */ "./images/sejong_u_home_arrow.png"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/h1_logo.gif */ "./images/h1_logo.gif"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";\n* {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n}\n\n.maxScreen {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.header__utils nav {\n  display: flex;\n  justify-content: flex-end;\n  font-size: 12px;\n}\n.header__utils nav div {\n  margin: 10px 0;\n}\n.header__utils nav div a {\n  color: #777;\n  line-height: 1.5;\n  padding: 0 25px;\n  font-weight: 500;\n  font-size: 13px;\n}\n.header__utils nav div a:first-child {\n  border-right: 1px solid #777;\n}\n.header__utils--school {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 18px 12px no-repeat #777;\n  vertical-align: middle;\n  overflow: hidden;\n  text-decoration: none;\n}\n.header__utils--school span {\n  padding: 11px 15px 13px 46px;\n  color: white;\n  line-height: 3;\n}\n.header__menu {\n  background-color: #a31432;\n}\n.header__menu nav {\n  position: relative;\n}\n.header__menu nav:hover .depth2 {\n  display: flex;\n}\n.header__menu nav ul {\n  width: 100%;\n  display: flex;\n  list-style: none;\n  justify-content: center;\n  color: white;\n  text-align: center;\n}\n.header__menu nav ul li {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header__menu--title {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center;\n  width: 240px;\n  height: 65px;\n  display: block;\n  background-color: white;\n}\n.header__menu--main {\n  padding: 0px 30px;\n  border-right: 1px solid #ba4f65;\n  border-bottom: 1px solid #ba4f65;\n  word-break: keep-all;\n  font-weight: 700;\n  flex: 1;\n}\n.header__menu--main:hover {\n  background-color: #630c1e;\n}\n.header__menu--main:hover .depth2 {\n  background-color: #f1e9d9;\n}\n.header__menu--main a {\n  color: white;\n}\n.header .depth2 {\n  display: none;\n  position: relative;\n  border-right: none;\n  border-left: 1px solid #dedede;\n  position: absolute; /* 부모 요소를 기준으로 위치를 설정 */\n  top: 100%; /* 부모 요소(.header__menu) 아래에 위치하도록 설정 */\n  flex-direction: column; /* 가로 메뉴를 세로로 배치 */\n  background-color: #fff;\n  z-index: 100;\n}\n.header .depth2 ul {\n  padding-top: 5px;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  justify-content: flex-start !important;\n}\n.header .depth2 ul li {\n  border-bottom: none;\n  padding: 10px 50px 10px 10px;\n  justify-content: flex-start;\n  font-size: 12px;\n  font-weight: 400;\n}\n.header .depth2 ul li a {\n  width: 76px;\n  color: #555;\n  text-align: left;\n}\n.header .depth2 ul li a:hover {\n  color: #a31432;\n  font-weight: 800;\n}\n.header .depth2__title {\n  padding-top: 5px;\n  height: 350px;\n  color: #555;\n  text-align: left;\n  align-items: flex-end;\n  display: flex;\n}\n.header .depth2__title span {\n  padding: 0 40px 100px 30px;\n  font-weight: 600;\n}\n\n.main {\n  position: relative;\n}\n.main__image {\n  position: relative;\n  max-width: 100%;\n  height: 885px;\n}\n.main__image--title {\n  position: absolute;\n  left: 50%;\n  top: 300px;\n  transform: translateX(-50%);\n}\n.main__image--picture {\n  display: flex;\n}\n.main__image--picture li {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n}\n.main__image--picture li:first-child img {\n  opacity: 1;\n}\n.main__image--picture li img {\n  height: 100%;\n  transform: translateX(-20%);\n  opacity: 0;\n  transition: opacity 2s ease;\n}\n.main__image--tab {\n  position: absolute;\n  top: 600px;\n  gap: 20px;\n  left: 50%;\n}\n.main__image--tab button {\n  width: 10px;\n  height: 10px;\n  border: none;\n  margin: 0 3px;\n  cursor: pointer;\n}\n.main__image--tab button:not(:last-child) {\n  border-radius: 50%;\n}\n.main__image--tab button:last-child {\n  background: none;\n  color: white;\n  font-weight: 800;\n}\n.main__image--tab .on {\n  background-color: orange;\n}\n.main__content {\n  margin-top: -150px;\n  background-color: #f0f0f0;\n  height: 380px;\n  display: flex;\n}\n.main__content--container {\n  display: flex;\n  height: 340px;\n  z-index: 20;\n}\n.main__content--container .board {\n  width: 635px;\n  height: 100%;\n}\n.main__content--container .board__tabBox {\n  height: 70px;\n}\n.main__content--container .board__tabBox ul {\n  display: flex;\n  list-style: none;\n  font-size: 18px;\n  font-weight: 700;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n}\n.main__content--container .board__tabBox ul li {\n  width: 30%;\n  height: 100%;\n  line-height: 70px;\n  padding: 0px 40px;\n  background-color: rgba(85, 85, 85, 0.7);\n  color: white;\n}\n.main__content--container .board__tabBox ul li:last-child {\n  font-size: 36px;\n  padding: 0;\n  width: 10%;\n}\n.main__content--container .board__tabBox ul li:hover {\n  cursor: pointer;\n}\n.main__content--container .board__tabBox ul li a {\n  display: block;\n  color: white;\n  width: 100%;\n  height: 100%;\n}\n.main__content--container .board__tabBox ul .on {\n  background-color: #fff;\n  color: black;\n  text-decoration: underline;\n}\n.main__content--container .board__tabContent {\n  height: 270px;\n}\n.main__content--container .board__tabContent div {\n  display: none;\n  height: 100%;\n}\n.main__content--container .board__tabContent div ul {\n  list-style: none;\n  background-color: #fff;\n  padding-left: 20px;\n  padding-top: 30px;\n  height: 100%;\n  box-sizing: border-box;\n}\n.main__content--container .board__tabContent div ul li {\n  position: relative;\n  padding-left: 20px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.main__content--container .board__tabContent div ul li::before {\n  content: "-";\n  position: absolute;\n  color: #a31432;\n  font-weight: bold;\n  left: 0;\n}\n.main__content--container .board__tabContent div ul li .type0 {\n  background-color: #818181;\n  padding: 5px 5px;\n  color: white;\n  font-size: 12px;\n  width: 8%;\n  text-align: center;\n}\n.main__content--container .board__tabContent div ul li .type1 {\n  background-color: #3772aa;\n  padding: 5px 5px;\n  color: white;\n  font-size: 12px;\n  width: 8%;\n  text-align: center;\n}\n.main__content--container .board__tabContent div ul li .type2 {\n  background-color: #0000ff;\n  padding: 5px 5px;\n  color: white;\n  font-size: 12px;\n  width: 8%;\n  text-align: center;\n}\n.main__content--container .board__tabContent div ul li .type3 {\n  background-color: #ef972a;\n  padding: 5px 5px;\n  color: white;\n  font-size: 12px;\n  width: 8%;\n  text-align: center;\n}\n.main__content--container .board__tabContent div ul li .type4 {\n  background-color: #52c050;\n  padding: 5px 5px;\n  color: white;\n  font-size: 12px;\n  width: 8%;\n  text-align: center;\n}\n.main__content--container .board__tabContent div ul li a {\n  padding-left: 5px;\n  color: black;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n  width: 62%;\n}\n.main__content--container .board__tabContent div ul li .board__tabContent_date {\n  color: gray;\n  padding-left: 30px;\n}\n.main__content--container .board__tabContent .on {\n  display: block;\n}\n.main__content--container .menu {\n  width: 565px;\n}\n.main__content--container .menu ul {\n  list-style: none;\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(3, 1fr);\n}\n.main__content--container .menu ul li {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  word-break: keep-all;\n  text-align: center;\n  gap: 10px;\n  color: white;\n}\n.main__content--container .menu ul li span {\n  font-size: 12px;\n}\n.main__content--container .menu ul li a {\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  padding: 5px 20px;\n  color: white;\n}\n.main__content--container .menu__first {\n  background-color: #a31432;\n  color: #f7bac7;\n}\n.main__content--container .menu__first:not(:last-child) {\n  border-right: 1px solid #ba4f65;\n}\n.main__content--container .menu__second {\n  background-color: rgb(81, 98, 111);\n  color: #d8ebf9;\n}\n.main__content--container .menu__second:not(:last-child) {\n  border-right: 1px solid #687c8b;\n}\n.main .popup {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.3);\n  top: 30px;\n  right: 120px;\n  color: white;\n  padding: 20px;\n  width: 480px;\n}\n.main .popup div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main .popup div button {\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-size: 36px;\n  font-weight: 200;\n  cursor: pointer;\n}\n.main .popup ul {\n  list-style: none;\n  height: 200px;\n  overflow: hidden;\n  transition: height 1s;\n}\n.main .popup ul li {\n  margin: 10px 0;\n  transition: height 1s;\n}\n.main .popup ul li a {\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n}\n.main .popup ul li a span {\n  padding: 10px;\n}\n.main .popup ul li a span:first-child {\n  width: 426px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: inline-block;\n  font-weight: 600;\n}\n.main .popup ul li a span:last-child {\n  width: 15px;\n  text-align: center;\n  background-color: #a31432;\n}\n.main .popup ul li:not(:last-child) span:first-child {\n  background-color: #a7874f;\n}\n.main .popup ul li:last-child span:first-child {\n  background-color: white;\n  color: black;\n}\n.main .popup .on {\n  height: 0;\n  overflow: hidden;\n}\n\n.footer__menu {\n  background-color: #f0f0f0;\n  border-top: 1px solid #d6d6d6;\n  border-bottom: 1px solid #d6d6d6;\n}\n.footer__menu nav > ul {\n  list-style: none;\n  display: flex;\n  position: relative;\n}\n.footer__menu nav > ul > li > a {\n  color: #222;\n}\n.footer__menu nav > ul > li:not(:last-child) {\n  border-left: 1px solid #d6d6d6;\n  padding: 15px 30px;\n  font-size: 14px;\n}\n.footer__menu nav > ul > li:last-child {\n  position: absolute;\n  right: 0;\n  color: white;\n  display: flex;\n}\n.footer__menu nav > ul > li:last-child > div:not(:last-child) {\n  padding: 10px 20px;\n}\n.footer__menu nav > ul > li:last-child > div:first-child {\n  background-color: #3a3a3a;\n  font-size: 12px;\n  line-height: 2;\n  width: 135px;\n}\n.footer__menu nav > ul > li:last-child > div:first-child:hover {\n  cursor: pointer;\n}\n.footer__menu nav > ul > li:last-child > div:nth-child(2) {\n  background-color: black;\n  font-size: 18px;\n  line-height: 1.5;\n  width: 20px;\n  text-align: center;\n}\n.footer__menu nav > ul > li:last-child > div:nth-child(2):hover {\n  cursor: pointer;\n}\n.footer__menu nav > ul > li:last-child .depth2 {\n  display: none;\n}\n.footer__menu nav > ul > li:last-child .depth2 ul {\n  list-style: none;\n  height: 250px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 100;\n  transform: translateY(-102%);\n}\n.footer__menu nav > ul > li:last-child .depth2 ul li {\n  padding: 5px 20px;\n  background-color: #a31432;\n  border: 1px solid white;\n}\n.footer__menu nav > ul > li:last-child .depth2 ul li:last-child {\n  border-bottom: none;\n}\n.footer__menu nav > ul > li:last-child .depth2 ul li a {\n  color: white;\n}\n.footer__menu nav > ul > li:last-child .on {\n  display: block;\n}\n.footer__address {\n  padding-top: 20px;\n}\n.footer__address--container {\n  display: flex;\n  justify-content: space-between;\n}\n.footer__address--content {\n  display: flex;\n}\n.footer__address--content img {\n  height: 32px;\n}\n.footer__address--content div {\n  font-size: 13px;\n  padding-left: 10px;\n}\n.footer__address--promotion img {\n  width: 237px;\n}`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fedc4-8_css/./scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://fedc4-8_css/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^[\'"].*[\'"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/["\'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return "\\"".concat(url.replace(/"/g, \'\\\\"\').replace(/\\n/g, "\\\\n"), "\\"");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://fedc4-8_css/./node_modules/css-loader/dist/runtime/getUrl.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://fedc4-8_css/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
        );

        /***/
      },

    /***/ "./scss/main.scss":
      /*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://fedc4-8_css/./scss/main.scss?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://fedc4-8_css/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://fedc4-8_css/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://fedc4-8_css/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://fedc4-8_css/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://fedc4-8_css/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://fedc4-8_css/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /***/ "./images/h1_logo.gif":
      /*!****************************!*\
  !*** ./images/h1_logo.gif ***!
  \****************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "53145f31ee69f9f4bd3f.gif";\n\n//# sourceURL=webpack://fedc4-8_css/./images/h1_logo.gif?'
        );

        /***/
      },

    /***/ "./images/sejong_u_home_arrow.png":
      /*!****************************************!*\
  !*** ./images/sejong_u_home_arrow.png ***!
  \****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "c833a25c531ae8b80efa.png";\n\n//# sourceURL=webpack://fedc4-8_css/./images/sejong_u_home_arrow.png?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./index.js");
  /******/
  /******/
})();
