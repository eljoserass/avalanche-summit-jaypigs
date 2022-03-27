"use strict";
(() => {
var exports = {};
exports.id = 174;
exports.ids = [174];
exports.modules = {

/***/ 3806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _json_server_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2982);

function handler(req, res) {
    let result = _json_server_data__WEBPACK_IMPORTED_MODULE_0__/* .events */ .U3;
    const { page , perPage , filters  } = req.query;
    if (filters && filters.length > 0) {
        result = result.filter((event)=>filters.includes(event.type)
        );
    }
    const hasMore = result.length > (parseInt(String(page)) + 1) * parseInt(String(perPage));
    result = result.slice(parseInt(String(page)) * parseInt(String(perPage)), (parseInt(String(page)) + 1) * parseInt(String(perPage)));
    return res.status(200).json({
        events: result,
        hasMore: hasMore,
        filters: filters
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [982], () => (__webpack_exec__(3806)));
module.exports = __webpack_exports__;

})();