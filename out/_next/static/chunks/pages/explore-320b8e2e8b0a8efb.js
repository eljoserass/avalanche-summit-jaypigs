(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[544],{1247:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explore",function(){return r(8340)}])},8340:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(9008),s=r(8100),i=r(7294),l=r(6727),a=r(8533),c=r(9287),u=r(1850),h=r(3948),d=r(2359),p=r(4155);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(){var e=(0,i.useState)(!1),t=e[0],r=e[1],f=(0,i.useState)(0),v=f[0],m=f[1],b=(0,i.useState)(0),y=b[0],w=b[1],x=(0,i.useState)("Select Sort"),S=x[0],T=x[1],E=(0,i.useState)([]),L=E[0],_=E[1],k=(0,i.useState)(!0),j=k[0],D=k[1],N=(0,i.useState)(!0),Y=N[0],M=N[1],P=(0,i.useState)(""),R=P[0],A=P[1],C=(0,i.useState)(0),F=C[0],O=C[1];(0,s.ZP)(j?R:null,(function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){e.tokens&&e.tokens.length>0&&(_(0==F?e.tokens:g(L).concat(g(e.tokens))),M(e.hasMore)),D(!1)}))})),(0,i.useEffect)((function(){var e=new URLSearchParams({sort:S,lowest:v.toString(),highest:y.toString(),statusFilterEnabled:t.toString(),perPage:14..toString(),page:F.toString()});A(p.env.NEXT_PUBLIC_SERVER_URL+"api/explore?"+e.toString()),D(!0)}),[S,v,y,t,F]);var H=function(e){O(0);var t=document.querySelector(".sort-popover > button");null===t||void 0===t||t.click(),T(e)};return(0,n.jsxs)("div",{children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"Jaypigs marketplace"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:"my-8 min-h-screen px-4 md:flex",children:[(0,n.jsx)(c.Z,{statusFilterEnabled:t,lowest:v,highest:y,setStatusFilterEnabled:function(e){r(e),O(0)},lowestPriceHandler:function(e){var t,r=null===(t=e.target)||void 0===t?void 0:t.value;m(parseFloat(r)),O(0)},highestPriceHandler:function(e){var t,r=null===(t=e.target)||void 0===t?void 0:t.value;w(parseFloat(r)),O(0)}}),(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsxs)("div",{className:"mb-4 flex items-center justify-between rounded-lg border border-solid border-dark-100 py-4 px-4 dark:border-dark-400",children:[(0,n.jsx)(l.J2,{className:"sort-popover relative",children:function(e){var t=e.open;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.J2.Button,{className:"\n                ".concat(t?"":"text-opacity-90","\n                 round-sm flex w-56 justify-between border border-solid border-dark-100 py-2 px-4 dark:border-dark-400 dark:bg-dark-300"),children:[(0,n.jsx)("span",{children:S}),(0,n.jsx)("svg",{viewBox:"0 0 32 32",focusable:"false",className:"h-6 w-6",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 10L26 20L24.6 21.4L16 12.8L7.4 21.4L6 20L16 10Z",fill:"currentColor"})})]}),(0,n.jsx)(l.uT,{as:i.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:(0,n.jsx)(l.J2.Panel,{className:"absolute left-1/2 z-10 mt-3 w-56 -translate-x-1/2 transform px-4 sm:px-0",children:(0,n.jsx)("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",children:(0,n.jsxs)("div",{className:"relative bg-white p-2",children:[(0,n.jsx)("button",{className:"w-full rounded-lg p-2 text-left text-dark-400 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",onClick:function(){return H("Price Ascending")},children:"Price Ascending"}),(0,n.jsx)("hr",{className:"border-t border-dark-100 dark:border-dark-300"}),(0,n.jsx)("button",{className:"w-full rounded-lg p-2 text-left text-dark-400 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",onClick:function(){return H("Price Descending")},children:"Price Decending"}),(0,n.jsx)("hr",{className:"border-t border-dark-100 dark:border-dark-300"}),(0,n.jsx)("button",{className:"w-full rounded-lg p-2 text-left text-dark-400 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",onClick:function(){return H("Recent Activity")},children:"Recent Activity"})]})})})})]})}}),(0,n.jsx)(d.Z,{href:"/explore/activity",className:"rounded-full border-0 bg-dark-500 bg-opacity-50 px-4 py-2 font-medium text-white hover:bg-dark-500 dark:bg-white dark:text-black",children:"Activity"})]}),(0,n.jsx)("div",{children:(0,n.jsx)(a.Z,{dataLength:L.length,next:function(){Y&&O(F+1)},className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7",hasMore:Y,loader:(0,n.jsx)(h.Z,{total:14}),children:L.map((function(e,t){return(0,n.jsx)(u.Z,{token:e},t)}))})})]})]})]})}},8533:function(e,t,r){"use strict";var n=r(7294),o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},o(e,t)};var s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)};var i="Pixel",l="Percent",a={unit:l,value:.8};function c(e){return"number"===typeof e?{unit:l,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:i,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:l,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),a):(console.warn("scrollThreshold should be string or number"),a)}var u=function(e){function t(t){var r=e.call(this,t)||this;return r.lastScrollTop=0,r.actionTriggered=!1,r.startY=0,r.currentY=0,r.dragging=!1,r.maxPullDownDistance=0,r.getScrollableTarget=function(){return r.props.scrollableTarget instanceof HTMLElement?r.props.scrollableTarget:"string"===typeof r.props.scrollableTarget?document.getElementById(r.props.scrollableTarget):(null===r.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},r.onStart=function(e){r.lastScrollTop||(r.dragging=!0,e instanceof MouseEvent?r.startY=e.pageY:e instanceof TouchEvent&&(r.startY=e.touches[0].pageY),r.currentY=r.startY,r._infScroll&&(r._infScroll.style.willChange="transform",r._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},r.onMove=function(e){r.dragging&&(e instanceof MouseEvent?r.currentY=e.pageY:e instanceof TouchEvent&&(r.currentY=e.touches[0].pageY),r.currentY<r.startY||(r.currentY-r.startY>=Number(r.props.pullDownToRefreshThreshold)&&r.setState({pullToRefreshThresholdBreached:!0}),r.currentY-r.startY>1.5*r.maxPullDownDistance||r._infScroll&&(r._infScroll.style.overflow="visible",r._infScroll.style.transform="translate3d(0px, "+(r.currentY-r.startY)+"px, 0px)")))},r.onEnd=function(){r.startY=0,r.currentY=0,r.dragging=!1,r.state.pullToRefreshThresholdBreached&&(r.props.refreshFunction&&r.props.refreshFunction(),r.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){r._infScroll&&(r._infScroll.style.overflow="auto",r._infScroll.style.transform="none",r._infScroll.style.willChange="unset")}))},r.onScrollListener=function(e){"function"===typeof r.props.onScroll&&setTimeout((function(){return r.props.onScroll&&r.props.onScroll(e)}),0);var t=r.props.height||r._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;r.actionTriggered||((r.props.inverse?r.isElementAtTop(t,r.props.scrollThreshold):r.isElementAtBottom(t,r.props.scrollThreshold))&&r.props.hasMore&&(r.actionTriggered=!0,r.setState({showLoader:!0}),r.props.next&&r.props.next()),r.lastScrollTop=t.scrollTop)},r.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},r.throttledOnScrollListener=function(e,t,r,n){var o,s=!1,i=0;function l(){o&&clearTimeout(o)}function a(){var a=this,c=Date.now()-i,u=arguments;function h(){i=Date.now(),r.apply(a,u)}function d(){o=void 0}s||(n&&!o&&h(),l(),void 0===n&&c>e?h():!0!==t&&(o=setTimeout(n?d:h,void 0===n?e-c:e)))}return"boolean"!==typeof t&&(n=r,r=t,t=void 0),a.cancel=function(){l(),s=!0},a}(150,r.onScrollListener).bind(r),r.onStart=r.onStart.bind(r),r.onMove=r.onMove.bind(r),r.onEnd=r.onEnd.bind(r),r}return function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?s(s({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var r=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=c(t);return n.unit===i?e.scrollTop<=n.value+r-e.scrollHeight+1:e.scrollTop<=n.value/100+r-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var r=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=c(t);return n.unit===i?e.scrollTop+r>=e.scrollHeight-n.value:e.scrollTop+r>=n.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=s({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),r=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return n.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},n.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&n.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},n.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!r&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(n.Component);t.Z=u}},function(e){e.O(0,[970,483,774,888,179],(function(){return t=1247,e(e.s=t);var t}));var t=e.O();_N_E=t}]);