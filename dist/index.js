/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(0);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/scss/style.scss
var style = __webpack_require__(0);

// CONCATENATED MODULE: ./src/modules/rexTextField.js
function rexTextField() {
  var e = function (a) {
      var c = a.target.parentNode,
        b = a.target.parentNode.parentNode,
        d = a.target.parentNode.parentNode.previousElementSibling;
      a =
        a.target.classList.contains("error") ||
        a.target.classList.contains("valid");
      b.disabled ||
        a ||
        (d.classList.add("active"),
        c.classList.add("active"),
        b.classList.add("active"));
    },
    f = function (a) {
      var c = a.target.parentNode,
        b = a.target.parentNode.parentNode,
        d = a.target.parentNode.parentNode.previousElementSibling;
      a =
        a.target.classList.contains("error") ||
        a.target.classList.contains("valid");
      b.disabled ||
        a ||
        (d.classList.remove("active"),
        c.classList.remove("active"),
        b.classList.remove("active"));
    };
  document
    .querySelectorAll("div[class^='rex-text-field-label']")
    .forEach(function (a) {
      a = a.querySelector(".rex-text-field-native");
      a.onfocus = e;
      a.onblur = f;
    });
}

// CONCATENATED MODULE: ./src/modules/rexTextArea.js
function rexTextArea() {
  /* On Focus events */
  var handleOnFocus = function handleOnFocus(e) {
    var textareaNativeEl = e.target;
    var outsideBorderEl = e.target.parentNode;
    var outsideLabelEl = e.target.parentNode.previousElementSibling;
    textareaNativeEl.classList.add("active");
    outsideBorderEl.classList.add("active");
    outsideLabelEl.classList.add("active");
  };

  /* On Blur events */
  var handleOnFocusOut = function handleOnFocusOut(e) {
    var textareaNativeEl = e.target;
    var outsideBorderEl = e.target.parentNode;
    var outsideLabelEl = e.target.parentNode.previousElementSibling;
    textareaNativeEl.classList.remove("active");
    outsideBorderEl.classList.remove("active");
    outsideLabelEl.classList.remove("active");
  };
  /* Asign events to all similar components */
  var rexTextAreaList = document.querySelectorAll(
    "div[class^='rex-textarea-label']"
  );
  rexTextAreaList.forEach(function (rexTextArea) {
    var rexTextAreaNative = rexTextArea.querySelector(".rex-textarea-ui");
    rexTextAreaNative.onfocus = handleOnFocus;
    rexTextAreaNative.onblur = handleOnFocusOut;
  });
}
// CONCATENATED MODULE: ./src/modules/rexSelect.js
function rexSelect() {
  /* On Focus events */
  var handleOnFocus = function handleOnFocus(e) {
    var selectNativeEl = e.target;
    var outsideBorderEl = e.target.parentNode;
    var outsideLabelEl = e.target.parentNode.previousElementSibling;
    selectNativeEl.classList.add("active");
    outsideBorderEl.classList.add("active");
    outsideLabelEl.classList.add("active");
  };

  /* On Blur events */
  var handleOnFocusOut = function handleOnFocusOut(e) {
    var selectNativeEl = e.target;
    var outsideBorderEl = e.target.parentNode;
    var outsideLabelEl = e.target.parentNode.previousElementSibling;
    selectNativeEl.classList.remove("active");
    outsideBorderEl.classList.remove("active");
    outsideLabelEl.classList.remove("active");
  };
  /* Asign events to all similar components */
  var rexSelectList = document.querySelectorAll(
    "div[class^='rex-select-label']"
  );
  rexSelectList.forEach(function (rexSelect) {
    var rexSelectNative = rexSelect.querySelector(".rex-select-native");

    rexSelectNative.onfocus = handleOnFocus;
    rexSelectNative.onblur = handleOnFocusOut;
  });
}
// CONCATENATED MODULE: ./src/modules/rexStepper.js
function rexStepper() {
   /* Initial setting */
  var maxValue = 100;
  var minValue = 0;
  var initialCounter = 0;

  /* Plus Button element */
  var rexStepperPlusButtonList = document.querySelectorAll(
    "button[class^='rex-icon-button plus']"
  );

  /* Minus Button element */
  var rexStepperMinusButtonList = document.querySelectorAll(
    "button[class^='rex-icon-button minus']"
  );

  /* Increase */
  var onIncrease = function onIncrease(e) {
    var parentNode = e.target.parentNode;
    var counterNode = parentNode.parentNode.querySelector(".rex-stepper-counter");
    var counter = initialCounter;
    counter = counterNode.value;
    if (counter < maxValue) {
      counter++;
      counterNode.value = counter;
    }
  };

  /* Decrease */
  var onDecrease = function onDecrease(e) {
    var parentNode = e.target.parentNode;
    var counterNode = parentNode.parentNode.querySelector(
      ".rex-stepper-counter"
    );
    var counter = initialCounter;
    counter = counterNode.value;
    if (counter > minValue) {
      counter--;
      counterNode.value = counter;
    }
  };


  rexStepperPlusButtonList.forEach(function (rexStepperPlusButton) {
    rexStepperPlusButton.onclick = onIncrease;
  });

  rexStepperMinusButtonList.forEach(function (rexStepperMinusButton) {
    rexStepperMinusButton.onclick = onDecrease;
  });
}

// CONCATENATED MODULE: ./src/modules/rexSwitch.js
function rexSwitch() {
  /* On Focus events */
  var handleOnChange = function handleOnChange(e) {
    var switchNativeParentEl = e.target.parentNode.parentNode;
    if (e.target.checked) {
      switchNativeParentEl.classList.add("checked");
    } else {
      switchNativeParentEl.classList.remove("checked");
    }
  };
  /* Asign events to all similar components */
  var rexSwitchList = document.querySelectorAll(
    "div[class^='rex-switch']"
  );
  rexSwitchList.forEach(function (rexSwitch) {
    var rexSwitchNative = rexSwitch.querySelector(".rex-switch input");

    rexSwitchNative.onchange = handleOnChange;
  });
}
// CONCATENATED MODULE: ./src/index.js







/* On Load set component actions */
document.addEventListener("DOMContentLoaded", function (event) {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
  rexTextField();
  rexTextArea();
  rexSelect();
  rexStepper();
  rexSwitch();
});

/***/ })
/******/ ]);