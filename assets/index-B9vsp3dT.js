(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function W_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var P0={exports:{}},mu={},L0={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dl=Symbol.for("react.element"),j_=Symbol.for("react.portal"),X_=Symbol.for("react.fragment"),$_=Symbol.for("react.strict_mode"),Y_=Symbol.for("react.profiler"),q_=Symbol.for("react.provider"),Z_=Symbol.for("react.context"),K_=Symbol.for("react.forward_ref"),J_=Symbol.for("react.suspense"),Q_=Symbol.for("react.memo"),ey=Symbol.for("react.lazy"),Fp=Symbol.iterator;function ty(t){return t===null||typeof t!="object"?null:(t=Fp&&t[Fp]||t["@@iterator"],typeof t=="function"?t:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D0=Object.assign,I0={};function $o(t,e,n){this.props=t,this.context=e,this.refs=I0,this.updater=n||N0}$o.prototype.isReactComponent={};$o.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$o.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function U0(){}U0.prototype=$o.prototype;function vh(t,e,n){this.props=t,this.context=e,this.refs=I0,this.updater=n||N0}var xh=vh.prototype=new U0;xh.constructor=vh;D0(xh,$o.prototype);xh.isPureReactComponent=!0;var kp=Array.isArray,O0=Object.prototype.hasOwnProperty,_h={current:null},F0={key:!0,ref:!0,__self:!0,__source:!0};function k0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)O0.call(e,i)&&!F0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:dl,type:t,key:s,ref:o,props:r,_owner:_h.current}}function ny(t,e){return{$$typeof:dl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yh(t){return typeof t=="object"&&t!==null&&t.$$typeof===dl}function iy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zp=/\/+/g;function Xu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iy(""+t.key):e.toString(36)}function yc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case dl:case j_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Xu(o,0):i,kp(r)?(n="",t!=null&&(n=t.replace(zp,"$&/")+"/"),yc(r,e,n,"",function(c){return c})):r!=null&&(yh(r)&&(r=ny(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(zp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",kp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Xu(s,a);o+=yc(s,e,n,l,r)}else if(l=ty(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Xu(s,a++),o+=yc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Tl(t,e,n){if(t==null)return t;var i=[],r=0;return yc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ry(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qn={current:null},Sc={transition:null},sy={ReactCurrentDispatcher:qn,ReactCurrentBatchConfig:Sc,ReactCurrentOwner:_h};function z0(){throw Error("act(...) is not supported in production builds of React.")}At.Children={map:Tl,forEach:function(t,e,n){Tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Tl(t,function(){e++}),e},toArray:function(t){return Tl(t,function(e){return e})||[]},only:function(t){if(!yh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};At.Component=$o;At.Fragment=X_;At.Profiler=Y_;At.PureComponent=vh;At.StrictMode=$_;At.Suspense=J_;At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sy;At.act=z0;At.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=D0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_h.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)O0.call(e,l)&&!F0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:dl,type:t.type,key:r,ref:s,props:i,_owner:o}};At.createContext=function(t){return t={$$typeof:Z_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:q_,_context:t},t.Consumer=t};At.createElement=k0;At.createFactory=function(t){var e=k0.bind(null,t);return e.type=t,e};At.createRef=function(){return{current:null}};At.forwardRef=function(t){return{$$typeof:K_,render:t}};At.isValidElement=yh;At.lazy=function(t){return{$$typeof:ey,_payload:{_status:-1,_result:t},_init:ry}};At.memo=function(t,e){return{$$typeof:Q_,type:t,compare:e===void 0?null:e}};At.startTransition=function(t){var e=Sc.transition;Sc.transition={};try{t()}finally{Sc.transition=e}};At.unstable_act=z0;At.useCallback=function(t,e){return qn.current.useCallback(t,e)};At.useContext=function(t){return qn.current.useContext(t)};At.useDebugValue=function(){};At.useDeferredValue=function(t){return qn.current.useDeferredValue(t)};At.useEffect=function(t,e){return qn.current.useEffect(t,e)};At.useId=function(){return qn.current.useId()};At.useImperativeHandle=function(t,e,n){return qn.current.useImperativeHandle(t,e,n)};At.useInsertionEffect=function(t,e){return qn.current.useInsertionEffect(t,e)};At.useLayoutEffect=function(t,e){return qn.current.useLayoutEffect(t,e)};At.useMemo=function(t,e){return qn.current.useMemo(t,e)};At.useReducer=function(t,e,n){return qn.current.useReducer(t,e,n)};At.useRef=function(t){return qn.current.useRef(t)};At.useState=function(t){return qn.current.useState(t)};At.useSyncExternalStore=function(t,e,n){return qn.current.useSyncExternalStore(t,e,n)};At.useTransition=function(){return qn.current.useTransition()};At.version="18.3.1";L0.exports=At;var Oe=L0.exports;const oy=W_(Oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay=Oe,ly=Symbol.for("react.element"),cy=Symbol.for("react.fragment"),uy=Object.prototype.hasOwnProperty,dy=ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fy={key:!0,ref:!0,__self:!0,__source:!0};function B0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)uy.call(e,i)&&!fy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ly,type:t,key:s,ref:o,props:r,_owner:dy.current}}mu.Fragment=cy;mu.jsx=B0;mu.jsxs=B0;P0.exports=mu;var M=P0.exports,H0={exports:{}},mi={},V0={exports:{}},G0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,$){var Y=z.length;z.push($);e:for(;0<Y;){var le=Y-1>>>1,de=z[le];if(0<r(de,$))z[le]=$,z[Y]=de,Y=le;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var $=z[0],Y=z.pop();if(Y!==$){z[0]=Y;e:for(var le=0,de=z.length,J=de>>>1;le<J;){var ue=2*(le+1)-1,Pe=z[ue],Be=ue+1,De=z[Be];if(0>r(Pe,Y))Be<de&&0>r(De,Pe)?(z[le]=De,z[Be]=Y,le=Be):(z[le]=Pe,z[ue]=Y,le=ue);else if(Be<de&&0>r(De,Y))z[le]=De,z[Be]=Y,le=Be;else break e}}return $}function r(z,$){var Y=z.sortIndex-$.sortIndex;return Y!==0?Y:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,v=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=z)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function S(z){if(y=!1,x(z),!v)if(n(l)!==null)v=!0,j(L);else{var $=n(c);$!==null&&ee(S,$.startTime-z)}}function L(z,$){v=!1,y&&(y=!1,d(F),F=-1),p=!0;var Y=h;try{for(x($),f=n(l);f!==null&&(!(f.expirationTime>$)||z&&!V());){var le=f.callback;if(typeof le=="function"){f.callback=null,h=f.priorityLevel;var de=le(f.expirationTime<=$);$=t.unstable_now(),typeof de=="function"?f.callback=de:f===n(l)&&i(l),x($)}else i(l);f=n(l)}if(f!==null)var J=!0;else{var ue=n(c);ue!==null&&ee(S,ue.startTime-$),J=!1}return J}finally{f=null,h=Y,p=!1}}var A=!1,R=null,F=-1,E=5,T=-1;function V(){return!(t.unstable_now()-T<E)}function X(){if(R!==null){var z=t.unstable_now();T=z;var $=!0;try{$=R(!0,z)}finally{$?te():(A=!1,R=null)}}else A=!1}var te;if(typeof m=="function")te=function(){m(X)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,W=D.port2;D.port1.onmessage=X,te=function(){W.postMessage(null)}}else te=function(){g(X,0)};function j(z){R=z,A||(A=!0,te())}function ee(z,$){F=g(function(){z(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,j(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var Y=h;h=$;try{return z()}finally{h=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=h;h=z;try{return $()}finally{h=Y}},t.unstable_scheduleCallback=function(z,$,Y){var le=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?le+Y:le):Y=le,z){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Y+de,z={id:u++,callback:$,priorityLevel:z,startTime:Y,expirationTime:de,sortIndex:-1},Y>le?(z.sortIndex=Y,e(c,z),n(l)===null&&z===n(c)&&(y?(d(F),F=-1):y=!0,ee(S,Y-le))):(z.sortIndex=de,e(l,z),v||p||(v=!0,j(L))),z},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(z){var $=h;return function(){var Y=h;h=$;try{return z.apply(this,arguments)}finally{h=Y}}}})(G0);V0.exports=G0;var hy=V0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py=Oe,pi=hy;function we(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var W0=new Set,Ha={};function Is(t,e){Oo(t,e),Oo(t+"Capture",e)}function Oo(t,e){for(Ha[t]=e,t=0;t<e.length;t++)W0.add(e[t])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uf=Object.prototype.hasOwnProperty,my=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bp={},Hp={};function gy(t){return uf.call(Hp,t)?!0:uf.call(Bp,t)?!1:my.test(t)?Hp[t]=!0:(Bp[t]=!0,!1)}function vy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xy(t,e,n,i){if(e===null||typeof e>"u"||vy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ln[t]=new Zn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ln[e]=new Zn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ln[t]=new Zn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ln[t]=new Zn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ln[t]=new Zn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ln[t]=new Zn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ln[t]=new Zn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ln[t]=new Zn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ln[t]=new Zn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sh=/[\-:]([a-z])/g;function Mh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sh,Mh);Ln[e]=new Zn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sh,Mh);Ln[e]=new Zn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sh,Mh);Ln[e]=new Zn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ln[t]=new Zn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ln.xlinkHref=new Zn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ln[t]=new Zn(t,1,!1,t.toLowerCase(),null,!0,!0)});function wh(t,e,n,i){var r=Ln.hasOwnProperty(e)?Ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xy(e,n,r,i)&&(n=null),i||r===null?gy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Sr=py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bl=Symbol.for("react.element"),ho=Symbol.for("react.portal"),po=Symbol.for("react.fragment"),Eh=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),j0=Symbol.for("react.provider"),X0=Symbol.for("react.context"),Th=Symbol.for("react.forward_ref"),ff=Symbol.for("react.suspense"),hf=Symbol.for("react.suspense_list"),bh=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),$0=Symbol.for("react.offscreen"),Vp=Symbol.iterator;function na(t){return t===null||typeof t!="object"?null:(t=Vp&&t[Vp]||t["@@iterator"],typeof t=="function"?t:null)}var tn=Object.assign,$u;function _a(t){if($u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$u=e&&e[1]||""}return`
`+$u+t}var Yu=!1;function qu(t,e){if(!t||Yu)return"";Yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_a(t):""}function _y(t){switch(t.tag){case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return t=qu(t.type,!1),t;case 11:return t=qu(t.type.render,!1),t;case 1:return t=qu(t.type,!0),t;default:return""}}function pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case po:return"Fragment";case ho:return"Portal";case df:return"Profiler";case Eh:return"StrictMode";case ff:return"Suspense";case hf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X0:return(t.displayName||"Context")+".Consumer";case j0:return(t._context.displayName||"Context")+".Provider";case Th:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bh:return e=t.displayName||null,e!==null?e:pf(t.type)||"Memo";case Pr:e=t._payload,t=t._init;try{return pf(t(e))}catch{}}return null}function yy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pf(e);case 8:return e===Eh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sy(t){var e=Y0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Al(t){t._valueTracker||(t._valueTracker=Sy(t))}function q0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Y0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Uc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mf(t,e){var n=e.checked;return tn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z0(t,e){e=e.checked,e!=null&&wh(t,"checked",e,!1)}function gf(t,e){Z0(t,e);var n=Jr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vf(t,e.type,n):e.hasOwnProperty("defaultValue")&&vf(t,e.type,Jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vf(t,e,n){(e!=="number"||Uc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ya=Array.isArray;function Co(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Jr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(we(91));return tn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(we(92));if(ya(n)){if(1<n.length)throw Error(we(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jr(n)}}function K0(t,e){var n=Jr(e.value),i=Jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Xp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function J0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _f(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?J0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Cl,Q0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Cl=Cl||document.createElement("div"),Cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},My=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(t){My.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wa[e]=wa[t]})});function ev(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wa.hasOwnProperty(t)&&wa[t]?(""+e).trim():e+"px"}function tv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ev(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var wy=tn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yf(t,e){if(e){if(wy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(we(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(we(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(we(61))}if(e.style!=null&&typeof e.style!="object")throw Error(we(62))}}function Sf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mf=null;function Ah(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wf=null,Ro=null,Po=null;function $p(t){if(t=pl(t)){if(typeof wf!="function")throw Error(we(280));var e=t.stateNode;e&&(e=yu(e),wf(t.stateNode,t.type,e))}}function nv(t){Ro?Po?Po.push(t):Po=[t]:Ro=t}function iv(){if(Ro){var t=Ro,e=Po;if(Po=Ro=null,$p(t),e)for(t=0;t<e.length;t++)$p(e[t])}}function rv(t,e){return t(e)}function sv(){}var Zu=!1;function ov(t,e,n){if(Zu)return t(e,n);Zu=!0;try{return rv(t,e,n)}finally{Zu=!1,(Ro!==null||Po!==null)&&(sv(),iv())}}function Ga(t,e){var n=t.stateNode;if(n===null)return null;var i=yu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(we(231,e,typeof n));return n}var Ef=!1;if(gr)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{Ef=!1}function Ey(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ea=!1,Oc=null,Fc=!1,Tf=null,Ty={onError:function(t){Ea=!0,Oc=t}};function by(t,e,n,i,r,s,o,a,l){Ea=!1,Oc=null,Ey.apply(Ty,arguments)}function Ay(t,e,n,i,r,s,o,a,l){if(by.apply(this,arguments),Ea){if(Ea){var c=Oc;Ea=!1,Oc=null}else throw Error(we(198));Fc||(Fc=!0,Tf=c)}}function Us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function av(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yp(t){if(Us(t)!==t)throw Error(we(188))}function Cy(t){var e=t.alternate;if(!e){if(e=Us(t),e===null)throw Error(we(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Yp(r),t;if(s===i)return Yp(r),e;s=s.sibling}throw Error(we(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(we(189))}}if(n.alternate!==i)throw Error(we(190))}if(n.tag!==3)throw Error(we(188));return n.stateNode.current===n?t:e}function lv(t){return t=Cy(t),t!==null?cv(t):null}function cv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cv(t);if(e!==null)return e;t=t.sibling}return null}var uv=pi.unstable_scheduleCallback,qp=pi.unstable_cancelCallback,Ry=pi.unstable_shouldYield,Py=pi.unstable_requestPaint,rn=pi.unstable_now,Ly=pi.unstable_getCurrentPriorityLevel,Ch=pi.unstable_ImmediatePriority,dv=pi.unstable_UserBlockingPriority,kc=pi.unstable_NormalPriority,Ny=pi.unstable_LowPriority,fv=pi.unstable_IdlePriority,gu=null,Qi=null;function Dy(t){if(Qi&&typeof Qi.onCommitFiberRoot=="function")try{Qi.onCommitFiberRoot(gu,t,void 0,(t.current.flags&128)===128)}catch{}}var Fi=Math.clz32?Math.clz32:Oy,Iy=Math.log,Uy=Math.LN2;function Oy(t){return t>>>=0,t===0?32:31-(Iy(t)/Uy|0)|0}var Rl=64,Pl=4194304;function Sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Sa(a):(s&=o,s!==0&&(i=Sa(s)))}else o=n&~r,o!==0?i=Sa(o):s!==0&&(i=Sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Fi(e),r=1<<n,i|=t[n],e&=~r;return i}function Fy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ky(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Fi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Fy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hv(){var t=Rl;return Rl<<=1,!(Rl&4194240)&&(Rl=64),t}function Ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fi(e),t[e]=n}function zy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Rh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Dt=0;function pv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mv,Ph,gv,vv,xv,Af=!1,Ll=[],Br=null,Hr=null,Vr=null,Wa=new Map,ja=new Map,Dr=[],By="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zp(t,e){switch(t){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(e.pointerId)}}function ra(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=pl(e),e!==null&&Ph(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Hy(t,e,n,i,r){switch(e){case"focusin":return Br=ra(Br,t,e,n,i,r),!0;case"dragenter":return Hr=ra(Hr,t,e,n,i,r),!0;case"mouseover":return Vr=ra(Vr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wa.set(s,ra(Wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ja.set(s,ra(ja.get(s)||null,t,e,n,i,r)),!0}return!1}function _v(t){var e=vs(t.target);if(e!==null){var n=Us(e);if(n!==null){if(e=n.tag,e===13){if(e=av(n),e!==null){t.blockedOn=e,xv(t.priority,function(){gv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Mf=i,n.target.dispatchEvent(i),Mf=null}else return e=pl(n),e!==null&&Ph(e),t.blockedOn=n,!1;e.shift()}return!0}function Kp(t,e,n){Mc(t)&&n.delete(e)}function Vy(){Af=!1,Br!==null&&Mc(Br)&&(Br=null),Hr!==null&&Mc(Hr)&&(Hr=null),Vr!==null&&Mc(Vr)&&(Vr=null),Wa.forEach(Kp),ja.forEach(Kp)}function sa(t,e){t.blockedOn===e&&(t.blockedOn=null,Af||(Af=!0,pi.unstable_scheduleCallback(pi.unstable_NormalPriority,Vy)))}function Xa(t){function e(r){return sa(r,t)}if(0<Ll.length){sa(Ll[0],t);for(var n=1;n<Ll.length;n++){var i=Ll[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Br!==null&&sa(Br,t),Hr!==null&&sa(Hr,t),Vr!==null&&sa(Vr,t),Wa.forEach(e),ja.forEach(e),n=0;n<Dr.length;n++)i=Dr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Dr.length&&(n=Dr[0],n.blockedOn===null);)_v(n),n.blockedOn===null&&Dr.shift()}var Lo=Sr.ReactCurrentBatchConfig,Bc=!0;function Gy(t,e,n,i){var r=Dt,s=Lo.transition;Lo.transition=null;try{Dt=1,Lh(t,e,n,i)}finally{Dt=r,Lo.transition=s}}function Wy(t,e,n,i){var r=Dt,s=Lo.transition;Lo.transition=null;try{Dt=4,Lh(t,e,n,i)}finally{Dt=r,Lo.transition=s}}function Lh(t,e,n,i){if(Bc){var r=Cf(t,e,n,i);if(r===null)ad(t,e,i,Hc,n),Zp(t,i);else if(Hy(r,t,e,n,i))i.stopPropagation();else if(Zp(t,i),e&4&&-1<By.indexOf(t)){for(;r!==null;){var s=pl(r);if(s!==null&&mv(s),s=Cf(t,e,n,i),s===null&&ad(t,e,i,Hc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ad(t,e,i,null,n)}}var Hc=null;function Cf(t,e,n,i){if(Hc=null,t=Ah(i),t=vs(t),t!==null)if(e=Us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=av(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hc=t,null}function yv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ly()){case Ch:return 1;case dv:return 4;case kc:case Ny:return 16;case fv:return 536870912;default:return 16}default:return 16}}var Ur=null,Nh=null,wc=null;function Sv(){if(wc)return wc;var t,e=Nh,n=e.length,i,r="value"in Ur?Ur.value:Ur.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return wc=r.slice(t,1<i?1-i:void 0)}function Ec(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nl(){return!0}function Jp(){return!1}function gi(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Nl:Jp,this.isPropagationStopped=Jp,this}return tn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),e}var Yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dh=gi(Yo),hl=tn({},Yo,{view:0,detail:0}),jy=gi(hl),Ju,Qu,oa,vu=tn({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ih,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(Ju=t.screenX-oa.screenX,Qu=t.screenY-oa.screenY):Qu=Ju=0,oa=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),Qp=gi(vu),Xy=tn({},vu,{dataTransfer:0}),$y=gi(Xy),Yy=tn({},hl,{relatedTarget:0}),ed=gi(Yy),qy=tn({},Yo,{animationName:0,elapsedTime:0,pseudoElement:0}),Zy=gi(qy),Ky=tn({},Yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jy=gi(Ky),Qy=tn({},Yo,{data:0}),em=gi(Qy),eS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nS[t])?!!e[t]:!1}function Ih(){return iS}var rS=tn({},hl,{key:function(t){if(t.key){var e=eS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ih,charCode:function(t){return t.type==="keypress"?Ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sS=gi(rS),oS=tn({},vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tm=gi(oS),aS=tn({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ih}),lS=gi(aS),cS=tn({},Yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),uS=gi(cS),dS=tn({},vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fS=gi(dS),hS=[9,13,27,32],Uh=gr&&"CompositionEvent"in window,Ta=null;gr&&"documentMode"in document&&(Ta=document.documentMode);var pS=gr&&"TextEvent"in window&&!Ta,Mv=gr&&(!Uh||Ta&&8<Ta&&11>=Ta),nm=" ",im=!1;function wv(t,e){switch(t){case"keyup":return hS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ev(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mo=!1;function mS(t,e){switch(t){case"compositionend":return Ev(e);case"keypress":return e.which!==32?null:(im=!0,nm);case"textInput":return t=e.data,t===nm&&im?null:t;default:return null}}function gS(t,e){if(mo)return t==="compositionend"||!Uh&&wv(t,e)?(t=Sv(),wc=Nh=Ur=null,mo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mv&&e.locale!=="ko"?null:e.data;default:return null}}var vS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vS[t.type]:e==="textarea"}function Tv(t,e,n,i){nv(i),e=Vc(e,"onChange"),0<e.length&&(n=new Dh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ba=null,$a=null;function xS(t){Ov(t,0)}function xu(t){var e=xo(t);if(q0(e))return t}function _S(t,e){if(t==="change")return e}var bv=!1;if(gr){var td;if(gr){var nd="oninput"in document;if(!nd){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),nd=typeof sm.oninput=="function"}td=nd}else td=!1;bv=td&&(!document.documentMode||9<document.documentMode)}function om(){ba&&(ba.detachEvent("onpropertychange",Av),$a=ba=null)}function Av(t){if(t.propertyName==="value"&&xu($a)){var e=[];Tv(e,$a,t,Ah(t)),ov(xS,e)}}function yS(t,e,n){t==="focusin"?(om(),ba=e,$a=n,ba.attachEvent("onpropertychange",Av)):t==="focusout"&&om()}function SS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu($a)}function MS(t,e){if(t==="click")return xu(e)}function wS(t,e){if(t==="input"||t==="change")return xu(e)}function ES(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zi=typeof Object.is=="function"?Object.is:ES;function Ya(t,e){if(zi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!uf.call(e,r)||!zi(t[r],e[r]))return!1}return!0}function am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lm(t,e){var n=am(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=am(n)}}function Cv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rv(){for(var t=window,e=Uc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uc(t.document)}return e}function Oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function TS(t){var e=Rv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cv(n.ownerDocument.documentElement,n)){if(i!==null&&Oh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=lm(n,s);var o=lm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bS=gr&&"documentMode"in document&&11>=document.documentMode,go=null,Rf=null,Aa=null,Pf=!1;function cm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pf||go==null||go!==Uc(i)||(i=go,"selectionStart"in i&&Oh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Aa&&Ya(Aa,i)||(Aa=i,i=Vc(Rf,"onSelect"),0<i.length&&(e=new Dh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=go)))}function Dl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vo={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionend:Dl("Transition","TransitionEnd")},id={},Pv={};gr&&(Pv=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);function _u(t){if(id[t])return id[t];if(!vo[t])return t;var e=vo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pv)return id[t]=e[n];return t}var Lv=_u("animationend"),Nv=_u("animationiteration"),Dv=_u("animationstart"),Iv=_u("transitionend"),Uv=new Map,um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ts(t,e){Uv.set(t,e),Is(e,[t])}for(var rd=0;rd<um.length;rd++){var sd=um[rd],AS=sd.toLowerCase(),CS=sd[0].toUpperCase()+sd.slice(1);ts(AS,"on"+CS)}ts(Lv,"onAnimationEnd");ts(Nv,"onAnimationIteration");ts(Dv,"onAnimationStart");ts("dblclick","onDoubleClick");ts("focusin","onFocus");ts("focusout","onBlur");ts(Iv,"onTransitionEnd");Oo("onMouseEnter",["mouseout","mouseover"]);Oo("onMouseLeave",["mouseout","mouseover"]);Oo("onPointerEnter",["pointerout","pointerover"]);Oo("onPointerLeave",["pointerout","pointerover"]);Is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Is("onBeforeInput",["compositionend","keypress","textInput","paste"]);Is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function dm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ay(i,e,void 0,t),t.currentTarget=null}function Ov(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;dm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;dm(r,a,c),s=l}}}if(Fc)throw t=Tf,Fc=!1,Tf=null,t}function Gt(t,e){var n=e[Uf];n===void 0&&(n=e[Uf]=new Set);var i=t+"__bubble";n.has(i)||(Fv(e,t,2,!1),n.add(i))}function od(t,e,n){var i=0;e&&(i|=4),Fv(n,t,i,e)}var Il="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[Il]){t[Il]=!0,W0.forEach(function(n){n!=="selectionchange"&&(RS.has(n)||od(n,!1,t),od(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Il]||(e[Il]=!0,od("selectionchange",!1,e))}}function Fv(t,e,n,i){switch(yv(e)){case 1:var r=Gy;break;case 4:r=Wy;break;default:r=Lh}n=r.bind(null,e,n,t),r=void 0,!Ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ad(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=vs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ov(function(){var c=s,u=Ah(n),f=[];e:{var h=Uv.get(t);if(h!==void 0){var p=Dh,v=t;switch(t){case"keypress":if(Ec(n)===0)break e;case"keydown":case"keyup":p=sS;break;case"focusin":v="focus",p=ed;break;case"focusout":v="blur",p=ed;break;case"beforeblur":case"afterblur":p=ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=lS;break;case Lv:case Nv:case Dv:p=Zy;break;case Iv:p=uS;break;case"scroll":p=jy;break;case"wheel":p=fS;break;case"copy":case"cut":case"paste":p=Jy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=tm}var y=(e&4)!==0,g=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var m=c,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=Ga(m,d),S!=null&&y.push(Za(m,S,x)))),g)break;m=m.return}0<y.length&&(h=new p(h,v,null,n,u),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Mf&&(v=n.relatedTarget||n.fromElement)&&(vs(v)||v[vr]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?vs(v):null,v!==null&&(g=Us(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=Qp,S="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=tm,S="onPointerLeave",d="onPointerEnter",m="pointer"),g=p==null?h:xo(p),x=v==null?h:xo(v),h=new y(S,m+"leave",p,n,u),h.target=g,h.relatedTarget=x,S=null,vs(u)===c&&(y=new y(d,m+"enter",v,n,u),y.target=x,y.relatedTarget=g,S=y),g=S,p&&v)t:{for(y=p,d=v,m=0,x=y;x;x=Gs(x))m++;for(x=0,S=d;S;S=Gs(S))x++;for(;0<m-x;)y=Gs(y),m--;for(;0<x-m;)d=Gs(d),x--;for(;m--;){if(y===d||d!==null&&y===d.alternate)break t;y=Gs(y),d=Gs(d)}y=null}else y=null;p!==null&&fm(f,h,p,y,!1),v!==null&&g!==null&&fm(f,g,v,y,!0)}}e:{if(h=c?xo(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var L=_S;else if(rm(h))if(bv)L=wS;else{L=SS;var A=yS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=MS);if(L&&(L=L(t,c))){Tv(f,L,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&vf(h,"number",h.value)}switch(A=c?xo(c):window,t){case"focusin":(rm(A)||A.contentEditable==="true")&&(go=A,Rf=c,Aa=null);break;case"focusout":Aa=Rf=go=null;break;case"mousedown":Pf=!0;break;case"contextmenu":case"mouseup":case"dragend":Pf=!1,cm(f,n,u);break;case"selectionchange":if(bS)break;case"keydown":case"keyup":cm(f,n,u)}var R;if(Uh)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else mo?wv(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Mv&&n.locale!=="ko"&&(mo||F!=="onCompositionStart"?F==="onCompositionEnd"&&mo&&(R=Sv()):(Ur=u,Nh="value"in Ur?Ur.value:Ur.textContent,mo=!0)),A=Vc(c,F),0<A.length&&(F=new em(F,t,null,n,u),f.push({event:F,listeners:A}),R?F.data=R:(R=Ev(n),R!==null&&(F.data=R)))),(R=pS?mS(t,n):gS(t,n))&&(c=Vc(c,"onBeforeInput"),0<c.length&&(u=new em("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=R))}Ov(f,e)})}function Za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ga(t,n),s!=null&&i.unshift(Za(t,s,r)),s=Ga(t,e),s!=null&&i.push(Za(t,s,r))),t=t.return}return i}function Gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ga(n,s),l!=null&&o.unshift(Za(n,l,a))):r||(l=Ga(n,s),l!=null&&o.push(Za(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var PS=/\r\n?/g,LS=/\u0000|\uFFFD/g;function hm(t){return(typeof t=="string"?t:""+t).replace(PS,`
`).replace(LS,"")}function Ul(t,e,n){if(e=hm(e),hm(t)!==e&&n)throw Error(we(425))}function Gc(){}var Lf=null,Nf=null;function Df(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var If=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,DS=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(t){return pm.resolve(null).then(t).catch(IS)}:If;function IS(t){setTimeout(function(){throw t})}function ld(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xa(e)}function Gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qo=Math.random().toString(36).slice(2),Zi="__reactFiber$"+qo,Ka="__reactProps$"+qo,vr="__reactContainer$"+qo,Uf="__reactEvents$"+qo,US="__reactListeners$"+qo,OS="__reactHandles$"+qo;function vs(t){var e=t[Zi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vr]||n[Zi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mm(t);t!==null;){if(n=t[Zi])return n;t=mm(t)}return e}t=n,n=t.parentNode}return null}function pl(t){return t=t[Zi]||t[vr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(we(33))}function yu(t){return t[Ka]||null}var Of=[],_o=-1;function ns(t){return{current:t}}function jt(t){0>_o||(t.current=Of[_o],Of[_o]=null,_o--)}function Ht(t,e){_o++,Of[_o]=t.current,t.current=e}var Qr={},kn=ns(Qr),ii=ns(!1),Ts=Qr;function Fo(t,e){var n=t.type.contextTypes;if(!n)return Qr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ri(t){return t=t.childContextTypes,t!=null}function Wc(){jt(ii),jt(kn)}function gm(t,e,n){if(kn.current!==Qr)throw Error(we(168));Ht(kn,e),Ht(ii,n)}function kv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(we(108,yy(t)||"Unknown",r));return tn({},n,i)}function jc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qr,Ts=kn.current,Ht(kn,t),Ht(ii,ii.current),!0}function vm(t,e,n){var i=t.stateNode;if(!i)throw Error(we(169));n?(t=kv(t,e,Ts),i.__reactInternalMemoizedMergedChildContext=t,jt(ii),jt(kn),Ht(kn,t)):jt(ii),Ht(ii,n)}var dr=null,Su=!1,cd=!1;function zv(t){dr===null?dr=[t]:dr.push(t)}function FS(t){Su=!0,zv(t)}function is(){if(!cd&&dr!==null){cd=!0;var t=0,e=Dt;try{var n=dr;for(Dt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}dr=null,Su=!1}catch(r){throw dr!==null&&(dr=dr.slice(t+1)),uv(Ch,is),r}finally{Dt=e,cd=!1}}return null}var yo=[],So=0,Xc=null,$c=0,_i=[],yi=0,bs=null,fr=1,hr="";function ds(t,e){yo[So++]=$c,yo[So++]=Xc,Xc=t,$c=e}function Bv(t,e,n){_i[yi++]=fr,_i[yi++]=hr,_i[yi++]=bs,bs=t;var i=fr;t=hr;var r=32-Fi(i)-1;i&=~(1<<r),n+=1;var s=32-Fi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,fr=1<<32-Fi(e)+r|n<<r|i,hr=s+t}else fr=1<<s|n<<r|i,hr=t}function Fh(t){t.return!==null&&(ds(t,1),Bv(t,1,0))}function kh(t){for(;t===Xc;)Xc=yo[--So],yo[So]=null,$c=yo[--So],yo[So]=null;for(;t===bs;)bs=_i[--yi],_i[yi]=null,hr=_i[--yi],_i[yi]=null,fr=_i[--yi],_i[yi]=null}var hi=null,fi=null,Yt=!1,Ui=null;function Hv(t,e){var n=wi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hi=t,fi=Gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hi=t,fi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bs!==null?{id:fr,overflow:hr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hi=t,fi=null,!0):!1;default:return!1}}function Ff(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kf(t){if(Yt){var e=fi;if(e){var n=e;if(!xm(t,e)){if(Ff(t))throw Error(we(418));e=Gr(n.nextSibling);var i=hi;e&&xm(t,e)?Hv(i,n):(t.flags=t.flags&-4097|2,Yt=!1,hi=t)}}else{if(Ff(t))throw Error(we(418));t.flags=t.flags&-4097|2,Yt=!1,hi=t}}}function _m(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hi=t}function Ol(t){if(t!==hi)return!1;if(!Yt)return _m(t),Yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Df(t.type,t.memoizedProps)),e&&(e=fi)){if(Ff(t))throw Vv(),Error(we(418));for(;e;)Hv(t,e),e=Gr(e.nextSibling)}if(_m(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(we(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fi=Gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fi=null}}else fi=hi?Gr(t.stateNode.nextSibling):null;return!0}function Vv(){for(var t=fi;t;)t=Gr(t.nextSibling)}function ko(){fi=hi=null,Yt=!1}function zh(t){Ui===null?Ui=[t]:Ui.push(t)}var kS=Sr.ReactCurrentBatchConfig;function aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(we(309));var i=n.stateNode}if(!i)throw Error(we(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(we(284));if(!n._owner)throw Error(we(290,t))}return t}function Fl(t,e){throw t=Object.prototype.toString.call(e),Error(we(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ym(t){var e=t._init;return e(t._payload)}function Gv(t){function e(d,m){if(t){var x=d.deletions;x===null?(d.deletions=[m],d.flags|=16):x.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=$r(d,m),d.index=0,d.sibling=null,d}function s(d,m,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<m?(d.flags|=2,m):x):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,m,x,S){return m===null||m.tag!==6?(m=gd(x,d.mode,S),m.return=d,m):(m=r(m,x),m.return=d,m)}function l(d,m,x,S){var L=x.type;return L===po?u(d,m,x.props.children,S,x.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Pr&&ym(L)===m.type)?(S=r(m,x.props),S.ref=aa(d,m,x),S.return=d,S):(S=Lc(x.type,x.key,x.props,null,d.mode,S),S.ref=aa(d,m,x),S.return=d,S)}function c(d,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=vd(x,d.mode,S),m.return=d,m):(m=r(m,x.children||[]),m.return=d,m)}function u(d,m,x,S,L){return m===null||m.tag!==7?(m=Ss(x,d.mode,S,L),m.return=d,m):(m=r(m,x),m.return=d,m)}function f(d,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=gd(""+m,d.mode,x),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case bl:return x=Lc(m.type,m.key,m.props,null,d.mode,x),x.ref=aa(d,null,m),x.return=d,x;case ho:return m=vd(m,d.mode,x),m.return=d,m;case Pr:var S=m._init;return f(d,S(m._payload),x)}if(ya(m)||na(m))return m=Ss(m,d.mode,x,null),m.return=d,m;Fl(d,m)}return null}function h(d,m,x,S){var L=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:a(d,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case bl:return x.key===L?l(d,m,x,S):null;case ho:return x.key===L?c(d,m,x,S):null;case Pr:return L=x._init,h(d,m,L(x._payload),S)}if(ya(x)||na(x))return L!==null?null:u(d,m,x,S,null);Fl(d,x)}return null}function p(d,m,x,S,L){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,a(m,d,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case bl:return d=d.get(S.key===null?x:S.key)||null,l(m,d,S,L);case ho:return d=d.get(S.key===null?x:S.key)||null,c(m,d,S,L);case Pr:var A=S._init;return p(d,m,x,A(S._payload),L)}if(ya(S)||na(S))return d=d.get(x)||null,u(m,d,S,L,null);Fl(m,S)}return null}function v(d,m,x,S){for(var L=null,A=null,R=m,F=m=0,E=null;R!==null&&F<x.length;F++){R.index>F?(E=R,R=null):E=R.sibling;var T=h(d,R,x[F],S);if(T===null){R===null&&(R=E);break}t&&R&&T.alternate===null&&e(d,R),m=s(T,m,F),A===null?L=T:A.sibling=T,A=T,R=E}if(F===x.length)return n(d,R),Yt&&ds(d,F),L;if(R===null){for(;F<x.length;F++)R=f(d,x[F],S),R!==null&&(m=s(R,m,F),A===null?L=R:A.sibling=R,A=R);return Yt&&ds(d,F),L}for(R=i(d,R);F<x.length;F++)E=p(R,d,F,x[F],S),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?F:E.key),m=s(E,m,F),A===null?L=E:A.sibling=E,A=E);return t&&R.forEach(function(V){return e(d,V)}),Yt&&ds(d,F),L}function y(d,m,x,S){var L=na(x);if(typeof L!="function")throw Error(we(150));if(x=L.call(x),x==null)throw Error(we(151));for(var A=L=null,R=m,F=m=0,E=null,T=x.next();R!==null&&!T.done;F++,T=x.next()){R.index>F?(E=R,R=null):E=R.sibling;var V=h(d,R,T.value,S);if(V===null){R===null&&(R=E);break}t&&R&&V.alternate===null&&e(d,R),m=s(V,m,F),A===null?L=V:A.sibling=V,A=V,R=E}if(T.done)return n(d,R),Yt&&ds(d,F),L;if(R===null){for(;!T.done;F++,T=x.next())T=f(d,T.value,S),T!==null&&(m=s(T,m,F),A===null?L=T:A.sibling=T,A=T);return Yt&&ds(d,F),L}for(R=i(d,R);!T.done;F++,T=x.next())T=p(R,d,F,T.value,S),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?F:T.key),m=s(T,m,F),A===null?L=T:A.sibling=T,A=T);return t&&R.forEach(function(X){return e(d,X)}),Yt&&ds(d,F),L}function g(d,m,x,S){if(typeof x=="object"&&x!==null&&x.type===po&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case bl:e:{for(var L=x.key,A=m;A!==null;){if(A.key===L){if(L=x.type,L===po){if(A.tag===7){n(d,A.sibling),m=r(A,x.props.children),m.return=d,d=m;break e}}else if(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Pr&&ym(L)===A.type){n(d,A.sibling),m=r(A,x.props),m.ref=aa(d,A,x),m.return=d,d=m;break e}n(d,A);break}else e(d,A);A=A.sibling}x.type===po?(m=Ss(x.props.children,d.mode,S,x.key),m.return=d,d=m):(S=Lc(x.type,x.key,x.props,null,d.mode,S),S.ref=aa(d,m,x),S.return=d,d=S)}return o(d);case ho:e:{for(A=x.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(d,m.sibling),m=r(m,x.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=vd(x,d.mode,S),m.return=d,d=m}return o(d);case Pr:return A=x._init,g(d,m,A(x._payload),S)}if(ya(x))return v(d,m,x,S);if(na(x))return y(d,m,x,S);Fl(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,x),m.return=d,d=m):(n(d,m),m=gd(x,d.mode,S),m.return=d,d=m),o(d)):n(d,m)}return g}var zo=Gv(!0),Wv=Gv(!1),Yc=ns(null),qc=null,Mo=null,Bh=null;function Hh(){Bh=Mo=qc=null}function Vh(t){var e=Yc.current;jt(Yc),t._currentValue=e}function zf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function No(t,e){qc=t,Bh=Mo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ni=!0),t.firstContext=null)}function bi(t){var e=t._currentValue;if(Bh!==t)if(t={context:t,memoizedValue:e,next:null},Mo===null){if(qc===null)throw Error(we(308));Mo=t,qc.dependencies={lanes:0,firstContext:t}}else Mo=Mo.next=t;return e}var xs=null;function Gh(t){xs===null?xs=[t]:xs.push(t)}function jv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Gh(e)):(n.next=r.next,r.next=n),e.interleaved=n,xr(t,i)}function xr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Lr=!1;function Wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xr(t,n)}return r=i.interleaved,r===null?(e.next=e,Gh(i)):(e.next=r.next,r.next=e),i.interleaved=e,xr(t,n)}function Tc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rh(t,n)}}function Sm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zc(t,e,n,i){var r=t.updateQueue;Lr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=tn({},f,h);break e;case 2:Lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cs|=o,t.lanes=o,t.memoizedState=f}}function Mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(we(191,r));r.call(i)}}}var ml={},er=ns(ml),Ja=ns(ml),Qa=ns(ml);function _s(t){if(t===ml)throw Error(we(174));return t}function jh(t,e){switch(Ht(Qa,e),Ht(Ja,t),Ht(er,ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_f(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_f(e,t)}jt(er),Ht(er,e)}function Bo(){jt(er),jt(Ja),jt(Qa)}function $v(t){_s(Qa.current);var e=_s(er.current),n=_f(e,t.type);e!==n&&(Ht(Ja,t),Ht(er,n))}function Xh(t){Ja.current===t&&(jt(er),jt(Ja))}var Kt=ns(0);function Kc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ud=[];function $h(){for(var t=0;t<ud.length;t++)ud[t]._workInProgressVersionPrimary=null;ud.length=0}var bc=Sr.ReactCurrentDispatcher,dd=Sr.ReactCurrentBatchConfig,As=0,Qt=null,hn=null,Sn=null,Jc=!1,Ca=!1,el=0,zS=0;function Nn(){throw Error(we(321))}function Yh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zi(t[n],e[n]))return!1;return!0}function qh(t,e,n,i,r,s){if(As=s,Qt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bc.current=t===null||t.memoizedState===null?GS:WS,t=n(i,r),Ca){s=0;do{if(Ca=!1,el=0,25<=s)throw Error(we(301));s+=1,Sn=hn=null,e.updateQueue=null,bc.current=jS,t=n(i,r)}while(Ca)}if(bc.current=Qc,e=hn!==null&&hn.next!==null,As=0,Sn=hn=Qt=null,Jc=!1,e)throw Error(we(300));return t}function Zh(){var t=el!==0;return el=0,t}function Yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?Qt.memoizedState=Sn=t:Sn=Sn.next=t,Sn}function Ai(){if(hn===null){var t=Qt.alternate;t=t!==null?t.memoizedState:null}else t=hn.next;var e=Sn===null?Qt.memoizedState:Sn.next;if(e!==null)Sn=e,hn=t;else{if(t===null)throw Error(we(310));hn=t,t={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},Sn===null?Qt.memoizedState=Sn=t:Sn=Sn.next=t}return Sn}function tl(t,e){return typeof e=="function"?e(t):e}function fd(t){var e=Ai(),n=e.queue;if(n===null)throw Error(we(311));n.lastRenderedReducer=t;var i=hn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((As&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Qt.lanes|=u,Cs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,zi(i,e.memoizedState)||(ni=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Qt.lanes|=s,Cs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hd(t){var e=Ai(),n=e.queue;if(n===null)throw Error(we(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);zi(s,e.memoizedState)||(ni=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Yv(){}function qv(t,e){var n=Qt,i=Ai(),r=e(),s=!zi(i.memoizedState,r);if(s&&(i.memoizedState=r,ni=!0),i=i.queue,Kh(Jv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Sn!==null&&Sn.memoizedState.tag&1){if(n.flags|=2048,nl(9,Kv.bind(null,n,i,r,e),void 0,null),Mn===null)throw Error(we(349));As&30||Zv(n,e,r)}return r}function Zv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Qt.updateQueue,e===null?(e={lastEffect:null,stores:null},Qt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kv(t,e,n,i){e.value=n,e.getSnapshot=i,Qv(e)&&ex(t)}function Jv(t,e,n){return n(function(){Qv(e)&&ex(t)})}function Qv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zi(t,n)}catch{return!0}}function ex(t){var e=xr(t,1);e!==null&&ki(e,t,1,-1)}function wm(t){var e=Yi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:t},e.queue=t,t=t.dispatch=VS.bind(null,Qt,t),[e.memoizedState,t]}function nl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Qt.updateQueue,e===null?(e={lastEffect:null,stores:null},Qt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function tx(){return Ai().memoizedState}function Ac(t,e,n,i){var r=Yi();Qt.flags|=t,r.memoizedState=nl(1|e,n,void 0,i===void 0?null:i)}function Mu(t,e,n,i){var r=Ai();i=i===void 0?null:i;var s=void 0;if(hn!==null){var o=hn.memoizedState;if(s=o.destroy,i!==null&&Yh(i,o.deps)){r.memoizedState=nl(e,n,s,i);return}}Qt.flags|=t,r.memoizedState=nl(1|e,n,s,i)}function Em(t,e){return Ac(8390656,8,t,e)}function Kh(t,e){return Mu(2048,8,t,e)}function nx(t,e){return Mu(4,2,t,e)}function ix(t,e){return Mu(4,4,t,e)}function rx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sx(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4,4,rx.bind(null,e,t),n)}function Jh(){}function ox(t,e){var n=Ai();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ax(t,e){var n=Ai();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function lx(t,e,n){return As&21?(zi(n,e)||(n=hv(),Qt.lanes|=n,Cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ni=!0),t.memoizedState=n)}function BS(t,e){var n=Dt;Dt=n!==0&&4>n?n:4,t(!0);var i=dd.transition;dd.transition={};try{t(!1),e()}finally{Dt=n,dd.transition=i}}function cx(){return Ai().memoizedState}function HS(t,e,n){var i=Xr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ux(t))dx(e,n);else if(n=jv(t,e,n,i),n!==null){var r=Xn();ki(n,t,i,r),fx(n,e,i)}}function VS(t,e,n){var i=Xr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ux(t))dx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,zi(a,o)){var l=e.interleaved;l===null?(r.next=r,Gh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=jv(t,e,r,i),n!==null&&(r=Xn(),ki(n,t,i,r),fx(n,e,i))}}function ux(t){var e=t.alternate;return t===Qt||e!==null&&e===Qt}function dx(t,e){Ca=Jc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rh(t,n)}}var Qc={readContext:bi,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useInsertionEffect:Nn,useLayoutEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useMutableSource:Nn,useSyncExternalStore:Nn,useId:Nn,unstable_isNewReconciler:!1},GS={readContext:bi,useCallback:function(t,e){return Yi().memoizedState=[t,e===void 0?null:e],t},useContext:bi,useEffect:Em,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ac(4194308,4,rx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ac(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ac(4,2,t,e)},useMemo:function(t,e){var n=Yi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Yi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=HS.bind(null,Qt,t),[i.memoizedState,t]},useRef:function(t){var e=Yi();return t={current:t},e.memoizedState=t},useState:wm,useDebugValue:Jh,useDeferredValue:function(t){return Yi().memoizedState=t},useTransition:function(){var t=wm(!1),e=t[0];return t=BS.bind(null,t[1]),Yi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Qt,r=Yi();if(Yt){if(n===void 0)throw Error(we(407));n=n()}else{if(n=e(),Mn===null)throw Error(we(349));As&30||Zv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Em(Jv.bind(null,i,s,t),[t]),i.flags|=2048,nl(9,Kv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Yi(),e=Mn.identifierPrefix;if(Yt){var n=hr,i=fr;n=(i&~(1<<32-Fi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=el++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WS={readContext:bi,useCallback:ox,useContext:bi,useEffect:Kh,useImperativeHandle:sx,useInsertionEffect:nx,useLayoutEffect:ix,useMemo:ax,useReducer:fd,useRef:tx,useState:function(){return fd(tl)},useDebugValue:Jh,useDeferredValue:function(t){var e=Ai();return lx(e,hn.memoizedState,t)},useTransition:function(){var t=fd(tl)[0],e=Ai().memoizedState;return[t,e]},useMutableSource:Yv,useSyncExternalStore:qv,useId:cx,unstable_isNewReconciler:!1},jS={readContext:bi,useCallback:ox,useContext:bi,useEffect:Kh,useImperativeHandle:sx,useInsertionEffect:nx,useLayoutEffect:ix,useMemo:ax,useReducer:hd,useRef:tx,useState:function(){return hd(tl)},useDebugValue:Jh,useDeferredValue:function(t){var e=Ai();return hn===null?e.memoizedState=t:lx(e,hn.memoizedState,t)},useTransition:function(){var t=hd(tl)[0],e=Ai().memoizedState;return[t,e]},useMutableSource:Yv,useSyncExternalStore:qv,useId:cx,unstable_isNewReconciler:!1};function Di(t,e){if(t&&t.defaultProps){e=tn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:tn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={isMounted:function(t){return(t=t._reactInternals)?Us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xn(),r=Xr(t),s=mr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,r),e!==null&&(ki(e,t,r,i),Tc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xn(),r=Xr(t),s=mr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,r),e!==null&&(ki(e,t,r,i),Tc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xn(),i=Xr(t),r=mr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Wr(t,r,i),e!==null&&(ki(e,t,i,n),Tc(e,t,i))}};function Tm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ya(n,i)||!Ya(r,s):!0}function hx(t,e,n){var i=!1,r=Qr,s=e.contextType;return typeof s=="object"&&s!==null?s=bi(s):(r=ri(e)?Ts:kn.current,i=e.contextTypes,s=(i=i!=null)?Fo(t,r):Qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function bm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function Hf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Wh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bi(s):(s=ri(e)?Ts:kn.current,r.context=Fo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wu.enqueueReplaceState(r,r.state,null),Zc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ho(t,e){try{var n="",i=e;do n+=_y(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XS=typeof WeakMap=="function"?WeakMap:Map;function px(t,e,n){n=mr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){tu||(tu=!0,Jf=i),Vf(t,e)},n}function mx(t,e,n){n=mr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Vf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vf(t,e),typeof i!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Am(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new XS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=oM.bind(null,t,e,n),e.then(t,t))}function Cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mr(-1,1),e.tag=2,Wr(n,e,1))),n.lanes|=1),t)}var $S=Sr.ReactCurrentOwner,ni=!1;function Gn(t,e,n,i){e.child=t===null?Wv(e,null,n,i):zo(e,t.child,n,i)}function Pm(t,e,n,i,r){n=n.render;var s=e.ref;return No(e,r),i=qh(t,e,n,i,s,r),n=Zh(),t!==null&&!ni?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_r(t,e,r)):(Yt&&n&&Fh(e),e.flags|=1,Gn(t,e,i,r),e.child)}function Lm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!op(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gx(t,e,s,i,r)):(t=Lc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ya,n(o,i)&&t.ref===e.ref)return _r(t,e,r)}return e.flags|=1,t=$r(s,i),t.ref=e.ref,t.return=e,e.child=t}function gx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ya(s,i)&&t.ref===e.ref)if(ni=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ni=!0);else return e.lanes=t.lanes,_r(t,e,r)}return Gf(t,e,n,i,r)}function vx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Eo,ci),ci|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ht(Eo,ci),ci|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ht(Eo,ci),ci|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ht(Eo,ci),ci|=i;return Gn(t,e,r,n),e.child}function xx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gf(t,e,n,i,r){var s=ri(n)?Ts:kn.current;return s=Fo(e,s),No(e,r),n=qh(t,e,n,i,s,r),i=Zh(),t!==null&&!ni?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_r(t,e,r)):(Yt&&i&&Fh(e),e.flags|=1,Gn(t,e,n,r),e.child)}function Nm(t,e,n,i,r){if(ri(n)){var s=!0;jc(e)}else s=!1;if(No(e,r),e.stateNode===null)Cc(t,e),hx(e,n,i),Hf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=bi(c):(c=ri(n)?Ts:kn.current,c=Fo(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&bm(e,o,i,c),Lr=!1;var h=e.memoizedState;o.state=h,Zc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ii.current||Lr?(typeof u=="function"&&(Bf(e,n,u,i),l=e.memoizedState),(a=Lr||Tm(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Xv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Di(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bi(l):(l=ri(n)?Ts:kn.current,l=Fo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&bm(e,o,i,l),Lr=!1,h=e.memoizedState,o.state=h,Zc(e,i,o,r);var v=e.memoizedState;a!==f||h!==v||ii.current||Lr?(typeof p=="function"&&(Bf(e,n,p,i),v=e.memoizedState),(c=Lr||Tm(e,n,c,i,h,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Wf(t,e,n,i,s,r)}function Wf(t,e,n,i,r,s){xx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&vm(e,n,!1),_r(t,e,s);i=e.stateNode,$S.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zo(e,t.child,null,s),e.child=zo(e,null,a,s)):Gn(t,e,a,s),e.memoizedState=i.state,r&&vm(e,n,!0),e.child}function _x(t){var e=t.stateNode;e.pendingContext?gm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gm(t,e.context,!1),jh(t,e.containerInfo)}function Dm(t,e,n,i,r){return ko(),zh(r),e.flags|=256,Gn(t,e,n,i),e.child}var jf={dehydrated:null,treeContext:null,retryLane:0};function Xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function yx(t,e,n){var i=e.pendingProps,r=Kt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ht(Kt,r&1),t===null)return kf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bu(o,i,0,null),t=Ss(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xf(n),e.memoizedState=jf,t):Qh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return YS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$r(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=$r(a,s):(s=Ss(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jf,i}return s=t.child,t=s.sibling,i=$r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Qh(t,e){return e=bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function kl(t,e,n,i){return i!==null&&zh(i),zo(e,t.child,null,n),t=Qh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=pd(Error(we(422))),kl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=bu({mode:"visible",children:i.children},r,0,null),s=Ss(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zo(e,t.child,null,o),e.child.memoizedState=Xf(o),e.memoizedState=jf,s);if(!(e.mode&1))return kl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(we(419)),i=pd(s,i,void 0),kl(t,e,o,i)}if(a=(o&t.childLanes)!==0,ni||a){if(i=Mn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xr(t,r),ki(i,t,r,-1))}return sp(),i=pd(Error(we(421))),kl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=aM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fi=Gr(r.nextSibling),hi=e,Yt=!0,Ui=null,t!==null&&(_i[yi++]=fr,_i[yi++]=hr,_i[yi++]=bs,fr=t.id,hr=t.overflow,bs=e),e=Qh(e,i.children),e.flags|=4096,e)}function Im(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),zf(t.return,e,n)}function md(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Sx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gn(t,e,i.children,n),i=Kt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Im(t,n,e);else if(t.tag===19)Im(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ht(Kt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),md(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}md(e,!0,n,null,s);break;case"together":md(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _r(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(we(153));if(e.child!==null){for(t=e.child,n=$r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qS(t,e,n){switch(e.tag){case 3:_x(e),ko();break;case 5:$v(e);break;case 1:ri(e.type)&&jc(e);break;case 4:jh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ht(Yc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ht(Kt,Kt.current&1),e.flags|=128,null):n&e.child.childLanes?yx(t,e,n):(Ht(Kt,Kt.current&1),t=_r(t,e,n),t!==null?t.sibling:null);Ht(Kt,Kt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Sx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ht(Kt,Kt.current),i)break;return null;case 22:case 23:return e.lanes=0,vx(t,e,n)}return _r(t,e,n)}var Mx,$f,wx,Ex;Mx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$f=function(){};wx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_s(er.current);var s=null;switch(n){case"input":r=mf(t,r),i=mf(t,i),s=[];break;case"select":r=tn({},r,{value:void 0}),i=tn({},i,{value:void 0}),s=[];break;case"textarea":r=xf(t,r),i=xf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Gc)}yf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ha.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ex=function(t,e,n,i){n!==i&&(e.flags|=4)};function la(t,e){if(!Yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Dn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ZS(t,e,n){var i=e.pendingProps;switch(kh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(e),null;case 1:return ri(e.type)&&Wc(),Dn(e),null;case 3:return i=e.stateNode,Bo(),jt(ii),jt(kn),$h(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ui!==null&&(th(Ui),Ui=null))),$f(t,e),Dn(e),null;case 5:Xh(e);var r=_s(Qa.current);if(n=e.type,t!==null&&e.stateNode!=null)wx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(we(166));return Dn(e),null}if(t=_s(er.current),Ol(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zi]=e,i[Ka]=s,t=(e.mode&1)!==0,n){case"dialog":Gt("cancel",i),Gt("close",i);break;case"iframe":case"object":case"embed":Gt("load",i);break;case"video":case"audio":for(r=0;r<Ma.length;r++)Gt(Ma[r],i);break;case"source":Gt("error",i);break;case"img":case"image":case"link":Gt("error",i),Gt("load",i);break;case"details":Gt("toggle",i);break;case"input":Gp(i,s),Gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Gt("invalid",i);break;case"textarea":jp(i,s),Gt("invalid",i)}yf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ul(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ul(i.textContent,a,t),r=["children",""+a]):Ha.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Gt("scroll",i)}switch(n){case"input":Al(i),Wp(i,s,!0);break;case"textarea":Al(i),Xp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Gc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Zi]=e,t[Ka]=i,Mx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sf(n,i),n){case"dialog":Gt("cancel",t),Gt("close",t),r=i;break;case"iframe":case"object":case"embed":Gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ma.length;r++)Gt(Ma[r],t);r=i;break;case"source":Gt("error",t),r=i;break;case"img":case"image":case"link":Gt("error",t),Gt("load",t),r=i;break;case"details":Gt("toggle",t),r=i;break;case"input":Gp(t,i),r=mf(t,i),Gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=tn({},i,{value:void 0}),Gt("invalid",t);break;case"textarea":jp(t,i),r=xf(t,i),Gt("invalid",t);break;default:r=i}yf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Q0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Va(t,l):typeof l=="number"&&Va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Gt("scroll",t):l!=null&&wh(t,s,l,o))}switch(n){case"input":Al(t),Wp(t,i,!1);break;case"textarea":Al(t),Xp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Jr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Co(t,!!i.multiple,s,!1):i.defaultValue!=null&&Co(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Gc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dn(e),null;case 6:if(t&&e.stateNode!=null)Ex(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(we(166));if(n=_s(Qa.current),_s(er.current),Ol(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zi]=e,(s=i.nodeValue!==n)&&(t=hi,t!==null))switch(t.tag){case 3:Ul(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ul(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zi]=e,e.stateNode=i}return Dn(e),null;case 13:if(jt(Kt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Yt&&fi!==null&&e.mode&1&&!(e.flags&128))Vv(),ko(),e.flags|=98560,s=!1;else if(s=Ol(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(we(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(we(317));s[Zi]=e}else ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dn(e),s=!1}else Ui!==null&&(th(Ui),Ui=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Kt.current&1?pn===0&&(pn=3):sp())),e.updateQueue!==null&&(e.flags|=4),Dn(e),null);case 4:return Bo(),$f(t,e),t===null&&qa(e.stateNode.containerInfo),Dn(e),null;case 10:return Vh(e.type._context),Dn(e),null;case 17:return ri(e.type)&&Wc(),Dn(e),null;case 19:if(jt(Kt),s=e.memoizedState,s===null)return Dn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)la(s,!1);else{if(pn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kc(t),o!==null){for(e.flags|=128,la(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ht(Kt,Kt.current&1|2),e.child}t=t.sibling}s.tail!==null&&rn()>Vo&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304)}else{if(!i)if(t=Kc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Yt)return Dn(e),null}else 2*rn()-s.renderingStartTime>Vo&&n!==1073741824&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=rn(),e.sibling=null,n=Kt.current,Ht(Kt,i?n&1|2:n&1),e):(Dn(e),null);case 22:case 23:return rp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ci&1073741824&&(Dn(e),e.subtreeFlags&6&&(e.flags|=8192)):Dn(e),null;case 24:return null;case 25:return null}throw Error(we(156,e.tag))}function KS(t,e){switch(kh(e),e.tag){case 1:return ri(e.type)&&Wc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bo(),jt(ii),jt(kn),$h(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xh(e),null;case 13:if(jt(Kt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(we(340));ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return jt(Kt),null;case 4:return Bo(),null;case 10:return Vh(e.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var zl=!1,Fn=!1,JS=typeof WeakSet=="function"?WeakSet:Set,We=null;function wo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){nn(t,e,i)}else n.current=null}function Yf(t,e,n){try{n()}catch(i){nn(t,e,i)}}var Um=!1;function QS(t,e){if(Lf=Bc,t=Rv(),Oh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nf={focusedElem:t,selectionRange:n},Bc=!1,We=e;We!==null;)if(e=We,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,We=t;else for(;We!==null;){e=We;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,g=v.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Di(e.type,y),g);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(we(163))}}catch(S){nn(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,We=t;break}We=e.return}return v=Um,Um=!1,v}function Ra(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yf(e,n,s)}r=r.next}while(r!==i)}}function Eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tx(t){var e=t.alternate;e!==null&&(t.alternate=null,Tx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zi],delete e[Ka],delete e[Uf],delete e[US],delete e[OS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bx(t){return t.tag===5||t.tag===3||t.tag===4}function Om(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gc));else if(i!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}function Kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Kf(t,e,n),t=t.sibling;t!==null;)Kf(t,e,n),t=t.sibling}var Cn=null,Ii=!1;function Er(t,e,n){for(n=n.child;n!==null;)Ax(t,e,n),n=n.sibling}function Ax(t,e,n){if(Qi&&typeof Qi.onCommitFiberUnmount=="function")try{Qi.onCommitFiberUnmount(gu,n)}catch{}switch(n.tag){case 5:Fn||wo(n,e);case 6:var i=Cn,r=Ii;Cn=null,Er(t,e,n),Cn=i,Ii=r,Cn!==null&&(Ii?(t=Cn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Cn.removeChild(n.stateNode));break;case 18:Cn!==null&&(Ii?(t=Cn,n=n.stateNode,t.nodeType===8?ld(t.parentNode,n):t.nodeType===1&&ld(t,n),Xa(t)):ld(Cn,n.stateNode));break;case 4:i=Cn,r=Ii,Cn=n.stateNode.containerInfo,Ii=!0,Er(t,e,n),Cn=i,Ii=r;break;case 0:case 11:case 14:case 15:if(!Fn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yf(n,e,o),r=r.next}while(r!==i)}Er(t,e,n);break;case 1:if(!Fn&&(wo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){nn(n,e,a)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(Fn=(i=Fn)||n.memoizedState!==null,Er(t,e,n),Fn=i):Er(t,e,n);break;default:Er(t,e,n)}}function Fm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new JS),e.forEach(function(i){var r=lM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ri(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Cn=a.stateNode,Ii=!1;break e;case 3:Cn=a.stateNode.containerInfo,Ii=!0;break e;case 4:Cn=a.stateNode.containerInfo,Ii=!0;break e}a=a.return}if(Cn===null)throw Error(we(160));Ax(s,o,r),Cn=null,Ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){nn(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cx(e,t),e=e.sibling}function Cx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ri(e,t),$i(t),i&4){try{Ra(3,t,t.return),Eu(3,t)}catch(y){nn(t,t.return,y)}try{Ra(5,t,t.return)}catch(y){nn(t,t.return,y)}}break;case 1:Ri(e,t),$i(t),i&512&&n!==null&&wo(n,n.return);break;case 5:if(Ri(e,t),$i(t),i&512&&n!==null&&wo(n,n.return),t.flags&32){var r=t.stateNode;try{Va(r,"")}catch(y){nn(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Z0(r,s),Sf(a,o);var c=Sf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?tv(r,f):u==="dangerouslySetInnerHTML"?Q0(r,f):u==="children"?Va(r,f):wh(r,u,f,c)}switch(a){case"input":gf(r,s);break;case"textarea":K0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Co(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Co(r,!!s.multiple,s.defaultValue,!0):Co(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ka]=s}catch(y){nn(t,t.return,y)}}break;case 6:if(Ri(e,t),$i(t),i&4){if(t.stateNode===null)throw Error(we(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){nn(t,t.return,y)}}break;case 3:if(Ri(e,t),$i(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xa(e.containerInfo)}catch(y){nn(t,t.return,y)}break;case 4:Ri(e,t),$i(t);break;case 13:Ri(e,t),$i(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(np=rn())),i&4&&Fm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Fn=(c=Fn)||u,Ri(e,t),Fn=c):Ri(e,t),$i(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(We=t,u=t.child;u!==null;){for(f=We=u;We!==null;){switch(h=We,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ra(4,h,h.return);break;case 1:wo(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){nn(i,n,y)}}break;case 5:wo(h,h.return);break;case 22:if(h.memoizedState!==null){zm(f);continue}}p!==null?(p.return=h,We=p):zm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ev("display",o))}catch(y){nn(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){nn(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ri(e,t),$i(t),i&4&&Fm(t);break;case 21:break;default:Ri(e,t),$i(t)}}function $i(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bx(n)){var i=n;break e}n=n.return}throw Error(we(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Va(r,""),i.flags&=-33);var s=Om(t);Kf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Om(t);Zf(t,a,o);break;default:throw Error(we(161))}}catch(l){nn(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eM(t,e,n){We=t,Rx(t)}function Rx(t,e,n){for(var i=(t.mode&1)!==0;We!==null;){var r=We,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||zl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Fn;a=zl;var c=Fn;if(zl=o,(Fn=l)&&!c)for(We=r;We!==null;)o=We,l=o.child,o.tag===22&&o.memoizedState!==null?Bm(r):l!==null?(l.return=o,We=l):Bm(r);for(;s!==null;)We=s,Rx(s),s=s.sibling;We=r,zl=a,Fn=c}km(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,We=s):km(t)}}function km(t){for(;We!==null;){var e=We;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Fn||Eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Fn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Di(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Xa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(we(163))}Fn||e.flags&512&&qf(e)}catch(h){nn(e,e.return,h)}}if(e===t){We=null;break}if(n=e.sibling,n!==null){n.return=e.return,We=n;break}We=e.return}}function zm(t){for(;We!==null;){var e=We;if(e===t){We=null;break}var n=e.sibling;if(n!==null){n.return=e.return,We=n;break}We=e.return}}function Bm(t){for(;We!==null;){var e=We;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eu(4,e)}catch(l){nn(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){nn(e,r,l)}}var s=e.return;try{qf(e)}catch(l){nn(e,s,l)}break;case 5:var o=e.return;try{qf(e)}catch(l){nn(e,o,l)}}}catch(l){nn(e,e.return,l)}if(e===t){We=null;break}var a=e.sibling;if(a!==null){a.return=e.return,We=a;break}We=e.return}}var tM=Math.ceil,eu=Sr.ReactCurrentDispatcher,ep=Sr.ReactCurrentOwner,Ei=Sr.ReactCurrentBatchConfig,Lt=0,Mn=null,un=null,Pn=0,ci=0,Eo=ns(0),pn=0,il=null,Cs=0,Tu=0,tp=0,Pa=null,ei=null,np=0,Vo=1/0,ur=null,tu=!1,Jf=null,jr=null,Bl=!1,Or=null,nu=0,La=0,Qf=null,Rc=-1,Pc=0;function Xn(){return Lt&6?rn():Rc!==-1?Rc:Rc=rn()}function Xr(t){return t.mode&1?Lt&2&&Pn!==0?Pn&-Pn:kS.transition!==null?(Pc===0&&(Pc=hv()),Pc):(t=Dt,t!==0||(t=window.event,t=t===void 0?16:yv(t.type)),t):1}function ki(t,e,n,i){if(50<La)throw La=0,Qf=null,Error(we(185));fl(t,n,i),(!(Lt&2)||t!==Mn)&&(t===Mn&&(!(Lt&2)&&(Tu|=n),pn===4&&Ir(t,Pn)),si(t,i),n===1&&Lt===0&&!(e.mode&1)&&(Vo=rn()+500,Su&&is()))}function si(t,e){var n=t.callbackNode;ky(t,e);var i=zc(t,t===Mn?Pn:0);if(i===0)n!==null&&qp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qp(n),e===1)t.tag===0?FS(Hm.bind(null,t)):zv(Hm.bind(null,t)),DS(function(){!(Lt&6)&&is()}),n=null;else{switch(pv(i)){case 1:n=Ch;break;case 4:n=dv;break;case 16:n=kc;break;case 536870912:n=fv;break;default:n=kc}n=Fx(n,Px.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Px(t,e){if(Rc=-1,Pc=0,Lt&6)throw Error(we(327));var n=t.callbackNode;if(Do()&&t.callbackNode!==n)return null;var i=zc(t,t===Mn?Pn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=iu(t,i);else{e=i;var r=Lt;Lt|=2;var s=Nx();(Mn!==t||Pn!==e)&&(ur=null,Vo=rn()+500,ys(t,e));do try{rM();break}catch(a){Lx(t,a)}while(!0);Hh(),eu.current=s,Lt=r,un!==null?e=0:(Mn=null,Pn=0,e=pn)}if(e!==0){if(e===2&&(r=bf(t),r!==0&&(i=r,e=eh(t,r))),e===1)throw n=il,ys(t,0),Ir(t,i),si(t,rn()),n;if(e===6)Ir(t,i);else{if(r=t.current.alternate,!(i&30)&&!nM(r)&&(e=iu(t,i),e===2&&(s=bf(t),s!==0&&(i=s,e=eh(t,s))),e===1))throw n=il,ys(t,0),Ir(t,i),si(t,rn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(we(345));case 2:fs(t,ei,ur);break;case 3:if(Ir(t,i),(i&130023424)===i&&(e=np+500-rn(),10<e)){if(zc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=If(fs.bind(null,t,ei,ur),e);break}fs(t,ei,ur);break;case 4:if(Ir(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Fi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=rn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tM(i/1960))-i,10<i){t.timeoutHandle=If(fs.bind(null,t,ei,ur),i);break}fs(t,ei,ur);break;case 5:fs(t,ei,ur);break;default:throw Error(we(329))}}}return si(t,rn()),t.callbackNode===n?Px.bind(null,t):null}function eh(t,e){var n=Pa;return t.current.memoizedState.isDehydrated&&(ys(t,e).flags|=256),t=iu(t,e),t!==2&&(e=ei,ei=n,e!==null&&th(e)),t}function th(t){ei===null?ei=t:ei.push.apply(ei,t)}function nM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ir(t,e){for(e&=~tp,e&=~Tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fi(e),i=1<<n;t[n]=-1,e&=~i}}function Hm(t){if(Lt&6)throw Error(we(327));Do();var e=zc(t,0);if(!(e&1))return si(t,rn()),null;var n=iu(t,e);if(t.tag!==0&&n===2){var i=bf(t);i!==0&&(e=i,n=eh(t,i))}if(n===1)throw n=il,ys(t,0),Ir(t,e),si(t,rn()),n;if(n===6)throw Error(we(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fs(t,ei,ur),si(t,rn()),null}function ip(t,e){var n=Lt;Lt|=1;try{return t(e)}finally{Lt=n,Lt===0&&(Vo=rn()+500,Su&&is())}}function Rs(t){Or!==null&&Or.tag===0&&!(Lt&6)&&Do();var e=Lt;Lt|=1;var n=Ei.transition,i=Dt;try{if(Ei.transition=null,Dt=1,t)return t()}finally{Dt=i,Ei.transition=n,Lt=e,!(Lt&6)&&is()}}function rp(){ci=Eo.current,jt(Eo)}function ys(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,NS(n)),un!==null)for(n=un.return;n!==null;){var i=n;switch(kh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wc();break;case 3:Bo(),jt(ii),jt(kn),$h();break;case 5:Xh(i);break;case 4:Bo();break;case 13:jt(Kt);break;case 19:jt(Kt);break;case 10:Vh(i.type._context);break;case 22:case 23:rp()}n=n.return}if(Mn=t,un=t=$r(t.current,null),Pn=ci=e,pn=0,il=null,tp=Tu=Cs=0,ei=Pa=null,xs!==null){for(e=0;e<xs.length;e++)if(n=xs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}xs=null}return t}function Lx(t,e){do{var n=un;try{if(Hh(),bc.current=Qc,Jc){for(var i=Qt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Jc=!1}if(As=0,Sn=hn=Qt=null,Ca=!1,el=0,ep.current=null,n===null||n.return===null){pn=1,il=e,un=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Cm(o);if(p!==null){p.flags&=-257,Rm(p,o,a,s,e),p.mode&1&&Am(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Am(s,c,e),sp();break e}l=Error(we(426))}}else if(Yt&&a.mode&1){var g=Cm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Rm(g,o,a,s,e),zh(Ho(l,a));break e}}s=l=Ho(l,a),pn!==4&&(pn=2),Pa===null?Pa=[s]:Pa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=px(s,l,e);Sm(s,d);break e;case 1:a=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(jr===null||!jr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=mx(s,a,e);Sm(s,S);break e}}s=s.return}while(s!==null)}Ix(n)}catch(L){e=L,un===n&&n!==null&&(un=n=n.return);continue}break}while(!0)}function Nx(){var t=eu.current;return eu.current=Qc,t===null?Qc:t}function sp(){(pn===0||pn===3||pn===2)&&(pn=4),Mn===null||!(Cs&268435455)&&!(Tu&268435455)||Ir(Mn,Pn)}function iu(t,e){var n=Lt;Lt|=2;var i=Nx();(Mn!==t||Pn!==e)&&(ur=null,ys(t,e));do try{iM();break}catch(r){Lx(t,r)}while(!0);if(Hh(),Lt=n,eu.current=i,un!==null)throw Error(we(261));return Mn=null,Pn=0,pn}function iM(){for(;un!==null;)Dx(un)}function rM(){for(;un!==null&&!Ry();)Dx(un)}function Dx(t){var e=Ox(t.alternate,t,ci);t.memoizedProps=t.pendingProps,e===null?Ix(t):un=e,ep.current=null}function Ix(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=KS(n,e),n!==null){n.flags&=32767,un=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pn=6,un=null;return}}else if(n=ZS(n,e,ci),n!==null){un=n;return}if(e=e.sibling,e!==null){un=e;return}un=e=t}while(e!==null);pn===0&&(pn=5)}function fs(t,e,n){var i=Dt,r=Ei.transition;try{Ei.transition=null,Dt=1,sM(t,e,n,i)}finally{Ei.transition=r,Dt=i}return null}function sM(t,e,n,i){do Do();while(Or!==null);if(Lt&6)throw Error(we(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(we(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zy(t,s),t===Mn&&(un=Mn=null,Pn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bl||(Bl=!0,Fx(kc,function(){return Do(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ei.transition,Ei.transition=null;var o=Dt;Dt=1;var a=Lt;Lt|=4,ep.current=null,QS(t,n),Cx(n,t),TS(Nf),Bc=!!Lf,Nf=Lf=null,t.current=n,eM(n),Py(),Lt=a,Dt=o,Ei.transition=s}else t.current=n;if(Bl&&(Bl=!1,Or=t,nu=r),s=t.pendingLanes,s===0&&(jr=null),Dy(n.stateNode),si(t,rn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(tu)throw tu=!1,t=Jf,Jf=null,t;return nu&1&&t.tag!==0&&Do(),s=t.pendingLanes,s&1?t===Qf?La++:(La=0,Qf=t):La=0,is(),null}function Do(){if(Or!==null){var t=pv(nu),e=Ei.transition,n=Dt;try{if(Ei.transition=null,Dt=16>t?16:t,Or===null)var i=!1;else{if(t=Or,Or=null,nu=0,Lt&6)throw Error(we(331));var r=Lt;for(Lt|=4,We=t.current;We!==null;){var s=We,o=s.child;if(We.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(We=c;We!==null;){var u=We;switch(u.tag){case 0:case 11:case 15:Ra(8,u,s)}var f=u.child;if(f!==null)f.return=u,We=f;else for(;We!==null;){u=We;var h=u.sibling,p=u.return;if(Tx(u),u===c){We=null;break}if(h!==null){h.return=p,We=h;break}We=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}We=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,We=o;else e:for(;We!==null;){if(s=We,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,We=d;break e}We=s.return}}var m=t.current;for(We=m;We!==null;){o=We;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,We=x;else e:for(o=m;We!==null;){if(a=We,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eu(9,a)}}catch(L){nn(a,a.return,L)}if(a===o){We=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,We=S;break e}We=a.return}}if(Lt=r,is(),Qi&&typeof Qi.onPostCommitFiberRoot=="function")try{Qi.onPostCommitFiberRoot(gu,t)}catch{}i=!0}return i}finally{Dt=n,Ei.transition=e}}return!1}function Vm(t,e,n){e=Ho(n,e),e=px(t,e,1),t=Wr(t,e,1),e=Xn(),t!==null&&(fl(t,1,e),si(t,e))}function nn(t,e,n){if(t.tag===3)Vm(t,t,n);else for(;e!==null;){if(e.tag===3){Vm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(jr===null||!jr.has(i))){t=Ho(n,t),t=mx(e,t,1),e=Wr(e,t,1),t=Xn(),e!==null&&(fl(e,1,t),si(e,t));break}}e=e.return}}function oM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xn(),t.pingedLanes|=t.suspendedLanes&n,Mn===t&&(Pn&n)===n&&(pn===4||pn===3&&(Pn&130023424)===Pn&&500>rn()-np?ys(t,0):tp|=n),si(t,e)}function Ux(t,e){e===0&&(t.mode&1?(e=Pl,Pl<<=1,!(Pl&130023424)&&(Pl=4194304)):e=1);var n=Xn();t=xr(t,e),t!==null&&(fl(t,e,n),si(t,n))}function aM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ux(t,n)}function lM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(we(314))}i!==null&&i.delete(e),Ux(t,n)}var Ox;Ox=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ii.current)ni=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ni=!1,qS(t,e,n);ni=!!(t.flags&131072)}else ni=!1,Yt&&e.flags&1048576&&Bv(e,$c,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Cc(t,e),t=e.pendingProps;var r=Fo(e,kn.current);No(e,n),r=qh(null,e,i,t,r,n);var s=Zh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ri(i)?(s=!0,jc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wh(e),r.updater=wu,e.stateNode=r,r._reactInternals=e,Hf(e,i,t,n),e=Wf(null,e,i,!0,s,n)):(e.tag=0,Yt&&s&&Fh(e),Gn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Cc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uM(i),t=Di(i,t),r){case 0:e=Gf(null,e,i,t,n);break e;case 1:e=Nm(null,e,i,t,n);break e;case 11:e=Pm(null,e,i,t,n);break e;case 14:e=Lm(null,e,i,Di(i.type,t),n);break e}throw Error(we(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Di(i,r),Gf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Di(i,r),Nm(t,e,i,r,n);case 3:e:{if(_x(e),t===null)throw Error(we(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Xv(t,e),Zc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ho(Error(we(423)),e),e=Dm(t,e,i,n,r);break e}else if(i!==r){r=Ho(Error(we(424)),e),e=Dm(t,e,i,n,r);break e}else for(fi=Gr(e.stateNode.containerInfo.firstChild),hi=e,Yt=!0,Ui=null,n=Wv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ko(),i===r){e=_r(t,e,n);break e}Gn(t,e,i,n)}e=e.child}return e;case 5:return $v(e),t===null&&kf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Df(i,r)?o=null:s!==null&&Df(i,s)&&(e.flags|=32),xx(t,e),Gn(t,e,o,n),e.child;case 6:return t===null&&kf(e),null;case 13:return yx(t,e,n);case 4:return jh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zo(e,null,i,n):Gn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Di(i,r),Pm(t,e,i,r,n);case 7:return Gn(t,e,e.pendingProps,n),e.child;case 8:return Gn(t,e,e.pendingProps.children,n),e.child;case 12:return Gn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ht(Yc,i._currentValue),i._currentValue=o,s!==null)if(zi(s.value,o)){if(s.children===r.children&&!ii.current){e=_r(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=mr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(we(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,No(e,n),r=bi(r),i=i(r),e.flags|=1,Gn(t,e,i,n),e.child;case 14:return i=e.type,r=Di(i,e.pendingProps),r=Di(i.type,r),Lm(t,e,i,r,n);case 15:return gx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Di(i,r),Cc(t,e),e.tag=1,ri(i)?(t=!0,jc(e)):t=!1,No(e,n),hx(e,i,r),Hf(e,i,r,n),Wf(null,e,i,!0,t,n);case 19:return Sx(t,e,n);case 22:return vx(t,e,n)}throw Error(we(156,e.tag))};function Fx(t,e){return uv(t,e)}function cM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(t,e,n,i){return new cM(t,e,n,i)}function op(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uM(t){if(typeof t=="function")return op(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Th)return 11;if(t===bh)return 14}return 2}function $r(t,e){var n=t.alternate;return n===null?(n=wi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Lc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")op(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case po:return Ss(n.children,r,s,e);case Eh:o=8,r|=8;break;case df:return t=wi(12,n,e,r|2),t.elementType=df,t.lanes=s,t;case ff:return t=wi(13,n,e,r),t.elementType=ff,t.lanes=s,t;case hf:return t=wi(19,n,e,r),t.elementType=hf,t.lanes=s,t;case $0:return bu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case j0:o=10;break e;case X0:o=9;break e;case Th:o=11;break e;case bh:o=14;break e;case Pr:o=16,i=null;break e}throw Error(we(130,t==null?t:typeof t,""))}return e=wi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ss(t,e,n,i){return t=wi(7,t,i,e),t.lanes=n,t}function bu(t,e,n,i){return t=wi(22,t,i,e),t.elementType=$0,t.lanes=n,t.stateNode={isHidden:!1},t}function gd(t,e,n){return t=wi(6,t,null,e),t.lanes=n,t}function vd(t,e,n){return e=wi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ku(0),this.expirationTimes=Ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ap(t,e,n,i,r,s,o,a,l){return t=new dM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wh(s),t}function fM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ho,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function kx(t){if(!t)return Qr;t=t._reactInternals;e:{if(Us(t)!==t||t.tag!==1)throw Error(we(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ri(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(we(171))}if(t.tag===1){var n=t.type;if(ri(n))return kv(t,n,e)}return e}function zx(t,e,n,i,r,s,o,a,l){return t=ap(n,i,!0,t,r,s,o,a,l),t.context=kx(null),n=t.current,i=Xn(),r=Xr(n),s=mr(i,r),s.callback=e??null,Wr(n,s,r),t.current.lanes=r,fl(t,r,i),si(t,i),t}function Au(t,e,n,i){var r=e.current,s=Xn(),o=Xr(r);return n=kx(n),e.context===null?e.context=n:e.pendingContext=n,e=mr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Wr(r,e,o),t!==null&&(ki(t,r,o,s),Tc(t,r,o)),o}function ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lp(t,e){Gm(t,e),(t=t.alternate)&&Gm(t,e)}function hM(){return null}var Bx=typeof reportError=="function"?reportError:function(t){console.error(t)};function cp(t){this._internalRoot=t}Cu.prototype.render=cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(we(409));Au(t,e,null,null)};Cu.prototype.unmount=cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rs(function(){Au(null,t,null,null)}),e[vr]=null}};function Cu(t){this._internalRoot=t}Cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=vv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dr.length&&e!==0&&e<Dr[n].priority;n++);Dr.splice(n,0,t),n===0&&_v(t)}};function up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wm(){}function pM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ru(o);s.call(c)}}var o=zx(e,i,t,0,null,!1,!1,"",Wm);return t._reactRootContainer=o,t[vr]=o.current,qa(t.nodeType===8?t.parentNode:t),Rs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ru(l);a.call(c)}}var l=ap(t,0,!1,null,null,!1,!1,"",Wm);return t._reactRootContainer=l,t[vr]=l.current,qa(t.nodeType===8?t.parentNode:t),Rs(function(){Au(e,l,n,i)}),l}function Pu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ru(o);a.call(l)}}Au(e,o,t,r)}else o=pM(n,e,t,r,i);return ru(o)}mv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Sa(e.pendingLanes);n!==0&&(Rh(e,n|1),si(e,rn()),!(Lt&6)&&(Vo=rn()+500,is()))}break;case 13:Rs(function(){var i=xr(t,1);if(i!==null){var r=Xn();ki(i,t,1,r)}}),lp(t,1)}};Ph=function(t){if(t.tag===13){var e=xr(t,134217728);if(e!==null){var n=Xn();ki(e,t,134217728,n)}lp(t,134217728)}};gv=function(t){if(t.tag===13){var e=Xr(t),n=xr(t,e);if(n!==null){var i=Xn();ki(n,t,e,i)}lp(t,e)}};vv=function(){return Dt};xv=function(t,e){var n=Dt;try{return Dt=t,e()}finally{Dt=n}};wf=function(t,e,n){switch(e){case"input":if(gf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yu(i);if(!r)throw Error(we(90));q0(i),gf(i,r)}}}break;case"textarea":K0(t,n);break;case"select":e=n.value,e!=null&&Co(t,!!n.multiple,e,!1)}};rv=ip;sv=Rs;var mM={usingClientEntryPoint:!1,Events:[pl,xo,yu,nv,iv,ip]},ca={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gM={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lv(t),t===null?null:t.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||hM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{gu=Hl.inject(gM),Qi=Hl}catch{}}mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mM;mi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!up(e))throw Error(we(200));return fM(t,e,null,n)};mi.createRoot=function(t,e){if(!up(t))throw Error(we(299));var n=!1,i="",r=Bx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ap(t,1,!1,null,null,n,!1,i,r),t[vr]=e.current,qa(t.nodeType===8?t.parentNode:t),new cp(e)};mi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(we(188)):(t=Object.keys(t).join(","),Error(we(268,t)));return t=lv(e),t=t===null?null:t.stateNode,t};mi.flushSync=function(t){return Rs(t)};mi.hydrate=function(t,e,n){if(!Ru(e))throw Error(we(200));return Pu(null,t,e,!0,n)};mi.hydrateRoot=function(t,e,n){if(!up(t))throw Error(we(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Bx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zx(e,null,t,1,n??null,r,!1,s,o),t[vr]=e.current,qa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Cu(e)};mi.render=function(t,e,n){if(!Ru(e))throw Error(we(200));return Pu(null,t,e,!1,n)};mi.unmountComponentAtNode=function(t){if(!Ru(t))throw Error(we(40));return t._reactRootContainer?(Rs(function(){Pu(null,null,t,!1,function(){t._reactRootContainer=null,t[vr]=null})}),!0):!1};mi.unstable_batchedUpdates=ip;mi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ru(n))throw Error(we(200));if(t==null||t._reactInternals===void 0)throw Error(we(38));return Pu(t,e,n,!1,i)};mi.version="18.3.1-next-f1338f8080-20240426";function Hx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hx)}catch(t){console.error(t)}}Hx(),H0.exports=mi;var vM=H0.exports,Vx,jm=vM;Vx=jm.createRoot,jm.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dp="160",xM=0,Xm=1,_M=2,Gx=1,Wx=2,cr=3,es=0,$n=1,ui=2,Yr=0,Io=1,$m=2,Ym=3,qm=4,yM=5,ps=100,SM=101,MM=102,Zm=103,Km=104,wM=200,EM=201,TM=202,bM=203,nh=204,ih=205,AM=206,CM=207,RM=208,PM=209,LM=210,NM=211,DM=212,IM=213,UM=214,OM=0,FM=1,kM=2,su=3,zM=4,BM=5,HM=6,VM=7,jx=0,GM=1,WM=2,qr=0,jM=1,XM=2,$M=3,Xx=4,YM=5,qM=6,fp=300,Go=301,Wo=302,ou=303,rh=304,Lu=306,sh=1e3,di=1001,oh=1002,Wn=1003,Jm=1004,xd=1005,jn=1006,ZM=1007,rl=1008,Zr=1009,KM=1010,JM=1011,hp=1012,$x=1013,Fr=1014,kr=1015,sl=1016,Yx=1017,qx=1018,Ms=1020,QM=1021,Oi=1023,ew=1024,tw=1025,ws=1026,jo=1027,nw=1028,Zx=1029,iw=1030,Kx=1031,Jx=1033,_d=33776,yd=33777,Sd=33778,Md=33779,Qm=35840,eg=35841,tg=35842,ng=35843,Qx=36196,ig=37492,rg=37496,sg=37808,og=37809,ag=37810,lg=37811,cg=37812,ug=37813,dg=37814,fg=37815,hg=37816,pg=37817,mg=37818,gg=37819,vg=37820,xg=37821,wd=36492,_g=36494,yg=36495,rw=36283,Sg=36284,Mg=36285,wg=36286,e_=3e3,Es=3001,sw=3200,ow=3201,t_=0,aw=1,Mi="",$t="srgb",yr="srgb-linear",pp="display-p3",Nu="display-p3-linear",au="linear",Wt="srgb",lu="rec709",cu="p3",Ws=7680,Eg=519,lw=512,cw=513,uw=514,n_=515,dw=516,fw=517,hw=518,pw=519,ah=35044,Tg="300 es",lh=1035,pr=2e3,uu=2001;class Zo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bg=1234567;const Na=Math.PI/180,ol=180/Math.PI;function tr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(In[t&255]+In[t>>8&255]+In[t>>16&255]+In[t>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function Rn(t,e,n){return Math.max(e,Math.min(n,t))}function mp(t,e){return(t%e+e)%e}function mw(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function gw(t,e,n){return t!==e?(n-t)/(e-t):0}function Da(t,e,n){return(1-n)*t+n*e}function vw(t,e,n,i){return Da(t,e,1-Math.exp(-n*i))}function xw(t,e=1){return e-Math.abs(mp(t,e*2)-e)}function _w(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function yw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Sw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Mw(t,e){return t+Math.random()*(e-t)}function ww(t){return t*(.5-Math.random())}function Ew(t){t!==void 0&&(bg=t);let e=bg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tw(t){return t*Na}function bw(t){return t*ol}function ch(t){return(t&t-1)===0&&t!==0}function Aw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function du(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Cw(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*v,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*v,a*c);break;case"ZYZ":t.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ki(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ut(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const On={DEG2RAD:Na,RAD2DEG:ol,generateUUID:tr,clamp:Rn,euclideanModulo:mp,mapLinear:mw,inverseLerp:gw,lerp:Da,damp:vw,pingpong:xw,smoothstep:_w,smootherstep:yw,randInt:Sw,randFloat:Mw,randFloatSpread:ww,seededRandom:Ew,degToRad:Tw,radToDeg:bw,isPowerOfTwo:ch,ceilPowerOfTwo:Aw,floorPowerOfTwo:du,setQuaternionFromProperEuler:Cw,normalize:Ut,denormalize:Ki};class Me{constructor(e=0,n=0){Me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bt{constructor(e,n,i,r,s,o,a,l,c){bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],y=r[0],g=r[3],d=r[6],m=r[1],x=r[4],S=r[7],L=r[2],A=r[5],R=r[8];return s[0]=o*y+a*m+l*L,s[3]=o*g+a*x+l*A,s[6]=o*d+a*S+l*R,s[1]=c*y+u*m+f*L,s[4]=c*g+u*x+f*A,s[7]=c*d+u*S+f*R,s[2]=h*y+p*m+v*L,s[5]=h*g+p*x+v*A,s[8]=h*d+p*S+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=n*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ed.makeScale(e,n)),this}rotate(e){return this.premultiply(Ed.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ed.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ed=new bt;function i_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function al(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Rw(){const t=al("canvas");return t.style.display="block",t}const Ag={};function Ia(t){t in Ag||(Ag[t]=!0,console.warn(t))}const Cg=new bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rg=new bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vl={[yr]:{transfer:au,primaries:lu,toReference:t=>t,fromReference:t=>t},[$t]:{transfer:Wt,primaries:lu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Nu]:{transfer:au,primaries:cu,toReference:t=>t.applyMatrix3(Rg),fromReference:t=>t.applyMatrix3(Cg)},[pp]:{transfer:Wt,primaries:cu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Rg),fromReference:t=>t.applyMatrix3(Cg).convertLinearToSRGB()}},Pw=new Set([yr,Nu]),Ot={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Pw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Vl[e].toReference,r=Vl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Vl[t].primaries},getTransfer:function(t){return t===Mi?au:Vl[t].transfer}};function Uo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Td(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let js;class r_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{js===void 0&&(js=al("canvas")),js.width=e.width,js.height=e.height;const i=js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=js}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=al("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Uo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Uo(n[i]/255)*255):n[i]=Uo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lw=0;class s_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=tr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bd(r[o].image)):s.push(bd(r[o]))}else s=bd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?r_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nw=0;class Yn extends Zo{constructor(e=Yn.DEFAULT_IMAGE,n=Yn.DEFAULT_MAPPING,i=di,r=di,s=jn,o=rl,a=Oi,l=Zr,c=Yn.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nw++}),this.uuid=tr(),this.name="",this.source=new s_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Es?$t:Mi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sh:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case oh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sh:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case oh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$t?Es:e_}set encoding(e){Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Es?$t:Mi}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=fp;Yn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,i=0,r=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],y=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,L=(d+1)/2,A=(u+h)/4,R=(f+y)/4,F=(v+g)/4;return x>S&&x>L?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=R/i):S>L?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=F/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=R/s,r=F/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(f-y)/m,this.z=(h-u)/m,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dw extends Zo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ia("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Es?$t:Mi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new s_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ps extends Dw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class o_ extends Yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Iw extends Yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(f!==y||l!==h||c!==p||u!==v){let g=1-a;const d=l*h+c*p+u*v+f*y,m=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const L=Math.sqrt(x),A=Math.atan2(L,d*m);g=Math.sin(g*A)/L,a=Math.sin(a*A)/L}const S=a*m;if(l=l*g+h*S,c=c*g+p*S,u=u*g+v*S,f=f*g+y*S,g===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*p-c*h,e[n+1]=l*v+u*h+c*f-a*p,e[n+2]=c*v+u*p+a*h-l*f,e[n+3]=u*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ad.copy(this).projectOnVector(e),this.sub(Ad)}reflect(e){return this.sub(Ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new U,Pg=new gl;class vl{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pi):Pi.fromBufferAttribute(s,o),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gl.copy(i.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Wl.subVectors(this.max,ua),Xs.subVectors(e.a,ua),$s.subVectors(e.b,ua),Ys.subVectors(e.c,ua),Tr.subVectors($s,Xs),br.subVectors(Ys,$s),as.subVectors(Xs,Ys);let n=[0,-Tr.z,Tr.y,0,-br.z,br.y,0,-as.z,as.y,Tr.z,0,-Tr.x,br.z,0,-br.x,as.z,0,-as.x,-Tr.y,Tr.x,0,-br.y,br.x,0,-as.y,as.x,0];return!Cd(n,Xs,$s,Ys,Wl)||(n=[1,0,0,0,1,0,0,0,1],!Cd(n,Xs,$s,Ys,Wl))?!1:(jl.crossVectors(Tr,br),n=[jl.x,jl.y,jl.z],Cd(n,Xs,$s,Ys,Wl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rr=[new U,new U,new U,new U,new U,new U,new U,new U],Pi=new U,Gl=new vl,Xs=new U,$s=new U,Ys=new U,Tr=new U,br=new U,as=new U,ua=new U,Wl=new U,jl=new U,ls=new U;function Cd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ls.fromArray(t,s);const a=r.x*Math.abs(ls.x)+r.y*Math.abs(ls.y)+r.z*Math.abs(ls.z),l=e.dot(ls),c=n.dot(ls),u=i.dot(ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Uw=new vl,da=new U,Rd=new U;class Du{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Uw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const n=da.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(da,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Rd)),this.expandByPoint(da.copy(e.center).sub(Rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sr=new U,Pd=new U,Xl=new U,Ar=new U,Ld=new U,$l=new U,Nd=new U;class gp{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=sr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,n),sr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Pd.copy(e).add(n).multiplyScalar(.5),Xl.copy(n).sub(e).normalize(),Ar.copy(this.origin).sub(Pd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Xl),a=Ar.dot(this.direction),l=-Ar.dot(Xl),c=Ar.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const y=1/u;f*=y,h*=y,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Pd).addScaledVector(Xl,h),p}intersectSphere(e,n){sr.subVectors(e.center,this.origin);const i=sr.dot(this.direction),r=sr.dot(sr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,n,i,r,s){Ld.subVectors(n,e),$l.subVectors(i,e),Nd.crossVectors(Ld,$l);let o=this.direction.dot(Nd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ar.subVectors(this.origin,e);const l=a*this.direction.dot($l.crossVectors(Ar,$l));if(l<0)return null;const c=a*this.direction.dot(Ld.cross(Ar));if(c<0||l+c>o)return null;const u=-a*Ar.dot(Nd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,v,y,g){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,v,y,g)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,v,y,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/qs.setFromMatrixColumn(e,0).length(),s=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,v=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,y=c*f;n[0]=h+y*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,y=c*f;n[0]=h-y*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=a*u,y=a*f;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=y-h*f,n[8]=v*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+v,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+y,n[5]=o*u,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*u,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ow,e,Fw)}lookAt(e,n,i){const r=this.elements;return ai.subVectors(e,n),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Cr.crossVectors(i,ai),Cr.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Cr.crossVectors(i,ai)),Cr.normalize(),Yl.crossVectors(ai,Cr),r[0]=Cr.x,r[4]=Yl.x,r[8]=ai.x,r[1]=Cr.y,r[5]=Yl.y,r[9]=ai.y,r[2]=Cr.z,r[6]=Yl.z,r[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],y=i[6],g=i[10],d=i[14],m=i[3],x=i[7],S=i[11],L=i[15],A=r[0],R=r[4],F=r[8],E=r[12],T=r[1],V=r[5],X=r[9],te=r[13],D=r[2],W=r[6],j=r[10],ee=r[14],z=r[3],$=r[7],Y=r[11],le=r[15];return s[0]=o*A+a*T+l*D+c*z,s[4]=o*R+a*V+l*W+c*$,s[8]=o*F+a*X+l*j+c*Y,s[12]=o*E+a*te+l*ee+c*le,s[1]=u*A+f*T+h*D+p*z,s[5]=u*R+f*V+h*W+p*$,s[9]=u*F+f*X+h*j+p*Y,s[13]=u*E+f*te+h*ee+p*le,s[2]=v*A+y*T+g*D+d*z,s[6]=v*R+y*V+g*W+d*$,s[10]=v*F+y*X+g*j+d*Y,s[14]=v*E+y*te+g*ee+d*le,s[3]=m*A+x*T+S*D+L*z,s[7]=m*R+x*V+S*W+L*$,s[11]=m*F+x*X+S*j+L*Y,s[15]=m*E+x*te+S*ee+L*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],y=e[7],g=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],y=e[13],g=e[14],d=e[15],m=f*g*c-y*h*c+y*l*p-a*g*p-f*l*d+a*h*d,x=v*h*c-u*g*c-v*l*p+o*g*p+u*l*d-o*h*d,S=u*y*c-v*f*c+v*a*p-o*y*p-u*a*d+o*f*d,L=v*f*l-u*y*l-v*a*h+o*y*h+u*a*g-o*f*g,A=n*m+i*x+r*S+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=m*R,e[1]=(y*h*s-f*g*s-y*r*p+i*g*p+f*r*d-i*h*d)*R,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*d+i*l*d)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*R,e[4]=x*R,e[5]=(u*g*s-v*h*s+v*r*p-n*g*p-u*r*d+n*h*d)*R,e[6]=(v*l*s-o*g*s-v*r*c+n*g*c+o*r*d-n*l*d)*R,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*R,e[8]=S*R,e[9]=(v*f*s-u*y*s-v*i*p+n*y*p+u*i*d-n*f*d)*R,e[10]=(o*y*s-v*a*s+v*i*c-n*y*c-o*i*d+n*a*d)*R,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*R,e[12]=L*R,e[13]=(u*y*r-v*f*r+v*i*h-n*y*h-u*i*g+n*f*g)*R,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*g-n*a*g)*R,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,v=s*f,y=o*u,g=o*f,d=a*f,m=l*c,x=l*u,S=l*f,L=i.x,A=i.y,R=i.z;return r[0]=(1-(y+d))*L,r[1]=(p+S)*L,r[2]=(v-x)*L,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(h+d))*A,r[6]=(g+m)*A,r[7]=0,r[8]=(v+x)*R,r[9]=(g-m)*R,r[10]=(1-(h+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=qs.set(r[0],r[1],r[2]).length();const o=qs.set(r[4],r[5],r[6]).length(),a=qs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Li.copy(this);const c=1/s,u=1/o,f=1/a;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=u,Li.elements[5]*=u,Li.elements[6]*=u,Li.elements[8]*=f,Li.elements[9]*=f,Li.elements[10]*=f,n.setFromRotationMatrix(Li),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=pr){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===pr)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===uu)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=pr){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let v,y;if(a===pr)v=(o+s)*f,y=-2*f;else if(a===uu)v=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qs=new U,Li=new en,Ow=new U(0,0,0),Fw=new U(1,1,1),Cr=new U,Yl=new U,ai=new U,Lg=new en,Ng=new gl;class xl{constructor(e=0,n=0,i=0,r=xl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ng.setFromEuler(this),this.setFromQuaternion(Ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xl.DEFAULT_ORDER="XYZ";let vp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kw=0;const Dg=new U,Zs=new gl,or=new en,ql=new U,fa=new U,zw=new U,Bw=new gl,Ig=new U(1,0,0),Ug=new U(0,1,0),Og=new U(0,0,1),Hw={type:"added"},Vw={type:"removed"};class wn extends Zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kw++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new U,n=new xl,i=new gl,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new en},normalMatrix:{value:new bt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(Ig,e)}rotateY(e){return this.rotateOnAxis(Ug,e)}rotateZ(e){return this.rotateOnAxis(Og,e)}translateOnAxis(e,n){return Dg.copy(e).applyQuaternion(this.quaternion),this.position.add(Dg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ig,e)}translateY(e){return this.translateOnAxis(Ug,e)}translateZ(e){return this.translateOnAxis(Og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ql.copy(e):ql.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(fa,ql,this.up):or.lookAt(ql,fa,this.up),this.quaternion.setFromRotationMatrix(or),r&&(or.extractRotation(r.matrixWorld),Zs.setFromRotationMatrix(or),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Vw)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,zw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,Bw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wn.DEFAULT_UP=new U(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new U,ar=new U,Dd=new U,lr=new U,Ks=new U,Js=new U,Fg=new U,Id=new U,Ud=new U,Od=new U;let Zl=!1;class Si{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ni.subVectors(e,n),r.cross(Ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ni.subVectors(r,n),ar.subVectors(i,n),Dd.subVectors(e,n);const o=Ni.dot(Ni),a=Ni.dot(ar),l=Ni.dot(Dd),c=ar.dot(ar),u=ar.dot(Dd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getUV(e,n,i,r,s,o,a,l){return Zl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zl=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,lr.x),l.addScaledVector(o,lr.y),l.addScaledVector(a,lr.z),l)}static isFrontFacing(e,n,i,r){return Ni.subVectors(i,n),ar.subVectors(e,n),Ni.cross(ar).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Ni.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Si.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Zl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zl=!0),Si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ks.subVectors(r,i),Js.subVectors(s,i),Id.subVectors(e,i);const l=Ks.dot(Id),c=Js.dot(Id);if(l<=0&&c<=0)return n.copy(i);Ud.subVectors(e,r);const u=Ks.dot(Ud),f=Js.dot(Ud);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ks,o);Od.subVectors(e,s);const p=Ks.dot(Od),v=Js.dot(Od);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Js,a);const g=u*v-p*f;if(g<=0&&f-u>=0&&p-v>=0)return Fg.subVectors(s,r),a=(f-u)/(f-u+(p-v)),n.copy(r).addScaledVector(Fg,a);const d=1/(g+y+h);return o=y*d,a=h*d,n.copy(i).addScaledVector(Ks,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const a_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function Fd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ot.workingColorSpace){if(e=mp(e,1),n=Rn(n,0,1),i=Rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Fd(o,s,e+1/3),this.g=Fd(o,s,e),this.b=Fd(o,s,e-1/3)}return Ot.toWorkingColorSpace(this,r),this}setStyle(e,n=$t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$t){const i=a_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}copyLinearToSRGB(e){return this.r=Td(e.r),this.g=Td(e.g),this.b=Td(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return Ot.fromWorkingColorSpace(Un.copy(this),e),Math.round(Rn(Un.r*255,0,255))*65536+Math.round(Rn(Un.g*255,0,255))*256+Math.round(Rn(Un.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ot.workingColorSpace){Ot.fromWorkingColorSpace(Un.copy(this),n);const i=Un.r,r=Un.g,s=Un.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(Un.copy(this),n),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=$t){Ot.fromWorkingColorSpace(Un.copy(this),e);const n=Un.r,i=Un.g,r=Un.b;return e!==$t?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+n,Rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Rr),e.getHSL(Kl);const i=Da(Rr.h,Kl.h,n),r=Da(Rr.s,Kl.s,n),s=Da(Rr.l,Kl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Et;Et.NAMES=a_;let Gw=0;class Os extends Zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gw++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Io,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=su,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Io&&(i.blending=this.blending),this.side!==es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nh&&(i.blendSrc=this.blendSrc),this.blendDst!==ih&&(i.blendDst=this.blendDst),this.blendEquation!==ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==su&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ji extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new U,Jl=new Me;class Ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ah,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jl.fromBufferAttribute(this,n),Jl.applyMatrix3(e),this.setXY(n,Jl.x,Jl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyMatrix3(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyMatrix4(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyNormalMatrix(e),this.setXYZ(n,an.x,an.y,an.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.transformDirection(e),this.setXYZ(n,an.x,an.y,an.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ki(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ki(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ki(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ki(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ki(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ut(n,this.array),i=Ut(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ut(n,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ut(n,this.array),i=Ut(i,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ah&&(e.usage=this.usage),e}}class l_ extends Ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class c_ extends Ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ft extends Ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Ww=0;const vi=new en,kd=new wn,Qs=new U,li=new vl,ha=new vl,yn=new U;class mn extends Zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ww++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i_(e)?c_:l_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new bt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,n,i){return vi.makeTranslation(e,n,i),this.applyMatrix4(vi),this}scale(e,n,i){return vi.makeScale(e,n,i),this.applyMatrix4(vi),this}lookAt(e){return kd.lookAt(e),kd.updateMatrix(),this.applyMatrix4(kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ft(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];li.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Du);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ha.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(li.min,ha.min),li.expandByPoint(yn),yn.addVectors(li.max,ha.max),li.expandByPoint(yn)):(li.expandByPoint(ha.min),li.expandByPoint(ha.max))}li.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yn.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(e,c),yn.add(Qs)),r=Math.max(r,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new U,u[T]=new U;const f=new U,h=new U,p=new U,v=new Me,y=new Me,g=new Me,d=new U,m=new U;function x(T,V,X){f.fromArray(r,T*3),h.fromArray(r,V*3),p.fromArray(r,X*3),v.fromArray(o,T*2),y.fromArray(o,V*2),g.fromArray(o,X*2),h.sub(f),p.sub(f),y.sub(v),g.sub(v);const te=1/(y.x*g.y-g.x*y.y);isFinite(te)&&(d.copy(h).multiplyScalar(g.y).addScaledVector(p,-y.y).multiplyScalar(te),m.copy(p).multiplyScalar(y.x).addScaledVector(h,-g.x).multiplyScalar(te),c[T].add(d),c[V].add(d),c[X].add(d),u[T].add(m),u[V].add(m),u[X].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,V=S.length;T<V;++T){const X=S[T],te=X.start,D=X.count;for(let W=te,j=te+D;W<j;W+=3)x(i[W+0],i[W+1],i[W+2])}const L=new U,A=new U,R=new U,F=new U;function E(T){R.fromArray(s,T*3),F.copy(R);const V=c[T];L.copy(V),L.sub(R.multiplyScalar(R.dot(V))).normalize(),A.crossVectors(F,V);const te=A.dot(u[T])<0?-1:1;l[T*4]=L.x,l[T*4+1]=L.y,l[T*4+2]=L.z,l[T*4+3]=te}for(let T=0,V=S.length;T<V;++T){const X=S[T],te=X.start,D=X.count;for(let W=te,j=te+D;W<j;W+=3)E(i[W+0]),E(i[W+1]),E(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)yn.fromBufferAttribute(e,n),yn.normalize(),e.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new Ti(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kg=new en,cs=new gp,Ql=new Du,zg=new U,eo=new U,to=new U,no=new U,zd=new U,ec=new U,tc=new Me,nc=new Me,ic=new Me,Bg=new U,Hg=new U,Vg=new U,rc=new U,sc=new U;class Ye extends wn{constructor(e=new mn,n=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ec.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(zd.fromBufferAttribute(f,e),o?ec.addScaledVector(zd,u):ec.addScaledVector(zd.sub(n),u))}n.add(ec)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(s),cs.copy(e.ray).recast(e.near),!(Ql.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Ql,zg)===null||cs.origin.distanceToSquared(zg)>(e.far-e.near)**2))&&(kg.copy(s).invert(),cs.copy(e.ray).applyMatrix4(kg),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cs)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const g=h[v],d=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,L=x;S<L;S+=3){const A=a.getX(S),R=a.getX(S+1),F=a.getX(S+2);r=oc(this,d,e,i,c,u,f,A,R,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=v,d=y;g<d;g+=3){const m=a.getX(g),x=a.getX(g+1),S=a.getX(g+2);r=oc(this,o,e,i,c,u,f,m,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const g=h[v],d=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,L=x;S<L;S+=3){const A=S,R=S+1,F=S+2;r=oc(this,d,e,i,c,u,f,A,R,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=v,d=y;g<d;g+=3){const m=g,x=g+1,S=g+2;r=oc(this,o,e,i,c,u,f,m,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function jw(t,e,n,i,r,s,o,a){let l;if(e.side===$n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===es,a),l===null)return null;sc.copy(a),sc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(sc);return c<n.near||c>n.far?null:{distance:c,point:sc.clone(),object:t}}function oc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,eo),t.getVertexPosition(l,to),t.getVertexPosition(c,no);const u=jw(t,e,n,i,eo,to,no,rc);if(u){r&&(tc.fromBufferAttribute(r,a),nc.fromBufferAttribute(r,l),ic.fromBufferAttribute(r,c),u.uv=Si.getInterpolation(rc,eo,to,no,tc,nc,ic,new Me)),s&&(tc.fromBufferAttribute(s,a),nc.fromBufferAttribute(s,l),ic.fromBufferAttribute(s,c),u.uv1=Si.getInterpolation(rc,eo,to,no,tc,nc,ic,new Me),u.uv2=u.uv1),o&&(Bg.fromBufferAttribute(o,a),Hg.fromBufferAttribute(o,l),Vg.fromBufferAttribute(o,c),u.normal=Si.getInterpolation(rc,eo,to,no,Bg,Hg,Vg,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};Si.getNormal(eo,to,no,f.normal),u.face=f}return u}class ln extends mn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2));function v(y,g,d,m,x,S,L,A,R,F,E){const T=S/R,V=L/F,X=S/2,te=L/2,D=A/2,W=R+1,j=F+1;let ee=0,z=0;const $=new U;for(let Y=0;Y<j;Y++){const le=Y*V-te;for(let de=0;de<W;de++){const J=de*T-X;$[y]=J*m,$[g]=le*x,$[d]=D,c.push($.x,$.y,$.z),$[y]=0,$[g]=0,$[d]=A>0?1:-1,u.push($.x,$.y,$.z),f.push(de/R),f.push(1-Y/F),ee+=1}}for(let Y=0;Y<F;Y++)for(let le=0;le<R;le++){const de=h+le+W*Y,J=h+le+W*(Y+1),ue=h+(le+1)+W*(Y+1),Pe=h+(le+1)+W*Y;l.push(de,J,Pe),l.push(J,ue,Pe),z+=6}a.addGroup(p,z,E),p+=z,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vn(t){const e={};for(let n=0;n<t.length;n++){const i=Xo(t[n]);for(const r in i)e[r]=i[r]}return e}function Xw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function u_(t){return t.getRenderTarget()===null?t.outputColorSpace:Ot.workingColorSpace}const $w={clone:Xo,merge:Vn};var Yw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ls extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yw,this.fragmentShader=qw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=Xw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let d_=class extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=pr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class ti extends d_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Na*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const io=-90,ro=1;class Zw extends wn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ti(io,ro,e,n);r.layers=this.layers,this.add(r);const s=new ti(io,ro,e,n);s.layers=this.layers,this.add(s);const o=new ti(io,ro,e,n);o.layers=this.layers,this.add(o);const a=new ti(io,ro,e,n);a.layers=this.layers,this.add(a);const l=new ti(io,ro,e,n);l.layers=this.layers,this.add(l);const c=new ti(io,ro,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===pr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class f_ extends Yn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Go,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kw extends Ps{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ia("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Es?$t:Mi),this.texture=new f_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ln(5,5,5),s=new Ls({name:"CubemapFromEquirect",uniforms:Xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$n,blending:Yr});s.uniforms.tEquirect.value=n;const o=new Ye(r,s),a=n.minFilter;return n.minFilter===rl&&(n.minFilter=jn),new Zw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Bd=new U,Jw=new U,Qw=new bt;class Nr{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Bd.subVectors(i,n).cross(Jw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Bd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Qw.getNormalMatrix(e),r=this.coplanarPoint(Bd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Du,ac=new U;class xp{constructor(e=new Nr,n=new Nr,i=new Nr,r=new Nr,s=new Nr,o=new Nr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],y=r[10],g=r[11],d=r[12],m=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,g-p,S-d).normalize(),i[1].setComponents(l+s,h+c,g+p,S+d).normalize(),i[2].setComponents(l+o,h+u,g+v,S+m).normalize(),i[3].setComponents(l-o,h-u,g-v,S-m).normalize(),i[4].setComponents(l-a,h-f,g-y,S-x).normalize(),n===pr)i[5].setComponents(l+a,h+f,g+y,S+x).normalize();else if(n===uu)i[5].setComponents(a,f,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ac.x=r.normal.x>0?e.max.x:e.min.x,ac.y=r.normal.y>0?e.max.y:e.min.y,ac.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function h_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function e1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=f.byteLength,v=t.createBuffer();t.bindBuffer(u,v),t.bufferData(u,f,h),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,f){const h=u.array,p=u._updateRange,v=u.updateRanges;if(t.bindBuffer(f,c),p.count===-1&&v.length===0&&t.bufferSubData(f,0,h),v.length!==0){for(let y=0,g=v.length;y<g;y++){const d=v[y];n?t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class xi extends mn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],v=[],y=[],g=[];for(let d=0;d<u;d++){const m=d*h-o;for(let x=0;x<c;x++){const S=x*f-s;v.push(S,-m,0),y.push(0,0,1),g.push(x/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<a;m++){const x=m+c*d,S=m+c*(d+1),L=m+1+c*(d+1),A=m+1+c*d;p.push(x,S,A),p.push(S,L,A)}this.setIndex(p),this.setAttribute("position",new Ft(v,3)),this.setAttribute("normal",new Ft(y,3)),this.setAttribute("uv",new Ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}var t1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n1=`#ifdef USE_ALPHAHASH
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
#endif`,i1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,o1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a1=`#ifdef USE_AOMAP
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
#endif`,l1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c1=`#ifdef USE_BATCHING
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
#endif`,u1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,d1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,p1=`#ifdef USE_IRIDESCENCE
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
#endif`,m1=`#ifdef USE_BUMPMAP
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
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,E1=`#define PI 3.141592653589793
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
} // validated`,T1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b1=`vec3 transformedNormal = objectNormal;
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
#endif`,A1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L1="gl_FragColor = linearToOutputTexel( gl_FragColor );",N1=`
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
}`,D1=`#ifdef USE_ENVMAP
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
#endif`,I1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U1=`#ifdef USE_ENVMAP
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
#endif`,O1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F1=`#ifdef USE_ENVMAP
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
#endif`,k1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V1=`#ifdef USE_GRADIENTMAP
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
}`,G1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,W1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$1=`uniform bool receiveShadow;
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
#endif`,Y1=`#ifdef USE_ENVMAP
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
#endif`,q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q1=`PhysicalMaterial material;
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
#endif`,eE=`struct PhysicalMaterial {
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
}`,tE=`
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
#endif`,nE=`#if defined( RE_IndirectDiffuse )
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
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,aE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dE=`#if defined( USE_POINTS_UV )
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
#endif`,fE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mE=`#ifdef USE_MORPHNORMALS
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
#endif`,gE=`#ifdef USE_MORPHTARGETS
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
#endif`,vE=`#ifdef USE_MORPHTARGETS
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
#endif`,xE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_E=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wE=`#ifdef USE_NORMALMAP
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
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zE=`float getShadowMask() {
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
}`,BE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HE=`#ifdef USE_SKINNING
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
#endif`,VE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,WE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$E=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tT=`uniform sampler2D t2D;
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`#include <common>
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
}`,aT=`#if DEPTH_PACKING == 3200
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
}`,lT=`#define DISTANCE
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
}`,cT=`#define DISTANCE
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`uniform float scale;
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
}`,hT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#define LAMBERT
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
}`,vT=`#define LAMBERT
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
}`,xT=`#define MATCAP
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
}`,_T=`#define MATCAP
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
}`,yT=`#define NORMAL
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
}`,ST=`#define NORMAL
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
}`,MT=`#define PHONG
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
}`,wT=`#define PHONG
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
}`,ET=`#define STANDARD
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
}`,TT=`#define STANDARD
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
}`,bT=`#define TOON
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
}`,AT=`#define TOON
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
}`,CT=`uniform float size;
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
}`,RT=`uniform vec3 diffuse;
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
}`,PT=`#include <common>
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
}`,LT=`uniform vec3 color;
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
}`,NT=`uniform float rotation;
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
}`,DT=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:t1,alphahash_pars_fragment:n1,alphamap_fragment:i1,alphamap_pars_fragment:r1,alphatest_fragment:s1,alphatest_pars_fragment:o1,aomap_fragment:a1,aomap_pars_fragment:l1,batching_pars_vertex:c1,batching_vertex:u1,begin_vertex:d1,beginnormal_vertex:f1,bsdfs:h1,iridescence_fragment:p1,bumpmap_pars_fragment:m1,clipping_planes_fragment:g1,clipping_planes_pars_fragment:v1,clipping_planes_pars_vertex:x1,clipping_planes_vertex:_1,color_fragment:y1,color_pars_fragment:S1,color_pars_vertex:M1,color_vertex:w1,common:E1,cube_uv_reflection_fragment:T1,defaultnormal_vertex:b1,displacementmap_pars_vertex:A1,displacementmap_vertex:C1,emissivemap_fragment:R1,emissivemap_pars_fragment:P1,colorspace_fragment:L1,colorspace_pars_fragment:N1,envmap_fragment:D1,envmap_common_pars_fragment:I1,envmap_pars_fragment:U1,envmap_pars_vertex:O1,envmap_physical_pars_fragment:Y1,envmap_vertex:F1,fog_vertex:k1,fog_pars_vertex:z1,fog_fragment:B1,fog_pars_fragment:H1,gradientmap_pars_fragment:V1,lightmap_fragment:G1,lightmap_pars_fragment:W1,lights_lambert_fragment:j1,lights_lambert_pars_fragment:X1,lights_pars_begin:$1,lights_toon_fragment:q1,lights_toon_pars_fragment:Z1,lights_phong_fragment:K1,lights_phong_pars_fragment:J1,lights_physical_fragment:Q1,lights_physical_pars_fragment:eE,lights_fragment_begin:tE,lights_fragment_maps:nE,lights_fragment_end:iE,logdepthbuf_fragment:rE,logdepthbuf_pars_fragment:sE,logdepthbuf_pars_vertex:oE,logdepthbuf_vertex:aE,map_fragment:lE,map_pars_fragment:cE,map_particle_fragment:uE,map_particle_pars_fragment:dE,metalnessmap_fragment:fE,metalnessmap_pars_fragment:hE,morphcolor_vertex:pE,morphnormal_vertex:mE,morphtarget_pars_vertex:gE,morphtarget_vertex:vE,normal_fragment_begin:xE,normal_fragment_maps:_E,normal_pars_fragment:yE,normal_pars_vertex:SE,normal_vertex:ME,normalmap_pars_fragment:wE,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:TE,clearcoat_pars_fragment:bE,iridescence_pars_fragment:AE,opaque_fragment:CE,packing:RE,premultiplied_alpha_fragment:PE,project_vertex:LE,dithering_fragment:NE,dithering_pars_fragment:DE,roughnessmap_fragment:IE,roughnessmap_pars_fragment:UE,shadowmap_pars_fragment:OE,shadowmap_pars_vertex:FE,shadowmap_vertex:kE,shadowmask_pars_fragment:zE,skinbase_vertex:BE,skinning_pars_vertex:HE,skinning_vertex:VE,skinnormal_vertex:GE,specularmap_fragment:WE,specularmap_pars_fragment:jE,tonemapping_fragment:XE,tonemapping_pars_fragment:$E,transmission_fragment:YE,transmission_pars_fragment:qE,uv_pars_fragment:ZE,uv_pars_vertex:KE,uv_vertex:JE,worldpos_vertex:QE,background_vert:eT,background_frag:tT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:rT,cube_frag:sT,depth_vert:oT,depth_frag:aT,distanceRGBA_vert:lT,distanceRGBA_frag:cT,equirect_vert:uT,equirect_frag:dT,linedashed_vert:fT,linedashed_frag:hT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:gT,meshlambert_frag:vT,meshmatcap_vert:xT,meshmatcap_frag:_T,meshnormal_vert:yT,meshnormal_frag:ST,meshphong_vert:MT,meshphong_frag:wT,meshphysical_vert:ET,meshphysical_frag:TT,meshtoon_vert:bT,meshtoon_frag:AT,points_vert:CT,points_frag:RT,shadow_vert:PT,shadow_frag:LT,sprite_vert:NT,sprite_frag:DT},Ce={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},qi={basic:{uniforms:Vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Vn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Vn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Vn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Vn([Ce.points,Ce.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Vn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Vn([Ce.common,Ce.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Vn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Vn([Ce.sprite,Ce.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:Vn([Ce.common,Ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:Vn([Ce.lights,Ce.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};qi.physical={uniforms:Vn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const lc={r:0,b:0,g:0};function IT(t,e,n,i,r,s,o){const a=new Et(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(g,d){let m=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?n:e).get(x)),x===null?y(a,l):x&&x.isColor&&(y(x,1),m=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Lu)?(u===void 0&&(u=new Ye(new ln(1,1,1),new Ls({name:"BackgroundCubeMaterial",uniforms:Xo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ot.getTransfer(x.colorSpace)!==Wt,(f!==x||h!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ye(new xi(2,2),new Ls({name:"BackgroundMaterial",uniforms:Xo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ot.getTransfer(x.colorSpace)!==Wt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,d){g.getRGB(lc,u_(t)),i.buffers.color.setClear(lc.r,lc.g,lc.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),l=d,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:v}}function UT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function f(D,W,j,ee,z){let $=!1;if(o){const Y=y(ee,j,W);c!==Y&&(c=Y,p(c.object)),$=d(D,ee,j,z),$&&m(D,ee,j,z)}else{const Y=W.wireframe===!0;(c.geometry!==ee.id||c.program!==j.id||c.wireframe!==Y)&&(c.geometry=ee.id,c.program=j.id,c.wireframe=Y,$=!0)}z!==null&&n.update(z,t.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,F(D,W,j,ee),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(z).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function v(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function y(D,W,j){const ee=j.wireframe===!0;let z=a[D.id];z===void 0&&(z={},a[D.id]=z);let $=z[W.id];$===void 0&&($={},z[W.id]=$);let Y=$[ee];return Y===void 0&&(Y=g(h()),$[ee]=Y),Y}function g(D){const W=[],j=[],ee=[];for(let z=0;z<r;z++)W[z]=0,j[z]=0,ee[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:j,attributeDivisors:ee,object:D,attributes:{},index:null}}function d(D,W,j,ee){const z=c.attributes,$=W.attributes;let Y=0;const le=j.getAttributes();for(const de in le)if(le[de].location>=0){const ue=z[de];let Pe=$[de];if(Pe===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(Pe=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(Pe=D.instanceColor)),ue===void 0||ue.attribute!==Pe||Pe&&ue.data!==Pe.data)return!0;Y++}return c.attributesNum!==Y||c.index!==ee}function m(D,W,j,ee){const z={},$=W.attributes;let Y=0;const le=j.getAttributes();for(const de in le)if(le[de].location>=0){let ue=$[de];ue===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor));const Pe={};Pe.attribute=ue,ue&&ue.data&&(Pe.data=ue.data),z[de]=Pe,Y++}c.attributes=z,c.attributesNum=Y,c.index=ee}function x(){const D=c.newAttributes;for(let W=0,j=D.length;W<j;W++)D[W]=0}function S(D){L(D,0)}function L(D,W){const j=c.newAttributes,ee=c.enabledAttributes,z=c.attributeDivisors;j[D]=1,ee[D]===0&&(t.enableVertexAttribArray(D),ee[D]=1),z[D]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,W),z[D]=W)}function A(){const D=c.newAttributes,W=c.enabledAttributes;for(let j=0,ee=W.length;j<ee;j++)W[j]!==D[j]&&(t.disableVertexAttribArray(j),W[j]=0)}function R(D,W,j,ee,z,$,Y){Y===!0?t.vertexAttribIPointer(D,W,j,z,$):t.vertexAttribPointer(D,W,j,ee,z,$)}function F(D,W,j,ee){if(i.isWebGL2===!1&&(D.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const z=ee.attributes,$=j.getAttributes(),Y=W.defaultAttributeValues;for(const le in $){const de=$[le];if(de.location>=0){let J=z[le];if(J===void 0&&(le==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),le==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){const ue=J.normalized,Pe=J.itemSize,Be=n.get(J);if(Be===void 0)continue;const De=Be.buffer,st=Be.type,tt=Be.bytesPerElement,Xe=i.isWebGL2===!0&&(st===t.INT||st===t.UNSIGNED_INT||J.gpuType===$x);if(J.isInterleavedBufferAttribute){const He=J.data,I=He.stride,re=J.offset;if(He.isInstancedInterleavedBuffer){for(let ae=0;ae<de.locationSize;ae++)L(de.location+ae,He.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let ae=0;ae<de.locationSize;ae++)S(de.location+ae);t.bindBuffer(t.ARRAY_BUFFER,De);for(let ae=0;ae<de.locationSize;ae++)R(de.location+ae,Pe/de.locationSize,st,ue,I*tt,(re+Pe/de.locationSize*ae)*tt,Xe)}else{if(J.isInstancedBufferAttribute){for(let He=0;He<de.locationSize;He++)L(de.location+He,J.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let He=0;He<de.locationSize;He++)S(de.location+He);t.bindBuffer(t.ARRAY_BUFFER,De);for(let He=0;He<de.locationSize;He++)R(de.location+He,Pe/de.locationSize,st,ue,Pe*tt,Pe/de.locationSize*He*tt,Xe)}}else if(Y!==void 0){const ue=Y[le];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(de.location,ue);break;case 3:t.vertexAttrib3fv(de.location,ue);break;case 4:t.vertexAttrib4fv(de.location,ue);break;default:t.vertexAttrib1fv(de.location,ue)}}}}A()}function E(){X();for(const D in a){const W=a[D];for(const j in W){const ee=W[j];for(const z in ee)v(ee[z].object),delete ee[z];delete W[j]}delete a[D]}}function T(D){if(a[D.id]===void 0)return;const W=a[D.id];for(const j in W){const ee=W[j];for(const z in ee)v(ee[z].object),delete ee[z];delete W[j]}delete a[D.id]}function V(D){for(const W in a){const j=a[W];if(j[D.id]===void 0)continue;const ee=j[D.id];for(const z in ee)v(ee[z].object),delete ee[z];delete j[D.id]}}function X(){te(),u=!0,c!==l&&(c=l,p(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:X,resetDefaultState:te,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:S,disableUnusedAttributes:A}}function OT(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,h){if(h===0)return;let p,v;if(r)p=t,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,u,f,h),n.update(f,s,h)}function c(u,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<h;v++)this.render(u[v],f[v]);else{p.multiDrawArraysWEBGL(s,u,0,f,0,h);let v=0;for(let y=0;y<h;y++)v+=f[y];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function FT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,S=o||e.has("OES_texture_float"),L=x&&S,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:m,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:L,maxSamples:A}}function kT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Nr,a=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const m=s?0:i,x=m*4;let S=d.clippingState||null;l.value=S,S=u(v,h,x,p);for(let L=0;L!==x;++L)S[L]=n[L];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const d=p+y*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,S=p;x!==y;++x,S+=4)o.copy(f[x]).applyMatrix4(m,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function zT(t){let e=new WeakMap;function n(o,a){return a===ou?o.mapping=Go:a===rh&&(o.mapping=Wo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ou||a===rh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kw(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _p extends d_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const To=4,Gg=[.125,.215,.35,.446,.526,.582],ms=20,Hd=new _p,Wg=new Et;let Vd=null,Gd=0,Wd=0;const hs=(1+Math.sqrt(5))/2,so=1/hs,jg=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,hs,so),new U(0,hs,-so),new U(so,0,hs),new U(-so,0,hs),new U(hs,so,0),new U(-hs,so,0)];class Ua{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,Gd,Wd),e.scissorTest=!1,cc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Go||e.mapping===Wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:sl,format:Oi,colorSpace:yr,depthBuffer:!1},r=Xg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BT(s)),this._blurMaterial=HT(s,e,n)}return r}_compileMaterial(e){const n=new Ye(this._lodPlanes[0],e);this._renderer.compile(n,Hd)}_sceneToCubeUV(e,n,i,r){const a=new ti(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Wg),u.toneMapping=qr,u.autoClear=!1;const p=new Ji({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),v=new Ye(new ln,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(Wg),y=!0);for(let d=0;d<6;d++){const m=d%3;m===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):m===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;cc(r,m*x,d>2?x:0,x,x),u.setRenderTarget(r),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Go||e.mapping===Wo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;cc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Hd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jg[(r-1)%jg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ye(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ms-1),y=s/v,g=isFinite(s)?1+Math.floor(u*y):ms;g>ms&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ms}`);const d=[];let m=0;for(let R=0;R<ms;++R){const F=R/y,E=Math.exp(-F*F/2);d.push(E),R===0?m+=E:R<g&&(m+=2*E)}for(let R=0;R<d.length;R++)d[R]=d[R]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const S=this._sizeLods[r],L=3*S*(r>x-To?r-x+To:0),A=4*(this._cubeSize-S);cc(n,L,A,3*S,2*S),l.setRenderTarget(n),l.render(f,Hd)}}function BT(t){const e=[],n=[],i=[];let r=t;const s=t-To+1+Gg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-To?l=Gg[o-t+To-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,y=3,g=2,d=1,m=new Float32Array(y*v*p),x=new Float32Array(g*v*p),S=new Float32Array(d*v*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,F=A>2?0:-1,E=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];m.set(E,y*v*A),x.set(h,g*v*A);const T=[A,A,A,A,A,A];S.set(T,d*v*A)}const L=new mn;L.setAttribute("position",new Ti(m,y)),L.setAttribute("uv",new Ti(x,g)),L.setAttribute("faceIndex",new Ti(S,d)),e.push(L),r>To&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Xg(t,e,n){const i=new Ps(t,e,n);return i.texture.mapping=Lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function HT(t,e,n){const i=new Float32Array(ms),r=new U(0,1,0);return new Ls({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yp(),fragmentShader:`

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
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function $g(){return new Ls({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yp(),fragmentShader:`

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
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function Yg(){return new Ls({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function yp(){return`

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
	`}function VT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ou||l===rh,u=l===Go||l===Wo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Ua(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Ua(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function GT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function WT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const y=h.morphAttributes[v];for(let g=0,d=y.length;g<d;g++)e.remove(y[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const y=p[v];for(let g=0,d=y.length;g<d;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let y=0;if(p!==null){const m=p.array;y=p.version;for(let x=0,S=m.length;x<S;x+=3){const L=m[x+0],A=m[x+1],R=m[x+2];h.push(L,A,A,R,R,L)}}else if(v!==void 0){const m=v.array;y=v.version;for(let x=0,S=m.length/3-1;x<S;x+=3){const L=x+0,A=x+1,R=x+2;h.push(L,A,A,R,R,L)}}else return;const g=new(i_(h)?c_:l_)(h,1);g.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function jT(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,v){t.drawElements(s,v,a,p*l),n.update(v,s,1)}function f(p,v,y){if(y===0)return;let g,d;if(r)g=t,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](s,v,a,p*l,y),n.update(v,s,y)}function h(p,v,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<y;d++)this.render(p[d]/l,v[d]);else{g.multiDrawElementsWEBGL(s,v,0,a,p,0,y);let d=0;for(let m=0;m<y;m++)d+=v[m];n.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function XT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function $T(t,e){return t[0]-e[0]}function YT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function qT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new qt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=v!==void 0?v.length:0;let g=s.get(u);if(g===void 0||g.count!==y){let W=function(){te.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var p=W;g!==void 0&&g.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let E=0;x===!0&&(E=1),S===!0&&(E=2),L===!0&&(E=3);let T=u.attributes.position.count*E,V=1;T>e.maxTextureSize&&(V=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const X=new Float32Array(T*V*4*y),te=new o_(X,T,V,y);te.type=kr,te.needsUpdate=!0;const D=E*4;for(let j=0;j<y;j++){const ee=A[j],z=R[j],$=F[j],Y=T*V*4*j;for(let le=0;le<ee.count;le++){const de=le*D;x===!0&&(o.fromBufferAttribute(ee,le),X[Y+de+0]=o.x,X[Y+de+1]=o.y,X[Y+de+2]=o.z,X[Y+de+3]=0),S===!0&&(o.fromBufferAttribute(z,le),X[Y+de+4]=o.x,X[Y+de+5]=o.y,X[Y+de+6]=o.z,X[Y+de+7]=0),L===!0&&(o.fromBufferAttribute($,le),X[Y+de+8]=o.x,X[Y+de+9]=o.y,X[Y+de+10]=o.z,X[Y+de+11]=$.itemSize===4?o.w:1)}}g={count:y,texture:te,size:new Me(T,V)},s.set(u,g),u.addEventListener("dispose",W)}let d=0;for(let x=0;x<h.length;x++)d+=h[x];const m=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",m),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const v=h===void 0?0:h.length;let y=i[u.id];if(y===void 0||y.length!==v){y=[];for(let S=0;S<v;S++)y[S]=[S,0];i[u.id]=y}for(let S=0;S<v;S++){const L=y[S];L[0]=S,L[1]=h[S]}y.sort(YT);for(let S=0;S<8;S++)S<v&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort($T);const g=u.morphAttributes.position,d=u.morphAttributes.normal;let m=0;for(let S=0;S<8;S++){const L=a[S],A=L[0],R=L[1];A!==Number.MAX_SAFE_INTEGER&&R?(g&&u.getAttribute("morphTarget"+S)!==g[A]&&u.setAttribute("morphTarget"+S,g[A]),d&&u.getAttribute("morphNormal"+S)!==d[A]&&u.setAttribute("morphNormal"+S,d[A]),r[S]=R,m+=R):(g&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),d&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const x=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function ZT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class p_ extends Yn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:ws,u!==ws&&u!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ws&&(i=Fr),i===void 0&&u===jo&&(i=Ms),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const m_=new Yn,g_=new p_(1,1);g_.compareFunction=n_;const v_=new o_,x_=new Iw,__=new f_,qg=[],Zg=[],Kg=new Float32Array(16),Jg=new Float32Array(9),Qg=new Float32Array(4);function Ko(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=qg[r];if(s===void 0&&(s=new Float32Array(r),qg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function gn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function vn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Iu(t,e){let n=Zg[e];n===void 0&&(n=new Int32Array(e),Zg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function KT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;t.uniform2fv(this.addr,e),vn(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(gn(n,e))return;t.uniform3fv(this.addr,e),vn(n,e)}}function eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;t.uniform4fv(this.addr,e),vn(n,e)}}function tb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,i))return;Qg.set(i),t.uniformMatrix2fv(this.addr,!1,Qg),vn(n,i)}}function nb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,i))return;Jg.set(i),t.uniformMatrix3fv(this.addr,!1,Jg),vn(n,i)}}function ib(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,i))return;Kg.set(i),t.uniformMatrix4fv(this.addr,!1,Kg),vn(n,i)}}function rb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;t.uniform2iv(this.addr,e),vn(n,e)}}function ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gn(n,e))return;t.uniform3iv(this.addr,e),vn(n,e)}}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;t.uniform4iv(this.addr,e),vn(n,e)}}function lb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;t.uniform2uiv(this.addr,e),vn(n,e)}}function ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gn(n,e))return;t.uniform3uiv(this.addr,e),vn(n,e)}}function db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;t.uniform4uiv(this.addr,e),vn(n,e)}}function fb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?g_:m_;n.setTexture2D(e||s,r)}function hb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||x_,r)}function pb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||__,r)}function mb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||v_,r)}function gb(t){switch(t){case 5126:return KT;case 35664:return JT;case 35665:return QT;case 35666:return eb;case 35674:return tb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return rb;case 35667:case 35671:return sb;case 35668:case 35672:return ob;case 35669:case 35673:return ab;case 5125:return lb;case 36294:return cb;case 36295:return ub;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}function vb(t,e){t.uniform1fv(this.addr,e)}function xb(t,e){const n=Ko(e,this.size,2);t.uniform2fv(this.addr,n)}function _b(t,e){const n=Ko(e,this.size,3);t.uniform3fv(this.addr,n)}function yb(t,e){const n=Ko(e,this.size,4);t.uniform4fv(this.addr,n)}function Sb(t,e){const n=Ko(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Mb(t,e){const n=Ko(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function wb(t,e){const n=Ko(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Eb(t,e){t.uniform1iv(this.addr,e)}function Tb(t,e){t.uniform2iv(this.addr,e)}function bb(t,e){t.uniform3iv(this.addr,e)}function Ab(t,e){t.uniform4iv(this.addr,e)}function Cb(t,e){t.uniform1uiv(this.addr,e)}function Rb(t,e){t.uniform2uiv(this.addr,e)}function Pb(t,e){t.uniform3uiv(this.addr,e)}function Lb(t,e){t.uniform4uiv(this.addr,e)}function Nb(t,e,n){const i=this.cache,r=e.length,s=Iu(n,r);gn(i,s)||(t.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||m_,s[o])}function Db(t,e,n){const i=this.cache,r=e.length,s=Iu(n,r);gn(i,s)||(t.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||x_,s[o])}function Ib(t,e,n){const i=this.cache,r=e.length,s=Iu(n,r);gn(i,s)||(t.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||__,s[o])}function Ub(t,e,n){const i=this.cache,r=e.length,s=Iu(n,r);gn(i,s)||(t.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||v_,s[o])}function Ob(t){switch(t){case 5126:return vb;case 35664:return xb;case 35665:return _b;case 35666:return yb;case 35674:return Sb;case 35675:return Mb;case 35676:return wb;case 5124:case 35670:return Eb;case 35667:case 35671:return Tb;case 35668:case 35672:return bb;case 35669:case 35673:return Ab;case 5125:return Cb;case 36294:return Rb;case 36295:return Pb;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Nb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Ub}}class Fb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=gb(n.type)}}class kb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Ob(n.type)}}class zb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const jd=/(\w+)(\])?(\[|\.)?/g;function e0(t,e){t.seq.push(e),t.map[e.id]=e}function Bb(t,e,n){const i=t.name,r=i.length;for(jd.lastIndex=0;;){const s=jd.exec(i),o=jd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){e0(n,c===void 0?new Fb(a,t,e):new kb(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new zb(a),e0(n,f)),n=f}}}class Nc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Bb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function t0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Hb=37297;let Vb=0;function Gb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Wb(t){const e=Ot.getPrimaries(Ot.workingColorSpace),n=Ot.getPrimaries(t);let i;switch(e===n?i="":e===cu&&n===lu?i="LinearDisplayP3ToLinearSRGB":e===lu&&n===cu&&(i="LinearSRGBToLinearDisplayP3"),t){case yr:case Nu:return[i,"LinearTransferOETF"];case $t:case pp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function n0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Gb(t.getShaderSource(e),o)}else return r}function jb(t,e){const n=Wb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Xb(t,e){let n;switch(e){case jM:n="Linear";break;case XM:n="Reinhard";break;case $M:n="OptimizedCineon";break;case Xx:n="ACESFilmic";break;case qM:n="AgX";break;case YM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function $b(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bo).join(`
`)}function Yb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bo).join(`
`)}function qb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Zb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function bo(t){return t!==""}function i0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function r0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(t){return t.replace(Kb,Qb)}const Jb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Qb(t,e){let n=wt[e];if(n===void 0){const i=Jb.get(e);if(i!==void 0)n=wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uh(n)}const e2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function s0(t){return t.replace(e2,t2)}function t2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function o0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Gx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Wx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===cr&&(e="SHADOWMAP_TYPE_VSM"),e}function i2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Go:case Wo:e="ENVMAP_TYPE_CUBE";break;case Lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Wo:e="ENVMAP_MODE_REFRACTION";break}return e}function s2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case jx:e="ENVMAP_BLENDING_MULTIPLY";break;case GM:e="ENVMAP_BLENDING_MIX";break;case WM:e="ENVMAP_BLENDING_ADD";break}return e}function o2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function a2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=n2(n),c=i2(n),u=r2(n),f=s2(n),h=o2(n),p=n.isWebGL2?"":$b(n),v=Yb(n),y=qb(s),g=r.createProgram();let d,m,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(bo).join(`
`),d.length>0&&(d+=`
`),m=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(bo).join(`
`),m.length>0&&(m+=`
`)):(d=[o0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),m=[p,o0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qr?"#define TONE_MAPPING":"",n.toneMapping!==qr?wt.tonemapping_pars_fragment:"",n.toneMapping!==qr?Xb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,jb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bo).join(`
`)),o=uh(o),o=i0(o,n),o=r0(o,n),a=uh(a),a=i0(a,n),a=r0(a,n),o=s0(o),a=s0(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=x+d+o,L=x+m+a,A=t0(r,r.VERTEX_SHADER,S),R=t0(r,r.FRAGMENT_SHADER,L);r.attachShader(g,A),r.attachShader(g,R),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function F(X){if(t.debug.checkShaderErrors){const te=r.getProgramInfoLog(g).trim(),D=r.getShaderInfoLog(A).trim(),W=r.getShaderInfoLog(R).trim();let j=!0,ee=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,A,R);else{const z=n0(r,A,"vertex"),$=n0(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+z+`
`+$)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(D===""||W==="")&&(ee=!1);ee&&(X.diagnostics={runnable:j,programLog:te,vertexShader:{log:D,prefix:d},fragmentShader:{log:W,prefix:m}})}r.deleteShader(A),r.deleteShader(R),E=new Nc(r,g),T=Zb(r,g)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(g,Hb)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Vb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=R,this}let l2=0;class c2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new u2(e),n.set(e,i)),i}}class u2{constructor(e){this.id=l2++,this.code=e,this.usedTimes=0}}function d2(t,e,n,i,r,s,o){const a=new vp,l=new c2,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function g(E,T,V,X,te){const D=X.fog,W=te.geometry,j=E.isMeshStandardMaterial?X.environment:null,ee=(E.isMeshStandardMaterial?n:e).get(E.envMap||j),z=ee&&ee.mapping===Lu?ee.image.height:null,$=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Y=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=Y!==void 0?Y.length:0;let de=0;W.morphAttributes.position!==void 0&&(de=1),W.morphAttributes.normal!==void 0&&(de=2),W.morphAttributes.color!==void 0&&(de=3);let J,ue,Pe,Be;if($){const xn=qi[$];J=xn.vertexShader,ue=xn.fragmentShader}else J=E.vertexShader,ue=E.fragmentShader,l.update(E),Pe=l.getVertexShaderID(E),Be=l.getFragmentShaderID(E);const De=t.getRenderTarget(),st=te.isInstancedMesh===!0,tt=te.isBatchedMesh===!0,Xe=!!E.map,He=!!E.matcap,I=!!ee,re=!!E.aoMap,ae=!!E.lightMap,he=!!E.bumpMap,se=!!E.normalMap,Je=!!E.displacementMap,Ie=!!E.emissiveMap,C=!!E.metalnessMap,w=!!E.roughnessMap,H=E.anisotropy>0,me=E.clearcoat>0,ge=E.iridescence>0,fe=E.sheen>0,je=E.transmission>0,Ae=H&&!!E.anisotropyMap,ze=me&&!!E.clearcoatMap,Ue=me&&!!E.clearcoatNormalMap,ut=me&&!!E.clearcoatRoughnessMap,ne=ge&&!!E.iridescenceMap,Tt=ge&&!!E.iridescenceThicknessMap,dt=fe&&!!E.sheenColorMap,ht=fe&&!!E.sheenRoughnessMap,$e=!!E.specularMap,Ve=!!E.specularColorMap,nt=!!E.specularIntensityMap,Rt=je&&!!E.transmissionMap,zt=je&&!!E.thicknessMap,gt=!!E.gradientMap,Te=!!E.alphaMap,O=E.alphaTest>0,Le=!!E.alphaHash,Ne=!!E.extensions,lt=!!W.attributes.uv1,rt=!!W.attributes.uv2,Pt=!!W.attributes.uv3;let Ct=qr;return E.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Ct=t.toneMapping),{isWebGL2:u,shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:J,fragmentShader:ue,defines:E.defines,customVertexShaderID:Pe,customFragmentShaderID:Be,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:tt,instancing:st,instancingColor:st&&te.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:De===null?t.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:yr,map:Xe,matcap:He,envMap:I,envMapMode:I&&ee.mapping,envMapCubeUVHeight:z,aoMap:re,lightMap:ae,bumpMap:he,normalMap:se,displacementMap:h&&Je,emissiveMap:Ie,normalMapObjectSpace:se&&E.normalMapType===aw,normalMapTangentSpace:se&&E.normalMapType===t_,metalnessMap:C,roughnessMap:w,anisotropy:H,anisotropyMap:Ae,clearcoat:me,clearcoatMap:ze,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ut,iridescence:ge,iridescenceMap:ne,iridescenceThicknessMap:Tt,sheen:fe,sheenColorMap:dt,sheenRoughnessMap:ht,specularMap:$e,specularColorMap:Ve,specularIntensityMap:nt,transmission:je,transmissionMap:Rt,thicknessMap:zt,gradientMap:gt,opaque:E.transparent===!1&&E.blending===Io,alphaMap:Te,alphaTest:O,alphaHash:Le,combine:E.combine,mapUv:Xe&&y(E.map.channel),aoMapUv:re&&y(E.aoMap.channel),lightMapUv:ae&&y(E.lightMap.channel),bumpMapUv:he&&y(E.bumpMap.channel),normalMapUv:se&&y(E.normalMap.channel),displacementMapUv:Je&&y(E.displacementMap.channel),emissiveMapUv:Ie&&y(E.emissiveMap.channel),metalnessMapUv:C&&y(E.metalnessMap.channel),roughnessMapUv:w&&y(E.roughnessMap.channel),anisotropyMapUv:Ae&&y(E.anisotropyMap.channel),clearcoatMapUv:ze&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:ht&&y(E.sheenRoughnessMap.channel),specularMapUv:$e&&y(E.specularMap.channel),specularColorMapUv:Ve&&y(E.specularColorMap.channel),specularIntensityMapUv:nt&&y(E.specularIntensityMap.channel),transmissionMapUv:Rt&&y(E.transmissionMap.channel),thicknessMapUv:zt&&y(E.thicknessMap.channel),alphaMapUv:Te&&y(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(se||H),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:lt,vertexUv2s:rt,vertexUv3s:Pt,pointsUvs:te.isPoints===!0&&!!W.attributes.uv&&(Xe||Te),fog:!!D,useFog:E.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:de,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ct,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Xe&&E.map.isVideoTexture===!0&&Ot.getTransfer(E.map.colorSpace)===Wt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ui,flipSided:E.side===$n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Ne&&E.extensions.derivatives===!0,extensionFragDepth:Ne&&E.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)T.push(V),T.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(m(T,E),x(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function m(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function x(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function S(E){const T=v[E.type];let V;if(T){const X=qi[T];V=$w.clone(X.uniforms)}else V=E.uniforms;return V}function L(E,T){let V;for(let X=0,te=c.length;X<te;X++){const D=c[X];if(D.cacheKey===T){V=D,++V.usedTimes;break}}return V===void 0&&(V=new a2(t,T,E,s),c.push(V)),V}function A(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function R(E){l.remove(E)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:S,acquireProgram:L,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:F}}function f2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function h2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function a0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function l0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,v,y,g){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:y,group:g},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=y,d.group=g),e++,d}function a(f,h,p,v,y,g){const d=o(f,h,p,v,y,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,v,y,g){const d=o(f,h,p,v,y,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||h2),i.length>1&&i.sort(h||a0),r.length>1&&r.sort(h||a0)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function p2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new l0,t.set(i,[o])):r>=s.length?(o=new l0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function m2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Et};break;case"SpotLight":n={position:new U,direction:new U,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function g2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let v2=0;function x2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _2(t,e){const n=new m2,i=g2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,o=new en,a=new en;function l(u,f){let h=0,p=0,v=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let y=0,g=0,d=0,m=0,x=0,S=0,L=0,A=0,R=0,F=0,E=0;u.sort(x2);const T=f===!0?Math.PI:1;for(let X=0,te=u.length;X<te;X++){const D=u[X],W=D.color,j=D.intensity,ee=D.distance,z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=W.r*j*T,p+=W.g*j*T,v+=W.b*j*T;else if(D.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(D.sh.coefficients[$],j);E++}else if(D.isDirectionalLight){const $=n.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const Y=D.shadow,le=i.get(D);le.shadowBias=Y.bias,le.shadowNormalBias=Y.normalBias,le.shadowRadius=Y.radius,le.shadowMapSize=Y.mapSize,r.directionalShadow[y]=le,r.directionalShadowMap[y]=z,r.directionalShadowMatrix[y]=D.shadow.matrix,S++}r.directional[y]=$,y++}else if(D.isSpotLight){const $=n.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(W).multiplyScalar(j*T),$.distance=ee,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,r.spot[d]=$;const Y=D.shadow;if(D.map&&(r.spotLightMap[R]=D.map,R++,Y.updateMatrices(D),D.castShadow&&F++),r.spotLightMatrix[d]=Y.matrix,D.castShadow){const le=i.get(D);le.shadowBias=Y.bias,le.shadowNormalBias=Y.normalBias,le.shadowRadius=Y.radius,le.shadowMapSize=Y.mapSize,r.spotShadow[d]=le,r.spotShadowMap[d]=z,A++}d++}else if(D.isRectAreaLight){const $=n.get(D);$.color.copy(W).multiplyScalar(j),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),r.rectArea[m]=$,m++}else if(D.isPointLight){const $=n.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*T),$.distance=D.distance,$.decay=D.decay,D.castShadow){const Y=D.shadow,le=i.get(D);le.shadowBias=Y.bias,le.shadowNormalBias=Y.normalBias,le.shadowRadius=Y.radius,le.shadowMapSize=Y.mapSize,le.shadowCameraNear=Y.camera.near,le.shadowCameraFar=Y.camera.far,r.pointShadow[g]=le,r.pointShadowMap[g]=z,r.pointShadowMatrix[g]=D.shadow.matrix,L++}r.point[g]=$,g++}else if(D.isHemisphereLight){const $=n.get(D);$.skyColor.copy(D.color).multiplyScalar(j*T),$.groundColor.copy(D.groundColor).multiplyScalar(j*T),r.hemi[x]=$,x++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const V=r.hash;(V.directionalLength!==y||V.pointLength!==g||V.spotLength!==d||V.rectAreaLength!==m||V.hemiLength!==x||V.numDirectionalShadows!==S||V.numPointShadows!==L||V.numSpotShadows!==A||V.numSpotMaps!==R||V.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=m,r.point.length=g,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=A+R-F,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=E,V.directionalLength=y,V.pointLength=g,V.spotLength=d,V.rectAreaLength=m,V.hemiLength=x,V.numDirectionalShadows=S,V.numPointShadows=L,V.numSpotShadows=A,V.numSpotMaps=R,V.numLightProbes=E,r.version=v2++)}function c(u,f){let h=0,p=0,v=0,y=0,g=0;const d=f.matrixWorldInverse;for(let m=0,x=u.length;m<x;m++){const S=u[m];if(S.isDirectionalLight){const L=r.directional[h];L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),h++}else if(S.isSpotLight){const L=r.spot[v];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),v++}else if(S.isRectAreaLight){const L=r.rectArea[y];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const L=r.point[p];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const L=r.hemi[g];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:r}}function c0(t,e){const n=new _2(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function y2(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new c0(t,e),n.set(s,[l])):o>=a.length?(l=new c0(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class S2 extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M2 extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const w2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E2=`uniform sampler2D shadow_pass;
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
}`;function T2(t,e,n){let i=new xp;const r=new Me,s=new Me,o=new qt,a=new S2({depthPacking:ow}),l=new M2,c={},u=n.maxTextureSize,f={[es]:$n,[$n]:es,[ui]:ui},h=new Ls({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:w2,fragmentShader:E2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new mn;v.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ye(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gx;let d=this.type;this.render=function(A,R,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),V=t.getActiveMipmapLevel(),X=t.state;X.setBlending(Yr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const te=d!==cr&&this.type===cr,D=d===cr&&this.type!==cr;for(let W=0,j=A.length;W<j;W++){const ee=A[W],z=ee.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const $=z.getFrameExtents();if(r.multiply($),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,z.mapSize.y=s.y)),z.map===null||te===!0||D===!0){const le=this.type!==cr?{minFilter:Wn,magFilter:Wn}:{};z.map!==null&&z.map.dispose(),z.map=new Ps(r.x,r.y,le),z.map.texture.name=ee.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const Y=z.getViewportCount();for(let le=0;le<Y;le++){const de=z.getViewport(le);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),X.viewport(o),z.updateMatrices(ee,le),i=z.getFrustum(),S(R,F,z.camera,ee,this.type)}z.isPointLightShadow!==!0&&this.type===cr&&m(z,F),z.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(E,T,V)};function m(A,R){const F=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ps(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,F,h,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,F,p,y,null)}function x(A,R,F,E){let T=null;const V=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(V!==void 0)T=V;else if(T=F.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const X=T.uuid,te=R.uuid;let D=c[X];D===void 0&&(D={},c[X]=D);let W=D[te];W===void 0&&(W=T.clone(),D[te]=W,R.addEventListener("dispose",L)),T=W}if(T.visible=R.visible,T.wireframe=R.wireframe,E===cr?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:f[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const X=t.properties.get(T);X.light=F}return T}function S(A,R,F,E,T){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===cr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const te=e.update(A),D=A.material;if(Array.isArray(D)){const W=te.groups;for(let j=0,ee=W.length;j<ee;j++){const z=W[j],$=D[z.materialIndex];if($&&$.visible){const Y=x(A,$,E,T);A.onBeforeShadow(t,A,R,F,te,Y,z),t.renderBufferDirect(F,null,te,Y,A,z),A.onAfterShadow(t,A,R,F,te,Y,z)}}}else if(D.visible){const W=x(A,D,E,T);A.onBeforeShadow(t,A,R,F,te,W,null),t.renderBufferDirect(F,null,te,W,A,null),A.onAfterShadow(t,A,R,F,te,W,null)}}const X=A.children;for(let te=0,D=X.length;te<D;te++)S(X[te],R,F,E,T)}function L(A){A.target.removeEventListener("dispose",L);for(const F in c){const E=c[F],T=A.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function b2(t,e,n){const i=n.isWebGL2;function r(){let O=!1;const Le=new qt;let Ne=null;const lt=new qt(0,0,0,0);return{setMask:function(rt){Ne!==rt&&!O&&(t.colorMask(rt,rt,rt,rt),Ne=rt)},setLocked:function(rt){O=rt},setClear:function(rt,Pt,Ct,sn,xn){xn===!0&&(rt*=sn,Pt*=sn,Ct*=sn),Le.set(rt,Pt,Ct,sn),lt.equals(Le)===!1&&(t.clearColor(rt,Pt,Ct,sn),lt.copy(Le))},reset:function(){O=!1,Ne=null,lt.set(-1,0,0,0)}}}function s(){let O=!1,Le=null,Ne=null,lt=null;return{setTest:function(rt){rt?tt(t.DEPTH_TEST):Xe(t.DEPTH_TEST)},setMask:function(rt){Le!==rt&&!O&&(t.depthMask(rt),Le=rt)},setFunc:function(rt){if(Ne!==rt){switch(rt){case OM:t.depthFunc(t.NEVER);break;case FM:t.depthFunc(t.ALWAYS);break;case kM:t.depthFunc(t.LESS);break;case su:t.depthFunc(t.LEQUAL);break;case zM:t.depthFunc(t.EQUAL);break;case BM:t.depthFunc(t.GEQUAL);break;case HM:t.depthFunc(t.GREATER);break;case VM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ne=rt}},setLocked:function(rt){O=rt},setClear:function(rt){lt!==rt&&(t.clearDepth(rt),lt=rt)},reset:function(){O=!1,Le=null,Ne=null,lt=null}}}function o(){let O=!1,Le=null,Ne=null,lt=null,rt=null,Pt=null,Ct=null,sn=null,xn=null;return{setTest:function(It){O||(It?tt(t.STENCIL_TEST):Xe(t.STENCIL_TEST))},setMask:function(It){Le!==It&&!O&&(t.stencilMask(It),Le=It)},setFunc:function(It,En,vt){(Ne!==It||lt!==En||rt!==vt)&&(t.stencilFunc(It,En,vt),Ne=It,lt=En,rt=vt)},setOp:function(It,En,vt){(Pt!==It||Ct!==En||sn!==vt)&&(t.stencilOp(It,En,vt),Pt=It,Ct=En,sn=vt)},setLocked:function(It){O=It},setClear:function(It){xn!==It&&(t.clearStencil(It),xn=It)},reset:function(){O=!1,Le=null,Ne=null,lt=null,rt=null,Pt=null,Ct=null,sn=null,xn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,y=[],g=null,d=!1,m=null,x=null,S=null,L=null,A=null,R=null,F=null,E=new Et(0,0,0),T=0,V=!1,X=null,te=null,D=null,W=null,j=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=$>=2);let le=null,de={};const J=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),Pe=new qt().fromArray(J),Be=new qt().fromArray(ue);function De(O,Le,Ne,lt){const rt=new Uint8Array(4),Pt=t.createTexture();t.bindTexture(O,Pt),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ct=0;Ct<Ne;Ct++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(Le,0,t.RGBA,1,1,lt,0,t.RGBA,t.UNSIGNED_BYTE,rt):t.texImage2D(Le+Ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,rt);return Pt}const st={};st[t.TEXTURE_2D]=De(t.TEXTURE_2D,t.TEXTURE_2D,1),st[t.TEXTURE_CUBE_MAP]=De(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(st[t.TEXTURE_2D_ARRAY]=De(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),st[t.TEXTURE_3D]=De(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),tt(t.DEPTH_TEST),l.setFunc(su),Ie(!1),C(Xm),tt(t.CULL_FACE),se(Yr);function tt(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function Xe(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function He(O,Le){return p[O]!==Le?(t.bindFramebuffer(O,Le),p[O]=Le,i&&(O===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Le),O===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Le)),!0):!1}function I(O,Le){let Ne=y,lt=!1;if(O)if(Ne=v.get(Le),Ne===void 0&&(Ne=[],v.set(Le,Ne)),O.isWebGLMultipleRenderTargets){const rt=O.texture;if(Ne.length!==rt.length||Ne[0]!==t.COLOR_ATTACHMENT0){for(let Pt=0,Ct=rt.length;Pt<Ct;Pt++)Ne[Pt]=t.COLOR_ATTACHMENT0+Pt;Ne.length=rt.length,lt=!0}}else Ne[0]!==t.COLOR_ATTACHMENT0&&(Ne[0]=t.COLOR_ATTACHMENT0,lt=!0);else Ne[0]!==t.BACK&&(Ne[0]=t.BACK,lt=!0);lt&&(n.isWebGL2?t.drawBuffers(Ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ne))}function re(O){return g!==O?(t.useProgram(O),g=O,!0):!1}const ae={[ps]:t.FUNC_ADD,[SM]:t.FUNC_SUBTRACT,[MM]:t.FUNC_REVERSE_SUBTRACT};if(i)ae[Zm]=t.MIN,ae[Km]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(ae[Zm]=O.MIN_EXT,ae[Km]=O.MAX_EXT)}const he={[wM]:t.ZERO,[EM]:t.ONE,[TM]:t.SRC_COLOR,[nh]:t.SRC_ALPHA,[LM]:t.SRC_ALPHA_SATURATE,[RM]:t.DST_COLOR,[AM]:t.DST_ALPHA,[bM]:t.ONE_MINUS_SRC_COLOR,[ih]:t.ONE_MINUS_SRC_ALPHA,[PM]:t.ONE_MINUS_DST_COLOR,[CM]:t.ONE_MINUS_DST_ALPHA,[NM]:t.CONSTANT_COLOR,[DM]:t.ONE_MINUS_CONSTANT_COLOR,[IM]:t.CONSTANT_ALPHA,[UM]:t.ONE_MINUS_CONSTANT_ALPHA};function se(O,Le,Ne,lt,rt,Pt,Ct,sn,xn,It){if(O===Yr){d===!0&&(Xe(t.BLEND),d=!1);return}if(d===!1&&(tt(t.BLEND),d=!0),O!==yM){if(O!==m||It!==V){if((x!==ps||A!==ps)&&(t.blendEquation(t.FUNC_ADD),x=ps,A=ps),It)switch(O){case Io:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $m:t.blendFunc(t.ONE,t.ONE);break;case Ym:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Io:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $m:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ym:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,L=null,R=null,F=null,E.set(0,0,0),T=0,m=O,V=It}return}rt=rt||Le,Pt=Pt||Ne,Ct=Ct||lt,(Le!==x||rt!==A)&&(t.blendEquationSeparate(ae[Le],ae[rt]),x=Le,A=rt),(Ne!==S||lt!==L||Pt!==R||Ct!==F)&&(t.blendFuncSeparate(he[Ne],he[lt],he[Pt],he[Ct]),S=Ne,L=lt,R=Pt,F=Ct),(sn.equals(E)===!1||xn!==T)&&(t.blendColor(sn.r,sn.g,sn.b,xn),E.copy(sn),T=xn),m=O,V=!1}function Je(O,Le){O.side===ui?Xe(t.CULL_FACE):tt(t.CULL_FACE);let Ne=O.side===$n;Le&&(Ne=!Ne),Ie(Ne),O.blending===Io&&O.transparent===!1?se(Yr):se(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const lt=O.stencilWrite;c.setTest(lt),lt&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),H(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?tt(t.SAMPLE_ALPHA_TO_COVERAGE):Xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(O){X!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),X=O)}function C(O){O!==xM?(tt(t.CULL_FACE),O!==te&&(O===Xm?t.cullFace(t.BACK):O===_M?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Xe(t.CULL_FACE),te=O}function w(O){O!==D&&(z&&t.lineWidth(O),D=O)}function H(O,Le,Ne){O?(tt(t.POLYGON_OFFSET_FILL),(W!==Le||j!==Ne)&&(t.polygonOffset(Le,Ne),W=Le,j=Ne)):Xe(t.POLYGON_OFFSET_FILL)}function me(O){O?tt(t.SCISSOR_TEST):Xe(t.SCISSOR_TEST)}function ge(O){O===void 0&&(O=t.TEXTURE0+ee-1),le!==O&&(t.activeTexture(O),le=O)}function fe(O,Le,Ne){Ne===void 0&&(le===null?Ne=t.TEXTURE0+ee-1:Ne=le);let lt=de[Ne];lt===void 0&&(lt={type:void 0,texture:void 0},de[Ne]=lt),(lt.type!==O||lt.texture!==Le)&&(le!==Ne&&(t.activeTexture(Ne),le=Ne),t.bindTexture(O,Le||st[O]),lt.type=O,lt.texture=Le)}function je(){const O=de[le];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ae(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(O){Pe.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Pe.copy(O))}function Rt(O){Be.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Be.copy(O))}function zt(O,Le){let Ne=f.get(Le);Ne===void 0&&(Ne=new WeakMap,f.set(Le,Ne));let lt=Ne.get(O);lt===void 0&&(lt=t.getUniformBlockIndex(Le,O.name),Ne.set(O,lt))}function gt(O,Le){const lt=f.get(Le).get(O);u.get(Le)!==lt&&(t.uniformBlockBinding(Le,lt,O.__bindingPointIndex),u.set(Le,lt))}function Te(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},le=null,de={},p={},v=new WeakMap,y=[],g=null,d=!1,m=null,x=null,S=null,L=null,A=null,R=null,F=null,E=new Et(0,0,0),T=0,V=!1,X=null,te=null,D=null,W=null,j=null,Pe.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:tt,disable:Xe,bindFramebuffer:He,drawBuffers:I,useProgram:re,setBlending:se,setMaterial:Je,setFlipSided:Ie,setCullFace:C,setLineWidth:w,setPolygonOffset:H,setScissorTest:me,activeTexture:ge,bindTexture:fe,unbindTexture:je,compressedTexImage2D:Ae,compressedTexImage3D:ze,texImage2D:$e,texImage3D:Ve,updateUBOMapping:zt,uniformBlockBinding:gt,texStorage2D:dt,texStorage3D:ht,texSubImage2D:Ue,texSubImage3D:ut,compressedTexSubImage2D:ne,compressedTexSubImage3D:Tt,scissor:nt,viewport:Rt,reset:Te}}function A2(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,w){return p?new OffscreenCanvas(C,w):al("canvas")}function y(C,w,H,me){let ge=1;if((C.width>me||C.height>me)&&(ge=me/Math.max(C.width,C.height)),ge<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const fe=w?du:Math.floor,je=fe(ge*C.width),Ae=fe(ge*C.height);f===void 0&&(f=v(je,Ae));const ze=H?v(je,Ae):f;return ze.width=je,ze.height=Ae,ze.getContext("2d").drawImage(C,0,0,je,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+je+"x"+Ae+")."),ze}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return ch(C.width)&&ch(C.height)}function d(C){return a?!1:C.wrapS!==di||C.wrapT!==di||C.minFilter!==Wn&&C.minFilter!==jn}function m(C,w){return C.generateMipmaps&&w&&C.minFilter!==Wn&&C.minFilter!==jn}function x(C){t.generateMipmap(C)}function S(C,w,H,me,ge=!1){if(a===!1)return w;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe=w;if(w===t.RED&&(H===t.FLOAT&&(fe=t.R32F),H===t.HALF_FLOAT&&(fe=t.R16F),H===t.UNSIGNED_BYTE&&(fe=t.R8)),w===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(fe=t.R8UI),H===t.UNSIGNED_SHORT&&(fe=t.R16UI),H===t.UNSIGNED_INT&&(fe=t.R32UI),H===t.BYTE&&(fe=t.R8I),H===t.SHORT&&(fe=t.R16I),H===t.INT&&(fe=t.R32I)),w===t.RG&&(H===t.FLOAT&&(fe=t.RG32F),H===t.HALF_FLOAT&&(fe=t.RG16F),H===t.UNSIGNED_BYTE&&(fe=t.RG8)),w===t.RGBA){const je=ge?au:Ot.getTransfer(me);H===t.FLOAT&&(fe=t.RGBA32F),H===t.HALF_FLOAT&&(fe=t.RGBA16F),H===t.UNSIGNED_BYTE&&(fe=je===Wt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(fe=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(fe=t.RGB5_A1)}return(fe===t.R16F||fe===t.R32F||fe===t.RG16F||fe===t.RG32F||fe===t.RGBA16F||fe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function L(C,w,H){return m(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==Wn&&C.minFilter!==jn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function A(C){return C===Wn||C===Jm||C===xd?t.NEAREST:t.LINEAR}function R(C){const w=C.target;w.removeEventListener("dispose",R),E(w),w.isVideoTexture&&u.delete(w)}function F(C){const w=C.target;w.removeEventListener("dispose",F),V(w)}function E(C){const w=i.get(C);if(w.__webglInit===void 0)return;const H=C.source,me=h.get(H);if(me){const ge=me[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&T(C),Object.keys(me).length===0&&h.delete(H)}i.remove(C)}function T(C){const w=i.get(C);t.deleteTexture(w.__webglTexture);const H=C.source,me=h.get(H);delete me[w.__cacheKey],o.memory.textures--}function V(C){const w=C.texture,H=i.get(C),me=i.get(w);if(me.__webglTexture!==void 0&&(t.deleteTexture(me.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(H.__webglFramebuffer[ge]))for(let fe=0;fe<H.__webglFramebuffer[ge].length;fe++)t.deleteFramebuffer(H.__webglFramebuffer[ge][fe]);else t.deleteFramebuffer(H.__webglFramebuffer[ge]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ge])}else{if(Array.isArray(H.__webglFramebuffer))for(let ge=0;ge<H.__webglFramebuffer.length;ge++)t.deleteFramebuffer(H.__webglFramebuffer[ge]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ge=0;ge<H.__webglColorRenderbuffer.length;ge++)H.__webglColorRenderbuffer[ge]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ge]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ge=0,fe=w.length;ge<fe;ge++){const je=i.get(w[ge]);je.__webglTexture&&(t.deleteTexture(je.__webglTexture),o.memory.textures--),i.remove(w[ge])}i.remove(w),i.remove(C)}let X=0;function te(){X=0}function D(){const C=X;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),X+=1,C}function W(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function j(C,w){const H=i.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const me=C.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(H,C,w);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+w)}function ee(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Pe(H,C,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+w)}function z(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Pe(H,C,w);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+w)}function $(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Be(H,C,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+w)}const Y={[sh]:t.REPEAT,[di]:t.CLAMP_TO_EDGE,[oh]:t.MIRRORED_REPEAT},le={[Wn]:t.NEAREST,[Jm]:t.NEAREST_MIPMAP_NEAREST,[xd]:t.NEAREST_MIPMAP_LINEAR,[jn]:t.LINEAR,[ZM]:t.LINEAR_MIPMAP_NEAREST,[rl]:t.LINEAR_MIPMAP_LINEAR},de={[lw]:t.NEVER,[pw]:t.ALWAYS,[cw]:t.LESS,[n_]:t.LEQUAL,[uw]:t.EQUAL,[hw]:t.GEQUAL,[dw]:t.GREATER,[fw]:t.NOTEQUAL};function J(C,w,H){if(H?(t.texParameteri(C,t.TEXTURE_WRAP_S,Y[w.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Y[w.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Y[w.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,le[w.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,le[w.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==di||w.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,A(w.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,A(w.minFilter)),w.minFilter!==Wn&&w.minFilter!==jn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,de[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Wn||w.minFilter!==xd&&w.minFilter!==rl||w.type===kr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===sl&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(C,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ue(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",R));const me=w.source;let ge=h.get(me);ge===void 0&&(ge={},h.set(me,ge));const fe=W(w);if(fe!==C.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ge[fe].usedTimes++;const je=ge[C.__cacheKey];je!==void 0&&(ge[C.__cacheKey].usedTimes--,je.usedTimes===0&&T(w)),C.__cacheKey=fe,C.__webglTexture=ge[fe].texture}return H}function Pe(C,w,H){let me=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=t.TEXTURE_3D);const ge=ue(C,w),fe=w.source;n.bindTexture(me,C.__webglTexture,t.TEXTURE0+H);const je=i.get(fe);if(fe.version!==je.__version||ge===!0){n.activeTexture(t.TEXTURE0+H);const Ae=Ot.getPrimaries(Ot.workingColorSpace),ze=w.colorSpace===Mi?null:Ot.getPrimaries(w.colorSpace),Ue=w.colorSpace===Mi||Ae===ze?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ut=d(w)&&g(w.image)===!1;let ne=y(w.image,ut,!1,r.maxTextureSize);ne=Ie(w,ne);const Tt=g(ne)||a,dt=s.convert(w.format,w.colorSpace);let ht=s.convert(w.type),$e=S(w.internalFormat,dt,ht,w.colorSpace,w.isVideoTexture);J(me,w,Tt);let Ve;const nt=w.mipmaps,Rt=a&&w.isVideoTexture!==!0&&$e!==Qx,zt=je.__version===void 0||ge===!0,gt=L(w,ne,Tt);if(w.isDepthTexture)$e=t.DEPTH_COMPONENT,a?w.type===kr?$e=t.DEPTH_COMPONENT32F:w.type===Fr?$e=t.DEPTH_COMPONENT24:w.type===Ms?$e=t.DEPTH24_STENCIL8:$e=t.DEPTH_COMPONENT16:w.type===kr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ws&&$e===t.DEPTH_COMPONENT&&w.type!==hp&&w.type!==Fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Fr,ht=s.convert(w.type)),w.format===jo&&$e===t.DEPTH_COMPONENT&&($e=t.DEPTH_STENCIL,w.type!==Ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ms,ht=s.convert(w.type))),zt&&(Rt?n.texStorage2D(t.TEXTURE_2D,1,$e,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,$e,ne.width,ne.height,0,dt,ht,null));else if(w.isDataTexture)if(nt.length>0&&Tt){Rt&&zt&&n.texStorage2D(t.TEXTURE_2D,gt,$e,nt[0].width,nt[0].height);for(let Te=0,O=nt.length;Te<O;Te++)Ve=nt[Te],Rt?n.texSubImage2D(t.TEXTURE_2D,Te,0,0,Ve.width,Ve.height,dt,ht,Ve.data):n.texImage2D(t.TEXTURE_2D,Te,$e,Ve.width,Ve.height,0,dt,ht,Ve.data);w.generateMipmaps=!1}else Rt?(zt&&n.texStorage2D(t.TEXTURE_2D,gt,$e,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,dt,ht,ne.data)):n.texImage2D(t.TEXTURE_2D,0,$e,ne.width,ne.height,0,dt,ht,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Rt&&zt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,gt,$e,nt[0].width,nt[0].height,ne.depth);for(let Te=0,O=nt.length;Te<O;Te++)Ve=nt[Te],w.format!==Oi?dt!==null?Rt?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Te,0,0,0,Ve.width,Ve.height,ne.depth,dt,Ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Te,$e,Ve.width,Ve.height,ne.depth,0,Ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Te,0,0,0,Ve.width,Ve.height,ne.depth,dt,ht,Ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Te,$e,Ve.width,Ve.height,ne.depth,0,dt,ht,Ve.data)}else{Rt&&zt&&n.texStorage2D(t.TEXTURE_2D,gt,$e,nt[0].width,nt[0].height);for(let Te=0,O=nt.length;Te<O;Te++)Ve=nt[Te],w.format!==Oi?dt!==null?Rt?n.compressedTexSubImage2D(t.TEXTURE_2D,Te,0,0,Ve.width,Ve.height,dt,Ve.data):n.compressedTexImage2D(t.TEXTURE_2D,Te,$e,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?n.texSubImage2D(t.TEXTURE_2D,Te,0,0,Ve.width,Ve.height,dt,ht,Ve.data):n.texImage2D(t.TEXTURE_2D,Te,$e,Ve.width,Ve.height,0,dt,ht,Ve.data)}else if(w.isDataArrayTexture)Rt?(zt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,gt,$e,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,dt,ht,ne.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,$e,ne.width,ne.height,ne.depth,0,dt,ht,ne.data);else if(w.isData3DTexture)Rt?(zt&&n.texStorage3D(t.TEXTURE_3D,gt,$e,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,dt,ht,ne.data)):n.texImage3D(t.TEXTURE_3D,0,$e,ne.width,ne.height,ne.depth,0,dt,ht,ne.data);else if(w.isFramebufferTexture){if(zt)if(Rt)n.texStorage2D(t.TEXTURE_2D,gt,$e,ne.width,ne.height);else{let Te=ne.width,O=ne.height;for(let Le=0;Le<gt;Le++)n.texImage2D(t.TEXTURE_2D,Le,$e,Te,O,0,dt,ht,null),Te>>=1,O>>=1}}else if(nt.length>0&&Tt){Rt&&zt&&n.texStorage2D(t.TEXTURE_2D,gt,$e,nt[0].width,nt[0].height);for(let Te=0,O=nt.length;Te<O;Te++)Ve=nt[Te],Rt?n.texSubImage2D(t.TEXTURE_2D,Te,0,0,dt,ht,Ve):n.texImage2D(t.TEXTURE_2D,Te,$e,dt,ht,Ve);w.generateMipmaps=!1}else Rt?(zt&&n.texStorage2D(t.TEXTURE_2D,gt,$e,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,dt,ht,ne)):n.texImage2D(t.TEXTURE_2D,0,$e,dt,ht,ne);m(w,Tt)&&x(me),je.__version=fe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Be(C,w,H){if(w.image.length!==6)return;const me=ue(C,w),ge=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const fe=i.get(ge);if(ge.version!==fe.__version||me===!0){n.activeTexture(t.TEXTURE0+H);const je=Ot.getPrimaries(Ot.workingColorSpace),Ae=w.colorSpace===Mi?null:Ot.getPrimaries(w.colorSpace),ze=w.colorSpace===Mi||je===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ue=w.isCompressedTexture||w.image[0].isCompressedTexture,ut=w.image[0]&&w.image[0].isDataTexture,ne=[];for(let Te=0;Te<6;Te++)!Ue&&!ut?ne[Te]=y(w.image[Te],!1,!0,r.maxCubemapSize):ne[Te]=ut?w.image[Te].image:w.image[Te],ne[Te]=Ie(w,ne[Te]);const Tt=ne[0],dt=g(Tt)||a,ht=s.convert(w.format,w.colorSpace),$e=s.convert(w.type),Ve=S(w.internalFormat,ht,$e,w.colorSpace),nt=a&&w.isVideoTexture!==!0,Rt=fe.__version===void 0||me===!0;let zt=L(w,Tt,dt);J(t.TEXTURE_CUBE_MAP,w,dt);let gt;if(Ue){nt&&Rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,zt,Ve,Tt.width,Tt.height);for(let Te=0;Te<6;Te++){gt=ne[Te].mipmaps;for(let O=0;O<gt.length;O++){const Le=gt[O];w.format!==Oi?ht!==null?nt?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,0,0,Le.width,Le.height,ht,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,Ve,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,0,0,Le.width,Le.height,ht,$e,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,Ve,Le.width,Le.height,0,ht,$e,Le.data)}}}else{gt=w.mipmaps,nt&&Rt&&(gt.length>0&&zt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,zt,Ve,ne[0].width,ne[0].height));for(let Te=0;Te<6;Te++)if(ut){nt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ne[Te].width,ne[Te].height,ht,$e,ne[Te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ve,ne[Te].width,ne[Te].height,0,ht,$e,ne[Te].data);for(let O=0;O<gt.length;O++){const Ne=gt[O].image[Te].image;nt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,0,0,Ne.width,Ne.height,ht,$e,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,Ve,Ne.width,Ne.height,0,ht,$e,Ne.data)}}else{nt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ht,$e,ne[Te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ve,ht,$e,ne[Te]);for(let O=0;O<gt.length;O++){const Le=gt[O];nt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,0,0,ht,$e,Le.image[Te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,Ve,ht,$e,Le.image[Te])}}}m(w,dt)&&x(t.TEXTURE_CUBE_MAP),fe.__version=ge.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function De(C,w,H,me,ge,fe){const je=s.convert(H.format,H.colorSpace),Ae=s.convert(H.type),ze=S(H.internalFormat,je,Ae,H.colorSpace);if(!i.get(w).__hasExternalTextures){const ut=Math.max(1,w.width>>fe),ne=Math.max(1,w.height>>fe);ge===t.TEXTURE_3D||ge===t.TEXTURE_2D_ARRAY?n.texImage3D(ge,fe,ze,ut,ne,w.depth,0,je,Ae,null):n.texImage2D(ge,fe,ze,ut,ne,0,je,Ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),se(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,me,ge,i.get(H).__webglTexture,0,he(w)):(ge===t.TEXTURE_2D||ge>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,me,ge,i.get(H).__webglTexture,fe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function st(C,w,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let me=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||se(w)){const ge=w.depthTexture;ge&&ge.isDepthTexture&&(ge.type===kr?me=t.DEPTH_COMPONENT32F:ge.type===Fr&&(me=t.DEPTH_COMPONENT24));const fe=he(w);se(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,me,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,me,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,me,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){const me=he(w);H&&se(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,t.DEPTH24_STENCIL8,w.width,w.height):se(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const me=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ge=0;ge<me.length;ge++){const fe=me[ge],je=s.convert(fe.format,fe.colorSpace),Ae=s.convert(fe.type),ze=S(fe.internalFormat,je,Ae,fe.colorSpace),Ue=he(w);H&&se(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,ze,w.width,w.height):se(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,ze,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ze,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function tt(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const me=i.get(w.depthTexture).__webglTexture,ge=he(w);if(w.depthTexture.format===ws)se(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0);else if(w.depthTexture.format===jo)se(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Xe(C){const w=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");tt(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]=t.createRenderbuffer(),st(w.__webglDepthbuffer[me],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),st(w.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(C,w,H){const me=i.get(C);w!==void 0&&De(me.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Xe(C)}function I(C){const w=C.texture,H=i.get(C),me=i.get(w);C.addEventListener("dispose",F),C.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture()),me.__version=w.version,o.memory.textures++);const ge=C.isWebGLCubeRenderTarget===!0,fe=C.isWebGLMultipleRenderTargets===!0,je=g(C)||a;if(ge){H.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[Ae]=[];for(let ze=0;ze<w.mipmaps.length;ze++)H.__webglFramebuffer[Ae][ze]=t.createFramebuffer()}else H.__webglFramebuffer[Ae]=t.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)H.__webglFramebuffer[Ae]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(fe)if(r.drawBuffers){const Ae=C.texture;for(let ze=0,Ue=Ae.length;ze<Ue;ze++){const ut=i.get(Ae[ze]);ut.__webglTexture===void 0&&(ut.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&se(C)===!1){const Ae=fe?w:[w];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ze=0;ze<Ae.length;ze++){const Ue=Ae[ze];H.__webglColorRenderbuffer[ze]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ze]);const ut=s.convert(Ue.format,Ue.colorSpace),ne=s.convert(Ue.type),Tt=S(Ue.internalFormat,ut,ne,Ue.colorSpace,C.isXRRenderTarget===!0),dt=he(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,dt,Tt,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,H.__webglColorRenderbuffer[ze])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),st(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ge){n.bindTexture(t.TEXTURE_CUBE_MAP,me.__webglTexture),J(t.TEXTURE_CUBE_MAP,w,je);for(let Ae=0;Ae<6;Ae++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)De(H.__webglFramebuffer[Ae][ze],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ze);else De(H.__webglFramebuffer[Ae],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);m(w,je)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){const Ae=C.texture;for(let ze=0,Ue=Ae.length;ze<Ue;ze++){const ut=Ae[ze],ne=i.get(ut);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),J(t.TEXTURE_2D,ut,je),De(H.__webglFramebuffer,C,ut,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,0),m(ut,je)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let Ae=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?Ae=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ae,me.__webglTexture),J(Ae,w,je),a&&w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)De(H.__webglFramebuffer[ze],C,w,t.COLOR_ATTACHMENT0,Ae,ze);else De(H.__webglFramebuffer,C,w,t.COLOR_ATTACHMENT0,Ae,0);m(w,je)&&x(Ae),n.unbindTexture()}C.depthBuffer&&Xe(C)}function re(C){const w=g(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let me=0,ge=H.length;me<ge;me++){const fe=H[me];if(m(fe,w)){const je=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ae=i.get(fe).__webglTexture;n.bindTexture(je,Ae),x(je),n.unbindTexture()}}}function ae(C){if(a&&C.samples>0&&se(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,me=C.height;let ge=t.COLOR_BUFFER_BIT;const fe=[],je=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(C),ze=C.isWebGLMultipleRenderTargets===!0;if(ze)for(let Ue=0;Ue<w.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ue=0;Ue<w.length;Ue++){fe.push(t.COLOR_ATTACHMENT0+Ue),C.depthBuffer&&fe.push(je);const ut=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(ut===!1&&(C.depthBuffer&&(ge|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ge|=t.STENCIL_BUFFER_BIT)),ze&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ue]),ut===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[je]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[je])),ze){const ne=i.get(w[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,H,me,0,0,H,me,ge,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ze)for(let Ue=0;Ue<w.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ue]);const ut=i.get(w[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,ut,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function he(C){return Math.min(r.maxSamples,C.samples)}function se(C){const w=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Je(C){const w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function Ie(C,w){const H=C.colorSpace,me=C.format,ge=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===lh||H!==yr&&H!==Mi&&(Ot.getTransfer(H)===Wt?a===!1?e.has("EXT_sRGB")===!0&&me===Oi?(C.format=lh,C.minFilter=jn,C.generateMipmaps=!1):w=r_.sRGBToLinear(w):(me!==Oi||ge!==Zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}this.allocateTextureUnit=D,this.resetTextureUnits=te,this.setTexture2D=j,this.setTexture2DArray=ee,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=He,this.setupRenderTarget=I,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=De,this.useMultisampledRTT=se}function C2(t,e,n){const i=n.isWebGL2;function r(s,o=Mi){let a;const l=Ot.getTransfer(o);if(s===Zr)return t.UNSIGNED_BYTE;if(s===Yx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===qx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===KM)return t.BYTE;if(s===JM)return t.SHORT;if(s===hp)return t.UNSIGNED_SHORT;if(s===$x)return t.INT;if(s===Fr)return t.UNSIGNED_INT;if(s===kr)return t.FLOAT;if(s===sl)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===QM)return t.ALPHA;if(s===Oi)return t.RGBA;if(s===ew)return t.LUMINANCE;if(s===tw)return t.LUMINANCE_ALPHA;if(s===ws)return t.DEPTH_COMPONENT;if(s===jo)return t.DEPTH_STENCIL;if(s===lh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===nw)return t.RED;if(s===Zx)return t.RED_INTEGER;if(s===iw)return t.RG;if(s===Kx)return t.RG_INTEGER;if(s===Jx)return t.RGBA_INTEGER;if(s===_d||s===yd||s===Sd||s===Md)if(l===Wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===_d)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Md)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===_d)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Md)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qm||s===eg||s===tg||s===ng)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Qm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===eg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===tg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ng)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ig||s===rg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ig)return l===Wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sg||s===og||s===ag||s===lg||s===cg||s===ug||s===dg||s===fg||s===hg||s===pg||s===mg||s===gg||s===vg||s===xg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===sg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===og)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ag)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ug)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xg)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wd||s===_g||s===yg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===wd)return l===Wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_g)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===rw||s===Sg||s===Mg||s===wg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===wd)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Sg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ms?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class R2 extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zr extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P2={type:"move"};class Xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),d=this._getHandJoint(c,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class L2 extends Zo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const y=n.getContextAttributes();let g=null,d=null;const m=[],x=[],S=new Me;let L=null;const A=new ti;A.layers.enable(1),A.viewport=new qt;const R=new ti;R.layers.enable(2),R.viewport=new qt;const F=[A,R],E=new R2;E.layers.enable(1),E.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=m[J];return ue===void 0&&(ue=new Xd,m[J]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=m[J];return ue===void 0&&(ue=new Xd,m[J]=ue),ue.getGripSpace()},this.getHand=function(J){let ue=m[J];return ue===void 0&&(ue=new Xd,m[J]=ue),ue.getHandSpace()};function X(J){const ue=x.indexOf(J.inputSource);if(ue===-1)return;const Pe=m[ue];Pe!==void 0&&(Pe.update(J.inputSource,J.frame,c||o),Pe.dispatchEvent({type:J.type,data:J.inputSource}))}function te(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",D);for(let J=0;J<m.length;J++){const ue=x[J];ue!==null&&(x[J]=null,m[J].disconnect(ue))}T=null,V=null,e.setRenderTarget(g),p=null,h=null,f=null,r=null,d=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",te),r.addEventListener("inputsourceschange",D),y.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Ps(p.framebufferWidth,p.framebufferHeight,{format:Oi,type:Zr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ue=null,Pe=null,Be=null;y.depth&&(Be=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=y.stencil?jo:ws,Pe=y.stencil?Ms:Fr);const De={colorFormat:n.RGBA8,depthFormat:Be,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Ps(h.textureWidth,h.textureHeight,{format:Oi,type:Zr,depthTexture:new p_(h.textureWidth,h.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const st=e.properties.get(d);st.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(J){for(let ue=0;ue<J.removed.length;ue++){const Pe=J.removed[ue],Be=x.indexOf(Pe);Be>=0&&(x[Be]=null,m[Be].disconnect(Pe))}for(let ue=0;ue<J.added.length;ue++){const Pe=J.added[ue];let Be=x.indexOf(Pe);if(Be===-1){for(let st=0;st<m.length;st++)if(st>=x.length){x.push(Pe),Be=st;break}else if(x[st]===null){x[st]=Pe,Be=st;break}if(Be===-1)break}const De=m[Be];De&&De.connect(Pe)}}const W=new U,j=new U;function ee(J,ue,Pe){W.setFromMatrixPosition(ue.matrixWorld),j.setFromMatrixPosition(Pe.matrixWorld);const Be=W.distanceTo(j),De=ue.projectionMatrix.elements,st=Pe.projectionMatrix.elements,tt=De[14]/(De[10]-1),Xe=De[14]/(De[10]+1),He=(De[9]+1)/De[5],I=(De[9]-1)/De[5],re=(De[8]-1)/De[0],ae=(st[8]+1)/st[0],he=tt*re,se=tt*ae,Je=Be/(-re+ae),Ie=Je*-re;ue.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ie),J.translateZ(Je),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const C=tt+Je,w=Xe+Je,H=he-Ie,me=se+(Be-Ie),ge=He*Xe/w*C,fe=I*Xe/w*C;J.projectionMatrix.makePerspective(H,me,ge,fe,C,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function z(J,ue){ue===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;E.near=R.near=A.near=J.near,E.far=R.far=A.far=J.far,(T!==E.near||V!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,V=E.far);const ue=J.parent,Pe=E.cameras;z(E,ue);for(let Be=0;Be<Pe.length;Be++)z(Pe[Be],ue);Pe.length===2?ee(E,A,R):E.projectionMatrix.copy(A.projectionMatrix),$(J,E,ue)};function $(J,ue,Pe){Pe===null?J.matrix.copy(ue.matrixWorld):(J.matrix.copy(Pe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ol*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)};let Y=null;function le(J,ue){if(u=ue.getViewerPose(c||o),v=ue,u!==null){const Pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Be=!1;Pe.length!==E.cameras.length&&(E.cameras.length=0,Be=!0);for(let De=0;De<Pe.length;De++){const st=Pe[De];let tt=null;if(p!==null)tt=p.getViewport(st);else{const He=f.getViewSubImage(h,st);tt=He.viewport,De===0&&(e.setRenderTargetTextures(d,He.colorTexture,h.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(d))}let Xe=F[De];Xe===void 0&&(Xe=new ti,Xe.layers.enable(De),Xe.viewport=new qt,F[De]=Xe),Xe.matrix.fromArray(st.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(st.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(tt.x,tt.y,tt.width,tt.height),De===0&&(E.matrix.copy(Xe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Be===!0&&E.cameras.push(Xe)}}for(let Pe=0;Pe<m.length;Pe++){const Be=x[Pe],De=m[Pe];Be!==null&&De!==void 0&&De.update(Be,ue,c||o)}Y&&Y(J,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),v=null}const de=new h_;de.setAnimationLoop(le),this.setAnimationLoop=function(J){Y=J},this.dispose=function(){}}}function N2(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,u_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,m,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),y(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,m,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===$n&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===$n&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const m=e.get(d).envMap;if(m&&(g.envMap.value=m,g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const x=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*x,n(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=x*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,m){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$n&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){const m=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function D2(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,x){const S=x.program;i.uniformBlockBinding(m,S)}function c(m,x){let S=r[m.id];S===void 0&&(v(m),S=u(m),r[m.id]=S,m.addEventListener("dispose",g));const L=x.program;i.updateUBOMapping(m,L);const A=e.render.frame;s[m.id]!==A&&(h(m),s[m.id]=A)}function u(m){const x=f();m.__bindingPointIndex=x;const S=t.createBuffer(),L=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,L,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const x=r[m.id],S=m.uniforms,L=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,R=S.length;A<R;A++){const F=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,T=F.length;E<T;E++){const V=F[E];if(p(V,A,E,L)===!0){const X=V.__offset,te=Array.isArray(V.value)?V.value:[V.value];let D=0;for(let W=0;W<te.length;W++){const j=te[W],ee=y(j);typeof j=="number"||typeof j=="boolean"?(V.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,X+D,V.__data)):j.isMatrix3?(V.__data[0]=j.elements[0],V.__data[1]=j.elements[1],V.__data[2]=j.elements[2],V.__data[3]=0,V.__data[4]=j.elements[3],V.__data[5]=j.elements[4],V.__data[6]=j.elements[5],V.__data[7]=0,V.__data[8]=j.elements[6],V.__data[9]=j.elements[7],V.__data[10]=j.elements[8],V.__data[11]=0):(j.toArray(V.__data,D),D+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,V.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,x,S,L){const A=m.value,R=x+"_"+S;if(L[R]===void 0)return typeof A=="number"||typeof A=="boolean"?L[R]=A:L[R]=A.clone(),!0;{const F=L[R];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return L[R]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function v(m){const x=m.uniforms;let S=0;const L=16;for(let R=0,F=x.length;R<F;R++){const E=Array.isArray(x[R])?x[R]:[x[R]];for(let T=0,V=E.length;T<V;T++){const X=E[T],te=Array.isArray(X.value)?X.value:[X.value];for(let D=0,W=te.length;D<W;D++){const j=te[D],ee=y(j),z=S%L;z!==0&&L-z<ee.boundary&&(S+=L-z),X.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=ee.storage}}}const A=S%L;return A>0&&(S+=L-A),m.__size=S,m.__cache={},this}function y(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){const x=m.target;x.removeEventListener("dispose",g);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Dc{constructor(e={}){const{canvas:n=Rw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,g=null;const d=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this._useLegacyLights=!1,this.toneMapping=qr,this.toneMappingExposure=1;const x=this;let S=!1,L=0,A=0,R=null,F=-1,E=null;const T=new qt,V=new qt;let X=null;const te=new Et(0);let D=0,W=n.width,j=n.height,ee=1,z=null,$=null;const Y=new qt(0,0,W,j),le=new qt(0,0,W,j);let de=!1;const J=new xp;let ue=!1,Pe=!1,Be=null;const De=new en,st=new Me,tt=new U,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return R===null?ee:1}let I=i;function re(P,G){for(let Z=0;Z<P.length;Z++){const K=P[Z],q=n.getContext(K,G);if(q!==null)return q}return null}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${dp}`),n.addEventListener("webglcontextlost",Te,!1),n.addEventListener("webglcontextrestored",O,!1),n.addEventListener("webglcontextcreationerror",Le,!1),I===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),I=re(G,P),I===null)throw re(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ae,he,se,Je,Ie,C,w,H,me,ge,fe,je,Ae,ze,Ue,ut,ne,Tt,dt,ht,$e,Ve,nt,Rt;function zt(){ae=new GT(I),he=new FT(I,ae,e),ae.init(he),Ve=new C2(I,ae,he),se=new b2(I,ae,he),Je=new XT(I),Ie=new f2,C=new A2(I,ae,se,Ie,he,Ve,Je),w=new zT(x),H=new VT(x),me=new e1(I,he),nt=new UT(I,ae,me,he),ge=new WT(I,me,Je,nt),fe=new ZT(I,ge,me,Je),dt=new qT(I,he,C),ut=new kT(Ie),je=new d2(x,w,H,ae,he,nt,ut),Ae=new N2(x,Ie),ze=new p2,Ue=new y2(ae,he),Tt=new IT(x,w,H,se,fe,h,l),ne=new T2(x,fe,he),Rt=new D2(I,Je,he,se),ht=new OT(I,ae,Je,he),$e=new jT(I,ae,Je,he),Je.programs=je.programs,x.capabilities=he,x.extensions=ae,x.properties=Ie,x.renderLists=ze,x.shadowMap=ne,x.state=se,x.info=Je}zt();const gt=new L2(x,I);this.xr=gt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const P=ae.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ae.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(P){P!==void 0&&(ee=P,this.setSize(W,j,!1))},this.getSize=function(P){return P.set(W,j)},this.setSize=function(P,G,Z=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=P,j=G,n.width=Math.floor(P*ee),n.height=Math.floor(G*ee),Z===!0&&(n.style.width=P+"px",n.style.height=G+"px"),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(W*ee,j*ee).floor()},this.setDrawingBufferSize=function(P,G,Z){W=P,j=G,ee=Z,n.width=Math.floor(P*Z),n.height=Math.floor(G*Z),this.setViewport(0,0,P,G)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(Y)},this.setViewport=function(P,G,Z,K){P.isVector4?Y.set(P.x,P.y,P.z,P.w):Y.set(P,G,Z,K),se.viewport(T.copy(Y).multiplyScalar(ee).floor())},this.getScissor=function(P){return P.copy(le)},this.setScissor=function(P,G,Z,K){P.isVector4?le.set(P.x,P.y,P.z,P.w):le.set(P,G,Z,K),se.scissor(V.copy(le).multiplyScalar(ee).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(P){se.setScissorTest(de=P)},this.setOpaqueSort=function(P){z=P},this.setTransparentSort=function(P){$=P},this.getClearColor=function(P){return P.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(P=!0,G=!0,Z=!0){let K=0;if(P){let q=!1;if(R!==null){const Fe=R.texture.format;q=Fe===Jx||Fe===Kx||Fe===Zx}if(q){const Fe=R.texture.type,Qe=Fe===Zr||Fe===Fr||Fe===hp||Fe===Ms||Fe===Yx||Fe===qx,ot=Tt.getClearColor(),pt=Tt.getClearAlpha(),yt=ot.r,mt=ot.g,xt=ot.b;Qe?(p[0]=yt,p[1]=mt,p[2]=xt,p[3]=pt,I.clearBufferuiv(I.COLOR,0,p)):(v[0]=yt,v[1]=mt,v[2]=xt,v[3]=pt,I.clearBufferiv(I.COLOR,0,v))}else K|=I.COLOR_BUFFER_BIT}G&&(K|=I.DEPTH_BUFFER_BIT),Z&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",O,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),ze.dispose(),Ue.dispose(),Ie.dispose(),w.dispose(),H.dispose(),fe.dispose(),nt.dispose(),Rt.dispose(),je.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",xn),gt.removeEventListener("sessionend",It),Be&&(Be.dispose(),Be=null),En.stop()};function Te(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=Je.autoReset,G=ne.enabled,Z=ne.autoUpdate,K=ne.needsUpdate,q=ne.type;zt(),Je.autoReset=P,ne.enabled=G,ne.autoUpdate=Z,ne.needsUpdate=K,ne.type=q}function Le(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ne(P){const G=P.target;G.removeEventListener("dispose",Ne),lt(G)}function lt(P){rt(P),Ie.remove(P)}function rt(P){const G=Ie.get(P).programs;G!==void 0&&(G.forEach(function(Z){je.releaseProgram(Z)}),P.isShaderMaterial&&je.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,Z,K,q,Fe){G===null&&(G=Xe);const Qe=q.isMesh&&q.matrixWorld.determinant()<0,ot=Fu(P,G,Z,K,q);se.setMaterial(K,Qe);let pt=Z.index,yt=1;if(K.wireframe===!0){if(pt=ge.getWireframeAttribute(Z),pt===void 0)return;yt=2}const mt=Z.drawRange,xt=Z.attributes.position;let Zt=mt.start*yt,zn=(mt.start+mt.count)*yt;Fe!==null&&(Zt=Math.max(Zt,Fe.start*yt),zn=Math.min(zn,(Fe.start+Fe.count)*yt)),pt!==null?(Zt=Math.max(Zt,0),zn=Math.min(zn,pt.count)):xt!=null&&(Zt=Math.max(Zt,0),zn=Math.min(zn,xt.count));const on=zn-Zt;if(on<0||on===1/0)return;nt.setup(q,K,ot,Z,pt);let oi,Vt=ht;if(pt!==null&&(oi=me.get(pt),Vt=$e,Vt.setIndex(oi)),q.isMesh)K.wireframe===!0?(se.setLineWidth(K.wireframeLinewidth*He()),Vt.setMode(I.LINES)):Vt.setMode(I.TRIANGLES);else if(q.isLine){let St=K.linewidth;St===void 0&&(St=1),se.setLineWidth(St*He()),q.isLineSegments?Vt.setMode(I.LINES):q.isLineLoop?Vt.setMode(I.LINE_LOOP):Vt.setMode(I.LINE_STRIP)}else q.isPoints?Vt.setMode(I.POINTS):q.isSprite&&Vt.setMode(I.TRIANGLES);if(q.isBatchedMesh)Vt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Vt.renderInstances(Zt,on,q.count);else if(Z.isInstancedBufferGeometry){const St=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ea=Math.min(Z.instanceCount,St);Vt.renderInstances(Zt,on,ea)}else Vt.render(Zt,on)};function Pt(P,G,Z){P.transparent===!0&&P.side===ui&&P.forceSinglePass===!1?(P.side=$n,P.needsUpdate=!0,ks(P,G,Z),P.side=es,P.needsUpdate=!0,ks(P,G,Z),P.side=ui):ks(P,G,Z)}this.compile=function(P,G,Z=null){Z===null&&(Z=P),g=Ue.get(Z),g.init(),m.push(g),Z.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),P!==Z&&P.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights(x._useLegacyLights);const K=new Set;return P.traverse(function(q){const Fe=q.material;if(Fe)if(Array.isArray(Fe))for(let Qe=0;Qe<Fe.length;Qe++){const ot=Fe[Qe];Pt(ot,Z,q),K.add(ot)}else Pt(Fe,Z,q),K.add(Fe)}),m.pop(),g=null,K},this.compileAsync=function(P,G,Z=null){const K=this.compile(P,G,Z);return new Promise(q=>{function Fe(){if(K.forEach(function(Qe){Ie.get(Qe).currentProgram.isReady()&&K.delete(Qe)}),K.size===0){q(P);return}setTimeout(Fe,10)}ae.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Ct=null;function sn(P){Ct&&Ct(P)}function xn(){En.stop()}function It(){En.start()}const En=new h_;En.setAnimationLoop(sn),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(P){Ct=P,gt.setAnimationLoop(P),P===null?En.stop():En.start()},gt.addEventListener("sessionstart",xn),gt.addEventListener("sessionend",It),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(G),G=gt.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,G,R),g=Ue.get(P,m.length),g.init(),m.push(g),De.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),J.setFromProjectionMatrix(De),Pe=this.localClippingEnabled,ue=ut.init(this.clippingPlanes,Pe),y=ze.get(P,d.length),y.init(),d.push(y),vt(P,G,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(z,$),this.info.render.frame++,ue===!0&&ut.beginShadows();const Z=g.state.shadowsArray;if(ne.render(Z,P,G),ue===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),Tt.render(y,P),g.setupLights(x._useLegacyLights),G.isArrayCamera){const K=G.cameras;for(let q=0,Fe=K.length;q<Fe;q++){const Qe=K[q];Fs(y,P,Qe,Qe.viewport)}}else Fs(y,P,G);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(x,P,G),nt.resetDefaultState(),F=-1,E=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function vt(P,G,Z,K){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)Z=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||J.intersectsSprite(P)){K&&tt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(De);const Qe=fe.update(P),ot=P.material;ot.visible&&y.push(P,Qe,ot,Z,tt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||J.intersectsObject(P))){const Qe=fe.update(P),ot=P.material;if(K&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),tt.copy(P.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),tt.copy(Qe.boundingSphere.center)),tt.applyMatrix4(P.matrixWorld).applyMatrix4(De)),Array.isArray(ot)){const pt=Qe.groups;for(let yt=0,mt=pt.length;yt<mt;yt++){const xt=pt[yt],Zt=ot[xt.materialIndex];Zt&&Zt.visible&&y.push(P,Qe,Zt,Z,tt.z,xt)}}else ot.visible&&y.push(P,Qe,ot,Z,tt.z,null)}}const Fe=P.children;for(let Qe=0,ot=Fe.length;Qe<ot;Qe++)vt(Fe[Qe],G,Z,K)}function Fs(P,G,Z,K){const q=P.opaque,Fe=P.transmissive,Qe=P.transparent;g.setupLightsView(Z),ue===!0&&ut.setGlobalState(x.clippingPlanes,Z),Fe.length>0&&Ou(q,Fe,G,Z),K&&se.viewport(T.copy(K)),q.length>0&&Bi(q,G,Z),Fe.length>0&&Bi(Fe,G,Z),Qe.length>0&&Bi(Qe,G,Z),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Ou(P,G,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Fe=he.isWebGL2;Be===null&&(Be=new Ps(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?sl:Zr,minFilter:rl,samples:Fe?4:0})),x.getDrawingBufferSize(st),Fe?Be.setSize(st.x,st.y):Be.setSize(du(st.x),du(st.y));const Qe=x.getRenderTarget();x.setRenderTarget(Be),x.getClearColor(te),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const ot=x.toneMapping;x.toneMapping=qr,Bi(P,Z,K),C.updateMultisampleRenderTarget(Be),C.updateRenderTargetMipmap(Be);let pt=!1;for(let yt=0,mt=G.length;yt<mt;yt++){const xt=G[yt],Zt=xt.object,zn=xt.geometry,on=xt.material,oi=xt.group;if(on.side===ui&&Zt.layers.test(K.layers)){const Vt=on.side;on.side=$n,on.needsUpdate=!0,Jo(Zt,Z,K,zn,on,oi),on.side=Vt,on.needsUpdate=!0,pt=!0}}pt===!0&&(C.updateMultisampleRenderTarget(Be),C.updateRenderTargetMipmap(Be)),x.setRenderTarget(Qe),x.setClearColor(te,D),x.toneMapping=ot}function Bi(P,G,Z){const K=G.isScene===!0?G.overrideMaterial:null;for(let q=0,Fe=P.length;q<Fe;q++){const Qe=P[q],ot=Qe.object,pt=Qe.geometry,yt=K===null?Qe.material:K,mt=Qe.group;ot.layers.test(Z.layers)&&Jo(ot,G,Z,pt,yt,mt)}}function Jo(P,G,Z,K,q,Fe){P.onBeforeRender(x,G,Z,K,q,Fe),P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(x,G,Z,K,P,Fe),q.transparent===!0&&q.side===ui&&q.forceSinglePass===!1?(q.side=$n,q.needsUpdate=!0,x.renderBufferDirect(Z,G,K,q,P,Fe),q.side=es,q.needsUpdate=!0,x.renderBufferDirect(Z,G,K,q,P,Fe),q.side=ui):x.renderBufferDirect(Z,G,K,q,P,Fe),P.onAfterRender(x,G,Z,K,q,Fe)}function ks(P,G,Z){G.isScene!==!0&&(G=Xe);const K=Ie.get(P),q=g.state.lights,Fe=g.state.shadowsArray,Qe=q.state.version,ot=je.getParameters(P,q.state,Fe,G,Z),pt=je.getProgramCacheKey(ot);let yt=K.programs;K.environment=P.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(P.isMeshStandardMaterial?H:w).get(P.envMap||K.environment),yt===void 0&&(P.addEventListener("dispose",Ne),yt=new Map,K.programs=yt);let mt=yt.get(pt);if(mt!==void 0){if(K.currentProgram===mt&&K.lightsStateVersion===Qe)return _l(P,ot),mt}else ot.uniforms=je.getUniforms(P),P.onBuild(Z,ot,x),P.onBeforeCompile(ot,x),mt=je.acquireProgram(ot,pt),yt.set(pt,mt),K.uniforms=ot.uniforms;const xt=K.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(xt.clippingPlanes=ut.uniform),_l(P,ot),K.needsLights=yl(P),K.lightsStateVersion=Qe,K.needsLights&&(xt.ambientLightColor.value=q.state.ambient,xt.lightProbe.value=q.state.probe,xt.directionalLights.value=q.state.directional,xt.directionalLightShadows.value=q.state.directionalShadow,xt.spotLights.value=q.state.spot,xt.spotLightShadows.value=q.state.spotShadow,xt.rectAreaLights.value=q.state.rectArea,xt.ltc_1.value=q.state.rectAreaLTC1,xt.ltc_2.value=q.state.rectAreaLTC2,xt.pointLights.value=q.state.point,xt.pointLightShadows.value=q.state.pointShadow,xt.hemisphereLights.value=q.state.hemi,xt.directionalShadowMap.value=q.state.directionalShadowMap,xt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,xt.spotShadowMap.value=q.state.spotShadowMap,xt.spotLightMatrix.value=q.state.spotLightMatrix,xt.spotLightMap.value=q.state.spotLightMap,xt.pointShadowMap.value=q.state.pointShadowMap,xt.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=mt,K.uniformsList=null,mt}function Qo(P){if(P.uniformsList===null){const G=P.currentProgram.getUniforms();P.uniformsList=Nc.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function _l(P,G){const Z=Ie.get(P);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Fu(P,G,Z,K,q){G.isScene!==!0&&(G=Xe),C.resetTextureUnits();const Fe=G.fog,Qe=K.isMeshStandardMaterial?G.environment:null,ot=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:yr,pt=(K.isMeshStandardMaterial?H:w).get(K.envMap||Qe),yt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,mt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),xt=!!Z.morphAttributes.position,Zt=!!Z.morphAttributes.normal,zn=!!Z.morphAttributes.color;let on=qr;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(on=x.toneMapping);const oi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Vt=oi!==void 0?oi.length:0,St=Ie.get(K),ea=g.state.lights;if(ue===!0&&(Pe===!0||P!==E)){const Tn=P===E&&K.id===F;ut.setState(K,P,Tn)}let Xt=!1;K.version===St.__version?(St.needsLights&&St.lightsStateVersion!==ea.state.version||St.outputColorSpace!==ot||q.isBatchedMesh&&St.batching===!1||!q.isBatchedMesh&&St.batching===!0||q.isInstancedMesh&&St.instancing===!1||!q.isInstancedMesh&&St.instancing===!0||q.isSkinnedMesh&&St.skinning===!1||!q.isSkinnedMesh&&St.skinning===!0||q.isInstancedMesh&&St.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&St.instancingColor===!1&&q.instanceColor!==null||St.envMap!==pt||K.fog===!0&&St.fog!==Fe||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==ut.numPlanes||St.numIntersection!==ut.numIntersection)||St.vertexAlphas!==yt||St.vertexTangents!==mt||St.morphTargets!==xt||St.morphNormals!==Zt||St.morphColors!==zn||St.toneMapping!==on||he.isWebGL2===!0&&St.morphTargetsCount!==Vt)&&(Xt=!0):(Xt=!0,St.__version=K.version);let Hi=St.currentProgram;Xt===!0&&(Hi=ks(K,G,q));let Sl=!1,rs=!1,Kn=!1;const _n=Hi.getUniforms(),Vi=St.uniforms;if(se.useProgram(Hi.program)&&(Sl=!0,rs=!0,Kn=!0),K.id!==F&&(F=K.id,rs=!0),Sl||E!==P){_n.setValue(I,"projectionMatrix",P.projectionMatrix),_n.setValue(I,"viewMatrix",P.matrixWorldInverse);const Tn=_n.map.cameraPosition;Tn!==void 0&&Tn.setValue(I,tt.setFromMatrixPosition(P.matrixWorld)),he.logarithmicDepthBuffer&&_n.setValue(I,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&_n.setValue(I,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,rs=!0,Kn=!0)}if(q.isSkinnedMesh){_n.setOptional(I,q,"bindMatrix"),_n.setOptional(I,q,"bindMatrixInverse");const Tn=q.skeleton;Tn&&(he.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),_n.setValue(I,"boneTexture",Tn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(_n.setOptional(I,q,"batchingTexture"),_n.setValue(I,"batchingTexture",q._matricesTexture,C));const Bs=Z.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0&&he.isWebGL2===!0)&&dt.update(q,Z,Hi),(rs||St.receiveShadow!==q.receiveShadow)&&(St.receiveShadow=q.receiveShadow,_n.setValue(I,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Vi.envMap.value=pt,Vi.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),rs&&(_n.setValue(I,"toneMappingExposure",x.toneMappingExposure),St.needsLights&&zs(Vi,Kn),Fe&&K.fog===!0&&Ae.refreshFogUniforms(Vi,Fe),Ae.refreshMaterialUniforms(Vi,K,ee,j,Be),Nc.upload(I,Qo(St),Vi,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Nc.upload(I,Qo(St),Vi,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&_n.setValue(I,"center",q.center),_n.setValue(I,"modelViewMatrix",q.modelViewMatrix),_n.setValue(I,"normalMatrix",q.normalMatrix),_n.setValue(I,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Tn=K.uniformsGroups;for(let bn=0,ku=Tn.length;bn<ku;bn++)if(he.isWebGL2){const Ml=Tn[bn];Rt.update(Ml,Hi),Rt.bind(Ml,Hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hi}function zs(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function yl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,G,Z){Ie.get(P.texture).__webglTexture=G,Ie.get(P.depthTexture).__webglTexture=Z;const K=Ie.get(P);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,G){const Z=Ie.get(P);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,Z=0){R=P,L=G,A=Z;let K=!0,q=null,Fe=!1,Qe=!1;if(P){const pt=Ie.get(P);pt.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(I.FRAMEBUFFER,null),K=!1):pt.__webglFramebuffer===void 0?C.setupRenderTarget(P):pt.__hasExternalTextures&&C.rebindTextures(P,Ie.get(P.texture).__webglTexture,Ie.get(P.depthTexture).__webglTexture);const yt=P.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(Qe=!0);const mt=Ie.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(mt[G])?q=mt[G][Z]:q=mt[G],Fe=!0):he.isWebGL2&&P.samples>0&&C.useMultisampledRTT(P)===!1?q=Ie.get(P).__webglMultisampledFramebuffer:Array.isArray(mt)?q=mt[Z]:q=mt,T.copy(P.viewport),V.copy(P.scissor),X=P.scissorTest}else T.copy(Y).multiplyScalar(ee).floor(),V.copy(le).multiplyScalar(ee).floor(),X=de;if(se.bindFramebuffer(I.FRAMEBUFFER,q)&&he.drawBuffers&&K&&se.drawBuffers(P,q),se.viewport(T),se.scissor(V),se.setScissorTest(X),Fe){const pt=Ie.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+G,pt.__webglTexture,Z)}else if(Qe){const pt=Ie.get(P.texture),yt=G||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,pt.__webglTexture,Z||0,yt)}F=-1},this.readRenderTargetPixels=function(P,G,Z,K,q,Fe,Qe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ot=Ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Qe!==void 0&&(ot=ot[Qe]),ot){se.bindFramebuffer(I.FRAMEBUFFER,ot);try{const pt=P.texture,yt=pt.format,mt=pt.type;if(yt!==Oi&&Ve.convert(yt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const xt=mt===sl&&(ae.has("EXT_color_buffer_half_float")||he.isWebGL2&&ae.has("EXT_color_buffer_float"));if(mt!==Zr&&Ve.convert(mt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(mt===kr&&(he.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-K&&Z>=0&&Z<=P.height-q&&I.readPixels(G,Z,K,q,Ve.convert(yt),Ve.convert(mt),Fe)}finally{const pt=R!==null?Ie.get(R).__webglFramebuffer:null;se.bindFramebuffer(I.FRAMEBUFFER,pt)}}},this.copyFramebufferToTexture=function(P,G,Z=0){const K=Math.pow(2,-Z),q=Math.floor(G.image.width*K),Fe=Math.floor(G.image.height*K);C.setTexture2D(G,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,P.x,P.y,q,Fe),se.unbindTexture()},this.copyTextureToTexture=function(P,G,Z,K=0){const q=G.image.width,Fe=G.image.height,Qe=Ve.convert(Z.format),ot=Ve.convert(Z.type);C.setTexture2D(Z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Z.unpackAlignment),G.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,K,P.x,P.y,q,Fe,Qe,ot,G.image.data):G.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,K,P.x,P.y,G.mipmaps[0].width,G.mipmaps[0].height,Qe,G.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,K,P.x,P.y,Qe,ot,G.image),K===0&&Z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(P,G,Z,K,q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=P.max.x-P.min.x+1,Qe=P.max.y-P.min.y+1,ot=P.max.z-P.min.z+1,pt=Ve.convert(K.format),yt=Ve.convert(K.type);let mt;if(K.isData3DTexture)C.setTexture3D(K,0),mt=I.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)C.setTexture2DArray(K,0),mt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,K.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,K.unpackAlignment);const xt=I.getParameter(I.UNPACK_ROW_LENGTH),Zt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),zn=I.getParameter(I.UNPACK_SKIP_PIXELS),on=I.getParameter(I.UNPACK_SKIP_ROWS),oi=I.getParameter(I.UNPACK_SKIP_IMAGES),Vt=Z.isCompressedTexture?Z.mipmaps[q]:Z.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Vt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Vt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,P.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,P.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,P.min.z),Z.isDataTexture||Z.isData3DTexture?I.texSubImage3D(mt,q,G.x,G.y,G.z,Fe,Qe,ot,pt,yt,Vt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(mt,q,G.x,G.y,G.z,Fe,Qe,ot,pt,Vt.data)):I.texSubImage3D(mt,q,G.x,G.y,G.z,Fe,Qe,ot,pt,yt,Vt),I.pixelStorei(I.UNPACK_ROW_LENGTH,xt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Zt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zn),I.pixelStorei(I.UNPACK_SKIP_ROWS,on),I.pixelStorei(I.UNPACK_SKIP_IMAGES,oi),q===0&&K.generateMipmaps&&I.generateMipmap(mt),se.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),se.unbindTexture()},this.resetState=function(){L=0,A=0,R=null,se.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===pp?"display-p3":"srgb",n.unpackColorSpace=Ot.workingColorSpace===Nu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$t?Es:e_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Es?$t:yr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class I2 extends Dc{}I2.prototype.isWebGL1Renderer=!0;class Oa{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=n,this.far=i}clone(){return new Oa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ic extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class U2{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=ah,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=tr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new U;class fu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Hn.fromBufferAttribute(this,n),Hn.applyMatrix4(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Hn.fromBufferAttribute(this,n),Hn.applyNormalMatrix(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Hn.fromBufferAttribute(this,n),Hn.transformDirection(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}setX(e,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ki(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ki(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ki(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ki(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ut(n,this.array),i=Ut(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ut(n,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ut(n,this.array),i=Ut(i,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Ti(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class y_ extends Os{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let oo;const pa=new U,ao=new U,lo=new U,co=new Me,ma=new Me,S_=new en,uc=new U,ga=new U,dc=new U,u0=new Me,$d=new Me,d0=new Me;class O2 extends wn{constructor(e=new y_){if(super(),this.isSprite=!0,this.type="Sprite",oo===void 0){oo=new mn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new U2(n,5);oo.setIndex([0,1,2,0,2,3]),oo.setAttribute("position",new fu(i,3,0,!1)),oo.setAttribute("uv",new fu(i,2,3,!1))}this.geometry=oo,this.material=e,this.center=new Me(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ao.setFromMatrixScale(this.matrixWorld),S_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ao.multiplyScalar(-lo.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;fc(uc.set(-.5,-.5,0),lo,o,ao,r,s),fc(ga.set(.5,-.5,0),lo,o,ao,r,s),fc(dc.set(.5,.5,0),lo,o,ao,r,s),u0.set(0,0),$d.set(1,0),d0.set(1,1);let a=e.ray.intersectTriangle(uc,ga,dc,!1,pa);if(a===null&&(fc(ga.set(-.5,.5,0),lo,o,ao,r,s),$d.set(0,1),a=e.ray.intersectTriangle(uc,dc,ga,!1,pa),a===null))return;const l=e.ray.origin.distanceTo(pa);l<e.near||l>e.far||n.push({distance:l,point:pa.clone(),uv:Si.getInterpolation(pa,uc,ga,dc,u0,$d,d0,new Me),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function fc(t,e,n,i,r,s){co.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ma.x=s*co.x-r*co.y,ma.y=r*co.x+s*co.y):ma.copy(co),t.copy(e),t.x+=ma.x,t.y+=ma.y,t.applyMatrix4(S_)}class Fa extends Os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const f0=new U,h0=new U,p0=new en,Yd=new gp,hc=new Du;class M_ extends wn{constructor(e=new mn,n=new Fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)f0.fromBufferAttribute(n,r-1),h0.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=f0.distanceTo(h0);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(r),hc.radius+=s,e.ray.intersectsSphere(hc)===!1)return;p0.copy(r).invert(),Yd.copy(e.ray).applyMatrix4(p0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,u=new U,f=new U,h=new U,p=this.isLineSegments?2:1,v=i.index,g=i.attributes.position;if(v!==null){const d=Math.max(0,o.start),m=Math.min(v.count,o.start+o.count);for(let x=d,S=m-1;x<S;x+=p){const L=v.getX(x),A=v.getX(x+1);if(c.fromBufferAttribute(g,L),u.fromBufferAttribute(g,A),Yd.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(h);F<e.near||F>e.far||n.push({distance:F,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),m=Math.min(g.count,o.start+o.count);for(let x=d,S=m-1;x<S;x+=p){if(c.fromBufferAttribute(g,x),u.fromBufferAttribute(g,x+1),Yd.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||n.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const m0=new U,g0=new U;class dh extends M_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)m0.fromBufferAttribute(n,r),g0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+m0.distanceTo(g0);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qd extends Yn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Me:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new U,r=[],s=[],o=[],a=new U,l=new en;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Rn(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Rn(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sp extends nr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new Me,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class F2 extends Sp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Mp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const pc=new U,Zd=new Mp,Kd=new Mp,Jd=new Mp;class k2 extends nr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new U){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(pc.subVectors(r[0],r[1]).add(r[0]),c=pc);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(pc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=pc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(u),p);y<1e-4&&(y=1),v<1e-4&&(v=y),g<1e-4&&(g=y),Zd.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,v,y,g),Kd.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,v,y,g),Jd.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,v,y,g)}else this.curveType==="catmullrom"&&(Zd.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Kd.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Jd.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Zd.calc(l),Kd.calc(l),Jd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function v0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function z2(t,e){const n=1-t;return n*n*e}function B2(t,e){return 2*(1-t)*t*e}function H2(t,e){return t*t*e}function ka(t,e,n,i){return z2(t,e)+B2(t,n)+H2(t,i)}function V2(t,e){const n=1-t;return n*n*n*e}function G2(t,e){const n=1-t;return 3*n*n*t*e}function W2(t,e){return 3*(1-t)*t*t*e}function j2(t,e){return t*t*t*e}function za(t,e,n,i,r){return V2(t,e)+G2(t,n)+W2(t,i)+j2(t,r)}class w_ extends nr{constructor(e=new Me,n=new Me,i=new Me,r=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Me){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(za(e,r.x,s.x,o.x,a.x),za(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class X2 extends nr{constructor(e=new U,n=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(za(e,r.x,s.x,o.x,a.x),za(e,r.y,s.y,o.y,a.y),za(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class E_ extends nr{constructor(e=new Me,n=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Me){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $2 extends nr{constructor(e=new U,n=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new U){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new U){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T_ extends nr{constructor(e=new Me,n=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Me){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ka(e,r.x,s.x,o.x),ka(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y2 extends nr{constructor(e=new U,n=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ka(e,r.x,s.x,o.x),ka(e,r.y,s.y,o.y),ka(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class b_ extends nr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Me){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(v0(a,l.x,c.x,u.x,f.x),v0(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Me().fromArray(r))}return this}}var fh=Object.freeze({__proto__:null,ArcCurve:F2,CatmullRomCurve3:k2,CubicBezierCurve:w_,CubicBezierCurve3:X2,EllipseCurve:Sp,LineCurve:E_,LineCurve3:$2,QuadraticBezierCurve:T_,QuadraticBezierCurve3:Y2,SplineCurve:b_});class q2 extends nr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new fh[r.type]().fromJSON(r))}return this}}class x0 extends q2{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new E_(this.currentPoint.clone(),new Me(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new T_(this.currentPoint.clone(),new Me(e,n),new Me(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new w_(this.currentPoint.clone(),new Me(e,n),new Me(i,r),new Me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new b_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Sp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ns extends mn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let v=0;const y=[],g=i/2;let d=0;m(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ft(f,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(p,2));function m(){const S=new U,L=new U;let A=0;const R=(n-e)/i;for(let F=0;F<=s;F++){const E=[],T=F/s,V=T*(n-e)+e;for(let X=0;X<=r;X++){const te=X/r,D=te*l+a,W=Math.sin(D),j=Math.cos(D);L.x=V*W,L.y=-T*i+g,L.z=V*j,f.push(L.x,L.y,L.z),S.set(W,R,j).normalize(),h.push(S.x,S.y,S.z),p.push(te,1-T),E.push(v++)}y.push(E)}for(let F=0;F<r;F++)for(let E=0;E<s;E++){const T=y[E][F],V=y[E+1][F],X=y[E+1][F+1],te=y[E][F+1];u.push(T,V,te),u.push(V,X,te),A+=6}c.addGroup(d,A,0),d+=A}function x(S){const L=v,A=new Me,R=new U;let F=0;const E=S===!0?e:n,T=S===!0?1:-1;for(let X=1;X<=r;X++)f.push(0,g*T,0),h.push(0,T,0),p.push(.5,.5),v++;const V=v;for(let X=0;X<=r;X++){const D=X/r*l+a,W=Math.cos(D),j=Math.sin(D);R.x=E*j,R.y=g*T,R.z=E*W,f.push(R.x,R.y,R.z),h.push(0,T,0),A.x=W*.5+.5,A.y=j*.5*T+.5,p.push(A.x,A.y),v++}for(let X=0;X<r;X++){const te=L+X,D=V+X;S===!0?u.push(D,D+1,te):u.push(D+1,D,te),F+=3}c.addGroup(d,F,S===!0?1:2),d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wp extends Ns{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new wp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ep extends mn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Ft(s,3)),this.setAttribute("normal",new Ft(s.slice(),3)),this.setAttribute("uv",new Ft(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const x=new U,S=new U,L=new U;for(let A=0;A<n.length;A+=3)p(n[A+0],x),p(n[A+1],S),p(n[A+2],L),l(x,S,L,m)}function l(m,x,S,L){const A=L+1,R=[];for(let F=0;F<=A;F++){R[F]=[];const E=m.clone().lerp(S,F/A),T=x.clone().lerp(S,F/A),V=A-F;for(let X=0;X<=V;X++)X===0&&F===A?R[F][X]=E:R[F][X]=E.clone().lerp(T,X/V)}for(let F=0;F<A;F++)for(let E=0;E<2*(A-F)-1;E++){const T=Math.floor(E/2);E%2===0?(h(R[F][T+1]),h(R[F+1][T]),h(R[F][T])):(h(R[F][T+1]),h(R[F+1][T+1]),h(R[F+1][T]))}}function c(m){const x=new U;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(m),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function u(){const m=new U;for(let x=0;x<s.length;x+=3){m.x=s[x+0],m.y=s[x+1],m.z=s[x+2];const S=g(m)/2/Math.PI+.5,L=d(m)/Math.PI+.5;o.push(S,1-L)}v(),f()}function f(){for(let m=0;m<o.length;m+=6){const x=o[m+0],S=o[m+2],L=o[m+4],A=Math.max(x,S,L),R=Math.min(x,S,L);A>.9&&R<.1&&(x<.2&&(o[m+0]+=1),S<.2&&(o[m+2]+=1),L<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,x){const S=m*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function v(){const m=new U,x=new U,S=new U,L=new U,A=new Me,R=new Me,F=new Me;for(let E=0,T=0;E<s.length;E+=9,T+=6){m.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),S.set(s[E+6],s[E+7],s[E+8]),A.set(o[T+0],o[T+1]),R.set(o[T+2],o[T+3]),F.set(o[T+4],o[T+5]),L.copy(m).add(x).add(S).divideScalar(3);const V=g(L);y(A,T+0,m,V),y(R,T+2,x,V),y(F,T+4,S,V)}}function y(m,x,S,L){L<0&&m.x===1&&(o[x]=m.x-1),S.x===0&&S.z===0&&(o[x]=L/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ep(e.vertices,e.indices,e.radius,e.details)}}class gs extends x0{constructor(e){super(e),this.uuid=tr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new x0().fromJSON(r))}return this}}const Z2={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=A_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,p;if(i&&(s=tA(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let v=n;v<r;v+=n)f=t[v],h=t[v+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return ll(s,o,n,a,l,p,0),o}};function A_(t,e,n,i,r){let s,o;if(r===fA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=_0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=_0(s,t[s],t[s+1],o);return o&&Uu(o,o.next)&&(ul(o),o=o.next),o}function Ds(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Uu(n,n.next)||Jt(n.prev,n,n.next)===0)){if(ul(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ll(t,e,n,i,r,s,o){if(!t)return;!o&&s&&oA(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?J2(t,i,r,s):K2(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),ul(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=Q2(Ds(t),e,n),ll(t,e,n,i,r,s,2)):o===2&&eA(t,e,n,i,r,s):ll(Ds(t),e,n,i,r,s,1);break}}}function K2(t){const e=t.prev,n=t,i=t.next;if(Jt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=h&&v.y>=f&&v.y<=p&&Ao(r,a,s,l,o,c,v.x,v.y)&&Jt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function J2(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Jt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,v=u<f?u<h?u:h:f<h?f:h,y=a>l?a>c?a:c:l>c?l:c,g=u>f?u>h?u:h:f>h?f:h,d=hh(p,v,e,n,i),m=hh(y,g,e,n,i);let x=t.prevZ,S=t.nextZ;for(;x&&x.z>=d&&S&&S.z<=m;){if(x.x>=p&&x.x<=y&&x.y>=v&&x.y<=g&&x!==r&&x!==o&&Ao(a,u,l,f,c,h,x.x,x.y)&&Jt(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=y&&S.y>=v&&S.y<=g&&S!==r&&S!==o&&Ao(a,u,l,f,c,h,S.x,S.y)&&Jt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=y&&x.y>=v&&x.y<=g&&x!==r&&x!==o&&Ao(a,u,l,f,c,h,x.x,x.y)&&Jt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=m;){if(S.x>=p&&S.x<=y&&S.y>=v&&S.y<=g&&S!==r&&S!==o&&Ao(a,u,l,f,c,h,S.x,S.y)&&Jt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Q2(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Uu(r,s)&&C_(r,i,i.next,s)&&cl(r,s)&&cl(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),ul(i),ul(i.next),i=t=s),i=i.next}while(i!==t);return Ds(i)}function eA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cA(o,a)){let l=R_(o,a);o=Ds(o,o.next),l=Ds(l,l.next),ll(o,e,n,i,r,s,0),ll(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function tA(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=A_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(lA(c));for(r.sort(nA),s=0;s<r.length;s++)n=iA(r[s],n);return n}function nA(t,e){return t.x-e.x}function iA(t,e){const n=rA(t,e);if(!n)return e;const i=R_(n,t);return Ds(i,i.next),Ds(n,n.next)}function rA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Ao(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),cl(n,t)&&(f<u||f===u&&(n.x>r.x||n.x===r.x&&sA(r,n)))&&(r=n,u=f)),n=n.next;while(n!==a);return r}function sA(t,e){return Jt(t.prev,t,e.prev)<0&&Jt(e.next,t,t.next)<0}function oA(t,e,n,i){let r=t;do r.z===0&&(r.z=hh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,aA(r)}function aA(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function hh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function lA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ao(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function cA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!uA(t,e)&&(cl(t,e)&&cl(e,t)&&dA(t,e)&&(Jt(t.prev,t,e.prev)||Jt(t,e.prev,e))||Uu(t,e)&&Jt(t.prev,t,t.next)>0&&Jt(e.prev,e,e.next)>0)}function Jt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Uu(t,e){return t.x===e.x&&t.y===e.y}function C_(t,e,n,i){const r=gc(Jt(t,e,n)),s=gc(Jt(t,e,i)),o=gc(Jt(n,i,t)),a=gc(Jt(n,i,e));return!!(r!==s&&o!==a||r===0&&mc(t,n,e)||s===0&&mc(t,i,e)||o===0&&mc(n,t,i)||a===0&&mc(n,e,i))}function mc(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function gc(t){return t>0?1:t<0?-1:0}function uA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&C_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function cl(t,e){return Jt(t.prev,t,t.next)<0?Jt(t,e,t.next)>=0&&Jt(t,t.prev,e)>=0:Jt(t,e,t.prev)<0||Jt(t,t.next,e)<0}function dA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function R_(t,e){const n=new ph(t.i,t.x,t.y),i=new ph(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function _0(t,e,n,i){const r=new ph(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ul(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function ph(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Kr{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Kr.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];y0(e),S0(i,e);let o=e.length;n.forEach(y0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,S0(i,n[l]);const a=Z2.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function y0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function S0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Ba extends mn{constructor(e=new gs([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ft(r,3)),this.setAttribute("uv",new Ft(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,v=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:hA;let x,S=!1,L,A,R,F;d&&(x=d.getSpacedPoints(u),S=!0,h=!1,L=d.computeFrenetFrames(u,!1),A=new U,R=new U,F=new U),h||(g=0,p=0,v=0,y=0);const E=a.extractPoints(c);let T=E.shape;const V=E.holes;if(!Kr.isClockWise(T)){T=T.reverse();for(let I=0,re=V.length;I<re;I++){const ae=V[I];Kr.isClockWise(ae)&&(V[I]=ae.reverse())}}const te=Kr.triangulateShape(T,V),D=T;for(let I=0,re=V.length;I<re;I++){const ae=V[I];T=T.concat(ae)}function W(I,re,ae){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(re,ae)}const j=T.length,ee=te.length;function z(I,re,ae){let he,se,Je;const Ie=I.x-re.x,C=I.y-re.y,w=ae.x-I.x,H=ae.y-I.y,me=Ie*Ie+C*C,ge=Ie*H-C*w;if(Math.abs(ge)>Number.EPSILON){const fe=Math.sqrt(me),je=Math.sqrt(w*w+H*H),Ae=re.x-C/fe,ze=re.y+Ie/fe,Ue=ae.x-H/je,ut=ae.y+w/je,ne=((Ue-Ae)*H-(ut-ze)*w)/(Ie*H-C*w);he=Ae+Ie*ne-I.x,se=ze+C*ne-I.y;const Tt=he*he+se*se;if(Tt<=2)return new Me(he,se);Je=Math.sqrt(Tt/2)}else{let fe=!1;Ie>Number.EPSILON?w>Number.EPSILON&&(fe=!0):Ie<-Number.EPSILON?w<-Number.EPSILON&&(fe=!0):Math.sign(C)===Math.sign(H)&&(fe=!0),fe?(he=-C,se=Ie,Je=Math.sqrt(me)):(he=Ie,se=C,Je=Math.sqrt(me/2))}return new Me(he/Je,se/Je)}const $=[];for(let I=0,re=D.length,ae=re-1,he=I+1;I<re;I++,ae++,he++)ae===re&&(ae=0),he===re&&(he=0),$[I]=z(D[I],D[ae],D[he]);const Y=[];let le,de=$.concat();for(let I=0,re=V.length;I<re;I++){const ae=V[I];le=[];for(let he=0,se=ae.length,Je=se-1,Ie=he+1;he<se;he++,Je++,Ie++)Je===se&&(Je=0),Ie===se&&(Ie=0),le[he]=z(ae[he],ae[Je],ae[Ie]);Y.push(le),de=de.concat(le)}for(let I=0;I<g;I++){const re=I/g,ae=p*Math.cos(re*Math.PI/2),he=v*Math.sin(re*Math.PI/2)+y;for(let se=0,Je=D.length;se<Je;se++){const Ie=W(D[se],$[se],he);De(Ie.x,Ie.y,-ae)}for(let se=0,Je=V.length;se<Je;se++){const Ie=V[se];le=Y[se];for(let C=0,w=Ie.length;C<w;C++){const H=W(Ie[C],le[C],he);De(H.x,H.y,-ae)}}}const J=v+y;for(let I=0;I<j;I++){const re=h?W(T[I],de[I],J):T[I];S?(R.copy(L.normals[0]).multiplyScalar(re.x),A.copy(L.binormals[0]).multiplyScalar(re.y),F.copy(x[0]).add(R).add(A),De(F.x,F.y,F.z)):De(re.x,re.y,0)}for(let I=1;I<=u;I++)for(let re=0;re<j;re++){const ae=h?W(T[re],de[re],J):T[re];S?(R.copy(L.normals[I]).multiplyScalar(ae.x),A.copy(L.binormals[I]).multiplyScalar(ae.y),F.copy(x[I]).add(R).add(A),De(F.x,F.y,F.z)):De(ae.x,ae.y,f/u*I)}for(let I=g-1;I>=0;I--){const re=I/g,ae=p*Math.cos(re*Math.PI/2),he=v*Math.sin(re*Math.PI/2)+y;for(let se=0,Je=D.length;se<Je;se++){const Ie=W(D[se],$[se],he);De(Ie.x,Ie.y,f+ae)}for(let se=0,Je=V.length;se<Je;se++){const Ie=V[se];le=Y[se];for(let C=0,w=Ie.length;C<w;C++){const H=W(Ie[C],le[C],he);S?De(H.x,H.y+x[u-1].y,x[u-1].x+ae):De(H.x,H.y,f+ae)}}}ue(),Pe();function ue(){const I=r.length/3;if(h){let re=0,ae=j*re;for(let he=0;he<ee;he++){const se=te[he];st(se[2]+ae,se[1]+ae,se[0]+ae)}re=u+g*2,ae=j*re;for(let he=0;he<ee;he++){const se=te[he];st(se[0]+ae,se[1]+ae,se[2]+ae)}}else{for(let re=0;re<ee;re++){const ae=te[re];st(ae[2],ae[1],ae[0])}for(let re=0;re<ee;re++){const ae=te[re];st(ae[0]+j*u,ae[1]+j*u,ae[2]+j*u)}}i.addGroup(I,r.length/3-I,0)}function Pe(){const I=r.length/3;let re=0;Be(D,re),re+=D.length;for(let ae=0,he=V.length;ae<he;ae++){const se=V[ae];Be(se,re),re+=se.length}i.addGroup(I,r.length/3-I,1)}function Be(I,re){let ae=I.length;for(;--ae>=0;){const he=ae;let se=ae-1;se<0&&(se=I.length-1);for(let Je=0,Ie=u+g*2;Je<Ie;Je++){const C=j*Je,w=j*(Je+1),H=re+he+C,me=re+se+C,ge=re+se+w,fe=re+he+w;tt(H,me,ge,fe)}}}function De(I,re,ae){l.push(I),l.push(re),l.push(ae)}function st(I,re,ae){Xe(I),Xe(re),Xe(ae);const he=r.length/3,se=m.generateTopUV(i,r,he-3,he-2,he-1);He(se[0]),He(se[1]),He(se[2])}function tt(I,re,ae,he){Xe(I),Xe(re),Xe(he),Xe(re),Xe(ae),Xe(he);const se=r.length/3,Je=m.generateSideWallUV(i,r,se-6,se-3,se-2,se-1);He(Je[0]),He(Je[1]),He(Je[3]),He(Je[1]),He(Je[2]),He(Je[3])}function Xe(I){r.push(l[I*3+0]),r.push(l[I*3+1]),r.push(l[I*3+2])}function He(I){s.push(I.x),s.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return pA(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new fh[r.type]().fromJSON(r)),new Ba(i,e.options)}}const hA={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Me(s,o),new Me(a,l),new Me(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],v=e[r*3+2],y=e[s*3],g=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Me(o,1-l),new Me(c,1-f),new Me(h,1-v),new Me(y,1-d)]:[new Me(a,1-l),new Me(u,1-f),new Me(p,1-v),new Me(g,1-d)]}};function pA(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class hu extends Ep{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new hu(e.radius,e.detail)}}class pu extends mn{constructor(e=new gs([new Me(0,.5),new Me(-.5,-.5),new Me(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(s,3)),this.setAttribute("uv",new Ft(o,2));function c(u){const f=r.length/3,h=u.extractPoints(n);let p=h.shape;const v=h.holes;Kr.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,d=v.length;g<d;g++){const m=v[g];Kr.isClockWise(m)===!0&&(v[g]=m.reverse())}const y=Kr.triangulateShape(p,v);for(let g=0,d=v.length;g<d;g++){const m=v[g];p=p.concat(m)}for(let g=0,d=p.length;g<d;g++){const m=p[g];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let g=0,d=y.length;g<d;g++){const m=y[g],x=m[0]+f,S=m[1]+f,L=m[2]+f;i.push(x,S,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return mA(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new pu(i,e.curveSegments)}}function mA(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class Tp extends mn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new U,h=new U,p=[],v=[],y=[],g=[];for(let d=0;d<=i;d++){const m=[],x=d/i;let S=0;d===0&&o===0?S=.5/n:d===i&&l===Math.PI&&(S=-.5/n);for(let L=0;L<=n;L++){const A=L/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),g.push(A+S,1-x),m.push(c++)}u.push(m)}for(let d=0;d<i;d++)for(let m=0;m<n;m++){const x=u[d][m+1],S=u[d][m],L=u[d+1][m],A=u[d+1][m+1];(d!==0||o>0)&&p.push(x,S,A),(d!==i-1||l<Math.PI)&&p.push(S,L,A)}this.setIndex(p),this.setAttribute("position",new Ft(v,3)),this.setAttribute("normal",new Ft(y,3)),this.setAttribute("uv",new Ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cn extends Os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=t_,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const mh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class gA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const vA=new gA;class bp{constructor(e){this.manager=e!==void 0?e:vA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bp.DEFAULT_MATERIAL_NAME="__DEFAULT";class xA extends bp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=mh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=al("img");function l(){u(),mh.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class vc extends bp{constructor(e){super(e)}load(e,n,i,r){const s=new Yn,o=new xA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Ap extends wn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Qd=new en,M0=new U,w0=new U;class P_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xp,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;M0.setFromMatrixPosition(e.matrixWorld),n.position.copy(M0),w0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(w0),n.updateMatrixWorld(),Qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const E0=new en,va=new U,ef=new U;class _A extends P_{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new qt(2,1,1,1),new qt(0,1,1,1),new qt(3,1,1,1),new qt(1,1,1,1),new qt(3,0,1,1),new qt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),i.position.copy(va),ef.copy(i.position),ef.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ef),i.updateMatrixWorld(),r.makeTranslation(-va.x,-va.y,-va.z),E0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(E0)}}class yA extends Ap{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new _A}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class SA extends P_{constructor(){super(new _p(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tf extends Ap{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new SA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nf extends Ap{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class MA{constructor(e,n,i=0,r=1/0){this.ray=new gp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new vp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return gh(e,this,i,n),i.sort(T0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)gh(e[r],this,i,n);return i.sort(T0),i}}function T0(t,e){return t.distance-e.distance}function gh(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)gh(r[s],e,n,!0)}}class wA extends dh{constructor(e=10,n=10,i=4473924,r=8947848){i=new Et(i),r=new Et(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,v=-a;h<=n;h++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const y=h===s?i:r;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const u=new mn;u.setAttribute("position",new Ft(l,3)),u.setAttribute("color",new Ft(c,3));const f=new Fa({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dp);class rf extends Ic{constructor(e=null){super();const n=new ln;n.deleteAttribute("uv");const i=new cn({side:$n}),r=new cn;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const o=new yA(16777215,s,28,2);o.position.set(.418,16.199,.3),this.add(o);const a=new Ye(n,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const l=new Ye(n,r);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new Ye(n,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const u=new Ye(n,r);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const f=new Ye(n,r);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);const h=new Ye(n,r);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const p=new Ye(n,r);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const v=new Ye(n,uo(50));v.position.set(-16.116,14.37,8.208),v.scale.set(.1,2.428,2.739),this.add(v);const y=new Ye(n,uo(50));y.position.set(-16.109,18.021,-8.207),y.scale.set(.1,2.425,2.751),this.add(y);const g=new Ye(n,uo(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const d=new Ye(n,uo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const m=new Ye(n,uo(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const x=new Ye(n,uo(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function uo(t){const e=new Ji;return e.color.setScalar(t),e}/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),L_=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var TA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=Oe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>Oe.createElement("svg",{ref:l,...TA,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:L_("lucide",r),...a},[...o.map(([c,u])=>Oe.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=(t,e)=>{const n=Oe.forwardRef(({className:i,...r},s)=>Oe.createElement(bA,{ref:s,iconNode:e,className:L_(`lucide-${EA(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],xc=dn("Camera",AA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],RA=dn("Car",CA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],b0=dn("Download",PA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],NA=dn("FolderOpen",LA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],A0=dn("Image",DA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],UA=dn("Layers",IA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],FA=dn("LockOpen",OA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],zA=dn("Lock",kA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],HA=dn("Map",BA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],GA=dn("Move",VA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],C0=dn("Plus",WA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],XA=dn("Redo",jA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],YA=dn("Save",$A);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],ZA=dn("Square",qA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],R0=dn("Trash2",KA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],QA=dn("Trees",JA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],tC=dn("Type",eC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],iC=dn("Undo",nC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],sC=dn("Upload",rC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],sf=dn("X",oC),fo=()=>Math.random().toString(36).substr(2,9),An={camera:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899"],building:["#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b"],tree:["#22c55e","#16a34a","#15803d","#14532d","#84cc16","#bef264"],parking:["#e2e8f0","#cbd5e1","#94a3b8","#f8fafc","#ffffff","#f1f5f9"],label:["#1e293b","#334155","#475569","#64748b","#ef4444","#3b82f6"]},of={width:1e3,height:700},Qn=(t,e,n)=>Math.min(Math.max(t,e),n),af=t=>{let e=t%360;return e>180&&(e-=360),e<-180&&(e+=360),e},_c=(t,e)=>[{x:-t/2,y:-e/2},{x:t/2,y:-e/2},{x:t/2,y:e/2},{x:-t/2,y:e/2}],aC=t=>{const e=t.map(a=>a.x),n=t.map(a=>a.y),i=Math.min(...e),r=Math.max(...e),s=Math.min(...n),o=Math.max(...n);return{minX:i,maxX:r,minY:s,maxY:o,width:r-i,height:o-s}},lf=t=>{const e=new zr,n=t.width,i=t.height,r=12,s=3,o=t.color,l=t.id.split("").reduce((X,te)=>X+te.charCodeAt(0),0)%4,c=new cn({color:o,roughness:.2,metalness:.3,flatShading:!0}),u=new cn({color:"#1e293b",roughness:.1,metalness:.9,flatShading:!0}),f=new cn({color:"#171717",roughness:.5,flatShading:!0}),h=new Ns(s,s,n*.15,12);h.rotateZ(Math.PI/2);const p=i*.35,v=n*.45;(()=>{[-1,1].forEach(X=>{[-1,1].forEach(te=>{const D=new Ye(h,f);D.position.set(X*v,s,te*p),D.castShadow=!0,e.add(D)})})})();const g=s+1;if(l===1){const X=r*.9,te=new Ye(new ln(n,X,i),c);te.position.y=g+X/2,te.castShadow=!0,te.receiveShadow=!0,e.add(te);const D=r*.7,W=i*.8,j=n*.85,ee=new Ye(new ln(j,D,W),c);ee.position.y=g+X+D/2-2,ee.castShadow=!0,e.add(ee);const z=new Ye(new ln(j+.2,D*.7,W*.9),u);z.position.copy(ee.position),e.add(z)}else if(l===2){const X=i*.35,te=i*.6,D=r*1.5,W=new Ye(new ln(n,r*.6,i),c);W.position.y=g+r*.3,W.castShadow=!0,e.add(W);const j=new Ye(new ln(n*.95,D,X),c);j.position.set(0,g+r*.3+D/2,-i/2+X/2+2),j.castShadow=!0,e.add(j);const ee=new Ye(new ln(n+.1,D*.5,X*.7),u);ee.position.copy(j.position),ee.position.y+=2,e.add(ee);const z=4,$=new Ye(new ln(n*.95,z,te),c);$.position.set(0,g+r*.6+z/2,i/2-te/2),e.add($)}else if(l===3){const X=r*.7,te=new Ye(new ln(n,X,i),c);te.position.y=g+X/2,te.castShadow=!0,e.add(te);const D=r*.5,W=i*.5,j=new Ye(new ln(n*.7,D,W),c);j.position.y=g+X+D/2-1,e.add(j);const ee=new Ye(new ln(n*.72,D*.8,W*.8),u);ee.position.copy(j.position),e.add(ee)}else{const X=r*.6,te=new Ye(new ln(n,X,i),c);te.position.y=g+X/2,te.castShadow=!0,e.add(te);const D=r*.8,W=i*.5,j=new Ye(new ln(n*.85,D,W),c);j.position.y=g+X+D/2-1,j.castShadow=!0,e.add(j);const ee=new Ye(new ln(n*.9,D*.8,W*.9),u);ee.position.copy(j.position),e.add(ee)}const d=new xi(3,2),m=new Ji({color:"#fef3c7"}),x=new Ji({color:"#ef4444"}),S=-i/2-.1,L=i/2+.1,A=g+r*.6,R=n*.35,F=new Ye(d,m);F.position.set(-R,A,S),F.rotation.y=Math.PI,e.add(F);const E=new Ye(d,m);E.position.set(R,A,S),E.rotation.y=Math.PI,e.add(E);const T=new Ye(d,x);T.position.set(-R,A,L),e.add(T);const V=new Ye(d,x);return V.position.set(R,A,L),e.add(V),e.position.set(t.x,0,t.y),e.rotation.y=-On.degToRad(t.rotation),e},cf=t=>{const e=new zr,n=t.id.split("").reduce((f,h)=>f+h.charCodeAt(0),0),i=n%2===0,r=t.radius*.25,s=i?t.radius*2:t.radius*1.5,o=new Ns(r*.6,r,s,6),a=new cn({color:"#4a3728",roughness:1,flatShading:!0}),l=new Ye(o,a);l.position.y=s/2,l.castShadow=!0,l.receiveShadow=!0,e.add(l);const c=i?"#1e4620":t.color,u=new cn({color:c,roughness:.8,flatShading:!0});if(i){const h=t.radius,p=t.radius*2.5/4;for(let v=0;v<4;v++){const y=v/3,g=h*(1-y*.6),d=s*.3+v*(p*.8),m=new Ye(new wp(g,p*1.5,7),u);m.position.y=d,m.castShadow=!0,m.receiveShadow=!0,e.add(m)}}else{const f=new hu(t.radius*.8,0),h=new Ye(f,u);h.position.y=s+t.radius*.2,h.castShadow=!0,h.receiveShadow=!0,e.add(h);const p=10;for(let v=0;v<p;v++){const g=(n+v*13)%100/100*Math.PI*2,d=(n+v*7)%100/100*Math.PI,m=t.radius*(.3+(n+v*3)%5/10),x=t.radius*.7,S=new Ye(new hu(m,0),u);S.position.set(Math.sin(d)*Math.cos(g)*x,h.position.y+Math.cos(d)*x*.8,Math.sin(d)*Math.sin(g)*x),S.castShadow=!0,e.add(S)}}return e.position.set(t.x,0,t.y),e},lC=(t,e,n)=>{const i=aC(t);if(i.width===0||i.height===0)return t;const r={x:(i.minX+i.maxX)/2,y:(i.minY+i.maxY)/2},s=e/i.width,o=n/i.height;return t.map(a=>({x:r.x+(a.x-r.x)*s,y:r.y+(a.y-r.y)*o}))},cC=t=>{if(t.length<2)return t;let e=0,n=0;for(let o=0;o<t.length;o+=1){const a=(o+1)%t.length,l=t[a].x-t[o].x,c=t[a].y-t[o].y,u=Math.hypot(l,c);u>n&&(n=u,e=o)}const i=(e+1)%t.length,r={x:(t[e].x+t[i].x)/2,y:(t[e].y+t[i].y)/2},s=[...t];return s.splice(e+1,0,r),s},uC=(t,e)=>{if(t.length<2)return t;let n=0,i=Number.POSITIVE_INFINITY,r=e;for(let o=0;o<t.length;o+=1){const a=(o+1)%t.length,l=t[o],c=t[a],u={x:c.x-l.x,y:c.y-l.y},f={x:e.x-l.x,y:e.y-l.y},h=u.x*u.x+u.y*u.y||1;let p=(f.x*u.x+f.y*u.y)/h;p=Qn(p,0,1);const v={x:l.x+u.x*p,y:l.y+u.y*p},y=Math.hypot(e.x-v.x,e.y-v.y);y<i&&(i=y,n=o+1,r=v)}const s=[...t];return s.splice(n,0,r),s},dC=(t,e)=>{const n=t.replace("#",""),i=n.length===3?n.split("").map(l=>l+l).join(""):n,r=parseInt(i,16),s=Qn((r>>16)+e,0,255),o=Qn((r>>8&255)+e,0,255),a=Qn((r&255)+e,0,255);return`#${(s<<16|o<<8|a).toString(16).padStart(6,"0")}`},fC=(t,e)=>{const n=t*Math.PI/180,i=2*Math.atan(Math.tan(n/2)/Math.sqrt(e*e+1));return{h:2*Math.atan(Math.tan(i/2)*e)*180/Math.PI,v:i*180/Math.PI}},hC=(t,e)=>{const n=t*Math.PI/180,i=e*Math.PI/180;return 2*Math.atan(Math.sqrt(Math.tan(n/2)**2+Math.tan(i/2)**2))*180/Math.PI},xa=(t,e)=>{const n=t*Math.PI/180;return 2*Math.atan(Math.tan(n/2)/e)*180/Math.PI},pC=(t,e)=>{const n=t*Math.PI/180;return 2*Math.atan(Math.tan(n/2)*e)*180/Math.PI};function mC(){var Lp,Np,Dp,Ip,Up,Op;const[t,e]=Oe.useState([]),[n,i]=Oe.useState(null),r=Oe.useRef(null);Oe.useEffect(()=>{r.current=n},[n]);const[s,o]=Oe.useState([]),[a,l]=Oe.useState(-1),c=Oe.useRef([]),u=Oe.useRef(-1);Oe.useEffect(()=>{c.current=s,u.current=a},[s,a]);const f=()=>{const _=JSON.stringify(t);a>=0&&s[a]===_||(o(b=>{const N=b.slice(0,a+1);return N.push(_),N.length>30&&N.shift(),N}),l(b=>{const N=b+1;return N>=30?29:N}))},h=()=>{const _=u.current;if(_>0){const b=_-1;try{const N=JSON.parse(c.current[b]);e(N),l(b)}catch(N){console.error("Undo failed",N)}}},p=()=>{const _=u.current;if(_<c.current.length-1){const b=_+1;try{const N=JSON.parse(c.current[b]);e(N),l(b)}catch(N){console.error("Redo failed",N)}}},[v,y]=Oe.useState(of),[g,d]=Oe.useState(null),[m,x]=Oe.useState({x:0,y:0,width:of.width,height:of.height,opacity:.5}),[S,L]=Oe.useState(20),[A,R]=Oe.useState(!0),[F,E]=Oe.useState(!0),[T,V]=Oe.useState("Security Camera Plan"),[X,te]=Oe.useState(!1),[D,W]=Oe.useState("plan"),[j,ee]=Oe.useState({scale:2,padding:48,includeGrid:!0,includeLegend:!0,includeTitle:!0,includeCameraViews:!0}),[z,$]=Oe.useState({x:0,y:0}),[Y,le]=Oe.useState(1),[de,J]=Oe.useState(!1),[ue,Pe]=Oe.useState({x:0,y:0,panX:0,panY:0}),[Be,De]=Oe.useState(!1),st=Oe.useRef(!1),[tt,Xe]=Oe.useState("select"),[He,I]=Oe.useState(null),[re,ae]=Oe.useState({type:null,itemId:null,startMouse:{x:0,y:0},startVal:null,snap:!1}),he=Oe.useRef(null),se=Oe.useRef(null),Je=Oe.useRef(null),Ie=Oe.useRef(null),C=Oe.useRef(null),w=Oe.useRef(null),H=Oe.useRef(null),[me,ge]=Oe.useState([]),[fe,je]=Oe.useState(!1),[Ae,ze]=Oe.useState(!0),[Ue,ut]=Oe.useState([]),[ne,Tt]=Oe.useState({visible:!0,opacity:.15,edgeOpacity:.6,useCameraColor:!0,color:"#3b82f6",showAll:!0,mode:"volume"}),[dt,ht]=Oe.useState(null),[$e,Ve]=Oe.useState("flat"),[nt,Rt]=Oe.useState(null);Oe.useEffect(()=>{const _=localStorage.getItem("securityCameraPlannerData");if(_)try{const b=JSON.parse(_);b.items&&e(b.items),b.backgroundImg&&d(b.backgroundImg),b.bgSettings&&x(b.bgSettings),b.canvasSize&&y(b.canvasSize),b.exportList&&ut(b.exportList),b.projectName&&V(b.projectName),b.frustumSettings&&Tt(b.frustumSettings),b.sceneBackgroundImg&&ht(b.sceneBackgroundImg),b.backgroundMode&&Ve(b.backgroundMode)}catch(b){console.error("Failed to load saved state",b)}},[]),Oe.useEffect(()=>{const _=setTimeout(()=>{try{const b={items:t,backgroundImg:g,bgSettings:m,canvasSize:v,exportList:Ue,projectName:T,frustumSettings:ne,sceneBackgroundImg:dt,backgroundMode:$e};localStorage.setItem("securityCameraPlannerData",JSON.stringify(b))}catch(b){if(b.name==="QuotaExceededError"||b.name==="NS_ERROR_DOM_QUOTA_REACHED"){console.error("Storage full, trying to save without background image");try{const N={items:t,bgSettings:m,canvasSize:v,exportList:Ue,projectName:T};localStorage.setItem("securityCameraPlannerData",JSON.stringify(N))}catch(N){console.error("Still failed to save",N)}}else console.error("Failed to save state",b)}},1e3);return()=>clearTimeout(_)},[t,g,m,v,Ue,T,ne,dt,$e]);const zt=Oe.useRef(null),gt=Oe.useRef(null),Te=(_,b=F)=>b?Math.round(_/S)*S:_,O=_=>_.points&&_.points.length>=3?_.points:_c(_.width,_.height),Le=(_,b)=>{const N=b*Math.PI/180,B=Math.cos(N),k=Math.sin(N);return{x:_.x*B-_.y*k,y:_.x*k+_.y*B}},Ne=(_,b)=>{const N=Le(_,b.rotation);return{x:b.x+N.x,y:b.y+N.y}},lt=(_,b)=>{const N=_.x-b.x,B=_.y-b.y;return Le({x:N,y:B},-b.rotation)},rt=_=>t.find(b=>b.type==="building"&&b.id===_),Pt=_=>O(_).map(N=>Ne(N,_)),Ct=_=>{var b;if(((b=_.mount)==null?void 0:b.type)==="building"&&_.mount.buildingId){const N=rt(_.mount.buildingId);if(!N)return{x:_.x,y:_.y};const B=Pt(N);if(B.length<2)return{x:_.x,y:_.y};const k=Qn(_.mount.edgeIndex??0,0,B.length-1),oe=(k+1)%B.length,Q=B[k],ie=B[oe],xe=Qn(_.mount.edgeT??.5,0,1),pe={x:Q.x+(ie.x-Q.x)*xe,y:Q.y+(ie.y-Q.y)*xe},Ee=B.reduce((be,ce)=>({x:be.x+ce.x,y:be.y+ce.y}),{x:0,y:0});B.length>0&&(Ee.x/=B.length,Ee.y/=B.length);const Ge={x:pe.x-Ee.x,y:pe.y-Ee.y},Ze=Math.hypot(Ge.x,Ge.y)||1,ve=3;return{x:pe.x+Ge.x/Ze*ve,y:pe.y+Ge.y/Ze*ve}}return{x:_.x,y:_.y}},sn=_=>{let b=null;return t.forEach(N=>{if(N.type!=="building")return;const B=N,k=Pt(B);for(let oe=0;oe<k.length;oe+=1){const Q=(oe+1)%k.length,ie=k[oe],xe=k[Q],pe={x:xe.x-ie.x,y:xe.y-ie.y},Ee={x:_.x-ie.x,y:_.y-ie.y},Ge=pe.x*pe.x+pe.y*pe.y||1;let Ze=(Ee.x*pe.x+Ee.y*pe.y)/Ge;Ze=Qn(Ze,0,1);const ve={x:ie.x+pe.x*Ze,y:ie.y+pe.y*Ze},be=Math.hypot(_.x-ve.x,_.y-ve.y);(!b||be<b.distance)&&(b={buildingId:B.id,edgeIndex:oe,edgeT:Ze,distance:be,point:ve})}}),b},xn=_=>{let b=null;return t.forEach(N=>{if(N.type!=="building")return;const B=N,k=Pt(B),oe={x:k.reduce((Q,ie)=>Q+ie.x,0)/k.length,y:k.reduce((Q,ie)=>Q+ie.y,0)/k.length};for(let Q=0;Q<k.length;Q+=1){const ie=(Q+1)%k.length,xe=k[Q],pe=k[ie],Ee={x:pe.x-xe.x,y:pe.y-xe.y},Ge={x:_.x-xe.x,y:_.y-xe.y},Ze=Ee.x*Ee.x+Ee.y*Ee.y||1;let ve=(Ge.x*Ee.x+Ge.y*Ee.y)/Ze;ve=Qn(ve,0,1);const be={x:xe.x+Ee.x*ve,y:xe.y+Ee.y*ve},ce=Math.hypot(_.x-be.x,_.y-be.y),Re={x:(xe.x+pe.x)/2,y:(xe.y+pe.y)/2},ye={x:Re.x-oe.x,y:Re.y-oe.y},ke=Math.atan2(ye.y,ye.x)*(180/Math.PI);(!b||ce<b.distance)&&(b={buildingId:B.id,edgeIndex:Q,edgeT:ve,distance:ce,point:be,rotation:ke})}}),b};v.width/2;const It=(_,b)=>{if(!he.current||D==="iso3d")return;const N=he.current.getScreenCTM();if(!N)return;const B=Te((_.clientX-N.e)/N.a),k=Te((_.clientY-N.f)/N.d);let oe;const Q={id:fo(),x:B,y:k,rotation:0};switch(b){case"add-camera":oe={...Q,type:"camera",rotation:45,label:"Camera",description:"",fov:70,hFov:70,vFov:45,pitch:-15,height:60,aspect:16/9,mount:{type:"free",edgeT:.5,height:60},range:150,color:An.camera[0],labelOffset:{x:0,y:30},connectorDashSize:3};break;case"add-building":oe={...Q,type:"building",width:100,height:80,label:"Building",color:An.building[0],points:_c(100,80)};break;case"add-tree":oe={...Q,type:"tree",radius:25,color:An.tree[0]};break;case"add-parking":oe={...Q,type:"parking",width:30,height:50,color:An.parking[0]};break;case"add-label":oe={...Q,type:"label",text:"Label",fontSize:14,color:An.label[0]};break;default:return}if(oe.type==="camera"){const ie=xn({x:B,y:k});if(ie&&ie.distance<100){const xe=oe;xe.x=ie.point.x,xe.y=ie.point.y,xe.rotation=ie.rotation;const pe=60;xe.mount={type:"building",buildingId:ie.buildingId,edgeIndex:ie.edgeIndex,edgeT:ie.edgeT,height:pe},xe.height=pe}Rt(null)}e([...t,oe]),I(oe.id),Xe("select")},En=_=>{const b={id:fo(),type:"image",x:400,y:300,rotation:0,width:150,height:150,src:_,label:"Image",aspectRatioLocked:!0};e([...t,b]),I(b.id)},vt=(_,b)=>{e(t.map(N=>N.id===_?{...N,...b}:N))},Fs=(_,b)=>{const N=t.find(B=>B.id===_);!N||N.type!=="camera"||vt(_,{mount:{...N.mount??{type:"free"},...b}})},Ou=_=>{var B;const b=t.find(k=>k.id===_);if(!b||b.type!=="camera")return;const N=sn(b);N&&vt(_,{x:N.point.x,y:N.point.y,mount:{type:"building",buildingId:N.buildingId,edgeIndex:N.edgeIndex,edgeT:N.edgeT,height:((B=b.mount)==null?void 0:B.height)??b.height??10}})},Bi=(_,b,N,B)=>{vt(_,{hFov:b,vFov:N,aspect:B,fov:b})},Jo=(_,b,N)=>{const B=t.find(Q=>Q.id===_);if(!B||B.type!=="building")return;const k=O(B),oe=lC(k,b,N);vt(_,{width:b,height:N,points:oe})},ks=_=>{const b=t.find(B=>B.id===_);if(!b||b.type!=="building")return;const N=cC(O(b));vt(_,{points:N})},Qo=(_,b)=>{const N=t.find(oe=>oe.id===_);if(!N||N.type!=="building")return;const B=lt(b,N),k=uC(O(N),B);vt(_,{points:k})},_l=_=>{const b=t.find(B=>B.id===_);if(!b||b.type!=="building")return;const N=O(b);N.length<=3||vt(_,{points:N.slice(0,-1)})},Fu=_=>{const b=t.find(N=>N.id===_);!b||b.type!=="building"||vt(_,{points:_c(b.width,b.height)})},zs=(_,b,N)=>{const B=t.find(oe=>oe.id===_);if(!B||B.type!=="image")return;if(!B.aspectRatioLocked){vt(_,{width:b??B.width,height:N??B.height});return}const k=B.width/B.height;b!==void 0?vt(_,{width:b,height:b/k}):N!==void 0&&vt(_,{width:N*k,height:N})},yl=_=>{e(t.filter(b=>b.id!==_)),He===_&&I(null)},P=()=>{t.length&&window.confirm("Clear all items from the canvas?")&&(e([]),I(null))},G=()=>{x({...m,x:0,y:0,width:v.width,height:v.height})},Z=()=>{if(!he.current)return;const{scale:_,padding:b,includeGrid:N,includeLegend:B,includeTitle:k}=j,oe=new Date().toLocaleString(),Q=v.width,ie=v.height,xe=k?52:0,pe=B?90:0,Ee=Q+b*2,Ge=ie+b*2+xe+pe,Ze="http://www.w3.org/2000/svg",ve=document.createElementNS(Ze,"svg");ve.setAttribute("xmlns",Ze),ve.setAttribute("width",`${Ee}`),ve.setAttribute("height",`${Ge}`),ve.setAttribute("viewBox",`0 0 ${Ee} ${Ge}`);const be=document.createElementNS(Ze,"rect");if(be.setAttribute("x","0"),be.setAttribute("y","0"),be.setAttribute("width",`${Ee}`),be.setAttribute("height",`${Ge}`),be.setAttribute("fill","#ffffff"),ve.appendChild(be),k){const qe=document.createElementNS(Ze,"text");qe.setAttribute("x",`${b}`),qe.setAttribute("y",`${b+24}`),qe.setAttribute("font-size","20"),qe.setAttribute("font-weight","700"),qe.setAttribute("fill","#0f172a"),qe.textContent=T||"Security Camera Plan",ve.appendChild(qe);const ft=document.createElementNS(Ze,"text");ft.setAttribute("x",`${b}`),ft.setAttribute("y",`${b+44}`),ft.setAttribute("font-size","12"),ft.setAttribute("fill","#64748b"),ft.textContent=`Exported ${oe}`,ve.appendChild(ft)}const ce=document.createElementNS(Ze,"g"),Re=b+xe;ce.setAttribute("transform",`translate(${b}, ${Re})`);const ye=he.current.cloneNode(!0);if(ye.removeAttribute("width"),ye.removeAttribute("height"),!N){const qe=ye.querySelector("#grid-bg");qe&&qe.remove()}for(;ye.childNodes.length>0;)ce.appendChild(ye.childNodes[0]);ve.appendChild(ce);const ke=document.createElementNS(Ze,"rect");if(ke.setAttribute("x",`${b-1}`),ke.setAttribute("y",`${Re-1}`),ke.setAttribute("width",`${Q+2}`),ke.setAttribute("height",`${ie+2}`),ke.setAttribute("fill","none"),ke.setAttribute("stroke","#e2e8f0"),ke.setAttribute("stroke-width","2"),ve.appendChild(ke),B){const qe=Re+ie+36,ft=[{label:"Cameras",count:t.filter(Mt=>Mt.type==="camera").length,color:An.camera[0]},{label:"Buildings",count:t.filter(Mt=>Mt.type==="building").length,color:An.building[0]},{label:"Trees",count:t.filter(Mt=>Mt.type==="tree").length,color:An.tree[0]},{label:"Parking",count:t.filter(Mt=>Mt.type==="parking").length,color:An.parking[0]},{label:"Labels",count:t.filter(Mt=>Mt.type==="label").length,color:An.label[0]}],at=document.createElementNS(Ze,"text");at.setAttribute("x",`${b}`),at.setAttribute("y",`${qe}`),at.setAttribute("font-size","12"),at.setAttribute("font-weight","600"),at.setAttribute("fill","#0f172a"),at.textContent="Legend",ve.appendChild(at),ft.forEach((Mt,fn)=>{const ir=b+fn*150,Bn=document.createElementNS(Ze,"rect");Bn.setAttribute("x",`${ir}`),Bn.setAttribute("y",`${qe+14}`),Bn.setAttribute("width","10"),Bn.setAttribute("height","10"),Bn.setAttribute("rx","2"),Bn.setAttribute("fill",Mt.color),ve.appendChild(Bn);const Ci=document.createElementNS(Ze,"text");Ci.setAttribute("x",`${ir+16}`),Ci.setAttribute("y",`${qe+23}`),Ci.setAttribute("font-size","11"),Ci.setAttribute("fill","#475569"),Ci.textContent=`${Mt.label} (${Mt.count})`,ve.appendChild(Ci)})}const Ke=document.createElement("canvas"),Se=Ke.getContext("2d");Ke.width=Ee*_,Ke.height=Ge*_,Se&&Se.scale(_,_);const et=new XMLSerializer().serializeToString(ve),it=new Image,_t=new Blob([et],{type:"image/svg+xml;charset=utf-8"}),ct=URL.createObjectURL(_t);it.onload=()=>{if(Se){Se.fillStyle="#ffffff",Se.fillRect(0,0,Ee,Ge),Se.drawImage(it,0,0);const qe=Ke.toDataURL("image/png"),ft=document.createElement("a");ft.href=qe,ft.download="security_plan.png",document.body.appendChild(ft),ft.click(),document.body.removeChild(ft)}URL.revokeObjectURL(ct)},it.src=ct},K=(_,b,N,B)=>{ut(k=>[...k,{id:crypto.randomUUID(),type:_,label:b,dataUrl:N,cameraId:B}])},q=_=>{var Ke;const B=Ct(_),k=((Ke=_.mount)==null?void 0:Ke.height)??_.height??10,oe=_.hFov??_.fov,Q=_.pitch??-15,ie=_.range,xe=On.degToRad(_.rotation),pe=new Ic;pe.background=new Et("#87CEEB"),pe.fog=new Oa("#87CEEB",ie*.3,ie*1.2);const Ee=new ti(oe,640/480,1,ie*2);Ee.position.set(B.x,k,B.y);const Ge=On.degToRad(Q),Ze=new U(B.x+Math.cos(xe)*100,k+Math.tan(Ge)*100,B.y+Math.sin(xe)*100);Ee.lookAt(Ze),pe.add(new nf(16777215,.5));const ve=new tf(16777215,.7);ve.position.set(100,200,50),pe.add(ve);const be=new Ye(new xi(v.width*2,v.height*2),new cn({color:"#6B8E23",roughness:.9}));if(be.rotation.x=-Math.PI/2,be.position.set(v.width/2,0,v.height/2),pe.add(be),gt.current){const Se=new qd(gt.current);Se.colorSpace=$t;const et=new Ye(new xi(m.width,m.height),new Ji({map:Se,transparent:!0,opacity:m.opacity}));et.rotation.x=-Math.PI/2,et.position.set(m.x+m.width/2,.1,m.y+m.height/2),pe.add(et)}t.forEach(Se=>{if(Se.type==="building"){const et=Se,it=O(et),_t=new gs(it.map(ft=>new Me(ft.x,-ft.y))),ct=new Ba(_t,{depth:60,bevelEnabled:!1});ct.rotateX(-Math.PI/2);const qe=new Ye(ct,new cn({color:et.color,side:ui}));qe.position.set(et.x,0,et.y),qe.rotation.y=-On.degToRad(et.rotation),pe.add(qe)}if(Se.type==="tree"){const et=cf(Se);pe.add(et)}if(Se.type==="parking"){const et=lf(Se);pe.add(et)}});const ce=document.createElement("canvas");ce.width=640,ce.height=480;const Re=new Dc({canvas:ce,antialias:!0});Re.setSize(640,480),Re.render(pe,Ee);const ye=ce.getContext("2d");if(ye){ye.fillStyle="rgba(0,0,0,0.7)",ye.fillRect(0,0,640,30),ye.fillStyle="#fff",ye.font="bold 14px sans-serif",ye.fillText(`📷 ${_.label}`,10,20),ye.font="12px sans-serif",ye.fillStyle="#94a3b8";const Se=`FOV: ${oe.toFixed(0)}° | Pitch: ${Q}° | Range: ${ie}px`;ye.fillText(Se,640-ye.measureText(Se).width-10,20)}const ke=ce.toDataURL("image/png");return Re.dispose(),ke},Fe=()=>{if(!he.current)return;const _=new XMLSerializer().serializeToString(he.current),b=document.createElement("canvas");b.width=v.width*2,b.height=v.height*2;const N=b.getContext("2d");if(!N)return;const B=new Image,k=new Blob([_],{type:"image/svg+xml;charset=utf-8"}),oe=URL.createObjectURL(k);B.onload=()=>{N.scale(2,2),N.fillStyle="#f8fafc",N.fillRect(0,0,v.width,v.height),N.drawImage(B,0,0),K("plan","2D Plan View",b.toDataURL("image/png")),URL.revokeObjectURL(oe)},B.src=oe},Qe=_=>{const b=q(_);K("camera",`Camera: ${_.label}`,b,_.id)},ot=_=>{var B;const b=(B=_.target.files)==null?void 0:B[0];if(!b)return;const N=new FileReader;N.onload=k=>{var ie;const oe=(ie=k.target)==null?void 0:ie.result,Q=new Image;Q.onload=()=>{const xe=Q.width/Q.height,pe=xe>=1.8&&xe<=2.2;ht(oe),Ve(pe?"panorama":"flat")},Q.src=oe},N.readAsDataURL(b)},pt=async()=>{if(Ue.length===0){alert("Add some views to the export list first!");return}const _=2,b=40,N=800,B=600,k=2,oe=Math.ceil(Ue.length/k),Q=(N+b)*k+b,ie=120,xe=ie+(B+b+30)*oe+b,pe=document.createElement("canvas");pe.width=Q*_,pe.height=xe*_;const Ee=pe.getContext("2d");if(!Ee)return;Ee.scale(_,_),Ee.fillStyle="#fff",Ee.fillRect(0,0,Q,xe),Ee.fillStyle="#0f172a",Ee.font="bold 28px sans-serif",Ee.fillText(T||"Security Camera Plan",b,b+30),Ee.fillStyle="#64748b",Ee.font="14px sans-serif",Ee.fillText(`Exported: ${new Date().toLocaleString()} | ${Ue.length} view(s)`,b,b+55);const Ge=be=>new Promise((ce,Re)=>{const ye=new Image;ye.onload=()=>ce(ye),ye.onerror=Re,ye.src=be});for(let be=0;be<Ue.length;be++){const ce=Ue[be],Re=be%k,ye=Math.floor(be/k),ke=b+Re*(N+b),Ke=ie+ye*(B+b+30);Ee.fillStyle="#334155",Ee.font="bold 14px sans-serif",Ee.fillText(ce.label,ke,Ke+20),Ee.fillStyle="#f1f5f9",Ee.fillRect(ke,Ke+28,N,B),Ee.strokeStyle="#e2e8f0",Ee.lineWidth=2,Ee.strokeRect(ke,Ke+28,N,B);try{const Se=await Ge(ce.dataUrl),et=Se.width/Se.height,it=N/B;let _t,ct,qe,ft;et>it?(_t=N,ct=N/et,qe=ke,ft=Ke+28+(B-ct)/2):(ct=B,_t=B*et,qe=ke+(N-_t)/2,ft=Ke+28),Ee.drawImage(Se,qe,ft,_t,ct)}catch{Ee.fillStyle="#cbd5e1",Ee.font="16px sans-serif",Ee.fillText("Failed to load image",ke+20,Ke+100)}}const Ze=pe.toDataURL("image/png"),ve=document.createElement("a");ve.href=Ze,ve.download=`${(T||"security_plan").replace(/\s+/g,"_")}_report.png`,document.body.appendChild(ve),ve.click(),document.body.removeChild(ve)},yt=()=>{if(Ue.length===0){alert("Add some views to the export list first!");return}const _=window.open("","_blank");if(!_){alert("Please allow popups to export PDF");return}const b=`
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
        <div class="meta">Exported: ${new Date().toLocaleString()} | ${Ue.length} view(s)</div>
        
        ${Ue.map(N=>`
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
    `;_.document.write(b),_.document.close()},mt=()=>{const b=JSON.stringify({version:1,items:t,backgroundImg:g,bgSettings:m,canvasSize:v,gridSize:S,showGrid:A,snapToGrid:F,projectName:T,exportList:Ue},null,2),N=new Blob([b],{type:"application/json"}),B=URL.createObjectURL(N),k=document.createElement("a");k.href=B,k.download="security_project.json",document.body.appendChild(k),k.click(),document.body.removeChild(k),URL.revokeObjectURL(B)},xt=_=>{var B;const b=(B=_.target.files)==null?void 0:B[0];if(!b)return;const N=new FileReader;N.onload=k=>{var oe;try{const Q=(oe=k.target)==null?void 0:oe.result,ie=JSON.parse(Q);ie.items&&e(ie.items),ie.backgroundImg&&d(ie.backgroundImg),ie.bgSettings&&x(ie.bgSettings),ie.canvasSize&&y(ie.canvasSize),typeof ie.gridSize=="number"&&L(ie.gridSize),typeof ie.showGrid=="boolean"&&R(ie.showGrid),typeof ie.snapToGrid=="boolean"&&E(ie.snapToGrid),ie.projectName&&V(ie.projectName),ie.exportList&&ut(ie.exportList)}catch(Q){console.error("Failed to load project file",Q),alert("Invalid project file.")}},N.readAsText(b)},Zt=_=>{var N;const b=(N=_.target.files)==null?void 0:N[0];if(b){const B=new FileReader;B.onload=k=>{var oe;return d((oe=k.target)==null?void 0:oe.result)},B.readAsDataURL(b)}},zn=_=>{var N;const b=(N=_.target.files)==null?void 0:N[0];if(b){const B=new FileReader;B.onload=k=>{var oe;return En((oe=k.target)==null?void 0:oe.result)},B.readAsDataURL(b)}},on=_=>{_.traverse(b=>{const N=b;N.geometry&&N.geometry.dispose(),N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.dispose()):N.material.dispose())}),_.clear()},oi=_=>{const b=document.createElement("canvas"),N=b.getContext("2d");if(!N)return null;const B=56,k=24;N.font=`${B}px Space Grotesk, sans-serif`;const oe=N.measureText(_);b.width=Math.ceil(oe.width+k*2),b.height=Math.ceil(B+k*1.6),N.font=`${B}px Space Grotesk, sans-serif`,N.fillStyle="rgba(15, 23, 42, 0.9)",N.textBaseline="middle",N.fillText(_,k,b.height/2);const Q=new qd(b);Q.colorSpace=$t;const ie=new y_({map:Q,transparent:!0}),xe=new O2(ie);return xe.scale.set(b.width/10,b.height/10,1),xe},Vt=(_,b,N,B)=>{const k=_.x,oe=_.y,Q=b.x,ie=b.y,xe=N.x,pe=N.y,Ee=B.x,Ge=B.y,Ze=k-xe,ve=oe-pe,be=Ee-xe,ce=Ge-pe,Re=-ie,ye=Q,ke=be*Re+ce*ye;if(Math.abs(ke)<1e-6)return null;const Ke=(be*ve-ce*Ze)/ke,Se=(Ze*Re+ve*ye)/ke;return Ke>=0&&Se>=0&&Se<=1?Ke:null},St=(_,b,N,B,k)=>{const oe=k.flatMap(Ge=>{if(Ge.type==="building"){const ve=Pt(Ge);return ve.length<2?[]:ve.map((be,ce)=>[be,ve[(ce+1)%ve.length]])}else if(Ge.type==="tree"){const Ze=Ge,ve=[],be=8;for(let ce=0;ce<be;ce++){const Re=ce/be*Math.PI*2;ve.push({x:Ze.x+Ze.radius*Math.cos(Re),y:Ze.y+Ze.radius*Math.sin(Re)})}return ve.map((ce,Re)=>[ce,ve[(Re+1)%ve.length]])}return[]}),Q=128,ie=(B-N/2)*(Math.PI/180),pe=N*(Math.PI/180)/(Q-1),Ee=[];for(let Ge=0;Ge<Q;Ge++){const Ze=ie+Ge*pe,ve={x:Math.cos(Ze),y:Math.sin(Ze)};let be=b;for(const ce of oe){const Re=Vt(_,ve,ce[0],ce[1]);Re!==null&&Re<be&&(be=Re)}Ee.push({x:be*ve.x,y:be*ve.y})}return Ee},ea=()=>{const _=H.current;if(!_)return;const{group:b,scene:N,renderer:B}=_;on(b);const k=Math.max(v.width,v.height)*2,oe=new xi(k,k),Q=new cn({color:592139,roughness:.95,metalness:0}),ie=new Ye(oe,Q);ie.rotation.x=-Math.PI/2,ie.position.set(v.width/2,-.5,v.height/2),ie.receiveShadow=!0,b.add(ie);const xe=new wA(k,Math.round(k/S),2565930,2565930);xe.position.set(v.width/2,.01,v.height/2),A&&b.add(xe);const pe=new Ye(new xi(v.width,v.height),new cn({color:1579035,roughness:.8,metalness:0}));pe.rotation.x=-Math.PI/2,pe.position.set(v.width/2,.02,v.height/2),pe.receiveShadow=!0,b.add(pe);const Ee=new mn,Ge=new Float32Array([0,.1,0,v.width,.1,0,v.width,.1,v.height,0,.1,v.height,0,.1,0]);Ee.setAttribute("position",new Ti(Ge,3));const Ze=new M_(Ee,new Fa({color:9741240,linewidth:2}));if(b.add(Ze),g){const ve=new cn({color:16777215,transparent:!0,opacity:m.opacity,roughness:.9});new vc().load(g,ce=>{ce.colorSpace=$t,ce.wrapS=di,ce.wrapT=di,ce.minFilter=jn,ce.magFilter=jn,ve.map=ce,ve.needsUpdate=!0,B.render(N,_.camera)});const be=new Ye(new xi(m.width,m.height),ve);be.rotation.x=-Math.PI/2,be.position.set(m.x+m.width/2,.08,m.y+m.height/2),be.receiveShadow=!0,b.add(be)}if(t.forEach(ve=>{var be;if(ve.type==="building"){const ce=ve,Re=O(ce),ye=60,ke=new gs(Re.map(Mt=>new Me(Mt.x,-Mt.y))),Ke={depth:ye,bevelEnabled:!0,bevelThickness:2,bevelSize:1,bevelSegments:2},Se=new Ba(ke,Ke);Se.rotateX(-Math.PI/2);const et=new cn({color:ce.color,roughness:.6,metalness:.1}),it=new Ye(Se,et);it.position.set(ce.x,0,ce.y),it.rotation.y=-On.degToRad(ce.rotation),it.castShadow=!0,it.receiveShadow=!0,it.userData.itemId=ce.id,b.add(it);const _t=new cn({color:dC(ce.color,-20),roughness:.7,metalness:.05}),ct=new gs(Re.map(Mt=>new Me(Mt.x,-Mt.y))),qe=new pu(ct);qe.rotateX(-Math.PI/2);const ft=new Ye(qe,_t);ft.position.set(ce.x,ye+.1,ce.y),ft.rotation.y=-On.degToRad(ce.rotation),ft.receiveShadow=!0,b.add(ft);const at=oi(ce.label);at&&(at.position.set(ce.x,ye+15,ce.y),b.add(at))}if(ve.type==="parking"){const ce=lf(ve);ce.userData.itemId=ve.id,b.add(ce)}if(ve.type==="tree"){const ce=cf(ve);ce.userData.itemId=ve.id,b.add(ce)}if(ve.type==="camera"){const ce=ve,Re=Ct(ce),ye=((be=ce.mount)==null?void 0:be.height)??ce.height??10,ke=ce.pitch??0,Ke=ce.hFov??ce.fov;ce.vFov??xa(Ke,ce.aspect??16/9);const Se=ce.range,et=-On.degToRad(ce.rotation),it=On.degToRad(ke),_t=new zr;_t.userData.itemId=ce.id;const ct=new ln(14,10,10),qe=new cn({color:"#1e293b",roughness:.3,metalness:.5}),ft=new Ye(ct,qe);_t.add(ft);const at=new Ns(3.5,4,8,16);at.rotateZ(Math.PI/2);const Mt=new cn({color:"#0f172a",roughness:.2,metalness:.7}),fn=new Ye(at,Mt);fn.position.set(10,0,0),_t.add(fn);const ir=new Tp(1.5,8,8),Bn=new Ji({color:ce.color}),Ci=new Ye(ir,Bn);Ci.position.set(-5,4,0),_t.add(Ci),_t.position.set(Re.x,ye,Re.y),_t.rotation.y=et,_t.rotation.z=it,b.add(_t);const Hu=new Ns(2,2.5,ye,8),F_=new cn({color:"#475569",roughness:.6,metalness:.3}),Vu=new Ye(Hu,F_);if(Vu.position.set(Re.x,ye/2,Re.y),Vu.castShadow=!0,b.add(Vu),ne.visible){const k_=ne.showAll!==!1||ve.id===He,Wu=(ne.mode||"volume")==="volume";if(k_){const z_=2*Math.atan(Math.tan(On.degToRad(Ke)/2)/1.33),kt=2*Math.tan(z_/2)*Se,Bt=kt*1.33,B_=[0,0,0,Se,kt/2,-Bt/2,Se,-kt/2,-Bt/2,0,0,0,Se,-kt/2,-Bt/2,Se,-kt/2,Bt/2,0,0,0,Se,-kt/2,Bt/2,Se,kt/2,Bt/2,0,0,0,Se,kt/2,Bt/2,Se,kt/2,-Bt/2,Se,-kt/2,Bt/2,Se,-kt/2,-Bt/2,Se,kt/2,-Bt/2,Se,kt/2,Bt/2,Se,-kt/2,Bt/2,Se,kt/2,-Bt/2];if(Wu){const Jn=new mn;Jn.setAttribute("position",new Ft(B_,3)),Jn.computeVertexNormals();const ji=new Ji({color:ne.useCameraColor?ce.color:ne.color,transparent:!0,opacity:ne.opacity,side:ui,depthWrite:!1}),Mr=new Ye(Jn,ji);Mr.position.set(Re.x,ye,Re.y),Mr.rotation.y=et,Mr.rotation.z=it,b.add(Mr);const ss=[0,0,0,Se,kt/2,-Bt/2,0,0,0,Se,-kt/2,-Bt/2,0,0,0,Se,-kt/2,Bt/2,0,0,0,Se,kt/2,Bt/2,Se,kt/2,-Bt/2,Se,kt/2,Bt/2,Se,kt/2,Bt/2,Se,-kt/2,Bt/2,Se,-kt/2,Bt/2,Se,-kt/2,-Bt/2,Se,-kt/2,-Bt/2,Se,kt/2,-Bt/2],os=new mn;os.setAttribute("position",new Ft(ss,3));const Xi=new dh(os,new Fa({color:ne.useCameraColor?ce.color:ne.color,transparent:!0,opacity:ne.edgeOpacity}));Xi.position.set(Re.x,ye,Re.y),Xi.rotation.y=et,Xi.rotation.z=it,b.add(Xi)}const Wi=[],ta=On.degToRad(Ke)/2,El=2*Math.atan(Math.tan(ta)/1.33)/2;if([{h:ta,v:El},{h:-ta,v:El},{h:-ta,v:-El},{h:ta,v:-El}].forEach(Jn=>{const ji=new U(Math.cos(Jn.v)*Math.cos(Jn.h),Math.sin(Jn.v),Math.cos(Jn.v)*Math.sin(Jn.h)).normalize(),Mr=new xl(0,et,it,"YZX");if(ji.applyEuler(Mr),ji.y<-.01){const ss=-ye/ji.y,os=Re.x+ji.x*ss,Xi=Re.y+ji.z*ss;Wi.push(new U(os,.15,Xi))}}),Wi.length>=3){const Jn=new gs;Jn.moveTo(Wi[0].x-Re.x,-(Wi[0].z-Re.y));for(let wr=1;wr<Wi.length;wr++)Jn.lineTo(Wi[wr].x-Re.x,-(Wi[wr].z-Re.y));Jn.closePath();const ji=new pu(Jn);ji.rotateX(-Math.PI/2);const Mr=new Ji({color:ce.color,transparent:!0,opacity:Wu?.1:.4,side:ui}),ss=new Ye(ji,Mr);ss.position.set(Re.x,.12,Re.y),b.add(ss);const os=new mn,Xi=[];Wi.forEach((wr,G_)=>{Xi.push(wr.x,wr.y,wr.z);const ju=Wi[(G_+1)%Wi.length];Xi.push(ju.x,ju.y,ju.z)}),os.setAttribute("position",new Ft(Xi,3));const H_=new Fa({color:ce.color,transparent:!0,opacity:Wu?.4:.8}),V_=new dh(os,H_);b.add(V_)}}}const Gu=oi(ce.label);Gu&&(Gu.position.set(Re.x,ye+18,Re.y),b.add(Gu))}if(ve.type==="image"){const ce=ve,Re=new xi(ce.width,ce.height),ye=new cn({color:16777215,roughness:.9});new vc().load(ce.src,Ke=>{Ke.colorSpace=$t,Ke.minFilter=jn,ye.map=Ke,ye.needsUpdate=!0,B.render(N,_.camera)});const ke=new Ye(Re,ye);ke.rotation.x=-Math.PI/2,ke.position.set(ce.x,.25,ce.y),ke.rotation.z=On.degToRad(ce.rotation),ke.userData.itemId=ce.id,b.add(ke)}if(ve.type==="label"){const ce=ve,Re=oi(ce.text);Re&&(Re.position.set(ce.x,8,ce.y),Re.userData.itemId=ce.id,b.add(Re))}}),_.target.set(v.width/2,0,v.height/2),_.orbit&&(_.orbit.distance=Math.max(v.width,v.height)*.85),_.orbit){const{azimuth:ve,polar:be,distance:ce}=_.orbit,Re=_.target.x+Math.cos(ve)*Math.cos(be)*ce,ye=_.target.z+Math.sin(ve)*Math.cos(be)*ce,ke=_.target.y+Math.sin(be)*ce;_.camera.position.set(Re,ke,ye),_.camera.lookAt(_.target)}B.render(N,_.camera)},Xt=()=>{const _=H.current;if(!_)return;const b=_.renderer.domElement.toDataURL("image/png"),N=new Date().toLocaleString();ge(B=>[{id:fo(),dataUrl:b,createdAt:N},...B])},Hi=(_,b)=>{const N=document.createElement("a");N.href=_,N.download=b,document.body.appendChild(N),N.click(),document.body.removeChild(N)},Sl=()=>{const _=H.current;if(!_)return;const b=_.renderer.domElement.toDataURL("image/png");Hi(b,"security_plan_3d.png")},rs=()=>{const _=H.current;if(_){if(_.zoom=1,_.target.set(v.width/2,0,v.height/2),_.orbit){_.orbit.azimuth=Math.PI/4,_.orbit.polar=Math.PI/4,_.orbit.distance=Math.max(v.width,v.height)*.9;const{azimuth:b,polar:N,distance:B}=_.orbit,k=_.target.x+Math.cos(b)*Math.cos(N)*B,oe=_.target.z+Math.sin(b)*Math.cos(N)*B,Q=_.target.y+Math.sin(N)*B;_.camera.position.set(k,Q,oe)}_.camera.zoom=_.zoom,_.camera.updateProjectionMatrix(),_.camera.lookAt(_.target),_.renderer.render(_.scene,_.camera)}};Oe.useEffect(()=>{const _=N=>{var k,oe,Q,ie;const B=N.target;if(!(B&&(B.tagName==="INPUT"||B.tagName==="TEXTAREA"))){if(N.key===" "&&(De(!0),st.current=!0),(N.key==="Delete"||N.key==="Backspace")&&He&&(N.preventDefault(),yl(He),setTimeout(()=>f(),50)),N.ctrlKey){const xe=N.key.toLowerCase();if(xe==="z"&&(N.preventDefault(),N.shiftKey?p():h()),xe==="y"&&(N.preventDefault(),p()),xe==="s"&&(N.preventDefault(),mt()),xe==="g"&&(N.preventDefault(),R(pe=>!pe)),xe==="c"){if(((k=document.activeElement)==null?void 0:k.tagName)==="INPUT"||((oe=document.activeElement)==null?void 0:oe.tagName)==="TEXTAREA")return;if(He){const pe=t.find(Ee=>Ee.id===He);pe&&(i(pe),N.preventDefault())}}if(xe==="v"){if(((Q=document.activeElement)==null?void 0:Q.tagName)==="INPUT"||((ie=document.activeElement)==null?void 0:ie.tagName)==="TEXTAREA")return;const pe=r.current;if(pe){const Ee={...pe,id:fo(),x:pe.x+20,y:pe.y+20};e(Ge=>[...Ge,Ee]),I(Ee.id),setTimeout(()=>f(),50),N.preventDefault()}}}N.key==="Escape"&&(I(null),Xe("select"),je(!1))}};window.addEventListener("keydown",_);const b=N=>{N.key===" "&&(De(!1),st.current=!1)};return window.addEventListener("keyup",b),()=>{window.removeEventListener("keydown",_),window.removeEventListener("keyup",b)}},[t,He,mt]),Oe.useEffect(()=>{if(!H.current)return;const{scene:_,renderer:b,camera:N}=H.current;if(dt)new vc().load(dt,B=>{if(B.colorSpace=$t,$e==="panorama"?B.mapping=ou:B.mapping=fp,_.background=B,$e==="panorama")_.environment=B;else{const k=new Ua(b);_.environment=k.fromScene(new rf).texture,k.dispose()}b.render(_,N)});else{_.background=new Et("#09090b");const B=new Ua(b);_.environment=B.fromScene(new rf).texture,B.dispose(),b.render(_,N)}},[dt,$e]);const Kn=Oe.useRef({isDragging:!1,itemId:null,startPos:null}),_n=Oe.useRef(t),Vi=Oe.useRef(tt),Bs=Oe.useRef(He);Oe.useEffect(()=>{_n.current=t},[t]),Oe.useEffect(()=>{Vi.current=tt},[tt]),Oe.useEffect(()=>{Bs.current=He},[He]),Oe.useEffect(()=>{if(!w.current||H.current)return;const _=w.current,b=new Dc({antialias:!0,preserveDrawingBuffer:!0,alpha:!0,powerPreference:"high-performance"});b.setPixelRatio(Math.min(window.devicePixelRatio,2)),b.outputColorSpace=$t,b.shadowMap.enabled=!0,b.shadowMap.type=Wx,b.toneMapping=Xx,b.toneMappingExposure=1,_.appendChild(b.domElement);const N=new Ic;N.background=new Et("#09090b"),N.fog=new Oa("#09090b",200,2e3);const B=new _p(-500,500,500,-500,.1,6e3),k=new zr;N.add(k);const oe=new MA,Q=new nf(16777215,.6);N.add(Q);const ie=new tf(16777215,.8);ie.position.set(50,100,50),ie.castShadow=!0,ie.shadow.mapSize.width=2048,ie.shadow.mapSize.height=2048,N.add(ie);const xe={azimuth:Math.PI/5,polar:Math.PI/5,distance:Math.max(v.width,v.height)*.8},pe={scene:N,camera:B,renderer:b,group:k,raycaster:oe,target:new U(v.width/2,0,v.height/2),zoom:1,size:{width:1,height:1},orbit:xe};H.current=pe;const Ee=()=>{const{width:ye,height:ke}=_.getBoundingClientRect();pe.size={width:ye,height:ke},b.setSize(ye,ke);const Ke=ye/ke,Se=Math.max(v.width,v.height)*.7;B.left=-Se*Ke,B.right=Se*Ke,B.top=Se,B.bottom=-Se,B.zoom=pe.zoom,B.updateProjectionMatrix(),b.render(N,B)},Ge=()=>{const{azimuth:ye,polar:ke,distance:Ke}=xe,Se=pe.target.x+Math.cos(ye)*Math.cos(ke)*Ke,et=pe.target.z+Math.sin(ye)*Math.cos(ke)*Ke,it=pe.target.y+Math.sin(ke)*Ke;B.position.set(Se,it,et),B.lookAt(pe.target),b.render(N,B)},Ze=ye=>{const ke=b.domElement.getBoundingClientRect();return{x:(ye.clientX-ke.left)/ke.width*2-1,y:-((ye.clientY-ke.top)/ke.height)*2+1}},ve=ye=>{oe.setFromCamera(new Me(ye.x,ye.y),B);const ke=new Nr(new U(0,1,0),0),Ke=new U;return oe.ray.intersectPlane(ke,Ke)?{x:Ke.x,z:Ke.z}:null},be=ye=>{var Ke;oe.setFromCamera(new Me(ye.x,ye.y),B);const ke=oe.intersectObjects(k.children,!0);for(const Se of ke){let et=Se.object;for(;et;){if((Ke=et.userData)!=null&&Ke.itemId)return et.userData.itemId;et=et.parent}}return null},ce=ye=>{const ke=Ze(ye),Ke=Vi.current;if(Bs.current,ye.button===2&&!st.current){ye.preventDefault();const Se={x:ye.clientX,y:ye.clientY},et=_t=>{const ct=_t.clientX-Se.x,qe=_t.clientY-Se.y;Se.x=_t.clientX,Se.y=_t.clientY,xe.azimuth+=ct*.005,xe.polar=Qn(xe.polar+qe*.005,.1,Math.PI/2.1),Ge()},it=()=>{window.removeEventListener("pointermove",et),window.removeEventListener("pointerup",it)};window.addEventListener("pointermove",et),window.addEventListener("pointerup",it);return}if(ye.button===1||st.current){ye.preventDefault();const Se={x:ye.clientX,y:ye.clientY},et=_t=>{const ct=_t.clientX-Se.x,qe=_t.clientY-Se.y;Se.x=_t.clientX,Se.y=_t.clientY;const ft=Math.max(v.width,v.height)*.7/B.zoom/400,at=new U;B.getWorldDirection(new U),at.setFromMatrixColumn(B.matrixWorld,0),at.y=0,at.normalize();const Mt=new U;B.getWorldDirection(Mt),Mt.y=0,Mt.normalize(),pe.target.x+=at.x*ct*ft+Mt.x*qe*ft,pe.target.z+=at.z*ct*ft+Mt.z*qe*ft,Ge()},it=()=>{window.removeEventListener("pointermove",et),window.removeEventListener("pointerup",it)};window.addEventListener("pointermove",et),window.addEventListener("pointerup",it);return}if(ye.button===0){if(ye.preventDefault(),Ke!=="select"){const et=ve(ke);if(et){const it=Math.round(et.x/S)*S,_t=Math.round(et.z/S)*S,ct={id:fo(),x:it,y:_t,rotation:0};let qe=null;switch(Ke){case"add-camera":qe={...ct,type:"camera",rotation:45,label:"Camera",description:"",fov:70,hFov:70,vFov:45,pitch:-15,height:60,aspect:16/9,mount:{type:"free",edgeT:.5,height:60},range:150,color:An.camera[0],labelOffset:{x:0,y:30},connectorDashSize:3};break;case"add-building":qe={...ct,type:"building",width:100,height:80,label:"Building",color:An.building[0],points:_c(100,80)};break;case"add-tree":qe={...ct,type:"tree",radius:25,color:An.tree[0]};break;case"add-parking":qe={...ct,type:"parking",width:30,height:50,color:An.parking[0]};break;case"add-label":qe={...ct,type:"label",text:"Label",fontSize:14,color:An.label[0]};break}qe&&(e(ft=>[...ft,qe]),I(qe.id),Xe("select"),setTimeout(()=>f(),50))}return}const Se=be(ke);if(Se){I(Se);const et=ve(ke);et&&(Kn.current={isDragging:!0,itemId:Se,startPos:et});const it=ct=>{if(!Kn.current.isDragging||!Kn.current.itemId)return;const qe=Ze(ct),ft=ve(qe);if(!ft||!Kn.current.startPos)return;const at=ft.x-Kn.current.startPos.x,Mt=ft.z-Kn.current.startPos.z,fn=Kn.current.itemId;e(ir=>ir.map(Bn=>{if(Bn.id===fn){const Ci=Math.round((Bn.x+at)/S)*S,Hu=Math.round((Bn.y+Mt)/S)*S;return{...Bn,x:Ci,y:Hu}}return Bn})),Kn.current.startPos=ft},_t=()=>{Kn.current.isDragging&&setTimeout(()=>f(),50),Kn.current={isDragging:!1,itemId:null,startPos:null},window.removeEventListener("pointermove",it),window.removeEventListener("pointerup",_t)};window.addEventListener("pointermove",it),window.addEventListener("pointerup",_t)}else{I(null);const et={x:ye.clientX,y:ye.clientY},it=ct=>{const qe=ct.clientX-et.x,ft=ct.clientY-et.y;et.x=ct.clientX,et.y=ct.clientY;const at=Math.max(v.width,v.height)*.7/B.zoom/400,Mt=new U;B.getWorldDirection(new U),Mt.setFromMatrixColumn(B.matrixWorld,0),Mt.y=0,Mt.normalize();const fn=new U;B.getWorldDirection(fn),fn.y=0,fn.normalize(),pe.target.x+=Mt.x*qe*at+fn.x*ft*at,pe.target.z+=Mt.z*qe*at+fn.z*ft*at,Ge()},_t=()=>{window.removeEventListener("pointermove",it),window.removeEventListener("pointerup",_t)};window.addEventListener("pointermove",it),window.addEventListener("pointerup",_t)}}},Re=ye=>{ye.preventDefault();const ke=Qn(pe.zoom*(ye.deltaY<0?1.1:.9),.4,3.5);pe.zoom=ke,B.zoom=pe.zoom,B.updateProjectionMatrix(),Ge()};return b.domElement.addEventListener("pointerdown",ce),b.domElement.addEventListener("wheel",Re,{passive:!1}),b.domElement.addEventListener("contextmenu",ye=>ye.preventDefault()),Ge(),Ee(),window.addEventListener("resize",Ee),()=>{b.domElement.removeEventListener("pointerdown",ce),b.domElement.removeEventListener("wheel",Re),window.removeEventListener("resize",Ee),b.dispose(),_.removeChild(b.domElement),H.current=null}},[v.height,v.width,D]),Oe.useEffect(()=>{D==="iso3d"&&ea()},[t,g,m,v,S,A,D,ne,dt,$e,He]),Oe.useEffect(()=>{D!=="plan"&&je(!1)},[D]),Oe.useEffect(()=>{if(g){const _=new Image;_.src=g,_.onload=()=>{gt.current=_}}else gt.current=null},[g]),Oe.useEffect(()=>{var _t;if(!Ae||!zt.current||!He)return;const _=t.find(ct=>ct.id===He),b=(_==null?void 0:_.type)==="camera"?_:null;if(!b)return;const N=zt.current,B=N.width,k=N.height,oe=Ct(b),Q=((_t=b.mount)==null?void 0:_t.height)??b.height??10,ie=b.hFov??b.fov,xe=b.pitch??-15,pe=b.range,Ee=On.degToRad(b.rotation),Ge=B/k,Ze=2*Math.atan(Math.tan(On.degToRad(ie)/2)/Ge),ve=On.radToDeg(Ze),be=new Ic;be.background=new Et("#09090b"),be.fog=new Oa("#09090b",pe*.3,pe*1.2);const ce=new ti(ve,Ge,1,pe*2);ce.position.set(oe.x,Q,oe.y);const Re=On.degToRad(xe),ye=new U(oe.x+Math.cos(Ee)*100,Q+Math.tan(Re)*100,oe.y+Math.sin(Ee)*100);ce.lookAt(ye),be.add(new nf(16777215,.5));const ke=new tf(16777215,.7);ke.position.set(100,200,50),be.add(ke);const Ke=new Ye(new xi(v.width*2,v.height*2),new cn({color:"#6B8E23",roughness:.9}));if(Ke.rotation.x=-Math.PI/2,Ke.position.set(v.width/2,0,v.height/2),be.add(Ke),gt.current){const ct=new qd(gt.current);ct.colorSpace=$t;const qe=new Ye(new xi(m.width,m.height),new Ji({map:ct,transparent:!0,opacity:m.opacity}));qe.rotation.x=-Math.PI/2,qe.position.set(m.x+m.width/2,.1,m.y+m.height/2),be.add(qe)}t.forEach(ct=>{if(ct.type==="building"){const qe=ct,ft=O(qe),at=new gs(ft.map(ir=>new Me(ir.x,-ir.y))),Mt=new Ba(at,{depth:60,bevelEnabled:!1});Mt.rotateX(-Math.PI/2);const fn=new Ye(Mt,new cn({color:qe.color,side:ui}));fn.position.set(qe.x,0,qe.y),fn.rotation.y=-On.degToRad(qe.rotation),be.add(fn)}ct.type==="tree"&&be.add(cf(ct)),ct.type==="parking"&&be.add(lf(ct))});const Se=new Dc({canvas:N,antialias:!0});Se.setSize(B,k);const et=new Ua(Se);be.environment=et.fromScene(new rf).texture,Se.render(be,ce),dt&&new vc().load(dt,ct=>{be.background=ct,Se.render(be,ce)});const it=N.getContext("2d");return it&&(it.fillStyle="rgba(0,0,0,0.7)",it.fillRect(0,0,B,26),it.fillStyle="#fff",it.font="bold 11px sans-serif",it.fillText(`📷 ${b.label}`,8,11),it.font="10px sans-serif",it.fillStyle="#94a3b8",it.fillText(`FOV: ${ie.toFixed(0)}°×${ve.toFixed(0)}° | Pitch: ${xe}° | Range: ${pe}`,8,23),it.fillStyle="#ef4444",it.beginPath(),it.arc(B-12,13,4,0,Math.PI*2),it.fill(),it.fillStyle="#fff",it.font="9px sans-serif",it.fillText("LIVE",B-42,16)),()=>{et.dispose(),Se.dispose()}},[He,t,Ae,m,v,dt]);const Tn=_=>{if(!he.current)return{x:0,y:0};const b=he.current.getScreenCTM();if(!b)return{x:0,y:0};const N=(_.clientX-b.e)/b.a,B=(_.clientY-b.f)/b.d;return{x:(N-z.x)/Y,y:(B-z.y)/Y}},bn=(_,b,N="move",B)=>{if(tt!=="select"||D==="iso3d")return;_.stopPropagation();const k=t.find(xe=>xe.id===b);if(!k)return;I(b);const oe=Tn(_);if(N==="move"&&He===b&&k.type==="building"){const pe=Pt(k);for(let Ee=0;Ee<pe.length;Ee++){const Ge=pe[Ee],Ze=pe[(Ee+1)%pe.length],ve={x:Ze.x-Ge.x,y:Ze.y-Ge.y},be={x:oe.x-Ge.x,y:oe.y-Ge.y},ce=ve.x*ve.x+ve.y*ve.y||1,Re=Math.max(0,Math.min(1,(be.x*ve.x+be.y*ve.y)/ce)),ye={x:Ge.x+ve.x*Re,y:Ge.y+ve.y*Re};if(Math.sqrt((oe.x-ye.x)**2+(oe.y-ye.y)**2)<8){Qo(b,ye),setTimeout(()=>f(),50);return}}}const Q=k.type==="camera"?Ct(k):{x:k.x,y:k.y};let ie={...k};if(N==="fov"&&k.type==="camera"){const xe=oe.x-Q.x,pe=oe.y-Q.y,Ee=Math.atan2(pe,xe)*180/Math.PI,Ge=k.hFov??k.fov,Ze=k.rotation+(B==="left"?-Ge/2:Ge/2);ie={...k,fovHandleOffset:af(Ee-Ze)}}ae({type:N,itemId:b,startMouse:oe,startVal:ie,variant:B,snap:F&&!_.altKey})},ku=_=>{var k,oe;if(tt==="add-camera"&&D==="plan"){const Q=Tn(_),ie=xn(Q);ie&&ie.distance<100?Rt({buildingId:ie.buildingId,edgeIndex:ie.edgeIndex,edgeT:ie.edgeT,point:ie.point,rotation:ie.rotation}):Rt(null)}else nt&&Rt(null);if(de){const Q=_.clientX-ue.x,ie=_.clientY-ue.y;$({x:ue.panX+Q,y:ue.panY+ie});return}if(!re.itemId||!he.current)return;const b=Tn(_),N=t.find(Q=>Q.id===re.itemId);if(!N)return;const B=N.type==="camera"?Ct(N):{x:N.x,y:N.y};if(re.type==="move"){const Q=b.x-re.startMouse.x,ie=b.y-re.startMouse.y,xe=re.startVal.x+Q,pe=re.startVal.y+ie;if(N.type==="camera"&&((k=N.mount)==null?void 0:k.type)==="building"&&N.mount.buildingId){const Ee=rt(N.mount.buildingId);if(Ee){const Ge=Pt(Ee);if(Ge.length>=2){const Ze=Qn(N.mount.edgeIndex??0,0,Ge.length-1),ve=(Ze+1)%Ge.length,be=Ge[Ze],ce=Ge[ve],Re={x:ce.x-be.x,y:ce.y-be.y},ye={x:xe-be.x,y:pe-be.y},ke=Re.x*Re.x+Re.y*Re.y||1;let Ke=(ye.x*Re.x+ye.y*Re.y)/ke;Ke=Qn(Ke,0,1);const Se={x:be.x+Re.x*Ke,y:be.y+Re.y*Ke};vt(re.itemId,{x:Se.x,y:Se.y,mount:{...N.mount,edgeT:Ke}});return}}}vt(re.itemId,{x:Te(xe,re.snap),y:Te(pe,re.snap)})}else if(re.type==="move-label"&&N.type==="camera"){const Q=b.x-re.startMouse.x,ie=b.y-re.startMouse.y,xe=re.startVal.labelOffset||{x:0,y:30};vt(re.itemId,{labelOffset:{x:xe.x+Q,y:xe.y+ie}})}else if(re.type==="rotate"){const Q=b.x-B.x,ie=b.y-B.y,xe=Math.atan2(ie,Q)*180/Math.PI;vt(re.itemId,{rotation:xe})}else if(re.type==="fov"&&N.type==="camera"){const Q=b.x-B.x,ie=b.y-B.y,xe=Math.atan2(ie,Q)*180/Math.PI,pe=((oe=re.startVal)==null?void 0:oe.fovHandleOffset)??0,Ee=af(xe-pe),Ge=af(Ee-N.rotation),Ze=re.variant==="left"?-Ge:Ge;if(Ze<=0)return;const ve=Qn(Ze*2,10,180);vt(re.itemId,{fov:ve,hFov:ve})}else if(re.type==="range"&&N.type==="camera"){const Q=b.x-B.x,ie=b.y-B.y,xe=Math.sqrt(Q*Q+ie*ie);vt(re.itemId,{range:Math.max(xe,50)})}else if(re.type==="vertex"&&N.type==="building"){const Q=lt(b,N),ie=O(N),xe=typeof re.variant=="string"?parseInt(re.variant,10):Number(re.variant);if(!Number.isNaN(xe)&&ie[xe]){const pe={x:Te(Q.x,re.snap),y:Te(Q.y,re.snap)},Ee=ie.map((Ge,Ze)=>Ze===xe?pe:Ge);vt(re.itemId,{points:Ee})}}},Ml=()=>{re.type&&f(),J(!1),ae({type:null,itemId:null,startMouse:{x:0,y:0},startVal:null,snap:!1})};Oe.useEffect(()=>{mh.enabled=!0,f()},[]);const D_=_=>{if(D!=="iso3d"&&!de){if(fe&&He){const b=t.find(N=>N.id===He);if(b&&b.type==="building"){const N=Tn(_);Qo(He,N),je(!1);return}}(_.target===he.current||_.target.tagName==="image"||_.target.id==="grid-bg")&&(tt!=="select"?It(_,tt):I(null))}},I_=_=>{(_.button===1||_.button===2||Be||_.button===0&&tt==="select")&&(_.preventDefault(),J(!0),Pe({x:_.clientX,y:_.clientY,panX:z.x,panY:z.y}))},U_=_=>{if(_.preventDefault(),!he.current)return;const b=he.current.getScreenCTM();if(!b)return;const N=(_.clientX-b.e)/b.a,B=(_.clientY-b.f)/b.d,k=(N-z.x)/Y,oe=(B-z.y)/Y,Q=Qn(Y*(_.deltaY>0?.9:1.1),.3,3.5),ie=N-k*Q,xe=B-oe*Q;le(Q),$({x:ie,y:xe})},_e=t.find(_=>_.id===He),Nt=(_e==null?void 0:_e.type)==="camera"?_e:null,Gi=(Nt==null?void 0:Nt.aspect)??16/9,Hs=Nt?Nt.hFov??Nt.fov:70,zu=Nt?Nt.vFov??xa(Hs,Gi):45,Cp=Nt?hC(Hs,zu):90,wl=t.filter(_=>_.type==="building"),Bu=((Lp=Nt==null?void 0:Nt.mount)==null?void 0:Lp.type)??"free",Vs=(Np=Nt==null?void 0:Nt.mount)!=null&&Np.buildingId?rt(Nt.mount.buildingId):wl[0],O_=Vs?O(Vs).length:0,Rp=((Dp=Nt==null?void 0:Nt.mount)==null?void 0:Dp.edgeIndex)??0,Pp=((Ip=Nt==null?void 0:Nt.mount)==null?void 0:Ip.edgeT)??.5;return M.jsxs("div",{className:"relative h-screen bg-zinc-950 font-sans text-slate-200 overflow-hidden w-full selection:bg-indigo-500/30",children:[X&&M.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",children:M.jsxs("div",{className:"bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden text-slate-200",children:[M.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-white/10",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-400",children:"Export"}),M.jsx("h2",{className:"text-lg font-semibold text-slate-200",children:"Export Plan"})]}),M.jsx("button",{onClick:()=>te(!1),className:"p-2 text-slate-400 hover:text-slate-600",children:M.jsx(sf,{className:"w-5 h-5"})})]}),M.jsxs("div",{className:"px-5 py-4 space-y-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Title"}),M.jsx("input",{type:"text",value:T,onChange:_=>V(_.target.value),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:["Export List (",Ue.length," items)"]}),Ue.length>0&&M.jsx("button",{onClick:()=>ut([]),className:"text-xs text-red-500 hover:text-red-700",children:"Clear All"})]}),Ue.length===0?M.jsxs("div",{className:"bg-slate-50 rounded-lg p-4 text-center text-slate-400 text-sm",children:[M.jsx("p",{children:"No views added yet"}),M.jsx("p",{className:"text-xs mt-1",children:'Use "Add to Export" buttons while working'})]}):M.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-48 overflow-y-auto",children:Ue.map(_=>M.jsxs("div",{className:"relative group bg-zinc-800 rounded-lg overflow-hidden border border-white/5",children:[M.jsx("div",{className:"aspect-video w-full overflow-hidden",children:M.jsx("img",{src:_.dataUrl,alt:_.label,className:"w-full h-full object-cover"})}),M.jsxs("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2",children:[M.jsx("a",{href:_.dataUrl,download:`${_.label.replace(/[^a-z0-9]/gi,"_").toLowerCase()}.png`,className:"p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-lg",title:"Download Image",onClick:b=>b.stopPropagation(),children:M.jsx(b0,{className:"w-4 h-4"})}),M.jsx("button",{onClick:()=>ut(b=>b.filter(N=>N.id!==_.id)),className:"p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg",title:"Remove",children:M.jsx(sf,{className:"w-4 h-4"})})]}),M.jsx("div",{className:"p-2 bg-zinc-800 absolute bottom-0 inset-x-0",children:M.jsx("p",{className:"text-[10px] text-slate-300 truncate font-medium",children:_.label})})]},_.id))})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Scale"}),M.jsx("input",{type:"number",min:"1",max:"5",value:j.scale,onChange:_=>ee({...j,scale:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Padding"}),M.jsx("input",{type:"number",min:"0",max:"200",value:j.padding,onChange:_=>ee({...j,padding:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Include"}),M.jsx("div",{className:"flex flex-wrap gap-2",children:[{key:"includeGrid",label:"Grid"},{key:"includeLegend",label:"Legend"},{key:"includeTitle",label:"Title Block"}].map(_=>{const b=j[_.key];return M.jsx("button",{onClick:()=>ee({...j,[_.key]:!b}),className:`px-3 py-1 rounded-full text-xs font-semibold border ${b?"bg-emerald-100 border-emerald-200 text-emerald-700":"bg-white border-slate-200 text-slate-400"}`,children:_.label},_.key)})})]}),M.jsx("p",{className:"text-xs text-slate-400",children:'Tip: Add views using "Add to Export" buttons, then export a client report.'})]}),M.jsxs("div",{className:"px-5 py-4 border-t border-white/10 bg-slate-50 flex flex-wrap justify-end gap-2",children:[M.jsx("button",{onClick:()=>te(!1),className:"px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-800",children:"Cancel"}),M.jsx("button",{onClick:()=>{Z(),te(!1)},className:"px-4 py-2 text-sm font-semibold bg-slate-600 hover:bg-slate-700 text-white rounded-lg",children:"Plan Only"}),M.jsx("button",{onClick:()=>{pt(),te(!1)},disabled:Ue.length===0,className:`px-3 py-2 text-sm font-semibold rounded-lg ${Ue.length===0?"bg-slate-200 text-slate-400 cursor-not-allowed":"bg-emerald-600 hover:bg-emerald-700 text-white"}`,children:"Export PNG"}),M.jsx("button",{onClick:()=>{yt(),te(!1)},disabled:Ue.length===0,className:`px-3 py-2 text-sm font-semibold rounded-lg ${Ue.length===0?"bg-slate-200 text-slate-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 text-white"}`,children:"Export PDF"})]})]})}),fe&&D==="plan"&&He&&M.jsx("div",{className:"absolute left-1/2 bottom-10 -translate-x-1/2 rounded-full bg-emerald-600/90 px-4 py-2 text-xs font-semibold text-white shadow-xl z-50 backdrop-blur-md",children:"Click an edge to insert a vertex."}),M.jsxs("div",{className:"absolute left-4 top-4 bottom-4 w-14 flex flex-col items-center py-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 gap-3 ring-1 ring-white/5",children:[M.jsx("div",{className:"flex flex-col gap-2 w-full px-2",children:[{mode:"select",icon:GA,label:"Select"},{mode:"add-camera",icon:xc,label:"Camera"},{mode:"add-building",icon:ZA,label:"Building"},{mode:"add-tree",icon:QA,label:"Tree"},{mode:"add-parking",icon:RA,label:"Parking"},{mode:"add-label",icon:tC,label:"Label"}].map(_=>M.jsx("button",{onClick:()=>tt===_.mode?Xe("select"):Xe(_.mode),title:_.label,className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${tt===_.mode?"bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 scale-105":"text-slate-400 hover:text-white hover:bg-white/10"}`,children:M.jsx(_.icon,{className:"w-5 h-5"})},_.mode))}),M.jsx("div",{className:"w-8 h-px bg-white/10 my-1"}),M.jsx("div",{className:"flex flex-col gap-2 w-full px-2",children:M.jsx("button",{onClick:()=>W(D==="plan"?"iso3d":"plan"),className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${D==="iso3d"?"bg-indigo-600 text-white shadow-lg":"text-slate-400 hover:text-white hover:bg-white/10"}`,title:"Toggle 3D View",children:M.jsx(UA,{className:"w-5 h-5"})})}),M.jsxs("div",{className:"mt-auto flex flex-col gap-2 w-full px-2",children:[M.jsx("button",{onClick:h,className:"w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all",title:"Undo",children:M.jsx(iC,{className:"w-5 h-5"})}),M.jsx("button",{onClick:p,className:"w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all",title:"Redo",children:M.jsx(XA,{className:"w-5 h-5"})})]})]}),M.jsxs("div",{className:"absolute top-4 left-24 right-4 lg:right-[22rem] h-14 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-40 flex items-center px-4 justify-between ring-1 ring-white/5 transition-all duration-300",children:[M.jsxs("div",{className:"flex items-center gap-4",children:[M.jsxs("h1",{className:"text-lg font-bold text-slate-200 tracking-tight flex items-center gap-2",children:[M.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500",children:M.jsx(xc,{className:"w-5 h-5"})}),T]}),M.jsx("div",{className:"h-6 w-px bg-white/10 mx-2"}),M.jsxs("div",{className:"flex items-center gap-1",children:[M.jsx("button",{onClick:()=>{var _;return(_=Ie.current)==null?void 0:_.click()},className:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors",title:"Load Project",children:M.jsx(NA,{className:"w-5 h-5"})}),M.jsx("button",{onClick:mt,className:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors",title:"Save Project",children:M.jsx(YA,{className:"w-5 h-5"})})]})]}),M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("input",{type:"file",ref:se,className:"hidden",accept:"image/*",onChange:Zt}),M.jsx("input",{type:"file",ref:Je,className:"hidden",accept:"image/*",onChange:zn}),M.jsx("input",{type:"file",ref:Ie,className:"hidden",accept:".json",onChange:xt}),M.jsx("input",{type:"file",ref:C,className:"hidden",accept:"image/*,.hdr",onChange:ot}),M.jsxs("button",{onClick:()=>{var _;return(_=se.current)==null?void 0:_.click()},className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",children:[M.jsx(sC,{className:"w-4 h-4"}),M.jsx("span",{children:"Map"})]}),M.jsxs("button",{onClick:()=>{var _;return(_=Je.current)==null?void 0:_.click()},className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",children:[M.jsx(A0,{className:"w-4 h-4"}),M.jsx("span",{children:"Image"})]}),M.jsxs("button",{onClick:Fe,className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",title:"Add Current View",children:[M.jsx(C0,{className:"w-4 h-4"}),M.jsx("span",{className:"hidden sm:inline",children:"Add View"})]}),M.jsxs("button",{onClick:()=>te(!0),className:"flex items-center gap-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-lg shadow-indigo-500/20 transition-all",children:[M.jsx(b0,{className:"w-4 h-4"}),M.jsx("span",{children:"Export"})]})]})]}),M.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[M.jsx("div",{className:"w-full h-full relative overflow-auto bg-zinc-950 flex items-center justify-center pt-20 pl-24 pr-80 pb-6 custom-scrollbar",children:M.jsx("div",{className:"shadow-2xl bg-zinc-900 relative ring-1 ring-white/10 rounded-lg overflow-hidden",children:D==="plan"?M.jsxs("svg",{ref:he,width:v.width,height:v.height,viewBox:`0 0 ${v.width} ${v.height}`,className:`bg-white block ${tt==="select"?"cursor-default":"cursor-crosshair"}`,onMouseMove:ku,onMouseUp:Ml,onMouseDown:I_,onWheel:U_,onClick:D_,xmlns:"http://www.w3.org/2000/svg",children:[M.jsx("defs",{children:M.jsx("pattern",{id:"smallGrid",width:S,height:S,patternUnits:"userSpaceOnUse",children:M.jsx("path",{d:`M ${S} 0 L 0 0 0 ${S}`,fill:"none",stroke:"#333333",strokeWidth:"1"})})}),M.jsxs("g",{transform:`translate(${z.x}, ${z.y}) scale(${Y})`,children:[A&&D==="plan"&&M.jsx("rect",{id:"grid-bg",width:"100%",height:"100%",fill:"url(#smallGrid)"}),g&&D==="plan"&&M.jsx("image",{href:g,x:m.x,y:m.y,width:m.width,height:m.height,preserveAspectRatio:"none",opacity:m.opacity,className:"pointer-events-none"}),t.map(_=>{var N,B;const b=He===_.id;if(_.type==="building"||_.type==="parking"){const k=_,oe=_.type==="parking";if(!oe){const Q=_,ie=O(Q);return M.jsxs("g",{transform:`translate(${Q.x}, ${Q.y}) rotate(${Q.rotation})`,onMouseDown:xe=>bn(xe,Q.id,"move"),onClick:xe=>xe.stopPropagation(),className:"cursor-move",opacity:re.itemId===Q.id&&re.type==="move"?.8:1,children:[M.jsx("polygon",{points:ie.map(xe=>`${xe.x},${xe.y}`).join(" "),fill:Q.color,stroke:b?"#059669":"#334155",strokeWidth:b?3:1}),M.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",pointerEvents:"none",className:"font-bold select-none",children:Q.label}),b&&ie.map((xe,pe)=>M.jsx("circle",{cx:xe.x,cy:xe.y,r:"5",fill:"#ffffff",stroke:"#059669",strokeWidth:"2",className:"cursor-pointer",onMouseDown:Ee=>bn(Ee,Q.id,"vertex",String(pe))},`${Q.id}-vertex-${pe}`))]},Q.id)}return M.jsxs("g",{transform:`translate(${k.x}, ${k.y}) rotate(${k.rotation})`,onMouseDown:Q=>bn(Q,k.id,"move"),onClick:Q=>{fe||Q.stopPropagation()},className:"cursor-move",opacity:re.itemId===k.id&&re.type==="move"?.8:1,children:[M.jsx("rect",{x:-k.width/2,y:-k.height/2,width:k.width,height:k.height,fill:k.color,stroke:b?"#3b82f6":oe?"#94a3b8":"#334155",strokeWidth:b?3:1,strokeDasharray:oe?"4":"0"}),oe&&M.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"#94a3b8",fontSize:"16",fontWeight:"bold",pointerEvents:"none",transform:"rotate(-90)",children:"P"}),!oe&&M.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",pointerEvents:"none",className:"font-bold select-none",children:k.label})]},k.id)}if(_.type==="tree"){const k=_;return M.jsxs("g",{transform:`translate(${k.x}, ${k.y})`,onMouseDown:oe=>bn(oe,k.id,"move"),onClick:oe=>oe.stopPropagation(),className:"cursor-move",children:[M.jsx("circle",{r:k.radius,fill:k.color,fillOpacity:"0.6",stroke:b?"#3b82f6":k.color,strokeWidth:b?2:0}),M.jsx("circle",{r:k.radius*.5,fill:"black",fillOpacity:"0.1"})]},k.id)}if(_.type==="label"){const k=_;return M.jsx("text",{x:k.x,y:k.y,fontSize:k.fontSize,fill:b?"#3b82f6":k.color,fontWeight:"bold",textAnchor:"middle",className:"cursor-move select-none",onMouseDown:oe=>bn(oe,k.id,"move"),onClick:oe=>oe.stopPropagation(),style:{textShadow:"0px 1px 2px rgba(255,255,255,0.8)"},children:k.text},k.id)}if(_.type==="image"){const k=_;return M.jsx("g",{transform:`translate(${k.x}, ${k.y}) rotate(${k.rotation})`,onMouseDown:oe=>bn(oe,k.id,"move"),onClick:oe=>oe.stopPropagation(),className:"cursor-move",children:M.jsx("image",{href:k.src,x:-k.width/2,y:-k.height/2,width:k.width,height:k.height,style:{outline:b?"2px solid #3b82f6":"none"}})},k.id)}if(_.type==="camera"){const k=_,oe=Ct(k),Q=k.range,ie=k.hFov??k.fov,xe=(k.rotation-ie/2)*(Math.PI/180),pe=(k.rotation+ie/2)*(Math.PI/180),Ee=Q*Math.cos(xe),Ge=Q*Math.sin(xe),Ze=Q*Math.cos(pe),ve=Q*Math.sin(pe),be=40,ce=k.rotation*(Math.PI/180),Re=be*Math.cos(ce),ye=be*Math.sin(ce),ke=((N=k.labelOffset)==null?void 0:N.x)??0,Ke=((B=k.labelOffset)==null?void 0:B.y)??30;k.connectorDashSize;const Se=t.filter(at=>at.type==="building"),et=St(oe,Q,ie,k.rotation,Se),it=t.filter(at=>at.type==="building"||at.type==="tree"),_t=St(oe,Q,ie,k.rotation,it),ct=at=>{let Mt="M 0 0 ";return at.forEach(fn=>{Mt+=`L ${fn.x} ${fn.y} `}),Mt+"Z"},qe=ct(et),ft=ct(_t);return M.jsxs("g",{transform:`translate(${oe.x}, ${oe.y})`,onClick:at=>at.stopPropagation(),children:[M.jsxs("g",{onMouseDown:at=>bn(at,k.id,"move"),className:"cursor-move",children:[M.jsxs("defs",{children:[M.jsxs("mask",{id:`mask-${k.id}`,children:[M.jsx("rect",{x:-Q,y:-Q,width:Q*2,height:Q*2,fill:"white"}),M.jsx("path",{d:ft,fill:"black"})]}),M.jsxs("radialGradient",{id:`grad-blue-${k.id}`,cx:"0",cy:"0",r:Q,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"50%",stopColor:k.color,stopOpacity:"0.2"}),M.jsx("stop",{offset:"100%",stopColor:k.color,stopOpacity:"0"})]}),M.jsxs("radialGradient",{id:`grad-blue-stroke-${k.id}`,cx:"0",cy:"0",r:Q,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"80%",stopColor:k.color,stopOpacity:"1"}),M.jsx("stop",{offset:"100%",stopColor:k.color,stopOpacity:"0"})]}),M.jsxs("radialGradient",{id:`grad-yellow-${k.id}`,cx:"0",cy:"0",r:Q,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"50%",stopColor:"#fde047",stopOpacity:"0.3"}),M.jsx("stop",{offset:"100%",stopColor:"#fde047",stopOpacity:"0"})]}),M.jsxs("radialGradient",{id:`grad-yellow-stroke-${k.id}`,cx:"0",cy:"0",r:Q,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"80%",stopColor:"#eab308",stopOpacity:"1"}),M.jsx("stop",{offset:"100%",stopColor:"#eab308",stopOpacity:"0"})]})]}),M.jsx("path",{d:qe,fill:`url(#grad-yellow-${k.id})`,stroke:`url(#grad-yellow-stroke-${k.id})`,strokeWidth:"1",strokeDasharray:"4,4",pointerEvents:"none",mask:`url(#mask-${k.id})`}),M.jsx("path",{d:ft,fill:`url(#grad-blue-${k.id})`,stroke:`url(#grad-blue-stroke-${k.id})`,strokeWidth:"1",pointerEvents:"none"}),M.jsxs("g",{transform:`rotate(${k.rotation})`,children:[M.jsx("rect",{x:"-10",y:"-8",width:"20",height:"16",rx:"4",fill:b?"#3b82f6":"#1e293b"}),M.jsx("circle",{cx:"0",cy:"0",r:"4",fill:k.color}),M.jsx("rect",{x:"10",y:"-4",width:"6",height:"8",fill:"#475569"})]})]}),b&&M.jsxs(M.Fragment,{children:[M.jsx("line",{x1:"0",y1:"0",x2:Re,y2:ye,stroke:"white",strokeWidth:"2",strokeDasharray:"3,3"}),M.jsx("circle",{cx:Re,cy:ye,r:"7",fill:"#3b82f6",stroke:"white",strokeWidth:"2",className:"cursor-crosshair",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:at=>bn(at,k.id,"rotate")}),M.jsx("circle",{cx:Ee,cy:Ge,r:"6",fill:k.color,stroke:"white",strokeWidth:"2",className:"cursor-ew-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:at=>bn(at,k.id,"fov","left")}),M.jsx("circle",{cx:Ze,cy:ve,r:"6",fill:k.color,stroke:"white",strokeWidth:"2",className:"cursor-ew-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:at=>bn(at,k.id,"fov","right")}),M.jsx("circle",{cx:Q*Math.cos(ce),cy:Q*Math.sin(ce),r:"6",fill:k.color,stroke:"white",strokeWidth:"2",className:"cursor-ns-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:at=>bn(at,k.id,"range")})]}),M.jsxs("g",{transform:`translate(${ke}, ${Ke})`,onMouseDown:at=>bn(at,k.id,"move-label"),className:"cursor-move hover:opacity-80 transition-opacity",children:[(Math.abs(ke)>10||Math.abs(Ke-30)>10)&&M.jsx("line",{x1:-ke,y1:-Ke,x2:"0",y2:"0",stroke:"white",strokeWidth:"2",strokeDasharray:"6,4",style:{filter:"drop-shadow(0 0 2px rgba(0,0,0,0.8))"}}),M.jsx("rect",{x:"-50",y:"-10",width:"100",height:"20",rx:"4",fill:"rgba(255,255,255,0.9)",stroke:b?"#3b82f6":"transparent",strokeWidth:"1"}),M.jsx("text",{textAnchor:"middle",dy:"4",fontSize:"10",fill:"#334155",fontWeight:"bold",pointerEvents:"none",className:"select-none",children:k.label})]})]},k.id)}return null}),nt&&tt==="add-camera"&&M.jsxs("g",{transform:`translate(${nt.point.x}, ${nt.point.y})`,className:"pointer-events-none",opacity:.6,children:[M.jsx("path",{d:(()=>{const N=(nt.rotation-35)*(Math.PI/180),B=(nt.rotation+70/2)*(Math.PI/180),k=100*Math.cos(N),oe=100*Math.sin(N),Q=100*Math.cos(B),ie=100*Math.sin(B);return`M 0 0 L ${k} ${oe} A 100 100 0 0 1 ${Q} ${ie} Z`})(),fill:"#3b82f6",fillOpacity:"0.2",stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"4,4"}),M.jsxs("g",{transform:`rotate(${nt.rotation})`,children:[M.jsx("rect",{x:"-10",y:"-8",width:"20",height:"16",rx:"4",fill:"#3b82f6"}),M.jsx("circle",{cx:"0",cy:"0",r:"4",fill:"white"}),M.jsx("rect",{x:"10",y:"-4",width:"6",height:"8",fill:"#1e40af"})]}),M.jsx("text",{y:"-20",textAnchor:"middle",fill:"#3b82f6",fontSize:"11",fontWeight:"bold",className:"select-none",children:"Click to place"})]}),tt==="add-camera"&&t.filter(_=>_.type==="building").map(_=>{const b=_,N=Pt(b);return N.map((B,k)=>{const oe=N[(k+1)%N.length],Q=(nt==null?void 0:nt.buildingId)===b.id&&(nt==null?void 0:nt.edgeIndex)===k;return M.jsx("line",{x1:B.x,y1:B.y,x2:oe.x,y2:oe.y,stroke:Q?"#3b82f6":"#94a3b8",strokeWidth:Q?4:2,strokeDasharray:Q?"0":"6,4",className:"pointer-events-none transition-all",opacity:Q?1:.5},`edge-highlight-${b.id}-${k}`)})}),t.map(_=>{var b,N;if(_.type==="camera"){const B=_,k=Ct(B),oe=((b=B.labelOffset)==null?void 0:b.x)??0,Q=((N=B.labelOffset)==null?void 0:N.y)??30,ie=He===B.id;return M.jsx("g",{transform:`translate(${k.x}, ${k.y})`,style:{pointerEvents:"none"},children:M.jsxs("g",{transform:`translate(${oe}, ${Q})`,onMouseDown:xe=>{xe.stopPropagation(),bn(xe,B.id,"move-label")},className:"cursor-move hover:opacity-80 transition-opacity",style:{pointerEvents:"auto"},children:[(Math.abs(oe)>10||Math.abs(Q-30)>10)&&M.jsx("line",{x1:-oe,y1:-Q,x2:"0",y2:"0",stroke:"white",strokeWidth:"2",strokeDasharray:"6,4",style:{filter:"drop-shadow(0 0 2px rgba(0,0,0,0.8))"}}),M.jsx("rect",{x:"-50",y:"-10",width:"100",height:"20",rx:"4",fill:"rgba(255,255,255,0.9)",stroke:ie?"#3b82f6":"transparent",strokeWidth:"1"}),M.jsx("text",{textAnchor:"middle",dy:"4",fontSize:"10",fill:"#334155",fontWeight:"bold",pointerEvents:"none",className:"select-none",children:B.label})]})},`label-overlay-${B.id}`)}return null})]})]}):M.jsxs("div",{className:"relative flex-1",style:{minWidth:v.width,minHeight:v.height},children:[M.jsx("div",{ref:w,className:"absolute inset-0"}),M.jsxs("div",{className:"absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none",children:[M.jsx("div",{className:"rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-semibold text-slate-300 shadow border border-white/10 pointer-events-auto",children:"Drag to pan · Right-click to rotate · Scroll to zoom"}),M.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[M.jsxs("button",{onClick:()=>{var _;return(_=C.current)==null?void 0:_.click()},className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors flex items-center gap-1",children:[M.jsx(A0,{className:"w-3 h-3"}),"Set 3D BG"]}),M.jsx("button",{onClick:Xt,className:"px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/20 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/30 shadow-sm transition-colors",children:"Take Snapshot"}),M.jsx("button",{onClick:Sl,className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"Export View"}),M.jsx("button",{onClick:()=>{var _;return ut([...Ue,{id:fo(),type:"3d",label:"3D View",dataUrl:((_=H.current)==null?void 0:_.renderer.domElement.toDataURL("image/png"))||""}])},className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"+ Add to Export"}),M.jsx("button",{onClick:rs,className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"Reset View"})]})]})]})})}),Nt&&Ae&&M.jsxs("div",{className:"absolute bottom-4 right-96 w-80 bg-zinc-900/90 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/10 z-40 ring-1 ring-black/50",children:[M.jsxs("div",{className:"flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/5",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(xc,{className:"w-4 h-4 text-emerald-400"}),M.jsxs("span",{className:"text-sm font-medium text-slate-200 truncate",children:[Nt.label," View"]})]}),M.jsx("button",{onClick:()=>ze(!1),className:"p-1 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors",children:M.jsx(sf,{className:"w-4 h-4"})})]}),M.jsx("canvas",{ref:zt,width:320,height:180,className:"w-full"}),M.jsxs("div",{className:"px-3 py-2 bg-white/5 text-xs text-slate-400 flex items-center justify-between border-t border-white/5",children:[M.jsxs("div",{className:"flex gap-3",children:[M.jsxs("span",{children:["H-FOV: ",(Nt.hFov??Nt.fov).toFixed(0),"°"]}),M.jsxs("span",{children:["V-FOV: ",(Nt.vFov??45).toFixed(0),"°"]}),M.jsxs("span",{children:["Range: ",Nt.range]})]}),M.jsxs("button",{onClick:()=>Qe(Nt),className:"px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded flex items-center gap-1",children:[M.jsx(C0,{className:"w-3 h-3"}),"Export"]})]})]}),Nt&&!Ae&&M.jsxs("button",{onClick:()=>ze(!0),className:"absolute bottom-4 right-96 px-4 py-2 bg-slate-800 text-white rounded-lg shadow-lg hover:bg-slate-700 transition-colors z-40 flex items-center gap-2",children:[M.jsx(xc,{className:"w-4 h-4"}),M.jsx("span",{className:"text-sm font-medium",children:"Show Camera View"})]}),M.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-80 bg-zinc-900/90 backdrop-blur-xl border-l border-white/10 overflow-y-auto hidden lg:block shadow-2xl z-40 custom-scrollbar",children:_e?M.jsxs("div",{className:"p-6 flex flex-col gap-6",children:[M.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[M.jsxs("h2",{className:"font-bold text-lg text-slate-200 capitalize",children:["Edit ",_e.type]}),M.jsx("button",{onClick:()=>yl(_e.id),className:"text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors",children:M.jsx(R0,{className:"w-5 h-5"})})]}),_e.type!=="label"&&M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Rotation"}),M.jsxs("span",{children:[Math.round(_e.rotation),"deg"]})]}),M.jsx("input",{type:"range",min:"0",max:"360",value:_e.rotation,onChange:_=>vt(_e.id,{rotation:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),(_e.type==="camera"||_e.type==="building"||_e.type==="image"||_e.type==="label")&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:_e.type==="label"?"Text Content":"Label"}),M.jsx("input",{type:"text",value:_e.type==="label"?_e.text:_e.label,onChange:_=>vt(_e.id,_e.type==="label"?{text:_.target.value}:{label:_.target.value}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),_e.type==="label"&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Font Size"}),M.jsx("input",{type:"number",min:"8",max:"72",value:_e.fontSize,onChange:_=>vt(_e.id,{fontSize:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),(_e.type==="building"||_e.type==="parking")&&M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),M.jsx("input",{type:"number",value:_e.width,onChange:_=>_e.type==="building"?Jo(_e.id,parseInt(_.target.value),_e.height):vt(_e.id,{width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),M.jsx("input",{type:"number",value:_e.height,onChange:_=>_e.type==="building"?Jo(_e.id,_e.width,parseInt(_.target.value)):vt(_e.id,{height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),_e.type==="building"&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Building Shape"}),M.jsxs("div",{className:"flex flex-wrap gap-2",children:[M.jsx("button",{onClick:()=>ks(_e.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Add Vertex"}),M.jsx("button",{onClick:()=>je(!0),className:`px-3 py-1 rounded-full border text-xs ${fe?"border-emerald-300 bg-emerald-50 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"}`,children:"Insert on Edge"}),M.jsx("button",{onClick:()=>_l(_e.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Remove Vertex"}),M.jsx("button",{onClick:()=>Fu(_e.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Reset Rectangle"})]}),M.jsx("p",{className:"text-xs text-slate-400",children:"Drag the green nodes in plan view to sculpt the footprint. Click “Insert on Edge” then click any edge."})]}),_e.type==="image"&&M.jsxs("div",{className:"space-y-4",children:[M.jsxs("button",{onClick:()=>vt(_e.id,{aspectRatioLocked:!_e.aspectRatioLocked}),className:`flex items-center gap-2 text-sm font-medium w-full p-2 rounded border ${_e.aspectRatioLocked?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-slate-200 text-slate-400"}`,children:[_e.aspectRatioLocked?M.jsx(zA,{className:"w-4 h-4"}):M.jsx(FA,{className:"w-4 h-4"}),"Maintain Proportions"]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),M.jsx("input",{type:"number",value:Math.round(_e.width),onChange:_=>zs(_e.id,parseInt(_.target.value),void 0),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),M.jsx("input",{type:"number",value:Math.round(_e.height),onChange:_=>zs(_e.id,void 0,parseInt(_.target.value)),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Size Scale"}),M.jsx("input",{type:"range",min:"10",max:"600",value:Math.max(_e.width,_e.height),onChange:_=>{const b=parseInt(_.target.value);_e.width>=_e.height?zs(_e.id,b,void 0):zs(_e.id,void 0,b)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),_e.type==="tree"&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Canopy Size"}),M.jsx("input",{type:"range",min:"10",max:"100",value:_e.radius,onChange:_=>vt(_e.id,{radius:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),_e.type==="camera"&&M.jsxs("div",{className:"space-y-5",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Horizontal FOV"}),M.jsxs("span",{children:[Math.round(Hs),"deg"]})]}),M.jsx("input",{type:"range",min:"10",max:"180",value:Hs,onChange:_=>{const b=parseInt(_.target.value),N=xa(b,Gi);Bi(_e.id,b,N,Gi)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Vertical FOV"}),M.jsxs("span",{children:[Math.round(zu),"deg"]})]}),M.jsx("input",{type:"range",min:"10",max:"180",value:zu,onChange:_=>{const b=parseInt(_.target.value),N=pC(b,Gi);Bi(_e.id,N,b,Gi)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Diagonal FOV"}),M.jsxs("span",{children:[Math.round(Cp),"deg"]})]}),M.jsx("input",{type:"range",min:"20",max:"180",value:Cp,onChange:_=>{const b=parseInt(_.target.value),{h:N,v:B}=fC(b,Gi);Bi(_e.id,N,B,Gi)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Aspect Ratio"}),M.jsxs("select",{value:Gi,onChange:_=>{const b=parseFloat(_.target.value),N=xa(Hs,b);Bi(_e.id,Hs,N,b)},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none",children:[M.jsx("option",{value:16/9,children:"16:9 (Widescreen)"}),M.jsx("option",{value:4/3,children:"4:3 (Standard)"}),M.jsx("option",{value:1,children:"1:1 (Square)"})]})]}),M.jsx("div",{className:"flex flex-wrap gap-2 text-xs",children:[{label:"Wide",value:120},{label:"Standard",value:80},{label:"Narrow",value:45}].map(_=>M.jsx("button",{onClick:()=>{const b=xa(_.value,Gi);Bi(_e.id,_.value,b,Gi)},className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50",children:_.label},_.label))}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Range"}),M.jsxs("span",{children:[Math.round(_e.range),"px"]})]}),M.jsx("input",{type:"range",min:"50",max:"800",value:_e.range,onChange:_=>vt(_e.id,{range:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Pitch"}),M.jsxs("span",{children:[Math.round(_e.pitch??0),"deg"]})]}),M.jsx("input",{type:"range",min:"-60",max:"30",value:_e.pitch??0,onChange:_=>vt(_e.id,{pitch:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Height"}),M.jsxs("span",{children:[Math.round(((Up=_e.mount)==null?void 0:Up.height)??_e.height??10),"ft"]})]}),M.jsx("input",{type:"range",min:"4",max:"40",value:((Op=_e.mount)==null?void 0:Op.height)??_e.height??10,onChange:_=>{var N;const b=parseInt(_.target.value);((N=_e.mount)==null?void 0:N.type)==="building"?Fs(_e.id,{height:b}):vt(_e.id,{height:b})},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Mount"}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx("button",{onClick:()=>{var b;const _=Ct(_e);vt(_e.id,{x:_.x,y:_.y,mount:{type:"free",height:((b=_e.mount)==null?void 0:b.height)??_e.height??10}})},className:`px-3 py-1 rounded-full text-xs font-semibold border ${Bu==="free"?"bg-emerald-50 border-emerald-200 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"}`,children:"Free"}),M.jsx("button",{disabled:!wl.length,onClick:()=>Ou(_e.id),className:`px-3 py-1 rounded-full text-xs font-semibold border ${Bu==="building"?"bg-emerald-50 border-emerald-200 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"} ${wl.length?"":"opacity-50 cursor-not-allowed"}`,children:"Building"})]})]}),Bu==="building"&&Vs&&M.jsxs("div",{className:"space-y-3",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Building"}),M.jsx("select",{value:Vs.id,onChange:_=>{var N;const b=_.target.value;vt(_e.id,{mount:{type:"building",buildingId:b,edgeIndex:0,edgeT:.5,height:((N=_e.mount)==null?void 0:N.height)??_e.height??10}})},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none",children:wl.map(_=>M.jsx("option",{value:_.id,children:_.label},_.id))})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Edge"}),M.jsxs("span",{children:["#",Rp+1]})]}),M.jsx("input",{type:"range",min:"0",max:Math.max(O_-1,0),value:Rp,onChange:_=>{const b=parseInt(_.target.value);Fs(_e.id,{edgeIndex:b,edgeT:.5,buildingId:Vs.id,type:"building"})},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Position Along Edge"}),M.jsxs("span",{children:[Math.round(Pp*100),"%"]})]}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:Pp,onChange:_=>Fs(_e.id,{edgeT:parseFloat(_.target.value),buildingId:Vs.id,type:"building"}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Description"}),M.jsx("textarea",{value:_e.description,onChange:_=>vt(_e.id,{description:_.target.value}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none h-20"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Connector Dash Size"}),M.jsx("input",{type:"range",min:"1",max:"20",value:_e.connectorDashSize||3,onChange:_=>vt(_e.id,{connectorDashSize:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),_e.type!=="image"&&An[_e.type]&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Color Code"}),M.jsx("div",{className:"flex flex-wrap gap-2",children:An[_e.type].map(_=>M.jsx("button",{onClick:()=>vt(_e.id,{color:_}),className:`w-8 h-8 rounded-full border-2 transition-all ${_e.color===_?"border-slate-800 scale-110":"border-transparent hover:scale-105"}`,style:{backgroundColor:_}},_))})]})]}):M.jsxs("div",{className:"p-6 flex flex-col gap-6",children:[M.jsxs("div",{className:"flex items-center gap-2 border-b border-white/10 pb-4",children:[M.jsx(HA,{className:"w-5 h-5 text-slate-400"}),M.jsx("h2",{className:"font-bold text-lg text-slate-200",children:"Project Settings"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Project Name"}),M.jsx("input",{type:"text",value:T,onChange:_=>V(_.target.value),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsx("div",{className:"grid grid-cols-2 gap-4",children:[{label:"Cameras",value:t.filter(_=>_.type==="camera").length},{label:"Buildings",value:t.filter(_=>_.type==="building").length},{label:"Trees",value:t.filter(_=>_.type==="tree").length},{label:"Parking",value:t.filter(_=>_.type==="parking").length}].map(_=>M.jsxs("div",{className:"rounded-lg border border-white/10 bg-white/5 p-3",children:[M.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-400",children:_.label}),M.jsx("p",{className:"text-lg font-semibold text-slate-200",children:_.value})]},_.label))}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"Canvas"}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),M.jsx("input",{type:"number",min:"400",max:"3000",value:v.width,onChange:_=>y({...v,width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),M.jsx("input",{type:"number",min:"300",max:"3000",value:v.height,onChange:_=>y({...v,height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Grid Size"}),M.jsxs("span",{children:[S,"px"]})]}),M.jsx("input",{type:"range",min:"10",max:"80",value:S,onChange:_=>L(parseInt(_.target.value)),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm",children:[M.jsx("span",{className:"text-slate-600",children:"Show Grid"}),M.jsx("button",{onClick:()=>R(_=>!_),className:`px-3 py-1 rounded-full text-xs font-semibold ${A?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-400"}`,children:A?"On":"Off"})]}),M.jsxs("div",{className:"flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm",children:[M.jsx("span",{className:"text-slate-600",children:"Snap to Grid"}),M.jsx("button",{onClick:()=>E(_=>!_),className:`px-3 py-1 rounded-full text-xs font-semibold ${F?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-400"}`,children:F?"On":"Off"})]}),M.jsx("button",{onClick:P,className:"w-full py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50",children:"Clear Canvas"})]}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"Background Map"}),M.jsx("p",{className:"text-xs text-slate-400",children:"Adjust the uploaded map to align with the grid."}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Opacity"}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:m.opacity,onChange:_=>x({...m,opacity:parseFloat(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Width"}),M.jsx("input",{type:"number",value:m.width,onChange:_=>x({...m,width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Height"}),M.jsx("input",{type:"number",value:m.height,onChange:_=>x({...m,height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Offset X"}),M.jsx("input",{type:"number",value:m.x,onChange:_=>x({...m,x:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Offset Y"}),M.jsx("input",{type:"number",value:m.y,onChange:_=>x({...m,y:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsx("button",{onClick:G,className:"w-full py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50",children:"Fit Background to Canvas"})]}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"3D Visualization"}),M.jsxs("div",{className:"space-y-3 mb-4 p-3 bg-white/5 rounded-lg border border-white/10",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 block",children:"Environment Background"}),M.jsxs("div",{className:"flex gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10",children:[M.jsx("button",{onClick:()=>Ve("flat"),className:`flex-1 px-2 py-1 text-[10px] font-medium rounded transition-colors ${$e==="flat"?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-300"}`,children:"Flat Image"}),M.jsx("button",{onClick:()=>Ve("panorama"),className:`flex-1 px-2 py-1 text-[10px] font-medium rounded transition-colors ${$e==="panorama"?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-300"}`,children:"360° Panorama"})]}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx("button",{onClick:()=>{var _;return(_=C.current)==null?void 0:_.click()},className:"flex-1 py-1.5 px-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors",children:$e==="panorama"?"Upload HDRI/Panorama":"Upload Background"}),dt&&M.jsx("button",{onClick:()=>ht(null),className:"py-1.5 px-3 rounded-md bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/10 text-xs transition-colors",title:"Clear Background",children:M.jsx(R0,{className:"w-4 h-4"})})]}),$e==="panorama"&&M.jsxs("p",{className:"text-[10px] text-slate-500",children:["Upload a 360° equirectangular image (2:1 aspect ratio) for immersive backgrounds. Get free HDRIs from ",M.jsx("a",{href:"https://polyhaven.com/hdris",target:"_blank",rel:"noopener noreferrer",className:"text-indigo-400 hover:underline",children:"Poly Haven"})]})]}),M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400",children:"Show Vision Cones"}),M.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[M.jsx("input",{type:"checkbox",className:"sr-only peer",checked:ne.visible,onChange:_=>Tt({...ne,visible:_.target.checked})}),M.jsx("div",{className:"w-9 h-5 bg-slate-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"})]})]}),ne.visible&&M.jsxs("div",{className:"space-y-3 mt-2 pl-2 border-l border-white/5",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("label",{className:"text-xs text-slate-500",children:"Active Cam Only"}),M.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[M.jsx("input",{type:"checkbox",className:"sr-only peer",checked:ne.showAll===!1,onChange:_=>Tt({...ne,showAll:!_.target.checked})}),M.jsx("div",{className:"w-7 h-4 bg-slate-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-indigo-600"})]})]}),M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("label",{className:"text-xs text-slate-500",children:"Style"}),M.jsxs("div",{className:"bg-white/5 p-0.5 rounded-lg flex text-[10px] font-medium border border-white/10",children:[M.jsx("button",{onClick:()=>Tt({...ne,mode:"volume"}),className:`px-2 py-1 rounded transition-colors ${!ne.mode||ne.mode==="volume"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-300"}`,children:"Full"}),M.jsx("button",{onClick:()=>Tt({...ne,mode:"floor"}),className:`px-2 py-1 rounded transition-colors ${ne.mode==="floor"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-300"}`,children:"Floor"})]})]}),M.jsxs("div",{className:"space-y-1",children:[M.jsxs("div",{className:"flex justify-between",children:[M.jsx("label",{className:"text-[10px] text-slate-500",children:"Opacity"}),M.jsxs("span",{className:"text-[10px] text-slate-400",children:[Math.round(ne.opacity*100),"%"]})]}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:ne.opacity,onChange:_=>Tt({...ne,opacity:parseFloat(_.target.value)}),className:"w-full accent-indigo-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"})]}),M.jsxs("div",{className:"space-y-1",children:[M.jsxs("div",{className:"flex justify-between",children:[M.jsx("label",{className:"text-[10px] text-slate-500",children:"Edges"}),M.jsxs("span",{className:"text-[10px] text-slate-400",children:[Math.round(ne.edgeOpacity*100),"%"]})]}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:ne.edgeOpacity,onChange:_=>Tt({...ne,edgeOpacity:parseFloat(_.target.value)}),className:"w-full accent-indigo-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"})]})]})]}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"3D Snapshots"}),D!=="iso3d"?M.jsx("p",{className:"text-xs text-slate-400",children:"Switch to Isometric view to capture snapshots."}):me.length===0?M.jsx("p",{className:"text-xs text-slate-400",children:"No snapshots yet. Click “Snapshot” in the 3D view."}):M.jsx("div",{className:"grid grid-cols-2 gap-3",children:me.map(_=>M.jsxs("div",{className:"rounded-lg border border-slate-200 overflow-hidden bg-white",children:[M.jsx("img",{src:_.dataUrl,alt:"Snapshot",className:"w-full h-24 object-cover"}),M.jsxs("div",{className:"p-2",children:[M.jsx("p",{className:"text-[10px] text-slate-400",children:_.createdAt}),M.jsx("button",{onClick:()=>Hi(_.dataUrl,`security_snapshot_${_.id}.png`),className:"mt-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700",children:"Export"})]})]},_.id))})]})]})})]})]})}const N_=document.getElementById("root");if(!N_)throw new Error("Root element not found");Vx(N_).render(M.jsx(oy.StrictMode,{children:M.jsx(mC,{})}));
