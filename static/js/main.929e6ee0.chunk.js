(this["webpackJsonpproject-name"]=this["webpackJsonpproject-name"]||[]).push([[0],{39:function(e,t,n){"use strict";var r=n(38),a=n(22),o=n(15),c=(n(50),Object(o.b)({initialState:{initialized:!1,preferences:{}},reducers:{getPreferencesSuccess:function(e,t){e.preferences=t.payload.preferences,e.initialized=!0}}})),i=c.actions,u=c.reducer,l=i.getPreferencesSuccess,s=u,f=function(e){return e.preferences},d=Object(r.a)(Object(o.c)());var m={preferences:s},p=Object(a.b)(m);function h(e,t){return Object(o.a)({reducer:function(t,n){switch(n.type){case"RESET":return p(void 0,n);case"AUTH_FAILURE":return e(),t;default:return p(t,n)}},middleware:d,preloadedState:t})}var v=function(e){return e.preferences},b=function(e){return f(v(e))},g=function(e){return function(e){return e.initialized}(v(e))},O=n(14),y=n(7);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var E=function(){return function(e){var t=y.localStorage.getItem("preferences"),n=JSON.parse(t)||{};e(l({preferences:n}))}},k=function(e,t){return function(n,r){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},b(r()),Object(O.a)({},e,t)),o=JSON.stringify(a);y.localStorage.setItem("preferences",o),n(l({preferences:a}))}},w=n(6);n.d(t,"a",(function(){return h})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return g})),n.d(t,"b",(function(){return E})),n.d(t,"h",(function(){return k})),n.d(t,"f",(function(){return f})),n.d(t,"c",(function(){return w.c})),n.d(t,"d",(function(){return w.d})),n.d(t,"e",(function(){return w.e})),n.d(t,"i",(function(){return w.f}))},40:function(e,t,n){e.exports=n(75)},45:function(e,t,n){},46:function(e,t,n){},49:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},6:function(e,t,n){"use strict";n(14);var r=n(2),a=n.n(r);var o=["A","B","C","D","E","F","G"],c=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],i=c.concat(c,c,c),u=c.length,l=["E","A","D","G","B","E"];function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return(t=t||c).indexOf(e,n)}function f(e,t){return(t=t||i)[e]}a.a.shape({note:a.a.string.isRequired,string:a.a.number,octive:a.a.number}),a.a.arrayOf(a.a.string),a.a.arrayOf(a.a.number);n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f}))},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(19),c=n.n(o),i=n(31),u=n(8),l=n(4),s=n(5),f=n(10),d=n(9),m=n(11),p=(n(56),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(f.a)(this,Object(d.a)(t).call(this,e))).state={error:null!=e.error&&e.error},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){console.error("Bundle failed to load!"),console.error(e),console.error(t)}},{key:"render",value:function(){return this.error?(u.d.stop(),a.a.createElement("div",{className:"bundle-load-error","data-test":"error"},a.a.createElement("h2",{className:"title"},"An error occurred loading ","Atom Dance - Guitar Music Theory Practice"),a.a.createElement("h3",null,"Please try again in a bit"),a.a.createElement(u.c,null))):this.props.children}},{key:"error",get:function(){return this.state.error}}],[{key:"getDerivedStateFromError",value:function(e){return{error:!0}}}]),t}(a.a.Component)),h=n(37),v=n.n(h),b=n(7),g=new(function(){function e(){Object(l.a)(this,e),this.axe=v.a.create({baseURL:"http://atomdance.com",headers:{"content-type":"application/json"}})}return Object(s.a)(e,[{key:"login",value:function(e,t){return this.axe.post("/login",{user:{email:e,password:t}}).then((function(e){b.localStorage.setItem("authToken",e.data.token)}))}},{key:"logout",value:function(){this.clearToken()}},{key:"getToken",value:function(){return b.localStorage.getItem("authToken")}},{key:"clearToken",value:function(){b.localStorage.removeItem("authToken")}},{key:"isLoggedIn",get:function(){return!!this.getToken()}}]),e}()),O=n(32),y=Object(O.a)(),j=(n(73),Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,95))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(74);c.a.render(a.a.createElement((function(e){var t=e.history;t=t||y;var n=g.getToken(),o=Object(r.useState)(!!n),c=Object(i.a)(o,2)[1],l=a.a.createElement(j,{onAuthFailure:function(){return c(!1)},history:t});return u.d.stop(),a.a.createElement("div",{className:"App"},a.a.createElement(p,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(u.f,null)},l)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){"use strict";var r=n(0),a=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createElement("circle",{cx:12,cy:12,r:10}),u=function(e){var t=e.svgRef,n=e.title,r=c(e,["svgRef","title"]);return a.a.createElement("svg",o({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-circle",ref:t},r),n?a.a.createElement("title",null,n):null,i)},l=a.a.forwardRef((function(e,t){return a.a.createElement(u,o({svgRef:t},e))}));n.p;function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createElement("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),m=a.a.createElement("polyline",{points:"22 4 12 14.01 9 11.01"}),p=function(e){var t=e.svgRef,n=e.title,r=f(e,["svgRef","title"]);return a.a.createElement("svg",s({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-check-circle",ref:t},r),n?a.a.createElement("title",null,n):null,d,m)},h=a.a.forwardRef((function(e,t){return a.a.createElement(p,s({svgRef:t},e))}));n.p,n(45);function v(e){var t=e.value,n=e.onChange,r=t?a.a.createElement(h,{className:"icon checked"}):a.a.createElement(l,{className:"icon unchecked"});return a.a.createElement("span",{className:"checkbox"},a.a.createElement("input",{type:"checkbox",onChange:n}),r)}var b=n(33);n(46);function g(e){var t=e.min,n=e.max,r=e.value,o=e.onChange;return a.a.createElement(b.a,{min:t,max:n,value:r,className:"slider",thumbClassName:"thumb",trackClassName:"track",renderThumb:function(e,t){return a.a.createElement("div",e,t.valueNow)},onChange:o})}var O=n(34),y=n.n(O),j=n(6);n(49);function E(e){var t=e.name,n=e.open,r=e.show,o=y()({note:!0,open:n,visible:r});return a.a.createElement("div",{className:o,"data-test":"note","data-note":t},a.a.createElement("span",{className:"note-name"},t))}function k(e,t,n,r){return Array.isArray(r)?r.findIndex((function(r){return k(e,t,n,r)}))>-1:"object"!==typeof r?e===r:e===r.note&&t===r.string&&(null==r.octive||n===r.octive)}function w(e){var t=e.tuning,n=e.fretCount,r=e.notesToShow,o=e.stringsToShow;t=t||j.f,n=n||j.e,r=Array.isArray(r)?r:[r],o=o||t.map((function(e,t){return t}));var c=t.map((function(e,t){for(var c=[],i=Object(j.b)(e),u=0;u<n;u++){var l=i+u,s=Object(j.a)(l),f=Math.floor(u/j.e),d=o.indexOf(t)>-1&&k(s,t,f,r);c.push(a.a.createElement(E,{show:d,name:s,open:0===u,key:u}))}return a.a.createElement("div",{className:"string","data-open-note":e,key:t},c)}));return a.a.createElement("div",{className:"guitar-neck"},c)}n(39),n(52);function N(e){var t=e.tuning,n=e.selected,r=e.onChange,o=function(e){var t=n.slice(),a=n.indexOf(e);a>-1?t.splice(a,1):t.push(e),r(t)},c=t.map((function(e,t){return a.a.createElement(v,{key:t,value:n.indexOf(t)>-1,onChange:function(){return o(t)}})}));return a.a.createElement("div",{className:"string-select"},c)}var S,C=n(4),x=n(5),P=n(10),A=n(9),L=n(11),R={id:"loader",stop:"stop"},T=S={selectors:R,getLoader:function(){return document.getElementById(R.id)},start:function(){var e=S.getLoader();e&&e.classList.remove(R.stop)},stop:function(){var e=S.getLoader();e&&e.classList.add(R.stop)}},D=(n(53),function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(P.a)(this,Object(A.a)(t).call(this,e))).rootRef=a.a.createRef(),n}return Object(L.a)(t,e),Object(x.a)(t,[{key:"cloneLoader",value:function(){var e=T.getLoader().cloneNode(!0);return e.removeAttribute("id"),e.setAttribute("name","loaderComponent"),e.classList.remove(T.selectors.stop),e}},{key:"componentDidMount",value:function(){this.loader=this.cloneLoader(),this.rootElement.appendChild(this.loader)}},{key:"render",value:function(){return a.a.createElement("div",{className:"loader-component",ref:this.rootRef})}},{key:"rootElement",get:function(){return this.rootRef.current}}]),t}(a.a.Component)),I=(n(54),function(e){function t(){return Object(C.a)(this,t),Object(P.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){T.start()}},{key:"componentWillUnmount",value:function(){T.stop()}},{key:"render",value:function(){return null}}]),t}(a.a.Component));n(55);function B(e){var t=e.title,n=e.subtitle;return a.a.createElement("div",{className:"not-found","data-test":"notFound"},a.a.createElement("h2",{className:"title","data-test":"title"},t),n&&a.a.createElement("p",{className:"subtitle","data-test":"subtitle"},n),a.a.createElement(D,null))}n.d(t,"a",(function(){return v})),n.d(t,"g",(function(){return g})),n.d(t,"b",(function(){return w})),n.d(t,"h",(function(){return N})),n.d(t,"c",(function(){return D})),n.d(t,"f",(function(){return I})),n.d(t,"d",(function(){return T})),n.d(t,"e",(function(){return B}))}},[[40,1,2]]]);
//# sourceMappingURL=main.929e6ee0.chunk.js.map