(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/perlin_noise.js":
/*!******************************!*\
  !*** ../pkg/perlin_noise.js ***!
  \******************************/
/*! exports provided: draw, __wbindgen_object_drop_ref, __wbg_putImageData_831fef14e9e2b07f, __wbg_newwithu8clampedarrayandsh_77815f5702eff971, __wbindgen_throw, __wbindgen_rethrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _perlin_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perlin_noise_bg.wasm */ \"../pkg/perlin_noise_bg.wasm\");\n/* harmony import */ var _perlin_noise_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perlin_noise_bg.js */ \"../pkg/perlin_noise_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return _perlin_noise_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"draw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _perlin_noise_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_putImageData_831fef14e9e2b07f\", function() { return _perlin_noise_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_putImageData_831fef14e9e2b07f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithu8clampedarrayandsh_77815f5702eff971\", function() { return _perlin_noise_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newwithu8clampedarrayandsh_77815f5702eff971\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _perlin_noise_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return _perlin_noise_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_rethrow\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/perlin_noise.js?");

/***/ }),

/***/ "../pkg/perlin_noise_bg.js":
/*!*********************************!*\
  !*** ../pkg/perlin_noise_bg.js ***!
  \*********************************/
/*! exports provided: draw, __wbindgen_object_drop_ref, __wbg_putImageData_831fef14e9e2b07f, __wbg_newwithu8clampedarrayandsh_77815f5702eff971, __wbindgen_throw, __wbindgen_rethrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_putImageData_831fef14e9e2b07f\", function() { return __wbg_putImageData_831fef14e9e2b07f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithu8clampedarrayandsh_77815f5702eff971\", function() { return __wbg_newwithu8clampedarrayandsh_77815f5702eff971; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony import */ var _perlin_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perlin_noise_bg.wasm */ \"../pkg/perlin_noise_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _perlin_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_perlin_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet stack_pointer = 32;\n\nfunction addBorrowedObject(obj) {\n    if (stack_pointer == 1) throw new Error('out of js stack');\n    heap[--stack_pointer] = obj;\n    return stack_pointer;\n}\n/**\n* @param {CanvasRenderingContext2D} ctx\n* @param {number} width\n* @param {number} height\n* @param {number} z\n*/\nfunction draw(ctx, width, height, z) {\n    try {\n        _perlin_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"draw\"](addBorrowedObject(ctx), width, height, z);\n    } finally {\n        heap[stack_pointer++] = undefined;\n    }\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _perlin_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\n\nlet cachegetUint8ClampedMemory0 = null;\nfunction getUint8ClampedMemory0() {\n    if (cachegetUint8ClampedMemory0 === null || cachegetUint8ClampedMemory0.buffer !== _perlin_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8ClampedMemory0 = new Uint8ClampedArray(_perlin_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8ClampedMemory0;\n}\n\nfunction getClampedArrayU8FromWasm0(ptr, len) {\n    return getUint8ClampedMemory0().subarray(ptr / 1, ptr / 1 + len);\n}\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_putImageData_831fef14e9e2b07f = handleError(function(arg0, arg1, arg2, arg3) {\n    getObject(arg0).putImageData(getObject(arg1), arg2, arg3);\n});\n\nconst __wbg_newwithu8clampedarrayandsh_77815f5702eff971 = handleError(function(arg0, arg1, arg2, arg3) {\n    var ret = new ImageData(getClampedArrayU8FromWasm0(arg0, arg1), arg2 >>> 0, arg3 >>> 0);\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_rethrow = function(arg0) {\n    throw takeObject(arg0);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/perlin_noise_bg.js?");

/***/ }),

/***/ "../pkg/perlin_noise_bg.wasm":
/*!***********************************!*\
  !*** ../pkg/perlin_noise_bg.wasm ***!
  \***********************************/
/*! exports provided: memory, draw, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./perlin_noise_bg.js */ \"../pkg/perlin_noise_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/perlin_noise_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_perlin_noise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-perlin-noise */ \"../pkg/perlin_noise.js\");\n\nconst drawCells = () => {\n  const WIDTH = window.innerWidth;\n  const HEIGHT = window.innerHeight;\n\n  let z = Math.floor(Math.random() * 256);\n  /** @type {HTMLCanvasElement} */\n  const canvas = document.getElementById(\"perlin-noise-canvas\");\n  canvas.width = WIDTH;\n  canvas.height = HEIGHT;\n  canvas.style.width = `${WIDTH}px`;\n  canvas.style.height = `${HEIGHT}px`;\n  const ctx = canvas.getContext('2d');\n  wasm_perlin_noise__WEBPACK_IMPORTED_MODULE_0__[\"draw\"](ctx, canvas.width, canvas.height, z);\n};\n\ndrawCells();\n\n\nwindow.onresize = drawCells;\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);