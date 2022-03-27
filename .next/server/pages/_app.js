(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7079);
/* harmony import */ var _features_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8954);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_Header__WEBPACK_IMPORTED_MODULE_4__]);
_features_Header__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Layout = ({ children  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!localStorage.theme || localStorage.theme === 'dark' || !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white text-dark-500 dark:bg-[#1D1328] dark:text-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_features_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_features_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {
                hideProgressBar: true,
                position: "bottom-right",
                autoClose: 2000
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Footer = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "border-t border-solid border-dark-100 bg-white px-5 pt-16 pb-12 dark:border-dark-400 dark:bg-[#1D1328]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-6 flex items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Copyright 2022 LooksRare"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "mx-3",
                        children: "|"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "By Jaypigs Devs"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between text-pink-500",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-wrap items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "about",
                                className: "my-2 mr-4 text-lg font-medium ",
                                children: "About"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "contact",
                                className: "my-2 mr-4 text-lg font-medium",
                                children: "Contact"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "help",
                                className: "my-2 mr-4 text-lg font-medium",
                                children: "Help"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "bug-bounty",
                                className: "my-2 mr-4 text-lg font-medium",
                                children: "Bug bounty"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "brand",
                                className: "my-2 mr-4 text-lg font-medium",
                                children: "Brand"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "tos",
                                className: "my-2 mr-4 text-lg font-medium",
                                children: "Terms of Service"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "social-links flex items-center text-black dark:text-white",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "mx-2",
                                href: "https://discord.gg/",
                                title: "Discord",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    viewBox: "0 0 32 32",
                                    focusable: "false",
                                    className: "h-6 w-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M25.2405 6.65646C23.5408 5.87659 21.7182 5.30202 19.8126 4.97294C19.7779 4.96659 19.7432 4.98246 19.7253 5.0142C19.4909 5.43111 19.2313 5.975 19.0495 6.40249C16.9998 6.09563 14.9607 6.09563 12.953 6.40249C12.7712 5.96549 12.5021 5.43111 12.2667 5.0142C12.2488 4.98352 12.2141 4.96765 12.1794 4.97294C10.2748 5.30097 8.45219 5.87554 6.7515 6.65646C6.73678 6.66281 6.72416 6.6734 6.71578 6.68715C3.25867 11.852 2.31163 16.8899 2.77622 21.8653C2.77832 21.8897 2.79198 21.913 2.8109 21.9277C5.0918 23.6028 7.30125 24.6197 9.46966 25.2937C9.50436 25.3043 9.54113 25.2916 9.56322 25.263C10.0762 24.5626 10.5334 23.824 10.9254 23.0473C10.9486 23.0018 10.9265 22.9478 10.8792 22.9298C10.1539 22.6547 9.46335 22.3193 8.79905 21.9383C8.7465 21.9077 8.7423 21.8325 8.79064 21.7965C8.93043 21.6918 9.07026 21.5828 9.20374 21.4727C9.22789 21.4526 9.26155 21.4484 9.28994 21.4611C13.6541 23.4536 18.3788 23.4536 22.6915 21.4611C22.7199 21.4473 22.7536 21.4516 22.7788 21.4717C22.9123 21.5817 23.0521 21.6918 23.1929 21.7965C23.2413 21.8325 23.2381 21.9077 23.1856 21.9383C22.5213 22.3267 21.8307 22.6547 21.1044 22.9288C21.0571 22.9468 21.036 23.0018 21.0592 23.0473C21.4596 23.8229 21.9169 24.5615 22.4203 25.262C22.4414 25.2916 22.4792 25.3043 22.5139 25.2937C24.6928 24.6197 26.9023 23.6028 29.1832 21.9277C29.2031 21.913 29.2158 21.8907 29.2179 21.8664C29.7739 16.1142 28.2866 11.1176 25.2751 6.6882C25.2678 6.6734 25.2552 6.66281 25.2405 6.65646ZM11.5772 18.8358C10.2632 18.8358 9.18061 17.6295 9.18061 16.1481C9.18061 14.6667 10.2422 13.4604 11.5772 13.4604C12.9225 13.4604 13.9947 14.6773 13.9737 16.1481C13.9737 17.6295 12.912 18.8358 11.5772 18.8358ZM20.438 18.8358C19.1241 18.8358 18.0415 17.6295 18.0415 16.1481C18.0415 14.6667 19.103 13.4604 20.438 13.4604C21.7834 13.4604 22.8555 14.6773 22.8345 16.1481C22.8345 17.6295 21.7834 18.8358 20.438 18.8358Z",
                                        fill: "currentColor"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "mx-2",
                                href: "https://twitter.com/",
                                title: "Twitter",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    viewBox: "0 0 32 32",
                                    focusable: "false",
                                    className: "h-6 w-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M11.5491 25.7525C15.2712 25.7759 18.8476 24.3077 21.4796 21.6757C24.1115 19.0438 25.5798 15.4673 25.5564 11.7453V11.1016C26.5116 10.4018 27.3383 9.54181 28 8.5598C27.1006 8.95318 26.1488 9.21407 25.1745 9.33435C26.2075 8.71884 26.9826 7.74999 27.3564 6.60708C26.3937 7.18465 25.338 7.59068 24.2364 7.80708C22.7111 6.18187 20.2853 5.7819 18.319 6.83143C16.3527 7.88095 15.335 10.119 15.8364 12.2907C11.8783 12.0964 8.18962 10.2283 5.69091 7.15253C4.39814 9.39629 5.06589 12.2581 7.21818 13.698C6.45303 13.6685 5.70558 13.4592 5.03636 13.0871V13.1416C5.02235 15.4701 6.63569 17.4925 8.90909 17.9962C8.19742 18.1876 7.45196 18.2174 6.72727 18.0834C7.38175 20.0581 9.20747 21.4078 11.2873 21.4543C9.55187 22.8513 7.39501 23.6202 5.16727 23.6362C4.77668 23.6249 4.387 23.5921 4 23.538C6.25486 24.9746 8.8755 25.732 11.5491 25.7198",
                                        fill: "currentColor"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "mx-2",
                                href: "https://www.instagram.com/",
                                title: "Instagram",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    viewBox: "0 0 32 32",
                                    focusable: "false",
                                    className: "h-6 w-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M16 6.163C19.204 6.163 19.584 6.175 20.85 6.233C24.102 6.381 25.621 7.924 25.769 11.152C25.827 12.417 25.838 12.797 25.838 16.001C25.838 19.206 25.826 19.585 25.769 20.85C25.62 24.075 24.105 25.621 20.85 25.769C19.584 25.827 19.206 25.839 16 25.839C12.796 25.839 12.416 25.827 11.151 25.769C7.891 25.62 6.38 24.07 6.232 20.849C6.174 19.584 6.162 19.205 6.162 16C6.162 12.796 6.175 12.417 6.232 11.151C6.381 7.924 7.896 6.38 11.151 6.232C12.417 6.175 12.796 6.163 16 6.163ZM16 4C12.741 4 12.333 4.014 11.053 4.072C6.695 4.272 4.273 6.69 4.073 11.052C4.014 12.333 4 12.741 4 16C4 19.259 4.014 19.668 4.072 20.948C4.272 25.306 6.69 27.728 11.052 27.928C12.333 27.986 12.741 28 16 28C19.259 28 19.668 27.986 20.948 27.928C25.302 27.728 27.73 25.31 27.927 20.948C27.986 19.668 28 19.259 28 16C28 12.741 27.986 12.333 27.928 11.053C27.732 6.699 25.311 4.273 20.949 4.073C19.668 4.014 19.259 4 16 4V4ZM16 9.838C12.597 9.838 9.838 12.597 9.838 16C9.838 19.403 12.597 22.163 16 22.163C19.403 22.163 22.162 19.404 22.162 16C22.162 12.597 19.403 9.838 16 9.838ZM16 20C13.791 20 12 18.21 12 16C12 13.791 13.791 12 16 12C18.209 12 20 13.791 20 16C20 18.21 18.209 20 16 20ZM22.406 8.155C21.61 8.155 20.965 8.8 20.965 9.595C20.965 10.39 21.61 11.035 22.406 11.035C23.201 11.035 23.845 10.39 23.845 9.595C23.845 8.8 23.201 8.155 22.406 8.155Z",
                                        fill: "currentColor"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 8954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ALink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2359);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Header = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: darkMode , 1: setDarkMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!localStorage.theme || localStorage.theme === 'dark' || !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, []);
    const darkModeHandler = ()=>{
        var ref;
        setDarkMode(!darkMode);
        (ref = document.querySelector('html')) === null || ref === void 0 ? void 0 : ref.classList.toggle('dark');
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light';
        } else {
            localStorage.theme = 'dark';
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "header h-header sticky top-0 z-10 flex items-center justify-between bg-white px-5 shadow-md dark:bg-[#1D1328] dark:shadow-sm dark:shadow-dark-400",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "header-left flex items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ALink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        href: "/",
                        className: "relative block h-full w-32 sm:mr-5",
                        children: darkMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            src: "/images/dark-logo.png",
                            alt: "me",
                            layout: "responsive",
                            width: 4168,
                            height: 3585
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            src: "/images/logo.png",
                            alt: "me",
                            layout: "responsive",
                            width: 4168,
                            height: 3585
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative hidden text-gray-600 focus-within:text-gray-400 xl:block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "absolute inset-y-0 left-0 flex items-center pl-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: "focus:shadow-outline p-1 text-dark-100 focus:outline-none",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        viewBox: "0 0 24 24",
                                        className: "h-6 w-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "search",
                                name: "q",
                                className: "text-md h-12 w-96 rounded-full border-0 bg-dark-300 py-2 pl-10 placeholder-dark-100 shadow-none focus:border-0 focus:shadow-none focus:outline-none focus:ring-transparent dark:text-white",
                                placeholder: "Search...",
                                autoComplete: "off"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "header-right flex items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ALink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        href: "/explore",
                        className: `hidden border-b-2 border-solid border-transparent py-2  px-4 text-lg font-medium hover:border-dark-500 dark:hover:border-pink-500 md:block ${router.pathname == '/explore' ? 'dark:border-pink-500' : ''}`,
                        children: "Explore"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ALink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        href: "/collection",
                        className: `hidden border-b-2 border-solid border-transparent py-2 px-4 text-lg font-medium hover:border-dark-500 dark:hover:border-pink-500 md:block ${router.pathname == '/collection' ? 'dark:border-pink-500' : ''}`,
                        children: "Collection"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ALink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        href: "/rewards",
                        className: `hidden border-b-2 border-solid border-transparent py-2 px-4 text-lg font-medium hover:border-dark-500 dark:hover:border-pink-500 md:block ${router.pathname == '/rewards' ? 'dark:border-pink-500' : ''}`,
                        children: "Rewards"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "mr-4 inline-flex items-center rounded-full bg-dark-500 bg-opacity-50 py-[0.625rem] px-[0.625rem] font-bold text-dark-500 hover:bg-dark-500 dark:bg-dark-300 sm:mx-4 md:block",
                        onClick: darkModeHandler,
                        children: darkMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M17.725 14.1062C17.0449 15.3868 16.0571 16.4784 14.8505 17.2827C13.644 18.087 12.2564 18.5789 10.8126 18.714C9.36888 18.8491 7.91416 18.6233 6.57929 18.0569C5.24442 17.4905 4.07125 16.6012 3.16526 15.469C2.25926 14.3368 1.64886 12.9972 1.38892 11.5706C1.12899 10.144 1.22767 8.67516 1.6761 7.29617C2.12454 5.91717 2.90865 4.67124 3.95796 3.6704C5.00726 2.66956 6.28885 1.94519 7.6875 1.56242C7.82292 1.51685 7.96987 1.51906 8.10386 1.56868C8.23786 1.6183 8.3508 1.71233 8.42389 1.83511C8.49697 1.95789 8.52578 2.102 8.50551 2.24344C8.48524 2.38489 8.41712 2.51511 8.3125 2.61242C7.34495 3.56958 6.68326 4.79237 6.41125 6.1259C6.13923 7.45943 6.26914 8.84369 6.78451 10.1033C7.29987 11.363 8.17751 12.4413 9.30624 13.2017C10.435 13.9622 11.764 14.3705 13.125 14.3749C14.4418 14.3802 15.7317 14.0024 16.8375 13.2874C16.9538 13.2139 17.0911 13.1807 17.2281 13.1932C17.3652 13.2056 17.4943 13.2629 17.5954 13.3562C17.6966 13.4495 17.7641 13.5736 17.7875 13.7092C17.811 13.8448 17.789 13.9843 17.725 14.1062V14.1062Z",
                                fill: "white"
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M5.04163 3.44991L4.71663 3.12491C4.39163 2.79991 3.86663 2.80824 3.54997 3.12491L3.54164 3.13324C3.21664 3.45824 3.21664 3.98324 3.54164 4.2999L3.86663 4.6249C4.19163 4.9499 4.7083 4.9499 5.0333 4.6249L5.04163 4.61657C5.36663 4.2999 5.36663 3.76657 5.04163 3.44991ZM2.50831 8.74988H1.65831C1.19998 8.74988 0.833313 9.11655 0.833313 9.57488V9.58321C0.833313 10.0415 1.19998 10.4082 1.65831 10.4082H2.49997C2.96664 10.4165 3.3333 10.0499 3.3333 9.59155V9.58321C3.3333 9.11655 2.96664 8.74988 2.50831 8.74988ZM10.0083 0.458252H9.99994C9.53328 0.458252 9.16661 0.824917 9.16661 1.28325V2.08325C9.16661 2.54158 9.53328 2.90824 9.99161 2.90824H9.99994C10.4666 2.91658 10.8333 2.54991 10.8333 2.09158V1.28325C10.8333 0.824917 10.4666 0.458252 10.0083 0.458252ZM16.4583 3.13324C16.1333 2.80824 15.6083 2.80824 15.2833 3.12491L14.9583 3.44991C14.6333 3.77491 14.6333 4.2999 14.9583 4.61657L14.9666 4.6249C15.2916 4.9499 15.8166 4.9499 16.1333 4.6249L16.4583 4.2999C16.7832 3.9749 16.7832 3.45824 16.4583 3.13324ZM14.9499 15.7165L15.2749 16.0415C15.5999 16.3665 16.1249 16.3665 16.4499 16.0415C16.7749 15.7165 16.7749 15.1915 16.4499 14.8665L16.1249 14.5415C15.7999 14.2165 15.2749 14.2249 14.9583 14.5415C14.6249 14.8749 14.6249 15.3915 14.9499 15.7165ZM16.6666 9.57488V9.58321C16.6666 10.0415 17.0332 10.4082 17.4916 10.4082H18.3332C18.7916 10.4082 19.1582 10.0415 19.1582 9.58321V9.57488C19.1582 9.11655 18.7916 8.74988 18.3332 8.74988H17.4916C17.0332 8.74988 16.6666 9.11655 16.6666 9.57488ZM9.99994 4.58324C7.24162 4.58324 4.99996 6.82489 4.99996 9.58321C4.99996 12.3415 7.24162 14.5832 9.99994 14.5832C12.7583 14.5832 14.9999 12.3415 14.9999 9.58321C14.9999 6.82489 12.7583 4.58324 9.99994 4.58324ZM9.99161 18.7082H9.99994C10.4583 18.7082 10.8249 18.3415 10.8249 17.8832V17.0832C10.8249 16.6249 10.4583 16.2582 9.99994 16.2582H9.99161C9.53328 16.2582 9.16661 16.6249 9.16661 17.0832V17.8832C9.16661 18.3415 9.53328 18.7082 9.99161 18.7082ZM3.54164 16.0332C3.86663 16.3582 4.39163 16.3582 4.71663 16.0332L5.04163 15.7082C5.36663 15.3832 5.35829 14.8582 5.04163 14.5415L5.0333 14.5332C4.7083 14.2082 4.1833 14.2082 3.8583 14.5332L3.5333 14.8582C3.21664 15.1915 3.21664 15.7082 3.54164 16.0332Z",
                                fill: "white",
                                fillOpacity: "0.8"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3__WEBPACK_IMPORTED_MODULE_6__/* .Web3Button */ .t, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                        as: "div",
                        className: "relative ml-4 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Button, {
                                    className: "inline-flex items-center rounded-full bg-dark-500 bg-opacity-50 py-[0.625rem] px-[0.625rem] font-bold text-dark-500 hover:bg-dark-500 dark:bg-dark-300 md:hidden",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            viewBox: "0 0 32 32",
                                            focusable: "false",
                                            className: "h-6 w-6 text-white",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M4 24H28V26H4V24ZM4 12H28V14H4V12ZM4 18H28V20H4V18ZM4 6H28V8H4V6Z",
                                                fill: "currentColor"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sr-only",
                                            children: "Menu"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                enter: "transition ease-out duration-100",
                                enterFrom: "transform opacity-0 scale-95",
                                enterTo: "transform opacity-100 scale-100",
                                leave: "transition ease-in duration-75",
                                leaveFrom: "transform opacity-100 scale-100",
                                leaveTo: "transform opacity-0 scale-95",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Items, {
                                    className: "absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "px-1 py-1 ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                                children: ({ active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ALink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        href: "/explore",
                                                        className: `${active ? 'mr-2 text-pink-500' : 'mr-2 text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                viewBox: "0 0 32 32",
                                                                focusable: "false",
                                                                className: "mr-2 h-6 w-6",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    fillRule: "evenodd",
                                                                    clipRule: "evenodd",
                                                                    d: "M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16ZM23 9L13.5 13.5L9 23L18.5 18.5L23 9ZM14.5 16C14.5 16.8284 15.1716 17.5 16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16Z",
                                                                    fill: "currentColor"
                                                                })
                                                            }),
                                                            "Explore"
                                                        ]
                                                    })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                                children: ({ active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ALink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        href: "/collection",
                                                        className: `${active ? 'mr-2 text-pink-500' : 'mr-2 text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                viewBox: "0 0 32 32",
                                                                focusable: "false",
                                                                className: "mr-2 h-6 w-6",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    fillRule: "evenodd",
                                                                    clipRule: "evenodd",
                                                                    d: "M31 15H29V3H17V1H29C30.1046 1 31 1.89543 31 3V15ZM24 22H26V8C26 6.89543 25.1046 6 24 6H10V8H24V22ZM4 30H18C19.1046 30 20 29.1046 20 28V14C20 12.8954 19.1046 12 18 12H4C2.89543 12 2 12.8954 2 14V28C2 29.1046 2.89543 30 4 30ZM4 28V14H18V28H4Z",
                                                                    fill: "currentColor"
                                                                })
                                                            }),
                                                            "Collections"
                                                        ]
                                                    })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                                children: ({ active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ALink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        href: "/rewards",
                                                        className: `${active ? 'mr-2 text-pink-500' : 'mr-2 text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                viewBox: "0 0 32 32",
                                                                focusable: "false",
                                                                className: "mr-2 h-6 w-6",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M26 9.99999H23.2383C23.8892 9.03797 24.1416 7.86102 23.9426 6.71669C23.7435 5.57235 23.1083 4.54982 22.1708 3.86416C21.2332 3.17851 20.0663 2.88317 18.9154 3.04026C17.7646 3.19736 16.7195 3.79464 16 4.70649C15.2789 3.79915 14.2347 3.206 13.0861 3.05125C11.9375 2.89651 10.7736 3.19217 9.83811 3.87632C8.90261 4.56047 8.26809 5.58004 8.06745 6.72151C7.8668 7.86299 8.11558 9.03783 8.7617 9.99999H6C5.46977 10.0007 4.96145 10.2116 4.58652 10.5865C4.21159 10.9614 4.00066 11.4698 4 12V16C4.00066 16.5302 4.21159 17.0385 4.58652 17.4135C4.96145 17.7884 5.46977 17.9993 6 18V28C6.00066 28.5302 6.21159 29.0385 6.58652 29.4135C6.96145 29.7884 7.46977 29.9993 8 30H24C24.5302 29.9993 25.0386 29.7884 25.4135 29.4135C25.7884 29.0385 25.9993 28.5302 26 28V18C26.5302 17.9993 27.0386 17.7884 27.4135 17.4135C27.7884 17.0385 27.9993 16.5302 28 16V12C27.9993 11.4698 27.7884 10.9614 27.4135 10.5865C27.0386 10.2116 26.5302 10.0007 26 9.99999ZM17 7.49999C17 7.00554 17.1466 6.52219 17.4213 6.11107C17.696 5.69994 18.0865 5.37951 18.5433 5.19029C19.0001 5.00107 19.5028 4.95157 19.9877 5.04803C20.4727 5.14449 20.9181 5.38259 21.2678 5.73223C21.6174 6.08186 21.8555 6.52731 21.952 7.01227C22.0484 7.49722 21.9989 7.99989 21.8097 8.4567C21.6205 8.91352 21.3 9.30396 20.8889 9.57867C20.4778 9.85337 19.9945 9.99999 19.5 9.99999H17V7.49999ZM12.5 4.99999C13.1628 5.00079 13.7982 5.26443 14.2669 5.7331C14.7356 6.20177 14.9992 6.83719 15 7.49999V9.99999H12.5C11.837 9.99999 11.2011 9.7366 10.7322 9.26776C10.2634 8.79892 10 8.16303 10 7.49999C10 6.83695 10.2634 6.20107 10.7322 5.73223C11.2011 5.26338 11.837 4.99999 12.5 4.99999ZM6 12H15V16H6V12ZM8 18H15V28H8V18ZM24.0012 28H17V18H24L24.0012 28ZM17 16V12H26L26.0012 16H17Z",
                                                                    fill: "currentColor"
                                                                })
                                                            }),
                                                            "Rewards"
                                                        ]
                                                    })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9337);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_3__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_core_context__WEBPACK_IMPORTED_MODULE_2__/* .Web3ContextProvider */ .v, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 3427:
/***/ ((module) => {

"use strict";
module.exports = require("@metamask/detect-provider");

/***/ }),

/***/ 1982:
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4866:
/***/ ((module) => {

"use strict";
module.exports = require("walletlink");

/***/ }),

/***/ 2840:
/***/ ((module) => {

"use strict";
module.exports = require("web3modal");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,675,359,15], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();