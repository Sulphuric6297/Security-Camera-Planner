(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function py(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var q0={exports:{}},Nu={},Z0={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=Symbol.for("react.element"),my=Symbol.for("react.portal"),gy=Symbol.for("react.fragment"),xy=Symbol.for("react.strict_mode"),vy=Symbol.for("react.profiler"),_y=Symbol.for("react.provider"),yy=Symbol.for("react.context"),Sy=Symbol.for("react.forward_ref"),My=Symbol.for("react.suspense"),wy=Symbol.for("react.memo"),Ey=Symbol.for("react.lazy"),tm=Symbol.iterator;function by(t){return t===null||typeof t!="object"?null:(t=tm&&t[tm]||t["@@iterator"],typeof t=="function"?t:null)}var K0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J0=Object.assign,Q0={};function oa(t,e,n){this.props=t,this.context=e,this.refs=Q0,this.updater=n||K0}oa.prototype.isReactComponent={};oa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ex(){}ex.prototype=oa.prototype;function Lf(t,e,n){this.props=t,this.context=e,this.refs=Q0,this.updater=n||K0}var Nf=Lf.prototype=new ex;Nf.constructor=Lf;J0(Nf,oa.prototype);Nf.isPureReactComponent=!0;var nm=Array.isArray,tx=Object.prototype.hasOwnProperty,If={current:null},nx={key:!0,ref:!0,__self:!0,__source:!0};function ix(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tx.call(e,i)&&!nx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Cl,type:t,key:s,ref:o,props:r,_owner:If.current}}function Ty(t,e){return{$$typeof:Cl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Df(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cl}function Ay(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var im=/\/+/g;function rd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ay(""+t.key):e.toString(36)}function Fc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cl:case my:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+rd(o,0):i,nm(r)?(n="",t!=null&&(n=t.replace(im,"$&/")+"/"),Fc(r,e,n,"",function(c){return c})):r!=null&&(Df(r)&&(r=Ty(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(im,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",nm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+rd(s,a);o+=Fc(s,e,n,l,r)}else if(l=by(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+rd(s,a++),o+=Fc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vl(t,e,n){if(t==null)return t;var i=[],r=0;return Fc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Cy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ti={current:null},kc={transition:null},Ry={ReactCurrentDispatcher:ti,ReactCurrentBatchConfig:kc,ReactCurrentOwner:If};function rx(){throw Error("act(...) is not supported in production builds of React.")}Pt.Children={map:Vl,forEach:function(t,e,n){Vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vl(t,function(){e++}),e},toArray:function(t){return Vl(t,function(e){return e})||[]},only:function(t){if(!Df(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Pt.Component=oa;Pt.Fragment=gy;Pt.Profiler=vy;Pt.PureComponent=Lf;Pt.StrictMode=xy;Pt.Suspense=My;Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ry;Pt.act=rx;Pt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=J0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=If.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)tx.call(e,l)&&!nx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Cl,type:t.type,key:r,ref:s,props:i,_owner:o}};Pt.createContext=function(t){return t={$$typeof:yy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_y,_context:t},t.Consumer=t};Pt.createElement=ix;Pt.createFactory=function(t){var e=ix.bind(null,t);return e.type=t,e};Pt.createRef=function(){return{current:null}};Pt.forwardRef=function(t){return{$$typeof:Sy,render:t}};Pt.isValidElement=Df;Pt.lazy=function(t){return{$$typeof:Ey,_payload:{_status:-1,_result:t},_init:Cy}};Pt.memo=function(t,e){return{$$typeof:wy,type:t,compare:e===void 0?null:e}};Pt.startTransition=function(t){var e=kc.transition;kc.transition={};try{t()}finally{kc.transition=e}};Pt.unstable_act=rx;Pt.useCallback=function(t,e){return ti.current.useCallback(t,e)};Pt.useContext=function(t){return ti.current.useContext(t)};Pt.useDebugValue=function(){};Pt.useDeferredValue=function(t){return ti.current.useDeferredValue(t)};Pt.useEffect=function(t,e){return ti.current.useEffect(t,e)};Pt.useId=function(){return ti.current.useId()};Pt.useImperativeHandle=function(t,e,n){return ti.current.useImperativeHandle(t,e,n)};Pt.useInsertionEffect=function(t,e){return ti.current.useInsertionEffect(t,e)};Pt.useLayoutEffect=function(t,e){return ti.current.useLayoutEffect(t,e)};Pt.useMemo=function(t,e){return ti.current.useMemo(t,e)};Pt.useReducer=function(t,e,n){return ti.current.useReducer(t,e,n)};Pt.useRef=function(t){return ti.current.useRef(t)};Pt.useState=function(t){return ti.current.useState(t)};Pt.useSyncExternalStore=function(t,e,n){return ti.current.useSyncExternalStore(t,e,n)};Pt.useTransition=function(){return ti.current.useTransition()};Pt.version="18.3.1";Z0.exports=Pt;var Le=Z0.exports;const Py=py(Le);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ly=Le,Ny=Symbol.for("react.element"),Iy=Symbol.for("react.fragment"),Dy=Object.prototype.hasOwnProperty,Uy=Ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Oy={key:!0,ref:!0,__self:!0,__source:!0};function sx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Dy.call(e,i)&&!Oy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ny,type:t,key:s,ref:o,props:r,_owner:Uy.current}}Nu.Fragment=Iy;Nu.jsx=sx;Nu.jsxs=sx;q0.exports=Nu;var S=q0.exports,ox={exports:{}},wi={},ax={exports:{}},lx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Z){var J=B.length;B.push(Z);e:for(;0<J;){var ue=J-1>>>1,pe=B[ue];if(0<r(pe,Z))B[ue]=Z,B[J]=pe,J=ue;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var Z=B[0],J=B.pop();if(J!==Z){B[0]=J;e:for(var ue=0,pe=B.length,te=pe>>>1;ue<te;){var fe=2*(ue+1)-1,ke=B[fe],Ye=fe+1,Ve=B[Ye];if(0>r(ke,J))Ye<pe&&0>r(Ve,ke)?(B[ue]=Ve,B[Ye]=J,ue=Ye):(B[ue]=ke,B[fe]=J,ue=fe);else if(Ye<pe&&0>r(Ve,J))B[ue]=Ve,B[Ye]=J,ue=Ye;else break e}}return Z}function r(B,Z){var J=B.sortIndex-Z.sortIndex;return J!==0?J:B.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,m=!1,x=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(B){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=B)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function y(B){if(M=!1,v(B),!x)if(n(l)!==null)x=!0,$(N);else{var Z=n(c);Z!==null&&re(y,Z.startTime-B)}}function N(B,Z){x=!1,M&&(M=!1,d(k),k=-1),m=!0;var J=f;try{for(v(Z),h=n(l);h!==null&&(!(h.expirationTime>Z)||B&&!W());){var ue=h.callback;if(typeof ue=="function"){h.callback=null,f=h.priorityLevel;var pe=ue(h.expirationTime<=Z);Z=t.unstable_now(),typeof pe=="function"?h.callback=pe:h===n(l)&&i(l),v(Z)}else i(l);h=n(l)}if(h!==null)var te=!0;else{var fe=n(c);fe!==null&&re(y,fe.startTime-Z),te=!1}return te}finally{h=null,f=J,m=!1}}var C=!1,R=null,k=-1,b=5,T=-1;function W(){return!(t.unstable_now()-T<b)}function q(){if(R!==null){var B=t.unstable_now();T=B;var Z=!0;try{Z=R(!0,B)}finally{Z?se():(C=!1,R=null)}}else C=!1}var se;if(typeof p=="function")se=function(){p(q)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,X=D.port2;D.port1.onmessage=q,se=function(){X.postMessage(null)}}else se=function(){g(q,0)};function $(B){R=B,C||(C=!0,se())}function re(B,Z){k=g(function(){B(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,$(N))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(f){case 1:case 2:case 3:var Z=3;break;default:Z=f}var J=f;f=Z;try{return B()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=f;f=B;try{return Z()}finally{f=J}},t.unstable_scheduleCallback=function(B,Z,J){var ue=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ue+J:ue):J=ue,B){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=J+pe,B={id:u++,callback:Z,priorityLevel:B,startTime:J,expirationTime:pe,sortIndex:-1},J>ue?(B.sortIndex=J,e(c,B),n(l)===null&&B===n(c)&&(M?(d(k),k=-1):M=!0,re(y,J-ue))):(B.sortIndex=pe,e(l,B),x||m||(x=!0,$(N))),B},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(B){var Z=f;return function(){var J=f;f=Z;try{return B.apply(this,arguments)}finally{f=J}}}})(lx);ax.exports=lx;var Fy=ax.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky=Le,Mi=Fy;function Te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cx=new Set,rl={};function $s(t,e){qo(t,e),qo(t+"Capture",e)}function qo(t,e){for(rl[t]=e,t=0;t<e.length;t++)cx.add(e[t])}var Rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wh=Object.prototype.hasOwnProperty,zy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rm={},sm={};function By(t){return wh.call(sm,t)?!0:wh.call(rm,t)?!1:zy.test(t)?sm[t]=!0:(rm[t]=!0,!1)}function Hy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Vy(t,e,n,i){if(e===null||typeof e>"u"||Hy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ni(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Fn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Fn[t]=new ni(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Fn[e]=new ni(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Fn[t]=new ni(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Fn[t]=new ni(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Fn[t]=new ni(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Fn[t]=new ni(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Fn[t]=new ni(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Fn[t]=new ni(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Fn[t]=new ni(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uf=/[\-:]([a-z])/g;function Of(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uf,Of);Fn[e]=new ni(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uf,Of);Fn[e]=new ni(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uf,Of);Fn[e]=new ni(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Fn[t]=new ni(t,1,!1,t.toLowerCase(),null,!1,!1)});Fn.xlinkHref=new ni("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Fn[t]=new ni(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ff(t,e,n,i){var r=Fn.hasOwnProperty(e)?Fn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Vy(e,n,r,i)&&(n=null),i||r===null?By(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Dr=ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gl=Symbol.for("react.element"),To=Symbol.for("react.portal"),Ao=Symbol.for("react.fragment"),kf=Symbol.for("react.strict_mode"),Eh=Symbol.for("react.profiler"),ux=Symbol.for("react.provider"),dx=Symbol.for("react.context"),zf=Symbol.for("react.forward_ref"),bh=Symbol.for("react.suspense"),Th=Symbol.for("react.suspense_list"),Bf=Symbol.for("react.memo"),Wr=Symbol.for("react.lazy"),hx=Symbol.for("react.offscreen"),om=Symbol.iterator;function _a(t){return t===null||typeof t!="object"?null:(t=om&&t[om]||t["@@iterator"],typeof t=="function"?t:null)}var cn=Object.assign,sd;function Oa(t){if(sd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sd=e&&e[1]||""}return`
`+sd+t}var od=!1;function ad(t,e){if(!t||od)return"";od=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{od=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oa(t):""}function Gy(t){switch(t.tag){case 5:return Oa(t.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 2:case 15:return t=ad(t.type,!1),t;case 11:return t=ad(t.type.render,!1),t;case 1:return t=ad(t.type,!0),t;default:return""}}function Ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ao:return"Fragment";case To:return"Portal";case Eh:return"Profiler";case kf:return"StrictMode";case bh:return"Suspense";case Th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dx:return(t.displayName||"Context")+".Consumer";case ux:return(t._context.displayName||"Context")+".Provider";case zf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bf:return e=t.displayName||null,e!==null?e:Ah(t.type)||"Memo";case Wr:e=t._payload,t=t._init;try{return Ah(t(e))}catch{}}return null}function Wy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ah(e);case 8:return e===kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ds(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jy(t){var e=fx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wl(t){t._valueTracker||(t._valueTracker=jy(t))}function px(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ch(t,e){var n=e.checked;return cn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function am(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ds(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mx(t,e){e=e.checked,e!=null&&Ff(t,"checked",e,!1)}function Rh(t,e){mx(t,e);var n=ds(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ph(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ph(t,e.type,ds(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ph(t,e,n){(e!=="number"||Jc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fa=Array.isArray;function Ho(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ds(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Lh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Te(91));return cn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Te(92));if(Fa(n)){if(1<n.length)throw Error(Te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ds(n)}}function gx(t,e){var n=ds(e.value),i=ds(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jl,vx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jl=jl||document.createElement("div"),jl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function sl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xy=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(t){Xy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ha[e]=Ha[t]})});function _x(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ha.hasOwnProperty(t)&&Ha[t]?(""+e).trim():e+"px"}function yx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_x(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var $y=cn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ih(t,e){if(e){if($y[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Te(62))}}function Dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uh=null;function Hf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oh=null,Vo=null,Go=null;function dm(t){if(t=Ll(t)){if(typeof Oh!="function")throw Error(Te(280));var e=t.stateNode;e&&(e=Fu(e),Oh(t.stateNode,t.type,e))}}function Sx(t){Vo?Go?Go.push(t):Go=[t]:Vo=t}function Mx(){if(Vo){var t=Vo,e=Go;if(Go=Vo=null,dm(t),e)for(t=0;t<e.length;t++)dm(e[t])}}function wx(t,e){return t(e)}function Ex(){}var ld=!1;function bx(t,e,n){if(ld)return t(e,n);ld=!0;try{return wx(t,e,n)}finally{ld=!1,(Vo!==null||Go!==null)&&(Ex(),Mx())}}function ol(t,e){var n=t.stateNode;if(n===null)return null;var i=Fu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Te(231,e,typeof n));return n}var Fh=!1;if(Rr)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){Fh=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{Fh=!1}function Yy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Va=!1,Qc=null,eu=!1,kh=null,qy={onError:function(t){Va=!0,Qc=t}};function Zy(t,e,n,i,r,s,o,a,l){Va=!1,Qc=null,Yy.apply(qy,arguments)}function Ky(t,e,n,i,r,s,o,a,l){if(Zy.apply(this,arguments),Va){if(Va){var c=Qc;Va=!1,Qc=null}else throw Error(Te(198));eu||(eu=!0,kh=c)}}function Ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hm(t){if(Ys(t)!==t)throw Error(Te(188))}function Jy(t){var e=t.alternate;if(!e){if(e=Ys(t),e===null)throw Error(Te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return hm(r),t;if(s===i)return hm(r),e;s=s.sibling}throw Error(Te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Te(189))}}if(n.alternate!==i)throw Error(Te(190))}if(n.tag!==3)throw Error(Te(188));return n.stateNode.current===n?t:e}function Ax(t){return t=Jy(t),t!==null?Cx(t):null}function Cx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cx(t);if(e!==null)return e;t=t.sibling}return null}var Rx=Mi.unstable_scheduleCallback,fm=Mi.unstable_cancelCallback,Qy=Mi.unstable_shouldYield,eS=Mi.unstable_requestPaint,dn=Mi.unstable_now,tS=Mi.unstable_getCurrentPriorityLevel,Vf=Mi.unstable_ImmediatePriority,Px=Mi.unstable_UserBlockingPriority,tu=Mi.unstable_NormalPriority,nS=Mi.unstable_LowPriority,Lx=Mi.unstable_IdlePriority,Iu=null,lr=null;function iS(t){if(lr&&typeof lr.onCommitFiberRoot=="function")try{lr.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var Yi=Math.clz32?Math.clz32:oS,rS=Math.log,sS=Math.LN2;function oS(t){return t>>>=0,t===0?32:31-(rS(t)/sS|0)|0}var Xl=64,$l=4194304;function ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ka(a):(s&=o,s!==0&&(i=ka(s)))}else o=n&~r,o!==0?i=ka(o):s!==0&&(i=ka(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yi(e),r=1<<n,i|=t[n],e&=~r;return i}function aS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=aS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nx(){var t=Xl;return Xl<<=1,!(Xl&4194240)&&(Xl=64),t}function cd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yi(e),t[e]=n}function cS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Gf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ft=0;function Ix(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dx,Wf,Ux,Ox,Fx,Bh=!1,Yl=[],Qr=null,es=null,ts=null,al=new Map,ll=new Map,$r=[],uS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pm(t,e){switch(t){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":al.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(e.pointerId)}}function Sa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ll(e),e!==null&&Wf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function dS(t,e,n,i,r){switch(e){case"focusin":return Qr=Sa(Qr,t,e,n,i,r),!0;case"dragenter":return es=Sa(es,t,e,n,i,r),!0;case"mouseover":return ts=Sa(ts,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return al.set(s,Sa(al.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ll.set(s,Sa(ll.get(s)||null,t,e,n,i,r)),!0}return!1}function kx(t){var e=Ps(t.target);if(e!==null){var n=Ys(e);if(n!==null){if(e=n.tag,e===13){if(e=Tx(n),e!==null){t.blockedOn=e,Fx(t.priority,function(){Ux(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Uh=i,n.target.dispatchEvent(i),Uh=null}else return e=Ll(n),e!==null&&Wf(e),t.blockedOn=n,!1;e.shift()}return!0}function mm(t,e,n){zc(t)&&n.delete(e)}function hS(){Bh=!1,Qr!==null&&zc(Qr)&&(Qr=null),es!==null&&zc(es)&&(es=null),ts!==null&&zc(ts)&&(ts=null),al.forEach(mm),ll.forEach(mm)}function Ma(t,e){t.blockedOn===e&&(t.blockedOn=null,Bh||(Bh=!0,Mi.unstable_scheduleCallback(Mi.unstable_NormalPriority,hS)))}function cl(t){function e(r){return Ma(r,t)}if(0<Yl.length){Ma(Yl[0],t);for(var n=1;n<Yl.length;n++){var i=Yl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qr!==null&&Ma(Qr,t),es!==null&&Ma(es,t),ts!==null&&Ma(ts,t),al.forEach(e),ll.forEach(e),n=0;n<$r.length;n++)i=$r[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<$r.length&&(n=$r[0],n.blockedOn===null);)kx(n),n.blockedOn===null&&$r.shift()}var Wo=Dr.ReactCurrentBatchConfig,iu=!0;function fS(t,e,n,i){var r=Ft,s=Wo.transition;Wo.transition=null;try{Ft=1,jf(t,e,n,i)}finally{Ft=r,Wo.transition=s}}function pS(t,e,n,i){var r=Ft,s=Wo.transition;Wo.transition=null;try{Ft=4,jf(t,e,n,i)}finally{Ft=r,Wo.transition=s}}function jf(t,e,n,i){if(iu){var r=Hh(t,e,n,i);if(r===null)_d(t,e,i,ru,n),pm(t,i);else if(dS(r,t,e,n,i))i.stopPropagation();else if(pm(t,i),e&4&&-1<uS.indexOf(t)){for(;r!==null;){var s=Ll(r);if(s!==null&&Dx(s),s=Hh(t,e,n,i),s===null&&_d(t,e,i,ru,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else _d(t,e,i,null,n)}}var ru=null;function Hh(t,e,n,i){if(ru=null,t=Hf(i),t=Ps(t),t!==null)if(e=Ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ru=t,null}function zx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tS()){case Vf:return 1;case Px:return 4;case tu:case nS:return 16;case Lx:return 536870912;default:return 16}default:return 16}}var qr=null,Xf=null,Bc=null;function Bx(){if(Bc)return Bc;var t,e=Xf,n=e.length,i,r="value"in qr?qr.value:qr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Bc=r.slice(t,1<i?1-i:void 0)}function Hc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ql(){return!0}function gm(){return!1}function Ei(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ql:gm,this.isPropagationStopped=gm,this}return cn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),e}var aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$f=Ei(aa),Pl=cn({},aa,{view:0,detail:0}),mS=Ei(Pl),ud,dd,wa,Du=cn({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wa&&(wa&&t.type==="mousemove"?(ud=t.screenX-wa.screenX,dd=t.screenY-wa.screenY):dd=ud=0,wa=t),ud)},movementY:function(t){return"movementY"in t?t.movementY:dd}}),xm=Ei(Du),gS=cn({},Du,{dataTransfer:0}),xS=Ei(gS),vS=cn({},Pl,{relatedTarget:0}),hd=Ei(vS),_S=cn({},aa,{animationName:0,elapsedTime:0,pseudoElement:0}),yS=Ei(_S),SS=cn({},aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MS=Ei(SS),wS=cn({},aa,{data:0}),vm=Ei(wS),ES={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TS[t])?!!e[t]:!1}function Yf(){return AS}var CS=cn({},Pl,{key:function(t){if(t.key){var e=ES[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yf,charCode:function(t){return t.type==="keypress"?Hc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RS=Ei(CS),PS=cn({},Du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_m=Ei(PS),LS=cn({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yf}),NS=Ei(LS),IS=cn({},aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),DS=Ei(IS),US=cn({},Du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OS=Ei(US),FS=[9,13,27,32],qf=Rr&&"CompositionEvent"in window,Ga=null;Rr&&"documentMode"in document&&(Ga=document.documentMode);var kS=Rr&&"TextEvent"in window&&!Ga,Hx=Rr&&(!qf||Ga&&8<Ga&&11>=Ga),ym=" ",Sm=!1;function Vx(t,e){switch(t){case"keyup":return FS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Co=!1;function zS(t,e){switch(t){case"compositionend":return Gx(e);case"keypress":return e.which!==32?null:(Sm=!0,ym);case"textInput":return t=e.data,t===ym&&Sm?null:t;default:return null}}function BS(t,e){if(Co)return t==="compositionend"||!qf&&Vx(t,e)?(t=Bx(),Bc=Xf=qr=null,Co=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hx&&e.locale!=="ko"?null:e.data;default:return null}}var HS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HS[t.type]:e==="textarea"}function Wx(t,e,n,i){Sx(i),e=su(e,"onChange"),0<e.length&&(n=new $f("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Wa=null,ul=null;function VS(t){tv(t,0)}function Uu(t){var e=Lo(t);if(px(e))return t}function GS(t,e){if(t==="change")return e}var jx=!1;if(Rr){var fd;if(Rr){var pd="oninput"in document;if(!pd){var wm=document.createElement("div");wm.setAttribute("oninput","return;"),pd=typeof wm.oninput=="function"}fd=pd}else fd=!1;jx=fd&&(!document.documentMode||9<document.documentMode)}function Em(){Wa&&(Wa.detachEvent("onpropertychange",Xx),ul=Wa=null)}function Xx(t){if(t.propertyName==="value"&&Uu(ul)){var e=[];Wx(e,ul,t,Hf(t)),bx(VS,e)}}function WS(t,e,n){t==="focusin"?(Em(),Wa=e,ul=n,Wa.attachEvent("onpropertychange",Xx)):t==="focusout"&&Em()}function jS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(ul)}function XS(t,e){if(t==="click")return Uu(e)}function $S(t,e){if(t==="input"||t==="change")return Uu(e)}function YS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zi=typeof Object.is=="function"?Object.is:YS;function dl(t,e){if(Zi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!wh.call(e,r)||!Zi(t[r],e[r]))return!1}return!0}function bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tm(t,e){var n=bm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bm(n)}}function $x(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$x(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yx(){for(var t=window,e=Jc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jc(t.document)}return e}function Zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qS(t){var e=Yx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$x(n.ownerDocument.documentElement,n)){if(i!==null&&Zf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Tm(n,s);var o=Tm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ZS=Rr&&"documentMode"in document&&11>=document.documentMode,Ro=null,Vh=null,ja=null,Gh=!1;function Am(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gh||Ro==null||Ro!==Jc(i)||(i=Ro,"selectionStart"in i&&Zf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ja&&dl(ja,i)||(ja=i,i=su(Vh,"onSelect"),0<i.length&&(e=new $f("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ro)))}function Zl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Po={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},md={},qx={};Rr&&(qx=document.createElement("div").style,"AnimationEvent"in window||(delete Po.animationend.animation,delete Po.animationiteration.animation,delete Po.animationstart.animation),"TransitionEvent"in window||delete Po.transitionend.transition);function Ou(t){if(md[t])return md[t];if(!Po[t])return t;var e=Po[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qx)return md[t]=e[n];return t}var Zx=Ou("animationend"),Kx=Ou("animationiteration"),Jx=Ou("animationstart"),Qx=Ou("transitionend"),ev=new Map,Cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ps(t,e){ev.set(t,e),$s(e,[t])}for(var gd=0;gd<Cm.length;gd++){var xd=Cm[gd],KS=xd.toLowerCase(),JS=xd[0].toUpperCase()+xd.slice(1);ps(KS,"on"+JS)}ps(Zx,"onAnimationEnd");ps(Kx,"onAnimationIteration");ps(Jx,"onAnimationStart");ps("dblclick","onDoubleClick");ps("focusin","onFocus");ps("focusout","onBlur");ps(Qx,"onTransitionEnd");qo("onMouseEnter",["mouseout","mouseover"]);qo("onMouseLeave",["mouseout","mouseover"]);qo("onPointerEnter",["pointerout","pointerover"]);qo("onPointerLeave",["pointerout","pointerover"]);$s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$s("onBeforeInput",["compositionend","keypress","textInput","paste"]);$s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QS=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function Rm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ky(i,e,void 0,t),t.currentTarget=null}function tv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Rm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Rm(r,a,c),s=l}}}if(eu)throw t=kh,eu=!1,kh=null,t}function qt(t,e){var n=e[Yh];n===void 0&&(n=e[Yh]=new Set);var i=t+"__bubble";n.has(i)||(nv(e,t,2,!1),n.add(i))}function vd(t,e,n){var i=0;e&&(i|=4),nv(n,t,i,e)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function hl(t){if(!t[Kl]){t[Kl]=!0,cx.forEach(function(n){n!=="selectionchange"&&(QS.has(n)||vd(n,!1,t),vd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Kl]||(e[Kl]=!0,vd("selectionchange",!1,e))}}function nv(t,e,n,i){switch(zx(e)){case 1:var r=fS;break;case 4:r=pS;break;default:r=jf}n=r.bind(null,e,n,t),r=void 0,!Fh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _d(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ps(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}bx(function(){var c=s,u=Hf(n),h=[];e:{var f=ev.get(t);if(f!==void 0){var m=$f,x=t;switch(t){case"keypress":if(Hc(n)===0)break e;case"keydown":case"keyup":m=RS;break;case"focusin":x="focus",m=hd;break;case"focusout":x="blur",m=hd;break;case"beforeblur":case"afterblur":m=hd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=xS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=NS;break;case Zx:case Kx:case Jx:m=yS;break;case Qx:m=DS;break;case"scroll":m=mS;break;case"wheel":m=OS;break;case"copy":case"cut":case"paste":m=MS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=_m}var M=(e&4)!==0,g=!M&&t==="scroll",d=M?f!==null?f+"Capture":null:f;M=[];for(var p=c,v;p!==null;){v=p;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,d!==null&&(y=ol(p,d),y!=null&&M.push(fl(p,y,v)))),g)break;p=p.return}0<M.length&&(f=new m(f,x,null,n,u),h.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Uh&&(x=n.relatedTarget||n.fromElement)&&(Ps(x)||x[Pr]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Ps(x):null,x!==null&&(g=Ys(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(M=xm,y="onMouseLeave",d="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(M=_m,y="onPointerLeave",d="onPointerEnter",p="pointer"),g=m==null?f:Lo(m),v=x==null?f:Lo(x),f=new M(y,p+"leave",m,n,u),f.target=g,f.relatedTarget=v,y=null,Ps(u)===c&&(M=new M(d,p+"enter",x,n,u),M.target=v,M.relatedTarget=g,y=M),g=y,m&&x)t:{for(M=m,d=x,p=0,v=M;v;v=no(v))p++;for(v=0,y=d;y;y=no(y))v++;for(;0<p-v;)M=no(M),p--;for(;0<v-p;)d=no(d),v--;for(;p--;){if(M===d||d!==null&&M===d.alternate)break t;M=no(M),d=no(d)}M=null}else M=null;m!==null&&Pm(h,f,m,M,!1),x!==null&&g!==null&&Pm(h,g,x,M,!0)}}e:{if(f=c?Lo(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=GS;else if(Mm(f))if(jx)N=$S;else{N=jS;var C=WS}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=XS);if(N&&(N=N(t,c))){Wx(h,N,n,u);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Ph(f,"number",f.value)}switch(C=c?Lo(c):window,t){case"focusin":(Mm(C)||C.contentEditable==="true")&&(Ro=C,Vh=c,ja=null);break;case"focusout":ja=Vh=Ro=null;break;case"mousedown":Gh=!0;break;case"contextmenu":case"mouseup":case"dragend":Gh=!1,Am(h,n,u);break;case"selectionchange":if(ZS)break;case"keydown":case"keyup":Am(h,n,u)}var R;if(qf)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Co?Vx(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Hx&&n.locale!=="ko"&&(Co||k!=="onCompositionStart"?k==="onCompositionEnd"&&Co&&(R=Bx()):(qr=u,Xf="value"in qr?qr.value:qr.textContent,Co=!0)),C=su(c,k),0<C.length&&(k=new vm(k,t,null,n,u),h.push({event:k,listeners:C}),R?k.data=R:(R=Gx(n),R!==null&&(k.data=R)))),(R=kS?zS(t,n):BS(t,n))&&(c=su(c,"onBeforeInput"),0<c.length&&(u=new vm("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=R))}tv(h,e)})}function fl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function su(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ol(t,n),s!=null&&i.unshift(fl(t,s,r)),s=ol(t,e),s!=null&&i.push(fl(t,s,r))),t=t.return}return i}function no(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ol(n,s),l!=null&&o.unshift(fl(n,l,a))):r||(l=ol(n,s),l!=null&&o.push(fl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var eM=/\r\n?/g,tM=/\u0000|\uFFFD/g;function Lm(t){return(typeof t=="string"?t:""+t).replace(eM,`
`).replace(tM,"")}function Jl(t,e,n){if(e=Lm(e),Lm(t)!==e&&n)throw Error(Te(425))}function ou(){}var Wh=null,jh=null;function Xh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $h=typeof setTimeout=="function"?setTimeout:void 0,nM=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,iM=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(rM)}:$h;function rM(t){setTimeout(function(){throw t})}function yd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),cl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);cl(e)}function ns(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Im(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var la=Math.random().toString(36).slice(2),sr="__reactFiber$"+la,pl="__reactProps$"+la,Pr="__reactContainer$"+la,Yh="__reactEvents$"+la,sM="__reactListeners$"+la,oM="__reactHandles$"+la;function Ps(t){var e=t[sr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pr]||n[sr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Im(t);t!==null;){if(n=t[sr])return n;t=Im(t)}return e}t=n,n=t.parentNode}return null}function Ll(t){return t=t[sr]||t[Pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Lo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Te(33))}function Fu(t){return t[pl]||null}var qh=[],No=-1;function ms(t){return{current:t}}function Kt(t){0>No||(t.current=qh[No],qh[No]=null,No--)}function Xt(t,e){No++,qh[No]=t.current,t.current=e}var hs={},Xn=ms(hs),hi=ms(!1),ks=hs;function Zo(t,e){var n=t.type.contextTypes;if(!n)return hs;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fi(t){return t=t.childContextTypes,t!=null}function au(){Kt(hi),Kt(Xn)}function Dm(t,e,n){if(Xn.current!==hs)throw Error(Te(168));Xt(Xn,e),Xt(hi,n)}function iv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Te(108,Wy(t)||"Unknown",r));return cn({},n,i)}function lu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hs,ks=Xn.current,Xt(Xn,t),Xt(hi,hi.current),!0}function Um(t,e,n){var i=t.stateNode;if(!i)throw Error(Te(169));n?(t=iv(t,e,ks),i.__reactInternalMemoizedMergedChildContext=t,Kt(hi),Kt(Xn),Xt(Xn,t)):Kt(hi),Xt(hi,n)}var Er=null,ku=!1,Sd=!1;function rv(t){Er===null?Er=[t]:Er.push(t)}function aM(t){ku=!0,rv(t)}function gs(){if(!Sd&&Er!==null){Sd=!0;var t=0,e=Ft;try{var n=Er;for(Ft=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Er=null,ku=!1}catch(r){throw Er!==null&&(Er=Er.slice(t+1)),Rx(Vf,gs),r}finally{Ft=e,Sd=!1}}return null}var Io=[],Do=0,cu=null,uu=0,Ai=[],Ci=0,zs=null,br=1,Tr="";function Es(t,e){Io[Do++]=uu,Io[Do++]=cu,cu=t,uu=e}function sv(t,e,n){Ai[Ci++]=br,Ai[Ci++]=Tr,Ai[Ci++]=zs,zs=t;var i=br;t=Tr;var r=32-Yi(i)-1;i&=~(1<<r),n+=1;var s=32-Yi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,br=1<<32-Yi(e)+r|n<<r|i,Tr=s+t}else br=1<<s|n<<r|i,Tr=t}function Kf(t){t.return!==null&&(Es(t,1),sv(t,1,0))}function Jf(t){for(;t===cu;)cu=Io[--Do],Io[Do]=null,uu=Io[--Do],Io[Do]=null;for(;t===zs;)zs=Ai[--Ci],Ai[Ci]=null,Tr=Ai[--Ci],Ai[Ci]=null,br=Ai[--Ci],Ai[Ci]=null}var Si=null,yi=null,tn=!1,Xi=null;function ov(t,e){var n=Li(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Om(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Si=t,yi=ns(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Si=t,yi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zs!==null?{id:br,overflow:Tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Li(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Si=t,yi=null,!0):!1;default:return!1}}function Zh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kh(t){if(tn){var e=yi;if(e){var n=e;if(!Om(t,e)){if(Zh(t))throw Error(Te(418));e=ns(n.nextSibling);var i=Si;e&&Om(t,e)?ov(i,n):(t.flags=t.flags&-4097|2,tn=!1,Si=t)}}else{if(Zh(t))throw Error(Te(418));t.flags=t.flags&-4097|2,tn=!1,Si=t}}}function Fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Si=t}function Ql(t){if(t!==Si)return!1;if(!tn)return Fm(t),tn=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xh(t.type,t.memoizedProps)),e&&(e=yi)){if(Zh(t))throw av(),Error(Te(418));for(;e;)ov(t,e),e=ns(e.nextSibling)}if(Fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yi=ns(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yi=null}}else yi=Si?ns(t.stateNode.nextSibling):null;return!0}function av(){for(var t=yi;t;)t=ns(t.nextSibling)}function Ko(){yi=Si=null,tn=!1}function Qf(t){Xi===null?Xi=[t]:Xi.push(t)}var lM=Dr.ReactCurrentBatchConfig;function Ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Te(309));var i=n.stateNode}if(!i)throw Error(Te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Te(284));if(!n._owner)throw Error(Te(290,t))}return t}function ec(t,e){throw t=Object.prototype.toString.call(e),Error(Te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function km(t){var e=t._init;return e(t._payload)}function lv(t){function e(d,p){if(t){var v=d.deletions;v===null?(d.deletions=[p],d.flags|=16):v.push(p)}}function n(d,p){if(!t)return null;for(;p!==null;)e(d,p),p=p.sibling;return null}function i(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function r(d,p){return d=os(d,p),d.index=0,d.sibling=null,d}function s(d,p,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<p?(d.flags|=2,p):v):(d.flags|=2,p)):(d.flags|=1048576,p)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,p,v,y){return p===null||p.tag!==6?(p=Cd(v,d.mode,y),p.return=d,p):(p=r(p,v),p.return=d,p)}function l(d,p,v,y){var N=v.type;return N===Ao?u(d,p,v.props.children,y,v.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Wr&&km(N)===p.type)?(y=r(p,v.props),y.ref=Ea(d,p,v),y.return=d,y):(y=Yc(v.type,v.key,v.props,null,d.mode,y),y.ref=Ea(d,p,v),y.return=d,y)}function c(d,p,v,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Rd(v,d.mode,y),p.return=d,p):(p=r(p,v.children||[]),p.return=d,p)}function u(d,p,v,y,N){return p===null||p.tag!==7?(p=Ds(v,d.mode,y,N),p.return=d,p):(p=r(p,v),p.return=d,p)}function h(d,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Cd(""+p,d.mode,v),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gl:return v=Yc(p.type,p.key,p.props,null,d.mode,v),v.ref=Ea(d,null,p),v.return=d,v;case To:return p=Rd(p,d.mode,v),p.return=d,p;case Wr:var y=p._init;return h(d,y(p._payload),v)}if(Fa(p)||_a(p))return p=Ds(p,d.mode,v,null),p.return=d,p;ec(d,p)}return null}function f(d,p,v,y){var N=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:a(d,p,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gl:return v.key===N?l(d,p,v,y):null;case To:return v.key===N?c(d,p,v,y):null;case Wr:return N=v._init,f(d,p,N(v._payload),y)}if(Fa(v)||_a(v))return N!==null?null:u(d,p,v,y,null);ec(d,v)}return null}function m(d,p,v,y,N){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(v)||null,a(p,d,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Gl:return d=d.get(y.key===null?v:y.key)||null,l(p,d,y,N);case To:return d=d.get(y.key===null?v:y.key)||null,c(p,d,y,N);case Wr:var C=y._init;return m(d,p,v,C(y._payload),N)}if(Fa(y)||_a(y))return d=d.get(v)||null,u(p,d,y,N,null);ec(p,y)}return null}function x(d,p,v,y){for(var N=null,C=null,R=p,k=p=0,b=null;R!==null&&k<v.length;k++){R.index>k?(b=R,R=null):b=R.sibling;var T=f(d,R,v[k],y);if(T===null){R===null&&(R=b);break}t&&R&&T.alternate===null&&e(d,R),p=s(T,p,k),C===null?N=T:C.sibling=T,C=T,R=b}if(k===v.length)return n(d,R),tn&&Es(d,k),N;if(R===null){for(;k<v.length;k++)R=h(d,v[k],y),R!==null&&(p=s(R,p,k),C===null?N=R:C.sibling=R,C=R);return tn&&Es(d,k),N}for(R=i(d,R);k<v.length;k++)b=m(R,d,k,v[k],y),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?k:b.key),p=s(b,p,k),C===null?N=b:C.sibling=b,C=b);return t&&R.forEach(function(W){return e(d,W)}),tn&&Es(d,k),N}function M(d,p,v,y){var N=_a(v);if(typeof N!="function")throw Error(Te(150));if(v=N.call(v),v==null)throw Error(Te(151));for(var C=N=null,R=p,k=p=0,b=null,T=v.next();R!==null&&!T.done;k++,T=v.next()){R.index>k?(b=R,R=null):b=R.sibling;var W=f(d,R,T.value,y);if(W===null){R===null&&(R=b);break}t&&R&&W.alternate===null&&e(d,R),p=s(W,p,k),C===null?N=W:C.sibling=W,C=W,R=b}if(T.done)return n(d,R),tn&&Es(d,k),N;if(R===null){for(;!T.done;k++,T=v.next())T=h(d,T.value,y),T!==null&&(p=s(T,p,k),C===null?N=T:C.sibling=T,C=T);return tn&&Es(d,k),N}for(R=i(d,R);!T.done;k++,T=v.next())T=m(R,d,k,T.value,y),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?k:T.key),p=s(T,p,k),C===null?N=T:C.sibling=T,C=T);return t&&R.forEach(function(q){return e(d,q)}),tn&&Es(d,k),N}function g(d,p,v,y){if(typeof v=="object"&&v!==null&&v.type===Ao&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Gl:e:{for(var N=v.key,C=p;C!==null;){if(C.key===N){if(N=v.type,N===Ao){if(C.tag===7){n(d,C.sibling),p=r(C,v.props.children),p.return=d,d=p;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Wr&&km(N)===C.type){n(d,C.sibling),p=r(C,v.props),p.ref=Ea(d,C,v),p.return=d,d=p;break e}n(d,C);break}else e(d,C);C=C.sibling}v.type===Ao?(p=Ds(v.props.children,d.mode,y,v.key),p.return=d,d=p):(y=Yc(v.type,v.key,v.props,null,d.mode,y),y.ref=Ea(d,p,v),y.return=d,d=y)}return o(d);case To:e:{for(C=v.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(d,p.sibling),p=r(p,v.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else e(d,p);p=p.sibling}p=Rd(v,d.mode,y),p.return=d,d=p}return o(d);case Wr:return C=v._init,g(d,p,C(v._payload),y)}if(Fa(v))return x(d,p,v,y);if(_a(v))return M(d,p,v,y);ec(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(d,p.sibling),p=r(p,v),p.return=d,d=p):(n(d,p),p=Cd(v,d.mode,y),p.return=d,d=p),o(d)):n(d,p)}return g}var Jo=lv(!0),cv=lv(!1),du=ms(null),hu=null,Uo=null,ep=null;function tp(){ep=Uo=hu=null}function np(t){var e=du.current;Kt(du),t._currentValue=e}function Jh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function jo(t,e){hu=t,ep=Uo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(di=!0),t.firstContext=null)}function Di(t){var e=t._currentValue;if(ep!==t)if(t={context:t,memoizedValue:e,next:null},Uo===null){if(hu===null)throw Error(Te(308));Uo=t,hu.dependencies={lanes:0,firstContext:t}}else Uo=Uo.next=t;return e}var Ls=null;function ip(t){Ls===null?Ls=[t]:Ls.push(t)}function uv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ip(e)):(n.next=r.next,r.next=n),e.interleaved=n,Lr(t,i)}function Lr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jr=!1;function rp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function is(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Lr(t,n)}return r=i.interleaved,r===null?(e.next=e,ip(i)):(e.next=r.next,r.next=e),i.interleaved=e,Lr(t,n)}function Vc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gf(t,n)}}function zm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fu(t,e,n,i){var r=t.updateQueue;jr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,M=a;switch(f=e,m=n,M.tag){case 1:if(x=M.payload,typeof x=="function"){h=x.call(m,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=M.payload,f=typeof x=="function"?x.call(m,h,f):x,f==null)break e;h=cn({},h,f);break e;case 2:jr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=h):u=u.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Hs|=o,t.lanes=o,t.memoizedState=h}}function Bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Te(191,r));r.call(i)}}}var Nl={},cr=ms(Nl),ml=ms(Nl),gl=ms(Nl);function Ns(t){if(t===Nl)throw Error(Te(174));return t}function sp(t,e){switch(Xt(gl,e),Xt(ml,t),Xt(cr,Nl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nh(e,t)}Kt(cr),Xt(cr,e)}function Qo(){Kt(cr),Kt(ml),Kt(gl)}function hv(t){Ns(gl.current);var e=Ns(cr.current),n=Nh(e,t.type);e!==n&&(Xt(ml,t),Xt(cr,n))}function op(t){ml.current===t&&(Kt(cr),Kt(ml))}var sn=ms(0);function pu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Md=[];function ap(){for(var t=0;t<Md.length;t++)Md[t]._workInProgressVersionPrimary=null;Md.length=0}var Gc=Dr.ReactCurrentDispatcher,wd=Dr.ReactCurrentBatchConfig,Bs=0,an=null,Sn=null,Cn=null,mu=!1,Xa=!1,xl=0,cM=0;function Hn(){throw Error(Te(321))}function lp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zi(t[n],e[n]))return!1;return!0}function cp(t,e,n,i,r,s){if(Bs=s,an=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gc.current=t===null||t.memoizedState===null?fM:pM,t=n(i,r),Xa){s=0;do{if(Xa=!1,xl=0,25<=s)throw Error(Te(301));s+=1,Cn=Sn=null,e.updateQueue=null,Gc.current=mM,t=n(i,r)}while(Xa)}if(Gc.current=gu,e=Sn!==null&&Sn.next!==null,Bs=0,Cn=Sn=an=null,mu=!1,e)throw Error(Te(300));return t}function up(){var t=xl!==0;return xl=0,t}function ir(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?an.memoizedState=Cn=t:Cn=Cn.next=t,Cn}function Ui(){if(Sn===null){var t=an.alternate;t=t!==null?t.memoizedState:null}else t=Sn.next;var e=Cn===null?an.memoizedState:Cn.next;if(e!==null)Cn=e,Sn=t;else{if(t===null)throw Error(Te(310));Sn=t,t={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},Cn===null?an.memoizedState=Cn=t:Cn=Cn.next=t}return Cn}function vl(t,e){return typeof e=="function"?e(t):e}function Ed(t){var e=Ui(),n=e.queue;if(n===null)throw Error(Te(311));n.lastRenderedReducer=t;var i=Sn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Bs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,an.lanes|=u,Hs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Zi(i,e.memoizedState)||(di=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,an.lanes|=s,Hs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bd(t){var e=Ui(),n=e.queue;if(n===null)throw Error(Te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zi(s,e.memoizedState)||(di=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function fv(){}function pv(t,e){var n=an,i=Ui(),r=e(),s=!Zi(i.memoizedState,r);if(s&&(i.memoizedState=r,di=!0),i=i.queue,dp(xv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Cn!==null&&Cn.memoizedState.tag&1){if(n.flags|=2048,_l(9,gv.bind(null,n,i,r,e),void 0,null),Rn===null)throw Error(Te(349));Bs&30||mv(n,e,r)}return r}function mv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=an.updateQueue,e===null?(e={lastEffect:null,stores:null},an.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gv(t,e,n,i){e.value=n,e.getSnapshot=i,vv(e)&&_v(t)}function xv(t,e,n){return n(function(){vv(e)&&_v(t)})}function vv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zi(t,n)}catch{return!0}}function _v(t){var e=Lr(t,1);e!==null&&qi(e,t,1,-1)}function Hm(t){var e=ir();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vl,lastRenderedState:t},e.queue=t,t=t.dispatch=hM.bind(null,an,t),[e.memoizedState,t]}function _l(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=an.updateQueue,e===null?(e={lastEffect:null,stores:null},an.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function yv(){return Ui().memoizedState}function Wc(t,e,n,i){var r=ir();an.flags|=t,r.memoizedState=_l(1|e,n,void 0,i===void 0?null:i)}function zu(t,e,n,i){var r=Ui();i=i===void 0?null:i;var s=void 0;if(Sn!==null){var o=Sn.memoizedState;if(s=o.destroy,i!==null&&lp(i,o.deps)){r.memoizedState=_l(e,n,s,i);return}}an.flags|=t,r.memoizedState=_l(1|e,n,s,i)}function Vm(t,e){return Wc(8390656,8,t,e)}function dp(t,e){return zu(2048,8,t,e)}function Sv(t,e){return zu(4,2,t,e)}function Mv(t,e){return zu(4,4,t,e)}function wv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ev(t,e,n){return n=n!=null?n.concat([t]):null,zu(4,4,wv.bind(null,e,t),n)}function hp(){}function bv(t,e){var n=Ui();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Tv(t,e){var n=Ui();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Av(t,e,n){return Bs&21?(Zi(n,e)||(n=Nx(),an.lanes|=n,Hs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,di=!0),t.memoizedState=n)}function uM(t,e){var n=Ft;Ft=n!==0&&4>n?n:4,t(!0);var i=wd.transition;wd.transition={};try{t(!1),e()}finally{Ft=n,wd.transition=i}}function Cv(){return Ui().memoizedState}function dM(t,e,n){var i=ss(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Rv(t))Pv(e,n);else if(n=uv(t,e,n,i),n!==null){var r=Jn();qi(n,t,i,r),Lv(n,e,i)}}function hM(t,e,n){var i=ss(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rv(t))Pv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zi(a,o)){var l=e.interleaved;l===null?(r.next=r,ip(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=uv(t,e,r,i),n!==null&&(r=Jn(),qi(n,t,i,r),Lv(n,e,i))}}function Rv(t){var e=t.alternate;return t===an||e!==null&&e===an}function Pv(t,e){Xa=mu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Lv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gf(t,n)}}var gu={readContext:Di,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},fM={readContext:Di,useCallback:function(t,e){return ir().memoizedState=[t,e===void 0?null:e],t},useContext:Di,useEffect:Vm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4194308,4,wv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wc(4,2,t,e)},useMemo:function(t,e){var n=ir();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ir();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=dM.bind(null,an,t),[i.memoizedState,t]},useRef:function(t){var e=ir();return t={current:t},e.memoizedState=t},useState:Hm,useDebugValue:hp,useDeferredValue:function(t){return ir().memoizedState=t},useTransition:function(){var t=Hm(!1),e=t[0];return t=uM.bind(null,t[1]),ir().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=an,r=ir();if(tn){if(n===void 0)throw Error(Te(407));n=n()}else{if(n=e(),Rn===null)throw Error(Te(349));Bs&30||mv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Vm(xv.bind(null,i,s,t),[t]),i.flags|=2048,_l(9,gv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ir(),e=Rn.identifierPrefix;if(tn){var n=Tr,i=br;n=(i&~(1<<32-Yi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pM={readContext:Di,useCallback:bv,useContext:Di,useEffect:dp,useImperativeHandle:Ev,useInsertionEffect:Sv,useLayoutEffect:Mv,useMemo:Tv,useReducer:Ed,useRef:yv,useState:function(){return Ed(vl)},useDebugValue:hp,useDeferredValue:function(t){var e=Ui();return Av(e,Sn.memoizedState,t)},useTransition:function(){var t=Ed(vl)[0],e=Ui().memoizedState;return[t,e]},useMutableSource:fv,useSyncExternalStore:pv,useId:Cv,unstable_isNewReconciler:!1},mM={readContext:Di,useCallback:bv,useContext:Di,useEffect:dp,useImperativeHandle:Ev,useInsertionEffect:Sv,useLayoutEffect:Mv,useMemo:Tv,useReducer:bd,useRef:yv,useState:function(){return bd(vl)},useDebugValue:hp,useDeferredValue:function(t){var e=Ui();return Sn===null?e.memoizedState=t:Av(e,Sn.memoizedState,t)},useTransition:function(){var t=bd(vl)[0],e=Ui().memoizedState;return[t,e]},useMutableSource:fv,useSyncExternalStore:pv,useId:Cv,unstable_isNewReconciler:!1};function Gi(t,e){if(t&&t.defaultProps){e=cn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:cn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bu={isMounted:function(t){return(t=t._reactInternals)?Ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jn(),r=ss(t),s=Cr(i,r);s.payload=e,n!=null&&(s.callback=n),e=is(t,s,r),e!==null&&(qi(e,t,r,i),Vc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jn(),r=ss(t),s=Cr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=is(t,s,r),e!==null&&(qi(e,t,r,i),Vc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jn(),i=ss(t),r=Cr(n,i);r.tag=2,e!=null&&(r.callback=e),e=is(t,r,i),e!==null&&(qi(e,t,i,n),Vc(e,t,i))}};function Gm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!dl(n,i)||!dl(r,s):!0}function Nv(t,e,n){var i=!1,r=hs,s=e.contextType;return typeof s=="object"&&s!==null?s=Di(s):(r=fi(e)?ks:Xn.current,i=e.contextTypes,s=(i=i!=null)?Zo(t,r):hs),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Bu.enqueueReplaceState(e,e.state,null)}function ef(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},rp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Di(s):(s=fi(e)?ks:Xn.current,r.context=Zo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bu.enqueueReplaceState(r,r.state,null),fu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ea(t,e){try{var n="",i=e;do n+=Gy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Td(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function tf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gM=typeof WeakMap=="function"?WeakMap:Map;function Iv(t,e,n){n=Cr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){vu||(vu=!0,hf=i),tf(t,e)},n}function Dv(t,e,n){n=Cr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){tf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){tf(t,e),typeof i!="function"&&(rs===null?rs=new Set([this]):rs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new gM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=PM.bind(null,t,e,n),e.then(t,t))}function Xm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $m(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cr(-1,1),e.tag=2,is(n,e,1))),n.lanes|=1),t)}var xM=Dr.ReactCurrentOwner,di=!1;function qn(t,e,n,i){e.child=t===null?cv(e,null,n,i):Jo(e,t.child,n,i)}function Ym(t,e,n,i,r){n=n.render;var s=e.ref;return jo(e,r),i=cp(t,e,n,i,s,r),n=up(),t!==null&&!di?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Nr(t,e,r)):(tn&&n&&Kf(e),e.flags|=1,qn(t,e,i,r),e.child)}function qm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!yp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Uv(t,e,s,i,r)):(t=Yc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:dl,n(o,i)&&t.ref===e.ref)return Nr(t,e,r)}return e.flags|=1,t=os(s,i),t.ref=e.ref,t.return=e,e.child=t}function Uv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(dl(s,i)&&t.ref===e.ref)if(di=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(di=!0);else return e.lanes=t.lanes,Nr(t,e,r)}return nf(t,e,n,i,r)}function Ov(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(Fo,vi),vi|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Xt(Fo,vi),vi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Xt(Fo,vi),vi|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Xt(Fo,vi),vi|=i;return qn(t,e,r,n),e.child}function Fv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nf(t,e,n,i,r){var s=fi(n)?ks:Xn.current;return s=Zo(e,s),jo(e,r),n=cp(t,e,n,i,s,r),i=up(),t!==null&&!di?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Nr(t,e,r)):(tn&&i&&Kf(e),e.flags|=1,qn(t,e,n,r),e.child)}function Zm(t,e,n,i,r){if(fi(n)){var s=!0;lu(e)}else s=!1;if(jo(e,r),e.stateNode===null)jc(t,e),Nv(e,n,i),ef(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Di(c):(c=fi(n)?ks:Xn.current,c=Zo(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Wm(e,o,i,c),jr=!1;var f=e.memoizedState;o.state=f,fu(e,i,o,r),l=e.memoizedState,a!==i||f!==l||hi.current||jr?(typeof u=="function"&&(Qh(e,n,u,i),l=e.memoizedState),(a=jr||Gm(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,dv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gi(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Di(l):(l=fi(n)?ks:Xn.current,l=Zo(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Wm(e,o,i,l),jr=!1,f=e.memoizedState,o.state=f,fu(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||hi.current||jr?(typeof m=="function"&&(Qh(e,n,m,i),x=e.memoizedState),(c=jr||Gm(e,n,c,i,f,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return rf(t,e,n,i,s,r)}function rf(t,e,n,i,r,s){Fv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Um(e,n,!1),Nr(t,e,s);i=e.stateNode,xM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Jo(e,t.child,null,s),e.child=Jo(e,null,a,s)):qn(t,e,a,s),e.memoizedState=i.state,r&&Um(e,n,!0),e.child}function kv(t){var e=t.stateNode;e.pendingContext?Dm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dm(t,e.context,!1),sp(t,e.containerInfo)}function Km(t,e,n,i,r){return Ko(),Qf(r),e.flags|=256,qn(t,e,n,i),e.child}var sf={dehydrated:null,treeContext:null,retryLane:0};function of(t){return{baseLanes:t,cachePool:null,transitions:null}}function zv(t,e,n){var i=e.pendingProps,r=sn.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Xt(sn,r&1),t===null)return Kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gu(o,i,0,null),t=Ds(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=of(n),e.memoizedState=sf,t):fp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return vM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=os(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=os(a,s):(s=Ds(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?of(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sf,i}return s=t.child,t=s.sibling,i=os(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function fp(t,e){return e=Gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tc(t,e,n,i){return i!==null&&Qf(i),Jo(e,t.child,null,n),t=fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Td(Error(Te(422))),tc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gu({mode:"visible",children:i.children},r,0,null),s=Ds(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Jo(e,t.child,null,o),e.child.memoizedState=of(o),e.memoizedState=sf,s);if(!(e.mode&1))return tc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Te(419)),i=Td(s,i,void 0),tc(t,e,o,i)}if(a=(o&t.childLanes)!==0,di||a){if(i=Rn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Lr(t,r),qi(i,t,r,-1))}return _p(),i=Td(Error(Te(421))),tc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=LM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yi=ns(r.nextSibling),Si=e,tn=!0,Xi=null,t!==null&&(Ai[Ci++]=br,Ai[Ci++]=Tr,Ai[Ci++]=zs,br=t.id,Tr=t.overflow,zs=e),e=fp(e,i.children),e.flags|=4096,e)}function Jm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Jh(t.return,e,n)}function Ad(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Bv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qn(t,e,i.children,n),i=sn.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jm(t,n,e);else if(t.tag===19)Jm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Xt(sn,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&pu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ad(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&pu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ad(e,!0,n,null,s);break;case"together":Ad(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Te(153));if(e.child!==null){for(t=e.child,n=os(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=os(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _M(t,e,n){switch(e.tag){case 3:kv(e),Ko();break;case 5:hv(e);break;case 1:fi(e.type)&&lu(e);break;case 4:sp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Xt(du,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Xt(sn,sn.current&1),e.flags|=128,null):n&e.child.childLanes?zv(t,e,n):(Xt(sn,sn.current&1),t=Nr(t,e,n),t!==null?t.sibling:null);Xt(sn,sn.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Bv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Xt(sn,sn.current),i)break;return null;case 22:case 23:return e.lanes=0,Ov(t,e,n)}return Nr(t,e,n)}var Hv,af,Vv,Gv;Hv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};af=function(){};Vv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ns(cr.current);var s=null;switch(n){case"input":r=Ch(t,r),i=Ch(t,i),s=[];break;case"select":r=cn({},r,{value:void 0}),i=cn({},i,{value:void 0}),s=[];break;case"textarea":r=Lh(t,r),i=Lh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ou)}Ih(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(rl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(rl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&qt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Gv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ba(t,e){if(!tn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function yM(t,e,n){var i=e.pendingProps;switch(Jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(e),null;case 1:return fi(e.type)&&au(),Vn(e),null;case 3:return i=e.stateNode,Qo(),Kt(hi),Kt(Xn),ap(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ql(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xi!==null&&(mf(Xi),Xi=null))),af(t,e),Vn(e),null;case 5:op(e);var r=Ns(gl.current);if(n=e.type,t!==null&&e.stateNode!=null)Vv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Te(166));return Vn(e),null}if(t=Ns(cr.current),Ql(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[sr]=e,i[pl]=s,t=(e.mode&1)!==0,n){case"dialog":qt("cancel",i),qt("close",i);break;case"iframe":case"object":case"embed":qt("load",i);break;case"video":case"audio":for(r=0;r<za.length;r++)qt(za[r],i);break;case"source":qt("error",i);break;case"img":case"image":case"link":qt("error",i),qt("load",i);break;case"details":qt("toggle",i);break;case"input":am(i,s),qt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},qt("invalid",i);break;case"textarea":cm(i,s),qt("invalid",i)}Ih(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Jl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Jl(i.textContent,a,t),r=["children",""+a]):rl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&qt("scroll",i)}switch(n){case"input":Wl(i),lm(i,s,!0);break;case"textarea":Wl(i),um(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ou)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[sr]=e,t[pl]=i,Hv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dh(n,i),n){case"dialog":qt("cancel",t),qt("close",t),r=i;break;case"iframe":case"object":case"embed":qt("load",t),r=i;break;case"video":case"audio":for(r=0;r<za.length;r++)qt(za[r],t);r=i;break;case"source":qt("error",t),r=i;break;case"img":case"image":case"link":qt("error",t),qt("load",t),r=i;break;case"details":qt("toggle",t),r=i;break;case"input":am(t,i),r=Ch(t,i),qt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=cn({},i,{value:void 0}),qt("invalid",t);break;case"textarea":cm(t,i),r=Lh(t,i),qt("invalid",t);break;default:r=i}Ih(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?yx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&sl(t,l):typeof l=="number"&&sl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(rl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&qt("scroll",t):l!=null&&Ff(t,s,l,o))}switch(n){case"input":Wl(t),lm(t,i,!1);break;case"textarea":Wl(t),um(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ds(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ho(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ho(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ou)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vn(e),null;case 6:if(t&&e.stateNode!=null)Gv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Te(166));if(n=Ns(gl.current),Ns(cr.current),Ql(e)){if(i=e.stateNode,n=e.memoizedProps,i[sr]=e,(s=i.nodeValue!==n)&&(t=Si,t!==null))switch(t.tag){case 3:Jl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[sr]=e,e.stateNode=i}return Vn(e),null;case 13:if(Kt(sn),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(tn&&yi!==null&&e.mode&1&&!(e.flags&128))av(),Ko(),e.flags|=98560,s=!1;else if(s=Ql(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Te(317));s[sr]=e}else Ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vn(e),s=!1}else Xi!==null&&(mf(Xi),Xi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||sn.current&1?wn===0&&(wn=3):_p())),e.updateQueue!==null&&(e.flags|=4),Vn(e),null);case 4:return Qo(),af(t,e),t===null&&hl(e.stateNode.containerInfo),Vn(e),null;case 10:return np(e.type._context),Vn(e),null;case 17:return fi(e.type)&&au(),Vn(e),null;case 19:if(Kt(sn),s=e.memoizedState,s===null)return Vn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ba(s,!1);else{if(wn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pu(t),o!==null){for(e.flags|=128,ba(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Xt(sn,sn.current&1|2),e.child}t=t.sibling}s.tail!==null&&dn()>ta&&(e.flags|=128,i=!0,ba(s,!1),e.lanes=4194304)}else{if(!i)if(t=pu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ba(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!tn)return Vn(e),null}else 2*dn()-s.renderingStartTime>ta&&n!==1073741824&&(e.flags|=128,i=!0,ba(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=dn(),e.sibling=null,n=sn.current,Xt(sn,i?n&1|2:n&1),e):(Vn(e),null);case 22:case 23:return vp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vi&1073741824&&(Vn(e),e.subtreeFlags&6&&(e.flags|=8192)):Vn(e),null;case 24:return null;case 25:return null}throw Error(Te(156,e.tag))}function SM(t,e){switch(Jf(e),e.tag){case 1:return fi(e.type)&&au(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qo(),Kt(hi),Kt(Xn),ap(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return op(e),null;case 13:if(Kt(sn),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Te(340));Ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Kt(sn),null;case 4:return Qo(),null;case 10:return np(e.type._context),null;case 22:case 23:return vp(),null;case 24:return null;default:return null}}var nc=!1,jn=!1,MM=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Oo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){un(t,e,i)}else n.current=null}function lf(t,e,n){try{n()}catch(i){un(t,e,i)}}var Qm=!1;function wM(t,e){if(Wh=iu,t=Yx(),Zf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jh={focusedElem:t,selectionRange:n},iu=!1,Ke=e;Ke!==null;)if(e=Ke,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ke=t;else for(;Ke!==null;){e=Ke;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var M=x.memoizedProps,g=x.memoizedState,d=e.stateNode,p=d.getSnapshotBeforeUpdate(e.elementType===e.type?M:Gi(e.type,M),g);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Te(163))}}catch(y){un(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ke=t;break}Ke=e.return}return x=Qm,Qm=!1,x}function $a(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&lf(e,n,s)}r=r.next}while(r!==i)}}function Hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wv(t){var e=t.alternate;e!==null&&(t.alternate=null,Wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sr],delete e[pl],delete e[Yh],delete e[sM],delete e[oM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jv(t){return t.tag===5||t.tag===3||t.tag===4}function eg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ou));else if(i!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}function df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(df(t,e,n),t=t.sibling;t!==null;)df(t,e,n),t=t.sibling}var Dn=null,Wi=!1;function kr(t,e,n){for(n=n.child;n!==null;)Xv(t,e,n),n=n.sibling}function Xv(t,e,n){if(lr&&typeof lr.onCommitFiberUnmount=="function")try{lr.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:jn||Oo(n,e);case 6:var i=Dn,r=Wi;Dn=null,kr(t,e,n),Dn=i,Wi=r,Dn!==null&&(Wi?(t=Dn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dn.removeChild(n.stateNode));break;case 18:Dn!==null&&(Wi?(t=Dn,n=n.stateNode,t.nodeType===8?yd(t.parentNode,n):t.nodeType===1&&yd(t,n),cl(t)):yd(Dn,n.stateNode));break;case 4:i=Dn,r=Wi,Dn=n.stateNode.containerInfo,Wi=!0,kr(t,e,n),Dn=i,Wi=r;break;case 0:case 11:case 14:case 15:if(!jn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lf(n,e,o),r=r.next}while(r!==i)}kr(t,e,n);break;case 1:if(!jn&&(Oo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){un(n,e,a)}kr(t,e,n);break;case 21:kr(t,e,n);break;case 22:n.mode&1?(jn=(i=jn)||n.memoizedState!==null,kr(t,e,n),jn=i):kr(t,e,n);break;default:kr(t,e,n)}}function tg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new MM),e.forEach(function(i){var r=NM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dn=a.stateNode,Wi=!1;break e;case 3:Dn=a.stateNode.containerInfo,Wi=!0;break e;case 4:Dn=a.stateNode.containerInfo,Wi=!0;break e}a=a.return}if(Dn===null)throw Error(Te(160));Xv(s,o,r),Dn=null,Wi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){un(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$v(e,t),e=e.sibling}function $v(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zi(e,t),nr(t),i&4){try{$a(3,t,t.return),Hu(3,t)}catch(M){un(t,t.return,M)}try{$a(5,t,t.return)}catch(M){un(t,t.return,M)}}break;case 1:zi(e,t),nr(t),i&512&&n!==null&&Oo(n,n.return);break;case 5:if(zi(e,t),nr(t),i&512&&n!==null&&Oo(n,n.return),t.flags&32){var r=t.stateNode;try{sl(r,"")}catch(M){un(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&mx(r,s),Dh(a,o);var c=Dh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?yx(r,h):u==="dangerouslySetInnerHTML"?vx(r,h):u==="children"?sl(r,h):Ff(r,u,h,c)}switch(a){case"input":Rh(r,s);break;case"textarea":gx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ho(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ho(r,!!s.multiple,s.defaultValue,!0):Ho(r,!!s.multiple,s.multiple?[]:"",!1))}r[pl]=s}catch(M){un(t,t.return,M)}}break;case 6:if(zi(e,t),nr(t),i&4){if(t.stateNode===null)throw Error(Te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){un(t,t.return,M)}}break;case 3:if(zi(e,t),nr(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{cl(e.containerInfo)}catch(M){un(t,t.return,M)}break;case 4:zi(e,t),nr(t);break;case 13:zi(e,t),nr(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(gp=dn())),i&4&&tg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(jn=(c=jn)||u,zi(e,t),jn=c):zi(e,t),nr(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ke=t,u=t.child;u!==null;){for(h=Ke=u;Ke!==null;){switch(f=Ke,m=f.child,f.tag){case 0:case 11:case 14:case 15:$a(4,f,f.return);break;case 1:Oo(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(M){un(i,n,M)}}break;case 5:Oo(f,f.return);break;case 22:if(f.memoizedState!==null){ig(h);continue}}m!==null?(m.return=f,Ke=m):ig(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_x("display",o))}catch(M){un(t,t.return,M)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(M){un(t,t.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:zi(e,t),nr(t),i&4&&tg(t);break;case 21:break;default:zi(e,t),nr(t)}}function nr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jv(n)){var i=n;break e}n=n.return}throw Error(Te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(sl(r,""),i.flags&=-33);var s=eg(t);df(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=eg(t);uf(t,a,o);break;default:throw Error(Te(161))}}catch(l){un(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function EM(t,e,n){Ke=t,Yv(t)}function Yv(t,e,n){for(var i=(t.mode&1)!==0;Ke!==null;){var r=Ke,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||nc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jn;a=nc;var c=jn;if(nc=o,(jn=l)&&!c)for(Ke=r;Ke!==null;)o=Ke,l=o.child,o.tag===22&&o.memoizedState!==null?rg(r):l!==null?(l.return=o,Ke=l):rg(r);for(;s!==null;)Ke=s,Yv(s),s=s.sibling;Ke=r,nc=a,jn=c}ng(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ke=s):ng(t)}}function ng(t){for(;Ke!==null;){var e=Ke;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jn||Hu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&cl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Te(163))}jn||e.flags&512&&cf(e)}catch(f){un(e,e.return,f)}}if(e===t){Ke=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ke=n;break}Ke=e.return}}function ig(t){for(;Ke!==null;){var e=Ke;if(e===t){Ke=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ke=n;break}Ke=e.return}}function rg(t){for(;Ke!==null;){var e=Ke;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hu(4,e)}catch(l){un(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){un(e,r,l)}}var s=e.return;try{cf(e)}catch(l){un(e,s,l)}break;case 5:var o=e.return;try{cf(e)}catch(l){un(e,o,l)}}}catch(l){un(e,e.return,l)}if(e===t){Ke=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ke=a;break}Ke=e.return}}var bM=Math.ceil,xu=Dr.ReactCurrentDispatcher,pp=Dr.ReactCurrentOwner,Ni=Dr.ReactCurrentBatchConfig,Nt=0,Rn=null,xn=null,On=0,vi=0,Fo=ms(0),wn=0,yl=null,Hs=0,Vu=0,mp=0,Ya=null,li=null,gp=0,ta=1/0,wr=null,vu=!1,hf=null,rs=null,ic=!1,Zr=null,_u=0,qa=0,ff=null,Xc=-1,$c=0;function Jn(){return Nt&6?dn():Xc!==-1?Xc:Xc=dn()}function ss(t){return t.mode&1?Nt&2&&On!==0?On&-On:lM.transition!==null?($c===0&&($c=Nx()),$c):(t=Ft,t!==0||(t=window.event,t=t===void 0?16:zx(t.type)),t):1}function qi(t,e,n,i){if(50<qa)throw qa=0,ff=null,Error(Te(185));Rl(t,n,i),(!(Nt&2)||t!==Rn)&&(t===Rn&&(!(Nt&2)&&(Vu|=n),wn===4&&Yr(t,On)),pi(t,i),n===1&&Nt===0&&!(e.mode&1)&&(ta=dn()+500,ku&&gs()))}function pi(t,e){var n=t.callbackNode;lS(t,e);var i=nu(t,t===Rn?On:0);if(i===0)n!==null&&fm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&fm(n),e===1)t.tag===0?aM(sg.bind(null,t)):rv(sg.bind(null,t)),iM(function(){!(Nt&6)&&gs()}),n=null;else{switch(Ix(i)){case 1:n=Vf;break;case 4:n=Px;break;case 16:n=tu;break;case 536870912:n=Lx;break;default:n=tu}n=n_(n,qv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qv(t,e){if(Xc=-1,$c=0,Nt&6)throw Error(Te(327));var n=t.callbackNode;if(Xo()&&t.callbackNode!==n)return null;var i=nu(t,t===Rn?On:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=yu(t,i);else{e=i;var r=Nt;Nt|=2;var s=Kv();(Rn!==t||On!==e)&&(wr=null,ta=dn()+500,Is(t,e));do try{CM();break}catch(a){Zv(t,a)}while(!0);tp(),xu.current=s,Nt=r,xn!==null?e=0:(Rn=null,On=0,e=wn)}if(e!==0){if(e===2&&(r=zh(t),r!==0&&(i=r,e=pf(t,r))),e===1)throw n=yl,Is(t,0),Yr(t,i),pi(t,dn()),n;if(e===6)Yr(t,i);else{if(r=t.current.alternate,!(i&30)&&!TM(r)&&(e=yu(t,i),e===2&&(s=zh(t),s!==0&&(i=s,e=pf(t,s))),e===1))throw n=yl,Is(t,0),Yr(t,i),pi(t,dn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Te(345));case 2:bs(t,li,wr);break;case 3:if(Yr(t,i),(i&130023424)===i&&(e=gp+500-dn(),10<e)){if(nu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$h(bs.bind(null,t,li,wr),e);break}bs(t,li,wr);break;case 4:if(Yr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=dn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*bM(i/1960))-i,10<i){t.timeoutHandle=$h(bs.bind(null,t,li,wr),i);break}bs(t,li,wr);break;case 5:bs(t,li,wr);break;default:throw Error(Te(329))}}}return pi(t,dn()),t.callbackNode===n?qv.bind(null,t):null}function pf(t,e){var n=Ya;return t.current.memoizedState.isDehydrated&&(Is(t,e).flags|=256),t=yu(t,e),t!==2&&(e=li,li=n,e!==null&&mf(e)),t}function mf(t){li===null?li=t:li.push.apply(li,t)}function TM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yr(t,e){for(e&=~mp,e&=~Vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yi(e),i=1<<n;t[n]=-1,e&=~i}}function sg(t){if(Nt&6)throw Error(Te(327));Xo();var e=nu(t,0);if(!(e&1))return pi(t,dn()),null;var n=yu(t,e);if(t.tag!==0&&n===2){var i=zh(t);i!==0&&(e=i,n=pf(t,i))}if(n===1)throw n=yl,Is(t,0),Yr(t,e),pi(t,dn()),n;if(n===6)throw Error(Te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,bs(t,li,wr),pi(t,dn()),null}function xp(t,e){var n=Nt;Nt|=1;try{return t(e)}finally{Nt=n,Nt===0&&(ta=dn()+500,ku&&gs())}}function Vs(t){Zr!==null&&Zr.tag===0&&!(Nt&6)&&Xo();var e=Nt;Nt|=1;var n=Ni.transition,i=Ft;try{if(Ni.transition=null,Ft=1,t)return t()}finally{Ft=i,Ni.transition=n,Nt=e,!(Nt&6)&&gs()}}function vp(){vi=Fo.current,Kt(Fo)}function Is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nM(n)),xn!==null)for(n=xn.return;n!==null;){var i=n;switch(Jf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&au();break;case 3:Qo(),Kt(hi),Kt(Xn),ap();break;case 5:op(i);break;case 4:Qo();break;case 13:Kt(sn);break;case 19:Kt(sn);break;case 10:np(i.type._context);break;case 22:case 23:vp()}n=n.return}if(Rn=t,xn=t=os(t.current,null),On=vi=e,wn=0,yl=null,mp=Vu=Hs=0,li=Ya=null,Ls!==null){for(e=0;e<Ls.length;e++)if(n=Ls[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ls=null}return t}function Zv(t,e){do{var n=xn;try{if(tp(),Gc.current=gu,mu){for(var i=an.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}mu=!1}if(Bs=0,Cn=Sn=an=null,Xa=!1,xl=0,pp.current=null,n===null||n.return===null){wn=1,yl=e,xn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=On,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Xm(o);if(m!==null){m.flags&=-257,$m(m,o,a,s,e),m.mode&1&&jm(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var M=new Set;M.add(l),e.updateQueue=M}else x.add(l);break e}else{if(!(e&1)){jm(s,c,e),_p();break e}l=Error(Te(426))}}else if(tn&&a.mode&1){var g=Xm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),$m(g,o,a,s,e),Qf(ea(l,a));break e}}s=l=ea(l,a),wn!==4&&(wn=2),Ya===null?Ya=[s]:Ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Iv(s,l,e);zm(s,d);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(rs===null||!rs.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Dv(s,a,e);zm(s,y);break e}}s=s.return}while(s!==null)}Qv(n)}catch(N){e=N,xn===n&&n!==null&&(xn=n=n.return);continue}break}while(!0)}function Kv(){var t=xu.current;return xu.current=gu,t===null?gu:t}function _p(){(wn===0||wn===3||wn===2)&&(wn=4),Rn===null||!(Hs&268435455)&&!(Vu&268435455)||Yr(Rn,On)}function yu(t,e){var n=Nt;Nt|=2;var i=Kv();(Rn!==t||On!==e)&&(wr=null,Is(t,e));do try{AM();break}catch(r){Zv(t,r)}while(!0);if(tp(),Nt=n,xu.current=i,xn!==null)throw Error(Te(261));return Rn=null,On=0,wn}function AM(){for(;xn!==null;)Jv(xn)}function CM(){for(;xn!==null&&!Qy();)Jv(xn)}function Jv(t){var e=t_(t.alternate,t,vi);t.memoizedProps=t.pendingProps,e===null?Qv(t):xn=e,pp.current=null}function Qv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=SM(n,e),n!==null){n.flags&=32767,xn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wn=6,xn=null;return}}else if(n=yM(n,e,vi),n!==null){xn=n;return}if(e=e.sibling,e!==null){xn=e;return}xn=e=t}while(e!==null);wn===0&&(wn=5)}function bs(t,e,n){var i=Ft,r=Ni.transition;try{Ni.transition=null,Ft=1,RM(t,e,n,i)}finally{Ni.transition=r,Ft=i}return null}function RM(t,e,n,i){do Xo();while(Zr!==null);if(Nt&6)throw Error(Te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cS(t,s),t===Rn&&(xn=Rn=null,On=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ic||(ic=!0,n_(tu,function(){return Xo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ni.transition,Ni.transition=null;var o=Ft;Ft=1;var a=Nt;Nt|=4,pp.current=null,wM(t,n),$v(n,t),qS(jh),iu=!!Wh,jh=Wh=null,t.current=n,EM(n),eS(),Nt=a,Ft=o,Ni.transition=s}else t.current=n;if(ic&&(ic=!1,Zr=t,_u=r),s=t.pendingLanes,s===0&&(rs=null),iS(n.stateNode),pi(t,dn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(vu)throw vu=!1,t=hf,hf=null,t;return _u&1&&t.tag!==0&&Xo(),s=t.pendingLanes,s&1?t===ff?qa++:(qa=0,ff=t):qa=0,gs(),null}function Xo(){if(Zr!==null){var t=Ix(_u),e=Ni.transition,n=Ft;try{if(Ni.transition=null,Ft=16>t?16:t,Zr===null)var i=!1;else{if(t=Zr,Zr=null,_u=0,Nt&6)throw Error(Te(331));var r=Nt;for(Nt|=4,Ke=t.current;Ke!==null;){var s=Ke,o=s.child;if(Ke.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ke=c;Ke!==null;){var u=Ke;switch(u.tag){case 0:case 11:case 15:$a(8,u,s)}var h=u.child;if(h!==null)h.return=u,Ke=h;else for(;Ke!==null;){u=Ke;var f=u.sibling,m=u.return;if(Wv(u),u===c){Ke=null;break}if(f!==null){f.return=m,Ke=f;break}Ke=m}}}var x=s.alternate;if(x!==null){var M=x.child;if(M!==null){x.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Ke=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ke=o;else e:for(;Ke!==null;){if(s=Ke,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$a(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ke=d;break e}Ke=s.return}}var p=t.current;for(Ke=p;Ke!==null;){o=Ke;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ke=v;else e:for(o=p;Ke!==null;){if(a=Ke,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hu(9,a)}}catch(N){un(a,a.return,N)}if(a===o){Ke=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ke=y;break e}Ke=a.return}}if(Nt=r,gs(),lr&&typeof lr.onPostCommitFiberRoot=="function")try{lr.onPostCommitFiberRoot(Iu,t)}catch{}i=!0}return i}finally{Ft=n,Ni.transition=e}}return!1}function og(t,e,n){e=ea(n,e),e=Iv(t,e,1),t=is(t,e,1),e=Jn(),t!==null&&(Rl(t,1,e),pi(t,e))}function un(t,e,n){if(t.tag===3)og(t,t,n);else for(;e!==null;){if(e.tag===3){og(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rs===null||!rs.has(i))){t=ea(n,t),t=Dv(e,t,1),e=is(e,t,1),t=Jn(),e!==null&&(Rl(e,1,t),pi(e,t));break}}e=e.return}}function PM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jn(),t.pingedLanes|=t.suspendedLanes&n,Rn===t&&(On&n)===n&&(wn===4||wn===3&&(On&130023424)===On&&500>dn()-gp?Is(t,0):mp|=n),pi(t,e)}function e_(t,e){e===0&&(t.mode&1?(e=$l,$l<<=1,!($l&130023424)&&($l=4194304)):e=1);var n=Jn();t=Lr(t,e),t!==null&&(Rl(t,e,n),pi(t,n))}function LM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),e_(t,n)}function NM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Te(314))}i!==null&&i.delete(e),e_(t,n)}var t_;t_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hi.current)di=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return di=!1,_M(t,e,n);di=!!(t.flags&131072)}else di=!1,tn&&e.flags&1048576&&sv(e,uu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;jc(t,e),t=e.pendingProps;var r=Zo(e,Xn.current);jo(e,n),r=cp(null,e,i,t,r,n);var s=up();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fi(i)?(s=!0,lu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rp(e),r.updater=Bu,e.stateNode=r,r._reactInternals=e,ef(e,i,t,n),e=rf(null,e,i,!0,s,n)):(e.tag=0,tn&&s&&Kf(e),qn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(jc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=DM(i),t=Gi(i,t),r){case 0:e=nf(null,e,i,t,n);break e;case 1:e=Zm(null,e,i,t,n);break e;case 11:e=Ym(null,e,i,t,n);break e;case 14:e=qm(null,e,i,Gi(i.type,t),n);break e}throw Error(Te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),nf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),Zm(t,e,i,r,n);case 3:e:{if(kv(e),t===null)throw Error(Te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,dv(t,e),fu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ea(Error(Te(423)),e),e=Km(t,e,i,n,r);break e}else if(i!==r){r=ea(Error(Te(424)),e),e=Km(t,e,i,n,r);break e}else for(yi=ns(e.stateNode.containerInfo.firstChild),Si=e,tn=!0,Xi=null,n=cv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ko(),i===r){e=Nr(t,e,n);break e}qn(t,e,i,n)}e=e.child}return e;case 5:return hv(e),t===null&&Kh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Xh(i,r)?o=null:s!==null&&Xh(i,s)&&(e.flags|=32),Fv(t,e),qn(t,e,o,n),e.child;case 6:return t===null&&Kh(e),null;case 13:return zv(t,e,n);case 4:return sp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Jo(e,null,i,n):qn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),Ym(t,e,i,r,n);case 7:return qn(t,e,e.pendingProps,n),e.child;case 8:return qn(t,e,e.pendingProps.children,n),e.child;case 12:return qn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Xt(du,i._currentValue),i._currentValue=o,s!==null)if(Zi(s.value,o)){if(s.children===r.children&&!hi.current){e=Nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Cr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Jh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Jh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,jo(e,n),r=Di(r),i=i(r),e.flags|=1,qn(t,e,i,n),e.child;case 14:return i=e.type,r=Gi(i,e.pendingProps),r=Gi(i.type,r),qm(t,e,i,r,n);case 15:return Uv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),jc(t,e),e.tag=1,fi(i)?(t=!0,lu(e)):t=!1,jo(e,n),Nv(e,i,r),ef(e,i,r,n),rf(null,e,i,!0,t,n);case 19:return Bv(t,e,n);case 22:return Ov(t,e,n)}throw Error(Te(156,e.tag))};function n_(t,e){return Rx(t,e)}function IM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Li(t,e,n,i){return new IM(t,e,n,i)}function yp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DM(t){if(typeof t=="function")return yp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zf)return 11;if(t===Bf)return 14}return 2}function os(t,e){var n=t.alternate;return n===null?(n=Li(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")yp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ao:return Ds(n.children,r,s,e);case kf:o=8,r|=8;break;case Eh:return t=Li(12,n,e,r|2),t.elementType=Eh,t.lanes=s,t;case bh:return t=Li(13,n,e,r),t.elementType=bh,t.lanes=s,t;case Th:return t=Li(19,n,e,r),t.elementType=Th,t.lanes=s,t;case hx:return Gu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ux:o=10;break e;case dx:o=9;break e;case zf:o=11;break e;case Bf:o=14;break e;case Wr:o=16,i=null;break e}throw Error(Te(130,t==null?t:typeof t,""))}return e=Li(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ds(t,e,n,i){return t=Li(7,t,i,e),t.lanes=n,t}function Gu(t,e,n,i){return t=Li(22,t,i,e),t.elementType=hx,t.lanes=n,t.stateNode={isHidden:!1},t}function Cd(t,e,n){return t=Li(6,t,null,e),t.lanes=n,t}function Rd(t,e,n){return e=Li(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function UM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cd(0),this.expirationTimes=cd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sp(t,e,n,i,r,s,o,a,l){return t=new UM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Li(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rp(s),t}function OM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:To,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function i_(t){if(!t)return hs;t=t._reactInternals;e:{if(Ys(t)!==t||t.tag!==1)throw Error(Te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Te(171))}if(t.tag===1){var n=t.type;if(fi(n))return iv(t,n,e)}return e}function r_(t,e,n,i,r,s,o,a,l){return t=Sp(n,i,!0,t,r,s,o,a,l),t.context=i_(null),n=t.current,i=Jn(),r=ss(n),s=Cr(i,r),s.callback=e??null,is(n,s,r),t.current.lanes=r,Rl(t,r,i),pi(t,i),t}function Wu(t,e,n,i){var r=e.current,s=Jn(),o=ss(r);return n=i_(n),e.context===null?e.context=n:e.pendingContext=n,e=Cr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=is(r,e,o),t!==null&&(qi(t,r,o,s),Vc(t,r,o)),o}function Su(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ag(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mp(t,e){ag(t,e),(t=t.alternate)&&ag(t,e)}function FM(){return null}var s_=typeof reportError=="function"?reportError:function(t){console.error(t)};function wp(t){this._internalRoot=t}ju.prototype.render=wp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Te(409));Wu(t,e,null,null)};ju.prototype.unmount=wp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vs(function(){Wu(null,t,null,null)}),e[Pr]=null}};function ju(t){this._internalRoot=t}ju.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ox();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$r.length&&e!==0&&e<$r[n].priority;n++);$r.splice(n,0,t),n===0&&kx(t)}};function Ep(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lg(){}function kM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Su(o);s.call(c)}}var o=r_(e,i,t,0,null,!1,!1,"",lg);return t._reactRootContainer=o,t[Pr]=o.current,hl(t.nodeType===8?t.parentNode:t),Vs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Su(l);a.call(c)}}var l=Sp(t,0,!1,null,null,!1,!1,"",lg);return t._reactRootContainer=l,t[Pr]=l.current,hl(t.nodeType===8?t.parentNode:t),Vs(function(){Wu(e,l,n,i)}),l}function $u(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Su(o);a.call(l)}}Wu(e,o,t,r)}else o=kM(n,e,t,r,i);return Su(o)}Dx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ka(e.pendingLanes);n!==0&&(Gf(e,n|1),pi(e,dn()),!(Nt&6)&&(ta=dn()+500,gs()))}break;case 13:Vs(function(){var i=Lr(t,1);if(i!==null){var r=Jn();qi(i,t,1,r)}}),Mp(t,1)}};Wf=function(t){if(t.tag===13){var e=Lr(t,134217728);if(e!==null){var n=Jn();qi(e,t,134217728,n)}Mp(t,134217728)}};Ux=function(t){if(t.tag===13){var e=ss(t),n=Lr(t,e);if(n!==null){var i=Jn();qi(n,t,e,i)}Mp(t,e)}};Ox=function(){return Ft};Fx=function(t,e){var n=Ft;try{return Ft=t,e()}finally{Ft=n}};Oh=function(t,e,n){switch(e){case"input":if(Rh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Fu(i);if(!r)throw Error(Te(90));px(i),Rh(i,r)}}}break;case"textarea":gx(t,n);break;case"select":e=n.value,e!=null&&Ho(t,!!n.multiple,e,!1)}};wx=xp;Ex=Vs;var zM={usingClientEntryPoint:!1,Events:[Ll,Lo,Fu,Sx,Mx,xp]},Ta={findFiberByHostInstance:Ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BM={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ax(t),t===null?null:t.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||FM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{Iu=rc.inject(BM),lr=rc}catch{}}wi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zM;wi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ep(e))throw Error(Te(200));return OM(t,e,null,n)};wi.createRoot=function(t,e){if(!Ep(t))throw Error(Te(299));var n=!1,i="",r=s_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Sp(t,1,!1,null,null,n,!1,i,r),t[Pr]=e.current,hl(t.nodeType===8?t.parentNode:t),new wp(e)};wi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Te(188)):(t=Object.keys(t).join(","),Error(Te(268,t)));return t=Ax(e),t=t===null?null:t.stateNode,t};wi.flushSync=function(t){return Vs(t)};wi.hydrate=function(t,e,n){if(!Xu(e))throw Error(Te(200));return $u(null,t,e,!0,n)};wi.hydrateRoot=function(t,e,n){if(!Ep(t))throw Error(Te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=s_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=r_(e,null,t,1,n??null,r,!1,s,o),t[Pr]=e.current,hl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ju(e)};wi.render=function(t,e,n){if(!Xu(e))throw Error(Te(200));return $u(null,t,e,!1,n)};wi.unmountComponentAtNode=function(t){if(!Xu(t))throw Error(Te(40));return t._reactRootContainer?(Vs(function(){$u(null,null,t,!1,function(){t._reactRootContainer=null,t[Pr]=null})}),!0):!1};wi.unstable_batchedUpdates=xp;wi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Xu(n))throw Error(Te(200));if(t==null||t._reactInternals===void 0)throw Error(Te(38));return $u(t,e,n,!1,i)};wi.version="18.3.1-next-f1338f8080-20240426";function o_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o_)}catch(t){console.error(t)}}o_(),ox.exports=wi;var HM=ox.exports,a_,cg=HM;a_=cg.createRoot,cg.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bp="160",VM=0,ug=1,GM=2,l_=1,c_=2,Mr=3,fs=0,Qn=1,ui=2,as=0,$o=1,dg=2,hg=3,fg=4,WM=5,As=100,jM=101,XM=102,pg=103,mg=104,$M=200,YM=201,qM=202,ZM=203,gf=204,xf=205,KM=206,JM=207,QM=208,ew=209,tw=210,nw=211,iw=212,rw=213,sw=214,ow=0,aw=1,lw=2,Mu=3,cw=4,uw=5,dw=6,hw=7,u_=0,fw=1,pw=2,ls=0,mw=1,gw=2,xw=3,d_=4,vw=5,_w=6,Tp=300,na=301,ia=302,wu=303,vf=304,Yu=306,_f=1e3,_i=1001,yf=1002,Zn=1003,gg=1004,Pd=1005,Kn=1006,yw=1007,Sl=1008,cs=1009,Sw=1010,Mw=1011,Ap=1012,h_=1013,Kr=1014,Jr=1015,Ml=1016,f_=1017,p_=1018,Us=1020,ww=1021,$i=1023,Ew=1024,bw=1025,Os=1026,ra=1027,Tw=1028,m_=1029,Aw=1030,g_=1031,x_=1033,Ld=33776,Nd=33777,Id=33778,Dd=33779,xg=35840,vg=35841,_g=35842,yg=35843,v_=36196,Sg=37492,Mg=37496,wg=37808,Eg=37809,bg=37810,Tg=37811,Ag=37812,Cg=37813,Rg=37814,Pg=37815,Lg=37816,Ng=37817,Ig=37818,Dg=37819,Ug=37820,Og=37821,Ud=36492,Fg=36494,kg=36495,Cw=36283,zg=36284,Bg=36285,Hg=36286,__=3e3,Fs=3001,Rw=3200,Pw=3201,y_=0,Lw=1,Pi="",en="srgb",Ir="srgb-linear",Cp="display-p3",qu="display-p3-linear",Eu="linear",Zt="srgb",bu="rec709",Tu="p3",io=7680,Vg=519,Nw=512,Iw=513,Dw=514,S_=515,Uw=516,Ow=517,Fw=518,kw=519,Sf=35044,Gg="300 es",Mf=1035,Ar=2e3,Au=2001;class ca{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wg=1234567;const Za=Math.PI/180,wl=180/Math.PI;function ur(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gn[t&255]+Gn[t>>8&255]+Gn[t>>16&255]+Gn[t>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[n&63|128]+Gn[n>>8&255]+"-"+Gn[n>>16&255]+Gn[n>>24&255]+Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]).toLowerCase()}function Un(t,e,n){return Math.max(e,Math.min(n,t))}function Rp(t,e){return(t%e+e)%e}function zw(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Bw(t,e,n){return t!==e?(n-t)/(e-t):0}function Ka(t,e,n){return(1-n)*t+n*e}function Hw(t,e,n,i){return Ka(t,e,1-Math.exp(-n*i))}function Vw(t,e=1){return e-Math.abs(Rp(t,e*2)-e)}function Gw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Ww(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function jw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Xw(t,e){return t+Math.random()*(e-t)}function $w(t){return t*(.5-Math.random())}function Yw(t){t!==void 0&&(Wg=t);let e=Wg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qw(t){return t*Za}function Zw(t){return t*wl}function wf(t){return(t&t-1)===0&&t!==0}function Kw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Cu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Jw(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),m=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*x,l*m,a*c);break;case"YXY":t.set(l*m,a*u,l*x,a*c);break;case"ZYZ":t.set(l*x,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function or(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const _n={DEG2RAD:Za,RAD2DEG:wl,generateUUID:ur,clamp:Un,euclideanModulo:Rp,mapLinear:zw,inverseLerp:Bw,lerp:Ka,damp:Hw,pingpong:Vw,smoothstep:Gw,smootherstep:Ww,randInt:jw,randFloat:Xw,randFloatSpread:$w,seededRandom:Yw,degToRad:qw,radToDeg:Zw,isPowerOfTwo:wf,ceilPowerOfTwo:Kw,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:Jw,normalize:kt,denormalize:or};class ye{constructor(e=0,n=0){ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class At{constructor(e,n,i,r,s,o,a,l,c){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],x=i[8],M=r[0],g=r[3],d=r[6],p=r[1],v=r[4],y=r[7],N=r[2],C=r[5],R=r[8];return s[0]=o*M+a*p+l*N,s[3]=o*g+a*v+l*C,s[6]=o*d+a*y+l*R,s[1]=c*M+u*p+h*N,s[4]=c*g+u*v+h*C,s[7]=c*d+u*y+h*R,s[2]=f*M+m*p+x*N,s[5]=f*g+m*v+x*C,s[8]=f*d+m*y+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,x=n*h+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=h*M,e[1]=(r*c-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=f*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=m*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Od.makeScale(e,n)),this}rotate(e){return this.premultiply(Od.makeRotation(-e)),this}translate(e,n){return this.premultiply(Od.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Od=new At;function M_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function El(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Qw(){const t=El("canvas");return t.style.display="block",t}const jg={};function Ja(t){t in jg||(jg[t]=!0,console.warn(t))}const Xg=new At().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$g=new At().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sc={[Ir]:{transfer:Eu,primaries:bu,toReference:t=>t,fromReference:t=>t},[en]:{transfer:Zt,primaries:bu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[qu]:{transfer:Eu,primaries:Tu,toReference:t=>t.applyMatrix3($g),fromReference:t=>t.applyMatrix3(Xg)},[Cp]:{transfer:Zt,primaries:Tu,toReference:t=>t.convertSRGBToLinear().applyMatrix3($g),fromReference:t=>t.applyMatrix3(Xg).convertLinearToSRGB()}},e1=new Set([Ir,qu]),zt={enabled:!0,_workingColorSpace:Ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!e1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=sc[e].toReference,r=sc[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return sc[t].primaries},getTransfer:function(t){return t===Pi?Eu:sc[t].transfer}};function Yo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ro;class w_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ro===void 0&&(ro=El("canvas")),ro.width=e.width,ro.height=e.height;const i=ro.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ro}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=El("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Yo(n[i]/255)*255):n[i]=Yo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t1=0;class E_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kd(r[o].image)):s.push(kd(r[o]))}else s=kd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function kd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?w_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n1=0;class ei extends ca{constructor(e=ei.DEFAULT_IMAGE,n=ei.DEFAULT_MAPPING,i=_i,r=_i,s=Kn,o=Sl,a=$i,l=cs,c=ei.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=ur(),this.name="",this.source=new E_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Fs?en:Pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _f:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _f:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===en?Fs:__}set encoding(e){Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fs?en:Pi}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Tp;ei.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,n=0,i=0,r=1){nn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],x=l[9],M=l[2],g=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(m+1)/2,N=(d+1)/2,C=(u+f)/4,R=(h+M)/4,k=(x+g)/4;return v>y&&v>N?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=R/i):y>N?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=k/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=R/s,r=k/s),this.set(i,r,s,n),this}let p=Math.sqrt((g-x)*(g-x)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(p)<.001&&(p=1),this.x=(g-x)/p,this.y=(h-M)/p,this.z=(f-u)/p,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class i1 extends ca{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new nn(0,0,e,n),this.scissorTest=!1,this.viewport=new nn(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ja("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Fs?en:Pi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ei(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new E_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gs extends i1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class b_ extends ei{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class r1 extends ei{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],M=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=x,e[n+3]=M;return}if(h!==M||l!==f||c!==m||u!==x){let g=1-a;const d=l*f+c*m+u*x+h*M,p=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const N=Math.sqrt(v),C=Math.atan2(N,d*p);g=Math.sin(g*C)/N,a=Math.sin(a*C)/N}const y=a*p;if(l=l*g+f*y,c=c*g+m*y,u=u*g+x*y,h=h*g+M*y,g===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+u*h+l*m-c*f,e[n+1]=l*x+u*f+c*h-a*m,e[n+2]=c*x+u*m+a*f-l*h,e[n+3]=u*x-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"YXZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"ZXY":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"ZYX":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"YZX":this._x=f*u*h+c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h-f*m*x;break;case"XZY":this._x=f*u*h-c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Un(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zd.copy(this).projectOnVector(e),this.sub(zd)}reflect(e){return this.sub(zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zd=new O,Yg=new Il;class Dl{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bi):Bi.fromBufferAttribute(s,o),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oc.copy(i.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),ac.subVectors(this.max,Aa),so.subVectors(e.a,Aa),oo.subVectors(e.b,Aa),ao.subVectors(e.c,Aa),zr.subVectors(oo,so),Br.subVectors(ao,oo),ys.subVectors(so,ao);let n=[0,-zr.z,zr.y,0,-Br.z,Br.y,0,-ys.z,ys.y,zr.z,0,-zr.x,Br.z,0,-Br.x,ys.z,0,-ys.x,-zr.y,zr.x,0,-Br.y,Br.x,0,-ys.y,ys.x,0];return!Bd(n,so,oo,ao,ac)||(n=[1,0,0,0,1,0,0,0,1],!Bd(n,so,oo,ao,ac))?!1:(lc.crossVectors(zr,Br),n=[lc.x,lc.y,lc.z],Bd(n,so,oo,ao,ac))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xr=[new O,new O,new O,new O,new O,new O,new O,new O],Bi=new O,oc=new Dl,so=new O,oo=new O,ao=new O,zr=new O,Br=new O,ys=new O,Aa=new O,ac=new O,lc=new O,Ss=new O;function Bd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ss.fromArray(t,s);const a=r.x*Math.abs(Ss.x)+r.y*Math.abs(Ss.y)+r.z*Math.abs(Ss.z),l=e.dot(Ss),c=n.dot(Ss),u=i.dot(Ss);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const s1=new Dl,Ca=new O,Hd=new O;class Zu{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):s1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ca.subVectors(e,this.center);const n=Ca.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ca.copy(e.center).add(Hd)),this.expandByPoint(Ca.copy(e.center).sub(Hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vr=new O,Vd=new O,cc=new O,Hr=new O,Gd=new O,uc=new O,Wd=new O;class Pp{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,n),vr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Vd.copy(e).add(n).multiplyScalar(.5),cc.copy(n).sub(e).normalize(),Hr.copy(this.origin).sub(Vd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(cc),a=Hr.dot(this.direction),l=-Hr.dot(cc),c=Hr.lengthSq(),u=Math.abs(1-o*o);let h,f,m,x;if(u>0)if(h=o*l-a,f=o*a-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const M=1/u;h*=M,f*=M,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Vd).addScaledVector(cc,f),m}intersectSphere(e,n){vr.subVectors(e.center,this.origin);const i=vr.dot(this.direction),r=vr.dot(vr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,n,i,r,s){Gd.subVectors(n,e),uc.subVectors(i,e),Wd.crossVectors(Gd,uc);let o=this.direction.dot(Wd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hr.subVectors(this.origin,e);const l=a*this.direction.dot(uc.crossVectors(Hr,uc));if(l<0)return null;const c=a*this.direction.dot(Gd.cross(Hr));if(c<0||l+c>o)return null;const u=-a*Hr.dot(Wd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,n,i,r,s,o,a,l,c,u,h,f,m,x,M,g){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,f,m,x,M,g)}set(e,n,i,r,s,o,a,l,c,u,h,f,m,x,M,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=x,d[11]=M,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/lo.setFromMatrixColumn(e,0).length(),s=1/lo.setFromMatrixColumn(e,1).length(),o=1/lo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,x=a*u,M=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=m+x*c,n[5]=f-M*c,n[9]=-a*l,n[2]=M-f*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,x=c*u,M=c*h;n[0]=f+M*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=m*a-x,n[6]=M+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,x=c*u,M=c*h;n[0]=f-M*a,n[4]=-o*h,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*u,n[9]=M-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,x=a*u,M=a*h;n[0]=l*u,n[4]=x*c-m,n[8]=f*c+M,n[1]=l*h,n[5]=M*c+f,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,x=a*l,M=a*c;n[0]=l*u,n[4]=M-f*h,n[8]=x*h+m,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*h+x,n[10]=f-M*h}else if(e.order==="XZY"){const f=o*l,m=o*c,x=a*l,M=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+M,n[5]=o*u,n[9]=m*h-x,n[2]=x*h-m,n[6]=a*u,n[10]=M*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o1,e,a1)}lookAt(e,n,i){const r=this.elements;return gi.subVectors(e,n),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Vr.crossVectors(i,gi),Vr.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Vr.crossVectors(i,gi)),Vr.normalize(),dc.crossVectors(gi,Vr),r[0]=Vr.x,r[4]=dc.x,r[8]=gi.x,r[1]=Vr.y,r[5]=dc.y,r[9]=gi.y,r[2]=Vr.z,r[6]=dc.z,r[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],x=i[2],M=i[6],g=i[10],d=i[14],p=i[3],v=i[7],y=i[11],N=i[15],C=r[0],R=r[4],k=r[8],b=r[12],T=r[1],W=r[5],q=r[9],se=r[13],D=r[2],X=r[6],$=r[10],re=r[14],B=r[3],Z=r[7],J=r[11],ue=r[15];return s[0]=o*C+a*T+l*D+c*B,s[4]=o*R+a*W+l*X+c*Z,s[8]=o*k+a*q+l*$+c*J,s[12]=o*b+a*se+l*re+c*ue,s[1]=u*C+h*T+f*D+m*B,s[5]=u*R+h*W+f*X+m*Z,s[9]=u*k+h*q+f*$+m*J,s[13]=u*b+h*se+f*re+m*ue,s[2]=x*C+M*T+g*D+d*B,s[6]=x*R+M*W+g*X+d*Z,s[10]=x*k+M*q+g*$+d*J,s[14]=x*b+M*se+g*re+d*ue,s[3]=p*C+v*T+y*D+N*B,s[7]=p*R+v*W+y*X+N*Z,s[11]=p*k+v*q+y*$+N*J,s[15]=p*b+v*se+y*re+N*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],x=e[3],M=e[7],g=e[11],d=e[15];return x*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+M*(+n*l*m-n*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+g*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-n*l*h+n*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],x=e[12],M=e[13],g=e[14],d=e[15],p=h*g*c-M*f*c+M*l*m-a*g*m-h*l*d+a*f*d,v=x*f*c-u*g*c-x*l*m+o*g*m+u*l*d-o*f*d,y=u*M*c-x*h*c+x*a*m-o*M*m-u*a*d+o*h*d,N=x*h*l-u*M*l-x*a*f+o*M*f+u*a*g-o*h*g,C=n*p+i*v+r*y+s*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=p*R,e[1]=(M*f*s-h*g*s-M*r*m+i*g*m+h*r*d-i*f*d)*R,e[2]=(a*g*s-M*l*s+M*r*c-i*g*c-a*r*d+i*l*d)*R,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*R,e[4]=v*R,e[5]=(u*g*s-x*f*s+x*r*m-n*g*m-u*r*d+n*f*d)*R,e[6]=(x*l*s-o*g*s-x*r*c+n*g*c+o*r*d-n*l*d)*R,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*m+n*l*m)*R,e[8]=y*R,e[9]=(x*h*s-u*M*s-x*i*m+n*M*m+u*i*d-n*h*d)*R,e[10]=(o*M*s-x*a*s+x*i*c-n*M*c-o*i*d+n*a*d)*R,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*m-n*a*m)*R,e[12]=N*R,e[13]=(u*M*r-x*h*r+x*i*f-n*M*f-u*i*g+n*h*g)*R,e[14]=(x*a*r-o*M*r-x*i*l+n*M*l+o*i*g-n*a*g)*R,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*f+n*a*f)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,x=s*h,M=o*u,g=o*h,d=a*h,p=l*c,v=l*u,y=l*h,N=i.x,C=i.y,R=i.z;return r[0]=(1-(M+d))*N,r[1]=(m+y)*N,r[2]=(x-v)*N,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(f+d))*C,r[6]=(g+p)*C,r[7]=0,r[8]=(x+v)*R,r[9]=(g-p)*R,r[10]=(1-(f+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=lo.set(r[0],r[1],r[2]).length();const o=lo.set(r[4],r[5],r[6]).length(),a=lo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hi.copy(this);const c=1/s,u=1/o,h=1/a;return Hi.elements[0]*=c,Hi.elements[1]*=c,Hi.elements[2]*=c,Hi.elements[4]*=u,Hi.elements[5]*=u,Hi.elements[6]*=u,Hi.elements[8]*=h,Hi.elements[9]*=h,Hi.elements[10]*=h,n.setFromRotationMatrix(Hi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ar){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,x;if(a===Ar)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Au)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ar){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),f=(n+e)*c,m=(i+r)*u;let x,M;if(a===Ar)x=(o+s)*h,M=-2*h;else if(a===Au)x=s*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const lo=new O,Hi=new ln,o1=new O(0,0,0),a1=new O(1,1,1),Vr=new O,dc=new O,gi=new O,qg=new ln,Zg=new Il;class Ul{constructor(e=0,n=0,i=0,r=Ul.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return qg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zg.setFromEuler(this),this.setFromQuaternion(Zg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ul.DEFAULT_ORDER="XYZ";let Lp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},l1=0;const Kg=new O,co=new Il,_r=new ln,hc=new O,Ra=new O,c1=new O,u1=new Il,Jg=new O(1,0,0),Qg=new O(0,1,0),e0=new O(0,0,1),d1={type:"added"},h1={type:"removed"};class Pn extends ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new O,n=new Ul,i=new Il,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ln},normalMatrix:{value:new At}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return co.setFromAxisAngle(e,n),this.quaternion.multiply(co),this}rotateOnWorldAxis(e,n){return co.setFromAxisAngle(e,n),this.quaternion.premultiply(co),this}rotateX(e){return this.rotateOnAxis(Jg,e)}rotateY(e){return this.rotateOnAxis(Qg,e)}rotateZ(e){return this.rotateOnAxis(e0,e)}translateOnAxis(e,n){return Kg.copy(e).applyQuaternion(this.quaternion),this.position.add(Kg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jg,e)}translateY(e){return this.translateOnAxis(Qg,e)}translateZ(e){return this.translateOnAxis(e0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?hc.copy(e):hc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(Ra,hc,this.up):_r.lookAt(hc,Ra,this.up),this.quaternion.setFromRotationMatrix(_r),r&&(_r.extractRotation(r.matrixWorld),co.setFromRotationMatrix(_r),this.quaternion.premultiply(co.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(d1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(h1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld)),e.applyMatrix4(_r),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,c1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,u1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pn.DEFAULT_UP=new O(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vi=new O,yr=new O,jd=new O,Sr=new O,uo=new O,ho=new O,t0=new O,Xd=new O,$d=new O,Yd=new O;let fc=!1;class Ri{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vi.subVectors(e,n),r.cross(Vi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vi.subVectors(r,n),yr.subVectors(i,n),jd.subVectors(e,n);const o=Vi.dot(Vi),a=Vi.dot(yr),l=Vi.dot(jd),c=yr.dot(yr),u=yr.dot(jd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getUV(e,n,i,r,s,o,a,l){return fc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fc=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sr.x),l.addScaledVector(o,Sr.y),l.addScaledVector(a,Sr.z),l)}static isFrontFacing(e,n,i,r){return Vi.subVectors(i,n),yr.subVectors(e,n),Vi.cross(yr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),Vi.cross(yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ri.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return fc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fc=!0),Ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;uo.subVectors(r,i),ho.subVectors(s,i),Xd.subVectors(e,i);const l=uo.dot(Xd),c=ho.dot(Xd);if(l<=0&&c<=0)return n.copy(i);$d.subVectors(e,r);const u=uo.dot($d),h=ho.dot($d);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(uo,o);Yd.subVectors(e,s);const m=uo.dot(Yd),x=ho.dot(Yd);if(x>=0&&m<=x)return n.copy(s);const M=m*c-l*x;if(M<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(ho,a);const g=u*x-m*h;if(g<=0&&h-u>=0&&m-x>=0)return t0.subVectors(s,r),a=(h-u)/(h-u+(m-x)),n.copy(r).addScaledVector(t0,a);const d=1/(g+M+f);return o=M*d,a=f*d,n.copy(i).addScaledVector(uo,o).addScaledVector(ho,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const T_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},pc={h:0,s:0,l:0};function qd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ct{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=zt.workingColorSpace){return this.r=e,this.g=n,this.b=i,zt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=zt.workingColorSpace){if(e=Rp(e,1),n=Un(n,0,1),i=Un(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=qd(o,s,e+1/3),this.g=qd(o,s,e),this.b=qd(o,s,e-1/3)}return zt.toWorkingColorSpace(this,r),this}setStyle(e,n=en){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=en){const i=T_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}copyLinearToSRGB(e){return this.r=Fd(e.r),this.g=Fd(e.g),this.b=Fd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return zt.fromWorkingColorSpace(Wn.copy(this),e),Math.round(Un(Wn.r*255,0,255))*65536+Math.round(Un(Wn.g*255,0,255))*256+Math.round(Un(Wn.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=zt.workingColorSpace){zt.fromWorkingColorSpace(Wn.copy(this),n);const i=Wn.r,r=Wn.g,s=Wn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=zt.workingColorSpace){return zt.fromWorkingColorSpace(Wn.copy(this),n),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=en){zt.fromWorkingColorSpace(Wn.copy(this),e);const n=Wn.r,i=Wn.g,r=Wn.b;return e!==en?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+n,Gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Gr),e.getHSL(pc);const i=Ka(Gr.h,pc.h,n),r=Ka(Gr.s,pc.s,n),s=Ka(Gr.l,pc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Ct;Ct.NAMES=T_;let f1=0;class qs extends ca{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=$o,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gf,this.blendDst=xf,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Mu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$o&&(i.blending=this.blending),this.side!==fs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gf&&(i.blendSrc=this.blendSrc),this.blendDst!==xf&&(i.blendDst=this.blendDst),this.blendEquation!==As&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==io&&(i.stencilFail=this.stencilFail),this.stencilZFail!==io&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==io&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ai extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=u_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=new O,mc=new ye;class Ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Sf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)mc.fromBufferAttribute(this,n),mc.applyMatrix3(e),this.setXY(n,mc.x,mc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix3(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=or(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=or(n,this.array)),n}setX(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=or(n,this.array)),n}setY(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=or(n,this.array)),n}setZ(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=or(n,this.array)),n}setW(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sf&&(e.usage=this.usage),e}}class A_ extends Ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class C_ extends Ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends Ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let p1=0;const Ti=new ln,Zd=new Pn,fo=new O,xi=new Dl,Pa=new Dl,An=new O;class Mn extends ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(M_(e)?C_:A_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new At().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,n,i){return Ti.makeTranslation(e,n,i),this.applyMatrix4(Ti),this}scale(e,n,i){return Ti.makeScale(e,n,i),this.applyMatrix4(Ti),this}lookAt(e){return Zd.lookAt(e),Zd.updateMatrix(),this.applyMatrix4(Zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $t(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Pa.setFromBufferAttribute(a),this.morphTargetsRelative?(An.addVectors(xi.min,Pa.min),xi.expandByPoint(An),An.addVectors(xi.max,Pa.max),xi.expandByPoint(An)):(xi.expandByPoint(Pa.min),xi.expandByPoint(Pa.max))}xi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)An.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(An));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)An.fromBufferAttribute(a,c),l&&(fo.fromBufferAttribute(e,c),An.add(fo)),r=Math.max(r,i.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new O,u[T]=new O;const h=new O,f=new O,m=new O,x=new ye,M=new ye,g=new ye,d=new O,p=new O;function v(T,W,q){h.fromArray(r,T*3),f.fromArray(r,W*3),m.fromArray(r,q*3),x.fromArray(o,T*2),M.fromArray(o,W*2),g.fromArray(o,q*2),f.sub(h),m.sub(h),M.sub(x),g.sub(x);const se=1/(M.x*g.y-g.x*M.y);isFinite(se)&&(d.copy(f).multiplyScalar(g.y).addScaledVector(m,-M.y).multiplyScalar(se),p.copy(m).multiplyScalar(M.x).addScaledVector(f,-g.x).multiplyScalar(se),c[T].add(d),c[W].add(d),c[q].add(d),u[T].add(p),u[W].add(p),u[q].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,W=y.length;T<W;++T){const q=y[T],se=q.start,D=q.count;for(let X=se,$=se+D;X<$;X+=3)v(i[X+0],i[X+1],i[X+2])}const N=new O,C=new O,R=new O,k=new O;function b(T){R.fromArray(s,T*3),k.copy(R);const W=c[T];N.copy(W),N.sub(R.multiplyScalar(R.dot(W))).normalize(),C.crossVectors(k,W);const se=C.dot(u[T])<0?-1:1;l[T*4]=N.x,l[T*4+1]=N.y,l[T*4+2]=N.z,l[T*4+3]=se}for(let T=0,W=y.length;T<W;++T){const q=y[T],se=q.start,D=q.count;for(let X=se,$=se+D;X<$;X+=3)b(i[X+0]),b(i[X+1]),b(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),M=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)An.fromBufferAttribute(e,n),An.normalize(),e.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,x=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*u;for(let d=0;d<u;d++)f[x++]=c[m++]}return new Ii(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n0=new ln,Ms=new Pp,gc=new Zu,i0=new O,po=new O,mo=new O,go=new O,Kd=new O,xc=new O,vc=new ye,_c=new ye,yc=new ye,r0=new O,s0=new O,o0=new O,Sc=new O,Mc=new O;class Je extends Pn{constructor(e=new Mn,n=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){xc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Kd.fromBufferAttribute(h,e),o?xc.addScaledVector(Kd,u):xc.addScaledVector(Kd.sub(n),u))}n.add(xc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gc.copy(i.boundingSphere),gc.applyMatrix4(s),Ms.copy(e.ray).recast(e.near),!(gc.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(gc,i0)===null||Ms.origin.distanceToSquared(i0)>(e.far-e.near)**2))&&(n0.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(n0),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ms)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,M=f.length;x<M;x++){const g=f[x],d=o[g.materialIndex],p=Math.max(g.start,m.start),v=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let y=p,N=v;y<N;y+=3){const C=a.getX(y),R=a.getX(y+1),k=a.getX(y+2);r=wc(this,d,e,i,c,u,h,C,R,k),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let g=x,d=M;g<d;g+=3){const p=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);r=wc(this,o,e,i,c,u,h,p,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,M=f.length;x<M;x++){const g=f[x],d=o[g.materialIndex],p=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=p,N=v;y<N;y+=3){const C=y,R=y+1,k=y+2;r=wc(this,d,e,i,c,u,h,C,R,k),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let g=x,d=M;g<d;g+=3){const p=g,v=g+1,y=g+2;r=wc(this,o,e,i,c,u,h,p,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function m1(t,e,n,i,r,s,o,a){let l;if(e.side===Qn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fs,a),l===null)return null;Mc.copy(a),Mc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Mc);return c<n.near||c>n.far?null:{distance:c,point:Mc.clone(),object:t}}function wc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,po),t.getVertexPosition(l,mo),t.getVertexPosition(c,go);const u=m1(t,e,n,i,po,mo,go,Sc);if(u){r&&(vc.fromBufferAttribute(r,a),_c.fromBufferAttribute(r,l),yc.fromBufferAttribute(r,c),u.uv=Ri.getInterpolation(Sc,po,mo,go,vc,_c,yc,new ye)),s&&(vc.fromBufferAttribute(s,a),_c.fromBufferAttribute(s,l),yc.fromBufferAttribute(s,c),u.uv1=Ri.getInterpolation(Sc,po,mo,go,vc,_c,yc,new ye),u.uv2=u.uv1),o&&(r0.fromBufferAttribute(o,a),s0.fromBufferAttribute(o,l),o0.fromBufferAttribute(o,c),u.normal=Ri.getInterpolation(Sc,po,mo,go,r0,s0,o0,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Ri.getNormal(po,mo,go,h.normal),u.face=h}return u}class Qt extends Mn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2));function x(M,g,d,p,v,y,N,C,R,k,b){const T=y/R,W=N/k,q=y/2,se=N/2,D=C/2,X=R+1,$=k+1;let re=0,B=0;const Z=new O;for(let J=0;J<$;J++){const ue=J*W-se;for(let pe=0;pe<X;pe++){const te=pe*T-q;Z[M]=te*p,Z[g]=ue*v,Z[d]=D,c.push(Z.x,Z.y,Z.z),Z[M]=0,Z[g]=0,Z[d]=C>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(pe/R),h.push(1-J/k),re+=1}}for(let J=0;J<k;J++)for(let ue=0;ue<R;ue++){const pe=f+ue+X*J,te=f+ue+X*(J+1),fe=f+(ue+1)+X*(J+1),ke=f+(ue+1)+X*J;l.push(pe,te,ke),l.push(te,fe,ke),B+=6}a.addGroup(m,B,b),m+=B,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yn(t){const e={};for(let n=0;n<t.length;n++){const i=sa(t[n]);for(const r in i)e[r]=i[r]}return e}function g1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function R_(t){return t.getRenderTarget()===null?t.outputColorSpace:zt.workingColorSpace}const x1={clone:sa,merge:Yn};var v1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ws extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v1,this.fragmentShader=_1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=g1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let P_=class extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Ar}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class ci extends P_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wl*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Za*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xo=-90,vo=1;class y1 extends Pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ci(xo,vo,e,n);r.layers=this.layers,this.add(r);const s=new ci(xo,vo,e,n);s.layers=this.layers,this.add(s);const o=new ci(xo,vo,e,n);o.layers=this.layers,this.add(o);const a=new ci(xo,vo,e,n);a.layers=this.layers,this.add(a);const l=new ci(xo,vo,e,n);l.layers=this.layers,this.add(l);const c=new ci(xo,vo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ar)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Au)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class L_ extends ei{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:na,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S1 extends Gs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ja("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fs?en:Pi),this.texture=new L_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qt(5,5,5),s=new Ws({name:"CubemapFromEquirect",uniforms:sa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qn,blending:as});s.uniforms.tEquirect.value=n;const o=new Je(r,s),a=n.minFilter;return n.minFilter===Sl&&(n.minFilter=Kn),new y1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Jd=new O,M1=new O,w1=new At;class Xr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Jd.subVectors(i,n).cross(M1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Jd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||w1.getNormalMatrix(e),r=this.coplanarPoint(Jd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Zu,Ec=new O;class Np{constructor(e=new Xr,n=new Xr,i=new Xr,r=new Xr,s=new Xr,o=new Xr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ar){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],x=r[9],M=r[10],g=r[11],d=r[12],p=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,g-m,y-d).normalize(),i[1].setComponents(l+s,f+c,g+m,y+d).normalize(),i[2].setComponents(l+o,f+u,g+x,y+p).normalize(),i[3].setComponents(l-o,f-u,g-x,y-p).normalize(),i[4].setComponents(l-a,f-h,g-M,y-v).normalize(),n===Ar)i[5].setComponents(l+a,f+h,g+M,y+v).normalize();else if(n===Au)i[5].setComponents(a,h,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ec.x=r.normal.x>0?e.max.x:e.min.x,Ec.y=r.normal.y>0?e.max.y:e.min.y,Ec.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function N_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function E1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,m=h.byteLength,x=t.createBuffer();t.bindBuffer(u,x),t.bufferData(u,h,f),c.onUploadCallback();let M;if(h instanceof Float32Array)M=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)M=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=t.SHORT;else if(h instanceof Uint32Array)M=t.UNSIGNED_INT;else if(h instanceof Int32Array)M=t.INT;else if(h instanceof Int8Array)M=t.BYTE;else if(h instanceof Uint8Array)M=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const f=u.array,m=u._updateRange,x=u.updateRanges;if(t.bindBuffer(h,c),m.count===-1&&x.length===0&&t.bufferSubData(h,0,f),x.length!==0){for(let M=0,g=x.length;M<g;M++){const d=x[M];n?t.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):t.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):t.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class ji extends Mn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=n/l,m=[],x=[],M=[],g=[];for(let d=0;d<u;d++){const p=d*f-o;for(let v=0;v<c;v++){const y=v*h-s;x.push(y,-p,0),M.push(0,0,1),g.push(v/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let p=0;p<a;p++){const v=p+c*d,y=p+c*(d+1),N=p+1+c*(d+1),C=p+1+c*d;m.push(v,y,C),m.push(y,N,C)}this.setIndex(m),this.setAttribute("position",new $t(x,3)),this.setAttribute("normal",new $t(M,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.widthSegments,e.heightSegments)}}var b1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T1=`#ifdef USE_ALPHAHASH
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
#endif`,A1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,P1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L1=`#ifdef USE_AOMAP
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
#endif`,N1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I1=`#ifdef USE_BATCHING
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
#endif`,D1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,U1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k1=`#ifdef USE_IRIDESCENCE
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
#endif`,z1=`#ifdef USE_BUMPMAP
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
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Y1=`#define PI 3.141592653589793
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
} // validated`,q1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z1=`vec3 transformedNormal = objectNormal;
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
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`
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
}`,iE=`#ifdef USE_ENVMAP
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
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sE=`#ifdef USE_ENVMAP
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
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
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
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hE=`#ifdef USE_GRADIENTMAP
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
}`,fE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xE=`uniform bool receiveShadow;
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
#endif`,vE=`#ifdef USE_ENVMAP
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
#endif`,_E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wE=`PhysicalMaterial material;
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
#endif`,EE=`struct PhysicalMaterial {
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
}`,bE=`
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
#endif`,TE=`#if defined( RE_IndirectDiffuse )
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
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,NE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UE=`#if defined( USE_POINTS_UV )
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
#endif`,OE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zE=`#ifdef USE_MORPHNORMALS
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
#endif`,BE=`#ifdef USE_MORPHTARGETS
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
#endif`,HE=`#ifdef USE_MORPHTARGETS
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
#endif`,VE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,GE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$E=`#ifdef USE_NORMALMAP
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
#endif`,YE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ib=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cb=`float getShadowMask() {
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
}`,ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,db=`#ifdef USE_SKINNING
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
#endif`,hb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fb=`#ifdef USE_SKINNING
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
#endif`,pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vb=`#ifdef USE_TRANSMISSION
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
#endif`,_b=`#ifdef USE_TRANSMISSION
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bb=`uniform sampler2D t2D;
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
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`#include <common>
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
}`,Lb=`#if DEPTH_PACKING == 3200
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
}`,Nb=`#define DISTANCE
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
}`,Ib=`#define DISTANCE
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,kb=`#include <common>
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
}`,zb=`uniform vec3 diffuse;
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
}`,Bb=`#define LAMBERT
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
}`,Hb=`#define LAMBERT
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
}`,Vb=`#define MATCAP
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
}`,Gb=`#define MATCAP
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
}`,Wb=`#define NORMAL
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
}`,jb=`#define NORMAL
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
}`,Xb=`#define PHONG
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
}`,$b=`#define PHONG
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
}`,Yb=`#define STANDARD
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
}`,qb=`#define STANDARD
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
}`,Zb=`#define TOON
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
}`,Kb=`#define TOON
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
}`,Jb=`uniform float size;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,eT=`#include <common>
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
}`,tT=`uniform vec3 color;
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
}`,nT=`uniform float rotation;
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
}`,iT=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:b1,alphahash_pars_fragment:T1,alphamap_fragment:A1,alphamap_pars_fragment:C1,alphatest_fragment:R1,alphatest_pars_fragment:P1,aomap_fragment:L1,aomap_pars_fragment:N1,batching_pars_vertex:I1,batching_vertex:D1,begin_vertex:U1,beginnormal_vertex:O1,bsdfs:F1,iridescence_fragment:k1,bumpmap_pars_fragment:z1,clipping_planes_fragment:B1,clipping_planes_pars_fragment:H1,clipping_planes_pars_vertex:V1,clipping_planes_vertex:G1,color_fragment:W1,color_pars_fragment:j1,color_pars_vertex:X1,color_vertex:$1,common:Y1,cube_uv_reflection_fragment:q1,defaultnormal_vertex:Z1,displacementmap_pars_vertex:K1,displacementmap_vertex:J1,emissivemap_fragment:Q1,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:sE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:vE,envmap_vertex:aE,fog_vertex:lE,fog_pars_vertex:cE,fog_fragment:uE,fog_pars_fragment:dE,gradientmap_pars_fragment:hE,lightmap_fragment:fE,lightmap_pars_fragment:pE,lights_lambert_fragment:mE,lights_lambert_pars_fragment:gE,lights_pars_begin:xE,lights_toon_fragment:_E,lights_toon_pars_fragment:yE,lights_phong_fragment:SE,lights_phong_pars_fragment:ME,lights_physical_fragment:wE,lights_physical_pars_fragment:EE,lights_fragment_begin:bE,lights_fragment_maps:TE,lights_fragment_end:AE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:RE,logdepthbuf_pars_vertex:PE,logdepthbuf_vertex:LE,map_fragment:NE,map_pars_fragment:IE,map_particle_fragment:DE,map_particle_pars_fragment:UE,metalnessmap_fragment:OE,metalnessmap_pars_fragment:FE,morphcolor_vertex:kE,morphnormal_vertex:zE,morphtarget_pars_vertex:BE,morphtarget_vertex:HE,normal_fragment_begin:VE,normal_fragment_maps:GE,normal_pars_fragment:WE,normal_pars_vertex:jE,normal_vertex:XE,normalmap_pars_fragment:$E,clearcoat_normal_fragment_begin:YE,clearcoat_normal_fragment_maps:qE,clearcoat_pars_fragment:ZE,iridescence_pars_fragment:KE,opaque_fragment:JE,packing:QE,premultiplied_alpha_fragment:eb,project_vertex:tb,dithering_fragment:nb,dithering_pars_fragment:ib,roughnessmap_fragment:rb,roughnessmap_pars_fragment:sb,shadowmap_pars_fragment:ob,shadowmap_pars_vertex:ab,shadowmap_vertex:lb,shadowmask_pars_fragment:cb,skinbase_vertex:ub,skinning_pars_vertex:db,skinning_vertex:hb,skinnormal_vertex:fb,specularmap_fragment:pb,specularmap_pars_fragment:mb,tonemapping_fragment:gb,tonemapping_pars_fragment:xb,transmission_fragment:vb,transmission_pars_fragment:_b,uv_pars_fragment:yb,uv_pars_vertex:Sb,uv_vertex:Mb,worldpos_vertex:wb,background_vert:Eb,background_frag:bb,backgroundCube_vert:Tb,backgroundCube_frag:Ab,cube_vert:Cb,cube_frag:Rb,depth_vert:Pb,depth_frag:Lb,distanceRGBA_vert:Nb,distanceRGBA_frag:Ib,equirect_vert:Db,equirect_frag:Ub,linedashed_vert:Ob,linedashed_frag:Fb,meshbasic_vert:kb,meshbasic_frag:zb,meshlambert_vert:Bb,meshlambert_frag:Hb,meshmatcap_vert:Vb,meshmatcap_frag:Gb,meshnormal_vert:Wb,meshnormal_frag:jb,meshphong_vert:Xb,meshphong_frag:$b,meshphysical_vert:Yb,meshphysical_frag:qb,meshtoon_vert:Zb,meshtoon_frag:Kb,points_vert:Jb,points_frag:Qb,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},De={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},rr={basic:{uniforms:Yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Yn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Yn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Yn([De.points,De.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Yn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Yn([De.common,De.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Yn([De.sprite,De.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:Yn([De.common,De.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:Yn([De.lights,De.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};rr.physical={uniforms:Yn([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const bc={r:0,b:0,g:0};function rT(t,e,n,i,r,s,o){const a=new Ct(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function x(g,d){let p=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?M(a,l):v&&v.isColor&&(M(v,1),p=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||p)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Yu)?(u===void 0&&(u=new Je(new Qt(1,1,1),new Ws({name:"BackgroundCubeMaterial",uniforms:sa(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=zt.getTransfer(v.colorSpace)!==Zt,(h!==v||f!==v.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,m=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Je(new ji(2,2),new Ws({name:"BackgroundMaterial",uniforms:sa(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=zt.getTransfer(v.colorSpace)!==Zt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function M(g,d){g.getRGB(bc,R_(t)),i.buffers.color.setClear(bc.r,bc.g,bc.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),l=d,M(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,M(a,l)},render:x}}function sT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function h(D,X,$,re,B){let Z=!1;if(o){const J=M(re,$,X);c!==J&&(c=J,m(c.object)),Z=d(D,re,$,B),Z&&p(D,re,$,B)}else{const J=X.wireframe===!0;(c.geometry!==re.id||c.program!==$.id||c.wireframe!==J)&&(c.geometry=re.id,c.program=$.id,c.wireframe=J,Z=!0)}B!==null&&n.update(B,t.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,k(D,X,$,re),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(B).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function x(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function M(D,X,$){const re=$.wireframe===!0;let B=a[D.id];B===void 0&&(B={},a[D.id]=B);let Z=B[X.id];Z===void 0&&(Z={},B[X.id]=Z);let J=Z[re];return J===void 0&&(J=g(f()),Z[re]=J),J}function g(D){const X=[],$=[],re=[];for(let B=0;B<r;B++)X[B]=0,$[B]=0,re[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:$,attributeDivisors:re,object:D,attributes:{},index:null}}function d(D,X,$,re){const B=c.attributes,Z=X.attributes;let J=0;const ue=$.getAttributes();for(const pe in ue)if(ue[pe].location>=0){const fe=B[pe];let ke=Z[pe];if(ke===void 0&&(pe==="instanceMatrix"&&D.instanceMatrix&&(ke=D.instanceMatrix),pe==="instanceColor"&&D.instanceColor&&(ke=D.instanceColor)),fe===void 0||fe.attribute!==ke||ke&&fe.data!==ke.data)return!0;J++}return c.attributesNum!==J||c.index!==re}function p(D,X,$,re){const B={},Z=X.attributes;let J=0;const ue=$.getAttributes();for(const pe in ue)if(ue[pe].location>=0){let fe=Z[pe];fe===void 0&&(pe==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),pe==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor));const ke={};ke.attribute=fe,fe&&fe.data&&(ke.data=fe.data),B[pe]=ke,J++}c.attributes=B,c.attributesNum=J,c.index=re}function v(){const D=c.newAttributes;for(let X=0,$=D.length;X<$;X++)D[X]=0}function y(D){N(D,0)}function N(D,X){const $=c.newAttributes,re=c.enabledAttributes,B=c.attributeDivisors;$[D]=1,re[D]===0&&(t.enableVertexAttribArray(D),re[D]=1),B[D]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,X),B[D]=X)}function C(){const D=c.newAttributes,X=c.enabledAttributes;for(let $=0,re=X.length;$<re;$++)X[$]!==D[$]&&(t.disableVertexAttribArray($),X[$]=0)}function R(D,X,$,re,B,Z,J){J===!0?t.vertexAttribIPointer(D,X,$,B,Z):t.vertexAttribPointer(D,X,$,re,B,Z)}function k(D,X,$,re){if(i.isWebGL2===!1&&(D.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const B=re.attributes,Z=$.getAttributes(),J=X.defaultAttributeValues;for(const ue in Z){const pe=Z[ue];if(pe.location>=0){let te=B[ue];if(te===void 0&&(ue==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),ue==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),te!==void 0){const fe=te.normalized,ke=te.itemSize,Ye=n.get(te);if(Ye===void 0)continue;const Ve=Ye.buffer,ct=Ye.type,ot=Ye.bytesPerElement,tt=i.isWebGL2===!0&&(ct===t.INT||ct===t.UNSIGNED_INT||te.gpuType===h_);if(te.isInterleavedBufferAttribute){const We=te.data,F=We.stride,ae=te.offset;if(We.isInstancedInterleavedBuffer){for(let le=0;le<pe.locationSize;le++)N(pe.location+le,We.meshPerAttribute);D.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let le=0;le<pe.locationSize;le++)y(pe.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let le=0;le<pe.locationSize;le++)R(pe.location+le,ke/pe.locationSize,ct,fe,F*ot,(ae+ke/pe.locationSize*le)*ot,tt)}else{if(te.isInstancedBufferAttribute){for(let We=0;We<pe.locationSize;We++)N(pe.location+We,te.meshPerAttribute);D.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let We=0;We<pe.locationSize;We++)y(pe.location+We);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let We=0;We<pe.locationSize;We++)R(pe.location+We,ke/pe.locationSize,ct,fe,ke*ot,ke/pe.locationSize*We*ot,tt)}}else if(J!==void 0){const fe=J[ue];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(pe.location,fe);break;case 3:t.vertexAttrib3fv(pe.location,fe);break;case 4:t.vertexAttrib4fv(pe.location,fe);break;default:t.vertexAttrib1fv(pe.location,fe)}}}}C()}function b(){q();for(const D in a){const X=a[D];for(const $ in X){const re=X[$];for(const B in re)x(re[B].object),delete re[B];delete X[$]}delete a[D]}}function T(D){if(a[D.id]===void 0)return;const X=a[D.id];for(const $ in X){const re=X[$];for(const B in re)x(re[B].object),delete re[B];delete X[$]}delete a[D.id]}function W(D){for(const X in a){const $=a[X];if($[D.id]===void 0)continue;const re=$[D.id];for(const B in re)x(re[B].object),delete re[B];delete $[D.id]}}function q(){se(),u=!0,c!==l&&(c=l,m(c.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:se,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:W,initAttributes:v,enableAttribute:y,disableUnusedAttributes:C}}function oT(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){t.drawArrays(s,u,h),n.update(h,s,1)}function l(u,h,f){if(f===0)return;let m,x;if(r)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,u,h,f),n.update(h,s,f)}function c(u,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<f;x++)this.render(u[x],h[x]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,f);let x=0;for(let M=0;M<f;M++)x+=h[M];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function aT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),M=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),p=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,y=o||e.has("OES_texture_float"),N=v&&y,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:p,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:N,maxSamples:C}}function lT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Xr,a=new At,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,m){const x=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,d=t.get(h);if(!r||x===null||x.length===0||s&&!g)s?u(null):c();else{const p=s?0:i,v=p*4;let y=d.clippingState||null;l.value=y,y=u(x,f,v,m);for(let N=0;N!==v;++N)y[N]=n[N];d.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,x){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=l.value,x!==!0||g===null){const d=m+M*4,p=f.matrixWorldInverse;a.getNormalMatrix(p),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,y=m;v!==M;++v,y+=4)o.copy(h[v]).applyMatrix4(p,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function cT(t){let e=new WeakMap;function n(o,a){return a===wu?o.mapping=na:a===vf&&(o.mapping=ia),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===wu||a===vf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new S1(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ip extends P_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ko=4,a0=[.125,.215,.35,.446,.526,.582],Cs=20,Qd=new Ip,l0=new Ct;let eh=null,th=0,nh=0;const Ts=(1+Math.sqrt(5))/2,_o=1/Ts,c0=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Ts,_o),new O(0,Ts,-_o),new O(_o,0,Ts),new O(-_o,0,Ts),new O(Ts,_o,0),new O(-Ts,_o,0)];class Qa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===na||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Ml,format:$i,colorSpace:Ir,depthBuffer:!1},r=u0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uT(s)),this._blurMaterial=dT(s,e,n)}return r}_compileMaterial(e){const n=new Je(this._lodPlanes[0],e);this._renderer.compile(n,Qd)}_sceneToCubeUV(e,n,i,r){const a=new ci(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(l0),u.toneMapping=ls,u.autoClear=!1;const m=new ai({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),x=new Je(new Qt,m);let M=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,M=!0):(m.color.copy(l0),M=!0);for(let d=0;d<6;d++){const p=d%3;p===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):p===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Tc(r,p*v,d>2?v:0,v,v),u.setRenderTarget(r),M&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===na||e.mapping===ia;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=h0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Tc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Qd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=c0[(r-1)%c0.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Je(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Cs-1),M=s/x,g=isFinite(s)?1+Math.floor(u*M):Cs;g>Cs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cs}`);const d=[];let p=0;for(let R=0;R<Cs;++R){const k=R/M,b=Math.exp(-k*k/2);d.push(b),R===0?p+=b:R<g&&(p+=2*b)}for(let R=0;R<d.length;R++)d[R]=d[R]/p;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const y=this._sizeLods[r],N=3*y*(r>v-ko?r-v+ko:0),C=4*(this._cubeSize-y);Tc(n,N,C,3*y,2*y),l.setRenderTarget(n),l.render(h,Qd)}}function uT(t){const e=[],n=[],i=[];let r=t;const s=t-ko+1+a0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ko?l=a0[o-t+ko-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,x=6,M=3,g=2,d=1,p=new Float32Array(M*x*m),v=new Float32Array(g*x*m),y=new Float32Array(d*x*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,k=C>2?0:-1,b=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];p.set(b,M*x*C),v.set(f,g*x*C);const T=[C,C,C,C,C,C];y.set(T,d*x*C)}const N=new Mn;N.setAttribute("position",new Ii(p,M)),N.setAttribute("uv",new Ii(v,g)),N.setAttribute("faceIndex",new Ii(y,d)),e.push(N),r>ko&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function u0(t,e,n){const i=new Gs(t,e,n);return i.texture.mapping=Yu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function dT(t,e,n){const i=new Float32Array(Cs),r=new O(0,1,0);return new Ws({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dp(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function d0(){return new Ws({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dp(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function h0(){return new Ws({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Dp(){return`

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
	`}function hT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===wu||l===vf,u=l===na||l===ia;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Qa(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){n===null&&(n=new Qa(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function fT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pT(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const M=f.morphAttributes[x];for(let g=0,d=M.length;g<d;g++)e.remove(M[g])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const M=m[x];for(let g=0,d=M.length;g<d;g++)e.update(M[g],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,x=h.attributes.position;let M=0;if(m!==null){const p=m.array;M=m.version;for(let v=0,y=p.length;v<y;v+=3){const N=p[v+0],C=p[v+1],R=p[v+2];f.push(N,C,C,R,R,N)}}else if(x!==void 0){const p=x.array;M=x.version;for(let v=0,y=p.length/3-1;v<y;v+=3){const N=v+0,C=v+1,R=v+2;f.push(N,C,C,R,R,N)}}else return;const g=new(M_(f)?C_:A_)(f,1);g.version=M;const d=s.get(h);d&&e.remove(d),s.set(h,g)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function mT(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,x){t.drawElements(s,x,a,m*l),n.update(x,s,1)}function h(m,x,M){if(M===0)return;let g,d;if(r)g=t,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](s,x,a,m*l,M),n.update(x,s,M)}function f(m,x,M){if(M===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<M;d++)this.render(m[d]/l,x[d]);else{g.multiDrawElementsWEBGL(s,x,0,a,m,0,M);let d=0;for(let p=0;p<M;p++)d+=x[p];n.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function gT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xT(t,e){return t[0]-e[0]}function vT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function _T(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new nn,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,M=x!==void 0?x.length:0;let g=s.get(u);if(g===void 0||g.count!==M){let X=function(){se.dispose(),s.delete(u),u.removeEventListener("dispose",X)};var m=X;g!==void 0&&g.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,N=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],k=u.morphAttributes.color||[];let b=0;v===!0&&(b=1),y===!0&&(b=2),N===!0&&(b=3);let T=u.attributes.position.count*b,W=1;T>e.maxTextureSize&&(W=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const q=new Float32Array(T*W*4*M),se=new b_(q,T,W,M);se.type=Jr,se.needsUpdate=!0;const D=b*4;for(let $=0;$<M;$++){const re=C[$],B=R[$],Z=k[$],J=T*W*4*$;for(let ue=0;ue<re.count;ue++){const pe=ue*D;v===!0&&(o.fromBufferAttribute(re,ue),q[J+pe+0]=o.x,q[J+pe+1]=o.y,q[J+pe+2]=o.z,q[J+pe+3]=0),y===!0&&(o.fromBufferAttribute(B,ue),q[J+pe+4]=o.x,q[J+pe+5]=o.y,q[J+pe+6]=o.z,q[J+pe+7]=0),N===!0&&(o.fromBufferAttribute(Z,ue),q[J+pe+8]=o.x,q[J+pe+9]=o.y,q[J+pe+10]=o.z,q[J+pe+11]=Z.itemSize===4?o.w:1)}}g={count:M,texture:se,size:new ye(T,W)},s.set(u,g),u.addEventListener("dispose",X)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const p=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(t,"morphTargetBaseInfluence",p),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const x=f===void 0?0:f.length;let M=i[u.id];if(M===void 0||M.length!==x){M=[];for(let y=0;y<x;y++)M[y]=[y,0];i[u.id]=M}for(let y=0;y<x;y++){const N=M[y];N[0]=y,N[1]=f[y]}M.sort(vT);for(let y=0;y<8;y++)y<x&&M[y][1]?(a[y][0]=M[y][0],a[y][1]=M[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(xT);const g=u.morphAttributes.position,d=u.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const N=a[y],C=N[0],R=N[1];C!==Number.MAX_SAFE_INTEGER&&R?(g&&u.getAttribute("morphTarget"+y)!==g[C]&&u.setAttribute("morphTarget"+y,g[C]),d&&u.getAttribute("morphNormal"+y)!==d[C]&&u.setAttribute("morphNormal"+y,d[C]),r[y]=R,p+=R):(g&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const v=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function yT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class I_ extends ei{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Os,u!==Os&&u!==ra)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Os&&(i=Kr),i===void 0&&u===ra&&(i=Us),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Zn,this.minFilter=l!==void 0?l:Zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const D_=new ei,U_=new I_(1,1);U_.compareFunction=S_;const O_=new b_,F_=new r1,k_=new L_,f0=[],p0=[],m0=new Float32Array(16),g0=new Float32Array(9),x0=new Float32Array(4);function ua(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=f0[r];if(s===void 0&&(s=new Float32Array(r),f0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function En(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ku(t,e){let n=p0[e];n===void 0&&(n=new Int32Array(e),p0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ST(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;t.uniform2fv(this.addr,e),bn(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(En(n,e))return;t.uniform3fv(this.addr,e),bn(n,e)}}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;t.uniform4fv(this.addr,e),bn(n,e)}}function bT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(En(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bn(n,e)}else{if(En(n,i))return;x0.set(i),t.uniformMatrix2fv(this.addr,!1,x0),bn(n,i)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(En(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bn(n,e)}else{if(En(n,i))return;g0.set(i),t.uniformMatrix3fv(this.addr,!1,g0),bn(n,i)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(En(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bn(n,e)}else{if(En(n,i))return;m0.set(i),t.uniformMatrix4fv(this.addr,!1,m0),bn(n,i)}}function CT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;t.uniform2iv(this.addr,e),bn(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(En(n,e))return;t.uniform3iv(this.addr,e),bn(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;t.uniform4iv(this.addr,e),bn(n,e)}}function NT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;t.uniform2uiv(this.addr,e),bn(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(En(n,e))return;t.uniform3uiv(this.addr,e),bn(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;t.uniform4uiv(this.addr,e),bn(n,e)}}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?U_:D_;n.setTexture2D(e||s,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||F_,r)}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||k_,r)}function zT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||O_,r)}function BT(t){switch(t){case 5126:return ST;case 35664:return MT;case 35665:return wT;case 35666:return ET;case 35674:return bT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return CT;case 35667:case 35671:return RT;case 35668:case 35672:return PT;case 35669:case 35673:return LT;case 5125:return NT;case 36294:return IT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return zT}}function HT(t,e){t.uniform1fv(this.addr,e)}function VT(t,e){const n=ua(e,this.size,2);t.uniform2fv(this.addr,n)}function GT(t,e){const n=ua(e,this.size,3);t.uniform3fv(this.addr,n)}function WT(t,e){const n=ua(e,this.size,4);t.uniform4fv(this.addr,n)}function jT(t,e){const n=ua(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XT(t,e){const n=ua(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $T(t,e){const n=ua(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function YT(t,e){t.uniform1iv(this.addr,e)}function qT(t,e){t.uniform2iv(this.addr,e)}function ZT(t,e){t.uniform3iv(this.addr,e)}function KT(t,e){t.uniform4iv(this.addr,e)}function JT(t,e){t.uniform1uiv(this.addr,e)}function QT(t,e){t.uniform2uiv(this.addr,e)}function e2(t,e){t.uniform3uiv(this.addr,e)}function t2(t,e){t.uniform4uiv(this.addr,e)}function n2(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);En(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||D_,s[o])}function i2(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);En(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||F_,s[o])}function r2(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);En(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||k_,s[o])}function s2(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);En(i,s)||(t.uniform1iv(this.addr,s),bn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||O_,s[o])}function o2(t){switch(t){case 5126:return HT;case 35664:return VT;case 35665:return GT;case 35666:return WT;case 35674:return jT;case 35675:return XT;case 35676:return $T;case 5124:case 35670:return YT;case 35667:case 35671:return qT;case 35668:case 35672:return ZT;case 35669:case 35673:return KT;case 5125:return JT;case 36294:return QT;case 36295:return e2;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return n2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return r2;case 36289:case 36303:case 36311:case 36292:return s2}}class a2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BT(n.type)}}class l2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=o2(n.type)}}class c2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function v0(t,e){t.seq.push(e),t.map[e.id]=e}function u2(t,e,n){const i=t.name,r=i.length;for(ih.lastIndex=0;;){const s=ih.exec(i),o=ih.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){v0(n,c===void 0?new a2(a,t,e):new l2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new c2(a),v0(n,h)),n=h}}}class qc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);u2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function _0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const d2=37297;let h2=0;function f2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function p2(t){const e=zt.getPrimaries(zt.workingColorSpace),n=zt.getPrimaries(t);let i;switch(e===n?i="":e===Tu&&n===bu?i="LinearDisplayP3ToLinearSRGB":e===bu&&n===Tu&&(i="LinearSRGBToLinearDisplayP3"),t){case Ir:case qu:return[i,"LinearTransferOETF"];case en:case Cp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function y0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+f2(t.getShaderSource(e),o)}else return r}function m2(t,e){const n=p2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function g2(t,e){let n;switch(e){case mw:n="Linear";break;case gw:n="Reinhard";break;case xw:n="OptimizedCineon";break;case d_:n="ACESFilmic";break;case _w:n="AgX";break;case vw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function x2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zo).join(`
`)}function v2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(zo).join(`
`)}function _2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function y2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function zo(t){return t!==""}function S0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function M0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ef(t){return t.replace(S2,w2)}const M2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function w2(t,e){let n=Tt[e];if(n===void 0){const i=M2.get(e);if(i!==void 0)n=Tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ef(n)}const E2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w0(t){return t.replace(E2,b2)}function b2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function E0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function T2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===l_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===c_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Mr&&(e="SHADOWMAP_TYPE_VSM"),e}function A2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case na:case ia:e="ENVMAP_TYPE_CUBE";break;case Yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ia:e="ENVMAP_MODE_REFRACTION";break}return e}function R2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case u_:e="ENVMAP_BLENDING_MULTIPLY";break;case fw:e="ENVMAP_BLENDING_MIX";break;case pw:e="ENVMAP_BLENDING_ADD";break}return e}function P2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function L2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=T2(n),c=A2(n),u=C2(n),h=R2(n),f=P2(n),m=n.isWebGL2?"":x2(n),x=v2(n),M=_2(s),g=r.createProgram();let d,p,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(zo).join(`
`),d.length>0&&(d+=`
`),p=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(zo).join(`
`),p.length>0&&(p+=`
`)):(d=[E0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),p=[m,E0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ls?"#define TONE_MAPPING":"",n.toneMapping!==ls?Tt.tonemapping_pars_fragment:"",n.toneMapping!==ls?g2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,m2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zo).join(`
`)),o=Ef(o),o=S0(o,n),o=M0(o,n),a=Ef(a),a=S0(a,n),a=M0(a,n),o=w0(o),a=w0(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Gg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+d+o,N=v+p+a,C=_0(r,r.VERTEX_SHADER,y),R=_0(r,r.FRAGMENT_SHADER,N);r.attachShader(g,C),r.attachShader(g,R),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function k(q){if(t.debug.checkShaderErrors){const se=r.getProgramInfoLog(g).trim(),D=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(R).trim();let $=!0,re=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,C,R);else{const B=y0(r,C,"vertex"),Z=y0(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+B+`
`+Z)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(D===""||X==="")&&(re=!1);re&&(q.diagnostics={runnable:$,programLog:se,vertexShader:{log:D,prefix:d},fragmentShader:{log:X,prefix:p}})}r.deleteShader(C),r.deleteShader(R),b=new qc(r,g),T=y2(r,g)}let b;this.getUniforms=function(){return b===void 0&&k(this),b};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(g,d2)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=h2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=R,this}let N2=0;class I2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new D2(e),n.set(e,i)),i}}class D2{constructor(e){this.id=N2++,this.code=e,this.usedTimes=0}}function U2(t,e,n,i,r,s,o){const a=new Lp,l=new I2,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return b===0?"uv":`uv${b}`}function g(b,T,W,q,se){const D=q.fog,X=se.geometry,$=b.isMeshStandardMaterial?q.environment:null,re=(b.isMeshStandardMaterial?n:e).get(b.envMap||$),B=re&&re.mapping===Yu?re.image.height:null,Z=x[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const J=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ue=J!==void 0?J.length:0;let pe=0;X.morphAttributes.position!==void 0&&(pe=1),X.morphAttributes.normal!==void 0&&(pe=2),X.morphAttributes.color!==void 0&&(pe=3);let te,fe,ke,Ye;if(Z){const hn=rr[Z];te=hn.vertexShader,fe=hn.fragmentShader}else te=b.vertexShader,fe=b.fragmentShader,l.update(b),ke=l.getVertexShaderID(b),Ye=l.getFragmentShaderID(b);const Ve=t.getRenderTarget(),ct=se.isInstancedMesh===!0,ot=se.isBatchedMesh===!0,tt=!!b.map,We=!!b.matcap,F=!!re,ae=!!b.aoMap,le=!!b.lightMap,we=!!b.bumpMap,ce=!!b.normalMap,qe=!!b.displacementMap,Ge=!!b.emissiveMap,A=!!b.metalnessMap,E=!!b.roughnessMap,Y=b.anisotropy>0,_e=b.clearcoat>0,de=b.iridescence>0,ge=b.sheen>0,nt=b.transmission>0,Oe=Y&&!!b.anisotropyMap,Ue=_e&&!!b.clearcoatMap,lt=_e&&!!b.clearcoatNormalMap,ft=_e&&!!b.clearcoatRoughnessMap,ve=de&&!!b.iridescenceMap,Lt=de&&!!b.iridescenceThicknessMap,Mt=ge&&!!b.sheenColorMap,Be=ge&&!!b.sheenRoughnessMap,Qe=!!b.specularMap,Ze=!!b.specularColorMap,gt=!!b.specularIntensityMap,It=nt&&!!b.transmissionMap,Bt=nt&&!!b.thicknessMap,xt=!!b.gradientMap,Pe=!!b.alphaMap,z=b.alphaTest>0,Me=!!b.alphaHash,Ie=!!b.extensions,ze=!!X.attributes.uv1,rt=!!X.attributes.uv2,Rt=!!X.attributes.uv3;let Dt=ls;return b.toneMapped&&(Ve===null||Ve.isXRRenderTarget===!0)&&(Dt=t.toneMapping),{isWebGL2:u,shaderID:Z,shaderType:b.type,shaderName:b.name,vertexShader:te,fragmentShader:fe,defines:b.defines,customVertexShaderID:ke,customFragmentShaderID:Ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:ot,instancing:ct,instancingColor:ct&&se.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ve===null?t.outputColorSpace:Ve.isXRRenderTarget===!0?Ve.texture.colorSpace:Ir,map:tt,matcap:We,envMap:F,envMapMode:F&&re.mapping,envMapCubeUVHeight:B,aoMap:ae,lightMap:le,bumpMap:we,normalMap:ce,displacementMap:f&&qe,emissiveMap:Ge,normalMapObjectSpace:ce&&b.normalMapType===Lw,normalMapTangentSpace:ce&&b.normalMapType===y_,metalnessMap:A,roughnessMap:E,anisotropy:Y,anisotropyMap:Oe,clearcoat:_e,clearcoatMap:Ue,clearcoatNormalMap:lt,clearcoatRoughnessMap:ft,iridescence:de,iridescenceMap:ve,iridescenceThicknessMap:Lt,sheen:ge,sheenColorMap:Mt,sheenRoughnessMap:Be,specularMap:Qe,specularColorMap:Ze,specularIntensityMap:gt,transmission:nt,transmissionMap:It,thicknessMap:Bt,gradientMap:xt,opaque:b.transparent===!1&&b.blending===$o,alphaMap:Pe,alphaTest:z,alphaHash:Me,combine:b.combine,mapUv:tt&&M(b.map.channel),aoMapUv:ae&&M(b.aoMap.channel),lightMapUv:le&&M(b.lightMap.channel),bumpMapUv:we&&M(b.bumpMap.channel),normalMapUv:ce&&M(b.normalMap.channel),displacementMapUv:qe&&M(b.displacementMap.channel),emissiveMapUv:Ge&&M(b.emissiveMap.channel),metalnessMapUv:A&&M(b.metalnessMap.channel),roughnessMapUv:E&&M(b.roughnessMap.channel),anisotropyMapUv:Oe&&M(b.anisotropyMap.channel),clearcoatMapUv:Ue&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:lt&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(b.sheenRoughnessMap.channel),specularMapUv:Qe&&M(b.specularMap.channel),specularColorMapUv:Ze&&M(b.specularColorMap.channel),specularIntensityMapUv:gt&&M(b.specularIntensityMap.channel),transmissionMapUv:It&&M(b.transmissionMap.channel),thicknessMapUv:Bt&&M(b.thicknessMap.channel),alphaMapUv:Pe&&M(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ce||Y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:rt,vertexUv3s:Rt,pointsUvs:se.isPoints===!0&&!!X.attributes.uv&&(tt||Pe),fog:!!D,useFog:b.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:se.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:Dt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:tt&&b.map.isVideoTexture===!0&&zt.getTransfer(b.map.colorSpace)===Zt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ui,flipSided:b.side===Qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Ie&&b.extensions.derivatives===!0,extensionFragDepth:Ie&&b.extensions.fragDepth===!0,extensionDrawBuffers:Ie&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ie&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const W in b.defines)T.push(W),T.push(b.defines[W]);return b.isRawShaderMaterial===!1&&(p(T,b),v(T,b),T.push(t.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function p(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function v(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function y(b){const T=x[b.type];let W;if(T){const q=rr[T];W=x1.clone(q.uniforms)}else W=b.uniforms;return W}function N(b,T){let W;for(let q=0,se=c.length;q<se;q++){const D=c[q];if(D.cacheKey===T){W=D,++W.usedTimes;break}}return W===void 0&&(W=new L2(t,T,b,s),c.push(W)),W}function C(b){if(--b.usedTimes===0){const T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function k(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:N,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:k}}function O2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function F2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function b0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function T0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,m,x,M,g){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:x,renderOrder:h.renderOrder,z:M,group:g},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=x,d.renderOrder=h.renderOrder,d.z=M,d.group=g),e++,d}function a(h,f,m,x,M,g){const d=o(h,f,m,x,M,g);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(h,f,m,x,M,g){const d=o(h,f,m,x,M,g);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||F2),i.length>1&&i.sort(f||b0),r.length>1&&r.sort(f||b0)}function u(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function k2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new T0,t.set(i,[o])):r>=s.length?(o=new T0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function z2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Ct};break;case"SpotLight":n={position:new O,direction:new O,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function B2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let H2=0;function V2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function G2(t,e){const n=new z2,i=B2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,o=new ln,a=new ln;function l(u,h){let f=0,m=0,x=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let M=0,g=0,d=0,p=0,v=0,y=0,N=0,C=0,R=0,k=0,b=0;u.sort(V2);const T=h===!0?Math.PI:1;for(let q=0,se=u.length;q<se;q++){const D=u[q],X=D.color,$=D.intensity,re=D.distance,B=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=X.r*$*T,m+=X.g*$*T,x+=X.b*$*T;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(D.sh.coefficients[Z],$);b++}else if(D.isDirectionalLight){const Z=n.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const J=D.shadow,ue=i.get(D);ue.shadowBias=J.bias,ue.shadowNormalBias=J.normalBias,ue.shadowRadius=J.radius,ue.shadowMapSize=J.mapSize,r.directionalShadow[M]=ue,r.directionalShadowMap[M]=B,r.directionalShadowMatrix[M]=D.shadow.matrix,y++}r.directional[M]=Z,M++}else if(D.isSpotLight){const Z=n.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(X).multiplyScalar($*T),Z.distance=re,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,r.spot[d]=Z;const J=D.shadow;if(D.map&&(r.spotLightMap[R]=D.map,R++,J.updateMatrices(D),D.castShadow&&k++),r.spotLightMatrix[d]=J.matrix,D.castShadow){const ue=i.get(D);ue.shadowBias=J.bias,ue.shadowNormalBias=J.normalBias,ue.shadowRadius=J.radius,ue.shadowMapSize=J.mapSize,r.spotShadow[d]=ue,r.spotShadowMap[d]=B,C++}d++}else if(D.isRectAreaLight){const Z=n.get(D);Z.color.copy(X).multiplyScalar($),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),r.rectArea[p]=Z,p++}else if(D.isPointLight){const Z=n.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*T),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const J=D.shadow,ue=i.get(D);ue.shadowBias=J.bias,ue.shadowNormalBias=J.normalBias,ue.shadowRadius=J.radius,ue.shadowMapSize=J.mapSize,ue.shadowCameraNear=J.camera.near,ue.shadowCameraFar=J.camera.far,r.pointShadow[g]=ue,r.pointShadowMap[g]=B,r.pointShadowMatrix[g]=D.shadow.matrix,N++}r.point[g]=Z,g++}else if(D.isHemisphereLight){const Z=n.get(D);Z.skyColor.copy(D.color).multiplyScalar($*T),Z.groundColor.copy(D.groundColor).multiplyScalar($*T),r.hemi[v]=Z,v++}}p>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==M||W.pointLength!==g||W.spotLength!==d||W.rectAreaLength!==p||W.hemiLength!==v||W.numDirectionalShadows!==y||W.numPointShadows!==N||W.numSpotShadows!==C||W.numSpotMaps!==R||W.numLightProbes!==b)&&(r.directional.length=M,r.spot.length=d,r.rectArea.length=p,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=C+R-k,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=b,W.directionalLength=M,W.pointLength=g,W.spotLength=d,W.rectAreaLength=p,W.hemiLength=v,W.numDirectionalShadows=y,W.numPointShadows=N,W.numSpotShadows=C,W.numSpotMaps=R,W.numLightProbes=b,r.version=H2++)}function c(u,h){let f=0,m=0,x=0,M=0,g=0;const d=h.matrixWorldInverse;for(let p=0,v=u.length;p<v;p++){const y=u[p];if(y.isDirectionalLight){const N=r.directional[f];N.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(d),f++}else if(y.isSpotLight){const N=r.spot[x];N.position.setFromMatrixPosition(y.matrixWorld),N.position.applyMatrix4(d),N.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(d),x++}else if(y.isRectAreaLight){const N=r.rectArea[M];N.position.setFromMatrixPosition(y.matrixWorld),N.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),N.halfWidth.set(y.width*.5,0,0),N.halfHeight.set(0,y.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){const N=r.point[m];N.position.setFromMatrixPosition(y.matrixWorld),N.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){const N=r.hemi[g];N.direction.setFromMatrixPosition(y.matrixWorld),N.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:r}}function A0(t,e){const n=new G2(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function W2(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new A0(t,e),n.set(s,[l])):o>=a.length?(l=new A0(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class j2 extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class X2 extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y2=`uniform sampler2D shadow_pass;
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
}`;function q2(t,e,n){let i=new Np;const r=new ye,s=new ye,o=new nn,a=new j2({depthPacking:Pw}),l=new X2,c={},u=n.maxTextureSize,h={[fs]:Qn,[Qn]:fs,[ui]:ui},f=new Ws({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:$2,fragmentShader:Y2}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new Mn;x.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Je(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l_;let d=this.type;this.render=function(C,R,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const b=t.getRenderTarget(),T=t.getActiveCubeFace(),W=t.getActiveMipmapLevel(),q=t.state;q.setBlending(as),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const se=d!==Mr&&this.type===Mr,D=d===Mr&&this.type!==Mr;for(let X=0,$=C.length;X<$;X++){const re=C[X],B=re.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Z=B.getFrameExtents();if(r.multiply(Z),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,B.mapSize.y=s.y)),B.map===null||se===!0||D===!0){const ue=this.type!==Mr?{minFilter:Zn,magFilter:Zn}:{};B.map!==null&&B.map.dispose(),B.map=new Gs(r.x,r.y,ue),B.map.texture.name=re.name+".shadowMap",B.camera.updateProjectionMatrix()}t.setRenderTarget(B.map),t.clear();const J=B.getViewportCount();for(let ue=0;ue<J;ue++){const pe=B.getViewport(ue);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),q.viewport(o),B.updateMatrices(re,ue),i=B.getFrustum(),y(R,k,B.camera,re,this.type)}B.isPointLightShadow!==!0&&this.type===Mr&&p(B,k),B.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(b,T,W)};function p(C,R){const k=e.update(M);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Gs(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,k,f,M,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,k,m,M,null)}function v(C,R,k,b){let T=null;const W=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(W!==void 0)T=W;else if(T=k.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const q=T.uuid,se=R.uuid;let D=c[q];D===void 0&&(D={},c[q]=D);let X=D[se];X===void 0&&(X=T.clone(),D[se]=X,R.addEventListener("dispose",N)),T=X}if(T.visible=R.visible,T.wireframe=R.wireframe,b===Mr?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:h[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=t.properties.get(T);q.light=k}return T}function y(C,R,k,b,T){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===Mr)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);const se=e.update(C),D=C.material;if(Array.isArray(D)){const X=se.groups;for(let $=0,re=X.length;$<re;$++){const B=X[$],Z=D[B.materialIndex];if(Z&&Z.visible){const J=v(C,Z,b,T);C.onBeforeShadow(t,C,R,k,se,J,B),t.renderBufferDirect(k,null,se,J,C,B),C.onAfterShadow(t,C,R,k,se,J,B)}}}else if(D.visible){const X=v(C,D,b,T);C.onBeforeShadow(t,C,R,k,se,X,null),t.renderBufferDirect(k,null,se,X,C,null),C.onAfterShadow(t,C,R,k,se,X,null)}}const q=C.children;for(let se=0,D=q.length;se<D;se++)y(q[se],R,k,b,T)}function N(C){C.target.removeEventListener("dispose",N);for(const k in c){const b=c[k],T=C.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function Z2(t,e,n){const i=n.isWebGL2;function r(){let z=!1;const Me=new nn;let Ie=null;const ze=new nn(0,0,0,0);return{setMask:function(rt){Ie!==rt&&!z&&(t.colorMask(rt,rt,rt,rt),Ie=rt)},setLocked:function(rt){z=rt},setClear:function(rt,Rt,Dt,Ot,hn){hn===!0&&(rt*=Ot,Rt*=Ot,Dt*=Ot),Me.set(rt,Rt,Dt,Ot),ze.equals(Me)===!1&&(t.clearColor(rt,Rt,Dt,Ot),ze.copy(Me))},reset:function(){z=!1,Ie=null,ze.set(-1,0,0,0)}}}function s(){let z=!1,Me=null,Ie=null,ze=null;return{setTest:function(rt){rt?ot(t.DEPTH_TEST):tt(t.DEPTH_TEST)},setMask:function(rt){Me!==rt&&!z&&(t.depthMask(rt),Me=rt)},setFunc:function(rt){if(Ie!==rt){switch(rt){case ow:t.depthFunc(t.NEVER);break;case aw:t.depthFunc(t.ALWAYS);break;case lw:t.depthFunc(t.LESS);break;case Mu:t.depthFunc(t.LEQUAL);break;case cw:t.depthFunc(t.EQUAL);break;case uw:t.depthFunc(t.GEQUAL);break;case dw:t.depthFunc(t.GREATER);break;case hw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ie=rt}},setLocked:function(rt){z=rt},setClear:function(rt){ze!==rt&&(t.clearDepth(rt),ze=rt)},reset:function(){z=!1,Me=null,Ie=null,ze=null}}}function o(){let z=!1,Me=null,Ie=null,ze=null,rt=null,Rt=null,Dt=null,Ot=null,hn=null;return{setTest:function(bt){z||(bt?ot(t.STENCIL_TEST):tt(t.STENCIL_TEST))},setMask:function(bt){Me!==bt&&!z&&(t.stencilMask(bt),Me=bt)},setFunc:function(bt,fn,ii){(Ie!==bt||ze!==fn||rt!==ii)&&(t.stencilFunc(bt,fn,ii),Ie=bt,ze=fn,rt=ii)},setOp:function(bt,fn,ii){(Rt!==bt||Dt!==fn||Ot!==ii)&&(t.stencilOp(bt,fn,ii),Rt=bt,Dt=fn,Ot=ii)},setLocked:function(bt){z=bt},setClear:function(bt){hn!==bt&&(t.clearStencil(bt),hn=bt)},reset:function(){z=!1,Me=null,Ie=null,ze=null,rt=null,Rt=null,Dt=null,Ot=null,hn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},x=new WeakMap,M=[],g=null,d=!1,p=null,v=null,y=null,N=null,C=null,R=null,k=null,b=new Ct(0,0,0),T=0,W=!1,q=null,se=null,D=null,X=null,$=null;const re=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),B=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),B=Z>=2);let ue=null,pe={};const te=t.getParameter(t.SCISSOR_BOX),fe=t.getParameter(t.VIEWPORT),ke=new nn().fromArray(te),Ye=new nn().fromArray(fe);function Ve(z,Me,Ie,ze){const rt=new Uint8Array(4),Rt=t.createTexture();t.bindTexture(z,Rt),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Dt=0;Dt<Ie;Dt++)i&&(z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY)?t.texImage3D(Me,0,t.RGBA,1,1,ze,0,t.RGBA,t.UNSIGNED_BYTE,rt):t.texImage2D(Me+Dt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,rt);return Rt}const ct={};ct[t.TEXTURE_2D]=Ve(t.TEXTURE_2D,t.TEXTURE_2D,1),ct[t.TEXTURE_CUBE_MAP]=Ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ct[t.TEXTURE_2D_ARRAY]=Ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ct[t.TEXTURE_3D]=Ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ot(t.DEPTH_TEST),l.setFunc(Mu),Ge(!1),A(ug),ot(t.CULL_FACE),ce(as);function ot(z){f[z]!==!0&&(t.enable(z),f[z]=!0)}function tt(z){f[z]!==!1&&(t.disable(z),f[z]=!1)}function We(z,Me){return m[z]!==Me?(t.bindFramebuffer(z,Me),m[z]=Me,i&&(z===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=Me),z===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=Me)),!0):!1}function F(z,Me){let Ie=M,ze=!1;if(z)if(Ie=x.get(Me),Ie===void 0&&(Ie=[],x.set(Me,Ie)),z.isWebGLMultipleRenderTargets){const rt=z.texture;if(Ie.length!==rt.length||Ie[0]!==t.COLOR_ATTACHMENT0){for(let Rt=0,Dt=rt.length;Rt<Dt;Rt++)Ie[Rt]=t.COLOR_ATTACHMENT0+Rt;Ie.length=rt.length,ze=!0}}else Ie[0]!==t.COLOR_ATTACHMENT0&&(Ie[0]=t.COLOR_ATTACHMENT0,ze=!0);else Ie[0]!==t.BACK&&(Ie[0]=t.BACK,ze=!0);ze&&(n.isWebGL2?t.drawBuffers(Ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ie))}function ae(z){return g!==z?(t.useProgram(z),g=z,!0):!1}const le={[As]:t.FUNC_ADD,[jM]:t.FUNC_SUBTRACT,[XM]:t.FUNC_REVERSE_SUBTRACT};if(i)le[pg]=t.MIN,le[mg]=t.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(le[pg]=z.MIN_EXT,le[mg]=z.MAX_EXT)}const we={[$M]:t.ZERO,[YM]:t.ONE,[qM]:t.SRC_COLOR,[gf]:t.SRC_ALPHA,[tw]:t.SRC_ALPHA_SATURATE,[QM]:t.DST_COLOR,[KM]:t.DST_ALPHA,[ZM]:t.ONE_MINUS_SRC_COLOR,[xf]:t.ONE_MINUS_SRC_ALPHA,[ew]:t.ONE_MINUS_DST_COLOR,[JM]:t.ONE_MINUS_DST_ALPHA,[nw]:t.CONSTANT_COLOR,[iw]:t.ONE_MINUS_CONSTANT_COLOR,[rw]:t.CONSTANT_ALPHA,[sw]:t.ONE_MINUS_CONSTANT_ALPHA};function ce(z,Me,Ie,ze,rt,Rt,Dt,Ot,hn,bt){if(z===as){d===!0&&(tt(t.BLEND),d=!1);return}if(d===!1&&(ot(t.BLEND),d=!0),z!==WM){if(z!==p||bt!==W){if((v!==As||C!==As)&&(t.blendEquation(t.FUNC_ADD),v=As,C=As),bt)switch(z){case $o:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dg:t.blendFunc(t.ONE,t.ONE);break;case hg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case $o:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case hg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,N=null,R=null,k=null,b.set(0,0,0),T=0,p=z,W=bt}return}rt=rt||Me,Rt=Rt||Ie,Dt=Dt||ze,(Me!==v||rt!==C)&&(t.blendEquationSeparate(le[Me],le[rt]),v=Me,C=rt),(Ie!==y||ze!==N||Rt!==R||Dt!==k)&&(t.blendFuncSeparate(we[Ie],we[ze],we[Rt],we[Dt]),y=Ie,N=ze,R=Rt,k=Dt),(Ot.equals(b)===!1||hn!==T)&&(t.blendColor(Ot.r,Ot.g,Ot.b,hn),b.copy(Ot),T=hn),p=z,W=!1}function qe(z,Me){z.side===ui?tt(t.CULL_FACE):ot(t.CULL_FACE);let Ie=z.side===Qn;Me&&(Ie=!Ie),Ge(Ie),z.blending===$o&&z.transparent===!1?ce(as):ce(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const ze=z.stencilWrite;c.setTest(ze),ze&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Y(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ot(t.SAMPLE_ALPHA_TO_COVERAGE):tt(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(z){q!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),q=z)}function A(z){z!==VM?(ot(t.CULL_FACE),z!==se&&(z===ug?t.cullFace(t.BACK):z===GM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):tt(t.CULL_FACE),se=z}function E(z){z!==D&&(B&&t.lineWidth(z),D=z)}function Y(z,Me,Ie){z?(ot(t.POLYGON_OFFSET_FILL),(X!==Me||$!==Ie)&&(t.polygonOffset(Me,Ie),X=Me,$=Ie)):tt(t.POLYGON_OFFSET_FILL)}function _e(z){z?ot(t.SCISSOR_TEST):tt(t.SCISSOR_TEST)}function de(z){z===void 0&&(z=t.TEXTURE0+re-1),ue!==z&&(t.activeTexture(z),ue=z)}function ge(z,Me,Ie){Ie===void 0&&(ue===null?Ie=t.TEXTURE0+re-1:Ie=ue);let ze=pe[Ie];ze===void 0&&(ze={type:void 0,texture:void 0},pe[Ie]=ze),(ze.type!==z||ze.texture!==Me)&&(ue!==Ie&&(t.activeTexture(Ie),ue=Ie),t.bindTexture(z,Me||ct[z]),ze.type=z,ze.texture=Me)}function nt(){const z=pe[ue];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Oe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{t.compressedTexImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Qe(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ze(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(z){ke.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),ke.copy(z))}function It(z){Ye.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),Ye.copy(z))}function Bt(z,Me){let Ie=h.get(Me);Ie===void 0&&(Ie=new WeakMap,h.set(Me,Ie));let ze=Ie.get(z);ze===void 0&&(ze=t.getUniformBlockIndex(Me,z.name),Ie.set(z,ze))}function xt(z,Me){const ze=h.get(Me).get(z);u.get(Me)!==ze&&(t.uniformBlockBinding(Me,ze,z.__bindingPointIndex),u.set(Me,ze))}function Pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},ue=null,pe={},m={},x=new WeakMap,M=[],g=null,d=!1,p=null,v=null,y=null,N=null,C=null,R=null,k=null,b=new Ct(0,0,0),T=0,W=!1,q=null,se=null,D=null,X=null,$=null,ke.set(0,0,t.canvas.width,t.canvas.height),Ye.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ot,disable:tt,bindFramebuffer:We,drawBuffers:F,useProgram:ae,setBlending:ce,setMaterial:qe,setFlipSided:Ge,setCullFace:A,setLineWidth:E,setPolygonOffset:Y,setScissorTest:_e,activeTexture:de,bindTexture:ge,unbindTexture:nt,compressedTexImage2D:Oe,compressedTexImage3D:Ue,texImage2D:Qe,texImage3D:Ze,updateUBOMapping:Bt,uniformBlockBinding:xt,texStorage2D:Mt,texStorage3D:Be,texSubImage2D:lt,texSubImage3D:ft,compressedTexSubImage2D:ve,compressedTexSubImage3D:Lt,scissor:gt,viewport:It,reset:Pe}}function K2(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,E){return m?new OffscreenCanvas(A,E):El("canvas")}function M(A,E,Y,_e){let de=1;if((A.width>_e||A.height>_e)&&(de=_e/Math.max(A.width,A.height)),de<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ge=E?Cu:Math.floor,nt=ge(de*A.width),Oe=ge(de*A.height);h===void 0&&(h=x(nt,Oe));const Ue=Y?x(nt,Oe):h;return Ue.width=nt,Ue.height=Oe,Ue.getContext("2d").drawImage(A,0,0,nt,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+nt+"x"+Oe+")."),Ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return wf(A.width)&&wf(A.height)}function d(A){return a?!1:A.wrapS!==_i||A.wrapT!==_i||A.minFilter!==Zn&&A.minFilter!==Kn}function p(A,E){return A.generateMipmaps&&E&&A.minFilter!==Zn&&A.minFilter!==Kn}function v(A){t.generateMipmap(A)}function y(A,E,Y,_e,de=!1){if(a===!1)return E;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ge=E;if(E===t.RED&&(Y===t.FLOAT&&(ge=t.R32F),Y===t.HALF_FLOAT&&(ge=t.R16F),Y===t.UNSIGNED_BYTE&&(ge=t.R8)),E===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(ge=t.R8UI),Y===t.UNSIGNED_SHORT&&(ge=t.R16UI),Y===t.UNSIGNED_INT&&(ge=t.R32UI),Y===t.BYTE&&(ge=t.R8I),Y===t.SHORT&&(ge=t.R16I),Y===t.INT&&(ge=t.R32I)),E===t.RG&&(Y===t.FLOAT&&(ge=t.RG32F),Y===t.HALF_FLOAT&&(ge=t.RG16F),Y===t.UNSIGNED_BYTE&&(ge=t.RG8)),E===t.RGBA){const nt=de?Eu:zt.getTransfer(_e);Y===t.FLOAT&&(ge=t.RGBA32F),Y===t.HALF_FLOAT&&(ge=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(ge=nt===Zt?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(ge=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(ge=t.RGB5_A1)}return(ge===t.R16F||ge===t.R32F||ge===t.RG16F||ge===t.RG32F||ge===t.RGBA16F||ge===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function N(A,E,Y){return p(A,Y)===!0||A.isFramebufferTexture&&A.minFilter!==Zn&&A.minFilter!==Kn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function C(A){return A===Zn||A===gg||A===Pd?t.NEAREST:t.LINEAR}function R(A){const E=A.target;E.removeEventListener("dispose",R),b(E),E.isVideoTexture&&u.delete(E)}function k(A){const E=A.target;E.removeEventListener("dispose",k),W(E)}function b(A){const E=i.get(A);if(E.__webglInit===void 0)return;const Y=A.source,_e=f.get(Y);if(_e){const de=_e[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&T(A),Object.keys(_e).length===0&&f.delete(Y)}i.remove(A)}function T(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const Y=A.source,_e=f.get(Y);delete _e[E.__cacheKey],o.memory.textures--}function W(A){const E=A.texture,Y=i.get(A),_e=i.get(E);if(_e.__webglTexture!==void 0&&(t.deleteTexture(_e.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(Y.__webglFramebuffer[de]))for(let ge=0;ge<Y.__webglFramebuffer[de].length;ge++)t.deleteFramebuffer(Y.__webglFramebuffer[de][ge]);else t.deleteFramebuffer(Y.__webglFramebuffer[de]);Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer[de])}else{if(Array.isArray(Y.__webglFramebuffer))for(let de=0;de<Y.__webglFramebuffer.length;de++)t.deleteFramebuffer(Y.__webglFramebuffer[de]);else t.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let de=0;de<Y.__webglColorRenderbuffer.length;de++)Y.__webglColorRenderbuffer[de]&&t.deleteRenderbuffer(Y.__webglColorRenderbuffer[de]);Y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let de=0,ge=E.length;de<ge;de++){const nt=i.get(E[de]);nt.__webglTexture&&(t.deleteTexture(nt.__webglTexture),o.memory.textures--),i.remove(E[de])}i.remove(E),i.remove(A)}let q=0;function se(){q=0}function D(){const A=q;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),q+=1,A}function X(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function $(A,E){const Y=i.get(A);if(A.isVideoTexture&&qe(A),A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){const _e=A.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(Y,A,E);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+E)}function re(A,E){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){ke(Y,A,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+E)}function B(A,E){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){ke(Y,A,E);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+E)}function Z(A,E){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){Ye(Y,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+E)}const J={[_f]:t.REPEAT,[_i]:t.CLAMP_TO_EDGE,[yf]:t.MIRRORED_REPEAT},ue={[Zn]:t.NEAREST,[gg]:t.NEAREST_MIPMAP_NEAREST,[Pd]:t.NEAREST_MIPMAP_LINEAR,[Kn]:t.LINEAR,[yw]:t.LINEAR_MIPMAP_NEAREST,[Sl]:t.LINEAR_MIPMAP_LINEAR},pe={[Nw]:t.NEVER,[kw]:t.ALWAYS,[Iw]:t.LESS,[S_]:t.LEQUAL,[Dw]:t.EQUAL,[Fw]:t.GEQUAL,[Uw]:t.GREATER,[Ow]:t.NOTEQUAL};function te(A,E,Y){if(Y?(t.texParameteri(A,t.TEXTURE_WRAP_S,J[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,J[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,J[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ue[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ue[E.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==_i||E.wrapT!==_i)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,C(E.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,C(E.minFilter)),E.minFilter!==Zn&&E.minFilter!==Kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const _e=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Zn||E.minFilter!==Pd&&E.minFilter!==Sl||E.type===Jr&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ml&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(A,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function fe(A,E){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",R));const _e=E.source;let de=f.get(_e);de===void 0&&(de={},f.set(_e,de));const ge=X(E);if(ge!==A.__cacheKey){de[ge]===void 0&&(de[ge]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),de[ge].usedTimes++;const nt=de[A.__cacheKey];nt!==void 0&&(de[A.__cacheKey].usedTimes--,nt.usedTimes===0&&T(E)),A.__cacheKey=ge,A.__webglTexture=de[ge].texture}return Y}function ke(A,E,Y){let _e=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_e=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_e=t.TEXTURE_3D);const de=fe(A,E),ge=E.source;n.bindTexture(_e,A.__webglTexture,t.TEXTURE0+Y);const nt=i.get(ge);if(ge.version!==nt.__version||de===!0){n.activeTexture(t.TEXTURE0+Y);const Oe=zt.getPrimaries(zt.workingColorSpace),Ue=E.colorSpace===Pi?null:zt.getPrimaries(E.colorSpace),lt=E.colorSpace===Pi||Oe===Ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const ft=d(E)&&g(E.image)===!1;let ve=M(E.image,ft,!1,r.maxTextureSize);ve=Ge(E,ve);const Lt=g(ve)||a,Mt=s.convert(E.format,E.colorSpace);let Be=s.convert(E.type),Qe=y(E.internalFormat,Mt,Be,E.colorSpace,E.isVideoTexture);te(_e,E,Lt);let Ze;const gt=E.mipmaps,It=a&&E.isVideoTexture!==!0&&Qe!==v_,Bt=nt.__version===void 0||de===!0,xt=N(E,ve,Lt);if(E.isDepthTexture)Qe=t.DEPTH_COMPONENT,a?E.type===Jr?Qe=t.DEPTH_COMPONENT32F:E.type===Kr?Qe=t.DEPTH_COMPONENT24:E.type===Us?Qe=t.DEPTH24_STENCIL8:Qe=t.DEPTH_COMPONENT16:E.type===Jr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Os&&Qe===t.DEPTH_COMPONENT&&E.type!==Ap&&E.type!==Kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Kr,Be=s.convert(E.type)),E.format===ra&&Qe===t.DEPTH_COMPONENT&&(Qe=t.DEPTH_STENCIL,E.type!==Us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Us,Be=s.convert(E.type))),Bt&&(It?n.texStorage2D(t.TEXTURE_2D,1,Qe,ve.width,ve.height):n.texImage2D(t.TEXTURE_2D,0,Qe,ve.width,ve.height,0,Mt,Be,null));else if(E.isDataTexture)if(gt.length>0&&Lt){It&&Bt&&n.texStorage2D(t.TEXTURE_2D,xt,Qe,gt[0].width,gt[0].height);for(let Pe=0,z=gt.length;Pe<z;Pe++)Ze=gt[Pe],It?n.texSubImage2D(t.TEXTURE_2D,Pe,0,0,Ze.width,Ze.height,Mt,Be,Ze.data):n.texImage2D(t.TEXTURE_2D,Pe,Qe,Ze.width,Ze.height,0,Mt,Be,Ze.data);E.generateMipmaps=!1}else It?(Bt&&n.texStorage2D(t.TEXTURE_2D,xt,Qe,ve.width,ve.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve.width,ve.height,Mt,Be,ve.data)):n.texImage2D(t.TEXTURE_2D,0,Qe,ve.width,ve.height,0,Mt,Be,ve.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){It&&Bt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xt,Qe,gt[0].width,gt[0].height,ve.depth);for(let Pe=0,z=gt.length;Pe<z;Pe++)Ze=gt[Pe],E.format!==$i?Mt!==null?It?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Pe,0,0,0,Ze.width,Ze.height,ve.depth,Mt,Ze.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Pe,Qe,Ze.width,Ze.height,ve.depth,0,Ze.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Pe,0,0,0,Ze.width,Ze.height,ve.depth,Mt,Be,Ze.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Pe,Qe,Ze.width,Ze.height,ve.depth,0,Mt,Be,Ze.data)}else{It&&Bt&&n.texStorage2D(t.TEXTURE_2D,xt,Qe,gt[0].width,gt[0].height);for(let Pe=0,z=gt.length;Pe<z;Pe++)Ze=gt[Pe],E.format!==$i?Mt!==null?It?n.compressedTexSubImage2D(t.TEXTURE_2D,Pe,0,0,Ze.width,Ze.height,Mt,Ze.data):n.compressedTexImage2D(t.TEXTURE_2D,Pe,Qe,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?n.texSubImage2D(t.TEXTURE_2D,Pe,0,0,Ze.width,Ze.height,Mt,Be,Ze.data):n.texImage2D(t.TEXTURE_2D,Pe,Qe,Ze.width,Ze.height,0,Mt,Be,Ze.data)}else if(E.isDataArrayTexture)It?(Bt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xt,Qe,ve.width,ve.height,ve.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Mt,Be,ve.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Qe,ve.width,ve.height,ve.depth,0,Mt,Be,ve.data);else if(E.isData3DTexture)It?(Bt&&n.texStorage3D(t.TEXTURE_3D,xt,Qe,ve.width,ve.height,ve.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Mt,Be,ve.data)):n.texImage3D(t.TEXTURE_3D,0,Qe,ve.width,ve.height,ve.depth,0,Mt,Be,ve.data);else if(E.isFramebufferTexture){if(Bt)if(It)n.texStorage2D(t.TEXTURE_2D,xt,Qe,ve.width,ve.height);else{let Pe=ve.width,z=ve.height;for(let Me=0;Me<xt;Me++)n.texImage2D(t.TEXTURE_2D,Me,Qe,Pe,z,0,Mt,Be,null),Pe>>=1,z>>=1}}else if(gt.length>0&&Lt){It&&Bt&&n.texStorage2D(t.TEXTURE_2D,xt,Qe,gt[0].width,gt[0].height);for(let Pe=0,z=gt.length;Pe<z;Pe++)Ze=gt[Pe],It?n.texSubImage2D(t.TEXTURE_2D,Pe,0,0,Mt,Be,Ze):n.texImage2D(t.TEXTURE_2D,Pe,Qe,Mt,Be,Ze);E.generateMipmaps=!1}else It?(Bt&&n.texStorage2D(t.TEXTURE_2D,xt,Qe,ve.width,ve.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Mt,Be,ve)):n.texImage2D(t.TEXTURE_2D,0,Qe,Mt,Be,ve);p(E,Lt)&&v(_e),nt.__version=ge.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ye(A,E,Y){if(E.image.length!==6)return;const _e=fe(A,E),de=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+Y);const ge=i.get(de);if(de.version!==ge.__version||_e===!0){n.activeTexture(t.TEXTURE0+Y);const nt=zt.getPrimaries(zt.workingColorSpace),Oe=E.colorSpace===Pi?null:zt.getPrimaries(E.colorSpace),Ue=E.colorSpace===Pi||nt===Oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,ft=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let Pe=0;Pe<6;Pe++)!lt&&!ft?ve[Pe]=M(E.image[Pe],!1,!0,r.maxCubemapSize):ve[Pe]=ft?E.image[Pe].image:E.image[Pe],ve[Pe]=Ge(E,ve[Pe]);const Lt=ve[0],Mt=g(Lt)||a,Be=s.convert(E.format,E.colorSpace),Qe=s.convert(E.type),Ze=y(E.internalFormat,Be,Qe,E.colorSpace),gt=a&&E.isVideoTexture!==!0,It=ge.__version===void 0||_e===!0;let Bt=N(E,Lt,Mt);te(t.TEXTURE_CUBE_MAP,E,Mt);let xt;if(lt){gt&&It&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Bt,Ze,Lt.width,Lt.height);for(let Pe=0;Pe<6;Pe++){xt=ve[Pe].mipmaps;for(let z=0;z<xt.length;z++){const Me=xt[z];E.format!==$i?Be!==null?gt?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,z,0,0,Me.width,Me.height,Be,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,z,Ze,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,z,0,0,Me.width,Me.height,Be,Qe,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,z,Ze,Me.width,Me.height,0,Be,Qe,Me.data)}}}else{xt=E.mipmaps,gt&&It&&(xt.length>0&&Bt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Bt,Ze,ve[0].width,ve[0].height));for(let Pe=0;Pe<6;Pe++)if(ft){gt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ve[Pe].width,ve[Pe].height,Be,Qe,ve[Pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ze,ve[Pe].width,ve[Pe].height,0,Be,Qe,ve[Pe].data);for(let z=0;z<xt.length;z++){const Ie=xt[z].image[Pe].image;gt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,z+1,0,0,Ie.width,Ie.height,Be,Qe,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,z+1,Ze,Ie.width,Ie.height,0,Be,Qe,Ie.data)}}else{gt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,Be,Qe,ve[Pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ze,Be,Qe,ve[Pe]);for(let z=0;z<xt.length;z++){const Me=xt[z];gt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,z+1,0,0,Be,Qe,Me.image[Pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,z+1,Ze,Be,Qe,Me.image[Pe])}}}p(E,Mt)&&v(t.TEXTURE_CUBE_MAP),ge.__version=de.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ve(A,E,Y,_e,de,ge){const nt=s.convert(Y.format,Y.colorSpace),Oe=s.convert(Y.type),Ue=y(Y.internalFormat,nt,Oe,Y.colorSpace);if(!i.get(E).__hasExternalTextures){const ft=Math.max(1,E.width>>ge),ve=Math.max(1,E.height>>ge);de===t.TEXTURE_3D||de===t.TEXTURE_2D_ARRAY?n.texImage3D(de,ge,Ue,ft,ve,E.depth,0,nt,Oe,null):n.texImage2D(de,ge,Ue,ft,ve,0,nt,Oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ce(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,_e,de,i.get(Y).__webglTexture,0,we(E)):(de===t.TEXTURE_2D||de>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,_e,de,i.get(Y).__webglTexture,ge),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ct(A,E,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let _e=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(Y||ce(E)){const de=E.depthTexture;de&&de.isDepthTexture&&(de.type===Jr?_e=t.DEPTH_COMPONENT32F:de.type===Kr&&(_e=t.DEPTH_COMPONENT24));const ge=we(E);ce(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,_e,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,_e,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,_e,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const _e=we(E);Y&&ce(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,t.DEPTH24_STENCIL8,E.width,E.height):ce(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const _e=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let de=0;de<_e.length;de++){const ge=_e[de],nt=s.convert(ge.format,ge.colorSpace),Oe=s.convert(ge.type),Ue=y(ge.internalFormat,nt,Oe,ge.colorSpace),lt=we(E);Y&&ce(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,lt,Ue,E.width,E.height):ce(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,lt,Ue,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Ue,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ot(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const _e=i.get(E.depthTexture).__webglTexture,de=we(E);if(E.depthTexture.format===Os)ce(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0);else if(E.depthTexture.format===ra)ce(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function tt(A){const E=i.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ot(E.__webglFramebuffer,A)}else if(Y){E.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[_e]),E.__webglDepthbuffer[_e]=t.createRenderbuffer(),ct(E.__webglDepthbuffer[_e],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),ct(E.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(A,E,Y){const _e=i.get(A);E!==void 0&&Ve(_e.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&tt(A)}function F(A){const E=A.texture,Y=i.get(A),_e=i.get(E);A.addEventListener("dispose",k),A.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture()),_e.__version=E.version,o.memory.textures++);const de=A.isWebGLCubeRenderTarget===!0,ge=A.isWebGLMultipleRenderTargets===!0,nt=g(A)||a;if(de){Y.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Oe]=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)Y.__webglFramebuffer[Oe][Ue]=t.createFramebuffer()}else Y.__webglFramebuffer[Oe]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Oe=0;Oe<E.mipmaps.length;Oe++)Y.__webglFramebuffer[Oe]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(ge)if(r.drawBuffers){const Oe=A.texture;for(let Ue=0,lt=Oe.length;Ue<lt;Ue++){const ft=i.get(Oe[Ue]);ft.__webglTexture===void 0&&(ft.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ce(A)===!1){const Oe=ge?E:[E];Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Oe.length;Ue++){const lt=Oe[Ue];Y.__webglColorRenderbuffer[Ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[Ue]);const ft=s.convert(lt.format,lt.colorSpace),ve=s.convert(lt.type),Lt=y(lt.internalFormat,ft,ve,lt.colorSpace,A.isXRRenderTarget===!0),Mt=we(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Mt,Lt,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Y.__webglColorRenderbuffer[Ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),ct(Y.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,_e.__webglTexture),te(t.TEXTURE_CUBE_MAP,E,nt);for(let Oe=0;Oe<6;Oe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)Ve(Y.__webglFramebuffer[Oe][Ue],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Ue);else Ve(Y.__webglFramebuffer[Oe],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);p(E,nt)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ge){const Oe=A.texture;for(let Ue=0,lt=Oe.length;Ue<lt;Ue++){const ft=Oe[Ue],ve=i.get(ft);n.bindTexture(t.TEXTURE_2D,ve.__webglTexture),te(t.TEXTURE_2D,ft,nt),Ve(Y.__webglFramebuffer,A,ft,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,0),p(ft,nt)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let Oe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Oe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Oe,_e.__webglTexture),te(Oe,E,nt),a&&E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)Ve(Y.__webglFramebuffer[Ue],A,E,t.COLOR_ATTACHMENT0,Oe,Ue);else Ve(Y.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,Oe,0);p(E,nt)&&v(Oe),n.unbindTexture()}A.depthBuffer&&tt(A)}function ae(A){const E=g(A)||a,Y=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let _e=0,de=Y.length;_e<de;_e++){const ge=Y[_e];if(p(ge,E)){const nt=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Oe=i.get(ge).__webglTexture;n.bindTexture(nt,Oe),v(nt),n.unbindTexture()}}}function le(A){if(a&&A.samples>0&&ce(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],Y=A.width,_e=A.height;let de=t.COLOR_BUFFER_BIT;const ge=[],nt=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Oe=i.get(A),Ue=A.isWebGLMultipleRenderTargets===!0;if(Ue)for(let lt=0;lt<E.length;lt++)n.bindFramebuffer(t.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+lt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+lt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let lt=0;lt<E.length;lt++){ge.push(t.COLOR_ATTACHMENT0+lt),A.depthBuffer&&ge.push(nt);const ft=Oe.__ignoreDepthValues!==void 0?Oe.__ignoreDepthValues:!1;if(ft===!1&&(A.depthBuffer&&(de|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(de|=t.STENCIL_BUFFER_BIT)),Ue&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Oe.__webglColorRenderbuffer[lt]),ft===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[nt]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[nt])),Ue){const ve=i.get(E[lt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ve,0)}t.blitFramebuffer(0,0,Y,_e,0,0,Y,_e,de,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ge)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ue)for(let lt=0;lt<E.length;lt++){n.bindFramebuffer(t.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+lt,t.RENDERBUFFER,Oe.__webglColorRenderbuffer[lt]);const ft=i.get(E[lt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+lt,t.TEXTURE_2D,ft,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}}function we(A){return Math.min(r.maxSamples,A.samples)}function ce(A){const E=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qe(A){const E=o.render.frame;u.get(A)!==E&&(u.set(A,E),A.update())}function Ge(A,E){const Y=A.colorSpace,_e=A.format,de=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Mf||Y!==Ir&&Y!==Pi&&(zt.getTransfer(Y)===Zt?a===!1?e.has("EXT_sRGB")===!0&&_e===$i?(A.format=Mf,A.minFilter=Kn,A.generateMipmaps=!1):E=w_.sRGBToLinear(E):(_e!==$i||de!==cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}this.allocateTextureUnit=D,this.resetTextureUnits=se,this.setTexture2D=$,this.setTexture2DArray=re,this.setTexture3D=B,this.setTextureCube=Z,this.rebindTextures=We,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=ce}function J2(t,e,n){const i=n.isWebGL2;function r(s,o=Pi){let a;const l=zt.getTransfer(o);if(s===cs)return t.UNSIGNED_BYTE;if(s===f_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===p_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Sw)return t.BYTE;if(s===Mw)return t.SHORT;if(s===Ap)return t.UNSIGNED_SHORT;if(s===h_)return t.INT;if(s===Kr)return t.UNSIGNED_INT;if(s===Jr)return t.FLOAT;if(s===Ml)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ww)return t.ALPHA;if(s===$i)return t.RGBA;if(s===Ew)return t.LUMINANCE;if(s===bw)return t.LUMINANCE_ALPHA;if(s===Os)return t.DEPTH_COMPONENT;if(s===ra)return t.DEPTH_STENCIL;if(s===Mf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Tw)return t.RED;if(s===m_)return t.RED_INTEGER;if(s===Aw)return t.RG;if(s===g_)return t.RG_INTEGER;if(s===x_)return t.RGBA_INTEGER;if(s===Ld||s===Nd||s===Id||s===Dd)if(l===Zt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ld)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Id)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ld)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Id)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xg||s===vg||s===_g||s===yg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===xg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_g)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===v_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sg||s===Mg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sg)return l===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Mg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wg||s===Eg||s===bg||s===Tg||s===Ag||s===Cg||s===Rg||s===Pg||s===Lg||s===Ng||s===Ig||s===Dg||s===Ug||s===Og)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===wg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Eg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Tg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ag)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Cg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ng)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ig)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ug)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Og)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ud||s===Fg||s===kg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ud)return l===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Fg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cw||s===zg||s===Bg||s===Hg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ud)return a.COMPRESSED_RED_RGTC1_EXT;if(s===zg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Us?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Q2 extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ar extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eA={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),d=this._getHandJoint(c,M);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ar;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class tA extends ca{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,x=null;const M=n.getContextAttributes();let g=null,d=null;const p=[],v=[],y=new ye;let N=null;const C=new ci;C.layers.enable(1),C.viewport=new nn;const R=new ci;R.layers.enable(2),R.viewport=new nn;const k=[C,R],b=new Q2;b.layers.enable(1),b.layers.enable(2);let T=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=p[te];return fe===void 0&&(fe=new rh,p[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=p[te];return fe===void 0&&(fe=new rh,p[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=p[te];return fe===void 0&&(fe=new rh,p[te]=fe),fe.getHandSpace()};function q(te){const fe=v.indexOf(te.inputSource);if(fe===-1)return;const ke=p[fe];ke!==void 0&&(ke.update(te.inputSource,te.frame,c||o),ke.dispatchEvent({type:te.type,data:te.inputSource}))}function se(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",D);for(let te=0;te<p.length;te++){const fe=v[te];fe!==null&&(v[te]=null,p[te].disconnect(fe))}T=null,W=null,e.setRenderTarget(g),m=null,f=null,h=null,r=null,d=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",se),r.addEventListener("inputsourceschange",D),M.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:r.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,fe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Gs(m.framebufferWidth,m.framebufferHeight,{format:$i,type:cs,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let fe=null,ke=null,Ye=null;M.depth&&(Ye=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=M.stencil?ra:Os,ke=M.stencil?Us:Kr);const Ve={colorFormat:n.RGBA8,depthFormat:Ye,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ve),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Gs(f.textureWidth,f.textureHeight,{format:$i,type:cs,depthTexture:new I_(f.textureWidth,f.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});const ct=e.properties.get(d);ct.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(te){for(let fe=0;fe<te.removed.length;fe++){const ke=te.removed[fe],Ye=v.indexOf(ke);Ye>=0&&(v[Ye]=null,p[Ye].disconnect(ke))}for(let fe=0;fe<te.added.length;fe++){const ke=te.added[fe];let Ye=v.indexOf(ke);if(Ye===-1){for(let ct=0;ct<p.length;ct++)if(ct>=v.length){v.push(ke),Ye=ct;break}else if(v[ct]===null){v[ct]=ke,Ye=ct;break}if(Ye===-1)break}const Ve=p[Ye];Ve&&Ve.connect(ke)}}const X=new O,$=new O;function re(te,fe,ke){X.setFromMatrixPosition(fe.matrixWorld),$.setFromMatrixPosition(ke.matrixWorld);const Ye=X.distanceTo($),Ve=fe.projectionMatrix.elements,ct=ke.projectionMatrix.elements,ot=Ve[14]/(Ve[10]-1),tt=Ve[14]/(Ve[10]+1),We=(Ve[9]+1)/Ve[5],F=(Ve[9]-1)/Ve[5],ae=(Ve[8]-1)/Ve[0],le=(ct[8]+1)/ct[0],we=ot*ae,ce=ot*le,qe=Ye/(-ae+le),Ge=qe*-ae;fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ge),te.translateZ(qe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const A=ot+qe,E=tt+qe,Y=we-Ge,_e=ce+(Ye-Ge),de=We*tt/E*A,ge=F*tt/E*A;te.projectionMatrix.makePerspective(Y,_e,de,ge,A,E),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function B(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;b.near=R.near=C.near=te.near,b.far=R.far=C.far=te.far,(T!==b.near||W!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,W=b.far);const fe=te.parent,ke=b.cameras;B(b,fe);for(let Ye=0;Ye<ke.length;Ye++)B(ke[Ye],fe);ke.length===2?re(b,C,R):b.projectionMatrix.copy(C.projectionMatrix),Z(te,b,fe)};function Z(te,fe,ke){ke===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(ke.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=wl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)};let J=null;function ue(te,fe){if(u=fe.getViewerPose(c||o),x=fe,u!==null){const ke=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let Ye=!1;ke.length!==b.cameras.length&&(b.cameras.length=0,Ye=!0);for(let Ve=0;Ve<ke.length;Ve++){const ct=ke[Ve];let ot=null;if(m!==null)ot=m.getViewport(ct);else{const We=h.getViewSubImage(f,ct);ot=We.viewport,Ve===0&&(e.setRenderTargetTextures(d,We.colorTexture,f.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(d))}let tt=k[Ve];tt===void 0&&(tt=new ci,tt.layers.enable(Ve),tt.viewport=new nn,k[Ve]=tt),tt.matrix.fromArray(ct.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(ct.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ot.x,ot.y,ot.width,ot.height),Ve===0&&(b.matrix.copy(tt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ye===!0&&b.cameras.push(tt)}}for(let ke=0;ke<p.length;ke++){const Ye=v[ke],Ve=p[ke];Ye!==null&&Ve!==void 0&&Ve.update(Ye,fe,c||o)}J&&J(te,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),x=null}const pe=new N_;pe.setAnimationLoop(ue),this.setAnimationLoop=function(te){J=te},this.dispose=function(){}}}function nA(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,R_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,p,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),h(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),x(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),M(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,p,v):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Qn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Qn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const p=e.get(d).envMap;if(p&&(g.envMap.value=p,g.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*v,n(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,p,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*p,g.scale.value=v*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,p){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qn&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=p.texture,g.transmissionSamplerSize.value.set(p.width,p.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function M(g,d){const p=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(p.matrixWorld),g.nearDistance.value=p.shadow.camera.near,g.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iA(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(p,v){const y=v.program;i.uniformBlockBinding(p,y)}function c(p,v){let y=r[p.id];y===void 0&&(x(p),y=u(p),r[p.id]=y,p.addEventListener("dispose",g));const N=v.program;i.updateUBOMapping(p,N);const C=e.render.frame;s[p.id]!==C&&(f(p),s[p.id]=C)}function u(p){const v=h();p.__bindingPointIndex=v;const y=t.createBuffer(),N=p.__size,C=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,N,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function h(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(p){const v=r[p.id],y=p.uniforms,N=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,R=y.length;C<R;C++){const k=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,T=k.length;b<T;b++){const W=k[b];if(m(W,C,b,N)===!0){const q=W.__offset,se=Array.isArray(W.value)?W.value:[W.value];let D=0;for(let X=0;X<se.length;X++){const $=se[X],re=M($);typeof $=="number"||typeof $=="boolean"?(W.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,q+D,W.__data)):$.isMatrix3?(W.__data[0]=$.elements[0],W.__data[1]=$.elements[1],W.__data[2]=$.elements[2],W.__data[3]=0,W.__data[4]=$.elements[3],W.__data[5]=$.elements[4],W.__data[6]=$.elements[5],W.__data[7]=0,W.__data[8]=$.elements[6],W.__data[9]=$.elements[7],W.__data[10]=$.elements[8],W.__data[11]=0):($.toArray(W.__data,D),D+=re.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,W.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(p,v,y,N){const C=p.value,R=v+"_"+y;if(N[R]===void 0)return typeof C=="number"||typeof C=="boolean"?N[R]=C:N[R]=C.clone(),!0;{const k=N[R];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return N[R]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function x(p){const v=p.uniforms;let y=0;const N=16;for(let R=0,k=v.length;R<k;R++){const b=Array.isArray(v[R])?v[R]:[v[R]];for(let T=0,W=b.length;T<W;T++){const q=b[T],se=Array.isArray(q.value)?q.value:[q.value];for(let D=0,X=se.length;D<X;D++){const $=se[D],re=M($),B=y%N;B!==0&&N-B<re.boundary&&(y+=N-B),q.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=y,y+=re.storage}}}const C=y%N;return C>0&&(y+=N-C),p.__size=y,p.__cache={},this}function M(p){const v={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(v.boundary=4,v.storage=4):p.isVector2?(v.boundary=8,v.storage=8):p.isVector3||p.isColor?(v.boundary=16,v.storage=12):p.isVector4?(v.boundary=16,v.storage=16):p.isMatrix3?(v.boundary=48,v.storage=48):p.isMatrix4?(v.boundary=64,v.storage=64):p.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",p),v}function g(p){const v=p.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const p in r)t.deleteBuffer(r[p]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Zc{constructor(e={}){const{canvas:n=Qw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),x=new Int32Array(4);let M=null,g=null;const d=[],p=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this._useLegacyLights=!1,this.toneMapping=ls,this.toneMappingExposure=1;const v=this;let y=!1,N=0,C=0,R=null,k=-1,b=null;const T=new nn,W=new nn;let q=null;const se=new Ct(0);let D=0,X=n.width,$=n.height,re=1,B=null,Z=null;const J=new nn(0,0,X,$),ue=new nn(0,0,X,$);let pe=!1;const te=new Np;let fe=!1,ke=!1,Ye=null;const Ve=new ln,ct=new ye,ot=new O,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return R===null?re:1}let F=i;function ae(P,j){for(let ee=0;ee<P.length;ee++){const V=P[ee],Q=n.getContext(V,j);if(Q!==null)return Q}return null}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bp}`),n.addEventListener("webglcontextlost",Pe,!1),n.addEventListener("webglcontextrestored",z,!1),n.addEventListener("webglcontextcreationerror",Me,!1),F===null){const j=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&j.shift(),F=ae(j,P),F===null)throw ae(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let le,we,ce,qe,Ge,A,E,Y,_e,de,ge,nt,Oe,Ue,lt,ft,ve,Lt,Mt,Be,Qe,Ze,gt,It;function Bt(){le=new fT(F),we=new aT(F,le,e),le.init(we),Ze=new J2(F,le,we),ce=new Z2(F,le,we),qe=new gT(F),Ge=new O2,A=new K2(F,le,ce,Ge,we,Ze,qe),E=new cT(v),Y=new hT(v),_e=new E1(F,we),gt=new sT(F,le,_e,we),de=new pT(F,_e,qe,gt),ge=new yT(F,de,_e,qe),Mt=new _T(F,we,A),ft=new lT(Ge),nt=new U2(v,E,Y,le,we,gt,ft),Oe=new nA(v,Ge),Ue=new k2,lt=new W2(le,we),Lt=new rT(v,E,Y,ce,ge,f,l),ve=new q2(v,ge,we),It=new iA(F,qe,we,ce),Be=new oT(F,le,qe,we),Qe=new mT(F,le,qe,we),qe.programs=nt.programs,v.capabilities=we,v.extensions=le,v.properties=Ge,v.renderLists=Ue,v.shadowMap=ve,v.state=ce,v.info=qe}Bt();const xt=new tA(v,F);this.xr=xt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=le.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=le.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(P){P!==void 0&&(re=P,this.setSize(X,$,!1))},this.getSize=function(P){return P.set(X,$)},this.setSize=function(P,j,ee=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=P,$=j,n.width=Math.floor(P*re),n.height=Math.floor(j*re),ee===!0&&(n.style.width=P+"px",n.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(X*re,$*re).floor()},this.setDrawingBufferSize=function(P,j,ee){X=P,$=j,re=ee,n.width=Math.floor(P*ee),n.height=Math.floor(j*ee),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(J)},this.setViewport=function(P,j,ee,V){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,j,ee,V),ce.viewport(T.copy(J).multiplyScalar(re).floor())},this.getScissor=function(P){return P.copy(ue)},this.setScissor=function(P,j,ee,V){P.isVector4?ue.set(P.x,P.y,P.z,P.w):ue.set(P,j,ee,V),ce.scissor(W.copy(ue).multiplyScalar(re).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(P){ce.setScissorTest(pe=P)},this.setOpaqueSort=function(P){B=P},this.setTransparentSort=function(P){Z=P},this.getClearColor=function(P){return P.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(P=!0,j=!0,ee=!0){let V=0;if(P){let Q=!1;if(R!==null){const je=R.texture.format;Q=je===x_||je===g_||je===m_}if(Q){const je=R.texture.type,it=je===cs||je===Kr||je===Ap||je===Us||je===f_||je===p_,ut=Lt.getClearColor(),ht=Lt.getClearAlpha(),St=ut.r,pt=ut.g,vt=ut.b;it?(m[0]=St,m[1]=pt,m[2]=vt,m[3]=ht,F.clearBufferuiv(F.COLOR,0,m)):(x[0]=St,x[1]=pt,x[2]=vt,x[3]=ht,F.clearBufferiv(F.COLOR,0,x))}else V|=F.COLOR_BUFFER_BIT}j&&(V|=F.DEPTH_BUFFER_BIT),ee&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Pe,!1),n.removeEventListener("webglcontextrestored",z,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),Ue.dispose(),lt.dispose(),Ge.dispose(),E.dispose(),Y.dispose(),ge.dispose(),gt.dispose(),It.dispose(),nt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",hn),xt.removeEventListener("sessionend",bt),Ye&&(Ye.dispose(),Ye=null),fn.stop()};function Pe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const P=qe.autoReset,j=ve.enabled,ee=ve.autoUpdate,V=ve.needsUpdate,Q=ve.type;Bt(),qe.autoReset=P,ve.enabled=j,ve.autoUpdate=ee,ve.needsUpdate=V,ve.type=Q}function Me(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ie(P){const j=P.target;j.removeEventListener("dispose",Ie),ze(j)}function ze(P){rt(P),Ge.remove(P)}function rt(P){const j=Ge.get(P).programs;j!==void 0&&(j.forEach(function(ee){nt.releaseProgram(ee)}),P.isShaderMaterial&&nt.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,ee,V,Q,je){j===null&&(j=tt);const it=Q.isMesh&&Q.matrixWorld.determinant()<0,ut=fr(P,j,ee,V,Q);ce.setMaterial(V,it);let ht=ee.index,St=1;if(V.wireframe===!0){if(ht=de.getWireframeAttribute(ee),ht===void 0)return;St=2}const pt=ee.drawRange,vt=ee.attributes.position;let Wt=pt.start*St,zn=(pt.start+pt.count)*St;je!==null&&(Wt=Math.max(Wt,je.start*St),zn=Math.min(zn,(je.start+je.count)*St)),ht!==null?(Wt=Math.max(Wt,0),zn=Math.min(zn,ht.count)):vt!=null&&(Wt=Math.max(Wt,0),zn=Math.min(zn,vt.count));const pn=zn-Wt;if(pn<0||pn===1/0)return;gt.setup(Q,V,ut,ee,ht);let Fi,Yt=Be;if(ht!==null&&(Fi=_e.get(ht),Yt=Qe,Yt.setIndex(Fi)),Q.isMesh)V.wireframe===!0?(ce.setLineWidth(V.wireframeLinewidth*We()),Yt.setMode(F.LINES)):Yt.setMode(F.TRIANGLES);else if(Q.isLine){let wt=V.linewidth;wt===void 0&&(wt=1),ce.setLineWidth(wt*We()),Q.isLineSegments?Yt.setMode(F.LINES):Q.isLineLoop?Yt.setMode(F.LINE_LOOP):Yt.setMode(F.LINE_STRIP)}else Q.isPoints?Yt.setMode(F.POINTS):Q.isSprite&&Yt.setMode(F.TRIANGLES);if(Q.isBatchedMesh)Yt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Yt.renderInstances(Wt,pn,Q.count);else if(ee.isInstancedBufferGeometry){const wt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,fa=Math.min(ee.instanceCount,wt);Yt.renderInstances(Wt,pn,fa)}else Yt.render(Wt,pn)};function Rt(P,j,ee){P.transparent===!0&&P.side===ui&&P.forceSinglePass===!1?(P.side=Qn,P.needsUpdate=!0,Zs(P,j,ee),P.side=fs,P.needsUpdate=!0,Zs(P,j,ee),P.side=ui):Zs(P,j,ee)}this.compile=function(P,j,ee=null){ee===null&&(ee=P),g=lt.get(ee),g.init(),p.push(g),ee.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),P!==ee&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights(v._useLegacyLights);const V=new Set;return P.traverse(function(Q){const je=Q.material;if(je)if(Array.isArray(je))for(let it=0;it<je.length;it++){const ut=je[it];Rt(ut,ee,Q),V.add(ut)}else Rt(je,ee,Q),V.add(je)}),p.pop(),g=null,V},this.compileAsync=function(P,j,ee=null){const V=this.compile(P,j,ee);return new Promise(Q=>{function je(){if(V.forEach(function(it){Ge.get(it).currentProgram.isReady()&&V.delete(it)}),V.size===0){Q(P);return}setTimeout(je,10)}le.get("KHR_parallel_shader_compile")!==null?je():setTimeout(je,10)})};let Dt=null;function Ot(P){Dt&&Dt(P)}function hn(){fn.stop()}function bt(){fn.start()}const fn=new N_;fn.setAnimationLoop(Ot),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(P){Dt=P,xt.setAnimationLoop(P),P===null?fn.stop():fn.start()},xt.addEventListener("sessionstart",hn),xt.addEventListener("sessionend",bt),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(j),j=xt.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,j,R),g=lt.get(P,p.length),g.init(),p.push(g),Ve.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),te.setFromProjectionMatrix(Ve),ke=this.localClippingEnabled,fe=ft.init(this.clippingPlanes,ke),M=Ue.get(P,d.length),M.init(),d.push(M),ii(P,j,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(B,Z),this.info.render.frame++,fe===!0&&ft.beginShadows();const ee=g.state.shadowsArray;if(ve.render(ee,P,j),fe===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),Lt.render(M,P),g.setupLights(v._useLegacyLights),j.isArrayCamera){const V=j.cameras;for(let Q=0,je=V.length;Q<je;Q++){const it=V[Q];hr(M,P,it,it.viewport)}}else hr(M,P,j);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(v,P,j),gt.resetDefaultState(),k=-1,b=null,p.pop(),p.length>0?g=p[p.length-1]:g=null,d.pop(),d.length>0?M=d[d.length-1]:M=null};function ii(P,j,ee,V){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)ee=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||te.intersectsSprite(P)){V&&ot.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ve);const it=ge.update(P),ut=P.material;ut.visible&&M.push(P,it,ut,ee,ot.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||te.intersectsObject(P))){const it=ge.update(P),ut=P.material;if(V&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ot.copy(P.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),ot.copy(it.boundingSphere.center)),ot.applyMatrix4(P.matrixWorld).applyMatrix4(Ve)),Array.isArray(ut)){const ht=it.groups;for(let St=0,pt=ht.length;St<pt;St++){const vt=ht[St],Wt=ut[vt.materialIndex];Wt&&Wt.visible&&M.push(P,it,Wt,ee,ot.z,vt)}}else ut.visible&&M.push(P,it,ut,ee,ot.z,null)}}const je=P.children;for(let it=0,ut=je.length;it<ut;it++)ii(je[it],j,ee,V)}function hr(P,j,ee,V){const Q=P.opaque,je=P.transmissive,it=P.transparent;g.setupLightsView(ee),fe===!0&&ft.setGlobalState(v.clippingPlanes,ee),je.length>0&&Ur(Q,je,j,ee),V&&ce.viewport(T.copy(V)),Q.length>0&&kn(Q,j,ee),je.length>0&&kn(je,j,ee),it.length>0&&kn(it,j,ee),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Ur(P,j,ee,V){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const je=we.isWebGL2;Ye===null&&(Ye=new Gs(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?Ml:cs,minFilter:Sl,samples:je?4:0})),v.getDrawingBufferSize(ct),je?Ye.setSize(ct.x,ct.y):Ye.setSize(Cu(ct.x),Cu(ct.y));const it=v.getRenderTarget();v.setRenderTarget(Ye),v.getClearColor(se),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const ut=v.toneMapping;v.toneMapping=ls,kn(P,ee,V),A.updateMultisampleRenderTarget(Ye),A.updateRenderTargetMipmap(Ye);let ht=!1;for(let St=0,pt=j.length;St<pt;St++){const vt=j[St],Wt=vt.object,zn=vt.geometry,pn=vt.material,Fi=vt.group;if(pn.side===ui&&Wt.layers.test(V.layers)){const Yt=pn.side;pn.side=Qn,pn.needsUpdate=!0,da(Wt,ee,V,zn,pn,Fi),pn.side=Yt,pn.needsUpdate=!0,ht=!0}}ht===!0&&(A.updateMultisampleRenderTarget(Ye),A.updateRenderTargetMipmap(Ye)),v.setRenderTarget(it),v.setClearColor(se,D),v.toneMapping=ut}function kn(P,j,ee){const V=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,je=P.length;Q<je;Q++){const it=P[Q],ut=it.object,ht=it.geometry,St=V===null?it.material:V,pt=it.group;ut.layers.test(ee.layers)&&da(ut,j,ee,ht,St,pt)}}function da(P,j,ee,V,Q,je){P.onBeforeRender(v,j,ee,V,Q,je),P.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(v,j,ee,V,P,je),Q.transparent===!0&&Q.side===ui&&Q.forceSinglePass===!1?(Q.side=Qn,Q.needsUpdate=!0,v.renderBufferDirect(ee,j,V,Q,P,je),Q.side=fs,Q.needsUpdate=!0,v.renderBufferDirect(ee,j,V,Q,P,je),Q.side=ui):v.renderBufferDirect(ee,j,V,Q,P,je),P.onAfterRender(v,j,ee,V,Q,je)}function Zs(P,j,ee){j.isScene!==!0&&(j=tt);const V=Ge.get(P),Q=g.state.lights,je=g.state.shadowsArray,it=Q.state.version,ut=nt.getParameters(P,Q.state,je,j,ee),ht=nt.getProgramCacheKey(ut);let St=V.programs;V.environment=P.isMeshStandardMaterial?j.environment:null,V.fog=j.fog,V.envMap=(P.isMeshStandardMaterial?Y:E).get(P.envMap||V.environment),St===void 0&&(P.addEventListener("dispose",Ie),St=new Map,V.programs=St);let pt=St.get(ht);if(pt!==void 0){if(V.currentProgram===pt&&V.lightsStateVersion===it)return Ks(P,ut),pt}else ut.uniforms=nt.getUniforms(P),P.onBuild(ee,ut,v),P.onBeforeCompile(ut,v),pt=nt.acquireProgram(ut,ht),St.set(ht,pt),V.uniforms=ut.uniforms;const vt=V.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(vt.clippingPlanes=ft.uniform),Ks(P,ut),V.needsLights=Qu(P),V.lightsStateVersion=it,V.needsLights&&(vt.ambientLightColor.value=Q.state.ambient,vt.lightProbe.value=Q.state.probe,vt.directionalLights.value=Q.state.directional,vt.directionalLightShadows.value=Q.state.directionalShadow,vt.spotLights.value=Q.state.spot,vt.spotLightShadows.value=Q.state.spotShadow,vt.rectAreaLights.value=Q.state.rectArea,vt.ltc_1.value=Q.state.rectAreaLTC1,vt.ltc_2.value=Q.state.rectAreaLTC2,vt.pointLights.value=Q.state.point,vt.pointLightShadows.value=Q.state.pointShadow,vt.hemisphereLights.value=Q.state.hemi,vt.directionalShadowMap.value=Q.state.directionalShadowMap,vt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,vt.spotShadowMap.value=Q.state.spotShadowMap,vt.spotLightMatrix.value=Q.state.spotLightMatrix,vt.spotLightMap.value=Q.state.spotLightMap,vt.pointShadowMap.value=Q.state.pointShadowMap,vt.pointShadowMatrix.value=Q.state.pointShadowMatrix),V.currentProgram=pt,V.uniformsList=null,pt}function ha(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=qc.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function Ks(P,j){const ee=Ge.get(P);ee.outputColorSpace=j.outputColorSpace,ee.batching=j.batching,ee.instancing=j.instancing,ee.instancingColor=j.instancingColor,ee.skinning=j.skinning,ee.morphTargets=j.morphTargets,ee.morphNormals=j.morphNormals,ee.morphColors=j.morphColors,ee.morphTargetsCount=j.morphTargetsCount,ee.numClippingPlanes=j.numClippingPlanes,ee.numIntersection=j.numClipIntersection,ee.vertexAlphas=j.vertexAlphas,ee.vertexTangents=j.vertexTangents,ee.toneMapping=j.toneMapping}function fr(P,j,ee,V,Q){j.isScene!==!0&&(j=tt),A.resetTextureUnits();const je=j.fog,it=V.isMeshStandardMaterial?j.environment:null,ut=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ir,ht=(V.isMeshStandardMaterial?Y:E).get(V.envMap||it),St=V.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pt=!!ee.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),vt=!!ee.morphAttributes.position,Wt=!!ee.morphAttributes.normal,zn=!!ee.morphAttributes.color;let pn=ls;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(pn=v.toneMapping);const Fi=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Yt=Fi!==void 0?Fi.length:0,wt=Ge.get(V),fa=g.state.lights;if(fe===!0&&(ke===!0||P!==b)){const ri=P===b&&V.id===k;ft.setState(V,P,ri)}let Jt=!1;V.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==fa.state.version||wt.outputColorSpace!==ut||Q.isBatchedMesh&&wt.batching===!1||!Q.isBatchedMesh&&wt.batching===!0||Q.isInstancedMesh&&wt.instancing===!1||!Q.isInstancedMesh&&wt.instancing===!0||Q.isSkinnedMesh&&wt.skinning===!1||!Q.isSkinnedMesh&&wt.skinning===!0||Q.isInstancedMesh&&wt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&wt.instancingColor===!1&&Q.instanceColor!==null||wt.envMap!==ht||V.fog===!0&&wt.fog!==je||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==ft.numPlanes||wt.numIntersection!==ft.numIntersection)||wt.vertexAlphas!==St||wt.vertexTangents!==pt||wt.morphTargets!==vt||wt.morphNormals!==Wt||wt.morphColors!==zn||wt.toneMapping!==pn||we.isWebGL2===!0&&wt.morphTargetsCount!==Yt)&&(Jt=!0):(Jt=!0,wt.__version=V.version);let pr=wt.currentProgram;Jt===!0&&(pr=Zs(V,j,Q));let Ol=!1,xs=!1,pa=!1;const mn=pr.getUniforms(),mr=wt.uniforms;if(ce.useProgram(pr.program)&&(Ol=!0,xs=!0,pa=!0),V.id!==k&&(k=V.id,xs=!0),Ol||b!==P){mn.setValue(F,"projectionMatrix",P.projectionMatrix),mn.setValue(F,"viewMatrix",P.matrixWorldInverse);const ri=mn.map.cameraPosition;ri!==void 0&&ri.setValue(F,ot.setFromMatrixPosition(P.matrixWorld)),we.logarithmicDepthBuffer&&mn.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&mn.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,xs=!0,pa=!0)}if(Q.isSkinnedMesh){mn.setOptional(F,Q,"bindMatrix"),mn.setOptional(F,Q,"bindMatrixInverse");const ri=Q.skeleton;ri&&(we.floatVertexTextures?(ri.boneTexture===null&&ri.computeBoneTexture(),mn.setValue(F,"boneTexture",ri.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(mn.setOptional(F,Q,"batchingTexture"),mn.setValue(F,"batchingTexture",Q._matricesTexture,A));const ma=ee.morphAttributes;if((ma.position!==void 0||ma.normal!==void 0||ma.color!==void 0&&we.isWebGL2===!0)&&Mt.update(Q,ee,pr),(xs||wt.receiveShadow!==Q.receiveShadow)&&(wt.receiveShadow=Q.receiveShadow,mn.setValue(F,"receiveShadow",Q.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(mr.envMap.value=ht,mr.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),xs&&(mn.setValue(F,"toneMappingExposure",v.toneMappingExposure),wt.needsLights&&Oi(mr,pa),je&&V.fog===!0&&Oe.refreshFogUniforms(mr,je),Oe.refreshMaterialUniforms(mr,V,re,$,Ye),qc.upload(F,ha(wt),mr,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(qc.upload(F,ha(wt),mr,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&mn.setValue(F,"center",Q.center),mn.setValue(F,"modelViewMatrix",Q.modelViewMatrix),mn.setValue(F,"normalMatrix",Q.normalMatrix),mn.setValue(F,"modelMatrix",Q.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const ri=V.uniformsGroups;for(let ga=0,xa=ri.length;ga<xa;ga++)if(we.isWebGL2){const Fl=ri[ga];It.update(Fl,pr),It.bind(Fl,pr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pr}function Oi(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function Qu(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,j,ee){Ge.get(P.texture).__webglTexture=j,Ge.get(P.depthTexture).__webglTexture=ee;const V=Ge.get(P);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=ee===void 0,V.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,j){const ee=Ge.get(P);ee.__webglFramebuffer=j,ee.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,ee=0){R=P,N=j,C=ee;let V=!0,Q=null,je=!1,it=!1;if(P){const ht=Ge.get(P);ht.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(F.FRAMEBUFFER,null),V=!1):ht.__webglFramebuffer===void 0?A.setupRenderTarget(P):ht.__hasExternalTextures&&A.rebindTextures(P,Ge.get(P.texture).__webglTexture,Ge.get(P.depthTexture).__webglTexture);const St=P.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(it=!0);const pt=Ge.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(pt[j])?Q=pt[j][ee]:Q=pt[j],je=!0):we.isWebGL2&&P.samples>0&&A.useMultisampledRTT(P)===!1?Q=Ge.get(P).__webglMultisampledFramebuffer:Array.isArray(pt)?Q=pt[ee]:Q=pt,T.copy(P.viewport),W.copy(P.scissor),q=P.scissorTest}else T.copy(J).multiplyScalar(re).floor(),W.copy(ue).multiplyScalar(re).floor(),q=pe;if(ce.bindFramebuffer(F.FRAMEBUFFER,Q)&&we.drawBuffers&&V&&ce.drawBuffers(P,Q),ce.viewport(T),ce.scissor(W),ce.setScissorTest(q),je){const ht=Ge.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht.__webglTexture,ee)}else if(it){const ht=Ge.get(P.texture),St=j||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ht.__webglTexture,ee||0,St)}k=-1},this.readRenderTargetPixels=function(P,j,ee,V,Q,je,it){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=Ge.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&it!==void 0&&(ut=ut[it]),ut){ce.bindFramebuffer(F.FRAMEBUFFER,ut);try{const ht=P.texture,St=ht.format,pt=ht.type;if(St!==$i&&Ze.convert(St)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const vt=pt===Ml&&(le.has("EXT_color_buffer_half_float")||we.isWebGL2&&le.has("EXT_color_buffer_float"));if(pt!==cs&&Ze.convert(pt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(pt===Jr&&(we.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-V&&ee>=0&&ee<=P.height-Q&&F.readPixels(j,ee,V,Q,Ze.convert(St),Ze.convert(pt),je)}finally{const ht=R!==null?Ge.get(R).__webglFramebuffer:null;ce.bindFramebuffer(F.FRAMEBUFFER,ht)}}},this.copyFramebufferToTexture=function(P,j,ee=0){const V=Math.pow(2,-ee),Q=Math.floor(j.image.width*V),je=Math.floor(j.image.height*V);A.setTexture2D(j,0),F.copyTexSubImage2D(F.TEXTURE_2D,ee,0,0,P.x,P.y,Q,je),ce.unbindTexture()},this.copyTextureToTexture=function(P,j,ee,V=0){const Q=j.image.width,je=j.image.height,it=Ze.convert(ee.format),ut=Ze.convert(ee.type);A.setTexture2D(ee,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,ee.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,ee.unpackAlignment),j.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,P.x,P.y,Q,je,it,ut,j.image.data):j.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,P.x,P.y,j.mipmaps[0].width,j.mipmaps[0].height,it,j.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,V,P.x,P.y,it,ut,j.image),V===0&&ee.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ce.unbindTexture()},this.copyTextureToTexture3D=function(P,j,ee,V,Q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const je=P.max.x-P.min.x+1,it=P.max.y-P.min.y+1,ut=P.max.z-P.min.z+1,ht=Ze.convert(V.format),St=Ze.convert(V.type);let pt;if(V.isData3DTexture)A.setTexture3D(V,0),pt=F.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)A.setTexture2DArray(V,0),pt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const vt=F.getParameter(F.UNPACK_ROW_LENGTH),Wt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),zn=F.getParameter(F.UNPACK_SKIP_PIXELS),pn=F.getParameter(F.UNPACK_SKIP_ROWS),Fi=F.getParameter(F.UNPACK_SKIP_IMAGES),Yt=ee.isCompressedTexture?ee.mipmaps[Q]:ee.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Yt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Yt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,P.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,P.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,P.min.z),ee.isDataTexture||ee.isData3DTexture?F.texSubImage3D(pt,Q,j.x,j.y,j.z,je,it,ut,ht,St,Yt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(pt,Q,j.x,j.y,j.z,je,it,ut,ht,Yt.data)):F.texSubImage3D(pt,Q,j.x,j.y,j.z,je,it,ut,ht,St,Yt),F.pixelStorei(F.UNPACK_ROW_LENGTH,vt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Wt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,zn),F.pixelStorei(F.UNPACK_SKIP_ROWS,pn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fi),Q===0&&V.generateMipmaps&&F.generateMipmap(pt),ce.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?A.setTextureCube(P,0):P.isData3DTexture?A.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?A.setTexture2DArray(P,0):A.setTexture2D(P,0),ce.unbindTexture()},this.resetState=function(){N=0,C=0,R=null,ce.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Cp?"display-p3":"srgb",n.unpackColorSpace=zt.workingColorSpace===qu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===en?Fs:__}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fs?en:Ir}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rA extends Zc{}rA.prototype.isWebGL1Renderer=!0;class el{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ct(e),this.near=n,this.far=i}clone(){return new el(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kc extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class sA{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Sf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ur()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $n=new O;class Ru{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)$n.fromBufferAttribute(this,n),$n.applyMatrix4(e),this.setXYZ(n,$n.x,$n.y,$n.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)$n.fromBufferAttribute(this,n),$n.applyNormalMatrix(e),this.setXYZ(n,$n.x,$n.y,$n.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)$n.fromBufferAttribute(this,n),$n.transformDirection(e),this.setXYZ(n,$n.x,$n.y,$n.z);return this}setX(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=or(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=or(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=or(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=or(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Ii(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ru(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class z_ extends qs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let yo;const La=new O,So=new O,Mo=new O,wo=new ye,Na=new ye,B_=new ln,Ac=new O,Ia=new O,Cc=new O,C0=new ye,sh=new ye,R0=new ye;class oA extends Pn{constructor(e=new z_){if(super(),this.isSprite=!0,this.type="Sprite",yo===void 0){yo=new Mn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new sA(n,5);yo.setIndex([0,1,2,0,2,3]),yo.setAttribute("position",new Ru(i,3,0,!1)),yo.setAttribute("uv",new Ru(i,2,3,!1))}this.geometry=yo,this.material=e,this.center=new ye(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),So.setFromMatrixScale(this.matrixWorld),B_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&So.multiplyScalar(-Mo.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Rc(Ac.set(-.5,-.5,0),Mo,o,So,r,s),Rc(Ia.set(.5,-.5,0),Mo,o,So,r,s),Rc(Cc.set(.5,.5,0),Mo,o,So,r,s),C0.set(0,0),sh.set(1,0),R0.set(1,1);let a=e.ray.intersectTriangle(Ac,Ia,Cc,!1,La);if(a===null&&(Rc(Ia.set(-.5,.5,0),Mo,o,So,r,s),sh.set(0,1),a=e.ray.intersectTriangle(Ac,Cc,Ia,!1,La),a===null))return;const l=e.ray.origin.distanceTo(La);l<e.near||l>e.far||n.push({distance:l,point:La.clone(),uv:Ri.getInterpolation(La,Ac,Ia,Cc,C0,sh,R0,new ye),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Rc(t,e,n,i,r,s){wo.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Na.x=s*wo.x-r*wo.y,Na.y=r*wo.x+s*wo.y):Na.copy(wo),t.copy(e),t.x+=Na.x,t.y+=Na.y,t.applyMatrix4(B_)}class Ba extends qs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const P0=new O,L0=new O,N0=new ln,oh=new Pp,Pc=new Zu;class bf extends Pn{constructor(e=new Mn,n=new Ba){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)P0.fromBufferAttribute(n,r-1),L0.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=P0.distanceTo(L0);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pc.copy(i.boundingSphere),Pc.applyMatrix4(r),Pc.radius+=s,e.ray.intersectsSphere(Pc)===!1)return;N0.copy(r).invert(),oh.copy(e.ray).applyMatrix4(N0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,h=new O,f=new O,m=this.isLineSegments?2:1,x=i.index,g=i.attributes.position;if(x!==null){const d=Math.max(0,o.start),p=Math.min(x.count,o.start+o.count);for(let v=d,y=p-1;v<y;v+=m){const N=x.getX(v),C=x.getX(v+1);if(c.fromBufferAttribute(g,N),u.fromBufferAttribute(g,C),oh.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(f);k<e.near||k>e.far||n.push({distance:k,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),p=Math.min(g.count,o.start+o.count);for(let v=d,y=p-1;v<y;v+=m){if(c.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),oh.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||n.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const I0=new O,D0=new O;class U0 extends bf{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)I0.fromBufferAttribute(n,r),D0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+I0.distanceTo(D0);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ah extends ei{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,m=(o-u)/f;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ye:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new O,r=[],s=[],o=[],a=new O,l=new ln;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Un(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(Un(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Up extends dr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new ye,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class aA extends Up{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Op(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,m*=u,r(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Lc=new O,lh=new Op,ch=new Op,uh=new Op;class lA extends dr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new O){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Lc.subVectors(r[0],r[1]).add(r[0]),c=Lc);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Lc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Lc),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(h),m),M=Math.pow(h.distanceToSquared(f),m),g=Math.pow(f.distanceToSquared(u),m);M<1e-4&&(M=1),x<1e-4&&(x=M),g<1e-4&&(g=M),lh.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,x,M,g),ch.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,x,M,g),uh.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,x,M,g)}else this.curveType==="catmullrom"&&(lh.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ch.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),uh.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(lh.calc(l),ch.calc(l),uh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function O0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function cA(t,e){const n=1-t;return n*n*e}function uA(t,e){return 2*(1-t)*t*e}function dA(t,e){return t*t*e}function tl(t,e,n,i){return cA(t,e)+uA(t,n)+dA(t,i)}function hA(t,e){const n=1-t;return n*n*n*e}function fA(t,e){const n=1-t;return 3*n*n*t*e}function pA(t,e){return 3*(1-t)*t*t*e}function mA(t,e){return t*t*t*e}function nl(t,e,n,i,r){return hA(t,e)+fA(t,n)+pA(t,i)+mA(t,r)}class H_ extends dr{constructor(e=new ye,n=new ye,i=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(nl(e,r.x,s.x,o.x,a.x),nl(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gA extends dr{constructor(e=new O,n=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(nl(e,r.x,s.x,o.x,a.x),nl(e,r.y,s.y,o.y,a.y),nl(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class V_ extends dr{constructor(e=new ye,n=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ye){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ye){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xA extends dr{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class G_ extends dr{constructor(e=new ye,n=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(tl(e,r.x,s.x,o.x),tl(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vA extends dr{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(tl(e,r.x,s.x,o.x),tl(e,r.y,s.y,o.y),tl(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class W_ extends dr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ye){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(O0(a,l.x,c.x,u.x,h.x),O0(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ye().fromArray(r))}return this}}var Tf=Object.freeze({__proto__:null,ArcCurve:aA,CatmullRomCurve3:lA,CubicBezierCurve:H_,CubicBezierCurve3:gA,EllipseCurve:Up,LineCurve:V_,LineCurve3:xA,QuadraticBezierCurve:G_,QuadraticBezierCurve3:vA,SplineCurve:W_});class _A extends dr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tf[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Tf[r.type]().fromJSON(r))}return this}}class F0 extends _A{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new V_(this.currentPoint.clone(),new ye(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new G_(this.currentPoint.clone(),new ye(e,n),new ye(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new H_(this.currentPoint.clone(),new ye(e,n),new ye(i,r),new ye(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new W_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Up(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class js extends Mn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],m=[];let x=0;const M=[],g=i/2;let d=0;p(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(m,2));function p(){const y=new O,N=new O;let C=0;const R=(n-e)/i;for(let k=0;k<=s;k++){const b=[],T=k/s,W=T*(n-e)+e;for(let q=0;q<=r;q++){const se=q/r,D=se*l+a,X=Math.sin(D),$=Math.cos(D);N.x=W*X,N.y=-T*i+g,N.z=W*$,h.push(N.x,N.y,N.z),y.set(X,R,$).normalize(),f.push(y.x,y.y,y.z),m.push(se,1-T),b.push(x++)}M.push(b)}for(let k=0;k<r;k++)for(let b=0;b<s;b++){const T=M[b][k],W=M[b+1][k],q=M[b+1][k+1],se=M[b][k+1];u.push(T,W,se),u.push(W,q,se),C+=6}c.addGroup(d,C,0),d+=C}function v(y){const N=x,C=new ye,R=new O;let k=0;const b=y===!0?e:n,T=y===!0?1:-1;for(let q=1;q<=r;q++)h.push(0,g*T,0),f.push(0,T,0),m.push(.5,.5),x++;const W=x;for(let q=0;q<=r;q++){const D=q/r*l+a,X=Math.cos(D),$=Math.sin(D);R.x=b*$,R.y=g*T,R.z=b*X,h.push(R.x,R.y,R.z),f.push(0,T,0),C.x=X*.5+.5,C.y=$*.5*T+.5,m.push(C.x,C.y),x++}for(let q=0;q<r;q++){const se=N+q,D=W+q;y===!0?u.push(D,D+1,se):u.push(D+1,D,se),k+=3}c.addGroup(d,k,y===!0?1:2),d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fp extends js{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Fp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kp extends Mn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(p){const v=new O,y=new O,N=new O;for(let C=0;C<n.length;C+=3)m(n[C+0],v),m(n[C+1],y),m(n[C+2],N),l(v,y,N,p)}function l(p,v,y,N){const C=N+1,R=[];for(let k=0;k<=C;k++){R[k]=[];const b=p.clone().lerp(y,k/C),T=v.clone().lerp(y,k/C),W=C-k;for(let q=0;q<=W;q++)q===0&&k===C?R[k][q]=b:R[k][q]=b.clone().lerp(T,q/W)}for(let k=0;k<C;k++)for(let b=0;b<2*(C-k)-1;b++){const T=Math.floor(b/2);b%2===0?(f(R[k][T+1]),f(R[k+1][T]),f(R[k][T])):(f(R[k][T+1]),f(R[k+1][T+1]),f(R[k+1][T]))}}function c(p){const v=new O;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(p),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function u(){const p=new O;for(let v=0;v<s.length;v+=3){p.x=s[v+0],p.y=s[v+1],p.z=s[v+2];const y=g(p)/2/Math.PI+.5,N=d(p)/Math.PI+.5;o.push(y,1-N)}x(),h()}function h(){for(let p=0;p<o.length;p+=6){const v=o[p+0],y=o[p+2],N=o[p+4],C=Math.max(v,y,N),R=Math.min(v,y,N);C>.9&&R<.1&&(v<.2&&(o[p+0]+=1),y<.2&&(o[p+2]+=1),N<.2&&(o[p+4]+=1))}}function f(p){s.push(p.x,p.y,p.z)}function m(p,v){const y=p*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function x(){const p=new O,v=new O,y=new O,N=new O,C=new ye,R=new ye,k=new ye;for(let b=0,T=0;b<s.length;b+=9,T+=6){p.set(s[b+0],s[b+1],s[b+2]),v.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),C.set(o[T+0],o[T+1]),R.set(o[T+2],o[T+3]),k.set(o[T+4],o[T+5]),N.copy(p).add(v).add(y).divideScalar(3);const W=g(N);M(C,T+0,p,W),M(R,T+2,v,W),M(k,T+4,y,W)}}function M(p,v,y,N){N<0&&p.x===1&&(o[v]=p.x-1),y.x===0&&y.z===0&&(o[v]=N/2/Math.PI+.5)}function g(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kp(e.vertices,e.indices,e.radius,e.details)}}class Rs extends F0{constructor(e){super(e),this.uuid=ur(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new F0().fromJSON(r))}return this}}const yA={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=j_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,m;if(i&&(s=bA(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let x=n;x<r;x+=n)h=t[x],f=t[x+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return bl(s,o,n,a,l,m,0),o}};function j_(t,e,n,i,r){let s,o;if(r===OA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=k0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=k0(s,t[s],t[s+1],o);return o&&Ju(o,o.next)&&(Al(o),o=o.next),o}function Xs(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Ju(n,n.next)||on(n.prev,n,n.next)===0)){if(Al(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function bl(t,e,n,i,r,s,o){if(!t)return;!o&&s&&PA(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?MA(t,i,r,s):SA(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Al(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=wA(Xs(t),e,n),bl(t,e,n,i,r,s,2)):o===2&&EA(t,e,n,i,r,s):bl(Xs(t),e,n,i,r,s,1);break}}}function SA(t){const e=t.prev,n=t,i=t.next;if(on(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c;let x=i.next;for(;x!==e;){if(x.x>=u&&x.x<=f&&x.y>=h&&x.y<=m&&Bo(r,a,s,l,o,c,x.x,x.y)&&on(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function MA(t,e,n,i){const r=t.prev,s=t,o=t.next;if(on(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,x=u<h?u<f?u:f:h<f?h:f,M=a>l?a>c?a:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,d=Af(m,x,e,n,i),p=Af(M,g,e,n,i);let v=t.prevZ,y=t.nextZ;for(;v&&v.z>=d&&y&&y.z<=p;){if(v.x>=m&&v.x<=M&&v.y>=x&&v.y<=g&&v!==r&&v!==o&&Bo(a,u,l,h,c,f,v.x,v.y)&&on(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=m&&y.x<=M&&y.y>=x&&y.y<=g&&y!==r&&y!==o&&Bo(a,u,l,h,c,f,y.x,y.y)&&on(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=d;){if(v.x>=m&&v.x<=M&&v.y>=x&&v.y<=g&&v!==r&&v!==o&&Bo(a,u,l,h,c,f,v.x,v.y)&&on(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=p;){if(y.x>=m&&y.x<=M&&y.y>=x&&y.y<=g&&y!==r&&y!==o&&Bo(a,u,l,h,c,f,y.x,y.y)&&on(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function wA(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Ju(r,s)&&X_(r,i,i.next,s)&&Tl(r,s)&&Tl(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Al(i),Al(i.next),i=t=s),i=i.next}while(i!==t);return Xs(i)}function EA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&IA(o,a)){let l=$_(o,a);o=Xs(o,o.next),l=Xs(l,l.next),bl(o,e,n,i,r,s,0),bl(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function bA(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=j_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(NA(c));for(r.sort(TA),s=0;s<r.length;s++)n=AA(r[s],n);return n}function TA(t,e){return t.x-e.x}function AA(t,e){const n=CA(t,e);if(!n)return e;const i=$_(n,t);return Xs(i,i.next),Xs(n,n.next)}function CA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Bo(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Tl(n,t)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&RA(r,n)))&&(r=n,u=h)),n=n.next;while(n!==a);return r}function RA(t,e){return on(t.prev,t,e.prev)<0&&on(e.next,t,t.next)<0}function PA(t,e,n,i){let r=t;do r.z===0&&(r.z=Af(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,LA(r)}function LA(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Af(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function NA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Bo(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function IA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!DA(t,e)&&(Tl(t,e)&&Tl(e,t)&&UA(t,e)&&(on(t.prev,t,e.prev)||on(t,e.prev,e))||Ju(t,e)&&on(t.prev,t,t.next)>0&&on(e.prev,e,e.next)>0)}function on(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ju(t,e){return t.x===e.x&&t.y===e.y}function X_(t,e,n,i){const r=Ic(on(t,e,n)),s=Ic(on(t,e,i)),o=Ic(on(n,i,t)),a=Ic(on(n,i,e));return!!(r!==s&&o!==a||r===0&&Nc(t,n,e)||s===0&&Nc(t,i,e)||o===0&&Nc(n,t,i)||a===0&&Nc(n,e,i))}function Nc(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ic(t){return t>0?1:t<0?-1:0}function DA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&X_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Tl(t,e){return on(t.prev,t,t.next)<0?on(t,e,t.next)>=0&&on(t,t.prev,e)>=0:on(t,e,t.prev)<0||on(t,t.next,e)<0}function UA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function $_(t,e){const n=new Cf(t.i,t.x,t.y),i=new Cf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function k0(t,e,n,i){const r=new Cf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Al(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Cf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function OA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class us{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return us.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];z0(e),B0(i,e);let o=e.length;n.forEach(z0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,B0(i,n[l]);const a=yA.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function z0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function B0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class il extends Mn{constructor(e=new Rs([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new $t(r,3)),this.setAttribute("uv",new $t(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,m=n.bevelThickness!==void 0?n.bevelThickness:.2,x=n.bevelSize!==void 0?n.bevelSize:m-.1,M=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,p=n.UVGenerator!==void 0?n.UVGenerator:FA;let v,y=!1,N,C,R,k;d&&(v=d.getSpacedPoints(u),y=!0,f=!1,N=d.computeFrenetFrames(u,!1),C=new O,R=new O,k=new O),f||(g=0,m=0,x=0,M=0);const b=a.extractPoints(c);let T=b.shape;const W=b.holes;if(!us.isClockWise(T)){T=T.reverse();for(let F=0,ae=W.length;F<ae;F++){const le=W[F];us.isClockWise(le)&&(W[F]=le.reverse())}}const se=us.triangulateShape(T,W),D=T;for(let F=0,ae=W.length;F<ae;F++){const le=W[F];T=T.concat(le)}function X(F,ae,le){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(ae,le)}const $=T.length,re=se.length;function B(F,ae,le){let we,ce,qe;const Ge=F.x-ae.x,A=F.y-ae.y,E=le.x-F.x,Y=le.y-F.y,_e=Ge*Ge+A*A,de=Ge*Y-A*E;if(Math.abs(de)>Number.EPSILON){const ge=Math.sqrt(_e),nt=Math.sqrt(E*E+Y*Y),Oe=ae.x-A/ge,Ue=ae.y+Ge/ge,lt=le.x-Y/nt,ft=le.y+E/nt,ve=((lt-Oe)*Y-(ft-Ue)*E)/(Ge*Y-A*E);we=Oe+Ge*ve-F.x,ce=Ue+A*ve-F.y;const Lt=we*we+ce*ce;if(Lt<=2)return new ye(we,ce);qe=Math.sqrt(Lt/2)}else{let ge=!1;Ge>Number.EPSILON?E>Number.EPSILON&&(ge=!0):Ge<-Number.EPSILON?E<-Number.EPSILON&&(ge=!0):Math.sign(A)===Math.sign(Y)&&(ge=!0),ge?(we=-A,ce=Ge,qe=Math.sqrt(_e)):(we=Ge,ce=A,qe=Math.sqrt(_e/2))}return new ye(we/qe,ce/qe)}const Z=[];for(let F=0,ae=D.length,le=ae-1,we=F+1;F<ae;F++,le++,we++)le===ae&&(le=0),we===ae&&(we=0),Z[F]=B(D[F],D[le],D[we]);const J=[];let ue,pe=Z.concat();for(let F=0,ae=W.length;F<ae;F++){const le=W[F];ue=[];for(let we=0,ce=le.length,qe=ce-1,Ge=we+1;we<ce;we++,qe++,Ge++)qe===ce&&(qe=0),Ge===ce&&(Ge=0),ue[we]=B(le[we],le[qe],le[Ge]);J.push(ue),pe=pe.concat(ue)}for(let F=0;F<g;F++){const ae=F/g,le=m*Math.cos(ae*Math.PI/2),we=x*Math.sin(ae*Math.PI/2)+M;for(let ce=0,qe=D.length;ce<qe;ce++){const Ge=X(D[ce],Z[ce],we);Ve(Ge.x,Ge.y,-le)}for(let ce=0,qe=W.length;ce<qe;ce++){const Ge=W[ce];ue=J[ce];for(let A=0,E=Ge.length;A<E;A++){const Y=X(Ge[A],ue[A],we);Ve(Y.x,Y.y,-le)}}}const te=x+M;for(let F=0;F<$;F++){const ae=f?X(T[F],pe[F],te):T[F];y?(R.copy(N.normals[0]).multiplyScalar(ae.x),C.copy(N.binormals[0]).multiplyScalar(ae.y),k.copy(v[0]).add(R).add(C),Ve(k.x,k.y,k.z)):Ve(ae.x,ae.y,0)}for(let F=1;F<=u;F++)for(let ae=0;ae<$;ae++){const le=f?X(T[ae],pe[ae],te):T[ae];y?(R.copy(N.normals[F]).multiplyScalar(le.x),C.copy(N.binormals[F]).multiplyScalar(le.y),k.copy(v[F]).add(R).add(C),Ve(k.x,k.y,k.z)):Ve(le.x,le.y,h/u*F)}for(let F=g-1;F>=0;F--){const ae=F/g,le=m*Math.cos(ae*Math.PI/2),we=x*Math.sin(ae*Math.PI/2)+M;for(let ce=0,qe=D.length;ce<qe;ce++){const Ge=X(D[ce],Z[ce],we);Ve(Ge.x,Ge.y,h+le)}for(let ce=0,qe=W.length;ce<qe;ce++){const Ge=W[ce];ue=J[ce];for(let A=0,E=Ge.length;A<E;A++){const Y=X(Ge[A],ue[A],we);y?Ve(Y.x,Y.y+v[u-1].y,v[u-1].x+le):Ve(Y.x,Y.y,h+le)}}}fe(),ke();function fe(){const F=r.length/3;if(f){let ae=0,le=$*ae;for(let we=0;we<re;we++){const ce=se[we];ct(ce[2]+le,ce[1]+le,ce[0]+le)}ae=u+g*2,le=$*ae;for(let we=0;we<re;we++){const ce=se[we];ct(ce[0]+le,ce[1]+le,ce[2]+le)}}else{for(let ae=0;ae<re;ae++){const le=se[ae];ct(le[2],le[1],le[0])}for(let ae=0;ae<re;ae++){const le=se[ae];ct(le[0]+$*u,le[1]+$*u,le[2]+$*u)}}i.addGroup(F,r.length/3-F,0)}function ke(){const F=r.length/3;let ae=0;Ye(D,ae),ae+=D.length;for(let le=0,we=W.length;le<we;le++){const ce=W[le];Ye(ce,ae),ae+=ce.length}i.addGroup(F,r.length/3-F,1)}function Ye(F,ae){let le=F.length;for(;--le>=0;){const we=le;let ce=le-1;ce<0&&(ce=F.length-1);for(let qe=0,Ge=u+g*2;qe<Ge;qe++){const A=$*qe,E=$*(qe+1),Y=ae+we+A,_e=ae+ce+A,de=ae+ce+E,ge=ae+we+E;ot(Y,_e,de,ge)}}}function Ve(F,ae,le){l.push(F),l.push(ae),l.push(le)}function ct(F,ae,le){tt(F),tt(ae),tt(le);const we=r.length/3,ce=p.generateTopUV(i,r,we-3,we-2,we-1);We(ce[0]),We(ce[1]),We(ce[2])}function ot(F,ae,le,we){tt(F),tt(ae),tt(we),tt(ae),tt(le),tt(we);const ce=r.length/3,qe=p.generateSideWallUV(i,r,ce-6,ce-3,ce-2,ce-1);We(qe[0]),We(qe[1]),We(qe[3]),We(qe[1]),We(qe[2]),We(qe[3])}function tt(F){r.push(l[F*3+0]),r.push(l[F*3+1]),r.push(l[F*3+2])}function We(F){s.push(F.x),s.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return kA(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Tf[r.type]().fromJSON(r)),new il(i,e.options)}}const FA={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ye(s,o),new ye(a,l),new ye(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],m=e[r*3+1],x=e[r*3+2],M=e[s*3],g=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ye(o,1-l),new ye(c,1-h),new ye(f,1-x),new ye(M,1-d)]:[new ye(a,1-l),new ye(u,1-h),new ye(m,1-x),new ye(g,1-d)]}};function kA(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Pu extends kp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Pu(e.radius,e.detail)}}class Lu extends Mn{constructor(e=new Rs([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(s,3)),this.setAttribute("uv",new $t(o,2));function c(u){const h=r.length/3,f=u.extractPoints(n);let m=f.shape;const x=f.holes;us.isClockWise(m)===!1&&(m=m.reverse());for(let g=0,d=x.length;g<d;g++){const p=x[g];us.isClockWise(p)===!0&&(x[g]=p.reverse())}const M=us.triangulateShape(m,x);for(let g=0,d=x.length;g<d;g++){const p=x[g];m=m.concat(p)}for(let g=0,d=m.length;g<d;g++){const p=m[g];r.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let g=0,d=M.length;g<d;g++){const p=M[g],v=p[0]+h,y=p[1]+h,N=p[2]+h;i.push(v,y,N),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return zA(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new Lu(i,e.curveSegments)}}function zA(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class zp extends Mn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new O,f=new O,m=[],x=[],M=[],g=[];for(let d=0;d<=i;d++){const p=[],v=d/i;let y=0;d===0&&o===0?y=.5/n:d===i&&l===Math.PI&&(y=-.5/n);for(let N=0;N<=n;N++){const C=N/n;h.x=-e*Math.cos(r+C*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+v*a),x.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),g.push(C+y,1-v),p.push(c++)}u.push(p)}for(let d=0;d<i;d++)for(let p=0;p<n;p++){const v=u[d][p+1],y=u[d][p],N=u[d+1][p],C=u[d+1][p+1];(d!==0||o>0)&&m.push(v,y,C),(d!==i-1||l<Math.PI)&&m.push(y,N,C)}this.setIndex(m),this.setAttribute("position",new $t(x,3)),this.setAttribute("normal",new $t(M,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yn extends qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=y_,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Rf={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class BA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const HA=new BA;class Bp{constructor(e){this.manager=e!==void 0?e:HA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bp.DEFAULT_MATERIAL_NAME="__DEFAULT";class VA extends Bp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Rf.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=El("img");function l(){u(),Rf.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Dc extends Bp{constructor(e){super(e)}load(e,n,i,r){const s=new ei,o=new VA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Hp extends Pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const dh=new ln,H0=new O,V0=new O;class Y_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Np,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;H0.setFromMatrixPosition(e.matrixWorld),n.position.copy(H0),V0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(V0),n.updateMatrixWorld(),dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const G0=new ln,Da=new O,hh=new O;class GA extends Y_{constructor(){super(new ci(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new nn(2,1,1,1),new nn(0,1,1,1),new nn(3,1,1,1),new nn(1,1,1,1),new nn(3,0,1,1),new nn(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Da.setFromMatrixPosition(e.matrixWorld),i.position.copy(Da),hh.copy(i.position),hh.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(hh),i.updateMatrixWorld(),r.makeTranslation(-Da.x,-Da.y,-Da.z),G0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(G0)}}class WA extends Hp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new GA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jA extends Y_{constructor(){super(new Ip(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fh extends Hp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new jA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ph extends Hp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class mh{constructor(e,n,i=0,r=1/0){this.ray=new Pp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Lp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Pf(e,this,i,n),i.sort(W0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Pf(e[r],this,i,n);return i.sort(W0),i}}function W0(t,e){return t.distance-e.distance}function Pf(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Pf(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bp);class gh extends Kc{constructor(e=null){super();const n=new Qt;n.deleteAttribute("uv");const i=new yn({side:Qn}),r=new yn;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const o=new WA(16777215,s,28,2);o.position.set(.418,16.199,.3),this.add(o);const a=new Je(n,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const l=new Je(n,r);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new Je(n,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const u=new Je(n,r);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const h=new Je(n,r);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const f=new Je(n,r);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);const m=new Je(n,r);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);const x=new Je(n,Eo(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);const M=new Je(n,Eo(50));M.position.set(-16.109,18.021,-8.207),M.scale.set(.1,2.425,2.751),this.add(M);const g=new Je(n,Eo(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const d=new Je(n,Eo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const p=new Je(n,Eo(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const v=new Je(n,Eo(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Eo(t){const e=new ai;return e.color.setScalar(t),e}/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q_=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=Le.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>Le.createElement("svg",{ref:l,...$A,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:q_("lucide",r),...a},[...o.map(([c,u])=>Le.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=(t,e)=>{const n=Le.forwardRef(({className:i,...r},s)=>Le.createElement(YA,{ref:s,iconNode:e,className:q_(`lucide-${XA(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Uc=vn("Camera",qA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],KA=vn("Car",ZA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],j0=vn("Download",JA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],eC=vn("FolderOpen",QA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],X0=vn("Image",tC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],iC=vn("Layers",nC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],sC=vn("LockOpen",rC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],aC=vn("Lock",oC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],xh=vn("Map",lC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],uC=vn("Move",cC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],$0=vn("Plus",dC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],fC=vn("Redo",hC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],mC=vn("Save",pC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],xC=vn("Square",gC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Y0=vn("Trash2",vC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],yC=vn("Trees",_C);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],MC=vn("Type",SC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],EC=vn("Undo",wC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],TC=vn("Upload",bC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],vh=vn("X",AC),bo=()=>Math.random().toString(36).substr(2,9),In={camera:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899"],building:["#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b"],tree:["#22c55e","#16a34a","#15803d","#14532d","#84cc16","#bef264"],parking:["#e2e8f0","#cbd5e1","#94a3b8","#f8fafc","#ffffff","#f1f5f9"],label:["#1e293b","#334155","#475569","#64748b","#ef4444","#3b82f6"]},_h={width:1e3,height:700},oi=(t,e,n)=>Math.min(Math.max(t,e),n),yh=t=>{let e=t%360;return e>180&&(e-=360),e<-180&&(e+=360),e},Oc=(t,e)=>[{x:-t/2,y:-e/2},{x:t/2,y:-e/2},{x:t/2,y:e/2},{x:-t/2,y:e/2}],CC=t=>{const e=t.map(a=>a.x),n=t.map(a=>a.y),i=Math.min(...e),r=Math.max(...e),s=Math.min(...n),o=Math.max(...n);return{minX:i,maxX:r,minY:s,maxY:o,width:r-i,height:o-s}},Sh=t=>{const e=new ar,n=t.width,i=t.height,r=12,s=3,o=t.color,l=t.id.split("").reduce((q,se)=>q+se.charCodeAt(0),0)%4,c=new yn({color:o,roughness:.2,metalness:.3,flatShading:!0}),u=new yn({color:"#1e293b",roughness:.1,metalness:.9,flatShading:!0}),h=new yn({color:"#171717",roughness:.5,flatShading:!0}),f=new js(s,s,n*.15,12);f.rotateZ(Math.PI/2);const m=i*.35,x=n*.45;(()=>{[-1,1].forEach(q=>{[-1,1].forEach(se=>{const D=new Je(f,h);D.position.set(q*x,s,se*m),D.castShadow=!0,e.add(D)})})})();const g=s+1;if(l===1){const q=r*.9,se=new Je(new Qt(n,q,i),c);se.position.y=g+q/2,se.castShadow=!0,se.receiveShadow=!0,e.add(se);const D=r*.7,X=i*.8,$=n*.85,re=new Je(new Qt($,D,X),c);re.position.y=g+q+D/2-2,re.castShadow=!0,e.add(re);const B=new Je(new Qt($+.2,D*.7,X*.9),u);B.position.copy(re.position),e.add(B)}else if(l===2){const q=i*.35,se=i*.6,D=r*1.5,X=new Je(new Qt(n,r*.6,i),c);X.position.y=g+r*.3,X.castShadow=!0,e.add(X);const $=new Je(new Qt(n*.95,D,q),c);$.position.set(0,g+r*.3+D/2,-i/2+q/2+2),$.castShadow=!0,e.add($);const re=new Je(new Qt(n+.1,D*.5,q*.7),u);re.position.copy($.position),re.position.y+=2,e.add(re);const B=4,Z=new Je(new Qt(n*.95,B,se),c);Z.position.set(0,g+r*.6+B/2,i/2-se/2),e.add(Z)}else if(l===3){const q=r*.7,se=new Je(new Qt(n,q,i),c);se.position.y=g+q/2,se.castShadow=!0,e.add(se);const D=r*.5,X=i*.5,$=new Je(new Qt(n*.7,D,X),c);$.position.y=g+q+D/2-1,e.add($);const re=new Je(new Qt(n*.72,D*.8,X*.8),u);re.position.copy($.position),e.add(re)}else{const q=r*.6,se=new Je(new Qt(n,q,i),c);se.position.y=g+q/2,se.castShadow=!0,e.add(se);const D=r*.8,X=i*.5,$=new Je(new Qt(n*.85,D,X),c);$.position.y=g+q+D/2-1,$.castShadow=!0,e.add($);const re=new Je(new Qt(n*.9,D*.8,X*.9),u);re.position.copy($.position),e.add(re)}const d=new ji(3,2),p=new ai({color:"#fef3c7"}),v=new ai({color:"#ef4444"}),y=-i/2-.1,N=i/2+.1,C=g+r*.6,R=n*.35,k=new Je(d,p);k.position.set(-R,C,y),k.rotation.y=Math.PI,e.add(k);const b=new Je(d,p);b.position.set(R,C,y),b.rotation.y=Math.PI,e.add(b);const T=new Je(d,v);T.position.set(-R,C,N),e.add(T);const W=new Je(d,v);return W.position.set(R,C,N),e.add(W),e.position.set(t.x,0,t.y),e.rotation.y=-_n.degToRad(t.rotation),e},Mh=t=>{const e=new ar,n=t.id.split("").reduce((h,f)=>h+f.charCodeAt(0),0),i=n%2===0,r=t.radius*.25,s=i?t.radius*2:t.radius*1.5,o=new js(r*.6,r,s,6),a=new yn({color:"#4a3728",roughness:1,flatShading:!0}),l=new Je(o,a);l.position.y=s/2,l.castShadow=!0,l.receiveShadow=!0,e.add(l);const c=i?"#1e4620":t.color,u=new yn({color:c,roughness:.8,flatShading:!0});if(i){const f=t.radius,m=t.radius*2.5/4;for(let x=0;x<4;x++){const M=x/3,g=f*(1-M*.6),d=s*.3+x*(m*.8),p=new Je(new Fp(g,m*1.5,7),u);p.position.y=d,p.castShadow=!0,p.receiveShadow=!0,e.add(p)}}else{const h=new Pu(t.radius*.8,0),f=new Je(h,u);f.position.y=s+t.radius*.2,f.castShadow=!0,f.receiveShadow=!0,e.add(f);const m=10;for(let x=0;x<m;x++){const g=(n+x*13)%100/100*Math.PI*2,d=(n+x*7)%100/100*Math.PI,p=t.radius*(.3+(n+x*3)%5/10),v=t.radius*.7,y=new Je(new Pu(p,0),u);y.position.set(Math.sin(d)*Math.cos(g)*v,f.position.y+Math.cos(d)*v*.8,Math.sin(d)*Math.sin(g)*v),y.castShadow=!0,e.add(y)}}return e.position.set(t.x,0,t.y),e},RC=(t,e,n)=>{const i=CC(t);if(i.width===0||i.height===0)return t;const r={x:(i.minX+i.maxX)/2,y:(i.minY+i.maxY)/2},s=e/i.width,o=n/i.height;return t.map(a=>({x:r.x+(a.x-r.x)*s,y:r.y+(a.y-r.y)*o}))},PC=t=>{if(t.length<2)return t;let e=0,n=0;for(let o=0;o<t.length;o+=1){const a=(o+1)%t.length,l=t[a].x-t[o].x,c=t[a].y-t[o].y,u=Math.hypot(l,c);u>n&&(n=u,e=o)}const i=(e+1)%t.length,r={x:(t[e].x+t[i].x)/2,y:(t[e].y+t[i].y)/2},s=[...t];return s.splice(e+1,0,r),s},LC=(t,e)=>{if(t.length<2)return t;let n=0,i=Number.POSITIVE_INFINITY,r=e;for(let o=0;o<t.length;o+=1){const a=(o+1)%t.length,l=t[o],c=t[a],u={x:c.x-l.x,y:c.y-l.y},h={x:e.x-l.x,y:e.y-l.y},f=u.x*u.x+u.y*u.y||1;let m=(h.x*u.x+h.y*u.y)/f;m=oi(m,0,1);const x={x:l.x+u.x*m,y:l.y+u.y*m},M=Math.hypot(e.x-x.x,e.y-x.y);M<i&&(i=M,n=o+1,r=x)}const s=[...t];return s.splice(n,0,r),s},NC=(t,e)=>{const n=t.replace("#",""),i=n.length===3?n.split("").map(l=>l+l).join(""):n,r=parseInt(i,16),s=oi((r>>16)+e,0,255),o=oi((r>>8&255)+e,0,255),a=oi((r&255)+e,0,255);return`#${(s<<16|o<<8|a).toString(16).padStart(6,"0")}`},IC=(t,e)=>{const n=t*Math.PI/180,i=2*Math.atan(Math.tan(n/2)/Math.sqrt(e*e+1));return{h:2*Math.atan(Math.tan(i/2)*e)*180/Math.PI,v:i*180/Math.PI}},DC=(t,e)=>{const n=t*Math.PI/180,i=e*Math.PI/180;return 2*Math.atan(Math.sqrt(Math.tan(n/2)**2+Math.tan(i/2)**2))*180/Math.PI},Ua=(t,e)=>{const n=t*Math.PI/180;return 2*Math.atan(Math.tan(n/2)/e)*180/Math.PI},UC=(t,e)=>{const n=t*Math.PI/180;return 2*Math.atan(Math.tan(n/2)*e)*180/Math.PI};function OC(){var qp,Zp,Kp,Jp,Qp,em;const[t,e]=Le.useState([]),[n,i]=Le.useState(null),r=Le.useRef(null);Le.useEffect(()=>{r.current=n},[n]);const[s,o]=Le.useState([]),[a,l]=Le.useState(-1),c=Le.useRef([]),u=Le.useRef(-1);Le.useEffect(()=>{c.current=s,u.current=a},[s,a]);const h=()=>{const _=JSON.stringify(t);a>=0&&s[a]===_||(o(w=>{const L=w.slice(0,a+1);return L.push(_),L.length>30&&L.shift(),L}),l(w=>{const L=w+1;return L>=30?29:L}))},f=()=>{const _=u.current;if(_>0){const w=_-1;try{const L=JSON.parse(c.current[w]);e(L),l(w)}catch(L){console.error("Undo failed",L)}}},m=()=>{const _=u.current;if(_<c.current.length-1){const w=_+1;try{const L=JSON.parse(c.current[w]);e(L),l(w)}catch(L){console.error("Redo failed",L)}}},[x,M]=Le.useState(_h),[g,d]=Le.useState(null),[p,v]=Le.useState({x:0,y:0,width:_h.width,height:_h.height,opacity:.5}),[y,N]=Le.useState(20),[C,R]=Le.useState(!0),[k,b]=Le.useState(!0),[T,W]=Le.useState("Security Camera Plan"),[q,se]=Le.useState(!1),[D,X]=Le.useState("plan"),[$,re]=Le.useState({scale:2,padding:48,includeGrid:!0,includeLegend:!0,includeTitle:!0,includeCameraViews:!0}),[B,Z]=Le.useState({x:0,y:0}),[J,ue]=Le.useState(1),[pe,te]=Le.useState(!1),[fe,ke]=Le.useState({x:0,y:0,panX:0,panY:0}),[Ye,Ve]=Le.useState(!1),ct=Le.useRef(!1),[ot,tt]=Le.useState("select"),[We,F]=Le.useState(null),[ae,le]=Le.useState({type:null,itemId:null,startMouse:{x:0,y:0},startVal:null,snap:!1}),[we,ce]=Le.useState({}),[qe,Ge]=Le.useState(!1),[A,E]=Le.useState(null),[Y,_e]=Le.useState(0),de=(_,w)=>{const L=Math.round(_/y)*y,U=Math.round(w/y)*y;return we[`${L},${U}`]||0},ge=_=>{if(_e(_),!A)return;const{x1:w,z1:L,x2:U,z2:I}=A,K=Math.min(w,U),H=Math.max(w,U),G=Math.min(L,I),ie=Math.max(L,I);ce(ne=>{const he={...ne};for(let Ee=K;Ee<=H;Ee+=y)for(let Ae=G;Ae<=ie;Ae+=y)he[`${Ee},${Ae}`]=_;return he})},nt=Le.useRef(qe);Le.useEffect(()=>{nt.current=qe},[qe]);const Oe=Le.useRef(we),Ue=Le.useRef(null),lt=Le.useRef(null),ft=Le.useRef(null),ve=Le.useRef(null),Lt=Le.useRef(null),Mt=Le.useRef(null),Be=Le.useRef(null),Qe=Le.useRef(new Map);Le.useRef([]);const Ze=Le.useRef([]);Le.useRef({renderer:null,pmremGenerator:null,envTexture:null});const[gt,It]=Le.useState([]),[Bt,xt]=Le.useState(!1),[Pe,z]=Le.useState(!0),[Me,Ie]=Le.useState([]),[ze,rt]=Le.useState({visible:!0,opacity:.15,edgeOpacity:.6,useCameraColor:!0,color:"#3b82f6",showAll:!0,mode:"volume"}),[Rt,Dt]=Le.useState(null),[Ot,hn]=Le.useState("flat"),[bt,fn]=Le.useState(null);Le.useEffect(()=>{const _=localStorage.getItem("securityCameraPlannerData");if(_)try{const w=JSON.parse(_);w.items&&e(w.items),w.backgroundImg&&d(w.backgroundImg),w.bgSettings&&v(w.bgSettings),w.canvasSize&&M(w.canvasSize),w.exportList&&Ie(w.exportList),w.projectName&&W(w.projectName),w.frustumSettings&&rt(w.frustumSettings),w.sceneBackgroundImg&&Dt(w.sceneBackgroundImg),w.backgroundMode&&hn(w.backgroundMode)}catch(w){console.error("Failed to load saved state",w)}},[]),Le.useEffect(()=>{const _=setTimeout(()=>{try{const w={items:t,backgroundImg:g,bgSettings:p,canvasSize:x,exportList:Me,projectName:T,frustumSettings:ze,sceneBackgroundImg:Rt,backgroundMode:Ot};localStorage.setItem("securityCameraPlannerData",JSON.stringify(w))}catch(w){if(w.name==="QuotaExceededError"||w.name==="NS_ERROR_DOM_QUOTA_REACHED"){console.error("Storage full, trying to save without background image");try{const L={items:t,bgSettings:p,canvasSize:x,exportList:Me,projectName:T};localStorage.setItem("securityCameraPlannerData",JSON.stringify(L))}catch(L){console.error("Still failed to save",L)}}else console.error("Failed to save state",w)}},1e3);return()=>clearTimeout(_)},[t,g,p,x,Me,T,ze,Rt,Ot]);const ii=Le.useRef(null),hr=Le.useRef(null),Ur=(_,w=k)=>w?Math.round(_/y)*y:_,kn=_=>_.points&&_.points.length>=3?_.points:Oc(_.width,_.height),da=(_,w)=>{const L=w*Math.PI/180,U=Math.cos(L),I=Math.sin(L);return{x:_.x*U-_.y*I,y:_.x*I+_.y*U}},Zs=(_,w)=>{const L=da(_,w.rotation);return{x:w.x+L.x,y:w.y+L.y}},ha=(_,w)=>{const L=_.x-w.x,U=_.y-w.y;return da({x:L,y:U},-w.rotation)},Ks=_=>t.find(w=>w.type==="building"&&w.id===_),fr=_=>kn(_).map(L=>Zs(L,_)),Oi=_=>{var w;if(((w=_.mount)==null?void 0:w.type)==="building"&&_.mount.buildingId){const L=Ks(_.mount.buildingId);if(!L)return{x:_.x,y:_.y};const U=fr(L);if(U.length<2)return{x:_.x,y:_.y};const I=oi(_.mount.edgeIndex??0,0,U.length-1),K=(I+1)%U.length,H=U[I],G=U[K],ie=oi(_.mount.edgeT??.5,0,1),ne={x:H.x+(G.x-H.x)*ie,y:H.y+(G.y-H.y)*ie},he=U.reduce((Ne,me)=>({x:Ne.x+me.x,y:Ne.y+me.y}),{x:0,y:0});U.length>0&&(he.x/=U.length,he.y/=U.length);const Ee={x:ne.x-he.x,y:ne.y-he.y},Ae=Math.hypot(Ee.x,Ee.y)||1,be=3;return{x:ne.x+Ee.x/Ae*be,y:ne.y+Ee.y/Ae*be}}return{x:_.x,y:_.y}},Qu=_=>{let w=null;return t.forEach(L=>{if(L.type!=="building")return;const U=L,I=fr(U);for(let K=0;K<I.length;K+=1){const H=(K+1)%I.length,G=I[K],ie=I[H],ne={x:ie.x-G.x,y:ie.y-G.y},he={x:_.x-G.x,y:_.y-G.y},Ee=ne.x*ne.x+ne.y*ne.y||1;let Ae=(he.x*ne.x+he.y*ne.y)/Ee;Ae=oi(Ae,0,1);const be={x:G.x+ne.x*Ae,y:G.y+ne.y*Ae},Ne=Math.hypot(_.x-be.x,_.y-be.y);(!w||Ne<w.distance)&&(w={buildingId:U.id,edgeIndex:K,edgeT:Ae,distance:Ne,point:be})}}),w},P=_=>{let w=null;return t.forEach(L=>{if(L.type!=="building")return;const U=L,I=fr(U),K={x:I.reduce((H,G)=>H+G.x,0)/I.length,y:I.reduce((H,G)=>H+G.y,0)/I.length};for(let H=0;H<I.length;H+=1){const G=(H+1)%I.length,ie=I[H],ne=I[G],he={x:ne.x-ie.x,y:ne.y-ie.y},Ee={x:_.x-ie.x,y:_.y-ie.y},Ae=he.x*he.x+he.y*he.y||1;let be=(Ee.x*he.x+Ee.y*he.y)/Ae;be=oi(be,0,1);const Ne={x:ie.x+he.x*be,y:ie.y+he.y*be},me=Math.hypot(_.x-Ne.x,_.y-Ne.y),et={x:(ie.x+ne.x)/2,y:(ie.y+ne.y)/2},Se={x:et.x-K.x,y:et.y-K.y},oe=Math.atan2(Se.y,Se.x)*(180/Math.PI);(!w||me<w.distance)&&(w={buildingId:U.id,edgeIndex:H,edgeT:be,distance:me,point:Ne,rotation:oe})}}),w};x.width/2;const j=(_,w)=>{if(!Ue.current||D==="iso3d")return;const L=Ue.current.getScreenCTM();if(!L)return;const U=Ur((_.clientX-L.e)/L.a),I=Ur((_.clientY-L.f)/L.d);let K;const H={id:bo(),x:U,y:I,rotation:0};switch(w){case"add-camera":K={...H,type:"camera",rotation:45,label:"Camera",description:"",fov:70,hFov:70,vFov:45,pitch:-15,height:60,aspect:16/9,mount:{type:"free",edgeT:.5,height:60},range:150,color:In.camera[0],labelOffset:{x:0,y:30},connectorDashSize:3};break;case"add-building":K={...H,type:"building",width:100,height:80,label:"Building",color:In.building[0],points:Oc(100,80)};break;case"add-tree":K={...H,type:"tree",radius:25,color:In.tree[0]};break;case"add-parking":K={...H,type:"parking",width:30,height:50,color:In.parking[0]};break;case"add-label":K={...H,type:"label",text:"Label",fontSize:14,color:In.label[0]};break;default:return}if(K.type==="camera"){const G=P({x:U,y:I});if(G&&G.distance<100){const ie=K;ie.x=G.point.x,ie.y=G.point.y,ie.rotation=G.rotation;const ne=60;ie.mount={type:"building",buildingId:G.buildingId,edgeIndex:G.edgeIndex,edgeT:G.edgeT,height:ne},ie.height=ne}fn(null)}e([...t,K]),F(K.id),tt("select")},ee=_=>{const w={id:bo(),type:"image",x:400,y:300,rotation:0,width:150,height:150,src:_,label:"Image",aspectRatioLocked:!0};e([...t,w]),F(w.id)},V=(_,w)=>{e(t.map(L=>L.id===_?{...L,...w}:L))},Q=(_,w)=>{const L=t.find(U=>U.id===_);!L||L.type!=="camera"||V(_,{mount:{...L.mount??{type:"free"},...w}})},je=_=>{var U;const w=t.find(I=>I.id===_);if(!w||w.type!=="camera")return;const L=Qu(w);L&&V(_,{x:L.point.x,y:L.point.y,mount:{type:"building",buildingId:L.buildingId,edgeIndex:L.edgeIndex,edgeT:L.edgeT,height:((U=w.mount)==null?void 0:U.height)??w.height??10}})},it=(_,w,L,U)=>{V(_,{hFov:w,vFov:L,aspect:U,fov:w})},ut=(_,w,L)=>{const U=t.find(H=>H.id===_);if(!U||U.type!=="building")return;const I=kn(U),K=RC(I,w,L);V(_,{width:w,height:L,points:K})},ht=_=>{const w=t.find(U=>U.id===_);if(!w||w.type!=="building")return;const L=PC(kn(w));V(_,{points:L})},St=(_,w)=>{const L=t.find(K=>K.id===_);if(!L||L.type!=="building")return;const U=ha(w,L),I=LC(kn(L),U);V(_,{points:I})},pt=_=>{const w=t.find(U=>U.id===_);if(!w||w.type!=="building")return;const L=kn(w);L.length<=3||V(_,{points:L.slice(0,-1)})},vt=_=>{const w=t.find(L=>L.id===_);!w||w.type!=="building"||V(_,{points:Oc(w.width,w.height)})},Wt=(_,w,L)=>{const U=t.find(K=>K.id===_);if(!U||U.type!=="image")return;if(!U.aspectRatioLocked){V(_,{width:w??U.width,height:L??U.height});return}const I=U.width/U.height;w!==void 0?V(_,{width:w,height:w/I}):L!==void 0&&V(_,{width:L*I,height:L})},zn=_=>{e(t.filter(w=>w.id!==_)),We===_&&F(null)},pn=()=>{t.length&&window.confirm("Clear all items from the canvas?")&&(e([]),F(null))},Fi=()=>{v({...p,x:0,y:0,width:x.width,height:x.height})},Yt=()=>{if(!Ue.current)return;const{scale:_,padding:w,includeGrid:L,includeLegend:U,includeTitle:I}=$,K=new Date().toLocaleString(),H=x.width,G=x.height,ie=I?52:0,ne=U?90:0,he=H+w*2,Ee=G+w*2+ie+ne,Ae="http://www.w3.org/2000/svg",be=document.createElementNS(Ae,"svg");be.setAttribute("xmlns",Ae),be.setAttribute("width",`${he}`),be.setAttribute("height",`${Ee}`),be.setAttribute("viewBox",`0 0 ${he} ${Ee}`);const Ne=document.createElementNS(Ae,"rect");if(Ne.setAttribute("x","0"),Ne.setAttribute("y","0"),Ne.setAttribute("width",`${he}`),Ne.setAttribute("height",`${Ee}`),Ne.setAttribute("fill","#ffffff"),be.appendChild(Ne),I){const $e=document.createElementNS(Ae,"text");$e.setAttribute("x",`${w}`),$e.setAttribute("y",`${w+24}`),$e.setAttribute("font-size","20"),$e.setAttribute("font-weight","700"),$e.setAttribute("fill","#0f172a"),$e.textContent=T||"Security Camera Plan",be.appendChild($e);const Re=document.createElementNS(Ae,"text");Re.setAttribute("x",`${w}`),Re.setAttribute("y",`${w+44}`),Re.setAttribute("font-size","12"),Re.setAttribute("fill","#64748b"),Re.textContent=`Exported ${K}`,be.appendChild(Re)}const me=document.createElementNS(Ae,"g"),et=w+ie;me.setAttribute("transform",`translate(${w}, ${et})`);const Se=Ue.current.cloneNode(!0);if(Se.removeAttribute("width"),Se.removeAttribute("height"),!L){const $e=Se.querySelector("#grid-bg");$e&&$e.remove()}for(;Se.childNodes.length>0;)me.appendChild(Se.childNodes[0]);be.appendChild(me);const oe=document.createElementNS(Ae,"rect");if(oe.setAttribute("x",`${w-1}`),oe.setAttribute("y",`${et-1}`),oe.setAttribute("width",`${H+2}`),oe.setAttribute("height",`${G+2}`),oe.setAttribute("fill","none"),oe.setAttribute("stroke","#e2e8f0"),oe.setAttribute("stroke-width","2"),be.appendChild(oe),U){const $e=et+G+36,Re=[{label:"Cameras",count:t.filter(mt=>mt.type==="camera").length,color:In.camera[0]},{label:"Buildings",count:t.filter(mt=>mt.type==="building").length,color:In.building[0]},{label:"Trees",count:t.filter(mt=>mt.type==="tree").length,color:In.tree[0]},{label:"Parking",count:t.filter(mt=>mt.type==="parking").length,color:In.parking[0]},{label:"Labels",count:t.filter(mt=>mt.type==="label").length,color:In.label[0]}],st=document.createElementNS(Ae,"text");st.setAttribute("x",`${w}`),st.setAttribute("y",`${$e}`),st.setAttribute("font-size","12"),st.setAttribute("font-weight","600"),st.setAttribute("fill","#0f172a"),st.textContent="Legend",be.appendChild(st),Re.forEach((mt,He)=>{const Et=w+He*150,at=document.createElementNS(Ae,"rect");at.setAttribute("x",`${Et}`),at.setAttribute("y",`${$e+14}`),at.setAttribute("width","10"),at.setAttribute("height","10"),at.setAttribute("rx","2"),at.setAttribute("fill",mt.color),be.appendChild(at);const Ht=document.createElementNS(Ae,"text");Ht.setAttribute("x",`${Et+16}`),Ht.setAttribute("y",`${$e+23}`),Ht.setAttribute("font-size","11"),Ht.setAttribute("fill","#475569"),Ht.textContent=`${mt.label} (${mt.count})`,be.appendChild(Ht)})}const Ce=document.createElement("canvas"),Xe=Ce.getContext("2d");Ce.width=he*_,Ce.height=Ee*_,Xe&&Xe.scale(_,_);const Fe=new XMLSerializer().serializeToString(be),dt=new Image,_t=new Blob([Fe],{type:"image/svg+xml;charset=utf-8"}),yt=URL.createObjectURL(_t);dt.onload=()=>{if(Xe){Xe.fillStyle="#ffffff",Xe.fillRect(0,0,he,Ee),Xe.drawImage(dt,0,0);const $e=Ce.toDataURL("image/png"),Re=document.createElement("a");Re.href=$e,Re.download="security_plan.png",document.body.appendChild(Re),Re.click(),document.body.removeChild(Re)}URL.revokeObjectURL(yt)},dt.src=yt},wt=(_,w,L,U)=>{Ie(I=>[...I,{id:crypto.randomUUID(),type:_,label:w,dataUrl:L,cameraId:U}])},fa=_=>{var Ce;const U=Oi(_),I=((Ce=_.mount)==null?void 0:Ce.height)??_.height??10,K=_.hFov??_.fov,H=_.pitch??-15,G=_.range,ie=_n.degToRad(_.rotation),ne=new Kc;ne.background=new Ct("#87CEEB"),ne.fog=new el("#87CEEB",G*.3,G*1.2);const he=new ci(K,640/480,1,G*2);he.position.set(U.x,I,U.y);const Ee=_n.degToRad(H),Ae=new O(U.x+Math.cos(ie)*100,I+Math.tan(Ee)*100,U.y+Math.sin(ie)*100);he.lookAt(Ae),ne.add(new ph(16777215,.5));const be=new fh(16777215,.7);be.position.set(100,200,50),ne.add(be);const Ne=new Je(new ji(x.width*2,x.height*2),new yn({color:"#6B8E23",roughness:.9}));if(Ne.rotation.x=-Math.PI/2,Ne.position.set(x.width/2,0,x.height/2),ne.add(Ne),hr.current){const Xe=new ah(hr.current);Xe.colorSpace=en;const Fe=new Je(new ji(p.width,p.height),new ai({map:Xe,transparent:!0,opacity:p.opacity}));Fe.rotation.x=-Math.PI/2,Fe.position.set(p.x+p.width/2,.1,p.y+p.height/2),ne.add(Fe)}t.forEach(Xe=>{if(Xe.type==="building"){const Fe=Xe,dt=kn(Fe),_t=new Rs(dt.map(Re=>new ye(Re.x,-Re.y))),yt=new il(_t,{depth:60,bevelEnabled:!1});yt.rotateX(-Math.PI/2);const $e=new Je(yt,new yn({color:Fe.color,side:ui}));$e.position.set(Fe.x,0,Fe.y),$e.rotation.y=-_n.degToRad(Fe.rotation),ne.add($e)}if(Xe.type==="tree"){const Fe=Mh(Xe);ne.add(Fe)}if(Xe.type==="parking"){const Fe=Sh(Xe);ne.add(Fe)}});const me=document.createElement("canvas");me.width=640,me.height=480;const et=new Zc({canvas:me,antialias:!0});et.setSize(640,480),et.render(ne,he);const Se=me.getContext("2d");if(Se){Se.fillStyle="rgba(0,0,0,0.7)",Se.fillRect(0,0,640,30),Se.fillStyle="#fff",Se.font="bold 14px sans-serif",Se.fillText(`📷 ${_.label}`,10,20),Se.font="12px sans-serif",Se.fillStyle="#94a3b8";const Xe=`FOV: ${K.toFixed(0)}° | Pitch: ${H}° | Range: ${G}px`;Se.fillText(Xe,640-Se.measureText(Xe).width-10,20)}const oe=me.toDataURL("image/png");return et.dispose(),oe},Jt=()=>{if(!Ue.current)return;const _=new XMLSerializer().serializeToString(Ue.current),w=document.createElement("canvas");w.width=x.width*2,w.height=x.height*2;const L=w.getContext("2d");if(!L)return;const U=new Image,I=new Blob([_],{type:"image/svg+xml;charset=utf-8"}),K=URL.createObjectURL(I);U.onload=()=>{L.scale(2,2),L.fillStyle="#f8fafc",L.fillRect(0,0,x.width,x.height),L.drawImage(U,0,0),wt("plan","2D Plan View",w.toDataURL("image/png")),URL.revokeObjectURL(K)},U.src=K},pr=_=>{const w=fa(_);wt("camera",`Camera: ${_.label}`,w,_.id)},Ol=_=>{var U;const w=(U=_.target.files)==null?void 0:U[0];if(!w)return;const L=new FileReader;L.onload=I=>{var G;const K=(G=I.target)==null?void 0:G.result,H=new Image;H.onload=()=>{const ie=H.width/H.height,ne=ie>=1.8&&ie<=2.2;Dt(K),hn(ne?"panorama":"flat")},H.src=K},L.readAsDataURL(w)},xs=async()=>{if(Me.length===0){alert("Add some views to the export list first!");return}const _=2,w=40,L=800,U=600,I=2,K=Math.ceil(Me.length/I),H=(L+w)*I+w,G=120,ie=G+(U+w+30)*K+w,ne=document.createElement("canvas");ne.width=H*_,ne.height=ie*_;const he=ne.getContext("2d");if(!he)return;he.scale(_,_),he.fillStyle="#fff",he.fillRect(0,0,H,ie),he.fillStyle="#0f172a",he.font="bold 28px sans-serif",he.fillText(T||"Security Camera Plan",w,w+30),he.fillStyle="#64748b",he.font="14px sans-serif",he.fillText(`Exported: ${new Date().toLocaleString()} | ${Me.length} view(s)`,w,w+55);const Ee=Ne=>new Promise((me,et)=>{const Se=new Image;Se.onload=()=>me(Se),Se.onerror=et,Se.src=Ne});for(let Ne=0;Ne<Me.length;Ne++){const me=Me[Ne],et=Ne%I,Se=Math.floor(Ne/I),oe=w+et*(L+w),Ce=G+Se*(U+w+30);he.fillStyle="#334155",he.font="bold 14px sans-serif",he.fillText(me.label,oe,Ce+20),he.fillStyle="#f1f5f9",he.fillRect(oe,Ce+28,L,U),he.strokeStyle="#e2e8f0",he.lineWidth=2,he.strokeRect(oe,Ce+28,L,U);try{const Xe=await Ee(me.dataUrl),Fe=Xe.width/Xe.height,dt=L/U;let _t,yt,$e,Re;Fe>dt?(_t=L,yt=L/Fe,$e=oe,Re=Ce+28+(U-yt)/2):(yt=U,_t=U*Fe,$e=oe+(L-_t)/2,Re=Ce+28),he.drawImage(Xe,$e,Re,_t,yt)}catch{he.fillStyle="#cbd5e1",he.font="16px sans-serif",he.fillText("Failed to load image",oe+20,Ce+100)}}const Ae=ne.toDataURL("image/png"),be=document.createElement("a");be.href=Ae,be.download=`${(T||"security_plan").replace(/\s+/g,"_")}_report.png`,document.body.appendChild(be),be.click(),document.body.removeChild(be)},pa=()=>{if(Me.length===0){alert("Add some views to the export list first!");return}const _=window.open("","_blank");if(!_){alert("Please allow popups to export PDF");return}const w=`
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
        <div class="meta">Exported: ${new Date().toLocaleString()} | ${Me.length} view(s)</div>
        
        ${Me.map(L=>`
          <div class="item">
            <h3>${L.label}</h3>
            <img src="${L.dataUrl}" />
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
    `;_.document.write(w),_.document.close()},mn=()=>{const w=JSON.stringify({version:1,items:t,backgroundImg:g,bgSettings:p,canvasSize:x,gridSize:y,showGrid:C,snapToGrid:k,projectName:T,exportList:Me},null,2),L=new Blob([w],{type:"application/json"}),U=URL.createObjectURL(L),I=document.createElement("a");I.href=U,I.download="security_project.json",document.body.appendChild(I),I.click(),document.body.removeChild(I),URL.revokeObjectURL(U)},mr=_=>{var U;const w=(U=_.target.files)==null?void 0:U[0];if(!w)return;const L=new FileReader;L.onload=I=>{var K;try{const H=(K=I.target)==null?void 0:K.result,G=JSON.parse(H);G.items&&e(G.items),G.backgroundImg&&d(G.backgroundImg),G.bgSettings&&v(G.bgSettings),G.canvasSize&&M(G.canvasSize),typeof G.gridSize=="number"&&N(G.gridSize),typeof G.showGrid=="boolean"&&R(G.showGrid),typeof G.snapToGrid=="boolean"&&b(G.snapToGrid),G.projectName&&W(G.projectName),G.exportList&&Ie(G.exportList)}catch(H){console.error("Failed to load project file",H),alert("Invalid project file.")}},L.readAsText(w)},ma=_=>{var L;const w=(L=_.target.files)==null?void 0:L[0];if(w){const U=new FileReader;U.onload=I=>{var K;return d((K=I.target)==null?void 0:K.result)},U.readAsDataURL(w)}},ri=_=>{var L;const w=(L=_.target.files)==null?void 0:L[0];if(w){const U=new FileReader;U.onload=I=>{var K;return ee((K=I.target)==null?void 0:K.result)},U.readAsDataURL(w)}},ga=_=>{_.traverse(w=>{const L=w;L.geometry&&L.geometry.dispose(),L.material&&(Array.isArray(L.material)?L.material.forEach(U=>U.dispose()):L.material.dispose())}),_.clear()},xa=_=>{const w=document.createElement("canvas"),L=w.getContext("2d");if(!L)return null;const U=56,I=24;L.font=`${U}px Space Grotesk, sans-serif`;const K=L.measureText(_);w.width=Math.ceil(K.width+I*2),w.height=Math.ceil(U+I*1.6),L.font=`${U}px Space Grotesk, sans-serif`,L.fillStyle="rgba(15, 23, 42, 0.9)",L.textBaseline="middle",L.fillText(_,I,w.height/2);const H=new ah(w);H.colorSpace=en;const G=new z_({map:H,transparent:!0}),ie=new oA(G);return ie.scale.set(w.width/10,w.height/10,1),ie},Fl=(_,w,L,U)=>{const I=_.x,K=_.y,H=w.x,G=w.y,ie=L.x,ne=L.y,he=U.x,Ee=U.y,Ae=I-ie,be=K-ne,Ne=he-ie,me=Ee-ne,et=-G,Se=H,oe=Ne*et+me*Se;if(Math.abs(oe)<1e-6)return null;const Ce=(Ne*be-me*Ae)/oe,Xe=(Ae*et+be*Se)/oe;return Ce>=0&&Xe>=0&&Xe<=1?Ce:null},Vp=(_,w,L,U,I)=>{const K=I.flatMap(Ee=>{if(Ee.type==="building"){const be=fr(Ee);return be.length<2?[]:be.map((Ne,me)=>[Ne,be[(me+1)%be.length]])}else if(Ee.type==="tree"){const Ae=Ee,be=[],Ne=8;for(let me=0;me<Ne;me++){const et=me/Ne*Math.PI*2;be.push({x:Ae.x+Ae.radius*Math.cos(et),y:Ae.y+Ae.radius*Math.sin(et)})}return be.map((me,et)=>[me,be[(et+1)%be.length]])}return[]}),H=128,G=(U-L/2)*(Math.PI/180),ne=L*(Math.PI/180)/(H-1),he=[];for(let Ee=0;Ee<H;Ee++){const Ae=G+Ee*ne,be={x:Math.cos(Ae),y:Math.sin(Ae)};let Ne=w;for(const me of K){const et=Fl(_,be,me[0],me[1]);et!==null&&et<Ne&&(Ne=et)}he.push({x:Ne*be.x,y:Ne*be.y})}return he},K_=()=>{const _=Be.current;if(!_)return;const w=Qe.current;let L=!1;t.forEach(U=>{var H;const I=w.get(U.id);if(!I)return;const K=de(U.x,U.y);if(U.type==="building"||U.type==="parking")I.position.set(U.x,K,U.y),I.rotation.y=-_n.degToRad(U.rotation),L=!0;else if(U.type==="tree"){const G=U;I.position.set(G.x,K,G.y),L=!0}else if(U.type==="camera"){const G=U,ie=Oi(G),ne=de(ie.x,ie.y),he=((H=G.mount)==null?void 0:H.height)??G.height??10;I.position.set(ie.x,ne+he,ie.y),I.rotation.y=-_n.degToRad(G.rotation),I.rotation.x=_n.degToRad(G.pitch??0),L=!0}else if(U.type==="image"){const G=U;I.position.set(G.x,K+.25,G.y),I.rotation.z=_n.degToRad(G.rotation),L=!0}else U.type==="label"&&(I.position.set(U.x,K+8,U.y),L=!0)}),L&&_.renderer.render(_.scene,_.camera)},J_=(_,w)=>{if(_.length!==w.length)return!0;const L=new Set(_.map(I=>I.id)),U=new Set(w.map(I=>I.id));for(const I of U)if(!L.has(I))return!0;for(const I of L)if(!U.has(I))return!0;for(const I of w){const K=_.find(H=>H.id===I.id);if(!K||K.type!==I.type)return!0;if(I.type==="building"){const H=K,G=I;if(H.width!==G.width||H.height!==G.height||H.wallHeight!==G.wallHeight||JSON.stringify(H.points)!==JSON.stringify(G.points)||H.color!==G.color)return!0}if(I.type==="tree"){const H=K,G=I;if(H.radius!==G.radius||H.color!==G.color)return!0}if(I.type==="camera"){const H=K,G=I;if(H.range!==G.range||H.fov!==G.fov||H.hFov!==G.hFov||H.color!==G.color)return!0}}return!1},Q_=()=>{const _=Be.current;if(!_)return;const{group:w,scene:L,renderer:U}=_,I=Ze.current,K=Oe.current!==we;if(I.length>0&&!J_(I,t)&&!K){K_(),Ze.current=[...t];return}Oe.current=we,Qe.current.clear(),ga(w);const H=Math.round(x.width/y),G=Math.round(x.height/y),ie=new ji(x.width,x.height,H,G),ne=ie.attributes.position;for(let me=0;me<ne.count;me++){const et=ne.getX(me),Se=ne.getY(me),oe=x.width/2+et,Ce=x.height/2-Se,Xe=de(oe,Ce);ne.setZ(me,Xe)}ie.computeVertexNormals();const he=new yn({color:1579035,roughness:.9,metalness:.1,flatShading:!0}),Ee=new Je(ie,he);Ee.rotation.x=-Math.PI/2,Ee.position.set(x.width/2,0,x.height/2),Ee.receiveShadow=!0,Ee.name="terrain-mesh",w.add(Ee);const Ae=new Mn,be=new Float32Array([0,.1,0,x.width,.1,0,x.width,.1,x.height,0,.1,x.height,0,.1,0]);Ae.setAttribute("position",new Ii(be,3));const Ne=new bf(Ae,new Ba({color:9741240,linewidth:2}));if(w.add(Ne),g){const me=new yn({color:16777215,transparent:!0,opacity:p.opacity,roughness:.9});new Dc().load(g,Fe=>{Fe.colorSpace=en,Fe.wrapS=_i,Fe.wrapT=_i,Fe.minFilter=Kn,Fe.magFilter=Kn,me.map=Fe,me.needsUpdate=!0,U.render(L,_.camera)});const et=Math.max(Math.round(p.width/y),1),Se=Math.max(Math.round(p.height/y),1),oe=new ji(p.width,p.height,et,Se),Ce=oe.attributes.position;for(let Fe=0;Fe<Ce.count;Fe++){const dt=Ce.getX(Fe),_t=Ce.getY(Fe),yt=p.x+p.width/2+dt,$e=p.y+p.height/2-_t,Re=de(yt,$e);Ce.setZ(Fe,Re+.15)}oe.computeVertexNormals();const Xe=new Je(oe,me);Xe.rotation.x=-Math.PI/2,Xe.position.set(p.x+p.width/2,0,p.y+p.height/2),Xe.receiveShadow=!0,w.add(Xe)}if(t.forEach(me=>{var Se;const et=de(me.x,me.y);if(me.type==="building"){const oe=me,Ce=kn(oe),Xe=oe.wallHeight??60,Fe=new Rs(Ce.map(at=>new ye(at.x,-at.y))),dt={depth:Xe,bevelEnabled:!0,bevelThickness:2,bevelSize:1,bevelSegments:2},_t=new il(Fe,dt);_t.rotateX(-Math.PI/2);const yt=new yn({color:oe.color,roughness:.6,metalness:.1}),$e=new Je(_t,yt);$e.position.set(oe.x,et,oe.y),$e.rotation.y=-_n.degToRad(oe.rotation),$e.castShadow=!0,$e.receiveShadow=!0,$e.userData.itemId=oe.id,Qe.current.set(oe.id,$e),w.add($e);const Re=new yn({color:NC(oe.color,-20),roughness:.7,metalness:.05}),st=new Rs(Ce.map(at=>new ye(at.x,-at.y))),mt=new Lu(st);mt.rotateX(-Math.PI/2);const He=new Je(mt,Re);He.position.set(0,Xe,0),He.name="building-roof",He.userData.itemId=oe.id,He.userData.isRoof=!0,He.receiveShadow=!0,$e.add(He);const Et=xa(oe.label);Et&&(Et.position.set(0,Xe+15,0),$e.add(Et))}if(me.type==="parking"){const oe=Sh(me);oe.userData.itemId=me.id,Qe.current.set(me.id,oe),w.add(oe)}if(me.type==="tree"){const oe=Mh(me);oe.userData.itemId=me.id,Qe.current.set(me.id,oe),w.add(oe)}if(me.type==="camera"){const oe=me,Ce=Oi(oe),Xe=de(Ce.x,Ce.y),Fe=((Se=oe.mount)==null?void 0:Se.height)??oe.height??10,dt=Xe+Fe,_t=Fe,yt=oe.pitch??0,$e=oe.hFov??oe.fov;oe.vFov??Ua($e,oe.aspect??16/9);const Re=oe.range,st=-_n.degToRad(oe.rotation),mt=_n.degToRad(yt),He=new ar;He.userData.itemId=oe.id;const Et=new Qt(14,10,10),at=new yn({color:"#1e293b",roughness:.3,metalness:.5}),Ht=new Je(Et,at);He.add(Ht);const Vt=new js(3.5,4,8,16);Vt.rotateZ(Math.PI/2);const Bn=new yn({color:"#0f172a",roughness:.2,metalness:.7}),rn=new Je(Vt,Bn);rn.position.set(10,0,0),He.add(rn);const Tn=new zp(1.5,8,8),Ln=new ai({color:oe.color}),Ji=new Je(Tn,Ln);Ji.position.set(-5,4,0),He.add(Ji),He.position.set(Ce.x,dt,Ce.y),He.rotation.order="YXZ",He.rotation.y=st,He.rotation.x=mt,Qe.current.set(oe.id,He),w.add(He);const eo=new js(2,2.5,_t,8),bi=new yn({color:"#475569",roughness:.6,metalness:.3}),Nn=new Je(eo,bi);if(Nn.position.set(Ce.x,Xe+Fe/2,Ce.y),Nn.castShadow=!0,w.add(Nn),ze.visible){const to=ze.showAll!==!1||me.id===We,nd=(ze.mode||"volume")==="volume";if(to){const cy=2*Math.atan(Math.tan(_n.degToRad($e)/2)/1.33),Gt=2*Math.tan(cy/2)*Re,jt=Gt*1.33,uy=[0,0,0,Re,Gt/2,-jt/2,Re,-Gt/2,-jt/2,0,0,0,Re,-Gt/2,-jt/2,Re,-Gt/2,jt/2,0,0,0,Re,-Gt/2,jt/2,Re,Gt/2,jt/2,0,0,0,Re,Gt/2,jt/2,Re,Gt/2,-jt/2,Re,-Gt/2,jt/2,Re,-Gt/2,-jt/2,Re,Gt/2,-jt/2,Re,Gt/2,jt/2,Re,-Gt/2,jt/2,Re,Gt/2,-jt/2];if(nd){const si=new Mn;si.setAttribute("position",new $t(uy,3)),si.computeVertexNormals();const tr=new ai({color:ze.useCameraColor?oe.color:ze.color,transparent:!0,opacity:ze.opacity,side:ui,depthWrite:!1}),gr=new Je(si,tr);gr.position.set(Ce.x,_t,Ce.y),gr.rotation.order="YXZ",gr.rotation.y=st,gr.rotation.x=mt,w.add(gr);const vs=[0,0,0,Re,Gt/2,-jt/2,0,0,0,Re,-Gt/2,-jt/2,0,0,0,Re,-Gt/2,jt/2,0,0,0,Re,Gt/2,jt/2,Re,Gt/2,-jt/2,Re,Gt/2,jt/2,Re,Gt/2,jt/2,Re,-Gt/2,jt/2,Re,-Gt/2,jt/2,Re,-Gt/2,-jt/2,Re,-Gt/2,-jt/2,Re,Gt/2,-jt/2],_s=new Mn;_s.setAttribute("position",new $t(vs,3));const ki=new U0(_s,new Ba({color:ze.useCameraColor?oe.color:ze.color,transparent:!0,opacity:ze.edgeOpacity}));ki.position.set(Ce.x,_t,Ce.y),ki.rotation.order="YXZ",ki.rotation.y=st,ki.rotation.x=mt,w.add(ki)}const er=[],va=_n.degToRad($e)/2,Hl=2*Math.atan(Math.tan(va)/1.33)/2;if([{h:va,v:Hl},{h:-va,v:Hl},{h:-va,v:-Hl},{h:va,v:-Hl}].forEach(si=>{const tr=new O(Math.cos(si.v)*Math.cos(si.h),Math.sin(si.v),Math.cos(si.v)*Math.sin(si.h)).normalize(),gr=new Ul(mt,st,0,"YXZ");if(tr.applyEuler(gr),tr.y<-.01){const vs=-_t/tr.y,_s=Ce.x+tr.x*vs,ki=Ce.y+tr.z*vs;er.push(new O(_s,.15,ki))}}),er.length>=3){const si=new Rs;si.moveTo(er[0].x-Ce.x,-(er[0].z-Ce.y));for(let Fr=1;Fr<er.length;Fr++)si.lineTo(er[Fr].x-Ce.x,-(er[Fr].z-Ce.y));si.closePath();const tr=new Lu(si);tr.rotateX(-Math.PI/2);const gr=new ai({color:oe.color,transparent:!0,opacity:nd?.1:.4,side:ui}),vs=new Je(tr,gr);vs.position.set(Ce.x,.12,Ce.y),w.add(vs);const _s=new Mn,ki=[];er.forEach((Fr,fy)=>{ki.push(Fr.x,Fr.y,Fr.z);const id=er[(fy+1)%er.length];ki.push(id.x,id.y,id.z)}),_s.setAttribute("position",new $t(ki,3));const dy=new Ba({color:oe.color,transparent:!0,opacity:nd?.4:.8}),hy=new U0(_s,dy);w.add(hy)}}}const Qi=xa(oe.label);Qi&&(Qi.position.set(Ce.x,_t+18,Ce.y),w.add(Qi))}if(me.type==="image"){const oe=me,Ce=new ji(oe.width,oe.height),Xe=new yn({color:16777215,roughness:.9});new Dc().load(oe.src,dt=>{dt.colorSpace=en,dt.minFilter=Kn,Xe.map=dt,Xe.needsUpdate=!0,U.render(L,_.camera)});const Fe=new Je(Ce,Xe);Fe.rotation.x=-Math.PI/2,Fe.position.set(oe.x,.25,oe.y),Fe.rotation.z=_n.degToRad(oe.rotation),Fe.userData.itemId=oe.id,Qe.current.set(oe.id,Fe),w.add(Fe)}if(me.type==="label"){const oe=me,Ce=xa(oe.text);Ce&&(Ce.position.set(oe.x,8,oe.y),Ce.userData.itemId=oe.id,Qe.current.set(oe.id,Ce),w.add(Ce))}}),_.target.set(x.width/2,0,x.height/2),_.orbit&&(_.orbit.distance=Math.max(x.width,x.height)*.85),_.orbit){const{azimuth:me,polar:et,distance:Se}=_.orbit,oe=_.target.x+Math.cos(me)*Math.cos(et)*Se,Ce=_.target.z+Math.sin(me)*Math.cos(et)*Se,Xe=_.target.y+Math.sin(et)*Se;_.camera.position.set(oe,Xe,Ce),_.camera.lookAt(_.target)}U.render(L,_.camera),Ze.current=[...t]},ey=()=>{const _=Be.current;if(!_)return;const w=_.renderer.domElement.toDataURL("image/png"),L=new Date().toLocaleString();It(U=>[{id:bo(),dataUrl:w,createdAt:L},...U])},Gp=(_,w)=>{const L=document.createElement("a");L.href=_,L.download=w,document.body.appendChild(L),L.click(),document.body.removeChild(L)},ty=()=>{const _=Be.current;if(!_)return;const w=_.renderer.domElement.toDataURL("image/png");Gp(w,"security_plan_3d.png")},ny=()=>{const _=Be.current;if(_){if(_.zoom=1,_.target.set(x.width/2,0,x.height/2),_.orbit){_.orbit.azimuth=Math.PI/4,_.orbit.polar=Math.PI/4,_.orbit.distance=Math.max(x.width,x.height)*.9;const{azimuth:w,polar:L,distance:U}=_.orbit,I=_.target.x+Math.cos(w)*Math.cos(L)*U,K=_.target.z+Math.sin(w)*Math.cos(L)*U,H=_.target.y+Math.sin(L)*U;_.camera.position.set(I,H,K)}_.camera.zoom=_.zoom,_.camera.updateProjectionMatrix(),_.camera.lookAt(_.target),_.renderer.render(_.scene,_.camera)}};Le.useEffect(()=>{const _=L=>{var I,K,H,G;const U=L.target;if(!(U&&(U.tagName==="INPUT"||U.tagName==="TEXTAREA"))){if(L.key===" "&&(Ve(!0),ct.current=!0),(L.key==="Delete"||L.key==="Backspace")&&We&&(L.preventDefault(),zn(We),setTimeout(()=>h(),50)),L.ctrlKey){const ie=L.key.toLowerCase();if(ie==="z"&&(L.preventDefault(),L.shiftKey?m():f()),ie==="y"&&(L.preventDefault(),m()),ie==="s"&&(L.preventDefault(),mn()),ie==="g"&&(L.preventDefault(),R(ne=>!ne)),ie==="c"){if(((I=document.activeElement)==null?void 0:I.tagName)==="INPUT"||((K=document.activeElement)==null?void 0:K.tagName)==="TEXTAREA")return;if(We){const ne=t.find(he=>he.id===We);ne&&(i(ne),L.preventDefault())}}if(ie==="v"){if(((H=document.activeElement)==null?void 0:H.tagName)==="INPUT"||((G=document.activeElement)==null?void 0:G.tagName)==="TEXTAREA")return;const ne=r.current;if(ne){const he={...ne,id:bo(),x:ne.x+20,y:ne.y+20};e(Ee=>[...Ee,he]),F(he.id),setTimeout(()=>h(),50),L.preventDefault()}}}L.key==="Escape"&&(F(null),tt("select"),xt(!1))}};window.addEventListener("keydown",_);const w=L=>{L.key===" "&&(Ve(!1),ct.current=!1)};return window.addEventListener("keyup",w),()=>{window.removeEventListener("keydown",_),window.removeEventListener("keyup",w)}},[t,We,mn]),Le.useEffect(()=>{if(!Be.current)return;const{scene:_,renderer:w,camera:L}=Be.current;if(Rt)new Dc().load(Rt,U=>{if(U.colorSpace=en,Ot==="panorama"?U.mapping=wu:U.mapping=Tp,_.background=U,Ot==="panorama")_.environment=U;else{const I=new Qa(w);_.environment=I.fromScene(new gh).texture,I.dispose()}w.render(_,L)});else{_.background=new Ct("#09090b");const U=new Qa(w);_.environment=U.fromScene(new gh).texture,U.dispose(),w.render(_,L)}},[Rt,Ot]);const Or=Le.useRef({isDragging:!1,itemId:null,dragOffset:null}),kl=Le.useRef(t),Wp=Le.useRef(ot),jp=Le.useRef(We);Le.useEffect(()=>{kl.current=t},[t]),Le.useEffect(()=>{Wp.current=ot},[ot]),Le.useEffect(()=>{jp.current=We},[We]),Le.useEffect(()=>{var K,H,G;const _=(K=Be.current)==null?void 0:K.scene,w=Qe.current;if(!_||!w)return;const L=(ie,ne,he)=>{const Ee=ie.getObjectByName("height-handle");if(Ee&&ie.remove(Ee),ie.traverse(Ae=>{Ae instanceof Je&&Ae.material&&(Array.isArray(Ae.material)?Ae.material:[Ae.material]).forEach(Ne=>{"emissive"in Ne&&(Ae.userData.originalEmissive||(Ae.userData.originalEmissive=Ne.emissive.clone()),ne?(Ne.emissive.setHex(4474111),Ne.emissiveIntensity=.5):Ae.userData.originalEmissive?(Ne.emissive.copy(Ae.userData.originalEmissive),Ne.emissiveIntensity=1):Ne.emissive.setHex(0))})}),ne){const Ae=t.find(be=>be.id===he);Ae&&Ae.type==="building"&&U(ie,Ae)}},U=(ie,ne)=>{const he=ie.getObjectByName("building-roof");if(!he)return;const Ee=ne.points||[];if(Ee.length===0)return;const Ae=he.getObjectByName("corner-handles_group");Ae&&he.remove(Ae);const be=new ar;be.name="corner-handles_group",Ee.forEach(Ne=>{const me=new Qt(5,5,5),et=new ai({color:16777215,toneMapped:!1,depthTest:!1,transparent:!0,opacity:.9}),Se=new Je(me,et);Se.position.set(Ne.x,0,Ne.y),Se.name="height-corner-handle",Se.userData.itemId=ne.id,Se.userData.isHandle=!0,be.add(Se)}),he.add(be)};w.forEach((ie,ne)=>{L(ie,ne===We,ne)});const I=ie=>{if(!Be.current)return;const ne=Be.current.renderer.domElement.getBoundingClientRect(),he={x:(ie.clientX-ne.left)/ne.width*2-1,y:-((ie.clientY-ne.top)/ne.height)*2+1},Ee=new mh;Ee.setFromCamera(new ye(he.x,he.y),Be.current.camera);const be=Ee.intersectObjects(Be.current.scene.children,!0).find(Ne=>Ne.object.name==="height-corner-handle");be&&be.object.userData.itemId===We?document.body.style.cursor="ns-resize":document.body.style.cursor="default"};return(H=Be.current)==null||H.renderer.domElement.addEventListener("pointermove",I),(G=Be.current)==null||G.renderer.render(Be.current.scene,Be.current.camera),()=>{var ie;(ie=Be.current)==null||ie.renderer.domElement.removeEventListener("pointermove",I)}},[We,t]),Le.useEffect(()=>{if(!Be.current)return;const _=Be.current.scene,w=Be.current.camera,L=Be.current.renderer;let U=_.getObjectByName("terrain-cursor");if(!U){const H=new Qt(y/2,4,y/2),G=new ai({color:16436245,transparent:!0,opacity:.6,depthTest:!1});U=new Je(H,G),U.name="terrain-cursor",_.add(U)}qe?U.visible=!0:U.visible=!1;let I=_.getObjectByName("terrain-selection-box");if(!I){const H=new Qt(1,400,1),G=new ai({color:3900150,transparent:!0,opacity:.3,side:ui});I=new Je(H,G),I.name="terrain-selection-box",_.add(I)}if(qe&&A){I.visible=!0;const{x1:H,z1:G,x2:ie,z2:ne}=A,he=Math.min(H,ie),Ee=Math.max(H,ie),Ae=Math.min(G,ne),be=Math.max(G,ne),Ne=Ee-he+y/2,me=be-Ae+y/2;I.scale.set(Math.max(Ne,4),1,Math.max(me,4)),I.position.set((he+Ee)/2,0,(Ae+be)/2)}else I.visible=!1;if(!qe){L.render(_,w);return}const K=H=>{const G=L.domElement.getBoundingClientRect(),ie=(H.clientX-G.left)/G.width*2-1,ne=-((H.clientY-G.top)/G.height)*2+1,he=new mh;he.setFromCamera(new ye(ie,ne),w);const Ee=_.getObjectByName("terrain-mesh");if(Ee){const Ae=he.intersectObject(Ee);if(Ae.length>0){const be=Ae[0].point,Ne=Math.round(be.x/y)*y,me=Math.round(be.z/y)*y,et=de(Ne,me);U.position.set(Ne,et,me),L.render(_,w)}}};return L.domElement.addEventListener("pointermove",K),()=>{L.domElement.removeEventListener("pointermove",K)}},[qe,y,we,A]),Le.useEffect(()=>{if(!Mt.current||Be.current)return;const _=Mt.current,w=new Zc({antialias:!0,preserveDrawingBuffer:!0,alpha:!0,powerPreference:"high-performance"});w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.outputColorSpace=en,w.shadowMap.enabled=!0,w.shadowMap.type=c_,w.toneMapping=d_,w.toneMappingExposure=1,_.appendChild(w.domElement);const L=new Kc;L.background=new Ct("#09090b"),L.fog=new el("#09090b",200,2e3);const U=new Ip(-500,500,500,-500,.1,6e3),I=new ar;L.add(I);const K=new mh,H=new ph(16777215,.6);L.add(H);const G=new fh(16777215,.8);G.position.set(50,100,50),G.castShadow=!0,G.shadow.mapSize.width=2048,G.shadow.mapSize.height=2048,L.add(G);const ie={azimuth:Math.PI/5,polar:Math.PI/5,distance:Math.max(x.width,x.height)*.8},ne={scene:L,camera:U,renderer:w,group:I,raycaster:K,target:new O(x.width/2,0,x.height/2),zoom:1,size:{width:1,height:1},orbit:ie};Be.current=ne;const he=()=>{const{width:Se,height:oe}=_.getBoundingClientRect();ne.size={width:Se,height:oe},w.setSize(Se,oe);const Ce=Se/oe,Xe=Math.max(x.width,x.height)*.7;U.left=-Xe*Ce,U.right=Xe*Ce,U.top=Xe,U.bottom=-Xe,U.zoom=ne.zoom,U.updateProjectionMatrix(),w.render(L,U)},Ee=()=>{const{azimuth:Se,polar:oe,distance:Ce}=ie,Xe=ne.target.x+Math.cos(Se)*Math.cos(oe)*Ce,Fe=ne.target.z+Math.sin(Se)*Math.cos(oe)*Ce,dt=ne.target.y+Math.sin(oe)*Ce;U.position.set(Xe,dt,Fe),U.lookAt(ne.target),w.render(L,U)},Ae=Se=>{const oe=w.domElement.getBoundingClientRect();return{x:(Se.clientX-oe.left)/oe.width*2-1,y:-((Se.clientY-oe.top)/oe.height)*2+1}},be=Se=>{K.setFromCamera(new ye(Se.x,Se.y),U);const oe=new Xr(new O(0,1,0),0),Ce=new O;return K.ray.intersectPlane(oe,Ce)?{x:Ce.x,z:Ce.z}:null},Ne=Se=>{var Ce;K.setFromCamera(new ye(Se.x,Se.y),U);const oe=K.intersectObjects(I.children,!0);for(const Xe of oe){let Fe=Xe.object;for(;Fe;){if((Ce=Fe.userData)!=null&&Ce.itemId)return Fe.userData.itemId;Fe=Fe.parent}}return null},me=Se=>{var Xe;const oe=Ae(Se),Ce=Wp.current;if(jp.current,Se.button===2&&!ct.current){Se.preventDefault();const Fe={x:Se.clientX,y:Se.clientY},dt=yt=>{const $e=yt.clientX-Fe.x,Re=yt.clientY-Fe.y;Fe.x=yt.clientX,Fe.y=yt.clientY,ie.azimuth+=$e*.005,ie.polar=oi(ie.polar+Re*.005,.1,Math.PI/2.1),Ee()},_t=()=>{window.removeEventListener("pointermove",dt),window.removeEventListener("pointerup",_t)};window.addEventListener("pointermove",dt),window.addEventListener("pointerup",_t);return}if(nt.current){K.setFromCamera(new ye(oe.x,oe.y),U);const Fe=I.getObjectByName("terrain-mesh");if(Fe){const dt=K.intersectObject(Fe);if(dt.length>0){const _t=dt[0].point,yt=y||20,$e=Math.round(_t.x/yt)*yt,Re=Math.round(_t.z/yt)*yt;E({x1:$e,z1:Re,x2:$e,z2:Re}),(Xe=Be.current)!=null&&Xe.controls&&(Be.current.controls.enabled=!1),Or.current={isDragging:!0,interactionType:"select-terrain",itemId:"terrain-select",startMouse:{x:$e,y:Re}};const st=He=>{const Et=Ae(He);K.setFromCamera(new ye(Et.x,Et.y),U);const at=K.intersectObject(Fe);if(at.length>0){const Ht=at[0].point,Vt=y||20,Bn=Math.round(Ht.x/Vt)*Vt,rn=Math.round(Ht.z/Vt)*Vt;E(Tn=>Tn?{...Tn,x2:Bn,z2:rn}:{x1:$e,z1:Re,x2:Bn,z2:rn})}},mt=()=>{var Et;const He=Or.current;(Et=Be.current)!=null&&Et.controls&&(Be.current.controls.enabled=!0),He.interactionType==="select-terrain"&&(Or.current={...Or.current,isDragging:!1,interactionType:null}),window.removeEventListener("pointermove",st),window.removeEventListener("pointerup",mt)};window.addEventListener("pointermove",st),window.addEventListener("pointerup",mt),Se.stopPropagation();return}}return}if(Se.button===1||ct.current){Se.preventDefault();const Fe={x:Se.clientX,y:Se.clientY},dt=yt=>{const $e=yt.clientX-Fe.x,Re=yt.clientY-Fe.y;Fe.x=yt.clientX,Fe.y=yt.clientY;const st=Math.max(x.width,x.height)*.7/U.zoom/400,mt=new O;U.getWorldDirection(new O),mt.setFromMatrixColumn(U.matrixWorld,0),mt.y=0,mt.normalize();const He=new O;U.getWorldDirection(He),He.y=0,He.normalize(),ne.target.x+=-mt.x*$e*st+He.x*Re*st,ne.target.z+=-mt.z*$e*st+He.z*Re*st,Ee()},_t=()=>{window.removeEventListener("pointermove",dt),window.removeEventListener("pointerup",_t)};window.addEventListener("pointermove",dt),window.addEventListener("pointerup",_t);return}if(Se.button===0){if(Se.preventDefault(),Ce!=="select"){const dt=be(oe);if(dt){const _t=Math.round(dt.x/y)*y,yt=Math.round(dt.z/y)*y,$e={id:bo(),x:_t,y:yt,rotation:0};let Re=null;switch(Ce){case"add-camera":Re={...$e,type:"camera",rotation:45,label:"Camera",description:"",fov:70,hFov:70,vFov:45,pitch:-15,height:60,aspect:16/9,mount:{type:"free",edgeT:.5,height:60},range:150,color:In.camera[0],labelOffset:{x:0,y:30},connectorDashSize:3};break;case"add-building":Re={...$e,type:"building",width:100,height:80,wallHeight:60,label:"Building",color:In.building[0],points:Oc(100,80)};break;case"add-tree":Re={...$e,type:"tree",radius:25,color:In.tree[0]};break;case"add-parking":Re={...$e,type:"parking",width:30,height:50,color:In.parking[0]};break;case"add-label":Re={...$e,type:"label",text:"Label",fontSize:14,color:In.label[0]};break}Re&&(e(st=>[...st,Re]),F(Re.id),tt("select"),setTimeout(()=>h(),50))}return}const Fe=Ne(oe);if(Fe){F(Fe);const dt=kl.current.find(He=>He.id===Fe);let _t=!1;K.setFromCamera(new ye(oe.x,oe.y),U),K.intersectObjects(I.children,!0).find(He=>He.object.name==="height-corner-handle"&&He.object.userData.itemId===Fe)&&(_t=!0);const Re=be(oe);Re&&dt&&(Or.current={isDragging:!0,itemId:Fe,interactionType:_t?"resize-height":"move",startHeight:dt.wallHeight??60,startMouseY:Se.clientY,dragOffset:{x:dt.x-Re.x,z:dt.y-Re.z}});const st=He=>{var Ji,eo;const Et=Or.current;if(!Et.isDragging||!Et.itemId)return;if(Et.interactionType==="resize-height"){const bi=(Et.startMouseY||0)-He.clientY,Nn=Et.startHeight||60,Qi=Math.max(10,Nn+bi);Et.currentHeight=Qi;const to=Qe.current.get(Et.itemId);to&&(to.scale.y=Qi/Nn,ne.renderer.render(ne.scene,ne.camera));return}const at=Ae(He),Ht=be(at);if(!Ht||!Et.dragOffset)return;const Vt=Ht.x+Et.dragOffset.x,Bn=Ht.z+Et.dragOffset.z,rn=Math.round(Vt/y)*y,Tn=Math.round(Bn/y)*y,Ln=Qe.current.get(Et.itemId);if(Ln){const bi=(Ji=kl.current.find(Nn=>Nn.id===Et.itemId))==null?void 0:Ji.type;if(bi==="camera"){const Nn=kl.current.find(to=>to.id===Et.itemId),Qi=((eo=Nn==null?void 0:Nn.mount)==null?void 0:eo.height)??(Nn==null?void 0:Nn.height)??10;Ln.position.set(rn,Qi,Tn)}else bi==="tree"||bi==="parking"||bi==="building"?Ln.position.set(rn,0,Tn):bi==="image"?Ln.position.set(rn,.25,Tn):bi==="label"&&Ln.position.set(rn,8,Tn);ne.renderer.render(ne.scene,ne.camera)}},mt=()=>{const He=Or.current;if(He.isDragging&&He.itemId){if(He.interactionType==="resize-height"&&He.currentHeight!==void 0)V(He.itemId,{wallHeight:He.currentHeight}),h();else if(He.interactionType!=="resize-height"){const Et=Qe.current.get(He.itemId);if(Et){const at=Et.position.x,Ht=Et.position.z,Vt=He.itemId;e(Bn=>Bn.map(rn=>rn.id===Vt?{...rn,x:at,y:Ht}:rn)),setTimeout(()=>h(),50)}}}Or.current={isDragging:!1,itemId:null,dragOffset:null,interactionType:void 0,currentHeight:void 0},window.removeEventListener("pointermove",st),window.removeEventListener("pointerup",mt)};window.addEventListener("pointermove",st),window.addEventListener("pointerup",mt)}else{F(null);const dt={x:Se.clientX,y:Se.clientY},_t=$e=>{const Re=$e.clientX-dt.x,st=$e.clientY-dt.y;dt.x=$e.clientX,dt.y=$e.clientY;const mt=Math.max(x.width,x.height)*.7/U.zoom/400,He=new O;U.getWorldDirection(new O),He.setFromMatrixColumn(U.matrixWorld,0),He.y=0,He.normalize();const Et=new O;U.getWorldDirection(Et),Et.y=0,Et.normalize(),ne.target.x+=-He.x*Re*mt+Et.x*st*mt,ne.target.z+=-He.z*Re*mt+Et.z*st*mt,Ee()},yt=()=>{window.removeEventListener("pointermove",_t),window.removeEventListener("pointerup",yt)};window.addEventListener("pointermove",_t),window.addEventListener("pointerup",yt)}}},et=Se=>{Se.preventDefault();const oe=oi(ne.zoom*(Se.deltaY<0?1.1:.9),.4,3.5);ne.zoom=oe,U.zoom=ne.zoom,U.updateProjectionMatrix(),Ee()};return w.domElement.addEventListener("pointerdown",me),w.domElement.addEventListener("wheel",et,{passive:!1}),w.domElement.addEventListener("contextmenu",Se=>Se.preventDefault()),Ee(),he(),window.addEventListener("resize",he),()=>{w.domElement.removeEventListener("pointerdown",me),w.domElement.removeEventListener("wheel",et),window.removeEventListener("resize",he),w.dispose(),_.removeChild(w.domElement),Be.current=null,Qe.current.clear(),Ze.current=[]}},[x.height,x.width,D]),Le.useEffect(()=>{D==="iso3d"&&Q_()},[t,g,p,x,y,C,D,ze,Rt,Ot,We,we]),Le.useEffect(()=>{if(D!=="iso3d")return;const _=Be.current;if(!_)return;const{group:w,scene:L,camera:U,renderer:I}=_,K=w.getObjectByName("terrain-selection-helper");if(K&&(w.remove(K),K.geometry&&K.geometry.dispose()),A){const H=Math.min(A.x1,A.x2),G=Math.max(A.x1,A.x2),ie=Math.min(A.z1,A.z2),ne=Math.max(A.z1,A.z2),he=[new O(H,de(H,ie)+3,ie),new O(G,de(G,ie)+3,ie),new O(G,de(G,ne)+3,ne),new O(H,de(H,ne)+3,ne),new O(H,de(H,ie)+3,ie)],Ee=new ar;Ee.name="terrain-selection-helper";const Ae=new Mn().setFromPoints(he),be=new Ba({color:1096065,linewidth:2,depthTest:!1}),Ne=new bf(Ae,be);Ne.renderOrder=999,Ee.add(Ne);const me=new Qt(5,5,5),et=new ai({color:1096065,depthTest:!1});he.slice(0,4).forEach(Se=>{const oe=new Je(me,et);oe.position.copy(Se),oe.renderOrder=999,Ee.add(oe)}),w.add(Ee)}I.render(L,U)},[A,D]),Le.useEffect(()=>{D!=="plan"&&xt(!1)},[D]),Le.useEffect(()=>{if(g){const _=new Image;_.src=g,_.onload=()=>{hr.current=_}}else hr.current=null},[g]),Le.useEffect(()=>{var Et;if(!Pe||!ii.current||!We)return;const _=t.find(at=>at.id===We),w=(_==null?void 0:_.type)==="camera"?_:null;if(!w)return;const L=ii.current,U=L.width,I=L.height,K=Oi(w),H=de(K.x,K.y),G=((Et=w.mount)==null?void 0:Et.height)??w.height??10,ie=w.hFov??w.fov,ne=w.pitch??-15,he=w.range,Ee=_n.degToRad(w.rotation),Ae=U/I,be=2*Math.atan(Math.tan(_n.degToRad(ie)/2)/Ae),Ne=_n.radToDeg(be),me=new Kc;me.background=new Ct("#09090b"),me.fog=new el("#09090b",he*.3,he*1.2);const et=new ci(Ne,Ae,1,he*2);et.position.set(K.x,H+G,K.y);const Se=_n.degToRad(ne),oe=new O(K.x+Math.cos(Ee)*100,H+G+Math.tan(Se)*100,K.y+Math.sin(Ee)*100);et.lookAt(oe),me.add(new ph(16777215,.5));const Ce=new fh(16777215,.7);Ce.position.set(100,200,50),me.add(Ce);const Xe=x.width*2,Fe=x.height*2,dt=new ji(Xe,Fe,64,64),_t=dt.attributes.position,yt=x.width/2,$e=x.height/2;for(let at=0;at<_t.count;at++){const Ht=_t.getX(at),Vt=_t.getY(at),Bn=Ht+yt,rn=$e-Vt,Tn=de(Bn,rn);_t.setZ(at,Tn)}dt.computeVertexNormals();const Re=new Je(dt,new yn({color:"#6B8E23",roughness:.9}));if(Re.rotation.x=-Math.PI/2,Re.position.set(yt,0,$e),me.add(Re),hr.current){const at=new ah(hr.current);at.colorSpace=en;const Ht=Math.max(Math.round(p.width/y),1),Vt=Math.max(Math.round(p.height/y),1),Bn=new ji(p.width,p.height,Ht,Vt),rn=Bn.attributes.position;for(let Ln=0;Ln<rn.count;Ln++){const Ji=rn.getX(Ln),eo=rn.getY(Ln),bi=p.x+p.width/2+Ji,Nn=p.y+p.height/2-eo,Qi=de(bi,Nn);rn.setZ(Ln,Qi+.1)}Bn.computeVertexNormals();const Tn=new Je(Bn,new ai({map:at,transparent:!0,opacity:p.opacity}));Tn.rotation.x=-Math.PI/2,Tn.position.set(p.x+p.width/2,0,p.y+p.height/2),me.add(Tn)}t.forEach(at=>{const Ht=de(at.x,at.y);if(at.type==="building"){const Vt=at,Bn=kn(Vt),rn=new Rs(Bn.map(Ji=>new ye(Ji.x,-Ji.y))),Tn=new il(rn,{depth:60,bevelEnabled:!1});Tn.rotateX(-Math.PI/2);const Ln=new Je(Tn,new yn({color:Vt.color,side:ui}));Ln.position.set(Vt.x,Ht,Vt.y),Ln.rotation.y=-_n.degToRad(Vt.rotation),me.add(Ln)}if(at.type==="tree"){const Vt=Mh(at);Vt.position.set(at.x,Ht,at.y),me.add(Vt)}if(at.type==="parking"){const Vt=Sh(at);Vt.position.set(at.x,Ht,at.y),me.add(Vt)}});const st=new Zc({canvas:L,antialias:!0});st.setSize(U,I);const mt=new Qa(st);me.environment=mt.fromScene(new gh).texture,st.render(me,et),Rt&&new Dc().load(Rt,at=>{me.background=at,st.render(me,et)});const He=L.getContext("2d");return He&&(He.fillStyle="rgba(0,0,0,0.7)",He.fillRect(0,0,U,26),He.fillStyle="#fff",He.font="bold 11px sans-serif",He.fillText(`📷 ${w.label}`,8,11),He.font="10px sans-serif",He.fillStyle="#94a3b8",He.fillText(`FOV: ${ie.toFixed(0)}°×${Ne.toFixed(0)}° | Pitch: ${ne}° | Range: ${he}`,8,23),He.fillStyle="#ef4444",He.beginPath(),He.arc(U-12,13,4,0,Math.PI*2),He.fill(),He.fillStyle="#fff",He.font="9px sans-serif",He.fillText("LIVE",U-42,16)),()=>{mt.dispose(),st.dispose(),me.traverse(at=>{at instanceof Je&&(at.geometry&&at.geometry.dispose(),at.material&&(Array.isArray(at.material)?at.material.forEach(Ht=>Ht.dispose()):at.material.dispose()))})}},[We,t,Pe,p,x,Rt]);const zl=_=>{if(!Ue.current)return{x:0,y:0};const w=Ue.current.getScreenCTM();if(!w)return{x:0,y:0};const L=(_.clientX-w.e)/w.a,U=(_.clientY-w.f)/w.d;return{x:(L-B.x)/J,y:(U-B.y)/J}},mi=(_,w,L="move",U)=>{if(ot!=="select"||D==="iso3d")return;_.stopPropagation();const I=t.find(ie=>ie.id===w);if(!I)return;F(w);const K=zl(_);if(L==="move"&&We===w&&I.type==="building"){const ne=fr(I);for(let he=0;he<ne.length;he++){const Ee=ne[he],Ae=ne[(he+1)%ne.length],be={x:Ae.x-Ee.x,y:Ae.y-Ee.y},Ne={x:K.x-Ee.x,y:K.y-Ee.y},me=be.x*be.x+be.y*be.y||1,et=Math.max(0,Math.min(1,(Ne.x*be.x+Ne.y*be.y)/me)),Se={x:Ee.x+be.x*et,y:Ee.y+be.y*et};if(Math.sqrt((K.x-Se.x)**2+(K.y-Se.y)**2)<8){St(w,Se),setTimeout(()=>h(),50);return}}}const H=I.type==="camera"?Oi(I):{x:I.x,y:I.y};let G={...I};if(L==="fov"&&I.type==="camera"){const ie=K.x-H.x,ne=K.y-H.y,he=Math.atan2(ne,ie)*180/Math.PI,Ee=I.hFov??I.fov,Ae=I.rotation+(U==="left"?-Ee/2:Ee/2);G={...I,fovHandleOffset:yh(he-Ae)}}le({type:L,itemId:w,startMouse:K,startVal:G,variant:U,snap:k&&!_.altKey})},iy=_=>{var I,K;if(ot==="add-camera"&&D==="plan"){const H=zl(_),G=P(H);G&&G.distance<100?fn({buildingId:G.buildingId,edgeIndex:G.edgeIndex,edgeT:G.edgeT,point:G.point,rotation:G.rotation}):fn(null)}else bt&&fn(null);if(pe){const H=_.clientX-fe.x,G=_.clientY-fe.y;Z({x:fe.panX+H,y:fe.panY+G});return}if(!ae.itemId||!Ue.current)return;const w=zl(_),L=t.find(H=>H.id===ae.itemId);if(!L)return;const U=L.type==="camera"?Oi(L):{x:L.x,y:L.y};if(ae.type==="move"){const H=w.x-ae.startMouse.x,G=w.y-ae.startMouse.y,ie=ae.startVal.x+H,ne=ae.startVal.y+G;if(L.type==="camera"&&((I=L.mount)==null?void 0:I.type)==="building"&&L.mount.buildingId){const he=Ks(L.mount.buildingId);if(he){const Ee=fr(he);if(Ee.length>=2){const Ae=oi(L.mount.edgeIndex??0,0,Ee.length-1),be=(Ae+1)%Ee.length,Ne=Ee[Ae],me=Ee[be],et={x:me.x-Ne.x,y:me.y-Ne.y},Se={x:ie-Ne.x,y:ne-Ne.y},oe=et.x*et.x+et.y*et.y||1;let Ce=(Se.x*et.x+Se.y*et.y)/oe;Ce=oi(Ce,0,1);const Xe={x:Ne.x+et.x*Ce,y:Ne.y+et.y*Ce};V(ae.itemId,{x:Xe.x,y:Xe.y,mount:{...L.mount,edgeT:Ce}});return}}}V(ae.itemId,{x:Ur(ie,ae.snap),y:Ur(ne,ae.snap)})}else if(ae.type==="move-label"&&L.type==="camera"){const H=w.x-ae.startMouse.x,G=w.y-ae.startMouse.y,ie=ae.startVal.labelOffset||{x:0,y:30};V(ae.itemId,{labelOffset:{x:ie.x+H,y:ie.y+G}})}else if(ae.type==="rotate"){const H=w.x-U.x,G=w.y-U.y,ie=Math.atan2(G,H)*180/Math.PI;V(ae.itemId,{rotation:ie})}else if(ae.type==="fov"&&L.type==="camera"){const H=w.x-U.x,G=w.y-U.y,ie=Math.atan2(G,H)*180/Math.PI,ne=((K=ae.startVal)==null?void 0:K.fovHandleOffset)??0,he=yh(ie-ne),Ee=yh(he-L.rotation),Ae=ae.variant==="left"?-Ee:Ee;if(Ae<=0)return;const be=oi(Ae*2,10,180);V(ae.itemId,{fov:be,hFov:be})}else if(ae.type==="range"&&L.type==="camera"){const H=w.x-U.x,G=w.y-U.y,ie=Math.sqrt(H*H+G*G);V(ae.itemId,{range:Math.max(ie,50)})}else if(ae.type==="vertex"&&L.type==="building"){const H=ha(w,L),G=kn(L),ie=typeof ae.variant=="string"?parseInt(ae.variant,10):Number(ae.variant);if(!Number.isNaN(ie)&&G[ie]){const ne={x:Ur(H.x,ae.snap),y:Ur(H.y,ae.snap)},he=G.map((Ee,Ae)=>Ae===ie?ne:Ee);V(ae.itemId,{points:he})}}},ry=()=>{ae.type&&h(),te(!1),le({type:null,itemId:null,startMouse:{x:0,y:0},startVal:null,snap:!1})};Le.useEffect(()=>{Rf.enabled=!0,h()},[]);const sy=_=>{if(D!=="iso3d"&&!pe){if(Bt&&We){const w=t.find(L=>L.id===We);if(w&&w.type==="building"){const L=zl(_);St(We,L),xt(!1);return}}(_.target===Ue.current||_.target.tagName==="image"||_.target.id==="grid-bg")&&(ot!=="select"?j(_,ot):F(null))}},oy=_=>{(_.button===1||_.button===2||Ye||_.button===0&&ot==="select")&&(_.preventDefault(),te(!0),ke({x:_.clientX,y:_.clientY,panX:B.x,panY:B.y}))},ay=_=>{if(_.preventDefault(),!Ue.current)return;const w=Ue.current.getScreenCTM();if(!w)return;const L=(_.clientX-w.e)/w.a,U=(_.clientY-w.f)/w.d,I=(L-B.x)/J,K=(U-B.y)/J,H=oi(J*(_.deltaY>0?.9:1.1),.3,3.5),G=L-I*H,ie=U-K*H;ue(H),Z({x:G,y:ie})},xe=t.find(_=>_.id===We),Ut=(xe==null?void 0:xe.type)==="camera"?xe:null,Ki=(Ut==null?void 0:Ut.aspect)??16/9,Js=Ut?Ut.hFov??Ut.fov:70,ed=Ut?Ut.vFov??Ua(Js,Ki):45,Xp=Ut?DC(Js,ed):90,Bl=t.filter(_=>_.type==="building"),td=((qp=Ut==null?void 0:Ut.mount)==null?void 0:qp.type)??"free",Qs=(Zp=Ut==null?void 0:Ut.mount)!=null&&Zp.buildingId?Ks(Ut.mount.buildingId):Bl[0],ly=Qs?kn(Qs).length:0,$p=((Kp=Ut==null?void 0:Ut.mount)==null?void 0:Kp.edgeIndex)??0,Yp=((Jp=Ut==null?void 0:Ut.mount)==null?void 0:Jp.edgeT)??.5;return S.jsxs("div",{className:"relative h-screen bg-zinc-950 font-sans text-slate-200 overflow-hidden w-full selection:bg-indigo-500/30",children:[q&&S.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",children:S.jsxs("div",{className:"bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden text-slate-200",children:[S.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-white/10",children:[S.jsxs("div",{children:[S.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-400",children:"Export"}),S.jsx("h2",{className:"text-lg font-semibold text-slate-200",children:"Export Plan"})]}),S.jsx("button",{onClick:()=>se(!1),className:"p-2 text-slate-400 hover:text-slate-600",children:S.jsx(vh,{className:"w-5 h-5"})})]}),S.jsxs("div",{className:"px-5 py-4 space-y-4",children:[S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Title"}),S.jsx("input",{type:"text",value:T,onChange:_=>W(_.target.value),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:["Export List (",Me.length," items)"]}),Me.length>0&&S.jsx("button",{onClick:()=>Ie([]),className:"text-xs text-red-500 hover:text-red-700",children:"Clear All"})]}),Me.length===0?S.jsxs("div",{className:"bg-slate-50 rounded-lg p-4 text-center text-slate-400 text-sm",children:[S.jsx("p",{children:"No views added yet"}),S.jsx("p",{className:"text-xs mt-1",children:'Use "Add to Export" buttons while working'})]}):S.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-48 overflow-y-auto",children:Me.map(_=>S.jsxs("div",{className:"relative group bg-zinc-800 rounded-lg overflow-hidden border border-white/5",children:[S.jsx("div",{className:"aspect-video w-full overflow-hidden",children:S.jsx("img",{src:_.dataUrl,alt:_.label,className:"w-full h-full object-cover"})}),S.jsxs("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2",children:[S.jsx("a",{href:_.dataUrl,download:`${_.label.replace(/[^a-z0-9]/gi,"_").toLowerCase()}.png`,className:"p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-lg",title:"Download Image",onClick:w=>w.stopPropagation(),children:S.jsx(j0,{className:"w-4 h-4"})}),S.jsx("button",{onClick:()=>Ie(w=>w.filter(L=>L.id!==_.id)),className:"p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg",title:"Remove",children:S.jsx(vh,{className:"w-4 h-4"})})]}),S.jsx("div",{className:"p-2 bg-zinc-800 absolute bottom-0 inset-x-0",children:S.jsx("p",{className:"text-[10px] text-slate-300 truncate font-medium",children:_.label})})]},_.id))})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Scale"}),S.jsx("input",{type:"number",min:"1",max:"5",value:$.scale,onChange:_=>re({...$,scale:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Padding"}),S.jsx("input",{type:"number",min:"0",max:"200",value:$.padding,onChange:_=>re({...$,padding:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Include"}),S.jsx("div",{className:"flex flex-wrap gap-2",children:[{key:"includeGrid",label:"Grid"},{key:"includeLegend",label:"Legend"},{key:"includeTitle",label:"Title Block"}].map(_=>{const w=$[_.key];return S.jsx("button",{onClick:()=>re({...$,[_.key]:!w}),className:`px-3 py-1 rounded-full text-xs font-semibold border ${w?"bg-emerald-100 border-emerald-200 text-emerald-700":"bg-white border-slate-200 text-slate-400"}`,children:_.label},_.key)})})]}),S.jsx("p",{className:"text-xs text-slate-400",children:'Tip: Add views using "Add to Export" buttons, then export a client report.'})]}),S.jsxs("div",{className:"px-5 py-4 border-t border-white/10 bg-slate-50 flex flex-wrap justify-end gap-2",children:[S.jsx("button",{onClick:()=>se(!1),className:"px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-800",children:"Cancel"}),S.jsx("button",{onClick:()=>{Yt(),se(!1)},className:"px-4 py-2 text-sm font-semibold bg-slate-600 hover:bg-slate-700 text-white rounded-lg",children:"Plan Only"}),S.jsx("button",{onClick:()=>{xs(),se(!1)},disabled:Me.length===0,className:`px-3 py-2 text-sm font-semibold rounded-lg ${Me.length===0?"bg-slate-200 text-slate-400 cursor-not-allowed":"bg-emerald-600 hover:bg-emerald-700 text-white"}`,children:"Export PNG"}),S.jsx("button",{onClick:()=>{pa(),se(!1)},disabled:Me.length===0,className:`px-3 py-2 text-sm font-semibold rounded-lg ${Me.length===0?"bg-slate-200 text-slate-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 text-white"}`,children:"Export PDF"})]})]})}),Bt&&D==="plan"&&We&&S.jsx("div",{className:"absolute left-1/2 bottom-10 -translate-x-1/2 rounded-full bg-emerald-600/90 px-4 py-2 text-xs font-semibold text-white shadow-xl z-50 backdrop-blur-md",children:"Click an edge to insert a vertex."}),S.jsxs("div",{className:"absolute left-4 top-4 bottom-4 w-14 flex flex-col items-center py-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 gap-3 ring-1 ring-white/5",children:[S.jsx("div",{className:"flex flex-col gap-2 w-full px-2",children:[{mode:"select",icon:uC,label:"Select"},{mode:"add-camera",icon:Uc,label:"Camera"},{mode:"add-building",icon:xC,label:"Building"},{mode:"add-tree",icon:yC,label:"Tree"},{mode:"add-parking",icon:KA,label:"Parking"},{mode:"add-label",icon:MC,label:"Label"}].map(_=>S.jsx("button",{onClick:()=>ot===_.mode?tt("select"):tt(_.mode),title:_.label,className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${ot===_.mode?"bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 scale-105":"text-slate-400 hover:text-white hover:bg-white/10"}`,children:S.jsx(_.icon,{className:"w-5 h-5"})},_.mode))}),S.jsx("div",{className:"w-8 h-px bg-white/10 my-1"}),S.jsxs("div",{className:"flex flex-col gap-2 w-full px-2",children:[S.jsx("button",{onClick:()=>X(D==="plan"?"iso3d":"plan"),className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${D==="iso3d"?"bg-indigo-600 text-white shadow-lg":"text-slate-400 hover:text-white hover:bg-white/10"}`,title:"Toggle 3D View",children:S.jsx(iC,{className:"w-5 h-5"})}),D==="iso3d"&&S.jsxs("div",{className:"relative group",children:[S.jsx("button",{onClick:()=>Ge(!qe),className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${qe?"bg-emerald-600 text-white shadow-lg shadow-emerald-500/40 scale-105":"text-slate-400 hover:text-white hover:bg-white/10"}`,title:qe?"Exit Terrain Mode":"Edit Terrain",children:S.jsx(xh,{className:"w-5 h-5"})}),qe&&S.jsxs("div",{className:"absolute left-14 top-0 ml-4 w-64 bg-zinc-900/95 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl z-50 animate-in fade-in slide-in-from-left-2 ring-1 ring-white/10",children:[S.jsxs("h3",{className:"text-sm font-bold text-slate-200 mb-3 flex items-center gap-2",children:[S.jsx(xh,{className:"w-4 h-4 text-emerald-500"}),"Terrain Tools"]}),S.jsxs("div",{className:"bg-white/5 rounded-lg p-3 border border-white/5",children:[S.jsx("p",{className:"text-[10px] text-slate-400 mb-3 text-center leading-relaxed",children:"Drag firmly on the terrain to select an area to modify."}),A?S.jsxs("div",{className:"space-y-3 animate-in fade-in slide-in-from-top-1",children:[S.jsxs("div",{className:"space-y-1",children:[S.jsx("label",{className:"text-[10px] uppercase font-bold text-slate-400",children:"Presets"}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("button",{onClick:()=>ge(0),className:"flex-1 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 rounded text-xs font-medium text-indigo-300 transition-colors",children:"Flatten (0)"}),S.jsx("button",{onClick:()=>ge(40),className:"flex-1 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 rounded text-xs font-medium text-indigo-300 transition-colors",children:"Plateau (40)"})]})]}),S.jsxs("div",{className:"space-y-1",children:[S.jsxs("div",{className:"flex justify-between text-[10px] uppercase font-bold text-slate-400",children:[S.jsx("span",{children:"Height"}),S.jsxs("span",{className:"text-emerald-400",children:["Level ",Math.round(Y??0)]})]}),S.jsx("input",{type:"range",min:"0",max:"200",step:"10",value:Y,className:"w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500",onChange:_=>ge(parseInt(_.target.value)),onPointerDown:_=>_.stopPropagation()}),S.jsxs("div",{className:"flex justify-between text-[9px] text-slate-500 font-medium",children:[S.jsx("span",{children:"0"}),S.jsx("span",{children:"200"})]})]}),S.jsx("div",{className:"pt-2 border-t border-white/5",children:S.jsx("p",{className:"text-[9px] text-slate-500 text-center",children:"Changes apply immediately."})})]}):S.jsx("div",{className:"py-4 text-center border-2 border-dashed border-white/10 rounded-lg",children:S.jsx("p",{className:"text-xs text-slate-500",children:"No area selected"})})]})]})]})]}),S.jsxs("div",{className:"mt-auto flex flex-col gap-2 w-full px-2",children:[S.jsx("button",{onClick:f,className:"w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all",title:"Undo",children:S.jsx(EC,{className:"w-5 h-5"})}),S.jsx("button",{onClick:m,className:"w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all",title:"Redo",children:S.jsx(fC,{className:"w-5 h-5"})})]})]}),S.jsxs("div",{className:"absolute top-4 left-24 right-4 lg:right-[22rem] h-14 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-40 flex items-center px-4 justify-between ring-1 ring-white/5 transition-all duration-300",children:[S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsxs("h1",{className:"text-lg font-bold text-slate-200 tracking-tight flex items-center gap-2",children:[S.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500",children:S.jsx(Uc,{className:"w-5 h-5"})}),T]}),S.jsx("div",{className:"h-6 w-px bg-white/10 mx-2"}),S.jsxs("div",{className:"flex items-center gap-1",children:[S.jsx("button",{onClick:()=>{var _;return(_=ve.current)==null?void 0:_.click()},className:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors",title:"Load Project",children:S.jsx(eC,{className:"w-5 h-5"})}),S.jsx("button",{onClick:mn,className:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors",title:"Save Project",children:S.jsx(mC,{className:"w-5 h-5"})})]})]}),S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("input",{type:"file",ref:lt,className:"hidden",accept:"image/*",onChange:ma}),S.jsx("input",{type:"file",ref:ft,className:"hidden",accept:"image/*",onChange:ri}),S.jsx("input",{type:"file",ref:ve,className:"hidden",accept:".json",onChange:mr}),S.jsx("input",{type:"file",ref:Lt,className:"hidden",accept:"image/*,.hdr",onChange:Ol}),S.jsxs("button",{onClick:()=>{var _;return(_=lt.current)==null?void 0:_.click()},className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",children:[S.jsx(TC,{className:"w-4 h-4"}),S.jsx("span",{children:"Map"})]}),S.jsxs("button",{onClick:()=>{var _;return(_=ft.current)==null?void 0:_.click()},className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",children:[S.jsx(X0,{className:"w-4 h-4"}),S.jsx("span",{children:"Image"})]}),S.jsxs("button",{onClick:Jt,className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",title:"Add Current View",children:[S.jsx($0,{className:"w-4 h-4"}),S.jsx("span",{className:"hidden sm:inline",children:"Add View"})]}),S.jsxs("button",{onClick:()=>se(!0),className:"flex items-center gap-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-lg shadow-indigo-500/20 transition-all",children:[S.jsx(j0,{className:"w-4 h-4"}),S.jsx("span",{children:"Export"})]})]})]}),S.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[S.jsx("div",{className:"w-full h-full relative overflow-auto bg-zinc-950 flex items-center justify-center pt-20 pl-24 pr-80 pb-6 custom-scrollbar",children:S.jsx("div",{className:"shadow-2xl bg-zinc-900 relative ring-1 ring-white/10 rounded-lg overflow-hidden",children:D==="plan"?S.jsxs("svg",{ref:Ue,width:x.width,height:x.height,viewBox:`0 0 ${x.width} ${x.height}`,className:`bg-white block ${ot==="select"?"cursor-default":"cursor-crosshair"}`,onMouseMove:iy,onMouseUp:ry,onMouseDown:oy,onWheel:ay,onClick:sy,xmlns:"http://www.w3.org/2000/svg",children:[S.jsx("defs",{children:S.jsx("pattern",{id:"smallGrid",width:y,height:y,patternUnits:"userSpaceOnUse",children:S.jsx("path",{d:`M ${y} 0 L 0 0 0 ${y}`,fill:"none",stroke:"#333333",strokeWidth:"1"})})}),S.jsxs("g",{transform:`translate(${B.x}, ${B.y}) scale(${J})`,children:[C&&D==="plan"&&S.jsx("rect",{id:"grid-bg",width:"100%",height:"100%",fill:"url(#smallGrid)"}),g&&D==="plan"&&S.jsx("image",{href:g,x:p.x,y:p.y,width:p.width,height:p.height,preserveAspectRatio:"none",opacity:p.opacity,className:"pointer-events-none"}),t.map(_=>{var L,U;const w=We===_.id;if(_.type==="building"||_.type==="parking"){const I=_,K=_.type==="parking";if(!K){const H=_,G=kn(H);return S.jsxs("g",{transform:`translate(${H.x}, ${H.y}) rotate(${H.rotation})`,onMouseDown:ie=>mi(ie,H.id,"move"),onClick:ie=>ie.stopPropagation(),className:"cursor-move",opacity:ae.itemId===H.id&&ae.type==="move"?.8:1,children:[S.jsx("polygon",{points:G.map(ie=>`${ie.x},${ie.y}`).join(" "),fill:H.color,stroke:w?"#059669":"#334155",strokeWidth:w?3:1}),S.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",pointerEvents:"none",className:"font-bold select-none",children:H.label}),w&&G.map((ie,ne)=>S.jsx("circle",{cx:ie.x,cy:ie.y,r:"5",fill:"#ffffff",stroke:"#059669",strokeWidth:"2",className:"cursor-pointer",onMouseDown:he=>mi(he,H.id,"vertex",String(ne))},`${H.id}-vertex-${ne}`))]},H.id)}return S.jsxs("g",{transform:`translate(${I.x}, ${I.y}) rotate(${I.rotation})`,onMouseDown:H=>mi(H,I.id,"move"),onClick:H=>{Bt||H.stopPropagation()},className:"cursor-move",opacity:ae.itemId===I.id&&ae.type==="move"?.8:1,style:{filter:w?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))":"none"},children:[S.jsx("rect",{x:-I.width/2,y:-I.height/2,width:I.width,height:I.height,fill:I.color,stroke:w?"#3b82f6":K?"#94a3b8":"#334155",strokeWidth:w?4:1,strokeDasharray:K?"4":"0"}),K&&S.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"#94a3b8",fontSize:"16",fontWeight:"bold",pointerEvents:"none",transform:"rotate(-90)",children:"P"}),!K&&S.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",pointerEvents:"none",className:"font-bold select-none",children:I.label})]},I.id)}if(_.type==="tree"){const I=_;return S.jsxs("g",{transform:`translate(${I.x}, ${I.y})`,onMouseDown:K=>mi(K,I.id,"move"),onClick:K=>K.stopPropagation(),className:"cursor-move",style:{filter:w?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))":"none"},children:[S.jsx("circle",{r:I.radius,fill:I.color,fillOpacity:"0.6",stroke:w?"#3b82f6":I.color,strokeWidth:w?3:0}),S.jsx("circle",{r:I.radius*.5,fill:"black",fillOpacity:"0.1"})]},I.id)}if(_.type==="label"){const I=_;return S.jsx("text",{x:I.x,y:I.y,fontSize:I.fontSize,fill:w?"#3b82f6":I.color,fontWeight:"bold",textAnchor:"middle",className:"cursor-move select-none",onMouseDown:K=>mi(K,I.id,"move"),onClick:K=>K.stopPropagation(),style:{textShadow:w?"0 0 8px rgba(59, 130, 246, 0.8)":"0px 1px 2px rgba(255,255,255,0.8)",stroke:w?"#3b82f6":"none",strokeWidth:w?1:0},children:I.text},I.id)}if(_.type==="image"){const I=_;return S.jsx("g",{transform:`translate(${I.x}, ${I.y}) rotate(${I.rotation})`,onMouseDown:K=>mi(K,I.id,"move"),onClick:K=>K.stopPropagation(),className:"cursor-move",children:S.jsx("image",{href:I.src,x:-I.width/2,y:-I.height/2,width:I.width,height:I.height,style:{outline:w?"3px solid #3b82f6":"none",filter:w?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))":"none"}})},I.id)}if(_.type==="camera"){const I=_,K=Oi(I),H=I.range,G=I.hFov??I.fov,ie=(I.rotation-G/2)*(Math.PI/180),ne=(I.rotation+G/2)*(Math.PI/180),he=H*Math.cos(ie),Ee=H*Math.sin(ie),Ae=H*Math.cos(ne),be=H*Math.sin(ne),Ne=40,me=I.rotation*(Math.PI/180),et=Ne*Math.cos(me),Se=Ne*Math.sin(me),oe=((L=I.labelOffset)==null?void 0:L.x)??0,Ce=((U=I.labelOffset)==null?void 0:U.y)??30;I.connectorDashSize;const Xe=t.filter(st=>st.type==="building"),Fe=Vp(K,H,G,I.rotation,Xe),dt=t.filter(st=>st.type==="building"||st.type==="tree"),_t=Vp(K,H,G,I.rotation,dt),yt=st=>{let mt="M 0 0 ";return st.forEach(He=>{mt+=`L ${He.x} ${He.y} `}),mt+"Z"},$e=yt(Fe),Re=yt(_t);return S.jsxs("g",{transform:`translate(${K.x}, ${K.y})`,onClick:st=>st.stopPropagation(),children:[S.jsxs("g",{onMouseDown:st=>mi(st,I.id,"move"),className:"cursor-move",style:{filter:w?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))":"none"},children:[S.jsxs("defs",{children:[S.jsxs("mask",{id:`mask-${I.id}`,children:[S.jsx("rect",{x:-H,y:-H,width:H*2,height:H*2,fill:"white"}),S.jsx("path",{d:Re,fill:"black"})]}),S.jsxs("radialGradient",{id:`grad-blue-${I.id}`,cx:"0",cy:"0",r:H,gradientUnits:"userSpaceOnUse",children:[S.jsx("stop",{offset:"50%",stopColor:I.color,stopOpacity:"0.2"}),S.jsx("stop",{offset:"100%",stopColor:I.color,stopOpacity:"0"})]}),S.jsxs("radialGradient",{id:`grad-blue-stroke-${I.id}`,cx:"0",cy:"0",r:H,gradientUnits:"userSpaceOnUse",children:[S.jsx("stop",{offset:"80%",stopColor:I.color,stopOpacity:"1"}),S.jsx("stop",{offset:"100%",stopColor:I.color,stopOpacity:"0"})]}),S.jsxs("radialGradient",{id:`grad-yellow-${I.id}`,cx:"0",cy:"0",r:H,gradientUnits:"userSpaceOnUse",children:[S.jsx("stop",{offset:"50%",stopColor:"#fde047",stopOpacity:"0.3"}),S.jsx("stop",{offset:"100%",stopColor:"#fde047",stopOpacity:"0"})]}),S.jsxs("radialGradient",{id:`grad-yellow-stroke-${I.id}`,cx:"0",cy:"0",r:H,gradientUnits:"userSpaceOnUse",children:[S.jsx("stop",{offset:"80%",stopColor:"#eab308",stopOpacity:"1"}),S.jsx("stop",{offset:"100%",stopColor:"#eab308",stopOpacity:"0"})]})]}),S.jsx("path",{d:$e,fill:`url(#grad-yellow-${I.id})`,stroke:`url(#grad-yellow-stroke-${I.id})`,strokeWidth:"1",strokeDasharray:"4,4",pointerEvents:"none",mask:`url(#mask-${I.id})`}),S.jsx("path",{d:Re,fill:`url(#grad-blue-${I.id})`,stroke:`url(#grad-blue-stroke-${I.id})`,strokeWidth:"1",pointerEvents:"none"}),S.jsxs("g",{transform:`rotate(${I.rotation})`,children:[S.jsx("rect",{x:"-10",y:"-8",width:"20",height:"16",rx:"4",fill:w?"#3b82f6":"#1e293b"}),S.jsx("circle",{cx:"0",cy:"0",r:"4",fill:I.color}),S.jsx("rect",{x:"10",y:"-4",width:"6",height:"8",fill:"#475569"})]})]}),w&&S.jsxs(S.Fragment,{children:[S.jsx("line",{x1:"0",y1:"0",x2:et,y2:Se,stroke:"white",strokeWidth:"2",strokeDasharray:"3,3"}),S.jsx("circle",{cx:et,cy:Se,r:"7",fill:"#3b82f6",stroke:"white",strokeWidth:"2",className:"cursor-crosshair",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:st=>mi(st,I.id,"rotate")}),S.jsx("circle",{cx:he,cy:Ee,r:"6",fill:I.color,stroke:"white",strokeWidth:"2",className:"cursor-ew-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:st=>mi(st,I.id,"fov","left")}),S.jsx("circle",{cx:Ae,cy:be,r:"6",fill:I.color,stroke:"white",strokeWidth:"2",className:"cursor-ew-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:st=>mi(st,I.id,"fov","right")}),S.jsx("circle",{cx:H*Math.cos(me),cy:H*Math.sin(me),r:"6",fill:I.color,stroke:"white",strokeWidth:"2",className:"cursor-ns-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:st=>mi(st,I.id,"range")})]}),S.jsxs("g",{transform:`translate(${oe}, ${Ce})`,onMouseDown:st=>mi(st,I.id,"move-label"),className:"cursor-move hover:opacity-80 transition-opacity",children:[(Math.abs(oe)>10||Math.abs(Ce-30)>10)&&S.jsx("line",{x1:-oe,y1:-Ce,x2:"0",y2:"0",stroke:"white",strokeWidth:"2",strokeDasharray:"6,4",style:{filter:"drop-shadow(0 0 2px rgba(0,0,0,0.8))"}}),S.jsx("rect",{x:"-50",y:"-10",width:"100",height:"20",rx:"4",fill:"rgba(255,255,255,0.9)",stroke:w?"#3b82f6":"transparent",strokeWidth:"1"}),S.jsx("text",{textAnchor:"middle",dy:"4",fontSize:"10",fill:"#334155",fontWeight:"bold",pointerEvents:"none",className:"select-none",children:I.label})]})]},I.id)}return null}),bt&&ot==="add-camera"&&S.jsxs("g",{transform:`translate(${bt.point.x}, ${bt.point.y})`,className:"pointer-events-none",opacity:.6,children:[S.jsx("path",{d:(()=>{const L=(bt.rotation-35)*(Math.PI/180),U=(bt.rotation+70/2)*(Math.PI/180),I=100*Math.cos(L),K=100*Math.sin(L),H=100*Math.cos(U),G=100*Math.sin(U);return`M 0 0 L ${I} ${K} A 100 100 0 0 1 ${H} ${G} Z`})(),fill:"#3b82f6",fillOpacity:"0.2",stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"4,4"}),S.jsxs("g",{transform:`rotate(${bt.rotation})`,children:[S.jsx("rect",{x:"-10",y:"-8",width:"20",height:"16",rx:"4",fill:"#3b82f6"}),S.jsx("circle",{cx:"0",cy:"0",r:"4",fill:"white"}),S.jsx("rect",{x:"10",y:"-4",width:"6",height:"8",fill:"#1e40af"})]}),S.jsx("text",{y:"-20",textAnchor:"middle",fill:"#3b82f6",fontSize:"11",fontWeight:"bold",className:"select-none",children:"Click to place"})]}),ot==="add-camera"&&t.filter(_=>_.type==="building").map(_=>{const w=_,L=fr(w);return L.map((U,I)=>{const K=L[(I+1)%L.length],H=(bt==null?void 0:bt.buildingId)===w.id&&(bt==null?void 0:bt.edgeIndex)===I;return S.jsx("line",{x1:U.x,y1:U.y,x2:K.x,y2:K.y,stroke:H?"#3b82f6":"#94a3b8",strokeWidth:H?4:2,strokeDasharray:H?"0":"6,4",className:"pointer-events-none transition-all",opacity:H?1:.5},`edge-highlight-${w.id}-${I}`)})}),t.map(_=>{var w,L;if(_.type==="camera"){const U=_,I=Oi(U),K=((w=U.labelOffset)==null?void 0:w.x)??0,H=((L=U.labelOffset)==null?void 0:L.y)??30,G=We===U.id;return S.jsx("g",{transform:`translate(${I.x}, ${I.y})`,style:{pointerEvents:"none"},children:S.jsxs("g",{transform:`translate(${K}, ${H})`,onMouseDown:ie=>{ie.stopPropagation(),mi(ie,U.id,"move-label")},className:"cursor-move hover:opacity-80 transition-opacity",style:{pointerEvents:"auto"},children:[(Math.abs(K)>10||Math.abs(H-30)>10)&&S.jsx("line",{x1:-K,y1:-H,x2:"0",y2:"0",stroke:"white",strokeWidth:"2",strokeDasharray:"6,4",style:{filter:"drop-shadow(0 0 2px rgba(0,0,0,0.8))"}}),S.jsx("rect",{x:"-50",y:"-10",width:"100",height:"20",rx:"4",fill:"rgba(255,255,255,0.9)",stroke:G?"#3b82f6":"transparent",strokeWidth:"1"}),S.jsx("text",{textAnchor:"middle",dy:"4",fontSize:"10",fill:"#334155",fontWeight:"bold",pointerEvents:"none",className:"select-none",children:U.label})]})},`label-overlay-${U.id}`)}return null})]})]}):S.jsxs("div",{className:"relative flex-1",style:{minWidth:x.width,minHeight:x.height},children:[S.jsx("div",{ref:Mt,className:"absolute inset-0"}),S.jsxs("div",{className:"absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none",children:[S.jsx("div",{className:"rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-semibold text-slate-300 shadow border border-white/10 pointer-events-auto",children:"Drag to pan · Right-click to rotate · Scroll to zoom"}),S.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[S.jsxs("button",{onClick:()=>{var _;return(_=Lt.current)==null?void 0:_.click()},className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors flex items-center gap-1",children:[S.jsx(X0,{className:"w-3 h-3"}),"Set 3D BG"]}),S.jsx("button",{onClick:ey,className:"px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/20 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/30 shadow-sm transition-colors",children:"Take Snapshot"}),S.jsx("button",{onClick:ty,className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"Export View"}),S.jsx("button",{onClick:()=>{var _;return Ie([...Me,{id:bo(),type:"3d",label:"3D View",dataUrl:((_=Be.current)==null?void 0:_.renderer.domElement.toDataURL("image/png"))||""}])},className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"+ Add to Export"}),S.jsx("button",{onClick:ny,className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"Reset View"})]})]})]})})}),Ut&&Pe&&S.jsxs("div",{className:"absolute bottom-4 right-96 w-80 bg-zinc-900/90 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/10 z-40 ring-1 ring-black/50",children:[S.jsxs("div",{className:"flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/5",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(Uc,{className:"w-4 h-4 text-emerald-400"}),S.jsxs("span",{className:"text-sm font-medium text-slate-200 truncate",children:[Ut.label," View"]})]}),S.jsx("button",{onClick:()=>z(!1),className:"p-1 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors",children:S.jsx(vh,{className:"w-4 h-4"})})]}),S.jsx("canvas",{ref:ii,width:320,height:180,className:"w-full"}),S.jsxs("div",{className:"px-3 py-2 bg-white/5 text-xs text-slate-400 flex items-center justify-between border-t border-white/5",children:[S.jsxs("div",{className:"flex gap-3",children:[S.jsxs("span",{children:["H-FOV: ",(Ut.hFov??Ut.fov).toFixed(0),"°"]}),S.jsxs("span",{children:["V-FOV: ",(Ut.vFov??45).toFixed(0),"°"]}),S.jsxs("span",{children:["Range: ",Ut.range]})]}),S.jsxs("button",{onClick:()=>pr(Ut),className:"px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded flex items-center gap-1",children:[S.jsx($0,{className:"w-3 h-3"}),"Export"]})]})]}),Ut&&!Pe&&S.jsxs("button",{onClick:()=>z(!0),className:"absolute bottom-4 right-96 px-4 py-2 bg-slate-800 text-white rounded-lg shadow-lg hover:bg-slate-700 transition-colors z-40 flex items-center gap-2",children:[S.jsx(Uc,{className:"w-4 h-4"}),S.jsx("span",{className:"text-sm font-medium",children:"Show Camera View"})]}),S.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-80 bg-zinc-900/90 backdrop-blur-xl border-l border-white/10 overflow-y-auto hidden lg:block shadow-2xl z-40 custom-scrollbar",children:xe?S.jsxs("div",{className:"p-6 flex flex-col gap-6",children:[S.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[S.jsxs("h2",{className:"font-bold text-lg text-slate-200 capitalize",children:["Edit ",xe.type]}),S.jsx("button",{onClick:()=>zn(xe.id),className:"text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors",children:S.jsx(Y0,{className:"w-5 h-5"})})]}),xe.type!=="label"&&S.jsxs("div",{className:"space-y-2",children:[S.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[S.jsx("span",{children:"Rotation"}),S.jsxs("span",{children:[Math.round(xe.rotation),"deg"]})]}),S.jsx("input",{type:"range",min:"0",max:"360",value:xe.rotation,onChange:_=>V(xe.id,{rotation:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),(xe.type==="camera"||xe.type==="building"||xe.type==="image"||xe.type==="label")&&S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:xe.type==="label"?"Text Content":"Label"}),S.jsx("input",{type:"text",value:xe.type==="label"?xe.text:xe.label,onChange:_=>V(xe.id,xe.type==="label"?{text:_.target.value}:{label:_.target.value}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),xe.type==="label"&&S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Font Size"}),S.jsx("input",{type:"number",min:"8",max:"72",value:xe.fontSize,onChange:_=>V(xe.id,{fontSize:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),(xe.type==="building"||xe.type==="parking")&&S.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),S.jsx("input",{type:"number",value:xe.width,onChange:_=>xe.type==="building"?ut(xe.id,parseInt(_.target.value),xe.height):V(xe.id,{width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),S.jsx("input",{type:"number",value:xe.height,onChange:_=>xe.type==="building"?ut(xe.id,xe.width,parseInt(_.target.value)):V(xe.id,{height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),xe.type==="building"&&S.jsxs("div",{className:"space-y-2 mt-4",children:[S.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[S.jsx("span",{children:"Wall Height"}),S.jsxs("span",{children:[xe.wallHeight??60," units"]})]}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("input",{type:"range",min:"10",max:"300",value:xe.wallHeight??60,onChange:_=>V(xe.id,{wallHeight:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 self-center"}),S.jsx("input",{type:"number",value:xe.wallHeight??60,onChange:_=>V(xe.id,{wallHeight:parseInt(_.target.value)}),className:"w-16 bg-transparent border border-white/20 rounded-lg p-1 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none text-center"})]})]}),xe.type==="building"&&S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Building Shape"}),S.jsxs("div",{className:"flex flex-wrap gap-2",children:[S.jsx("button",{onClick:()=>ht(xe.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Add Vertex"}),S.jsx("button",{onClick:()=>xt(!0),className:`px-3 py-1 rounded-full border text-xs ${Bt?"border-emerald-300 bg-emerald-50 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"}`,children:"Insert on Edge"}),S.jsx("button",{onClick:()=>pt(xe.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Remove Vertex"}),S.jsx("button",{onClick:()=>vt(xe.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Reset Rectangle"})]}),S.jsx("p",{className:"text-xs text-slate-400",children:"Drag the green nodes in plan view to sculpt the footprint. Click “Insert on Edge” then click any edge."})]}),xe.type==="image"&&S.jsxs("div",{className:"space-y-4",children:[S.jsxs("button",{onClick:()=>V(xe.id,{aspectRatioLocked:!xe.aspectRatioLocked}),className:`flex items-center gap-2 text-sm font-medium w-full p-2 rounded border ${xe.aspectRatioLocked?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-slate-200 text-slate-400"}`,children:[xe.aspectRatioLocked?S.jsx(aC,{className:"w-4 h-4"}):S.jsx(sC,{className:"w-4 h-4"}),"Maintain Proportions"]}),S.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),S.jsx("input",{type:"number",value:Math.round(xe.width),onChange:_=>Wt(xe.id,parseInt(_.target.value),void 0),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),S.jsx("input",{type:"number",value:Math.round(xe.height),onChange:_=>Wt(xe.id,void 0,parseInt(_.target.value)),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),S.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Size Scale"}),S.jsx("input",{type:"range",min:"10",max:"600",value:Math.max(xe.width,xe.height),onChange:_=>{const w=parseInt(_.target.value);xe.width>=xe.height?Wt(xe.id,w,void 0):Wt(xe.id,void 0,w)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),xe.type==="tree"&&S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Canopy Size"}),S.jsx("input",{type:"range",min:"10",max:"100",value:xe.radius,onChange:_=>V(xe.id,{radius:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),xe.type==="camera"&&S.jsxs("div",{className:"space-y-5",children:[S.jsxs("div",{className:"space-y-2",children:[S.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[S.jsx("span",{children:"Horizontal FOV"}),S.jsxs("span",{children:[Math.round(Js),"deg"]})]}),S.jsx("input",{type:"range",min:"10",max:"180",value:Js,onChange:_=>{const w=parseInt(_.target.value),L=Ua(w,Ki);it(xe.id,w,L,Ki)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[S.jsx("span",{children:"Vertical FOV"}),S.jsxs("span",{children:[Math.round(ed),"deg"]})]}),S.jsx("input",{type:"range",min:"10",max:"180",value:ed,onChange:_=>{const w=parseInt(_.target.value),L=UC(w,Ki);it(xe.id,L,w,Ki)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[S.jsx("span",{children:"Diagonal FOV"}),S.jsxs("span",{children:[Math.round(Xp),"deg"]})]}),S.jsx("input",{type:"range",min:"20",max:"180",value:Xp,onChange:_=>{const w=parseInt(_.target.value),{h:L,v:U}=IC(w,Ki);it(xe.id,L,U,Ki)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Aspect Ratio"}),S.jsxs("select",{value:Ki,onChange:_=>{const w=parseFloat(_.target.value),L=Ua(Js,w);it(xe.id,Js,L,w)},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none",children:[S.jsx("option",{value:16/9,children:"16:9 (Widescreen)"}),S.jsx("option",{value:4/3,children:"4:3 (Standard)"}),S.jsx("option",{value:1,children:"1:1 (Square)"})]})]}),S.jsx("div",{className:"flex flex-wrap gap-2 text-xs",children:[{label:"Wide",value:120},{label:"Standard",value:80},{label:"Narrow",value:45}].map(_=>S.jsx("button",{onClick:()=>{const w=Ua(_.value,Ki);it(xe.id,_.value,w,Ki)},className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50",children:_.label},_.label))}),S.jsxs("div",{className:"space-y-2",children:[S.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[S.jsx("span",{children:"Range"}),S.jsxs("span",{children:[Math.round(xe.range),"px"]})]}),S.jsx("input",{type:"range",min:"50",max:"800",value:xe.range,onChange:_=>V(xe.id,{range:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[S.jsxs("div",{className:"space-y-2",children:[S.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[S.jsx("span",{children:"Pitch"}),S.jsxs("span",{children:[Math.round(xe.pitch??0),"deg"]})]}),S.jsx("input",{type:"range",min:"-60",max:"30",value:xe.pitch??0,onChange:_=>V(xe.id,{pitch:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[S.jsx("span",{children:"Height"}),S.jsxs("span",{children:[Math.round(((Qp=xe.mount)==null?void 0:Qp.height)??xe.height??10),"ft"]})]}),S.jsx("input",{type:"range",min:"4",max:"40",value:((em=xe.mount)==null?void 0:em.height)??xe.height??10,onChange:_=>{var L;const w=parseInt(_.target.value);((L=xe.mount)==null?void 0:L.type)==="building"?Q(xe.id,{height:w}):V(xe.id,{height:w})},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Mount"}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("button",{onClick:()=>{var w;const _=Oi(xe);V(xe.id,{x:_.x,y:_.y,mount:{type:"free",height:((w=xe.mount)==null?void 0:w.height)??xe.height??10}})},className:`px-3 py-1 rounded-full text-xs font-semibold border ${td==="free"?"bg-emerald-50 border-emerald-200 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"}`,children:"Free"}),S.jsx("button",{disabled:!Bl.length,onClick:()=>je(xe.id),className:`px-3 py-1 rounded-full text-xs font-semibold border ${td==="building"?"bg-emerald-50 border-emerald-200 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"} ${Bl.length?"":"opacity-50 cursor-not-allowed"}`,children:"Building"})]})]}),td==="building"&&Qs&&S.jsxs("div",{className:"space-y-3",children:[S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Building"}),S.jsx("select",{value:Qs.id,onChange:_=>{var L;const w=_.target.value;V(xe.id,{mount:{type:"building",buildingId:w,edgeIndex:0,edgeT:.5,height:((L=xe.mount)==null?void 0:L.height)??xe.height??10}})},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none",children:Bl.map(_=>S.jsx("option",{value:_.id,children:_.label},_.id))})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[S.jsx("span",{children:"Edge"}),S.jsxs("span",{children:["#",$p+1]})]}),S.jsx("input",{type:"range",min:"0",max:Math.max(ly-1,0),value:$p,onChange:_=>{const w=parseInt(_.target.value);Q(xe.id,{edgeIndex:w,edgeT:.5,buildingId:Qs.id,type:"building"})},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[S.jsx("span",{children:"Position Along Edge"}),S.jsxs("span",{children:[Math.round(Yp*100),"%"]})]}),S.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:Yp,onChange:_=>Q(xe.id,{edgeT:parseFloat(_.target.value),buildingId:Qs.id,type:"building"}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Description"}),S.jsx("textarea",{value:xe.description,onChange:_=>V(xe.id,{description:_.target.value}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none h-20"})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Connector Dash Size"}),S.jsx("input",{type:"range",min:"1",max:"20",value:xe.connectorDashSize||3,onChange:_=>V(xe.id,{connectorDashSize:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),xe.type!=="image"&&In[xe.type]&&S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Color Code"}),S.jsx("div",{className:"flex flex-wrap gap-2",children:In[xe.type].map(_=>S.jsx("button",{onClick:()=>V(xe.id,{color:_}),className:`w-8 h-8 rounded-full border-2 transition-all ${xe.color===_?"border-slate-800 scale-110":"border-transparent hover:scale-105"}`,style:{backgroundColor:_}},_))})]})]}):S.jsxs("div",{className:"p-6 flex flex-col gap-6",children:[S.jsxs("div",{className:"flex items-center gap-2 border-b border-white/10 pb-4",children:[S.jsx(xh,{className:"w-5 h-5 text-slate-400"}),S.jsx("h2",{className:"font-bold text-lg text-slate-200",children:"Project Settings"})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Project Name"}),S.jsx("input",{type:"text",value:T,onChange:_=>W(_.target.value),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),S.jsx("div",{className:"grid grid-cols-2 gap-4",children:[{label:"Cameras",value:t.filter(_=>_.type==="camera").length},{label:"Buildings",value:t.filter(_=>_.type==="building").length},{label:"Trees",value:t.filter(_=>_.type==="tree").length},{label:"Parking",value:t.filter(_=>_.type==="parking").length}].map(_=>S.jsxs("div",{className:"rounded-lg border border-white/10 bg-white/5 p-3",children:[S.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-400",children:_.label}),S.jsx("p",{className:"text-lg font-semibold text-slate-200",children:_.value})]},_.label))}),S.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[S.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"Canvas"}),S.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),S.jsx("input",{type:"number",min:"400",max:"3000",value:x.width,onChange:_=>M({...x,width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),S.jsx("input",{type:"number",min:"300",max:"3000",value:x.height,onChange:_=>M({...x,height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[S.jsx("span",{children:"Grid Size"}),S.jsxs("span",{children:[y,"px"]})]}),S.jsx("input",{type:"range",min:"10",max:"80",value:y,onChange:_=>N(parseInt(_.target.value)),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),S.jsxs("div",{className:"flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm",children:[S.jsx("span",{className:"text-slate-600",children:"Show Grid"}),S.jsx("button",{onClick:()=>R(_=>!_),className:`px-3 py-1 rounded-full text-xs font-semibold ${C?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-400"}`,children:C?"On":"Off"})]}),S.jsxs("div",{className:"flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm",children:[S.jsx("span",{className:"text-slate-600",children:"Snap to Grid"}),S.jsx("button",{onClick:()=>b(_=>!_),className:`px-3 py-1 rounded-full text-xs font-semibold ${k?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-400"}`,children:k?"On":"Off"})]}),S.jsx("button",{onClick:pn,className:"w-full py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50",children:"Clear Canvas"})]}),S.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[S.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"Background Map"}),S.jsx("p",{className:"text-xs text-slate-400",children:"Adjust the uploaded map to align with the grid."}),S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Opacity"}),S.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:p.opacity,onChange:_=>v({...p,opacity:parseFloat(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Width"}),S.jsx("input",{type:"number",value:p.width,onChange:_=>v({...p,width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Height"}),S.jsx("input",{type:"number",value:p.height,onChange:_=>v({...p,height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Offset X"}),S.jsx("input",{type:"number",value:p.x,onChange:_=>v({...p,x:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Offset Y"}),S.jsx("input",{type:"number",value:p.y,onChange:_=>v({...p,y:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),S.jsx("button",{onClick:Fi,className:"w-full py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50",children:"Fit Background to Canvas"})]}),S.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[S.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"3D Visualization"}),S.jsxs("div",{className:"space-y-3 mb-4 p-3 bg-white/5 rounded-lg border border-white/10",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400 block",children:"Environment Background"}),S.jsxs("div",{className:"flex gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10",children:[S.jsx("button",{onClick:()=>hn("flat"),className:`flex-1 px-2 py-1 text-[10px] font-medium rounded transition-colors ${Ot==="flat"?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-300"}`,children:"Flat Image"}),S.jsx("button",{onClick:()=>hn("panorama"),className:`flex-1 px-2 py-1 text-[10px] font-medium rounded transition-colors ${Ot==="panorama"?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-300"}`,children:"360° Panorama"})]}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("button",{onClick:()=>{var _;return(_=Lt.current)==null?void 0:_.click()},className:"flex-1 py-1.5 px-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors",children:Ot==="panorama"?"Upload HDRI/Panorama":"Upload Background"}),Rt&&S.jsx("button",{onClick:()=>Dt(null),className:"py-1.5 px-3 rounded-md bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/10 text-xs transition-colors",title:"Clear Background",children:S.jsx(Y0,{className:"w-4 h-4"})})]}),Ot==="panorama"&&S.jsxs("p",{className:"text-[10px] text-slate-500",children:["Upload a 360° equirectangular image (2:1 aspect ratio) for immersive backgrounds. Get free HDRIs from ",S.jsx("a",{href:"https://polyhaven.com/hdris",target:"_blank",rel:"noopener noreferrer",className:"text-indigo-400 hover:underline",children:"Poly Haven"})]})]}),S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsx("label",{className:"text-xs font-semibold text-slate-400",children:"Show Vision Cones"}),S.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[S.jsx("input",{type:"checkbox",className:"sr-only peer",checked:ze.visible,onChange:_=>rt({...ze,visible:_.target.checked})}),S.jsx("div",{className:"w-9 h-5 bg-slate-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"})]})]}),ze.visible&&S.jsxs("div",{className:"space-y-3 mt-2 pl-2 border-l border-white/5",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsx("label",{className:"text-xs text-slate-500",children:"Active Cam Only"}),S.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[S.jsx("input",{type:"checkbox",className:"sr-only peer",checked:ze.showAll===!1,onChange:_=>rt({...ze,showAll:!_.target.checked})}),S.jsx("div",{className:"w-7 h-4 bg-slate-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-indigo-600"})]})]}),S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsx("label",{className:"text-xs text-slate-500",children:"Style"}),S.jsxs("div",{className:"bg-white/5 p-0.5 rounded-lg flex text-[10px] font-medium border border-white/10",children:[S.jsx("button",{onClick:()=>rt({...ze,mode:"volume"}),className:`px-2 py-1 rounded transition-colors ${!ze.mode||ze.mode==="volume"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-300"}`,children:"Full"}),S.jsx("button",{onClick:()=>rt({...ze,mode:"floor"}),className:`px-2 py-1 rounded transition-colors ${ze.mode==="floor"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-300"}`,children:"Floor"})]})]}),S.jsxs("div",{className:"space-y-1",children:[S.jsxs("div",{className:"flex justify-between",children:[S.jsx("label",{className:"text-[10px] text-slate-500",children:"Opacity"}),S.jsxs("span",{className:"text-[10px] text-slate-400",children:[Math.round(ze.opacity*100),"%"]})]}),S.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:ze.opacity,onChange:_=>rt({...ze,opacity:parseFloat(_.target.value)}),className:"w-full accent-indigo-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"})]}),S.jsxs("div",{className:"space-y-1",children:[S.jsxs("div",{className:"flex justify-between",children:[S.jsx("label",{className:"text-[10px] text-slate-500",children:"Edges"}),S.jsxs("span",{className:"text-[10px] text-slate-400",children:[Math.round(ze.edgeOpacity*100),"%"]})]}),S.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:ze.edgeOpacity,onChange:_=>rt({...ze,edgeOpacity:parseFloat(_.target.value)}),className:"w-full accent-indigo-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"})]})]})]}),S.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[S.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"3D Snapshots"}),D!=="iso3d"?S.jsx("p",{className:"text-xs text-slate-400",children:"Switch to Isometric view to capture snapshots."}):gt.length===0?S.jsx("p",{className:"text-xs text-slate-400",children:"No snapshots yet. Click “Snapshot” in the 3D view."}):S.jsx("div",{className:"grid grid-cols-2 gap-3",children:gt.map(_=>S.jsxs("div",{className:"rounded-lg border border-slate-200 overflow-hidden bg-white",children:[S.jsx("img",{src:_.dataUrl,alt:"Snapshot",className:"w-full h-24 object-cover"}),S.jsxs("div",{className:"p-2",children:[S.jsx("p",{className:"text-[10px] text-slate-400",children:_.createdAt}),S.jsx("button",{onClick:()=>Gp(_.dataUrl,`security_snapshot_${_.id}.png`),className:"mt-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700",children:"Export"})]})]},_.id))})]})]})})]})]})}const Z_=document.getElementById("root");if(!Z_)throw new Error("Root element not found");a_(Z_).render(S.jsx(Py.StrictMode,{children:S.jsx(OC,{})}));
