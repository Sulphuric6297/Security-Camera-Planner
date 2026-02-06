(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function q_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U0={exports:{}},Eu={},O0={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=Symbol.for("react.element"),Z_=Symbol.for("react.portal"),K_=Symbol.for("react.fragment"),J_=Symbol.for("react.strict_mode"),Q_=Symbol.for("react.profiler"),ey=Symbol.for("react.provider"),ty=Symbol.for("react.context"),ny=Symbol.for("react.forward_ref"),iy=Symbol.for("react.suspense"),ry=Symbol.for("react.memo"),sy=Symbol.for("react.lazy"),Vp=Symbol.iterator;function oy(t){return t===null||typeof t!="object"?null:(t=Vp&&t[Vp]||t["@@iterator"],typeof t=="function"?t:null)}var F0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k0=Object.assign,z0={};function Yo(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||F0}Yo.prototype.isReactComponent={};Yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function B0(){}B0.prototype=Yo.prototype;function Mh(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||F0}var wh=Mh.prototype=new B0;wh.constructor=Mh;k0(wh,Yo.prototype);wh.isPureReactComponent=!0;var Gp=Array.isArray,H0=Object.prototype.hasOwnProperty,Eh={current:null},V0={key:!0,ref:!0,__self:!0,__source:!0};function G0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)H0.call(e,i)&&!V0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ml,type:t,key:s,ref:o,props:r,_owner:Eh.current}}function ay(t,e){return{$$typeof:ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Th(t){return typeof t=="object"&&t!==null&&t.$$typeof===ml}function ly(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wp=/\/+/g;function Ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ly(""+t.key):e.toString(36)}function Rc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ml:case Z_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ku(o,0):i,Gp(r)?(n="",t!=null&&(n=t.replace(Wp,"$&/")+"/"),Rc(r,e,n,"",function(c){return c})):r!=null&&(Th(r)&&(r=ay(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Wp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Gp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ku(s,a);o+=Rc(s,e,n,l,r)}else if(l=oy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ku(s,a++),o+=Rc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Dl(t,e,n){if(t==null)return t;var i=[],r=0;return Rc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function cy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yn={current:null},Pc={transition:null},uy={ReactCurrentDispatcher:Yn,ReactCurrentBatchConfig:Pc,ReactCurrentOwner:Eh};function W0(){throw Error("act(...) is not supported in production builds of React.")}bt.Children={map:Dl,forEach:function(t,e,n){Dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Dl(t,function(){e++}),e},toArray:function(t){return Dl(t,function(e){return e})||[]},only:function(t){if(!Th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};bt.Component=Yo;bt.Fragment=K_;bt.Profiler=Q_;bt.PureComponent=Mh;bt.StrictMode=J_;bt.Suspense=iy;bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uy;bt.act=W0;bt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=k0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Eh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)H0.call(e,l)&&!V0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ml,type:t.type,key:r,ref:s,props:i,_owner:o}};bt.createContext=function(t){return t={$$typeof:ty,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ey,_context:t},t.Consumer=t};bt.createElement=G0;bt.createFactory=function(t){var e=G0.bind(null,t);return e.type=t,e};bt.createRef=function(){return{current:null}};bt.forwardRef=function(t){return{$$typeof:ny,render:t}};bt.isValidElement=Th;bt.lazy=function(t){return{$$typeof:sy,_payload:{_status:-1,_result:t},_init:cy}};bt.memo=function(t,e){return{$$typeof:ry,type:t,compare:e===void 0?null:e}};bt.startTransition=function(t){var e=Pc.transition;Pc.transition={};try{t()}finally{Pc.transition=e}};bt.unstable_act=W0;bt.useCallback=function(t,e){return Yn.current.useCallback(t,e)};bt.useContext=function(t){return Yn.current.useContext(t)};bt.useDebugValue=function(){};bt.useDeferredValue=function(t){return Yn.current.useDeferredValue(t)};bt.useEffect=function(t,e){return Yn.current.useEffect(t,e)};bt.useId=function(){return Yn.current.useId()};bt.useImperativeHandle=function(t,e,n){return Yn.current.useImperativeHandle(t,e,n)};bt.useInsertionEffect=function(t,e){return Yn.current.useInsertionEffect(t,e)};bt.useLayoutEffect=function(t,e){return Yn.current.useLayoutEffect(t,e)};bt.useMemo=function(t,e){return Yn.current.useMemo(t,e)};bt.useReducer=function(t,e,n){return Yn.current.useReducer(t,e,n)};bt.useRef=function(t){return Yn.current.useRef(t)};bt.useState=function(t){return Yn.current.useState(t)};bt.useSyncExternalStore=function(t,e,n){return Yn.current.useSyncExternalStore(t,e,n)};bt.useTransition=function(){return Yn.current.useTransition()};bt.version="18.3.1";O0.exports=bt;var Ie=O0.exports;const dy=q_(Ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy=Ie,hy=Symbol.for("react.element"),py=Symbol.for("react.fragment"),my=Object.prototype.hasOwnProperty,gy=fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vy={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)my.call(e,i)&&!vy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:hy,type:t,key:s,ref:o,props:r,_owner:gy.current}}Eu.Fragment=py;Eu.jsx=j0;Eu.jsxs=j0;U0.exports=Eu;var M=U0.exports,X0={exports:{}},mi={},$0={exports:{}},Y0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var q=B.length;B.push(Y);e:for(;0<q;){var le=q-1>>>1,he=B[le];if(0<r(he,Y))B[le]=Y,B[q]=he,q=le;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var Y=B[0],q=B.pop();if(q!==Y){B[0]=q;e:for(var le=0,he=B.length,ee=he>>>1;le<ee;){var ue=2*(le+1)-1,Le=B[ue],He=ue+1,Ue=B[He];if(0>r(Le,q))He<he&&0>r(Ue,Le)?(B[le]=Ue,B[He]=q,le=He):(B[le]=Le,B[ue]=q,le=ue);else if(He<he&&0>r(Ue,q))B[le]=Ue,B[He]=q,le=He;else break e}}return Y}function r(B,Y){var q=B.sortIndex-Y.sortIndex;return q!==0?q:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,v=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(B){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=B)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function y(B){if(S=!1,x(B),!v)if(n(l)!==null)v=!0,j(L);else{var Y=n(c);Y!==null&&ne(y,Y.startTime-B)}}function L(B,Y){v=!1,S&&(S=!1,d(F),F=-1),p=!0;var q=h;try{for(x(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||B&&!V());){var le=f.callback;if(typeof le=="function"){f.callback=null,h=f.priorityLevel;var he=le(f.expirationTime<=Y);Y=t.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&i(l),x(Y)}else i(l);f=n(l)}if(f!==null)var ee=!0;else{var ue=n(c);ue!==null&&ne(y,ue.startTime-Y),ee=!1}return ee}finally{f=null,h=q,p=!1}}var A=!1,P=null,F=-1,E=5,T=-1;function V(){return!(t.unstable_now()-T<E)}function $(){if(P!==null){var B=t.unstable_now();T=B;var Y=!0;try{Y=P(!0,B)}finally{Y?ie():(A=!1,P=null)}}else A=!1}var ie;if(typeof m=="function")ie=function(){m($)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,W=I.port2;I.port1.onmessage=$,ie=function(){W.postMessage(null)}}else ie=function(){g($,0)};function j(B){P=B,A||(A=!0,ie())}function ne(B,Y){F=g(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,j(L))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var q=h;h=Y;try{return B()}finally{h=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=h;h=B;try{return Y()}finally{h=q}},t.unstable_scheduleCallback=function(B,Y,q){var le=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?le+q:le):q=le,B){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=q+he,B={id:u++,callback:Y,priorityLevel:B,startTime:q,expirationTime:he,sortIndex:-1},q>le?(B.sortIndex=q,e(c,B),n(l)===null&&B===n(c)&&(S?(d(F),F=-1):S=!0,ne(y,q-le))):(B.sortIndex=he,e(l,B),v||p||(v=!0,j(L))),B},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(B){var Y=h;return function(){var q=h;h=Y;try{return B.apply(this,arguments)}finally{h=q}}}})(Y0);$0.exports=Y0;var xy=$0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y=Ie,pi=xy;function Me(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q0=new Set,ja={};function zs(t,e){Fo(t,e),Fo(t+"Capture",e)}function Fo(t,e){for(ja[t]=e,t=0;t<e.length;t++)q0.add(e[t])}var _r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mf=Object.prototype.hasOwnProperty,yy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jp={},Xp={};function Sy(t){return mf.call(Xp,t)?!0:mf.call(jp,t)?!1:yy.test(t)?Xp[t]=!0:(jp[t]=!0,!1)}function My(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wy(t,e,n,i){if(e===null||typeof e>"u"||My(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ln[t]=new qn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ln[e]=new qn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ln[t]=new qn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ln[t]=new qn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ln[t]=new qn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ln[t]=new qn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ln[t]=new qn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ln[t]=new qn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ln[t]=new qn(t,5,!1,t.toLowerCase(),null,!1,!1)});var bh=/[\-:]([a-z])/g;function Ah(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bh,Ah);Ln[e]=new qn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bh,Ah);Ln[e]=new qn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bh,Ah);Ln[e]=new qn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ln[t]=new qn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ln.xlinkHref=new qn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ln[t]=new qn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ch(t,e,n,i){var r=Ln.hasOwnProperty(e)?Ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wy(e,n,r,i)&&(n=null),i||r===null?Sy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Er=_y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ul=Symbol.for("react.element"),po=Symbol.for("react.portal"),mo=Symbol.for("react.fragment"),Rh=Symbol.for("react.strict_mode"),gf=Symbol.for("react.profiler"),Z0=Symbol.for("react.provider"),K0=Symbol.for("react.context"),Ph=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),xf=Symbol.for("react.suspense_list"),Lh=Symbol.for("react.memo"),Ur=Symbol.for("react.lazy"),J0=Symbol.for("react.offscreen"),$p=Symbol.iterator;function oa(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var sn=Object.assign,Ju;function wa(t){if(Ju===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ju=e&&e[1]||""}return`
`+Ju+t}var Qu=!1;function ed(t,e){if(!t||Qu)return"";Qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wa(t):""}function Ey(t){switch(t.tag){case 5:return wa(t.type);case 16:return wa("Lazy");case 13:return wa("Suspense");case 19:return wa("SuspenseList");case 0:case 2:case 15:return t=ed(t.type,!1),t;case 11:return t=ed(t.type.render,!1),t;case 1:return t=ed(t.type,!0),t;default:return""}}function _f(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mo:return"Fragment";case po:return"Portal";case gf:return"Profiler";case Rh:return"StrictMode";case vf:return"Suspense";case xf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case K0:return(t.displayName||"Context")+".Consumer";case Z0:return(t._context.displayName||"Context")+".Provider";case Ph:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lh:return e=t.displayName||null,e!==null?e:_f(t.type)||"Memo";case Ur:e=t._payload,t=t._init;try{return _f(t(e))}catch{}}return null}function Ty(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _f(e);case 8:return e===Rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function is(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Q0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function by(t){var e=Q0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ol(t){t._valueTracker||(t._valueTracker=by(t))}function ev(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Q0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yf(t,e){var n=e.checked;return sn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=is(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tv(t,e){e=e.checked,e!=null&&Ch(t,"checked",e,!1)}function Sf(t,e){tv(t,e);var n=is(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mf(t,e.type,is(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mf(t,e,n){(e!=="number"||Wc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ea=Array.isArray;function Ro(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+is(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function wf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Me(91));return sn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Me(92));if(Ea(n)){if(1<n.length)throw Error(Me(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:is(n)}}function nv(t,e){var n=is(e.value),i=is(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Kp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function iv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ef(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?iv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fl,rv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fl=Fl||document.createElement("div"),Fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ay=["Webkit","ms","Moz","O"];Object.keys(Aa).forEach(function(t){Ay.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Aa[e]=Aa[t]})});function sv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Aa.hasOwnProperty(t)&&Aa[t]?(""+e).trim():e+"px"}function ov(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=sv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Cy=sn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tf(t,e){if(e){if(Cy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Me(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Me(62))}}function bf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Af=null;function Nh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cf=null,Po=null,Lo=null;function Jp(t){if(t=xl(t)){if(typeof Cf!="function")throw Error(Me(280));var e=t.stateNode;e&&(e=Ru(e),Cf(t.stateNode,t.type,e))}}function av(t){Po?Lo?Lo.push(t):Lo=[t]:Po=t}function lv(){if(Po){var t=Po,e=Lo;if(Lo=Po=null,Jp(t),e)for(t=0;t<e.length;t++)Jp(e[t])}}function cv(t,e){return t(e)}function uv(){}var td=!1;function dv(t,e,n){if(td)return t(e,n);td=!0;try{return cv(t,e,n)}finally{td=!1,(Po!==null||Lo!==null)&&(uv(),lv())}}function $a(t,e){var n=t.stateNode;if(n===null)return null;var i=Ru(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Me(231,e,typeof n));return n}var Rf=!1;if(_r)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){Rf=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{Rf=!1}function Ry(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ca=!1,jc=null,Xc=!1,Pf=null,Py={onError:function(t){Ca=!0,jc=t}};function Ly(t,e,n,i,r,s,o,a,l){Ca=!1,jc=null,Ry.apply(Py,arguments)}function Ny(t,e,n,i,r,s,o,a,l){if(Ly.apply(this,arguments),Ca){if(Ca){var c=jc;Ca=!1,jc=null}else throw Error(Me(198));Xc||(Xc=!0,Pf=c)}}function Bs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qp(t){if(Bs(t)!==t)throw Error(Me(188))}function Iy(t){var e=t.alternate;if(!e){if(e=Bs(t),e===null)throw Error(Me(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Qp(r),t;if(s===i)return Qp(r),e;s=s.sibling}throw Error(Me(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Me(189))}}if(n.alternate!==i)throw Error(Me(190))}if(n.tag!==3)throw Error(Me(188));return n.stateNode.current===n?t:e}function hv(t){return t=Iy(t),t!==null?pv(t):null}function pv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pv(t);if(e!==null)return e;t=t.sibling}return null}var mv=pi.unstable_scheduleCallback,em=pi.unstable_cancelCallback,Dy=pi.unstable_shouldYield,Uy=pi.unstable_requestPaint,an=pi.unstable_now,Oy=pi.unstable_getCurrentPriorityLevel,Ih=pi.unstable_ImmediatePriority,gv=pi.unstable_UserBlockingPriority,$c=pi.unstable_NormalPriority,Fy=pi.unstable_LowPriority,vv=pi.unstable_IdlePriority,Tu=null,er=null;function ky(t){if(er&&typeof er.onCommitFiberRoot=="function")try{er.onCommitFiberRoot(Tu,t,void 0,(t.current.flags&128)===128)}catch{}}var Bi=Math.clz32?Math.clz32:Hy,zy=Math.log,By=Math.LN2;function Hy(t){return t>>>=0,t===0?32:31-(zy(t)/By|0)|0}var kl=64,zl=4194304;function Ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ta(a):(s&=o,s!==0&&(i=Ta(s)))}else o=n&~r,o!==0?i=Ta(o):s!==0&&(i=Ta(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bi(e),r=1<<n,i|=t[n],e&=~r;return i}function Vy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Vy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Lf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xv(){var t=kl;return kl<<=1,!(kl&4194240)&&(kl=64),t}function nd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function gl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bi(e),t[e]=n}function Wy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Dh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Dt=0;function _v(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yv,Uh,Sv,Mv,wv,Nf=!1,Bl=[],jr=null,Xr=null,$r=null,Ya=new Map,qa=new Map,kr=[],jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tm(t,e){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":Ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(e.pointerId)}}function la(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xl(e),e!==null&&Uh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Xy(t,e,n,i,r){switch(e){case"focusin":return jr=la(jr,t,e,n,i,r),!0;case"dragenter":return Xr=la(Xr,t,e,n,i,r),!0;case"mouseover":return $r=la($r,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ya.set(s,la(Ya.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,qa.set(s,la(qa.get(s)||null,t,e,n,i,r)),!0}return!1}function Ev(t){var e=Ms(t.target);if(e!==null){var n=Bs(e);if(n!==null){if(e=n.tag,e===13){if(e=fv(n),e!==null){t.blockedOn=e,wv(t.priority,function(){Sv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=If(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Af=i,n.target.dispatchEvent(i),Af=null}else return e=xl(n),e!==null&&Uh(e),t.blockedOn=n,!1;e.shift()}return!0}function nm(t,e,n){Lc(t)&&n.delete(e)}function $y(){Nf=!1,jr!==null&&Lc(jr)&&(jr=null),Xr!==null&&Lc(Xr)&&(Xr=null),$r!==null&&Lc($r)&&($r=null),Ya.forEach(nm),qa.forEach(nm)}function ca(t,e){t.blockedOn===e&&(t.blockedOn=null,Nf||(Nf=!0,pi.unstable_scheduleCallback(pi.unstable_NormalPriority,$y)))}function Za(t){function e(r){return ca(r,t)}if(0<Bl.length){ca(Bl[0],t);for(var n=1;n<Bl.length;n++){var i=Bl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(jr!==null&&ca(jr,t),Xr!==null&&ca(Xr,t),$r!==null&&ca($r,t),Ya.forEach(e),qa.forEach(e),n=0;n<kr.length;n++)i=kr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<kr.length&&(n=kr[0],n.blockedOn===null);)Ev(n),n.blockedOn===null&&kr.shift()}var No=Er.ReactCurrentBatchConfig,qc=!0;function Yy(t,e,n,i){var r=Dt,s=No.transition;No.transition=null;try{Dt=1,Oh(t,e,n,i)}finally{Dt=r,No.transition=s}}function qy(t,e,n,i){var r=Dt,s=No.transition;No.transition=null;try{Dt=4,Oh(t,e,n,i)}finally{Dt=r,No.transition=s}}function Oh(t,e,n,i){if(qc){var r=If(t,e,n,i);if(r===null)fd(t,e,i,Zc,n),tm(t,i);else if(Xy(r,t,e,n,i))i.stopPropagation();else if(tm(t,i),e&4&&-1<jy.indexOf(t)){for(;r!==null;){var s=xl(r);if(s!==null&&yv(s),s=If(t,e,n,i),s===null&&fd(t,e,i,Zc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else fd(t,e,i,null,n)}}var Zc=null;function If(t,e,n,i){if(Zc=null,t=Nh(i),t=Ms(t),t!==null)if(e=Bs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zc=t,null}function Tv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Oy()){case Ih:return 1;case gv:return 4;case $c:case Fy:return 16;case vv:return 536870912;default:return 16}default:return 16}}var Br=null,Fh=null,Nc=null;function bv(){if(Nc)return Nc;var t,e=Fh,n=e.length,i,r="value"in Br?Br.value:Br.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Nc=r.slice(t,1<i?1-i:void 0)}function Ic(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hl(){return!0}function im(){return!1}function gi(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hl:im,this.isPropagationStopped=im,this}return sn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),e}var qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kh=gi(qo),vl=sn({},qo,{view:0,detail:0}),Zy=gi(vl),id,rd,ua,bu=sn({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ua&&(ua&&t.type==="mousemove"?(id=t.screenX-ua.screenX,rd=t.screenY-ua.screenY):rd=id=0,ua=t),id)},movementY:function(t){return"movementY"in t?t.movementY:rd}}),rm=gi(bu),Ky=sn({},bu,{dataTransfer:0}),Jy=gi(Ky),Qy=sn({},vl,{relatedTarget:0}),sd=gi(Qy),eS=sn({},qo,{animationName:0,elapsedTime:0,pseudoElement:0}),tS=gi(eS),nS=sn({},qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iS=gi(nS),rS=sn({},qo,{data:0}),sm=gi(rS),sS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aS[t])?!!e[t]:!1}function zh(){return lS}var cS=sn({},vl,{key:function(t){if(t.key){var e=sS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ic(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zh,charCode:function(t){return t.type==="keypress"?Ic(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ic(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uS=gi(cS),dS=sn({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),om=gi(dS),fS=sn({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zh}),hS=gi(fS),pS=sn({},qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=gi(pS),gS=sn({},bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vS=gi(gS),xS=[9,13,27,32],Bh=_r&&"CompositionEvent"in window,Ra=null;_r&&"documentMode"in document&&(Ra=document.documentMode);var _S=_r&&"TextEvent"in window&&!Ra,Av=_r&&(!Bh||Ra&&8<Ra&&11>=Ra),am=" ",lm=!1;function Cv(t,e){switch(t){case"keyup":return xS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var go=!1;function yS(t,e){switch(t){case"compositionend":return Rv(e);case"keypress":return e.which!==32?null:(lm=!0,am);case"textInput":return t=e.data,t===am&&lm?null:t;default:return null}}function SS(t,e){if(go)return t==="compositionend"||!Bh&&Cv(t,e)?(t=bv(),Nc=Fh=Br=null,go=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Av&&e.locale!=="ko"?null:e.data;default:return null}}var MS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!MS[t.type]:e==="textarea"}function Pv(t,e,n,i){av(i),e=Kc(e,"onChange"),0<e.length&&(n=new kh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Pa=null,Ka=null;function wS(t){Hv(t,0)}function Au(t){var e=_o(t);if(ev(e))return t}function ES(t,e){if(t==="change")return e}var Lv=!1;if(_r){var od;if(_r){var ad="oninput"in document;if(!ad){var um=document.createElement("div");um.setAttribute("oninput","return;"),ad=typeof um.oninput=="function"}od=ad}else od=!1;Lv=od&&(!document.documentMode||9<document.documentMode)}function dm(){Pa&&(Pa.detachEvent("onpropertychange",Nv),Ka=Pa=null)}function Nv(t){if(t.propertyName==="value"&&Au(Ka)){var e=[];Pv(e,Ka,t,Nh(t)),dv(wS,e)}}function TS(t,e,n){t==="focusin"?(dm(),Pa=e,Ka=n,Pa.attachEvent("onpropertychange",Nv)):t==="focusout"&&dm()}function bS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Au(Ka)}function AS(t,e){if(t==="click")return Au(e)}function CS(t,e){if(t==="input"||t==="change")return Au(e)}function RS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vi=typeof Object.is=="function"?Object.is:RS;function Ja(t,e){if(Vi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!mf.call(e,r)||!Vi(t[r],e[r]))return!1}return!0}function fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hm(t,e){var n=fm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fm(n)}}function Iv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Iv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dv(){for(var t=window,e=Wc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wc(t.document)}return e}function Hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PS(t){var e=Dv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Iv(n.ownerDocument.documentElement,n)){if(i!==null&&Hh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=hm(n,s);var o=hm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LS=_r&&"documentMode"in document&&11>=document.documentMode,vo=null,Df=null,La=null,Uf=!1;function pm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uf||vo==null||vo!==Wc(i)||(i=vo,"selectionStart"in i&&Hh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),La&&Ja(La,i)||(La=i,i=Kc(Df,"onSelect"),0<i.length&&(e=new kh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=vo)))}function Vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xo={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},ld={},Uv={};_r&&(Uv=document.createElement("div").style,"AnimationEvent"in window||(delete xo.animationend.animation,delete xo.animationiteration.animation,delete xo.animationstart.animation),"TransitionEvent"in window||delete xo.transitionend.transition);function Cu(t){if(ld[t])return ld[t];if(!xo[t])return t;var e=xo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Uv)return ld[t]=e[n];return t}var Ov=Cu("animationend"),Fv=Cu("animationiteration"),kv=Cu("animationstart"),zv=Cu("transitionend"),Bv=new Map,mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function os(t,e){Bv.set(t,e),zs(e,[t])}for(var cd=0;cd<mm.length;cd++){var ud=mm[cd],NS=ud.toLowerCase(),IS=ud[0].toUpperCase()+ud.slice(1);os(NS,"on"+IS)}os(Ov,"onAnimationEnd");os(Fv,"onAnimationIteration");os(kv,"onAnimationStart");os("dblclick","onDoubleClick");os("focusin","onFocus");os("focusout","onBlur");os(zv,"onTransitionEnd");Fo("onMouseEnter",["mouseout","mouseover"]);Fo("onMouseLeave",["mouseout","mouseover"]);Fo("onPointerEnter",["pointerout","pointerover"]);Fo("onPointerLeave",["pointerout","pointerover"]);zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function gm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ny(i,e,void 0,t),t.currentTarget=null}function Hv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;gm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;gm(r,a,c),s=l}}}if(Xc)throw t=Pf,Xc=!1,Pf=null,t}function Yt(t,e){var n=e[Bf];n===void 0&&(n=e[Bf]=new Set);var i=t+"__bubble";n.has(i)||(Vv(e,t,2,!1),n.add(i))}function dd(t,e,n){var i=0;e&&(i|=4),Vv(n,t,i,e)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Qa(t){if(!t[Gl]){t[Gl]=!0,q0.forEach(function(n){n!=="selectionchange"&&(DS.has(n)||dd(n,!1,t),dd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gl]||(e[Gl]=!0,dd("selectionchange",!1,e))}}function Vv(t,e,n,i){switch(Tv(e)){case 1:var r=Yy;break;case 4:r=qy;break;default:r=Oh}n=r.bind(null,e,n,t),r=void 0,!Rf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function fd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ms(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}dv(function(){var c=s,u=Nh(n),f=[];e:{var h=Bv.get(t);if(h!==void 0){var p=kh,v=t;switch(t){case"keypress":if(Ic(n)===0)break e;case"keydown":case"keyup":p=uS;break;case"focusin":v="focus",p=sd;break;case"focusout":v="blur",p=sd;break;case"beforeblur":case"afterblur":p=sd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=hS;break;case Ov:case Fv:case kv:p=tS;break;case zv:p=mS;break;case"scroll":p=Zy;break;case"wheel":p=vS;break;case"copy":case"cut":case"paste":p=iS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=om}var S=(e&4)!==0,g=!S&&t==="scroll",d=S?h!==null?h+"Capture":null:h;S=[];for(var m=c,x;m!==null;){x=m;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=$a(m,d),y!=null&&S.push(el(m,y,x)))),g)break;m=m.return}0<S.length&&(h=new p(h,v,null,n,u),f.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Af&&(v=n.relatedTarget||n.fromElement)&&(Ms(v)||v[yr]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Ms(v):null,v!==null&&(g=Bs(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(S=rm,y="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=om,y="onPointerLeave",d="onPointerEnter",m="pointer"),g=p==null?h:_o(p),x=v==null?h:_o(v),h=new S(y,m+"leave",p,n,u),h.target=g,h.relatedTarget=x,y=null,Ms(u)===c&&(S=new S(d,m+"enter",v,n,u),S.target=x,S.relatedTarget=g,y=S),g=y,p&&v)t:{for(S=p,d=v,m=0,x=S;x;x=Ws(x))m++;for(x=0,y=d;y;y=Ws(y))x++;for(;0<m-x;)S=Ws(S),m--;for(;0<x-m;)d=Ws(d),x--;for(;m--;){if(S===d||d!==null&&S===d.alternate)break t;S=Ws(S),d=Ws(d)}S=null}else S=null;p!==null&&vm(f,h,p,S,!1),v!==null&&g!==null&&vm(f,g,v,S,!0)}}e:{if(h=c?_o(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var L=ES;else if(cm(h))if(Lv)L=CS;else{L=bS;var A=TS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=AS);if(L&&(L=L(t,c))){Pv(f,L,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Mf(h,"number",h.value)}switch(A=c?_o(c):window,t){case"focusin":(cm(A)||A.contentEditable==="true")&&(vo=A,Df=c,La=null);break;case"focusout":La=Df=vo=null;break;case"mousedown":Uf=!0;break;case"contextmenu":case"mouseup":case"dragend":Uf=!1,pm(f,n,u);break;case"selectionchange":if(LS)break;case"keydown":case"keyup":pm(f,n,u)}var P;if(Bh)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else go?Cv(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Av&&n.locale!=="ko"&&(go||F!=="onCompositionStart"?F==="onCompositionEnd"&&go&&(P=bv()):(Br=u,Fh="value"in Br?Br.value:Br.textContent,go=!0)),A=Kc(c,F),0<A.length&&(F=new sm(F,t,null,n,u),f.push({event:F,listeners:A}),P?F.data=P:(P=Rv(n),P!==null&&(F.data=P)))),(P=_S?yS(t,n):SS(t,n))&&(c=Kc(c,"onBeforeInput"),0<c.length&&(u=new sm("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=P))}Hv(f,e)})}function el(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=$a(t,n),s!=null&&i.unshift(el(t,s,r)),s=$a(t,e),s!=null&&i.push(el(t,s,r))),t=t.return}return i}function Ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=$a(n,s),l!=null&&o.unshift(el(n,l,a))):r||(l=$a(n,s),l!=null&&o.push(el(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var US=/\r\n?/g,OS=/\u0000|\uFFFD/g;function xm(t){return(typeof t=="string"?t:""+t).replace(US,`
`).replace(OS,"")}function Wl(t,e,n){if(e=xm(e),xm(t)!==e&&n)throw Error(Me(425))}function Jc(){}var Of=null,Ff=null;function kf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zf=typeof setTimeout=="function"?setTimeout:void 0,FS=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,kS=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(t){return _m.resolve(null).then(t).catch(zS)}:zf;function zS(t){setTimeout(function(){throw t})}function hd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Za(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Za(e)}function Yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ym(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zo=Math.random().toString(36).slice(2),Ki="__reactFiber$"+Zo,tl="__reactProps$"+Zo,yr="__reactContainer$"+Zo,Bf="__reactEvents$"+Zo,BS="__reactListeners$"+Zo,HS="__reactHandles$"+Zo;function Ms(t){var e=t[Ki];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yr]||n[Ki]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ym(t);t!==null;){if(n=t[Ki])return n;t=ym(t)}return e}t=n,n=t.parentNode}return null}function xl(t){return t=t[Ki]||t[yr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _o(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Me(33))}function Ru(t){return t[tl]||null}var Hf=[],yo=-1;function as(t){return{current:t}}function Zt(t){0>yo||(t.current=Hf[yo],Hf[yo]=null,yo--)}function Gt(t,e){yo++,Hf[yo]=t.current,t.current=e}var rs={},Fn=as(rs),ni=as(!1),Ps=rs;function ko(t,e){var n=t.type.contextTypes;if(!n)return rs;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ii(t){return t=t.childContextTypes,t!=null}function Qc(){Zt(ni),Zt(Fn)}function Sm(t,e,n){if(Fn.current!==rs)throw Error(Me(168));Gt(Fn,e),Gt(ni,n)}function Gv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Me(108,Ty(t)||"Unknown",r));return sn({},n,i)}function eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rs,Ps=Fn.current,Gt(Fn,t),Gt(ni,ni.current),!0}function Mm(t,e,n){var i=t.stateNode;if(!i)throw Error(Me(169));n?(t=Gv(t,e,Ps),i.__reactInternalMemoizedMergedChildContext=t,Zt(ni),Zt(Fn),Gt(Fn,t)):Zt(ni),Gt(ni,n)}var pr=null,Pu=!1,pd=!1;function Wv(t){pr===null?pr=[t]:pr.push(t)}function VS(t){Pu=!0,Wv(t)}function ls(){if(!pd&&pr!==null){pd=!0;var t=0,e=Dt;try{var n=pr;for(Dt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}pr=null,Pu=!1}catch(r){throw pr!==null&&(pr=pr.slice(t+1)),mv(Ih,ls),r}finally{Dt=e,pd=!1}}return null}var So=[],Mo=0,tu=null,nu=0,Si=[],Mi=0,Ls=null,mr=1,gr="";function gs(t,e){So[Mo++]=nu,So[Mo++]=tu,tu=t,nu=e}function jv(t,e,n){Si[Mi++]=mr,Si[Mi++]=gr,Si[Mi++]=Ls,Ls=t;var i=mr;t=gr;var r=32-Bi(i)-1;i&=~(1<<r),n+=1;var s=32-Bi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,mr=1<<32-Bi(e)+r|n<<r|i,gr=s+t}else mr=1<<s|n<<r|i,gr=t}function Vh(t){t.return!==null&&(gs(t,1),jv(t,1,0))}function Gh(t){for(;t===tu;)tu=So[--Mo],So[Mo]=null,nu=So[--Mo],So[Mo]=null;for(;t===Ls;)Ls=Si[--Mi],Si[Mi]=null,gr=Si[--Mi],Si[Mi]=null,mr=Si[--Mi],Si[Mi]=null}var hi=null,fi=null,Jt=!1,ki=null;function Xv(t,e){var n=Ti(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hi=t,fi=Yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hi=t,fi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ls!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ti(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hi=t,fi=null,!0):!1;default:return!1}}function Vf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gf(t){if(Jt){var e=fi;if(e){var n=e;if(!wm(t,e)){if(Vf(t))throw Error(Me(418));e=Yr(n.nextSibling);var i=hi;e&&wm(t,e)?Xv(i,n):(t.flags=t.flags&-4097|2,Jt=!1,hi=t)}}else{if(Vf(t))throw Error(Me(418));t.flags=t.flags&-4097|2,Jt=!1,hi=t}}}function Em(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hi=t}function jl(t){if(t!==hi)return!1;if(!Jt)return Em(t),Jt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kf(t.type,t.memoizedProps)),e&&(e=fi)){if(Vf(t))throw $v(),Error(Me(418));for(;e;)Xv(t,e),e=Yr(e.nextSibling)}if(Em(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Me(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fi=Yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fi=null}}else fi=hi?Yr(t.stateNode.nextSibling):null;return!0}function $v(){for(var t=fi;t;)t=Yr(t.nextSibling)}function zo(){fi=hi=null,Jt=!1}function Wh(t){ki===null?ki=[t]:ki.push(t)}var GS=Er.ReactCurrentBatchConfig;function da(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Me(309));var i=n.stateNode}if(!i)throw Error(Me(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Me(284));if(!n._owner)throw Error(Me(290,t))}return t}function Xl(t,e){throw t=Object.prototype.toString.call(e),Error(Me(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tm(t){var e=t._init;return e(t._payload)}function Yv(t){function e(d,m){if(t){var x=d.deletions;x===null?(d.deletions=[m],d.flags|=16):x.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=Jr(d,m),d.index=0,d.sibling=null,d}function s(d,m,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<m?(d.flags|=2,m):x):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,m,x,y){return m===null||m.tag!==6?(m=Sd(x,d.mode,y),m.return=d,m):(m=r(m,x),m.return=d,m)}function l(d,m,x,y){var L=x.type;return L===mo?u(d,m,x.props.children,y,x.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ur&&Tm(L)===m.type)?(y=r(m,x.props),y.ref=da(d,m,x),y.return=d,y):(y=Bc(x.type,x.key,x.props,null,d.mode,y),y.ref=da(d,m,x),y.return=d,y)}function c(d,m,x,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Md(x,d.mode,y),m.return=d,m):(m=r(m,x.children||[]),m.return=d,m)}function u(d,m,x,y,L){return m===null||m.tag!==7?(m=bs(x,d.mode,y,L),m.return=d,m):(m=r(m,x),m.return=d,m)}function f(d,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Sd(""+m,d.mode,x),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ul:return x=Bc(m.type,m.key,m.props,null,d.mode,x),x.ref=da(d,null,m),x.return=d,x;case po:return m=Md(m,d.mode,x),m.return=d,m;case Ur:var y=m._init;return f(d,y(m._payload),x)}if(Ea(m)||oa(m))return m=bs(m,d.mode,x,null),m.return=d,m;Xl(d,m)}return null}function h(d,m,x,y){var L=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:a(d,m,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ul:return x.key===L?l(d,m,x,y):null;case po:return x.key===L?c(d,m,x,y):null;case Ur:return L=x._init,h(d,m,L(x._payload),y)}if(Ea(x)||oa(x))return L!==null?null:u(d,m,x,y,null);Xl(d,x)}return null}function p(d,m,x,y,L){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,a(m,d,""+y,L);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ul:return d=d.get(y.key===null?x:y.key)||null,l(m,d,y,L);case po:return d=d.get(y.key===null?x:y.key)||null,c(m,d,y,L);case Ur:var A=y._init;return p(d,m,x,A(y._payload),L)}if(Ea(y)||oa(y))return d=d.get(x)||null,u(m,d,y,L,null);Xl(m,y)}return null}function v(d,m,x,y){for(var L=null,A=null,P=m,F=m=0,E=null;P!==null&&F<x.length;F++){P.index>F?(E=P,P=null):E=P.sibling;var T=h(d,P,x[F],y);if(T===null){P===null&&(P=E);break}t&&P&&T.alternate===null&&e(d,P),m=s(T,m,F),A===null?L=T:A.sibling=T,A=T,P=E}if(F===x.length)return n(d,P),Jt&&gs(d,F),L;if(P===null){for(;F<x.length;F++)P=f(d,x[F],y),P!==null&&(m=s(P,m,F),A===null?L=P:A.sibling=P,A=P);return Jt&&gs(d,F),L}for(P=i(d,P);F<x.length;F++)E=p(P,d,F,x[F],y),E!==null&&(t&&E.alternate!==null&&P.delete(E.key===null?F:E.key),m=s(E,m,F),A===null?L=E:A.sibling=E,A=E);return t&&P.forEach(function(V){return e(d,V)}),Jt&&gs(d,F),L}function S(d,m,x,y){var L=oa(x);if(typeof L!="function")throw Error(Me(150));if(x=L.call(x),x==null)throw Error(Me(151));for(var A=L=null,P=m,F=m=0,E=null,T=x.next();P!==null&&!T.done;F++,T=x.next()){P.index>F?(E=P,P=null):E=P.sibling;var V=h(d,P,T.value,y);if(V===null){P===null&&(P=E);break}t&&P&&V.alternate===null&&e(d,P),m=s(V,m,F),A===null?L=V:A.sibling=V,A=V,P=E}if(T.done)return n(d,P),Jt&&gs(d,F),L;if(P===null){for(;!T.done;F++,T=x.next())T=f(d,T.value,y),T!==null&&(m=s(T,m,F),A===null?L=T:A.sibling=T,A=T);return Jt&&gs(d,F),L}for(P=i(d,P);!T.done;F++,T=x.next())T=p(P,d,F,T.value,y),T!==null&&(t&&T.alternate!==null&&P.delete(T.key===null?F:T.key),m=s(T,m,F),A===null?L=T:A.sibling=T,A=T);return t&&P.forEach(function($){return e(d,$)}),Jt&&gs(d,F),L}function g(d,m,x,y){if(typeof x=="object"&&x!==null&&x.type===mo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ul:e:{for(var L=x.key,A=m;A!==null;){if(A.key===L){if(L=x.type,L===mo){if(A.tag===7){n(d,A.sibling),m=r(A,x.props.children),m.return=d,d=m;break e}}else if(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ur&&Tm(L)===A.type){n(d,A.sibling),m=r(A,x.props),m.ref=da(d,A,x),m.return=d,d=m;break e}n(d,A);break}else e(d,A);A=A.sibling}x.type===mo?(m=bs(x.props.children,d.mode,y,x.key),m.return=d,d=m):(y=Bc(x.type,x.key,x.props,null,d.mode,y),y.ref=da(d,m,x),y.return=d,d=y)}return o(d);case po:e:{for(A=x.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(d,m.sibling),m=r(m,x.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=Md(x,d.mode,y),m.return=d,d=m}return o(d);case Ur:return A=x._init,g(d,m,A(x._payload),y)}if(Ea(x))return v(d,m,x,y);if(oa(x))return S(d,m,x,y);Xl(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,x),m.return=d,d=m):(n(d,m),m=Sd(x,d.mode,y),m.return=d,d=m),o(d)):n(d,m)}return g}var Bo=Yv(!0),qv=Yv(!1),iu=as(null),ru=null,wo=null,jh=null;function Xh(){jh=wo=ru=null}function $h(t){var e=iu.current;Zt(iu),t._currentValue=e}function Wf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Io(t,e){ru=t,jh=wo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ti=!0),t.firstContext=null)}function Ci(t){var e=t._currentValue;if(jh!==t)if(t={context:t,memoizedValue:e,next:null},wo===null){if(ru===null)throw Error(Me(308));wo=t,ru.dependencies={lanes:0,firstContext:t}}else wo=wo.next=t;return e}var ws=null;function Yh(t){ws===null?ws=[t]:ws.push(t)}function Zv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Sr(t,i)}function Sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Or=!1;function qh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Pt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Sr(t,n)}return r=i.interleaved,r===null?(e.next=e,Yh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Sr(t,n)}function Dc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dh(t,n)}}function bm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function su(t,e,n,i){var r=t.updateQueue;Or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,S=a;switch(h=e,p=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=sn({},f,h);break e;case 2:Or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Is|=o,t.lanes=o,t.memoizedState=f}}function Am(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Me(191,r));r.call(i)}}}var _l={},tr=as(_l),nl=as(_l),il=as(_l);function Es(t){if(t===_l)throw Error(Me(174));return t}function Zh(t,e){switch(Gt(il,e),Gt(nl,t),Gt(tr,_l),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ef(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ef(e,t)}Zt(tr),Gt(tr,e)}function Ho(){Zt(tr),Zt(nl),Zt(il)}function Jv(t){Es(il.current);var e=Es(tr.current),n=Ef(e,t.type);e!==n&&(Gt(nl,t),Gt(tr,n))}function Kh(t){nl.current===t&&(Zt(tr),Zt(nl))}var en=as(0);function ou(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var md=[];function Jh(){for(var t=0;t<md.length;t++)md[t]._workInProgressVersionPrimary=null;md.length=0}var Uc=Er.ReactCurrentDispatcher,gd=Er.ReactCurrentBatchConfig,Ns=0,nn=null,gn=null,wn=null,au=!1,Na=!1,rl=0,WS=0;function Nn(){throw Error(Me(321))}function Qh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vi(t[n],e[n]))return!1;return!0}function ep(t,e,n,i,r,s){if(Ns=s,nn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Uc.current=t===null||t.memoizedState===null?YS:qS,t=n(i,r),Na){s=0;do{if(Na=!1,rl=0,25<=s)throw Error(Me(301));s+=1,wn=gn=null,e.updateQueue=null,Uc.current=ZS,t=n(i,r)}while(Na)}if(Uc.current=lu,e=gn!==null&&gn.next!==null,Ns=0,wn=gn=nn=null,au=!1,e)throw Error(Me(300));return t}function tp(){var t=rl!==0;return rl=0,t}function qi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?nn.memoizedState=wn=t:wn=wn.next=t,wn}function Ri(){if(gn===null){var t=nn.alternate;t=t!==null?t.memoizedState:null}else t=gn.next;var e=wn===null?nn.memoizedState:wn.next;if(e!==null)wn=e,gn=t;else{if(t===null)throw Error(Me(310));gn=t,t={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},wn===null?nn.memoizedState=wn=t:wn=wn.next=t}return wn}function sl(t,e){return typeof e=="function"?e(t):e}function vd(t){var e=Ri(),n=e.queue;if(n===null)throw Error(Me(311));n.lastRenderedReducer=t;var i=gn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Ns&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,nn.lanes|=u,Is|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Vi(i,e.memoizedState)||(ti=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,nn.lanes|=s,Is|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xd(t){var e=Ri(),n=e.queue;if(n===null)throw Error(Me(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Vi(s,e.memoizedState)||(ti=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Qv(){}function ex(t,e){var n=nn,i=Ri(),r=e(),s=!Vi(i.memoizedState,r);if(s&&(i.memoizedState=r,ti=!0),i=i.queue,np(ix.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||wn!==null&&wn.memoizedState.tag&1){if(n.flags|=2048,ol(9,nx.bind(null,n,i,r,e),void 0,null),En===null)throw Error(Me(349));Ns&30||tx(n,e,r)}return r}function tx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=nn.updateQueue,e===null?(e={lastEffect:null,stores:null},nn.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nx(t,e,n,i){e.value=n,e.getSnapshot=i,rx(e)&&sx(t)}function ix(t,e,n){return n(function(){rx(e)&&sx(t)})}function rx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vi(t,n)}catch{return!0}}function sx(t){var e=Sr(t,1);e!==null&&Hi(e,t,1,-1)}function Cm(t){var e=qi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:t},e.queue=t,t=t.dispatch=$S.bind(null,nn,t),[e.memoizedState,t]}function ol(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=nn.updateQueue,e===null?(e={lastEffect:null,stores:null},nn.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ox(){return Ri().memoizedState}function Oc(t,e,n,i){var r=qi();nn.flags|=t,r.memoizedState=ol(1|e,n,void 0,i===void 0?null:i)}function Lu(t,e,n,i){var r=Ri();i=i===void 0?null:i;var s=void 0;if(gn!==null){var o=gn.memoizedState;if(s=o.destroy,i!==null&&Qh(i,o.deps)){r.memoizedState=ol(e,n,s,i);return}}nn.flags|=t,r.memoizedState=ol(1|e,n,s,i)}function Rm(t,e){return Oc(8390656,8,t,e)}function np(t,e){return Lu(2048,8,t,e)}function ax(t,e){return Lu(4,2,t,e)}function lx(t,e){return Lu(4,4,t,e)}function cx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ux(t,e,n){return n=n!=null?n.concat([t]):null,Lu(4,4,cx.bind(null,e,t),n)}function ip(){}function dx(t,e){var n=Ri();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function fx(t,e){var n=Ri();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function hx(t,e,n){return Ns&21?(Vi(n,e)||(n=xv(),nn.lanes|=n,Is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ti=!0),t.memoizedState=n)}function jS(t,e){var n=Dt;Dt=n!==0&&4>n?n:4,t(!0);var i=gd.transition;gd.transition={};try{t(!1),e()}finally{Dt=n,gd.transition=i}}function px(){return Ri().memoizedState}function XS(t,e,n){var i=Kr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},mx(t))gx(e,n);else if(n=Zv(t,e,n,i),n!==null){var r=jn();Hi(n,t,i,r),vx(n,e,i)}}function $S(t,e,n){var i=Kr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(mx(t))gx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Vi(a,o)){var l=e.interleaved;l===null?(r.next=r,Yh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Zv(t,e,r,i),n!==null&&(r=jn(),Hi(n,t,i,r),vx(n,e,i))}}function mx(t){var e=t.alternate;return t===nn||e!==null&&e===nn}function gx(t,e){Na=au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dh(t,n)}}var lu={readContext:Ci,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useInsertionEffect:Nn,useLayoutEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useMutableSource:Nn,useSyncExternalStore:Nn,useId:Nn,unstable_isNewReconciler:!1},YS={readContext:Ci,useCallback:function(t,e){return qi().memoizedState=[t,e===void 0?null:e],t},useContext:Ci,useEffect:Rm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4194308,4,cx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oc(4,2,t,e)},useMemo:function(t,e){var n=qi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=XS.bind(null,nn,t),[i.memoizedState,t]},useRef:function(t){var e=qi();return t={current:t},e.memoizedState=t},useState:Cm,useDebugValue:ip,useDeferredValue:function(t){return qi().memoizedState=t},useTransition:function(){var t=Cm(!1),e=t[0];return t=jS.bind(null,t[1]),qi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=nn,r=qi();if(Jt){if(n===void 0)throw Error(Me(407));n=n()}else{if(n=e(),En===null)throw Error(Me(349));Ns&30||tx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Rm(ix.bind(null,i,s,t),[t]),i.flags|=2048,ol(9,nx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qi(),e=En.identifierPrefix;if(Jt){var n=gr,i=mr;n=(i&~(1<<32-Bi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=rl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=WS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},qS={readContext:Ci,useCallback:dx,useContext:Ci,useEffect:np,useImperativeHandle:ux,useInsertionEffect:ax,useLayoutEffect:lx,useMemo:fx,useReducer:vd,useRef:ox,useState:function(){return vd(sl)},useDebugValue:ip,useDeferredValue:function(t){var e=Ri();return hx(e,gn.memoizedState,t)},useTransition:function(){var t=vd(sl)[0],e=Ri().memoizedState;return[t,e]},useMutableSource:Qv,useSyncExternalStore:ex,useId:px,unstable_isNewReconciler:!1},ZS={readContext:Ci,useCallback:dx,useContext:Ci,useEffect:np,useImperativeHandle:ux,useInsertionEffect:ax,useLayoutEffect:lx,useMemo:fx,useReducer:xd,useRef:ox,useState:function(){return xd(sl)},useDebugValue:ip,useDeferredValue:function(t){var e=Ri();return gn===null?e.memoizedState=t:hx(e,gn.memoizedState,t)},useTransition:function(){var t=xd(sl)[0],e=Ri().memoizedState;return[t,e]},useMutableSource:Qv,useSyncExternalStore:ex,useId:px,unstable_isNewReconciler:!1};function Oi(t,e){if(t&&t.defaultProps){e=sn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:sn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nu={isMounted:function(t){return(t=t._reactInternals)?Bs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=jn(),r=Kr(t),s=xr(i,r);s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,r),e!==null&&(Hi(e,t,r,i),Dc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=jn(),r=Kr(t),s=xr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,r),e!==null&&(Hi(e,t,r,i),Dc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jn(),i=Kr(t),r=xr(n,i);r.tag=2,e!=null&&(r.callback=e),e=qr(t,r,i),e!==null&&(Hi(e,t,i,n),Dc(e,t,i))}};function Pm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ja(n,i)||!Ja(r,s):!0}function xx(t,e,n){var i=!1,r=rs,s=e.contextType;return typeof s=="object"&&s!==null?s=Ci(s):(r=ii(e)?Ps:Fn.current,i=e.contextTypes,s=(i=i!=null)?ko(t,r):rs),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nu.enqueueReplaceState(e,e.state,null)}function Xf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},qh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ci(s):(s=ii(e)?Ps:Fn.current,r.context=ko(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nu.enqueueReplaceState(r,r.state,null),su(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vo(t,e){try{var n="",i=e;do n+=Ey(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function _d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $f(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var KS=typeof WeakMap=="function"?WeakMap:Map;function _x(t,e,n){n=xr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){uu||(uu=!0,ih=i),$f(t,e)},n}function yx(t,e,n){n=xr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){$f(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$f(t,e),typeof i!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Nm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new KS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=dM.bind(null,t,e,n),e.then(t,t))}function Im(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xr(-1,1),e.tag=2,qr(n,e,1))),n.lanes|=1),t)}var JS=Er.ReactCurrentOwner,ti=!1;function Vn(t,e,n,i){e.child=t===null?qv(e,null,n,i):Bo(e,t.child,n,i)}function Um(t,e,n,i,r){n=n.render;var s=e.ref;return Io(e,r),i=ep(t,e,n,i,s,r),n=tp(),t!==null&&!ti?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mr(t,e,r)):(Jt&&n&&Vh(e),e.flags|=1,Vn(t,e,i,r),e.child)}function Om(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!dp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Sx(t,e,s,i,r)):(t=Bc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ja,n(o,i)&&t.ref===e.ref)return Mr(t,e,r)}return e.flags|=1,t=Jr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Sx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ja(s,i)&&t.ref===e.ref)if(ti=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ti=!0);else return e.lanes=t.lanes,Mr(t,e,r)}return Yf(t,e,n,i,r)}function Mx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(To,ci),ci|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Gt(To,ci),ci|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Gt(To,ci),ci|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Gt(To,ci),ci|=i;return Vn(t,e,r,n),e.child}function wx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yf(t,e,n,i,r){var s=ii(n)?Ps:Fn.current;return s=ko(e,s),Io(e,r),n=ep(t,e,n,i,s,r),i=tp(),t!==null&&!ti?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mr(t,e,r)):(Jt&&i&&Vh(e),e.flags|=1,Vn(t,e,n,r),e.child)}function Fm(t,e,n,i,r){if(ii(n)){var s=!0;eu(e)}else s=!1;if(Io(e,r),e.stateNode===null)Fc(t,e),xx(e,n,i),Xf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ci(c):(c=ii(n)?Ps:Fn.current,c=ko(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Lm(e,o,i,c),Or=!1;var h=e.memoizedState;o.state=h,su(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ni.current||Or?(typeof u=="function"&&(jf(e,n,u,i),l=e.memoizedState),(a=Or||Pm(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Kv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Oi(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ci(l):(l=ii(n)?Ps:Fn.current,l=ko(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Lm(e,o,i,l),Or=!1,h=e.memoizedState,o.state=h,su(e,i,o,r);var v=e.memoizedState;a!==f||h!==v||ni.current||Or?(typeof p=="function"&&(jf(e,n,p,i),v=e.memoizedState),(c=Or||Pm(e,n,c,i,h,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return qf(t,e,n,i,s,r)}function qf(t,e,n,i,r,s){wx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mm(e,n,!1),Mr(t,e,s);i=e.stateNode,JS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Bo(e,t.child,null,s),e.child=Bo(e,null,a,s)):Vn(t,e,a,s),e.memoizedState=i.state,r&&Mm(e,n,!0),e.child}function Ex(t){var e=t.stateNode;e.pendingContext?Sm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sm(t,e.context,!1),Zh(t,e.containerInfo)}function km(t,e,n,i,r){return zo(),Wh(r),e.flags|=256,Vn(t,e,n,i),e.child}var Zf={dehydrated:null,treeContext:null,retryLane:0};function Kf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tx(t,e,n){var i=e.pendingProps,r=en.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Gt(en,r&1),t===null)return Gf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uu(o,i,0,null),t=bs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Kf(n),e.memoizedState=Zf,t):rp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return QS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Jr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Jr(a,s):(s=bs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Kf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zf,i}return s=t.child,t=s.sibling,i=Jr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function rp(t,e){return e=Uu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $l(t,e,n,i){return i!==null&&Wh(i),Bo(e,t.child,null,n),t=rp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function QS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=_d(Error(Me(422))),$l(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Uu({mode:"visible",children:i.children},r,0,null),s=bs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Bo(e,t.child,null,o),e.child.memoizedState=Kf(o),e.memoizedState=Zf,s);if(!(e.mode&1))return $l(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Me(419)),i=_d(s,i,void 0),$l(t,e,o,i)}if(a=(o&t.childLanes)!==0,ti||a){if(i=En,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Sr(t,r),Hi(i,t,r,-1))}return up(),i=_d(Error(Me(421))),$l(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fi=Yr(r.nextSibling),hi=e,Jt=!0,ki=null,t!==null&&(Si[Mi++]=mr,Si[Mi++]=gr,Si[Mi++]=Ls,mr=t.id,gr=t.overflow,Ls=e),e=rp(e,i.children),e.flags|=4096,e)}function zm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Wf(t.return,e,n)}function yd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function bx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vn(t,e,i.children,n),i=en.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zm(t,n,e);else if(t.tag===19)zm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Gt(en,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ou(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ou(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yd(e,!0,n,null,s);break;case"together":yd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Me(153));if(e.child!==null){for(t=e.child,n=Jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eM(t,e,n){switch(e.tag){case 3:Ex(e),zo();break;case 5:Jv(e);break;case 1:ii(e.type)&&eu(e);break;case 4:Zh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Gt(iu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Gt(en,en.current&1),e.flags|=128,null):n&e.child.childLanes?Tx(t,e,n):(Gt(en,en.current&1),t=Mr(t,e,n),t!==null?t.sibling:null);Gt(en,en.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return bx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Gt(en,en.current),i)break;return null;case 22:case 23:return e.lanes=0,Mx(t,e,n)}return Mr(t,e,n)}var Ax,Jf,Cx,Rx;Ax=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jf=function(){};Cx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Es(tr.current);var s=null;switch(n){case"input":r=yf(t,r),i=yf(t,i),s=[];break;case"select":r=sn({},r,{value:void 0}),i=sn({},i,{value:void 0}),s=[];break;case"textarea":r=wf(t,r),i=wf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Jc)}Tf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ja.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ja.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Yt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Rx=function(t,e,n,i){n!==i&&(e.flags|=4)};function fa(t,e){if(!Jt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function In(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function tM(t,e,n){var i=e.pendingProps;switch(Gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(e),null;case 1:return ii(e.type)&&Qc(),In(e),null;case 3:return i=e.stateNode,Ho(),Zt(ni),Zt(Fn),Jh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(jl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ki!==null&&(oh(ki),ki=null))),Jf(t,e),In(e),null;case 5:Kh(e);var r=Es(il.current);if(n=e.type,t!==null&&e.stateNode!=null)Cx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Me(166));return In(e),null}if(t=Es(tr.current),jl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ki]=e,i[tl]=s,t=(e.mode&1)!==0,n){case"dialog":Yt("cancel",i),Yt("close",i);break;case"iframe":case"object":case"embed":Yt("load",i);break;case"video":case"audio":for(r=0;r<ba.length;r++)Yt(ba[r],i);break;case"source":Yt("error",i);break;case"img":case"image":case"link":Yt("error",i),Yt("load",i);break;case"details":Yt("toggle",i);break;case"input":Yp(i,s),Yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Yt("invalid",i);break;case"textarea":Zp(i,s),Yt("invalid",i)}Tf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wl(i.textContent,a,t),r=["children",""+a]):ja.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Yt("scroll",i)}switch(n){case"input":Ol(i),qp(i,s,!0);break;case"textarea":Ol(i),Kp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Jc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=iv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ki]=e,t[tl]=i,Ax(t,e,!1,!1),e.stateNode=t;e:{switch(o=bf(n,i),n){case"dialog":Yt("cancel",t),Yt("close",t),r=i;break;case"iframe":case"object":case"embed":Yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ba.length;r++)Yt(ba[r],t);r=i;break;case"source":Yt("error",t),r=i;break;case"img":case"image":case"link":Yt("error",t),Yt("load",t),r=i;break;case"details":Yt("toggle",t),r=i;break;case"input":Yp(t,i),r=yf(t,i),Yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=sn({},i,{value:void 0}),Yt("invalid",t);break;case"textarea":Zp(t,i),r=wf(t,i),Yt("invalid",t);break;default:r=i}Tf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ov(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xa(t,l):typeof l=="number"&&Xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ja.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Yt("scroll",t):l!=null&&Ch(t,s,l,o))}switch(n){case"input":Ol(t),qp(t,i,!1);break;case"textarea":Ol(t),Kp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+is(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ro(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ro(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Jc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return In(e),null;case 6:if(t&&e.stateNode!=null)Rx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Me(166));if(n=Es(il.current),Es(tr.current),jl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ki]=e,(s=i.nodeValue!==n)&&(t=hi,t!==null))switch(t.tag){case 3:Wl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ki]=e,e.stateNode=i}return In(e),null;case 13:if(Zt(en),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Jt&&fi!==null&&e.mode&1&&!(e.flags&128))$v(),zo(),e.flags|=98560,s=!1;else if(s=jl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Me(317));s[Ki]=e}else zo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;In(e),s=!1}else ki!==null&&(oh(ki),ki=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||en.current&1?vn===0&&(vn=3):up())),e.updateQueue!==null&&(e.flags|=4),In(e),null);case 4:return Ho(),Jf(t,e),t===null&&Qa(e.stateNode.containerInfo),In(e),null;case 10:return $h(e.type._context),In(e),null;case 17:return ii(e.type)&&Qc(),In(e),null;case 19:if(Zt(en),s=e.memoizedState,s===null)return In(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)fa(s,!1);else{if(vn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ou(t),o!==null){for(e.flags|=128,fa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Gt(en,en.current&1|2),e.child}t=t.sibling}s.tail!==null&&an()>Go&&(e.flags|=128,i=!0,fa(s,!1),e.lanes=4194304)}else{if(!i)if(t=ou(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Jt)return In(e),null}else 2*an()-s.renderingStartTime>Go&&n!==1073741824&&(e.flags|=128,i=!0,fa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=an(),e.sibling=null,n=en.current,Gt(en,i?n&1|2:n&1),e):(In(e),null);case 22:case 23:return cp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ci&1073741824&&(In(e),e.subtreeFlags&6&&(e.flags|=8192)):In(e),null;case 24:return null;case 25:return null}throw Error(Me(156,e.tag))}function nM(t,e){switch(Gh(e),e.tag){case 1:return ii(e.type)&&Qc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ho(),Zt(ni),Zt(Fn),Jh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kh(e),null;case 13:if(Zt(en),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Me(340));zo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Zt(en),null;case 4:return Ho(),null;case 10:return $h(e.type._context),null;case 22:case 23:return cp(),null;case 24:return null;default:return null}}var Yl=!1,On=!1,iM=typeof WeakSet=="function"?WeakSet:Set,We=null;function Eo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){on(t,e,i)}else n.current=null}function Qf(t,e,n){try{n()}catch(i){on(t,e,i)}}var Bm=!1;function rM(t,e){if(Of=qc,t=Dv(),Hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ff={focusedElem:t,selectionRange:n},qc=!1,We=e;We!==null;)if(e=We,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,We=t;else for(;We!==null;){e=We;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,g=v.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:Oi(e.type,S),g);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Me(163))}}catch(y){on(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,We=t;break}We=e.return}return v=Bm,Bm=!1,v}function Ia(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Qf(e,n,s)}r=r.next}while(r!==i)}}function Iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function eh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Px(t){var e=t.alternate;e!==null&&(t.alternate=null,Px(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ki],delete e[tl],delete e[Bf],delete e[BS],delete e[HS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Lx(t){return t.tag===5||t.tag===3||t.tag===4}function Hm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function th(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jc));else if(i!==4&&(t=t.child,t!==null))for(th(t,e,n),t=t.sibling;t!==null;)th(t,e,n),t=t.sibling}function nh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(nh(t,e,n),t=t.sibling;t!==null;)nh(t,e,n),t=t.sibling}var Cn=null,Fi=!1;function Rr(t,e,n){for(n=n.child;n!==null;)Nx(t,e,n),n=n.sibling}function Nx(t,e,n){if(er&&typeof er.onCommitFiberUnmount=="function")try{er.onCommitFiberUnmount(Tu,n)}catch{}switch(n.tag){case 5:On||Eo(n,e);case 6:var i=Cn,r=Fi;Cn=null,Rr(t,e,n),Cn=i,Fi=r,Cn!==null&&(Fi?(t=Cn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Cn.removeChild(n.stateNode));break;case 18:Cn!==null&&(Fi?(t=Cn,n=n.stateNode,t.nodeType===8?hd(t.parentNode,n):t.nodeType===1&&hd(t,n),Za(t)):hd(Cn,n.stateNode));break;case 4:i=Cn,r=Fi,Cn=n.stateNode.containerInfo,Fi=!0,Rr(t,e,n),Cn=i,Fi=r;break;case 0:case 11:case 14:case 15:if(!On&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qf(n,e,o),r=r.next}while(r!==i)}Rr(t,e,n);break;case 1:if(!On&&(Eo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){on(n,e,a)}Rr(t,e,n);break;case 21:Rr(t,e,n);break;case 22:n.mode&1?(On=(i=On)||n.memoizedState!==null,Rr(t,e,n),On=i):Rr(t,e,n);break;default:Rr(t,e,n)}}function Vm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iM),e.forEach(function(i){var r=hM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ni(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Cn=a.stateNode,Fi=!1;break e;case 3:Cn=a.stateNode.containerInfo,Fi=!0;break e;case 4:Cn=a.stateNode.containerInfo,Fi=!0;break e}a=a.return}if(Cn===null)throw Error(Me(160));Nx(s,o,r),Cn=null,Fi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){on(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ix(e,t),e=e.sibling}function Ix(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ni(e,t),Yi(t),i&4){try{Ia(3,t,t.return),Iu(3,t)}catch(S){on(t,t.return,S)}try{Ia(5,t,t.return)}catch(S){on(t,t.return,S)}}break;case 1:Ni(e,t),Yi(t),i&512&&n!==null&&Eo(n,n.return);break;case 5:if(Ni(e,t),Yi(t),i&512&&n!==null&&Eo(n,n.return),t.flags&32){var r=t.stateNode;try{Xa(r,"")}catch(S){on(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tv(r,s),bf(a,o);var c=bf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?ov(r,f):u==="dangerouslySetInnerHTML"?rv(r,f):u==="children"?Xa(r,f):Ch(r,u,f,c)}switch(a){case"input":Sf(r,s);break;case"textarea":nv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ro(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ro(r,!!s.multiple,s.defaultValue,!0):Ro(r,!!s.multiple,s.multiple?[]:"",!1))}r[tl]=s}catch(S){on(t,t.return,S)}}break;case 6:if(Ni(e,t),Yi(t),i&4){if(t.stateNode===null)throw Error(Me(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){on(t,t.return,S)}}break;case 3:if(Ni(e,t),Yi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Za(e.containerInfo)}catch(S){on(t,t.return,S)}break;case 4:Ni(e,t),Yi(t);break;case 13:Ni(e,t),Yi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ap=an())),i&4&&Vm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(On=(c=On)||u,Ni(e,t),On=c):Ni(e,t),Yi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(We=t,u=t.child;u!==null;){for(f=We=u;We!==null;){switch(h=We,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ia(4,h,h.return);break;case 1:Eo(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){on(i,n,S)}}break;case 5:Eo(h,h.return);break;case 22:if(h.memoizedState!==null){Wm(f);continue}}p!==null?(p.return=h,We=p):Wm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sv("display",o))}catch(S){on(t,t.return,S)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){on(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ni(e,t),Yi(t),i&4&&Vm(t);break;case 21:break;default:Ni(e,t),Yi(t)}}function Yi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Lx(n)){var i=n;break e}n=n.return}throw Error(Me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xa(r,""),i.flags&=-33);var s=Hm(t);nh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Hm(t);th(t,a,o);break;default:throw Error(Me(161))}}catch(l){on(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sM(t,e,n){We=t,Dx(t)}function Dx(t,e,n){for(var i=(t.mode&1)!==0;We!==null;){var r=We,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Yl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||On;a=Yl;var c=On;if(Yl=o,(On=l)&&!c)for(We=r;We!==null;)o=We,l=o.child,o.tag===22&&o.memoizedState!==null?jm(r):l!==null?(l.return=o,We=l):jm(r);for(;s!==null;)We=s,Dx(s),s=s.sibling;We=r,Yl=a,On=c}Gm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,We=s):Gm(t)}}function Gm(t){for(;We!==null;){var e=We;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:On||Iu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!On)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Oi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Am(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Am(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Za(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Me(163))}On||e.flags&512&&eh(e)}catch(h){on(e,e.return,h)}}if(e===t){We=null;break}if(n=e.sibling,n!==null){n.return=e.return,We=n;break}We=e.return}}function Wm(t){for(;We!==null;){var e=We;if(e===t){We=null;break}var n=e.sibling;if(n!==null){n.return=e.return,We=n;break}We=e.return}}function jm(t){for(;We!==null;){var e=We;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Iu(4,e)}catch(l){on(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){on(e,r,l)}}var s=e.return;try{eh(e)}catch(l){on(e,s,l)}break;case 5:var o=e.return;try{eh(e)}catch(l){on(e,o,l)}}}catch(l){on(e,e.return,l)}if(e===t){We=null;break}var a=e.sibling;if(a!==null){a.return=e.return,We=a;break}We=e.return}}var oM=Math.ceil,cu=Er.ReactCurrentDispatcher,sp=Er.ReactCurrentOwner,bi=Er.ReactCurrentBatchConfig,Pt=0,En=null,hn=null,Pn=0,ci=0,To=as(0),vn=0,al=null,Is=0,Du=0,op=0,Da=null,Qn=null,ap=0,Go=1/0,hr=null,uu=!1,ih=null,Zr=null,ql=!1,Hr=null,du=0,Ua=0,rh=null,kc=-1,zc=0;function jn(){return Pt&6?an():kc!==-1?kc:kc=an()}function Kr(t){return t.mode&1?Pt&2&&Pn!==0?Pn&-Pn:GS.transition!==null?(zc===0&&(zc=xv()),zc):(t=Dt,t!==0||(t=window.event,t=t===void 0?16:Tv(t.type)),t):1}function Hi(t,e,n,i){if(50<Ua)throw Ua=0,rh=null,Error(Me(185));gl(t,n,i),(!(Pt&2)||t!==En)&&(t===En&&(!(Pt&2)&&(Du|=n),vn===4&&zr(t,Pn)),ri(t,i),n===1&&Pt===0&&!(e.mode&1)&&(Go=an()+500,Pu&&ls()))}function ri(t,e){var n=t.callbackNode;Gy(t,e);var i=Yc(t,t===En?Pn:0);if(i===0)n!==null&&em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&em(n),e===1)t.tag===0?VS(Xm.bind(null,t)):Wv(Xm.bind(null,t)),kS(function(){!(Pt&6)&&ls()}),n=null;else{switch(_v(i)){case 1:n=Ih;break;case 4:n=gv;break;case 16:n=$c;break;case 536870912:n=vv;break;default:n=$c}n=Vx(n,Ux.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ux(t,e){if(kc=-1,zc=0,Pt&6)throw Error(Me(327));var n=t.callbackNode;if(Do()&&t.callbackNode!==n)return null;var i=Yc(t,t===En?Pn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=fu(t,i);else{e=i;var r=Pt;Pt|=2;var s=Fx();(En!==t||Pn!==e)&&(hr=null,Go=an()+500,Ts(t,e));do try{cM();break}catch(a){Ox(t,a)}while(!0);Xh(),cu.current=s,Pt=r,hn!==null?e=0:(En=null,Pn=0,e=vn)}if(e!==0){if(e===2&&(r=Lf(t),r!==0&&(i=r,e=sh(t,r))),e===1)throw n=al,Ts(t,0),zr(t,i),ri(t,an()),n;if(e===6)zr(t,i);else{if(r=t.current.alternate,!(i&30)&&!aM(r)&&(e=fu(t,i),e===2&&(s=Lf(t),s!==0&&(i=s,e=sh(t,s))),e===1))throw n=al,Ts(t,0),zr(t,i),ri(t,an()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Me(345));case 2:vs(t,Qn,hr);break;case 3:if(zr(t,i),(i&130023424)===i&&(e=ap+500-an(),10<e)){if(Yc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){jn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=zf(vs.bind(null,t,Qn,hr),e);break}vs(t,Qn,hr);break;case 4:if(zr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Bi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=an()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*oM(i/1960))-i,10<i){t.timeoutHandle=zf(vs.bind(null,t,Qn,hr),i);break}vs(t,Qn,hr);break;case 5:vs(t,Qn,hr);break;default:throw Error(Me(329))}}}return ri(t,an()),t.callbackNode===n?Ux.bind(null,t):null}function sh(t,e){var n=Da;return t.current.memoizedState.isDehydrated&&(Ts(t,e).flags|=256),t=fu(t,e),t!==2&&(e=Qn,Qn=n,e!==null&&oh(e)),t}function oh(t){Qn===null?Qn=t:Qn.push.apply(Qn,t)}function aM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zr(t,e){for(e&=~op,e&=~Du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bi(e),i=1<<n;t[n]=-1,e&=~i}}function Xm(t){if(Pt&6)throw Error(Me(327));Do();var e=Yc(t,0);if(!(e&1))return ri(t,an()),null;var n=fu(t,e);if(t.tag!==0&&n===2){var i=Lf(t);i!==0&&(e=i,n=sh(t,i))}if(n===1)throw n=al,Ts(t,0),zr(t,e),ri(t,an()),n;if(n===6)throw Error(Me(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vs(t,Qn,hr),ri(t,an()),null}function lp(t,e){var n=Pt;Pt|=1;try{return t(e)}finally{Pt=n,Pt===0&&(Go=an()+500,Pu&&ls())}}function Ds(t){Hr!==null&&Hr.tag===0&&!(Pt&6)&&Do();var e=Pt;Pt|=1;var n=bi.transition,i=Dt;try{if(bi.transition=null,Dt=1,t)return t()}finally{Dt=i,bi.transition=n,Pt=e,!(Pt&6)&&ls()}}function cp(){ci=To.current,Zt(To)}function Ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,FS(n)),hn!==null)for(n=hn.return;n!==null;){var i=n;switch(Gh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Qc();break;case 3:Ho(),Zt(ni),Zt(Fn),Jh();break;case 5:Kh(i);break;case 4:Ho();break;case 13:Zt(en);break;case 19:Zt(en);break;case 10:$h(i.type._context);break;case 22:case 23:cp()}n=n.return}if(En=t,hn=t=Jr(t.current,null),Pn=ci=e,vn=0,al=null,op=Du=Is=0,Qn=Da=null,ws!==null){for(e=0;e<ws.length;e++)if(n=ws[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ws=null}return t}function Ox(t,e){do{var n=hn;try{if(Xh(),Uc.current=lu,au){for(var i=nn.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}au=!1}if(Ns=0,wn=gn=nn=null,Na=!1,rl=0,sp.current=null,n===null||n.return===null){vn=1,al=e,hn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Im(o);if(p!==null){p.flags&=-257,Dm(p,o,a,s,e),p.mode&1&&Nm(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){Nm(s,c,e),up();break e}l=Error(Me(426))}}else if(Jt&&a.mode&1){var g=Im(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Dm(g,o,a,s,e),Wh(Vo(l,a));break e}}s=l=Vo(l,a),vn!==4&&(vn=2),Da===null?Da=[s]:Da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=_x(s,l,e);bm(s,d);break e;case 1:a=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Zr===null||!Zr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=yx(s,a,e);bm(s,y);break e}}s=s.return}while(s!==null)}zx(n)}catch(L){e=L,hn===n&&n!==null&&(hn=n=n.return);continue}break}while(!0)}function Fx(){var t=cu.current;return cu.current=lu,t===null?lu:t}function up(){(vn===0||vn===3||vn===2)&&(vn=4),En===null||!(Is&268435455)&&!(Du&268435455)||zr(En,Pn)}function fu(t,e){var n=Pt;Pt|=2;var i=Fx();(En!==t||Pn!==e)&&(hr=null,Ts(t,e));do try{lM();break}catch(r){Ox(t,r)}while(!0);if(Xh(),Pt=n,cu.current=i,hn!==null)throw Error(Me(261));return En=null,Pn=0,vn}function lM(){for(;hn!==null;)kx(hn)}function cM(){for(;hn!==null&&!Dy();)kx(hn)}function kx(t){var e=Hx(t.alternate,t,ci);t.memoizedProps=t.pendingProps,e===null?zx(t):hn=e,sp.current=null}function zx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nM(n,e),n!==null){n.flags&=32767,hn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vn=6,hn=null;return}}else if(n=tM(n,e,ci),n!==null){hn=n;return}if(e=e.sibling,e!==null){hn=e;return}hn=e=t}while(e!==null);vn===0&&(vn=5)}function vs(t,e,n){var i=Dt,r=bi.transition;try{bi.transition=null,Dt=1,uM(t,e,n,i)}finally{bi.transition=r,Dt=i}return null}function uM(t,e,n,i){do Do();while(Hr!==null);if(Pt&6)throw Error(Me(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Me(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Wy(t,s),t===En&&(hn=En=null,Pn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ql||(ql=!0,Vx($c,function(){return Do(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bi.transition,bi.transition=null;var o=Dt;Dt=1;var a=Pt;Pt|=4,sp.current=null,rM(t,n),Ix(n,t),PS(Ff),qc=!!Of,Ff=Of=null,t.current=n,sM(n),Uy(),Pt=a,Dt=o,bi.transition=s}else t.current=n;if(ql&&(ql=!1,Hr=t,du=r),s=t.pendingLanes,s===0&&(Zr=null),ky(n.stateNode),ri(t,an()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(uu)throw uu=!1,t=ih,ih=null,t;return du&1&&t.tag!==0&&Do(),s=t.pendingLanes,s&1?t===rh?Ua++:(Ua=0,rh=t):Ua=0,ls(),null}function Do(){if(Hr!==null){var t=_v(du),e=bi.transition,n=Dt;try{if(bi.transition=null,Dt=16>t?16:t,Hr===null)var i=!1;else{if(t=Hr,Hr=null,du=0,Pt&6)throw Error(Me(331));var r=Pt;for(Pt|=4,We=t.current;We!==null;){var s=We,o=s.child;if(We.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(We=c;We!==null;){var u=We;switch(u.tag){case 0:case 11:case 15:Ia(8,u,s)}var f=u.child;if(f!==null)f.return=u,We=f;else for(;We!==null;){u=We;var h=u.sibling,p=u.return;if(Px(u),u===c){We=null;break}if(h!==null){h.return=p,We=h;break}We=p}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}We=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,We=o;else e:for(;We!==null;){if(s=We,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ia(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,We=d;break e}We=s.return}}var m=t.current;for(We=m;We!==null;){o=We;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,We=x;else e:for(o=m;We!==null;){if(a=We,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Iu(9,a)}}catch(L){on(a,a.return,L)}if(a===o){We=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,We=y;break e}We=a.return}}if(Pt=r,ls(),er&&typeof er.onPostCommitFiberRoot=="function")try{er.onPostCommitFiberRoot(Tu,t)}catch{}i=!0}return i}finally{Dt=n,bi.transition=e}}return!1}function $m(t,e,n){e=Vo(n,e),e=_x(t,e,1),t=qr(t,e,1),e=jn(),t!==null&&(gl(t,1,e),ri(t,e))}function on(t,e,n){if(t.tag===3)$m(t,t,n);else for(;e!==null;){if(e.tag===3){$m(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zr===null||!Zr.has(i))){t=Vo(n,t),t=yx(e,t,1),e=qr(e,t,1),t=jn(),e!==null&&(gl(e,1,t),ri(e,t));break}}e=e.return}}function dM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=jn(),t.pingedLanes|=t.suspendedLanes&n,En===t&&(Pn&n)===n&&(vn===4||vn===3&&(Pn&130023424)===Pn&&500>an()-ap?Ts(t,0):op|=n),ri(t,e)}function Bx(t,e){e===0&&(t.mode&1?(e=zl,zl<<=1,!(zl&130023424)&&(zl=4194304)):e=1);var n=jn();t=Sr(t,e),t!==null&&(gl(t,e,n),ri(t,n))}function fM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bx(t,n)}function hM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Me(314))}i!==null&&i.delete(e),Bx(t,n)}var Hx;Hx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ni.current)ti=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ti=!1,eM(t,e,n);ti=!!(t.flags&131072)}else ti=!1,Jt&&e.flags&1048576&&jv(e,nu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fc(t,e),t=e.pendingProps;var r=ko(e,Fn.current);Io(e,n),r=ep(null,e,i,t,r,n);var s=tp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ii(i)?(s=!0,eu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qh(e),r.updater=Nu,e.stateNode=r,r._reactInternals=e,Xf(e,i,t,n),e=qf(null,e,i,!0,s,n)):(e.tag=0,Jt&&s&&Vh(e),Vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Fc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=mM(i),t=Oi(i,t),r){case 0:e=Yf(null,e,i,t,n);break e;case 1:e=Fm(null,e,i,t,n);break e;case 11:e=Um(null,e,i,t,n);break e;case 14:e=Om(null,e,i,Oi(i.type,t),n);break e}throw Error(Me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Oi(i,r),Yf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Oi(i,r),Fm(t,e,i,r,n);case 3:e:{if(Ex(e),t===null)throw Error(Me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Kv(t,e),su(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vo(Error(Me(423)),e),e=km(t,e,i,n,r);break e}else if(i!==r){r=Vo(Error(Me(424)),e),e=km(t,e,i,n,r);break e}else for(fi=Yr(e.stateNode.containerInfo.firstChild),hi=e,Jt=!0,ki=null,n=qv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zo(),i===r){e=Mr(t,e,n);break e}Vn(t,e,i,n)}e=e.child}return e;case 5:return Jv(e),t===null&&Gf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,kf(i,r)?o=null:s!==null&&kf(i,s)&&(e.flags|=32),wx(t,e),Vn(t,e,o,n),e.child;case 6:return t===null&&Gf(e),null;case 13:return Tx(t,e,n);case 4:return Zh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bo(e,null,i,n):Vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Oi(i,r),Um(t,e,i,r,n);case 7:return Vn(t,e,e.pendingProps,n),e.child;case 8:return Vn(t,e,e.pendingProps.children,n),e.child;case 12:return Vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Gt(iu,i._currentValue),i._currentValue=o,s!==null)if(Vi(s.value,o)){if(s.children===r.children&&!ni.current){e=Mr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=xr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Me(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Io(e,n),r=Ci(r),i=i(r),e.flags|=1,Vn(t,e,i,n),e.child;case 14:return i=e.type,r=Oi(i,e.pendingProps),r=Oi(i.type,r),Om(t,e,i,r,n);case 15:return Sx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Oi(i,r),Fc(t,e),e.tag=1,ii(i)?(t=!0,eu(e)):t=!1,Io(e,n),xx(e,i,r),Xf(e,i,r,n),qf(null,e,i,!0,t,n);case 19:return bx(t,e,n);case 22:return Mx(t,e,n)}throw Error(Me(156,e.tag))};function Vx(t,e){return mv(t,e)}function pM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(t,e,n,i){return new pM(t,e,n,i)}function dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mM(t){if(typeof t=="function")return dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ph)return 11;if(t===Lh)return 14}return 2}function Jr(t,e){var n=t.alternate;return n===null?(n=Ti(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case mo:return bs(n.children,r,s,e);case Rh:o=8,r|=8;break;case gf:return t=Ti(12,n,e,r|2),t.elementType=gf,t.lanes=s,t;case vf:return t=Ti(13,n,e,r),t.elementType=vf,t.lanes=s,t;case xf:return t=Ti(19,n,e,r),t.elementType=xf,t.lanes=s,t;case J0:return Uu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Z0:o=10;break e;case K0:o=9;break e;case Ph:o=11;break e;case Lh:o=14;break e;case Ur:o=16,i=null;break e}throw Error(Me(130,t==null?t:typeof t,""))}return e=Ti(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function bs(t,e,n,i){return t=Ti(7,t,i,e),t.lanes=n,t}function Uu(t,e,n,i){return t=Ti(22,t,i,e),t.elementType=J0,t.lanes=n,t.stateNode={isHidden:!1},t}function Sd(t,e,n){return t=Ti(6,t,null,e),t.lanes=n,t}function Md(t,e,n){return e=Ti(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nd(0),this.expirationTimes=nd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fp(t,e,n,i,r,s,o,a,l){return t=new gM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ti(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qh(s),t}function vM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:po,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Gx(t){if(!t)return rs;t=t._reactInternals;e:{if(Bs(t)!==t||t.tag!==1)throw Error(Me(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ii(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Me(171))}if(t.tag===1){var n=t.type;if(ii(n))return Gv(t,n,e)}return e}function Wx(t,e,n,i,r,s,o,a,l){return t=fp(n,i,!0,t,r,s,o,a,l),t.context=Gx(null),n=t.current,i=jn(),r=Kr(n),s=xr(i,r),s.callback=e??null,qr(n,s,r),t.current.lanes=r,gl(t,r,i),ri(t,i),t}function Ou(t,e,n,i){var r=e.current,s=jn(),o=Kr(r);return n=Gx(n),e.context===null?e.context=n:e.pendingContext=n,e=xr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qr(r,e,o),t!==null&&(Hi(t,r,o,s),Dc(t,r,o)),o}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ym(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hp(t,e){Ym(t,e),(t=t.alternate)&&Ym(t,e)}function xM(){return null}var jx=typeof reportError=="function"?reportError:function(t){console.error(t)};function pp(t){this._internalRoot=t}Fu.prototype.render=pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Me(409));Ou(t,e,null,null)};Fu.prototype.unmount=pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ds(function(){Ou(null,t,null,null)}),e[yr]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kr.length&&e!==0&&e<kr[n].priority;n++);kr.splice(n,0,t),n===0&&Ev(t)}};function mp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qm(){}function _M(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=hu(o);s.call(c)}}var o=Wx(e,i,t,0,null,!1,!1,"",qm);return t._reactRootContainer=o,t[yr]=o.current,Qa(t.nodeType===8?t.parentNode:t),Ds(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=hu(l);a.call(c)}}var l=fp(t,0,!1,null,null,!1,!1,"",qm);return t._reactRootContainer=l,t[yr]=l.current,Qa(t.nodeType===8?t.parentNode:t),Ds(function(){Ou(e,l,n,i)}),l}function zu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=hu(o);a.call(l)}}Ou(e,o,t,r)}else o=_M(n,e,t,r,i);return hu(o)}yv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ta(e.pendingLanes);n!==0&&(Dh(e,n|1),ri(e,an()),!(Pt&6)&&(Go=an()+500,ls()))}break;case 13:Ds(function(){var i=Sr(t,1);if(i!==null){var r=jn();Hi(i,t,1,r)}}),hp(t,1)}};Uh=function(t){if(t.tag===13){var e=Sr(t,134217728);if(e!==null){var n=jn();Hi(e,t,134217728,n)}hp(t,134217728)}};Sv=function(t){if(t.tag===13){var e=Kr(t),n=Sr(t,e);if(n!==null){var i=jn();Hi(n,t,e,i)}hp(t,e)}};Mv=function(){return Dt};wv=function(t,e){var n=Dt;try{return Dt=t,e()}finally{Dt=n}};Cf=function(t,e,n){switch(e){case"input":if(Sf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ru(i);if(!r)throw Error(Me(90));ev(i),Sf(i,r)}}}break;case"textarea":nv(t,n);break;case"select":e=n.value,e!=null&&Ro(t,!!n.multiple,e,!1)}};cv=lp;uv=Ds;var yM={usingClientEntryPoint:!1,Events:[xl,_o,Ru,av,lv,lp]},ha={findFiberByHostInstance:Ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SM={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hv(t),t===null?null:t.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||xM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Tu=Zl.inject(SM),er=Zl}catch{}}mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yM;mi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mp(e))throw Error(Me(200));return vM(t,e,null,n)};mi.createRoot=function(t,e){if(!mp(t))throw Error(Me(299));var n=!1,i="",r=jx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=fp(t,1,!1,null,null,n,!1,i,r),t[yr]=e.current,Qa(t.nodeType===8?t.parentNode:t),new pp(e)};mi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Me(188)):(t=Object.keys(t).join(","),Error(Me(268,t)));return t=hv(e),t=t===null?null:t.stateNode,t};mi.flushSync=function(t){return Ds(t)};mi.hydrate=function(t,e,n){if(!ku(e))throw Error(Me(200));return zu(null,t,e,!0,n)};mi.hydrateRoot=function(t,e,n){if(!mp(t))throw Error(Me(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=jx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wx(e,null,t,1,n??null,r,!1,s,o),t[yr]=e.current,Qa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fu(e)};mi.render=function(t,e,n){if(!ku(e))throw Error(Me(200));return zu(null,t,e,!1,n)};mi.unmountComponentAtNode=function(t){if(!ku(t))throw Error(Me(40));return t._reactRootContainer?(Ds(function(){zu(null,null,t,!1,function(){t._reactRootContainer=null,t[yr]=null})}),!0):!1};mi.unstable_batchedUpdates=lp;mi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ku(n))throw Error(Me(200));if(t==null||t._reactInternals===void 0)throw Error(Me(38));return zu(t,e,n,!1,i)};mi.version="18.3.1-next-f1338f8080-20240426";function Xx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xx)}catch(t){console.error(t)}}Xx(),X0.exports=mi;var MM=X0.exports,$x,Zm=MM;$x=Zm.createRoot,Zm.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gp="160",wM=0,Km=1,EM=2,Yx=1,qx=2,fr=3,ss=0,Xn=1,ui=2,Qr=0,Uo=1,Jm=2,Qm=3,eg=4,TM=5,_s=100,bM=101,AM=102,tg=103,ng=104,CM=200,RM=201,PM=202,LM=203,ah=204,lh=205,NM=206,IM=207,DM=208,UM=209,OM=210,FM=211,kM=212,zM=213,BM=214,HM=0,VM=1,GM=2,pu=3,WM=4,jM=5,XM=6,$M=7,Zx=0,YM=1,qM=2,es=0,ZM=1,KM=2,JM=3,Kx=4,QM=5,ew=6,vp=300,Wo=301,jo=302,mu=303,ch=304,Bu=306,uh=1e3,di=1001,dh=1002,Gn=1003,ig=1004,wd=1005,Wn=1006,tw=1007,ll=1008,ts=1009,nw=1010,iw=1011,xp=1012,Jx=1013,Vr=1014,Gr=1015,cl=1016,Qx=1017,e_=1018,As=1020,rw=1021,zi=1023,sw=1024,ow=1025,Cs=1026,Xo=1027,aw=1028,t_=1029,lw=1030,n_=1031,i_=1033,Ed=33776,Td=33777,bd=33778,Ad=33779,rg=35840,sg=35841,og=35842,ag=35843,r_=36196,lg=37492,cg=37496,ug=37808,dg=37809,fg=37810,hg=37811,pg=37812,mg=37813,gg=37814,vg=37815,xg=37816,_g=37817,yg=37818,Sg=37819,Mg=37820,wg=37821,Cd=36492,Eg=36494,Tg=36495,cw=36283,bg=36284,Ag=36285,Cg=36286,s_=3e3,Rs=3001,uw=3200,dw=3201,o_=0,fw=1,Ei="",Kt="srgb",wr="srgb-linear",_p="display-p3",Hu="display-p3-linear",gu="linear",qt="srgb",vu="rec709",xu="p3",js=7680,Rg=519,hw=512,pw=513,mw=514,a_=515,gw=516,vw=517,xw=518,_w=519,fh=35044,Pg="300 es",hh=1035,vr=2e3,_u=2001;class Ko{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lg=1234567;const Oa=Math.PI/180,ul=180/Math.PI;function nr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[t&255]+Dn[t>>8&255]+Dn[t>>16&255]+Dn[t>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[n&63|128]+Dn[n>>8&255]+"-"+Dn[n>>16&255]+Dn[n>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function Rn(t,e,n){return Math.max(e,Math.min(n,t))}function yp(t,e){return(t%e+e)%e}function yw(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Sw(t,e,n){return t!==e?(n-t)/(e-t):0}function Fa(t,e,n){return(1-n)*t+n*e}function Mw(t,e,n,i){return Fa(t,e,1-Math.exp(-n*i))}function ww(t,e=1){return e-Math.abs(yp(t,e*2)-e)}function Ew(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Tw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function bw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Aw(t,e){return t+Math.random()*(e-t)}function Cw(t){return t*(.5-Math.random())}function Rw(t){t!==void 0&&(Lg=t);let e=Lg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pw(t){return t*Oa}function Lw(t){return t*ul}function ph(t){return(t&t-1)===0&&t!==0}function Nw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function yu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Iw(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*v,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*v,a*c);break;case"ZYZ":t.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ji(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ot(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const un={DEG2RAD:Oa,RAD2DEG:ul,generateUUID:nr,clamp:Rn,euclideanModulo:yp,mapLinear:yw,inverseLerp:Sw,lerp:Fa,damp:Mw,pingpong:ww,smoothstep:Ew,smootherstep:Tw,randInt:bw,randFloat:Aw,randFloatSpread:Cw,seededRandom:Rw,degToRad:Pw,radToDeg:Lw,isPowerOfTwo:ph,ceilPowerOfTwo:Nw,floorPowerOfTwo:yu,setQuaternionFromProperEuler:Iw,normalize:Ot,denormalize:Ji};class Se{constructor(e=0,n=0){Se.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(e,n,i,r,s,o,a,l,c){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],S=r[0],g=r[3],d=r[6],m=r[1],x=r[4],y=r[7],L=r[2],A=r[5],P=r[8];return s[0]=o*S+a*m+l*L,s[3]=o*g+a*x+l*A,s[6]=o*d+a*y+l*P,s[1]=c*S+u*m+f*L,s[4]=c*g+u*x+f*A,s[7]=c*d+u*y+f*P,s[2]=h*S+p*m+v*L,s[5]=h*g+p*x+v*A,s[8]=h*d+p*y+v*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=n*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(u*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Rd.makeScale(e,n)),this}rotate(e){return this.premultiply(Rd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Rd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rd=new Tt;function l_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Dw(){const t=dl("canvas");return t.style.display="block",t}const Ng={};function ka(t){t in Ng||(Ng[t]=!0,console.warn(t))}const Ig=new Tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dg=new Tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Kl={[wr]:{transfer:gu,primaries:vu,toReference:t=>t,fromReference:t=>t},[Kt]:{transfer:qt,primaries:vu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Hu]:{transfer:gu,primaries:xu,toReference:t=>t.applyMatrix3(Dg),fromReference:t=>t.applyMatrix3(Ig)},[_p]:{transfer:qt,primaries:xu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Dg),fromReference:t=>t.applyMatrix3(Ig).convertLinearToSRGB()}},Uw=new Set([wr,Hu]),Ft={enabled:!0,_workingColorSpace:wr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Uw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Kl[e].toReference,r=Kl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Kl[t].primaries},getTransfer:function(t){return t===Ei?gu:Kl[t].transfer}};function Oo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Pd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xs;class c_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xs===void 0&&(Xs=dl("canvas")),Xs.width=e.width,Xs.height=e.height;const i=Xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Oo(n[i]/255)*255):n[i]=Oo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ow=0;class u_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ow++}),this.uuid=nr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ld(r[o].image)):s.push(Ld(r[o]))}else s=Ld(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ld(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?c_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fw=0;class $n extends Ko{constructor(e=$n.DEFAULT_IMAGE,n=$n.DEFAULT_MAPPING,i=di,r=di,s=Wn,o=ll,a=zi,l=ts,c=$n.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=nr(),this.name="",this.source=new u_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ka("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Rs?Kt:Ei),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uh:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uh:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ka("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Kt?Rs:s_}set encoding(e){ka("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Rs?Kt:Ei}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=vp;$n.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,n=0,i=0,r=1){Qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],S=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,L=(d+1)/2,A=(u+h)/4,P=(f+S)/4,F=(v+g)/4;return x>y&&x>L?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=P/i):y>L?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=F/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=P/s,r=F/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(f-S)/m,this.z=(h-u)/m,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kw extends Ko{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Qt(0,0,e,n),this.scissorTest=!1,this.viewport=new Qt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ka("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Rs?Kt:Ei),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new $n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new u_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Us extends kw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class d_ extends $n{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zw extends $n{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=S;return}if(f!==S||l!==h||c!==p||u!==v){let g=1-a;const d=l*h+c*p+u*v+f*S,m=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const L=Math.sqrt(x),A=Math.atan2(L,d*m);g=Math.sin(g*A)/L,a=Math.sin(a*A)/L}const y=a*m;if(l=l*g+h*y,c=c*g+p*y,u=u*g+v*y,f=f*g+S*y,g===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*p-c*h,e[n+1]=l*v+u*h+c*f-a*p,e[n+2]=c*v+u*p+a*h-l*f,e[n+3]=u*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ug.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ug.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new O,Ug=new yl;class Sl{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ii):Ii.fromBufferAttribute(s,o),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jl.copy(i.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Ql.subVectors(this.max,pa),$s.subVectors(e.a,pa),Ys.subVectors(e.b,pa),qs.subVectors(e.c,pa),Pr.subVectors(Ys,$s),Lr.subVectors(qs,Ys),fs.subVectors($s,qs);let n=[0,-Pr.z,Pr.y,0,-Lr.z,Lr.y,0,-fs.z,fs.y,Pr.z,0,-Pr.x,Lr.z,0,-Lr.x,fs.z,0,-fs.x,-Pr.y,Pr.x,0,-Lr.y,Lr.x,0,-fs.y,fs.x,0];return!Id(n,$s,Ys,qs,Ql)||(n=[1,0,0,0,1,0,0,0,1],!Id(n,$s,Ys,qs,Ql))?!1:(ec.crossVectors(Pr,Lr),n=[ec.x,ec.y,ec.z],Id(n,$s,Ys,qs,Ql))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ar=[new O,new O,new O,new O,new O,new O,new O,new O],Ii=new O,Jl=new Sl,$s=new O,Ys=new O,qs=new O,Pr=new O,Lr=new O,fs=new O,pa=new O,Ql=new O,ec=new O,hs=new O;function Id(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){hs.fromArray(t,s);const a=r.x*Math.abs(hs.x)+r.y*Math.abs(hs.y)+r.z*Math.abs(hs.z),l=e.dot(hs),c=n.dot(hs),u=i.dot(hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Bw=new Sl,ma=new O,Dd=new O;class Vu{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Bw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const n=ma.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(Dd)),this.expandByPoint(ma.copy(e.center).sub(Dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const lr=new O,Ud=new O,tc=new O,Nr=new O,Od=new O,nc=new O,Fd=new O;class Sp{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=lr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,n),lr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ud.copy(e).add(n).multiplyScalar(.5),tc.copy(n).sub(e).normalize(),Nr.copy(this.origin).sub(Ud);const s=e.distanceTo(n)*.5,o=-this.direction.dot(tc),a=Nr.dot(this.direction),l=-Nr.dot(tc),c=Nr.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const S=1/u;f*=S,h*=S,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ud).addScaledVector(tc,h),p}intersectSphere(e,n){lr.subVectors(e.center,this.origin);const i=lr.dot(this.direction),r=lr.dot(lr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,n,i,r,s){Od.subVectors(n,e),nc.subVectors(i,e),Fd.crossVectors(Od,nc);let o=this.direction.dot(Fd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nr.subVectors(this.origin,e);const l=a*this.direction.dot(nc.crossVectors(Nr,nc));if(l<0)return null;const c=a*this.direction.dot(Od.cross(Nr));if(c<0||l+c>o)return null;const u=-a*Nr.dot(Fd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,v,S,g){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,v,S,g)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,v,S,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Zs.setFromMatrixColumn(e,0).length(),s=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,v=a*u,S=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=h-S*c,n[9]=-a*l,n[2]=S-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,S=c*f;n[0]=h+S*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=S+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,S=c*f;n[0]=h-S*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=S-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=a*u,S=a*f;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+S,n[1]=l*f,n[5]=S*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,S=a*c;n[0]=l*u,n[4]=S-h*f,n[8]=v*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+v,n[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,S=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+S,n[5]=o*u,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*u,n[10]=S*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hw,e,Vw)}lookAt(e,n,i){const r=this.elements;return ai.subVectors(e,n),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Ir.crossVectors(i,ai),Ir.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Ir.crossVectors(i,ai)),Ir.normalize(),ic.crossVectors(ai,Ir),r[0]=Ir.x,r[4]=ic.x,r[8]=ai.x,r[1]=Ir.y,r[5]=ic.y,r[9]=ai.y,r[2]=Ir.z,r[6]=ic.z,r[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],S=i[6],g=i[10],d=i[14],m=i[3],x=i[7],y=i[11],L=i[15],A=r[0],P=r[4],F=r[8],E=r[12],T=r[1],V=r[5],$=r[9],ie=r[13],I=r[2],W=r[6],j=r[10],ne=r[14],B=r[3],Y=r[7],q=r[11],le=r[15];return s[0]=o*A+a*T+l*I+c*B,s[4]=o*P+a*V+l*W+c*Y,s[8]=o*F+a*$+l*j+c*q,s[12]=o*E+a*ie+l*ne+c*le,s[1]=u*A+f*T+h*I+p*B,s[5]=u*P+f*V+h*W+p*Y,s[9]=u*F+f*$+h*j+p*q,s[13]=u*E+f*ie+h*ne+p*le,s[2]=v*A+S*T+g*I+d*B,s[6]=v*P+S*V+g*W+d*Y,s[10]=v*F+S*$+g*j+d*q,s[14]=v*E+S*ie+g*ne+d*le,s[3]=m*A+x*T+y*I+L*B,s[7]=m*P+x*V+y*W+L*Y,s[11]=m*F+x*$+y*j+L*q,s[15]=m*E+x*ie+y*ne+L*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],S=e[7],g=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+S*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],S=e[13],g=e[14],d=e[15],m=f*g*c-S*h*c+S*l*p-a*g*p-f*l*d+a*h*d,x=v*h*c-u*g*c-v*l*p+o*g*p+u*l*d-o*h*d,y=u*S*c-v*f*c+v*a*p-o*S*p-u*a*d+o*f*d,L=v*f*l-u*S*l-v*a*h+o*S*h+u*a*g-o*f*g,A=n*m+i*x+r*y+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=m*P,e[1]=(S*h*s-f*g*s-S*r*p+i*g*p+f*r*d-i*h*d)*P,e[2]=(a*g*s-S*l*s+S*r*c-i*g*c-a*r*d+i*l*d)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*P,e[4]=x*P,e[5]=(u*g*s-v*h*s+v*r*p-n*g*p-u*r*d+n*h*d)*P,e[6]=(v*l*s-o*g*s-v*r*c+n*g*c+o*r*d-n*l*d)*P,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*P,e[8]=y*P,e[9]=(v*f*s-u*S*s-v*i*p+n*S*p+u*i*d-n*f*d)*P,e[10]=(o*S*s-v*a*s+v*i*c-n*S*c-o*i*d+n*a*d)*P,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*P,e[12]=L*P,e[13]=(u*S*r-v*f*r+v*i*h-n*S*h-u*i*g+n*f*g)*P,e[14]=(v*a*r-o*S*r-v*i*l+n*S*l+o*i*g-n*a*g)*P,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,v=s*f,S=o*u,g=o*f,d=a*f,m=l*c,x=l*u,y=l*f,L=i.x,A=i.y,P=i.z;return r[0]=(1-(S+d))*L,r[1]=(p+y)*L,r[2]=(v-x)*L,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+d))*A,r[6]=(g+m)*A,r[7]=0,r[8]=(v+x)*P,r[9]=(g-m)*P,r[10]=(1-(h+S))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Zs.set(r[0],r[1],r[2]).length();const o=Zs.set(r[4],r[5],r[6]).length(),a=Zs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Di.copy(this);const c=1/s,u=1/o,f=1/a;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=u,Di.elements[5]*=u,Di.elements[6]*=u,Di.elements[8]*=f,Di.elements[9]*=f,Di.elements[10]*=f,n.setFromRotationMatrix(Di),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=vr){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===vr)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===_u)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vr){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let v,S;if(a===vr)v=(o+s)*f,S=-2*f;else if(a===_u)v=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Zs=new O,Di=new rn,Hw=new O(0,0,0),Vw=new O(1,1,1),Ir=new O,ic=new O,ai=new O,Og=new rn,Fg=new yl;class Ml{constructor(e=0,n=0,i=0,r=Ml.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Og,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fg.setFromEuler(this),this.setFromQuaternion(Fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ml.DEFAULT_ORDER="XYZ";let Mp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gw=0;const kg=new O,Ks=new yl,cr=new rn,rc=new O,ga=new O,Ww=new O,jw=new yl,zg=new O(1,0,0),Bg=new O(0,1,0),Hg=new O(0,0,1),Xw={type:"added"},$w={type:"removed"};class Tn extends Ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gw++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new O,n=new Ml,i=new yl,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rn},normalMatrix:{value:new Tt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(zg,e)}rotateY(e){return this.rotateOnAxis(Bg,e)}rotateZ(e){return this.rotateOnAxis(Hg,e)}translateOnAxis(e,n){return kg.copy(e).applyQuaternion(this.quaternion),this.position.add(kg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zg,e)}translateY(e){return this.translateOnAxis(Bg,e)}translateZ(e){return this.translateOnAxis(Hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?rc.copy(e):rc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(ga,rc,this.up):cr.lookAt(rc,ga,this.up),this.quaternion.setFromRotationMatrix(cr),r&&(cr.extractRotation(r.matrixWorld),Ks.setFromRotationMatrix(cr),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($w)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,Ww),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,jw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new O(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new O,ur=new O,kd=new O,dr=new O,Js=new O,Qs=new O,Vg=new O,zd=new O,Bd=new O,Hd=new O;let sc=!1;class wi{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ui.subVectors(e,n),r.cross(Ui);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ui.subVectors(r,n),ur.subVectors(i,n),kd.subVectors(e,n);const o=Ui.dot(Ui),a=Ui.dot(ur),l=Ui.dot(kd),c=ur.dot(ur),u=ur.dot(kd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getUV(e,n,i,r,s,o,a,l){return sc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sc=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,dr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,dr.x),l.addScaledVector(o,dr.y),l.addScaledVector(a,dr.z),l)}static isFrontFacing(e,n,i,r){return Ui.subVectors(i,n),ur.subVectors(e,n),Ui.cross(ur).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Ui.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return sc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sc=!0),wi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return wi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Js.subVectors(r,i),Qs.subVectors(s,i),zd.subVectors(e,i);const l=Js.dot(zd),c=Qs.dot(zd);if(l<=0&&c<=0)return n.copy(i);Bd.subVectors(e,r);const u=Js.dot(Bd),f=Qs.dot(Bd);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Js,o);Hd.subVectors(e,s);const p=Js.dot(Hd),v=Qs.dot(Hd);if(v>=0&&p<=v)return n.copy(s);const S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Qs,a);const g=u*v-p*f;if(g<=0&&f-u>=0&&p-v>=0)return Vg.subVectors(s,r),a=(f-u)/(f-u+(p-v)),n.copy(r).addScaledVector(Vg,a);const d=1/(g+S+h);return o=S*d,a=h*d,n.copy(i).addScaledVector(Js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const f_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},oc={h:0,s:0,l:0};function Vd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class wt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ft.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ft.workingColorSpace){if(e=yp(e,1),n=Rn(n,0,1),i=Rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Vd(o,s,e+1/3),this.g=Vd(o,s,e),this.b=Vd(o,s,e-1/3)}return Ft.toWorkingColorSpace(this,r),this}setStyle(e,n=Kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kt){const i=f_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}copyLinearToSRGB(e){return this.r=Pd(e.r),this.g=Pd(e.g),this.b=Pd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Ft.fromWorkingColorSpace(Un.copy(this),e),Math.round(Rn(Un.r*255,0,255))*65536+Math.round(Rn(Un.g*255,0,255))*256+Math.round(Rn(Un.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Un.copy(this),n);const i=Un.r,r=Un.g,s=Un.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Un.copy(this),n),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=Kt){Ft.fromWorkingColorSpace(Un.copy(this),e);const n=Un.r,i=Un.g,r=Un.b;return e!==Kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+n,Dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Dr),e.getHSL(oc);const i=Fa(Dr.h,oc.h,n),r=Fa(Dr.s,oc.s,n),s=Fa(Dr.l,oc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new wt;wt.NAMES=f_;let Yw=0;class Hs extends Ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yw++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Uo,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=lh,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=pu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Uo&&(i.blending=this.blending),this.side!==ss&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ah&&(i.blendSrc=this.blendSrc),this.blendDst!==lh&&(i.blendDst=this.blendDst),this.blendEquation!==_s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qi extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new O,ac=new Se;class Ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ac.fromBufferAttribute(this,n),ac.applyMatrix3(e),this.setXY(n,ac.x,ac.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ji(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ji(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ji(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ji(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ji(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),e}}class h_ extends Ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class p_ extends Ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kt extends Ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let qw=0;const _i=new rn,Gd=new Tn,eo=new O,li=new Sl,va=new Sl,Mn=new O;class xn extends Ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qw++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l_(e)?p_:h_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,n,i){return _i.makeTranslation(e,n,i),this.applyMatrix4(_i),this}scale(e,n,i){return _i.makeScale(e,n,i),this.applyMatrix4(_i),this}lookAt(e){return Gd.lookAt(e),Gd.updateMatrix(),this.applyMatrix4(Gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];li.setFromBufferAttribute(s),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];va.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(li.min,va.min),li.expandByPoint(Mn),Mn.addVectors(li.max,va.max),li.expandByPoint(Mn)):(li.expandByPoint(va.min),li.expandByPoint(va.max))}li.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mn.fromBufferAttribute(a,c),l&&(eo.fromBufferAttribute(e,c),Mn.add(eo)),r=Math.max(r,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new O,u[T]=new O;const f=new O,h=new O,p=new O,v=new Se,S=new Se,g=new Se,d=new O,m=new O;function x(T,V,$){f.fromArray(r,T*3),h.fromArray(r,V*3),p.fromArray(r,$*3),v.fromArray(o,T*2),S.fromArray(o,V*2),g.fromArray(o,$*2),h.sub(f),p.sub(f),S.sub(v),g.sub(v);const ie=1/(S.x*g.y-g.x*S.y);isFinite(ie)&&(d.copy(h).multiplyScalar(g.y).addScaledVector(p,-S.y).multiplyScalar(ie),m.copy(p).multiplyScalar(S.x).addScaledVector(h,-g.x).multiplyScalar(ie),c[T].add(d),c[V].add(d),c[$].add(d),u[T].add(m),u[V].add(m),u[$].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,V=y.length;T<V;++T){const $=y[T],ie=$.start,I=$.count;for(let W=ie,j=ie+I;W<j;W+=3)x(i[W+0],i[W+1],i[W+2])}const L=new O,A=new O,P=new O,F=new O;function E(T){P.fromArray(s,T*3),F.copy(P);const V=c[T];L.copy(V),L.sub(P.multiplyScalar(P.dot(V))).normalize(),A.crossVectors(F,V);const ie=A.dot(u[T])<0?-1:1;l[T*4]=L.x,l[T*4+1]=L.y,l[T*4+2]=L.z,l[T*4+3]=ie}for(let T=0,V=y.length;T<V;++T){const $=y[T],ie=$.start,I=$.count;for(let W=ie,j=ie+I;W<j;W+=3)E(i[W+0]),E(i[W+1]),E(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),S=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Mn.fromBufferAttribute(e,n),Mn.normalize(),e.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new Ai(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gg=new rn,ps=new Sp,lc=new Vu,Wg=new O,to=new O,no=new O,io=new O,Wd=new O,cc=new O,uc=new Se,dc=new Se,fc=new Se,jg=new O,Xg=new O,$g=new O,hc=new O,pc=new O;class Ze extends Tn{constructor(e=new xn,n=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){cc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Wd.fromBufferAttribute(f,e),o?cc.addScaledVector(Wd,u):cc.addScaledVector(Wd.sub(n),u))}n.add(cc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(s),ps.copy(e.ray).recast(e.near),!(lc.containsPoint(ps.origin)===!1&&(ps.intersectSphere(lc,Wg)===null||ps.origin.distanceToSquared(Wg)>(e.far-e.near)**2))&&(Gg.copy(s).invert(),ps.copy(e.ray).applyMatrix4(Gg),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ps)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const g=h[v],d=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,L=x;y<L;y+=3){const A=a.getX(y),P=a.getX(y+1),F=a.getX(y+2);r=mc(this,d,e,i,c,u,f,A,P,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let g=v,d=S;g<d;g+=3){const m=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);r=mc(this,o,e,i,c,u,f,m,x,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const g=h[v],d=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,L=x;y<L;y+=3){const A=y,P=y+1,F=y+2;r=mc(this,d,e,i,c,u,f,A,P,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=v,d=S;g<d;g+=3){const m=g,x=g+1,y=g+2;r=mc(this,o,e,i,c,u,f,m,x,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Zw(t,e,n,i,r,s,o,a){let l;if(e.side===Xn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ss,a),l===null)return null;pc.copy(a),pc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(pc);return c<n.near||c>n.far?null:{distance:c,point:pc.clone(),object:t}}function mc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,to),t.getVertexPosition(l,no),t.getVertexPosition(c,io);const u=Zw(t,e,n,i,to,no,io,hc);if(u){r&&(uc.fromBufferAttribute(r,a),dc.fromBufferAttribute(r,l),fc.fromBufferAttribute(r,c),u.uv=wi.getInterpolation(hc,to,no,io,uc,dc,fc,new Se)),s&&(uc.fromBufferAttribute(s,a),dc.fromBufferAttribute(s,l),fc.fromBufferAttribute(s,c),u.uv1=wi.getInterpolation(hc,to,no,io,uc,dc,fc,new Se),u.uv2=u.uv1),o&&(jg.fromBufferAttribute(o,a),Xg.fromBufferAttribute(o,l),$g.fromBufferAttribute(o,c),u.normal=wi.getInterpolation(hc,to,no,io,jg,Xg,$g,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};wi.getNormal(to,no,io,f.normal),u.face=f}return u}class dn extends xn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(f,2));function v(S,g,d,m,x,y,L,A,P,F,E){const T=y/P,V=L/F,$=y/2,ie=L/2,I=A/2,W=P+1,j=F+1;let ne=0,B=0;const Y=new O;for(let q=0;q<j;q++){const le=q*V-ie;for(let he=0;he<W;he++){const ee=he*T-$;Y[S]=ee*m,Y[g]=le*x,Y[d]=I,c.push(Y.x,Y.y,Y.z),Y[S]=0,Y[g]=0,Y[d]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(he/P),f.push(1-q/F),ne+=1}}for(let q=0;q<F;q++)for(let le=0;le<P;le++){const he=h+le+W*q,ee=h+le+W*(q+1),ue=h+(le+1)+W*(q+1),Le=h+(le+1)+W*q;l.push(he,ee,Le),l.push(ee,ue,Le),B+=6}a.addGroup(p,B,E),p+=B,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $o(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Hn(t){const e={};for(let n=0;n<t.length;n++){const i=$o(t[n]);for(const r in i)e[r]=i[r]}return e}function Kw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function m_(t){return t.getRenderTarget()===null?t.outputColorSpace:Ft.workingColorSpace}const Jw={clone:$o,merge:Hn};var Qw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Os extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qw,this.fragmentShader=e1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$o(e.uniforms),this.uniformsGroups=Kw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let g_=class extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=vr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class ei extends g_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ul*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ro=-90,so=1;class t1 extends Tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ei(ro,so,e,n);r.layers=this.layers,this.add(r);const s=new ei(ro,so,e,n);s.layers=this.layers,this.add(s);const o=new ei(ro,so,e,n);o.layers=this.layers,this.add(o);const a=new ei(ro,so,e,n);a.layers=this.layers,this.add(a);const l=new ei(ro,so,e,n);l.layers=this.layers,this.add(l);const c=new ei(ro,so,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===vr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_u)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class v_ extends $n{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Wo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class n1 extends Us{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ka("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Rs?Kt:Ei),this.texture=new v_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new dn(5,5,5),s=new Os({name:"CubemapFromEquirect",uniforms:$o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:Qr});s.uniforms.tEquirect.value=n;const o=new Ze(r,s),a=n.minFilter;return n.minFilter===ll&&(n.minFilter=Wn),new t1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const jd=new O,i1=new O,r1=new Tt;class Fr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=jd.subVectors(i,n).cross(i1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(jd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||r1.getNormalMatrix(e),r=this.coplanarPoint(jd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Vu,gc=new O;class wp{constructor(e=new Fr,n=new Fr,i=new Fr,r=new Fr,s=new Fr,o=new Fr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],S=r[10],g=r[11],d=r[12],m=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,g-p,y-d).normalize(),i[1].setComponents(l+s,h+c,g+p,y+d).normalize(),i[2].setComponents(l+o,h+u,g+v,y+m).normalize(),i[3].setComponents(l-o,h-u,g-v,y-m).normalize(),i[4].setComponents(l-a,h-f,g-S,y-x).normalize(),n===vr)i[5].setComponents(l+a,h+f,g+S,y+x).normalize();else if(n===_u)i[5].setComponents(a,f,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(gc.x=r.normal.x>0?e.max.x:e.min.x,gc.y=r.normal.y>0?e.max.y:e.min.y,gc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function x_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function s1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=f.byteLength,v=t.createBuffer();t.bindBuffer(u,v),t.bufferData(u,f,h),c.onUploadCallback();let S;if(f instanceof Float32Array)S=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)S=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)S=t.SHORT;else if(f instanceof Uint32Array)S=t.UNSIGNED_INT;else if(f instanceof Int32Array)S=t.INT;else if(f instanceof Int8Array)S=t.BYTE;else if(f instanceof Uint8Array)S=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)S=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:S,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,f){const h=u.array,p=u._updateRange,v=u.updateRanges;if(t.bindBuffer(f,c),p.count===-1&&v.length===0&&t.bufferSubData(f,0,h),v.length!==0){for(let S=0,g=v.length;S<g;S++){const d=v[S];n?t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class yi extends xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],v=[],S=[],g=[];for(let d=0;d<u;d++){const m=d*h-o;for(let x=0;x<c;x++){const y=x*f-s;v.push(y,-m,0),S.push(0,0,1),g.push(x/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<a;m++){const x=m+c*d,y=m+c*(d+1),L=m+1+c*(d+1),A=m+1+c*d;p.push(x,y,A),p.push(y,L,A)}this.setIndex(p),this.setAttribute("position",new kt(v,3)),this.setAttribute("normal",new kt(S,3)),this.setAttribute("uv",new kt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.widthSegments,e.heightSegments)}}var o1=`#ifdef USE_ALPHAHASH
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
#endif`,f1=`#ifdef USE_AOMAP
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
#endif`,h1=`#ifdef USE_AOMAP
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
#endif`,v1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x1=`float G_BlinnPhong_Implicit( ) {
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
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hE=`#ifdef USE_MAP
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
#endif`,vE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xE=`#ifdef USE_METALNESSMAP
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
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
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
#endif`,eT=`#ifdef USE_TRANSMISSION
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oT=`uniform sampler2D t2D;
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`#include <common>
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
}`,fT=`#if DEPTH_PACKING == 3200
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
}`,hT=`#define DISTANCE
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
}`,pT=`#define DISTANCE
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
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`uniform float scale;
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
}`,xT=`uniform vec3 diffuse;
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
}`,_T=`#include <common>
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
}`,yT=`uniform vec3 diffuse;
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
}`,ST=`#define LAMBERT
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
}`,MT=`#define LAMBERT
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
}`,wT=`#define MATCAP
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
}`,ET=`#define MATCAP
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
}`,TT=`#define NORMAL
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
}`,bT=`#define NORMAL
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
}`,AT=`#define PHONG
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
}`,CT=`#define PHONG
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
}`,RT=`#define STANDARD
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
}`,PT=`#define STANDARD
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
}`,LT=`#define TOON
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
}`,NT=`#define TOON
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
}`,IT=`uniform float size;
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
}`,DT=`uniform vec3 diffuse;
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
}`,UT=`#include <common>
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
}`,OT=`uniform vec3 color;
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
}`,FT=`uniform float rotation;
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
}`,kT=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:o1,alphahash_pars_fragment:a1,alphamap_fragment:l1,alphamap_pars_fragment:c1,alphatest_fragment:u1,alphatest_pars_fragment:d1,aomap_fragment:f1,aomap_pars_fragment:h1,batching_pars_vertex:p1,batching_vertex:m1,begin_vertex:g1,beginnormal_vertex:v1,bsdfs:x1,iridescence_fragment:_1,bumpmap_pars_fragment:y1,clipping_planes_fragment:S1,clipping_planes_pars_fragment:M1,clipping_planes_pars_vertex:w1,clipping_planes_vertex:E1,color_fragment:T1,color_pars_fragment:b1,color_pars_vertex:A1,color_vertex:C1,common:R1,cube_uv_reflection_fragment:P1,defaultnormal_vertex:L1,displacementmap_pars_vertex:N1,displacementmap_vertex:I1,emissivemap_fragment:D1,emissivemap_pars_fragment:U1,colorspace_fragment:O1,colorspace_pars_fragment:F1,envmap_fragment:k1,envmap_common_pars_fragment:z1,envmap_pars_fragment:B1,envmap_pars_vertex:H1,envmap_physical_pars_fragment:Q1,envmap_vertex:V1,fog_vertex:G1,fog_pars_vertex:W1,fog_fragment:j1,fog_pars_fragment:X1,gradientmap_pars_fragment:$1,lightmap_fragment:Y1,lightmap_pars_fragment:q1,lights_lambert_fragment:Z1,lights_lambert_pars_fragment:K1,lights_pars_begin:J1,lights_toon_fragment:eE,lights_toon_pars_fragment:tE,lights_phong_fragment:nE,lights_phong_pars_fragment:iE,lights_physical_fragment:rE,lights_physical_pars_fragment:sE,lights_fragment_begin:oE,lights_fragment_maps:aE,lights_fragment_end:lE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:dE,logdepthbuf_vertex:fE,map_fragment:hE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:gE,metalnessmap_fragment:vE,metalnessmap_pars_fragment:xE,morphcolor_vertex:_E,morphnormal_vertex:yE,morphtarget_pars_vertex:SE,morphtarget_vertex:ME,normal_fragment_begin:wE,normal_fragment_maps:EE,normal_pars_fragment:TE,normal_pars_vertex:bE,normal_vertex:AE,normalmap_pars_fragment:CE,clearcoat_normal_fragment_begin:RE,clearcoat_normal_fragment_maps:PE,clearcoat_pars_fragment:LE,iridescence_pars_fragment:NE,opaque_fragment:IE,packing:DE,premultiplied_alpha_fragment:UE,project_vertex:OE,dithering_fragment:FE,dithering_pars_fragment:kE,roughnessmap_fragment:zE,roughnessmap_pars_fragment:BE,shadowmap_pars_fragment:HE,shadowmap_pars_vertex:VE,shadowmap_vertex:GE,shadowmask_pars_fragment:WE,skinbase_vertex:jE,skinning_pars_vertex:XE,skinning_vertex:$E,skinnormal_vertex:YE,specularmap_fragment:qE,specularmap_pars_fragment:ZE,tonemapping_fragment:KE,tonemapping_pars_fragment:JE,transmission_fragment:QE,transmission_pars_fragment:eT,uv_pars_fragment:tT,uv_pars_vertex:nT,uv_vertex:iT,worldpos_vertex:rT,background_vert:sT,background_frag:oT,backgroundCube_vert:aT,backgroundCube_frag:lT,cube_vert:cT,cube_frag:uT,depth_vert:dT,depth_frag:fT,distanceRGBA_vert:hT,distanceRGBA_frag:pT,equirect_vert:mT,equirect_frag:gT,linedashed_vert:vT,linedashed_frag:xT,meshbasic_vert:_T,meshbasic_frag:yT,meshlambert_vert:ST,meshlambert_frag:MT,meshmatcap_vert:wT,meshmatcap_frag:ET,meshnormal_vert:TT,meshnormal_frag:bT,meshphong_vert:AT,meshphong_frag:CT,meshphysical_vert:RT,meshphysical_frag:PT,meshtoon_vert:LT,meshtoon_frag:NT,points_vert:IT,points_frag:DT,shadow_vert:UT,shadow_frag:OT,sprite_vert:FT,sprite_frag:kT},Re={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},Zi={basic:{uniforms:Hn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Hn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new wt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Hn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Hn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Hn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new wt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Hn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Hn([Re.points,Re.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Hn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Hn([Re.common,Re.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Hn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Hn([Re.sprite,Re.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:Hn([Re.common,Re.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:Hn([Re.lights,Re.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Zi.physical={uniforms:Hn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const vc={r:0,b:0,g:0};function zT(t,e,n,i,r,s,o){const a=new wt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(g,d){let m=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?n:e).get(x)),x===null?S(a,l):x&&x.isColor&&(S(x,1),m=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Bu)?(u===void 0&&(u=new Ze(new dn(1,1,1),new Os({name:"BackgroundCubeMaterial",uniforms:$o(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ft.getTransfer(x.colorSpace)!==qt,(f!==x||h!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ze(new yi(2,2),new Os({name:"BackgroundMaterial",uniforms:$o(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ft.getTransfer(x.colorSpace)!==qt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function S(g,d){g.getRGB(vc,m_(t)),i.buffers.color.setClear(vc.r,vc.g,vc.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),l=d,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,S(a,l)},render:v}}function BT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function f(I,W,j,ne,B){let Y=!1;if(o){const q=S(ne,j,W);c!==q&&(c=q,p(c.object)),Y=d(I,ne,j,B),Y&&m(I,ne,j,B)}else{const q=W.wireframe===!0;(c.geometry!==ne.id||c.program!==j.id||c.wireframe!==q)&&(c.geometry=ne.id,c.program=j.id,c.wireframe=q,Y=!0)}B!==null&&n.update(B,t.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,F(I,W,j,ne),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(B).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function v(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function S(I,W,j){const ne=j.wireframe===!0;let B=a[I.id];B===void 0&&(B={},a[I.id]=B);let Y=B[W.id];Y===void 0&&(Y={},B[W.id]=Y);let q=Y[ne];return q===void 0&&(q=g(h()),Y[ne]=q),q}function g(I){const W=[],j=[],ne=[];for(let B=0;B<r;B++)W[B]=0,j[B]=0,ne[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:j,attributeDivisors:ne,object:I,attributes:{},index:null}}function d(I,W,j,ne){const B=c.attributes,Y=W.attributes;let q=0;const le=j.getAttributes();for(const he in le)if(le[he].location>=0){const ue=B[he];let Le=Y[he];if(Le===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(Le=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(Le=I.instanceColor)),ue===void 0||ue.attribute!==Le||Le&&ue.data!==Le.data)return!0;q++}return c.attributesNum!==q||c.index!==ne}function m(I,W,j,ne){const B={},Y=W.attributes;let q=0;const le=j.getAttributes();for(const he in le)if(le[he].location>=0){let ue=Y[he];ue===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor));const Le={};Le.attribute=ue,ue&&ue.data&&(Le.data=ue.data),B[he]=Le,q++}c.attributes=B,c.attributesNum=q,c.index=ne}function x(){const I=c.newAttributes;for(let W=0,j=I.length;W<j;W++)I[W]=0}function y(I){L(I,0)}function L(I,W){const j=c.newAttributes,ne=c.enabledAttributes,B=c.attributeDivisors;j[I]=1,ne[I]===0&&(t.enableVertexAttribArray(I),ne[I]=1),B[I]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),B[I]=W)}function A(){const I=c.newAttributes,W=c.enabledAttributes;for(let j=0,ne=W.length;j<ne;j++)W[j]!==I[j]&&(t.disableVertexAttribArray(j),W[j]=0)}function P(I,W,j,ne,B,Y,q){q===!0?t.vertexAttribIPointer(I,W,j,B,Y):t.vertexAttribPointer(I,W,j,ne,B,Y)}function F(I,W,j,ne){if(i.isWebGL2===!1&&(I.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const B=ne.attributes,Y=j.getAttributes(),q=W.defaultAttributeValues;for(const le in Y){const he=Y[le];if(he.location>=0){let ee=B[le];if(ee===void 0&&(le==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),le==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){const ue=ee.normalized,Le=ee.itemSize,He=n.get(ee);if(He===void 0)continue;const Ue=He.buffer,ot=He.type,nt=He.bytesPerElement,$e=i.isWebGL2===!0&&(ot===t.INT||ot===t.UNSIGNED_INT||ee.gpuType===Jx);if(ee.isInterleavedBufferAttribute){const Ve=ee.data,D=Ve.stride,se=ee.offset;if(Ve.isInstancedInterleavedBuffer){for(let ae=0;ae<he.locationSize;ae++)L(he.location+ae,Ve.meshPerAttribute);I.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let ae=0;ae<he.locationSize;ae++)y(he.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let ae=0;ae<he.locationSize;ae++)P(he.location+ae,Le/he.locationSize,ot,ue,D*nt,(se+Le/he.locationSize*ae)*nt,$e)}else{if(ee.isInstancedBufferAttribute){for(let Ve=0;Ve<he.locationSize;Ve++)L(he.location+Ve,ee.meshPerAttribute);I.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ve=0;Ve<he.locationSize;Ve++)y(he.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Ve=0;Ve<he.locationSize;Ve++)P(he.location+Ve,Le/he.locationSize,ot,ue,Le*nt,Le/he.locationSize*Ve*nt,$e)}}else if(q!==void 0){const ue=q[le];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(he.location,ue);break;case 3:t.vertexAttrib3fv(he.location,ue);break;case 4:t.vertexAttrib4fv(he.location,ue);break;default:t.vertexAttrib1fv(he.location,ue)}}}}A()}function E(){$();for(const I in a){const W=a[I];for(const j in W){const ne=W[j];for(const B in ne)v(ne[B].object),delete ne[B];delete W[j]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;const W=a[I.id];for(const j in W){const ne=W[j];for(const B in ne)v(ne[B].object),delete ne[B];delete W[j]}delete a[I.id]}function V(I){for(const W in a){const j=a[W];if(j[I.id]===void 0)continue;const ne=j[I.id];for(const B in ne)v(ne[B].object),delete ne[B];delete j[I.id]}}function $(){ie(),u=!0,c!==l&&(c=l,p(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:ie,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:y,disableUnusedAttributes:A}}function HT(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,h){if(h===0)return;let p,v;if(r)p=t,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,u,f,h),n.update(f,s,h)}function c(u,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<h;v++)this.render(u[v],f[v]);else{p.multiDrawArraysWEBGL(s,u,0,f,0,h);let v=0;for(let S=0;S<h;S++)v+=f[S];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function VT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),S=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,y=o||e.has("OES_texture_float"),L=x&&y,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:S,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:m,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:L,maxSamples:A}}function GT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Fr,a=new Tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,S=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const m=s?0:i,x=m*4;let y=d.clippingState||null;l.value=y,y=u(v,h,x,p);for(let L=0;L!==x;++L)y[L]=n[L];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const S=f!==null?f.length:0;let g=null;if(S!==0){if(g=l.value,v!==!0||g===null){const d=p+S*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,y=p;x!==S;++x,y+=4)o.copy(f[x]).applyMatrix4(m,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function WT(t){let e=new WeakMap;function n(o,a){return a===mu?o.mapping=Wo:a===ch&&(o.mapping=jo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===mu||a===ch)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new n1(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ep extends g_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bo=4,Yg=[.125,.215,.35,.446,.526,.582],ys=20,Xd=new Ep,qg=new wt;let $d=null,Yd=0,qd=0;const xs=(1+Math.sqrt(5))/2,oo=1/xs,Zg=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,xs,oo),new O(0,xs,-oo),new O(oo,0,xs),new O(-oo,0,xs),new O(xs,oo,0),new O(-xs,oo,0)];class za{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){$d=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($d,Yd,qd),e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wo||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$d=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:cl,format:zi,colorSpace:wr,depthBuffer:!1},r=Kg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jT(s)),this._blurMaterial=XT(s,e,n)}return r}_compileMaterial(e){const n=new Ze(this._lodPlanes[0],e);this._renderer.compile(n,Xd)}_sceneToCubeUV(e,n,i,r){const a=new ei(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(qg),u.toneMapping=es,u.autoClear=!1;const p=new Qi({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),v=new Ze(new dn,p);let S=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,S=!0):(p.color.copy(qg),S=!0);for(let d=0;d<6;d++){const m=d%3;m===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):m===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;xc(r,m*x,d>2?x:0,x,x),u.setRenderTarget(r),S&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Wo||e.mapping===jo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zg[(r-1)%Zg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ze(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ys-1),S=s/v,g=isFinite(s)?1+Math.floor(u*S):ys;g>ys&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ys}`);const d=[];let m=0;for(let P=0;P<ys;++P){const F=P/S,E=Math.exp(-F*F/2);d.push(E),P===0?m+=E:P<g&&(m+=2*E)}for(let P=0;P<d.length;P++)d[P]=d[P]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const y=this._sizeLods[r],L=3*y*(r>x-bo?r-x+bo:0),A=4*(this._cubeSize-y);xc(n,L,A,3*y,2*y),l.setRenderTarget(n),l.render(f,Xd)}}function jT(t){const e=[],n=[],i=[];let r=t;const s=t-bo+1+Yg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-bo?l=Yg[o-t+bo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,S=3,g=2,d=1,m=new Float32Array(S*v*p),x=new Float32Array(g*v*p),y=new Float32Array(d*v*p);for(let A=0;A<p;A++){const P=A%3*2/3-1,F=A>2?0:-1,E=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];m.set(E,S*v*A),x.set(h,g*v*A);const T=[A,A,A,A,A,A];y.set(T,d*v*A)}const L=new xn;L.setAttribute("position",new Ai(m,S)),L.setAttribute("uv",new Ai(x,g)),L.setAttribute("faceIndex",new Ai(y,d)),e.push(L),r>bo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Kg(t,e,n){const i=new Us(t,e,n);return i.texture.mapping=Bu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function XT(t,e,n){const i=new Float32Array(ys),r=new O(0,1,0);return new Os({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tp(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Jg(){return new Os({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tp(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Qg(){return new Os({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Tp(){return`

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
	`}function $T(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===mu||l===ch,u=l===Wo||l===jo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new za(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new za(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function YT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const S=h.morphAttributes[v];for(let g=0,d=S.length;g<d;g++)e.remove(S[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const S=p[v];for(let g=0,d=S.length;g<d;g++)e.update(S[g],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let S=0;if(p!==null){const m=p.array;S=p.version;for(let x=0,y=m.length;x<y;x+=3){const L=m[x+0],A=m[x+1],P=m[x+2];h.push(L,A,A,P,P,L)}}else if(v!==void 0){const m=v.array;S=v.version;for(let x=0,y=m.length/3-1;x<y;x+=3){const L=x+0,A=x+1,P=x+2;h.push(L,A,A,P,P,L)}}else return;const g=new(l_(h)?p_:h_)(h,1);g.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ZT(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,v){t.drawElements(s,v,a,p*l),n.update(v,s,1)}function f(p,v,S){if(S===0)return;let g,d;if(r)g=t,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](s,v,a,p*l,S),n.update(v,s,S)}function h(p,v,S){if(S===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<S;d++)this.render(p[d]/l,v[d]);else{g.multiDrawElementsWEBGL(s,v,0,a,p,0,S);let d=0;for(let m=0;m<S;m++)d+=v[m];n.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function KT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function JT(t,e){return t[0]-e[0]}function QT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function eb(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Qt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,S=v!==void 0?v.length:0;let g=s.get(u);if(g===void 0||g.count!==S){let W=function(){ie.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var p=W;g!==void 0&&g.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let E=0;x===!0&&(E=1),y===!0&&(E=2),L===!0&&(E=3);let T=u.attributes.position.count*E,V=1;T>e.maxTextureSize&&(V=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const $=new Float32Array(T*V*4*S),ie=new d_($,T,V,S);ie.type=Gr,ie.needsUpdate=!0;const I=E*4;for(let j=0;j<S;j++){const ne=A[j],B=P[j],Y=F[j],q=T*V*4*j;for(let le=0;le<ne.count;le++){const he=le*I;x===!0&&(o.fromBufferAttribute(ne,le),$[q+he+0]=o.x,$[q+he+1]=o.y,$[q+he+2]=o.z,$[q+he+3]=0),y===!0&&(o.fromBufferAttribute(B,le),$[q+he+4]=o.x,$[q+he+5]=o.y,$[q+he+6]=o.z,$[q+he+7]=0),L===!0&&(o.fromBufferAttribute(Y,le),$[q+he+8]=o.x,$[q+he+9]=o.y,$[q+he+10]=o.z,$[q+he+11]=Y.itemSize===4?o.w:1)}}g={count:S,texture:ie,size:new Se(T,V)},s.set(u,g),u.addEventListener("dispose",W)}let d=0;for(let x=0;x<h.length;x++)d+=h[x];const m=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",m),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const v=h===void 0?0:h.length;let S=i[u.id];if(S===void 0||S.length!==v){S=[];for(let y=0;y<v;y++)S[y]=[y,0];i[u.id]=S}for(let y=0;y<v;y++){const L=S[y];L[0]=y,L[1]=h[y]}S.sort(QT);for(let y=0;y<8;y++)y<v&&S[y][1]?(a[y][0]=S[y][0],a[y][1]=S[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(JT);const g=u.morphAttributes.position,d=u.morphAttributes.normal;let m=0;for(let y=0;y<8;y++){const L=a[y],A=L[0],P=L[1];A!==Number.MAX_SAFE_INTEGER&&P?(g&&u.getAttribute("morphTarget"+y)!==g[A]&&u.setAttribute("morphTarget"+y,g[A]),d&&u.getAttribute("morphNormal"+y)!==d[A]&&u.setAttribute("morphNormal"+y,d[A]),r[y]=P,m+=P):(g&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const x=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function tb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class __ extends $n{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Cs,u!==Cs&&u!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Cs&&(i=Vr),i===void 0&&u===Xo&&(i=As),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const y_=new $n,S_=new __(1,1);S_.compareFunction=a_;const M_=new d_,w_=new zw,E_=new v_,e0=[],t0=[],n0=new Float32Array(16),i0=new Float32Array(9),r0=new Float32Array(4);function Jo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=e0[r];if(s===void 0&&(s=new Float32Array(r),e0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function _n(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function yn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gu(t,e){let n=t0[e];n===void 0&&(n=new Int32Array(e),t0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function nb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2fv(this.addr,e),yn(n,e)}}function rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;t.uniform3fv(this.addr,e),yn(n,e)}}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4fv(this.addr,e),yn(n,e)}}function ob(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,i))return;r0.set(i),t.uniformMatrix2fv(this.addr,!1,r0),yn(n,i)}}function ab(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,i))return;i0.set(i),t.uniformMatrix3fv(this.addr,!1,i0),yn(n,i)}}function lb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),yn(n,e)}else{if(_n(n,i))return;n0.set(i),t.uniformMatrix4fv(this.addr,!1,n0),yn(n,i)}}function cb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2iv(this.addr,e),yn(n,e)}}function db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;t.uniform3iv(this.addr,e),yn(n,e)}}function fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4iv(this.addr,e),yn(n,e)}}function hb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2uiv(this.addr,e),yn(n,e)}}function mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;t.uniform3uiv(this.addr,e),yn(n,e)}}function gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4uiv(this.addr,e),yn(n,e)}}function vb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?S_:y_;n.setTexture2D(e||s,r)}function xb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||w_,r)}function _b(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||E_,r)}function yb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||M_,r)}function Sb(t){switch(t){case 5126:return nb;case 35664:return ib;case 35665:return rb;case 35666:return sb;case 35674:return ob;case 35675:return ab;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return db;case 35669:case 35673:return fb;case 5125:return hb;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return yb}}function Mb(t,e){t.uniform1fv(this.addr,e)}function wb(t,e){const n=Jo(e,this.size,2);t.uniform2fv(this.addr,n)}function Eb(t,e){const n=Jo(e,this.size,3);t.uniform3fv(this.addr,n)}function Tb(t,e){const n=Jo(e,this.size,4);t.uniform4fv(this.addr,n)}function bb(t,e){const n=Jo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ab(t,e){const n=Jo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Cb(t,e){const n=Jo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Rb(t,e){t.uniform1iv(this.addr,e)}function Pb(t,e){t.uniform2iv(this.addr,e)}function Lb(t,e){t.uniform3iv(this.addr,e)}function Nb(t,e){t.uniform4iv(this.addr,e)}function Ib(t,e){t.uniform1uiv(this.addr,e)}function Db(t,e){t.uniform2uiv(this.addr,e)}function Ub(t,e){t.uniform3uiv(this.addr,e)}function Ob(t,e){t.uniform4uiv(this.addr,e)}function Fb(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||y_,s[o])}function kb(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||w_,s[o])}function zb(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||E_,s[o])}function Bb(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||M_,s[o])}function Hb(t){switch(t){case 5126:return Mb;case 35664:return wb;case 35665:return Eb;case 35666:return Tb;case 35674:return bb;case 35675:return Ab;case 35676:return Cb;case 5124:case 35670:return Rb;case 35667:case 35671:return Pb;case 35668:case 35672:return Lb;case 35669:case 35673:return Nb;case 5125:return Ib;case 36294:return Db;case 36295:return Ub;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return zb;case 36289:case 36303:case 36311:case 36292:return Bb}}class Vb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Sb(n.type)}}class Gb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Hb(n.type)}}class Wb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Zd=/(\w+)(\])?(\[|\.)?/g;function s0(t,e){t.seq.push(e),t.map[e.id]=e}function jb(t,e,n){const i=t.name,r=i.length;for(Zd.lastIndex=0;;){const s=Zd.exec(i),o=Zd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){s0(n,c===void 0?new Vb(a,t,e):new Gb(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Wb(a),s0(n,f)),n=f}}}class Hc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);jb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function o0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Xb=37297;let $b=0;function Yb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function qb(t){const e=Ft.getPrimaries(Ft.workingColorSpace),n=Ft.getPrimaries(t);let i;switch(e===n?i="":e===xu&&n===vu?i="LinearDisplayP3ToLinearSRGB":e===vu&&n===xu&&(i="LinearSRGBToLinearDisplayP3"),t){case wr:case Hu:return[i,"LinearTransferOETF"];case Kt:case _p:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function a0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Yb(t.getShaderSource(e),o)}else return r}function Zb(t,e){const n=qb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Kb(t,e){let n;switch(e){case ZM:n="Linear";break;case KM:n="Reinhard";break;case JM:n="OptimizedCineon";break;case Kx:n="ACESFilmic";break;case ew:n="AgX";break;case QM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Jb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ao).join(`
`)}function Qb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ao).join(`
`)}function e2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function t2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ao(t){return t!==""}function l0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function c0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n2=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(t){return t.replace(n2,r2)}const i2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function r2(t,e){let n=Mt[e];if(n===void 0){const i=i2.get(e);if(i!==void 0)n=Mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mh(n)}const s2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u0(t){return t.replace(s2,o2)}function o2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function d0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function a2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Yx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===qx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===fr&&(e="SHADOWMAP_TYPE_VSM"),e}function l2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Wo:case jo:e="ENVMAP_TYPE_CUBE";break;case Bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function c2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case jo:e="ENVMAP_MODE_REFRACTION";break}return e}function u2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Zx:e="ENVMAP_BLENDING_MULTIPLY";break;case YM:e="ENVMAP_BLENDING_MIX";break;case qM:e="ENVMAP_BLENDING_ADD";break}return e}function d2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function f2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=a2(n),c=l2(n),u=c2(n),f=u2(n),h=d2(n),p=n.isWebGL2?"":Jb(n),v=Qb(n),S=e2(s),g=r.createProgram();let d,m,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Ao).join(`
`),d.length>0&&(d+=`
`),m=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Ao).join(`
`),m.length>0&&(m+=`
`)):(d=[d0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),m=[p,d0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==es?"#define TONE_MAPPING":"",n.toneMapping!==es?Mt.tonemapping_pars_fragment:"",n.toneMapping!==es?Kb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,Zb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ao).join(`
`)),o=mh(o),o=l0(o,n),o=c0(o,n),a=mh(a),a=l0(a,n),a=c0(a,n),o=u0(o),a=u0(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+d+o,L=x+m+a,A=o0(r,r.VERTEX_SHADER,y),P=o0(r,r.FRAGMENT_SHADER,L);r.attachShader(g,A),r.attachShader(g,P),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function F($){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(g).trim(),I=r.getShaderInfoLog(A).trim(),W=r.getShaderInfoLog(P).trim();let j=!0,ne=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,A,P);else{const B=a0(r,A,"vertex"),Y=a0(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+B+`
`+Y)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(I===""||W==="")&&(ne=!1);ne&&($.diagnostics={runnable:j,programLog:ie,vertexShader:{log:I,prefix:d},fragmentShader:{log:W,prefix:m}})}r.deleteShader(A),r.deleteShader(P),E=new Hc(r,g),T=t2(r,g)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(g,Xb)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$b++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=P,this}let h2=0;class p2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new m2(e),n.set(e,i)),i}}class m2{constructor(e){this.id=h2++,this.code=e,this.usedTimes=0}}function g2(t,e,n,i,r,s,o){const a=new Mp,l=new p2,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return E===0?"uv":`uv${E}`}function g(E,T,V,$,ie){const I=$.fog,W=ie.geometry,j=E.isMeshStandardMaterial?$.environment:null,ne=(E.isMeshStandardMaterial?n:e).get(E.envMap||j),B=ne&&ne.mapping===Bu?ne.image.height:null,Y=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=q!==void 0?q.length:0;let he=0;W.morphAttributes.position!==void 0&&(he=1),W.morphAttributes.normal!==void 0&&(he=2),W.morphAttributes.color!==void 0&&(he=3);let ee,ue,Le,He;if(Y){const Wt=Zi[Y];ee=Wt.vertexShader,ue=Wt.fragmentShader}else ee=E.vertexShader,ue=E.fragmentShader,l.update(E),Le=l.getVertexShaderID(E),He=l.getFragmentShaderID(E);const Ue=t.getRenderTarget(),ot=ie.isInstancedMesh===!0,nt=ie.isBatchedMesh===!0,$e=!!E.map,Ve=!!E.matcap,D=!!ne,se=!!E.aoMap,ae=!!E.lightMap,ve=!!E.bumpMap,oe=!!E.normalMap,et=!!E.displacementMap,Oe=!!E.emissiveMap,C=!!E.metalnessMap,w=!!E.roughnessMap,H=E.anisotropy>0,fe=E.clearcoat>0,pe=E.iridescence>0,me=E.sheen>0,Ke=E.transmission>0,Ce=H&&!!E.anisotropyMap,ze=fe&&!!E.clearcoatMap,rt=fe&&!!E.clearcoatNormalMap,pt=fe&&!!E.clearcoatRoughnessMap,re=pe&&!!E.iridescenceMap,Et=pe&&!!E.iridescenceThicknessMap,Ge=me&&!!E.sheenColorMap,at=me&&!!E.sheenRoughnessMap,Ye=!!E.specularMap,je=!!E.specularColorMap,lt=!!E.specularIntensityMap,Rt=Ke&&!!E.transmissionMap,At=Ke&&!!E.thicknessMap,xt=!!E.gradientMap,Te=!!E.alphaMap,k=E.alphaTest>0,Ae=!!E.alphaHash,Ee=!!E.extensions,dt=!!W.attributes.uv1,ct=!!W.attributes.uv2,It=!!W.attributes.uv3;let Lt=es;return E.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(Lt=t.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:ee,fragmentShader:ue,defines:E.defines,customVertexShaderID:Le,customFragmentShaderID:He,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:nt,instancing:ot,instancingColor:ot&&ie.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ue===null?t.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:wr,map:$e,matcap:Ve,envMap:D,envMapMode:D&&ne.mapping,envMapCubeUVHeight:B,aoMap:se,lightMap:ae,bumpMap:ve,normalMap:oe,displacementMap:h&&et,emissiveMap:Oe,normalMapObjectSpace:oe&&E.normalMapType===fw,normalMapTangentSpace:oe&&E.normalMapType===o_,metalnessMap:C,roughnessMap:w,anisotropy:H,anisotropyMap:Ce,clearcoat:fe,clearcoatMap:ze,clearcoatNormalMap:rt,clearcoatRoughnessMap:pt,iridescence:pe,iridescenceMap:re,iridescenceThicknessMap:Et,sheen:me,sheenColorMap:Ge,sheenRoughnessMap:at,specularMap:Ye,specularColorMap:je,specularIntensityMap:lt,transmission:Ke,transmissionMap:Rt,thicknessMap:At,gradientMap:xt,opaque:E.transparent===!1&&E.blending===Uo,alphaMap:Te,alphaTest:k,alphaHash:Ae,combine:E.combine,mapUv:$e&&S(E.map.channel),aoMapUv:se&&S(E.aoMap.channel),lightMapUv:ae&&S(E.lightMap.channel),bumpMapUv:ve&&S(E.bumpMap.channel),normalMapUv:oe&&S(E.normalMap.channel),displacementMapUv:et&&S(E.displacementMap.channel),emissiveMapUv:Oe&&S(E.emissiveMap.channel),metalnessMapUv:C&&S(E.metalnessMap.channel),roughnessMapUv:w&&S(E.roughnessMap.channel),anisotropyMapUv:Ce&&S(E.anisotropyMap.channel),clearcoatMapUv:ze&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:rt&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:at&&S(E.sheenRoughnessMap.channel),specularMapUv:Ye&&S(E.specularMap.channel),specularColorMapUv:je&&S(E.specularColorMap.channel),specularIntensityMapUv:lt&&S(E.specularIntensityMap.channel),transmissionMapUv:Rt&&S(E.transmissionMap.channel),thicknessMapUv:At&&S(E.thicknessMap.channel),alphaMapUv:Te&&S(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(oe||H),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:dt,vertexUv2s:ct,vertexUv3s:It,pointsUvs:ie.isPoints===!0&&!!W.attributes.uv&&($e||Te),fog:!!I,useFog:E.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ie.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:he,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Lt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:$e&&E.map.isVideoTexture===!0&&Ft.getTransfer(E.map.colorSpace)===qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ui,flipSided:E.side===Xn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Ee&&E.extensions.derivatives===!0,extensionFragDepth:Ee&&E.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)T.push(V),T.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(m(T,E),x(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function m(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function x(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function y(E){const T=v[E.type];let V;if(T){const $=Zi[T];V=Jw.clone($.uniforms)}else V=E.uniforms;return V}function L(E,T){let V;for(let $=0,ie=c.length;$<ie;$++){const I=c[$];if(I.cacheKey===T){V=I,++V.usedTimes;break}}return V===void 0&&(V=new f2(t,T,E,s),c.push(V)),V}function A(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function P(E){l.remove(E)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:L,releaseProgram:A,releaseShaderCache:P,programs:c,dispose:F}}function v2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function x2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function f0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function h0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,v,S,g){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:S,group:g},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=S,d.group=g),e++,d}function a(f,h,p,v,S,g){const d=o(f,h,p,v,S,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,v,S,g){const d=o(f,h,p,v,S,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||x2),i.length>1&&i.sort(h||f0),r.length>1&&r.sort(h||f0)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function _2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new h0,t.set(i,[o])):r>=s.length?(o=new h0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function y2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new wt};break;case"SpotLight":n={position:new O,direction:new O,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":n={color:new wt,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function S2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let M2=0;function w2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function E2(t,e){const n=new y2,i=S2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,o=new rn,a=new rn;function l(u,f){let h=0,p=0,v=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let S=0,g=0,d=0,m=0,x=0,y=0,L=0,A=0,P=0,F=0,E=0;u.sort(w2);const T=f===!0?Math.PI:1;for(let $=0,ie=u.length;$<ie;$++){const I=u[$],W=I.color,j=I.intensity,ne=I.distance,B=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=W.r*j*T,p+=W.g*j*T,v+=W.b*j*T;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(I.sh.coefficients[Y],j);E++}else if(I.isDirectionalLight){const Y=n.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const q=I.shadow,le=i.get(I);le.shadowBias=q.bias,le.shadowNormalBias=q.normalBias,le.shadowRadius=q.radius,le.shadowMapSize=q.mapSize,r.directionalShadow[S]=le,r.directionalShadowMap[S]=B,r.directionalShadowMatrix[S]=I.shadow.matrix,y++}r.directional[S]=Y,S++}else if(I.isSpotLight){const Y=n.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(W).multiplyScalar(j*T),Y.distance=ne,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,r.spot[d]=Y;const q=I.shadow;if(I.map&&(r.spotLightMap[P]=I.map,P++,q.updateMatrices(I),I.castShadow&&F++),r.spotLightMatrix[d]=q.matrix,I.castShadow){const le=i.get(I);le.shadowBias=q.bias,le.shadowNormalBias=q.normalBias,le.shadowRadius=q.radius,le.shadowMapSize=q.mapSize,r.spotShadow[d]=le,r.spotShadowMap[d]=B,A++}d++}else if(I.isRectAreaLight){const Y=n.get(I);Y.color.copy(W).multiplyScalar(j),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),r.rectArea[m]=Y,m++}else if(I.isPointLight){const Y=n.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*T),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const q=I.shadow,le=i.get(I);le.shadowBias=q.bias,le.shadowNormalBias=q.normalBias,le.shadowRadius=q.radius,le.shadowMapSize=q.mapSize,le.shadowCameraNear=q.camera.near,le.shadowCameraFar=q.camera.far,r.pointShadow[g]=le,r.pointShadowMap[g]=B,r.pointShadowMatrix[g]=I.shadow.matrix,L++}r.point[g]=Y,g++}else if(I.isHemisphereLight){const Y=n.get(I);Y.skyColor.copy(I.color).multiplyScalar(j*T),Y.groundColor.copy(I.groundColor).multiplyScalar(j*T),r.hemi[x]=Y,x++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const V=r.hash;(V.directionalLength!==S||V.pointLength!==g||V.spotLength!==d||V.rectAreaLength!==m||V.hemiLength!==x||V.numDirectionalShadows!==y||V.numPointShadows!==L||V.numSpotShadows!==A||V.numSpotMaps!==P||V.numLightProbes!==E)&&(r.directional.length=S,r.spot.length=d,r.rectArea.length=m,r.point.length=g,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=A+P-F,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=E,V.directionalLength=S,V.pointLength=g,V.spotLength=d,V.rectAreaLength=m,V.hemiLength=x,V.numDirectionalShadows=y,V.numPointShadows=L,V.numSpotShadows=A,V.numSpotMaps=P,V.numLightProbes=E,r.version=M2++)}function c(u,f){let h=0,p=0,v=0,S=0,g=0;const d=f.matrixWorldInverse;for(let m=0,x=u.length;m<x;m++){const y=u[m];if(y.isDirectionalLight){const L=r.directional[h];L.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),h++}else if(y.isSpotLight){const L=r.spot[v];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),v++}else if(y.isRectAreaLight){const L=r.rectArea[S];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),L.halfWidth.set(y.width*.5,0,0),L.halfHeight.set(0,y.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){const L=r.point[p];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const L=r.hemi[g];L.direction.setFromMatrixPosition(y.matrixWorld),L.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:r}}function p0(t,e){const n=new E2(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function T2(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new p0(t,e),n.set(s,[l])):o>=a.length?(l=new p0(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class b2 extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class A2 extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const C2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R2=`uniform sampler2D shadow_pass;
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
}`;function P2(t,e,n){let i=new wp;const r=new Se,s=new Se,o=new Qt,a=new b2({depthPacking:dw}),l=new A2,c={},u=n.maxTextureSize,f={[ss]:Xn,[Xn]:ss,[ui]:ui},h=new Os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:C2,fragmentShader:R2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new xn;v.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ze(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yx;let d=this.type;this.render=function(A,P,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),V=t.getActiveMipmapLevel(),$=t.state;$.setBlending(Qr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ie=d!==fr&&this.type===fr,I=d===fr&&this.type!==fr;for(let W=0,j=A.length;W<j;W++){const ne=A[W],B=ne.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Y=B.getFrameExtents();if(r.multiply(Y),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,B.mapSize.y=s.y)),B.map===null||ie===!0||I===!0){const le=this.type!==fr?{minFilter:Gn,magFilter:Gn}:{};B.map!==null&&B.map.dispose(),B.map=new Us(r.x,r.y,le),B.map.texture.name=ne.name+".shadowMap",B.camera.updateProjectionMatrix()}t.setRenderTarget(B.map),t.clear();const q=B.getViewportCount();for(let le=0;le<q;le++){const he=B.getViewport(le);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),$.viewport(o),B.updateMatrices(ne,le),i=B.getFrustum(),y(P,F,B.camera,ne,this.type)}B.isPointLightShadow!==!0&&this.type===fr&&m(B,F),B.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(E,T,V)};function m(A,P){const F=e.update(S);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Us(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(P,null,F,h,S,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(P,null,F,p,S,null)}function x(A,P,F,E){let T=null;const V=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(V!==void 0)T=V;else if(T=F.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const $=T.uuid,ie=P.uuid;let I=c[$];I===void 0&&(I={},c[$]=I);let W=I[ie];W===void 0&&(W=T.clone(),I[ie]=W,P.addEventListener("dispose",L)),T=W}if(T.visible=P.visible,T.wireframe=P.wireframe,E===fr?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:f[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const $=t.properties.get(T);$.light=F}return T}function y(A,P,F,E,T){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===fr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const ie=e.update(A),I=A.material;if(Array.isArray(I)){const W=ie.groups;for(let j=0,ne=W.length;j<ne;j++){const B=W[j],Y=I[B.materialIndex];if(Y&&Y.visible){const q=x(A,Y,E,T);A.onBeforeShadow(t,A,P,F,ie,q,B),t.renderBufferDirect(F,null,ie,q,A,B),A.onAfterShadow(t,A,P,F,ie,q,B)}}}else if(I.visible){const W=x(A,I,E,T);A.onBeforeShadow(t,A,P,F,ie,W,null),t.renderBufferDirect(F,null,ie,W,A,null),A.onAfterShadow(t,A,P,F,ie,W,null)}}const $=A.children;for(let ie=0,I=$.length;ie<I;ie++)y($[ie],P,F,E,T)}function L(A){A.target.removeEventListener("dispose",L);for(const F in c){const E=c[F],T=A.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function L2(t,e,n){const i=n.isWebGL2;function r(){let k=!1;const Ae=new Qt;let Ee=null;const dt=new Qt(0,0,0,0);return{setMask:function(ct){Ee!==ct&&!k&&(t.colorMask(ct,ct,ct,ct),Ee=ct)},setLocked:function(ct){k=ct},setClear:function(ct,It,Lt,Ht,Wt){Wt===!0&&(ct*=Ht,It*=Ht,Lt*=Ht),Ae.set(ct,It,Lt,Ht),dt.equals(Ae)===!1&&(t.clearColor(ct,It,Lt,Ht),dt.copy(Ae))},reset:function(){k=!1,Ee=null,dt.set(-1,0,0,0)}}}function s(){let k=!1,Ae=null,Ee=null,dt=null;return{setTest:function(ct){ct?nt(t.DEPTH_TEST):$e(t.DEPTH_TEST)},setMask:function(ct){Ae!==ct&&!k&&(t.depthMask(ct),Ae=ct)},setFunc:function(ct){if(Ee!==ct){switch(ct){case HM:t.depthFunc(t.NEVER);break;case VM:t.depthFunc(t.ALWAYS);break;case GM:t.depthFunc(t.LESS);break;case pu:t.depthFunc(t.LEQUAL);break;case WM:t.depthFunc(t.EQUAL);break;case jM:t.depthFunc(t.GEQUAL);break;case XM:t.depthFunc(t.GREATER);break;case $M:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ee=ct}},setLocked:function(ct){k=ct},setClear:function(ct){dt!==ct&&(t.clearDepth(ct),dt=ct)},reset:function(){k=!1,Ae=null,Ee=null,dt=null}}}function o(){let k=!1,Ae=null,Ee=null,dt=null,ct=null,It=null,Lt=null,Ht=null,Wt=null;return{setTest:function(Ut){k||(Ut?nt(t.STENCIL_TEST):$e(t.STENCIL_TEST))},setMask:function(Ut){Ae!==Ut&&!k&&(t.stencilMask(Ut),Ae=Ut)},setFunc:function(Ut,Sn,vi){(Ee!==Ut||dt!==Sn||ct!==vi)&&(t.stencilFunc(Ut,Sn,vi),Ee=Ut,dt=Sn,ct=vi)},setOp:function(Ut,Sn,vi){(It!==Ut||Lt!==Sn||Ht!==vi)&&(t.stencilOp(Ut,Sn,vi),It=Ut,Lt=Sn,Ht=vi)},setLocked:function(Ut){k=Ut},setClear:function(Ut){Wt!==Ut&&(t.clearStencil(Ut),Wt=Ut)},reset:function(){k=!1,Ae=null,Ee=null,dt=null,ct=null,It=null,Lt=null,Ht=null,Wt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,S=[],g=null,d=!1,m=null,x=null,y=null,L=null,A=null,P=null,F=null,E=new wt(0,0,0),T=0,V=!1,$=null,ie=null,I=null,W=null,j=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=Y>=2);let le=null,he={};const ee=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),Le=new Qt().fromArray(ee),He=new Qt().fromArray(ue);function Ue(k,Ae,Ee,dt){const ct=new Uint8Array(4),It=t.createTexture();t.bindTexture(k,It),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Lt=0;Lt<Ee;Lt++)i&&(k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY)?t.texImage3D(Ae,0,t.RGBA,1,1,dt,0,t.RGBA,t.UNSIGNED_BYTE,ct):t.texImage2D(Ae+Lt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ct);return It}const ot={};ot[t.TEXTURE_2D]=Ue(t.TEXTURE_2D,t.TEXTURE_2D,1),ot[t.TEXTURE_CUBE_MAP]=Ue(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ot[t.TEXTURE_2D_ARRAY]=Ue(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ot[t.TEXTURE_3D]=Ue(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),nt(t.DEPTH_TEST),l.setFunc(pu),Oe(!1),C(Km),nt(t.CULL_FACE),oe(Qr);function nt(k){h[k]!==!0&&(t.enable(k),h[k]=!0)}function $e(k){h[k]!==!1&&(t.disable(k),h[k]=!1)}function Ve(k,Ae){return p[k]!==Ae?(t.bindFramebuffer(k,Ae),p[k]=Ae,i&&(k===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Ae),k===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function D(k,Ae){let Ee=S,dt=!1;if(k)if(Ee=v.get(Ae),Ee===void 0&&(Ee=[],v.set(Ae,Ee)),k.isWebGLMultipleRenderTargets){const ct=k.texture;if(Ee.length!==ct.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let It=0,Lt=ct.length;It<Lt;It++)Ee[It]=t.COLOR_ATTACHMENT0+It;Ee.length=ct.length,dt=!0}}else Ee[0]!==t.COLOR_ATTACHMENT0&&(Ee[0]=t.COLOR_ATTACHMENT0,dt=!0);else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,dt=!0);dt&&(n.isWebGL2?t.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function se(k){return g!==k?(t.useProgram(k),g=k,!0):!1}const ae={[_s]:t.FUNC_ADD,[bM]:t.FUNC_SUBTRACT,[AM]:t.FUNC_REVERSE_SUBTRACT};if(i)ae[tg]=t.MIN,ae[ng]=t.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(ae[tg]=k.MIN_EXT,ae[ng]=k.MAX_EXT)}const ve={[CM]:t.ZERO,[RM]:t.ONE,[PM]:t.SRC_COLOR,[ah]:t.SRC_ALPHA,[OM]:t.SRC_ALPHA_SATURATE,[DM]:t.DST_COLOR,[NM]:t.DST_ALPHA,[LM]:t.ONE_MINUS_SRC_COLOR,[lh]:t.ONE_MINUS_SRC_ALPHA,[UM]:t.ONE_MINUS_DST_COLOR,[IM]:t.ONE_MINUS_DST_ALPHA,[FM]:t.CONSTANT_COLOR,[kM]:t.ONE_MINUS_CONSTANT_COLOR,[zM]:t.CONSTANT_ALPHA,[BM]:t.ONE_MINUS_CONSTANT_ALPHA};function oe(k,Ae,Ee,dt,ct,It,Lt,Ht,Wt,Ut){if(k===Qr){d===!0&&($e(t.BLEND),d=!1);return}if(d===!1&&(nt(t.BLEND),d=!0),k!==TM){if(k!==m||Ut!==V){if((x!==_s||A!==_s)&&(t.blendEquation(t.FUNC_ADD),x=_s,A=_s),Ut)switch(k){case Uo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jm:t.blendFunc(t.ONE,t.ONE);break;case Qm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case eg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Uo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Qm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case eg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,L=null,P=null,F=null,E.set(0,0,0),T=0,m=k,V=Ut}return}ct=ct||Ae,It=It||Ee,Lt=Lt||dt,(Ae!==x||ct!==A)&&(t.blendEquationSeparate(ae[Ae],ae[ct]),x=Ae,A=ct),(Ee!==y||dt!==L||It!==P||Lt!==F)&&(t.blendFuncSeparate(ve[Ee],ve[dt],ve[It],ve[Lt]),y=Ee,L=dt,P=It,F=Lt),(Ht.equals(E)===!1||Wt!==T)&&(t.blendColor(Ht.r,Ht.g,Ht.b,Wt),E.copy(Ht),T=Wt),m=k,V=!1}function et(k,Ae){k.side===ui?$e(t.CULL_FACE):nt(t.CULL_FACE);let Ee=k.side===Xn;Ae&&(Ee=!Ee),Oe(Ee),k.blending===Uo&&k.transparent===!1?oe(Qr):oe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const dt=k.stencilWrite;c.setTest(dt),dt&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),H(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?nt(t.SAMPLE_ALPHA_TO_COVERAGE):$e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(k){$!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),$=k)}function C(k){k!==wM?(nt(t.CULL_FACE),k!==ie&&(k===Km?t.cullFace(t.BACK):k===EM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):$e(t.CULL_FACE),ie=k}function w(k){k!==I&&(B&&t.lineWidth(k),I=k)}function H(k,Ae,Ee){k?(nt(t.POLYGON_OFFSET_FILL),(W!==Ae||j!==Ee)&&(t.polygonOffset(Ae,Ee),W=Ae,j=Ee)):$e(t.POLYGON_OFFSET_FILL)}function fe(k){k?nt(t.SCISSOR_TEST):$e(t.SCISSOR_TEST)}function pe(k){k===void 0&&(k=t.TEXTURE0+ne-1),le!==k&&(t.activeTexture(k),le=k)}function me(k,Ae,Ee){Ee===void 0&&(le===null?Ee=t.TEXTURE0+ne-1:Ee=le);let dt=he[Ee];dt===void 0&&(dt={type:void 0,texture:void 0},he[Ee]=dt),(dt.type!==k||dt.texture!==Ae)&&(le!==Ee&&(t.activeTexture(Ee),le=Ee),t.bindTexture(k,Ae||ot[k]),dt.type=k,dt.texture=Ae)}function Ke(){const k=he[le];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ce(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ge(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ye(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(k){Le.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Le.copy(k))}function Rt(k){He.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),He.copy(k))}function At(k,Ae){let Ee=f.get(Ae);Ee===void 0&&(Ee=new WeakMap,f.set(Ae,Ee));let dt=Ee.get(k);dt===void 0&&(dt=t.getUniformBlockIndex(Ae,k.name),Ee.set(k,dt))}function xt(k,Ae){const dt=f.get(Ae).get(k);u.get(Ae)!==dt&&(t.uniformBlockBinding(Ae,dt,k.__bindingPointIndex),u.set(Ae,dt))}function Te(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},le=null,he={},p={},v=new WeakMap,S=[],g=null,d=!1,m=null,x=null,y=null,L=null,A=null,P=null,F=null,E=new wt(0,0,0),T=0,V=!1,$=null,ie=null,I=null,W=null,j=null,Le.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:nt,disable:$e,bindFramebuffer:Ve,drawBuffers:D,useProgram:se,setBlending:oe,setMaterial:et,setFlipSided:Oe,setCullFace:C,setLineWidth:w,setPolygonOffset:H,setScissorTest:fe,activeTexture:pe,bindTexture:me,unbindTexture:Ke,compressedTexImage2D:Ce,compressedTexImage3D:ze,texImage2D:Ye,texImage3D:je,updateUBOMapping:At,uniformBlockBinding:xt,texStorage2D:Ge,texStorage3D:at,texSubImage2D:rt,texSubImage3D:pt,compressedTexSubImage2D:re,compressedTexSubImage3D:Et,scissor:lt,viewport:Rt,reset:Te}}function N2(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,w){return p?new OffscreenCanvas(C,w):dl("canvas")}function S(C,w,H,fe){let pe=1;if((C.width>fe||C.height>fe)&&(pe=fe/Math.max(C.width,C.height)),pe<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const me=w?yu:Math.floor,Ke=me(pe*C.width),Ce=me(pe*C.height);f===void 0&&(f=v(Ke,Ce));const ze=H?v(Ke,Ce):f;return ze.width=Ke,ze.height=Ce,ze.getContext("2d").drawImage(C,0,0,Ke,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ke+"x"+Ce+")."),ze}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return ph(C.width)&&ph(C.height)}function d(C){return a?!1:C.wrapS!==di||C.wrapT!==di||C.minFilter!==Gn&&C.minFilter!==Wn}function m(C,w){return C.generateMipmaps&&w&&C.minFilter!==Gn&&C.minFilter!==Wn}function x(C){t.generateMipmap(C)}function y(C,w,H,fe,pe=!1){if(a===!1)return w;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let me=w;if(w===t.RED&&(H===t.FLOAT&&(me=t.R32F),H===t.HALF_FLOAT&&(me=t.R16F),H===t.UNSIGNED_BYTE&&(me=t.R8)),w===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(me=t.R8UI),H===t.UNSIGNED_SHORT&&(me=t.R16UI),H===t.UNSIGNED_INT&&(me=t.R32UI),H===t.BYTE&&(me=t.R8I),H===t.SHORT&&(me=t.R16I),H===t.INT&&(me=t.R32I)),w===t.RG&&(H===t.FLOAT&&(me=t.RG32F),H===t.HALF_FLOAT&&(me=t.RG16F),H===t.UNSIGNED_BYTE&&(me=t.RG8)),w===t.RGBA){const Ke=pe?gu:Ft.getTransfer(fe);H===t.FLOAT&&(me=t.RGBA32F),H===t.HALF_FLOAT&&(me=t.RGBA16F),H===t.UNSIGNED_BYTE&&(me=Ke===qt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(me=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(me=t.RGB5_A1)}return(me===t.R16F||me===t.R32F||me===t.RG16F||me===t.RG32F||me===t.RGBA16F||me===t.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function L(C,w,H){return m(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==Gn&&C.minFilter!==Wn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function A(C){return C===Gn||C===ig||C===wd?t.NEAREST:t.LINEAR}function P(C){const w=C.target;w.removeEventListener("dispose",P),E(w),w.isVideoTexture&&u.delete(w)}function F(C){const w=C.target;w.removeEventListener("dispose",F),V(w)}function E(C){const w=i.get(C);if(w.__webglInit===void 0)return;const H=C.source,fe=h.get(H);if(fe){const pe=fe[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&T(C),Object.keys(fe).length===0&&h.delete(H)}i.remove(C)}function T(C){const w=i.get(C);t.deleteTexture(w.__webglTexture);const H=C.source,fe=h.get(H);delete fe[w.__cacheKey],o.memory.textures--}function V(C){const w=C.texture,H=i.get(C),fe=i.get(w);if(fe.__webglTexture!==void 0&&(t.deleteTexture(fe.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(H.__webglFramebuffer[pe]))for(let me=0;me<H.__webglFramebuffer[pe].length;me++)t.deleteFramebuffer(H.__webglFramebuffer[pe][me]);else t.deleteFramebuffer(H.__webglFramebuffer[pe]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[pe])}else{if(Array.isArray(H.__webglFramebuffer))for(let pe=0;pe<H.__webglFramebuffer.length;pe++)t.deleteFramebuffer(H.__webglFramebuffer[pe]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let pe=0;pe<H.__webglColorRenderbuffer.length;pe++)H.__webglColorRenderbuffer[pe]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[pe]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let pe=0,me=w.length;pe<me;pe++){const Ke=i.get(w[pe]);Ke.__webglTexture&&(t.deleteTexture(Ke.__webglTexture),o.memory.textures--),i.remove(w[pe])}i.remove(w),i.remove(C)}let $=0;function ie(){$=0}function I(){const C=$;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),$+=1,C}function W(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function j(C,w){const H=i.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const fe=C.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(H,C,w);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+w)}function ne(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Le(H,C,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+w)}function B(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Le(H,C,w);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+w)}function Y(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){He(H,C,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+w)}const q={[uh]:t.REPEAT,[di]:t.CLAMP_TO_EDGE,[dh]:t.MIRRORED_REPEAT},le={[Gn]:t.NEAREST,[ig]:t.NEAREST_MIPMAP_NEAREST,[wd]:t.NEAREST_MIPMAP_LINEAR,[Wn]:t.LINEAR,[tw]:t.LINEAR_MIPMAP_NEAREST,[ll]:t.LINEAR_MIPMAP_LINEAR},he={[hw]:t.NEVER,[_w]:t.ALWAYS,[pw]:t.LESS,[a_]:t.LEQUAL,[mw]:t.EQUAL,[xw]:t.GEQUAL,[gw]:t.GREATER,[vw]:t.NOTEQUAL};function ee(C,w,H){if(H?(t.texParameteri(C,t.TEXTURE_WRAP_S,q[w.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,q[w.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,q[w.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,le[w.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,le[w.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==di||w.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,A(w.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,A(w.minFilter)),w.minFilter!==Gn&&w.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Gn||w.minFilter!==wd&&w.minFilter!==ll||w.type===Gr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===cl&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(C,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ue(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",P));const fe=w.source;let pe=h.get(fe);pe===void 0&&(pe={},h.set(fe,pe));const me=W(w);if(me!==C.__cacheKey){pe[me]===void 0&&(pe[me]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),pe[me].usedTimes++;const Ke=pe[C.__cacheKey];Ke!==void 0&&(pe[C.__cacheKey].usedTimes--,Ke.usedTimes===0&&T(w)),C.__cacheKey=me,C.__webglTexture=pe[me].texture}return H}function Le(C,w,H){let fe=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(fe=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(fe=t.TEXTURE_3D);const pe=ue(C,w),me=w.source;n.bindTexture(fe,C.__webglTexture,t.TEXTURE0+H);const Ke=i.get(me);if(me.version!==Ke.__version||pe===!0){n.activeTexture(t.TEXTURE0+H);const Ce=Ft.getPrimaries(Ft.workingColorSpace),ze=w.colorSpace===Ei?null:Ft.getPrimaries(w.colorSpace),rt=w.colorSpace===Ei||Ce===ze?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const pt=d(w)&&g(w.image)===!1;let re=S(w.image,pt,!1,r.maxTextureSize);re=Oe(w,re);const Et=g(re)||a,Ge=s.convert(w.format,w.colorSpace);let at=s.convert(w.type),Ye=y(w.internalFormat,Ge,at,w.colorSpace,w.isVideoTexture);ee(fe,w,Et);let je;const lt=w.mipmaps,Rt=a&&w.isVideoTexture!==!0&&Ye!==r_,At=Ke.__version===void 0||pe===!0,xt=L(w,re,Et);if(w.isDepthTexture)Ye=t.DEPTH_COMPONENT,a?w.type===Gr?Ye=t.DEPTH_COMPONENT32F:w.type===Vr?Ye=t.DEPTH_COMPONENT24:w.type===As?Ye=t.DEPTH24_STENCIL8:Ye=t.DEPTH_COMPONENT16:w.type===Gr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Cs&&Ye===t.DEPTH_COMPONENT&&w.type!==xp&&w.type!==Vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Vr,at=s.convert(w.type)),w.format===Xo&&Ye===t.DEPTH_COMPONENT&&(Ye=t.DEPTH_STENCIL,w.type!==As&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=As,at=s.convert(w.type))),At&&(Rt?n.texStorage2D(t.TEXTURE_2D,1,Ye,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ye,re.width,re.height,0,Ge,at,null));else if(w.isDataTexture)if(lt.length>0&&Et){Rt&&At&&n.texStorage2D(t.TEXTURE_2D,xt,Ye,lt[0].width,lt[0].height);for(let Te=0,k=lt.length;Te<k;Te++)je=lt[Te],Rt?n.texSubImage2D(t.TEXTURE_2D,Te,0,0,je.width,je.height,Ge,at,je.data):n.texImage2D(t.TEXTURE_2D,Te,Ye,je.width,je.height,0,Ge,at,je.data);w.generateMipmaps=!1}else Rt?(At&&n.texStorage2D(t.TEXTURE_2D,xt,Ye,re.width,re.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,Ge,at,re.data)):n.texImage2D(t.TEXTURE_2D,0,Ye,re.width,re.height,0,Ge,at,re.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Rt&&At&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xt,Ye,lt[0].width,lt[0].height,re.depth);for(let Te=0,k=lt.length;Te<k;Te++)je=lt[Te],w.format!==zi?Ge!==null?Rt?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Te,0,0,0,je.width,je.height,re.depth,Ge,je.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Te,Ye,je.width,je.height,re.depth,0,je.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Te,0,0,0,je.width,je.height,re.depth,Ge,at,je.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Te,Ye,je.width,je.height,re.depth,0,Ge,at,je.data)}else{Rt&&At&&n.texStorage2D(t.TEXTURE_2D,xt,Ye,lt[0].width,lt[0].height);for(let Te=0,k=lt.length;Te<k;Te++)je=lt[Te],w.format!==zi?Ge!==null?Rt?n.compressedTexSubImage2D(t.TEXTURE_2D,Te,0,0,je.width,je.height,Ge,je.data):n.compressedTexImage2D(t.TEXTURE_2D,Te,Ye,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?n.texSubImage2D(t.TEXTURE_2D,Te,0,0,je.width,je.height,Ge,at,je.data):n.texImage2D(t.TEXTURE_2D,Te,Ye,je.width,je.height,0,Ge,at,je.data)}else if(w.isDataArrayTexture)Rt?(At&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xt,Ye,re.width,re.height,re.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ge,at,re.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ye,re.width,re.height,re.depth,0,Ge,at,re.data);else if(w.isData3DTexture)Rt?(At&&n.texStorage3D(t.TEXTURE_3D,xt,Ye,re.width,re.height,re.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ge,at,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ye,re.width,re.height,re.depth,0,Ge,at,re.data);else if(w.isFramebufferTexture){if(At)if(Rt)n.texStorage2D(t.TEXTURE_2D,xt,Ye,re.width,re.height);else{let Te=re.width,k=re.height;for(let Ae=0;Ae<xt;Ae++)n.texImage2D(t.TEXTURE_2D,Ae,Ye,Te,k,0,Ge,at,null),Te>>=1,k>>=1}}else if(lt.length>0&&Et){Rt&&At&&n.texStorage2D(t.TEXTURE_2D,xt,Ye,lt[0].width,lt[0].height);for(let Te=0,k=lt.length;Te<k;Te++)je=lt[Te],Rt?n.texSubImage2D(t.TEXTURE_2D,Te,0,0,Ge,at,je):n.texImage2D(t.TEXTURE_2D,Te,Ye,Ge,at,je);w.generateMipmaps=!1}else Rt?(At&&n.texStorage2D(t.TEXTURE_2D,xt,Ye,re.width,re.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ge,at,re)):n.texImage2D(t.TEXTURE_2D,0,Ye,Ge,at,re);m(w,Et)&&x(fe),Ke.__version=me.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function He(C,w,H){if(w.image.length!==6)return;const fe=ue(C,w),pe=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const me=i.get(pe);if(pe.version!==me.__version||fe===!0){n.activeTexture(t.TEXTURE0+H);const Ke=Ft.getPrimaries(Ft.workingColorSpace),Ce=w.colorSpace===Ei?null:Ft.getPrimaries(w.colorSpace),ze=w.colorSpace===Ei||Ke===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const rt=w.isCompressedTexture||w.image[0].isCompressedTexture,pt=w.image[0]&&w.image[0].isDataTexture,re=[];for(let Te=0;Te<6;Te++)!rt&&!pt?re[Te]=S(w.image[Te],!1,!0,r.maxCubemapSize):re[Te]=pt?w.image[Te].image:w.image[Te],re[Te]=Oe(w,re[Te]);const Et=re[0],Ge=g(Et)||a,at=s.convert(w.format,w.colorSpace),Ye=s.convert(w.type),je=y(w.internalFormat,at,Ye,w.colorSpace),lt=a&&w.isVideoTexture!==!0,Rt=me.__version===void 0||fe===!0;let At=L(w,Et,Ge);ee(t.TEXTURE_CUBE_MAP,w,Ge);let xt;if(rt){lt&&Rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,At,je,Et.width,Et.height);for(let Te=0;Te<6;Te++){xt=re[Te].mipmaps;for(let k=0;k<xt.length;k++){const Ae=xt[k];w.format!==zi?at!==null?lt?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k,0,0,Ae.width,Ae.height,at,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k,je,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k,0,0,Ae.width,Ae.height,at,Ye,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k,je,Ae.width,Ae.height,0,at,Ye,Ae.data)}}}else{xt=w.mipmaps,lt&&Rt&&(xt.length>0&&At++,n.texStorage2D(t.TEXTURE_CUBE_MAP,At,je,re[0].width,re[0].height));for(let Te=0;Te<6;Te++)if(pt){lt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,re[Te].width,re[Te].height,at,Ye,re[Te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,je,re[Te].width,re[Te].height,0,at,Ye,re[Te].data);for(let k=0;k<xt.length;k++){const Ee=xt[k].image[Te].image;lt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k+1,0,0,Ee.width,Ee.height,at,Ye,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k+1,je,Ee.width,Ee.height,0,at,Ye,Ee.data)}}else{lt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,at,Ye,re[Te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,je,at,Ye,re[Te]);for(let k=0;k<xt.length;k++){const Ae=xt[k];lt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k+1,0,0,at,Ye,Ae.image[Te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k+1,je,at,Ye,Ae.image[Te])}}}m(w,Ge)&&x(t.TEXTURE_CUBE_MAP),me.__version=pe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Ue(C,w,H,fe,pe,me){const Ke=s.convert(H.format,H.colorSpace),Ce=s.convert(H.type),ze=y(H.internalFormat,Ke,Ce,H.colorSpace);if(!i.get(w).__hasExternalTextures){const pt=Math.max(1,w.width>>me),re=Math.max(1,w.height>>me);pe===t.TEXTURE_3D||pe===t.TEXTURE_2D_ARRAY?n.texImage3D(pe,me,ze,pt,re,w.depth,0,Ke,Ce,null):n.texImage2D(pe,me,ze,pt,re,0,Ke,Ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),oe(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,pe,i.get(H).__webglTexture,0,ve(w)):(pe===t.TEXTURE_2D||pe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,fe,pe,i.get(H).__webglTexture,me),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ot(C,w,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let fe=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||oe(w)){const pe=w.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Gr?fe=t.DEPTH_COMPONENT32F:pe.type===Vr&&(fe=t.DEPTH_COMPONENT24));const me=ve(w);oe(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,fe,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,me,fe,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,fe,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){const fe=ve(w);H&&oe(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,t.DEPTH24_STENCIL8,w.width,w.height):oe(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const fe=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let pe=0;pe<fe.length;pe++){const me=fe[pe],Ke=s.convert(me.format,me.colorSpace),Ce=s.convert(me.type),ze=y(me.internalFormat,Ke,Ce,me.colorSpace),rt=ve(w);H&&oe(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,rt,ze,w.width,w.height):oe(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,rt,ze,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ze,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function nt(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const fe=i.get(w.depthTexture).__webglTexture,pe=ve(w);if(w.depthTexture.format===Cs)oe(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,fe,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,fe,0);else if(w.depthTexture.format===Xo)oe(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,fe,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function $e(C){const w=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");nt(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[fe]),w.__webglDepthbuffer[fe]=t.createRenderbuffer(),ot(w.__webglDepthbuffer[fe],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),ot(w.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(C,w,H){const fe=i.get(C);w!==void 0&&Ue(fe.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&$e(C)}function D(C){const w=C.texture,H=i.get(C),fe=i.get(w);C.addEventListener("dispose",F),C.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture()),fe.__version=w.version,o.memory.textures++);const pe=C.isWebGLCubeRenderTarget===!0,me=C.isWebGLMultipleRenderTargets===!0,Ke=g(C)||a;if(pe){H.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[Ce]=[];for(let ze=0;ze<w.mipmaps.length;ze++)H.__webglFramebuffer[Ce][ze]=t.createFramebuffer()}else H.__webglFramebuffer[Ce]=t.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)H.__webglFramebuffer[Ce]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(me)if(r.drawBuffers){const Ce=C.texture;for(let ze=0,rt=Ce.length;ze<rt;ze++){const pt=i.get(Ce[ze]);pt.__webglTexture===void 0&&(pt.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&oe(C)===!1){const Ce=me?w:[w];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ze=0;ze<Ce.length;ze++){const rt=Ce[ze];H.__webglColorRenderbuffer[ze]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ze]);const pt=s.convert(rt.format,rt.colorSpace),re=s.convert(rt.type),Et=y(rt.internalFormat,pt,re,rt.colorSpace,C.isXRRenderTarget===!0),Ge=ve(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Et,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,H.__webglColorRenderbuffer[ze])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),ot(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(pe){n.bindTexture(t.TEXTURE_CUBE_MAP,fe.__webglTexture),ee(t.TEXTURE_CUBE_MAP,w,Ke);for(let Ce=0;Ce<6;Ce++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)Ue(H.__webglFramebuffer[Ce][ze],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ze);else Ue(H.__webglFramebuffer[Ce],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);m(w,Ke)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){const Ce=C.texture;for(let ze=0,rt=Ce.length;ze<rt;ze++){const pt=Ce[ze],re=i.get(pt);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ee(t.TEXTURE_2D,pt,Ke),Ue(H.__webglFramebuffer,C,pt,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,0),m(pt,Ke)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let Ce=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?Ce=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ce,fe.__webglTexture),ee(Ce,w,Ke),a&&w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)Ue(H.__webglFramebuffer[ze],C,w,t.COLOR_ATTACHMENT0,Ce,ze);else Ue(H.__webglFramebuffer,C,w,t.COLOR_ATTACHMENT0,Ce,0);m(w,Ke)&&x(Ce),n.unbindTexture()}C.depthBuffer&&$e(C)}function se(C){const w=g(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let fe=0,pe=H.length;fe<pe;fe++){const me=H[fe];if(m(me,w)){const Ke=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(me).__webglTexture;n.bindTexture(Ke,Ce),x(Ke),n.unbindTexture()}}}function ae(C){if(a&&C.samples>0&&oe(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,fe=C.height;let pe=t.COLOR_BUFFER_BIT;const me=[],Ke=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(C),ze=C.isWebGLMultipleRenderTargets===!0;if(ze)for(let rt=0;rt<w.length;rt++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+rt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+rt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let rt=0;rt<w.length;rt++){me.push(t.COLOR_ATTACHMENT0+rt),C.depthBuffer&&me.push(Ke);const pt=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(pt===!1&&(C.depthBuffer&&(pe|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(pe|=t.STENCIL_BUFFER_BIT)),ze&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[rt]),pt===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ke]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ke])),ze){const re=i.get(w[rt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,H,fe,0,0,H,fe,pe,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,me)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ze)for(let rt=0;rt<w.length;rt++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+rt,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[rt]);const pt=i.get(w[rt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+rt,t.TEXTURE_2D,pt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function ve(C){return Math.min(r.maxSamples,C.samples)}function oe(C){const w=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function et(C){const w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function Oe(C,w){const H=C.colorSpace,fe=C.format,pe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===hh||H!==wr&&H!==Ei&&(Ft.getTransfer(H)===qt?a===!1?e.has("EXT_sRGB")===!0&&fe===zi?(C.format=hh,C.minFilter=Wn,C.generateMipmaps=!1):w=c_.sRGBToLinear(w):(fe!==zi||pe!==ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}this.allocateTextureUnit=I,this.resetTextureUnits=ie,this.setTexture2D=j,this.setTexture2DArray=ne,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=Ve,this.setupRenderTarget=D,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=oe}function I2(t,e,n){const i=n.isWebGL2;function r(s,o=Ei){let a;const l=Ft.getTransfer(o);if(s===ts)return t.UNSIGNED_BYTE;if(s===Qx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===e_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===nw)return t.BYTE;if(s===iw)return t.SHORT;if(s===xp)return t.UNSIGNED_SHORT;if(s===Jx)return t.INT;if(s===Vr)return t.UNSIGNED_INT;if(s===Gr)return t.FLOAT;if(s===cl)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rw)return t.ALPHA;if(s===zi)return t.RGBA;if(s===sw)return t.LUMINANCE;if(s===ow)return t.LUMINANCE_ALPHA;if(s===Cs)return t.DEPTH_COMPONENT;if(s===Xo)return t.DEPTH_STENCIL;if(s===hh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===aw)return t.RED;if(s===t_)return t.RED_INTEGER;if(s===lw)return t.RG;if(s===n_)return t.RG_INTEGER;if(s===i_)return t.RGBA_INTEGER;if(s===Ed||s===Td||s===bd||s===Ad)if(l===qt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ed)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Td)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ad)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ed)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Td)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ad)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rg||s===sg||s===og||s===ag)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===rg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===og)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ag)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===r_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===lg||s===cg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===lg)return l===qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===cg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ug||s===dg||s===fg||s===hg||s===pg||s===mg||s===gg||s===vg||s===xg||s===_g||s===yg||s===Sg||s===Mg||s===wg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ug)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_g)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wg)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cd||s===Eg||s===Tg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Cd)return l===qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Eg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Tg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cw||s===bg||s===Ag||s===Cg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Cd)return a.COMPRESSED_RED_RGTC1_EXT;if(s===bg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ag)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===As?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class D2 extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wr extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U2={type:"move"};class Kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),d=this._getHandJoint(c,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Wr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class O2 extends Ko{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const S=n.getContextAttributes();let g=null,d=null;const m=[],x=[],y=new Se;let L=null;const A=new ei;A.layers.enable(1),A.viewport=new Qt;const P=new ei;P.layers.enable(2),P.viewport=new Qt;const F=[A,P],E=new D2;E.layers.enable(1),E.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=m[ee];return ue===void 0&&(ue=new Kd,m[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=m[ee];return ue===void 0&&(ue=new Kd,m[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=m[ee];return ue===void 0&&(ue=new Kd,m[ee]=ue),ue.getHandSpace()};function $(ee){const ue=x.indexOf(ee.inputSource);if(ue===-1)return;const Le=m[ue];Le!==void 0&&(Le.update(ee.inputSource,ee.frame,c||o),Le.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ie(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",I);for(let ee=0;ee<m.length;ee++){const ue=x[ee];ue!==null&&(x[ee]=null,m[ee].disconnect(ue))}T=null,V=null,e.setRenderTarget(g),p=null,h=null,f=null,r=null,d=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",I),S.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Us(p.framebufferWidth,p.framebufferHeight,{format:zi,type:ts,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ue=null,Le=null,He=null;S.depth&&(He=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=S.stencil?Xo:Cs,Le=S.stencil?As:Vr);const Ue={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Us(h.textureWidth,h.textureHeight,{format:zi,type:ts,depthTexture:new __(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const ot=e.properties.get(d);ot.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(ee){for(let ue=0;ue<ee.removed.length;ue++){const Le=ee.removed[ue],He=x.indexOf(Le);He>=0&&(x[He]=null,m[He].disconnect(Le))}for(let ue=0;ue<ee.added.length;ue++){const Le=ee.added[ue];let He=x.indexOf(Le);if(He===-1){for(let ot=0;ot<m.length;ot++)if(ot>=x.length){x.push(Le),He=ot;break}else if(x[ot]===null){x[ot]=Le,He=ot;break}if(He===-1)break}const Ue=m[He];Ue&&Ue.connect(Le)}}const W=new O,j=new O;function ne(ee,ue,Le){W.setFromMatrixPosition(ue.matrixWorld),j.setFromMatrixPosition(Le.matrixWorld);const He=W.distanceTo(j),Ue=ue.projectionMatrix.elements,ot=Le.projectionMatrix.elements,nt=Ue[14]/(Ue[10]-1),$e=Ue[14]/(Ue[10]+1),Ve=(Ue[9]+1)/Ue[5],D=(Ue[9]-1)/Ue[5],se=(Ue[8]-1)/Ue[0],ae=(ot[8]+1)/ot[0],ve=nt*se,oe=nt*ae,et=He/(-se+ae),Oe=et*-se;ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Oe),ee.translateZ(et),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const C=nt+et,w=$e+et,H=ve-Oe,fe=oe+(He-Oe),pe=Ve*$e/w*C,me=D*$e/w*C;ee.projectionMatrix.makePerspective(H,fe,pe,me,C,w),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function B(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;E.near=P.near=A.near=ee.near,E.far=P.far=A.far=ee.far,(T!==E.near||V!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,V=E.far);const ue=ee.parent,Le=E.cameras;B(E,ue);for(let He=0;He<Le.length;He++)B(Le[He],ue);Le.length===2?ne(E,A,P):E.projectionMatrix.copy(A.projectionMatrix),Y(ee,E,ue)};function Y(ee,ue,Le){Le===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(Le.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ul*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)};let q=null;function le(ee,ue){if(u=ue.getViewerPose(c||o),v=ue,u!==null){const Le=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let He=!1;Le.length!==E.cameras.length&&(E.cameras.length=0,He=!0);for(let Ue=0;Ue<Le.length;Ue++){const ot=Le[Ue];let nt=null;if(p!==null)nt=p.getViewport(ot);else{const Ve=f.getViewSubImage(h,ot);nt=Ve.viewport,Ue===0&&(e.setRenderTargetTextures(d,Ve.colorTexture,h.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(d))}let $e=F[Ue];$e===void 0&&($e=new ei,$e.layers.enable(Ue),$e.viewport=new Qt,F[Ue]=$e),$e.matrix.fromArray(ot.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(ot.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(nt.x,nt.y,nt.width,nt.height),Ue===0&&(E.matrix.copy($e.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),He===!0&&E.cameras.push($e)}}for(let Le=0;Le<m.length;Le++){const He=x[Le],Ue=m[Le];He!==null&&Ue!==void 0&&Ue.update(He,ue,c||o)}q&&q(ee,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),v=null}const he=new x_;he.setAnimationLoop(le),this.setAnimationLoop=function(ee){q=ee},this.dispose=function(){}}}function F2(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,m_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,m,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),S(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,m,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Xn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Xn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const m=e.get(d).envMap;if(m&&(g.envMap.value=m,g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const x=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*x,n(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=x*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,m){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xn&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const m=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function k2(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,x){const y=x.program;i.uniformBlockBinding(m,y)}function c(m,x){let y=r[m.id];y===void 0&&(v(m),y=u(m),r[m.id]=y,m.addEventListener("dispose",g));const L=x.program;i.updateUBOMapping(m,L);const A=e.render.frame;s[m.id]!==A&&(h(m),s[m.id]=A)}function u(m){const x=f();m.__bindingPointIndex=x;const y=t.createBuffer(),L=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,L,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const x=r[m.id],y=m.uniforms,L=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,P=y.length;A<P;A++){const F=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,T=F.length;E<T;E++){const V=F[E];if(p(V,A,E,L)===!0){const $=V.__offset,ie=Array.isArray(V.value)?V.value:[V.value];let I=0;for(let W=0;W<ie.length;W++){const j=ie[W],ne=S(j);typeof j=="number"||typeof j=="boolean"?(V.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,$+I,V.__data)):j.isMatrix3?(V.__data[0]=j.elements[0],V.__data[1]=j.elements[1],V.__data[2]=j.elements[2],V.__data[3]=0,V.__data[4]=j.elements[3],V.__data[5]=j.elements[4],V.__data[6]=j.elements[5],V.__data[7]=0,V.__data[8]=j.elements[6],V.__data[9]=j.elements[7],V.__data[10]=j.elements[8],V.__data[11]=0):(j.toArray(V.__data,I),I+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,V.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,x,y,L){const A=m.value,P=x+"_"+y;if(L[P]===void 0)return typeof A=="number"||typeof A=="boolean"?L[P]=A:L[P]=A.clone(),!0;{const F=L[P];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return L[P]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function v(m){const x=m.uniforms;let y=0;const L=16;for(let P=0,F=x.length;P<F;P++){const E=Array.isArray(x[P])?x[P]:[x[P]];for(let T=0,V=E.length;T<V;T++){const $=E[T],ie=Array.isArray($.value)?$.value:[$.value];for(let I=0,W=ie.length;I<W;I++){const j=ie[I],ne=S(j),B=y%L;B!==0&&L-B<ne.boundary&&(y+=L-B),$.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=y,y+=ne.storage}}}const A=y%L;return A>0&&(y+=L-A),m.__size=y,m.__cache={},this}function S(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){const x=m.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Vc{constructor(e={}){const{canvas:n=Dw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),v=new Int32Array(4);let S=null,g=null;const d=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this._useLegacyLights=!1,this.toneMapping=es,this.toneMappingExposure=1;const x=this;let y=!1,L=0,A=0,P=null,F=-1,E=null;const T=new Qt,V=new Qt;let $=null;const ie=new wt(0);let I=0,W=n.width,j=n.height,ne=1,B=null,Y=null;const q=new Qt(0,0,W,j),le=new Qt(0,0,W,j);let he=!1;const ee=new wp;let ue=!1,Le=!1,He=null;const Ue=new rn,ot=new Se,nt=new O,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return P===null?ne:1}let D=i;function se(R,G){for(let K=0;K<R.length;K++){const J=R[K],Z=n.getContext(J,G);if(Z!==null)return Z}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gp}`),n.addEventListener("webglcontextlost",Te,!1),n.addEventListener("webglcontextrestored",k,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),D===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),D=se(G,R),D===null)throw se(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ae,ve,oe,et,Oe,C,w,H,fe,pe,me,Ke,Ce,ze,rt,pt,re,Et,Ge,at,Ye,je,lt,Rt;function At(){ae=new YT(D),ve=new VT(D,ae,e),ae.init(ve),je=new I2(D,ae,ve),oe=new L2(D,ae,ve),et=new KT(D),Oe=new v2,C=new N2(D,ae,oe,Oe,ve,je,et),w=new WT(x),H=new $T(x),fe=new s1(D,ve),lt=new BT(D,ae,fe,ve),pe=new qT(D,fe,et,lt),me=new tb(D,pe,fe,et),Ge=new eb(D,ve,C),pt=new GT(Oe),Ke=new g2(x,w,H,ae,ve,lt,pt),Ce=new F2(x,Oe),ze=new _2,rt=new T2(ae,ve),Et=new zT(x,w,H,oe,me,h,l),re=new P2(x,me,ve),Rt=new k2(D,et,ve,oe),at=new HT(D,ae,et,ve),Ye=new ZT(D,ae,et,ve),et.programs=Ke.programs,x.capabilities=ve,x.extensions=ae,x.properties=Oe,x.renderLists=ze,x.shadowMap=re,x.state=oe,x.info=et}At();const xt=new O2(x,D);this.xr=xt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(W,j,!1))},this.getSize=function(R){return R.set(W,j)},this.setSize=function(R,G,K=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,j=G,n.width=Math.floor(R*ne),n.height=Math.floor(G*ne),K===!0&&(n.style.width=R+"px",n.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(W*ne,j*ne).floor()},this.setDrawingBufferSize=function(R,G,K){W=R,j=G,ne=K,n.width=Math.floor(R*K),n.height=Math.floor(G*K),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(q)},this.setViewport=function(R,G,K,J){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,G,K,J),oe.viewport(T.copy(q).multiplyScalar(ne).floor())},this.getScissor=function(R){return R.copy(le)},this.setScissor=function(R,G,K,J){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,G,K,J),oe.scissor(V.copy(le).multiplyScalar(ne).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(R){oe.setScissorTest(he=R)},this.setOpaqueSort=function(R){B=R},this.setTransparentSort=function(R){Y=R},this.getClearColor=function(R){return R.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(R=!0,G=!0,K=!0){let J=0;if(R){let Z=!1;if(P!==null){const Fe=P.texture.format;Z=Fe===i_||Fe===n_||Fe===t_}if(Z){const Fe=P.texture.type,tt=Fe===ts||Fe===Vr||Fe===xp||Fe===As||Fe===Qx||Fe===e_,ut=Et.getClearColor(),ht=Et.getClearAlpha(),St=ut.r,mt=ut.g,_t=ut.b;tt?(p[0]=St,p[1]=mt,p[2]=_t,p[3]=ht,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=St,v[1]=mt,v[2]=_t,v[3]=ht,D.clearBufferiv(D.COLOR,0,v))}else J|=D.COLOR_BUFFER_BIT}G&&(J|=D.DEPTH_BUFFER_BIT),K&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",k,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),ze.dispose(),rt.dispose(),Oe.dispose(),w.dispose(),H.dispose(),me.dispose(),lt.dispose(),Rt.dispose(),Ke.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Wt),xt.removeEventListener("sessionend",Ut),He&&(He.dispose(),He=null),Sn.stop()};function Te(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=et.autoReset,G=re.enabled,K=re.autoUpdate,J=re.needsUpdate,Z=re.type;At(),et.autoReset=R,re.enabled=G,re.autoUpdate=K,re.needsUpdate=J,re.type=Z}function Ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ee(R){const G=R.target;G.removeEventListener("dispose",Ee),dt(G)}function dt(R){ct(R),Oe.remove(R)}function ct(R){const G=Oe.get(R).programs;G!==void 0&&(G.forEach(function(K){Ke.releaseProgram(K)}),R.isShaderMaterial&&Ke.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,K,J,Z,Fe){G===null&&(G=$e);const tt=Z.isMesh&&Z.matrixWorld.determinant()<0,ut=bl(R,G,K,J,Z);oe.setMaterial(J,tt);let ht=K.index,St=1;if(J.wireframe===!0){if(ht=pe.getWireframeAttribute(K),ht===void 0)return;St=2}const mt=K.drawRange,_t=K.attributes.position;let jt=mt.start*St,kn=(mt.start+mt.count)*St;Fe!==null&&(jt=Math.max(jt,Fe.start*St),kn=Math.min(kn,(Fe.start+Fe.count)*St)),ht!==null?(jt=Math.max(jt,0),kn=Math.min(kn,ht.count)):_t!=null&&(jt=Math.max(jt,0),kn=Math.min(kn,_t.count));const ln=kn-jt;if(ln<0||ln===1/0)return;lt.setup(Z,J,ut,K,ht);let Pi,Xt=at;if(ht!==null&&(Pi=fe.get(ht),Xt=Ye,Xt.setIndex(Pi)),Z.isMesh)J.wireframe===!0?(oe.setLineWidth(J.wireframeLinewidth*Ve()),Xt.setMode(D.LINES)):Xt.setMode(D.TRIANGLES);else if(Z.isLine){let yt=J.linewidth;yt===void 0&&(yt=1),oe.setLineWidth(yt*Ve()),Z.isLineSegments?Xt.setMode(D.LINES):Z.isLineLoop?Xt.setMode(D.LINE_LOOP):Xt.setMode(D.LINE_STRIP)}else Z.isPoints?Xt.setMode(D.POINTS):Z.isSprite&&Xt.setMode(D.TRIANGLES);if(Z.isBatchedMesh)Xt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Xt.renderInstances(jt,ln,Z.count);else if(K.isInstancedBufferGeometry){const yt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ea=Math.min(K.instanceCount,yt);Xt.renderInstances(jt,ln,ea)}else Xt.render(jt,ln)};function It(R,G,K){R.transparent===!0&&R.side===ui&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,Gi(R,G,K),R.side=ss,R.needsUpdate=!0,Gi(R,G,K),R.side=ui):Gi(R,G,K)}this.compile=function(R,G,K=null){K===null&&(K=R),g=rt.get(K),g.init(),m.push(g),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),R!==K&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights(x._useLegacyLights);const J=new Set;return R.traverse(function(Z){const Fe=Z.material;if(Fe)if(Array.isArray(Fe))for(let tt=0;tt<Fe.length;tt++){const ut=Fe[tt];It(ut,K,Z),J.add(ut)}else It(Fe,K,Z),J.add(Fe)}),m.pop(),g=null,J},this.compileAsync=function(R,G,K=null){const J=this.compile(R,G,K);return new Promise(Z=>{function Fe(){if(J.forEach(function(tt){Oe.get(tt).currentProgram.isReady()&&J.delete(tt)}),J.size===0){Z(R);return}setTimeout(Fe,10)}ae.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Lt=null;function Ht(R){Lt&&Lt(R)}function Wt(){Sn.stop()}function Ut(){Sn.start()}const Sn=new x_;Sn.setAnimationLoop(Ht),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(R){Lt=R,xt.setAnimationLoop(R),R===null?Sn.stop():Sn.start()},xt.addEventListener("sessionstart",Wt),xt.addEventListener("sessionend",Ut),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(G),G=xt.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,G,P),g=rt.get(R,m.length),g.init(),m.push(g),Ue.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ee.setFromProjectionMatrix(Ue),Le=this.localClippingEnabled,ue=pt.init(this.clippingPlanes,Le),S=ze.get(R,d.length),S.init(),d.push(S),vi(R,G,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(B,Y),this.info.render.frame++,ue===!0&&pt.beginShadows();const K=g.state.shadowsArray;if(re.render(K,R,G),ue===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Et.render(S,R),g.setupLights(x._useLegacyLights),G.isArrayCamera){const J=G.cameras;for(let Z=0,Fe=J.length;Z<Fe;Z++){const tt=J[Z];wl(S,R,tt,tt.viewport)}}else wl(S,R,G);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(x,R,G),lt.resetDefaultState(),F=-1,E=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,d.pop(),d.length>0?S=d[d.length-1]:S=null};function vi(R,G,K,J){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ee.intersectsSprite(R)){J&&nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ue);const tt=me.update(R),ut=R.material;ut.visible&&S.push(R,tt,ut,K,nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ee.intersectsObject(R))){const tt=me.update(R),ut=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),nt.copy(R.boundingSphere.center)):(tt.boundingSphere===null&&tt.computeBoundingSphere(),nt.copy(tt.boundingSphere.center)),nt.applyMatrix4(R.matrixWorld).applyMatrix4(Ue)),Array.isArray(ut)){const ht=tt.groups;for(let St=0,mt=ht.length;St<mt;St++){const _t=ht[St],jt=ut[_t.materialIndex];jt&&jt.visible&&S.push(R,tt,jt,K,nt.z,_t)}}else ut.visible&&S.push(R,tt,ut,K,nt.z,null)}}const Fe=R.children;for(let tt=0,ut=Fe.length;tt<ut;tt++)vi(Fe[tt],G,K,J)}function wl(R,G,K,J){const Z=R.opaque,Fe=R.transmissive,tt=R.transparent;g.setupLightsView(K),ue===!0&&pt.setGlobalState(x.clippingPlanes,K),Fe.length>0&&Ct(Z,Fe,G,K),J&&oe.viewport(T.copy(J)),Z.length>0&&Tr(Z,G,K),Fe.length>0&&Tr(Fe,G,K),tt.length>0&&Tr(tt,G,K),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Ct(R,G,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const Fe=ve.isWebGL2;He===null&&(He=new Us(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?cl:ts,minFilter:ll,samples:Fe?4:0})),x.getDrawingBufferSize(ot),Fe?He.setSize(ot.x,ot.y):He.setSize(yu(ot.x),yu(ot.y));const tt=x.getRenderTarget();x.setRenderTarget(He),x.getClearColor(ie),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const ut=x.toneMapping;x.toneMapping=es,Tr(R,K,J),C.updateMultisampleRenderTarget(He),C.updateRenderTargetMipmap(He);let ht=!1;for(let St=0,mt=G.length;St<mt;St++){const _t=G[St],jt=_t.object,kn=_t.geometry,ln=_t.material,Pi=_t.group;if(ln.side===ui&&jt.layers.test(J.layers)){const Xt=ln.side;ln.side=Xn,ln.needsUpdate=!0,El(jt,K,J,kn,ln,Pi),ln.side=Xt,ln.needsUpdate=!0,ht=!0}}ht===!0&&(C.updateMultisampleRenderTarget(He),C.updateRenderTargetMipmap(He)),x.setRenderTarget(tt),x.setClearColor(ie,I),x.toneMapping=ut}function Tr(R,G,K){const J=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,Fe=R.length;Z<Fe;Z++){const tt=R[Z],ut=tt.object,ht=tt.geometry,St=J===null?tt.material:J,mt=tt.group;ut.layers.test(K.layers)&&El(ut,G,K,ht,St,mt)}}function El(R,G,K,J,Z,Fe){R.onBeforeRender(x,G,K,J,Z,Fe),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(x,G,K,J,R,Fe),Z.transparent===!0&&Z.side===ui&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,x.renderBufferDirect(K,G,J,Z,R,Fe),Z.side=ss,Z.needsUpdate=!0,x.renderBufferDirect(K,G,J,Z,R,Fe),Z.side=ui):x.renderBufferDirect(K,G,J,Z,R,Fe),R.onAfterRender(x,G,K,J,Z,Fe)}function Gi(R,G,K){G.isScene!==!0&&(G=$e);const J=Oe.get(R),Z=g.state.lights,Fe=g.state.shadowsArray,tt=Z.state.version,ut=Ke.getParameters(R,Z.state,Fe,G,K),ht=Ke.getProgramCacheKey(ut);let St=J.programs;J.environment=R.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(R.isMeshStandardMaterial?H:w).get(R.envMap||J.environment),St===void 0&&(R.addEventListener("dispose",Ee),St=new Map,J.programs=St);let mt=St.get(ht);if(mt!==void 0){if(J.currentProgram===mt&&J.lightsStateVersion===tt)return Tl(R,ut),mt}else ut.uniforms=Ke.getUniforms(R),R.onBuild(K,ut,x),R.onBeforeCompile(ut,x),mt=Ke.acquireProgram(ut,ht),St.set(ht,mt),J.uniforms=ut.uniforms;const _t=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(_t.clippingPlanes=pt.uniform),Tl(R,ut),J.needsLights=Xu(R),J.lightsStateVersion=tt,J.needsLights&&(_t.ambientLightColor.value=Z.state.ambient,_t.lightProbe.value=Z.state.probe,_t.directionalLights.value=Z.state.directional,_t.directionalLightShadows.value=Z.state.directionalShadow,_t.spotLights.value=Z.state.spot,_t.spotLightShadows.value=Z.state.spotShadow,_t.rectAreaLights.value=Z.state.rectArea,_t.ltc_1.value=Z.state.rectAreaLTC1,_t.ltc_2.value=Z.state.rectAreaLTC2,_t.pointLights.value=Z.state.point,_t.pointLightShadows.value=Z.state.pointShadow,_t.hemisphereLights.value=Z.state.hemi,_t.directionalShadowMap.value=Z.state.directionalShadowMap,_t.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,_t.spotShadowMap.value=Z.state.spotShadowMap,_t.spotLightMatrix.value=Z.state.spotLightMatrix,_t.spotLightMap.value=Z.state.spotLightMap,_t.pointShadowMap.value=Z.state.pointShadowMap,_t.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=mt,J.uniformsList=null,mt}function Qo(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Hc.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Tl(R,G){const K=Oe.get(R);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function bl(R,G,K,J,Z){G.isScene!==!0&&(G=$e),C.resetTextureUnits();const Fe=G.fog,tt=J.isMeshStandardMaterial?G.environment:null,ut=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:wr,ht=(J.isMeshStandardMaterial?H:w).get(J.envMap||tt),St=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,mt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),_t=!!K.morphAttributes.position,jt=!!K.morphAttributes.normal,kn=!!K.morphAttributes.color;let ln=es;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ln=x.toneMapping);const Pi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Xt=Pi!==void 0?Pi.length:0,yt=Oe.get(J),ea=g.state.lights;if(ue===!0&&(Le===!0||R!==E)){const bn=R===E&&J.id===F;pt.setState(J,R,bn)}let $t=!1;J.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==ea.state.version||yt.outputColorSpace!==ut||Z.isBatchedMesh&&yt.batching===!1||!Z.isBatchedMesh&&yt.batching===!0||Z.isInstancedMesh&&yt.instancing===!1||!Z.isInstancedMesh&&yt.instancing===!0||Z.isSkinnedMesh&&yt.skinning===!1||!Z.isSkinnedMesh&&yt.skinning===!0||Z.isInstancedMesh&&yt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&yt.instancingColor===!1&&Z.instanceColor!==null||yt.envMap!==ht||J.fog===!0&&yt.fog!==Fe||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==pt.numPlanes||yt.numIntersection!==pt.numIntersection)||yt.vertexAlphas!==St||yt.vertexTangents!==mt||yt.morphTargets!==_t||yt.morphNormals!==jt||yt.morphColors!==kn||yt.toneMapping!==ln||ve.isWebGL2===!0&&yt.morphTargetsCount!==Xt)&&($t=!0):($t=!0,yt.__version=J.version);let rr=yt.currentProgram;$t===!0&&(rr=Gi(J,G,Z));let Al=!1,cs=!1,ta=!1;const mn=rr.getUniforms(),sr=yt.uniforms;if(oe.useProgram(rr.program)&&(Al=!0,cs=!0,ta=!0),J.id!==F&&(F=J.id,cs=!0),Al||E!==R){mn.setValue(D,"projectionMatrix",R.projectionMatrix),mn.setValue(D,"viewMatrix",R.matrixWorldInverse);const bn=mn.map.cameraPosition;bn!==void 0&&bn.setValue(D,nt.setFromMatrixPosition(R.matrixWorld)),ve.logarithmicDepthBuffer&&mn.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&mn.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,cs=!0,ta=!0)}if(Z.isSkinnedMesh){mn.setOptional(D,Z,"bindMatrix"),mn.setOptional(D,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(ve.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),mn.setValue(D,"boneTexture",bn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(mn.setOptional(D,Z,"batchingTexture"),mn.setValue(D,"batchingTexture",Z._matricesTexture,C));const na=K.morphAttributes;if((na.position!==void 0||na.normal!==void 0||na.color!==void 0&&ve.isWebGL2===!0)&&Ge.update(Z,K,rr),(cs||yt.receiveShadow!==Z.receiveShadow)&&(yt.receiveShadow=Z.receiveShadow,mn.setValue(D,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(sr.envMap.value=ht,sr.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),cs&&(mn.setValue(D,"toneMappingExposure",x.toneMappingExposure),yt.needsLights&&ju(sr,ta),Fe&&J.fog===!0&&Ce.refreshFogUniforms(sr,Fe),Ce.refreshMaterialUniforms(sr,J,ne,j,He),Hc.upload(D,Qo(yt),sr,C)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Hc.upload(D,Qo(yt),sr,C),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&mn.setValue(D,"center",Z.center),mn.setValue(D,"modelViewMatrix",Z.modelViewMatrix),mn.setValue(D,"normalMatrix",Z.normalMatrix),mn.setValue(D,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const bn=J.uniformsGroups;for(let br=0,Cl=bn.length;br<Cl;br++)if(ve.isWebGL2){const ia=bn[br];Rt.update(ia,rr),Rt.bind(ia,rr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rr}function ju(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Xu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,G,K){Oe.get(R.texture).__webglTexture=G,Oe.get(R.depthTexture).__webglTexture=K;const J=Oe.get(R);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){const K=Oe.get(R);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,K=0){P=R,L=G,A=K;let J=!0,Z=null,Fe=!1,tt=!1;if(R){const ht=Oe.get(R);ht.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(D.FRAMEBUFFER,null),J=!1):ht.__webglFramebuffer===void 0?C.setupRenderTarget(R):ht.__hasExternalTextures&&C.rebindTextures(R,Oe.get(R.texture).__webglTexture,Oe.get(R.depthTexture).__webglTexture);const St=R.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(tt=!0);const mt=Oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(mt[G])?Z=mt[G][K]:Z=mt[G],Fe=!0):ve.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?Z=Oe.get(R).__webglMultisampledFramebuffer:Array.isArray(mt)?Z=mt[K]:Z=mt,T.copy(R.viewport),V.copy(R.scissor),$=R.scissorTest}else T.copy(q).multiplyScalar(ne).floor(),V.copy(le).multiplyScalar(ne).floor(),$=he;if(oe.bindFramebuffer(D.FRAMEBUFFER,Z)&&ve.drawBuffers&&J&&oe.drawBuffers(R,Z),oe.viewport(T),oe.scissor(V),oe.setScissorTest($),Fe){const ht=Oe.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+G,ht.__webglTexture,K)}else if(tt){const ht=Oe.get(R.texture),St=G||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ht.__webglTexture,K||0,St)}F=-1},this.readRenderTargetPixels=function(R,G,K,J,Z,Fe,tt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=Oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&tt!==void 0&&(ut=ut[tt]),ut){oe.bindFramebuffer(D.FRAMEBUFFER,ut);try{const ht=R.texture,St=ht.format,mt=ht.type;if(St!==zi&&je.convert(St)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const _t=mt===cl&&(ae.has("EXT_color_buffer_half_float")||ve.isWebGL2&&ae.has("EXT_color_buffer_float"));if(mt!==ts&&je.convert(mt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(mt===Gr&&(ve.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!_t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-J&&K>=0&&K<=R.height-Z&&D.readPixels(G,K,J,Z,je.convert(St),je.convert(mt),Fe)}finally{const ht=P!==null?Oe.get(P).__webglFramebuffer:null;oe.bindFramebuffer(D.FRAMEBUFFER,ht)}}},this.copyFramebufferToTexture=function(R,G,K=0){const J=Math.pow(2,-K),Z=Math.floor(G.image.width*J),Fe=Math.floor(G.image.height*J);C.setTexture2D(G,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,R.x,R.y,Z,Fe),oe.unbindTexture()},this.copyTextureToTexture=function(R,G,K,J=0){const Z=G.image.width,Fe=G.image.height,tt=je.convert(K.format),ut=je.convert(K.type);C.setTexture2D(K,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,K.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,K.unpackAlignment),G.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,J,R.x,R.y,Z,Fe,tt,ut,G.image.data):G.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,J,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,tt,G.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,J,R.x,R.y,tt,ut,G.image),J===0&&K.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(R,G,K,J,Z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=R.max.x-R.min.x+1,tt=R.max.y-R.min.y+1,ut=R.max.z-R.min.z+1,ht=je.convert(J.format),St=je.convert(J.type);let mt;if(J.isData3DTexture)C.setTexture3D(J,0),mt=D.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)C.setTexture2DArray(J,0),mt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,J.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,J.unpackAlignment);const _t=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),kn=D.getParameter(D.UNPACK_SKIP_PIXELS),ln=D.getParameter(D.UNPACK_SKIP_ROWS),Pi=D.getParameter(D.UNPACK_SKIP_IMAGES),Xt=K.isCompressedTexture?K.mipmaps[Z]:K.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,R.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,R.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?D.texSubImage3D(mt,Z,G.x,G.y,G.z,Fe,tt,ut,ht,St,Xt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(mt,Z,G.x,G.y,G.z,Fe,tt,ut,ht,Xt.data)):D.texSubImage3D(mt,Z,G.x,G.y,G.z,Fe,tt,ut,ht,St,Xt),D.pixelStorei(D.UNPACK_ROW_LENGTH,_t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ln),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pi),Z===0&&J.generateMipmaps&&D.generateMipmap(mt),oe.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),oe.unbindTexture()},this.resetState=function(){L=0,A=0,P=null,oe.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===_p?"display-p3":"srgb",n.unpackColorSpace=Ft.workingColorSpace===Hu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Kt?Rs:s_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Rs?Kt:wr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class z2 extends Vc{}z2.prototype.isWebGL1Renderer=!0;class Ba{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new wt(e),this.near=n,this.far=i}clone(){return new Ba(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gc extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class B2{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=fh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=nr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new O;class Su{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.applyMatrix4(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.applyNormalMatrix(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.transformDirection(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}setX(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ji(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ji(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ji(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ji(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Ai(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Su(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class T_ extends Hs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ao;const xa=new O,lo=new O,co=new O,uo=new Se,_a=new Se,b_=new rn,_c=new O,ya=new O,yc=new O,m0=new Se,Jd=new Se,g0=new Se;class H2 extends Tn{constructor(e=new T_){if(super(),this.isSprite=!0,this.type="Sprite",ao===void 0){ao=new xn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new B2(n,5);ao.setIndex([0,1,2,0,2,3]),ao.setAttribute("position",new Su(i,3,0,!1)),ao.setAttribute("uv",new Su(i,2,3,!1))}this.geometry=ao,this.material=e,this.center=new Se(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lo.setFromMatrixScale(this.matrixWorld),b_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),co.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lo.multiplyScalar(-co.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Sc(_c.set(-.5,-.5,0),co,o,lo,r,s),Sc(ya.set(.5,-.5,0),co,o,lo,r,s),Sc(yc.set(.5,.5,0),co,o,lo,r,s),m0.set(0,0),Jd.set(1,0),g0.set(1,1);let a=e.ray.intersectTriangle(_c,ya,yc,!1,xa);if(a===null&&(Sc(ya.set(-.5,.5,0),co,o,lo,r,s),Jd.set(0,1),a=e.ray.intersectTriangle(_c,yc,ya,!1,xa),a===null))return;const l=e.ray.origin.distanceTo(xa);l<e.near||l>e.far||n.push({distance:l,point:xa.clone(),uv:wi.getInterpolation(xa,_c,ya,yc,m0,Jd,g0,new Se),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sc(t,e,n,i,r,s){uo.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(_a.x=s*uo.x-r*uo.y,_a.y=r*uo.x+s*uo.y):_a.copy(uo),t.copy(e),t.x+=_a.x,t.y+=_a.y,t.applyMatrix4(b_)}class Ha extends Hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const v0=new O,x0=new O,_0=new rn,Qd=new Sp,Mc=new Vu;class A_ extends Tn{constructor(e=new xn,n=new Ha){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)v0.fromBufferAttribute(n,r-1),x0.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=v0.distanceTo(x0);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mc.copy(i.boundingSphere),Mc.applyMatrix4(r),Mc.radius+=s,e.ray.intersectsSphere(Mc)===!1)return;_0.copy(r).invert(),Qd.copy(e.ray).applyMatrix4(_0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,f=new O,h=new O,p=this.isLineSegments?2:1,v=i.index,g=i.attributes.position;if(v!==null){const d=Math.max(0,o.start),m=Math.min(v.count,o.start+o.count);for(let x=d,y=m-1;x<y;x+=p){const L=v.getX(x),A=v.getX(x+1);if(c.fromBufferAttribute(g,L),u.fromBufferAttribute(g,A),Qd.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(h);F<e.near||F>e.far||n.push({distance:F,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),m=Math.min(g.count,o.start+o.count);for(let x=d,y=m-1;x<y;x+=p){if(c.fromBufferAttribute(g,x),u.fromBufferAttribute(g,x+1),Qd.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||n.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const y0=new O,S0=new O;class gh extends A_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)y0.fromBufferAttribute(n,r),S0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+y0.distanceTo(S0);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ef extends $n{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ir{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Se:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new O,r=[],s=[],o=[],a=new O,l=new rn;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Rn(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Rn(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bp extends ir{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new Se,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class V2 extends bp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ap(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const wc=new O,tf=new Ap,nf=new Ap,rf=new Ap;class G2 extends ir{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new O){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(wc.subVectors(r[0],r[1]).add(r[0]),c=wc);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(wc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=wc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),p),S=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(u),p);S<1e-4&&(S=1),v<1e-4&&(v=S),g<1e-4&&(g=S),tf.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,v,S,g),nf.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,v,S,g),rf.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,v,S,g)}else this.curveType==="catmullrom"&&(tf.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),nf.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),rf.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(tf.calc(l),nf.calc(l),rf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function M0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function W2(t,e){const n=1-t;return n*n*e}function j2(t,e){return 2*(1-t)*t*e}function X2(t,e){return t*t*e}function Va(t,e,n,i){return W2(t,e)+j2(t,n)+X2(t,i)}function $2(t,e){const n=1-t;return n*n*n*e}function Y2(t,e){const n=1-t;return 3*n*n*t*e}function q2(t,e){return 3*(1-t)*t*t*e}function Z2(t,e){return t*t*t*e}function Ga(t,e,n,i,r){return $2(t,e)+Y2(t,n)+q2(t,i)+Z2(t,r)}class C_ extends ir{constructor(e=new Se,n=new Se,i=new Se,r=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Se){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ga(e,r.x,s.x,o.x,a.x),Ga(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class K2 extends ir{constructor(e=new O,n=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ga(e,r.x,s.x,o.x,a.x),Ga(e,r.y,s.y,o.y,a.y),Ga(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R_ extends ir{constructor(e=new Se,n=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Se){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Se){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class J2 extends ir{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P_ extends ir{constructor(e=new Se,n=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Se){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Va(e,r.x,s.x,o.x),Va(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Q2 extends ir{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Va(e,r.x,s.x,o.x),Va(e,r.y,s.y,o.y),Va(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L_ extends ir{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Se){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(M0(a,l.x,c.x,u.x,f.x),M0(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Se().fromArray(r))}return this}}var vh=Object.freeze({__proto__:null,ArcCurve:V2,CatmullRomCurve3:G2,CubicBezierCurve:C_,CubicBezierCurve3:K2,EllipseCurve:bp,LineCurve:R_,LineCurve3:J2,QuadraticBezierCurve:P_,QuadraticBezierCurve3:Q2,SplineCurve:L_});class eA extends ir{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new vh[r.type]().fromJSON(r))}return this}}class w0 extends eA{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new R_(this.currentPoint.clone(),new Se(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new P_(this.currentPoint.clone(),new Se(e,n),new Se(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new C_(this.currentPoint.clone(),new Se(e,n),new Se(i,r),new Se(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new L_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new bp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fs extends xn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let v=0;const S=[],g=i/2;let d=0;m(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new kt(f,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(p,2));function m(){const y=new O,L=new O;let A=0;const P=(n-e)/i;for(let F=0;F<=s;F++){const E=[],T=F/s,V=T*(n-e)+e;for(let $=0;$<=r;$++){const ie=$/r,I=ie*l+a,W=Math.sin(I),j=Math.cos(I);L.x=V*W,L.y=-T*i+g,L.z=V*j,f.push(L.x,L.y,L.z),y.set(W,P,j).normalize(),h.push(y.x,y.y,y.z),p.push(ie,1-T),E.push(v++)}S.push(E)}for(let F=0;F<r;F++)for(let E=0;E<s;E++){const T=S[E][F],V=S[E+1][F],$=S[E+1][F+1],ie=S[E][F+1];u.push(T,V,ie),u.push(V,$,ie),A+=6}c.addGroup(d,A,0),d+=A}function x(y){const L=v,A=new Se,P=new O;let F=0;const E=y===!0?e:n,T=y===!0?1:-1;for(let $=1;$<=r;$++)f.push(0,g*T,0),h.push(0,T,0),p.push(.5,.5),v++;const V=v;for(let $=0;$<=r;$++){const I=$/r*l+a,W=Math.cos(I),j=Math.sin(I);P.x=E*j,P.y=g*T,P.z=E*W,f.push(P.x,P.y,P.z),h.push(0,T,0),A.x=W*.5+.5,A.y=j*.5*T+.5,p.push(A.x,A.y),v++}for(let $=0;$<r;$++){const ie=L+$,I=V+$;y===!0?u.push(I,I+1,ie):u.push(I+1,I,ie),F+=3}c.addGroup(d,F,y===!0?1:2),d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cp extends Fs{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Cp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rp extends xn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new kt(s,3)),this.setAttribute("normal",new kt(s.slice(),3)),this.setAttribute("uv",new kt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const x=new O,y=new O,L=new O;for(let A=0;A<n.length;A+=3)p(n[A+0],x),p(n[A+1],y),p(n[A+2],L),l(x,y,L,m)}function l(m,x,y,L){const A=L+1,P=[];for(let F=0;F<=A;F++){P[F]=[];const E=m.clone().lerp(y,F/A),T=x.clone().lerp(y,F/A),V=A-F;for(let $=0;$<=V;$++)$===0&&F===A?P[F][$]=E:P[F][$]=E.clone().lerp(T,$/V)}for(let F=0;F<A;F++)for(let E=0;E<2*(A-F)-1;E++){const T=Math.floor(E/2);E%2===0?(h(P[F][T+1]),h(P[F+1][T]),h(P[F][T])):(h(P[F][T+1]),h(P[F+1][T+1]),h(P[F+1][T]))}}function c(m){const x=new O;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(m),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function u(){const m=new O;for(let x=0;x<s.length;x+=3){m.x=s[x+0],m.y=s[x+1],m.z=s[x+2];const y=g(m)/2/Math.PI+.5,L=d(m)/Math.PI+.5;o.push(y,1-L)}v(),f()}function f(){for(let m=0;m<o.length;m+=6){const x=o[m+0],y=o[m+2],L=o[m+4],A=Math.max(x,y,L),P=Math.min(x,y,L);A>.9&&P<.1&&(x<.2&&(o[m+0]+=1),y<.2&&(o[m+2]+=1),L<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,x){const y=m*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function v(){const m=new O,x=new O,y=new O,L=new O,A=new Se,P=new Se,F=new Se;for(let E=0,T=0;E<s.length;E+=9,T+=6){m.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),A.set(o[T+0],o[T+1]),P.set(o[T+2],o[T+3]),F.set(o[T+4],o[T+5]),L.copy(m).add(x).add(y).divideScalar(3);const V=g(L);S(A,T+0,m,V),S(P,T+2,x,V),S(F,T+4,y,V)}}function S(m,x,y,L){L<0&&m.x===1&&(o[x]=m.x-1),y.x===0&&y.z===0&&(o[x]=L/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rp(e.vertices,e.indices,e.radius,e.details)}}class Ss extends w0{constructor(e){super(e),this.uuid=nr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new w0().fromJSON(r))}return this}}const tA={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=N_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,p;if(i&&(s=oA(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let v=n;v<r;v+=n)f=t[v],h=t[v+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return fl(s,o,n,a,l,p,0),o}};function N_(t,e,n,i,r){let s,o;if(r===vA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=E0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=E0(s,t[s],t[s+1],o);return o&&Wu(o,o.next)&&(pl(o),o=o.next),o}function ks(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Wu(n,n.next)||tn(n.prev,n,n.next)===0)){if(pl(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function fl(t,e,n,i,r,s,o){if(!t)return;!o&&s&&dA(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?iA(t,i,r,s):nA(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),pl(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=rA(ks(t),e,n),fl(t,e,n,i,r,s,2)):o===2&&sA(t,e,n,i,r,s):fl(ks(t),e,n,i,r,s,1);break}}}function nA(t){const e=t.prev,n=t,i=t.next;if(tn(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=h&&v.y>=f&&v.y<=p&&Co(r,a,s,l,o,c,v.x,v.y)&&tn(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function iA(t,e,n,i){const r=t.prev,s=t,o=t.next;if(tn(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,v=u<f?u<h?u:h:f<h?f:h,S=a>l?a>c?a:c:l>c?l:c,g=u>f?u>h?u:h:f>h?f:h,d=xh(p,v,e,n,i),m=xh(S,g,e,n,i);let x=t.prevZ,y=t.nextZ;for(;x&&x.z>=d&&y&&y.z<=m;){if(x.x>=p&&x.x<=S&&x.y>=v&&x.y<=g&&x!==r&&x!==o&&Co(a,u,l,f,c,h,x.x,x.y)&&tn(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=S&&y.y>=v&&y.y<=g&&y!==r&&y!==o&&Co(a,u,l,f,c,h,y.x,y.y)&&tn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=S&&x.y>=v&&x.y<=g&&x!==r&&x!==o&&Co(a,u,l,f,c,h,x.x,x.y)&&tn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=m;){if(y.x>=p&&y.x<=S&&y.y>=v&&y.y<=g&&y!==r&&y!==o&&Co(a,u,l,f,c,h,y.x,y.y)&&tn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function rA(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Wu(r,s)&&I_(r,i,i.next,s)&&hl(r,s)&&hl(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),pl(i),pl(i.next),i=t=s),i=i.next}while(i!==t);return ks(i)}function sA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pA(o,a)){let l=D_(o,a);o=ks(o,o.next),l=ks(l,l.next),fl(o,e,n,i,r,s,0),fl(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function oA(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=N_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(hA(c));for(r.sort(aA),s=0;s<r.length;s++)n=lA(r[s],n);return n}function aA(t,e){return t.x-e.x}function lA(t,e){const n=cA(t,e);if(!n)return e;const i=D_(n,t);return ks(i,i.next),ks(n,n.next)}function cA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Co(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),hl(n,t)&&(f<u||f===u&&(n.x>r.x||n.x===r.x&&uA(r,n)))&&(r=n,u=f)),n=n.next;while(n!==a);return r}function uA(t,e){return tn(t.prev,t,e.prev)<0&&tn(e.next,t,t.next)<0}function dA(t,e,n,i){let r=t;do r.z===0&&(r.z=xh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,fA(r)}function fA(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function xh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function hA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Co(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function pA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!mA(t,e)&&(hl(t,e)&&hl(e,t)&&gA(t,e)&&(tn(t.prev,t,e.prev)||tn(t,e.prev,e))||Wu(t,e)&&tn(t.prev,t,t.next)>0&&tn(e.prev,e,e.next)>0)}function tn(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Wu(t,e){return t.x===e.x&&t.y===e.y}function I_(t,e,n,i){const r=Tc(tn(t,e,n)),s=Tc(tn(t,e,i)),o=Tc(tn(n,i,t)),a=Tc(tn(n,i,e));return!!(r!==s&&o!==a||r===0&&Ec(t,n,e)||s===0&&Ec(t,i,e)||o===0&&Ec(n,t,i)||a===0&&Ec(n,e,i))}function Ec(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Tc(t){return t>0?1:t<0?-1:0}function mA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&I_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function hl(t,e){return tn(t.prev,t,t.next)<0?tn(t,e,t.next)>=0&&tn(t,t.prev,e)>=0:tn(t,e,t.prev)<0||tn(t,t.next,e)<0}function gA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function D_(t,e){const n=new _h(t.i,t.x,t.y),i=new _h(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function E0(t,e,n,i){const r=new _h(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function pl(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function _h(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class ns{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ns.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];T0(e),b0(i,e);let o=e.length;n.forEach(T0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,b0(i,n[l]);const a=tA.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function T0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function b0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Wa extends xn{constructor(e=new Ss([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new kt(r,3)),this.setAttribute("uv",new kt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,v=n.bevelSize!==void 0?n.bevelSize:p-.1,S=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:xA;let x,y=!1,L,A,P,F;d&&(x=d.getSpacedPoints(u),y=!0,h=!1,L=d.computeFrenetFrames(u,!1),A=new O,P=new O,F=new O),h||(g=0,p=0,v=0,S=0);const E=a.extractPoints(c);let T=E.shape;const V=E.holes;if(!ns.isClockWise(T)){T=T.reverse();for(let D=0,se=V.length;D<se;D++){const ae=V[D];ns.isClockWise(ae)&&(V[D]=ae.reverse())}}const ie=ns.triangulateShape(T,V),I=T;for(let D=0,se=V.length;D<se;D++){const ae=V[D];T=T.concat(ae)}function W(D,se,ae){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(se,ae)}const j=T.length,ne=ie.length;function B(D,se,ae){let ve,oe,et;const Oe=D.x-se.x,C=D.y-se.y,w=ae.x-D.x,H=ae.y-D.y,fe=Oe*Oe+C*C,pe=Oe*H-C*w;if(Math.abs(pe)>Number.EPSILON){const me=Math.sqrt(fe),Ke=Math.sqrt(w*w+H*H),Ce=se.x-C/me,ze=se.y+Oe/me,rt=ae.x-H/Ke,pt=ae.y+w/Ke,re=((rt-Ce)*H-(pt-ze)*w)/(Oe*H-C*w);ve=Ce+Oe*re-D.x,oe=ze+C*re-D.y;const Et=ve*ve+oe*oe;if(Et<=2)return new Se(ve,oe);et=Math.sqrt(Et/2)}else{let me=!1;Oe>Number.EPSILON?w>Number.EPSILON&&(me=!0):Oe<-Number.EPSILON?w<-Number.EPSILON&&(me=!0):Math.sign(C)===Math.sign(H)&&(me=!0),me?(ve=-C,oe=Oe,et=Math.sqrt(fe)):(ve=Oe,oe=C,et=Math.sqrt(fe/2))}return new Se(ve/et,oe/et)}const Y=[];for(let D=0,se=I.length,ae=se-1,ve=D+1;D<se;D++,ae++,ve++)ae===se&&(ae=0),ve===se&&(ve=0),Y[D]=B(I[D],I[ae],I[ve]);const q=[];let le,he=Y.concat();for(let D=0,se=V.length;D<se;D++){const ae=V[D];le=[];for(let ve=0,oe=ae.length,et=oe-1,Oe=ve+1;ve<oe;ve++,et++,Oe++)et===oe&&(et=0),Oe===oe&&(Oe=0),le[ve]=B(ae[ve],ae[et],ae[Oe]);q.push(le),he=he.concat(le)}for(let D=0;D<g;D++){const se=D/g,ae=p*Math.cos(se*Math.PI/2),ve=v*Math.sin(se*Math.PI/2)+S;for(let oe=0,et=I.length;oe<et;oe++){const Oe=W(I[oe],Y[oe],ve);Ue(Oe.x,Oe.y,-ae)}for(let oe=0,et=V.length;oe<et;oe++){const Oe=V[oe];le=q[oe];for(let C=0,w=Oe.length;C<w;C++){const H=W(Oe[C],le[C],ve);Ue(H.x,H.y,-ae)}}}const ee=v+S;for(let D=0;D<j;D++){const se=h?W(T[D],he[D],ee):T[D];y?(P.copy(L.normals[0]).multiplyScalar(se.x),A.copy(L.binormals[0]).multiplyScalar(se.y),F.copy(x[0]).add(P).add(A),Ue(F.x,F.y,F.z)):Ue(se.x,se.y,0)}for(let D=1;D<=u;D++)for(let se=0;se<j;se++){const ae=h?W(T[se],he[se],ee):T[se];y?(P.copy(L.normals[D]).multiplyScalar(ae.x),A.copy(L.binormals[D]).multiplyScalar(ae.y),F.copy(x[D]).add(P).add(A),Ue(F.x,F.y,F.z)):Ue(ae.x,ae.y,f/u*D)}for(let D=g-1;D>=0;D--){const se=D/g,ae=p*Math.cos(se*Math.PI/2),ve=v*Math.sin(se*Math.PI/2)+S;for(let oe=0,et=I.length;oe<et;oe++){const Oe=W(I[oe],Y[oe],ve);Ue(Oe.x,Oe.y,f+ae)}for(let oe=0,et=V.length;oe<et;oe++){const Oe=V[oe];le=q[oe];for(let C=0,w=Oe.length;C<w;C++){const H=W(Oe[C],le[C],ve);y?Ue(H.x,H.y+x[u-1].y,x[u-1].x+ae):Ue(H.x,H.y,f+ae)}}}ue(),Le();function ue(){const D=r.length/3;if(h){let se=0,ae=j*se;for(let ve=0;ve<ne;ve++){const oe=ie[ve];ot(oe[2]+ae,oe[1]+ae,oe[0]+ae)}se=u+g*2,ae=j*se;for(let ve=0;ve<ne;ve++){const oe=ie[ve];ot(oe[0]+ae,oe[1]+ae,oe[2]+ae)}}else{for(let se=0;se<ne;se++){const ae=ie[se];ot(ae[2],ae[1],ae[0])}for(let se=0;se<ne;se++){const ae=ie[se];ot(ae[0]+j*u,ae[1]+j*u,ae[2]+j*u)}}i.addGroup(D,r.length/3-D,0)}function Le(){const D=r.length/3;let se=0;He(I,se),se+=I.length;for(let ae=0,ve=V.length;ae<ve;ae++){const oe=V[ae];He(oe,se),se+=oe.length}i.addGroup(D,r.length/3-D,1)}function He(D,se){let ae=D.length;for(;--ae>=0;){const ve=ae;let oe=ae-1;oe<0&&(oe=D.length-1);for(let et=0,Oe=u+g*2;et<Oe;et++){const C=j*et,w=j*(et+1),H=se+ve+C,fe=se+oe+C,pe=se+oe+w,me=se+ve+w;nt(H,fe,pe,me)}}}function Ue(D,se,ae){l.push(D),l.push(se),l.push(ae)}function ot(D,se,ae){$e(D),$e(se),$e(ae);const ve=r.length/3,oe=m.generateTopUV(i,r,ve-3,ve-2,ve-1);Ve(oe[0]),Ve(oe[1]),Ve(oe[2])}function nt(D,se,ae,ve){$e(D),$e(se),$e(ve),$e(se),$e(ae),$e(ve);const oe=r.length/3,et=m.generateSideWallUV(i,r,oe-6,oe-3,oe-2,oe-1);Ve(et[0]),Ve(et[1]),Ve(et[3]),Ve(et[1]),Ve(et[2]),Ve(et[3])}function $e(D){r.push(l[D*3+0]),r.push(l[D*3+1]),r.push(l[D*3+2])}function Ve(D){s.push(D.x),s.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return _A(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new vh[r.type]().fromJSON(r)),new Wa(i,e.options)}}const xA={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Se(s,o),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],v=e[r*3+2],S=e[s*3],g=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-f),new Se(h,1-v),new Se(S,1-d)]:[new Se(a,1-l),new Se(u,1-f),new Se(p,1-v),new Se(g,1-d)]}};function _A(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Mu extends Rp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Mu(e.radius,e.detail)}}class wu extends xn{constructor(e=new Ss([new Se(0,.5),new Se(-.5,-.5),new Se(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(s,3)),this.setAttribute("uv",new kt(o,2));function c(u){const f=r.length/3,h=u.extractPoints(n);let p=h.shape;const v=h.holes;ns.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,d=v.length;g<d;g++){const m=v[g];ns.isClockWise(m)===!0&&(v[g]=m.reverse())}const S=ns.triangulateShape(p,v);for(let g=0,d=v.length;g<d;g++){const m=v[g];p=p.concat(m)}for(let g=0,d=p.length;g<d;g++){const m=p[g];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let g=0,d=S.length;g<d;g++){const m=S[g],x=m[0]+f,y=m[1]+f,L=m[2]+f;i.push(x,y,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return yA(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new wu(i,e.curveSegments)}}function yA(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class Pp extends xn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new O,h=new O,p=[],v=[],S=[],g=[];for(let d=0;d<=i;d++){const m=[],x=d/i;let y=0;d===0&&o===0?y=.5/n:d===i&&l===Math.PI&&(y=-.5/n);for(let L=0;L<=n;L++){const A=L/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),g.push(A+y,1-x),m.push(c++)}u.push(m)}for(let d=0;d<i;d++)for(let m=0;m<n;m++){const x=u[d][m+1],y=u[d][m],L=u[d+1][m],A=u[d+1][m+1];(d!==0||o>0)&&p.push(x,y,A),(d!==i-1||l<Math.PI)&&p.push(y,L,A)}this.setIndex(p),this.setAttribute("position",new kt(v,3)),this.setAttribute("normal",new kt(S,3)),this.setAttribute("uv",new kt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fn extends Hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=o_,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const yh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class SA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const MA=new SA;class Lp{constructor(e){this.manager=e!==void 0?e:MA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Lp.DEFAULT_MATERIAL_NAME="__DEFAULT";class wA extends Lp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=yh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=dl("img");function l(){u(),yh.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class bc extends Lp{constructor(e){super(e)}load(e,n,i,r){const s=new $n,o=new wA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Np extends Tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const sf=new rn,A0=new O,C0=new O;class U_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wp,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;A0.setFromMatrixPosition(e.matrixWorld),n.position.copy(A0),C0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(C0),n.updateMatrixWorld(),sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const R0=new rn,Sa=new O,of=new O;class EA extends U_{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Sa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Sa),of.copy(i.position),of.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(of),i.updateMatrixWorld(),r.makeTranslation(-Sa.x,-Sa.y,-Sa.z),R0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(R0)}}class TA extends Np{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new EA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bA extends U_{constructor(){super(new Ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class af extends Np{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new bA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lf extends Np{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class AA{constructor(e,n,i=0,r=1/0){this.ray=new Sp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Mp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Sh(e,this,i,n),i.sort(P0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Sh(e[r],this,i,n);return i.sort(P0),i}}function P0(t,e){return t.distance-e.distance}function Sh(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Sh(r[s],e,n,!0)}}class CA extends gh{constructor(e=10,n=10,i=4473924,r=8947848){i=new wt(i),r=new wt(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,v=-a;h<=n;h++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const S=h===s?i:r;S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3}const u=new xn;u.setAttribute("position",new kt(l,3)),u.setAttribute("color",new kt(c,3));const f=new Ha({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);class cf extends Gc{constructor(e=null){super();const n=new dn;n.deleteAttribute("uv");const i=new fn({side:Xn}),r=new fn;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const o=new TA(16777215,s,28,2);o.position.set(.418,16.199,.3),this.add(o);const a=new Ze(n,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const l=new Ze(n,r);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new Ze(n,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const u=new Ze(n,r);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const f=new Ze(n,r);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);const h=new Ze(n,r);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const p=new Ze(n,r);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const v=new Ze(n,fo(50));v.position.set(-16.116,14.37,8.208),v.scale.set(.1,2.428,2.739),this.add(v);const S=new Ze(n,fo(50));S.position.set(-16.109,18.021,-8.207),S.scale.set(.1,2.425,2.751),this.add(S);const g=new Ze(n,fo(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const d=new Ze(n,fo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const m=new Ze(n,fo(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const x=new Ze(n,fo(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function fo(t){const e=new Qi;return e.color.setScalar(t),e}/**
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
 */const LA=Ie.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>Ie.createElement("svg",{ref:l,...PA,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:O_("lucide",r),...a},[...o.map(([c,u])=>Ie.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=(t,e)=>{const n=Ie.forwardRef(({className:i,...r},s)=>Ie.createElement(LA,{ref:s,iconNode:e,className:O_(`lucide-${RA(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Ac=pn("Camera",NA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],DA=pn("Car",IA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],L0=pn("Download",UA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],FA=pn("FolderOpen",OA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],N0=pn("Image",kA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],BA=pn("Layers",zA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],VA=pn("LockOpen",HA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],WA=pn("Lock",GA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],XA=pn("Map",jA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],YA=pn("Move",$A);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],I0=pn("Plus",qA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],KA=pn("Redo",ZA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],QA=pn("Save",JA);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],tC=pn("Square",eC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],D0=pn("Trash2",nC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],rC=pn("Trees",iC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],oC=pn("Type",sC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],lC=pn("Undo",aC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],uC=pn("Upload",cC);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],uf=pn("X",dC),ho=()=>Math.random().toString(36).substr(2,9),An={camera:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899"],building:["#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b"],tree:["#22c55e","#16a34a","#15803d","#14532d","#84cc16","#bef264"],parking:["#e2e8f0","#cbd5e1","#94a3b8","#f8fafc","#ffffff","#f1f5f9"],label:["#1e293b","#334155","#475569","#64748b","#ef4444","#3b82f6"]},df={width:1e3,height:700},Jn=(t,e,n)=>Math.min(Math.max(t,e),n),ff=t=>{let e=t%360;return e>180&&(e-=360),e<-180&&(e+=360),e},Cc=(t,e)=>[{x:-t/2,y:-e/2},{x:t/2,y:-e/2},{x:t/2,y:e/2},{x:-t/2,y:e/2}],fC=t=>{const e=t.map(a=>a.x),n=t.map(a=>a.y),i=Math.min(...e),r=Math.max(...e),s=Math.min(...n),o=Math.max(...n);return{minX:i,maxX:r,minY:s,maxY:o,width:r-i,height:o-s}},hf=t=>{const e=new Wr,n=t.width,i=t.height,r=12,s=3,o=t.color,l=t.id.split("").reduce(($,ie)=>$+ie.charCodeAt(0),0)%4,c=new fn({color:o,roughness:.2,metalness:.3,flatShading:!0}),u=new fn({color:"#1e293b",roughness:.1,metalness:.9,flatShading:!0}),f=new fn({color:"#171717",roughness:.5,flatShading:!0}),h=new Fs(s,s,n*.15,12);h.rotateZ(Math.PI/2);const p=i*.35,v=n*.45;(()=>{[-1,1].forEach($=>{[-1,1].forEach(ie=>{const I=new Ze(h,f);I.position.set($*v,s,ie*p),I.castShadow=!0,e.add(I)})})})();const g=s+1;if(l===1){const $=r*.9,ie=new Ze(new dn(n,$,i),c);ie.position.y=g+$/2,ie.castShadow=!0,ie.receiveShadow=!0,e.add(ie);const I=r*.7,W=i*.8,j=n*.85,ne=new Ze(new dn(j,I,W),c);ne.position.y=g+$+I/2-2,ne.castShadow=!0,e.add(ne);const B=new Ze(new dn(j+.2,I*.7,W*.9),u);B.position.copy(ne.position),e.add(B)}else if(l===2){const $=i*.35,ie=i*.6,I=r*1.5,W=new Ze(new dn(n,r*.6,i),c);W.position.y=g+r*.3,W.castShadow=!0,e.add(W);const j=new Ze(new dn(n*.95,I,$),c);j.position.set(0,g+r*.3+I/2,-i/2+$/2+2),j.castShadow=!0,e.add(j);const ne=new Ze(new dn(n+.1,I*.5,$*.7),u);ne.position.copy(j.position),ne.position.y+=2,e.add(ne);const B=4,Y=new Ze(new dn(n*.95,B,ie),c);Y.position.set(0,g+r*.6+B/2,i/2-ie/2),e.add(Y)}else if(l===3){const $=r*.7,ie=new Ze(new dn(n,$,i),c);ie.position.y=g+$/2,ie.castShadow=!0,e.add(ie);const I=r*.5,W=i*.5,j=new Ze(new dn(n*.7,I,W),c);j.position.y=g+$+I/2-1,e.add(j);const ne=new Ze(new dn(n*.72,I*.8,W*.8),u);ne.position.copy(j.position),e.add(ne)}else{const $=r*.6,ie=new Ze(new dn(n,$,i),c);ie.position.y=g+$/2,ie.castShadow=!0,e.add(ie);const I=r*.8,W=i*.5,j=new Ze(new dn(n*.85,I,W),c);j.position.y=g+$+I/2-1,j.castShadow=!0,e.add(j);const ne=new Ze(new dn(n*.9,I*.8,W*.9),u);ne.position.copy(j.position),e.add(ne)}const d=new yi(3,2),m=new Qi({color:"#fef3c7"}),x=new Qi({color:"#ef4444"}),y=-i/2-.1,L=i/2+.1,A=g+r*.6,P=n*.35,F=new Ze(d,m);F.position.set(-P,A,y),F.rotation.y=Math.PI,e.add(F);const E=new Ze(d,m);E.position.set(P,A,y),E.rotation.y=Math.PI,e.add(E);const T=new Ze(d,x);T.position.set(-P,A,L),e.add(T);const V=new Ze(d,x);return V.position.set(P,A,L),e.add(V),e.position.set(t.x,0,t.y),e.rotation.y=-un.degToRad(t.rotation),e},pf=t=>{const e=new Wr,n=t.id.split("").reduce((f,h)=>f+h.charCodeAt(0),0),i=n%2===0,r=t.radius*.25,s=i?t.radius*2:t.radius*1.5,o=new Fs(r*.6,r,s,6),a=new fn({color:"#4a3728",roughness:1,flatShading:!0}),l=new Ze(o,a);l.position.y=s/2,l.castShadow=!0,l.receiveShadow=!0,e.add(l);const c=i?"#1e4620":t.color,u=new fn({color:c,roughness:.8,flatShading:!0});if(i){const h=t.radius,p=t.radius*2.5/4;for(let v=0;v<4;v++){const S=v/3,g=h*(1-S*.6),d=s*.3+v*(p*.8),m=new Ze(new Cp(g,p*1.5,7),u);m.position.y=d,m.castShadow=!0,m.receiveShadow=!0,e.add(m)}}else{const f=new Mu(t.radius*.8,0),h=new Ze(f,u);h.position.y=s+t.radius*.2,h.castShadow=!0,h.receiveShadow=!0,e.add(h);const p=10;for(let v=0;v<p;v++){const g=(n+v*13)%100/100*Math.PI*2,d=(n+v*7)%100/100*Math.PI,m=t.radius*(.3+(n+v*3)%5/10),x=t.radius*.7,y=new Ze(new Mu(m,0),u);y.position.set(Math.sin(d)*Math.cos(g)*x,h.position.y+Math.cos(d)*x*.8,Math.sin(d)*Math.sin(g)*x),y.castShadow=!0,e.add(y)}}return e.position.set(t.x,0,t.y),e},hC=(t,e,n)=>{const i=fC(t);if(i.width===0||i.height===0)return t;const r={x:(i.minX+i.maxX)/2,y:(i.minY+i.maxY)/2},s=e/i.width,o=n/i.height;return t.map(a=>({x:r.x+(a.x-r.x)*s,y:r.y+(a.y-r.y)*o}))},pC=t=>{if(t.length<2)return t;let e=0,n=0;for(let o=0;o<t.length;o+=1){const a=(o+1)%t.length,l=t[a].x-t[o].x,c=t[a].y-t[o].y,u=Math.hypot(l,c);u>n&&(n=u,e=o)}const i=(e+1)%t.length,r={x:(t[e].x+t[i].x)/2,y:(t[e].y+t[i].y)/2},s=[...t];return s.splice(e+1,0,r),s},mC=(t,e)=>{if(t.length<2)return t;let n=0,i=Number.POSITIVE_INFINITY,r=e;for(let o=0;o<t.length;o+=1){const a=(o+1)%t.length,l=t[o],c=t[a],u={x:c.x-l.x,y:c.y-l.y},f={x:e.x-l.x,y:e.y-l.y},h=u.x*u.x+u.y*u.y||1;let p=(f.x*u.x+f.y*u.y)/h;p=Jn(p,0,1);const v={x:l.x+u.x*p,y:l.y+u.y*p},S=Math.hypot(e.x-v.x,e.y-v.y);S<i&&(i=S,n=o+1,r=v)}const s=[...t];return s.splice(n,0,r),s},gC=(t,e)=>{const n=t.replace("#",""),i=n.length===3?n.split("").map(l=>l+l).join(""):n,r=parseInt(i,16),s=Jn((r>>16)+e,0,255),o=Jn((r>>8&255)+e,0,255),a=Jn((r&255)+e,0,255);return`#${(s<<16|o<<8|a).toString(16).padStart(6,"0")}`},vC=(t,e)=>{const n=t*Math.PI/180,i=2*Math.atan(Math.tan(n/2)/Math.sqrt(e*e+1));return{h:2*Math.atan(Math.tan(i/2)*e)*180/Math.PI,v:i*180/Math.PI}},xC=(t,e)=>{const n=t*Math.PI/180,i=e*Math.PI/180;return 2*Math.atan(Math.sqrt(Math.tan(n/2)**2+Math.tan(i/2)**2))*180/Math.PI},Ma=(t,e)=>{const n=t*Math.PI/180;return 2*Math.atan(Math.tan(n/2)/e)*180/Math.PI},_C=(t,e)=>{const n=t*Math.PI/180;return 2*Math.atan(Math.tan(n/2)*e)*180/Math.PI};function yC(){var Op,Fp,kp,zp,Bp,Hp;const[t,e]=Ie.useState([]),[n,i]=Ie.useState(null),r=Ie.useRef(null);Ie.useEffect(()=>{r.current=n},[n]);const[s,o]=Ie.useState([]),[a,l]=Ie.useState(-1),c=Ie.useRef([]),u=Ie.useRef(-1);Ie.useEffect(()=>{c.current=s,u.current=a},[s,a]);const f=()=>{const _=JSON.stringify(t);a>=0&&s[a]===_||(o(b=>{const N=b.slice(0,a+1);return N.push(_),N.length>30&&N.shift(),N}),l(b=>{const N=b+1;return N>=30?29:N}))},h=()=>{const _=u.current;if(_>0){const b=_-1;try{const N=JSON.parse(c.current[b]);e(N),l(b)}catch(N){console.error("Undo failed",N)}}},p=()=>{const _=u.current;if(_<c.current.length-1){const b=_+1;try{const N=JSON.parse(c.current[b]);e(N),l(b)}catch(N){console.error("Redo failed",N)}}},[v,S]=Ie.useState(df),[g,d]=Ie.useState(null),[m,x]=Ie.useState({x:0,y:0,width:df.width,height:df.height,opacity:.5}),[y,L]=Ie.useState(20),[A,P]=Ie.useState(!0),[F,E]=Ie.useState(!0),[T,V]=Ie.useState("Security Camera Plan"),[$,ie]=Ie.useState(!1),[I,W]=Ie.useState("plan"),[j,ne]=Ie.useState({scale:2,padding:48,includeGrid:!0,includeLegend:!0,includeTitle:!0,includeCameraViews:!0}),[B,Y]=Ie.useState({x:0,y:0}),[q,le]=Ie.useState(1),[he,ee]=Ie.useState(!1),[ue,Le]=Ie.useState({x:0,y:0,panX:0,panY:0}),[He,Ue]=Ie.useState(!1),ot=Ie.useRef(!1),[nt,$e]=Ie.useState("select"),[Ve,D]=Ie.useState(null),[se,ae]=Ie.useState({type:null,itemId:null,startMouse:{x:0,y:0},startVal:null,snap:!1}),ve=Ie.useRef(null),oe=Ie.useRef(null),et=Ie.useRef(null),Oe=Ie.useRef(null),C=Ie.useRef(null),w=Ie.useRef(null),H=Ie.useRef(null),fe=Ie.useRef(new Map);Ie.useRef([]);const pe=Ie.useRef([]);Ie.useRef({renderer:null,pmremGenerator:null,envTexture:null});const[me,Ke]=Ie.useState([]),[Ce,ze]=Ie.useState(!1),[rt,pt]=Ie.useState(!0),[re,Et]=Ie.useState([]),[Ge,at]=Ie.useState({visible:!0,opacity:.15,edgeOpacity:.6,useCameraColor:!0,color:"#3b82f6",showAll:!0,mode:"volume"}),[Ye,je]=Ie.useState(null),[lt,Rt]=Ie.useState("flat"),[At,xt]=Ie.useState(null);Ie.useEffect(()=>{const _=localStorage.getItem("securityCameraPlannerData");if(_)try{const b=JSON.parse(_);b.items&&e(b.items),b.backgroundImg&&d(b.backgroundImg),b.bgSettings&&x(b.bgSettings),b.canvasSize&&S(b.canvasSize),b.exportList&&Et(b.exportList),b.projectName&&V(b.projectName),b.frustumSettings&&at(b.frustumSettings),b.sceneBackgroundImg&&je(b.sceneBackgroundImg),b.backgroundMode&&Rt(b.backgroundMode)}catch(b){console.error("Failed to load saved state",b)}},[]),Ie.useEffect(()=>{const _=setTimeout(()=>{try{const b={items:t,backgroundImg:g,bgSettings:m,canvasSize:v,exportList:re,projectName:T,frustumSettings:Ge,sceneBackgroundImg:Ye,backgroundMode:lt};localStorage.setItem("securityCameraPlannerData",JSON.stringify(b))}catch(b){if(b.name==="QuotaExceededError"||b.name==="NS_ERROR_DOM_QUOTA_REACHED"){console.error("Storage full, trying to save without background image");try{const N={items:t,bgSettings:m,canvasSize:v,exportList:re,projectName:T};localStorage.setItem("securityCameraPlannerData",JSON.stringify(N))}catch(N){console.error("Still failed to save",N)}}else console.error("Failed to save state",b)}},1e3);return()=>clearTimeout(_)},[t,g,m,v,re,T,Ge,Ye,lt]);const Te=Ie.useRef(null),k=Ie.useRef(null),Ae=(_,b=F)=>b?Math.round(_/y)*y:_,Ee=_=>_.points&&_.points.length>=3?_.points:Cc(_.width,_.height),dt=(_,b)=>{const N=b*Math.PI/180,z=Math.cos(N),U=Math.sin(N);return{x:_.x*z-_.y*U,y:_.x*U+_.y*z}},ct=(_,b)=>{const N=dt(_,b.rotation);return{x:b.x+N.x,y:b.y+N.y}},It=(_,b)=>{const N=_.x-b.x,z=_.y-b.y;return dt({x:N,y:z},-b.rotation)},Lt=_=>t.find(b=>b.type==="building"&&b.id===_),Ht=_=>Ee(_).map(N=>ct(N,_)),Wt=_=>{var b;if(((b=_.mount)==null?void 0:b.type)==="building"&&_.mount.buildingId){const N=Lt(_.mount.buildingId);if(!N)return{x:_.x,y:_.y};const z=Ht(N);if(z.length<2)return{x:_.x,y:_.y};const U=Jn(_.mount.edgeIndex??0,0,z.length-1),te=(U+1)%z.length,X=z[U],Q=z[te],xe=Jn(_.mount.edgeT??.5,0,1),ge={x:X.x+(Q.x-X.x)*xe,y:X.y+(Q.y-X.y)*xe},we=z.reduce((ye,Xe)=>({x:ye.x+Xe.x,y:ye.y+Xe.y}),{x:0,y:0});z.length>0&&(we.x/=z.length,we.y/=z.length);const Be={x:ge.x-we.x,y:ge.y-we.y},Je=Math.hypot(Be.x,Be.y)||1,Pe=3;return{x:ge.x+Be.x/Je*Pe,y:ge.y+Be.y/Je*Pe}}return{x:_.x,y:_.y}},Ut=_=>{let b=null;return t.forEach(N=>{if(N.type!=="building")return;const z=N,U=Ht(z);for(let te=0;te<U.length;te+=1){const X=(te+1)%U.length,Q=U[te],xe=U[X],ge={x:xe.x-Q.x,y:xe.y-Q.y},we={x:_.x-Q.x,y:_.y-Q.y},Be=ge.x*ge.x+ge.y*ge.y||1;let Je=(we.x*ge.x+we.y*ge.y)/Be;Je=Jn(Je,0,1);const Pe={x:Q.x+ge.x*Je,y:Q.y+ge.y*Je},ye=Math.hypot(_.x-Pe.x,_.y-Pe.y);(!b||ye<b.distance)&&(b={buildingId:z.id,edgeIndex:te,edgeT:Je,distance:ye,point:Pe})}}),b},Sn=_=>{let b=null;return t.forEach(N=>{if(N.type!=="building")return;const z=N,U=Ht(z),te={x:U.reduce((X,Q)=>X+Q.x,0)/U.length,y:U.reduce((X,Q)=>X+Q.y,0)/U.length};for(let X=0;X<U.length;X+=1){const Q=(X+1)%U.length,xe=U[X],ge=U[Q],we={x:ge.x-xe.x,y:ge.y-xe.y},Be={x:_.x-xe.x,y:_.y-xe.y},Je=we.x*we.x+we.y*we.y||1;let Pe=(Be.x*we.x+Be.y*we.y)/Je;Pe=Jn(Pe,0,1);const ye={x:xe.x+we.x*Pe,y:xe.y+we.y*Pe},Xe=Math.hypot(_.x-ye.x,_.y-ye.y),ce={x:(xe.x+ge.x)/2,y:(xe.y+ge.y)/2},de={x:ce.x-te.x,y:ce.y-te.y},Ne=Math.atan2(de.y,de.x)*(180/Math.PI);(!b||Xe<b.distance)&&(b={buildingId:z.id,edgeIndex:X,edgeT:Pe,distance:Xe,point:ye,rotation:Ne})}}),b};v.width/2;const vi=(_,b)=>{if(!ve.current||I==="iso3d")return;const N=ve.current.getScreenCTM();if(!N)return;const z=Ae((_.clientX-N.e)/N.a),U=Ae((_.clientY-N.f)/N.d);let te;const X={id:ho(),x:z,y:U,rotation:0};switch(b){case"add-camera":te={...X,type:"camera",rotation:45,label:"Camera",description:"",fov:70,hFov:70,vFov:45,pitch:-15,height:60,aspect:16/9,mount:{type:"free",edgeT:.5,height:60},range:150,color:An.camera[0],labelOffset:{x:0,y:30},connectorDashSize:3};break;case"add-building":te={...X,type:"building",width:100,height:80,label:"Building",color:An.building[0],points:Cc(100,80)};break;case"add-tree":te={...X,type:"tree",radius:25,color:An.tree[0]};break;case"add-parking":te={...X,type:"parking",width:30,height:50,color:An.parking[0]};break;case"add-label":te={...X,type:"label",text:"Label",fontSize:14,color:An.label[0]};break;default:return}if(te.type==="camera"){const Q=Sn({x:z,y:U});if(Q&&Q.distance<100){const xe=te;xe.x=Q.point.x,xe.y=Q.point.y,xe.rotation=Q.rotation;const ge=60;xe.mount={type:"building",buildingId:Q.buildingId,edgeIndex:Q.edgeIndex,edgeT:Q.edgeT,height:ge},xe.height=ge}xt(null)}e([...t,te]),D(te.id),$e("select")},wl=_=>{const b={id:ho(),type:"image",x:400,y:300,rotation:0,width:150,height:150,src:_,label:"Image",aspectRatioLocked:!0};e([...t,b]),D(b.id)},Ct=(_,b)=>{e(t.map(N=>N.id===_?{...N,...b}:N))},Tr=(_,b)=>{const N=t.find(z=>z.id===_);!N||N.type!=="camera"||Ct(_,{mount:{...N.mount??{type:"free"},...b}})},El=_=>{var z;const b=t.find(U=>U.id===_);if(!b||b.type!=="camera")return;const N=Ut(b);N&&Ct(_,{x:N.point.x,y:N.point.y,mount:{type:"building",buildingId:N.buildingId,edgeIndex:N.edgeIndex,edgeT:N.edgeT,height:((z=b.mount)==null?void 0:z.height)??b.height??10}})},Gi=(_,b,N,z)=>{Ct(_,{hFov:b,vFov:N,aspect:z,fov:b})},Qo=(_,b,N)=>{const z=t.find(X=>X.id===_);if(!z||z.type!=="building")return;const U=Ee(z),te=hC(U,b,N);Ct(_,{width:b,height:N,points:te})},Tl=_=>{const b=t.find(z=>z.id===_);if(!b||b.type!=="building")return;const N=pC(Ee(b));Ct(_,{points:N})},bl=(_,b)=>{const N=t.find(te=>te.id===_);if(!N||N.type!=="building")return;const z=It(b,N),U=mC(Ee(N),z);Ct(_,{points:U})},ju=_=>{const b=t.find(z=>z.id===_);if(!b||b.type!=="building")return;const N=Ee(b);N.length<=3||Ct(_,{points:N.slice(0,-1)})},Xu=_=>{const b=t.find(N=>N.id===_);!b||b.type!=="building"||Ct(_,{points:Cc(b.width,b.height)})},R=(_,b,N)=>{const z=t.find(te=>te.id===_);if(!z||z.type!=="image")return;if(!z.aspectRatioLocked){Ct(_,{width:b??z.width,height:N??z.height});return}const U=z.width/z.height;b!==void 0?Ct(_,{width:b,height:b/U}):N!==void 0&&Ct(_,{width:N*U,height:N})},G=_=>{e(t.filter(b=>b.id!==_)),Ve===_&&D(null)},K=()=>{t.length&&window.confirm("Clear all items from the canvas?")&&(e([]),D(null))},J=()=>{x({...m,x:0,y:0,width:v.width,height:v.height})},Z=()=>{if(!ve.current)return;const{scale:_,padding:b,includeGrid:N,includeLegend:z,includeTitle:U}=j,te=new Date().toLocaleString(),X=v.width,Q=v.height,xe=U?52:0,ge=z?90:0,we=X+b*2,Be=Q+b*2+xe+ge,Je="http://www.w3.org/2000/svg",Pe=document.createElementNS(Je,"svg");Pe.setAttribute("xmlns",Je),Pe.setAttribute("width",`${we}`),Pe.setAttribute("height",`${Be}`),Pe.setAttribute("viewBox",`0 0 ${we} ${Be}`);const ye=document.createElementNS(Je,"rect");if(ye.setAttribute("x","0"),ye.setAttribute("y","0"),ye.setAttribute("width",`${we}`),ye.setAttribute("height",`${Be}`),ye.setAttribute("fill","#ffffff"),Pe.appendChild(ye),U){const ke=document.createElementNS(Je,"text");ke.setAttribute("x",`${b}`),ke.setAttribute("y",`${b+24}`),ke.setAttribute("font-size","20"),ke.setAttribute("font-weight","700"),ke.setAttribute("fill","#0f172a"),ke.textContent=T||"Security Camera Plan",Pe.appendChild(ke);const it=document.createElementNS(Je,"text");it.setAttribute("x",`${b}`),it.setAttribute("y",`${b+44}`),it.setAttribute("font-size","12"),it.setAttribute("fill","#64748b"),it.textContent=`Exported ${te}`,Pe.appendChild(it)}const Xe=document.createElementNS(Je,"g"),ce=b+xe;Xe.setAttribute("transform",`translate(${b}, ${ce})`);const de=ve.current.cloneNode(!0);if(de.removeAttribute("width"),de.removeAttribute("height"),!N){const ke=de.querySelector("#grid-bg");ke&&ke.remove()}for(;de.childNodes.length>0;)Xe.appendChild(de.childNodes[0]);Pe.appendChild(Xe);const Ne=document.createElementNS(Je,"rect");if(Ne.setAttribute("x",`${b-1}`),Ne.setAttribute("y",`${ce-1}`),Ne.setAttribute("width",`${X+2}`),Ne.setAttribute("height",`${Q+2}`),Ne.setAttribute("fill","none"),Ne.setAttribute("stroke","#e2e8f0"),Ne.setAttribute("stroke-width","2"),Pe.appendChild(Ne),z){const ke=ce+Q+36,it=[{label:"Cameras",count:t.filter(vt=>vt.type==="camera").length,color:An.camera[0]},{label:"Buildings",count:t.filter(vt=>vt.type==="building").length,color:An.building[0]},{label:"Trees",count:t.filter(vt=>vt.type==="tree").length,color:An.tree[0]},{label:"Parking",count:t.filter(vt=>vt.type==="parking").length,color:An.parking[0]},{label:"Labels",count:t.filter(vt=>vt.type==="label").length,color:An.label[0]}],st=document.createElementNS(Je,"text");st.setAttribute("x",`${b}`),st.setAttribute("y",`${ke}`),st.setAttribute("font-size","12"),st.setAttribute("font-weight","600"),st.setAttribute("fill","#0f172a"),st.textContent="Legend",Pe.appendChild(st),it.forEach((vt,zt)=>{const zn=b+zt*150,Zn=document.createElementNS(Je,"rect");Zn.setAttribute("x",`${zn}`),Zn.setAttribute("y",`${ke+14}`),Zn.setAttribute("width","10"),Zn.setAttribute("height","10"),Zn.setAttribute("rx","2"),Zn.setAttribute("fill",vt.color),Pe.appendChild(Zn);const oi=document.createElementNS(Je,"text");oi.setAttribute("x",`${zn+16}`),oi.setAttribute("y",`${ke+23}`),oi.setAttribute("font-size","11"),oi.setAttribute("fill","#475569"),oi.textContent=`${vt.label} (${vt.count})`,Pe.appendChild(oi)})}const qe=document.createElement("canvas"),De=qe.getContext("2d");qe.width=we*_,qe.height=Be*_,De&&De.scale(_,_);const be=new XMLSerializer().serializeToString(Pe),ft=new Image,gt=new Blob([be],{type:"image/svg+xml;charset=utf-8"}),Qe=URL.createObjectURL(gt);ft.onload=()=>{if(De){De.fillStyle="#ffffff",De.fillRect(0,0,we,Be),De.drawImage(ft,0,0);const ke=qe.toDataURL("image/png"),it=document.createElement("a");it.href=ke,it.download="security_plan.png",document.body.appendChild(it),it.click(),document.body.removeChild(it)}URL.revokeObjectURL(Qe)},ft.src=Qe},Fe=(_,b,N,z)=>{Et(U=>[...U,{id:crypto.randomUUID(),type:_,label:b,dataUrl:N,cameraId:z}])},tt=_=>{var qe;const z=Wt(_),U=((qe=_.mount)==null?void 0:qe.height)??_.height??10,te=_.hFov??_.fov,X=_.pitch??-15,Q=_.range,xe=un.degToRad(_.rotation),ge=new Gc;ge.background=new wt("#87CEEB"),ge.fog=new Ba("#87CEEB",Q*.3,Q*1.2);const we=new ei(te,640/480,1,Q*2);we.position.set(z.x,U,z.y);const Be=un.degToRad(X),Je=new O(z.x+Math.cos(xe)*100,U+Math.tan(Be)*100,z.y+Math.sin(xe)*100);we.lookAt(Je),ge.add(new lf(16777215,.5));const Pe=new af(16777215,.7);Pe.position.set(100,200,50),ge.add(Pe);const ye=new Ze(new yi(v.width*2,v.height*2),new fn({color:"#6B8E23",roughness:.9}));if(ye.rotation.x=-Math.PI/2,ye.position.set(v.width/2,0,v.height/2),ge.add(ye),k.current){const De=new ef(k.current);De.colorSpace=Kt;const be=new Ze(new yi(m.width,m.height),new Qi({map:De,transparent:!0,opacity:m.opacity}));be.rotation.x=-Math.PI/2,be.position.set(m.x+m.width/2,.1,m.y+m.height/2),ge.add(be)}t.forEach(De=>{if(De.type==="building"){const be=De,ft=Ee(be),gt=new Ss(ft.map(it=>new Se(it.x,-it.y))),Qe=new Wa(gt,{depth:60,bevelEnabled:!1});Qe.rotateX(-Math.PI/2);const ke=new Ze(Qe,new fn({color:be.color,side:ui}));ke.position.set(be.x,0,be.y),ke.rotation.y=-un.degToRad(be.rotation),ge.add(ke)}if(De.type==="tree"){const be=pf(De);ge.add(be)}if(De.type==="parking"){const be=hf(De);ge.add(be)}});const Xe=document.createElement("canvas");Xe.width=640,Xe.height=480;const ce=new Vc({canvas:Xe,antialias:!0});ce.setSize(640,480),ce.render(ge,we);const de=Xe.getContext("2d");if(de){de.fillStyle="rgba(0,0,0,0.7)",de.fillRect(0,0,640,30),de.fillStyle="#fff",de.font="bold 14px sans-serif",de.fillText(`📷 ${_.label}`,10,20),de.font="12px sans-serif",de.fillStyle="#94a3b8";const De=`FOV: ${te.toFixed(0)}° | Pitch: ${X}° | Range: ${Q}px`;de.fillText(De,640-de.measureText(De).width-10,20)}const Ne=Xe.toDataURL("image/png");return ce.dispose(),Ne},ut=()=>{if(!ve.current)return;const _=new XMLSerializer().serializeToString(ve.current),b=document.createElement("canvas");b.width=v.width*2,b.height=v.height*2;const N=b.getContext("2d");if(!N)return;const z=new Image,U=new Blob([_],{type:"image/svg+xml;charset=utf-8"}),te=URL.createObjectURL(U);z.onload=()=>{N.scale(2,2),N.fillStyle="#f8fafc",N.fillRect(0,0,v.width,v.height),N.drawImage(z,0,0),Fe("plan","2D Plan View",b.toDataURL("image/png")),URL.revokeObjectURL(te)},z.src=te},ht=_=>{const b=tt(_);Fe("camera",`Camera: ${_.label}`,b,_.id)},St=_=>{var z;const b=(z=_.target.files)==null?void 0:z[0];if(!b)return;const N=new FileReader;N.onload=U=>{var Q;const te=(Q=U.target)==null?void 0:Q.result,X=new Image;X.onload=()=>{const xe=X.width/X.height,ge=xe>=1.8&&xe<=2.2;je(te),Rt(ge?"panorama":"flat")},X.src=te},N.readAsDataURL(b)},mt=async()=>{if(re.length===0){alert("Add some views to the export list first!");return}const _=2,b=40,N=800,z=600,U=2,te=Math.ceil(re.length/U),X=(N+b)*U+b,Q=120,xe=Q+(z+b+30)*te+b,ge=document.createElement("canvas");ge.width=X*_,ge.height=xe*_;const we=ge.getContext("2d");if(!we)return;we.scale(_,_),we.fillStyle="#fff",we.fillRect(0,0,X,xe),we.fillStyle="#0f172a",we.font="bold 28px sans-serif",we.fillText(T||"Security Camera Plan",b,b+30),we.fillStyle="#64748b",we.font="14px sans-serif",we.fillText(`Exported: ${new Date().toLocaleString()} | ${re.length} view(s)`,b,b+55);const Be=ye=>new Promise((Xe,ce)=>{const de=new Image;de.onload=()=>Xe(de),de.onerror=ce,de.src=ye});for(let ye=0;ye<re.length;ye++){const Xe=re[ye],ce=ye%U,de=Math.floor(ye/U),Ne=b+ce*(N+b),qe=Q+de*(z+b+30);we.fillStyle="#334155",we.font="bold 14px sans-serif",we.fillText(Xe.label,Ne,qe+20),we.fillStyle="#f1f5f9",we.fillRect(Ne,qe+28,N,z),we.strokeStyle="#e2e8f0",we.lineWidth=2,we.strokeRect(Ne,qe+28,N,z);try{const De=await Be(Xe.dataUrl),be=De.width/De.height,ft=N/z;let gt,Qe,ke,it;be>ft?(gt=N,Qe=N/be,ke=Ne,it=qe+28+(z-Qe)/2):(Qe=z,gt=z*be,ke=Ne+(N-gt)/2,it=qe+28),we.drawImage(De,ke,it,gt,Qe)}catch{we.fillStyle="#cbd5e1",we.font="16px sans-serif",we.fillText("Failed to load image",Ne+20,qe+100)}}const Je=ge.toDataURL("image/png"),Pe=document.createElement("a");Pe.href=Je,Pe.download=`${(T||"security_plan").replace(/\s+/g,"_")}_report.png`,document.body.appendChild(Pe),Pe.click(),document.body.removeChild(Pe)},_t=()=>{if(re.length===0){alert("Add some views to the export list first!");return}const _=window.open("","_blank");if(!_){alert("Please allow popups to export PDF");return}const b=`
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
    `;_.document.write(b),_.document.close()},jt=()=>{const b=JSON.stringify({version:1,items:t,backgroundImg:g,bgSettings:m,canvasSize:v,gridSize:y,showGrid:A,snapToGrid:F,projectName:T,exportList:re},null,2),N=new Blob([b],{type:"application/json"}),z=URL.createObjectURL(N),U=document.createElement("a");U.href=z,U.download="security_project.json",document.body.appendChild(U),U.click(),document.body.removeChild(U),URL.revokeObjectURL(z)},kn=_=>{var z;const b=(z=_.target.files)==null?void 0:z[0];if(!b)return;const N=new FileReader;N.onload=U=>{var te;try{const X=(te=U.target)==null?void 0:te.result,Q=JSON.parse(X);Q.items&&e(Q.items),Q.backgroundImg&&d(Q.backgroundImg),Q.bgSettings&&x(Q.bgSettings),Q.canvasSize&&S(Q.canvasSize),typeof Q.gridSize=="number"&&L(Q.gridSize),typeof Q.showGrid=="boolean"&&P(Q.showGrid),typeof Q.snapToGrid=="boolean"&&E(Q.snapToGrid),Q.projectName&&V(Q.projectName),Q.exportList&&Et(Q.exportList)}catch(X){console.error("Failed to load project file",X),alert("Invalid project file.")}},N.readAsText(b)},ln=_=>{var N;const b=(N=_.target.files)==null?void 0:N[0];if(b){const z=new FileReader;z.onload=U=>{var te;return d((te=U.target)==null?void 0:te.result)},z.readAsDataURL(b)}},Pi=_=>{var N;const b=(N=_.target.files)==null?void 0:N[0];if(b){const z=new FileReader;z.onload=U=>{var te;return wl((te=U.target)==null?void 0:te.result)},z.readAsDataURL(b)}},Xt=_=>{_.traverse(b=>{const N=b;N.geometry&&N.geometry.dispose(),N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.dispose()):N.material.dispose())}),_.clear()},yt=_=>{const b=document.createElement("canvas"),N=b.getContext("2d");if(!N)return null;const z=56,U=24;N.font=`${z}px Space Grotesk, sans-serif`;const te=N.measureText(_);b.width=Math.ceil(te.width+U*2),b.height=Math.ceil(z+U*1.6),N.font=`${z}px Space Grotesk, sans-serif`,N.fillStyle="rgba(15, 23, 42, 0.9)",N.textBaseline="middle",N.fillText(_,U,b.height/2);const X=new ef(b);X.colorSpace=Kt;const Q=new T_({map:X,transparent:!0}),xe=new H2(Q);return xe.scale.set(b.width/10,b.height/10,1),xe},ea=(_,b,N,z)=>{const U=_.x,te=_.y,X=b.x,Q=b.y,xe=N.x,ge=N.y,we=z.x,Be=z.y,Je=U-xe,Pe=te-ge,ye=we-xe,Xe=Be-ge,ce=-Q,de=X,Ne=ye*ce+Xe*de;if(Math.abs(Ne)<1e-6)return null;const qe=(ye*Pe-Xe*Je)/Ne,De=(Je*ce+Pe*de)/Ne;return qe>=0&&De>=0&&De<=1?qe:null},$t=(_,b,N,z,U)=>{const te=U.flatMap(Be=>{if(Be.type==="building"){const Pe=Ht(Be);return Pe.length<2?[]:Pe.map((ye,Xe)=>[ye,Pe[(Xe+1)%Pe.length]])}else if(Be.type==="tree"){const Je=Be,Pe=[],ye=8;for(let Xe=0;Xe<ye;Xe++){const ce=Xe/ye*Math.PI*2;Pe.push({x:Je.x+Je.radius*Math.cos(ce),y:Je.y+Je.radius*Math.sin(ce)})}return Pe.map((Xe,ce)=>[Xe,Pe[(ce+1)%Pe.length]])}return[]}),X=128,Q=(z-N/2)*(Math.PI/180),ge=N*(Math.PI/180)/(X-1),we=[];for(let Be=0;Be<X;Be++){const Je=Q+Be*ge,Pe={x:Math.cos(Je),y:Math.sin(Je)};let ye=b;for(const Xe of te){const ce=ea(_,Pe,Xe[0],Xe[1]);ce!==null&&ce<ye&&(ye=ce)}we.push({x:ye*Pe.x,y:ye*Pe.y})}return we},rr=()=>{const _=H.current;if(!_)return;const b=fe.current;let N=!1;t.forEach(z=>{var te;const U=b.get(z.id);if(U)if(z.type==="building"||z.type==="parking")U.position.set(z.x,0,z.y),U.rotation.y=-un.degToRad(z.rotation),N=!0;else if(z.type==="tree"){const X=z;U.position.set(X.x,0,X.y),N=!0}else if(z.type==="camera"){const X=z,Q=Wt(X),xe=((te=X.mount)==null?void 0:te.height)??X.height??10;U.position.set(Q.x,xe,Q.y),U.rotation.y=-un.degToRad(X.rotation),U.rotation.x=un.degToRad(X.pitch??0),N=!0}else if(z.type==="image"){const X=z;U.position.set(X.x,.25,X.y),U.rotation.z=un.degToRad(X.rotation),N=!0}else z.type==="label"&&(U.position.set(z.x,8,z.y),N=!0)}),N&&_.renderer.render(_.scene,_.camera)},Al=(_,b)=>{if(_.length!==b.length)return!0;const N=new Set(_.map(U=>U.id)),z=new Set(b.map(U=>U.id));for(const U of z)if(!N.has(U))return!0;for(const U of N)if(!z.has(U))return!0;for(const U of b){const te=_.find(X=>X.id===U.id);if(!te||te.type!==U.type)return!0;if(U.type==="building"){const X=te,Q=U;if(X.width!==Q.width||X.height!==Q.height||JSON.stringify(X.points)!==JSON.stringify(Q.points)||X.color!==Q.color)return!0}if(U.type==="tree"){const X=te,Q=U;if(X.radius!==Q.radius||X.color!==Q.color)return!0}if(U.type==="camera"){const X=te,Q=U;if(X.range!==Q.range||X.fov!==Q.fov||X.hFov!==Q.hFov||X.color!==Q.color)return!0}}return!1},cs=()=>{const _=H.current;if(!_)return;const{group:b,scene:N,renderer:z}=_,U=pe.current;if(U.length>0&&!Al(U,t)){rr(),pe.current=[...t];return}fe.current.clear(),Xt(b);const te=Math.max(v.width,v.height)*2,X=new yi(te,te),Q=new fn({color:592139,roughness:.95,metalness:0}),xe=new Ze(X,Q);xe.rotation.x=-Math.PI/2,xe.position.set(v.width/2,-.5,v.height/2),xe.receiveShadow=!0,b.add(xe);const ge=new CA(te,Math.round(te/y),2565930,2565930);ge.position.set(v.width/2,.01,v.height/2),A&&b.add(ge);const we=new Ze(new yi(v.width,v.height),new fn({color:1579035,roughness:.8,metalness:0}));we.rotation.x=-Math.PI/2,we.position.set(v.width/2,.05,v.height/2),we.receiveShadow=!0,b.add(we);const Be=new xn,Je=new Float32Array([0,.1,0,v.width,.1,0,v.width,.1,v.height,0,.1,v.height,0,.1,0]);Be.setAttribute("position",new Ai(Je,3));const Pe=new A_(Be,new Ha({color:9741240,linewidth:2}));if(b.add(Pe),g){const ye=new fn({color:16777215,transparent:!0,opacity:m.opacity,roughness:.9});new bc().load(g,ce=>{ce.colorSpace=Kt,ce.wrapS=di,ce.wrapT=di,ce.minFilter=Wn,ce.magFilter=Wn,ye.map=ce,ye.needsUpdate=!0,z.render(N,_.camera)});const Xe=new Ze(new yi(m.width,m.height),ye);Xe.rotation.x=-Math.PI/2,Xe.position.set(m.x+m.width/2,.15,m.y+m.height/2),Xe.receiveShadow=!0,b.add(Xe)}if(t.forEach(ye=>{var Xe;if(ye.type==="building"){const ce=ye,de=Ee(ce),Ne=60,qe=new Ss(de.map(zt=>new Se(zt.x,-zt.y))),De={depth:Ne,bevelEnabled:!0,bevelThickness:2,bevelSize:1,bevelSegments:2},be=new Wa(qe,De);be.rotateX(-Math.PI/2);const ft=new fn({color:ce.color,roughness:.6,metalness:.1}),gt=new Ze(be,ft);gt.position.set(ce.x,0,ce.y),gt.rotation.y=-un.degToRad(ce.rotation),gt.castShadow=!0,gt.receiveShadow=!0,gt.userData.itemId=ce.id,fe.current.set(ce.id,gt),b.add(gt);const Qe=new fn({color:gC(ce.color,-20),roughness:.7,metalness:.05}),ke=new Ss(de.map(zt=>new Se(zt.x,-zt.y))),it=new wu(ke);it.rotateX(-Math.PI/2);const st=new Ze(it,Qe);st.position.set(ce.x,Ne+.1,ce.y),st.rotation.y=-un.degToRad(ce.rotation),st.receiveShadow=!0,b.add(st);const vt=yt(ce.label);vt&&(vt.position.set(ce.x,Ne+15,ce.y),b.add(vt))}if(ye.type==="parking"){const ce=hf(ye);ce.userData.itemId=ye.id,fe.current.set(ye.id,ce),b.add(ce)}if(ye.type==="tree"){const ce=pf(ye);ce.userData.itemId=ye.id,fe.current.set(ye.id,ce),b.add(ce)}if(ye.type==="camera"){const ce=ye,de=Wt(ce),Ne=((Xe=ce.mount)==null?void 0:Xe.height)??ce.height??10,qe=ce.pitch??0,De=ce.hFov??ce.fov;ce.vFov??Ma(De,ce.aspect??16/9);const be=ce.range,ft=-un.degToRad(ce.rotation),gt=un.degToRad(qe),Qe=new Wr;Qe.userData.itemId=ce.id;const ke=new dn(14,10,10),it=new fn({color:"#1e293b",roughness:.3,metalness:.5}),st=new Ze(ke,it);Qe.add(st);const vt=new Fs(3.5,4,8,16);vt.rotateZ(Math.PI/2);const zt=new fn({color:"#0f172a",roughness:.2,metalness:.7}),zn=new Ze(vt,zt);zn.position.set(10,0,0),Qe.add(zn);const Zn=new Pp(1.5,8,8),oi=new Qi({color:ce.color}),Ar=new Ze(Zn,oi);Ar.position.set(-5,4,0),Qe.add(Ar),Qe.position.set(de.x,Ne,de.y),Qe.rotation.order="YXZ",Qe.rotation.y=ft,Qe.rotation.x=gt,fe.current.set(ce.id,Qe),b.add(Qe);const Ll=new Fs(2,2.5,Ne,8),Nl=new fn({color:"#475569",roughness:.6,metalness:.3}),ji=new Ze(Ll,Nl);if(ji.position.set(de.x,Ne/2,de.y),ji.castShadow=!0,b.add(ji),Ge.visible){const qu=Ge.showAll!==!1||ye.id===Ve,ra=(Ge.mode||"volume")==="volume";if(qu){const W_=2*Math.atan(Math.tan(un.degToRad(De)/2)/1.33),Bt=2*Math.tan(W_/2)*be,Vt=Bt*1.33,j_=[0,0,0,be,Bt/2,-Vt/2,be,-Bt/2,-Vt/2,0,0,0,be,-Bt/2,-Vt/2,be,-Bt/2,Vt/2,0,0,0,be,-Bt/2,Vt/2,be,Bt/2,Vt/2,0,0,0,be,Bt/2,Vt/2,be,Bt/2,-Vt/2,be,-Bt/2,Vt/2,be,-Bt/2,-Vt/2,be,Bt/2,-Vt/2,be,Bt/2,Vt/2,be,-Bt/2,Vt/2,be,Bt/2,-Vt/2];if(ra){const Kn=new xn;Kn.setAttribute("position",new kt(j_,3)),Kn.computeVertexNormals();const $i=new Qi({color:Ge.useCameraColor?ce.color:Ge.color,transparent:!0,opacity:Ge.opacity,side:ui,depthWrite:!1}),or=new Ze(Kn,$i);or.position.set(de.x,Ne,de.y),or.rotation.order="YXZ",or.rotation.y=ft,or.rotation.x=gt,b.add(or);const us=[0,0,0,be,Bt/2,-Vt/2,0,0,0,be,-Bt/2,-Vt/2,0,0,0,be,-Bt/2,Vt/2,0,0,0,be,Bt/2,Vt/2,be,Bt/2,-Vt/2,be,Bt/2,Vt/2,be,Bt/2,Vt/2,be,-Bt/2,Vt/2,be,-Bt/2,Vt/2,be,-Bt/2,-Vt/2,be,-Bt/2,-Vt/2,be,Bt/2,-Vt/2],ds=new xn;ds.setAttribute("position",new kt(us,3));const Li=new gh(ds,new Ha({color:Ge.useCameraColor?ce.color:Ge.color,transparent:!0,opacity:Ge.edgeOpacity}));Li.position.set(de.x,Ne,de.y),Li.rotation.order="YXZ",Li.rotation.y=ft,Li.rotation.x=gt,b.add(Li)}const Xi=[],sa=un.degToRad(De)/2,Il=2*Math.atan(Math.tan(sa)/1.33)/2;if([{h:sa,v:Il},{h:-sa,v:Il},{h:-sa,v:-Il},{h:sa,v:-Il}].forEach(Kn=>{const $i=new O(Math.cos(Kn.v)*Math.cos(Kn.h),Math.sin(Kn.v),Math.cos(Kn.v)*Math.sin(Kn.h)).normalize(),or=new Ml(gt,ft,0,"YXZ");if($i.applyEuler(or),$i.y<-.01){const us=-Ne/$i.y,ds=de.x+$i.x*us,Li=de.y+$i.z*us;Xi.push(new O(ds,.15,Li))}}),Xi.length>=3){const Kn=new Ss;Kn.moveTo(Xi[0].x-de.x,-(Xi[0].z-de.y));for(let Cr=1;Cr<Xi.length;Cr++)Kn.lineTo(Xi[Cr].x-de.x,-(Xi[Cr].z-de.y));Kn.closePath();const $i=new wu(Kn);$i.rotateX(-Math.PI/2);const or=new Qi({color:ce.color,transparent:!0,opacity:ra?.1:.4,side:ui}),us=new Ze($i,or);us.position.set(de.x,.12,de.y),b.add(us);const ds=new xn,Li=[];Xi.forEach((Cr,Y_)=>{Li.push(Cr.x,Cr.y,Cr.z);const Zu=Xi[(Y_+1)%Xi.length];Li.push(Zu.x,Zu.y,Zu.z)}),ds.setAttribute("position",new kt(Li,3));const X_=new Ha({color:ce.color,transparent:!0,opacity:ra?.4:.8}),$_=new gh(ds,X_);b.add($_)}}}const xi=yt(ce.label);xi&&(xi.position.set(de.x,Ne+18,de.y),b.add(xi))}if(ye.type==="image"){const ce=ye,de=new yi(ce.width,ce.height),Ne=new fn({color:16777215,roughness:.9});new bc().load(ce.src,De=>{De.colorSpace=Kt,De.minFilter=Wn,Ne.map=De,Ne.needsUpdate=!0,z.render(N,_.camera)});const qe=new Ze(de,Ne);qe.rotation.x=-Math.PI/2,qe.position.set(ce.x,.25,ce.y),qe.rotation.z=un.degToRad(ce.rotation),qe.userData.itemId=ce.id,fe.current.set(ce.id,qe),b.add(qe)}if(ye.type==="label"){const ce=ye,de=yt(ce.text);de&&(de.position.set(ce.x,8,ce.y),de.userData.itemId=ce.id,fe.current.set(ce.id,de),b.add(de))}}),_.target.set(v.width/2,0,v.height/2),_.orbit&&(_.orbit.distance=Math.max(v.width,v.height)*.85),_.orbit){const{azimuth:ye,polar:Xe,distance:ce}=_.orbit,de=_.target.x+Math.cos(ye)*Math.cos(Xe)*ce,Ne=_.target.z+Math.sin(ye)*Math.cos(Xe)*ce,qe=_.target.y+Math.sin(Xe)*ce;_.camera.position.set(de,qe,Ne),_.camera.lookAt(_.target)}z.render(N,_.camera),pe.current=[...t]},ta=()=>{const _=H.current;if(!_)return;const b=_.renderer.domElement.toDataURL("image/png"),N=new Date().toLocaleString();Ke(z=>[{id:ho(),dataUrl:b,createdAt:N},...z])},mn=(_,b)=>{const N=document.createElement("a");N.href=_,N.download=b,document.body.appendChild(N),N.click(),document.body.removeChild(N)},sr=()=>{const _=H.current;if(!_)return;const b=_.renderer.domElement.toDataURL("image/png");mn(b,"security_plan_3d.png")},na=()=>{const _=H.current;if(_){if(_.zoom=1,_.target.set(v.width/2,0,v.height/2),_.orbit){_.orbit.azimuth=Math.PI/4,_.orbit.polar=Math.PI/4,_.orbit.distance=Math.max(v.width,v.height)*.9;const{azimuth:b,polar:N,distance:z}=_.orbit,U=_.target.x+Math.cos(b)*Math.cos(N)*z,te=_.target.z+Math.sin(b)*Math.cos(N)*z,X=_.target.y+Math.sin(N)*z;_.camera.position.set(U,X,te)}_.camera.zoom=_.zoom,_.camera.updateProjectionMatrix(),_.camera.lookAt(_.target),_.renderer.render(_.scene,_.camera)}};Ie.useEffect(()=>{const _=N=>{var U,te,X,Q;const z=N.target;if(!(z&&(z.tagName==="INPUT"||z.tagName==="TEXTAREA"))){if(N.key===" "&&(Ue(!0),ot.current=!0),(N.key==="Delete"||N.key==="Backspace")&&Ve&&(N.preventDefault(),G(Ve),setTimeout(()=>f(),50)),N.ctrlKey){const xe=N.key.toLowerCase();if(xe==="z"&&(N.preventDefault(),N.shiftKey?p():h()),xe==="y"&&(N.preventDefault(),p()),xe==="s"&&(N.preventDefault(),jt()),xe==="g"&&(N.preventDefault(),P(ge=>!ge)),xe==="c"){if(((U=document.activeElement)==null?void 0:U.tagName)==="INPUT"||((te=document.activeElement)==null?void 0:te.tagName)==="TEXTAREA")return;if(Ve){const ge=t.find(we=>we.id===Ve);ge&&(i(ge),N.preventDefault())}}if(xe==="v"){if(((X=document.activeElement)==null?void 0:X.tagName)==="INPUT"||((Q=document.activeElement)==null?void 0:Q.tagName)==="TEXTAREA")return;const ge=r.current;if(ge){const we={...ge,id:ho(),x:ge.x+20,y:ge.y+20};e(Be=>[...Be,we]),D(we.id),setTimeout(()=>f(),50),N.preventDefault()}}}N.key==="Escape"&&(D(null),$e("select"),ze(!1))}};window.addEventListener("keydown",_);const b=N=>{N.key===" "&&(Ue(!1),ot.current=!1)};return window.addEventListener("keyup",b),()=>{window.removeEventListener("keydown",_),window.removeEventListener("keyup",b)}},[t,Ve,jt]),Ie.useEffect(()=>{if(!H.current)return;const{scene:_,renderer:b,camera:N}=H.current;if(Ye)new bc().load(Ye,z=>{if(z.colorSpace=Kt,lt==="panorama"?z.mapping=mu:z.mapping=vp,_.background=z,lt==="panorama")_.environment=z;else{const U=new za(b);_.environment=U.fromScene(new cf).texture,U.dispose()}b.render(_,N)});else{_.background=new wt("#09090b");const z=new za(b);_.environment=z.fromScene(new cf).texture,z.dispose(),b.render(_,N)}},[Ye,lt]);const bn=Ie.useRef({isDragging:!1,itemId:null,startPos:null,originalItemPos:null,accumulatedOffset:{x:0,z:0}}),br=Ie.useRef(t),Cl=Ie.useRef(nt),ia=Ie.useRef(Ve);Ie.useEffect(()=>{br.current=t},[t]),Ie.useEffect(()=>{Cl.current=nt},[nt]),Ie.useEffect(()=>{ia.current=Ve},[Ve]),Ie.useEffect(()=>{if(!w.current||H.current)return;const _=w.current,b=new Vc({antialias:!0,preserveDrawingBuffer:!0,alpha:!0,powerPreference:"high-performance"});b.setPixelRatio(Math.min(window.devicePixelRatio,2)),b.outputColorSpace=Kt,b.shadowMap.enabled=!0,b.shadowMap.type=qx,b.toneMapping=Kx,b.toneMappingExposure=1,_.appendChild(b.domElement);const N=new Gc;N.background=new wt("#09090b"),N.fog=new Ba("#09090b",200,2e3);const z=new Ep(-500,500,500,-500,.1,6e3),U=new Wr;N.add(U);const te=new AA,X=new lf(16777215,.6);N.add(X);const Q=new af(16777215,.8);Q.position.set(50,100,50),Q.castShadow=!0,Q.shadow.mapSize.width=2048,Q.shadow.mapSize.height=2048,N.add(Q);const xe={azimuth:Math.PI/5,polar:Math.PI/5,distance:Math.max(v.width,v.height)*.8},ge={scene:N,camera:z,renderer:b,group:U,raycaster:te,target:new O(v.width/2,0,v.height/2),zoom:1,size:{width:1,height:1},orbit:xe};H.current=ge;const we=()=>{const{width:de,height:Ne}=_.getBoundingClientRect();ge.size={width:de,height:Ne},b.setSize(de,Ne);const qe=de/Ne,De=Math.max(v.width,v.height)*.7;z.left=-De*qe,z.right=De*qe,z.top=De,z.bottom=-De,z.zoom=ge.zoom,z.updateProjectionMatrix(),b.render(N,z)},Be=()=>{const{azimuth:de,polar:Ne,distance:qe}=xe,De=ge.target.x+Math.cos(de)*Math.cos(Ne)*qe,be=ge.target.z+Math.sin(de)*Math.cos(Ne)*qe,ft=ge.target.y+Math.sin(Ne)*qe;z.position.set(De,ft,be),z.lookAt(ge.target),b.render(N,z)},Je=de=>{const Ne=b.domElement.getBoundingClientRect();return{x:(de.clientX-Ne.left)/Ne.width*2-1,y:-((de.clientY-Ne.top)/Ne.height)*2+1}},Pe=de=>{te.setFromCamera(new Se(de.x,de.y),z);const Ne=new Fr(new O(0,1,0),0),qe=new O;return te.ray.intersectPlane(Ne,qe)?{x:qe.x,z:qe.z}:null},ye=de=>{var qe;te.setFromCamera(new Se(de.x,de.y),z);const Ne=te.intersectObjects(U.children,!0);for(const De of Ne){let be=De.object;for(;be;){if((qe=be.userData)!=null&&qe.itemId)return be.userData.itemId;be=be.parent}}return null},Xe=de=>{const Ne=Je(de),qe=Cl.current;if(ia.current,de.button===2&&!ot.current){de.preventDefault();const De={x:de.clientX,y:de.clientY},be=gt=>{const Qe=gt.clientX-De.x,ke=gt.clientY-De.y;De.x=gt.clientX,De.y=gt.clientY,xe.azimuth+=Qe*.005,xe.polar=Jn(xe.polar+ke*.005,.1,Math.PI/2.1),Be()},ft=()=>{window.removeEventListener("pointermove",be),window.removeEventListener("pointerup",ft)};window.addEventListener("pointermove",be),window.addEventListener("pointerup",ft);return}if(de.button===1||ot.current){de.preventDefault();const De={x:de.clientX,y:de.clientY},be=gt=>{const Qe=gt.clientX-De.x,ke=gt.clientY-De.y;De.x=gt.clientX,De.y=gt.clientY;const it=Math.max(v.width,v.height)*.7/z.zoom/400,st=new O;z.getWorldDirection(new O),st.setFromMatrixColumn(z.matrixWorld,0),st.y=0,st.normalize();const vt=new O;z.getWorldDirection(vt),vt.y=0,vt.normalize(),ge.target.x+=st.x*Qe*it+vt.x*ke*it,ge.target.z+=st.z*Qe*it+vt.z*ke*it,Be()},ft=()=>{window.removeEventListener("pointermove",be),window.removeEventListener("pointerup",ft)};window.addEventListener("pointermove",be),window.addEventListener("pointerup",ft);return}if(de.button===0){if(de.preventDefault(),qe!=="select"){const be=Pe(Ne);if(be){const ft=Math.round(be.x/y)*y,gt=Math.round(be.z/y)*y,Qe={id:ho(),x:ft,y:gt,rotation:0};let ke=null;switch(qe){case"add-camera":ke={...Qe,type:"camera",rotation:45,label:"Camera",description:"",fov:70,hFov:70,vFov:45,pitch:-15,height:60,aspect:16/9,mount:{type:"free",edgeT:.5,height:60},range:150,color:An.camera[0],labelOffset:{x:0,y:30},connectorDashSize:3};break;case"add-building":ke={...Qe,type:"building",width:100,height:80,label:"Building",color:An.building[0],points:Cc(100,80)};break;case"add-tree":ke={...Qe,type:"tree",radius:25,color:An.tree[0]};break;case"add-parking":ke={...Qe,type:"parking",width:30,height:50,color:An.parking[0]};break;case"add-label":ke={...Qe,type:"label",text:"Label",fontSize:14,color:An.label[0]};break}ke&&(e(it=>[...it,ke]),D(ke.id),$e("select"),setTimeout(()=>f(),50))}return}const De=ye(Ne);if(De){D(De);const be=br.current.find(ke=>ke.id===De),ft=Pe(Ne);ft&&be&&(bn.current={isDragging:!0,itemId:De,startPos:ft,originalItemPos:{x:be.x,y:be.y},accumulatedOffset:{x:0,z:0}});const gt=ke=>{var Ll,Nl;const it=bn.current;if(!it.isDragging||!it.itemId||!it.startPos||!it.originalItemPos)return;const st=Je(ke),vt=Pe(st);if(!vt)return;const zt=vt.x-it.startPos.x,zn=vt.z-it.startPos.z;it.accumulatedOffset={x:zt,z:zn};const Zn=Math.round((it.originalItemPos.x+zt)/y)*y,oi=Math.round((it.originalItemPos.y+zn)/y)*y,Ar=fe.current.get(it.itemId);if(Ar){const ji=(Ll=br.current.find(xi=>xi.id===it.itemId))==null?void 0:Ll.type;if(ji==="camera"){const xi=br.current.find(ra=>ra.id===it.itemId),qu=((Nl=xi==null?void 0:xi.mount)==null?void 0:Nl.height)??(xi==null?void 0:xi.height)??10;Ar.position.set(Zn,qu,oi)}else ji==="tree"||ji==="parking"||ji==="building"?Ar.position.set(Zn,0,oi):ji==="image"?Ar.position.set(Zn,.25,oi):ji==="label"&&Ar.position.set(Zn,8,oi);ge.renderer.render(ge.scene,ge.camera)}},Qe=()=>{const ke=bn.current;if(ke.isDragging&&ke.itemId&&ke.originalItemPos){const it=Math.round((ke.originalItemPos.x+ke.accumulatedOffset.x)/y)*y,st=Math.round((ke.originalItemPos.y+ke.accumulatedOffset.z)/y)*y,vt=ke.itemId;e(zt=>zt.map(zn=>zn.id===vt?{...zn,x:it,y:st}:zn)),setTimeout(()=>f(),50)}bn.current={isDragging:!1,itemId:null,startPos:null,originalItemPos:null,accumulatedOffset:{x:0,z:0}},window.removeEventListener("pointermove",gt),window.removeEventListener("pointerup",Qe)};window.addEventListener("pointermove",gt),window.addEventListener("pointerup",Qe)}else{D(null);const be={x:de.clientX,y:de.clientY},ft=Qe=>{const ke=Qe.clientX-be.x,it=Qe.clientY-be.y;be.x=Qe.clientX,be.y=Qe.clientY;const st=Math.max(v.width,v.height)*.7/z.zoom/400,vt=new O;z.getWorldDirection(new O),vt.setFromMatrixColumn(z.matrixWorld,0),vt.y=0,vt.normalize();const zt=new O;z.getWorldDirection(zt),zt.y=0,zt.normalize(),ge.target.x+=vt.x*ke*st+zt.x*it*st,ge.target.z+=vt.z*ke*st+zt.z*it*st,Be()},gt=()=>{window.removeEventListener("pointermove",ft),window.removeEventListener("pointerup",gt)};window.addEventListener("pointermove",ft),window.addEventListener("pointerup",gt)}}},ce=de=>{de.preventDefault();const Ne=Jn(ge.zoom*(de.deltaY<0?1.1:.9),.4,3.5);ge.zoom=Ne,z.zoom=ge.zoom,z.updateProjectionMatrix(),Be()};return b.domElement.addEventListener("pointerdown",Xe),b.domElement.addEventListener("wheel",ce,{passive:!1}),b.domElement.addEventListener("contextmenu",de=>de.preventDefault()),Be(),we(),window.addEventListener("resize",we),()=>{b.domElement.removeEventListener("pointerdown",Xe),b.domElement.removeEventListener("wheel",ce),window.removeEventListener("resize",we),b.dispose(),_.removeChild(b.domElement),H.current=null,fe.current.clear(),pe.current=[]}},[v.height,v.width,I]),Ie.useEffect(()=>{I==="iso3d"&&cs()},[t,g,m,v,y,A,I,Ge,Ye,lt,Ve]),Ie.useEffect(()=>{I!=="plan"&&ze(!1)},[I]),Ie.useEffect(()=>{if(g){const _=new Image;_.src=g,_.onload=()=>{k.current=_}}else k.current=null},[g]),Ie.useEffect(()=>{var gt;if(!rt||!Te.current||!Ve)return;const _=t.find(Qe=>Qe.id===Ve),b=(_==null?void 0:_.type)==="camera"?_:null;if(!b)return;const N=Te.current,z=N.width,U=N.height,te=Wt(b),X=((gt=b.mount)==null?void 0:gt.height)??b.height??10,Q=b.hFov??b.fov,xe=b.pitch??-15,ge=b.range,we=un.degToRad(b.rotation),Be=z/U,Je=2*Math.atan(Math.tan(un.degToRad(Q)/2)/Be),Pe=un.radToDeg(Je),ye=new Gc;ye.background=new wt("#09090b"),ye.fog=new Ba("#09090b",ge*.3,ge*1.2);const Xe=new ei(Pe,Be,1,ge*2);Xe.position.set(te.x,X,te.y);const ce=un.degToRad(xe),de=new O(te.x+Math.cos(we)*100,X+Math.tan(ce)*100,te.y+Math.sin(we)*100);Xe.lookAt(de),ye.add(new lf(16777215,.5));const Ne=new af(16777215,.7);Ne.position.set(100,200,50),ye.add(Ne);const qe=new Ze(new yi(v.width*2,v.height*2),new fn({color:"#6B8E23",roughness:.9}));if(qe.rotation.x=-Math.PI/2,qe.position.set(v.width/2,0,v.height/2),ye.add(qe),k.current){const Qe=new ef(k.current);Qe.colorSpace=Kt;const ke=new Ze(new yi(m.width,m.height),new Qi({map:Qe,transparent:!0,opacity:m.opacity}));ke.rotation.x=-Math.PI/2,ke.position.set(m.x+m.width/2,.1,m.y+m.height/2),ye.add(ke)}t.forEach(Qe=>{if(Qe.type==="building"){const ke=Qe,it=Ee(ke),st=new Ss(it.map(zn=>new Se(zn.x,-zn.y))),vt=new Wa(st,{depth:60,bevelEnabled:!1});vt.rotateX(-Math.PI/2);const zt=new Ze(vt,new fn({color:ke.color,side:ui}));zt.position.set(ke.x,0,ke.y),zt.rotation.y=-un.degToRad(ke.rotation),ye.add(zt)}Qe.type==="tree"&&ye.add(pf(Qe)),Qe.type==="parking"&&ye.add(hf(Qe))});const De=new Vc({canvas:N,antialias:!0});De.setSize(z,U);const be=new za(De);ye.environment=be.fromScene(new cf).texture,De.render(ye,Xe),Ye&&new bc().load(Ye,Qe=>{ye.background=Qe,De.render(ye,Xe)});const ft=N.getContext("2d");return ft&&(ft.fillStyle="rgba(0,0,0,0.7)",ft.fillRect(0,0,z,26),ft.fillStyle="#fff",ft.font="bold 11px sans-serif",ft.fillText(`📷 ${b.label}`,8,11),ft.font="10px sans-serif",ft.fillStyle="#94a3b8",ft.fillText(`FOV: ${Q.toFixed(0)}°×${Pe.toFixed(0)}° | Pitch: ${xe}° | Range: ${ge}`,8,23),ft.fillStyle="#ef4444",ft.beginPath(),ft.arc(z-12,13,4,0,Math.PI*2),ft.fill(),ft.fillStyle="#fff",ft.font="9px sans-serif",ft.fillText("LIVE",z-42,16)),()=>{be.dispose(),De.dispose()}},[Ve,t,rt,m,v,Ye]);const Rl=_=>{if(!ve.current)return{x:0,y:0};const b=ve.current.getScreenCTM();if(!b)return{x:0,y:0};const N=(_.clientX-b.e)/b.a,z=(_.clientY-b.f)/b.d;return{x:(N-B.x)/q,y:(z-B.y)/q}},si=(_,b,N="move",z)=>{if(nt!=="select"||I==="iso3d")return;_.stopPropagation();const U=t.find(xe=>xe.id===b);if(!U)return;D(b);const te=Rl(_);if(N==="move"&&Ve===b&&U.type==="building"){const ge=Ht(U);for(let we=0;we<ge.length;we++){const Be=ge[we],Je=ge[(we+1)%ge.length],Pe={x:Je.x-Be.x,y:Je.y-Be.y},ye={x:te.x-Be.x,y:te.y-Be.y},Xe=Pe.x*Pe.x+Pe.y*Pe.y||1,ce=Math.max(0,Math.min(1,(ye.x*Pe.x+ye.y*Pe.y)/Xe)),de={x:Be.x+Pe.x*ce,y:Be.y+Pe.y*ce};if(Math.sqrt((te.x-de.x)**2+(te.y-de.y)**2)<8){bl(b,de),setTimeout(()=>f(),50);return}}}const X=U.type==="camera"?Wt(U):{x:U.x,y:U.y};let Q={...U};if(N==="fov"&&U.type==="camera"){const xe=te.x-X.x,ge=te.y-X.y,we=Math.atan2(ge,xe)*180/Math.PI,Be=U.hFov??U.fov,Je=U.rotation+(z==="left"?-Be/2:Be/2);Q={...U,fovHandleOffset:ff(we-Je)}}ae({type:N,itemId:b,startMouse:te,startVal:Q,variant:z,snap:F&&!_.altKey})},k_=_=>{var U,te;if(nt==="add-camera"&&I==="plan"){const X=Rl(_),Q=Sn(X);Q&&Q.distance<100?xt({buildingId:Q.buildingId,edgeIndex:Q.edgeIndex,edgeT:Q.edgeT,point:Q.point,rotation:Q.rotation}):xt(null)}else At&&xt(null);if(he){const X=_.clientX-ue.x,Q=_.clientY-ue.y;Y({x:ue.panX+X,y:ue.panY+Q});return}if(!se.itemId||!ve.current)return;const b=Rl(_),N=t.find(X=>X.id===se.itemId);if(!N)return;const z=N.type==="camera"?Wt(N):{x:N.x,y:N.y};if(se.type==="move"){const X=b.x-se.startMouse.x,Q=b.y-se.startMouse.y,xe=se.startVal.x+X,ge=se.startVal.y+Q;if(N.type==="camera"&&((U=N.mount)==null?void 0:U.type)==="building"&&N.mount.buildingId){const we=Lt(N.mount.buildingId);if(we){const Be=Ht(we);if(Be.length>=2){const Je=Jn(N.mount.edgeIndex??0,0,Be.length-1),Pe=(Je+1)%Be.length,ye=Be[Je],Xe=Be[Pe],ce={x:Xe.x-ye.x,y:Xe.y-ye.y},de={x:xe-ye.x,y:ge-ye.y},Ne=ce.x*ce.x+ce.y*ce.y||1;let qe=(de.x*ce.x+de.y*ce.y)/Ne;qe=Jn(qe,0,1);const De={x:ye.x+ce.x*qe,y:ye.y+ce.y*qe};Ct(se.itemId,{x:De.x,y:De.y,mount:{...N.mount,edgeT:qe}});return}}}Ct(se.itemId,{x:Ae(xe,se.snap),y:Ae(ge,se.snap)})}else if(se.type==="move-label"&&N.type==="camera"){const X=b.x-se.startMouse.x,Q=b.y-se.startMouse.y,xe=se.startVal.labelOffset||{x:0,y:30};Ct(se.itemId,{labelOffset:{x:xe.x+X,y:xe.y+Q}})}else if(se.type==="rotate"){const X=b.x-z.x,Q=b.y-z.y,xe=Math.atan2(Q,X)*180/Math.PI;Ct(se.itemId,{rotation:xe})}else if(se.type==="fov"&&N.type==="camera"){const X=b.x-z.x,Q=b.y-z.y,xe=Math.atan2(Q,X)*180/Math.PI,ge=((te=se.startVal)==null?void 0:te.fovHandleOffset)??0,we=ff(xe-ge),Be=ff(we-N.rotation),Je=se.variant==="left"?-Be:Be;if(Je<=0)return;const Pe=Jn(Je*2,10,180);Ct(se.itemId,{fov:Pe,hFov:Pe})}else if(se.type==="range"&&N.type==="camera"){const X=b.x-z.x,Q=b.y-z.y,xe=Math.sqrt(X*X+Q*Q);Ct(se.itemId,{range:Math.max(xe,50)})}else if(se.type==="vertex"&&N.type==="building"){const X=It(b,N),Q=Ee(N),xe=typeof se.variant=="string"?parseInt(se.variant,10):Number(se.variant);if(!Number.isNaN(xe)&&Q[xe]){const ge={x:Ae(X.x,se.snap),y:Ae(X.y,se.snap)},we=Q.map((Be,Je)=>Je===xe?ge:Be);Ct(se.itemId,{points:we})}}},z_=()=>{se.type&&f(),ee(!1),ae({type:null,itemId:null,startMouse:{x:0,y:0},startVal:null,snap:!1})};Ie.useEffect(()=>{yh.enabled=!0,f()},[]);const B_=_=>{if(I!=="iso3d"&&!he){if(Ce&&Ve){const b=t.find(N=>N.id===Ve);if(b&&b.type==="building"){const N=Rl(_);bl(Ve,N),ze(!1);return}}(_.target===ve.current||_.target.tagName==="image"||_.target.id==="grid-bg")&&(nt!=="select"?vi(_,nt):D(null))}},H_=_=>{(_.button===1||_.button===2||He||_.button===0&&nt==="select")&&(_.preventDefault(),ee(!0),Le({x:_.clientX,y:_.clientY,panX:B.x,panY:B.y}))},V_=_=>{if(_.preventDefault(),!ve.current)return;const b=ve.current.getScreenCTM();if(!b)return;const N=(_.clientX-b.e)/b.a,z=(_.clientY-b.f)/b.d,U=(N-B.x)/q,te=(z-B.y)/q,X=Jn(q*(_.deltaY>0?.9:1.1),.3,3.5),Q=N-U*X,xe=z-te*X;le(X),Y({x:Q,y:xe})},_e=t.find(_=>_.id===Ve),Nt=(_e==null?void 0:_e.type)==="camera"?_e:null,Wi=(Nt==null?void 0:Nt.aspect)??16/9,Vs=Nt?Nt.hFov??Nt.fov:70,$u=Nt?Nt.vFov??Ma(Vs,Wi):45,Ip=Nt?xC(Vs,$u):90,Pl=t.filter(_=>_.type==="building"),Yu=((Op=Nt==null?void 0:Nt.mount)==null?void 0:Op.type)??"free",Gs=(Fp=Nt==null?void 0:Nt.mount)!=null&&Fp.buildingId?Lt(Nt.mount.buildingId):Pl[0],G_=Gs?Ee(Gs).length:0,Dp=((kp=Nt==null?void 0:Nt.mount)==null?void 0:kp.edgeIndex)??0,Up=((zp=Nt==null?void 0:Nt.mount)==null?void 0:zp.edgeT)??.5;return M.jsxs("div",{className:"relative h-screen bg-zinc-950 font-sans text-slate-200 overflow-hidden w-full selection:bg-indigo-500/30",children:[$&&M.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",children:M.jsxs("div",{className:"bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden text-slate-200",children:[M.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-white/10",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-400",children:"Export"}),M.jsx("h2",{className:"text-lg font-semibold text-slate-200",children:"Export Plan"})]}),M.jsx("button",{onClick:()=>ie(!1),className:"p-2 text-slate-400 hover:text-slate-600",children:M.jsx(uf,{className:"w-5 h-5"})})]}),M.jsxs("div",{className:"px-5 py-4 space-y-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Title"}),M.jsx("input",{type:"text",value:T,onChange:_=>V(_.target.value),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:["Export List (",re.length," items)"]}),re.length>0&&M.jsx("button",{onClick:()=>Et([]),className:"text-xs text-red-500 hover:text-red-700",children:"Clear All"})]}),re.length===0?M.jsxs("div",{className:"bg-slate-50 rounded-lg p-4 text-center text-slate-400 text-sm",children:[M.jsx("p",{children:"No views added yet"}),M.jsx("p",{className:"text-xs mt-1",children:'Use "Add to Export" buttons while working'})]}):M.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-48 overflow-y-auto",children:re.map(_=>M.jsxs("div",{className:"relative group bg-zinc-800 rounded-lg overflow-hidden border border-white/5",children:[M.jsx("div",{className:"aspect-video w-full overflow-hidden",children:M.jsx("img",{src:_.dataUrl,alt:_.label,className:"w-full h-full object-cover"})}),M.jsxs("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2",children:[M.jsx("a",{href:_.dataUrl,download:`${_.label.replace(/[^a-z0-9]/gi,"_").toLowerCase()}.png`,className:"p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-lg",title:"Download Image",onClick:b=>b.stopPropagation(),children:M.jsx(L0,{className:"w-4 h-4"})}),M.jsx("button",{onClick:()=>Et(b=>b.filter(N=>N.id!==_.id)),className:"p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg",title:"Remove",children:M.jsx(uf,{className:"w-4 h-4"})})]}),M.jsx("div",{className:"p-2 bg-zinc-800 absolute bottom-0 inset-x-0",children:M.jsx("p",{className:"text-[10px] text-slate-300 truncate font-medium",children:_.label})})]},_.id))})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Scale"}),M.jsx("input",{type:"number",min:"1",max:"5",value:j.scale,onChange:_=>ne({...j,scale:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Padding"}),M.jsx("input",{type:"number",min:"0",max:"200",value:j.padding,onChange:_=>ne({...j,padding:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Include"}),M.jsx("div",{className:"flex flex-wrap gap-2",children:[{key:"includeGrid",label:"Grid"},{key:"includeLegend",label:"Legend"},{key:"includeTitle",label:"Title Block"}].map(_=>{const b=j[_.key];return M.jsx("button",{onClick:()=>ne({...j,[_.key]:!b}),className:`px-3 py-1 rounded-full text-xs font-semibold border ${b?"bg-emerald-100 border-emerald-200 text-emerald-700":"bg-white border-slate-200 text-slate-400"}`,children:_.label},_.key)})})]}),M.jsx("p",{className:"text-xs text-slate-400",children:'Tip: Add views using "Add to Export" buttons, then export a client report.'})]}),M.jsxs("div",{className:"px-5 py-4 border-t border-white/10 bg-slate-50 flex flex-wrap justify-end gap-2",children:[M.jsx("button",{onClick:()=>ie(!1),className:"px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-800",children:"Cancel"}),M.jsx("button",{onClick:()=>{Z(),ie(!1)},className:"px-4 py-2 text-sm font-semibold bg-slate-600 hover:bg-slate-700 text-white rounded-lg",children:"Plan Only"}),M.jsx("button",{onClick:()=>{mt(),ie(!1)},disabled:re.length===0,className:`px-3 py-2 text-sm font-semibold rounded-lg ${re.length===0?"bg-slate-200 text-slate-400 cursor-not-allowed":"bg-emerald-600 hover:bg-emerald-700 text-white"}`,children:"Export PNG"}),M.jsx("button",{onClick:()=>{_t(),ie(!1)},disabled:re.length===0,className:`px-3 py-2 text-sm font-semibold rounded-lg ${re.length===0?"bg-slate-200 text-slate-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 text-white"}`,children:"Export PDF"})]})]})}),Ce&&I==="plan"&&Ve&&M.jsx("div",{className:"absolute left-1/2 bottom-10 -translate-x-1/2 rounded-full bg-emerald-600/90 px-4 py-2 text-xs font-semibold text-white shadow-xl z-50 backdrop-blur-md",children:"Click an edge to insert a vertex."}),M.jsxs("div",{className:"absolute left-4 top-4 bottom-4 w-14 flex flex-col items-center py-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 gap-3 ring-1 ring-white/5",children:[M.jsx("div",{className:"flex flex-col gap-2 w-full px-2",children:[{mode:"select",icon:YA,label:"Select"},{mode:"add-camera",icon:Ac,label:"Camera"},{mode:"add-building",icon:tC,label:"Building"},{mode:"add-tree",icon:rC,label:"Tree"},{mode:"add-parking",icon:DA,label:"Parking"},{mode:"add-label",icon:oC,label:"Label"}].map(_=>M.jsx("button",{onClick:()=>nt===_.mode?$e("select"):$e(_.mode),title:_.label,className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${nt===_.mode?"bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 scale-105":"text-slate-400 hover:text-white hover:bg-white/10"}`,children:M.jsx(_.icon,{className:"w-5 h-5"})},_.mode))}),M.jsx("div",{className:"w-8 h-px bg-white/10 my-1"}),M.jsx("div",{className:"flex flex-col gap-2 w-full px-2",children:M.jsx("button",{onClick:()=>W(I==="plan"?"iso3d":"plan"),className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${I==="iso3d"?"bg-indigo-600 text-white shadow-lg":"text-slate-400 hover:text-white hover:bg-white/10"}`,title:"Toggle 3D View",children:M.jsx(BA,{className:"w-5 h-5"})})}),M.jsxs("div",{className:"mt-auto flex flex-col gap-2 w-full px-2",children:[M.jsx("button",{onClick:h,className:"w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all",title:"Undo",children:M.jsx(lC,{className:"w-5 h-5"})}),M.jsx("button",{onClick:p,className:"w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all",title:"Redo",children:M.jsx(KA,{className:"w-5 h-5"})})]})]}),M.jsxs("div",{className:"absolute top-4 left-24 right-4 lg:right-[22rem] h-14 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-40 flex items-center px-4 justify-between ring-1 ring-white/5 transition-all duration-300",children:[M.jsxs("div",{className:"flex items-center gap-4",children:[M.jsxs("h1",{className:"text-lg font-bold text-slate-200 tracking-tight flex items-center gap-2",children:[M.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500",children:M.jsx(Ac,{className:"w-5 h-5"})}),T]}),M.jsx("div",{className:"h-6 w-px bg-white/10 mx-2"}),M.jsxs("div",{className:"flex items-center gap-1",children:[M.jsx("button",{onClick:()=>{var _;return(_=Oe.current)==null?void 0:_.click()},className:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors",title:"Load Project",children:M.jsx(FA,{className:"w-5 h-5"})}),M.jsx("button",{onClick:jt,className:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors",title:"Save Project",children:M.jsx(QA,{className:"w-5 h-5"})})]})]}),M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("input",{type:"file",ref:oe,className:"hidden",accept:"image/*",onChange:ln}),M.jsx("input",{type:"file",ref:et,className:"hidden",accept:"image/*",onChange:Pi}),M.jsx("input",{type:"file",ref:Oe,className:"hidden",accept:".json",onChange:kn}),M.jsx("input",{type:"file",ref:C,className:"hidden",accept:"image/*,.hdr",onChange:St}),M.jsxs("button",{onClick:()=>{var _;return(_=oe.current)==null?void 0:_.click()},className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",children:[M.jsx(uC,{className:"w-4 h-4"}),M.jsx("span",{children:"Map"})]}),M.jsxs("button",{onClick:()=>{var _;return(_=et.current)==null?void 0:_.click()},className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",children:[M.jsx(N0,{className:"w-4 h-4"}),M.jsx("span",{children:"Image"})]}),M.jsxs("button",{onClick:ut,className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-slate-300 transition-all",title:"Add Current View",children:[M.jsx(I0,{className:"w-4 h-4"}),M.jsx("span",{className:"hidden sm:inline",children:"Add View"})]}),M.jsxs("button",{onClick:()=>ie(!0),className:"flex items-center gap-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-lg shadow-indigo-500/20 transition-all",children:[M.jsx(L0,{className:"w-4 h-4"}),M.jsx("span",{children:"Export"})]})]})]}),M.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[M.jsx("div",{className:"w-full h-full relative overflow-auto bg-zinc-950 flex items-center justify-center pt-20 pl-24 pr-80 pb-6 custom-scrollbar",children:M.jsx("div",{className:"shadow-2xl bg-zinc-900 relative ring-1 ring-white/10 rounded-lg overflow-hidden",children:I==="plan"?M.jsxs("svg",{ref:ve,width:v.width,height:v.height,viewBox:`0 0 ${v.width} ${v.height}`,className:`bg-white block ${nt==="select"?"cursor-default":"cursor-crosshair"}`,onMouseMove:k_,onMouseUp:z_,onMouseDown:H_,onWheel:V_,onClick:B_,xmlns:"http://www.w3.org/2000/svg",children:[M.jsx("defs",{children:M.jsx("pattern",{id:"smallGrid",width:y,height:y,patternUnits:"userSpaceOnUse",children:M.jsx("path",{d:`M ${y} 0 L 0 0 0 ${y}`,fill:"none",stroke:"#333333",strokeWidth:"1"})})}),M.jsxs("g",{transform:`translate(${B.x}, ${B.y}) scale(${q})`,children:[A&&I==="plan"&&M.jsx("rect",{id:"grid-bg",width:"100%",height:"100%",fill:"url(#smallGrid)"}),g&&I==="plan"&&M.jsx("image",{href:g,x:m.x,y:m.y,width:m.width,height:m.height,preserveAspectRatio:"none",opacity:m.opacity,className:"pointer-events-none"}),t.map(_=>{var N,z;const b=Ve===_.id;if(_.type==="building"||_.type==="parking"){const U=_,te=_.type==="parking";if(!te){const X=_,Q=Ee(X);return M.jsxs("g",{transform:`translate(${X.x}, ${X.y}) rotate(${X.rotation})`,onMouseDown:xe=>si(xe,X.id,"move"),onClick:xe=>xe.stopPropagation(),className:"cursor-move",opacity:se.itemId===X.id&&se.type==="move"?.8:1,children:[M.jsx("polygon",{points:Q.map(xe=>`${xe.x},${xe.y}`).join(" "),fill:X.color,stroke:b?"#059669":"#334155",strokeWidth:b?3:1}),M.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",pointerEvents:"none",className:"font-bold select-none",children:X.label}),b&&Q.map((xe,ge)=>M.jsx("circle",{cx:xe.x,cy:xe.y,r:"5",fill:"#ffffff",stroke:"#059669",strokeWidth:"2",className:"cursor-pointer",onMouseDown:we=>si(we,X.id,"vertex",String(ge))},`${X.id}-vertex-${ge}`))]},X.id)}return M.jsxs("g",{transform:`translate(${U.x}, ${U.y}) rotate(${U.rotation})`,onMouseDown:X=>si(X,U.id,"move"),onClick:X=>{Ce||X.stopPropagation()},className:"cursor-move",opacity:se.itemId===U.id&&se.type==="move"?.8:1,children:[M.jsx("rect",{x:-U.width/2,y:-U.height/2,width:U.width,height:U.height,fill:U.color,stroke:b?"#3b82f6":te?"#94a3b8":"#334155",strokeWidth:b?3:1,strokeDasharray:te?"4":"0"}),te&&M.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"#94a3b8",fontSize:"16",fontWeight:"bold",pointerEvents:"none",transform:"rotate(-90)",children:"P"}),!te&&M.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",pointerEvents:"none",className:"font-bold select-none",children:U.label})]},U.id)}if(_.type==="tree"){const U=_;return M.jsxs("g",{transform:`translate(${U.x}, ${U.y})`,onMouseDown:te=>si(te,U.id,"move"),onClick:te=>te.stopPropagation(),className:"cursor-move",children:[M.jsx("circle",{r:U.radius,fill:U.color,fillOpacity:"0.6",stroke:b?"#3b82f6":U.color,strokeWidth:b?2:0}),M.jsx("circle",{r:U.radius*.5,fill:"black",fillOpacity:"0.1"})]},U.id)}if(_.type==="label"){const U=_;return M.jsx("text",{x:U.x,y:U.y,fontSize:U.fontSize,fill:b?"#3b82f6":U.color,fontWeight:"bold",textAnchor:"middle",className:"cursor-move select-none",onMouseDown:te=>si(te,U.id,"move"),onClick:te=>te.stopPropagation(),style:{textShadow:"0px 1px 2px rgba(255,255,255,0.8)"},children:U.text},U.id)}if(_.type==="image"){const U=_;return M.jsx("g",{transform:`translate(${U.x}, ${U.y}) rotate(${U.rotation})`,onMouseDown:te=>si(te,U.id,"move"),onClick:te=>te.stopPropagation(),className:"cursor-move",children:M.jsx("image",{href:U.src,x:-U.width/2,y:-U.height/2,width:U.width,height:U.height,style:{outline:b?"2px solid #3b82f6":"none"}})},U.id)}if(_.type==="camera"){const U=_,te=Wt(U),X=U.range,Q=U.hFov??U.fov,xe=(U.rotation-Q/2)*(Math.PI/180),ge=(U.rotation+Q/2)*(Math.PI/180),we=X*Math.cos(xe),Be=X*Math.sin(xe),Je=X*Math.cos(ge),Pe=X*Math.sin(ge),ye=40,Xe=U.rotation*(Math.PI/180),ce=ye*Math.cos(Xe),de=ye*Math.sin(Xe),Ne=((N=U.labelOffset)==null?void 0:N.x)??0,qe=((z=U.labelOffset)==null?void 0:z.y)??30;U.connectorDashSize;const De=t.filter(st=>st.type==="building"),be=$t(te,X,Q,U.rotation,De),ft=t.filter(st=>st.type==="building"||st.type==="tree"),gt=$t(te,X,Q,U.rotation,ft),Qe=st=>{let vt="M 0 0 ";return st.forEach(zt=>{vt+=`L ${zt.x} ${zt.y} `}),vt+"Z"},ke=Qe(be),it=Qe(gt);return M.jsxs("g",{transform:`translate(${te.x}, ${te.y})`,onClick:st=>st.stopPropagation(),children:[M.jsxs("g",{onMouseDown:st=>si(st,U.id,"move"),className:"cursor-move",children:[M.jsxs("defs",{children:[M.jsxs("mask",{id:`mask-${U.id}`,children:[M.jsx("rect",{x:-X,y:-X,width:X*2,height:X*2,fill:"white"}),M.jsx("path",{d:it,fill:"black"})]}),M.jsxs("radialGradient",{id:`grad-blue-${U.id}`,cx:"0",cy:"0",r:X,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"50%",stopColor:U.color,stopOpacity:"0.2"}),M.jsx("stop",{offset:"100%",stopColor:U.color,stopOpacity:"0"})]}),M.jsxs("radialGradient",{id:`grad-blue-stroke-${U.id}`,cx:"0",cy:"0",r:X,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"80%",stopColor:U.color,stopOpacity:"1"}),M.jsx("stop",{offset:"100%",stopColor:U.color,stopOpacity:"0"})]}),M.jsxs("radialGradient",{id:`grad-yellow-${U.id}`,cx:"0",cy:"0",r:X,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"50%",stopColor:"#fde047",stopOpacity:"0.3"}),M.jsx("stop",{offset:"100%",stopColor:"#fde047",stopOpacity:"0"})]}),M.jsxs("radialGradient",{id:`grad-yellow-stroke-${U.id}`,cx:"0",cy:"0",r:X,gradientUnits:"userSpaceOnUse",children:[M.jsx("stop",{offset:"80%",stopColor:"#eab308",stopOpacity:"1"}),M.jsx("stop",{offset:"100%",stopColor:"#eab308",stopOpacity:"0"})]})]}),M.jsx("path",{d:ke,fill:`url(#grad-yellow-${U.id})`,stroke:`url(#grad-yellow-stroke-${U.id})`,strokeWidth:"1",strokeDasharray:"4,4",pointerEvents:"none",mask:`url(#mask-${U.id})`}),M.jsx("path",{d:it,fill:`url(#grad-blue-${U.id})`,stroke:`url(#grad-blue-stroke-${U.id})`,strokeWidth:"1",pointerEvents:"none"}),M.jsxs("g",{transform:`rotate(${U.rotation})`,children:[M.jsx("rect",{x:"-10",y:"-8",width:"20",height:"16",rx:"4",fill:b?"#3b82f6":"#1e293b"}),M.jsx("circle",{cx:"0",cy:"0",r:"4",fill:U.color}),M.jsx("rect",{x:"10",y:"-4",width:"6",height:"8",fill:"#475569"})]})]}),b&&M.jsxs(M.Fragment,{children:[M.jsx("line",{x1:"0",y1:"0",x2:ce,y2:de,stroke:"white",strokeWidth:"2",strokeDasharray:"3,3"}),M.jsx("circle",{cx:ce,cy:de,r:"7",fill:"#3b82f6",stroke:"white",strokeWidth:"2",className:"cursor-crosshair",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:st=>si(st,U.id,"rotate")}),M.jsx("circle",{cx:we,cy:Be,r:"6",fill:U.color,stroke:"white",strokeWidth:"2",className:"cursor-ew-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:st=>si(st,U.id,"fov","left")}),M.jsx("circle",{cx:Je,cy:Pe,r:"6",fill:U.color,stroke:"white",strokeWidth:"2",className:"cursor-ew-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:st=>si(st,U.id,"fov","right")}),M.jsx("circle",{cx:X*Math.cos(Xe),cy:X*Math.sin(Xe),r:"6",fill:U.color,stroke:"white",strokeWidth:"2",className:"cursor-ns-resize",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"},onMouseDown:st=>si(st,U.id,"range")})]}),M.jsxs("g",{transform:`translate(${Ne}, ${qe})`,onMouseDown:st=>si(st,U.id,"move-label"),className:"cursor-move hover:opacity-80 transition-opacity",children:[(Math.abs(Ne)>10||Math.abs(qe-30)>10)&&M.jsx("line",{x1:-Ne,y1:-qe,x2:"0",y2:"0",stroke:"white",strokeWidth:"2",strokeDasharray:"6,4",style:{filter:"drop-shadow(0 0 2px rgba(0,0,0,0.8))"}}),M.jsx("rect",{x:"-50",y:"-10",width:"100",height:"20",rx:"4",fill:"rgba(255,255,255,0.9)",stroke:b?"#3b82f6":"transparent",strokeWidth:"1"}),M.jsx("text",{textAnchor:"middle",dy:"4",fontSize:"10",fill:"#334155",fontWeight:"bold",pointerEvents:"none",className:"select-none",children:U.label})]})]},U.id)}return null}),At&&nt==="add-camera"&&M.jsxs("g",{transform:`translate(${At.point.x}, ${At.point.y})`,className:"pointer-events-none",opacity:.6,children:[M.jsx("path",{d:(()=>{const N=(At.rotation-35)*(Math.PI/180),z=(At.rotation+70/2)*(Math.PI/180),U=100*Math.cos(N),te=100*Math.sin(N),X=100*Math.cos(z),Q=100*Math.sin(z);return`M 0 0 L ${U} ${te} A 100 100 0 0 1 ${X} ${Q} Z`})(),fill:"#3b82f6",fillOpacity:"0.2",stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"4,4"}),M.jsxs("g",{transform:`rotate(${At.rotation})`,children:[M.jsx("rect",{x:"-10",y:"-8",width:"20",height:"16",rx:"4",fill:"#3b82f6"}),M.jsx("circle",{cx:"0",cy:"0",r:"4",fill:"white"}),M.jsx("rect",{x:"10",y:"-4",width:"6",height:"8",fill:"#1e40af"})]}),M.jsx("text",{y:"-20",textAnchor:"middle",fill:"#3b82f6",fontSize:"11",fontWeight:"bold",className:"select-none",children:"Click to place"})]}),nt==="add-camera"&&t.filter(_=>_.type==="building").map(_=>{const b=_,N=Ht(b);return N.map((z,U)=>{const te=N[(U+1)%N.length],X=(At==null?void 0:At.buildingId)===b.id&&(At==null?void 0:At.edgeIndex)===U;return M.jsx("line",{x1:z.x,y1:z.y,x2:te.x,y2:te.y,stroke:X?"#3b82f6":"#94a3b8",strokeWidth:X?4:2,strokeDasharray:X?"0":"6,4",className:"pointer-events-none transition-all",opacity:X?1:.5},`edge-highlight-${b.id}-${U}`)})}),t.map(_=>{var b,N;if(_.type==="camera"){const z=_,U=Wt(z),te=((b=z.labelOffset)==null?void 0:b.x)??0,X=((N=z.labelOffset)==null?void 0:N.y)??30,Q=Ve===z.id;return M.jsx("g",{transform:`translate(${U.x}, ${U.y})`,style:{pointerEvents:"none"},children:M.jsxs("g",{transform:`translate(${te}, ${X})`,onMouseDown:xe=>{xe.stopPropagation(),si(xe,z.id,"move-label")},className:"cursor-move hover:opacity-80 transition-opacity",style:{pointerEvents:"auto"},children:[(Math.abs(te)>10||Math.abs(X-30)>10)&&M.jsx("line",{x1:-te,y1:-X,x2:"0",y2:"0",stroke:"white",strokeWidth:"2",strokeDasharray:"6,4",style:{filter:"drop-shadow(0 0 2px rgba(0,0,0,0.8))"}}),M.jsx("rect",{x:"-50",y:"-10",width:"100",height:"20",rx:"4",fill:"rgba(255,255,255,0.9)",stroke:Q?"#3b82f6":"transparent",strokeWidth:"1"}),M.jsx("text",{textAnchor:"middle",dy:"4",fontSize:"10",fill:"#334155",fontWeight:"bold",pointerEvents:"none",className:"select-none",children:z.label})]})},`label-overlay-${z.id}`)}return null})]})]}):M.jsxs("div",{className:"relative flex-1",style:{minWidth:v.width,minHeight:v.height},children:[M.jsx("div",{ref:w,className:"absolute inset-0"}),M.jsxs("div",{className:"absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none",children:[M.jsx("div",{className:"rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-semibold text-slate-300 shadow border border-white/10 pointer-events-auto",children:"Drag to pan · Right-click to rotate · Scroll to zoom"}),M.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[M.jsxs("button",{onClick:()=>{var _;return(_=C.current)==null?void 0:_.click()},className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors flex items-center gap-1",children:[M.jsx(N0,{className:"w-3 h-3"}),"Set 3D BG"]}),M.jsx("button",{onClick:ta,className:"px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/20 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/30 shadow-sm transition-colors",children:"Take Snapshot"}),M.jsx("button",{onClick:sr,className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"Export View"}),M.jsx("button",{onClick:()=>{var _;return Et([...re,{id:ho(),type:"3d",label:"3D View",dataUrl:((_=H.current)==null?void 0:_.renderer.domElement.toDataURL("image/png"))||""}])},className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"+ Add to Export"}),M.jsx("button",{onClick:na,className:"px-3 py-1 rounded-full border border-white/10 bg-zinc-800/80 text-xs font-semibold text-slate-300 hover:bg-zinc-700 hover:text-white shadow-sm transition-colors",children:"Reset View"})]})]})]})})}),Nt&&rt&&M.jsxs("div",{className:"absolute bottom-4 right-96 w-80 bg-zinc-900/90 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/10 z-40 ring-1 ring-black/50",children:[M.jsxs("div",{className:"flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/5",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(Ac,{className:"w-4 h-4 text-emerald-400"}),M.jsxs("span",{className:"text-sm font-medium text-slate-200 truncate",children:[Nt.label," View"]})]}),M.jsx("button",{onClick:()=>pt(!1),className:"p-1 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors",children:M.jsx(uf,{className:"w-4 h-4"})})]}),M.jsx("canvas",{ref:Te,width:320,height:180,className:"w-full"}),M.jsxs("div",{className:"px-3 py-2 bg-white/5 text-xs text-slate-400 flex items-center justify-between border-t border-white/5",children:[M.jsxs("div",{className:"flex gap-3",children:[M.jsxs("span",{children:["H-FOV: ",(Nt.hFov??Nt.fov).toFixed(0),"°"]}),M.jsxs("span",{children:["V-FOV: ",(Nt.vFov??45).toFixed(0),"°"]}),M.jsxs("span",{children:["Range: ",Nt.range]})]}),M.jsxs("button",{onClick:()=>ht(Nt),className:"px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded flex items-center gap-1",children:[M.jsx(I0,{className:"w-3 h-3"}),"Export"]})]})]}),Nt&&!rt&&M.jsxs("button",{onClick:()=>pt(!0),className:"absolute bottom-4 right-96 px-4 py-2 bg-slate-800 text-white rounded-lg shadow-lg hover:bg-slate-700 transition-colors z-40 flex items-center gap-2",children:[M.jsx(Ac,{className:"w-4 h-4"}),M.jsx("span",{className:"text-sm font-medium",children:"Show Camera View"})]}),M.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-80 bg-zinc-900/90 backdrop-blur-xl border-l border-white/10 overflow-y-auto hidden lg:block shadow-2xl z-40 custom-scrollbar",children:_e?M.jsxs("div",{className:"p-6 flex flex-col gap-6",children:[M.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[M.jsxs("h2",{className:"font-bold text-lg text-slate-200 capitalize",children:["Edit ",_e.type]}),M.jsx("button",{onClick:()=>G(_e.id),className:"text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors",children:M.jsx(D0,{className:"w-5 h-5"})})]}),_e.type!=="label"&&M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Rotation"}),M.jsxs("span",{children:[Math.round(_e.rotation),"deg"]})]}),M.jsx("input",{type:"range",min:"0",max:"360",value:_e.rotation,onChange:_=>Ct(_e.id,{rotation:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),(_e.type==="camera"||_e.type==="building"||_e.type==="image"||_e.type==="label")&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:_e.type==="label"?"Text Content":"Label"}),M.jsx("input",{type:"text",value:_e.type==="label"?_e.text:_e.label,onChange:_=>Ct(_e.id,_e.type==="label"?{text:_.target.value}:{label:_.target.value}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),_e.type==="label"&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Font Size"}),M.jsx("input",{type:"number",min:"8",max:"72",value:_e.fontSize,onChange:_=>Ct(_e.id,{fontSize:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),(_e.type==="building"||_e.type==="parking")&&M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),M.jsx("input",{type:"number",value:_e.width,onChange:_=>_e.type==="building"?Qo(_e.id,parseInt(_.target.value),_e.height):Ct(_e.id,{width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),M.jsx("input",{type:"number",value:_e.height,onChange:_=>_e.type==="building"?Qo(_e.id,_e.width,parseInt(_.target.value)):Ct(_e.id,{height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),_e.type==="building"&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Building Shape"}),M.jsxs("div",{className:"flex flex-wrap gap-2",children:[M.jsx("button",{onClick:()=>Tl(_e.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Add Vertex"}),M.jsx("button",{onClick:()=>ze(!0),className:`px-3 py-1 rounded-full border text-xs ${Ce?"border-emerald-300 bg-emerald-50 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"}`,children:"Insert on Edge"}),M.jsx("button",{onClick:()=>ju(_e.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Remove Vertex"}),M.jsx("button",{onClick:()=>Xu(_e.id),className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 text-xs",children:"Reset Rectangle"})]}),M.jsx("p",{className:"text-xs text-slate-400",children:"Drag the green nodes in plan view to sculpt the footprint. Click “Insert on Edge” then click any edge."})]}),_e.type==="image"&&M.jsxs("div",{className:"space-y-4",children:[M.jsxs("button",{onClick:()=>Ct(_e.id,{aspectRatioLocked:!_e.aspectRatioLocked}),className:`flex items-center gap-2 text-sm font-medium w-full p-2 rounded border ${_e.aspectRatioLocked?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-slate-200 text-slate-400"}`,children:[_e.aspectRatioLocked?M.jsx(WA,{className:"w-4 h-4"}):M.jsx(VA,{className:"w-4 h-4"}),"Maintain Proportions"]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),M.jsx("input",{type:"number",value:Math.round(_e.width),onChange:_=>R(_e.id,parseInt(_.target.value),void 0),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),M.jsx("input",{type:"number",value:Math.round(_e.height),onChange:_=>R(_e.id,void 0,parseInt(_.target.value)),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Size Scale"}),M.jsx("input",{type:"range",min:"10",max:"600",value:Math.max(_e.width,_e.height),onChange:_=>{const b=parseInt(_.target.value);_e.width>=_e.height?R(_e.id,b,void 0):R(_e.id,void 0,b)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),_e.type==="tree"&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Canopy Size"}),M.jsx("input",{type:"range",min:"10",max:"100",value:_e.radius,onChange:_=>Ct(_e.id,{radius:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),_e.type==="camera"&&M.jsxs("div",{className:"space-y-5",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Horizontal FOV"}),M.jsxs("span",{children:[Math.round(Vs),"deg"]})]}),M.jsx("input",{type:"range",min:"10",max:"180",value:Vs,onChange:_=>{const b=parseInt(_.target.value),N=Ma(b,Wi);Gi(_e.id,b,N,Wi)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Vertical FOV"}),M.jsxs("span",{children:[Math.round($u),"deg"]})]}),M.jsx("input",{type:"range",min:"10",max:"180",value:$u,onChange:_=>{const b=parseInt(_.target.value),N=_C(b,Wi);Gi(_e.id,N,b,Wi)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Diagonal FOV"}),M.jsxs("span",{children:[Math.round(Ip),"deg"]})]}),M.jsx("input",{type:"range",min:"20",max:"180",value:Ip,onChange:_=>{const b=parseInt(_.target.value),{h:N,v:z}=vC(b,Wi);Gi(_e.id,N,z,Wi)},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Aspect Ratio"}),M.jsxs("select",{value:Wi,onChange:_=>{const b=parseFloat(_.target.value),N=Ma(Vs,b);Gi(_e.id,Vs,N,b)},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none",children:[M.jsx("option",{value:16/9,children:"16:9 (Widescreen)"}),M.jsx("option",{value:4/3,children:"4:3 (Standard)"}),M.jsx("option",{value:1,children:"1:1 (Square)"})]})]}),M.jsx("div",{className:"flex flex-wrap gap-2 text-xs",children:[{label:"Wide",value:120},{label:"Standard",value:80},{label:"Narrow",value:45}].map(_=>M.jsx("button",{onClick:()=>{const b=Ma(_.value,Wi);Gi(_e.id,_.value,b,Wi)},className:"px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50",children:_.label},_.label))}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Range"}),M.jsxs("span",{children:[Math.round(_e.range),"px"]})]}),M.jsx("input",{type:"range",min:"50",max:"800",value:_e.range,onChange:_=>Ct(_e.id,{range:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Pitch"}),M.jsxs("span",{children:[Math.round(_e.pitch??0),"deg"]})]}),M.jsx("input",{type:"range",min:"-60",max:"30",value:_e.pitch??0,onChange:_=>Ct(_e.id,{pitch:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Height"}),M.jsxs("span",{children:[Math.round(((Bp=_e.mount)==null?void 0:Bp.height)??_e.height??10),"ft"]})]}),M.jsx("input",{type:"range",min:"4",max:"40",value:((Hp=_e.mount)==null?void 0:Hp.height)??_e.height??10,onChange:_=>{var N;const b=parseInt(_.target.value);((N=_e.mount)==null?void 0:N.type)==="building"?Tr(_e.id,{height:b}):Ct(_e.id,{height:b})},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Mount"}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx("button",{onClick:()=>{var b;const _=Wt(_e);Ct(_e.id,{x:_.x,y:_.y,mount:{type:"free",height:((b=_e.mount)==null?void 0:b.height)??_e.height??10}})},className:`px-3 py-1 rounded-full text-xs font-semibold border ${Yu==="free"?"bg-emerald-50 border-emerald-200 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"}`,children:"Free"}),M.jsx("button",{disabled:!Pl.length,onClick:()=>El(_e.id),className:`px-3 py-1 rounded-full text-xs font-semibold border ${Yu==="building"?"bg-emerald-50 border-emerald-200 text-emerald-700":"border-slate-200 text-slate-400 hover:bg-slate-50"} ${Pl.length?"":"opacity-50 cursor-not-allowed"}`,children:"Building"})]})]}),Yu==="building"&&Gs&&M.jsxs("div",{className:"space-y-3",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Building"}),M.jsx("select",{value:Gs.id,onChange:_=>{var N;const b=_.target.value;Ct(_e.id,{mount:{type:"building",buildingId:b,edgeIndex:0,edgeT:.5,height:((N=_e.mount)==null?void 0:N.height)??_e.height??10}})},className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none",children:Pl.map(_=>M.jsx("option",{value:_.id,children:_.label},_.id))})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Edge"}),M.jsxs("span",{children:["#",Dp+1]})]}),M.jsx("input",{type:"range",min:"0",max:Math.max(G_-1,0),value:Dp,onChange:_=>{const b=parseInt(_.target.value);Tr(_e.id,{edgeIndex:b,edgeT:.5,buildingId:Gs.id,type:"building"})},className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Position Along Edge"}),M.jsxs("span",{children:[Math.round(Up*100),"%"]})]}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:Up,onChange:_=>Tr(_e.id,{edgeT:parseFloat(_.target.value),buildingId:Gs.id,type:"building"}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Description"}),M.jsx("textarea",{value:_e.description,onChange:_=>Ct(_e.id,{description:_.target.value}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none h-20"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Connector Dash Size"}),M.jsx("input",{type:"range",min:"1",max:"20",value:_e.connectorDashSize||3,onChange:_=>Ct(_e.id,{connectorDashSize:parseInt(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]})]}),_e.type!=="image"&&An[_e.type]&&M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Color Code"}),M.jsx("div",{className:"flex flex-wrap gap-2",children:An[_e.type].map(_=>M.jsx("button",{onClick:()=>Ct(_e.id,{color:_}),className:`w-8 h-8 rounded-full border-2 transition-all ${_e.color===_?"border-slate-800 scale-110":"border-transparent hover:scale-105"}`,style:{backgroundColor:_}},_))})]})]}):M.jsxs("div",{className:"p-6 flex flex-col gap-6",children:[M.jsxs("div",{className:"flex items-center gap-2 border-b border-white/10 pb-4",children:[M.jsx(XA,{className:"w-5 h-5 text-slate-400"}),M.jsx("h2",{className:"font-bold text-lg text-slate-200",children:"Project Settings"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Project Name"}),M.jsx("input",{type:"text",value:T,onChange:_=>V(_.target.value),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsx("div",{className:"grid grid-cols-2 gap-4",children:[{label:"Cameras",value:t.filter(_=>_.type==="camera").length},{label:"Buildings",value:t.filter(_=>_.type==="building").length},{label:"Trees",value:t.filter(_=>_.type==="tree").length},{label:"Parking",value:t.filter(_=>_.type==="parking").length}].map(_=>M.jsxs("div",{className:"rounded-lg border border-white/10 bg-white/5 p-3",children:[M.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-400",children:_.label}),M.jsx("p",{className:"text-lg font-semibold text-slate-200",children:_.value})]},_.label))}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"Canvas"}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Width"}),M.jsx("input",{type:"number",min:"400",max:"3000",value:v.width,onChange:_=>S({...v,width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Height"}),M.jsx("input",{type:"number",min:"300",max:"3000",value:v.height,onChange:_=>S({...v,height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"text-xs font-semibold text-slate-400 uppercase flex justify-between",children:[M.jsx("span",{children:"Grid Size"}),M.jsxs("span",{children:[y,"px"]})]}),M.jsx("input",{type:"range",min:"10",max:"80",value:y,onChange:_=>L(parseInt(_.target.value)),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm",children:[M.jsx("span",{className:"text-slate-600",children:"Show Grid"}),M.jsx("button",{onClick:()=>P(_=>!_),className:`px-3 py-1 rounded-full text-xs font-semibold ${A?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-400"}`,children:A?"On":"Off"})]}),M.jsxs("div",{className:"flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm",children:[M.jsx("span",{className:"text-slate-600",children:"Snap to Grid"}),M.jsx("button",{onClick:()=>E(_=>!_),className:`px-3 py-1 rounded-full text-xs font-semibold ${F?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-400"}`,children:F?"On":"Off"})]}),M.jsx("button",{onClick:K,className:"w-full py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50",children:"Clear Canvas"})]}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"Background Map"}),M.jsx("p",{className:"text-xs text-slate-400",children:"Adjust the uploaded map to align with the grid."}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Opacity"}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:m.opacity,onChange:_=>x({...m,opacity:parseFloat(_.target.value)}),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Width"}),M.jsx("input",{type:"number",value:m.width,onChange:_=>x({...m,width:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Map Height"}),M.jsx("input",{type:"number",value:m.height,onChange:_=>x({...m,height:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Offset X"}),M.jsx("input",{type:"number",value:m.x,onChange:_=>x({...m,x:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase",children:"Offset Y"}),M.jsx("input",{type:"number",value:m.y,onChange:_=>x({...m,y:parseInt(_.target.value)}),className:"w-full bg-transparent border border-white/20 rounded-lg p-2 text-sm text-slate-200 custom-input focus:border-indigo-500 outline-none"})]})]}),M.jsx("button",{onClick:J,className:"w-full py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50",children:"Fit Background to Canvas"})]}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"3D Visualization"}),M.jsxs("div",{className:"space-y-3 mb-4 p-3 bg-white/5 rounded-lg border border-white/10",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400 block",children:"Environment Background"}),M.jsxs("div",{className:"flex gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10",children:[M.jsx("button",{onClick:()=>Rt("flat"),className:`flex-1 px-2 py-1 text-[10px] font-medium rounded transition-colors ${lt==="flat"?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-300"}`,children:"Flat Image"}),M.jsx("button",{onClick:()=>Rt("panorama"),className:`flex-1 px-2 py-1 text-[10px] font-medium rounded transition-colors ${lt==="panorama"?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-300"}`,children:"360° Panorama"})]}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx("button",{onClick:()=>{var _;return(_=C.current)==null?void 0:_.click()},className:"flex-1 py-1.5 px-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors",children:lt==="panorama"?"Upload HDRI/Panorama":"Upload Background"}),Ye&&M.jsx("button",{onClick:()=>je(null),className:"py-1.5 px-3 rounded-md bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/10 text-xs transition-colors",title:"Clear Background",children:M.jsx(D0,{className:"w-4 h-4"})})]}),lt==="panorama"&&M.jsxs("p",{className:"text-[10px] text-slate-500",children:["Upload a 360° equirectangular image (2:1 aspect ratio) for immersive backgrounds. Get free HDRIs from ",M.jsx("a",{href:"https://polyhaven.com/hdris",target:"_blank",rel:"noopener noreferrer",className:"text-indigo-400 hover:underline",children:"Poly Haven"})]})]}),M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("label",{className:"text-xs font-semibold text-slate-400",children:"Show Vision Cones"}),M.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[M.jsx("input",{type:"checkbox",className:"sr-only peer",checked:Ge.visible,onChange:_=>at({...Ge,visible:_.target.checked})}),M.jsx("div",{className:"w-9 h-5 bg-slate-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"})]})]}),Ge.visible&&M.jsxs("div",{className:"space-y-3 mt-2 pl-2 border-l border-white/5",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("label",{className:"text-xs text-slate-500",children:"Active Cam Only"}),M.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[M.jsx("input",{type:"checkbox",className:"sr-only peer",checked:Ge.showAll===!1,onChange:_=>at({...Ge,showAll:!_.target.checked})}),M.jsx("div",{className:"w-7 h-4 bg-slate-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-indigo-600"})]})]}),M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("label",{className:"text-xs text-slate-500",children:"Style"}),M.jsxs("div",{className:"bg-white/5 p-0.5 rounded-lg flex text-[10px] font-medium border border-white/10",children:[M.jsx("button",{onClick:()=>at({...Ge,mode:"volume"}),className:`px-2 py-1 rounded transition-colors ${!Ge.mode||Ge.mode==="volume"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-300"}`,children:"Full"}),M.jsx("button",{onClick:()=>at({...Ge,mode:"floor"}),className:`px-2 py-1 rounded transition-colors ${Ge.mode==="floor"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-300"}`,children:"Floor"})]})]}),M.jsxs("div",{className:"space-y-1",children:[M.jsxs("div",{className:"flex justify-between",children:[M.jsx("label",{className:"text-[10px] text-slate-500",children:"Opacity"}),M.jsxs("span",{className:"text-[10px] text-slate-400",children:[Math.round(Ge.opacity*100),"%"]})]}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:Ge.opacity,onChange:_=>at({...Ge,opacity:parseFloat(_.target.value)}),className:"w-full accent-indigo-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"})]}),M.jsxs("div",{className:"space-y-1",children:[M.jsxs("div",{className:"flex justify-between",children:[M.jsx("label",{className:"text-[10px] text-slate-500",children:"Edges"}),M.jsxs("span",{className:"text-[10px] text-slate-400",children:[Math.round(Ge.edgeOpacity*100),"%"]})]}),M.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:Ge.edgeOpacity,onChange:_=>at({...Ge,edgeOpacity:parseFloat(_.target.value)}),className:"w-full accent-indigo-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"})]})]})]}),M.jsxs("div",{className:"border-t border-white/10 pt-6 space-y-4",children:[M.jsx("h3",{className:"text-sm font-semibold text-slate-300",children:"3D Snapshots"}),I!=="iso3d"?M.jsx("p",{className:"text-xs text-slate-400",children:"Switch to Isometric view to capture snapshots."}):me.length===0?M.jsx("p",{className:"text-xs text-slate-400",children:"No snapshots yet. Click “Snapshot” in the 3D view."}):M.jsx("div",{className:"grid grid-cols-2 gap-3",children:me.map(_=>M.jsxs("div",{className:"rounded-lg border border-slate-200 overflow-hidden bg-white",children:[M.jsx("img",{src:_.dataUrl,alt:"Snapshot",className:"w-full h-24 object-cover"}),M.jsxs("div",{className:"p-2",children:[M.jsx("p",{className:"text-[10px] text-slate-400",children:_.createdAt}),M.jsx("button",{onClick:()=>mn(_.dataUrl,`security_snapshot_${_.id}.png`),className:"mt-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700",children:"Export"})]})]},_.id))})]})]})})]})]})}const F_=document.getElementById("root");if(!F_)throw new Error("Root element not found");$x(F_).render(M.jsx(dy.StrictMode,{children:M.jsx(yC,{})}));
