"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    const currentUser = request.cookies.get(\"currentUser\")?.value;\n    if (!currentUser) {\n        // Redirigir a la página de inicio de sesión si el usuario no está autenticado\n        const response = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", request.url));\n        response.cookies.delete(\"currentUser\");\n        return response;\n    }\n    // Permitir que la solicitud continúe si el usuario está autenticado\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\nconst config = {\n    matcher: [\n        \"/faq\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBRWpELFNBQVNDLFdBQVdDLE9BQW9CO0lBQzdDLE1BQU1DLGNBQWNELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQkM7SUFFeEQsSUFBSSxDQUFDSCxhQUFhO1FBQ2hCLDhFQUE4RTtRQUM5RSxNQUFNSSxXQUFXUCxrRkFBWUEsQ0FBQ1EsUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVVAsUUFBUVEsR0FBRztRQUNwRUgsU0FBU0gsT0FBTyxDQUFDTyxNQUFNLENBQUM7UUFDeEIsT0FBT0o7SUFDVDtJQUVBLG9FQUFvRTtJQUNwRSxPQUFPUCxrRkFBWUEsQ0FBQ1ksSUFBSTtBQUMxQjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztLQUFTO0FBQ3JCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuICBjb25zdCBjdXJyZW50VXNlciA9IHJlcXVlc3QuY29va2llcy5nZXQoJ2N1cnJlbnRVc2VyJyk/LnZhbHVlO1xyXG5cclxuICBpZiAoIWN1cnJlbnRVc2VyKSB7XHJcbiAgICAvLyBSZWRpcmlnaXIgYSBsYSBww6FnaW5hIGRlIGluaWNpbyBkZSBzZXNpw7NuIHNpIGVsIHVzdWFyaW8gbm8gZXN0w6EgYXV0ZW50aWNhZG9cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9sb2dpbicsIHJlcXVlc3QudXJsKSk7XHJcbiAgICByZXNwb25zZS5jb29raWVzLmRlbGV0ZSgnY3VycmVudFVzZXInKTtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIC8vIFBlcm1pdGlyIHF1ZSBsYSBzb2xpY2l0dWQgY29udGluw7plIHNpIGVsIHVzdWFyaW8gZXN0w6EgYXV0ZW50aWNhZG9cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBtYXRjaGVyOiBbJy9mYXEnLCBdLCAvL2FkZCBsaW5rIHByb3RlZFxyXG59OyJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsImN1cnJlbnRVc2VyIiwiY29va2llcyIsImdldCIsInZhbHVlIiwicmVzcG9uc2UiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsImRlbGV0ZSIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});