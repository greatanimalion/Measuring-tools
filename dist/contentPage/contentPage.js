import{r as b,g as ke,R as q,j as C,c as Te}from"../js/client-C9r4PM53.js";import{i as W}from"../js/iframe-B894oyg8.js";var ie=b.createContext({});function E(){return E=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},E.apply(null,arguments)}function Oe(e){if(Array.isArray(e))return e}function je(e,n){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var t,o,a,i,f=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,n!==0)for(;!(c=(t=a.call(r)).done)&&(f.push(t.value),f.length!==n);c=!0);}catch(s){u=!0,o=s}finally{try{if(!c&&r.return!=null&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return f}}function K(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}function Ae(e,n){if(e){if(typeof e=="string")return K(e,n);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?K(e,n):void 0}}function Ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fe(e,n){return Oe(e)||je(e,n)||Ae(e,n)||Ee()}function w(e){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},w(e)}function Re(e,n){if(w(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var t=r.call(e,n||"default");if(w(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Ne(e){var n=Re(e,"string");return w(n)=="symbol"?n:n+""}function _(e,n,r){return(n=Ne(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function Me(e,n){if(e==null)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.includes(t))continue;r[t]=e[t]}return r}function ce(e,n){if(e==null)return{};var r,t,o=Me(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var ue={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var a="",i=0;i<arguments.length;i++){var f=arguments[i];f&&(a=o(a,t(f)))}return a}function t(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var f in a)n.call(a,f)&&a[f]&&(i=o(i,f));return i}function o(a,i){return i?a?a+" "+i:a+i:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(ue);var Pe=ue.exports;const Ie=ke(Pe);function g(e,n){Fe(e)&&(e="100%");var r=He(e);return e=n===360?e:Math.min(n,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*n),10)/100),Math.abs(e-n)<1e-6?1:(n===360?e=(e<0?e%n+n:e%n)/parseFloat(String(n)):e=e%n/parseFloat(String(n)),e)}function Fe(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function He(e){return typeof e=="string"&&e.indexOf("%")!==-1}function _e(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function O(e){return e<=1?"".concat(Number(e)*100,"%"):e}function P(e){return e.length===1?"0"+e:String(e)}function De(e,n,r){return{r:g(e,255)*255,g:g(n,255)*255,b:g(r,255)*255}}function I(e,n,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(n-e)*(6*r):r<1/2?n:r<2/3?e+(n-e)*(2/3-r)*6:e}function Le(e,n,r){var t,o,a;if(e=g(e,360),n=g(n,100),r=g(r,100),n===0)o=r,a=r,t=r;else{var i=r<.5?r*(1+n):r+n-r*n,f=2*r-i;t=I(f,i,e+1/3),o=I(f,i,e),a=I(f,i,e-1/3)}return{r:t*255,g:o*255,b:a*255}}function ze(e,n,r){e=g(e,255),n=g(n,255),r=g(r,255);var t=Math.max(e,n,r),o=Math.min(e,n,r),a=0,i=t,f=t-o,c=t===0?0:f/t;if(t===o)a=0;else{switch(t){case e:a=(n-r)/f+(n<r?6:0);break;case n:a=(r-e)/f+2;break;case r:a=(e-n)/f+4;break}a/=6}return{h:a,s:c,v:i}}function Be(e,n,r){e=g(e,360)*6,n=g(n,100),r=g(r,100);var t=Math.floor(e),o=e-t,a=r*(1-n),i=r*(1-o*n),f=r*(1-(1-o)*n),c=t%6,u=[r,i,a,a,f,r][c],s=[f,r,r,i,a,a][c],l=[a,a,f,r,r,i][c];return{r:u*255,g:s*255,b:l*255}}function Ve(e,n,r,t){var o=[P(Math.round(e).toString(16)),P(Math.round(n).toString(16)),P(Math.round(r).toString(16))];return o.join("")}function Q(e){return d(e)/255}function d(e){return parseInt(e,16)}var Y={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function k(e){var n={r:0,g:0,b:0},r=1,t=null,o=null,a=null,i=!1,f=!1;return typeof e=="string"&&(e=qe(e)),typeof e=="object"&&(p(e.r)&&p(e.g)&&p(e.b)?(n=De(e.r,e.g,e.b),i=!0,f=String(e.r).substr(-1)==="%"?"prgb":"rgb"):p(e.h)&&p(e.s)&&p(e.v)?(t=O(e.s),o=O(e.v),n=Be(e.h,t,o),i=!0,f="hsv"):p(e.h)&&p(e.s)&&p(e.l)&&(t=O(e.s),a=O(e.l),n=Le(e.h,t,a),i=!0,f="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=_e(r),{ok:i,format:e.format||f,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:r}}var Ue="[-\\+]?\\d+%?",$e="[-\\+]?\\d*\\.\\d+%?",h="(?:".concat($e,")|(?:").concat(Ue,")"),F="[\\s|\\(]+(".concat(h,")[,|\\s]+(").concat(h,")[,|\\s]+(").concat(h,")\\s*\\)?"),H="[\\s|\\(]+(".concat(h,")[,|\\s]+(").concat(h,")[,|\\s]+(").concat(h,")[,|\\s]+(").concat(h,")\\s*\\)?"),m={CSS_UNIT:new RegExp(h),rgb:new RegExp("rgb"+F),rgba:new RegExp("rgba"+H),hsl:new RegExp("hsl"+F),hsla:new RegExp("hsla"+H),hsv:new RegExp("hsv"+F),hsva:new RegExp("hsva"+H),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function qe(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var n=!1;if(Y[e])e=Y[e],n=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var r=m.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=m.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=m.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=m.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=m.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=m.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=m.hex8.exec(e),r?{r:d(r[1]),g:d(r[2]),b:d(r[3]),a:Q(r[4]),format:n?"name":"hex8"}:(r=m.hex6.exec(e),r?{r:d(r[1]),g:d(r[2]),b:d(r[3]),format:n?"name":"hex"}:(r=m.hex4.exec(e),r?{r:d(r[1]+r[1]),g:d(r[2]+r[2]),b:d(r[3]+r[3]),a:Q(r[4]+r[4]),format:n?"name":"hex8"}:(r=m.hex3.exec(e),r?{r:d(r[1]+r[1]),g:d(r[2]+r[2]),b:d(r[3]+r[3]),format:n?"name":"hex"}:!1)))))))))}function p(e){return!!m.CSS_UNIT.exec(String(e))}var j=2,G=.16,We=.05,Ke=.05,Qe=.15,le=5,se=4,Ye=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function Z(e){var n=e.r,r=e.g,t=e.b,o=ze(n,r,t);return{h:o.h*360,s:o.s,v:o.v}}function A(e){var n=e.r,r=e.g,t=e.b;return"#".concat(Ve(n,r,t))}function Ge(e,n,r){var t=r/100,o={r:(n.r-e.r)*t+e.r,g:(n.g-e.g)*t+e.g,b:(n.b-e.b)*t+e.b};return o}function J(e,n,r){var t;return Math.round(e.h)>=60&&Math.round(e.h)<=240?t=r?Math.round(e.h)-j*n:Math.round(e.h)+j*n:t=r?Math.round(e.h)+j*n:Math.round(e.h)-j*n,t<0?t+=360:t>=360&&(t-=360),t}function X(e,n,r){if(e.h===0&&e.s===0)return e.s;var t;return r?t=e.s-G*n:n===se?t=e.s+G:t=e.s+We*n,t>1&&(t=1),r&&n===le&&t>.1&&(t=.1),t<.06&&(t=.06),Number(t.toFixed(2))}function ee(e,n,r){var t;return r?t=e.v+Ke*n:t=e.v-Qe*n,t>1&&(t=1),Number(t.toFixed(2))}function Ze(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[],t=k(e),o=le;o>0;o-=1){var a=Z(t),i=A(k({h:J(a,o,!0),s:X(a,o,!0),v:ee(a,o,!0)}));r.push(i)}r.push(A(t));for(var f=1;f<=se;f+=1){var c=Z(t),u=A(k({h:J(c,f),s:X(c,f),v:ee(c,f)}));r.push(u)}return n.theme==="dark"?Ye.map(function(s){var l=s.index,y=s.opacity,S=A(Ge(k(n.backgroundColor||"#141414"),k(r[l]),y*100));return S}):r}var D=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];D.primary=D[5];function re(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?re(Object(r),!0).forEach(function(t){_(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Je(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Xe(e,n){if(!e)return!1;if(e.contains)return e.contains(n);for(var r=n;r;){if(r===e)return!0;r=r.parentNode}return!1}var ne="data-rc-order",te="data-rc-priority",er="rc-util-key",L=new Map;function de(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):er}function V(e){if(e.attachTo)return e.attachTo;var n=document.querySelector("head");return n||document.body}function rr(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function U(e){return Array.from((L.get(e)||e).children).filter(function(n){return n.tagName==="STYLE"})}function ge(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!Je())return null;var r=n.csp,t=n.prepend,o=n.priority,a=o===void 0?0:o,i=rr(t),f=i==="prependQueue",c=document.createElement("style");c.setAttribute(ne,i),f&&a&&c.setAttribute(te,"".concat(a)),r!=null&&r.nonce&&(c.nonce=r==null?void 0:r.nonce),c.innerHTML=e;var u=V(n),s=u.firstChild;if(t){if(f){var l=(n.styles||U(u)).filter(function(y){if(!["prepend","prependQueue"].includes(y.getAttribute(ne)))return!1;var S=Number(y.getAttribute(te)||0);return a>=S});if(l.length)return u.insertBefore(c,l[l.length-1].nextSibling),c}u.insertBefore(c,s)}else u.appendChild(c);return c}function nr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=V(n);return(n.styles||U(r)).find(function(t){return t.getAttribute(de(n))===e})}function tr(e,n){var r=L.get(e);if(!r||!Xe(document,r)){var t=ge("",n),o=t.parentNode;L.set(e,o),e.removeChild(t)}}function ar(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=V(r),o=U(t),a=v(v({},r),{},{styles:o});tr(t,a);var i=nr(n,a);if(i){var f,c;if((f=a.csp)!==null&&f!==void 0&&f.nonce&&i.nonce!==((c=a.csp)===null||c===void 0?void 0:c.nonce)){var u;i.nonce=(u=a.csp)===null||u===void 0?void 0:u.nonce}return i.innerHTML!==e&&(i.innerHTML=e),i}var s=ge(e,a);return s.setAttribute(de(a),n),s}function me(e){var n;return e==null||(n=e.getRootNode)===null||n===void 0?void 0:n.call(e)}function or(e){return me(e)instanceof ShadowRoot}function ir(e){return or(e)?me(e):null}var z={},fr=function(n){};function cr(e,n){}function ur(e,n){}function lr(){z={}}function be(e,n,r){!n&&!z[r]&&(e(!1,r),z[r]=!0)}function R(e,n){be(cr,e,n)}function sr(e,n){be(ur,e,n)}R.preMessage=fr;R.resetWarned=lr;R.noteOnce=sr;function dr(e){return e.replace(/-(.)/g,function(n,r){return r.toUpperCase()})}function gr(e,n){R(e,"[@ant-design/icons] ".concat(n))}function ae(e){return w(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(w(e.icon)==="object"||typeof e.icon=="function")}function oe(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(n,r){var t=e[r];switch(r){case"class":n.className=t,delete n.class;break;default:delete n[r],n[dr(r)]=t}return n},{})}function B(e,n,r){return r?q.createElement(e.tag,v(v({key:n},oe(e.attrs)),r),(e.children||[]).map(function(t,o){return B(t,"".concat(n,"-").concat(e.tag,"-").concat(o))})):q.createElement(e.tag,v({key:n},oe(e.attrs)),(e.children||[]).map(function(t,o){return B(t,"".concat(n,"-").concat(e.tag,"-").concat(o))}))}function ve(e){return Ze(e)[0]}function pe(e){return e?Array.isArray(e)?e:[e]:[]}var mr=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,br=function(n){var r=b.useContext(ie),t=r.csp,o=r.prefixCls,a=mr;o&&(a=a.replace(/anticon/g,o)),b.useEffect(function(){var i=n.current,f=ir(i);ar(a,"@ant-design-icons",{prepend:!0,csp:t,attachTo:f})},[])},vr=["icon","className","onClick","style","primaryColor","secondaryColor"],T={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function pr(e){var n=e.primaryColor,r=e.secondaryColor;T.primaryColor=n,T.secondaryColor=r||ve(n),T.calculated=!!r}function yr(){return v({},T)}var x=function(n){var r=n.icon,t=n.className,o=n.onClick,a=n.style,i=n.primaryColor,f=n.secondaryColor,c=ce(n,vr),u=b.useRef(),s=T;if(i&&(s={primaryColor:i,secondaryColor:f||ve(i)}),br(u),gr(ae(r),"icon should be icon definiton, but got ".concat(r)),!ae(r))return null;var l=r;return l&&typeof l.icon=="function"&&(l=v(v({},l),{},{icon:l.icon(s.primaryColor,s.secondaryColor)})),B(l.icon,"svg-".concat(l.name),v(v({className:t,onClick:o,style:a,"data-icon":l.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c),{},{ref:u}))};x.displayName="IconReact";x.getTwoToneColors=yr;x.setTwoToneColors=pr;function ye(e){var n=pe(e),r=fe(n,2),t=r[0],o=r[1];return x.setTwoToneColors({primaryColor:t,secondaryColor:o})}function hr(){var e=x.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var Cr=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];ye(D.primary);var N=b.forwardRef(function(e,n){var r=e.className,t=e.icon,o=e.spin,a=e.rotate,i=e.tabIndex,f=e.onClick,c=e.twoToneColor,u=ce(e,Cr),s=b.useContext(ie),l=s.prefixCls,y=l===void 0?"anticon":l,S=s.rootClassName,he=Ie(S,y,_(_({},"".concat(y,"-").concat(t.name),!!t.name),"".concat(y,"-spin"),!!o||t.name==="loading"),r),M=i;M===void 0&&f&&(M=-1);var Ce=a?{msTransform:"rotate(".concat(a,"deg)"),transform:"rotate(".concat(a,"deg)")}:void 0,we=pe(c),$=fe(we,2),xe=$[0],Se=$[1];return b.createElement("span",E({role:"img","aria-label":t.name},u,{ref:n,tabIndex:M,onClick:f,className:he}),b.createElement(x,{icon:t,primaryColor:xe,secondaryColor:Se,style:Ce}))});N.displayName="AntdIcon";N.getTwoToneColor=hr;N.setTwoToneColor=ye;var wr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.3 506.3L781.7 405.6a7.23 7.23 0 00-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7a7.14 7.14 0 00-11.3 0L405.6 242.3a7.23 7.23 0 005.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3a7.14 7.14 0 000 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8a7.3 7.3 0 00.1-11.4z"}}]},name:"drag",theme:"outlined"},xr=function(n,r){return b.createElement(N,E({},n,{ref:r,icon:wr}))},Sr=b.forwardRef(xr);function kr(){const e=()=>{};return C.jsx(C.Fragment,{children:C.jsxs("div",{id:"app",style:{width:W.width,height:W.height},children:[C.jsx("div",{id:"drag-icon",children:C.jsx(Sr,{onClick:e,style:{fontSize:"24px",color:"rgb(53, 150, 235)",cursor:"grab"}})}),C.jsx("div",{children:"当前元素信息"})]})})}Te.createRoot(document.getElementById("root")).render(C.jsx(kr,{}));
