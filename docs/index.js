!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=function(t,e,i){var o=/#/.test(t),r=void 0!==e&&void 0!==i,s=Array.isArray(t),a="#ffffff",c=0;if(o)c=n(t.substr(1,2)),e=n(t.substr(3,2)),i=n(t.substr(5,2));else if(r)c=parseInt(t),e=parseInt(e),i=parseInt(i);else{if(!s)return a;c=parseInt(t[0]),e=parseInt(t[1]),i=parseInt(t[2])}return Math.sqrt(c*c*.241+e*e*.691+i*i*.068)>130&&(a="#000000"),a};var n=function(t){var e=t.replace(/[^a-f0-9]/gi,"");return parseInt(e,16)}},function(t,e){function n(t,e,n){var i,o,r,s,a;function c(){var u=Date.now()-s;u<e&&u>=0?i=setTimeout(c,e-u):(i=null,n||(a=t.apply(r,o),r=o=null))}null==e&&(e=100);var u=function(){r=this,o=arguments,s=Date.now();var u=n&&!i;return i||(i=setTimeout(c,e)),u&&(a=t.apply(r,o),r=o=null),a};return u.clear=function(){i&&(clearTimeout(i),i=null)},u.flush=function(){i&&(a=t.apply(r,o),r=o=null,clearTimeout(i),i=null)},u}n.debounce=n,t.exports=n},function(t,e,n){t.exports=n(5)},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(3),n(4);var i=n(0),o=n.n(i),r=n(1),s=n.n(r),a=["BE","BG","CZ","DK","DE","EE","IE","EL","ES","FR","HR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","UK"];function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var l=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=e||{},this.settings=e,["i18n","targeting"].forEach(function(t){n.settings[t]=n.settings[t]||{}}),this.settings.targeting.location=this.settings.targeting.location||{},this.settings.targeting.params=this.settings.targeting.params||{},this.settings.targeting.time=this.settings.targeting.time||{},this.settings.targeting.time.before=this.settings.targeting.time.before||{},this.settings.targeting.time.after=this.settings.targeting.time.after||{},this.id="helloBar_"+Math.random().toString(36).substr(2),this.bar=document.createElement("div"),this.bar.setAttribute("id",this.id),"object"===c(this.settings.text)?this.text=this.settings.text[Math.floor(Math.random()*this.settings.text.length)]:this.text=this.settings.text,this.bar.innerHTML='<div class="hello-bar-container"><p class="hello-bar-text">'.concat(this.text,'</p></div><div class="hello-bar-text--after"></div>'),this.settings.hideClose||(this.bar.innerHTML+='<button class="hello-bar-button" aria-controls="'.concat(this.id,'" aria-expanded="true" aria-label="').concat(this.settings.i18n.hideText||"Hide announcement",'">\n        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">\n            <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>\n        </svg>\n      </button>')),this.bar.classList.add("hello-bar"),this.settings.fixed&&this.bar.classList.add("hello-bar--is-fixed"),this.settings.multiline&&this.bar.classList.add("hello-bar--is-multiline"),"bottom"===this.settings.position?(this.bar.classList.add("hello-bar--is-bottom"),this.marginProp="marginBottom"):this.marginProp="marginTop",this.events={},window.addEventListener("resize",s()(function(){document.querySelector("#".concat(n.id))&&(n.$emit("window-resize"),n.unMove(),n.settings.disableBodyMove||n.moveElements(document.body),n.moveElements(n.settings.move),n.colorizeBar())},200)),this.confirmShow().then(function(){n.$emit("before-created"),n.insertBar(),n.functionBar(),n.calculateHeight(),n.colorizeBar(),n.settings.disableBodyMove||n.moveElements(document.body),n.moveElements(n.settings.move),n.showBar(),n.$emit("after-created")}).catch(function(){n.$emit("not-created")})}var e,n,i;return e=t,(n=[{key:"on",value:function(t,e){this.events[t]=e}},{key:"$emit",value:function(t,e){this.events[t]&&"function"===typeof this.events[t]&&this.events[t](e)}},{key:"confirmShow",value:function(){var t=this;return new Promise(function(e,n){var i=function(){if(t.settings.targeting.once&&sessionStorage.getItem("hello-bar--session-showed"))return n();if(t.settings.targeting.onceUser&&localStorage.getItem("hello-bar--user-showed"))return n();if(Object.keys(t.settings.targeting.time).length){var i={year:"getFullYear",month:"getMonth",day:"getDate",dayOfWeek:"getDay",hour:"getHours",minute:"getMinutes",second:"getSeconds"},o=["getMonth","getDay"];["year","month","day","hour","minute","second"].forEach(function(e){var r=new Date;if(t.settings.targeting.time.after[e]){var s=r[i[e]]();if(o.includes(e)&&(s+=1),s<=t.settings.targeting.time.after[e])return n()}if(t.settings.targeting.time.before[e]){var a=r[i[e]]();if(o.includes(e)&&(a+=1),a>=t.settings.targeting.time.after[e])return n()}})}return t.settings.targeting.params&&Object.keys(t.settings.targeting.params).forEach(function(e){var i=function(t){var e=window.location.href;t=t.replace(/[[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);if(n&&n[2])return decodeURIComponent(n[2].replace(/\+/g," "))}(e);if(i&&i!==t.settings.targeting.params[e])return n()}),t.settings.targeting.pathname&&window.location.pathname!==t.settings.targeting.pathname?n():t.settings.targeting.href&&window.location.href!==t.settings.targeting.href?n():void e()};if(t.settings.hide)return n();Object.keys(t.settings.targeting.location).length?t.getIpInfo().then(function(e){if(t.settings.targeting.location.eu&&!a.includes(e.country))return n();["country","city","ip","postal","region"].forEach(function(i){if(t.settings.targeting.location[i]&&t.settings.targeting.location[i].constructor===Array&&!t.settings.targeting.location[i].includes(e[i]))return n()}),i()}):i()})}},{key:"showBar",value:function(){var t=this;document.querySelector("#".concat(this.id))&&(this.bar.style.transition=(this.settings.duration||500)+"ms",setTimeout(function(){t.bar.classList.add("hello-bar--is-visible")},this.settings.delay||1),this.$emit("show-bar",this.bar))}},{key:"unMove",value:function(){for(var t=document.querySelectorAll(".hello-bar--has-moved"),e=0;e<t.length;e++){var n=parseInt(t[e].style[this.marginProp]);t[e].style[this.marginProp]="".concat(n-this.height,"px"),t[e].classList.remove("hello-bar--has-moved")}}},{key:"hideBar",value:function(){var t=this;document.querySelector("#".concat(this.id))&&(this.bar.classList.remove("hello-bar--is-visible"),sessionStorage.setItem("hello-bar--session-showed",!0),localStorage.setItem("hello-bar--user-showed",!0),this.unMove(),setTimeout(function(){t.bar.parentNode.removeChild(t.bar)},(this.settings.duration||500)+1),this.$emit("hide-bar",this.bar))}},{key:"functionBar",value:function(){var t=this;document.querySelector(".hello-bar button.hello-bar-button")&&document.querySelector(".hello-bar button.hello-bar-button").addEventListener("click",function(){t.$emit("close-bar",t.bar),t.hideBar()});var e={mouseenter:"mouse-enter",mouseleave:"mouse-leave",click:"mouse-click",mouseup:"mouse-up",mousedown:"mouse-down"},n=document.querySelector(".hello-bar .cta");Object.keys(e).forEach(function(i){t.bar.addEventListener(i,function(){return t.$emit(e[i],t.bar)}),n&&n.addEventListener(i,function(){return t.$emit("cta-".concat(e[i]),n)})})}},{key:"colorizeBar",value:function(){if(document.querySelector("#".concat(this.id))){var t=this.settings.background||"#eeeeee",e=this.settings.textColor||o()(t);this.bar.style.backgroundColor=t,document.querySelector(".hello-bar .hello-bar-text--after")&&(document.querySelector(".hello-bar .hello-bar-text--after").style.background="linear-gradient(to right, rgba(0, 0, 0, 0), ".concat(t,")")),this.bar.style.color=e,this.bar.style.textAlign=this.settings.align||"center",document.querySelector(".hello-bar p.hello-bar-text .cta")&&(document.querySelector(".hello-bar p.hello-bar-text .cta").style.color=this.settings.background||"#eeeeee",document.querySelector(".hello-bar p.hello-bar-text .cta").style.background=e,this.$emit("color-bar",{backgroundColor:t,textColor:e}))}}},{key:"calculateHeight",value:function(){document.querySelector("#".concat(this.id))&&(this.settings.size&&this.bar.classList.add("hello-bar--size-".concat(this.settings.size)),"function"===typeof this.bar.getBoundingClientRect&&this.bar.getBoundingClientRect().height?this.height=this.bar.getBoundingClientRect().height:this.height=this.bar.offsetHeight,this.height=parseInt(this.height),this.$emit("calculate-height",this.height))}},{key:"insertBar",value:function(){var t=document.querySelector("body > *");t?document.body.insertBefore(this.bar,t):document.body.appendChild(this.bar),this.$emit("created",this.bar)}},{key:"moveElements",value:function(t){if(t)if("string"===typeof t)for(var e=document.querySelectorAll(t),n=0;n<e.length;n++)this.moveElements(e[n]);else if(t.constructor===Array&&t.length)for(var i=0;i<t.length;i++)this.moveElements(t[i]);else if("object"===c(t)&&"object"===c(t.classList)&&"function"===typeof t.classList.add&&!t.classList.contains("hello-bar--has-moved")){var o=t.currentStyle||window.getComputedStyle(t);"object"===c(o)&&o[this.marginProp]?t.style[this.marginProp]="".concat(parseInt(o[this.marginProp])+this.height,"px"):t.style[this.marginProp]="".concat(this.height,"px"),this.$emit("move-element",t),t.classList.add("hello-bar--has-moved")}}},{key:"getIpInfo",value:function(){var t=this;return this.$emit("start-ip-info"),new Promise(function(e,n){var i,o;(i=t.settings.ipEndpoint||"https://ipinfo.io/json",new Promise(function(t,e){var n="hello_bar_cache_".concat(i).concat(o?"_"+JSON.stringify(o):"");if(localStorage.getItem(n))try{var r=JSON.parse(localStorage.getItem(n));if(r.expires_at>(new Date).getTime())return t(r.cache_value)}catch(s){}fetch(i,o).then(function(t){return t.json()}).then(function(e){localStorage.setItem(n,JSON.stringify({created_at:(new Date).getTime(),expires_at:(new Date).getTime()+6048e5,cache_value:e})),t(e)}).catch(function(t){return e(t)})})).then(function(n){t.$emit("fetch-ip-info",n),e(n)}).catch(function(e){t.$emit("error-ip-info",e),n(e)})})}}])&&u(e.prototype,n),i&&u(e,i),t}();function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var g="Check out this repository on GitHub now! <a class='cta wiggle' href='https://github.com/AnandChowdhary/hello-bar'>&#9733; &nbsp;Star now</a>",f="\ud83c\udf6a This website uses cookies to make your experience better. <a class='cta' href='#'>Cookie policy</a>",d=["You are seeing message A!","You are seeing message B!"],m="You are visiting this website after 8 pm! Quite the night rider. ;)",b="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non lorem quam. Nunc at risus auctor felis semper semper. Proin nec consectetur dolor, eu congue tellus. Nulla ac libero viverra, aliquam mi eget, auctor diam. Vestibulum eget leo consequat, tempus eros ac, bibendum ligula.";new(function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.libInstance=new l({text:g,background:"#5352ed",size:"large",delay:500}),this.addEvents(),console.log("Demo loaded!",this.libInstance);for(var n=document.querySelectorAll("input[type='radio']"),i=function(t){n[t].addEventListener("change",function(){switch(e.libInstance.hideBar(),n[t].value){case"cookie-law-1":setTimeout(function(){e.libInstance=new l({text:f,position:"bottom",fixed:!0}),e.addEvents()},600);break;case"cookie-law-2":setTimeout(function(){e.libInstance=new l({text:f,targeting:{location:{eu:!0}}}),e.addEvents()},600);break;case"multiline":setTimeout(function(){e.libInstance=new l({text:b,multiline:!0}),e.addEvents()},600);break;case"evening":setTimeout(function(){e.libInstance=new l({text:m,background:"#000",targeting:{time:{after:{hour:20}}}}),e.addEvents()},600);break;case"random":setTimeout(function(){e.libInstance=new l({text:d,background:"#e24331",size:"large"}),e.addEvents()},600);break;default:setTimeout(function(){e.libInstance=new l({text:g,background:"#5352ed",size:"large"}),e.addEvents()},600)}})},o=0;o<n.length;o++)i(o)}var e,n,i;return e=t,(n=[{key:"addEvents",value:function(){var t=this;["before-created","after-created","not-created","mouse-enter","mouse-leave","mouse-down","mouse-up","mouse-click","cta-mouse-enter","cta-mouse-leave","cta-mouse-down","cta-mouse-up","cta-mouse-click","show-bar","hide-bar","close-bar","color-bar","calculate-height","created","move-element","start-ip-info","fetch-ip-info","error-ip-info"].forEach(function(e){t.libInstance.on(e,function(t){console.log("Emitted "+e,t)})})}}])&&h(e.prototype,n),i&&h(e,i),t}())}]);
//# sourceMappingURL=index.js.map