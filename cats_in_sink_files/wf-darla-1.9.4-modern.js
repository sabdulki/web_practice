!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-darla",[],t):"object"==typeof exports?exports["wafer-darla"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-darla"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/entry.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=function(){function e(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),d=window.wafer,p=d.constants,v=d.WaferBaseClass,h=p.ATTR_PREFIX,y=["darla-config"],w=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.errorClass,i=r.selector,s=r.successClass;n(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:o,selector:i,successClass:s},{STATE_ATTRS:y})),c=(e.getAttribute(h+"margin")||"").split(" "),d=f(c,2),p=d[0],v=void 0===p?"1200":p,w=d[1],g=void 0===w?"0":w;return l._util=u({},l._util,{"darla-config":e.getAttribute(h+"darla-config"),offsetX:Number(g)||0,offsetY:Number(v)||0,trigger:e.getAttribute(h+"trigger")||"viewport"}),l}return o(t,e),c(t,[{key:"stateDidUpdate",value:function(){this._stateDidUpdate()}},{key:"config",get:function(){var e=this._util;return{offsetX:e.offsetX,offsetY:e.offsetY,trigger:e.trigger}}}]),t}(v);w.events={};var g=w,m=function(){function e(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),O=function e(t,r,n){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,r,n)}if("value"in a)return a.value;var i=a.get;if(void 0!==i)return i.call(n)},E=window.wafer.controllers.WaferBaseController,A=window.wafer,I=A.base,P=A.utils,j=P.getUrlParameterValueByName,C=P.elementInView,x=P.debounce,k=["wafer-darla-clean","wafer-darla","parent-sdaAdvText","sdaAdvText"],D=function(e){function t(e){var r=e.errorClass,n=void 0===r?"wafer-darla-error":r,a=e.root,o=void 0===a?document:a,l=e.selector,u=void 0===l?".wafer-darla":l,f=e.successClass,c=void 0===f?"wafer-darla-done":f,d=e.validateDelay,p=void 0===d?25:d;i(this,t);var v=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:o,selector:u,props:{errorClass:n,selector:u,successClass:c},WaferClass:g}));v._validateWithDebounce=x(function(){v.validate()},p,v),v._state=b({},v._state,{addedListenerForDarlaEvents:!1,darlaElemInProgress:null,fetchInQueue:!1,positionsAddingMap:new Map,yieldAdInstances:new Map});var h=v;return g.prototype._stateDidUpdate=function(){var e=this._util.elem,t=this.config,r=t.offsetX,n=t.offsetY,a=t.trigger,o=!1;(o="viewport"!==a||C(e,{offsetX:r,offsetY:n},I.viewport))&&h.triggerForElements([e],{source:"state"})},v.sync(),v}return l(t,e),_(t,[{key:"updateElemId",value:function(e,t,r,n){t&&this.updateElemId(e,"",r,n),k.forEach(function(a){var o=e.querySelector("#"+a+"-"+(t+r));o&&(o.classList.add("wafer-darla-id-updated"),o.setAttribute("id",a+"-"+(t+n)))})}},{key:"getUpdatedPos",value:function(e){var t=this._state.positionsAddingMap;return e.split(",").map(function(e){var r=e.split("-"),n=m(r,1),a=n[0],o=t.get(a)||1,i=o+1;i>=10&&(i=1);var s=a+"-"+o;return t.set(a,i),s}).join(",")}},{key:"handleFailure",value:function(e,t,r){var n=this._state;e&&e.style&&(e.style.display="none"),n.darlaElemInProgress=null,I.emitWaferEvent("darla:fetch:failure",{elem:e,meta:{data:r,id:t}}),n.fetchInQueue&&(n.fetchInQueue=!1,window.wafer.base.sync(document.body))}},{key:"makeDarlaCall",value:function(e,t,r,n){var a=this,o=r.enabled;if((void 0===o||o)&&!this._state.fetchInQueue){var i=r.addAutoEvent,s=void 0!==i&&i,l=r.addCleanContainer,u=void 0!==l&&l,f=r.authed,c=void 0===f?"0":f,d=r.bucket,p=void 0===d?"testBucket":d,v=r.device,h=void 0===v?"smartphone":v,y=r.flex,w=r.height,g=void 0===w?250:w,b=r.includeRapidKey,_=void 0!==b&&b,O=r.intl,E=void 0===O?"us":O,A=r.meta,P=void 0===A?{}:A,C=r.metaSize,x=r.npv,k=void 0===x||x,D=r.rid,S=void 0===D?"testRid":D,T=r.rotateAds,R=void 0!==T&&T,L=r.rotateTime,F=void 0===L?3e4:L,Q=r.site,Y=void 0===Q?"fp":Q,W=r.siteAttribute,U=r.ssl,X=void 0===U||U,z=r.supports,M=r.uuid,N=r.width,B=void 0===N?300:N,V=r.yieldAd,K=window.DARLA;if(V){var q=V.enabled;if("true"===q||!0===q){var H=this._state.elementInstances,J=H.get(n);return I.emitWaferEvent("darla:complete",{elem:n,meta:{darlaConfig:r}}),this._state.yieldAdInstances.set(n,{darlaConfig:r}),void J.destroy()}}if(e&&t&&K){var G=e.split(",");e=this.getUpdatedPos(e);var Z=window.vzm&&window.vzm.getPageContext&&window.vzm.getPageContext()||window.YAHOO&&window.YAHOO.context||{},$="";Z.ynet&&(t=j("_spaceid",window.location.href)||t,$=j("atwKV",window.location.href)||$);var ee={pg:{device:h,intl:E,property:Y,rid:S,test:p}},te='Y-BUCKET="'+p+'"';if(W){var re=W.split("pct"),ne=m(re,2),ae=ne[0],oe=ne[1],ie="",se=window.rapidInstance;if(se&&se.getRapidAttribute&&(-1===decodeURIComponent(W).indexOf("lu:")&&(ie="lu:"+(Z.authed||c)),_)){var le=se.getRapidAttribute("keys"),ue=le.pd,fe=void 0===ue?"":ue,ce=le.pt,de=void 0===ce?"":ce,pe=le.ver,ve=void 0===pe?"":pe;ie=ie+(fe?";pd:"+fe:"")+(de?";pt:"+de:"")+(ve?";ver:"+ve:"")}te+=ae&&oe?" "+ae+ie+";pct"+oe:" "+W}else"tw"===E&&(te+=' rs="lu:'+c+'"');$&&(te+=" "+$),-1===te.indexOf("ctout")&&(te+=" ctout=380");var he=e.replace(",","_"),ye="wafer_darla_fetch_"+he;K.add({name:ye,autoStart:R,autoRT:F,ps:e,sa:te,sp:t,ref:window.location.href,npv:k,ssl:X,ult:ee});var we=e.split(","),ge=K.evtSettings("AUTO")||{},me={autoIV:1,autoMax:25,autoRT:"10000"};we.forEach(function(e,t){var r=G[t],o=P[r]||P[e]||{},i=o.width||B,l=o.height||g,f=o.metaSize||C,c=o.supports||z,d=o.flex||y,p=o.css,v=M?M+"-":"",h={pos:e,dest:"wafer-darla-"+v+e,w:i,h:l};u&&(h.clean="wafer-darla-clean-"+v+e),a.updateElemId(n,v,r,e),f&&(h.metaSize=f),c&&(h.supports=c),d&&(h.flex=d),p&&(h.css=p),s&&ge.ps&&!ge.ps[e]&&(ge.ps[e]=Object.assign({},{id:e},me)),K.addPos(h)}),s&&K.add(ge),this._state.darlaElemInProgress={elem:n,id:ye},this._state.fetchInQueue=!0,K.event(ye)}}}},{key:"listenToDarlaEvents",value:function(){var e=this,t=this._state;if(!t.addedListenerForDarlaEvents){t.addedListenerForDarlaEvents=!0;var r=window.DARLA,n=r.config(),a=n.onFailure,o=n.onSuccess;r.config().onSuccess=function(){for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];var s=t.darlaElemInProgress;if(s){var l=s.id;if(l!==a[0])r.event(l);else{var u=s.elem,f=e._state.elementInstances,c=f.get(u),d=c.instance,p=e._options.props,v=p.errorClass,h=p.successClass;d.destroy(),u.classList.add(h),u.classList.remove(v),t.darlaElemInProgress=null,I.emitWaferEvent("darla:fetch:success",{elem:u,meta:{data:a,id:l}}),t.fetchInQueue&&(t.fetchInQueue=!1,window.wafer.base.sync(document.body))}}else t.fetchInQueue=!1,window.wafer.base.sync(document.body);o&&o.apply(r,a)},r.config().onFailure=function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];var s=t.darlaElemInProgress;if(s){var l=s.id;if(l!==o[0])r.event(l);else{var u=s.elem,f=e._options.props,c=f.errorClass,d=f.successClass,p=parseInt(u.getAttribute("data-wf-retry-count")||0,10)+1;if(p<4)return u.setAttribute("data-wf-retry-count",p),e._state.fetchInQueue=!1,void e.triggerForElements([u]);e._state.elementInstances.get(u).instance.destroy(),u.classList.add(c),u.classList.remove(d),e.handleFailure(u,l,o)}}else e._state.fetchInQueue=!1,window.wafer.base.sync(document.body);a&&a.apply(r,o)}}}},{key:"_checkIfDarlaNameSpaceExist",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(function(r,n){if(t>5)return n(new Error("namespace does not exist"));if(window.DARLA)return r();var a=t+1;setTimeout(function(){e._checkIfDarlaNameSpaceExist(a).then(function(){r()}).catch(function(e){n(e)})},50*a)})}},{key:"triggerForElements",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.source;this._checkIfDarlaNameSpaceExist().then(function(){var r=window.DARLA;if(r){if(t.listenToDarlaEvents(),r.inProgress())return void(t._state.fetchInQueue=!0);var a=t._state.elementInstances;e.some(function(e){if(r.inProgress())return t._state.fetchInQueue=!0,!0;var o=a.get(e),i=o.instance,s={};try{if(!(s=JSON.parse(i._util["darla-config"])))return!1;var l=s.enabled,u="false"===l||!1===l;s.enabled=!u;var f=s,c=f.pos,d=f.spaceid,p=f.yieldAd;if("state"===n&&p){var v=p.enabled;if("true"===v||!0===v)return!1}if(c&&d&&r)return t.makeDarlaCall(c,d,s,e),!0}catch(r){e.classList.add(t._options.props.errorClass),i.destroy()}})}}).catch(function(){})}},{key:"handleScroll",value:function(){this._validateWithDebounce()}},{key:"handleResize",value:function(){this._validateWithDebounce()}},{key:"willValidate",value:function(e){var t=[],r=this._state.elementInstances;e.forEach(function(e){var n=r.get(e),a=n.instance,o=a.config,i=o.offsetX,s=o.offsetY,l=o.trigger;"viewport"===l&&C(e,{offsetX:i,offsetY:s},I.viewport)?t.push(e):"onScroll"===l&&window.scrollY>2?t.push(e):"onLoad"===l&&t.push(e)}),t.length&&this.triggerForElements(t)}},{key:"destroy",value:function(e){if(e){var r=this._state.yieldAdInstances;if(r.has(e)){var n=r.get(e),a=n.darlaConfig;I.emitWaferEvent("darla:destroyed",{elem:e,meta:{darlaConfig:a}}),r.delete(e)}}O(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this,e)}}]),t}(E),S=D;t.default=new S({selector:"wafer-darla"})}})});