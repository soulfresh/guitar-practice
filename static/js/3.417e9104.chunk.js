(this["webpackJsonpproject-name"]=this["webpackJsonpproject-name"]||[]).push([[3],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(31),c=n(15),i=n(9),u=n(35),s=n(17);var l=n(22),f=n(30),m=n(97),p=n.n(m);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e,t){var n,r=function(e){var t,n,r;for(r=(e=e.slice()).length-1;r>0;r--)t=Math.floor(Math.random()*(r+1)),n=e[r],e[r]=e[t],e[t]=n;return e}(e?i.h:i.g),a=(n=r).filter((function(e,t){return 0===t||e!==n[t-1]}));return t&&a[0]===t[t.length-1]&&a.shift(),a}function w(e,t){var n=a.a.useReducer((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)}),{},(function(){return{index:0,shuffledNotes:h(t),timer:null}})),r=Object(f.a)(n,2),o=r[0],c=o.index,i=o.shuffledNotes,u=o.timer,s=r[1],m=i[c],w=function(e){c>=i.length-1?s({index:0,shuffledNotes:h(t,i),timer:e}):s({index:c+1,timer:e})};return a.a.useEffect((function(){var t=p()(1e3*e,(function(){w(t)}));return function(){p.a.clear(t)}})),{note:m,nextNote:w,resetTimer:function(e){u&&p.a.clear(u);var t={timer:null};null!=e&&(t.shuffledNotes=h(e,i)),s(t)}}}n(100);function b(e){var t=e.fretCount,n=e.tuning,r=(e.setTuning,e.speed),o=e.setSpeed,c=e.useSharps,i=e.setUseSharps,u=e.currentStrings,l=e.setCurrentStrings,f=w(r,c),m=f.note,p=f.nextNote,d=f.resetTimer;return a.a.createElement(s.e,{note:m,notesToShow:m,onNextNote:p,tuning:n,currentStrings:u,setCurrentStrings:l,fretCount:t,speed:r,setSpeed:function(e){o(e),d()},useSharps:c,setSharps:function(){i(!c),d(!c)}})}function g(){return a.a.createElement(s.k,null,a.a.createElement(b,null))}n(101);function O(e){var t=e.fretCount,n=e.tuning,r=(e.setTuning,e.speed),o=e.setSpeed,c=e.useSharps,u=e.setUseSharps,l=e.currentStrings,f=e.setCurrentStrings,m=w(r,c),p=m.note,d=m.nextNote,h=m.resetTimer,b=Math.round(3*Math.random()),g=Object(i.b)(Object(i.f)(p),b,0,n),O=Object(i.c)(n,g),S=Math.max.apply(Math,O);return S+i.i<t&&(g=Object(i.a)([g],S,t)),a.a.createElement(s.e,{note:p,notesToShow:g,onNextNote:d,tuning:n,currentStrings:l,setCurrentStrings:f,fretCount:t,speed:r,setSpeed:function(e){o(e),h()},useSharps:c,setSharps:function(){u(!c),h(!c)}})}function S(){return a.a.createElement(s.k,null,a.a.createElement(O,null))}n(102);function j(){return a.a.createElement("div",{className:"not-found-page"},a.a.createElement(s.g,{title:"Page Not Found"}))}var v,E;n(103);n.d(t,"default",(function(){return T}));var N=function(){setTimeout(E)};function T(e){var t=e.onAuthFailure,n=e.history;E=t,v||(v=Object(i.d)(N));var l=[{name:"Note Names",path:Object(u.a)("NOTES"),component:g},{name:"Triads",path:Object(u.a)("MAJOR_TRIADS"),component:S}],f=l.map((function(e,t){return a.a.createElement(c.a,Object.assign({},e,{key:t}))}));return a.a.createElement("div",{className:"main"},a.a.createElement(o.a,{store:v},a.a.createElement(c.b,{history:n},a.a.createElement(r.Suspense,{fallback:a.a.createElement(s.h,null)},a.a.createElement(s.f,{pages:l},a.a.createElement(c.c,null,a.a.createElement(c.a,{component:g,path:Object(u.a)("HOME"),exact:!0}),f,a.a.createElement(c.a,{component:j})))))))}},97:function(e,t,n){"use strict";var r=n(98),a=n(99);(e.exports=function(e,t,n){var o=a(),c=Object.create(null);return c.id=r((function i(){a()-o>=e?t.call(n):c.id=r(i)})),c}).clear=function(e){r.cancel(e.id)}},98:function(e,t){t=e.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){var t=(new Date).getTime(),r=Math.max(0,16-(t-n)),a=setTimeout(e,r);return n=t,a};var n=(new Date).getTime();var r=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;t.cancel=function(e){r.call(window,e)}},99:function(e,t,n){"use strict";e.exports=function(){var e=window&&window.performance;return e&&e.now?e.now.bind(e):function(){return(new Date).getTime()}}()}}]);
//# sourceMappingURL=3.417e9104.chunk.js.map