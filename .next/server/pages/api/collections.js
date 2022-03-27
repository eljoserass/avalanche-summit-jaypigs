"use strict";
(() => {
var exports = {};
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 2838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _json_server_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2982);

function handler(req, res) {
    let result = _json_server_data__WEBPACK_IMPORTED_MODULE_0__/* .collections */ .sh;
    const { page , perPage , searchTerm , sorts  } = req.query;
    if (String(searchTerm) !== "") {
        result = result.filter((item)=>item.name.toUpperCase().includes(String(searchTerm).toUpperCase())
        );
    }
    const sortObj = JSON.parse(String(sorts));
    if (sortObj.floor !== "none") {
        if (sortObj.floor == 'ascending') {
            result = result.sort((a, b)=>{
                return parseFloat(a.floorOrder.price) - parseFloat(b.floorOrder.price);
            });
        } else {
            result = result.sort((a, b)=>{
                return parseFloat(b.floorOrder.price) - parseFloat(a.floorOrder.price);
            });
        }
    } else if (sortObj.total !== "none") {
        if (sortObj.total == 'ascending') {
            result = result.sort((a, b)=>{
                return parseFloat(a.volume.volumeAll) - parseFloat(b.volume.volumeAll);
            });
        } else {
            result = result.sort((a, b)=>{
                return parseFloat(b.volume.volumeAll) - parseFloat(a.volume.volumeAll);
            });
        }
    } else if (sortObj.day !== "none") {
        if (sortObj.day == 'ascending') {
            result = result.sort((a, b)=>{
                return parseFloat(a.volume.volume24h) - parseFloat(b.volume.volume24h);
            });
        } else {
            result = result.sort((a, b)=>{
                return parseFloat(b.volume.volume24h) - parseFloat(a.volume.volume24h);
            });
        }
    } else if (sortObj.dayPercent !== "none") {
        if (sortObj.change24h == 'ascending') {
            result = result.sort((a, b)=>{
                return a.volume.change24h - b.volume.change24h;
            });
        } else {
            result = result.sort((a, b)=>{
                return b.volume.change24h - a.volume.change24h;
            });
        }
    }
    const hasMore = result.length > (parseInt(String(page)) + 1) * parseInt(String(perPage));
    result = result.slice(parseInt(String(page)) * parseInt(String(perPage)), (parseInt(String(page)) + 1) * parseInt(String(perPage)));
    return res.status(200).json({
        collections: result,
        hasMore: hasMore
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [982], () => (__webpack_exec__(2838)));
module.exports = __webpack_exports__;

})();