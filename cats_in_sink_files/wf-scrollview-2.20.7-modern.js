!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-scrollview",[],t):"object"==typeof exports?exports["wafer-scrollview"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-scrollview"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var a=i[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/entry.js":function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),h="next",v="prev",f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.windowLimit,a=void 0===i?5:i;r(this,e),this.active=null,this.elemMapping=new Map,this.tail=null,this.cycle=!1,this.head=null,this.scrollItemsLimit=Math.floor(a/2)}return d(e,[{key:"add",value:function(e){var t=this.tail,i=this.elemMapping.size;if(t){var r=this.elemMapping.get(t);this.elemMapping.set(e,new Map([["index",i],[h,r.get(h)],[v,t]])),this.elemMapping.get(this.tail).set(h,e),this.elemMapping.get(this.head).set(v,e),this.tail=e}else this.elemMapping.set(e,new Map([["index",i],[h,e],[v,e]])),this.head=this.tail=e;this.active||(this.active=e)}},{key:"remove",value:function(e){var t=this.elemMapping.get(e),i=t.get(v),r=t.get(h),a=this.elemMapping.get(i),s=this.elemMapping.get(r);a.set(h,r),s.set(v,i),e===this.active&&(this.active=a),e===this.tail&&(this.tail=i),e===this.head&&(this.head=r),this.elemMapping.delete(e)}},{key:"getActive",value:function(){return this.active}},{key:"setNextAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(h)}},{key:"setPreviousAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(v)}},{key:"getElementToAppend",value:function(){var e=this.elemMapping.get(this.active),t=e.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;if(this.cycle){i<=2?r=0:i<=3&&(r=1);return this.getForward(r+1)}return t<r?null:i>t+r-1?this.getForward(r+1):null}},{key:"getElementToPrepend",value:function(){var e=this.elemMapping.get(this.active),t=e.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;return this.cycle?this.getBackward(r):t>=i-r?null:t-r-1>=0?this.getBackward(r+1):null}},{key:"getForward",value:function(e){for(var t=0,i=this.active;t++<e;){if(i=this.elemMapping.get(i).get(h),!this.cycle&&i===this.head)return null}return i}},{key:"getBackward",value:function(e){for(var t=0,i=this.active;t++<e;){if(i=this.elemMapping.get(i).get(v),!this.cycle&&this.tail===i)return null}return i}},{key:"appendWithReplace",value:function(e,t){e=e||this.active;var i=this.elemMapping.get(e),r=i.get(v),a=i.get(h),s=t[0],n=s,o=r;this.elemMapping.get(r).set(h,n);for(var l=1;l<t.length;l++){var u=t[l];this.elemMapping.set(n,new Map([[h,u],[v,o]])),o=n,n=u}this.elemMapping.set(n).set(n,new Map([[h,a],[v,o]])),this.elemMapping.get(a).set(v,n),e===this.head?this.head=s:e===this.tail&&(this.tail=n),e===this.active&&(this.active=s),this.elemMapping.delete(e);for(var c=this.elemMapping.get(r),d=c.get("index");c;){var f=c.get(h);c=this.elemMapping.get(f),c.set("index",++d),f===this.tail&&(c=null)}}},{key:"size",get:function(){return this.elemMapping.size}}]),e}(),p=f,m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},g=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),w=function e(t,i,r){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,i);if(void 0===a){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,i,r)}if("value"in a)return a.value;var n=a.get;if(void 0!==n)return n.call(r)},y=window.wafer,b=y.base,_=y.constants,A=y.features,E=y.utils,S=y.WaferBaseClass,k=A.smoothScroll,C=A.transformProperty,T=_.ATTR_PREFIX,L=E.bindEvent,x=E.clearAndSetInnerHTML,M=E.clearTimeout,O=E.convertNodeListToArray,P=E.elementInView,D=E.fetchWithCache,W=E.findAncestor,B=E.getConfigFromJSONScriptNode,N=E.getFocusableElems,I=E.isVisible,V=E.removeTransition,j=E.setTimeout,F=E.setTransition,X=E.throttle,U=E.unbindEvent,z=5,Y=250,R="ease-out",H="active",q="visited",J=["indicatorClick","indicatorMouseLeave","indicatorMouseover","next","pause","prev","resume","stateDidUpdate","tabClick"],G=["index"],K="ontouchstart"in window,Q=function(e,t){K&&(e.style.cursor=t)},Z=function(){var e=[],t=!1;return{add:function(t,i){e.push(function(e){return function(){return t.call(e)}}(i)),this.exec(i._util.transitionDuration)},exec:function(i){var r=this;t||(t=!0,j(function(){var a=e.shift();switch(t=!1,a.call(),e.length){case 0:return;case 1:r.exec(i);case 2:r.exec(i+50);default:r.exec(0)}},i))}}}(),$=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.counter,a=void 0===r?0:r,o=i.syncDelay,l=void 0===o?25:o;s(this,t);var u=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{STATE_ATTRS:G})),c=e.getAttribute(T+"behavior"),d=e.getAttribute(T+"snap-behavior");if(u._util=m({},u._util,{elem:e,snapBehavior:d,sliderElem:O(e.getElementsByClassName("slides"))[0]||e,behavior:c,nextBtn:O(e.getElementsByClassName("next-btn"))[0],prevBtn:O(e.getElementsByClassName("prev-btn"))[0]}),J.forEach(function(e){u[e]=u[e].bind(u)}),"native"===c){var h=e.getAttribute(T+"scroll-snap");u._util.isUsingScrollSnap=null===h||void 0===h?0:Number(h);var v=u._util.sliderElem;u._state=u._state||{},u._state.activeElem=null,u._syncWithThrottle=X(function(){b.sync(v)},l,u);var f=O(v.children);return f.some(function(e){return!!e.classList.contains(H)&&(u._state.activeElem=e,!0)}),h&&f.some(function(e){return!e.classList.contains("tab")||(e.classList.add("has-scrollsnap-click","has-click"),!1)}),u._state.activeElem=u._state.activeElem||f[0],u._state.activeElem.classList.add("active"),u.snapNativeScrollViewToActiveElement({calledOnLoad:!0,source:"onLoad"}),u.checkAndAddActiveClassForNativeOverflow(),u.addEventListeners(),n(u)}var g=e.getAttribute(T+"edge-padding")||"",w=parseInt(g,10)||0,y=parseInt(e.getAttribute(T+"right-padding"),10)||0,_=e.getAttribute(T+"resize-end"),A=e.getAttribute(T+"boundary"),E=e.getAttribute(T+"pagination-target"),S=parseInt(e.getAttribute(T+"has-indicator-pagination"),10)||0,k=e.getAttribute(T+"trigger-wf-during-transition"),C=e.getAttribute(T+"scrollview-td"),L=Number(e.getAttribute(T+"auto-switch"))||0,x=Number(e.getAttribute(T+"auto-switch-disable-hover"))||0,M=Number(e.getAttribute(T+"disable-touch"))||0,P=Number(e.getAttribute(T+"disable-click-navigation"))||0,D=Number(e.getAttribute(T+"auto-switch-timeout"))||2e3,N=e.getAttribute(T+"scrollview-ttf"),I=e.getElementsByClassName("wafer-indicators-counts")[0],V=B(I).counts,U=E&&O(document.body.querySelectorAll(E))||O(e.getElementsByClassName("indicators")),K=e.getAttribute(T+"cycle"),Z=void 0,$=void 0,ee=void 0,te=void 0,ie=void 0;K=null===K||void 0===K?0:Number(K),U.some(function(e){Z=e.getAttribute(T+"pagination-type")||"default","count"===Z?($=O(e.getElementsByClassName("current-page"))[0],te=e):(ie=e,ee=e?O(e.children):null)});var re=new p({windowLimit:z}),ae=A&&W(e,A);re.cycle=K;var se=u._util=m({},u._util,{autoSwitchDisableHover:x,autoSwitchTimeout:D,_switchScrollTimeout:null,boundaryElem:ae,counter:a,cycle:K,dataList:re,disableClickNavigation:P,disableTouch:M,drag:{endX:0,endY:0,isVerticalDirection:!1,startX:0,startY:0},edgePadding:w,elem:e,index:null,indicatorCountElem:$,indicatorElems:U,indicatorItems:ee,indicatorPagination:S,indicatorsCustomCount:V,indicatorType:Z,indicatorWithCountElem:te,indicatorWithoutCountElem:ie,resizeEnd:null===_||void 0===_?0:Number(_),rightPadding:y,shouldAutoSwitch:L,sliderItemsDataMapping:new Map,transitionDuration:null===C||void 0===C?Y:Number(C),transitionTimingFunction:null===N||void 0===N?R:N,triggerWafersDuringTransition:"1"===k?1:0});g&&-1!==g.indexOf("%")&&(se.edgePaddingPercentage=parseInt(g.replace("%",""),10),se.edgePadding=0),u._state={autoSwitchInProgress:!1,autoSwitchPausedByUser:!1,hasBeenThreadmilled:!1,mouseOnElement:!1,slideWidth:null,triggerNodeMap:new Map,virtualCounter:null},se.sliderItems=O(se.sliderElem.children);var ne=se.sliderItems.length;if(u._state.slideWidth=100/ne,u.updateWidth(),F(se.sliderElem,"transform",se.transitionDuration,se.transitionTimingFunction),Q(se.sliderElem,"-webkit-grab"),se.edgePaddingPercentage){var oe=se.itemWidth*se.edgePaddingPercentage/100;se.sliderElem.style["padding-left"]=oe+"px"}else se.sliderElem.style["padding-left"]=se.edgePadding+"px";for(var le=document.createDocumentFragment(),ue=void 0,ce=!1,de=0;de<ne;de++){var he=se.sliderItems[de];re.add(he),he.style.width=u._state.slideWidth+"%",!ce&&de>0&&he.classList.contains(H)&&(ue=de,ce=!0),le.appendChild(he)}if(se.sliderElem.appendChild(le),ue)for(var ve=0;ve<ue;ve++)u.showCurrent(1);return u.addEventListeners(),u.addAriaAttributes(),0!==a||ue||(u.preFetch(),u.updateIndicators(a),u.updateButtons(!0),re.getActive().classList.add(H,q)),e.classList.add("wafer-scrollview-rendered"),window.wafer.ready(function(){j(function(){u._util.index&&u.scrollToIndex(u._util.index),b.emitWaferEvent("scrollview:ready",{elem:e,meta:{}})},40)}),u}return o(t,e),g(t,[{key:"addAriaAttributes",value:function(e){var t=this._util;t.sliderItems=O(t.sliderElem.children),e=e||t.dataList.getActive();for(var i=t.sliderItems.length,r=!1,a=0;a<i;a++){var s=t.sliderItems[a];r=e!==s,s.setAttribute("aria-hidden",r+"");var n=N(s);r?n.forEach(function(e){e.setAttribute("tabindex","-1")}):n.forEach(function(e){e.removeAttribute("tabindex")})}}},{key:"slidesHasBeenUpdated",value:function(){var e=this._util;e.sliderItems=O(e.sliderElem.children);var t=e.sliderItems.length;this._state.slideWidth=100/t;for(var i=0;i<t;i++){e.sliderItems[i].style.width=this._state.slideWidth+"%"}this.updateWidth()}},{key:"updateWidth",value:function(){var e=this._util,t=this._state.virtualCounter,i=e.edgePadding,r=e.edgePaddingPercentage,a=e.rightPadding,s=e.sliderElem,n=e.sliderItems;s.style.width="";var o=s.clientWidth;if(r){var l=o*e.edgePaddingPercentage/100;e.sliderElem.style["padding-left"]=l+"px",e.itemWidth=o-2*l}else e.itemWidth=i?o-2*i:a?o-a:o;s.style.width=e.itemWidth*n.length+"px",s.style[C]="translateX(-"+(t*e.itemWidth+this.negativeWidthCoefficient)+"px)"}},{key:"removeSlide",value:function(e){var t=this._util,i=t.sliderItems.indexOf(e);if(-1!==i){var r=t.indicatorItems[i],a=t.dataList;e.parentNode.removeChild(e),this.slidesHasBeenUpdated(),r.parentNode.removeChild(r),t.indicatorItems.splice(i,1),a.remove(e)}}},{key:"addEventListeners",value:function(){var e=this,i=this._util,r=i.behavior,a=i.elem,s=i.sliderElem;if("native"===r)return window.wafer.ready(function(){window.wafer.on("video:mediacurrent",function(){var t=s.getElementsByClassName("active")[0],i=s.getElementsByClassName("wafer-playlist-active")[0],r=O(s.children).indexOf(i);if(t!==i&&-1!==r){var a=i.getBoundingClientRect(),n=a.width,o=r*n;t.classList.remove("active"),i.classList.add("active"),e._state.activeElem=i,k?s.scrollTo({behavior:"smooth",left:o,top:0}):s.scrollTo(o,0),e.updateButtons(!0)}})}),void L(s||a,"scroll",this._syncWithThrottle);var n=this._util.indicatorItems;if(this.setTimeoutForAutoSwitch(),n){var o=this._util.indicatorWithoutCountElem;o&&(n.forEach(function(e,t){e.setAttribute("data-index",t)}),L(o,"click",this.indicatorClick));this._util.shouldAutoSwitch&&o&&(L(o,"mouseover",this.indicatorMouseover),L(o,"mouseleave",this.indicatorMouseLeave))}w(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addEventListeners",this).call(this)}},{key:"scrollToIndex",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.source,r=this._util,a=r.behavior,s=r.counter;if("native"===a){var n=this._state.activeElem,o=O(n.parentNode.children),l=o[e];if(l===n)return;n.classList.remove("active"),this._state.activeElem=l,this._state.activeElem.classList.add("active"),this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"indexChange"})}else if(s>e)for(var u=0;u<s-e;u++)this.showCurrent(-1,{source:i});else if(s<e)for(var c=0;c<e-s;c++)this.showCurrent(1,{source:i})}},{key:"pauseAutoSwitch",value:function(){if(this._util.shouldAutoSwitch){var e=this._util.sliderElem.parentNode;this._state.autoSwitchInProgress=!1,this._util._switchScrollTimeout&&M(this._util._switchScrollTimeout,this),e&&e.setAttribute("aria-busy","false")}}},{key:"setTimeoutForAutoSwitch",value:function(){var e=this;if(this._util.shouldAutoSwitch&&!this._state.autoSwitchPausedByUser&&!this._state.autoSwitchInProgress&&!this._state.mouseOnElement){this._state.autoSwitchInProgress=!0;var t=this._util.autoSwitchTimeout;this.pauseAutoSwitch(),this._util._switchScrollTimeout=j(function(){e.showCurrent(1,{source:"autoscroll",type:"next"})},t,this)}}},{key:"removeEventListeners",value:function(){var e=this._util,i=e.behavior,r=e.elem,a=e.indicatorWithCountElem,s=e.shouldAutoSwitch,n=e.sliderElem;if("native"===i)return void U(n||r,"scroll",this._syncWithThrottle);a&&U(a,"click",this.indicatorClick),s&&a&&(L(a,"mouseover",this.indicatorMouseover),L(a,"mouseleave",this.indicatorMouseLeave)),this.pauseAutoSwitch(),w(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"removeEventListeners",this).call(this)}},{key:"preFetch",value:function(){if(!window.wafer.base.isBot)for(var e=this._util.dataList,t=0;t<3;t++){var i=e.getForward(t),r=e.getBackward(t);i&&this.renderSlide(i,{prefetch:!0}),r&&this.renderSlide(r,{prefetch:!0})}}},{key:"snapNativeScrollViewToActiveElement",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.calledOnLoad,i=void 0!==t&&t,r=e.source,a=this._util.sliderElem,s=this._state.activeElem;if(!s||i&&0===a.scrollLeft)return void this.updateButtons(!0);var n=this._util.isUsingScrollSnap,o=parseInt(window.getComputedStyle(a).scrollPaddingLeft.replace("px",""),10)||0,l=s.offsetLeft-a.scrollLeft;l-="click"===r?a.clientWidth/2-s.offsetWidth/2+o:s.offsetWidth/2,n?k?a.scrollBy({behavior:"smooth",left:l,top:0}):a.scrollBy(l,0):a.scrollLeft+=l,this.updateButtons(!0),b.emitWaferEvent("scrollview:change",{elem:s,meta:{source:r}})}},{key:"handleResize",value:function(){if("native"===this._util.behavior)return void this.checkAndAddActiveClassForNativeOverflow();var e=this._util.sliderElem;if(I(e)){V(e);var t=this._util,i=t.cycle,r=t.transitionDuration,a=t.transitionTimingFunction;i?this.slidesHasBeenUpdated():this.updateWidth(),j(function(){F(e,"transform",r,a)},0)}}},{key:"handleFetch",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.fetchBody,a=i.fetchUrl,s=i.prefetch,n=void 0!==s&&s,o=i.replace,l=void 0!==o&&o,u=i.resultSelector;if(!n||e.parentNode){var c=this._util,d=c.dataList,h=c.sliderItemsDataMapping;h.has(e)||h.set(e,{});var v=h.get(e);!a||void 0!==v.fetchStatus&&2!==v.fetchStatus?(n?b.prefetch(e):b.sync(e),l&&this.slidesHasBeenUpdated()):(v.fetchStatus=0,D(a,{body:r}).then(function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.assets,a=void 0===r?{}:r,s=i.html;if(!t._destroyed&&s){var o=void 0,c=!1;if(b.destroy(e),l){var h=document.createElement("div"),f=e.parentNode,p=O(f.children);h.innerHTML=s;var m=u&&h.querySelector(u),g=O((m||h||{}).children),w=p.indexOf(e),y=e===d.tail;d.appendWithReplace(e,g),-1!==w&&(g.forEach(function(t){f.insertBefore(t,e)}),y&&(f.removeChild(p[0]),t._state.virtualCounter=Math.floor(z/2),c=e!==d.tail),f.removeChild(e)),o=f,t._state.hasBeenThreadmilled=!1}else x(e,s),o=e;v.fetchStatus=1,b.syncAssets(a),n?b.prefetch(e):b.sync(o),c&&V(t._util.sliderElem),l&&t.slidesHasBeenUpdated()}}).catch(function(i){t._destroyed||(b.emitError({name:"WaferScrollview",elem:e,meta:{fetchUrl:a},stack:i.stack||i.message}),v.fetchStatus=2)}))}}},{key:"renderSlide",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.prefetch,r=void 0!==i&&i,a=this._util.sliderElem;if(!r||P(a,{offsetX:0,offsetY:0},b.viewport)){var s=void 0,n=void 0,o=void 0,l=void 0,u=e.getAttribute(T+"url");switch(u&&(s="fetch",o=!!Number(e.getAttribute(T+"replace")),n=e.getAttribute(T+"result-selector"),l=e.getAttribute(T+"body")),s){case"fetch":this.handleFetch(e,{fetchBody:l,fetchUrl:u,prefetch:r,replace:o,resultSelector:n});break;default:r?b.prefetch(e):j(function(){b.sync(e)},this._util.transitionDuration)}}}},{key:"updateElemsUsingVirtualElements",value:function(e,t){var i=this,r=this._util,a=this._state,s=r.cycle,n=r.dataList,o=r.itemWidth,l=r.sliderElem,u=r.transitionTimingFunction,c=r.transitionDuration,d=n.size,h=a.slideWidth,v=a.virtualCounter;if(1===e){var f=t+1>d;if(s||!f){var p=n.getElementToAppend();if(p&&(p.style.width=h+"%"),F(l,"transform",c,u),l.style[C]="translateX(-"+(((v||0)+1)*o+this.negativeWidthCoefficient)+"px)",null===v)return a.virtualCounter=1,this._util.counter=t,n.setNextAsActive(),void this.scrollViewTransformAnimationDidComplete();if(a.virtualCounter++,n.setNextAsActive(),!p)return;Z.add(function(){var e=r.itemWidth,t=r.sliderElem,s=O(t.children);t.removeChild(s[0]),t.appendChild(p),r.sliderItems=O(t.children),a.virtualCounter--,V(t),t.style[C]="translateX(-"+a.virtualCounter*e+"px)",i.scrollViewTransformAnimationDidComplete()},this)}}else if(-1===e){var m=t<0;if(s||!m){var g=n.getElementToPrepend();if(g&&(g.style.width=h+"%"),F(l,"transform",c,u),l.style[C]="translateX(-"+(v-1)*o+"px)",a.virtualCounter--,n.setPreviousAsActive(),!g)return;Z.add(function(){var e=r.itemWidth,t=r.sliderElem,s=O(t.children);t.removeChild(s[s.length-1]),t.prepend(g),r.sliderItems=O(t.children),a.virtualCounter++,V(t),t.style[C]="translateX(-"+a.virtualCounter*e+"px)",i.scrollViewTransformAnimationDidComplete()},this)}}}},{key:"showCurrent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.source,r=this._util,s=r.boundaryElem,n=r.counter,o=r.cycle,l=r.dataList,u=r.elem,c=r.itemWidth,d=r.sliderElem,h=l.size,v=n;if(d.parentNode.setAttribute("aria-busy","true"),this.isValidMove(e)){if(o){if(1===e){var f=v+1>=h;v=f?0:n+e}else if(-1===e){var p=v<=0;v=p?h-1:n+e}}else v=n+e;if(l.getActive().classList.remove(H),v!==n){if(!this._state.hasBeenThreadmilled){for(;[].concat(a(d.children)).length>z;)d.removeChild(d.children[z]);r.sliderItems=O(d.children),this.slidesHasBeenUpdated(),this._state.hasBeenThreadmilled=!0}this.updateElemsUsingVirtualElements(e,v),this._util.counter=v;var m=l.getActive();m.classList.add(H,q),this.renderSlide(m),this.updateIndicators(v,n),this.updateButtons(),this.triggerOnChange(),this.preFetch(),v+1===h?(u.classList.add("wafer-scrollview-reached-end"),s&&s.classList.add("wafer-scrollview-boundary-reached-end")):(u.classList.remove("wafer-scrollview-reached-end"),s&&s.classList.remove("wafer-scrollview-boundary-reached-end")),b.emitWaferEvent("scrollview:change",{elem:u,meta:{source:i,index:v+1,prevIndex:n+1}})}else{l.getActive().classList.add(H,q);var g=this._state.virtualCounter,w="translateX(-"+(g*c+this.negativeWidthCoefficient)+"px)";w!==this._util.transformValue&&(d.style[C]=w,this._util.transformValue=w)}this._util.index=v,this.didComplete(null,v)}}},{key:"triggerOnChange",value:function(){var e=this._state.triggerNodeMap,t=this._util,i=t.dataList,r=i.getActive(),a=[];e.has(r)?a=e.get(r):(a=O(r.getElementsByClassName("wafer-scrollview-trigger-on-active")),e.set(r,a)),a.forEach(function(e){b.trigger(e)})}},{key:"updateIndicators",value:function(e,t){var i=this._util,r=i.indicatorCountElem,a=i.indicatorsCustomCount,s=i.indicatorItems;if(s){if(i.shouldAutoSwitch)for(var n=0;n<s.length;n++){var o=s[n],l=n<e;l?o.classList.add(q):o.classList.remove(q)}var u=s[t],c=s[e];u&&(u.classList.remove(H),u.removeAttribute("aria-current")),c&&(c.classList.add(H,q),c.setAttribute("aria-current",!0))}r&&(r.innerHTML=a&&a[e]||e+1)}},{key:"updateButtons",value:function(e){var t=this._util,i=t.behavior,r=t.sliderElem,a=t.nextBtn,s=t.prevBtn;if("native"!==i){var n=t.counter,o=t.cycle,l=t.dataList,u=l.size;a&&(o&&!e||n!==u-1?a.removeAttribute("disabled"):a.setAttribute("disabled",!0)),s&&(o&&!e||0!==n?s.removeAttribute("disabled"):s.setAttribute("disabled",!0))}else{var c=this._state.activeElem;if(c){var d=c.previousElementSibling,h=c.nextElementSibling,v=c.offsetLeft-r.offsetLeft,f=0===v,p=v>=r.scrollWidth-r.clientWidth;a&&(h&&!p?a.removeAttribute("disabled"):a.setAttribute("disabled",!0)),s&&(d&&!f?s.removeAttribute("disabled"):s.setAttribute("disabled",!0))}}}},{key:"updateAfterDrag",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._util.drag,i=t.currentDirection,r=t.endX,a=t.horizontalDirection,s=t.startX,n=r-s,o=i===a;o&&n>0&&Math.abs(n)>30?this.showCurrent(-1,e):o&&n<0&&Math.abs(n)>30?this.showCurrent(1,e):this.showCurrent()}},{key:"handlePause",value:function(){var e=this._util,t=e.elem,i=e.shouldAutoSwitch,r=e.sliderElem;i&&t.classList.add("wafer-scrollview-autoswitch-paused-by-user","wafer-scrollview-autoswitch-paused"),this._state.autoSwitchPausedByUser=!0,this.pauseAutoSwitch();var a=r.parentNode;a&&a.setAttribute("aria-live","polite")}},{key:"handleResume",value:function(){var e=this._util.sliderElem;this.resetAutoSwitchState(),this.setTimeoutForAutoSwitch();var t=e.parentNode;t&&t.setAttribute("aria-live","off")}},{key:"didLock",value:function(){this.pauseAutoSwitch()}},{key:"didUnLock",value:function(){this.setTimeoutForAutoSwitch()}},{key:"isValidMove",value:function(e){var t=this._util,i=t.counter,r=t.cycle,a=t.dataList,s=a.size;return r?1===e&&i<=s-1||-1===e&&i>=0||0===e:1===e&&i<s-1||-1===e&&i>0||0===e}},{key:"grab",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._util.drag;this._util.pointerDown=!1,t.endX&&this.updateAfterDrag(e),this.clearDrag()}},{key:"grabbing",value:function(){var e=this._util,t=e.drag,i=e.elem,r=e.itemWidth,a=e.sliderElem,s=e.triggerWafersDuringTransition,n=this._state.virtualCounter,o=t.startX,l=t.endX,u=-1*(n*r+(o-l)),c="translateX("+u+"px)";s&&2*Math.abs(u)>=r&&b.sync(i),c!==this._util.transformValue&&(this._util.drag.grabbing=!0,a.style[C]=c,this._util.transformValue=c)}},{key:"clearDrag",value:function(){var e=this;this._util.drag={currentDirection:null,endX:0,endY:0,grabbing:!1,horizontalDirection:0,last:0,startX:0,startY:0},this._util.grabTimeout&&M(this._grabTimeout),this._util.grabTimeout=j(function(){e._util.drag&&(e._util.drag.isVerticalDirection=!1)},50)}},{key:"indicatorClick",value:function(e){var t=e.target,i=t.getAttribute("data-index");i&&this.scrollToIndex(parseInt(i,10),{source:"indicator"})}},{key:"scrollViewTransformAnimationDidComplete",value:function(){var e=this._util,t=e.sliderElem;this._state.autoSwitchInProgress=!1,this.setTimeoutForAutoSwitch();var i=e.dataList;t.parentNode.setAttribute("aria-busy","false");var r=i.getActive();this.addAriaAttributes(r)}},{key:"indicatorMouseover",value:function(e){this._util.autoSwitchDisableHover||(this._state.mouseOnElement=!0,this.pauseAutoSwitch())}},{key:"indicatorMouseLeave",value:function(e){this._util.autoSwitchDisableHover||(this._state.mouseOnElement=!1,this.setTimeoutForAutoSwitch())}},{key:"getSnapSlideScrollToNode",value:function(e,t){var i=this._util.sliderElem,r=i.clientWidth,a=!1,s=200,n=!0;for("nextElementSibling"===t&&i.scrollLeft+i.clientWidth+i.clientWidth/2>=i.scrollWidth?a=!0:"previousElementSibling"===t&&i.scrollLeft<i.clientWidth&&(a=!0);e&&e[t]&&n;)s+=e.offsetWidth,!a&&s>=r?n=!1:e=e[t];return e}},{key:"checkAndAddActiveClassForNativeOverflow",value:function(){var e=this._util,t=e.elem,i=e.sliderElem;i.scrollWidth<=i.clientWidth?t.classList.add("wf-scrollview-inactive"):t.classList.remove("wf-scrollview-inactive")}},{key:"next",value:function(e){if(!this._util.disableClickNavigation)if(e.preventDefault(),e.stopPropagation(),"native"!==this._util.behavior)this.showCurrent(1,{source:"button",type:"next",sourceEvent:e});else{var t=this._state.activeElem;if(t){var i=t.nextElementSibling,r=this._util.snapBehavior,a=i;i&&("snapSlide"===r&&(a=this.getSnapSlideScrollToNode(a,"nextElementSibling")),t.classList.remove("active"),this._state.activeElem=a,this._state.activeElem.classList.add("active"),this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"next"}))}}}},{key:"resetAutoSwitchState",value:function(){var e=this._util,t=e.elem;e.shouldAutoSwitch&&t.classList.remove("wafer-scrollview-autoswitch-paused-by-user","wafer-scrollview-autoswitch-paused"),this._state.autoSwitchPausedByUser=!1,this._state.mouseOnElement=!1}},{key:"pause",value:function(e){e.preventDefault(),e.stopPropagation(),this.handlePause()}},{key:"prev",value:function(e){if(!this._util.disableClickNavigation)if(e.preventDefault(),e.stopPropagation(),"native"!==this._util.behavior)this.showCurrent(-1,{source:"button",type:"prev",sourceEvent:e});else{var t=this._state.activeElem;if(t){var i=t.previousElementSibling,r=this._util.snapBehavior,a=i;i&&("snapSlide"===r&&(a=this.getSnapSlideScrollToNode(a,"previousElementSibling")),t.classList.remove("active"),this._state.activeElem=a,this._state.activeElem.classList.add("active"),this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"prev"}))}}}},{key:"resume",value:function(e){e.preventDefault(),e.stopPropagation(),this.handleResume()}},{key:"keydown",value:function(e){e=e||window.event,37===e.keyCode?this.showCurrent(-1,{source:"key",type:"prev"}):39===e.keyCode&&this.showCurrent(1,{source:"key",type:"next"})}},{key:"touchstart",value:function(e){if(!this._util.disableTouch){this.pauseAutoSwitch();var t=this._util,i=e.touches[0],r=i.pageX,a=i.pageY;t.pointerDown=!0,t.drag.isVerticalDirection=!1,t.drag.startX=r,t.drag.startY=a}}},{key:"touchend",value:function(){this._util.disableTouch||(this._util.pointerDown=!1,this.grab({source:"touch"}))}},{key:"touchmove",value:function(e){if(!this._util.disableTouch){var t=this._util,i=t.drag,r=i.startX,a=i.startY,s=e.touches[0],n=s.pageX,o=s.pageY,l=0;i.isVerticalDirection||(Math.abs(a-o)>8&&(i.isVerticalDirection=a>o?1:-1),r!==n&&(l=r>n?1:-1),i.horizontalDirection=l,i.last!==n&&(i.currentDirection=i.last>n?1:-1,i.last=n),t.pointerDown&&(i.endX=n,i.endY=o,this.isValidMove(l)&&(t.drag.grabbing&&e.cancelable&&e.preventDefault(),Math.abs(a-o)>8&&(i.isVerticalDirection=a>o?1:-1),l&&!i.isVerticalDirection&&this.grabbing())))}}},{key:"mousedown",value:function(e){if(!this._util.disableTouch){e.preventDefault&&e.preventDefault();var t=this._util,i=e.pageX,r=e.pageY;t.pointerDown=!0,t.drag.isVerticalDirection=!1,t.drag.startX=i,t.drag.startY=r}}},{key:"mouseover",value:function(){var e=this._util,t=e.autoSwitchDisableHover,i=e.disableTouch;if(!t&&!i){this._state.mouseOnElement=!0;var r=this._util,a=r.elem;r.shouldAutoSwitch&&a.classList.add("wafer-scrollview-autoswitch-paused"),this.pauseAutoSwitch()}}},{key:"mouseup",value:function(){if(!this._util.disableTouch){var e=this._util.sliderElem;Q(e,"-webkit-grab"),this.grab({source:"mouse"})}}},{key:"mouseleave",value:function(e){if(!this._util.disableTouch){var t=this._util.autoSwitchDisableHover;if(e.preventDefault(),!t){this._state.mouseOnElement=!1;var i=this._util,r=i.elem,a=i.shouldAutoSwitch;this._state.autoSwitchPausedByUser||(a&&r.classList.remove("wafer-scrollview-autoswitch-paused"),this.setTimeoutForAutoSwitch())}var s=this._util,n=s.drag,o=s.pointerDown,l=s.sliderElem;if(o){var u=e.pageX,c=e.pageY;n.endX=u,n.endY=c,Q(l,"-webkit-grabbing"),this.grabbing()}}}},{key:"mousemove",value:function(e){if(!this._util.disableTouch){var t=this._util,i=t.pointerDown,r=t.sliderElem,a=t.drag;if(i){var s=e.pageX,n=e.pageY;this._util.pointerDown=!1,Q(r,"-webkit-grab"),a.endX=s,a.endY=n,this.updateAfterDrag(),this.clearDrag()}}}},{key:"tabClick",value:function(e){"native"===this._util.behavior&&(this._util.isUsingScrollSnap&&(this._state.activeElem=e.target,this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"click"})))}},{key:"remove",value:function(){this._util.elem.remove()}},{key:"stateDidUpdate",value:function(){"index"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).stateAttr&&this.scrollToIndex(parseInt(this._util.index,10))}},{key:"destroy",value:function(){this.removeEventListeners(),w(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"negativeWidthCoefficient",get:function(){if(!this.isReady())return 0;var e=this._util,t=e.counter,i=e.dataList,r=e.resizeEnd,a=e.rightPadding;if(t>=i.size-2){if(a)return-a;if(r){var s=i.tail;if(!s)return 0;var n=s.style.width,o=s.getBoundingClientRect().width;s.style.width="";var l=s.getBoundingClientRect(),u=l.width;return s.style.width=n,-(o-Math.min(u,o))}}return 0}}]),t}(S);$.events={click:[["has-scrollsnap-click","tabClick"],["next-btn","next"],["pause-btn","pause"],["prev-btn","prev"],["resume-btn","resume"]],keydown:[["_self","keydown"]],mousedown:[["slides","mousedown"]],mouseleave:[["next-btn","mouseleave"],["prev-btn","mouseleave"],["_self","mouseleave"]],mousemove:[["slides","mousemove"]],mouseover:[["next-btn","mouseover"],["prev-btn","mouseover"],["_self","mouseover"]],mouseup:[["slides","mouseup"]],touchend:[["slides","touchend"]],touchmove:[["slides","touchmove"]],touchstart:[["slides","touchstart"]]};var ee=$,te=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),ie=function e(t,i,r){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,i);if(void 0===a){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,i,r)}if("value"in a)return a.value;var n=a.get;if(void 0!==n)return n.call(r)},re=window.wafer,ae=re.base,se=re.controllers,ne=re.utils,oe=ne.elementInView,le=ne.throttle,ue=se.WaferBaseController,ce=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.root,r=void 0===i?document:i,a=e.selector,s=void 0===a?".wafer-scrollview":a;l(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:r,selector:s,WaferClass:ee}));return n.sync(),n._validateWithThrottle=le(function(){n.validate()},25,n),n}return c(t,e),te(t,[{key:"handleVisibilityChange",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this._state.elementInstances,i=!0,r=!1,a=void 0;try{for(var s,n=t.values()[Symbol.iterator]();!(i=(s=n.next()).done);i=!0){var o=s.value,l=o.instance;if(l._util.shouldAutoSwitch)if(e){var u=l._state.autoSwitchPausedByUser;if(u)return;l.resetAutoSwitchState(),l.setTimeoutForAutoSwitch({force:!0})}else l.pauseAutoSwitch()}}catch(e){r=!0,a=e}finally{try{!i&&n.return&&n.return()}finally{if(r)throw a}}}},{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle(),ie(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"handleResize",this).call(this)}},{key:"willValidate",value:function(e){var t=this._state.elementInstances;e.forEach(function(e){var i=t.get(e),r=i.instance;r._util.shouldAutoSwitch&&(oe(e,{offsetX:0,offsetY:0},ae.viewport)?r.setTimeoutForAutoSwitch():r.pauseAutoSwitch())})}}]),t}(ue),de=ce;t.default=new de({})}})});