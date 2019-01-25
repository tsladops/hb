/* prebid.js v1.39.0
Updated : 2019-01-25 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["pbjsChunk"];
/******/ 	window["pbjsChunk"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		197: 0
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 478);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internal", (function() { return internal; }));
/* harmony export (immutable) */ __webpack_exports__["replaceTokenInString"] = replaceTokenInString;
/* harmony export (immutable) */ __webpack_exports__["getUniqueIdentifierStr"] = getUniqueIdentifierStr;
/* harmony export (immutable) */ __webpack_exports__["generateUUID"] = generateUUID;
/* harmony export (immutable) */ __webpack_exports__["getBidIdParameter"] = getBidIdParameter;
/* harmony export (immutable) */ __webpack_exports__["tryAppendQueryString"] = tryAppendQueryString;
/* harmony export (immutable) */ __webpack_exports__["parseQueryStringParameters"] = parseQueryStringParameters;
/* harmony export (immutable) */ __webpack_exports__["transformAdServerTargetingObj"] = transformAdServerTargetingObj;
/* harmony export (immutable) */ __webpack_exports__["getAdUnitSizes"] = getAdUnitSizes;
/* harmony export (immutable) */ __webpack_exports__["parseSizesInput"] = parseSizesInput;
/* harmony export (immutable) */ __webpack_exports__["parseGPTSingleSizeArray"] = parseGPTSingleSizeArray;
/* harmony export (immutable) */ __webpack_exports__["getTopWindowLocation"] = getTopWindowLocation;
/* harmony export (immutable) */ __webpack_exports__["getTopFrameReferrer"] = getTopFrameReferrer;
/* harmony export (immutable) */ __webpack_exports__["getAncestorOrigins"] = getAncestorOrigins;
/* harmony export (immutable) */ __webpack_exports__["getWindowTop"] = getWindowTop;
/* harmony export (immutable) */ __webpack_exports__["getWindowSelf"] = getWindowSelf;
/* harmony export (immutable) */ __webpack_exports__["getWindowLocation"] = getWindowLocation;
/* harmony export (immutable) */ __webpack_exports__["getTopWindowUrl"] = getTopWindowUrl;
/* harmony export (immutable) */ __webpack_exports__["getTopWindowReferrer"] = getTopWindowReferrer;
/* harmony export (immutable) */ __webpack_exports__["logMessage"] = logMessage;
/* harmony export (immutable) */ __webpack_exports__["logInfo"] = logInfo;
/* harmony export (immutable) */ __webpack_exports__["logWarn"] = logWarn;
/* harmony export (immutable) */ __webpack_exports__["logError"] = logError;
/* harmony export (immutable) */ __webpack_exports__["hasConsoleLogger"] = hasConsoleLogger;
/* harmony export (immutable) */ __webpack_exports__["debugTurnedOn"] = debugTurnedOn;
/* harmony export (immutable) */ __webpack_exports__["createInvisibleIframe"] = createInvisibleIframe;
/* harmony export (immutable) */ __webpack_exports__["getParameterByName"] = getParameterByName;
/* harmony export (immutable) */ __webpack_exports__["hasValidBidRequest"] = hasValidBidRequest;
/* harmony export (immutable) */ __webpack_exports__["addEventHandler"] = addEventHandler;
/* harmony export (immutable) */ __webpack_exports__["isA"] = isA;
/* harmony export (immutable) */ __webpack_exports__["isFn"] = isFn;
/* harmony export (immutable) */ __webpack_exports__["isStr"] = isStr;
/* harmony export (immutable) */ __webpack_exports__["isArray"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["isNumber"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["isPlainObject"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["isBoolean"] = isBoolean;
/* harmony export (immutable) */ __webpack_exports__["isEmpty"] = isEmpty;
/* harmony export (immutable) */ __webpack_exports__["isEmptyStr"] = isEmptyStr;
/* harmony export (immutable) */ __webpack_exports__["_each"] = _each;
/* harmony export (immutable) */ __webpack_exports__["contains"] = contains;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", (function() { return indexOf; }));
/* harmony export (immutable) */ __webpack_exports__["_map"] = _map;
/* harmony export (immutable) */ __webpack_exports__["insertElement"] = insertElement;
/* harmony export (immutable) */ __webpack_exports__["triggerPixel"] = triggerPixel;
/* harmony export (immutable) */ __webpack_exports__["callBurl"] = callBurl;
/* harmony export (immutable) */ __webpack_exports__["insertHtmlIntoIframe"] = insertHtmlIntoIframe;
/* harmony export (immutable) */ __webpack_exports__["insertUserSyncIframe"] = insertUserSyncIframe;
/* harmony export (immutable) */ __webpack_exports__["createTrackPixelHtml"] = createTrackPixelHtml;
/* harmony export (immutable) */ __webpack_exports__["createTrackPixelIframeHtml"] = createTrackPixelIframeHtml;
/* harmony export (immutable) */ __webpack_exports__["getIframeDocument"] = getIframeDocument;
/* harmony export (immutable) */ __webpack_exports__["getValueString"] = getValueString;
/* harmony export (immutable) */ __webpack_exports__["uniques"] = uniques;
/* harmony export (immutable) */ __webpack_exports__["flatten"] = flatten;
/* harmony export (immutable) */ __webpack_exports__["getBidRequest"] = getBidRequest;
/* harmony export (immutable) */ __webpack_exports__["getKeys"] = getKeys;
/* harmony export (immutable) */ __webpack_exports__["getValue"] = getValue;
/* harmony export (immutable) */ __webpack_exports__["getBidderCodes"] = getBidderCodes;
/* harmony export (immutable) */ __webpack_exports__["isGptPubadsDefined"] = isGptPubadsDefined;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighestCpm", (function() { return getHighestCpm; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOldestHighestCpmBid", (function() { return getOldestHighestCpmBid; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestHighestCpmBid", (function() { return getLatestHighestCpmBid; }));
/* harmony export (immutable) */ __webpack_exports__["shuffle"] = shuffle;
/* harmony export (immutable) */ __webpack_exports__["adUnitsFilter"] = adUnitsFilter;
/* harmony export (immutable) */ __webpack_exports__["isSrcdocSupported"] = isSrcdocSupported;
/* harmony export (immutable) */ __webpack_exports__["deepClone"] = deepClone;
/* harmony export (immutable) */ __webpack_exports__["inIframe"] = inIframe;
/* harmony export (immutable) */ __webpack_exports__["isSafariBrowser"] = isSafariBrowser;
/* harmony export (immutable) */ __webpack_exports__["replaceAuctionPrice"] = replaceAuctionPrice;
/* harmony export (immutable) */ __webpack_exports__["timestamp"] = timestamp;
/* harmony export (immutable) */ __webpack_exports__["checkCookieSupport"] = checkCookieSupport;
/* harmony export (immutable) */ __webpack_exports__["cookiesAreEnabled"] = cookiesAreEnabled;
/* harmony export (immutable) */ __webpack_exports__["getCookie"] = getCookie;
/* harmony export (immutable) */ __webpack_exports__["delayExecution"] = delayExecution;
/* harmony export (immutable) */ __webpack_exports__["groupBy"] = groupBy;
/* harmony export (immutable) */ __webpack_exports__["deepAccess"] = deepAccess;
/* harmony export (immutable) */ __webpack_exports__["createContentToExecuteExtScriptInFriendlyFrame"] = createContentToExecuteExtScriptInFriendlyFrame;
/* harmony export (immutable) */ __webpack_exports__["getDefinedParams"] = getDefinedParams;
/* harmony export (immutable) */ __webpack_exports__["isValidMediaTypes"] = isValidMediaTypes;
/* harmony export (immutable) */ __webpack_exports__["getBidderRequest"] = getBidderRequest;
/* harmony export (immutable) */ __webpack_exports__["getUserConfiguredParams"] = getUserConfiguredParams;
/* harmony export (immutable) */ __webpack_exports__["getOrigin"] = getOrigin;
/* harmony export (immutable) */ __webpack_exports__["getDNT"] = getDNT;
/* harmony export (immutable) */ __webpack_exports__["isAdUnitCodeMatchingSlot"] = isAdUnitCodeMatchingSlot;
/* harmony export (immutable) */ __webpack_exports__["isSlotMatchingAdUnitCode"] = isSlotMatchingAdUnitCode;
/* harmony export (immutable) */ __webpack_exports__["unsupportedBidderMessage"] = unsupportedBidderMessage;
/* harmony export (immutable) */ __webpack_exports__["deletePropertyFromObject"] = deletePropertyFromObject;
/* harmony export (immutable) */ __webpack_exports__["removeRequestId"] = removeRequestId;
/* harmony export (immutable) */ __webpack_exports__["isInteger"] = isInteger;
/* harmony export (immutable) */ __webpack_exports__["convertCamelToUnderscore"] = convertCamelToUnderscore;
/* harmony export (immutable) */ __webpack_exports__["transformBidderParamKeywords"] = transformBidderParamKeywords;
/* harmony export (immutable) */ __webpack_exports__["convertTypes"] = convertTypes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_just_clone__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_just_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_just_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url__ = __webpack_require__(11);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







var CONSTANTS = __webpack_require__(4);

var _loggingChecked = false;
var tArr = 'Array';
var tStr = 'String';
var tFn = 'Function';
var tNumb = 'Number';
var tObject = 'Object';
var tBoolean = 'Boolean';
var toString = Object.prototype.toString;
var consoleExists = Boolean(window.console);
var consoleLogExists = Boolean(consoleExists && window.console.log);
var consoleInfoExists = Boolean(consoleExists && window.console.info);
var consoleWarnExists = Boolean(consoleExists && window.console.warn);
var consoleErrorExists = Boolean(consoleExists && window.console.error); // this allows stubbing of utility functions that are used internally by other utility functions

var internal = {
  checkCookieSupport: checkCookieSupport,
  createTrackPixelIframeHtml: createTrackPixelIframeHtml,
  getWindowSelf: getWindowSelf,
  getWindowTop: getWindowTop,
  getAncestorOrigins: getAncestorOrigins,
  getTopFrameReferrer: getTopFrameReferrer,
  getWindowLocation: getWindowLocation,
  getTopWindowLocation: getTopWindowLocation,
  insertUserSyncIframe: insertUserSyncIframe,
  insertElement: insertElement,
  isFn: isFn,
  triggerPixel: triggerPixel,
  logError: logError,
  logWarn: logWarn,
  logMessage: logMessage,
  logInfo: logInfo
};
/*
 *   Substitutes into a string from a given map using the token
 *   Usage
 *   var str = 'text %%REPLACE%% this text with %%SOMETHING%%';
 *   var map = {};
 *   map['replace'] = 'it was subbed';
 *   map['something'] = 'something else';
 *   console.log(replaceTokenInString(str, map, '%%')); => "text it was subbed this text with something else"
 */

function replaceTokenInString(str, map, token) {
  _each(map, (function (value, key) {
    value = value === undefined ? '' : value;
    var keyString = token + key.toUpperCase() + token;
    var re = new RegExp(keyString, 'g');
    str = str.replace(re, value);
  }));

  return str;
}
/* utility method to get incremental integer starting from 1 */

var getIncrementalInteger = (function () {
  var count = 0;
  return function () {
    count++;
    return count;
  };
})(); // generate a random string (to be used as a dynamic JSONP callback)


function getUniqueIdentifierStr() {
  return getIncrementalInteger() + Math.random().toString(16).substr(2);
}
/**
 * Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
 * where each x is replaced with a random hexadecimal digit from 0 to f,
 * and y is replaced with a random hexadecimal digit from 8 to b.
 * https://gist.github.com/jed/982883 via node-uuid
 */

function generateUUID(placeholder) {
  return placeholder ? (placeholder ^ _getRandomData() >> placeholder / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUUID);
}
/**
 * Returns random data using the Crypto API if available and Math.random if not
 * Method is from https://gist.github.com/jed/982883 like generateUUID, direct link https://gist.github.com/jed/982883#gistcomment-45104
 */

function _getRandomData() {
  if (window && window.crypto && window.crypto.getRandomValues) {
    return crypto.getRandomValues(new Uint8Array(1))[0] % 16;
  } else {
    return Math.random() * 16;
  }
}

function getBidIdParameter(key, paramsObj) {
  if (paramsObj && paramsObj[key]) {
    return paramsObj[key];
  }

  return '';
}
function tryAppendQueryString(existingUrl, key, value) {
  if (value) {
    return existingUrl += key + '=' + encodeURIComponent(value) + '&';
  }

  return existingUrl;
} // parse a query string object passed in bid params
// bid params should be an object such as {key: "value", key1 : "value1"}

function parseQueryStringParameters(queryObj) {
  var result = '';

  for (var k in queryObj) {
    if (queryObj.hasOwnProperty(k)) {
      result += k + '=' + encodeURIComponent(queryObj[k]) + '&';
    }
  }

  return result;
} // transform an AdServer targeting bids into a query string to send to the adserver

function transformAdServerTargetingObj(targeting) {
  // we expect to receive targeting for a single slot at a time
  if (targeting && Object.getOwnPropertyNames(targeting).length > 0) {
    return getKeys(targeting).map((function (key) {
      return "".concat(key, "=").concat(encodeURIComponent(getValue(targeting, key)));
    })).join('&');
  } else {
    return '';
  }
}
/**
 * Read an adUnit object and return the sizes used in an [[728, 90]] format (even if they had [728, 90] defined)
 * Preference is given to the `adUnit.mediaTypes.banner.sizes` object over the `adUnit.sizes`
 * @param {object} adUnit one adUnit object from the normal list of adUnits
 * @returns {Array.<number[]>} array of arrays containing numeric sizes
 */

function getAdUnitSizes(adUnit) {
  if (!adUnit) {
    return;
  }

  var sizes = [];

  if (adUnit.mediaTypes && adUnit.mediaTypes.banner && Array.isArray(adUnit.mediaTypes.banner.sizes)) {
    var bannerSizes = adUnit.mediaTypes.banner.sizes;

    if (Array.isArray(bannerSizes[0])) {
      sizes = bannerSizes;
    } else {
      sizes.push(bannerSizes);
    }
  } else if (Array.isArray(adUnit.sizes)) {
    if (Array.isArray(adUnit.sizes[0])) {
      sizes = adUnit.sizes;
    } else {
      sizes.push(adUnit.sizes);
    }
  }

  return sizes;
}
/**
 * Parse a GPT-Style general size Array like `[[300, 250]]` or `"300x250,970x90"` into an array of sizes `["300x250"]` or '['300x250', '970x90']'
 * @param  {(Array.<number[]>|Array.<number>)} sizeObj Input array or double array [300,250] or [[300,250], [728,90]]
 * @return {Array.<string>}  Array of strings like `["300x250"]` or `["300x250", "728x90"]`
 */

function parseSizesInput(sizeObj) {
  var parsedSizes = []; // if a string for now we can assume it is a single size, like "300x250"

  if (typeof sizeObj === 'string') {
    // multiple sizes will be comma-separated
    var sizes = sizeObj.split(','); // regular expression to match strigns like 300x250
    // start of line, at least 1 number, an "x" , then at least 1 number, and the then end of the line

    var sizeRegex = /^(\d)+x(\d)+$/i;

    if (sizes) {
      for (var curSizePos in sizes) {
        if (hasOwn(sizes, curSizePos) && sizes[curSizePos].match(sizeRegex)) {
          parsedSizes.push(sizes[curSizePos]);
        }
      }
    }
  } else if (_typeof(sizeObj) === 'object') {
    var sizeArrayLength = sizeObj.length; // don't process empty array

    if (sizeArrayLength > 0) {
      // if we are a 2 item array of 2 numbers, we must be a SingleSize array
      if (sizeArrayLength === 2 && typeof sizeObj[0] === 'number' && typeof sizeObj[1] === 'number') {
        parsedSizes.push(parseGPTSingleSizeArray(sizeObj));
      } else {
        // otherwise, we must be a MultiSize array
        for (var i = 0; i < sizeArrayLength; i++) {
          parsedSizes.push(parseGPTSingleSizeArray(sizeObj[i]));
        }
      }
    }
  }

  return parsedSizes;
} // parse a GPT style sigle size array, (i.e [300,250])
// into an AppNexus style string, (i.e. 300x250)

function parseGPTSingleSizeArray(singleSize) {
  // if we aren't exactly 2 items in this array, it is invalid
  if (isArray(singleSize) && singleSize.length === 2 && !isNaN(singleSize[0]) && !isNaN(singleSize[1])) {
    return singleSize[0] + 'x' + singleSize[1];
  }
}
/**
 * @deprecated This function will be removed soon. Use http://prebid.org/dev-docs/bidder-adaptor.html#referrers
 */

function getTopWindowLocation() {
  if (inIframe()) {
    var loc;

    try {
      loc = internal.getAncestorOrigins() || internal.getTopFrameReferrer();
    } catch (e) {
      logInfo('could not obtain top window location', e);
    }

    if (loc) return Object(__WEBPACK_IMPORTED_MODULE_4__url__["c" /* parse */])(loc, {
      'decodeSearchAsString': true
    });
  }

  return internal.getWindowLocation();
}
/**
 * @deprecated This function will be removed soon. Use http://prebid.org/dev-docs/bidder-adaptor.html#referrers
 */

function getTopFrameReferrer() {
  try {
    // force an exception in x-domain environments. #1509
    window.top.location.toString();
    var referrerLoc = '';
    var currentWindow;

    do {
      currentWindow = currentWindow ? currentWindow.parent : window;

      if (currentWindow.document && currentWindow.document.referrer) {
        referrerLoc = currentWindow.document.referrer;
      }
    } while (currentWindow !== window.top);

    return referrerLoc;
  } catch (e) {
    return window.document.referrer;
  }
}
/**
 * @deprecated This function will be removed soon. Use http://prebid.org/dev-docs/bidder-adaptor.html#referrers
 */

function getAncestorOrigins() {
  if (window.document.location && window.document.location.ancestorOrigins && window.document.location.ancestorOrigins.length >= 1) {
    return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1];
  }
}
function getWindowTop() {
  return window.top;
}
function getWindowSelf() {
  return window.self;
}
function getWindowLocation() {
  return window.location;
}
/**
 * @deprecated This function will be removed soon. Use http://prebid.org/dev-docs/bidder-adaptor.html#referrers
 */

function getTopWindowUrl() {
  var href;

  try {
    href = internal.getTopWindowLocation().href;
  } catch (e) {
    href = '';
  }

  return href;
}
/**
 * @deprecated This function will be removed soon. Use http://prebid.org/dev-docs/bidder-adaptor.html#referrers
 */

function getTopWindowReferrer() {
  try {
    return window.top.document.referrer;
  } catch (e) {
    return document.referrer;
  }
}
/**
 * Wrappers to console.(log | info | warn | error). Takes N arguments, the same as the native methods
 */

function logMessage() {
  if (debugTurnedOn() && consoleLogExists) {
    console.log.apply(console, decorateLog(arguments, 'MESSAGE:'));
  }
}
function logInfo() {
  if (debugTurnedOn() && consoleInfoExists) {
    console.info.apply(console, decorateLog(arguments, 'INFO:'));
  }
}
function logWarn() {
  if (debugTurnedOn() && consoleWarnExists) {
    console.warn.apply(console, decorateLog(arguments, 'WARNING:'));
  }
}
function logError() {
  if (debugTurnedOn() && consoleErrorExists) {
    console.error.apply(console, decorateLog(arguments, 'ERROR:'));
  }
}

function decorateLog(args, prefix) {
  args = [].slice.call(args);
  prefix && args.unshift(prefix);
  args.unshift('display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;');
  args.unshift('%cPrebid');
  return args;
}

function hasConsoleLogger() {
  return consoleLogExists;
}
function debugTurnedOn() {
  if (__WEBPACK_IMPORTED_MODULE_0__config__["config"].getConfig('debug') === false && _loggingChecked === false) {
    var debug = getParameterByName(CONSTANTS.DEBUG_MODE).toUpperCase() === 'TRUE';
    __WEBPACK_IMPORTED_MODULE_0__config__["config"].setConfig({
      debug: debug
    });
    _loggingChecked = true;
  }

  return !!__WEBPACK_IMPORTED_MODULE_0__config__["config"].getConfig('debug');
}
function createInvisibleIframe() {
  var f = document.createElement('iframe');
  f.id = getUniqueIdentifierStr();
  f.height = 0;
  f.width = 0;
  f.border = '0px';
  f.hspace = '0';
  f.vspace = '0';
  f.marginWidth = '0';
  f.marginHeight = '0';
  f.style.border = '0';
  f.scrolling = 'no';
  f.frameBorder = '0';
  f.src = 'about:blank';
  f.style.display = 'none';
  return f;
}
/*
 *   Check if a given parameter name exists in query string
 *   and if it does return the value
 */

function getParameterByName(name) {
  var regexS = '[\\?&]' + name + '=([^&#]*)';
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);

  if (results === null) {
    return '';
  }

  return decodeURIComponent(results[1].replace(/\+/g, ' '));
}
/**
 * This function validates paramaters.
 * @param  {Object} paramObj          [description]
 * @param  {string[]} requiredParamsArr [description]
 * @return {boolean}                   Bool if paramaters are valid
 */

function hasValidBidRequest(paramObj, requiredParamsArr, adapter) {
  var found = false;

  function findParam(value, key) {
    if (key === requiredParamsArr[i]) {
      found = true;
    }
  }

  for (var i = 0; i < requiredParamsArr.length; i++) {
    found = false;

    _each(paramObj, findParam);

    if (!found) {
      logError('Params are missing for bid request. One of these required paramaters are missing: ' + requiredParamsArr, adapter);
      return false;
    }
  }

  return true;
} // Handle addEventListener gracefully in older browsers

function addEventHandler(element, event, func) {
  if (element.addEventListener) {
    element.addEventListener(event, func, true);
  } else if (element.attachEvent) {
    element.attachEvent('on' + event, func);
  }
}
/**
 * Return if the object is of the
 * given type.
 * @param {*} object to test
 * @param {String} _t type string (e.g., Array)
 * @return {Boolean} if object is of type _t
 */

function isA(object, _t) {
  return toString.call(object) === '[object ' + _t + ']';
}
function isFn(object) {
  return isA(object, tFn);
}
function isStr(object) {
  return isA(object, tStr);
}
function isArray(object) {
  return isA(object, tArr);
}
function isNumber(object) {
  return isA(object, tNumb);
}
function isPlainObject(object) {
  return isA(object, tObject);
}
function isBoolean(object) {
  return isA(object, tBoolean);
}
/**
 * Return if the object is "empty";
 * this includes falsey, no keys, or no items at indices
 * @param {*} object object to test
 * @return {Boolean} if object is empty
 */

function isEmpty(object) {
  if (!object) return true;

  if (isArray(object) || isStr(object)) {
    return !(object.length > 0);
  }

  for (var k in object) {
    if (hasOwnProperty.call(object, k)) return false;
  }

  return true;
}
/**
 * Return if string is empty, null, or undefined
 * @param str string to test
 * @returns {boolean} if string is empty
 */

function isEmptyStr(str) {
  return isStr(str) && (!str || str.length === 0);
}
/**
 * Iterate object with the function
 * falls back to es5 `forEach`
 * @param {Array|Object} object
 * @param {Function(value, key, object)} fn
 */

function _each(object, fn) {
  if (isEmpty(object)) return;
  if (isFn(object.forEach)) return object.forEach(fn, this);
  var k = 0;
  var l = object.length;

  if (l > 0) {
    for (; k < l; k++) {
      fn(object[k], k, object);
    }
  } else {
    for (k in object) {
      if (hasOwnProperty.call(object, k)) fn.call(this, object[k], k);
    }
  }
}
function contains(a, obj) {
  if (isEmpty(a)) {
    return false;
  }

  if (isFn(a.indexOf)) {
    return a.indexOf(obj) !== -1;
  }

  var i = a.length;

  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }

  return false;
}
var indexOf = (function () {
  if (Array.prototype.indexOf) {
    return Array.prototype.indexOf;
  } // ie8 no longer supported
  // return polyfills.indexOf;

})();
/**
 * Map an array or object into another array
 * given a function
 * @param {Array|Object} object
 * @param {Function(value, key, object)} callback
 * @return {Array}
 */

function _map(object, callback) {
  if (isEmpty(object)) return [];
  if (isFn(object.map)) return object.map(callback);
  var output = [];

  _each(object, (function (value, key) {
    output.push(callback(value, key, object));
  }));

  return output;
}

var hasOwn = function hasOwn(objectToCheck, propertyToCheckFor) {
  if (objectToCheck.hasOwnProperty) {
    return objectToCheck.hasOwnProperty(propertyToCheckFor);
  } else {
    return typeof objectToCheck[propertyToCheckFor] !== 'undefined' && objectToCheck.constructor.prototype[propertyToCheckFor] !== objectToCheck[propertyToCheckFor];
  }
};
/*
* Inserts an element(elm) as targets child, by default as first child
* @param {HTMLElement} elm
* @param {HTMLElement} [doc]
* @param {HTMLElement} [target]
* @param {Boolean} [asLastChildChild]
* @return {HTMLElement}
*/


function insertElement(elm, doc, target, asLastChildChild) {
  doc = doc || document;
  var parentEl;

  if (target) {
    parentEl = doc.getElementsByTagName(target);
  } else {
    parentEl = doc.getElementsByTagName('head');
  }

  try {
    parentEl = parentEl.length ? parentEl : doc.getElementsByTagName('body');

    if (parentEl.length) {
      parentEl = parentEl[0];
      var insertBeforeEl = asLastChildChild ? null : parentEl.firstChild;
      return parentEl.insertBefore(elm, insertBeforeEl);
    }
  } catch (e) {}
}
/**
 * Inserts an image pixel with the specified `url` for cookie sync
 * @param {string} url URL string of the image pixel to load
 * @param  {function} [done] an optional exit callback, used when this usersync pixel is added during an async process
 */

function triggerPixel(url, done) {
  var img = new Image();

  if (done && internal.isFn(done)) {
    img.addEventListener('load', done);
    img.addEventListener('error', done);
  }

  img.src = url;
}
function callBurl(_ref) {
  var source = _ref.source,
      burl = _ref.burl;

  if (source === CONSTANTS.S2S.SRC && burl) {
    internal.triggerPixel(burl);
  }
}
/**
 * Inserts an empty iframe with the specified `html`, primarily used for tracking purposes
 * (though could be for other purposes)
 * @param {string} htmlCode snippet of HTML code used for tracking purposes
 */

function insertHtmlIntoIframe(htmlCode) {
  if (!htmlCode) {
    return;
  }

  var iframe = document.createElement('iframe');
  iframe.id = getUniqueIdentifierStr();
  iframe.width = 0;
  iframe.height = 0;
  iframe.hspace = '0';
  iframe.vspace = '0';
  iframe.marginWidth = '0';
  iframe.marginHeight = '0';
  iframe.style.display = 'none';
  iframe.style.height = '0px';
  iframe.style.width = '0px';
  iframe.scrolling = 'no';
  iframe.frameBorder = '0';
  iframe.allowtransparency = 'true';
  internal.insertElement(iframe, document, 'body');
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(htmlCode);
  iframe.contentWindow.document.close();
}
/**
 * Inserts empty iframe with the specified `url` for cookie sync
 * @param  {string} url URL to be requested
 * @param  {string} encodeUri boolean if URL should be encoded before inserted. Defaults to true
 * @param  {function} [done] an optional exit callback, used when this usersync pixel is added during an async process
 */

function insertUserSyncIframe(url, done) {
  var iframeHtml = internal.createTrackPixelIframeHtml(url, false, 'allow-scripts allow-same-origin');
  var div = document.createElement('div');
  div.innerHTML = iframeHtml;
  var iframe = div.firstChild;

  if (done && internal.isFn(done)) {
    iframe.addEventListener('load', done);
    iframe.addEventListener('error', done);
  }

  internal.insertElement(iframe, document, 'html', true);
}
;
/**
 * Creates a snippet of HTML that retrieves the specified `url`
 * @param  {string} url URL to be requested
 * @return {string}     HTML snippet that contains the img src = set to `url`
 */

function createTrackPixelHtml(url) {
  if (!url) {
    return '';
  }

  var escapedUrl = encodeURI(url);
  var img = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
  img += '<img src="' + escapedUrl + '"></div>';
  return img;
}
;
/**
 * Creates a snippet of Iframe HTML that retrieves the specified `url`
 * @param  {string} url plain URL to be requested
 * @param  {string} encodeUri boolean if URL should be encoded before inserted. Defaults to true
 * @param  {string} sandbox string if provided the sandbox attribute will be included with the given value
 * @return {string}     HTML snippet that contains the iframe src = set to `url`
 */

function createTrackPixelIframeHtml(url) {
  var encodeUri = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var sandbox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (!url) {
    return '';
  }

  if (encodeUri) {
    url = encodeURI(url);
  }

  if (sandbox) {
    sandbox = "sandbox=\"".concat(sandbox, "\"");
  }

  return "<iframe ".concat(sandbox, " id=\"").concat(getUniqueIdentifierStr(), "\"\n      frameborder=\"0\"\n      allowtransparency=\"true\"\n      marginheight=\"0\" marginwidth=\"0\"\n      width=\"0\" hspace=\"0\" vspace=\"0\" height=\"0\"\n      style=\"height:0px;width:0px;display:none;\"\n      scrolling=\"no\"\n      src=\"").concat(url, "\">\n    </iframe>");
}
/**
 * Returns iframe document in a browser agnostic way
 * @param  {Object} iframe reference
 * @return {Object}        iframe `document` reference
 */

function getIframeDocument(iframe) {
  if (!iframe) {
    return;
  }

  var doc;

  try {
    if (iframe.contentWindow) {
      doc = iframe.contentWindow.document;
    } else if (iframe.contentDocument.document) {
      doc = iframe.contentDocument.document;
    } else {
      doc = iframe.contentDocument;
    }
  } catch (e) {
    internal.logError('Cannot get iframe document', e);
  }

  return doc;
}
function getValueString(param, val, defaultValue) {
  if (val === undefined || val === null) {
    return defaultValue;
  }

  if (isStr(val)) {
    return val;
  }

  if (isNumber(val)) {
    return val.toString();
  }

  internal.logWarn('Unsuported type for param: ' + param + ' required type: String');
}
function uniques(value, index, arry) {
  return arry.indexOf(value) === index;
}
function flatten(a, b) {
  return a.concat(b);
}
function getBidRequest(id, bidderRequests) {
  var bidRequest;
  bidderRequests.some((function (bidderRequest) {
    var result = __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find___default()(bidderRequest.bids, (function (bid) {
      return ['bidId', 'adId', 'bid_id'].some((function (type) {
        return bid[type] === id;
      }));
    }));

    if (result) {
      bidRequest = result;
    }

    return result;
  }));
  return bidRequest;
}
function getKeys(obj) {
  return Object.keys(obj);
}
function getValue(obj, key) {
  return obj[key];
}
function getBidderCodes() {
  var adUnits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pbjs.adUnits;
  // this could memoize adUnits
  return adUnits.map((function (unit) {
    return unit.bids.map((function (bid) {
      return bid.bidder;
    })).reduce(flatten, []);
  })).reduce(flatten).filter(uniques);
}
function isGptPubadsDefined() {
  if (window.googletag && isFn(window.googletag.pubads) && isFn(window.googletag.pubads().getSlots)) {
    return true;
  }
} // This function will get highest cpm value bid, in case of tie it will return the bid with lowest timeToRespond

var getHighestCpm = getHighestCpmCallback('timeToRespond', (function (previous, current) {
  return previous > current;
})); // This function will get the oldest hightest cpm value bid, in case of tie it will return the bid which came in first
// Use case for tie: https://github.com/prebid/Prebid.js/issues/2448

var getOldestHighestCpmBid = getHighestCpmCallback('responseTimestamp', (function (previous, current) {
  return previous > current;
})); // This function will get the latest hightest cpm value bid, in case of tie it will return the bid which came in last
// Use case for tie: https://github.com/prebid/Prebid.js/issues/2539

var getLatestHighestCpmBid = getHighestCpmCallback('responseTimestamp', (function (previous, current) {
  return previous < current;
}));

function getHighestCpmCallback(useTieBreakerProperty, tieBreakerCallback) {
  return function (previous, current) {
    if (previous.cpm === current.cpm) {
      return tieBreakerCallback(previous[useTieBreakerProperty], current[useTieBreakerProperty]) ? current : previous;
    }

    return previous.cpm < current.cpm ? current : previous;
  };
}
/**
 * Fisher–Yates shuffle
 * http://stackoverflow.com/a/6274398
 * https://bost.ocks.org/mike/shuffle/
 * istanbul ignore next
 */


function shuffle(array) {
  var counter = array.length; // while there are elements in the array

  while (counter > 0) {
    // pick a random index
    var index = Math.floor(Math.random() * counter); // decrease counter by 1

    counter--; // and swap the last element with it

    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
function adUnitsFilter(filter, bid) {
  return __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes___default()(filter, bid && bid.adUnitCode);
}
/**
 * Check if parent iframe of passed document supports content rendering via 'srcdoc' property
 * @param {HTMLDocument} doc document to check support of 'srcdoc'
 */

function isSrcdocSupported(doc) {
  // Firefox is excluded due to https://bugzilla.mozilla.org/show_bug.cgi?id=1265961
  return doc.defaultView && doc.defaultView.frameElement && 'srcdoc' in doc.defaultView.frameElement && !/firefox/i.test(navigator.userAgent);
}
function deepClone(obj) {
  return __WEBPACK_IMPORTED_MODULE_1_just_clone___default()(obj);
}
function inIframe() {
  try {
    return internal.getWindowSelf() !== internal.getWindowTop();
  } catch (e) {
    return true;
  }
}
function isSafariBrowser() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function replaceAuctionPrice(str, cpm) {
  if (!str) return;
  return str.replace(/\$\{AUCTION_PRICE\}/g, cpm);
}
function timestamp() {
  return new Date().getTime();
}
function checkCookieSupport() {
  if (window.navigator.cookieEnabled || !!document.cookie.length) {
    return true;
  }
}
function cookiesAreEnabled() {
  if (internal.checkCookieSupport()) {
    return true;
  }

  window.document.cookie = 'prebid.cookieTest';
  return window.document.cookie.indexOf('prebid.cookieTest') != -1;
}
function getCookie(name) {
  var m = window.document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]*)\\s*(;|$)');
  return m ? decodeURIComponent(m[2]) : null;
}
/**
 * Given a function, return a function which only executes the original after
 * it's been called numRequiredCalls times.
 *
 * Note that the arguments from the previous calls will *not* be forwarded to the original function.
 * Only the final call's arguments matter.
 *
 * @param {function} func The function which should be executed, once the returned function has been executed
 *   numRequiredCalls times.
 * @param {int} numRequiredCalls The number of times which the returned function needs to be called before
 *   func is.
 */

function delayExecution(func, numRequiredCalls) {
  if (numRequiredCalls < 1) {
    throw new Error("numRequiredCalls must be a positive number. Got ".concat(numRequiredCalls));
  }

  var numCalls = 0;
  return function () {
    numCalls++;

    if (numCalls === numRequiredCalls) {
      func.apply(null, arguments);
    }
  };
}
/**
 * https://stackoverflow.com/a/34890276/428704
 * @export
 * @param {array} xs
 * @param {string} key
 * @returns {Object} {${key_value}: ${groupByArray}, key_value: {groupByArray}}
 */

function groupBy(xs, key) {
  return xs.reduce((function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }), {});
}
/**
 * deepAccess utility function useful for doing safe access (will not throw exceptions) of deep object paths.
 * @param {Object} obj The object containing the values you would like to access.
 * @param {string|number} path Object path to the value you would like to access.  Non-strings are coerced to strings.
 * @returns {*} The value found at the specified object path, or undefined if path is not found.
 */

function deepAccess(obj, path) {
  if (!obj) {
    return;
  }

  path = String(path).split('.');

  for (var i = 0; i < path.length; i++) {
    obj = obj[path[i]];

    if (typeof obj === 'undefined') {
      return;
    }
  }

  return obj;
}
/**
 * Returns content for a friendly iframe to execute a URL in script tag
 * @param {string} url URL to be executed in a script tag in a friendly iframe
 * <!--PRE_SCRIPT_TAG_MACRO--> and <!--POST_SCRIPT_TAG_MACRO--> are macros left to be replaced if required
 */

function createContentToExecuteExtScriptInFriendlyFrame(url) {
  if (!url) {
    return '';
  }

  return "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\"><html><head><base target=\"_top\" /><script>inDapIF=true;</script></head><body><!--PRE_SCRIPT_TAG_MACRO--><script src=\"".concat(url, "\"></script><!--POST_SCRIPT_TAG_MACRO--></body></html>");
}
/**
 * Build an object consisting of only defined parameters to avoid creating an
 * object with defined keys and undefined values.
 * @param {Object} object The object to pick defined params out of
 * @param {string[]} params An array of strings representing properties to look for in the object
 * @returns {Object} An object containing all the specified values that are defined
 */

function getDefinedParams(object, params) {
  return params.filter((function (param) {
    return object[param];
  })).reduce((function (bid, param) {
    return _extends(bid, _defineProperty({}, param, object[param]));
  }), {});
}
/**
 * @typedef {Object} MediaTypes
 * @property {Object} banner banner configuration
 * @property {Object} native native configuration
 * @property {Object} video video configuration
 */

/**
 * Validates an adunit's `mediaTypes` parameter
 * @param {MediaTypes} mediaTypes mediaTypes parameter to validate
 * @return {boolean} If object is valid
 */

function isValidMediaTypes(mediaTypes) {
  var SUPPORTED_MEDIA_TYPES = ['banner', 'native', 'video'];
  var SUPPORTED_STREAM_TYPES = ['instream', 'outstream'];
  var types = Object.keys(mediaTypes);

  if (!types.every((function (type) {
    return __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes___default()(SUPPORTED_MEDIA_TYPES, type);
  }))) {
    return false;
  }

  if (mediaTypes.video && mediaTypes.video.context) {
    return __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes___default()(SUPPORTED_STREAM_TYPES, mediaTypes.video.context);
  }

  return true;
}
function getBidderRequest(bidRequests, bidder, adUnitCode) {
  return __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find___default()(bidRequests, (function (request) {
    return request.bids.filter((function (bid) {
      return bid.bidder === bidder && bid.adUnitCode === adUnitCode;
    })).length > 0;
  })) || {
    start: null,
    auctionId: null
  };
}
/**
 * Returns user configured bidder params from adunit
 * @param {Object} adUnits
 * @param {string} adUnitCode code
 * @param {string} bidder code
 * @return {Array} user configured param for the given bidder adunit configuration
 */

function getUserConfiguredParams(adUnits, adUnitCode, bidder) {
  return adUnits.filter((function (adUnit) {
    return adUnit.code === adUnitCode;
  })).map((function (adUnit) {
    return adUnit.bids;
  })).reduce(flatten, []).filter((function (bidderData) {
    return bidderData.bidder === bidder;
  })).map((function (bidderData) {
    return bidderData.params || {};
  }));
}
/**
 * Returns the origin
 */

function getOrigin() {
  // IE10 does not have this property. https://gist.github.com/hbogs/7908703
  if (!window.location.origin) {
    return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  } else {
    return window.location.origin;
  }
}
/**
 * Returns Do Not Track state
 */

function getDNT() {
  return navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.msDoNotTrack === '1' || navigator.doNotTrack === 'yes';
}

var compareCodeAndSlot = function compareCodeAndSlot(slot, adUnitCode) {
  return slot.getAdUnitPath() === adUnitCode || slot.getSlotElementId() === adUnitCode;
};
/**
 * Returns filter function to match adUnitCode in slot
 * @param {Object} slot GoogleTag slot
 * @return {function} filter function
 */


function isAdUnitCodeMatchingSlot(slot) {
  return function (adUnitCode) {
    return compareCodeAndSlot(slot, adUnitCode);
  };
}
/**
 * Returns filter function to match adUnitCode in slot
 * @param {string} adUnitCode AdUnit code
 * @return {function} filter function
 */

function isSlotMatchingAdUnitCode(adUnitCode) {
  return function (slot) {
    return compareCodeAndSlot(slot, adUnitCode);
  };
}
/**
 * Constructs warning message for when unsupported bidders are dropped from an adunit
 * @param {Object} adUnit ad unit from which the bidder is being dropped
 * @param {string} bidder bidder code that is not compatible with the adUnit
 * @return {string} warning message to display when condition is met
 */

function unsupportedBidderMessage(adUnit, bidder) {
  var mediaType = Object.keys(adUnit.mediaTypes || {
    'banner': 'banner'
  }).join(', ');
  return "\n    ".concat(adUnit.code, " is a ").concat(mediaType, " ad unit\n    containing bidders that don't support ").concat(mediaType, ": ").concat(bidder, ".\n    This bidder won't fetch demand.\n  ");
}
/**
 * Delete property from object
 * @param {Object} object
 * @param {string} prop
 * @return {Object} object
 */

function deletePropertyFromObject(object, prop) {
  var result = _extends({}, object);

  delete result[prop];
  return result;
}
/**
 * Delete requestId from external bid object.
 * @param {Object} bid
 * @return {Object} bid
 */

function removeRequestId(bid) {
  return deletePropertyFromObject(bid, 'requestId');
}
/**
 * Checks input is integer or not
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @param {*} value
 */

function isInteger(value) {
  if (Number.isInteger) {
    return Number.isInteger(value);
  } else {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  }
}
/**
 * Converts a string value in camel-case to underscore eg 'placementId' becomes 'placement_id'
 * @param {string} value string value to convert
 */

function convertCamelToUnderscore(value) {
  return value.replace(/(?:^|\.?)([A-Z])/g, (function (x, y) {
    return '_' + y.toLowerCase();
  })).replace(/^_/, '');
}
/**
 * Converts an object of arrays (either strings or numbers) into an array of objects containing key and value properties
 * normally read from bidder params
 * eg { foo: ['bar', 'baz'], fizz: ['buzz'] }
 * becomes [{ key: 'foo', value: ['bar', 'baz']}, {key: 'fizz', value: ['buzz']}]
 * @param {Object} keywords object of arrays representing keyvalue pairs
 * @param {string} paramName name of parent object (eg 'keywords') containing keyword data, used in error handling
 */

function transformBidderParamKeywords(keywords) {
  var paramName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'keywords';
  var arrs = [];

  _each(keywords, (function (v, k) {
    if (isArray(v)) {
      var values = [];

      _each(v, (function (val) {
        val = getValueString(paramName + '.' + k, val);

        if (val || val === '') {
          values.push(val);
        }
      }));

      v = values;
    } else {
      v = getValueString(paramName + '.' + k, v);

      if (isStr(v)) {
        v = [v];
      } else {
        return;
      } // unsuported types - don't send a key

    }

    arrs.push({
      key: k,
      value: v
    });
  }));

  return arrs;
}
/**
 * Try to convert a value to a type.
 * If it can't be done, the value will be returned.
 *
 * @param {string} typeToConvert The target type. e.g. "string", "number", etc.
 * @param {*} value The value to be converted into typeToConvert.
 */

function tryConvertType(typeToConvert, value) {
  if (typeToConvert === 'string') {
    return value && value.toString();
  } else if (typeToConvert === 'number') {
    return Number(value);
  } else {
    return value;
  }
}

function convertTypes(types, params) {
  Object.keys(types).forEach((function (key) {
    if (params[key]) {
      if (isFn(types[key])) {
        params[key] = types[key](params[key]);
      } else {
        params[key] = tryConvertType(types[key], params[key]);
      } // don't send invalid values


      if (isNaN(params[key])) {
        delete params.key;
      }
    }
  }));
  return params;
}

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["registerBidder"] = registerBidder;
/* harmony export (immutable) */ __webpack_exports__["newBidder"] = newBidder;
/* harmony export (immutable) */ __webpack_exports__["isValid"] = isValid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapterManager__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bidfactory__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__userSync__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__native__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__video__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_json__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__constants_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__(0);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












/**
 * This file aims to support Adapters during the Prebid 0.x -> 1.x transition.
 *
 * Prebid 1.x and Prebid 0.x will be in separate branches--perhaps for a long time.
 * This function defines an API for adapter construction which is compatible with both versions.
 * Adapters which use it can maintain their code in master, and only this file will need to change
 * in the 1.x branch.
 *
 * Typical usage looks something like:
 *
 * const adapter = registerBidder({
 *   code: 'myBidderCode',
 *   aliases: ['alias1', 'alias2'],
 *   supportedMediaTypes: ['video', 'native'],
 *   isBidRequestValid: function(paramsObject) { return true/false },
 *   buildRequests: function(bidRequests, bidderRequest) { return some ServerRequest(s) },
 *   interpretResponse: function(oneServerResponse) { return some Bids, or throw an error. }
 * });
 *
 * @see BidderSpec for the full API and more thorough descriptions.
 */

/**
 * @typedef {object} BidderSpec An object containing the adapter-specific functions needed to
 * make a Bidder.
 *
 * @property {string} code A code which will be used to uniquely identify this bidder. This should be the same
 *   one as is used in the call to registerBidAdapter
 * @property {string[]} [aliases] A list of aliases which should also resolve to this bidder.
 * @property {MediaType[]} [supportedMediaTypes]: A list of Media Types which the adapter supports.
 * @property {function(object): boolean} isBidRequestValid Determines whether or not the given bid has all the params
 *   needed to make a valid request.
 * @property {function(BidRequest[], bidderRequest): ServerRequest|ServerRequest[]} buildRequests Build the request to the Server
 *   which requests Bids for the given array of Requests. Each BidRequest in the argument array is guaranteed to have
 *   passed the isBidRequestValid() test.
 * @property {function(ServerResponse, BidRequest): Bid[]} interpretResponse Given a successful response from the Server,
 *   interpret it and return the Bid objects. This function will be run inside a try/catch.
 *   If it throws any errors, your bids will be discarded.
 * @property {function(SyncOptions, ServerResponse[]): UserSync[]} [getUserSyncs] Given an array of all the responses
 *   from the server, determine which user syncs should occur. The argument array will contain every element
 *   which has been sent through to interpretResponse. The order of syncs in this array matters. The most
 *   important ones should come first, since publishers may limit how many are dropped on their page.
 * @property {function(object): object} transformBidParams Updates bid params before creating bid request
 }}
 */

/**
 * @typedef {object} BidRequest
 *
 * @property {string} bidId A string which uniquely identifies this BidRequest in the current Auction.
 * @property {object} params Any bidder-specific params which the publisher used in their bid request.
 */

/**
 * @typedef {object} ServerRequest
 *
 * @property {('GET'|'POST')} method The type of request which this is.
 * @property {string} url The endpoint for the request. For example, "//bids.example.com".
 * @property {string|object} data Data to be sent in the request.
 * @property {object} options Content-Type set in the header of the bid request, overrides default 'text/plain'.
 *   If this is a GET request, they'll become query params. If it's a POST request, they'll be added to the body.
 *   Strings will be added as-is. Objects will be unpacked into query params based on key/value mappings, or
 *   JSON-serialized into the Request body.
 */

/**
 * @typedef {object} ServerResponse
 *
 * @property {*} body The response body. If this is legal JSON, then it will be parsed. Otherwise it'll be a
 *   string with the body's content.
 * @property {{get: function(string): string} headers The response headers.
 *   Call this like `ServerResponse.headers.get("Content-Type")`
 */

/**
 * @typedef {object} Bid
 *
 * @property {string} requestId The specific BidRequest which this bid is aimed at.
 *   This should match the BidRequest.bidId which this Bid targets.
 * @property {string} ad A URL which can be used to load this ad, if it's chosen by the publisher.
 * @property {string} currency The currency code for the cpm value
 * @property {number} cpm The bid price, in US cents per thousand impressions.
 * @property {number} ttl Time-to-live - how long (in seconds) Prebid can use this bid.
 * @property {boolean} netRevenue Boolean defining whether the bid is Net or Gross.  The default is true (Net).
 * @property {number} height The height of the ad, in pixels.
 * @property {number} width The width of the ad, in pixels.
 *
 * @property [Renderer] renderer A Renderer which can be used as a default for this bid,
 *   if the publisher doesn't override it. This is only relevant for Outstream Video bids.
 */

/**
 * @typedef {Object} SyncOptions
 *
 * An object containing information about usersyncs which the adapter should obey.
 *
 * @property {boolean} iframeEnabled True if iframe usersyncs are allowed, and false otherwise
 * @property {boolean} pixelEnabled True if image usersyncs are allowed, and false otherwise
 */

/**
 * TODO: Move this to the UserSync module after that PR is merged.
 *
 * @typedef {object} UserSync
 *
 * @property {('image'|'iframe')} type The type of user sync to be done.
 * @property {string} url The URL which makes the sync happen.
 */
// common params for all mediaTypes

var COMMON_BID_RESPONSE_KEYS = ['requestId', 'cpm', 'ttl', 'creativeId', 'netRevenue', 'currency'];
/**
 * Register a bidder with prebid, using the given spec.
 *
 * If possible, Adapter modules should use this function instead of adapterManager.registerBidAdapter().
 *
 * @param {BidderSpec} spec An object containing the bare-bones functions we need to make a Bidder.
 */

function registerBidder(spec) {
  var mediaTypes = Array.isArray(spec.supportedMediaTypes) ? {
    supportedMediaTypes: spec.supportedMediaTypes
  } : undefined;

  function putBidder(spec) {
    var bidder = newBidder(spec);
    __WEBPACK_IMPORTED_MODULE_1__adapterManager__["default"].registerBidAdapter(bidder, spec.code, mediaTypes);
  }

  putBidder(spec);

  if (Array.isArray(spec.aliases)) {
    spec.aliases.forEach((function (alias) {
      __WEBPACK_IMPORTED_MODULE_1__adapterManager__["default"].aliasRegistry[alias] = spec.code;
      putBidder(_extends({}, spec, {
        code: alias
      }));
    }));
  }
}
/**
 * Make a new bidder from the given spec. This is exported mainly for testing.
 * Adapters will probably find it more convenient to use registerBidder instead.
 *
 * @param {BidderSpec} spec
 */

function newBidder(spec) {
  return _extends(new __WEBPACK_IMPORTED_MODULE_0__adapter__["a" /* default */](spec.code), {
    getSpec: function getSpec() {
      return Object.freeze(spec);
    },
    registerSyncs: registerSyncs,
    callBids: function callBids(bidderRequest, addBidResponse, done, ajax) {
      if (!Array.isArray(bidderRequest.bids)) {
        return;
      }

      var adUnitCodesHandled = {};

      function addBidWithCode(adUnitCode, bid) {
        adUnitCodesHandled[adUnitCode] = true;

        if (isValid(adUnitCode, bid, [bidderRequest])) {
          addBidResponse(adUnitCode, bid);
        }
      } // After all the responses have come back, call done() and
      // register any required usersync pixels.


      var responses = [];

      function afterAllResponses() {
        done();
        __WEBPACK_IMPORTED_MODULE_8__events___default.a.emit(__WEBPACK_IMPORTED_MODULE_7__constants_json___default.a.EVENTS.BIDDER_DONE, bidderRequest);
        registerSyncs(responses, bidderRequest.gdprConsent);
      }

      var validBidRequests = bidderRequest.bids.filter(filterAndWarn);

      if (validBidRequests.length === 0) {
        afterAllResponses();
        return;
      }

      var bidRequestMap = {};
      validBidRequests.forEach((function (bid) {
        bidRequestMap[bid.bidId] = bid; // Delete this once we are 1.0

        if (!bid.adUnitCode) {
          bid.adUnitCode = bid.placementCode;
        }
      }));
      var requests = spec.buildRequests(validBidRequests, bidderRequest);

      if (!requests || requests.length === 0) {
        afterAllResponses();
        return;
      }

      if (!Array.isArray(requests)) {
        requests = [requests];
      } // Callbacks don't compose as nicely as Promises. We should call done() once _all_ the
      // Server requests have returned and been processed. Since `ajax` accepts a single callback,
      // we need to rig up a function which only executes after all the requests have been responded.


      var onResponse = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["delayExecution"])(afterAllResponses, requests.length);
      requests.forEach(processRequest);

      function formatGetParameters(data) {
        if (data) {
          return "?".concat(_typeof(data) === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_10__utils__["parseQueryStringParameters"])(data) : data);
        }

        return '';
      }

      function processRequest(request) {
        switch (request.method) {
          case 'GET':
            ajax("".concat(request.url).concat(formatGetParameters(request.data)), {
              success: onSuccess,
              error: onFailure
            }, undefined, _extends({
              method: 'GET',
              withCredentials: true
            }, request.options));
            break;

          case 'POST':
            ajax(request.url, {
              success: onSuccess,
              error: onFailure
            }, typeof request.data === 'string' ? request.data : JSON.stringify(request.data), _extends({
              method: 'POST',
              contentType: 'text/plain',
              withCredentials: true
            }, request.options));
            break;

          default:
            Object(__WEBPACK_IMPORTED_MODULE_10__utils__["logWarn"])("Skipping invalid request from ".concat(spec.code, ". Request type ").concat(request.type, " must be GET or POST"));
            onResponse();
        } // If the server responds successfully, use the adapter code to unpack the Bids from it.
        // If the adapter code fails, no bids should be added. After all the bids have been added, make
        // sure to call the `onResponse` function so that we're one step closer to calling done().


        function onSuccess(response, responseObj) {
          try {
            response = JSON.parse(response);
          } catch (e) {}
          /* response might not be JSON... that's ok. */
          // Make response headers available for #1742. These are lazy-loaded because most adapters won't need them.


          response = {
            body: response,
            headers: headerParser(responseObj)
          };
          responses.push(response);
          var bids;

          try {
            bids = spec.interpretResponse(response, request);
          } catch (err) {
            Object(__WEBPACK_IMPORTED_MODULE_10__utils__["logError"])("Bidder ".concat(spec.code, " failed to interpret the server's response. Continuing without bids"), null, err);
            onResponse();
            return;
          }

          if (bids) {
            if (bids.forEach) {
              bids.forEach(addBidUsingRequestMap);
            } else {
              addBidUsingRequestMap(bids);
            }
          }

          onResponse(bids);

          function addBidUsingRequestMap(bid) {
            var bidRequest = bidRequestMap[bid.requestId];

            if (bidRequest) {
              var prebidBid = _extends(Object(__WEBPACK_IMPORTED_MODULE_3__bidfactory__["a" /* createBid */])(__WEBPACK_IMPORTED_MODULE_7__constants_json___default.a.STATUS.GOOD, bidRequest), bid);

              addBidWithCode(bidRequest.adUnitCode, prebidBid);
            } else {
              Object(__WEBPACK_IMPORTED_MODULE_10__utils__["logWarn"])("Bidder ".concat(spec.code, " made bid for unknown request ID: ").concat(bid.requestId, ". Ignoring."));
            }
          }

          function headerParser(xmlHttpResponse) {
            return {
              get: responseObj.getResponseHeader.bind(responseObj)
            };
          }
        } // If the server responds with an error, there's not much we can do. Log it, and make sure to
        // call onResponse() so that we're one step closer to calling done().


        function onFailure(err) {
          Object(__WEBPACK_IMPORTED_MODULE_10__utils__["logError"])("Server call for ".concat(spec.code, " failed: ").concat(err, ". Continuing without bids."));
          onResponse();
        }
      }
    }
  });

  function registerSyncs(responses, gdprConsent) {
    if (spec.getUserSyncs) {
      var filterConfig = __WEBPACK_IMPORTED_MODULE_2__config__["config"].getConfig('userSync.filterSettings');
      var syncs = spec.getUserSyncs({
        iframeEnabled: !!(__WEBPACK_IMPORTED_MODULE_2__config__["config"].getConfig('userSync.iframeEnabled') || filterConfig && (filterConfig.iframe || filterConfig.all)),
        pixelEnabled: !!(__WEBPACK_IMPORTED_MODULE_2__config__["config"].getConfig('userSync.pixelEnabled') || filterConfig && (filterConfig.image || filterConfig.all))
      }, responses, gdprConsent);

      if (syncs) {
        if (!Array.isArray(syncs)) {
          syncs = [syncs];
        }

        syncs.forEach((function (sync) {
          __WEBPACK_IMPORTED_MODULE_4__userSync__["a" /* userSync */].registerSync(sync.type, spec.code, sync.url);
        }));
      }
    }
  }

  function filterAndWarn(bid) {
    if (!spec.isBidRequestValid(bid)) {
      Object(__WEBPACK_IMPORTED_MODULE_10__utils__["logWarn"])("Invalid bid sent to bidder ".concat(spec.code, ": ").concat(JSON.stringify(bid)));
      return false;
    }

    return true;
  }
} // check that the bid has a width and height set

function validBidSize(adUnitCode, bid, bidRequests) {
  if ((bid.width || bid.width === 0) && (bid.height || bid.height === 0)) {
    return true;
  }

  var adUnit = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["getBidderRequest"])(bidRequests, bid.bidderCode, adUnitCode);
  var sizes = adUnit && adUnit.bids && adUnit.bids[0] && adUnit.bids[0].sizes;
  var parsedSizes = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["parseSizesInput"])(sizes); // if a banner impression has one valid size, we assign that size to any bid
  // response that does not explicitly set width or height

  if (parsedSizes.length === 1) {
    var _parsedSizes$0$split = parsedSizes[0].split('x'),
        _parsedSizes$0$split2 = _slicedToArray(_parsedSizes$0$split, 2),
        width = _parsedSizes$0$split2[0],
        height = _parsedSizes$0$split2[1];

    bid.width = width;
    bid.height = height;
    return true;
  }

  return false;
} // Validate the arguments sent to us by the adapter. If this returns false, the bid should be totally ignored.


function isValid(adUnitCode, bid, bidRequests) {
  function hasValidKeys() {
    var bidKeys = Object.keys(bid);
    return COMMON_BID_RESPONSE_KEYS.every((function (key) {
      return __WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes___default()(bidKeys, key) && !__WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes___default()([undefined, null], bid[key]);
    }));
  }

  function errorMessage(msg) {
    return "Invalid bid from ".concat(bid.bidderCode, ". Ignoring bid: ").concat(msg);
  }

  if (!adUnitCode) {
    Object(__WEBPACK_IMPORTED_MODULE_10__utils__["logWarn"])('No adUnitCode was supplied to addBidResponse.');
    return false;
  }

  if (!bid) {
    Object(__WEBPACK_IMPORTED_MODULE_10__utils__["logWarn"])("Some adapter tried to add an undefined bid for ".concat(adUnitCode, "."));
    return false;
  }

  if (!hasValidKeys()) {
    Object(__WEBPACK_IMPORTED_MODULE_10__utils__["logError"])(errorMessage("Bidder ".concat(bid.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")));
    return false;
  }

  if (bid.mediaType === 'native' && !Object(__WEBPACK_IMPORTED_MODULE_5__native__["e" /* nativeBidIsValid */])(bid, bidRequests)) {
    Object(__WEBPACK_IMPORTED_MODULE_10__utils__["logError"])(errorMessage('Native bid missing some required properties.'));
    return false;
  }

  if (bid.mediaType === 'video' && !Object(__WEBPACK_IMPORTED_MODULE_6__video__["b" /* isValidVideoBid */])(bid, bidRequests)) {
    Object(__WEBPACK_IMPORTED_MODULE_10__utils__["logError"])(errorMessage("Video bid does not have required vastUrl or renderer property"));
    return false;
  }

  if (bid.mediaType === 'banner' && !validBidSize(adUnitCode, bid, bidRequests)) {
    Object(__WEBPACK_IMPORTED_MODULE_10__utils__["logError"])(errorMessage("Banner bids require a width and height"));
    return false;
  }

  return true;
}

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
module.exports = __webpack_require__(13).Array.find;


/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(14);
var $find = __webpack_require__(34)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY]((function () { forced = false; }));
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(26)(KEY);


/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseQS */
/* harmony export (immutable) */ __webpack_exports__["b"] = formatQS;
/* harmony export (immutable) */ __webpack_exports__["c"] = parse;
/* harmony export (immutable) */ __webpack_exports__["a"] = format;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function parseQS(query) {
  return !query ? {} : query.replace(/^\?/, '').split('&').reduce((function (acc, criteria) {
    var _criteria$split = criteria.split('='),
        _criteria$split2 = _slicedToArray(_criteria$split, 2),
        k = _criteria$split2[0],
        v = _criteria$split2[1];

    if (/\[\]$/.test(k)) {
      k = k.replace('[]', '');
      acc[k] = acc[k] || [];
      acc[k].push(v);
    } else {
      acc[k] = v || '';
    }

    return acc;
  }), {});
}
function formatQS(query) {
  return Object.keys(query).map((function (k) {
    return Array.isArray(query[k]) ? query[k].map((function (v) {
      return "".concat(k, "[]=").concat(v);
    })).join('&') : "".concat(k, "=").concat(query[k]);
  })).join('&');
}
function parse(url, options) {
  var parsed = document.createElement('a');

  if (options && 'noDecodeWholeURL' in options && options.noDecodeWholeURL) {
    parsed.href = url;
  } else {
    parsed.href = decodeURIComponent(url);
  } // in window.location 'search' is string, not object


  var qsAsString = options && 'decodeSearchAsString' in options && options.decodeSearchAsString;
  return {
    href: parsed.href,
    protocol: (parsed.protocol || '').replace(/:$/, ''),
    hostname: parsed.hostname,
    port: +parsed.port,
    pathname: parsed.pathname.replace(/^(?!\/)/, '/'),
    search: qsAsString ? parsed.search : parseQS(parsed.search || ''),
    hash: (parsed.hash || '').replace(/^#/, ''),
    host: parsed.host || window.location.host
  };
}
function format(obj) {
  return (obj.protocol || 'http') + '://' + (obj.host || obj.hostname + (obj.port ? ":".concat(obj.port) : '')) + (obj.pathname || '') + (obj.search ? "?".concat(formatQS(obj.search || '')) : '') + (obj.hash ? "#".concat(obj.hash) : '');
}

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Renderer;
/* harmony export (immutable) */ __webpack_exports__["c"] = isRendererRequired;
/* harmony export (immutable) */ __webpack_exports__["b"] = executeRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adloader__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find__);



/**
 * @typedef {object} Renderer
 *
 * A Renderer stores some functions which are used to render a particular Bid.
 * These are used in Outstream Video Bids, returned on the Bid by the adapter, and will
 * be used to render that bid unless the Publisher overrides them.
 */

function Renderer(options) {
  var _this = this;

  var url = options.url,
      config = options.config,
      id = options.id,
      callback = options.callback,
      loaded = options.loaded,
      adUnitCode = options.adUnitCode;
  this.url = url;
  this.config = config;
  this.handlers = {};
  this.id = id; // a renderer may push to the command queue to delay rendering until the
  // render function is loaded by loadScript, at which point the the command
  // queue will be processed

  this.loaded = loaded;
  this.cmd = [];

  this.push = function (func) {
    if (typeof func !== 'function') {
      __WEBPACK_IMPORTED_MODULE_1__utils__["logError"]('Commands given to Renderer.push must be wrapped in a function');
      return;
    }

    _this.loaded ? func.call() : _this.cmd.push(func);
  }; // bidders may override this with the `callback` property given to `install`


  this.callback = callback || function () {
    _this.loaded = true;

    _this.process();
  };

  if (!isRendererDefinedOnAdUnit(adUnitCode)) {
    // we expect to load a renderer url once only so cache the request to load script
    Object(__WEBPACK_IMPORTED_MODULE_0__adloader__["b" /* loadScript */])(url, this.callback, true);
  } else {
    __WEBPACK_IMPORTED_MODULE_1__utils__["logWarn"]("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(adUnitCode));
  }
}

Renderer.install = function (_ref) {
  var url = _ref.url,
      config = _ref.config,
      id = _ref.id,
      callback = _ref.callback,
      loaded = _ref.loaded,
      adUnitCode = _ref.adUnitCode;
  return new Renderer({
    url: url,
    config: config,
    id: id,
    callback: callback,
    loaded: loaded,
    adUnitCode: adUnitCode
  });
};

Renderer.prototype.getConfig = function () {
  return this.config;
};

Renderer.prototype.setRender = function (fn) {
  this.render = fn;
};

Renderer.prototype.setEventHandlers = function (handlers) {
  this.handlers = handlers;
};

Renderer.prototype.handleVideoEvent = function (_ref2) {
  var id = _ref2.id,
      eventName = _ref2.eventName;

  if (typeof this.handlers[eventName] === 'function') {
    this.handlers[eventName]();
  }

  __WEBPACK_IMPORTED_MODULE_1__utils__["logMessage"]("Prebid Renderer event for id ".concat(id, " type ").concat(eventName));
};
/*
 * Calls functions that were pushed to the command queue before the
 * renderer was loaded by `loadScript`
 */


Renderer.prototype.process = function () {
  while (this.cmd.length > 0) {
    try {
      this.cmd.shift().call();
    } catch (error) {
      __WEBPACK_IMPORTED_MODULE_1__utils__["logError"]('Error processing Renderer command: ', error);
    }
  }
};
/**
 * Checks whether creative rendering should be done by Renderer or not.
 * @param {Object} renderer Renderer object installed by adapter
 * @returns {Boolean}
 */


function isRendererRequired(renderer) {
  return !!(renderer && renderer.url);
}
/**
 * Render the bid returned by the adapter
 * @param {Object} renderer Renderer object installed by adapter
 * @param {Object} bid Bid response
 */

function executeRenderer(renderer, bid) {
  renderer.render(bid);
}

function isRendererDefinedOnAdUnit(adUnitCode) {
  var adUnits = pbjs.adUnits;
  var adUnit = __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find___default()(adUnits, (function (adUnit) {
    return adUnit.code === adUnitCode;
  }));
  return !!(adUnit && adUnit.renderer && adUnit.renderer.url && adUnit.renderer.render);
}

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(19);
var core = __webpack_require__(13);
var ctx = __webpack_require__(32);
var hide = __webpack_require__(50);
var has = __webpack_require__(57);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createBid;
var utils = __webpack_require__(0);
/**
 Required paramaters
 bidderCode,
 height,
 width,
 statusCode
 Optional paramaters
 adId,
 cpm,
 ad,
 adUrl,
 dealId,
 priceKeyString;
 */


function Bid(statusCode, bidRequest) {
  var _bidId = bidRequest && bidRequest.bidId || utils.getUniqueIdentifierStr();

  var _bidSrc = bidRequest && bidRequest.src || 'client';

  var _statusCode = statusCode || 0;

  this.bidderCode = bidRequest && bidRequest.bidder || '';
  this.width = 0;
  this.height = 0;
  this.statusMessage = _getStatus();
  this.adId = _bidId;
  this.mediaType = 'banner';
  this.source = _bidSrc;

  function _getStatus() {
    switch (_statusCode) {
      case 0:
        return 'Pending';

      case 1:
        return 'Bid available';

      case 2:
        return 'Bid returned empty or error response';

      case 3:
        return 'Bid timed out';
    }
  }

  this.getStatusCode = function () {
    return _statusCode;
  }; // returns the size of the bid creative. Concatenation of width and height by ‘x’.


  this.getSize = function () {
    return this.width + 'x' + this.height;
  };
} // Bid factory function.


function createBid(statusCode, bidRequest) {
  return new Bid(statusCode, bidRequest);
}

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", (function() { return nativeAdapters; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return NATIVE_TARGETING_KEYS; }));
/* harmony export (immutable) */ __webpack_exports__["f"] = processNativeAdUnitParams;
/* unused harmony export nativeAdUnit */
/* unused harmony export nativeBidder */
/* unused harmony export hasNonNativeBidder */
/* harmony export (immutable) */ __webpack_exports__["e"] = nativeBidIsValid;
/* harmony export (immutable) */ __webpack_exports__["b"] = fireNativeTrackers;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNativeTargeting;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_includes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_includes__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var CONSTANTS = __webpack_require__(4);

var nativeAdapters = [];
var NATIVE_TARGETING_KEYS = Object.keys(CONSTANTS.NATIVE_KEYS).map((function (key) {
  return CONSTANTS.NATIVE_KEYS[key];
}));
var IMAGE = {
  image: {
    required: true
  },
  title: {
    required: true
  },
  sponsoredBy: {
    required: true
  },
  clickUrl: {
    required: true
  },
  body: {
    required: false
  },
  icon: {
    required: false
  }
};
var SUPPORTED_TYPES = {
  image: IMAGE
};
/**
 * Recieves nativeParams from an adUnit. If the params were not of type 'type',
 * passes them on directly. If they were of type 'type', translate
 * them into the predefined specific asset requests for that type of native ad.
 */

function processNativeAdUnitParams(params) {
  if (params && params.type && typeIsSupported(params.type)) {
    return SUPPORTED_TYPES[params.type];
  }

  return params;
}
/**
 * Check if the native type specified in the adUnit is supported by Prebid.
 */

function typeIsSupported(type) {
  if (!(type && __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_includes___default()(Object.keys(SUPPORTED_TYPES), type))) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["logError"])("".concat(type, " nativeParam is not supported"));
    return false;
  }

  return true;
}
/**
 * Helper functions for working with native-enabled adUnits
 * TODO: abstract this and the video helper functions into general
 * adunit validation helper functions
 */


var nativeAdUnit = function nativeAdUnit(adUnit) {
  var mediaType = adUnit.mediaType === 'native';
  var mediaTypes = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deepAccess"])(adUnit, 'mediaTypes.native');
  return mediaType || mediaTypes;
};
var nativeBidder = function nativeBidder(bid) {
  return __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_includes___default()(nativeAdapters, bid.bidder);
};
var hasNonNativeBidder = function hasNonNativeBidder(adUnit) {
  return adUnit.bids.filter((function (bid) {
    return !nativeBidder(bid);
  })).length;
};
/**
 * Validate that the native assets on this bid contain all assets that were
 * marked as required in the adUnit configuration.
 * @param {Bid} bid Native bid to validate
 * @param {BidRequest[]} bidRequests All bid requests for an auction
 * @return {Boolean} If object is valid
 */

function nativeBidIsValid(bid, bidRequests) {
  var bidRequest = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["getBidRequest"])(bid.adId, bidRequests);

  if (!bidRequest) {
    return false;
  } // all native bid responses must define a landing page url


  if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deepAccess"])(bid, 'native.clickUrl')) {
    return false;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deepAccess"])(bid, 'native.image')) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deepAccess"])(bid, 'native.image.height') || !Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deepAccess"])(bid, 'native.image.width')) {
      return false;
    }
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deepAccess"])(bid, 'native.icon')) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deepAccess"])(bid, 'native.icon.height') || !Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deepAccess"])(bid, 'native.icon.width')) {
      return false;
    }
  }

  var requestedAssets = bidRequest.nativeParams;

  if (!requestedAssets) {
    return true;
  }

  var requiredAssets = Object.keys(requestedAssets).filter((function (key) {
    return requestedAssets[key].required;
  }));
  var returnedAssets = Object.keys(bid['native']).filter((function (key) {
    return bid['native'][key];
  }));
  return requiredAssets.every((function (asset) {
    return __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_includes___default()(returnedAssets, asset);
  }));
}
/*
 * Native responses may have associated impression or click trackers.
 * This retrieves the appropriate tracker urls for the given ad object and
 * fires them. As a native creatives may be in a cross-origin frame, it may be
 * necessary to invoke this function via postMessage. secureCreatives is
 * configured to fire this function when it receives a `message` of 'Prebid Native'
 * and an `adId` with the value of the `bid.adId`. When a message is posted with
 * these parameters, impression trackers are fired. To fire click trackers, the
 * message should contain an `action` set to 'click'.
 *
 * // Native creative template example usage
 * <a href="%%CLICK_URL_UNESC%%%%PATTERN:hb_native_linkurl%%"
 *    target="_blank"
 *    onclick="fireTrackers('click')">
 *    %%PATTERN:hb_native_title%%
 * </a>
 *
 * <script>
 *   function fireTrackers(action) {
 *     var message = {message: 'Prebid Native', adId: '%%PATTERN:hb_adid%%'};
 *     if (action === 'click') {message.action = 'click';} // fires click trackers
 *     window.parent.postMessage(JSON.stringify(message), '*');
 *   }
 *   fireTrackers(); // fires impressions when creative is loaded
 * </script>
 */

function fireNativeTrackers(message, adObject) {
  var trackers;

  if (message.action === 'click') {
    trackers = adObject['native'] && adObject['native'].clickTrackers;
  } else {
    trackers = adObject['native'] && adObject['native'].impressionTrackers;

    if (adObject['native'] && adObject['native'].javascriptTrackers) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["insertHtmlIntoIframe"])(adObject['native'].javascriptTrackers);
    }
  }

  (trackers || []).forEach(__WEBPACK_IMPORTED_MODULE_0__utils__["triggerPixel"]);
}
/**
 * Gets native targeting key-value pairs
 * @param {Object} bid
 * @return {Object} targeting
 */

function getNativeTargeting(bid) {
  var keyValues = {};
  Object.keys(bid['native']).forEach((function (asset) {
    var key = CONSTANTS.NATIVE_KEYS[asset];
    var value = bid['native'][asset]; // native image-type assets can be a string or an object with a url prop

    if (_typeof(value) === 'object' && value.url) {
      value = value.url;
    }

    if (key && value) {
      keyValues[key] = value;
    }
  }));
  return keyValues;
}

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export newUserSync */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return userSync; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // Set userSync default values

__WEBPACK_IMPORTED_MODULE_1__config__["config"].setDefaults({
  'userSync': {
    syncEnabled: true,
    pixelEnabled: true,
    syncsPerBidder: 5,
    syncDelay: 3000
  }
});
/**
 * Factory function which creates a new UserSyncPool.
 *
 * @param {UserSyncDependencies} userSyncDependencies Configuration options and dependencies which the
 *   UserSync object needs in order to behave properly.
 */

function newUserSync(userSyncDependencies) {
  var publicApi = {}; // A queue of user syncs for each adapter
  // Let getDefaultQueue() set the defaults

  var queue = getDefaultQueue(); // Whether or not user syncs have been trigger on this page load

  var hasFired = false; // How many bids for each adapter

  var numAdapterBids = {}; // for now - default both to false in case filterSettings config is absent/misconfigured

  var permittedPixels = {
    image: false,
    iframe: false // Use what is in config by default

  };
  var usConfig = userSyncDependencies.config; // Update if it's (re)set

  __WEBPACK_IMPORTED_MODULE_1__config__["config"].getConfig('userSync', (function (conf) {
    usConfig = _extends(usConfig, conf.userSync);
  }));
  /**
   * @function getDefaultQueue
   * @summary Returns the default empty queue
   * @private
   * @return {object} A queue with no syncs
   */

  function getDefaultQueue() {
    return {
      image: [],
      iframe: []
    };
  }
  /**
   * @function fireSyncs
   * @summary Trigger all user syncs in the queue
   * @private
   */


  function fireSyncs() {
    if (!usConfig.syncEnabled || !userSyncDependencies.browserSupportsCookies || hasFired) {
      return;
    }

    try {
      // Image pixels
      fireImagePixels(); // Iframe syncs

      loadIframes();
    } catch (e) {
      return __WEBPACK_IMPORTED_MODULE_0__utils__["logError"]('Error firing user syncs', e);
    } // Reset the user sync queue


    queue = getDefaultQueue();
    hasFired = true;
  }
  /**
   * @function fireImagePixels
   * @summary Loops through user sync pixels and fires each one
   * @private
   */


  function fireImagePixels() {
    if (!(usConfig.pixelEnabled || permittedPixels.image)) {
      return;
    } // Randomize the order of the pixels before firing
    // This is to avoid giving any bidder who has registered multiple syncs
    // any preferential treatment and balancing them out


    __WEBPACK_IMPORTED_MODULE_0__utils__["shuffle"](queue.image).forEach((function (sync) {
      var _sync = _slicedToArray(sync, 2),
          bidderName = _sync[0],
          trackingPixelUrl = _sync[1];

      __WEBPACK_IMPORTED_MODULE_0__utils__["logMessage"]("Invoking image pixel user sync for bidder: ".concat(bidderName)); // Create image object and add the src url

      __WEBPACK_IMPORTED_MODULE_0__utils__["triggerPixel"](trackingPixelUrl);
    }));
  }
  /**
   * @function loadIframes
   * @summary Loops through iframe syncs and loads an iframe element into the page
   * @private
   */


  function loadIframes() {
    if (!(usConfig.iframeEnabled || permittedPixels.iframe)) {
      return;
    } // Randomize the order of these syncs just like the pixels above


    __WEBPACK_IMPORTED_MODULE_0__utils__["shuffle"](queue.iframe).forEach((function (sync) {
      var _sync2 = _slicedToArray(sync, 2),
          bidderName = _sync2[0],
          iframeUrl = _sync2[1];

      __WEBPACK_IMPORTED_MODULE_0__utils__["logMessage"]("Invoking iframe user sync for bidder: ".concat(bidderName)); // Insert iframe into DOM

      __WEBPACK_IMPORTED_MODULE_0__utils__["insertUserSyncIframe"](iframeUrl);
    }));
  }
  /**
   * @function incrementAdapterBids
   * @summary Increment the count of user syncs queue for the adapter
   * @private
   * @params {object} numAdapterBids The object contain counts for all adapters
   * @params {string} bidder The name of the bidder adding a sync
   * @returns {object} The updated version of numAdapterBids
   */


  function incrementAdapterBids(numAdapterBids, bidder) {
    if (!numAdapterBids[bidder]) {
      numAdapterBids[bidder] = 1;
    } else {
      numAdapterBids[bidder] += 1;
    }

    return numAdapterBids;
  }
  /**
   * @function registerSync
   * @summary Add sync for this bidder to a queue to be fired later
   * @public
   * @params {string} type The type of the sync including image, iframe
   * @params {string} bidder The name of the adapter. e.g. "rubicon"
   * @params {string} url Either the pixel url or iframe url depending on the type
    * @example <caption>Using Image Sync</caption>
   * // registerSync(type, adapter, pixelUrl)
   * userSync.registerSync('image', 'rubicon', 'http://example.com/pixel')
   */


  publicApi.registerSync = function (type, bidder, url) {
    if (!usConfig.syncEnabled || !__WEBPACK_IMPORTED_MODULE_0__utils__["isArray"](queue[type])) {
      return __WEBPACK_IMPORTED_MODULE_0__utils__["logWarn"]("User sync type \"".concat(type, "\" not supported"));
    }

    if (!bidder) {
      return __WEBPACK_IMPORTED_MODULE_0__utils__["logWarn"]("Bidder is required for registering sync");
    }

    if (usConfig.syncsPerBidder !== 0 && Number(numAdapterBids[bidder]) >= usConfig.syncsPerBidder) {
      return __WEBPACK_IMPORTED_MODULE_0__utils__["logWarn"]("Number of user syncs exceeded for \"".concat(bidder, "\""));
    }

    if (usConfig.filterSettings) {
      if (shouldBidderBeBlocked(type, bidder)) {
        return __WEBPACK_IMPORTED_MODULE_0__utils__["logWarn"]("Bidder '".concat(bidder, "' is not permitted to register their userSync ").concat(type, " pixels as per filterSettings config."));
      } // TODO remove this else if code that supports deprecated fields (sometime in 2.x); for now - only run if filterSettings config is not present

    } else if (usConfig.enabledBidders && usConfig.enabledBidders.length && usConfig.enabledBidders.indexOf(bidder) < 0) {
      return __WEBPACK_IMPORTED_MODULE_0__utils__["logWarn"]("Bidder \"".concat(bidder, "\" not permitted to register their userSync pixels."));
    } // the bidder's pixel has passed all checks and is allowed to register


    queue[type].push([bidder, url]);
    numAdapterBids = incrementAdapterBids(numAdapterBids, bidder);
  };
  /**
   * @function shouldBidderBeBlocked
   * @summary Check filterSettings logic to determine if the bidder should be prevented from registering their userSync tracker
   * @private
   * @param {string} type The type of the sync; either image or iframe
   * @param {string} bidder The name of the adapter. e.g. "rubicon"
   * @returns {boolean} true => bidder is not allowed to register; false => bidder can register
    */


  function shouldBidderBeBlocked(type, bidder) {
    var filterConfig = usConfig.filterSettings; // apply the filter check if the config object is there (eg filterSettings.iframe exists) and if the config object is properly setup

    if (isFilterConfigValid(filterConfig, type)) {
      permittedPixels[type] = true;
      var activeConfig = filterConfig.all ? filterConfig.all : filterConfig[type];
      var biddersToFilter = activeConfig.bidders === '*' ? [bidder] : activeConfig.bidders;
      var filterType = activeConfig.filter || 'include'; // set default if undefined
      // return true if the bidder is either: not part of the include (ie outside the whitelist) or part of the exclude (ie inside the blacklist)

      var checkForFiltering = {
        'include': function include(bidders, bidder) {
          return !__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes___default()(bidders, bidder);
        },
        'exclude': function exclude(bidders, bidder) {
          return __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes___default()(bidders, bidder);
        }
      };
      return checkForFiltering[filterType](biddersToFilter, bidder);
    }

    return false;
  }
  /**
   * @function isFilterConfigValid
   * @summary Check if the filterSettings object in the userSync config is setup properly
   * @private
   * @param {object} filterConfig sub-config object taken from filterSettings
   * @param {string} type The type of the sync; either image or iframe
   * @returns {boolean} true => config is setup correctly, false => setup incorrectly or filterConfig[type] is not present
   */


  function isFilterConfigValid(filterConfig, type) {
    if (filterConfig.all && filterConfig[type]) {
      __WEBPACK_IMPORTED_MODULE_0__utils__["logWarn"]("Detected presence of the \"filterSettings.all\" and \"filterSettings.".concat(type, "\" in userSync config.  You cannot mix \"all\" with \"iframe/image\" configs; they are mutually exclusive."));
      return false;
    }

    var activeConfig = filterConfig.all ? filterConfig.all : filterConfig[type];
    var activeConfigName = filterConfig.all ? 'all' : type; // if current pixel type isn't part of the config's logic, skip rest of the config checks...
    // we return false to skip subsequent filter checks in shouldBidderBeBlocked() function

    if (!activeConfig) {
      return false;
    }

    var filterField = activeConfig.filter;
    var biddersField = activeConfig.bidders;

    if (filterField && filterField !== 'include' && filterField !== 'exclude') {
      __WEBPACK_IMPORTED_MODULE_0__utils__["logWarn"]("UserSync \"filterSettings.".concat(activeConfigName, ".filter\" setting '").concat(filterField, "' is not a valid option; use either 'include' or 'exclude'."));
      return false;
    }

    if (biddersField !== '*' && !(Array.isArray(biddersField) && biddersField.length > 0 && biddersField.every((function (bidderInList) {
      return __WEBPACK_IMPORTED_MODULE_0__utils__["isStr"](bidderInList) && bidderInList !== '*';
    })))) {
      __WEBPACK_IMPORTED_MODULE_0__utils__["logWarn"]("Detected an invalid setup in userSync \"filterSettings.".concat(activeConfigName, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."));
      return false;
    }

    return true;
  }
  /**
   * @function syncUsers
   * @summary Trigger all the user syncs based on publisher-defined timeout
   * @public
   * @params {int} timeout The delay in ms before syncing data - default 0
   */


  publicApi.syncUsers = function () {
    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (timeout) {
      return setTimeout(fireSyncs, Number(timeout));
    }

    fireSyncs();
  };
  /**
   * @function triggerUserSyncs
   * @summary A `syncUsers` wrapper for determining if enableOverride has been turned on
   * @public
   */


  publicApi.triggerUserSyncs = function () {
    if (usConfig.enableOverride) {
      publicApi.syncUsers();
    }
  };

  return publicApi;
}
var browserSupportsCookies = !__WEBPACK_IMPORTED_MODULE_0__utils__["isSafariBrowser"]() && __WEBPACK_IMPORTED_MODULE_0__utils__["cookiesAreEnabled"]();
var userSync = newUserSync({
  config: __WEBPACK_IMPORTED_MODULE_1__config__["config"].getConfig('userSync'),
  browserSupportsCookies: browserSupportsCookies
});
/**
 * @typedef {Object} UserSyncDependencies
 *
 * @property {UserSyncConfig} config
 * @property {boolean} browserSupportsCookies True if the current browser supports cookies, and false otherwise.
 */

/**
 * @typedef {Object} UserSyncConfig
 *
 * @property {boolean} enableOverride
 * @property {boolean} syncEnabled
 * @property {boolean} pixelEnabled
 * @property {boolean} iframeEnabled
 * @property {int} syncsPerBidder
 * @property {string[]} enabledBidders
 * @property {Object} filterSettings
 */

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = store;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCacheUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_config__ = __webpack_require__(3);
/**
 * This module interacts with the server used to cache video ad content to be restored later.
 * At a high level, the expected workflow goes like this:
 *
 *   - Request video ads from Bidders
 *   - Generate IDs for each valid bid, and cache the key/value pair on the server.
 *   - Return these IDs so that publishers can use them to fetch the bids later.
 *
 * This trickery helps integrate with ad servers, which set character limits on request params.
 */


/**
 * @typedef {object} CacheableUrlBid
 * @property {string} vastUrl A URL which loads some valid VAST XML.
 */

/**
 * @typedef {object} CacheablePayloadBid
 * @property {string} vastXml Some VAST XML which loads an ad in a video player.
 */

/**
 * A CacheableBid describes the types which the videoCache can store.
 *
 * @typedef {CacheableUrlBid|CacheablePayloadBid} CacheableBid
 */

/**
 * Function which wraps a URI that serves VAST XML, so that it can be loaded.
 *
 * @param {string} uri The URI where the VAST content can be found.
 * @param {string} impUrl An impression tracker URL for the delivery of the video ad
 * @return A VAST URL which loads XML from the given URI.
 */

function wrapURI(uri, impUrl) {
  // Technically, this is vulnerable to cross-script injection by sketchy vastUrl bids.
  // We could make sure it's a valid URI... but since we're loading VAST XML from the
  // URL they provide anyway, that's probably not a big deal.
  var vastImp = impUrl ? "<![CDATA[".concat(impUrl, "]]>") : "";
  return "<VAST version=\"3.0\">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[".concat(uri, "]]></VASTAdTagURI>\n        <Impression>").concat(vastImp, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>");
}
/**
 * Wraps a bid in the format expected by the prebid-server endpoints, or returns null if
 * the bid can't be converted cleanly.
 *
 * @param {CacheableBid} bid
 */


function toStorageRequest(bid) {
  var vastValue = bid.vastXml ? bid.vastXml : wrapURI(bid.vastUrl, bid.vastImpUrl);
  return {
    type: 'xml',
    value: vastValue,
    ttlseconds: Number(bid.ttl)
  };
}
/**
 * A function which should be called with the results of the storage operation.
 *
 * @callback videoCacheStoreCallback
 *
 * @param {Error} [error] The error, if one occurred.
 * @param {?string[]} uuids An array of unique IDs. The array will have one element for each bid we were asked
 *   to store. It may include null elements if some of the bids were malformed, or an error occurred.
 *   Each non-null element in this array is a valid input into the retrieve function, which will fetch
 *   some VAST XML which can be used to render this bid's ad.
 */

/**
 * A function which bridges the APIs between the videoCacheStoreCallback and our ajax function's API.
 *
 * @param {videoCacheStoreCallback} done A callback to the "store" function.
 * @return {Function} A callback which interprets the cache server's responses, and makes up the right
 *   arguments for our callback.
 */


function shimStorageCallback(done) {
  return {
    success: function success(responseBody) {
      var ids;

      try {
        ids = JSON.parse(responseBody).responses;
      } catch (e) {
        done(e, []);
        return;
      }

      if (ids) {
        done(null, ids);
      } else {
        done(new Error("The cache server didn't respond with a responses property."), []);
      }
    },
    error: function error(statusText, responseBody) {
      done(new Error("Error storing video ad in the cache: ".concat(statusText, ": ").concat(JSON.stringify(responseBody))), []);
    }
  };
}
/**
 * If the given bid is for a Video ad, generate a unique ID and cache it somewhere server-side.
 *
 * @param {CacheableBid[]} bids A list of bid objects which should be cached.
 * @param {videoCacheStoreCallback} [done] An optional callback which should be executed after
 *   the data has been stored in the cache.
 */


function store(bids, done) {
  var requestData = {
    puts: bids.map(toStorageRequest)
  };
  Object(__WEBPACK_IMPORTED_MODULE_0__ajax__["a" /* ajax */])(__WEBPACK_IMPORTED_MODULE_1__src_config__["config"].getConfig('cache.url'), shimStorageCallback(done), JSON.stringify(requestData), {
    contentType: 'text/plain',
    withCredentials: true
  });
}
function getCacheUrl(id) {
  return "".concat(__WEBPACK_IMPORTED_MODULE_1__src_config__["config"].getConfig('cache.url'), "?uuid=").concat(id);
}

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return NATIVE; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", (function() { return VIDEO; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return BANNER; }));
/**
 * This file contains the valid Media Types in Prebid.
 *
 * All adapters are assumed to support banner ads. Other media types are specified by Adapters when they
 * register themselves with prebid-core.
 */

/**
 * @typedef {('native'|'video'|'banner')} MediaType
 */

/** @type MediaType */
var NATIVE = 'native';
/** @type MediaType */

var VIDEO = 'video';
/** @type MediaType */

var BANNER = 'banner';

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return hooks; }));
/* harmony export (immutable) */ __webpack_exports__["a"] = createHook;
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @typedef {function} HookedFunction
 * @property {function(function(), [number])} addHook A method that takes a new function to attach as a hook
 *  to the HookedFunction
 * @property {function(function())} removeHook A method to remove attached hooks
 */

/**
 * A map of global hook methods to allow easy extension of hooked functions that are intended to be extended globally
 * @type {{}}
 */
var hooks = {};
/**
 * A utility function for allowing a regular function to be extensible with additional hook functions
 * @param {string} type The method for applying all attached hooks when this hooked function is called
 * @param {function()} fn The function to make hookable
 * @param {string} hookName If provided this allows you to register a name for a global hook to have easy access to
 *  the addHook and removeHook methods for that hook (which are usually accessed as methods on the function itself)
 * @returns {HookedFunction} A new function that implements the HookedFunction interface
 */

function createHook(type, fn, hookName) {
  var _hooks = [{
    fn: fn,
    priority: 0
  }];
  var types = {
    sync: function sync() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _hooks.forEach((function (hook) {
        hook.fn.apply(_this, args);
      }));
    },
    asyncSeries: function asyncSeries() {
      var _this2 = this;

      var curr = 0;

      var asyncSeriesNext = function asyncSeriesNext() {
        var hook = _hooks[++curr];

        if (_typeof(hook) === 'object' && typeof hook.fn === 'function') {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return hook.fn.apply(_this2, args.concat(asyncSeriesNext));
        }
      };

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _hooks[curr].fn.apply(this, args.concat(asyncSeriesNext));
    }
  };

  if (!types[type]) {
    throw 'invalid hook type';
  }

  var methods = {
    addHook: function addHook(fn) {
      var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      if (typeof fn === 'function') {
        _hooks.push({
          fn: fn,
          priority: priority
        });

        _hooks.sort((function (a, b) {
          return b.priority - a.priority;
        }));
      }
    },
    removeHook: function removeHook(removeFn) {
      _hooks = _hooks.filter((function (hook) {
        return hook.fn === fn || hook.fn !== removeFn;
      }));
    },
    hasHook: function hasHook(fn) {
      return _hooks.some((function (hook) {
        return hook.fn === fn;
      }));
    }
  };

  if (typeof hookName === 'string') {
    hooks[hookName] = methods;
  }

  function hookedFn() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    if (_hooks.length === 1 && _hooks[0].fn === fn) {
      return fn.apply(this, args);
    }

    return types[type].apply(this, args);
  }

  return _extends(hookedFn, methods);
}

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
module.exports = __webpack_require__(13).Array.findIndex;


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(33)((function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
}));


/***/ }),

/***/ 23:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(61)('wks');
var uid = __webpack_require__(63);
var Symbol = __webpack_require__(19).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Adapter;
function Adapter(code) {
  var bidderCode = code;

  function setBidderCode(code) {
    bidderCode = code;
  }

  function getBidderCode() {
    return bidderCode;
  }

  function callBids() {}

  return {
    callBids: callBids,
    setBidderCode: setBidderCode,
    getBidderCode: getBidderCode
  };
}

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadExternalScript;
/* harmony export (immutable) */ __webpack_exports__["b"] = loadScript;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_includes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);


var _requestCache = {};
var _vendorWhitelist = ['criteo'];
/**
 * Loads external javascript. Can only be used if external JS is approved by Prebid. See https://github.com/prebid/prebid-js-external-js-template#policy
 * Each unique URL will be loaded at most 1 time.
 * @param {string} url the url to load
 * @param {string} moduleCode bidderCode or module code of the module requesting this resource
 */

function loadExternalScript(url, moduleCode) {
  if (!moduleCode || !url) {
    __WEBPACK_IMPORTED_MODULE_1__utils__["logError"]('cannot load external script without url and moduleCode');
    return;
  }

  if (!__WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_includes___default()(_vendorWhitelist, moduleCode)) {
    __WEBPACK_IMPORTED_MODULE_1__utils__["logError"]("".concat(moduleCode, " not whitelisted for loading external JavaScript"));
    return;
  } // only load each asset once


  if (_requestCache[url]) {
    return;
  }

  __WEBPACK_IMPORTED_MODULE_1__utils__["logWarn"]("module ".concat(moduleCode, " is loading external JavaScript"));
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = url;
  __WEBPACK_IMPORTED_MODULE_1__utils__["insertElement"](script);
  _requestCache[url] = true;
}
;
/**
 *
 * @deprecated
 * Do not use this function. Will be removed in the next release. If external resources are required, use #loadExternalScript instead.
 */

function loadScript(tagSrc, callback, cacheRequest) {
  // var noop = () => {};
  //
  // callback = callback || noop;
  if (!tagSrc) {
    __WEBPACK_IMPORTED_MODULE_1__utils__["logError"]('Error attempting to request empty URL', 'adloader.js:loadScript');
    return;
  }

  if (cacheRequest) {
    if (_requestCache[tagSrc]) {
      if (callback && typeof callback === 'function') {
        if (_requestCache[tagSrc].loaded) {
          // invokeCallbacks immediately
          callback();
        } else {
          // queue the callback
          _requestCache[tagSrc].callbacks.push(callback);
        }
      }
    } else {
      _requestCache[tagSrc] = {
        loaded: false,
        callbacks: []
      };

      if (callback && typeof callback === 'function') {
        _requestCache[tagSrc].callbacks.push(callback);
      }

      requestResource(tagSrc, (function () {
        _requestCache[tagSrc].loaded = true;

        try {
          for (var i = 0; i < _requestCache[tagSrc].callbacks.length; i++) {
            _requestCache[tagSrc].callbacks[i]();
          }
        } catch (e) {
          __WEBPACK_IMPORTED_MODULE_1__utils__["logError"]('Error executing callback', 'adloader.js:loadScript', e);
        }
      }));
    }
  } else {
    // trigger one time request
    requestResource(tagSrc, callback);
  }
}
;

function requestResource(tagSrc, callback) {
  var jptScript = document.createElement('script');
  jptScript.type = 'text/javascript';
  jptScript.async = true; // Execute a callback if necessary

  if (callback && typeof callback === 'function') {
    if (jptScript.readyState) {
      jptScript.onreadystatechange = function () {
        if (jptScript.readyState === 'loaded' || jptScript.readyState === 'complete') {
          jptScript.onreadystatechange = null;
          callback();
        }
      };
    } else {
      jptScript.onload = function () {
        callback();
      };
    }
  }

  jptScript.src = tagSrc; // add the new script tag to the page

  var elToAppend = document.getElementsByTagName('head');
  elToAppend = elToAppend.length ? elToAppend : document.getElementsByTagName('body');

  if (elToAppend.length) {
    elToAppend = elToAppend[0];
    elToAppend.insertBefore(jptScript, elToAppend.firstChild);
  }
}

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export newAuctionManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return auctionManager; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auction__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find__);
/**
 * AuctionManager modules is responsible for creating auction instances.
 * This module is the gateway for Prebid core to access auctions.
 * It stores all created instances of auction and can be used to get consolidated values from auction.
 */

/**
 * @typedef {Object} AuctionManager
 *
 * @property {function(): Array} getBidsRequested - returns consolidated bid requests
 * @property {function(): Array} getBidsReceived - returns consolidated bid received
 * @property {function(): Array} getAdUnits - returns consolidated adUnits
 * @property {function(): Array} getAdUnitCodes - returns consolidated adUnitCodes
 * @property {function(): Object} createAuction - creates auction instance and stores it for future reference
 * @property {function(): Object} findBidByAdId - find bid received by adId. This function will be called by $$PREBID_GLOBAL$$.renderAd
 * @property {function(): Object} getStandardBidderAdServerTargeting - returns standard bidder targeting for all the adapters. Refer http://prebid.org/dev-docs/publisher-api-reference.html#module_pbjs.bidderSettings for more details
 */




var CONSTANTS = __webpack_require__(4);
/**
 * Creates new instance of auctionManager. There will only be one instance of auctionManager but
 * a factory is created to assist in testing.
 *
 * @returns {AuctionManager} auctionManagerInstance
 */


function newAuctionManager() {
  var _auctions = [];
  var auctionManager = {};

  auctionManager.addWinningBid = function (bid) {
    var auction = __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find___default()(_auctions, (function (auction) {
      return auction.getAuctionId() === bid.auctionId;
    }));

    if (auction) {
      auction.addWinningBid(bid);
    } else {
      utils.logWarn("Auction not found when adding winning bid");
    }
  };

  auctionManager.getAllWinningBids = function () {
    return _auctions.map((function (auction) {
      return auction.getWinningBids();
    })).reduce(__WEBPACK_IMPORTED_MODULE_0__utils__["flatten"], []);
  };

  auctionManager.getBidsRequested = function () {
    return _auctions.map((function (auction) {
      return auction.getBidRequests();
    })).reduce(__WEBPACK_IMPORTED_MODULE_0__utils__["flatten"], []);
  };

  auctionManager.getNoBids = function () {
    return _auctions.map((function (auction) {
      return auction.getNoBids();
    })).reduce(__WEBPACK_IMPORTED_MODULE_0__utils__["flatten"], []);
  };

  auctionManager.getBidsReceived = function () {
    return _auctions.map((function (auction) {
      if (auction.getAuctionStatus() === __WEBPACK_IMPORTED_MODULE_1__auction__["a" /* AUCTION_COMPLETED */]) {
        return auction.getBidsReceived();
      }
    })).reduce(__WEBPACK_IMPORTED_MODULE_0__utils__["flatten"], []).filter((function (bid) {
      return bid;
    }));
  };

  auctionManager.getAdUnits = function () {
    return _auctions.map((function (auction) {
      return auction.getAdUnits();
    })).reduce(__WEBPACK_IMPORTED_MODULE_0__utils__["flatten"], []);
  };

  auctionManager.getAdUnitCodes = function () {
    return _auctions.map((function (auction) {
      return auction.getAdUnitCodes();
    })).reduce(__WEBPACK_IMPORTED_MODULE_0__utils__["flatten"], []).filter(__WEBPACK_IMPORTED_MODULE_0__utils__["uniques"]);
  };

  auctionManager.createAuction = function (_ref) {
    var adUnits = _ref.adUnits,
        adUnitCodes = _ref.adUnitCodes,
        callback = _ref.callback,
        cbTimeout = _ref.cbTimeout,
        labels = _ref.labels;
    var auction = Object(__WEBPACK_IMPORTED_MODULE_1__auction__["d" /* newAuction */])({
      adUnits: adUnits,
      adUnitCodes: adUnitCodes,
      callback: callback,
      cbTimeout: cbTimeout,
      labels: labels
    });

    _addAuction(auction);

    return auction;
  };

  auctionManager.findBidByAdId = function (adId) {
    return __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find___default()(_auctions.map((function (auction) {
      return auction.getBidsReceived();
    })).reduce(__WEBPACK_IMPORTED_MODULE_0__utils__["flatten"], []), (function (bid) {
      return bid.adId === adId;
    }));
  };

  auctionManager.getStandardBidderAdServerTargeting = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_1__auction__["c" /* getStandardBidderSettings */])()[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING];
  };

  auctionManager.setStatusForBids = function (adId, status) {
    var bid = auctionManager.findBidByAdId(adId);
    if (bid) bid.status = status;

    if (bid && status === CONSTANTS.BID_STATUS.BID_TARGETING_SET) {
      var auction = __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find___default()(_auctions, (function (auction) {
        return auction.getAuctionId() === bid.auctionId;
      }));
      if (auction) auction.setBidTargeting(bid);
    }
  };

  function _addAuction(auction) {
    _auctions.push(auction);
  }

  return auctionManager;
}
var auctionManager = newAuctionManager();

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM", (function() { return RANDOM; }));
/* harmony export (immutable) */ __webpack_exports__["newConfig"] = newConfig;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", (function() { return config; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cpmBucketManager__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_find__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hook__ = __webpack_require__(20);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * Module for getting and setting Prebid configuration.
 *
 * Prebid previously defined these properties directly on the global object:
 * pbjs.logging = true;
 *
 * Defining and access properties in this way is now deprecated, but these will
 * continue to work during a deprecation window.
 */





var utils = __webpack_require__(0);

var DEFAULT_DEBUG = false;
var DEFAULT_BIDDER_TIMEOUT = 3000;
var DEFAULT_PUBLISHER_DOMAIN = window.location.origin;
var DEFAULT_ENABLE_SEND_ALL_BIDS = true;
var DEFAULT_DISABLE_AJAX_TIMEOUT = false;
var DEFAULT_BID_CACHE = true;
var DEFAULT_TIMEOUTBUFFER = 400;
var RANDOM = 'random';
var FIXED = 'fixed';
var VALID_ORDERS = {};
VALID_ORDERS[RANDOM] = true;
VALID_ORDERS[FIXED] = true;
var DEFAULT_BIDDER_SEQUENCE = RANDOM;
var GRANULARITY_OPTIONS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  AUTO: 'auto',
  DENSE: 'dense',
  CUSTOM: 'custom'
};
var ALL_TOPICS = '*';
/**
 * @typedef {object} PrebidConfig
 *
 * @property {string} cache.url Set a url if we should use prebid-cache to store video bids before adding
 *   bids to the auction. **NOTE** This must be set if you want to use the dfpAdServerVideo module.
 */

function newConfig() {
  var listeners = [];
  var defaults;
  var config;

  function resetConfig() {
    defaults = {};
    config = {
      // `debug` is equivalent to legacy `pbjs.logging` property
      _debug: DEFAULT_DEBUG,

      get debug() {
        return this._debug;
      },

      set debug(val) {
        this._debug = val;
      },

      // default timeout for all bids
      _bidderTimeout: DEFAULT_BIDDER_TIMEOUT,

      get bidderTimeout() {
        return this._bidderTimeout;
      },

      set bidderTimeout(val) {
        this._bidderTimeout = val;
      },

      // domain where prebid is running for cross domain iframe communication
      _publisherDomain: DEFAULT_PUBLISHER_DOMAIN,

      get publisherDomain() {
        return this._publisherDomain;
      },

      set publisherDomain(val) {
        this._publisherDomain = val;
      },

      // calls existing function which may be moved after deprecation
      _priceGranularity: GRANULARITY_OPTIONS.MEDIUM,

      set priceGranularity(val) {
        if (validatePriceGranularity(val)) {
          if (typeof val === 'string') {
            this._priceGranularity = hasGranularity(val) ? val : GRANULARITY_OPTIONS.MEDIUM;
          } else if (_typeof(val) === 'object') {
            this._customPriceBucket = val;
            this._priceGranularity = GRANULARITY_OPTIONS.CUSTOM;
            utils.logMessage('Using custom price granularity');
          }
        }
      },

      get priceGranularity() {
        return this._priceGranularity;
      },

      _customPriceBucket: {},

      get customPriceBucket() {
        return this._customPriceBucket;
      },

      _mediaTypePriceGranularity: {},

      get mediaTypePriceGranularity() {
        return this._mediaTypePriceGranularity;
      },

      set mediaTypePriceGranularity(val) {
        var _this = this;

        this._mediaTypePriceGranularity = Object.keys(val).reduce((function (aggregate, item) {
          if (validatePriceGranularity(val[item])) {
            if (typeof val === 'string') {
              aggregate[item] = hasGranularity(val[item]) ? val[item] : _this._priceGranularity;
            } else if (_typeof(val) === 'object') {
              aggregate[item] = val[item];
              utils.logMessage("Using custom price granularity for ".concat(item));
            }
          } else {
            utils.logWarn("Invalid price granularity for media type: ".concat(item));
          }

          return aggregate;
        }), {});
      },

      _sendAllBids: DEFAULT_ENABLE_SEND_ALL_BIDS,

      get enableSendAllBids() {
        return this._sendAllBids;
      },

      set enableSendAllBids(val) {
        this._sendAllBids = val;
      },

      _useBidCache: DEFAULT_BID_CACHE,

      get useBidCache() {
        return this._useBidCache;
      },

      set useBidCache(val) {
        this._useBidCache = val;
      },

      _bidderSequence: DEFAULT_BIDDER_SEQUENCE,

      get bidderSequence() {
        return this._bidderSequence;
      },

      set bidderSequence(val) {
        if (VALID_ORDERS[val]) {
          this._bidderSequence = val;
        } else {
          utils.logWarn("Invalid order: ".concat(val, ". Bidder Sequence was not set."));
        }
      },

      // timeout buffer to adjust for bidder CDN latency
      _timeoutBuffer: DEFAULT_TIMEOUTBUFFER,

      get timeoutBuffer() {
        return this._timeoutBuffer;
      },

      set timeoutBuffer(val) {
        this._timeoutBuffer = val;
      },

      _disableAjaxTimeout: DEFAULT_DISABLE_AJAX_TIMEOUT,

      get disableAjaxTimeout() {
        return this._disableAjaxTimeout;
      },

      set disableAjaxTimeout(val) {
        this._disableAjaxTimeout = val;
      }

    };

    function hasGranularity(val) {
      return __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_find___default()(Object.keys(GRANULARITY_OPTIONS), (function (option) {
        return val === GRANULARITY_OPTIONS[option];
      }));
    }

    function validatePriceGranularity(val) {
      if (!val) {
        utils.logError('Prebid Error: no value passed to `setPriceGranularity()`');
        return false;
      }

      if (typeof val === 'string') {
        if (!hasGranularity(val)) {
          utils.logWarn('Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.');
        }
      } else if (_typeof(val) === 'object') {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__cpmBucketManager__["b" /* isValidPriceConfig */])(val)) {
          utils.logError('Invalid custom price value passed to `setPriceGranularity()`');
          return false;
        }
      }

      return true;
    }
  }
  /*
   * Returns configuration object if called without parameters,
   * or single configuration property if given a string matching a configuration
   * property name.  Allows deep access e.g. getConfig('currency.adServerCurrency')
   *
   * If called with callback parameter, or a string and a callback parameter,
   * subscribes to configuration updates. See `subscribe` function for usage.
   */


  function getConfig() {
    if (arguments.length <= 1 && typeof (arguments.length <= 0 ? undefined : arguments[0]) !== 'function') {
      var option = arguments.length <= 0 ? undefined : arguments[0];
      return option ? utils.deepAccess(config, option) : config;
    }

    return subscribe.apply(void 0, arguments);
  }
  /*
   * Sets configuration given an object containing key-value pairs and calls
   * listeners that were added by the `subscribe` function
   */


  var setConfig = Object(__WEBPACK_IMPORTED_MODULE_3__hook__["a" /* createHook */])('asyncSeries', (function setConfig(options) {
    if (_typeof(options) !== 'object') {
      utils.logError('setConfig options must be an object');
      return;
    }

    var topics = Object.keys(options);
    var topicalConfig = {};
    topics.forEach((function (topic) {
      var option = options[topic];

      if (_typeof(defaults[topic]) === 'object' && _typeof(option) === 'object') {
        option = _extends({}, defaults[topic], option);
      }

      topicalConfig[topic] = config[topic] = option;
    }));
    callSubscribers(topicalConfig);
  }));
  /**
   * Sets configuration defaults which setConfig values can be applied on top of
   * @param {object} options
   */

  function setDefaults(options) {
    if (_typeof(defaults) !== 'object') {
      utils.logError('defaults must be an object');
      return;
    }

    _extends(defaults, options); // Add default values to config as well


    _extends(config, options);
  }
  /*
   * Adds a function to a set of listeners that are invoked whenever `setConfig`
   * is called. The subscribed function will be passed the options object that
   * was used in the `setConfig` call. Topics can be subscribed to to only get
   * updates when specific properties are updated by passing a topic string as
   * the first parameter.
   *
   * Returns an `unsubscribe` function for removing the subscriber from the
   * set of listeners
   *
   * Example use:
   * // subscribe to all configuration changes
   * subscribe((config) => console.log('config set:', config));
   *
   * // subscribe to only 'logging' changes
   * subscribe('logging', (config) => console.log('logging set:', config));
   *
   * // unsubscribe
   * const unsubscribe = subscribe(...);
   * unsubscribe(); // no longer listening
   */


  function subscribe(topic, listener) {
    var callback = listener;

    if (typeof topic !== 'string') {
      // first param should be callback function in this case,
      // meaning it gets called for any config change
      callback = topic;
      topic = ALL_TOPICS;
    }

    if (typeof callback !== 'function') {
      utils.logError('listener must be a function');
      return;
    }

    listeners.push({
      topic: topic,
      callback: callback
    }); // save and call this function to remove the listener

    return function unsubscribe() {
      listeners.splice(listeners.indexOf(listener), 1);
    };
  }
  /*
   * Calls listeners that were added by the `subscribe` function
   */


  function callSubscribers(options) {
    var TOPICS = Object.keys(options); // call subscribers of a specific topic, passing only that configuration

    listeners.filter((function (listener) {
      return __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes___default()(TOPICS, listener.topic);
    })).forEach((function (listener) {
      listener.callback(_defineProperty({}, listener.topic, options[listener.topic]));
    })); // call subscribers that didn't give a topic, passing everything that was set

    listeners.filter((function (listener) {
      return listener.topic === ALL_TOPICS;
    })).forEach((function (listener) {
      return listener.callback(options);
    }));
  }

  resetConfig();
  return {
    getConfig: getConfig,
    setConfig: setConfig,
    setDefaults: setDefaults,
    resetConfig: resetConfig
  };
}
var config = newConfig();

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return getPriceBucketString; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return isValidPriceConfig; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_find__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_find__);


var utils = __webpack_require__(0);

var _defaultPrecision = 2;
var _lgPriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 5,
    'increment': 0.5
  }]
};
var _mgPriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 20,
    'increment': 0.1
  }]
};
var _hgPriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 20,
    'increment': 0.01
  }]
};
var _densePriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 3,
    'increment': 0.01
  }, {
    'min': 3,
    'max': 8,
    'increment': 0.05
  }, {
    'min': 8,
    'max': 20,
    'increment': 0.5
  }]
};
var _autoPriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 5,
    'increment': 0.05
  }, {
    'min': 5,
    'max': 10,
    'increment': 0.1
  }, {
    'min': 10,
    'max': 20,
    'increment': 0.5
  }]
};

function getPriceBucketString(cpm, customConfig) {
  var granularityMultiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var cpmFloat = parseFloat(cpm);

  if (isNaN(cpmFloat)) {
    cpmFloat = '';
  }

  return {
    low: cpmFloat === '' ? '' : getCpmStringValue(cpm, _lgPriceConfig, granularityMultiplier),
    med: cpmFloat === '' ? '' : getCpmStringValue(cpm, _mgPriceConfig, granularityMultiplier),
    high: cpmFloat === '' ? '' : getCpmStringValue(cpm, _hgPriceConfig, granularityMultiplier),
    auto: cpmFloat === '' ? '' : getCpmStringValue(cpm, _autoPriceConfig, granularityMultiplier),
    dense: cpmFloat === '' ? '' : getCpmStringValue(cpm, _densePriceConfig, granularityMultiplier),
    custom: cpmFloat === '' ? '' : getCpmStringValue(cpm, customConfig, granularityMultiplier)
  };
}

function getCpmStringValue(cpm, config, granularityMultiplier) {
  var cpmStr = '';

  if (!isValidPriceConfig(config)) {
    return cpmStr;
  }

  var cap = config.buckets.reduce((function (prev, curr) {
    if (prev.max > curr.max) {
      return prev;
    }

    return curr;
  }), {
    'max': 0
  });
  var bucket = __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_find___default()(config.buckets, (function (bucket) {
    if (cpm > cap.max * granularityMultiplier) {
      // cpm exceeds cap, just return the cap.
      var precision = bucket.precision;

      if (typeof precision === 'undefined') {
        precision = _defaultPrecision;
      }

      cpmStr = (bucket.max * granularityMultiplier).toFixed(precision);
    } else if (cpm <= bucket.max * granularityMultiplier && cpm >= bucket.min * granularityMultiplier) {
      return bucket;
    }
  }));

  if (bucket) {
    cpmStr = getCpmTarget(cpm, bucket, granularityMultiplier);
  }

  return cpmStr;
}

function isValidPriceConfig(config) {
  if (utils.isEmpty(config) || !config.buckets || !Array.isArray(config.buckets)) {
    return false;
  }

  var isValid = true;
  config.buckets.forEach((function (bucket) {
    if (typeof bucket.min === 'undefined' || !bucket.max || !bucket.increment) {
      isValid = false;
    }
  }));
  return isValid;
}

function getCpmTarget(cpm, bucket, granularityMultiplier) {
  var precision = typeof bucket.precision !== 'undefined' ? bucket.precision : _defaultPrecision;
  var increment = bucket.increment * granularityMultiplier;
  var bucketMin = bucket.min * granularityMultiplier; // start increments at the bucket min and then add bucket min back to arrive at the correct rounding
  // note - we're padding the values to avoid using decimals in the math prior to flooring
  // this is done as JS can return values slightly below the expected mark which would skew the price bucket target
  //   (eg 4.01 / 0.01 = 400.99999999999994)
  // min precison should be 2 to move decimal place over.

  var pow = Math.pow(10, precision + 2);
  var cpmToFloor = (cpm * pow - bucketMin * pow) / (increment * pow);
  var cpmTarget = Math.floor(cpmToFloor) * increment + bucketMin; // force to 10 decimal places to deal with imprecise decimal/binary conversions
  //    (for example 0.1 * 3 = 0.30000000000000004)

  cpmTarget = Number(cpmTarget.toFixed(10));
  return cpmTarget.toFixed(precision);
}



/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(49);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(32);
var IObject = __webpack_require__(35);
var toObject = __webpack_require__(58);
var toLength = __webpack_require__(36);
var asc = __webpack_require__(59);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(23);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(37);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(23);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setSizeConfig */
/* harmony export (immutable) */ __webpack_exports__["a"] = getLabels;
/* harmony export (immutable) */ __webpack_exports__["c"] = sizeSupported;
/* harmony export (immutable) */ __webpack_exports__["b"] = resolveStatus;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var sizeConfig = [];
/**
 * @typedef {object} SizeConfig
 *
 * @property {string} [mediaQuery] A CSS media query string that will to be interpreted by window.matchMedia.  If the
 *  media query matches then the this config will be active and sizesSupported will filter bid and adUnit sizes.  If
 *  this property is not present then this SizeConfig will only be active if triggered manually by a call to
 *  pbjs.setConfig({labels:['label']) specifying one of the labels present on this SizeConfig.
 * @property {Array<Array>} sizesSupported The sizes to be accepted if this SizeConfig is enabled.
 * @property {Array<string>} labels The active labels to match this SizeConfig to an adUnits and/or bidders.
 */

/**
 *
 * @param {Array<SizeConfig>} config
 */

function setSizeConfig(config) {
  sizeConfig = config;
}
__WEBPACK_IMPORTED_MODULE_0__config__["config"].getConfig('sizeConfig', (function (config) {
  return setSizeConfig(config.sizeConfig);
}));
/**
 * Returns object describing the status of labels on the adUnit or bidder along with labels passed into requestBids
 * @param bidOrAdUnit the bidder or adUnit to get label info on
 * @param activeLabels the labels passed to requestBids
 * @returns {LabelDescriptor}
 */

function getLabels(bidOrAdUnit, activeLabels) {
  if (bidOrAdUnit.labelAll) {
    return {
      labelAll: true,
      labels: bidOrAdUnit.labelAll,
      activeLabels: activeLabels
    };
  }

  return {
    labelAll: false,
    labels: bidOrAdUnit.labelAny,
    activeLabels: activeLabels
  };
}
/**
 * Determines whether a single size is valid given configured sizes
 * @param {Array} size [width, height]
 * @param {Array<SizeConfig>} configs
 * @returns {boolean}
 */

function sizeSupported(size) {
  var configs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sizeConfig;
  var maps = evaluateSizeConfig(configs);

  if (!maps.shouldFilter) {
    return true;
  }

  return !!maps.sizesSupported[size];
}
/**
 * Resolves the unique set of the union of all sizes and labels that are active from a SizeConfig.mediaQuery match
 * @param {Array<string>} labels Labels specified on adUnit or bidder
 * @param {boolean} labelAll if true, all labels must match to be enabled
 * @param {Array<string>} activeLabels Labels passed in through requestBids
 * @param {object} mediaTypes A mediaTypes object describing the various media types (banner, video, native)
 * @param {Array<Array<number>>} sizes Sizes specified on adUnit (deprecated)
 * @param {Array<SizeConfig>} configs
 * @returns {{labels: Array<string>, sizes: Array<Array<number>>}}
 */

function resolveStatus() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$labels = _ref.labels,
      labels = _ref$labels === void 0 ? [] : _ref$labels,
      _ref$labelAll = _ref.labelAll,
      labelAll = _ref$labelAll === void 0 ? false : _ref$labelAll,
      _ref$activeLabels = _ref.activeLabels,
      activeLabels = _ref$activeLabels === void 0 ? [] : _ref$activeLabels;

  var mediaTypes = arguments.length > 1 ? arguments[1] : undefined;
  var sizes = arguments.length > 2 ? arguments[2] : undefined;
  var configs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : sizeConfig;
  var maps = evaluateSizeConfig(configs);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["isPlainObject"])(mediaTypes)) {
    // add support for deprecated adUnit.sizes by creating correct banner mediaTypes if they don't already exist
    if (sizes) {
      mediaTypes = {
        banner: {
          sizes: sizes
        }
      };
    } else {
      mediaTypes = {};
    }
  } else {
    mediaTypes = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["deepClone"])(mediaTypes);
  }

  var oldSizes = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["deepAccess"])(mediaTypes, 'banner.sizes');

  if (maps.shouldFilter && oldSizes) {
    mediaTypes.banner.sizes = oldSizes.filter((function (size) {
      return maps.sizesSupported[size];
    }));
  }

  var allMediaTypes = Object.keys(mediaTypes);
  var results = {
    active: allMediaTypes.length > 1 || allMediaTypes.length === 1 && allMediaTypes[0] !== 'banner' || allMediaTypes[0] === 'banner' && Object(__WEBPACK_IMPORTED_MODULE_1__utils__["deepAccess"])(mediaTypes, 'banner.sizes.length') > 0 && (labels.length === 0 || !labelAll && (labels.some((function (label) {
      return maps.labels[label];
    })) || labels.some((function (label) {
      return __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes___default()(activeLabels, label);
    }))) || labelAll && labels.reduce((function (result, label) {
      return !result ? result : maps.labels[label] || __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes___default()(activeLabels, label);
    }), true)),
    mediaTypes: mediaTypes
  };

  if (oldSizes && oldSizes.length !== mediaTypes.banner.sizes.length) {
    results.filterResults = {
      before: oldSizes,
      after: mediaTypes.banner.sizes
    };
  }

  return results;
}

function evaluateSizeConfig(configs) {
  return configs.reduce((function (results, config) {
    if (_typeof(config) === 'object' && typeof config.mediaQuery === 'string') {
      if (matchMedia(config.mediaQuery).matches) {
        if (Array.isArray(config.sizesSupported)) {
          results.shouldFilter = true;
        }

        ['labels', 'sizesSupported'].forEach((function (type) {
          return (config[type] || []).forEach((function (thing) {
            return results[type][thing] = true;
          }));
        }));
      }
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils__["logWarn"])('sizeConfig rule missing required property "mediaQuery"');
    }

    return results;
  }), {
    labels: {},
    sizesSupported: {},
    shouldFilter: false
  });
}

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = {"JSON_MAPPING":{"PL_CODE":"code","PL_SIZE":"sizes","PL_BIDS":"bids","BD_BIDDER":"bidder","BD_ID":"paramsd","BD_PL_ID":"placementId","ADSERVER_TARGETING":"adserverTargeting","BD_SETTING_STANDARD":"standard"},"DEBUG_MODE":"pbjs_debug","STATUS":{"GOOD":1,"NO_BID":2},"CB":{"TYPE":{"ALL_BIDS_BACK":"allRequestedBidsBack","AD_UNIT_BIDS_BACK":"adUnitBidsBack","BID_WON":"bidWon","REQUEST_BIDS":"requestBids"}},"EVENTS":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","NO_BID":"noBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","SET_TARGETING":"setTargeting","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed"},"AD_RENDER_FAILED_REASON":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocuemnt","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"EVENT_ID_PATHS":{"bidWon":"adUnitCode"},"GRANULARITY_OPTIONS":{"LOW":"low","MEDIUM":"medium","HIGH":"high","AUTO":"auto","DENSE":"dense","CUSTOM":"custom"},"TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format"},"NATIVE_KEYS":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice"},"S2S":{"SRC":"s2s","DEFAULT_ENDPOINT":"https://prebid.adnxs.com/pbs/v1/openrtb2/auction","SYNCED_BIDDERS_KEY":"pbjsSyncs"},"BID_STATUS":{"BID_TARGETING_SET":"targetingSet","RENDERED":"rendered"}}

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return adunitCounter; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

var adUnits = {};
/**
 * Increments and returns current Adunit counter
 * @param {string} adunit id
 * @returns {number} current adunit count
 */

function incrementCounter(adunit) {
  adUnits[adunit] = adUnits[adunit] || {};
  adUnits[adunit].counter = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deepAccess"])(adUnits, "".concat(adunit, ".counter")) + 1 || 1;
  return adUnits[adunit].counter;
}
/**
 * Returns current Adunit counter
 * @param {string} adunit id
 * @returns {number} current adunit count
 */


function getCounter(adunit) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deepAccess"])(adUnits, "".concat(adunit, ".counter")) || 0;
}
/**
 * A module which counts how many times an adunit was called
 * @module adunitCounter
 */


var adunitCounter = {
  incrementCounter: incrementCounter,
  getCounter: getCounter
};


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = detectReferer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return getRefererInfo; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function detectReferer(win) {
  function getLevels() {
    var levels = walkUpWindows();
    var ancestors = getAncestorOrigins();

    if (ancestors) {
      for (var i = 0, l = ancestors.length; i < l; i++) {
        levels[i].ancestor = ancestors[i];
      }
    }

    return levels;
  }

  function getAncestorOrigins() {
    try {
      if (!win.location.ancestorOrigins) {
        return;
      }

      return win.location.ancestorOrigins;
    } catch (e) {// Ignore error
    }
  }

  function getPubUrlStack(levels) {
    var stack = [];
    var defUrl = null;
    var frameLocation = null;
    var prevFrame = null;
    var prevRef = null;
    var ancestor = null;
    var detectedRefererUrl = null;
    var i;

    for (i = levels.length - 1; i >= 0; i--) {
      try {
        frameLocation = levels[i].location;
      } catch (e) {// Ignore error
      }

      if (frameLocation) {
        stack.push(frameLocation);

        if (!detectedRefererUrl) {
          detectedRefererUrl = frameLocation;
        }
      } else if (i !== 0) {
        prevFrame = levels[i - 1];

        try {
          prevRef = prevFrame.referrer;
          ancestor = prevFrame.ancestor;
        } catch (e) {// Ignore error
        }

        if (prevRef) {
          stack.push(prevRef);

          if (!detectedRefererUrl) {
            detectedRefererUrl = prevRef;
          }
        } else if (ancestor) {
          stack.push(ancestor);

          if (!detectedRefererUrl) {
            detectedRefererUrl = ancestor;
          }
        } else {
          stack.push(defUrl);
        }
      } else {
        stack.push(defUrl);
      }
    }

    return {
      stack: stack,
      detectedRefererUrl: detectedRefererUrl
    };
  }

  function getCanonicalUrl(doc) {
    try {
      var element = doc.querySelector("link[rel='canonical']");

      if (element !== null) {
        return element.href;
      }
    } catch (e) {}

    return null;
  }

  function walkUpWindows() {
    var acc = [];
    var currentWindow;

    do {
      try {
        currentWindow = currentWindow ? currentWindow.parent : win;

        try {
          var isTop = currentWindow == win.top;
          var refData = {
            referrer: currentWindow.document.referrer || null,
            location: currentWindow.location.href || null,
            isTop: isTop
          };

          if (isTop) {
            refData = _extends(refData, {
              canonicalUrl: getCanonicalUrl(currentWindow.document)
            });
          }

          acc.push(refData);
        } catch (e) {
          acc.push({
            referrer: null,
            location: null,
            isTop: currentWindow == win.top
          });
          Object(__WEBPACK_IMPORTED_MODULE_0__utils__["logWarn"])('Trying to access cross domain iframe. Continuing without referrer and location');
        }
      } catch (e) {
        acc.push({
          referrer: null,
          location: null,
          isTop: false
        });
        return acc;
      }
    } while (currentWindow != win.top);

    return acc;
  }
  /**
   * Referer info
   * @typedef {Object} refererInfo
   * @property {string} referer detected top url
   * @property {boolean} reachedTop whether prebid was able to walk upto top window or not
   * @property {number} numIframes number of iframes
   * @property {string} stack comma separated urls of all origins
   */

  /**
   * Get referer info
   * @returns {refererInfo}
   */


  function refererInfo() {
    try {
      var levels = getLevels();
      var numIframes = levels.length - 1;
      var reachedTop = levels[numIframes].location !== null || numIframes > 0 && levels[numIframes - 1].referrer !== null;
      var stackInfo = getPubUrlStack(levels);
      var canonicalUrl;

      if (levels[levels.length - 1].canonicalUrl) {
        canonicalUrl = levels[levels.length - 1].canonicalUrl;
      }

      return {
        referer: stackInfo.detectedRefererUrl,
        reachedTop: reachedTop,
        numIframes: numIframes,
        stack: stackInfo.stack,
        canonicalUrl: canonicalUrl
      };
    } catch (e) {// Ignore error
    }
  }

  return refererInfo;
}
var getRefererInfo = detectReferer(window);

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return OUTSTREAM; }));
/* unused harmony export videoAdUnit */
/* unused harmony export videoBidder */
/* unused harmony export hasNonVideoBidder */
/* harmony export (immutable) */ __webpack_exports__["b"] = isValidVideoBid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapterManager__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes__);




var VIDEO_MEDIA_TYPE = 'video';
var OUTSTREAM = 'outstream';
/**
 * Helper functions for working with video-enabled adUnits
 */

var videoAdUnit = function videoAdUnit(adUnit) {
  var mediaType = adUnit.mediaType === VIDEO_MEDIA_TYPE;
  var mediaTypes = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["deepAccess"])(adUnit, 'mediaTypes.video');
  return mediaType || mediaTypes;
};
var videoBidder = function videoBidder(bid) {
  return __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes___default()(__WEBPACK_IMPORTED_MODULE_0__adapterManager__["default"].videoAdapters, bid.bidder);
};
var hasNonVideoBidder = function hasNonVideoBidder(adUnit) {
  return adUnit.bids.filter((function (bid) {
    return !videoBidder(bid);
  })).length;
};
/**
 * @typedef {object} VideoBid
 * @property {string} adId id of the bid
 */

/**
 * Validate that the assets required for video context are present on the bid
 * @param {VideoBid} bid Video bid to validate
 * @param {BidRequest[]} bidRequests All bid requests for an auction
 * @return {Boolean} If object is valid
 */

function isValidVideoBid(bid, bidRequests) {
  var bidRequest = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["getBidRequest"])(bid.adId, bidRequests);
  var videoMediaType = bidRequest && Object(__WEBPACK_IMPORTED_MODULE_1__utils__["deepAccess"])(bidRequest, 'mediaTypes.video');
  var context = videoMediaType && Object(__WEBPACK_IMPORTED_MODULE_1__utils__["deepAccess"])(videoMediaType, 'context'); // if context not defined assume default 'instream' for video bids
  // instream bids require a vast url or vast xml content

  if (!bidRequest || videoMediaType && context !== OUTSTREAM) {
    // xml-only video bids require a prebid cache url
    if (!__WEBPACK_IMPORTED_MODULE_2__src_config__["config"].getConfig('cache.url') && bid.vastXml && !bid.vastUrl) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils__["logError"])("\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: \"...\"} });\n      ");
      return false;
    }

    return !!(bid.vastUrl || bid.vastXml);
  } // outstream bids require a renderer on the bid or pub-defined on adunit


  if (context === OUTSTREAM) {
    return !!(bid.renderer || bidRequest.renderer);
  }

  return true;
}

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getGlobal;
// if $$PREBID_GLOBAL$$ already exists in global document scope, use it, if not, create the object
// global defination should happen BEFORE imports to avoid global undefined errors.
window.pbjs = window.pbjs || {};
window.pbjs.cmd = window.pbjs.cmd || [];
window.pbjs.que = window.pbjs.que || [];
function getGlobal() {
  return window.pbjs;
}

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TARGETING_KEYS */
/* unused harmony export filters */
/* harmony export (immutable) */ __webpack_exports__["a"] = getHighestCpmBidsFromBidPool;
/* unused harmony export newTargeting */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return targeting; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auctionManager__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sizeMapping__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var utils = __webpack_require__(0);

var CONSTANTS = __webpack_require__(4);

var pbTargetingKeys = [];
var MAX_DFP_KEYLENGTH = 20;
var TTL_BUFFER = 1000;
var TARGETING_KEYS = Object.keys(CONSTANTS.TARGETING_KEYS).map((function (key) {
  return CONSTANTS.TARGETING_KEYS[key];
})); // return unexpired bids

var isBidNotExpired = function isBidNotExpired(bid) {
  return bid.responseTimestamp + bid.ttl * 1000 + TTL_BUFFER > Object(__WEBPACK_IMPORTED_MODULE_0__utils__["timestamp"])();
}; // return bids whose status is not set. Winning bid can have status `targetingSet` or `rendered`.


var isUnusedBid = function isUnusedBid(bid) {
  return bid && (bid.status && !__WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes___default()([CONSTANTS.BID_STATUS.BID_TARGETING_SET, CONSTANTS.BID_STATUS.RENDERED], bid.status) || !bid.status);
};

var filters = {
  isBidNotExpired: isBidNotExpired,
  isUnusedBid: isUnusedBid
}; // If two bids are found for same adUnitCode, we will use the highest one to take part in auction
// This can happen in case of concurrent auctions

function getHighestCpmBidsFromBidPool(bidsReceived, highestCpmCallback) {
  var bids = []; // bucket by adUnitcode

  var buckets = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["groupBy"])(bidsReceived, 'adUnitCode'); // filter top bid for each bucket by bidder

  Object.keys(buckets).forEach((function (bucketKey) {
    var bidsByBidder = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["groupBy"])(buckets[bucketKey], 'bidderCode');
    Object.keys(bidsByBidder).forEach((function (key) {
      return bids.push(bidsByBidder[key].reduce(highestCpmCallback));
    }));
  }));
  return bids;
}
/**
 * @typedef {Object.<string,string>} targeting
 * @property {string} targeting_key
 */

/**
 * @typedef {Object.<string,Object.<string,string[]>[]>[]} targetingArray
 */

function newTargeting(auctionManager) {
  var targeting = {};
  var latestAuctionForAdUnit = {};

  targeting.setLatestAuctionForAdUnit = function (adUnitCode, auctionId) {
    latestAuctionForAdUnit[adUnitCode] = auctionId;
  };

  targeting.resetPresetTargeting = function (adUnitCode) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["isGptPubadsDefined"])()) {
      var adUnitCodes = getAdUnitCodes(adUnitCode);
      var adUnits = auctionManager.getAdUnits().filter((function (adUnit) {
        return __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes___default()(adUnitCodes, adUnit.code);
      }));
      window.googletag.pubads().getSlots().forEach((function (slot) {
        pbTargetingKeys.forEach((function (key) {
          // reset only registered adunits
          adUnits.forEach((function (unit) {
            if (unit.code === slot.getAdUnitPath() || unit.code === slot.getSlotElementId()) {
              slot.setTargeting(key, null);
            }
          }));
        }));
      }));
    }
  };
  /**
   * Returns all ad server targeting for all ad units.
   * @param {string=} adUnitCode
   * @return {Object.<string,targeting>} targeting
   */


  targeting.getAllTargeting = function (adUnitCode) {
    var bidsReceived = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getBidsReceived();
    var adUnitCodes = getAdUnitCodes(adUnitCode); // Get targeting for the winning bid. Add targeting for any bids that have
    // `alwaysUseBid=true`. If sending all bids is enabled, add targeting for losing bids.

    var targeting = getWinningBidTargeting(adUnitCodes, bidsReceived).concat(getCustomBidTargeting(adUnitCodes, bidsReceived)).concat(__WEBPACK_IMPORTED_MODULE_1__config__["config"].getConfig('enableSendAllBids') ? getBidLandscapeTargeting(adUnitCodes, bidsReceived) : []); // store a reference of the targeting keys

    targeting.map((function (adUnitCode) {
      Object.keys(adUnitCode).map((function (key) {
        adUnitCode[key].map((function (targetKey) {
          if (pbTargetingKeys.indexOf(Object.keys(targetKey)[0]) === -1) {
            pbTargetingKeys = Object.keys(targetKey).concat(pbTargetingKeys);
          }
        }));
      }));
    }));
    targeting = flattenTargeting(targeting); // make sure at least there is a entry per adUnit code in the targetingSet so receivers of SET_TARGETING call's can know what ad units are being invoked

    adUnitCodes.forEach((function (code) {
      if (!targeting[code]) {
        targeting[code] = {};
      }
    }));
    return targeting;
  };
  /**
   * Converts targeting array and flattens to make it easily iteratable
   * e.g: Sample input to this function
   * ```
   * [
   *    {
   *      "div-gpt-ad-1460505748561-0": [{"hb_bidder": ["appnexusAst"]}]
   *    },
   *    {
   *      "div-gpt-ad-1460505748561-0": [{"hb_bidder_appnexusAs": ["appnexusAst"]}]
   *    }
   * ]
   * ```
   * Resulting array
   * ```
   * {
   *  "div-gpt-ad-1460505748561-0": {
   *    "hb_bidder": "appnexusAst",
   *    "hb_bidder_appnexusAs": "appnexusAst"
   *  }
   * }
   * ```
   *
   * @param {targetingArray}  targeting
   * @return {Object.<string,targeting>}  targeting
   */


  function flattenTargeting(targeting) {
    var targetingObj = targeting.map((function (targeting) {
      return _defineProperty({}, Object.keys(targeting)[0], targeting[Object.keys(targeting)[0]].map((function (target) {
        return _defineProperty({}, Object.keys(target)[0], target[Object.keys(target)[0]].join(', '));
      })).reduce((function (p, c) {
        return _extends(c, p);
      }), {}));
    })).reduce((function (accumulator, targeting) {
      var key = Object.keys(targeting)[0];
      accumulator[key] = _extends({}, accumulator[key], targeting[key]);
      return accumulator;
    }), {});
    return targetingObj;
  }
  /**
   * Sets targeting for DFP
   * @param {Object.<string,Object.<string,string>>} targetingConfig
   */


  targeting.setTargetingForGPT = function (targetingConfig, customSlotMatching) {
    window.googletag.pubads().getSlots().forEach((function (slot) {
      Object.keys(targetingConfig).filter(customSlotMatching ? customSlotMatching(slot) : Object(__WEBPACK_IMPORTED_MODULE_0__utils__["isAdUnitCodeMatchingSlot"])(slot)).forEach((function (targetId) {
        return Object.keys(targetingConfig[targetId]).forEach((function (key) {
          var valueArr = targetingConfig[targetId][key].split(',');
          valueArr = valueArr.length > 1 ? [valueArr] : valueArr;
          valueArr.map((function (value) {
            utils.logMessage("Attempting to set key value for slot: ".concat(slot.getSlotElementId(), " key: ").concat(key, " value: ").concat(value));
            return value;
          })).forEach((function (value) {
            slot.setTargeting(key, value);
          }));
        }));
      }));
    }));
  };
  /**
   * normlizes input to a `adUnit.code` array
   * @param  {(string|string[])} adUnitCode [description]
   * @return {string[]}     AdUnit code array
   */


  function getAdUnitCodes(adUnitCode) {
    if (typeof adUnitCode === 'string') {
      return [adUnitCode];
    } else if (utils.isArray(adUnitCode)) {
      return adUnitCode;
    }

    return auctionManager.getAdUnitCodes() || [];
  }

  function getBidsReceived() {
    var bidsReceived = auctionManager.getBidsReceived();

    if (!__WEBPACK_IMPORTED_MODULE_1__config__["config"].getConfig('useBidCache')) {
      bidsReceived = bidsReceived.filter((function (bid) {
        return latestAuctionForAdUnit[bid.adUnitCode] === bid.auctionId;
      }));
    }

    bidsReceived = bidsReceived.filter((function (bid) {
      return bid.mediaType !== 'banner' || Object(__WEBPACK_IMPORTED_MODULE_4__sizeMapping__["c" /* sizeSupported */])([bid.width, bid.height]);
    })).filter(filters.isUnusedBid).filter(filters.isBidNotExpired);
    return getHighestCpmBidsFromBidPool(bidsReceived, __WEBPACK_IMPORTED_MODULE_0__utils__["getOldestHighestCpmBid"]);
  }
  /**
   * Returns top bids for a given adUnit or set of adUnits.
   * @param  {(string|string[])} adUnitCode adUnitCode or array of adUnitCodes
   * @return {[type]}            [description]
   */


  targeting.getWinningBids = function (adUnitCode) {
    var bidsReceived = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getBidsReceived();
    var adUnitCodes = getAdUnitCodes(adUnitCode);
    return bidsReceived.filter((function (bid) {
      return __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes___default()(adUnitCodes, bid.adUnitCode);
    })).filter((function (bid) {
      return bid.cpm > 0;
    })).map((function (bid) {
      return bid.adUnitCode;
    })).filter(__WEBPACK_IMPORTED_MODULE_0__utils__["uniques"]).map((function (adUnitCode) {
      return bidsReceived.filter((function (bid) {
        return bid.adUnitCode === adUnitCode ? bid : null;
      })).reduce(__WEBPACK_IMPORTED_MODULE_0__utils__["getHighestCpm"]);
    }));
  };
  /**
   * Sets targeting for AST
   */


  targeting.setTargetingForAst = function () {
    var astTargeting = targeting.getAllTargeting();
    Object.keys(astTargeting).forEach((function (targetId) {
      return Object.keys(astTargeting[targetId]).forEach((function (key) {
        utils.logMessage("Attempting to set targeting for targetId: ".concat(targetId, " key: ").concat(key, " value: ").concat(astTargeting[targetId][key])); // setKeywords supports string and array as value

        if (utils.isStr(astTargeting[targetId][key]) || utils.isArray(astTargeting[targetId][key])) {
          var keywordsObj = {};
          var regex = /pt[0-9]/;

          if (key.search(regex) < 0) {
            keywordsObj[key.toUpperCase()] = astTargeting[targetId][key];
          } else {
            // pt${n} keys should not be uppercased
            keywordsObj[key] = astTargeting[targetId][key];
          }

          window.apntag.setKeywords(targetId, keywordsObj, {
            overrideKeyValue: true
          });
        }
      }));
    }));
  };
  /**
   * Get targeting key value pairs for winning bid.
   * @param {string[]}    AdUnit code array
   * @return {targetingArray}   winning bids targeting
   */


  function getWinningBidTargeting(adUnitCodes, bidsReceived) {
    var winners = targeting.getWinningBids(adUnitCodes, bidsReceived);
    var standardKeys = getStandardKeys();
    winners = winners.map((function (winner) {
      return _defineProperty({}, winner.adUnitCode, Object.keys(winner.adserverTargeting).filter((function (key) {
        return typeof winner.sendStandardTargeting === 'undefined' || winner.sendStandardTargeting || standardKeys.indexOf(key) === -1;
      })).reduce((function (acc, key) {
        var targetingValue = [winner.adserverTargeting[key]];

        var targeting = _defineProperty({}, key.substring(0, MAX_DFP_KEYLENGTH), targetingValue);

        if (key === CONSTANTS.TARGETING_KEYS.DEAL) {
          var bidderCodeTargetingKey = "".concat(key, "_").concat(winner.bidderCode).substring(0, MAX_DFP_KEYLENGTH);

          var bidderCodeTargeting = _defineProperty({}, bidderCodeTargetingKey, targetingValue);

          return [].concat(_toConsumableArray(acc), [targeting, bidderCodeTargeting]);
        }

        return [].concat(_toConsumableArray(acc), [targeting]);
      }), []));
    }));
    return winners;
  }

  function getStandardKeys() {
    return auctionManager.getStandardBidderAdServerTargeting() // in case using a custom standard key set
    .map((function (targeting) {
      return targeting.key;
    })).concat(TARGETING_KEYS).filter(__WEBPACK_IMPORTED_MODULE_0__utils__["uniques"]); // standard keys defined in the library.
  }
  /**
   * Merge custom adserverTargeting with same key name for same adUnitCode.
   * e.g: Appnexus defining custom keyvalue pair foo:bar and Rubicon defining custom keyvalue pair foo:baz will be merged to foo: ['bar','baz']
   *
   * @param {Object[]} acc Accumulator for reducer. It will store updated bidResponse objects
   * @param {Object} bid BidResponse
   * @param {number} index current index
   * @param {Array} arr original array
   */


  function mergeAdServerTargeting(acc, bid, index, arr) {
    function concatTargetingValue(key) {
      return function (currentBidElement) {
        if (!utils.isArray(currentBidElement.adserverTargeting[key])) {
          currentBidElement.adserverTargeting[key] = [currentBidElement.adserverTargeting[key]];
        }

        currentBidElement.adserverTargeting[key] = currentBidElement.adserverTargeting[key].concat(bid.adserverTargeting[key]).filter(__WEBPACK_IMPORTED_MODULE_0__utils__["uniques"]);
        delete bid.adserverTargeting[key];
      };
    }

    function hasSameAdunitCodeAndKey(key) {
      return function (currentBidElement) {
        return currentBidElement.adUnitCode === bid.adUnitCode && currentBidElement.adserverTargeting[key];
      };
    }

    Object.keys(bid.adserverTargeting).filter(getCustomKeys()).forEach((function (key) {
      if (acc.length) {
        acc.filter(hasSameAdunitCodeAndKey(key)).forEach(concatTargetingValue(key));
      }
    }));
    acc.push(bid);
    return acc;
  }

  function getCustomKeys() {
    var standardKeys = getStandardKeys();
    return function (key) {
      return standardKeys.indexOf(key) === -1;
    };
  }

  function truncateCustomKeys(bid) {
    return _defineProperty({}, bid.adUnitCode, Object.keys(bid.adserverTargeting) // Get only the non-standard keys of the losing bids, since we
    // don't want to override the standard keys of the winning bid.
    .filter(getCustomKeys()).map((function (key) {
      return _defineProperty({}, key.substring(0, MAX_DFP_KEYLENGTH), [bid.adserverTargeting[key]]);
    })));
  }
  /**
   * Get custom targeting key value pairs for bids.
   * @param {string[]}    AdUnit code array
   * @return {targetingArray}   bids with custom targeting defined in bidderSettings
   */


  function getCustomBidTargeting(adUnitCodes, bidsReceived) {
    return bidsReceived.filter((function (bid) {
      return __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes___default()(adUnitCodes, bid.adUnitCode);
    })).map((function (bid) {
      return _extends({}, bid);
    })).reduce(mergeAdServerTargeting, []).map(truncateCustomKeys).filter((function (bid) {
      return bid;
    })); // removes empty elements in array;
  }
  /**
   * Get targeting key value pairs for non-winning bids.
   * @param {string[]}    AdUnit code array
   * @return {targetingArray}   all non-winning bids targeting
   */


  function getBidLandscapeTargeting(adUnitCodes, bidsReceived) {
    var standardKeys = TARGETING_KEYS.concat(__WEBPACK_IMPORTED_MODULE_2__native__["a" /* NATIVE_TARGETING_KEYS */]);
    var bids = getHighestCpmBidsFromBidPool(bidsReceived, __WEBPACK_IMPORTED_MODULE_0__utils__["getHighestCpm"]); // populate targeting keys for the remaining bids

    return bids.map((function (bid) {
      if (bid.adserverTargeting && adUnitCodes && (utils.isArray(adUnitCodes) && __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes___default()(adUnitCodes, bid.adUnitCode) || typeof adUnitCodes === 'string' && bid.adUnitCode === adUnitCodes)) {
        return _defineProperty({}, bid.adUnitCode, getTargetingMap(bid, standardKeys.filter((function (key) {
          return typeof bid.adserverTargeting[key] !== 'undefined';
        }))));
      }
    })).filter((function (bid) {
      return bid;
    })); // removes empty elements in array
  }

  function getTargetingMap(bid, keys) {
    return keys.map((function (key) {
      return _defineProperty({}, "".concat(key, "_").concat(bid.bidderCode).substring(0, MAX_DFP_KEYLENGTH), [bid.adserverTargeting[key]]);
    }));
  }

  targeting.isApntagDefined = function () {
    if (window.apntag && utils.isFn(window.apntag.setKeywords)) {
      return true;
    }
  };

  return targeting;
}
var targeting = newTargeting(__WEBPACK_IMPORTED_MODULE_3__auctionManager__["a" /* auctionManager */]);

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AUCTION_STARTED */
/* unused harmony export AUCTION_IN_PROGRESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return AUCTION_COMPLETED; }));
/* harmony export (immutable) */ __webpack_exports__["d"] = newAuction;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return addBidResponse; }));
/* unused harmony export auctionCallbacks */
/* harmony export (immutable) */ __webpack_exports__["c"] = getStandardBidderSettings;
/* unused harmony export getKeyValueTargetingPairs */
/* unused harmony export adjustBids */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cpmBucketManager__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videoCache__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Renderer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userSync__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hook__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__video__ = __webpack_require__(42);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Module for auction instances.
 *
 * In Prebid 0.x, $$PREBID_GLOBAL$$ had _bidsRequested and _bidsReceived as public properties.
 * Starting 1.0, Prebid will support concurrent auctions. Each auction instance will store private properties, bidsRequested and bidsReceived.
 *
 * AuctionManager will create instance of auction and will store all the auctions.
 *
 */

/**
  * @typedef {Object} AdUnit An object containing the adUnit configuration.
  *
  * @property {string} code A code which will be used to uniquely identify this bidder. This should be the same
  *   one as is used in the call to registerBidAdapter
  * @property {Array.<size>} sizes A list of size for adUnit.
  * @property {object} params Any bidder-specific params which the publisher used in their bid request.
  *   This is guaranteed to have passed the spec.areParamsValid() test.
  */

/**
 * @typedef {Array.<number>} size
 */

/**
 * @typedef {Array.<string>} AdUnitCode
 */

/**
 * @typedef {Object} BidRequest
 * //TODO add all properties
 */

/**
 * @typedef {Object} BidReceived
 * //TODO add all properties
 */

/**
 * @typedef {Object} Auction
 *
 * @property {function(): string} getAuctionStatus - returns the auction status which can be any one of 'started', 'in progress' or 'completed'
 * @property {function(): AdUnit[]} getAdUnits - return the adUnits for this auction instance
 * @property {function(): AdUnitCode[]} getAdUnitCodes - return the adUnitCodes for this auction instance
 * @property {function(): BidRequest[]} getBidRequests - get all bid requests for this auction instance
 * @property {function(): BidReceived[]} getBidsReceived - get all bid received for this auction instance
 * @property {function(): void} startAuctionTimer - sets the bidsBackHandler callback and starts the timer for auction
 * @property {function(): void} callBids - sends requests to all adapters for bids
 */











var syncUsers = __WEBPACK_IMPORTED_MODULE_6__userSync__["a" /* userSync */].syncUsers;

var utils = __webpack_require__(0);

var adapterManager = __webpack_require__(8).default;

var events = __webpack_require__(9);

var CONSTANTS = __webpack_require__(4);

var AUCTION_STARTED = 'started';
var AUCTION_IN_PROGRESS = 'inProgress';
var AUCTION_COMPLETED = 'completed'; // register event for bid adjustment

events.on(CONSTANTS.EVENTS.BID_ADJUSTMENT, (function (bid) {
  adjustBids(bid);
}));
var MAX_REQUESTS_PER_ORIGIN = 4;
var outstandingRequests = {};
var sourceInfo = {};
var queuedCalls = [];
/**
  * Creates new auction instance
  *
  * @param {Object} requestConfig
  * @param {AdUnit} requestConfig.adUnits
  * @param {AdUnitCode} requestConfig.adUnitCode
  *
  * @returns {Auction} auction instance
  */

function newAuction(_ref) {
  var adUnits = _ref.adUnits,
      adUnitCodes = _ref.adUnitCodes,
      callback = _ref.callback,
      cbTimeout = _ref.cbTimeout,
      labels = _ref.labels;
  var _adUnits = adUnits;
  var _labels = labels;
  var _adUnitCodes = adUnitCodes;
  var _bidderRequests = [];
  var _bidsReceived = [];
  var _noBids = [];

  var _auctionStart;

  var _auctionEnd;

  var _auctionId = utils.generateUUID();

  var _auctionStatus;

  var _callback = callback;

  var _timer;

  var _timeout = cbTimeout;
  var _winningBids = [];

  function addBidRequests(bidderRequests) {
    _bidderRequests = _bidderRequests.concat(bidderRequests);
  }

  ;

  function addBidReceived(bidsReceived) {
    _bidsReceived = _bidsReceived.concat(bidsReceived);
  }

  function addNoBid(noBid) {
    _noBids = _noBids.concat(noBid);
  }

  function getProperties() {
    return {
      auctionId: _auctionId,
      timestamp: _auctionStart,
      auctionEnd: _auctionEnd,
      auctionStatus: _auctionStatus,
      adUnits: _adUnits,
      adUnitCodes: _adUnitCodes,
      labels: _labels,
      bidderRequests: _bidderRequests,
      noBids: _noBids,
      bidsReceived: _bidsReceived,
      winningBids: _winningBids,
      timeout: _timeout
    };
  }

  function startAuctionTimer() {
    var timedOut = true;
    var timeoutCallback = executeCallback.bind(null, timedOut);
    var timer = setTimeout(timeoutCallback, _timeout);
    _timer = timer;
  }

  function executeCallback(timedOut, cleartimer) {
    // clear timer when done calls executeCallback
    if (cleartimer) {
      clearTimeout(_timer);
    }

    if (_callback != null) {
      var timedOutBidders = [];

      if (timedOut) {
        utils.logMessage("Auction ".concat(_auctionId, " timedOut"));
        timedOutBidders = getTimedOutBids(_bidderRequests, _bidsReceived);

        if (timedOutBidders.length) {
          events.emit(CONSTANTS.EVENTS.BID_TIMEOUT, timedOutBidders);
        }
      }

      try {
        _auctionStatus = AUCTION_COMPLETED;
        _auctionEnd = Date.now();
        events.emit(CONSTANTS.EVENTS.AUCTION_END, getProperties());
        var _adUnitCodes2 = _adUnitCodes;

        var bids = _bidsReceived.filter(__WEBPACK_IMPORTED_MODULE_0__utils__["adUnitsFilter"].bind(this, _adUnitCodes2)).reduce(groupByPlacement, {});

        _callback.apply(pbjs, [bids, timedOut]);
      } catch (e) {
        utils.logError('Error executing bidsBackHandler', null, e);
      } finally {
        // Calling timed out bidders
        if (timedOutBidders.length) {
          adapterManager.callTimedOutBidders(adUnits, timedOutBidders, _timeout);
        } // Only automatically sync if the publisher has not chosen to "enableOverride"


        var userSyncConfig = __WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig('userSync') || {};

        if (!userSyncConfig.enableOverride) {
          // Delay the auto sync by the config delay
          syncUsers(userSyncConfig.syncDelay);
        }
      }

      _callback = null;
    }
  }

  function auctionDone() {
    // when all bidders have called done callback atleast once it means auction is complete
    utils.logInfo("Bids Received for Auction with id: ".concat(_auctionId), _bidsReceived);
    _auctionStatus = AUCTION_COMPLETED;
    executeCallback(false, true);
  }

  function callBids() {
    var _this = this;

    _auctionStatus = AUCTION_STARTED;
    _auctionStart = Date.now();
    var bidRequests = adapterManager.makeBidRequests(_adUnits, _auctionStart, _auctionId, _timeout, _labels);
    utils.logInfo("Bids Requested for Auction with id: ".concat(_auctionId), bidRequests);
    bidRequests.forEach((function (bidRequest) {
      addBidRequests(bidRequest);
    }));
    var requests = {};

    if (bidRequests.length < 1) {
      utils.logWarn('No valid bid requests returned for auction');
      auctionDone();
    } else {
      var call = {
        bidRequests: bidRequests,
        run: function run() {
          startAuctionTimer();
          _auctionStatus = AUCTION_IN_PROGRESS;
          events.emit(CONSTANTS.EVENTS.AUCTION_INIT, getProperties());
          var callbacks = auctionCallbacks(auctionDone, _this);
          adapterManager.callBids(_adUnits, bidRequests, (function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            addBidResponse.apply({
              dispatch: callbacks.addBidResponse,
              bidderRequest: this
            }, args);
          }), callbacks.adapterDone, {
            request: function request(source, origin) {
              increment(outstandingRequests, origin);
              increment(requests, source);

              if (!sourceInfo[source]) {
                sourceInfo[source] = {
                  SRA: true,
                  origin: origin
                };
              }

              if (requests[source] > 1) {
                sourceInfo[source].SRA = false;
              }
            },
            done: function done(origin) {
              outstandingRequests[origin]--;

              if (queuedCalls[0]) {
                if (runIfOriginHasCapacity(queuedCalls[0])) {
                  queuedCalls.shift();
                }
              }
            }
          }, _timeout);
        }
      };

      if (!runIfOriginHasCapacity(call)) {
        utils.logWarn('queueing auction due to limited endpoint capacity');
        queuedCalls.push(call);
      }
    }

    function runIfOriginHasCapacity(call) {
      var hasCapacity = true;
      var maxRequests = __WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig('maxRequestsPerOrigin') || MAX_REQUESTS_PER_ORIGIN;
      call.bidRequests.some((function (bidRequest) {
        var requests = 1;
        var source = typeof bidRequest.src !== 'undefined' && bidRequest.src === CONSTANTS.S2S.SRC ? 's2s' : bidRequest.bidderCode; // if we have no previous info on this source just let them through

        if (sourceInfo[source]) {
          if (sourceInfo[source].SRA === false) {
            // some bidders might use more than the MAX_REQUESTS_PER_ORIGIN in a single auction.  In those cases
            // set their request count to MAX_REQUESTS_PER_ORIGIN so the auction isn't permanently queued waiting
            // for capacity for that bidder
            requests = Math.min(bidRequest.bids.length, maxRequests);
          }

          if (outstandingRequests[sourceInfo[source].origin] + requests > maxRequests) {
            hasCapacity = false;
          }
        } // return only used for terminating this .some() iteration early if it is determined we don't have capacity


        return !hasCapacity;
      }));

      if (hasCapacity) {
        call.run();
      }

      return hasCapacity;
    }

    function increment(obj, prop) {
      if (typeof obj[prop] === 'undefined') {
        obj[prop] = 1;
      } else {
        obj[prop]++;
      }
    }
  }

  function addWinningBid(winningBid) {
    _winningBids = _winningBids.concat(winningBid);
    adapterManager.callBidWonBidder(winningBid.bidder, winningBid, adUnits);
  }

  function setBidTargeting(bid) {
    adapterManager.callSetTargetingBidder(bid.bidder, bid);
  }

  return {
    addBidReceived: addBidReceived,
    addNoBid: addNoBid,
    executeCallback: executeCallback,
    callBids: callBids,
    addWinningBid: addWinningBid,
    setBidTargeting: setBidTargeting,
    getWinningBids: function getWinningBids() {
      return _winningBids;
    },
    getTimeout: function getTimeout() {
      return _timeout;
    },
    getAuctionId: function getAuctionId() {
      return _auctionId;
    },
    getAuctionStatus: function getAuctionStatus() {
      return _auctionStatus;
    },
    getAdUnits: function getAdUnits() {
      return _adUnits;
    },
    getAdUnitCodes: function getAdUnitCodes() {
      return _adUnitCodes;
    },
    getBidRequests: function getBidRequests() {
      return _bidderRequests;
    },
    getBidsReceived: function getBidsReceived() {
      return _bidsReceived;
    },
    getNoBids: function getNoBids() {
      return _noBids;
    }
  };
}
var addBidResponse = Object(__WEBPACK_IMPORTED_MODULE_7__hook__["a" /* createHook */])('asyncSeries', (function (adUnitCode, bid) {
  this.dispatch.call(this.bidderRequest, adUnitCode, bid);
}), 'addBidResponse');
function auctionCallbacks(auctionDone, auctionInstance) {
  var outstandingBidsAdded = 0;
  var allAdapterCalledDone = false;
  var bidderRequestsDone = new Set();
  var bidResponseMap = {};

  function afterBidAdded() {
    outstandingBidsAdded--;

    if (allAdapterCalledDone && outstandingBidsAdded === 0) {
      auctionDone();
    }
  }

  function addBidResponse(adUnitCode, bid) {
    var bidderRequest = this;
    bidResponseMap[bid.requestId] = true;
    outstandingBidsAdded++;
    var auctionId = auctionInstance.getAuctionId();
    var bidResponse = getPreparedBidForAuction({
      adUnitCode: adUnitCode,
      bid: bid,
      bidderRequest: bidderRequest,
      auctionId: auctionId
    });

    if (bidResponse.mediaType === 'video') {
      tryAddVideoBid(auctionInstance, bidResponse, bidderRequest, afterBidAdded);
    } else {
      addBidToAuction(auctionInstance, bidResponse);
      afterBidAdded();
    }
  }

  function adapterDone() {
    var bidderRequest = this;
    bidderRequestsDone.add(bidderRequest);
    allAdapterCalledDone = auctionInstance.getBidRequests().every((function (bidderRequest) {
      return bidderRequestsDone.has(bidderRequest);
    }));
    bidderRequest.bids.forEach((function (bid) {
      if (!bidResponseMap[bid.bidId]) {
        auctionInstance.addNoBid(bid);
        events.emit(CONSTANTS.EVENTS.NO_BID, bid);
      }
    }));

    if (allAdapterCalledDone && outstandingBidsAdded === 0) {
      auctionDone();
    }
  }

  return {
    addBidResponse: addBidResponse,
    adapterDone: adapterDone
  };
}

function doCallbacksIfTimedout(auctionInstance, bidResponse) {
  if (bidResponse.timeToRespond > auctionInstance.getTimeout() + __WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig('timeoutBuffer')) {
    auctionInstance.executeCallback(true);
  }
} // Add a bid to the auction.


function addBidToAuction(auctionInstance, bidResponse) {
  events.emit(CONSTANTS.EVENTS.BID_RESPONSE, bidResponse);
  auctionInstance.addBidReceived(bidResponse);
  doCallbacksIfTimedout(auctionInstance, bidResponse);
} // Video bids may fail if the cache is down, or there's trouble on the network.


function tryAddVideoBid(auctionInstance, bidResponse, bidRequests, afterBidAdded) {
  var addBid = true;
  var bidRequest = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["getBidRequest"])(bidResponse.adId, [bidRequests]);
  var videoMediaType = bidRequest && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deepAccess"])(bidRequest, 'mediaTypes.video');
  var context = videoMediaType && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deepAccess"])(videoMediaType, 'context');

  if (__WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig('cache.url') && context !== __WEBPACK_IMPORTED_MODULE_10__video__["a" /* OUTSTREAM */]) {
    if (!bidResponse.videoCacheKey) {
      addBid = false;
      Object(__WEBPACK_IMPORTED_MODULE_3__videoCache__["b" /* store */])([bidResponse], (function (error, cacheIds) {
        if (error) {
          utils.logWarn("Failed to save to the video cache: ".concat(error, ". Video bid must be discarded."));
          doCallbacksIfTimedout(auctionInstance, bidResponse);
        } else {
          bidResponse.videoCacheKey = cacheIds[0].uuid;

          if (!bidResponse.vastUrl) {
            bidResponse.vastUrl = Object(__WEBPACK_IMPORTED_MODULE_3__videoCache__["a" /* getCacheUrl */])(bidResponse.videoCacheKey);
          }

          addBidToAuction(auctionInstance, bidResponse);
          afterBidAdded();
        }
      }));
    } else if (!bidResponse.vastUrl) {
      utils.logError('videoCacheKey specified but not required vastUrl for video bid');
      addBid = false;
    }
  }

  if (addBid) {
    addBidToAuction(auctionInstance, bidResponse);
    afterBidAdded();
  }
} // Postprocess the bids so that all the universal properties exist, no matter which bidder they came from.
// This should be called before addBidToAuction().


function getPreparedBidForAuction(_ref2) {
  var adUnitCode = _ref2.adUnitCode,
      bid = _ref2.bid,
      bidderRequest = _ref2.bidderRequest,
      auctionId = _ref2.auctionId;
  var start = bidderRequest.start;

  var bidObject = _extends({}, bid, {
    auctionId: auctionId,
    responseTimestamp: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["timestamp"])(),
    requestTimestamp: start,
    cpm: parseFloat(bid.cpm) || 0,
    bidder: bid.bidderCode,
    adUnitCode: adUnitCode
  });

  bidObject.timeToRespond = bidObject.responseTimestamp - bidObject.requestTimestamp; // Let listeners know that now is the time to adjust the bid, if they want to.
  //
  // CAREFUL: Publishers rely on certain bid properties to be available (like cpm),
  // but others to not be set yet (like priceStrings). See #1372 and #1389.

  events.emit(CONSTANTS.EVENTS.BID_ADJUSTMENT, bidObject); // a publisher-defined renderer can be used to render bids

  var bidReq = bidderRequest.bids && __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find___default()(bidderRequest.bids, (function (bid) {
    return bid.adUnitCode == adUnitCode;
  }));
  var adUnitRenderer = bidReq && bidReq.renderer;

  if (adUnitRenderer && adUnitRenderer.url) {
    bidObject.renderer = __WEBPACK_IMPORTED_MODULE_4__Renderer__["a" /* Renderer */].install({
      url: adUnitRenderer.url
    });
    bidObject.renderer.setRender(adUnitRenderer.render);
  } // Use the config value 'mediaTypeGranularity' if it has been defined for mediaType, else use 'customPriceBucket'


  var mediaTypeGranularity = __WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig("mediaTypePriceGranularity.".concat(bid.mediaType));
  var priceStringsObj = Object(__WEBPACK_IMPORTED_MODULE_1__cpmBucketManager__["a" /* getPriceBucketString */])(bidObject.cpm, _typeof(mediaTypeGranularity) === 'object' ? mediaTypeGranularity : __WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig('customPriceBucket'), __WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig('currency.granularityMultiplier'));
  bidObject.pbLg = priceStringsObj.low;
  bidObject.pbMg = priceStringsObj.med;
  bidObject.pbHg = priceStringsObj.high;
  bidObject.pbAg = priceStringsObj.auto;
  bidObject.pbDg = priceStringsObj.dense;
  bidObject.pbCg = priceStringsObj.custom; // if there is any key value pairs to map do here

  var keyValues;

  if (bidObject.bidderCode && (bidObject.cpm > 0 || bidObject.dealId)) {
    keyValues = getKeyValueTargetingPairs(bidObject.bidderCode, bidObject);
  } // use any targeting provided as defaults, otherwise just set from getKeyValueTargetingPairs


  bidObject.adserverTargeting = _extends(bidObject.adserverTargeting || {}, keyValues);
  return bidObject;
}

function getStandardBidderSettings(mediaType) {
  // Use the config value 'mediaTypeGranularity' if it has been set for mediaType, else use 'priceGranularity'
  var mediaTypeGranularity = __WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig("mediaTypePriceGranularity.".concat(mediaType));
  var granularity = typeof mediaType === 'string' && mediaTypeGranularity ? typeof mediaTypeGranularity === 'string' ? mediaTypeGranularity : 'custom' : __WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig('priceGranularity');
  var bidderSettings = pbjs.bidderSettings;

  if (!bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD]) {
    bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD] = {};
  }

  if (!bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD][CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING]) {
    bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD][CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING] = [{
      key: CONSTANTS.TARGETING_KEYS.BIDDER,
      val: function val(bidResponse) {
        return bidResponse.bidderCode;
      }
    }, {
      key: CONSTANTS.TARGETING_KEYS.AD_ID,
      val: function val(bidResponse) {
        return bidResponse.adId;
      }
    }, {
      key: CONSTANTS.TARGETING_KEYS.PRICE_BUCKET,
      val: function val(bidResponse) {
        if (granularity === CONSTANTS.GRANULARITY_OPTIONS.AUTO) {
          return bidResponse.pbAg;
        } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.DENSE) {
          return bidResponse.pbDg;
        } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.LOW) {
          return bidResponse.pbLg;
        } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.MEDIUM) {
          return bidResponse.pbMg;
        } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.HIGH) {
          return bidResponse.pbHg;
        } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.CUSTOM) {
          return bidResponse.pbCg;
        }
      }
    }, {
      key: CONSTANTS.TARGETING_KEYS.SIZE,
      val: function val(bidResponse) {
        return bidResponse.size;
      }
    }, {
      key: CONSTANTS.TARGETING_KEYS.DEAL,
      val: function val(bidResponse) {
        return bidResponse.dealId;
      }
    }, {
      key: CONSTANTS.TARGETING_KEYS.SOURCE,
      val: function val(bidResponse) {
        return bidResponse.source;
      }
    }, {
      key: CONSTANTS.TARGETING_KEYS.FORMAT,
      val: function val(bidResponse) {
        return bidResponse.mediaType;
      }
    }];
  }

  return bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD];
}
function getKeyValueTargetingPairs(bidderCode, custBidObj) {
  if (!custBidObj) {
    return {};
  }

  var keyValues = {};
  var bidderSettings = pbjs.bidderSettings; // 1) set the keys from "standard" setting or from prebid defaults

  if (bidderSettings) {
    // initialize default if not set
    var standardSettings = getStandardBidderSettings(custBidObj.mediaType);
    setKeys(keyValues, standardSettings, custBidObj); // 2) set keys from specific bidder setting override if they exist

    if (bidderCode && bidderSettings[bidderCode] && bidderSettings[bidderCode][CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING]) {
      setKeys(keyValues, bidderSettings[bidderCode], custBidObj);
      custBidObj.sendStandardTargeting = bidderSettings[bidderCode].sendStandardTargeting;
    }
  } // set native key value targeting


  if (custBidObj['native']) {
    keyValues = _extends({}, keyValues, Object(__WEBPACK_IMPORTED_MODULE_2__native__["c" /* getNativeTargeting */])(custBidObj));
  }

  return keyValues;
}

function setKeys(keyValues, bidderSettings, custBidObj) {
  var targeting = bidderSettings[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING];
  custBidObj.size = custBidObj.getSize();

  utils._each(targeting, (function (kvPair) {
    var key = kvPair.key;
    var value = kvPair.val;

    if (keyValues[key]) {
      utils.logWarn('The key: ' + key + ' is getting ovewritten');
    }

    if (utils.isFn(value)) {
      try {
        value = value(custBidObj);
      } catch (e) {
        utils.logError('bidmanager', 'ERROR', e);
      }
    }

    if ((typeof bidderSettings.suppressEmptyKeys !== 'undefined' && bidderSettings.suppressEmptyKeys === true || key === CONSTANTS.TARGETING_KEYS.DEAL) && ( // hb_deal is suppressed automatically if not set
    utils.isEmptyStr(value) || value === null || value === undefined)) {
      utils.logInfo("suppressing empty key '" + key + "' from adserver targeting");
    } else {
      keyValues[key] = value;
    }
  }));

  return keyValues;
}

function adjustBids(bid) {
  var code = bid.bidderCode;
  var bidPriceAdjusted = bid.cpm;
  var bidCpmAdjustment;

  if (pbjs.bidderSettings) {
    if (code && pbjs.bidderSettings[code] && typeof pbjs.bidderSettings[code].bidCpmAdjustment === 'function') {
      bidCpmAdjustment = pbjs.bidderSettings[code].bidCpmAdjustment;
    } else if (pbjs.bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD] && typeof pbjs.bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment === 'function') {
      bidCpmAdjustment = pbjs.bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment;
    }

    if (bidCpmAdjustment) {
      try {
        bidPriceAdjusted = bidCpmAdjustment(bid.cpm, _extends({}, bid));
      } catch (e) {
        utils.logError('Error during bid adjustment', 'bidmanager.js', e);
      }
    }
  }

  if (bidPriceAdjusted >= 0) {
    bid.cpm = bidPriceAdjusted;
  }
}
/**
 * groupByPlacement is a reduce function that converts an array of Bid objects
 * to an object with placement codes as keys, with each key representing an object
 * with an array of `Bid` objects for that placement
 * @returns {*} as { [adUnitCode]: { bids: [Bid, Bid, Bid] } }
 */

function groupByPlacement(bidsByPlacement, bid) {
  if (!bidsByPlacement[bid.adUnitCode]) {
    bidsByPlacement[bid.adUnitCode] = {
      bids: []
    };
  }

  bidsByPlacement[bid.adUnitCode].bids.push(bid);
  return bidsByPlacement;
}
/**
 * Returns a list of bids that we haven't received a response yet where the bidder did not call done
 * @param {BidRequest[]} bidderRequests List of bids requested for auction instance
 * @param {BidReceived[]} bidsReceived List of bids received for auction instance
 *
 * @typedef {Object} TimedOutBid
 * @property {string} bidId The id representing the bid
 * @property {string} bidder The string name of the bidder
 * @property {string} adUnitCode The code used to uniquely identify the ad unit on the publisher's page
 * @property {string} auctionId The id representing the auction
 *
 * @return {Array<TimedOutBid>} List of bids that Prebid hasn't received a response for
 */


function getTimedOutBids(bidderRequests, bidsReceived) {
  var bidRequestedWithoutDoneCodes = bidderRequests.filter((function (bidderRequest) {
    return !bidderRequest.doneCbCallCount;
  })).map((function (bid) {
    return bid.bidderCode;
  })).filter(__WEBPACK_IMPORTED_MODULE_0__utils__["uniques"]);
  var bidReceivedCodes = bidsReceived.map((function (bid) {
    return bid.bidder;
  })).filter(__WEBPACK_IMPORTED_MODULE_0__utils__["uniques"]);
  var timedOutBidderCodes = bidRequestedWithoutDoneCodes.filter((function (bidder) {
    return !__WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes___default()(bidReceivedCodes, bidder);
  }));
  var timedOutBids = bidderRequests.map((function (bid) {
    return (bid.bids || []).filter((function (bid) {
      return __WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes___default()(timedOutBidderCodes, bid.bidder);
    }));
  })).reduce(__WEBPACK_IMPORTED_MODULE_0__utils__["flatten"], []).map((function (bid) {
    return {
      bidId: bid.bidId,
      bidder: bid.bidder,
      adUnitCode: bid.adUnitCode,
      auctionId: bid.auctionId
    };
  }));
  return timedOutBids;
}

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(479);


/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prebidGlobal__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secureCreatives__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userSync_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adloader__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auctionManager__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__targeting__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hook__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__debugging__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_library_fn_array_includes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_library_fn_array_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__adUnits__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Renderer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bidfactory__ = __webpack_require__(16);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Load Before custom script */

var pbjs = Object(__WEBPACK_IMPORTED_MODULE_0__prebidGlobal__["a" /* getGlobal */])();

var utils = __webpack_require__(0);
/*
Custom Code
*/
// Load GPT


(function () {
  var gads = document.createElement('script');
  gads.async = true;
  gads.type = 'text/javascript';
  var useSSL = 'https:' == document.location.protocol;
  gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
  var node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(gads, node);
})();
/* A9 Load Lib */


!(function (a9, a, p, s, t, A, g) {
  if (a[a9]) return;

  function q(c, r) {
    a[a9]._Q.push([c, r]);
  }

  a[a9] = {
    init: function init() {
      q("i", arguments);
    },
    fetchBids: function fetchBids() {
      q("f", arguments);
    },
    setDisplayBids: function setDisplayBids() {},
    _Q: []
  };
  A = p.createElement(s);
  A.async = !0;
  A.src = t;
  g = p.getElementsByTagName(s)[0];
  g.parentNode.insertBefore(A, g);
})("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");
var googletag = window.googletag || {};
googletag.cmd = googletag.cmd || [];
window.googletag = googletag;
var pbjsAdUnits = [];
var toUseAdUnits = [];
var toRefreshAdUnits = [];
var TIMEOUT = 2000;
var TIMEOUT_FALLBACK = 5000;
var REFRESH_RATE = 30000;
var breakScreenSize = 767;
var dfpNetwork = '21642150259';
var doNotRefreshAdunits = ['Bridoz_Desktop_Article_1x1', 'Bridoz_Mobile_Article_1x1'];
var device = 'desktop';
var pageType = 'article';

function detectWidth() {
  return window.screen.width || window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
}

if (detectWidth() <= breakScreenSize) device = 'mobile';

function detectPage(loc) {
  var homepages = ['/', 'index.html', 'index.htm', 'index.php', 'main.html', 'main.htm', 'homepage.html', 'index2.htm'];
  if (homepages.indexOf(loc) >= 0) return 'homepage';
  return 'article';
}

pageType = detectPage(window.document.location.pathname);

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var indexTest = getParameterByName('indexTest');
/*
Init 3rd parties
*/

/* A9 Init */

apstag.init({
  pubID: '9059de5c-9d77-4eb5-a577-2ce645088159',
  adServer: 'googletag'
}); // INIT DFP

googletag.cmd.push((function () {
  googletag.pubads().enableSingleRequest();
  googletag.pubads().collapseEmptyDivs();
  googletag.enableServices();
}));
/* Targeting */

window.m2hb = window.m2hb || {};
window.m2hb.kvps = window.m2hb.kvps || {
  'articleID': [""],
  'multikey': '/empty/',
  'campaignID': [""],
  'term': [""],
  'adID': [""]
};
googletag.cmd.push((function () {
  googletag.pubads().setTargeting("articleID", window.m2hb.kvps.articleID.toString());
  googletag.pubads().setTargeting("multikey", window.m2hb.kvps.multikey.toString());
  googletag.pubads().setTargeting("campaignID", window.m2hb.kvps.campaignID.toString());
  googletag.pubads().setTargeting("term", window.m2hb.kvps.term.toString());
  googletag.pubads().setTargeting("adID", window.m2hb.kvps.adID.toString());
}));
/* PBJS ADUNITS */

pbjsAdUnits.push({
  adunit: "Bridoz_Desktop_Anchor_728x90",
  code: "bridoz_desktop_anchor_728x90",
  device: ['desktop'],
  pageType: ['article'],
  mediaTypes: {
    banner: {
      sizes: [[728, 90], [1, 1]]
    }
  },
  bids: [{
    "bidder": "rubicon",
    "params": {
      "accountId": "17254",
      "siteId": "161668",
      "zoneId": "814796"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Desktop_Anchor@728x90",
      "publisherId": "156730"
    }
  }, {
    "bidder": "appnexus",
    "params": {
      "placementId": "12838897",
      "reserve": "0.30"
    }
  }, {
    "bidder": "districtmDMX",
    "params": {
      "memberid": "100804",
      "dmxid": "192041"
    }
  }, {
    "bidder": "openx",
    "params": {
      "delDomain": "trulyscaled-d.openx.net",
      "unit": "538038242"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4750248"
    }
  }, {
    "bidder": "oftmedia",
    "params": {
      "placementId": "12680950",
      "reserve": "0.30"
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296989",
      size: [728, 90]
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296999",
      size: [1, 1]
    }
  }, {
    "params": {
      "placementId": "1268016"
    },
    "bidder": "districtm"
  }]
});
pbjsAdUnits.push({
  adunit: "Bridoz_Desktop_Article_1x1",
  code: "Bridoz_Desktop_Article_1x1",
  device: ['desktop'],
  pageType: ['article', 'homepage'],
  mediaTypes: {
    banner: {
      sizes: [[1, 1]]
    }
  },
  bids: [
  /*{
          "bidder": "rubicon",
          "params": {
            "accountId": "17254",
            "siteId": "161668",
            "zoneId": "857870"
          }
        },*/
  {
    "bidder": "districtmDMX",
    "params": {
      "memberid": "100804",
      "dmxid": "12838905"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4772509"
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296999",
      size: [1, 1]
    }
  }]
});
pbjsAdUnits.push({
  adunit: "Bridoz_Desktop_Article_300x250",
  code: "bridoz_desktop_article_300x250",
  device: ['desktop'],
  pageType: ['article'],
  mediaTypes: {
    banner: {
      sizes: [[300, 250]]
    }
  },
  bids: [{
    "bidder": "rubicon",
    "params": {
      "accountId": "17254",
      "siteId": "161668",
      "zoneId": "814790"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Desktop_Article@300x250",
      "publisherId": "156730",
      "adUnit": "Bridoz_Desktop_Article",
      "adUnitIndex": "0",
      "width": 300,
      "height": 250
    }
  }, {
    "bidder": "appnexus",
    "params": {
      "placementId": "12838830",
      "reserve": "0.30"
    }
  }, {
    "bidder": "districtmDMX",
    "params": {
      "memberid": "100804",
      "dmxid": "192036"
    }
  }, {
    "bidder": "openx",
    "params": {
      "delDomain": "trulyscaled-d.openx.net",
      "unit": "539925570"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4750255",
      "region": "us"
    }
  }, {
    "bidder": "oftmedia",
    "params": {
      "placementId": "12680771",
      "reserve": "0.30"
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": 296992,
      size: [300, 250]
    }
  }, {
    "params": {
      "placementId": "12680150"
    },
    "bidder": "districtm"
  }]
});
pbjsAdUnits.push({
  adunit: "Bridoz_Desktop_Article_300x600",
  code: "bridoz_desktop_article_300x600",
  device: ['desktop'],
  pageType: ['article'],
  mediaTypes: {
    banner: {
      sizes: [[300, 250], [160, 600], [300, 600], [310, 400]]
    }
  },
  bids: [{
    "bidder": "rubicon",
    "params": {
      "accountId": "17254",
      "siteId": "161668",
      "zoneId": "814800"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Desktop_Article@160x600",
      "publisherId": "156730"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Desktop_Article@300x600",
      "publisherId": "156730"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Desktop_Article@300x250",
      "publisherId": "156730"
    }
  }, {
    "bidder": "appnexus",
    "params": {
      "placementId": "12838895",
      "reserve": "0.30"
    }
  }, {
    "bidder": "districtmDMX",
    "params": {
      "memberid": "100804",
      "dmxid": "192040"
    }
  }, {
    "bidder": "openx",
    "params": {
      "delDomain": "trulyscaled-d.openx.net",
      "unit": "539925573"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4750252"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4750251"
    }
  }, {
    "bidder": "oftmedia",
    "params": {
      "placementId": "12680819",
      "reserve": "0.30"
    }
  }, {
    "bidder": "oftmedia",
    "params": {
      "placementId": "12680702",
      "reserve": "0.30"
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296994",
      size: [300, 250]
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296994",
      size: [300, 600]
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296994",
      size: [160, 600]
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296994",
      size: [310, 400]
    }
  }]
});
pbjsAdUnits.push({
  adunit: "bridoz_desktop_article_728x90_2",
  code: "bridoz_desktop_article_728x90_2",
  device: ['desktop'],
  pageType: ['article'],
  mediaTypes: {
    banner: {
      sizes: [[728, 90], [1, 1]]
    }
  },
  bids: [{
    "bidder": "rubicon",
    "params": {
      "accountId": "17254",
      "siteId": "161668",
      "zoneId": "814796"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Desktop_Anchor@728x90",
      "publisherId": "156730"
    }
  }, {
    "bidder": "appnexus",
    "params": {
      "placementId": "12838897",
      "reserve": "0.30"
    }
  }, {
    "bidder": "districtmDMX",
    "params": {
      "memberid": "100804",
      "dmxid": "192041"
    }
  }, {
    "bidder": "openx",
    "params": {
      "delDomain": "trulyscaled-d.openx.net",
      "unit": "538038242"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4750248"
    }
  }, {
    "bidder": "oftmedia",
    "params": {
      "placementId": "12680950",
      "reserve": "0.30"
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296989",
      size: [728, 90]
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296999",
      size: [1, 1]
    }
  }, {
    "params": {
      "placementId": "1268016"
    },
    "bidder": "districtm"
  }]
});
pbjsAdUnits.push({
  adunit: "Bridoz_Desktop_Article_InContent4",
  code: "Bridoz_Desktop_Article_InContent4",
  device: ['desktop'],
  pageType: ['article'],
  mediaTypes: {
    banner: {
      sizes: [[300, 250], [728, 90], [970, 90], [336, 280], [1, 1]]
    }
  },
  bids: [{
    "bidder": "rubicon",
    "params": {
      "accountId": "17254",
      "siteId": "161668",
      "zoneId": "857866"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Desktop_Article_InContent4@336x280",
      "publisherId": "156730"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Desktop_Article_InContent4@300x250",
      "publisherId": "156730"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Desktop_Article_InContent4@728x90",
      "publisherId": "156730"
    }
  }, {
    "bidder": "appnexus",
    "params": {
      "placementId": "12838903",
      "reserve": "0.30"
    }
  }, {
    "bidder": "districtmDMX",
    "params": {
      "memberid": "100804",
      "dmxid": "197664"
    }
  }, {
    "bidder": "openx",
    "params": {
      "delDomain": "trulyscaled-d.openx.net",
      "unit": "539925578"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4772507"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4772508"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4772505"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4772504"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4772504"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4772503"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4772506"
    }
  }, {
    "bidder": "sharethrough",
    "params": {
      "pkey": "J5PbABajyS19yFy2Qqj1hQeo"
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296999",
      size: [300, 250]
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296990",
      size: [728, 90]
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296996",
      size: [336, 280]
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296996",
      size: [970, 90]
    }
  }, {
    "params": {
      "placementId": "12824042"
    },
    "bidder": "districtm"
  }]
});
pbjsAdUnits.push({
  adunit: "Bridoz_Desktop_Homepage_300x600",
  code: "bridoz_desktop_homepage_300x600",
  device: ['desktop'],
  pageType: ['homepage'],
  mediaTypes: {
    banner: {
      sizes: [[300, 600], [160, 600]]
    }
  },
  bids: [{
    "bidder": "rubicon",
    "params": {
      "accountId": "17254",
      "siteId": "161668",
      "zoneId": "814784"
    }
  }, {
    "bidder": "appnexus",
    "params": {
      "placementId": "12838785",
      "reserve": "0.30"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Desktop_Homepage@300x600",
      "publisherId": "156730"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Desktop_Homepage@160x600",
      "publisherId": "156730"
    }
  }, {
    "bidder": "districtmDMX",
    "params": {
      "memberid": "100804",
      "dmxid": "192033"
    }
  }, {
    "bidder": "openx",
    "params": {
      "delDomain": "trulyscaled-d.openx.net",
      "unit": "539925567"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4750250"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4750249"
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296994",
      size: [300, 600]
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "296994",
      size: [160, 600]
    }
  }, {
    "bidder": "oftmedia",
    "params": {
      "placementId": "12680821",
      "reserve": "0.30"
    }
  }, {
    "params": {
      "placementId": "12680147"
    },
    "bidder": "districtm"
  }]
});
pbjsAdUnits.push({
  adunit: "Bridoz_Mobile_Anchor_320x50",
  code: "bridoz_mobile_anchor_320x50",
  device: ['mobile'],
  pageType: ['article', 'homepage'],
  mediaTypes: {
    banner: {
      sizes: [[320, 50], [1, 1]]
    }
  },
  bids: [{
    "bidder": "rubicon",
    "params": {
      "accountId": "17254",
      "siteId": "161668",
      "zoneId": "814808"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Mobile_Anchor@320x50",
      "publisherId": "156730"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Mobile_Article@320x50",
      "publisherId": "156730"
    }
  }, {
    "bidder": "appnexus",
    "params": {
      "placementId": "12838902",
      "reserve": "0.30"
    }
  }, {
    "bidder": "districtmDMX",
    "params": {
      "memberid": "100804",
      "dmxid": "197664"
    }
  }, {
    "bidder": "openx",
    "params": {
      "delDomain": "trulyscaled-d.openx.net",
      "unit": "539925568"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4750261"
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "297004",
      size: [320, 50]
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "297000",
      size: [1, 1]
    }
  }, {
    "params": {
      "placementId": "12680148"
    },
    "bidder": "districtm"
  }, {
    "bidder": "oftmedia",
    "params": {
      "placementId": "12680769",
      "reserve": "0.30"
    }
  }]
});
pbjsAdUnits.push({
  adunit: "Bridoz_Mobile_Article_1x1",
  code: "Bridoz_Mobile_Article_1x1",
  device: ['mobile'],
  pageType: ['article', 'homepage'],
  mediaTypes: {
    banner: {
      sizes: [[1, 1]]
    }
  },
  bids: [
  /*{
    "bidder": "rubicon",
    "params": {
      "accountId": "17254",
      "siteId": "161668",
      "zoneId": "857872"
    }
  },*/
  {
    "bidder": "appnexus",
    "params": {
      "placementId": "12838906",
      "reserve": "0.30"
    }
  }, {
    "bidder": "districtmDMX",
    "params": {
      "memberid": "100804",
      "dmxid": "197667"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4772511"
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "297000",
      size: [1, 1]
    }
  }]
});
pbjsAdUnits.push({
  adunit: "Bridoz_Mobile_Article_300x250_1",
  code: "bridoz_mobile_article_300x250_1",
  device: ['mobile'],
  pageType: ['article'],
  mediaTypes: {
    banner: {
      sizes: [[300, 250]]
    }
  },
  bids: [{
    "bidder": "rubicon",
    "params": {
      "accountId": "17254",
      "siteId": "161668",
      "zoneId": "814802"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Mobile_Article_1@300x250",
      "publisherId": "156730"
    }
  }, {
    "bidder": "appnexus",
    "params": {
      "placementId": "12838899",
      "reserve": "0.30"
    }
  }, {
    "bidder": "districtmDMX",
    "params": {
      "memberid": "100804",
      "dmxid": "192043"
    }
  }, {
    "bidder": "openx",
    "params": {
      "delDomain": "trulyscaled-d.openx.net",
      "unit": "539925576"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4750258"
    }
  }, {
    "bidder": "oftmedia",
    "params": {
      "placementId": "12680711",
      "reserve": "0.30"
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "297002",
      size: [300, 250]
    }
  }]
});
pbjsAdUnits.push({
  adunit: "Bridoz_Mobile_Article_300x250_2",
  code: "bridoz_mobile_article_300x250_2",
  device: ['mobile'],
  pageType: ['article'],
  mediaTypes: {
    banner: {
      sizes: [[300, 250]]
    }
  },
  bids: [{
    "bidder": "rubicon",
    "params": {
      "accountId": "17254",
      "siteId": "161668",
      "zoneId": "814804"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Mobile_Article_2@300x250",
      "publisherId": "156730"
    }
  }, {
    "bidder": "appnexus",
    "params": {
      "placementId": "12838901",
      "reserve": "0.30"
    }
  }, {
    "bidder": "districtmDMX",
    "params": {
      "memberid": "100804",
      "dmxid": "192043"
    }
  }, {
    "bidder": "openx",
    "params": {
      "delDomain": "trulyscaled-d.openx.net",
      "unit": "539925577"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4750259"
    }
  }, {
    "bidder": "oftmedia",
    "params": {
      "placementId": "12680760",
      "reserve": "0.30"
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "297003",
      size: [300, 250]
    }
  }, {
    "params": {
      "placementId": "12680178"
    },
    "bidder": "districtm"
  }]
});
pbjsAdUnits.push({
  adunit: "Bridoz_Mobile_Article_InContent4",
  code: "Bridoz_Mobile_Article_InContent4",
  device: ['mobile'],
  pageType: ['article'],
  mediaTypes: {
    banner: {
      sizes: [[300, 250], [320, 50], [320, 100], [336, 280], [1, 1]]
    }
  },
  bids: [{
    "bidder": "rubicon",
    "params": {
      "accountId": "17254",
      "siteId": "161668",
      "zoneId": "857868"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Mobile_Article_InContent4@320x100",
      "publisherId": "156730"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Mobile_Article_InContent4@300x250",
      "publisherId": "156730"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Mobile_Article_InContent4@336x280",
      "publisherId": "156730"
    }
  }, {
    "bidder": "pubmatic",
    "params": {
      "adSlot": "Bridoz_Mobile_Article_InContent4@320x50",
      "publisherId": "156730"
    }
  }, {
    "bidder": "appnexus",
    "params": {
      "placementId": "12838904",
      "reserve": "0.30"
    }
  }, {
    "bidder": "districtmDMX",
    "params": {
      "memberid": "100804",
      "dmxid": "197665"
    }
  }, {
    "bidder": "openx",
    "params": {
      "delDomain": "trulyscaled-d.openx.net",
      "unit": "539925579"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4772515"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4772514"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4772513"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4772510"
    }
  }, {
    "bidder": "aol",
    "params": {
      "network": "11072.1",
      "placement": "4772512"
    }
  }, {
    "bidder": "sharethrough",
    "params": {
      "pkey": "J5PbABajyS19yFy2Qqj1hQeo"
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "297000",
      size: [300, 250]
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "297003",
      size: [320, 50]
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "297004",
      size: [336, 280]
    }
  }, {
    "bidder": "ix",
    "params": {
      "siteId": "297001",
      size: [320, 100]
    }
  }, {
    "params": {
      "placementId": "1282404"
    },
    "bidder": "districtm"
  }]
});
/* Add test bids */

var testbids = getParameterByName('testbids');

if (testbids == "true") {
  var additionalBids = [{
    bidder: "rubicon",
    params: {
      accountId: 1001,
      siteId: 113932,
      zoneId: 535510
    }
  }];

  for (var i = pbjsAdUnits.length - 1; i >= 0; i--) {
    pbjsAdUnits[i].bids = [];

    for (var y = additionalBids.length - 1; y >= 0; y--) {
      pbjsAdUnits[i].bids.push(additionalBids[y]);
    }
  }
}
/* Process adunits to use*/


toUseAdUnits = pbjsAdUnits.filter((function (adunit) {
  if (adunit.device.indexOf(device) >= 0) {
    if (adunit.pageType.indexOf(pageType) >= 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}));
/*
Prebid settings
*/

pbjs.que.push((function () {
  pbjs.setConfig({
    userSync: {
      syncEnabled: true,
      syncsPerBidder: 0,
      syncDelay: 6000,
      filterSettings: {
        iframe: {
          bidders: '*',
          // '*' means all bidders
          filter: 'include'
        },
        image: {
          bidders: '*',
          // '*' means all bidders
          filter: 'include'
        }
      }
    },
    maxRequestsPerOrigin: 6,
    timeoutBuffer: 1000,
    disableAjaxTimeout: true,
    enableSendAllBids: false
  });
  pbjs.bidderSettings = {
    standard: {
      adserverTargeting: [{
        key: "hb_bidder",
        val: function val(bidResponse) {
          return bidResponse.bidderCode;
        }
      }, {
        key: "hb_adid",
        val: function val(bidResponse) {
          return bidResponse.adId;
        }
      }, {
        key: "hb_pb",
        val: function val(bidResponse) {
          if (bidResponse.cpm >= 20) return '20.00';
          return bidResponse.pbHg;
        }
      }, {
        key: 'hb_size',
        val: function val(bidResponse) {
          return bidResponse.size;
        }
      }]
    },
    brealtime: {
      bidCpmAdjustment: function bidCpmAdjustment(bidCpm) {
        return bidCpm * .90;
      }
    },
    rubicon: {
      bidCpmAdjustment: function bidCpmAdjustment(bidCpm) {
        return bidCpm * .80;
      }
    },
    pubmatic: {
      bidCpmAdjustment: function bidCpmAdjustment(bidCpm) {
        return bidCpm * .79;
      }
    },
    districtm: {
      bidCpmAdjustment: function bidCpmAdjustment(bidCpm) {
        return bidCpm * .90;
      }
    }
  };
})); // End Push

function doBidRequests(ADUNITS, timeout, callback) {
  pbjs.que.push((function () {
    if (!ADUNITS && !ADUNITS) return false;
    if (!timeout) timeout = TIMEOUT;
    if (!callback) callback = function callback() {};
    var codes = ADUNITS.map((function (adunit) {
      return adunit.code;
    }));
    var a9Slots = ADUNITS.map((function (adunit) {
      return {
        slotID: adunit.code,
        slotName: '/' + dfpNetwork + '/' + adunit.adunit,
        sizes: adunit.mediaTypes.banner.sizes
      };
    }));
    var prebidBack = false;
    var a9Back = false;
    var renderAdsDone = false;

    function renderAds() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (force) {
        prebidBack = true;
        a9Back = true;
      }

      if (!prebidBack) return false;
      if (!a9Back) return false;
      if (renderAdsDone) return false;
      googletag.cmd.push((function () {
        var dfpDefinedAdunit = googletag.pubads().getSlots();
        var dfpDefinedAdunitCodes = dfpDefinedAdunit.map((function (adunit) {
          return adunit.getSlotElementId();
        }));
        var adunitsToDefine = ADUNITS.filter((function (adunit) {
          if (dfpDefinedAdunitCodes.indexOf(adunit.code) >= 0) return false;else return true;
        }));
        var dfpAdunitsToRefresh = dfpDefinedAdunit.filter((function (adunit) {
          if (codes.indexOf(adunit.getSlotElementId()) >= 0) return true;else return false;
        })); // Define Slots

        adunitsToDefine.forEach((function (adunit) {
          googletag.defineSlot('/' + dfpNetwork + '/' + adunit.adunit, adunit.mediaTypes.banner.sizes, adunit.code).addService(googletag.pubads());
        })); // A9 Targeting

        if (typeof apstag !== 'undefined') {
          //console.log("Set Targeting A9");
          apstag.setDisplayBids();
        } // Set Targeting


        pbjs.setTargetingForGPTAsync(codes); // Display Slots

        adunitsToDefine.forEach((function (adunit) {
          googletag.display(adunit.code);
        })); // Refresh Slots

        if (dfpAdunitsToRefresh && dfpAdunitsToRefresh.length > 0) googletag.pubads().refresh(dfpAdunitsToRefresh);
        console.log('REFRESH', dfpAdunitsToRefresh);
      }));
      renderAdsDone = true; // Run Callback

      callback();
    } // end renderAds
    // Force render fallback


    setTimeout((function () {
      renderAds(true);
    }), TIMEOUT_FALLBACK);
    /* A9 Request Bids */

    apstag.fetchBids({
      slots: a9Slots,
      timeout: TIMEOUT
    }, (function (bids) {
      //console.log('A9 bids are back: ',bids);
      a9Back = true;
      renderAds();
    })); // End callback

    /* Prebid Request Bids*/

    pbjs.requestBids({
      timeout: TIMEOUT,
      adUnits: ADUNITS,
      bidsBackHandler: function bidsBackHandler(bids) {
        prebidBack = true;
        renderAds();
      }
    });
  })); // End push command
} // End function
// Do bids requests


doBidRequests(toUseAdUnits); // Add to refresh viewable impressions

googletag.cmd.push((function () {
  googletag.pubads().addEventListener('impressionViewable', (function (event) {
    utils.logMessage('Adunit is now viewable: ', event.slot.getSlotElementId());
    var isInRefreshArray = toRefreshAdUnits.filter((function (adunit) {
      if (adunit.code == event.slot.getSlotElementId()) return true;else return false;
    }));

    if (isInRefreshArray.length == 0) {
      var adunitToRefresh = pbjsAdUnits.filter((function (adunit) {
        if (doNotRefreshAdunits.indexOf(adunit.code) >= 0) return false;
        if (adunit.code == event.slot.getSlotElementId()) return true;else return false;
      }));
      if (adunitToRefresh[0]) toRefreshAdUnits.push(adunitToRefresh[0]);
      utils.logMessage('Adunit added to refresh: ', event.slot.getSlotElementId());
    }
  })); // End Event listener
})); // End push command
// Check and do refresh

function doRefresh() {
  if (!toRefreshAdUnits || toRefreshAdUnits.length == 0) return false;
  doBidRequests(toRefreshAdUnits);
}

setInterval(doRefresh, REFRESH_RATE);

pbjs.getRefresh = function () {
  return toRefreshAdUnits;
};
/* END: Custom code*/

/** @module pbjs */
















var CONSTANTS = __webpack_require__(4);

var adapterManager = __webpack_require__(8).default;

var events = __webpack_require__(9);

var triggerUserSyncs = __WEBPACK_IMPORTED_MODULE_3__userSync_js__["a" /* userSync */].triggerUserSyncs;
/* private variables */

var _CONSTANTS$EVENTS = CONSTANTS.EVENTS,
    ADD_AD_UNITS = _CONSTANTS$EVENTS.ADD_AD_UNITS,
    BID_WON = _CONSTANTS$EVENTS.BID_WON,
    REQUEST_BIDS = _CONSTANTS$EVENTS.REQUEST_BIDS,
    SET_TARGETING = _CONSTANTS$EVENTS.SET_TARGETING,
    AD_RENDER_FAILED = _CONSTANTS$EVENTS.AD_RENDER_FAILED;
var _CONSTANTS$AD_RENDER_ = CONSTANTS.AD_RENDER_FAILED_REASON,
    PREVENT_WRITING_ON_MAIN_DOCUMENT = _CONSTANTS$AD_RENDER_.PREVENT_WRITING_ON_MAIN_DOCUMENT,
    NO_AD = _CONSTANTS$AD_RENDER_.NO_AD,
    EXCEPTION = _CONSTANTS$AD_RENDER_.EXCEPTION,
    CANNOT_FIND_AD = _CONSTANTS$AD_RENDER_.CANNOT_FIND_AD,
    MISSING_DOC_OR_ADID = _CONSTANTS$AD_RENDER_.MISSING_DOC_OR_ADID;
var eventValidators = {
  bidWon: checkDefinedPlacement
}; // initialize existing debugging sessions if present

Object(__WEBPACK_IMPORTED_MODULE_9__debugging__["a" /* sessionLoader */])();
/* Public vars */

pbjs.bidderSettings = pbjs.bidderSettings || {}; // let the world know we are loaded

pbjs.libLoaded = true; // version auto generated from build

pbjs.version = "v1.39.0";
utils.logInfo("Prebid.js v1.39.0 loaded"); // create adUnit array

pbjs.adUnits = pbjs.adUnits || []; // Allow publishers who enable user sync override to trigger their sync

pbjs.triggerUserSyncs = triggerUserSyncs;

function checkDefinedPlacement(id) {
  var adUnitCodes = __WEBPACK_IMPORTED_MODULE_6__auctionManager__["a" /* auctionManager */].getBidsRequested().map((function (bidSet) {
    return bidSet.bids.map((function (bid) {
      return bid.adUnitCode;
    }));
  })).reduce(__WEBPACK_IMPORTED_MODULE_1__utils__["flatten"]).filter(__WEBPACK_IMPORTED_MODULE_1__utils__["uniques"]);

  if (!utils.contains(adUnitCodes, id)) {
    utils.logError('The "' + id + '" placement is not defined.');
    return;
  }

  return true;
}

function setRenderSize(doc, width, height) {
  if (doc.defaultView && doc.defaultView.frameElement) {
    doc.defaultView.frameElement.width = width;
    doc.defaultView.frameElement.height = height;
  }
} /// ///////////////////////////////
//                              //
//    Start Public APIs         //
//                              //
/// ///////////////////////////////

/**
 * This function returns the query string targeting parameters available at this moment for a given ad unit. Note that some bidder's response may not have been received if you call this function too quickly after the requests are sent.
 * @param  {string} [adunitCode] adUnitCode to get the bid responses for
 * @alias module:pbjs.getAdserverTargetingForAdUnitCodeStr
 * @return {Array}  returnObj return bids array
 */


pbjs.getAdserverTargetingForAdUnitCodeStr = function (adunitCode) {
  utils.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments); // call to retrieve bids array

  if (adunitCode) {
    var res = pbjs.getAdserverTargetingForAdUnitCode(adunitCode);
    return utils.transformAdServerTargetingObj(res);
  } else {
    utils.logMessage('Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode');
  }
};
/**
 * This function returns the query string targeting parameters available at this moment for a given ad unit. Note that some bidder's response may not have been received if you call this function too quickly after the requests are sent.
 * @param adUnitCode {string} adUnitCode to get the bid responses for
 * @alias module:pbjs.getAdserverTargetingForAdUnitCode
 * @returns {Object}  returnObj return bids
 */


pbjs.getAdserverTargetingForAdUnitCode = function (adUnitCode) {
  return pbjs.getAdserverTargeting(adUnitCode)[adUnitCode];
};
/**
 * returns all ad server targeting for all ad units
 * @return {Object} Map of adUnitCodes and targeting values []
 * @alias module:pbjs.getAdserverTargeting
 */


pbjs.getAdserverTargeting = function (adUnitCode) {
  utils.logInfo("Invoking pbjs.getAdserverTargeting", arguments);
  return __WEBPACK_IMPORTED_MODULE_7__targeting__["b" /* targeting */].getAllTargeting(adUnitCode);
};

function getBids(type) {
  var responses = __WEBPACK_IMPORTED_MODULE_6__auctionManager__["a" /* auctionManager */][type]().filter(__WEBPACK_IMPORTED_MODULE_1__utils__["adUnitsFilter"].bind(this, __WEBPACK_IMPORTED_MODULE_6__auctionManager__["a" /* auctionManager */].getAdUnitCodes())); // find the last auction id to get responses for most recent auction only

  var currentAuctionId = responses && responses.length && responses[responses.length - 1].auctionId;
  return responses.map((function (bid) {
    return bid.adUnitCode;
  })).filter(__WEBPACK_IMPORTED_MODULE_1__utils__["uniques"]).map((function (adUnitCode) {
    return responses.filter((function (bid) {
      return bid.auctionId === currentAuctionId && bid.adUnitCode === adUnitCode;
    }));
  })).filter((function (bids) {
    return bids && bids[0] && bids[0].adUnitCode;
  })).map((function (bids) {
    return _defineProperty({}, bids[0].adUnitCode, {
      bids: bids.map(__WEBPACK_IMPORTED_MODULE_1__utils__["removeRequestId"])
    });
  })).reduce((function (a, b) {
    return _extends(a, b);
  }), {});
}
/**
 * This function returns the bids requests involved in an auction but not bid on
 * @alias module:pbjs.getNoBids
 * @return {Object}            map | object that contains the bidRequests
 */


pbjs.getNoBids = function () {
  utils.logInfo("Invoking pbjs.getNoBids", arguments);
  return getBids('getNoBids');
};
/**
 * This function returns the bid responses at the given moment.
 * @alias module:pbjs.getBidResponses
 * @return {Object}            map | object that contains the bidResponses
 */


pbjs.getBidResponses = function () {
  utils.logInfo("Invoking pbjs.getBidResponses", arguments);
  return getBids('getBidsReceived');
};
/**
 * Returns bidResponses for the specified adUnitCode
 * @param  {string} adUnitCode adUnitCode
 * @alias module:pbjs.getBidResponsesForAdUnitCode
 * @return {Object}            bidResponse object
 */


pbjs.getBidResponsesForAdUnitCode = function (adUnitCode) {
  var bids = __WEBPACK_IMPORTED_MODULE_6__auctionManager__["a" /* auctionManager */].getBidsReceived().filter((function (bid) {
    return bid.adUnitCode === adUnitCode;
  }));
  return {
    bids: bids.map(__WEBPACK_IMPORTED_MODULE_1__utils__["removeRequestId"])
  };
};
/**
 * Set query string targeting on one or more GPT ad units.
 * @param {(string|string[])} adUnit a single `adUnit.code` or multiple.
 * @param {function(object)} customSlotMatching gets a GoogleTag slot and returns a filter function for adUnitCode, so you can decide to match on either eg. return slot => { return adUnitCode => { return slot.getSlotElementId() === 'myFavoriteDivId'; } };
 * @alias module:pbjs.setTargetingForGPTAsync
 */


pbjs.setTargetingForGPTAsync = function (adUnit, customSlotMatching) {
  utils.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["isGptPubadsDefined"])()) {
    utils.logError('window.googletag is not defined on the page');
    return;
  } // get our ad unit codes


  var targetingSet = __WEBPACK_IMPORTED_MODULE_7__targeting__["b" /* targeting */].getAllTargeting(adUnit); // first reset any old targeting

  __WEBPACK_IMPORTED_MODULE_7__targeting__["b" /* targeting */].resetPresetTargeting(adUnit); // now set new targeting keys

  __WEBPACK_IMPORTED_MODULE_7__targeting__["b" /* targeting */].setTargetingForGPT(targetingSet, customSlotMatching);
  Object.keys(targetingSet).forEach((function (adUnitCode) {
    Object.keys(targetingSet[adUnitCode]).forEach((function (targetingKey) {
      if (targetingKey === 'hb_adid') {
        __WEBPACK_IMPORTED_MODULE_6__auctionManager__["a" /* auctionManager */].setStatusForBids(targetingSet[adUnitCode][targetingKey], CONSTANTS.BID_STATUS.BID_TARGETING_SET);
      }
    }));
  })); // emit event

  events.emit(SET_TARGETING, targetingSet);
};
/**
 * Set query string targeting on all AST (AppNexus Seller Tag) ad units. Note that this function has to be called after all ad units on page are defined. For working example code, see [Using Prebid.js with AppNexus Publisher Ad Server](http://prebid.org/dev-docs/examples/use-prebid-with-appnexus-ad-server.html).
 * @alias module:pbjs.setTargetingForAst
 */


pbjs.setTargetingForAst = function () {
  utils.logInfo("Invoking pbjs.setTargetingForAn", arguments);

  if (!__WEBPACK_IMPORTED_MODULE_7__targeting__["b" /* targeting */].isApntagDefined()) {
    utils.logError('window.apntag is not defined on the page');
    return;
  }

  __WEBPACK_IMPORTED_MODULE_7__targeting__["b" /* targeting */].setTargetingForAst(); // emit event

  events.emit(SET_TARGETING, __WEBPACK_IMPORTED_MODULE_7__targeting__["b" /* targeting */].getAllTargeting());
};

function emitAdRenderFail(reason, message, bid) {
  var data = {};
  data.reason = reason;
  data.message = message;

  if (bid) {
    data.bid = bid;
  }

  utils.logError(message);
  events.emit(AD_RENDER_FAILED, data);
}
/**
 * This function will render the ad (based on params) in the given iframe document passed through.
 * Note that doc SHOULD NOT be the parent document page as we can't doc.write() asynchronously
 * @param  {HTMLDocument} doc document
 * @param  {string} id bid id to locate the ad
 * @alias module:pbjs.renderAd
 */


pbjs.renderAd = function (doc, id) {
  utils.logInfo("Invoking pbjs.renderAd", arguments);
  utils.logMessage('Calling renderAd with adId :' + id);

  if (doc && id) {
    try {
      // lookup ad by ad Id
      var bid = __WEBPACK_IMPORTED_MODULE_6__auctionManager__["a" /* auctionManager */].findBidByAdId(id);

      if (bid) {
        bid.status = CONSTANTS.BID_STATUS.RENDERED; // replace macros according to openRTB with price paid = bid.cpm

        bid.ad = utils.replaceAuctionPrice(bid.ad, bid.cpm);
        bid.adUrl = utils.replaceAuctionPrice(bid.adUrl, bid.cpm); // save winning bids

        __WEBPACK_IMPORTED_MODULE_6__auctionManager__["a" /* auctionManager */].addWinningBid(bid); // emit 'bid won' event here

        events.emit(BID_WON, bid);
        var height = bid.height,
            width = bid.width,
            ad = bid.ad,
            mediaType = bid.mediaType,
            adUrl = bid.adUrl,
            renderer = bid.renderer;
        var creativeComment = document.createComment("Creative ".concat(bid.creativeId, " served by ").concat(bid.bidder, " Prebid.js Header Bidding"));
        utils.insertElement(creativeComment, doc, 'body');

        if (Object(__WEBPACK_IMPORTED_MODULE_12__Renderer__["c" /* isRendererRequired */])(renderer)) {
          Object(__WEBPACK_IMPORTED_MODULE_12__Renderer__["b" /* executeRenderer */])(renderer, bid);
        } else if (doc === document && !utils.inIframe() || mediaType === 'video') {
          var message = "Error trying to write ad. Ad render call ad id ".concat(id, " was prevented from writing to the main document.");
          emitAdRenderFail(PREVENT_WRITING_ON_MAIN_DOCUMENT, message, bid);
        } else if (ad) {
          doc.write(ad);
          doc.close();
          setRenderSize(doc, width, height);
          utils.callBurl(bid);
        } else if (adUrl) {
          var iframe = utils.createInvisibleIframe();
          iframe.height = height;
          iframe.width = width;
          iframe.style.display = 'inline';
          iframe.style.overflow = 'hidden';
          iframe.src = adUrl;
          utils.insertElement(iframe, doc, 'body');
          setRenderSize(doc, width, height);
          utils.callBurl(bid);
        } else {
          var _message = "Error trying to write ad. No ad for bid response id: ".concat(id);

          emitAdRenderFail(NO_AD, _message, bid);
        }
      } else {
        var _message2 = "Error trying to write ad. Cannot find ad by given id : ".concat(id);

        emitAdRenderFail(CANNOT_FIND_AD, _message2);
      }
    } catch (e) {
      var _message3 = "Error trying to write ad Id :".concat(id, " to the page:").concat(e.message);

      emitAdRenderFail(EXCEPTION, _message3);
    }
  } else {
    var _message4 = "Error trying to write ad Id :".concat(id, " to the page. Missing document or adId");

    emitAdRenderFail(MISSING_DOC_OR_ADID, _message4);
  }
};
/**
 * Remove adUnit from the $$PREBID_GLOBAL$$ configuration
 * @param  {string} adUnitCode the adUnitCode to remove
 * @alias module:pbjs.removeAdUnit
 */


pbjs.removeAdUnit = function (adUnitCode) {
  utils.logInfo("Invoking pbjs.removeAdUnit", arguments);

  if (adUnitCode) {
    for (var i = 0; i < pbjs.adUnits.length; i++) {
      if (pbjs.adUnits[i].code === adUnitCode) {
        pbjs.adUnits.splice(i, 1);
      }
    }
  }
};
/**
 * @param {Object} requestOptions
 * @param {function} requestOptions.bidsBackHandler
 * @param {number} requestOptions.timeout
 * @param {Array} requestOptions.adUnits
 * @param {Array} requestOptions.adUnitCodes
 * @param {Array} requestOptions.labels
 * @alias module:pbjs.requestBids
 */


pbjs.requestBids = Object(__WEBPACK_IMPORTED_MODULE_8__hook__["a" /* createHook */])('asyncSeries', (function () {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      bidsBackHandler = _ref2.bidsBackHandler,
      timeout = _ref2.timeout,
      adUnits = _ref2.adUnits,
      adUnitCodes = _ref2.adUnitCodes,
      labels = _ref2.labels;

  events.emit(REQUEST_BIDS);
  var cbTimeout = timeout || __WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig('bidderTimeout');
  adUnits = adUnits || pbjs.adUnits;
  utils.logInfo("Invoking pbjs.requestBids", arguments);

  if (adUnitCodes && adUnitCodes.length) {
    // if specific adUnitCodes supplied filter adUnits for those codes
    adUnits = adUnits.filter((function (unit) {
      return __WEBPACK_IMPORTED_MODULE_10_core_js_library_fn_array_includes___default()(adUnitCodes, unit.code);
    }));
  } else {
    // otherwise derive adUnitCodes from adUnits
    adUnitCodes = adUnits && adUnits.map((function (unit) {
      return unit.code;
    }));
  }
  /*
   * for a given adunit which supports a set of mediaTypes
   * and a given bidder which supports a set of mediaTypes
   * a bidder is eligible to participate on the adunit
   * if it supports at least one of the mediaTypes on the adunit
   */


  adUnits.forEach((function (adUnit) {
    // get the adunit's mediaTypes, defaulting to banner if mediaTypes isn't present
    var adUnitMediaTypes = Object.keys(adUnit.mediaTypes || {
      'banner': 'banner'
    }); // get the bidder's mediaTypes

    var allBidders = adUnit.bids.map((function (bid) {
      return bid.bidder;
    }));
    var bidderRegistry = adapterManager.bidderRegistry;
    var s2sConfig = __WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig('s2sConfig');
    var s2sBidders = s2sConfig && s2sConfig.bidders;
    var bidders = s2sBidders ? allBidders.filter((function (bidder) {
      return !__WEBPACK_IMPORTED_MODULE_10_core_js_library_fn_array_includes___default()(s2sBidders, bidder);
    })) : allBidders;
    adUnit.transactionId = utils.generateUUID();
    bidders.forEach((function (bidder) {
      var adapter = bidderRegistry[bidder];
      var spec = adapter && adapter.getSpec && adapter.getSpec(); // banner is default if not specified in spec

      var bidderMediaTypes = spec && spec.supportedMediaTypes || ['banner']; // check if the bidder's mediaTypes are not in the adUnit's mediaTypes

      var bidderEligible = adUnitMediaTypes.some((function (type) {
        return __WEBPACK_IMPORTED_MODULE_10_core_js_library_fn_array_includes___default()(bidderMediaTypes, type);
      }));

      if (!bidderEligible) {
        // drop the bidder from the ad unit if it's not compatible
        utils.logWarn(utils.unsupportedBidderMessage(adUnit, bidder));
        adUnit.bids = adUnit.bids.filter((function (bid) {
          return bid.bidder !== bidder;
        }));
      }
    }));
    __WEBPACK_IMPORTED_MODULE_11__adUnits__["a" /* adunitCounter */].incrementCounter(adUnit.code);
  }));

  if (!adUnits || adUnits.length === 0) {
    utils.logMessage('No adUnits configured. No bids requested.');

    if (typeof bidsBackHandler === 'function') {
      // executeCallback, this will only be called in case of first request
      try {
        bidsBackHandler();
      } catch (e) {
        utils.logError('Error executing bidsBackHandler', null, e);
      }
    }

    return;
  }

  var auction = __WEBPACK_IMPORTED_MODULE_6__auctionManager__["a" /* auctionManager */].createAuction({
    adUnits: adUnits,
    adUnitCodes: adUnitCodes,
    callback: bidsBackHandler,
    cbTimeout: cbTimeout,
    labels: labels
  });
  adUnitCodes.forEach((function (code) {
    return __WEBPACK_IMPORTED_MODULE_7__targeting__["b" /* targeting */].setLatestAuctionForAdUnit(code, auction.getAuctionId());
  }));
  auction.callBids();
  return auction;
}));
/**
 *
 * Add adunit(s)
 * @param {Array|Object} adUnitArr Array of adUnits or single adUnit Object.
 * @alias module:pbjs.addAdUnits
 */

pbjs.addAdUnits = function (adUnitArr) {
  utils.logInfo("Invoking pbjs.addAdUnits", arguments);

  if (utils.isArray(adUnitArr)) {
    pbjs.adUnits.push.apply(pbjs.adUnits, adUnitArr);
  } else if (_typeof(adUnitArr) === 'object') {
    pbjs.adUnits.push(adUnitArr);
  } // emit event


  events.emit(ADD_AD_UNITS);
};
/**
 * @param {string} event the name of the event
 * @param {Function} handler a callback to set on event
 * @param {string} id an identifier in the context of the event
 * @alias module:pbjs.onEvent
 *
 * This API call allows you to register a callback to handle a Prebid.js event.
 * An optional `id` parameter provides more finely-grained event callback registration.
 * This makes it possible to register callback events for a specific item in the
 * event context. For example, `bidWon` events will accept an `id` for ad unit code.
 * `bidWon` callbacks registered with an ad unit code id will be called when a bid
 * for that ad unit code wins the auction. Without an `id` this method registers the
 * callback for every `bidWon` event.
 *
 * Currently `bidWon` is the only event that accepts an `id` parameter.
 */


pbjs.onEvent = function (event, handler, id) {
  utils.logInfo("Invoking pbjs.onEvent", arguments);

  if (!utils.isFn(handler)) {
    utils.logError('The event handler provided is not a function and was not set on event "' + event + '".');
    return;
  }

  if (id && !eventValidators[event].call(null, id)) {
    utils.logError('The id provided is not valid for event "' + event + '" and no handler was set.');
    return;
  }

  events.on(event, handler, id);
};
/**
 * @param {string} event the name of the event
 * @param {Function} handler a callback to remove from the event
 * @param {string} id an identifier in the context of the event (see `$$PREBID_GLOBAL$$.onEvent`)
 * @alias module:pbjs.offEvent
 */


pbjs.offEvent = function (event, handler, id) {
  utils.logInfo("Invoking pbjs.offEvent", arguments);

  if (id && !eventValidators[event].call(null, id)) {
    return;
  }

  events.off(event, handler, id);
};
/*
 * Wrapper to register bidderAdapter externally (adapterManager.registerBidAdapter())
 * @param  {Function} bidderAdaptor [description]
 * @param  {string} bidderCode [description]
 * @alias module:pbjs.registerBidAdapter
 */


pbjs.registerBidAdapter = function (bidderAdaptor, bidderCode) {
  utils.logInfo("Invoking pbjs.registerBidAdapter", arguments);

  try {
    adapterManager.registerBidAdapter(bidderAdaptor(), bidderCode);
  } catch (e) {
    utils.logError('Error registering bidder adapter : ' + e.message);
  }
};
/**
 * Wrapper to register analyticsAdapter externally (adapterManager.registerAnalyticsAdapter())
 * @param  {Object} options [description]
 * @alias module:pbjs.registerAnalyticsAdapter
 */


pbjs.registerAnalyticsAdapter = function (options) {
  utils.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);

  try {
    adapterManager.registerAnalyticsAdapter(options);
  } catch (e) {
    utils.logError('Error registering analytics adapter : ' + e.message);
  }
};
/**
 * Wrapper to bidfactory.createBid()
 * @param  {string} statusCode [description]
 * @alias module:pbjs.createBid
 * @return {Object} bidResponse [description]
 */


pbjs.createBid = function (statusCode) {
  utils.logInfo("Invoking pbjs.createBid", arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_13__bidfactory__["a" /* createBid */])(statusCode);
};
/**
 * @deprecated this function will be removed in the next release. Prebid has deprected external JS loading.
 * @param  {string} tagSrc [description]
 * @param  {Function} callback [description]
 * @alias module:pbjs.loadScript
 */


pbjs.loadScript = function (tagSrc, callback, useCache) {
  utils.logInfo("Invoking pbjs.loadScript", arguments);
  Object(__WEBPACK_IMPORTED_MODULE_4__adloader__["b" /* loadScript */])(tagSrc, callback, useCache);
};
/**
 * Enable sending analytics data to the analytics provider of your
 * choice.
 *
 * For usage, see [Integrate with the Prebid Analytics
 * API](http://prebid.org/dev-docs/integrate-with-the-prebid-analytics-api.html).
 *
 * For a list of analytics adapters, see [Analytics for
 * Prebid](http://prebid.org/overview/analytics.html).
 * @param  {Object} config
 * @param {string} config.provider The name of the provider, e.g., `"ga"` for Google Analytics.
 * @param {Object} config.options The options for this particular analytics adapter.  This will likely vary between adapters.
 * @alias module:pbjs.enableAnalytics
 */


pbjs.enableAnalytics = function (config) {
  if (config && !utils.isEmpty(config)) {
    utils.logInfo("Invoking pbjs.enableAnalytics for: ", config);
    adapterManager.enableAnalytics(config);
  } else {
    utils.logError("pbjs.enableAnalytics should be called with option {}");
  }
};
/**
 * @alias module:pbjs.aliasBidder
 */


pbjs.aliasBidder = function (bidderCode, alias) {
  utils.logInfo("Invoking pbjs.aliasBidder", arguments);

  if (bidderCode && alias) {
    adapterManager.aliasBidAdapter(bidderCode, alias);
  } else {
    utils.logError('bidderCode and alias must be passed as arguments', "pbjs.aliasBidder");
  }
};
/**
 * The bid response object returned by an external bidder adapter during the auction.
 * @typedef {Object} AdapterBidResponse
 * @property {string} pbAg Auto granularity price bucket; CPM <= 5 ? increment = 0.05 : CPM > 5 && CPM <= 10 ? increment = 0.10 : CPM > 10 && CPM <= 20 ? increment = 0.50 : CPM > 20 ? priceCap = 20.00.  Example: `"0.80"`.
 * @property {string} pbCg Custom price bucket.  For example setup, see {@link setPriceGranularity}.  Example: `"0.84"`.
 * @property {string} pbDg Dense granularity price bucket; CPM <= 3 ? increment = 0.01 : CPM > 3 && CPM <= 8 ? increment = 0.05 : CPM > 8 && CPM <= 20 ? increment = 0.50 : CPM > 20? priceCap = 20.00.  Example: `"0.84"`.
 * @property {string} pbLg Low granularity price bucket; $0.50 increment, capped at $5, floored to two decimal places.  Example: `"0.50"`.
 * @property {string} pbMg Medium granularity price bucket; $0.10 increment, capped at $20, floored to two decimal places.  Example: `"0.80"`.
 * @property {string} pbHg High granularity price bucket; $0.01 increment, capped at $20, floored to two decimal places.  Example: `"0.84"`.
 *
 * @property {string} bidder The string name of the bidder.  This *may* be the same as the `bidderCode`.  For For a list of all bidders and their codes, see [Bidders' Params](http://prebid.org/dev-docs/bidders.html).
 * @property {string} bidderCode The unique string that identifies this bidder.  For a list of all bidders and their codes, see [Bidders' Params](http://prebid.org/dev-docs/bidders.html).
 *
 * @property {string} requestId The [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) representing the bid request.
 * @property {number} requestTimestamp The time at which the bid request was sent out, expressed in milliseconds.
 * @property {number} responseTimestamp The time at which the bid response was received, expressed in milliseconds.
 * @property {number} timeToRespond How long it took for the bidder to respond with this bid, expressed in milliseconds.
 *
 * @property {string} size The size of the ad creative, expressed in `"AxB"` format, where A and B are numbers of pixels.  Example: `"320x50"`.
 * @property {string} width The width of the ad creative in pixels.  Example: `"320"`.
 * @property {string} height The height of the ad creative in pixels.  Example: `"50"`.
 *
 * @property {string} ad The actual ad creative content, often HTML with CSS, JavaScript, and/or links to additional content.  Example: `"<div id='beacon_-YQbipJtdxmMCgEPHExLhmqzEm' style='position: absolute; left: 0px; top: 0px; visibility: hidden;'><img src='http://aplus-...'/></div><iframe src=\"http://aax-us-east.amazon-adsystem.com/e/is/8dcfcd..." width=\"728\" height=\"90\" frameborder=\"0\" ...></iframe>",`.
 * @property {number} ad_id The ad ID of the creative, as understood by the bidder's system.  Used by the line item's [creative in the ad server](http://prebid.org/adops/send-all-bids-adops.html#step-3-add-a-creative).
 * @property {string} adUnitCode The code used to uniquely identify the ad unit on the publisher's page.
 *
 * @property {string} statusMessage The status of the bid.  Allowed values: `"Bid available"` or `"Bid returned empty or error response"`.
 * @property {number} cpm The exact bid price from the bidder, expressed to the thousandths place.  Example: `"0.849"`.
 *
 * @property {Object} adserverTargeting An object whose values represent the ad server's targeting on the bid.
 * @property {string} adserverTargeting.hb_adid The ad ID of the creative, as understood by the ad server.
 * @property {string} adserverTargeting.hb_pb The price paid to show the creative, as logged in the ad server.
 * @property {string} adserverTargeting.hb_bidder The winning bidder whose ad creative will be served by the ad server.
*/

/**
 * Get all of the bids that have been rendered.  Useful for [troubleshooting your integration](http://prebid.org/dev-docs/prebid-troubleshooting-guide.html).
 * @return {Array<AdapterBidResponse>} A list of bids that have been rendered.
*/


pbjs.getAllWinningBids = function () {
  return __WEBPACK_IMPORTED_MODULE_6__auctionManager__["a" /* auctionManager */].getAllWinningBids().map(__WEBPACK_IMPORTED_MODULE_1__utils__["removeRequestId"]);
};
/**
 * Get all of the bids that have won their respective auctions.
 * @return {Array<AdapterBidResponse>} A list of bids that have won their respective auctions.
 */


pbjs.getAllPrebidWinningBids = function () {
  return __WEBPACK_IMPORTED_MODULE_6__auctionManager__["a" /* auctionManager */].getBidsReceived().filter((function (bid) {
    return bid.status === CONSTANTS.BID_STATUS.BID_TARGETING_SET;
  })).map(__WEBPACK_IMPORTED_MODULE_1__utils__["removeRequestId"]);
};
/**
 * Get array of highest cpm bids for all adUnits, or highest cpm bid
 * object for the given adUnit
 * @param {string} adUnitCode - optional ad unit code
 * @alias module:pbjs.getHighestCpmBids
 * @return {Array} array containing highest cpm bid object(s)
 */


pbjs.getHighestCpmBids = function (adUnitCode) {
  var bidsReceived = Object(__WEBPACK_IMPORTED_MODULE_7__targeting__["a" /* getHighestCpmBidsFromBidPool */])(__WEBPACK_IMPORTED_MODULE_6__auctionManager__["a" /* auctionManager */].getBidsReceived(), __WEBPACK_IMPORTED_MODULE_1__utils__["getLatestHighestCpmBid"]);
  return __WEBPACK_IMPORTED_MODULE_7__targeting__["b" /* targeting */].getWinningBids(adUnitCode, bidsReceived).map(__WEBPACK_IMPORTED_MODULE_1__utils__["removeRequestId"]);
};
/**
 * Mark the winning bid as used, should only be used in conjunction with video
 * @typedef {Object} MarkBidRequest
 * @property {string} adUnitCode The ad unit code
 * @property {string} adId The id representing the ad we want to mark
 *
 * @alias module:pbjs.markWinningBidAsUsed
*/


pbjs.markWinningBidAsUsed = function (markBidRequest) {
  var bids = [];

  if (markBidRequest.adUnitCode && markBidRequest.adId) {
    bids = __WEBPACK_IMPORTED_MODULE_6__auctionManager__["a" /* auctionManager */].getBidsReceived().filter((function (bid) {
      return bid.adId === markBidRequest.adId && bid.adUnitCode === markBidRequest.adUnitCode;
    }));
  } else if (markBidRequest.adUnitCode) {
    bids = __WEBPACK_IMPORTED_MODULE_7__targeting__["b" /* targeting */].getWinningBids(markBidRequest.adUnitCode);
  } else if (markBidRequest.adId) {
    bids = __WEBPACK_IMPORTED_MODULE_6__auctionManager__["a" /* auctionManager */].getBidsReceived().filter((function (bid) {
      return bid.adId === markBidRequest.adId;
    }));
  } else {
    utils.logWarn('Inproper usage of markWinningBidAsUsed. It\'ll need an adUnitCode and/or adId to function.');
  }

  if (bids.length > 0) {
    bids[0].status = CONSTANTS.BID_STATUS.RENDERED;
  }
};
/**
 * Get Prebid config options
 * @param {Object} options
 * @alias module:pbjs.getConfig
 */


pbjs.getConfig = __WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig;
/**
 * Set Prebid config options.
 * (Added in version 0.27.0).
 *
 * `setConfig` is designed to allow for advanced configuration while
 * reducing the surface area of the public API.  For more information
 * about the move to `setConfig` (and the resulting deprecations of
 * some other public methods), see [the Prebid 1.0 public API
 * proposal](https://gist.github.com/mkendall07/51ee5f6b9f2df01a89162cf6de7fe5b6).
 *
 * #### Troubleshooting your configuration
 *
 * If you call `pbjs.setConfig` without an object, e.g.,
 *
 * `pbjs.setConfig('debug', 'true'))`
 *
 * then Prebid.js will print an error to the console that says:
 *
 * ```
 * ERROR: setConfig options must be an object
 * ```
 *
 * If you don't see that message, you can assume the config object is valid.
 *
 * @param {Object} options Global Prebid configuration object. Must be JSON - no JavaScript functions are allowed.
 * @param {string} options.bidderSequence The order in which bidders are called.  Example: `pbjs.setConfig({ bidderSequence: "fixed" })`.  Allowed values: `"fixed"` (order defined in `adUnit.bids` array on page), `"random"`.
 * @param {boolean} options.debug Turn debug logging on/off. Example: `pbjs.setConfig({ debug: true })`.
 * @param {string} options.priceGranularity The bid price granularity to use.  Example: `pbjs.setConfig({ priceGranularity: "medium" })`. Allowed values: `"low"` ($0.50), `"medium"` ($0.10), `"high"` ($0.01), `"auto"` (sliding scale), `"dense"` (like `"auto"`, with smaller increments at lower CPMs), or a custom price bucket object, e.g., `{ "buckets" : [{"min" : 0,"max" : 20,"increment" : 0.1,"cap" : true}]}`.
 * @param {boolean} options.enableSendAllBids Turn "send all bids" mode on/off.  Example: `pbjs.setConfig({ enableSendAllBids: true })`.
 * @param {number} options.bidderTimeout Set a global bidder timeout, in milliseconds.  Example: `pbjs.setConfig({ bidderTimeout: 3000 })`.  Note that it's still possible for a bid to get into the auction that responds after this timeout. This is due to how [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) works in JS: it queues the callback in the event loop in an approximate location that should execute after this time but it is not guaranteed.  For more information about the asynchronous event loop and `setTimeout`, see [How JavaScript Timers Work](https://johnresig.com/blog/how-javascript-timers-work/).
 * @param {string} options.publisherDomain The publisher's domain where Prebid is running, for cross-domain iFrame communication.  Example: `pbjs.setConfig({ publisherDomain: "https://www.theverge.com" })`.
 * @param {Object} options.s2sConfig The configuration object for [server-to-server header bidding](http://prebid.org/dev-docs/get-started-with-prebid-server.html).  Example:
 * @alias module:pbjs.setConfig
 * ```
 * pbjs.setConfig({
 *     s2sConfig: {
 *         accountId: '1',
 *         enabled: true,
 *         bidders: ['appnexus', 'pubmatic'],
 *         timeout: 1000,
 *         adapter: 'prebidServer',
 *         endpoint: 'https://prebid.adnxs.com/pbs/v1/auction'
 *     }
 * })
 * ```
 */

pbjs.setConfig = __WEBPACK_IMPORTED_MODULE_5__config__["config"].setConfig;
pbjs.que.push((function () {
  return Object(__WEBPACK_IMPORTED_MODULE_2__secureCreatives__["a" /* listenMessagesFromCreative */])();
}));
/**
 * This queue lets users load Prebid asynchronously, but run functions the same way regardless of whether it gets loaded
 * before or after their script executes. For example, given the code:
 *
 * <script src="url/to/Prebid.js" async></script>
 * <script>
 *   var pbjs = pbjs || {};
 *   pbjs.cmd = pbjs.cmd || [];
 *   pbjs.cmd.push(functionToExecuteOncePrebidLoads);
 * </script>
 *
 * If the page's script runs before prebid loads, then their function gets added to the queue, and executed
 * by prebid once it's done loading. If it runs after prebid loads, then this monkey-patch causes their
 * function to execute immediately.
 *
 * @memberof pbjs
 * @param  {function} command A function which takes no arguments. This is guaranteed to run exactly once, and only after
 *                            the Prebid script has been fully loaded.
 * @alias module:pbjs.cmd.push
 */

pbjs.cmd.push = function (command) {
  if (typeof command === 'function') {
    try {
      command.call();
    } catch (e) {
      utils.logError('Error processing command :', e.message, e.stack);
    }
  } else {
    utils.logError("Commands written into pbjs.cmd.push must be wrapped in a function");
  }
};

pbjs.que.push = pbjs.cmd.push;

function processQueue(queue) {
  queue.forEach((function (cmd) {
    if (typeof cmd.called === 'undefined') {
      try {
        cmd.call();
        cmd.called = true;
      } catch (e) {
        utils.logError('Error processing command :', 'prebid.js', e);
      }
    }
  }));
}
/**
 * @alias module:pbjs.processQueue
 */


pbjs.processQueue = function () {
  processQueue(pbjs.que);
  processQueue(pbjs.cmd);
};

/* harmony default export */ __webpack_exports__["default"] = (pbjs);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(14);
var $find = __webpack_require__(34)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY]((function () { forced = false; }));
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(26)(KEY);


/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listenMessagesFromCreative;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__native__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auctionManager__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Renderer__ = __webpack_require__(12);
/* Secure Creatives
  Provides support for rendering creatives into cross domain iframes such as SafeFrame to prevent
   access to a publisher page from creative payloads.
 */







var BID_WON = __WEBPACK_IMPORTED_MODULE_2__constants__["EVENTS"].BID_WON;
function listenMessagesFromCreative() {
  addEventListener('message', receiveMessage, false);
}

function receiveMessage(ev) {
  var key = ev.message ? 'message' : 'data';
  var data = {};

  try {
    data = JSON.parse(ev[key]);
  } catch (e) {
    return;
  }

  if (data && data.adId) {
    var adObject = __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find___default()(__WEBPACK_IMPORTED_MODULE_4__auctionManager__["a" /* auctionManager */].getBidsReceived(), (function (bid) {
      return bid.adId === data.adId;
    }));

    if (data.message === 'Prebid Request') {
      sendAdToCreative(adObject, data.adServerDomain, ev.source); // save winning bids

      __WEBPACK_IMPORTED_MODULE_4__auctionManager__["a" /* auctionManager */].addWinningBid(adObject);
      __WEBPACK_IMPORTED_MODULE_0__events___default.a.emit(BID_WON, adObject);
    } // handle this script from native template in an ad server
    // window.parent.postMessage(JSON.stringify({
    //   message: 'Prebid Native',
    //   adId: '%%PATTERN:hb_adid%%'
    // }), '*');


    if (data.message === 'Prebid Native') {
      Object(__WEBPACK_IMPORTED_MODULE_1__native__["b" /* fireNativeTrackers */])(data, adObject);
      __WEBPACK_IMPORTED_MODULE_4__auctionManager__["a" /* auctionManager */].addWinningBid(adObject);
      __WEBPACK_IMPORTED_MODULE_0__events___default.a.emit(BID_WON, adObject);
    }
  }
}

function sendAdToCreative(adObject, remoteDomain, source) {
  var adId = adObject.adId,
      ad = adObject.ad,
      adUrl = adObject.adUrl,
      width = adObject.width,
      height = adObject.height,
      renderer = adObject.renderer; // rendering for outstream safeframe

  if (Object(__WEBPACK_IMPORTED_MODULE_6__Renderer__["c" /* isRendererRequired */])(renderer)) {
    Object(__WEBPACK_IMPORTED_MODULE_6__Renderer__["b" /* executeRenderer */])(renderer, adObject);
  } else if (adId) {
    resizeRemoteCreative(adObject);
    source.postMessage(JSON.stringify({
      message: 'Prebid Response',
      ad: ad,
      adUrl: adUrl,
      adId: adId,
      width: width,
      height: height
    }), remoteDomain);
  }
}

function resizeRemoteCreative(_ref) {
  var adUnitCode = _ref.adUnitCode,
      width = _ref.width,
      height = _ref.height;
  // resize both container div + iframe
  ['div', 'iframe'].forEach((function (elmType) {
    var element = getElementByAdUnit(elmType);

    if (element) {
      var elementStyle = element.style;
      elementStyle.width = width + 'px';
      elementStyle.height = height + 'px';
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils__["logWarn"])("Unable to locate matching page element for adUnitCode ".concat(adUnitCode, ".  Can't resize it to ad's dimensions.  Please review setup."));
    }
  }));

  function getElementByAdUnit(elmType) {
    var id = getElementIdBasedOnAdServer(adUnitCode);
    var parentDivEle = document.getElementById(id);
    return parentDivEle && parentDivEle.querySelector(elmType);
  }

  function getElementIdBasedOnAdServer(adUnitCode) {
    if (window.googletag) {
      return getDfpElementId(adUnitCode);
    } else if (window.apntag) {
      return getAstElementId(adUnitCode);
    } else {
      return adUnitCode;
    }
  }

  function getDfpElementId(adUnitCode) {
    return __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find___default()(window.googletag.pubads().getSlots().filter(Object(__WEBPACK_IMPORTED_MODULE_3__utils__["isSlotMatchingAdUnitCode"])(adUnitCode)), (function (slot) {
      return slot;
    })).getSlotElementId();
  }

  function getAstElementId(adUnitCode) {
    var astTag = window.apntag.getTag(adUnitCode);
    return astTag && astTag.targetId;
  }
}

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export boundHook */
/* unused harmony export disableOverrides */
/* unused harmony export addBidResponseHook */
/* unused harmony export getConfig */
/* harmony export (immutable) */ __webpack_exports__["a"] = sessionLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auction__ = __webpack_require__(45);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var OVERRIDE_KEY = "pbjs:debugging";
var boundHook;

function logMessage(msg) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils__["logMessage"])('DEBUG: ' + msg);
}

function logWarn(msg) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils__["logWarn"])('DEBUG: ' + msg);
}

function enableOverrides(overrides) {
  var fromSession = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  __WEBPACK_IMPORTED_MODULE_0__config__["config"].setConfig({
    'debug': true
  });
  logMessage("bidder overrides enabled".concat(fromSession ? ' from session' : ''));

  if (boundHook) {
    __WEBPACK_IMPORTED_MODULE_2__auction__["b" /* addBidResponse */].removeHook(boundHook);
  }

  boundHook = addBidResponseHook.bind(null, overrides);
  __WEBPACK_IMPORTED_MODULE_2__auction__["b" /* addBidResponse */].addHook(boundHook, 5);
}

function disableOverrides() {
  if (boundHook) {
    __WEBPACK_IMPORTED_MODULE_2__auction__["b" /* addBidResponse */].removeHook(boundHook);
    logMessage('bidder overrides disabled');
  }
}
function addBidResponseHook(overrides, adUnitCode, bid, next) {
  if (Array.isArray(overrides.bidders) && overrides.bidders.indexOf(bid.bidderCode) === -1) {
    logWarn("bidder '".concat(bid.bidderCode, "' excluded from auction by bidder overrides"));
    return;
  }

  if (Array.isArray(overrides.bids)) {
    overrides.bids.forEach((function (overrideBid) {
      if (overrideBid.bidder && overrideBid.bidder !== bid.bidderCode) {
        return;
      }

      if (overrideBid.adUnitCode && overrideBid.adUnitCode !== adUnitCode) {
        return;
      }

      bid = _extends({}, bid);
      Object.keys(overrideBid).filter((function (key) {
        return ['bidder', 'adUnitCode'].indexOf(key) === -1;
      })).forEach((function (key) {
        var value = overrideBid[key];
        logMessage("bidder overrides changed '".concat(adUnitCode, "/").concat(bid.bidderCode, "' bid.").concat(key, " from '").concat(bid[key], "' to '").concat(value, "'"));
        bid[key] = value;
      }));
    }));
  }

  next(adUnitCode, bid);
}
function getConfig(debugging) {
  if (!debugging.enabled) {
    disableOverrides();

    try {
      window.sessionStorage.removeItem(OVERRIDE_KEY);
    } catch (e) {}
  } else {
    try {
      window.sessionStorage.setItem(OVERRIDE_KEY, JSON.stringify(debugging));
    } catch (e) {}

    enableOverrides(debugging);
  }
}
__WEBPACK_IMPORTED_MODULE_0__config__["config"].getConfig('debugging', (function (_ref) {
  var debugging = _ref.debugging;
  return getConfig(debugging);
}));
function sessionLoader(storage) {
  var overrides;

  try {
    storage = storage || window.sessionStorage;
    overrides = JSON.parse(storage.getItem(OVERRIDE_KEY));
  } catch (e) {}

  if (overrides) {
    enableOverrides(overrides, true);
  }
}

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(51);
var createDesc = __webpack_require__(56);
module.exports = __webpack_require__(22) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(52);
var IE8_DOM_DEFINE = __webpack_require__(53);
var toPrimitive = __webpack_require__(55);
var dP = Object.defineProperty;

exports.f = __webpack_require__(22) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(22) && !__webpack_require__(33)((function () {
  return Object.defineProperty(__webpack_require__(54)('div'), 'a', { get: function () { return 7; } }).a != 7;
}));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var document = __webpack_require__(19).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(15);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 56:
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(24);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(60);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ajax; }));
/* harmony export (immutable) */ __webpack_exports__["b"] = ajaxBuilder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__url__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(3);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var utils = __webpack_require__(0);

var XHR_DONE = 4;
/**
 * Simple IE9+ and cross-browser ajax request function
 * Note: x-domain requests in IE9 do not support the use of cookies
 *
 * @param url string url
 * @param callback {object | function} callback
 * @param data mixed data
 * @param options object
 */

var ajax = ajaxBuilder();
function ajaxBuilder() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      request = _ref.request,
      done = _ref.done;

  return function (url, callback, data) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    try {
      var x;
      var method = options.method || (data ? 'POST' : 'GET');
      var parser = document.createElement('a');
      parser.href = url;
      var callbacks = _typeof(callback) === 'object' && callback !== null ? callback : {
        success: function success() {
          utils.logMessage('xhr success');
        },
        error: function error(e) {
          utils.logError('xhr error', null, e);
        }
      };

      if (typeof callback === 'function') {
        callbacks.success = callback;
      }

      x = new window.XMLHttpRequest();

      x.onreadystatechange = function () {
        if (x.readyState === XHR_DONE) {
          if (typeof done === 'function') {
            done(parser.origin);
          }

          var status = x.status;

          if (status >= 200 && status < 300 || status === 304) {
            callbacks.success(x.responseText, x);
          } else {
            callbacks.error(x.statusText, x);
          }
        }
      }; // Disabled timeout temporarily to avoid xhr failed requests. https://github.com/prebid/Prebid.js/issues/2648


      if (!__WEBPACK_IMPORTED_MODULE_1__config__["config"].getConfig('disableAjaxTimeout')) {
        x.ontimeout = function () {
          utils.logError('  xhr timeout after ', x.timeout, 'ms');
        };
      }

      if (method === 'GET' && data) {
        var urlInfo = Object(__WEBPACK_IMPORTED_MODULE_0__url__["c" /* parse */])(url, options);

        _extends(urlInfo.search, data);

        url = Object(__WEBPACK_IMPORTED_MODULE_0__url__["a" /* format */])(urlInfo);
      }

      x.open(method, url, true); // IE needs timoeut to be set after open - see #1410
      // Disabled timeout temporarily to avoid xhr failed requests. https://github.com/prebid/Prebid.js/issues/2648

      if (!__WEBPACK_IMPORTED_MODULE_1__config__["config"].getConfig('disableAjaxTimeout')) {
        x.timeout = timeout;
      }

      if (options.withCredentials) {
        x.withCredentials = true;
      }

      utils._each(options.customHeaders, (function (value, header) {
        x.setRequestHeader(header, value);
      }));

      if (options.preflight) {
        x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      }

      x.setRequestHeader('Content-Type', options.contentType || 'text/plain');

      if (typeof request === 'function') {
        request(parser.origin);
      }

      if (method === 'POST' && data) {
        x.send(data);
      } else {
        x.send();
      }
    } catch (error) {
      utils.logError('xhr construction', error);
    }
  };
}

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var isArray = __webpack_require__(38);
var SPECIES = __webpack_require__(25)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(13);
var global = __webpack_require__(19);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(62) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(14);
var $includes = __webpack_require__(65)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(26)('includes');


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(66);
var toLength = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(67);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(35);
var defined = __webpack_require__(24);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(37);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports = clone;

/*
  Identical to `just-extend(true, {}, obj1)`

  var arr = [1, 2, 3];
  var subObj = {aa: 1};
  var obj = {a: 3, b: 5, c: arr, d: subObj};
  var objClone = clone(obj);
  arr.push(4);
  subObj.bb = 2;
  obj; // {a: 3, b: 5, c: [1, 2, 3, 4], d: {aa: 1}}  
  objClone; // {a: 3, b: 5, c: [1, 2, 3], d: {aa: 1, bb: 2}}
*/

function clone(obj) {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    // include prototype properties
    var value = obj[key];
    if (value && typeof value == 'object') {
      result[key] = clone(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
module.exports = __webpack_require__(13).Array.includes;


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gdprDataHandler", (function() { return gdprDataHandler; }));
/* harmony export (immutable) */ __webpack_exports__["checkBidRequestSizes"] = checkBidRequestSizes;
/* harmony export (immutable) */ __webpack_exports__["setS2STestingModule"] = setS2STestingModule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sizeMapping__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adapters_bidderFactory__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ajax__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_find__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__adUnits__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__refererDetection__ = __webpack_require__(41);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @module adaptermanger */











var utils = __webpack_require__(0);

var CONSTANTS = __webpack_require__(4);

var events = __webpack_require__(9);

var s2sTestingModule; // store s2sTesting module if it's loaded

var adapterManager = {};

var _bidderRegistry = adapterManager.bidderRegistry = {};

var _aliasRegistry = adapterManager.aliasRegistry = {};

var _s2sConfig = {};
__WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig('s2sConfig', (function (config) {
  _s2sConfig = config.s2sConfig;
}));
var _analyticsRegistry = {};
/**
 * @typedef {object} LabelDescriptor
 * @property {boolean} labelAll describes whether or not this object expects all labels to match, or any label to match
 * @property {Array<string>} labels the labels listed on the bidder or adUnit
 * @property {Array<string>} activeLabels the labels specified as being active by requestBids
 */

function getBids(_ref) {
  var bidderCode = _ref.bidderCode,
      auctionId = _ref.auctionId,
      bidderRequestId = _ref.bidderRequestId,
      adUnits = _ref.adUnits,
      labels = _ref.labels,
      src = _ref.src;
  return adUnits.reduce((function (result, adUnit) {
    var _resolveStatus = Object(__WEBPACK_IMPORTED_MODULE_1__sizeMapping__["b" /* resolveStatus */])(Object(__WEBPACK_IMPORTED_MODULE_1__sizeMapping__["a" /* getLabels */])(adUnit, labels), adUnit.mediaTypes, adUnit.sizes),
        active = _resolveStatus.active,
        filteredMediaTypes = _resolveStatus.mediaTypes,
        filterResults = _resolveStatus.filterResults;

    if (!active) {
      utils.logInfo("Size mapping disabled adUnit \"".concat(adUnit.code, "\""));
    } else if (filterResults) {
      utils.logInfo("Size mapping filtered adUnit \"".concat(adUnit.code, "\" banner sizes from "), filterResults.before, 'to ', filterResults.after);
    }

    if (active) {
      result.push(adUnit.bids.filter((function (bid) {
        return bid.bidder === bidderCode;
      })).reduce((function (bids, bid) {
        var nativeParams = adUnit.nativeParams || utils.deepAccess(adUnit, 'mediaTypes.native');

        if (nativeParams) {
          bid = _extends({}, bid, {
            nativeParams: Object(__WEBPACK_IMPORTED_MODULE_2__native__["f" /* processNativeAdUnitParams */])(nativeParams)
          });
        }

        bid = _extends({}, bid, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["getDefinedParams"])(adUnit, ['mediaType', 'renderer']));

        var _resolveStatus2 = Object(__WEBPACK_IMPORTED_MODULE_1__sizeMapping__["b" /* resolveStatus */])(Object(__WEBPACK_IMPORTED_MODULE_1__sizeMapping__["a" /* getLabels */])(bid, labels), filteredMediaTypes),
            active = _resolveStatus2.active,
            mediaTypes = _resolveStatus2.mediaTypes,
            filterResults = _resolveStatus2.filterResults;

        if (!active) {
          utils.logInfo("Size mapping deactivated adUnit \"".concat(adUnit.code, "\" bidder \"").concat(bid.bidder, "\""));
        } else if (filterResults) {
          utils.logInfo("Size mapping filtered adUnit \"".concat(adUnit.code, "\" bidder \"").concat(bid.bidder, "\" banner sizes from "), filterResults.before, 'to ', filterResults.after);
        }

        if (utils.isValidMediaTypes(mediaTypes)) {
          bid = _extends({}, bid, {
            mediaTypes: mediaTypes
          });
        } else {
          utils.logError("mediaTypes is not correctly configured for adunit ".concat(adUnit.code));
        }

        if (active) {
          bids.push(_extends({}, bid, {
            adUnitCode: adUnit.code,
            transactionId: adUnit.transactionId,
            sizes: utils.deepAccess(mediaTypes, 'banner.sizes') || [],
            bidId: bid.bid_id || utils.getUniqueIdentifierStr(),
            bidderRequestId: bidderRequestId,
            auctionId: auctionId,
            src: src,
            bidRequestsCount: __WEBPACK_IMPORTED_MODULE_8__adUnits__["a" /* adunitCounter */].getCounter(adUnit.code)
          }));
        }

        return bids;
      }), []));
    }

    return result;
  }), []).reduce(__WEBPACK_IMPORTED_MODULE_0__utils__["flatten"], []).filter((function (val) {
    return val !== '';
  }));
}

function getAdUnitCopyForPrebidServer(adUnits) {
  var adaptersServerSide = _s2sConfig.bidders;
  var adUnitsCopy = utils.deepClone(adUnits);
  adUnitsCopy.forEach((function (adUnit) {
    // filter out client side bids
    adUnit.bids = adUnit.bids.filter((function (bid) {
      return __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(adaptersServerSide, bid.bidder) && (!doingS2STesting() || bid.finalSource !== s2sTestingModule.CLIENT);
    })).map((function (bid) {
      bid.bid_id = utils.getUniqueIdentifierStr();
      return bid;
    }));
  })); // don't send empty requests

  adUnitsCopy = adUnitsCopy.filter((function (adUnit) {
    return adUnit.bids.length !== 0;
  }));
  return adUnitsCopy;
}

function getAdUnitCopyForClientAdapters(adUnits) {
  var adUnitsClientCopy = utils.deepClone(adUnits); // filter out s2s bids

  adUnitsClientCopy.forEach((function (adUnit) {
    adUnit.bids = adUnit.bids.filter((function (bid) {
      return !doingS2STesting() || bid.finalSource !== s2sTestingModule.SERVER;
    }));
  })); // don't send empty requests

  adUnitsClientCopy = adUnitsClientCopy.filter((function (adUnit) {
    return adUnit.bids.length !== 0;
  }));
  return adUnitsClientCopy;
}

var gdprDataHandler = {
  consentData: null,
  setConsentData: function setConsentData(consentInfo) {
    gdprDataHandler.consentData = consentInfo;
  },
  getConsentData: function getConsentData() {
    return gdprDataHandler.consentData;
  }
};

adapterManager.makeBidRequests = function (adUnits, auctionStart, auctionId, cbTimeout, labels) {
  var bidRequests = [];
  adUnits = checkBidRequestSizes(adUnits);
  var bidderCodes = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["getBidderCodes"])(adUnits);

  if (__WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig('bidderSequence') === __WEBPACK_IMPORTED_MODULE_5__config__["RANDOM"]) {
    bidderCodes = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["shuffle"])(bidderCodes);
  }

  var refererInfo = Object(__WEBPACK_IMPORTED_MODULE_9__refererDetection__["b" /* getRefererInfo */])();
  var clientBidderCodes = bidderCodes;
  var clientTestAdapters = [];

  if (_s2sConfig.enabled) {
    // if s2sConfig.bidderControl testing is turned on
    if (doingS2STesting()) {
      // get all adapters doing client testing
      clientTestAdapters = s2sTestingModule.getSourceBidderMap(adUnits)[s2sTestingModule.CLIENT];
    } // these are called on the s2s adapter


    var adaptersServerSide = _s2sConfig.bidders; // don't call these client side (unless client request is needed for testing)

    clientBidderCodes = bidderCodes.filter((function (elm) {
      return !__WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(adaptersServerSide, elm) || __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(clientTestAdapters, elm);
    }));
    var adUnitsS2SCopy = getAdUnitCopyForPrebidServer(adUnits);
    var tid = utils.generateUUID();
    adaptersServerSide.forEach((function (bidderCode) {
      var bidderRequestId = utils.getUniqueIdentifierStr();
      var bidderRequest = {
        bidderCode: bidderCode,
        auctionId: auctionId,
        bidderRequestId: bidderRequestId,
        tid: tid,
        bids: getBids({
          bidderCode: bidderCode,
          auctionId: auctionId,
          bidderRequestId: bidderRequestId,
          'adUnits': utils.deepClone(adUnitsS2SCopy),
          labels: labels,
          src: CONSTANTS.S2S.SRC
        }),
        auctionStart: auctionStart,
        timeout: _s2sConfig.timeout,
        src: CONSTANTS.S2S.SRC,
        refererInfo: refererInfo
      };

      if (bidderRequest.bids.length !== 0) {
        bidRequests.push(bidderRequest);
      }
    })); // update the s2sAdUnits object and remove all bids that didn't pass sizeConfig/label checks from getBids()
    // this is to keep consistency and only allow bids/adunits that passed the checks to go to pbs

    adUnitsS2SCopy.forEach((function (adUnitCopy) {
      var validBids = adUnitCopy.bids.filter((function (adUnitBid) {
        return __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_find___default()(bidRequests, (function (request) {
          return __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_find___default()(request.bids, (function (reqBid) {
            return reqBid.bidId === adUnitBid.bid_id;
          }));
        }));
      }));
      adUnitCopy.bids = validBids;
    }));
    bidRequests.forEach((function (request) {
      request.adUnitsS2SCopy = adUnitsS2SCopy.filter((function (adUnitCopy) {
        return adUnitCopy.bids.length > 0;
      }));
    }));
  } // client adapters


  var adUnitsClientCopy = getAdUnitCopyForClientAdapters(adUnits);
  clientBidderCodes.forEach((function (bidderCode) {
    var bidderRequestId = utils.getUniqueIdentifierStr();
    var bidderRequest = {
      bidderCode: bidderCode,
      auctionId: auctionId,
      bidderRequestId: bidderRequestId,
      bids: getBids({
        bidderCode: bidderCode,
        auctionId: auctionId,
        bidderRequestId: bidderRequestId,
        'adUnits': utils.deepClone(adUnitsClientCopy),
        labels: labels,
        src: 'client'
      }),
      auctionStart: auctionStart,
      timeout: cbTimeout,
      refererInfo: refererInfo
    };
    var adapter = _bidderRegistry[bidderCode];

    if (!adapter) {
      utils.logError("Trying to make a request for bidder that does not exist: ".concat(bidderCode));
    }

    if (adapter && bidderRequest.bids && bidderRequest.bids.length !== 0) {
      bidRequests.push(bidderRequest);
    }
  }));

  if (gdprDataHandler.getConsentData()) {
    bidRequests.forEach((function (bidRequest) {
      bidRequest['gdprConsent'] = gdprDataHandler.getConsentData();
    }));
  }

  return bidRequests;
};

function checkBidRequestSizes(adUnits) {
  function isArrayOfNums(val) {
    return Array.isArray(val) && val.length === 2 && utils.isInteger(val[0]) && utils.isInteger(val[1]);
  }

  adUnits.forEach((function (adUnit) {
    var mediaTypes = adUnit.mediaTypes;
    var normalizedSize = utils.getAdUnitSizes(adUnit);

    if (mediaTypes && mediaTypes.banner) {
      var banner = mediaTypes.banner;

      if (banner.sizes) {
        // make sure we always send [[h,w]] format
        banner.sizes = normalizedSize;
        adUnit.sizes = normalizedSize;
      } else {
        utils.logError('Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request.');
        delete adUnit.mediaTypes.banner;
      }
    } else if (adUnit.sizes) {
      utils.logWarn('Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes).');
      adUnit.sizes = normalizedSize;
    }

    if (mediaTypes && mediaTypes.video) {
      var video = mediaTypes.video;

      if (video.playerSize) {
        if (Array.isArray(video.playerSize) && video.playerSize.length === 1 && video.playerSize.every(isArrayOfNums)) {
          adUnit.sizes = video.playerSize;
        } else if (isArrayOfNums(video.playerSize)) {
          var newPlayerSize = [];
          newPlayerSize.push(video.playerSize);
          utils.logInfo("Transforming video.playerSize from ".concat(video.playerSize, " to ").concat(newPlayerSize, " so it's in the proper format."));
          adUnit.sizes = video.playerSize = newPlayerSize;
        } else {
          utils.logError('Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request.');
          delete adUnit.mediaTypes.video.playerSize;
        }
      }
    }

    if (mediaTypes && mediaTypes.native) {
      var native = mediaTypes.native;

      if (native.image && native.image.sizes && !Array.isArray(native.image.sizes)) {
        utils.logError('Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request.');
        delete adUnit.mediaTypes.native.image.sizes;
      }

      if (native.image && native.image.aspect_ratios && !Array.isArray(native.image.aspect_ratios)) {
        utils.logError('Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request.');
        delete adUnit.mediaTypes.native.image.aspect_ratios;
      }

      if (native.icon && native.icon.sizes && !Array.isArray(native.icon.sizes)) {
        utils.logError('Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request.');
        delete adUnit.mediaTypes.native.icon.sizes;
      }
    }
  }));
  return adUnits;
}

adapterManager.callBids = function (adUnits, bidRequests, addBidResponse, doneCb, requestCallbacks, requestBidsTimeout) {
  if (!bidRequests.length) {
    utils.logWarn('callBids executed with no bidRequests.  Were they filtered by labels or sizing?');
    return;
  }

  var _bidRequests$reduce = bidRequests.reduce((function (partitions, bidRequest) {
    partitions[Number(typeof bidRequest.src !== 'undefined' && bidRequest.src === CONSTANTS.S2S.SRC)].push(bidRequest);
    return partitions;
  }), [[], []]),
      _bidRequests$reduce2 = _slicedToArray(_bidRequests$reduce, 2),
      clientBidRequests = _bidRequests$reduce2[0],
      serverBidRequests = _bidRequests$reduce2[1];

  if (serverBidRequests.length) {
    // s2s should get the same client side timeout as other client side requests.
    var s2sAjax = Object(__WEBPACK_IMPORTED_MODULE_4__ajax__["b" /* ajaxBuilder */])(requestBidsTimeout, requestCallbacks ? {
      request: requestCallbacks.request.bind(null, 's2s'),
      done: requestCallbacks.done
    } : undefined);
    var adaptersServerSide = _s2sConfig.bidders;
    var s2sAdapter = _bidderRegistry[_s2sConfig.adapter];
    var tid = serverBidRequests[0].tid;
    var adUnitsS2SCopy = serverBidRequests[0].adUnitsS2SCopy;

    if (s2sAdapter) {
      var s2sBidRequest = {
        tid: tid,
        'ad_units': adUnitsS2SCopy
      };

      if (s2sBidRequest.ad_units.length) {
        var doneCbs = serverBidRequests.map((function (bidRequest) {
          bidRequest.start = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["timestamp"])();
          return doneCb.bind(bidRequest);
        })); // only log adapters that actually have adUnit bids

        var allBidders = s2sBidRequest.ad_units.reduce((function (adapters, adUnit) {
          return adapters.concat((adUnit.bids || []).reduce((function (adapters, bid) {
            return adapters.concat(bid.bidder);
          }), []));
        }), []);
        utils.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(adaptersServerSide.filter((function (adapter) {
          return __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(allBidders, adapter);
        })).join(','))); // fire BID_REQUESTED event for each s2s bidRequest

        serverBidRequests.forEach((function (bidRequest) {
          events.emit(CONSTANTS.EVENTS.BID_REQUESTED, bidRequest);
        })); // make bid requests

        s2sAdapter.callBids(s2sBidRequest, serverBidRequests, (function (adUnitCode, bid) {
          var bidderRequest = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["getBidderRequest"])(serverBidRequests, bid.bidderCode, adUnitCode);

          if (bidderRequest) {
            addBidResponse.call(bidderRequest, adUnitCode, bid);
          }
        }), (function () {
          return doneCbs.forEach((function (done) {
            return done();
          }));
        }), s2sAjax);
      }
    }
  } // handle client adapter requests


  clientBidRequests.forEach((function (bidRequest) {
    bidRequest.start = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["timestamp"])(); // TODO : Do we check for bid in pool from here and skip calling adapter again ?

    var adapter = _bidderRegistry[bidRequest.bidderCode];
    utils.logMessage("CALLING BIDDER ======= ".concat(bidRequest.bidderCode));
    events.emit(CONSTANTS.EVENTS.BID_REQUESTED, bidRequest);
    var ajax = Object(__WEBPACK_IMPORTED_MODULE_4__ajax__["b" /* ajaxBuilder */])(requestBidsTimeout, requestCallbacks ? {
      request: requestCallbacks.request.bind(null, bidRequest.bidderCode),
      done: requestCallbacks.done
    } : undefined);
    adapter.callBids(bidRequest, addBidResponse.bind(bidRequest), doneCb.bind(bidRequest), ajax);
  }));
};

function doingS2STesting() {
  return _s2sConfig && _s2sConfig.enabled && _s2sConfig.testing && s2sTestingModule;
}

function getSupportedMediaTypes(bidderCode) {
  var result = [];
  if (__WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(adapterManager.videoAdapters, bidderCode)) result.push('video');
  if (__WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(__WEBPACK_IMPORTED_MODULE_2__native__["d" /* nativeAdapters */], bidderCode)) result.push('native');
  return result;
}

adapterManager.videoAdapters = []; // added by adapterLoader for now

adapterManager.registerBidAdapter = function (bidAdaptor, bidderCode) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$supportedMediaT = _ref2.supportedMediaTypes,
      supportedMediaTypes = _ref2$supportedMediaT === void 0 ? [] : _ref2$supportedMediaT;

  if (bidAdaptor && bidderCode) {
    if (typeof bidAdaptor.callBids === 'function') {
      _bidderRegistry[bidderCode] = bidAdaptor;

      if (__WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(supportedMediaTypes, 'video')) {
        adapterManager.videoAdapters.push(bidderCode);
      }

      if (__WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(supportedMediaTypes, 'native')) {
        __WEBPACK_IMPORTED_MODULE_2__native__["d" /* nativeAdapters */].push(bidderCode);
      }
    } else {
      utils.logError('Bidder adaptor error for bidder code: ' + bidderCode + 'bidder must implement a callBids() function');
    }
  } else {
    utils.logError('bidAdaptor or bidderCode not specified');
  }
};

adapterManager.aliasBidAdapter = function (bidderCode, alias) {
  var existingAlias = _bidderRegistry[alias];

  if (typeof existingAlias === 'undefined') {
    var bidAdaptor = _bidderRegistry[bidderCode];

    if (typeof bidAdaptor === 'undefined') {
      // check if alias is part of s2sConfig and allow them to register if so (as base bidder may be s2s-only)
      var s2sConfig = __WEBPACK_IMPORTED_MODULE_5__config__["config"].getConfig('s2sConfig');
      var s2sBidders = s2sConfig && s2sConfig.bidders;

      if (!(s2sBidders && __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(s2sBidders, alias))) {
        utils.logError('bidderCode "' + bidderCode + '" is not an existing bidder.', 'adapterManager.aliasBidAdapter');
      } else {
        _aliasRegistry[alias] = bidderCode;
      }
    } else {
      try {
        var newAdapter;
        var supportedMediaTypes = getSupportedMediaTypes(bidderCode); // Have kept old code to support backward compatibilitiy.
        // Remove this if loop when all adapters are supporting bidderFactory. i.e When Prebid.js is 1.0

        if (bidAdaptor.constructor.prototype != Object.prototype) {
          newAdapter = new bidAdaptor.constructor();
          newAdapter.setBidderCode(alias);
        } else {
          var spec = bidAdaptor.getSpec();
          newAdapter = Object(__WEBPACK_IMPORTED_MODULE_3__adapters_bidderFactory__["newBidder"])(_extends({}, spec, {
            code: alias
          }));
          _aliasRegistry[alias] = bidderCode;
        }

        adapterManager.registerBidAdapter(newAdapter, alias, {
          supportedMediaTypes: supportedMediaTypes
        });
      } catch (e) {
        utils.logError(bidderCode + ' bidder does not currently support aliasing.', 'adapterManager.aliasBidAdapter');
      }
    }
  } else {
    utils.logMessage('alias name "' + alias + '" has been already specified.');
  }
};

adapterManager.registerAnalyticsAdapter = function (_ref3) {
  var adapter = _ref3.adapter,
      code = _ref3.code;

  if (adapter && code) {
    if (typeof adapter.enableAnalytics === 'function') {
      adapter.code = code;
      _analyticsRegistry[code] = adapter;
    } else {
      utils.logError("Prebid Error: Analytics adaptor error for analytics \"".concat(code, "\"\n        analytics adapter must implement an enableAnalytics() function"));
    }
  } else {
    utils.logError('Prebid Error: analyticsAdapter or analyticsCode not specified');
  }
};

adapterManager.enableAnalytics = function (config) {
  if (!utils.isArray(config)) {
    config = [config];
  }

  utils._each(config, (function (adapterConfig) {
    var adapter = _analyticsRegistry[adapterConfig.provider];

    if (adapter) {
      adapter.enableAnalytics(adapterConfig);
    } else {
      utils.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(adapterConfig.provider, "."));
    }
  }));
};

adapterManager.getBidAdapter = function (bidder) {
  return _bidderRegistry[bidder];
}; // the s2sTesting module is injected when it's loaded rather than being imported
// importing it causes the packager to include it even when it's not explicitly included in the build


function setS2STestingModule(module) {
  s2sTestingModule = module;
}

function tryCallBidderMethod(bidder, method, param) {
  try {
    var adapter = _bidderRegistry[bidder];
    var spec = adapter.getSpec();

    if (spec && spec[method] && typeof spec[method] === 'function') {
      utils.logInfo("Invoking ".concat(bidder, ".").concat(method));
      spec[method](param);
    }
  } catch (e) {
    utils.logWarn("Error calling ".concat(method, " of ").concat(bidder));
  }
}

adapterManager.callTimedOutBidders = function (adUnits, timedOutBidders, cbTimeout) {
  timedOutBidders = timedOutBidders.map((function (timedOutBidder) {
    // Adding user configured params & timeout to timeout event data
    timedOutBidder.params = utils.getUserConfiguredParams(adUnits, timedOutBidder.adUnitCode, timedOutBidder.bidder);
    timedOutBidder.timeout = cbTimeout;
    return timedOutBidder;
  }));
  timedOutBidders = utils.groupBy(timedOutBidders, 'bidder');
  Object.keys(timedOutBidders).forEach((function (bidder) {
    tryCallBidderMethod(bidder, 'onTimeout', timedOutBidders[bidder]);
  }));
};

adapterManager.callBidWonBidder = function (bidder, bid, adUnits) {
  // Adding user configured params to bidWon event data
  bid.params = utils.getUserConfiguredParams(adUnits, bid.adUnitCode, bid.bidder);
  tryCallBidderMethod(bidder, 'onBidWon', bid);
};

adapterManager.callSetTargetingBidder = function (bidder, bid) {
  tryCallBidderMethod(bidder, 'onSetTargeting', bid);
};

/* harmony default export */ __webpack_exports__["default"] = (adapterManager);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * events.js
 */
var utils = __webpack_require__(0);

var CONSTANTS = __webpack_require__(4);

var slice = Array.prototype.slice;
var push = Array.prototype.push; // define entire events
// var allEvents = ['bidRequested','bidResponse','bidWon','bidTimeout'];

var allEvents = utils._map(CONSTANTS.EVENTS, (function (v) {
  return v;
}));

var idPaths = CONSTANTS.EVENT_ID_PATHS; // keep a record of all events fired

var eventsFired = [];

module.exports = (function () {
  var _handlers = {};
  var _public = {};
  /**
   *
   * @param {String} eventString  The name of the event.
   * @param {Array} args  The payload emitted with the event.
   * @private
   */

  function _dispatch(eventString, args) {
    utils.logMessage('Emitting event for: ' + eventString);
    var eventPayload = args[0] || {};
    var idPath = idPaths[eventString];
    var key = eventPayload[idPath];
    var event = _handlers[eventString] || {
      que: []
    };

    var eventKeys = utils._map(event, (function (v, k) {
      return k;
    }));

    var callbacks = []; // record the event:

    eventsFired.push({
      eventType: eventString,
      args: eventPayload,
      id: key
    });
    /** Push each specific callback to the `callbacks` array.
     * If the `event` map has a key that matches the value of the
     * event payload id path, e.g. `eventPayload[idPath]`, then apply
     * each function in the `que` array as an argument to push to the
     * `callbacks` array
     * */

    if (key && utils.contains(eventKeys, key)) {
      push.apply(callbacks, event[key].que);
    }
    /** Push each general callback to the `callbacks` array. */


    push.apply(callbacks, event.que);
    /** call each of the callbacks */

    utils._each(callbacks, (function (fn) {
      if (!fn) return;

      try {
        fn.apply(null, args);
      } catch (e) {
        utils.logError('Error executing handler:', 'events.js', e);
      }
    }));
  }

  function _checkAvailableEvent(event) {
    return utils.contains(allEvents, event);
  }

  _public.on = function (eventString, handler, id) {
    // check whether available event or not
    if (_checkAvailableEvent(eventString)) {
      var event = _handlers[eventString] || {
        que: []
      };

      if (id) {
        event[id] = event[id] || {
          que: []
        };
        event[id].que.push(handler);
      } else {
        event.que.push(handler);
      }

      _handlers[eventString] = event;
    } else {
      utils.logError('Wrong event name : ' + eventString + ' Valid event names :' + allEvents);
    }
  };

  _public.emit = function (event) {
    var args = slice.call(arguments, 1);

    _dispatch(event, args);
  };

  _public.off = function (eventString, handler, id) {
    var event = _handlers[eventString];

    if (utils.isEmpty(event) || utils.isEmpty(event.que) && utils.isEmpty(event[id])) {
      return;
    }

    if (id && (utils.isEmpty(event[id]) || utils.isEmpty(event[id].que))) {
      return;
    }

    if (id) {
      utils._each(event[id].que, (function (_handler) {
        var que = event[id].que;

        if (_handler === handler) {
          que.splice(utils.indexOf.call(que, _handler), 1);
        }
      }));
    } else {
      utils._each(event.que, (function (_handler) {
        var que = event.que;

        if (_handler === handler) {
          que.splice(utils.indexOf.call(que, _handler), 1);
        }
      }));
    }

    _handlers[eventString] = event;
  };

  _public.get = function () {
    return _handlers;
  };
  /**
   * This method can return a copy of all the events fired
   * @return {Array} array of events fired
   */


  _public.getEvents = function () {
    var arrayCopy = [];

    utils._each(eventsFired, (function (value) {
      var newProp = _extends({}, value);

      arrayCopy.push(newProp);
    }));

    return arrayCopy;
  };

  return _public;
})();

/***/ })

/******/ });
pbjsChunk([171],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(127);


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", (function() { return spec; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes__ = __webpack_require__(2);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["dcn=", "&pos=", "&cmd=bid", ""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["//", "/bidRequest?"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var AOL_BIDDERS_CODES = {
  AOL: 'aol',
  ONEMOBILE: 'onemobile',
  ONEDISPLAY: 'onedisplay'
};
var AOL_ENDPOINTS = {
  DISPLAY: {
    GET: 'display-get'
  },
  MOBILE: {
    GET: 'mobile-get',
    POST: 'mobile-post'
  }
};
var SYNC_TYPES = {
  IFRAME: {
    TAG: 'iframe',
    TYPE: 'iframe'
  },
  IMAGE: {
    TAG: 'img',
    TYPE: 'image'
  }
};
var pubapiTemplate = template(_templateObject(), 'host', 'network', 'placement', 'pageid', 'sizeid', 'alias', 'misc', 'dynamicParams');
var nexageBaseApiTemplate = template(_templateObject2(), 'host');
var nexageGetApiTemplate = template(_templateObject3(), 'dcn', 'pos', 'dynamicParams');
var MP_SERVER_MAP = {
  us: 'adserver-us.adtech.advertising.com',
  eu: 'adserver-eu.adtech.advertising.com',
  as: 'adserver-as.adtech.advertising.com'
};
var NEXAGE_SERVER = 'hb.nexage.com';
var ONE_DISPLAY_TTL = 60;
var ONE_MOBILE_TTL = 3600;
var NUMERIC_VALUES = {
  TRUE: 1,
  FALSE: 0
};

function template(strings) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      values[_key2] = arguments[_key2];
    }

    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach((function (key, i) {
      var value = __WEBPACK_IMPORTED_MODULE_0__src_utils__["isInteger"](key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    }));
    return result.join('');
  };
}

function _isMarketplaceBidder(bidder) {
  return bidder === AOL_BIDDERS_CODES.AOL || bidder === AOL_BIDDERS_CODES.ONEDISPLAY;
}

function _isOneMobileBidder(bidderCode) {
  return bidderCode === AOL_BIDDERS_CODES.AOL || bidderCode === AOL_BIDDERS_CODES.ONEMOBILE;
}

function _isNexageRequestPost(bid) {
  if (_isOneMobileBidder(bid.bidder) && bid.params.id && bid.params.imp && bid.params.imp[0]) {
    var imp = bid.params.imp[0];
    return imp.id && imp.tagid && (imp.banner && imp.banner.w && imp.banner.h || imp.video && imp.video.mimes && imp.video.minduration && imp.video.maxduration);
  }
}

function _isNexageRequestGet(bid) {
  return _isOneMobileBidder(bid.bidder) && bid.params.dcn && bid.params.pos;
}

function isMarketplaceBid(bid) {
  return _isMarketplaceBidder(bid.bidder) && bid.params.placement && bid.params.network;
}

function isMobileBid(bid) {
  return _isNexageRequestGet(bid) || _isNexageRequestPost(bid);
}

function resolveEndpointCode(bid) {
  if (_isNexageRequestGet(bid)) {
    return AOL_ENDPOINTS.MOBILE.GET;
  } else if (_isNexageRequestPost(bid)) {
    return AOL_ENDPOINTS.MOBILE.POST;
  } else if (isMarketplaceBid(bid)) {
    return AOL_ENDPOINTS.DISPLAY.GET;
  }
}

var spec = {
  code: AOL_BIDDERS_CODES.AOL,
  aliases: [AOL_BIDDERS_CODES.ONEMOBILE, AOL_BIDDERS_CODES.ONEDISPLAY],
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes__["a" /* BANNER */]],
  isBidRequestValid: function isBidRequestValid(bid) {
    return isMarketplaceBid(bid) || isMobileBid(bid);
  },
  buildRequests: function buildRequests(bids, bidderRequest) {
    var _this = this;

    var consentData = bidderRequest ? bidderRequest.gdprConsent : null;
    return bids.map((function (bid) {
      var endpointCode = resolveEndpointCode(bid);

      if (endpointCode) {
        return _this.formatBidRequest(endpointCode, bid, consentData);
      }
    }));
  },
  interpretResponse: function interpretResponse(_ref, bidRequest) {
    var body = _ref.body;

    if (!body) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"]('Empty bid response', bidRequest.bidderCode, body);
    } else {
      var _bid = this._parseBidResponse(body, bidRequest);

      if (_bid) {
        return _bid;
      }
    }
  },
  getUserSyncs: function getUserSyncs(options, serverResponses) {
    var bidResponse = !__WEBPACK_IMPORTED_MODULE_0__src_utils__["isEmpty"](serverResponses) && serverResponses[0].body;

    if (bidResponse && bidResponse.ext && bidResponse.ext.pixels) {
      return this.parsePixelItems(bidResponse.ext.pixels);
    }

    return [];
  },
  formatBidRequest: function formatBidRequest(endpointCode, bid, consentData) {
    var bidRequest;

    switch (endpointCode) {
      case AOL_ENDPOINTS.DISPLAY.GET:
        bidRequest = {
          url: this.buildMarketplaceUrl(bid, consentData),
          method: 'GET',
          ttl: ONE_DISPLAY_TTL
        };
        break;

      case AOL_ENDPOINTS.MOBILE.GET:
        bidRequest = {
          url: this.buildOneMobileGetUrl(bid, consentData),
          method: 'GET',
          ttl: ONE_MOBILE_TTL
        };
        break;

      case AOL_ENDPOINTS.MOBILE.POST:
        bidRequest = {
          url: this.buildOneMobileBaseUrl(bid),
          method: 'POST',
          ttl: ONE_MOBILE_TTL,
          data: this.buildOpenRtbRequestData(bid, consentData),
          options: {
            contentType: 'application/json',
            customHeaders: {
              'x-openrtb-version': '2.2'
            }
          }
        };
        break;
    }

    bidRequest.bidderCode = bid.bidder;
    bidRequest.bidId = bid.bidId;
    bidRequest.userSyncOn = bid.params.userSyncOn;
    return bidRequest;
  },
  buildMarketplaceUrl: function buildMarketplaceUrl(bid, consentData) {
    var params = bid.params;
    var serverParam = params.server;
    var regionParam = params.region || 'us';
    var server;

    if (!MP_SERVER_MAP.hasOwnProperty(regionParam)) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]("Unknown region '".concat(regionParam, "' for AOL bidder."));
      regionParam = 'us'; // Default region.
    }

    if (serverParam) {
      server = serverParam;
    } else {
      server = MP_SERVER_MAP[regionParam];
    } // Set region param, used by AOL analytics.


    params.region = regionParam;
    return pubapiTemplate({
      host: server,
      network: params.network,
      placement: parseInt(params.placement),
      pageid: params.pageId || 0,
      sizeid: params.sizeId || 0,
      alias: params.alias || __WEBPACK_IMPORTED_MODULE_0__src_utils__["getUniqueIdentifierStr"](),
      misc: new Date().getTime(),
      // cache busting
      dynamicParams: this.formatMarketplaceDynamicParams(params, consentData)
    });
  },
  buildOneMobileGetUrl: function buildOneMobileGetUrl(bid, consentData) {
    var _bid$params = bid.params,
        dcn = _bid$params.dcn,
        pos = _bid$params.pos,
        ext = _bid$params.ext;
    var nexageApi = this.buildOneMobileBaseUrl(bid);

    if (dcn && pos) {
      var dynamicParams = this.formatOneMobileDynamicParams(ext, consentData);
      nexageApi += nexageGetApiTemplate({
        dcn: dcn,
        pos: pos,
        dynamicParams: dynamicParams
      });
    }

    return nexageApi;
  },
  buildOneMobileBaseUrl: function buildOneMobileBaseUrl(bid) {
    return nexageBaseApiTemplate({
      host: bid.params.host || NEXAGE_SERVER
    });
  },
  formatMarketplaceDynamicParams: function formatMarketplaceDynamicParams() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var consentData = arguments.length > 1 ? arguments[1] : undefined;
    var queryParams = {};

    if (params.bidFloor) {
      queryParams.bidfloor = params.bidFloor;
    }

    _extends(queryParams, this.formatKeyValues(params.keyValues));

    _extends(queryParams, this.formatConsentData(consentData));

    var paramsFormatted = '';

    __WEBPACK_IMPORTED_MODULE_0__src_utils__["_each"](queryParams, (function (value, key) {
      paramsFormatted += "".concat(key, "=").concat(encodeURIComponent(value), ";");
    }));

    return paramsFormatted;
  },
  formatOneMobileDynamicParams: function formatOneMobileDynamicParams() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var consentData = arguments.length > 1 ? arguments[1] : undefined;

    if (this.isSecureProtocol()) {
      params.secure = NUMERIC_VALUES.TRUE;
    }

    _extends(params, this.formatConsentData(consentData));

    var paramsFormatted = '';

    __WEBPACK_IMPORTED_MODULE_0__src_utils__["_each"](params, (function (value, key) {
      paramsFormatted += "&".concat(key, "=").concat(encodeURIComponent(value));
    }));

    return paramsFormatted;
  },
  buildOpenRtbRequestData: function buildOpenRtbRequestData(bid, consentData) {
    var openRtbObject = {
      id: bid.params.id,
      imp: bid.params.imp
    };

    if (this.isConsentRequired(consentData)) {
      openRtbObject.regs = {
        ext: {
          gdpr: NUMERIC_VALUES.TRUE
        }
      };

      if (consentData.consentString) {
        openRtbObject.user = {
          ext: {
            consent: consentData.consentString
          }
        };
      }
    }

    return openRtbObject;
  },
  isConsentRequired: function isConsentRequired(consentData) {
    return !!(consentData && consentData.gdprApplies);
  },
  formatKeyValues: function formatKeyValues(keyValues) {
    var keyValuesHash = {};

    __WEBPACK_IMPORTED_MODULE_0__src_utils__["_each"](keyValues, (function (value, key) {
      keyValuesHash["kv".concat(key)] = value;
    }));

    return keyValuesHash;
  },
  formatConsentData: function formatConsentData(consentData) {
    var params = {};

    if (this.isConsentRequired(consentData)) {
      params.gdpr = NUMERIC_VALUES.TRUE;

      if (consentData.consentString) {
        params.euconsent = consentData.consentString;
      }
    }

    return params;
  },
  parsePixelItems: function parsePixelItems(pixels) {
    var itemsRegExp = /(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi;
    var tagNameRegExp = /\w*(?=\s)/;
    var srcRegExp = /src=("|')(.*?)\1/;
    var pixelsItems = [];

    if (pixels) {
      var matchedItems = pixels.match(itemsRegExp);

      if (matchedItems) {
        matchedItems.forEach((function (item) {
          var tagName = item.match(tagNameRegExp)[0];
          var url = item.match(srcRegExp)[2];

          if (tagName && tagName) {
            pixelsItems.push({
              type: tagName === SYNC_TYPES.IMAGE.TAG ? SYNC_TYPES.IMAGE.TYPE : SYNC_TYPES.IFRAME.TYPE,
              url: url
            });
          }
        }));
      }
    }

    return pixelsItems;
  },
  _parseBidResponse: function _parseBidResponse(response, bidRequest) {
    var bidData;

    try {
      bidData = response.seatbid[0].bid[0];
    } catch (e) {
      return;
    }

    var cpm;

    if (bidData.ext && bidData.ext.encp) {
      cpm = bidData.ext.encp;
    } else {
      cpm = bidData.price;

      if (cpm === null || isNaN(cpm)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"]('Invalid price in bid response', AOL_BIDDERS_CODES.AOL, bid);
        return;
      }
    }

    return {
      bidderCode: bidRequest.bidderCode,
      requestId: bidRequest.bidId,
      ad: bidData.adm,
      cpm: cpm,
      width: bidData.w,
      height: bidData.h,
      creativeId: bidData.crid || 0,
      pubapiId: response.id,
      currency: response.cur || 'USD',
      dealId: bidData.dealid,
      netRevenue: true,
      ttl: bidRequest.ttl
    };
  },
  isOneMobileBidder: _isOneMobileBidder,
  isSecureProtocol: function isSecureProtocol() {
    return document.location.protocol === 'https:';
  }
};
Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__["registerBidder"])(spec);

/***/ })

},[126]);
pbjsChunk([169],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133);


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", (function() { return spec; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Renderer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }







var BIDDER_CODE = 'appnexus';
var URL = '//ib.adnxs.com/ut/v3/prebid';
var VIDEO_TARGETING = ['id', 'mimes', 'minduration', 'maxduration', 'startdelay', 'skippable', 'playback_method', 'frameworks'];
var USER_PARAMS = ['age', 'external_uid', 'segments', 'gender', 'dnt', 'language'];
var APP_DEVICE_PARAMS = ['geo', 'device_id']; // appid is collected separately

var DEBUG_PARAMS = ['enabled', 'dongle', 'member_id', 'debug_timeout'];
var NATIVE_MAPPING = {
  body: 'description',
  body2: 'desc2',
  cta: 'ctatext',
  image: {
    serverName: 'main_image',
    requiredParams: {
      required: true
    },
    minimumParams: {
      sizes: [{}]
    }
  },
  icon: {
    serverName: 'icon',
    requiredParams: {
      required: true
    },
    minimumParams: {
      sizes: [{}]
    }
  },
  sponsoredBy: 'sponsored_by',
  privacyLink: 'privacy_link',
  salePrice: 'saleprice',
  displayUrl: 'displayurl'
};
var SOURCE = 'pbjs';
var spec = {
  code: BIDDER_CODE,
  aliases: ['appnexusAst', 'brealtime', 'emxdigital', 'pagescience', 'defymedia', 'gourmetads', 'matomy', 'featureforward', 'oftmedia', 'districtm'],
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["a" /* BANNER */], __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["c" /* VIDEO */], __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["b" /* NATIVE */]],

  /**
   * Determines whether or not the given bid request is valid.
   *
   * @param {object} bid The bid to validate.
   * @return boolean True if this is a valid bid, and false otherwise.
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid.params.placementId || bid.params.member && bid.params.invCode);
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {BidRequest[]} bidRequests A non-empty list of bid requests which should be sent to the Server.
   * @return ServerRequest Info describing the request to the server.
   */
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    var tags = bidRequests.map(bidToTag);
    var userObjBid = __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find___default()(bidRequests, hasUserInfo);
    var userObj;

    if (userObjBid) {
      userObj = {};
      Object.keys(userObjBid.params.user).filter((function (param) {
        return __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes___default()(USER_PARAMS, param);
      })).forEach((function (param) {
        return userObj[param] = userObjBid.params.user[param];
      }));
    }

    var appDeviceObjBid = __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find___default()(bidRequests, hasAppDeviceInfo);
    var appDeviceObj;

    if (appDeviceObjBid && appDeviceObjBid.params && appDeviceObjBid.params.app) {
      appDeviceObj = {};
      Object.keys(appDeviceObjBid.params.app).filter((function (param) {
        return __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes___default()(APP_DEVICE_PARAMS, param);
      })).forEach((function (param) {
        return appDeviceObj[param] = appDeviceObjBid.params.app[param];
      }));
    }

    var appIdObjBid = __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find___default()(bidRequests, hasAppId);
    var appIdObj;

    if (appIdObjBid && appIdObjBid.params && appDeviceObjBid.params.app && appDeviceObjBid.params.app.id) {
      appIdObj = {
        appid: appIdObjBid.params.app.id
      };
    }

    var debugObj = {};
    var debugObjParams = {};
    var debugCookieName = 'apn_prebid_debug';
    var debugCookie = __WEBPACK_IMPORTED_MODULE_1__src_utils__["getCookie"](debugCookieName) || null;

    if (debugCookie) {
      try {
        debugObj = JSON.parse(debugCookie);
      } catch (e) {
        __WEBPACK_IMPORTED_MODULE_1__src_utils__["logError"]('AppNexus Debug Auction Cookie Error:\n\n' + e);
      }
    } else {
      var debugBidRequest = __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find___default()(bidRequests, hasDebug);

      if (debugBidRequest && debugBidRequest.debug) {
        debugObj = debugBidRequest.debug;
      }
    }

    if (debugObj && debugObj.enabled) {
      Object.keys(debugObj).filter((function (param) {
        return __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes___default()(DEBUG_PARAMS, param);
      })).forEach((function (param) {
        debugObjParams[param] = debugObj[param];
      }));
    }

    var memberIdBid = __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find___default()(bidRequests, hasMemberId);
    var member = memberIdBid ? parseInt(memberIdBid.params.member, 10) : 0;
    var payload = {
      tags: _toConsumableArray(tags),
      user: userObj,
      sdk: {
        source: SOURCE,
        version: "1.39.0"
      }
    };

    if (member > 0) {
      payload.member_id = member;
    }

    if (appDeviceObjBid) {
      payload.device = appDeviceObj;
    }

    if (appIdObjBid) {
      payload.app = appIdObj;
    }

    if (debugObjParams.enabled) {
      payload.debug = debugObjParams;
      __WEBPACK_IMPORTED_MODULE_1__src_utils__["logInfo"]('AppNexus Debug Auction Settings:\n\n' + JSON.stringify(debugObjParams, null, 4));
    }

    if (bidderRequest && bidderRequest.gdprConsent) {
      // note - objects for impbus use underscore instead of camelCase
      payload.gdpr_consent = {
        consent_string: bidderRequest.gdprConsent.consentString,
        consent_required: bidderRequest.gdprConsent.gdprApplies
      };
    }

    if (bidderRequest && bidderRequest.refererInfo) {
      var refererinfo = {
        rd_ref: encodeURIComponent(bidderRequest.refererInfo.referer),
        rd_top: bidderRequest.refererInfo.reachedTop,
        rd_ifs: bidderRequest.refererInfo.numIframes,
        rd_stk: bidderRequest.refererInfo.stack.map((function (url) {
          return encodeURIComponent(url);
        })).join(',')
      };
      payload.referrer_detection = refererinfo;
    }

    var payloadString = JSON.stringify(payload);
    return {
      method: 'POST',
      url: URL,
      data: payloadString,
      bidderRequest: bidderRequest
    };
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {*} serverResponse A successful response from the server.
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(serverResponse, _ref) {
    var _this = this;

    var bidderRequest = _ref.bidderRequest;
    serverResponse = serverResponse.body;
    var bids = [];

    if (!serverResponse || serverResponse.error) {
      var errorMessage = "in response for ".concat(bidderRequest.bidderCode, " adapter");

      if (serverResponse && serverResponse.error) {
        errorMessage += ": ".concat(serverResponse.error);
      }

      __WEBPACK_IMPORTED_MODULE_1__src_utils__["logError"](errorMessage);
      return bids;
    }

    if (serverResponse.tags) {
      serverResponse.tags.forEach((function (serverBid) {
        var rtbBid = getRtbBid(serverBid);

        if (rtbBid) {
          if (rtbBid.cpm !== 0 && __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes___default()(_this.supportedMediaTypes, rtbBid.ad_type)) {
            var bid = newBid(serverBid, rtbBid, bidderRequest);
            bid.mediaType = parseMediaType(rtbBid);
            bids.push(bid);
          }
        }
      }));
    }

    if (serverResponse.debug && serverResponse.debug.debug_info) {
      var debugHeader = 'AppNexus Debug Auction for Prebid\n\n';
      var debugText = debugHeader + serverResponse.debug.debug_info;
      debugText = debugText.replace(/(<td>|<th>)/gm, '\t') // Tables
      .replace(/(<\/td>|<\/th>)/gm, '\n') // Tables
      .replace(/^<br>/gm, '') // Remove leading <br>
      .replace(/(<br>\n|<br>)/gm, '\n') // <br>
      .replace(/<h1>(.*)<\/h1>/gm, '\n\n===== $1 =====\n\n') // Header H1
      .replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, '\n\n*** $1 ***\n\n') // Headers
      .replace(/(<([^>]+)>)/igm, ''); // Remove any other tags

      __WEBPACK_IMPORTED_MODULE_1__src_utils__["logMessage"]('https://console.appnexus.com/docs/understanding-the-debug-auction');
      __WEBPACK_IMPORTED_MODULE_1__src_utils__["logMessage"](debugText);
    }

    return bids;
  },
  getUserSyncs: function getUserSyncs(syncOptions) {
    if (syncOptions.iframeEnabled) {
      return [{
        type: 'iframe',
        url: '//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html'
      }];
    }
  },
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    params = __WEBPACK_IMPORTED_MODULE_1__src_utils__["convertTypes"]({
      'member': 'string',
      'invCode': 'string',
      'placementId': 'number',
      'keywords': __WEBPACK_IMPORTED_MODULE_1__src_utils__["transformBidderParamKeywords"]
    }, params);

    if (isOpenRtb) {
      params.use_pmt_rule = typeof params.usePaymentRule === 'boolean' ? params.usePaymentRule : false;

      if (params.usePaymentRule) {
        delete params.usePaymentRule;
      }

      if (isPopulatedArray(params.keywords)) {
        params.keywords.forEach(deleteValues);
      }

      Object.keys(params).forEach((function (paramKey) {
        var convertedKey = __WEBPACK_IMPORTED_MODULE_1__src_utils__["convertCamelToUnderscore"](paramKey);

        if (convertedKey !== paramKey) {
          params[convertedKey] = params[paramKey];
          delete params[paramKey];
        }
      }));
    }

    return params;
  }
};

function isPopulatedArray(arr) {
  return !!(__WEBPACK_IMPORTED_MODULE_1__src_utils__["isArray"](arr) && arr.length > 0);
}

function deleteValues(keyPairObj) {
  if (isPopulatedArray(keyPairObj.value) && keyPairObj.value[0] === '') {
    delete keyPairObj.value;
  }
}

function newRenderer(adUnitCode, rtbBid) {
  var rendererOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var renderer = __WEBPACK_IMPORTED_MODULE_0__src_Renderer__["a" /* Renderer */].install({
    id: rtbBid.renderer_id,
    url: rtbBid.renderer_url,
    config: rendererOptions,
    loaded: false,
    adUnitCode: adUnitCode
  });

  try {
    renderer.setRender(outstreamRender);
  } catch (err) {
    __WEBPACK_IMPORTED_MODULE_1__src_utils__["logWarn"]('Prebid Error calling setRender on renderer', err);
  }

  renderer.setEventHandlers({
    impression: function impression() {
      return __WEBPACK_IMPORTED_MODULE_1__src_utils__["logMessage"]('AppNexus outstream video impression event');
    },
    loaded: function loaded() {
      return __WEBPACK_IMPORTED_MODULE_1__src_utils__["logMessage"]('AppNexus outstream video loaded event');
    },
    ended: function ended() {
      __WEBPACK_IMPORTED_MODULE_1__src_utils__["logMessage"]('AppNexus outstream renderer video event');
      document.querySelector("#".concat(adUnitCode)).style.display = 'none';
    }
  });
  return renderer;
}
/**
 * Unpack the Server's Bid into a Prebid-compatible one.
 * @param serverBid
 * @param rtbBid
 * @param bidderRequest
 * @return Bid
 */


function newBid(serverBid, rtbBid, bidderRequest) {
  var bidRequest = __WEBPACK_IMPORTED_MODULE_1__src_utils__["getBidRequest"](serverBid.uuid, [bidderRequest]);
  var bid = {
    requestId: serverBid.uuid,
    cpm: rtbBid.cpm,
    creativeId: rtbBid.creative_id,
    dealId: rtbBid.deal_id,
    currency: 'USD',
    netRevenue: true,
    ttl: 300,
    adUnitCode: bidRequest.adUnitCode,
    appnexus: {
      buyerMemberId: rtbBid.buyer_member_id,
      dealPriority: rtbBid.deal_priority,
      dealCode: rtbBid.deal_code
    }
  };

  if (rtbBid.rtb.video) {
    _extends(bid, {
      width: rtbBid.rtb.video.player_width,
      height: rtbBid.rtb.video.player_height,
      vastUrl: rtbBid.rtb.video.asset_url,
      vastImpUrl: rtbBid.notify_url,
      ttl: 3600
    }); // This supports Outstream Video


    if (rtbBid.renderer_url) {
      var rendererOptions = __WEBPACK_IMPORTED_MODULE_1__src_utils__["deepAccess"](bidderRequest.bids[0], 'renderer.options');

      _extends(bid, {
        adResponse: serverBid,
        renderer: newRenderer(bid.adUnitCode, rtbBid, rendererOptions)
      });

      bid.adResponse.ad = bid.adResponse.ads[0];
      bid.adResponse.ad.video = bid.adResponse.ad.rtb.video;
    }
  } else if (rtbBid.rtb[__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["b" /* NATIVE */]]) {
    var nativeAd = rtbBid.rtb[__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["b" /* NATIVE */]];
    bid[__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["b" /* NATIVE */]] = {
      title: nativeAd.title,
      body: nativeAd.desc,
      body2: nativeAd.desc2,
      cta: nativeAd.ctatext,
      rating: nativeAd.rating,
      sponsoredBy: nativeAd.sponsored,
      privacyLink: nativeAd.privacy_link,
      address: nativeAd.address,
      downloads: nativeAd.downloads,
      likes: nativeAd.likes,
      phone: nativeAd.phone,
      price: nativeAd.price,
      salePrice: nativeAd.saleprice,
      clickUrl: nativeAd.link.url,
      displayUrl: nativeAd.displayurl,
      clickTrackers: nativeAd.link.click_trackers,
      impressionTrackers: nativeAd.impression_trackers,
      javascriptTrackers: nativeAd.javascript_trackers
    };

    if (nativeAd.main_img) {
      bid['native'].image = {
        url: nativeAd.main_img.url,
        height: nativeAd.main_img.height,
        width: nativeAd.main_img.width
      };
    }

    if (nativeAd.icon) {
      bid['native'].icon = {
        url: nativeAd.icon.url,
        height: nativeAd.icon.height,
        width: nativeAd.icon.width
      };
    }
  } else {
    _extends(bid, {
      width: rtbBid.rtb.banner.width,
      height: rtbBid.rtb.banner.height,
      ad: rtbBid.rtb.banner.content
    });

    try {
      var url = rtbBid.rtb.trackers[0].impression_urls[0];
      var tracker = __WEBPACK_IMPORTED_MODULE_1__src_utils__["createTrackPixelHtml"](url);
      bid.ad += tracker;
    } catch (error) {
      __WEBPACK_IMPORTED_MODULE_1__src_utils__["logError"]('Error appending tracking pixel', error);
    }
  }

  return bid;
}

function bidToTag(bid) {
  var tag = {};
  tag.sizes = transformSizes(bid.sizes);
  tag.primary_size = tag.sizes[0];
  tag.ad_types = [];
  tag.uuid = bid.bidId;

  if (bid.params.placementId) {
    tag.id = parseInt(bid.params.placementId, 10);
  } else {
    tag.code = bid.params.invCode;
  }

  tag.allow_smaller_sizes = bid.params.allowSmallerSizes || false;
  tag.use_pmt_rule = bid.params.usePaymentRule || false;
  tag.prebid = true;
  tag.disable_psa = true;

  if (bid.params.reserve) {
    tag.reserve = bid.params.reserve;
  }

  if (bid.params.position) {
    tag.position = {
      'above': 1,
      'below': 2
    }[bid.params.position] || 0;
  }

  if (bid.params.trafficSourceCode) {
    tag.traffic_source_code = bid.params.trafficSourceCode;
  }

  if (bid.params.privateSizes) {
    tag.private_sizes = transformSizes(bid.params.privateSizes);
  }

  if (bid.params.supplyType) {
    tag.supply_type = bid.params.supplyType;
  }

  if (bid.params.pubClick) {
    tag.pubclick = bid.params.pubClick;
  }

  if (bid.params.extInvCode) {
    tag.ext_inv_code = bid.params.extInvCode;
  }

  if (bid.params.externalImpId) {
    tag.external_imp_id = bid.params.externalImpId;
  }

  if (!__WEBPACK_IMPORTED_MODULE_1__src_utils__["isEmpty"](bid.params.keywords)) {
    var keywords = __WEBPACK_IMPORTED_MODULE_1__src_utils__["transformBidderParamKeywords"](bid.params.keywords);

    if (keywords.length > 0) {
      keywords.forEach(deleteValues);
    }

    tag.keywords = keywords;
  }

  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["b" /* NATIVE */] || __WEBPACK_IMPORTED_MODULE_1__src_utils__["deepAccess"](bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["b" /* NATIVE */]))) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["b" /* NATIVE */]);

    if (bid.nativeParams) {
      var nativeRequest = buildNativeRequest(bid.nativeParams);
      tag[__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["b" /* NATIVE */]] = {
        layouts: [nativeRequest]
      };
    }
  }

  var videoMediaType = __WEBPACK_IMPORTED_MODULE_1__src_utils__["deepAccess"](bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["c" /* VIDEO */]));
  var context = __WEBPACK_IMPORTED_MODULE_1__src_utils__["deepAccess"](bid, 'mediaTypes.video.context');

  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["c" /* VIDEO */] || videoMediaType) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["c" /* VIDEO */]);
  } // instream gets vastUrl, outstream gets vastXml


  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["c" /* VIDEO */] || videoMediaType && context !== 'outstream') {
    tag.require_asset_url = true;
  }

  if (bid.params.video) {
    tag.video = {}; // place any valid video params on the tag

    Object.keys(bid.params.video).filter((function (param) {
      return __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes___default()(VIDEO_TARGETING, param);
    })).forEach((function (param) {
      return tag.video[param] = bid.params.video[param];
    }));
  }

  if (__WEBPACK_IMPORTED_MODULE_1__src_utils__["isEmpty"](bid.mediaType) && __WEBPACK_IMPORTED_MODULE_1__src_utils__["isEmpty"](bid.mediaTypes) || bid.mediaType === __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["a" /* BANNER */] || bid.mediaTypes && bid.mediaTypes[__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["a" /* BANNER */]]) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["a" /* BANNER */]);
  }

  return tag;
}
/* Turn bid request sizes into ut-compatible format */


function transformSizes(requestSizes) {
  var sizes = [];
  var sizeObj = {};

  if (__WEBPACK_IMPORTED_MODULE_1__src_utils__["isArray"](requestSizes) && requestSizes.length === 2 && !__WEBPACK_IMPORTED_MODULE_1__src_utils__["isArray"](requestSizes[0])) {
    sizeObj.width = parseInt(requestSizes[0], 10);
    sizeObj.height = parseInt(requestSizes[1], 10);
    sizes.push(sizeObj);
  } else if (_typeof(requestSizes) === 'object') {
    for (var i = 0; i < requestSizes.length; i++) {
      var size = requestSizes[i];
      sizeObj = {};
      sizeObj.width = parseInt(size[0], 10);
      sizeObj.height = parseInt(size[1], 10);
      sizes.push(sizeObj);
    }
  }

  return sizes;
}

function hasUserInfo(bid) {
  return !!bid.params.user;
}

function hasMemberId(bid) {
  return !!parseInt(bid.params.member, 10);
}

function hasAppDeviceInfo(bid) {
  if (bid.params) {
    return !!bid.params.app;
  }
}

function hasAppId(bid) {
  if (bid.params && bid.params.app) {
    return !!bid.params.app.id;
  }

  return !!bid.params.app;
}

function hasDebug(bid) {
  return !!bid.debug;
}

function getRtbBid(tag) {
  return tag && tag.ads && tag.ads.length && __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find___default()(tag.ads, (function (ad) {
    return ad.rtb;
  }));
}

function buildNativeRequest(params) {
  var request = {}; // map standard prebid native asset identifier to /ut parameters
  // e.g., tag specifies `body` but /ut only knows `description`.
  // mapping may be in form {tag: '<server name>'} or
  // {tag: {serverName: '<server name>', requiredParams: {...}}}

  Object.keys(params).forEach((function (key) {
    // check if one of the <server name> forms is used, otherwise
    // a mapping wasn't specified so pass the key straight through
    var requestKey = NATIVE_MAPPING[key] && NATIVE_MAPPING[key].serverName || NATIVE_MAPPING[key] || key; // required params are always passed on request

    var requiredParams = NATIVE_MAPPING[key] && NATIVE_MAPPING[key].requiredParams;
    request[requestKey] = _extends({}, requiredParams, params[key]); // minimum params are passed if no non-required params given on adunit

    var minimumParams = NATIVE_MAPPING[key] && NATIVE_MAPPING[key].minimumParams;

    if (requiredParams && minimumParams) {
      // subtract required keys from adunit keys
      var adunitKeys = Object.keys(params[key]);
      var requiredKeys = Object.keys(requiredParams);
      var remaining = adunitKeys.filter((function (key) {
        return !__WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_includes___default()(requiredKeys, key);
      })); // if none are left over, the minimum params needs to be sent

      if (remaining.length === 0) {
        request[requestKey] = _extends({}, request[requestKey], minimumParams);
      }
    }
  }));
  return request;
}

function outstreamRender(bid) {
  // push to render queue because ANOutstreamVideo may not be loaded yet
  bid.renderer.push((function () {
    window.ANOutstreamVideo.renderAd({
      tagId: bid.adResponse.tag_id,
      sizes: [bid.getSize().split('x')],
      targetId: bid.adUnitCode,
      // target div id to render video
      uuid: bid.adResponse.uuid,
      adResponse: bid.adResponse,
      rendererOptions: bid.renderer.getConfig()
    }, handleOutstreamRendererEvents.bind(null, bid));
  }));
}

function handleOutstreamRendererEvents(bid, id, eventName) {
  bid.renderer.handleVideoEvent({
    id: id,
    eventName: eventName
  });
}

function parseMediaType(rtbBid) {
  var adType = rtbBid.ad_type;

  if (adType === __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["c" /* VIDEO */]) {
    return __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["c" /* VIDEO */];
  } else if (adType === __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["b" /* NATIVE */]) {
    return __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["b" /* NATIVE */];
  } else {
    return __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["a" /* BANNER */];
  }
}

Object(__WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory__["registerBidder"])(spec);

/***/ })

},[132]);
pbjsChunk([146],{

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(195);


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", (function() { return spec; }));
/* harmony export (immutable) */ __webpack_exports__["matchRequest"] = matchRequest;
/* harmony export (immutable) */ __webpack_exports__["checkDeepArray"] = checkDeepArray;
/* harmony export (immutable) */ __webpack_exports__["defaultSize"] = defaultSize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_config__ = __webpack_require__(3);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var BIDDER_CODE = 'districtmDMX';
var DMXURI = 'https://dmx.districtm.io/b/v1';
var spec = {
  code: BIDDER_CODE,
  supportedFormat: ['banner'],
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid.params.dmxid && bid.params.memberid);
  },
  interpretResponse: function interpretResponse(response, bidRequest) {
    response = response.body || {};

    if (response.seatbid) {
      if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](response.seatbid)) {
        var _response = response,
            seatbid = _response.seatbid;
        var winners = seatbid.reduce((function (bid, ads) {
          var ad = ads.bid.reduce((function (oBid, nBid) {
            if (oBid.price < nBid.price) {
              var _bid = matchRequest(nBid.impid, bidRequest);

              var _defaultSize = defaultSize(_bid),
                  width = _defaultSize.width,
                  height = _defaultSize.height;

              nBid.cpm = nBid.price;
              nBid.bidId = nBid.impid;
              nBid.requestId = nBid.impid;
              nBid.width = nBid.w || width;
              nBid.height = nBid.h || height;
              nBid.ad = nBid.adm;
              nBid.netRevenue = true;
              nBid.creativeId = nBid.crid;
              nBid.currency = 'USD';
              nBid.ttl = 60;
              return nBid;
            } else {
              oBid.cpm = oBid.price;
              return oBid;
            }
          }), {
            price: 0
          });

          if (ad.adm) {
            bid.push(ad);
          }

          return bid;
        }), []);
        var winnersClean = winners.filter((function (w) {
          if (w.bidId) {
            return true;
          }

          return false;
        }));
        return winnersClean;
      } else {
        return [];
      }
    } else {
      return [];
    }
  },
  buildRequests: function buildRequests(bidRequest, bidderRequest) {
    var timeout = __WEBPACK_IMPORTED_MODULE_2__src_config__["config"].getConfig('bidderTimeout');
    var dmxRequest = {
      id: __WEBPACK_IMPORTED_MODULE_0__src_utils__["generateUUID"](),
      cur: ['USD'],
      tmax: timeout - 300,
      test: this.test() || 0,
      site: {
        publisher: {
          id: String(bidRequest[0].params.memberid) || null
        }
      }
    };

    if (!dmxRequest.test) {
      delete dmxRequest.test;
    }

    if (bidderRequest.gdprConsent) {
      dmxRequest.regs = {};
      dmxRequest.regs.ext = {};
      dmxRequest.regs.ext.gdpr = bidderRequest.gdprConsent.gdprApplies === true ? 1 : 0;
      dmxRequest.user = {};
      dmxRequest.user.ext = {};
      dmxRequest.user.ext.consent = bidderRequest.gdprConsent.consentString;
    }

    var tosendtags = bidRequest.map((function (dmx) {
      var obj = {};
      obj.id = dmx.bidId;
      obj.tagid = String(dmx.params.dmxid);
      obj.secure = window.location.protocol === 'https:' ? 1 : 0;
      obj.banner = {
        topframe: 1,
        w: dmx.sizes[0][0] || 0,
        h: dmx.sizes[0][1] || 0,
        format: dmx.sizes.map((function (s) {
          return {
            w: s[0],
            h: s[1]
          };
        })).filter((function (obj) {
          return typeof obj.w === 'number' && typeof obj.h === 'number';
        }))
      };
      return obj;
    }));
    dmxRequest.imp = tosendtags;
    return {
      method: 'POST',
      url: DMXURI,
      data: JSON.stringify(dmxRequest),
      options: {
        contentType: 'application/json',
        withCredentials: true
      },
      bidderRequest: bidderRequest
    };
  },
  test: function test() {
    return window.location.href.indexOf('dmTest=true') !== -1 ? 1 : 0;
  },
  getUserSyncs: function getUserSyncs(optionsType) {
    if (optionsType.iframeEnabled) {
      return [{
        type: 'iframe',
        url: 'https://cdn.districtm.io/ids/index.html'
      }];
    }
  }
};
/**
 * Function matchRequest(id: string, BidRequest: object)
 * @param id
 * @type string
 * @param bidRequest
 * @type Object
 * @returns Object
 *
 */

function matchRequest(id, bidRequest) {
  var bids = bidRequest.bidderRequest.bids;

  var _bids$filter = bids.filter((function (bid) {
    return bid.bidId === id;
  })),
      _bids$filter2 = _slicedToArray(_bids$filter, 1),
      returnValue = _bids$filter2[0];

  return returnValue;
}
function checkDeepArray(Arr) {
  if (Array.isArray(Arr)) {
    if (Array.isArray(Arr[0])) {
      return Arr[0];
    } else {
      return Arr;
    }
  } else {
    return Arr;
  }
}
function defaultSize(thebidObj) {
  var sizes = thebidObj.sizes;
  var returnObject = {};
  returnObject.width = checkDeepArray(sizes)[0];
  returnObject.height = checkDeepArray(sizes)[1];
  return returnObject;
}
Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__["registerBidder"])(spec);

/***/ })

},[194]);
pbjsChunk([0],{

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(253);


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", (function() { return spec; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_mediaTypes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_is_array__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_is_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_is_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_number_is_integer__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_number_is_integer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_number_is_integer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_adapters_bidderFactory__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







var BIDDER_CODE = 'ix';
var BANNER_SECURE_BID_URL = 'https://as-sec.casalemedia.com/cygnus';
var BANNER_INSECURE_BID_URL = 'http://as.casalemedia.com/cygnus';
var SUPPORTED_AD_TYPES = [__WEBPACK_IMPORTED_MODULE_1__src_mediaTypes__["a" /* BANNER */]];
var ENDPOINT_VERSION = 7.2;
var CENT_TO_DOLLAR_FACTOR = 100;
var TIME_TO_LIVE = 35;
var NET_REVENUE = true;
var PRICE_TO_DOLLAR_FACTOR = {
  JPY: 1
};
/**
 * Transform valid bid request config object to impression object that will be sent to ad server.
 *
 * @param  {object} bid A valid bid request config object.
 * @return {object}     A impression object that will be sent to ad server.
 */

function bidToBannerImp(bid) {
  var imp = {};
  imp.id = bid.bidId;
  imp.banner = {};
  imp.banner.w = bid.params.size[0];
  imp.banner.h = bid.params.size[1];
  imp.banner.topframe = __WEBPACK_IMPORTED_MODULE_0__src_utils__["inIframe"]() ? 0 : 1;
  imp.ext = {};
  imp.ext.siteID = bid.params.siteId;

  if (bid.params.hasOwnProperty('id') && (typeof bid.params.id === 'string' || typeof bid.params.id === 'number')) {
    imp.ext.sid = String(bid.params.id);
  } else {
    imp.ext.sid = "".concat(bid.params.size[0], "x").concat(bid.params.size[1]);
  }

  if (bid.params.hasOwnProperty('bidFloor') && bid.params.hasOwnProperty('bidFloorCur')) {
    imp.bidfloor = bid.params.bidFloor;
    imp.bidfloorcur = bid.params.bidFloorCur;
  }

  return imp;
}
/**
 * Parses a raw bid for the relevant information.
 *
 * @param  {object} rawBid   The bid to be parsed.
 * @param  {string} currency Global currency in bid response.
 * @return {object} bid      The parsed bid.
 */


function parseBid(rawBid, currency) {
  var bid = {};

  if (PRICE_TO_DOLLAR_FACTOR.hasOwnProperty(currency)) {
    bid.cpm = rawBid.price / PRICE_TO_DOLLAR_FACTOR[currency];
  } else {
    bid.cpm = rawBid.price / CENT_TO_DOLLAR_FACTOR;
  }

  bid.requestId = rawBid.impid;
  bid.width = rawBid.w;
  bid.height = rawBid.h;
  bid.ad = rawBid.adm;
  bid.dealId = __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](rawBid, 'ext.dealid');
  bid.ttl = TIME_TO_LIVE;
  bid.netRevenue = NET_REVENUE;
  bid.currency = currency;
  bid.creativeId = rawBid.hasOwnProperty('crid') ? rawBid.crid : '-';
  return bid;
}
/**
 * Determines whether or not the given object is valid size format.
 *
 * @param  {*}       size The object to be validated.
 * @return {boolean}      True if this is a valid size format, and false otherwise.
 */


function isValidSize(size) {
  return __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_is_array___default()(size) && size.length === 2 && __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_number_is_integer___default()(size[0]) && __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_number_is_integer___default()(size[1]);
}
/**
 * Determines whether or not the given size object is an element of the size
 * array.
 *
 * @param  {array}  sizeArray The size array.
 * @param  {object} size      The size object.
 * @return {boolean}          True if the size object is an element of the size array, and false
 *                            otherwise.
 */


function includesSize(sizeArray, size) {
  if (isValidSize(sizeArray)) {
    return sizeArray[0] === size[0] && sizeArray[1] === size[1];
  }

  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i][0] === size[0] && sizeArray[i][1] === size[1]) {
      return true;
    }
  }

  return false;
}
/**
 * Determines whether or not the given bidFloor parameters are valid.
 *
 * @param  {*}       bidFloor    The bidFloor parameter inside bid request config.
 * @param  {*}       bidFloorCur The bidFloorCur parameter inside bid request config.
 * @return {boolean}             True if this is a valid biFfloor parameters format, and false
 *                               otherwise.
 */


function isValidBidFloorParams(bidFloor, bidFloorCur) {
  var curRegex = /^[A-Z]{3}$/;
  return Boolean(typeof bidFloor === 'number' && typeof bidFloorCur === 'string' && bidFloorCur.match(curRegex));
}

var spec = {
  code: BIDDER_CODE,
  supportedMediaTypes: SUPPORTED_AD_TYPES,

  /**
   * Determines whether or not the given bid request is valid.
   *
   * @param  {object}  bid The bid to validate.
   * @return {boolean}     True if this is a valid bid, and false otherwise.
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    if (!isValidSize(bid.params.size)) {
      return false;
    }

    if (!includesSize(bid.sizes, bid.params.size)) {
      return false;
    }

    if (bid.hasOwnProperty('mediaType') && bid.mediaType !== 'banner') {
      return false;
    }

    if (bid.hasOwnProperty('mediaTypes') && !__WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bid, 'mediaTypes.banner.sizes')) {
      return false;
    }

    if (typeof bid.params.siteId !== 'string' && typeof bid.params.siteId !== 'number') {
      return false;
    }

    var hasBidFloor = bid.params.hasOwnProperty('bidFloor');
    var hasBidFloorCur = bid.params.hasOwnProperty('bidFloorCur');

    if (hasBidFloor || hasBidFloorCur) {
      return hasBidFloor && hasBidFloorCur && isValidBidFloorParams(bid.params.bidFloor, bid.params.bidFloorCur);
    }

    return true;
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param  {array}  validBidRequests A list of valid bid request config objects.
   * @param  {object} options          A object contains bids and other info like gdprConsent.
   * @return {object}                  Info describing the request to the server.
   */
  buildRequests: function buildRequests(validBidRequests, options) {
    var bannerImps = [];
    var validBidRequest = null;
    var bannerImp = null; // Always start by assuming the protocol is HTTPS. This way, it will work
    // whether the page protocol is HTTP or HTTPS. Then check if the page is
    // actually HTTP.If we can guarantee it is, then, and only then, set protocol to
    // HTTP.

    var baseUrl = BANNER_SECURE_BID_URL;

    for (var i = 0; i < validBidRequests.length; i++) {
      validBidRequest = validBidRequests[i]; // Transform the bid request based on the banner format.

      bannerImp = bidToBannerImp(validBidRequest);
      bannerImps.push(bannerImp);
    }

    var r = {}; // Since bidderRequestId are the same for different bid request, just use the first one.

    r.id = validBidRequests[0].bidderRequestId;
    r.imp = bannerImps;
    r.site = {};
    r.ext = {};
    r.ext.source = 'prebid';

    if (document.referrer && document.referrer !== '') {
      r.site.ref = document.referrer;
    } // Apply GDPR information to the request if GDPR is enabled.


    if (options) {
      if (options.gdprConsent) {
        var gdprConsent = options.gdprConsent;

        if (gdprConsent.hasOwnProperty('gdprApplies')) {
          r.regs = {
            ext: {
              gdpr: gdprConsent.gdprApplies ? 1 : 0
            }
          };
        }

        if (gdprConsent.hasOwnProperty('consentString')) {
          r.user = {
            ext: {
              consent: gdprConsent.consentString || ''
            }
          };
        }
      }

      if (options.refererInfo) {
        r.site.page = options.refererInfo.referer;

        if (options.refererInfo.referer && options.refererInfo.referer.indexOf('https') !== 0) {
          baseUrl = BANNER_INSECURE_BID_URL;
        }
      }
    }

    var payload = {}; // Parse additional runtime configs.

    var otherIxConfig = __WEBPACK_IMPORTED_MODULE_2__src_config__["config"].getConfig('ix');

    if (otherIxConfig) {
      // Append firstPartyData to r.site.page if firstPartyData exists.
      if (_typeof(otherIxConfig.firstPartyData) === 'object') {
        var firstPartyData = otherIxConfig.firstPartyData;
        var firstPartyString = '?';

        for (var key in firstPartyData) {
          if (firstPartyData.hasOwnProperty(key)) {
            firstPartyString += "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(firstPartyData[key]), "&");
          }
        }

        firstPartyString = firstPartyString.slice(0, -1);
        r.site.page += firstPartyString;
      } // Create t in payload if timeout is configured.


      if (typeof otherIxConfig.timeout === 'number') {
        payload.t = otherIxConfig.timeout;
      }
    } // Use the siteId in the first bid request as the main siteId.


    payload.s = validBidRequests[0].params.siteId;
    payload.v = ENDPOINT_VERSION;
    payload.r = JSON.stringify(r);
    payload.ac = 'j';
    payload.sd = 1;
    return {
      method: 'GET',
      url: baseUrl,
      data: payload
    };
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param  {object} serverResponse A successful response from the server.
   * @return {array}                 An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(serverResponse) {
    var bids = [];
    var bid = null;

    if (!serverResponse.hasOwnProperty('body') || !serverResponse.body.hasOwnProperty('seatbid')) {
      return bids;
    }

    var responseBody = serverResponse.body;
    var seatbid = responseBody.seatbid;

    for (var i = 0; i < seatbid.length; i++) {
      if (!seatbid[i].hasOwnProperty('bid')) {
        continue;
      } // Transform rawBid in bid response to the format that will be accepted by prebid.


      var innerBids = seatbid[i].bid;

      for (var j = 0; j < innerBids.length; j++) {
        bid = parseBid(innerBids[j], responseBody.cur);
        bids.push(bid);
      }
    }

    return bids;
  },

  /**
   * Covert bid param types for S2S
   * @param {Object} params bid params
   * @param {Boolean} isOpenRtb boolean to check openrtb2 protocol
   * @return {Object} params bid params
   */
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    return __WEBPACK_IMPORTED_MODULE_0__src_utils__["convertTypes"]({
      'siteID': 'number'
    }, params);
  }
};
Object(__WEBPACK_IMPORTED_MODULE_5__src_adapters_bidderFactory__["registerBidder"])(spec);

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(255);
module.exports = __webpack_require__(13).Array.isArray;


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(14);

$export($export.S, 'Array', { isArray: __webpack_require__(38) });


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(257);
module.exports = __webpack_require__(13).Number.isInteger;


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(14);

$export($export.S, 'Number', { isInteger: __webpack_require__(258) });


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(15);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ })

},[252]);
pbjsChunk([98],{

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(310);


/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["resetBoPixel"] = resetBoPixel;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", (function() { return spec; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_userSync__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_url__ = __webpack_require__(11);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var SUPPORTED_AD_TYPES = [__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["a" /* BANNER */], __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* VIDEO */]];
var BIDDER_CODE = 'openx';
var BIDDER_CONFIG = 'hb_pb';
var BIDDER_VERSION = '2.1.6';
var shouldSendBoPixel = true;
function resetBoPixel() {
  shouldSendBoPixel = true;
}
var spec = {
  code: BIDDER_CODE,
  supportedMediaTypes: SUPPORTED_AD_TYPES,
  isBidRequestValid: function isBidRequestValid(bidRequest) {
    var hasDelDomainOrPlatform = bidRequest.params.delDomain || bidRequest.params.platform;

    if (__WEBPACK_IMPORTED_MODULE_2__src_utils__["deepAccess"](bidRequest, 'mediaTypes.banner') && hasDelDomainOrPlatform) {
      return !!bidRequest.params.unit || __WEBPACK_IMPORTED_MODULE_2__src_utils__["deepAccess"](bidRequest, 'mediaTypes.banner.sizes.length') > 0;
    }

    return !!(bidRequest.params.unit && hasDelDomainOrPlatform);
  },
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    if (bidRequests.length === 0) {
      return [];
    }

    var requests = [];

    var _partitionByVideoBids = partitionByVideoBids(bidRequests),
        _partitionByVideoBids2 = _slicedToArray(_partitionByVideoBids, 2),
        videoBids = _partitionByVideoBids2[0],
        bannerBids = _partitionByVideoBids2[1]; // build banner requests


    if (bannerBids.length > 0) {
      requests.push(buildOXBannerRequest(bannerBids, bidderRequest));
    } // build video requests


    if (videoBids.length > 0) {
      videoBids.forEach((function (videoBid) {
        requests.push(buildOXVideoRequest(videoBid, bidderRequest));
      }));
    }

    return requests;
  },
  interpretResponse: function interpretResponse(_ref, serverRequest) {
    var oxResponseObj = _ref.body;
    var mediaType = getMediaTypeFromRequest(serverRequest);
    return mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* VIDEO */] ? createVideoBidResponses(oxResponseObj, serverRequest.payload) : createBannerBidResponses(oxResponseObj, serverRequest.payload);
  },
  getUserSyncs: function getUserSyncs(syncOptions, responses) {
    if (syncOptions.iframeEnabled || syncOptions.pixelEnabled) {
      var pixelType = syncOptions.iframeEnabled ? 'iframe' : 'image';
      var url = __WEBPACK_IMPORTED_MODULE_2__src_utils__["deepAccess"](responses, '0.body.ads.pixels') || __WEBPACK_IMPORTED_MODULE_2__src_utils__["deepAccess"](responses, '0.body.pixels') || '//u.openx.net/w/1.0/pd';
      return [{
        type: pixelType,
        url: url
      }];
    }
  },
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    return __WEBPACK_IMPORTED_MODULE_2__src_utils__["convertTypes"]({
      'unit': 'string',
      'customFloor': 'number'
    }, params);
  }
};

function isVideoRequest(bidRequest) {
  return __WEBPACK_IMPORTED_MODULE_2__src_utils__["deepAccess"](bidRequest, 'mediaTypes.video') || bidRequest.mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* VIDEO */];
}

function createBannerBidResponses(oxResponseObj, _ref2) {
  var bids = _ref2.bids,
      startTime = _ref2.startTime;
  var adUnits = oxResponseObj.ads.ad;
  var bidResponses = [];

  for (var i = 0; i < adUnits.length; i++) {
    var adUnit = adUnits[i];
    var adUnitIdx = parseInt(adUnit.idx, 10);
    var bidResponse = {};
    bidResponse.requestId = bids[adUnitIdx].bidId;

    if (adUnit.pub_rev) {
      bidResponse.cpm = Number(adUnit.pub_rev) / 1000;
    } else {
      // No fill, do not add the bidresponse
      continue;
    }

    var creative = adUnit.creative[0];

    if (creative) {
      bidResponse.width = creative.width;
      bidResponse.height = creative.height;
    }

    bidResponse.creativeId = creative.id;
    bidResponse.ad = adUnit.html;

    if (adUnit.deal_id) {
      bidResponse.dealId = adUnit.deal_id;
    } // default 5 mins


    bidResponse.ttl = 300; // true is net, false is gross

    bidResponse.netRevenue = true;
    bidResponse.currency = adUnit.currency; // additional fields to add

    if (adUnit.tbd) {
      bidResponse.tbd = adUnit.tbd;
    }

    bidResponse.ts = adUnit.ts;
    bidResponses.push(bidResponse);
    registerBeacon(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["a" /* BANNER */], adUnit, startTime);
  }

  return bidResponses;
}

function buildQueryStringFromParams(params) {
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      if (!params[key]) {
        delete params[key];
      }
    }
  }

  return __WEBPACK_IMPORTED_MODULE_2__src_utils__["_map"](Object.keys(params), (function (key) {
    return "".concat(key, "=").concat(params[key]);
  })).join('&');
}

function getViewportDimensions(isIfr) {
  var width;
  var height;
  var tWin = window;
  var tDoc = document;
  var docEl = tDoc.documentElement;
  var body;

  if (isIfr) {
    try {
      tWin = window.top;
      tDoc = window.top.document;
    } catch (e) {
      return;
    }

    docEl = tDoc.documentElement;
    body = tDoc.body;
    width = tWin.innerWidth || docEl.clientWidth || body.clientWidth;
    height = tWin.innerHeight || docEl.clientHeight || body.clientHeight;
  } else {
    docEl = tDoc.documentElement;
    width = tWin.innerWidth || docEl.clientWidth;
    height = tWin.innerHeight || docEl.clientHeight;
  }

  return "".concat(width, "x").concat(height);
}

function formatCustomParms(customKey, customParams) {
  var value = customParams[customKey];

  if (__WEBPACK_IMPORTED_MODULE_2__src_utils__["isArray"](value)) {
    // if value is an array, join them with commas first
    value = value.join(',');
  } // return customKey=customValue format, escaping + to . and / to _


  return (customKey.toLowerCase() + '=' + value.toLowerCase()).replace('+', '.').replace('/', '_');
}

function partitionByVideoBids(bidRequests) {
  return bidRequests.reduce((function (acc, bid) {
    // Fallback to banner ads if nothing specified
    if (isVideoRequest(bid)) {
      acc[0].push(bid);
    } else {
      acc[1].push(bid);
    }

    return acc;
  }), [[], []]);
}

function getMediaTypeFromRequest(serverRequest) {
  return /avjp$/.test(serverRequest.url) ? __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* VIDEO */] : __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["a" /* BANNER */];
}

function buildCommonQueryParamsFromBids(bids, bidderRequest) {
  var isInIframe = __WEBPACK_IMPORTED_MODULE_2__src_utils__["inIframe"]();
  var defaultParams;
  defaultParams = {
    ju: __WEBPACK_IMPORTED_MODULE_0__src_config__["config"].getConfig('pageUrl') || __WEBPACK_IMPORTED_MODULE_2__src_utils__["getTopWindowUrl"](),
    jr: __WEBPACK_IMPORTED_MODULE_2__src_utils__["getTopWindowReferrer"](),
    ch: document.charSet || document.characterSet,
    res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
    ifr: isInIframe,
    tz: new Date().getTimezoneOffset(),
    tws: getViewportDimensions(isInIframe),
    be: 1,
    bc: bids[0].params.bc || "".concat(BIDDER_CONFIG, "_").concat(BIDDER_VERSION),
    dddid: __WEBPACK_IMPORTED_MODULE_2__src_utils__["_map"](bids, (function (bid) {
      return bid.transactionId;
    })).join(','),
    nocache: new Date().getTime()
  };

  if (bids[0].params.platform) {
    defaultParams.ph = bids[0].params.platform;
  }

  if (__WEBPACK_IMPORTED_MODULE_2__src_utils__["deepAccess"](bidderRequest, 'gdprConsent')) {
    var gdprConsentConfig = bidderRequest.gdprConsent;

    if (gdprConsentConfig.consentString !== undefined) {
      defaultParams.gdpr_consent = gdprConsentConfig.consentString;
    }

    if (gdprConsentConfig.gdprApplies !== undefined) {
      defaultParams.gdpr = gdprConsentConfig.gdprApplies ? 1 : 0;
    }

    if (__WEBPACK_IMPORTED_MODULE_0__src_config__["config"].getConfig('consentManagement.cmpApi') === 'iab') {
      defaultParams.x_gdpr_f = 1;
    }
  }

  if (bids[0].crumbs && bids[0].crumbs.pubcid) {
    defaultParams.pubcid = bids[0].crumbs.pubcid;
  }

  return defaultParams;
}

function buildOXBannerRequest(bids, bidderRequest) {
  var customParamsForAllBids = [];
  var hasCustomParam = false;
  var queryParams = buildCommonQueryParamsFromBids(bids, bidderRequest);

  var auids = __WEBPACK_IMPORTED_MODULE_2__src_utils__["_map"](bids, (function (bid) {
    return bid.params.unit;
  }));

  queryParams.aus = __WEBPACK_IMPORTED_MODULE_2__src_utils__["_map"](bids, (function (bid) {
    return __WEBPACK_IMPORTED_MODULE_2__src_utils__["parseSizesInput"](bid.sizes).join(',');
  })).join('|');
  queryParams.divIds = __WEBPACK_IMPORTED_MODULE_2__src_utils__["_map"](bids, (function (bid) {
    return encodeURIComponent(bid.adUnitCode);
  })).join(',');

  if (auids.some((function (auid) {
    return auid;
  }))) {
    queryParams.auid = auids.join(',');
  }

  if (bids.some((function (bid) {
    return bid.params.doNotTrack;
  }))) {
    queryParams.ns = 1;
  }

  if (bids.some((function (bid) {
    return bid.params.coppa;
  }))) {
    queryParams.tfcd = 1;
  }

  bids.forEach((function (bid) {
    if (bid.params.customParams) {
      var customParamsForBid = __WEBPACK_IMPORTED_MODULE_2__src_utils__["_map"](Object.keys(bid.params.customParams), (function (customKey) {
        return formatCustomParms(customKey, bid.params.customParams);
      }));

      var formattedCustomParams = window.btoa(customParamsForBid.join('&'));
      hasCustomParam = true;
      customParamsForAllBids.push(formattedCustomParams);
    } else {
      customParamsForAllBids.push('');
    }
  }));

  if (hasCustomParam) {
    queryParams.tps = customParamsForAllBids.join(',');
  }

  var customFloorsForAllBids = [];
  var hasCustomFloor = false;
  bids.forEach((function (bid) {
    if (bid.params.customFloor) {
      customFloorsForAllBids.push(bid.params.customFloor * 1000);
      hasCustomFloor = true;
    } else {
      customFloorsForAllBids.push(0);
    }
  }));

  if (hasCustomFloor) {
    queryParams.aumfs = customFloorsForAllBids.join(',');
  }

  var url = queryParams.ph ? "//u.openx.net/w/1.0/arj" : "//".concat(bids[0].params.delDomain, "/w/1.0/arj");
  return {
    method: 'GET',
    url: url,
    data: queryParams,
    payload: {
      'bids': bids,
      'startTime': new Date()
    }
  };
}

function buildOXVideoRequest(bid, bidderRequest) {
  var oxVideoParams = generateVideoParameters(bid, bidderRequest);
  var url = oxVideoParams.ph ? "//u.openx.net/v/1.0/avjp" : "//".concat(bid.params.delDomain, "/v/1.0/avjp");
  return {
    method: 'GET',
    url: url,
    data: oxVideoParams,
    payload: {
      'bid': bid,
      'startTime': new Date()
    }
  };
}

function generateVideoParameters(bid, bidderRequest) {
  var queryParams = buildCommonQueryParamsFromBids([bid], bidderRequest);
  var oxVideoConfig = __WEBPACK_IMPORTED_MODULE_2__src_utils__["deepAccess"](bid, 'params.video') || {};
  var context = __WEBPACK_IMPORTED_MODULE_2__src_utils__["deepAccess"](bid, 'mediaTypes.video.context');
  var playerSize = __WEBPACK_IMPORTED_MODULE_2__src_utils__["deepAccess"](bid, 'mediaTypes.video.playerSize');
  var width;
  var height; // normalize config for video size

  if (__WEBPACK_IMPORTED_MODULE_2__src_utils__["isArray"](bid.sizes) && bid.sizes.length === 2 && !__WEBPACK_IMPORTED_MODULE_2__src_utils__["isArray"](bid.sizes[0])) {
    width = parseInt(bid.sizes[0], 10);
    height = parseInt(bid.sizes[1], 10);
  } else if (__WEBPACK_IMPORTED_MODULE_2__src_utils__["isArray"](bid.sizes) && __WEBPACK_IMPORTED_MODULE_2__src_utils__["isArray"](bid.sizes[0]) && bid.sizes[0].length === 2) {
    width = parseInt(bid.sizes[0][0], 10);
    height = parseInt(bid.sizes[0][1], 10);
  } else if (__WEBPACK_IMPORTED_MODULE_2__src_utils__["isArray"](playerSize) && playerSize.length === 2) {
    width = parseInt(playerSize[0], 10);
    height = parseInt(playerSize[1], 10);
  }

  Object.keys(oxVideoConfig).forEach((function (key) {
    if (key === 'openrtb') {
      oxVideoConfig[key].w = width || oxVideoConfig[key].w;
      oxVideoConfig[key].v = height || oxVideoConfig[key].v;
      queryParams[key] = JSON.stringify(oxVideoConfig[key]);
    } else if (!(key in queryParams) && key !== 'url') {
      // only allow video-related attributes
      queryParams[key] = oxVideoConfig[key];
    }
  }));
  queryParams.auid = bid.params.unit; // override prebid config with openx config if available

  queryParams.vwd = width || oxVideoConfig.vwd;
  queryParams.vht = height || oxVideoConfig.vht;

  if (context === 'outstream') {
    queryParams.vos = '101';
  }

  if (oxVideoConfig.mimes) {
    queryParams.vmimes = oxVideoConfig.mimes;
  }

  return queryParams;
}

function createVideoBidResponses(response, _ref3) {
  var bid = _ref3.bid,
      startTime = _ref3.startTime;
  var bidResponses = [];

  if (response !== undefined && response.vastUrl !== '' && response.pub_rev !== '') {
    var vastQueryParams = Object(__WEBPACK_IMPORTED_MODULE_5__src_url__["c" /* parse */])(response.vastUrl).search || {};
    var bidResponse = {};
    bidResponse.requestId = bid.bidId;
    bidResponse.bidderCode = BIDDER_CODE; // default 5 mins

    bidResponse.ttl = 300; // true is net, false is gross

    bidResponse.netRevenue = true;
    bidResponse.currency = response.currency;
    bidResponse.cpm = Number(response.pub_rev) / 1000;
    bidResponse.width = response.width;
    bidResponse.height = response.height;
    bidResponse.creativeId = response.adid;
    bidResponse.vastUrl = response.vastUrl;
    bidResponse.mediaType = __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* VIDEO */]; // enrich adunit with vast parameters

    response.ph = vastQueryParams.ph;
    response.colo = vastQueryParams.colo;
    response.ts = vastQueryParams.ts;
    bidResponses.push(bidResponse);
    registerBeacon(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* VIDEO */], response, startTime);
  }

  return bidResponses;
}

function registerBeacon(mediaType, adUnit, startTime) {
  // only register beacon once
  if (!shouldSendBoPixel) {
    return;
  }

  shouldSendBoPixel = false;
  var bt = __WEBPACK_IMPORTED_MODULE_0__src_config__["config"].getConfig('bidderTimeout');
  var beaconUrl;

  if (window.PREBID_TIMEOUT) {
    bt = Math.min(window.PREBID_TIMEOUT, bt);
  }

  var beaconParams = {
    bd: +new Date() - startTime,
    bp: adUnit.pub_rev,
    br: '0',
    // may be 0, t, or p
    bs: __WEBPACK_IMPORTED_MODULE_2__src_utils__["getTopWindowLocation"]().hostname,
    bt: bt,
    ts: adUnit.ts
  };
  beaconParams.br = beaconParams.bt < beaconParams.bd ? 't' : 'p';

  if (mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* VIDEO */]) {
    var url = Object(__WEBPACK_IMPORTED_MODULE_5__src_url__["c" /* parse */])(adUnit.colo);
    beaconParams.ph = adUnit.ph;
    beaconUrl = "//".concat(url.hostname, "/w/1.0/bo?").concat(buildQueryStringFromParams(beaconParams));
  } else {
    var recordPixel = __WEBPACK_IMPORTED_MODULE_2__src_utils__["deepAccess"](adUnit, 'creative.0.tracking.impression');
    var boBase = recordPixel.match(/([^?]+\/)ri\?/);

    if (boBase && boBase.length > 1) {
      beaconUrl = "".concat(boBase[1], "bo?").concat(buildQueryStringFromParams(beaconParams));
    }
  }

  if (beaconUrl) {
    __WEBPACK_IMPORTED_MODULE_3__src_userSync__["a" /* userSync */].registerSync('image', BIDDER_CODE, beaconUrl);
  }
}

Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__["registerBidder"])(spec);

/***/ })

},[309]);
pbjsChunk([81],{

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(347);


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", (function() { return spec; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_config__ = __webpack_require__(3);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var BIDDER_CODE = 'pubmatic';
var ENDPOINT = '//hbopenbid.pubmatic.com/translator?source=prebid-client';
var USYNCURL = '//ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=';
var DEFAULT_CURRENCY = 'USD';
var AUCTION_TYPE = 1;
var PUBMATIC_DIGITRUST_KEY = 'nFIn8aLzbd';
var UNDEFINED = undefined;
var DEFAULT_WIDTH = 0;
var DEFAULT_HEIGHT = 0;
var PREBID_NATIVE_HELP_LINK = 'http://prebid.org/dev-docs/show-native-ads.html';
var CUSTOM_PARAMS = {
  'kadpageurl': '',
  // Custom page url
  'gender': '',
  // User gender
  'yob': '',
  // User year of birth
  'lat': '',
  // User location - Latitude
  'lon': '',
  // User Location - Longitude
  'wiid': '',
  // OpenWrap Wrapper Impression ID
  'profId': '',
  // OpenWrap Legacy: Profile ID
  'verId': '' // OpenWrap Legacy: version ID

};
var DATA_TYPES = {
  'NUMBER': 'number',
  'STRING': 'string',
  'BOOLEAN': 'boolean',
  'ARRAY': 'array',
  'OBJECT': 'object'
};
var VIDEO_CUSTOM_PARAMS = {
  'mimes': DATA_TYPES.ARRAY,
  'minduration': DATA_TYPES.NUMBER,
  'maxduration': DATA_TYPES.NUMBER,
  'startdelay': DATA_TYPES.NUMBER,
  'playbackmethod': DATA_TYPES.ARRAY,
  'api': DATA_TYPES.ARRAY,
  'protocols': DATA_TYPES.ARRAY,
  'w': DATA_TYPES.NUMBER,
  'h': DATA_TYPES.NUMBER,
  'battr': DATA_TYPES.ARRAY,
  'linearity': DATA_TYPES.NUMBER,
  'placement': DATA_TYPES.NUMBER,
  'minbitrate': DATA_TYPES.NUMBER,
  'maxbitrate': DATA_TYPES.NUMBER
};
var NATIVE_ASSET_ID = {
  'TITLE': 1,
  'IMAGE': 2,
  'ICON': 3,
  'SPONSOREDBY': 4,
  'BODY': 5,
  'CLICKURL': 6,
  'VIDEO': 7,
  'EXT': 8,
  'DATA': 9,
  'LOGO': 10,
  'SPONSORED': 11,
  'DESC': 12,
  'RATING': 13,
  'LIKES': 14,
  'DOWNLOADS': 15,
  'PRICE': 16,
  'SALEPRICE': 17,
  'PHONE': 18,
  'ADDRESS': 19,
  'DESC2': 20,
  'DISPLAYURL': 21,
  'CTA': 22
};
var NATIVE_ASSET_REVERSE_ID = {
  4: 'sponsoredBy',
  5: 'body',
  6: 'clickUrl',
  7: 'video',
  8: 'ext',
  9: 'data',
  10: 'logo',
  11: 'sponsored',
  12: 'desc',
  13: 'rating',
  14: 'likes',
  15: 'downloads',
  16: 'price',
  17: 'saleprice',
  18: 'phone',
  19: 'address',
  20: 'desc2',
  21: 'displayurl',
  22: 'cta'
};
var NATIVE_ASSET_KEY = {
  'TITLE': 'title',
  'IMAGE': 'image',
  'ICON': 'icon',
  'SPONSOREDBY': 'sponsoredBy',
  'BODY': 'body',
  'VIDEO': 'video',
  'EXT': 'ext',
  'DATA': 'data',
  'LOGO': 'logo',
  'DESC': 'desc',
  'RATING': 'rating',
  'LIKES': 'likes',
  'DOWNLOADS': 'downloads',
  'PRICE': 'price',
  'SALEPRICE': 'saleprice',
  'PHONE': 'phone',
  'ADDRESS': 'address',
  'DESC2': 'desc2',
  'DISPLAYURL': 'displayurl',
  'CTA': 'cta'
};
var NATIVE_ASSET_IMAGE_TYPE = {
  'ICON': 1,
  'LOGO': 2,
  'IMAGE': 3
};
var NATIVE_ASSET_DATA_TYPE = {
  'SPONSORED': 1,
  'DESC': 2,
  'RATING': 3,
  'LIKES': 4,
  'DOWNLOADS': 5,
  'PRICE': 6,
  'SALEPRICE': 7,
  'PHONE': 8,
  'ADDRESS': 9,
  'DESC2': 10,
  'DISPLAYURL': 11,
  'CTA': 12 // check if title, image can be added with mandatory field default values

};
var NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS = [{
  id: NATIVE_ASSET_ID.SPONSOREDBY,
  required: true,
  data: {
    type: 1
  }
}, {
  id: NATIVE_ASSET_ID.TITLE,
  required: true
}, {
  id: NATIVE_ASSET_ID.IMAGE,
  required: true
}];
var NET_REVENUE = false;
var dealChannelValues = {
  1: 'PMP',
  5: 'PREF',
  6: 'PMPG'
};
var publisherId = 0;
var isInvalidNativeRequest = false;

function _getDomainFromURL(url) {
  var anchor = document.createElement('a');
  anchor.href = url;
  return anchor.hostname;
}

function _parseSlotParam(paramName, paramValue) {
  if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](paramValue)) {
    paramValue && __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('PubMatic: Ignoring param key: ' + paramName + ', expects string-value, found ' + _typeof(paramValue));
    return UNDEFINED;
  }

  switch (paramName) {
    case 'pmzoneid':
      return paramValue.split(',').slice(0, 50).map((function (id) {
        return id.trim();
      })).join();

    case 'kadfloor':
      return parseFloat(paramValue) || UNDEFINED;

    case 'lat':
      return parseFloat(paramValue) || UNDEFINED;

    case 'lon':
      return parseFloat(paramValue) || UNDEFINED;

    case 'yob':
      return parseInt(paramValue) || UNDEFINED;

    default:
      return paramValue;
  }
}

function _cleanSlot(slotName) {
  if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](slotName)) {
    return slotName.replace(/^\s+/g, '').replace(/\s+$/g, '');
  }

  return '';
}

function _parseAdSlot(bid) {
  bid.params.adUnit = '';
  bid.params.adUnitIndex = '0';
  bid.params.width = 0;
  bid.params.height = 0;
  var sizesArrayExists = bid.hasOwnProperty('sizes') && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](bid.sizes) && bid.sizes.length >= 1;
  bid.params.adSlot = _cleanSlot(bid.params.adSlot);
  var slot = bid.params.adSlot;
  var splits = slot.split(':');
  slot = splits[0];

  if (splits.length == 2) {
    bid.params.adUnitIndex = splits[1];
  } // check if size is mentioned in sizes array. in that case do not check for @ in adslot


  splits = slot.split('@');

  if (splits.length != 2) {
    if (!sizesArrayExists) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('AdSlot Error: adSlot not in required format');
      return;
    }
  }

  bid.params.adUnit = splits[0];

  if (splits.length > 1) {
    // i.e size is specified in adslot, so consider that and ignore sizes array
    splits = splits[1].split('x');

    if (splits.length != 2) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('AdSlot Error: adSlot not in required format');
      return;
    }

    bid.params.width = parseInt(splits[0]);
    bid.params.height = parseInt(splits[1]);
    delete bid.sizes;
  } else if (sizesArrayExists) {
    bid.params.width = parseInt(bid.sizes[0][0]);
    bid.params.height = parseInt(bid.sizes[0][1]);
  }
}

function _initConf(refererInfo) {
  var conf = {};
  conf.pageURL = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getTopWindowUrl"]();

  if (refererInfo && refererInfo.referer) {
    conf.refURL = refererInfo.referer;
  } else {
    conf.refURL = '';
  }

  return conf;
}

function _handleCustomParams(params, conf) {
  if (!conf.kadpageurl) {
    conf.kadpageurl = conf.pageURL;
  }

  var key, value, entry;

  for (key in CUSTOM_PARAMS) {
    if (CUSTOM_PARAMS.hasOwnProperty(key)) {
      value = params[key];

      if (value) {
        entry = CUSTOM_PARAMS[key];

        if (_typeof(entry) === 'object') {
          // will be used in future when we want to process a custom param before using
          // 'keyname': {f: function() {}}
          value = entry.f(value, conf);
        }

        if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](value)) {
          conf[key] = value;
        } else {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('PubMatic: Ignoring param : ' + key + ' with value : ' + CUSTOM_PARAMS[key] + ', expects string-value, found ' + _typeof(value));
        }
      }
    }
  }

  return conf;
}

function _createOrtbTemplate(conf) {
  return {
    id: '' + new Date().getTime(),
    at: AUCTION_TYPE,
    cur: [DEFAULT_CURRENCY],
    imp: [],
    site: {
      page: conf.pageURL,
      ref: conf.refURL,
      publisher: {}
    },
    device: {
      ua: navigator.userAgent,
      js: 1,
      dnt: navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' || navigator.msDoNotTrack == '1' ? 1 : 0,
      h: screen.height,
      w: screen.width,
      language: navigator.language
    },
    user: {},
    ext: {}
  };
} // similar functionality as parseSlotParam. Check if the 2 functions can be clubbed.


function _checkParamDataType(key, value, datatype) {
  var errMsg = 'PubMatic: Ignoring param key: ' + key + ', expects ' + datatype + ', found ' + _typeof(value);

  switch (datatype) {
    case DATA_TYPES.BOOLEAN:
      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isBoolean"](value)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](errMsg);
        return UNDEFINED;
      }

      return value;

    case DATA_TYPES.NUMBER:
      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isNumber"](value)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](errMsg);
        return UNDEFINED;
      }

      return value;

    case DATA_TYPES.STRING:
      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](value)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](errMsg);
        return UNDEFINED;
      }

      return value;

    case DATA_TYPES.ARRAY:
      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](value)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](errMsg);
        return UNDEFINED;
      }

      return value;
  }
}

function _createNativeRequest(params) {
  var nativeRequestObject = {
    assets: []
  };

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var assetObj = {};

      if (!(nativeRequestObject.assets && nativeRequestObject.assets.length > 0 && nativeRequestObject.assets.hasOwnProperty(key))) {
        switch (key) {
          case NATIVE_ASSET_KEY.TITLE:
            if (params[key].len || params[key].length) {
              assetObj = {
                id: NATIVE_ASSET_ID.TITLE,
                required: params[key].required ? 1 : 0,
                title: {
                  len: params[key].len || params[key].length,
                  ext: params[key].ext
                }
              };
            } else {
              __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ' Error: Title Length is required for native ad: ' + JSON.stringify(params));
            }

            break;

          case NATIVE_ASSET_KEY.IMAGE:
            if (params[key].sizes && params[key].sizes.length > 0) {
              assetObj = {
                id: NATIVE_ASSET_ID.IMAGE,
                required: params[key].required ? 1 : 0,
                img: {
                  type: NATIVE_ASSET_IMAGE_TYPE.IMAGE,
                  w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : undefined),
                  h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : undefined),
                  wmin: params[key].wmin || params[key].minimumWidth || (params[key].minsizes ? params[key].minsizes[0] : undefined),
                  hmin: params[key].hmin || params[key].minimumHeight || (params[key].minsizes ? params[key].minsizes[1] : undefined),
                  mimes: params[key].mimes,
                  ext: params[key].ext
                }
              };
            } else {
              // Log Warn
              __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ' Error: Image sizes is required for native ad: ' + JSON.stringify(params));
            }

            break;

          case NATIVE_ASSET_KEY.ICON:
            if (params[key].sizes && params[key].sizes.length > 0) {
              assetObj = {
                id: NATIVE_ASSET_ID.ICON,
                required: params[key].required ? 1 : 0,
                img: {
                  type: NATIVE_ASSET_IMAGE_TYPE.ICON,
                  w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : undefined),
                  h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : undefined)
                }
              };
            } else {
              // Log Warn
              __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ' Error: Icon sizes is required for native ad: ' + JSON.stringify(params));
            }

            ;
            break;

          case NATIVE_ASSET_KEY.SPONSOREDBY:
            assetObj = {
              id: NATIVE_ASSET_ID.SPONSOREDBY,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.SPONSORED,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.BODY:
            assetObj = {
              id: NATIVE_ASSET_ID.BODY,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.DESC,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.VIDEO:
            assetObj = {
              id: NATIVE_ASSET_ID.VIDEO,
              required: params[key].required ? 1 : 0,
              video: {
                minduration: params[key].minduration,
                maxduration: params[key].maxduration,
                protocols: params[key].protocols,
                mimes: params[key].mimes,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.EXT:
            assetObj = {
              id: NATIVE_ASSET_ID.EXT,
              required: params[key].required ? 1 : 0
            };
            break;

          case NATIVE_ASSET_KEY.LOGO:
            assetObj = {
              id: NATIVE_ASSET_ID.LOGO,
              required: params[key].required ? 1 : 0,
              img: {
                type: NATIVE_ASSET_IMAGE_TYPE.LOGO,
                w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : undefined),
                h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : undefined)
              }
            };
            break;

          case NATIVE_ASSET_KEY.RATING:
            assetObj = {
              id: NATIVE_ASSET_ID.RATING,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.RATING,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.LIKES:
            assetObj = {
              id: NATIVE_ASSET_ID.LIKES,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.LIKES,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.DOWNLOADS:
            assetObj = {
              id: NATIVE_ASSET_ID.DOWNLOADS,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.DOWNLOADS,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.PRICE:
            assetObj = {
              id: NATIVE_ASSET_ID.PRICE,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.PRICE,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.SALEPRICE:
            assetObj = {
              id: NATIVE_ASSET_ID.SALEPRICE,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.SALEPRICE,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.PHONE:
            assetObj = {
              id: NATIVE_ASSET_ID.PHONE,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.PHONE,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.ADDRESS:
            assetObj = {
              id: NATIVE_ASSET_ID.ADDRESS,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.ADDRESS,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.DESC2:
            assetObj = {
              id: NATIVE_ASSET_ID.DESC2,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.DESC2,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.DISPLAYURL:
            assetObj = {
              id: NATIVE_ASSET_ID.DISPLAYURL,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.DISPLAYURL,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.CTA:
            assetObj = {
              id: NATIVE_ASSET_ID.CTA,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.CTA,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;
        }
      }
    }

    if (assetObj && assetObj.id) {
      nativeRequestObject.assets[nativeRequestObject.assets.length] = assetObj;
    }
  }

  ; // for native image adtype prebid has to have few required assests i.e. title,sponsoredBy, image
  // if any of these are missing from the request then request will not be sent

  var requiredAssetCount = NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS.length;
  var presentrequiredAssetCount = 0;
  NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS.forEach((function (ele) {
    var lengthOfExistingAssets = nativeRequestObject.assets.length;

    for (var i = 0; i < lengthOfExistingAssets; i++) {
      if (ele.id == nativeRequestObject.assets[i].id) {
        presentrequiredAssetCount++;
        break;
      }
    }
  }));

  if (requiredAssetCount == presentrequiredAssetCount) {
    isInvalidNativeRequest = false;
  } else {
    isInvalidNativeRequest = true;
  }

  return nativeRequestObject;
}

function _createImpressionObject(bid, conf) {
  var impObj = {};
  var bannerObj = {};
  var videoObj = {};
  var sizes = bid.hasOwnProperty('sizes') ? bid.sizes : [];
  impObj = {
    id: bid.bidId,
    tagid: bid.params.adUnit,
    bidfloor: _parseSlotParam('kadfloor', bid.params.kadfloor),
    secure: window.location.protocol === 'https:' ? 1 : 0,
    ext: {
      pmZoneId: _parseSlotParam('pmzoneid', bid.params.pmzoneid)
    },
    bidfloorcur: bid.params.currency ? _parseSlotParam('currency', bid.params.currency) : DEFAULT_CURRENCY
  };

  if (bid.params.hasOwnProperty('video')) {
    var videoData = bid.params.video;

    for (var key in VIDEO_CUSTOM_PARAMS) {
      if (videoData.hasOwnProperty(key)) {
        videoObj[key] = _checkParamDataType(key, videoData[key], VIDEO_CUSTOM_PARAMS[key]);
      }
    } // read playersize and assign to h and w.


    if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](bid.mediaTypes.video.playerSize[0])) {
      videoObj.w = bid.mediaTypes.video.playerSize[0][0];
      videoObj.h = bid.mediaTypes.video.playerSize[0][1];
    } else if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["isNumber"](bid.mediaTypes.video.playerSize[0])) {
      videoObj.w = bid.mediaTypes.video.playerSize[0];
      videoObj.h = bid.mediaTypes.video.playerSize[1];
    }

    if (bid.params.video.hasOwnProperty('skippable')) {
      videoObj.ext = {
        'video_skippable': bid.params.video.skippable ? 1 : 0
      };
    }

    impObj.video = videoObj;
  } else if (bid.nativeParams) {
    impObj.native = {};
    impObj.native['request'] = JSON.stringify(_createNativeRequest(bid.nativeParams));
  } else {
    bannerObj = {
      pos: 0,
      w: bid.params.width,
      h: bid.params.height,
      topframe: __WEBPACK_IMPORTED_MODULE_0__src_utils__["inIframe"]() ? 0 : 1
    };

    if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](sizes) && sizes.length > 1) {
      sizes = sizes.splice(1, sizes.length - 1);
      var format = [];
      sizes.forEach((function (size) {
        format.push({
          w: size[0],
          h: size[1]
        });
      }));
      bannerObj.format = format;
    }

    impObj.banner = bannerObj;
  }

  if (isInvalidNativeRequest && impObj.hasOwnProperty('native')) {
    __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': Call to OpenBid will not be sent for  native ad unit as it does not contain required valid native params.' + JSON.stringify(bid) + ' Refer:' + PREBID_NATIVE_HELP_LINK);
    return;
  }

  return impObj;
}

function _getDigiTrustObject(key) {
  function getDigiTrustId() {
    var digiTrustUser = window.DigiTrust && (__WEBPACK_IMPORTED_MODULE_3__src_config__["config"].getConfig('digiTrustId') || window.DigiTrust.getUser({
      member: key
    }));
    return digiTrustUser && digiTrustUser.success && digiTrustUser.identity || null;
  }

  var digiTrustId = getDigiTrustId(); // Verify there is an ID and this user has not opted out

  if (!digiTrustId || digiTrustId.privacy && digiTrustId.privacy.optout) {
    return null;
  }

  return digiTrustId;
}

function _handleDigitrustId(eids) {
  var digiTrustId = _getDigiTrustObject(PUBMATIC_DIGITRUST_KEY);

  if (digiTrustId !== null) {
    eids.push({
      'source': 'digitru.st',
      'uids': [{
        'id': digiTrustId.id || '',
        'atype': 1,
        'ext': {
          'keyv': parseInt(digiTrustId.keyv) || 0
        }
      }]
    });
  }
}

function _handleTTDId(eids) {
  var adsrvrOrgId = __WEBPACK_IMPORTED_MODULE_3__src_config__["config"].getConfig('adsrvrOrgId');

  if (adsrvrOrgId && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](adsrvrOrgId.TDID)) {
    eids.push({
      'source': 'adserver.org',
      'uids': [{
        'id': adsrvrOrgId.TDID,
        'atype': 1,
        'ext': {
          'rtiPartner': 'TDID'
        }
      }]
    });
  }
}

function _handleEids(payload) {
  var eids = [];

  _handleDigitrustId(eids);

  _handleTTDId(eids);

  if (eids.length > 0) {
    payload.user.eids = eids;
  }
}

function _parseNativeResponse(bid, newBid) {
  newBid.native = {};

  if (bid.hasOwnProperty('adm')) {
    var adm = '';

    try {
      adm = JSON.parse(bid.adm.replace(/\\/g, ''));
    } catch (ex) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ' Error: Cannot parse native reponse for ad response: ' + newBid.adm);
      return;
    }

    if (adm && adm.native && adm.native.assets && adm.native.assets.length > 0) {
      newBid.mediaType = 'native';

      for (var i = 0, len = adm.native.assets.length; i < len; i++) {
        switch (adm.native.assets[i].id) {
          case NATIVE_ASSET_ID.TITLE:
            newBid.native.title = adm.native.assets[i].title && adm.native.assets[i].title.text;
            break;

          case NATIVE_ASSET_ID.IMAGE:
            newBid.native.image = {
              url: adm.native.assets[i].img && adm.native.assets[i].img.url,
              height: adm.native.assets[i].img && adm.native.assets[i].img.h,
              width: adm.native.assets[i].img && adm.native.assets[i].img.w
            };
            break;

          case NATIVE_ASSET_ID.ICON:
            newBid.native.icon = {
              url: adm.native.assets[i].img && adm.native.assets[i].img.url,
              height: adm.native.assets[i].img && adm.native.assets[i].img.h,
              width: adm.native.assets[i].img && adm.native.assets[i].img.w
            };
            break;

          case NATIVE_ASSET_ID.SPONSOREDBY:
          case NATIVE_ASSET_ID.BODY:
          case NATIVE_ASSET_ID.LIKES:
          case NATIVE_ASSET_ID.DOWNLOADS:
          case NATIVE_ASSET_ID.PRICE:
          case NATIVE_ASSET_ID.SALEPRICE:
          case NATIVE_ASSET_ID.PHONE:
          case NATIVE_ASSET_ID.ADDRESS:
          case NATIVE_ASSET_ID.DESC2:
          case NATIVE_ASSET_ID.CTA:
          case NATIVE_ASSET_ID.RATING:
          case NATIVE_ASSET_ID.DISPLAYURL:
            //  Remove Redundant code
            newBid.native[NATIVE_ASSET_REVERSE_ID[adm.native.assets[i].id]] = adm.native.assets[i].data && adm.native.assets[i].data.value;
            break;
        }
      }

      newBid.native.clickUrl = adm.native.link && adm.native.link.url;
      newBid.native.clickTrackers = adm.native.link && adm.native.link.clicktrackers || [];
      newBid.native.impressionTrackers = adm.native.imptrackers || [];
      newBid.native.jstracker = adm.native.jstracker || [];

      if (!newBid.width) {
        newBid.width = DEFAULT_WIDTH;
      }

      if (!newBid.height) {
        newBid.height = DEFAULT_HEIGHT;
      }
    }
  }
}

var spec = {
  code: BIDDER_CODE,
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes__["a" /* BANNER */], __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes__["c" /* VIDEO */], __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes__["b" /* NATIVE */]],

  /**
  * Determines whether or not the given bid request is valid. Valid bid request must have placementId and hbid
  *
  * @param {BidRequest} bid The bid params to validate.
  * @return boolean True if this is a valid bid, and false otherwise.
  */
  isBidRequestValid: function isBidRequestValid(bid) {
    if (bid && bid.params) {
      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](bid.params.publisherId)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ' Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: ' + JSON.stringify(bid));
        return false;
      }

      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](bid.params.adSlot)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': adSlotId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: ' + JSON.stringify(bid));
        return false;
      } // video ad validation


      if (bid.params.hasOwnProperty('video')) {
        if (!bid.params.video.hasOwnProperty('mimes') || !__WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](bid.params.video.mimes) || bid.params.video.mimes.length === 0) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:' + JSON.stringify(bid));
          return false;
        }
      }

      return true;
    }

    return false;
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {validBidRequests[]} - an array of bids
   * @return ServerRequest Info describing the request to the server.
   */
  buildRequests: function buildRequests(validBidRequests, bidderRequest) {
    var refererInfo;

    if (bidderRequest && bidderRequest.refererInfo) {
      refererInfo = bidderRequest.refererInfo;
    }

    var conf = _initConf(refererInfo);

    var payload = _createOrtbTemplate(conf);

    var bidCurrency = '';
    var dctr = '';
    var dctrLen;
    var dctrArr = [];
    var bid;
    validBidRequests.forEach((function (originalBid) {
      bid = __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepClone"](originalBid);

      _parseAdSlot(bid);

      if (bid.params.hasOwnProperty('video')) {
        if (!(bid.params.adSlot && bid.params.adUnit && bid.params.adUnitIndex)) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': Skipping the non-standard adslot: ', bid.params.adSlot, JSON.stringify(bid));
          return;
        }
      } else {
        if (!(bid.params.adSlot && bid.params.adUnit && bid.params.adUnitIndex && bid.params.width && bid.params.height)) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': Skipping the non-standard adslot: ', bid.params.adSlot, JSON.stringify(bid));
          return;
        }
      }

      conf.pubId = conf.pubId || bid.params.publisherId;
      conf = _handleCustomParams(bid.params, conf);
      conf.transactionId = bid.transactionId;

      if (bidCurrency === '') {
        bidCurrency = bid.params.currency || undefined;
      } else if (bid.params.hasOwnProperty('currency') && bidCurrency !== bid.params.currency) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': Currency specifier ignored. Only one currency permitted.');
      }

      bid.params.currency = bidCurrency; // check if dctr is added to more than 1 adunit

      if (bid.params.hasOwnProperty('dctr') && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](bid.params.dctr)) {
        dctrArr.push(bid.params.dctr);
      }

      var impObj = _createImpressionObject(bid, conf);

      if (impObj) {
        payload.imp.push(impObj);
      }
    }));

    if (payload.imp.length == 0) {
      return;
    }

    payload.site.publisher.id = conf.pubId.trim();
    publisherId = conf.pubId.trim();
    payload.ext.wrapper = {};
    payload.ext.wrapper.profile = parseInt(conf.profId) || UNDEFINED;
    payload.ext.wrapper.version = parseInt(conf.verId) || UNDEFINED;
    payload.ext.wrapper.wiid = conf.wiid || UNDEFINED;
    payload.ext.wrapper.wv = "prebid_prebid_1.39.0";
    payload.ext.wrapper.transactionId = conf.transactionId;
    payload.ext.wrapper.wp = 'pbjs';
    payload.user.gender = conf.gender ? conf.gender.trim() : UNDEFINED;
    payload.user.geo = {}; // Attaching GDPR Consent Params

    if (bidderRequest && bidderRequest.gdprConsent) {
      payload.user.ext = {
        consent: bidderRequest.gdprConsent.consentString
      };
      payload.regs = {
        ext: {
          gdpr: bidderRequest.gdprConsent.gdprApplies ? 1 : 0
        }
      };
    }

    payload.user.geo.lat = _parseSlotParam('lat', conf.lat);
    payload.user.geo.lon = _parseSlotParam('lon', conf.lon);
    payload.user.yob = _parseSlotParam('yob', conf.yob);
    payload.device.geo = {};
    payload.device.geo.lat = _parseSlotParam('lat', conf.lat);
    payload.device.geo.lon = _parseSlotParam('lon', conf.lon);
    payload.site.page = conf.kadpageurl.trim() || payload.site.page.trim();
    payload.site.domain = _getDomainFromURL(payload.site.page); // set dctr value in site.ext, if present in validBidRequests[0], else ignore

    if (dctrArr.length > 0) {
      if (validBidRequests[0].params.hasOwnProperty('dctr')) {
        dctr = validBidRequests[0].params.dctr;

        if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](dctr) && dctr.length > 0) {
          var arr = dctr.split('|');
          dctr = '';
          arr.forEach((function (val) {
            dctr += val.length > 0 ? val.trim() + '|' : '';
          }));
          dctrLen = dctr.length;

          if (dctr.substring(dctrLen, dctrLen - 1) === '|') {
            dctr = dctr.substring(0, dctrLen - 1);
          }

          payload.site.ext = {
            key_val: dctr.trim()
          };
        } else {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': Ignoring param : dctr with value : ' + dctr + ', expects string-value, found empty or non-string value');
        }

        if (dctrArr.length > 1) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits');
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': dctr value not found in 1st adunit, ignoring values from subsequent adunits');
      }
    }

    _handleEids(payload);

    return {
      method: 'POST',
      url: ENDPOINT,
      data: JSON.stringify(payload)
    };
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {*} response A successful response from the server.
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(response, request) {
    var bidResponses = [];
    var respCur = DEFAULT_CURRENCY;

    try {
      if (response.body && response.body.seatbid && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](response.body.seatbid)) {
        // Supporting multiple bid responses for same adSize
        respCur = response.body.cur || respCur;
        response.body.seatbid.forEach((function (seatbidder) {
          seatbidder.bid && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](seatbidder.bid) && seatbidder.bid.forEach((function (bid) {
            var parsedRequest = JSON.parse(request.data);
            var newBid = {
              requestId: bid.impid,
              cpm: (parseFloat(bid.price) || 0).toFixed(2),
              width: bid.w,
              height: bid.h,
              creativeId: bid.crid || bid.id,
              dealId: bid.dealid,
              currency: respCur,
              netRevenue: NET_REVENUE,
              ttl: 300,
              referrer: parsedRequest.site && parsedRequest.site.ref ? parsedRequest.site.ref : '',
              ad: bid.adm
            };

            if (parsedRequest.imp && parsedRequest.imp.length > 0) {
              parsedRequest.imp.forEach((function (req) {
                if (bid.impid === req.id && req.hasOwnProperty('video')) {
                  newBid.mediaType = 'video';
                  newBid.width = bid.hasOwnProperty('w') ? bid.w : req.video.w;
                  newBid.height = bid.hasOwnProperty('h') ? bid.h : req.video.h;
                  newBid.vastXml = bid.adm;
                }

                if (bid.impid === req.id && req.hasOwnProperty('native')) {
                  _parseNativeResponse(bid, newBid);
                }
              }));
            }

            if (bid.ext && bid.ext.deal_channel) {
              newBid['dealChannel'] = dealChannelValues[bid.ext.deal_channel] || null;
            }

            bidResponses.push(newBid);
          }));
        }));
      }
    } catch (error) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"](error);
    }

    return bidResponses;
  },

  /**
   * Register User Sync.
   */
  getUserSyncs: function getUserSyncs(syncOptions, responses, gdprConsent) {
    var syncurl = USYNCURL + publisherId; // Attaching GDPR Consent Params in UserSync url

    if (gdprConsent) {
      syncurl += '&gdpr=' + (gdprConsent.gdprApplies ? 1 : 0);
      syncurl += '&gdpr_consent=' + encodeURIComponent(gdprConsent.consentString || '');
    }

    if (syncOptions.iframeEnabled) {
      return [{
        type: 'iframe',
        url: syncurl
      }];
    } else {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('PubMatic: Please enable iframe based user sync.');
    }
  },

  /**
   * Covert bid param types for S2S
   * @param {Object} params bid params
   * @param {Boolean} isOpenRtb boolean to check openrtb2 protocol
   * @return {Object} params bid params
   */
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    return __WEBPACK_IMPORTED_MODULE_0__src_utils__["convertTypes"]({
      'publisherId': 'string',
      'adSlot': 'string'
    }, params);
  }
};
Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__["registerBidder"])(spec);

/***/ })

},[346]);
pbjsChunk([68],{

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(385);


/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FASTLANE_ENDPOINT", (function() { return FASTLANE_ENDPOINT; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIDEO_ENDPOINT", (function() { return VIDEO_ENDPOINT; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_ENDPOINT", (function() { return SYNC_ENDPOINT; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", (function() { return spec; }));
/* harmony export (immutable) */ __webpack_exports__["hasVideoMediaType"] = hasVideoMediaType;
/* harmony export (immutable) */ __webpack_exports__["masSizeOrdering"] = masSizeOrdering;
/* harmony export (immutable) */ __webpack_exports__["determineRubiconVideoSizeId"] = determineRubiconVideoSizeId;
/* harmony export (immutable) */ __webpack_exports__["resetUserSync"] = resetUserSync;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__ = __webpack_require__(2);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var INTEGRATION = "pbjs_lite_v1.39.0";

function isSecure() {
  return location.protocol === 'https:';
} // use protocol relative urls for http or https


var FASTLANE_ENDPOINT = '//fastlane.rubiconproject.com/a/api/fastlane.json';
var VIDEO_ENDPOINT = '//fastlane-adv.rubiconproject.com/v1/auction/video';
var SYNC_ENDPOINT = 'https://eus.rubiconproject.com/usync.html';
var TIMEOUT_BUFFER = 500;
var sizeMap = {
  1: '468x60',
  2: '728x90',
  5: '120x90',
  8: '120x600',
  9: '160x600',
  10: '300x600',
  13: '200x200',
  14: '250x250',
  15: '300x250',
  16: '336x280',
  19: '300x100',
  31: '980x120',
  32: '250x360',
  33: '180x500',
  35: '980x150',
  37: '468x400',
  38: '930x180',
  39: '750x100',
  40: '750x200',
  41: '750x300',
  43: '320x50',
  44: '300x50',
  48: '300x300',
  53: '1024x768',
  54: '300x1050',
  55: '970x90',
  57: '970x250',
  58: '1000x90',
  59: '320x80',
  60: '320x150',
  61: '1000x1000',
  64: '580x500',
  65: '640x480',
  66: '930x600',
  67: '320x480',
  68: '1800x1000',
  72: '320x320',
  73: '320x160',
  78: '980x240',
  79: '980x300',
  80: '980x400',
  83: '480x300',
  94: '970x310',
  96: '970x210',
  101: '480x320',
  102: '768x1024',
  103: '480x280',
  105: '250x800',
  108: '320x240',
  113: '1000x300',
  117: '320x100',
  125: '800x250',
  126: '200x600',
  144: '980x600',
  145: '980x150',
  159: '320x250',
  195: '600x300',
  198: '640x360',
  199: '640x200',
  213: '1030x590',
  214: '980x360',
  229: '320x180',
  232: '580x400',
  257: '400x600'
};

__WEBPACK_IMPORTED_MODULE_0__src_utils__["_each"](sizeMap, (function (item, key) {
  return sizeMap[item] = key;
}));

var spec = {
  code: 'rubicon',
  aliases: ['rubiconLite'],
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["a" /* BANNER */], __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["c" /* VIDEO */]],

  /**
   * @param {object} bid
   * @return boolean
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    if (_typeof(bid.params) !== 'object') {
      return false;
    }

    if (!/^\d+$/.test(bid.params.accountId)) {
      return false;
    }

    return !!bidType(bid, true);
  },

  /**
   * @param {BidRequest[]} bidRequests
   * @param bidderRequest
   * @return ServerRequest[]
   */
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    // separate video bids because the requests are structured differently
    var requests = [];
    var videoRequests = bidRequests.filter((function (bidRequest) {
      return bidType(bidRequest) === 'video';
    })).map((function (bidRequest) {
      bidRequest.startTime = new Date().getTime();
      var params = bidRequest.params;
      var size = parseSizes(bidRequest, 'video');
      var data = {
        page_url: _getPageUrl(bidRequest, bidderRequest),
        resolution: _getScreenResolution(),
        account_id: params.accountId,
        integration: INTEGRATION,
        'x_source.tid': bidRequest.transactionId,
        timeout: bidderRequest.timeout - (Date.now() - bidderRequest.auctionStart + TIMEOUT_BUFFER),
        stash_creatives: true,
        slots: []
      }; // Define the slot object

      var slotData = {
        site_id: params.siteId,
        zone_id: params.zoneId,
        position: params.position === 'atf' || params.position === 'btf' ? params.position : 'unknown',
        floor: parseFloat(params.floor) > 0.01 ? params.floor : 0.01,
        element_id: bidRequest.adUnitCode,
        name: bidRequest.adUnitCode,
        width: size[0],
        height: size[1],
        size_id: determineRubiconVideoSizeId(bidRequest)
      };

      if (params.video) {
        data.ae_pass_through_parameters = params.video.aeParams;
        slotData.language = params.video.language;
      }

      if (params.inventory && _typeof(params.inventory) === 'object') {
        slotData.inventory = params.inventory;
      }

      if (params.keywords && Array.isArray(params.keywords)) {
        slotData.keywords = params.keywords;
      }

      if (params.visitor && _typeof(params.visitor) === 'object') {
        slotData.visitor = params.visitor;
      }

      data.slots.push(slotData);

      if (bidderRequest.gdprConsent) {
        // add 'gdpr' only if 'gdprApplies' is defined
        if (typeof bidderRequest.gdprConsent.gdprApplies === 'boolean') {
          data.gdpr = Number(bidderRequest.gdprConsent.gdprApplies);
        }

        data.gdpr_consent = bidderRequest.gdprConsent.consentString;
      }

      return {
        method: 'POST',
        url: VIDEO_ENDPOINT,
        data: data,
        bidRequest: bidRequest
      };
    }));

    if (__WEBPACK_IMPORTED_MODULE_2__src_config__["config"].getConfig('rubicon.singleRequest') !== true) {
      // bids are not grouped if single request mode is not enabled
      requests = videoRequests.concat(bidRequests.filter((function (bidRequest) {
        return bidType(bidRequest) === 'banner';
      })).map((function (bidRequest) {
        var bidParams = spec.createSlotParams(bidRequest, bidderRequest);
        return {
          method: 'GET',
          url: FASTLANE_ENDPOINT,
          data: spec.getOrderedParams(bidParams).reduce((function (paramString, key) {
            var propValue = bidParams[key];
            return __WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](propValue) && propValue !== '' || __WEBPACK_IMPORTED_MODULE_0__src_utils__["isNumber"](propValue) ? "".concat(paramString).concat(key, "=").concat(encodeURIComponent(propValue), "&") : paramString;
          }), '') + "slots=1&rand=".concat(Math.random()),
          bidRequest: bidRequest
        };
      })));
    } else {
      // single request requires bids to be grouped by site id into a single request
      // note: utils.groupBy wasn't used because deep property access was needed
      var nonVideoRequests = bidRequests.filter((function (bidRequest) {
        return bidType(bidRequest) === 'banner';
      }));
      var groupedBidRequests = nonVideoRequests.reduce((function (groupedBids, bid) {
        (groupedBids[bid.params['siteId']] = groupedBids[bid.params['siteId']] || []).push(bid);
        return groupedBids;
      }), {});
      requests = videoRequests.concat(Object.keys(groupedBidRequests).map((function (bidGroupKey) {
        var bidsInGroup = groupedBidRequests[bidGroupKey]; // fastlane SRA has a limit of 10 slots

        if (bidsInGroup.length > 10) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]("Rubicon bid adapter Warning: single request mode has a limit of 10 bids: ".concat(bidsInGroup.length - 10, " bids were not sent"));
          bidsInGroup = bidsInGroup.slice(0, 10);
        }

        var combinedSlotParams = spec.combineSlotUrlParams(bidsInGroup.map((function (bidRequest) {
          return spec.createSlotParams(bidRequest, bidderRequest);
        }))); // SRA request returns grouped bidRequest arrays not a plain bidRequest

        return {
          method: 'GET',
          url: FASTLANE_ENDPOINT,
          data: spec.getOrderedParams(combinedSlotParams).reduce((function (paramString, key) {
            var propValue = combinedSlotParams[key];
            return __WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](propValue) && propValue !== '' || __WEBPACK_IMPORTED_MODULE_0__src_utils__["isNumber"](propValue) ? "".concat(paramString).concat(key, "=").concat(encodeURIComponent(propValue), "&") : paramString;
          }), '') + "slots=".concat(bidsInGroup.length, "&rand=").concat(Math.random()),
          bidRequest: bidsInGroup
        };
      })));
    }

    return requests;
  },
  getOrderedParams: function getOrderedParams(params) {
    var containsTgV = /^tg_v/;
    var containsTgI = /^tg_i/;
    var orderedParams = ['account_id', 'site_id', 'zone_id', 'size_id', 'alt_size_ids', 'p_pos', 'gdpr', 'gdpr_consent', 'rf', 'dt.id', 'dt.keyv', 'dt.pref', 'p_geo.latitude', 'p_geo.longitude', 'kw'].concat(Object.keys(params).filter((function (item) {
      return containsTgV.test(item);
    }))).concat(Object.keys(params).filter((function (item) {
      return containsTgI.test(item);
    }))).concat(['tk_flint', 'x_source.tid', 'p_screen_res', 'rp_floor', 'rp_secure', 'tk_user_key']);
    return orderedParams.concat(Object.keys(params).filter((function (item) {
      return orderedParams.indexOf(item) === -1;
    })));
  },

  /**
   * @summary combines param values from an array of slots into a single semicolon delineated value
   * or just one value if they are all the same.
   * @param {Object[]} aSlotUrlParams - example [{p1: 'foo', p2: 'test'}, {p2: 'test'}, {p1: 'bar', p2: 'test'}]
   * @return {Object} - example {p1: 'foo;;bar', p2: 'test'}
   */
  combineSlotUrlParams: function combineSlotUrlParams(aSlotUrlParams) {
    // if only have params for one slot, return those params
    if (aSlotUrlParams.length === 1) {
      return aSlotUrlParams[0];
    } // reduce param values from all slot objects into an array of values in a single object


    var oCombinedSlotUrlParams = aSlotUrlParams.reduce((function (oCombinedParams, oSlotUrlParams, iIndex) {
      Object.keys(oSlotUrlParams).forEach((function (param) {
        if (!oCombinedParams.hasOwnProperty(param)) {
          oCombinedParams[param] = new Array(aSlotUrlParams.length); // initialize array;
        } // insert into the proper element of the array


        oCombinedParams[param].splice(iIndex, 1, oSlotUrlParams[param]);
      }));
      return oCombinedParams;
    }), {}); // convert arrays into semicolon delimited strings

    var re = new RegExp('^([^;]*)(;\\1)+$'); // regex to test for duplication

    Object.keys(oCombinedSlotUrlParams).forEach((function (param) {
      var sValues = oCombinedSlotUrlParams[param].join(';'); // consolidate param values into one value if they are all the same

      var match = sValues.match(re);
      oCombinedSlotUrlParams[param] = match ? match[1] : sValues;
    }));
    return oCombinedSlotUrlParams;
  },

  /**
   * @param {BidRequest} bidRequest
   * @param {Object} bidderRequest
   * @returns {Object} - object key values named and formatted as slot params
   */
  createSlotParams: function createSlotParams(bidRequest, bidderRequest) {
    bidRequest.startTime = new Date().getTime();
    var params = bidRequest.params; // use rubicon sizes if provided, otherwise adUnit.sizes

    var parsedSizes = parseSizes(bidRequest, 'banner');

    var _ref = params.latLong || [],
        _ref2 = _slicedToArray(_ref, 2),
        latitude = _ref2[0],
        longitude = _ref2[1];

    var data = {
      'account_id': params.accountId,
      'site_id': params.siteId,
      'zone_id': params.zoneId,
      'size_id': parsedSizes[0],
      'alt_size_ids': parsedSizes.slice(1).join(',') || undefined,
      'p_pos': params.position === 'atf' || params.position === 'btf' ? params.position : 'unknown',
      'rp_floor': (params.floor = parseFloat(params.floor)) > 0.01 ? params.floor : 0.01,
      'rp_secure': isSecure() ? '1' : '0',
      'tk_flint': INTEGRATION,
      'x_source.tid': bidRequest.transactionId,
      'p_screen_res': _getScreenResolution(),
      'kw': Array.isArray(params.keywords) ? params.keywords.join(',') : '',
      'tk_user_key': params.userId,
      'p_geo.latitude': isNaN(parseFloat(latitude)) ? undefined : parseFloat(latitude).toFixed(4),
      'p_geo.longitude': isNaN(parseFloat(longitude)) ? undefined : parseFloat(longitude).toFixed(4),
      'tg_fl.eid': bidRequest.code,
      'rf': _getPageUrl(bidRequest, bidderRequest)
    };

    if (bidderRequest.gdprConsent) {
      // add 'gdpr' only if 'gdprApplies' is defined
      if (typeof bidderRequest.gdprConsent.gdprApplies === 'boolean') {
        data['gdpr'] = Number(bidderRequest.gdprConsent.gdprApplies);
      }

      data['gdpr_consent'] = bidderRequest.gdprConsent.consentString;
    } // visitor properties


    if (params.visitor !== null && _typeof(params.visitor) === 'object') {
      Object.keys(params.visitor).forEach((function (key) {
        if (params.visitor[key] != null) {
          data["tg_v.".concat(key)] = params.visitor[key].toString(); // initialize array;
        }
      }));
    } // inventory properties


    if (params.inventory !== null && _typeof(params.inventory) === 'object') {
      Object.keys(params.inventory).forEach((function (key) {
        if (params.inventory[key] != null) {
          data["tg_i.".concat(key)] = params.inventory[key].toString();
        }
      }));
    } // digitrust properties


    var digitrustParams = _getDigiTrustQueryParams();

    Object.keys(digitrustParams).forEach((function (paramKey) {
      data[paramKey] = digitrustParams[paramKey];
    }));
    return data;
  },

  /**
   * @param {*} responseObj
   * @param {BidRequest|Object.<string, BidRequest[]>} bidRequest - if request was SRA the bidRequest argument will be a keyed BidRequest array object,
   * non-SRA responses return a plain BidRequest object
   * @return {Bid[]} An array of bids which
   */
  interpretResponse: function interpretResponse(responseObj, _ref3) {
    var bidRequest = _ref3.bidRequest;
    responseObj = responseObj.body; // check overall response

    if (!responseObj || _typeof(responseObj) !== 'object') {
      return [];
    }

    var ads = responseObj.ads; // video ads array is wrapped in an object

    if (_typeof(bidRequest) === 'object' && !Array.isArray(bidRequest) && bidType(bidRequest) === 'video' && _typeof(ads) === 'object') {
      ads = ads[bidRequest.adUnitCode];
    } // check the ad response


    if (!Array.isArray(ads) || ads.length < 1) {
      return [];
    }

    return ads.reduce((function (bids, ad, i) {
      if (ad.status !== 'ok') {
        return bids;
      } // associate bidRequests; assuming ads matches bidRequest


      var associatedBidRequest = Array.isArray(bidRequest) ? bidRequest[i] : bidRequest;

      if (associatedBidRequest && _typeof(associatedBidRequest) === 'object') {
        var bid = {
          requestId: associatedBidRequest.bidId,
          currency: 'USD',
          creativeId: ad.creative_id || "".concat(ad.network || '', "-").concat(ad.advertiser || ''),
          cpm: ad.cpm || 0,
          dealId: ad.deal,
          ttl: 300,
          // 5 minutes
          netRevenue: __WEBPACK_IMPORTED_MODULE_2__src_config__["config"].getConfig('rubicon.netRevenue') || false,
          rubicon: {
            advertiserId: ad.advertiser,
            networkId: ad.network
          }
        };

        if (ad.creative_type) {
          bid.mediaType = ad.creative_type;
        }

        if (ad.creative_type === __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["c" /* VIDEO */]) {
          bid.width = associatedBidRequest.params.video.playerWidth;
          bid.height = associatedBidRequest.params.video.playerHeight;
          bid.vastUrl = ad.creative_depot_url;
          bid.impression_id = ad.impression_id;
          bid.videoCacheKey = ad.impression_id;
        } else {
          bid.ad = _renderCreative(ad.script, ad.impression_id);

          var _sizeMap$ad$size_id$s = sizeMap[ad.size_id].split('x').map((function (num) {
            return Number(num);
          }));

          var _sizeMap$ad$size_id$s2 = _slicedToArray(_sizeMap$ad$size_id$s, 2);

          bid.width = _sizeMap$ad$size_id$s2[0];
          bid.height = _sizeMap$ad$size_id$s2[1];
        } // add server-side targeting


        bid.rubiconTargeting = (Array.isArray(ad.targeting) ? ad.targeting : []).reduce((function (memo, item) {
          memo[item.key] = item.values[0];
          return memo;
        }), {
          'rpfl_elemid': associatedBidRequest.adUnitCode
        });
        bids.push(bid);
      } else {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"]("Rubicon bid adapter Error: bidRequest undefined at index position:".concat(i), bidRequest, responseObj);
      }

      return bids;
    }), []).sort((function (adA, adB) {
      return (adB.cpm || 0.0) - (adA.cpm || 0.0);
    }));
  },
  getUserSyncs: function getUserSyncs(syncOptions, responses, gdprConsent) {
    if (!hasSynced && syncOptions.iframeEnabled) {
      // data is only assigned if params are available to pass to SYNC_ENDPOINT
      var params = '';

      if (gdprConsent && typeof gdprConsent.consentString === 'string') {
        // add 'gdpr' only if 'gdprApplies' is defined
        if (typeof gdprConsent.gdprApplies === 'boolean') {
          params += "?gdpr=".concat(Number(gdprConsent.gdprApplies), "&gdpr_consent=").concat(gdprConsent.consentString);
        } else {
          params += "?gdpr_consent=".concat(gdprConsent.consentString);
        }
      }

      hasSynced = true;
      return {
        type: 'iframe',
        url: SYNC_ENDPOINT + params
      };
    }
  },

  /**
   * Covert bid param types for S2S
   * @param {Object} params bid params
   * @param {Boolean} isOpenRtb boolean to check openrtb2 protocol
   * @return {Object} params bid params
   */
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    return __WEBPACK_IMPORTED_MODULE_0__src_utils__["convertTypes"]({
      'accountId': 'number',
      'siteId': 'number',
      'zoneId': 'number'
    }, params);
  }
};

function _getScreenResolution() {
  return [window.screen.width, window.screen.height].join('x');
}

function _getDigiTrustQueryParams() {
  function getDigiTrustId() {
    var digiTrustUser = window.DigiTrust && (__WEBPACK_IMPORTED_MODULE_2__src_config__["config"].getConfig('digiTrustId') || window.DigiTrust.getUser({
      member: 'T9QSFKPDN9'
    }));
    return digiTrustUser && digiTrustUser.success && digiTrustUser.identity || null;
  }

  var digiTrustId = getDigiTrustId(); // Verify there is an ID and this user has not opted out

  if (!digiTrustId || digiTrustId.privacy && digiTrustId.privacy.optout) {
    return [];
  }

  return {
    'dt.id': digiTrustId.id,
    'dt.keyv': digiTrustId.keyv,
    'dt.pref': 0
  };
}
/**
 * @param {BidRequest} bidRequest
 * @returns {string}
 */


function _getPageUrl(bidRequest, bidderRequest) {
  var pageUrl = __WEBPACK_IMPORTED_MODULE_2__src_config__["config"].getConfig('pageUrl');

  if (bidRequest.params.referrer) {
    pageUrl = bidRequest.params.referrer;
  } else if (!pageUrl) {
    pageUrl = bidderRequest.refererInfo.referer;
  }

  return bidRequest.params.secure ? pageUrl.replace(/^http:/i, 'https:') : pageUrl;
}

function _renderCreative(script, impId) {
  return "<html>\n<head><script type='text/javascript'>inDapIF=true;</script></head>\n<body style='margin : 0; padding: 0;'>\n<!-- Rubicon Project Ad Tag -->\n<div data-rp-impression-id='".concat(impId, "'>\n<script type='text/javascript'>").concat(script, "</script>\n</div>\n</body>\n</html>");
}

function parseSizes(bid, mediaType) {
  var params = bid.params;

  if (mediaType === 'video') {
    var size = [];

    if (params.video && params.video.playerWidth && params.video.playerHeight) {
      size = [params.video.playerWidth, params.video.playerHeight];
    } else if (Array.isArray(__WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bid, 'mediaTypes.video.playerSize')) && bid.mediaTypes.video.playerSize.length === 1) {
      size = bid.mediaTypes.video.playerSize[0];
    } else if (Array.isArray(bid.sizes) && bid.sizes.length > 0 && Array.isArray(bid.sizes[0]) && bid.sizes[0].length > 1) {
      size = bid.sizes[0];
    }

    return size;
  } // deprecated: temp legacy support


  var sizes = [];

  if (Array.isArray(params.sizes)) {
    sizes = params.sizes;
  } else if (typeof __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bid, 'mediaTypes.banner.sizes') !== 'undefined') {
    sizes = mapSizes(bid.mediaTypes.banner.sizes);
  } else if (Array.isArray(bid.sizes) && bid.sizes.length > 0) {
    sizes = mapSizes(bid.sizes);
  } else {
    __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('Warning: no sizes are setup or found');
  }

  return masSizeOrdering(sizes);
}

function mapSizes(sizes) {
  return __WEBPACK_IMPORTED_MODULE_0__src_utils__["parseSizesInput"](sizes) // map sizes while excluding non-matches
  .reduce((function (result, size) {
    var mappedSize = parseInt(sizeMap[size], 10);

    if (mappedSize) {
      result.push(mappedSize);
    }

    return result;
  }), []);
}
/**
 * Test if bid has mediaType or mediaTypes set for video.
 * Also makes sure the video object is present in the rubicon bidder params
 * @param {BidRequest} bidRequest
 * @returns {boolean}
 */


function hasVideoMediaType(bidRequest) {
  if (_typeof(__WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bidRequest, 'params.video')) !== 'object') {
    return false;
  }

  return bidRequest.mediaType === __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["c" /* VIDEO */] || typeof __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bidRequest, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["c" /* VIDEO */])) !== 'undefined';
}
/**
 * Determine bidRequest mediaType
 * @param bid the bid to test
 * @param log whether we should log errors/warnings for invalid bids
 * @returns {string|undefined} Returns 'video' or 'banner' if resolves to a type, or undefined otherwise (invalid).
 */

function bidType(bid) {
  var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // Is it considered video ad unit by rubicon
  if (hasVideoMediaType(bid)) {
    // legacy mediaType or the new mediaTypes
    // this is the preffered "new" way to define mediaTypes
    if (typeof __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["c" /* VIDEO */])) !== 'undefined') {
      // We require either context as instream or outstream
      if (['outstream', 'instream'].indexOf(__WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["c" /* VIDEO */], ".context"))) === -1) {
        if (log) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"]('Rubicon bid adapter requires mediaTypes.video.context to be one of outstream or instream');
        }

        return;
      }
    } else {
      // Otherwise its the legacy way where mediaType == 'video'
      if (log) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('Rubicon video bid requested using legacy `adUnit.mediaType = `video``\nThis is deprecated\nPlease move towards the PBJS standard using mediaTypes object!');
      }

      if (isNaN(parseInt(__WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bid, 'params.video.size_id')))) {
        if (log) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"]('Rubicon bid adapter needs params.video.size_id to be declared and an integer in order to process a legacy video request using mediaType == video');
        }

        return;
      }
    } // we require playerWidth and playerHeight to come from one of params.playerWidth/playerHeight or mediaTypes.video.playerSize or adUnit.sizes


    if (parseSizes(bid, 'video').length < 2) {
      if (log) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"]('Rubicon bid adapter could not determine the playerSize of the video\nplayerWidth and playerHeight are inferred from one of params.playerWidth/playerHeight or mediaTypes.video.playerSize or adUnit.sizes, in that order');
      }

      return;
    }

    if (log) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logMessage"]('Rubicon bid adapter making video request for adUnit', bid.adUnitCode);
    }

    return 'video';
  } else {
    // we require banner sizes to come from one of params.sizes or mediaTypes.banner.sizes or adUnit.sizes, in that order
    // if we cannot determine them, we reject it!
    if (parseSizes(bid, 'banner').length === 0) {
      if (log) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"]('Rubicon bid adapter could not determine the sizes for a banner request\nThey are inferred from one of params.sizes or mediaTypes.banner.sizes or adUnit.sizes, in that order');
      }

      return;
    } // everything looks good for banner so lets do it


    if (log) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logMessage"]('Rubicon bid adapter making banner request for adUnit', bid.adUnitCode);
    }

    return 'banner';
  }
}

function masSizeOrdering(sizes) {
  var MAS_SIZE_PRIORITY = [15, 2, 9];
  return sizes.sort((function (first, second) {
    // sort by MAS_SIZE_PRIORITY priority order
    var firstPriority = MAS_SIZE_PRIORITY.indexOf(first);
    var secondPriority = MAS_SIZE_PRIORITY.indexOf(second);

    if (firstPriority > -1 || secondPriority > -1) {
      if (firstPriority === -1) {
        return 1;
      }

      if (secondPriority === -1) {
        return -1;
      }

      return firstPriority - secondPriority;
    } // and finally ascending order


    return first - second;
  }));
}
function determineRubiconVideoSizeId(bid) {
  // If we have size_id in the bid then use it
  var rubiconSizeId = parseInt(__WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bid, 'params.video.size_id'));

  if (!isNaN(rubiconSizeId)) {
    return rubiconSizeId;
  } // otherwise 203 for outstream and 201 for instream
  // When this function is used we know it has to be one of outstream or instream


  return __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["c" /* VIDEO */], ".context")) === 'outstream' ? 203 : 201;
}
var hasSynced = false;
function resetUserSync() {
  hasSynced = false;
}
Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__["registerBidder"])(spec);

/***/ })

},[384]);
pbjsChunk([62],{

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(399);


/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharethroughAdapterSpec", (function() { return sharethroughAdapterSpec; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_adapters_bidderFactory__ = __webpack_require__(1);

var VERSION = '3.0.1';
var BIDDER_CODE = 'sharethrough';
var STR_ENDPOINT = document.location.protocol + '//btlr.sharethrough.com/header-bid/v1';
var sharethroughAdapterSpec = {
  code: BIDDER_CODE,
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!bid.params.pkey && bid.bidder === BIDDER_CODE;
  },
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    return bidRequests.map((function (bid) {
      var query = {
        bidId: bid.bidId,
        placement_key: bid.params.pkey,
        hbVersion: "1.39.0",
        strVersion: VERSION,
        hbSource: 'prebid',
        consent_required: false
      };

      if (bidderRequest && bidderRequest.gdprConsent && bidderRequest.gdprConsent.consentString) {
        query.consent_string = bidderRequest.gdprConsent.consentString;
      }

      if (bidderRequest && bidderRequest.gdprConsent) {
        query.consent_required = !!bidderRequest.gdprConsent.gdprApplies;
      } // Data that does not need to go to the server,
      // but we need as part of interpretResponse()


      var strData = {
        stayInIframe: bid.params.iframe,
        iframeSize: bid.params.iframeSize,
        sizes: bid.sizes
      };
      return {
        method: 'GET',
        url: STR_ENDPOINT,
        data: query,
        strData: strData
      };
    }));
  },
  interpretResponse: function interpretResponse(_ref, req) {
    var body = _ref.body;

    if (!body || !body.creatives || !body.creatives.length) {
      return [];
    }

    var creative = body.creatives[0];
    var size = [0, 0];

    if (req.strData.stayInIframe) {
      size = req.strData.iframeSize != undefined ? req.strData.iframeSize : getLargestSize(req.strData.sizes);
    }

    return [{
      requestId: req.data.bidId,
      width: size[0],
      height: size[1],
      cpm: creative.cpm,
      creativeId: creative.creative.creative_key,
      dealId: creative.creative.deal_id,
      currency: 'USD',
      netRevenue: true,
      ttl: 360,
      ad: generateAd(body, req)
    }];
  },
  getUserSyncs: function getUserSyncs(syncOptions, serverResponses) {
    var syncs = [];
    var shouldCookieSync = syncOptions.pixelEnabled && serverResponses.length > 0 && serverResponses[0].body && serverResponses[0].body.cookieSyncUrls;

    if (shouldCookieSync) {
      serverResponses[0].body.cookieSyncUrls.forEach((function (url) {
        syncs.push({
          type: 'image',
          url: url
        });
      }));
    }

    return syncs;
  }
};

function getLargestSize(sizes) {
  function area(size) {
    return size[0] * size[1];
  }

  return sizes.reduce((function (prev, current) {
    if (area(current) > area(prev)) {
      return current;
    } else {
      return prev;
    }
  }), [0, 0]);
}

function generateAd(body, req) {
  var strRespId = "str_response_".concat(req.data.bidId);
  var adMarkup = "\n    <div data-str-native-key=\"".concat(req.data.placement_key, "\" data-stx-response-name=\"").concat(strRespId, "\">\n    </div>\n    <script>var ").concat(strRespId, " = \"").concat(b64EncodeUnicode(JSON.stringify(body)), "\"</script>\n  ");

  if (req.strData.stayInIframe) {
    // Don't break out of iframe
    adMarkup = adMarkup + "<script src=\"//native.sharethrough.com/assets/sfp.js\"></script>";
  } else {
    // Break out of iframe
    adMarkup = adMarkup + "\n      <script src=\"//native.sharethrough.com/assets/sfp-set-targeting.js\"></script>\n      <script>\n        (function() {\n          if (!(window.STR && window.STR.Tag) && !(window.top.STR && window.top.STR.Tag)) {\n            var sfp_js = document.createElement('script');\n            sfp_js.src = \"//native.sharethrough.com/assets/sfp.js\";\n            sfp_js.type = 'text/javascript';\n            sfp_js.charset = 'utf-8';\n            try {\n                window.top.document.getElementsByTagName('body')[0].appendChild(sfp_js);\n            } catch (e) {\n              console.log(e);\n            }\n          }\n        })()\n    </script>";
  }

  return adMarkup;
} // See https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem


function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (function toSolidBytes(match, p1) {
    return String.fromCharCode('0x' + p1);
  })));
}

Object(__WEBPACK_IMPORTED_MODULE_0__src_adapters_bidderFactory__["registerBidder"])(sharethroughAdapterSpec);

/***/ })

},[398]);
pbjs.processQueue();