"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/search/route";
exports.ids = ["app/api/search/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=D%3A%5Ccodevault%5Cnox%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ccodevault%5Cnox&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=D%3A%5Ccodevault%5Cnox%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ccodevault%5Cnox&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_codevault_nox_src_app_api_search_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/search/route.ts */ \"(rsc)/./src/app/api/search/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/search/route\",\n        pathname: \"/api/search\",\n        filename: \"route\",\n        bundlePath: \"app/api/search/route\"\n    },\n    resolvedPagePath: \"D:\\\\codevault\\\\nox\\\\src\\\\app\\\\api\\\\search\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_codevault_nox_src_app_api_search_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/search/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZWFyY2glMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNlYXJjaCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNlYXJjaCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDY29kZXZhdWx0JTVDbm94JTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDY29kZXZhdWx0JTVDbm94JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNHO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVnYWwtc2VtYW50aWMtc2VhcmNoLz85YzU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXGNvZGV2YXVsdFxcXFxub3hcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcc2VhcmNoXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZWFyY2gvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zZWFyY2hcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NlYXJjaC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXGNvZGV2YXVsdFxcXFxub3hcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcc2VhcmNoXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zZWFyY2gvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=D%3A%5Ccodevault%5Cnox%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ccodevault%5Cnox&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/search/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/search/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"(rsc)/./node_modules/@pinecone-database/pinecone/dist/index.js\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _langchain_community_embeddings_voyage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @langchain/community/embeddings/voyage */ \"(rsc)/./node_modules/@langchain/community/embeddings/voyage.js\");\n/* harmony import */ var _langchain_pinecone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @langchain/pinecone */ \"(rsc)/./node_modules/@langchain/pinecone/index.js\");\n\n\n\n\nasync function POST(req) {\n    const { query } = await req.json();\n    if (!query) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Query is required\"\n        }, {\n            status: 400\n        });\n    }\n    try {\n        // Initialize Pinecone client\n        const pc = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__.Pinecone({\n            apiKey: process.env.PINECONE_API_KEY\n        });\n        // Initialize VoyageEmbeddings with correct inputType for queries\n        const voyageEmbeddings = new _langchain_community_embeddings_voyage__WEBPACK_IMPORTED_MODULE_2__.VoyageEmbeddings({\n            apiKey: process.env.VOYAGE_API_KEY,\n            inputType: \"query\",\n            modelName: \"voyage-law-2\"\n        });\n        // Initializing PineconeVectorStore\n        const vectorStore = new _langchain_pinecone__WEBPACK_IMPORTED_MODULE_3__.PineconeStore(voyageEmbeddings, {\n            pineconeIndex: pc.Index(process.env.PINECONE_INDEX)\n        });\n        console.log(`query is: ${query}`);\n        const retrieved = await vectorStore.maxMarginalRelevanceSearch(query, {\n            k: 20\n        });\n        const results = retrieved.filter((result, index)=>{\n            return index === retrieved.findIndex((otherResult)=>{\n                return result.metadata.id === otherResult.metadata.id;\n            });\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            results\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error performing similarity search:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to perform similarity search\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZWFyY2gvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ1k7QUFDbUI7QUFDdEI7QUFHN0MsZUFBZUksS0FBS0MsR0FBWTtJQUNyQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1ELElBQUlFLElBQUk7SUFFaEMsSUFBSSxDQUFDRCxPQUFPO1FBQ1YsT0FBT04scURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW9CLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3pFO0lBRUEsSUFBSTtRQUNGLDZCQUE2QjtRQUM3QixNQUFNQyxLQUFLLElBQUlULGlFQUFRQSxDQUFDO1lBQ3RCVSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtRQUN0QztRQUVBLGlFQUFpRTtRQUNqRSxNQUFNQyxtQkFBbUIsSUFBSWIsb0ZBQWdCQSxDQUFDO1lBQzVDUyxRQUFRQyxRQUFRQyxHQUFHLENBQUNHLGNBQWM7WUFDbENDLFdBQVc7WUFDWEMsV0FBVztRQUNiO1FBRUEsbUNBQW1DO1FBQ25DLE1BQU1DLGNBQWMsSUFBSWhCLDhEQUFhQSxDQUFDWSxrQkFBa0I7WUFDdERLLGVBQWVWLEdBQUdXLEtBQUssQ0FBQ1QsUUFBUUMsR0FBRyxDQUFDUyxjQUFjO1FBQ3BEO1FBRUFDLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRWxCLE1BQU0sQ0FBQztRQUVoQyxNQUFNbUIsWUFBWSxNQUFNTixZQUFZTywwQkFBMEIsQ0FBQ3BCLE9BQU87WUFDcEVxQixHQUFHO1FBQ0w7UUFHQSxNQUFNQyxVQUFlSCxVQUFVSSxNQUFNLENBQUMsQ0FBQ0MsUUFBUUM7WUFDN0MsT0FDRUEsVUFDQU4sVUFBVU8sU0FBUyxDQUFDLENBQUNDO2dCQUNuQixPQUFPSCxPQUFPSSxRQUFRLENBQUNDLEVBQUUsS0FBS0YsWUFBWUMsUUFBUSxDQUFDQyxFQUFFO1lBQ3ZEO1FBRUo7UUFFQSxPQUFPbkMscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFcUI7UUFBUSxHQUFHO1lBQUVuQixRQUFRO1FBQUk7SUFDdEQsRUFBRSxPQUFPRCxPQUFPO1FBQ2RlLFFBQVFmLEtBQUssQ0FBQyx1Q0FBdUNBO1FBQ3JELE9BQU9SLHFEQUFZQSxDQUFDTyxJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBc0MsR0FDL0M7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWdhbC1zZW1hbnRpYy1zZWFyY2gvLi9zcmMvYXBwL2FwaS9zZWFyY2gvcm91dGUudHM/NWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgUGluZWNvbmUgfSBmcm9tIFwiQHBpbmVjb25lLWRhdGFiYXNlL3BpbmVjb25lXCI7XHJcbmltcG9ydCB7IFZveWFnZUVtYmVkZGluZ3MgfSBmcm9tIFwiQGxhbmdjaGFpbi9jb21tdW5pdHkvZW1iZWRkaW5ncy92b3lhZ2VcIjtcclxuaW1wb3J0IHsgUGluZWNvbmVTdG9yZSB9IGZyb20gXCJAbGFuZ2NoYWluL3BpbmVjb25lXCI7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgaWYgKCFxdWVyeSkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiUXVlcnkgaXMgcmVxdWlyZWRcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIEluaXRpYWxpemUgUGluZWNvbmUgY2xpZW50XHJcbiAgICBjb25zdCBwYyA9IG5ldyBQaW5lY29uZSh7XHJcbiAgICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuUElORUNPTkVfQVBJX0tFWSEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIFZveWFnZUVtYmVkZGluZ3Mgd2l0aCBjb3JyZWN0IGlucHV0VHlwZSBmb3IgcXVlcmllc1xyXG4gICAgY29uc3Qgdm95YWdlRW1iZWRkaW5ncyA9IG5ldyBWb3lhZ2VFbWJlZGRpbmdzKHtcclxuICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5WT1lBR0VfQVBJX0tFWSxcclxuICAgICAgaW5wdXRUeXBlOiBcInF1ZXJ5XCIsXHJcbiAgICAgIG1vZGVsTmFtZTogXCJ2b3lhZ2UtbGF3LTJcIixcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemluZyBQaW5lY29uZVZlY3RvclN0b3JlXHJcbiAgICBjb25zdCB2ZWN0b3JTdG9yZSA9IG5ldyBQaW5lY29uZVN0b3JlKHZveWFnZUVtYmVkZGluZ3MsIHtcclxuICAgICAgcGluZWNvbmVJbmRleDogcGMuSW5kZXgocHJvY2Vzcy5lbnYuUElORUNPTkVfSU5ERVggYXMgc3RyaW5nKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBxdWVyeSBpczogJHtxdWVyeX1gKTtcclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZWQgPSBhd2FpdCB2ZWN0b3JTdG9yZS5tYXhNYXJnaW5hbFJlbGV2YW5jZVNlYXJjaChxdWVyeSwge1xyXG4gICAgICBrOiAyMCxcclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0czogYW55ID0gcmV0cmlldmVkLmZpbHRlcigocmVzdWx0LCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGluZGV4ID09PVxyXG4gICAgICAgIHJldHJpZXZlZC5maW5kSW5kZXgoKG90aGVyUmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQubWV0YWRhdGEuaWQgPT09IG90aGVyUmVzdWx0Lm1ldGFkYXRhLmlkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyByZXN1bHRzIH0sIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwZXJmb3JtaW5nIHNpbWlsYXJpdHkgc2VhcmNoOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHBlcmZvcm0gc2ltaWxhcml0eSBzZWFyY2hcIiB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlBpbmVjb25lIiwiVm95YWdlRW1iZWRkaW5ncyIsIlBpbmVjb25lU3RvcmUiLCJQT1NUIiwicmVxIiwicXVlcnkiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJwYyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJQSU5FQ09ORV9BUElfS0VZIiwidm95YWdlRW1iZWRkaW5ncyIsIlZPWUFHRV9BUElfS0VZIiwiaW5wdXRUeXBlIiwibW9kZWxOYW1lIiwidmVjdG9yU3RvcmUiLCJwaW5lY29uZUluZGV4IiwiSW5kZXgiLCJQSU5FQ09ORV9JTkRFWCIsImNvbnNvbGUiLCJsb2ciLCJyZXRyaWV2ZWQiLCJtYXhNYXJnaW5hbFJlbGV2YW5jZVNlYXJjaCIsImsiLCJyZXN1bHRzIiwiZmlsdGVyIiwicmVzdWx0IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJvdGhlclJlc3VsdCIsIm1ldGFkYXRhIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/search/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@pinecone-database","vendor-chunks/@langchain","vendor-chunks/ajv","vendor-chunks/semver","vendor-chunks/zod-to-json-schema","vendor-chunks/langsmith","vendor-chunks/uuid","vendor-chunks/whatwg-url","vendor-chunks/fast-uri","vendor-chunks/retry","vendor-chunks/p-queue","vendor-chunks/tr46","vendor-chunks/zod","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/p-timeout","vendor-chunks/p-retry","vendor-chunks/p-finally","vendor-chunks/json-schema-traverse","vendor-chunks/flat","vendor-chunks/fast-deep-equal","vendor-chunks/eventemitter3","vendor-chunks/decamelize","vendor-chunks/cross-fetch","vendor-chunks/camelcase","vendor-chunks/ansi-styles","vendor-chunks/@sinclair"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=D%3A%5Ccodevault%5Cnox%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ccodevault%5Cnox&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();