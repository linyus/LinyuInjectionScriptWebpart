define("4c9ff72d-7dd7-4ed2-b68a-167f5f52c3fa_0.0.1",["@microsoft/sp-property-pane","@microsoft/sp-loader","@microsoft/sp-core-library","@microsoft/sp-webpart-base"],function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",function(){var e,t=document.getElementsByTagName("script"),r=new RegExp("\\/injection-script-web-part-web-part(_[a-z0-9-]+)*\\.js","i");if(t&&t.length)for(var i=0;i<t.length;i++)if(t[i]){var o=t[i].getAttribute("src");if(o&&o.match(r)){e=o.substring(0,o.lastIndexOf("/")+1);break}}if(!e)for(var a in window.__setWebpackPublicPathLoaderSrcRegistry__)if(a&&a.match(r)){e=a.substring(0,a.lastIndexOf("/")+1);break}n.p=e}(),n(n.s="KB+0")}({"26ea":function(t,n){t.exports=e},"45uX":function(e,t,n){var r=n("92eZ"),i=n("ruv1");"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!0);r.locals&&(e.exports=r.locals)},"92eZ":function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,"#linyuLoading{vertical-align:middle;float:left}#linyuLoadingImg{float:left}#linyuLoadingImg img{width:50px;height:50px}#linyuLoadingText{line-height:50px;height:50px;vertical-align:middle;float:left}#linyuWarning{color:red}",""])},I6O9:function(e,n){e.exports=t},JPst:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},"KB+0":function(e,t,n){"use strict";n.r(t);var r,i=n("UWqr"),o=n("26ea"),a=n("br4S"),u=n("I6O9"),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});n("45uX");var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){var e=this.properties.ZoneId,t='<div id="linyuLoading"><div id="linyuLoadingImg"><img src="'+n("wZs+")+'"></img></div><div id="linyuLoadingText">loading</div></div>';""===e&&(t="<div id='linyuWarning'>Please configure \"Zone Id\" in WebPart Properties</div>"),this.domElement.innerHTML='<div id="'+e+'">'+t+"</div>",""!=this.properties.JavaScirptLink&&u.SPComponentLoader.loadScript(this.properties.JavaScirptLink)},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return i.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{groups:[{groupName:"WebPart Properties",groupFields:[Object(o.PropertyPaneTextField)("ZoneId",{label:"Zone Id",description:"Please enter your Zone Id"}),Object(o.PropertyPaneTextField)("JavaScirptLink",{label:"JavaScirpt Link",description:"Please enter your JavaScript file reference URL"})]}]}]}},t}(a.BaseClientSideWebPart);t.default=l},UWqr:function(e,t){e.exports=n},br4S:function(e,t){e.exports=r},ruv1:function(e,t,n){"use strict";(function(e){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"==typeof window?e:window,i=r&&r.CSPSettings&&r.CSPSettings.nonce,o=function(){var e=r.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};e.runState||(e=n({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}}));e.registeredThemableStyles||(e=n({},e,{registeredThemableStyles:[]}));return r.__themeState__=e,e}(),a=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,u=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};function s(e){var t=u();e();var n=u();o.perf.duration+=n-t}function l(){s(function(){var e=o.runState.buffer.slice();o.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&c(t)})}function c(e,t){o.loadStyles?o.loadStyles(p(e).styleString,e):function(e){if("undefined"==typeof document)return;var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),r=p(e),a=r.styleString,u=r.themable;n.setAttribute("data-load-themed-styles","true"),n.type="text/css",i&&n.setAttribute("nonce",i);n.appendChild(document.createTextNode(a)),o.perf.count++,t.appendChild(n);var s=document.createEvent("HTMLEvents");s.initEvent("styleinsert",!0,!1),s.args={newStyle:n},document.dispatchEvent(s);var l={styleElement:n,themableStyle:e};u?o.registeredThemableStyles.push(l):o.registeredStyles.push(l)}(e)}function f(e){void 0===e&&(e=3),3!==e&&2!==e||(d(o.registeredStyles),o.registeredStyles=[]),3!==e&&1!==e||(d(o.registeredThemableStyles),o.registeredThemableStyles=[])}function d(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function p(e){var t=o.theme,n=!1;return{styleString:(e||[]).map(function(e){var r=e.theme;if(r){n=!0;var i=t?t[r]:void 0,o=e.defaultValue||"inherit";return t&&!i&&console,i||o}return e.rawString}).join(""),themable:n}}function y(e){var t=[];if(e){for(var n=0,r=void 0;r=a.exec(e);){var i=r.index;i>n&&t.push({rawString:e.substring(n,i)}),t.push({theme:r[1],defaultValue:r[2]}),n=a.lastIndex}t.push({rawString:e.substring(n)})}return t}t.loadStyles=function(e,t){void 0===t&&(t=!1),s(function(){var n=Array.isArray(e)?e:y(e),r=o.runState,i=r.mode,a=r.buffer,u=r.flushTimer;t||1===i?(a.push(n),u||(o.runState.flushTimer=setTimeout(function(){o.runState.flushTimer=0,l()},0))):c(n)})},t.configureLoadStyles=function(e){o.loadStyles=e},t.configureRunMode=function(e){o.runState.mode=e},t.flush=l,t.loadTheme=function(e){o.theme=e,function(){if(o.theme){for(var e=[],t=0,n=o.registeredThemableStyles;t<n.length;t++){var r=n[t];e.push(r.themableStyle)}e.length>0&&(f(1),c([].concat.apply([],e)))}}()},t.clearStyles=f,t.detokenize=function(e){return e&&(e=p(y(e)).styleString),e},t.splitStyles=y}).call(this,n("yLpj"))},"wZs+":function(e,t,n){e.exports=n.p+"loading_356dcb15aa4fbd12d4ebcf63949afdff.gif"},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}})});