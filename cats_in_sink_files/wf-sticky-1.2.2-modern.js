!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wafer-sticky",[],e):"object"==typeof exports?exports["wafer-sticky"]=e():(t.wafer=t.wafer||{},t.wafer.wafers=t.wafer.wafers||{},t.wafer.wafers["wafer-sticky"]=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(o[i])return o[i].exports;var r=o[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://s.yimg.com/aaq/wf/",e(e.s="./src/entry.js")}({"./src/entry.js":function(t,e,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},f=function(){function t(t,e){var o=[],i=!0,r=!1,n=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(t){r=!0,n=t}finally{try{!i&&a.return&&a.return()}finally{if(r)throw n}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),y=function t(e,o,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,o);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:t(n,o,i)}if("value"in r)return r.value;var s=r.get;if(void 0!==s)return s.call(i)},p=window.wafer,d=p.constants,h=p.features,v=p.utils,b=p.WaferBaseClass,g=v.findAncestor,m=d.ATTR_PREFIX,w=function(t){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.selector;i(this,e);var s=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,{selector:n},{})),a=t.getAttribute(m+"sticky-boundary"),c=t.getAttribute(m+"sticky-target"),u=t.getAttribute(m+"sticky-position"),y=(t.getAttribute(m+"sticky-offset")||"").split(" "),p=f(y,4),d=p[0],h=p[1],v=p[2],b=p[3];s._util=l({},s._util,{elem:t,targetElem:c&&(a&&g(t,a)||document.body).querySelector(c)||t,offsetBottom:void 0!==b&&b,offsetLeft:void 0!==h&&h,offsetRight:void 0!==v&&v,offsetTop:void 0!==d&&d,stickyPosition:u});var w=s._util.targetElem,k=w.style,_=k.bottom,O=k.left,S=k.position,j=k.right,E=k.top,P=k.width,T=w.getBoundingClientRect(),x=T.height,C=t.getBoundingClientRect(),R=C.height;return s._util.stickyAllowed=x<=R,s._state={isSticky:!1,targetElemOffsetTop:w.offsetTop,previousPositionValue:{bottom:_,left:O,position:S,right:j,top:E,width:P},scrollContainerObserver:null},t===w&&s.addEventListeners(),s}return n(e,t),u(e,[{key:"addEventListeners",value:function(){var t=this;if(h.mutationObserver){var e=this._util.targetElem;this._state.scrollContainerObserver=new MutationObserver(function(){t._state.isSticky&&t.addSticky("resize")}),this._state.scrollContainerObserver.observe(e,{childList:!0,subtree:!0})}}},{key:"updateStickyProperties",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this._util.targetElem;Object.assign(e.style,{width:"",position:""}),Object.assign(e.style,{position:"fixed",width:e.offsetWidth+"px"},t)}},{key:"destroy",value:function(){var t=this._state.scrollContainerObserver;t&&t.disconnect(),y(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"addSticky",value:function(t){var e="resize"===t,o=this._state.isSticky;if(e||!o){var i=this._util,r=i.elem,n=i.offsetLeft,s=i.offsetRight,a=i.offsetTop,c=i.stickyPosition,l=i.targetElem,f={};o||(this._state.targetElemOffsetTop=l.offsetTop),"bottom"===c?f.bottom="0":a&&(f.top=a),n?f.left=n:s&&(f.right=s),this._state.isSticky=!0,r!==l?Object.assign(l.style,{position:"fixed"},f):this.updateStickyProperties(f),l.classList.add("sticky-active")}}},{key:"makeStickyFlow",value:function(){var t=this._util,e=t.elem,o=t.offsetBottom,i=t.offsetLeft,r=t.offsetRight,n=t.stickyPosition,s=t.targetElem,a=e.getBoundingClientRect(),c=s.getBoundingClientRect(),l=c.height,f=a.bottom,u={};"bottom"===n?u.bottom=parseInt(o,10)+"px":u.top=f-l-parseInt(o,10)+"px",i?u.left=i:r&&(u.right=r),this._state.isSticky=!0,Object.assign(s.style,{position:"fixed"},u),s.classList.add("sticky-flow")}},{key:"removeSticky",value:function(){if(this._state.isSticky){var t=this._util.targetElem;t.classList.remove("sticky-flow","sticky-active"),this._state.isSticky=!1,Object.assign(t.style,this._state.previousPositionValue)}}},{key:"config",get:function(){var t=this._util,e=t.offsetBottom,o=t.offsetTop,i=t.stickyAllowed,r=t.targetElem;return{isSticky:this._state.isSticky,offsetBottom:e,offsetTop:o,stickyAllowed:i,targetElem:r}}}]),e}(b),k=w,_=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),O=window.wafer,S=O.base,j=O.controllers,E=O.utils,P=E.elementInView,T=E.throttle,x=j.WaferBaseController,C=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.root,i=void 0===o?document:o,r=t.selector,n=t.validateDelay,c=void 0===n?15:n;s(this,e);var l=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{root:i,selector:r,props:{selector:r},WaferClass:k}));return l._validateWithThrottle=T(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.source;l.validate({source:e})},c,l),l.sync(),l}return c(e,t),_(e,[{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle({source:"resize"})}},{key:"didSync",value:function(){var t=this._state,e=t.elementInstances,o=t.mounted;0!==e.size&&!o&&(this._state.mounted=!0)}},{key:"handleSelfSticky",value:function(t,e,o){if(window.pageYOffset+window.innerHeight>t+e._state.targetElemOffsetTop)return void e.addSticky(o);e.removeSticky(o)}},{key:"willValidate",value:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.source,r=this._state.elementInstances;t.forEach(function(t){var o=r.get(t),n=o.instance,s=P(t,{},S.viewport),a=n.config,c=a.isSticky,l=a.stickyAllowed;if(!s||!l)return void(c&&n.removeSticky());var f=n.config.targetElem,u=f.getBoundingClientRect(),y=u.height;if(f!==t){var p=t.getBoundingClientRect(),d=p.bottom,h=p.top,v=n.config,b=v.offsetTop,g=v.offsetBottom;g=g&&parseInt(g,10),b=b&&parseInt(b,10),d-(y+g+b)<0?n.makeStickyFlow(i):c&&h-b>=0?n.removeSticky(i):h-b<0&&n.addSticky(i)}else e.handleSelfSticky(y,n,i)})}}]),e}(x),R=C;e.default=new R({selector:".wafer-sticky"})}})});