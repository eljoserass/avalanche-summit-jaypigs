"use strict";
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 1850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _ALink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2359);

/* eslint-disable @typescript-eslint/no-explicit-any */ 

const TokenCard = ({ token  })=>{
    var ref, ref1;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "rounded-md border border-solid border-dark-100 p-2 dark:border-dark-400",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-1 flex items-center truncate",
                children: [
                    ((ref = token.collection) === null || ref === void 0 ? void 0 : ref.isVerified) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        viewBox: "0 0 32 32",
                        focusable: "false",
                        className: "mr-1 h-4 w-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.4171 3.24982L16.0007 1.33337L12.5842 3.24982L8.66732 3.29834L6.66684 6.66623L3.29895 8.66671L3.25043 12.5836L1.33398 16L3.25043 19.4165L3.29895 23.3334L6.66684 25.3338L8.66732 28.7017L12.5842 28.7503L16.0007 30.6667L19.4171 28.7503L23.334 28.7017L25.3345 25.3338L28.7024 23.3334L28.7509 19.4165L30.6673 16L28.7509 12.5836L28.7024 8.66671L25.3345 6.66623L23.334 3.29834L19.4171 3.24982ZM9.00065 16.5L14.0007 21.5L23.0007 12.6L21.4007 11L14.0007 18.4L10.6007 15L9.00065 16.5Z",
                            fill: "currentColor"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "overflow-hidden text-ellipsis font-medium",
                        children: (ref1 = token.collection) === null || ref1 === void 0 ? void 0 : ref1.name
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative mb-2 h-56",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ALink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    href: `/collection/${token.collection.address}/${token.token_id}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        src: token.image_url,
                        layout: "fill",
                        alt: "token",
                        className: "object-cover"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "-mx-2 mb-1 bg-dark-100 px-2 dark:bg-dark-400",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "mb-1 flex items-center justify-between",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Make an offer"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                        className: "flex justify-between truncate text-lg font-medium",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "overflow-hidden text-ellipsis",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ALink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    href: `/collection/${token.collection.address}/${token.token_id}`,
                                    children: token.name
                                })
                            }),
                            token.collection.floorOrder && token.collection.floorOrder.price ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        viewBox: "0 0 48 96",
                                        focusable: "false",
                                        className: "mr-1 h-4 w-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z",
                                                fill: "#767676"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z",
                                                fill: "#8E8E8E"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z",
                                                fill: "#5F5F5F"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z",
                                                fill: "#8E8E8E"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z",
                                                fill: "#5F5F5F"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z",
                                                fill: "#767676"
                                            })
                                        ]
                                    }),
                                    token.collection.floorOrder.price / 1000000000000000000
                                ]
                            }) : token.bids.length > 0 && token.bids[0] ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        viewBox: "0 0 48 96",
                                        focusable: "false",
                                        className: "mr-1 h-4 w-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M23.9913 8.91397L23.4668 10.6955V62.3857L23.9913 62.909L47.9848 48.7262L23.9913 8.91397Z",
                                                fill: "#DF5960"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M23.9942 8.91397L0 48.7262L23.9942 62.909V37.82V8.91397Z",
                                                fill: "#EE9398"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M23.9909 67.4524L23.6953 67.8128V86.2252L23.9909 87.0881L47.9985 53.2773L23.9909 67.4524Z",
                                                fill: "#DF5960"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M23.9935 87.0879V67.4522L0 53.2772L23.9935 87.0879Z",
                                                fill: "#EE9398"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M23.9941 62.9063L47.987 48.7239L23.9941 37.818V62.9063Z",
                                                fill: "#CF373E"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M0 48.7242L23.9935 62.9066V37.8183L0 48.7242Z",
                                                fill: "#DF5960"
                                            })
                                        ]
                                    }),
                                    token.bids[0].price / 1000000000000000000
                                ]
                            }) : ''
                        ]
                    })
                ]
            }),
            token.bids.length > 0 && token.bids[0] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                className: "flex items-center justify-end truncate",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "mr-2 overflow-hidden text-ellipsis opacity-60",
                        children: "Offer"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                viewBox: "0 0 48 96",
                                focusable: "false",
                                className: "mr-1 h-4 w-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M23.9913 8.91397L23.4668 10.6955V62.3857L23.9913 62.909L47.9848 48.7262L23.9913 8.91397Z",
                                        fill: "#DF5960"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M23.9942 8.91397L0 48.7262L23.9942 62.909V37.82V8.91397Z",
                                        fill: "#EE9398"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M23.9909 67.4524L23.6953 67.8128V86.2252L23.9909 87.0881L47.9985 53.2773L23.9909 67.4524Z",
                                        fill: "#DF5960"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M23.9935 87.0879V67.4522L0 53.2772L23.9935 87.0879Z",
                                        fill: "#EE9398"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M23.9941 62.9063L47.987 48.7239L23.9941 37.818V62.9063Z",
                                        fill: "#CF373E"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M0 48.7242L23.9935 62.9066V37.8183L0 48.7242Z",
                                        fill: "#DF5960"
                                    })
                                ]
                            }),
                            token.bids[0].price / 1000000000000000000
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenCard);


/***/ }),

/***/ 3948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const TokenCardSkeleton = ({ total  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: new Array(total).fill(1).map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rounded-md border border-solid border-dark-100 p-2 dark:border-dark-400",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-2 h-6 w-1/3 animate-pulse rounded-sm bg-gray-600"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-48 animate-pulse rounded-tr rounded-tl bg-gray-600"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pt-2 pb-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-3 h-4 animate-pulse rounded-sm bg-gray-600"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-6 animate-pulse rounded-sm bg-gray-600"
                            })
                        ]
                    })
                ]
            }, index)
        )
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenCardSkeleton);


/***/ }),

/***/ 9287:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Navbar = ({ statusFilterEnabled , lowest , highest , setStatusFilterEnabled , lowestPriceHandler , highestPriceHandler  })=>{
    const { 0: collapsed , 1: setCollapsed  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const toggleCollpase = ()=>{
        if (window.innerWidth > 768) {
            setCollapsed(!collapsed);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `mb-4 md:mb-0 md:mr-4 ${collapsed ? '' : 'md:w-1/3 lg:w-1/4 xl:w-1/5'}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "sticky top-[145px] rounded-lg border border-solid border-dark-100 dark:border-dark-400",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex cursor-pointer items-center py-4 px-4 dark:bg-dark-400",
                    onClick: toggleCollpase,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            viewBox: "0 0 32 32",
                            focusable: "false",
                            className: "h-6 w-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M18 28H14C12.8954 28 12 27.1046 12 26V18.41L4.59 11C4.21441 10.6266 4.00223 10.1196 4 9.59V6C4 4.89543 4.89543 4 6 4H26C27.1046 4 28 4.89543 28 6V9.59C27.9978 10.1196 27.7856 10.6266 27.41 11L20 18.41V26C20 27.1046 19.1046 28 18 28ZM6 6V9.59L14 17.59V26H18V17.59L26 9.59V6H6Z",
                                fill: "currentColor"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: `${collapsed ? ' hidden ' : ''} ml-2 font-medium`,
                            children: "Filters"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            viewBox: "0 0 32 32",
                            focusable: "false",
                            className: `${collapsed ? ' hidden ' : ''} ml-auto h-6 w-6`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M10 16L20 6L21.4 7.4L12.8 16L21.4 24.6L20 26L10 16Z",
                                fill: "currentColor"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "border-dark-100 dark:border-dark-300"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                    defaultOpen: true,
                    children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                                    className: "flex w-full items-center py-4 px-4 dark:bg-dark-400",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            viewBox: "0 0 32 32",
                                            focusable: "false",
                                            className: "h-6 w-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M10.2708 7.47121C9.93345 6.88642 9.90866 6.14255 10.2704 5.51582L11.7355 2.97737C12.275 2.04274 13.4697 1.72252 14.404 2.26213L21.1711 6.17032C22.1054 6.70992 22.4256 7.90503 21.8861 8.83966L20.421 11.3781C20.0597 12.0041 19.4043 12.3545 18.7302 12.3555L17.1346 15.12L28.9775 21.9597L28.0007 23.652L16.1578 16.8123L14.5613 19.5784C14.8976 20.1629 14.9219 20.9058 14.5606 21.5319L13.0954 24.0703C12.556 25.0049 11.3613 25.3252 10.4269 24.7856L3.65984 20.8774C2.7255 20.3378 2.40537 19.1426 2.94481 18.208L4.40993 15.6696C4.77167 15.0428 5.42807 14.6924 6.10302 14.6922L10.2708 7.47121ZM18.7295 10.4006L11.9633 6.49285L11.9625 6.49236L13.4273 3.95442L20.1944 7.86261L18.7295 10.4006ZM11.8321 8.67417L7.92546 15.4429L13.0008 18.374L16.9075 11.6053L11.8321 8.67417ZM4.63658 19.1851L6.1017 16.6466L12.8688 20.5548L11.4037 23.0933L4.63658 19.1851ZM29.0233 29H30V27.0459H29.0233H2.97674H2V29H2.97674H29.0233Z",
                                                fill: "currentColor"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: `${collapsed ? ' hidden ' : ''} ml-2 font-medium`,
                                            children: "Item Status"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            viewBox: "0 0 32 32",
                                            focusable: "false",
                                            className: `${collapsed ? 'hidden ' : ''} ml-auto h-6 w-6 ${open ? '' : 'rotate-180 transform'}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M16 10L26 20L24.6 21.4L16 12.8L7.4 21.4L6 20L16 10Z",
                                                fill: "currentColor"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                                    enter: "transition duration-100 ease-out",
                                    enterFrom: "transform scale-95 opacity-0",
                                    enterTo: "transform scale-100 opacity-100",
                                    leave: "transition duration-75 ease-out",
                                    leaveFrom: "transform scale-100 opacity-100",
                                    leaveTo: "transform scale-95 opacity-0",
                                    className: `${collapsed ? ' hidden ' : ''}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                                        className: "py-2 px-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center justify-between py-4 px-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-medium",
                                                    children: "Buy Now"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Switch, {
                                                    checked: statusFilterEnabled,
                                                    onChange: setStatusFilterEnabled,
                                                    className: `${statusFilterEnabled ? 'bg-dark-400' : 'bg-dark-300'} relative inline-flex h-7 w-[74px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "sr-only",
                                                            children: "Use setting"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            "aria-hidden": "true",
                                                            className: `${statusFilterEnabled ? 'translate-x-9' : 'translate-x-0'} pointer-events-none inline-block h-6 w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "border-dark-100 dark:border-dark-300"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                    defaultOpen: true,
                    children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                                    className: "flex w-full items-center py-4 px-4 dark:bg-dark-400",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            viewBox: "0 0 64 64",
                                            focusable: "false",
                                            className: "h-6 w-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M28 18C25.7909 18 24 19.7909 24 22V30C24 32.2091 25.7909 34 28 34H36V42H24V46H30V52H34V46H36C38.2091 46 40 44.2091 40 42V34C40 31.7909 38.2091 30 36 30H28V22H40V18H34V12H30V18H28Z",
                                                    fill: "currentColor"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M32 4C16.536 4 4 16.536 4 32C4 47.464 16.536 60 32 60C47.464 60 60 47.464 60 32C60 16.536 47.464 4 32 4ZM32 8C45.2548 8 56 18.7452 56 32C56 45.2548 45.2548 56 32 56C18.7452 56 8 45.2548 8 32C8 18.7452 18.7452 8 32 8Z",
                                                    fill: "currentColor"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: `${collapsed ? ' hidden ' : ''} ml-2 font-medium`,
                                            children: "Price Range"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            viewBox: "0 0 32 32",
                                            focusable: "false",
                                            className: `${collapsed ? 'hidden ' : ''} ml-auto h-6 w-6 ${open ? '' : 'rotate-180 transform'}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M16 10L26 20L24.6 21.4L16 12.8L7.4 21.4L6 20L16 10Z",
                                                fill: "currentColor"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                                    enter: "transition duration-100 ease-out",
                                    enterFrom: "transform scale-95 opacity-0",
                                    enterTo: "transform scale-100 opacity-100",
                                    leave: "transition duration-75 ease-out",
                                    leaveFrom: "transform scale-100 opacity-100",
                                    leaveTo: "transform scale-95 opacity-0",
                                    className: `${collapsed ? ' hidden ' : ''}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                                        className: "py-2 px-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center py-4 px-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mb-4 mr-1 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "mb-2 block text-sm font-bold text-dark-400 dark:text-white",
                                                            children: "Lowest"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            className: "focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-black shadow focus:outline-none",
                                                            type: "number",
                                                            step: 0.01,
                                                            placeholder: "0",
                                                            value: lowest,
                                                            onChange: lowestPriceHandler
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mb-4 mr-2 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "mb-2 block text-sm font-bold text-dark-400 dark:text-white",
                                                            children: "Highest"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            className: "focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-black shadow focus:outline-none",
                                                            type: "number",
                                                            step: 0.01,
                                                            placeholder: "0",
                                                            value: highest,
                                                            onChange: highestPriceHandler
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    viewBox: "0 0 96 96",
                                                    focusable: "false",
                                                    className: "mt-2 h-6 w-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                            clipPath: "url(#eth-clip-1)",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M47.9907 0L47.3467 2.18771V65.6644L47.9907 66.307L77.4553 48.8902L47.9907 0Z",
                                                                    fill: "#757576"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M47.9912 0L18.5259 48.8902L47.9912 66.307V35.4971V0Z",
                                                                    fill: "#8E8E8E"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M47.9909 71.8882L47.6279 72.3309V94.9422L47.9909 96.0019L77.4735 54.4805L47.9909 71.8882Z",
                                                                    fill: "#5F5F5F"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M47.9912 96.0019V71.8882L18.5259 54.4805L47.9912 96.0019Z",
                                                                    fill: "#8E8E8E"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M47.9912 66.3059L77.4558 48.8892L47.9912 35.4961V66.3059Z",
                                                                    fill: "#5F5F5F"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M18.5259 48.8892L47.9912 66.3059V35.4961L18.5259 48.8892Z",
                                                                    fill: "#757576"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                                                id: "eth-clip-1",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                    width: "96",
                                                                    height: "96",
                                                                    fill: "white"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;