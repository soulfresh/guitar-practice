(this["webpackJsonpproject-name"]=this["webpackJsonpproject-name"]||[]).push([[4],{87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(82),u=n(96),o=n(39),i=new Map([["HOME",{path:"/"}],["LOGIN",{path:"/login"}]]);function s(e,t){var n=i.get(e);if(!n)return console.error("Could not find route called",e),"#";var r=n.path;return t&&Object.keys(t).forEach((function(e){return r=r.replace(":".concat(e),t[e])})),r}var l=n(8),f=n(14),p=n(31),m=n(84),h=n.n(m);n(87);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t){var n,r=function(e){var t,n,r;for(r=(e=e.slice()).length-1;r>0;r--)t=Math.floor(Math.random()*(r+1)),n=e[r],e[r]=e[t],e[t]=n;return e}(e?o.d:o.c),a=(n=r).filter((function(e,t){return 0===t||e!==n[t-1]}));return t&&a[0]===t[t.length-1]&&a.shift(),a}function g(e){var t=e.tuning,n=(e.setTuning,e.speed),c=e.setSpeed,u=e.useSharps,i=e.setUseSharps,s=e.currentStrings,m=e.setCurrentStrings,g=Math.round(1.5*o.e),O=Object(r.useReducer)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)}),{},(function(){return{index:0,shuffledNotes:b(u),timer:null}})),E=Object(p.a)(O,2),j=E[0],v=j.index,S=j.shuffledNotes,y=j.timer,N=E[1],w=S[v],P=function(e){v>=S.length-1?N({index:0,shuffledNotes:b(u,S),timer:e}):N({index:v+1,timer:e})};return Object(r.useEffect)((function(){var e=h()(1e3*n,(function(){P(e)}));return function(){h.a.clear(e)}})),a.a.createElement("div",{className:"home"},a.a.createElement("div",{className:"big-note",onClick:P},w),a.a.createElement("div",{className:"guitar-display"},a.a.createElement(l.h,{tuning:t,selected:s,onChange:m}),a.a.createElement(l.b,{tuning:t,fretCount:g,notesToShow:w,stringsToShow:s})),a.a.createElement("div",{className:"controls"},a.a.createElement("label",null,"Speed",a.a.createElement(l.g,{min:1,max:30,value:n,onChange:function(e){c(e),y&&h.a.clear(y),N({timer:null})}})),a.a.createElement("label",null,"Include Sharps",a.a.createElement(l.a,{value:u,onChange:function(){i(!u),y&&h.a.clear(y),N({timer:null,shuffledNotes:b(!u,S)})}}))))}function O(){var e=Object(c.b)(),t=Object(c.c)(o.g),n=Object(c.c)(o.f);if(t){var r=n.tuning||o.i,u={tuning:r,setTuning:function(t){return e(Object(o.h)("tuning",t))},speed:n.speed||3,setSpeed:function(t){return e(Object(o.h)("speed",t))},useSharps:!!n.useSharps,setUseSharps:function(t){return e(Object(o.h)("useSharps",t))},currentStrings:n.currentStrings||r.map((function(e,t){return t})),setCurrentStrings:function(t){return e(Object(o.h)("currentStrings",t))}};return a.a.createElement(g,u)}return e(Object(o.b)()),null}n(88);function E(){return a.a.createElement("div",{className:"not-found-page"},a.a.createElement(l.e,{title:"Page Not Found"}))}var j,v;n(89);n.d(t,"default",(function(){return y}));var S=function(){setTimeout(v)};function y(e){var t=e.onAuthFailure,n=e.history;return v=t,j||(j=Object(o.a)(S)),a.a.createElement("div",{className:"main"},a.a.createElement(c.a,{store:j},a.a.createElement(u.b,{history:n},a.a.createElement(r.Suspense,{fallback:a.a.createElement(l.f,null)},a.a.createElement(u.c,null,a.a.createElement(u.a,{component:O,path:s("HOME"),exact:!0}),a.a.createElement(u.a,{component:E}))))))}}}]);
//# sourceMappingURL=4.3af341d1.chunk.js.map