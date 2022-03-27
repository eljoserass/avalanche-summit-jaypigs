"use strict";
exports.id = 15;
exports.ids = [15];
exports.modules = {

/***/ 9015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* reexport */ Web3Address),
  "t": () => (/* reexport */ Web3Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./core/context/index.ts + 4 modules
var context = __webpack_require__(9337);
;// CONCATENATED MODULE: ./components/features/web3/Web3Button.tsx



const ConnectButton = ({ connect  })=>{
    return connect ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
        id: "wallet-connect",
        className: "rounded-full border-0 bg-dark-500 bg-opacity-50 px-4 py-2 font-medium text-white hover:bg-dark-500 dark:bg-white dark:text-black",
        onClick: connect,
        children: "Connect"
    }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
        id: "wallet-connect",
        className: "rounded-full border-0 bg-dark-500 bg-opacity-50 px-4 py-2 font-medium text-white hover:bg-dark-500 dark:bg-white dark:text-black",
        children: "Loading..."
    });
};
const DisconnectButton = ({ disconnect  })=>{
    return disconnect ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
        id: "wallet-connect",
        className: "rounded-full border-0 bg-dark-500 bg-opacity-50 px-4 py-2 font-medium text-white hover:bg-dark-500 dark:bg-white dark:text-black",
        onClick: disconnect,
        children: "Disconnect"
    }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
        id: "wallet-connect",
        className: "rounded-full border-0 bg-dark-500 bg-opacity-50 px-4 py-2 font-medium text-white hover:bg-dark-500 dark:bg-white dark:text-black",
        children: "Loading..."
    });
};
function Web3Button() {
    const { web3Provider , connect , disconnect  } = (0,context/* useWeb3Context */.Z)();
    return web3Provider ? /*#__PURE__*/ jsx_runtime_.jsx(DisconnectButton, {
        disconnect: disconnect
    }) : /*#__PURE__*/ jsx_runtime_.jsx(ConnectButton, {
        connect: connect
    });
}

;// CONCATENATED MODULE: ./components/features/web3/Web3Address.tsx



function Web3Address() {
    const { address  } = (0,context/* useWeb3Context */.Z)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "border-grey md: w-full rounded-xl border sm:max-w-xl md:max-w-2xl",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row justify-between py-2 px-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "md:text-md text-left text-sm font-light lg:text-lg",
                        children: "Address"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "md:text-md truncate pl-4 text-right text-sm font-light lg:text-lg",
                        children: address
                    })
                ]
            })
        })
    }));
}

;// CONCATENATED MODULE: ./components/features/web3/index.ts




/***/ }),

/***/ 9337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* reexport */ Web3ContextProvider),
  "Z": () => (/* reexport */ useWeb3Context)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: external "walletlink"
var external_walletlink_ = __webpack_require__(4866);
var external_walletlink_default = /*#__PURE__*/__webpack_require__.n(external_walletlink_);
// EXTERNAL MODULE: external "web3modal"
var external_web3modal_ = __webpack_require__(2840);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: external "@metamask/detect-provider"
var detect_provider_ = __webpack_require__(3427);
var detect_provider_default = /*#__PURE__*/__webpack_require__.n(detect_provider_);
;// CONCATENATED MODULE: ./core/reducers/Web3Provider.ts
const web3InitialState = {
    provider: null,
    web3Provider: null,
    address: null,
    network: null,
    connect: null,
    disconnect: null
};
function web3Reducer(state, action) {
    switch(action.type){
        case "SET_WEB3_PROVIDER":
            return {
                ...state,
                provider: action.provider,
                web3Provider: action.web3Provider,
                address: action.address,
                network: action.network,
                chainId: action.chainId
            };
        case "SET_ADDRESS":
            return {
                ...state,
                address: action.address
            };
        case "SET_NETWORK":
            return {
                ...state,
                network: action.network
            };
        case "SET_CHAIN_ID":
            return {
                ...state,
                chainId: action.chainId
            };
        case "RESET_WEB3_PROVIDER":
            return web3InitialState;
        default:
            throw new Error();
    }
}

;// CONCATENATED MODULE: ./core/reducers/index.ts


;// CONCATENATED MODULE: ./core/hooks/Web3Client.ts








const providerOptions = {
    "custom-walletlink": {
        display: {
            logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
            name: "Coinbase",
            description: "Connect to Coinbase Wallet (not Coinbase App)"
        },
        options: {
            appName: "Coinbase",
            networkUrl: "https://rpc.ankr.com/avalanche_fuji-c",
            chainId: 43113
        },
        package: (external_walletlink_default()),
        connector: async (_, options)=>{
            const { appName , networkUrl , chainId  } = options;
            const walletLink = new (external_walletlink_default())({
                appName
            });
            const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
            await provider.enable();
            return provider;
        }
    },
    "custom-metamask": {
        display: {
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/768px-MetaMask_Fox.svg.png",
            name: "MetaMask",
            description: "Connect to Metamask"
        },
        options: {
            appName: "Metamask",
            networkUrl: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
            chainId: 1
        },
        package: (detect_provider_default()),
        connector: async ()=>{
            const provider = await detect_provider_default()();
        }
    }
};
let web3Modal;
if (false) {}
const useWeb3 = ()=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(web3Reducer, web3InitialState);
    const { provider: provider1 , web3Provider: web3Provider1 , address: address1 , network: network1  } = state;
    const connect = (0,external_react_.useCallback)(async ()=>{
        if (web3Modal) {
            // customWeb3Modal();
            try {
                const provider = await web3Modal.connect();
                const web3Provider = new external_ethers_.ethers.providers.Web3Provider(provider);
                const signer = web3Provider.getSigner();
                const address = await signer.getAddress();
                const network = await web3Provider.getNetwork();
                external_react_toastify_.toast.success("Connected to Web3");
                dispatch({
                    type: "SET_WEB3_PROVIDER",
                    provider,
                    web3Provider,
                    address,
                    network,
                    chainId: network.chainId
                });
            } catch (e) {
                console.log("connect error", e);
            }
        } else {
            console.error("No Web3Modal");
        }
    }, []);
    const disconnect = (0,external_react_.useCallback)(async ()=>{
        if (web3Modal) {
            web3Modal.clearCachedProvider();
            if ((provider1 === null || provider1 === void 0 ? void 0 : provider1.disconnect) && typeof provider1.disconnect === "function") {
                await provider1.disconnect();
            }
            external_react_toastify_.toast.error("Disconnected from Web3");
            dispatch({
                type: "RESET_WEB3_PROVIDER"
            });
        } else {
            console.error("No Web3Modal");
        }
    }, [
        provider1
    ]);
    // Auto connect to the cached provider
    (0,external_react_.useEffect)(()=>{
        if (web3Modal && web3Modal.cachedProvider) {
            connect();
        }
    }, [
        connect
    ]);
    // EIP-1193 events
    (0,external_react_.useEffect)(()=>{
        if (provider1 === null || provider1 === void 0 ? void 0 : provider1.on) {
            const handleAccountsChanged = (accounts)=>{
                external_react_toastify_.toast.info("Changed Web3 Account");
                dispatch({
                    type: "SET_ADDRESS",
                    address: accounts[0]
                });
            };
            // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
            const handleChainChanged = (_hexChainId)=>{
                if (false) {} else {
                    console.log("window is undefined");
                }
            };
            const handleDisconnect = (error)=>{
                // eslint-disable-next-line no-console
                console.log("disconnect", error);
                disconnect();
            };
            provider1.on("accountsChanged", handleAccountsChanged);
            provider1.on("chainChanged", handleChainChanged);
            provider1.on("disconnect", handleDisconnect);
            // Subscription Cleanup
            return ()=>{
                if (provider1.removeListener) {
                    provider1.removeListener("accountsChanged", handleAccountsChanged);
                    provider1.removeListener("chainChanged", handleChainChanged);
                    provider1.removeListener("disconnect", handleDisconnect);
                }
            };
        }
    }, [
        provider1,
        disconnect
    ]);
    return {
        provider: provider1,
        web3Provider: web3Provider1,
        address: address1,
        network: network1,
        connect,
        disconnect
    };
};

;// CONCATENATED MODULE: ./core/context/Web3Context.tsx




const Web3Context = /*#__PURE__*/ (0,external_react_.createContext)(web3InitialState);
const Web3ContextProvider = ({ children  })=>{
    const web3ProviderState = useWeb3();
    return(/*#__PURE__*/ jsx_runtime_.jsx(Web3Context.Provider, {
        value: web3ProviderState,
        children: children
    }));
};
function useWeb3Context() {
    return (0,external_react_.useContext)(Web3Context);
}

;// CONCATENATED MODULE: ./core/context/index.ts



/***/ })

};
;