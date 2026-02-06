(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function q_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U0={exports:{}},vu={},O0={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=Symbol.for("react.element"),Z_=Symbol.for("react.portal"),K_=Symbol.for("react.fragment"),J_=Symbol.for("react.strict_mode"),Q_=Symbol.for("react.profiler"),ey=Symbol.for("react.provider"),ty=Symbol.for("react.context"),ny=Symbol.for("react.forward_ref"),iy=Symbol.for("react.suspense"),ry=Symbol.for("react.memo"),sy=Symbol.for("react.lazy"),Bp=Symbol.iterator;function oy(t){return t===null||typeof t!="object"?null:(t=Bp&&t[Bp]||t["@@iterator"],typeof t=="function"?t:null)}var F0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k0=Object.assign,z0={};function $o(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||F0}$o.prototype.isReactComponent={};$o.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$o.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function B0(){}B0.prototype=$o.prototype;function Sf(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||F0}var Mf=Sf.prototype=new B0;Mf.constructor=Sf;k0(Mf,$o.prototype);Mf.isPureReactComponent=!0;var Hp=Array.isArray,H0=Object.prototype.hasOwnProperty,wf={current:null},V0={key:!0,ref:!0,__self:!0,__source:!0};function G0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)H0.call(e,i)&&!V0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ml,type:t,key:s,ref:o,props:r,_owner:wf.current}}function ay(t,e){return{$$typeof:ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===ml}function ly(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vp=/\/+/g;function qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ly(""+t.key):e.toString(36)}function wc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ml:case Z_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+qu(o,0):i,Hp(r)?(n="",t!=null&&(n=t.replace(Vp,"$&/")+"/"),wc(r,e,n,"",function(c){return c})):r!=null&&(Ef(r)&&(r=ay(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Vp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Hp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+qu(s,a);o+=wc(s,e,n,l,r)}else if(l=oy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+qu(s,a++),o+=wc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Rl(t,e,n){if(t==null)return t;var i=[],r=0;return wc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function cy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zn={current:null},Ec={transition:null},uy={ReactCurrentDispatcher:Zn,ReactCurrentBatchConfig:Ec,ReactCurrentOwner:wf};function W0(){throw Error("act(...) is not supported in production builds of React.")}bt.Children={map:Rl,forEach:function(t,e,n){Rl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Rl(t,function(){e++}),e},toArray:function(t){return Rl(t,function(e){return e})||[]},only:function(t){if(!Ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};bt.Component=$o;bt.Fragment=K_;bt.Profiler=Q_;bt.PureComponent=Sf;bt.StrictMode=J_;bt.Suspense=iy;bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uy;bt.act=W0;bt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=k0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)H0.call(e,l)&&!V0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ml,type:t.type,key:r,ref:s,props:i,_owner:o}};bt.createContext=function(t){return t={$$typeof:ty,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ey,_context:t},t.Consumer=t};bt.createElement=G0;bt.createFactory=function(t){var e=G0.bind(null,t);return e.type=t,e};bt.createRef=function(){return{current:null}};bt.forwardRef=function(t){return{$$typeof:ny,render:t}};bt.isValidElement=Ef;bt.lazy=function(t){return{$$typeof:sy,_payload:{_status:-1,_result:t},_init:cy}};bt.memo=function(t,e){return{$$typeof:ry,type:t,compare:e===void 0?null:e}};bt.startTransition=function(t){var e=Ec.transition;Ec.transition={};try{t()}finally{Ec.transition=e}};bt.unstable_act=W0;bt.useCallback=function(t,e){return Zn.current.useCallback(t,e)};bt.useContext=function(t){return Zn.current.useContext(t)};bt.useDebugValue=function(){};bt.useDeferredValue=function(t){return Zn.current.useDeferredValue(t)};bt.useEffect=function(t,e){return Zn.current.useEffect(t,e)};bt.useId=function(){return Zn.current.useId()};bt.useImperativeHandle=function(t,e,n){return Zn.current.useImperativeHandle(t,e,n)};bt.useInsertionEffect=function(t,e){return Zn.current.useInsertionEffect(t,e)};bt.useLayoutEffect=function(t,e){return Zn.current.useLayoutEffect(t,e)};bt.useMemo=function(t,e){return Zn.current.useMemo(t,e)};bt.useReducer=function(t,e,n){return Zn.current.useReducer(t,e,n)};bt.useRef=function(t){return Zn.current.useRef(t)};bt.useState=function(t){return Zn.current.useState(t)};bt.useSyncExternalStore=function(t,e,n){return Zn.current.useSyncExternalStore(t,e,n)};bt.useTransition=function(){return Zn.current.useTransition()};bt.version="18.3.1";O0.exports=bt;var $e=O0.exports;const dy=q_($e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy=$e,fy=Symbol.for("react.element"),py=Symbol.for("react.fragment"),my=Object.prototype.hasOwnProperty,gy=hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xy={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)my.call(e,i)&&!xy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:fy,type:t,key:s,ref:o,props:r,_owner:gy.current}}vu.Fragment=py;vu.jsx=j0;vu.jsxs=j0;U0.exports=vu;var y=U0.exports,X0={exports:{}},mi={},$0={exports:{}},Y0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var q=B.length;B.push(Y);e:for(;0<q;){var ce=q-1>>>1,fe=B[ce];if(0<r(fe,Y))B[ce]=Y,B[q]=fe,q=ce;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var Y=B[0],q=B.pop();if(q!==Y){B[0]=q;e:for(var ce=0,fe=B.length,ee=fe>>>1;ce<ee;){var de=2*(ce+1)-1,Pe=B[de],He=de+1,Ie=B[He];if(0>r(Pe,q))He<fe&&0>r(Ie,Pe)?(B[ce]=Ie,B[He]=q,ce=He):(B[ce]=Pe,B[de]=q,ce=de);else if(He<fe&&0>r(Ie,q))B[ce]=Ie,B[He]=q,ce=He;else break e}}return Y}function r(B,Y){var q=B.sortIndex-Y.sortIndex;return q!==0?q:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,p=!1,x=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(B){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=B)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(B){if(S=!1,v(B),!x)if(n(l)!==null)x=!0,j(N);else{var Y=n(c);Y!==null&&ne(M,Y.startTime-B)}}function N(B,Y){x=!1,S&&(S=!1,d(k),k=-1),p=!0;var q=f;try{for(v(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||B&&!V());){var ce=h.callback;if(typeof ce=="function"){h.callback=null,f=h.priorityLevel;var fe=ce(h.expirationTime<=Y);Y=t.unstable_now(),typeof fe=="function"?h.callback=fe:h===n(l)&&i(l),v(Y)}else i(l);h=n(l)}if(h!==null)var ee=!0;else{var de=n(c);de!==null&&ne(M,de.startTime-Y),ee=!1}return ee}finally{h=null,f=q,p=!1}}var A=!1,R=null,k=-1,b=5,T=-1;function V(){return!(t.unstable_now()-T<b)}function X(){if(R!==null){var B=t.unstable_now();T=B;var Y=!0;try{Y=R(!0,B)}finally{Y?ie():(A=!1,R=null)}}else A=!1}var ie;if(typeof m=="function")ie=function(){m(X)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,W=I.port2;I.port1.onmessage=X,ie=function(){W.postMessage(null)}}else ie=function(){g(X,0)};function j(B){R=B,A||(A=!0,ie())}function ne(B,Y){k=g(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,j(N))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var q=f;f=Y;try{return B()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=f;f=B;try{return Y()}finally{f=q}},t.unstable_scheduleCallback=function(B,Y,q){var ce=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ce+q:ce):q=ce,B){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=q+fe,B={id:u++,callback:Y,priorityLevel:B,startTime:q,expirationTime:fe,sortIndex:-1},q>ce?(B.sortIndex=q,e(c,B),n(l)===null&&B===n(c)&&(S?(d(k),k=-1):S=!0,ne(M,q-ce))):(B.sortIndex=fe,e(l,B),x||p||(x=!0,j(N))),B},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(B){var Y=f;return function(){var q=f;f=Y;try{return B.apply(this,arguments)}finally{f=q}}}})(Y0);$0.exports=Y0;var vy=$0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y=$e,pi=vy;function Me(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q0=new Set,ja={};function Us(t,e){Uo(t,e),Uo(t+"Capture",e)}function Uo(t,e){for(ja[t]=e,t=0;t<e.length;t++)q0.add(e[t])}var xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fh=Object.prototype.hasOwnProperty,yy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gp={},Wp={};function Sy(t){return fh.call(Wp,t)?!0:fh.call(Gp,t)?!1:yy.test(t)?Wp[t]=!0:(Gp[t]=!0,!1)}function My(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wy(t,e,n,i){if(e===null||typeof e>"u"||My(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ln[t]=new Kn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ln[e]=new Kn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ln[t]=new Kn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ln[t]=new Kn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ln[t]=new Kn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ln[t]=new Kn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ln[t]=new Kn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ln[t]=new Kn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ln[t]=new Kn(t,5,!1,t.toLowerCase(),null,!1,!1)});var bf=/[\-:]([a-z])/g;function Tf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bf,Tf);Ln[e]=new Kn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bf,Tf);Ln[e]=new Kn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bf,Tf);Ln[e]=new Kn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ln[t]=new Kn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ln.xlinkHref=new Kn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ln[t]=new Kn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Af(t,e,n,i){var r=Ln.hasOwnProperty(e)?Ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wy(e,n,r,i)&&(n=null),i||r===null?Sy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mr=_y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pl=Symbol.for("react.element"),ho=Symbol.for("react.portal"),fo=Symbol.for("react.fragment"),Cf=Symbol.for("react.strict_mode"),ph=Symbol.for("react.profiler"),Z0=Symbol.for("react.provider"),K0=Symbol.for("react.context"),Rf=Symbol.for("react.forward_ref"),mh=Symbol.for("react.suspense"),gh=Symbol.for("react.suspense_list"),Pf=Symbol.for("react.memo"),Nr=Symbol.for("react.lazy"),J0=Symbol.for("react.offscreen"),jp=Symbol.iterator;function sa(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var sn=Object.assign,Zu;function Ea(t){if(Zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zu=e&&e[1]||""}return`
`+Zu+t}var Ku=!1;function Ju(t,e){if(!t||Ku)return"";Ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ku=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ea(t):""}function Ey(t){switch(t.tag){case 5:return Ea(t.type);case 16:return Ea("Lazy");case 13:return Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 2:case 15:return t=Ju(t.type,!1),t;case 11:return t=Ju(t.type.render,!1),t;case 1:return t=Ju(t.type,!0),t;default:return""}}function xh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fo:return"Fragment";case ho:return"Portal";case ph:return"Profiler";case Cf:return"StrictMode";case mh:return"Suspense";case gh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case K0:return(t.displayName||"Context")+".Consumer";case Z0:return(t._context.displayName||"Context")+".Provider";case Rf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pf:return e=t.displayName||null,e!==null?e:xh(t.type)||"Memo";case Nr:e=t._payload,t=t._init;try{return xh(t(e))}catch{}}return null}function by(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xh(e);case 8:return e===Cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Q0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ty(t){var e=Q0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ll(t){t._valueTracker||(t._valueTracker=Ty(t))}function ex(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Q0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vh(t,e){var n=e.checked;return sn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tx(t,e){e=e.checked,e!=null&&Af(t,"checked",e,!1)}function _h(t,e){tx(t,e);var n=Qr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yh(t,e.type,n):e.hasOwnProperty("defaultValue")&&yh(t,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $p(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yh(t,e,n){(e!=="number"||kc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ba=Array.isArray;function Ao(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Qr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Sh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Me(91));return sn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Me(92));if(ba(n)){if(1<n.length)throw Error(Me(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qr(n)}}function nx(t,e){var n=Qr(e.value),i=Qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function qp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ix(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ix(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Nl,rx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Nl=Nl||document.createElement("div"),Nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ay=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){Ay.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function sx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function ox(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=sx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Cy=sn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wh(t,e){if(e){if(Cy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Me(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Me(62))}}function Eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function Lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Th=null,Co=null,Ro=null;function Zp(t){if(t=vl(t)){if(typeof Th!="function")throw Error(Me(280));var e=t.stateNode;e&&(e=wu(e),Th(t.stateNode,t.type,e))}}function ax(t){Co?Ro?Ro.push(t):Ro=[t]:Co=t}function lx(){if(Co){var t=Co,e=Ro;if(Ro=Co=null,Zp(t),e)for(t=0;t<e.length;t++)Zp(e[t])}}function cx(t,e){return t(e)}function ux(){}var Qu=!1;function dx(t,e,n){if(Qu)return t(e,n);Qu=!0;try{return cx(t,e,n)}finally{Qu=!1,(Co!==null||Ro!==null)&&(ux(),lx())}}function $a(t,e){var n=t.stateNode;if(n===null)return null;var i=wu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Me(231,e,typeof n));return n}var Ah=!1;if(xr)try{var oa={};Object.defineProperty(oa,"passive",{get:function(){Ah=!0}}),window.addEventListener("test",oa,oa),window.removeEventListener("test",oa,oa)}catch{Ah=!1}function Ry(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ra=!1,zc=null,Bc=!1,Ch=null,Py={onError:function(t){Ra=!0,zc=t}};function Ly(t,e,n,i,r,s,o,a,l){Ra=!1,zc=null,Ry.apply(Py,arguments)}function Ny(t,e,n,i,r,s,o,a,l){if(Ly.apply(this,arguments),Ra){if(Ra){var c=zc;Ra=!1,zc=null}else throw Error(Me(198));Bc||(Bc=!0,Ch=c)}}function Os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kp(t){if(Os(t)!==t)throw Error(Me(188))}function Iy(t){var e=t.alternate;if(!e){if(e=Os(t),e===null)throw Error(Me(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Kp(r),t;if(s===i)return Kp(r),e;s=s.sibling}throw Error(Me(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Me(189))}}if(n.alternate!==i)throw Error(Me(190))}if(n.tag!==3)throw Error(Me(188));return n.stateNode.current===n?t:e}function fx(t){return t=Iy(t),t!==null?px(t):null}function px(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=px(t);if(e!==null)return e;t=t.sibling}return null}var mx=pi.unstable_scheduleCallback,Jp=pi.unstable_cancelCallback,Dy=pi.unstable_shouldYield,Uy=pi.unstable_requestPaint,cn=pi.unstable_now,Oy=pi.unstable_getCurrentPriorityLevel,Nf=pi.unstable_ImmediatePriority,gx=pi.unstable_UserBlockingPriority,Hc=pi.unstable_NormalPriority,Fy=pi.unstable_LowPriority,xx=pi.unstable_IdlePriority,_u=null,Qi=null;function ky(t){if(Qi&&typeof Qi.onCommitFiberRoot=="function")try{Qi.onCommitFiberRoot(_u,t,void 0,(t.current.flags&128)===128)}catch{}}var Fi=Math.clz32?Math.clz32:Hy,zy=Math.log,By=Math.LN2;function Hy(t){return t>>>=0,t===0?32:31-(zy(t)/By|0)|0}var Il=64,Dl=4194304;function Ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ta(a):(s&=o,s!==0&&(i=Ta(s)))}else o=n&~r,o!==0?i=Ta(o):s!==0&&(i=Ta(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Fi(e),r=1<<n,i|=t[n],e&=~r;return i}function Vy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Fi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Vy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Rh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vx(){var t=Il;return Il<<=1,!(Il&4194240)&&(Il=64),t}function ed(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function gl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fi(e),t[e]=n}function Wy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function If(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Dt=0;function _x(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yx,Df,Sx,Mx,wx,Ph=!1,Ul=[],Hr=null,Vr=null,Gr=null,Ya=new Map,qa=new Map,Dr=[],jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qp(t,e){switch(t){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":Ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(e.pointerId)}}function aa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=vl(e),e!==null&&Df(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Xy(t,e,n,i,r){switch(e){case"focusin":return Hr=aa(Hr,t,e,n,i,r),!0;case"dragenter":return Vr=aa(Vr,t,e,n,i,r),!0;case"mouseover":return Gr=aa(Gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ya.set(s,aa(Ya.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,qa.set(s,aa(qa.get(s)||null,t,e,n,i,r)),!0}return!1}function Ex(t){var e=vs(t.target);if(e!==null){var n=Os(e);if(n!==null){if(e=n.tag,e===13){if(e=hx(n),e!==null){t.blockedOn=e,wx(t.priority,function(){Sx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);bh=i,n.target.dispatchEvent(i),bh=null}else return e=vl(n),e!==null&&Df(e),t.blockedOn=n,!1;e.shift()}return!0}function em(t,e,n){bc(t)&&n.delete(e)}function $y(){Ph=!1,Hr!==null&&bc(Hr)&&(Hr=null),Vr!==null&&bc(Vr)&&(Vr=null),Gr!==null&&bc(Gr)&&(Gr=null),Ya.forEach(em),qa.forEach(em)}function la(t,e){t.blockedOn===e&&(t.blockedOn=null,Ph||(Ph=!0,pi.unstable_scheduleCallback(pi.unstable_NormalPriority,$y)))}function Za(t){function e(r){return la(r,t)}if(0<Ul.length){la(Ul[0],t);for(var n=1;n<Ul.length;n++){var i=Ul[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hr!==null&&la(Hr,t),Vr!==null&&la(Vr,t),Gr!==null&&la(Gr,t),Ya.forEach(e),qa.forEach(e),n=0;n<Dr.length;n++)i=Dr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Dr.length&&(n=Dr[0],n.blockedOn===null);)Ex(n),n.blockedOn===null&&Dr.shift()}var Po=Mr.ReactCurrentBatchConfig,Gc=!0;function Yy(t,e,n,i){var r=Dt,s=Po.transition;Po.transition=null;try{Dt=1,Uf(t,e,n,i)}finally{Dt=r,Po.transition=s}}function qy(t,e,n,i){var r=Dt,s=Po.transition;Po.transition=null;try{Dt=4,Uf(t,e,n,i)}finally{Dt=r,Po.transition=s}}function Uf(t,e,n,i){if(Gc){var r=Lh(t,e,n,i);if(r===null)ud(t,e,i,Wc,n),Qp(t,i);else if(Xy(r,t,e,n,i))i.stopPropagation();else if(Qp(t,i),e&4&&-1<jy.indexOf(t)){for(;r!==null;){var s=vl(r);if(s!==null&&yx(s),s=Lh(t,e,n,i),s===null&&ud(t,e,i,Wc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ud(t,e,i,null,n)}}var Wc=null;function Lh(t,e,n,i){if(Wc=null,t=Lf(i),t=vs(t),t!==null)if(e=Os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wc=t,null}function bx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Oy()){case Nf:return 1;case gx:return 4;case Hc:case Fy:return 16;case xx:return 536870912;default:return 16}default:return 16}}var Fr=null,Of=null,Tc=null;function Tx(){if(Tc)return Tc;var t,e=Of,n=e.length,i,r="value"in Fr?Fr.value:Fr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Tc=r.slice(t,1<i?1-i:void 0)}function Ac(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function tm(){return!1}function gi(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ol:tm,this.isPropagationStopped=tm,this}return sn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),e}var Yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ff=gi(Yo),xl=sn({},Yo,{view:0,detail:0}),Zy=gi(xl),td,nd,ca,yu=sn({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(td=t.screenX-ca.screenX,nd=t.screenY-ca.screenY):nd=td=0,ca=t),td)},movementY:function(t){return"movementY"in t?t.movementY:nd}}),nm=gi(yu),Ky=sn({},yu,{dataTransfer:0}),Jy=gi(Ky),Qy=sn({},xl,{relatedTarget:0}),id=gi(Qy),eS=sn({},Yo,{animationName:0,elapsedTime:0,pseudoElement:0}),tS=gi(eS),nS=sn({},Yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iS=gi(nS),rS=sn({},Yo,{data:0}),im=gi(rS),sS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aS[t])?!!e[t]:!1}function kf(){return lS}var cS=sn({},xl,{key:function(t){if(t.key){var e=sS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ac(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kf,charCode:function(t){return t.type==="keypress"?Ac(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ac(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uS=gi(cS),dS=sn({},yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=gi(dS),hS=sn({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kf}),fS=gi(hS),pS=sn({},Yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=gi(pS),gS=sn({},yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xS=gi(gS),vS=[9,13,27,32],zf=xr&&"CompositionEvent"in window,Pa=null;xr&&"documentMode"in document&&(Pa=document.documentMode);var _S=xr&&"TextEvent"in window&&!Pa,Ax=xr&&(!zf||Pa&&8<Pa&&11>=Pa),sm=" ",om=!1;function Cx(t,e){switch(t){case"keyup":return vS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var po=!1;function yS(t,e){switch(t){case"compositionend":return Rx(e);case"keypress":return e.which!==32?null:(om=!0,sm);case"textInput":return t=e.data,t===sm&&om?null:t;default:return null}}function SS(t,e){if(po)return t==="compositionend"||!zf&&Cx(t,e)?(t=Tx(),Tc=Of=Fr=null,po=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ax&&e.locale!=="ko"?null:e.data;default:return null}}var MS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!MS[t.type]:e==="textarea"}function Px(t,e,n,i){ax(i),e=jc(e,"onChange"),0<e.length&&(n=new Ff("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var La=null,Ka=null;function wS(t){Hx(t,0)}function Su(t){var e=xo(t);if(ex(e))return t}function ES(t,e){if(t==="change")return e}var Lx=!1;if(xr){var rd;if(xr){var sd="oninput"in document;if(!sd){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),sd=typeof lm.oninput=="function"}rd=sd}else rd=!1;Lx=rd&&(!document.documentMode||9<document.documentMode)}function cm(){La&&(La.detachEvent("onpropertychange",Nx),Ka=La=null)}function Nx(t){if(t.propertyName==="value"&&Su(Ka)){var e=[];Px(e,Ka,t,Lf(t)),dx(wS,e)}}function bS(t,e,n){t==="focusin"?(cm(),La=e,Ka=n,La.attachEvent("onpropertychange",Nx)):t==="focusout"&&cm()}function TS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Su(Ka)}function AS(t,e){if(t==="click")return Su(e)}function CS(t,e){if(t==="input"||t==="change")return Su(e)}function RS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zi=typeof Object.is=="function"?Object.is:RS;function Ja(t,e){if(zi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!fh.call(e,r)||!zi(t[r],e[r]))return!1}return!0}function um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,e){var n=um(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=um(n)}}function Ix(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ix(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dx(){for(var t=window,e=kc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kc(t.document)}return e}function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PS(t){var e=Dx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ix(n.ownerDocument.documentElement,n)){if(i!==null&&Bf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=dm(n,s);var o=dm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LS=xr&&"documentMode"in document&&11>=document.documentMode,mo=null,Nh=null,Na=null,Ih=!1;function hm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ih||mo==null||mo!==kc(i)||(i=mo,"selectionStart"in i&&Bf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Na&&Ja(Na,i)||(Na=i,i=jc(Nh,"onSelect"),0<i.length&&(e=new Ff("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=mo)))}function Fl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var go={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},od={},Ux={};xr&&(Ux=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function Mu(t){if(od[t])return od[t];if(!go[t])return t;var e=go[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ux)return od[t]=e[n];return t}var Ox=Mu("animationend"),Fx=Mu("animationiteration"),kx=Mu("animationstart"),zx=Mu("transitionend"),Bx=new Map,fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ns(t,e){Bx.set(t,e),Us(e,[t])}for(var ad=0;ad<fm.length;ad++){var ld=fm[ad],NS=ld.toLowerCase(),IS=ld[0].toUpperCase()+ld.slice(1);ns(NS,"on"+IS)}ns(Ox,"onAnimationEnd");ns(Fx,"onAnimationIteration");ns(kx,"onAnimationStart");ns("dblclick","onDoubleClick");ns("focusin","onFocus");ns("focusout","onBlur");ns(zx,"onTransitionEnd");Uo("onMouseEnter",["mouseout","mouseover"]);Uo("onMouseLeave",["mouseout","mouseover"]);Uo("onPointerEnter",["pointerout","pointerover"]);Uo("onPointerLeave",["pointerout","pointerover"]);Us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Us("onBeforeInput",["compositionend","keypress","textInput","paste"]);Us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function pm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ny(i,e,void 0,t),t.currentTarget=null}function Hx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;pm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;pm(r,a,c),s=l}}}if(Bc)throw t=Ch,Bc=!1,Ch=null,t}function jt(t,e){var n=e[kh];n===void 0&&(n=e[kh]=new Set);var i=t+"__bubble";n.has(i)||(Vx(e,t,2,!1),n.add(i))}function cd(t,e,n){var i=0;e&&(i|=4),Vx(n,t,i,e)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Qa(t){if(!t[kl]){t[kl]=!0,q0.forEach(function(n){n!=="selectionchange"&&(DS.has(n)||cd(n,!1,t),cd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[kl]||(e[kl]=!0,cd("selectionchange",!1,e))}}function Vx(t,e,n,i){switch(bx(e)){case 1:var r=Yy;break;case 4:r=qy;break;default:r=Uf}n=r.bind(null,e,n,t),r=void 0,!Ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ud(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=vs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}dx(function(){var c=s,u=Lf(n),h=[];e:{var f=Bx.get(t);if(f!==void 0){var p=Ff,x=t;switch(t){case"keypress":if(Ac(n)===0)break e;case"keydown":case"keyup":p=uS;break;case"focusin":x="focus",p=id;break;case"focusout":x="blur",p=id;break;case"beforeblur":case"afterblur":p=id;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fS;break;case Ox:case Fx:case kx:p=tS;break;case zx:p=mS;break;case"scroll":p=Zy;break;case"wheel":p=xS;break;case"copy":case"cut":case"paste":p=iS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=rm}var S=(e&4)!==0,g=!S&&t==="scroll",d=S?f!==null?f+"Capture":null:f;S=[];for(var m=c,v;m!==null;){v=m;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,d!==null&&(M=$a(m,d),M!=null&&S.push(el(m,M,v)))),g)break;m=m.return}0<S.length&&(f=new p(f,x,null,n,u),h.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==bh&&(x=n.relatedTarget||n.fromElement)&&(vs(x)||x[vr]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?vs(x):null,x!==null&&(g=Os(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(S=nm,M="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=rm,M="onPointerLeave",d="onPointerEnter",m="pointer"),g=p==null?f:xo(p),v=x==null?f:xo(x),f=new S(M,m+"leave",p,n,u),f.target=g,f.relatedTarget=v,M=null,vs(u)===c&&(S=new S(d,m+"enter",x,n,u),S.target=v,S.relatedTarget=g,M=S),g=M,p&&x)t:{for(S=p,d=x,m=0,v=S;v;v=Gs(v))m++;for(v=0,M=d;M;M=Gs(M))v++;for(;0<m-v;)S=Gs(S),m--;for(;0<v-m;)d=Gs(d),v--;for(;m--;){if(S===d||d!==null&&S===d.alternate)break t;S=Gs(S),d=Gs(d)}S=null}else S=null;p!==null&&mm(h,f,p,S,!1),x!==null&&g!==null&&mm(h,g,x,S,!0)}}e:{if(f=c?xo(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var N=ES;else if(am(f))if(Lx)N=CS;else{N=TS;var A=bS}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=AS);if(N&&(N=N(t,c))){Px(h,N,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&yh(f,"number",f.value)}switch(A=c?xo(c):window,t){case"focusin":(am(A)||A.contentEditable==="true")&&(mo=A,Nh=c,Na=null);break;case"focusout":Na=Nh=mo=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,hm(h,n,u);break;case"selectionchange":if(LS)break;case"keydown":case"keyup":hm(h,n,u)}var R;if(zf)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else po?Cx(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Ax&&n.locale!=="ko"&&(po||k!=="onCompositionStart"?k==="onCompositionEnd"&&po&&(R=Tx()):(Fr=u,Of="value"in Fr?Fr.value:Fr.textContent,po=!0)),A=jc(c,k),0<A.length&&(k=new im(k,t,null,n,u),h.push({event:k,listeners:A}),R?k.data=R:(R=Rx(n),R!==null&&(k.data=R)))),(R=_S?yS(t,n):SS(t,n))&&(c=jc(c,"onBeforeInput"),0<c.length&&(u=new im("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=R))}Hx(h,e)})}function el(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=$a(t,n),s!=null&&i.unshift(el(t,s,r)),s=$a(t,e),s!=null&&i.push(el(t,s,r))),t=t.return}return i}function Gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=$a(n,s),l!=null&&o.unshift(el(n,l,a))):r||(l=$a(n,s),l!=null&&o.push(el(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var US=/\r\n?/g,OS=/\u0000|\uFFFD/g;function gm(t){return(typeof t=="string"?t:""+t).replace(US,`
`).replace(OS,"")}function zl(t,e,n){if(e=gm(e),gm(t)!==e&&n)throw Error(Me(425))}function Xc(){}var Dh=null,Uh=null;function Oh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fh=typeof setTimeout=="function"?setTimeout:void 0,FS=typeof clearTimeout=="function"?clearTimeout:void 0,xm=typeof Promise=="function"?Promise:void 0,kS=typeof queueMicrotask=="function"?queueMicrotask:typeof xm<"u"?function(t){return xm.resolve(null).then(t).catch(zS)}:Fh;function zS(t){setTimeout(function(){throw t})}function dd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Za(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Za(e)}function Wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qo=Math.random().toString(36).slice(2),Zi="__reactFiber$"+qo,tl="__reactProps$"+qo,vr="__reactContainer$"+qo,kh="__reactEvents$"+qo,BS="__reactListeners$"+qo,HS="__reactHandles$"+qo;function vs(t){var e=t[Zi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vr]||n[Zi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vm(t);t!==null;){if(n=t[Zi])return n;t=vm(t)}return e}t=n,n=t.parentNode}return null}function vl(t){return t=t[Zi]||t[vr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Me(33))}function wu(t){return t[tl]||null}var zh=[],vo=-1;function is(t){return{current:t}}function $t(t){0>vo||(t.current=zh[vo],zh[vo]=null,vo--)}function Gt(t,e){vo++,zh[vo]=t.current,t.current=e}var es={},kn=is(es),ri=is(!1),Ts=es;function Oo(t,e){var n=t.type.contextTypes;if(!n)return es;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function si(t){return t=t.childContextTypes,t!=null}function $c(){$t(ri),$t(kn)}function _m(t,e,n){if(kn.current!==es)throw Error(Me(168));Gt(kn,e),Gt(ri,n)}function Gx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Me(108,by(t)||"Unknown",r));return sn({},n,i)}function Yc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||es,Ts=kn.current,Gt(kn,t),Gt(ri,ri.current),!0}function ym(t,e,n){var i=t.stateNode;if(!i)throw Error(Me(169));n?(t=Gx(t,e,Ts),i.__reactInternalMemoizedMergedChildContext=t,$t(ri),$t(kn),Gt(kn,t)):$t(ri),Gt(ri,n)}var dr=null,Eu=!1,hd=!1;function Wx(t){dr===null?dr=[t]:dr.push(t)}function VS(t){Eu=!0,Wx(t)}function rs(){if(!hd&&dr!==null){hd=!0;var t=0,e=Dt;try{var n=dr;for(Dt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}dr=null,Eu=!1}catch(r){throw dr!==null&&(dr=dr.slice(t+1)),mx(Nf,rs),r}finally{Dt=e,hd=!1}}return null}var _o=[],yo=0,qc=null,Zc=0,_i=[],yi=0,As=null,hr=1,fr="";function hs(t,e){_o[yo++]=Zc,_o[yo++]=qc,qc=t,Zc=e}function jx(t,e,n){_i[yi++]=hr,_i[yi++]=fr,_i[yi++]=As,As=t;var i=hr;t=fr;var r=32-Fi(i)-1;i&=~(1<<r),n+=1;var s=32-Fi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,hr=1<<32-Fi(e)+r|n<<r|i,fr=s+t}else hr=1<<s|n<<r|i,fr=t}function Hf(t){t.return!==null&&(hs(t,1),jx(t,1,0))}function Vf(t){for(;t===qc;)qc=_o[--yo],_o[yo]=null,Zc=_o[--yo],_o[yo]=null;for(;t===As;)As=_i[--yi],_i[yi]=null,fr=_i[--yi],_i[yi]=null,hr=_i[--yi],_i[yi]=null}var fi=null,hi=null,Zt=!1,Ui=null;function Xx(t,e){var n=wi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fi=t,hi=Wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fi=t,hi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=As!==null?{id:hr,overflow:fr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fi=t,hi=null,!0):!1;default:return!1}}function Bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hh(t){if(Zt){var e=hi;if(e){var n=e;if(!Sm(t,e)){if(Bh(t))throw Error(Me(418));e=Wr(n.nextSibling);var i=fi;e&&Sm(t,e)?Xx(i,n):(t.flags=t.flags&-4097|2,Zt=!1,fi=t)}}else{if(Bh(t))throw Error(Me(418));t.flags=t.flags&-4097|2,Zt=!1,fi=t}}}function Mm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fi=t}function Bl(t){if(t!==fi)return!1;if(!Zt)return Mm(t),Zt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oh(t.type,t.memoizedProps)),e&&(e=hi)){if(Bh(t))throw $x(),Error(Me(418));for(;e;)Xx(t,e),e=Wr(e.nextSibling)}if(Mm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Me(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hi=Wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hi=null}}else hi=fi?Wr(t.stateNode.nextSibling):null;return!0}function $x(){for(var t=hi;t;)t=Wr(t.nextSibling)}function Fo(){hi=fi=null,Zt=!1}function Gf(t){Ui===null?Ui=[t]:Ui.push(t)}var GS=Mr.ReactCurrentBatchConfig;function ua(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Me(309));var i=n.stateNode}if(!i)throw Error(Me(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Me(284));if(!n._owner)throw Error(Me(290,t))}return t}function Hl(t,e){throw t=Object.prototype.toString.call(e),Error(Me(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wm(t){var e=t._init;return e(t._payload)}function Yx(t){function e(d,m){if(t){var v=d.deletions;v===null?(d.deletions=[m],d.flags|=16):v.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=Yr(d,m),d.index=0,d.sibling=null,d}function s(d,m,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<m?(d.flags|=2,m):v):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,m,v,M){return m===null||m.tag!==6?(m=_d(v,d.mode,M),m.return=d,m):(m=r(m,v),m.return=d,m)}function l(d,m,v,M){var N=v.type;return N===fo?u(d,m,v.props.children,M,v.key):m!==null&&(m.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Nr&&wm(N)===m.type)?(M=r(m,v.props),M.ref=ua(d,m,v),M.return=d,M):(M=Dc(v.type,v.key,v.props,null,d.mode,M),M.ref=ua(d,m,v),M.return=d,M)}function c(d,m,v,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=yd(v,d.mode,M),m.return=d,m):(m=r(m,v.children||[]),m.return=d,m)}function u(d,m,v,M,N){return m===null||m.tag!==7?(m=Ms(v,d.mode,M,N),m.return=d,m):(m=r(m,v),m.return=d,m)}function h(d,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=_d(""+m,d.mode,v),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Pl:return v=Dc(m.type,m.key,m.props,null,d.mode,v),v.ref=ua(d,null,m),v.return=d,v;case ho:return m=yd(m,d.mode,v),m.return=d,m;case Nr:var M=m._init;return h(d,M(m._payload),v)}if(ba(m)||sa(m))return m=Ms(m,d.mode,v,null),m.return=d,m;Hl(d,m)}return null}function f(d,m,v,M){var N=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:a(d,m,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pl:return v.key===N?l(d,m,v,M):null;case ho:return v.key===N?c(d,m,v,M):null;case Nr:return N=v._init,f(d,m,N(v._payload),M)}if(ba(v)||sa(v))return N!==null?null:u(d,m,v,M,null);Hl(d,v)}return null}function p(d,m,v,M,N){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(v)||null,a(m,d,""+M,N);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Pl:return d=d.get(M.key===null?v:M.key)||null,l(m,d,M,N);case ho:return d=d.get(M.key===null?v:M.key)||null,c(m,d,M,N);case Nr:var A=M._init;return p(d,m,v,A(M._payload),N)}if(ba(M)||sa(M))return d=d.get(v)||null,u(m,d,M,N,null);Hl(m,M)}return null}function x(d,m,v,M){for(var N=null,A=null,R=m,k=m=0,b=null;R!==null&&k<v.length;k++){R.index>k?(b=R,R=null):b=R.sibling;var T=f(d,R,v[k],M);if(T===null){R===null&&(R=b);break}t&&R&&T.alternate===null&&e(d,R),m=s(T,m,k),A===null?N=T:A.sibling=T,A=T,R=b}if(k===v.length)return n(d,R),Zt&&hs(d,k),N;if(R===null){for(;k<v.length;k++)R=h(d,v[k],M),R!==null&&(m=s(R,m,k),A===null?N=R:A.sibling=R,A=R);return Zt&&hs(d,k),N}for(R=i(d,R);k<v.length;k++)b=p(R,d,k,v[k],M),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?k:b.key),m=s(b,m,k),A===null?N=b:A.sibling=b,A=b);return t&&R.forEach(function(V){return e(d,V)}),Zt&&hs(d,k),N}function S(d,m,v,M){var N=sa(v);if(typeof N!="function")throw Error(Me(150));if(v=N.call(v),v==null)throw Error(Me(151));for(var A=N=null,R=m,k=m=0,b=null,T=v.next();R!==null&&!T.done;k++,T=v.next()){R.index>k?(b=R,R=null):b=R.sibling;var V=f(d,R,T.value,M);if(V===null){R===null&&(R=b);break}t&&R&&V.alternate===null&&e(d,R),m=s(V,m,k),A===null?N=V:A.sibling=V,A=V,R=b}if(T.done)return n(d,R),Zt&&hs(d,k),N;if(R===null){for(;!T.done;k++,T=v.next())T=h(d,T.value,M),T!==null&&(m=s(T,m,k),A===null?N=T:A.sibling=T,A=T);return Zt&&hs(d,k),N}for(R=i(d,R);!T.done;k++,T=v.next())T=p(R,d,k,T.value,M),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?k:T.key),m=s(T,m,k),A===null?N=T:A.sibling=T,A=T);return t&&R.forEach(function(X){return e(d,X)}),Zt&&hs(d,k),N}function g(d,m,v,M){if(typeof v=="object"&&v!==null&&v.type===fo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Pl:e:{for(var N=v.key,A=m;A!==null;){if(A.key===N){if(N=v.type,N===fo){if(A.tag===7){n(d,A.sibling),m=r(A,v.props.children),m.return=d,d=m;break e}}else if(A.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Nr&&wm(N)===A.type){n(d,A.sibling),m=r(A,v.props),m.ref=ua(d,A,v),m.return=d,d=m;break e}n(d,A);break}else e(d,A);A=A.sibling}v.type===fo?(m=Ms(v.props.children,d.mode,M,v.key),m.return=d,d=m):(M=Dc(v.type,v.key,v.props,null,d.mode,M),M.ref=ua(d,m,v),M.return=d,d=M)}return o(d);case ho:e:{for(A=v.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(d,m.sibling),m=r(m,v.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=yd(v,d.mode,M),m.return=d,d=m}return o(d);case Nr:return A=v._init,g(d,m,A(v._payload),M)}if(ba(v))return x(d,m,v,M);if(sa(v))return S(d,m,v,M);Hl(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,v),m.return=d,d=m):(n(d,m),m=_d(v,d.mode,M),m.return=d,d=m),o(d)):n(d,m)}return g}var ko=Yx(!0),qx=Yx(!1),Kc=is(null),Jc=null,So=null,Wf=null;function jf(){Wf=So=Jc=null}function Xf(t){var e=Kc.current;$t(Kc),t._currentValue=e}function Vh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Lo(t,e){Jc=t,Wf=So=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ii=!0),t.firstContext=null)}function Ti(t){var e=t._currentValue;if(Wf!==t)if(t={context:t,memoizedValue:e,next:null},So===null){if(Jc===null)throw Error(Me(308));So=t,Jc.dependencies={lanes:0,firstContext:t}}else So=So.next=t;return e}var _s=null;function $f(t){_s===null?_s=[t]:_s.push(t)}function Zx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,$f(e)):(n.next=r.next,r.next=n),e.interleaved=n,_r(t,i)}function _r(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ir=!1;function Yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_r(t,n)}return r=i.interleaved,r===null?(e.next=e,$f(i)):(e.next=r.next,r.next=e),i.interleaved=e,_r(t,n)}function Cc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,If(t,n)}}function Em(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qc(t,e,n,i){var r=t.updateQueue;Ir=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,S=a;switch(f=e,p=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){h=x.call(p,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,f=typeof x=="function"?x.call(p,h,f):x,f==null)break e;h=sn({},h,f);break e;case 2:Ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Rs|=o,t.lanes=o,t.memoizedState=h}}function bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Me(191,r));r.call(i)}}}var _l={},er=is(_l),nl=is(_l),il=is(_l);function ys(t){if(t===_l)throw Error(Me(174));return t}function qf(t,e){switch(Gt(il,e),Gt(nl,t),Gt(er,_l),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mh(e,t)}$t(er),Gt(er,e)}function zo(){$t(er),$t(nl),$t(il)}function Jx(t){ys(il.current);var e=ys(er.current),n=Mh(e,t.type);e!==n&&(Gt(nl,t),Gt(er,n))}function Zf(t){nl.current===t&&($t(er),$t(nl))}var en=is(0);function eu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fd=[];function Kf(){for(var t=0;t<fd.length;t++)fd[t]._workInProgressVersionPrimary=null;fd.length=0}var Rc=Mr.ReactCurrentDispatcher,pd=Mr.ReactCurrentBatchConfig,Cs=0,nn=null,gn=null,En=null,tu=!1,Ia=!1,rl=0,WS=0;function Nn(){throw Error(Me(321))}function Jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zi(t[n],e[n]))return!1;return!0}function Qf(t,e,n,i,r,s){if(Cs=s,nn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rc.current=t===null||t.memoizedState===null?YS:qS,t=n(i,r),Ia){s=0;do{if(Ia=!1,rl=0,25<=s)throw Error(Me(301));s+=1,En=gn=null,e.updateQueue=null,Rc.current=ZS,t=n(i,r)}while(Ia)}if(Rc.current=nu,e=gn!==null&&gn.next!==null,Cs=0,En=gn=nn=null,tu=!1,e)throw Error(Me(300));return t}function ep(){var t=rl!==0;return rl=0,t}function $i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?nn.memoizedState=En=t:En=En.next=t,En}function Ai(){if(gn===null){var t=nn.alternate;t=t!==null?t.memoizedState:null}else t=gn.next;var e=En===null?nn.memoizedState:En.next;if(e!==null)En=e,gn=t;else{if(t===null)throw Error(Me(310));gn=t,t={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},En===null?nn.memoizedState=En=t:En=En.next=t}return En}function sl(t,e){return typeof e=="function"?e(t):e}function md(t){var e=Ai(),n=e.queue;if(n===null)throw Error(Me(311));n.lastRenderedReducer=t;var i=gn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Cs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,nn.lanes|=u,Rs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,zi(i,e.memoizedState)||(ii=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,nn.lanes|=s,Rs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gd(t){var e=Ai(),n=e.queue;if(n===null)throw Error(Me(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);zi(s,e.memoizedState)||(ii=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Qx(){}function ev(t,e){var n=nn,i=Ai(),r=e(),s=!zi(i.memoizedState,r);if(s&&(i.memoizedState=r,ii=!0),i=i.queue,tp(iv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||En!==null&&En.memoizedState.tag&1){if(n.flags|=2048,ol(9,nv.bind(null,n,i,r,e),void 0,null),bn===null)throw Error(Me(349));Cs&30||tv(n,e,r)}return r}function tv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=nn.updateQueue,e===null?(e={lastEffect:null,stores:null},nn.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nv(t,e,n,i){e.value=n,e.getSnapshot=i,rv(e)&&sv(t)}function iv(t,e,n){return n(function(){rv(e)&&sv(t)})}function rv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zi(t,n)}catch{return!0}}function sv(t){var e=_r(t,1);e!==null&&ki(e,t,1,-1)}function Tm(t){var e=$i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:t},e.queue=t,t=t.dispatch=$S.bind(null,nn,t),[e.memoizedState,t]}function ol(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=nn.updateQueue,e===null?(e={lastEffect:null,stores:null},nn.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ov(){return Ai().memoizedState}function Pc(t,e,n,i){var r=$i();nn.flags|=t,r.memoizedState=ol(1|e,n,void 0,i===void 0?null:i)}function bu(t,e,n,i){var r=Ai();i=i===void 0?null:i;var s=void 0;if(gn!==null){var o=gn.memoizedState;if(s=o.destroy,i!==null&&Jf(i,o.deps)){r.memoizedState=ol(e,n,s,i);return}}nn.flags|=t,r.memoizedState=ol(1|e,n,s,i)}function Am(t,e){return Pc(8390656,8,t,e)}function tp(t,e){return bu(2048,8,t,e)}function av(t,e){return bu(4,2,t,e)}function lv(t,e){return bu(4,4,t,e)}function cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uv(t,e,n){return n=n!=null?n.concat([t]):null,bu(4,4,cv.bind(null,e,t),n)}function np(){}function dv(t,e){var n=Ai();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function hv(t,e){var n=Ai();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function fv(t,e,n){return Cs&21?(zi(n,e)||(n=vx(),nn.lanes|=n,Rs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ii=!0),t.memoizedState=n)}function jS(t,e){var n=Dt;Dt=n!==0&&4>n?n:4,t(!0);var i=pd.transition;pd.transition={};try{t(!1),e()}finally{Dt=n,pd.transition=i}}function pv(){return Ai().memoizedState}function XS(t,e,n){var i=$r(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},mv(t))gv(e,n);else if(n=Zx(t,e,n,i),n!==null){var r=$n();ki(n,t,i,r),xv(n,e,i)}}function $S(t,e,n){var i=$r(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(mv(t))gv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,zi(a,o)){var l=e.interleaved;l===null?(r.next=r,$f(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Zx(t,e,r,i),n!==null&&(r=$n(),ki(n,t,i,r),xv(n,e,i))}}function mv(t){var e=t.alternate;return t===nn||e!==null&&e===nn}function gv(t,e){Ia=tu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,If(t,n)}}var nu={readContext:Ti,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useInsertionEffect:Nn,useLayoutEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useMutableSource:Nn,useSyncExternalStore:Nn,useId:Nn,unstable_isNewReconciler:!1},YS={readContext:Ti,useCallback:function(t,e){return $i().memoizedState=[t,e===void 0?null:e],t},useContext:Ti,useEffect:Am,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pc(4194308,4,cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pc(4,2,t,e)},useMemo:function(t,e){var n=$i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=$i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=XS.bind(null,nn,t),[i.memoizedState,t]},useRef:function(t){var e=$i();return t={current:t},e.memoizedState=t},useState:Tm,useDebugValue:np,useDeferredValue:function(t){return $i().memoizedState=t},useTransition:function(){var t=Tm(!1),e=t[0];return t=jS.bind(null,t[1]),$i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=nn,r=$i();if(Zt){if(n===void 0)throw Error(Me(407));n=n()}else{if(n=e(),bn===null)throw Error(Me(349));Cs&30||tv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Am(iv.bind(null,i,s,t),[t]),i.flags|=2048,ol(9,nv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=$i(),e=bn.identifierPrefix;if(Zt){var n=fr,i=hr;n=(i&~(1<<32-Fi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=rl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=WS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},qS={readContext:Ti,useCallback:dv,useContext:Ti,useEffect:tp,useImperativeHandle:uv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:hv,useReducer:md,useRef:ov,useState:function(){return md(sl)},useDebugValue:np,useDeferredValue:function(t){var e=Ai();return fv(e,gn.memoizedState,t)},useTransition:function(){var t=md(sl)[0],e=Ai().memoizedState;return[t,e]},useMutableSource:Qx,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1},ZS={readContext:Ti,useCallback:dv,useContext:Ti,useEffect:tp,useImperativeHandle:uv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:hv,useReducer:gd,useRef:ov,useState:function(){return gd(sl)},useDebugValue:np,useDeferredValue:function(t){var e=Ai();return gn===null?e.memoizedState=t:fv(e,gn.memoizedState,t)},useTransition:function(){var t=gd(sl)[0],e=Ai().memoizedState;return[t,e]},useMutableSource:Qx,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1};function Ii(t,e){if(t&&t.defaultProps){e=sn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:sn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?Os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$n(),r=$r(t),s=gr(i,r);s.payload=e,n!=null&&(s.callback=n),e=jr(t,s,r),e!==null&&(ki(e,t,r,i),Cc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$n(),r=$r(t),s=gr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=jr(t,s,r),e!==null&&(ki(e,t,r,i),Cc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$n(),i=$r(t),r=gr(n,i);r.tag=2,e!=null&&(r.callback=e),e=jr(t,r,i),e!==null&&(ki(e,t,i,n),Cc(e,t,i))}};function Cm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ja(n,i)||!Ja(r,s):!0}function vv(t,e,n){var i=!1,r=es,s=e.contextType;return typeof s=="object"&&s!==null?s=Ti(s):(r=si(e)?Ts:kn.current,i=e.contextTypes,s=(i=i!=null)?Oo(t,r):es),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function Wh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Yf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ti(s):(s=si(e)?Ts:kn.current,r.context=Oo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tu.enqueueReplaceState(r,r.state,null),Qc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bo(t,e){try{var n="",i=e;do n+=Ey(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function xd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var KS=typeof WeakMap=="function"?WeakMap:Map;function _v(t,e,n){n=gr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ru||(ru=!0,tf=i),jh(t,e)},n}function yv(t,e,n){n=gr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){jh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jh(t,e),typeof i!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new KS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=dM.bind(null,t,e,n),e.then(t,t))}function Lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gr(-1,1),e.tag=2,jr(n,e,1))),n.lanes|=1),t)}var JS=Mr.ReactCurrentOwner,ii=!1;function Gn(t,e,n,i){e.child=t===null?qx(e,null,n,i):ko(e,t.child,n,i)}function Im(t,e,n,i,r){n=n.render;var s=e.ref;return Lo(e,r),i=Qf(t,e,n,i,s,r),n=ep(),t!==null&&!ii?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yr(t,e,r)):(Zt&&n&&Hf(e),e.flags|=1,Gn(t,e,i,r),e.child)}function Dm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!up(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Sv(t,e,s,i,r)):(t=Dc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ja,n(o,i)&&t.ref===e.ref)return yr(t,e,r)}return e.flags|=1,t=Yr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Sv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ja(s,i)&&t.ref===e.ref)if(ii=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ii=!0);else return e.lanes=t.lanes,yr(t,e,r)}return Xh(t,e,n,i,r)}function Mv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(wo,ui),ui|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Gt(wo,ui),ui|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Gt(wo,ui),ui|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Gt(wo,ui),ui|=i;return Gn(t,e,r,n),e.child}function wv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xh(t,e,n,i,r){var s=si(n)?Ts:kn.current;return s=Oo(e,s),Lo(e,r),n=Qf(t,e,n,i,s,r),i=ep(),t!==null&&!ii?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yr(t,e,r)):(Zt&&i&&Hf(e),e.flags|=1,Gn(t,e,n,r),e.child)}function Um(t,e,n,i,r){if(si(n)){var s=!0;Yc(e)}else s=!1;if(Lo(e,r),e.stateNode===null)Lc(t,e),vv(e,n,i),Wh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ti(c):(c=si(n)?Ts:kn.current,c=Oo(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Rm(e,o,i,c),Ir=!1;var f=e.memoizedState;o.state=f,Qc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||ri.current||Ir?(typeof u=="function"&&(Gh(e,n,u,i),l=e.memoizedState),(a=Ir||Cm(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Kx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ii(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ti(l):(l=si(n)?Ts:kn.current,l=Oo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Rm(e,o,i,l),Ir=!1,f=e.memoizedState,o.state=f,Qc(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||ri.current||Ir?(typeof p=="function"&&(Gh(e,n,p,i),x=e.memoizedState),(c=Ir||Cm(e,n,c,i,f,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return $h(t,e,n,i,s,r)}function $h(t,e,n,i,r,s){wv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ym(e,n,!1),yr(t,e,s);i=e.stateNode,JS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ko(e,t.child,null,s),e.child=ko(e,null,a,s)):Gn(t,e,a,s),e.memoizedState=i.state,r&&ym(e,n,!0),e.child}function Ev(t){var e=t.stateNode;e.pendingContext?_m(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_m(t,e.context,!1),qf(t,e.containerInfo)}function Om(t,e,n,i,r){return Fo(),Gf(r),e.flags|=256,Gn(t,e,n,i),e.child}var Yh={dehydrated:null,treeContext:null,retryLane:0};function qh(t){return{baseLanes:t,cachePool:null,transitions:null}}function bv(t,e,n){var i=e.pendingProps,r=en.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Gt(en,r&1),t===null)return Hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ru(o,i,0,null),t=Ms(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qh(n),e.memoizedState=Yh,t):ip(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return QS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Yr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Yr(a,s):(s=Ms(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?qh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yh,i}return s=t.child,t=s.sibling,i=Yr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ip(t,e){return e=Ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vl(t,e,n,i){return i!==null&&Gf(i),ko(e,t.child,null,n),t=ip(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function QS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=xd(Error(Me(422))),Vl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ru({mode:"visible",children:i.children},r,0,null),s=Ms(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ko(e,t.child,null,o),e.child.memoizedState=qh(o),e.memoizedState=Yh,s);if(!(e.mode&1))return Vl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Me(419)),i=xd(s,i,void 0),Vl(t,e,o,i)}if(a=(o&t.childLanes)!==0,ii||a){if(i=bn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_r(t,r),ki(i,t,r,-1))}return cp(),i=xd(Error(Me(421))),Vl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=hM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hi=Wr(r.nextSibling),fi=e,Zt=!0,Ui=null,t!==null&&(_i[yi++]=hr,_i[yi++]=fr,_i[yi++]=As,hr=t.id,fr=t.overflow,As=e),e=ip(e,i.children),e.flags|=4096,e)}function Fm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vh(t.return,e,n)}function vd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Tv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gn(t,e,i.children,n),i=en.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fm(t,n,e);else if(t.tag===19)Fm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Gt(en,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&eu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&eu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vd(e,!0,n,null,s);break;case"together":vd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Me(153));if(e.child!==null){for(t=e.child,n=Yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eM(t,e,n){switch(e.tag){case 3:Ev(e),Fo();break;case 5:Jx(e);break;case 1:si(e.type)&&Yc(e);break;case 4:qf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Gt(Kc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Gt(en,en.current&1),e.flags|=128,null):n&e.child.childLanes?bv(t,e,n):(Gt(en,en.current&1),t=yr(t,e,n),t!==null?t.sibling:null);Gt(en,en.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Tv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Gt(en,en.current),i)break;return null;case 22:case 23:return e.lanes=0,Mv(t,e,n)}return yr(t,e,n)}var Av,Zh,Cv,Rv;Av=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zh=function(){};Cv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ys(er.current);var s=null;switch(n){case"input":r=vh(t,r),i=vh(t,i),s=[];break;case"select":r=sn({},r,{value:void 0}),i=sn({},i,{value:void 0}),s=[];break;case"textarea":r=Sh(t,r),i=Sh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Xc)}wh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ja.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ja.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&jt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Rv=function(t,e,n,i){n!==i&&(e.flags|=4)};function da(t,e){if(!Zt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function In(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function tM(t,e,n){var i=e.pendingProps;switch(Vf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(e),null;case 1:return si(e.type)&&$c(),In(e),null;case 3:return i=e.stateNode,zo(),$t(ri),$t(kn),Kf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Bl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ui!==null&&(sf(Ui),Ui=null))),Zh(t,e),In(e),null;case 5:Zf(e);var r=ys(il.current);if(n=e.type,t!==null&&e.stateNode!=null)Cv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Me(166));return In(e),null}if(t=ys(er.current),Bl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zi]=e,i[tl]=s,t=(e.mode&1)!==0,n){case"dialog":jt("cancel",i),jt("close",i);break;case"iframe":case"object":case"embed":jt("load",i);break;case"video":case"audio":for(r=0;r<Aa.length;r++)jt(Aa[r],i);break;case"source":jt("error",i);break;case"img":case"image":case"link":jt("error",i),jt("load",i);break;case"details":jt("toggle",i);break;case"input":Xp(i,s),jt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},jt("invalid",i);break;case"textarea":Yp(i,s),jt("invalid",i)}wh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&zl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zl(i.textContent,a,t),r=["children",""+a]):ja.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&jt("scroll",i)}switch(n){case"input":Ll(i),$p(i,s,!0);break;case"textarea":Ll(i),qp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Xc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ix(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Zi]=e,t[tl]=i,Av(t,e,!1,!1),e.stateNode=t;e:{switch(o=Eh(n,i),n){case"dialog":jt("cancel",t),jt("close",t),r=i;break;case"iframe":case"object":case"embed":jt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Aa.length;r++)jt(Aa[r],t);r=i;break;case"source":jt("error",t),r=i;break;case"img":case"image":case"link":jt("error",t),jt("load",t),r=i;break;case"details":jt("toggle",t),r=i;break;case"input":Xp(t,i),r=vh(t,i),jt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=sn({},i,{value:void 0}),jt("invalid",t);break;case"textarea":Yp(t,i),r=Sh(t,i),jt("invalid",t);break;default:r=i}wh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ox(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xa(t,l):typeof l=="number"&&Xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ja.hasOwnProperty(s)?l!=null&&s==="onScroll"&&jt("scroll",t):l!=null&&Af(t,s,l,o))}switch(n){case"input":Ll(t),$p(t,i,!1);break;case"textarea":Ll(t),qp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Qr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ao(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ao(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Xc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return In(e),null;case 6:if(t&&e.stateNode!=null)Rv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Me(166));if(n=ys(il.current),ys(er.current),Bl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zi]=e,(s=i.nodeValue!==n)&&(t=fi,t!==null))switch(t.tag){case 3:zl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zi]=e,e.stateNode=i}return In(e),null;case 13:if($t(en),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Zt&&hi!==null&&e.mode&1&&!(e.flags&128))$x(),Fo(),e.flags|=98560,s=!1;else if(s=Bl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Me(317));s[Zi]=e}else Fo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;In(e),s=!1}else Ui!==null&&(sf(Ui),Ui=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||en.current&1?xn===0&&(xn=3):cp())),e.updateQueue!==null&&(e.flags|=4),In(e),null);case 4:return zo(),Zh(t,e),t===null&&Qa(e.stateNode.containerInfo),In(e),null;case 10:return Xf(e.type._context),In(e),null;case 17:return si(e.type)&&$c(),In(e),null;case 19:if($t(en),s=e.memoizedState,s===null)return In(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)da(s,!1);else{if(xn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=eu(t),o!==null){for(e.flags|=128,da(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Gt(en,en.current&1|2),e.child}t=t.sibling}s.tail!==null&&cn()>Ho&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304)}else{if(!i)if(t=eu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),da(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Zt)return In(e),null}else 2*cn()-s.renderingStartTime>Ho&&n!==1073741824&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=cn(),e.sibling=null,n=en.current,Gt(en,i?n&1|2:n&1),e):(In(e),null);case 22:case 23:return lp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ui&1073741824&&(In(e),e.subtreeFlags&6&&(e.flags|=8192)):In(e),null;case 24:return null;case 25:return null}throw Error(Me(156,e.tag))}function nM(t,e){switch(Vf(e),e.tag){case 1:return si(e.type)&&$c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zo(),$t(ri),$t(kn),Kf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zf(e),null;case 13:if($t(en),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Me(340));Fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $t(en),null;case 4:return zo(),null;case 10:return Xf(e.type._context),null;case 22:case 23:return lp(),null;case 24:return null;default:return null}}var Gl=!1,Fn=!1,iM=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Mo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){on(t,e,i)}else n.current=null}function Kh(t,e,n){try{n()}catch(i){on(t,e,i)}}var km=!1;function rM(t,e){if(Dh=Gc,t=Dx(),Bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uh={focusedElem:t,selectionRange:n},Gc=!1,Ge=e;Ge!==null;)if(e=Ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ge=t;else for(;Ge!==null;){e=Ge;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,g=x.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:Ii(e.type,S),g);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Me(163))}}catch(M){on(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ge=t;break}Ge=e.return}return x=km,km=!1,x}function Da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Kh(e,n,s)}r=r.next}while(r!==i)}}function Au(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Jh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pv(t){var e=t.alternate;e!==null&&(t.alternate=null,Pv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zi],delete e[tl],delete e[kh],delete e[BS],delete e[HS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Lv(t){return t.tag===5||t.tag===3||t.tag===4}function zm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xc));else if(i!==4&&(t=t.child,t!==null))for(Qh(t,e,n),t=t.sibling;t!==null;)Qh(t,e,n),t=t.sibling}function ef(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ef(t,e,n),t=t.sibling;t!==null;)ef(t,e,n),t=t.sibling}var Cn=null,Di=!1;function Tr(t,e,n){for(n=n.child;n!==null;)Nv(t,e,n),n=n.sibling}function Nv(t,e,n){if(Qi&&typeof Qi.onCommitFiberUnmount=="function")try{Qi.onCommitFiberUnmount(_u,n)}catch{}switch(n.tag){case 5:Fn||Mo(n,e);case 6:var i=Cn,r=Di;Cn=null,Tr(t,e,n),Cn=i,Di=r,Cn!==null&&(Di?(t=Cn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Cn.removeChild(n.stateNode));break;case 18:Cn!==null&&(Di?(t=Cn,n=n.stateNode,t.nodeType===8?dd(t.parentNode,n):t.nodeType===1&&dd(t,n),Za(t)):dd(Cn,n.stateNode));break;case 4:i=Cn,r=Di,Cn=n.stateNode.containerInfo,Di=!0,Tr(t,e,n),Cn=i,Di=r;break;case 0:case 11:case 14:case 15:if(!Fn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kh(n,e,o),r=r.next}while(r!==i)}Tr(t,e,n);break;case 1:if(!Fn&&(Mo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){on(n,e,a)}Tr(t,e,n);break;case 21:Tr(t,e,n);break;case 22:n.mode&1?(Fn=(i=Fn)||n.memoizedState!==null,Tr(t,e,n),Fn=i):Tr(t,e,n);break;default:Tr(t,e,n)}}function Bm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iM),e.forEach(function(i){var r=fM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ri(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Cn=a.stateNode,Di=!1;break e;case 3:Cn=a.stateNode.containerInfo,Di=!0;break e;case 4:Cn=a.stateNode.containerInfo,Di=!0;break e}a=a.return}if(Cn===null)throw Error(Me(160));Nv(s,o,r),Cn=null,Di=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){on(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Iv(e,t),e=e.sibling}function Iv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ri(e,t),Xi(t),i&4){try{Da(3,t,t.return),Au(3,t)}catch(S){on(t,t.return,S)}try{Da(5,t,t.return)}catch(S){on(t,t.return,S)}}break;case 1:Ri(e,t),Xi(t),i&512&&n!==null&&Mo(n,n.return);break;case 5:if(Ri(e,t),Xi(t),i&512&&n!==null&&Mo(n,n.return),t.flags&32){var r=t.stateNode;try{Xa(r,"")}catch(S){on(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tx(r,s),Eh(a,o);var c=Eh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?ox(r,h):u==="dangerouslySetInnerHTML"?rx(r,h):u==="children"?Xa(r,h):Af(r,u,h,c)}switch(a){case"input":_h(r,s);break;case"textarea":nx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ao(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ao(r,!!s.multiple,s.defaultValue,!0):Ao(r,!!s.multiple,s.multiple?[]:"",!1))}r[tl]=s}catch(S){on(t,t.return,S)}}break;case 6:if(Ri(e,t),Xi(t),i&4){if(t.stateNode===null)throw Error(Me(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){on(t,t.return,S)}}break;case 3:if(Ri(e,t),Xi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Za(e.containerInfo)}catch(S){on(t,t.return,S)}break;case 4:Ri(e,t),Xi(t);break;case 13:Ri(e,t),Xi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(op=cn())),i&4&&Bm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Fn=(c=Fn)||u,Ri(e,t),Fn=c):Ri(e,t),Xi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ge=t,u=t.child;u!==null;){for(h=Ge=u;Ge!==null;){switch(f=Ge,p=f.child,f.tag){case 0:case 11:case 14:case 15:Da(4,f,f.return);break;case 1:Mo(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){on(i,n,S)}}break;case 5:Mo(f,f.return);break;case 22:if(f.memoizedState!==null){Vm(h);continue}}p!==null?(p.return=f,Ge=p):Vm(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sx("display",o))}catch(S){on(t,t.return,S)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){on(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ri(e,t),Xi(t),i&4&&Bm(t);break;case 21:break;default:Ri(e,t),Xi(t)}}function Xi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Lv(n)){var i=n;break e}n=n.return}throw Error(Me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xa(r,""),i.flags&=-33);var s=zm(t);ef(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=zm(t);Qh(t,a,o);break;default:throw Error(Me(161))}}catch(l){on(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sM(t,e,n){Ge=t,Dv(t)}function Dv(t,e,n){for(var i=(t.mode&1)!==0;Ge!==null;){var r=Ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Gl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Fn;a=Gl;var c=Fn;if(Gl=o,(Fn=l)&&!c)for(Ge=r;Ge!==null;)o=Ge,l=o.child,o.tag===22&&o.memoizedState!==null?Gm(r):l!==null?(l.return=o,Ge=l):Gm(r);for(;s!==null;)Ge=s,Dv(s),s=s.sibling;Ge=r,Gl=a,Fn=c}Hm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ge=s):Hm(t)}}function Hm(t){for(;Ge!==null;){var e=Ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Fn||Au(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Fn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Za(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Me(163))}Fn||e.flags&512&&Jh(e)}catch(f){on(e,e.return,f)}}if(e===t){Ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ge=n;break}Ge=e.return}}function Vm(t){for(;Ge!==null;){var e=Ge;if(e===t){Ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ge=n;break}Ge=e.return}}function Gm(t){for(;Ge!==null;){var e=Ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Au(4,e)}catch(l){on(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){on(e,r,l)}}var s=e.return;try{Jh(e)}catch(l){on(e,s,l)}break;case 5:var o=e.return;try{Jh(e)}catch(l){on(e,o,l)}}}catch(l){on(e,e.return,l)}if(e===t){Ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ge=a;break}Ge=e.return}}var oM=Math.ceil,iu=Mr.ReactCurrentDispatcher,rp=Mr.ReactCurrentOwner,Ei=Mr.ReactCurrentBatchConfig,Lt=0,bn=null,mn=null,Pn=0,ui=0,wo=is(0),xn=0,al=null,Rs=0,Cu=0,sp=0,Ua=null,ti=null,op=0,Ho=1/0,ur=null,ru=!1,tf=null,Xr=null,Wl=!1,kr=null,su=0,Oa=0,nf=null,Nc=-1,Ic=0;function $n(){return Lt&6?cn():Nc!==-1?Nc:Nc=cn()}function $r(t){return t.mode&1?Lt&2&&Pn!==0?Pn&-Pn:GS.transition!==null?(Ic===0&&(Ic=vx()),Ic):(t=Dt,t!==0||(t=window.event,t=t===void 0?16:bx(t.type)),t):1}function ki(t,e,n,i){if(50<Oa)throw Oa=0,nf=null,Error(Me(185));gl(t,n,i),(!(Lt&2)||t!==bn)&&(t===bn&&(!(Lt&2)&&(Cu|=n),xn===4&&Ur(t,Pn)),oi(t,i),n===1&&Lt===0&&!(e.mode&1)&&(Ho=cn()+500,Eu&&rs()))}function oi(t,e){var n=t.callbackNode;Gy(t,e);var i=Vc(t,t===bn?Pn:0);if(i===0)n!==null&&Jp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Jp(n),e===1)t.tag===0?VS(Wm.bind(null,t)):Wx(Wm.bind(null,t)),kS(function(){!(Lt&6)&&rs()}),n=null;else{switch(_x(i)){case 1:n=Nf;break;case 4:n=gx;break;case 16:n=Hc;break;case 536870912:n=xx;break;default:n=Hc}n=Vv(n,Uv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Uv(t,e){if(Nc=-1,Ic=0,Lt&6)throw Error(Me(327));var n=t.callbackNode;if(No()&&t.callbackNode!==n)return null;var i=Vc(t,t===bn?Pn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ou(t,i);else{e=i;var r=Lt;Lt|=2;var s=Fv();(bn!==t||Pn!==e)&&(ur=null,Ho=cn()+500,Ss(t,e));do try{cM();break}catch(a){Ov(t,a)}while(!0);jf(),iu.current=s,Lt=r,mn!==null?e=0:(bn=null,Pn=0,e=xn)}if(e!==0){if(e===2&&(r=Rh(t),r!==0&&(i=r,e=rf(t,r))),e===1)throw n=al,Ss(t,0),Ur(t,i),oi(t,cn()),n;if(e===6)Ur(t,i);else{if(r=t.current.alternate,!(i&30)&&!aM(r)&&(e=ou(t,i),e===2&&(s=Rh(t),s!==0&&(i=s,e=rf(t,s))),e===1))throw n=al,Ss(t,0),Ur(t,i),oi(t,cn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Me(345));case 2:fs(t,ti,ur);break;case 3:if(Ur(t,i),(i&130023424)===i&&(e=op+500-cn(),10<e)){if(Vc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$n(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Fh(fs.bind(null,t,ti,ur),e);break}fs(t,ti,ur);break;case 4:if(Ur(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Fi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=cn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*oM(i/1960))-i,10<i){t.timeoutHandle=Fh(fs.bind(null,t,ti,ur),i);break}fs(t,ti,ur);break;case 5:fs(t,ti,ur);break;default:throw Error(Me(329))}}}return oi(t,cn()),t.callbackNode===n?Uv.bind(null,t):null}function rf(t,e){var n=Ua;return t.current.memoizedState.isDehydrated&&(Ss(t,e).flags|=256),t=ou(t,e),t!==2&&(e=ti,ti=n,e!==null&&sf(e)),t}function sf(t){ti===null?ti=t:ti.push.apply(ti,t)}function aM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ur(t,e){for(e&=~sp,e&=~Cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fi(e),i=1<<n;t[n]=-1,e&=~i}}function Wm(t){if(Lt&6)throw Error(Me(327));No();var e=Vc(t,0);if(!(e&1))return oi(t,cn()),null;var n=ou(t,e);if(t.tag!==0&&n===2){var i=Rh(t);i!==0&&(e=i,n=rf(t,i))}if(n===1)throw n=al,Ss(t,0),Ur(t,e),oi(t,cn()),n;if(n===6)throw Error(Me(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fs(t,ti,ur),oi(t,cn()),null}function ap(t,e){var n=Lt;Lt|=1;try{return t(e)}finally{Lt=n,Lt===0&&(Ho=cn()+500,Eu&&rs())}}function Ps(t){kr!==null&&kr.tag===0&&!(Lt&6)&&No();var e=Lt;Lt|=1;var n=Ei.transition,i=Dt;try{if(Ei.transition=null,Dt=1,t)return t()}finally{Dt=i,Ei.transition=n,Lt=e,!(Lt&6)&&rs()}}function lp(){ui=wo.current,$t(wo)}function Ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,FS(n)),mn!==null)for(n=mn.return;n!==null;){var i=n;switch(Vf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$c();break;case 3:zo(),$t(ri),$t(kn),Kf();break;case 5:Zf(i);break;case 4:zo();break;case 13:$t(en);break;case 19:$t(en);break;case 10:Xf(i.type._context);break;case 22:case 23:lp()}n=n.return}if(bn=t,mn=t=Yr(t.current,null),Pn=ui=e,xn=0,al=null,sp=Cu=Rs=0,ti=Ua=null,_s!==null){for(e=0;e<_s.length;e++)if(n=_s[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}_s=null}return t}function Ov(t,e){do{var n=mn;try{if(jf(),Rc.current=nu,tu){for(var i=nn.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}tu=!1}if(Cs=0,En=gn=nn=null,Ia=!1,rl=0,rp.current=null,n===null||n.return===null){xn=1,al=e,mn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Lm(o);if(p!==null){p.flags&=-257,Nm(p,o,a,s,e),p.mode&1&&Pm(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var S=new Set;S.add(l),e.updateQueue=S}else x.add(l);break e}else{if(!(e&1)){Pm(s,c,e),cp();break e}l=Error(Me(426))}}else if(Zt&&a.mode&1){var g=Lm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Nm(g,o,a,s,e),Gf(Bo(l,a));break e}}s=l=Bo(l,a),xn!==4&&(xn=2),Ua===null?Ua=[s]:Ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=_v(s,l,e);Em(s,d);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Xr===null||!Xr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=yv(s,a,e);Em(s,M);break e}}s=s.return}while(s!==null)}zv(n)}catch(N){e=N,mn===n&&n!==null&&(mn=n=n.return);continue}break}while(!0)}function Fv(){var t=iu.current;return iu.current=nu,t===null?nu:t}function cp(){(xn===0||xn===3||xn===2)&&(xn=4),bn===null||!(Rs&268435455)&&!(Cu&268435455)||Ur(bn,Pn)}function ou(t,e){var n=Lt;Lt|=2;var i=Fv();(bn!==t||Pn!==e)&&(ur=null,Ss(t,e));do try{lM();break}catch(r){Ov(t,r)}while(!0);if(jf(),Lt=n,iu.current=i,mn!==null)throw Error(Me(261));return bn=null,Pn=0,xn}function lM(){for(;mn!==null;)kv(mn)}function cM(){for(;mn!==null&&!Dy();)kv(mn)}function kv(t){var e=Hv(t.alternate,t,ui);t.memoizedProps=t.pendingProps,e===null?zv(t):mn=e,rp.current=null}function zv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nM(n,e),n!==null){n.flags&=32767,mn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xn=6,mn=null;return}}else if(n=tM(n,e,ui),n!==null){mn=n;return}if(e=e.sibling,e!==null){mn=e;return}mn=e=t}while(e!==null);xn===0&&(xn=5)}function fs(t,e,n){var i=Dt,r=Ei.transition;try{Ei.transition=null,Dt=1,uM(t,e,n,i)}finally{Ei.transition=r,Dt=i}return null}function uM(t,e,n,i){do No();while(kr!==null);if(Lt&6)throw Error(Me(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Me(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Wy(t,s),t===bn&&(mn=bn=null,Pn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wl||(Wl=!0,Vv(Hc,function(){return No(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ei.transition,Ei.transition=null;var o=Dt;Dt=1;var a=Lt;Lt|=4,rp.current=null,rM(t,n),Iv(n,t),PS(Uh),Gc=!!Dh,Uh=Dh=null,t.current=n,sM(n),Uy(),Lt=a,Dt=o,Ei.transition=s}else t.current=n;if(Wl&&(Wl=!1,kr=t,su=r),s=t.pendingLanes,s===0&&(Xr=null),ky(n.stateNode),oi(t,cn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ru)throw ru=!1,t=tf,tf=null,t;return su&1&&t.tag!==0&&No(),s=t.pendingLanes,s&1?t===nf?Oa++:(Oa=0,nf=t):Oa=0,rs(),null}function No(){if(kr!==null){var t=_x(su),e=Ei.transition,n=Dt;try{if(Ei.transition=null,Dt=16>t?16:t,kr===null)var i=!1;else{if(t=kr,kr=null,su=0,Lt&6)throw Error(Me(331));var r=Lt;for(Lt|=4,Ge=t.current;Ge!==null;){var s=Ge,o=s.child;if(Ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ge=c;Ge!==null;){var u=Ge;switch(u.tag){case 0:case 11:case 15:Da(8,u,s)}var h=u.child;if(h!==null)h.return=u,Ge=h;else for(;Ge!==null;){u=Ge;var f=u.sibling,p=u.return;if(Pv(u),u===c){Ge=null;break}if(f!==null){f.return=p,Ge=f;break}Ge=p}}}var x=s.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}Ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ge=o;else e:for(;Ge!==null;){if(s=Ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ge=d;break e}Ge=s.return}}var m=t.current;for(Ge=m;Ge!==null;){o=Ge;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ge=v;else e:for(o=m;Ge!==null;){if(a=Ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Au(9,a)}}catch(N){on(a,a.return,N)}if(a===o){Ge=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ge=M;break e}Ge=a.return}}if(Lt=r,rs(),Qi&&typeof Qi.onPostCommitFiberRoot=="function")try{Qi.onPostCommitFiberRoot(_u,t)}catch{}i=!0}return i}finally{Dt=n,Ei.transition=e}}return!1}function jm(t,e,n){e=Bo(n,e),e=_v(t,e,1),t=jr(t,e,1),e=$n(),t!==null&&(gl(t,1,e),oi(t,e))}function on(t,e,n){if(t.tag===3)jm(t,t,n);else for(;e!==null;){if(e.tag===3){jm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xr===null||!Xr.has(i))){t=Bo(n,t),t=yv(e,t,1),e=jr(e,t,1),t=$n(),e!==null&&(gl(e,1,t),oi(e,t));break}}e=e.return}}function dM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$n(),t.pingedLanes|=t.suspendedLanes&n,bn===t&&(Pn&n)===n&&(xn===4||xn===3&&(Pn&130023424)===Pn&&500>cn()-op?Ss(t,0):sp|=n),oi(t,e)}function Bv(t,e){e===0&&(t.mode&1?(e=Dl,Dl<<=1,!(Dl&130023424)&&(Dl=4194304)):e=1);var n=$n();t=_r(t,e),t!==null&&(gl(t,e,n),oi(t,n))}function hM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bv(t,n)}function fM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Me(314))}i!==null&&i.delete(e),Bv(t,n)}var Hv;Hv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ri.current)ii=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ii=!1,eM(t,e,n);ii=!!(t.flags&131072)}else ii=!1,Zt&&e.flags&1048576&&jx(e,Zc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Lc(t,e),t=e.pendingProps;var r=Oo(e,kn.current);Lo(e,n),r=Qf(null,e,i,t,r,n);var s=ep();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,si(i)?(s=!0,Yc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Yf(e),r.updater=Tu,e.stateNode=r,r._reactInternals=e,Wh(e,i,t,n),e=$h(null,e,i,!0,s,n)):(e.tag=0,Zt&&s&&Hf(e),Gn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Lc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=mM(i),t=Ii(i,t),r){case 0:e=Xh(null,e,i,t,n);break e;case 1:e=Um(null,e,i,t,n);break e;case 11:e=Im(null,e,i,t,n);break e;case 14:e=Dm(null,e,i,Ii(i.type,t),n);break e}throw Error(Me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ii(i,r),Xh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ii(i,r),Um(t,e,i,r,n);case 3:e:{if(Ev(e),t===null)throw Error(Me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Kx(t,e),Qc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bo(Error(Me(423)),e),e=Om(t,e,i,n,r);break e}else if(i!==r){r=Bo(Error(Me(424)),e),e=Om(t,e,i,n,r);break e}else for(hi=Wr(e.stateNode.containerInfo.firstChild),fi=e,Zt=!0,Ui=null,n=qx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fo(),i===r){e=yr(t,e,n);break e}Gn(t,e,i,n)}e=e.child}return e;case 5:return Jx(e),t===null&&Hh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Oh(i,r)?o=null:s!==null&&Oh(i,s)&&(e.flags|=32),wv(t,e),Gn(t,e,o,n),e.child;case 6:return t===null&&Hh(e),null;case 13:return bv(t,e,n);case 4:return qf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ko(e,null,i,n):Gn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ii(i,r),Im(t,e,i,r,n);case 7:return Gn(t,e,e.pendingProps,n),e.child;case 8:return Gn(t,e,e.pendingProps.children,n),e.child;case 12:return Gn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Gt(Kc,i._currentValue),i._currentValue=o,s!==null)if(zi(s.value,o)){if(s.children===r.children&&!ri.current){e=yr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Me(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Lo(e,n),r=Ti(r),i=i(r),e.flags|=1,Gn(t,e,i,n),e.child;case 14:return i=e.type,r=Ii(i,e.pendingProps),r=Ii(i.type,r),Dm(t,e,i,r,n);case 15:return Sv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ii(i,r),Lc(t,e),e.tag=1,si(i)?(t=!0,Yc(e)):t=!1,Lo(e,n),vv(e,i,r),Wh(e,i,r,n),$h(null,e,i,!0,t,n);case 19:return Tv(t,e,n);case 22:return Mv(t,e,n)}throw Error(Me(156,e.tag))};function Vv(t,e){return mx(t,e)}function pM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(t,e,n,i){return new pM(t,e,n,i)}function up(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mM(t){if(typeof t=="function")return up(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rf)return 11;if(t===Pf)return 14}return 2}function Yr(t,e){var n=t.alternate;return n===null?(n=wi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")up(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fo:return Ms(n.children,r,s,e);case Cf:o=8,r|=8;break;case ph:return t=wi(12,n,e,r|2),t.elementType=ph,t.lanes=s,t;case mh:return t=wi(13,n,e,r),t.elementType=mh,t.lanes=s,t;case gh:return t=wi(19,n,e,r),t.elementType=gh,t.lanes=s,t;case J0:return Ru(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Z0:o=10;break e;case K0:o=9;break e;case Rf:o=11;break e;case Pf:o=14;break e;case Nr:o=16,i=null;break e}throw Error(Me(130,t==null?t:typeof t,""))}return e=wi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ms(t,e,n,i){return t=wi(7,t,i,e),t.lanes=n,t}function Ru(t,e,n,i){return t=wi(22,t,i,e),t.elementType=J0,t.lanes=n,t.stateNode={isHidden:!1},t}function _d(t,e,n){return t=wi(6,t,null,e),t.lanes=n,t}function yd(t,e,n){return e=wi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ed(0),this.expirationTimes=ed(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ed(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function dp(t,e,n,i,r,s,o,a,l){return t=new gM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yf(s),t}function xM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ho,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Gv(t){if(!t)return es;t=t._reactInternals;e:{if(Os(t)!==t||t.tag!==1)throw Error(Me(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(si(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Me(171))}if(t.tag===1){var n=t.type;if(si(n))return Gx(t,n,e)}return e}function Wv(t,e,n,i,r,s,o,a,l){return t=dp(n,i,!0,t,r,s,o,a,l),t.context=Gv(null),n=t.current,i=$n(),r=$r(n),s=gr(i,r),s.callback=e??null,jr(n,s,r),t.current.lanes=r,gl(t,r,i),oi(t,i),t}function Pu(t,e,n,i){var r=e.current,s=$n(),o=$r(r);return n=Gv(n),e.context===null?e.context=n:e.pendingContext=n,e=gr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=jr(r,e,o),t!==null&&(ki(t,r,o,s),Cc(t,r,o)),o}function au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hp(t,e){Xm(t,e),(t=t.alternate)&&Xm(t,e)}function vM(){return null}var jv=typeof reportError=="function"?reportError:function(t){console.error(t)};function fp(t){this._internalRoot=t}Lu.prototype.render=fp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Me(409));Pu(t,e,null,null)};Lu.prototype.unmount=fp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ps(function(){Pu(null,t,null,null)}),e[vr]=null}};function Lu(t){this._internalRoot=t}Lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dr.length&&e!==0&&e<Dr[n].priority;n++);Dr.splice(n,0,t),n===0&&Ex(t)}};function pp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $m(){}function _M(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=au(o);s.call(c)}}var o=Wv(e,i,t,0,null,!1,!1,"",$m);return t._reactRootContainer=o,t[vr]=o.current,Qa(t.nodeType===8?t.parentNode:t),Ps(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=au(l);a.call(c)}}var l=dp(t,0,!1,null,null,!1,!1,"",$m);return t._reactRootContainer=l,t[vr]=l.current,Qa(t.nodeType===8?t.parentNode:t),Ps(function(){Pu(e,l,n,i)}),l}function Iu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=au(o);a.call(l)}}Pu(e,o,t,r)}else o=_M(n,e,t,r,i);return au(o)}yx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ta(e.pendingLanes);n!==0&&(If(e,n|1),oi(e,cn()),!(Lt&6)&&(Ho=cn()+500,rs()))}break;case 13:Ps(function(){var i=_r(t,1);if(i!==null){var r=$n();ki(i,t,1,r)}}),hp(t,1)}};Df=function(t){if(t.tag===13){var e=_r(t,134217728);if(e!==null){var n=$n();ki(e,t,134217728,n)}hp(t,134217728)}};Sx=function(t){if(t.tag===13){var e=$r(t),n=_r(t,e);if(n!==null){var i=$n();ki(n,t,e,i)}hp(t,e)}};Mx=function(){return Dt};wx=function(t,e){var n=Dt;try{return Dt=t,e()}finally{Dt=n}};Th=function(t,e,n){switch(e){case"input":if(_h(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wu(i);if(!r)throw Error(Me(90));ex(i),_h(i,r)}}}break;case"textarea":nx(t,n);break;case"select":e=n.value,e!=null&&Ao(t,!!n.multiple,e,!1)}};cx=ap;ux=Ps;var yM={usingClientEntryPoint:!1,Events:[vl,xo,wu,ax,lx,ap]},ha={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SM={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fx(t),t===null?null:t.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||vM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{_u=jl.inject(SM),Qi=jl}catch{}}mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yM;mi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pp(e))throw Error(Me(200));return xM(t,e,null,n)};mi.createRoot=function(t,e){if(!pp(t))throw Error(Me(299));var n=!1,i="",r=jv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=dp(t,1,!1,null,null,n,!1,i,r),t[vr]=e.current,Qa(t.nodeType===8?t.parentNode:t),new fp(e)};mi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Me(188)):(t=Object.keys(t).join(","),Error(Me(268,t)));return t=fx(e),t=t===null?null:t.stateNode,t};mi.flushSync=function(t){return Ps(t)};mi.hydrate=function(t,e,n){if(!Nu(e))throw Error(Me(200));return Iu(null,t,e,!0,n)};mi.hydrateRoot=function(t,e,n){if(!pp(t))throw Error(Me(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=jv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wv(e,null,t,1,n??null,r,!1,s,o),t[vr]=e.current,Qa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Lu(e)};mi.render=function(t,e,n){if(!Nu(e))throw Error(Me(200));return Iu(null,t,e,!1,n)};mi.unmountComponentAtNode=function(t){if(!Nu(t))throw Error(Me(40));return t._reactRootContainer?(Ps(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[vr]=null})}),!0):!1};mi.unstable_batchedUpdates=ap;mi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Nu(n))throw Error(Me(200));if(t==null||t._reactInternals===void 0)throw Error(Me(38));return Iu(t,e,n,!1,i)};mi.version="18.3.1-next-f1338f8080-20240426";function Xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xv)}catch(t){console.error(t)}}Xv(),X0.exports=mi;var MM=X0.exports,$v,Ym=MM;$v=Ym.createRoot,Ym.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mp="160",wM=0,qm=1,EM=2,Yv=1,qv=2,cr=3,ts=0,Yn=1,Xn=2,qr=0,Io=1,Zm=2,Km=3,Jm=4,bM=5,gs=100,TM=101,AM=102,Qm=103,eg=104,CM=200,RM=201,PM=202,LM=203,of=204,af=205,NM=206,IM=207,DM=208,UM=209,OM=210,FM=211,kM=212,zM=213,BM=214,HM=0,VM=1,GM=2,lu=3,WM=4,jM=5,XM=6,$M=7,Zv=0,YM=1,qM=2,Zr=0,ZM=1,KM=2,JM=3,Kv=4,QM=5,ew=6,gp=300,Vo=301,Go=302,cu=303,lf=304,Du=306,cf=1e3,di=1001,uf=1002,Wn=1003,tg=1004,Sd=1005,jn=1006,tw=1007,ll=1008,Kr=1009,nw=1010,iw=1011,xp=1012,Jv=1013,zr=1014,Br=1015,cl=1016,Qv=1017,e_=1018,ws=1020,rw=1021,Oi=1023,sw=1024,ow=1025,Es=1026,Wo=1027,aw=1028,t_=1029,lw=1030,n_=1031,i_=1033,Md=33776,wd=33777,Ed=33778,bd=33779,ng=35840,ig=35841,rg=35842,sg=35843,r_=36196,og=37492,ag=37496,lg=37808,cg=37809,ug=37810,dg=37811,hg=37812,fg=37813,pg=37814,mg=37815,gg=37816,xg=37817,vg=37818,_g=37819,yg=37820,Sg=37821,Td=36492,Mg=36494,wg=36495,cw=36283,Eg=36284,bg=36285,Tg=36286,s_=3e3,bs=3001,uw=3200,dw=3201,o_=0,hw=1,Mi="",qt="srgb",Sr="srgb-linear",vp="display-p3",Uu="display-p3-linear",uu="linear",Xt="srgb",du="rec709",hu="p3",Ws=7680,Ag=519,fw=512,pw=513,mw=514,a_=515,gw=516,xw=517,vw=518,_w=519,df=35044,Cg="300 es",hf=1035,pr=2e3,fu=2001;class Zo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rg=1234567;const Fa=Math.PI/180,ul=180/Math.PI;function tr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[t&255]+Dn[t>>8&255]+Dn[t>>16&255]+Dn[t>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[n&63|128]+Dn[n>>8&255]+"-"+Dn[n>>16&255]+Dn[n>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function Rn(t,e,n){return Math.max(e,Math.min(n,t))}function _p(t,e){return(t%e+e)%e}function yw(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Sw(t,e,n){return t!==e?(n-t)/(e-t):0}function ka(t,e,n){return(1-n)*t+n*e}function Mw(t,e,n,i){return ka(t,e,1-Math.exp(-n*i))}function ww(t,e=1){return e-Math.abs(_p(t,e*2)-e)}function Ew(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function bw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Tw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Aw(t,e){return t+Math.random()*(e-t)}function Cw(t){return t*(.5-Math.random())}function Rw(t){t!==void 0&&(Rg=t);let e=Rg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pw(t){return t*Fa}function Lw(t){return t*ul}function ff(t){return(t&t-1)===0&&t!==0}function Nw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function pu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Iw(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*x,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*x,a*c);break;case"ZYZ":t.set(l*x,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ki(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ot(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const fn={DEG2RAD:Fa,RAD2DEG:ul,generateUUID:tr,clamp:Rn,euclideanModulo:_p,mapLinear:yw,inverseLerp:Sw,lerp:ka,damp:Mw,pingpong:ww,smoothstep:Ew,smootherstep:bw,randInt:Tw,randFloat:Aw,randFloatSpread:Cw,seededRandom:Rw,degToRad:Pw,radToDeg:Lw,isPowerOfTwo:ff,ceilPowerOfTwo:Nw,floorPowerOfTwo:pu,setQuaternionFromProperEuler:Iw,normalize:Ot,denormalize:Ki};class ye{constructor(e=0,n=0){ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(e,n,i,r,s,o,a,l,c){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],x=i[8],S=r[0],g=r[3],d=r[6],m=r[1],v=r[4],M=r[7],N=r[2],A=r[5],R=r[8];return s[0]=o*S+a*m+l*N,s[3]=o*g+a*v+l*A,s[6]=o*d+a*M+l*R,s[1]=c*S+u*m+h*N,s[4]=c*g+u*v+h*A,s[7]=c*d+u*M+h*R,s[2]=f*S+p*m+x*N,s[5]=f*g+p*v+x*A,s[8]=f*d+p*M+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,x=n*h+i*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=h*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=f*S,e[4]=(u*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ad.makeScale(e,n)),this}rotate(e){return this.premultiply(Ad.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ad.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ad=new Et;function l_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Dw(){const t=dl("canvas");return t.style.display="block",t}const Pg={};function za(t){t in Pg||(Pg[t]=!0,console.warn(t))}const Lg=new Et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ng=new Et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xl={[Sr]:{transfer:uu,primaries:du,toReference:t=>t,fromReference:t=>t},[qt]:{transfer:Xt,primaries:du,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Uu]:{transfer:uu,primaries:hu,toReference:t=>t.applyMatrix3(Ng),fromReference:t=>t.applyMatrix3(Lg)},[vp]:{transfer:Xt,primaries:hu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ng),fromReference:t=>t.applyMatrix3(Lg).convertLinearToSRGB()}},Uw=new Set([Sr,Uu]),Ft={enabled:!0,_workingColorSpace:Sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Uw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Xl[e].toReference,r=Xl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Xl[t].primaries},getTransfer:function(t){return t===Mi?uu:Xl[t].transfer}};function Do(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let js;class c_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{js===void 0&&(js=dl("canvas")),js.width=e.width,js.height=e.height;const i=js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=js}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Do(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Do(n[i]/255)*255):n[i]=Do(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ow=0;class u_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ow++}),this.uuid=tr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rd(r[o].image)):s.push(Rd(r[o]))}else s=Rd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Rd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?c_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fw=0;class qn extends Zo{constructor(e=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,i=di,r=di,s=jn,o=ll,a=Oi,l=Kr,c=qn.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=tr(),this.name="",this.source=new u_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===bs?qt:Mi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cf:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case uf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cf:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case uf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qt?bs:s_}set encoding(e){za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===bs?qt:Mi}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=gp;qn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,n=0,i=0,r=1){Kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],x=l[9],S=l[2],g=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-S)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+S)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(p+1)/2,N=(d+1)/2,A=(u+f)/4,R=(h+S)/4,k=(x+g)/4;return v>M&&v>N?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=R/i):M>N?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=k/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=R/s,r=k/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-x)*(g-x)+(h-S)*(h-S)+(f-u)*(f-u));return Math.abs(m)<.001&&(m=1),this.x=(g-x)/m,this.y=(h-S)/m,this.z=(f-u)/m,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kw extends Zo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Kt(0,0,e,n),this.scissorTest=!1,this.viewport=new Kt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(za("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===bs?qt:Mi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new qn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new u_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends kw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class d_ extends qn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zw extends qn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],x=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=x,e[n+3]=S;return}if(h!==S||l!==f||c!==p||u!==x){let g=1-a;const d=l*f+c*p+u*x+h*S,m=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const N=Math.sqrt(v),A=Math.atan2(N,d*m);g=Math.sin(g*A)/N,a=Math.sin(a*A)/N}const M=a*m;if(l=l*g+f*M,c=c*g+p*M,u=u*g+x*M,h=h*g+S*M,g===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+u*h+l*p-c*f,e[n+1]=l*x+u*f+c*h-a*p,e[n+2]=c*x+u*p+a*f-l*h,e[n+3]=u*x-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h-f*p*x;break;case"YXZ":this._x=f*u*h+c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h+f*p*x;break;case"ZXY":this._x=f*u*h-c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h-f*p*x;break;case"ZYX":this._x=f*u*h-c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h+f*p*x;break;case"YZX":this._x=f*u*h+c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h-f*p*x;break;case"XZY":this._x=f*u*h-c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ig.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ig.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pd.copy(this).projectOnVector(e),this.sub(Pd)}reflect(e){return this.sub(Pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pd=new O,Ig=new yl;class Sl{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pi):Pi.fromBufferAttribute(s,o),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$l.copy(i.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Yl.subVectors(this.max,fa),Xs.subVectors(e.a,fa),$s.subVectors(e.b,fa),Ys.subVectors(e.c,fa),Ar.subVectors($s,Xs),Cr.subVectors(Ys,$s),ls.subVectors(Xs,Ys);let n=[0,-Ar.z,Ar.y,0,-Cr.z,Cr.y,0,-ls.z,ls.y,Ar.z,0,-Ar.x,Cr.z,0,-Cr.x,ls.z,0,-ls.x,-Ar.y,Ar.x,0,-Cr.y,Cr.x,0,-ls.y,ls.x,0];return!Ld(n,Xs,$s,Ys,Yl)||(n=[1,0,0,0,1,0,0,0,1],!Ld(n,Xs,$s,Ys,Yl))?!1:(ql.crossVectors(Ar,Cr),n=[ql.x,ql.y,ql.z],Ld(n,Xs,$s,Ys,Yl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rr=[new O,new O,new O,new O,new O,new O,new O,new O],Pi=new O,$l=new Sl,Xs=new O,$s=new O,Ys=new O,Ar=new O,Cr=new O,ls=new O,fa=new O,Yl=new O,ql=new O,cs=new O;function Ld(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){cs.fromArray(t,s);const a=r.x*Math.abs(cs.x)+r.y*Math.abs(cs.y)+r.z*Math.abs(cs.z),l=e.dot(cs),c=n.dot(cs),u=i.dot(cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Bw=new Sl,pa=new O,Nd=new O;class Ou{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Bw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);const n=pa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(Nd)),this.expandByPoint(pa.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sr=new O,Id=new O,Zl=new O,Rr=new O,Dd=new O,Kl=new O,Ud=new O;class yp{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=sr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,n),sr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Id.copy(e).add(n).multiplyScalar(.5),Zl.copy(n).sub(e).normalize(),Rr.copy(this.origin).sub(Id);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Zl),a=Rr.dot(this.direction),l=-Rr.dot(Zl),c=Rr.lengthSq(),u=Math.abs(1-o*o);let h,f,p,x;if(u>0)if(h=o*l-a,f=o*a-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const S=1/u;h*=S,f*=S,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Id).addScaledVector(Zl,f),p}intersectSphere(e,n){sr.subVectors(e.center,this.origin);const i=sr.dot(this.direction),r=sr.dot(sr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,n,i,r,s){Dd.subVectors(n,e),Kl.subVectors(i,e),Ud.crossVectors(Dd,Kl);let o=this.direction.dot(Ud),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rr.subVectors(this.origin,e);const l=a*this.direction.dot(Kl.crossVectors(Rr,Kl));if(l<0)return null;const c=a*this.direction.dot(Dd.cross(Rr));if(c<0||l+c>o)return null;const u=-a*Rr.dot(Ud);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,n,i,r,s,o,a,l,c,u,h,f,p,x,S,g){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,f,p,x,S,g)}set(e,n,i,r,s,o,a,l,c,u,h,f,p,x,S,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=x,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/qs.setFromMatrixColumn(e,0).length(),s=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,x=a*u,S=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+x*c,n[5]=f-S*c,n[9]=-a*l,n[2]=S-f*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,x=c*u,S=c*h;n[0]=f+S*a,n[4]=x*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-x,n[6]=S+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,x=c*u,S=c*h;n[0]=f-S*a,n[4]=-o*h,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*u,n[9]=S-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,x=a*u,S=a*h;n[0]=l*u,n[4]=x*c-p,n[8]=f*c+S,n[1]=l*h,n[5]=S*c+f,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,x=a*l,S=a*c;n[0]=l*u,n[4]=S-f*h,n[8]=x*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+x,n[10]=f-S*h}else if(e.order==="XZY"){const f=o*l,p=o*c,x=a*l,S=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+S,n[5]=o*u,n[9]=p*h-x,n[2]=x*h-p,n[6]=a*u,n[10]=S*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hw,e,Vw)}lookAt(e,n,i){const r=this.elements;return li.subVectors(e,n),li.lengthSq()===0&&(li.z=1),li.normalize(),Pr.crossVectors(i,li),Pr.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Pr.crossVectors(i,li)),Pr.normalize(),Jl.crossVectors(li,Pr),r[0]=Pr.x,r[4]=Jl.x,r[8]=li.x,r[1]=Pr.y,r[5]=Jl.y,r[9]=li.y,r[2]=Pr.z,r[6]=Jl.z,r[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],x=i[2],S=i[6],g=i[10],d=i[14],m=i[3],v=i[7],M=i[11],N=i[15],A=r[0],R=r[4],k=r[8],b=r[12],T=r[1],V=r[5],X=r[9],ie=r[13],I=r[2],W=r[6],j=r[10],ne=r[14],B=r[3],Y=r[7],q=r[11],ce=r[15];return s[0]=o*A+a*T+l*I+c*B,s[4]=o*R+a*V+l*W+c*Y,s[8]=o*k+a*X+l*j+c*q,s[12]=o*b+a*ie+l*ne+c*ce,s[1]=u*A+h*T+f*I+p*B,s[5]=u*R+h*V+f*W+p*Y,s[9]=u*k+h*X+f*j+p*q,s[13]=u*b+h*ie+f*ne+p*ce,s[2]=x*A+S*T+g*I+d*B,s[6]=x*R+S*V+g*W+d*Y,s[10]=x*k+S*X+g*j+d*q,s[14]=x*b+S*ie+g*ne+d*ce,s[3]=m*A+v*T+M*I+N*B,s[7]=m*R+v*V+M*W+N*Y,s[11]=m*k+v*X+M*j+N*q,s[15]=m*b+v*ie+M*ne+N*ce,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],x=e[3],S=e[7],g=e[11],d=e[15];return x*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+S*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+g*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*h+n*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],x=e[12],S=e[13],g=e[14],d=e[15],m=h*g*c-S*f*c+S*l*p-a*g*p-h*l*d+a*f*d,v=x*f*c-u*g*c-x*l*p+o*g*p+u*l*d-o*f*d,M=u*S*c-x*h*c+x*a*p-o*S*p-u*a*d+o*h*d,N=x*h*l-u*S*l-x*a*f+o*S*f+u*a*g-o*h*g,A=n*m+i*v+r*M+s*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=m*R,e[1]=(S*f*s-h*g*s-S*r*p+i*g*p+h*r*d-i*f*d)*R,e[2]=(a*g*s-S*l*s+S*r*c-i*g*c-a*r*d+i*l*d)*R,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*R,e[4]=v*R,e[5]=(u*g*s-x*f*s+x*r*p-n*g*p-u*r*d+n*f*d)*R,e[6]=(x*l*s-o*g*s-x*r*c+n*g*c+o*r*d-n*l*d)*R,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*R,e[8]=M*R,e[9]=(x*h*s-u*S*s-x*i*p+n*S*p+u*i*d-n*h*d)*R,e[10]=(o*S*s-x*a*s+x*i*c-n*S*c-o*i*d+n*a*d)*R,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*R,e[12]=N*R,e[13]=(u*S*r-x*h*r+x*i*f-n*S*f-u*i*g+n*h*g)*R,e[14]=(x*a*r-o*S*r-x*i*l+n*S*l+o*i*g-n*a*g)*R,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*f+n*a*f)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,x=s*h,S=o*u,g=o*h,d=a*h,m=l*c,v=l*u,M=l*h,N=i.x,A=i.y,R=i.z;return r[0]=(1-(S+d))*N,r[1]=(p+M)*N,r[2]=(x-v)*N,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(f+d))*A,r[6]=(g+m)*A,r[7]=0,r[8]=(x+v)*R,r[9]=(g-m)*R,r[10]=(1-(f+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=qs.set(r[0],r[1],r[2]).length();const o=qs.set(r[4],r[5],r[6]).length(),a=qs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Li.copy(this);const c=1/s,u=1/o,h=1/a;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=u,Li.elements[5]*=u,Li.elements[6]*=u,Li.elements[8]*=h,Li.elements[9]*=h,Li.elements[10]*=h,n.setFromRotationMatrix(Li),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=pr){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,x;if(a===pr)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===fu)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=pr){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),f=(n+e)*c,p=(i+r)*u;let x,S;if(a===pr)x=(o+s)*h,S=-2*h;else if(a===fu)x=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qs=new O,Li=new rn,Hw=new O(0,0,0),Vw=new O(1,1,1),Pr=new O,Jl=new O,li=new O,Dg=new rn,Ug=new yl;class Ml{constructor(e=0,n=0,i=0,r=Ml.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ug.setFromEuler(this),this.setFromQuaternion(Ug,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ml.DEFAULT_ORDER="XYZ";let Sp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gw=0;const Og=new O,Zs=new yl,or=new rn,Ql=new O,ma=new O,Ww=new O,jw=new yl,Fg=new O(1,0,0),kg=new O(0,1,0),zg=new O(0,0,1),Xw={type:"added"},$w={type:"removed"};class Tn extends Zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gw++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new O,n=new Ml,i=new yl,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rn},normalMatrix:{value:new Et}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(Fg,e)}rotateY(e){return this.rotateOnAxis(kg,e)}rotateZ(e){return this.rotateOnAxis(zg,e)}translateOnAxis(e,n){return Og.copy(e).applyQuaternion(this.quaternion),this.position.add(Og.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fg,e)}translateY(e){return this.translateOnAxis(kg,e)}translateZ(e){return this.translateOnAxis(zg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ql.copy(e):Ql.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(ma,Ql,this.up):or.lookAt(Ql,ma,this.up),this.quaternion.setFromRotationMatrix(or),r&&(or.extractRotation(r.matrixWorld),Zs.setFromRotationMatrix(or),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($w)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,Ww),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,jw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new O(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new O,ar=new O,Od=new O,lr=new O,Ks=new O,Js=new O,Bg=new O,Fd=new O,kd=new O,zd=new O;let ec=!1;class Si{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ni.subVectors(e,n),r.cross(Ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ni.subVectors(r,n),ar.subVectors(i,n),Od.subVectors(e,n);const o=Ni.dot(Ni),a=Ni.dot(ar),l=Ni.dot(Od),c=ar.dot(ar),u=ar.dot(Od),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getUV(e,n,i,r,s,o,a,l){return ec===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ec=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,lr.x),l.addScaledVector(o,lr.y),l.addScaledVector(a,lr.z),l)}static isFrontFacing(e,n,i,r){return Ni.subVectors(i,n),ar.subVectors(e,n),Ni.cross(ar).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Ni.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Si.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ec===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ec=!0),Si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ks.subVectors(r,i),Js.subVectors(s,i),Fd.subVectors(e,i);const l=Ks.dot(Fd),c=Js.dot(Fd);if(l<=0&&c<=0)return n.copy(i);kd.subVectors(e,r);const u=Ks.dot(kd),h=Js.dot(kd);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ks,o);zd.subVectors(e,s);const p=Ks.dot(zd),x=Js.dot(zd);if(x>=0&&p<=x)return n.copy(s);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Js,a);const g=u*x-p*h;if(g<=0&&h-u>=0&&p-x>=0)return Bg.subVectors(s,r),a=(h-u)/(h-u+(p-x)),n.copy(r).addScaledVector(Bg,a);const d=1/(g+S+f);return o=S*d,a=f*d,n.copy(i).addScaledVector(Ks,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const h_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},tc={h:0,s:0,l:0};function Bd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Mt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ft.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ft.workingColorSpace){if(e=_p(e,1),n=Rn(n,0,1),i=Rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Bd(o,s,e+1/3),this.g=Bd(o,s,e),this.b=Bd(o,s,e-1/3)}return Ft.toWorkingColorSpace(this,r),this}setStyle(e,n=qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qt){const i=h_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}copyLinearToSRGB(e){return this.r=Cd(e.r),this.g=Cd(e.g),this.b=Cd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Ft.fromWorkingColorSpace(Un.copy(this),e),Math.round(Rn(Un.r*255,0,255))*65536+Math.round(Rn(Un.g*255,0,255))*256+Math.round(Rn(Un.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Un.copy(this),n);const i=Un.r,r=Un.g,s=Un.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Un.copy(this),n),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=qt){Ft.fromWorkingColorSpace(Un.copy(this),e);const n=Un.r,i=Un.g,r=Un.b;return e!==qt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+n,Lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Lr),e.getHSL(tc);const i=ka(Lr.h,tc.h,n),r=ka(Lr.s,tc.s,n),s=ka(Lr.l,tc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Mt;Mt.NAMES=h_;let Yw=0;class Fs extends Zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yw++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Io,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=af,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=lu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Io&&(i.blending=this.blending),this.side!==ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==of&&(i.blendSrc=this.blendSrc),this.blendDst!==af&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ag&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ji extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new O,nc=new ye;class bi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=df,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)nc.fromBufferAttribute(this,n),nc.applyMatrix3(e),this.setXY(n,nc.x,nc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ki(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ki(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ki(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ki(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ki(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==df&&(e.usage=this.usage),e}}class f_ extends bi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class p_ extends bi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kt extends bi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let qw=0;const xi=new rn,Hd=new Tn,Qs=new O,ci=new Sl,ga=new Sl,wn=new O;class vn extends Zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qw++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l_(e)?p_:f_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,n,i){return xi.makeTranslation(e,n,i),this.applyMatrix4(xi),this}scale(e,n,i){return xi.makeScale(e,n,i),this.applyMatrix4(xi),this}lookAt(e){return Hd.lookAt(e),Hd.updateMatrix(),this.applyMatrix4(Hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ou);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ga.setFromBufferAttribute(a),this.morphTargetsRelative?(wn.addVectors(ci.min,ga.min),ci.expandByPoint(wn),wn.addVectors(ci.max,ga.max),ci.expandByPoint(wn)):(ci.expandByPoint(ga.min),ci.expandByPoint(ga.max))}ci.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)wn.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(e,c),wn.add(Qs)),r=Math.max(r,i.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new O,u[T]=new O;const h=new O,f=new O,p=new O,x=new ye,S=new ye,g=new ye,d=new O,m=new O;function v(T,V,X){h.fromArray(r,T*3),f.fromArray(r,V*3),p.fromArray(r,X*3),x.fromArray(o,T*2),S.fromArray(o,V*2),g.fromArray(o,X*2),f.sub(h),p.sub(h),S.sub(x),g.sub(x);const ie=1/(S.x*g.y-g.x*S.y);isFinite(ie)&&(d.copy(f).multiplyScalar(g.y).addScaledVector(p,-S.y).multiplyScalar(ie),m.copy(p).multiplyScalar(S.x).addScaledVector(f,-g.x).multiplyScalar(ie),c[T].add(d),c[V].add(d),c[X].add(d),u[T].add(m),u[V].add(m),u[X].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let T=0,V=M.length;T<V;++T){const X=M[T],ie=X.start,I=X.count;for(let W=ie,j=ie+I;W<j;W+=3)v(i[W+0],i[W+1],i[W+2])}const N=new O,A=new O,R=new O,k=new O;function b(T){R.fromArray(s,T*3),k.copy(R);const V=c[T];N.copy(V),N.sub(R.multiplyScalar(R.dot(V))).normalize(),A.crossVectors(k,V);const ie=A.dot(u[T])<0?-1:1;l[T*4]=N.x,l[T*4+1]=N.y,l[T*4+2]=N.z,l[T*4+3]=ie}for(let T=0,V=M.length;T<V;++T){const X=M[T],ie=X.start,I=X.count;for(let W=ie,j=ie+I;W<j;W+=3)b(i[W+0]),b(i[W+1]),b(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),S=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wn.fromBufferAttribute(e,n),wn.normalize(),e.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,x=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let d=0;d<u;d++)f[x++]=c[p++]}return new bi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hg=new rn,us=new yp,ic=new Ou,Vg=new O,eo=new O,to=new O,no=new O,Vd=new O,rc=new O,sc=new ye,oc=new ye,ac=new ye,Gg=new O,Wg=new O,jg=new O,lc=new O,cc=new O;class ke extends Tn{constructor(e=new vn,n=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){rc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Vd.fromBufferAttribute(h,e),o?rc.addScaledVector(Vd,u):rc.addScaledVector(Vd.sub(n),u))}n.add(rc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(s),us.copy(e.ray).recast(e.near),!(ic.containsPoint(us.origin)===!1&&(us.intersectSphere(ic,Vg)===null||us.origin.distanceToSquared(Vg)>(e.far-e.near)**2))&&(Hg.copy(s).invert(),us.copy(e.ray).applyMatrix4(Hg),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,us)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=f.length;x<S;x++){const g=f[x],d=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,N=v;M<N;M+=3){const A=a.getX(M),R=a.getX(M+1),k=a.getX(M+2);r=uc(this,d,e,i,c,u,h,A,R,k),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let g=x,d=S;g<d;g+=3){const m=a.getX(g),v=a.getX(g+1),M=a.getX(g+2);r=uc(this,o,e,i,c,u,h,m,v,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=f.length;x<S;x++){const g=f[x],d=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,N=v;M<N;M+=3){const A=M,R=M+1,k=M+2;r=uc(this,d,e,i,c,u,h,A,R,k),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=x,d=S;g<d;g+=3){const m=g,v=g+1,M=g+2;r=uc(this,o,e,i,c,u,h,m,v,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Zw(t,e,n,i,r,s,o,a){let l;if(e.side===Yn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ts,a),l===null)return null;cc.copy(a),cc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(cc);return c<n.near||c>n.far?null:{distance:c,point:cc.clone(),object:t}}function uc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,eo),t.getVertexPosition(l,to),t.getVertexPosition(c,no);const u=Zw(t,e,n,i,eo,to,no,lc);if(u){r&&(sc.fromBufferAttribute(r,a),oc.fromBufferAttribute(r,l),ac.fromBufferAttribute(r,c),u.uv=Si.getInterpolation(lc,eo,to,no,sc,oc,ac,new ye)),s&&(sc.fromBufferAttribute(s,a),oc.fromBufferAttribute(s,l),ac.fromBufferAttribute(s,c),u.uv1=Si.getInterpolation(lc,eo,to,no,sc,oc,ac,new ye),u.uv2=u.uv1),o&&(Gg.fromBufferAttribute(o,a),Wg.fromBufferAttribute(o,l),jg.fromBufferAttribute(o,c),u.normal=Si.getInterpolation(lc,eo,to,no,Gg,Wg,jg,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Si.getNormal(eo,to,no,h.normal),u.face=h}return u}class pn extends vn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2));function x(S,g,d,m,v,M,N,A,R,k,b){const T=M/R,V=N/k,X=M/2,ie=N/2,I=A/2,W=R+1,j=k+1;let ne=0,B=0;const Y=new O;for(let q=0;q<j;q++){const ce=q*V-ie;for(let fe=0;fe<W;fe++){const ee=fe*T-X;Y[S]=ee*m,Y[g]=ce*v,Y[d]=I,c.push(Y.x,Y.y,Y.z),Y[S]=0,Y[g]=0,Y[d]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(fe/R),h.push(1-q/k),ne+=1}}for(let q=0;q<k;q++)for(let ce=0;ce<R;ce++){const fe=f+ce+W*q,ee=f+ce+W*(q+1),de=f+(ce+1)+W*(q+1),Pe=f+(ce+1)+W*q;l.push(fe,ee,Pe),l.push(ee,de,Pe),B+=6}a.addGroup(p,B,b),p+=B,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vn(t){const e={};for(let n=0;n<t.length;n++){const i=jo(t[n]);for(const r in i)e[r]=i[r]}return e}function Kw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function m_(t){return t.getRenderTarget()===null?t.outputColorSpace:Ft.workingColorSpace}const Jw={clone:jo,merge:Vn};var Qw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ns extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qw,this.fragmentShader=e1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jo(e.uniforms),this.uniformsGroups=Kw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let g_=class extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=pr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class ni extends g_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ul*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const io=-90,ro=1;class t1 extends Tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ni(io,ro,e,n);r.layers=this.layers,this.add(r);const s=new ni(io,ro,e,n);s.layers=this.layers,this.add(s);const o=new ni(io,ro,e,n);o.layers=this.layers,this.add(o);const a=new ni(io,ro,e,n);a.layers=this.layers,this.add(a);const l=new ni(io,ro,e,n);l.layers=this.layers,this.add(l);const c=new ni(io,ro,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===pr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class x_ extends qn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Vo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class n1 extends Ls{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(za("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===bs?qt:Mi),this.texture=new x_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pn(5,5,5),s=new Ns({name:"CubemapFromEquirect",uniforms:jo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yn,blending:qr});s.uniforms.tEquirect.value=n;const o=new ke(r,s),a=n.minFilter;return n.minFilter===ll&&(n.minFilter=jn),new t1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Gd=new O,i1=new O,r1=new Et;class ps{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Gd.subVectors(i,n).cross(i1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Gd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||r1.getNormalMatrix(e),r=this.coplanarPoint(Gd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Ou,dc=new O;class Mp{constructor(e=new ps,n=new ps,i=new ps,r=new ps,s=new ps,o=new ps){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],x=r[9],S=r[10],g=r[11],d=r[12],m=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,g-p,M-d).normalize(),i[1].setComponents(l+s,f+c,g+p,M+d).normalize(),i[2].setComponents(l+o,f+u,g+x,M+m).normalize(),i[3].setComponents(l-o,f-u,g-x,M-m).normalize(),i[4].setComponents(l-a,f-h,g-S,M-v).normalize(),n===pr)i[5].setComponents(l+a,f+h,g+S,M+v).normalize();else if(n===fu)i[5].setComponents(a,h,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(dc.x=r.normal.x>0?e.max.x:e.min.x,dc.y=r.normal.y>0?e.max.y:e.min.y,dc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function v_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function s1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=h.byteLength,x=t.createBuffer();t.bindBuffer(u,x),t.bufferData(u,h,f),c.onUploadCallback();let S;if(h instanceof Float32Array)S=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)S=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=t.SHORT;else if(h instanceof Uint32Array)S=t.UNSIGNED_INT;else if(h instanceof Int32Array)S=t.INT;else if(h instanceof Int8Array)S=t.BYTE;else if(h instanceof Uint8Array)S=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,h){const f=u.array,p=u._updateRange,x=u.updateRanges;if(t.bindBuffer(h,c),p.count===-1&&x.length===0&&t.bufferSubData(h,0,f),x.length!==0){for(let S=0,g=x.length;S<g;S++){const d=x[S];n?t.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):t.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):t.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class vi extends vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=n/l,p=[],x=[],S=[],g=[];for(let d=0;d<u;d++){const m=d*f-o;for(let v=0;v<c;v++){const M=v*h-s;x.push(M,-m,0),S.push(0,0,1),g.push(v/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<a;m++){const v=m+c*d,M=m+c*(d+1),N=m+1+c*(d+1),A=m+1+c*d;p.push(v,M,A),p.push(M,N,A)}this.setIndex(p),this.setAttribute("position",new kt(x,3)),this.setAttribute("normal",new kt(S,3)),this.setAttribute("uv",new kt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.widthSegments,e.heightSegments)}}var o1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a1=`#ifdef USE_ALPHAHASH
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
#endif`,l1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,d1=`#ifdef USE_ALPHATEST
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
#endif`,f1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p1=`#ifdef USE_BATCHING
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
#endif`,m1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,g1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_1=`#ifdef USE_IRIDESCENCE
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
#endif`,y1=`#ifdef USE_BUMPMAP
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,R1=`#define PI 3.141592653589793
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
} // validated`,P1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L1=`vec3 transformedNormal = objectNormal;
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
#endif`,N1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O1="gl_FragColor = linearToOutputTexel( gl_FragColor );",F1=`
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
}`,k1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B1=`#ifdef USE_ENVMAP
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
#endif`,H1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
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
#endif`,G1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$1=`#ifdef USE_GRADIENTMAP
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
}`,Y1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J1=`uniform bool receiveShadow;
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
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,eE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rE=`PhysicalMaterial material;
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
#endif`,sE=`struct PhysicalMaterial {
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
}`,oE=`
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
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
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGDEPTHBUF
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
#endif`,fE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gE=`#if defined( USE_POINTS_UV )
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
#endif`,vE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_E=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yE=`#ifdef USE_MORPHNORMALS
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
#endif`,SE=`#ifdef USE_MORPHTARGETS
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
#endif`,ME=`#ifdef USE_MORPHTARGETS
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
#endif`,wE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,EE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CE=`#ifdef USE_NORMALMAP
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
#endif`,RE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,UE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WE=`float getShadowMask() {
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
}`,jE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XE=`#ifdef USE_SKINNING
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
#endif`,$E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YE=`#ifdef USE_SKINNING
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
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QE=`#ifdef USE_TRANSMISSION
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
#endif`,eb=`#ifdef USE_TRANSMISSION
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
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ob=`uniform sampler2D t2D;
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
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`#include <common>
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
}`,fb=`#define DISTANCE
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
}`,pb=`#define DISTANCE
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
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gb=`uniform sampler2D tEquirect;
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
}`,vb=`uniform vec3 diffuse;
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
}`,_b=`#include <common>
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
}`,yb=`uniform vec3 diffuse;
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
}`,Sb=`#define LAMBERT
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
}`,Mb=`#define LAMBERT
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
}`,wb=`#define MATCAP
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
}`,Eb=`#define MATCAP
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
}`,bb=`#define NORMAL
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
}`,Tb=`#define NORMAL
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
}`,Ab=`#define PHONG
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
}`,Cb=`#define PHONG
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
}`,Rb=`#define STANDARD
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
}`,Pb=`#define STANDARD
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
}`,Lb=`#define TOON
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
}`,Nb=`#define TOON
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
}`,Ib=`uniform float size;
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
}`,Db=`uniform vec3 diffuse;
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
}`,Ub=`#include <common>
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
}`,Ob=`uniform vec3 color;
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
}`,Fb=`uniform float rotation;
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
}`,kb=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:o1,alphahash_pars_fragment:a1,alphamap_fragment:l1,alphamap_pars_fragment:c1,alphatest_fragment:u1,alphatest_pars_fragment:d1,aomap_fragment:h1,aomap_pars_fragment:f1,batching_pars_vertex:p1,batching_vertex:m1,begin_vertex:g1,beginnormal_vertex:x1,bsdfs:v1,iridescence_fragment:_1,bumpmap_pars_fragment:y1,clipping_planes_fragment:S1,clipping_planes_pars_fragment:M1,clipping_planes_pars_vertex:w1,clipping_planes_vertex:E1,color_fragment:b1,color_pars_fragment:T1,color_pars_vertex:A1,color_vertex:C1,common:R1,cube_uv_reflection_fragment:P1,defaultnormal_vertex:L1,displacementmap_pars_vertex:N1,displacementmap_vertex:I1,emissivemap_fragment:D1,emissivemap_pars_fragment:U1,colorspace_fragment:O1,colorspace_pars_fragment:F1,envmap_fragment:k1,envmap_common_pars_fragment:z1,envmap_pars_fragment:B1,envmap_pars_vertex:H1,envmap_physical_pars_fragment:Q1,envmap_vertex:V1,fog_vertex:G1,fog_pars_vertex:W1,fog_fragment:j1,fog_pars_fragment:X1,gradientmap_pars_fragment:$1,lightmap_fragment:Y1,lightmap_pars_fragment:q1,lights_lambert_fragment:Z1,lights_lambert_pars_fragment:K1,lights_pars_begin:J1,lights_toon_fragment:eE,lights_toon_pars_fragment:tE,lights_phong_fragment:nE,lights_phong_pars_fragment:iE,lights_physical_fragment:rE,lights_physical_pars_fragment:sE,lights_fragment_begin:oE,lights_fragment_maps:aE,lights_fragment_end:lE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:dE,logdepthbuf_vertex:hE,map_fragment:fE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:gE,metalnessmap_fragment:xE,metalnessmap_pars_fragment:vE,morphcolor_vertex:_E,morphnormal_vertex:yE,morphtarget_pars_vertex:SE,morphtarget_vertex:ME,normal_fragment_begin:wE,normal_fragment_maps:EE,normal_pars_fragment:bE,normal_pars_vertex:TE,normal_vertex:AE,normalmap_pars_fragment:CE,clearcoat_normal_fragment_begin:RE,clearcoat_normal_fragment_maps:PE,clearcoat_pars_fragment:LE,iridescence_pars_fragment:NE,opaque_fragment:IE,packing:DE,premultiplied_alpha_fragment:UE,project_vertex:OE,dithering_fragment:FE,dithering_pars_fragment:kE,roughnessmap_fragment:zE,roughnessmap_pars_fragment:BE,shadowmap_pars_fragment:HE,shadowmap_pars_vertex:VE,shadowmap_vertex:GE,shadowmask_pars_fragment:WE,skinbase_vertex:jE,skinning_pars_vertex:XE,skinning_vertex:$E,skinnormal_vertex:YE,specularmap_fragment:qE,specularmap_pars_fragment:ZE,tonemapping_fragment:KE,tonemapping_pars_fragment:JE,transmission_fragment:QE,transmission_pars_fragment:eb,uv_pars_fragment:tb,uv_pars_vertex:nb,uv_vertex:ib,worldpos_vertex:rb,background_vert:sb,background_frag:ob,backgroundCube_vert:ab,backgroundCube_frag:lb,cube_vert:cb,cube_frag:ub,depth_vert:db,depth_frag:hb,distanceRGBA_vert:fb,distanceRGBA_frag:pb,equirect_vert:mb,equirect_frag:gb,linedashed_vert:xb,linedashed_frag:vb,meshbasic_vert:_b,meshbasic_frag:yb,meshlambert_vert:Sb,meshlambert_frag:Mb,meshmatcap_vert:wb,meshmatcap_frag:Eb,meshnormal_vert:bb,meshnormal_frag:Tb,meshphong_vert:Ab,meshphong_frag:Cb,meshphysical_vert:Rb,meshphysical_frag:Pb,meshtoon_vert:Lb,meshtoon_frag:Nb,points_vert:Ib,points_frag:Db,shadow_vert:Ub,shadow_frag:Ob,sprite_vert:Fb,sprite_frag:kb},Ae={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},qi={basic:{uniforms:Vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Mt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Vn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Vn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Mt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Vn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Vn([Ae.points,Ae.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Vn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Vn([Ae.common,Ae.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Vn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Vn([Ae.sprite,Ae.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:Vn([Ae.common,Ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:Vn([Ae.lights,Ae.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};qi.physical={uniforms:Vn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const hc={r:0,b:0,g:0};function zb(t,e,n,i,r,s,o){const a=new Mt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function x(g,d){let m=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?S(a,l):v&&v.isColor&&(S(v,1),m=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Du)?(u===void 0&&(u=new ke(new pn(1,1,1),new Ns({name:"BackgroundCubeMaterial",uniforms:jo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ft.getTransfer(v.colorSpace)!==Xt,(h!==v||f!==v.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ke(new vi(2,2),new Ns({name:"BackgroundMaterial",uniforms:jo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ft.getTransfer(v.colorSpace)!==Xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function S(g,d){g.getRGB(hc,m_(t)),i.buffers.color.setClear(hc.r,hc.g,hc.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),l=d,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,S(a,l)},render:x}}function Bb(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function h(I,W,j,ne,B){let Y=!1;if(o){const q=S(ne,j,W);c!==q&&(c=q,p(c.object)),Y=d(I,ne,j,B),Y&&m(I,ne,j,B)}else{const q=W.wireframe===!0;(c.geometry!==ne.id||c.program!==j.id||c.wireframe!==q)&&(c.geometry=ne.id,c.program=j.id,c.wireframe=q,Y=!0)}B!==null&&n.update(B,t.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,k(I,W,j,ne),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(B).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function S(I,W,j){const ne=j.wireframe===!0;let B=a[I.id];B===void 0&&(B={},a[I.id]=B);let Y=B[W.id];Y===void 0&&(Y={},B[W.id]=Y);let q=Y[ne];return q===void 0&&(q=g(f()),Y[ne]=q),q}function g(I){const W=[],j=[],ne=[];for(let B=0;B<r;B++)W[B]=0,j[B]=0,ne[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:j,attributeDivisors:ne,object:I,attributes:{},index:null}}function d(I,W,j,ne){const B=c.attributes,Y=W.attributes;let q=0;const ce=j.getAttributes();for(const fe in ce)if(ce[fe].location>=0){const de=B[fe];let Pe=Y[fe];if(Pe===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(Pe=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(Pe=I.instanceColor)),de===void 0||de.attribute!==Pe||Pe&&de.data!==Pe.data)return!0;q++}return c.attributesNum!==q||c.index!==ne}function m(I,W,j,ne){const B={},Y=W.attributes;let q=0;const ce=j.getAttributes();for(const fe in ce)if(ce[fe].location>=0){let de=Y[fe];de===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(de=I.instanceColor));const Pe={};Pe.attribute=de,de&&de.data&&(Pe.data=de.data),B[fe]=Pe,q++}c.attributes=B,c.attributesNum=q,c.index=ne}function v(){const I=c.newAttributes;for(let W=0,j=I.length;W<j;W++)I[W]=0}function M(I){N(I,0)}function N(I,W){const j=c.newAttributes,ne=c.enabledAttributes,B=c.attributeDivisors;j[I]=1,ne[I]===0&&(t.enableVertexAttribArray(I),ne[I]=1),B[I]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),B[I]=W)}function A(){const I=c.newAttributes,W=c.enabledAttributes;for(let j=0,ne=W.length;j<ne;j++)W[j]!==I[j]&&(t.disableVertexAttribArray(j),W[j]=0)}function R(I,W,j,ne,B,Y,q){q===!0?t.vertexAttribIPointer(I,W,j,B,Y):t.vertexAttribPointer(I,W,j,ne,B,Y)}function k(I,W,j,ne){if(i.isWebGL2===!1&&(I.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const B=ne.attributes,Y=j.getAttributes(),q=W.defaultAttributeValues;for(const ce in Y){const fe=Y[ce];if(fe.location>=0){let ee=B[ce];if(ee===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){const de=ee.normalized,Pe=ee.itemSize,He=n.get(ee);if(He===void 0)continue;const Ie=He.buffer,at=He.type,rt=He.bytesPerElement,Ze=i.isWebGL2===!0&&(at===t.INT||at===t.UNSIGNED_INT||ee.gpuType===Jv);if(ee.isInterleavedBufferAttribute){const je=ee.data,U=je.stride,oe=ee.offset;if(je.isInstancedInterleavedBuffer){for(let le=0;le<fe.locationSize;le++)N(fe.location+le,je.meshPerAttribute);I.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let le=0;le<fe.locationSize;le++)M(fe.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let le=0;le<fe.locationSize;le++)R(fe.location+le,Pe/fe.locationSize,at,de,U*rt,(oe+Pe/fe.locationSize*le)*rt,Ze)}else{if(ee.isInstancedBufferAttribute){for(let je=0;je<fe.locationSize;je++)N(fe.location+je,ee.meshPerAttribute);I.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let je=0;je<fe.locationSize;je++)M(fe.location+je);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let je=0;je<fe.locationSize;je++)R(fe.location+je,Pe/fe.locationSize,at,de,Pe*rt,Pe/fe.locationSize*je*rt,Ze)}}else if(q!==void 0){const de=q[ce];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(fe.location,de);break;case 3:t.vertexAttrib3fv(fe.location,de);break;case 4:t.vertexAttrib4fv(fe.location,de);break;default:t.vertexAttrib1fv(fe.location,de)}}}}A()}function b(){X();for(const I in a){const W=a[I];for(const j in W){const ne=W[j];for(const B in ne)x(ne[B].object),delete ne[B];delete W[j]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;const W=a[I.id];for(const j in W){const ne=W[j];for(const B in ne)x(ne[B].object),delete ne[B];delete W[j]}delete a[I.id]}function V(I){for(const W in a){const j=a[W];if(j[I.id]===void 0)continue;const ne=j[I.id];for(const B in ne)x(ne[B].object),delete ne[B];delete j[I.id]}}function X(){ie(),u=!0,c!==l&&(c=l,p(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:ie,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:M,disableUnusedAttributes:A}}function Hb(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){t.drawArrays(s,u,h),n.update(h,s,1)}function l(u,h,f){if(f===0)return;let p,x;if(r)p=t,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](s,u,h,f),n.update(h,s,f)}function c(u,h,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<f;x++)this.render(u[x],h[x]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,f);let x=0;for(let S=0;S<f;S++)x+=h[S];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Vb(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),S=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=o||e.has("OES_texture_float"),N=v&&M,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:N,maxSamples:A}}function Gb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ps,a=new Et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,S=h.clipIntersection,g=h.clipShadows,d=t.get(h);if(!r||x===null||x.length===0||s&&!g)s?u(null):c();else{const m=s?0:i,v=m*4;let M=d.clippingState||null;l.value=M,M=u(x,f,v,p);for(let N=0;N!==v;++N)M[N]=n[N];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,x){const S=h!==null?h.length:0;let g=null;if(S!==0){if(g=l.value,x!==!0||g===null){const d=p+S*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,M=p;v!==S;++v,M+=4)o.copy(h[v]).applyMatrix4(m,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function Wb(t){let e=new WeakMap;function n(o,a){return a===cu?o.mapping=Vo:a===lf&&(o.mapping=Go),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===cu||a===lf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new n1(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wp extends g_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Eo=4,Xg=[.125,.215,.35,.446,.526,.582],xs=20,Wd=new wp,$g=new Mt;let jd=null,Xd=0,$d=0;const ms=(1+Math.sqrt(5))/2,so=1/ms,Yg=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ms,so),new O(0,ms,-so),new O(so,0,ms),new O(-so,0,ms),new O(ms,so,0),new O(-ms,so,0)];class Ba{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){jd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jd,Xd,$d),e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vo||e.mapping===Go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:cl,format:Oi,colorSpace:Sr,depthBuffer:!1},r=qg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jb(s)),this._blurMaterial=Xb(s,e,n)}return r}_compileMaterial(e){const n=new ke(this._lodPlanes[0],e);this._renderer.compile(n,Wd)}_sceneToCubeUV(e,n,i,r){const a=new ni(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor($g),u.toneMapping=Zr,u.autoClear=!1;const p=new Ji({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),x=new ke(new pn,p);let S=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,S=!0):(p.color.copy($g),S=!0);for(let d=0;d<6;d++){const m=d%3;m===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):m===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;fc(r,m*v,d>2?v:0,v,v),u.setRenderTarget(r),S&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vo||e.mapping===Go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;fc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Wd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yg[(r-1)%Yg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ke(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xs-1),S=s/x,g=isFinite(s)?1+Math.floor(u*S):xs;g>xs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xs}`);const d=[];let m=0;for(let R=0;R<xs;++R){const k=R/S,b=Math.exp(-k*k/2);d.push(b),R===0?m+=b:R<g&&(m+=2*b)}for(let R=0;R<d.length;R++)d[R]=d[R]/m;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const M=this._sizeLods[r],N=3*M*(r>v-Eo?r-v+Eo:0),A=4*(this._cubeSize-M);fc(n,N,A,3*M,2*M),l.setRenderTarget(n),l.render(h,Wd)}}function jb(t){const e=[],n=[],i=[];let r=t;const s=t-Eo+1+Xg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Eo?l=Xg[o-t+Eo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,S=3,g=2,d=1,m=new Float32Array(S*x*p),v=new Float32Array(g*x*p),M=new Float32Array(d*x*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,k=A>2?0:-1,b=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];m.set(b,S*x*A),v.set(f,g*x*A);const T=[A,A,A,A,A,A];M.set(T,d*x*A)}const N=new vn;N.setAttribute("position",new bi(m,S)),N.setAttribute("uv",new bi(v,g)),N.setAttribute("faceIndex",new bi(M,d)),e.push(N),r>Eo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function qg(t,e,n){const i=new Ls(t,e,n);return i.texture.mapping=Du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Xb(t,e,n){const i=new Float32Array(xs),r=new O(0,1,0);return new Ns({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:qr,depthTest:!1,depthWrite:!1})}function Zg(){return new Ns({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:qr,depthTest:!1,depthWrite:!1})}function Kg(){return new Ns({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function Ep(){return`

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
	`}function $b(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===cu||l===lf,u=l===Vo||l===Go;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Ba(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){n===null&&(n=new Ba(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Yb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qb(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const S=f.morphAttributes[x];for(let g=0,d=S.length;g<d;g++)e.remove(S[g])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const x in p){const S=p[x];for(let g=0,d=S.length;g<d;g++)e.update(S[g],t.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,x=h.attributes.position;let S=0;if(p!==null){const m=p.array;S=p.version;for(let v=0,M=m.length;v<M;v+=3){const N=m[v+0],A=m[v+1],R=m[v+2];f.push(N,A,A,R,R,N)}}else if(x!==void 0){const m=x.array;S=x.version;for(let v=0,M=m.length/3-1;v<M;v+=3){const N=v+0,A=v+1,R=v+2;f.push(N,A,A,R,R,N)}}else return;const g=new(l_(f)?p_:f_)(f,1);g.version=S;const d=s.get(h);d&&e.remove(d),s.set(h,g)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Zb(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,x){t.drawElements(s,x,a,p*l),n.update(x,s,1)}function h(p,x,S){if(S===0)return;let g,d;if(r)g=t,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](s,x,a,p*l,S),n.update(x,s,S)}function f(p,x,S){if(S===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<S;d++)this.render(p[d]/l,x[d]);else{g.multiDrawElementsWEBGL(s,x,0,a,p,0,S);let d=0;for(let m=0;m<S;m++)d+=x[m];n.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Kb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Jb(t,e){return t[0]-e[0]}function Qb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function e2(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Kt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,S=x!==void 0?x.length:0;let g=s.get(u);if(g===void 0||g.count!==S){let W=function(){ie.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var p=W;g!==void 0&&g.texture.dispose();const v=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,N=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],k=u.morphAttributes.color||[];let b=0;v===!0&&(b=1),M===!0&&(b=2),N===!0&&(b=3);let T=u.attributes.position.count*b,V=1;T>e.maxTextureSize&&(V=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const X=new Float32Array(T*V*4*S),ie=new d_(X,T,V,S);ie.type=Br,ie.needsUpdate=!0;const I=b*4;for(let j=0;j<S;j++){const ne=A[j],B=R[j],Y=k[j],q=T*V*4*j;for(let ce=0;ce<ne.count;ce++){const fe=ce*I;v===!0&&(o.fromBufferAttribute(ne,ce),X[q+fe+0]=o.x,X[q+fe+1]=o.y,X[q+fe+2]=o.z,X[q+fe+3]=0),M===!0&&(o.fromBufferAttribute(B,ce),X[q+fe+4]=o.x,X[q+fe+5]=o.y,X[q+fe+6]=o.z,X[q+fe+7]=0),N===!0&&(o.fromBufferAttribute(Y,ce),X[q+fe+8]=o.x,X[q+fe+9]=o.y,X[q+fe+10]=o.z,X[q+fe+11]=Y.itemSize===4?o.w:1)}}g={count:S,texture:ie,size:new ye(T,V)},s.set(u,g),u.addEventListener("dispose",W)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const m=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(t,"morphTargetBaseInfluence",m),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const x=f===void 0?0:f.length;let S=i[u.id];if(S===void 0||S.length!==x){S=[];for(let M=0;M<x;M++)S[M]=[M,0];i[u.id]=S}for(let M=0;M<x;M++){const N=S[M];N[0]=M,N[1]=f[M]}S.sort(Qb);for(let M=0;M<8;M++)M<x&&S[M][1]?(a[M][0]=S[M][0],a[M][1]=S[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Jb);const g=u.morphAttributes.position,d=u.morphAttributes.normal;let m=0;for(let M=0;M<8;M++){const N=a[M],A=N[0],R=N[1];A!==Number.MAX_SAFE_INTEGER&&R?(g&&u.getAttribute("morphTarget"+M)!==g[A]&&u.setAttribute("morphTarget"+M,g[A]),d&&u.getAttribute("morphNormal"+M)!==d[A]&&u.setAttribute("morphNormal"+M,d[A]),r[M]=R,m+=R):(g&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),d&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const v=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function t2(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class __ extends qn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Es,u!==Es&&u!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Es&&(i=zr),i===void 0&&u===Wo&&(i=ws),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const y_=new qn,S_=new __(1,1);S_.compareFunction=a_;const M_=new d_,w_=new zw,E_=new x_,Jg=[],Qg=[],e0=new Float32Array(16),t0=new Float32Array(9),n0=new Float32Array(4);function Ko(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Jg[r];if(s===void 0&&(s=new Float32Array(r),Jg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function _n(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function yn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fu(t,e){let n=Qg[e];n===void 0&&(n=new Int32Array(e),Qg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function n2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2fv(this.addr,e),yn(n,e)}}function r2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;t.uniform3fv(this.addr,e),yn(n,e)}}function s2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4fv(this.addr,e),yn(n,e)}}function o2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,i))return;n0.set(i),t.uniformMatrix2fv(this.addr,!1,n0),yn(n,i)}}function a2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,i))return;t0.set(i),t.uniformMatrix3fv(this.addr,!1,t0),yn(n,i)}}function l2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,i))return;e0.set(i),t.uniformMatrix4fv(this.addr,!1,e0),yn(n,i)}}function c2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function u2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2iv(this.addr,e),yn(n,e)}}function d2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;t.uniform3iv(this.addr,e),yn(n,e)}}function h2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4iv(this.addr,e),yn(n,e)}}function f2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function p2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2uiv(this.addr,e),yn(n,e)}}function m2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;t.uniform3uiv(this.addr,e),yn(n,e)}}function g2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4uiv(this.addr,e),yn(n,e)}}function x2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?S_:y_;n.setTexture2D(e||s,r)}function v2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||w_,r)}function _2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||E_,r)}function y2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||M_,r)}function S2(t){switch(t){case 5126:return n2;case 35664:return i2;case 35665:return r2;case 35666:return s2;case 35674:return o2;case 35675:return a2;case 35676:return l2;case 5124:case 35670:return c2;case 35667:case 35671:return u2;case 35668:case 35672:return d2;case 35669:case 35673:return h2;case 5125:return f2;case 36294:return p2;case 36295:return m2;case 36296:return g2;case 35678:case 36198:case 36298:case 36306:case 35682:return x2;case 35679:case 36299:case 36307:return v2;case 35680:case 36300:case 36308:case 36293:return _2;case 36289:case 36303:case 36311:case 36292:return y2}}function M2(t,e){t.uniform1fv(this.addr,e)}function w2(t,e){const n=Ko(e,this.size,2);t.uniform2fv(this.addr,n)}function E2(t,e){const n=Ko(e,this.size,3);t.uniform3fv(this.addr,n)}function b2(t,e){const n=Ko(e,this.size,4);t.uniform4fv(this.addr,n)}function T2(t,e){const n=Ko(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function A2(t,e){const n=Ko(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function C2(t,e){const n=Ko(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function R2(t,e){t.uniform1iv(this.addr,e)}function P2(t,e){t.uniform2iv(this.addr,e)}function L2(t,e){t.uniform3iv(this.addr,e)}function N2(t,e){t.uniform4iv(this.addr,e)}function I2(t,e){t.uniform1uiv(this.addr,e)}function D2(t,e){t.uniform2uiv(this.addr,e)}function U2(t,e){t.uniform3uiv(this.addr,e)}function O2(t,e){t.uniform4uiv(this.addr,e)}function F2(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||y_,s[o])}function k2(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||w_,s[o])}function z2(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||E_,s[o])}function B2(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||M_,s[o])}function H2(t){switch(t){case 5126:return M2;case 35664:return w2;case 35665:return E2;case 35666:return b2;case 35674:return T2;case 35675:return A2;case 35676:return C2;case 5124:case 35670:return R2;case 35667:case 35671:return P2;case 35668:case 35672:return L2;case 35669:case 35673:return N2;case 5125:return I2;case 36294:return D2;case 36295:return U2;case 36296:return O2;case 35678:case 36198:case 36298:case 36306:case 35682:return F2;case 35679:case 36299:case 36307:return k2;case 35680:case 36300:case 36308:case 36293:return z2;case 36289:case 36303:case 36311:case 36292:return B2}}class V2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=S2(n.type)}}class G2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=H2(n.type)}}class W2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function i0(t,e){t.seq.push(e),t.map[e.id]=e}function j2(t,e,n){const i=t.name,r=i.length;for(Yd.lastIndex=0;;){const s=Yd.exec(i),o=Yd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){i0(n,c===void 0?new V2(a,t,e):new G2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new W2(a),i0(n,h)),n=h}}}class Uc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);j2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function r0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const X2=37297;let $2=0;function Y2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function q2(t){const e=Ft.getPrimaries(Ft.workingColorSpace),n=Ft.getPrimaries(t);let i;switch(e===n?i="":e===hu&&n===du?i="LinearDisplayP3ToLinearSRGB":e===du&&n===hu&&(i="LinearSRGBToLinearDisplayP3"),t){case Sr:case Uu:return[i,"LinearTransferOETF"];case qt:case vp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function s0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Y2(t.getShaderSource(e),o)}else return r}function Z2(t,e){const n=q2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function K2(t,e){let n;switch(e){case ZM:n="Linear";break;case KM:n="Reinhard";break;case JM:n="OptimizedCineon";break;case Kv:n="ACESFilmic";break;case ew:n="AgX";break;case QM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function J2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bo).join(`
`)}function Q2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bo).join(`
`)}function eT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function tT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function bo(t){return t!==""}function o0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function a0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nT=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(t){return t.replace(nT,rT)}const iT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rT(t,e){let n=St[e];if(n===void 0){const i=iT.get(e);if(i!==void 0)n=St[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pf(n)}const sT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l0(t){return t.replace(sT,oT)}function oT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function c0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Yv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===qv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===cr&&(e="SHADOWMAP_TYPE_VSM"),e}function lT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Vo:case Go:e="ENVMAP_TYPE_CUBE";break;case Du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Go:e="ENVMAP_MODE_REFRACTION";break}return e}function uT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Zv:e="ENVMAP_BLENDING_MULTIPLY";break;case YM:e="ENVMAP_BLENDING_MIX";break;case qM:e="ENVMAP_BLENDING_ADD";break}return e}function dT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function hT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=aT(n),c=lT(n),u=cT(n),h=uT(n),f=dT(n),p=n.isWebGL2?"":J2(n),x=Q2(n),S=eT(s),g=r.createProgram();let d,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(bo).join(`
`),d.length>0&&(d+=`
`),m=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(bo).join(`
`),m.length>0&&(m+=`
`)):(d=[c0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),m=[p,c0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zr?"#define TONE_MAPPING":"",n.toneMapping!==Zr?St.tonemapping_pars_fragment:"",n.toneMapping!==Zr?K2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,Z2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bo).join(`
`)),o=pf(o),o=o0(o,n),o=a0(o,n),a=pf(a),a=o0(a,n),a=a0(a,n),o=l0(o),a=l0(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=v+d+o,N=v+m+a,A=r0(r,r.VERTEX_SHADER,M),R=r0(r,r.FRAGMENT_SHADER,N);r.attachShader(g,A),r.attachShader(g,R),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function k(X){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(g).trim(),I=r.getShaderInfoLog(A).trim(),W=r.getShaderInfoLog(R).trim();let j=!0,ne=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,A,R);else{const B=s0(r,A,"vertex"),Y=s0(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+B+`
`+Y)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(I===""||W==="")&&(ne=!1);ne&&(X.diagnostics={runnable:j,programLog:ie,vertexShader:{log:I,prefix:d},fragmentShader:{log:W,prefix:m}})}r.deleteShader(A),r.deleteShader(R),b=new Uc(r,g),T=tT(r,g)}let b;this.getUniforms=function(){return b===void 0&&k(this),b};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(g,X2)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=R,this}let fT=0;class pT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new mT(e),n.set(e,i)),i}}class mT{constructor(e){this.id=fT++,this.code=e,this.usedTimes=0}}function gT(t,e,n,i,r,s,o){const a=new Sp,l=new pT,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(b){return b===0?"uv":`uv${b}`}function g(b,T,V,X,ie){const I=X.fog,W=ie.geometry,j=b.isMeshStandardMaterial?X.environment:null,ne=(b.isMeshStandardMaterial?n:e).get(b.envMap||j),B=ne&&ne.mapping===Du?ne.image.height:null,Y=x[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ce=q!==void 0?q.length:0;let fe=0;W.morphAttributes.position!==void 0&&(fe=1),W.morphAttributes.normal!==void 0&&(fe=2),W.morphAttributes.color!==void 0&&(fe=3);let ee,de,Pe,He;if(Y){const Sn=qi[Y];ee=Sn.vertexShader,de=Sn.fragmentShader}else ee=b.vertexShader,de=b.fragmentShader,l.update(b),Pe=l.getVertexShaderID(b),He=l.getFragmentShaderID(b);const Ie=t.getRenderTarget(),at=ie.isInstancedMesh===!0,rt=ie.isBatchedMesh===!0,Ze=!!b.map,je=!!b.matcap,U=!!ne,oe=!!b.aoMap,le=!!b.lightMap,me=!!b.bumpMap,ae=!!b.normalMap,et=!!b.displacementMap,De=!!b.emissiveMap,C=!!b.metalnessMap,E=!!b.roughnessMap,H=b.anisotropy>0,ge=b.clearcoat>0,xe=b.iridescence>0,pe=b.sheen>0,We=b.transmission>0,Te=H&&!!b.anisotropyMap,ze=ge&&!!b.clearcoatMap,Ue=ge&&!!b.clearcoatNormalMap,dt=ge&&!!b.clearcoatRoughnessMap,re=xe&&!!b.iridescenceMap,wt=xe&&!!b.iridescenceThicknessMap,ht=pe&&!!b.sheenColorMap,ft=pe&&!!b.sheenRoughnessMap,Ye=!!b.specularMap,Ve=!!b.specularColorMap,it=!!b.specularIntensityMap,Ct=We&&!!b.transmissionMap,Ht=We&&!!b.thicknessMap,gt=!!b.gradientMap,be=!!b.alphaMap,F=b.alphaTest>0,Le=!!b.alphaHash,Ce=!!b.extensions,ct=!!W.attributes.uv1,st=!!W.attributes.uv2,Rt=!!W.attributes.uv3;let Tt=Zr;return b.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Tt=t.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:ee,fragmentShader:de,defines:b.defines,customVertexShaderID:Pe,customFragmentShaderID:He,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:rt,instancing:at,instancingColor:at&&ie.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ie===null?t.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Sr,map:Ze,matcap:je,envMap:U,envMapMode:U&&ne.mapping,envMapCubeUVHeight:B,aoMap:oe,lightMap:le,bumpMap:me,normalMap:ae,displacementMap:f&&et,emissiveMap:De,normalMapObjectSpace:ae&&b.normalMapType===hw,normalMapTangentSpace:ae&&b.normalMapType===o_,metalnessMap:C,roughnessMap:E,anisotropy:H,anisotropyMap:Te,clearcoat:ge,clearcoatMap:ze,clearcoatNormalMap:Ue,clearcoatRoughnessMap:dt,iridescence:xe,iridescenceMap:re,iridescenceThicknessMap:wt,sheen:pe,sheenColorMap:ht,sheenRoughnessMap:ft,specularMap:Ye,specularColorMap:Ve,specularIntensityMap:it,transmission:We,transmissionMap:Ct,thicknessMap:Ht,gradientMap:gt,opaque:b.transparent===!1&&b.blending===Io,alphaMap:be,alphaTest:F,alphaHash:Le,combine:b.combine,mapUv:Ze&&S(b.map.channel),aoMapUv:oe&&S(b.aoMap.channel),lightMapUv:le&&S(b.lightMap.channel),bumpMapUv:me&&S(b.bumpMap.channel),normalMapUv:ae&&S(b.normalMap.channel),displacementMapUv:et&&S(b.displacementMap.channel),emissiveMapUv:De&&S(b.emissiveMap.channel),metalnessMapUv:C&&S(b.metalnessMap.channel),roughnessMapUv:E&&S(b.roughnessMap.channel),anisotropyMapUv:Te&&S(b.anisotropyMap.channel),clearcoatMapUv:ze&&S(b.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&S(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&S(b.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&S(b.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&S(b.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&S(b.sheenColorMap.channel),sheenRoughnessMapUv:ft&&S(b.sheenRoughnessMap.channel),specularMapUv:Ye&&S(b.specularMap.channel),specularColorMapUv:Ve&&S(b.specularColorMap.channel),specularIntensityMapUv:it&&S(b.specularIntensityMap.channel),transmissionMapUv:Ct&&S(b.transmissionMap.channel),thicknessMapUv:Ht&&S(b.thicknessMap.channel),alphaMapUv:be&&S(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ae||H),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:ct,vertexUv2s:st,vertexUv3s:Rt,pointsUvs:ie.isPoints===!0&&!!W.attributes.uv&&(Ze||be),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ie.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Tt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ze&&b.map.isVideoTexture===!0&&Ft.getTransfer(b.map.colorSpace)===Xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xn,flipSided:b.side===Yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Ce&&b.extensions.derivatives===!0,extensionFragDepth:Ce&&b.extensions.fragDepth===!0,extensionDrawBuffers:Ce&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ce&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ce&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)T.push(V),T.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(m(T,b),v(T,b),T.push(t.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function m(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function v(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function M(b){const T=x[b.type];let V;if(T){const X=qi[T];V=Jw.clone(X.uniforms)}else V=b.uniforms;return V}function N(b,T){let V;for(let X=0,ie=c.length;X<ie;X++){const I=c[X];if(I.cacheKey===T){V=I,++V.usedTimes;break}}return V===void 0&&(V=new hT(t,T,b,s),c.push(V)),V}function A(b){if(--b.usedTimes===0){const T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function k(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:M,acquireProgram:N,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:k}}function xT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function vT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function u0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function d0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,x,S,g){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:x,renderOrder:h.renderOrder,z:S,group:g},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=h.renderOrder,d.z=S,d.group=g),e++,d}function a(h,f,p,x,S,g){const d=o(h,f,p,x,S,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,x,S,g){const d=o(h,f,p,x,S,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||vT),i.length>1&&i.sort(f||u0),r.length>1&&r.sort(f||u0)}function u(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function _T(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new d0,t.set(i,[o])):r>=s.length?(o=new d0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function yT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Mt};break;case"SpotLight":n={position:new O,direction:new O,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":n={color:new Mt,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function ST(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let MT=0;function wT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ET(t,e){const n=new yT,i=ST(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,o=new rn,a=new rn;function l(u,h){let f=0,p=0,x=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let S=0,g=0,d=0,m=0,v=0,M=0,N=0,A=0,R=0,k=0,b=0;u.sort(wT);const T=h===!0?Math.PI:1;for(let X=0,ie=u.length;X<ie;X++){const I=u[X],W=I.color,j=I.intensity,ne=I.distance,B=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=W.r*j*T,p+=W.g*j*T,x+=W.b*j*T;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(I.sh.coefficients[Y],j);b++}else if(I.isDirectionalLight){const Y=n.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const q=I.shadow,ce=i.get(I);ce.shadowBias=q.bias,ce.shadowNormalBias=q.normalBias,ce.shadowRadius=q.radius,ce.shadowMapSize=q.mapSize,r.directionalShadow[S]=ce,r.directionalShadowMap[S]=B,r.directionalShadowMatrix[S]=I.shadow.matrix,M++}r.directional[S]=Y,S++}else if(I.isSpotLight){const Y=n.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(W).multiplyScalar(j*T),Y.distance=ne,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,r.spot[d]=Y;const q=I.shadow;if(I.map&&(r.spotLightMap[R]=I.map,R++,q.updateMatrices(I),I.castShadow&&k++),r.spotLightMatrix[d]=q.matrix,I.castShadow){const ce=i.get(I);ce.shadowBias=q.bias,ce.shadowNormalBias=q.normalBias,ce.shadowRadius=q.radius,ce.shadowMapSize=q.mapSize,r.spotShadow[d]=ce,r.spotShadowMap[d]=B,A++}d++}else if(I.isRectAreaLight){const Y=n.get(I);Y.color.copy(W).multiplyScalar(j),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),r.rectArea[m]=Y,m++}else if(I.isPointLight){const Y=n.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*T),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const q=I.shadow,ce=i.get(I);ce.shadowBias=q.bias,ce.shadowNormalBias=q.normalBias,ce.shadowRadius=q.radius,ce.shadowMapSize=q.mapSize,ce.shadowCameraNear=q.camera.near,ce.shadowCameraFar=q.camera.far,r.pointShadow[g]=ce,r.pointShadowMap[g]=B,r.pointShadowMatrix[g]=I.shadow.matrix,N++}r.point[g]=Y,g++}else if(I.isHemisphereLight){const Y=n.get(I);Y.skyColor.copy(I.color).multiplyScalar(j*T),Y.groundColor.copy(I.groundColor).multiplyScalar(j*T),r.hemi[v]=Y,v++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==S||V.pointLength!==g||V.spotLength!==d||V.rectAreaLength!==m||V.hemiLength!==v||V.numDirectionalShadows!==M||V.numPointShadows!==N||V.numSpotShadows!==A||V.numSpotMaps!==R||V.numLightProbes!==b)&&(r.directional.length=S,r.spot.length=d,r.rectArea.length=m,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=A+R-k,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=b,V.directionalLength=S,V.pointLength=g,V.spotLength=d,V.rectAreaLength=m,V.hemiLength=v,V.numDirectionalShadows=M,V.numPointShadows=N,V.numSpotShadows=A,V.numSpotMaps=R,V.numLightProbes=b,r.version=MT++)}function c(u,h){let f=0,p=0,x=0,S=0,g=0;const d=h.matrixWorldInverse;for(let m=0,v=u.length;m<v;m++){const M=u[m];if(M.isDirectionalLight){const N=r.directional[f];N.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(d),f++}else if(M.isSpotLight){const N=r.spot[x];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(d),N.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(d),x++}else if(M.isRectAreaLight){const N=r.rectArea[S];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),N.halfWidth.set(M.width*.5,0,0),N.halfHeight.set(0,M.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const N=r.point[p];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(d),p++}else if(M.isHemisphereLight){const N=r.hemi[g];N.direction.setFromMatrixPosition(M.matrixWorld),N.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:r}}function h0(t,e){const n=new ET(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function bT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new h0(t,e),n.set(s,[l])):o>=a.length?(l=new h0(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class TT extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AT extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RT=`uniform sampler2D shadow_pass;
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
}`;function PT(t,e,n){let i=new Mp;const r=new ye,s=new ye,o=new Kt,a=new TT({depthPacking:dw}),l=new AT,c={},u=n.maxTextureSize,h={[ts]:Yn,[Yn]:ts,[Xn]:Xn},f=new Ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:CT,fragmentShader:RT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new vn;x.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ke(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yv;let d=this.type;this.render=function(A,R,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const b=t.getRenderTarget(),T=t.getActiveCubeFace(),V=t.getActiveMipmapLevel(),X=t.state;X.setBlending(qr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const ie=d!==cr&&this.type===cr,I=d===cr&&this.type!==cr;for(let W=0,j=A.length;W<j;W++){const ne=A[W],B=ne.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Y=B.getFrameExtents();if(r.multiply(Y),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,B.mapSize.y=s.y)),B.map===null||ie===!0||I===!0){const ce=this.type!==cr?{minFilter:Wn,magFilter:Wn}:{};B.map!==null&&B.map.dispose(),B.map=new Ls(r.x,r.y,ce),B.map.texture.name=ne.name+".shadowMap",B.camera.updateProjectionMatrix()}t.setRenderTarget(B.map),t.clear();const q=B.getViewportCount();for(let ce=0;ce<q;ce++){const fe=B.getViewport(ce);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),X.viewport(o),B.updateMatrices(ne,ce),i=B.getFrustum(),M(R,k,B.camera,ne,this.type)}B.isPointLightShadow!==!0&&this.type===cr&&m(B,k),B.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(b,T,V)};function m(A,R){const k=e.update(S);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ls(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,k,f,S,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,k,p,S,null)}function v(A,R,k,b){let T=null;const V=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(V!==void 0)T=V;else if(T=k.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const X=T.uuid,ie=R.uuid;let I=c[X];I===void 0&&(I={},c[X]=I);let W=I[ie];W===void 0&&(W=T.clone(),I[ie]=W,R.addEventListener("dispose",N)),T=W}if(T.visible=R.visible,T.wireframe=R.wireframe,b===cr?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:h[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const X=t.properties.get(T);X.light=k}return T}function M(A,R,k,b,T){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===cr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);const ie=e.update(A),I=A.material;if(Array.isArray(I)){const W=ie.groups;for(let j=0,ne=W.length;j<ne;j++){const B=W[j],Y=I[B.materialIndex];if(Y&&Y.visible){const q=v(A,Y,b,T);A.onBeforeShadow(t,A,R,k,ie,q,B),t.renderBufferDirect(k,null,ie,q,A,B),A.onAfterShadow(t,A,R,k,ie,q,B)}}}else if(I.visible){const W=v(A,I,b,T);A.onBeforeShadow(t,A,R,k,ie,W,null),t.renderBufferDirect(k,null,ie,W,A,null),A.onAfterShadow(t,A,R,k,ie,W,null)}}const X=A.children;for(let ie=0,I=X.length;ie<I;ie++)M(X[ie],R,k,b,T)}function N(A){A.target.removeEventListener("dispose",N);for(const k in c){const b=c[k],T=A.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function LT(t,e,n){const i=n.isWebGL2;function r(){let F=!1;const Le=new Kt;let Ce=null;const ct=new Kt(0,0,0,0);return{setMask:function(st){Ce!==st&&!F&&(t.colorMask(st,st,st,st),Ce=st)},setLocked:function(st){F=st},setClear:function(st,Rt,Tt,un,Sn){Sn===!0&&(st*=un,Rt*=un,Tt*=un),Le.set(st,Rt,Tt,un),ct.equals(Le)===!1&&(t.clearColor(st,Rt,Tt,un),ct.copy(Le))},reset:function(){F=!1,Ce=null,ct.set(-1,0,0,0)}}}function s(){let F=!1,Le=null,Ce=null,ct=null;return{setTest:function(st){st?rt(t.DEPTH_TEST):Ze(t.DEPTH_TEST)},setMask:function(st){Le!==st&&!F&&(t.depthMask(st),Le=st)},setFunc:function(st){if(Ce!==st){switch(st){case HM:t.depthFunc(t.NEVER);break;case VM:t.depthFunc(t.ALWAYS);break;case GM:t.depthFunc(t.LESS);break;case lu:t.depthFunc(t.LEQUAL);break;case WM:t.depthFunc(t.EQUAL);break;case jM:t.depthFunc(t.GEQUAL);break;case XM:t.depthFunc(t.GREATER);break;case $M:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ce=st}},setLocked:function(st){F=st},setClear:function(st){ct!==st&&(t.clearDepth(st),ct=st)},reset:function(){F=!1,Le=null,Ce=null,ct=null}}}function o(){let F=!1,Le=null,Ce=null,ct=null,st=null,Rt=null,Tt=null,un=null,Sn=null;return{setTest:function(Ut){F||(Ut?rt(t.STENCIL_TEST):Ze(t.STENCIL_TEST))},setMask:function(Ut){Le!==Ut&&!F&&(t.stencilMask(Ut),Le=Ut)},setFunc:function(Ut,An,Ke){(Ce!==Ut||ct!==An||st!==Ke)&&(t.stencilFunc(Ut,An,Ke),Ce=Ut,ct=An,st=Ke)},setOp:function(Ut,An,Ke){(Rt!==Ut||Tt!==An||un!==Ke)&&(t.stencilOp(Ut,An,Ke),Rt=Ut,Tt=An,un=Ke)},setLocked:function(Ut){F=Ut},setClear:function(Ut){Sn!==Ut&&(t.clearStencil(Ut),Sn=Ut)},reset:function(){F=!1,Le=null,Ce=null,ct=null,st=null,Rt=null,Tt=null,un=null,Sn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},x=new WeakMap,S=[],g=null,d=!1,m=null,v=null,M=null,N=null,A=null,R=null,k=null,b=new Mt(0,0,0),T=0,V=!1,X=null,ie=null,I=null,W=null,j=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=Y>=2);let ce=null,fe={};const ee=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),Pe=new Kt().fromArray(ee),He=new Kt().fromArray(de);function Ie(F,Le,Ce,ct){const st=new Uint8Array(4),Rt=t.createTexture();t.bindTexture(F,Rt),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Tt=0;Tt<Ce;Tt++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(Le,0,t.RGBA,1,1,ct,0,t.RGBA,t.UNSIGNED_BYTE,st):t.texImage2D(Le+Tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,st);return Rt}const at={};at[t.TEXTURE_2D]=Ie(t.TEXTURE_2D,t.TEXTURE_2D,1),at[t.TEXTURE_CUBE_MAP]=Ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(at[t.TEXTURE_2D_ARRAY]=Ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),at[t.TEXTURE_3D]=Ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),rt(t.DEPTH_TEST),l.setFunc(lu),De(!1),C(qm),rt(t.CULL_FACE),ae(qr);function rt(F){f[F]!==!0&&(t.enable(F),f[F]=!0)}function Ze(F){f[F]!==!1&&(t.disable(F),f[F]=!1)}function je(F,Le){return p[F]!==Le?(t.bindFramebuffer(F,Le),p[F]=Le,i&&(F===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Le),F===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Le)),!0):!1}function U(F,Le){let Ce=S,ct=!1;if(F)if(Ce=x.get(Le),Ce===void 0&&(Ce=[],x.set(Le,Ce)),F.isWebGLMultipleRenderTargets){const st=F.texture;if(Ce.length!==st.length||Ce[0]!==t.COLOR_ATTACHMENT0){for(let Rt=0,Tt=st.length;Rt<Tt;Rt++)Ce[Rt]=t.COLOR_ATTACHMENT0+Rt;Ce.length=st.length,ct=!0}}else Ce[0]!==t.COLOR_ATTACHMENT0&&(Ce[0]=t.COLOR_ATTACHMENT0,ct=!0);else Ce[0]!==t.BACK&&(Ce[0]=t.BACK,ct=!0);ct&&(n.isWebGL2?t.drawBuffers(Ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ce))}function oe(F){return g!==F?(t.useProgram(F),g=F,!0):!1}const le={[gs]:t.FUNC_ADD,[TM]:t.FUNC_SUBTRACT,[AM]:t.FUNC_REVERSE_SUBTRACT};if(i)le[Qm]=t.MIN,le[eg]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(le[Qm]=F.MIN_EXT,le[eg]=F.MAX_EXT)}const me={[CM]:t.ZERO,[RM]:t.ONE,[PM]:t.SRC_COLOR,[of]:t.SRC_ALPHA,[OM]:t.SRC_ALPHA_SATURATE,[DM]:t.DST_COLOR,[NM]:t.DST_ALPHA,[LM]:t.ONE_MINUS_SRC_COLOR,[af]:t.ONE_MINUS_SRC_ALPHA,[UM]:t.ONE_MINUS_DST_COLOR,[IM]:t.ONE_MINUS_DST_ALPHA,[FM]:t.CONSTANT_COLOR,[kM]:t.ONE_MINUS_CONSTANT_COLOR,[zM]:t.CONSTANT_ALPHA,[BM]:t.ONE_MINUS_CONSTANT_ALPHA};function ae(F,Le,Ce,ct,st,Rt,Tt,un,Sn,Ut){if(F===qr){d===!0&&(Ze(t.BLEND),d=!1);return}if(d===!1&&(rt(t.BLEND),d=!0),F!==bM){if(F!==m||Ut!==V){if((v!==gs||A!==gs)&&(t.blendEquation(t.FUNC_ADD),v=gs,A=gs),Ut)switch(F){case Io:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zm:t.blendFunc(t.ONE,t.ONE);break;case Km:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Io:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Km:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,N=null,R=null,k=null,b.set(0,0,0),T=0,m=F,V=Ut}return}st=st||Le,Rt=Rt||Ce,Tt=Tt||ct,(Le!==v||st!==A)&&(t.blendEquationSeparate(le[Le],le[st]),v=Le,A=st),(Ce!==M||ct!==N||Rt!==R||Tt!==k)&&(t.blendFuncSeparate(me[Ce],me[ct],me[Rt],me[Tt]),M=Ce,N=ct,R=Rt,k=Tt),(un.equals(b)===!1||Sn!==T)&&(t.blendColor(un.r,un.g,un.b,Sn),b.copy(un),T=Sn),m=F,V=!1}function et(F,Le){F.side===Xn?Ze(t.CULL_FACE):rt(t.CULL_FACE);let Ce=F.side===Yn;Le&&(Ce=!Ce),De(Ce),F.blending===Io&&F.transparent===!1?ae(qr):ae(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const ct=F.stencilWrite;c.setTest(ct),ct&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),H(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?rt(t.SAMPLE_ALPHA_TO_COVERAGE):Ze(t.SAMPLE_ALPHA_TO_COVERAGE)}function De(F){X!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),X=F)}function C(F){F!==wM?(rt(t.CULL_FACE),F!==ie&&(F===qm?t.cullFace(t.BACK):F===EM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ze(t.CULL_FACE),ie=F}function E(F){F!==I&&(B&&t.lineWidth(F),I=F)}function H(F,Le,Ce){F?(rt(t.POLYGON_OFFSET_FILL),(W!==Le||j!==Ce)&&(t.polygonOffset(Le,Ce),W=Le,j=Ce)):Ze(t.POLYGON_OFFSET_FILL)}function ge(F){F?rt(t.SCISSOR_TEST):Ze(t.SCISSOR_TEST)}function xe(F){F===void 0&&(F=t.TEXTURE0+ne-1),ce!==F&&(t.activeTexture(F),ce=F)}function pe(F,Le,Ce){Ce===void 0&&(ce===null?Ce=t.TEXTURE0+ne-1:Ce=ce);let ct=fe[Ce];ct===void 0&&(ct={type:void 0,texture:void 0},fe[Ce]=ct),(ct.type!==F||ct.texture!==Le)&&(ce!==Ce&&(t.activeTexture(Ce),ce=Ce),t.bindTexture(F,Le||at[F]),ct.type=F,ct.texture=Le)}function We(){const F=fe[ce];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ye(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(F){Pe.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Pe.copy(F))}function Ct(F){He.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),He.copy(F))}function Ht(F,Le){let Ce=h.get(Le);Ce===void 0&&(Ce=new WeakMap,h.set(Le,Ce));let ct=Ce.get(F);ct===void 0&&(ct=t.getUniformBlockIndex(Le,F.name),Ce.set(F,ct))}function gt(F,Le){const ct=h.get(Le).get(F);u.get(Le)!==ct&&(t.uniformBlockBinding(Le,ct,F.__bindingPointIndex),u.set(Le,ct))}function be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},ce=null,fe={},p={},x=new WeakMap,S=[],g=null,d=!1,m=null,v=null,M=null,N=null,A=null,R=null,k=null,b=new Mt(0,0,0),T=0,V=!1,X=null,ie=null,I=null,W=null,j=null,Pe.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:rt,disable:Ze,bindFramebuffer:je,drawBuffers:U,useProgram:oe,setBlending:ae,setMaterial:et,setFlipSided:De,setCullFace:C,setLineWidth:E,setPolygonOffset:H,setScissorTest:ge,activeTexture:xe,bindTexture:pe,unbindTexture:We,compressedTexImage2D:Te,compressedTexImage3D:ze,texImage2D:Ye,texImage3D:Ve,updateUBOMapping:Ht,uniformBlockBinding:gt,texStorage2D:ht,texStorage3D:ft,texSubImage2D:Ue,texSubImage3D:dt,compressedTexSubImage2D:re,compressedTexSubImage3D:wt,scissor:it,viewport:Ct,reset:be}}function NT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,E){return p?new OffscreenCanvas(C,E):dl("canvas")}function S(C,E,H,ge){let xe=1;if((C.width>ge||C.height>ge)&&(xe=ge/Math.max(C.width,C.height)),xe<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const pe=E?pu:Math.floor,We=pe(xe*C.width),Te=pe(xe*C.height);h===void 0&&(h=x(We,Te));const ze=H?x(We,Te):h;return ze.width=We,ze.height=Te,ze.getContext("2d").drawImage(C,0,0,We,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+We+"x"+Te+")."),ze}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return ff(C.width)&&ff(C.height)}function d(C){return a?!1:C.wrapS!==di||C.wrapT!==di||C.minFilter!==Wn&&C.minFilter!==jn}function m(C,E){return C.generateMipmaps&&E&&C.minFilter!==Wn&&C.minFilter!==jn}function v(C){t.generateMipmap(C)}function M(C,E,H,ge,xe=!1){if(a===!1)return E;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe=E;if(E===t.RED&&(H===t.FLOAT&&(pe=t.R32F),H===t.HALF_FLOAT&&(pe=t.R16F),H===t.UNSIGNED_BYTE&&(pe=t.R8)),E===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(pe=t.R8UI),H===t.UNSIGNED_SHORT&&(pe=t.R16UI),H===t.UNSIGNED_INT&&(pe=t.R32UI),H===t.BYTE&&(pe=t.R8I),H===t.SHORT&&(pe=t.R16I),H===t.INT&&(pe=t.R32I)),E===t.RG&&(H===t.FLOAT&&(pe=t.RG32F),H===t.HALF_FLOAT&&(pe=t.RG16F),H===t.UNSIGNED_BYTE&&(pe=t.RG8)),E===t.RGBA){const We=xe?uu:Ft.getTransfer(ge);H===t.FLOAT&&(pe=t.RGBA32F),H===t.HALF_FLOAT&&(pe=t.RGBA16F),H===t.UNSIGNED_BYTE&&(pe=We===Xt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(pe=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(pe=t.RGB5_A1)}return(pe===t.R16F||pe===t.R32F||pe===t.RG16F||pe===t.RG32F||pe===t.RGBA16F||pe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(C,E,H){return m(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==Wn&&C.minFilter!==jn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function A(C){return C===Wn||C===tg||C===Sd?t.NEAREST:t.LINEAR}function R(C){const E=C.target;E.removeEventListener("dispose",R),b(E),E.isVideoTexture&&u.delete(E)}function k(C){const E=C.target;E.removeEventListener("dispose",k),V(E)}function b(C){const E=i.get(C);if(E.__webglInit===void 0)return;const H=C.source,ge=f.get(H);if(ge){const xe=ge[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&T(C),Object.keys(ge).length===0&&f.delete(H)}i.remove(C)}function T(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const H=C.source,ge=f.get(H);delete ge[E.__cacheKey],o.memory.textures--}function V(C){const E=C.texture,H=i.get(C),ge=i.get(E);if(ge.__webglTexture!==void 0&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(H.__webglFramebuffer[xe]))for(let pe=0;pe<H.__webglFramebuffer[xe].length;pe++)t.deleteFramebuffer(H.__webglFramebuffer[xe][pe]);else t.deleteFramebuffer(H.__webglFramebuffer[xe]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[xe])}else{if(Array.isArray(H.__webglFramebuffer))for(let xe=0;xe<H.__webglFramebuffer.length;xe++)t.deleteFramebuffer(H.__webglFramebuffer[xe]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let xe=0;xe<H.__webglColorRenderbuffer.length;xe++)H.__webglColorRenderbuffer[xe]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[xe]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let xe=0,pe=E.length;xe<pe;xe++){const We=i.get(E[xe]);We.__webglTexture&&(t.deleteTexture(We.__webglTexture),o.memory.textures--),i.remove(E[xe])}i.remove(E),i.remove(C)}let X=0;function ie(){X=0}function I(){const C=X;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),X+=1,C}function W(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function j(C,E){const H=i.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const ge=C.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(H,C,E);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+E)}function ne(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Pe(H,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+E)}function B(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Pe(H,C,E);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+E)}function Y(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){He(H,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+E)}const q={[cf]:t.REPEAT,[di]:t.CLAMP_TO_EDGE,[uf]:t.MIRRORED_REPEAT},ce={[Wn]:t.NEAREST,[tg]:t.NEAREST_MIPMAP_NEAREST,[Sd]:t.NEAREST_MIPMAP_LINEAR,[jn]:t.LINEAR,[tw]:t.LINEAR_MIPMAP_NEAREST,[ll]:t.LINEAR_MIPMAP_LINEAR},fe={[fw]:t.NEVER,[_w]:t.ALWAYS,[pw]:t.LESS,[a_]:t.LEQUAL,[mw]:t.EQUAL,[vw]:t.GEQUAL,[gw]:t.GREATER,[xw]:t.NOTEQUAL};function ee(C,E,H){if(H?(t.texParameteri(C,t.TEXTURE_WRAP_S,q[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,q[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,q[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,ce[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,ce[E.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==di||E.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,A(E.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Wn&&E.minFilter!==jn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Wn||E.minFilter!==Sd&&E.minFilter!==ll||E.type===Br&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===cl&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(C,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function de(C,E){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",R));const ge=E.source;let xe=f.get(ge);xe===void 0&&(xe={},f.set(ge,xe));const pe=W(E);if(pe!==C.__cacheKey){xe[pe]===void 0&&(xe[pe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),xe[pe].usedTimes++;const We=xe[C.__cacheKey];We!==void 0&&(xe[C.__cacheKey].usedTimes--,We.usedTimes===0&&T(E)),C.__cacheKey=pe,C.__webglTexture=xe[pe].texture}return H}function Pe(C,E,H){let ge=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=t.TEXTURE_3D);const xe=de(C,E),pe=E.source;n.bindTexture(ge,C.__webglTexture,t.TEXTURE0+H);const We=i.get(pe);if(pe.version!==We.__version||xe===!0){n.activeTexture(t.TEXTURE0+H);const Te=Ft.getPrimaries(Ft.workingColorSpace),ze=E.colorSpace===Mi?null:Ft.getPrimaries(E.colorSpace),Ue=E.colorSpace===Mi||Te===ze?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const dt=d(E)&&g(E.image)===!1;let re=S(E.image,dt,!1,r.maxTextureSize);re=De(E,re);const wt=g(re)||a,ht=s.convert(E.format,E.colorSpace);let ft=s.convert(E.type),Ye=M(E.internalFormat,ht,ft,E.colorSpace,E.isVideoTexture);ee(ge,E,wt);let Ve;const it=E.mipmaps,Ct=a&&E.isVideoTexture!==!0&&Ye!==r_,Ht=We.__version===void 0||xe===!0,gt=N(E,re,wt);if(E.isDepthTexture)Ye=t.DEPTH_COMPONENT,a?E.type===Br?Ye=t.DEPTH_COMPONENT32F:E.type===zr?Ye=t.DEPTH_COMPONENT24:E.type===ws?Ye=t.DEPTH24_STENCIL8:Ye=t.DEPTH_COMPONENT16:E.type===Br&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Es&&Ye===t.DEPTH_COMPONENT&&E.type!==xp&&E.type!==zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=zr,ft=s.convert(E.type)),E.format===Wo&&Ye===t.DEPTH_COMPONENT&&(Ye=t.DEPTH_STENCIL,E.type!==ws&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ws,ft=s.convert(E.type))),Ht&&(Ct?n.texStorage2D(t.TEXTURE_2D,1,Ye,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ye,re.width,re.height,0,ht,ft,null));else if(E.isDataTexture)if(it.length>0&&wt){Ct&&Ht&&n.texStorage2D(t.TEXTURE_2D,gt,Ye,it[0].width,it[0].height);for(let be=0,F=it.length;be<F;be++)Ve=it[be],Ct?n.texSubImage2D(t.TEXTURE_2D,be,0,0,Ve.width,Ve.height,ht,ft,Ve.data):n.texImage2D(t.TEXTURE_2D,be,Ye,Ve.width,Ve.height,0,ht,ft,Ve.data);E.generateMipmaps=!1}else Ct?(Ht&&n.texStorage2D(t.TEXTURE_2D,gt,Ye,re.width,re.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ht,ft,re.data)):n.texImage2D(t.TEXTURE_2D,0,Ye,re.width,re.height,0,ht,ft,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ct&&Ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,gt,Ye,it[0].width,it[0].height,re.depth);for(let be=0,F=it.length;be<F;be++)Ve=it[be],E.format!==Oi?ht!==null?Ct?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,Ve.width,Ve.height,re.depth,ht,Ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,be,Ye,Ve.width,Ve.height,re.depth,0,Ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?n.texSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,Ve.width,Ve.height,re.depth,ht,ft,Ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,be,Ye,Ve.width,Ve.height,re.depth,0,ht,ft,Ve.data)}else{Ct&&Ht&&n.texStorage2D(t.TEXTURE_2D,gt,Ye,it[0].width,it[0].height);for(let be=0,F=it.length;be<F;be++)Ve=it[be],E.format!==Oi?ht!==null?Ct?n.compressedTexSubImage2D(t.TEXTURE_2D,be,0,0,Ve.width,Ve.height,ht,Ve.data):n.compressedTexImage2D(t.TEXTURE_2D,be,Ye,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?n.texSubImage2D(t.TEXTURE_2D,be,0,0,Ve.width,Ve.height,ht,ft,Ve.data):n.texImage2D(t.TEXTURE_2D,be,Ye,Ve.width,Ve.height,0,ht,ft,Ve.data)}else if(E.isDataArrayTexture)Ct?(Ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,gt,Ye,re.width,re.height,re.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ht,ft,re.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ye,re.width,re.height,re.depth,0,ht,ft,re.data);else if(E.isData3DTexture)Ct?(Ht&&n.texStorage3D(t.TEXTURE_3D,gt,Ye,re.width,re.height,re.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ht,ft,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ye,re.width,re.height,re.depth,0,ht,ft,re.data);else if(E.isFramebufferTexture){if(Ht)if(Ct)n.texStorage2D(t.TEXTURE_2D,gt,Ye,re.width,re.height);else{let be=re.width,F=re.height;for(let Le=0;Le<gt;Le++)n.texImage2D(t.TEXTURE_2D,Le,Ye,be,F,0,ht,ft,null),be>>=1,F>>=1}}else if(it.length>0&&wt){Ct&&Ht&&n.texStorage2D(t.TEXTURE_2D,gt,Ye,it[0].width,it[0].height);for(let be=0,F=it.length;be<F;be++)Ve=it[be],Ct?n.texSubImage2D(t.TEXTURE_2D,be,0,0,ht,ft,Ve):n.texImage2D(t.TEXTURE_2D,be,Ye,ht,ft,Ve);E.generateMipmaps=!1}else Ct?(Ht&&n.texStorage2D(t.TEXTURE_2D,gt,Ye,re.width,re.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ht,ft,re)):n.texImage2D(t.TEXTURE_2D,0,Ye,ht,ft,re);m(E,wt)&&v(ge),We.__version=pe.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function He(C,E,H){if(E.image.length!==6)return;const ge=de(C,E),xe=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const pe=i.get(xe);if(xe.version!==pe.__version||ge===!0){n.activeTexture(t.TEXTURE0+H);const We=Ft.getPrimaries(Ft.workingColorSpace),Te=E.colorSpace===Mi?null:Ft.getPrimaries(E.colorSpace),ze=E.colorSpace===Mi||We===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,dt=E.image[0]&&E.image[0].isDataTexture,re=[];for(let be=0;be<6;be++)!Ue&&!dt?re[be]=S(E.image[be],!1,!0,r.maxCubemapSize):re[be]=dt?E.image[be].image:E.image[be],re[be]=De(E,re[be]);const wt=re[0],ht=g(wt)||a,ft=s.convert(E.format,E.colorSpace),Ye=s.convert(E.type),Ve=M(E.internalFormat,ft,Ye,E.colorSpace),it=a&&E.isVideoTexture!==!0,Ct=pe.__version===void 0||ge===!0;let Ht=N(E,wt,ht);ee(t.TEXTURE_CUBE_MAP,E,ht);let gt;if(Ue){it&&Ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ht,Ve,wt.width,wt.height);for(let be=0;be<6;be++){gt=re[be].mipmaps;for(let F=0;F<gt.length;F++){const Le=gt[F];E.format!==Oi?ft!==null?it?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,F,0,0,Le.width,Le.height,ft,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,F,Ve,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,F,0,0,Le.width,Le.height,ft,Ye,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,F,Ve,Le.width,Le.height,0,ft,Ye,Le.data)}}}else{gt=E.mipmaps,it&&Ct&&(gt.length>0&&Ht++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ht,Ve,re[0].width,re[0].height));for(let be=0;be<6;be++)if(dt){it?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,re[be].width,re[be].height,ft,Ye,re[be].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ve,re[be].width,re[be].height,0,ft,Ye,re[be].data);for(let F=0;F<gt.length;F++){const Ce=gt[F].image[be].image;it?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,F+1,0,0,Ce.width,Ce.height,ft,Ye,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,F+1,Ve,Ce.width,Ce.height,0,ft,Ye,Ce.data)}}else{it?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ft,Ye,re[be]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ve,ft,Ye,re[be]);for(let F=0;F<gt.length;F++){const Le=gt[F];it?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,F+1,0,0,ft,Ye,Le.image[be]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,F+1,Ve,ft,Ye,Le.image[be])}}}m(E,ht)&&v(t.TEXTURE_CUBE_MAP),pe.__version=xe.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ie(C,E,H,ge,xe,pe){const We=s.convert(H.format,H.colorSpace),Te=s.convert(H.type),ze=M(H.internalFormat,We,Te,H.colorSpace);if(!i.get(E).__hasExternalTextures){const dt=Math.max(1,E.width>>pe),re=Math.max(1,E.height>>pe);xe===t.TEXTURE_3D||xe===t.TEXTURE_2D_ARRAY?n.texImage3D(xe,pe,ze,dt,re,E.depth,0,We,Te,null):n.texImage2D(xe,pe,ze,dt,re,0,We,Te,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ae(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ge,xe,i.get(H).__webglTexture,0,me(E)):(xe===t.TEXTURE_2D||xe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ge,xe,i.get(H).__webglTexture,pe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function at(C,E,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let ge=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||ae(E)){const xe=E.depthTexture;xe&&xe.isDepthTexture&&(xe.type===Br?ge=t.DEPTH_COMPONENT32F:xe.type===zr&&(ge=t.DEPTH_COMPONENT24));const pe=me(E);ae(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,ge,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,ge,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ge,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const ge=me(E);H&&ae(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,t.DEPTH24_STENCIL8,E.width,E.height):ae(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ge=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let xe=0;xe<ge.length;xe++){const pe=ge[xe],We=s.convert(pe.format,pe.colorSpace),Te=s.convert(pe.type),ze=M(pe.internalFormat,We,Te,pe.colorSpace),Ue=me(E);H&&ae(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,ze,E.width,E.height):ae(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,ze,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ze,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function rt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const ge=i.get(E.depthTexture).__webglTexture,xe=me(E);if(E.depthTexture.format===Es)ae(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ge,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ge,0);else if(E.depthTexture.format===Wo)ae(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ge,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ze(C){const E=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");rt(E.__webglFramebuffer,C)}else if(H){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]=t.createRenderbuffer(),at(E.__webglDepthbuffer[ge],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),at(E.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(C,E,H){const ge=i.get(C);E!==void 0&&Ie(ge.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ze(C)}function U(C){const E=C.texture,H=i.get(C),ge=i.get(E);C.addEventListener("dispose",k),C.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture()),ge.__version=E.version,o.memory.textures++);const xe=C.isWebGLCubeRenderTarget===!0,pe=C.isWebGLMultipleRenderTargets===!0,We=g(C)||a;if(xe){H.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[Te]=[];for(let ze=0;ze<E.mipmaps.length;ze++)H.__webglFramebuffer[Te][ze]=t.createFramebuffer()}else H.__webglFramebuffer[Te]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)H.__webglFramebuffer[Te]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(pe)if(r.drawBuffers){const Te=C.texture;for(let ze=0,Ue=Te.length;ze<Ue;ze++){const dt=i.get(Te[ze]);dt.__webglTexture===void 0&&(dt.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ae(C)===!1){const Te=pe?E:[E];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ze=0;ze<Te.length;ze++){const Ue=Te[ze];H.__webglColorRenderbuffer[ze]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ze]);const dt=s.convert(Ue.format,Ue.colorSpace),re=s.convert(Ue.type),wt=M(Ue.internalFormat,dt,re,Ue.colorSpace,C.isXRRenderTarget===!0),ht=me(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ht,wt,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,H.__webglColorRenderbuffer[ze])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),at(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(xe){n.bindTexture(t.TEXTURE_CUBE_MAP,ge.__webglTexture),ee(t.TEXTURE_CUBE_MAP,E,We);for(let Te=0;Te<6;Te++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)Ie(H.__webglFramebuffer[Te][ze],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ze);else Ie(H.__webglFramebuffer[Te],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);m(E,We)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){const Te=C.texture;for(let ze=0,Ue=Te.length;ze<Ue;ze++){const dt=Te[ze],re=i.get(dt);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ee(t.TEXTURE_2D,dt,We),Ie(H.__webglFramebuffer,C,dt,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,0),m(dt,We)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let Te=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?Te=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Te,ge.__webglTexture),ee(Te,E,We),a&&E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)Ie(H.__webglFramebuffer[ze],C,E,t.COLOR_ATTACHMENT0,Te,ze);else Ie(H.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,Te,0);m(E,We)&&v(Te),n.unbindTexture()}C.depthBuffer&&Ze(C)}function oe(C){const E=g(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ge=0,xe=H.length;ge<xe;ge++){const pe=H[ge];if(m(pe,E)){const We=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(pe).__webglTexture;n.bindTexture(We,Te),v(We),n.unbindTexture()}}}function le(C){if(a&&C.samples>0&&ae(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,ge=C.height;let xe=t.COLOR_BUFFER_BIT;const pe=[],We=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(C),ze=C.isWebGLMultipleRenderTargets===!0;if(ze)for(let Ue=0;Ue<E.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){pe.push(t.COLOR_ATTACHMENT0+Ue),C.depthBuffer&&pe.push(We);const dt=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(dt===!1&&(C.depthBuffer&&(xe|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(xe|=t.STENCIL_BUFFER_BIT)),ze&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Ue]),dt===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[We]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[We])),ze){const re=i.get(E[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,H,ge,0,0,H,ge,xe,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,pe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ze)for(let Ue=0;Ue<E.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Ue]);const dt=i.get(E[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,dt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function me(C){return Math.min(r.maxSamples,C.samples)}function ae(C){const E=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function et(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function De(C,E){const H=C.colorSpace,ge=C.format,xe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===hf||H!==Sr&&H!==Mi&&(Ft.getTransfer(H)===Xt?a===!1?e.has("EXT_sRGB")===!0&&ge===Oi?(C.format=hf,C.minFilter=jn,C.generateMipmaps=!1):E=c_.sRGBToLinear(E):(ge!==Oi||xe!==Kr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=I,this.resetTextureUnits=ie,this.setTexture2D=j,this.setTexture2DArray=ne,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=je,this.setupRenderTarget=U,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=ae}function IT(t,e,n){const i=n.isWebGL2;function r(s,o=Mi){let a;const l=Ft.getTransfer(o);if(s===Kr)return t.UNSIGNED_BYTE;if(s===Qv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===e_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===nw)return t.BYTE;if(s===iw)return t.SHORT;if(s===xp)return t.UNSIGNED_SHORT;if(s===Jv)return t.INT;if(s===zr)return t.UNSIGNED_INT;if(s===Br)return t.FLOAT;if(s===cl)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rw)return t.ALPHA;if(s===Oi)return t.RGBA;if(s===sw)return t.LUMINANCE;if(s===ow)return t.LUMINANCE_ALPHA;if(s===Es)return t.DEPTH_COMPONENT;if(s===Wo)return t.DEPTH_STENCIL;if(s===hf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===aw)return t.RED;if(s===t_)return t.RED_INTEGER;if(s===lw)return t.RG;if(s===n_)return t.RG_INTEGER;if(s===i_)return t.RGBA_INTEGER;if(s===Md||s===wd||s===Ed||s===bd)if(l===Xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Md)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ed)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Md)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ed)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ng||s===ig||s===rg||s===sg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ng)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ig)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===r_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===og||s===ag)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===og)return l===Xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ag)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lg||s===cg||s===ug||s===dg||s===hg||s===fg||s===pg||s===mg||s===gg||s===xg||s===vg||s===_g||s===yg||s===Sg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===lg)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cg)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ug)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dg)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hg)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fg)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pg)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mg)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gg)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xg)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vg)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_g)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yg)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sg)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Td||s===Mg||s===wg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Td)return l===Xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cw||s===Eg||s===bg||s===Tg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Td)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Eg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Tg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ws?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class DT extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mr extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UT={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),d=this._getHandJoint(c,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(UT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new mr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class OT extends Zo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,x=null;const S=n.getContextAttributes();let g=null,d=null;const m=[],v=[],M=new ye;let N=null;const A=new ni;A.layers.enable(1),A.viewport=new Kt;const R=new ni;R.layers.enable(2),R.viewport=new Kt;const k=[A,R],b=new DT;b.layers.enable(1),b.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=m[ee];return de===void 0&&(de=new qd,m[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=m[ee];return de===void 0&&(de=new qd,m[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=m[ee];return de===void 0&&(de=new qd,m[ee]=de),de.getHandSpace()};function X(ee){const de=v.indexOf(ee.inputSource);if(de===-1)return;const Pe=m[de];Pe!==void 0&&(Pe.update(ee.inputSource,ee.frame,c||o),Pe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ie(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",I);for(let ee=0;ee<m.length;ee++){const de=v[ee];de!==null&&(v[ee]=null,m[ee].disconnect(de))}T=null,V=null,e.setRenderTarget(g),p=null,f=null,h=null,r=null,d=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",I),S.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Ls(p.framebufferWidth,p.framebufferHeight,{format:Oi,type:Kr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let de=null,Pe=null,He=null;S.depth&&(He=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=S.stencil?Wo:Es,Pe=S.stencil?ws:zr);const Ie={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Ls(f.textureWidth,f.textureHeight,{format:Oi,type:Kr,depthTexture:new __(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const at=e.properties.get(d);at.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(ee){for(let de=0;de<ee.removed.length;de++){const Pe=ee.removed[de],He=v.indexOf(Pe);He>=0&&(v[He]=null,m[He].disconnect(Pe))}for(let de=0;de<ee.added.length;de++){const Pe=ee.added[de];let He=v.indexOf(Pe);if(He===-1){for(let at=0;at<m.length;at++)if(at>=v.length){v.push(Pe),He=at;break}else if(v[at]===null){v[at]=Pe,He=at;break}if(He===-1)break}const Ie=m[He];Ie&&Ie.connect(Pe)}}const W=new O,j=new O;function ne(ee,de,Pe){W.setFromMatrixPosition(de.matrixWorld),j.setFromMatrixPosition(Pe.matrixWorld);const He=W.distanceTo(j),Ie=de.projectionMatrix.elements,at=Pe.projectionMatrix.elements,rt=Ie[14]/(Ie[10]-1),Ze=Ie[14]/(Ie[10]+1),je=(Ie[9]+1)/Ie[5],U=(Ie[9]-1)/Ie[5],oe=(Ie[8]-1)/Ie[0],le=(at[8]+1)/at[0],me=rt*oe,ae=rt*le,et=He/(-oe+le),De=et*-oe;de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(De),ee.translateZ(et),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const C=rt+et,E=Ze+et,H=me-De,ge=ae+(He-De),xe=je*Ze/E*C,pe=U*Ze/E*C;ee.projectionMatrix.makePerspective(H,ge,xe,pe,C,E),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function B(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;b.near=R.near=A.near=ee.near,b.far=R.far=A.far=ee.far,(T!==b.near||V!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,V=b.far);const de=ee.parent,Pe=b.cameras;B(b,de);for(let He=0;He<Pe.length;He++)B(Pe[He],de);Pe.length===2?ne(b,A,R):b.projectionMatrix.copy(A.projectionMatrix),Y(ee,b,de)};function Y(ee,de,Pe){Pe===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(Pe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ul*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)};let q=null;function ce(ee,de){if(u=de.getViewerPose(c||o),x=de,u!==null){const Pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let He=!1;Pe.length!==b.cameras.length&&(b.cameras.length=0,He=!0);for(let Ie=0;Ie<Pe.length;Ie++){const at=Pe[Ie];let rt=null;if(p!==null)rt=p.getViewport(at);else{const je=h.getViewSubImage(f,at);rt=je.viewport,Ie===0&&(e.setRenderTargetTextures(d,je.colorTexture,f.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(d))}let Ze=k[Ie];Ze===void 0&&(Ze=new ni,Ze.layers.enable(Ie),Ze.viewport=new Kt,k[Ie]=Ze),Ze.matrix.fromArray(at.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(at.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(rt.x,rt.y,rt.width,rt.height),Ie===0&&(b.matrix.copy(Ze.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),He===!0&&b.cameras.push(Ze)}}for(let Pe=0;Pe<m.length;Pe++){const He=v[Pe],Ie=m[Pe];He!==null&&Ie!==void 0&&Ie.update(He,de,c||o)}q&&q(ee,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),x=null}const fe=new v_;fe.setAnimationLoop(ce),this.setAnimationLoop=function(ee){q=ee},this.dispose=function(){}}}function FT(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,m_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,m,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),h(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,M)):d.isMeshMatcapMaterial?(s(g,d),x(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),S(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,m,v):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Yn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Yn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const m=e.get(d).envMap;if(m&&(g.envMap.value=m,g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*v,n(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=v*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,m){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Yn&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const m=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,v){const M=v.program;i.uniformBlockBinding(m,M)}function c(m,v){let M=r[m.id];M===void 0&&(x(m),M=u(m),r[m.id]=M,m.addEventListener("dispose",g));const N=v.program;i.updateUBOMapping(m,N);const A=e.render.frame;s[m.id]!==A&&(f(m),s[m.id]=A)}function u(m){const v=h();m.__bindingPointIndex=v;const M=t.createBuffer(),N=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,N,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function h(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const v=r[m.id],M=m.uniforms,N=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,R=M.length;A<R;A++){const k=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,T=k.length;b<T;b++){const V=k[b];if(p(V,A,b,N)===!0){const X=V.__offset,ie=Array.isArray(V.value)?V.value:[V.value];let I=0;for(let W=0;W<ie.length;W++){const j=ie[W],ne=S(j);typeof j=="number"||typeof j=="boolean"?(V.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,X+I,V.__data)):j.isMatrix3?(V.__data[0]=j.elements[0],V.__data[1]=j.elements[1],V.__data[2]=j.elements[2],V.__data[3]=0,V.__data[4]=j.elements[3],V.__data[5]=j.elements[4],V.__data[6]=j.elements[5],V.__data[7]=0,V.__data[8]=j.elements[6],V.__data[9]=j.elements[7],V.__data[10]=j.elements[8],V.__data[11]=0):(j.toArray(V.__data,I),I+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,V.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,v,M,N){const A=m.value,R=v+"_"+M;if(N[R]===void 0)return typeof A=="number"||typeof A=="boolean"?N[R]=A:N[R]=A.clone(),!0;{const k=N[R];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return N[R]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function x(m){const v=m.uniforms;let M=0;const N=16;for(let R=0,k=v.length;R<k;R++){const b=Array.isArray(v[R])?v[R]:[v[R]];for(let T=0,V=b.length;T<V;T++){const X=b[T],ie=Array.isArray(X.value)?X.value:[X.value];for(let I=0,W=ie.length;I<W;I++){const j=ie[I],ne=S(j),B=M%N;B!==0&&N-B<ne.boundary&&(M+=N-B),X.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=ne.storage}}}const A=M%N;return A>0&&(M+=N-A),m.__size=M,m.__cache={},this}function S(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Oc{constructor(e={}){const{canvas:n=Dw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),x=new Int32Array(4);let S=null,g=null;const d=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this._useLegacyLights=!1,this.toneMapping=Zr,this.toneMappingExposure=1;const v=this;let M=!1,N=0,A=0,R=null,k=-1,b=null;const T=new Kt,V=new Kt;let X=null;const ie=new Mt(0);let I=0,W=n.width,j=n.height,ne=1,B=null,Y=null;const q=new Kt(0,0,W,j),ce=new Kt(0,0,W,j);let fe=!1;const ee=new Mp;let de=!1,Pe=!1,He=null;const Ie=new rn,at=new ye,rt=new O,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return R===null?ne:1}let U=i;function oe(P,G){for(let J=0;J<P.length;J++){const Q=P[J],K=n.getContext(Q,G);if(K!==null)return K}return null}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mp}`),n.addEventListener("webglcontextlost",be,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",Le,!1),U===null){const G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),U=oe(G,P),U===null)throw oe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let le,me,ae,et,De,C,E,H,ge,xe,pe,We,Te,ze,Ue,dt,re,wt,ht,ft,Ye,Ve,it,Ct;function Ht(){le=new Yb(U),me=new Vb(U,le,e),le.init(me),Ve=new IT(U,le,me),ae=new LT(U,le,me),et=new Kb(U),De=new xT,C=new NT(U,le,ae,De,me,Ve,et),E=new Wb(v),H=new $b(v),ge=new s1(U,me),it=new Bb(U,le,ge,me),xe=new qb(U,ge,et,it),pe=new t2(U,xe,ge,et),ht=new e2(U,me,C),dt=new Gb(De),We=new gT(v,E,H,le,me,it,dt),Te=new FT(v,De),ze=new _T,Ue=new bT(le,me),wt=new zb(v,E,H,ae,pe,f,l),re=new PT(v,pe,me),Ct=new kT(U,et,me,ae),ft=new Hb(U,le,et,me),Ye=new Zb(U,le,et,me),et.programs=We.programs,v.capabilities=me,v.extensions=le,v.properties=De,v.renderLists=ze,v.shadowMap=re,v.state=ae,v.info=et}Ht();const gt=new OT(v,U);this.xr=gt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const P=le.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=le.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(P){P!==void 0&&(ne=P,this.setSize(W,j,!1))},this.getSize=function(P){return P.set(W,j)},this.setSize=function(P,G,J=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=P,j=G,n.width=Math.floor(P*ne),n.height=Math.floor(G*ne),J===!0&&(n.style.width=P+"px",n.style.height=G+"px"),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(W*ne,j*ne).floor()},this.setDrawingBufferSize=function(P,G,J){W=P,j=G,ne=J,n.width=Math.floor(P*J),n.height=Math.floor(G*J),this.setViewport(0,0,P,G)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(q)},this.setViewport=function(P,G,J,Q){P.isVector4?q.set(P.x,P.y,P.z,P.w):q.set(P,G,J,Q),ae.viewport(T.copy(q).multiplyScalar(ne).floor())},this.getScissor=function(P){return P.copy(ce)},this.setScissor=function(P,G,J,Q){P.isVector4?ce.set(P.x,P.y,P.z,P.w):ce.set(P,G,J,Q),ae.scissor(V.copy(ce).multiplyScalar(ne).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(P){ae.setScissorTest(fe=P)},this.setOpaqueSort=function(P){B=P},this.setTransparentSort=function(P){Y=P},this.getClearColor=function(P){return P.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(P=!0,G=!0,J=!0){let Q=0;if(P){let K=!1;if(R!==null){const Fe=R.texture.format;K=Fe===i_||Fe===n_||Fe===t_}if(K){const Fe=R.texture.type,tt=Fe===Kr||Fe===zr||Fe===xp||Fe===ws||Fe===Qv||Fe===e_,lt=wt.getClearColor(),pt=wt.getClearAlpha(),vt=lt.r,mt=lt.g,xt=lt.b;tt?(p[0]=vt,p[1]=mt,p[2]=xt,p[3]=pt,U.clearBufferuiv(U.COLOR,0,p)):(x[0]=vt,x[1]=mt,x[2]=xt,x[3]=pt,U.clearBufferiv(U.COLOR,0,x))}else Q|=U.COLOR_BUFFER_BIT}G&&(Q|=U.DEPTH_BUFFER_BIT),J&&(Q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",be,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),ze.dispose(),Ue.dispose(),De.dispose(),E.dispose(),H.dispose(),pe.dispose(),it.dispose(),Ct.dispose(),We.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Sn),gt.removeEventListener("sessionend",Ut),He&&(He.dispose(),He=null),An.stop()};function be(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const P=et.autoReset,G=re.enabled,J=re.autoUpdate,Q=re.needsUpdate,K=re.type;Ht(),et.autoReset=P,re.enabled=G,re.autoUpdate=J,re.needsUpdate=Q,re.type=K}function Le(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ce(P){const G=P.target;G.removeEventListener("dispose",Ce),ct(G)}function ct(P){st(P),De.remove(P)}function st(P){const G=De.get(P).programs;G!==void 0&&(G.forEach(function(J){We.releaseProgram(J)}),P.isShaderMaterial&&We.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,J,Q,K,Fe){G===null&&(G=Ze);const tt=K.isMesh&&K.matrixWorld.determinant()<0,lt=Hu(P,G,J,Q,K);ae.setMaterial(Q,tt);let pt=J.index,vt=1;if(Q.wireframe===!0){if(pt=xe.getWireframeAttribute(J),pt===void 0)return;vt=2}const mt=J.drawRange,xt=J.attributes.position;let Jt=mt.start*vt,zn=(mt.start+mt.count)*vt;Fe!==null&&(Jt=Math.max(Jt,Fe.start*vt),zn=Math.min(zn,(Fe.start+Fe.count)*vt)),pt!==null?(Jt=Math.max(Jt,0),zn=Math.min(zn,pt.count)):xt!=null&&(Jt=Math.max(Jt,0),zn=Math.min(zn,xt.count));const dn=zn-Jt;if(dn<0||dn===1/0)return;it.setup(K,Q,lt,J,pt);let ai,Wt=ft;if(pt!==null&&(ai=ge.get(pt),Wt=Ye,Wt.setIndex(ai)),K.isMesh)Q.wireframe===!0?(ae.setLineWidth(Q.wireframeLinewidth*je()),Wt.setMode(U.LINES)):Wt.setMode(U.TRIANGLES);else if(K.isLine){let _t=Q.linewidth;_t===void 0&&(_t=1),ae.setLineWidth(_t*je()),K.isLineSegments?Wt.setMode(U.LINES):K.isLineLoop?Wt.setMode(U.LINE_LOOP):Wt.setMode(U.LINE_STRIP)}else K.isPoints?Wt.setMode(U.POINTS):K.isSprite&&Wt.setMode(U.TRIANGLES);if(K.isBatchedMesh)Wt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Wt.renderInstances(Jt,dn,K.count);else if(J.isInstancedBufferGeometry){const _t=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ea=Math.min(J.instanceCount,_t);Wt.renderInstances(Jt,dn,ea)}else Wt.render(Jt,dn)};function Rt(P,G,J){P.transparent===!0&&P.side===Xn&&P.forceSinglePass===!1?(P.side=Yn,P.needsUpdate=!0,zs(P,G,J),P.side=ts,P.needsUpdate=!0,zs(P,G,J),P.side=Xn):zs(P,G,J)}this.compile=function(P,G,J=null){J===null&&(J=P),g=Ue.get(J),g.init(),m.push(g),J.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),P!==J&&P.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights(v._useLegacyLights);const Q=new Set;return P.traverse(function(K){const Fe=K.material;if(Fe)if(Array.isArray(Fe))for(let tt=0;tt<Fe.length;tt++){const lt=Fe[tt];Rt(lt,J,K),Q.add(lt)}else Rt(Fe,J,K),Q.add(Fe)}),m.pop(),g=null,Q},this.compileAsync=function(P,G,J=null){const Q=this.compile(P,G,J);return new Promise(K=>{function Fe(){if(Q.forEach(function(tt){De.get(tt).currentProgram.isReady()&&Q.delete(tt)}),Q.size===0){K(P);return}setTimeout(Fe,10)}le.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Tt=null;function un(P){Tt&&Tt(P)}function Sn(){An.stop()}function Ut(){An.start()}const An=new v_;An.setAnimationLoop(un),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(P){Tt=P,gt.setAnimationLoop(P),P===null?An.stop():An.start()},gt.addEventListener("sessionstart",Sn),gt.addEventListener("sessionend",Ut),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(G),G=gt.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,G,R),g=Ue.get(P,m.length),g.init(),m.push(g),Ie.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ee.setFromProjectionMatrix(Ie),Pe=this.localClippingEnabled,de=dt.init(this.clippingPlanes,Pe),S=ze.get(P,d.length),S.init(),d.push(S),Ke(P,G,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(B,Y),this.info.render.frame++,de===!0&&dt.beginShadows();const J=g.state.shadowsArray;if(re.render(J,P,G),de===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),wt.render(S,P),g.setupLights(v._useLegacyLights),G.isArrayCamera){const Q=G.cameras;for(let K=0,Fe=Q.length;K<Fe;K++){const tt=Q[K];ks(S,P,tt,tt.viewport)}}else ks(S,P,G);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(v,P,G),it.resetDefaultState(),k=-1,b=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,d.pop(),d.length>0?S=d[d.length-1]:S=null};function Ke(P,G,J,Q){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)J=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ee.intersectsSprite(P)){Q&&rt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ie);const tt=pe.update(P),lt=P.material;lt.visible&&S.push(P,tt,lt,J,rt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ee.intersectsObject(P))){const tt=pe.update(P),lt=P.material;if(Q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),rt.copy(P.boundingSphere.center)):(tt.boundingSphere===null&&tt.computeBoundingSphere(),rt.copy(tt.boundingSphere.center)),rt.applyMatrix4(P.matrixWorld).applyMatrix4(Ie)),Array.isArray(lt)){const pt=tt.groups;for(let vt=0,mt=pt.length;vt<mt;vt++){const xt=pt[vt],Jt=lt[xt.materialIndex];Jt&&Jt.visible&&S.push(P,tt,Jt,J,rt.z,xt)}}else lt.visible&&S.push(P,tt,lt,J,rt.z,null)}}const Fe=P.children;for(let tt=0,lt=Fe.length;tt<lt;tt++)Ke(Fe[tt],G,J,Q)}function ks(P,G,J,Q){const K=P.opaque,Fe=P.transmissive,tt=P.transparent;g.setupLightsView(J),de===!0&&dt.setGlobalState(v.clippingPlanes,J),Fe.length>0&&Bu(K,Fe,G,J),Q&&ae.viewport(T.copy(Q)),K.length>0&&Bi(K,G,J),Fe.length>0&&Bi(Fe,G,J),tt.length>0&&Bi(tt,G,J),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Bu(P,G,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const Fe=me.isWebGL2;He===null&&(He=new Ls(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?cl:Kr,minFilter:ll,samples:Fe?4:0})),v.getDrawingBufferSize(at),Fe?He.setSize(at.x,at.y):He.setSize(pu(at.x),pu(at.y));const tt=v.getRenderTarget();v.setRenderTarget(He),v.getClearColor(ie),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const lt=v.toneMapping;v.toneMapping=Zr,Bi(P,J,Q),C.updateMultisampleRenderTarget(He),C.updateRenderTargetMipmap(He);let pt=!1;for(let vt=0,mt=G.length;vt<mt;vt++){const xt=G[vt],Jt=xt.object,zn=xt.geometry,dn=xt.material,ai=xt.group;if(dn.side===Xn&&Jt.layers.test(Q.layers)){const Wt=dn.side;dn.side=Yn,dn.needsUpdate=!0,Jo(Jt,J,Q,zn,dn,ai),dn.side=Wt,dn.needsUpdate=!0,pt=!0}}pt===!0&&(C.updateMultisampleRenderTarget(He),C.updateRenderTargetMipmap(He)),v.setRenderTarget(tt),v.setClearColor(ie,I),v.toneMapping=lt}function Bi(P,G,J){const Q=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Fe=P.length;K<Fe;K++){const tt=P[K],lt=tt.object,pt=tt.geometry,vt=Q===null?tt.material:Q,mt=tt.group;lt.layers.test(J.layers)&&Jo(lt,G,J,pt,vt,mt)}}function Jo(P,G,J,Q,K,Fe){P.onBeforeRender(v,G,J,Q,K,Fe),P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(v,G,J,Q,P,Fe),K.transparent===!0&&K.side===Xn&&K.forceSinglePass===!1?(K.side=Yn,K.needsUpdate=!0,v.renderBufferDirect(J,G,Q,K,P,Fe),K.side=ts,K.needsUpdate=!0,v.renderBufferDirect(J,G,Q,K,P,Fe),K.side=Xn):v.renderBufferDirect(J,G,Q,K,P,Fe),P.onAfterRender(v,G,J,Q,K,Fe)}function zs(P,G,J){G.isScene!==!0&&(G=Ze);const Q=De.get(P),K=g.state.lights,Fe=g.state.shadowsArray,tt=K.state.version,lt=We.getParameters(P,K.state,Fe,G,J),pt=We.getProgramCacheKey(lt);let vt=Q.programs;Q.environment=P.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(P.isMeshStandardMaterial?H:E).get(P.envMap||Q.environment),vt===void 0&&(P.addEventListener("dispose",Ce),vt=new Map,Q.programs=vt);let mt=vt.get(pt);if(mt!==void 0){if(Q.currentProgram===mt&&Q.lightsStateVersion===tt)return wl(P,lt),mt}else lt.uniforms=We.getUniforms(P),P.onBuild(J,lt,v),P.onBeforeCompile(lt,v),mt=We.acquireProgram(lt,pt),vt.set(pt,mt),Q.uniforms=lt.uniforms;const xt=Q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(xt.clippingPlanes=dt.uniform),wl(P,lt),Q.needsLights=El(P),Q.lightsStateVersion=tt,Q.needsLights&&(xt.ambientLightColor.value=K.state.ambient,xt.lightProbe.value=K.state.probe,xt.directionalLights.value=K.state.directional,xt.directionalLightShadows.value=K.state.directionalShadow,xt.spotLights.value=K.state.spot,xt.spotLightShadows.value=K.state.spotShadow,xt.rectAreaLights.value=K.state.rectArea,xt.ltc_1.value=K.state.rectAreaLTC1,xt.ltc_2.value=K.state.rectAreaLTC2,xt.pointLights.value=K.state.point,xt.pointLightShadows.value=K.state.pointShadow,xt.hemisphereLights.value=K.state.hemi,xt.directionalShadowMap.value=K.state.directionalShadowMap,xt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,xt.spotShadowMap.value=K.state.spotShadowMap,xt.spotLightMatrix.value=K.state.spotLightMatrix,xt.spotLightMap.value=K.state.spotLightMap,xt.pointShadowMap.value=K.state.pointShadowMap,xt.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=mt,Q.uniformsList=null,mt}function Qo(P){if(P.uniformsList===null){const G=P.currentProgram.getUniforms();P.uniformsList=Uc.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function wl(P,G){const J=De.get(P);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Hu(P,G,J,Q,K){G.isScene!==!0&&(G=Ze),C.resetTextureUnits();const Fe=G.fog,tt=Q.isMeshStandardMaterial?G.environment:null,lt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Sr,pt=(Q.isMeshStandardMaterial?H:E).get(Q.envMap||tt),vt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,mt=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),xt=!!J.morphAttributes.position,Jt=!!J.morphAttributes.normal,zn=!!J.morphAttributes.color;let dn=Zr;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(dn=v.toneMapping);const ai=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Wt=ai!==void 0?ai.length:0,_t=De.get(Q),ea=g.state.lights;if(de===!0&&(Pe===!0||P!==b)){const Jn=P===b&&Q.id===k;dt.setState(Q,P,Jn)}let Yt=!1;Q.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==ea.state.version||_t.outputColorSpace!==lt||K.isBatchedMesh&&_t.batching===!1||!K.isBatchedMesh&&_t.batching===!0||K.isInstancedMesh&&_t.instancing===!1||!K.isInstancedMesh&&_t.instancing===!0||K.isSkinnedMesh&&_t.skinning===!1||!K.isSkinnedMesh&&_t.skinning===!0||K.isInstancedMesh&&_t.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&_t.instancingColor===!1&&K.instanceColor!==null||_t.envMap!==pt||Q.fog===!0&&_t.fog!==Fe||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==dt.numPlanes||_t.numIntersection!==dt.numIntersection)||_t.vertexAlphas!==vt||_t.vertexTangents!==mt||_t.morphTargets!==xt||_t.morphNormals!==Jt||_t.morphColors!==zn||_t.toneMapping!==dn||me.isWebGL2===!0&&_t.morphTargetsCount!==Wt)&&(Yt=!0):(Yt=!0,_t.__version=Q.version);let Hi=_t.currentProgram;Yt===!0&&(Hi=zs(Q,G,K));let bl=!1,ss=!1,wr=!1;const Pt=Hi.getUniforms(),ir=_t.uniforms;if(ae.useProgram(Hi.program)&&(bl=!0,ss=!0,wr=!0),Q.id!==k&&(k=Q.id,ss=!0),bl||b!==P){Pt.setValue(U,"projectionMatrix",P.projectionMatrix),Pt.setValue(U,"viewMatrix",P.matrixWorldInverse);const Jn=Pt.map.cameraPosition;Jn!==void 0&&Jn.setValue(U,rt.setFromMatrixPosition(P.matrixWorld)),me.logarithmicDepthBuffer&&Pt.setValue(U,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Pt.setValue(U,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,ss=!0,wr=!0)}if(K.isSkinnedMesh){Pt.setOptional(U,K,"bindMatrix"),Pt.setOptional(U,K,"bindMatrixInverse");const Jn=K.skeleton;Jn&&(me.floatVertexTextures?(Jn.boneTexture===null&&Jn.computeBoneTexture(),Pt.setValue(U,"boneTexture",Jn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Pt.setOptional(U,K,"batchingTexture"),Pt.setValue(U,"batchingTexture",K._matricesTexture,C));const ta=J.morphAttributes;if((ta.position!==void 0||ta.normal!==void 0||ta.color!==void 0&&me.isWebGL2===!0)&&ht.update(K,J,Hi),(ss||_t.receiveShadow!==K.receiveShadow)&&(_t.receiveShadow=K.receiveShadow,Pt.setValue(U,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ir.envMap.value=pt,ir.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),ss&&(Pt.setValue(U,"toneMappingExposure",v.toneMappingExposure),_t.needsLights&&Bs(ir,wr),Fe&&Q.fog===!0&&Te.refreshFogUniforms(ir,Fe),Te.refreshMaterialUniforms(ir,Q,ne,j,He),Uc.upload(U,Qo(_t),ir,C)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Uc.upload(U,Qo(_t),ir,C),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Pt.setValue(U,"center",K.center),Pt.setValue(U,"modelViewMatrix",K.modelViewMatrix),Pt.setValue(U,"normalMatrix",K.normalMatrix),Pt.setValue(U,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Jn=Q.uniformsGroups;for(let na=0,Vu=Jn.length;na<Vu;na++)if(me.isWebGL2){const Z=Jn[na];Ct.update(Z,Hi),Ct.bind(Z,Hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hi}function Bs(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function El(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,G,J){De.get(P.texture).__webglTexture=G,De.get(P.depthTexture).__webglTexture=J;const Q=De.get(P);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,G){const J=De.get(P);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,J=0){R=P,N=G,A=J;let Q=!0,K=null,Fe=!1,tt=!1;if(P){const pt=De.get(P);pt.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(U.FRAMEBUFFER,null),Q=!1):pt.__webglFramebuffer===void 0?C.setupRenderTarget(P):pt.__hasExternalTextures&&C.rebindTextures(P,De.get(P.texture).__webglTexture,De.get(P.depthTexture).__webglTexture);const vt=P.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(tt=!0);const mt=De.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(mt[G])?K=mt[G][J]:K=mt[G],Fe=!0):me.isWebGL2&&P.samples>0&&C.useMultisampledRTT(P)===!1?K=De.get(P).__webglMultisampledFramebuffer:Array.isArray(mt)?K=mt[J]:K=mt,T.copy(P.viewport),V.copy(P.scissor),X=P.scissorTest}else T.copy(q).multiplyScalar(ne).floor(),V.copy(ce).multiplyScalar(ne).floor(),X=fe;if(ae.bindFramebuffer(U.FRAMEBUFFER,K)&&me.drawBuffers&&Q&&ae.drawBuffers(P,K),ae.viewport(T),ae.scissor(V),ae.setScissorTest(X),Fe){const pt=De.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,pt.__webglTexture,J)}else if(tt){const pt=De.get(P.texture),vt=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,pt.__webglTexture,J||0,vt)}k=-1},this.readRenderTargetPixels=function(P,G,J,Q,K,Fe,tt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let lt=De.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&tt!==void 0&&(lt=lt[tt]),lt){ae.bindFramebuffer(U.FRAMEBUFFER,lt);try{const pt=P.texture,vt=pt.format,mt=pt.type;if(vt!==Oi&&Ve.convert(vt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const xt=mt===cl&&(le.has("EXT_color_buffer_half_float")||me.isWebGL2&&le.has("EXT_color_buffer_float"));if(mt!==Kr&&Ve.convert(mt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(mt===Br&&(me.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-Q&&J>=0&&J<=P.height-K&&U.readPixels(G,J,Q,K,Ve.convert(vt),Ve.convert(mt),Fe)}finally{const pt=R!==null?De.get(R).__webglFramebuffer:null;ae.bindFramebuffer(U.FRAMEBUFFER,pt)}}},this.copyFramebufferToTexture=function(P,G,J=0){const Q=Math.pow(2,-J),K=Math.floor(G.image.width*Q),Fe=Math.floor(G.image.height*Q);C.setTexture2D(G,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,P.x,P.y,K,Fe),ae.unbindTexture()},this.copyTextureToTexture=function(P,G,J,Q=0){const K=G.image.width,Fe=G.image.height,tt=Ve.convert(J.format),lt=Ve.convert(J.type);C.setTexture2D(J,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,J.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,J.unpackAlignment),G.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Q,P.x,P.y,K,Fe,tt,lt,G.image.data):G.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Q,P.x,P.y,G.mipmaps[0].width,G.mipmaps[0].height,tt,G.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,Q,P.x,P.y,tt,lt,G.image),Q===0&&J.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(P,G,J,Q,K=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=P.max.x-P.min.x+1,tt=P.max.y-P.min.y+1,lt=P.max.z-P.min.z+1,pt=Ve.convert(Q.format),vt=Ve.convert(Q.type);let mt;if(Q.isData3DTexture)C.setTexture3D(Q,0),mt=U.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)C.setTexture2DArray(Q,0),mt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Q.unpackAlignment);const xt=U.getParameter(U.UNPACK_ROW_LENGTH),Jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),zn=U.getParameter(U.UNPACK_SKIP_PIXELS),dn=U.getParameter(U.UNPACK_SKIP_ROWS),ai=U.getParameter(U.UNPACK_SKIP_IMAGES),Wt=J.isCompressedTexture?J.mipmaps[K]:J.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Wt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Wt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,P.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,P.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,P.min.z),J.isDataTexture||J.isData3DTexture?U.texSubImage3D(mt,K,G.x,G.y,G.z,Fe,tt,lt,pt,vt,Wt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(mt,K,G.x,G.y,G.z,Fe,tt,lt,pt,Wt.data)):U.texSubImage3D(mt,K,G.x,G.y,G.z,Fe,tt,lt,pt,vt,Wt),U.pixelStorei(U.UNPACK_ROW_LENGTH,xt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,zn),U.pixelStorei(U.UNPACK_SKIP_ROWS,dn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ai),K===0&&Q.generateMipmaps&&U.generateMipmap(mt),ae.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),ae.unbindTexture()},this.resetState=function(){N=0,A=0,R=null,ae.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===vp?"display-p3":"srgb",n.unpackColorSpace=Ft.workingColorSpace===Uu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qt?bs:s_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===bs?qt:Sr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class zT extends Oc{}zT.prototype.isWebGL1Renderer=!0;class Ha{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Mt(e),this.near=n,this.far=i}clone(){return new Ha(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Fc extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class BT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=df,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=tr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new O;class mu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Hn.fromBufferAttribute(this,n),Hn.applyMatrix4(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Hn.fromBufferAttribute(this,n),Hn.applyNormalMatrix(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Hn.fromBufferAttribute(this,n),Hn.transformDirection(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}setX(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ki(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ki(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ki(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ki(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new bi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class b_ extends Fs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let oo;const xa=new O,ao=new O,lo=new O,co=new ye,va=new ye,T_=new rn,pc=new O,_a=new O,mc=new O,f0=new ye,Zd=new ye,p0=new ye;class HT extends Tn{constructor(e=new b_){if(super(),this.isSprite=!0,this.type="Sprite",oo===void 0){oo=new vn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new BT(n,5);oo.setIndex([0,1,2,0,2,3]),oo.setAttribute("position",new mu(i,3,0,!1)),oo.setAttribute("uv",new mu(i,2,3,!1))}this.geometry=oo,this.material=e,this.center=new ye(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ao.setFromMatrixScale(this.matrixWorld),T_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ao.multiplyScalar(-lo.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;gc(pc.set(-.5,-.5,0),lo,o,ao,r,s),gc(_a.set(.5,-.5,0),lo,o,ao,r,s),gc(mc.set(.5,.5,0),lo,o,ao,r,s),f0.set(0,0),Zd.set(1,0),p0.set(1,1);let a=e.ray.intersectTriangle(pc,_a,mc,!1,xa);if(a===null&&(gc(_a.set(-.5,.5,0),lo,o,ao,r,s),Zd.set(0,1),a=e.ray.intersectTriangle(pc,mc,_a,!1,xa),a===null))return;const l=e.ray.origin.distanceTo(xa);l<e.near||l>e.far||n.push({distance:l,point:xa.clone(),uv:Si.getInterpolation(xa,pc,_a,mc,f0,Zd,p0,new ye),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function gc(t,e,n,i,r,s){co.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(va.x=s*co.x-r*co.y,va.y=r*co.x+s*co.y):va.copy(co),t.copy(e),t.x+=va.x,t.y+=va.y,t.applyMatrix4(T_)}class Va extends Fs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const m0=new O,g0=new O,x0=new rn,Kd=new yp,xc=new Ou;class A_ extends Tn{constructor(e=new vn,n=new Va){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)m0.fromBufferAttribute(n,r-1),g0.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=m0.distanceTo(g0);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xc.copy(i.boundingSphere),xc.applyMatrix4(r),xc.radius+=s,e.ray.intersectsSphere(xc)===!1)return;x0.copy(r).invert(),Kd.copy(e.ray).applyMatrix4(x0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,h=new O,f=new O,p=this.isLineSegments?2:1,x=i.index,g=i.attributes.position;if(x!==null){const d=Math.max(0,o.start),m=Math.min(x.count,o.start+o.count);for(let v=d,M=m-1;v<M;v+=p){const N=x.getX(v),A=x.getX(v+1);if(c.fromBufferAttribute(g,N),u.fromBufferAttribute(g,A),Kd.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(f);k<e.near||k>e.far||n.push({distance:k,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),m=Math.min(g.count,o.start+o.count);for(let v=d,M=m-1;v<M;v+=p){if(c.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),Kd.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||n.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const v0=new O,_0=new O;class mf extends A_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)v0.fromBufferAttribute(n,r),_0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+v0.distanceTo(_0);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jd extends qn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ye:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new O,r=[],s=[],o=[],a=new O,l=new rn;for(let p=0;p<=e;p++){const x=p/e;r[p]=this.getTangentAt(x,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Rn(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Rn(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],p*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bp extends nr{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new ye,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class VT extends bp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Tp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const vc=new O,Qd=new Tp,eh=new Tp,th=new Tp;class GT extends nr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new O){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(vc.subVectors(r[0],r[1]).add(r[0]),c=vc);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(vc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=vc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(h),p),S=Math.pow(h.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(u),p);S<1e-4&&(S=1),x<1e-4&&(x=S),g<1e-4&&(g=S),Qd.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,x,S,g),eh.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,x,S,g),th.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,x,S,g)}else this.curveType==="catmullrom"&&(Qd.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),eh.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),th.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Qd.calc(l),eh.calc(l),th.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function y0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function WT(t,e){const n=1-t;return n*n*e}function jT(t,e){return 2*(1-t)*t*e}function XT(t,e){return t*t*e}function Ga(t,e,n,i){return WT(t,e)+jT(t,n)+XT(t,i)}function $T(t,e){const n=1-t;return n*n*n*e}function YT(t,e){const n=1-t;return 3*n*n*t*e}function qT(t,e){return 3*(1-t)*t*t*e}function ZT(t,e){return t*t*t*e}function Wa(t,e,n,i,r){return $T(t,e)+YT(t,n)+qT(t,i)+ZT(t,r)}class C_ extends nr{constructor(e=new ye,n=new ye,i=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Wa(e,r.x,s.x,o.x,a.x),Wa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class KT extends nr{constructor(e=new O,n=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Wa(e,r.x,s.x,o.x,a.x),Wa(e,r.y,s.y,o.y,a.y),Wa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R_ extends nr{constructor(e=new ye,n=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ye){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ye){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class JT extends nr{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P_ extends nr{constructor(e=new ye,n=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ga(e,r.x,s.x,o.x),Ga(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QT extends nr{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ga(e,r.x,s.x,o.x),Ga(e,r.y,s.y,o.y),Ga(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L_ extends nr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ye){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(y0(a,l.x,c.x,u.x,h.x),y0(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ye().fromArray(r))}return this}}var gf=Object.freeze({__proto__:null,ArcCurve:VT,CatmullRomCurve3:GT,CubicBezierCurve:C_,CubicBezierCurve3:KT,EllipseCurve:bp,LineCurve:R_,LineCurve3:JT,QuadraticBezierCurve:P_,QuadraticBezierCurve3:QT,SplineCurve:L_});class eA extends nr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gf[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new gf[r.type]().fromJSON(r))}return this}}class S0 extends eA{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new R_(this.currentPoint.clone(),new ye(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new P_(this.currentPoint.clone(),new ye(e,n),new ye(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new C_(this.currentPoint.clone(),new ye(e,n),new ye(i,r),new ye(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new L_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new bp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Is extends vn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let x=0;const S=[],g=i/2;let d=0;m(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new kt(h,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(p,2));function m(){const M=new O,N=new O;let A=0;const R=(n-e)/i;for(let k=0;k<=s;k++){const b=[],T=k/s,V=T*(n-e)+e;for(let X=0;X<=r;X++){const ie=X/r,I=ie*l+a,W=Math.sin(I),j=Math.cos(I);N.x=V*W,N.y=-T*i+g,N.z=V*j,h.push(N.x,N.y,N.z),M.set(W,R,j).normalize(),f.push(M.x,M.y,M.z),p.push(ie,1-T),b.push(x++)}S.push(b)}for(let k=0;k<r;k++)for(let b=0;b<s;b++){const T=S[b][k],V=S[b+1][k],X=S[b+1][k+1],ie=S[b][k+1];u.push(T,V,ie),u.push(V,X,ie),A+=6}c.addGroup(d,A,0),d+=A}function v(M){const N=x,A=new ye,R=new O;let k=0;const b=M===!0?e:n,T=M===!0?1:-1;for(let X=1;X<=r;X++)h.push(0,g*T,0),f.push(0,T,0),p.push(.5,.5),x++;const V=x;for(let X=0;X<=r;X++){const I=X/r*l+a,W=Math.cos(I),j=Math.sin(I);R.x=b*j,R.y=g*T,R.z=b*W,h.push(R.x,R.y,R.z),f.push(0,T,0),A.x=W*.5+.5,A.y=j*.5*T+.5,p.push(A.x,A.y),x++}for(let X=0;X<r;X++){const ie=N+X,I=V+X;M===!0?u.push(I,I+1,ie):u.push(I+1,I,ie),k+=3}c.addGroup(d,k,M===!0?1:2),d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gu extends Is{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new gu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ap extends vn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new kt(s,3)),this.setAttribute("normal",new kt(s.slice(),3)),this.setAttribute("uv",new kt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new O,M=new O,N=new O;for(let A=0;A<n.length;A+=3)p(n[A+0],v),p(n[A+1],M),p(n[A+2],N),l(v,M,N,m)}function l(m,v,M,N){const A=N+1,R=[];for(let k=0;k<=A;k++){R[k]=[];const b=m.clone().lerp(M,k/A),T=v.clone().lerp(M,k/A),V=A-k;for(let X=0;X<=V;X++)X===0&&k===A?R[k][X]=b:R[k][X]=b.clone().lerp(T,X/V)}for(let k=0;k<A;k++)for(let b=0;b<2*(A-k)-1;b++){const T=Math.floor(b/2);b%2===0?(f(R[k][T+1]),f(R[k+1][T]),f(R[k][T])):(f(R[k][T+1]),f(R[k+1][T+1]),f(R[k+1][T]))}}function c(m){const v=new O;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(m),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function u(){const m=new O;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const M=g(m)/2/Math.PI+.5,N=d(m)/Math.PI+.5;o.push(M,1-N)}x(),h()}function h(){for(let m=0;m<o.length;m+=6){const v=o[m+0],M=o[m+2],N=o[m+4],A=Math.max(v,M,N),R=Math.min(v,M,N);A>.9&&R<.1&&(v<.2&&(o[m+0]+=1),M<.2&&(o[m+2]+=1),N<.2&&(o[m+4]+=1))}}function f(m){s.push(m.x,m.y,m.z)}function p(m,v){const M=m*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function x(){const m=new O,v=new O,M=new O,N=new O,A=new ye,R=new ye,k=new ye;for(let b=0,T=0;b<s.length;b+=9,T+=6){m.set(s[b+0],s[b+1],s[b+2]),v.set(s[b+3],s[b+4],s[b+5]),M.set(s[b+6],s[b+7],s[b+8]),A.set(o[T+0],o[T+1]),R.set(o[T+2],o[T+3]),k.set(o[T+4],o[T+5]),N.copy(m).add(v).add(M).divideScalar(3);const V=g(N);S(A,T+0,m,V),S(R,T+2,v,V),S(k,T+4,M,V)}}function S(m,v,M,N){N<0&&m.x===1&&(o[v]=m.x-1),M.x===0&&M.z===0&&(o[v]=N/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ap(e.vertices,e.indices,e.radius,e.details)}}class Yi extends S0{constructor(e){super(e),this.uuid=tr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new S0().fromJSON(r))}return this}}const tA={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=N_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,p;if(i&&(s=oA(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let x=n;x<r;x+=n)h=t[x],f=t[x+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return hl(s,o,n,a,l,p,0),o}};function N_(t,e,n,i,r){let s,o;if(r===xA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=M0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=M0(s,t[s],t[s+1],o);return o&&ku(o,o.next)&&(pl(o),o=o.next),o}function Ds(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(ku(n,n.next)||tn(n.prev,n,n.next)===0)){if(pl(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function hl(t,e,n,i,r,s,o){if(!t)return;!o&&s&&dA(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?iA(t,i,r,s):nA(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),pl(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=rA(Ds(t),e,n),hl(t,e,n,i,r,s,2)):o===2&&sA(t,e,n,i,r,s):hl(Ds(t),e,n,i,r,s,1);break}}}function nA(t){const e=t.prev,n=t,i=t.next;if(tn(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let x=i.next;for(;x!==e;){if(x.x>=u&&x.x<=f&&x.y>=h&&x.y<=p&&To(r,a,s,l,o,c,x.x,x.y)&&tn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function iA(t,e,n,i){const r=t.prev,s=t,o=t.next;if(tn(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,x=u<h?u<f?u:f:h<f?h:f,S=a>l?a>c?a:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,d=xf(p,x,e,n,i),m=xf(S,g,e,n,i);let v=t.prevZ,M=t.nextZ;for(;v&&v.z>=d&&M&&M.z<=m;){if(v.x>=p&&v.x<=S&&v.y>=x&&v.y<=g&&v!==r&&v!==o&&To(a,u,l,h,c,f,v.x,v.y)&&tn(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=p&&M.x<=S&&M.y>=x&&M.y<=g&&M!==r&&M!==o&&To(a,u,l,h,c,f,M.x,M.y)&&tn(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=S&&v.y>=x&&v.y<=g&&v!==r&&v!==o&&To(a,u,l,h,c,f,v.x,v.y)&&tn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=m;){if(M.x>=p&&M.x<=S&&M.y>=x&&M.y<=g&&M!==r&&M!==o&&To(a,u,l,h,c,f,M.x,M.y)&&tn(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function rA(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!ku(r,s)&&I_(r,i,i.next,s)&&fl(r,s)&&fl(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),pl(i),pl(i.next),i=t=s),i=i.next}while(i!==t);return Ds(i)}function sA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pA(o,a)){let l=D_(o,a);o=Ds(o,o.next),l=Ds(l,l.next),hl(o,e,n,i,r,s,0),hl(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function oA(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=N_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(fA(c));for(r.sort(aA),s=0;s<r.length;s++)n=lA(r[s],n);return n}function aA(t,e){return t.x-e.x}function lA(t,e){const n=cA(t,e);if(!n)return e;const i=D_(n,t);return Ds(i,i.next),Ds(n,n.next)}function cA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&To(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),fl(n,t)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&uA(r,n)))&&(r=n,u=h)),n=n.next;while(n!==a);return r}function uA(t,e){return tn(t.prev,t,e.prev)<0&&tn(e.next,t,t.next)<0}function dA(t,e,n,i){let r=t;do r.z===0&&(r.z=xf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,hA(r)}function hA(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function xf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function fA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function To(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function pA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!mA(t,e)&&(fl(t,e)&&fl(e,t)&&gA(t,e)&&(tn(t.prev,t,e.prev)||tn(t,e.prev,e))||ku(t,e)&&tn(t.prev,t,t.next)>0&&tn(e.prev,e,e.next)>0)}function tn(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function ku(t,e){return t.x===e.x&&t.y===e.y}function I_(t,e,n,i){const r=yc(tn(t,e,n)),s=yc(tn(t,e,i)),o=yc(tn(n,i,t)),a=yc(tn(n,i,e));return!!(r!==s&&o!==a||r===0&&_c(t,n,e)||s===0&&_c(t,i,e)||o===0&&_c(n,t,i)||a===0&&_c(n,e,i))}function _c(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function yc(t){return t>0?1:t<0?-1:0}function mA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&I_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function fl(t,e){return tn(t.prev,t,t.next)<0?tn(t,e,t.next)>=0&&tn(t,t.prev,e)>=0:tn(t,e,t.prev)<0||tn(t,t.next,e)<0}function gA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function D_(t,e){const n=new vf(t.i,t.x,t.y),i=new vf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function M0(t,e,n,i){const r=new vf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function pl(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function vf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Jr{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Jr.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];w0(e),E0(i,e);let o=e.length;n.forEach(w0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,E0(i,n[l]);const a=tA.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function w0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function E0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Or extends vn{constructor(e=new Yi([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new kt(r,3)),this.setAttribute("uv",new kt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,x=n.bevelSize!==void 0?n.bevelSize:p-.1,S=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:vA;let v,M=!1,N,A,R,k;d&&(v=d.getSpacedPoints(u),M=!0,f=!1,N=d.computeFrenetFrames(u,!1),A=new O,R=new O,k=new O),f||(g=0,p=0,x=0,S=0);const b=a.extractPoints(c);let T=b.shape;const V=b.holes;if(!Jr.isClockWise(T)){T=T.reverse();for(let U=0,oe=V.length;U<oe;U++){const le=V[U];Jr.isClockWise(le)&&(V[U]=le.reverse())}}const ie=Jr.triangulateShape(T,V),I=T;for(let U=0,oe=V.length;U<oe;U++){const le=V[U];T=T.concat(le)}function W(U,oe,le){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(oe,le)}const j=T.length,ne=ie.length;function B(U,oe,le){let me,ae,et;const De=U.x-oe.x,C=U.y-oe.y,E=le.x-U.x,H=le.y-U.y,ge=De*De+C*C,xe=De*H-C*E;if(Math.abs(xe)>Number.EPSILON){const pe=Math.sqrt(ge),We=Math.sqrt(E*E+H*H),Te=oe.x-C/pe,ze=oe.y+De/pe,Ue=le.x-H/We,dt=le.y+E/We,re=((Ue-Te)*H-(dt-ze)*E)/(De*H-C*E);me=Te+De*re-U.x,ae=ze+C*re-U.y;const wt=me*me+ae*ae;if(wt<=2)return new ye(me,ae);et=Math.sqrt(wt/2)}else{let pe=!1;De>Number.EPSILON?E>Number.EPSILON&&(pe=!0):De<-Number.EPSILON?E<-Number.EPSILON&&(pe=!0):Math.sign(C)===Math.sign(H)&&(pe=!0),pe?(me=-C,ae=De,et=Math.sqrt(ge)):(me=De,ae=C,et=Math.sqrt(ge/2))}return new ye(me/et,ae/et)}const Y=[];for(let U=0,oe=I.length,le=oe-1,me=U+1;U<oe;U++,le++,me++)le===oe&&(le=0),me===oe&&(me=0),Y[U]=B(I[U],I[le],I[me]);const q=[];let ce,fe=Y.concat();for(let U=0,oe=V.length;U<oe;U++){const le=V[U];ce=[];for(let me=0,ae=le.length,et=ae-1,De=me+1;me<ae;me++,et++,De++)et===ae&&(et=0),De===ae&&(De=0),ce[me]=B(le[me],le[et],le[De]);q.push(ce),fe=fe.concat(ce)}for(let U=0;U<g;U++){const oe=U/g,le=p*Math.cos(oe*Math.PI/2),me=x*Math.sin(oe*Math.PI/2)+S;for(let ae=0,et=I.length;ae<et;ae++){const De=W(I[ae],Y[ae],me);Ie(De.x,De.y,-le)}for(let ae=0,et=V.length;ae<et;ae++){const De=V[ae];ce=q[ae];for(let C=0,E=De.length;C<E;C++){const H=W(De[C],ce[C],me);Ie(H.x,H.y,-le)}}}const ee=x+S;for(let U=0;U<j;U++){const oe=f?W(T[U],fe[U],ee):T[U];M?(R.copy(N.normals[0]).multiplyScalar(oe.x),A.copy(N.binormals[0]).multiplyScalar(oe.y),k.copy(v[0]).add(R).add(A),Ie(k.x,k.y,k.z)):Ie(oe.x,oe.y,0)}for(let U=1;U<=u;U++)for(let oe=0;oe<j;oe++){const le=f?W(T[oe],fe[oe],ee):T[oe];M?(R.copy(N.normals[U]).multiplyScalar(le.x),A.copy(N.binormals[U]).multiplyScalar(le.y),k.copy(v[U]).add(R).add(A),Ie(k.x,k.y,k.z)):Ie(le.x,le.y,h/u*U)}for(let U=g-1;U>=0;U--){const oe=U/g,le=p*Math.cos(oe*Math.PI/2),me=x*Math.sin(oe*Math.PI/2)+S;for(let ae=0,et=I.length;ae<et;ae++){const De=W(I[ae],Y[ae],me);Ie(De.x,De.y,h+le)}for(let ae=0,et=V.length;ae<et;ae++){const De=V[ae];ce=q[ae];for(let C=0,E=De.length;C<E;C++){const H=W(De[C],ce[C],me);M?Ie(H.x,H.y+v[u-1].y,v[u-1].x+le):Ie(H.x,H.y,h+le)}}}de(),Pe();function de(){const U=r.length/3;if(f){let oe=0,le=j*oe;for(let me=0;me<ne;me++){const ae=ie[me];at(ae[2]+le,ae[1]+le,ae[0]+le)}oe=u+g*2,le=j*oe;for(let me=0;me<ne;me++){const ae=ie[me];at(ae[0]+le,ae[1]+le,ae[2]+le)}}else{for(let oe=0;oe<ne;oe++){const le=ie[oe];at(le[2],le[1],le[0])}for(let oe=0;oe<ne;oe++){const le=ie[oe];at(le[0]+j*u,le[1]+j*u,le[2]+j*u)}}i.addGroup(U,r.length/3-U,0)}function Pe(){const U=r.length/3;let oe=0;He(I,oe),oe+=I.length;for(let le=0,me=V.length;le<me;le++){const ae=V[le];He(ae,oe),oe+=ae.length}i.addGroup(U,r.length/3-U,1)}function He(U,oe){let le=U.length;for(;--le>=0;){const me=le;let ae=le-1;ae<0&&(ae=U.length-1);for(let et=0,De=u+g*2;et<De;et++){const C=j*et,E=j*(et+1),H=oe+me+C,ge=oe+ae+C,xe=oe+ae+E,pe=oe+me+E;rt(H,ge,xe,pe)}}}function Ie(U,oe,le){l.push(U),l.push(oe),l.push(le)}function at(U,oe,le){Ze(U),Ze(oe),Ze(le);const me=r.length/3,ae=m.generateTopUV(i,r,me-3,me-2,me-1);je(ae[0]),je(ae[1]),je(ae[2])}function rt(U,oe,le,me){Ze(U),Ze(oe),Ze(me),Ze(oe),Ze(le),Ze(me);const ae=r.length/3,et=m.generateSideWallUV(i,r,ae-6,ae-3,ae-2,ae-1);je(et[0]),je(et[1]),je(et[3]),je(et[1]),je(et[2]),je(et[3])}function Ze(U){r.push(l[U*3+0]),r.push(l[U*3+1]),r.push(l[U*3+2])}function je(U){s.push(U.x),s.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return _A(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new gf[r.type]().fromJSON(r)),new Or(i,e.options)}}const vA={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ye(s,o),new ye(a,l),new ye(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],p=e[r*3+1],x=e[r*3+2],S=e[s*3],g=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ye(o,1-l),new ye(c,1-h),new ye(f,1-x),new ye(S,1-d)]:[new ye(a,1-l),new ye(u,1-h),new ye(p,1-x),new ye(g,1-d)]}};function _A(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Xo extends Ap{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Xo(e.radius,e.detail)}}class xu extends vn{constructor(e=new Yi([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(s,3)),this.setAttribute("uv",new kt(o,2));function c(u){const h=r.length/3,f=u.extractPoints(n);let p=f.shape;const x=f.holes;Jr.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,d=x.length;g<d;g++){const m=x[g];Jr.isClockWise(m)===!0&&(x[g]=m.reverse())}const S=Jr.triangulateShape(p,x);for(let g=0,d=x.length;g<d;g++){const m=x[g];p=p.concat(m)}for(let g=0,d=p.length;g<d;g++){const m=p[g];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let g=0,d=S.length;g<d;g++){const m=S[g],v=m[0]+h,M=m[1]+h,N=m[2]+h;i.push(v,M,N),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return yA(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new xu(i,e.curveSegments)}}function yA(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class zu extends vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new O,f=new O,p=[],x=[],S=[],g=[];for(let d=0;d<=i;d++){const m=[],v=d/i;let M=0;d===0&&o===0?M=.5/n:d===i&&l===Math.PI&&(M=-.5/n);for(let N=0;N<=n;N++){const A=N/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),x.push(h.x,h.y,h.z),f.copy(h).normalize(),S.push(f.x,f.y,f.z),g.push(A+M,1-v),m.push(c++)}u.push(m)}for(let d=0;d<i;d++)for(let m=0;m<n;m++){const v=u[d][m+1],M=u[d][m],N=u[d+1][m],A=u[d+1][m+1];(d!==0||o>0)&&p.push(v,M,A),(d!==i-1||l<Math.PI)&&p.push(M,N,A)}this.setIndex(p),this.setAttribute("position",new kt(x,3)),this.setAttribute("normal",new kt(S,3)),this.setAttribute("uv",new kt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bt extends Fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=o_,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const _f={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class SA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],x=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null}}}const MA=new SA;class Cp{constructor(e){this.manager=e!==void 0?e:MA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cp.DEFAULT_MATERIAL_NAME="__DEFAULT";class wA extends Cp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=_f.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=dl("img");function l(){u(),_f.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Sc extends Cp{constructor(e){super(e)}load(e,n,i,r){const s=new qn,o=new wA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Rp extends Tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const nh=new rn,b0=new O,T0=new O;class U_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mp,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;b0.setFromMatrixPosition(e.matrixWorld),n.position.copy(b0),T0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(T0),n.updateMatrixWorld(),nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const A0=new rn,ya=new O,ih=new O;class EA extends U_{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ya.setFromMatrixPosition(e.matrixWorld),i.position.copy(ya),ih.copy(i.position),ih.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ih),i.updateMatrixWorld(),r.makeTranslation(-ya.x,-ya.y,-ya.z),A0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(A0)}}class bA extends Rp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new EA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class TA extends U_{constructor(){super(new wp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rh extends Rp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new TA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sh extends Rp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class AA{constructor(e,n,i=0,r=1/0){this.ray=new yp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Sp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return yf(e,this,i,n),i.sort(C0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)yf(e[r],this,i,n);return i.sort(C0),i}}function C0(t,e){return t.distance-e.distance}function yf(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)yf(r[s],e,n,!0)}}class CA extends mf{constructor(e=10,n=10,i=4473924,r=8947848){i=new Mt(i),r=new Mt(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let f=0,p=0,x=-a;f<=n;f++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const S=f===s?i:r;S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3}const u=new vn;u.setAttribute("position",new kt(l,3)),u.setAttribute("color",new kt(c,3));const h=new Va({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);class oh extends Fc{constructor(e=null){super();const n=new pn;n.deleteAttribute("uv");const i=new Bt({side:Yn}),r=new Bt;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const o=new bA(16777215,s,28,2);o.position.set(.418,16.199,.3),this.add(o);const a=new ke(n,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const l=new ke(n,r);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new ke(n,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const u=new ke(n,r);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const h=new ke(n,r);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const f=new ke(n,r);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);const p=new ke(n,r);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const x=new ke(n,uo(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);const S=new ke(n,uo(50));S.position.set(-16.109,18.021,-8.207),S.scale.set(.1,2.425,2.751),this.add(S);const g=new ke(n,uo(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const d=new ke(n,uo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const m=new ke(n,uo(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const v=new ke(n,uo(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function uo(t){const e=new Ji;return e.color.setScalar(t),e}/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O_=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=$e.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>$e.createElement("svg",{ref:l,...PA,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:O_("lucide",r),...a},[...o.map(([c,u])=>$e.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=(t,e)=>{const n=$e.forwardRef(({className:i,...r},s)=>$e.createElement(LA,{ref:s,iconNode:e,className:O_(`lucide-${RA(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Mc=an("Camera",NA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],DA=an("Car",IA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],R0=an("Download",UA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],FA=an("FolderOpen",OA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],P0=an("Image",kA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],BA=an("Layers",zA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],VA=an("LockOpen",HA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],WA=an("Lock",GA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],XA=an("Map",jA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],YA=an("Mountain",$A);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],ZA=an("Move",qA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],L0=an("Plus",KA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],QA=an("Redo",JA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],tC=an("Save",eC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["path",{d:"M12 22v-7l-2-2",key:"eqv9mc"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z",key:"ubcgy"}],["path",{d:"m14 14-2 2",key:"847xa2"}]],iC=an("Shrub",nC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],sC=an("Square",rC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],N0=an("Trash2",oC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],lC=an("Trees",aC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],uC=an("Type",cC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],hC=an("Undo",dC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],pC=an("Upload",fC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ah=an("X",mC),Sa=()=>Math.random().toString(36).substr(2,9),On={camera:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899"],building:["#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b"],tree:["#22c55e","#16a34a","#15803d","#14532d","#84cc16","#bef264"],shrub:["#4ade80","#86efac","#22c55e","#166534","#bbf7d0","#15803d"],parking:["#e2e8f0","#cbd5e1","#94a3b8","#f8fafc","#ffffff","#f1f5f9"],label:["#1e293b","#334155","#475569","#64748b","#ef4444","#3b82f6"],terrain:{water:"#3b82f6",grass:"#22c55e",dirt:"#a16207",concrete:"#94a3b8",gravel:"#78716c",sand:"#fbbf24"}},lh={width:1e3,height:700},ei=(t,e,n)=>Math.min(Math.max(t,e),n),ch=t=>{let e=t%360;return e>180&&(e-=360),e<-180&&(e+=360),e},Qt=(t,e)=>[{x:-t/2,y:-e/2},{x:t/2,y:-e/2},{x:t/2,y:e/2},{x:-t/2,y:e/2}],F_=t=>{const e=t.map(a=>a.x),n=t.map(a=>a.y),i=Math.min(...e),r=Math.max(...e),s=Math.min(...n),o=Math.max(...n);return{minX:i,maxX:r,minY:s,maxY:o,width:r-i,height:o-s}},uh=t=>{const e=new mr,n=t.width,i=t.height,r=12,s=3,o=t.color,l=t.id.split("").reduce((X,ie)=>X+ie.charCodeAt(0),0)%4,c=new Bt({color:o,roughness:.2,metalness:.3,flatShading:!0}),u=new Bt({color:"#1e293b",roughness:.1,metalness:.9,flatShading:!0}),h=new Bt({color:"#171717",roughness:.5,flatShading:!0}),f=new Is(s,s,n*.15,12);f.rotateZ(Math.PI/2);const p=i*.35,x=n*.45;(()=>{[-1,1].forEach(X=>{[-1,1].forEach(ie=>{const I=new ke(f,h);I.position.set(X*x,s,ie*p),I.castShadow=!0,e.add(I)})})})();const g=s+1;if(l===1){const X=r*.9,ie=new ke(new pn(n,X,i),c);ie.position.y=g+X/2,ie.castShadow=!0,ie.receiveShadow=!0,e.add(ie);const I=r*.7,W=i*.8,j=n*.85,ne=new ke(new pn(j,I,W),c);ne.position.y=g+X+I/2-2,ne.castShadow=!0,e.add(ne);const B=new ke(new pn(j+.2,I*.7,W*.9),u);B.position.copy(ne.position),e.add(B)}else if(l===2){const X=i*.35,ie=i*.6,I=r*1.5,W=new ke(new pn(n,r*.6,i),c);W.position.y=g+r*.3,W.castShadow=!0,e.add(W);const j=new ke(new pn(n*.95,I,X),c);j.position.set(0,g+r*.3+I/2,-i/2+X/2+2),j.castShadow=!0,e.add(j);const ne=new ke(new pn(n+.1,I*.5,X*.7),u);ne.position.copy(j.position),ne.position.y+=2,e.add(ne);const B=4,Y=new ke(new pn(n*.95,B,ie),c);Y.position.set(0,g+r*.6+B/2,i/2-ie/2),e.add(Y)}else if(l===3){const X=r*.7,ie=new ke(new pn(n,X,i),c);ie.position.y=g+X/2,ie.castShadow=!0,e.add(ie);const I=r*.5,W=i*.5,j=new ke(new pn(n*.7,I,W),c);j.position.y=g+X+I/2-1,e.add(j);const ne=new ke(new pn(n*.72,I*.8,W*.8),u);ne.position.copy(j.position),e.add(ne)}else{const X=r*.6,ie=new ke(new pn(n,X,i),c);ie.position.y=g+X/2,ie.castShadow=!0,e.add(ie);const I=r*.8,W=i*.5,j=new ke(new pn(n*.85,I,W),c);j.position.y=g+X+I/2-1,j.castShadow=!0,e.add(j);const ne=new ke(new pn(n*.9,I*.8,W*.9),u);ne.position.copy(j.position),e.add(ne)}const d=new vi(3,2),m=new Ji({color:"#fef3c7"}),v=new Ji({color:"#ef4444"}),M=-i/2-.1,N=i/2+.1,A=g+r*.6,R=n*.35,k=new ke(d,m);k.position.set(-R,A,M),k.rotation.y=Math.PI,e.add(k);const b=new ke(d,m);b.position.set(R,A,M),b.rotation.y=Math.PI,e.add(b);const T=new ke(d,v);T.position.set(-R,A,N),e.add(T);const V=new ke(d,v);return V.position.set(R,A,N),e.add(V),e.position.set(t.x,0,t.y),e.rotation.y=-fn.degToRad(t.rotation),e},dh=t=>{const e=new mr,n=t.id.split("").reduce((u,h)=>u+h.charCodeAt(0),0),i=t.treeType??(n%2===0?"pine":"oak"),r=t.height3d??t.radius*1.6,s=t.radius*.15,o=i==="palm"?r*.7:i==="pine"?r*.4:r*.35,a=new Is(s*.6,s,o,6),l=new Bt({color:i==="palm"?"#8B7355":"#4a3728",roughness:1,flatShading:!0}),c=new ke(a,l);if(c.position.y=o/2,c.castShadow=!0,c.receiveShadow=!0,e.add(c),i==="pine"){const u="#1e4620",h=new Bt({color:u,roughness:.8,flatShading:!0}),f=4,p=t.radius,S=(r-o*.3)/f;for(let g=0;g<f;g++){const d=g/(f-1),m=p*(1-d*.6),v=o*.3+g*(S*.8),M=new ke(new gu(m,S*1.5,7),h);M.position.y=v,M.castShadow=!0,M.receiveShadow=!0,e.add(M)}}else if(i==="palm"){const u="#228B22",h=new Bt({color:u,roughness:.7,flatShading:!0,side:Xn}),f=8;for(let x=0;x<f;x++){const S=x/f*Math.PI*2,g=t.radius*1.5,d=t.radius*.3,m=new gu(d,g,4),v=new ke(m,h);v.position.set(Math.cos(S)*t.radius*.3,o+g*.2,Math.sin(S)*t.radius*.3),v.rotation.z=Math.cos(S)*.8,v.rotation.x=Math.sin(S)*.8,v.castShadow=!0,e.add(v)}const p=new Bt({color:"#8B4513",roughness:.9});for(let x=0;x<3;x++){const S=new ke(new zu(t.radius*.08,6,6),p),g=x/3*Math.PI*2;S.position.set(Math.cos(g)*s*1.5,o-t.radius*.1,Math.sin(g)*s*1.5),e.add(S)}}else{const u=t.color,h=new Bt({color:u,roughness:.8,flatShading:!0}),f=new Xo(t.radius*.8,0),p=new ke(f,h);p.position.y=o+t.radius*.4,p.castShadow=!0,p.receiveShadow=!0,e.add(p);const x=10;for(let S=0;S<x;S++){const d=(n+S*13)%100/100*Math.PI*2,m=(n+S*7)%100/100*Math.PI,v=t.radius*(.3+(n+S*3)%5/10),M=t.radius*.7,N=new ke(new Xo(v,0),h);N.position.set(Math.sin(m)*Math.cos(d)*M,p.position.y+Math.cos(m)*M*.8,Math.sin(m)*Math.sin(d)*M),N.castShadow=!0,e.add(N)}}return e.position.set(t.x,0,t.y),e.rotation.y=-fn.degToRad(t.rotation),e},I0=t=>{const e=new mr,n=t.points??Qt(t.width,t.height),i=t.height3d??8,r=new Yi;if(n.length>0){r.moveTo(n[0].x,-n[0].y);for(let x=1;x<n.length;x++)r.lineTo(n[x].x,-n[x].y);r.closePath()}const s={depth:i,bevelEnabled:!0,bevelThickness:2,bevelSize:3,bevelSegments:3},o=new Bt({color:t.color,roughness:.9,flatShading:!0}),a=new Or(r,s);a.rotateX(-Math.PI/2);const l=new ke(a,o);l.castShadow=!0,l.receiveShadow=!0,e.add(l);const c=new Bt({color:k_(t.color,20),roughness:.8,flatShading:!0}),u=F_(n),h=Math.max(3,Math.floor((u.width+u.height)/20)),f=t.id.split("").reduce((x,S)=>x+S.charCodeAt(0),0);for(let x=0;x<h;x++){const S=x/h,g=Math.floor(S*n.length),d=(g+1)%n.length,m=S*n.length%1,v=n[g].x+(n[d].x-n[g].x)*m,M=n[g].y+(n[d].y-n[g].y)*m,N=3+(f+x*7)%4,A=new ke(new Xo(N,0),c);A.position.set(v*.6,i+N*.5,M*.6),A.castShadow=!0,e.add(A)}const p=new ke(new Xo(i*.4,0),c);return p.position.set(0,i+i*.2,0),p.castShadow=!0,e.add(p),e.position.set(t.x,0,t.y),e.rotation.y=-fn.degToRad(t.rotation),e},Ma=(t,e,n)=>{const i=F_(t);if(i.width===0||i.height===0)return t;const r={x:(i.minX+i.maxX)/2,y:(i.minY+i.maxY)/2},s=e/i.width,o=n/i.height;return t.map(a=>({x:r.x+(a.x-r.x)*s,y:r.y+(a.y-r.y)*o}))},hh=t=>{if(t.length<2)return t;let e=0,n=0;for(let o=0;o<t.length;o+=1){const a=(o+1)%t.length,l=t[a].x-t[o].x,c=t[a].y-t[o].y,u=Math.hypot(l,c);u>n&&(n=u,e=o)}const i=(e+1)%t.length,r={x:(t[e].x+t[i].x)/2,y:(t[e].y+t[i].y)/2},s=[...t];return s.splice(e+1,0,r),s},gC=(t,e)=>{if(t.length<2)return t;let n=0,i=Number.POSITIVE_INFINITY,r=e;for(let o=0;o<t.length;o+=1){const a=(o+1)%t.length,l=t[o],c=t[a],u={x:c.x-l.x,y:c.y-l.y},h={x:e.x-l.x,y:e.y-l.y},f=u.x*u.x+u.y*u.y||1;let p=(h.x*u.x+h.y*u.y)/f;p=ei(p,0,1);const x={x:l.x+u.x*p,y:l.y+u.y*p},S=Math.hypot(e.x-x.x,e.y-x.y);S<i&&(i=S,n=o+1,r=x)}const s=[...t];return s.splice(n,0,r),s},k_=(t,e)=>{const n=t.replace("#",""),i=n.length===3?n.split("").map(l=>l+l).join(""):n,r=parseInt(i,16),s=ei((r>>16)+e,0,255),o=ei((r>>8&255)+e,0,255),a=ei((r&255)+e,0,255);return`#${(s<<16|o<<8|a).toString(16).padStart(6,"0")}`},xC=(t,e)=>{const n=t*Math.PI/180,i=2*Math.atan(Math.tan(n/2)/Math.sqrt(e*e+1));return{h:2*Math.atan(Math.tan(i/2)*e)*180/Math.PI,v:i*180/Math.PI}},vC=(t,e)=>{const n=t*Math.PI/180,i=e*Math.PI/180;return 2*Math.atan(Math.sqrt(Math.tan(n/2)**2+Math.tan(i/2)**2))*180/Math.PI},wa=(t,e)=>{const n=t*Math.PI/180;return 2*Math.atan(Math.tan(n/2)/e)*180/Math.PI},_C=(t,e)=>{const n=t*Math.PI/180;return 2*Math.atan(Math.tan(n/2)*e)*180/Math.PI},D0=(t,e)=>{let n=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){const s=e[i].x,o=e[i].y,a=e[r].x,l=e[r].y;o>t.y!=l>t.y&&t.x<(a-s)*(t.y-o)/(l-o)+s&&(n=!n)}return n};function yC(){var Ip,Dp,Up,Op,Fp,kp;const[t,e]=$e.useState([]),[n,i]=$e.useState(null),r=$e.useRef(null);$e.useEffect(()=>{r.current=n},[n]);const[s,o]=$e.useState([]),[a,l]=$e.useState(-1),c=$e.useRef([]),u=$e.useRef(-1);$e.useEffect(()=>{c.current=s,u.current=a},[s,a]);const h=()=>{const _=JSON.stringify(t);a>=0&&s[a]===_||(o(w=>{const L=w.slice(0,a+1);return L.push(_),L.length>30&&L.shift(),L}),l(w=>{const L=w+1;return L>=30?29:L}))},f=()=>{const _=u.current;if(_>0){const w=_-1;try{const L=JSON.parse(c.current[w]);e(L),l(w)}catch(L){console.error("Undo failed",L)}}},p=()=>{const _=u.current;if(_<c.current.length-1){const w=_+1;try{const L=JSON.parse(c.current[w]);e(L),l(w)}catch(L){console.error("Redo failed",L)}}},[x,S]=$e.useState(lh),[g,d]=$e.useState(null),[m,v]=$e.useState({x:0,y:0,width:lh.width,height:lh.height,opacity:.5}),[M,N]=$e.useState(20),[A,R]=$e.useState(!0),[k,b]=$e.useState(!0),[T,V]=$e.useState("Security Camera Plan"),[X,ie]=$e.useState(!1),[I,W]=$e.useState("plan"),[j,ne]=$e.useState({scale:2,padding:48,includeGrid:!0,includeLegend:!0,includeTitle:!0,includeCameraViews:!0}),[B,Y]=$e.useState({x:0,y:0}),[q,ce]=$e.useState(1),[fe,ee]=$e.useState(!1),[de,Pe]=$e.useState({x:0,y:0,panX:0,panY:0}),[He,Ie]=$e.useState(!1),at=$e.useRef(!1),[rt,Ze]=$e.useState("select"),[je,U]=$e.useState(null),[oe,le]=$e.useState({type:null,itemId:null,startMouse:{x:0,y:0},startVal:null,snap:!1}),me=$e.useRef(null),ae=$e.useRef(null),et=$e.useRef(null),De=$e.useRef(null),C=$e.useRef(null),E=$e.useRef(null),H=$e.useRef(null),[ge,xe]=$e.useState([]),[pe,We]=$e.useState(!1),[Te,ze]=$e.useState(!0),[Ue,dt]=$e.useState([]),[re,wt]=$e.useState({visible:!0,opacity:.15,edgeOpacity:.6,useCameraColor:!0,color:"#3b82f6",showAll:!0,mode:"volume"}),[ht,ft]=$e.useState(null),[Ye,Ve]=$e.useState("flat"),[it,Ct]=$e.useState(null);$e.useEffect(()=>{const _=localStorage.getItem("securityCameraPlannerData");if(_)try{const w=JSON.parse(_);w.items&&e(w.items),w.backgroundImg&&d(w.backgroundImg),w.bgSettings&&v(w.bgSettings),w.canvasSize&&S(w.canvasSize),w.exportList&&dt(w.exportList),w.projectName&&V(w.projectName),w.frustumSettings&&wt(w.frustumSettings),w.sceneBackgroundImg&&ft(w.sceneBackgroundImg),w.backgroundMode&&Ve(w.backgroundMode)}catch(w){console.error("Failed to load saved state",w)}},[]),$e.useEffect(()=>{const _=setTimeout(()=>{try{const w={items:t,backgroundImg:g,bgSettings:m,canvasSize:x,exportList:Ue,projectName:T,frustumSettings:re,sceneBackgroundImg:ht,backgroundMode:Ye};localStorage.setItem("securityCameraPlannerData",JSON.stringify(w))}catch(w){if(w.name==="QuotaExceededError"||w.name==="NS_ERROR_DOM_QUOTA_REACHED"){console.error("Storage full, trying to save without background image");try{const L={items:t,bgSettings:m,canvasSize:x,exportList:Ue,projectName:T};localStorage.setItem("securityCameraPlannerData",JSON.stringify(L))}catch(L){console.error("Still failed to save",L)}}else console.error("Failed to save state",w)}},1e3);return()=>clearTimeout(_)},[t,g,m,x,Ue,T,re,ht,Ye]);const Ht=$e.useRef(null),gt=$e.useRef(null),be=(_,w=k)=>w?Math.round(_/M)*M:_,F=_=>_.points&&_.points.length>=3?_.points:Qt(_.width,_.height),Le=(_,w)=>{const L=w*Math.PI/180,z=Math.cos(L),D=Math.sin(L);return{x:_.x*z-_.y*D,y:_.x*D+_.y*z}},Ce=(_,w)=>{const L=Le(_,w.rotation);return{x:w.x+L.x,y:w.y+L.y}},ct=(_,w)=>{const L=_.x-w.x,z=_.y-w.y;return Le({x:L,y:z},-w.rotation)},st=_=>t.find(w=>w.type==="building"&&w.id===_),Rt=_=>F(_).map(L=>Ce(L,_)),Tt=_=>{var w;if(((w=_.mount)==null?void 0:w.type)==="building"&&_.mount.buildingId){const L=st(_.mount.buildingId);if(!L)return{x:_.x,y:_.y};const z=Rt(L);if(z.length<2)return{x:_.x,y:_.y};const D=ei(_.mount.edgeIndex??0,0,z.length-1),se=(D+1)%z.length,$=z[D],te=z[se],he=ei(_.mount.edgeT??.5,0,1),_e={x:$.x+(te.x-$.x)*he,y:$.y+(te.y-$.y)*he},we=z.reduce((Ee,ve)=>({x:Ee.x+ve.x,y:Ee.y+ve.y}),{x:0,y:0});z.length>0&&(we.x/=z.length,we.y/=z.length);const Be={x:_e.x-we.x,y:_e.y-we.y},Oe=Math.hypot(Be.x,Be.y)||1,Se=3;return{x:_e.x+Be.x/Oe*Se,y:_e.y+Be.y/Oe*Se}}return{x:_.x,y:_.y}},un=_=>{let w=null;return t.forEach(L=>{if(L.type!=="building")return;const z=L,D=Rt(z);for(let se=0;se<D.length;se+=1){const $=(se+1)%D.length,te=D[se],he=D[$],_e={x:he.x-te.x,y:he.y-te.y},we={x:_.x-te.x,y:_.y-te.y},Be=_e.x*_e.x+_e.y*_e.y||1;let Oe=(we.x*_e.x+we.y*_e.y)/Be;Oe=ei(Oe,0,1);const Se={x:te.x+_e.x*Oe,y:te.y+_e.y*Oe},Ee=Math.hypot(_.x-Se.x,_.y-Se.y);(!w||Ee<w.distance)&&(w={buildingId:z.id,edgeIndex:se,edgeT:Oe,distance:Ee,point:Se})}}),w},Sn=_=>{let w=null;return t.forEach(L=>{if(L.type!=="building")return;const z=L,D=Rt(z),se={x:D.reduce(($,te)=>$+te.x,0)/D.length,y:D.reduce(($,te)=>$+te.y,0)/D.length};for(let $=0;$<D.length;$+=1){const te=($+1)%D.length,he=D[$],_e=D[te],we={x:_e.x-he.x,y:_e.y-he.y},Be={x:_.x-he.x,y:_.y-he.y},Oe=we.x*we.x+we.y*we.y||1;let Se=(Be.x*we.x+Be.y*we.y)/Oe;Se=ei(Se,0,1);const Ee={x:he.x+we.x*Se,y:he.y+we.y*Se},ve=Math.hypot(_.x-Ee.x,_.y-Ee.y),Ne={x:(he.x+_e.x)/2,y:(he.y+_e.y)/2},Qe={x:Ne.x-se.x,y:Ne.y-se.y},ue=Math.atan2(Qe.y,Qe.x)*(180/Math.PI);(!w||ve<w.distance)&&(w={buildingId:z.id,edgeIndex:$,edgeT:Se,distance:ve,point:Ee,rotation:ue})}}),w};x.width/2;const Ut=(_,w)=>{if(!me.current||I==="iso3d")return;const L=me.current.getScreenCTM();if(!L)return;const z=be((_.clientX-L.e)/L.a),D=be((_.clientY-L.f)/L.d);let se;const $={id:Sa(),x:z,y:D,rotation:0};switch(w){case"add-camera":se={...$,type:"camera",rotation:45,label:"Camera",description:"",fov:70,hFov:70,vFov:45,pitch:-15,height:60,aspect:16/9,mount:{type:"free",edgeT:.5,height:60},range:150,color:On.camera[0],labelOffset:{x:0,y:30},connectorDashSize:3};break;case"add-building":se={...$,type:"building",width:100,height:80,label:"Building",color:On.building[0],points:Qt(100,80)};break;case"add-tree":se={...$,type:"tree",radius:25,color:On.tree[0],size:"medium",treeType:"oak",height3d:40};break;case"add-shrub":se={...$,type:"shrub",width:60,height:40,height3d:8,color:On.shrub[0],points:Qt(60,40)};break;case"add-terrain":se={...$,type:"terrain",width:150,height:100,terrainType:"grass",color:On.terrain.grass,points:Qt(150,100),elevation:0};break;case"add-parking":se={...$,type:"parking",width:30,height:50,color:On.parking[0]};break;case"add-label":se={...$,type:"label",text:"Label",fontSize:14,color:On.label[0]};break;default:return}if(se.type==="camera"){const te=Sn({x:z,y:D});if(te&&te.distance<100){const he=se;he.x=te.point.x,he.y=te.point.y,he.rotation=te.rotation;const _e=60;he.mount={type:"building",buildingId:te.buildingId,edgeIndex:te.edgeIndex,edgeT:te.edgeT,height:_e},he.height=_e}Ct(null)}e([...t,se]),U(se.id),Ze("select")},An=_=>{const w={id:Sa(),type:"image",x:400,y:300,rotation:0,width:150,height:150,src:_,label:"Image",aspectRatioLocked:!0};e([...t,w]),U(w.id)},Ke=(_,w)=>{e(t.map(L=>L.id===_?{...L,...w}:L))},ks=(_,w)=>{const L=t.find(z=>z.id===_);!L||L.type!=="camera"||Ke(_,{mount:{...L.mount??{type:"free"},...w}})},Bu=_=>{var z;const w=t.find(D=>D.id===_);if(!w||w.type!=="camera")return;const L=un(w);L&&Ke(_,{x:L.point.x,y:L.point.y,mount:{type:"building",buildingId:L.buildingId,edgeIndex:L.edgeIndex,edgeT:L.edgeT,height:((z=w.mount)==null?void 0:z.height)??w.height??10}})},Bi=(_,w,L,z)=>{Ke(_,{hFov:w,vFov:L,aspect:z,fov:w})},Jo=(_,w,L)=>{const z=t.find($=>$.id===_);if(!z||z.type!=="building")return;const D=F(z),se=Ma(D,w,L);Ke(_,{width:w,height:L,points:se})},zs=_=>{const w=t.find(z=>z.id===_);if(!w||w.type!=="building")return;const L=hh(F(w));Ke(_,{points:L})},Qo=(_,w)=>{const L=t.find(se=>se.id===_);if(!L||L.type!=="building")return;const z=ct(w,L),D=gC(F(L),z);Ke(_,{points:D})},wl=_=>{const w=t.find(z=>z.id===_);if(!w||w.type!=="building")return;const L=F(w);L.length<=3||Ke(_,{points:L.slice(0,-1)})},Hu=_=>{const w=t.find(L=>L.id===_);!w||w.type!=="building"||Ke(_,{points:Qt(w.width,w.height)})},Bs=(_,w,L)=>{const z=t.find(se=>se.id===_);if(!z||z.type!=="image")return;if(!z.aspectRatioLocked){Ke(_,{width:w??z.width,height:L??z.height});return}const D=z.width/z.height;w!==void 0?Ke(_,{width:w,height:w/D}):L!==void 0&&Ke(_,{width:L*D,height:L})},El=_=>{e(t.filter(w=>w.id!==_)),je===_&&U(null)},P=()=>{t.length&&window.confirm("Clear all items from the canvas?")&&(e([]),U(null))},G=()=>{v({...m,x:0,y:0,width:x.width,height:x.height})},J=()=>{if(!me.current)return;const{scale:_,padding:w,includeGrid:L,includeLegend:z,includeTitle:D}=j,se=new Date().toLocaleString(),$=x.width,te=x.height,he=D?52:0,_e=z?90:0,we=$+w*2,Be=te+w*2+he+_e,Oe="http://www.w3.org/2000/svg",Se=document.createElementNS(Oe,"svg");Se.setAttribute("xmlns",Oe),Se.setAttribute("width",`${we}`),Se.setAttribute("height",`${Be}`),Se.setAttribute("viewBox",`0 0 ${we} ${Be}`);const Ee=document.createElementNS(Oe,"rect");if(Ee.setAttribute("x","0"),Ee.setAttribute("y","0"),Ee.setAttribute("width",`${we}`),Ee.setAttribute("height",`${Be}`),Ee.setAttribute("fill","#ffffff"),Se.appendChild(Ee),D){const nt=document.createElementNS(Oe,"text");nt.setAttribute("x",`${w}`),nt.setAttribute("y",`${w+24}`),nt.setAttribute("font-size","20"),nt.setAttribute("font-weight","700"),nt.setAttribute("fill","#0f172a"),nt.textContent=T||"Security Camera Plan",Se.appendChild(nt);const yt=document.createElementNS(Oe,"text");yt.setAttribute("x",`${w}`),yt.setAttribute("y",`${w+44}`),yt.setAttribute("font-size","12"),yt.setAttribute("fill","#64748b"),yt.textContent=`Exported ${se}`,Se.appendChild(yt)}const ve=document.createElementNS(Oe,"g"),Ne=w+he;ve.setAttribute("transform",`translate(${w}, ${Ne})`);const Qe=me.current.cloneNode(!0);if(Qe.removeAttribute("width"),Qe.removeAttribute("height"),!L){const nt=Qe.querySelector("#grid-bg");nt&&nt.remove()}for(;Qe.childNodes.length>0;)ve.appendChild(Qe.childNodes[0]);Se.appendChild(ve);const ue=document.createElementNS(Oe,"rect");if(ue.setAttribute("x",`${w-1}`),ue.setAttribute("y",`${Ne-1}`),ue.setAttribute("width",`${$+2}`),ue.setAttribute("height",`${te+2}`),ue.setAttribute("fill","none"),ue.setAttribute("stroke","#e2e8f0"),ue.setAttribute("stroke-width","2"),Se.appendChild(ue),z){const nt=Ne+te+36,yt=[{label:"Cameras",count:t.filter(At=>At.type==="camera").length,color:On.camera[0]},{label:"Buildings",count:t.filter(At=>At.type==="building").length,color:On.building[0]},{label:"Trees",count:t.filter(At=>At.type==="tree").length,color:On.tree[0]},{label:"Parking",count:t.filter(At=>At.type==="parking").length,color:On.parking[0]},{label:"Labels",count:t.filter(At=>At.type==="label").length,color:On.label[0]}],ut=document.createElementNS(Oe,"text");ut.setAttribute("x",`${w}`),ut.setAttribute("y",`${nt}`),ut.setAttribute("font-size","12"),ut.setAttribute("font-weight","600"),ut.setAttribute("fill","#0f172a"),ut.textContent="Legend",Se.appendChild(ut),yt.forEach((At,ln)=>{const Bn=w+ln*150,Mn=document.createElementNS(Oe,"rect");Mn.setAttribute("x",`${Bn}`),Mn.setAttribute("y",`${nt+14}`),Mn.setAttribute("width","10"),Mn.setAttribute("height","10"),Mn.setAttribute("rx","2"),Mn.setAttribute("fill",At.color),Se.appendChild(Mn);const Ci=document.createElementNS(Oe,"text");Ci.setAttribute("x",`${Bn+16}`),Ci.setAttribute("y",`${nt+23}`),Ci.setAttribute("font-size","11"),Ci.setAttribute("fill","#475569"),Ci.textContent=`${At.label} (${At.count})`,Se.appendChild(Ci)})}const Re=document.createElement("canvas"),ot=Re.getContext("2d");Re.width=we*_,Re.height=Be*_,ot&&ot.scale(_,_);const Nt=new XMLSerializer().serializeToString(Se),qe=new Image,Je=new Blob([Nt],{type:"image/svg+xml;charset=utf-8"}),Xe=URL.createObjectURL(Je);qe.onload=()=>{if(ot){ot.fillStyle="#ffffff",ot.fillRect(0,0,we,Be),ot.drawImage(qe,0,0);const nt=Re.toDataURL("image/png"),yt=document.createElement("a");yt.href=nt,yt.download="security_plan.png",document.body.appendChild(yt),yt.click(),document.body.removeChild(yt)}URL.revokeObjectURL(Xe)},qe.src=Xe},Q=(_,w,L,z)=>{dt(D=>[...D,{id:crypto.randomUUID(),type:_,label:w,dataUrl:L,cameraId:z}])},K=_=>{var Nt;const z=Tt(_),D=((Nt=_.mount)==null?void 0:Nt.height)??_.height??10,se=_.hFov??_.fov,$=_.pitch??-15,te=_.range,he=fn.degToRad(_.rotation),_e=new Fc;_e.background=new Mt("#87CEEB"),_e.fog=new Ha("#87CEEB",te*.3,te*1.2);const we=new ni(se,640/480,1,te*2);we.position.set(z.x,D,z.y);const Be=fn.degToRad($),Oe=new O(z.x+Math.cos(he)*100,D+Math.tan(Be)*100,z.y+Math.sin(he)*100);we.lookAt(Oe),_e.add(new sh(16777215,.5));const Se=new rh(16777215,.7);Se.position.set(100,200,50),_e.add(Se);const Ee=new ke(new vi(x.width*2,x.height*2),new Bt({color:"#6B8E23",roughness:.9}));if(Ee.rotation.x=-Math.PI/2,Ee.position.set(x.width/2,-.5,x.height/2),_e.add(Ee),gt.current){const qe=new Jd(gt.current);qe.colorSpace=qt;const Je=new ke(new vi(m.width,m.height),new Ji({map:qe,transparent:!0,opacity:m.opacity}));Je.rotation.x=-Math.PI/2,Je.position.set(m.x+m.width/2,.1,m.y+m.height/2),_e.add(Je)}const ve=t.filter(qe=>qe.type==="terrain"),Ne=(qe,Je)=>{let Xe=0;for(const nt of ve){const ut=(nt.points??Qt(nt.width,nt.height)).map(At=>Ce(At,nt));D0({x:qe,y:Je},ut)&&(Xe=Math.max(Xe,nt.elevation??0))}return Xe};t.forEach(qe=>{const Je=Ne(qe.x,qe.y);if(qe.type==="building"){const Xe=qe,nt=F(Xe),yt=new Yi(nt.map(ln=>new ye(ln.x,-ln.y))),ut=new Or(yt,{depth:60,bevelEnabled:!1});ut.rotateX(-Math.PI/2);const At=new ke(ut,new Bt({color:Xe.color,side:Xn}));At.position.set(Xe.x,Je,Xe.y),At.rotation.y=-fn.degToRad(Xe.rotation),_e.add(At)}if(qe.type==="tree"){const Xe=dh(qe);Xe.position.y+=Je,_e.add(Xe)}if(qe.type==="shrub"){const Xe=I0(qe);Xe.position.y+=Je,_e.add(Xe)}if(qe.type==="terrain"){const Xe=qe,nt=Xe.points??Qt(Xe.width,Xe.height),yt=Xe.elevation??0,ut=50,At=yt+ut,ln=new Yi(nt.map(Al=>new ye(Al.x,-Al.y))),Bn={depth:At,bevelEnabled:!1},Mn=new Or(ln,Bn);Mn.rotateX(-Math.PI/2);const Ci=new Bt({color:Xe.color,roughness:Xe.terrainType==="water"?.1:.9,metalness:Xe.terrainType==="water"?.3:0,transparent:!0,opacity:Xe.terrainType==="water"?.7:.9,side:Xn}),ia=new ke(Mn,Ci);ia.position.set(Xe.x,-ut,Xe.y),ia.rotation.y=-fn.degToRad(Xe.rotation),_e.add(ia)}if(qe.type==="parking"){const Xe=uh(qe);Xe.position.y+=Je,_e.add(Xe)}});const Qe=document.createElement("canvas");Qe.width=640,Qe.height=480;const ue=new Oc({canvas:Qe,antialias:!0});ue.setSize(640,480),ue.render(_e,we);const Re=Qe.getContext("2d");if(Re){Re.fillStyle="rgba(0,0,0,0.7)",Re.fillRect(0,0,640,30),Re.fillStyle="#fff",Re.font="bold 14px sans-serif",Re.fillText(`📷 ${_.label}`,10,20),Re.font="12px sans-serif",Re.fillStyle="#94a3b8";const qe=`FOV: ${se.toFixed(0)}° | Pitch: ${$}° | Range: ${te}px`;Re.fillText(qe,640-Re.measureText(qe).width-10,20)}const ot=Qe.toDataURL("image/png");return ue.dispose(),ot},Fe=()=>{if(!me.current)return;const _=new XMLSerializer().serializeToString(me.current),w=document.createElement("canvas");w.width=x.width*2,w.height=x.height*2;const L=w.getContext("2d");if(!L)return;const z=new Image,D=new Blob([_],{type:"image/svg+xml;charset=utf-8"}),se=URL.createObjectURL(D);z.onload=()=>{L.scale(2,2),L.fillStyle="#f8fafc",L.fillRect(0,0,x.width,x.height),L.drawImage(z,0,0),Q("plan","2D Plan View",w.toDataURL("image/png")),URL.revokeObjectURL(se)},z.src=se},tt=_=>{const w=K(_);Q("camera",`Camera: ${_.label}`,w,_.id)},lt=_=>{var z;const w=(z=_.target.files)==null?void 0:z[0];if(!w)return;const L=new FileReader;L.onload=D=>{var te;const se=(te=D.target)==null?void 0:te.result,$=new Image;$.onload=()=>{const he=$.width/$.height,_e=he>=1.8&&he<=2.2;ft(se),Ve(_e?"panorama":"flat")},$.src=se},L.readAsDataURL(w)},pt=async()=>{if(Ue.length===0){alert("Add some views to the export list first!");return}const _=2,w=40,L=800,z=600,D=2,se=Math.ceil(Ue.length/D),$=(L+w)*D+w,te=120,he=te+(z+w+30)*se+w,_e=document.createElement("canvas");_e.width=$*_,_e.height=he*_;const we=_e.getContext("2d");if(!we)return;we.scale(_,_),we.fillStyle="#fff",we.fillRect(0,0,$,he),we.fillStyle="#0f172a",we.font="bold 28px sans-serif",we.fillText(T||"Security Camera Plan",w,w+30),we.fillStyle="#64748b",we.font="14px sans-serif",we.fillText(`Exported: ${new Date().toLocaleString()} | ${Ue.length} view(s)`,w,w+55);const Be=Ee=>new Promise((ve,Ne)=>{const Qe=new Image;Qe.onload=()=>ve(Qe),Qe.onerror=Ne,Qe.src=Ee});for(let Ee=0;Ee<Ue.length;Ee++){const ve=Ue[Ee],Ne=Ee%D,Qe=Math.floor(Ee/D),ue=w+Ne*(L+w),Re=te+Qe*(z+w+30);we.fillStyle="#334155",we.font="bold 14px sans-serif",we.fillText(ve.label,ue,Re+20),we.fillStyle="#f1f5f9",we.fillRect(ue,Re+28,L,z),we.strokeStyle="#e2e8f0",we.lineWidth=2,we.strokeRect(ue,Re+28,L,z);try{const ot=await Be(ve.dataUrl),Nt=ot.width/ot.height,qe=L/z;let Je,Xe,nt,yt;Nt>qe?(Je=L,Xe=L/Nt,nt=ue,yt=Re+28+(z-Xe)/2):(Xe=z,Je=z*Nt,nt=ue+(L-Je)/2,yt=Re+28),we.drawImage(ot,nt,yt,Je,Xe)}catch{we.fillStyle="#cbd5e1",we.font="16px sans-serif",we.fillText("Failed to load image",ue+20,Re+100)}}const Oe=_e.toDataURL("image/png"),Se=document.createElement("a");Se.href=Oe,Se.download=`${(T||"security_plan").replace(/\s+/g,"_")}_report.png`,document.body.appendChild(Se),Se.click(),document.body.removeChild(Se)},vt=()=>{if(Ue.length===0){alert("Add some views to the export list first!");return}const _=window.open("","_blank");if(!_){alert("Please allow popups to export PDF");return}const w=`
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
        
        ${Ue.map(L=>`
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
    `;_.document.write(w),_.document.close()},mt=()=>{const w=JSON.stringify({version:1,items:t,backgroundImg:g,bgSettings:m,canvasSize:x,gridSize:M,showGrid:A,snapToGrid:k,projectName:T,exportList:Ue},null,2),L=new Blob([w],{type:"application/json"}),z=URL.createObjectURL(L),D=document.createElement("a");D.href=z,D.download="security_project.json",document.body.appendChild(D),D.click(),document.body.removeChild(D),URL.revokeObjectURL(z)},xt=_=>{var z;const w=(z=_.target.files)==null?void 0:z[0];if(!w)return;const L=new FileReader;L.onload=D=>{var se;try{const $=(se=D.target)==null?void 0:se.result,te=JSON.parse($);te.items&&e(te.items),te.backgroundImg&&d(te.backgroundImg),te.bgSettings&&v(te.bgSettings),te.canvasSize&&S(te.canvasSize),typeof te.gridSize=="number"&&N(te.gridSize),typeof te.showGrid=="boolean"&&R(te.showGrid),typeof te.snapToGrid=="boolean"&&b(te.snapToGrid),te.projectName&&V(te.projectName),te.exportList&&dt(te.exportList)}catch($){console.error("Failed to load project file",$),alert("Invalid project file.")}},L.readAsText(w)},Jt=_=>{var L;const w=(L=_.target.files)==null?void 0:L[0];if(w){const z=new FileReader;z.onload=D=>{var se;return d((se=D.target)==null?void 0:se.result)},z.readAsDataURL(w)}},zn=_=>{var L;const w=(L=_.target.files)==null?void 0:L[0];if(w){const z=new FileReader;z.onload=D=>{var se;return An((se=D.target)==null?void 0:se.result)},z.readAsDataURL(w)}},dn=_=>{_.traverse(w=>{const L=w;L.geometry&&L.geometry.dispose(),L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.dispose()):L.material.dispose())}),_.clear()},ai=_=>{const w=document.createElement("canvas"),L=w.getContext("2d");if(!L)return null;const z=56,D=24;L.font=`${z}px Space Grotesk, sans-serif`;const se=L.measureText(_);w.width=Math.ceil(se.width+D*2),w.height=Math.ceil(z+D*1.6),L.font=`${z}px Space Grotesk, sans-serif`,L.fillStyle="rgba(15, 23, 42, 0.9)",L.textBaseline="middle",L.fillText(_,D,w.height/2);const $=new Jd(w);$.colorSpace=qt;const te=new b_({map:$,transparent:!0}),he=new HT(te);return he.scale.set(w.width/10,w.height/10,1),he},Wt=(_,w,L,z)=>{const D=_.x,se=_.y,$=w.x,te=w.y,he=L.x,_e=L.y,we=z.x,Be=z.y,Oe=D-he,Se=se-_e,Ee=we-he,ve=Be-_e,Ne=-te,Qe=$,ue=Ee*Ne+ve*Qe;if(Math.abs(ue)<1e-6)return null;const Re=(Ee*Se-ve*Oe)/ue,ot=(Oe*Ne+Se*Qe)/ue;return Re>=0&&ot>=0&&ot<=1?Re:null},_t=(_,w,L,z,D)=>{const se=D.flatMap(Be=>{if(Be.type==="building"){const Se=Rt(Be);return Se.length<2?[]:Se.map((Ee,ve)=>[Ee,Se[(ve+1)%Se.length]])}else if(Be.type==="tree"){const Oe=Be,Se=[],Ee=8;for(let ve=0;ve<Ee;ve++){const Ne=ve/Ee*Math.PI*2;Se.push({x:Oe.x+Oe.radius*Math.cos(Ne),y:Oe.y+Oe.radius*Math.sin(Ne)})}return Se.map((ve,Ne)=>[ve,Se[(Ne+1)%Se.length]])}else if(Be.type==="shrub"){const Oe=Be,Ee=(Oe.points??Qt(Oe.width,Oe.height)).map(ve=>Ce(ve,Oe));return Ee.length<2?[]:Ee.map((ve,Ne)=>[ve,Ee[(Ne+1)%Ee.length]])}return[]}),$=128,te=(z-L/2)*(Math.PI/180),_e=L*(Math.PI/180)/($-1),we=[];for(let Be=0;Be<$;Be++){const Oe=te+Be*_e,Se={x:Math.cos(Oe),y:Math.sin(Oe)};let Ee=w;for(const ve of se){const Ne=Wt(_,Se,ve[0],ve[1]);Ne!==null&&Ne<Ee&&(Ee=Ne)}we.push({x:Ee*Se.x,y:Ee*Se.y})}return we},ea=()=>{const _=H.current;if(!_)return;const{group:w,scene:L,renderer:z}=_;dn(w);const D=Math.max(x.width,x.height)*2,se=new vi(D,D),$=new Bt({color:592139,roughness:.95,metalness:0}),te=new ke(se,$);te.rotation.x=-Math.PI/2,te.position.set(x.width/2,-.5,x.height/2),te.receiveShadow=!0,w.add(te);const he=new CA(D,Math.round(D/M),2565930,2565930);he.position.set(x.width/2,.01,x.height/2),A&&w.add(he);const _e=new ke(new vi(x.width,x.height),new Bt({color:1579035,roughness:.8,metalness:0}));_e.rotation.x=-Math.PI/2,_e.position.set(x.width/2,.02,x.height/2),_e.receiveShadow=!0,w.add(_e);const we=new vn,Be=new Float32Array([0,.1,0,x.width,.1,0,x.width,.1,x.height,0,.1,x.height,0,.1,0]);we.setAttribute("position",new bi(Be,3));const Oe=new A_(we,new Va({color:9741240,linewidth:2}));if(w.add(Oe),g){const ve=new Bt({color:16777215,transparent:!0,opacity:m.opacity,roughness:.9});new Sc().load(g,Qe=>{Qe.colorSpace=qt,Qe.wrapS=di,Qe.wrapT=di,Qe.minFilter=jn,Qe.magFilter=jn,ve.map=Qe,ve.needsUpdate=!0,z.render(L,_.camera)});const Ne=new ke(new vi(m.width,m.height),ve);Ne.rotation.x=-Math.PI/2,Ne.position.set(m.x+m.width/2,.08,m.y+m.height/2),Ne.receiveShadow=!0,w.add(Ne)}const Se=t.filter(ve=>ve.type==="terrain"),Ee=(ve,Ne)=>{let Qe=0;for(const ue of Se){const ot=(ue.points??Qt(ue.width,ue.height)).map(Nt=>Ce(Nt,ue));D0({x:ve,y:Ne},ot)&&(Qe=Math.max(Qe,ue.elevation??0))}return Qe};if(t.forEach(ve=>{var Qe;const Ne=Ee(ve.x,ve.y);if(ve.type==="building"){const ue=ve,Re=F(ue),ot=60,Nt=new Yi(Re.map(Mn=>new ye(Mn.x,-Mn.y))),qe={depth:ot,bevelEnabled:!0,bevelThickness:2,bevelSize:1,bevelSegments:2},Je=new Or(Nt,qe);Je.rotateX(-Math.PI/2);const Xe=new Bt({color:ue.color,roughness:.6,metalness:.1}),nt=new ke(Je,Xe);nt.position.set(ue.x,Ne,ue.y),nt.rotation.y=-fn.degToRad(ue.rotation),nt.castShadow=!0,nt.receiveShadow=!0,nt.userData={id:ve.id},w.add(nt);const yt=new Bt({color:k_(ue.color,-20),roughness:.7,metalness:.05}),ut=new Yi(Re.map(Mn=>new ye(Mn.x,-Mn.y))),At=new xu(ut);At.rotateX(-Math.PI/2);const ln=new ke(At,yt);ln.position.set(ue.x,Ne+ot+.1,ue.y),ln.rotation.y=-fn.degToRad(ue.rotation),ln.receiveShadow=!0,ln.userData={id:ve.id},w.add(ln);const Bn=ai(ue.label);Bn&&(Bn.position.set(ue.x,Ne+ot+15,ue.y),Bn.userData={id:ve.id},w.add(Bn))}if(ve.type==="parking"){const ue=uh(ve);ue.position.y+=Ne,ue.userData={id:ve.id},w.add(ue)}if(ve.type==="tree"){const ue=dh(ve);ue.position.y+=Ne,ue.userData={id:ve.id},w.add(ue)}if(ve.type==="shrub"){const ue=I0(ve);ue.position.y+=Ne,ue.userData={id:ve.id},w.add(ue)}if(ve.type==="terrain"){const ue=ve,Re=ue.points??Qt(ue.width,ue.height),ot=ue.elevation??0,Nt=50,qe=ot+Nt,Je=new Yi(Re.map(At=>new ye(At.x,-At.y))),Xe={depth:qe,bevelEnabled:!1},nt=new Or(Je,Xe);nt.rotateX(-Math.PI/2);const yt=new Bt({color:ue.color,roughness:ue.terrainType==="water"?.1:.9,metalness:ue.terrainType==="water"?.3:0,transparent:!0,opacity:ue.terrainType==="water"?.7:.9}),ut=new ke(nt,yt);ut.position.set(ue.x,-Nt,ue.y),ut.rotation.y=-fn.degToRad(ue.rotation),ut.receiveShadow=!0,ut.userData={id:ve.id},w.add(ut)}if(ve.type==="camera"){const ue=ve,Re=Tt(ue),ot=((Qe=ue.mount)==null?void 0:Qe.height)??ue.height??10,Nt=ue.pitch??0,qe=ue.hFov??ue.fov;ue.vFov??wa(qe,ue.aspect??16/9);const Je=ue.range,Xe=-fn.degToRad(ue.rotation),nt=fn.degToRad(Nt),yt=new mr,ut=new pn(14,10,10),At=new Bt({color:"#1e293b",roughness:.3,metalness:.5}),ln=new ke(ut,At);yt.add(ln);const Bn=new Is(3.5,4,8,16);Bn.rotateZ(Math.PI/2);const Mn=new Bt({color:"#0f172a",roughness:.2,metalness:.7}),Ci=new ke(Bn,Mn);Ci.position.set(10,0,0),yt.add(Ci);const ia=new zu(1.5,8,8),Al=new Ji({color:ue.color}),zp=new ke(ia,Al);zp.position.set(-5,4,0),yt.add(zp),yt.position.set(Re.x,ot,Re.y),yt.rotation.y=Xe,yt.rotation.z=nt,w.add(yt);const H_=new Is(2,2.5,ot,8),V_=new Bt({color:"#475569",roughness:.6,metalness:.3}),ju=new ke(H_,V_);if(ju.position.set(Re.x,ot/2,Re.y),ju.castShadow=!0,w.add(ju),re.visible){const G_=re.showAll!==!1||ve.id===je,$u=(re.mode||"volume")==="volume";if(G_){const W_=2*Math.atan(Math.tan(fn.degToRad(qe)/2)/1.33),zt=2*Math.tan(W_/2)*Je,Vt=zt*1.33,j_=[0,0,0,Je,zt/2,-Vt/2,Je,-zt/2,-Vt/2,0,0,0,Je,-zt/2,-Vt/2,Je,-zt/2,Vt/2,0,0,0,Je,-zt/2,Vt/2,Je,zt/2,Vt/2,0,0,0,Je,zt/2,Vt/2,Je,zt/2,-Vt/2,Je,-zt/2,Vt/2,Je,-zt/2,-Vt/2,Je,zt/2,-Vt/2,Je,zt/2,Vt/2,Je,-zt/2,Vt/2,Je,zt/2,-Vt/2];if($u){const Qn=new vn;Qn.setAttribute("position",new kt(j_,3)),Qn.computeVertexNormals();const Wi=new Ji({color:re.useCameraColor?ue.color:re.color,transparent:!0,opacity:re.opacity,side:Xn,depthWrite:!1}),Er=new ke(Qn,Wi);Er.position.set(Re.x,ot,Re.y),Er.rotation.y=Xe,Er.rotation.z=nt,w.add(Er);const os=[0,0,0,Je,zt/2,-Vt/2,0,0,0,Je,-zt/2,-Vt/2,0,0,0,Je,-zt/2,Vt/2,0,0,0,Je,zt/2,Vt/2,Je,zt/2,-Vt/2,Je,zt/2,Vt/2,Je,zt/2,Vt/2,Je,-zt/2,Vt/2,Je,-zt/2,Vt/2,Je,-zt/2,-Vt/2,Je,-zt/2,-Vt/2,Je,zt/2,-Vt/2],as=new vn;as.setAttribute("position",new kt(os,3));const ji=new mf(as,new Va({color:re.useCameraColor?ue.color:re.color,transparent:!0,opacity:re.edgeOpacity}));ji.position.set(Re.x,ot,Re.y),ji.rotation.y=Xe,ji.rotation.z=nt,w.add(ji)}const Gi=[],ra=fn.degToRad(qe)/2,Cl=2*Math.atan(Math.tan(ra)/1.33)/2;if([{h:ra,v:Cl},{h:-ra,v:Cl},{h:-ra,v:-Cl},{h:ra,v:-Cl}].forEach(Qn=>{const Wi=new O(Math.cos(Qn.v)*Math.cos(Qn.h),Math.sin(Qn.v),Math.cos(Qn.v)*Math.sin(Qn.h)).normalize(),Er=new Ml(0,Xe,nt,"YZX");if(Wi.applyEuler(Er),Wi.y<-.01){const os=-ot/Wi.y,as=Re.x+Wi.x*os,ji=Re.y+Wi.z*os;Gi.push(new O(as,.15,ji))}}),Gi.length>=3){const Qn=new Yi;Qn.moveTo(Gi[0].x-Re.x,-(Gi[0].z-Re.y));for(let br=1;br<Gi.length;br++)Qn.lineTo(Gi[br].x-Re.x,-(Gi[br].z-Re.y));Qn.closePath();const Wi=new xu(Qn);Wi.rotateX(-Math.PI/2);const Er=new Ji({color:ue.color,transparent:!0,opacity:$u?.1:.4,side:Xn}),os=new ke(Wi,Er);os.position.set(Re.x,.12,Re.y),w.add(os);const as=new vn,ji=[];Gi.forEach((br,Y_)=>{ji.push(br.x,br.y,br.z);const Yu=Gi[(Y_+1)%Gi.length];ji.push(Yu.x,Yu.y,Yu.z)}),as.setAttribute("position",new kt(ji,3));const X_=new Va({color:ue.color,transparent:!0,opacity:$u?.4:.8}),$_=new mf(as,X_);w.add($_)}}}const Xu=ai(ue.label);Xu&&(Xu.position.set(Re.x,ot+18,Re.y),w.add(Xu))}if(ve.type==="image"){const ue=ve,Re=new vi(ue.width,ue.height),ot=new Bt({color:16777215,roughness:.9});new Sc().load(ue.src,qe=>{qe.colorSpace=qt,qe.minFilter=jn,ot.map=qe,ot.needsUpdate=!0;const Je=H.current;Je&&Je.renderer.render(Je.scene,Je.camera)});const Nt=new ke(Re,ot);Nt.rotation.x=-Math.PI/2,Nt.position.set(ue.x,.25+Ne,ue.y),Nt.rotation.z=fn.degToRad(ue.rotation),Nt.userData={id:ve.id},w.add(Nt)}if(ve.type==="label"){const ue=ve,Re=ai(ue.text);Re&&(Re.position.set(ue.x,8+Ne,ue.y),Re.userData={id:ve.id},w.add(Re))}}),_.target.set(x.width/2,0,x.height/2),_.orbit&&(_.orbit.distance=Math.max(x.width,x.height)*.85),_.orbit){const{azimuth:ve,polar:Ne,distance:Qe}=_.orbit,ue=_.target.x+Math.cos(ve)*Math.cos(Ne)*Qe,Re=_.target.z+Math.sin(ve)*Math.cos(Ne)*Qe,ot=_.target.y+Math.sin(Ne)*Qe;_.camera.position.set(ue,ot,Re),_.camera.lookAt(_.target)}z.render(L,_.camera)};$e.useEffect(()=>{const _=canvasRef.current;if(!_)return;const w=L=>{var we;const z=H.current;if(!z)return;const D=_.getBoundingClientRect(),se=(L.clientX-D.left)/D.width*2-1,$=-((L.clientY-D.top)/D.height)*2+1,te=new AA;te.setFromCamera(new ye(se,$),z.camera);const he=te.intersectObjects(z.group.children,!0);let _e=null;for(const Be of he){let Oe=Be.object;for(;Oe;){if((we=Oe.userData)!=null&&we.id){_e=Oe.userData.id;break}if(Oe===z.group)break;Oe=Oe.parent}if(_e)break}_e?U(_e):he.length>0&&U(null)};return _.addEventListener("click",w),()=>_.removeEventListener("click",w)},[]);const Yt=()=>{const _=H.current;if(!_)return;const w=_.renderer.domElement.toDataURL("image/png"),L=new Date().toLocaleString();xe(z=>[{id:Sa(),dataUrl:w,createdAt:L},...z])},Hi=(_,w)=>{const L=document.createElement("a");L.href=_,L.download=w,document.body.appendChild(L),L.click(),document.body.removeChild(L)},bl=()=>{const _=H.current;if(!_)return;const w=_.renderer.domElement.toDataURL("image/png");Hi(w,"security_plan_3d.png")},ss=()=>{const _=H.current;if(_){if(_.zoom=1,_.target.set(x.width/2,0,x.height/2),_.orbit){_.orbit.azimuth=Math.PI/4,_.orbit.polar=Math.PI/4,_.orbit.distance=Math.max(x.width,x.height)*.9;const{azimuth:w,polar:L,distance:z}=_.orbit,D=_.target.x+Math.cos(w)*Math.cos(L)*z,se=_.target.z+Math.sin(w)*Math.cos(L)*z,$=_.target.y+Math.sin(L)*z;_.camera.position.set(D,$,se)}_.camera.zoom=_.zoom,_.camera.updateProjectionMatrix(),_.camera.lookAt(_.target),_.renderer.render(_.scene,_.camera)}};$e.useEffect(()=>{const _=L=>{var D,se,$,te;const z=L.target;if(!(z&&(z.tagName==="INPUT"||z.tagName==="TEXTAREA"))){if(L.key===" "&&(Ie(!0),at.current=!0),(L.key==="Delete"||L.key==="Backspace")&&je&&(L.preventDefault(),El(je),setTimeout(()=>h(),50)),L.ctrlKey){const he=L.key.toLowerCase();if(he==="z"&&(L.preventDefault(),L.shiftKey?p():f()),he==="y"&&(L.preventDefault(),p()),he==="s"&&(L.preventDefault(),mt()),he==="g"&&(L.preventDefault(),R(_e=>!_e)),he==="c"){if(((D=document.activeElement)==null?void 0:D.tagName)==="INPUT"||((se=document.activeElement)==null?void 0:se.tagName)==="TEXTAREA")return;if(je){const _e=t.find(we=>we.id===je);_e&&(i(_e),L.preventDefault())}}if(he==="v"){if((($=document.activeElement)==null?void 0:$.tagName)==="INPUT"||((te=document.activeElement)==null?void 0:te.tagName)==="TEXTAREA")return;const _e=r.current;if(_e){const we={..._e,id:Sa(),x:_e.x+20,y:_e.y+20};e(Be=>[...Be,we]),U(we.id),setTimeout(()=>h(),50),L.preventDefault()}}}L.key==="Escape"&&(U(null),Ze("select"),We(!1))}};window.addEventListener("keydown",_);const w=L=>{L.key===" "&&(Ie(!1),at.current=!1)};return window.addEventListener("keyup",w),()=>{window.removeEventListener("keydown",_),window.removeEventListener("keyup",w)}},[t,je,mt]),$e.useEffect(()=>{if(!H.current)return;const{scene:_,renderer:w,camera:L}=H.current;if(ht)new Sc().load(ht,z=>{if(z.colorSpace=qt,Ye==="panorama"?z.mapping=cu:z.mapping=gp,_.background=z,Ye==="panorama")_.environment=z;else{const D=new Ba(w);_.environment=D.fromScene(new oh).texture,D.dispose()}w.render(_,L)});else{_.background=new Mt("#09090b");const z=new Ba(w);_.environment=z.fromScene(new oh).texture,z.dispose(),w.render(_,L)}},[ht,Ye]),$e.useEffect(()=>{if(!E.current||H.current)return;const _=E.current,w=new Oc({antialias:!0,preserveDrawingBuffer:!0,alpha:!0,powerPreference:"high-performance"});w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.outputColorSpace=qt,w.shadowMap.enabled=!0,w.shadowMap.type=qv,w.toneMapping=Kv,w.toneMappingExposure=1,_.appendChild(w.domElement);const L=new Fc;L.background=new Mt("#09090b"),L.fog=new Ha("#09090b",200,2e3);const z=new wp(-500,500,500,-500,.1,6e3),D=new mr;L.add(D);const se=new sh(16777215,.6);L.add(se);const $=new rh(16777215,.8);$.position.set(50,100,50),$.castShadow=!0,$.shadow.mapSize.width=2048,$.shadow.mapSize.height=2048,L.add($);const te={azimuth:Math.PI/5,polar:Math.PI/5,distance:Math.max(x.width,x.height)*.8},he={scene:L,camera:z,renderer:w,group:D,target:new O(x.width/2,0,x.height/2),zoom:1,size:{width:1,height:1},orbit:te};H.current=he;const _e=()=>{const{width:Se,height:Ee}=_.getBoundingClientRect();he.size={width:Se,height:Ee},w.setSize(Se,Ee);const ve=Se/Ee,Ne=Math.max(x.width,x.height)*.7;z.left=-Ne*ve,z.right=Ne*ve,z.top=Ne,z.bottom=-Ne,z.zoom=he.zoom,z.updateProjectionMatrix(),w.render(L,z)},we=()=>{const{azimuth:Se,polar:Ee,distance:ve}=te,Ne=he.target.x+Math.cos(Se)*Math.cos(Ee)*ve,Qe=he.target.z+Math.sin(Se)*Math.cos(Ee)*ve,ue=he.target.y+Math.sin(Ee)*ve;z.position.set(Ne,ue,Qe),z.lookAt(he.target),w.render(L,z)},Be=Se=>{const Ee=Se.button===2&&!at.current,ve=Se.button===0||Se.button===1||at.current;if(!ve&&!Ee)return;Se.preventDefault();const Ne={x:Se.clientX,y:Se.clientY},Qe=Re=>{const ot=Re.clientX-Ne.x,Nt=Re.clientY-Ne.y;if(Ne.x=Re.clientX,Ne.y=Re.clientY,Ee)te.azimuth-=ot*.005,te.polar=ei(te.polar-Nt*.005,.1,Math.PI/2.1);else if(ve){const qe=Math.max(x.width,x.height)*.7/z.zoom/400;he.target.x-=ot*qe,he.target.z+=Nt*qe}we()},ue=()=>{window.removeEventListener("pointermove",Qe),window.removeEventListener("pointerup",ue)};window.addEventListener("pointermove",Qe),window.addEventListener("pointerup",ue)},Oe=Se=>{Se.preventDefault();const Ee=ei(he.zoom*(Se.deltaY>0?.9:1.1),.4,3.5);he.zoom=Ee,z.zoom=he.zoom,z.updateProjectionMatrix(),we()};return w.domElement.addEventListener("pointerdown",Be),w.domElement.addEventListener("wheel",Oe,{passive:!1}),w.domElement.addEventListener("contextmenu",Se=>Se.preventDefault()),we(),_e(),window.addEventListener("resize",_e),()=>{w.domElement.removeEventListener("pointerdown",Be),w.domElement.removeEventListener("wheel",Oe),window.removeEventListener("resize",_e),w.dispose(),_.removeChild(w.domElement),H.current=null}},[x.height,x.width,I]),$e.useEffect(()=>{I==="iso3d"&&ea()},[t,g,m,x,M,A,I,re,ht,Ye,je]),$e.useEffect(()=>{I!=="plan"&&We(!1)},[I]),$e.useEffect(()=>{if(g){const _=new Image;_.src=g,_.onload=()=>{gt.current=_}}else gt.current=null},[g]),$e.useEffect(()=>{var Je;if(!Te||!Ht.current||!je)return;const _=t.find(Xe=>Xe.id===je),w=(_==null?void 0:_.type)==="camera"?_:null;if(!w)return;const L=Ht.current,z=L.width,D=L.height,se=Tt(w),$=((Je=w.mount)==null?void 0:Je.height)??w.height??10,te=w.hFov??w.fov,he=w.pitch??-15,_e=w.range,we=fn.degToRad(w.rotation),Be=z/D,Oe=2*Math.atan(Math.tan(fn.degToRad(te)/2)/Be),Se=fn.radToDeg(Oe),Ee=new Fc;Ee.background=new Mt("#09090b"),Ee.fog=new Ha("#09090b",_e*.3,_e*1.2);const ve=new ni(Se,Be,1,_e*2);ve.position.set(se.x,$,se.y);const Ne=fn.degToRad(he),Qe=new O(se.x+Math.cos(we)*100,$+Math.tan(Ne)*100,se.y+Math.sin(we)*100);ve.lookAt(Qe),Ee.add(new sh(16777215,.5));const ue=new rh(16777215,.7);ue.position.set(100,200,50),Ee.add(ue);const Re=new ke(new vi(x.width*2,x.height*2),new Bt({color:"#6B8E23",roughness:.9}));if(Re.rotation.x=-Math.PI/2,Re.position.set(x.width/2,0,x.height/2),Ee.add(Re),gt.current){const Xe=new Jd(gt.current);Xe.colorSpace=qt;const nt=new ke(new vi(m.width,m.height),new Ji({map:Xe,transparent:!0,opacity:m.opacity}));nt.rotation.x=-Math.PI/2,nt.position.set(m.x+m.width/2,.1,m.y+m.height/2),Ee.add(nt)}t.forEach(Xe=>{if(Xe.type==="building"){const nt=Xe,yt=F(nt),ut=new Yi(yt.map(Bn=>new ye(Bn.x,-Bn.y))),At=new Or(ut,{depth:60,bevelEnabled:!1});At.rotateX(-Math.PI/2);const ln=new ke(At,new Bt({color:nt.color,side:Xn}));ln.position.set(nt.x,0,nt.y),ln.rotation.y=-fn.degToRad(nt.rotation),Ee.add(ln)}Xe.type==="tree"&&Ee.add(dh(Xe)),Xe.type==="parking"&&Ee.add(uh(Xe))});const ot=new Oc({canvas:L,antialias:!0});ot.setSize(z,D);const Nt=new Ba(ot);Ee.environment=Nt.fromScene(new oh).texture,ot.render(Ee,ve),ht&&new Sc().load(ht,Xe=>{Ee.background=Xe,ot.render(Ee,ve)});const qe=L.getContext("2d");return qe&&(qe.fillStyle="rgba(0,0,0,0.7)",qe.fillRect(0,0,z,26),qe.fillStyle="#fff",qe.font="bold 11px sans-serif",qe.fillText(`📷 ${w.label}`,8,11),qe.font="10px sans-serif",qe.fillStyle="#94a3b8",qe.fillText(`FOV: ${te.toFixed(0)}°×${Se.toFixed(0)}° | Pitch: ${he}° | Range: ${_e}`,8,23),qe.fillStyle="#ef4444",qe.beginPath(),qe.arc(z-12,13,4,0,Math.PI*2),qe.fill(),qe.fillStyle="#fff",qe.font="9px sans-serif",qe.fillText("LIVE",z-42,16)),()=>{Nt.dispose(),ot.dispose()}},[je,t,Te,m,x,ht]);const wr=_=>{if(!me.current)return{x:0,y:0};const w=me.current.getScreenCTM();if(!w)return{x:0,y:0};const L=(_.clientX-w.e)/w.a,z=(_.clientY-w.f)/w.d;return{x:(L-B.x)/q,y:(z-B.y)/q}},Pt=(_,w,L="move",z)=>{if(rt!=="select"||I==="iso3d")return;_.stopPropagation();const D=t.find(he=>he.id===w);if(!D)return;U(w);const se=wr(_);if(L==="move"&&je===w&&D.type==="building"){const _e=Rt(D);for(let we=0;we<_e.length;we++){const Be=_e[we],Oe=_e[(we+1)%_e.length],Se={x:Oe.x-Be.x,y:Oe.y-Be.y},Ee={x:se.x-Be.x,y:se.y-Be.y},ve=Se.x*Se.x+Se.y*Se.y||1,Ne=Math.max(0,Math.min(1,(Ee.x*Se.x+Ee.y*Se.y)/ve)),Qe={x:Be.x+Se.x*Ne,y:Be.y+Se.y*Ne};if(Math.sqrt((se.x-Qe.x)**2+(se.y-Qe.y)**2)<8){Qo(w,Qe),setTimeout(()=>h(),50);return}}}const $=D.type==="camera"?Tt(D):{x:D.x,y:D.y};let te={...D};if(L==="fov"&&D.type==="camera"){const he=se.x-$.x,_e=se.y-$.y,we=Math.atan2(_e,he)*180/Math.PI,Be=D.hFov??D.fov,Oe=D.rotation+(z==="left"?-Be/2:Be/2);te={...D,fovHandleOffset:ch(we-Oe)}}le({type:L,itemId:w,startMouse:se,startVal:te,variant:z,snap:k&&!_.altKey})},ir=_=>{var D,se;if(rt==="add-camera"&&I==="plan"){const $=wr(_),te=Sn($);te&&te.distance<100?Ct({buildingId:te.buildingId,edgeIndex:te.edgeIndex,edgeT:te.edgeT,point:te.point,rotation:te.rotation}):Ct(null)}else it&&Ct(null);if(fe){const $=_.clientX-de.x,te=_.clientY-de.y;Y({x:de.panX+$,y:de.panY+te});return}if(!oe.itemId||!me.current)return;const w=wr(_),L=t.find($=>$.id===oe.itemId);if(!L)return;const z=L.type==="camera"?Tt(L):{x:L.x,y:L.y};if(oe.type==="move"){const $=w.x-oe.startMouse.x,te=w.y-oe.startMouse.y,he=oe.startVal.x+$,_e=oe.startVal.y+te;if(L.type==="camera"&&((D=L.mount)==null?void 0:D.type)==="building"&&L.mount.buildingId){const we=st(L.mount.buildingId);if(we){const Be=Rt(we);if(Be.length>=2){const Oe=ei(L.mount.edgeIndex??0,0,Be.length-1),Se=(Oe+1)%Be.length,Ee=Be[Oe],ve=Be[Se],Ne={x:ve.x-Ee.x,y:ve.y-Ee.y},Qe={x:he-Ee.x,y:_e-Ee.y},ue=Ne.x*Ne.x+Ne.y*Ne.y||1;let Re=(Qe.x*Ne.x+Qe.y*Ne.y)/ue;Re=ei(Re,0,1);const ot={x:Ee.x+Ne.x*Re,y:Ee.y+Ne.y*Re};Ke(oe.itemId,{x:ot.x,y:ot.y,mount:{...L.mount,edgeT:Re}});return}}}Ke(oe.itemId,{x:be(he,oe.snap),y:be(_e,oe.snap)})}else if(oe.type==="move-label"&&L.type==="camera"){const $=w.x-oe.startMouse.x,te=w.y-oe.startMouse.y,he=oe.startVal.labelOffset||{x:0,y:30};Ke(oe.itemId,{labelOffset:{x:he.x+$,y:he.y+te}})}else if(oe.type==="rotate"){const $=w.x-z.x,te=w.y-z.y,he=Math.atan2(te,$)*180/Math.PI;Ke(oe.itemId,{rotation:he})}else if(oe.type==="fov"&&L.type==="camera"){const $=w.x-z.x,te=w.y-z.y,he=Math.atan2(te,$)*180/Math.PI,_e=((se=oe.startVal)==null?void 0:se.fovHandleOffset)??0,we=ch(he-_e),Be=ch(we-L.rotation),Oe=oe.variant==="left"?-Be:Be;if(Oe<=0)return;const Se=ei(Oe*2,10,180);Ke(oe.itemId,{fov:Se,hFov:Se})}else if(oe.type==="range"&&L.type==="camera"){const $=w.x-z.x,te=w.y-z.y,he=Math.sqrt($*$+te*te);Ke(oe.itemId,{range:Math.max(he,50)})}else if(oe.type==="vertex"&&L.type==="building"){const $=ct(w,L),te=F(L),he=typeof oe.variant=="string"?parseInt(oe.variant,10):Number(oe.variant);if(!Number.isNaN(he)&&te[he]){const _e={x:be($.x,oe.snap),y:be($.y,oe.snap)},we=te.map((Be,Oe)=>Oe===he?_e:Be);Ke(oe.itemId,{points:we})}}},ta=()=>{oe.type&&h(),ee(!1),le({type:null,itemId:null,startMouse:{x:0,y:0},startVal:null,snap:!1})};$e.useEffect(()=>{_f.enabled=!0,h()},[]);const Jn=_=>{if(I!=="iso3d"&&!fe){if(pe&&je){const w=t.find(L=>L.id===je);if(w&&w.type==="building"){const L=wr(_);Qo(je,L),We(!1);return}}(_.target===me.current||_.target.tagName==="image"||_.target.id==="grid-bg")&&(rt!=="select"?Ut(_,rt):U(null))}},na=_=>{(_.button===1||_.button===2||He||_.button===0&&rt==="select")&&(_.preventDefault(),ee(!0),Pe({x:_.clientX,y:_.clientY,panX:B.x,panY:B.y}))},Vu=_=>{if(_.preventDefault(),!me.current)return;const w=me.current.getScreenCTM();if(!w)return;const L=(_.clientX-w.e)/w.a,z=(_.clientY-w.f)/w.d,D=(L-B.x)/q,se=(z-B.y)/q,$=ei(q*(_.deltaY>0?.9:1.1),.3,3.5),te=L-D*$,he=z-se*$;ce($),Y({x:te,y:he})},Z=t.find(_=>_.id===je),It=(Z==null?void 0:Z.type)==="camera"?Z:null,Vi=(It==null?void 0:It.aspect)??16/9,Hs=It?It.hFov??It.fov:70,Gu=It?It.vFov??wa(Hs,Vi):45,Pp=It?vC(Hs,Gu):90,Tl=t.filter(_=>_.type==="building"),Wu=((Ip=It==null?void 0:It.mount)==null?void 0:Ip.type)??"free",Vs=(Dp=It==null?void 0:It.mount)!=null&&Dp.buildingId?st(It.mount.buildingId):Tl[0],B_=Vs?F(Vs).length:0,Lp=((Up=It==null?void 0:It.mount)==null?void 0:Up.edgeIndex)??0,Np=((Op=It==null?void 0:It.mount)==null?void 0:Op.edgeT)??.5;return y.jsxs("div",{className:"relative h-screen bg-zinc-950 font-sans text-slate-200 overflow-hidden w-full selection:bg-indigo-500/30",children:[X&&y.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",children:y.jsxs("div",{className:"bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden text-slate-200",children:[y.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-white/10",children:[y.jsxs("div",{children:[y.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-400",children:"Export"}),y.jsx("h2",{className:"text-lg font-semibold text-slate-200",children:"Export Plan"})]}),y.jsx("button",{onClick:()=>ie(!1),className:"p-2 text-slate-400 hover:text-slate-600",children:y.jsx(ah,{className:"w-5 h-5"})})]}),y.jsxs("div",{className:"px-5 py-4 space-y-4",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Title"}),y.jsx("input",{type:"text",value:T,onChange:_=>V(_.target.value),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:["Export List (",Ue.length," items)"]}),Ue.length>0&&y.jsx("button",{onClick:()=>dt([]),className:"text-xs text-red-500 hover:text-red-700",children:"Clear All"})]}),Ue.length===0?y.jsxs("div",{className:"bg-slate-50 rounded-lg p-4 text-center text-slate-400 text-sm",children:[y.jsx("p",{children:"No views added yet"}),y.jsx("p",{className:"text-xs mt-1",children:'Use "Add to Export" buttons while working'})]}):y.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-48 overflow-y-auto",children:Ue.map(_=>y.jsxs("div",{className:"relative group bg-zinc-800 rounded-lg overflow-hidden border border-white/5",children:[y.jsx("div",{className:"aspect-video w-full overflow-hidden",children:y.jsx("img",{src:_.dataUrl,alt:_.label,className:"w-full h-full object-cover"})}),y.jsxs("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2",children:[y.jsx("a",{href:_.dataUrl,download:`${_.label.replace(/[^a-z0-9]/gi,"_").toLowerCase()}.png`,className:"p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-lg",title:"Download Image",onClick:w=>w.stopPropagation(),children:y.jsx(R0,{className:"w-4 h-4"})}),y.jsx("button",{onClick:()=>dt(w=>w.filter(L=>L.id!==_.id)),className:"p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg",title:"Remove",children:y.jsx(ah,{className:"w-4 h-4"})})]}),y.jsx("div",{className:"p-2 bg-zinc-800 absolute bottom-0 inset-x-0",children:y.jsx("p",{className:"text-[10px] text-slate-300 truncate font-medium",children:_.label})})]},_.id))})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Scale"}),y.jsx("input",{type:"number",min:"1",max:"5",value:j.scale,onChange:_=>ne({...j,scale:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Padding"}),y.jsx("input",{type:"number",min:"0",max:"200",value:j.padding,onChange:_=>ne({...j,padding:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Include"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:[{key:"includeGrid",label:"Grid"},{key:"includeLegend",label:"Legend"},{key:"includeTitle",label:"Title Block"}].map(_=>{const w=j[_.key];return y.jsx("button",{onClick:()=>ne({...j,[_.key]:!w}),className:`px-3 py-1 rounded-full text-xs font-semibold border ${w?"bg-emerald-100 border-emerald-200 text-emerald-700":"bg-white border-slate-200 text-slate-400"}`,children:_.label},_.key)})})]}),y.jsx("p",{className:"text-xs text-slate-400",children:'Tip: Add views using "Add to Export" buttons, then export a client report.'})]}),y.jsxs("div",{className:"px-5 py-4 border-t border-white/10 bg-slate-50 flex flex-wrap justify-end gap-2",children:[y.jsx("button",{onClick:()=>ie(!1),className:"px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-800",children:"Cancel"}),y.jsx("button",{onClick:()=>{J(),ie(!1)},className:"px-4 py-2 text-sm font-semibold bg-slate-600 hover:bg-slate-700 text-white rounded-lg",children:"Plan Only"}),y.jsx("button",{onClick:()=>{pt(),ie(!1)},disabled:Ue.length===0,className:`px-3 py-2 text-sm font-semibold rounded-lg ${Ue.length===0?"bg-slate-200 text-slate-400 cursor-not-allowed":"bg-emerald-600 hover:bg-emerald-700 text-white"}`,children:"Export PNG"}),y.jsx("button",{onClick:()=>{vt(),ie(!1)},disabled:Ue.length===0,className:`px-3 py-2 text-sm font-semibold rounded-lg ${Ue.length===0?"bg-slate-200 text-slate-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 text-white"}`,children:"Export PDF"})]})]})}),pe&&I==="plan"&&je&&y.jsx("div",{className:"absolute left-1/2 bottom-10 -translate-x-1/2 rounded-full bg-emerald-600/90 px-4 py-2 text-xs font-semibold text-white shadow-xl z-50 backdrop-blur-md",children:"Click an edge to insert a vertex."}),y.jsxs("div",{className:"absolute left-4 top-4 bottom-4 w-14 flex flex-col items-center py-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 gap-3 ring-1 ring-white/5",children:[y.jsx("div",{className:"flex flex-col gap-2 w-full px-2",children:[{mode:"select",icon:ZA,label:"Select"},{mode:"add-camera",icon:Mc,label:"Camera"},{mode:"add-building",icon:sC,label:"Building"},{mode:"add-tree",icon:lC,label:"Tree"},{mode:"add-shrub",icon:iC,label:"Shrub"},{mode:"add-terrain",icon:YA,label:"Terrain"},{mode:"add-parking",icon:DA,label:"Parking"},{mode:"add-label",icon:uC,label:"Label"}].map(_=>y.jsx("button",{onClick:()=>rt===_.mode?Ze("select"):Ze(_.mode),title:_.label,className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${rt===_.mode?"bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 scale-105":"text-slate-400 hover:text-white hover:bg-white/10"}`,children:y.jsx(_.icon,{className:"w-5 h-5"})},_.mode))}),y.jsx("div",{className:"w-8 h-px bg-white/10 my-1"}),y.jsx("div",{className:"flex flex-col gap-2 w-full px-2",children:y.jsx("button",{onClick:()=>W(I==="plan"?"iso3d":"plan"),className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${I==="iso3d"?"bg-indigo-600 text-white shadow-lg":"text-slate-400 hover:text-white hover:bg-white/10"}`,title:"Toggle 3D View",children:y.jsx(BA,{className:"w-5 h-5"})})}),y.jsxs("div",{className:"mt-auto flex flex-col gap-2 w-full px-2",children:[y.jsx("button",{onClick:f,className:"w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all",title:"Undo",children:y.jsx(hC,{className:"w-5 h-5"})}),y.jsx("button",{onClick:p,className:"w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all",title:"Redo",children:y.jsx(QA,{className:"w-5 h-5"})})]})]}),y.jsxs("div",{className:"absolute top-4 left-24 right-4 lg:right-[22rem] h-14 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-40 flex items-center px-4 justify-between ring-1 ring-white/5 transition-all duration-300",children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsxs("h1",{className:"text-lg font-bold text-slate-200 tracking-tight flex items-center gap-2",children:[y.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500",children:y.jsx(Mc,{className:"w-5 h-5"})}),T]}),y.jsx("div",{className:"h-6 w-px bg-white/10 mx-2"}),y.jsxs("div",{className:"flex items-center gap-1",children:[y.jsx("button",{onClick:()=>{var _;return(_=De.current)==null?void 0:_.click()},className:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors",title:"Load Project",children:y.jsx(FA,{className:"w-5 h-5"})}),y.jsx("button",{onClick:mt,className:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors",title:"Save Project",children:y.jsx(tC,{className:"w-5 h-5"})})]})]}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("input",{type:"file",ref:ae,className:"hidden",accept:"image/*",onChange:Jt}),y.jsx("input",{type:"file",ref:et,className:"hidden",accept:"image/*",onChange:zn}),y.jsx("input",{type:"file",ref:De,className:"hidden",accept:".json",onChange:xt}),y.jsx("input",{type:"file",ref:C,className:"hidden",accept:"image/*,.hdr",onChange:lt}),y.jsxs("button",{onClick:()=>{var _;return(_=ae.current)==null?void 0:_.click()},className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",children:[y.jsx(pC,{className:"w-4 h-4"}),y.jsx("span",{children:"Map"})]}),y.jsxs("button",{onClick:()=>{var _;return(_=et.current)==null?void 0:_.click()},className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",children:[y.jsx(P0,{className:"w-4 h-4"}),y.jsx("span",{children:"Image"})]}),y.jsxs("button",{onClick:Fe,className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",title:"Add Current View",children:[y.jsx(L0,{className:"w-4 h-4"}),y.jsx("span",{className:"hidden sm:inline",children:"Add View"})]}),y.jsxs("button",{onClick:()=>ie(!0),className:"flex items-center gap-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-lg shadow-indigo-500/20 transition-all",children:[y.jsx(R0,{className:"w-4 h-4"}),y.jsx("span",{children:"Export"})]})]})]}),y.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[y.jsx("div",{className:"w-full h-full relative overflow-auto bg-zinc-950 flex items-center justify-center pt-20 pl-24 pr-80 pb-6 custom-scrollbar",children:y.jsx("div",{className:"shadow-2xl bg-zinc-900 relative ring-1 ring-white/10 rounded-lg overflow-hidden",children:I==="plan"?y.jsxs("svg",{ref:me,width:x.width,height:x.height,viewBox:`0 0 ${x.width} ${x.height}`,className:`bg-white block ${rt==="select"?"cursor-default":"cursor-crosshair"}`,onMouseMove:ir,onMouseUp:ta,onMouseDown:na,onWheel:Vu,onClick:Jn,xmlns:"http://www.w3.org/2000/svg",children:[y.jsx("defs",{children:y.jsx("pattern",{id:"smallGrid",width:M,height:M,patternUnits:"userSpaceOnUse",children:y.jsx("path",{d:`M ${M} 0 L 0 0 0 ${M}`,fill:"none",stroke:"#333333",strokeWidth:"1"})})}),y.jsxs("g",{transform:`translate(${B.x}, ${B.y}) scale(${q})`,children:[A&&I==="plan"&&y.jsx("rect",{id:"grid-bg",width:"100%",height:"100%",fill:"url(#smallGrid)"}),g&&I==="plan"&&y.jsx("image",{href:g,x:m.x,y:m.y,width:m.width,height:m.height,preserveAspectRatio:"none",opacity:m.opacity,className:"pointer-events-none"}),t.filter(_=>_.type==="terrain").map(_=>{const w=_,L=je===w.id,z=w.points??Qt(w.width,w.height);return y.jsxs("g",{transform:`translate(${w.x}, ${w.y}) rotate(${w.rotation})`,onMouseDown:D=>Pt(D,w.id,"move"),onClick:D=>D.stopPropagation(),className:"cursor-move",opacity:oe.itemId===w.id&&oe.type==="move"?.8:1,children:[y.jsx("polygon",{points:z.map(D=>`${D.x},${D.y}`).join(" "),fill:w.color,fillOpacity:"0.6",stroke:L?"#0ea5e9":w.color,strokeWidth:L?3:1,strokeDasharray:w.terrainType==="water"?"5,3":"none"}),y.jsx("text",{x:"0",y:"0",fontSize:"12",fill:w.terrainType==="water"?"#1e40af":"#134e4a",textAnchor:"middle",dominantBaseline:"middle",className:"select-none pointer-events-none",children:w.terrainType.charAt(0).toUpperCase()+w.terrainType.slice(1)}),L&&z.map((D,se)=>y.jsx("circle",{cx:D.x,cy:D.y,r:"5",fill:"#ffffff",stroke:"#0ea5e9",strokeWidth:"2",className:"cursor-pointer",onMouseDown:$=>Pt($,w.id,"vertex",String(se))},`${w.id}-vertex-${se}`))]},w.id)}),t.filter(_=>_.type!=="terrain").map(_=>{var L,z;const w=je===_.id;if(_.type==="building"||_.type==="parking"){const D=_,se=_.type==="parking";if(!se){const $=_,te=F($);return y.jsxs("g",{transform:`translate(${$.x}, ${$.y}) rotate(${$.rotation})`,onMouseDown:he=>Pt(he,$.id,"move"),onClick:he=>he.stopPropagation(),className:"cursor-move",opacity:oe.itemId===$.id&&oe.type==="move"?.8:1,children:[y.jsx("polygon",{points:te.map(he=>`${he.x},${he.y}`).join(" "),fill:$.color,stroke:w?"#059669":"#334155",strokeWidth:w?3:1}),y.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",pointerEvents:"none",className:"font-bold select-none",children:$.label}),w&&te.map((he,_e)=>y.jsx("circle",{cx:he.x,cy:he.y,r:"5",fill:"#ffffff",stroke:"#059669",strokeWidth:"2",className:"cursor-pointer",onMouseDown:we=>Pt(we,$.id,"vertex",String(_e))},`${$.id}-vertex-${_e}`))]},$.id)}return y.jsxs("g",{transform:`translate(${D.x}, ${D.y}) rotate(${D.rotation})`,onMouseDown:$=>Pt($,D.id,"move"),onClick:$=>{pe||$.stopPropagation()},className:"cursor-move",opacity:oe.itemId===D.id&&oe.type==="move"?.8:1,children:[y.jsx("rect",{x:-D.width/2,y:-D.height/2,width:D.width,height:D.height,fill:D.color,stroke:w?"#3b82f6":se?"#94a3b8":"#334155",strokeWidth:w?3:1,strokeDasharray:se?"4":"0"}),se&&y.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"#94a3b8",fontSize:"16",fontWeight:"bold",pointerEvents:"none",transform:"rotate(-90)",children:"P"}),!se&&y.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",pointerEvents:"none",className:"font-bold select-none",children:D.label})]},D.id)}if(_.type==="tree"){const D=_;return y.jsxs("g",{transform:`translate(${D.x}, ${D.y})`,onMouseDown:se=>Pt(se,D.id,"move"),onClick:se=>se.stopPropagation(),className:"cursor-move",children:[y.jsx("circle",{r:D.radius,fill:D.color,fillOpacity:"0.6",stroke:w?"#3b82f6":D.color,strokeWidth:w?2:0}),y.jsx("circle",{r:D.radius*.5,fill:"black",fillOpacity:"0.1"})]},D.id)}if(_.type==="label"){const D=_;return y.jsx("text",{x:D.x,y:D.y,fontSize:D.fontSize,fill:w?"#3b82f6":D.color,fontWeight:"bold",textAnchor:"middle",className:"cursor-move select-none",onMouseDown:se=>Pt(se,D.id,"move"),onClick:se=>se.stopPropagation(),style:{textShadow:"0px 1px 2px rgba(255,255,255,0.8)"},children:D.text},D.id)}if(_.type==="shrub"){const D=_,se=D.points??Qt(D.width,D.height);return y.jsxs("g",{transform:`translate(${D.x}, ${D.y}) rotate(${D.rotation})`,onMouseDown:$=>Pt($,D.id,"move"),onClick:$=>$.stopPropagation(),className:"cursor-move",opacity:oe.itemId===D.id&&oe.type==="move"?.8:1,children:[y.jsx("polygon",{points:se.map($=>`${$.x},${$.y}`).join(" "),fill:D.color,fillOpacity:"0.7",stroke:w?"#16a34a":"#166534",strokeWidth:w?3:1}),y.jsx("polygon",{points:se.map($=>`${$.x*.7},${$.y*.7}`).join(" "),fill:"#15803d",fillOpacity:"0.3"}),w&&se.map(($,te)=>y.jsx("circle",{cx:$.x,cy:$.y,r:"5",fill:"#ffffff",stroke:"#16a34a",strokeWidth:"2",className:"cursor-pointer",onMouseDown:he=>Pt(he,D.id,"vertex",String(te))},`${D.id}-vertex-${te}`))]},D.id)}if(_.type==="image"){const D=_;return y.jsx("g",{transform:`translate(${D.x}, ${D.y}) rotate(${D.rotation})`,onMouseDown:se=>Pt(se,D.id,"move"),onClick:se=>se.stopPropagation(),className:"cursor-move",children:y.jsx("image",{href:D.src,x:-D.width/2,y:-D.height/2,width:D.width,height:D.height,style:{outline:w?"2px solid #3b82f6":"none"}})},D.id)}if(_.type==="camera"){const D=_,se=Tt(D),$=D.range,te=D.hFov??D.fov,he=(D.rotation-te/2)*(Math.PI/180),_e=(D.rotation+te/2)*(Math.PI/180),we=$*Math.cos(he),Be=$*Math.sin(he),Oe=$*Math.cos(_e),Se=$*Math.sin(_e),Ee=40,ve=D.rotation*(Math.PI/180),Ne=Ee*Math.cos(ve),Qe=Ee*Math.sin(ve),ue=((L=D.labelOffset)==null?void 0:L.x)??0,Re=((z=D.labelOffset)==null?void 0:z.y)??30;D.connectorDashSize;const ot=t.filter(ut=>ut.type==="building"),Nt=_t(se,$,te,D.rotation,ot),qe=t.filter(ut=>ut.type==="building"||ut.type==="tree"||ut.type==="shrub"),Je=_t(se,$,te,D.rotation,qe),Xe=ut=>{let At="M 0 0 ";return ut.forEach(ln=>{At+=`L ${ln.x} ${ln.y} `}),At+"Z"},nt=Xe(Nt),yt=Xe(Je);return y.jsxs("g",{transform:`translate(${se.x}, ${se.y})`,onClick:ut=>ut.stopPropagation(),children:[y.jsxs("g",{onMouseDown:ut=>Pt(ut,D.id,"move"),className:"cursor-move",children:[y.jsxs("defs",{children:[y.jsxs("mask",{id:`mask-${D.id}`,children:[y.jsx("rect",{x:-$,y:-$,width:$*2,height:$*2,fill:"white"}),y.jsx("path",{d:yt,fill:"black"})]}),y.jsxs("radialGradient",{id:`grad-blue-${D.id}`,cx:"0",cy:"0",r:$,gradientUnits:"userSpaceOnUse",children:[y.jsx("stop",{offset:"50%",stopColor:D.color,stopOpacity:"0.2"}),y.jsx("stop",{offset:"100%",stopColor:D.color,stopOpacity:"0"})]}),y.jsxs("radialGradient",{id:`grad-blue-stroke-${D.id}`,cx:"0",cy:"0",r:$,gradientUnits:"userSpaceOnUse",children:[y.jsx("stop",{offset:"80%",stopColor:D.color,stopOpacity:"1"}),y.jsx("stop",{offset:"100%",stopColor:D.color,stopOpacity:"0"})]}),y.jsxs("radialGradient",{id:`grad-yellow-${D.id}`,cx:"0",cy:"0",r:$,gradientUnits:"userSpaceOnUse",children:[y.jsx("stop",{offset:"50%",stopColor:"#fde047",stopOpacity:"0.3"}),y.jsx("stop",{offset:"100%",stopColor:"#fde047",stopOpacity:"0"})]}),y.jsxs("radialGradient",{id:`grad-yellow-stroke-${D.id}`,cx:"0",cy:"0",r:$,gradientUnits:"userSpaceOnUse",children:[y.jsx("stop",{offset:"80%",stopColor:"#eab308",stopOpacity:"1"}),y.jsx("stop",{offset:"100%",stopColor:"#eab308",stopOpacity:"0"})]})]}),y.jsx("path",{d:nt,fill:`url(#grad-yellow-${D.id})`,stroke:`url(#grad-yellow-stroke-${D.id})`,strokeWidth:"1",strokeDasharray:"4,4",pointerEvents:"none",mask:`url(#mask-${D.id})`}),y.jsx("path",{d:yt,fill:`url(#grad-blue-${D.id})`,stroke:`url(#grad-blue-stroke-${D.id})`,strokeWidth:"1",pointerEvents:"none"}),y.jsxs("g",{transform:`rotate(${D.rotation})`,children:[y.jsx("rect",{x:"-10",y:"-8",width:"20",height:"16",rx:"4",fill:w?"#3b82f6":"#1e293b"}),y.jsx("circle",{cx:"0",cy:"0",r:"4",fill:D.color}),y.jsx("rect",{x:"10",y:"-4",width:"6",height:"8",fill:"#475569"})]})]}),w&&y.jsxs(y.Fragment,{children:[y.jsx("line",{x1:"0",y1:"0",x2:Ne,y2:Qe,stroke:"white",strokeWidth:"2",strokeDasharray:"3,3"}),y.jsx("circle",{cx:Ne,cy:Qe,r:"7",fill:"#3b82f6",stroke:"white",strokeWidth:"2",className:"cursor-crosshair",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:ut=>Pt(ut,D.id,"rotate")}),y.jsx("circle",{cx:we,cy:Be,r:"6",fill:D.color,stroke:"white",strokeWidth:"2",className:"cursor-ew-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:ut=>Pt(ut,D.id,"fov","left")}),y.jsx("circle",{cx:Oe,cy:Se,r:"6",fill:D.color,stroke:"white",strokeWidth:"2",className:"cursor-ew-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:ut=>Pt(ut,D.id,"fov","right")}),y.jsx("circle",{cx:$*Math.cos(ve),cy:$*Math.sin(ve),r:"6",fill:D.color,stroke:"white",strokeWidth:"2",className:"cursor-ns-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:ut=>Pt(ut,D.id,"range")})]}),y.jsxs("g",{transform:`translate(${ue}, ${Re})`,onMouseDown:ut=>Pt(ut,D.id,"move-label"),className:"cursor-move hover:opacity-80 transition-opacity",children:[(Math.abs(ue)>10||Math.abs(Re-30)>10)&&y.jsx("line",{x1:-ue,y1:-Re,x2:"0",y2:"0",stroke:"white",strokeWidth:"2",strokeDasharray:"6,4",style:{filter:"drop-shadow(0 0 2px rgba(0,0,0,0.8))"}}),y.jsx("rect",{x:"-50",y:"-10",width:"100",height:"20",rx:"4",fill:"rgba(255,255,255,0.9)",stroke:w?"#3b82f6":"transparent",strokeWidth:"1"}),y.jsx("text",{textAnchor:"middle",dy:"4",fontSize:"10",fill:"#334155",fontWeight:"bold",pointerEvents:"none",className:"select-none",children:D.label})]})]},D.id)}return null}),it&&rt==="add-camera"&&y.jsxs("g",{transform:`translate(${it.point.x}, ${it.point.y})`,className:"pointer-events-none",opacity:.6,children:[y.jsx("path",{d:(()=>{const L=(it.rotation-35)*(Math.PI/180),z=(it.rotation+70/2)*(Math.PI/180),D=100*Math.cos(L),se=100*Math.sin(L),$=100*Math.cos(z),te=100*Math.sin(z);return`M 0 0 L ${D} ${se} A 100 100 0 0 1 ${$} ${te} Z`})(),fill:"#3b82f6",fillOpacity:"0.2",stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"4,4"}),y.jsxs("g",{transform:`rotate(${it.rotation})`,children:[y.jsx("rect",{x:"-10",y:"-8",width:"20",height:"16",rx:"4",fill:"#3b82f6"}),y.jsx("circle",{cx:"0",cy:"0",r:"4",fill:"white"}),y.jsx("rect",{x:"10",y:"-4",width:"6",height:"8",fill:"#1e40af"})]}),y.jsx("text",{y:"-20",textAnchor:"middle",fill:"#3b82f6",fontSize:"11",fontWeight:"bold",className:"select-none",children:"Click to place"})]}),rt==="add-camera"&&t.filter(_=>_.type==="building").map(_=>{const w=_,L=Rt(w);return L.map((z,D)=>{const se=L[(D+1)%L.length],$=(it==null?void 0:it.buildingId)===w.id&&(it==null?void 0:it.edgeIndex)===D;return y.jsx("line",{x1:z.x,y1:z.y,x2:se.x,y2:se.y,stroke:$?"#3b82f6":"#94a3b8",strokeWidth:$?4:2,strokeDasharray:$?"0":"6,4",className:"pointer-events-none transition-all",opacity:$?1:.5},`edge-highlight-${w.id}-${D}`)})}),t.map(_=>{var w,L;if(_.type==="camera"){const z=_,D=Tt(z),se=((w=z.labelOffset)==null?void 0:w.x)??0,$=((L=z.labelOffset)==null?void 0:L.y)??30,te=je===z.id;return y.jsx("g",{transform:`translate(${D.x}, ${D.y})`,style:{pointerEvents:"none"},children:y.jsxs("g",{transform:`translate(${se}, ${$})`,onMouseDown:he=>{he.stopPropagation(),Pt(he,z.id,"move-label")},className:"cursor-move hover:opacity-80 transition-opacity",style:{pointerEvents:"auto"},children:[(Math.abs(se)>10||Math.abs($-30)>10)&&y.jsx("line",{x1:-se,y1:-$,x2:"0",y2:"0",stroke:"white",strokeWidth:"2",strokeDasharray:"6,4",style:{filter:"drop-shadow(0 0 2px rgba(0,0,0,0.8))"}}),y.jsx("rect",{x:"-50",y:"-10",width:"100",height:"20",rx:"4",fill:"rgba(255,255,255,0.9)",stroke:te?"#3b82f6":"transparent",strokeWidth:"1"}),y.jsx("text",{textAnchor:"middle",dy:"4",fontSize:"10",fill:"#334155",fontWeight:"bold",pointerEvents:"none",className:"select-none",children:z.label})]})},`label-overlay-${z.id}`)}return null})]})]}):y.jsxs("div",{className:"relative flex-1",style:{minWidth:x.width,minHeight:x.height},children:[y.jsx("div",{ref:E,className:"absolute inset-0"}),y.jsxs("div",{className:"absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none",children:[y.jsx("div",{className:"rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-semibold text-slate-300 shadow border border-white/10 pointer-events-auto",children:"Drag to pan · Right-click to rotate · Scroll to zoom"}),y.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[y.jsxs("button",{onClick:()=>{var _;return(_=C.current)==null?void 0:_.click()},className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors flex items-center gap-1",children:[y.jsx(P0,{className:"w-3 h-3"}),"Set 3D BG"]}),y.jsx("button",{onClick:Yt,className:"px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/20 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/30 shadow-sm transition-colors",children:"Take Snapshot"}),y.jsx("button",{onClick:bl,className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"Export View"}),y.jsx("button",{onClick:()=>{var _;return dt([...Ue,{id:Sa(),type:"3d",label:"3D View",dataUrl:((_=H.current)==null?void 0:_.renderer.domElement.toDataURL("image/png"))||""}])},className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"+ Add to Export"}),y.jsx("button",{onClick:ss,className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"Reset View"})]})]})]})})}),It&&Te&&y.jsxs("div",{className:"absolute bottom-4 right-96 w-80 bg-zinc-900/90 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/10 z-40 ring-1 ring-black/50",children:[y.jsxs("div",{className:"flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/5",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(Mc,{className:"w-4 h-4 text-emerald-400"}),y.jsxs("span",{className:"text-sm font-medium text-slate-200 truncate",children:[It.label," View"]})]}),y.jsx("button",{onClick:()=>ze(!1),className:"p-1 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors",children:y.jsx(ah,{className:"w-4 h-4"})})]}),y.jsx("canvas",{ref:Ht,width:320,height:180,className:"w-full"}),y.jsxs("div",{className:"px-3 py-2 bg-white/5 text-xs text-slate-400 flex items-center justify-between border-t border-white/5",children:[y.jsxs("div",{className:"flex gap-3",children:[y.jsxs("span",{children:["H-FOV: ",(It.hFov??It.fov).toFixed(0),"°"]}),y.jsxs("span",{children:["V-FOV: ",(It.vFov??45).toFixed(0),"°"]}),y.jsxs("span",{children:["Range: ",It.range]})]}),y.jsxs("button",{onClick:()=>tt(It),className:"px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded flex items-center gap-1",children:[y.jsx(L0,{className:"w-3 h-3"}),"Export"]})]})]}),It&&!Te&&y.jsxs("button",{onClick:()=>ze(!0),className:"absolute bottom-4 right-96 px-4 py-2 bg-slate-800 text-white rounded-lg shadow-lg hover:bg-slate-700 transition-colors z-40 flex items-center gap-2",children:[y.jsx(Mc,{className:"w-4 h-4"}),y.jsx("span",{className:"text-sm font-medium",children:"Show Camera View"})]}),y.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-80 bg-zinc-900/90 backdrop-blur-xl border-l border-white/10 overflow-y-auto hidden lg:block shadow-2xl z-40 custom-scrollbar",children:Z?y.jsxs("div",{className:"p-6 flex flex-col gap-6",children:[y.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[y.jsxs("h2",{className:"font-bold text-lg text-slate-200 capitalize",children:["Edit ",Z.type]}),y.jsx("button",{onClick:()=>El(Z.id),className:"text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors",children:y.jsx(N0,{className:"w-5 h-5"})})]}),Z.type!=="label"&&y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"Rotation"}),y.jsxs("span",{children:[Math.round(Z.rotation),"deg"]})]}),y.jsx("input",{type:"range",min:"0",max:"360",value:Z.rotation,onChange:_=>Ke(Z.id,{rotation:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),(Z.type==="camera"||Z.type==="building"||Z.type==="image"||Z.type==="label")&&y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:Z.type==="label"?"Text Content":"Label"}),y.jsx("input",{type:"text",value:Z.type==="label"?Z.text:Z.label,onChange:_=>Ke(Z.id,Z.type==="label"?{text:_.target.value}:{label:_.target.value}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),Z.type==="label"&&y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Font Size"}),y.jsx("input",{type:"number",min:"8",max:"72",value:Z.fontSize,onChange:_=>Ke(Z.id,{fontSize:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),(Z.type==="building"||Z.type==="parking")&&y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),y.jsx("input",{type:"number",value:Z.width,onChange:_=>Z.type==="building"?Jo(Z.id,parseInt(_.target.value),Z.height):Ke(Z.id,{width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),y.jsx("input",{type:"number",value:Z.height,onChange:_=>Z.type==="building"?Jo(Z.id,Z.width,parseInt(_.target.value)):Ke(Z.id,{height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),Z.type==="building"&&y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Building Shape"}),y.jsxs("div",{className:"flex flex-wrap gap-2",children:[y.jsx("button",{onClick:()=>zs(Z.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Add Vertex"}),y.jsx("button",{onClick:()=>We(!0),className:`px-3 py-1 rounded-full border text-xs ${pe?"border-emerald-300 bg-emerald-50 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"}`,children:"Insert on Edge"}),y.jsx("button",{onClick:()=>wl(Z.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Remove Vertex"}),y.jsx("button",{onClick:()=>Hu(Z.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Reset Rectangle"})]}),y.jsx("p",{className:"text-xs text-slate-400",children:"Drag the green nodes in plan view to sculpt the footprint. Click “Insert on Edge” then click any edge."})]}),Z.type==="shrub"&&y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"3D Height"}),y.jsxs("span",{children:[Z.height3d," units"]})]}),y.jsx("input",{type:"range",min:"2",max:"30",value:Z.height3d,onChange:_=>Ke(Z.id,{height3d:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),y.jsx("input",{type:"number",value:Z.width,onChange:_=>{const w=parseInt(_.target.value),L=Z,z=L.points??Qt(L.width,L.height),D=Ma(z,w,L.height);Ke(Z.id,{width:w,points:D})},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Depth"}),y.jsx("input",{type:"number",value:Z.height,onChange:_=>{const w=parseInt(_.target.value),L=Z,z=L.points??Qt(L.width,L.height),D=Ma(z,L.width,w);Ke(Z.id,{height:w,points:D})},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Shrub Shape"}),y.jsxs("div",{className:"flex flex-wrap gap-2",children:[y.jsx("button",{onClick:()=>{const _=Z,w=_.points??Qt(_.width,_.height);Ke(Z.id,{points:hh(w)})},className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Add Vertex"}),y.jsx("button",{onClick:()=>We(!0),className:`px-3 py-1 rounded-full border text-xs ${pe?"border-emerald-300 bg-emerald-50 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"}`,children:"Insert on Edge"}),y.jsx("button",{onClick:()=>{const _=Z,w=_.points??Qt(_.width,_.height);w.length>3&&Ke(Z.id,{points:w.slice(0,-1)})},className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Remove Vertex"}),y.jsx("button",{onClick:()=>{const _=Z;Ke(Z.id,{points:Qt(_.width,_.height)})},className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Reset Shape"})]}),y.jsx("p",{className:"text-xs text-slate-400",children:"Drag the green nodes in plan view to sculpt the shrub shape."})]})]}),Z.type==="terrain"&&y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Terrain Type"}),y.jsx("div",{className:"grid grid-cols-3 gap-2",children:["water","grass","dirt","concrete","gravel","sand"].map(_=>y.jsx("button",{onClick:()=>Ke(Z.id,{terrainType:_,color:On.terrain[_]}),className:`px-2 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${Z.terrainType===_?"bg-indigo-600 text-white shadow-lg":"bg-white/10 text-slate-300 hover:bg-white/20"}`,style:{borderLeft:`3px solid ${On.terrain[_]}`},children:_},_))})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"Elevation"}),y.jsxs("span",{children:[Z.elevation??0," units"]})]}),y.jsx("input",{type:"range",min:"-20",max:"50",value:Z.elevation??0,onChange:_=>Ke(Z.id,{elevation:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),y.jsx("input",{type:"number",value:Z.width,onChange:_=>{const w=parseInt(_.target.value),L=Z,z=L.points??Qt(L.width,L.height),D=Ma(z,w,L.height);Ke(Z.id,{width:w,points:D})},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Depth"}),y.jsx("input",{type:"number",value:Z.height,onChange:_=>{const w=parseInt(_.target.value),L=Z,z=L.points??Qt(L.width,L.height),D=Ma(z,L.width,w);Ke(Z.id,{height:w,points:D})},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Terrain Shape"}),y.jsxs("div",{className:"flex flex-wrap gap-2",children:[y.jsx("button",{onClick:()=>{const _=Z,w=_.points??Qt(_.width,_.height);Ke(Z.id,{points:hh(w)})},className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Add Vertex"}),y.jsx("button",{onClick:()=>We(!0),className:`px-3 py-1 rounded-full border text-xs ${pe?"border-cyan-300 bg-cyan-50 text-cyan-700":"border-slate-200 text-slate-400 hover:bg-slate-50"}`,children:"Insert on Edge"}),y.jsx("button",{onClick:()=>{const _=Z,w=_.points??Qt(_.width,_.height);w.length>3&&Ke(Z.id,{points:w.slice(0,-1)})},className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Remove Vertex"}),y.jsx("button",{onClick:()=>{const _=Z;Ke(Z.id,{points:Qt(_.width,_.height)})},className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Reset Shape"})]}),y.jsx("p",{className:"text-xs text-slate-400",children:"Drag the blue nodes in plan view to sculpt the terrain boundary."})]})]}),Z.type==="image"&&y.jsxs("div",{className:"space-y-4",children:[y.jsxs("button",{onClick:()=>Ke(Z.id,{aspectRatioLocked:!Z.aspectRatioLocked}),className:`flex items-center gap-2 text-sm font-medium w-full p-2 rounded border ${Z.aspectRatioLocked?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-slate-200 text-slate-400"}`,children:[Z.aspectRatioLocked?y.jsx(WA,{className:"w-4 h-4"}):y.jsx(VA,{className:"w-4 h-4"}),"Maintain Proportions"]}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),y.jsx("input",{type:"number",value:Math.round(Z.width),onChange:_=>Bs(Z.id,parseInt(_.target.value),void 0),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),y.jsx("input",{type:"number",value:Math.round(Z.height),onChange:_=>Bs(Z.id,void 0,parseInt(_.target.value)),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),y.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Size Scale"}),y.jsx("input",{type:"range",min:"10",max:"600",value:Math.max(Z.width,Z.height),onChange:_=>{const w=parseInt(_.target.value);Z.width>=Z.height?Bs(Z.id,w,void 0):Bs(Z.id,void 0,w)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),Z.type==="tree"&&y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Tree Type"}),y.jsx("div",{className:"flex gap-2",children:["oak","pine","palm"].map(_=>y.jsx("button",{onClick:()=>Ke(Z.id,{treeType:_}),className:`flex-1 py-2 rounded-lg text-xs font-medium capitalize transition-colors ${Z.treeType===_||!Z.treeType&&_==="oak"?"bg-emerald-600 text-white":"bg-white/10 text-slate-300 hover:bg-white/20"}`,children:_},_))})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Size Preset"}),y.jsx("div",{className:"flex gap-2",children:["small","medium","large"].map(_=>{const w={small:{radius:15,height3d:25},medium:{radius:25,height3d:40},large:{radius:40,height3d:60}};return y.jsx("button",{onClick:()=>Ke(Z.id,{size:_,...w[_]}),className:`flex-1 py-2 rounded-lg text-xs font-medium capitalize transition-colors ${Z.size===_||!Z.size&&_==="medium"?"bg-emerald-600 text-white":"bg-white/10 text-slate-300 hover:bg-white/20"}`,children:_},_)})})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"Canopy Radius"}),y.jsxs("span",{children:[Z.radius,"px"]})]}),y.jsx("input",{type:"range",min:"10",max:"100",value:Z.radius,onChange:_=>Ke(Z.id,{radius:parseInt(_.target.value),size:void 0}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"3D Height"}),y.jsxs("span",{children:[Z.height3d??40," units"]})]}),y.jsx("input",{type:"range",min:"10",max:"120",value:Z.height3d??40,onChange:_=>Ke(Z.id,{height3d:parseInt(_.target.value),size:void 0}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"Rotation"}),y.jsxs("span",{children:[Z.rotation,"°"]})]}),y.jsx("input",{type:"range",min:"0",max:"360",value:Z.rotation,onChange:_=>Ke(Z.id,{rotation:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),Z.type==="camera"&&y.jsxs("div",{className:"space-y-5",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"Horizontal FOV"}),y.jsxs("span",{children:[Math.round(Hs),"deg"]})]}),y.jsx("input",{type:"range",min:"10",max:"180",value:Hs,onChange:_=>{const w=parseInt(_.target.value),L=wa(w,Vi);Bi(Z.id,w,L,Vi)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"Vertical FOV"}),y.jsxs("span",{children:[Math.round(Gu),"deg"]})]}),y.jsx("input",{type:"range",min:"10",max:"180",value:Gu,onChange:_=>{const w=parseInt(_.target.value),L=_C(w,Vi);Bi(Z.id,L,w,Vi)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"Diagonal FOV"}),y.jsxs("span",{children:[Math.round(Pp),"deg"]})]}),y.jsx("input",{type:"range",min:"20",max:"180",value:Pp,onChange:_=>{const w=parseInt(_.target.value),{h:L,v:z}=xC(w,Vi);Bi(Z.id,L,z,Vi)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Aspect Ratio"}),y.jsxs("select",{value:Vi,onChange:_=>{const w=parseFloat(_.target.value),L=wa(Hs,w);Bi(Z.id,Hs,L,w)},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none",children:[y.jsx("option",{value:16/9,children:"16:9 (Widescreen)"}),y.jsx("option",{value:4/3,children:"4:3 (Standard)"}),y.jsx("option",{value:1,children:"1:1 (Square)"})]})]}),y.jsx("div",{className:"flex flex-wrap gap-2 text-xs",children:[{label:"Wide",value:120},{label:"Standard",value:80},{label:"Narrow",value:45}].map(_=>y.jsx("button",{onClick:()=>{const w=wa(_.value,Vi);Bi(Z.id,_.value,w,Vi)},className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50",children:_.label},_.label))}),y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"Range"}),y.jsxs("span",{children:[Math.round(Z.range),"px"]})]}),y.jsx("input",{type:"range",min:"50",max:"800",value:Z.range,onChange:_=>Ke(Z.id,{range:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"Pitch"}),y.jsxs("span",{children:[Math.round(Z.pitch??0),"deg"]})]}),y.jsx("input",{type:"range",min:"-60",max:"30",value:Z.pitch??0,onChange:_=>Ke(Z.id,{pitch:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"Height"}),y.jsxs("span",{children:[Math.round(((Fp=Z.mount)==null?void 0:Fp.height)??Z.height??10),"ft"]})]}),y.jsx("input",{type:"range",min:"4",max:"40",value:((kp=Z.mount)==null?void 0:kp.height)??Z.height??10,onChange:_=>{var L;const w=parseInt(_.target.value);((L=Z.mount)==null?void 0:L.type)==="building"?ks(Z.id,{height:w}):Ke(Z.id,{height:w})},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Mount"}),y.jsxs("div",{className:"flex gap-2",children:[y.jsx("button",{onClick:()=>{var w;const _=Tt(Z);Ke(Z.id,{x:_.x,y:_.y,mount:{type:"free",height:((w=Z.mount)==null?void 0:w.height)??Z.height??10}})},className:`px-3 py-1 rounded-full text-xs font-semibold border ${Wu==="free"?"bg-emerald-50 border-emerald-200 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"}`,children:"Free"}),y.jsx("button",{disabled:!Tl.length,onClick:()=>Bu(Z.id),className:`px-3 py-1 rounded-full text-xs font-semibold border ${Wu==="building"?"bg-emerald-50 border-emerald-200 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"} ${Tl.length?"":"opacity-50 cursor-not-allowed"}`,children:"Building"})]})]}),Wu==="building"&&Vs&&y.jsxs("div",{className:"space-y-3",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Building"}),y.jsx("select",{value:Vs.id,onChange:_=>{var L;const w=_.target.value;Ke(Z.id,{mount:{type:"building",buildingId:w,edgeIndex:0,edgeT:.5,height:((L=Z.mount)==null?void 0:L.height)??Z.height??10}})},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none",children:Tl.map(_=>y.jsx("option",{value:_.id,children:_.label},_.id))})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"Edge"}),y.jsxs("span",{children:["#",Lp+1]})]}),y.jsx("input",{type:"range",min:"0",max:Math.max(B_-1,0),value:Lp,onChange:_=>{const w=parseInt(_.target.value);ks(Z.id,{edgeIndex:w,edgeT:.5,buildingId:Vs.id,type:"building"})},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"Position Along Edge"}),y.jsxs("span",{children:[Math.round(Np*100),"%"]})]}),y.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:Np,onChange:_=>ks(Z.id,{edgeT:parseFloat(_.target.value),buildingId:Vs.id,type:"building"}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Description"}),y.jsx("textarea",{value:Z.description,onChange:_=>Ke(Z.id,{description:_.target.value}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none h-20"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Connector Dash Size"}),y.jsx("input",{type:"range",min:"1",max:"20",value:Z.connectorDashSize||3,onChange:_=>Ke(Z.id,{connectorDashSize:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),Z.type!=="image"&&Z.type!=="terrain"&&On[Z.type]&&y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Color Code"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:On[Z.type].map(_=>y.jsx("button",{onClick:()=>Ke(Z.id,{color:_}),className:`w-8 h-8 rounded-full border-2 transition-all ${Z.color===_?"border-slate-800 scale-110":"border-transparent hover:scale-105"}`,style:{backgroundColor:_}},_))})]})]}):y.jsxs("div",{className:"p-6 flex flex-col gap-6",children:[y.jsxs("div",{className:"flex items-center gap-2 border-b border-white/10 pb-4",children:[y.jsx(XA,{className:"w-5 h-5 text-slate-400"}),y.jsx("h2",{className:"font-bold text-lg text-slate-200",children:"Project Settings"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Project Name"}),y.jsx("input",{type:"text",value:T,onChange:_=>V(_.target.value),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),y.jsx("div",{className:"grid grid-cols-2 gap-4",children:[{label:"Cameras",value:t.filter(_=>_.type==="camera").length},{label:"Buildings",value:t.filter(_=>_.type==="building").length},{label:"Trees",value:t.filter(_=>_.type==="tree").length},{label:"Parking",value:t.filter(_=>_.type==="parking").length}].map(_=>y.jsxs("div",{className:"rounded-lg border border-white/10 bg-white/5 p-3",children:[y.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-400",children:_.label}),y.jsx("p",{className:"text-lg font-semibold text-slate-200",children:_.value})]},_.label))}),y.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[y.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"Canvas"}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),y.jsx("input",{type:"number",min:"400",max:"3000",value:x.width,onChange:_=>S({...x,width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),y.jsx("input",{type:"number",min:"300",max:"3000",value:x.height,onChange:_=>S({...x,height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[y.jsx("span",{children:"Grid Size"}),y.jsxs("span",{children:[M,"px"]})]}),y.jsx("input",{type:"range",min:"10",max:"80",value:M,onChange:_=>N(parseInt(_.target.value)),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),y.jsxs("div",{className:"flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm",children:[y.jsx("span",{className:"text-slate-600",children:"Show Grid"}),y.jsx("button",{onClick:()=>R(_=>!_),className:`px-3 py-1 rounded-full text-xs font-semibold ${A?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-400"}`,children:A?"On":"Off"})]}),y.jsxs("div",{className:"flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm",children:[y.jsx("span",{className:"text-slate-600",children:"Snap to Grid"}),y.jsx("button",{onClick:()=>b(_=>!_),className:`px-3 py-1 rounded-full text-xs font-semibold ${k?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-400"}`,children:k?"On":"Off"})]}),y.jsx("button",{onClick:P,className:"w-full py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50",children:"Clear Canvas"})]}),y.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[y.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"Background Map"}),y.jsx("p",{className:"text-xs text-slate-400",children:"Adjust the uploaded map to align with the grid."}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Opacity"}),y.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:m.opacity,onChange:_=>v({...m,opacity:parseFloat(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Width"}),y.jsx("input",{type:"number",value:m.width,onChange:_=>v({...m,width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Height"}),y.jsx("input",{type:"number",value:m.height,onChange:_=>v({...m,height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Offset X"}),y.jsx("input",{type:"number",value:m.x,onChange:_=>v({...m,x:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Offset Y"}),y.jsx("input",{type:"number",value:m.y,onChange:_=>v({...m,y:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),y.jsx("button",{onClick:G,className:"w-full py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50",children:"Fit Background to Canvas"})]}),y.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[y.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"3D Visualization"}),y.jsxs("div",{className:"space-y-3 mb-4 p-3 bg-white/5 rounded-lg border border-white/10",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400 block",children:"Environment Background"}),y.jsxs("div",{className:"flex gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10",children:[y.jsx("button",{onClick:()=>Ve("flat"),className:`flex-1 px-2 py-1 text-[10px] font-medium rounded transition-colors ${Ye==="flat"?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-300"}`,children:"Flat Image"}),y.jsx("button",{onClick:()=>Ve("panorama"),className:`flex-1 px-2 py-1 text-[10px] font-medium rounded transition-colors ${Ye==="panorama"?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-300"}`,children:"360° Panorama"})]}),y.jsxs("div",{className:"flex gap-2",children:[y.jsx("button",{onClick:()=>{var _;return(_=C.current)==null?void 0:_.click()},className:"flex-1 py-1.5 px-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors",children:Ye==="panorama"?"Upload HDRI/Panorama":"Upload Background"}),ht&&y.jsx("button",{onClick:()=>ft(null),className:"py-1.5 px-3 rounded-md bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/10 text-xs transition-colors",title:"Clear Background",children:y.jsx(N0,{className:"w-4 h-4"})})]}),Ye==="panorama"&&y.jsxs("p",{className:"text-[10px] text-slate-500",children:["Upload a 360° equirectangular image (2:1 aspect ratio) for immersive backgrounds. Get free HDRIs from ",y.jsx("a",{href:"https://polyhaven.com/hdris",target:"_blank",rel:"noopener noreferrer",className:"text-indigo-400 hover:underline",children:"Poly Haven"})]})]}),y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("label",{className:"text-xs font-semibold text-slate-400",children:"Show Vision Cones"}),y.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[y.jsx("input",{type:"checkbox",className:"sr-only peer",checked:re.visible,onChange:_=>wt({...re,visible:_.target.checked})}),y.jsx("div",{className:"w-9 h-5 bg-slate-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"})]})]}),re.visible&&y.jsxs("div",{className:"space-y-3 mt-2 pl-2 border-l border-white/5",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("label",{className:"text-xs text-slate-500",children:"Active Cam Only"}),y.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[y.jsx("input",{type:"checkbox",className:"sr-only peer",checked:re.showAll===!1,onChange:_=>wt({...re,showAll:!_.target.checked})}),y.jsx("div",{className:"w-7 h-4 bg-slate-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-indigo-600"})]})]}),y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("label",{className:"text-xs text-slate-500",children:"Style"}),y.jsxs("div",{className:"bg-white/5 p-0.5 rounded-lg flex text-[10px] font-medium border border-white/10",children:[y.jsx("button",{onClick:()=>wt({...re,mode:"volume"}),className:`px-2 py-1 rounded transition-colors ${!re.mode||re.mode==="volume"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-300"}`,children:"Full"}),y.jsx("button",{onClick:()=>wt({...re,mode:"floor"}),className:`px-2 py-1 rounded transition-colors ${re.mode==="floor"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-300"}`,children:"Floor"})]})]}),y.jsxs("div",{className:"space-y-1",children:[y.jsxs("div",{className:"flex justify-between",children:[y.jsx("label",{className:"text-[10px] text-slate-500",children:"Opacity"}),y.jsxs("span",{className:"text-[10px] text-slate-400",children:[Math.round(re.opacity*100),"%"]})]}),y.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:re.opacity,onChange:_=>wt({...re,opacity:parseFloat(_.target.value)}),className:"w-full accent-indigo-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"})]}),y.jsxs("div",{className:"space-y-1",children:[y.jsxs("div",{className:"flex justify-between",children:[y.jsx("label",{className:"text-[10px] text-slate-500",children:"Edges"}),y.jsxs("span",{className:"text-[10px] text-slate-400",children:[Math.round(re.edgeOpacity*100),"%"]})]}),y.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:re.edgeOpacity,onChange:_=>wt({...re,edgeOpacity:parseFloat(_.target.value)}),className:"w-full accent-indigo-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"})]})]})]}),y.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[y.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"3D Snapshots"}),I!=="iso3d"?y.jsx("p",{className:"text-xs text-slate-400",children:"Switch to Isometric view to capture snapshots."}):ge.length===0?y.jsx("p",{className:"text-xs text-slate-400",children:"No snapshots yet. Click “Snapshot” in the 3D view."}):y.jsx("div",{className:"grid grid-cols-2 gap-3",children:ge.map(_=>y.jsxs("div",{className:"rounded-lg border border-slate-200 overflow-hidden bg-white",children:[y.jsx("img",{src:_.dataUrl,alt:"Snapshot",className:"w-full h-24 object-cover"}),y.jsxs("div",{className:"p-2",children:[y.jsx("p",{className:"text-[10px] text-slate-400",children:_.createdAt}),y.jsx("button",{onClick:()=>Hi(_.dataUrl,`security_snapshot_${_.id}.png`),className:"mt-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700",children:"Export"})]})]},_.id))})]})]})})]})]})}const z_=document.getElementById("root");if(!z_)throw new Error("Root element not found");$v(z_).render(y.jsx(dy.StrictMode,{children:y.jsx(yC,{})}));
