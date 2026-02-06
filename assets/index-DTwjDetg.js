(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Z_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var F0={exports:{}},Au={},k0={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=Symbol.for("react.element"),K_=Symbol.for("react.portal"),J_=Symbol.for("react.fragment"),Q_=Symbol.for("react.strict_mode"),ey=Symbol.for("react.profiler"),ty=Symbol.for("react.provider"),ny=Symbol.for("react.context"),iy=Symbol.for("react.forward_ref"),ry=Symbol.for("react.suspense"),sy=Symbol.for("react.memo"),oy=Symbol.for("react.lazy"),Wp=Symbol.iterator;function ay(t){return t===null||typeof t!="object"?null:(t=Wp&&t[Wp]||t["@@iterator"],typeof t=="function"?t:null)}var z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B0=Object.assign,H0={};function Qo(t,e,n){this.props=t,this.context=e,this.refs=H0,this.updater=n||z0}Qo.prototype.isReactComponent={};Qo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function V0(){}V0.prototype=Qo.prototype;function bh(t,e,n){this.props=t,this.context=e,this.refs=H0,this.updater=n||z0}var Th=bh.prototype=new V0;Th.constructor=bh;B0(Th,Qo.prototype);Th.isPureReactComponent=!0;var jp=Array.isArray,G0=Object.prototype.hasOwnProperty,Ah={current:null},W0={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)G0.call(e,i)&&!W0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:_l,type:t,key:s,ref:o,props:r,_owner:Ah.current}}function ly(t,e){return{$$typeof:_l,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ch(t){return typeof t=="object"&&t!==null&&t.$$typeof===_l}function cy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xp=/\/+/g;function ed(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cy(""+t.key):e.toString(36)}function Nc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _l:case K_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ed(o,0):i,jp(r)?(n="",t!=null&&(n=t.replace(Xp,"$&/")+"/"),Nc(r,e,n,"",function(c){return c})):r!=null&&(Ch(r)&&(r=ly(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Xp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",jp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ed(s,a);o+=Nc(s,e,n,l,r)}else if(l=ay(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ed(s,a++),o+=Nc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fl(t,e,n){if(t==null)return t;var i=[],r=0;return Nc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function uy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yn={current:null},Ic={transition:null},dy={ReactCurrentDispatcher:Yn,ReactCurrentBatchConfig:Ic,ReactCurrentOwner:Ah};function X0(){throw Error("act(...) is not supported in production builds of React.")}Ct.Children={map:Fl,forEach:function(t,e,n){Fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fl(t,function(){e++}),e},toArray:function(t){return Fl(t,function(e){return e})||[]},only:function(t){if(!Ch(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ct.Component=Qo;Ct.Fragment=J_;Ct.Profiler=ey;Ct.PureComponent=bh;Ct.StrictMode=Q_;Ct.Suspense=ry;Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dy;Ct.act=X0;Ct.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=B0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ah.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)G0.call(e,l)&&!W0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:_l,type:t.type,key:r,ref:s,props:i,_owner:o}};Ct.createContext=function(t){return t={$$typeof:ny,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ty,_context:t},t.Consumer=t};Ct.createElement=j0;Ct.createFactory=function(t){var e=j0.bind(null,t);return e.type=t,e};Ct.createRef=function(){return{current:null}};Ct.forwardRef=function(t){return{$$typeof:iy,render:t}};Ct.isValidElement=Ch;Ct.lazy=function(t){return{$$typeof:oy,_payload:{_status:-1,_result:t},_init:uy}};Ct.memo=function(t,e){return{$$typeof:sy,type:t,compare:e===void 0?null:e}};Ct.startTransition=function(t){var e=Ic.transition;Ic.transition={};try{t()}finally{Ic.transition=e}};Ct.unstable_act=X0;Ct.useCallback=function(t,e){return Yn.current.useCallback(t,e)};Ct.useContext=function(t){return Yn.current.useContext(t)};Ct.useDebugValue=function(){};Ct.useDeferredValue=function(t){return Yn.current.useDeferredValue(t)};Ct.useEffect=function(t,e){return Yn.current.useEffect(t,e)};Ct.useId=function(){return Yn.current.useId()};Ct.useImperativeHandle=function(t,e,n){return Yn.current.useImperativeHandle(t,e,n)};Ct.useInsertionEffect=function(t,e){return Yn.current.useInsertionEffect(t,e)};Ct.useLayoutEffect=function(t,e){return Yn.current.useLayoutEffect(t,e)};Ct.useMemo=function(t,e){return Yn.current.useMemo(t,e)};Ct.useReducer=function(t,e,n){return Yn.current.useReducer(t,e,n)};Ct.useRef=function(t){return Yn.current.useRef(t)};Ct.useState=function(t){return Yn.current.useState(t)};Ct.useSyncExternalStore=function(t,e,n){return Yn.current.useSyncExternalStore(t,e,n)};Ct.useTransition=function(){return Yn.current.useTransition()};Ct.version="18.3.1";k0.exports=Ct;var De=k0.exports;const fy=Z_(De);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy=De,py=Symbol.for("react.element"),my=Symbol.for("react.fragment"),gy=Object.prototype.hasOwnProperty,vy=hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xy={key:!0,ref:!0,__self:!0,__source:!0};function $0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)gy.call(e,i)&&!xy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:py,type:t,key:s,ref:o,props:r,_owner:vy.current}}Au.Fragment=my;Au.jsx=$0;Au.jsxs=$0;F0.exports=Au;var M=F0.exports,Y0={exports:{}},hi={},q0={exports:{}},Z0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var q=B.length;B.push(Y);e:for(;0<q;){var ue=q-1>>>1,pe=B[ue];if(0<r(pe,Y))B[ue]=Y,B[q]=pe,q=ue;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var Y=B[0],q=B.pop();if(q!==Y){B[0]=q;e:for(var ue=0,pe=B.length,te=pe>>>1;ue<te;){var de=2*(ue+1)-1,Ne=B[de],He=de+1,Oe=B[He];if(0>r(Ne,q))He<pe&&0>r(Oe,Ne)?(B[ue]=Oe,B[He]=q,ue=He):(B[ue]=Ne,B[de]=q,ue=de);else if(He<pe&&0>r(Oe,q))B[ue]=Oe,B[He]=q,ue=He;else break e}}return Y}function r(B,Y){var q=B.sortIndex-Y.sortIndex;return q!==0?q:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,v=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(B){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=B)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function S(B){if(y=!1,x(B),!v)if(n(l)!==null)v=!0,X(L);else{var Y=n(c);Y!==null&&ne(S,Y.startTime-B)}}function L(B,Y){v=!1,y&&(y=!1,d(k),k=-1),p=!0;var q=h;try{for(x(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||B&&!G());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,h=f.priorityLevel;var pe=ue(f.expirationTime<=Y);Y=t.unstable_now(),typeof pe=="function"?f.callback=pe:f===n(l)&&i(l),x(Y)}else i(l);f=n(l)}if(f!==null)var te=!0;else{var de=n(c);de!==null&&ne(S,de.startTime-Y),te=!1}return te}finally{f=null,h=q,p=!1}}var A=!1,P=null,k=-1,b=5,T=-1;function G(){return!(t.unstable_now()-T<b)}function $(){if(P!==null){var B=t.unstable_now();T=B;var Y=!0;try{Y=P(!0,B)}finally{Y?ie():(A=!1,P=null)}}else A=!1}var ie;if(typeof m=="function")ie=function(){m($)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,j=I.port2;I.port1.onmessage=$,ie=function(){j.postMessage(null)}}else ie=function(){g($,0)};function X(B){P=B,A||(A=!0,ie())}function ne(B,Y){k=g(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,X(L))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var q=h;h=Y;try{return B()}finally{h=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=h;h=B;try{return Y()}finally{h=q}},t.unstable_scheduleCallback=function(B,Y,q){var ue=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ue+q:ue):q=ue,B){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=q+pe,B={id:u++,callback:Y,priorityLevel:B,startTime:q,expirationTime:pe,sortIndex:-1},q>ue?(B.sortIndex=q,e(c,B),n(l)===null&&B===n(c)&&(y?(d(k),k=-1):y=!0,ne(S,q-ue))):(B.sortIndex=pe,e(l,B),v||p||(v=!0,X(L))),B},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(B){var Y=h;return function(){var q=h;h=Y;try{return B.apply(this,arguments)}finally{h=q}}}})(Z0);q0.exports=Z0;var _y=q0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy=De,fi=_y;function we(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K0=new Set,qa={};function Bs(t,e){Vo(t,e),Vo(t+"Capture",e)}function Vo(t,e){for(qa[t]=e,t=0;t<e.length;t++)K0.add(e[t])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xf=Object.prototype.hasOwnProperty,Sy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$p={},Yp={};function My(t){return xf.call(Yp,t)?!0:xf.call($p,t)?!1:Sy.test(t)?Yp[t]=!0:($p[t]=!0,!1)}function wy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ey(t,e,n,i){if(e===null||typeof e>"u"||wy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ln[t]=new qn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ln[e]=new qn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ln[t]=new qn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ln[t]=new qn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ln[t]=new qn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ln[t]=new qn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ln[t]=new qn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ln[t]=new qn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ln[t]=new qn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rh=/[\-:]([a-z])/g;function Ph(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rh,Ph);Ln[e]=new qn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rh,Ph);Ln[e]=new qn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rh,Ph);Ln[e]=new qn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ln[t]=new qn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ln.xlinkHref=new qn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ln[t]=new qn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lh(t,e,n,i){var r=Ln.hasOwnProperty(e)?Ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ey(e,n,r,i)&&(n=null),i||r===null?My(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Tr=yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kl=Symbol.for("react.element"),_o=Symbol.for("react.portal"),yo=Symbol.for("react.fragment"),Nh=Symbol.for("react.strict_mode"),_f=Symbol.for("react.profiler"),J0=Symbol.for("react.provider"),Q0=Symbol.for("react.context"),Ih=Symbol.for("react.forward_ref"),yf=Symbol.for("react.suspense"),Sf=Symbol.for("react.suspense_list"),Dh=Symbol.for("react.memo"),Or=Symbol.for("react.lazy"),ev=Symbol.for("react.offscreen"),qp=Symbol.iterator;function ua(t){return t===null||typeof t!="object"?null:(t=qp&&t[qp]||t["@@iterator"],typeof t=="function"?t:null)}var sn=Object.assign,td;function Aa(t){if(td===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);td=e&&e[1]||""}return`
`+td+t}var nd=!1;function id(t,e){if(!t||nd)return"";nd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{nd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Aa(t):""}function by(t){switch(t.tag){case 5:return Aa(t.type);case 16:return Aa("Lazy");case 13:return Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 2:case 15:return t=id(t.type,!1),t;case 11:return t=id(t.type.render,!1),t;case 1:return t=id(t.type,!0),t;default:return""}}function Mf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yo:return"Fragment";case _o:return"Portal";case _f:return"Profiler";case Nh:return"StrictMode";case yf:return"Suspense";case Sf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Q0:return(t.displayName||"Context")+".Consumer";case J0:return(t._context.displayName||"Context")+".Provider";case Ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dh:return e=t.displayName||null,e!==null?e:Mf(t.type)||"Memo";case Or:e=t._payload,t=t._init;try{return Mf(t(e))}catch{}}return null}function Ty(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mf(e);case 8:return e===Nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ay(t){var e=tv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zl(t){t._valueTracker||(t._valueTracker=Ay(t))}function nv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=tv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function $c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wf(t,e){var n=e.checked;return sn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=rs(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iv(t,e){e=e.checked,e!=null&&Lh(t,"checked",e,!1)}function Ef(t,e){iv(t,e);var n=rs(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bf(t,e.type,n):e.hasOwnProperty("defaultValue")&&bf(t,e.type,rs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bf(t,e,n){(e!=="number"||$c(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ca=Array.isArray;function Do(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+rs(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Tf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(we(91));return sn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(we(92));if(Ca(n)){if(1<n.length)throw Error(we(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rs(n)}}function rv(t,e){var n=rs(e.value),i=rs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Bl,ov=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Bl=Bl||document.createElement("div"),Bl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Bl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var La={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cy=["Webkit","ms","Moz","O"];Object.keys(La).forEach(function(t){Cy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),La[e]=La[t]})});function av(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||La.hasOwnProperty(t)&&La[t]?(""+e).trim():e+"px"}function lv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=av(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ry=sn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cf(t,e){if(e){if(Ry[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(we(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(we(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(we(61))}if(e.style!=null&&typeof e.style!="object")throw Error(we(62))}}function Rf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pf=null;function Uh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lf=null,Uo=null,Oo=null;function em(t){if(t=Ml(t)){if(typeof Lf!="function")throw Error(we(280));var e=t.stateNode;e&&(e=Nu(e),Lf(t.stateNode,t.type,e))}}function cv(t){Uo?Oo?Oo.push(t):Oo=[t]:Uo=t}function uv(){if(Uo){var t=Uo,e=Oo;if(Oo=Uo=null,em(t),e)for(t=0;t<e.length;t++)em(e[t])}}function dv(t,e){return t(e)}function fv(){}var rd=!1;function hv(t,e,n){if(rd)return t(e,n);rd=!0;try{return dv(t,e,n)}finally{rd=!1,(Uo!==null||Oo!==null)&&(fv(),uv())}}function Ka(t,e){var n=t.stateNode;if(n===null)return null;var i=Nu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(we(231,e,typeof n));return n}var Nf=!1;if(Sr)try{var da={};Object.defineProperty(da,"passive",{get:function(){Nf=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{Nf=!1}function Py(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Na=!1,Yc=null,qc=!1,If=null,Ly={onError:function(t){Na=!0,Yc=t}};function Ny(t,e,n,i,r,s,o,a,l){Na=!1,Yc=null,Py.apply(Ly,arguments)}function Iy(t,e,n,i,r,s,o,a,l){if(Ny.apply(this,arguments),Na){if(Na){var c=Yc;Na=!1,Yc=null}else throw Error(we(198));qc||(qc=!0,If=c)}}function Hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tm(t){if(Hs(t)!==t)throw Error(we(188))}function Dy(t){var e=t.alternate;if(!e){if(e=Hs(t),e===null)throw Error(we(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return tm(r),t;if(s===i)return tm(r),e;s=s.sibling}throw Error(we(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(we(189))}}if(n.alternate!==i)throw Error(we(190))}if(n.tag!==3)throw Error(we(188));return n.stateNode.current===n?t:e}function mv(t){return t=Dy(t),t!==null?gv(t):null}function gv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gv(t);if(e!==null)return e;t=t.sibling}return null}var vv=fi.unstable_scheduleCallback,nm=fi.unstable_cancelCallback,Uy=fi.unstable_shouldYield,Oy=fi.unstable_requestPaint,an=fi.unstable_now,Fy=fi.unstable_getCurrentPriorityLevel,Oh=fi.unstable_ImmediatePriority,xv=fi.unstable_UserBlockingPriority,Zc=fi.unstable_NormalPriority,ky=fi.unstable_LowPriority,_v=fi.unstable_IdlePriority,Cu=null,tr=null;function zy(t){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(Cu,t,void 0,(t.current.flags&128)===128)}catch{}}var Vi=Math.clz32?Math.clz32:Vy,By=Math.log,Hy=Math.LN2;function Vy(t){return t>>>=0,t===0?32:31-(By(t)/Hy|0)|0}var Hl=64,Vl=4194304;function Ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ra(a):(s&=o,s!==0&&(i=Ra(s)))}else o=n&~r,o!==0?i=Ra(o):s!==0&&(i=Ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vi(e),r=1<<n,i|=t[n],e&=~r;return i}function Gy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Gy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yv(){var t=Hl;return Hl<<=1,!(Hl&4194240)&&(Hl=64),t}function sd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vi(e),t[e]=n}function jy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ot=0;function Sv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mv,kh,wv,Ev,bv,Uf=!1,Gl=[],Xr=null,$r=null,Yr=null,Ja=new Map,Qa=new Map,zr=[],Xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function im(t,e){switch(t){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":Ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(e.pointerId)}}function fa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ml(e),e!==null&&kh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function $y(t,e,n,i,r){switch(e){case"focusin":return Xr=fa(Xr,t,e,n,i,r),!0;case"dragenter":return $r=fa($r,t,e,n,i,r),!0;case"mouseover":return Yr=fa(Yr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ja.set(s,fa(Ja.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Qa.set(s,fa(Qa.get(s)||null,t,e,n,i,r)),!0}return!1}function Tv(t){var e=ws(t.target);if(e!==null){var n=Hs(e);if(n!==null){if(e=n.tag,e===13){if(e=pv(n),e!==null){t.blockedOn=e,bv(t.priority,function(){wv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Pf=i,n.target.dispatchEvent(i),Pf=null}else return e=Ml(n),e!==null&&kh(e),t.blockedOn=n,!1;e.shift()}return!0}function rm(t,e,n){Dc(t)&&n.delete(e)}function Yy(){Uf=!1,Xr!==null&&Dc(Xr)&&(Xr=null),$r!==null&&Dc($r)&&($r=null),Yr!==null&&Dc(Yr)&&(Yr=null),Ja.forEach(rm),Qa.forEach(rm)}function ha(t,e){t.blockedOn===e&&(t.blockedOn=null,Uf||(Uf=!0,fi.unstable_scheduleCallback(fi.unstable_NormalPriority,Yy)))}function el(t){function e(r){return ha(r,t)}if(0<Gl.length){ha(Gl[0],t);for(var n=1;n<Gl.length;n++){var i=Gl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xr!==null&&ha(Xr,t),$r!==null&&ha($r,t),Yr!==null&&ha(Yr,t),Ja.forEach(e),Qa.forEach(e),n=0;n<zr.length;n++)i=zr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<zr.length&&(n=zr[0],n.blockedOn===null);)Tv(n),n.blockedOn===null&&zr.shift()}var Fo=Tr.ReactCurrentBatchConfig,Jc=!0;function qy(t,e,n,i){var r=Ot,s=Fo.transition;Fo.transition=null;try{Ot=1,zh(t,e,n,i)}finally{Ot=r,Fo.transition=s}}function Zy(t,e,n,i){var r=Ot,s=Fo.transition;Fo.transition=null;try{Ot=4,zh(t,e,n,i)}finally{Ot=r,Fo.transition=s}}function zh(t,e,n,i){if(Jc){var r=Of(t,e,n,i);if(r===null)md(t,e,i,Qc,n),im(t,i);else if($y(r,t,e,n,i))i.stopPropagation();else if(im(t,i),e&4&&-1<Xy.indexOf(t)){for(;r!==null;){var s=Ml(r);if(s!==null&&Mv(s),s=Of(t,e,n,i),s===null&&md(t,e,i,Qc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else md(t,e,i,null,n)}}var Qc=null;function Of(t,e,n,i){if(Qc=null,t=Uh(i),t=ws(t),t!==null)if(e=Hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qc=t,null}function Av(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fy()){case Oh:return 1;case xv:return 4;case Zc:case ky:return 16;case _v:return 536870912;default:return 16}default:return 16}}var Hr=null,Bh=null,Uc=null;function Cv(){if(Uc)return Uc;var t,e=Bh,n=e.length,i,r="value"in Hr?Hr.value:Hr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Uc=r.slice(t,1<i?1-i:void 0)}function Oc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wl(){return!0}function sm(){return!1}function pi(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wl:sm,this.isPropagationStopped=sm,this}return sn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),e}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hh=pi(ea),Sl=sn({},ea,{view:0,detail:0}),Ky=pi(Sl),od,ad,pa,Ru=sn({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pa&&(pa&&t.type==="mousemove"?(od=t.screenX-pa.screenX,ad=t.screenY-pa.screenY):ad=od=0,pa=t),od)},movementY:function(t){return"movementY"in t?t.movementY:ad}}),om=pi(Ru),Jy=sn({},Ru,{dataTransfer:0}),Qy=pi(Jy),eS=sn({},Sl,{relatedTarget:0}),ld=pi(eS),tS=sn({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),nS=pi(tS),iS=sn({},ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rS=pi(iS),sS=sn({},ea,{data:0}),am=pi(sS),oS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lS[t])?!!e[t]:!1}function Vh(){return cS}var uS=sn({},Sl,{key:function(t){if(t.key){var e=oS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vh,charCode:function(t){return t.type==="keypress"?Oc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dS=pi(uS),fS=sn({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lm=pi(fS),hS=sn({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vh}),pS=pi(hS),mS=sn({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),gS=pi(mS),vS=sn({},Ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xS=pi(vS),_S=[9,13,27,32],Gh=Sr&&"CompositionEvent"in window,Ia=null;Sr&&"documentMode"in document&&(Ia=document.documentMode);var yS=Sr&&"TextEvent"in window&&!Ia,Rv=Sr&&(!Gh||Ia&&8<Ia&&11>=Ia),cm=" ",um=!1;function Pv(t,e){switch(t){case"keyup":return _S.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var So=!1;function SS(t,e){switch(t){case"compositionend":return Lv(e);case"keypress":return e.which!==32?null:(um=!0,cm);case"textInput":return t=e.data,t===cm&&um?null:t;default:return null}}function MS(t,e){if(So)return t==="compositionend"||!Gh&&Pv(t,e)?(t=Cv(),Uc=Bh=Hr=null,So=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rv&&e.locale!=="ko"?null:e.data;default:return null}}var wS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wS[t.type]:e==="textarea"}function Nv(t,e,n,i){cv(i),e=eu(e,"onChange"),0<e.length&&(n=new Hh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Da=null,tl=null;function ES(t){Gv(t,0)}function Pu(t){var e=Eo(t);if(nv(e))return t}function bS(t,e){if(t==="change")return e}var Iv=!1;if(Sr){var cd;if(Sr){var ud="oninput"in document;if(!ud){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),ud=typeof fm.oninput=="function"}cd=ud}else cd=!1;Iv=cd&&(!document.documentMode||9<document.documentMode)}function hm(){Da&&(Da.detachEvent("onpropertychange",Dv),tl=Da=null)}function Dv(t){if(t.propertyName==="value"&&Pu(tl)){var e=[];Nv(e,tl,t,Uh(t)),hv(ES,e)}}function TS(t,e,n){t==="focusin"?(hm(),Da=e,tl=n,Da.attachEvent("onpropertychange",Dv)):t==="focusout"&&hm()}function AS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pu(tl)}function CS(t,e){if(t==="click")return Pu(e)}function RS(t,e){if(t==="input"||t==="change")return Pu(e)}function PS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wi=typeof Object.is=="function"?Object.is:PS;function nl(t,e){if(Wi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!xf.call(e,r)||!Wi(t[r],e[r]))return!1}return!0}function pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mm(t,e){var n=pm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pm(n)}}function Uv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ov(){for(var t=window,e=$c();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$c(t.document)}return e}function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LS(t){var e=Ov(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Uv(n.ownerDocument.documentElement,n)){if(i!==null&&Wh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=mm(n,s);var o=mm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NS=Sr&&"documentMode"in document&&11>=document.documentMode,Mo=null,Ff=null,Ua=null,kf=!1;function gm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kf||Mo==null||Mo!==$c(i)||(i=Mo,"selectionStart"in i&&Wh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ua&&nl(Ua,i)||(Ua=i,i=eu(Ff,"onSelect"),0<i.length&&(e=new Hh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Mo)))}function jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wo={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},dd={},Fv={};Sr&&(Fv=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);function Lu(t){if(dd[t])return dd[t];if(!wo[t])return t;var e=wo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fv)return dd[t]=e[n];return t}var kv=Lu("animationend"),zv=Lu("animationiteration"),Bv=Lu("animationstart"),Hv=Lu("transitionend"),Vv=new Map,vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function as(t,e){Vv.set(t,e),Bs(e,[t])}for(var fd=0;fd<vm.length;fd++){var hd=vm[fd],IS=hd.toLowerCase(),DS=hd[0].toUpperCase()+hd.slice(1);as(IS,"on"+DS)}as(kv,"onAnimationEnd");as(zv,"onAnimationIteration");as(Bv,"onAnimationStart");as("dblclick","onDoubleClick");as("focusin","onFocus");as("focusout","onBlur");as(Hv,"onTransitionEnd");Vo("onMouseEnter",["mouseout","mouseover"]);Vo("onMouseLeave",["mouseout","mouseover"]);Vo("onPointerEnter",["pointerout","pointerover"]);Vo("onPointerLeave",["pointerout","pointerover"]);Bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),US=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function xm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Iy(i,e,void 0,t),t.currentTarget=null}function Gv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;xm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;xm(r,a,c),s=l}}}if(qc)throw t=If,qc=!1,If=null,t}function Yt(t,e){var n=e[Gf];n===void 0&&(n=e[Gf]=new Set);var i=t+"__bubble";n.has(i)||(Wv(e,t,2,!1),n.add(i))}function pd(t,e,n){var i=0;e&&(i|=4),Wv(n,t,i,e)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function il(t){if(!t[Xl]){t[Xl]=!0,K0.forEach(function(n){n!=="selectionchange"&&(US.has(n)||pd(n,!1,t),pd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xl]||(e[Xl]=!0,pd("selectionchange",!1,e))}}function Wv(t,e,n,i){switch(Av(e)){case 1:var r=qy;break;case 4:r=Zy;break;default:r=zh}n=r.bind(null,e,n,t),r=void 0,!Nf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function md(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ws(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}hv(function(){var c=s,u=Uh(n),f=[];e:{var h=Vv.get(t);if(h!==void 0){var p=Hh,v=t;switch(t){case"keypress":if(Oc(n)===0)break e;case"keydown":case"keyup":p=dS;break;case"focusin":v="focus",p=ld;break;case"focusout":v="blur",p=ld;break;case"beforeblur":case"afterblur":p=ld;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Qy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=pS;break;case kv:case zv:case Bv:p=nS;break;case Hv:p=gS;break;case"scroll":p=Ky;break;case"wheel":p=xS;break;case"copy":case"cut":case"paste":p=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=lm}var y=(e&4)!==0,g=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var m=c,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=Ka(m,d),S!=null&&y.push(rl(m,S,x)))),g)break;m=m.return}0<y.length&&(h=new p(h,v,null,n,u),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Pf&&(v=n.relatedTarget||n.fromElement)&&(ws(v)||v[Mr]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?ws(v):null,v!==null&&(g=Hs(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=om,S="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=lm,S="onPointerLeave",d="onPointerEnter",m="pointer"),g=p==null?h:Eo(p),x=v==null?h:Eo(v),h=new y(S,m+"leave",p,n,u),h.target=g,h.relatedTarget=x,S=null,ws(u)===c&&(y=new y(d,m+"enter",v,n,u),y.target=x,y.relatedTarget=g,S=y),g=S,p&&v)t:{for(y=p,d=v,m=0,x=y;x;x=qs(x))m++;for(x=0,S=d;S;S=qs(S))x++;for(;0<m-x;)y=qs(y),m--;for(;0<x-m;)d=qs(d),x--;for(;m--;){if(y===d||d!==null&&y===d.alternate)break t;y=qs(y),d=qs(d)}y=null}else y=null;p!==null&&_m(f,h,p,y,!1),v!==null&&g!==null&&_m(f,g,v,y,!0)}}e:{if(h=c?Eo(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var L=bS;else if(dm(h))if(Iv)L=RS;else{L=AS;var A=TS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=CS);if(L&&(L=L(t,c))){Nv(f,L,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&bf(h,"number",h.value)}switch(A=c?Eo(c):window,t){case"focusin":(dm(A)||A.contentEditable==="true")&&(Mo=A,Ff=c,Ua=null);break;case"focusout":Ua=Ff=Mo=null;break;case"mousedown":kf=!0;break;case"contextmenu":case"mouseup":case"dragend":kf=!1,gm(f,n,u);break;case"selectionchange":if(NS)break;case"keydown":case"keyup":gm(f,n,u)}var P;if(Gh)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else So?Pv(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Rv&&n.locale!=="ko"&&(So||k!=="onCompositionStart"?k==="onCompositionEnd"&&So&&(P=Cv()):(Hr=u,Bh="value"in Hr?Hr.value:Hr.textContent,So=!0)),A=eu(c,k),0<A.length&&(k=new am(k,t,null,n,u),f.push({event:k,listeners:A}),P?k.data=P:(P=Lv(n),P!==null&&(k.data=P)))),(P=yS?SS(t,n):MS(t,n))&&(c=eu(c,"onBeforeInput"),0<c.length&&(u=new am("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=P))}Gv(f,e)})}function rl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ka(t,n),s!=null&&i.unshift(rl(t,s,r)),s=Ka(t,e),s!=null&&i.push(rl(t,s,r))),t=t.return}return i}function qs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _m(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ka(n,s),l!=null&&o.unshift(rl(n,l,a))):r||(l=Ka(n,s),l!=null&&o.push(rl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OS=/\r\n?/g,FS=/\u0000|\uFFFD/g;function ym(t){return(typeof t=="string"?t:""+t).replace(OS,`
`).replace(FS,"")}function $l(t,e,n){if(e=ym(e),ym(t)!==e&&n)throw Error(we(425))}function tu(){}var zf=null,Bf=null;function Hf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vf=typeof setTimeout=="function"?setTimeout:void 0,kS=typeof clearTimeout=="function"?clearTimeout:void 0,Sm=typeof Promise=="function"?Promise:void 0,zS=typeof queueMicrotask=="function"?queueMicrotask:typeof Sm<"u"?function(t){return Sm.resolve(null).then(t).catch(BS)}:Vf;function BS(t){setTimeout(function(){throw t})}function gd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),el(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);el(e)}function qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ta=Math.random().toString(36).slice(2),Qi="__reactFiber$"+ta,sl="__reactProps$"+ta,Mr="__reactContainer$"+ta,Gf="__reactEvents$"+ta,HS="__reactListeners$"+ta,VS="__reactHandles$"+ta;function ws(t){var e=t[Qi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mr]||n[Qi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mm(t);t!==null;){if(n=t[Qi])return n;t=Mm(t)}return e}t=n,n=t.parentNode}return null}function Ml(t){return t=t[Qi]||t[Mr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Eo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(we(33))}function Nu(t){return t[sl]||null}var Wf=[],bo=-1;function ls(t){return{current:t}}function Zt(t){0>bo||(t.current=Wf[bo],Wf[bo]=null,bo--)}function Gt(t,e){bo++,Wf[bo]=t.current,t.current=e}var ss={},Fn=ls(ss),ti=ls(!1),Ls=ss;function Go(t,e){var n=t.type.contextTypes;if(!n)return ss;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ni(t){return t=t.childContextTypes,t!=null}function nu(){Zt(ti),Zt(Fn)}function wm(t,e,n){if(Fn.current!==ss)throw Error(we(168));Gt(Fn,e),Gt(ti,n)}function jv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(we(108,Ty(t)||"Unknown",r));return sn({},n,i)}function iu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ss,Ls=Fn.current,Gt(Fn,t),Gt(ti,ti.current),!0}function Em(t,e,n){var i=t.stateNode;if(!i)throw Error(we(169));n?(t=jv(t,e,Ls),i.__reactInternalMemoizedMergedChildContext=t,Zt(ti),Zt(Fn),Gt(Fn,t)):Zt(ti),Gt(ti,n)}var gr=null,Iu=!1,vd=!1;function Xv(t){gr===null?gr=[t]:gr.push(t)}function GS(t){Iu=!0,Xv(t)}function cs(){if(!vd&&gr!==null){vd=!0;var t=0,e=Ot;try{var n=gr;for(Ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gr=null,Iu=!1}catch(r){throw gr!==null&&(gr=gr.slice(t+1)),vv(Oh,cs),r}finally{Ot=e,vd=!1}}return null}var To=[],Ao=0,ru=null,su=0,Mi=[],wi=0,Ns=null,vr=1,xr="";function vs(t,e){To[Ao++]=su,To[Ao++]=ru,ru=t,su=e}function $v(t,e,n){Mi[wi++]=vr,Mi[wi++]=xr,Mi[wi++]=Ns,Ns=t;var i=vr;t=xr;var r=32-Vi(i)-1;i&=~(1<<r),n+=1;var s=32-Vi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,vr=1<<32-Vi(e)+r|n<<r|i,xr=s+t}else vr=1<<s|n<<r|i,xr=t}function jh(t){t.return!==null&&(vs(t,1),$v(t,1,0))}function Xh(t){for(;t===ru;)ru=To[--Ao],To[Ao]=null,su=To[--Ao],To[Ao]=null;for(;t===Ns;)Ns=Mi[--wi],Mi[wi]=null,xr=Mi[--wi],Mi[wi]=null,vr=Mi[--wi],Mi[wi]=null}var di=null,ui=null,Jt=!1,zi=null;function Yv(t,e){var n=Ti(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,di=t,ui=qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,di=t,ui=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ns!==null?{id:vr,overflow:xr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ti(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,di=t,ui=null,!0):!1;default:return!1}}function jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xf(t){if(Jt){var e=ui;if(e){var n=e;if(!bm(t,e)){if(jf(t))throw Error(we(418));e=qr(n.nextSibling);var i=di;e&&bm(t,e)?Yv(i,n):(t.flags=t.flags&-4097|2,Jt=!1,di=t)}}else{if(jf(t))throw Error(we(418));t.flags=t.flags&-4097|2,Jt=!1,di=t}}}function Tm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;di=t}function Yl(t){if(t!==di)return!1;if(!Jt)return Tm(t),Jt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hf(t.type,t.memoizedProps)),e&&(e=ui)){if(jf(t))throw qv(),Error(we(418));for(;e;)Yv(t,e),e=qr(e.nextSibling)}if(Tm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(we(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ui=qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ui=null}}else ui=di?qr(t.stateNode.nextSibling):null;return!0}function qv(){for(var t=ui;t;)t=qr(t.nextSibling)}function Wo(){ui=di=null,Jt=!1}function $h(t){zi===null?zi=[t]:zi.push(t)}var WS=Tr.ReactCurrentBatchConfig;function ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(we(309));var i=n.stateNode}if(!i)throw Error(we(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(we(284));if(!n._owner)throw Error(we(290,t))}return t}function ql(t,e){throw t=Object.prototype.toString.call(e),Error(we(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Am(t){var e=t._init;return e(t._payload)}function Zv(t){function e(d,m){if(t){var x=d.deletions;x===null?(d.deletions=[m],d.flags|=16):x.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=Qr(d,m),d.index=0,d.sibling=null,d}function s(d,m,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<m?(d.flags|=2,m):x):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,m,x,S){return m===null||m.tag!==6?(m=Ed(x,d.mode,S),m.return=d,m):(m=r(m,x),m.return=d,m)}function l(d,m,x,S){var L=x.type;return L===yo?u(d,m,x.props.children,S,x.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Or&&Am(L)===m.type)?(S=r(m,x.props),S.ref=ma(d,m,x),S.return=d,S):(S=Gc(x.type,x.key,x.props,null,d.mode,S),S.ref=ma(d,m,x),S.return=d,S)}function c(d,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=bd(x,d.mode,S),m.return=d,m):(m=r(m,x.children||[]),m.return=d,m)}function u(d,m,x,S,L){return m===null||m.tag!==7?(m=As(x,d.mode,S,L),m.return=d,m):(m=r(m,x),m.return=d,m)}function f(d,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ed(""+m,d.mode,x),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case kl:return x=Gc(m.type,m.key,m.props,null,d.mode,x),x.ref=ma(d,null,m),x.return=d,x;case _o:return m=bd(m,d.mode,x),m.return=d,m;case Or:var S=m._init;return f(d,S(m._payload),x)}if(Ca(m)||ua(m))return m=As(m,d.mode,x,null),m.return=d,m;ql(d,m)}return null}function h(d,m,x,S){var L=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:a(d,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case kl:return x.key===L?l(d,m,x,S):null;case _o:return x.key===L?c(d,m,x,S):null;case Or:return L=x._init,h(d,m,L(x._payload),S)}if(Ca(x)||ua(x))return L!==null?null:u(d,m,x,S,null);ql(d,x)}return null}function p(d,m,x,S,L){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,a(m,d,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case kl:return d=d.get(S.key===null?x:S.key)||null,l(m,d,S,L);case _o:return d=d.get(S.key===null?x:S.key)||null,c(m,d,S,L);case Or:var A=S._init;return p(d,m,x,A(S._payload),L)}if(Ca(S)||ua(S))return d=d.get(x)||null,u(m,d,S,L,null);ql(m,S)}return null}function v(d,m,x,S){for(var L=null,A=null,P=m,k=m=0,b=null;P!==null&&k<x.length;k++){P.index>k?(b=P,P=null):b=P.sibling;var T=h(d,P,x[k],S);if(T===null){P===null&&(P=b);break}t&&P&&T.alternate===null&&e(d,P),m=s(T,m,k),A===null?L=T:A.sibling=T,A=T,P=b}if(k===x.length)return n(d,P),Jt&&vs(d,k),L;if(P===null){for(;k<x.length;k++)P=f(d,x[k],S),P!==null&&(m=s(P,m,k),A===null?L=P:A.sibling=P,A=P);return Jt&&vs(d,k),L}for(P=i(d,P);k<x.length;k++)b=p(P,d,k,x[k],S),b!==null&&(t&&b.alternate!==null&&P.delete(b.key===null?k:b.key),m=s(b,m,k),A===null?L=b:A.sibling=b,A=b);return t&&P.forEach(function(G){return e(d,G)}),Jt&&vs(d,k),L}function y(d,m,x,S){var L=ua(x);if(typeof L!="function")throw Error(we(150));if(x=L.call(x),x==null)throw Error(we(151));for(var A=L=null,P=m,k=m=0,b=null,T=x.next();P!==null&&!T.done;k++,T=x.next()){P.index>k?(b=P,P=null):b=P.sibling;var G=h(d,P,T.value,S);if(G===null){P===null&&(P=b);break}t&&P&&G.alternate===null&&e(d,P),m=s(G,m,k),A===null?L=G:A.sibling=G,A=G,P=b}if(T.done)return n(d,P),Jt&&vs(d,k),L;if(P===null){for(;!T.done;k++,T=x.next())T=f(d,T.value,S),T!==null&&(m=s(T,m,k),A===null?L=T:A.sibling=T,A=T);return Jt&&vs(d,k),L}for(P=i(d,P);!T.done;k++,T=x.next())T=p(P,d,k,T.value,S),T!==null&&(t&&T.alternate!==null&&P.delete(T.key===null?k:T.key),m=s(T,m,k),A===null?L=T:A.sibling=T,A=T);return t&&P.forEach(function($){return e(d,$)}),Jt&&vs(d,k),L}function g(d,m,x,S){if(typeof x=="object"&&x!==null&&x.type===yo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case kl:e:{for(var L=x.key,A=m;A!==null;){if(A.key===L){if(L=x.type,L===yo){if(A.tag===7){n(d,A.sibling),m=r(A,x.props.children),m.return=d,d=m;break e}}else if(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Or&&Am(L)===A.type){n(d,A.sibling),m=r(A,x.props),m.ref=ma(d,A,x),m.return=d,d=m;break e}n(d,A);break}else e(d,A);A=A.sibling}x.type===yo?(m=As(x.props.children,d.mode,S,x.key),m.return=d,d=m):(S=Gc(x.type,x.key,x.props,null,d.mode,S),S.ref=ma(d,m,x),S.return=d,d=S)}return o(d);case _o:e:{for(A=x.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(d,m.sibling),m=r(m,x.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=bd(x,d.mode,S),m.return=d,d=m}return o(d);case Or:return A=x._init,g(d,m,A(x._payload),S)}if(Ca(x))return v(d,m,x,S);if(ua(x))return y(d,m,x,S);ql(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,x),m.return=d,d=m):(n(d,m),m=Ed(x,d.mode,S),m.return=d,d=m),o(d)):n(d,m)}return g}var jo=Zv(!0),Kv=Zv(!1),ou=ls(null),au=null,Co=null,Yh=null;function qh(){Yh=Co=au=null}function Zh(t){var e=ou.current;Zt(ou),t._currentValue=e}function $f(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ko(t,e){au=t,Yh=Co=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ei=!0),t.firstContext=null)}function Ri(t){var e=t._currentValue;if(Yh!==t)if(t={context:t,memoizedValue:e,next:null},Co===null){if(au===null)throw Error(we(308));Co=t,au.dependencies={lanes:0,firstContext:t}}else Co=Co.next=t;return e}var Es=null;function Kh(t){Es===null?Es=[t]:Es.push(t)}function Jv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kh(e)):(n.next=r.next,r.next=n),e.interleaved=n,wr(t,i)}function wr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fr=!1;function Jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wr(t,n)}return r=i.interleaved,r===null?(e.next=e,Kh(i)):(e.next=r.next,r.next=e),i.interleaved=e,wr(t,n)}function Fc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fh(t,n)}}function Cm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lu(t,e,n,i){var r=t.updateQueue;Fr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=sn({},f,h);break e;case 2:Fr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ds|=o,t.lanes=o,t.memoizedState=f}}function Rm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(we(191,r));r.call(i)}}}var wl={},nr=ls(wl),ol=ls(wl),al=ls(wl);function bs(t){if(t===wl)throw Error(we(174));return t}function Qh(t,e){switch(Gt(al,e),Gt(ol,t),Gt(nr,wl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Af(e,t)}Zt(nr),Gt(nr,e)}function Xo(){Zt(nr),Zt(ol),Zt(al)}function ex(t){bs(al.current);var e=bs(nr.current),n=Af(e,t.type);e!==n&&(Gt(ol,t),Gt(nr,n))}function ep(t){ol.current===t&&(Zt(nr),Zt(ol))}var en=ls(0);function cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xd=[];function tp(){for(var t=0;t<xd.length;t++)xd[t]._workInProgressVersionPrimary=null;xd.length=0}var kc=Tr.ReactCurrentDispatcher,_d=Tr.ReactCurrentBatchConfig,Is=0,nn=null,gn=null,wn=null,uu=!1,Oa=!1,ll=0,jS=0;function Nn(){throw Error(we(321))}function np(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wi(t[n],e[n]))return!1;return!0}function ip(t,e,n,i,r,s){if(Is=s,nn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kc.current=t===null||t.memoizedState===null?qS:ZS,t=n(i,r),Oa){s=0;do{if(Oa=!1,ll=0,25<=s)throw Error(we(301));s+=1,wn=gn=null,e.updateQueue=null,kc.current=KS,t=n(i,r)}while(Oa)}if(kc.current=du,e=gn!==null&&gn.next!==null,Is=0,wn=gn=nn=null,uu=!1,e)throw Error(we(300));return t}function rp(){var t=ll!==0;return ll=0,t}function Ki(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?nn.memoizedState=wn=t:wn=wn.next=t,wn}function Pi(){if(gn===null){var t=nn.alternate;t=t!==null?t.memoizedState:null}else t=gn.next;var e=wn===null?nn.memoizedState:wn.next;if(e!==null)wn=e,gn=t;else{if(t===null)throw Error(we(310));gn=t,t={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},wn===null?nn.memoizedState=wn=t:wn=wn.next=t}return wn}function cl(t,e){return typeof e=="function"?e(t):e}function yd(t){var e=Pi(),n=e.queue;if(n===null)throw Error(we(311));n.lastRenderedReducer=t;var i=gn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Is&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,nn.lanes|=u,Ds|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Wi(i,e.memoizedState)||(ei=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,nn.lanes|=s,Ds|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sd(t){var e=Pi(),n=e.queue;if(n===null)throw Error(we(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Wi(s,e.memoizedState)||(ei=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function tx(){}function nx(t,e){var n=nn,i=Pi(),r=e(),s=!Wi(i.memoizedState,r);if(s&&(i.memoizedState=r,ei=!0),i=i.queue,sp(sx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||wn!==null&&wn.memoizedState.tag&1){if(n.flags|=2048,ul(9,rx.bind(null,n,i,r,e),void 0,null),En===null)throw Error(we(349));Is&30||ix(n,e,r)}return r}function ix(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=nn.updateQueue,e===null?(e={lastEffect:null,stores:null},nn.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rx(t,e,n,i){e.value=n,e.getSnapshot=i,ox(e)&&ax(t)}function sx(t,e,n){return n(function(){ox(e)&&ax(t)})}function ox(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wi(t,n)}catch{return!0}}function ax(t){var e=wr(t,1);e!==null&&Gi(e,t,1,-1)}function Pm(t){var e=Ki();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:t},e.queue=t,t=t.dispatch=YS.bind(null,nn,t),[e.memoizedState,t]}function ul(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=nn.updateQueue,e===null?(e={lastEffect:null,stores:null},nn.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function lx(){return Pi().memoizedState}function zc(t,e,n,i){var r=Ki();nn.flags|=t,r.memoizedState=ul(1|e,n,void 0,i===void 0?null:i)}function Du(t,e,n,i){var r=Pi();i=i===void 0?null:i;var s=void 0;if(gn!==null){var o=gn.memoizedState;if(s=o.destroy,i!==null&&np(i,o.deps)){r.memoizedState=ul(e,n,s,i);return}}nn.flags|=t,r.memoizedState=ul(1|e,n,s,i)}function Lm(t,e){return zc(8390656,8,t,e)}function sp(t,e){return Du(2048,8,t,e)}function cx(t,e){return Du(4,2,t,e)}function ux(t,e){return Du(4,4,t,e)}function dx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fx(t,e,n){return n=n!=null?n.concat([t]):null,Du(4,4,dx.bind(null,e,t),n)}function op(){}function hx(t,e){var n=Pi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&np(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function px(t,e){var n=Pi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&np(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function mx(t,e,n){return Is&21?(Wi(n,e)||(n=yv(),nn.lanes|=n,Ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ei=!0),t.memoizedState=n)}function XS(t,e){var n=Ot;Ot=n!==0&&4>n?n:4,t(!0);var i=_d.transition;_d.transition={};try{t(!1),e()}finally{Ot=n,_d.transition=i}}function gx(){return Pi().memoizedState}function $S(t,e,n){var i=Jr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vx(t))xx(e,n);else if(n=Jv(t,e,n,i),n!==null){var r=jn();Gi(n,t,i,r),_x(n,e,i)}}function YS(t,e,n){var i=Jr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vx(t))xx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Wi(a,o)){var l=e.interleaved;l===null?(r.next=r,Kh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Jv(t,e,r,i),n!==null&&(r=jn(),Gi(n,t,i,r),_x(n,e,i))}}function vx(t){var e=t.alternate;return t===nn||e!==null&&e===nn}function xx(t,e){Oa=uu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _x(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fh(t,n)}}var du={readContext:Ri,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useInsertionEffect:Nn,useLayoutEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useMutableSource:Nn,useSyncExternalStore:Nn,useId:Nn,unstable_isNewReconciler:!1},qS={readContext:Ri,useCallback:function(t,e){return Ki().memoizedState=[t,e===void 0?null:e],t},useContext:Ri,useEffect:Lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zc(4194308,4,dx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zc(4194308,4,t,e)},useInsertionEffect:function(t,e){return zc(4,2,t,e)},useMemo:function(t,e){var n=Ki();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ki();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=$S.bind(null,nn,t),[i.memoizedState,t]},useRef:function(t){var e=Ki();return t={current:t},e.memoizedState=t},useState:Pm,useDebugValue:op,useDeferredValue:function(t){return Ki().memoizedState=t},useTransition:function(){var t=Pm(!1),e=t[0];return t=XS.bind(null,t[1]),Ki().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=nn,r=Ki();if(Jt){if(n===void 0)throw Error(we(407));n=n()}else{if(n=e(),En===null)throw Error(we(349));Is&30||ix(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Lm(sx.bind(null,i,s,t),[t]),i.flags|=2048,ul(9,rx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ki(),e=En.identifierPrefix;if(Jt){var n=xr,i=vr;n=(i&~(1<<32-Vi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ll++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZS={readContext:Ri,useCallback:hx,useContext:Ri,useEffect:sp,useImperativeHandle:fx,useInsertionEffect:cx,useLayoutEffect:ux,useMemo:px,useReducer:yd,useRef:lx,useState:function(){return yd(cl)},useDebugValue:op,useDeferredValue:function(t){var e=Pi();return mx(e,gn.memoizedState,t)},useTransition:function(){var t=yd(cl)[0],e=Pi().memoizedState;return[t,e]},useMutableSource:tx,useSyncExternalStore:nx,useId:gx,unstable_isNewReconciler:!1},KS={readContext:Ri,useCallback:hx,useContext:Ri,useEffect:sp,useImperativeHandle:fx,useInsertionEffect:cx,useLayoutEffect:ux,useMemo:px,useReducer:Sd,useRef:lx,useState:function(){return Sd(cl)},useDebugValue:op,useDeferredValue:function(t){var e=Pi();return gn===null?e.memoizedState=t:mx(e,gn.memoizedState,t)},useTransition:function(){var t=Sd(cl)[0],e=Pi().memoizedState;return[t,e]},useMutableSource:tx,useSyncExternalStore:nx,useId:gx,unstable_isNewReconciler:!1};function Fi(t,e){if(t&&t.defaultProps){e=sn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:sn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Uu={isMounted:function(t){return(t=t._reactInternals)?Hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=jn(),r=Jr(t),s=yr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Zr(t,s,r),e!==null&&(Gi(e,t,r,i),Fc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=jn(),r=Jr(t),s=yr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zr(t,s,r),e!==null&&(Gi(e,t,r,i),Fc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jn(),i=Jr(t),r=yr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zr(t,r,i),e!==null&&(Gi(e,t,i,n),Fc(e,t,i))}};function Nm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!nl(n,i)||!nl(r,s):!0}function yx(t,e,n){var i=!1,r=ss,s=e.contextType;return typeof s=="object"&&s!==null?s=Ri(s):(r=ni(e)?Ls:Fn.current,i=e.contextTypes,s=(i=i!=null)?Go(t,r):ss),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Im(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Uu.enqueueReplaceState(e,e.state,null)}function qf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Jh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ri(s):(s=ni(e)?Ls:Fn.current,r.context=Go(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Uu.enqueueReplaceState(r,r.state,null),lu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function $o(t,e){try{var n="",i=e;do n+=by(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Md(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JS=typeof WeakMap=="function"?WeakMap:Map;function Sx(t,e,n){n=yr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hu||(hu=!0,oh=i),Zf(t,e)},n}function Mx(t,e,n){n=yr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Zf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zf(t,e),typeof i!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new JS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=fM.bind(null,t,e,n),e.then(t,t))}function Um(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Om(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yr(-1,1),e.tag=2,Zr(n,e,1))),n.lanes|=1),t)}var QS=Tr.ReactCurrentOwner,ei=!1;function Vn(t,e,n,i){e.child=t===null?Kv(e,null,n,i):jo(e,t.child,n,i)}function Fm(t,e,n,i,r){n=n.render;var s=e.ref;return ko(e,r),i=ip(t,e,n,i,s,r),n=rp(),t!==null&&!ei?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Er(t,e,r)):(Jt&&n&&jh(e),e.flags|=1,Vn(t,e,i,r),e.child)}function km(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!pp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wx(t,e,s,i,r)):(t=Gc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:nl,n(o,i)&&t.ref===e.ref)return Er(t,e,r)}return e.flags|=1,t=Qr(s,i),t.ref=e.ref,t.return=e,e.child=t}function wx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(nl(s,i)&&t.ref===e.ref)if(ei=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ei=!0);else return e.lanes=t.lanes,Er(t,e,r)}return Kf(t,e,n,i,r)}function Ex(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Po,ai),ai|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Gt(Po,ai),ai|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Gt(Po,ai),ai|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Gt(Po,ai),ai|=i;return Vn(t,e,r,n),e.child}function bx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kf(t,e,n,i,r){var s=ni(n)?Ls:Fn.current;return s=Go(e,s),ko(e,r),n=ip(t,e,n,i,s,r),i=rp(),t!==null&&!ei?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Er(t,e,r)):(Jt&&i&&jh(e),e.flags|=1,Vn(t,e,n,r),e.child)}function zm(t,e,n,i,r){if(ni(n)){var s=!0;iu(e)}else s=!1;if(ko(e,r),e.stateNode===null)Bc(t,e),yx(e,n,i),qf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ri(c):(c=ni(n)?Ls:Fn.current,c=Go(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Im(e,o,i,c),Fr=!1;var h=e.memoizedState;o.state=h,lu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ti.current||Fr?(typeof u=="function"&&(Yf(e,n,u,i),l=e.memoizedState),(a=Fr||Nm(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Qv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Fi(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ri(l):(l=ni(n)?Ls:Fn.current,l=Go(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Im(e,o,i,l),Fr=!1,h=e.memoizedState,o.state=h,lu(e,i,o,r);var v=e.memoizedState;a!==f||h!==v||ti.current||Fr?(typeof p=="function"&&(Yf(e,n,p,i),v=e.memoizedState),(c=Fr||Nm(e,n,c,i,h,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Jf(t,e,n,i,s,r)}function Jf(t,e,n,i,r,s){bx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Em(e,n,!1),Er(t,e,s);i=e.stateNode,QS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=jo(e,t.child,null,s),e.child=jo(e,null,a,s)):Vn(t,e,a,s),e.memoizedState=i.state,r&&Em(e,n,!0),e.child}function Tx(t){var e=t.stateNode;e.pendingContext?wm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wm(t,e.context,!1),Qh(t,e.containerInfo)}function Bm(t,e,n,i,r){return Wo(),$h(r),e.flags|=256,Vn(t,e,n,i),e.child}var Qf={dehydrated:null,treeContext:null,retryLane:0};function eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ax(t,e,n){var i=e.pendingProps,r=en.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Gt(en,r&1),t===null)return Xf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ku(o,i,0,null),t=As(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=eh(n),e.memoizedState=Qf,t):ap(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return eM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Qr(a,s):(s=As(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qf,i}return s=t.child,t=s.sibling,i=Qr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ap(t,e){return e=ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zl(t,e,n,i){return i!==null&&$h(i),jo(e,t.child,null,n),t=ap(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Md(Error(we(422))),Zl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ku({mode:"visible",children:i.children},r,0,null),s=As(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&jo(e,t.child,null,o),e.child.memoizedState=eh(o),e.memoizedState=Qf,s);if(!(e.mode&1))return Zl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(we(419)),i=Md(s,i,void 0),Zl(t,e,o,i)}if(a=(o&t.childLanes)!==0,ei||a){if(i=En,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,wr(t,r),Gi(i,t,r,-1))}return hp(),i=Md(Error(we(421))),Zl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=hM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ui=qr(r.nextSibling),di=e,Jt=!0,zi=null,t!==null&&(Mi[wi++]=vr,Mi[wi++]=xr,Mi[wi++]=Ns,vr=t.id,xr=t.overflow,Ns=e),e=ap(e,i.children),e.flags|=4096,e)}function Hm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$f(t.return,e,n)}function wd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Cx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vn(t,e,i.children,n),i=en.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hm(t,n,e);else if(t.tag===19)Hm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Gt(en,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),wd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}wd(e,!0,n,null,s);break;case"together":wd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(we(153));if(e.child!==null){for(t=e.child,n=Qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tM(t,e,n){switch(e.tag){case 3:Tx(e),Wo();break;case 5:ex(e);break;case 1:ni(e.type)&&iu(e);break;case 4:Qh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Gt(ou,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Gt(en,en.current&1),e.flags|=128,null):n&e.child.childLanes?Ax(t,e,n):(Gt(en,en.current&1),t=Er(t,e,n),t!==null?t.sibling:null);Gt(en,en.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Cx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Gt(en,en.current),i)break;return null;case 22:case 23:return e.lanes=0,Ex(t,e,n)}return Er(t,e,n)}var Rx,th,Px,Lx;Rx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};th=function(){};Px=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,bs(nr.current);var s=null;switch(n){case"input":r=wf(t,r),i=wf(t,i),s=[];break;case"select":r=sn({},r,{value:void 0}),i=sn({},i,{value:void 0}),s=[];break;case"textarea":r=Tf(t,r),i=Tf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=tu)}Cf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Yt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Lx=function(t,e,n,i){n!==i&&(e.flags|=4)};function ga(t,e){if(!Jt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function In(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function nM(t,e,n){var i=e.pendingProps;switch(Xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(e),null;case 1:return ni(e.type)&&nu(),In(e),null;case 3:return i=e.stateNode,Xo(),Zt(ti),Zt(Fn),tp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zi!==null&&(ch(zi),zi=null))),th(t,e),In(e),null;case 5:ep(e);var r=bs(al.current);if(n=e.type,t!==null&&e.stateNode!=null)Px(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(we(166));return In(e),null}if(t=bs(nr.current),Yl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qi]=e,i[sl]=s,t=(e.mode&1)!==0,n){case"dialog":Yt("cancel",i),Yt("close",i);break;case"iframe":case"object":case"embed":Yt("load",i);break;case"video":case"audio":for(r=0;r<Pa.length;r++)Yt(Pa[r],i);break;case"source":Yt("error",i);break;case"img":case"image":case"link":Yt("error",i),Yt("load",i);break;case"details":Yt("toggle",i);break;case"input":Zp(i,s),Yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Yt("invalid",i);break;case"textarea":Jp(i,s),Yt("invalid",i)}Cf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&$l(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$l(i.textContent,a,t),r=["children",""+a]):qa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Yt("scroll",i)}switch(n){case"input":zl(i),Kp(i,s,!0);break;case"textarea":zl(i),Qp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=tu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Qi]=e,t[sl]=i,Rx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rf(n,i),n){case"dialog":Yt("cancel",t),Yt("close",t),r=i;break;case"iframe":case"object":case"embed":Yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Pa.length;r++)Yt(Pa[r],t);r=i;break;case"source":Yt("error",t),r=i;break;case"img":case"image":case"link":Yt("error",t),Yt("load",t),r=i;break;case"details":Yt("toggle",t),r=i;break;case"input":Zp(t,i),r=wf(t,i),Yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=sn({},i,{value:void 0}),Yt("invalid",t);break;case"textarea":Jp(t,i),r=Tf(t,i),Yt("invalid",t);break;default:r=i}Cf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?lv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ov(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Za(t,l):typeof l=="number"&&Za(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Yt("scroll",t):l!=null&&Lh(t,s,l,o))}switch(n){case"input":zl(t),Kp(t,i,!1);break;case"textarea":zl(t),Qp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+rs(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Do(t,!!i.multiple,s,!1):i.defaultValue!=null&&Do(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=tu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return In(e),null;case 6:if(t&&e.stateNode!=null)Lx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(we(166));if(n=bs(al.current),bs(nr.current),Yl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qi]=e,(s=i.nodeValue!==n)&&(t=di,t!==null))switch(t.tag){case 3:$l(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$l(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qi]=e,e.stateNode=i}return In(e),null;case 13:if(Zt(en),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Jt&&ui!==null&&e.mode&1&&!(e.flags&128))qv(),Wo(),e.flags|=98560,s=!1;else if(s=Yl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(we(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(we(317));s[Qi]=e}else Wo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;In(e),s=!1}else zi!==null&&(ch(zi),zi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||en.current&1?vn===0&&(vn=3):hp())),e.updateQueue!==null&&(e.flags|=4),In(e),null);case 4:return Xo(),th(t,e),t===null&&il(e.stateNode.containerInfo),In(e),null;case 10:return Zh(e.type._context),In(e),null;case 17:return ni(e.type)&&nu(),In(e),null;case 19:if(Zt(en),s=e.memoizedState,s===null)return In(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ga(s,!1);else{if(vn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cu(t),o!==null){for(e.flags|=128,ga(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Gt(en,en.current&1|2),e.child}t=t.sibling}s.tail!==null&&an()>Yo&&(e.flags|=128,i=!0,ga(s,!1),e.lanes=4194304)}else{if(!i)if(t=cu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Jt)return In(e),null}else 2*an()-s.renderingStartTime>Yo&&n!==1073741824&&(e.flags|=128,i=!0,ga(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=an(),e.sibling=null,n=en.current,Gt(en,i?n&1|2:n&1),e):(In(e),null);case 22:case 23:return fp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ai&1073741824&&(In(e),e.subtreeFlags&6&&(e.flags|=8192)):In(e),null;case 24:return null;case 25:return null}throw Error(we(156,e.tag))}function iM(t,e){switch(Xh(e),e.tag){case 1:return ni(e.type)&&nu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xo(),Zt(ti),Zt(Fn),tp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ep(e),null;case 13:if(Zt(en),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(we(340));Wo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Zt(en),null;case 4:return Xo(),null;case 10:return Zh(e.type._context),null;case 22:case 23:return fp(),null;case 24:return null;default:return null}}var Kl=!1,On=!1,rM=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Ro(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){on(t,e,i)}else n.current=null}function nh(t,e,n){try{n()}catch(i){on(t,e,i)}}var Vm=!1;function sM(t,e){if(zf=Jc,t=Ov(),Wh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bf={focusedElem:t,selectionRange:n},Jc=!1,Ge=e;Ge!==null;)if(e=Ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ge=t;else for(;Ge!==null;){e=Ge;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,g=v.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Fi(e.type,y),g);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(we(163))}}catch(S){on(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ge=t;break}Ge=e.return}return v=Vm,Vm=!1,v}function Fa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&nh(e,n,s)}r=r.next}while(r!==i)}}function Ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ih(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nx(t){var e=t.alternate;e!==null&&(t.alternate=null,Nx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qi],delete e[sl],delete e[Gf],delete e[HS],delete e[VS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ix(t){return t.tag===5||t.tag===3||t.tag===4}function Gm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ix(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tu));else if(i!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}function sh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}var Cn=null,ki=!1;function Pr(t,e,n){for(n=n.child;n!==null;)Dx(t,e,n),n=n.sibling}function Dx(t,e,n){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(Cu,n)}catch{}switch(n.tag){case 5:On||Ro(n,e);case 6:var i=Cn,r=ki;Cn=null,Pr(t,e,n),Cn=i,ki=r,Cn!==null&&(ki?(t=Cn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Cn.removeChild(n.stateNode));break;case 18:Cn!==null&&(ki?(t=Cn,n=n.stateNode,t.nodeType===8?gd(t.parentNode,n):t.nodeType===1&&gd(t,n),el(t)):gd(Cn,n.stateNode));break;case 4:i=Cn,r=ki,Cn=n.stateNode.containerInfo,ki=!0,Pr(t,e,n),Cn=i,ki=r;break;case 0:case 11:case 14:case 15:if(!On&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nh(n,e,o),r=r.next}while(r!==i)}Pr(t,e,n);break;case 1:if(!On&&(Ro(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){on(n,e,a)}Pr(t,e,n);break;case 21:Pr(t,e,n);break;case 22:n.mode&1?(On=(i=On)||n.memoizedState!==null,Pr(t,e,n),On=i):Pr(t,e,n);break;default:Pr(t,e,n)}}function Wm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rM),e.forEach(function(i){var r=pM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ii(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Cn=a.stateNode,ki=!1;break e;case 3:Cn=a.stateNode.containerInfo,ki=!0;break e;case 4:Cn=a.stateNode.containerInfo,ki=!0;break e}a=a.return}if(Cn===null)throw Error(we(160));Dx(s,o,r),Cn=null,ki=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){on(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ux(e,t),e=e.sibling}function Ux(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ii(e,t),Zi(t),i&4){try{Fa(3,t,t.return),Ou(3,t)}catch(y){on(t,t.return,y)}try{Fa(5,t,t.return)}catch(y){on(t,t.return,y)}}break;case 1:Ii(e,t),Zi(t),i&512&&n!==null&&Ro(n,n.return);break;case 5:if(Ii(e,t),Zi(t),i&512&&n!==null&&Ro(n,n.return),t.flags&32){var r=t.stateNode;try{Za(r,"")}catch(y){on(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&iv(r,s),Rf(a,o);var c=Rf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?lv(r,f):u==="dangerouslySetInnerHTML"?ov(r,f):u==="children"?Za(r,f):Lh(r,u,f,c)}switch(a){case"input":Ef(r,s);break;case"textarea":rv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Do(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Do(r,!!s.multiple,s.defaultValue,!0):Do(r,!!s.multiple,s.multiple?[]:"",!1))}r[sl]=s}catch(y){on(t,t.return,y)}}break;case 6:if(Ii(e,t),Zi(t),i&4){if(t.stateNode===null)throw Error(we(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){on(t,t.return,y)}}break;case 3:if(Ii(e,t),Zi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{el(e.containerInfo)}catch(y){on(t,t.return,y)}break;case 4:Ii(e,t),Zi(t);break;case 13:Ii(e,t),Zi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(up=an())),i&4&&Wm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(On=(c=On)||u,Ii(e,t),On=c):Ii(e,t),Zi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ge=t,u=t.child;u!==null;){for(f=Ge=u;Ge!==null;){switch(h=Ge,p=h.child,h.tag){case 0:case 11:case 14:case 15:Fa(4,h,h.return);break;case 1:Ro(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){on(i,n,y)}}break;case 5:Ro(h,h.return);break;case 22:if(h.memoizedState!==null){Xm(f);continue}}p!==null?(p.return=h,Ge=p):Xm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=av("display",o))}catch(y){on(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){on(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ii(e,t),Zi(t),i&4&&Wm(t);break;case 21:break;default:Ii(e,t),Zi(t)}}function Zi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ix(n)){var i=n;break e}n=n.return}throw Error(we(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Za(r,""),i.flags&=-33);var s=Gm(t);sh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Gm(t);rh(t,a,o);break;default:throw Error(we(161))}}catch(l){on(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oM(t,e,n){Ge=t,Ox(t)}function Ox(t,e,n){for(var i=(t.mode&1)!==0;Ge!==null;){var r=Ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Kl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||On;a=Kl;var c=On;if(Kl=o,(On=l)&&!c)for(Ge=r;Ge!==null;)o=Ge,l=o.child,o.tag===22&&o.memoizedState!==null?$m(r):l!==null?(l.return=o,Ge=l):$m(r);for(;s!==null;)Ge=s,Ox(s),s=s.sibling;Ge=r,Kl=a,On=c}jm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ge=s):jm(t)}}function jm(t){for(;Ge!==null;){var e=Ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:On||Ou(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!On)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Fi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&el(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(we(163))}On||e.flags&512&&ih(e)}catch(h){on(e,e.return,h)}}if(e===t){Ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ge=n;break}Ge=e.return}}function Xm(t){for(;Ge!==null;){var e=Ge;if(e===t){Ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ge=n;break}Ge=e.return}}function $m(t){for(;Ge!==null;){var e=Ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ou(4,e)}catch(l){on(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){on(e,r,l)}}var s=e.return;try{ih(e)}catch(l){on(e,s,l)}break;case 5:var o=e.return;try{ih(e)}catch(l){on(e,o,l)}}}catch(l){on(e,e.return,l)}if(e===t){Ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ge=a;break}Ge=e.return}}var aM=Math.ceil,fu=Tr.ReactCurrentDispatcher,lp=Tr.ReactCurrentOwner,Ai=Tr.ReactCurrentBatchConfig,Lt=0,En=null,hn=null,Pn=0,ai=0,Po=ls(0),vn=0,dl=null,Ds=0,Fu=0,cp=0,ka=null,Jn=null,up=0,Yo=1/0,mr=null,hu=!1,oh=null,Kr=null,Jl=!1,Vr=null,pu=0,za=0,ah=null,Hc=-1,Vc=0;function jn(){return Lt&6?an():Hc!==-1?Hc:Hc=an()}function Jr(t){return t.mode&1?Lt&2&&Pn!==0?Pn&-Pn:WS.transition!==null?(Vc===0&&(Vc=yv()),Vc):(t=Ot,t!==0||(t=window.event,t=t===void 0?16:Av(t.type)),t):1}function Gi(t,e,n,i){if(50<za)throw za=0,ah=null,Error(we(185));yl(t,n,i),(!(Lt&2)||t!==En)&&(t===En&&(!(Lt&2)&&(Fu|=n),vn===4&&Br(t,Pn)),ii(t,i),n===1&&Lt===0&&!(e.mode&1)&&(Yo=an()+500,Iu&&cs()))}function ii(t,e){var n=t.callbackNode;Wy(t,e);var i=Kc(t,t===En?Pn:0);if(i===0)n!==null&&nm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&nm(n),e===1)t.tag===0?GS(Ym.bind(null,t)):Xv(Ym.bind(null,t)),zS(function(){!(Lt&6)&&cs()}),n=null;else{switch(Sv(i)){case 1:n=Oh;break;case 4:n=xv;break;case 16:n=Zc;break;case 536870912:n=_v;break;default:n=Zc}n=Wx(n,Fx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Fx(t,e){if(Hc=-1,Vc=0,Lt&6)throw Error(we(327));var n=t.callbackNode;if(zo()&&t.callbackNode!==n)return null;var i=Kc(t,t===En?Pn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=mu(t,i);else{e=i;var r=Lt;Lt|=2;var s=zx();(En!==t||Pn!==e)&&(mr=null,Yo=an()+500,Ts(t,e));do try{uM();break}catch(a){kx(t,a)}while(!0);qh(),fu.current=s,Lt=r,hn!==null?e=0:(En=null,Pn=0,e=vn)}if(e!==0){if(e===2&&(r=Df(t),r!==0&&(i=r,e=lh(t,r))),e===1)throw n=dl,Ts(t,0),Br(t,i),ii(t,an()),n;if(e===6)Br(t,i);else{if(r=t.current.alternate,!(i&30)&&!lM(r)&&(e=mu(t,i),e===2&&(s=Df(t),s!==0&&(i=s,e=lh(t,s))),e===1))throw n=dl,Ts(t,0),Br(t,i),ii(t,an()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(we(345));case 2:xs(t,Jn,mr);break;case 3:if(Br(t,i),(i&130023424)===i&&(e=up+500-an(),10<e)){if(Kc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){jn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Vf(xs.bind(null,t,Jn,mr),e);break}xs(t,Jn,mr);break;case 4:if(Br(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Vi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=an()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aM(i/1960))-i,10<i){t.timeoutHandle=Vf(xs.bind(null,t,Jn,mr),i);break}xs(t,Jn,mr);break;case 5:xs(t,Jn,mr);break;default:throw Error(we(329))}}}return ii(t,an()),t.callbackNode===n?Fx.bind(null,t):null}function lh(t,e){var n=ka;return t.current.memoizedState.isDehydrated&&(Ts(t,e).flags|=256),t=mu(t,e),t!==2&&(e=Jn,Jn=n,e!==null&&ch(e)),t}function ch(t){Jn===null?Jn=t:Jn.push.apply(Jn,t)}function lM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Br(t,e){for(e&=~cp,e&=~Fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vi(e),i=1<<n;t[n]=-1,e&=~i}}function Ym(t){if(Lt&6)throw Error(we(327));zo();var e=Kc(t,0);if(!(e&1))return ii(t,an()),null;var n=mu(t,e);if(t.tag!==0&&n===2){var i=Df(t);i!==0&&(e=i,n=lh(t,i))}if(n===1)throw n=dl,Ts(t,0),Br(t,e),ii(t,an()),n;if(n===6)throw Error(we(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xs(t,Jn,mr),ii(t,an()),null}function dp(t,e){var n=Lt;Lt|=1;try{return t(e)}finally{Lt=n,Lt===0&&(Yo=an()+500,Iu&&cs())}}function Us(t){Vr!==null&&Vr.tag===0&&!(Lt&6)&&zo();var e=Lt;Lt|=1;var n=Ai.transition,i=Ot;try{if(Ai.transition=null,Ot=1,t)return t()}finally{Ot=i,Ai.transition=n,Lt=e,!(Lt&6)&&cs()}}function fp(){ai=Po.current,Zt(Po)}function Ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kS(n)),hn!==null)for(n=hn.return;n!==null;){var i=n;switch(Xh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nu();break;case 3:Xo(),Zt(ti),Zt(Fn),tp();break;case 5:ep(i);break;case 4:Xo();break;case 13:Zt(en);break;case 19:Zt(en);break;case 10:Zh(i.type._context);break;case 22:case 23:fp()}n=n.return}if(En=t,hn=t=Qr(t.current,null),Pn=ai=e,vn=0,dl=null,cp=Fu=Ds=0,Jn=ka=null,Es!==null){for(e=0;e<Es.length;e++)if(n=Es[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Es=null}return t}function kx(t,e){do{var n=hn;try{if(qh(),kc.current=du,uu){for(var i=nn.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}uu=!1}if(Is=0,wn=gn=nn=null,Oa=!1,ll=0,lp.current=null,n===null||n.return===null){vn=1,dl=e,hn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Um(o);if(p!==null){p.flags&=-257,Om(p,o,a,s,e),p.mode&1&&Dm(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Dm(s,c,e),hp();break e}l=Error(we(426))}}else if(Jt&&a.mode&1){var g=Um(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Om(g,o,a,s,e),$h($o(l,a));break e}}s=l=$o(l,a),vn!==4&&(vn=2),ka===null?ka=[s]:ka.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Sx(s,l,e);Cm(s,d);break e;case 1:a=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Kr===null||!Kr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Mx(s,a,e);Cm(s,S);break e}}s=s.return}while(s!==null)}Hx(n)}catch(L){e=L,hn===n&&n!==null&&(hn=n=n.return);continue}break}while(!0)}function zx(){var t=fu.current;return fu.current=du,t===null?du:t}function hp(){(vn===0||vn===3||vn===2)&&(vn=4),En===null||!(Ds&268435455)&&!(Fu&268435455)||Br(En,Pn)}function mu(t,e){var n=Lt;Lt|=2;var i=zx();(En!==t||Pn!==e)&&(mr=null,Ts(t,e));do try{cM();break}catch(r){kx(t,r)}while(!0);if(qh(),Lt=n,fu.current=i,hn!==null)throw Error(we(261));return En=null,Pn=0,vn}function cM(){for(;hn!==null;)Bx(hn)}function uM(){for(;hn!==null&&!Uy();)Bx(hn)}function Bx(t){var e=Gx(t.alternate,t,ai);t.memoizedProps=t.pendingProps,e===null?Hx(t):hn=e,lp.current=null}function Hx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iM(n,e),n!==null){n.flags&=32767,hn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vn=6,hn=null;return}}else if(n=nM(n,e,ai),n!==null){hn=n;return}if(e=e.sibling,e!==null){hn=e;return}hn=e=t}while(e!==null);vn===0&&(vn=5)}function xs(t,e,n){var i=Ot,r=Ai.transition;try{Ai.transition=null,Ot=1,dM(t,e,n,i)}finally{Ai.transition=r,Ot=i}return null}function dM(t,e,n,i){do zo();while(Vr!==null);if(Lt&6)throw Error(we(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(we(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jy(t,s),t===En&&(hn=En=null,Pn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jl||(Jl=!0,Wx(Zc,function(){return zo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ai.transition,Ai.transition=null;var o=Ot;Ot=1;var a=Lt;Lt|=4,lp.current=null,sM(t,n),Ux(n,t),LS(Bf),Jc=!!zf,Bf=zf=null,t.current=n,oM(n),Oy(),Lt=a,Ot=o,Ai.transition=s}else t.current=n;if(Jl&&(Jl=!1,Vr=t,pu=r),s=t.pendingLanes,s===0&&(Kr=null),zy(n.stateNode),ii(t,an()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hu)throw hu=!1,t=oh,oh=null,t;return pu&1&&t.tag!==0&&zo(),s=t.pendingLanes,s&1?t===ah?za++:(za=0,ah=t):za=0,cs(),null}function zo(){if(Vr!==null){var t=Sv(pu),e=Ai.transition,n=Ot;try{if(Ai.transition=null,Ot=16>t?16:t,Vr===null)var i=!1;else{if(t=Vr,Vr=null,pu=0,Lt&6)throw Error(we(331));var r=Lt;for(Lt|=4,Ge=t.current;Ge!==null;){var s=Ge,o=s.child;if(Ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ge=c;Ge!==null;){var u=Ge;switch(u.tag){case 0:case 11:case 15:Fa(8,u,s)}var f=u.child;if(f!==null)f.return=u,Ge=f;else for(;Ge!==null;){u=Ge;var h=u.sibling,p=u.return;if(Nx(u),u===c){Ge=null;break}if(h!==null){h.return=p,Ge=h;break}Ge=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ge=o;else e:for(;Ge!==null;){if(s=Ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ge=d;break e}Ge=s.return}}var m=t.current;for(Ge=m;Ge!==null;){o=Ge;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ge=x;else e:for(o=m;Ge!==null;){if(a=Ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ou(9,a)}}catch(L){on(a,a.return,L)}if(a===o){Ge=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ge=S;break e}Ge=a.return}}if(Lt=r,cs(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(Cu,t)}catch{}i=!0}return i}finally{Ot=n,Ai.transition=e}}return!1}function qm(t,e,n){e=$o(n,e),e=Sx(t,e,1),t=Zr(t,e,1),e=jn(),t!==null&&(yl(t,1,e),ii(t,e))}function on(t,e,n){if(t.tag===3)qm(t,t,n);else for(;e!==null;){if(e.tag===3){qm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Kr===null||!Kr.has(i))){t=$o(n,t),t=Mx(e,t,1),e=Zr(e,t,1),t=jn(),e!==null&&(yl(e,1,t),ii(e,t));break}}e=e.return}}function fM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=jn(),t.pingedLanes|=t.suspendedLanes&n,En===t&&(Pn&n)===n&&(vn===4||vn===3&&(Pn&130023424)===Pn&&500>an()-up?Ts(t,0):cp|=n),ii(t,e)}function Vx(t,e){e===0&&(t.mode&1?(e=Vl,Vl<<=1,!(Vl&130023424)&&(Vl=4194304)):e=1);var n=jn();t=wr(t,e),t!==null&&(yl(t,e,n),ii(t,n))}function hM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vx(t,n)}function pM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(we(314))}i!==null&&i.delete(e),Vx(t,n)}var Gx;Gx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ti.current)ei=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ei=!1,tM(t,e,n);ei=!!(t.flags&131072)}else ei=!1,Jt&&e.flags&1048576&&$v(e,su,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Bc(t,e),t=e.pendingProps;var r=Go(e,Fn.current);ko(e,n),r=ip(null,e,i,t,r,n);var s=rp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ni(i)?(s=!0,iu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Jh(e),r.updater=Uu,e.stateNode=r,r._reactInternals=e,qf(e,i,t,n),e=Jf(null,e,i,!0,s,n)):(e.tag=0,Jt&&s&&jh(e),Vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Bc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=gM(i),t=Fi(i,t),r){case 0:e=Kf(null,e,i,t,n);break e;case 1:e=zm(null,e,i,t,n);break e;case 11:e=Fm(null,e,i,t,n);break e;case 14:e=km(null,e,i,Fi(i.type,t),n);break e}throw Error(we(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fi(i,r),Kf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fi(i,r),zm(t,e,i,r,n);case 3:e:{if(Tx(e),t===null)throw Error(we(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Qv(t,e),lu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=$o(Error(we(423)),e),e=Bm(t,e,i,n,r);break e}else if(i!==r){r=$o(Error(we(424)),e),e=Bm(t,e,i,n,r);break e}else for(ui=qr(e.stateNode.containerInfo.firstChild),di=e,Jt=!0,zi=null,n=Kv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wo(),i===r){e=Er(t,e,n);break e}Vn(t,e,i,n)}e=e.child}return e;case 5:return ex(e),t===null&&Xf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Hf(i,r)?o=null:s!==null&&Hf(i,s)&&(e.flags|=32),bx(t,e),Vn(t,e,o,n),e.child;case 6:return t===null&&Xf(e),null;case 13:return Ax(t,e,n);case 4:return Qh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=jo(e,null,i,n):Vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fi(i,r),Fm(t,e,i,r,n);case 7:return Vn(t,e,e.pendingProps,n),e.child;case 8:return Vn(t,e,e.pendingProps.children,n),e.child;case 12:return Vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Gt(ou,i._currentValue),i._currentValue=o,s!==null)if(Wi(s.value,o)){if(s.children===r.children&&!ti.current){e=Er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$f(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(we(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$f(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ko(e,n),r=Ri(r),i=i(r),e.flags|=1,Vn(t,e,i,n),e.child;case 14:return i=e.type,r=Fi(i,e.pendingProps),r=Fi(i.type,r),km(t,e,i,r,n);case 15:return wx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fi(i,r),Bc(t,e),e.tag=1,ni(i)?(t=!0,iu(e)):t=!1,ko(e,n),yx(e,i,r),qf(e,i,r,n),Jf(null,e,i,!0,t,n);case 19:return Cx(t,e,n);case 22:return Ex(t,e,n)}throw Error(we(156,e.tag))};function Wx(t,e){return vv(t,e)}function mM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(t,e,n,i){return new mM(t,e,n,i)}function pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gM(t){if(typeof t=="function")return pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ih)return 11;if(t===Dh)return 14}return 2}function Qr(t,e){var n=t.alternate;return n===null?(n=Ti(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")pp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yo:return As(n.children,r,s,e);case Nh:o=8,r|=8;break;case _f:return t=Ti(12,n,e,r|2),t.elementType=_f,t.lanes=s,t;case yf:return t=Ti(13,n,e,r),t.elementType=yf,t.lanes=s,t;case Sf:return t=Ti(19,n,e,r),t.elementType=Sf,t.lanes=s,t;case ev:return ku(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J0:o=10;break e;case Q0:o=9;break e;case Ih:o=11;break e;case Dh:o=14;break e;case Or:o=16,i=null;break e}throw Error(we(130,t==null?t:typeof t,""))}return e=Ti(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function As(t,e,n,i){return t=Ti(7,t,i,e),t.lanes=n,t}function ku(t,e,n,i){return t=Ti(22,t,i,e),t.elementType=ev,t.lanes=n,t.stateNode={isHidden:!1},t}function Ed(t,e,n){return t=Ti(6,t,null,e),t.lanes=n,t}function bd(t,e,n){return e=Ti(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sd(0),this.expirationTimes=sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function mp(t,e,n,i,r,s,o,a,l){return t=new vM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ti(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jh(s),t}function xM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_o,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function jx(t){if(!t)return ss;t=t._reactInternals;e:{if(Hs(t)!==t||t.tag!==1)throw Error(we(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ni(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(we(171))}if(t.tag===1){var n=t.type;if(ni(n))return jv(t,n,e)}return e}function Xx(t,e,n,i,r,s,o,a,l){return t=mp(n,i,!0,t,r,s,o,a,l),t.context=jx(null),n=t.current,i=jn(),r=Jr(n),s=yr(i,r),s.callback=e??null,Zr(n,s,r),t.current.lanes=r,yl(t,r,i),ii(t,i),t}function zu(t,e,n,i){var r=e.current,s=jn(),o=Jr(r);return n=jx(n),e.context===null?e.context=n:e.pendingContext=n,e=yr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zr(r,e,o),t!==null&&(Gi(t,r,o,s),Fc(t,r,o)),o}function gu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gp(t,e){Zm(t,e),(t=t.alternate)&&Zm(t,e)}function _M(){return null}var $x=typeof reportError=="function"?reportError:function(t){console.error(t)};function vp(t){this._internalRoot=t}Bu.prototype.render=vp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(we(409));zu(t,e,null,null)};Bu.prototype.unmount=vp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Us(function(){zu(null,t,null,null)}),e[Mr]=null}};function Bu(t){this._internalRoot=t}Bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ev();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zr.length&&e!==0&&e<zr[n].priority;n++);zr.splice(n,0,t),n===0&&Tv(t)}};function xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Km(){}function yM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=gu(o);s.call(c)}}var o=Xx(e,i,t,0,null,!1,!1,"",Km);return t._reactRootContainer=o,t[Mr]=o.current,il(t.nodeType===8?t.parentNode:t),Us(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=gu(l);a.call(c)}}var l=mp(t,0,!1,null,null,!1,!1,"",Km);return t._reactRootContainer=l,t[Mr]=l.current,il(t.nodeType===8?t.parentNode:t),Us(function(){zu(e,l,n,i)}),l}function Vu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=gu(o);a.call(l)}}zu(e,o,t,r)}else o=yM(n,e,t,r,i);return gu(o)}Mv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ra(e.pendingLanes);n!==0&&(Fh(e,n|1),ii(e,an()),!(Lt&6)&&(Yo=an()+500,cs()))}break;case 13:Us(function(){var i=wr(t,1);if(i!==null){var r=jn();Gi(i,t,1,r)}}),gp(t,1)}};kh=function(t){if(t.tag===13){var e=wr(t,134217728);if(e!==null){var n=jn();Gi(e,t,134217728,n)}gp(t,134217728)}};wv=function(t){if(t.tag===13){var e=Jr(t),n=wr(t,e);if(n!==null){var i=jn();Gi(n,t,e,i)}gp(t,e)}};Ev=function(){return Ot};bv=function(t,e){var n=Ot;try{return Ot=t,e()}finally{Ot=n}};Lf=function(t,e,n){switch(e){case"input":if(Ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Nu(i);if(!r)throw Error(we(90));nv(i),Ef(i,r)}}}break;case"textarea":rv(t,n);break;case"select":e=n.value,e!=null&&Do(t,!!n.multiple,e,!1)}};dv=dp;fv=Us;var SM={usingClientEntryPoint:!1,Events:[Ml,Eo,Nu,cv,uv,dp]},va={findFiberByHostInstance:ws,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MM={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mv(t),t===null?null:t.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||_M,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Cu=Ql.inject(MM),tr=Ql}catch{}}hi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SM;hi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xp(e))throw Error(we(200));return xM(t,e,null,n)};hi.createRoot=function(t,e){if(!xp(t))throw Error(we(299));var n=!1,i="",r=$x;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=mp(t,1,!1,null,null,n,!1,i,r),t[Mr]=e.current,il(t.nodeType===8?t.parentNode:t),new vp(e)};hi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(we(188)):(t=Object.keys(t).join(","),Error(we(268,t)));return t=mv(e),t=t===null?null:t.stateNode,t};hi.flushSync=function(t){return Us(t)};hi.hydrate=function(t,e,n){if(!Hu(e))throw Error(we(200));return Vu(null,t,e,!0,n)};hi.hydrateRoot=function(t,e,n){if(!xp(t))throw Error(we(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=$x;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Xx(e,null,t,1,n??null,r,!1,s,o),t[Mr]=e.current,il(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Bu(e)};hi.render=function(t,e,n){if(!Hu(e))throw Error(we(200));return Vu(null,t,e,!1,n)};hi.unmountComponentAtNode=function(t){if(!Hu(t))throw Error(we(40));return t._reactRootContainer?(Us(function(){Vu(null,null,t,!1,function(){t._reactRootContainer=null,t[Mr]=null})}),!0):!1};hi.unstable_batchedUpdates=dp;hi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Hu(n))throw Error(we(200));if(t==null||t._reactInternals===void 0)throw Error(we(38));return Vu(t,e,n,!1,i)};hi.version="18.3.1-next-f1338f8080-20240426";function Yx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yx)}catch(t){console.error(t)}}Yx(),Y0.exports=hi;var wM=Y0.exports,qx,Jm=wM;qx=Jm.createRoot,Jm.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _p="160",EM=0,Qm=1,bM=2,Zx=1,Kx=2,pr=3,os=0,Xn=1,li=2,es=0,Bo=1,eg=2,tg=3,ng=4,TM=5,ys=100,AM=101,CM=102,ig=103,rg=104,RM=200,PM=201,LM=202,NM=203,uh=204,dh=205,IM=206,DM=207,UM=208,OM=209,FM=210,kM=211,zM=212,BM=213,HM=214,VM=0,GM=1,WM=2,vu=3,jM=4,XM=5,$M=6,YM=7,Jx=0,qM=1,ZM=2,ts=0,KM=1,JM=2,QM=3,Qx=4,ew=5,tw=6,yp=300,qo=301,Zo=302,xu=303,fh=304,Gu=306,hh=1e3,ci=1001,ph=1002,Gn=1003,sg=1004,Td=1005,Wn=1006,nw=1007,fl=1008,ns=1009,iw=1010,rw=1011,Sp=1012,e_=1013,Gr=1014,Wr=1015,hl=1016,t_=1017,n_=1018,Cs=1020,sw=1021,Hi=1023,ow=1024,aw=1025,Rs=1026,Ko=1027,lw=1028,i_=1029,cw=1030,r_=1031,s_=1033,Ad=33776,Cd=33777,Rd=33778,Pd=33779,og=35840,ag=35841,lg=35842,cg=35843,o_=36196,ug=37492,dg=37496,fg=37808,hg=37809,pg=37810,mg=37811,gg=37812,vg=37813,xg=37814,_g=37815,yg=37816,Sg=37817,Mg=37818,wg=37819,Eg=37820,bg=37821,Ld=36492,Tg=36494,Ag=36495,uw=36283,Cg=36284,Rg=36285,Pg=36286,a_=3e3,Ps=3001,dw=3200,fw=3201,l_=0,hw=1,bi="",Kt="srgb",br="srgb-linear",Mp="display-p3",Wu="display-p3-linear",_u="linear",qt="srgb",yu="rec709",Su="p3",Zs=7680,Lg=519,pw=512,mw=513,gw=514,c_=515,vw=516,xw=517,_w=518,yw=519,mh=35044,Ng="300 es",gh=1035,_r=2e3,Mu=2001;class na{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ig=1234567;const Ba=Math.PI/180,pl=180/Math.PI;function ir(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[t&255]+Dn[t>>8&255]+Dn[t>>16&255]+Dn[t>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[n&63|128]+Dn[n>>8&255]+"-"+Dn[n>>16&255]+Dn[n>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function Rn(t,e,n){return Math.max(e,Math.min(n,t))}function wp(t,e){return(t%e+e)%e}function Sw(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Mw(t,e,n){return t!==e?(n-t)/(e-t):0}function Ha(t,e,n){return(1-n)*t+n*e}function ww(t,e,n,i){return Ha(t,e,1-Math.exp(-n*i))}function Ew(t,e=1){return e-Math.abs(wp(t,e*2)-e)}function bw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Tw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Aw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Cw(t,e){return t+Math.random()*(e-t)}function Rw(t){return t*(.5-Math.random())}function Pw(t){t!==void 0&&(Ig=t);let e=Ig+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lw(t){return t*Ba}function Nw(t){return t*pl}function vh(t){return(t&t-1)===0&&t!==0}function Iw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function wu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Dw(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*v,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*v,a*c);break;case"ZYZ":t.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function er(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const un={DEG2RAD:Ba,RAD2DEG:pl,generateUUID:ir,clamp:Rn,euclideanModulo:wp,mapLinear:Sw,inverseLerp:Mw,lerp:Ha,damp:ww,pingpong:Ew,smoothstep:bw,smootherstep:Tw,randInt:Aw,randFloat:Cw,randFloatSpread:Rw,seededRandom:Pw,degToRad:Lw,radToDeg:Nw,isPowerOfTwo:vh,ceilPowerOfTwo:Iw,floorPowerOfTwo:wu,setQuaternionFromProperEuler:Dw,normalize:kt,denormalize:er};class Se{constructor(e=0,n=0){Se.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class At{constructor(e,n,i,r,s,o,a,l,c){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],y=r[0],g=r[3],d=r[6],m=r[1],x=r[4],S=r[7],L=r[2],A=r[5],P=r[8];return s[0]=o*y+a*m+l*L,s[3]=o*g+a*x+l*A,s[6]=o*d+a*S+l*P,s[1]=c*y+u*m+f*L,s[4]=c*g+u*x+f*A,s[7]=c*d+u*S+f*P,s[2]=h*y+p*m+v*L,s[5]=h*g+p*x+v*A,s[8]=h*d+p*S+v*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=n*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Nd.makeScale(e,n)),this}rotate(e){return this.premultiply(Nd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nd=new At;function u_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ml(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Uw(){const t=ml("canvas");return t.style.display="block",t}const Dg={};function Va(t){t in Dg||(Dg[t]=!0,console.warn(t))}const Ug=new At().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Og=new At().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ec={[br]:{transfer:_u,primaries:yu,toReference:t=>t,fromReference:t=>t},[Kt]:{transfer:qt,primaries:yu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Wu]:{transfer:_u,primaries:Su,toReference:t=>t.applyMatrix3(Og),fromReference:t=>t.applyMatrix3(Ug)},[Mp]:{transfer:qt,primaries:Su,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Og),fromReference:t=>t.applyMatrix3(Ug).convertLinearToSRGB()}},Ow=new Set([br,Wu]),zt={enabled:!0,_workingColorSpace:br,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Ow.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ec[e].toReference,r=ec[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ec[t].primaries},getTransfer:function(t){return t===bi?_u:ec[t].transfer}};function Ho(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Id(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ks;class d_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ks===void 0&&(Ks=ml("canvas")),Ks.width=e.width,Ks.height=e.height;const i=Ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ks}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ml("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ho(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ho(n[i]/255)*255):n[i]=Ho(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fw=0;class f_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=ir(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Dd(r[o].image)):s.push(Dd(r[o]))}else s=Dd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Dd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?d_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kw=0;class $n extends na{constructor(e=$n.DEFAULT_IMAGE,n=$n.DEFAULT_MAPPING,i=ci,r=ci,s=Wn,o=fl,a=Hi,l=ns,c=$n.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kw++}),this.uuid=ir(),this.name="",this.source=new f_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ps?Kt:bi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hh:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hh:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Kt?Ps:a_}set encoding(e){Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ps?Kt:bi}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=yp;$n.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,n=0,i=0,r=1){Qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],y=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,L=(d+1)/2,A=(u+h)/4,P=(f+y)/4,k=(v+g)/4;return x>S&&x>L?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=P/i):S>L?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=k/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=P/s,r=k/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(f-y)/m,this.z=(h-u)/m,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zw extends na{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Qt(0,0,e,n),this.scissorTest=!1,this.viewport=new Qt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ps?Kt:bi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new $n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new f_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends zw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class h_ extends $n{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bw extends $n{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(f!==y||l!==h||c!==p||u!==v){let g=1-a;const d=l*h+c*p+u*v+f*y,m=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const L=Math.sqrt(x),A=Math.atan2(L,d*m);g=Math.sin(g*A)/L,a=Math.sin(a*A)/L}const S=a*m;if(l=l*g+h*S,c=c*g+p*S,u=u*g+v*S,f=f*g+y*S,g===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*p-c*h,e[n+1]=l*v+u*h+c*f-a*p,e[n+2]=c*v+u*p+a*h-l*f,e[n+3]=u*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ud.copy(this).projectOnVector(e),this.sub(Ud)}reflect(e){return this.sub(Ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ud=new O,Fg=new El;class bl{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Di):Di.fromBufferAttribute(s,o),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tc.copy(i.boundingBox)),tc.applyMatrix4(e.matrixWorld),this.union(tc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),nc.subVectors(this.max,xa),Js.subVectors(e.a,xa),Qs.subVectors(e.b,xa),eo.subVectors(e.c,xa),Lr.subVectors(Qs,Js),Nr.subVectors(eo,Qs),hs.subVectors(Js,eo);let n=[0,-Lr.z,Lr.y,0,-Nr.z,Nr.y,0,-hs.z,hs.y,Lr.z,0,-Lr.x,Nr.z,0,-Nr.x,hs.z,0,-hs.x,-Lr.y,Lr.x,0,-Nr.y,Nr.x,0,-hs.y,hs.x,0];return!Od(n,Js,Qs,eo,nc)||(n=[1,0,0,0,1,0,0,0,1],!Od(n,Js,Qs,eo,nc))?!1:(ic.crossVectors(Lr,Nr),n=[ic.x,ic.y,ic.z],Od(n,Js,Qs,eo,nc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cr=[new O,new O,new O,new O,new O,new O,new O,new O],Di=new O,tc=new bl,Js=new O,Qs=new O,eo=new O,Lr=new O,Nr=new O,hs=new O,xa=new O,nc=new O,ic=new O,ps=new O;function Od(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ps.fromArray(t,s);const a=r.x*Math.abs(ps.x)+r.y*Math.abs(ps.y)+r.z*Math.abs(ps.z),l=e.dot(ps),c=n.dot(ps),u=i.dot(ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Hw=new bl,_a=new O,Fd=new O;class ju{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Hw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const n=_a.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_a,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Fd)),this.expandByPoint(_a.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ur=new O,kd=new O,rc=new O,Ir=new O,zd=new O,sc=new O,Bd=new O;class Ep{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ur.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,n),ur.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){kd.copy(e).add(n).multiplyScalar(.5),rc.copy(n).sub(e).normalize(),Ir.copy(this.origin).sub(kd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(rc),a=Ir.dot(this.direction),l=-Ir.dot(rc),c=Ir.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const y=1/u;f*=y,h*=y,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(kd).addScaledVector(rc,h),p}intersectSphere(e,n){ur.subVectors(e.center,this.origin);const i=ur.dot(this.direction),r=ur.dot(ur)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,n,i,r,s){zd.subVectors(n,e),sc.subVectors(i,e),Bd.crossVectors(zd,sc);let o=this.direction.dot(Bd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ir.subVectors(this.origin,e);const l=a*this.direction.dot(sc.crossVectors(Ir,sc));if(l<0)return null;const c=a*this.direction.dot(zd.cross(Ir));if(c<0||l+c>o)return null;const u=-a*Ir.dot(Bd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,v,y,g){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,v,y,g)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,v,y,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/to.setFromMatrixColumn(e,0).length(),s=1/to.setFromMatrixColumn(e,1).length(),o=1/to.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,v=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,y=c*f;n[0]=h+y*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,y=c*f;n[0]=h-y*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=a*u,y=a*f;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=y-h*f,n[8]=v*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+v,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+y,n[5]=o*u,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*u,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vw,e,Gw)}lookAt(e,n,i){const r=this.elements;return si.subVectors(e,n),si.lengthSq()===0&&(si.z=1),si.normalize(),Dr.crossVectors(i,si),Dr.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Dr.crossVectors(i,si)),Dr.normalize(),oc.crossVectors(si,Dr),r[0]=Dr.x,r[4]=oc.x,r[8]=si.x,r[1]=Dr.y,r[5]=oc.y,r[9]=si.y,r[2]=Dr.z,r[6]=oc.z,r[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],y=i[6],g=i[10],d=i[14],m=i[3],x=i[7],S=i[11],L=i[15],A=r[0],P=r[4],k=r[8],b=r[12],T=r[1],G=r[5],$=r[9],ie=r[13],I=r[2],j=r[6],X=r[10],ne=r[14],B=r[3],Y=r[7],q=r[11],ue=r[15];return s[0]=o*A+a*T+l*I+c*B,s[4]=o*P+a*G+l*j+c*Y,s[8]=o*k+a*$+l*X+c*q,s[12]=o*b+a*ie+l*ne+c*ue,s[1]=u*A+f*T+h*I+p*B,s[5]=u*P+f*G+h*j+p*Y,s[9]=u*k+f*$+h*X+p*q,s[13]=u*b+f*ie+h*ne+p*ue,s[2]=v*A+y*T+g*I+d*B,s[6]=v*P+y*G+g*j+d*Y,s[10]=v*k+y*$+g*X+d*q,s[14]=v*b+y*ie+g*ne+d*ue,s[3]=m*A+x*T+S*I+L*B,s[7]=m*P+x*G+S*j+L*Y,s[11]=m*k+x*$+S*X+L*q,s[15]=m*b+x*ie+S*ne+L*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],y=e[7],g=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],y=e[13],g=e[14],d=e[15],m=f*g*c-y*h*c+y*l*p-a*g*p-f*l*d+a*h*d,x=v*h*c-u*g*c-v*l*p+o*g*p+u*l*d-o*h*d,S=u*y*c-v*f*c+v*a*p-o*y*p-u*a*d+o*f*d,L=v*f*l-u*y*l-v*a*h+o*y*h+u*a*g-o*f*g,A=n*m+i*x+r*S+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=m*P,e[1]=(y*h*s-f*g*s-y*r*p+i*g*p+f*r*d-i*h*d)*P,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*d+i*l*d)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*P,e[4]=x*P,e[5]=(u*g*s-v*h*s+v*r*p-n*g*p-u*r*d+n*h*d)*P,e[6]=(v*l*s-o*g*s-v*r*c+n*g*c+o*r*d-n*l*d)*P,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*P,e[8]=S*P,e[9]=(v*f*s-u*y*s-v*i*p+n*y*p+u*i*d-n*f*d)*P,e[10]=(o*y*s-v*a*s+v*i*c-n*y*c-o*i*d+n*a*d)*P,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*P,e[12]=L*P,e[13]=(u*y*r-v*f*r+v*i*h-n*y*h-u*i*g+n*f*g)*P,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*g-n*a*g)*P,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,v=s*f,y=o*u,g=o*f,d=a*f,m=l*c,x=l*u,S=l*f,L=i.x,A=i.y,P=i.z;return r[0]=(1-(y+d))*L,r[1]=(p+S)*L,r[2]=(v-x)*L,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(h+d))*A,r[6]=(g+m)*A,r[7]=0,r[8]=(v+x)*P,r[9]=(g-m)*P,r[10]=(1-(h+y))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=to.set(r[0],r[1],r[2]).length();const o=to.set(r[4],r[5],r[6]).length(),a=to.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ui.copy(this);const c=1/s,u=1/o,f=1/a;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=u,Ui.elements[5]*=u,Ui.elements[6]*=u,Ui.elements[8]*=f,Ui.elements[9]*=f,Ui.elements[10]*=f,n.setFromRotationMatrix(Ui),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=_r){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===_r)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Mu)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_r){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let v,y;if(a===_r)v=(o+s)*f,y=-2*f;else if(a===Mu)v=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const to=new O,Ui=new rn,Vw=new O(0,0,0),Gw=new O(1,1,1),Dr=new O,oc=new O,si=new O,kg=new rn,zg=new El;class Tl{constructor(e=0,n=0,i=0,r=Tl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zg.setFromEuler(this),this.setFromQuaternion(zg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tl.DEFAULT_ORDER="XYZ";let bp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ww=0;const Bg=new O,no=new El,dr=new rn,ac=new O,ya=new O,jw=new O,Xw=new El,Hg=new O(1,0,0),Vg=new O(0,1,0),Gg=new O(0,0,1),$w={type:"added"},Yw={type:"removed"};class bn extends na{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ww++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new O,n=new Tl,i=new El,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rn},normalMatrix:{value:new At}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(Hg,e)}rotateY(e){return this.rotateOnAxis(Vg,e)}rotateZ(e){return this.rotateOnAxis(Gg,e)}translateOnAxis(e,n){return Bg.copy(e).applyQuaternion(this.quaternion),this.position.add(Bg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hg,e)}translateY(e){return this.translateOnAxis(Vg,e)}translateZ(e){return this.translateOnAxis(Gg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ac.copy(e):ac.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(ya,ac,this.up):dr.lookAt(ac,ya,this.up),this.quaternion.setFromRotationMatrix(dr),r&&(dr.extractRotation(r.matrixWorld),no.setFromRotationMatrix(dr),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($w)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Yw)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,jw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,Xw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bn.DEFAULT_UP=new O(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new O,fr=new O,Hd=new O,hr=new O,io=new O,ro=new O,Wg=new O,Vd=new O,Gd=new O,Wd=new O;let lc=!1;class Ei{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Oi.subVectors(e,n),r.cross(Oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Oi.subVectors(r,n),fr.subVectors(i,n),Hd.subVectors(e,n);const o=Oi.dot(Oi),a=Oi.dot(fr),l=Oi.dot(Hd),c=fr.dot(fr),u=fr.dot(Hd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getUV(e,n,i,r,s,o,a,l){return lc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lc=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,hr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hr.x),l.addScaledVector(o,hr.y),l.addScaledVector(a,hr.z),l)}static isFrontFacing(e,n,i,r){return Oi.subVectors(i,n),fr.subVectors(e,n),Oi.cross(fr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Oi.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ei.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return lc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lc=!0),Ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;io.subVectors(r,i),ro.subVectors(s,i),Vd.subVectors(e,i);const l=io.dot(Vd),c=ro.dot(Vd);if(l<=0&&c<=0)return n.copy(i);Gd.subVectors(e,r);const u=io.dot(Gd),f=ro.dot(Gd);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(io,o);Wd.subVectors(e,s);const p=io.dot(Wd),v=ro.dot(Wd);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ro,a);const g=u*v-p*f;if(g<=0&&f-u>=0&&p-v>=0)return Wg.subVectors(s,r),a=(f-u)/(f-u+(p-v)),n.copy(r).addScaledVector(Wg,a);const d=1/(g+y+h);return o=y*d,a=h*d,n.copy(i).addScaledVector(io,o).addScaledVector(ro,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const p_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},cc={h:0,s:0,l:0};function jd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=zt.workingColorSpace){return this.r=e,this.g=n,this.b=i,zt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=zt.workingColorSpace){if(e=wp(e,1),n=Rn(n,0,1),i=Rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=jd(o,s,e+1/3),this.g=jd(o,s,e),this.b=jd(o,s,e-1/3)}return zt.toWorkingColorSpace(this,r),this}setStyle(e,n=Kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kt){const i=p_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}copyLinearToSRGB(e){return this.r=Id(e.r),this.g=Id(e.g),this.b=Id(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return zt.fromWorkingColorSpace(Un.copy(this),e),Math.round(Rn(Un.r*255,0,255))*65536+Math.round(Rn(Un.g*255,0,255))*256+Math.round(Rn(Un.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=zt.workingColorSpace){zt.fromWorkingColorSpace(Un.copy(this),n);const i=Un.r,r=Un.g,s=Un.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=zt.workingColorSpace){return zt.fromWorkingColorSpace(Un.copy(this),n),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=Kt){zt.fromWorkingColorSpace(Un.copy(this),e);const n=Un.r,i=Un.g,r=Un.b;return e!==Kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+n,Ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ur),e.getHSL(cc);const i=Ha(Ur.h,cc.h,n),r=Ha(Ur.s,cc.s,n),s=Ha(Ur.l,cc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Et;Et.NAMES=p_;let qw=0;class Vs extends na{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qw++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Bo,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=dh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=vu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(i.blending=this.blending),this.side!==os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uh&&(i.blendSrc=this.blendSrc),this.blendDst!==dh&&(i.blendDst=this.blendDst),this.blendEquation!==ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bi extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new O,uc=new Se;class Ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)uc.fromBufferAttribute(this,n),uc.applyMatrix3(e),this.setXY(n,uc.x,uc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=er(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=er(n,this.array)),n}setX(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=er(n,this.array)),n}setY(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=er(n,this.array)),n}setZ(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=er(n,this.array)),n}setW(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mh&&(e.usage=this.usage),e}}class m_ extends Ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class g_ extends Ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bt extends Ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Zw=0;const yi=new rn,Xd=new bn,so=new O,oi=new bl,Sa=new bl,Mn=new O;class xn extends na{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zw++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u_(e)?g_:m_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new At().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,n,i){return yi.makeTranslation(e,n,i),this.applyMatrix4(yi),this}scale(e,n,i){return yi.makeScale(e,n,i),this.applyMatrix4(yi),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];oi.setFromBufferAttribute(s),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ju);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Sa.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(oi.min,Sa.min),oi.expandByPoint(Mn),Mn.addVectors(oi.max,Sa.max),oi.expandByPoint(Mn)):(oi.expandByPoint(Sa.min),oi.expandByPoint(Sa.max))}oi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mn.fromBufferAttribute(a,c),l&&(so.fromBufferAttribute(e,c),Mn.add(so)),r=Math.max(r,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new O,u[T]=new O;const f=new O,h=new O,p=new O,v=new Se,y=new Se,g=new Se,d=new O,m=new O;function x(T,G,$){f.fromArray(r,T*3),h.fromArray(r,G*3),p.fromArray(r,$*3),v.fromArray(o,T*2),y.fromArray(o,G*2),g.fromArray(o,$*2),h.sub(f),p.sub(f),y.sub(v),g.sub(v);const ie=1/(y.x*g.y-g.x*y.y);isFinite(ie)&&(d.copy(h).multiplyScalar(g.y).addScaledVector(p,-y.y).multiplyScalar(ie),m.copy(p).multiplyScalar(y.x).addScaledVector(h,-g.x).multiplyScalar(ie),c[T].add(d),c[G].add(d),c[$].add(d),u[T].add(m),u[G].add(m),u[$].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,G=S.length;T<G;++T){const $=S[T],ie=$.start,I=$.count;for(let j=ie,X=ie+I;j<X;j+=3)x(i[j+0],i[j+1],i[j+2])}const L=new O,A=new O,P=new O,k=new O;function b(T){P.fromArray(s,T*3),k.copy(P);const G=c[T];L.copy(G),L.sub(P.multiplyScalar(P.dot(G))).normalize(),A.crossVectors(k,G);const ie=A.dot(u[T])<0?-1:1;l[T*4]=L.x,l[T*4+1]=L.y,l[T*4+2]=L.z,l[T*4+3]=ie}for(let T=0,G=S.length;T<G;++T){const $=S[T],ie=$.start,I=$.count;for(let j=ie,X=ie+I;j<X;j+=3)b(i[j+0]),b(i[j+1]),b(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Mn.fromBufferAttribute(e,n),Mn.normalize(),e.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new Ci(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jg=new rn,ms=new Ep,dc=new ju,Xg=new O,oo=new O,ao=new O,lo=new O,$d=new O,fc=new O,hc=new Se,pc=new Se,mc=new Se,$g=new O,Yg=new O,qg=new O,gc=new O,vc=new O;class Xe extends bn{constructor(e=new xn,n=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){fc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&($d.fromBufferAttribute(f,e),o?fc.addScaledVector($d,u):fc.addScaledVector($d.sub(n),u))}n.add(fc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dc.copy(i.boundingSphere),dc.applyMatrix4(s),ms.copy(e.ray).recast(e.near),!(dc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(dc,Xg)===null||ms.origin.distanceToSquared(Xg)>(e.far-e.near)**2))&&(jg.copy(s).invert(),ms.copy(e.ray).applyMatrix4(jg),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ms)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const g=h[v],d=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,L=x;S<L;S+=3){const A=a.getX(S),P=a.getX(S+1),k=a.getX(S+2);r=xc(this,d,e,i,c,u,f,A,P,k),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=v,d=y;g<d;g+=3){const m=a.getX(g),x=a.getX(g+1),S=a.getX(g+2);r=xc(this,o,e,i,c,u,f,m,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const g=h[v],d=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,L=x;S<L;S+=3){const A=S,P=S+1,k=S+2;r=xc(this,d,e,i,c,u,f,A,P,k),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=v,d=y;g<d;g+=3){const m=g,x=g+1,S=g+2;r=xc(this,o,e,i,c,u,f,m,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Kw(t,e,n,i,r,s,o,a){let l;if(e.side===Xn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===os,a),l===null)return null;vc.copy(a),vc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(vc);return c<n.near||c>n.far?null:{distance:c,point:vc.clone(),object:t}}function xc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,oo),t.getVertexPosition(l,ao),t.getVertexPosition(c,lo);const u=Kw(t,e,n,i,oo,ao,lo,gc);if(u){r&&(hc.fromBufferAttribute(r,a),pc.fromBufferAttribute(r,l),mc.fromBufferAttribute(r,c),u.uv=Ei.getInterpolation(gc,oo,ao,lo,hc,pc,mc,new Se)),s&&(hc.fromBufferAttribute(s,a),pc.fromBufferAttribute(s,l),mc.fromBufferAttribute(s,c),u.uv1=Ei.getInterpolation(gc,oo,ao,lo,hc,pc,mc,new Se),u.uv2=u.uv1),o&&($g.fromBufferAttribute(o,a),Yg.fromBufferAttribute(o,l),qg.fromBufferAttribute(o,c),u.normal=Ei.getInterpolation(gc,oo,ao,lo,$g,Yg,qg,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};Ei.getNormal(oo,ao,lo,f.normal),u.face=f}return u}class dn extends xn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(f,2));function v(y,g,d,m,x,S,L,A,P,k,b){const T=S/P,G=L/k,$=S/2,ie=L/2,I=A/2,j=P+1,X=k+1;let ne=0,B=0;const Y=new O;for(let q=0;q<X;q++){const ue=q*G-ie;for(let pe=0;pe<j;pe++){const te=pe*T-$;Y[y]=te*m,Y[g]=ue*x,Y[d]=I,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[g]=0,Y[d]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(pe/P),f.push(1-q/k),ne+=1}}for(let q=0;q<k;q++)for(let ue=0;ue<P;ue++){const pe=h+ue+j*q,te=h+ue+j*(q+1),de=h+(ue+1)+j*(q+1),Ne=h+(ue+1)+j*q;l.push(pe,te,Ne),l.push(te,de,Ne),B+=6}a.addGroup(p,B,b),p+=B,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Hn(t){const e={};for(let n=0;n<t.length;n++){const i=Jo(t[n]);for(const r in i)e[r]=i[r]}return e}function Jw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function v_(t){return t.getRenderTarget()===null?t.outputColorSpace:zt.workingColorSpace}const Qw={clone:Jo,merge:Hn};var e1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fs extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e1,this.fragmentShader=t1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jo(e.uniforms),this.uniformsGroups=Jw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let x_=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=_r}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Qn extends x_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=pl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pl*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const co=-90,uo=1;class n1 extends bn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qn(co,uo,e,n);r.layers=this.layers,this.add(r);const s=new Qn(co,uo,e,n);s.layers=this.layers,this.add(s);const o=new Qn(co,uo,e,n);o.layers=this.layers,this.add(o);const a=new Qn(co,uo,e,n);a.layers=this.layers,this.add(a);const l=new Qn(co,uo,e,n);l.layers=this.layers,this.add(l);const c=new Qn(co,uo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===_r)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class __ extends $n{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:qo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class i1 extends Os{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ps?Kt:bi),this.texture=new __(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new dn(5,5,5),s=new Fs({name:"CubemapFromEquirect",uniforms:Jo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:es});s.uniforms.tEquirect.value=n;const o=new Xe(r,s),a=n.minFilter;return n.minFilter===fl&&(n.minFilter=Wn),new n1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Yd=new O,r1=new O,s1=new At;class kr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yd.subVectors(i,n).cross(r1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||s1.getNormalMatrix(e),r=this.coplanarPoint(Yd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new ju,_c=new O;class Tp{constructor(e=new kr,n=new kr,i=new kr,r=new kr,s=new kr,o=new kr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_r){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],y=r[10],g=r[11],d=r[12],m=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,g-p,S-d).normalize(),i[1].setComponents(l+s,h+c,g+p,S+d).normalize(),i[2].setComponents(l+o,h+u,g+v,S+m).normalize(),i[3].setComponents(l-o,h-u,g-v,S-m).normalize(),i[4].setComponents(l-a,h-f,g-y,S-x).normalize(),n===_r)i[5].setComponents(l+a,h+f,g+y,S+x).normalize();else if(n===Mu)i[5].setComponents(a,f,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_c.x=r.normal.x>0?e.max.x:e.min.x,_c.y=r.normal.y>0?e.max.y:e.min.y,_c.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function y_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function o1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=f.byteLength,v=t.createBuffer();t.bindBuffer(u,v),t.bufferData(u,f,h),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,f){const h=u.array,p=u._updateRange,v=u.updateRanges;if(t.bindBuffer(f,c),p.count===-1&&v.length===0&&t.bufferSubData(f,0,h),v.length!==0){for(let y=0,g=v.length;y<g;y++){const d=v[y];n?t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class Si extends xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],v=[],y=[],g=[];for(let d=0;d<u;d++){const m=d*h-o;for(let x=0;x<c;x++){const S=x*f-s;v.push(S,-m,0),y.push(0,0,1),g.push(x/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<a;m++){const x=m+c*d,S=m+c*(d+1),L=m+1+c*(d+1),A=m+1+c*d;p.push(x,S,A),p.push(S,L,A)}this.setIndex(p),this.setAttribute("position",new Bt(v,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.widthSegments,e.heightSegments)}}var a1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l1=`#ifdef USE_ALPHAHASH
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
#endif`,c1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,f1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h1=`#ifdef USE_AOMAP
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
#endif`,p1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m1=`#ifdef USE_BATCHING
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
#endif`,g1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,v1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y1=`#ifdef USE_IRIDESCENCE
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
#endif`,S1=`#ifdef USE_BUMPMAP
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
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,P1=`#define PI 3.141592653589793
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
} // validated`,L1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N1=`vec3 transformedNormal = objectNormal;
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
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F1="gl_FragColor = linearToOutputTexel( gl_FragColor );",k1=`
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
}`,z1=`#ifdef USE_ENVMAP
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
#endif`,B1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H1=`#ifdef USE_ENVMAP
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
#endif`,V1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y1=`#ifdef USE_GRADIENTMAP
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
}`,q1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q1=`uniform bool receiveShadow;
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
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sE=`PhysicalMaterial material;
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
#endif`,oE=`struct PhysicalMaterial {
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
}`,aE=`
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
#endif`,lE=`#if defined( RE_IndirectDiffuse )
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
#endif`,cE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vE=`#if defined( USE_POINTS_UV )
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
#endif`,xE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_E=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SE=`#ifdef USE_MORPHNORMALS
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
#endif`,ME=`#ifdef USE_MORPHTARGETS
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
#endif`,wE=`#ifdef USE_MORPHTARGETS
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
#endif`,EE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RE=`#ifdef USE_NORMALMAP
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
#endif`,PE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jE=`float getShadowMask() {
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
}`,XE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,YE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qE=`#ifdef USE_SKINNING
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
#endif`,ZE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eb=`#ifdef USE_TRANSMISSION
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
#endif`,tb=`#ifdef USE_TRANSMISSION
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
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ab=`uniform sampler2D t2D;
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
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`#include <common>
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
}`,hb=`#if DEPTH_PACKING == 3200
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
}`,pb=`#define DISTANCE
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
}`,mb=`#define DISTANCE
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
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`uniform float scale;
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
}`,_b=`uniform vec3 diffuse;
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
}`,yb=`#include <common>
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
}`,Sb=`uniform vec3 diffuse;
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
}`,Mb=`#define LAMBERT
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
}`,wb=`#define LAMBERT
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
}`,Eb=`#define MATCAP
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
}`,bb=`#define MATCAP
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
}`,Tb=`#define NORMAL
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
}`,Ab=`#define NORMAL
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
}`,Cb=`#define PHONG
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
}`,Rb=`#define PHONG
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
}`,Pb=`#define STANDARD
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
}`,Lb=`#define STANDARD
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
}`,Nb=`#define TOON
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
}`,Ib=`#define TOON
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
}`,Db=`uniform float size;
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
}`,Ub=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,Fb=`uniform vec3 color;
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
}`,kb=`uniform float rotation;
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
}`,zb=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:a1,alphahash_pars_fragment:l1,alphamap_fragment:c1,alphamap_pars_fragment:u1,alphatest_fragment:d1,alphatest_pars_fragment:f1,aomap_fragment:h1,aomap_pars_fragment:p1,batching_pars_vertex:m1,batching_vertex:g1,begin_vertex:v1,beginnormal_vertex:x1,bsdfs:_1,iridescence_fragment:y1,bumpmap_pars_fragment:S1,clipping_planes_fragment:M1,clipping_planes_pars_fragment:w1,clipping_planes_pars_vertex:E1,clipping_planes_vertex:b1,color_fragment:T1,color_pars_fragment:A1,color_pars_vertex:C1,color_vertex:R1,common:P1,cube_uv_reflection_fragment:L1,defaultnormal_vertex:N1,displacementmap_pars_vertex:I1,displacementmap_vertex:D1,emissivemap_fragment:U1,emissivemap_pars_fragment:O1,colorspace_fragment:F1,colorspace_pars_fragment:k1,envmap_fragment:z1,envmap_common_pars_fragment:B1,envmap_pars_fragment:H1,envmap_pars_vertex:V1,envmap_physical_pars_fragment:eE,envmap_vertex:G1,fog_vertex:W1,fog_pars_vertex:j1,fog_fragment:X1,fog_pars_fragment:$1,gradientmap_pars_fragment:Y1,lightmap_fragment:q1,lightmap_pars_fragment:Z1,lights_lambert_fragment:K1,lights_lambert_pars_fragment:J1,lights_pars_begin:Q1,lights_toon_fragment:tE,lights_toon_pars_fragment:nE,lights_phong_fragment:iE,lights_phong_pars_fragment:rE,lights_physical_fragment:sE,lights_physical_pars_fragment:oE,lights_fragment_begin:aE,lights_fragment_maps:lE,lights_fragment_end:cE,logdepthbuf_fragment:uE,logdepthbuf_pars_fragment:dE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:hE,map_fragment:pE,map_pars_fragment:mE,map_particle_fragment:gE,map_particle_pars_fragment:vE,metalnessmap_fragment:xE,metalnessmap_pars_fragment:_E,morphcolor_vertex:yE,morphnormal_vertex:SE,morphtarget_pars_vertex:ME,morphtarget_vertex:wE,normal_fragment_begin:EE,normal_fragment_maps:bE,normal_pars_fragment:TE,normal_pars_vertex:AE,normal_vertex:CE,normalmap_pars_fragment:RE,clearcoat_normal_fragment_begin:PE,clearcoat_normal_fragment_maps:LE,clearcoat_pars_fragment:NE,iridescence_pars_fragment:IE,opaque_fragment:DE,packing:UE,premultiplied_alpha_fragment:OE,project_vertex:FE,dithering_fragment:kE,dithering_pars_fragment:zE,roughnessmap_fragment:BE,roughnessmap_pars_fragment:HE,shadowmap_pars_fragment:VE,shadowmap_pars_vertex:GE,shadowmap_vertex:WE,shadowmask_pars_fragment:jE,skinbase_vertex:XE,skinning_pars_vertex:$E,skinning_vertex:YE,skinnormal_vertex:qE,specularmap_fragment:ZE,specularmap_pars_fragment:KE,tonemapping_fragment:JE,tonemapping_pars_fragment:QE,transmission_fragment:eb,transmission_pars_fragment:tb,uv_pars_fragment:nb,uv_pars_vertex:ib,uv_vertex:rb,worldpos_vertex:sb,background_vert:ob,background_frag:ab,backgroundCube_vert:lb,backgroundCube_frag:cb,cube_vert:ub,cube_frag:db,depth_vert:fb,depth_frag:hb,distanceRGBA_vert:pb,distanceRGBA_frag:mb,equirect_vert:gb,equirect_frag:vb,linedashed_vert:xb,linedashed_frag:_b,meshbasic_vert:yb,meshbasic_frag:Sb,meshlambert_vert:Mb,meshlambert_frag:wb,meshmatcap_vert:Eb,meshmatcap_frag:bb,meshnormal_vert:Tb,meshnormal_frag:Ab,meshphong_vert:Cb,meshphong_frag:Rb,meshphysical_vert:Pb,meshphysical_frag:Lb,meshtoon_vert:Nb,meshtoon_frag:Ib,points_vert:Db,points_frag:Ub,shadow_vert:Ob,shadow_frag:Fb,sprite_vert:kb,sprite_frag:zb},Pe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Ji={basic:{uniforms:Hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Hn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Hn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Hn([Pe.points,Pe.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Hn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Hn([Pe.common,Pe.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Hn([Pe.sprite,Pe.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:Hn([Pe.common,Pe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:Hn([Pe.lights,Pe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Ji.physical={uniforms:Hn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const yc={r:0,b:0,g:0};function Bb(t,e,n,i,r,s,o){const a=new Et(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(g,d){let m=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?n:e).get(x)),x===null?y(a,l):x&&x.isColor&&(y(x,1),m=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Gu)?(u===void 0&&(u=new Xe(new dn(1,1,1),new Fs({name:"BackgroundCubeMaterial",uniforms:Jo(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=zt.getTransfer(x.colorSpace)!==qt,(f!==x||h!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Xe(new Si(2,2),new Fs({name:"BackgroundMaterial",uniforms:Jo(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=zt.getTransfer(x.colorSpace)!==qt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,d){g.getRGB(yc,v_(t)),i.buffers.color.setClear(yc.r,yc.g,yc.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),l=d,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:v}}function Hb(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function f(I,j,X,ne,B){let Y=!1;if(o){const q=y(ne,X,j);c!==q&&(c=q,p(c.object)),Y=d(I,ne,X,B),Y&&m(I,ne,X,B)}else{const q=j.wireframe===!0;(c.geometry!==ne.id||c.program!==X.id||c.wireframe!==q)&&(c.geometry=ne.id,c.program=X.id,c.wireframe=q,Y=!0)}B!==null&&n.update(B,t.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,k(I,j,X,ne),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(B).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function v(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function y(I,j,X){const ne=X.wireframe===!0;let B=a[I.id];B===void 0&&(B={},a[I.id]=B);let Y=B[j.id];Y===void 0&&(Y={},B[j.id]=Y);let q=Y[ne];return q===void 0&&(q=g(h()),Y[ne]=q),q}function g(I){const j=[],X=[],ne=[];for(let B=0;B<r;B++)j[B]=0,X[B]=0,ne[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:X,attributeDivisors:ne,object:I,attributes:{},index:null}}function d(I,j,X,ne){const B=c.attributes,Y=j.attributes;let q=0;const ue=X.getAttributes();for(const pe in ue)if(ue[pe].location>=0){const de=B[pe];let Ne=Y[pe];if(Ne===void 0&&(pe==="instanceMatrix"&&I.instanceMatrix&&(Ne=I.instanceMatrix),pe==="instanceColor"&&I.instanceColor&&(Ne=I.instanceColor)),de===void 0||de.attribute!==Ne||Ne&&de.data!==Ne.data)return!0;q++}return c.attributesNum!==q||c.index!==ne}function m(I,j,X,ne){const B={},Y=j.attributes;let q=0;const ue=X.getAttributes();for(const pe in ue)if(ue[pe].location>=0){let de=Y[pe];de===void 0&&(pe==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),pe==="instanceColor"&&I.instanceColor&&(de=I.instanceColor));const Ne={};Ne.attribute=de,de&&de.data&&(Ne.data=de.data),B[pe]=Ne,q++}c.attributes=B,c.attributesNum=q,c.index=ne}function x(){const I=c.newAttributes;for(let j=0,X=I.length;j<X;j++)I[j]=0}function S(I){L(I,0)}function L(I,j){const X=c.newAttributes,ne=c.enabledAttributes,B=c.attributeDivisors;X[I]=1,ne[I]===0&&(t.enableVertexAttribArray(I),ne[I]=1),B[I]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,j),B[I]=j)}function A(){const I=c.newAttributes,j=c.enabledAttributes;for(let X=0,ne=j.length;X<ne;X++)j[X]!==I[X]&&(t.disableVertexAttribArray(X),j[X]=0)}function P(I,j,X,ne,B,Y,q){q===!0?t.vertexAttribIPointer(I,j,X,B,Y):t.vertexAttribPointer(I,j,X,ne,B,Y)}function k(I,j,X,ne){if(i.isWebGL2===!1&&(I.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const B=ne.attributes,Y=X.getAttributes(),q=j.defaultAttributeValues;for(const ue in Y){const pe=Y[ue];if(pe.location>=0){let te=B[ue];if(te===void 0&&(ue==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),ue==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),te!==void 0){const de=te.normalized,Ne=te.itemSize,He=n.get(te);if(He===void 0)continue;const Oe=He.buffer,st=He.type,nt=He.bytesPerElement,$e=i.isWebGL2===!0&&(st===t.INT||st===t.UNSIGNED_INT||te.gpuType===e_);if(te.isInterleavedBufferAttribute){const Be=te.data,U=Be.stride,oe=te.offset;if(Be.isInstancedInterleavedBuffer){for(let le=0;le<pe.locationSize;le++)L(pe.location+le,Be.meshPerAttribute);I.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let le=0;le<pe.locationSize;le++)S(pe.location+le);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let le=0;le<pe.locationSize;le++)P(pe.location+le,Ne/pe.locationSize,st,de,U*nt,(oe+Ne/pe.locationSize*le)*nt,$e)}else{if(te.isInstancedBufferAttribute){for(let Be=0;Be<pe.locationSize;Be++)L(pe.location+Be,te.meshPerAttribute);I.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Be=0;Be<pe.locationSize;Be++)S(pe.location+Be);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let Be=0;Be<pe.locationSize;Be++)P(pe.location+Be,Ne/pe.locationSize,st,de,Ne*nt,Ne/pe.locationSize*Be*nt,$e)}}else if(q!==void 0){const de=q[ue];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(pe.location,de);break;case 3:t.vertexAttrib3fv(pe.location,de);break;case 4:t.vertexAttrib4fv(pe.location,de);break;default:t.vertexAttrib1fv(pe.location,de)}}}}A()}function b(){$();for(const I in a){const j=a[I];for(const X in j){const ne=j[X];for(const B in ne)v(ne[B].object),delete ne[B];delete j[X]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;const j=a[I.id];for(const X in j){const ne=j[X];for(const B in ne)v(ne[B].object),delete ne[B];delete j[X]}delete a[I.id]}function G(I){for(const j in a){const X=a[j];if(X[I.id]===void 0)continue;const ne=X[I.id];for(const B in ne)v(ne[B].object),delete ne[B];delete X[I.id]}}function $(){ie(),u=!0,c!==l&&(c=l,p(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:ie,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:S,disableUnusedAttributes:A}}function Vb(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,h){if(h===0)return;let p,v;if(r)p=t,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,u,f,h),n.update(f,s,h)}function c(u,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<h;v++)this.render(u[v],f[v]);else{p.multiDrawArraysWEBGL(s,u,0,f,0,h);let v=0;for(let y=0;y<h;y++)v+=f[y];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Gb(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,S=o||e.has("OES_texture_float"),L=x&&S,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:m,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:L,maxSamples:A}}function Wb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new kr,a=new At,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const m=s?0:i,x=m*4;let S=d.clippingState||null;l.value=S,S=u(v,h,x,p);for(let L=0;L!==x;++L)S[L]=n[L];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const d=p+y*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,S=p;x!==y;++x,S+=4)o.copy(f[x]).applyMatrix4(m,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function jb(t){let e=new WeakMap;function n(o,a){return a===xu?o.mapping=qo:a===fh&&(o.mapping=Zo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xu||a===fh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new i1(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ap extends x_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Lo=4,Zg=[.125,.215,.35,.446,.526,.582],Ss=20,qd=new Ap,Kg=new Et;let Zd=null,Kd=0,Jd=0;const _s=(1+Math.sqrt(5))/2,fo=1/_s,Jg=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,_s,fo),new O(0,_s,-fo),new O(fo,0,_s),new O(-fo,0,_s),new O(_s,fo,0),new O(-_s,fo,0)];class Ga{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zd,Kd,Jd),e.scissorTest=!1,Sc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qo||e.mapping===Zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:hl,format:Hi,colorSpace:br,depthBuffer:!1},r=Qg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xb(s)),this._blurMaterial=$b(s,e,n)}return r}_compileMaterial(e){const n=new Xe(this._lodPlanes[0],e);this._renderer.compile(n,qd)}_sceneToCubeUV(e,n,i,r){const a=new Qn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Kg),u.toneMapping=ts,u.autoClear=!1;const p=new Bi({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),v=new Xe(new dn,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(Kg),y=!0);for(let d=0;d<6;d++){const m=d%3;m===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):m===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;Sc(r,m*x,d>2?x:0,x,x),u.setRenderTarget(r),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===qo||e.mapping===Zo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=t0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Sc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,qd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jg[(r-1)%Jg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Xe(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ss-1),y=s/v,g=isFinite(s)?1+Math.floor(u*y):Ss;g>Ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ss}`);const d=[];let m=0;for(let P=0;P<Ss;++P){const k=P/y,b=Math.exp(-k*k/2);d.push(b),P===0?m+=b:P<g&&(m+=2*b)}for(let P=0;P<d.length;P++)d[P]=d[P]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const S=this._sizeLods[r],L=3*S*(r>x-Lo?r-x+Lo:0),A=4*(this._cubeSize-S);Sc(n,L,A,3*S,2*S),l.setRenderTarget(n),l.render(f,qd)}}function Xb(t){const e=[],n=[],i=[];let r=t;const s=t-Lo+1+Zg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Lo?l=Zg[o-t+Lo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,y=3,g=2,d=1,m=new Float32Array(y*v*p),x=new Float32Array(g*v*p),S=new Float32Array(d*v*p);for(let A=0;A<p;A++){const P=A%3*2/3-1,k=A>2?0:-1,b=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];m.set(b,y*v*A),x.set(h,g*v*A);const T=[A,A,A,A,A,A];S.set(T,d*v*A)}const L=new xn;L.setAttribute("position",new Ci(m,y)),L.setAttribute("uv",new Ci(x,g)),L.setAttribute("faceIndex",new Ci(S,d)),e.push(L),r>Lo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Qg(t,e,n){const i=new Os(t,e,n);return i.texture.mapping=Gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $b(t,e,n){const i=new Float32Array(Ss),r=new O(0,1,0);return new Fs({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cp(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function e0(){return new Fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cp(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function t0(){return new Fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Cp(){return`

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
	`}function Yb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===xu||l===fh,u=l===qo||l===Zo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Ga(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Ga(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function qb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Zb(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const y=h.morphAttributes[v];for(let g=0,d=y.length;g<d;g++)e.remove(y[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const y=p[v];for(let g=0,d=y.length;g<d;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let y=0;if(p!==null){const m=p.array;y=p.version;for(let x=0,S=m.length;x<S;x+=3){const L=m[x+0],A=m[x+1],P=m[x+2];h.push(L,A,A,P,P,L)}}else if(v!==void 0){const m=v.array;y=v.version;for(let x=0,S=m.length/3-1;x<S;x+=3){const L=x+0,A=x+1,P=x+2;h.push(L,A,A,P,P,L)}}else return;const g=new(u_(h)?g_:m_)(h,1);g.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Kb(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,v){t.drawElements(s,v,a,p*l),n.update(v,s,1)}function f(p,v,y){if(y===0)return;let g,d;if(r)g=t,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](s,v,a,p*l,y),n.update(v,s,y)}function h(p,v,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<y;d++)this.render(p[d]/l,v[d]);else{g.multiDrawElementsWEBGL(s,v,0,a,p,0,y);let d=0;for(let m=0;m<y;m++)d+=v[m];n.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function Jb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Qb(t,e){return t[0]-e[0]}function eT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function tT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Qt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=v!==void 0?v.length:0;let g=s.get(u);if(g===void 0||g.count!==y){let j=function(){ie.dispose(),s.delete(u),u.removeEventListener("dispose",j)};var p=j;g!==void 0&&g.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],k=u.morphAttributes.color||[];let b=0;x===!0&&(b=1),S===!0&&(b=2),L===!0&&(b=3);let T=u.attributes.position.count*b,G=1;T>e.maxTextureSize&&(G=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const $=new Float32Array(T*G*4*y),ie=new h_($,T,G,y);ie.type=Wr,ie.needsUpdate=!0;const I=b*4;for(let X=0;X<y;X++){const ne=A[X],B=P[X],Y=k[X],q=T*G*4*X;for(let ue=0;ue<ne.count;ue++){const pe=ue*I;x===!0&&(o.fromBufferAttribute(ne,ue),$[q+pe+0]=o.x,$[q+pe+1]=o.y,$[q+pe+2]=o.z,$[q+pe+3]=0),S===!0&&(o.fromBufferAttribute(B,ue),$[q+pe+4]=o.x,$[q+pe+5]=o.y,$[q+pe+6]=o.z,$[q+pe+7]=0),L===!0&&(o.fromBufferAttribute(Y,ue),$[q+pe+8]=o.x,$[q+pe+9]=o.y,$[q+pe+10]=o.z,$[q+pe+11]=Y.itemSize===4?o.w:1)}}g={count:y,texture:ie,size:new Se(T,G)},s.set(u,g),u.addEventListener("dispose",j)}let d=0;for(let x=0;x<h.length;x++)d+=h[x];const m=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",m),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const v=h===void 0?0:h.length;let y=i[u.id];if(y===void 0||y.length!==v){y=[];for(let S=0;S<v;S++)y[S]=[S,0];i[u.id]=y}for(let S=0;S<v;S++){const L=y[S];L[0]=S,L[1]=h[S]}y.sort(eT);for(let S=0;S<8;S++)S<v&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Qb);const g=u.morphAttributes.position,d=u.morphAttributes.normal;let m=0;for(let S=0;S<8;S++){const L=a[S],A=L[0],P=L[1];A!==Number.MAX_SAFE_INTEGER&&P?(g&&u.getAttribute("morphTarget"+S)!==g[A]&&u.setAttribute("morphTarget"+S,g[A]),d&&u.getAttribute("morphNormal"+S)!==d[A]&&u.setAttribute("morphNormal"+S,d[A]),r[S]=P,m+=P):(g&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),d&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const x=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function nT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class S_ extends $n{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Rs,u!==Rs&&u!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Rs&&(i=Gr),i===void 0&&u===Ko&&(i=Cs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const M_=new $n,w_=new S_(1,1);w_.compareFunction=c_;const E_=new h_,b_=new Bw,T_=new __,n0=[],i0=[],r0=new Float32Array(16),s0=new Float32Array(9),o0=new Float32Array(4);function ia(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=n0[r];if(s===void 0&&(s=new Float32Array(r),n0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function _n(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function yn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xu(t,e){let n=i0[e];n===void 0&&(n=new Int32Array(e),i0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2fv(this.addr,e),yn(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;t.uniform3fv(this.addr,e),yn(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4fv(this.addr,e),yn(n,e)}}function aT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,i))return;o0.set(i),t.uniformMatrix2fv(this.addr,!1,o0),yn(n,i)}}function lT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,i))return;s0.set(i),t.uniformMatrix3fv(this.addr,!1,s0),yn(n,i)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,i))return;r0.set(i),t.uniformMatrix4fv(this.addr,!1,r0),yn(n,i)}}function uT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2iv(this.addr,e),yn(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;t.uniform3iv(this.addr,e),yn(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4iv(this.addr,e),yn(n,e)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2uiv(this.addr,e),yn(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;t.uniform3uiv(this.addr,e),yn(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4uiv(this.addr,e),yn(n,e)}}function xT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?w_:M_;n.setTexture2D(e||s,r)}function _T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||b_,r)}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||T_,r)}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||E_,r)}function MT(t){switch(t){case 5126:return iT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return aT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return dT;case 35668:case 35672:return fT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}function wT(t,e){t.uniform1fv(this.addr,e)}function ET(t,e){const n=ia(e,this.size,2);t.uniform2fv(this.addr,n)}function bT(t,e){const n=ia(e,this.size,3);t.uniform3fv(this.addr,n)}function TT(t,e){const n=ia(e,this.size,4);t.uniform4fv(this.addr,n)}function AT(t,e){const n=ia(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function CT(t,e){const n=ia(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function RT(t,e){const n=ia(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function PT(t,e){t.uniform1iv(this.addr,e)}function LT(t,e){t.uniform2iv(this.addr,e)}function NT(t,e){t.uniform3iv(this.addr,e)}function IT(t,e){t.uniform4iv(this.addr,e)}function DT(t,e){t.uniform1uiv(this.addr,e)}function UT(t,e){t.uniform2uiv(this.addr,e)}function OT(t,e){t.uniform3uiv(this.addr,e)}function FT(t,e){t.uniform4uiv(this.addr,e)}function kT(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||M_,s[o])}function zT(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||b_,s[o])}function BT(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||T_,s[o])}function HT(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||E_,s[o])}function VT(t){switch(t){case 5126:return wT;case 35664:return ET;case 35665:return bT;case 35666:return TT;case 35674:return AT;case 35675:return CT;case 35676:return RT;case 5124:case 35670:return PT;case 35667:case 35671:return LT;case 35668:case 35672:return NT;case 35669:case 35673:return IT;case 5125:return DT;case 36294:return UT;case 36295:return OT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return HT}}class GT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=MT(n.type)}}class WT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=VT(n.type)}}class jT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Qd=/(\w+)(\])?(\[|\.)?/g;function a0(t,e){t.seq.push(e),t.map[e.id]=e}function XT(t,e,n){const i=t.name,r=i.length;for(Qd.lastIndex=0;;){const s=Qd.exec(i),o=Qd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){a0(n,c===void 0?new GT(a,t,e):new WT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new jT(a),a0(n,f)),n=f}}}class Wc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);XT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function l0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $T=37297;let YT=0;function qT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function ZT(t){const e=zt.getPrimaries(zt.workingColorSpace),n=zt.getPrimaries(t);let i;switch(e===n?i="":e===Su&&n===yu?i="LinearDisplayP3ToLinearSRGB":e===yu&&n===Su&&(i="LinearSRGBToLinearDisplayP3"),t){case br:case Wu:return[i,"LinearTransferOETF"];case Kt:case Mp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function c0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+qT(t.getShaderSource(e),o)}else return r}function KT(t,e){const n=ZT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function JT(t,e){let n;switch(e){case KM:n="Linear";break;case JM:n="Reinhard";break;case QM:n="OptimizedCineon";break;case Qx:n="ACESFilmic";break;case tw:n="AgX";break;case ew:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function QT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(No).join(`
`)}function e2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(No).join(`
`)}function t2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function n2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function No(t){return t!==""}function u0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function d0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i2=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(t){return t.replace(i2,s2)}const r2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function s2(t,e){let n=wt[e];if(n===void 0){const i=r2.get(e);if(i!==void 0)n=wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xh(n)}const o2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(t){return t.replace(o2,a2)}function a2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function h0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Kx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pr&&(e="SHADOWMAP_TYPE_VSM"),e}function c2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case qo:case Zo:e="ENVMAP_TYPE_CUBE";break;case Gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zo:e="ENVMAP_MODE_REFRACTION";break}return e}function d2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jx:e="ENVMAP_BLENDING_MULTIPLY";break;case qM:e="ENVMAP_BLENDING_MIX";break;case ZM:e="ENVMAP_BLENDING_ADD";break}return e}function f2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function h2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=l2(n),c=c2(n),u=u2(n),f=d2(n),h=f2(n),p=n.isWebGL2?"":QT(n),v=e2(n),y=t2(s),g=r.createProgram();let d,m,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(No).join(`
`),d.length>0&&(d+=`
`),m=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(No).join(`
`),m.length>0&&(m+=`
`)):(d=[h0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),m=[p,h0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ts?"#define TONE_MAPPING":"",n.toneMapping!==ts?wt.tonemapping_pars_fragment:"",n.toneMapping!==ts?JT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,KT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),o=xh(o),o=u0(o,n),o=d0(o,n),a=xh(a),a=u0(a,n),a=d0(a,n),o=f0(o),a=f0(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=x+d+o,L=x+m+a,A=l0(r,r.VERTEX_SHADER,S),P=l0(r,r.FRAGMENT_SHADER,L);r.attachShader(g,A),r.attachShader(g,P),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function k($){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(g).trim(),I=r.getShaderInfoLog(A).trim(),j=r.getShaderInfoLog(P).trim();let X=!0,ne=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,A,P);else{const B=c0(r,A,"vertex"),Y=c0(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+B+`
`+Y)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(I===""||j==="")&&(ne=!1);ne&&($.diagnostics={runnable:X,programLog:ie,vertexShader:{log:I,prefix:d},fragmentShader:{log:j,prefix:m}})}r.deleteShader(A),r.deleteShader(P),b=new Wc(r,g),T=n2(r,g)}let b;this.getUniforms=function(){return b===void 0&&k(this),b};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let G=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(g,$T)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=P,this}let p2=0;class m2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new g2(e),n.set(e,i)),i}}class g2{constructor(e){this.id=p2++,this.code=e,this.usedTimes=0}}function v2(t,e,n,i,r,s,o){const a=new bp,l=new m2,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return b===0?"uv":`uv${b}`}function g(b,T,G,$,ie){const I=$.fog,j=ie.geometry,X=b.isMeshStandardMaterial?$.environment:null,ne=(b.isMeshStandardMaterial?n:e).get(b.envMap||X),B=ne&&ne.mapping===Gu?ne.image.height:null,Y=v[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const q=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ue=q!==void 0?q.length:0;let pe=0;j.morphAttributes.position!==void 0&&(pe=1),j.morphAttributes.normal!==void 0&&(pe=2),j.morphAttributes.color!==void 0&&(pe=3);let te,de,Ne,He;if(Y){const Wt=Ji[Y];te=Wt.vertexShader,de=Wt.fragmentShader}else te=b.vertexShader,de=b.fragmentShader,l.update(b),Ne=l.getVertexShaderID(b),He=l.getFragmentShaderID(b);const Oe=t.getRenderTarget(),st=ie.isInstancedMesh===!0,nt=ie.isBatchedMesh===!0,$e=!!b.map,Be=!!b.matcap,U=!!ne,oe=!!b.aoMap,le=!!b.lightMap,_e=!!b.bumpMap,ae=!!b.normalMap,et=!!b.displacementMap,Fe=!!b.emissiveMap,C=!!b.metalnessMap,E=!!b.roughnessMap,H=b.anisotropy>0,fe=b.clearcoat>0,ge=b.iridescence>0,ve=b.sheen>0,Je=b.transmission>0,Ce=H&&!!b.anisotropyMap,ze=fe&&!!b.clearcoatMap,rt=fe&&!!b.clearcoatNormalMap,mt=fe&&!!b.clearcoatRoughnessMap,re=ge&&!!b.iridescenceMap,bt=ge&&!!b.iridescenceThicknessMap,Ve=ve&&!!b.sheenColorMap,ot=ve&&!!b.sheenRoughnessMap,Ye=!!b.specularMap,We=!!b.specularColorMap,at=!!b.specularIntensityMap,Pt=Je&&!!b.transmissionMap,Rt=Je&&!!b.thicknessMap,xt=!!b.gradientMap,be=!!b.alphaMap,z=b.alphaTest>0,Ae=!!b.alphaHash,Ee=!!b.extensions,dt=!!j.attributes.uv1,lt=!!j.attributes.uv2,Ut=!!j.attributes.uv3;let It=ts;return b.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(It=t.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:te,fragmentShader:de,defines:b.defines,customVertexShaderID:Ne,customFragmentShaderID:He,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:nt,instancing:st,instancingColor:st&&ie.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Oe===null?t.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:br,map:$e,matcap:Be,envMap:U,envMapMode:U&&ne.mapping,envMapCubeUVHeight:B,aoMap:oe,lightMap:le,bumpMap:_e,normalMap:ae,displacementMap:h&&et,emissiveMap:Fe,normalMapObjectSpace:ae&&b.normalMapType===hw,normalMapTangentSpace:ae&&b.normalMapType===l_,metalnessMap:C,roughnessMap:E,anisotropy:H,anisotropyMap:Ce,clearcoat:fe,clearcoatMap:ze,clearcoatNormalMap:rt,clearcoatRoughnessMap:mt,iridescence:ge,iridescenceMap:re,iridescenceThicknessMap:bt,sheen:ve,sheenColorMap:Ve,sheenRoughnessMap:ot,specularMap:Ye,specularColorMap:We,specularIntensityMap:at,transmission:Je,transmissionMap:Pt,thicknessMap:Rt,gradientMap:xt,opaque:b.transparent===!1&&b.blending===Bo,alphaMap:be,alphaTest:z,alphaHash:Ae,combine:b.combine,mapUv:$e&&y(b.map.channel),aoMapUv:oe&&y(b.aoMap.channel),lightMapUv:le&&y(b.lightMap.channel),bumpMapUv:_e&&y(b.bumpMap.channel),normalMapUv:ae&&y(b.normalMap.channel),displacementMapUv:et&&y(b.displacementMap.channel),emissiveMapUv:Fe&&y(b.emissiveMap.channel),metalnessMapUv:C&&y(b.metalnessMap.channel),roughnessMapUv:E&&y(b.roughnessMap.channel),anisotropyMapUv:Ce&&y(b.anisotropyMap.channel),clearcoatMapUv:ze&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:rt&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:ot&&y(b.sheenRoughnessMap.channel),specularMapUv:Ye&&y(b.specularMap.channel),specularColorMapUv:We&&y(b.specularColorMap.channel),specularIntensityMapUv:at&&y(b.specularIntensityMap.channel),transmissionMapUv:Pt&&y(b.transmissionMap.channel),thicknessMapUv:Rt&&y(b.thicknessMap.channel),alphaMapUv:be&&y(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ae||H),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:dt,vertexUv2s:lt,vertexUv3s:Ut,pointsUvs:ie.isPoints===!0&&!!j.attributes.uv&&($e||be),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ie.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:It,useLegacyLights:t._useLegacyLights,decodeVideoTexture:$e&&b.map.isVideoTexture===!0&&zt.getTransfer(b.map.colorSpace)===qt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===li,flipSided:b.side===Xn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Ee&&b.extensions.derivatives===!0,extensionFragDepth:Ee&&b.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)T.push(G),T.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(m(T,b),x(T,b),T.push(t.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function m(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function x(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function S(b){const T=v[b.type];let G;if(T){const $=Ji[T];G=Qw.clone($.uniforms)}else G=b.uniforms;return G}function L(b,T){let G;for(let $=0,ie=c.length;$<ie;$++){const I=c[$];if(I.cacheKey===T){G=I,++G.usedTimes;break}}return G===void 0&&(G=new h2(t,T,b,s),c.push(G)),G}function A(b){if(--b.usedTimes===0){const T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function P(b){l.remove(b)}function k(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:S,acquireProgram:L,releaseProgram:A,releaseShaderCache:P,programs:c,dispose:k}}function x2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function _2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function p0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function m0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,v,y,g){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:y,group:g},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=y,d.group=g),e++,d}function a(f,h,p,v,y,g){const d=o(f,h,p,v,y,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,v,y,g){const d=o(f,h,p,v,y,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||_2),i.length>1&&i.sort(h||p0),r.length>1&&r.sort(h||p0)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function y2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new m0,t.set(i,[o])):r>=s.length?(o=new m0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function S2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Et};break;case"SpotLight":n={position:new O,direction:new O,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function M2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let w2=0;function E2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function b2(t,e){const n=new S2,i=M2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,o=new rn,a=new rn;function l(u,f){let h=0,p=0,v=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,g=0,d=0,m=0,x=0,S=0,L=0,A=0,P=0,k=0,b=0;u.sort(E2);const T=f===!0?Math.PI:1;for(let $=0,ie=u.length;$<ie;$++){const I=u[$],j=I.color,X=I.intensity,ne=I.distance,B=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=j.r*X*T,p+=j.g*X*T,v+=j.b*X*T;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(I.sh.coefficients[Y],X);b++}else if(I.isDirectionalLight){const Y=n.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const q=I.shadow,ue=i.get(I);ue.shadowBias=q.bias,ue.shadowNormalBias=q.normalBias,ue.shadowRadius=q.radius,ue.shadowMapSize=q.mapSize,r.directionalShadow[y]=ue,r.directionalShadowMap[y]=B,r.directionalShadowMatrix[y]=I.shadow.matrix,S++}r.directional[y]=Y,y++}else if(I.isSpotLight){const Y=n.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(j).multiplyScalar(X*T),Y.distance=ne,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,r.spot[d]=Y;const q=I.shadow;if(I.map&&(r.spotLightMap[P]=I.map,P++,q.updateMatrices(I),I.castShadow&&k++),r.spotLightMatrix[d]=q.matrix,I.castShadow){const ue=i.get(I);ue.shadowBias=q.bias,ue.shadowNormalBias=q.normalBias,ue.shadowRadius=q.radius,ue.shadowMapSize=q.mapSize,r.spotShadow[d]=ue,r.spotShadowMap[d]=B,A++}d++}else if(I.isRectAreaLight){const Y=n.get(I);Y.color.copy(j).multiplyScalar(X),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),r.rectArea[m]=Y,m++}else if(I.isPointLight){const Y=n.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*T),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const q=I.shadow,ue=i.get(I);ue.shadowBias=q.bias,ue.shadowNormalBias=q.normalBias,ue.shadowRadius=q.radius,ue.shadowMapSize=q.mapSize,ue.shadowCameraNear=q.camera.near,ue.shadowCameraFar=q.camera.far,r.pointShadow[g]=ue,r.pointShadowMap[g]=B,r.pointShadowMatrix[g]=I.shadow.matrix,L++}r.point[g]=Y,g++}else if(I.isHemisphereLight){const Y=n.get(I);Y.skyColor.copy(I.color).multiplyScalar(X*T),Y.groundColor.copy(I.groundColor).multiplyScalar(X*T),r.hemi[x]=Y,x++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const G=r.hash;(G.directionalLength!==y||G.pointLength!==g||G.spotLength!==d||G.rectAreaLength!==m||G.hemiLength!==x||G.numDirectionalShadows!==S||G.numPointShadows!==L||G.numSpotShadows!==A||G.numSpotMaps!==P||G.numLightProbes!==b)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=m,r.point.length=g,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=A+P-k,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=b,G.directionalLength=y,G.pointLength=g,G.spotLength=d,G.rectAreaLength=m,G.hemiLength=x,G.numDirectionalShadows=S,G.numPointShadows=L,G.numSpotShadows=A,G.numSpotMaps=P,G.numLightProbes=b,r.version=w2++)}function c(u,f){let h=0,p=0,v=0,y=0,g=0;const d=f.matrixWorldInverse;for(let m=0,x=u.length;m<x;m++){const S=u[m];if(S.isDirectionalLight){const L=r.directional[h];L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),h++}else if(S.isSpotLight){const L=r.spot[v];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),v++}else if(S.isRectAreaLight){const L=r.rectArea[y];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const L=r.point[p];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const L=r.hemi[g];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:r}}function g0(t,e){const n=new b2(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function T2(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new g0(t,e),n.set(s,[l])):o>=a.length?(l=new g0(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class A2 extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C2 extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const R2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P2=`uniform sampler2D shadow_pass;
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
}`;function L2(t,e,n){let i=new Tp;const r=new Se,s=new Se,o=new Qt,a=new A2({depthPacking:fw}),l=new C2,c={},u=n.maxTextureSize,f={[os]:Xn,[Xn]:os,[li]:li},h=new Fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:R2,fragmentShader:P2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new xn;v.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Xe(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zx;let d=this.type;this.render=function(A,P,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const b=t.getRenderTarget(),T=t.getActiveCubeFace(),G=t.getActiveMipmapLevel(),$=t.state;$.setBlending(es),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ie=d!==pr&&this.type===pr,I=d===pr&&this.type!==pr;for(let j=0,X=A.length;j<X;j++){const ne=A[j],B=ne.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Y=B.getFrameExtents();if(r.multiply(Y),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,B.mapSize.y=s.y)),B.map===null||ie===!0||I===!0){const ue=this.type!==pr?{minFilter:Gn,magFilter:Gn}:{};B.map!==null&&B.map.dispose(),B.map=new Os(r.x,r.y,ue),B.map.texture.name=ne.name+".shadowMap",B.camera.updateProjectionMatrix()}t.setRenderTarget(B.map),t.clear();const q=B.getViewportCount();for(let ue=0;ue<q;ue++){const pe=B.getViewport(ue);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),$.viewport(o),B.updateMatrices(ne,ue),i=B.getFrustum(),S(P,k,B.camera,ne,this.type)}B.isPointLightShadow!==!0&&this.type===pr&&m(B,k),B.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(b,T,G)};function m(A,P){const k=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Os(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(P,null,k,h,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(P,null,k,p,y,null)}function x(A,P,k,b){let T=null;const G=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(G!==void 0)T=G;else if(T=k.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const $=T.uuid,ie=P.uuid;let I=c[$];I===void 0&&(I={},c[$]=I);let j=I[ie];j===void 0&&(j=T.clone(),I[ie]=j,P.addEventListener("dispose",L)),T=j}if(T.visible=P.visible,T.wireframe=P.wireframe,b===pr?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:f[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const $=t.properties.get(T);$.light=k}return T}function S(A,P,k,b,T){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===pr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);const ie=e.update(A),I=A.material;if(Array.isArray(I)){const j=ie.groups;for(let X=0,ne=j.length;X<ne;X++){const B=j[X],Y=I[B.materialIndex];if(Y&&Y.visible){const q=x(A,Y,b,T);A.onBeforeShadow(t,A,P,k,ie,q,B),t.renderBufferDirect(k,null,ie,q,A,B),A.onAfterShadow(t,A,P,k,ie,q,B)}}}else if(I.visible){const j=x(A,I,b,T);A.onBeforeShadow(t,A,P,k,ie,j,null),t.renderBufferDirect(k,null,ie,j,A,null),A.onAfterShadow(t,A,P,k,ie,j,null)}}const $=A.children;for(let ie=0,I=$.length;ie<I;ie++)S($[ie],P,k,b,T)}function L(A){A.target.removeEventListener("dispose",L);for(const k in c){const b=c[k],T=A.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function N2(t,e,n){const i=n.isWebGL2;function r(){let z=!1;const Ae=new Qt;let Ee=null;const dt=new Qt(0,0,0,0);return{setMask:function(lt){Ee!==lt&&!z&&(t.colorMask(lt,lt,lt,lt),Ee=lt)},setLocked:function(lt){z=lt},setClear:function(lt,Ut,It,Ht,Wt){Wt===!0&&(lt*=Ht,Ut*=Ht,It*=Ht),Ae.set(lt,Ut,It,Ht),dt.equals(Ae)===!1&&(t.clearColor(lt,Ut,It,Ht),dt.copy(Ae))},reset:function(){z=!1,Ee=null,dt.set(-1,0,0,0)}}}function s(){let z=!1,Ae=null,Ee=null,dt=null;return{setTest:function(lt){lt?nt(t.DEPTH_TEST):$e(t.DEPTH_TEST)},setMask:function(lt){Ae!==lt&&!z&&(t.depthMask(lt),Ae=lt)},setFunc:function(lt){if(Ee!==lt){switch(lt){case VM:t.depthFunc(t.NEVER);break;case GM:t.depthFunc(t.ALWAYS);break;case WM:t.depthFunc(t.LESS);break;case vu:t.depthFunc(t.LEQUAL);break;case jM:t.depthFunc(t.EQUAL);break;case XM:t.depthFunc(t.GEQUAL);break;case $M:t.depthFunc(t.GREATER);break;case YM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ee=lt}},setLocked:function(lt){z=lt},setClear:function(lt){dt!==lt&&(t.clearDepth(lt),dt=lt)},reset:function(){z=!1,Ae=null,Ee=null,dt=null}}}function o(){let z=!1,Ae=null,Ee=null,dt=null,lt=null,Ut=null,It=null,Ht=null,Wt=null;return{setTest:function(Ft){z||(Ft?nt(t.STENCIL_TEST):$e(t.STENCIL_TEST))},setMask:function(Ft){Ae!==Ft&&!z&&(t.stencilMask(Ft),Ae=Ft)},setFunc:function(Ft,Sn,mi){(Ee!==Ft||dt!==Sn||lt!==mi)&&(t.stencilFunc(Ft,Sn,mi),Ee=Ft,dt=Sn,lt=mi)},setOp:function(Ft,Sn,mi){(Ut!==Ft||It!==Sn||Ht!==mi)&&(t.stencilOp(Ft,Sn,mi),Ut=Ft,It=Sn,Ht=mi)},setLocked:function(Ft){z=Ft},setClear:function(Ft){Wt!==Ft&&(t.clearStencil(Ft),Wt=Ft)},reset:function(){z=!1,Ae=null,Ee=null,dt=null,lt=null,Ut=null,It=null,Ht=null,Wt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,y=[],g=null,d=!1,m=null,x=null,S=null,L=null,A=null,P=null,k=null,b=new Et(0,0,0),T=0,G=!1,$=null,ie=null,I=null,j=null,X=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=Y>=2);let ue=null,pe={};const te=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),Ne=new Qt().fromArray(te),He=new Qt().fromArray(de);function Oe(z,Ae,Ee,dt){const lt=new Uint8Array(4),Ut=t.createTexture();t.bindTexture(z,Ut),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let It=0;It<Ee;It++)i&&(z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY)?t.texImage3D(Ae,0,t.RGBA,1,1,dt,0,t.RGBA,t.UNSIGNED_BYTE,lt):t.texImage2D(Ae+It,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,lt);return Ut}const st={};st[t.TEXTURE_2D]=Oe(t.TEXTURE_2D,t.TEXTURE_2D,1),st[t.TEXTURE_CUBE_MAP]=Oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(st[t.TEXTURE_2D_ARRAY]=Oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),st[t.TEXTURE_3D]=Oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),nt(t.DEPTH_TEST),l.setFunc(vu),Fe(!1),C(Qm),nt(t.CULL_FACE),ae(es);function nt(z){h[z]!==!0&&(t.enable(z),h[z]=!0)}function $e(z){h[z]!==!1&&(t.disable(z),h[z]=!1)}function Be(z,Ae){return p[z]!==Ae?(t.bindFramebuffer(z,Ae),p[z]=Ae,i&&(z===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Ae),z===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function U(z,Ae){let Ee=y,dt=!1;if(z)if(Ee=v.get(Ae),Ee===void 0&&(Ee=[],v.set(Ae,Ee)),z.isWebGLMultipleRenderTargets){const lt=z.texture;if(Ee.length!==lt.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let Ut=0,It=lt.length;Ut<It;Ut++)Ee[Ut]=t.COLOR_ATTACHMENT0+Ut;Ee.length=lt.length,dt=!0}}else Ee[0]!==t.COLOR_ATTACHMENT0&&(Ee[0]=t.COLOR_ATTACHMENT0,dt=!0);else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,dt=!0);dt&&(n.isWebGL2?t.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function oe(z){return g!==z?(t.useProgram(z),g=z,!0):!1}const le={[ys]:t.FUNC_ADD,[AM]:t.FUNC_SUBTRACT,[CM]:t.FUNC_REVERSE_SUBTRACT};if(i)le[ig]=t.MIN,le[rg]=t.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(le[ig]=z.MIN_EXT,le[rg]=z.MAX_EXT)}const _e={[RM]:t.ZERO,[PM]:t.ONE,[LM]:t.SRC_COLOR,[uh]:t.SRC_ALPHA,[FM]:t.SRC_ALPHA_SATURATE,[UM]:t.DST_COLOR,[IM]:t.DST_ALPHA,[NM]:t.ONE_MINUS_SRC_COLOR,[dh]:t.ONE_MINUS_SRC_ALPHA,[OM]:t.ONE_MINUS_DST_COLOR,[DM]:t.ONE_MINUS_DST_ALPHA,[kM]:t.CONSTANT_COLOR,[zM]:t.ONE_MINUS_CONSTANT_COLOR,[BM]:t.CONSTANT_ALPHA,[HM]:t.ONE_MINUS_CONSTANT_ALPHA};function ae(z,Ae,Ee,dt,lt,Ut,It,Ht,Wt,Ft){if(z===es){d===!0&&($e(t.BLEND),d=!1);return}if(d===!1&&(nt(t.BLEND),d=!0),z!==TM){if(z!==m||Ft!==G){if((x!==ys||A!==ys)&&(t.blendEquation(t.FUNC_ADD),x=ys,A=ys),Ft)switch(z){case Bo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case eg:t.blendFunc(t.ONE,t.ONE);break;case tg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ng:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Bo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case eg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case tg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ng:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,L=null,P=null,k=null,b.set(0,0,0),T=0,m=z,G=Ft}return}lt=lt||Ae,Ut=Ut||Ee,It=It||dt,(Ae!==x||lt!==A)&&(t.blendEquationSeparate(le[Ae],le[lt]),x=Ae,A=lt),(Ee!==S||dt!==L||Ut!==P||It!==k)&&(t.blendFuncSeparate(_e[Ee],_e[dt],_e[Ut],_e[It]),S=Ee,L=dt,P=Ut,k=It),(Ht.equals(b)===!1||Wt!==T)&&(t.blendColor(Ht.r,Ht.g,Ht.b,Wt),b.copy(Ht),T=Wt),m=z,G=!1}function et(z,Ae){z.side===li?$e(t.CULL_FACE):nt(t.CULL_FACE);let Ee=z.side===Xn;Ae&&(Ee=!Ee),Fe(Ee),z.blending===Bo&&z.transparent===!1?ae(es):ae(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const dt=z.stencilWrite;c.setTest(dt),dt&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),H(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?nt(t.SAMPLE_ALPHA_TO_COVERAGE):$e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(z){$!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),$=z)}function C(z){z!==EM?(nt(t.CULL_FACE),z!==ie&&(z===Qm?t.cullFace(t.BACK):z===bM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):$e(t.CULL_FACE),ie=z}function E(z){z!==I&&(B&&t.lineWidth(z),I=z)}function H(z,Ae,Ee){z?(nt(t.POLYGON_OFFSET_FILL),(j!==Ae||X!==Ee)&&(t.polygonOffset(Ae,Ee),j=Ae,X=Ee)):$e(t.POLYGON_OFFSET_FILL)}function fe(z){z?nt(t.SCISSOR_TEST):$e(t.SCISSOR_TEST)}function ge(z){z===void 0&&(z=t.TEXTURE0+ne-1),ue!==z&&(t.activeTexture(z),ue=z)}function ve(z,Ae,Ee){Ee===void 0&&(ue===null?Ee=t.TEXTURE0+ne-1:Ee=ue);let dt=pe[Ee];dt===void 0&&(dt={type:void 0,texture:void 0},pe[Ee]=dt),(dt.type!==z||dt.texture!==Ae)&&(ue!==Ee&&(t.activeTexture(Ee),ue=Ee),t.bindTexture(z,Ae||st[z]),dt.type=z,dt.texture=Ae)}function Je(){const z=pe[ue];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ce(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{t.compressedTexImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ye(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function We(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(z){Ne.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),Ne.copy(z))}function Pt(z){He.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),He.copy(z))}function Rt(z,Ae){let Ee=f.get(Ae);Ee===void 0&&(Ee=new WeakMap,f.set(Ae,Ee));let dt=Ee.get(z);dt===void 0&&(dt=t.getUniformBlockIndex(Ae,z.name),Ee.set(z,dt))}function xt(z,Ae){const dt=f.get(Ae).get(z);u.get(Ae)!==dt&&(t.uniformBlockBinding(Ae,dt,z.__bindingPointIndex),u.set(Ae,dt))}function be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ue=null,pe={},p={},v=new WeakMap,y=[],g=null,d=!1,m=null,x=null,S=null,L=null,A=null,P=null,k=null,b=new Et(0,0,0),T=0,G=!1,$=null,ie=null,I=null,j=null,X=null,Ne.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:nt,disable:$e,bindFramebuffer:Be,drawBuffers:U,useProgram:oe,setBlending:ae,setMaterial:et,setFlipSided:Fe,setCullFace:C,setLineWidth:E,setPolygonOffset:H,setScissorTest:fe,activeTexture:ge,bindTexture:ve,unbindTexture:Je,compressedTexImage2D:Ce,compressedTexImage3D:ze,texImage2D:Ye,texImage3D:We,updateUBOMapping:Rt,uniformBlockBinding:xt,texStorage2D:Ve,texStorage3D:ot,texSubImage2D:rt,texSubImage3D:mt,compressedTexSubImage2D:re,compressedTexSubImage3D:bt,scissor:at,viewport:Pt,reset:be}}function I2(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,E){return p?new OffscreenCanvas(C,E):ml("canvas")}function y(C,E,H,fe){let ge=1;if((C.width>fe||C.height>fe)&&(ge=fe/Math.max(C.width,C.height)),ge<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ve=E?wu:Math.floor,Je=ve(ge*C.width),Ce=ve(ge*C.height);f===void 0&&(f=v(Je,Ce));const ze=H?v(Je,Ce):f;return ze.width=Je,ze.height=Ce,ze.getContext("2d").drawImage(C,0,0,Je,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Je+"x"+Ce+")."),ze}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return vh(C.width)&&vh(C.height)}function d(C){return a?!1:C.wrapS!==ci||C.wrapT!==ci||C.minFilter!==Gn&&C.minFilter!==Wn}function m(C,E){return C.generateMipmaps&&E&&C.minFilter!==Gn&&C.minFilter!==Wn}function x(C){t.generateMipmap(C)}function S(C,E,H,fe,ge=!1){if(a===!1)return E;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ve=E;if(E===t.RED&&(H===t.FLOAT&&(ve=t.R32F),H===t.HALF_FLOAT&&(ve=t.R16F),H===t.UNSIGNED_BYTE&&(ve=t.R8)),E===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ve=t.R8UI),H===t.UNSIGNED_SHORT&&(ve=t.R16UI),H===t.UNSIGNED_INT&&(ve=t.R32UI),H===t.BYTE&&(ve=t.R8I),H===t.SHORT&&(ve=t.R16I),H===t.INT&&(ve=t.R32I)),E===t.RG&&(H===t.FLOAT&&(ve=t.RG32F),H===t.HALF_FLOAT&&(ve=t.RG16F),H===t.UNSIGNED_BYTE&&(ve=t.RG8)),E===t.RGBA){const Je=ge?_u:zt.getTransfer(fe);H===t.FLOAT&&(ve=t.RGBA32F),H===t.HALF_FLOAT&&(ve=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ve=Je===qt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ve=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ve=t.RGB5_A1)}return(ve===t.R16F||ve===t.R32F||ve===t.RG16F||ve===t.RG32F||ve===t.RGBA16F||ve===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function L(C,E,H){return m(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==Gn&&C.minFilter!==Wn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function A(C){return C===Gn||C===sg||C===Td?t.NEAREST:t.LINEAR}function P(C){const E=C.target;E.removeEventListener("dispose",P),b(E),E.isVideoTexture&&u.delete(E)}function k(C){const E=C.target;E.removeEventListener("dispose",k),G(E)}function b(C){const E=i.get(C);if(E.__webglInit===void 0)return;const H=C.source,fe=h.get(H);if(fe){const ge=fe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&T(C),Object.keys(fe).length===0&&h.delete(H)}i.remove(C)}function T(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const H=C.source,fe=h.get(H);delete fe[E.__cacheKey],o.memory.textures--}function G(C){const E=C.texture,H=i.get(C),fe=i.get(E);if(fe.__webglTexture!==void 0&&(t.deleteTexture(fe.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(H.__webglFramebuffer[ge]))for(let ve=0;ve<H.__webglFramebuffer[ge].length;ve++)t.deleteFramebuffer(H.__webglFramebuffer[ge][ve]);else t.deleteFramebuffer(H.__webglFramebuffer[ge]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ge])}else{if(Array.isArray(H.__webglFramebuffer))for(let ge=0;ge<H.__webglFramebuffer.length;ge++)t.deleteFramebuffer(H.__webglFramebuffer[ge]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ge=0;ge<H.__webglColorRenderbuffer.length;ge++)H.__webglColorRenderbuffer[ge]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ge]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ge=0,ve=E.length;ge<ve;ge++){const Je=i.get(E[ge]);Je.__webglTexture&&(t.deleteTexture(Je.__webglTexture),o.memory.textures--),i.remove(E[ge])}i.remove(E),i.remove(C)}let $=0;function ie(){$=0}function I(){const C=$;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),$+=1,C}function j(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function X(C,E){const H=i.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const fe=C.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(H,C,E);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+E)}function ne(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Ne(H,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+E)}function B(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Ne(H,C,E);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+E)}function Y(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){He(H,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+E)}const q={[hh]:t.REPEAT,[ci]:t.CLAMP_TO_EDGE,[ph]:t.MIRRORED_REPEAT},ue={[Gn]:t.NEAREST,[sg]:t.NEAREST_MIPMAP_NEAREST,[Td]:t.NEAREST_MIPMAP_LINEAR,[Wn]:t.LINEAR,[nw]:t.LINEAR_MIPMAP_NEAREST,[fl]:t.LINEAR_MIPMAP_LINEAR},pe={[pw]:t.NEVER,[yw]:t.ALWAYS,[mw]:t.LESS,[c_]:t.LEQUAL,[gw]:t.EQUAL,[_w]:t.GEQUAL,[vw]:t.GREATER,[xw]:t.NOTEQUAL};function te(C,E,H){if(H?(t.texParameteri(C,t.TEXTURE_WRAP_S,q[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,q[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,q[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,ue[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,ue[E.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==ci||E.wrapT!==ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,A(E.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Gn&&E.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Gn||E.minFilter!==Td&&E.minFilter!==fl||E.type===Wr&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===hl&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(C,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function de(C,E){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",P));const fe=E.source;let ge=h.get(fe);ge===void 0&&(ge={},h.set(fe,ge));const ve=j(E);if(ve!==C.__cacheKey){ge[ve]===void 0&&(ge[ve]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ge[ve].usedTimes++;const Je=ge[C.__cacheKey];Je!==void 0&&(ge[C.__cacheKey].usedTimes--,Je.usedTimes===0&&T(E)),C.__cacheKey=ve,C.__webglTexture=ge[ve].texture}return H}function Ne(C,E,H){let fe=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=t.TEXTURE_3D);const ge=de(C,E),ve=E.source;n.bindTexture(fe,C.__webglTexture,t.TEXTURE0+H);const Je=i.get(ve);if(ve.version!==Je.__version||ge===!0){n.activeTexture(t.TEXTURE0+H);const Ce=zt.getPrimaries(zt.workingColorSpace),ze=E.colorSpace===bi?null:zt.getPrimaries(E.colorSpace),rt=E.colorSpace===bi||Ce===ze?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const mt=d(E)&&g(E.image)===!1;let re=y(E.image,mt,!1,r.maxTextureSize);re=Fe(E,re);const bt=g(re)||a,Ve=s.convert(E.format,E.colorSpace);let ot=s.convert(E.type),Ye=S(E.internalFormat,Ve,ot,E.colorSpace,E.isVideoTexture);te(fe,E,bt);let We;const at=E.mipmaps,Pt=a&&E.isVideoTexture!==!0&&Ye!==o_,Rt=Je.__version===void 0||ge===!0,xt=L(E,re,bt);if(E.isDepthTexture)Ye=t.DEPTH_COMPONENT,a?E.type===Wr?Ye=t.DEPTH_COMPONENT32F:E.type===Gr?Ye=t.DEPTH_COMPONENT24:E.type===Cs?Ye=t.DEPTH24_STENCIL8:Ye=t.DEPTH_COMPONENT16:E.type===Wr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Rs&&Ye===t.DEPTH_COMPONENT&&E.type!==Sp&&E.type!==Gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Gr,ot=s.convert(E.type)),E.format===Ko&&Ye===t.DEPTH_COMPONENT&&(Ye=t.DEPTH_STENCIL,E.type!==Cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Cs,ot=s.convert(E.type))),Rt&&(Pt?n.texStorage2D(t.TEXTURE_2D,1,Ye,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ye,re.width,re.height,0,Ve,ot,null));else if(E.isDataTexture)if(at.length>0&&bt){Pt&&Rt&&n.texStorage2D(t.TEXTURE_2D,xt,Ye,at[0].width,at[0].height);for(let be=0,z=at.length;be<z;be++)We=at[be],Pt?n.texSubImage2D(t.TEXTURE_2D,be,0,0,We.width,We.height,Ve,ot,We.data):n.texImage2D(t.TEXTURE_2D,be,Ye,We.width,We.height,0,Ve,ot,We.data);E.generateMipmaps=!1}else Pt?(Rt&&n.texStorage2D(t.TEXTURE_2D,xt,Ye,re.width,re.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,Ve,ot,re.data)):n.texImage2D(t.TEXTURE_2D,0,Ye,re.width,re.height,0,Ve,ot,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Pt&&Rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xt,Ye,at[0].width,at[0].height,re.depth);for(let be=0,z=at.length;be<z;be++)We=at[be],E.format!==Hi?Ve!==null?Pt?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,We.width,We.height,re.depth,Ve,We.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,be,Ye,We.width,We.height,re.depth,0,We.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?n.texSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,We.width,We.height,re.depth,Ve,ot,We.data):n.texImage3D(t.TEXTURE_2D_ARRAY,be,Ye,We.width,We.height,re.depth,0,Ve,ot,We.data)}else{Pt&&Rt&&n.texStorage2D(t.TEXTURE_2D,xt,Ye,at[0].width,at[0].height);for(let be=0,z=at.length;be<z;be++)We=at[be],E.format!==Hi?Ve!==null?Pt?n.compressedTexSubImage2D(t.TEXTURE_2D,be,0,0,We.width,We.height,Ve,We.data):n.compressedTexImage2D(t.TEXTURE_2D,be,Ye,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?n.texSubImage2D(t.TEXTURE_2D,be,0,0,We.width,We.height,Ve,ot,We.data):n.texImage2D(t.TEXTURE_2D,be,Ye,We.width,We.height,0,Ve,ot,We.data)}else if(E.isDataArrayTexture)Pt?(Rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xt,Ye,re.width,re.height,re.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ve,ot,re.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ye,re.width,re.height,re.depth,0,Ve,ot,re.data);else if(E.isData3DTexture)Pt?(Rt&&n.texStorage3D(t.TEXTURE_3D,xt,Ye,re.width,re.height,re.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ve,ot,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ye,re.width,re.height,re.depth,0,Ve,ot,re.data);else if(E.isFramebufferTexture){if(Rt)if(Pt)n.texStorage2D(t.TEXTURE_2D,xt,Ye,re.width,re.height);else{let be=re.width,z=re.height;for(let Ae=0;Ae<xt;Ae++)n.texImage2D(t.TEXTURE_2D,Ae,Ye,be,z,0,Ve,ot,null),be>>=1,z>>=1}}else if(at.length>0&&bt){Pt&&Rt&&n.texStorage2D(t.TEXTURE_2D,xt,Ye,at[0].width,at[0].height);for(let be=0,z=at.length;be<z;be++)We=at[be],Pt?n.texSubImage2D(t.TEXTURE_2D,be,0,0,Ve,ot,We):n.texImage2D(t.TEXTURE_2D,be,Ye,Ve,ot,We);E.generateMipmaps=!1}else Pt?(Rt&&n.texStorage2D(t.TEXTURE_2D,xt,Ye,re.width,re.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ve,ot,re)):n.texImage2D(t.TEXTURE_2D,0,Ye,Ve,ot,re);m(E,bt)&&x(fe),Je.__version=ve.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function He(C,E,H){if(E.image.length!==6)return;const fe=de(C,E),ge=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const ve=i.get(ge);if(ge.version!==ve.__version||fe===!0){n.activeTexture(t.TEXTURE0+H);const Je=zt.getPrimaries(zt.workingColorSpace),Ce=E.colorSpace===bi?null:zt.getPrimaries(E.colorSpace),ze=E.colorSpace===bi||Je===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const rt=E.isCompressedTexture||E.image[0].isCompressedTexture,mt=E.image[0]&&E.image[0].isDataTexture,re=[];for(let be=0;be<6;be++)!rt&&!mt?re[be]=y(E.image[be],!1,!0,r.maxCubemapSize):re[be]=mt?E.image[be].image:E.image[be],re[be]=Fe(E,re[be]);const bt=re[0],Ve=g(bt)||a,ot=s.convert(E.format,E.colorSpace),Ye=s.convert(E.type),We=S(E.internalFormat,ot,Ye,E.colorSpace),at=a&&E.isVideoTexture!==!0,Pt=ve.__version===void 0||fe===!0;let Rt=L(E,bt,Ve);te(t.TEXTURE_CUBE_MAP,E,Ve);let xt;if(rt){at&&Pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Rt,We,bt.width,bt.height);for(let be=0;be<6;be++){xt=re[be].mipmaps;for(let z=0;z<xt.length;z++){const Ae=xt[z];E.format!==Hi?ot!==null?at?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,z,0,0,Ae.width,Ae.height,ot,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,z,We,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,z,0,0,Ae.width,Ae.height,ot,Ye,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,z,We,Ae.width,Ae.height,0,ot,Ye,Ae.data)}}}else{xt=E.mipmaps,at&&Pt&&(xt.length>0&&Rt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Rt,We,re[0].width,re[0].height));for(let be=0;be<6;be++)if(mt){at?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,re[be].width,re[be].height,ot,Ye,re[be].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,We,re[be].width,re[be].height,0,ot,Ye,re[be].data);for(let z=0;z<xt.length;z++){const Ee=xt[z].image[be].image;at?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,z+1,0,0,Ee.width,Ee.height,ot,Ye,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,z+1,We,Ee.width,Ee.height,0,ot,Ye,Ee.data)}}else{at?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ot,Ye,re[be]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,We,ot,Ye,re[be]);for(let z=0;z<xt.length;z++){const Ae=xt[z];at?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,z+1,0,0,ot,Ye,Ae.image[be]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,z+1,We,ot,Ye,Ae.image[be])}}}m(E,Ve)&&x(t.TEXTURE_CUBE_MAP),ve.__version=ge.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Oe(C,E,H,fe,ge,ve){const Je=s.convert(H.format,H.colorSpace),Ce=s.convert(H.type),ze=S(H.internalFormat,Je,Ce,H.colorSpace);if(!i.get(E).__hasExternalTextures){const mt=Math.max(1,E.width>>ve),re=Math.max(1,E.height>>ve);ge===t.TEXTURE_3D||ge===t.TEXTURE_2D_ARRAY?n.texImage3D(ge,ve,ze,mt,re,E.depth,0,Je,Ce,null):n.texImage2D(ge,ve,ze,mt,re,0,Je,Ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ae(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ge,i.get(H).__webglTexture,0,_e(E)):(ge===t.TEXTURE_2D||ge>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,fe,ge,i.get(H).__webglTexture,ve),n.bindFramebuffer(t.FRAMEBUFFER,null)}function st(C,E,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let fe=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||ae(E)){const ge=E.depthTexture;ge&&ge.isDepthTexture&&(ge.type===Wr?fe=t.DEPTH_COMPONENT32F:ge.type===Gr&&(fe=t.DEPTH_COMPONENT24));const ve=_e(E);ae(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,fe,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,fe,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,fe,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const fe=_e(E);H&&ae(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,t.DEPTH24_STENCIL8,E.width,E.height):ae(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const fe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ge=0;ge<fe.length;ge++){const ve=fe[ge],Je=s.convert(ve.format,ve.colorSpace),Ce=s.convert(ve.type),ze=S(ve.internalFormat,Je,Ce,ve.colorSpace),rt=_e(E);H&&ae(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,rt,ze,E.width,E.height):ae(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,rt,ze,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ze,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function nt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const fe=i.get(E.depthTexture).__webglTexture,ge=_e(E);if(E.depthTexture.format===Rs)ae(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,fe,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,fe,0);else if(E.depthTexture.format===Ko)ae(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,fe,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function $e(C){const E=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");nt(E.__webglFramebuffer,C)}else if(H){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]=t.createRenderbuffer(),st(E.__webglDepthbuffer[fe],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),st(E.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(C,E,H){const fe=i.get(C);E!==void 0&&Oe(fe.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&$e(C)}function U(C){const E=C.texture,H=i.get(C),fe=i.get(E);C.addEventListener("dispose",k),C.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture()),fe.__version=E.version,o.memory.textures++);const ge=C.isWebGLCubeRenderTarget===!0,ve=C.isWebGLMultipleRenderTargets===!0,Je=g(C)||a;if(ge){H.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[Ce]=[];for(let ze=0;ze<E.mipmaps.length;ze++)H.__webglFramebuffer[Ce][ze]=t.createFramebuffer()}else H.__webglFramebuffer[Ce]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)H.__webglFramebuffer[Ce]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ve)if(r.drawBuffers){const Ce=C.texture;for(let ze=0,rt=Ce.length;ze<rt;ze++){const mt=i.get(Ce[ze]);mt.__webglTexture===void 0&&(mt.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ae(C)===!1){const Ce=ve?E:[E];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ze=0;ze<Ce.length;ze++){const rt=Ce[ze];H.__webglColorRenderbuffer[ze]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ze]);const mt=s.convert(rt.format,rt.colorSpace),re=s.convert(rt.type),bt=S(rt.internalFormat,mt,re,rt.colorSpace,C.isXRRenderTarget===!0),Ve=_e(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,bt,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,H.__webglColorRenderbuffer[ze])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),st(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ge){n.bindTexture(t.TEXTURE_CUBE_MAP,fe.__webglTexture),te(t.TEXTURE_CUBE_MAP,E,Je);for(let Ce=0;Ce<6;Ce++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)Oe(H.__webglFramebuffer[Ce][ze],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ze);else Oe(H.__webglFramebuffer[Ce],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);m(E,Je)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){const Ce=C.texture;for(let ze=0,rt=Ce.length;ze<rt;ze++){const mt=Ce[ze],re=i.get(mt);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),te(t.TEXTURE_2D,mt,Je),Oe(H.__webglFramebuffer,C,mt,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,0),m(mt,Je)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let Ce=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?Ce=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ce,fe.__webglTexture),te(Ce,E,Je),a&&E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)Oe(H.__webglFramebuffer[ze],C,E,t.COLOR_ATTACHMENT0,Ce,ze);else Oe(H.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,Ce,0);m(E,Je)&&x(Ce),n.unbindTexture()}C.depthBuffer&&$e(C)}function oe(C){const E=g(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let fe=0,ge=H.length;fe<ge;fe++){const ve=H[fe];if(m(ve,E)){const Je=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(ve).__webglTexture;n.bindTexture(Je,Ce),x(Je),n.unbindTexture()}}}function le(C){if(a&&C.samples>0&&ae(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,fe=C.height;let ge=t.COLOR_BUFFER_BIT;const ve=[],Je=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(C),ze=C.isWebGLMultipleRenderTargets===!0;if(ze)for(let rt=0;rt<E.length;rt++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+rt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+rt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let rt=0;rt<E.length;rt++){ve.push(t.COLOR_ATTACHMENT0+rt),C.depthBuffer&&ve.push(Je);const mt=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(mt===!1&&(C.depthBuffer&&(ge|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ge|=t.STENCIL_BUFFER_BIT)),ze&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[rt]),mt===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Je]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Je])),ze){const re=i.get(E[rt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,H,fe,0,0,H,fe,ge,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ve)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ze)for(let rt=0;rt<E.length;rt++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+rt,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[rt]);const mt=i.get(E[rt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+rt,t.TEXTURE_2D,mt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function _e(C){return Math.min(r.maxSamples,C.samples)}function ae(C){const E=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function et(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function Fe(C,E){const H=C.colorSpace,fe=C.format,ge=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===gh||H!==br&&H!==bi&&(zt.getTransfer(H)===qt?a===!1?e.has("EXT_sRGB")===!0&&fe===Hi?(C.format=gh,C.minFilter=Wn,C.generateMipmaps=!1):E=d_.sRGBToLinear(E):(fe!==Hi||ge!==ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=I,this.resetTextureUnits=ie,this.setTexture2D=X,this.setTexture2DArray=ne,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=Be,this.setupRenderTarget=U,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=ae}function D2(t,e,n){const i=n.isWebGL2;function r(s,o=bi){let a;const l=zt.getTransfer(o);if(s===ns)return t.UNSIGNED_BYTE;if(s===t_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===n_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===iw)return t.BYTE;if(s===rw)return t.SHORT;if(s===Sp)return t.UNSIGNED_SHORT;if(s===e_)return t.INT;if(s===Gr)return t.UNSIGNED_INT;if(s===Wr)return t.FLOAT;if(s===hl)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===sw)return t.ALPHA;if(s===Hi)return t.RGBA;if(s===ow)return t.LUMINANCE;if(s===aw)return t.LUMINANCE_ALPHA;if(s===Rs)return t.DEPTH_COMPONENT;if(s===Ko)return t.DEPTH_STENCIL;if(s===gh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===lw)return t.RED;if(s===i_)return t.RED_INTEGER;if(s===cw)return t.RG;if(s===r_)return t.RG_INTEGER;if(s===s_)return t.RGBA_INTEGER;if(s===Ad||s===Cd||s===Rd||s===Pd)if(l===qt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ad)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ad)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===og||s===ag||s===lg||s===cg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===og)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ag)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===lg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===cg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===o_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ug||s===dg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ug)return l===qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===dg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fg||s===hg||s===pg||s===mg||s===gg||s===vg||s===xg||s===_g||s===yg||s===Sg||s===Mg||s===wg||s===Eg||s===bg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===fg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===mg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===gg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===vg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_g)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Mg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Eg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ld||s===Tg||s===Ag)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ld)return l===qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Tg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ag)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===uw||s===Cg||s===Rg||s===Pg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ld)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Cg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cs?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class U2 extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jr extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O2={type:"move"};class ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),d=this._getHandJoint(c,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new jr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class F2 extends na{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const y=n.getContextAttributes();let g=null,d=null;const m=[],x=[],S=new Se;let L=null;const A=new Qn;A.layers.enable(1),A.viewport=new Qt;const P=new Qn;P.layers.enable(2),P.viewport=new Qt;const k=[A,P],b=new U2;b.layers.enable(1),b.layers.enable(2);let T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=m[te];return de===void 0&&(de=new ef,m[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=m[te];return de===void 0&&(de=new ef,m[te]=de),de.getGripSpace()},this.getHand=function(te){let de=m[te];return de===void 0&&(de=new ef,m[te]=de),de.getHandSpace()};function $(te){const de=x.indexOf(te.inputSource);if(de===-1)return;const Ne=m[de];Ne!==void 0&&(Ne.update(te.inputSource,te.frame,c||o),Ne.dispatchEvent({type:te.type,data:te.inputSource}))}function ie(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",I);for(let te=0;te<m.length;te++){const de=x[te];de!==null&&(x[te]=null,m[te].disconnect(de))}T=null,G=null,e.setRenderTarget(g),p=null,h=null,f=null,r=null,d=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Os(p.framebufferWidth,p.framebufferHeight,{format:Hi,type:ns,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let de=null,Ne=null,He=null;y.depth&&(He=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=y.stencil?Ko:Rs,Ne=y.stencil?Cs:Gr);const Oe={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Os(h.textureWidth,h.textureHeight,{format:Hi,type:ns,depthTexture:new S_(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const st=e.properties.get(d);st.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(te){for(let de=0;de<te.removed.length;de++){const Ne=te.removed[de],He=x.indexOf(Ne);He>=0&&(x[He]=null,m[He].disconnect(Ne))}for(let de=0;de<te.added.length;de++){const Ne=te.added[de];let He=x.indexOf(Ne);if(He===-1){for(let st=0;st<m.length;st++)if(st>=x.length){x.push(Ne),He=st;break}else if(x[st]===null){x[st]=Ne,He=st;break}if(He===-1)break}const Oe=m[He];Oe&&Oe.connect(Ne)}}const j=new O,X=new O;function ne(te,de,Ne){j.setFromMatrixPosition(de.matrixWorld),X.setFromMatrixPosition(Ne.matrixWorld);const He=j.distanceTo(X),Oe=de.projectionMatrix.elements,st=Ne.projectionMatrix.elements,nt=Oe[14]/(Oe[10]-1),$e=Oe[14]/(Oe[10]+1),Be=(Oe[9]+1)/Oe[5],U=(Oe[9]-1)/Oe[5],oe=(Oe[8]-1)/Oe[0],le=(st[8]+1)/st[0],_e=nt*oe,ae=nt*le,et=He/(-oe+le),Fe=et*-oe;de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Fe),te.translateZ(et),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const C=nt+et,E=$e+et,H=_e-Fe,fe=ae+(He-Fe),ge=Be*$e/E*C,ve=U*$e/E*C;te.projectionMatrix.makePerspective(H,fe,ge,ve,C,E),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function B(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;b.near=P.near=A.near=te.near,b.far=P.far=A.far=te.far,(T!==b.near||G!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,G=b.far);const de=te.parent,Ne=b.cameras;B(b,de);for(let He=0;He<Ne.length;He++)B(Ne[He],de);Ne.length===2?ne(b,A,P):b.projectionMatrix.copy(A.projectionMatrix),Y(te,b,de)};function Y(te,de,Ne){Ne===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Ne.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=pl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)};let q=null;function ue(te,de){if(u=de.getViewerPose(c||o),v=de,u!==null){const Ne=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let He=!1;Ne.length!==b.cameras.length&&(b.cameras.length=0,He=!0);for(let Oe=0;Oe<Ne.length;Oe++){const st=Ne[Oe];let nt=null;if(p!==null)nt=p.getViewport(st);else{const Be=f.getViewSubImage(h,st);nt=Be.viewport,Oe===0&&(e.setRenderTargetTextures(d,Be.colorTexture,h.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(d))}let $e=k[Oe];$e===void 0&&($e=new Qn,$e.layers.enable(Oe),$e.viewport=new Qt,k[Oe]=$e),$e.matrix.fromArray(st.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(st.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(nt.x,nt.y,nt.width,nt.height),Oe===0&&(b.matrix.copy($e.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),He===!0&&b.cameras.push($e)}}for(let Ne=0;Ne<m.length;Ne++){const He=x[Ne],Oe=m[Ne];He!==null&&Oe!==void 0&&Oe.update(He,de,c||o)}q&&q(te,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}const pe=new y_;pe.setAnimationLoop(ue),this.setAnimationLoop=function(te){q=te},this.dispose=function(){}}}function k2(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,v_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,m,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),y(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,m,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Xn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Xn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const m=e.get(d).envMap;if(m&&(g.envMap.value=m,g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const x=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*x,n(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=x*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,m){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xn&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){const m=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function z2(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,x){const S=x.program;i.uniformBlockBinding(m,S)}function c(m,x){let S=r[m.id];S===void 0&&(v(m),S=u(m),r[m.id]=S,m.addEventListener("dispose",g));const L=x.program;i.updateUBOMapping(m,L);const A=e.render.frame;s[m.id]!==A&&(h(m),s[m.id]=A)}function u(m){const x=f();m.__bindingPointIndex=x;const S=t.createBuffer(),L=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,L,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const x=r[m.id],S=m.uniforms,L=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,P=S.length;A<P;A++){const k=Array.isArray(S[A])?S[A]:[S[A]];for(let b=0,T=k.length;b<T;b++){const G=k[b];if(p(G,A,b,L)===!0){const $=G.__offset,ie=Array.isArray(G.value)?G.value:[G.value];let I=0;for(let j=0;j<ie.length;j++){const X=ie[j],ne=y(X);typeof X=="number"||typeof X=="boolean"?(G.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,$+I,G.__data)):X.isMatrix3?(G.__data[0]=X.elements[0],G.__data[1]=X.elements[1],G.__data[2]=X.elements[2],G.__data[3]=0,G.__data[4]=X.elements[3],G.__data[5]=X.elements[4],G.__data[6]=X.elements[5],G.__data[7]=0,G.__data[8]=X.elements[6],G.__data[9]=X.elements[7],G.__data[10]=X.elements[8],G.__data[11]=0):(X.toArray(G.__data,I),I+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,G.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,x,S,L){const A=m.value,P=x+"_"+S;if(L[P]===void 0)return typeof A=="number"||typeof A=="boolean"?L[P]=A:L[P]=A.clone(),!0;{const k=L[P];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return L[P]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function v(m){const x=m.uniforms;let S=0;const L=16;for(let P=0,k=x.length;P<k;P++){const b=Array.isArray(x[P])?x[P]:[x[P]];for(let T=0,G=b.length;T<G;T++){const $=b[T],ie=Array.isArray($.value)?$.value:[$.value];for(let I=0,j=ie.length;I<j;I++){const X=ie[I],ne=y(X),B=S%L;B!==0&&L-B<ne.boundary&&(S+=L-B),$.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=ne.storage}}}const A=S%L;return A>0&&(S+=L-A),m.__size=S,m.__cache={},this}function y(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){const x=m.target;x.removeEventListener("dispose",g);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class jc{constructor(e={}){const{canvas:n=Uw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,g=null;const d=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this._useLegacyLights=!1,this.toneMapping=ts,this.toneMappingExposure=1;const x=this;let S=!1,L=0,A=0,P=null,k=-1,b=null;const T=new Qt,G=new Qt;let $=null;const ie=new Et(0);let I=0,j=n.width,X=n.height,ne=1,B=null,Y=null;const q=new Qt(0,0,j,X),ue=new Qt(0,0,j,X);let pe=!1;const te=new Tp;let de=!1,Ne=!1,He=null;const Oe=new rn,st=new Se,nt=new O,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return P===null?ne:1}let U=i;function oe(R,W){for(let K=0;K<R.length;K++){const ee=R[K],Z=n.getContext(ee,W);if(Z!==null)return Z}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_p}`),n.addEventListener("webglcontextlost",be,!1),n.addEventListener("webglcontextrestored",z,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),U===null){const W=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&W.shift(),U=oe(W,R),U===null)throw oe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let le,_e,ae,et,Fe,C,E,H,fe,ge,ve,Je,Ce,ze,rt,mt,re,bt,Ve,ot,Ye,We,at,Pt;function Rt(){le=new qb(U),_e=new Gb(U,le,e),le.init(_e),We=new D2(U,le,_e),ae=new N2(U,le,_e),et=new Jb(U),Fe=new x2,C=new I2(U,le,ae,Fe,_e,We,et),E=new jb(x),H=new Yb(x),fe=new o1(U,_e),at=new Hb(U,le,fe,_e),ge=new Zb(U,fe,et,at),ve=new nT(U,ge,fe,et),Ve=new tT(U,_e,C),mt=new Wb(Fe),Je=new v2(x,E,H,le,_e,at,mt),Ce=new k2(x,Fe),ze=new y2,rt=new T2(le,_e),bt=new Bb(x,E,H,ae,ve,h,l),re=new L2(x,ve,_e),Pt=new z2(U,et,_e,ae),ot=new Vb(U,le,et,_e),Ye=new Kb(U,le,et,_e),et.programs=Je.programs,x.capabilities=_e,x.extensions=le,x.properties=Fe,x.renderLists=ze,x.shadowMap=re,x.state=ae,x.info=et}Rt();const xt=new F2(x,U);this.xr=xt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(j,X,!1))},this.getSize=function(R){return R.set(j,X)},this.setSize=function(R,W,K=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=R,X=W,n.width=Math.floor(R*ne),n.height=Math.floor(W*ne),K===!0&&(n.style.width=R+"px",n.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(j*ne,X*ne).floor()},this.setDrawingBufferSize=function(R,W,K){j=R,X=W,ne=K,n.width=Math.floor(R*K),n.height=Math.floor(W*K),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(q)},this.setViewport=function(R,W,K,ee){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,W,K,ee),ae.viewport(T.copy(q).multiplyScalar(ne).floor())},this.getScissor=function(R){return R.copy(ue)},this.setScissor=function(R,W,K,ee){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,W,K,ee),ae.scissor(G.copy(ue).multiplyScalar(ne).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(R){ae.setScissorTest(pe=R)},this.setOpaqueSort=function(R){B=R},this.setTransparentSort=function(R){Y=R},this.getClearColor=function(R){return R.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(R=!0,W=!0,K=!0){let ee=0;if(R){let Z=!1;if(P!==null){const ke=P.texture.format;Z=ke===s_||ke===r_||ke===i_}if(Z){const ke=P.texture.type,tt=ke===ns||ke===Gr||ke===Sp||ke===Cs||ke===t_||ke===n_,ut=bt.getClearColor(),ht=bt.getClearAlpha(),Mt=ut.r,gt=ut.g,_t=ut.b;tt?(p[0]=Mt,p[1]=gt,p[2]=_t,p[3]=ht,U.clearBufferuiv(U.COLOR,0,p)):(v[0]=Mt,v[1]=gt,v[2]=_t,v[3]=ht,U.clearBufferiv(U.COLOR,0,v))}else ee|=U.COLOR_BUFFER_BIT}W&&(ee|=U.DEPTH_BUFFER_BIT),K&&(ee|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",be,!1),n.removeEventListener("webglcontextrestored",z,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),ze.dispose(),rt.dispose(),Fe.dispose(),E.dispose(),H.dispose(),ve.dispose(),at.dispose(),Pt.dispose(),Je.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Wt),xt.removeEventListener("sessionend",Ft),He&&(He.dispose(),He=null),Sn.stop()};function be(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=et.autoReset,W=re.enabled,K=re.autoUpdate,ee=re.needsUpdate,Z=re.type;Rt(),et.autoReset=R,re.enabled=W,re.autoUpdate=K,re.needsUpdate=ee,re.type=Z}function Ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ee(R){const W=R.target;W.removeEventListener("dispose",Ee),dt(W)}function dt(R){lt(R),Fe.remove(R)}function lt(R){const W=Fe.get(R).programs;W!==void 0&&(W.forEach(function(K){Je.releaseProgram(K)}),R.isShaderMaterial&&Je.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,K,ee,Z,ke){W===null&&(W=$e);const tt=Z.isMesh&&Z.matrixWorld.determinant()<0,ut=Pl(R,W,K,ee,Z);ae.setMaterial(ee,tt);let ht=K.index,Mt=1;if(ee.wireframe===!0){if(ht=ge.getWireframeAttribute(K),ht===void 0)return;Mt=2}const gt=K.drawRange,_t=K.attributes.position;let jt=gt.start*Mt,kn=(gt.start+gt.count)*Mt;ke!==null&&(jt=Math.max(jt,ke.start*Mt),kn=Math.min(kn,(ke.start+ke.count)*Mt)),ht!==null?(jt=Math.max(jt,0),kn=Math.min(kn,ht.count)):_t!=null&&(jt=Math.max(jt,0),kn=Math.min(kn,_t.count));const ln=kn-jt;if(ln<0||ln===1/0)return;at.setup(Z,ee,ut,K,ht);let Li,Xt=ot;if(ht!==null&&(Li=fe.get(ht),Xt=Ye,Xt.setIndex(Li)),Z.isMesh)ee.wireframe===!0?(ae.setLineWidth(ee.wireframeLinewidth*Be()),Xt.setMode(U.LINES)):Xt.setMode(U.TRIANGLES);else if(Z.isLine){let yt=ee.linewidth;yt===void 0&&(yt=1),ae.setLineWidth(yt*Be()),Z.isLineSegments?Xt.setMode(U.LINES):Z.isLineLoop?Xt.setMode(U.LINE_LOOP):Xt.setMode(U.LINE_STRIP)}else Z.isPoints?Xt.setMode(U.POINTS):Z.isSprite&&Xt.setMode(U.TRIANGLES);if(Z.isBatchedMesh)Xt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Xt.renderInstances(jt,ln,Z.count);else if(K.isInstancedBufferGeometry){const yt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,sa=Math.min(K.instanceCount,yt);Xt.renderInstances(jt,ln,sa)}else Xt.render(jt,ln)};function Ut(R,W,K){R.transparent===!0&&R.side===li&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,ji(R,W,K),R.side=os,R.needsUpdate=!0,ji(R,W,K),R.side=li):ji(R,W,K)}this.compile=function(R,W,K=null){K===null&&(K=R),g=rt.get(K),g.init(),m.push(g),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),R!==K&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights(x._useLegacyLights);const ee=new Set;return R.traverse(function(Z){const ke=Z.material;if(ke)if(Array.isArray(ke))for(let tt=0;tt<ke.length;tt++){const ut=ke[tt];Ut(ut,K,Z),ee.add(ut)}else Ut(ke,K,Z),ee.add(ke)}),m.pop(),g=null,ee},this.compileAsync=function(R,W,K=null){const ee=this.compile(R,W,K);return new Promise(Z=>{function ke(){if(ee.forEach(function(tt){Fe.get(tt).currentProgram.isReady()&&ee.delete(tt)}),ee.size===0){Z(R);return}setTimeout(ke,10)}le.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let It=null;function Ht(R){It&&It(R)}function Wt(){Sn.stop()}function Ft(){Sn.start()}const Sn=new y_;Sn.setAnimationLoop(Ht),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(R){It=R,xt.setAnimationLoop(R),R===null?Sn.stop():Sn.start()},xt.addEventListener("sessionstart",Wt),xt.addEventListener("sessionend",Ft),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(W),W=xt.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,W,P),g=rt.get(R,m.length),g.init(),m.push(g),Oe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),te.setFromProjectionMatrix(Oe),Ne=this.localClippingEnabled,de=mt.init(this.clippingPlanes,Ne),y=ze.get(R,d.length),y.init(),d.push(y),mi(R,W,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(B,Y),this.info.render.frame++,de===!0&&mt.beginShadows();const K=g.state.shadowsArray;if(re.render(K,R,W),de===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),bt.render(y,R),g.setupLights(x._useLegacyLights),W.isArrayCamera){const ee=W.cameras;for(let Z=0,ke=ee.length;Z<ke;Z++){const tt=ee[Z];Al(y,R,tt,tt.viewport)}}else Al(y,R,W);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(x,R,W),at.resetDefaultState(),k=-1,b=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function mi(R,W,K,ee){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||te.intersectsSprite(R)){ee&&nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Oe);const tt=ve.update(R),ut=R.material;ut.visible&&y.push(R,tt,ut,K,nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||te.intersectsObject(R))){const tt=ve.update(R),ut=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),nt.copy(R.boundingSphere.center)):(tt.boundingSphere===null&&tt.computeBoundingSphere(),nt.copy(tt.boundingSphere.center)),nt.applyMatrix4(R.matrixWorld).applyMatrix4(Oe)),Array.isArray(ut)){const ht=tt.groups;for(let Mt=0,gt=ht.length;Mt<gt;Mt++){const _t=ht[Mt],jt=ut[_t.materialIndex];jt&&jt.visible&&y.push(R,tt,jt,K,nt.z,_t)}}else ut.visible&&y.push(R,tt,ut,K,nt.z,null)}}const ke=R.children;for(let tt=0,ut=ke.length;tt<ut;tt++)mi(ke[tt],W,K,ee)}function Al(R,W,K,ee){const Z=R.opaque,ke=R.transmissive,tt=R.transparent;g.setupLightsView(K),de===!0&&mt.setGlobalState(x.clippingPlanes,K),ke.length>0&&Tt(Z,ke,W,K),ee&&ae.viewport(T.copy(ee)),Z.length>0&&Ar(Z,W,K),ke.length>0&&Ar(ke,W,K),tt.length>0&&Ar(tt,W,K),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Tt(R,W,K,ee){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const ke=_e.isWebGL2;He===null&&(He=new Os(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?hl:ns,minFilter:fl,samples:ke?4:0})),x.getDrawingBufferSize(st),ke?He.setSize(st.x,st.y):He.setSize(wu(st.x),wu(st.y));const tt=x.getRenderTarget();x.setRenderTarget(He),x.getClearColor(ie),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const ut=x.toneMapping;x.toneMapping=ts,Ar(R,K,ee),C.updateMultisampleRenderTarget(He),C.updateRenderTargetMipmap(He);let ht=!1;for(let Mt=0,gt=W.length;Mt<gt;Mt++){const _t=W[Mt],jt=_t.object,kn=_t.geometry,ln=_t.material,Li=_t.group;if(ln.side===li&&jt.layers.test(ee.layers)){const Xt=ln.side;ln.side=Xn,ln.needsUpdate=!0,Cl(jt,K,ee,kn,ln,Li),ln.side=Xt,ln.needsUpdate=!0,ht=!0}}ht===!0&&(C.updateMultisampleRenderTarget(He),C.updateRenderTargetMipmap(He)),x.setRenderTarget(tt),x.setClearColor(ie,I),x.toneMapping=ut}function Ar(R,W,K){const ee=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,ke=R.length;Z<ke;Z++){const tt=R[Z],ut=tt.object,ht=tt.geometry,Mt=ee===null?tt.material:ee,gt=tt.group;ut.layers.test(K.layers)&&Cl(ut,W,K,ht,Mt,gt)}}function Cl(R,W,K,ee,Z,ke){R.onBeforeRender(x,W,K,ee,Z,ke),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(x,W,K,ee,R,ke),Z.transparent===!0&&Z.side===li&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,x.renderBufferDirect(K,W,ee,Z,R,ke),Z.side=os,Z.needsUpdate=!0,x.renderBufferDirect(K,W,ee,Z,R,ke),Z.side=li):x.renderBufferDirect(K,W,ee,Z,R,ke),R.onAfterRender(x,W,K,ee,Z,ke)}function ji(R,W,K){W.isScene!==!0&&(W=$e);const ee=Fe.get(R),Z=g.state.lights,ke=g.state.shadowsArray,tt=Z.state.version,ut=Je.getParameters(R,Z.state,ke,W,K),ht=Je.getProgramCacheKey(ut);let Mt=ee.programs;ee.environment=R.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(R.isMeshStandardMaterial?H:E).get(R.envMap||ee.environment),Mt===void 0&&(R.addEventListener("dispose",Ee),Mt=new Map,ee.programs=Mt);let gt=Mt.get(ht);if(gt!==void 0){if(ee.currentProgram===gt&&ee.lightsStateVersion===tt)return Rl(R,ut),gt}else ut.uniforms=Je.getUniforms(R),R.onBuild(K,ut,x),R.onBeforeCompile(ut,x),gt=Je.acquireProgram(ut,ht),Mt.set(ht,gt),ee.uniforms=ut.uniforms;const _t=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(_t.clippingPlanes=mt.uniform),Rl(R,ut),ee.needsLights=Zu(R),ee.lightsStateVersion=tt,ee.needsLights&&(_t.ambientLightColor.value=Z.state.ambient,_t.lightProbe.value=Z.state.probe,_t.directionalLights.value=Z.state.directional,_t.directionalLightShadows.value=Z.state.directionalShadow,_t.spotLights.value=Z.state.spot,_t.spotLightShadows.value=Z.state.spotShadow,_t.rectAreaLights.value=Z.state.rectArea,_t.ltc_1.value=Z.state.rectAreaLTC1,_t.ltc_2.value=Z.state.rectAreaLTC2,_t.pointLights.value=Z.state.point,_t.pointLightShadows.value=Z.state.pointShadow,_t.hemisphereLights.value=Z.state.hemi,_t.directionalShadowMap.value=Z.state.directionalShadowMap,_t.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,_t.spotShadowMap.value=Z.state.spotShadowMap,_t.spotLightMatrix.value=Z.state.spotLightMatrix,_t.spotLightMap.value=Z.state.spotLightMap,_t.pointShadowMap.value=Z.state.pointShadowMap,_t.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=gt,ee.uniformsList=null,gt}function ra(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Wc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Rl(R,W){const K=Fe.get(R);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function Pl(R,W,K,ee,Z){W.isScene!==!0&&(W=$e),C.resetTextureUnits();const ke=W.fog,tt=ee.isMeshStandardMaterial?W.environment:null,ut=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:br,ht=(ee.isMeshStandardMaterial?H:E).get(ee.envMap||tt),Mt=ee.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,gt=!!K.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),_t=!!K.morphAttributes.position,jt=!!K.morphAttributes.normal,kn=!!K.morphAttributes.color;let ln=ts;ee.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ln=x.toneMapping);const Li=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Xt=Li!==void 0?Li.length:0,yt=Fe.get(ee),sa=g.state.lights;if(de===!0&&(Ne===!0||R!==b)){const Tn=R===b&&ee.id===k;mt.setState(ee,R,Tn)}let $t=!1;ee.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==sa.state.version||yt.outputColorSpace!==ut||Z.isBatchedMesh&&yt.batching===!1||!Z.isBatchedMesh&&yt.batching===!0||Z.isInstancedMesh&&yt.instancing===!1||!Z.isInstancedMesh&&yt.instancing===!0||Z.isSkinnedMesh&&yt.skinning===!1||!Z.isSkinnedMesh&&yt.skinning===!0||Z.isInstancedMesh&&yt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&yt.instancingColor===!1&&Z.instanceColor!==null||yt.envMap!==ht||ee.fog===!0&&yt.fog!==ke||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==mt.numPlanes||yt.numIntersection!==mt.numIntersection)||yt.vertexAlphas!==Mt||yt.vertexTangents!==gt||yt.morphTargets!==_t||yt.morphNormals!==jt||yt.morphColors!==kn||yt.toneMapping!==ln||_e.isWebGL2===!0&&yt.morphTargetsCount!==Xt)&&($t=!0):($t=!0,yt.__version=ee.version);let sr=yt.currentProgram;$t===!0&&(sr=ji(ee,W,Z));let Ll=!1,us=!1,oa=!1;const mn=sr.getUniforms(),or=yt.uniforms;if(ae.useProgram(sr.program)&&(Ll=!0,us=!0,oa=!0),ee.id!==k&&(k=ee.id,us=!0),Ll||b!==R){mn.setValue(U,"projectionMatrix",R.projectionMatrix),mn.setValue(U,"viewMatrix",R.matrixWorldInverse);const Tn=mn.map.cameraPosition;Tn!==void 0&&Tn.setValue(U,nt.setFromMatrixPosition(R.matrixWorld)),_e.logarithmicDepthBuffer&&mn.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&mn.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,us=!0,oa=!0)}if(Z.isSkinnedMesh){mn.setOptional(U,Z,"bindMatrix"),mn.setOptional(U,Z,"bindMatrixInverse");const Tn=Z.skeleton;Tn&&(_e.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),mn.setValue(U,"boneTexture",Tn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(mn.setOptional(U,Z,"batchingTexture"),mn.setValue(U,"batchingTexture",Z._matricesTexture,C));const aa=K.morphAttributes;if((aa.position!==void 0||aa.normal!==void 0||aa.color!==void 0&&_e.isWebGL2===!0)&&Ve.update(Z,K,sr),(us||yt.receiveShadow!==Z.receiveShadow)&&(yt.receiveShadow=Z.receiveShadow,mn.setValue(U,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(or.envMap.value=ht,or.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),us&&(mn.setValue(U,"toneMappingExposure",x.toneMappingExposure),yt.needsLights&&qu(or,oa),ke&&ee.fog===!0&&Ce.refreshFogUniforms(or,ke),Ce.refreshMaterialUniforms(or,ee,ne,X,He),Wc.upload(U,ra(yt),or,C)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Wc.upload(U,ra(yt),or,C),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&mn.setValue(U,"center",Z.center),mn.setValue(U,"modelViewMatrix",Z.modelViewMatrix),mn.setValue(U,"normalMatrix",Z.normalMatrix),mn.setValue(U,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Tn=ee.uniformsGroups;for(let Cr=0,Nl=Tn.length;Cr<Nl;Cr++)if(_e.isWebGL2){const la=Tn[Cr];Pt.update(la,sr),Pt.bind(la,sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sr}function qu(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Zu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,W,K){Fe.get(R.texture).__webglTexture=W,Fe.get(R.depthTexture).__webglTexture=K;const ee=Fe.get(R);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=K===void 0,ee.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){const K=Fe.get(R);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,K=0){P=R,L=W,A=K;let ee=!0,Z=null,ke=!1,tt=!1;if(R){const ht=Fe.get(R);ht.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(U.FRAMEBUFFER,null),ee=!1):ht.__webglFramebuffer===void 0?C.setupRenderTarget(R):ht.__hasExternalTextures&&C.rebindTextures(R,Fe.get(R.texture).__webglTexture,Fe.get(R.depthTexture).__webglTexture);const Mt=R.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(tt=!0);const gt=Fe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(gt[W])?Z=gt[W][K]:Z=gt[W],ke=!0):_e.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?Z=Fe.get(R).__webglMultisampledFramebuffer:Array.isArray(gt)?Z=gt[K]:Z=gt,T.copy(R.viewport),G.copy(R.scissor),$=R.scissorTest}else T.copy(q).multiplyScalar(ne).floor(),G.copy(ue).multiplyScalar(ne).floor(),$=pe;if(ae.bindFramebuffer(U.FRAMEBUFFER,Z)&&_e.drawBuffers&&ee&&ae.drawBuffers(R,Z),ae.viewport(T),ae.scissor(G),ae.setScissorTest($),ke){const ht=Fe.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+W,ht.__webglTexture,K)}else if(tt){const ht=Fe.get(R.texture),Mt=W||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ht.__webglTexture,K||0,Mt)}k=-1},this.readRenderTargetPixels=function(R,W,K,ee,Z,ke,tt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=Fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&tt!==void 0&&(ut=ut[tt]),ut){ae.bindFramebuffer(U.FRAMEBUFFER,ut);try{const ht=R.texture,Mt=ht.format,gt=ht.type;if(Mt!==Hi&&We.convert(Mt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const _t=gt===hl&&(le.has("EXT_color_buffer_half_float")||_e.isWebGL2&&le.has("EXT_color_buffer_float"));if(gt!==ns&&We.convert(gt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(gt===Wr&&(_e.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!_t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-ee&&K>=0&&K<=R.height-Z&&U.readPixels(W,K,ee,Z,We.convert(Mt),We.convert(gt),ke)}finally{const ht=P!==null?Fe.get(P).__webglFramebuffer:null;ae.bindFramebuffer(U.FRAMEBUFFER,ht)}}},this.copyFramebufferToTexture=function(R,W,K=0){const ee=Math.pow(2,-K),Z=Math.floor(W.image.width*ee),ke=Math.floor(W.image.height*ee);C.setTexture2D(W,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,R.x,R.y,Z,ke),ae.unbindTexture()},this.copyTextureToTexture=function(R,W,K,ee=0){const Z=W.image.width,ke=W.image.height,tt=We.convert(K.format),ut=We.convert(K.type);C.setTexture2D(K,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,K.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,K.unpackAlignment),W.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ee,R.x,R.y,Z,ke,tt,ut,W.image.data):W.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ee,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,tt,W.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,ee,R.x,R.y,tt,ut,W.image),ee===0&&K.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(R,W,K,ee,Z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ke=R.max.x-R.min.x+1,tt=R.max.y-R.min.y+1,ut=R.max.z-R.min.z+1,ht=We.convert(ee.format),Mt=We.convert(ee.type);let gt;if(ee.isData3DTexture)C.setTexture3D(ee,0),gt=U.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)C.setTexture2DArray(ee,0),gt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,ee.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,ee.unpackAlignment);const _t=U.getParameter(U.UNPACK_ROW_LENGTH),jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),kn=U.getParameter(U.UNPACK_SKIP_PIXELS),ln=U.getParameter(U.UNPACK_SKIP_ROWS),Li=U.getParameter(U.UNPACK_SKIP_IMAGES),Xt=K.isCompressedTexture?K.mipmaps[Z]:K.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Xt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Xt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,R.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,R.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?U.texSubImage3D(gt,Z,W.x,W.y,W.z,ke,tt,ut,ht,Mt,Xt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(gt,Z,W.x,W.y,W.z,ke,tt,ut,ht,Xt.data)):U.texSubImage3D(gt,Z,W.x,W.y,W.z,ke,tt,ut,ht,Mt,Xt),U.pixelStorei(U.UNPACK_ROW_LENGTH,_t),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,kn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ln),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Li),Z===0&&ee.generateMipmaps&&U.generateMipmap(gt),ae.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),ae.unbindTexture()},this.resetState=function(){L=0,A=0,P=null,ae.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _r}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Mp?"display-p3":"srgb",n.unpackColorSpace=zt.workingColorSpace===Wu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Kt?Ps:a_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ps?Kt:br}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class B2 extends jc{}B2.prototype.isWebGL1Renderer=!0;class Wa{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=n,this.far=i}clone(){return new Wa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xc extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class H2{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=mh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ir()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new O;class Eu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.applyMatrix4(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.applyNormalMatrix(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.transformDirection(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}setX(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=er(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=er(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=er(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=er(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Ci(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class A_ extends Vs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ho;const Ma=new O,po=new O,mo=new O,go=new Se,wa=new Se,C_=new rn,Mc=new O,Ea=new O,wc=new O,v0=new Se,tf=new Se,x0=new Se;class V2 extends bn{constructor(e=new A_){if(super(),this.isSprite=!0,this.type="Sprite",ho===void 0){ho=new xn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new H2(n,5);ho.setIndex([0,1,2,0,2,3]),ho.setAttribute("position",new Eu(i,3,0,!1)),ho.setAttribute("uv",new Eu(i,2,3,!1))}this.geometry=ho,this.material=e,this.center=new Se(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),po.setFromMatrixScale(this.matrixWorld),C_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&po.multiplyScalar(-mo.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ec(Mc.set(-.5,-.5,0),mo,o,po,r,s),Ec(Ea.set(.5,-.5,0),mo,o,po,r,s),Ec(wc.set(.5,.5,0),mo,o,po,r,s),v0.set(0,0),tf.set(1,0),x0.set(1,1);let a=e.ray.intersectTriangle(Mc,Ea,wc,!1,Ma);if(a===null&&(Ec(Ea.set(-.5,.5,0),mo,o,po,r,s),tf.set(0,1),a=e.ray.intersectTriangle(Mc,wc,Ea,!1,Ma),a===null))return;const l=e.ray.origin.distanceTo(Ma);l<e.near||l>e.far||n.push({distance:l,point:Ma.clone(),uv:Ei.getInterpolation(Ma,Mc,Ea,wc,v0,tf,x0,new Se),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ec(t,e,n,i,r,s){go.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(wa.x=s*go.x-r*go.y,wa.y=r*go.x+s*go.y):wa.copy(go),t.copy(e),t.x+=wa.x,t.y+=wa.y,t.applyMatrix4(C_)}class ja extends Vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _0=new O,y0=new O,S0=new rn,nf=new Ep,bc=new ju;class R_ extends bn{constructor(e=new xn,n=new ja){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)_0.fromBufferAttribute(n,r-1),y0.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=_0.distanceTo(y0);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(r),bc.radius+=s,e.ray.intersectsSphere(bc)===!1)return;S0.copy(r).invert(),nf.copy(e.ray).applyMatrix4(S0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,f=new O,h=new O,p=this.isLineSegments?2:1,v=i.index,g=i.attributes.position;if(v!==null){const d=Math.max(0,o.start),m=Math.min(v.count,o.start+o.count);for(let x=d,S=m-1;x<S;x+=p){const L=v.getX(x),A=v.getX(x+1);if(c.fromBufferAttribute(g,L),u.fromBufferAttribute(g,A),nf.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(h);k<e.near||k>e.far||n.push({distance:k,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),m=Math.min(g.count,o.start+o.count);for(let x=d,S=m-1;x<S;x+=p){if(c.fromBufferAttribute(g,x),u.fromBufferAttribute(g,x+1),nf.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||n.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const M0=new O,w0=new O;class _h extends R_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)M0.fromBufferAttribute(n,r),w0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+M0.distanceTo(w0);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rf extends $n{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Se:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new O,r=[],s=[],o=[],a=new O,l=new rn;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Rn(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Rn(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Rp extends rr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new Se,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class G2 extends Rp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Pp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Tc=new O,sf=new Pp,of=new Pp,af=new Pp;class W2 extends rr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new O){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Tc.subVectors(r[0],r[1]).add(r[0]),c=Tc);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Tc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Tc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(u),p);y<1e-4&&(y=1),v<1e-4&&(v=y),g<1e-4&&(g=y),sf.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,v,y,g),of.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,v,y,g),af.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,v,y,g)}else this.curveType==="catmullrom"&&(sf.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),of.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),af.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(sf.calc(l),of.calc(l),af.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function E0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function j2(t,e){const n=1-t;return n*n*e}function X2(t,e){return 2*(1-t)*t*e}function $2(t,e){return t*t*e}function Xa(t,e,n,i){return j2(t,e)+X2(t,n)+$2(t,i)}function Y2(t,e){const n=1-t;return n*n*n*e}function q2(t,e){const n=1-t;return 3*n*n*t*e}function Z2(t,e){return 3*(1-t)*t*t*e}function K2(t,e){return t*t*t*e}function $a(t,e,n,i,r){return Y2(t,e)+q2(t,n)+Z2(t,i)+K2(t,r)}class P_ extends rr{constructor(e=new Se,n=new Se,i=new Se,r=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Se){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set($a(e,r.x,s.x,o.x,a.x),$a(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class J2 extends rr{constructor(e=new O,n=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set($a(e,r.x,s.x,o.x,a.x),$a(e,r.y,s.y,o.y,a.y),$a(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class L_ extends rr{constructor(e=new Se,n=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Se){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Se){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Q2 extends rr{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N_ extends rr{constructor(e=new Se,n=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Se){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Xa(e,r.x,s.x,o.x),Xa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eA extends rr{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Xa(e,r.x,s.x,o.x),Xa(e,r.y,s.y,o.y),Xa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I_ extends rr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Se){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(E0(a,l.x,c.x,u.x,f.x),E0(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Se().fromArray(r))}return this}}var yh=Object.freeze({__proto__:null,ArcCurve:G2,CatmullRomCurve3:W2,CubicBezierCurve:P_,CubicBezierCurve3:J2,EllipseCurve:Rp,LineCurve:L_,LineCurve3:Q2,QuadraticBezierCurve:N_,QuadraticBezierCurve3:eA,SplineCurve:I_});class tA extends rr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new yh[r.type]().fromJSON(r))}return this}}class b0 extends tA{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new L_(this.currentPoint.clone(),new Se(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new N_(this.currentPoint.clone(),new Se(e,n),new Se(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new P_(this.currentPoint.clone(),new Se(e,n),new Se(i,r),new Se(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new I_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Rp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ks extends xn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let v=0;const y=[],g=i/2;let d=0;m(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Bt(f,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(p,2));function m(){const S=new O,L=new O;let A=0;const P=(n-e)/i;for(let k=0;k<=s;k++){const b=[],T=k/s,G=T*(n-e)+e;for(let $=0;$<=r;$++){const ie=$/r,I=ie*l+a,j=Math.sin(I),X=Math.cos(I);L.x=G*j,L.y=-T*i+g,L.z=G*X,f.push(L.x,L.y,L.z),S.set(j,P,X).normalize(),h.push(S.x,S.y,S.z),p.push(ie,1-T),b.push(v++)}y.push(b)}for(let k=0;k<r;k++)for(let b=0;b<s;b++){const T=y[b][k],G=y[b+1][k],$=y[b+1][k+1],ie=y[b][k+1];u.push(T,G,ie),u.push(G,$,ie),A+=6}c.addGroup(d,A,0),d+=A}function x(S){const L=v,A=new Se,P=new O;let k=0;const b=S===!0?e:n,T=S===!0?1:-1;for(let $=1;$<=r;$++)f.push(0,g*T,0),h.push(0,T,0),p.push(.5,.5),v++;const G=v;for(let $=0;$<=r;$++){const I=$/r*l+a,j=Math.cos(I),X=Math.sin(I);P.x=b*X,P.y=g*T,P.z=b*j,f.push(P.x,P.y,P.z),h.push(0,T,0),A.x=j*.5+.5,A.y=X*.5*T+.5,p.push(A.x,A.y),v++}for(let $=0;$<r;$++){const ie=L+$,I=G+$;S===!0?u.push(I,I+1,ie):u.push(I+1,I,ie),k+=3}c.addGroup(d,k,S===!0?1:2),d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $u extends ks{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new $u(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lp extends xn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(s.slice(),3)),this.setAttribute("uv",new Bt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const x=new O,S=new O,L=new O;for(let A=0;A<n.length;A+=3)p(n[A+0],x),p(n[A+1],S),p(n[A+2],L),l(x,S,L,m)}function l(m,x,S,L){const A=L+1,P=[];for(let k=0;k<=A;k++){P[k]=[];const b=m.clone().lerp(S,k/A),T=x.clone().lerp(S,k/A),G=A-k;for(let $=0;$<=G;$++)$===0&&k===A?P[k][$]=b:P[k][$]=b.clone().lerp(T,$/G)}for(let k=0;k<A;k++)for(let b=0;b<2*(A-k)-1;b++){const T=Math.floor(b/2);b%2===0?(h(P[k][T+1]),h(P[k+1][T]),h(P[k][T])):(h(P[k][T+1]),h(P[k+1][T+1]),h(P[k+1][T]))}}function c(m){const x=new O;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(m),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function u(){const m=new O;for(let x=0;x<s.length;x+=3){m.x=s[x+0],m.y=s[x+1],m.z=s[x+2];const S=g(m)/2/Math.PI+.5,L=d(m)/Math.PI+.5;o.push(S,1-L)}v(),f()}function f(){for(let m=0;m<o.length;m+=6){const x=o[m+0],S=o[m+2],L=o[m+4],A=Math.max(x,S,L),P=Math.min(x,S,L);A>.9&&P<.1&&(x<.2&&(o[m+0]+=1),S<.2&&(o[m+2]+=1),L<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,x){const S=m*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function v(){const m=new O,x=new O,S=new O,L=new O,A=new Se,P=new Se,k=new Se;for(let b=0,T=0;b<s.length;b+=9,T+=6){m.set(s[b+0],s[b+1],s[b+2]),x.set(s[b+3],s[b+4],s[b+5]),S.set(s[b+6],s[b+7],s[b+8]),A.set(o[T+0],o[T+1]),P.set(o[T+2],o[T+3]),k.set(o[T+4],o[T+5]),L.copy(m).add(x).add(S).divideScalar(3);const G=g(L);y(A,T+0,m,G),y(P,T+2,x,G),y(k,T+4,S,G)}}function y(m,x,S,L){L<0&&m.x===1&&(o[x]=m.x-1),S.x===0&&S.z===0&&(o[x]=L/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lp(e.vertices,e.indices,e.radius,e.details)}}class Ms extends b0{constructor(e){super(e),this.uuid=ir(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new b0().fromJSON(r))}return this}}const nA={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=D_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,p;if(i&&(s=aA(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let v=n;v<r;v+=n)f=t[v],h=t[v+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return gl(s,o,n,a,l,p,0),o}};function D_(t,e,n,i,r){let s,o;if(r===xA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=T0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=T0(s,t[s],t[s+1],o);return o&&Yu(o,o.next)&&(xl(o),o=o.next),o}function zs(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Yu(n,n.next)||tn(n.prev,n,n.next)===0)){if(xl(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function gl(t,e,n,i,r,s,o){if(!t)return;!o&&s&&fA(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?rA(t,i,r,s):iA(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),xl(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=sA(zs(t),e,n),gl(t,e,n,i,r,s,2)):o===2&&oA(t,e,n,i,r,s):gl(zs(t),e,n,i,r,s,1);break}}}function iA(t){const e=t.prev,n=t,i=t.next;if(tn(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=h&&v.y>=f&&v.y<=p&&Io(r,a,s,l,o,c,v.x,v.y)&&tn(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function rA(t,e,n,i){const r=t.prev,s=t,o=t.next;if(tn(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,v=u<f?u<h?u:h:f<h?f:h,y=a>l?a>c?a:c:l>c?l:c,g=u>f?u>h?u:h:f>h?f:h,d=Sh(p,v,e,n,i),m=Sh(y,g,e,n,i);let x=t.prevZ,S=t.nextZ;for(;x&&x.z>=d&&S&&S.z<=m;){if(x.x>=p&&x.x<=y&&x.y>=v&&x.y<=g&&x!==r&&x!==o&&Io(a,u,l,f,c,h,x.x,x.y)&&tn(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=y&&S.y>=v&&S.y<=g&&S!==r&&S!==o&&Io(a,u,l,f,c,h,S.x,S.y)&&tn(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=y&&x.y>=v&&x.y<=g&&x!==r&&x!==o&&Io(a,u,l,f,c,h,x.x,x.y)&&tn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=m;){if(S.x>=p&&S.x<=y&&S.y>=v&&S.y<=g&&S!==r&&S!==o&&Io(a,u,l,f,c,h,S.x,S.y)&&tn(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function sA(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Yu(r,s)&&U_(r,i,i.next,s)&&vl(r,s)&&vl(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),xl(i),xl(i.next),i=t=s),i=i.next}while(i!==t);return zs(i)}function oA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mA(o,a)){let l=O_(o,a);o=zs(o,o.next),l=zs(l,l.next),gl(o,e,n,i,r,s,0),gl(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function aA(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=D_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(pA(c));for(r.sort(lA),s=0;s<r.length;s++)n=cA(r[s],n);return n}function lA(t,e){return t.x-e.x}function cA(t,e){const n=uA(t,e);if(!n)return e;const i=O_(n,t);return zs(i,i.next),zs(n,n.next)}function uA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Io(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),vl(n,t)&&(f<u||f===u&&(n.x>r.x||n.x===r.x&&dA(r,n)))&&(r=n,u=f)),n=n.next;while(n!==a);return r}function dA(t,e){return tn(t.prev,t,e.prev)<0&&tn(e.next,t,t.next)<0}function fA(t,e,n,i){let r=t;do r.z===0&&(r.z=Sh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,hA(r)}function hA(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Sh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function pA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Io(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function mA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!gA(t,e)&&(vl(t,e)&&vl(e,t)&&vA(t,e)&&(tn(t.prev,t,e.prev)||tn(t,e.prev,e))||Yu(t,e)&&tn(t.prev,t,t.next)>0&&tn(e.prev,e,e.next)>0)}function tn(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Yu(t,e){return t.x===e.x&&t.y===e.y}function U_(t,e,n,i){const r=Cc(tn(t,e,n)),s=Cc(tn(t,e,i)),o=Cc(tn(n,i,t)),a=Cc(tn(n,i,e));return!!(r!==s&&o!==a||r===0&&Ac(t,n,e)||s===0&&Ac(t,i,e)||o===0&&Ac(n,t,i)||a===0&&Ac(n,e,i))}function Ac(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Cc(t){return t>0?1:t<0?-1:0}function gA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&U_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function vl(t,e){return tn(t.prev,t,t.next)<0?tn(t,e,t.next)>=0&&tn(t,t.prev,e)>=0:tn(t,e,t.prev)<0||tn(t,t.next,e)<0}function vA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function O_(t,e){const n=new Mh(t.i,t.x,t.y),i=new Mh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function T0(t,e,n,i){const r=new Mh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function xl(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Mh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class is{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return is.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];A0(e),C0(i,e);let o=e.length;n.forEach(A0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,C0(i,n[l]);const a=nA.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function A0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function C0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Ya extends xn{constructor(e=new Ms([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Bt(r,3)),this.setAttribute("uv",new Bt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,v=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:_A;let x,S=!1,L,A,P,k;d&&(x=d.getSpacedPoints(u),S=!0,h=!1,L=d.computeFrenetFrames(u,!1),A=new O,P=new O,k=new O),h||(g=0,p=0,v=0,y=0);const b=a.extractPoints(c);let T=b.shape;const G=b.holes;if(!is.isClockWise(T)){T=T.reverse();for(let U=0,oe=G.length;U<oe;U++){const le=G[U];is.isClockWise(le)&&(G[U]=le.reverse())}}const ie=is.triangulateShape(T,G),I=T;for(let U=0,oe=G.length;U<oe;U++){const le=G[U];T=T.concat(le)}function j(U,oe,le){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(oe,le)}const X=T.length,ne=ie.length;function B(U,oe,le){let _e,ae,et;const Fe=U.x-oe.x,C=U.y-oe.y,E=le.x-U.x,H=le.y-U.y,fe=Fe*Fe+C*C,ge=Fe*H-C*E;if(Math.abs(ge)>Number.EPSILON){const ve=Math.sqrt(fe),Je=Math.sqrt(E*E+H*H),Ce=oe.x-C/ve,ze=oe.y+Fe/ve,rt=le.x-H/Je,mt=le.y+E/Je,re=((rt-Ce)*H-(mt-ze)*E)/(Fe*H-C*E);_e=Ce+Fe*re-U.x,ae=ze+C*re-U.y;const bt=_e*_e+ae*ae;if(bt<=2)return new Se(_e,ae);et=Math.sqrt(bt/2)}else{let ve=!1;Fe>Number.EPSILON?E>Number.EPSILON&&(ve=!0):Fe<-Number.EPSILON?E<-Number.EPSILON&&(ve=!0):Math.sign(C)===Math.sign(H)&&(ve=!0),ve?(_e=-C,ae=Fe,et=Math.sqrt(fe)):(_e=Fe,ae=C,et=Math.sqrt(fe/2))}return new Se(_e/et,ae/et)}const Y=[];for(let U=0,oe=I.length,le=oe-1,_e=U+1;U<oe;U++,le++,_e++)le===oe&&(le=0),_e===oe&&(_e=0),Y[U]=B(I[U],I[le],I[_e]);const q=[];let ue,pe=Y.concat();for(let U=0,oe=G.length;U<oe;U++){const le=G[U];ue=[];for(let _e=0,ae=le.length,et=ae-1,Fe=_e+1;_e<ae;_e++,et++,Fe++)et===ae&&(et=0),Fe===ae&&(Fe=0),ue[_e]=B(le[_e],le[et],le[Fe]);q.push(ue),pe=pe.concat(ue)}for(let U=0;U<g;U++){const oe=U/g,le=p*Math.cos(oe*Math.PI/2),_e=v*Math.sin(oe*Math.PI/2)+y;for(let ae=0,et=I.length;ae<et;ae++){const Fe=j(I[ae],Y[ae],_e);Oe(Fe.x,Fe.y,-le)}for(let ae=0,et=G.length;ae<et;ae++){const Fe=G[ae];ue=q[ae];for(let C=0,E=Fe.length;C<E;C++){const H=j(Fe[C],ue[C],_e);Oe(H.x,H.y,-le)}}}const te=v+y;for(let U=0;U<X;U++){const oe=h?j(T[U],pe[U],te):T[U];S?(P.copy(L.normals[0]).multiplyScalar(oe.x),A.copy(L.binormals[0]).multiplyScalar(oe.y),k.copy(x[0]).add(P).add(A),Oe(k.x,k.y,k.z)):Oe(oe.x,oe.y,0)}for(let U=1;U<=u;U++)for(let oe=0;oe<X;oe++){const le=h?j(T[oe],pe[oe],te):T[oe];S?(P.copy(L.normals[U]).multiplyScalar(le.x),A.copy(L.binormals[U]).multiplyScalar(le.y),k.copy(x[U]).add(P).add(A),Oe(k.x,k.y,k.z)):Oe(le.x,le.y,f/u*U)}for(let U=g-1;U>=0;U--){const oe=U/g,le=p*Math.cos(oe*Math.PI/2),_e=v*Math.sin(oe*Math.PI/2)+y;for(let ae=0,et=I.length;ae<et;ae++){const Fe=j(I[ae],Y[ae],_e);Oe(Fe.x,Fe.y,f+le)}for(let ae=0,et=G.length;ae<et;ae++){const Fe=G[ae];ue=q[ae];for(let C=0,E=Fe.length;C<E;C++){const H=j(Fe[C],ue[C],_e);S?Oe(H.x,H.y+x[u-1].y,x[u-1].x+le):Oe(H.x,H.y,f+le)}}}de(),Ne();function de(){const U=r.length/3;if(h){let oe=0,le=X*oe;for(let _e=0;_e<ne;_e++){const ae=ie[_e];st(ae[2]+le,ae[1]+le,ae[0]+le)}oe=u+g*2,le=X*oe;for(let _e=0;_e<ne;_e++){const ae=ie[_e];st(ae[0]+le,ae[1]+le,ae[2]+le)}}else{for(let oe=0;oe<ne;oe++){const le=ie[oe];st(le[2],le[1],le[0])}for(let oe=0;oe<ne;oe++){const le=ie[oe];st(le[0]+X*u,le[1]+X*u,le[2]+X*u)}}i.addGroup(U,r.length/3-U,0)}function Ne(){const U=r.length/3;let oe=0;He(I,oe),oe+=I.length;for(let le=0,_e=G.length;le<_e;le++){const ae=G[le];He(ae,oe),oe+=ae.length}i.addGroup(U,r.length/3-U,1)}function He(U,oe){let le=U.length;for(;--le>=0;){const _e=le;let ae=le-1;ae<0&&(ae=U.length-1);for(let et=0,Fe=u+g*2;et<Fe;et++){const C=X*et,E=X*(et+1),H=oe+_e+C,fe=oe+ae+C,ge=oe+ae+E,ve=oe+_e+E;nt(H,fe,ge,ve)}}}function Oe(U,oe,le){l.push(U),l.push(oe),l.push(le)}function st(U,oe,le){$e(U),$e(oe),$e(le);const _e=r.length/3,ae=m.generateTopUV(i,r,_e-3,_e-2,_e-1);Be(ae[0]),Be(ae[1]),Be(ae[2])}function nt(U,oe,le,_e){$e(U),$e(oe),$e(_e),$e(oe),$e(le),$e(_e);const ae=r.length/3,et=m.generateSideWallUV(i,r,ae-6,ae-3,ae-2,ae-1);Be(et[0]),Be(et[1]),Be(et[3]),Be(et[1]),Be(et[2]),Be(et[3])}function $e(U){r.push(l[U*3+0]),r.push(l[U*3+1]),r.push(l[U*3+2])}function Be(U){s.push(U.x),s.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return yA(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new yh[r.type]().fromJSON(r)),new Ya(i,e.options)}}const _A={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Se(s,o),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],v=e[r*3+2],y=e[s*3],g=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-f),new Se(h,1-v),new Se(y,1-d)]:[new Se(a,1-l),new Se(u,1-f),new Se(p,1-v),new Se(g,1-d)]}};function yA(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class bu extends Lp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new bu(e.radius,e.detail)}}class Tu extends xn{constructor(e=new Ms([new Se(0,.5),new Se(-.5,-.5),new Se(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(s,3)),this.setAttribute("uv",new Bt(o,2));function c(u){const f=r.length/3,h=u.extractPoints(n);let p=h.shape;const v=h.holes;is.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,d=v.length;g<d;g++){const m=v[g];is.isClockWise(m)===!0&&(v[g]=m.reverse())}const y=is.triangulateShape(p,v);for(let g=0,d=v.length;g<d;g++){const m=v[g];p=p.concat(m)}for(let g=0,d=p.length;g<d;g++){const m=p[g];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let g=0,d=y.length;g<d;g++){const m=y[g],x=m[0]+f,S=m[1]+f,L=m[2]+f;i.push(x,S,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return SA(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new Tu(i,e.curveSegments)}}function SA(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class Np extends xn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new O,h=new O,p=[],v=[],y=[],g=[];for(let d=0;d<=i;d++){const m=[],x=d/i;let S=0;d===0&&o===0?S=.5/n:d===i&&l===Math.PI&&(S=-.5/n);for(let L=0;L<=n;L++){const A=L/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),g.push(A+S,1-x),m.push(c++)}u.push(m)}for(let d=0;d<i;d++)for(let m=0;m<n;m++){const x=u[d][m+1],S=u[d][m],L=u[d+1][m],A=u[d+1][m+1];(d!==0||o>0)&&p.push(x,S,A),(d!==i-1||l<Math.PI)&&p.push(S,L,A)}this.setIndex(p),this.setAttribute("position",new Bt(v,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Np(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fn extends Vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=l_,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const wh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class MA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const wA=new MA;class Ip{constructor(e){this.manager=e!==void 0?e:wA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ip.DEFAULT_MATERIAL_NAME="__DEFAULT";class EA extends Ip{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=wh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ml("img");function l(){u(),wh.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Rc extends Ip{constructor(e){super(e)}load(e,n,i,r){const s=new $n,o=new EA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Dp extends bn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const lf=new rn,R0=new O,P0=new O;class F_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tp,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;R0.setFromMatrixPosition(e.matrixWorld),n.position.copy(R0),P0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(P0),n.updateMatrixWorld(),lf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const L0=new rn,ba=new O,cf=new O;class bA extends F_{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ba.setFromMatrixPosition(e.matrixWorld),i.position.copy(ba),cf.copy(i.position),cf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(cf),i.updateMatrixWorld(),r.makeTranslation(-ba.x,-ba.y,-ba.z),L0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(L0)}}class TA extends Dp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new bA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class AA extends F_{constructor(){super(new Ap(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uf extends Dp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new AA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class df extends Dp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class CA{constructor(e,n,i=0,r=1/0){this.ray=new Ep(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new bp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Eh(e,this,i,n),i.sort(N0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Eh(e[r],this,i,n);return i.sort(N0),i}}function N0(t,e){return t.distance-e.distance}function Eh(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Eh(r[s],e,n,!0)}}class RA extends _h{constructor(e=10,n=10,i=4473924,r=8947848){i=new Et(i),r=new Et(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,v=-a;h<=n;h++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const y=h===s?i:r;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const u=new xn;u.setAttribute("position",new Bt(l,3)),u.setAttribute("color",new Bt(c,3));const f=new ja({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);class ff extends Xc{constructor(e=null){super();const n=new dn;n.deleteAttribute("uv");const i=new fn({side:Xn}),r=new fn;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const o=new TA(16777215,s,28,2);o.position.set(.418,16.199,.3),this.add(o);const a=new Xe(n,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const l=new Xe(n,r);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new Xe(n,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const u=new Xe(n,r);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const f=new Xe(n,r);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);const h=new Xe(n,r);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const p=new Xe(n,r);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const v=new Xe(n,vo(50));v.position.set(-16.116,14.37,8.208),v.scale.set(.1,2.428,2.739),this.add(v);const y=new Xe(n,vo(50));y.position.set(-16.109,18.021,-8.207),y.scale.set(.1,2.425,2.751),this.add(y);const g=new Xe(n,vo(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const d=new Xe(n,vo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const m=new Xe(n,vo(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const x=new Xe(n,vo(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function vo(t){const e=new Bi;return e.color.setScalar(t),e}/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),k_=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var LA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=De.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>De.createElement("svg",{ref:l,...LA,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:k_("lucide",r),...a},[...o.map(([c,u])=>De.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=(t,e)=>{const n=De.forwardRef(({className:i,...r},s)=>De.createElement(NA,{ref:s,iconNode:e,className:k_(`lucide-${PA(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Pc=pn("Camera",IA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],UA=pn("Car",DA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],I0=pn("Download",OA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],kA=pn("FolderOpen",FA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],D0=pn("Image",zA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],HA=pn("Layers",BA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],GA=pn("LockOpen",VA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],jA=pn("Lock",WA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],$A=pn("Map",XA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],qA=pn("Move",YA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],U0=pn("Plus",ZA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],JA=pn("Redo",KA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],eC=pn("Save",QA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],nC=pn("Square",tC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],O0=pn("Trash2",iC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],sC=pn("Trees",rC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],aC=pn("Type",oC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],cC=pn("Undo",lC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],dC=pn("Upload",uC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],hf=pn("X",fC),xo=()=>Math.random().toString(36).substr(2,9),An={camera:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899"],building:["#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b"],tree:["#22c55e","#16a34a","#15803d","#14532d","#84cc16","#bef264"],parking:["#e2e8f0","#cbd5e1","#94a3b8","#f8fafc","#ffffff","#f1f5f9"],label:["#1e293b","#334155","#475569","#64748b","#ef4444","#3b82f6"]},pf={width:1e3,height:700},Kn=(t,e,n)=>Math.min(Math.max(t,e),n),mf=t=>{let e=t%360;return e>180&&(e-=360),e<-180&&(e+=360),e},Lc=(t,e)=>[{x:-t/2,y:-e/2},{x:t/2,y:-e/2},{x:t/2,y:e/2},{x:-t/2,y:e/2}],hC=t=>{const e=t.map(a=>a.x),n=t.map(a=>a.y),i=Math.min(...e),r=Math.max(...e),s=Math.min(...n),o=Math.max(...n);return{minX:i,maxX:r,minY:s,maxY:o,width:r-i,height:o-s}},gf=t=>{const e=new jr,n=t.width,i=t.height,r=12,s=3,o=t.color,l=t.id.split("").reduce(($,ie)=>$+ie.charCodeAt(0),0)%4,c=new fn({color:o,roughness:.2,metalness:.3,flatShading:!0}),u=new fn({color:"#1e293b",roughness:.1,metalness:.9,flatShading:!0}),f=new fn({color:"#171717",roughness:.5,flatShading:!0}),h=new ks(s,s,n*.15,12);h.rotateZ(Math.PI/2);const p=i*.35,v=n*.45;(()=>{[-1,1].forEach($=>{[-1,1].forEach(ie=>{const I=new Xe(h,f);I.position.set($*v,s,ie*p),I.castShadow=!0,e.add(I)})})})();const g=s+1;if(l===1){const $=r*.9,ie=new Xe(new dn(n,$,i),c);ie.position.y=g+$/2,ie.castShadow=!0,ie.receiveShadow=!0,e.add(ie);const I=r*.7,j=i*.8,X=n*.85,ne=new Xe(new dn(X,I,j),c);ne.position.y=g+$+I/2-2,ne.castShadow=!0,e.add(ne);const B=new Xe(new dn(X+.2,I*.7,j*.9),u);B.position.copy(ne.position),e.add(B)}else if(l===2){const $=i*.35,ie=i*.6,I=r*1.5,j=new Xe(new dn(n,r*.6,i),c);j.position.y=g+r*.3,j.castShadow=!0,e.add(j);const X=new Xe(new dn(n*.95,I,$),c);X.position.set(0,g+r*.3+I/2,-i/2+$/2+2),X.castShadow=!0,e.add(X);const ne=new Xe(new dn(n+.1,I*.5,$*.7),u);ne.position.copy(X.position),ne.position.y+=2,e.add(ne);const B=4,Y=new Xe(new dn(n*.95,B,ie),c);Y.position.set(0,g+r*.6+B/2,i/2-ie/2),e.add(Y)}else if(l===3){const $=r*.7,ie=new Xe(new dn(n,$,i),c);ie.position.y=g+$/2,ie.castShadow=!0,e.add(ie);const I=r*.5,j=i*.5,X=new Xe(new dn(n*.7,I,j),c);X.position.y=g+$+I/2-1,e.add(X);const ne=new Xe(new dn(n*.72,I*.8,j*.8),u);ne.position.copy(X.position),e.add(ne)}else{const $=r*.6,ie=new Xe(new dn(n,$,i),c);ie.position.y=g+$/2,ie.castShadow=!0,e.add(ie);const I=r*.8,j=i*.5,X=new Xe(new dn(n*.85,I,j),c);X.position.y=g+$+I/2-1,X.castShadow=!0,e.add(X);const ne=new Xe(new dn(n*.9,I*.8,j*.9),u);ne.position.copy(X.position),e.add(ne)}const d=new Si(3,2),m=new Bi({color:"#fef3c7"}),x=new Bi({color:"#ef4444"}),S=-i/2-.1,L=i/2+.1,A=g+r*.6,P=n*.35,k=new Xe(d,m);k.position.set(-P,A,S),k.rotation.y=Math.PI,e.add(k);const b=new Xe(d,m);b.position.set(P,A,S),b.rotation.y=Math.PI,e.add(b);const T=new Xe(d,x);T.position.set(-P,A,L),e.add(T);const G=new Xe(d,x);return G.position.set(P,A,L),e.add(G),e.position.set(t.x,0,t.y),e.rotation.y=-un.degToRad(t.rotation),e},vf=t=>{const e=new jr,n=t.id.split("").reduce((f,h)=>f+h.charCodeAt(0),0),i=n%2===0,r=t.radius*.25,s=i?t.radius*2:t.radius*1.5,o=new ks(r*.6,r,s,6),a=new fn({color:"#4a3728",roughness:1,flatShading:!0}),l=new Xe(o,a);l.position.y=s/2,l.castShadow=!0,l.receiveShadow=!0,e.add(l);const c=i?"#1e4620":t.color,u=new fn({color:c,roughness:.8,flatShading:!0});if(i){const h=t.radius,p=t.radius*2.5/4;for(let v=0;v<4;v++){const y=v/3,g=h*(1-y*.6),d=s*.3+v*(p*.8),m=new Xe(new $u(g,p*1.5,7),u);m.position.y=d,m.castShadow=!0,m.receiveShadow=!0,e.add(m)}}else{const f=new bu(t.radius*.8,0),h=new Xe(f,u);h.position.y=s+t.radius*.2,h.castShadow=!0,h.receiveShadow=!0,e.add(h);const p=10;for(let v=0;v<p;v++){const g=(n+v*13)%100/100*Math.PI*2,d=(n+v*7)%100/100*Math.PI,m=t.radius*(.3+(n+v*3)%5/10),x=t.radius*.7,S=new Xe(new bu(m,0),u);S.position.set(Math.sin(d)*Math.cos(g)*x,h.position.y+Math.cos(d)*x*.8,Math.sin(d)*Math.sin(g)*x),S.castShadow=!0,e.add(S)}}return e.position.set(t.x,0,t.y),e},pC=(t,e,n)=>{const i=hC(t);if(i.width===0||i.height===0)return t;const r={x:(i.minX+i.maxX)/2,y:(i.minY+i.maxY)/2},s=e/i.width,o=n/i.height;return t.map(a=>({x:r.x+(a.x-r.x)*s,y:r.y+(a.y-r.y)*o}))},mC=t=>{if(t.length<2)return t;let e=0,n=0;for(let o=0;o<t.length;o+=1){const a=(o+1)%t.length,l=t[a].x-t[o].x,c=t[a].y-t[o].y,u=Math.hypot(l,c);u>n&&(n=u,e=o)}const i=(e+1)%t.length,r={x:(t[e].x+t[i].x)/2,y:(t[e].y+t[i].y)/2},s=[...t];return s.splice(e+1,0,r),s},gC=(t,e)=>{if(t.length<2)return t;let n=0,i=Number.POSITIVE_INFINITY,r=e;for(let o=0;o<t.length;o+=1){const a=(o+1)%t.length,l=t[o],c=t[a],u={x:c.x-l.x,y:c.y-l.y},f={x:e.x-l.x,y:e.y-l.y},h=u.x*u.x+u.y*u.y||1;let p=(f.x*u.x+f.y*u.y)/h;p=Kn(p,0,1);const v={x:l.x+u.x*p,y:l.y+u.y*p},y=Math.hypot(e.x-v.x,e.y-v.y);y<i&&(i=y,n=o+1,r=v)}const s=[...t];return s.splice(n,0,r),s},vC=(t,e)=>{const n=t.replace("#",""),i=n.length===3?n.split("").map(l=>l+l).join(""):n,r=parseInt(i,16),s=Kn((r>>16)+e,0,255),o=Kn((r>>8&255)+e,0,255),a=Kn((r&255)+e,0,255);return`#${(s<<16|o<<8|a).toString(16).padStart(6,"0")}`},xC=(t,e)=>{const n=t*Math.PI/180,i=2*Math.atan(Math.tan(n/2)/Math.sqrt(e*e+1));return{h:2*Math.atan(Math.tan(i/2)*e)*180/Math.PI,v:i*180/Math.PI}},_C=(t,e)=>{const n=t*Math.PI/180,i=e*Math.PI/180;return 2*Math.atan(Math.sqrt(Math.tan(n/2)**2+Math.tan(i/2)**2))*180/Math.PI},Ta=(t,e)=>{const n=t*Math.PI/180;return 2*Math.atan(Math.tan(n/2)/e)*180/Math.PI},yC=(t,e)=>{const n=t*Math.PI/180;return 2*Math.atan(Math.tan(n/2)*e)*180/Math.PI};function SC(){var kp,zp,Bp,Hp,Vp,Gp;const[t,e]=De.useState([]),[n,i]=De.useState(null),r=De.useRef(null);De.useEffect(()=>{r.current=n},[n]);const[s,o]=De.useState([]),[a,l]=De.useState(-1),c=De.useRef([]),u=De.useRef(-1);De.useEffect(()=>{c.current=s,u.current=a},[s,a]);const f=()=>{const _=JSON.stringify(t);a>=0&&s[a]===_||(o(w=>{const N=w.slice(0,a+1);return N.push(_),N.length>30&&N.shift(),N}),l(w=>{const N=w+1;return N>=30?29:N}))},h=()=>{const _=u.current;if(_>0){const w=_-1;try{const N=JSON.parse(c.current[w]);e(N),l(w)}catch(N){console.error("Undo failed",N)}}},p=()=>{const _=u.current;if(_<c.current.length-1){const w=_+1;try{const N=JSON.parse(c.current[w]);e(N),l(w)}catch(N){console.error("Redo failed",N)}}},[v,y]=De.useState(pf),[g,d]=De.useState(null),[m,x]=De.useState({x:0,y:0,width:pf.width,height:pf.height,opacity:.5}),[S,L]=De.useState(20),[A,P]=De.useState(!0),[k,b]=De.useState(!0),[T,G]=De.useState("Security Camera Plan"),[$,ie]=De.useState(!1),[I,j]=De.useState("plan"),[X,ne]=De.useState({scale:2,padding:48,includeGrid:!0,includeLegend:!0,includeTitle:!0,includeCameraViews:!0}),[B,Y]=De.useState({x:0,y:0}),[q,ue]=De.useState(1),[pe,te]=De.useState(!1),[de,Ne]=De.useState({x:0,y:0,panX:0,panY:0}),[He,Oe]=De.useState(!1),st=De.useRef(!1),[nt,$e]=De.useState("select"),[Be,U]=De.useState(null),[oe,le]=De.useState({type:null,itemId:null,startMouse:{x:0,y:0},startVal:null,snap:!1}),_e=De.useRef(null),ae=De.useRef(null),et=De.useRef(null),Fe=De.useRef(null),C=De.useRef(null),E=De.useRef(null),H=De.useRef(null),fe=De.useRef(new Map);De.useRef([]);const ge=De.useRef([]);De.useRef({renderer:null,pmremGenerator:null,envTexture:null});const[ve,Je]=De.useState([]),[Ce,ze]=De.useState(!1),[rt,mt]=De.useState(!0),[re,bt]=De.useState([]),[Ve,ot]=De.useState({visible:!0,opacity:.15,edgeOpacity:.6,useCameraColor:!0,color:"#3b82f6",showAll:!0,mode:"volume"}),[Ye,We]=De.useState(null),[at,Pt]=De.useState("flat"),[Rt,xt]=De.useState(null);De.useEffect(()=>{const _=localStorage.getItem("securityCameraPlannerData");if(_)try{const w=JSON.parse(_);w.items&&e(w.items),w.backgroundImg&&d(w.backgroundImg),w.bgSettings&&x(w.bgSettings),w.canvasSize&&y(w.canvasSize),w.exportList&&bt(w.exportList),w.projectName&&G(w.projectName),w.frustumSettings&&ot(w.frustumSettings),w.sceneBackgroundImg&&We(w.sceneBackgroundImg),w.backgroundMode&&Pt(w.backgroundMode)}catch(w){console.error("Failed to load saved state",w)}},[]),De.useEffect(()=>{const _=setTimeout(()=>{try{const w={items:t,backgroundImg:g,bgSettings:m,canvasSize:v,exportList:re,projectName:T,frustumSettings:Ve,sceneBackgroundImg:Ye,backgroundMode:at};localStorage.setItem("securityCameraPlannerData",JSON.stringify(w))}catch(w){if(w.name==="QuotaExceededError"||w.name==="NS_ERROR_DOM_QUOTA_REACHED"){console.error("Storage full, trying to save without background image");try{const N={items:t,bgSettings:m,canvasSize:v,exportList:re,projectName:T};localStorage.setItem("securityCameraPlannerData",JSON.stringify(N))}catch(N){console.error("Still failed to save",N)}}else console.error("Failed to save state",w)}},1e3);return()=>clearTimeout(_)},[t,g,m,v,re,T,Ve,Ye,at]);const be=De.useRef(null),z=De.useRef(null),Ae=(_,w=k)=>w?Math.round(_/S)*S:_,Ee=_=>_.points&&_.points.length>=3?_.points:Lc(_.width,_.height),dt=(_,w)=>{const N=w*Math.PI/180,F=Math.cos(N),D=Math.sin(N);return{x:_.x*F-_.y*D,y:_.x*D+_.y*F}},lt=(_,w)=>{const N=dt(_,w.rotation);return{x:w.x+N.x,y:w.y+N.y}},Ut=(_,w)=>{const N=_.x-w.x,F=_.y-w.y;return dt({x:N,y:F},-w.rotation)},It=_=>t.find(w=>w.type==="building"&&w.id===_),Ht=_=>Ee(_).map(N=>lt(N,_)),Wt=_=>{var w;if(((w=_.mount)==null?void 0:w.type)==="building"&&_.mount.buildingId){const N=It(_.mount.buildingId);if(!N)return{x:_.x,y:_.y};const F=Ht(N);if(F.length<2)return{x:_.x,y:_.y};const D=Kn(_.mount.edgeIndex??0,0,F.length-1),J=(D+1)%F.length,V=F[D],Q=F[J],me=Kn(_.mount.edgeT??.5,0,1),se={x:V.x+(Q.x-V.x)*me,y:V.y+(Q.y-V.y)*me},Me=F.reduce((ye,je)=>({x:ye.x+je.x,y:ye.y+je.y}),{x:0,y:0});F.length>0&&(Me.x/=F.length,Me.y/=F.length);const Le={x:se.x-Me.x,y:se.y-Me.y},qe=Math.hypot(Le.x,Le.y)||1,Re=3;return{x:se.x+Le.x/qe*Re,y:se.y+Le.y/qe*Re}}return{x:_.x,y:_.y}},Ft=_=>{let w=null;return t.forEach(N=>{if(N.type!=="building")return;const F=N,D=Ht(F);for(let J=0;J<D.length;J+=1){const V=(J+1)%D.length,Q=D[J],me=D[V],se={x:me.x-Q.x,y:me.y-Q.y},Me={x:_.x-Q.x,y:_.y-Q.y},Le=se.x*se.x+se.y*se.y||1;let qe=(Me.x*se.x+Me.y*se.y)/Le;qe=Kn(qe,0,1);const Re={x:Q.x+se.x*qe,y:Q.y+se.y*qe},ye=Math.hypot(_.x-Re.x,_.y-Re.y);(!w||ye<w.distance)&&(w={buildingId:F.id,edgeIndex:J,edgeT:qe,distance:ye,point:Re})}}),w},Sn=_=>{let w=null;return t.forEach(N=>{if(N.type!=="building")return;const F=N,D=Ht(F),J={x:D.reduce((V,Q)=>V+Q.x,0)/D.length,y:D.reduce((V,Q)=>V+Q.y,0)/D.length};for(let V=0;V<D.length;V+=1){const Q=(V+1)%D.length,me=D[V],se=D[Q],Me={x:se.x-me.x,y:se.y-me.y},Le={x:_.x-me.x,y:_.y-me.y},qe=Me.x*Me.x+Me.y*Me.y||1;let Re=(Le.x*Me.x+Le.y*Me.y)/qe;Re=Kn(Re,0,1);const ye={x:me.x+Me.x*Re,y:me.y+Me.y*Re},je=Math.hypot(_.x-ye.x,_.y-ye.y),ce={x:(me.x+se.x)/2,y:(me.y+se.y)/2},he={x:ce.x-J.x,y:ce.y-J.y},Ie=Math.atan2(he.y,he.x)*(180/Math.PI);(!w||je<w.distance)&&(w={buildingId:F.id,edgeIndex:V,edgeT:Re,distance:je,point:ye,rotation:Ie})}}),w};v.width/2;const mi=(_,w)=>{if(!_e.current||I==="iso3d")return;const N=_e.current.getScreenCTM();if(!N)return;const F=Ae((_.clientX-N.e)/N.a),D=Ae((_.clientY-N.f)/N.d);let J;const V={id:xo(),x:F,y:D,rotation:0};switch(w){case"add-camera":J={...V,type:"camera",rotation:45,label:"Camera",description:"",fov:70,hFov:70,vFov:45,pitch:-15,height:60,aspect:16/9,mount:{type:"free",edgeT:.5,height:60},range:150,color:An.camera[0],labelOffset:{x:0,y:30},connectorDashSize:3};break;case"add-building":J={...V,type:"building",width:100,height:80,label:"Building",color:An.building[0],points:Lc(100,80)};break;case"add-tree":J={...V,type:"tree",radius:25,color:An.tree[0]};break;case"add-parking":J={...V,type:"parking",width:30,height:50,color:An.parking[0]};break;case"add-label":J={...V,type:"label",text:"Label",fontSize:14,color:An.label[0]};break;default:return}if(J.type==="camera"){const Q=Sn({x:F,y:D});if(Q&&Q.distance<100){const me=J;me.x=Q.point.x,me.y=Q.point.y,me.rotation=Q.rotation;const se=60;me.mount={type:"building",buildingId:Q.buildingId,edgeIndex:Q.edgeIndex,edgeT:Q.edgeT,height:se},me.height=se}xt(null)}e([...t,J]),U(J.id),$e("select")},Al=_=>{const w={id:xo(),type:"image",x:400,y:300,rotation:0,width:150,height:150,src:_,label:"Image",aspectRatioLocked:!0};e([...t,w]),U(w.id)},Tt=(_,w)=>{e(t.map(N=>N.id===_?{...N,...w}:N))},Ar=(_,w)=>{const N=t.find(F=>F.id===_);!N||N.type!=="camera"||Tt(_,{mount:{...N.mount??{type:"free"},...w}})},Cl=_=>{var F;const w=t.find(D=>D.id===_);if(!w||w.type!=="camera")return;const N=Ft(w);N&&Tt(_,{x:N.point.x,y:N.point.y,mount:{type:"building",buildingId:N.buildingId,edgeIndex:N.edgeIndex,edgeT:N.edgeT,height:((F=w.mount)==null?void 0:F.height)??w.height??10}})},ji=(_,w,N,F)=>{Tt(_,{hFov:w,vFov:N,aspect:F,fov:w})},ra=(_,w,N)=>{const F=t.find(V=>V.id===_);if(!F||F.type!=="building")return;const D=Ee(F),J=pC(D,w,N);Tt(_,{width:w,height:N,points:J})},Rl=_=>{const w=t.find(F=>F.id===_);if(!w||w.type!=="building")return;const N=mC(Ee(w));Tt(_,{points:N})},Pl=(_,w)=>{const N=t.find(J=>J.id===_);if(!N||N.type!=="building")return;const F=Ut(w,N),D=gC(Ee(N),F);Tt(_,{points:D})},qu=_=>{const w=t.find(F=>F.id===_);if(!w||w.type!=="building")return;const N=Ee(w);N.length<=3||Tt(_,{points:N.slice(0,-1)})},Zu=_=>{const w=t.find(N=>N.id===_);!w||w.type!=="building"||Tt(_,{points:Lc(w.width,w.height)})},R=(_,w,N)=>{const F=t.find(J=>J.id===_);if(!F||F.type!=="image")return;if(!F.aspectRatioLocked){Tt(_,{width:w??F.width,height:N??F.height});return}const D=F.width/F.height;w!==void 0?Tt(_,{width:w,height:w/D}):N!==void 0&&Tt(_,{width:N*D,height:N})},W=_=>{e(t.filter(w=>w.id!==_)),Be===_&&U(null)},K=()=>{t.length&&window.confirm("Clear all items from the canvas?")&&(e([]),U(null))},ee=()=>{x({...m,x:0,y:0,width:v.width,height:v.height})},Z=()=>{if(!_e.current)return;const{scale:_,padding:w,includeGrid:N,includeLegend:F,includeTitle:D}=X,J=new Date().toLocaleString(),V=v.width,Q=v.height,me=D?52:0,se=F?90:0,Me=V+w*2,Le=Q+w*2+me+se,qe="http://www.w3.org/2000/svg",Re=document.createElementNS(qe,"svg");Re.setAttribute("xmlns",qe),Re.setAttribute("width",`${Me}`),Re.setAttribute("height",`${Le}`),Re.setAttribute("viewBox",`0 0 ${Me} ${Le}`);const ye=document.createElementNS(qe,"rect");if(ye.setAttribute("x","0"),ye.setAttribute("y","0"),ye.setAttribute("width",`${Me}`),ye.setAttribute("height",`${Le}`),ye.setAttribute("fill","#ffffff"),Re.appendChild(ye),D){const Ke=document.createElementNS(qe,"text");Ke.setAttribute("x",`${w}`),Ke.setAttribute("y",`${w+24}`),Ke.setAttribute("font-size","20"),Ke.setAttribute("font-weight","700"),Ke.setAttribute("fill","#0f172a"),Ke.textContent=T||"Security Camera Plan",Re.appendChild(Ke);const vt=document.createElementNS(qe,"text");vt.setAttribute("x",`${w}`),vt.setAttribute("y",`${w+44}`),vt.setAttribute("font-size","12"),vt.setAttribute("fill","#64748b"),vt.textContent=`Exported ${J}`,Re.appendChild(vt)}const je=document.createElementNS(qe,"g"),ce=w+me;je.setAttribute("transform",`translate(${w}, ${ce})`);const he=_e.current.cloneNode(!0);if(he.removeAttribute("width"),he.removeAttribute("height"),!N){const Ke=he.querySelector("#grid-bg");Ke&&Ke.remove()}for(;he.childNodes.length>0;)je.appendChild(he.childNodes[0]);Re.appendChild(je);const Ie=document.createElementNS(qe,"rect");if(Ie.setAttribute("x",`${w-1}`),Ie.setAttribute("y",`${ce-1}`),Ie.setAttribute("width",`${V+2}`),Ie.setAttribute("height",`${Q+2}`),Ie.setAttribute("fill","none"),Ie.setAttribute("stroke","#e2e8f0"),Ie.setAttribute("stroke-width","2"),Re.appendChild(Ie),F){const Ke=ce+Q+36,vt=[{label:"Cameras",count:t.filter(it=>it.type==="camera").length,color:An.camera[0]},{label:"Buildings",count:t.filter(it=>it.type==="building").length,color:An.building[0]},{label:"Trees",count:t.filter(it=>it.type==="tree").length,color:An.tree[0]},{label:"Parking",count:t.filter(it=>it.type==="parking").length,color:An.parking[0]},{label:"Labels",count:t.filter(it=>it.type==="label").length,color:An.label[0]}],ct=document.createElementNS(qe,"text");ct.setAttribute("x",`${w}`),ct.setAttribute("y",`${Ke}`),ct.setAttribute("font-size","12"),ct.setAttribute("font-weight","600"),ct.setAttribute("fill","#0f172a"),ct.textContent="Legend",Re.appendChild(ct),vt.forEach((it,pt)=>{const gi=w+pt*150,zn=document.createElementNS(qe,"rect");zn.setAttribute("x",`${gi}`),zn.setAttribute("y",`${Ke+14}`),zn.setAttribute("width","10"),zn.setAttribute("height","10"),zn.setAttribute("rx","2"),zn.setAttribute("fill",it.color),Re.appendChild(zn);const vi=document.createElementNS(qe,"text");vi.setAttribute("x",`${gi+16}`),vi.setAttribute("y",`${Ke+23}`),vi.setAttribute("font-size","11"),vi.setAttribute("fill","#475569"),vi.textContent=`${it.label} (${it.count})`,Re.appendChild(vi)})}const Ze=document.createElement("canvas"),Ue=Ze.getContext("2d");Ze.width=Me*_,Ze.height=Le*_,Ue&&Ue.scale(_,_);const Te=new XMLSerializer().serializeToString(Re),ft=new Image,St=new Blob([Te],{type:"image/svg+xml;charset=utf-8"}),Qe=URL.createObjectURL(St);ft.onload=()=>{if(Ue){Ue.fillStyle="#ffffff",Ue.fillRect(0,0,Me,Le),Ue.drawImage(ft,0,0);const Ke=Ze.toDataURL("image/png"),vt=document.createElement("a");vt.href=Ke,vt.download="security_plan.png",document.body.appendChild(vt),vt.click(),document.body.removeChild(vt)}URL.revokeObjectURL(Qe)},ft.src=Qe},ke=(_,w,N,F)=>{bt(D=>[...D,{id:crypto.randomUUID(),type:_,label:w,dataUrl:N,cameraId:F}])},tt=_=>{var Ze;const F=Wt(_),D=((Ze=_.mount)==null?void 0:Ze.height)??_.height??10,J=_.hFov??_.fov,V=_.pitch??-15,Q=_.range,me=un.degToRad(_.rotation),se=new Xc;se.background=new Et("#87CEEB"),se.fog=new Wa("#87CEEB",Q*.3,Q*1.2);const Me=new Qn(J,640/480,1,Q*2);Me.position.set(F.x,D,F.y);const Le=un.degToRad(V),qe=new O(F.x+Math.cos(me)*100,D+Math.tan(Le)*100,F.y+Math.sin(me)*100);Me.lookAt(qe),se.add(new df(16777215,.5));const Re=new uf(16777215,.7);Re.position.set(100,200,50),se.add(Re);const ye=new Xe(new Si(v.width*2,v.height*2),new fn({color:"#6B8E23",roughness:.9}));if(ye.rotation.x=-Math.PI/2,ye.position.set(v.width/2,0,v.height/2),se.add(ye),z.current){const Ue=new rf(z.current);Ue.colorSpace=Kt;const Te=new Xe(new Si(m.width,m.height),new Bi({map:Ue,transparent:!0,opacity:m.opacity}));Te.rotation.x=-Math.PI/2,Te.position.set(m.x+m.width/2,.1,m.y+m.height/2),se.add(Te)}t.forEach(Ue=>{if(Ue.type==="building"){const Te=Ue,ft=Ee(Te),St=new Ms(ft.map(vt=>new Se(vt.x,-vt.y))),Qe=new Ya(St,{depth:60,bevelEnabled:!1});Qe.rotateX(-Math.PI/2);const Ke=new Xe(Qe,new fn({color:Te.color,side:li}));Ke.position.set(Te.x,0,Te.y),Ke.rotation.y=-un.degToRad(Te.rotation),se.add(Ke)}if(Ue.type==="tree"){const Te=vf(Ue);se.add(Te)}if(Ue.type==="parking"){const Te=gf(Ue);se.add(Te)}});const je=document.createElement("canvas");je.width=640,je.height=480;const ce=new jc({canvas:je,antialias:!0});ce.setSize(640,480),ce.render(se,Me);const he=je.getContext("2d");if(he){he.fillStyle="rgba(0,0,0,0.7)",he.fillRect(0,0,640,30),he.fillStyle="#fff",he.font="bold 14px sans-serif",he.fillText(`📷 ${_.label}`,10,20),he.font="12px sans-serif",he.fillStyle="#94a3b8";const Ue=`FOV: ${J.toFixed(0)}° | Pitch: ${V}° | Range: ${Q}px`;he.fillText(Ue,640-he.measureText(Ue).width-10,20)}const Ie=je.toDataURL("image/png");return ce.dispose(),Ie},ut=()=>{if(!_e.current)return;const _=new XMLSerializer().serializeToString(_e.current),w=document.createElement("canvas");w.width=v.width*2,w.height=v.height*2;const N=w.getContext("2d");if(!N)return;const F=new Image,D=new Blob([_],{type:"image/svg+xml;charset=utf-8"}),J=URL.createObjectURL(D);F.onload=()=>{N.scale(2,2),N.fillStyle="#f8fafc",N.fillRect(0,0,v.width,v.height),N.drawImage(F,0,0),ke("plan","2D Plan View",w.toDataURL("image/png")),URL.revokeObjectURL(J)},F.src=J},ht=_=>{const w=tt(_);ke("camera",`Camera: ${_.label}`,w,_.id)},Mt=_=>{var F;const w=(F=_.target.files)==null?void 0:F[0];if(!w)return;const N=new FileReader;N.onload=D=>{var Q;const J=(Q=D.target)==null?void 0:Q.result,V=new Image;V.onload=()=>{const me=V.width/V.height,se=me>=1.8&&me<=2.2;We(J),Pt(se?"panorama":"flat")},V.src=J},N.readAsDataURL(w)},gt=async()=>{if(re.length===0){alert("Add some views to the export list first!");return}const _=2,w=40,N=800,F=600,D=2,J=Math.ceil(re.length/D),V=(N+w)*D+w,Q=120,me=Q+(F+w+30)*J+w,se=document.createElement("canvas");se.width=V*_,se.height=me*_;const Me=se.getContext("2d");if(!Me)return;Me.scale(_,_),Me.fillStyle="#fff",Me.fillRect(0,0,V,me),Me.fillStyle="#0f172a",Me.font="bold 28px sans-serif",Me.fillText(T||"Security Camera Plan",w,w+30),Me.fillStyle="#64748b",Me.font="14px sans-serif",Me.fillText(`Exported: ${new Date().toLocaleString()} | ${re.length} view(s)`,w,w+55);const Le=ye=>new Promise((je,ce)=>{const he=new Image;he.onload=()=>je(he),he.onerror=ce,he.src=ye});for(let ye=0;ye<re.length;ye++){const je=re[ye],ce=ye%D,he=Math.floor(ye/D),Ie=w+ce*(N+w),Ze=Q+he*(F+w+30);Me.fillStyle="#334155",Me.font="bold 14px sans-serif",Me.fillText(je.label,Ie,Ze+20),Me.fillStyle="#f1f5f9",Me.fillRect(Ie,Ze+28,N,F),Me.strokeStyle="#e2e8f0",Me.lineWidth=2,Me.strokeRect(Ie,Ze+28,N,F);try{const Ue=await Le(je.dataUrl),Te=Ue.width/Ue.height,ft=N/F;let St,Qe,Ke,vt;Te>ft?(St=N,Qe=N/Te,Ke=Ie,vt=Ze+28+(F-Qe)/2):(Qe=F,St=F*Te,Ke=Ie+(N-St)/2,vt=Ze+28),Me.drawImage(Ue,Ke,vt,St,Qe)}catch{Me.fillStyle="#cbd5e1",Me.font="16px sans-serif",Me.fillText("Failed to load image",Ie+20,Ze+100)}}const qe=se.toDataURL("image/png"),Re=document.createElement("a");Re.href=qe,Re.download=`${(T||"security_plan").replace(/\s+/g,"_")}_report.png`,document.body.appendChild(Re),Re.click(),document.body.removeChild(Re)},_t=()=>{if(re.length===0){alert("Add some views to the export list first!");return}const _=window.open("","_blank");if(!_){alert("Please allow popups to export PDF");return}const w=`
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
        <div class="meta">Exported: ${new Date().toLocaleString()} | ${re.length} view(s)</div>
        
        ${re.map(N=>`
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
    `;_.document.write(w),_.document.close()},jt=()=>{const w=JSON.stringify({version:1,items:t,backgroundImg:g,bgSettings:m,canvasSize:v,gridSize:S,showGrid:A,snapToGrid:k,projectName:T,exportList:re},null,2),N=new Blob([w],{type:"application/json"}),F=URL.createObjectURL(N),D=document.createElement("a");D.href=F,D.download="security_project.json",document.body.appendChild(D),D.click(),document.body.removeChild(D),URL.revokeObjectURL(F)},kn=_=>{var F;const w=(F=_.target.files)==null?void 0:F[0];if(!w)return;const N=new FileReader;N.onload=D=>{var J;try{const V=(J=D.target)==null?void 0:J.result,Q=JSON.parse(V);Q.items&&e(Q.items),Q.backgroundImg&&d(Q.backgroundImg),Q.bgSettings&&x(Q.bgSettings),Q.canvasSize&&y(Q.canvasSize),typeof Q.gridSize=="number"&&L(Q.gridSize),typeof Q.showGrid=="boolean"&&P(Q.showGrid),typeof Q.snapToGrid=="boolean"&&b(Q.snapToGrid),Q.projectName&&G(Q.projectName),Q.exportList&&bt(Q.exportList)}catch(V){console.error("Failed to load project file",V),alert("Invalid project file.")}},N.readAsText(w)},ln=_=>{var N;const w=(N=_.target.files)==null?void 0:N[0];if(w){const F=new FileReader;F.onload=D=>{var J;return d((J=D.target)==null?void 0:J.result)},F.readAsDataURL(w)}},Li=_=>{var N;const w=(N=_.target.files)==null?void 0:N[0];if(w){const F=new FileReader;F.onload=D=>{var J;return Al((J=D.target)==null?void 0:J.result)},F.readAsDataURL(w)}},Xt=_=>{_.traverse(w=>{const N=w;N.geometry&&N.geometry.dispose(),N.material&&(Array.isArray(N.material)?N.material.forEach(F=>F.dispose()):N.material.dispose())}),_.clear()},yt=_=>{const w=document.createElement("canvas"),N=w.getContext("2d");if(!N)return null;const F=56,D=24;N.font=`${F}px Space Grotesk, sans-serif`;const J=N.measureText(_);w.width=Math.ceil(J.width+D*2),w.height=Math.ceil(F+D*1.6),N.font=`${F}px Space Grotesk, sans-serif`,N.fillStyle="rgba(15, 23, 42, 0.9)",N.textBaseline="middle",N.fillText(_,D,w.height/2);const V=new rf(w);V.colorSpace=Kt;const Q=new A_({map:V,transparent:!0}),me=new V2(Q);return me.scale.set(w.width/10,w.height/10,1),me},sa=(_,w,N,F)=>{const D=_.x,J=_.y,V=w.x,Q=w.y,me=N.x,se=N.y,Me=F.x,Le=F.y,qe=D-me,Re=J-se,ye=Me-me,je=Le-se,ce=-Q,he=V,Ie=ye*ce+je*he;if(Math.abs(Ie)<1e-6)return null;const Ze=(ye*Re-je*qe)/Ie,Ue=(qe*ce+Re*he)/Ie;return Ze>=0&&Ue>=0&&Ue<=1?Ze:null},$t=(_,w,N,F,D)=>{const J=D.flatMap(Le=>{if(Le.type==="building"){const Re=Ht(Le);return Re.length<2?[]:Re.map((ye,je)=>[ye,Re[(je+1)%Re.length]])}else if(Le.type==="tree"){const qe=Le,Re=[],ye=8;for(let je=0;je<ye;je++){const ce=je/ye*Math.PI*2;Re.push({x:qe.x+qe.radius*Math.cos(ce),y:qe.y+qe.radius*Math.sin(ce)})}return Re.map((je,ce)=>[je,Re[(ce+1)%Re.length]])}return[]}),V=128,Q=(F-N/2)*(Math.PI/180),se=N*(Math.PI/180)/(V-1),Me=[];for(let Le=0;Le<V;Le++){const qe=Q+Le*se,Re={x:Math.cos(qe),y:Math.sin(qe)};let ye=w;for(const je of J){const ce=sa(_,Re,je[0],je[1]);ce!==null&&ce<ye&&(ye=ce)}Me.push({x:ye*Re.x,y:ye*Re.y})}return Me},sr=()=>{const _=H.current;if(!_)return;const w=fe.current;let N=!1;t.forEach(F=>{var J;const D=w.get(F.id);if(D)if(F.type==="building"||F.type==="parking")D.position.set(F.x,0,F.y),D.rotation.y=-un.degToRad(F.rotation),N=!0;else if(F.type==="tree"){const V=F;D.position.set(V.x,0,V.y),N=!0}else if(F.type==="camera"){const V=F,Q=Wt(V),me=((J=V.mount)==null?void 0:J.height)??V.height??10;D.position.set(Q.x,me,Q.y),D.rotation.y=-un.degToRad(V.rotation),D.rotation.x=un.degToRad(V.pitch??0),N=!0}else if(F.type==="image"){const V=F;D.position.set(V.x,.25,V.y),D.rotation.z=un.degToRad(V.rotation),N=!0}else F.type==="label"&&(D.position.set(F.x,8,F.y),N=!0)}),N&&_.renderer.render(_.scene,_.camera)},Ll=(_,w)=>{if(_.length!==w.length)return!0;const N=new Set(_.map(D=>D.id)),F=new Set(w.map(D=>D.id));for(const D of F)if(!N.has(D))return!0;for(const D of N)if(!F.has(D))return!0;for(const D of w){const J=_.find(V=>V.id===D.id);if(!J||J.type!==D.type)return!0;if(D.type==="building"){const V=J,Q=D;if(V.width!==Q.width||V.height!==Q.height||V.wallHeight!==Q.wallHeight||JSON.stringify(V.points)!==JSON.stringify(Q.points)||V.color!==Q.color)return!0}if(D.type==="tree"){const V=J,Q=D;if(V.radius!==Q.radius||V.color!==Q.color)return!0}if(D.type==="camera"){const V=J,Q=D;if(V.range!==Q.range||V.fov!==Q.fov||V.hFov!==Q.hFov||V.color!==Q.color)return!0}}return!1},us=()=>{const _=H.current;if(!_)return;const{group:w,scene:N,renderer:F}=_,D=ge.current;if(D.length>0&&!Ll(D,t)){sr(),ge.current=[...t];return}fe.current.clear(),Xt(w);const J=Math.max(v.width,v.height)*2,V=new Si(J,J),Q=new fn({color:592139,roughness:.95,metalness:0}),me=new Xe(V,Q);me.rotation.x=-Math.PI/2,me.position.set(v.width/2,-.5,v.height/2),me.receiveShadow=!0,w.add(me);const se=new RA(J,Math.round(J/S),2565930,2565930);se.position.set(v.width/2,.01,v.height/2),A&&w.add(se);const Me=new Xe(new Si(v.width,v.height),new fn({color:1579035,roughness:.8,metalness:0}));Me.rotation.x=-Math.PI/2,Me.position.set(v.width/2,.05,v.height/2),Me.receiveShadow=!0,w.add(Me);const Le=new xn,qe=new Float32Array([0,.1,0,v.width,.1,0,v.width,.1,v.height,0,.1,v.height,0,.1,0]);Le.setAttribute("position",new Ci(qe,3));const Re=new R_(Le,new ja({color:9741240,linewidth:2}));if(w.add(Re),g){const ye=new fn({color:16777215,transparent:!0,opacity:m.opacity,roughness:.9});new Rc().load(g,ce=>{ce.colorSpace=Kt,ce.wrapS=ci,ce.wrapT=ci,ce.minFilter=Wn,ce.magFilter=Wn,ye.map=ce,ye.needsUpdate=!0,F.render(N,_.camera)});const je=new Xe(new Si(m.width,m.height),ye);je.rotation.x=-Math.PI/2,je.position.set(m.x+m.width/2,.15,m.y+m.height/2),je.receiveShadow=!0,w.add(je)}if(t.forEach(ye=>{var je;if(ye.type==="building"){const ce=ye,he=Ee(ce),Ie=ce.wallHeight??60,Ze=new Ms(he.map(pt=>new Se(pt.x,-pt.y))),Ue={depth:Ie,bevelEnabled:!0,bevelThickness:2,bevelSize:1,bevelSegments:2},Te=new Ya(Ze,Ue);Te.rotateX(-Math.PI/2);const ft=new fn({color:ce.color,roughness:.6,metalness:.1}),St=new Xe(Te,ft);St.position.set(ce.x,0,ce.y),St.rotation.y=-un.degToRad(ce.rotation),St.castShadow=!0,St.receiveShadow=!0,St.userData.itemId=ce.id,fe.current.set(ce.id,St),w.add(St);const Qe=new fn({color:vC(ce.color,-20),roughness:.7,metalness:.05}),Ke=new Ms(he.map(pt=>new Se(pt.x,-pt.y))),vt=new Tu(Ke);vt.rotateX(-Math.PI/2);const ct=new Xe(vt,Qe);ct.position.set(ce.x,Ie+.1,ce.y),ct.rotation.y=-un.degToRad(ce.rotation),ct.receiveShadow=!0,w.add(ct);const it=yt(ce.label);it&&(it.position.set(ce.x,Ie+15,ce.y),w.add(it))}if(ye.type==="parking"){const ce=gf(ye);ce.userData.itemId=ye.id,fe.current.set(ye.id,ce),w.add(ce)}if(ye.type==="tree"){const ce=vf(ye);ce.userData.itemId=ye.id,fe.current.set(ye.id,ce),w.add(ce)}if(ye.type==="camera"){const ce=ye,he=Wt(ce),Ie=((je=ce.mount)==null?void 0:je.height)??ce.height??10,Ze=ce.pitch??0,Ue=ce.hFov??ce.fov;ce.vFov??Ta(Ue,ce.aspect??16/9);const Te=ce.range,ft=-un.degToRad(ce.rotation),St=un.degToRad(Ze),Qe=new jr;Qe.userData.itemId=ce.id;const Ke=new dn(14,10,10),vt=new fn({color:"#1e293b",roughness:.3,metalness:.5}),ct=new Xe(Ke,vt);Qe.add(ct);const it=new ks(3.5,4,8,16);it.rotateZ(Math.PI/2);const pt=new fn({color:"#0f172a",roughness:.2,metalness:.7}),gi=new Xe(it,pt);gi.position.set(10,0,0),Qe.add(gi);const zn=new Np(1.5,8,8),vi=new Bi({color:ce.color}),js=new Xe(zn,vi);js.position.set(-5,4,0),Qe.add(js),Qe.position.set(he.x,Ie,he.y),Qe.rotation.order="YXZ",Qe.rotation.y=ft,Qe.rotation.x=St,fe.current.set(ce.id,Qe),w.add(Qe);const $i=new ks(2,2.5,Ie,8),Xs=new fn({color:"#475569",roughness:.6,metalness:.3}),ar=new Xe($i,Xs);if(ar.position.set(he.x,Ie/2,he.y),ar.castShadow=!0,w.add(ar),Ve.visible){const Ul=Ve.showAll!==!1||ye.id===Be,xi=(Ve.mode||"volume")==="volume";if(Ul){const Ys=2*Math.atan(Math.tan(un.degToRad(Ue)/2)/1.33),Nt=2*Math.tan(Ys/2)*Te,Vt=Nt*1.33,X_=[0,0,0,Te,Nt/2,-Vt/2,Te,-Nt/2,-Vt/2,0,0,0,Te,-Nt/2,-Vt/2,Te,-Nt/2,Vt/2,0,0,0,Te,-Nt/2,Vt/2,Te,Nt/2,Vt/2,0,0,0,Te,Nt/2,Vt/2,Te,Nt/2,-Vt/2,Te,-Nt/2,Vt/2,Te,-Nt/2,-Vt/2,Te,Nt/2,-Vt/2,Te,Nt/2,Vt/2,Te,-Nt/2,Vt/2,Te,Nt/2,-Vt/2];if(xi){const Zn=new xn;Zn.setAttribute("position",new Bt(X_,3)),Zn.computeVertexNormals();const qi=new Bi({color:Ve.useCameraColor?ce.color:Ve.color,transparent:!0,opacity:Ve.opacity,side:li,depthWrite:!1}),lr=new Xe(Zn,qi);lr.position.set(he.x,Ie,he.y),lr.rotation.order="YXZ",lr.rotation.y=ft,lr.rotation.x=St,w.add(lr);const ds=[0,0,0,Te,Nt/2,-Vt/2,0,0,0,Te,-Nt/2,-Vt/2,0,0,0,Te,-Nt/2,Vt/2,0,0,0,Te,Nt/2,Vt/2,Te,Nt/2,-Vt/2,Te,Nt/2,Vt/2,Te,Nt/2,Vt/2,Te,-Nt/2,Vt/2,Te,-Nt/2,Vt/2,Te,-Nt/2,-Vt/2,Te,-Nt/2,-Vt/2,Te,Nt/2,-Vt/2],fs=new xn;fs.setAttribute("position",new Bt(ds,3));const Ni=new _h(fs,new ja({color:Ve.useCameraColor?ce.color:Ve.color,transparent:!0,opacity:Ve.edgeOpacity}));Ni.position.set(he.x,Ie,he.y),Ni.rotation.order="YXZ",Ni.rotation.y=ft,Ni.rotation.x=St,w.add(Ni)}const Yi=[],ca=un.degToRad(Ue)/2,Ol=2*Math.atan(Math.tan(ca)/1.33)/2;if([{h:ca,v:Ol},{h:-ca,v:Ol},{h:-ca,v:-Ol},{h:ca,v:-Ol}].forEach(Zn=>{const qi=new O(Math.cos(Zn.v)*Math.cos(Zn.h),Math.sin(Zn.v),Math.cos(Zn.v)*Math.sin(Zn.h)).normalize(),lr=new Tl(St,ft,0,"YXZ");if(qi.applyEuler(lr),qi.y<-.01){const ds=-Ie/qi.y,fs=he.x+qi.x*ds,Ni=he.y+qi.z*ds;Yi.push(new O(fs,.15,Ni))}}),Yi.length>=3){const Zn=new Ms;Zn.moveTo(Yi[0].x-he.x,-(Yi[0].z-he.y));for(let Rr=1;Rr<Yi.length;Rr++)Zn.lineTo(Yi[Rr].x-he.x,-(Yi[Rr].z-he.y));Zn.closePath();const qi=new Tu(Zn);qi.rotateX(-Math.PI/2);const lr=new Bi({color:ce.color,transparent:!0,opacity:xi?.1:.4,side:li}),ds=new Xe(qi,lr);ds.position.set(he.x,.12,he.y),w.add(ds);const fs=new xn,Ni=[];Yi.forEach((Rr,q_)=>{Ni.push(Rr.x,Rr.y,Rr.z);const Qu=Yi[(q_+1)%Yi.length];Ni.push(Qu.x,Qu.y,Qu.z)}),fs.setAttribute("position",new Bt(Ni,3));const $_=new ja({color:ce.color,transparent:!0,opacity:xi?.4:.8}),Y_=new _h(fs,$_);w.add(Y_)}}}const $s=yt(ce.label);$s&&($s.position.set(he.x,Ie+18,he.y),w.add($s))}if(ye.type==="image"){const ce=ye,he=new Si(ce.width,ce.height),Ie=new fn({color:16777215,roughness:.9});new Rc().load(ce.src,Ue=>{Ue.colorSpace=Kt,Ue.minFilter=Wn,Ie.map=Ue,Ie.needsUpdate=!0,F.render(N,_.camera)});const Ze=new Xe(he,Ie);Ze.rotation.x=-Math.PI/2,Ze.position.set(ce.x,.25,ce.y),Ze.rotation.z=un.degToRad(ce.rotation),Ze.userData.itemId=ce.id,fe.current.set(ce.id,Ze),w.add(Ze)}if(ye.type==="label"){const ce=ye,he=yt(ce.text);he&&(he.position.set(ce.x,8,ce.y),he.userData.itemId=ce.id,fe.current.set(ce.id,he),w.add(he))}}),_.target.set(v.width/2,0,v.height/2),_.orbit&&(_.orbit.distance=Math.max(v.width,v.height)*.85),_.orbit){const{azimuth:ye,polar:je,distance:ce}=_.orbit,he=_.target.x+Math.cos(ye)*Math.cos(je)*ce,Ie=_.target.z+Math.sin(ye)*Math.cos(je)*ce,Ze=_.target.y+Math.sin(je)*ce;_.camera.position.set(he,Ze,Ie),_.camera.lookAt(_.target)}F.render(N,_.camera),ge.current=[...t]},oa=()=>{const _=H.current;if(!_)return;const w=_.renderer.domElement.toDataURL("image/png"),N=new Date().toLocaleString();Je(F=>[{id:xo(),dataUrl:w,createdAt:N},...F])},mn=(_,w)=>{const N=document.createElement("a");N.href=_,N.download=w,document.body.appendChild(N),N.click(),document.body.removeChild(N)},or=()=>{const _=H.current;if(!_)return;const w=_.renderer.domElement.toDataURL("image/png");mn(w,"security_plan_3d.png")},aa=()=>{const _=H.current;if(_){if(_.zoom=1,_.target.set(v.width/2,0,v.height/2),_.orbit){_.orbit.azimuth=Math.PI/4,_.orbit.polar=Math.PI/4,_.orbit.distance=Math.max(v.width,v.height)*.9;const{azimuth:w,polar:N,distance:F}=_.orbit,D=_.target.x+Math.cos(w)*Math.cos(N)*F,J=_.target.z+Math.sin(w)*Math.cos(N)*F,V=_.target.y+Math.sin(N)*F;_.camera.position.set(D,V,J)}_.camera.zoom=_.zoom,_.camera.updateProjectionMatrix(),_.camera.lookAt(_.target),_.renderer.render(_.scene,_.camera)}};De.useEffect(()=>{const _=N=>{var D,J,V,Q;const F=N.target;if(!(F&&(F.tagName==="INPUT"||F.tagName==="TEXTAREA"))){if(N.key===" "&&(Oe(!0),st.current=!0),(N.key==="Delete"||N.key==="Backspace")&&Be&&(N.preventDefault(),W(Be),setTimeout(()=>f(),50)),N.ctrlKey){const me=N.key.toLowerCase();if(me==="z"&&(N.preventDefault(),N.shiftKey?p():h()),me==="y"&&(N.preventDefault(),p()),me==="s"&&(N.preventDefault(),jt()),me==="g"&&(N.preventDefault(),P(se=>!se)),me==="c"){if(((D=document.activeElement)==null?void 0:D.tagName)==="INPUT"||((J=document.activeElement)==null?void 0:J.tagName)==="TEXTAREA")return;if(Be){const se=t.find(Me=>Me.id===Be);se&&(i(se),N.preventDefault())}}if(me==="v"){if(((V=document.activeElement)==null?void 0:V.tagName)==="INPUT"||((Q=document.activeElement)==null?void 0:Q.tagName)==="TEXTAREA")return;const se=r.current;if(se){const Me={...se,id:xo(),x:se.x+20,y:se.y+20};e(Le=>[...Le,Me]),U(Me.id),setTimeout(()=>f(),50),N.preventDefault()}}}N.key==="Escape"&&(U(null),$e("select"),ze(!1))}};window.addEventListener("keydown",_);const w=N=>{N.key===" "&&(Oe(!1),st.current=!1)};return window.addEventListener("keyup",w),()=>{window.removeEventListener("keydown",_),window.removeEventListener("keyup",w)}},[t,Be,jt]),De.useEffect(()=>{if(!H.current)return;const{scene:_,renderer:w,camera:N}=H.current;if(Ye)new Rc().load(Ye,F=>{if(F.colorSpace=Kt,at==="panorama"?F.mapping=xu:F.mapping=yp,_.background=F,at==="panorama")_.environment=F;else{const D=new Ga(w);_.environment=D.fromScene(new ff).texture,D.dispose()}w.render(_,N)});else{_.background=new Et("#09090b");const F=new Ga(w);_.environment=F.fromScene(new ff).texture,F.dispose(),w.render(_,N)}},[Ye,at]);const Tn=De.useRef({isDragging:!1,itemId:null,dragOffset:null}),Cr=De.useRef(t),Nl=De.useRef(nt),la=De.useRef(Be);De.useEffect(()=>{Cr.current=t},[t]),De.useEffect(()=>{Nl.current=nt},[nt]),De.useEffect(()=>{la.current=Be},[Be]),De.useEffect(()=>{var F,D;const _=(F=H.current)==null?void 0:F.scene,w=fe.current;if(!_||!w)return;const N=(J,V,Q)=>{const me=J.getObjectByName("height-handle");if(me&&J.remove(me),J.traverse(se=>{se instanceof Xe&&se.material&&(Array.isArray(se.material)?se.material:[se.material]).forEach(Le=>{"emissive"in Le&&(se.userData.originalEmissive||(se.userData.originalEmissive=Le.emissive.clone()),V?(Le.emissive.setHex(4474111),Le.emissiveIntensity=.5):se.userData.originalEmissive?(Le.emissive.copy(se.userData.originalEmissive),Le.emissiveIntensity=1):Le.emissive.setHex(0))})}),V){const se=t.find(Me=>Me.id===Q);if(se&&se.type==="building"){const Le=se.wallHeight??60,qe=new $u(5,15,8),Re=new Bi({color:1096065,depthTest:!1,transparent:!0,opacity:.9,toneMapped:!1}),ye=new Xe(qe,Re);ye.name="height-handle",ye.position.set(0,0,Le+10),ye.rotation.x=Math.PI/2,J.add(ye)}}};w.forEach((J,V)=>{N(J,V===Be,V)}),(D=H.current)==null||D.renderer.render(H.current.scene,H.current.camera)},[Be,t]),De.useEffect(()=>{if(!E.current||H.current)return;const _=E.current,w=new jc({antialias:!0,preserveDrawingBuffer:!0,alpha:!0,powerPreference:"high-performance"});w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.outputColorSpace=Kt,w.shadowMap.enabled=!0,w.shadowMap.type=Kx,w.toneMapping=Qx,w.toneMappingExposure=1,_.appendChild(w.domElement);const N=new Xc;N.background=new Et("#09090b"),N.fog=new Wa("#09090b",200,2e3);const F=new Ap(-500,500,500,-500,.1,6e3),D=new jr;N.add(D);const J=new CA,V=new df(16777215,.6);N.add(V);const Q=new uf(16777215,.8);Q.position.set(50,100,50),Q.castShadow=!0,Q.shadow.mapSize.width=2048,Q.shadow.mapSize.height=2048,N.add(Q);const me={azimuth:Math.PI/5,polar:Math.PI/5,distance:Math.max(v.width,v.height)*.8},se={scene:N,camera:F,renderer:w,group:D,raycaster:J,target:new O(v.width/2,0,v.height/2),zoom:1,size:{width:1,height:1},orbit:me};H.current=se;const Me=()=>{const{width:he,height:Ie}=_.getBoundingClientRect();se.size={width:he,height:Ie},w.setSize(he,Ie);const Ze=he/Ie,Ue=Math.max(v.width,v.height)*.7;F.left=-Ue*Ze,F.right=Ue*Ze,F.top=Ue,F.bottom=-Ue,F.zoom=se.zoom,F.updateProjectionMatrix(),w.render(N,F)},Le=()=>{const{azimuth:he,polar:Ie,distance:Ze}=me,Ue=se.target.x+Math.cos(he)*Math.cos(Ie)*Ze,Te=se.target.z+Math.sin(he)*Math.cos(Ie)*Ze,ft=se.target.y+Math.sin(Ie)*Ze;F.position.set(Ue,ft,Te),F.lookAt(se.target),w.render(N,F)},qe=he=>{const Ie=w.domElement.getBoundingClientRect();return{x:(he.clientX-Ie.left)/Ie.width*2-1,y:-((he.clientY-Ie.top)/Ie.height)*2+1}},Re=he=>{J.setFromCamera(new Se(he.x,he.y),F);const Ie=new kr(new O(0,1,0),0),Ze=new O;return J.ray.intersectPlane(Ie,Ze)?{x:Ze.x,z:Ze.z}:null},ye=he=>{var Ze;J.setFromCamera(new Se(he.x,he.y),F);const Ie=J.intersectObjects(D.children,!0);for(const Ue of Ie){let Te=Ue.object;for(;Te;){if((Ze=Te.userData)!=null&&Ze.itemId)return Te.userData.itemId;Te=Te.parent}}return null},je=he=>{const Ie=qe(he),Ze=Nl.current;if(la.current,he.button===2&&!st.current){he.preventDefault();const Ue={x:he.clientX,y:he.clientY},Te=St=>{const Qe=St.clientX-Ue.x,Ke=St.clientY-Ue.y;Ue.x=St.clientX,Ue.y=St.clientY,me.azimuth+=Qe*.005,me.polar=Kn(me.polar+Ke*.005,.1,Math.PI/2.1),Le()},ft=()=>{window.removeEventListener("pointermove",Te),window.removeEventListener("pointerup",ft)};window.addEventListener("pointermove",Te),window.addEventListener("pointerup",ft);return}if(he.button===1||st.current){he.preventDefault();const Ue={x:he.clientX,y:he.clientY},Te=St=>{const Qe=St.clientX-Ue.x,Ke=St.clientY-Ue.y;Ue.x=St.clientX,Ue.y=St.clientY;const vt=Math.max(v.width,v.height)*.7/F.zoom/400,ct=new O;F.getWorldDirection(new O),ct.setFromMatrixColumn(F.matrixWorld,0),ct.y=0,ct.normalize();const it=new O;F.getWorldDirection(it),it.y=0,it.normalize(),se.target.x+=-ct.x*Qe*vt+it.x*Ke*vt,se.target.z+=-ct.z*Qe*vt+it.z*Ke*vt,Le()},ft=()=>{window.removeEventListener("pointermove",Te),window.removeEventListener("pointerup",ft)};window.addEventListener("pointermove",Te),window.addEventListener("pointerup",ft);return}if(he.button===0){if(he.preventDefault(),Ze!=="select"){const Te=Re(Ie);if(Te){const ft=Math.round(Te.x/S)*S,St=Math.round(Te.z/S)*S,Qe={id:xo(),x:ft,y:St,rotation:0};let Ke=null;switch(Ze){case"add-camera":Ke={...Qe,type:"camera",rotation:45,label:"Camera",description:"",fov:70,hFov:70,vFov:45,pitch:-15,height:60,aspect:16/9,mount:{type:"free",edgeT:.5,height:60},range:150,color:An.camera[0],labelOffset:{x:0,y:30},connectorDashSize:3};break;case"add-building":Ke={...Qe,type:"building",width:100,height:80,wallHeight:60,label:"Building",color:An.building[0],points:Lc(100,80)};break;case"add-tree":Ke={...Qe,type:"tree",radius:25,color:An.tree[0]};break;case"add-parking":Ke={...Qe,type:"parking",width:30,height:50,color:An.parking[0]};break;case"add-label":Ke={...Qe,type:"label",text:"Label",fontSize:14,color:An.label[0]};break}Ke&&(e(vt=>[...vt,Ke]),U(Ke.id),$e("select"),setTimeout(()=>f(),50))}return}const Ue=ye(Ie);if(Ue){U(Ue);const Te=Cr.current.find(it=>it.id===Ue);let ft=!1;J.setFromCamera(new Se(Ie.x,Ie.y),F);const Qe=J.intersectObjects(D.children,!0).find(it=>{let pt=it.object;for(;pt;){if(pt.userData.itemId===Ue)return!0;pt=pt.parent}return!1});Qe&&Qe.object.name==="height-handle"&&(ft=!0);const Ke=Re(Ie);Ke&&Te&&(Tn.current={isDragging:!0,itemId:Ue,interactionType:ft?"resize-height":"move",startHeight:Te.wallHeight??60,startMouseY:he.clientY,dragOffset:{x:Te.x-Ke.x,z:Te.y-Ke.z}});const vt=it=>{var $s,Ul;const pt=Tn.current;if(!pt.isDragging||!pt.itemId)return;if(pt.interactionType==="resize-height"){const xi=(pt.startMouseY||0)-it.clientY,_i=pt.startHeight||60,Ys=Math.max(10,_i+xi);pt.currentHeight=Ys;const Nt=fe.current.get(pt.itemId);Nt&&(Nt.scale.y=Ys/_i,se.renderer.render(se.scene,se.camera));return}const gi=qe(it),zn=Re(gi);if(!zn||!pt.dragOffset)return;const vi=zn.x+pt.dragOffset.x,js=zn.z+pt.dragOffset.z,$i=Math.round(vi/S)*S,Xs=Math.round(js/S)*S,ar=fe.current.get(pt.itemId);if(ar){const xi=($s=Cr.current.find(_i=>_i.id===pt.itemId))==null?void 0:$s.type;if(xi==="camera"){const _i=Cr.current.find(Nt=>Nt.id===pt.itemId),Ys=((Ul=_i==null?void 0:_i.mount)==null?void 0:Ul.height)??(_i==null?void 0:_i.height)??10;ar.position.set($i,Ys,Xs)}else xi==="tree"||xi==="parking"||xi==="building"?ar.position.set($i,0,Xs):xi==="image"?ar.position.set($i,.25,Xs):xi==="label"&&ar.position.set($i,8,Xs);se.renderer.render(se.scene,se.camera)}},ct=()=>{const it=Tn.current;if(it.isDragging&&it.itemId){if(it.interactionType==="resize-height"&&it.currentHeight!==void 0)Tt(it.itemId,{wallHeight:it.currentHeight}),f();else if(it.interactionType!=="resize-height"){const pt=fe.current.get(it.itemId);if(pt){const gi=pt.position.x,zn=pt.position.z,vi=it.itemId;e(js=>js.map($i=>$i.id===vi?{...$i,x:gi,y:zn}:$i)),setTimeout(()=>f(),50)}}}Tn.current={isDragging:!1,itemId:null,dragOffset:null,interactionType:void 0,currentHeight:void 0},window.removeEventListener("pointermove",vt),window.removeEventListener("pointerup",ct)};window.addEventListener("pointermove",vt),window.addEventListener("pointerup",ct)}else{U(null);const Te={x:he.clientX,y:he.clientY},ft=Qe=>{const Ke=Qe.clientX-Te.x,vt=Qe.clientY-Te.y;Te.x=Qe.clientX,Te.y=Qe.clientY;const ct=Math.max(v.width,v.height)*.7/F.zoom/400,it=new O;F.getWorldDirection(new O),it.setFromMatrixColumn(F.matrixWorld,0),it.y=0,it.normalize();const pt=new O;F.getWorldDirection(pt),pt.y=0,pt.normalize(),se.target.x+=-it.x*Ke*ct+pt.x*vt*ct,se.target.z+=-it.z*Ke*ct+pt.z*vt*ct,Le()},St=()=>{window.removeEventListener("pointermove",ft),window.removeEventListener("pointerup",St)};window.addEventListener("pointermove",ft),window.addEventListener("pointerup",St)}}},ce=he=>{he.preventDefault();const Ie=Kn(se.zoom*(he.deltaY<0?1.1:.9),.4,3.5);se.zoom=Ie,F.zoom=se.zoom,F.updateProjectionMatrix(),Le()};return w.domElement.addEventListener("pointerdown",je),w.domElement.addEventListener("wheel",ce,{passive:!1}),w.domElement.addEventListener("contextmenu",he=>he.preventDefault()),Le(),Me(),window.addEventListener("resize",Me),()=>{w.domElement.removeEventListener("pointerdown",je),w.domElement.removeEventListener("wheel",ce),window.removeEventListener("resize",Me),w.dispose(),_.removeChild(w.domElement),H.current=null,fe.current.clear(),ge.current=[]}},[v.height,v.width,I]),De.useEffect(()=>{I==="iso3d"&&us()},[t,g,m,v,S,A,I,Ve,Ye,at,Be]),De.useEffect(()=>{I!=="plan"&&ze(!1)},[I]),De.useEffect(()=>{if(g){const _=new Image;_.src=g,_.onload=()=>{z.current=_}}else z.current=null},[g]),De.useEffect(()=>{var St;if(!rt||!be.current||!Be)return;const _=t.find(Qe=>Qe.id===Be),w=(_==null?void 0:_.type)==="camera"?_:null;if(!w)return;const N=be.current,F=N.width,D=N.height,J=Wt(w),V=((St=w.mount)==null?void 0:St.height)??w.height??10,Q=w.hFov??w.fov,me=w.pitch??-15,se=w.range,Me=un.degToRad(w.rotation),Le=F/D,qe=2*Math.atan(Math.tan(un.degToRad(Q)/2)/Le),Re=un.radToDeg(qe),ye=new Xc;ye.background=new Et("#09090b"),ye.fog=new Wa("#09090b",se*.3,se*1.2);const je=new Qn(Re,Le,1,se*2);je.position.set(J.x,V,J.y);const ce=un.degToRad(me),he=new O(J.x+Math.cos(Me)*100,V+Math.tan(ce)*100,J.y+Math.sin(Me)*100);je.lookAt(he),ye.add(new df(16777215,.5));const Ie=new uf(16777215,.7);Ie.position.set(100,200,50),ye.add(Ie);const Ze=new Xe(new Si(v.width*2,v.height*2),new fn({color:"#6B8E23",roughness:.9}));if(Ze.rotation.x=-Math.PI/2,Ze.position.set(v.width/2,0,v.height/2),ye.add(Ze),z.current){const Qe=new rf(z.current);Qe.colorSpace=Kt;const Ke=new Xe(new Si(m.width,m.height),new Bi({map:Qe,transparent:!0,opacity:m.opacity}));Ke.rotation.x=-Math.PI/2,Ke.position.set(m.x+m.width/2,.1,m.y+m.height/2),ye.add(Ke)}t.forEach(Qe=>{if(Qe.type==="building"){const Ke=Qe,vt=Ee(Ke),ct=new Ms(vt.map(gi=>new Se(gi.x,-gi.y))),it=new Ya(ct,{depth:60,bevelEnabled:!1});it.rotateX(-Math.PI/2);const pt=new Xe(it,new fn({color:Ke.color,side:li}));pt.position.set(Ke.x,0,Ke.y),pt.rotation.y=-un.degToRad(Ke.rotation),ye.add(pt)}Qe.type==="tree"&&ye.add(vf(Qe)),Qe.type==="parking"&&ye.add(gf(Qe))});const Ue=new jc({canvas:N,antialias:!0});Ue.setSize(F,D);const Te=new Ga(Ue);ye.environment=Te.fromScene(new ff).texture,Ue.render(ye,je),Ye&&new Rc().load(Ye,Qe=>{ye.background=Qe,Ue.render(ye,je)});const ft=N.getContext("2d");return ft&&(ft.fillStyle="rgba(0,0,0,0.7)",ft.fillRect(0,0,F,26),ft.fillStyle="#fff",ft.font="bold 11px sans-serif",ft.fillText(`📷 ${w.label}`,8,11),ft.font="10px sans-serif",ft.fillStyle="#94a3b8",ft.fillText(`FOV: ${Q.toFixed(0)}°×${Re.toFixed(0)}° | Pitch: ${me}° | Range: ${se}`,8,23),ft.fillStyle="#ef4444",ft.beginPath(),ft.arc(F-12,13,4,0,Math.PI*2),ft.fill(),ft.fillStyle="#fff",ft.font="9px sans-serif",ft.fillText("LIVE",F-42,16)),()=>{Te.dispose(),Ue.dispose()}},[Be,t,rt,m,v,Ye]);const Il=_=>{if(!_e.current)return{x:0,y:0};const w=_e.current.getScreenCTM();if(!w)return{x:0,y:0};const N=(_.clientX-w.e)/w.a,F=(_.clientY-w.f)/w.d;return{x:(N-B.x)/q,y:(F-B.y)/q}},ri=(_,w,N="move",F)=>{if(nt!=="select"||I==="iso3d")return;_.stopPropagation();const D=t.find(me=>me.id===w);if(!D)return;U(w);const J=Il(_);if(N==="move"&&Be===w&&D.type==="building"){const se=Ht(D);for(let Me=0;Me<se.length;Me++){const Le=se[Me],qe=se[(Me+1)%se.length],Re={x:qe.x-Le.x,y:qe.y-Le.y},ye={x:J.x-Le.x,y:J.y-Le.y},je=Re.x*Re.x+Re.y*Re.y||1,ce=Math.max(0,Math.min(1,(ye.x*Re.x+ye.y*Re.y)/je)),he={x:Le.x+Re.x*ce,y:Le.y+Re.y*ce};if(Math.sqrt((J.x-he.x)**2+(J.y-he.y)**2)<8){Pl(w,he),setTimeout(()=>f(),50);return}}}const V=D.type==="camera"?Wt(D):{x:D.x,y:D.y};let Q={...D};if(N==="fov"&&D.type==="camera"){const me=J.x-V.x,se=J.y-V.y,Me=Math.atan2(se,me)*180/Math.PI,Le=D.hFov??D.fov,qe=D.rotation+(F==="left"?-Le/2:Le/2);Q={...D,fovHandleOffset:mf(Me-qe)}}le({type:N,itemId:w,startMouse:J,startVal:Q,variant:F,snap:k&&!_.altKey})},B_=_=>{var D,J;if(nt==="add-camera"&&I==="plan"){const V=Il(_),Q=Sn(V);Q&&Q.distance<100?xt({buildingId:Q.buildingId,edgeIndex:Q.edgeIndex,edgeT:Q.edgeT,point:Q.point,rotation:Q.rotation}):xt(null)}else Rt&&xt(null);if(pe){const V=_.clientX-de.x,Q=_.clientY-de.y;Y({x:de.panX+V,y:de.panY+Q});return}if(!oe.itemId||!_e.current)return;const w=Il(_),N=t.find(V=>V.id===oe.itemId);if(!N)return;const F=N.type==="camera"?Wt(N):{x:N.x,y:N.y};if(oe.type==="move"){const V=w.x-oe.startMouse.x,Q=w.y-oe.startMouse.y,me=oe.startVal.x+V,se=oe.startVal.y+Q;if(N.type==="camera"&&((D=N.mount)==null?void 0:D.type)==="building"&&N.mount.buildingId){const Me=It(N.mount.buildingId);if(Me){const Le=Ht(Me);if(Le.length>=2){const qe=Kn(N.mount.edgeIndex??0,0,Le.length-1),Re=(qe+1)%Le.length,ye=Le[qe],je=Le[Re],ce={x:je.x-ye.x,y:je.y-ye.y},he={x:me-ye.x,y:se-ye.y},Ie=ce.x*ce.x+ce.y*ce.y||1;let Ze=(he.x*ce.x+he.y*ce.y)/Ie;Ze=Kn(Ze,0,1);const Ue={x:ye.x+ce.x*Ze,y:ye.y+ce.y*Ze};Tt(oe.itemId,{x:Ue.x,y:Ue.y,mount:{...N.mount,edgeT:Ze}});return}}}Tt(oe.itemId,{x:Ae(me,oe.snap),y:Ae(se,oe.snap)})}else if(oe.type==="move-label"&&N.type==="camera"){const V=w.x-oe.startMouse.x,Q=w.y-oe.startMouse.y,me=oe.startVal.labelOffset||{x:0,y:30};Tt(oe.itemId,{labelOffset:{x:me.x+V,y:me.y+Q}})}else if(oe.type==="rotate"){const V=w.x-F.x,Q=w.y-F.y,me=Math.atan2(Q,V)*180/Math.PI;Tt(oe.itemId,{rotation:me})}else if(oe.type==="fov"&&N.type==="camera"){const V=w.x-F.x,Q=w.y-F.y,me=Math.atan2(Q,V)*180/Math.PI,se=((J=oe.startVal)==null?void 0:J.fovHandleOffset)??0,Me=mf(me-se),Le=mf(Me-N.rotation),qe=oe.variant==="left"?-Le:Le;if(qe<=0)return;const Re=Kn(qe*2,10,180);Tt(oe.itemId,{fov:Re,hFov:Re})}else if(oe.type==="range"&&N.type==="camera"){const V=w.x-F.x,Q=w.y-F.y,me=Math.sqrt(V*V+Q*Q);Tt(oe.itemId,{range:Math.max(me,50)})}else if(oe.type==="vertex"&&N.type==="building"){const V=Ut(w,N),Q=Ee(N),me=typeof oe.variant=="string"?parseInt(oe.variant,10):Number(oe.variant);if(!Number.isNaN(me)&&Q[me]){const se={x:Ae(V.x,oe.snap),y:Ae(V.y,oe.snap)},Me=Q.map((Le,qe)=>qe===me?se:Le);Tt(oe.itemId,{points:Me})}}},H_=()=>{oe.type&&f(),te(!1),le({type:null,itemId:null,startMouse:{x:0,y:0},startVal:null,snap:!1})};De.useEffect(()=>{wh.enabled=!0,f()},[]);const V_=_=>{if(I!=="iso3d"&&!pe){if(Ce&&Be){const w=t.find(N=>N.id===Be);if(w&&w.type==="building"){const N=Il(_);Pl(Be,N),ze(!1);return}}(_.target===_e.current||_.target.tagName==="image"||_.target.id==="grid-bg")&&(nt!=="select"?mi(_,nt):U(null))}},G_=_=>{(_.button===1||_.button===2||He||_.button===0&&nt==="select")&&(_.preventDefault(),te(!0),Ne({x:_.clientX,y:_.clientY,panX:B.x,panY:B.y}))},W_=_=>{if(_.preventDefault(),!_e.current)return;const w=_e.current.getScreenCTM();if(!w)return;const N=(_.clientX-w.e)/w.a,F=(_.clientY-w.f)/w.d,D=(N-B.x)/q,J=(F-B.y)/q,V=Kn(q*(_.deltaY>0?.9:1.1),.3,3.5),Q=N-D*V,me=F-J*V;ue(V),Y({x:Q,y:me})},xe=t.find(_=>_.id===Be),Dt=(xe==null?void 0:xe.type)==="camera"?xe:null,Xi=(Dt==null?void 0:Dt.aspect)??16/9,Gs=Dt?Dt.hFov??Dt.fov:70,Ku=Dt?Dt.vFov??Ta(Gs,Xi):45,Up=Dt?_C(Gs,Ku):90,Dl=t.filter(_=>_.type==="building"),Ju=((kp=Dt==null?void 0:Dt.mount)==null?void 0:kp.type)??"free",Ws=(zp=Dt==null?void 0:Dt.mount)!=null&&zp.buildingId?It(Dt.mount.buildingId):Dl[0],j_=Ws?Ee(Ws).length:0,Op=((Bp=Dt==null?void 0:Dt.mount)==null?void 0:Bp.edgeIndex)??0,Fp=((Hp=Dt==null?void 0:Dt.mount)==null?void 0:Hp.edgeT)??.5;return M.jsxs("div",{className:"relative h-screen bg-zinc-950 font-sans text-slate-200 overflow-hidden w-full selection:bg-indigo-500/30",children:[$&&M.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",children:M.jsxs("div",{className:"bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden text-slate-200",children:[M.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-white/10",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-400",children:"Export"}),M.jsx("h2",{className:"text-lg font-semibold text-slate-200",children:"Export Plan"})]}),M.jsx("button",{onClick:()=>ie(!1),className:"p-2 text-slate-400 hover:text-slate-600",children:M.jsx(hf,{className:"w-5 h-5"})})]}),M.jsxs("div",{className:"px-5 py-4 space-y-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Title"}),M.jsx("input",{type:"text",value:T,onChange:_=>G(_.target.value),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:["Export List (",re.length," items)"]}),re.length>0&&M.jsx("button",{onClick:()=>bt([]),className:"text-xs text-red-500 hover:text-red-700",children:"Clear All"})]}),re.length===0?M.jsxs("div",{className:"bg-slate-50 rounded-lg p-4 text-center text-slate-400 text-sm",children:[M.jsx("p",{children:"No views added yet"}),M.jsx("p",{className:"text-xs mt-1",children:'Use "Add to Export" buttons while working'})]}):M.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-48 overflow-y-auto",children:re.map(_=>M.jsxs("div",{className:"relative group bg-zinc-800 rounded-lg overflow-hidden border border-white/5",children:[M.jsx("div",{className:"aspect-video w-full overflow-hidden",children:M.jsx("img",{src:_.dataUrl,alt:_.label,className:"w-full h-full object-cover"})}),M.jsxs("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2",children:[M.jsx("a",{href:_.dataUrl,download:`${_.label.replace(/[^a-z0-9]/gi,"_").toLowerCase()}.png`,className:"p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-lg",title:"Download Image",onClick:w=>w.stopPropagation(),children:M.jsx(I0,{className:"w-4 h-4"})}),M.jsx("button",{onClick:()=>bt(w=>w.filter(N=>N.id!==_.id)),className:"p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg",title:"Remove",children:M.jsx(hf,{className:"w-4 h-4"})})]}),M.jsx("div",{className:"p-2 bg-zinc-800 absolute bottom-0 inset-x-0",children:M.jsx("p",{className:"text-[10px] text-slate-300 truncate font-medium",children:_.label})})]},_.id))})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Scale"}),M.jsx("input",{type:"number",min:"1",max:"5",value:X.scale,onChange:_=>ne({...X,scale:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Padding"}),M.jsx("input",{type:"number",min:"0",max:"200",value:X.padding,onChange:_=>ne({...X,padding:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Include"}),M.jsx("div",{className:"flex flex-wrap gap-2",children:[{key:"includeGrid",label:"Grid"},{key:"includeLegend",label:"Legend"},{key:"includeTitle",label:"Title Block"}].map(_=>{const w=X[_.key];return M.jsx("button",{onClick:()=>ne({...X,[_.key]:!w}),className:`px-3 py-1 rounded-full text-xs font-semibold border ${w?"bg-emerald-100 border-emerald-200 text-emerald-700":"bg-white border-slate-200 text-slate-400"}`,children:_.label},_.key)})})]}),M.jsx("p",{className:"text-xs text-slate-400",children:'Tip: Add views using "Add to Export" buttons, then export a client report.'})]}),M.jsxs("div",{className:"px-5 py-4 border-t border-white/10 bg-slate-50 flex flex-wrap justify-end gap-2",children:[M.jsx("button",{onClick:()=>ie(!1),className:"px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-800",children:"Cancel"}),M.jsx("button",{onClick:()=>{Z(),ie(!1)},className:"px-4 py-2 text-sm font-semibold bg-slate-600 hover:bg-slate-700 text-white rounded-lg",children:"Plan Only"}),M.jsx("button",{onClick:()=>{gt(),ie(!1)},disabled:re.length===0,className:`px-3 py-2 text-sm font-semibold rounded-lg ${re.length===0?"bg-slate-200 text-slate-400 cursor-not-allowed":"bg-emerald-600 hover:bg-emerald-700 text-white"}`,children:"Export PNG"}),M.jsx("button",{onClick:()=>{_t(),ie(!1)},disabled:re.length===0,className:`px-3 py-2 text-sm font-semibold rounded-lg ${re.length===0?"bg-slate-200 text-slate-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 text-white"}`,children:"Export PDF"})]})]})}),Ce&&I==="plan"&&Be&&M.jsx("div",{className:"absolute left-1/2 bottom-10 -translate-x-1/2 rounded-full bg-emerald-600/90 px-4 py-2 text-xs font-semibold text-white shadow-xl z-50 backdrop-blur-md",children:"Click an edge to insert a vertex."}),M.jsxs("div",{className:"absolute left-4 top-4 bottom-4 w-14 flex flex-col items-center py-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 gap-3 ring-1 ring-white/5",children:[M.jsx("div",{className:"flex flex-col gap-2 w-full px-2",children:[{mode:"select",icon:qA,label:"Select"},{mode:"add-camera",icon:Pc,label:"Camera"},{mode:"add-building",icon:nC,label:"Building"},{mode:"add-tree",icon:sC,label:"Tree"},{mode:"add-parking",icon:UA,label:"Parking"},{mode:"add-label",icon:aC,label:"Label"}].map(_=>M.jsx("button",{onClick:()=>nt===_.mode?$e("select"):$e(_.mode),title:_.label,className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${nt===_.mode?"bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 scale-105":"text-slate-400 hover:text-white hover:bg-white/10"}`,children:M.jsx(_.icon,{className:"w-5 h-5"})},_.mode))}),M.jsx("div",{className:"w-8 h-px bg-white/10 my-1"}),M.jsx("div",{className:"flex flex-col gap-2 w-full px-2",children:M.jsx("button",{onClick:()=>j(I==="plan"?"iso3d":"plan"),className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${I==="iso3d"?"bg-indigo-600 text-white shadow-lg":"text-slate-400 hover:text-white hover:bg-white/10"}`,title:"Toggle 3D View",children:M.jsx(HA,{className:"w-5 h-5"})})}),M.jsxs("div",{className:"mt-auto flex flex-col gap-2 w-full px-2",children:[M.jsx("button",{onClick:h,className:"w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all",title:"Undo",children:M.jsx(cC,{className:"w-5 h-5"})}),M.jsx("button",{onClick:p,className:"w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all",title:"Redo",children:M.jsx(JA,{className:"w-5 h-5"})})]})]}),M.jsxs("div",{className:"absolute top-4 left-24 right-4 lg:right-[22rem] h-14 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-40 flex items-center px-4 justify-between ring-1 ring-white/5 transition-all duration-300",children:[M.jsxs("div",{className:"flex items-center gap-4",children:[M.jsxs("h1",{className:"text-lg font-bold text-slate-200 tracking-tight flex items-center gap-2",children:[M.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500",children:M.jsx(Pc,{className:"w-5 h-5"})}),T]}),M.jsx("div",{className:"h-6 w-px bg-white/10 mx-2"}),M.jsxs("div",{className:"flex items-center gap-1",children:[M.jsx("button",{onClick:()=>{var _;return(_=Fe.current)==null?void 0:_.click()},className:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors",title:"Load Project",children:M.jsx(kA,{className:"w-5 h-5"})}),M.jsx("button",{onClick:jt,className:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors",title:"Save Project",children:M.jsx(eC,{className:"w-5 h-5"})})]})]}),M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("input",{type:"file",ref:ae,className:"hidden",accept:"image/*",onChange:ln}),M.jsx("input",{type:"file",ref:et,className:"hidden",accept:"image/*",onChange:Li}),M.jsx("input",{type:"file",ref:Fe,className:"hidden",accept:".json",onChange:kn}),M.jsx("input",{type:"file",ref:C,className:"hidden",accept:"image/*,.hdr",onChange:Mt}),M.jsxs("button",{onClick:()=>{var _;return(_=ae.current)==null?void 0:_.click()},className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",children:[M.jsx(dC,{className:"w-4 h-4"}),M.jsx("span",{children:"Map"})]}),M.jsxs("button",{onClick:()=>{var _;return(_=et.current)==null?void 0:_.click()},className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",children:[M.jsx(D0,{className:"w-4 h-4"}),M.jsx("span",{children:"Image"})]}),M.jsxs("button",{onClick:ut,className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",title:"Add Current View",children:[M.jsx(U0,{className:"w-4 h-4"}),M.jsx("span",{className:"hidden sm:inline",children:"Add View"})]}),M.jsxs("button",{onClick:()=>ie(!0),className:"flex items-center gap-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-lg shadow-indigo-500/20 transition-all",children:[M.jsx(I0,{className:"w-4 h-4"}),M.jsx("span",{children:"Export"})]})]})]}),M.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[M.jsx("div",{className:"w-full h-full relative overflow-auto bg-zinc-950 flex items-center justify-center pt-20 pl-24 pr-80 pb-6 custom-scrollbar",children:M.jsx("div",{className:"shadow-2xl bg-zinc-900 relative ring-1 ring-white/10 rounded-lg overflow-hidden",children:I==="plan"?M.jsxs("svg",{ref:_e,width:v.width,height:v.height,viewBox:`0 0 ${v.width} ${v.height}`,className:`bg-white block ${nt==="select"?"cursor-default":"cursor-crosshair"}`,onMouseMove:B_,onMouseUp:H_,onMouseDown:G_,onWheel:W_,onClick:V_,xmlns:"http://www.w3.org/2000/svg",children:[M.jsx("defs",{children:M.jsx("pattern",{id:"smallGrid",width:S,height:S,patternUnits:"userSpaceOnUse",children:M.jsx("path",{d:`M ${S} 0 L 0 0 0 ${S}`,fill:"none",stroke:"#333333",strokeWidth:"1"})})}),M.jsxs("g",{transform:`translate(${B.x}, ${B.y}) scale(${q})`,children:[A&&I==="plan"&&M.jsx("rect",{id:"grid-bg",width:"100%",height:"100%",fill:"url(#smallGrid)"}),g&&I==="plan"&&M.jsx("image",{href:g,x:m.x,y:m.y,width:m.width,height:m.height,preserveAspectRatio:"none",opacity:m.opacity,className:"pointer-events-none"}),t.map(_=>{var N,F;const w=Be===_.id;if(_.type==="building"||_.type==="parking"){const D=_,J=_.type==="parking";if(!J){const V=_,Q=Ee(V);return M.jsxs("g",{transform:`translate(${V.x}, ${V.y}) rotate(${V.rotation})`,onMouseDown:me=>ri(me,V.id,"move"),onClick:me=>me.stopPropagation(),className:"cursor-move",opacity:oe.itemId===V.id&&oe.type==="move"?.8:1,children:[M.jsx("polygon",{points:Q.map(me=>`${me.x},${me.y}`).join(" "),fill:V.color,stroke:w?"#059669":"#334155",strokeWidth:w?3:1}),M.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",pointerEvents:"none",className:"font-bold select-none",children:V.label}),w&&Q.map((me,se)=>M.jsx("circle",{cx:me.x,cy:me.y,r:"5",fill:"#ffffff",stroke:"#059669",strokeWidth:"2",className:"cursor-pointer",onMouseDown:Me=>ri(Me,V.id,"vertex",String(se))},`${V.id}-vertex-${se}`))]},V.id)}return M.jsxs("g",{transform:`translate(${D.x}, ${D.y}) rotate(${D.rotation})`,onMouseDown:V=>ri(V,D.id,"move"),onClick:V=>{Ce||V.stopPropagation()},className:"cursor-move",opacity:oe.itemId===D.id&&oe.type==="move"?.8:1,style:{filter:w?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))":"none"},children:[M.jsx("rect",{x:-D.width/2,y:-D.height/2,width:D.width,height:D.height,fill:D.color,stroke:w?"#3b82f6":J?"#94a3b8":"#334155",strokeWidth:w?4:1,strokeDasharray:J?"4":"0"}),J&&M.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"#94a3b8",fontSize:"16",fontWeight:"bold",pointerEvents:"none",transform:"rotate(-90)",children:"P"}),!J&&M.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",pointerEvents:"none",className:"font-bold select-none",children:D.label})]},D.id)}if(_.type==="tree"){const D=_;return M.jsxs("g",{transform:`translate(${D.x}, ${D.y})`,onMouseDown:J=>ri(J,D.id,"move"),onClick:J=>J.stopPropagation(),className:"cursor-move",style:{filter:w?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))":"none"},children:[M.jsx("circle",{r:D.radius,fill:D.color,fillOpacity:"0.6",stroke:w?"#3b82f6":D.color,strokeWidth:w?3:0}),M.jsx("circle",{r:D.radius*.5,fill:"black",fillOpacity:"0.1"})]},D.id)}if(_.type==="label"){const D=_;return M.jsx("text",{x:D.x,y:D.y,fontSize:D.fontSize,fill:w?"#3b82f6":D.color,fontWeight:"bold",textAnchor:"middle",className:"cursor-move select-none",onMouseDown:J=>ri(J,D.id,"move"),onClick:J=>J.stopPropagation(),style:{textShadow:w?"0 0 8px rgba(59, 130, 246, 0.8)":"0px 1px 2px rgba(255,255,255,0.8)",stroke:w?"#3b82f6":"none",strokeWidth:w?1:0},children:D.text},D.id)}if(_.type==="image"){const D=_;return M.jsx("g",{transform:`translate(${D.x}, ${D.y}) rotate(${D.rotation})`,onMouseDown:J=>ri(J,D.id,"move"),onClick:J=>J.stopPropagation(),className:"cursor-move",children:M.jsx("image",{href:D.src,x:-D.width/2,y:-D.height/2,width:D.width,height:D.height,style:{outline:w?"3px solid #3b82f6":"none",filter:w?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))":"none"}})},D.id)}if(_.type==="camera"){const D=_,J=Wt(D),V=D.range,Q=D.hFov??D.fov,me=(D.rotation-Q/2)*(Math.PI/180),se=(D.rotation+Q/2)*(Math.PI/180),Me=V*Math.cos(me),Le=V*Math.sin(me),qe=V*Math.cos(se),Re=V*Math.sin(se),ye=40,je=D.rotation*(Math.PI/180),ce=ye*Math.cos(je),he=ye*Math.sin(je),Ie=((N=D.labelOffset)==null?void 0:N.x)??0,Ze=((F=D.labelOffset)==null?void 0:F.y)??30;D.connectorDashSize;const Ue=t.filter(ct=>ct.type==="building"),Te=$t(J,V,Q,D.rotation,Ue),ft=t.filter(ct=>ct.type==="building"||ct.type==="tree"),St=$t(J,V,Q,D.rotation,ft),Qe=ct=>{let it="M 0 0 ";return ct.forEach(pt=>{it+=`L ${pt.x} ${pt.y} `}),it+"Z"},Ke=Qe(Te),vt=Qe(St);return M.jsxs("g",{transform:`translate(${J.x}, ${J.y})`,onClick:ct=>ct.stopPropagation(),children:[M.jsxs("g",{onMouseDown:ct=>ri(ct,D.id,"move"),className:"cursor-move",style:{filter:w?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))":"none"},children:[M.jsxs("defs",{children:[M.jsxs("mask",{id:`mask-${D.id}`,children:[M.jsx("rect",{x:-V,y:-V,width:V*2,height:V*2,fill:"white"}),M.jsx("path",{d:vt,fill:"black"})]}),M.jsxs("radialGradient",{id:`grad-blue-${D.id}`,cx:"0",cy:"0",r:V,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"50%",stopColor:D.color,stopOpacity:"0.2"}),M.jsx("stop",{offset:"100%",stopColor:D.color,stopOpacity:"0"})]}),M.jsxs("radialGradient",{id:`grad-blue-stroke-${D.id}`,cx:"0",cy:"0",r:V,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"80%",stopColor:D.color,stopOpacity:"1"}),M.jsx("stop",{offset:"100%",stopColor:D.color,stopOpacity:"0"})]}),M.jsxs("radialGradient",{id:`grad-yellow-${D.id}`,cx:"0",cy:"0",r:V,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"50%",stopColor:"#fde047",stopOpacity:"0.3"}),M.jsx("stop",{offset:"100%",stopColor:"#fde047",stopOpacity:"0"})]}),M.jsxs("radialGradient",{id:`grad-yellow-stroke-${D.id}`,cx:"0",cy:"0",r:V,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"80%",stopColor:"#eab308",stopOpacity:"1"}),M.jsx("stop",{offset:"100%",stopColor:"#eab308",stopOpacity:"0"})]})]}),M.jsx("path",{d:Ke,fill:`url(#grad-yellow-${D.id})`,stroke:`url(#grad-yellow-stroke-${D.id})`,strokeWidth:"1",strokeDasharray:"4,4",pointerEvents:"none",mask:`url(#mask-${D.id})`}),M.jsx("path",{d:vt,fill:`url(#grad-blue-${D.id})`,stroke:`url(#grad-blue-stroke-${D.id})`,strokeWidth:"1",pointerEvents:"none"}),M.jsxs("g",{transform:`rotate(${D.rotation})`,children:[M.jsx("rect",{x:"-10",y:"-8",width:"20",height:"16",rx:"4",fill:w?"#3b82f6":"#1e293b"}),M.jsx("circle",{cx:"0",cy:"0",r:"4",fill:D.color}),M.jsx("rect",{x:"10",y:"-4",width:"6",height:"8",fill:"#475569"})]})]}),w&&M.jsxs(M.Fragment,{children:[M.jsx("line",{x1:"0",y1:"0",x2:ce,y2:he,stroke:"white",strokeWidth:"2",strokeDasharray:"3,3"}),M.jsx("circle",{cx:ce,cy:he,r:"7",fill:"#3b82f6",stroke:"white",strokeWidth:"2",className:"cursor-crosshair",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:ct=>ri(ct,D.id,"rotate")}),M.jsx("circle",{cx:Me,cy:Le,r:"6",fill:D.color,stroke:"white",strokeWidth:"2",className:"cursor-ew-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:ct=>ri(ct,D.id,"fov","left")}),M.jsx("circle",{cx:qe,cy:Re,r:"6",fill:D.color,stroke:"white",strokeWidth:"2",className:"cursor-ew-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:ct=>ri(ct,D.id,"fov","right")}),M.jsx("circle",{cx:V*Math.cos(je),cy:V*Math.sin(je),r:"6",fill:D.color,stroke:"white",strokeWidth:"2",className:"cursor-ns-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:ct=>ri(ct,D.id,"range")})]}),M.jsxs("g",{transform:`translate(${Ie}, ${Ze})`,onMouseDown:ct=>ri(ct,D.id,"move-label"),className:"cursor-move hover:opacity-80 transition-opacity",children:[(Math.abs(Ie)>10||Math.abs(Ze-30)>10)&&M.jsx("line",{x1:-Ie,y1:-Ze,x2:"0",y2:"0",stroke:"white",strokeWidth:"2",strokeDasharray:"6,4",style:{filter:"drop-shadow(0 0 2px rgba(0,0,0,0.8))"}}),M.jsx("rect",{x:"-50",y:"-10",width:"100",height:"20",rx:"4",fill:"rgba(255,255,255,0.9)",stroke:w?"#3b82f6":"transparent",strokeWidth:"1"}),M.jsx("text",{textAnchor:"middle",dy:"4",fontSize:"10",fill:"#334155",fontWeight:"bold",pointerEvents:"none",className:"select-none",children:D.label})]})]},D.id)}return null}),Rt&&nt==="add-camera"&&M.jsxs("g",{transform:`translate(${Rt.point.x}, ${Rt.point.y})`,className:"pointer-events-none",opacity:.6,children:[M.jsx("path",{d:(()=>{const N=(Rt.rotation-35)*(Math.PI/180),F=(Rt.rotation+70/2)*(Math.PI/180),D=100*Math.cos(N),J=100*Math.sin(N),V=100*Math.cos(F),Q=100*Math.sin(F);return`M 0 0 L ${D} ${J} A 100 100 0 0 1 ${V} ${Q} Z`})(),fill:"#3b82f6",fillOpacity:"0.2",stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"4,4"}),M.jsxs("g",{transform:`rotate(${Rt.rotation})`,children:[M.jsx("rect",{x:"-10",y:"-8",width:"20",height:"16",rx:"4",fill:"#3b82f6"}),M.jsx("circle",{cx:"0",cy:"0",r:"4",fill:"white"}),M.jsx("rect",{x:"10",y:"-4",width:"6",height:"8",fill:"#1e40af"})]}),M.jsx("text",{y:"-20",textAnchor:"middle",fill:"#3b82f6",fontSize:"11",fontWeight:"bold",className:"select-none",children:"Click to place"})]}),nt==="add-camera"&&t.filter(_=>_.type==="building").map(_=>{const w=_,N=Ht(w);return N.map((F,D)=>{const J=N[(D+1)%N.length],V=(Rt==null?void 0:Rt.buildingId)===w.id&&(Rt==null?void 0:Rt.edgeIndex)===D;return M.jsx("line",{x1:F.x,y1:F.y,x2:J.x,y2:J.y,stroke:V?"#3b82f6":"#94a3b8",strokeWidth:V?4:2,strokeDasharray:V?"0":"6,4",className:"pointer-events-none transition-all",opacity:V?1:.5},`edge-highlight-${w.id}-${D}`)})}),t.map(_=>{var w,N;if(_.type==="camera"){const F=_,D=Wt(F),J=((w=F.labelOffset)==null?void 0:w.x)??0,V=((N=F.labelOffset)==null?void 0:N.y)??30,Q=Be===F.id;return M.jsx("g",{transform:`translate(${D.x}, ${D.y})`,style:{pointerEvents:"none"},children:M.jsxs("g",{transform:`translate(${J}, ${V})`,onMouseDown:me=>{me.stopPropagation(),ri(me,F.id,"move-label")},className:"cursor-move hover:opacity-80 transition-opacity",style:{pointerEvents:"auto"},children:[(Math.abs(J)>10||Math.abs(V-30)>10)&&M.jsx("line",{x1:-J,y1:-V,x2:"0",y2:"0",stroke:"white",strokeWidth:"2",strokeDasharray:"6,4",style:{filter:"drop-shadow(0 0 2px rgba(0,0,0,0.8))"}}),M.jsx("rect",{x:"-50",y:"-10",width:"100",height:"20",rx:"4",fill:"rgba(255,255,255,0.9)",stroke:Q?"#3b82f6":"transparent",strokeWidth:"1"}),M.jsx("text",{textAnchor:"middle",dy:"4",fontSize:"10",fill:"#334155",fontWeight:"bold",pointerEvents:"none",className:"select-none",children:F.label})]})},`label-overlay-${F.id}`)}return null})]})]}):M.jsxs("div",{className:"relative flex-1",style:{minWidth:v.width,minHeight:v.height},children:[M.jsx("div",{ref:E,className:"absolute inset-0"}),M.jsxs("div",{className:"absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none",children:[M.jsx("div",{className:"rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-semibold text-slate-300 shadow border border-white/10 pointer-events-auto",children:"Drag to pan · Right-click to rotate · Scroll to zoom"}),M.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[M.jsxs("button",{onClick:()=>{var _;return(_=C.current)==null?void 0:_.click()},className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors flex items-center gap-1",children:[M.jsx(D0,{className:"w-3 h-3"}),"Set 3D BG"]}),M.jsx("button",{onClick:oa,className:"px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/20 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/30 shadow-sm transition-colors",children:"Take Snapshot"}),M.jsx("button",{onClick:or,className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"Export View"}),M.jsx("button",{onClick:()=>{var _;return bt([...re,{id:xo(),type:"3d",label:"3D View",dataUrl:((_=H.current)==null?void 0:_.renderer.domElement.toDataURL("image/png"))||""}])},className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"+ Add to Export"}),M.jsx("button",{onClick:aa,className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"Reset View"})]})]})]})})}),Dt&&rt&&M.jsxs("div",{className:"absolute bottom-4 right-96 w-80 bg-zinc-900/90 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/10 z-40 ring-1 ring-black/50",children:[M.jsxs("div",{className:"flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/5",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(Pc,{className:"w-4 h-4 text-emerald-400"}),M.jsxs("span",{className:"text-sm font-medium text-slate-200 truncate",children:[Dt.label," View"]})]}),M.jsx("button",{onClick:()=>mt(!1),className:"p-1 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors",children:M.jsx(hf,{className:"w-4 h-4"})})]}),M.jsx("canvas",{ref:be,width:320,height:180,className:"w-full"}),M.jsxs("div",{className:"px-3 py-2 bg-white/5 text-xs text-slate-400 flex items-center justify-between border-t border-white/5",children:[M.jsxs("div",{className:"flex gap-3",children:[M.jsxs("span",{children:["H-FOV: ",(Dt.hFov??Dt.fov).toFixed(0),"°"]}),M.jsxs("span",{children:["V-FOV: ",(Dt.vFov??45).toFixed(0),"°"]}),M.jsxs("span",{children:["Range: ",Dt.range]})]}),M.jsxs("button",{onClick:()=>ht(Dt),className:"px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded flex items-center gap-1",children:[M.jsx(U0,{className:"w-3 h-3"}),"Export"]})]})]}),Dt&&!rt&&M.jsxs("button",{onClick:()=>mt(!0),className:"absolute bottom-4 right-96 px-4 py-2 bg-slate-800 text-white rounded-lg shadow-lg hover:bg-slate-700 transition-colors z-40 flex items-center gap-2",children:[M.jsx(Pc,{className:"w-4 h-4"}),M.jsx("span",{className:"text-sm font-medium",children:"Show Camera View"})]}),M.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-80 bg-zinc-900/90 backdrop-blur-xl border-l border-white/10 overflow-y-auto hidden lg:block shadow-2xl z-40 custom-scrollbar",children:xe?M.jsxs("div",{className:"p-6 flex flex-col gap-6",children:[M.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[M.jsxs("h2",{className:"font-bold text-lg text-slate-200 capitalize",children:["Edit ",xe.type]}),M.jsx("button",{onClick:()=>W(xe.id),className:"text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors",children:M.jsx(O0,{className:"w-5 h-5"})})]}),xe.type!=="label"&&M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Rotation"}),M.jsxs("span",{children:[Math.round(xe.rotation),"deg"]})]}),M.jsx("input",{type:"range",min:"0",max:"360",value:xe.rotation,onChange:_=>Tt(xe.id,{rotation:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),(xe.type==="camera"||xe.type==="building"||xe.type==="image"||xe.type==="label")&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:xe.type==="label"?"Text Content":"Label"}),M.jsx("input",{type:"text",value:xe.type==="label"?xe.text:xe.label,onChange:_=>Tt(xe.id,xe.type==="label"?{text:_.target.value}:{label:_.target.value}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),xe.type==="label"&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Font Size"}),M.jsx("input",{type:"number",min:"8",max:"72",value:xe.fontSize,onChange:_=>Tt(xe.id,{fontSize:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),(xe.type==="building"||xe.type==="parking")&&M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),M.jsx("input",{type:"number",value:xe.width,onChange:_=>xe.type==="building"?ra(xe.id,parseInt(_.target.value),xe.height):Tt(xe.id,{width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),M.jsx("input",{type:"number",value:xe.height,onChange:_=>xe.type==="building"?ra(xe.id,xe.width,parseInt(_.target.value)):Tt(xe.id,{height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),xe.type==="building"&&M.jsxs("div",{className:"space-y-2 mt-4",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Wall Height"}),M.jsxs("span",{children:[xe.wallHeight??60," units"]})]}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx("input",{type:"range",min:"10",max:"300",value:xe.wallHeight??60,onChange:_=>Tt(xe.id,{wallHeight:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 self-center"}),M.jsx("input",{type:"number",value:xe.wallHeight??60,onChange:_=>Tt(xe.id,{wallHeight:parseInt(_.target.value)}),className:"w-16 bg-transparent border border-white/20 rounded-lg p-1 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none text-center"})]})]}),xe.type==="building"&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Building Shape"}),M.jsxs("div",{className:"flex flex-wrap gap-2",children:[M.jsx("button",{onClick:()=>Rl(xe.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Add Vertex"}),M.jsx("button",{onClick:()=>ze(!0),className:`px-3 py-1 rounded-full border text-xs ${Ce?"border-emerald-300 bg-emerald-50 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"}`,children:"Insert on Edge"}),M.jsx("button",{onClick:()=>qu(xe.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Remove Vertex"}),M.jsx("button",{onClick:()=>Zu(xe.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Reset Rectangle"})]}),M.jsx("p",{className:"text-xs text-slate-400",children:"Drag the green nodes in plan view to sculpt the footprint. Click “Insert on Edge” then click any edge."})]}),xe.type==="image"&&M.jsxs("div",{className:"space-y-4",children:[M.jsxs("button",{onClick:()=>Tt(xe.id,{aspectRatioLocked:!xe.aspectRatioLocked}),className:`flex items-center gap-2 text-sm font-medium w-full p-2 rounded border ${xe.aspectRatioLocked?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-slate-200 text-slate-400"}`,children:[xe.aspectRatioLocked?M.jsx(jA,{className:"w-4 h-4"}):M.jsx(GA,{className:"w-4 h-4"}),"Maintain Proportions"]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),M.jsx("input",{type:"number",value:Math.round(xe.width),onChange:_=>R(xe.id,parseInt(_.target.value),void 0),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),M.jsx("input",{type:"number",value:Math.round(xe.height),onChange:_=>R(xe.id,void 0,parseInt(_.target.value)),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Size Scale"}),M.jsx("input",{type:"range",min:"10",max:"600",value:Math.max(xe.width,xe.height),onChange:_=>{const w=parseInt(_.target.value);xe.width>=xe.height?R(xe.id,w,void 0):R(xe.id,void 0,w)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),xe.type==="tree"&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Canopy Size"}),M.jsx("input",{type:"range",min:"10",max:"100",value:xe.radius,onChange:_=>Tt(xe.id,{radius:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),xe.type==="camera"&&M.jsxs("div",{className:"space-y-5",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Horizontal FOV"}),M.jsxs("span",{children:[Math.round(Gs),"deg"]})]}),M.jsx("input",{type:"range",min:"10",max:"180",value:Gs,onChange:_=>{const w=parseInt(_.target.value),N=Ta(w,Xi);ji(xe.id,w,N,Xi)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Vertical FOV"}),M.jsxs("span",{children:[Math.round(Ku),"deg"]})]}),M.jsx("input",{type:"range",min:"10",max:"180",value:Ku,onChange:_=>{const w=parseInt(_.target.value),N=yC(w,Xi);ji(xe.id,N,w,Xi)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Diagonal FOV"}),M.jsxs("span",{children:[Math.round(Up),"deg"]})]}),M.jsx("input",{type:"range",min:"20",max:"180",value:Up,onChange:_=>{const w=parseInt(_.target.value),{h:N,v:F}=xC(w,Xi);ji(xe.id,N,F,Xi)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Aspect Ratio"}),M.jsxs("select",{value:Xi,onChange:_=>{const w=parseFloat(_.target.value),N=Ta(Gs,w);ji(xe.id,Gs,N,w)},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none",children:[M.jsx("option",{value:16/9,children:"16:9 (Widescreen)"}),M.jsx("option",{value:4/3,children:"4:3 (Standard)"}),M.jsx("option",{value:1,children:"1:1 (Square)"})]})]}),M.jsx("div",{className:"flex flex-wrap gap-2 text-xs",children:[{label:"Wide",value:120},{label:"Standard",value:80},{label:"Narrow",value:45}].map(_=>M.jsx("button",{onClick:()=>{const w=Ta(_.value,Xi);ji(xe.id,_.value,w,Xi)},className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50",children:_.label},_.label))}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Range"}),M.jsxs("span",{children:[Math.round(xe.range),"px"]})]}),M.jsx("input",{type:"range",min:"50",max:"800",value:xe.range,onChange:_=>Tt(xe.id,{range:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Pitch"}),M.jsxs("span",{children:[Math.round(xe.pitch??0),"deg"]})]}),M.jsx("input",{type:"range",min:"-60",max:"30",value:xe.pitch??0,onChange:_=>Tt(xe.id,{pitch:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Height"}),M.jsxs("span",{children:[Math.round(((Vp=xe.mount)==null?void 0:Vp.height)??xe.height??10),"ft"]})]}),M.jsx("input",{type:"range",min:"4",max:"40",value:((Gp=xe.mount)==null?void 0:Gp.height)??xe.height??10,onChange:_=>{var N;const w=parseInt(_.target.value);((N=xe.mount)==null?void 0:N.type)==="building"?Ar(xe.id,{height:w}):Tt(xe.id,{height:w})},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Mount"}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx("button",{onClick:()=>{var w;const _=Wt(xe);Tt(xe.id,{x:_.x,y:_.y,mount:{type:"free",height:((w=xe.mount)==null?void 0:w.height)??xe.height??10}})},className:`px-3 py-1 rounded-full text-xs font-semibold border ${Ju==="free"?"bg-emerald-50 border-emerald-200 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"}`,children:"Free"}),M.jsx("button",{disabled:!Dl.length,onClick:()=>Cl(xe.id),className:`px-3 py-1 rounded-full text-xs font-semibold border ${Ju==="building"?"bg-emerald-50 border-emerald-200 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"} ${Dl.length?"":"opacity-50 cursor-not-allowed"}`,children:"Building"})]})]}),Ju==="building"&&Ws&&M.jsxs("div",{className:"space-y-3",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Building"}),M.jsx("select",{value:Ws.id,onChange:_=>{var N;const w=_.target.value;Tt(xe.id,{mount:{type:"building",buildingId:w,edgeIndex:0,edgeT:.5,height:((N=xe.mount)==null?void 0:N.height)??xe.height??10}})},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none",children:Dl.map(_=>M.jsx("option",{value:_.id,children:_.label},_.id))})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Edge"}),M.jsxs("span",{children:["#",Op+1]})]}),M.jsx("input",{type:"range",min:"0",max:Math.max(j_-1,0),value:Op,onChange:_=>{const w=parseInt(_.target.value);Ar(xe.id,{edgeIndex:w,edgeT:.5,buildingId:Ws.id,type:"building"})},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Position Along Edge"}),M.jsxs("span",{children:[Math.round(Fp*100),"%"]})]}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:Fp,onChange:_=>Ar(xe.id,{edgeT:parseFloat(_.target.value),buildingId:Ws.id,type:"building"}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Description"}),M.jsx("textarea",{value:xe.description,onChange:_=>Tt(xe.id,{description:_.target.value}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none h-20"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Connector Dash Size"}),M.jsx("input",{type:"range",min:"1",max:"20",value:xe.connectorDashSize||3,onChange:_=>Tt(xe.id,{connectorDashSize:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),xe.type!=="image"&&An[xe.type]&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Color Code"}),M.jsx("div",{className:"flex flex-wrap gap-2",children:An[xe.type].map(_=>M.jsx("button",{onClick:()=>Tt(xe.id,{color:_}),className:`w-8 h-8 rounded-full border-2 transition-all ${xe.color===_?"border-slate-800 scale-110":"border-transparent hover:scale-105"}`,style:{backgroundColor:_}},_))})]})]}):M.jsxs("div",{className:"p-6 flex flex-col gap-6",children:[M.jsxs("div",{className:"flex items-center gap-2 border-b border-white/10 pb-4",children:[M.jsx($A,{className:"w-5 h-5 text-slate-400"}),M.jsx("h2",{className:"font-bold text-lg text-slate-200",children:"Project Settings"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Project Name"}),M.jsx("input",{type:"text",value:T,onChange:_=>G(_.target.value),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsx("div",{className:"grid grid-cols-2 gap-4",children:[{label:"Cameras",value:t.filter(_=>_.type==="camera").length},{label:"Buildings",value:t.filter(_=>_.type==="building").length},{label:"Trees",value:t.filter(_=>_.type==="tree").length},{label:"Parking",value:t.filter(_=>_.type==="parking").length}].map(_=>M.jsxs("div",{className:"rounded-lg border border-white/10 bg-white/5 p-3",children:[M.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-400",children:_.label}),M.jsx("p",{className:"text-lg font-semibold text-slate-200",children:_.value})]},_.label))}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"Canvas"}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),M.jsx("input",{type:"number",min:"400",max:"3000",value:v.width,onChange:_=>y({...v,width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),M.jsx("input",{type:"number",min:"300",max:"3000",value:v.height,onChange:_=>y({...v,height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Grid Size"}),M.jsxs("span",{children:[S,"px"]})]}),M.jsx("input",{type:"range",min:"10",max:"80",value:S,onChange:_=>L(parseInt(_.target.value)),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm",children:[M.jsx("span",{className:"text-slate-600",children:"Show Grid"}),M.jsx("button",{onClick:()=>P(_=>!_),className:`px-3 py-1 rounded-full text-xs font-semibold ${A?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-400"}`,children:A?"On":"Off"})]}),M.jsxs("div",{className:"flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm",children:[M.jsx("span",{className:"text-slate-600",children:"Snap to Grid"}),M.jsx("button",{onClick:()=>b(_=>!_),className:`px-3 py-1 rounded-full text-xs font-semibold ${k?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-400"}`,children:k?"On":"Off"})]}),M.jsx("button",{onClick:K,className:"w-full py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50",children:"Clear Canvas"})]}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"Background Map"}),M.jsx("p",{className:"text-xs text-slate-400",children:"Adjust the uploaded map to align with the grid."}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Opacity"}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:m.opacity,onChange:_=>x({...m,opacity:parseFloat(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Width"}),M.jsx("input",{type:"number",value:m.width,onChange:_=>x({...m,width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Height"}),M.jsx("input",{type:"number",value:m.height,onChange:_=>x({...m,height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Offset X"}),M.jsx("input",{type:"number",value:m.x,onChange:_=>x({...m,x:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Offset Y"}),M.jsx("input",{type:"number",value:m.y,onChange:_=>x({...m,y:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsx("button",{onClick:ee,className:"w-full py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50",children:"Fit Background to Canvas"})]}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"3D Visualization"}),M.jsxs("div",{className:"space-y-3 mb-4 p-3 bg-white/5 rounded-lg border border-white/10",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 block",children:"Environment Background"}),M.jsxs("div",{className:"flex gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10",children:[M.jsx("button",{onClick:()=>Pt("flat"),className:`flex-1 px-2 py-1 text-[10px] font-medium rounded transition-colors ${at==="flat"?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-300"}`,children:"Flat Image"}),M.jsx("button",{onClick:()=>Pt("panorama"),className:`flex-1 px-2 py-1 text-[10px] font-medium rounded transition-colors ${at==="panorama"?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-300"}`,children:"360° Panorama"})]}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx("button",{onClick:()=>{var _;return(_=C.current)==null?void 0:_.click()},className:"flex-1 py-1.5 px-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors",children:at==="panorama"?"Upload HDRI/Panorama":"Upload Background"}),Ye&&M.jsx("button",{onClick:()=>We(null),className:"py-1.5 px-3 rounded-md bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/10 text-xs transition-colors",title:"Clear Background",children:M.jsx(O0,{className:"w-4 h-4"})})]}),at==="panorama"&&M.jsxs("p",{className:"text-[10px] text-slate-500",children:["Upload a 360° equirectangular image (2:1 aspect ratio) for immersive backgrounds. Get free HDRIs from ",M.jsx("a",{href:"https://polyhaven.com/hdris",target:"_blank",rel:"noopener noreferrer",className:"text-indigo-400 hover:underline",children:"Poly Haven"})]})]}),M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400",children:"Show Vision Cones"}),M.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[M.jsx("input",{type:"checkbox",className:"sr-only peer",checked:Ve.visible,onChange:_=>ot({...Ve,visible:_.target.checked})}),M.jsx("div",{className:"w-9 h-5 bg-slate-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"})]})]}),Ve.visible&&M.jsxs("div",{className:"space-y-3 mt-2 pl-2 border-l border-white/5",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("label",{className:"text-xs text-slate-500",children:"Active Cam Only"}),M.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[M.jsx("input",{type:"checkbox",className:"sr-only peer",checked:Ve.showAll===!1,onChange:_=>ot({...Ve,showAll:!_.target.checked})}),M.jsx("div",{className:"w-7 h-4 bg-slate-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-indigo-600"})]})]}),M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("label",{className:"text-xs text-slate-500",children:"Style"}),M.jsxs("div",{className:"bg-white/5 p-0.5 rounded-lg flex text-[10px] font-medium border border-white/10",children:[M.jsx("button",{onClick:()=>ot({...Ve,mode:"volume"}),className:`px-2 py-1 rounded transition-colors ${!Ve.mode||Ve.mode==="volume"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-300"}`,children:"Full"}),M.jsx("button",{onClick:()=>ot({...Ve,mode:"floor"}),className:`px-2 py-1 rounded transition-colors ${Ve.mode==="floor"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-300"}`,children:"Floor"})]})]}),M.jsxs("div",{className:"space-y-1",children:[M.jsxs("div",{className:"flex justify-between",children:[M.jsx("label",{className:"text-[10px] text-slate-500",children:"Opacity"}),M.jsxs("span",{className:"text-[10px] text-slate-400",children:[Math.round(Ve.opacity*100),"%"]})]}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:Ve.opacity,onChange:_=>ot({...Ve,opacity:parseFloat(_.target.value)}),className:"w-full accent-indigo-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"})]}),M.jsxs("div",{className:"space-y-1",children:[M.jsxs("div",{className:"flex justify-between",children:[M.jsx("label",{className:"text-[10px] text-slate-500",children:"Edges"}),M.jsxs("span",{className:"text-[10px] text-slate-400",children:[Math.round(Ve.edgeOpacity*100),"%"]})]}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:Ve.edgeOpacity,onChange:_=>ot({...Ve,edgeOpacity:parseFloat(_.target.value)}),className:"w-full accent-indigo-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"})]})]})]}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"3D Snapshots"}),I!=="iso3d"?M.jsx("p",{className:"text-xs text-slate-400",children:"Switch to Isometric view to capture snapshots."}):ve.length===0?M.jsx("p",{className:"text-xs text-slate-400",children:"No snapshots yet. Click “Snapshot” in the 3D view."}):M.jsx("div",{className:"grid grid-cols-2 gap-3",children:ve.map(_=>M.jsxs("div",{className:"rounded-lg border border-slate-200 overflow-hidden bg-white",children:[M.jsx("img",{src:_.dataUrl,alt:"Snapshot",className:"w-full h-24 object-cover"}),M.jsxs("div",{className:"p-2",children:[M.jsx("p",{className:"text-[10px] text-slate-400",children:_.createdAt}),M.jsx("button",{onClick:()=>mn(_.dataUrl,`security_snapshot_${_.id}.png`),className:"mt-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700",children:"Export"})]})]},_.id))})]})]})})]})]})}const z_=document.getElementById("root");if(!z_)throw new Error("Root element not found");qx(z_).render(M.jsx(fy.StrictMode,{children:M.jsx(SC,{})}));
