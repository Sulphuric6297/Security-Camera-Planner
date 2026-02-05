(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function k_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var E0={exports:{}},hu={},T0={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dl=Symbol.for("react.element"),z_=Symbol.for("react.portal"),B_=Symbol.for("react.fragment"),H_=Symbol.for("react.strict_mode"),V_=Symbol.for("react.profiler"),G_=Symbol.for("react.provider"),W_=Symbol.for("react.context"),j_=Symbol.for("react.forward_ref"),X_=Symbol.for("react.suspense"),$_=Symbol.for("react.memo"),Y_=Symbol.for("react.lazy"),Np=Symbol.iterator;function q_(t){return t===null||typeof t!="object"?null:(t=Np&&t[Np]||t["@@iterator"],typeof t=="function"?t:null)}var b0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A0=Object.assign,C0={};function Wo(t,e,n){this.props=t,this.context=e,this.refs=C0,this.updater=n||b0}Wo.prototype.isReactComponent={};Wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function R0(){}R0.prototype=Wo.prototype;function ph(t,e,n){this.props=t,this.context=e,this.refs=C0,this.updater=n||b0}var mh=ph.prototype=new R0;mh.constructor=ph;A0(mh,Wo.prototype);mh.isPureReactComponent=!0;var Ip=Array.isArray,P0=Object.prototype.hasOwnProperty,gh={current:null},L0={key:!0,ref:!0,__self:!0,__source:!0};function N0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)P0.call(e,i)&&!L0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:dl,type:t,key:s,ref:o,props:r,_owner:gh.current}}function Z_(t,e){return{$$typeof:dl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===dl}function K_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dp=/\/+/g;function Gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?K_(""+t.key):e.toString(36)}function xc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case dl:case z_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Gu(o,0):i,Ip(r)?(n="",t!=null&&(n=t.replace(Dp,"$&/")+"/"),xc(r,e,n,"",function(c){return c})):r!=null&&(vh(r)&&(r=Z_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Dp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ip(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Gu(s,a);o+=xc(s,e,n,l,r)}else if(l=q_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Gu(s,a++),o+=xc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function El(t,e,n){if(t==null)return t;var i=[],r=0;return xc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function J_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wn={current:null},_c={transition:null},Q_={ReactCurrentDispatcher:Wn,ReactCurrentBatchConfig:_c,ReactCurrentOwner:gh};function I0(){throw Error("act(...) is not supported in production builds of React.")}Mt.Children={map:El,forEach:function(t,e,n){El(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return El(t,function(){e++}),e},toArray:function(t){return El(t,function(e){return e})||[]},only:function(t){if(!vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Mt.Component=Wo;Mt.Fragment=B_;Mt.Profiler=V_;Mt.PureComponent=ph;Mt.StrictMode=H_;Mt.Suspense=X_;Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q_;Mt.act=I0;Mt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=A0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)P0.call(e,l)&&!L0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:dl,type:t.type,key:r,ref:s,props:i,_owner:o}};Mt.createContext=function(t){return t={$$typeof:W_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:G_,_context:t},t.Consumer=t};Mt.createElement=N0;Mt.createFactory=function(t){var e=N0.bind(null,t);return e.type=t,e};Mt.createRef=function(){return{current:null}};Mt.forwardRef=function(t){return{$$typeof:j_,render:t}};Mt.isValidElement=vh;Mt.lazy=function(t){return{$$typeof:Y_,_payload:{_status:-1,_result:t},_init:J_}};Mt.memo=function(t,e){return{$$typeof:$_,type:t,compare:e===void 0?null:e}};Mt.startTransition=function(t){var e=_c.transition;_c.transition={};try{t()}finally{_c.transition=e}};Mt.unstable_act=I0;Mt.useCallback=function(t,e){return Wn.current.useCallback(t,e)};Mt.useContext=function(t){return Wn.current.useContext(t)};Mt.useDebugValue=function(){};Mt.useDeferredValue=function(t){return Wn.current.useDeferredValue(t)};Mt.useEffect=function(t,e){return Wn.current.useEffect(t,e)};Mt.useId=function(){return Wn.current.useId()};Mt.useImperativeHandle=function(t,e,n){return Wn.current.useImperativeHandle(t,e,n)};Mt.useInsertionEffect=function(t,e){return Wn.current.useInsertionEffect(t,e)};Mt.useLayoutEffect=function(t,e){return Wn.current.useLayoutEffect(t,e)};Mt.useMemo=function(t,e){return Wn.current.useMemo(t,e)};Mt.useReducer=function(t,e,n){return Wn.current.useReducer(t,e,n)};Mt.useRef=function(t){return Wn.current.useRef(t)};Mt.useState=function(t){return Wn.current.useState(t)};Mt.useSyncExternalStore=function(t,e,n){return Wn.current.useSyncExternalStore(t,e,n)};Mt.useTransition=function(){return Wn.current.useTransition()};Mt.version="18.3.1";T0.exports=Mt;var We=T0.exports;const ey=k_(We);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty=We,ny=Symbol.for("react.element"),iy=Symbol.for("react.fragment"),ry=Object.prototype.hasOwnProperty,sy=ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oy={key:!0,ref:!0,__self:!0,__source:!0};function D0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ry.call(e,i)&&!oy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ny,type:t,key:s,ref:o,props:r,_owner:sy.current}}hu.Fragment=iy;hu.jsx=D0;hu.jsxs=D0;E0.exports=hu;var M=E0.exports,U0={exports:{}},ui={},O0={exports:{}},F0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,$){var Y=z.length;z.push($);e:for(;0<Y;){var le=Y-1>>>1,fe=z[le];if(0<r(fe,$))z[le]=$,z[Y]=fe,Y=le;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var $=z[0],Y=z.pop();if(Y!==$){z[0]=Y;e:for(var le=0,fe=z.length,Q=fe>>>1;le<Q;){var de=2*(le+1)-1,Ce=z[de],Fe=de+1,Le=z[Fe];if(0>r(Ce,Y))Fe<fe&&0>r(Le,Ce)?(z[le]=Le,z[Fe]=Y,le=Fe):(z[le]=Ce,z[de]=Y,le=de);else if(Fe<fe&&0>r(Le,Y))z[le]=Le,z[Fe]=Y,le=Fe;else break e}}return $}function r(z,$){var Y=z.sortIndex-$.sortIndex;return Y!==0?Y:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,v=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=z)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function S(z){if(y=!1,x(z),!v)if(n(l)!==null)v=!0,j(L);else{var $=n(c);$!==null&&ee(S,$.startTime-z)}}function L(z,$){v=!1,y&&(y=!1,d(F),F=-1),p=!0;var Y=h;try{for(x($),f=n(l);f!==null&&(!(f.expirationTime>$)||z&&!V());){var le=f.callback;if(typeof le=="function"){f.callback=null,h=f.priorityLevel;var fe=le(f.expirationTime<=$);$=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(l)&&i(l),x($)}else i(l);f=n(l)}if(f!==null)var Q=!0;else{var de=n(c);de!==null&&ee(S,de.startTime-$),Q=!1}return Q}finally{f=null,h=Y,p=!1}}var A=!1,R=null,F=-1,E=5,T=-1;function V(){return!(t.unstable_now()-T<E)}function X(){if(R!==null){var z=t.unstable_now();T=z;var $=!0;try{$=R(!0,z)}finally{$?te():(A=!1,R=null)}}else A=!1}var te;if(typeof m=="function")te=function(){m(X)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,W=I.port2;I.port1.onmessage=X,te=function(){W.postMessage(null)}}else te=function(){g(X,0)};function j(z){R=z,A||(A=!0,te())}function ee(z,$){F=g(function(){z(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,j(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var Y=h;h=$;try{return z()}finally{h=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=h;h=z;try{return $()}finally{h=Y}},t.unstable_scheduleCallback=function(z,$,Y){var le=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?le+Y:le):Y=le,z){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Y+fe,z={id:u++,callback:$,priorityLevel:z,startTime:Y,expirationTime:fe,sortIndex:-1},Y>le?(z.sortIndex=Y,e(c,z),n(l)===null&&z===n(c)&&(y?(d(F),F=-1):y=!0,ee(S,Y-le))):(z.sortIndex=fe,e(l,z),v||p||(v=!0,j(L))),z},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(z){var $=h;return function(){var Y=h;h=$;try{return z.apply(this,arguments)}finally{h=Y}}}})(F0);O0.exports=F0;var ay=O0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly=We,ci=ay;function ye(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k0=new Set,Ha={};function Is(t,e){Io(t,e),Io(t+"Capture",e)}function Io(t,e){for(Ha[t]=e,t=0;t<e.length;t++)k0.add(e[t])}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=Object.prototype.hasOwnProperty,cy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Up={},Op={};function uy(t){return lf.call(Op,t)?!0:lf.call(Up,t)?!1:cy.test(t)?Op[t]=!0:(Up[t]=!0,!1)}function dy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fy(t,e,n,i){if(e===null||typeof e>"u"||dy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var An={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){An[t]=new jn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];An[e]=new jn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){An[t]=new jn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){An[t]=new jn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){An[t]=new jn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){An[t]=new jn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){An[t]=new jn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){An[t]=new jn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){An[t]=new jn(t,5,!1,t.toLowerCase(),null,!1,!1)});var xh=/[\-:]([a-z])/g;function _h(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xh,_h);An[e]=new jn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xh,_h);An[e]=new jn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xh,_h);An[e]=new jn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){An[t]=new jn(t,1,!1,t.toLowerCase(),null,!1,!1)});An.xlinkHref=new jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){An[t]=new jn(t,1,!1,t.toLowerCase(),null,!0,!0)});function yh(t,e,n,i){var r=An.hasOwnProperty(e)?An[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fy(e,n,r,i)&&(n=null),i||r===null?uy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xr=ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tl=Symbol.for("react.element"),co=Symbol.for("react.portal"),uo=Symbol.for("react.fragment"),Sh=Symbol.for("react.strict_mode"),cf=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),B0=Symbol.for("react.context"),Mh=Symbol.for("react.forward_ref"),uf=Symbol.for("react.suspense"),df=Symbol.for("react.suspense_list"),wh=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),H0=Symbol.for("react.offscreen"),Fp=Symbol.iterator;function ta(t){return t===null||typeof t!="object"?null:(t=Fp&&t[Fp]||t["@@iterator"],typeof t=="function"?t:null)}var nn=Object.assign,Wu;function _a(t){if(Wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wu=e&&e[1]||""}return`
`+Wu+t}var ju=!1;function Xu(t,e){if(!t||ju)return"";ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ju=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_a(t):""}function hy(t){switch(t.tag){case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return t=Xu(t.type,!1),t;case 11:return t=Xu(t.type.render,!1),t;case 1:return t=Xu(t.type,!0),t;default:return""}}function ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case uo:return"Fragment";case co:return"Portal";case cf:return"Profiler";case Sh:return"StrictMode";case uf:return"Suspense";case df:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B0:return(t.displayName||"Context")+".Consumer";case z0:return(t._context.displayName||"Context")+".Provider";case Mh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wh:return e=t.displayName||null,e!==null?e:ff(t.type)||"Memo";case Cr:e=t._payload,t=t._init;try{return ff(t(e))}catch{}}return null}function py(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ff(e);case 8:return e===Sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function V0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function my(t){var e=V0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bl(t){t._valueTracker||(t._valueTracker=my(t))}function G0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=V0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hf(t,e){var n=e.checked;return nn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function W0(t,e){e=e.checked,e!=null&&yh(t,"checked",e,!1)}function pf(t,e){W0(t,e);var n=qr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mf(t,e.type,n):e.hasOwnProperty("defaultValue")&&mf(t,e.type,qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mf(t,e,n){(e!=="number"||Ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ya=Array.isArray;function To(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+qr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ye(91));return nn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ye(92));if(ya(n)){if(1<n.length)throw Error(ye(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qr(n)}}function j0(t,e){var n=qr(e.value),i=qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function X0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?X0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Al,$0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gy=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(t){gy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wa[e]=wa[t]})});function Y0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wa.hasOwnProperty(t)&&wa[t]?(""+e).trim():e+"px"}function q0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Y0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var vy=nn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xf(t,e){if(e){if(vy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ye(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ye(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ye(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ye(62))}}function _f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yf=null;function Eh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sf=null,bo=null,Ao=null;function Vp(t){if(t=pl(t)){if(typeof Sf!="function")throw Error(ye(280));var e=t.stateNode;e&&(e=xu(e),Sf(t.stateNode,t.type,e))}}function Z0(t){bo?Ao?Ao.push(t):Ao=[t]:bo=t}function K0(){if(bo){var t=bo,e=Ao;if(Ao=bo=null,Vp(t),e)for(t=0;t<e.length;t++)Vp(e[t])}}function J0(t,e){return t(e)}function Q0(){}var $u=!1;function ev(t,e,n){if($u)return t(e,n);$u=!0;try{return J0(t,e,n)}finally{$u=!1,(bo!==null||Ao!==null)&&(Q0(),K0())}}function Ga(t,e){var n=t.stateNode;if(n===null)return null;var i=xu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ye(231,e,typeof n));return n}var Mf=!1;if(hr)try{var na={};Object.defineProperty(na,"passive",{get:function(){Mf=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{Mf=!1}function xy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ea=!1,Dc=null,Uc=!1,wf=null,_y={onError:function(t){Ea=!0,Dc=t}};function yy(t,e,n,i,r,s,o,a,l){Ea=!1,Dc=null,xy.apply(_y,arguments)}function Sy(t,e,n,i,r,s,o,a,l){if(yy.apply(this,arguments),Ea){if(Ea){var c=Dc;Ea=!1,Dc=null}else throw Error(ye(198));Uc||(Uc=!0,wf=c)}}function Ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gp(t){if(Ds(t)!==t)throw Error(ye(188))}function My(t){var e=t.alternate;if(!e){if(e=Ds(t),e===null)throw Error(ye(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Gp(r),t;if(s===i)return Gp(r),e;s=s.sibling}throw Error(ye(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ye(189))}}if(n.alternate!==i)throw Error(ye(190))}if(n.tag!==3)throw Error(ye(188));return n.stateNode.current===n?t:e}function nv(t){return t=My(t),t!==null?iv(t):null}function iv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iv(t);if(e!==null)return e;t=t.sibling}return null}var rv=ci.unstable_scheduleCallback,Wp=ci.unstable_cancelCallback,wy=ci.unstable_shouldYield,Ey=ci.unstable_requestPaint,sn=ci.unstable_now,Ty=ci.unstable_getCurrentPriorityLevel,Th=ci.unstable_ImmediatePriority,sv=ci.unstable_UserBlockingPriority,Oc=ci.unstable_NormalPriority,by=ci.unstable_LowPriority,ov=ci.unstable_IdlePriority,pu=null,Yi=null;function Ay(t){if(Yi&&typeof Yi.onCommitFiberRoot=="function")try{Yi.onCommitFiberRoot(pu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ii=Math.clz32?Math.clz32:Py,Cy=Math.log,Ry=Math.LN2;function Py(t){return t>>>=0,t===0?32:31-(Cy(t)/Ry|0)|0}var Cl=64,Rl=4194304;function Sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Sa(a):(s&=o,s!==0&&(i=Sa(s)))}else o=n&~r,o!==0?i=Sa(o):s!==0&&(i=Sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ii(e),r=1<<n,i|=t[n],e&=~r;return i}function Ly(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ny(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ii(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Ly(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function av(){var t=Cl;return Cl<<=1,!(Cl&4194240)&&(Cl=64),t}function Yu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ii(e),t[e]=n}function Iy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ii(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ii(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Nt=0;function lv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cv,Ah,uv,dv,fv,Tf=!1,Pl=[],Fr=null,kr=null,zr=null,Wa=new Map,ja=new Map,Pr=[],Dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jp(t,e){switch(t){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(e.pointerId)}}function ia(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=pl(e),e!==null&&Ah(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Uy(t,e,n,i,r){switch(e){case"focusin":return Fr=ia(Fr,t,e,n,i,r),!0;case"dragenter":return kr=ia(kr,t,e,n,i,r),!0;case"mouseover":return zr=ia(zr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wa.set(s,ia(Wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ja.set(s,ia(ja.get(s)||null,t,e,n,i,r)),!0}return!1}function hv(t){var e=gs(t.target);if(e!==null){var n=Ds(e);if(n!==null){if(e=n.tag,e===13){if(e=tv(n),e!==null){t.blockedOn=e,fv(t.priority,function(){uv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);yf=i,n.target.dispatchEvent(i),yf=null}else return e=pl(n),e!==null&&Ah(e),t.blockedOn=n,!1;e.shift()}return!0}function Xp(t,e,n){yc(t)&&n.delete(e)}function Oy(){Tf=!1,Fr!==null&&yc(Fr)&&(Fr=null),kr!==null&&yc(kr)&&(kr=null),zr!==null&&yc(zr)&&(zr=null),Wa.forEach(Xp),ja.forEach(Xp)}function ra(t,e){t.blockedOn===e&&(t.blockedOn=null,Tf||(Tf=!0,ci.unstable_scheduleCallback(ci.unstable_NormalPriority,Oy)))}function Xa(t){function e(r){return ra(r,t)}if(0<Pl.length){ra(Pl[0],t);for(var n=1;n<Pl.length;n++){var i=Pl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fr!==null&&ra(Fr,t),kr!==null&&ra(kr,t),zr!==null&&ra(zr,t),Wa.forEach(e),ja.forEach(e),n=0;n<Pr.length;n++)i=Pr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pr.length&&(n=Pr[0],n.blockedOn===null);)hv(n),n.blockedOn===null&&Pr.shift()}var Co=xr.ReactCurrentBatchConfig,kc=!0;function Fy(t,e,n,i){var r=Nt,s=Co.transition;Co.transition=null;try{Nt=1,Ch(t,e,n,i)}finally{Nt=r,Co.transition=s}}function ky(t,e,n,i){var r=Nt,s=Co.transition;Co.transition=null;try{Nt=4,Ch(t,e,n,i)}finally{Nt=r,Co.transition=s}}function Ch(t,e,n,i){if(kc){var r=bf(t,e,n,i);if(r===null)rd(t,e,i,zc,n),jp(t,i);else if(Uy(r,t,e,n,i))i.stopPropagation();else if(jp(t,i),e&4&&-1<Dy.indexOf(t)){for(;r!==null;){var s=pl(r);if(s!==null&&cv(s),s=bf(t,e,n,i),s===null&&rd(t,e,i,zc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else rd(t,e,i,null,n)}}var zc=null;function bf(t,e,n,i){if(zc=null,t=Eh(i),t=gs(t),t!==null)if(e=Ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zc=t,null}function pv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ty()){case Th:return 1;case sv:return 4;case Oc:case by:return 16;case ov:return 536870912;default:return 16}default:return 16}}var Nr=null,Rh=null,Sc=null;function mv(){if(Sc)return Sc;var t,e=Rh,n=e.length,i,r="value"in Nr?Nr.value:Nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Sc=r.slice(t,1<i?1-i:void 0)}function Mc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ll(){return!0}function $p(){return!1}function di(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ll:$p,this.isPropagationStopped=$p,this}return nn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),e}var jo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ph=di(jo),hl=nn({},jo,{view:0,detail:0}),zy=di(hl),qu,Zu,sa,mu=nn({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sa&&(sa&&t.type==="mousemove"?(qu=t.screenX-sa.screenX,Zu=t.screenY-sa.screenY):Zu=qu=0,sa=t),qu)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),Yp=di(mu),By=nn({},mu,{dataTransfer:0}),Hy=di(By),Vy=nn({},hl,{relatedTarget:0}),Ku=di(Vy),Gy=nn({},jo,{animationName:0,elapsedTime:0,pseudoElement:0}),Wy=di(Gy),jy=nn({},jo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xy=di(jy),$y=nn({},jo,{data:0}),qp=di($y),Yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ky(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Zy[t])?!!e[t]:!1}function Lh(){return Ky}var Jy=nn({},hl,{key:function(t){if(t.key){var e=Yy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lh,charCode:function(t){return t.type==="keypress"?Mc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qy=di(Jy),eS=nn({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=di(eS),tS=nn({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lh}),nS=di(tS),iS=nn({},jo,{propertyName:0,elapsedTime:0,pseudoElement:0}),rS=di(iS),sS=nn({},mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oS=di(sS),aS=[9,13,27,32],Nh=hr&&"CompositionEvent"in window,Ta=null;hr&&"documentMode"in document&&(Ta=document.documentMode);var lS=hr&&"TextEvent"in window&&!Ta,gv=hr&&(!Nh||Ta&&8<Ta&&11>=Ta),Kp=" ",Jp=!1;function vv(t,e){switch(t){case"keyup":return aS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fo=!1;function cS(t,e){switch(t){case"compositionend":return xv(e);case"keypress":return e.which!==32?null:(Jp=!0,Kp);case"textInput":return t=e.data,t===Kp&&Jp?null:t;default:return null}}function uS(t,e){if(fo)return t==="compositionend"||!Nh&&vv(t,e)?(t=mv(),Sc=Rh=Nr=null,fo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gv&&e.locale!=="ko"?null:e.data;default:return null}}var dS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dS[t.type]:e==="textarea"}function _v(t,e,n,i){Z0(i),e=Bc(e,"onChange"),0<e.length&&(n=new Ph("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ba=null,$a=null;function fS(t){Pv(t,0)}function gu(t){var e=mo(t);if(G0(e))return t}function hS(t,e){if(t==="change")return e}var yv=!1;if(hr){var Ju;if(hr){var Qu="oninput"in document;if(!Qu){var em=document.createElement("div");em.setAttribute("oninput","return;"),Qu=typeof em.oninput=="function"}Ju=Qu}else Ju=!1;yv=Ju&&(!document.documentMode||9<document.documentMode)}function tm(){ba&&(ba.detachEvent("onpropertychange",Sv),$a=ba=null)}function Sv(t){if(t.propertyName==="value"&&gu($a)){var e=[];_v(e,$a,t,Eh(t)),ev(fS,e)}}function pS(t,e,n){t==="focusin"?(tm(),ba=e,$a=n,ba.attachEvent("onpropertychange",Sv)):t==="focusout"&&tm()}function mS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gu($a)}function gS(t,e){if(t==="click")return gu(e)}function vS(t,e){if(t==="input"||t==="change")return gu(e)}function xS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ui=typeof Object.is=="function"?Object.is:xS;function Ya(t,e){if(Ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!lf.call(e,r)||!Ui(t[r],e[r]))return!1}return!0}function nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function im(t,e){var n=nm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nm(n)}}function Mv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wv(){for(var t=window,e=Ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ic(t.document)}return e}function Ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _S(t){var e=wv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Mv(n.ownerDocument.documentElement,n)){if(i!==null&&Ih(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=im(n,s);var o=im(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yS=hr&&"documentMode"in document&&11>=document.documentMode,ho=null,Af=null,Aa=null,Cf=!1;function rm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cf||ho==null||ho!==Ic(i)||(i=ho,"selectionStart"in i&&Ih(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Aa&&Ya(Aa,i)||(Aa=i,i=Bc(Af,"onSelect"),0<i.length&&(e=new Ph("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ho)))}function Nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var po={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},ed={},Ev={};hr&&(Ev=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function vu(t){if(ed[t])return ed[t];if(!po[t])return t;var e=po[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ev)return ed[t]=e[n];return t}var Tv=vu("animationend"),bv=vu("animationiteration"),Av=vu("animationstart"),Cv=vu("transitionend"),Rv=new Map,sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(t,e){Rv.set(t,e),Is(e,[t])}for(var td=0;td<sm.length;td++){var nd=sm[td],SS=nd.toLowerCase(),MS=nd[0].toUpperCase()+nd.slice(1);Jr(SS,"on"+MS)}Jr(Tv,"onAnimationEnd");Jr(bv,"onAnimationIteration");Jr(Av,"onAnimationStart");Jr("dblclick","onDoubleClick");Jr("focusin","onFocus");Jr("focusout","onBlur");Jr(Cv,"onTransitionEnd");Io("onMouseEnter",["mouseout","mouseover"]);Io("onMouseLeave",["mouseout","mouseover"]);Io("onPointerEnter",["pointerout","pointerover"]);Io("onPointerLeave",["pointerout","pointerover"]);Is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Is("onBeforeInput",["compositionend","keypress","textInput","paste"]);Is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function om(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Sy(i,e,void 0,t),t.currentTarget=null}function Pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;om(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;om(r,a,c),s=l}}}if(Uc)throw t=wf,Uc=!1,wf=null,t}function Gt(t,e){var n=e[If];n===void 0&&(n=e[If]=new Set);var i=t+"__bubble";n.has(i)||(Lv(e,t,2,!1),n.add(i))}function id(t,e,n){var i=0;e&&(i|=4),Lv(n,t,i,e)}var Il="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[Il]){t[Il]=!0,k0.forEach(function(n){n!=="selectionchange"&&(wS.has(n)||id(n,!1,t),id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Il]||(e[Il]=!0,id("selectionchange",!1,e))}}function Lv(t,e,n,i){switch(pv(e)){case 1:var r=Fy;break;case 4:r=ky;break;default:r=Ch}n=r.bind(null,e,n,t),r=void 0,!Mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function rd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=gs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ev(function(){var c=s,u=Eh(n),f=[];e:{var h=Rv.get(t);if(h!==void 0){var p=Ph,v=t;switch(t){case"keypress":if(Mc(n)===0)break e;case"keydown":case"keyup":p=Qy;break;case"focusin":v="focus",p=Ku;break;case"focusout":v="blur",p=Ku;break;case"beforeblur":case"afterblur":p=Ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=nS;break;case Tv:case bv:case Av:p=Wy;break;case Cv:p=rS;break;case"scroll":p=zy;break;case"wheel":p=oS;break;case"copy":case"cut":case"paste":p=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zp}var y=(e&4)!==0,g=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var m=c,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=Ga(m,d),S!=null&&y.push(Za(m,S,x)))),g)break;m=m.return}0<y.length&&(h=new p(h,v,null,n,u),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==yf&&(v=n.relatedTarget||n.fromElement)&&(gs(v)||v[pr]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?gs(v):null,v!==null&&(g=Ds(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=Yp,S="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Zp,S="onPointerLeave",d="onPointerEnter",m="pointer"),g=p==null?h:mo(p),x=v==null?h:mo(v),h=new y(S,m+"leave",p,n,u),h.target=g,h.relatedTarget=x,S=null,gs(u)===c&&(y=new y(d,m+"enter",v,n,u),y.target=x,y.relatedTarget=g,S=y),g=S,p&&v)t:{for(y=p,d=v,m=0,x=y;x;x=Hs(x))m++;for(x=0,S=d;S;S=Hs(S))x++;for(;0<m-x;)y=Hs(y),m--;for(;0<x-m;)d=Hs(d),x--;for(;m--;){if(y===d||d!==null&&y===d.alternate)break t;y=Hs(y),d=Hs(d)}y=null}else y=null;p!==null&&am(f,h,p,y,!1),v!==null&&g!==null&&am(f,g,v,y,!0)}}e:{if(h=c?mo(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var L=hS;else if(Qp(h))if(yv)L=vS;else{L=mS;var A=pS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=gS);if(L&&(L=L(t,c))){_v(f,L,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&mf(h,"number",h.value)}switch(A=c?mo(c):window,t){case"focusin":(Qp(A)||A.contentEditable==="true")&&(ho=A,Af=c,Aa=null);break;case"focusout":Aa=Af=ho=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,rm(f,n,u);break;case"selectionchange":if(yS)break;case"keydown":case"keyup":rm(f,n,u)}var R;if(Nh)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else fo?vv(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(gv&&n.locale!=="ko"&&(fo||F!=="onCompositionStart"?F==="onCompositionEnd"&&fo&&(R=mv()):(Nr=u,Rh="value"in Nr?Nr.value:Nr.textContent,fo=!0)),A=Bc(c,F),0<A.length&&(F=new qp(F,t,null,n,u),f.push({event:F,listeners:A}),R?F.data=R:(R=xv(n),R!==null&&(F.data=R)))),(R=lS?cS(t,n):uS(t,n))&&(c=Bc(c,"onBeforeInput"),0<c.length&&(u=new qp("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=R))}Pv(f,e)})}function Za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ga(t,n),s!=null&&i.unshift(Za(t,s,r)),s=Ga(t,e),s!=null&&i.push(Za(t,s,r))),t=t.return}return i}function Hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function am(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ga(n,s),l!=null&&o.unshift(Za(n,l,a))):r||(l=Ga(n,s),l!=null&&o.push(Za(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ES=/\r\n?/g,TS=/\u0000|\uFFFD/g;function lm(t){return(typeof t=="string"?t:""+t).replace(ES,`
`).replace(TS,"")}function Dl(t,e,n){if(e=lm(e),lm(t)!==e&&n)throw Error(ye(425))}function Hc(){}var Rf=null,Pf=null;function Lf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nf=typeof setTimeout=="function"?setTimeout:void 0,bS=typeof clearTimeout=="function"?clearTimeout:void 0,cm=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof cm<"u"?function(t){return cm.resolve(null).then(t).catch(CS)}:Nf;function CS(t){setTimeout(function(){throw t})}function sd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xa(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xo=Math.random().toString(36).slice(2),ji="__reactFiber$"+Xo,Ka="__reactProps$"+Xo,pr="__reactContainer$"+Xo,If="__reactEvents$"+Xo,RS="__reactListeners$"+Xo,PS="__reactHandles$"+Xo;function gs(t){var e=t[ji];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pr]||n[ji]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=um(t);t!==null;){if(n=t[ji])return n;t=um(t)}return e}t=n,n=t.parentNode}return null}function pl(t){return t=t[ji]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function mo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ye(33))}function xu(t){return t[Ka]||null}var Df=[],go=-1;function Qr(t){return{current:t}}function jt(t){0>go||(t.current=Df[go],Df[go]=null,go--)}function Ht(t,e){go++,Df[go]=t.current,t.current=e}var Zr={},Dn=Qr(Zr),Jn=Qr(!1),Es=Zr;function Do(t,e){var n=t.type.contextTypes;if(!n)return Zr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Qn(t){return t=t.childContextTypes,t!=null}function Vc(){jt(Jn),jt(Dn)}function dm(t,e,n){if(Dn.current!==Zr)throw Error(ye(168));Ht(Dn,e),Ht(Jn,n)}function Nv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ye(108,py(t)||"Unknown",r));return nn({},n,i)}function Gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zr,Es=Dn.current,Ht(Dn,t),Ht(Jn,Jn.current),!0}function fm(t,e,n){var i=t.stateNode;if(!i)throw Error(ye(169));n?(t=Nv(t,e,Es),i.__reactInternalMemoizedMergedChildContext=t,jt(Jn),jt(Dn),Ht(Dn,t)):jt(Jn),Ht(Jn,n)}var lr=null,_u=!1,od=!1;function Iv(t){lr===null?lr=[t]:lr.push(t)}function LS(t){_u=!0,Iv(t)}function es(){if(!od&&lr!==null){od=!0;var t=0,e=Nt;try{var n=lr;for(Nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}lr=null,_u=!1}catch(r){throw lr!==null&&(lr=lr.slice(t+1)),rv(Th,es),r}finally{Nt=e,od=!1}}return null}var vo=[],xo=0,Wc=null,jc=0,mi=[],gi=0,Ts=null,cr=1,ur="";function cs(t,e){vo[xo++]=jc,vo[xo++]=Wc,Wc=t,jc=e}function Dv(t,e,n){mi[gi++]=cr,mi[gi++]=ur,mi[gi++]=Ts,Ts=t;var i=cr;t=ur;var r=32-Ii(i)-1;i&=~(1<<r),n+=1;var s=32-Ii(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,cr=1<<32-Ii(e)+r|n<<r|i,ur=s+t}else cr=1<<s|n<<r|i,ur=t}function Dh(t){t.return!==null&&(cs(t,1),Dv(t,1,0))}function Uh(t){for(;t===Wc;)Wc=vo[--xo],vo[xo]=null,jc=vo[--xo],vo[xo]=null;for(;t===Ts;)Ts=mi[--gi],mi[gi]=null,ur=mi[--gi],mi[gi]=null,cr=mi[--gi],mi[gi]=null}var li=null,ai=null,Yt=!1,Li=null;function Uv(t,e){var n=_i(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,li=t,ai=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,li=t,ai=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ts!==null?{id:cr,overflow:ur}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_i(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,li=t,ai=null,!0):!1;default:return!1}}function Uf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Of(t){if(Yt){var e=ai;if(e){var n=e;if(!hm(t,e)){if(Uf(t))throw Error(ye(418));e=Br(n.nextSibling);var i=li;e&&hm(t,e)?Uv(i,n):(t.flags=t.flags&-4097|2,Yt=!1,li=t)}}else{if(Uf(t))throw Error(ye(418));t.flags=t.flags&-4097|2,Yt=!1,li=t}}}function pm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;li=t}function Ul(t){if(t!==li)return!1;if(!Yt)return pm(t),Yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lf(t.type,t.memoizedProps)),e&&(e=ai)){if(Uf(t))throw Ov(),Error(ye(418));for(;e;)Uv(t,e),e=Br(e.nextSibling)}if(pm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ye(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ai=Br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ai=null}}else ai=li?Br(t.stateNode.nextSibling):null;return!0}function Ov(){for(var t=ai;t;)t=Br(t.nextSibling)}function Uo(){ai=li=null,Yt=!1}function Oh(t){Li===null?Li=[t]:Li.push(t)}var NS=xr.ReactCurrentBatchConfig;function oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ye(309));var i=n.stateNode}if(!i)throw Error(ye(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ye(284));if(!n._owner)throw Error(ye(290,t))}return t}function Ol(t,e){throw t=Object.prototype.toString.call(e),Error(ye(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mm(t){var e=t._init;return e(t._payload)}function Fv(t){function e(d,m){if(t){var x=d.deletions;x===null?(d.deletions=[m],d.flags|=16):x.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=Wr(d,m),d.index=0,d.sibling=null,d}function s(d,m,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<m?(d.flags|=2,m):x):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,m,x,S){return m===null||m.tag!==6?(m=hd(x,d.mode,S),m.return=d,m):(m=r(m,x),m.return=d,m)}function l(d,m,x,S){var L=x.type;return L===uo?u(d,m,x.props.children,S,x.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Cr&&mm(L)===m.type)?(S=r(m,x.props),S.ref=oa(d,m,x),S.return=d,S):(S=Rc(x.type,x.key,x.props,null,d.mode,S),S.ref=oa(d,m,x),S.return=d,S)}function c(d,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=pd(x,d.mode,S),m.return=d,m):(m=r(m,x.children||[]),m.return=d,m)}function u(d,m,x,S,L){return m===null||m.tag!==7?(m=ys(x,d.mode,S,L),m.return=d,m):(m=r(m,x),m.return=d,m)}function f(d,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=hd(""+m,d.mode,x),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Tl:return x=Rc(m.type,m.key,m.props,null,d.mode,x),x.ref=oa(d,null,m),x.return=d,x;case co:return m=pd(m,d.mode,x),m.return=d,m;case Cr:var S=m._init;return f(d,S(m._payload),x)}if(ya(m)||ta(m))return m=ys(m,d.mode,x,null),m.return=d,m;Ol(d,m)}return null}function h(d,m,x,S){var L=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:a(d,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Tl:return x.key===L?l(d,m,x,S):null;case co:return x.key===L?c(d,m,x,S):null;case Cr:return L=x._init,h(d,m,L(x._payload),S)}if(ya(x)||ta(x))return L!==null?null:u(d,m,x,S,null);Ol(d,x)}return null}function p(d,m,x,S,L){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,a(m,d,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Tl:return d=d.get(S.key===null?x:S.key)||null,l(m,d,S,L);case co:return d=d.get(S.key===null?x:S.key)||null,c(m,d,S,L);case Cr:var A=S._init;return p(d,m,x,A(S._payload),L)}if(ya(S)||ta(S))return d=d.get(x)||null,u(m,d,S,L,null);Ol(m,S)}return null}function v(d,m,x,S){for(var L=null,A=null,R=m,F=m=0,E=null;R!==null&&F<x.length;F++){R.index>F?(E=R,R=null):E=R.sibling;var T=h(d,R,x[F],S);if(T===null){R===null&&(R=E);break}t&&R&&T.alternate===null&&e(d,R),m=s(T,m,F),A===null?L=T:A.sibling=T,A=T,R=E}if(F===x.length)return n(d,R),Yt&&cs(d,F),L;if(R===null){for(;F<x.length;F++)R=f(d,x[F],S),R!==null&&(m=s(R,m,F),A===null?L=R:A.sibling=R,A=R);return Yt&&cs(d,F),L}for(R=i(d,R);F<x.length;F++)E=p(R,d,F,x[F],S),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?F:E.key),m=s(E,m,F),A===null?L=E:A.sibling=E,A=E);return t&&R.forEach(function(V){return e(d,V)}),Yt&&cs(d,F),L}function y(d,m,x,S){var L=ta(x);if(typeof L!="function")throw Error(ye(150));if(x=L.call(x),x==null)throw Error(ye(151));for(var A=L=null,R=m,F=m=0,E=null,T=x.next();R!==null&&!T.done;F++,T=x.next()){R.index>F?(E=R,R=null):E=R.sibling;var V=h(d,R,T.value,S);if(V===null){R===null&&(R=E);break}t&&R&&V.alternate===null&&e(d,R),m=s(V,m,F),A===null?L=V:A.sibling=V,A=V,R=E}if(T.done)return n(d,R),Yt&&cs(d,F),L;if(R===null){for(;!T.done;F++,T=x.next())T=f(d,T.value,S),T!==null&&(m=s(T,m,F),A===null?L=T:A.sibling=T,A=T);return Yt&&cs(d,F),L}for(R=i(d,R);!T.done;F++,T=x.next())T=p(R,d,F,T.value,S),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?F:T.key),m=s(T,m,F),A===null?L=T:A.sibling=T,A=T);return t&&R.forEach(function(X){return e(d,X)}),Yt&&cs(d,F),L}function g(d,m,x,S){if(typeof x=="object"&&x!==null&&x.type===uo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Tl:e:{for(var L=x.key,A=m;A!==null;){if(A.key===L){if(L=x.type,L===uo){if(A.tag===7){n(d,A.sibling),m=r(A,x.props.children),m.return=d,d=m;break e}}else if(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Cr&&mm(L)===A.type){n(d,A.sibling),m=r(A,x.props),m.ref=oa(d,A,x),m.return=d,d=m;break e}n(d,A);break}else e(d,A);A=A.sibling}x.type===uo?(m=ys(x.props.children,d.mode,S,x.key),m.return=d,d=m):(S=Rc(x.type,x.key,x.props,null,d.mode,S),S.ref=oa(d,m,x),S.return=d,d=S)}return o(d);case co:e:{for(A=x.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(d,m.sibling),m=r(m,x.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=pd(x,d.mode,S),m.return=d,d=m}return o(d);case Cr:return A=x._init,g(d,m,A(x._payload),S)}if(ya(x))return v(d,m,x,S);if(ta(x))return y(d,m,x,S);Ol(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,x),m.return=d,d=m):(n(d,m),m=hd(x,d.mode,S),m.return=d,d=m),o(d)):n(d,m)}return g}var Oo=Fv(!0),kv=Fv(!1),Xc=Qr(null),$c=null,_o=null,Fh=null;function kh(){Fh=_o=$c=null}function zh(t){var e=Xc.current;jt(Xc),t._currentValue=e}function Ff(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ro(t,e){$c=t,Fh=_o=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kn=!0),t.firstContext=null)}function Mi(t){var e=t._currentValue;if(Fh!==t)if(t={context:t,memoizedValue:e,next:null},_o===null){if($c===null)throw Error(ye(308));_o=t,$c.dependencies={lanes:0,firstContext:t}}else _o=_o.next=t;return e}var vs=null;function Bh(t){vs===null?vs=[t]:vs.push(t)}function zv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Bh(e)):(n.next=r.next,r.next=n),e.interleaved=n,mr(t,i)}function mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rr=!1;function Hh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mr(t,n)}return r=i.interleaved,r===null?(e.next=e,Bh(i)):(e.next=r.next,r.next=e),i.interleaved=e,mr(t,n)}function wc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bh(t,n)}}function gm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yc(t,e,n,i){var r=t.updateQueue;Rr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=nn({},f,h);break e;case 2:Rr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);As|=o,t.lanes=o,t.memoizedState=f}}function vm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ye(191,r));r.call(i)}}}var ml={},qi=Qr(ml),Ja=Qr(ml),Qa=Qr(ml);function xs(t){if(t===ml)throw Error(ye(174));return t}function Vh(t,e){switch(Ht(Qa,e),Ht(Ja,t),Ht(qi,ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vf(e,t)}jt(qi),Ht(qi,e)}function Fo(){jt(qi),jt(Ja),jt(Qa)}function Hv(t){xs(Qa.current);var e=xs(qi.current),n=vf(e,t.type);e!==n&&(Ht(Ja,t),Ht(qi,n))}function Gh(t){Ja.current===t&&(jt(qi),jt(Ja))}var Jt=Qr(0);function qc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ad=[];function Wh(){for(var t=0;t<ad.length;t++)ad[t]._workInProgressVersionPrimary=null;ad.length=0}var Ec=xr.ReactCurrentDispatcher,ld=xr.ReactCurrentBatchConfig,bs=0,en=null,hn=null,yn=null,Zc=!1,Ca=!1,el=0,IS=0;function Cn(){throw Error(ye(321))}function jh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ui(t[n],e[n]))return!1;return!0}function Xh(t,e,n,i,r,s){if(bs=s,en=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ec.current=t===null||t.memoizedState===null?FS:kS,t=n(i,r),Ca){s=0;do{if(Ca=!1,el=0,25<=s)throw Error(ye(301));s+=1,yn=hn=null,e.updateQueue=null,Ec.current=zS,t=n(i,r)}while(Ca)}if(Ec.current=Kc,e=hn!==null&&hn.next!==null,bs=0,yn=hn=en=null,Zc=!1,e)throw Error(ye(300));return t}function $h(){var t=el!==0;return el=0,t}function Gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?en.memoizedState=yn=t:yn=yn.next=t,yn}function wi(){if(hn===null){var t=en.alternate;t=t!==null?t.memoizedState:null}else t=hn.next;var e=yn===null?en.memoizedState:yn.next;if(e!==null)yn=e,hn=t;else{if(t===null)throw Error(ye(310));hn=t,t={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},yn===null?en.memoizedState=yn=t:yn=yn.next=t}return yn}function tl(t,e){return typeof e=="function"?e(t):e}function cd(t){var e=wi(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=hn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((bs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,en.lanes|=u,As|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ui(i,e.memoizedState)||(Kn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,en.lanes|=s,As|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ud(t){var e=wi(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ui(s,e.memoizedState)||(Kn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Vv(){}function Gv(t,e){var n=en,i=wi(),r=e(),s=!Ui(i.memoizedState,r);if(s&&(i.memoizedState=r,Kn=!0),i=i.queue,Yh(Xv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||yn!==null&&yn.memoizedState.tag&1){if(n.flags|=2048,nl(9,jv.bind(null,n,i,r,e),void 0,null),Sn===null)throw Error(ye(349));bs&30||Wv(n,e,r)}return r}function Wv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=en.updateQueue,e===null?(e={lastEffect:null,stores:null},en.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jv(t,e,n,i){e.value=n,e.getSnapshot=i,$v(e)&&Yv(t)}function Xv(t,e,n){return n(function(){$v(e)&&Yv(t)})}function $v(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ui(t,n)}catch{return!0}}function Yv(t){var e=mr(t,1);e!==null&&Di(e,t,1,-1)}function xm(t){var e=Gi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:t},e.queue=t,t=t.dispatch=OS.bind(null,en,t),[e.memoizedState,t]}function nl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=en.updateQueue,e===null?(e={lastEffect:null,stores:null},en.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function qv(){return wi().memoizedState}function Tc(t,e,n,i){var r=Gi();en.flags|=t,r.memoizedState=nl(1|e,n,void 0,i===void 0?null:i)}function yu(t,e,n,i){var r=wi();i=i===void 0?null:i;var s=void 0;if(hn!==null){var o=hn.memoizedState;if(s=o.destroy,i!==null&&jh(i,o.deps)){r.memoizedState=nl(e,n,s,i);return}}en.flags|=t,r.memoizedState=nl(1|e,n,s,i)}function _m(t,e){return Tc(8390656,8,t,e)}function Yh(t,e){return yu(2048,8,t,e)}function Zv(t,e){return yu(4,2,t,e)}function Kv(t,e){return yu(4,4,t,e)}function Jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qv(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,Jv.bind(null,e,t),n)}function qh(){}function ex(t,e){var n=wi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function tx(t,e){var n=wi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function nx(t,e,n){return bs&21?(Ui(n,e)||(n=av(),en.lanes|=n,As|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kn=!0),t.memoizedState=n)}function DS(t,e){var n=Nt;Nt=n!==0&&4>n?n:4,t(!0);var i=ld.transition;ld.transition={};try{t(!1),e()}finally{Nt=n,ld.transition=i}}function ix(){return wi().memoizedState}function US(t,e,n){var i=Gr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},rx(t))sx(e,n);else if(n=zv(t,e,n,i),n!==null){var r=Hn();Di(n,t,i,r),ox(n,e,i)}}function OS(t,e,n){var i=Gr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(rx(t))sx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ui(a,o)){var l=e.interleaved;l===null?(r.next=r,Bh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=zv(t,e,r,i),n!==null&&(r=Hn(),Di(n,t,i,r),ox(n,e,i))}}function rx(t){var e=t.alternate;return t===en||e!==null&&e===en}function sx(t,e){Ca=Zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ox(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bh(t,n)}}var Kc={readContext:Mi,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},FS={readContext:Mi,useCallback:function(t,e){return Gi().memoizedState=[t,e===void 0?null:e],t},useContext:Mi,useEffect:_m,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tc(4194308,4,Jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tc(4,2,t,e)},useMemo:function(t,e){var n=Gi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=US.bind(null,en,t),[i.memoizedState,t]},useRef:function(t){var e=Gi();return t={current:t},e.memoizedState=t},useState:xm,useDebugValue:qh,useDeferredValue:function(t){return Gi().memoizedState=t},useTransition:function(){var t=xm(!1),e=t[0];return t=DS.bind(null,t[1]),Gi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=en,r=Gi();if(Yt){if(n===void 0)throw Error(ye(407));n=n()}else{if(n=e(),Sn===null)throw Error(ye(349));bs&30||Wv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,_m(Xv.bind(null,i,s,t),[t]),i.flags|=2048,nl(9,jv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gi(),e=Sn.identifierPrefix;if(Yt){var n=ur,i=cr;n=(i&~(1<<32-Ii(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=el++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=IS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kS={readContext:Mi,useCallback:ex,useContext:Mi,useEffect:Yh,useImperativeHandle:Qv,useInsertionEffect:Zv,useLayoutEffect:Kv,useMemo:tx,useReducer:cd,useRef:qv,useState:function(){return cd(tl)},useDebugValue:qh,useDeferredValue:function(t){var e=wi();return nx(e,hn.memoizedState,t)},useTransition:function(){var t=cd(tl)[0],e=wi().memoizedState;return[t,e]},useMutableSource:Vv,useSyncExternalStore:Gv,useId:ix,unstable_isNewReconciler:!1},zS={readContext:Mi,useCallback:ex,useContext:Mi,useEffect:Yh,useImperativeHandle:Qv,useInsertionEffect:Zv,useLayoutEffect:Kv,useMemo:tx,useReducer:ud,useRef:qv,useState:function(){return ud(tl)},useDebugValue:qh,useDeferredValue:function(t){var e=wi();return hn===null?e.memoizedState=t:nx(e,hn.memoizedState,t)},useTransition:function(){var t=ud(tl)[0],e=wi().memoizedState;return[t,e]},useMutableSource:Vv,useSyncExternalStore:Gv,useId:ix,unstable_isNewReconciler:!1};function Ri(t,e){if(t&&t.defaultProps){e=nn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:nn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Su={isMounted:function(t){return(t=t._reactInternals)?Ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Hn(),r=Gr(t),s=fr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,r),e!==null&&(Di(e,t,r,i),wc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Hn(),r=Gr(t),s=fr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,r),e!==null&&(Di(e,t,r,i),wc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Hn(),i=Gr(t),r=fr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hr(t,r,i),e!==null&&(Di(e,t,i,n),wc(e,t,i))}};function ym(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ya(n,i)||!Ya(r,s):!0}function ax(t,e,n){var i=!1,r=Zr,s=e.contextType;return typeof s=="object"&&s!==null?s=Mi(s):(r=Qn(e)?Es:Dn.current,i=e.contextTypes,s=(i=i!=null)?Do(t,r):Zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Su,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Su.enqueueReplaceState(e,e.state,null)}function zf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Hh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Mi(s):(s=Qn(e)?Es:Dn.current,r.context=Do(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Su.enqueueReplaceState(r,r.state,null),Yc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ko(t,e){try{var n="",i=e;do n+=hy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function dd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var BS=typeof WeakMap=="function"?WeakMap:Map;function lx(t,e,n){n=fr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qc||(Qc=!0,Zf=i),Bf(t,e)},n}function cx(t,e,n){n=fr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bf(t,e),typeof i!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new BS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=eM.bind(null,t,e,n),e.then(t,t))}function wm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Em(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fr(-1,1),e.tag=2,Hr(n,e,1))),n.lanes|=1),t)}var HS=xr.ReactCurrentOwner,Kn=!1;function kn(t,e,n,i){e.child=t===null?kv(e,null,n,i):Oo(e,t.child,n,i)}function Tm(t,e,n,i,r){n=n.render;var s=e.ref;return Ro(e,r),i=Xh(t,e,n,i,s,r),n=$h(),t!==null&&!Kn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gr(t,e,r)):(Yt&&n&&Dh(e),e.flags|=1,kn(t,e,i,r),e.child)}function bm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ip(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ux(t,e,s,i,r)):(t=Rc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ya,n(o,i)&&t.ref===e.ref)return gr(t,e,r)}return e.flags|=1,t=Wr(s,i),t.ref=e.ref,t.return=e,e.child=t}function ux(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ya(s,i)&&t.ref===e.ref)if(Kn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Kn=!0);else return e.lanes=t.lanes,gr(t,e,r)}return Hf(t,e,n,i,r)}function dx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(So,ri),ri|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ht(So,ri),ri|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ht(So,ri),ri|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ht(So,ri),ri|=i;return kn(t,e,r,n),e.child}function fx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hf(t,e,n,i,r){var s=Qn(n)?Es:Dn.current;return s=Do(e,s),Ro(e,r),n=Xh(t,e,n,i,s,r),i=$h(),t!==null&&!Kn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gr(t,e,r)):(Yt&&i&&Dh(e),e.flags|=1,kn(t,e,n,r),e.child)}function Am(t,e,n,i,r){if(Qn(n)){var s=!0;Gc(e)}else s=!1;if(Ro(e,r),e.stateNode===null)bc(t,e),ax(e,n,i),zf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Mi(c):(c=Qn(n)?Es:Dn.current,c=Do(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Sm(e,o,i,c),Rr=!1;var h=e.memoizedState;o.state=h,Yc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Jn.current||Rr?(typeof u=="function"&&(kf(e,n,u,i),l=e.memoizedState),(a=Rr||ym(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Bv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ri(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mi(l):(l=Qn(n)?Es:Dn.current,l=Do(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Sm(e,o,i,l),Rr=!1,h=e.memoizedState,o.state=h,Yc(e,i,o,r);var v=e.memoizedState;a!==f||h!==v||Jn.current||Rr?(typeof p=="function"&&(kf(e,n,p,i),v=e.memoizedState),(c=Rr||ym(e,n,c,i,h,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Vf(t,e,n,i,s,r)}function Vf(t,e,n,i,r,s){fx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&fm(e,n,!1),gr(t,e,s);i=e.stateNode,HS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Oo(e,t.child,null,s),e.child=Oo(e,null,a,s)):kn(t,e,a,s),e.memoizedState=i.state,r&&fm(e,n,!0),e.child}function hx(t){var e=t.stateNode;e.pendingContext?dm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dm(t,e.context,!1),Vh(t,e.containerInfo)}function Cm(t,e,n,i,r){return Uo(),Oh(r),e.flags|=256,kn(t,e,n,i),e.child}var Gf={dehydrated:null,treeContext:null,retryLane:0};function Wf(t){return{baseLanes:t,cachePool:null,transitions:null}}function px(t,e,n){var i=e.pendingProps,r=Jt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ht(Jt,r&1),t===null)return Of(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Eu(o,i,0,null),t=ys(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wf(n),e.memoizedState=Gf,t):Zh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return VS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Wr(a,s):(s=ys(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Wf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gf,i}return s=t.child,t=s.sibling,i=Wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Zh(t,e){return e=Eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fl(t,e,n,i){return i!==null&&Oh(i),Oo(e,t.child,null,n),t=Zh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=dd(Error(ye(422))),Fl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Eu({mode:"visible",children:i.children},r,0,null),s=ys(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Oo(e,t.child,null,o),e.child.memoizedState=Wf(o),e.memoizedState=Gf,s);if(!(e.mode&1))return Fl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ye(419)),i=dd(s,i,void 0),Fl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Kn||a){if(i=Sn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mr(t,r),Di(i,t,r,-1))}return np(),i=dd(Error(ye(421))),Fl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=tM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ai=Br(r.nextSibling),li=e,Yt=!0,Li=null,t!==null&&(mi[gi++]=cr,mi[gi++]=ur,mi[gi++]=Ts,cr=t.id,ur=t.overflow,Ts=e),e=Zh(e,i.children),e.flags|=4096,e)}function Rm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ff(t.return,e,n)}function fd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function mx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(kn(t,e,i.children,n),i=Jt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,n,e);else if(t.tag===19)Rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ht(Jt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&qc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),fd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&qc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}fd(e,!0,n,null,s);break;case"together":fd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),As|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ye(153));if(e.child!==null){for(t=e.child,n=Wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GS(t,e,n){switch(e.tag){case 3:hx(e),Uo();break;case 5:Hv(e);break;case 1:Qn(e.type)&&Gc(e);break;case 4:Vh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ht(Xc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ht(Jt,Jt.current&1),e.flags|=128,null):n&e.child.childLanes?px(t,e,n):(Ht(Jt,Jt.current&1),t=gr(t,e,n),t!==null?t.sibling:null);Ht(Jt,Jt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return mx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ht(Jt,Jt.current),i)break;return null;case 22:case 23:return e.lanes=0,dx(t,e,n)}return gr(t,e,n)}var gx,jf,vx,xx;gx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jf=function(){};vx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xs(qi.current);var s=null;switch(n){case"input":r=hf(t,r),i=hf(t,i),s=[];break;case"select":r=nn({},r,{value:void 0}),i=nn({},i,{value:void 0}),s=[];break;case"textarea":r=gf(t,r),i=gf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hc)}xf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ha.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};xx=function(t,e,n,i){n!==i&&(e.flags|=4)};function aa(t,e){if(!Yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Rn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function WS(t,e,n){var i=e.pendingProps;switch(Uh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(e),null;case 1:return Qn(e.type)&&Vc(),Rn(e),null;case 3:return i=e.stateNode,Fo(),jt(Jn),jt(Dn),Wh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Li!==null&&(Qf(Li),Li=null))),jf(t,e),Rn(e),null;case 5:Gh(e);var r=xs(Qa.current);if(n=e.type,t!==null&&e.stateNode!=null)vx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ye(166));return Rn(e),null}if(t=xs(qi.current),Ul(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ji]=e,i[Ka]=s,t=(e.mode&1)!==0,n){case"dialog":Gt("cancel",i),Gt("close",i);break;case"iframe":case"object":case"embed":Gt("load",i);break;case"video":case"audio":for(r=0;r<Ma.length;r++)Gt(Ma[r],i);break;case"source":Gt("error",i);break;case"img":case"image":case"link":Gt("error",i),Gt("load",i);break;case"details":Gt("toggle",i);break;case"input":kp(i,s),Gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Gt("invalid",i);break;case"textarea":Bp(i,s),Gt("invalid",i)}xf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Dl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Dl(i.textContent,a,t),r=["children",""+a]):Ha.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Gt("scroll",i)}switch(n){case"input":bl(i),zp(i,s,!0);break;case"textarea":bl(i),Hp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=X0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ji]=e,t[Ka]=i,gx(t,e,!1,!1),e.stateNode=t;e:{switch(o=_f(n,i),n){case"dialog":Gt("cancel",t),Gt("close",t),r=i;break;case"iframe":case"object":case"embed":Gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ma.length;r++)Gt(Ma[r],t);r=i;break;case"source":Gt("error",t),r=i;break;case"img":case"image":case"link":Gt("error",t),Gt("load",t),r=i;break;case"details":Gt("toggle",t),r=i;break;case"input":kp(t,i),r=hf(t,i),Gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=nn({},i,{value:void 0}),Gt("invalid",t);break;case"textarea":Bp(t,i),r=gf(t,i),Gt("invalid",t);break;default:r=i}xf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?q0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Va(t,l):typeof l=="number"&&Va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Gt("scroll",t):l!=null&&yh(t,s,l,o))}switch(n){case"input":bl(t),zp(t,i,!1);break;case"textarea":bl(t),Hp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+qr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?To(t,!!i.multiple,s,!1):i.defaultValue!=null&&To(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rn(e),null;case 6:if(t&&e.stateNode!=null)xx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ye(166));if(n=xs(Qa.current),xs(qi.current),Ul(e)){if(i=e.stateNode,n=e.memoizedProps,i[ji]=e,(s=i.nodeValue!==n)&&(t=li,t!==null))switch(t.tag){case 3:Dl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Dl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ji]=e,e.stateNode=i}return Rn(e),null;case 13:if(jt(Jt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Yt&&ai!==null&&e.mode&1&&!(e.flags&128))Ov(),Uo(),e.flags|=98560,s=!1;else if(s=Ul(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ye(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ye(317));s[ji]=e}else Uo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rn(e),s=!1}else Li!==null&&(Qf(Li),Li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Jt.current&1?pn===0&&(pn=3):np())),e.updateQueue!==null&&(e.flags|=4),Rn(e),null);case 4:return Fo(),jf(t,e),t===null&&qa(e.stateNode.containerInfo),Rn(e),null;case 10:return zh(e.type._context),Rn(e),null;case 17:return Qn(e.type)&&Vc(),Rn(e),null;case 19:if(jt(Jt),s=e.memoizedState,s===null)return Rn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)aa(s,!1);else{if(pn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qc(t),o!==null){for(e.flags|=128,aa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ht(Jt,Jt.current&1|2),e.child}t=t.sibling}s.tail!==null&&sn()>zo&&(e.flags|=128,i=!0,aa(s,!1),e.lanes=4194304)}else{if(!i)if(t=qc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),aa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Yt)return Rn(e),null}else 2*sn()-s.renderingStartTime>zo&&n!==1073741824&&(e.flags|=128,i=!0,aa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=sn(),e.sibling=null,n=Jt.current,Ht(Jt,i?n&1|2:n&1),e):(Rn(e),null);case 22:case 23:return tp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ri&1073741824&&(Rn(e),e.subtreeFlags&6&&(e.flags|=8192)):Rn(e),null;case 24:return null;case 25:return null}throw Error(ye(156,e.tag))}function jS(t,e){switch(Uh(e),e.tag){case 1:return Qn(e.type)&&Vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fo(),jt(Jn),jt(Dn),Wh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gh(e),null;case 13:if(jt(Jt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ye(340));Uo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return jt(Jt),null;case 4:return Fo(),null;case 10:return zh(e.type._context),null;case 22:case 23:return tp(),null;case 24:return null;default:return null}}var kl=!1,In=!1,XS=typeof WeakSet=="function"?WeakSet:Set,ze=null;function yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){rn(t,e,i)}else n.current=null}function Xf(t,e,n){try{n()}catch(i){rn(t,e,i)}}var Pm=!1;function $S(t,e){if(Rf=kc,t=wv(),Ih(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pf={focusedElem:t,selectionRange:n},kc=!1,ze=e;ze!==null;)if(e=ze,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ze=t;else for(;ze!==null;){e=ze;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,g=v.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Ri(e.type,y),g);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ye(163))}}catch(S){rn(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ze=t;break}ze=e.return}return v=Pm,Pm=!1,v}function Ra(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xf(e,n,s)}r=r.next}while(r!==i)}}function Mu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function $f(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _x(t){var e=t.alternate;e!==null&&(t.alternate=null,_x(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ji],delete e[Ka],delete e[If],delete e[RS],delete e[PS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yx(t){return t.tag===5||t.tag===3||t.tag===4}function Lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hc));else if(i!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}function qf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qf(t,e,n),t=t.sibling;t!==null;)qf(t,e,n),t=t.sibling}var En=null,Pi=!1;function Mr(t,e,n){for(n=n.child;n!==null;)Sx(t,e,n),n=n.sibling}function Sx(t,e,n){if(Yi&&typeof Yi.onCommitFiberUnmount=="function")try{Yi.onCommitFiberUnmount(pu,n)}catch{}switch(n.tag){case 5:In||yo(n,e);case 6:var i=En,r=Pi;En=null,Mr(t,e,n),En=i,Pi=r,En!==null&&(Pi?(t=En,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):En.removeChild(n.stateNode));break;case 18:En!==null&&(Pi?(t=En,n=n.stateNode,t.nodeType===8?sd(t.parentNode,n):t.nodeType===1&&sd(t,n),Xa(t)):sd(En,n.stateNode));break;case 4:i=En,r=Pi,En=n.stateNode.containerInfo,Pi=!0,Mr(t,e,n),En=i,Pi=r;break;case 0:case 11:case 14:case 15:if(!In&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xf(n,e,o),r=r.next}while(r!==i)}Mr(t,e,n);break;case 1:if(!In&&(yo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){rn(n,e,a)}Mr(t,e,n);break;case 21:Mr(t,e,n);break;case 22:n.mode&1?(In=(i=In)||n.memoizedState!==null,Mr(t,e,n),In=i):Mr(t,e,n);break;default:Mr(t,e,n)}}function Nm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XS),e.forEach(function(i){var r=nM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ti(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:En=a.stateNode,Pi=!1;break e;case 3:En=a.stateNode.containerInfo,Pi=!0;break e;case 4:En=a.stateNode.containerInfo,Pi=!0;break e}a=a.return}if(En===null)throw Error(ye(160));Sx(s,o,r),En=null,Pi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){rn(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Mx(e,t),e=e.sibling}function Mx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ti(e,t),Vi(t),i&4){try{Ra(3,t,t.return),Mu(3,t)}catch(y){rn(t,t.return,y)}try{Ra(5,t,t.return)}catch(y){rn(t,t.return,y)}}break;case 1:Ti(e,t),Vi(t),i&512&&n!==null&&yo(n,n.return);break;case 5:if(Ti(e,t),Vi(t),i&512&&n!==null&&yo(n,n.return),t.flags&32){var r=t.stateNode;try{Va(r,"")}catch(y){rn(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&W0(r,s),_f(a,o);var c=_f(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?q0(r,f):u==="dangerouslySetInnerHTML"?$0(r,f):u==="children"?Va(r,f):yh(r,u,f,c)}switch(a){case"input":pf(r,s);break;case"textarea":j0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?To(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?To(r,!!s.multiple,s.defaultValue,!0):To(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ka]=s}catch(y){rn(t,t.return,y)}}break;case 6:if(Ti(e,t),Vi(t),i&4){if(t.stateNode===null)throw Error(ye(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){rn(t,t.return,y)}}break;case 3:if(Ti(e,t),Vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xa(e.containerInfo)}catch(y){rn(t,t.return,y)}break;case 4:Ti(e,t),Vi(t);break;case 13:Ti(e,t),Vi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Qh=sn())),i&4&&Nm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(In=(c=In)||u,Ti(e,t),In=c):Ti(e,t),Vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ze=t,u=t.child;u!==null;){for(f=ze=u;ze!==null;){switch(h=ze,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ra(4,h,h.return);break;case 1:yo(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){rn(i,n,y)}}break;case 5:yo(h,h.return);break;case 22:if(h.memoizedState!==null){Dm(f);continue}}p!==null?(p.return=h,ze=p):Dm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Y0("display",o))}catch(y){rn(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){rn(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ti(e,t),Vi(t),i&4&&Nm(t);break;case 21:break;default:Ti(e,t),Vi(t)}}function Vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yx(n)){var i=n;break e}n=n.return}throw Error(ye(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Va(r,""),i.flags&=-33);var s=Lm(t);qf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Lm(t);Yf(t,a,o);break;default:throw Error(ye(161))}}catch(l){rn(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function YS(t,e,n){ze=t,wx(t)}function wx(t,e,n){for(var i=(t.mode&1)!==0;ze!==null;){var r=ze,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||kl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||In;a=kl;var c=In;if(kl=o,(In=l)&&!c)for(ze=r;ze!==null;)o=ze,l=o.child,o.tag===22&&o.memoizedState!==null?Um(r):l!==null?(l.return=o,ze=l):Um(r);for(;s!==null;)ze=s,wx(s),s=s.sibling;ze=r,kl=a,In=c}Im(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ze=s):Im(t)}}function Im(t){for(;ze!==null;){var e=ze;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:In||Mu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!In)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ri(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Xa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ye(163))}In||e.flags&512&&$f(e)}catch(h){rn(e,e.return,h)}}if(e===t){ze=null;break}if(n=e.sibling,n!==null){n.return=e.return,ze=n;break}ze=e.return}}function Dm(t){for(;ze!==null;){var e=ze;if(e===t){ze=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ze=n;break}ze=e.return}}function Um(t){for(;ze!==null;){var e=ze;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mu(4,e)}catch(l){rn(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){rn(e,r,l)}}var s=e.return;try{$f(e)}catch(l){rn(e,s,l)}break;case 5:var o=e.return;try{$f(e)}catch(l){rn(e,o,l)}}}catch(l){rn(e,e.return,l)}if(e===t){ze=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ze=a;break}ze=e.return}}var qS=Math.ceil,Jc=xr.ReactCurrentDispatcher,Kh=xr.ReactCurrentOwner,yi=xr.ReactCurrentBatchConfig,Ct=0,Sn=null,dn=null,bn=0,ri=0,So=Qr(0),pn=0,il=null,As=0,wu=0,Jh=0,Pa=null,qn=null,Qh=0,zo=1/0,ar=null,Qc=!1,Zf=null,Vr=null,zl=!1,Ir=null,eu=0,La=0,Kf=null,Ac=-1,Cc=0;function Hn(){return Ct&6?sn():Ac!==-1?Ac:Ac=sn()}function Gr(t){return t.mode&1?Ct&2&&bn!==0?bn&-bn:NS.transition!==null?(Cc===0&&(Cc=av()),Cc):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:pv(t.type)),t):1}function Di(t,e,n,i){if(50<La)throw La=0,Kf=null,Error(ye(185));fl(t,n,i),(!(Ct&2)||t!==Sn)&&(t===Sn&&(!(Ct&2)&&(wu|=n),pn===4&&Lr(t,bn)),ei(t,i),n===1&&Ct===0&&!(e.mode&1)&&(zo=sn()+500,_u&&es()))}function ei(t,e){var n=t.callbackNode;Ny(t,e);var i=Fc(t,t===Sn?bn:0);if(i===0)n!==null&&Wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Wp(n),e===1)t.tag===0?LS(Om.bind(null,t)):Iv(Om.bind(null,t)),AS(function(){!(Ct&6)&&es()}),n=null;else{switch(lv(i)){case 1:n=Th;break;case 4:n=sv;break;case 16:n=Oc;break;case 536870912:n=ov;break;default:n=Oc}n=Lx(n,Ex.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ex(t,e){if(Ac=-1,Cc=0,Ct&6)throw Error(ye(327));var n=t.callbackNode;if(Po()&&t.callbackNode!==n)return null;var i=Fc(t,t===Sn?bn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tu(t,i);else{e=i;var r=Ct;Ct|=2;var s=bx();(Sn!==t||bn!==e)&&(ar=null,zo=sn()+500,_s(t,e));do try{JS();break}catch(a){Tx(t,a)}while(!0);kh(),Jc.current=s,Ct=r,dn!==null?e=0:(Sn=null,bn=0,e=pn)}if(e!==0){if(e===2&&(r=Ef(t),r!==0&&(i=r,e=Jf(t,r))),e===1)throw n=il,_s(t,0),Lr(t,i),ei(t,sn()),n;if(e===6)Lr(t,i);else{if(r=t.current.alternate,!(i&30)&&!ZS(r)&&(e=tu(t,i),e===2&&(s=Ef(t),s!==0&&(i=s,e=Jf(t,s))),e===1))throw n=il,_s(t,0),Lr(t,i),ei(t,sn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ye(345));case 2:us(t,qn,ar);break;case 3:if(Lr(t,i),(i&130023424)===i&&(e=Qh+500-sn(),10<e)){if(Fc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Nf(us.bind(null,t,qn,ar),e);break}us(t,qn,ar);break;case 4:if(Lr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ii(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=sn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*qS(i/1960))-i,10<i){t.timeoutHandle=Nf(us.bind(null,t,qn,ar),i);break}us(t,qn,ar);break;case 5:us(t,qn,ar);break;default:throw Error(ye(329))}}}return ei(t,sn()),t.callbackNode===n?Ex.bind(null,t):null}function Jf(t,e){var n=Pa;return t.current.memoizedState.isDehydrated&&(_s(t,e).flags|=256),t=tu(t,e),t!==2&&(e=qn,qn=n,e!==null&&Qf(e)),t}function Qf(t){qn===null?qn=t:qn.push.apply(qn,t)}function ZS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ui(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lr(t,e){for(e&=~Jh,e&=~wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ii(e),i=1<<n;t[n]=-1,e&=~i}}function Om(t){if(Ct&6)throw Error(ye(327));Po();var e=Fc(t,0);if(!(e&1))return ei(t,sn()),null;var n=tu(t,e);if(t.tag!==0&&n===2){var i=Ef(t);i!==0&&(e=i,n=Jf(t,i))}if(n===1)throw n=il,_s(t,0),Lr(t,e),ei(t,sn()),n;if(n===6)throw Error(ye(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,us(t,qn,ar),ei(t,sn()),null}function ep(t,e){var n=Ct;Ct|=1;try{return t(e)}finally{Ct=n,Ct===0&&(zo=sn()+500,_u&&es())}}function Cs(t){Ir!==null&&Ir.tag===0&&!(Ct&6)&&Po();var e=Ct;Ct|=1;var n=yi.transition,i=Nt;try{if(yi.transition=null,Nt=1,t)return t()}finally{Nt=i,yi.transition=n,Ct=e,!(Ct&6)&&es()}}function tp(){ri=So.current,jt(So)}function _s(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bS(n)),dn!==null)for(n=dn.return;n!==null;){var i=n;switch(Uh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vc();break;case 3:Fo(),jt(Jn),jt(Dn),Wh();break;case 5:Gh(i);break;case 4:Fo();break;case 13:jt(Jt);break;case 19:jt(Jt);break;case 10:zh(i.type._context);break;case 22:case 23:tp()}n=n.return}if(Sn=t,dn=t=Wr(t.current,null),bn=ri=e,pn=0,il=null,Jh=wu=As=0,qn=Pa=null,vs!==null){for(e=0;e<vs.length;e++)if(n=vs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}vs=null}return t}function Tx(t,e){do{var n=dn;try{if(kh(),Ec.current=Kc,Zc){for(var i=en.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zc=!1}if(bs=0,yn=hn=en=null,Ca=!1,el=0,Kh.current=null,n===null||n.return===null){pn=1,il=e,dn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=bn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=wm(o);if(p!==null){p.flags&=-257,Em(p,o,a,s,e),p.mode&1&&Mm(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Mm(s,c,e),np();break e}l=Error(ye(426))}}else if(Yt&&a.mode&1){var g=wm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Em(g,o,a,s,e),Oh(ko(l,a));break e}}s=l=ko(l,a),pn!==4&&(pn=2),Pa===null?Pa=[s]:Pa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=lx(s,l,e);gm(s,d);break e;case 1:a=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Vr===null||!Vr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=cx(s,a,e);gm(s,S);break e}}s=s.return}while(s!==null)}Cx(n)}catch(L){e=L,dn===n&&n!==null&&(dn=n=n.return);continue}break}while(!0)}function bx(){var t=Jc.current;return Jc.current=Kc,t===null?Kc:t}function np(){(pn===0||pn===3||pn===2)&&(pn=4),Sn===null||!(As&268435455)&&!(wu&268435455)||Lr(Sn,bn)}function tu(t,e){var n=Ct;Ct|=2;var i=bx();(Sn!==t||bn!==e)&&(ar=null,_s(t,e));do try{KS();break}catch(r){Tx(t,r)}while(!0);if(kh(),Ct=n,Jc.current=i,dn!==null)throw Error(ye(261));return Sn=null,bn=0,pn}function KS(){for(;dn!==null;)Ax(dn)}function JS(){for(;dn!==null&&!wy();)Ax(dn)}function Ax(t){var e=Px(t.alternate,t,ri);t.memoizedProps=t.pendingProps,e===null?Cx(t):dn=e,Kh.current=null}function Cx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jS(n,e),n!==null){n.flags&=32767,dn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pn=6,dn=null;return}}else if(n=WS(n,e,ri),n!==null){dn=n;return}if(e=e.sibling,e!==null){dn=e;return}dn=e=t}while(e!==null);pn===0&&(pn=5)}function us(t,e,n){var i=Nt,r=yi.transition;try{yi.transition=null,Nt=1,QS(t,e,n,i)}finally{yi.transition=r,Nt=i}return null}function QS(t,e,n,i){do Po();while(Ir!==null);if(Ct&6)throw Error(ye(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ye(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Iy(t,s),t===Sn&&(dn=Sn=null,bn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zl||(zl=!0,Lx(Oc,function(){return Po(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yi.transition,yi.transition=null;var o=Nt;Nt=1;var a=Ct;Ct|=4,Kh.current=null,$S(t,n),Mx(n,t),_S(Pf),kc=!!Rf,Pf=Rf=null,t.current=n,YS(n),Ey(),Ct=a,Nt=o,yi.transition=s}else t.current=n;if(zl&&(zl=!1,Ir=t,eu=r),s=t.pendingLanes,s===0&&(Vr=null),Ay(n.stateNode),ei(t,sn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qc)throw Qc=!1,t=Zf,Zf=null,t;return eu&1&&t.tag!==0&&Po(),s=t.pendingLanes,s&1?t===Kf?La++:(La=0,Kf=t):La=0,es(),null}function Po(){if(Ir!==null){var t=lv(eu),e=yi.transition,n=Nt;try{if(yi.transition=null,Nt=16>t?16:t,Ir===null)var i=!1;else{if(t=Ir,Ir=null,eu=0,Ct&6)throw Error(ye(331));var r=Ct;for(Ct|=4,ze=t.current;ze!==null;){var s=ze,o=s.child;if(ze.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ze=c;ze!==null;){var u=ze;switch(u.tag){case 0:case 11:case 15:Ra(8,u,s)}var f=u.child;if(f!==null)f.return=u,ze=f;else for(;ze!==null;){u=ze;var h=u.sibling,p=u.return;if(_x(u),u===c){ze=null;break}if(h!==null){h.return=p,ze=h;break}ze=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}ze=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ze=o;else e:for(;ze!==null;){if(s=ze,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ze=d;break e}ze=s.return}}var m=t.current;for(ze=m;ze!==null;){o=ze;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ze=x;else e:for(o=m;ze!==null;){if(a=ze,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mu(9,a)}}catch(L){rn(a,a.return,L)}if(a===o){ze=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ze=S;break e}ze=a.return}}if(Ct=r,es(),Yi&&typeof Yi.onPostCommitFiberRoot=="function")try{Yi.onPostCommitFiberRoot(pu,t)}catch{}i=!0}return i}finally{Nt=n,yi.transition=e}}return!1}function Fm(t,e,n){e=ko(n,e),e=lx(t,e,1),t=Hr(t,e,1),e=Hn(),t!==null&&(fl(t,1,e),ei(t,e))}function rn(t,e,n){if(t.tag===3)Fm(t,t,n);else for(;e!==null;){if(e.tag===3){Fm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vr===null||!Vr.has(i))){t=ko(n,t),t=cx(e,t,1),e=Hr(e,t,1),t=Hn(),e!==null&&(fl(e,1,t),ei(e,t));break}}e=e.return}}function eM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Hn(),t.pingedLanes|=t.suspendedLanes&n,Sn===t&&(bn&n)===n&&(pn===4||pn===3&&(bn&130023424)===bn&&500>sn()-Qh?_s(t,0):Jh|=n),ei(t,e)}function Rx(t,e){e===0&&(t.mode&1?(e=Rl,Rl<<=1,!(Rl&130023424)&&(Rl=4194304)):e=1);var n=Hn();t=mr(t,e),t!==null&&(fl(t,e,n),ei(t,n))}function tM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rx(t,n)}function nM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ye(314))}i!==null&&i.delete(e),Rx(t,n)}var Px;Px=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jn.current)Kn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kn=!1,GS(t,e,n);Kn=!!(t.flags&131072)}else Kn=!1,Yt&&e.flags&1048576&&Dv(e,jc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;bc(t,e),t=e.pendingProps;var r=Do(e,Dn.current);Ro(e,n),r=Xh(null,e,i,t,r,n);var s=$h();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qn(i)?(s=!0,Gc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Hh(e),r.updater=Su,e.stateNode=r,r._reactInternals=e,zf(e,i,t,n),e=Vf(null,e,i,!0,s,n)):(e.tag=0,Yt&&s&&Dh(e),kn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(bc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=rM(i),t=Ri(i,t),r){case 0:e=Hf(null,e,i,t,n);break e;case 1:e=Am(null,e,i,t,n);break e;case 11:e=Tm(null,e,i,t,n);break e;case 14:e=bm(null,e,i,Ri(i.type,t),n);break e}throw Error(ye(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ri(i,r),Hf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ri(i,r),Am(t,e,i,r,n);case 3:e:{if(hx(e),t===null)throw Error(ye(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Bv(t,e),Yc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ko(Error(ye(423)),e),e=Cm(t,e,i,n,r);break e}else if(i!==r){r=ko(Error(ye(424)),e),e=Cm(t,e,i,n,r);break e}else for(ai=Br(e.stateNode.containerInfo.firstChild),li=e,Yt=!0,Li=null,n=kv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Uo(),i===r){e=gr(t,e,n);break e}kn(t,e,i,n)}e=e.child}return e;case 5:return Hv(e),t===null&&Of(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Lf(i,r)?o=null:s!==null&&Lf(i,s)&&(e.flags|=32),fx(t,e),kn(t,e,o,n),e.child;case 6:return t===null&&Of(e),null;case 13:return px(t,e,n);case 4:return Vh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Oo(e,null,i,n):kn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ri(i,r),Tm(t,e,i,r,n);case 7:return kn(t,e,e.pendingProps,n),e.child;case 8:return kn(t,e,e.pendingProps.children,n),e.child;case 12:return kn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ht(Xc,i._currentValue),i._currentValue=o,s!==null)if(Ui(s.value,o)){if(s.children===r.children&&!Jn.current){e=gr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ff(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ye(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ff(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ro(e,n),r=Mi(r),i=i(r),e.flags|=1,kn(t,e,i,n),e.child;case 14:return i=e.type,r=Ri(i,e.pendingProps),r=Ri(i.type,r),bm(t,e,i,r,n);case 15:return ux(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ri(i,r),bc(t,e),e.tag=1,Qn(i)?(t=!0,Gc(e)):t=!1,Ro(e,n),ax(e,i,r),zf(e,i,r,n),Vf(null,e,i,!0,t,n);case 19:return mx(t,e,n);case 22:return dx(t,e,n)}throw Error(ye(156,e.tag))};function Lx(t,e){return rv(t,e)}function iM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(t,e,n,i){return new iM(t,e,n,i)}function ip(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rM(t){if(typeof t=="function")return ip(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mh)return 11;if(t===wh)return 14}return 2}function Wr(t,e){var n=t.alternate;return n===null?(n=_i(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ip(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case uo:return ys(n.children,r,s,e);case Sh:o=8,r|=8;break;case cf:return t=_i(12,n,e,r|2),t.elementType=cf,t.lanes=s,t;case uf:return t=_i(13,n,e,r),t.elementType=uf,t.lanes=s,t;case df:return t=_i(19,n,e,r),t.elementType=df,t.lanes=s,t;case H0:return Eu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z0:o=10;break e;case B0:o=9;break e;case Mh:o=11;break e;case wh:o=14;break e;case Cr:o=16,i=null;break e}throw Error(ye(130,t==null?t:typeof t,""))}return e=_i(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ys(t,e,n,i){return t=_i(7,t,i,e),t.lanes=n,t}function Eu(t,e,n,i){return t=_i(22,t,i,e),t.elementType=H0,t.lanes=n,t.stateNode={isHidden:!1},t}function hd(t,e,n){return t=_i(6,t,null,e),t.lanes=n,t}function pd(t,e,n){return e=_i(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yu(0),this.expirationTimes=Yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function rp(t,e,n,i,r,s,o,a,l){return t=new sM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_i(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hh(s),t}function oM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:co,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Nx(t){if(!t)return Zr;t=t._reactInternals;e:{if(Ds(t)!==t||t.tag!==1)throw Error(ye(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ye(171))}if(t.tag===1){var n=t.type;if(Qn(n))return Nv(t,n,e)}return e}function Ix(t,e,n,i,r,s,o,a,l){return t=rp(n,i,!0,t,r,s,o,a,l),t.context=Nx(null),n=t.current,i=Hn(),r=Gr(n),s=fr(i,r),s.callback=e??null,Hr(n,s,r),t.current.lanes=r,fl(t,r,i),ei(t,i),t}function Tu(t,e,n,i){var r=e.current,s=Hn(),o=Gr(r);return n=Nx(n),e.context===null?e.context=n:e.pendingContext=n,e=fr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hr(r,e,o),t!==null&&(Di(t,r,o,s),wc(t,r,o)),o}function nu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function km(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sp(t,e){km(t,e),(t=t.alternate)&&km(t,e)}function aM(){return null}var Dx=typeof reportError=="function"?reportError:function(t){console.error(t)};function op(t){this._internalRoot=t}bu.prototype.render=op.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ye(409));Tu(t,e,null,null)};bu.prototype.unmount=op.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cs(function(){Tu(null,t,null,null)}),e[pr]=null}};function bu(t){this._internalRoot=t}bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=dv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pr.length&&e!==0&&e<Pr[n].priority;n++);Pr.splice(n,0,t),n===0&&hv(t)}};function ap(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zm(){}function lM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=nu(o);s.call(c)}}var o=Ix(e,i,t,0,null,!1,!1,"",zm);return t._reactRootContainer=o,t[pr]=o.current,qa(t.nodeType===8?t.parentNode:t),Cs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=nu(l);a.call(c)}}var l=rp(t,0,!1,null,null,!1,!1,"",zm);return t._reactRootContainer=l,t[pr]=l.current,qa(t.nodeType===8?t.parentNode:t),Cs(function(){Tu(e,l,n,i)}),l}function Cu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nu(o);a.call(l)}}Tu(e,o,t,r)}else o=lM(n,e,t,r,i);return nu(o)}cv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Sa(e.pendingLanes);n!==0&&(bh(e,n|1),ei(e,sn()),!(Ct&6)&&(zo=sn()+500,es()))}break;case 13:Cs(function(){var i=mr(t,1);if(i!==null){var r=Hn();Di(i,t,1,r)}}),sp(t,1)}};Ah=function(t){if(t.tag===13){var e=mr(t,134217728);if(e!==null){var n=Hn();Di(e,t,134217728,n)}sp(t,134217728)}};uv=function(t){if(t.tag===13){var e=Gr(t),n=mr(t,e);if(n!==null){var i=Hn();Di(n,t,e,i)}sp(t,e)}};dv=function(){return Nt};fv=function(t,e){var n=Nt;try{return Nt=t,e()}finally{Nt=n}};Sf=function(t,e,n){switch(e){case"input":if(pf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=xu(i);if(!r)throw Error(ye(90));G0(i),pf(i,r)}}}break;case"textarea":j0(t,n);break;case"select":e=n.value,e!=null&&To(t,!!n.multiple,e,!1)}};J0=ep;Q0=Cs;var cM={usingClientEntryPoint:!1,Events:[pl,mo,xu,Z0,K0,ep]},la={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uM={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nv(t),t===null?null:t.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||aM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{pu=Bl.inject(uM),Yi=Bl}catch{}}ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cM;ui.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ap(e))throw Error(ye(200));return oM(t,e,null,n)};ui.createRoot=function(t,e){if(!ap(t))throw Error(ye(299));var n=!1,i="",r=Dx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=rp(t,1,!1,null,null,n,!1,i,r),t[pr]=e.current,qa(t.nodeType===8?t.parentNode:t),new op(e)};ui.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ye(188)):(t=Object.keys(t).join(","),Error(ye(268,t)));return t=nv(e),t=t===null?null:t.stateNode,t};ui.flushSync=function(t){return Cs(t)};ui.hydrate=function(t,e,n){if(!Au(e))throw Error(ye(200));return Cu(null,t,e,!0,n)};ui.hydrateRoot=function(t,e,n){if(!ap(t))throw Error(ye(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Dx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ix(e,null,t,1,n??null,r,!1,s,o),t[pr]=e.current,qa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new bu(e)};ui.render=function(t,e,n){if(!Au(e))throw Error(ye(200));return Cu(null,t,e,!1,n)};ui.unmountComponentAtNode=function(t){if(!Au(t))throw Error(ye(40));return t._reactRootContainer?(Cs(function(){Cu(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1};ui.unstable_batchedUpdates=ep;ui.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Au(n))throw Error(ye(200));if(t==null||t._reactInternals===void 0)throw Error(ye(38));return Cu(t,e,n,!1,i)};ui.version="18.3.1-next-f1338f8080-20240426";function Ux(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ux)}catch(t){console.error(t)}}Ux(),U0.exports=ui;var dM=U0.exports,Ox,Bm=dM;Ox=Bm.createRoot,Bm.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lp="160",fM=0,Hm=1,hM=2,Fx=1,kx=2,or=3,Kr=0,Vn=1,si=2,jr=0,Lo=1,Vm=2,Gm=3,Wm=4,pM=5,hs=100,mM=101,gM=102,jm=103,Xm=104,vM=200,xM=201,_M=202,yM=203,eh=204,th=205,SM=206,MM=207,wM=208,EM=209,TM=210,bM=211,AM=212,CM=213,RM=214,PM=0,LM=1,NM=2,iu=3,IM=4,DM=5,UM=6,OM=7,zx=0,FM=1,kM=2,Xr=0,zM=1,BM=2,HM=3,Bx=4,VM=5,GM=6,cp=300,Bo=301,Ho=302,ru=303,nh=304,Ru=306,ih=1e3,oi=1001,rh=1002,zn=1003,$m=1004,md=1005,Bn=1006,WM=1007,rl=1008,$r=1009,jM=1010,XM=1011,up=1012,Hx=1013,Dr=1014,Ur=1015,sl=1016,Vx=1017,Gx=1018,Ss=1020,$M=1021,Ni=1023,YM=1024,qM=1025,Ms=1026,Vo=1027,ZM=1028,Wx=1029,KM=1030,jx=1031,Xx=1033,gd=33776,vd=33777,xd=33778,_d=33779,Ym=35840,qm=35841,Zm=35842,Km=35843,$x=36196,Jm=37492,Qm=37496,eg=37808,tg=37809,ng=37810,ig=37811,rg=37812,sg=37813,og=37814,ag=37815,lg=37816,cg=37817,ug=37818,dg=37819,fg=37820,hg=37821,yd=36492,pg=36494,mg=36495,JM=36283,gg=36284,vg=36285,xg=36286,Yx=3e3,ws=3001,QM=3200,e1=3201,qx=0,t1=1,xi="",$t="srgb",vr="srgb-linear",dp="display-p3",Pu="display-p3-linear",su="linear",Wt="srgb",ou="rec709",au="p3",Vs=7680,_g=519,n1=512,i1=513,r1=514,Zx=515,s1=516,o1=517,a1=518,l1=519,sh=35044,yg="300 es",oh=1035,dr=2e3,lu=2001;class $o{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sg=1234567;const Na=Math.PI/180,ol=180/Math.PI;function Zi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[t&255]+Pn[t>>8&255]+Pn[t>>16&255]+Pn[t>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function Tn(t,e,n){return Math.max(e,Math.min(n,t))}function fp(t,e){return(t%e+e)%e}function c1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function u1(t,e,n){return t!==e?(n-t)/(e-t):0}function Ia(t,e,n){return(1-n)*t+n*e}function d1(t,e,n,i){return Ia(t,e,1-Math.exp(-n*i))}function f1(t,e=1){return e-Math.abs(fp(t,e*2)-e)}function h1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function p1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function m1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function g1(t,e){return t+Math.random()*(e-t)}function v1(t){return t*(.5-Math.random())}function x1(t){t!==void 0&&(Sg=t);let e=Sg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _1(t){return t*Na}function y1(t){return t*ol}function ah(t){return(t&t-1)===0&&t!==0}function S1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function cu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function M1(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*v,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*v,a*c);break;case"ZYZ":t.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Dt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Nn={DEG2RAD:Na,RAD2DEG:ol,generateUUID:Zi,clamp:Tn,euclideanModulo:fp,mapLinear:c1,inverseLerp:u1,lerp:Ia,damp:d1,pingpong:f1,smoothstep:h1,smootherstep:p1,randInt:m1,randFloat:g1,randFloatSpread:v1,seededRandom:x1,degToRad:_1,radToDeg:y1,isPowerOfTwo:ah,ceilPowerOfTwo:S1,floorPowerOfTwo:cu,setQuaternionFromProperEuler:M1,normalize:Dt,denormalize:Xi};class Se{constructor(e=0,n=0){Se.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(e,n,i,r,s,o,a,l,c){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],y=r[0],g=r[3],d=r[6],m=r[1],x=r[4],S=r[7],L=r[2],A=r[5],R=r[8];return s[0]=o*y+a*m+l*L,s[3]=o*g+a*x+l*A,s[6]=o*d+a*S+l*R,s[1]=c*y+u*m+f*L,s[4]=c*g+u*x+f*A,s[7]=c*d+u*S+f*R,s[2]=h*y+p*m+v*L,s[5]=h*g+p*x+v*A,s[8]=h*d+p*S+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=n*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Sd.makeScale(e,n)),this}rotate(e){return this.premultiply(Sd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Sd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sd=new yt;function Kx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function al(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function w1(){const t=al("canvas");return t.style.display="block",t}const Mg={};function Da(t){t in Mg||(Mg[t]=!0,console.warn(t))}const wg=new yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Eg=new yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hl={[vr]:{transfer:su,primaries:ou,toReference:t=>t,fromReference:t=>t},[$t]:{transfer:Wt,primaries:ou,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Pu]:{transfer:su,primaries:au,toReference:t=>t.applyMatrix3(Eg),fromReference:t=>t.applyMatrix3(wg)},[dp]:{transfer:Wt,primaries:au,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Eg),fromReference:t=>t.applyMatrix3(wg).convertLinearToSRGB()}},E1=new Set([vr,Pu]),Ut={enabled:!0,_workingColorSpace:vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!E1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Hl[e].toReference,r=Hl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Hl[t].primaries},getTransfer:function(t){return t===xi?su:Hl[t].transfer}};function No(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Md(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gs;class Jx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gs===void 0&&(Gs=al("canvas")),Gs.width=e.width,Gs.height=e.height;const i=Gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=al("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=No(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(No(n[i]/255)*255):n[i]=No(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T1=0;class Qx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=Zi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wd(r[o].image)):s.push(wd(r[o]))}else s=wd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function wd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Jx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b1=0;class Gn extends $o{constructor(e=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,i=oi,r=oi,s=Bn,o=rl,a=Ni,l=$r,c=Gn.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=Zi(),this.name="",this.source=new Qx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ws?$t:xi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ih:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ih:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$t?ws:Yx}set encoding(e){Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ws?$t:xi}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=cp;Gn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,i=0,r=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],y=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,L=(d+1)/2,A=(u+h)/4,R=(f+y)/4,F=(v+g)/4;return x>S&&x>L?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=R/i):S>L?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=F/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=R/s,r=F/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(f-y)/m,this.z=(h-u)/m,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A1 extends $o{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Da("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ws?$t:xi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Qx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends A1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class e_ extends Gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class C1 extends Gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(f!==y||l!==h||c!==p||u!==v){let g=1-a;const d=l*h+c*p+u*v+f*y,m=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const L=Math.sqrt(x),A=Math.atan2(L,d*m);g=Math.sin(g*A)/L,a=Math.sin(a*A)/L}const S=a*m;if(l=l*g+h*S,c=c*g+p*S,u=u*g+v*S,f=f*g+y*S,g===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*p-c*h,e[n+1]=l*v+u*h+c*f-a*p,e[n+2]=c*v+u*p+a*h-l*f,e[n+3]=u*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ed.copy(this).projectOnVector(e),this.sub(Ed)}reflect(e){return this.sub(Ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ed=new U,Tg=new gl;class vl{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(s,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vl.copy(i.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),Gl.subVectors(this.max,ca),Ws.subVectors(e.a,ca),js.subVectors(e.b,ca),Xs.subVectors(e.c,ca),wr.subVectors(js,Ws),Er.subVectors(Xs,js),ss.subVectors(Ws,Xs);let n=[0,-wr.z,wr.y,0,-Er.z,Er.y,0,-ss.z,ss.y,wr.z,0,-wr.x,Er.z,0,-Er.x,ss.z,0,-ss.x,-wr.y,wr.x,0,-Er.y,Er.x,0,-ss.y,ss.x,0];return!Td(n,Ws,js,Xs,Gl)||(n=[1,0,0,0,1,0,0,0,1],!Td(n,Ws,js,Xs,Gl))?!1:(Wl.crossVectors(wr,Er),n=[Wl.x,Wl.y,Wl.z],Td(n,Ws,js,Xs,Gl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tr=[new U,new U,new U,new U,new U,new U,new U,new U],bi=new U,Vl=new vl,Ws=new U,js=new U,Xs=new U,wr=new U,Er=new U,ss=new U,ca=new U,Gl=new U,Wl=new U,os=new U;function Td(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){os.fromArray(t,s);const a=r.x*Math.abs(os.x)+r.y*Math.abs(os.y)+r.z*Math.abs(os.z),l=e.dot(os),c=n.dot(os),u=i.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const R1=new vl,ua=new U,bd=new U;class Lu{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):R1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const n=ua.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ua,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(bd)),this.expandByPoint(ua.copy(e.center).sub(bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nr=new U,Ad=new U,jl=new U,Tr=new U,Cd=new U,Xl=new U,Rd=new U;class t_{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=nr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,n),nr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ad.copy(e).add(n).multiplyScalar(.5),jl.copy(n).sub(e).normalize(),Tr.copy(this.origin).sub(Ad);const s=e.distanceTo(n)*.5,o=-this.direction.dot(jl),a=Tr.dot(this.direction),l=-Tr.dot(jl),c=Tr.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const y=1/u;f*=y,h*=y,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ad).addScaledVector(jl,h),p}intersectSphere(e,n){nr.subVectors(e.center,this.origin);const i=nr.dot(this.direction),r=nr.dot(nr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,n,i,r,s){Cd.subVectors(n,e),Xl.subVectors(i,e),Rd.crossVectors(Cd,Xl);let o=this.direction.dot(Rd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tr.subVectors(this.origin,e);const l=a*this.direction.dot(Xl.crossVectors(Tr,Xl));if(l<0)return null;const c=a*this.direction.dot(Cd.cross(Tr));if(c<0||l+c>o)return null;const u=-a*Tr.dot(Rd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,v,y,g){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,v,y,g)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,v,y,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/$s.setFromMatrixColumn(e,0).length(),s=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,v=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,y=c*f;n[0]=h+y*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,y=c*f;n[0]=h-y*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=a*u,y=a*f;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=y-h*f,n[8]=v*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+v,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+y,n[5]=o*u,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*u,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P1,e,L1)}lookAt(e,n,i){const r=this.elements;return ni.subVectors(e,n),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),br.crossVectors(i,ni),br.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),br.crossVectors(i,ni)),br.normalize(),$l.crossVectors(ni,br),r[0]=br.x,r[4]=$l.x,r[8]=ni.x,r[1]=br.y,r[5]=$l.y,r[9]=ni.y,r[2]=br.z,r[6]=$l.z,r[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],y=i[6],g=i[10],d=i[14],m=i[3],x=i[7],S=i[11],L=i[15],A=r[0],R=r[4],F=r[8],E=r[12],T=r[1],V=r[5],X=r[9],te=r[13],I=r[2],W=r[6],j=r[10],ee=r[14],z=r[3],$=r[7],Y=r[11],le=r[15];return s[0]=o*A+a*T+l*I+c*z,s[4]=o*R+a*V+l*W+c*$,s[8]=o*F+a*X+l*j+c*Y,s[12]=o*E+a*te+l*ee+c*le,s[1]=u*A+f*T+h*I+p*z,s[5]=u*R+f*V+h*W+p*$,s[9]=u*F+f*X+h*j+p*Y,s[13]=u*E+f*te+h*ee+p*le,s[2]=v*A+y*T+g*I+d*z,s[6]=v*R+y*V+g*W+d*$,s[10]=v*F+y*X+g*j+d*Y,s[14]=v*E+y*te+g*ee+d*le,s[3]=m*A+x*T+S*I+L*z,s[7]=m*R+x*V+S*W+L*$,s[11]=m*F+x*X+S*j+L*Y,s[15]=m*E+x*te+S*ee+L*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],y=e[7],g=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],y=e[13],g=e[14],d=e[15],m=f*g*c-y*h*c+y*l*p-a*g*p-f*l*d+a*h*d,x=v*h*c-u*g*c-v*l*p+o*g*p+u*l*d-o*h*d,S=u*y*c-v*f*c+v*a*p-o*y*p-u*a*d+o*f*d,L=v*f*l-u*y*l-v*a*h+o*y*h+u*a*g-o*f*g,A=n*m+i*x+r*S+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=m*R,e[1]=(y*h*s-f*g*s-y*r*p+i*g*p+f*r*d-i*h*d)*R,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*d+i*l*d)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*R,e[4]=x*R,e[5]=(u*g*s-v*h*s+v*r*p-n*g*p-u*r*d+n*h*d)*R,e[6]=(v*l*s-o*g*s-v*r*c+n*g*c+o*r*d-n*l*d)*R,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*R,e[8]=S*R,e[9]=(v*f*s-u*y*s-v*i*p+n*y*p+u*i*d-n*f*d)*R,e[10]=(o*y*s-v*a*s+v*i*c-n*y*c-o*i*d+n*a*d)*R,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*R,e[12]=L*R,e[13]=(u*y*r-v*f*r+v*i*h-n*y*h-u*i*g+n*f*g)*R,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*g-n*a*g)*R,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,v=s*f,y=o*u,g=o*f,d=a*f,m=l*c,x=l*u,S=l*f,L=i.x,A=i.y,R=i.z;return r[0]=(1-(y+d))*L,r[1]=(p+S)*L,r[2]=(v-x)*L,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(h+d))*A,r[6]=(g+m)*A,r[7]=0,r[8]=(v+x)*R,r[9]=(g-m)*R,r[10]=(1-(h+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=$s.set(r[0],r[1],r[2]).length();const o=$s.set(r[4],r[5],r[6]).length(),a=$s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ai.copy(this);const c=1/s,u=1/o,f=1/a;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=f,Ai.elements[9]*=f,Ai.elements[10]*=f,n.setFromRotationMatrix(Ai),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=dr){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===dr)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===lu)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=dr){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let v,y;if(a===dr)v=(o+s)*f,y=-2*f;else if(a===lu)v=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $s=new U,Ai=new tn,P1=new U(0,0,0),L1=new U(1,1,1),br=new U,$l=new U,ni=new U,bg=new tn,Ag=new gl;class xl{constructor(e=0,n=0,i=0,r=xl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ag.setFromEuler(this),this.setFromQuaternion(Ag,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xl.DEFAULT_ORDER="XYZ";let n_=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},N1=0;const Cg=new U,Ys=new gl,ir=new tn,Yl=new U,da=new U,I1=new U,D1=new gl,Rg=new U(1,0,0),Pg=new U(0,1,0),Lg=new U(0,0,1),U1={type:"added"},O1={type:"removed"};class Mn extends $o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new U,n=new xl,i=new gl,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tn},normalMatrix:{value:new yt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Rg,e)}rotateY(e){return this.rotateOnAxis(Pg,e)}rotateZ(e){return this.rotateOnAxis(Lg,e)}translateOnAxis(e,n){return Cg.copy(e).applyQuaternion(this.quaternion),this.position.add(Cg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rg,e)}translateY(e){return this.translateOnAxis(Pg,e)}translateZ(e){return this.translateOnAxis(Lg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Yl.copy(e):Yl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(da,Yl,this.up):ir.lookAt(Yl,da,this.up),this.quaternion.setFromRotationMatrix(ir),r&&(ir.extractRotation(r.matrixWorld),Ys.setFromRotationMatrix(ir),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(U1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(O1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,I1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,D1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mn.DEFAULT_UP=new U(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new U,rr=new U,Pd=new U,sr=new U,qs=new U,Zs=new U,Ng=new U,Ld=new U,Nd=new U,Id=new U;let ql=!1;class vi{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ci.subVectors(e,n),r.cross(Ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ci.subVectors(r,n),rr.subVectors(i,n),Pd.subVectors(e,n);const o=Ci.dot(Ci),a=Ci.dot(rr),l=Ci.dot(Pd),c=rr.dot(rr),u=rr.dot(Pd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getUV(e,n,i,r,s,o,a,l){return ql===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ql=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,sr.x),l.addScaledVector(o,sr.y),l.addScaledVector(a,sr.z),l)}static isFrontFacing(e,n,i,r){return Ci.subVectors(i,n),rr.subVectors(e,n),Ci.cross(rr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ci.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ql===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ql=!0),vi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return vi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;qs.subVectors(r,i),Zs.subVectors(s,i),Ld.subVectors(e,i);const l=qs.dot(Ld),c=Zs.dot(Ld);if(l<=0&&c<=0)return n.copy(i);Nd.subVectors(e,r);const u=qs.dot(Nd),f=Zs.dot(Nd);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(qs,o);Id.subVectors(e,s);const p=qs.dot(Id),v=Zs.dot(Id);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Zs,a);const g=u*v-p*f;if(g<=0&&f-u>=0&&p-v>=0)return Ng.subVectors(s,r),a=(f-u)/(f-u+(p-v)),n.copy(r).addScaledVector(Ng,a);const d=1/(g+y+h);return o=y*d,a=h*d,n.copy(i).addScaledVector(qs,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},Zl={h:0,s:0,l:0};function Dd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class xt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ut.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ut.workingColorSpace){if(e=fp(e,1),n=Tn(n,0,1),i=Tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Dd(o,s,e+1/3),this.g=Dd(o,s,e),this.b=Dd(o,s,e-1/3)}return Ut.toWorkingColorSpace(this,r),this}setStyle(e,n=$t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$t){const i=i_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}copyLinearToSRGB(e){return this.r=Md(e.r),this.g=Md(e.g),this.b=Md(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return Ut.fromWorkingColorSpace(Ln.copy(this),e),Math.round(Tn(Ln.r*255,0,255))*65536+Math.round(Tn(Ln.g*255,0,255))*256+Math.round(Tn(Ln.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ut.workingColorSpace){Ut.fromWorkingColorSpace(Ln.copy(this),n);const i=Ln.r,r=Ln.g,s=Ln.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(Ln.copy(this),n),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=$t){Ut.fromWorkingColorSpace(Ln.copy(this),e);const n=Ln.r,i=Ln.g,r=Ln.b;return e!==$t?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+n,Ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ar),e.getHSL(Zl);const i=Ia(Ar.h,Zl.h,n),r=Ia(Ar.s,Zl.s,n),s=Ia(Ar.l,Zl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new xt;xt.NAMES=i_;let F1=0;class Us extends $o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Lo,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=iu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(i.blending=this.blending),this.side!==Kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eh&&(i.blendSrc=this.blendSrc),this.blendDst!==th&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==iu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_g&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $i extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new U,Kl=new Se;class Si{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ur,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Kl.fromBufferAttribute(this,n),Kl.applyMatrix3(e),this.setXY(n,Kl.x,Kl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix3(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Xi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Xi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Xi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Xi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sh&&(e.usage=this.usage),e}}class r_ extends Si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class s_ extends Si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ot extends Si{constructor(e,n,i){super(new Float32Array(e),n,i)}}let k1=0;const fi=new tn,Ud=new Mn,Ks=new U,ii=new vl,fa=new vl,_n=new U;class mn extends $o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kx(e)?s_:r_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new yt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,n,i){return fi.makeTranslation(e,n,i),this.applyMatrix4(fi),this}scale(e,n,i){return fi.makeScale(e,n,i),this.applyMatrix4(fi),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ot(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ii.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];fa.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(ii.min,fa.min),ii.expandByPoint(_n),_n.addVectors(ii.max,fa.max),ii.expandByPoint(_n)):(ii.expandByPoint(fa.min),ii.expandByPoint(fa.max))}ii.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_n.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_n));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_n.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(e,c),_n.add(Ks)),r=Math.max(r,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new U,u[T]=new U;const f=new U,h=new U,p=new U,v=new Se,y=new Se,g=new Se,d=new U,m=new U;function x(T,V,X){f.fromArray(r,T*3),h.fromArray(r,V*3),p.fromArray(r,X*3),v.fromArray(o,T*2),y.fromArray(o,V*2),g.fromArray(o,X*2),h.sub(f),p.sub(f),y.sub(v),g.sub(v);const te=1/(y.x*g.y-g.x*y.y);isFinite(te)&&(d.copy(h).multiplyScalar(g.y).addScaledVector(p,-y.y).multiplyScalar(te),m.copy(p).multiplyScalar(y.x).addScaledVector(h,-g.x).multiplyScalar(te),c[T].add(d),c[V].add(d),c[X].add(d),u[T].add(m),u[V].add(m),u[X].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,V=S.length;T<V;++T){const X=S[T],te=X.start,I=X.count;for(let W=te,j=te+I;W<j;W+=3)x(i[W+0],i[W+1],i[W+2])}const L=new U,A=new U,R=new U,F=new U;function E(T){R.fromArray(s,T*3),F.copy(R);const V=c[T];L.copy(V),L.sub(R.multiplyScalar(R.dot(V))).normalize(),A.crossVectors(F,V);const te=A.dot(u[T])<0?-1:1;l[T*4]=L.x,l[T*4+1]=L.y,l[T*4+2]=L.z,l[T*4+3]=te}for(let T=0,V=S.length;T<V;++T){const X=S[T],te=X.start,I=X.count;for(let W=te,j=te+I;W<j;W+=3)E(i[W+0]),E(i[W+1]),E(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)_n.fromBufferAttribute(e,n),_n.normalize(),e.setXYZ(n,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new Si(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ig=new tn,as=new t_,Jl=new Lu,Dg=new U,Js=new U,Qs=new U,eo=new U,Od=new U,Ql=new U,ec=new Se,tc=new Se,nc=new Se,Ug=new U,Og=new U,Fg=new U,ic=new U,rc=new U;class $e extends Mn{constructor(e=new mn,n=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ql.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Od.fromBufferAttribute(f,e),o?Ql.addScaledVector(Od,u):Ql.addScaledVector(Od.sub(n),u))}n.add(Ql)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(s),as.copy(e.ray).recast(e.near),!(Jl.containsPoint(as.origin)===!1&&(as.intersectSphere(Jl,Dg)===null||as.origin.distanceToSquared(Dg)>(e.far-e.near)**2))&&(Ig.copy(s).invert(),as.copy(e.ray).applyMatrix4(Ig),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,as)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const g=h[v],d=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,L=x;S<L;S+=3){const A=a.getX(S),R=a.getX(S+1),F=a.getX(S+2);r=sc(this,d,e,i,c,u,f,A,R,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=v,d=y;g<d;g+=3){const m=a.getX(g),x=a.getX(g+1),S=a.getX(g+2);r=sc(this,o,e,i,c,u,f,m,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const g=h[v],d=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,L=x;S<L;S+=3){const A=S,R=S+1,F=S+2;r=sc(this,d,e,i,c,u,f,A,R,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=v,d=y;g<d;g+=3){const m=g,x=g+1,S=g+2;r=sc(this,o,e,i,c,u,f,m,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function z1(t,e,n,i,r,s,o,a){let l;if(e.side===Vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Kr,a),l===null)return null;rc.copy(a),rc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(rc);return c<n.near||c>n.far?null:{distance:c,point:rc.clone(),object:t}}function sc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Js),t.getVertexPosition(l,Qs),t.getVertexPosition(c,eo);const u=z1(t,e,n,i,Js,Qs,eo,ic);if(u){r&&(ec.fromBufferAttribute(r,a),tc.fromBufferAttribute(r,l),nc.fromBufferAttribute(r,c),u.uv=vi.getInterpolation(ic,Js,Qs,eo,ec,tc,nc,new Se)),s&&(ec.fromBufferAttribute(s,a),tc.fromBufferAttribute(s,l),nc.fromBufferAttribute(s,c),u.uv1=vi.getInterpolation(ic,Js,Qs,eo,ec,tc,nc,new Se),u.uv2=u.uv1),o&&(Ug.fromBufferAttribute(o,a),Og.fromBufferAttribute(o,l),Fg.fromBufferAttribute(o,c),u.normal=vi.getInterpolation(ic,Js,Qs,eo,Ug,Og,Fg,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};vi.getNormal(Js,Qs,eo,f.normal),u.face=f}return u}class cn extends mn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(f,2));function v(y,g,d,m,x,S,L,A,R,F,E){const T=S/R,V=L/F,X=S/2,te=L/2,I=A/2,W=R+1,j=F+1;let ee=0,z=0;const $=new U;for(let Y=0;Y<j;Y++){const le=Y*V-te;for(let fe=0;fe<W;fe++){const Q=fe*T-X;$[y]=Q*m,$[g]=le*x,$[d]=I,c.push($.x,$.y,$.z),$[y]=0,$[g]=0,$[d]=A>0?1:-1,u.push($.x,$.y,$.z),f.push(fe/R),f.push(1-Y/F),ee+=1}}for(let Y=0;Y<F;Y++)for(let le=0;le<R;le++){const fe=h+le+W*Y,Q=h+le+W*(Y+1),de=h+(le+1)+W*(Y+1),Ce=h+(le+1)+W*Y;l.push(fe,Q,Ce),l.push(Q,de,Ce),z+=6}a.addGroup(p,z,E),p+=z,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Go(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Fn(t){const e={};for(let n=0;n<t.length;n++){const i=Go(t[n]);for(const r in i)e[r]=i[r]}return e}function B1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function o_(t){return t.getRenderTarget()===null?t.outputColorSpace:Ut.workingColorSpace}const H1={clone:Go,merge:Fn};var V1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ps extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V1,this.fragmentShader=G1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Go(e.uniforms),this.uniformsGroups=B1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let a_=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=dr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Zn extends a_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Na*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const to=-90,no=1;class W1 extends Mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zn(to,no,e,n);r.layers=this.layers,this.add(r);const s=new Zn(to,no,e,n);s.layers=this.layers,this.add(s);const o=new Zn(to,no,e,n);o.layers=this.layers,this.add(o);const a=new Zn(to,no,e,n);a.layers=this.layers,this.add(a);const l=new Zn(to,no,e,n);l.layers=this.layers,this.add(l);const c=new Zn(to,no,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===dr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class l_ extends Gn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Bo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class j1 extends Rs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Da("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ws?$t:xi),this.texture=new l_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new cn(5,5,5),s=new Ps({name:"CubemapFromEquirect",uniforms:Go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:jr});s.uniforms.tEquirect.value=n;const o=new $e(r,s),a=n.minFilter;return n.minFilter===rl&&(n.minFilter=Bn),new W1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Fd=new U,X1=new U,$1=new yt;class ds{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Fd.subVectors(i,n).cross(X1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Fd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$1.getNormalMatrix(e),r=this.coplanarPoint(Fd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Lu,oc=new U;class hp{constructor(e=new ds,n=new ds,i=new ds,r=new ds,s=new ds,o=new ds){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=dr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],y=r[10],g=r[11],d=r[12],m=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,g-p,S-d).normalize(),i[1].setComponents(l+s,h+c,g+p,S+d).normalize(),i[2].setComponents(l+o,h+u,g+v,S+m).normalize(),i[3].setComponents(l-o,h-u,g-v,S-m).normalize(),i[4].setComponents(l-a,h-f,g-y,S-x).normalize(),n===dr)i[5].setComponents(l+a,h+f,g+y,S+x).normalize();else if(n===lu)i[5].setComponents(a,f,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(oc.x=r.normal.x>0?e.max.x:e.min.x,oc.y=r.normal.y>0?e.max.y:e.min.y,oc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function c_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Y1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=f.byteLength,v=t.createBuffer();t.bindBuffer(u,v),t.bufferData(u,f,h),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,f){const h=u.array,p=u._updateRange,v=u.updateRanges;if(t.bindBuffer(f,c),p.count===-1&&v.length===0&&t.bufferSubData(f,0,h),v.length!==0){for(let y=0,g=v.length;y<g;y++){const d=v[y];n?t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class pi extends mn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],v=[],y=[],g=[];for(let d=0;d<u;d++){const m=d*h-o;for(let x=0;x<c;x++){const S=x*f-s;v.push(S,-m,0),y.push(0,0,1),g.push(x/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<a;m++){const x=m+c*d,S=m+c*(d+1),L=m+1+c*(d+1),A=m+1+c*d;p.push(x,S,A),p.push(S,L,A)}this.setIndex(p),this.setAttribute("position",new Ot(v,3)),this.setAttribute("normal",new Ot(y,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.width,e.height,e.widthSegments,e.heightSegments)}}var q1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,K1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ew=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ow=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_w=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ww=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ew=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tw="gl_FragColor = linearToOutputTexel( gl_FragColor );",bw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Aw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ow=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ww=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$w=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,uE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ME=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,EE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,IE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,nT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_T=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ET=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:q1,alphahash_pars_fragment:Z1,alphamap_fragment:K1,alphamap_pars_fragment:J1,alphatest_fragment:Q1,alphatest_pars_fragment:ew,aomap_fragment:tw,aomap_pars_fragment:nw,batching_pars_vertex:iw,batching_vertex:rw,begin_vertex:sw,beginnormal_vertex:ow,bsdfs:aw,iridescence_fragment:lw,bumpmap_pars_fragment:cw,clipping_planes_fragment:uw,clipping_planes_pars_fragment:dw,clipping_planes_pars_vertex:fw,clipping_planes_vertex:hw,color_fragment:pw,color_pars_fragment:mw,color_pars_vertex:gw,color_vertex:vw,common:xw,cube_uv_reflection_fragment:_w,defaultnormal_vertex:yw,displacementmap_pars_vertex:Sw,displacementmap_vertex:Mw,emissivemap_fragment:ww,emissivemap_pars_fragment:Ew,colorspace_fragment:Tw,colorspace_pars_fragment:bw,envmap_fragment:Aw,envmap_common_pars_fragment:Cw,envmap_pars_fragment:Rw,envmap_pars_vertex:Pw,envmap_physical_pars_fragment:Vw,envmap_vertex:Lw,fog_vertex:Nw,fog_pars_vertex:Iw,fog_fragment:Dw,fog_pars_fragment:Uw,gradientmap_pars_fragment:Ow,lightmap_fragment:Fw,lightmap_pars_fragment:kw,lights_lambert_fragment:zw,lights_lambert_pars_fragment:Bw,lights_pars_begin:Hw,lights_toon_fragment:Gw,lights_toon_pars_fragment:Ww,lights_phong_fragment:jw,lights_phong_pars_fragment:Xw,lights_physical_fragment:$w,lights_physical_pars_fragment:Yw,lights_fragment_begin:qw,lights_fragment_maps:Zw,lights_fragment_end:Kw,logdepthbuf_fragment:Jw,logdepthbuf_pars_fragment:Qw,logdepthbuf_pars_vertex:eE,logdepthbuf_vertex:tE,map_fragment:nE,map_pars_fragment:iE,map_particle_fragment:rE,map_particle_pars_fragment:sE,metalnessmap_fragment:oE,metalnessmap_pars_fragment:aE,morphcolor_vertex:lE,morphnormal_vertex:cE,morphtarget_pars_vertex:uE,morphtarget_vertex:dE,normal_fragment_begin:fE,normal_fragment_maps:hE,normal_pars_fragment:pE,normal_pars_vertex:mE,normal_vertex:gE,normalmap_pars_fragment:vE,clearcoat_normal_fragment_begin:xE,clearcoat_normal_fragment_maps:_E,clearcoat_pars_fragment:yE,iridescence_pars_fragment:SE,opaque_fragment:ME,packing:wE,premultiplied_alpha_fragment:EE,project_vertex:TE,dithering_fragment:bE,dithering_pars_fragment:AE,roughnessmap_fragment:CE,roughnessmap_pars_fragment:RE,shadowmap_pars_fragment:PE,shadowmap_pars_vertex:LE,shadowmap_vertex:NE,shadowmask_pars_fragment:IE,skinbase_vertex:DE,skinning_pars_vertex:UE,skinning_vertex:OE,skinnormal_vertex:FE,specularmap_fragment:kE,specularmap_pars_fragment:zE,tonemapping_fragment:BE,tonemapping_pars_fragment:HE,transmission_fragment:VE,transmission_pars_fragment:GE,uv_pars_fragment:WE,uv_pars_vertex:jE,uv_vertex:XE,worldpos_vertex:$E,background_vert:YE,background_frag:qE,backgroundCube_vert:ZE,backgroundCube_frag:KE,cube_vert:JE,cube_frag:QE,depth_vert:eT,depth_frag:tT,distanceRGBA_vert:nT,distanceRGBA_frag:iT,equirect_vert:rT,equirect_frag:sT,linedashed_vert:oT,linedashed_frag:aT,meshbasic_vert:lT,meshbasic_frag:cT,meshlambert_vert:uT,meshlambert_frag:dT,meshmatcap_vert:fT,meshmatcap_frag:hT,meshnormal_vert:pT,meshnormal_frag:mT,meshphong_vert:gT,meshphong_frag:vT,meshphysical_vert:xT,meshphysical_frag:_T,meshtoon_vert:yT,meshtoon_frag:ST,points_vert:MT,points_frag:wT,shadow_vert:ET,shadow_frag:TT,sprite_vert:bT,sprite_frag:AT},Ae={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Wi={basic:{uniforms:Fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new xt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Fn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Fn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new xt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Fn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Fn([Ae.points,Ae.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Fn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Fn([Ae.common,Ae.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Fn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Fn([Ae.sprite,Ae.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Fn([Ae.common,Ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Fn([Ae.lights,Ae.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Wi.physical={uniforms:Fn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const ac={r:0,b:0,g:0};function CT(t,e,n,i,r,s,o){const a=new xt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(g,d){let m=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?n:e).get(x)),x===null?y(a,l):x&&x.isColor&&(y(x,1),m=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ru)?(u===void 0&&(u=new $e(new cn(1,1,1),new Ps({name:"BackgroundCubeMaterial",uniforms:Go(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ut.getTransfer(x.colorSpace)!==Wt,(f!==x||h!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new $e(new pi(2,2),new Ps({name:"BackgroundMaterial",uniforms:Go(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ut.getTransfer(x.colorSpace)!==Wt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,d){g.getRGB(ac,o_(t)),i.buffers.color.setClear(ac.r,ac.g,ac.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),l=d,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:v}}function RT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function f(I,W,j,ee,z){let $=!1;if(o){const Y=y(ee,j,W);c!==Y&&(c=Y,p(c.object)),$=d(I,ee,j,z),$&&m(I,ee,j,z)}else{const Y=W.wireframe===!0;(c.geometry!==ee.id||c.program!==j.id||c.wireframe!==Y)&&(c.geometry=ee.id,c.program=j.id,c.wireframe=Y,$=!0)}z!==null&&n.update(z,t.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,F(I,W,j,ee),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(z).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function v(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function y(I,W,j){const ee=j.wireframe===!0;let z=a[I.id];z===void 0&&(z={},a[I.id]=z);let $=z[W.id];$===void 0&&($={},z[W.id]=$);let Y=$[ee];return Y===void 0&&(Y=g(h()),$[ee]=Y),Y}function g(I){const W=[],j=[],ee=[];for(let z=0;z<r;z++)W[z]=0,j[z]=0,ee[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:j,attributeDivisors:ee,object:I,attributes:{},index:null}}function d(I,W,j,ee){const z=c.attributes,$=W.attributes;let Y=0;const le=j.getAttributes();for(const fe in le)if(le[fe].location>=0){const de=z[fe];let Ce=$[fe];if(Ce===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(Ce=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(Ce=I.instanceColor)),de===void 0||de.attribute!==Ce||Ce&&de.data!==Ce.data)return!0;Y++}return c.attributesNum!==Y||c.index!==ee}function m(I,W,j,ee){const z={},$=W.attributes;let Y=0;const le=j.getAttributes();for(const fe in le)if(le[fe].location>=0){let de=$[fe];de===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(de=I.instanceColor));const Ce={};Ce.attribute=de,de&&de.data&&(Ce.data=de.data),z[fe]=Ce,Y++}c.attributes=z,c.attributesNum=Y,c.index=ee}function x(){const I=c.newAttributes;for(let W=0,j=I.length;W<j;W++)I[W]=0}function S(I){L(I,0)}function L(I,W){const j=c.newAttributes,ee=c.enabledAttributes,z=c.attributeDivisors;j[I]=1,ee[I]===0&&(t.enableVertexAttribArray(I),ee[I]=1),z[I]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),z[I]=W)}function A(){const I=c.newAttributes,W=c.enabledAttributes;for(let j=0,ee=W.length;j<ee;j++)W[j]!==I[j]&&(t.disableVertexAttribArray(j),W[j]=0)}function R(I,W,j,ee,z,$,Y){Y===!0?t.vertexAttribIPointer(I,W,j,z,$):t.vertexAttribPointer(I,W,j,ee,z,$)}function F(I,W,j,ee){if(i.isWebGL2===!1&&(I.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const z=ee.attributes,$=j.getAttributes(),Y=W.defaultAttributeValues;for(const le in $){const fe=$[le];if(fe.location>=0){let Q=z[le];if(Q===void 0&&(le==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),le==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const de=Q.normalized,Ce=Q.itemSize,Fe=n.get(Q);if(Fe===void 0)continue;const Le=Fe.buffer,et=Fe.type,Je=Fe.bytesPerElement,Xe=i.isWebGL2===!0&&(et===t.INT||et===t.UNSIGNED_INT||Q.gpuType===Hx);if(Q.isInterleavedBufferAttribute){const He=Q.data,D=He.stride,re=Q.offset;if(He.isInstancedInterleavedBuffer){for(let oe=0;oe<fe.locationSize;oe++)L(fe.location+oe,He.meshPerAttribute);I.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let oe=0;oe<fe.locationSize;oe++)S(fe.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let oe=0;oe<fe.locationSize;oe++)R(fe.location+oe,Ce/fe.locationSize,et,de,D*Je,(re+Ce/fe.locationSize*oe)*Je,Xe)}else{if(Q.isInstancedBufferAttribute){for(let He=0;He<fe.locationSize;He++)L(fe.location+He,Q.meshPerAttribute);I.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let He=0;He<fe.locationSize;He++)S(fe.location+He);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let He=0;He<fe.locationSize;He++)R(fe.location+He,Ce/fe.locationSize,et,de,Ce*Je,Ce/fe.locationSize*He*Je,Xe)}}else if(Y!==void 0){const de=Y[le];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(fe.location,de);break;case 3:t.vertexAttrib3fv(fe.location,de);break;case 4:t.vertexAttrib4fv(fe.location,de);break;default:t.vertexAttrib1fv(fe.location,de)}}}}A()}function E(){X();for(const I in a){const W=a[I];for(const j in W){const ee=W[j];for(const z in ee)v(ee[z].object),delete ee[z];delete W[j]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;const W=a[I.id];for(const j in W){const ee=W[j];for(const z in ee)v(ee[z].object),delete ee[z];delete W[j]}delete a[I.id]}function V(I){for(const W in a){const j=a[W];if(j[I.id]===void 0)continue;const ee=j[I.id];for(const z in ee)v(ee[z].object),delete ee[z];delete j[I.id]}}function X(){te(),u=!0,c!==l&&(c=l,p(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:X,resetDefaultState:te,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:S,disableUnusedAttributes:A}}function PT(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,h){if(h===0)return;let p,v;if(r)p=t,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,u,f,h),n.update(f,s,h)}function c(u,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<h;v++)this.render(u[v],f[v]);else{p.multiDrawArraysWEBGL(s,u,0,f,0,h);let v=0;for(let y=0;y<h;y++)v+=f[y];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function LT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,S=o||e.has("OES_texture_float"),L=x&&S,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:m,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:L,maxSamples:A}}function NT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ds,a=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const m=s?0:i,x=m*4;let S=d.clippingState||null;l.value=S,S=u(v,h,x,p);for(let L=0;L!==x;++L)S[L]=n[L];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const d=p+y*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,S=p;x!==y;++x,S+=4)o.copy(f[x]).applyMatrix4(m,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function IT(t){let e=new WeakMap;function n(o,a){return a===ru?o.mapping=Bo:a===nh&&(o.mapping=Ho),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ru||a===nh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new j1(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class pp extends a_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Mo=4,kg=[.125,.215,.35,.446,.526,.582],ps=20,kd=new pp,zg=new xt;let zd=null,Bd=0,Hd=0;const fs=(1+Math.sqrt(5))/2,io=1/fs,Bg=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,fs,io),new U(0,fs,-io),new U(io,0,fs),new U(-io,0,fs),new U(fs,io,0),new U(-fs,io,0)];class Ua{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){zd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zd,Bd,Hd),e.scissorTest=!1,lc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bo||e.mapping===Ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:sl,format:Ni,colorSpace:vr,depthBuffer:!1},r=Hg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DT(s)),this._blurMaterial=UT(s,e,n)}return r}_compileMaterial(e){const n=new $e(this._lodPlanes[0],e);this._renderer.compile(n,kd)}_sceneToCubeUV(e,n,i,r){const a=new Zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(zg),u.toneMapping=Xr,u.autoClear=!1;const p=new $i({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),v=new $e(new cn,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(zg),y=!0);for(let d=0;d<6;d++){const m=d%3;m===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):m===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;lc(r,m*x,d>2?x:0,x,x),u.setRenderTarget(r),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Bo||e.mapping===Ho;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;lc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,kd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bg[(r-1)%Bg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new $e(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ps-1),y=s/v,g=isFinite(s)?1+Math.floor(u*y):ps;g>ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ps}`);const d=[];let m=0;for(let R=0;R<ps;++R){const F=R/y,E=Math.exp(-F*F/2);d.push(E),R===0?m+=E:R<g&&(m+=2*E)}for(let R=0;R<d.length;R++)d[R]=d[R]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const S=this._sizeLods[r],L=3*S*(r>x-Mo?r-x+Mo:0),A=4*(this._cubeSize-S);lc(n,L,A,3*S,2*S),l.setRenderTarget(n),l.render(f,kd)}}function DT(t){const e=[],n=[],i=[];let r=t;const s=t-Mo+1+kg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Mo?l=kg[o-t+Mo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,y=3,g=2,d=1,m=new Float32Array(y*v*p),x=new Float32Array(g*v*p),S=new Float32Array(d*v*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,F=A>2?0:-1,E=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];m.set(E,y*v*A),x.set(h,g*v*A);const T=[A,A,A,A,A,A];S.set(T,d*v*A)}const L=new mn;L.setAttribute("position",new Si(m,y)),L.setAttribute("uv",new Si(x,g)),L.setAttribute("faceIndex",new Si(S,d)),e.push(L),r>Mo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hg(t,e,n){const i=new Rs(t,e,n);return i.texture.mapping=Ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function UT(t,e,n){const i=new Float32Array(ps),r=new U(0,1,0);return new Ps({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Vg(){return new Ps({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Gg(){return new Ps({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function mp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ru||l===nh,u=l===Bo||l===Ho;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Ua(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Ua(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function FT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const y=h.morphAttributes[v];for(let g=0,d=y.length;g<d;g++)e.remove(y[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const y=p[v];for(let g=0,d=y.length;g<d;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let y=0;if(p!==null){const m=p.array;y=p.version;for(let x=0,S=m.length;x<S;x+=3){const L=m[x+0],A=m[x+1],R=m[x+2];h.push(L,A,A,R,R,L)}}else if(v!==void 0){const m=v.array;y=v.version;for(let x=0,S=m.length/3-1;x<S;x+=3){const L=x+0,A=x+1,R=x+2;h.push(L,A,A,R,R,L)}}else return;const g=new(Kx(h)?s_:r_)(h,1);g.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function zT(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,v){t.drawElements(s,v,a,p*l),n.update(v,s,1)}function f(p,v,y){if(y===0)return;let g,d;if(r)g=t,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](s,v,a,p*l,y),n.update(v,s,y)}function h(p,v,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<y;d++)this.render(p[d]/l,v[d]);else{g.multiDrawElementsWEBGL(s,v,0,a,p,0,y);let d=0;for(let m=0;m<y;m++)d+=v[m];n.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function BT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function HT(t,e){return t[0]-e[0]}function VT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function GT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new qt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=v!==void 0?v.length:0;let g=s.get(u);if(g===void 0||g.count!==y){let W=function(){te.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var p=W;g!==void 0&&g.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let E=0;x===!0&&(E=1),S===!0&&(E=2),L===!0&&(E=3);let T=u.attributes.position.count*E,V=1;T>e.maxTextureSize&&(V=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const X=new Float32Array(T*V*4*y),te=new e_(X,T,V,y);te.type=Ur,te.needsUpdate=!0;const I=E*4;for(let j=0;j<y;j++){const ee=A[j],z=R[j],$=F[j],Y=T*V*4*j;for(let le=0;le<ee.count;le++){const fe=le*I;x===!0&&(o.fromBufferAttribute(ee,le),X[Y+fe+0]=o.x,X[Y+fe+1]=o.y,X[Y+fe+2]=o.z,X[Y+fe+3]=0),S===!0&&(o.fromBufferAttribute(z,le),X[Y+fe+4]=o.x,X[Y+fe+5]=o.y,X[Y+fe+6]=o.z,X[Y+fe+7]=0),L===!0&&(o.fromBufferAttribute($,le),X[Y+fe+8]=o.x,X[Y+fe+9]=o.y,X[Y+fe+10]=o.z,X[Y+fe+11]=$.itemSize===4?o.w:1)}}g={count:y,texture:te,size:new Se(T,V)},s.set(u,g),u.addEventListener("dispose",W)}let d=0;for(let x=0;x<h.length;x++)d+=h[x];const m=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",m),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const v=h===void 0?0:h.length;let y=i[u.id];if(y===void 0||y.length!==v){y=[];for(let S=0;S<v;S++)y[S]=[S,0];i[u.id]=y}for(let S=0;S<v;S++){const L=y[S];L[0]=S,L[1]=h[S]}y.sort(VT);for(let S=0;S<8;S++)S<v&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(HT);const g=u.morphAttributes.position,d=u.morphAttributes.normal;let m=0;for(let S=0;S<8;S++){const L=a[S],A=L[0],R=L[1];A!==Number.MAX_SAFE_INTEGER&&R?(g&&u.getAttribute("morphTarget"+S)!==g[A]&&u.setAttribute("morphTarget"+S,g[A]),d&&u.getAttribute("morphNormal"+S)!==d[A]&&u.setAttribute("morphNormal"+S,d[A]),r[S]=R,m+=R):(g&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),d&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const x=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function WT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class u_ extends Gn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ms,u!==Ms&&u!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ms&&(i=Dr),i===void 0&&u===Vo&&(i=Ss),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const d_=new Gn,f_=new u_(1,1);f_.compareFunction=Zx;const h_=new e_,p_=new C1,m_=new l_,Wg=[],jg=[],Xg=new Float32Array(16),$g=new Float32Array(9),Yg=new Float32Array(4);function Yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wg[r];if(s===void 0&&(s=new Float32Array(r),Wg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function gn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function vn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nu(t,e){let n=jg[e];n===void 0&&(n=new Int32Array(e),jg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function jT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;t.uniform2fv(this.addr,e),vn(n,e)}}function $T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(gn(n,e))return;t.uniform3fv(this.addr,e),vn(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;t.uniform4fv(this.addr,e),vn(n,e)}}function qT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,i))return;Yg.set(i),t.uniformMatrix2fv(this.addr,!1,Yg),vn(n,i)}}function ZT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,i))return;$g.set(i),t.uniformMatrix3fv(this.addr,!1,$g),vn(n,i)}}function KT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,i))return;Xg.set(i),t.uniformMatrix4fv(this.addr,!1,Xg),vn(n,i)}}function JT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;t.uniform2iv(this.addr,e),vn(n,e)}}function eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gn(n,e))return;t.uniform3iv(this.addr,e),vn(n,e)}}function tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;t.uniform4iv(this.addr,e),vn(n,e)}}function nb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;t.uniform2uiv(this.addr,e),vn(n,e)}}function rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gn(n,e))return;t.uniform3uiv(this.addr,e),vn(n,e)}}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;t.uniform4uiv(this.addr,e),vn(n,e)}}function ob(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?f_:d_;n.setTexture2D(e||s,r)}function ab(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||p_,r)}function lb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||m_,r)}function cb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||h_,r)}function ub(t){switch(t){case 5126:return jT;case 35664:return XT;case 35665:return $T;case 35666:return YT;case 35674:return qT;case 35675:return ZT;case 35676:return KT;case 5124:case 35670:return JT;case 35667:case 35671:return QT;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return rb;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}function db(t,e){t.uniform1fv(this.addr,e)}function fb(t,e){const n=Yo(e,this.size,2);t.uniform2fv(this.addr,n)}function hb(t,e){const n=Yo(e,this.size,3);t.uniform3fv(this.addr,n)}function pb(t,e){const n=Yo(e,this.size,4);t.uniform4fv(this.addr,n)}function mb(t,e){const n=Yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gb(t,e){const n=Yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vb(t,e){const n=Yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function xb(t,e){t.uniform1iv(this.addr,e)}function _b(t,e){t.uniform2iv(this.addr,e)}function yb(t,e){t.uniform3iv(this.addr,e)}function Sb(t,e){t.uniform4iv(this.addr,e)}function Mb(t,e){t.uniform1uiv(this.addr,e)}function wb(t,e){t.uniform2uiv(this.addr,e)}function Eb(t,e){t.uniform3uiv(this.addr,e)}function Tb(t,e){t.uniform4uiv(this.addr,e)}function bb(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);gn(i,s)||(t.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||d_,s[o])}function Ab(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);gn(i,s)||(t.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||p_,s[o])}function Cb(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);gn(i,s)||(t.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||m_,s[o])}function Rb(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);gn(i,s)||(t.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||h_,s[o])}function Pb(t){switch(t){case 5126:return db;case 35664:return fb;case 35665:return hb;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return vb;case 5124:case 35670:return xb;case 35667:case 35671:return _b;case 35668:case 35672:return yb;case 35669:case 35673:return Sb;case 5125:return Mb;case 36294:return wb;case 36295:return Eb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Rb}}class Lb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ub(n.type)}}class Nb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Pb(n.type)}}class Ib{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function qg(t,e){t.seq.push(e),t.map[e.id]=e}function Db(t,e,n){const i=t.name,r=i.length;for(Vd.lastIndex=0;;){const s=Vd.exec(i),o=Vd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){qg(n,c===void 0?new Lb(a,t,e):new Nb(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Ib(a),qg(n,f)),n=f}}}class Pc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Db(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Zg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ub=37297;let Ob=0;function Fb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function kb(t){const e=Ut.getPrimaries(Ut.workingColorSpace),n=Ut.getPrimaries(t);let i;switch(e===n?i="":e===au&&n===ou?i="LinearDisplayP3ToLinearSRGB":e===ou&&n===au&&(i="LinearSRGBToLinearDisplayP3"),t){case vr:case Pu:return[i,"LinearTransferOETF"];case $t:case dp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Kg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Fb(t.getShaderSource(e),o)}else return r}function zb(t,e){const n=kb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Bb(t,e){let n;switch(e){case zM:n="Linear";break;case BM:n="Reinhard";break;case HM:n="OptimizedCineon";break;case Bx:n="ACESFilmic";break;case GM:n="AgX";break;case VM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Hb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wo).join(`
`)}function Vb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(wo).join(`
`)}function Gb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Wb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function wo(t){return t!==""}function Jg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(t){return t.replace(jb,$b)}const Xb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $b(t,e){let n=vt[e];if(n===void 0){const i=Xb.get(e);if(i!==void 0)n=vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lh(n)}const Yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(t){return t.replace(Yb,qb)}function qb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function t0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Fx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===kx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function Kb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Bo:case Ho:e="ENVMAP_TYPE_CUBE";break;case Ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ho:e="ENVMAP_MODE_REFRACTION";break}return e}function Qb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case zx:e="ENVMAP_BLENDING_MULTIPLY";break;case FM:e="ENVMAP_BLENDING_MIX";break;case kM:e="ENVMAP_BLENDING_ADD";break}return e}function e2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function t2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Zb(n),c=Kb(n),u=Jb(n),f=Qb(n),h=e2(n),p=n.isWebGL2?"":Hb(n),v=Vb(n),y=Gb(s),g=r.createProgram();let d,m,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(wo).join(`
`),d.length>0&&(d+=`
`),m=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(wo).join(`
`),m.length>0&&(m+=`
`)):(d=[t0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),m=[p,t0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xr?"#define TONE_MAPPING":"",n.toneMapping!==Xr?vt.tonemapping_pars_fragment:"",n.toneMapping!==Xr?Bb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,zb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wo).join(`
`)),o=lh(o),o=Jg(o,n),o=Qg(o,n),a=lh(a),a=Jg(a,n),a=Qg(a,n),o=e0(o),a=e0(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=x+d+o,L=x+m+a,A=Zg(r,r.VERTEX_SHADER,S),R=Zg(r,r.FRAGMENT_SHADER,L);r.attachShader(g,A),r.attachShader(g,R),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function F(X){if(t.debug.checkShaderErrors){const te=r.getProgramInfoLog(g).trim(),I=r.getShaderInfoLog(A).trim(),W=r.getShaderInfoLog(R).trim();let j=!0,ee=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,A,R);else{const z=Kg(r,A,"vertex"),$=Kg(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+z+`
`+$)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(I===""||W==="")&&(ee=!1);ee&&(X.diagnostics={runnable:j,programLog:te,vertexShader:{log:I,prefix:d},fragmentShader:{log:W,prefix:m}})}r.deleteShader(A),r.deleteShader(R),E=new Pc(r,g),T=Wb(r,g)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(g,Ub)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ob++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=R,this}let n2=0;class i2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new r2(e),n.set(e,i)),i}}class r2{constructor(e){this.id=n2++,this.code=e,this.usedTimes=0}}function s2(t,e,n,i,r,s,o){const a=new n_,l=new i2,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function g(E,T,V,X,te){const I=X.fog,W=te.geometry,j=E.isMeshStandardMaterial?X.environment:null,ee=(E.isMeshStandardMaterial?n:e).get(E.envMap||j),z=ee&&ee.mapping===Ru?ee.image.height:null,$=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Y=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=Y!==void 0?Y.length:0;let fe=0;W.morphAttributes.position!==void 0&&(fe=1),W.morphAttributes.normal!==void 0&&(fe=2),W.morphAttributes.color!==void 0&&(fe=3);let Q,de,Ce,Fe;if($){const xn=Wi[$];Q=xn.vertexShader,de=xn.fragmentShader}else Q=E.vertexShader,de=E.fragmentShader,l.update(E),Ce=l.getVertexShaderID(E),Fe=l.getFragmentShaderID(E);const Le=t.getRenderTarget(),et=te.isInstancedMesh===!0,Je=te.isBatchedMesh===!0,Xe=!!E.map,He=!!E.matcap,D=!!ee,re=!!E.aoMap,oe=!!E.lightMap,me=!!E.bumpMap,se=!!E.normalMap,qe=!!E.displacementMap,Ne=!!E.emissiveMap,C=!!E.metalnessMap,w=!!E.roughnessMap,H=E.anisotropy>0,ge=E.clearcoat>0,ve=E.iridescence>0,he=E.sheen>0,Ve=E.transmission>0,be=H&&!!E.anisotropyMap,Oe=ge&&!!E.clearcoatMap,De=ge&&!!E.clearcoatNormalMap,rt=ge&&!!E.clearcoatRoughnessMap,ne=ve&&!!E.iridescenceMap,_t=ve&&!!E.iridescenceThicknessMap,st=he&&!!E.sheenColorMap,ot=he&&!!E.sheenRoughnessMap,je=!!E.specularMap,ke=!!E.specularColorMap,Ke=!!E.specularIntensityMap,Et=Ve&&!!E.transmissionMap,zt=Ve&&!!E.thicknessMap,ut=!!E.gradientMap,Ee=!!E.alphaMap,O=E.alphaTest>0,Re=!!E.alphaHash,Pe=!!E.extensions,nt=!!W.attributes.uv1,Qe=!!W.attributes.uv2,Tt=!!W.attributes.uv3;let wt=Xr;return E.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(wt=t.toneMapping),{isWebGL2:u,shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:Q,fragmentShader:de,defines:E.defines,customVertexShaderID:Ce,customFragmentShaderID:Fe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Je,instancing:et,instancingColor:et&&te.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:vr,map:Xe,matcap:He,envMap:D,envMapMode:D&&ee.mapping,envMapCubeUVHeight:z,aoMap:re,lightMap:oe,bumpMap:me,normalMap:se,displacementMap:h&&qe,emissiveMap:Ne,normalMapObjectSpace:se&&E.normalMapType===t1,normalMapTangentSpace:se&&E.normalMapType===qx,metalnessMap:C,roughnessMap:w,anisotropy:H,anisotropyMap:be,clearcoat:ge,clearcoatMap:Oe,clearcoatNormalMap:De,clearcoatRoughnessMap:rt,iridescence:ve,iridescenceMap:ne,iridescenceThicknessMap:_t,sheen:he,sheenColorMap:st,sheenRoughnessMap:ot,specularMap:je,specularColorMap:ke,specularIntensityMap:Ke,transmission:Ve,transmissionMap:Et,thicknessMap:zt,gradientMap:ut,opaque:E.transparent===!1&&E.blending===Lo,alphaMap:Ee,alphaTest:O,alphaHash:Re,combine:E.combine,mapUv:Xe&&y(E.map.channel),aoMapUv:re&&y(E.aoMap.channel),lightMapUv:oe&&y(E.lightMap.channel),bumpMapUv:me&&y(E.bumpMap.channel),normalMapUv:se&&y(E.normalMap.channel),displacementMapUv:qe&&y(E.displacementMap.channel),emissiveMapUv:Ne&&y(E.emissiveMap.channel),metalnessMapUv:C&&y(E.metalnessMap.channel),roughnessMapUv:w&&y(E.roughnessMap.channel),anisotropyMapUv:be&&y(E.anisotropyMap.channel),clearcoatMapUv:Oe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:De&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:st&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:ot&&y(E.sheenRoughnessMap.channel),specularMapUv:je&&y(E.specularMap.channel),specularColorMapUv:ke&&y(E.specularColorMap.channel),specularIntensityMapUv:Ke&&y(E.specularIntensityMap.channel),transmissionMapUv:Et&&y(E.transmissionMap.channel),thicknessMapUv:zt&&y(E.thicknessMap.channel),alphaMapUv:Ee&&y(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(se||H),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:nt,vertexUv2s:Qe,vertexUv3s:Tt,pointsUvs:te.isPoints===!0&&!!W.attributes.uv&&(Xe||Ee),fog:!!I,useFog:E.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:wt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Xe&&E.map.isVideoTexture===!0&&Ut.getTransfer(E.map.colorSpace)===Wt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===si,flipSided:E.side===Vn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Pe&&E.extensions.derivatives===!0,extensionFragDepth:Pe&&E.extensions.fragDepth===!0,extensionDrawBuffers:Pe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pe&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Pe&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)T.push(V),T.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(m(T,E),x(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function m(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function x(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function S(E){const T=v[E.type];let V;if(T){const X=Wi[T];V=H1.clone(X.uniforms)}else V=E.uniforms;return V}function L(E,T){let V;for(let X=0,te=c.length;X<te;X++){const I=c[X];if(I.cacheKey===T){V=I,++V.usedTimes;break}}return V===void 0&&(V=new t2(t,T,E,s),c.push(V)),V}function A(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function R(E){l.remove(E)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:S,acquireProgram:L,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:F}}function o2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function a2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function n0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function i0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,v,y,g){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:y,group:g},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=y,d.group=g),e++,d}function a(f,h,p,v,y,g){const d=o(f,h,p,v,y,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,v,y,g){const d=o(f,h,p,v,y,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||a2),i.length>1&&i.sort(h||n0),r.length>1&&r.sort(h||n0)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function l2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new i0,t.set(i,[o])):r>=s.length?(o=new i0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function c2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new xt};break;case"SpotLight":n={position:new U,direction:new U,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function u2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let d2=0;function f2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function h2(t,e){const n=new c2,i=u2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,o=new tn,a=new tn;function l(u,f){let h=0,p=0,v=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let y=0,g=0,d=0,m=0,x=0,S=0,L=0,A=0,R=0,F=0,E=0;u.sort(f2);const T=f===!0?Math.PI:1;for(let X=0,te=u.length;X<te;X++){const I=u[X],W=I.color,j=I.intensity,ee=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=W.r*j*T,p+=W.g*j*T,v+=W.b*j*T;else if(I.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(I.sh.coefficients[$],j);E++}else if(I.isDirectionalLight){const $=n.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const Y=I.shadow,le=i.get(I);le.shadowBias=Y.bias,le.shadowNormalBias=Y.normalBias,le.shadowRadius=Y.radius,le.shadowMapSize=Y.mapSize,r.directionalShadow[y]=le,r.directionalShadowMap[y]=z,r.directionalShadowMatrix[y]=I.shadow.matrix,S++}r.directional[y]=$,y++}else if(I.isSpotLight){const $=n.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(W).multiplyScalar(j*T),$.distance=ee,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,r.spot[d]=$;const Y=I.shadow;if(I.map&&(r.spotLightMap[R]=I.map,R++,Y.updateMatrices(I),I.castShadow&&F++),r.spotLightMatrix[d]=Y.matrix,I.castShadow){const le=i.get(I);le.shadowBias=Y.bias,le.shadowNormalBias=Y.normalBias,le.shadowRadius=Y.radius,le.shadowMapSize=Y.mapSize,r.spotShadow[d]=le,r.spotShadowMap[d]=z,A++}d++}else if(I.isRectAreaLight){const $=n.get(I);$.color.copy(W).multiplyScalar(j),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),r.rectArea[m]=$,m++}else if(I.isPointLight){const $=n.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*T),$.distance=I.distance,$.decay=I.decay,I.castShadow){const Y=I.shadow,le=i.get(I);le.shadowBias=Y.bias,le.shadowNormalBias=Y.normalBias,le.shadowRadius=Y.radius,le.shadowMapSize=Y.mapSize,le.shadowCameraNear=Y.camera.near,le.shadowCameraFar=Y.camera.far,r.pointShadow[g]=le,r.pointShadowMap[g]=z,r.pointShadowMatrix[g]=I.shadow.matrix,L++}r.point[g]=$,g++}else if(I.isHemisphereLight){const $=n.get(I);$.skyColor.copy(I.color).multiplyScalar(j*T),$.groundColor.copy(I.groundColor).multiplyScalar(j*T),r.hemi[x]=$,x++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const V=r.hash;(V.directionalLength!==y||V.pointLength!==g||V.spotLength!==d||V.rectAreaLength!==m||V.hemiLength!==x||V.numDirectionalShadows!==S||V.numPointShadows!==L||V.numSpotShadows!==A||V.numSpotMaps!==R||V.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=m,r.point.length=g,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=A+R-F,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=E,V.directionalLength=y,V.pointLength=g,V.spotLength=d,V.rectAreaLength=m,V.hemiLength=x,V.numDirectionalShadows=S,V.numPointShadows=L,V.numSpotShadows=A,V.numSpotMaps=R,V.numLightProbes=E,r.version=d2++)}function c(u,f){let h=0,p=0,v=0,y=0,g=0;const d=f.matrixWorldInverse;for(let m=0,x=u.length;m<x;m++){const S=u[m];if(S.isDirectionalLight){const L=r.directional[h];L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),h++}else if(S.isSpotLight){const L=r.spot[v];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),v++}else if(S.isRectAreaLight){const L=r.rectArea[y];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const L=r.point[p];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const L=r.hemi[g];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:r}}function r0(t,e){const n=new h2(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function p2(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new r0(t,e),n.set(s,[l])):o>=a.length?(l=new r0(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class m2 extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g2 extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const v2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _2(t,e,n){let i=new hp;const r=new Se,s=new Se,o=new qt,a=new m2({depthPacking:e1}),l=new g2,c={},u=n.maxTextureSize,f={[Kr]:Vn,[Vn]:Kr,[si]:si},h=new Ps({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:v2,fragmentShader:x2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new mn;v.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new $e(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fx;let d=this.type;this.render=function(A,R,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),V=t.getActiveMipmapLevel(),X=t.state;X.setBlending(jr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const te=d!==or&&this.type===or,I=d===or&&this.type!==or;for(let W=0,j=A.length;W<j;W++){const ee=A[W],z=ee.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const $=z.getFrameExtents();if(r.multiply($),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,z.mapSize.y=s.y)),z.map===null||te===!0||I===!0){const le=this.type!==or?{minFilter:zn,magFilter:zn}:{};z.map!==null&&z.map.dispose(),z.map=new Rs(r.x,r.y,le),z.map.texture.name=ee.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const Y=z.getViewportCount();for(let le=0;le<Y;le++){const fe=z.getViewport(le);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),X.viewport(o),z.updateMatrices(ee,le),i=z.getFrustum(),S(R,F,z.camera,ee,this.type)}z.isPointLightShadow!==!0&&this.type===or&&m(z,F),z.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(E,T,V)};function m(A,R){const F=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Rs(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,F,h,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,F,p,y,null)}function x(A,R,F,E){let T=null;const V=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(V!==void 0)T=V;else if(T=F.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const X=T.uuid,te=R.uuid;let I=c[X];I===void 0&&(I={},c[X]=I);let W=I[te];W===void 0&&(W=T.clone(),I[te]=W,R.addEventListener("dispose",L)),T=W}if(T.visible=R.visible,T.wireframe=R.wireframe,E===or?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:f[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const X=t.properties.get(T);X.light=F}return T}function S(A,R,F,E,T){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===or)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const te=e.update(A),I=A.material;if(Array.isArray(I)){const W=te.groups;for(let j=0,ee=W.length;j<ee;j++){const z=W[j],$=I[z.materialIndex];if($&&$.visible){const Y=x(A,$,E,T);A.onBeforeShadow(t,A,R,F,te,Y,z),t.renderBufferDirect(F,null,te,Y,A,z),A.onAfterShadow(t,A,R,F,te,Y,z)}}}else if(I.visible){const W=x(A,I,E,T);A.onBeforeShadow(t,A,R,F,te,W,null),t.renderBufferDirect(F,null,te,W,A,null),A.onAfterShadow(t,A,R,F,te,W,null)}}const X=A.children;for(let te=0,I=X.length;te<I;te++)S(X[te],R,F,E,T)}function L(A){A.target.removeEventListener("dispose",L);for(const F in c){const E=c[F],T=A.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function y2(t,e,n){const i=n.isWebGL2;function r(){let O=!1;const Re=new qt;let Pe=null;const nt=new qt(0,0,0,0);return{setMask:function(Qe){Pe!==Qe&&!O&&(t.colorMask(Qe,Qe,Qe,Qe),Pe=Qe)},setLocked:function(Qe){O=Qe},setClear:function(Qe,Tt,wt,on,xn){xn===!0&&(Qe*=on,Tt*=on,wt*=on),Re.set(Qe,Tt,wt,on),nt.equals(Re)===!1&&(t.clearColor(Qe,Tt,wt,on),nt.copy(Re))},reset:function(){O=!1,Pe=null,nt.set(-1,0,0,0)}}}function s(){let O=!1,Re=null,Pe=null,nt=null;return{setTest:function(Qe){Qe?Je(t.DEPTH_TEST):Xe(t.DEPTH_TEST)},setMask:function(Qe){Re!==Qe&&!O&&(t.depthMask(Qe),Re=Qe)},setFunc:function(Qe){if(Pe!==Qe){switch(Qe){case PM:t.depthFunc(t.NEVER);break;case LM:t.depthFunc(t.ALWAYS);break;case NM:t.depthFunc(t.LESS);break;case iu:t.depthFunc(t.LEQUAL);break;case IM:t.depthFunc(t.EQUAL);break;case DM:t.depthFunc(t.GEQUAL);break;case UM:t.depthFunc(t.GREATER);break;case OM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Pe=Qe}},setLocked:function(Qe){O=Qe},setClear:function(Qe){nt!==Qe&&(t.clearDepth(Qe),nt=Qe)},reset:function(){O=!1,Re=null,Pe=null,nt=null}}}function o(){let O=!1,Re=null,Pe=null,nt=null,Qe=null,Tt=null,wt=null,on=null,xn=null;return{setTest:function(It){O||(It?Je(t.STENCIL_TEST):Xe(t.STENCIL_TEST))},setMask:function(It){Re!==It&&!O&&(t.stencilMask(It),Re=It)},setFunc:function(It,wn,dt){(Pe!==It||nt!==wn||Qe!==dt)&&(t.stencilFunc(It,wn,dt),Pe=It,nt=wn,Qe=dt)},setOp:function(It,wn,dt){(Tt!==It||wt!==wn||on!==dt)&&(t.stencilOp(It,wn,dt),Tt=It,wt=wn,on=dt)},setLocked:function(It){O=It},setClear:function(It){xn!==It&&(t.clearStencil(It),xn=It)},reset:function(){O=!1,Re=null,Pe=null,nt=null,Qe=null,Tt=null,wt=null,on=null,xn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,y=[],g=null,d=!1,m=null,x=null,S=null,L=null,A=null,R=null,F=null,E=new xt(0,0,0),T=0,V=!1,X=null,te=null,I=null,W=null,j=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=$>=2);let le=null,fe={};const Q=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),Ce=new qt().fromArray(Q),Fe=new qt().fromArray(de);function Le(O,Re,Pe,nt){const Qe=new Uint8Array(4),Tt=t.createTexture();t.bindTexture(O,Tt),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let wt=0;wt<Pe;wt++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(Re,0,t.RGBA,1,1,nt,0,t.RGBA,t.UNSIGNED_BYTE,Qe):t.texImage2D(Re+wt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Qe);return Tt}const et={};et[t.TEXTURE_2D]=Le(t.TEXTURE_2D,t.TEXTURE_2D,1),et[t.TEXTURE_CUBE_MAP]=Le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(et[t.TEXTURE_2D_ARRAY]=Le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),et[t.TEXTURE_3D]=Le(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Je(t.DEPTH_TEST),l.setFunc(iu),Ne(!1),C(Hm),Je(t.CULL_FACE),se(jr);function Je(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function Xe(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function He(O,Re){return p[O]!==Re?(t.bindFramebuffer(O,Re),p[O]=Re,i&&(O===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Re),O===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Re)),!0):!1}function D(O,Re){let Pe=y,nt=!1;if(O)if(Pe=v.get(Re),Pe===void 0&&(Pe=[],v.set(Re,Pe)),O.isWebGLMultipleRenderTargets){const Qe=O.texture;if(Pe.length!==Qe.length||Pe[0]!==t.COLOR_ATTACHMENT0){for(let Tt=0,wt=Qe.length;Tt<wt;Tt++)Pe[Tt]=t.COLOR_ATTACHMENT0+Tt;Pe.length=Qe.length,nt=!0}}else Pe[0]!==t.COLOR_ATTACHMENT0&&(Pe[0]=t.COLOR_ATTACHMENT0,nt=!0);else Pe[0]!==t.BACK&&(Pe[0]=t.BACK,nt=!0);nt&&(n.isWebGL2?t.drawBuffers(Pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Pe))}function re(O){return g!==O?(t.useProgram(O),g=O,!0):!1}const oe={[hs]:t.FUNC_ADD,[mM]:t.FUNC_SUBTRACT,[gM]:t.FUNC_REVERSE_SUBTRACT};if(i)oe[jm]=t.MIN,oe[Xm]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(oe[jm]=O.MIN_EXT,oe[Xm]=O.MAX_EXT)}const me={[vM]:t.ZERO,[xM]:t.ONE,[_M]:t.SRC_COLOR,[eh]:t.SRC_ALPHA,[TM]:t.SRC_ALPHA_SATURATE,[wM]:t.DST_COLOR,[SM]:t.DST_ALPHA,[yM]:t.ONE_MINUS_SRC_COLOR,[th]:t.ONE_MINUS_SRC_ALPHA,[EM]:t.ONE_MINUS_DST_COLOR,[MM]:t.ONE_MINUS_DST_ALPHA,[bM]:t.CONSTANT_COLOR,[AM]:t.ONE_MINUS_CONSTANT_COLOR,[CM]:t.CONSTANT_ALPHA,[RM]:t.ONE_MINUS_CONSTANT_ALPHA};function se(O,Re,Pe,nt,Qe,Tt,wt,on,xn,It){if(O===jr){d===!0&&(Xe(t.BLEND),d=!1);return}if(d===!1&&(Je(t.BLEND),d=!0),O!==pM){if(O!==m||It!==V){if((x!==hs||A!==hs)&&(t.blendEquation(t.FUNC_ADD),x=hs,A=hs),It)switch(O){case Lo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vm:t.blendFunc(t.ONE,t.ONE);break;case Gm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Lo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,L=null,R=null,F=null,E.set(0,0,0),T=0,m=O,V=It}return}Qe=Qe||Re,Tt=Tt||Pe,wt=wt||nt,(Re!==x||Qe!==A)&&(t.blendEquationSeparate(oe[Re],oe[Qe]),x=Re,A=Qe),(Pe!==S||nt!==L||Tt!==R||wt!==F)&&(t.blendFuncSeparate(me[Pe],me[nt],me[Tt],me[wt]),S=Pe,L=nt,R=Tt,F=wt),(on.equals(E)===!1||xn!==T)&&(t.blendColor(on.r,on.g,on.b,xn),E.copy(on),T=xn),m=O,V=!1}function qe(O,Re){O.side===si?Xe(t.CULL_FACE):Je(t.CULL_FACE);let Pe=O.side===Vn;Re&&(Pe=!Pe),Ne(Pe),O.blending===Lo&&O.transparent===!1?se(jr):se(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const nt=O.stencilWrite;c.setTest(nt),nt&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),H(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Je(t.SAMPLE_ALPHA_TO_COVERAGE):Xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(O){X!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),X=O)}function C(O){O!==fM?(Je(t.CULL_FACE),O!==te&&(O===Hm?t.cullFace(t.BACK):O===hM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Xe(t.CULL_FACE),te=O}function w(O){O!==I&&(z&&t.lineWidth(O),I=O)}function H(O,Re,Pe){O?(Je(t.POLYGON_OFFSET_FILL),(W!==Re||j!==Pe)&&(t.polygonOffset(Re,Pe),W=Re,j=Pe)):Xe(t.POLYGON_OFFSET_FILL)}function ge(O){O?Je(t.SCISSOR_TEST):Xe(t.SCISSOR_TEST)}function ve(O){O===void 0&&(O=t.TEXTURE0+ee-1),le!==O&&(t.activeTexture(O),le=O)}function he(O,Re,Pe){Pe===void 0&&(le===null?Pe=t.TEXTURE0+ee-1:Pe=le);let nt=fe[Pe];nt===void 0&&(nt={type:void 0,texture:void 0},fe[Pe]=nt),(nt.type!==O||nt.texture!==Re)&&(le!==Pe&&(t.activeTexture(Pe),le=Pe),t.bindTexture(O,Re||et[O]),nt.type=O,nt.texture=Re)}function Ve(){const O=fe[le];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function be(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ke(O){Ce.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Ce.copy(O))}function Et(O){Fe.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Fe.copy(O))}function zt(O,Re){let Pe=f.get(Re);Pe===void 0&&(Pe=new WeakMap,f.set(Re,Pe));let nt=Pe.get(O);nt===void 0&&(nt=t.getUniformBlockIndex(Re,O.name),Pe.set(O,nt))}function ut(O,Re){const nt=f.get(Re).get(O);u.get(Re)!==nt&&(t.uniformBlockBinding(Re,nt,O.__bindingPointIndex),u.set(Re,nt))}function Ee(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},le=null,fe={},p={},v=new WeakMap,y=[],g=null,d=!1,m=null,x=null,S=null,L=null,A=null,R=null,F=null,E=new xt(0,0,0),T=0,V=!1,X=null,te=null,I=null,W=null,j=null,Ce.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Je,disable:Xe,bindFramebuffer:He,drawBuffers:D,useProgram:re,setBlending:se,setMaterial:qe,setFlipSided:Ne,setCullFace:C,setLineWidth:w,setPolygonOffset:H,setScissorTest:ge,activeTexture:ve,bindTexture:he,unbindTexture:Ve,compressedTexImage2D:be,compressedTexImage3D:Oe,texImage2D:je,texImage3D:ke,updateUBOMapping:zt,uniformBlockBinding:ut,texStorage2D:st,texStorage3D:ot,texSubImage2D:De,texSubImage3D:rt,compressedTexSubImage2D:ne,compressedTexSubImage3D:_t,scissor:Ke,viewport:Et,reset:Ee}}function S2(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,w){return p?new OffscreenCanvas(C,w):al("canvas")}function y(C,w,H,ge){let ve=1;if((C.width>ge||C.height>ge)&&(ve=ge/Math.max(C.width,C.height)),ve<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const he=w?cu:Math.floor,Ve=he(ve*C.width),be=he(ve*C.height);f===void 0&&(f=v(Ve,be));const Oe=H?v(Ve,be):f;return Oe.width=Ve,Oe.height=be,Oe.getContext("2d").drawImage(C,0,0,Ve,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ve+"x"+be+")."),Oe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return ah(C.width)&&ah(C.height)}function d(C){return a?!1:C.wrapS!==oi||C.wrapT!==oi||C.minFilter!==zn&&C.minFilter!==Bn}function m(C,w){return C.generateMipmaps&&w&&C.minFilter!==zn&&C.minFilter!==Bn}function x(C){t.generateMipmap(C)}function S(C,w,H,ge,ve=!1){if(a===!1)return w;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he=w;if(w===t.RED&&(H===t.FLOAT&&(he=t.R32F),H===t.HALF_FLOAT&&(he=t.R16F),H===t.UNSIGNED_BYTE&&(he=t.R8)),w===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(he=t.R8UI),H===t.UNSIGNED_SHORT&&(he=t.R16UI),H===t.UNSIGNED_INT&&(he=t.R32UI),H===t.BYTE&&(he=t.R8I),H===t.SHORT&&(he=t.R16I),H===t.INT&&(he=t.R32I)),w===t.RG&&(H===t.FLOAT&&(he=t.RG32F),H===t.HALF_FLOAT&&(he=t.RG16F),H===t.UNSIGNED_BYTE&&(he=t.RG8)),w===t.RGBA){const Ve=ve?su:Ut.getTransfer(ge);H===t.FLOAT&&(he=t.RGBA32F),H===t.HALF_FLOAT&&(he=t.RGBA16F),H===t.UNSIGNED_BYTE&&(he=Ve===Wt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(he=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(he=t.RGB5_A1)}return(he===t.R16F||he===t.R32F||he===t.RG16F||he===t.RG32F||he===t.RGBA16F||he===t.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function L(C,w,H){return m(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==zn&&C.minFilter!==Bn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function A(C){return C===zn||C===$m||C===md?t.NEAREST:t.LINEAR}function R(C){const w=C.target;w.removeEventListener("dispose",R),E(w),w.isVideoTexture&&u.delete(w)}function F(C){const w=C.target;w.removeEventListener("dispose",F),V(w)}function E(C){const w=i.get(C);if(w.__webglInit===void 0)return;const H=C.source,ge=h.get(H);if(ge){const ve=ge[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&T(C),Object.keys(ge).length===0&&h.delete(H)}i.remove(C)}function T(C){const w=i.get(C);t.deleteTexture(w.__webglTexture);const H=C.source,ge=h.get(H);delete ge[w.__cacheKey],o.memory.textures--}function V(C){const w=C.texture,H=i.get(C),ge=i.get(w);if(ge.__webglTexture!==void 0&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(H.__webglFramebuffer[ve]))for(let he=0;he<H.__webglFramebuffer[ve].length;he++)t.deleteFramebuffer(H.__webglFramebuffer[ve][he]);else t.deleteFramebuffer(H.__webglFramebuffer[ve]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ve])}else{if(Array.isArray(H.__webglFramebuffer))for(let ve=0;ve<H.__webglFramebuffer.length;ve++)t.deleteFramebuffer(H.__webglFramebuffer[ve]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ve=0;ve<H.__webglColorRenderbuffer.length;ve++)H.__webglColorRenderbuffer[ve]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ve]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ve=0,he=w.length;ve<he;ve++){const Ve=i.get(w[ve]);Ve.__webglTexture&&(t.deleteTexture(Ve.__webglTexture),o.memory.textures--),i.remove(w[ve])}i.remove(w),i.remove(C)}let X=0;function te(){X=0}function I(){const C=X;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),X+=1,C}function W(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function j(C,w){const H=i.get(C);if(C.isVideoTexture&&qe(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const ge=C.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(H,C,w);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+w)}function ee(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Ce(H,C,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+w)}function z(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Ce(H,C,w);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+w)}function $(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Fe(H,C,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+w)}const Y={[ih]:t.REPEAT,[oi]:t.CLAMP_TO_EDGE,[rh]:t.MIRRORED_REPEAT},le={[zn]:t.NEAREST,[$m]:t.NEAREST_MIPMAP_NEAREST,[md]:t.NEAREST_MIPMAP_LINEAR,[Bn]:t.LINEAR,[WM]:t.LINEAR_MIPMAP_NEAREST,[rl]:t.LINEAR_MIPMAP_LINEAR},fe={[n1]:t.NEVER,[l1]:t.ALWAYS,[i1]:t.LESS,[Zx]:t.LEQUAL,[r1]:t.EQUAL,[a1]:t.GEQUAL,[s1]:t.GREATER,[o1]:t.NOTEQUAL};function Q(C,w,H){if(H?(t.texParameteri(C,t.TEXTURE_WRAP_S,Y[w.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Y[w.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Y[w.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,le[w.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,le[w.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==oi||w.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,A(w.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,A(w.minFilter)),w.minFilter!==zn&&w.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,fe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===zn||w.minFilter!==md&&w.minFilter!==rl||w.type===Ur&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===sl&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(C,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function de(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",R));const ge=w.source;let ve=h.get(ge);ve===void 0&&(ve={},h.set(ge,ve));const he=W(w);if(he!==C.__cacheKey){ve[he]===void 0&&(ve[he]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ve[he].usedTimes++;const Ve=ve[C.__cacheKey];Ve!==void 0&&(ve[C.__cacheKey].usedTimes--,Ve.usedTimes===0&&T(w)),C.__cacheKey=he,C.__webglTexture=ve[he].texture}return H}function Ce(C,w,H){let ge=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ge=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ge=t.TEXTURE_3D);const ve=de(C,w),he=w.source;n.bindTexture(ge,C.__webglTexture,t.TEXTURE0+H);const Ve=i.get(he);if(he.version!==Ve.__version||ve===!0){n.activeTexture(t.TEXTURE0+H);const be=Ut.getPrimaries(Ut.workingColorSpace),Oe=w.colorSpace===xi?null:Ut.getPrimaries(w.colorSpace),De=w.colorSpace===xi||be===Oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const rt=d(w)&&g(w.image)===!1;let ne=y(w.image,rt,!1,r.maxTextureSize);ne=Ne(w,ne);const _t=g(ne)||a,st=s.convert(w.format,w.colorSpace);let ot=s.convert(w.type),je=S(w.internalFormat,st,ot,w.colorSpace,w.isVideoTexture);Q(ge,w,_t);let ke;const Ke=w.mipmaps,Et=a&&w.isVideoTexture!==!0&&je!==$x,zt=Ve.__version===void 0||ve===!0,ut=L(w,ne,_t);if(w.isDepthTexture)je=t.DEPTH_COMPONENT,a?w.type===Ur?je=t.DEPTH_COMPONENT32F:w.type===Dr?je=t.DEPTH_COMPONENT24:w.type===Ss?je=t.DEPTH24_STENCIL8:je=t.DEPTH_COMPONENT16:w.type===Ur&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ms&&je===t.DEPTH_COMPONENT&&w.type!==up&&w.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Dr,ot=s.convert(w.type)),w.format===Vo&&je===t.DEPTH_COMPONENT&&(je=t.DEPTH_STENCIL,w.type!==Ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ss,ot=s.convert(w.type))),zt&&(Et?n.texStorage2D(t.TEXTURE_2D,1,je,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,je,ne.width,ne.height,0,st,ot,null));else if(w.isDataTexture)if(Ke.length>0&&_t){Et&&zt&&n.texStorage2D(t.TEXTURE_2D,ut,je,Ke[0].width,Ke[0].height);for(let Ee=0,O=Ke.length;Ee<O;Ee++)ke=Ke[Ee],Et?n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,ke.width,ke.height,st,ot,ke.data):n.texImage2D(t.TEXTURE_2D,Ee,je,ke.width,ke.height,0,st,ot,ke.data);w.generateMipmaps=!1}else Et?(zt&&n.texStorage2D(t.TEXTURE_2D,ut,je,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,st,ot,ne.data)):n.texImage2D(t.TEXTURE_2D,0,je,ne.width,ne.height,0,st,ot,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Et&&zt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ut,je,Ke[0].width,Ke[0].height,ne.depth);for(let Ee=0,O=Ke.length;Ee<O;Ee++)ke=Ke[Ee],w.format!==Ni?st!==null?Et?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,0,ke.width,ke.height,ne.depth,st,ke.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Ee,je,ke.width,ke.height,ne.depth,0,ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,0,ke.width,ke.height,ne.depth,st,ot,ke.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Ee,je,ke.width,ke.height,ne.depth,0,st,ot,ke.data)}else{Et&&zt&&n.texStorage2D(t.TEXTURE_2D,ut,je,Ke[0].width,Ke[0].height);for(let Ee=0,O=Ke.length;Ee<O;Ee++)ke=Ke[Ee],w.format!==Ni?st!==null?Et?n.compressedTexSubImage2D(t.TEXTURE_2D,Ee,0,0,ke.width,ke.height,st,ke.data):n.compressedTexImage2D(t.TEXTURE_2D,Ee,je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,ke.width,ke.height,st,ot,ke.data):n.texImage2D(t.TEXTURE_2D,Ee,je,ke.width,ke.height,0,st,ot,ke.data)}else if(w.isDataArrayTexture)Et?(zt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ut,je,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,st,ot,ne.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,je,ne.width,ne.height,ne.depth,0,st,ot,ne.data);else if(w.isData3DTexture)Et?(zt&&n.texStorage3D(t.TEXTURE_3D,ut,je,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,st,ot,ne.data)):n.texImage3D(t.TEXTURE_3D,0,je,ne.width,ne.height,ne.depth,0,st,ot,ne.data);else if(w.isFramebufferTexture){if(zt)if(Et)n.texStorage2D(t.TEXTURE_2D,ut,je,ne.width,ne.height);else{let Ee=ne.width,O=ne.height;for(let Re=0;Re<ut;Re++)n.texImage2D(t.TEXTURE_2D,Re,je,Ee,O,0,st,ot,null),Ee>>=1,O>>=1}}else if(Ke.length>0&&_t){Et&&zt&&n.texStorage2D(t.TEXTURE_2D,ut,je,Ke[0].width,Ke[0].height);for(let Ee=0,O=Ke.length;Ee<O;Ee++)ke=Ke[Ee],Et?n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,st,ot,ke):n.texImage2D(t.TEXTURE_2D,Ee,je,st,ot,ke);w.generateMipmaps=!1}else Et?(zt&&n.texStorage2D(t.TEXTURE_2D,ut,je,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,st,ot,ne)):n.texImage2D(t.TEXTURE_2D,0,je,st,ot,ne);m(w,_t)&&x(ge),Ve.__version=he.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Fe(C,w,H){if(w.image.length!==6)return;const ge=de(C,w),ve=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const he=i.get(ve);if(ve.version!==he.__version||ge===!0){n.activeTexture(t.TEXTURE0+H);const Ve=Ut.getPrimaries(Ut.workingColorSpace),be=w.colorSpace===xi?null:Ut.getPrimaries(w.colorSpace),Oe=w.colorSpace===xi||Ve===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const De=w.isCompressedTexture||w.image[0].isCompressedTexture,rt=w.image[0]&&w.image[0].isDataTexture,ne=[];for(let Ee=0;Ee<6;Ee++)!De&&!rt?ne[Ee]=y(w.image[Ee],!1,!0,r.maxCubemapSize):ne[Ee]=rt?w.image[Ee].image:w.image[Ee],ne[Ee]=Ne(w,ne[Ee]);const _t=ne[0],st=g(_t)||a,ot=s.convert(w.format,w.colorSpace),je=s.convert(w.type),ke=S(w.internalFormat,ot,je,w.colorSpace),Ke=a&&w.isVideoTexture!==!0,Et=he.__version===void 0||ge===!0;let zt=L(w,_t,st);Q(t.TEXTURE_CUBE_MAP,w,st);let ut;if(De){Ke&&Et&&n.texStorage2D(t.TEXTURE_CUBE_MAP,zt,ke,_t.width,_t.height);for(let Ee=0;Ee<6;Ee++){ut=ne[Ee].mipmaps;for(let O=0;O<ut.length;O++){const Re=ut[O];w.format!==Ni?ot!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,O,0,0,Re.width,Re.height,ot,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,O,ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,O,0,0,Re.width,Re.height,ot,je,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,O,ke,Re.width,Re.height,0,ot,je,Re.data)}}}else{ut=w.mipmaps,Ke&&Et&&(ut.length>0&&zt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,zt,ke,ne[0].width,ne[0].height));for(let Ee=0;Ee<6;Ee++)if(rt){Ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ne[Ee].width,ne[Ee].height,ot,je,ne[Ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ke,ne[Ee].width,ne[Ee].height,0,ot,je,ne[Ee].data);for(let O=0;O<ut.length;O++){const Pe=ut[O].image[Ee].image;Ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,O+1,0,0,Pe.width,Pe.height,ot,je,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,O+1,ke,Pe.width,Pe.height,0,ot,je,Pe.data)}}else{Ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ot,je,ne[Ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ke,ot,je,ne[Ee]);for(let O=0;O<ut.length;O++){const Re=ut[O];Ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,O+1,0,0,ot,je,Re.image[Ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,O+1,ke,ot,je,Re.image[Ee])}}}m(w,st)&&x(t.TEXTURE_CUBE_MAP),he.__version=ve.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Le(C,w,H,ge,ve,he){const Ve=s.convert(H.format,H.colorSpace),be=s.convert(H.type),Oe=S(H.internalFormat,Ve,be,H.colorSpace);if(!i.get(w).__hasExternalTextures){const rt=Math.max(1,w.width>>he),ne=Math.max(1,w.height>>he);ve===t.TEXTURE_3D||ve===t.TEXTURE_2D_ARRAY?n.texImage3D(ve,he,Oe,rt,ne,w.depth,0,Ve,be,null):n.texImage2D(ve,he,Oe,rt,ne,0,Ve,be,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),se(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ge,ve,i.get(H).__webglTexture,0,me(w)):(ve===t.TEXTURE_2D||ve>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ge,ve,i.get(H).__webglTexture,he),n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(C,w,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let ge=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||se(w)){const ve=w.depthTexture;ve&&ve.isDepthTexture&&(ve.type===Ur?ge=t.DEPTH_COMPONENT32F:ve.type===Dr&&(ge=t.DEPTH_COMPONENT24));const he=me(w);se(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,ge,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ge,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,ge,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){const ge=me(w);H&&se(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,t.DEPTH24_STENCIL8,w.width,w.height):se(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ge=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ve=0;ve<ge.length;ve++){const he=ge[ve],Ve=s.convert(he.format,he.colorSpace),be=s.convert(he.type),Oe=S(he.internalFormat,Ve,be,he.colorSpace),De=me(w);H&&se(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,Oe,w.width,w.height):se(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,Oe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Oe,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Je(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const ge=i.get(w.depthTexture).__webglTexture,ve=me(w);if(w.depthTexture.format===Ms)se(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ge,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ge,0);else if(w.depthTexture.format===Vo)se(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ge,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Xe(C){const w=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Je(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ge]),w.__webglDepthbuffer[ge]=t.createRenderbuffer(),et(w.__webglDepthbuffer[ge],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),et(w.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(C,w,H){const ge=i.get(C);w!==void 0&&Le(ge.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Xe(C)}function D(C){const w=C.texture,H=i.get(C),ge=i.get(w);C.addEventListener("dispose",F),C.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture()),ge.__version=w.version,o.memory.textures++);const ve=C.isWebGLCubeRenderTarget===!0,he=C.isWebGLMultipleRenderTargets===!0,Ve=g(C)||a;if(ve){H.__webglFramebuffer=[];for(let be=0;be<6;be++)if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[be]=[];for(let Oe=0;Oe<w.mipmaps.length;Oe++)H.__webglFramebuffer[be][Oe]=t.createFramebuffer()}else H.__webglFramebuffer[be]=t.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)H.__webglFramebuffer[be]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(he)if(r.drawBuffers){const be=C.texture;for(let Oe=0,De=be.length;Oe<De;Oe++){const rt=i.get(be[Oe]);rt.__webglTexture===void 0&&(rt.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&se(C)===!1){const be=he?w:[w];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Oe=0;Oe<be.length;Oe++){const De=be[Oe];H.__webglColorRenderbuffer[Oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[Oe]);const rt=s.convert(De.format,De.colorSpace),ne=s.convert(De.type),_t=S(De.internalFormat,rt,ne,De.colorSpace,C.isXRRenderTarget===!0),st=me(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,st,_t,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,H.__webglColorRenderbuffer[Oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),et(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ve){n.bindTexture(t.TEXTURE_CUBE_MAP,ge.__webglTexture),Q(t.TEXTURE_CUBE_MAP,w,Ve);for(let be=0;be<6;be++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)Le(H.__webglFramebuffer[be][Oe],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe);else Le(H.__webglFramebuffer[be],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(w,Ve)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){const be=C.texture;for(let Oe=0,De=be.length;Oe<De;Oe++){const rt=be[Oe],ne=i.get(rt);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),Q(t.TEXTURE_2D,rt,Ve),Le(H.__webglFramebuffer,C,rt,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,0),m(rt,Ve)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let be=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?be=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(be,ge.__webglTexture),Q(be,w,Ve),a&&w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)Le(H.__webglFramebuffer[Oe],C,w,t.COLOR_ATTACHMENT0,be,Oe);else Le(H.__webglFramebuffer,C,w,t.COLOR_ATTACHMENT0,be,0);m(w,Ve)&&x(be),n.unbindTexture()}C.depthBuffer&&Xe(C)}function re(C){const w=g(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ge=0,ve=H.length;ge<ve;ge++){const he=H[ge];if(m(he,w)){const Ve=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(he).__webglTexture;n.bindTexture(Ve,be),x(Ve),n.unbindTexture()}}}function oe(C){if(a&&C.samples>0&&se(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,ge=C.height;let ve=t.COLOR_BUFFER_BIT;const he=[],Ve=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(C),Oe=C.isWebGLMultipleRenderTargets===!0;if(Oe)for(let De=0;De<w.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let De=0;De<w.length;De++){he.push(t.COLOR_ATTACHMENT0+De),C.depthBuffer&&he.push(Ve);const rt=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(rt===!1&&(C.depthBuffer&&(ve|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ve|=t.STENCIL_BUFFER_BIT)),Oe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[De]),rt===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ve])),Oe){const ne=i.get(w[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,H,ge,0,0,H,ge,ve,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,he)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Oe)for(let De=0;De<w.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,be.__webglColorRenderbuffer[De]);const rt=i.get(w[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,rt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function me(C){return Math.min(r.maxSamples,C.samples)}function se(C){const w=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qe(C){const w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function Ne(C,w){const H=C.colorSpace,ge=C.format,ve=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===oh||H!==vr&&H!==xi&&(Ut.getTransfer(H)===Wt?a===!1?e.has("EXT_sRGB")===!0&&ge===Ni?(C.format=oh,C.minFilter=Bn,C.generateMipmaps=!1):w=Jx.sRGBToLinear(w):(ge!==Ni||ve!==$r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}this.allocateTextureUnit=I,this.resetTextureUnits=te,this.setTexture2D=j,this.setTexture2DArray=ee,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=He,this.setupRenderTarget=D,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=se}function M2(t,e,n){const i=n.isWebGL2;function r(s,o=xi){let a;const l=Ut.getTransfer(o);if(s===$r)return t.UNSIGNED_BYTE;if(s===Vx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Gx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===jM)return t.BYTE;if(s===XM)return t.SHORT;if(s===up)return t.UNSIGNED_SHORT;if(s===Hx)return t.INT;if(s===Dr)return t.UNSIGNED_INT;if(s===Ur)return t.FLOAT;if(s===sl)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===$M)return t.ALPHA;if(s===Ni)return t.RGBA;if(s===YM)return t.LUMINANCE;if(s===qM)return t.LUMINANCE_ALPHA;if(s===Ms)return t.DEPTH_COMPONENT;if(s===Vo)return t.DEPTH_STENCIL;if(s===oh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ZM)return t.RED;if(s===Wx)return t.RED_INTEGER;if(s===KM)return t.RG;if(s===jx)return t.RG_INTEGER;if(s===Xx)return t.RGBA_INTEGER;if(s===gd||s===vd||s===xd||s===_d)if(l===Wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===gd)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_d)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===gd)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_d)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ym||s===qm||s===Zm||s===Km)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ym)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Km)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$x)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jm||s===Qm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jm)return l===Wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Qm)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===eg||s===tg||s===ng||s===ig||s===rg||s===sg||s===og||s===ag||s===lg||s===cg||s===ug||s===dg||s===fg||s===hg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===eg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ng)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ig)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===og)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ag)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ug)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yd||s===pg||s===mg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===yd)return l===Wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===JM||s===gg||s===vg||s===xg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===yd)return a.COMPRESSED_RED_RGTC1_EXT;if(s===gg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ss?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class w2 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Or extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E2={type:"move"};class Gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),d=this._getHandJoint(c,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Or;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class T2 extends $o{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const y=n.getContextAttributes();let g=null,d=null;const m=[],x=[],S=new Se;let L=null;const A=new Zn;A.layers.enable(1),A.viewport=new qt;const R=new Zn;R.layers.enable(2),R.viewport=new qt;const F=[A,R],E=new w2;E.layers.enable(1),E.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=m[Q];return de===void 0&&(de=new Gd,m[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=m[Q];return de===void 0&&(de=new Gd,m[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=m[Q];return de===void 0&&(de=new Gd,m[Q]=de),de.getHandSpace()};function X(Q){const de=x.indexOf(Q.inputSource);if(de===-1)return;const Ce=m[de];Ce!==void 0&&(Ce.update(Q.inputSource,Q.frame,c||o),Ce.dispatchEvent({type:Q.type,data:Q.inputSource}))}function te(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",I);for(let Q=0;Q<m.length;Q++){const de=x[Q];de!==null&&(x[Q]=null,m[Q].disconnect(de))}T=null,V=null,e.setRenderTarget(g),p=null,h=null,f=null,r=null,d=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",te),r.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Rs(p.framebufferWidth,p.framebufferHeight,{format:Ni,type:$r,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let de=null,Ce=null,Fe=null;y.depth&&(Fe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=y.stencil?Vo:Ms,Ce=y.stencil?Ss:Dr);const Le={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Rs(h.textureWidth,h.textureHeight,{format:Ni,type:$r,depthTexture:new u_(h.textureWidth,h.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const et=e.properties.get(d);et.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(Q){for(let de=0;de<Q.removed.length;de++){const Ce=Q.removed[de],Fe=x.indexOf(Ce);Fe>=0&&(x[Fe]=null,m[Fe].disconnect(Ce))}for(let de=0;de<Q.added.length;de++){const Ce=Q.added[de];let Fe=x.indexOf(Ce);if(Fe===-1){for(let et=0;et<m.length;et++)if(et>=x.length){x.push(Ce),Fe=et;break}else if(x[et]===null){x[et]=Ce,Fe=et;break}if(Fe===-1)break}const Le=m[Fe];Le&&Le.connect(Ce)}}const W=new U,j=new U;function ee(Q,de,Ce){W.setFromMatrixPosition(de.matrixWorld),j.setFromMatrixPosition(Ce.matrixWorld);const Fe=W.distanceTo(j),Le=de.projectionMatrix.elements,et=Ce.projectionMatrix.elements,Je=Le[14]/(Le[10]-1),Xe=Le[14]/(Le[10]+1),He=(Le[9]+1)/Le[5],D=(Le[9]-1)/Le[5],re=(Le[8]-1)/Le[0],oe=(et[8]+1)/et[0],me=Je*re,se=Je*oe,qe=Fe/(-re+oe),Ne=qe*-re;de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ne),Q.translateZ(qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const C=Je+qe,w=Xe+qe,H=me-Ne,ge=se+(Fe-Ne),ve=He*Xe/w*C,he=D*Xe/w*C;Q.projectionMatrix.makePerspective(H,ge,ve,he,C,w),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function z(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;E.near=R.near=A.near=Q.near,E.far=R.far=A.far=Q.far,(T!==E.near||V!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,V=E.far);const de=Q.parent,Ce=E.cameras;z(E,de);for(let Fe=0;Fe<Ce.length;Fe++)z(Ce[Fe],de);Ce.length===2?ee(E,A,R):E.projectionMatrix.copy(A.projectionMatrix),$(Q,E,de)};function $(Q,de,Ce){Ce===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Ce.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ol*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)};let Y=null;function le(Q,de){if(u=de.getViewerPose(c||o),v=de,u!==null){const Ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Fe=!1;Ce.length!==E.cameras.length&&(E.cameras.length=0,Fe=!0);for(let Le=0;Le<Ce.length;Le++){const et=Ce[Le];let Je=null;if(p!==null)Je=p.getViewport(et);else{const He=f.getViewSubImage(h,et);Je=He.viewport,Le===0&&(e.setRenderTargetTextures(d,He.colorTexture,h.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(d))}let Xe=F[Le];Xe===void 0&&(Xe=new Zn,Xe.layers.enable(Le),Xe.viewport=new qt,F[Le]=Xe),Xe.matrix.fromArray(et.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(et.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Je.x,Je.y,Je.width,Je.height),Le===0&&(E.matrix.copy(Xe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Fe===!0&&E.cameras.push(Xe)}}for(let Ce=0;Ce<m.length;Ce++){const Fe=x[Ce],Le=m[Ce];Fe!==null&&Le!==void 0&&Le.update(Fe,de,c||o)}Y&&Y(Q,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}const fe=new c_;fe.setAnimationLoop(le),this.setAnimationLoop=function(Q){Y=Q},this.dispose=function(){}}}function b2(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,o_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,m,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),y(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,m,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Vn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Vn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const m=e.get(d).envMap;if(m&&(g.envMap.value=m,g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const x=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*x,n(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=x*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,m){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vn&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){const m=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function A2(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,x){const S=x.program;i.uniformBlockBinding(m,S)}function c(m,x){let S=r[m.id];S===void 0&&(v(m),S=u(m),r[m.id]=S,m.addEventListener("dispose",g));const L=x.program;i.updateUBOMapping(m,L);const A=e.render.frame;s[m.id]!==A&&(h(m),s[m.id]=A)}function u(m){const x=f();m.__bindingPointIndex=x;const S=t.createBuffer(),L=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,L,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const x=r[m.id],S=m.uniforms,L=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,R=S.length;A<R;A++){const F=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,T=F.length;E<T;E++){const V=F[E];if(p(V,A,E,L)===!0){const X=V.__offset,te=Array.isArray(V.value)?V.value:[V.value];let I=0;for(let W=0;W<te.length;W++){const j=te[W],ee=y(j);typeof j=="number"||typeof j=="boolean"?(V.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,X+I,V.__data)):j.isMatrix3?(V.__data[0]=j.elements[0],V.__data[1]=j.elements[1],V.__data[2]=j.elements[2],V.__data[3]=0,V.__data[4]=j.elements[3],V.__data[5]=j.elements[4],V.__data[6]=j.elements[5],V.__data[7]=0,V.__data[8]=j.elements[6],V.__data[9]=j.elements[7],V.__data[10]=j.elements[8],V.__data[11]=0):(j.toArray(V.__data,I),I+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,V.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,x,S,L){const A=m.value,R=x+"_"+S;if(L[R]===void 0)return typeof A=="number"||typeof A=="boolean"?L[R]=A:L[R]=A.clone(),!0;{const F=L[R];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return L[R]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function v(m){const x=m.uniforms;let S=0;const L=16;for(let R=0,F=x.length;R<F;R++){const E=Array.isArray(x[R])?x[R]:[x[R]];for(let T=0,V=E.length;T<V;T++){const X=E[T],te=Array.isArray(X.value)?X.value:[X.value];for(let I=0,W=te.length;I<W;I++){const j=te[I],ee=y(j),z=S%L;z!==0&&L-z<ee.boundary&&(S+=L-z),X.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=ee.storage}}}const A=S%L;return A>0&&(S+=L-A),m.__size=S,m.__cache={},this}function y(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){const x=m.target;x.removeEventListener("dispose",g);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Lc{constructor(e={}){const{canvas:n=w1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,g=null;const d=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this._useLegacyLights=!1,this.toneMapping=Xr,this.toneMappingExposure=1;const x=this;let S=!1,L=0,A=0,R=null,F=-1,E=null;const T=new qt,V=new qt;let X=null;const te=new xt(0);let I=0,W=n.width,j=n.height,ee=1,z=null,$=null;const Y=new qt(0,0,W,j),le=new qt(0,0,W,j);let fe=!1;const Q=new hp;let de=!1,Ce=!1,Fe=null;const Le=new tn,et=new Se,Je=new U,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return R===null?ee:1}let D=i;function re(P,G){for(let Z=0;Z<P.length;Z++){const K=P[Z],q=n.getContext(K,G);if(q!==null)return q}return null}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lp}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",O,!1),n.addEventListener("webglcontextcreationerror",Re,!1),D===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),D=re(G,P),D===null)throw re(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let oe,me,se,qe,Ne,C,w,H,ge,ve,he,Ve,be,Oe,De,rt,ne,_t,st,ot,je,ke,Ke,Et;function zt(){oe=new FT(D),me=new LT(D,oe,e),oe.init(me),ke=new M2(D,oe,me),se=new y2(D,oe,me),qe=new BT(D),Ne=new o2,C=new S2(D,oe,se,Ne,me,ke,qe),w=new IT(x),H=new OT(x),ge=new Y1(D,me),Ke=new RT(D,oe,ge,me),ve=new kT(D,ge,qe,Ke),he=new WT(D,ve,ge,qe),st=new GT(D,me,C),rt=new NT(Ne),Ve=new s2(x,w,H,oe,me,Ke,rt),be=new b2(x,Ne),Oe=new l2,De=new p2(oe,me),_t=new CT(x,w,H,se,he,h,l),ne=new _2(x,he,me),Et=new A2(D,qe,me,se),ot=new PT(D,oe,qe,me),je=new zT(D,oe,qe,me),qe.programs=Ve.programs,x.capabilities=me,x.extensions=oe,x.properties=Ne,x.renderLists=Oe,x.shadowMap=ne,x.state=se,x.info=qe}zt();const ut=new T2(x,D);this.xr=ut,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const P=oe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=oe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(P){P!==void 0&&(ee=P,this.setSize(W,j,!1))},this.getSize=function(P){return P.set(W,j)},this.setSize=function(P,G,Z=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=P,j=G,n.width=Math.floor(P*ee),n.height=Math.floor(G*ee),Z===!0&&(n.style.width=P+"px",n.style.height=G+"px"),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(W*ee,j*ee).floor()},this.setDrawingBufferSize=function(P,G,Z){W=P,j=G,ee=Z,n.width=Math.floor(P*Z),n.height=Math.floor(G*Z),this.setViewport(0,0,P,G)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(Y)},this.setViewport=function(P,G,Z,K){P.isVector4?Y.set(P.x,P.y,P.z,P.w):Y.set(P,G,Z,K),se.viewport(T.copy(Y).multiplyScalar(ee).floor())},this.getScissor=function(P){return P.copy(le)},this.setScissor=function(P,G,Z,K){P.isVector4?le.set(P.x,P.y,P.z,P.w):le.set(P,G,Z,K),se.scissor(V.copy(le).multiplyScalar(ee).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(P){se.setScissorTest(fe=P)},this.setOpaqueSort=function(P){z=P},this.setTransparentSort=function(P){$=P},this.getClearColor=function(P){return P.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(P=!0,G=!0,Z=!0){let K=0;if(P){let q=!1;if(R!==null){const Ue=R.texture.format;q=Ue===Xx||Ue===jx||Ue===Wx}if(q){const Ue=R.texture.type,Ze=Ue===$r||Ue===Dr||Ue===up||Ue===Ss||Ue===Vx||Ue===Gx,tt=_t.getClearColor(),at=_t.getClearAlpha(),ht=tt.r,lt=tt.g,ft=tt.b;Ze?(p[0]=ht,p[1]=lt,p[2]=ft,p[3]=at,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=ht,v[1]=lt,v[2]=ft,v[3]=at,D.clearBufferiv(D.COLOR,0,v))}else K|=D.COLOR_BUFFER_BIT}G&&(K|=D.DEPTH_BUFFER_BIT),Z&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",O,!1),n.removeEventListener("webglcontextcreationerror",Re,!1),Oe.dispose(),De.dispose(),Ne.dispose(),w.dispose(),H.dispose(),he.dispose(),Ke.dispose(),Et.dispose(),Ve.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",xn),ut.removeEventListener("sessionend",It),Fe&&(Fe.dispose(),Fe=null),wn.stop()};function Ee(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=qe.autoReset,G=ne.enabled,Z=ne.autoUpdate,K=ne.needsUpdate,q=ne.type;zt(),qe.autoReset=P,ne.enabled=G,ne.autoUpdate=Z,ne.needsUpdate=K,ne.type=q}function Re(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Pe(P){const G=P.target;G.removeEventListener("dispose",Pe),nt(G)}function nt(P){Qe(P),Ne.remove(P)}function Qe(P){const G=Ne.get(P).programs;G!==void 0&&(G.forEach(function(Z){Ve.releaseProgram(Z)}),P.isShaderMaterial&&Ve.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,Z,K,q,Ue){G===null&&(G=Xe);const Ze=q.isMesh&&q.matrixWorld.determinant()<0,tt=Uu(P,G,Z,K,q);se.setMaterial(K,Ze);let at=Z.index,ht=1;if(K.wireframe===!0){if(at=ve.getWireframeAttribute(Z),at===void 0)return;ht=2}const lt=Z.drawRange,ft=Z.attributes.position;let Zt=lt.start*ht,Un=(lt.start+lt.count)*ht;Ue!==null&&(Zt=Math.max(Zt,Ue.start*ht),Un=Math.min(Un,(Ue.start+Ue.count)*ht)),at!==null?(Zt=Math.max(Zt,0),Un=Math.min(Un,at.count)):ft!=null&&(Zt=Math.max(Zt,0),Un=Math.min(Un,ft.count));const an=Un-Zt;if(an<0||an===1/0)return;Ke.setup(q,K,tt,Z,at);let ti,Vt=ot;if(at!==null&&(ti=ge.get(at),Vt=je,Vt.setIndex(ti)),q.isMesh)K.wireframe===!0?(se.setLineWidth(K.wireframeLinewidth*He()),Vt.setMode(D.LINES)):Vt.setMode(D.TRIANGLES);else if(q.isLine){let pt=K.linewidth;pt===void 0&&(pt=1),se.setLineWidth(pt*He()),q.isLineSegments?Vt.setMode(D.LINES):q.isLineLoop?Vt.setMode(D.LINE_LOOP):Vt.setMode(D.LINE_STRIP)}else q.isPoints?Vt.setMode(D.POINTS):q.isSprite&&Vt.setMode(D.TRIANGLES);if(q.isBatchedMesh)Vt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Vt.renderInstances(Zt,an,q.count);else if(Z.isInstancedBufferGeometry){const pt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ko=Math.min(Z.instanceCount,pt);Vt.renderInstances(Zt,an,Ko)}else Vt.render(Zt,an)};function Tt(P,G,Z){P.transparent===!0&&P.side===si&&P.forceSinglePass===!1?(P.side=Vn,P.needsUpdate=!0,Fs(P,G,Z),P.side=Kr,P.needsUpdate=!0,Fs(P,G,Z),P.side=si):Fs(P,G,Z)}this.compile=function(P,G,Z=null){Z===null&&(Z=P),g=De.get(Z),g.init(),m.push(g),Z.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),P!==Z&&P.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights(x._useLegacyLights);const K=new Set;return P.traverse(function(q){const Ue=q.material;if(Ue)if(Array.isArray(Ue))for(let Ze=0;Ze<Ue.length;Ze++){const tt=Ue[Ze];Tt(tt,Z,q),K.add(tt)}else Tt(Ue,Z,q),K.add(Ue)}),m.pop(),g=null,K},this.compileAsync=function(P,G,Z=null){const K=this.compile(P,G,Z);return new Promise(q=>{function Ue(){if(K.forEach(function(Ze){Ne.get(Ze).currentProgram.isReady()&&K.delete(Ze)}),K.size===0){q(P);return}setTimeout(Ue,10)}oe.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let wt=null;function on(P){wt&&wt(P)}function xn(){wn.stop()}function It(){wn.start()}const wn=new c_;wn.setAnimationLoop(on),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(P){wt=P,ut.setAnimationLoop(P),P===null?wn.stop():wn.start()},ut.addEventListener("sessionstart",xn),ut.addEventListener("sessionend",It),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(G),G=ut.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,G,R),g=De.get(P,m.length),g.init(),m.push(g),Le.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Q.setFromProjectionMatrix(Le),Ce=this.localClippingEnabled,de=rt.init(this.clippingPlanes,Ce),y=Oe.get(P,d.length),y.init(),d.push(y),dt(P,G,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(z,$),this.info.render.frame++,de===!0&&rt.beginShadows();const Z=g.state.shadowsArray;if(ne.render(Z,P,G),de===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),_t.render(y,P),g.setupLights(x._useLegacyLights),G.isArrayCamera){const K=G.cameras;for(let q=0,Ue=K.length;q<Ue;q++){const Ze=K[q];Os(y,P,Ze,Ze.viewport)}}else Os(y,P,G);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(x,P,G),Ke.resetDefaultState(),F=-1,E=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function dt(P,G,Z,K){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)Z=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Q.intersectsSprite(P)){K&&Je.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Le);const Ze=he.update(P),tt=P.material;tt.visible&&y.push(P,Ze,tt,Z,Je.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Q.intersectsObject(P))){const Ze=he.update(P),tt=P.material;if(K&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Je.copy(P.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),Je.copy(Ze.boundingSphere.center)),Je.applyMatrix4(P.matrixWorld).applyMatrix4(Le)),Array.isArray(tt)){const at=Ze.groups;for(let ht=0,lt=at.length;ht<lt;ht++){const ft=at[ht],Zt=tt[ft.materialIndex];Zt&&Zt.visible&&y.push(P,Ze,Zt,Z,Je.z,ft)}}else tt.visible&&y.push(P,Ze,tt,Z,Je.z,null)}}const Ue=P.children;for(let Ze=0,tt=Ue.length;Ze<tt;Ze++)dt(Ue[Ze],G,Z,K)}function Os(P,G,Z,K){const q=P.opaque,Ue=P.transmissive,Ze=P.transparent;g.setupLightsView(Z),de===!0&&rt.setGlobalState(x.clippingPlanes,Z),Ue.length>0&&Du(q,Ue,G,Z),K&&se.viewport(T.copy(K)),q.length>0&&Oi(q,G,Z),Ue.length>0&&Oi(Ue,G,Z),Ze.length>0&&Oi(Ze,G,Z),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Du(P,G,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Ue=me.isWebGL2;Fe===null&&(Fe=new Rs(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?sl:$r,minFilter:rl,samples:Ue?4:0})),x.getDrawingBufferSize(et),Ue?Fe.setSize(et.x,et.y):Fe.setSize(cu(et.x),cu(et.y));const Ze=x.getRenderTarget();x.setRenderTarget(Fe),x.getClearColor(te),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const tt=x.toneMapping;x.toneMapping=Xr,Oi(P,Z,K),C.updateMultisampleRenderTarget(Fe),C.updateRenderTargetMipmap(Fe);let at=!1;for(let ht=0,lt=G.length;ht<lt;ht++){const ft=G[ht],Zt=ft.object,Un=ft.geometry,an=ft.material,ti=ft.group;if(an.side===si&&Zt.layers.test(K.layers)){const Vt=an.side;an.side=Vn,an.needsUpdate=!0,qo(Zt,Z,K,Un,an,ti),an.side=Vt,an.needsUpdate=!0,at=!0}}at===!0&&(C.updateMultisampleRenderTarget(Fe),C.updateRenderTargetMipmap(Fe)),x.setRenderTarget(Ze),x.setClearColor(te,I),x.toneMapping=tt}function Oi(P,G,Z){const K=G.isScene===!0?G.overrideMaterial:null;for(let q=0,Ue=P.length;q<Ue;q++){const Ze=P[q],tt=Ze.object,at=Ze.geometry,ht=K===null?Ze.material:K,lt=Ze.group;tt.layers.test(Z.layers)&&qo(tt,G,Z,at,ht,lt)}}function qo(P,G,Z,K,q,Ue){P.onBeforeRender(x,G,Z,K,q,Ue),P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(x,G,Z,K,P,Ue),q.transparent===!0&&q.side===si&&q.forceSinglePass===!1?(q.side=Vn,q.needsUpdate=!0,x.renderBufferDirect(Z,G,K,q,P,Ue),q.side=Kr,q.needsUpdate=!0,x.renderBufferDirect(Z,G,K,q,P,Ue),q.side=si):x.renderBufferDirect(Z,G,K,q,P,Ue),P.onAfterRender(x,G,Z,K,q,Ue)}function Fs(P,G,Z){G.isScene!==!0&&(G=Xe);const K=Ne.get(P),q=g.state.lights,Ue=g.state.shadowsArray,Ze=q.state.version,tt=Ve.getParameters(P,q.state,Ue,G,Z),at=Ve.getProgramCacheKey(tt);let ht=K.programs;K.environment=P.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(P.isMeshStandardMaterial?H:w).get(P.envMap||K.environment),ht===void 0&&(P.addEventListener("dispose",Pe),ht=new Map,K.programs=ht);let lt=ht.get(at);if(lt!==void 0){if(K.currentProgram===lt&&K.lightsStateVersion===Ze)return _l(P,tt),lt}else tt.uniforms=Ve.getUniforms(P),P.onBuild(Z,tt,x),P.onBeforeCompile(tt,x),lt=Ve.acquireProgram(tt,at),ht.set(at,lt),K.uniforms=tt.uniforms;const ft=K.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ft.clippingPlanes=rt.uniform),_l(P,tt),K.needsLights=yl(P),K.lightsStateVersion=Ze,K.needsLights&&(ft.ambientLightColor.value=q.state.ambient,ft.lightProbe.value=q.state.probe,ft.directionalLights.value=q.state.directional,ft.directionalLightShadows.value=q.state.directionalShadow,ft.spotLights.value=q.state.spot,ft.spotLightShadows.value=q.state.spotShadow,ft.rectAreaLights.value=q.state.rectArea,ft.ltc_1.value=q.state.rectAreaLTC1,ft.ltc_2.value=q.state.rectAreaLTC2,ft.pointLights.value=q.state.point,ft.pointLightShadows.value=q.state.pointShadow,ft.hemisphereLights.value=q.state.hemi,ft.directionalShadowMap.value=q.state.directionalShadowMap,ft.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ft.spotShadowMap.value=q.state.spotShadowMap,ft.spotLightMatrix.value=q.state.spotLightMatrix,ft.spotLightMap.value=q.state.spotLightMap,ft.pointShadowMap.value=q.state.pointShadowMap,ft.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=lt,K.uniformsList=null,lt}function Zo(P){if(P.uniformsList===null){const G=P.currentProgram.getUniforms();P.uniformsList=Pc.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function _l(P,G){const Z=Ne.get(P);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Uu(P,G,Z,K,q){G.isScene!==!0&&(G=Xe),C.resetTextureUnits();const Ue=G.fog,Ze=K.isMeshStandardMaterial?G.environment:null,tt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:vr,at=(K.isMeshStandardMaterial?H:w).get(K.envMap||Ze),ht=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,lt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ft=!!Z.morphAttributes.position,Zt=!!Z.morphAttributes.normal,Un=!!Z.morphAttributes.color;let an=Xr;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(an=x.toneMapping);const ti=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Vt=ti!==void 0?ti.length:0,pt=Ne.get(K),Ko=g.state.lights;if(de===!0&&(Ce===!0||P!==E)){const Xn=P===E&&K.id===F;rt.setState(K,P,Xn)}let Xt=!1;K.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Ko.state.version||pt.outputColorSpace!==tt||q.isBatchedMesh&&pt.batching===!1||!q.isBatchedMesh&&pt.batching===!0||q.isInstancedMesh&&pt.instancing===!1||!q.isInstancedMesh&&pt.instancing===!0||q.isSkinnedMesh&&pt.skinning===!1||!q.isSkinnedMesh&&pt.skinning===!0||q.isInstancedMesh&&pt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&pt.instancingColor===!1&&q.instanceColor!==null||pt.envMap!==at||K.fog===!0&&pt.fog!==Ue||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==rt.numPlanes||pt.numIntersection!==rt.numIntersection)||pt.vertexAlphas!==ht||pt.vertexTangents!==lt||pt.morphTargets!==ft||pt.morphNormals!==Zt||pt.morphColors!==Un||pt.toneMapping!==an||me.isWebGL2===!0&&pt.morphTargetsCount!==Vt)&&(Xt=!0):(Xt=!0,pt.__version=K.version);let Fi=pt.currentProgram;Xt===!0&&(Fi=Fs(K,G,q));let Sl=!1,ts=!1,_r=!1;const Pt=Fi.getUniforms(),Ji=pt.uniforms;if(se.useProgram(Fi.program)&&(Sl=!0,ts=!0,_r=!0),K.id!==F&&(F=K.id,ts=!0),Sl||E!==P){Pt.setValue(D,"projectionMatrix",P.projectionMatrix),Pt.setValue(D,"viewMatrix",P.matrixWorldInverse);const Xn=Pt.map.cameraPosition;Xn!==void 0&&Xn.setValue(D,Je.setFromMatrixPosition(P.matrixWorld)),me.logarithmicDepthBuffer&&Pt.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Pt.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,ts=!0,_r=!0)}if(q.isSkinnedMesh){Pt.setOptional(D,q,"bindMatrix"),Pt.setOptional(D,q,"bindMatrixInverse");const Xn=q.skeleton;Xn&&(me.floatVertexTextures?(Xn.boneTexture===null&&Xn.computeBoneTexture(),Pt.setValue(D,"boneTexture",Xn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(Pt.setOptional(D,q,"batchingTexture"),Pt.setValue(D,"batchingTexture",q._matricesTexture,C));const Jo=Z.morphAttributes;if((Jo.position!==void 0||Jo.normal!==void 0||Jo.color!==void 0&&me.isWebGL2===!0)&&st.update(q,Z,Fi),(ts||pt.receiveShadow!==q.receiveShadow)&&(pt.receiveShadow=q.receiveShadow,Pt.setValue(D,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Ji.envMap.value=at,Ji.flipEnvMap.value=at.isCubeTexture&&at.isRenderTargetTexture===!1?-1:1),ts&&(Pt.setValue(D,"toneMappingExposure",x.toneMappingExposure),pt.needsLights&&ks(Ji,_r),Ue&&K.fog===!0&&be.refreshFogUniforms(Ji,Ue),be.refreshMaterialUniforms(Ji,K,ee,j,Fe),Pc.upload(D,Zo(pt),Ji,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Pc.upload(D,Zo(pt),Ji,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Pt.setValue(D,"center",q.center),Pt.setValue(D,"modelViewMatrix",q.modelViewMatrix),Pt.setValue(D,"normalMatrix",q.normalMatrix),Pt.setValue(D,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Xn=K.uniformsGroups;for(let Qo=0,Ou=Xn.length;Qo<Ou;Qo++)if(me.isWebGL2){const xe=Xn[Qo];Et.update(xe,Fi),Et.bind(xe,Fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fi}function ks(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function yl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,G,Z){Ne.get(P.texture).__webglTexture=G,Ne.get(P.depthTexture).__webglTexture=Z;const K=Ne.get(P);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,G){const Z=Ne.get(P);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,Z=0){R=P,L=G,A=Z;let K=!0,q=null,Ue=!1,Ze=!1;if(P){const at=Ne.get(P);at.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(D.FRAMEBUFFER,null),K=!1):at.__webglFramebuffer===void 0?C.setupRenderTarget(P):at.__hasExternalTextures&&C.rebindTextures(P,Ne.get(P.texture).__webglTexture,Ne.get(P.depthTexture).__webglTexture);const ht=P.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(Ze=!0);const lt=Ne.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(lt[G])?q=lt[G][Z]:q=lt[G],Ue=!0):me.isWebGL2&&P.samples>0&&C.useMultisampledRTT(P)===!1?q=Ne.get(P).__webglMultisampledFramebuffer:Array.isArray(lt)?q=lt[Z]:q=lt,T.copy(P.viewport),V.copy(P.scissor),X=P.scissorTest}else T.copy(Y).multiplyScalar(ee).floor(),V.copy(le).multiplyScalar(ee).floor(),X=fe;if(se.bindFramebuffer(D.FRAMEBUFFER,q)&&me.drawBuffers&&K&&se.drawBuffers(P,q),se.viewport(T),se.scissor(V),se.setScissorTest(X),Ue){const at=Ne.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+G,at.__webglTexture,Z)}else if(Ze){const at=Ne.get(P.texture),ht=G||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,at.__webglTexture,Z||0,ht)}F=-1},this.readRenderTargetPixels=function(P,G,Z,K,q,Ue,Ze){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ze!==void 0&&(tt=tt[Ze]),tt){se.bindFramebuffer(D.FRAMEBUFFER,tt);try{const at=P.texture,ht=at.format,lt=at.type;if(ht!==Ni&&ke.convert(ht)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ft=lt===sl&&(oe.has("EXT_color_buffer_half_float")||me.isWebGL2&&oe.has("EXT_color_buffer_float"));if(lt!==$r&&ke.convert(lt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(lt===Ur&&(me.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-K&&Z>=0&&Z<=P.height-q&&D.readPixels(G,Z,K,q,ke.convert(ht),ke.convert(lt),Ue)}finally{const at=R!==null?Ne.get(R).__webglFramebuffer:null;se.bindFramebuffer(D.FRAMEBUFFER,at)}}},this.copyFramebufferToTexture=function(P,G,Z=0){const K=Math.pow(2,-Z),q=Math.floor(G.image.width*K),Ue=Math.floor(G.image.height*K);C.setTexture2D(G,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,P.x,P.y,q,Ue),se.unbindTexture()},this.copyTextureToTexture=function(P,G,Z,K=0){const q=G.image.width,Ue=G.image.height,Ze=ke.convert(Z.format),tt=ke.convert(Z.type);C.setTexture2D(Z,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Z.unpackAlignment),G.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,K,P.x,P.y,q,Ue,Ze,tt,G.image.data):G.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,K,P.x,P.y,G.mipmaps[0].width,G.mipmaps[0].height,Ze,G.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,K,P.x,P.y,Ze,tt,G.image),K===0&&Z.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(P,G,Z,K,q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=P.max.x-P.min.x+1,Ze=P.max.y-P.min.y+1,tt=P.max.z-P.min.z+1,at=ke.convert(K.format),ht=ke.convert(K.type);let lt;if(K.isData3DTexture)C.setTexture3D(K,0),lt=D.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)C.setTexture2DArray(K,0),lt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,K.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,K.unpackAlignment);const ft=D.getParameter(D.UNPACK_ROW_LENGTH),Zt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Un=D.getParameter(D.UNPACK_SKIP_PIXELS),an=D.getParameter(D.UNPACK_SKIP_ROWS),ti=D.getParameter(D.UNPACK_SKIP_IMAGES),Vt=Z.isCompressedTexture?Z.mipmaps[q]:Z.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Vt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Vt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,P.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,P.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,P.min.z),Z.isDataTexture||Z.isData3DTexture?D.texSubImage3D(lt,q,G.x,G.y,G.z,Ue,Ze,tt,at,ht,Vt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(lt,q,G.x,G.y,G.z,Ue,Ze,tt,at,Vt.data)):D.texSubImage3D(lt,q,G.x,G.y,G.z,Ue,Ze,tt,at,ht,Vt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Un),D.pixelStorei(D.UNPACK_SKIP_ROWS,an),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ti),q===0&&K.generateMipmaps&&D.generateMipmap(lt),se.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),se.unbindTexture()},this.resetState=function(){L=0,A=0,R=null,se.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===dp?"display-p3":"srgb",n.unpackColorSpace=Ut.workingColorSpace===Pu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$t?ws:Yx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ws?$t:vr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class C2 extends Lc{}C2.prototype.isWebGL1Renderer=!0;class Oa{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new xt(e),this.near=n,this.far=i}clone(){return new Oa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Nc extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class R2{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=sh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new U;class uu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)On.fromBufferAttribute(this,n),On.applyMatrix4(e),this.setXYZ(n,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)On.fromBufferAttribute(this,n),On.applyNormalMatrix(e),this.setXYZ(n,On.x,On.y,On.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)On.fromBufferAttribute(this,n),On.transformDirection(e),this.setXYZ(n,On.x,On.y,On.z);return this}setX(e,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Xi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Xi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Xi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Xi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Si(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class g_ extends Us{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ro;const ha=new U,so=new U,oo=new U,ao=new Se,pa=new Se,v_=new tn,cc=new U,ma=new U,uc=new U,s0=new Se,Wd=new Se,o0=new Se;class P2 extends Mn{constructor(e=new g_){if(super(),this.isSprite=!0,this.type="Sprite",ro===void 0){ro=new mn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new R2(n,5);ro.setIndex([0,1,2,0,2,3]),ro.setAttribute("position",new uu(i,3,0,!1)),ro.setAttribute("uv",new uu(i,2,3,!1))}this.geometry=ro,this.material=e,this.center=new Se(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),so.setFromMatrixScale(this.matrixWorld),v_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),oo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&so.multiplyScalar(-oo.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;dc(cc.set(-.5,-.5,0),oo,o,so,r,s),dc(ma.set(.5,-.5,0),oo,o,so,r,s),dc(uc.set(.5,.5,0),oo,o,so,r,s),s0.set(0,0),Wd.set(1,0),o0.set(1,1);let a=e.ray.intersectTriangle(cc,ma,uc,!1,ha);if(a===null&&(dc(ma.set(-.5,.5,0),oo,o,so,r,s),Wd.set(0,1),a=e.ray.intersectTriangle(cc,uc,ma,!1,ha),a===null))return;const l=e.ray.origin.distanceTo(ha);l<e.near||l>e.far||n.push({distance:l,point:ha.clone(),uv:vi.getInterpolation(ha,cc,ma,uc,s0,Wd,o0,new Se),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function dc(t,e,n,i,r,s){ao.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(pa.x=s*ao.x-r*ao.y,pa.y=r*ao.x+s*ao.y):pa.copy(ao),t.copy(e),t.x+=pa.x,t.y+=pa.y,t.applyMatrix4(v_)}class Fa extends Us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const a0=new U,l0=new U,c0=new tn,jd=new t_,fc=new Lu;class x_ extends Mn{constructor(e=new mn,n=new Fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)a0.fromBufferAttribute(n,r-1),l0.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=a0.distanceTo(l0);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(r),fc.radius+=s,e.ray.intersectsSphere(fc)===!1)return;c0.copy(r).invert(),jd.copy(e.ray).applyMatrix4(c0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,u=new U,f=new U,h=new U,p=this.isLineSegments?2:1,v=i.index,g=i.attributes.position;if(v!==null){const d=Math.max(0,o.start),m=Math.min(v.count,o.start+o.count);for(let x=d,S=m-1;x<S;x+=p){const L=v.getX(x),A=v.getX(x+1);if(c.fromBufferAttribute(g,L),u.fromBufferAttribute(g,A),jd.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(h);F<e.near||F>e.far||n.push({distance:F,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),m=Math.min(g.count,o.start+o.count);for(let x=d,S=m-1;x<S;x+=p){if(c.fromBufferAttribute(g,x),u.fromBufferAttribute(g,x+1),jd.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||n.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const u0=new U,d0=new U;class ch extends x_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)u0.fromBufferAttribute(n,r),d0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+u0.distanceTo(d0);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xd extends Gn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Se:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new U,r=[],s=[],o=[],a=new U,l=new tn;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Tn(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Tn(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gp extends Ki{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new Se,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class L2 extends gp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function vp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const hc=new U,$d=new vp,Yd=new vp,qd=new vp;class N2 extends Ki{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new U){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(hc.subVectors(r[0],r[1]).add(r[0]),c=hc);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(hc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=hc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(u),p);y<1e-4&&(y=1),v<1e-4&&(v=y),g<1e-4&&(g=y),$d.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,v,y,g),Yd.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,v,y,g),qd.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,v,y,g)}else this.curveType==="catmullrom"&&($d.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Yd.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),qd.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set($d.calc(l),Yd.calc(l),qd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function f0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function I2(t,e){const n=1-t;return n*n*e}function D2(t,e){return 2*(1-t)*t*e}function U2(t,e){return t*t*e}function ka(t,e,n,i){return I2(t,e)+D2(t,n)+U2(t,i)}function O2(t,e){const n=1-t;return n*n*n*e}function F2(t,e){const n=1-t;return 3*n*n*t*e}function k2(t,e){return 3*(1-t)*t*t*e}function z2(t,e){return t*t*t*e}function za(t,e,n,i,r){return O2(t,e)+F2(t,n)+k2(t,i)+z2(t,r)}class __ extends Ki{constructor(e=new Se,n=new Se,i=new Se,r=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Se){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(za(e,r.x,s.x,o.x,a.x),za(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class B2 extends Ki{constructor(e=new U,n=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(za(e,r.x,s.x,o.x,a.x),za(e,r.y,s.y,o.y,a.y),za(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class y_ extends Ki{constructor(e=new Se,n=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Se){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Se){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class H2 extends Ki{constructor(e=new U,n=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new U){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new U){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S_ extends Ki{constructor(e=new Se,n=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Se){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ka(e,r.x,s.x,o.x),ka(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V2 extends Ki{constructor(e=new U,n=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ka(e,r.x,s.x,o.x),ka(e,r.y,s.y,o.y),ka(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M_ extends Ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Se){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(f0(a,l.x,c.x,u.x,f.x),f0(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Se().fromArray(r))}return this}}var uh=Object.freeze({__proto__:null,ArcCurve:L2,CatmullRomCurve3:N2,CubicBezierCurve:__,CubicBezierCurve3:B2,EllipseCurve:gp,LineCurve:y_,LineCurve3:H2,QuadraticBezierCurve:S_,QuadraticBezierCurve3:V2,SplineCurve:M_});class G2 extends Ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new uh[r.type]().fromJSON(r))}return this}}class h0 extends G2{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new y_(this.currentPoint.clone(),new Se(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new S_(this.currentPoint.clone(),new Se(e,n),new Se(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new __(this.currentPoint.clone(),new Se(e,n),new Se(i,r),new Se(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new M_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new gp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ls extends mn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let v=0;const y=[],g=i/2;let d=0;m(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ot(f,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(p,2));function m(){const S=new U,L=new U;let A=0;const R=(n-e)/i;for(let F=0;F<=s;F++){const E=[],T=F/s,V=T*(n-e)+e;for(let X=0;X<=r;X++){const te=X/r,I=te*l+a,W=Math.sin(I),j=Math.cos(I);L.x=V*W,L.y=-T*i+g,L.z=V*j,f.push(L.x,L.y,L.z),S.set(W,R,j).normalize(),h.push(S.x,S.y,S.z),p.push(te,1-T),E.push(v++)}y.push(E)}for(let F=0;F<r;F++)for(let E=0;E<s;E++){const T=y[E][F],V=y[E+1][F],X=y[E+1][F+1],te=y[E][F+1];u.push(T,V,te),u.push(V,X,te),A+=6}c.addGroup(d,A,0),d+=A}function x(S){const L=v,A=new Se,R=new U;let F=0;const E=S===!0?e:n,T=S===!0?1:-1;for(let X=1;X<=r;X++)f.push(0,g*T,0),h.push(0,T,0),p.push(.5,.5),v++;const V=v;for(let X=0;X<=r;X++){const I=X/r*l+a,W=Math.cos(I),j=Math.sin(I);R.x=E*j,R.y=g*T,R.z=E*W,f.push(R.x,R.y,R.z),h.push(0,T,0),A.x=W*.5+.5,A.y=j*.5*T+.5,p.push(A.x,A.y),v++}for(let X=0;X<r;X++){const te=L+X,I=V+X;S===!0?u.push(I,I+1,te):u.push(I+1,I,te),F+=3}c.addGroup(d,F,S===!0?1:2),d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xp extends Ls{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new xp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _p extends mn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Ot(s,3)),this.setAttribute("normal",new Ot(s.slice(),3)),this.setAttribute("uv",new Ot(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const x=new U,S=new U,L=new U;for(let A=0;A<n.length;A+=3)p(n[A+0],x),p(n[A+1],S),p(n[A+2],L),l(x,S,L,m)}function l(m,x,S,L){const A=L+1,R=[];for(let F=0;F<=A;F++){R[F]=[];const E=m.clone().lerp(S,F/A),T=x.clone().lerp(S,F/A),V=A-F;for(let X=0;X<=V;X++)X===0&&F===A?R[F][X]=E:R[F][X]=E.clone().lerp(T,X/V)}for(let F=0;F<A;F++)for(let E=0;E<2*(A-F)-1;E++){const T=Math.floor(E/2);E%2===0?(h(R[F][T+1]),h(R[F+1][T]),h(R[F][T])):(h(R[F][T+1]),h(R[F+1][T+1]),h(R[F+1][T]))}}function c(m){const x=new U;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(m),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function u(){const m=new U;for(let x=0;x<s.length;x+=3){m.x=s[x+0],m.y=s[x+1],m.z=s[x+2];const S=g(m)/2/Math.PI+.5,L=d(m)/Math.PI+.5;o.push(S,1-L)}v(),f()}function f(){for(let m=0;m<o.length;m+=6){const x=o[m+0],S=o[m+2],L=o[m+4],A=Math.max(x,S,L),R=Math.min(x,S,L);A>.9&&R<.1&&(x<.2&&(o[m+0]+=1),S<.2&&(o[m+2]+=1),L<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,x){const S=m*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function v(){const m=new U,x=new U,S=new U,L=new U,A=new Se,R=new Se,F=new Se;for(let E=0,T=0;E<s.length;E+=9,T+=6){m.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),S.set(s[E+6],s[E+7],s[E+8]),A.set(o[T+0],o[T+1]),R.set(o[T+2],o[T+3]),F.set(o[T+4],o[T+5]),L.copy(m).add(x).add(S).divideScalar(3);const V=g(L);y(A,T+0,m,V),y(R,T+2,x,V),y(F,T+4,S,V)}}function y(m,x,S,L){L<0&&m.x===1&&(o[x]=m.x-1),S.x===0&&S.z===0&&(o[x]=L/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _p(e.vertices,e.indices,e.radius,e.details)}}class ms extends h0{constructor(e){super(e),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new h0().fromJSON(r))}return this}}const W2={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=w_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,p;if(i&&(s=q2(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let v=n;v<r;v+=n)f=t[v],h=t[v+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return ll(s,o,n,a,l,p,0),o}};function w_(t,e,n,i,r){let s,o;if(r===oA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=p0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=p0(s,t[s],t[s+1],o);return o&&Iu(o,o.next)&&(ul(o),o=o.next),o}function Ns(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Iu(n,n.next)||Qt(n.prev,n,n.next)===0)){if(ul(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ll(t,e,n,i,r,s,o){if(!t)return;!o&&s&&eA(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?X2(t,i,r,s):j2(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),ul(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=$2(Ns(t),e,n),ll(t,e,n,i,r,s,2)):o===2&&Y2(t,e,n,i,r,s):ll(Ns(t),e,n,i,r,s,1);break}}}function j2(t){const e=t.prev,n=t,i=t.next;if(Qt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=h&&v.y>=f&&v.y<=p&&Eo(r,a,s,l,o,c,v.x,v.y)&&Qt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function X2(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Qt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,v=u<f?u<h?u:h:f<h?f:h,y=a>l?a>c?a:c:l>c?l:c,g=u>f?u>h?u:h:f>h?f:h,d=dh(p,v,e,n,i),m=dh(y,g,e,n,i);let x=t.prevZ,S=t.nextZ;for(;x&&x.z>=d&&S&&S.z<=m;){if(x.x>=p&&x.x<=y&&x.y>=v&&x.y<=g&&x!==r&&x!==o&&Eo(a,u,l,f,c,h,x.x,x.y)&&Qt(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=y&&S.y>=v&&S.y<=g&&S!==r&&S!==o&&Eo(a,u,l,f,c,h,S.x,S.y)&&Qt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=y&&x.y>=v&&x.y<=g&&x!==r&&x!==o&&Eo(a,u,l,f,c,h,x.x,x.y)&&Qt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=m;){if(S.x>=p&&S.x<=y&&S.y>=v&&S.y<=g&&S!==r&&S!==o&&Eo(a,u,l,f,c,h,S.x,S.y)&&Qt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function $2(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Iu(r,s)&&E_(r,i,i.next,s)&&cl(r,s)&&cl(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),ul(i),ul(i.next),i=t=s),i=i.next}while(i!==t);return Ns(i)}function Y2(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&iA(o,a)){let l=T_(o,a);o=Ns(o,o.next),l=Ns(l,l.next),ll(o,e,n,i,r,s,0),ll(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function q2(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=w_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(nA(c));for(r.sort(Z2),s=0;s<r.length;s++)n=K2(r[s],n);return n}function Z2(t,e){return t.x-e.x}function K2(t,e){const n=J2(t,e);if(!n)return e;const i=T_(n,t);return Ns(i,i.next),Ns(n,n.next)}function J2(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Eo(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),cl(n,t)&&(f<u||f===u&&(n.x>r.x||n.x===r.x&&Q2(r,n)))&&(r=n,u=f)),n=n.next;while(n!==a);return r}function Q2(t,e){return Qt(t.prev,t,e.prev)<0&&Qt(e.next,t,t.next)<0}function eA(t,e,n,i){let r=t;do r.z===0&&(r.z=dh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,tA(r)}function tA(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function dh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function nA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Eo(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function iA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!rA(t,e)&&(cl(t,e)&&cl(e,t)&&sA(t,e)&&(Qt(t.prev,t,e.prev)||Qt(t,e.prev,e))||Iu(t,e)&&Qt(t.prev,t,t.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Iu(t,e){return t.x===e.x&&t.y===e.y}function E_(t,e,n,i){const r=mc(Qt(t,e,n)),s=mc(Qt(t,e,i)),o=mc(Qt(n,i,t)),a=mc(Qt(n,i,e));return!!(r!==s&&o!==a||r===0&&pc(t,n,e)||s===0&&pc(t,i,e)||o===0&&pc(n,t,i)||a===0&&pc(n,e,i))}function pc(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function mc(t){return t>0?1:t<0?-1:0}function rA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&E_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function cl(t,e){return Qt(t.prev,t,t.next)<0?Qt(t,e,t.next)>=0&&Qt(t,t.prev,e)>=0:Qt(t,e,t.prev)<0||Qt(t,t.next,e)<0}function sA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function T_(t,e){const n=new fh(t.i,t.x,t.y),i=new fh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function p0(t,e,n,i){const r=new fh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ul(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function fh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function oA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Yr{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Yr.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];m0(e),g0(i,e);let o=e.length;n.forEach(m0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,g0(i,n[l]);const a=W2.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function m0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function g0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Ba extends mn{constructor(e=new ms([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ot(r,3)),this.setAttribute("uv",new Ot(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,v=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:aA;let x,S=!1,L,A,R,F;d&&(x=d.getSpacedPoints(u),S=!0,h=!1,L=d.computeFrenetFrames(u,!1),A=new U,R=new U,F=new U),h||(g=0,p=0,v=0,y=0);const E=a.extractPoints(c);let T=E.shape;const V=E.holes;if(!Yr.isClockWise(T)){T=T.reverse();for(let D=0,re=V.length;D<re;D++){const oe=V[D];Yr.isClockWise(oe)&&(V[D]=oe.reverse())}}const te=Yr.triangulateShape(T,V),I=T;for(let D=0,re=V.length;D<re;D++){const oe=V[D];T=T.concat(oe)}function W(D,re,oe){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(re,oe)}const j=T.length,ee=te.length;function z(D,re,oe){let me,se,qe;const Ne=D.x-re.x,C=D.y-re.y,w=oe.x-D.x,H=oe.y-D.y,ge=Ne*Ne+C*C,ve=Ne*H-C*w;if(Math.abs(ve)>Number.EPSILON){const he=Math.sqrt(ge),Ve=Math.sqrt(w*w+H*H),be=re.x-C/he,Oe=re.y+Ne/he,De=oe.x-H/Ve,rt=oe.y+w/Ve,ne=((De-be)*H-(rt-Oe)*w)/(Ne*H-C*w);me=be+Ne*ne-D.x,se=Oe+C*ne-D.y;const _t=me*me+se*se;if(_t<=2)return new Se(me,se);qe=Math.sqrt(_t/2)}else{let he=!1;Ne>Number.EPSILON?w>Number.EPSILON&&(he=!0):Ne<-Number.EPSILON?w<-Number.EPSILON&&(he=!0):Math.sign(C)===Math.sign(H)&&(he=!0),he?(me=-C,se=Ne,qe=Math.sqrt(ge)):(me=Ne,se=C,qe=Math.sqrt(ge/2))}return new Se(me/qe,se/qe)}const $=[];for(let D=0,re=I.length,oe=re-1,me=D+1;D<re;D++,oe++,me++)oe===re&&(oe=0),me===re&&(me=0),$[D]=z(I[D],I[oe],I[me]);const Y=[];let le,fe=$.concat();for(let D=0,re=V.length;D<re;D++){const oe=V[D];le=[];for(let me=0,se=oe.length,qe=se-1,Ne=me+1;me<se;me++,qe++,Ne++)qe===se&&(qe=0),Ne===se&&(Ne=0),le[me]=z(oe[me],oe[qe],oe[Ne]);Y.push(le),fe=fe.concat(le)}for(let D=0;D<g;D++){const re=D/g,oe=p*Math.cos(re*Math.PI/2),me=v*Math.sin(re*Math.PI/2)+y;for(let se=0,qe=I.length;se<qe;se++){const Ne=W(I[se],$[se],me);Le(Ne.x,Ne.y,-oe)}for(let se=0,qe=V.length;se<qe;se++){const Ne=V[se];le=Y[se];for(let C=0,w=Ne.length;C<w;C++){const H=W(Ne[C],le[C],me);Le(H.x,H.y,-oe)}}}const Q=v+y;for(let D=0;D<j;D++){const re=h?W(T[D],fe[D],Q):T[D];S?(R.copy(L.normals[0]).multiplyScalar(re.x),A.copy(L.binormals[0]).multiplyScalar(re.y),F.copy(x[0]).add(R).add(A),Le(F.x,F.y,F.z)):Le(re.x,re.y,0)}for(let D=1;D<=u;D++)for(let re=0;re<j;re++){const oe=h?W(T[re],fe[re],Q):T[re];S?(R.copy(L.normals[D]).multiplyScalar(oe.x),A.copy(L.binormals[D]).multiplyScalar(oe.y),F.copy(x[D]).add(R).add(A),Le(F.x,F.y,F.z)):Le(oe.x,oe.y,f/u*D)}for(let D=g-1;D>=0;D--){const re=D/g,oe=p*Math.cos(re*Math.PI/2),me=v*Math.sin(re*Math.PI/2)+y;for(let se=0,qe=I.length;se<qe;se++){const Ne=W(I[se],$[se],me);Le(Ne.x,Ne.y,f+oe)}for(let se=0,qe=V.length;se<qe;se++){const Ne=V[se];le=Y[se];for(let C=0,w=Ne.length;C<w;C++){const H=W(Ne[C],le[C],me);S?Le(H.x,H.y+x[u-1].y,x[u-1].x+oe):Le(H.x,H.y,f+oe)}}}de(),Ce();function de(){const D=r.length/3;if(h){let re=0,oe=j*re;for(let me=0;me<ee;me++){const se=te[me];et(se[2]+oe,se[1]+oe,se[0]+oe)}re=u+g*2,oe=j*re;for(let me=0;me<ee;me++){const se=te[me];et(se[0]+oe,se[1]+oe,se[2]+oe)}}else{for(let re=0;re<ee;re++){const oe=te[re];et(oe[2],oe[1],oe[0])}for(let re=0;re<ee;re++){const oe=te[re];et(oe[0]+j*u,oe[1]+j*u,oe[2]+j*u)}}i.addGroup(D,r.length/3-D,0)}function Ce(){const D=r.length/3;let re=0;Fe(I,re),re+=I.length;for(let oe=0,me=V.length;oe<me;oe++){const se=V[oe];Fe(se,re),re+=se.length}i.addGroup(D,r.length/3-D,1)}function Fe(D,re){let oe=D.length;for(;--oe>=0;){const me=oe;let se=oe-1;se<0&&(se=D.length-1);for(let qe=0,Ne=u+g*2;qe<Ne;qe++){const C=j*qe,w=j*(qe+1),H=re+me+C,ge=re+se+C,ve=re+se+w,he=re+me+w;Je(H,ge,ve,he)}}}function Le(D,re,oe){l.push(D),l.push(re),l.push(oe)}function et(D,re,oe){Xe(D),Xe(re),Xe(oe);const me=r.length/3,se=m.generateTopUV(i,r,me-3,me-2,me-1);He(se[0]),He(se[1]),He(se[2])}function Je(D,re,oe,me){Xe(D),Xe(re),Xe(me),Xe(re),Xe(oe),Xe(me);const se=r.length/3,qe=m.generateSideWallUV(i,r,se-6,se-3,se-2,se-1);He(qe[0]),He(qe[1]),He(qe[3]),He(qe[1]),He(qe[2]),He(qe[3])}function Xe(D){r.push(l[D*3+0]),r.push(l[D*3+1]),r.push(l[D*3+2])}function He(D){s.push(D.x),s.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return lA(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new uh[r.type]().fromJSON(r)),new Ba(i,e.options)}}const aA={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Se(s,o),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],v=e[r*3+2],y=e[s*3],g=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-f),new Se(h,1-v),new Se(y,1-d)]:[new Se(a,1-l),new Se(u,1-f),new Se(p,1-v),new Se(g,1-d)]}};function lA(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class du extends _p{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new du(e.radius,e.detail)}}class fu extends mn{constructor(e=new ms([new Se(0,.5),new Se(-.5,-.5),new Se(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(s,3)),this.setAttribute("uv",new Ot(o,2));function c(u){const f=r.length/3,h=u.extractPoints(n);let p=h.shape;const v=h.holes;Yr.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,d=v.length;g<d;g++){const m=v[g];Yr.isClockWise(m)===!0&&(v[g]=m.reverse())}const y=Yr.triangulateShape(p,v);for(let g=0,d=v.length;g<d;g++){const m=v[g];p=p.concat(m)}for(let g=0,d=p.length;g<d;g++){const m=p[g];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let g=0,d=y.length;g<d;g++){const m=y[g],x=m[0]+f,S=m[1]+f,L=m[2]+f;i.push(x,S,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return cA(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new fu(i,e.curveSegments)}}function cA(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class yp extends mn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new U,h=new U,p=[],v=[],y=[],g=[];for(let d=0;d<=i;d++){const m=[],x=d/i;let S=0;d===0&&o===0?S=.5/n:d===i&&l===Math.PI&&(S=-.5/n);for(let L=0;L<=n;L++){const A=L/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),g.push(A+S,1-x),m.push(c++)}u.push(m)}for(let d=0;d<i;d++)for(let m=0;m<n;m++){const x=u[d][m+1],S=u[d][m],L=u[d+1][m],A=u[d+1][m+1];(d!==0||o>0)&&p.push(x,S,A),(d!==i-1||l<Math.PI)&&p.push(S,L,A)}this.setIndex(p),this.setAttribute("position",new Ot(v,3)),this.setAttribute("normal",new Ot(y,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class un extends Us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qx,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const hh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class uA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const dA=new uA;class Sp{constructor(e){this.manager=e!==void 0?e:dA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Sp.DEFAULT_MATERIAL_NAME="__DEFAULT";class fA extends Sp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=hh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=al("img");function l(){u(),hh.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class gc extends Sp{constructor(e){super(e)}load(e,n,i,r){const s=new Gn,o=new fA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Mp extends Mn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Zd=new tn,v0=new U,x0=new U;class b_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hp,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;v0.setFromMatrixPosition(e.matrixWorld),n.position.copy(v0),x0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(x0),n.updateMatrixWorld(),Zd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _0=new tn,ga=new U,Kd=new U;class hA extends b_{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new qt(2,1,1,1),new qt(0,1,1,1),new qt(3,1,1,1),new qt(1,1,1,1),new qt(3,0,1,1),new qt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ga.setFromMatrixPosition(e.matrixWorld),i.position.copy(ga),Kd.copy(i.position),Kd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Kd),i.updateMatrixWorld(),r.makeTranslation(-ga.x,-ga.y,-ga.z),_0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_0)}}class pA extends Mp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new hA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mA extends b_{constructor(){super(new pp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jd extends Mp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new mA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qd extends Mp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class gA extends ch{constructor(e=10,n=10,i=4473924,r=8947848){i=new xt(i),r=new xt(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,v=-a;h<=n;h++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const y=h===s?i:r;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const u=new mn;u.setAttribute("position",new Ot(l,3)),u.setAttribute("color",new Ot(c,3));const f=new Fa({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);class ef extends Nc{constructor(e=null){super();const n=new cn;n.deleteAttribute("uv");const i=new un({side:Vn}),r=new un;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const o=new pA(16777215,s,28,2);o.position.set(.418,16.199,.3),this.add(o);const a=new $e(n,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const l=new $e(n,r);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new $e(n,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const u=new $e(n,r);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const f=new $e(n,r);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);const h=new $e(n,r);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const p=new $e(n,r);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const v=new $e(n,lo(50));v.position.set(-16.116,14.37,8.208),v.scale.set(.1,2.428,2.739),this.add(v);const y=new $e(n,lo(50));y.position.set(-16.109,18.021,-8.207),y.scale.set(.1,2.425,2.751),this.add(y);const g=new $e(n,lo(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const d=new $e(n,lo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const m=new $e(n,lo(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const x=new $e(n,lo(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function lo(t){const e=new $i;return e.color.setScalar(t),e}/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A_=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=We.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>We.createElement("svg",{ref:l,...xA,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:A_("lucide",r),...a},[...o.map(([c,u])=>We.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=(t,e)=>{const n=We.forwardRef(({className:i,...r},s)=>We.createElement(_A,{ref:s,iconNode:e,className:A_(`lucide-${vA(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],vc=fn("Camera",yA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],MA=fn("Car",SA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],y0=fn("Download",wA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],TA=fn("FolderOpen",EA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],S0=fn("Image",bA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],CA=fn("Layers",AA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],PA=fn("LockOpen",RA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],NA=fn("Lock",LA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],DA=fn("Map",IA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],OA=fn("Move",UA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],M0=fn("Plus",FA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],zA=fn("Redo",kA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],HA=fn("Save",BA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],GA=fn("Square",VA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],w0=fn("Trash2",WA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],XA=fn("Trees",jA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],YA=fn("Type",$A);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],ZA=fn("Undo",qA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],JA=fn("Upload",KA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],tf=fn("X",QA),va=()=>Math.random().toString(36).substr(2,9),hi={camera:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899"],building:["#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b"],tree:["#22c55e","#16a34a","#15803d","#14532d","#84cc16","#bef264"],parking:["#e2e8f0","#cbd5e1","#94a3b8","#f8fafc","#ffffff","#f1f5f9"],label:["#1e293b","#334155","#475569","#64748b","#ef4444","#3b82f6"]},nf={width:1e3,height:700},Yn=(t,e,n)=>Math.min(Math.max(t,e),n),rf=t=>{let e=t%360;return e>180&&(e-=360),e<-180&&(e+=360),e},sf=(t,e)=>[{x:-t/2,y:-e/2},{x:t/2,y:-e/2},{x:t/2,y:e/2},{x:-t/2,y:e/2}],eC=t=>{const e=t.map(a=>a.x),n=t.map(a=>a.y),i=Math.min(...e),r=Math.max(...e),s=Math.min(...n),o=Math.max(...n);return{minX:i,maxX:r,minY:s,maxY:o,width:r-i,height:o-s}},of=t=>{const e=new Or,n=t.width,i=t.height,r=12,s=3,o=t.color,l=t.id.split("").reduce((X,te)=>X+te.charCodeAt(0),0)%4,c=new un({color:o,roughness:.2,metalness:.3,flatShading:!0}),u=new un({color:"#1e293b",roughness:.1,metalness:.9,flatShading:!0}),f=new un({color:"#171717",roughness:.5,flatShading:!0}),h=new Ls(s,s,n*.15,12);h.rotateZ(Math.PI/2);const p=i*.35,v=n*.45;(()=>{[-1,1].forEach(X=>{[-1,1].forEach(te=>{const I=new $e(h,f);I.position.set(X*v,s,te*p),I.castShadow=!0,e.add(I)})})})();const g=s+1;if(l===1){const X=r*.9,te=new $e(new cn(n,X,i),c);te.position.y=g+X/2,te.castShadow=!0,te.receiveShadow=!0,e.add(te);const I=r*.7,W=i*.8,j=n*.85,ee=new $e(new cn(j,I,W),c);ee.position.y=g+X+I/2-2,ee.castShadow=!0,e.add(ee);const z=new $e(new cn(j+.2,I*.7,W*.9),u);z.position.copy(ee.position),e.add(z)}else if(l===2){const X=i*.35,te=i*.6,I=r*1.5,W=new $e(new cn(n,r*.6,i),c);W.position.y=g+r*.3,W.castShadow=!0,e.add(W);const j=new $e(new cn(n*.95,I,X),c);j.position.set(0,g+r*.3+I/2,-i/2+X/2+2),j.castShadow=!0,e.add(j);const ee=new $e(new cn(n+.1,I*.5,X*.7),u);ee.position.copy(j.position),ee.position.y+=2,e.add(ee);const z=4,$=new $e(new cn(n*.95,z,te),c);$.position.set(0,g+r*.6+z/2,i/2-te/2),e.add($)}else if(l===3){const X=r*.7,te=new $e(new cn(n,X,i),c);te.position.y=g+X/2,te.castShadow=!0,e.add(te);const I=r*.5,W=i*.5,j=new $e(new cn(n*.7,I,W),c);j.position.y=g+X+I/2-1,e.add(j);const ee=new $e(new cn(n*.72,I*.8,W*.8),u);ee.position.copy(j.position),e.add(ee)}else{const X=r*.6,te=new $e(new cn(n,X,i),c);te.position.y=g+X/2,te.castShadow=!0,e.add(te);const I=r*.8,W=i*.5,j=new $e(new cn(n*.85,I,W),c);j.position.y=g+X+I/2-1,j.castShadow=!0,e.add(j);const ee=new $e(new cn(n*.9,I*.8,W*.9),u);ee.position.copy(j.position),e.add(ee)}const d=new pi(3,2),m=new $i({color:"#fef3c7"}),x=new $i({color:"#ef4444"}),S=-i/2-.1,L=i/2+.1,A=g+r*.6,R=n*.35,F=new $e(d,m);F.position.set(-R,A,S),F.rotation.y=Math.PI,e.add(F);const E=new $e(d,m);E.position.set(R,A,S),E.rotation.y=Math.PI,e.add(E);const T=new $e(d,x);T.position.set(-R,A,L),e.add(T);const V=new $e(d,x);return V.position.set(R,A,L),e.add(V),e.position.set(t.x,0,t.y),e.rotation.y=-Nn.degToRad(t.rotation),e},af=t=>{const e=new Or,n=t.id.split("").reduce((f,h)=>f+h.charCodeAt(0),0),i=n%2===0,r=t.radius*.25,s=i?t.radius*2:t.radius*1.5,o=new Ls(r*.6,r,s,6),a=new un({color:"#4a3728",roughness:1,flatShading:!0}),l=new $e(o,a);l.position.y=s/2,l.castShadow=!0,l.receiveShadow=!0,e.add(l);const c=i?"#1e4620":t.color,u=new un({color:c,roughness:.8,flatShading:!0});if(i){const h=t.radius,p=t.radius*2.5/4;for(let v=0;v<4;v++){const y=v/3,g=h*(1-y*.6),d=s*.3+v*(p*.8),m=new $e(new xp(g,p*1.5,7),u);m.position.y=d,m.castShadow=!0,m.receiveShadow=!0,e.add(m)}}else{const f=new du(t.radius*.8,0),h=new $e(f,u);h.position.y=s+t.radius*.2,h.castShadow=!0,h.receiveShadow=!0,e.add(h);const p=10;for(let v=0;v<p;v++){const g=(n+v*13)%100/100*Math.PI*2,d=(n+v*7)%100/100*Math.PI,m=t.radius*(.3+(n+v*3)%5/10),x=t.radius*.7,S=new $e(new du(m,0),u);S.position.set(Math.sin(d)*Math.cos(g)*x,h.position.y+Math.cos(d)*x*.8,Math.sin(d)*Math.sin(g)*x),S.castShadow=!0,e.add(S)}}return e.position.set(t.x,0,t.y),e},tC=(t,e,n)=>{const i=eC(t);if(i.width===0||i.height===0)return t;const r={x:(i.minX+i.maxX)/2,y:(i.minY+i.maxY)/2},s=e/i.width,o=n/i.height;return t.map(a=>({x:r.x+(a.x-r.x)*s,y:r.y+(a.y-r.y)*o}))},nC=t=>{if(t.length<2)return t;let e=0,n=0;for(let o=0;o<t.length;o+=1){const a=(o+1)%t.length,l=t[a].x-t[o].x,c=t[a].y-t[o].y,u=Math.hypot(l,c);u>n&&(n=u,e=o)}const i=(e+1)%t.length,r={x:(t[e].x+t[i].x)/2,y:(t[e].y+t[i].y)/2},s=[...t];return s.splice(e+1,0,r),s},iC=(t,e)=>{if(t.length<2)return t;let n=0,i=Number.POSITIVE_INFINITY,r=e;for(let o=0;o<t.length;o+=1){const a=(o+1)%t.length,l=t[o],c=t[a],u={x:c.x-l.x,y:c.y-l.y},f={x:e.x-l.x,y:e.y-l.y},h=u.x*u.x+u.y*u.y||1;let p=(f.x*u.x+f.y*u.y)/h;p=Yn(p,0,1);const v={x:l.x+u.x*p,y:l.y+u.y*p},y=Math.hypot(e.x-v.x,e.y-v.y);y<i&&(i=y,n=o+1,r=v)}const s=[...t];return s.splice(n,0,r),s},rC=(t,e)=>{const n=t.replace("#",""),i=n.length===3?n.split("").map(l=>l+l).join(""):n,r=parseInt(i,16),s=Yn((r>>16)+e,0,255),o=Yn((r>>8&255)+e,0,255),a=Yn((r&255)+e,0,255);return`#${(s<<16|o<<8|a).toString(16).padStart(6,"0")}`},sC=(t,e)=>{const n=t*Math.PI/180,i=2*Math.atan(Math.tan(n/2)/Math.sqrt(e*e+1));return{h:2*Math.atan(Math.tan(i/2)*e)*180/Math.PI,v:i*180/Math.PI}},oC=(t,e)=>{const n=t*Math.PI/180,i=e*Math.PI/180;return 2*Math.atan(Math.sqrt(Math.tan(n/2)**2+Math.tan(i/2)**2))*180/Math.PI},xa=(t,e)=>{const n=t*Math.PI/180;return 2*Math.atan(Math.tan(n/2)/e)*180/Math.PI},aC=(t,e)=>{const n=t*Math.PI/180;return 2*Math.atan(Math.tan(n/2)*e)*180/Math.PI};function lC(){var bp,Ap,Cp,Rp,Pp,Lp;const[t,e]=We.useState([]),[n,i]=We.useState(null),r=We.useRef(null);We.useEffect(()=>{r.current=n},[n]);const[s,o]=We.useState([]),[a,l]=We.useState(-1),c=We.useRef([]),u=We.useRef(-1);We.useEffect(()=>{c.current=s,u.current=a},[s,a]);const f=()=>{const _=JSON.stringify(t);a>=0&&s[a]===_||(o(b=>{const N=b.slice(0,a+1);return N.push(_),N.length>30&&N.shift(),N}),l(b=>{const N=b+1;return N>=30?29:N}))},h=()=>{const _=u.current;if(_>0){const b=_-1;try{const N=JSON.parse(c.current[b]);e(N),l(b)}catch(N){console.error("Undo failed",N)}}},p=()=>{const _=u.current;if(_<c.current.length-1){const b=_+1;try{const N=JSON.parse(c.current[b]);e(N),l(b)}catch(N){console.error("Redo failed",N)}}},[v,y]=We.useState(nf),[g,d]=We.useState(null),[m,x]=We.useState({x:0,y:0,width:nf.width,height:nf.height,opacity:.5}),[S,L]=We.useState(20),[A,R]=We.useState(!0),[F,E]=We.useState(!0),[T,V]=We.useState("Security Camera Plan"),[X,te]=We.useState(!1),[I,W]=We.useState("plan"),[j,ee]=We.useState({scale:2,padding:48,includeGrid:!0,includeLegend:!0,includeTitle:!0,includeCameraViews:!0}),[z,$]=We.useState({x:0,y:0}),[Y,le]=We.useState(1),[fe,Q]=We.useState(!1),[de,Ce]=We.useState({x:0,y:0,panX:0,panY:0}),[Fe,Le]=We.useState(!1),et=We.useRef(!1),[Je,Xe]=We.useState("select"),[He,D]=We.useState(null),[re,oe]=We.useState({type:null,itemId:null,startMouse:{x:0,y:0},startVal:null,snap:!1}),me=We.useRef(null),se=We.useRef(null),qe=We.useRef(null),Ne=We.useRef(null),C=We.useRef(null),w=We.useRef(null),H=We.useRef(null),[ge,ve]=We.useState([]),[he,Ve]=We.useState(!1),[be,Oe]=We.useState(!0),[De,rt]=We.useState([]),[ne,_t]=We.useState({visible:!0,opacity:.15,edgeOpacity:.6,useCameraColor:!0,color:"#3b82f6",showAll:!0,mode:"volume"}),[st,ot]=We.useState(null),[je,ke]=We.useState("flat"),[Ke,Et]=We.useState(null);We.useEffect(()=>{const _=localStorage.getItem("securityCameraPlannerData");if(_)try{const b=JSON.parse(_);b.items&&e(b.items),b.backgroundImg&&d(b.backgroundImg),b.bgSettings&&x(b.bgSettings),b.canvasSize&&y(b.canvasSize),b.exportList&&rt(b.exportList),b.projectName&&V(b.projectName),b.frustumSettings&&_t(b.frustumSettings),b.sceneBackgroundImg&&ot(b.sceneBackgroundImg),b.backgroundMode&&ke(b.backgroundMode)}catch(b){console.error("Failed to load saved state",b)}},[]),We.useEffect(()=>{const _=setTimeout(()=>{try{const b={items:t,backgroundImg:g,bgSettings:m,canvasSize:v,exportList:De,projectName:T,frustumSettings:ne,sceneBackgroundImg:st,backgroundMode:je};localStorage.setItem("securityCameraPlannerData",JSON.stringify(b))}catch(b){if(b.name==="QuotaExceededError"||b.name==="NS_ERROR_DOM_QUOTA_REACHED"){console.error("Storage full, trying to save without background image");try{const N={items:t,bgSettings:m,canvasSize:v,exportList:De,projectName:T};localStorage.setItem("securityCameraPlannerData",JSON.stringify(N))}catch(N){console.error("Still failed to save",N)}}else console.error("Failed to save state",b)}},1e3);return()=>clearTimeout(_)},[t,g,m,v,De,T,ne,st,je]);const zt=We.useRef(null),ut=We.useRef(null),Ee=(_,b=F)=>b?Math.round(_/S)*S:_,O=_=>_.points&&_.points.length>=3?_.points:sf(_.width,_.height),Re=(_,b)=>{const N=b*Math.PI/180,B=Math.cos(N),k=Math.sin(N);return{x:_.x*B-_.y*k,y:_.x*k+_.y*B}},Pe=(_,b)=>{const N=Re(_,b.rotation);return{x:b.x+N.x,y:b.y+N.y}},nt=(_,b)=>{const N=_.x-b.x,B=_.y-b.y;return Re({x:N,y:B},-b.rotation)},Qe=_=>t.find(b=>b.type==="building"&&b.id===_),Tt=_=>O(_).map(N=>Pe(N,_)),wt=_=>{var b;if(((b=_.mount)==null?void 0:b.type)==="building"&&_.mount.buildingId){const N=Qe(_.mount.buildingId);if(!N)return{x:_.x,y:_.y};const B=Tt(N);if(B.length<2)return{x:_.x,y:_.y};const k=Yn(_.mount.edgeIndex??0,0,B.length-1),ce=(k+1)%B.length,J=B[k],ie=B[ce],pe=Yn(_.mount.edgeT??.5,0,1),Me={x:J.x+(ie.x-J.x)*pe,y:J.y+(ie.y-J.y)*pe},we=B.reduce((_e,ae)=>({x:_e.x+ae.x,y:_e.y+ae.y}),{x:0,y:0});B.length>0&&(we.x/=B.length,we.y/=B.length);const Ge={x:Me.x-we.x,y:Me.y-we.y},Ye=Math.hypot(Ge.x,Ge.y)||1,ue=3;return{x:Me.x+Ge.x/Ye*ue,y:Me.y+Ge.y/Ye*ue}}return{x:_.x,y:_.y}},on=_=>{let b=null;return t.forEach(N=>{if(N.type!=="building")return;const B=N,k=Tt(B);for(let ce=0;ce<k.length;ce+=1){const J=(ce+1)%k.length,ie=k[ce],pe=k[J],Me={x:pe.x-ie.x,y:pe.y-ie.y},we={x:_.x-ie.x,y:_.y-ie.y},Ge=Me.x*Me.x+Me.y*Me.y||1;let Ye=(we.x*Me.x+we.y*Me.y)/Ge;Ye=Yn(Ye,0,1);const ue={x:ie.x+Me.x*Ye,y:ie.y+Me.y*Ye},_e=Math.hypot(_.x-ue.x,_.y-ue.y);(!b||_e<b.distance)&&(b={buildingId:B.id,edgeIndex:ce,edgeT:Ye,distance:_e,point:ue})}}),b},xn=_=>{let b=null;return t.forEach(N=>{if(N.type!=="building")return;const B=N,k=Tt(B),ce={x:k.reduce((J,ie)=>J+ie.x,0)/k.length,y:k.reduce((J,ie)=>J+ie.y,0)/k.length};for(let J=0;J<k.length;J+=1){const ie=(J+1)%k.length,pe=k[J],Me=k[ie],we={x:Me.x-pe.x,y:Me.y-pe.y},Ge={x:_.x-pe.x,y:_.y-pe.y},Ye=we.x*we.x+we.y*we.y||1;let ue=(Ge.x*we.x+Ge.y*we.y)/Ye;ue=Yn(ue,0,1);const _e={x:pe.x+we.x*ue,y:pe.y+we.y*ue},ae=Math.hypot(_.x-_e.x,_.y-_e.y),Te={x:(pe.x+Me.x)/2,y:(pe.y+Me.y)/2},Be={x:Te.x-ce.x,y:Te.y-ce.y},it=Math.atan2(Be.y,Be.x)*(180/Math.PI);(!b||ae<b.distance)&&(b={buildingId:B.id,edgeIndex:J,edgeT:ue,distance:ae,point:_e,rotation:it})}}),b};v.width/2;const It=(_,b)=>{if(!me.current||I==="iso3d")return;const N=me.current.getScreenCTM();if(!N)return;const B=Ee((_.clientX-N.e)/N.a),k=Ee((_.clientY-N.f)/N.d);let ce;const J={id:va(),x:B,y:k,rotation:0};switch(b){case"add-camera":ce={...J,type:"camera",rotation:45,label:"Camera",description:"",fov:70,hFov:70,vFov:45,pitch:-15,height:60,aspect:16/9,mount:{type:"free",edgeT:.5,height:60},range:150,color:hi.camera[0],labelOffset:{x:0,y:30},connectorDashSize:3};break;case"add-building":ce={...J,type:"building",width:100,height:80,label:"Building",color:hi.building[0],points:sf(100,80)};break;case"add-tree":ce={...J,type:"tree",radius:25,color:hi.tree[0]};break;case"add-parking":ce={...J,type:"parking",width:30,height:50,color:hi.parking[0]};break;case"add-label":ce={...J,type:"label",text:"Label",fontSize:14,color:hi.label[0]};break;default:return}if(ce.type==="camera"){const ie=xn({x:B,y:k});if(ie&&ie.distance<100){const pe=ce;pe.x=ie.point.x,pe.y=ie.point.y,pe.rotation=ie.rotation;const Me=60;pe.mount={type:"building",buildingId:ie.buildingId,edgeIndex:ie.edgeIndex,edgeT:ie.edgeT,height:Me},pe.height=Me}Et(null)}e([...t,ce]),D(ce.id),Xe("select")},wn=_=>{const b={id:va(),type:"image",x:400,y:300,rotation:0,width:150,height:150,src:_,label:"Image",aspectRatioLocked:!0};e([...t,b]),D(b.id)},dt=(_,b)=>{e(t.map(N=>N.id===_?{...N,...b}:N))},Os=(_,b)=>{const N=t.find(B=>B.id===_);!N||N.type!=="camera"||dt(_,{mount:{...N.mount??{type:"free"},...b}})},Du=_=>{var B;const b=t.find(k=>k.id===_);if(!b||b.type!=="camera")return;const N=on(b);N&&dt(_,{x:N.point.x,y:N.point.y,mount:{type:"building",buildingId:N.buildingId,edgeIndex:N.edgeIndex,edgeT:N.edgeT,height:((B=b.mount)==null?void 0:B.height)??b.height??10}})},Oi=(_,b,N,B)=>{dt(_,{hFov:b,vFov:N,aspect:B,fov:b})},qo=(_,b,N)=>{const B=t.find(J=>J.id===_);if(!B||B.type!=="building")return;const k=O(B),ce=tC(k,b,N);dt(_,{width:b,height:N,points:ce})},Fs=_=>{const b=t.find(B=>B.id===_);if(!b||b.type!=="building")return;const N=nC(O(b));dt(_,{points:N})},Zo=(_,b)=>{const N=t.find(ce=>ce.id===_);if(!N||N.type!=="building")return;const B=nt(b,N),k=iC(O(N),B);dt(_,{points:k})},_l=_=>{const b=t.find(B=>B.id===_);if(!b||b.type!=="building")return;const N=O(b);N.length<=3||dt(_,{points:N.slice(0,-1)})},Uu=_=>{const b=t.find(N=>N.id===_);!b||b.type!=="building"||dt(_,{points:sf(b.width,b.height)})},ks=(_,b,N)=>{const B=t.find(ce=>ce.id===_);if(!B||B.type!=="image")return;if(!B.aspectRatioLocked){dt(_,{width:b??B.width,height:N??B.height});return}const k=B.width/B.height;b!==void 0?dt(_,{width:b,height:b/k}):N!==void 0&&dt(_,{width:N*k,height:N})},yl=_=>{e(t.filter(b=>b.id!==_)),He===_&&D(null)},P=()=>{t.length&&window.confirm("Clear all items from the canvas?")&&(e([]),D(null))},G=()=>{x({...m,x:0,y:0,width:v.width,height:v.height})},Z=()=>{if(!me.current)return;const{scale:_,padding:b,includeGrid:N,includeLegend:B,includeTitle:k}=j,ce=new Date().toLocaleString(),J=v.width,ie=v.height,pe=k?52:0,Me=B?90:0,we=J+b*2,Ge=ie+b*2+pe+Me,Ye="http://www.w3.org/2000/svg",ue=document.createElementNS(Ye,"svg");ue.setAttribute("xmlns",Ye),ue.setAttribute("width",`${we}`),ue.setAttribute("height",`${Ge}`),ue.setAttribute("viewBox",`0 0 ${we} ${Ge}`);const _e=document.createElementNS(Ye,"rect");if(_e.setAttribute("x","0"),_e.setAttribute("y","0"),_e.setAttribute("width",`${we}`),_e.setAttribute("height",`${Ge}`),_e.setAttribute("fill","#ffffff"),ue.appendChild(_e),k){const mt=document.createElementNS(Ye,"text");mt.setAttribute("x",`${b}`),mt.setAttribute("y",`${b+24}`),mt.setAttribute("font-size","20"),mt.setAttribute("font-weight","700"),mt.setAttribute("fill","#0f172a"),mt.textContent=T||"Security Camera Plan",ue.appendChild(mt);const At=document.createElementNS(Ye,"text");At.setAttribute("x",`${b}`),At.setAttribute("y",`${b+44}`),At.setAttribute("font-size","12"),At.setAttribute("fill","#64748b"),At.textContent=`Exported ${ce}`,ue.appendChild(At)}const ae=document.createElementNS(Ye,"g"),Te=b+pe;ae.setAttribute("transform",`translate(${b}, ${Te})`);const Be=me.current.cloneNode(!0);if(Be.removeAttribute("width"),Be.removeAttribute("height"),!N){const mt=Be.querySelector("#grid-bg");mt&&mt.remove()}for(;Be.childNodes.length>0;)ae.appendChild(Be.childNodes[0]);ue.appendChild(ae);const it=document.createElementNS(Ye,"rect");if(it.setAttribute("x",`${b-1}`),it.setAttribute("y",`${Te-1}`),it.setAttribute("width",`${J+2}`),it.setAttribute("height",`${ie+2}`),it.setAttribute("fill","none"),it.setAttribute("stroke","#e2e8f0"),it.setAttribute("stroke-width","2"),ue.appendChild(it),B){const mt=Te+ie+36,At=[{label:"Cameras",count:t.filter(Ft=>Ft.type==="camera").length,color:hi.camera[0]},{label:"Buildings",count:t.filter(Ft=>Ft.type==="building").length,color:hi.building[0]},{label:"Trees",count:t.filter(Ft=>Ft.type==="tree").length,color:hi.tree[0]},{label:"Parking",count:t.filter(Ft=>Ft.type==="parking").length,color:hi.parking[0]},{label:"Labels",count:t.filter(Ft=>Ft.type==="label").length,color:hi.label[0]}],St=document.createElementNS(Ye,"text");St.setAttribute("x",`${b}`),St.setAttribute("y",`${mt}`),St.setAttribute("font-size","12"),St.setAttribute("font-weight","600"),St.setAttribute("fill","#0f172a"),St.textContent="Legend",ue.appendChild(St),At.forEach((Ft,Ei)=>{const ns=b+Ei*150,Qi=document.createElementNS(Ye,"rect");Qi.setAttribute("x",`${ns}`),Qi.setAttribute("y",`${mt+14}`),Qi.setAttribute("width","10"),Qi.setAttribute("height","10"),Qi.setAttribute("rx","2"),Qi.setAttribute("fill",Ft.color),ue.appendChild(Qi);const er=document.createElementNS(Ye,"text");er.setAttribute("x",`${ns+16}`),er.setAttribute("y",`${mt+23}`),er.setAttribute("font-size","11"),er.setAttribute("fill","#475569"),er.textContent=`${Ft.label} (${Ft.count})`,ue.appendChild(er)})}const ct=document.createElement("canvas"),Ie=ct.getContext("2d");ct.width=we*_,ct.height=Ge*_,Ie&&Ie.scale(_,_);const bt=new XMLSerializer().serializeToString(ue),gt=new Image,Kt=new Blob([bt],{type:"image/svg+xml;charset=utf-8"}),Rt=URL.createObjectURL(Kt);gt.onload=()=>{if(Ie){Ie.fillStyle="#ffffff",Ie.fillRect(0,0,we,Ge),Ie.drawImage(gt,0,0);const mt=ct.toDataURL("image/png"),At=document.createElement("a");At.href=mt,At.download="security_plan.png",document.body.appendChild(At),At.click(),document.body.removeChild(At)}URL.revokeObjectURL(Rt)},gt.src=Rt},K=(_,b,N,B)=>{rt(k=>[...k,{id:crypto.randomUUID(),type:_,label:b,dataUrl:N,cameraId:B}])},q=_=>{var ct;const B=wt(_),k=((ct=_.mount)==null?void 0:ct.height)??_.height??10,ce=_.hFov??_.fov,J=_.pitch??-15,ie=_.range,pe=Nn.degToRad(_.rotation),Me=new Nc;Me.background=new xt("#87CEEB"),Me.fog=new Oa("#87CEEB",ie*.3,ie*1.2);const we=new Zn(ce,640/480,1,ie*2);we.position.set(B.x,k,B.y);const Ge=Nn.degToRad(J),Ye=new U(B.x+Math.cos(pe)*100,k+Math.tan(Ge)*100,B.y+Math.sin(pe)*100);we.lookAt(Ye),Me.add(new Qd(16777215,.5));const ue=new Jd(16777215,.7);ue.position.set(100,200,50),Me.add(ue);const _e=new $e(new pi(v.width*2,v.height*2),new un({color:"#6B8E23",roughness:.9}));if(_e.rotation.x=-Math.PI/2,_e.position.set(v.width/2,0,v.height/2),Me.add(_e),ut.current){const Ie=new Xd(ut.current);Ie.colorSpace=$t;const bt=new $e(new pi(m.width,m.height),new $i({map:Ie,transparent:!0,opacity:m.opacity}));bt.rotation.x=-Math.PI/2,bt.position.set(m.x+m.width/2,.1,m.y+m.height/2),Me.add(bt)}t.forEach(Ie=>{if(Ie.type==="building"){const bt=Ie,gt=O(bt),Kt=new ms(gt.map(At=>new Se(At.x,-At.y))),Rt=new Ba(Kt,{depth:60,bevelEnabled:!1});Rt.rotateX(-Math.PI/2);const mt=new $e(Rt,new un({color:bt.color,side:si}));mt.position.set(bt.x,0,bt.y),mt.rotation.y=-Nn.degToRad(bt.rotation),Me.add(mt)}if(Ie.type==="tree"){const bt=af(Ie);Me.add(bt)}if(Ie.type==="parking"){const bt=of(Ie);Me.add(bt)}});const ae=document.createElement("canvas");ae.width=640,ae.height=480;const Te=new Lc({canvas:ae,antialias:!0});Te.setSize(640,480),Te.render(Me,we);const Be=ae.getContext("2d");if(Be){Be.fillStyle="rgba(0,0,0,0.7)",Be.fillRect(0,0,640,30),Be.fillStyle="#fff",Be.font="bold 14px sans-serif",Be.fillText(`📷 ${_.label}`,10,20),Be.font="12px sans-serif",Be.fillStyle="#94a3b8";const Ie=`FOV: ${ce.toFixed(0)}° | Pitch: ${J}° | Range: ${ie}px`;Be.fillText(Ie,640-Be.measureText(Ie).width-10,20)}const it=ae.toDataURL("image/png");return Te.dispose(),it},Ue=()=>{if(!me.current)return;const _=new XMLSerializer().serializeToString(me.current),b=document.createElement("canvas");b.width=v.width*2,b.height=v.height*2;const N=b.getContext("2d");if(!N)return;const B=new Image,k=new Blob([_],{type:"image/svg+xml;charset=utf-8"}),ce=URL.createObjectURL(k);B.onload=()=>{N.scale(2,2),N.fillStyle="#f8fafc",N.fillRect(0,0,v.width,v.height),N.drawImage(B,0,0),K("plan","2D Plan View",b.toDataURL("image/png")),URL.revokeObjectURL(ce)},B.src=ce},Ze=_=>{const b=q(_);K("camera",`Camera: ${_.label}`,b,_.id)},tt=_=>{var B;const b=(B=_.target.files)==null?void 0:B[0];if(!b)return;const N=new FileReader;N.onload=k=>{var ie;const ce=(ie=k.target)==null?void 0:ie.result,J=new Image;J.onload=()=>{const pe=J.width/J.height,Me=pe>=1.8&&pe<=2.2;ot(ce),ke(Me?"panorama":"flat")},J.src=ce},N.readAsDataURL(b)},at=async()=>{if(De.length===0){alert("Add some views to the export list first!");return}const _=2,b=40,N=800,B=600,k=2,ce=Math.ceil(De.length/k),J=(N+b)*k+b,ie=120,pe=ie+(B+b+30)*ce+b,Me=document.createElement("canvas");Me.width=J*_,Me.height=pe*_;const we=Me.getContext("2d");if(!we)return;we.scale(_,_),we.fillStyle="#fff",we.fillRect(0,0,J,pe),we.fillStyle="#0f172a",we.font="bold 28px sans-serif",we.fillText(T||"Security Camera Plan",b,b+30),we.fillStyle="#64748b",we.font="14px sans-serif",we.fillText(`Exported: ${new Date().toLocaleString()} | ${De.length} view(s)`,b,b+55);const Ge=_e=>new Promise((ae,Te)=>{const Be=new Image;Be.onload=()=>ae(Be),Be.onerror=Te,Be.src=_e});for(let _e=0;_e<De.length;_e++){const ae=De[_e],Te=_e%k,Be=Math.floor(_e/k),it=b+Te*(N+b),ct=ie+Be*(B+b+30);we.fillStyle="#334155",we.font="bold 14px sans-serif",we.fillText(ae.label,it,ct+20),we.fillStyle="#f1f5f9",we.fillRect(it,ct+28,N,B),we.strokeStyle="#e2e8f0",we.lineWidth=2,we.strokeRect(it,ct+28,N,B);try{const Ie=await Ge(ae.dataUrl),bt=Ie.width/Ie.height,gt=N/B;let Kt,Rt,mt,At;bt>gt?(Kt=N,Rt=N/bt,mt=it,At=ct+28+(B-Rt)/2):(Rt=B,Kt=B*bt,mt=it+(N-Kt)/2,At=ct+28),we.drawImage(Ie,mt,At,Kt,Rt)}catch{we.fillStyle="#cbd5e1",we.font="16px sans-serif",we.fillText("Failed to load image",it+20,ct+100)}}const Ye=Me.toDataURL("image/png"),ue=document.createElement("a");ue.href=Ye,ue.download=`${(T||"security_plan").replace(/\s+/g,"_")}_report.png`,document.body.appendChild(ue),ue.click(),document.body.removeChild(ue)},ht=()=>{if(De.length===0){alert("Add some views to the export list first!");return}const _=window.open("","_blank");if(!_){alert("Please allow popups to export PDF");return}const b=`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${T||"Security Plan Report"}</title>
        <style>
          body { font-family: system-ui, -apple-system, sans-serif; padding: 40px; max-width: 1000px; margin: 0 auto; }
          h1 { color: #0f172a; margin-bottom: 5px; }
          .meta { color: #64748b; font-size: 14px; margin-bottom: 40px; border-bottom: 1px solid #e2e8f0; padding-bottom: 20px; }
          .item { margin-bottom: 40px; page-break-inside: avoid; }
          .item h3 { color: #334155; margin-bottom: 10px; }
          .item img { width: 100%; border: 1px solid #e2e8f0; border-radius: 4px; }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <h1>${T||"Security Camera Plan"}</h1>
        <div class="meta">Exported: ${new Date().toLocaleString()} | ${De.length} view(s)</div>
        
        ${De.map(N=>`
          <div class="item">
            <h3>${N.label}</h3>
            <img src="${N.dataUrl}" />
          </div>
        `).join("")}
        
        <script>
          window.onload = () => {
             setTimeout(() => {
               window.print();
             }, 500);
          }
        <\/script>
      </body>
      </html>
    `;_.document.write(b),_.document.close()},lt=()=>{const b=JSON.stringify({version:1,items:t,backgroundImg:g,bgSettings:m,canvasSize:v,gridSize:S,showGrid:A,snapToGrid:F,projectName:T,exportList:De},null,2),N=new Blob([b],{type:"application/json"}),B=URL.createObjectURL(N),k=document.createElement("a");k.href=B,k.download="security_project.json",document.body.appendChild(k),k.click(),document.body.removeChild(k),URL.revokeObjectURL(B)},ft=_=>{var B;const b=(B=_.target.files)==null?void 0:B[0];if(!b)return;const N=new FileReader;N.onload=k=>{var ce;try{const J=(ce=k.target)==null?void 0:ce.result,ie=JSON.parse(J);ie.items&&e(ie.items),ie.backgroundImg&&d(ie.backgroundImg),ie.bgSettings&&x(ie.bgSettings),ie.canvasSize&&y(ie.canvasSize),typeof ie.gridSize=="number"&&L(ie.gridSize),typeof ie.showGrid=="boolean"&&R(ie.showGrid),typeof ie.snapToGrid=="boolean"&&E(ie.snapToGrid),ie.projectName&&V(ie.projectName),ie.exportList&&rt(ie.exportList)}catch(J){console.error("Failed to load project file",J),alert("Invalid project file.")}},N.readAsText(b)},Zt=_=>{var N;const b=(N=_.target.files)==null?void 0:N[0];if(b){const B=new FileReader;B.onload=k=>{var ce;return d((ce=k.target)==null?void 0:ce.result)},B.readAsDataURL(b)}},Un=_=>{var N;const b=(N=_.target.files)==null?void 0:N[0];if(b){const B=new FileReader;B.onload=k=>{var ce;return wn((ce=k.target)==null?void 0:ce.result)},B.readAsDataURL(b)}},an=_=>{_.traverse(b=>{const N=b;N.geometry&&N.geometry.dispose(),N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.dispose()):N.material.dispose())}),_.clear()},ti=_=>{const b=document.createElement("canvas"),N=b.getContext("2d");if(!N)return null;const B=56,k=24;N.font=`${B}px Space Grotesk, sans-serif`;const ce=N.measureText(_);b.width=Math.ceil(ce.width+k*2),b.height=Math.ceil(B+k*1.6),N.font=`${B}px Space Grotesk, sans-serif`,N.fillStyle="rgba(15, 23, 42, 0.9)",N.textBaseline="middle",N.fillText(_,k,b.height/2);const J=new Xd(b);J.colorSpace=$t;const ie=new g_({map:J,transparent:!0}),pe=new P2(ie);return pe.scale.set(b.width/10,b.height/10,1),pe},Vt=(_,b,N,B)=>{const k=_.x,ce=_.y,J=b.x,ie=b.y,pe=N.x,Me=N.y,we=B.x,Ge=B.y,Ye=k-pe,ue=ce-Me,_e=we-pe,ae=Ge-Me,Te=-ie,Be=J,it=_e*Te+ae*Be;if(Math.abs(it)<1e-6)return null;const ct=(_e*ue-ae*Ye)/it,Ie=(Ye*Te+ue*Be)/it;return ct>=0&&Ie>=0&&Ie<=1?ct:null},pt=(_,b,N,B,k)=>{const ce=k.flatMap(Ge=>{if(Ge.type==="building"){const ue=Tt(Ge);return ue.length<2?[]:ue.map((_e,ae)=>[_e,ue[(ae+1)%ue.length]])}else if(Ge.type==="tree"){const Ye=Ge,ue=[],_e=8;for(let ae=0;ae<_e;ae++){const Te=ae/_e*Math.PI*2;ue.push({x:Ye.x+Ye.radius*Math.cos(Te),y:Ye.y+Ye.radius*Math.sin(Te)})}return ue.map((ae,Te)=>[ae,ue[(Te+1)%ue.length]])}return[]}),J=128,ie=(B-N/2)*(Math.PI/180),Me=N*(Math.PI/180)/(J-1),we=[];for(let Ge=0;Ge<J;Ge++){const Ye=ie+Ge*Me,ue={x:Math.cos(Ye),y:Math.sin(Ye)};let _e=b;for(const ae of ce){const Te=Vt(_,ue,ae[0],ae[1]);Te!==null&&Te<_e&&(_e=Te)}we.push({x:_e*ue.x,y:_e*ue.y})}return we},Ko=()=>{const _=H.current;if(!_)return;const{group:b,scene:N,renderer:B}=_;an(b);const k=Math.max(v.width,v.height)*2,ce=new pi(k,k),J=new un({color:592139,roughness:.95,metalness:0}),ie=new $e(ce,J);ie.rotation.x=-Math.PI/2,ie.position.set(v.width/2,-.5,v.height/2),ie.receiveShadow=!0,b.add(ie);const pe=new gA(k,Math.round(k/S),2565930,2565930);pe.position.set(v.width/2,.01,v.height/2),A&&b.add(pe);const Me=new $e(new pi(v.width,v.height),new un({color:1579035,roughness:.8,metalness:0}));Me.rotation.x=-Math.PI/2,Me.position.set(v.width/2,.02,v.height/2),Me.receiveShadow=!0,b.add(Me);const we=new mn,Ge=new Float32Array([0,.1,0,v.width,.1,0,v.width,.1,v.height,0,.1,v.height,0,.1,0]);we.setAttribute("position",new Si(Ge,3));const Ye=new x_(we,new Fa({color:9741240,linewidth:2}));if(b.add(Ye),g){const ue=new un({color:16777215,transparent:!0,opacity:m.opacity,roughness:.9});new gc().load(g,ae=>{ae.colorSpace=$t,ae.wrapS=oi,ae.wrapT=oi,ae.minFilter=Bn,ae.magFilter=Bn,ue.map=ae,ue.needsUpdate=!0,B.render(N,_.camera)});const _e=new $e(new pi(m.width,m.height),ue);_e.rotation.x=-Math.PI/2,_e.position.set(m.x+m.width/2,.08,m.y+m.height/2),_e.receiveShadow=!0,b.add(_e)}if(t.forEach(ue=>{var _e;if(ue.type==="building"){const ae=ue,Te=O(ae),Be=60,it=new ms(Te.map(Ft=>new Se(Ft.x,-Ft.y))),ct={depth:Be,bevelEnabled:!0,bevelThickness:2,bevelSize:1,bevelSegments:2},Ie=new Ba(it,ct);Ie.rotateX(-Math.PI/2);const bt=new un({color:ae.color,roughness:.6,metalness:.1}),gt=new $e(Ie,bt);gt.position.set(ae.x,0,ae.y),gt.rotation.y=-Nn.degToRad(ae.rotation),gt.castShadow=!0,gt.receiveShadow=!0,b.add(gt);const Kt=new un({color:rC(ae.color,-20),roughness:.7,metalness:.05}),Rt=new ms(Te.map(Ft=>new Se(Ft.x,-Ft.y))),mt=new fu(Rt);mt.rotateX(-Math.PI/2);const At=new $e(mt,Kt);At.position.set(ae.x,Be+.1,ae.y),At.rotation.y=-Nn.degToRad(ae.rotation),At.receiveShadow=!0,b.add(At);const St=ti(ae.label);St&&(St.position.set(ae.x,Be+15,ae.y),b.add(St))}if(ue.type==="parking"){const ae=of(ue);b.add(ae)}if(ue.type==="tree"){const ae=af(ue);b.add(ae)}if(ue.type==="camera"){const ae=ue,Te=wt(ae),Be=((_e=ae.mount)==null?void 0:_e.height)??ae.height??10,it=ae.pitch??0,ct=ae.hFov??ae.fov;ae.vFov??xa(ct,ae.aspect??16/9);const Ie=ae.range,bt=-Nn.degToRad(ae.rotation),gt=Nn.degToRad(it),Kt=new Or,Rt=new cn(14,10,10),mt=new un({color:"#1e293b",roughness:.3,metalness:.5}),At=new $e(Rt,mt);Kt.add(At);const St=new Ls(3.5,4,8,16);St.rotateZ(Math.PI/2);const Ft=new un({color:"#0f172a",roughness:.2,metalness:.7}),Ei=new $e(St,Ft);Ei.position.set(10,0,0),Kt.add(Ei);const ns=new yp(1.5,8,8),Qi=new $i({color:ae.color}),er=new $e(ns,Qi);er.position.set(-5,4,0),Kt.add(er),Kt.position.set(Te.x,Be,Te.y),Kt.rotation.y=bt,Kt.rotation.z=gt,b.add(Kt);const P_=new Ls(2,2.5,Be,8),L_=new un({color:"#475569",roughness:.6,metalness:.3}),zu=new $e(P_,L_);if(zu.position.set(Te.x,Be/2,Te.y),zu.castShadow=!0,b.add(zu),ne.visible){const N_=ne.showAll!==!1||ue.id===He,Hu=(ne.mode||"volume")==="volume";if(N_){const I_=2*Math.atan(Math.tan(Nn.degToRad(ct)/2)/1.33),kt=2*Math.tan(I_/2)*Ie,Bt=kt*1.33,D_=[0,0,0,Ie,kt/2,-Bt/2,Ie,-kt/2,-Bt/2,0,0,0,Ie,-kt/2,-Bt/2,Ie,-kt/2,Bt/2,0,0,0,Ie,-kt/2,Bt/2,Ie,kt/2,Bt/2,0,0,0,Ie,kt/2,Bt/2,Ie,kt/2,-Bt/2,Ie,-kt/2,Bt/2,Ie,-kt/2,-Bt/2,Ie,kt/2,-Bt/2,Ie,kt/2,Bt/2,Ie,-kt/2,Bt/2,Ie,kt/2,-Bt/2];if(Hu){const $n=new mn;$n.setAttribute("position",new Ot(D_,3)),$n.computeVertexNormals();const Bi=new $i({color:ne.useCameraColor?ae.color:ne.color,transparent:!0,opacity:ne.opacity,side:si,depthWrite:!1}),yr=new $e($n,Bi);yr.position.set(Te.x,Be,Te.y),yr.rotation.y=bt,yr.rotation.z=gt,b.add(yr);const is=[0,0,0,Ie,kt/2,-Bt/2,0,0,0,Ie,-kt/2,-Bt/2,0,0,0,Ie,-kt/2,Bt/2,0,0,0,Ie,kt/2,Bt/2,Ie,kt/2,-Bt/2,Ie,kt/2,Bt/2,Ie,kt/2,Bt/2,Ie,-kt/2,Bt/2,Ie,-kt/2,Bt/2,Ie,-kt/2,-Bt/2,Ie,-kt/2,-Bt/2,Ie,kt/2,-Bt/2],rs=new mn;rs.setAttribute("position",new Ot(is,3));const Hi=new ch(rs,new Fa({color:ne.useCameraColor?ae.color:ne.color,transparent:!0,opacity:ne.edgeOpacity}));Hi.position.set(Te.x,Be,Te.y),Hi.rotation.y=bt,Hi.rotation.z=gt,b.add(Hi)}const zi=[],ea=Nn.degToRad(ct)/2,wl=2*Math.atan(Math.tan(ea)/1.33)/2;if([{h:ea,v:wl},{h:-ea,v:wl},{h:-ea,v:-wl},{h:ea,v:-wl}].forEach($n=>{const Bi=new U(Math.cos($n.v)*Math.cos($n.h),Math.sin($n.v),Math.cos($n.v)*Math.sin($n.h)).normalize(),yr=new xl(0,bt,gt,"YZX");if(Bi.applyEuler(yr),Bi.y<-.01){const is=-Be/Bi.y,rs=Te.x+Bi.x*is,Hi=Te.y+Bi.z*is;zi.push(new U(rs,.15,Hi))}}),zi.length>=3){const $n=new ms;$n.moveTo(zi[0].x-Te.x,-(zi[0].z-Te.y));for(let Sr=1;Sr<zi.length;Sr++)$n.lineTo(zi[Sr].x-Te.x,-(zi[Sr].z-Te.y));$n.closePath();const Bi=new fu($n);Bi.rotateX(-Math.PI/2);const yr=new $i({color:ae.color,transparent:!0,opacity:Hu?.1:.4,side:si}),is=new $e(Bi,yr);is.position.set(Te.x,.12,Te.y),b.add(is);const rs=new mn,Hi=[];zi.forEach((Sr,F_)=>{Hi.push(Sr.x,Sr.y,Sr.z);const Vu=zi[(F_+1)%zi.length];Hi.push(Vu.x,Vu.y,Vu.z)}),rs.setAttribute("position",new Ot(Hi,3));const U_=new Fa({color:ae.color,transparent:!0,opacity:Hu?.4:.8}),O_=new ch(rs,U_);b.add(O_)}}}const Bu=ti(ae.label);Bu&&(Bu.position.set(Te.x,Be+18,Te.y),b.add(Bu))}if(ue.type==="image"){const ae=ue,Te=new pi(ae.width,ae.height),Be=new un({color:16777215,roughness:.9});new gc().load(ae.src,ct=>{ct.colorSpace=$t,ct.minFilter=Bn,Be.map=ct,Be.needsUpdate=!0,B.render(N,_.camera)});const it=new $e(Te,Be);it.rotation.x=-Math.PI/2,it.position.set(ae.x,.25,ae.y),it.rotation.z=Nn.degToRad(ae.rotation),b.add(it)}if(ue.type==="label"){const ae=ue,Te=ti(ae.text);Te&&(Te.position.set(ae.x,8,ae.y),b.add(Te))}}),_.target.set(v.width/2,0,v.height/2),_.orbit&&(_.orbit.distance=Math.max(v.width,v.height)*.85),_.orbit){const{azimuth:ue,polar:_e,distance:ae}=_.orbit,Te=_.target.x+Math.cos(ue)*Math.cos(_e)*ae,Be=_.target.z+Math.sin(ue)*Math.cos(_e)*ae,it=_.target.y+Math.sin(_e)*ae;_.camera.position.set(Te,it,Be),_.camera.lookAt(_.target)}B.render(N,_.camera)},Xt=()=>{const _=H.current;if(!_)return;const b=_.renderer.domElement.toDataURL("image/png"),N=new Date().toLocaleString();ve(B=>[{id:va(),dataUrl:b,createdAt:N},...B])},Fi=(_,b)=>{const N=document.createElement("a");N.href=_,N.download=b,document.body.appendChild(N),N.click(),document.body.removeChild(N)},Sl=()=>{const _=H.current;if(!_)return;const b=_.renderer.domElement.toDataURL("image/png");Fi(b,"security_plan_3d.png")},ts=()=>{const _=H.current;if(_){if(_.zoom=1,_.target.set(v.width/2,0,v.height/2),_.orbit){_.orbit.azimuth=Math.PI/4,_.orbit.polar=Math.PI/4,_.orbit.distance=Math.max(v.width,v.height)*.9;const{azimuth:b,polar:N,distance:B}=_.orbit,k=_.target.x+Math.cos(b)*Math.cos(N)*B,ce=_.target.z+Math.sin(b)*Math.cos(N)*B,J=_.target.y+Math.sin(N)*B;_.camera.position.set(k,J,ce)}_.camera.zoom=_.zoom,_.camera.updateProjectionMatrix(),_.camera.lookAt(_.target),_.renderer.render(_.scene,_.camera)}};We.useEffect(()=>{const _=N=>{var k,ce,J,ie;const B=N.target;if(!(B&&(B.tagName==="INPUT"||B.tagName==="TEXTAREA"))){if(N.key===" "&&(Le(!0),et.current=!0),(N.key==="Delete"||N.key==="Backspace")&&He&&(N.preventDefault(),yl(He),setTimeout(()=>f(),50)),N.ctrlKey){const pe=N.key.toLowerCase();if(pe==="z"&&(N.preventDefault(),N.shiftKey?p():h()),pe==="y"&&(N.preventDefault(),p()),pe==="s"&&(N.preventDefault(),lt()),pe==="g"&&(N.preventDefault(),R(Me=>!Me)),pe==="c"){if(((k=document.activeElement)==null?void 0:k.tagName)==="INPUT"||((ce=document.activeElement)==null?void 0:ce.tagName)==="TEXTAREA")return;if(He){const Me=t.find(we=>we.id===He);Me&&(i(Me),N.preventDefault())}}if(pe==="v"){if(((J=document.activeElement)==null?void 0:J.tagName)==="INPUT"||((ie=document.activeElement)==null?void 0:ie.tagName)==="TEXTAREA")return;const Me=r.current;if(Me){const we={...Me,id:va(),x:Me.x+20,y:Me.y+20};e(Ge=>[...Ge,we]),D(we.id),setTimeout(()=>f(),50),N.preventDefault()}}}N.key==="Escape"&&(D(null),Xe("select"),Ve(!1))}};window.addEventListener("keydown",_);const b=N=>{N.key===" "&&(Le(!1),et.current=!1)};return window.addEventListener("keyup",b),()=>{window.removeEventListener("keydown",_),window.removeEventListener("keyup",b)}},[t,He,lt]),We.useEffect(()=>{if(!H.current)return;const{scene:_,renderer:b,camera:N}=H.current;if(st)new gc().load(st,B=>{if(B.colorSpace=$t,je==="panorama"?B.mapping=ru:B.mapping=cp,_.background=B,je==="panorama")_.environment=B;else{const k=new Ua(b);_.environment=k.fromScene(new ef).texture,k.dispose()}b.render(_,N)});else{_.background=new xt("#09090b");const B=new Ua(b);_.environment=B.fromScene(new ef).texture,B.dispose(),b.render(_,N)}},[st,je]),We.useEffect(()=>{if(!w.current||H.current)return;const _=w.current,b=new Lc({antialias:!0,preserveDrawingBuffer:!0,alpha:!0,powerPreference:"high-performance"});b.setPixelRatio(Math.min(window.devicePixelRatio,2)),b.outputColorSpace=$t,b.shadowMap.enabled=!0,b.shadowMap.type=kx,b.toneMapping=Bx,b.toneMappingExposure=1,_.appendChild(b.domElement);const N=new Nc;N.background=new xt("#09090b"),N.fog=new Oa("#09090b",200,2e3);const B=new pp(-500,500,500,-500,.1,6e3),k=new Or;N.add(k);const ce=new Qd(16777215,.6);N.add(ce);const J=new Jd(16777215,.8);J.position.set(50,100,50),J.castShadow=!0,J.shadow.mapSize.width=2048,J.shadow.mapSize.height=2048,N.add(J);const ie={azimuth:Math.PI/5,polar:Math.PI/5,distance:Math.max(v.width,v.height)*.8},pe={scene:N,camera:B,renderer:b,group:k,target:new U(v.width/2,0,v.height/2),zoom:1,size:{width:1,height:1},orbit:ie};H.current=pe;const Me=()=>{const{width:ue,height:_e}=_.getBoundingClientRect();pe.size={width:ue,height:_e},b.setSize(ue,_e);const ae=ue/_e,Te=Math.max(v.width,v.height)*.7;B.left=-Te*ae,B.right=Te*ae,B.top=Te,B.bottom=-Te,B.zoom=pe.zoom,B.updateProjectionMatrix(),b.render(N,B)},we=()=>{const{azimuth:ue,polar:_e,distance:ae}=ie,Te=pe.target.x+Math.cos(ue)*Math.cos(_e)*ae,Be=pe.target.z+Math.sin(ue)*Math.cos(_e)*ae,it=pe.target.y+Math.sin(_e)*ae;B.position.set(Te,it,Be),B.lookAt(pe.target),b.render(N,B)},Ge=ue=>{const _e=ue.button===2&&!et.current,ae=ue.button===0||ue.button===1||et.current;if(!ae&&!_e)return;ue.preventDefault();const Te={x:ue.clientX,y:ue.clientY},Be=ct=>{const Ie=ct.clientX-Te.x,bt=ct.clientY-Te.y;if(Te.x=ct.clientX,Te.y=ct.clientY,_e)ie.azimuth-=Ie*.005,ie.polar=Yn(ie.polar-bt*.005,.1,Math.PI/2.1);else if(ae){const gt=Math.max(v.width,v.height)*.7/B.zoom/400;pe.target.x-=Ie*gt,pe.target.z+=bt*gt}we()},it=()=>{window.removeEventListener("pointermove",Be),window.removeEventListener("pointerup",it)};window.addEventListener("pointermove",Be),window.addEventListener("pointerup",it)},Ye=ue=>{ue.preventDefault();const _e=Yn(pe.zoom*(ue.deltaY>0?.9:1.1),.4,3.5);pe.zoom=_e,B.zoom=pe.zoom,B.updateProjectionMatrix(),we()};return b.domElement.addEventListener("pointerdown",Ge),b.domElement.addEventListener("wheel",Ye,{passive:!1}),b.domElement.addEventListener("contextmenu",ue=>ue.preventDefault()),we(),Me(),window.addEventListener("resize",Me),()=>{b.domElement.removeEventListener("pointerdown",Ge),b.domElement.removeEventListener("wheel",Ye),window.removeEventListener("resize",Me),b.dispose(),_.removeChild(b.domElement),H.current=null}},[v.height,v.width,I]),We.useEffect(()=>{I==="iso3d"&&Ko()},[t,g,m,v,S,A,I,ne,st,je,He]),We.useEffect(()=>{I!=="plan"&&Ve(!1)},[I]),We.useEffect(()=>{if(g){const _=new Image;_.src=g,_.onload=()=>{ut.current=_}}else ut.current=null},[g]),We.useEffect(()=>{var Kt;if(!be||!zt.current||!He)return;const _=t.find(Rt=>Rt.id===He),b=(_==null?void 0:_.type)==="camera"?_:null;if(!b)return;const N=zt.current,B=N.width,k=N.height,ce=wt(b),J=((Kt=b.mount)==null?void 0:Kt.height)??b.height??10,ie=b.hFov??b.fov,pe=b.pitch??-15,Me=b.range,we=Nn.degToRad(b.rotation),Ge=B/k,Ye=2*Math.atan(Math.tan(Nn.degToRad(ie)/2)/Ge),ue=Nn.radToDeg(Ye),_e=new Nc;_e.background=new xt("#09090b"),_e.fog=new Oa("#09090b",Me*.3,Me*1.2);const ae=new Zn(ue,Ge,1,Me*2);ae.position.set(ce.x,J,ce.y);const Te=Nn.degToRad(pe),Be=new U(ce.x+Math.cos(we)*100,J+Math.tan(Te)*100,ce.y+Math.sin(we)*100);ae.lookAt(Be),_e.add(new Qd(16777215,.5));const it=new Jd(16777215,.7);it.position.set(100,200,50),_e.add(it);const ct=new $e(new pi(v.width*2,v.height*2),new un({color:"#6B8E23",roughness:.9}));if(ct.rotation.x=-Math.PI/2,ct.position.set(v.width/2,0,v.height/2),_e.add(ct),ut.current){const Rt=new Xd(ut.current);Rt.colorSpace=$t;const mt=new $e(new pi(m.width,m.height),new $i({map:Rt,transparent:!0,opacity:m.opacity}));mt.rotation.x=-Math.PI/2,mt.position.set(m.x+m.width/2,.1,m.y+m.height/2),_e.add(mt)}t.forEach(Rt=>{if(Rt.type==="building"){const mt=Rt,At=O(mt),St=new ms(At.map(ns=>new Se(ns.x,-ns.y))),Ft=new Ba(St,{depth:60,bevelEnabled:!1});Ft.rotateX(-Math.PI/2);const Ei=new $e(Ft,new un({color:mt.color,side:si}));Ei.position.set(mt.x,0,mt.y),Ei.rotation.y=-Nn.degToRad(mt.rotation),_e.add(Ei)}Rt.type==="tree"&&_e.add(af(Rt)),Rt.type==="parking"&&_e.add(of(Rt))});const Ie=new Lc({canvas:N,antialias:!0});Ie.setSize(B,k);const bt=new Ua(Ie);_e.environment=bt.fromScene(new ef).texture,Ie.render(_e,ae),st&&new gc().load(st,Rt=>{_e.background=Rt,Ie.render(_e,ae)});const gt=N.getContext("2d");return gt&&(gt.fillStyle="rgba(0,0,0,0.7)",gt.fillRect(0,0,B,26),gt.fillStyle="#fff",gt.font="bold 11px sans-serif",gt.fillText(`📷 ${b.label}`,8,11),gt.font="10px sans-serif",gt.fillStyle="#94a3b8",gt.fillText(`FOV: ${ie.toFixed(0)}°×${ue.toFixed(0)}° | Pitch: ${pe}° | Range: ${Me}`,8,23),gt.fillStyle="#ef4444",gt.beginPath(),gt.arc(B-12,13,4,0,Math.PI*2),gt.fill(),gt.fillStyle="#fff",gt.font="9px sans-serif",gt.fillText("LIVE",B-42,16)),()=>{bt.dispose(),Ie.dispose()}},[He,t,be,m,v,st]);const _r=_=>{if(!me.current)return{x:0,y:0};const b=me.current.getScreenCTM();if(!b)return{x:0,y:0};const N=(_.clientX-b.e)/b.a,B=(_.clientY-b.f)/b.d;return{x:(N-z.x)/Y,y:(B-z.y)/Y}},Pt=(_,b,N="move",B)=>{if(Je!=="select"||I==="iso3d")return;_.stopPropagation();const k=t.find(pe=>pe.id===b);if(!k)return;D(b);const ce=_r(_);if(N==="move"&&He===b&&k.type==="building"){const Me=Tt(k);for(let we=0;we<Me.length;we++){const Ge=Me[we],Ye=Me[(we+1)%Me.length],ue={x:Ye.x-Ge.x,y:Ye.y-Ge.y},_e={x:ce.x-Ge.x,y:ce.y-Ge.y},ae=ue.x*ue.x+ue.y*ue.y||1,Te=Math.max(0,Math.min(1,(_e.x*ue.x+_e.y*ue.y)/ae)),Be={x:Ge.x+ue.x*Te,y:Ge.y+ue.y*Te};if(Math.sqrt((ce.x-Be.x)**2+(ce.y-Be.y)**2)<8){Zo(b,Be),setTimeout(()=>f(),50);return}}}const J=k.type==="camera"?wt(k):{x:k.x,y:k.y};let ie={...k};if(N==="fov"&&k.type==="camera"){const pe=ce.x-J.x,Me=ce.y-J.y,we=Math.atan2(Me,pe)*180/Math.PI,Ge=k.hFov??k.fov,Ye=k.rotation+(B==="left"?-Ge/2:Ge/2);ie={...k,fovHandleOffset:rf(we-Ye)}}oe({type:N,itemId:b,startMouse:ce,startVal:ie,variant:B,snap:F&&!_.altKey})},Ji=_=>{var k,ce;if(Je==="add-camera"&&I==="plan"){const J=_r(_),ie=xn(J);ie&&ie.distance<100?Et({buildingId:ie.buildingId,edgeIndex:ie.edgeIndex,edgeT:ie.edgeT,point:ie.point,rotation:ie.rotation}):Et(null)}else Ke&&Et(null);if(fe){const J=_.clientX-de.x,ie=_.clientY-de.y;$({x:de.panX+J,y:de.panY+ie});return}if(!re.itemId||!me.current)return;const b=_r(_),N=t.find(J=>J.id===re.itemId);if(!N)return;const B=N.type==="camera"?wt(N):{x:N.x,y:N.y};if(re.type==="move"){const J=b.x-re.startMouse.x,ie=b.y-re.startMouse.y,pe=re.startVal.x+J,Me=re.startVal.y+ie;if(N.type==="camera"&&((k=N.mount)==null?void 0:k.type)==="building"&&N.mount.buildingId){const we=Qe(N.mount.buildingId);if(we){const Ge=Tt(we);if(Ge.length>=2){const Ye=Yn(N.mount.edgeIndex??0,0,Ge.length-1),ue=(Ye+1)%Ge.length,_e=Ge[Ye],ae=Ge[ue],Te={x:ae.x-_e.x,y:ae.y-_e.y},Be={x:pe-_e.x,y:Me-_e.y},it=Te.x*Te.x+Te.y*Te.y||1;let ct=(Be.x*Te.x+Be.y*Te.y)/it;ct=Yn(ct,0,1);const Ie={x:_e.x+Te.x*ct,y:_e.y+Te.y*ct};dt(re.itemId,{x:Ie.x,y:Ie.y,mount:{...N.mount,edgeT:ct}});return}}}dt(re.itemId,{x:Ee(pe,re.snap),y:Ee(Me,re.snap)})}else if(re.type==="move-label"&&N.type==="camera"){const J=b.x-re.startMouse.x,ie=b.y-re.startMouse.y,pe=re.startVal.labelOffset||{x:0,y:30};dt(re.itemId,{labelOffset:{x:pe.x+J,y:pe.y+ie}})}else if(re.type==="rotate"){const J=b.x-B.x,ie=b.y-B.y,pe=Math.atan2(ie,J)*180/Math.PI;dt(re.itemId,{rotation:pe})}else if(re.type==="fov"&&N.type==="camera"){const J=b.x-B.x,ie=b.y-B.y,pe=Math.atan2(ie,J)*180/Math.PI,Me=((ce=re.startVal)==null?void 0:ce.fovHandleOffset)??0,we=rf(pe-Me),Ge=rf(we-N.rotation),Ye=re.variant==="left"?-Ge:Ge;if(Ye<=0)return;const ue=Yn(Ye*2,10,180);dt(re.itemId,{fov:ue,hFov:ue})}else if(re.type==="range"&&N.type==="camera"){const J=b.x-B.x,ie=b.y-B.y,pe=Math.sqrt(J*J+ie*ie);dt(re.itemId,{range:Math.max(pe,50)})}else if(re.type==="vertex"&&N.type==="building"){const J=nt(b,N),ie=O(N),pe=typeof re.variant=="string"?parseInt(re.variant,10):Number(re.variant);if(!Number.isNaN(pe)&&ie[pe]){const Me={x:Ee(J.x,re.snap),y:Ee(J.y,re.snap)},we=ie.map((Ge,Ye)=>Ye===pe?Me:Ge);dt(re.itemId,{points:we})}}},Jo=()=>{re.type&&f(),Q(!1),oe({type:null,itemId:null,startMouse:{x:0,y:0},startVal:null,snap:!1})};We.useEffect(()=>{hh.enabled=!0,f()},[]);const Xn=_=>{if(I!=="iso3d"&&!fe){if(he&&He){const b=t.find(N=>N.id===He);if(b&&b.type==="building"){const N=_r(_);Zo(He,N),Ve(!1);return}}(_.target===me.current||_.target.tagName==="image"||_.target.id==="grid-bg")&&(Je!=="select"?It(_,Je):D(null))}},Qo=_=>{(_.button===1||_.button===2||Fe||_.button===0&&Je==="select")&&(_.preventDefault(),Q(!0),Ce({x:_.clientX,y:_.clientY,panX:z.x,panY:z.y}))},Ou=_=>{if(_.preventDefault(),!me.current)return;const b=me.current.getScreenCTM();if(!b)return;const N=(_.clientX-b.e)/b.a,B=(_.clientY-b.f)/b.d,k=(N-z.x)/Y,ce=(B-z.y)/Y,J=Yn(Y*(_.deltaY>0?.9:1.1),.3,3.5),ie=N-k*J,pe=B-ce*J;le(J),$({x:ie,y:pe})},xe=t.find(_=>_.id===He),Lt=(xe==null?void 0:xe.type)==="camera"?xe:null,ki=(Lt==null?void 0:Lt.aspect)??16/9,zs=Lt?Lt.hFov??Lt.fov:70,Fu=Lt?Lt.vFov??xa(zs,ki):45,wp=Lt?oC(zs,Fu):90,Ml=t.filter(_=>_.type==="building"),ku=((bp=Lt==null?void 0:Lt.mount)==null?void 0:bp.type)??"free",Bs=(Ap=Lt==null?void 0:Lt.mount)!=null&&Ap.buildingId?Qe(Lt.mount.buildingId):Ml[0],R_=Bs?O(Bs).length:0,Ep=((Cp=Lt==null?void 0:Lt.mount)==null?void 0:Cp.edgeIndex)??0,Tp=((Rp=Lt==null?void 0:Lt.mount)==null?void 0:Rp.edgeT)??.5;return M.jsxs("div",{className:"relative h-screen bg-zinc-950 font-sans text-slate-200 overflow-hidden w-full selection:bg-indigo-500/30",children:[X&&M.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",children:M.jsxs("div",{className:"bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden text-slate-200",children:[M.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-white/10",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-400",children:"Export"}),M.jsx("h2",{className:"text-lg font-semibold text-slate-200",children:"Export Plan"})]}),M.jsx("button",{onClick:()=>te(!1),className:"p-2 text-slate-400 hover:text-slate-600",children:M.jsx(tf,{className:"w-5 h-5"})})]}),M.jsxs("div",{className:"px-5 py-4 space-y-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Title"}),M.jsx("input",{type:"text",value:T,onChange:_=>V(_.target.value),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:["Export List (",De.length," items)"]}),De.length>0&&M.jsx("button",{onClick:()=>rt([]),className:"text-xs text-red-500 hover:text-red-700",children:"Clear All"})]}),De.length===0?M.jsxs("div",{className:"bg-slate-50 rounded-lg p-4 text-center text-slate-400 text-sm",children:[M.jsx("p",{children:"No views added yet"}),M.jsx("p",{className:"text-xs mt-1",children:'Use "Add to Export" buttons while working'})]}):M.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-48 overflow-y-auto",children:De.map(_=>M.jsxs("div",{className:"relative group bg-zinc-800 rounded-lg overflow-hidden border border-white/5",children:[M.jsx("div",{className:"aspect-video w-full overflow-hidden",children:M.jsx("img",{src:_.dataUrl,alt:_.label,className:"w-full h-full object-cover"})}),M.jsxs("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2",children:[M.jsx("a",{href:_.dataUrl,download:`${_.label.replace(/[^a-z0-9]/gi,"_").toLowerCase()}.png`,className:"p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-lg",title:"Download Image",onClick:b=>b.stopPropagation(),children:M.jsx(y0,{className:"w-4 h-4"})}),M.jsx("button",{onClick:()=>rt(b=>b.filter(N=>N.id!==_.id)),className:"p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg",title:"Remove",children:M.jsx(tf,{className:"w-4 h-4"})})]}),M.jsx("div",{className:"p-2 bg-zinc-800 absolute bottom-0 inset-x-0",children:M.jsx("p",{className:"text-[10px] text-slate-300 truncate font-medium",children:_.label})})]},_.id))})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Scale"}),M.jsx("input",{type:"number",min:"1",max:"5",value:j.scale,onChange:_=>ee({...j,scale:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Padding"}),M.jsx("input",{type:"number",min:"0",max:"200",value:j.padding,onChange:_=>ee({...j,padding:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Include"}),M.jsx("div",{className:"flex flex-wrap gap-2",children:[{key:"includeGrid",label:"Grid"},{key:"includeLegend",label:"Legend"},{key:"includeTitle",label:"Title Block"}].map(_=>{const b=j[_.key];return M.jsx("button",{onClick:()=>ee({...j,[_.key]:!b}),className:`px-3 py-1 rounded-full text-xs font-semibold border ${b?"bg-emerald-100 border-emerald-200 text-emerald-700":"bg-white border-slate-200 text-slate-400"}`,children:_.label},_.key)})})]}),M.jsx("p",{className:"text-xs text-slate-400",children:'Tip: Add views using "Add to Export" buttons, then export a client report.'})]}),M.jsxs("div",{className:"px-5 py-4 border-t border-white/10 bg-slate-50 flex flex-wrap justify-end gap-2",children:[M.jsx("button",{onClick:()=>te(!1),className:"px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-800",children:"Cancel"}),M.jsx("button",{onClick:()=>{Z(),te(!1)},className:"px-4 py-2 text-sm font-semibold bg-slate-600 hover:bg-slate-700 text-white rounded-lg",children:"Plan Only"}),M.jsx("button",{onClick:()=>{at(),te(!1)},disabled:De.length===0,className:`px-3 py-2 text-sm font-semibold rounded-lg ${De.length===0?"bg-slate-200 text-slate-400 cursor-not-allowed":"bg-emerald-600 hover:bg-emerald-700 text-white"}`,children:"Export PNG"}),M.jsx("button",{onClick:()=>{ht(),te(!1)},disabled:De.length===0,className:`px-3 py-2 text-sm font-semibold rounded-lg ${De.length===0?"bg-slate-200 text-slate-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 text-white"}`,children:"Export PDF"})]})]})}),he&&I==="plan"&&He&&M.jsx("div",{className:"absolute left-1/2 bottom-10 -translate-x-1/2 rounded-full bg-emerald-600/90 px-4 py-2 text-xs font-semibold text-white shadow-xl z-50 backdrop-blur-md",children:"Click an edge to insert a vertex."}),M.jsxs("div",{className:"absolute left-4 top-4 bottom-4 w-14 flex flex-col items-center py-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 gap-3 ring-1 ring-white/5",children:[M.jsx("div",{className:"flex flex-col gap-2 w-full px-2",children:[{mode:"select",icon:OA,label:"Select"},{mode:"add-camera",icon:vc,label:"Camera"},{mode:"add-building",icon:GA,label:"Building"},{mode:"add-tree",icon:XA,label:"Tree"},{mode:"add-parking",icon:MA,label:"Parking"},{mode:"add-label",icon:YA,label:"Label"}].map(_=>M.jsx("button",{onClick:()=>Je===_.mode?Xe("select"):Xe(_.mode),title:_.label,className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${Je===_.mode?"bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 scale-105":"text-slate-400 hover:text-white hover:bg-white/10"}`,children:M.jsx(_.icon,{className:"w-5 h-5"})},_.mode))}),M.jsx("div",{className:"w-8 h-px bg-white/10 my-1"}),M.jsx("div",{className:"flex flex-col gap-2 w-full px-2",children:M.jsx("button",{onClick:()=>W(I==="plan"?"iso3d":"plan"),className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${I==="iso3d"?"bg-indigo-600 text-white shadow-lg":"text-slate-400 hover:text-white hover:bg-white/10"}`,title:"Toggle 3D View",children:M.jsx(CA,{className:"w-5 h-5"})})}),M.jsxs("div",{className:"mt-auto flex flex-col gap-2 w-full px-2",children:[M.jsx("button",{onClick:h,className:"w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all",title:"Undo",children:M.jsx(ZA,{className:"w-5 h-5"})}),M.jsx("button",{onClick:p,className:"w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all",title:"Redo",children:M.jsx(zA,{className:"w-5 h-5"})})]})]}),M.jsxs("div",{className:"absolute top-4 left-24 right-4 lg:right-[22rem] h-14 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-40 flex items-center px-4 justify-between ring-1 ring-white/5 transition-all duration-300",children:[M.jsxs("div",{className:"flex items-center gap-4",children:[M.jsxs("h1",{className:"text-lg font-bold text-slate-200 tracking-tight flex items-center gap-2",children:[M.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500",children:M.jsx(vc,{className:"w-5 h-5"})}),T]}),M.jsx("div",{className:"h-6 w-px bg-white/10 mx-2"}),M.jsxs("div",{className:"flex items-center gap-1",children:[M.jsx("button",{onClick:()=>{var _;return(_=Ne.current)==null?void 0:_.click()},className:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors",title:"Load Project",children:M.jsx(TA,{className:"w-5 h-5"})}),M.jsx("button",{onClick:lt,className:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors",title:"Save Project",children:M.jsx(HA,{className:"w-5 h-5"})})]})]}),M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("input",{type:"file",ref:se,className:"hidden",accept:"image/*",onChange:Zt}),M.jsx("input",{type:"file",ref:qe,className:"hidden",accept:"image/*",onChange:Un}),M.jsx("input",{type:"file",ref:Ne,className:"hidden",accept:".json",onChange:ft}),M.jsx("input",{type:"file",ref:C,className:"hidden",accept:"image/*,.hdr",onChange:tt}),M.jsxs("button",{onClick:()=>{var _;return(_=se.current)==null?void 0:_.click()},className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",children:[M.jsx(JA,{className:"w-4 h-4"}),M.jsx("span",{children:"Map"})]}),M.jsxs("button",{onClick:()=>{var _;return(_=qe.current)==null?void 0:_.click()},className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",children:[M.jsx(S0,{className:"w-4 h-4"}),M.jsx("span",{children:"Image"})]}),M.jsxs("button",{onClick:Ue,className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",title:"Add Current View",children:[M.jsx(M0,{className:"w-4 h-4"}),M.jsx("span",{className:"hidden sm:inline",children:"Add View"})]}),M.jsxs("button",{onClick:()=>te(!0),className:"flex items-center gap-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-lg shadow-indigo-500/20 transition-all",children:[M.jsx(y0,{className:"w-4 h-4"}),M.jsx("span",{children:"Export"})]})]})]}),M.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[M.jsx("div",{className:"w-full h-full relative overflow-auto bg-zinc-950 flex items-center justify-center pt-20 pl-24 pr-80 pb-6 custom-scrollbar",children:M.jsx("div",{className:"shadow-2xl bg-zinc-900 relative ring-1 ring-white/10 rounded-lg overflow-hidden",children:I==="plan"?M.jsxs("svg",{ref:me,width:v.width,height:v.height,viewBox:`0 0 ${v.width} ${v.height}`,className:`bg-white block ${Je==="select"?"cursor-default":"cursor-crosshair"}`,onMouseMove:Ji,onMouseUp:Jo,onMouseDown:Qo,onWheel:Ou,onClick:Xn,xmlns:"http://www.w3.org/2000/svg",children:[M.jsx("defs",{children:M.jsx("pattern",{id:"smallGrid",width:S,height:S,patternUnits:"userSpaceOnUse",children:M.jsx("path",{d:`M ${S} 0 L 0 0 0 ${S}`,fill:"none",stroke:"#333333",strokeWidth:"1"})})}),M.jsxs("g",{transform:`translate(${z.x}, ${z.y}) scale(${Y})`,children:[A&&I==="plan"&&M.jsx("rect",{id:"grid-bg",width:"100%",height:"100%",fill:"url(#smallGrid)"}),g&&I==="plan"&&M.jsx("image",{href:g,x:m.x,y:m.y,width:m.width,height:m.height,preserveAspectRatio:"none",opacity:m.opacity,className:"pointer-events-none"}),t.map(_=>{var N,B;const b=He===_.id;if(_.type==="building"||_.type==="parking"){const k=_,ce=_.type==="parking";if(!ce){const J=_,ie=O(J);return M.jsxs("g",{transform:`translate(${J.x}, ${J.y}) rotate(${J.rotation})`,onMouseDown:pe=>Pt(pe,J.id,"move"),onClick:pe=>pe.stopPropagation(),className:"cursor-move",opacity:re.itemId===J.id&&re.type==="move"?.8:1,children:[M.jsx("polygon",{points:ie.map(pe=>`${pe.x},${pe.y}`).join(" "),fill:J.color,stroke:b?"#059669":"#334155",strokeWidth:b?3:1}),M.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",pointerEvents:"none",className:"font-bold select-none",children:J.label}),b&&ie.map((pe,Me)=>M.jsx("circle",{cx:pe.x,cy:pe.y,r:"5",fill:"#ffffff",stroke:"#059669",strokeWidth:"2",className:"cursor-pointer",onMouseDown:we=>Pt(we,J.id,"vertex",String(Me))},`${J.id}-vertex-${Me}`))]},J.id)}return M.jsxs("g",{transform:`translate(${k.x}, ${k.y}) rotate(${k.rotation})`,onMouseDown:J=>Pt(J,k.id,"move"),onClick:J=>{he||J.stopPropagation()},className:"cursor-move",opacity:re.itemId===k.id&&re.type==="move"?.8:1,children:[M.jsx("rect",{x:-k.width/2,y:-k.height/2,width:k.width,height:k.height,fill:k.color,stroke:b?"#3b82f6":ce?"#94a3b8":"#334155",strokeWidth:b?3:1,strokeDasharray:ce?"4":"0"}),ce&&M.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"#94a3b8",fontSize:"16",fontWeight:"bold",pointerEvents:"none",transform:"rotate(-90)",children:"P"}),!ce&&M.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",pointerEvents:"none",className:"font-bold select-none",children:k.label})]},k.id)}if(_.type==="tree"){const k=_;return M.jsxs("g",{transform:`translate(${k.x}, ${k.y})`,onMouseDown:ce=>Pt(ce,k.id,"move"),onClick:ce=>ce.stopPropagation(),className:"cursor-move",children:[M.jsx("circle",{r:k.radius,fill:k.color,fillOpacity:"0.6",stroke:b?"#3b82f6":k.color,strokeWidth:b?2:0}),M.jsx("circle",{r:k.radius*.5,fill:"black",fillOpacity:"0.1"})]},k.id)}if(_.type==="label"){const k=_;return M.jsx("text",{x:k.x,y:k.y,fontSize:k.fontSize,fill:b?"#3b82f6":k.color,fontWeight:"bold",textAnchor:"middle",className:"cursor-move select-none",onMouseDown:ce=>Pt(ce,k.id,"move"),onClick:ce=>ce.stopPropagation(),style:{textShadow:"0px 1px 2px rgba(255,255,255,0.8)"},children:k.text},k.id)}if(_.type==="image"){const k=_;return M.jsx("g",{transform:`translate(${k.x}, ${k.y}) rotate(${k.rotation})`,onMouseDown:ce=>Pt(ce,k.id,"move"),onClick:ce=>ce.stopPropagation(),className:"cursor-move",children:M.jsx("image",{href:k.src,x:-k.width/2,y:-k.height/2,width:k.width,height:k.height,style:{outline:b?"2px solid #3b82f6":"none"}})},k.id)}if(_.type==="camera"){const k=_,ce=wt(k),J=k.range,ie=k.hFov??k.fov,pe=(k.rotation-ie/2)*(Math.PI/180),Me=(k.rotation+ie/2)*(Math.PI/180),we=J*Math.cos(pe),Ge=J*Math.sin(pe),Ye=J*Math.cos(Me),ue=J*Math.sin(Me),_e=40,ae=k.rotation*(Math.PI/180),Te=_e*Math.cos(ae),Be=_e*Math.sin(ae),it=((N=k.labelOffset)==null?void 0:N.x)??0,ct=((B=k.labelOffset)==null?void 0:B.y)??30;k.connectorDashSize;const Ie=t.filter(St=>St.type==="building"),bt=pt(ce,J,ie,k.rotation,Ie),gt=t.filter(St=>St.type==="building"||St.type==="tree"),Kt=pt(ce,J,ie,k.rotation,gt),Rt=St=>{let Ft="M 0 0 ";return St.forEach(Ei=>{Ft+=`L ${Ei.x} ${Ei.y} `}),Ft+"Z"},mt=Rt(bt),At=Rt(Kt);return M.jsxs("g",{transform:`translate(${ce.x}, ${ce.y})`,onClick:St=>St.stopPropagation(),children:[M.jsxs("g",{onMouseDown:St=>Pt(St,k.id,"move"),className:"cursor-move",children:[M.jsxs("defs",{children:[M.jsxs("mask",{id:`mask-${k.id}`,children:[M.jsx("rect",{x:-J,y:-J,width:J*2,height:J*2,fill:"white"}),M.jsx("path",{d:At,fill:"black"})]}),M.jsxs("radialGradient",{id:`grad-blue-${k.id}`,cx:"0",cy:"0",r:J,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"50%",stopColor:k.color,stopOpacity:"0.2"}),M.jsx("stop",{offset:"100%",stopColor:k.color,stopOpacity:"0"})]}),M.jsxs("radialGradient",{id:`grad-blue-stroke-${k.id}`,cx:"0",cy:"0",r:J,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"80%",stopColor:k.color,stopOpacity:"1"}),M.jsx("stop",{offset:"100%",stopColor:k.color,stopOpacity:"0"})]}),M.jsxs("radialGradient",{id:`grad-yellow-${k.id}`,cx:"0",cy:"0",r:J,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"50%",stopColor:"#fde047",stopOpacity:"0.3"}),M.jsx("stop",{offset:"100%",stopColor:"#fde047",stopOpacity:"0"})]}),M.jsxs("radialGradient",{id:`grad-yellow-stroke-${k.id}`,cx:"0",cy:"0",r:J,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"80%",stopColor:"#eab308",stopOpacity:"1"}),M.jsx("stop",{offset:"100%",stopColor:"#eab308",stopOpacity:"0"})]})]}),M.jsx("path",{d:mt,fill:`url(#grad-yellow-${k.id})`,stroke:`url(#grad-yellow-stroke-${k.id})`,strokeWidth:"1",strokeDasharray:"4,4",pointerEvents:"none",mask:`url(#mask-${k.id})`}),M.jsx("path",{d:At,fill:`url(#grad-blue-${k.id})`,stroke:`url(#grad-blue-stroke-${k.id})`,strokeWidth:"1",pointerEvents:"none"}),M.jsxs("g",{transform:`rotate(${k.rotation})`,children:[M.jsx("rect",{x:"-10",y:"-8",width:"20",height:"16",rx:"4",fill:b?"#3b82f6":"#1e293b"}),M.jsx("circle",{cx:"0",cy:"0",r:"4",fill:k.color}),M.jsx("rect",{x:"10",y:"-4",width:"6",height:"8",fill:"#475569"})]})]}),b&&M.jsxs(M.Fragment,{children:[M.jsx("line",{x1:"0",y1:"0",x2:Te,y2:Be,stroke:"white",strokeWidth:"2",strokeDasharray:"3,3"}),M.jsx("circle",{cx:Te,cy:Be,r:"7",fill:"#3b82f6",stroke:"white",strokeWidth:"2",className:"cursor-crosshair",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:St=>Pt(St,k.id,"rotate")}),M.jsx("circle",{cx:we,cy:Ge,r:"6",fill:k.color,stroke:"white",strokeWidth:"2",className:"cursor-ew-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:St=>Pt(St,k.id,"fov","left")}),M.jsx("circle",{cx:Ye,cy:ue,r:"6",fill:k.color,stroke:"white",strokeWidth:"2",className:"cursor-ew-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:St=>Pt(St,k.id,"fov","right")}),M.jsx("circle",{cx:J*Math.cos(ae),cy:J*Math.sin(ae),r:"6",fill:k.color,stroke:"white",strokeWidth:"2",className:"cursor-ns-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:St=>Pt(St,k.id,"range")})]}),M.jsxs("g",{transform:`translate(${it}, ${ct})`,onMouseDown:St=>Pt(St,k.id,"move-label"),className:"cursor-move hover:opacity-80 transition-opacity",children:[(Math.abs(it)>10||Math.abs(ct-30)>10)&&M.jsx("line",{x1:-it,y1:-ct,x2:"0",y2:"0",stroke:"white",strokeWidth:"2",strokeDasharray:"6,4",style:{filter:"drop-shadow(0 0 2px rgba(0,0,0,0.8))"}}),M.jsx("rect",{x:"-50",y:"-10",width:"100",height:"20",rx:"4",fill:"rgba(255,255,255,0.9)",stroke:b?"#3b82f6":"transparent",strokeWidth:"1"}),M.jsx("text",{textAnchor:"middle",dy:"4",fontSize:"10",fill:"#334155",fontWeight:"bold",pointerEvents:"none",className:"select-none",children:k.label})]})]},k.id)}return null}),Ke&&Je==="add-camera"&&M.jsxs("g",{transform:`translate(${Ke.point.x}, ${Ke.point.y})`,className:"pointer-events-none",opacity:.6,children:[M.jsx("path",{d:(()=>{const N=(Ke.rotation-35)*(Math.PI/180),B=(Ke.rotation+70/2)*(Math.PI/180),k=100*Math.cos(N),ce=100*Math.sin(N),J=100*Math.cos(B),ie=100*Math.sin(B);return`M 0 0 L ${k} ${ce} A 100 100 0 0 1 ${J} ${ie} Z`})(),fill:"#3b82f6",fillOpacity:"0.2",stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"4,4"}),M.jsxs("g",{transform:`rotate(${Ke.rotation})`,children:[M.jsx("rect",{x:"-10",y:"-8",width:"20",height:"16",rx:"4",fill:"#3b82f6"}),M.jsx("circle",{cx:"0",cy:"0",r:"4",fill:"white"}),M.jsx("rect",{x:"10",y:"-4",width:"6",height:"8",fill:"#1e40af"})]}),M.jsx("text",{y:"-20",textAnchor:"middle",fill:"#3b82f6",fontSize:"11",fontWeight:"bold",className:"select-none",children:"Click to place"})]}),Je==="add-camera"&&t.filter(_=>_.type==="building").map(_=>{const b=_,N=Tt(b);return N.map((B,k)=>{const ce=N[(k+1)%N.length],J=(Ke==null?void 0:Ke.buildingId)===b.id&&(Ke==null?void 0:Ke.edgeIndex)===k;return M.jsx("line",{x1:B.x,y1:B.y,x2:ce.x,y2:ce.y,stroke:J?"#3b82f6":"#94a3b8",strokeWidth:J?4:2,strokeDasharray:J?"0":"6,4",className:"pointer-events-none transition-all",opacity:J?1:.5},`edge-highlight-${b.id}-${k}`)})}),t.map(_=>{var b,N;if(_.type==="camera"){const B=_,k=wt(B),ce=((b=B.labelOffset)==null?void 0:b.x)??0,J=((N=B.labelOffset)==null?void 0:N.y)??30,ie=He===B.id;return M.jsx("g",{transform:`translate(${k.x}, ${k.y})`,style:{pointerEvents:"none"},children:M.jsxs("g",{transform:`translate(${ce}, ${J})`,onMouseDown:pe=>{pe.stopPropagation(),Pt(pe,B.id,"move-label")},className:"cursor-move hover:opacity-80 transition-opacity",style:{pointerEvents:"auto"},children:[(Math.abs(ce)>10||Math.abs(J-30)>10)&&M.jsx("line",{x1:-ce,y1:-J,x2:"0",y2:"0",stroke:"white",strokeWidth:"2",strokeDasharray:"6,4",style:{filter:"drop-shadow(0 0 2px rgba(0,0,0,0.8))"}}),M.jsx("rect",{x:"-50",y:"-10",width:"100",height:"20",rx:"4",fill:"rgba(255,255,255,0.9)",stroke:ie?"#3b82f6":"transparent",strokeWidth:"1"}),M.jsx("text",{textAnchor:"middle",dy:"4",fontSize:"10",fill:"#334155",fontWeight:"bold",pointerEvents:"none",className:"select-none",children:B.label})]})},`label-overlay-${B.id}`)}return null})]})]}):M.jsxs("div",{className:"relative flex-1",style:{minWidth:v.width,minHeight:v.height},children:[M.jsx("div",{ref:w,className:"absolute inset-0"}),M.jsxs("div",{className:"absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none",children:[M.jsx("div",{className:"rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-semibold text-slate-300 shadow border border-white/10 pointer-events-auto",children:"Drag to pan · Right-click to rotate · Scroll to zoom"}),M.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[M.jsxs("button",{onClick:()=>{var _;return(_=C.current)==null?void 0:_.click()},className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors flex items-center gap-1",children:[M.jsx(S0,{className:"w-3 h-3"}),"Set 3D BG"]}),M.jsx("button",{onClick:Xt,className:"px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/20 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/30 shadow-sm transition-colors",children:"Take Snapshot"}),M.jsx("button",{onClick:Sl,className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"Export View"}),M.jsx("button",{onClick:()=>{var _;return rt([...De,{id:va(),type:"3d",label:"3D View",dataUrl:((_=H.current)==null?void 0:_.renderer.domElement.toDataURL("image/png"))||""}])},className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"+ Add to Export"}),M.jsx("button",{onClick:ts,className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"Reset View"})]})]})]})})}),Lt&&be&&M.jsxs("div",{className:"absolute bottom-4 right-96 w-80 bg-zinc-900/90 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/10 z-40 ring-1 ring-black/50",children:[M.jsxs("div",{className:"flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/5",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(vc,{className:"w-4 h-4 text-emerald-400"}),M.jsxs("span",{className:"text-sm font-medium text-slate-200 truncate",children:[Lt.label," View"]})]}),M.jsx("button",{onClick:()=>Oe(!1),className:"p-1 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors",children:M.jsx(tf,{className:"w-4 h-4"})})]}),M.jsx("canvas",{ref:zt,width:320,height:180,className:"w-full"}),M.jsxs("div",{className:"px-3 py-2 bg-white/5 text-xs text-slate-400 flex items-center justify-between border-t border-white/5",children:[M.jsxs("div",{className:"flex gap-3",children:[M.jsxs("span",{children:["H-FOV: ",(Lt.hFov??Lt.fov).toFixed(0),"°"]}),M.jsxs("span",{children:["V-FOV: ",(Lt.vFov??45).toFixed(0),"°"]}),M.jsxs("span",{children:["Range: ",Lt.range]})]}),M.jsxs("button",{onClick:()=>Ze(Lt),className:"px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded flex items-center gap-1",children:[M.jsx(M0,{className:"w-3 h-3"}),"Export"]})]})]}),Lt&&!be&&M.jsxs("button",{onClick:()=>Oe(!0),className:"absolute bottom-4 right-96 px-4 py-2 bg-slate-800 text-white rounded-lg shadow-lg hover:bg-slate-700 transition-colors z-40 flex items-center gap-2",children:[M.jsx(vc,{className:"w-4 h-4"}),M.jsx("span",{className:"text-sm font-medium",children:"Show Camera View"})]}),M.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-80 bg-zinc-900/90 backdrop-blur-xl border-l border-white/10 overflow-y-auto hidden lg:block shadow-2xl z-40 custom-scrollbar",children:xe?M.jsxs("div",{className:"p-6 flex flex-col gap-6",children:[M.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[M.jsxs("h2",{className:"font-bold text-lg text-slate-200 capitalize",children:["Edit ",xe.type]}),M.jsx("button",{onClick:()=>yl(xe.id),className:"text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors",children:M.jsx(w0,{className:"w-5 h-5"})})]}),xe.type!=="label"&&M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Rotation"}),M.jsxs("span",{children:[Math.round(xe.rotation),"deg"]})]}),M.jsx("input",{type:"range",min:"0",max:"360",value:xe.rotation,onChange:_=>dt(xe.id,{rotation:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),(xe.type==="camera"||xe.type==="building"||xe.type==="image"||xe.type==="label")&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:xe.type==="label"?"Text Content":"Label"}),M.jsx("input",{type:"text",value:xe.type==="label"?xe.text:xe.label,onChange:_=>dt(xe.id,xe.type==="label"?{text:_.target.value}:{label:_.target.value}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),xe.type==="label"&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Font Size"}),M.jsx("input",{type:"number",min:"8",max:"72",value:xe.fontSize,onChange:_=>dt(xe.id,{fontSize:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),(xe.type==="building"||xe.type==="parking")&&M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),M.jsx("input",{type:"number",value:xe.width,onChange:_=>xe.type==="building"?qo(xe.id,parseInt(_.target.value),xe.height):dt(xe.id,{width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),M.jsx("input",{type:"number",value:xe.height,onChange:_=>xe.type==="building"?qo(xe.id,xe.width,parseInt(_.target.value)):dt(xe.id,{height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),xe.type==="building"&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Building Shape"}),M.jsxs("div",{className:"flex flex-wrap gap-2",children:[M.jsx("button",{onClick:()=>Fs(xe.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Add Vertex"}),M.jsx("button",{onClick:()=>Ve(!0),className:`px-3 py-1 rounded-full border text-xs ${he?"border-emerald-300 bg-emerald-50 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"}`,children:"Insert on Edge"}),M.jsx("button",{onClick:()=>_l(xe.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Remove Vertex"}),M.jsx("button",{onClick:()=>Uu(xe.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Reset Rectangle"})]}),M.jsx("p",{className:"text-xs text-slate-400",children:"Drag the green nodes in plan view to sculpt the footprint. Click “Insert on Edge” then click any edge."})]}),xe.type==="image"&&M.jsxs("div",{className:"space-y-4",children:[M.jsxs("button",{onClick:()=>dt(xe.id,{aspectRatioLocked:!xe.aspectRatioLocked}),className:`flex items-center gap-2 text-sm font-medium w-full p-2 rounded border ${xe.aspectRatioLocked?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-slate-200 text-slate-400"}`,children:[xe.aspectRatioLocked?M.jsx(NA,{className:"w-4 h-4"}):M.jsx(PA,{className:"w-4 h-4"}),"Maintain Proportions"]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),M.jsx("input",{type:"number",value:Math.round(xe.width),onChange:_=>ks(xe.id,parseInt(_.target.value),void 0),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),M.jsx("input",{type:"number",value:Math.round(xe.height),onChange:_=>ks(xe.id,void 0,parseInt(_.target.value)),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Size Scale"}),M.jsx("input",{type:"range",min:"10",max:"600",value:Math.max(xe.width,xe.height),onChange:_=>{const b=parseInt(_.target.value);xe.width>=xe.height?ks(xe.id,b,void 0):ks(xe.id,void 0,b)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),xe.type==="tree"&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Canopy Size"}),M.jsx("input",{type:"range",min:"10",max:"100",value:xe.radius,onChange:_=>dt(xe.id,{radius:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),xe.type==="camera"&&M.jsxs("div",{className:"space-y-5",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Horizontal FOV"}),M.jsxs("span",{children:[Math.round(zs),"deg"]})]}),M.jsx("input",{type:"range",min:"10",max:"180",value:zs,onChange:_=>{const b=parseInt(_.target.value),N=xa(b,ki);Oi(xe.id,b,N,ki)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Vertical FOV"}),M.jsxs("span",{children:[Math.round(Fu),"deg"]})]}),M.jsx("input",{type:"range",min:"10",max:"180",value:Fu,onChange:_=>{const b=parseInt(_.target.value),N=aC(b,ki);Oi(xe.id,N,b,ki)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Diagonal FOV"}),M.jsxs("span",{children:[Math.round(wp),"deg"]})]}),M.jsx("input",{type:"range",min:"20",max:"180",value:wp,onChange:_=>{const b=parseInt(_.target.value),{h:N,v:B}=sC(b,ki);Oi(xe.id,N,B,ki)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Aspect Ratio"}),M.jsxs("select",{value:ki,onChange:_=>{const b=parseFloat(_.target.value),N=xa(zs,b);Oi(xe.id,zs,N,b)},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none",children:[M.jsx("option",{value:16/9,children:"16:9 (Widescreen)"}),M.jsx("option",{value:4/3,children:"4:3 (Standard)"}),M.jsx("option",{value:1,children:"1:1 (Square)"})]})]}),M.jsx("div",{className:"flex flex-wrap gap-2 text-xs",children:[{label:"Wide",value:120},{label:"Standard",value:80},{label:"Narrow",value:45}].map(_=>M.jsx("button",{onClick:()=>{const b=xa(_.value,ki);Oi(xe.id,_.value,b,ki)},className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50",children:_.label},_.label))}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Range"}),M.jsxs("span",{children:[Math.round(xe.range),"px"]})]}),M.jsx("input",{type:"range",min:"50",max:"800",value:xe.range,onChange:_=>dt(xe.id,{range:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Pitch"}),M.jsxs("span",{children:[Math.round(xe.pitch??0),"deg"]})]}),M.jsx("input",{type:"range",min:"-60",max:"30",value:xe.pitch??0,onChange:_=>dt(xe.id,{pitch:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Height"}),M.jsxs("span",{children:[Math.round(((Pp=xe.mount)==null?void 0:Pp.height)??xe.height??10),"ft"]})]}),M.jsx("input",{type:"range",min:"4",max:"40",value:((Lp=xe.mount)==null?void 0:Lp.height)??xe.height??10,onChange:_=>{var N;const b=parseInt(_.target.value);((N=xe.mount)==null?void 0:N.type)==="building"?Os(xe.id,{height:b}):dt(xe.id,{height:b})},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Mount"}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx("button",{onClick:()=>{var b;const _=wt(xe);dt(xe.id,{x:_.x,y:_.y,mount:{type:"free",height:((b=xe.mount)==null?void 0:b.height)??xe.height??10}})},className:`px-3 py-1 rounded-full text-xs font-semibold border ${ku==="free"?"bg-emerald-50 border-emerald-200 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"}`,children:"Free"}),M.jsx("button",{disabled:!Ml.length,onClick:()=>Du(xe.id),className:`px-3 py-1 rounded-full text-xs font-semibold border ${ku==="building"?"bg-emerald-50 border-emerald-200 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"} ${Ml.length?"":"opacity-50 cursor-not-allowed"}`,children:"Building"})]})]}),ku==="building"&&Bs&&M.jsxs("div",{className:"space-y-3",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Building"}),M.jsx("select",{value:Bs.id,onChange:_=>{var N;const b=_.target.value;dt(xe.id,{mount:{type:"building",buildingId:b,edgeIndex:0,edgeT:.5,height:((N=xe.mount)==null?void 0:N.height)??xe.height??10}})},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none",children:Ml.map(_=>M.jsx("option",{value:_.id,children:_.label},_.id))})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Edge"}),M.jsxs("span",{children:["#",Ep+1]})]}),M.jsx("input",{type:"range",min:"0",max:Math.max(R_-1,0),value:Ep,onChange:_=>{const b=parseInt(_.target.value);Os(xe.id,{edgeIndex:b,edgeT:.5,buildingId:Bs.id,type:"building"})},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Position Along Edge"}),M.jsxs("span",{children:[Math.round(Tp*100),"%"]})]}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:Tp,onChange:_=>Os(xe.id,{edgeT:parseFloat(_.target.value),buildingId:Bs.id,type:"building"}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Description"}),M.jsx("textarea",{value:xe.description,onChange:_=>dt(xe.id,{description:_.target.value}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none h-20"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Connector Dash Size"}),M.jsx("input",{type:"range",min:"1",max:"20",value:xe.connectorDashSize||3,onChange:_=>dt(xe.id,{connectorDashSize:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),xe.type!=="image"&&hi[xe.type]&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Color Code"}),M.jsx("div",{className:"flex flex-wrap gap-2",children:hi[xe.type].map(_=>M.jsx("button",{onClick:()=>dt(xe.id,{color:_}),className:`w-8 h-8 rounded-full border-2 transition-all ${xe.color===_?"border-slate-800 scale-110":"border-transparent hover:scale-105"}`,style:{backgroundColor:_}},_))})]})]}):M.jsxs("div",{className:"p-6 flex flex-col gap-6",children:[M.jsxs("div",{className:"flex items-center gap-2 border-b border-white/10 pb-4",children:[M.jsx(DA,{className:"w-5 h-5 text-slate-400"}),M.jsx("h2",{className:"font-bold text-lg text-slate-200",children:"Project Settings"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Project Name"}),M.jsx("input",{type:"text",value:T,onChange:_=>V(_.target.value),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsx("div",{className:"grid grid-cols-2 gap-4",children:[{label:"Cameras",value:t.filter(_=>_.type==="camera").length},{label:"Buildings",value:t.filter(_=>_.type==="building").length},{label:"Trees",value:t.filter(_=>_.type==="tree").length},{label:"Parking",value:t.filter(_=>_.type==="parking").length}].map(_=>M.jsxs("div",{className:"rounded-lg border border-white/10 bg-white/5 p-3",children:[M.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-400",children:_.label}),M.jsx("p",{className:"text-lg font-semibold text-slate-200",children:_.value})]},_.label))}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"Canvas"}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),M.jsx("input",{type:"number",min:"400",max:"3000",value:v.width,onChange:_=>y({...v,width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),M.jsx("input",{type:"number",min:"300",max:"3000",value:v.height,onChange:_=>y({...v,height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Grid Size"}),M.jsxs("span",{children:[S,"px"]})]}),M.jsx("input",{type:"range",min:"10",max:"80",value:S,onChange:_=>L(parseInt(_.target.value)),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm",children:[M.jsx("span",{className:"text-slate-600",children:"Show Grid"}),M.jsx("button",{onClick:()=>R(_=>!_),className:`px-3 py-1 rounded-full text-xs font-semibold ${A?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-400"}`,children:A?"On":"Off"})]}),M.jsxs("div",{className:"flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm",children:[M.jsx("span",{className:"text-slate-600",children:"Snap to Grid"}),M.jsx("button",{onClick:()=>E(_=>!_),className:`px-3 py-1 rounded-full text-xs font-semibold ${F?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-400"}`,children:F?"On":"Off"})]}),M.jsx("button",{onClick:P,className:"w-full py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50",children:"Clear Canvas"})]}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"Background Map"}),M.jsx("p",{className:"text-xs text-slate-400",children:"Adjust the uploaded map to align with the grid."}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Opacity"}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:m.opacity,onChange:_=>x({...m,opacity:parseFloat(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Width"}),M.jsx("input",{type:"number",value:m.width,onChange:_=>x({...m,width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Height"}),M.jsx("input",{type:"number",value:m.height,onChange:_=>x({...m,height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Offset X"}),M.jsx("input",{type:"number",value:m.x,onChange:_=>x({...m,x:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Offset Y"}),M.jsx("input",{type:"number",value:m.y,onChange:_=>x({...m,y:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsx("button",{onClick:G,className:"w-full py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50",children:"Fit Background to Canvas"})]}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"3D Visualization"}),M.jsxs("div",{className:"space-y-3 mb-4 p-3 bg-white/5 rounded-lg border border-white/10",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 block",children:"Environment Background"}),M.jsxs("div",{className:"flex gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10",children:[M.jsx("button",{onClick:()=>ke("flat"),className:`flex-1 px-2 py-1 text-[10px] font-medium rounded transition-colors ${je==="flat"?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-300"}`,children:"Flat Image"}),M.jsx("button",{onClick:()=>ke("panorama"),className:`flex-1 px-2 py-1 text-[10px] font-medium rounded transition-colors ${je==="panorama"?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-300"}`,children:"360° Panorama"})]}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx("button",{onClick:()=>{var _;return(_=C.current)==null?void 0:_.click()},className:"flex-1 py-1.5 px-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors",children:je==="panorama"?"Upload HDRI/Panorama":"Upload Background"}),st&&M.jsx("button",{onClick:()=>ot(null),className:"py-1.5 px-3 rounded-md bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/10 text-xs transition-colors",title:"Clear Background",children:M.jsx(w0,{className:"w-4 h-4"})})]}),je==="panorama"&&M.jsxs("p",{className:"text-[10px] text-slate-500",children:["Upload a 360° equirectangular image (2:1 aspect ratio) for immersive backgrounds. Get free HDRIs from ",M.jsx("a",{href:"https://polyhaven.com/hdris",target:"_blank",rel:"noopener noreferrer",className:"text-indigo-400 hover:underline",children:"Poly Haven"})]})]}),M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400",children:"Show Vision Cones"}),M.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[M.jsx("input",{type:"checkbox",className:"sr-only peer",checked:ne.visible,onChange:_=>_t({...ne,visible:_.target.checked})}),M.jsx("div",{className:"w-9 h-5 bg-slate-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"})]})]}),ne.visible&&M.jsxs("div",{className:"space-y-3 mt-2 pl-2 border-l border-white/5",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("label",{className:"text-xs text-slate-500",children:"Active Cam Only"}),M.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[M.jsx("input",{type:"checkbox",className:"sr-only peer",checked:ne.showAll===!1,onChange:_=>_t({...ne,showAll:!_.target.checked})}),M.jsx("div",{className:"w-7 h-4 bg-slate-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-indigo-600"})]})]}),M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("label",{className:"text-xs text-slate-500",children:"Style"}),M.jsxs("div",{className:"bg-white/5 p-0.5 rounded-lg flex text-[10px] font-medium border border-white/10",children:[M.jsx("button",{onClick:()=>_t({...ne,mode:"volume"}),className:`px-2 py-1 rounded transition-colors ${!ne.mode||ne.mode==="volume"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-300"}`,children:"Full"}),M.jsx("button",{onClick:()=>_t({...ne,mode:"floor"}),className:`px-2 py-1 rounded transition-colors ${ne.mode==="floor"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-300"}`,children:"Floor"})]})]}),M.jsxs("div",{className:"space-y-1",children:[M.jsxs("div",{className:"flex justify-between",children:[M.jsx("label",{className:"text-[10px] text-slate-500",children:"Opacity"}),M.jsxs("span",{className:"text-[10px] text-slate-400",children:[Math.round(ne.opacity*100),"%"]})]}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:ne.opacity,onChange:_=>_t({...ne,opacity:parseFloat(_.target.value)}),className:"w-full accent-indigo-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"})]}),M.jsxs("div",{className:"space-y-1",children:[M.jsxs("div",{className:"flex justify-between",children:[M.jsx("label",{className:"text-[10px] text-slate-500",children:"Edges"}),M.jsxs("span",{className:"text-[10px] text-slate-400",children:[Math.round(ne.edgeOpacity*100),"%"]})]}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:ne.edgeOpacity,onChange:_=>_t({...ne,edgeOpacity:parseFloat(_.target.value)}),className:"w-full accent-indigo-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"})]})]})]}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"3D Snapshots"}),I!=="iso3d"?M.jsx("p",{className:"text-xs text-slate-400",children:"Switch to Isometric view to capture snapshots."}):ge.length===0?M.jsx("p",{className:"text-xs text-slate-400",children:"No snapshots yet. Click “Snapshot” in the 3D view."}):M.jsx("div",{className:"grid grid-cols-2 gap-3",children:ge.map(_=>M.jsxs("div",{className:"rounded-lg border border-slate-200 overflow-hidden bg-white",children:[M.jsx("img",{src:_.dataUrl,alt:"Snapshot",className:"w-full h-24 object-cover"}),M.jsxs("div",{className:"p-2",children:[M.jsx("p",{className:"text-[10px] text-slate-400",children:_.createdAt}),M.jsx("button",{onClick:()=>Fi(_.dataUrl,`security_snapshot_${_.id}.png`),className:"mt-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700",children:"Export"})]})]},_.id))})]})]})})]})]})}const C_=document.getElementById("root");if(!C_)throw new Error("Root element not found");Ox(C_).render(M.jsx(ey.StrictMode,{children:M.jsx(lC,{})}));
