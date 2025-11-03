const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GalleryView-BXj6twqD.js","./gallery-C5Oz1KjG.js","./AdminDashboard-B2aihoC1.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ka(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const le={},ps=[],At=()=>{},Uh=()=>!1,$r=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ya=t=>t.startsWith("onUpdate:"),Le=Object.assign,Qa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},F_=Object.prototype.hasOwnProperty,ie=(t,e)=>F_.call(t,e),V=Array.isArray,_s=t=>Gr(t)==="[object Map]",Fh=t=>Gr(t)==="[object Set]",$=t=>typeof t=="function",Te=t=>typeof t=="string",Sn=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",Bh=t=>(pe(t)||$(t))&&$(t.then)&&$(t.catch),Hh=Object.prototype.toString,Gr=t=>Hh.call(t),B_=t=>Gr(t).slice(8,-1),Vh=t=>Gr(t)==="[object Object]",Ja=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Js=Ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qr=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},H_=/-\w/g,ht=qr(t=>t.replace(H_,e=>e.slice(1).toUpperCase())),V_=/\B([A-Z])/g,Jn=qr(t=>t.replace(V_,"-$1").toLowerCase()),zr=qr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ro=qr(t=>t?`on${zr(t)}`:""),pn=(t,e)=>!Object.is(t,e),nr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Wh=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},la=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cc;const Kr=()=>Cc||(Cc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xa(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Te(s)?G_(s):Xa(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Te(t)||pe(t))return t}const W_=/;(?![^(]*\))/g,j_=/:([^]+)/,$_=/\/\*[^]*?\*\//g;function G_(t){const e={};return t.replace($_,"").split(W_).forEach(n=>{if(n){const s=n.split(j_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Za(t){let e="";if(Te(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=Za(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const q_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",z_=Ka(q_);function jh(t){return!!t||t===""}const $h=t=>!!(t&&t.__v_isRef===!0),K_=t=>Te(t)?t:t==null?"":V(t)||pe(t)&&(t.toString===Hh||!$(t.toString))?$h(t)?K_(t.value):JSON.stringify(t,Gh,2):String(t),Gh=(t,e)=>$h(e)?Gh(t,e.value):_s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ao(s,r)+" =>"]=i,n),{})}:Fh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ao(n))}:Sn(e)?Ao(e):pe(e)&&!V(e)&&!Vh(e)?String(e):e,Ao=(t,e="")=>{var n;return Sn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class qh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xe,!e&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xe;try{return xe=this,e()}finally{xe=n}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){this._on>0&&--this._on===0&&(xe=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function zh(t){return new qh(t)}function Kh(){return xe}function Y_(t,e=!1){xe&&xe.cleanups.push(t)}let ue;const No=new WeakSet;class Yh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&xe.active&&xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,No.has(this)&&(No.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Tc(this),Xh(this);const e=ue,n=_t;ue=this,_t=!0;try{return this.fn()}finally{Zh(this),ue=e,_t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)nl(e);this.deps=this.depsTail=void 0,Tc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?No.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ca(this)&&this.run()}get dirty(){return ca(this)}}let Qh=0,Xs,Zs;function Jh(t,e=!1){if(t.flags|=8,e){t.next=Zs,Zs=t;return}t.next=Xs,Xs=t}function el(){Qh++}function tl(){if(--Qh>0)return;if(Zs){let e=Zs;for(Zs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Xs;){let e=Xs;for(Xs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Xh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zh(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),nl(s),Q_(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function ca(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ed(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ed(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===_i)||(t.globalVersion=_i,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ca(t))))return;t.flags|=2;const e=t.dep,n=ue,s=_t;ue=t,_t=!0;try{Xh(t);const i=t.fn(t._value);(e.version===0||pn(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ue=n,_t=s,Zh(t),t.flags&=-3}}function nl(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)nl(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Q_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let _t=!0;const td=[];function zt(){td.push(_t),_t=!1}function Kt(){const t=td.pop();_t=t===void 0?!0:t}function Tc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ue;ue=void 0;try{e()}finally{ue=n}}}let _i=0;class J_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class sl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ue||!_t||ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ue)n=this.activeLink=new J_(ue,this),ue.deps?(n.prevDep=ue.depsTail,ue.depsTail.nextDep=n,ue.depsTail=n):ue.deps=ue.depsTail=n,nd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ue.depsTail,n.nextDep=void 0,ue.depsTail.nextDep=n,ue.depsTail=n,ue.deps===n&&(ue.deps=s)}return n}trigger(e){this.version++,_i++,this.notify(e)}notify(e){el();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{tl()}}}function nd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)nd(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const hr=new WeakMap,Bn=Symbol(""),ua=Symbol(""),gi=Symbol("");function De(t,e,n){if(_t&&ue){let s=hr.get(t);s||hr.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new sl),i.map=s,i.key=n),i.track()}}function Bt(t,e,n,s,i,r){const o=hr.get(t);if(!o){_i++;return}const a=l=>{l&&l.trigger()};if(el(),e==="clear")o.forEach(a);else{const l=V(t),c=l&&Ja(n);if(l&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===gi||!Sn(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(gi)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Bn)),_s(t)&&a(o.get(ua)));break;case"delete":l||(a(o.get(Bn)),_s(t)&&a(o.get(ua)));break;case"set":_s(t)&&a(o.get(Bn));break}}tl()}function X_(t,e){const n=hr.get(t);return n&&n.get(e)}function os(t){const e=ee(t);return e===t?e:(De(e,"iterate",gi),ct(t)?e:e.map(Pe))}function Yr(t){return De(t=ee(t),"iterate",gi),t}const Z_={__proto__:null,[Symbol.iterator](){return Po(this,Symbol.iterator,Pe)},concat(...t){return os(this).concat(...t.map(e=>V(e)?os(e):e))},entries(){return Po(this,"entries",t=>(t[1]=Pe(t[1]),t))},every(t,e){return Mt(this,"every",t,e,void 0,arguments)},filter(t,e){return Mt(this,"filter",t,e,n=>n.map(Pe),arguments)},find(t,e){return Mt(this,"find",t,e,Pe,arguments)},findIndex(t,e){return Mt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mt(this,"findLast",t,e,Pe,arguments)},findLastIndex(t,e){return Mt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mt(this,"forEach",t,e,void 0,arguments)},includes(...t){return ko(this,"includes",t)},indexOf(...t){return ko(this,"indexOf",t)},join(t){return os(this).join(t)},lastIndexOf(...t){return ko(this,"lastIndexOf",t)},map(t,e){return Mt(this,"map",t,e,void 0,arguments)},pop(){return Ws(this,"pop")},push(...t){return Ws(this,"push",t)},reduce(t,...e){return Sc(this,"reduce",t,e)},reduceRight(t,...e){return Sc(this,"reduceRight",t,e)},shift(){return Ws(this,"shift")},some(t,e){return Mt(this,"some",t,e,void 0,arguments)},splice(...t){return Ws(this,"splice",t)},toReversed(){return os(this).toReversed()},toSorted(t){return os(this).toSorted(t)},toSpliced(...t){return os(this).toSpliced(...t)},unshift(...t){return Ws(this,"unshift",t)},values(){return Po(this,"values",Pe)}};function Po(t,e,n){const s=Yr(t),i=s[e]();return s!==t&&!ct(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const eg=Array.prototype;function Mt(t,e,n,s,i,r){const o=Yr(t),a=o!==t&&!ct(t),l=o[e];if(l!==eg[e]){const h=l.apply(t,r);return a?Pe(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,Pe(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function Sc(t,e,n,s){const i=Yr(t);let r=n;return i!==t&&(ct(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Pe(a),l,t)}),i[e](r,...s)}function ko(t,e,n){const s=ee(t);De(s,"iterate",gi);const i=s[e](...n);return(i===-1||i===!1)&&ol(n[0])?(n[0]=ee(n[0]),s[e](...n)):i}function Ws(t,e,n=[]){zt(),el();const s=ee(t)[e].apply(t,n);return tl(),Kt(),s}const tg=Ka("__proto__,__v_isRef,__isVue"),sd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sn));function ng(t){Sn(t)||(t=String(t));const e=ee(this);return De(e,"has",t),e.hasOwnProperty(t)}class id{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?dg:ld:r?ad:od).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=V(e);if(!i){let l;if(o&&(l=Z_[n]))return l;if(n==="hasOwnProperty")return ng}const a=Reflect.get(e,n,Ie(e)?e:s);if((Sn(n)?sd.has(n):tg(n))||(i||De(e,"get",n),r))return a;if(Ie(a)){const l=o&&Ja(n)?a:a.value;return i&&pe(l)?da(l):l}return pe(a)?i?da(a):Oi(a):a}}class rd extends id{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=En(r);if(!ct(s)&&!En(s)&&(r=ee(r),s=ee(s)),!V(e)&&Ie(r)&&!Ie(s))return l||(r.value=s),!0}const o=V(e)&&Ja(n)?Number(n)<e.length:ie(e,n),a=Reflect.set(e,n,s,Ie(e)?e:i);return e===ee(i)&&(o?pn(s,r)&&Bt(e,"set",n,s):Bt(e,"add",n,s)),a}deleteProperty(e,n){const s=ie(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Bt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Sn(n)||!sd.has(n))&&De(e,"has",n),s}ownKeys(e){return De(e,"iterate",V(e)?"length":Bn),Reflect.ownKeys(e)}}class sg extends id{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ig=new rd,rg=new sg,og=new rd(!0);const ha=t=>t,zi=t=>Reflect.getPrototypeOf(t);function ag(t,e,n){return function(...s){const i=this.__v_raw,r=ee(i),o=_s(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?ha:e?dr:Pe;return!e&&De(r,"iterate",l?ua:Bn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ki(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function lg(t,e){const n={get(i){const r=this.__v_raw,o=ee(r),a=ee(i);t||(pn(i,a)&&De(o,"get",i),De(o,"get",a));const{has:l}=zi(o),c=e?ha:t?dr:Pe;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&De(ee(i),"iterate",Bn),i.size},has(i){const r=this.__v_raw,o=ee(r),a=ee(i);return t||(pn(i,a)&&De(o,"has",i),De(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=ee(a),c=e?ha:t?dr:Pe;return!t&&De(l,"iterate",Bn),a.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Le(n,t?{add:Ki("add"),set:Ki("set"),delete:Ki("delete"),clear:Ki("clear")}:{add(i){!e&&!ct(i)&&!En(i)&&(i=ee(i));const r=ee(this);return zi(r).has.call(r,i)||(r.add(i),Bt(r,"add",i,i)),this},set(i,r){!e&&!ct(r)&&!En(r)&&(r=ee(r));const o=ee(this),{has:a,get:l}=zi(o);let c=a.call(o,i);c||(i=ee(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?pn(r,u)&&Bt(o,"set",i,r):Bt(o,"add",i,r),this},delete(i){const r=ee(this),{has:o,get:a}=zi(r);let l=o.call(r,i);l||(i=ee(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&Bt(r,"delete",i,void 0),c},clear(){const i=ee(this),r=i.size!==0,o=i.clear();return r&&Bt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=ag(i,t,e)}),n}function il(t,e){const n=lg(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ie(n,i)&&i in s?n:s,i,r)}const cg={get:il(!1,!1)},ug={get:il(!1,!0)},hg={get:il(!0,!1)};const od=new WeakMap,ad=new WeakMap,ld=new WeakMap,dg=new WeakMap;function fg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pg(t){return t.__v_skip||!Object.isExtensible(t)?0:fg(B_(t))}function Oi(t){return En(t)?t:rl(t,!1,ig,cg,od)}function cd(t){return rl(t,!1,og,ug,ad)}function da(t){return rl(t,!0,rg,hg,ld)}function rl(t,e,n,s,i){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=pg(t);if(r===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,r===2?s:n);return i.set(t,a),a}function _n(t){return En(t)?_n(t.__v_raw):!!(t&&t.__v_isReactive)}function En(t){return!!(t&&t.__v_isReadonly)}function ct(t){return!!(t&&t.__v_isShallow)}function ol(t){return t?!!t.__v_raw:!1}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function al(t){return!ie(t,"__v_skip")&&Object.isExtensible(t)&&Wh(t,"__v_skip",!0),t}const Pe=t=>pe(t)?Oi(t):t,dr=t=>pe(t)?da(t):t;function Ie(t){return t?t.__v_isRef===!0:!1}function ll(t){return ud(t,!1)}function _g(t){return ud(t,!0)}function ud(t,e){return Ie(t)?t:new gg(t,e)}class gg{constructor(e,n){this.dep=new sl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ee(e),this._value=n?e:Pe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||ct(e)||En(e);e=s?e:ee(e),pn(e,n)&&(this._rawValue=e,this._value=s?e:Pe(e),this.dep.trigger())}}function gs(t){return Ie(t)?t.value:t}const mg={get:(t,e,n)=>e==="__v_raw"?t:gs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ie(i)&&!Ie(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function hd(t){return _n(t)?t:new Proxy(t,mg)}function yg(t){const e=V(t)?new Array(t.length):{};for(const n in t)e[n]=Eg(t,n);return e}class vg{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return X_(ee(this._object),this._key)}}function Eg(t,e,n){const s=t[e];return Ie(s)?s:new vg(t,e,n)}class bg{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new sl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_i-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ue!==this)return Jh(this,!0),!0}get value(){const e=this.dep.track();return ed(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function wg(t,e,n=!1){let s,i;return $(t)?s=t:(s=t.get,i=t.set),new bg(s,i,n)}const Yi={},fr=new WeakMap;let On;function Ig(t,e=!1,n=On){if(n){let s=fr.get(n);s||fr.set(n,s=[]),s.push(t)}}function Cg(t,e,n=le){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=R=>i?R:ct(R)||i===!1||i===0?Ht(R,1):Ht(R);let u,h,d,f,g=!1,y=!1;if(Ie(t)?(h=()=>t.value,g=ct(t)):_n(t)?(h=()=>c(t),g=!0):V(t)?(y=!0,g=t.some(R=>_n(R)||ct(R)),h=()=>t.map(R=>{if(Ie(R))return R.value;if(_n(R))return c(R);if($(R))return l?l(R,2):R()})):$(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){zt();try{d()}finally{Kt()}}const R=On;On=u;try{return l?l(t,3,[f]):t(f)}finally{On=R}}:h=At,e&&i){const R=h,W=i===!0?1/0:i;h=()=>Ht(R(),W)}const T=Kh(),N=()=>{u.stop(),T&&T.active&&Qa(T.effects,u)};if(r&&e){const R=e;e=(...W)=>{R(...W),N()}}let S=y?new Array(t.length).fill(Yi):Yi;const P=R=>{if(!(!(u.flags&1)||!u.dirty&&!R))if(e){const W=u.run();if(i||g||(y?W.some((fe,Z)=>pn(fe,S[Z])):pn(W,S))){d&&d();const fe=On;On=u;try{const Z=[W,S===Yi?void 0:y&&S[0]===Yi?[]:S,f];S=W,l?l(e,3,Z):e(...Z)}finally{On=fe}}}else u.run()};return a&&a(P),u=new Yh(h),u.scheduler=o?()=>o(P,!1):P,f=R=>Ig(R,!1,u),d=u.onStop=()=>{const R=fr.get(u);if(R){if(l)l(R,4);else for(const W of R)W();fr.delete(u)}},e?s?P(!0):S=u.run():o?o(P.bind(null,!0),!0):u.run(),N.pause=u.pause.bind(u),N.resume=u.resume.bind(u),N.stop=N,N}function Ht(t,e=1/0,n){if(e<=0||!pe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ie(t))Ht(t.value,e,n);else if(V(t))for(let s=0;s<t.length;s++)Ht(t[s],e,n);else if(Fh(t)||_s(t))t.forEach(s=>{Ht(s,e,n)});else if(Vh(t)){for(const s in t)Ht(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Ht(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xi(t,e,n,s){try{return s?t(...s):t()}catch(i){Qr(i,e,n)}}function kt(t,e,n,s){if($(t)){const i=xi(t,e,n,s);return i&&Bh(i)&&i.catch(r=>{Qr(r,e,n)}),i}if(V(t)){const i=[];for(let r=0;r<t.length;r++)i.push(kt(t[r],e,n,s));return i}}function Qr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||le;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){zt(),xi(r,null,10,[t,l,c]),Kt();return}}Tg(t,n,i,s,o)}function Tg(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ve=[];let Tt=-1;const ms=[];let on=null,us=0;const dd=Promise.resolve();let pr=null;function cl(t){const e=pr||dd;return t?e.then(this?t.bind(this):t):e}function Sg(t){let e=Tt+1,n=Ve.length;for(;e<n;){const s=e+n>>>1,i=Ve[s],r=mi(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function ul(t){if(!(t.flags&1)){const e=mi(t),n=Ve[Ve.length-1];!n||!(t.flags&2)&&e>=mi(n)?Ve.push(t):Ve.splice(Sg(e),0,t),t.flags|=1,fd()}}function fd(){pr||(pr=dd.then(_d))}function Rg(t){V(t)?ms.push(...t):on&&t.id===-1?on.splice(us+1,0,t):t.flags&1||(ms.push(t),t.flags|=1),fd()}function Rc(t,e,n=Tt+1){for(;n<Ve.length;n++){const s=Ve[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ve.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function pd(t){if(ms.length){const e=[...new Set(ms)].sort((n,s)=>mi(n)-mi(s));if(ms.length=0,on){on.push(...e);return}for(on=e,us=0;us<on.length;us++){const n=on[us];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}on=null,us=0}}const mi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _d(t){try{for(Tt=0;Tt<Ve.length;Tt++){const e=Ve[Tt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),xi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Tt<Ve.length;Tt++){const e=Ve[Tt];e&&(e.flags&=-2)}Tt=-1,Ve.length=0,pd(),pr=null,(Ve.length||ms.length)&&_d()}}let tt=null,gd=null;function _r(t){const e=tt;return tt=t,gd=t&&t.type.__scopeId||null,e}function Ag(t,e=tt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&yr(-1);const r=_r(e);let o;try{o=t(...i)}finally{_r(r),s._d&&yr(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function YR(t,e){if(tt===null)return t;const n=eo(tt),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=le]=e[i];r&&($(r)&&(r={mounted:r,updated:r}),r.deep&&Ht(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Pn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(zt(),kt(l,n,8,[t.el,a,t,e]),Kt())}}const Ng=Symbol("_vte"),Pg=t=>t.__isTeleport,kg=Symbol("_leaveCb");function hl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,hl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function md(t,e){return $(t)?Le({name:t.name},e,{setup:t}):t}function yd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const gr=new WeakMap;function ei(t,e,n,s,i=!1){if(V(t)){t.forEach((g,y)=>ei(g,e&&(V(e)?e[y]:e),n,s,i));return}if(ti(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ei(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?eo(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===le?a.refs={}:a.refs,h=a.setupState,d=ee(h),f=h===le?Uh:g=>ie(d,g);if(c!=null&&c!==l){if(Ac(e),Te(c))u[c]=null,f(c)&&(h[c]=null);else if(Ie(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if($(l))xi(l,a,12,[o,u]);else{const g=Te(l),y=Ie(l);if(g||y){const T=()=>{if(t.f){const N=g?f(l)?h[l]:u[l]:l.value;if(i)V(N)&&Qa(N,r);else if(V(N))N.includes(r)||N.push(r);else if(g)u[l]=[r],f(l)&&(h[l]=u[l]);else{const S=[r];l.value=S,t.k&&(u[t.k]=S)}}else g?(u[l]=o,f(l)&&(h[l]=o)):y&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const N=()=>{T(),gr.delete(t)};N.id=-1,gr.set(t,N),et(N,n)}else Ac(t),T()}}}function Ac(t){const e=gr.get(t);e&&(e.flags|=8,gr.delete(t))}Kr().requestIdleCallback;Kr().cancelIdleCallback;const ti=t=>!!t.type.__asyncLoader,vd=t=>t.type.__isKeepAlive;function Og(t,e){Ed(t,"a",e)}function xg(t,e){Ed(t,"da",e)}function Ed(t,e,n=Me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Jr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)vd(i.parent.vnode)&&Dg(s,e,n,i),i=i.parent}}function Dg(t,e,n,s){const i=Jr(e,t,s,!0);bd(()=>{Qa(s[e],i)},n)}function Jr(t,e,n=Me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{zt();const a=Di(n),l=kt(e,n,t,o);return a(),Kt(),l});return s?i.unshift(r):i.push(r),r}}const Xt=t=>(e,n=Me)=>{(!vi||t==="sp")&&Jr(t,(...s)=>e(...s),n)},Mg=Xt("bm"),Lg=Xt("m"),Ug=Xt("bu"),Fg=Xt("u"),Bg=Xt("bum"),bd=Xt("um"),Hg=Xt("sp"),Vg=Xt("rtg"),Wg=Xt("rtc");function jg(t,e=Me){Jr("ec",t,e)}const $g="components";function Gg(t,e){return zg($g,t,!0,e)||t}const qg=Symbol.for("v-ndc");function zg(t,e,n=!0,s=!1){const i=tt||Me;if(i){const r=i.type;{const a=Fm(r,!1);if(a&&(a===e||a===ht(e)||a===zr(ht(e))))return r}const o=Nc(i[t]||r[t],e)||Nc(i.appContext[t],e);return!o&&s?r:o}}function Nc(t,e){return t&&(t[e]||t[ht(e)]||t[zr(ht(e))])}function QR(t,e,n,s){let i;const r=n,o=V(t);if(o||Te(t)){const a=o&&_n(t);let l=!1,c=!1;a&&(l=!ct(t),c=En(t),t=Yr(t)),i=new Array(t.length);for(let u=0,h=t.length;u<h;u++)i[u]=e(l?c?dr(Pe(t[u])):Pe(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(pe(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const fa=t=>t?$d(t)?eo(t):fa(t.parent):null,ni=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fa(t.parent),$root:t=>fa(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Id(t),$forceUpdate:t=>t.f||(t.f=()=>{ul(t.update)}),$nextTick:t=>t.n||(t.n=cl.bind(t.proxy)),$watch:t=>_m.bind(t)}),Oo=(t,e)=>t!==le&&!t.__isScriptSetup&&ie(t,e),Kg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Oo(s,e))return o[e]=1,s[e];if(i!==le&&ie(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ie(c,e))return o[e]=3,r[e];if(n!==le&&ie(n,e))return o[e]=4,n[e];pa&&(o[e]=0)}}const u=ni[e];let h,d;if(u)return e==="$attrs"&&De(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==le&&ie(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ie(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Oo(i,e)?(i[e]=n,!0):s!==le&&ie(s,e)?(s[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r,type:o}},a){let l,c;return!!(n[a]||t!==le&&a[0]!=="$"&&ie(t,a)||Oo(e,a)||(l=r[0])&&ie(l,a)||ie(s,a)||ie(ni,a)||ie(i.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pc(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let pa=!0;function Yg(t){const e=Id(t),n=t.proxy,s=t.ctx;pa=!1,e.beforeCreate&&kc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:T,beforeDestroy:N,beforeUnmount:S,destroyed:P,unmounted:R,render:W,renderTracked:fe,renderTriggered:Z,errorCaptured:G,serverPrefetch:z,expose:me,inheritAttrs:Ue,components:Xe,directives:Ge,filters:An}=e;if(c&&Qg(c,s,null),o)for(const q in o){const ne=o[q];$(ne)&&(s[q]=ne.bind(n))}if(i){const q=i.call(n,n);pe(q)&&(t.data=Oi(q))}if(pa=!0,r)for(const q in r){const ne=r[q],Dt=$(ne)?ne.bind(n,n):$(ne.get)?ne.get.bind(n,n):At,tn=!$(ne)&&$(ne.set)?ne.set.bind(n):At,Et=ot({get:Dt,set:tn});Object.defineProperty(s,q,{enumerable:!0,configurable:!0,get:()=>Et.value,set:qe=>Et.value=qe})}if(a)for(const q in a)wd(a[q],s,n,q);if(l){const q=$(l)?l.call(n):l;Reflect.ownKeys(q).forEach(ne=>{sr(ne,q[ne])})}u&&kc(u,t,"c");function ge(q,ne){V(ne)?ne.forEach(Dt=>q(Dt.bind(n))):ne&&q(ne.bind(n))}if(ge(Mg,h),ge(Lg,d),ge(Ug,f),ge(Fg,g),ge(Og,y),ge(xg,T),ge(jg,G),ge(Wg,fe),ge(Vg,Z),ge(Bg,S),ge(bd,R),ge(Hg,z),V(me))if(me.length){const q=t.exposed||(t.exposed={});me.forEach(ne=>{Object.defineProperty(q,ne,{get:()=>n[ne],set:Dt=>n[ne]=Dt,enumerable:!0})})}else t.exposed||(t.exposed={});W&&t.render===At&&(t.render=W),Ue!=null&&(t.inheritAttrs=Ue),Xe&&(t.components=Xe),Ge&&(t.directives=Ge),z&&yd(t)}function Qg(t,e,n=At){V(t)&&(t=_a(t));for(const s in t){const i=t[s];let r;pe(i)?"default"in i?r=ut(i.from||s,i.default,!0):r=ut(i.from||s):r=ut(i),Ie(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function kc(t,e,n){kt(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function wd(t,e,n,s){let i=s.includes(".")?Ld(n,s):()=>n[s];if(Te(t)){const r=e[t];$(r)&&si(i,r)}else if($(t))si(i,t.bind(n));else if(pe(t))if(V(t))t.forEach(r=>wd(r,e,n,s));else{const r=$(t.handler)?t.handler.bind(n):e[t.handler];$(r)&&si(i,r,t)}}function Id(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>mr(l,c,o,!0)),mr(l,e,o)),pe(e)&&r.set(e,l),l}function mr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&mr(t,r,n,!0),i&&i.forEach(o=>mr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Jg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Jg={data:Oc,props:xc,emits:xc,methods:Qs,computed:Qs,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:Qs,directives:Qs,watch:Zg,provide:Oc,inject:Xg};function Oc(t,e){return e?t?function(){return Le($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Xg(t,e){return Qs(_a(t),_a(e))}function _a(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Be(t,e){return t?[...new Set([].concat(t,e))]:e}function Qs(t,e){return t?Le(Object.create(null),t,e):e}function xc(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:Le(Object.create(null),Pc(t),Pc(e??{})):e}function Zg(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const s in e)n[s]=Be(t[s],e[s]);return n}function Cd(){return{app:null,config:{isNativeTag:Uh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let em=0;function tm(t,e){return function(s,i=null){$(s)||(s=Le({},s)),i!=null&&!pe(i)&&(i=null);const r=Cd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:em++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Hm,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&$(u.install)?(o.add(u),u.install(c,...h)):$(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||Qe(s,i);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(f,u,d),l=!0,c._container=u,u.__vue_app__=c,eo(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(kt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Hn;Hn=c;try{return u()}finally{Hn=h}}};return c}}let Hn=null;function sr(t,e){if(Me){let n=Me.provides;const s=Me.parent&&Me.parent.provides;s===n&&(n=Me.provides=Object.create(s)),n[t]=e}}function ut(t,e,n=!1){const s=jd();if(s||Hn){let i=Hn?Hn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&$(e)?e.call(s&&s.proxy):e}}function nm(){return!!(jd()||Hn)}const Td={},Sd=()=>Object.create(Td),Rd=t=>Object.getPrototypeOf(t)===Td;function sm(t,e,n,s=!1){const i={},r=Sd();t.propsDefaults=Object.create(null),Ad(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:cd(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function im(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ee(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Xr(t.emitsOptions,d))continue;const f=e[d];if(l)if(ie(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=ht(d);i[g]=ga(l,a,g,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{Ad(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=Jn(h))===h||!ie(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ga(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ie(e,h))&&(delete r[h],c=!0)}c&&Bt(t.attrs,"set","")}function Ad(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Js(l))continue;const c=e[l];let u;i&&ie(i,u=ht(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Xr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ee(n),c=a||le;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ga(i,l,h,c[h],t,!ie(c,h))}}return o}function ga(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Di(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Jn(n))&&(s=!0))}return s}const rm=new WeakMap;function Nd(t,e,n=!1){const s=n?rm:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!$(t)){const u=h=>{l=!0;const[d,f]=Nd(h,e,!0);Le(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return pe(t)&&s.set(t,ps),ps;if(V(r))for(let u=0;u<r.length;u++){const h=ht(r[u]);Dc(h)&&(o[h]=le)}else if(r)for(const u in r){const h=ht(u);if(Dc(h)){const d=r[u],f=o[h]=V(d)||$(d)?{type:d}:Le({},d),g=f.type;let y=!1,T=!0;if(V(g))for(let N=0;N<g.length;++N){const S=g[N],P=$(S)&&S.name;if(P==="Boolean"){y=!0;break}else P==="String"&&(T=!1)}else y=$(g)&&g.name==="Boolean";f[0]=y,f[1]=T,(y||ie(f,"default"))&&a.push(h)}}const c=[o,a];return pe(t)&&s.set(t,c),c}function Dc(t){return t[0]!=="$"&&!Js(t)}const dl=t=>t==="_"||t==="_ctx"||t==="$stable",fl=t=>V(t)?t.map(St):[St(t)],om=(t,e,n)=>{if(e._n)return e;const s=Ag((...i)=>fl(e(...i)),n);return s._c=!1,s},Pd=(t,e,n)=>{const s=t._ctx;for(const i in t){if(dl(i))continue;const r=t[i];if($(r))e[i]=om(i,r,s);else if(r!=null){const o=fl(r);e[i]=()=>o}}},kd=(t,e)=>{const n=fl(e);t.slots.default=()=>n},Od=(t,e,n)=>{for(const s in e)(n||!dl(s))&&(t[s]=e[s])},am=(t,e,n)=>{const s=t.slots=Sd();if(t.vnode.shapeFlag&32){const i=e._;i?(Od(s,e,n),n&&Wh(s,"_",i,!0)):Pd(e,s)}else e&&kd(t,e)},lm=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=le;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Od(i,e,n):(r=!e.$stable,Pd(e,i)),o=e}else e&&(kd(t,e),o={default:1});if(r)for(const a in i)!dl(a)&&o[a]==null&&delete i[a]},et=Im;function cm(t){return um(t)}function um(t,e){const n=Kr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=At,insertStaticContent:g}=t,y=(p,_,m,E=null,w=null,v=null,O=void 0,k=null,A=!!_.dynamicChildren)=>{if(p===_)return;p&&!js(p,_)&&(E=b(p),qe(p,w,v,!0),p=null),_.patchFlag===-2&&(A=!1,_.dynamicChildren=null);const{type:I,ref:F,shapeFlag:D}=_;switch(I){case Zr:T(p,_,m,E);break;case bn:N(p,_,m,E);break;case Do:p==null&&S(_,m,E,O);break;case Ft:Xe(p,_,m,E,w,v,O,k,A);break;default:D&1?W(p,_,m,E,w,v,O,k,A):D&6?Ge(p,_,m,E,w,v,O,k,A):(D&64||D&128)&&I.process(p,_,m,E,w,v,O,k,A,L)}F!=null&&w?ei(F,p&&p.ref,v,_||p,!_):F==null&&p&&p.ref!=null&&ei(p.ref,null,v,p,!0)},T=(p,_,m,E)=>{if(p==null)s(_.el=a(_.children),m,E);else{const w=_.el=p.el;_.children!==p.children&&c(w,_.children)}},N=(p,_,m,E)=>{p==null?s(_.el=l(_.children||""),m,E):_.el=p.el},S=(p,_,m,E)=>{[p.el,p.anchor]=g(p.children,_,m,E,p.el,p.anchor)},P=({el:p,anchor:_},m,E)=>{let w;for(;p&&p!==_;)w=d(p),s(p,m,E),p=w;s(_,m,E)},R=({el:p,anchor:_})=>{let m;for(;p&&p!==_;)m=d(p),i(p),p=m;i(_)},W=(p,_,m,E,w,v,O,k,A)=>{_.type==="svg"?O="svg":_.type==="math"&&(O="mathml"),p==null?fe(_,m,E,w,v,O,k,A):z(p,_,w,v,O,k,A)},fe=(p,_,m,E,w,v,O,k)=>{let A,I;const{props:F,shapeFlag:D,transition:U,dirs:j}=p;if(A=p.el=o(p.type,v,F&&F.is,F),D&8?u(A,p.children):D&16&&G(p.children,A,null,E,w,xo(p,v),O,k),j&&Pn(p,null,E,"created"),Z(A,p,p.scopeId,O,E),F){for(const ce in F)ce!=="value"&&!Js(ce)&&r(A,ce,null,F[ce],v,E);"value"in F&&r(A,"value",null,F.value,v),(I=F.onVnodeBeforeMount)&&Ct(I,E,p)}j&&Pn(p,null,E,"beforeMount");const X=hm(w,U);X&&U.beforeEnter(A),s(A,_,m),((I=F&&F.onVnodeMounted)||X||j)&&et(()=>{I&&Ct(I,E,p),X&&U.enter(A),j&&Pn(p,null,E,"mounted")},w)},Z=(p,_,m,E,w)=>{if(m&&f(p,m),E)for(let v=0;v<E.length;v++)f(p,E[v]);if(w){let v=w.subTree;if(_===v||Fd(v.type)&&(v.ssContent===_||v.ssFallback===_)){const O=w.vnode;Z(p,O,O.scopeId,O.slotScopeIds,w.parent)}}},G=(p,_,m,E,w,v,O,k,A=0)=>{for(let I=A;I<p.length;I++){const F=p[I]=k?an(p[I]):St(p[I]);y(null,F,_,m,E,w,v,O,k)}},z=(p,_,m,E,w,v,O)=>{const k=_.el=p.el;let{patchFlag:A,dynamicChildren:I,dirs:F}=_;A|=p.patchFlag&16;const D=p.props||le,U=_.props||le;let j;if(m&&kn(m,!1),(j=U.onVnodeBeforeUpdate)&&Ct(j,m,_,p),F&&Pn(_,p,m,"beforeUpdate"),m&&kn(m,!0),(D.innerHTML&&U.innerHTML==null||D.textContent&&U.textContent==null)&&u(k,""),I?me(p.dynamicChildren,I,k,m,E,xo(_,w),v):O||ne(p,_,k,null,m,E,xo(_,w),v,!1),A>0){if(A&16)Ue(k,D,U,m,w);else if(A&2&&D.class!==U.class&&r(k,"class",null,U.class,w),A&4&&r(k,"style",D.style,U.style,w),A&8){const X=_.dynamicProps;for(let ce=0;ce<X.length;ce++){const re=X[ce],ze=D[re],Ke=U[re];(Ke!==ze||re==="value")&&r(k,re,ze,Ke,w,m)}}A&1&&p.children!==_.children&&u(k,_.children)}else!O&&I==null&&Ue(k,D,U,m,w);((j=U.onVnodeUpdated)||F)&&et(()=>{j&&Ct(j,m,_,p),F&&Pn(_,p,m,"updated")},E)},me=(p,_,m,E,w,v,O)=>{for(let k=0;k<_.length;k++){const A=p[k],I=_[k],F=A.el&&(A.type===Ft||!js(A,I)||A.shapeFlag&198)?h(A.el):m;y(A,I,F,null,E,w,v,O,!0)}},Ue=(p,_,m,E,w)=>{if(_!==m){if(_!==le)for(const v in _)!Js(v)&&!(v in m)&&r(p,v,_[v],null,w,E);for(const v in m){if(Js(v))continue;const O=m[v],k=_[v];O!==k&&v!=="value"&&r(p,v,k,O,w,E)}"value"in m&&r(p,"value",_.value,m.value,w)}},Xe=(p,_,m,E,w,v,O,k,A)=>{const I=_.el=p?p.el:a(""),F=_.anchor=p?p.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:j}=_;j&&(k=k?k.concat(j):j),p==null?(s(I,m,E),s(F,m,E),G(_.children||[],m,F,w,v,O,k,A)):D>0&&D&64&&U&&p.dynamicChildren?(me(p.dynamicChildren,U,m,w,v,O,k),(_.key!=null||w&&_===w.subTree)&&xd(p,_,!0)):ne(p,_,m,F,w,v,O,k,A)},Ge=(p,_,m,E,w,v,O,k,A)=>{_.slotScopeIds=k,p==null?_.shapeFlag&512?w.ctx.activate(_,m,E,O,A):An(_,m,E,w,v,O,A):en(p,_,A)},An=(p,_,m,E,w,v,O)=>{const k=p.component=xm(p,E,w);if(vd(p)&&(k.ctx.renderer=L),Dm(k,!1,O),k.asyncDep){if(w&&w.registerDep(k,ge,O),!p.el){const A=k.subTree=Qe(bn);N(null,A,_,m),p.placeholder=A.el}}else ge(k,p,_,m,w,v,O)},en=(p,_,m)=>{const E=_.component=p.component;if(bm(p,_,m))if(E.asyncDep&&!E.asyncResolved){q(E,_,m);return}else E.next=_,E.update();else _.el=p.el,E.vnode=_},ge=(p,_,m,E,w,v,O)=>{const k=()=>{if(p.isMounted){let{next:D,bu:U,u:j,parent:X,vnode:ce}=p;{const wt=Dd(p);if(wt){D&&(D.el=ce.el,q(p,D,O)),wt.asyncDep.then(()=>{p.isUnmounted||k()});return}}let re=D,ze;kn(p,!1),D?(D.el=ce.el,q(p,D,O)):D=ce,U&&nr(U),(ze=D.props&&D.props.onVnodeBeforeUpdate)&&Ct(ze,X,D,ce),kn(p,!0);const Ke=Lc(p),bt=p.subTree;p.subTree=Ke,y(bt,Ke,h(bt.el),b(bt),p,w,v),D.el=Ke.el,re===null&&wm(p,Ke.el),j&&et(j,w),(ze=D.props&&D.props.onVnodeUpdated)&&et(()=>Ct(ze,X,D,ce),w)}else{let D;const{el:U,props:j}=_,{bm:X,m:ce,parent:re,root:ze,type:Ke}=p,bt=ti(_);kn(p,!1),X&&nr(X),!bt&&(D=j&&j.onVnodeBeforeMount)&&Ct(D,re,_),kn(p,!0);{ze.ce&&ze.ce._def.shadowRoot!==!1&&ze.ce._injectChildStyle(Ke);const wt=p.subTree=Lc(p);y(null,wt,m,E,p,w,v),_.el=wt.el}if(ce&&et(ce,w),!bt&&(D=j&&j.onVnodeMounted)){const wt=_;et(()=>Ct(D,re,wt),w)}(_.shapeFlag&256||re&&ti(re.vnode)&&re.vnode.shapeFlag&256)&&p.a&&et(p.a,w),p.isMounted=!0,_=m=E=null}};p.scope.on();const A=p.effect=new Yh(k);p.scope.off();const I=p.update=A.run.bind(A),F=p.job=A.runIfDirty.bind(A);F.i=p,F.id=p.uid,A.scheduler=()=>ul(F),kn(p,!0),I()},q=(p,_,m)=>{_.component=p;const E=p.vnode.props;p.vnode=_,p.next=null,im(p,_.props,E,m),lm(p,_.children,m),zt(),Rc(p),Kt()},ne=(p,_,m,E,w,v,O,k,A=!1)=>{const I=p&&p.children,F=p?p.shapeFlag:0,D=_.children,{patchFlag:U,shapeFlag:j}=_;if(U>0){if(U&128){tn(I,D,m,E,w,v,O,k,A);return}else if(U&256){Dt(I,D,m,E,w,v,O,k,A);return}}j&8?(F&16&&rt(I,w,v),D!==I&&u(m,D)):F&16?j&16?tn(I,D,m,E,w,v,O,k,A):rt(I,w,v,!0):(F&8&&u(m,""),j&16&&G(D,m,E,w,v,O,k,A))},Dt=(p,_,m,E,w,v,O,k,A)=>{p=p||ps,_=_||ps;const I=p.length,F=_.length,D=Math.min(I,F);let U;for(U=0;U<D;U++){const j=_[U]=A?an(_[U]):St(_[U]);y(p[U],j,m,null,w,v,O,k,A)}I>F?rt(p,w,v,!0,!1,D):G(_,m,E,w,v,O,k,A,D)},tn=(p,_,m,E,w,v,O,k,A)=>{let I=0;const F=_.length;let D=p.length-1,U=F-1;for(;I<=D&&I<=U;){const j=p[I],X=_[I]=A?an(_[I]):St(_[I]);if(js(j,X))y(j,X,m,null,w,v,O,k,A);else break;I++}for(;I<=D&&I<=U;){const j=p[D],X=_[U]=A?an(_[U]):St(_[U]);if(js(j,X))y(j,X,m,null,w,v,O,k,A);else break;D--,U--}if(I>D){if(I<=U){const j=U+1,X=j<F?_[j].el:E;for(;I<=U;)y(null,_[I]=A?an(_[I]):St(_[I]),m,X,w,v,O,k,A),I++}}else if(I>U)for(;I<=D;)qe(p[I],w,v,!0),I++;else{const j=I,X=I,ce=new Map;for(I=X;I<=U;I++){const Ze=_[I]=A?an(_[I]):St(_[I]);Ze.key!=null&&ce.set(Ze.key,I)}let re,ze=0;const Ke=U-X+1;let bt=!1,wt=0;const Vs=new Array(Ke);for(I=0;I<Ke;I++)Vs[I]=0;for(I=j;I<=D;I++){const Ze=p[I];if(ze>=Ke){qe(Ze,w,v,!0);continue}let It;if(Ze.key!=null)It=ce.get(Ze.key);else for(re=X;re<=U;re++)if(Vs[re-X]===0&&js(Ze,_[re])){It=re;break}It===void 0?qe(Ze,w,v,!0):(Vs[It-X]=I+1,It>=wt?wt=It:bt=!0,y(Ze,_[It],m,null,w,v,O,k,A),ze++)}const bc=bt?dm(Vs):ps;for(re=bc.length-1,I=Ke-1;I>=0;I--){const Ze=X+I,It=_[Ze],wc=_[Ze+1],Ic=Ze+1<F?wc.el||wc.placeholder:E;Vs[I]===0?y(null,It,m,Ic,w,v,O,k,A):bt&&(re<0||I!==bc[re]?Et(It,m,Ic,2):re--)}}},Et=(p,_,m,E,w=null)=>{const{el:v,type:O,transition:k,children:A,shapeFlag:I}=p;if(I&6){Et(p.component.subTree,_,m,E);return}if(I&128){p.suspense.move(_,m,E);return}if(I&64){O.move(p,_,m,L);return}if(O===Ft){s(v,_,m);for(let D=0;D<A.length;D++)Et(A[D],_,m,E);s(p.anchor,_,m);return}if(O===Do){P(p,_,m);return}if(E!==2&&I&1&&k)if(E===0)k.beforeEnter(v),s(v,_,m),et(()=>k.enter(v),w);else{const{leave:D,delayLeave:U,afterLeave:j}=k,X=()=>{p.ctx.isUnmounted?i(v):s(v,_,m)},ce=()=>{v._isLeaving&&v[kg](!0),D(v,()=>{X(),j&&j()})};U?U(v,X,ce):ce()}else s(v,_,m)},qe=(p,_,m,E=!1,w=!1)=>{const{type:v,props:O,ref:k,children:A,dynamicChildren:I,shapeFlag:F,patchFlag:D,dirs:U,cacheIndex:j}=p;if(D===-2&&(w=!1),k!=null&&(zt(),ei(k,null,m,p,!0),Kt()),j!=null&&(_.renderCache[j]=void 0),F&256){_.ctx.deactivate(p);return}const X=F&1&&U,ce=!ti(p);let re;if(ce&&(re=O&&O.onVnodeBeforeUnmount)&&Ct(re,_,p),F&6)Nn(p.component,m,E);else{if(F&128){p.suspense.unmount(m,E);return}X&&Pn(p,null,_,"beforeUnmount"),F&64?p.type.remove(p,_,m,L,E):I&&!I.hasOnce&&(v!==Ft||D>0&&D&64)?rt(I,_,m,!1,!0):(v===Ft&&D&384||!w&&F&16)&&rt(A,_,m),E&&is(p)}(ce&&(re=O&&O.onVnodeUnmounted)||X)&&et(()=>{re&&Ct(re,_,p),X&&Pn(p,null,_,"unmounted")},m)},is=p=>{const{type:_,el:m,anchor:E,transition:w}=p;if(_===Ft){rs(m,E);return}if(_===Do){R(p);return}const v=()=>{i(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(p.shapeFlag&1&&w&&!w.persisted){const{leave:O,delayLeave:k}=w,A=()=>O(m,v);k?k(p.el,v,A):A()}else v()},rs=(p,_)=>{let m;for(;p!==_;)m=d(p),i(p),p=m;i(_)},Nn=(p,_,m)=>{const{bum:E,scope:w,job:v,subTree:O,um:k,m:A,a:I}=p;Mc(A),Mc(I),E&&nr(E),w.stop(),v&&(v.flags|=8,qe(O,p,_,m)),k&&et(k,_),et(()=>{p.isUnmounted=!0},_)},rt=(p,_,m,E=!1,w=!1,v=0)=>{for(let O=v;O<p.length;O++)qe(p[O],_,m,E,w)},b=p=>{if(p.shapeFlag&6)return b(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const _=d(p.anchor||p.el),m=_&&_[Ng];return m?d(m):_};let M=!1;const x=(p,_,m)=>{p==null?_._vnode&&qe(_._vnode,null,null,!0):y(_._vnode||null,p,_,null,null,null,m),_._vnode=p,M||(M=!0,Rc(),pd(),M=!1)},L={p:y,um:qe,m:Et,r:is,mt:An,mc:G,pc:ne,pbc:me,n:b,o:t};return{render:x,hydrate:void 0,createApp:tm(x)}}function xo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function kn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function hm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xd(t,e,n=!1){const s=t.children,i=e.children;if(V(s)&&V(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=an(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&xd(o,a)),a.type===Zr&&a.patchFlag!==-1&&(a.el=o.el),a.type===bn&&!a.el&&(a.el=o.el)}}function dm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Dd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dd(e)}function Mc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const fm=Symbol.for("v-scx"),pm=()=>ut(fm);function si(t,e,n){return Md(t,e,n)}function Md(t,e,n=le){const{immediate:s,deep:i,flush:r,once:o}=n,a=Le({},n),l=e&&s||!e&&r!=="post";let c;if(vi){if(r==="sync"){const f=pm();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=At,f.resume=At,f.pause=At,f}}const u=Me;a.call=(f,g,y)=>kt(f,u,g,y);let h=!1;r==="post"?a.scheduler=f=>{et(f,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,g)=>{g?f():ul(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=Cg(t,e,a);return vi&&(c?c.push(d):l&&d()),d}function _m(t,e,n){const s=this.proxy,i=Te(t)?t.includes(".")?Ld(s,t):()=>s[t]:t.bind(s,s);let r;$(e)?r=e:(r=e.handler,n=e);const o=Di(this),a=Md(i,r.bind(s),n);return o(),a}function Ld(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const gm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ht(e)}Modifiers`]||t[`${Jn(e)}Modifiers`];function mm(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||le;let i=n;const r=e.startsWith("update:"),o=r&&gm(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>Te(u)?u.trim():u)),o.number&&(i=n.map(la)));let a,l=s[a=Ro(e)]||s[a=Ro(ht(e))];!l&&r&&(l=s[a=Ro(Jn(e))]),l&&kt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(c,t,6,i)}}const ym=new WeakMap;function Ud(t,e,n=!1){const s=n?ym:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!$(t)){const l=c=>{const u=Ud(c,e,!0);u&&(a=!0,Le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(pe(t)&&s.set(t,null),null):(V(r)?r.forEach(l=>o[l]=null):Le(o,r),pe(t)&&s.set(t,o),o)}function Xr(t,e){return!t||!$r(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Jn(e))||ie(t,e))}function Lc(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=t,T=_r(t);let N,S;try{if(n.shapeFlag&4){const R=i||s,W=R;N=St(c.call(W,R,u,h,f,d,g)),S=a}else{const R=e;N=St(R.length>1?R(h,{attrs:a,slots:o,emit:l}):R(h,null)),S=e.props?a:vm(a)}}catch(R){ii.length=0,Qr(R,t,1),N=Qe(bn)}let P=N;if(S&&y!==!1){const R=Object.keys(S),{shapeFlag:W}=P;R.length&&W&7&&(r&&R.some(Ya)&&(S=Em(S,r)),P=Is(P,S,!1,!0))}return n.dirs&&(P=Is(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&hl(P,n.transition),N=P,_r(T),N}const vm=t=>{let e;for(const n in t)(n==="class"||n==="style"||$r(n))&&((e||(e={}))[n]=t[n]);return e},Em=(t,e)=>{const n={};for(const s in t)(!Ya(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function bm(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Uc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Xr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Uc(s,o,c):!0:!!o;return!1}function Uc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Xr(n,r))return!0}return!1}function wm({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Fd=t=>t.__isSuspense;function Im(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):Rg(t)}const Ft=Symbol.for("v-fgt"),Zr=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),Do=Symbol.for("v-stc"),ii=[];let nt=null;function Bd(t=!1){ii.push(nt=t?null:[])}function Cm(){ii.pop(),nt=ii[ii.length-1]||null}let yi=1;function yr(t,e=!1){yi+=t,t<0&&nt&&e&&(nt.hasOnce=!0)}function Hd(t){return t.dynamicChildren=yi>0?nt||ps:null,Cm(),yi>0&&nt&&nt.push(t),t}function Tm(t,e,n,s,i,r){return Hd(Wd(t,e,n,s,i,r,!0))}function Sm(t,e,n,s,i){return Hd(Qe(t,e,n,s,i,!0))}function vr(t){return t?t.__v_isVNode===!0:!1}function js(t,e){return t.type===e.type&&t.key===e.key}const Vd=({key:t})=>t??null,ir=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Te(t)||Ie(t)||$(t)?{i:tt,r:t,k:e,f:!!n}:t:null);function Wd(t,e=null,n=null,s=0,i=null,r=t===Ft?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Vd(e),ref:e&&ir(e),scopeId:gd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:tt};return a?(pl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Te(n)?8:16),yi>0&&!o&&nt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&nt.push(l),l}const Qe=Rm;function Rm(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===qg)&&(t=bn),vr(t)){const a=Is(t,e,!0);return n&&pl(a,n),yi>0&&!r&&nt&&(a.shapeFlag&6?nt[nt.indexOf(t)]=a:nt.push(a)),a.patchFlag=-2,a}if(Bm(t)&&(t=t.__vccOpts),e){e=Am(e);let{class:a,style:l}=e;a&&!Te(a)&&(e.class=Za(a)),pe(l)&&(ol(l)&&!V(l)&&(l=Le({},l)),e.style=Xa(l))}const o=Te(t)?1:Fd(t)?128:Pg(t)?64:pe(t)?4:$(t)?2:0;return Wd(t,e,n,s,i,o,r,!0)}function Am(t){return t?ol(t)||Rd(t)?Le({},t):t:null}function Is(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Pm(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Vd(c),ref:e&&e.ref?n&&r?V(r)?r.concat(ir(e)):[r,ir(e)]:ir(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ft?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Is(t.ssContent),ssFallback:t.ssFallback&&Is(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&hl(u,l.clone(u)),u}function Nm(t=" ",e=0){return Qe(Zr,null,t,e)}function JR(t="",e=!1){return e?(Bd(),Sm(bn,null,t)):Qe(bn,null,t)}function St(t){return t==null||typeof t=="boolean"?Qe(bn):V(t)?Qe(Ft,null,t.slice()):vr(t)?an(t):Qe(Zr,null,String(t))}function an(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Is(t)}function pl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),pl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Rd(e)?e._ctx=tt:i===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),s&64?(n=16,e=[Nm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Za([e.class,s.class]));else if(i==="style")e.style=Xa([e.style,s.style]);else if($r(i)){const r=e[i],o=s[i];o&&r!==o&&!(V(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ct(t,e,n,s=null){kt(t,e,7,[n,s])}const km=Cd();let Om=0;function xm(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||km,r={uid:Om++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nd(s,i),emitsOptions:Ud(s,i),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=mm.bind(null,r),t.ce&&t.ce(r),r}let Me=null;const jd=()=>Me||tt;let Er,ma;{const t=Kr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Er=e("__VUE_INSTANCE_SETTERS__",n=>Me=n),ma=e("__VUE_SSR_SETTERS__",n=>vi=n)}const Di=t=>{const e=Me;return Er(t),t.scope.on(),()=>{t.scope.off(),Er(e)}},Fc=()=>{Me&&Me.scope.off(),Er(null)};function $d(t){return t.vnode.shapeFlag&4}let vi=!1;function Dm(t,e=!1,n=!1){e&&ma(e);const{props:s,children:i}=t.vnode,r=$d(t);sm(t,s,r,e),am(t,i,n||e);const o=r?Mm(t,e):void 0;return e&&ma(!1),o}function Mm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Kg);const{setup:s}=n;if(s){zt();const i=t.setupContext=s.length>1?Um(t):null,r=Di(t),o=xi(s,t,0,[t.props,i]),a=Bh(o);if(Kt(),r(),(a||t.sp)&&!ti(t)&&yd(t),a){if(o.then(Fc,Fc),e)return o.then(l=>{Bc(t,l)}).catch(l=>{Qr(l,t,0)});t.asyncDep=o}else Bc(t,o)}else Gd(t)}function Bc(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=hd(e)),Gd(t)}function Gd(t,e,n){const s=t.type;t.render||(t.render=s.render||At);{const i=Di(t);zt();try{Yg(t)}finally{Kt(),i()}}}const Lm={get(t,e){return De(t,"get",""),t[e]}};function Um(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Lm),slots:t.slots,emit:t.emit,expose:e}}function eo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(hd(al(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ni)return ni[n](t)},has(e,n){return n in e||n in ni}})):t.proxy}function Fm(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function Bm(t){return $(t)&&"__vccOpts"in t}const ot=(t,e)=>wg(t,e,vi);function qd(t,e,n){try{yr(-1);const s=arguments.length;return s===2?pe(e)&&!V(e)?vr(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&vr(n)&&(n=[n]),Qe(t,e,n))}finally{yr(1)}}const Hm="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ya;const Hc=typeof window<"u"&&window.trustedTypes;if(Hc)try{ya=Hc.createPolicy("vue",{createHTML:t=>t})}catch{}const zd=ya?t=>ya.createHTML(t):t=>t,Vm="http://www.w3.org/2000/svg",Wm="http://www.w3.org/1998/Math/MathML",Ut=typeof document<"u"?document:null,Vc=Ut&&Ut.createElement("template"),jm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Ut.createElementNS(Vm,t):e==="mathml"?Ut.createElementNS(Wm,t):n?Ut.createElement(t,{is:n}):Ut.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ut.createTextNode(t),createComment:t=>Ut.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ut.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Vc.innerHTML=zd(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Vc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$m=Symbol("_vtc");function Gm(t,e,n){const s=t[$m];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wc=Symbol("_vod"),qm=Symbol("_vsh"),zm=Symbol(""),Km=/(?:^|;)\s*display\s*:/;function Ym(t,e,n){const s=t.style,i=Te(n);let r=!1;if(n&&!i){if(e)if(Te(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&rr(s,a,"")}else for(const o in e)n[o]==null&&rr(s,o,"");for(const o in n)o==="display"&&(r=!0),rr(s,o,n[o])}else if(i){if(e!==n){const o=s[zm];o&&(n+=";"+o),s.cssText=n,r=Km.test(n)}}else e&&t.removeAttribute("style");Wc in t&&(t[Wc]=r?s.display:"",t[qm]&&(s.display="none"))}const jc=/\s*!important$/;function rr(t,e,n){if(V(n))n.forEach(s=>rr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Qm(t,e);jc.test(n)?t.setProperty(Jn(s),n.replace(jc,""),"important"):t[s]=n}}const $c=["Webkit","Moz","ms"],Mo={};function Qm(t,e){const n=Mo[e];if(n)return n;let s=ht(e);if(s!=="filter"&&s in t)return Mo[e]=s;s=zr(s);for(let i=0;i<$c.length;i++){const r=$c[i]+s;if(r in t)return Mo[e]=r}return e}const Gc="http://www.w3.org/1999/xlink";function qc(t,e,n,s,i,r=z_(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gc,e.slice(6,e.length)):t.setAttributeNS(Gc,e,n):n==null||r&&!jh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Sn(n)?String(n):n)}function zc(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?zd(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=jh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function hs(t,e,n,s){t.addEventListener(e,n,s)}function Jm(t,e,n,s){t.removeEventListener(e,n,s)}const Kc=Symbol("_vei");function Xm(t,e,n,s,i=null){const r=t[Kc]||(t[Kc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Zm(e);if(s){const c=r[e]=ny(s,i);hs(t,a,c,l)}else o&&(Jm(t,a,o,l),r[e]=void 0)}}const Yc=/(?:Once|Passive|Capture)$/;function Zm(t){let e;if(Yc.test(t)){e={};let s;for(;s=t.match(Yc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jn(t.slice(2)),e]}let Lo=0;const ey=Promise.resolve(),ty=()=>Lo||(ey.then(()=>Lo=0),Lo=Date.now());function ny(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;kt(sy(s,n.value),e,5,[s])};return n.value=t,n.attached=ty(),n}function sy(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Qc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,iy=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Gm(t,s,o):e==="style"?Ym(t,n,s):$r(e)?Ya(e)||Xm(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ry(t,e,s,o))?(zc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qc(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Te(s))?zc(t,ht(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),qc(t,e,s,o))};function ry(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qc(e)&&$(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Qc(e)&&Te(n)?!1:e in t}const Jc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>nr(e,n):e};function oy(t){t.target.composing=!0}function Xc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Uo=Symbol("_assign"),XR={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Uo]=Jc(i);const r=s||i.props&&i.props.type==="number";hs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=la(a)),t[Uo](a)}),n&&hs(t,"change",()=>{t.value=t.value.trim()}),e||(hs(t,"compositionstart",oy),hs(t,"compositionend",Xc),hs(t,"change",Xc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Uo]=Jc(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?la(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},ay=Le({patchProp:iy},jm);let Zc;function ly(){return Zc||(Zc=cm(ay))}const cy=((...t)=>{const e=ly().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=hy(s);if(!i)return;const r=e._component;!$(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,uy(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e});function uy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function hy(t){return Te(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Kd;const to=t=>Kd=t,Yd=Symbol();function va(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ri;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ri||(ri={}));function dy(){const t=zh(!0),e=t.run(()=>ll({}));let n=[],s=[];const i=al({install(r){to(i),i._a=r,r.provide(Yd,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Qd=()=>{};function eu(t,e,n,s=Qd){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Kh()&&Y_(i),i}function as(t,...e){t.slice().forEach(n=>{n(...e)})}const fy=t=>t(),tu=Symbol(),Fo=Symbol();function Ea(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];va(i)&&va(s)&&t.hasOwnProperty(n)&&!Ie(s)&&!_n(s)?t[n]=Ea(i,s):t[n]=s}return t}const py=Symbol();function _y(t){return!va(t)||!Object.prototype.hasOwnProperty.call(t,py)}const{assign:rn}=Object;function gy(t){return!!(Ie(t)&&t.effect)}function my(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=yg(n.state.value[t]);return rn(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=al(ot(()=>{to(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=Jd(t,c,e,n,s,!0),l}function Jd(t,e,n={},s,i,r){let o;const a=rn({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],f;const g=s.state.value[t];!r&&!g&&(s.state.value[t]={}),ll({});let y;function T(G){let z;c=u=!1,typeof G=="function"?(G(s.state.value[t]),z={type:ri.patchFunction,storeId:t,events:f}):(Ea(s.state.value[t],G),z={type:ri.patchObject,payload:G,storeId:t,events:f});const me=y=Symbol();cl().then(()=>{y===me&&(c=!0)}),u=!0,as(h,z,s.state.value[t])}const N=r?function(){const{state:z}=n,me=z?z():{};this.$patch(Ue=>{rn(Ue,me)})}:Qd;function S(){o.stop(),h=[],d=[],s._s.delete(t)}const P=(G,z="")=>{if(tu in G)return G[Fo]=z,G;const me=function(){to(s);const Ue=Array.from(arguments),Xe=[],Ge=[];function An(q){Xe.push(q)}function en(q){Ge.push(q)}as(d,{args:Ue,name:me[Fo],store:W,after:An,onError:en});let ge;try{ge=G.apply(this&&this.$id===t?this:W,Ue)}catch(q){throw as(Ge,q),q}return ge instanceof Promise?ge.then(q=>(as(Xe,q),q)).catch(q=>(as(Ge,q),Promise.reject(q))):(as(Xe,ge),ge)};return me[tu]=!0,me[Fo]=z,me},R={_p:s,$id:t,$onAction:eu.bind(null,d),$patch:T,$reset:N,$subscribe(G,z={}){const me=eu(h,G,z.detached,()=>Ue()),Ue=o.run(()=>si(()=>s.state.value[t],Xe=>{(z.flush==="sync"?u:c)&&G({storeId:t,type:ri.direct,events:f},Xe)},rn({},l,z)));return me},$dispose:S},W=Oi(R);s._s.set(t,W);const Z=(s._a&&s._a.runWithContext||fy)(()=>s._e.run(()=>(o=zh()).run(()=>e({action:P}))));for(const G in Z){const z=Z[G];if(Ie(z)&&!gy(z)||_n(z))r||(g&&_y(z)&&(Ie(z)?z.value=g[G]:Ea(z,g[G])),s.state.value[t][G]=z);else if(typeof z=="function"){const me=P(z,G);Z[G]=me,a.actions[G]=z}}return rn(W,Z),rn(ee(W),Z),Object.defineProperty(W,"$state",{get:()=>s.state.value[t],set:G=>{T(z=>{rn(z,G)})}}),s._p.forEach(G=>{rn(W,o.run(()=>G({store:W,app:s._a,pinia:s,options:a})))}),g&&r&&n.hydrate&&n.hydrate(W.$state,g),c=!0,u=!0,W}/*! #__NO_SIDE_EFFECTS__ */function yy(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,a){const l=nm();return o=o||(l?ut(Yd,null):null),o&&to(o),o=Kd,o._s.has(t)||(i?Jd(t,e,s,o):my(t,s,o)),o._s.get(t)}return r.$id=t,r}const vy=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Ey={},by={class:"min-h-dvh bg-slate-950 text-slate-100 antialiased"};function wy(t,e){const n=Gg("RouterView");return Bd(),Tm("div",by,[Qe(n)])}const Iy=vy(Ey,[["render",wy]]),Cy="modulepreload",Ty=function(t,e){return new URL(t,e).href},nu={},Qi=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=c(n.map(u=>{if(u=Ty(u,s),u in nu)return;nu[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(s)for(let g=o.length-1;g>=0;g--){const y=o[g];if(y.href===u&&(!h||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Cy,h||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((g,y)=>{f.addEventListener("load",g),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ds=typeof document<"u";function Xd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Xd(t.default)}const se=Object.assign;function Bo(t,e){const n={};for(const s in e){const i=e[s];n[s]=yt(i)?i.map(t):t(i)}return n}const oi=()=>{},yt=Array.isArray;function su(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const Zd=/#/g,Ry=/&/g,Ay=/\//g,Ny=/=/g,Py=/\?/g,ef=/\+/g,ky=/%5B/g,Oy=/%5D/g,tf=/%5E/g,xy=/%60/g,nf=/%7B/g,Dy=/%7C/g,sf=/%7D/g,My=/%20/g;function _l(t){return t==null?"":encodeURI(""+t).replace(Dy,"|").replace(ky,"[").replace(Oy,"]")}function Ly(t){return _l(t).replace(nf,"{").replace(sf,"}").replace(tf,"^")}function ba(t){return _l(t).replace(ef,"%2B").replace(My,"+").replace(Zd,"%23").replace(Ry,"%26").replace(xy,"`").replace(nf,"{").replace(sf,"}").replace(tf,"^")}function Uy(t){return ba(t).replace(Ny,"%3D")}function Fy(t){return _l(t).replace(Zd,"%23").replace(Py,"%3F")}function By(t){return Fy(t).replace(Ay,"%2F")}function Ei(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Hy=/\/$/,Vy=t=>t.replace(Hy,"");function Ho(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(s=e.slice(0,l),r=e.slice(l,a>0?a:e.length),i=t(r.slice(1))),a>=0&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Gy(s??e,n),{fullPath:s+r+o,path:s,query:i,hash:Ei(o)}}function Wy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function iu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function jy(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Cs(e.matched[s],n.matched[i])&&rf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function rf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$y(t[n],e[n]))return!1;return!0}function $y(t,e){return yt(t)?ru(t,e):yt(e)?ru(e,t):t===e}function ru(t,e){return yt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Gy(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let wa=(function(t){return t.pop="pop",t.push="push",t})({}),Vo=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function qy(t){if(!t)if(ds){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Vy(t)}const zy=/^[^#]+#/;function Ky(t,e){return t.replace(zy,"#")+e}function Yy(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const no=()=>({left:window.scrollX,top:window.scrollY});function Qy(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Yy(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ou(t,e){return(history.state?history.state.position-e:-1)+t}const Ia=new Map;function Jy(t,e){Ia.set(t,e)}function Xy(t){const e=Ia.get(t);return Ia.delete(t),e}function Zy(t){return typeof t=="string"||t&&typeof t=="object"}function of(t){return typeof t=="string"||typeof t=="symbol"}let Ee=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const af=Symbol("");Ee.MATCHER_NOT_FOUND+"",Ee.NAVIGATION_GUARD_REDIRECT+"",Ee.NAVIGATION_ABORTED+"",Ee.NAVIGATION_CANCELLED+"",Ee.NAVIGATION_DUPLICATED+"";function Ts(t,e){return se(new Error,{type:t,[af]:!0},e)}function Lt(t,e){return t instanceof Error&&af in t&&(e==null||!!(t.type&e))}const ev=["params","query","hash"];function tv(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of ev)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function nv(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const i=n[s].replace(ef," "),r=i.indexOf("="),o=Ei(r<0?i:i.slice(0,r)),a=r<0?null:Ei(i.slice(r+1));if(o in e){let l=e[o];yt(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function au(t){let e="";for(let n in t){const s=t[n];if(n=Uy(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(yt(s)?s.map(i=>i&&ba(i)):[s&&ba(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function sv(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=yt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const iv=Symbol(""),lu=Symbol(""),so=Symbol(""),gl=Symbol(""),Ca=Symbol("");function $s(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ln(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Ts(Ee.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):Zy(d)?l(Ts(Ee.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Wo(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Xd(l)){const c=(l.__vccOpts||l)[e];c&&r.push(ln(c,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=Sy(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&ln(d,n,s,o,a,i)()}))}}return r}function rv(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Cs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Cs(c,l))||i.push(l))}return[n,s,i]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ov=()=>location.protocol+"//"+location.host;function lf(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let o=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(o);return a[0]!=="/"&&(a="/"+a),iu(a,"")}return iu(n,t)+s+i}function av(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=lf(t,location),g=n.value,y=e.value;let T=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}T=y?d.position-y.position:0}else s(f);i.forEach(N=>{N(n.value,g,{delta:T,type:wa.pop,direction:T?T>0?Vo.forward:Vo.back:Vo.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return r.push(f),f}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(se({},d.state,{scroll:no()}),"")}}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:h}}function cu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?no():null}}function lv(t){const{history:e,location:n}=window,s={value:lf(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:ov()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){r(l,se({},e.state,cu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position}),!0),s.value=l}function a(l,c){const u=se({},i.value,e.state,{forward:l,scroll:no()});r(u.current,u,!0),r(l,se({},cu(s.value,l,null),{position:u.position+1},c),!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function cv(t){t=qy(t);const e=lv(t),n=av(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=se({location:"",base:t,go:s,createHref:Ky.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function uv(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),cv(t)}let Ln=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Se=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Se||{});const hv={type:Ln.Static,value:""},dv=/[a-zA-Z0-9_]/;function fv(t){if(!t)return[[]];if(t==="/")return[[hv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=Se.Static,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===Se.Static?r.push({type:Ln.Static,value:c}):n===Se.Param||n===Se.ParamRegExp||n===Se.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Ln.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Se.ParamRegExp){s=n,n=Se.EscapeNext;continue}switch(n){case Se.Static:l==="/"?(c&&h(),o()):l===":"?(h(),n=Se.Param):d();break;case Se.EscapeNext:d(),n=s;break;case Se.Param:l==="("?n=Se.ParamRegExp:dv.test(l)?d():(h(),n=Se.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Se.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Se.ParamRegExpEnd:u+=l;break;case Se.ParamRegExpEnd:h(),n=Se.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===Se.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}const uu="[^/]+?",pv={sensitive:!1,strict:!1,start:!0,end:!0};var He=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(He||{});const _v=/[.+*?^${}()[\]/\\]/g;function gv(t,e){const n=se({},pv,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[He.Root];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=He.Segment+(n.sensitive?He.BonusCaseSensitive:0);if(d.type===Ln.Static)h||(i+="/"),i+=d.value.replace(_v,"\\$&"),f+=He.Static;else if(d.type===Ln.Param){const{value:g,repeatable:y,optional:T,regexp:N}=d;r.push({name:g,repeatable:y,optional:T});const S=N||uu;if(S!==uu){f+=He.BonusCustomRegExp;try{`${S}`}catch(R){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+R.message)}}let P=y?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(P=T&&c.length<2?`(?:/${P})`:"/"+P),T&&(P+="?"),i+=P,f+=He.Dynamic,T&&(f+=He.BonusOptional),y&&(f+=He.BonusRepeatable),S===".*"&&(f+=He.BonusWildcard)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=He.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=r[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===Ln.Static)u+=f.value;else if(f.type===Ln.Param){const{value:g,repeatable:y,optional:T}=f,N=g in c?c[g]:"";if(yt(N)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=yt(N)?N.join("/"):N;if(!S)if(T)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function mv(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===He.Static+He.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===He.Static+He.Segment?1:-1:0}function cf(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=mv(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(hu(s))return 1;if(hu(i))return-1}return i.length-s.length}function hu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const yv={strict:!1,end:!0,sensitive:!1};function vv(t,e,n){const s=gv(fv(t.path),n),i=se(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Ev(t,e){const n=[],s=new Map;e=su(yv,e);function i(h){return s.get(h)}function r(h,d,f){const g=!f,y=fu(h);y.aliasOf=f&&f.record;const T=su(e,h),N=[y];if("alias"in h){const R=typeof h.alias=="string"?[h.alias]:h.alias;for(const W of R)N.push(fu(se({},y,{components:f?f.record.components:y.components,path:W,aliasOf:f?f.record:y})))}let S,P;for(const R of N){const{path:W}=R;if(d&&W[0]!=="/"){const fe=d.record.path,Z=fe[fe.length-1]==="/"?"":"/";R.path=d.record.path+(W&&Z+W)}if(S=vv(R,d,T),f?f.alias.push(S):(P=P||S,P!==S&&P.alias.push(S),g&&h.name&&!pu(S)&&o(h.name)),uf(S)&&l(S),y.children){const fe=y.children;for(let Z=0;Z<fe.length;Z++)r(fe[Z],S,f&&f.children[Z])}f=f||S}return P?()=>{o(P)}:oi}function o(h){if(of(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=Iv(h,n);n.splice(d,0,h),h.record.name&&!pu(h)&&s.set(h.record.name,h)}function c(h,d){let f,g={},y,T;if("name"in h&&h.name){if(f=s.get(h.name),!f)throw Ts(Ee.MATCHER_NOT_FOUND,{location:h});T=f.record.name,g=se(du(d.params,f.keys.filter(P=>!P.optional).concat(f.parent?f.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),h.params&&du(h.params,f.keys.map(P=>P.name))),y=f.stringify(g)}else if(h.path!=null)y=h.path,f=n.find(P=>P.re.test(y)),f&&(g=f.parse(y),T=f.record.name);else{if(f=d.name?s.get(d.name):n.find(P=>P.re.test(d.path)),!f)throw Ts(Ee.MATCHER_NOT_FOUND,{location:h,currentLocation:d});T=f.record.name,g=se({},d.params,h.params),y=f.stringify(g)}const N=[];let S=f;for(;S;)N.unshift(S.record),S=S.parent;return{name:T,path:y,params:g,matched:N,meta:wv(N)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function du(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function fu(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:bv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function bv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function pu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function wv(t){return t.reduce((e,n)=>se(e,n.meta),{})}function Iv(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;cf(t,e[r])<0?s=r:n=r+1}const i=Cv(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function Cv(t){let e=t;for(;e=e.parent;)if(uf(e)&&cf(t,e)===0)return e}function uf({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function _u(t){const e=ut(so),n=ut(gl),s=ot(()=>{const l=gs(t.to);return e.resolve(l)}),i=ot(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Cs.bind(null,u));if(d>-1)return d;const f=gu(l[c-2]);return c>1&&gu(u)===f&&h[h.length-1].path!==f?h.findIndex(Cs.bind(null,l[c-2])):d}),r=ot(()=>i.value>-1&&Nv(n.params,s.value.params)),o=ot(()=>i.value>-1&&i.value===n.matched.length-1&&rf(n.params,s.value.params));function a(l={}){if(Av(l)){const c=e[gs(t.replace)?"replace":"push"](gs(t.to)).catch(oi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:ot(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function Tv(t){return t.length===1?t[0]:t}const Sv=md({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_u,setup(t,{slots:e}){const n=Oi(_u(t)),{options:s}=ut(so),i=ot(()=>({[mu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[mu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&Tv(e.default(n));return t.custom?r:qd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Rv=Sv;function Av(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Nv(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!yt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function gu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mu=(t,e,n)=>t??e??n,Pv=md({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ut(Ca),i=ot(()=>t.route||s.value),r=ut(lu,0),o=ot(()=>{let c=gs(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ot(()=>i.value.matched[o.value]);sr(lu,ot(()=>o.value+1)),sr(iv,a),sr(Ca,i);const l=ll();return si(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Cs(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return yu(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,T=qd(d,se({},g,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return yu(n.default,{Component:T,route:c})||T}}});function yu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const kv=Pv;function Ov(t){const e=Ev(t.routes,t),n=t.parseQuery||nv,s=t.stringifyQuery||au,i=t.history,r=$s(),o=$s(),a=$s(),l=_g(nn);let c=nn;ds&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Bo.bind(null,b=>""+b),h=Bo.bind(null,By),d=Bo.bind(null,Ei);function f(b,M){let x,L;return of(b)?(x=e.getRecordMatcher(b),L=M):L=b,e.addRoute(L,x)}function g(b){const M=e.getRecordMatcher(b);M&&e.removeRoute(M)}function y(){return e.getRoutes().map(b=>b.record)}function T(b){return!!e.getRecordMatcher(b)}function N(b,M){if(M=se({},M||l.value),typeof b=="string"){const m=Ho(n,b,M.path),E=e.resolve({path:m.path},M),w=i.createHref(m.fullPath);return se(m,E,{params:d(E.params),hash:Ei(m.hash),redirectedFrom:void 0,href:w})}let x;if(b.path!=null)x=se({},b,{path:Ho(n,b.path,M.path).path});else{const m=se({},b.params);for(const E in m)m[E]==null&&delete m[E];x=se({},b,{params:h(m)}),M.params=h(M.params)}const L=e.resolve(x,M),J=b.hash||"";L.params=u(d(L.params));const p=Wy(s,se({},b,{hash:Ly(J),path:L.path})),_=i.createHref(p);return se({fullPath:p,hash:J,query:s===au?sv(b.query):b.query||{}},L,{redirectedFrom:void 0,href:_})}function S(b){return typeof b=="string"?Ho(n,b,l.value.path):se({},b)}function P(b,M){if(c!==b)return Ts(Ee.NAVIGATION_CANCELLED,{from:M,to:b})}function R(b){return Z(b)}function W(b){return R(se(S(b),{replace:!0}))}function fe(b,M){const x=b.matched[b.matched.length-1];if(x&&x.redirect){const{redirect:L}=x;let J=typeof L=="function"?L(b,M):L;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=S(J):{path:J},J.params={}),se({query:b.query,hash:b.hash,params:J.path!=null?{}:b.params},J)}}function Z(b,M){const x=c=N(b),L=l.value,J=b.state,p=b.force,_=b.replace===!0,m=fe(x,L);if(m)return Z(se(S(m),{state:typeof m=="object"?se({},J,m.state):J,force:p,replace:_}),M||x);const E=x;E.redirectedFrom=M;let w;return!p&&jy(s,L,x)&&(w=Ts(Ee.NAVIGATION_DUPLICATED,{to:E,from:L}),Et(L,L,!0,!1)),(w?Promise.resolve(w):me(E,L)).catch(v=>Lt(v)?Lt(v,Ee.NAVIGATION_GUARD_REDIRECT)?v:tn(v):ne(v,E,L)).then(v=>{if(v){if(Lt(v,Ee.NAVIGATION_GUARD_REDIRECT))return Z(se({replace:_},S(v.to),{state:typeof v.to=="object"?se({},J,v.to.state):J,force:p}),M||E)}else v=Xe(E,L,!0,_,J);return Ue(E,L,v),v})}function G(b,M){const x=P(b,M);return x?Promise.reject(x):Promise.resolve()}function z(b){const M=rs.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(b):b()}function me(b,M){let x;const[L,J,p]=rv(b,M);x=Wo(L.reverse(),"beforeRouteLeave",b,M);for(const m of L)m.leaveGuards.forEach(E=>{x.push(ln(E,b,M))});const _=G.bind(null,b,M);return x.push(_),rt(x).then(()=>{x=[];for(const m of r.list())x.push(ln(m,b,M));return x.push(_),rt(x)}).then(()=>{x=Wo(J,"beforeRouteUpdate",b,M);for(const m of J)m.updateGuards.forEach(E=>{x.push(ln(E,b,M))});return x.push(_),rt(x)}).then(()=>{x=[];for(const m of p)if(m.beforeEnter)if(yt(m.beforeEnter))for(const E of m.beforeEnter)x.push(ln(E,b,M));else x.push(ln(m.beforeEnter,b,M));return x.push(_),rt(x)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),x=Wo(p,"beforeRouteEnter",b,M,z),x.push(_),rt(x))).then(()=>{x=[];for(const m of o.list())x.push(ln(m,b,M));return x.push(_),rt(x)}).catch(m=>Lt(m,Ee.NAVIGATION_CANCELLED)?m:Promise.reject(m))}function Ue(b,M,x){a.list().forEach(L=>z(()=>L(b,M,x)))}function Xe(b,M,x,L,J){const p=P(b,M);if(p)return p;const _=M===nn,m=ds?history.state:{};x&&(L||_?i.replace(b.fullPath,se({scroll:_&&m&&m.scroll},J)):i.push(b.fullPath,J)),l.value=b,Et(b,M,x,_),tn()}let Ge;function An(){Ge||(Ge=i.listen((b,M,x)=>{if(!Nn.listening)return;const L=N(b),J=fe(L,Nn.currentRoute.value);if(J){Z(se(J,{replace:!0,force:!0}),L).catch(oi);return}c=L;const p=l.value;ds&&Jy(ou(p.fullPath,x.delta),no()),me(L,p).catch(_=>Lt(_,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_CANCELLED)?_:Lt(_,Ee.NAVIGATION_GUARD_REDIRECT)?(Z(se(S(_.to),{force:!0}),L).then(m=>{Lt(m,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_DUPLICATED)&&!x.delta&&x.type===wa.pop&&i.go(-1,!1)}).catch(oi),Promise.reject()):(x.delta&&i.go(-x.delta,!1),ne(_,L,p))).then(_=>{_=_||Xe(L,p,!1),_&&(x.delta&&!Lt(_,Ee.NAVIGATION_CANCELLED)?i.go(-x.delta,!1):x.type===wa.pop&&Lt(_,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),Ue(L,p,_)}).catch(oi)}))}let en=$s(),ge=$s(),q;function ne(b,M,x){tn(b);const L=ge.list();return L.length?L.forEach(J=>J(b,M,x)):console.error(b),Promise.reject(b)}function Dt(){return q&&l.value!==nn?Promise.resolve():new Promise((b,M)=>{en.add([b,M])})}function tn(b){return q||(q=!b,An(),en.list().forEach(([M,x])=>b?x(b):M()),en.reset()),b}function Et(b,M,x,L){const{scrollBehavior:J}=t;if(!ds||!J)return Promise.resolve();const p=!x&&Xy(ou(b.fullPath,0))||(L||!x)&&history.state&&history.state.scroll||null;return cl().then(()=>J(b,M,p)).then(_=>_&&Qy(_)).catch(_=>ne(_,b,M))}const qe=b=>i.go(b);let is;const rs=new Set,Nn={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:T,getRoutes:y,resolve:N,options:t,push:R,replace:W,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ge.add,isReady:Dt,install(b){b.component("RouterLink",Rv),b.component("RouterView",kv),b.config.globalProperties.$router=Nn,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>gs(l)}),ds&&!is&&l.value===nn&&(is=!0,R(i.location).catch(L=>{}));const M={};for(const L in nn)Object.defineProperty(M,L,{get:()=>l.value[L],enumerable:!0});b.provide(so,Nn),b.provide(gl,cd(M)),b.provide(Ca,l);const x=b.unmount;rs.add(b),b.unmount=function(){rs.delete(b),rs.size<1&&(c=nn,Ge&&Ge(),Ge=null,l.value=nn,is=!1,q=!1),x()}}};function rt(b){return b.reduce((M,x)=>M.then(()=>z(x)),Promise.resolve())}return Nn}function ZR(){return ut(so)}function eA(t){return ut(gl)}const xv=()=>{};var vu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw Ds(e)},Ds=function(t){return new Error("Firebase Database ("+hf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ml={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(df(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Mv;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ff=function(t){const e=df(t);return ml.encodeByteArray(e,!0)},br=function(t){return ff(t).replace(/\./g,"")},wr=function(t){try{return ml.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t){return pf(void 0,t)}function pf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Uv(n)||(t[n]=pf(t[n],e[n]));return t}function Uv(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=()=>Fv().__FIREBASE_DEFAULTS__,Hv=()=>{if(typeof process>"u"||typeof vu>"u")return;const t=vu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wr(t[1]);return e&&JSON.parse(e)},yl=()=>{try{return xv()||Bv()||Hv()||Vv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_f=t=>yl()?.emulatorHosts?.[t],gf=t=>{const e=_f(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},mf=()=>yl()?.config,yf=t=>yl()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vl(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[br(JSON.stringify(n)),br(JSON.stringify(o)),""].join(".")}const ai={};function Wv(){const t={prod:[],emulator:[]};for(const e of Object.keys(ai))ai[e]?t.emulator.push(e):t.prod.push(e);return t}function jv(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Eu=!1;function El(t,e){if(typeof window>"u"||typeof document>"u"||!Rn(window.location.host)||ai[t]===e||ai[t]||Eu)return;ai[t]=e;function n(d){return`__firebase__banner__${d}`}const s="__firebase__banner",r=Wv().prod.length>0;function o(){const d=document.getElementById(s);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,f){d.setAttribute("width","24"),d.setAttribute("id",f),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function c(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Eu=!0,o()},d}function u(d,f){d.setAttribute("id",f),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function h(){const d=jv(s),f=n("text"),g=document.getElementById(f)||document.createElement("span"),y=n("learnmore"),T=document.getElementById(y)||document.createElement("a"),N=n("preprendIcon"),S=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const P=d.element;a(P),u(T,y);const R=c();l(S,N),P.append(S,g,T,R),document.body.appendChild(P)}r?(g.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(S.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",f)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function $v(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ef(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qv(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zv(){return hf.NODE_ADMIN===!0}function Kv(){try{return typeof indexedDB=="object"}catch{return!1}}function Yv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="FirebaseError";class Zt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Qv,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mi.prototype.create)}}class Mi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Jv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,a,s)}}function Jv(t,e){return t.replace(Xv,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Xv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){return JSON.parse(t)}function Re(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=bi(wr(r[0])||""),n=bi(wr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Zv=function(t){const e=bf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},eE=function(t){const e=bf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function jn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ta(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ir(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function $n(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(bu(r)&&bu(o)){if(!$n(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function bu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function nE(t,e){const n=new sE(t,e);return n.subscribe.bind(n)}class sE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");iE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=jo),i.error===void 0&&(i.error=jo),i.complete===void 0&&(i.complete=jo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jo(){}function io(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ro=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ms;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lE(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:aE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aE(t){return t===xn?void 0:t}function lE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const uE={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},hE=oe.INFO,dE={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},fE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=dE[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wl{constructor(e){this.name=e,this._logLevel=hE,this._logHandler=fE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const pE=(t,e)=>e.some(n=>t instanceof n);let wu,Iu;function _E(){return wu||(wu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gE(){return Iu||(Iu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wf=new WeakMap,Sa=new WeakMap,If=new WeakMap,$o=new WeakMap,Il=new WeakMap;function mE(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(gn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wf.set(n,t)}).catch(()=>{}),Il.set(e,t),e}function yE(t){if(Sa.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Sa.set(t,e)}let Ra={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||If.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vE(t){Ra=t(Ra)}function EE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Go(this),e,...n);return If.set(s,e.sort?e.sort():[e]),gn(s)}:gE().includes(t)?function(...e){return t.apply(Go(this),e),gn(wf.get(this))}:function(...e){return gn(t.apply(Go(this),e))}}function bE(t){return typeof t=="function"?EE(t):(t instanceof IDBTransaction&&yE(t),pE(t,_E())?new Proxy(t,Ra):t)}function gn(t){if(t instanceof IDBRequest)return mE(t);if($o.has(t))return $o.get(t);const e=bE(t);return e!==t&&($o.set(t,e),Il.set(e,t)),e}const Go=t=>Il.get(t);function wE(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=gn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(gn(o.result),l.oldVersion,l.newVersion,gn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const IE=["get","getKey","getAll","getAllKeys","count"],CE=["put","add","delete","clear"],qo=new Map;function Cu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qo.get(e))return qo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=CE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||IE.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return qo.set(e,r),r}vE(t=>({...t,get:(e,n,s)=>Cu(e,n)||t.get(e,n,s),has:(e,n)=>!!Cu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function SE(t){return t.getComponent()?.type==="VERSION"}const Aa="@firebase/app",Tu="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new wl("@firebase/app"),RE="@firebase/app-compat",AE="@firebase/analytics-compat",NE="@firebase/analytics",PE="@firebase/app-check-compat",kE="@firebase/app-check",OE="@firebase/auth",xE="@firebase/auth-compat",DE="@firebase/database",ME="@firebase/data-connect",LE="@firebase/database-compat",UE="@firebase/functions",FE="@firebase/functions-compat",BE="@firebase/installations",HE="@firebase/installations-compat",VE="@firebase/messaging",WE="@firebase/messaging-compat",jE="@firebase/performance",$E="@firebase/performance-compat",GE="@firebase/remote-config",qE="@firebase/remote-config-compat",zE="@firebase/storage",KE="@firebase/storage-compat",YE="@firebase/firestore",QE="@firebase/ai",JE="@firebase/firestore-compat",XE="firebase",ZE="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="[DEFAULT]",eb={[Aa]:"fire-core",[RE]:"fire-core-compat",[NE]:"fire-analytics",[AE]:"fire-analytics-compat",[kE]:"fire-app-check",[PE]:"fire-app-check-compat",[OE]:"fire-auth",[xE]:"fire-auth-compat",[DE]:"fire-rtdb",[ME]:"fire-data-connect",[LE]:"fire-rtdb-compat",[UE]:"fire-fn",[FE]:"fire-fn-compat",[BE]:"fire-iid",[HE]:"fire-iid-compat",[VE]:"fire-fcm",[WE]:"fire-fcm-compat",[jE]:"fire-perf",[$E]:"fire-perf-compat",[GE]:"fire-rc",[qE]:"fire-rc-compat",[zE]:"fire-gcs",[KE]:"fire-gcs-compat",[YE]:"fire-fst",[JE]:"fire-fst-compat",[QE]:"fire-vertex","fire-js":"fire-js",[XE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Map,tb=new Map,Pa=new Map;function Su(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gn(t){const e=t.name;if(Pa.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;Pa.set(e,t);for(const n of wi.values())Su(n,t);for(const n of tb.values())Su(n,t);return!0}function oo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function at(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new Mi("app","Firebase",nb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=ZE;function Cf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Na,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=mf()),!n)throw mn.create("no-options");const r=wi.get(i);if(r){if($n(n,r.options)&&$n(s,r.config))return r;throw mn.create("duplicate-app",{appName:i})}const o=new cE(i);for(const l of Pa.values())o.addComponent(l);const a=new sb(n,s,o);return wi.set(i,a),a}function ao(t=Na){const e=wi.get(t);if(!e&&t===Na&&mf())return Cf();if(!e)throw mn.create("no-app",{appName:t});return e}function ib(){return Array.from(wi.values())}function Nt(t,e,n){let s=eb[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(o.join(" "));return}Gn(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="firebase-heartbeat-database",ob=1,Ii="firebase-heartbeat-store";let zo=null;function Tf(){return zo||(zo=wE(rb,ob,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ii)}catch(n){console.warn(n)}}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),zo}async function ab(t){try{const n=(await Tf()).transaction(Ii),s=await n.objectStore(Ii).get(Sf(t));return await n.done,s}catch(e){if(e instanceof Zt)Yt.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e?.message});Yt.warn(n.message)}}}async function Ru(t,e){try{const s=(await Tf()).transaction(Ii,"readwrite");await s.objectStore(Ii).put(e,Sf(t)),await s.done}catch(n){if(n instanceof Zt)Yt.warn(n.message);else{const s=mn.create("idb-set",{originalErrorMessage:n?.message});Yt.warn(s.message)}}}function Sf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=1024,cb=30;class ub{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new db(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Au();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>cb){const i=fb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Yt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Au(),{heartbeatsToSend:n,unsentEntries:s}=hb(this._heartbeatsCache.heartbeats),i=br(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Yt.warn(e),""}}}function Au(){return new Date().toISOString().substring(0,10)}function hb(t,e=lb){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Nu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class db{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kv()?Yv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ab(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ru(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ru(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nu(t){return br(JSON.stringify({version:2,heartbeats:t})).length}function fb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){Gn(new wn("platform-logger",e=>new TE(e),"PRIVATE")),Gn(new wn("heartbeat",e=>new ub(e),"PRIVATE")),Nt(Aa,Tu,t),Nt(Aa,Tu,"esm2020"),Nt("fire-js","")}pb("");function Rf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _b=Rf,Af=new Mi("auth","Firebase",Rf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new wl("@firebase/auth");function gb(t,...e){Cr.logLevel<=oe.WARN&&Cr.warn(`Auth (${Xn}): ${t}`,...e)}function or(t,...e){Cr.logLevel<=oe.ERROR&&Cr.error(`Auth (${Xn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,...e){throw Tl(t,...e)}function gt(t,...e){return Tl(t,...e)}function Cl(t,e,n){const s={..._b(),[e]:n};return new Mi("auth","Firebase",s).create(e,{appName:t.name})}function Vn(t){return Cl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mb(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ot(t,"argument-error"),Cl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Af.create(t,...e)}function H(t,e,...n){if(!t)throw Tl(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw or(e),new Error(e)}function Qt(t,e){t||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){return typeof self<"u"&&self.location?.href||""}function yb(){return Pu()==="http:"||Pu()==="https:"}function Pu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yb()||Gv()||"connection"in navigator)?navigator.onLine:!0}function Eb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=bl()||Ef()}get(){return vb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ib=new Li(3e4,6e4);function Rl(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Zn(t,e,n,s,i={}){return Pf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ls({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...r};return $v()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Rn(t.emulatorConfig.host)&&(c.credentials="include"),Nf.fetch()(await kf(t,t.config.apiHost,n,a),c)})}async function Pf(t,e,n){t._canInitEmulator=!1;const s={...bb,...e};try{const i=new Tb(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ji(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ji(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ji(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ji(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Cl(t,u,c);Ot(t,u)}}catch(i){if(i instanceof Zt)throw i;Ot(t,"network-request-failed",{message:String(i)})}}async function Cb(t,e,n,s,i={}){const r=await Zn(t,e,n,s,i);return"mfaPendingCredential"in r&&Ot(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function kf(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?Sl(t.config,i):`${t.config.apiScheme}://${i}`;return wb.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class Tb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(gt(this.auth,"network-request-failed")),Ib.get())})}}function Ji(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=gt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function Tr(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rb(t,e=!1){const n=we(t),s=await n.getIdToken(e),i=Al(s);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r?.sign_in_provider;return{claims:i,token:s,authTime:li(Ko(i.auth_time)),issuedAtTime:li(Ko(i.iat)),expirationTime:li(Ko(i.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Ko(t){return Number(t)*1e3}function Al(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return or("JWT malformed, contained fewer than 3 sections"),null;try{const i=wr(n);return i?JSON.parse(i):(or("Failed to decode base64 JWT payload"),null)}catch(i){return or("Caught error parsing JWT payload as JSON",i?.toString()),null}}function ku(t){const e=Al(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Zt&&Ab(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ab({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(t){const e=t.auth,n=await t.getIdToken(),s=await Ss(t,Tr(e,{idToken:n}));H(s?.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=i.providerUserInfo?.length?Of(i.providerUserInfo):[],o=kb(t.providerData,r),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!o?.length,c=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Oa(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function Pb(t){const e=we(t);await Sr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kb(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Of(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ob(t,e){const n=await Pf(t,{},async()=>{const s=Ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await kf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return t.emulatorConfig&&Rn(t.emulatorConfig.host)&&(l.credentials="include"),Nf.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xb(t,e){return Zn(t,"POST","/v2/accounts:revokeToken",Rl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ku(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=ku(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Ob(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ys;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ft{constructor({uid:e,auth:n,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new Nb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ss(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rb(this,e)}reload(){return Pb(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ft({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Sr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(at(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await Ss(this,Sb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,i=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:h,emailVerified:d,isAnonymous:f,providerData:g,stsTokenManager:y}=n;H(h&&y,e,"internal-error");const T=ys.fromJSON(this.name,y);H(typeof h=="string",e,"internal-error"),sn(s,e.name),sn(i,e.name),H(typeof d=="boolean",e,"internal-error"),H(typeof f=="boolean",e,"internal-error"),sn(r,e.name),sn(o,e.name),sn(a,e.name),sn(l,e.name),sn(c,e.name),sn(u,e.name);const N=new ft({uid:h,auth:e,email:i,emailVerified:d,displayName:s,isAnonymous:f,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:T,createdAt:c,lastLoginAt:u});return g&&Array.isArray(g)&&(N.providerData=g.map(S=>({...S}))),l&&(N._redirectEventId=l),N}static async _fromIdTokenResponse(e,n,s=!1){const i=new ys;i.updateFromServerResponse(n);const r=new ft({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Sr(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];H(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Of(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!r?.length,a=new ys;a.updateFromIdToken(s);const l=new ft({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Oa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!r?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new Map;function jt(t){Qt(t instanceof Function,"Expected a class definition");let e=Ou.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ou.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xf.type="NONE";const xu=xf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e,n){return`firebase:${t}:${e}:${n}`}class vs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ar(this.userKey,i.apiKey,r),this.fullPersistenceKey=ar("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Tr(this.auth,{idToken:e}).catch(()=>{});return n?ft._fromGetAccountInfoResponse(this.auth,n,e):null}return ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new vs(jt(xu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||jt(xu);const o=ar(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let h;if(typeof u=="string"){const d=await Tr(e,{idToken:u}).catch(()=>{});if(!d)break;h=await ft._fromGetAccountInfoResponse(e,d,u)}else h=ft._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new vs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new vs(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Df(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bf(e))return"Blackberry";if(Hf(e))return"Webos";if(Mf(e))return"Safari";if((e.includes("chrome/")||Lf(e))&&!e.includes("edge/"))return"Chrome";if(Ff(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Df(t=$e()){return/firefox\//i.test(t)}function Mf(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lf(t=$e()){return/crios\//i.test(t)}function Uf(t=$e()){return/iemobile/i.test(t)}function Ff(t=$e()){return/android/i.test(t)}function Bf(t=$e()){return/blackberry/i.test(t)}function Hf(t=$e()){return/webos/i.test(t)}function Nl(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Db(t=$e()){return Nl(t)&&!!window.navigator?.standalone}function Mb(){return qv()&&document.documentMode===10}function Vf(t=$e()){return Nl(t)||Ff(t)||Hf(t)||Bf(t)||/windows phone/i.test(t)||Uf(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t,e=[]){let n;switch(t){case"Browser":n=Du($e());break;case"Worker":n=`${Du($e())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ub(t,e={}){return Zn(t,"GET","/v2/passwordPolicy",Rl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=6;class Bb{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Fb,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mu(this),this.idTokenSubscription=new Mu(this),this.beforeStateQueue=new Lb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Af,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Tr(this,{idToken:e}),s=await ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(at(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=this.redirectUser?._redirectEventId,o=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!r||r===o)&&a?.user&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(r){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sr(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Eb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(at(this.app))return Promise.reject(Vn(this));const n=e?we(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return at(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return at(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ub(this),n=new Bb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await xb(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&gb(`Error while retrieving App Check token: ${e.error}`),e?.token}}function lo(t){return we(t)}class Mu{constructor(e){this.auth=e,this.observer=null,this.addObserver=nE(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vb(t){Pl=t}function Wb(t){return Pl.loadJS(t)}function jb(){return Pl.gapiScript}function $b(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(t,e){const n=oo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if($n(r,e??{}))return i;Ot(i,"already-initialized")}return n.initialize({options:e})}function qb(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(jt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function zb(t,e,n){const s=lo(t);H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=jf(e),{host:o,port:a}=Kb(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){H(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),H($n(c,s.config.emulator)&&$n(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,Rn(o)?(vl(`${r}//${o}${l}`),El("Auth",!0)):Yb()}function jf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kb(t){const e=jf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Lu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Lu(o)}}}function Lu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Yb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e){return Cb(t,"POST","/v1/accounts:signInWithIdp",Rl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="http://localhost";class qn extends $f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=n;if(!s||!i)return null;const o=new qn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Es(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:Qb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ls(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends kl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Ui{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Vt.credential(n,s)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Ui{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.GITHUB_SIGN_IN_METHOD="github.com";un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Ui{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ft._fromIdTokenResponse(e,s,i),o=Uu(s);return new Rs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Uu(s);return new Rs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Uu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Zt{constructor(e,n,s,i){super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Rr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Rr(e,n,s,i)}}function Gf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Rr._fromErrorAndOperation(t,r,e,s):r})}async function Jb(t,e,n=!1){const s=await Ss(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xb(t,e,n=!1){const{auth:s}=t;if(at(s.app))return Promise.reject(Vn(s));const i="reauthenticate";try{const r=await Ss(t,Gf(s,i,e,t),n);H(r.idToken,s,"internal-error");const o=Al(r.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),Rs._forOperation(t,i,r)}catch(r){throw r?.code==="auth/user-not-found"&&Ot(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(t,e,n=!1){if(at(t.app))return Promise.reject(Vn(t));const s="signIn",i=await Gf(t,s,e),r=await Rs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(t,e){return Zn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=we(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ss(s,ew(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function nw(t,e,n,s){return we(t).onIdTokenChanged(e,n,s)}function sw(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function iw(t,e,n,s){return we(t).onAuthStateChanged(e,n,s)}function rw(t){return we(t).signOut()}const Ar="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ar,"1"),this.storage.removeItem(Ar),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=1e3,aw=10;class zf extends qf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Mb()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aw):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ow)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zf.type="LOCAL";const lw=zf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf extends qf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kf.type="SESSION";const Yf=Kf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new co(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await cw(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}co.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Ol("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function hw(t){Pt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function dw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fw(){return navigator?.serviceWorker?.controller||null}function pw(){return Qf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="firebaseLocalStorageDb",_w=1,Nr="firebaseLocalStorage",Xf="fbase_key";class Fi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uo(t,e){return t.transaction([Nr],e?"readwrite":"readonly").objectStore(Nr)}function gw(){const t=indexedDB.deleteDatabase(Jf);return new Fi(t).toPromise()}function xa(){const t=indexedDB.open(Jf,_w);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Nr,{keyPath:Xf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Nr)?e(s):(s.close(),await gw(),e(await xa()))})})}async function Fu(t,e,n){const s=uo(t,!0).put({[Xf]:e,value:n});return new Fi(s).toPromise()}async function mw(t,e){const n=uo(t,!1).get(e),s=await new Fi(n).toPromise();return s===void 0?null:s.value}function Bu(t,e){const n=uo(t,!0).delete(e);return new Fi(n).toPromise()}const yw=800,vw=3;class Zf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>vw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=co._getInstance(pw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await dw(),!this.activeServiceWorker)return;this.sender=new uw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xa();return await Fu(e,Ar,"1"),await Bu(e,Ar),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Fu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>mw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=uo(i,!1).getAll();return new Fi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zf.type="LOCAL";const Ew=Zf;new Li(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t,e){return e?jt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends $f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bw(t){return Zb(t.auth,new xl(t),t.bypassAuthState)}function ww(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Xb(n,new xl(t),t.bypassAuthState)}async function Iw(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Jb(n,new xl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bw;case"linkViaPopup":case"linkViaRedirect":return Iw;case"reauthViaPopup":case"reauthViaRedirect":return ww;default:Ot(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=new Li(2e3,1e4);async function Tw(t,e,n){if(at(t.app))return Promise.reject(gt(t,"operation-not-supported-in-this-environment"));const s=lo(t);mb(t,e,kl);const i=ep(s,n);return new Un(s,"signInViaPopup",e,i).executeNotNull()}class Un extends tp{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=Ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cw.get())};e()}}Un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="pendingRedirect",lr=new Map;class Rw extends tp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=lr.get(this.auth._key());if(!e){try{const s=await Aw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}lr.set(this.auth._key(),e)}return this.bypassAuthState||lr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Aw(t,e){const n=kw(e),s=Pw(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Nw(t,e){lr.set(t._key(),e)}function Pw(t){return jt(t._redirectPersistence)}function kw(t){return ar(Sw,t.config.apiKey,t.name)}async function Ow(t,e,n=!1){if(at(t.app))return Promise.reject(Vn(t));const s=lo(t),i=ep(s,e),o=await new Rw(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=600*1e3;class Dw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!np(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hu(e))}saveEventToCache(e){this.cachedEventUids.add(Hu(e)),this.lastProcessedEventTime=Date.now()}}function Hu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function np({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Mw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return np(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fw=/^https?/;async function Bw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Lw(t);for(const n of e)try{if(Hw(n))return}catch{}Ot(t,"unauthorized-domain")}function Hw(t){const e=ka(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Fw.test(n))return!1;if(Uw.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=new Li(3e4,6e4);function Vu(){const t=Pt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ww(t){return new Promise((e,n)=>{function s(){Vu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vu(),n(gt(t,"network-request-failed"))},timeout:Vw.get()})}if(Pt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Pt().gapi?.load)s();else{const i=$b("iframefcb");return Pt()[i]=()=>{gapi.load?s():n(gt(t,"network-request-failed"))},Wb(`${jb()}?onload=${i}`).catch(r=>n(r))}}).catch(e=>{throw cr=null,e})}let cr=null;function jw(t){return cr=cr||Ww(t),cr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new Li(5e3,15e3),Gw="__/auth/iframe",qw="emulator/auth/iframe",zw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yw(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sl(e,qw):`https://${t.config.authDomain}/${Gw}`,s={apiKey:e.apiKey,appName:t.name,v:Xn},i=Kw.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ls(s).slice(1)}`}async function Qw(t){const e=await jw(t),n=Pt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:Yw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),a=Pt().setTimeout(()=>{r(o)},$w.get());function l(){Pt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xw=500,Zw=600,eI="_blank",tI="http://localhost";class Wu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nI(t,e,n,s=Xw,i=Zw){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l={...Jw,width:s.toString(),height:i.toString(),top:r,left:o},c=$e().toLowerCase();n&&(a=Lf(c)?eI:n),Df(c)&&(e=e||tI,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(Db(c)&&a!=="_self")return sI(e||"",a),new Wu(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Wu(h)}function sI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="__/auth/handler",rI="emulator/auth/handler",oI=encodeURIComponent("fac");async function ju(t,e,n,s,i,r){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Xn,eventId:i};if(e instanceof kl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ta(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Ui){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${oI}=${encodeURIComponent(l)}`:"";return`${aI(t)}?${Ls(a).slice(1)}${c}`}function aI({config:t}){return t.emulator?Sl(t,rI):`https://${t.authDomain}/${iI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="webStorageSupport";class lI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yf,this._completeRedirectFn=Ow,this._overrideRedirectResult=Nw}async _openPopup(e,n,s,i){Qt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const r=await ju(e,n,s,ka(),i);return nI(e,r,Ol())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await ju(e,n,s,ka(),i);return hw(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Qw(e),s=new Dw(e);return n.register("authEvent",i=>(H(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yo,{type:Yo},i=>{const r=i?.[0]?.[Yo];r!==void 0&&n(!!r),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vf()||Mf()||Nl()}}const cI=lI;var $u="@firebase/auth",Gu="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dI(t){Gn(new wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wf(t)},c=new Hb(s,i,r,l);return qb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Gn(new wn("auth-internal",e=>{const n=lo(e.getProvider("auth").getImmediate());return(s=>new uI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt($u,Gu,hI(t)),Nt($u,Gu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=300,pI=yf("authIdTokenMaxAge")||fI;let qu=null;const _I=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>pI)return;const i=n?.token;qu!==i&&(qu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gI(t=ao()){const e=oo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gb(t,{popupRedirectResolver:cI,persistence:[Ew,lw,Yf]}),s=yf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=_I(r.toString());sw(n,o,()=>o(n.currentUser)),nw(n,a=>o(a))}}const i=_f("auth");return i&&zb(n,`http://${i}`),n}function mI(){return document.getElementsByTagName("head")?.[0]??document}Vb({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=gt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",mI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dI("Browser");var zu={};const Ku="@firebase/database",Yu="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sp="";function yI(t){sp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Re(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:bi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vI(e)}}catch{}return new EI},Fn=ip("localStorage"),bI=ip("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new wl("@firebase/database"),rp=(function(){let t=1;return function(){return t++}})(),op=function(t){const e=rE(t),n=new tE;n.update(e);const s=n.digest();return ml.encodeByteArray(s)},Bi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Bi.apply(null,s):typeof s=="object"?e+=Re(s):e+=s,e+=" "}return e};let ci=null,Qu=!0;const wI=function(t,e){C(!0,"Can't turn on custom loggers persistently."),bs.logLevel=oe.VERBOSE,ci=bs.log.bind(bs)},ke=function(...t){if(Qu===!0&&(Qu=!1,ci===null&&bI.get("logging_enabled")===!0&&wI()),ci){const e=Bi.apply(null,t);ci(e)}},Hi=function(t){return function(...e){ke(t,...e)}},Da=function(...t){const e="FIREBASE INTERNAL ERROR: "+Bi(...t);bs.error(e)},Jt=function(...t){const e=`FIREBASE FATAL ERROR: ${Bi(...t)}`;throw bs.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+Bi(...t);bs.warn(e)},II=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},CI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},As="[MIN_NAME]",zn="[MAX_NAME]",es=function(t,e){if(t===e)return 0;if(t===As||e===zn)return-1;if(e===As||t===zn)return 1;{const n=Ju(t),s=Ju(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},TI=function(t,e){return t===e?0:t<e?-1:1},Gs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Re(e))},Ml=function(t){if(typeof t!="object"||t===null)return Re(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Re(e[s]),n+=":",n+=Ml(t[e[s]]);return n+="}",n},ap=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Oe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const lp=function(t){C(!Dl(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},SI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function AI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const NI=new RegExp("^-?(0*)\\d{1,10}$"),PI=-2147483648,kI=2147483647,Ju=function(t){if(NI.test(t)){const e=Number(t);if(e>=PI&&e<=kI)return e}return null},Us=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},OI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ui=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,at(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class ur{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ur.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="5",cp="v",up="s",hp="r",dp="f",fp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pp="ls",_p="p",Ma="ac",gp="websocket",mp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function MI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function vp(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===gp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);MI(t)&&(n.ns=t.namespace);const i=[];return Oe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.counters_={}}incrementCounter(e,n=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Lv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo={},Jo={};function Ul(t){const e=t.toString();return Qo[e]||(Qo[e]=new LI),Qo[e]}function UI(t,e){const n=t.toString();return Jo[n]||(Jo[n]=e()),Jo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Us(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="start",BI="close",HI="pLPCommand",VI="pRTLPCB",Ep="id",bp="pw",wp="ser",WI="cb",jI="seg",$I="ts",GI="d",qI="dframe",Ip=1870,Cp=30,zI=Ip-Cp,KI=25e3,YI=3e4;class fs{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Hi(e),this.stats_=Ul(n),this.urlFn=l=>(this.appCheckToken&&(l[Ma]=this.appCheckToken),vp(n,mp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new FI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(YI)),CI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xu)this.id=a,this.password=l;else if(o===BI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Xu]="t",s[wp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[WI]=this.scriptTagHolder.uniqueCallbackIdentifier),s[cp]=Ll,this.transportSessionId&&(s[up]=this.transportSessionId),this.lastSessionId&&(s[pp]=this.lastSessionId),this.applicationId&&(s[_p]=this.applicationId),this.appCheckToken&&(s[Ma]=this.appCheckToken),typeof location<"u"&&location.hostname&&fp.test(location.hostname)&&(s[hp]=dp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fs.forceAllow_=!0}static forceDisallow(){fs.forceDisallow_=!0}static isAvailable(){return fs.forceAllow_?!0:!fs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!SI()&&!RI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ff(n),i=ap(s,zI);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[qI]="t",s[Ep]=e,s[bp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Re(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rp(),window[HI+this.uniqueCallbackIdentifier]=e,window[VI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ke("frame writing exception"),a.stack&&ke(a.stack),ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ep]=this.myID,e[bp]=this.myPW,e[wp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cp+s.length<=Ip;){const o=this.pendingSegs.shift();s=s+"&"+jI+i+"="+o.seg+"&"+$I+i+"="+o.ts+"&"+GI+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(KI)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=16384,JI=45e3;let Pr=null;typeof MozWebSocket<"u"?Pr=MozWebSocket:typeof WebSocket<"u"&&(Pr=WebSocket);class dt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Hi(this.connId),this.stats_=Ul(n),this.connURL=dt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[cp]=Ll,typeof location<"u"&&location.hostname&&fp.test(location.hostname)&&(o[hp]=dp),n&&(o[up]=n),s&&(o[pp]=s),i&&(o[Ma]=i),r&&(o[_p]=r),vp(e,gp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fn.set("previous_websocket_failure",!0);try{let s;zv(),this.mySock=new Pr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Pr!==null&&!dt.forceDisallow_}static previouslyFailed(){return Fn.isInMemoryStorage||Fn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=bi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ap(n,QI);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(JI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{static get ALL_TRANSPORTS(){return[fs,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=dt&&dt.isAvailable();let s=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[dt];else{const i=this.transports_=[];for(const r of Ci.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ci.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ci.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=6e4,ZI=5e3,eC=10*1024,tC=100*1024,Xo="t",Zu="d",nC="s",eh="r",sC="e",th="o",nh="a",sh="n",ih="p",iC="h";class rC{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Hi("c:"+this.id+":"),this.transportManager_=new Ci(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ui(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>eC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xo in e){const n=e[Xo];n===nh?this.upgradeIfSecondaryHealthy_():n===eh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===th&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Gs("t",e),s=Gs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ih,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:nh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:sh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Gs("t",e),s=Gs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Gs(Xo,e);if(Zu in e){const s=e[Zu];if(n===iC){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===sh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===nC?this.onConnectionShutdown_(s):n===eh?this.onReset_(s):n===sC?Da("Server Error: "+s):n===th?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Da("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ll!==s&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ui(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(XI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ui(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ZI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ih,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Sp{static getInstance(){return new kr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=32,oh=768;class ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new ae("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function In(t){return t.pieces_.length-t.pieceNum_}function de(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ae(t.pieces_,e)}function Bl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function oC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ti(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Rp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ae(e,0)}function be(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ae)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ae(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function We(t,e){const n=K(t),s=K(e);if(n===null)return e;if(n===s)return We(de(t),de(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function aC(t,e){const n=Ti(t,0),s=Ti(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=es(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Hl(t,e){if(In(t)!==In(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function lt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(In(t)>In(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class lC{constructor(e,n){this.errorPrefix_=n,this.parts_=Ti(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ro(this.parts_[s]);Ap(this)}}function cC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ro(e),Ap(t)}function uC(t){const e=t.parts_.pop();t.byteLength_-=ro(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ap(t){if(t.byteLength_>oh)throw new Error(t.errorPrefix_+"has a key path longer than "+oh+" bytes ("+t.byteLength_+").");if(t.parts_.length>rh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rh+") or object contains a cycle "+Dn(t))}function Dn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends Sp{static getInstance(){return new Vl}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=1e3,hC=300*1e3,ah=30*1e3,dC=1.3,fC=3e4,pC="server_kill",lh=3;class Gt extends Tp{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Gt.nextPersistentConnectionId_++,this.log_=Hi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qs,this.maxReconnectDelay_=hC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&kr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Re(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ms,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Gt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vt(e,"w")){const s=jn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||eE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ah)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Zv(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Re(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Da("Unrecognized action received from server: "+Re(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>fC&&(this.reconnectDelay_=qs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Gt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new rC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{je(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(pC)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&je(h),l())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ta(this.interruptReasons_)&&(this.reconnectDelay_=qs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ml(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ae(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lh&&(this.reconnectDelay_=ah,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+sp.replace(/\./g,"-")]=1,bl()?e["framework.cordova"]=1:Ef()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=kr.getInstance().currentlyOnline();return Ta(this.interruptReasons_)&&e}}Gt.nextPersistentConnectionId_=0;Gt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Y(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Y(As,e),i=new Y(As,n);return this.compare(s,i)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi;class Np extends ho{static get __EMPTY_NODE(){return Xi}static set __EMPTY_NODE(e){Xi=e}compare(e,n){return es(e.name,n.name)}isDefinedOn(e){throw Ds("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(zn,Xi)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,Xi)}toString(){return".key"}}const ws=new Np;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ne{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ne.RED,this.left=i??Je.EMPTY_NODE,this.right=r??Je.EMPTY_NODE}copy(e,n,s,i,r){return new Ne(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ne.RED=!0;Ne.BLACK=!1;class _C{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ne(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ne.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ne.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zi(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new _C;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t,e){return es(t.name,e.name)}function Wl(t,e){return es(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La;function mC(t){La=t}const Pp=function(t){return typeof t=="number"?"number:"+lp(t):"string:"+t},kp=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else C(t===La||t.isEmpty(),"priority of unexpected type.");C(t===La||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch;class Ae{static set __childrenNodeConstructor(e){ch=e}static get __childrenNodeConstructor(){return ch}constructor(e,n=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kp(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:K(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=K(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||In(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=lp(this.value_):e+=this.value_,this.lazyHash_=op(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ae.VALUE_TYPE_ORDER.indexOf(n),r=Ae.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Op,xp;function yC(t){Op=t}function vC(t){xp=t}class EC extends ho{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?es(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(zn,new Ae("[PRIORITY-POST]",xp))}makePost(e,n){const s=Op(e);return new Y(n,new Ae("[PRIORITY-POST]",s))}toString(){return".priority"}}const ye=new EC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=Math.log(2);class wC{constructor(e){const n=r=>parseInt(Math.log(r)/bC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Or=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ne(d,h.node,Ne.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=i(l,f),y=i(f+1,c);return h=t[f],d=n?n(h):h,new Ne(d,h.node,Ne.BLACK,g,y)}},r=function(l){let c=null,u=null,h=t.length;const d=function(g,y){const T=h-g,N=h;h-=g;const S=i(T+1,N),P=t[T],R=n?n(P):P;f(new Ne(R,P.node,y,null,S))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),T=Math.pow(2,l.count-(g+1));y?d(T,Ne.BLACK):(d(T,Ne.BLACK),d(T,Ne.RED))}return u},o=new wC(t.length),a=r(o);return new Je(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;const ls={};class $t{static get Default(){return C(ls&&ye,"ChildrenNode.ts has not been loaded"),Zo=Zo||new $t({".priority":ls},{".priority":ye}),Zo}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=jn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Or(s,e.getCompare()):a=ls;const l=e.toString(),c={...this.indexSet_};c[l]=e;const u={...this.indexes_};return u[l]=a,new $t(u,c)}addToIndexes(e,n){const s=Ir(this.indexes_,(i,r)=>{const o=jn(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===ls)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Or(a,o.getCompare())}else return ls;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new $t(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ir(this.indexes_,i=>{if(i===ls)return i;{const r=n.get(e.name);return r?i.remove(new Y(e.name,r)):i}});return new $t(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs;class B{static get EMPTY_NODE(){return zs||(zs=new B(new Je(Wl),null,$t.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&kp(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zs}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?zs:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(de(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Y(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?zs:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=K(e);if(s===null)return n;{C(K(e)!==".priority"||In(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(de(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ye,(o,a)=>{n[o]=a.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pp(this.getPriority().val())+":"),this.forEachChild(ye,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":op(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Y(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vi?-1:0}withIndex(e){if(e===ws||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ws||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ye),i=n.getIterator(ye);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ws?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class IC extends B{constructor(){super(new Je(Wl),B.EMPTY_NODE,$t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Vi=new IC;Object.defineProperties(Y,{MIN:{value:new Y(As,B.EMPTY_NODE)},MAX:{value:new Y(zn,Vi)}});Np.__EMPTY_NODE=B.EMPTY_NODE;Ae.__childrenNodeConstructor=B;mC(Vi);vC(Vi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=!0;function Ce(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ae(n,Ce(e))}if(!(t instanceof Array)&&CC){const n=[];let s=!1;if(Oe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ce(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return B.EMPTY_NODE;const r=Or(n,gC,o=>o.name,Wl);if(s){const o=Or(n,ye.getCompare());return new B(r,Ce(e),new $t({".priority":o},{".priority":ye}))}else return new B(r,Ce(e),$t.Default)}else{let n=B.EMPTY_NODE;return Oe(t,(s,i)=>{if(vt(t,s)&&s.substring(0,1)!=="."){const r=Ce(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ce(e))}}yC(Ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC extends ho{constructor(e){super(),this.indexPath_=e,C(!Q(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?es(e.name,n.name):r}makePost(e,n){const s=Ce(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Vi);return new Y(zn,e)}toString(){return Ti(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC extends ho{compare(e,n){const s=e.node.compareTo(n.node);return s===0?es(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const s=Ce(e);return new Y(n,s)}toString(){return".value"}}const RC=new SC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t){return{type:"value",snapshotNode:t}}function Ns(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Si(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ri(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function AC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Si(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ns(n,s)):o.trackChildChange(Ri(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ye,(i,r)=>{n.hasChild(i)||s.trackChildChange(Si(i,r))}),n.isLeafNode()||n.forEachChild(ye,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ri(i,r,o))}else s.trackChildChange(Ns(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.indexedFilter_=new jl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ai.getStartPost_(e),this.endPost_=Ai.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Y(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(ye,(o,a)=>{r.matches(new Y(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ai(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Y(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new Y(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!s.isEmpty()&&f>=0)return r?.trackChildChange(Ri(n,s,h)),a.updateImmediateChild(n,s);{r?.trackChildChange(Si(n,h));const y=a.updateImmediateChild(n,B.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r?.trackChildChange(Ns(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Si(c.name,c.node)),r.trackChildChange(Ns(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:As}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ye}copy(){const e=new $l;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function PC(t){return t.loadsAllData()?new jl(t.getIndex()):t.hasLimit()?new NC(t):new Ai(t)}function uh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ye?n="$priority":t.index_===RC?n="$value":t.index_===ws?n="$key":(C(t.index_ instanceof TC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Re(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Re(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Re(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Re(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Re(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function hh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ye&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Tp{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Hi("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=xr.getListenId_(e,s),a={};this.listens_[o]=a;const l=uh(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),jn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=xr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=uh(e._queryParams),s=e._path.toString(),i=new Ms;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ls(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=bi(a.responseText)}catch{je("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(){return{value:null,children:new Map}}function Mp(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=K(e);t.children.has(s)||t.children.set(s,Dr());const i=t.children.get(s);e=de(e),Mp(i,e,n)}}function Ua(t,e,n){t.value!==null?n(e,t.value):OC(t,(s,i)=>{const r=new ae(e.toString()+"/"+s);Ua(i,r,n)})}function OC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Oe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=10*1e3,DC=30*1e3,MC=300*1e3;class LC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new xC(e);const s=dh+(DC-dh)*Math.random();ui(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Oe(e,(i,r)=>{r>0&&vt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ui(this.reportStats_.bind(this),Math.floor(Math.random()*2*MC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pt||(pt={}));function Gl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ql(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=pt.ACK_USER_WRITE,this.source=Gl()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ae(e));return new Mr(te(),n,this.revert)}}else return C(K(this.path)===e,"operationForChild called for unrelated child."),new Mr(de(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.source=e,this.path=n,this.type=pt.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new Ni(this.source,te()):new Ni(this.source,de(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=pt.OVERWRITE}operationForChild(e){return Q(this.path)?new Kn(this.source,te(),this.snap.getImmediateChild(e)):new Kn(this.source,de(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=pt.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new ae(e));return n.isEmpty()?null:n.value?new Kn(this.source,te(),n.value):new Ps(this.source,te(),n)}else return C(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ps(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function FC(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(AC(o.childName,o.snapshotNode))}),Ks(t,i,"child_removed",e,s,n),Ks(t,i,"child_added",e,s,n),Ks(t,i,"child_moved",r,s,n),Ks(t,i,"child_changed",e,s,n),Ks(t,i,"value",e,s,n),i}function Ks(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>HC(t,a,l)),o.forEach(a=>{const l=BC(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function BC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function HC(t,e,n){if(e.childName==null||n.childName==null)throw Ds("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t,e){return{eventCache:t,serverCache:e}}function hi(t,e,n,s){return fo(new Cn(e,n,s),t.serverCache)}function Lp(t,e,n,s){return fo(t.eventCache,new Cn(e,n,s))}function Lr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Yn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;const VC=()=>(ea||(ea=new Je(TI)),ea);class he{static fromObject(e){let n=new he(null);return Oe(e,(s,i)=>{n=n.set(new ae(s),i)}),n}constructor(e,n=VC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(Q(e))return null;{const s=K(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(de(e),n);return r!=null?{path:be(new ae(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=K(e),s=this.children.get(n);return s!==null?s.subtree(de(e)):new he(null)}}set(e,n){if(Q(e))return new he(n,this.children);{const s=K(e),r=(this.children.get(s)||new he(null)).set(de(e),n),o=this.children.insert(s,r);return new he(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=K(e),s=this.children.get(n);if(s){const i=s.remove(de(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new he(null):new he(this.value,r)}else return this}}get(e){if(Q(e))return this.value;{const n=K(e),s=this.children.get(n);return s?s.get(de(e)):null}}setTree(e,n){if(Q(e))return n;{const s=K(e),r=(this.children.get(s)||new he(null)).setTree(de(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new he(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(be(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Q(e))return null;{const r=K(e),o=this.children.get(r);return o?o.findOnPath_(de(e),be(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,s){if(Q(e))return this;{this.value&&s(n,this.value);const i=K(e),r=this.children.get(i);return r?r.foreachOnPath_(de(e),be(n,i),s):new he(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(be(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.writeTree_=e}static empty(){return new mt(new he(null))}}function di(t,e,n){if(Q(e))return new mt(new he(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=We(i,e);return r=r.updateChild(o,n),new mt(t.writeTree_.set(i,r))}else{const i=new he(n),r=t.writeTree_.setTree(e,i);return new mt(r)}}}function Fa(t,e,n){let s=t;return Oe(n,(i,r)=>{s=di(s,be(e,i),r)}),s}function fh(t,e){if(Q(e))return mt.empty();{const n=t.writeTree_.setTree(e,new he(null));return new mt(n)}}function Ba(t,e){return ts(t,e)!=null}function ts(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(We(n.path,e)):null}function ph(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ye,(s,i)=>{e.push(new Y(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Y(s,i.value))}),e}function yn(t,e){if(Q(e))return t;{const n=ts(t,e);return n!=null?new mt(new he(n)):new mt(t.writeTree_.subtree(e))}}function Ha(t){return t.writeTree_.isEmpty()}function ks(t,e){return Up(te(),t.writeTree_,e)}function Up(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Up(be(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(be(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t,e){return Vp(e,t)}function WC(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=di(t.visibleWrites,e,n)),t.lastWriteId=s}function jC(t,e,n,s){C(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Fa(t.visibleWrites,e,n),t.lastWriteId=s}function $C(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function GC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&qC(a,s.path)?i=!1:lt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return zC(t),!0;if(s.snap)t.visibleWrites=fh(t.visibleWrites,s.path);else{const a=s.children;Oe(a,l=>{t.visibleWrites=fh(t.visibleWrites,be(s.path,l))})}return!0}else return!1}function qC(t,e){if(t.snap)return lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&lt(be(t.path,n),e))return!0;return!1}function zC(t){t.visibleWrites=Fp(t.allWrites,KC,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function KC(t){return t.visible}function Fp(t,e,n){let s=mt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)lt(n,o)?(a=We(n,o),s=di(s,a,r.snap)):lt(o,n)&&(a=We(o,n),s=di(s,te(),r.snap.getChild(a)));else if(r.children){if(lt(n,o))a=We(n,o),s=Fa(s,a,r.children);else if(lt(o,n))if(a=We(o,n),Q(a))s=Fa(s,te(),r.children);else{const l=jn(r.children,K(a));if(l){const c=l.getChild(de(a));s=di(s,te(),c)}}}else throw Ds("WriteRecord should have .snap or .children")}}return s}function Bp(t,e,n,s,i){if(!s&&!i){const r=ts(t.visibleWrites,e);if(r!=null)return r;{const o=yn(t.visibleWrites,e);if(Ha(o))return n;if(n==null&&!Ba(o,te()))return null;{const a=n||B.EMPTY_NODE;return ks(o,a)}}}else{const r=yn(t.visibleWrites,e);if(!i&&Ha(r))return n;if(!i&&n==null&&!Ba(r,te()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(lt(c.path,e)||lt(e,c.path))},a=Fp(t.allWrites,o,e),l=n||B.EMPTY_NODE;return ks(a,l)}}}function YC(t,e,n){let s=B.EMPTY_NODE;const i=ts(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ye,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=yn(t.visibleWrites,e);return n.forEachChild(ye,(o,a)=>{const l=ks(yn(r,new ae(o)),a);s=s.updateImmediateChild(o,l)}),ph(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=yn(t.visibleWrites,e);return ph(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function QC(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=be(e,n);if(Ba(t.visibleWrites,r))return null;{const o=yn(t.visibleWrites,r);return Ha(o)?i.getChild(n):ks(o,i.getChild(n))}}function JC(t,e,n,s){const i=be(e,n),r=ts(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=yn(t.visibleWrites,i);return ks(o,s.getNode().getImmediateChild(n))}else return null}function XC(t,e){return ts(t.visibleWrites,e)}function ZC(t,e,n,s,i,r,o){let a;const l=yn(t.visibleWrites,e),c=ts(l,te());if(c!=null)a=c;else if(n!=null)a=ks(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function eT(){return{visibleWrites:mt.empty(),allWrites:[],lastWriteId:-1}}function Ur(t,e,n,s){return Bp(t.writeTree,t.treePath,e,n,s)}function Kl(t,e){return YC(t.writeTree,t.treePath,e)}function _h(t,e,n,s){return QC(t.writeTree,t.treePath,e,n,s)}function Fr(t,e){return XC(t.writeTree,be(t.treePath,e))}function tT(t,e,n,s,i,r){return ZC(t.writeTree,t.treePath,e,n,s,i,r)}function Yl(t,e,n){return JC(t.writeTree,t.treePath,e,n)}function Hp(t,e){return Vp(be(t.treePath,e),t.writeTree)}function Vp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ri(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Si(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ns(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ri(s,e.snapshotNode,i.oldSnap));else throw Ds("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Wp=new sT;class Ql{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Cn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Yn(this.viewCache_),r=tT(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t){return{filter:t}}function rT(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function oT(t,e,n,s,i){const r=new nT;let o,a;if(n.type===pt.OVERWRITE){const c=n;c.source.fromUser?o=Va(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Q(c.path),o=Br(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===pt.MERGE){const c=n;c.source.fromUser?o=lT(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Wa(t,e,c.path,c.children,s,i,a,r))}else if(n.type===pt.ACK_USER_WRITE){const c=n;c.revert?o=hT(t,e,c.path,s,i,r):o=cT(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===pt.LISTEN_COMPLETE)o=uT(t,e,n.path,s,r);else throw Ds("Unknown operation type: "+n.type);const l=r.getChanges();return aT(e,o,l),{viewCache:o,changes:l}}function aT(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Lr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Dp(Lr(e)))}}function jp(t,e,n,s,i,r){const o=e.eventCache;if(Fr(s,n)!=null)return e;{let a,l;if(Q(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Yn(e),u=c instanceof B?c:B.EMPTY_NODE,h=Kl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ur(s,Yn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=K(n);if(c===".priority"){C(In(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=_h(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=de(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=_h(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Yl(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return hi(e,a,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function Br(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Q(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=K(n);if(!l.isCompleteForPath(n)&&In(n)>1)return e;const g=de(n),T=l.getNode().getImmediateChild(f).updateChild(g,s);f===".priority"?c=u.updatePriority(l.getNode(),T):c=u.updateChild(l.getNode(),f,T,g,Wp,null)}const h=Lp(e,c,l.isFullyInitialized()||Q(n),u.filtersNodes()),d=new Ql(i,h,r);return jp(t,h,n,i,d,a)}function Va(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ql(i,e,r);if(Q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=hi(e,c,!0,t.filter.filtersNodes());else{const h=K(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=hi(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=de(n),f=a.getNode().getImmediateChild(h);let g;if(Q(d))g=s;else{const y=u.getCompleteChild(h);y!=null?Bl(d)===".priority"&&y.getChild(Rp(d)).isEmpty()?g=y:g=y.updateChild(d,s):g=B.EMPTY_NODE}if(f.equals(g))l=e;else{const y=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=hi(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function gh(t,e){return t.eventCache.isCompleteForChild(e)}function lT(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=be(n,l);gh(e,K(u))&&(a=Va(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=be(n,l);gh(e,K(u))||(a=Va(t,a,u,c,i,r,o))}),a}function mh(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Wa(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Q(n)?c=s:c=new he(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=mh(t,f,d);l=Br(t,l,new ae(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),y=mh(t,g,d);l=Br(t,l,new ae(h),y,i,r,o,a)}}),l}function cT(t,e,n,s,i,r,o){if(Fr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Br(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Q(n)){let c=new he(null);return l.getNode().forEachChild(ws,(u,h)=>{c=c.set(new ae(u),h)}),Wa(t,e,n,c,i,r,a,o)}else return e}else{let c=new he(null);return s.foreach((u,h)=>{const d=be(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Wa(t,e,n,c,i,r,a,o)}}function uT(t,e,n,s,i){const r=e.serverCache,o=Lp(e,r.getNode(),r.isFullyInitialized()||Q(n),r.isFiltered());return jp(t,o,n,s,Wp,i)}function hT(t,e,n,s,i,r){let o;if(Fr(s,n)!=null)return e;{const a=new Ql(s,e,i),l=e.eventCache.getNode();let c;if(Q(n)||K(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ur(s,Yn(e));else{const h=e.serverCache.getNode();C(h instanceof B,"serverChildren would be complete if leaf node"),u=Kl(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=K(n);let h=Yl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,de(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,B.EMPTY_NODE,de(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ur(s,Yn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Fr(s,te())!=null,hi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new jl(s.getIndex()),r=PC(s);this.processor_=iT(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,a.getNode(),null),u=new Cn(l,o.isFullyInitialized(),i.filtersNodes()),h=new Cn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=fo(h,u),this.eventGenerator_=new UC(this.query_)}get query(){return this.query_}}function fT(t){return t.viewCache_.serverCache.getNode()}function pT(t){return Lr(t.viewCache_)}function _T(t,e){const n=Yn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function yh(t){return t.eventRegistrations_.length===0}function gT(t,e){t.eventRegistrations_.push(e)}function vh(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Eh(t,e,n,s){e.type===pt.MERGE&&e.source.queryId!==null&&(C(Yn(t.viewCache_),"We should always have a full cache before handling merges"),C(Lr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=oT(t.processor_,i,e,n,s);return rT(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,$p(t,r.changes,r.viewCache.eventCache.getNode(),null)}function mT(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ye,(r,o)=>{s.push(Ns(r,o))}),n.isFullyInitialized()&&s.push(Dp(n.getNode())),$p(t,s,n.getNode(),e)}function $p(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return FC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr;class Gp{constructor(){this.views=new Map}}function yT(t){C(!Hr,"__referenceConstructor has already been defined"),Hr=t}function vT(){return C(Hr,"Reference.ts has not been loaded"),Hr}function ET(t){return t.views.size===0}function Jl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),Eh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Eh(o,e,n,s));return r}}function qp(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Ur(n,i?s:null),l=!1;a?l=!0:s instanceof B?(a=Kl(n,s),l=!1):(a=B.EMPTY_NODE,l=!1);const c=fo(new Cn(a,l,!1),new Cn(s,i,!1));return new dT(e,c)}return o}function bT(t,e,n,s,i,r){const o=qp(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),gT(o,n),mT(o,n)}function wT(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Tn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(vh(c,n,s)),yh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(vh(l,n,s)),yh(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Tn(t)&&r.push(new(vT())(e._repo,e._path)),{removed:r,events:o}}function zp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vn(t,e){let n=null;for(const s of t.views.values())n=n||_T(s,e);return n}function Kp(t,e){if(e._queryParams.loadsAllData())return _o(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Yp(t,e){return Kp(t,e)!=null}function Tn(t){return _o(t)!=null}function _o(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr;function IT(t){C(!Vr,"__referenceConstructor has already been defined"),Vr=t}function CT(){return C(Vr,"Reference.ts has not been loaded"),Vr}let TT=1;class bh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=eT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xl(t,e,n,s,i){return WC(t.pendingWriteTree_,e,n,s,i),i?Fs(t,new Kn(Gl(),e,n)):[]}function ST(t,e,n,s){jC(t.pendingWriteTree_,e,n,s);const i=he.fromObject(n);return Fs(t,new Ps(Gl(),e,i))}function fn(t,e,n=!1){const s=$C(t.pendingWriteTree_,e);if(GC(t.pendingWriteTree_,e)){let r=new he(null);return s.snap!=null?r=r.set(te(),!0):Oe(s.children,o=>{r=r.set(new ae(o),!0)}),Fs(t,new Mr(s.path,r,n))}else return[]}function Wi(t,e,n){return Fs(t,new Kn(ql(),e,n))}function RT(t,e,n){const s=he.fromObject(n);return Fs(t,new Ps(ql(),e,s))}function AT(t,e){return Fs(t,new Ni(ql(),e))}function NT(t,e,n){const s=Zl(t,n);if(s){const i=ec(s),r=i.path,o=i.queryId,a=We(r,e),l=new Ni(zl(o),a);return tc(t,r,l)}else return[]}function Wr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Yp(o,e))){const l=wT(o,e,n,s);ET(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,f)=>Tn(f));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=OT(d);for(let g=0;g<f.length;++g){const y=f[g],T=y.query,N=Zp(t,y);t.listenProvider_.startListening(fi(T),Pi(t,T),N.hashFn,N.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(fi(e),null):c.forEach(d=>{const f=t.queryToTagMap.get(mo(d));t.listenProvider_.stopListening(fi(d),f)}))}xT(t,c)}return a}function Qp(t,e,n,s){const i=Zl(t,s);if(i!=null){const r=ec(i),o=r.path,a=r.queryId,l=We(o,e),c=new Kn(zl(a),l,n);return tc(t,o,c)}else return[]}function PT(t,e,n,s){const i=Zl(t,s);if(i){const r=ec(i),o=r.path,a=r.queryId,l=We(o,e),c=he.fromObject(n),u=new Ps(zl(a),l,c);return tc(t,o,u)}else return[]}function ja(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const g=We(d,i);r=r||vn(f,g),o=o||Tn(f)});let a=t.syncPointTree_.get(i);a?(o=o||Tn(a),r=r||vn(a,te())):(a=new Gp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,g)=>{const y=vn(g,te());y&&(r=r.updateImmediateChild(f,y))}));const c=Yp(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=mo(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=DT();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const u=po(t.pendingWriteTree_,i);let h=bT(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Kp(a,e);h=h.concat(MT(t,e,d))}return h}function go(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=We(o,e),c=vn(a,l);if(c)return c});return Bp(i,e,r,n,!0)}function kT(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=We(c,n);s=s||vn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||vn(i,te()):(i=new Gp,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Cn(s,!0,!1):null,a=po(t.pendingWriteTree_,e._path),l=qp(i,e,a,r?o.getNode():B.EMPTY_NODE,r);return pT(l)}function Fs(t,e){return Jp(e,t.syncPointTree_,null,po(t.pendingWriteTree_,te()))}function Jp(t,e,n,s){if(Q(t.path))return Xp(t,e,n,s);{const i=e.get(te());n==null&&i!=null&&(n=vn(i,te()));let r=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Hp(s,o);r=r.concat(Jp(a,l,c,u))}return i&&(r=r.concat(Jl(i,t,s,n))),r}}function Xp(t,e,n,s){const i=e.get(te());n==null&&i!=null&&(n=vn(i,te()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Hp(s,o),u=t.operationForChild(o);u&&(r=r.concat(Xp(u,a,l,c)))}),i&&(r=r.concat(Jl(i,t,s,n))),r}function Zp(t,e){const n=e.query,s=Pi(t,n);return{hashFn:()=>(fT(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?NT(t,n._path,s):AT(t,n._path);{const r=AI(i,n);return Wr(t,n,null,r)}}}}function Pi(t,e){const n=mo(e);return t.queryToTagMap.get(n)}function mo(t){return t._path.toString()+"$"+t._queryIdentifier}function Zl(t,e){return t.tagToQueryMap.get(e)}function ec(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ae(t.substr(0,e))}}function tc(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=po(t.pendingWriteTree_,e);return Jl(s,n,i,null)}function OT(t){return t.fold((e,n,s)=>{if(n&&Tn(n))return[_o(n)];{let i=[];return n&&(i=zp(n)),Oe(s,(r,o)=>{i=i.concat(o)}),i}})}function fi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(CT())(t._repo,t._path):t}function xT(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=mo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function DT(){return TT++}function MT(t,e,n){const s=e._path,i=Pi(t,e),r=Zp(t,n),o=t.listenProvider_.startListening(fi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)C(!Tn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Q(c)&&u&&Tn(u))return[_o(u).query];{let d=[];return u&&(d=d.concat(zp(u).map(f=>f.query))),Oe(h,(f,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(fi(u),Pi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nc(n)}node(){return this.node_}}class sc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new sc(this.syncTree_,n)}node(){return go(this.syncTree_,this.path_)}}const LT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wh=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return UT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return FT(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},UT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},FT=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},e_=function(t,e,n,s){return rc(e,new sc(n,t),s)},ic=function(t,e,n){return rc(t,new nc(e),n)};function rc(t,e,n){const s=t.getPriority().val(),i=wh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=wh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ae(a,Ce(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ae(i))),o.forEachChild(ye,(a,l)=>{const c=rc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function yo(t,e){let n=e instanceof ae?e:new ae(e),s=t,i=K(n);for(;i!==null;){const r=jn(s.node.children,i)||{children:{},childCount:0};s=new oc(i,s,r),n=de(n),i=K(n)}return s}function ns(t){return t.node.value}function ac(t,e){t.node.value=e,$a(t)}function t_(t){return t.node.childCount>0}function BT(t){return ns(t)===void 0&&!t_(t)}function vo(t,e){Oe(t.node.children,(n,s)=>{e(new oc(n,t,s))})}function n_(t,e,n,s){n&&e(t),vo(t,i=>{n_(i,e,!0)})}function HT(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ji(t){return new ae(t.parent===null?t.name:ji(t.parent)+"/"+t.name)}function $a(t){t.parent!==null&&VT(t.parent,t.name,t)}function VT(t,e,n){const s=BT(n),i=vt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,$a(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,$a(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=/[\[\].#$\/\u0000-\u001F\u007F]/,jT=/[\[\].#$\u0000-\u001F\u007F]/,ta=10*1024*1024,lc=function(t){return typeof t=="string"&&t.length!==0&&!WT.test(t)},s_=function(t){return typeof t=="string"&&t.length!==0&&!jT.test(t)},$T=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),s_(t)},i_=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Dl(t)||t&&typeof t=="object"&&vt(t,".sv")},r_=function(t,e,n,s){s&&e===void 0||$i(io(t,"value"),e,n)},$i=function(t,e,n){const s=n instanceof ae?new lC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Dn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Dn(s)+" with contents = "+e.toString());if(Dl(e))throw new Error(t+"contains "+e.toString()+" "+Dn(s));if(typeof e=="string"&&e.length>ta/3&&ro(e)>ta)throw new Error(t+"contains a string greater than "+ta+" utf8 bytes "+Dn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Oe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!lc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Dn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cC(s,o),$i(t,a,s),uC(s)}),i&&r)throw new Error(t+' contains ".value" child '+Dn(s)+" in addition to actual children.")}},GT=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Ti(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!lc(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(aC);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&lt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},qT=function(t,e,n,s){const i=io(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Oe(e,(o,a)=>{const l=new ae(o);if($i(i,a,be(n,l)),Bl(l)===".priority"&&!i_(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),GT(i,r)},o_=function(t,e,n,s){if(!s_(n))throw new Error(io(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zT=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),o_(t,e,n)},Eo=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},KT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$T(n))throw new Error(io(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Hl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function a_(t,e,n){bo(t,n),l_(t,s=>Hl(s,e))}function it(t,e,n){bo(t,n),l_(t,s=>lt(s,e)||lt(e,s))}function l_(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(QT(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function QT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ci&&ke("event: "+n.toString()),Us(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="repo_interrupt",XT=25;class ZT{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new YT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Dr(),this.transactionQueueTree_=new oc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eS(t,e,n){if(t.stats_=Ul(t.repoInfo_),t.forceRestClient_||OI())t.server_=new xr(t.repoInfo_,(s,i,r,o)=>{Ih(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ch(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Re(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Gt(t.repoInfo_,e,(s,i,r,o)=>{Ih(t,s,i,r,o)},s=>{Ch(t,s)},s=>{tS(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=UI(t.repoInfo_,()=>new LC(t.stats_,t.server_)),t.infoData_=new kC,t.infoSyncTree_=new bh({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Wi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),cc(t,"connected",!1),t.serverSyncTree_=new bh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);it(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function c_(t){const n=t.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gi(t){return LT({timestamp:c_(t)})}function Ih(t,e,n,s,i){t.dataUpdateCount++;const r=new ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Ir(n,c=>Ce(c));o=PT(t.serverSyncTree_,r,l,i)}else{const l=Ce(n);o=Qp(t.serverSyncTree_,r,l,i)}else if(s){const l=Ir(n,c=>Ce(c));o=RT(t.serverSyncTree_,r,l)}else{const l=Ce(n);o=Wi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Os(t,r)),it(t.eventQueue_,a,o)}function Ch(t,e){cc(t,"connected",e),e===!1&&rS(t)}function tS(t,e){Oe(e,(n,s)=>{cc(t,n,s)})}function cc(t,e,n){const s=new ae("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(s,i);const r=Wi(t.infoSyncTree_,s,i);it(t.eventQueue_,s,r)}function wo(t){return t.nextWriteId_++}function nS(t,e,n){const s=kT(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ce(i).withIndex(e._queryParams.getIndex());ja(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Wi(t.serverSyncTree_,e._path,r);else{const a=Pi(t.serverSyncTree_,e);o=Qp(t.serverSyncTree_,e._path,r,a)}return it(t.eventQueue_,e._path,o),Wr(t.serverSyncTree_,e,n,null,!0),r},i=>(Bs(t,"get for query "+Re(e)+" failed: "+i),Promise.reject(new Error(i))))}function sS(t,e,n,s,i){Bs(t,"set",{path:e.toString(),value:n,priority:s});const r=Gi(t),o=Ce(n,s),a=go(t.serverSyncTree_,e),l=ic(o,a,r),c=wo(t),u=Xl(t.serverSyncTree_,e,l,c,!0);bo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,f)=>{const g=d==="ok";g||je("set at "+e+" failed: "+d);const y=fn(t.serverSyncTree_,c,!g);it(t.eventQueue_,e,y),Ga(t,i,d,f)});const h=hc(t,e);Os(t,h),it(t.eventQueue_,h,[])}function iS(t,e,n,s){Bs(t,"update",{path:e.toString(),value:n});let i=!0;const r=Gi(t),o={};if(Oe(n,(a,l)=>{i=!1,o[a]=e_(be(e,a),Ce(l),t.serverSyncTree_,r)}),i)ke("update() called with empty data.  Don't do anything."),Ga(t,s,"ok",void 0);else{const a=wo(t),l=ST(t.serverSyncTree_,e,o,a);bo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||je("update at "+e+" failed: "+c);const d=fn(t.serverSyncTree_,a,!h),f=d.length>0?Os(t,e):e;it(t.eventQueue_,f,d),Ga(t,s,c,u)}),Oe(n,c=>{const u=hc(t,be(e,c));Os(t,u)}),it(t.eventQueue_,e,[])}}function rS(t){Bs(t,"onDisconnectEvents");const e=Gi(t),n=Dr();Ua(t.onDisconnect_,te(),(i,r)=>{const o=e_(i,r,t.serverSyncTree_,e);Mp(n,i,o)});let s=[];Ua(n,te(),(i,r)=>{s=s.concat(Wi(t.serverSyncTree_,i,r));const o=hc(t,i);Os(t,o)}),t.onDisconnect_=Dr(),it(t.eventQueue_,te(),s)}function oS(t,e,n){let s;K(e._path)===".info"?s=ja(t.infoSyncTree_,e,n):s=ja(t.serverSyncTree_,e,n),a_(t.eventQueue_,e._path,s)}function Th(t,e,n){let s;K(e._path)===".info"?s=Wr(t.infoSyncTree_,e,n):s=Wr(t.serverSyncTree_,e,n),a_(t.eventQueue_,e._path,s)}function aS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(JT)}function Bs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function Ga(t,e,n,s){e&&Us(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function lS(t,e,n,s,i,r){Bs(t,"transaction on "+e);const o={path:e,update:n,onComplete:s,status:null,order:rp(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=uc(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{$i("transaction failed: Data returned ",l,o.path),o.status=0;const c=yo(t.transactionQueueTree_,e),u=ns(c)||[];u.push(o),ac(c,u);let h;typeof l=="object"&&l!==null&&vt(l,".priority")?(h=jn(l,".priority"),C(i_(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(go(t.serverSyncTree_,e)||B.EMPTY_NODE).getPriority().val();const d=Gi(t),f=Ce(l,h),g=ic(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=g,o.currentWriteId=wo(t);const y=Xl(t.serverSyncTree_,e,g,o.currentWriteId,o.applyLocally);it(t.eventQueue_,e,y),Io(t,t.transactionQueueTree_)}}function uc(t,e,n){return go(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Io(t,e=t.transactionQueueTree_){if(e||Co(t,e),ns(e)){const n=h_(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&cS(t,ji(e),n)}else t_(e)&&vo(e,n=>{Io(t,n)})}function cS(t,e,n){const s=n.map(c=>c.currentWriteId),i=uc(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=We(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Bs(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(fn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Co(t,yo(t.transactionQueueTree_,e)),Io(t,t.transactionQueueTree_),it(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Us(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{je("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Os(t,e)}},o)}function Os(t,e){const n=u_(t,e),s=ji(n),i=h_(t,n);return uS(t,i,s),s}function uS(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=We(n,l.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(fn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=XT)u=!0,h="maxretry",i=i.concat(fn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=uc(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){$i("transaction failed: Data returned ",f,l.path);let g=Ce(f);typeof f=="object"&&f!=null&&vt(f,".priority")||(g=g.updatePriority(d.getPriority()));const T=l.currentWriteId,N=Gi(t),S=ic(g,d,N);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=S,l.currentWriteId=wo(t),o.splice(o.indexOf(T),1),i=i.concat(Xl(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),i=i.concat(fn(t.serverSyncTree_,T,!0))}else u=!0,h="nodata",i=i.concat(fn(t.serverSyncTree_,l.currentWriteId,!0))}it(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,(function(d){setTimeout(d,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Co(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Us(s[a]);Io(t,t.transactionQueueTree_)}function u_(t,e){let n,s=t.transactionQueueTree_;for(n=K(e);n!==null&&ns(s)===void 0;)s=yo(s,n),e=de(e),n=K(e);return s}function h_(t,e){const n=[];return d_(t,e,n),n.sort((s,i)=>s.order-i.order),n}function d_(t,e,n){const s=ns(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);vo(e,i=>{d_(t,i,n)})}function Co(t,e){const n=ns(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ac(e,n.length>0?n:void 0)}vo(e,s=>{Co(t,s)})}function hc(t,e){const n=ji(u_(t,e)),s=yo(t.transactionQueueTree_,e);return HT(s,i=>{na(t,i)}),na(t,s),n_(s,i=>{na(t,i)}),n}function na(t,e){const n=ns(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(fn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ac(e,void 0):n.length=r+1,it(t.eventQueue_,ji(e),i);for(let o=0;o<s.length;o++)Us(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function dS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Sh=function(t,e){const n=fS(t),s=n.namespace;n.domain==="firebase.com"&&Jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||II();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new yp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ae(n.pathString)}},fS=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=hS(t.substring(u,h)));const d=dS(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",pS=(function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Rh.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Rh.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Re(this.snapshot.exportVal())}}class gS{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Q(this._path)?null:Bl(this._path)}get ref(){return new xt(this._repo,this._path)}get _queryIdentifier(){const e=hh(this._queryParams),n=Ml(e);return n==="{}"?"default":n}get _queryObject(){return hh(this._queryParams)}isEqual(e){if(e=we(e),!(e instanceof dc))return!1;const n=this._repo===e._repo,s=Hl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+oC(this._path)}}class xt extends dc{constructor(e,n){super(e,n,new $l,!1)}get parent(){const e=Rp(this._path);return e===null?null:new xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ae(e),s=ki(this.ref,e);return new xs(this._node.getChild(n),s,ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new xs(i,ki(this.ref,s),ye)))}hasChild(e){const n=new ae(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ah(t,e){return t=we(t),t._checkNotDeleted("ref"),e!==void 0?ki(t._root,e):t._root}function ki(t,e){return t=we(t),K(t._path)===null?zT("child","path",e):o_("child","path",e),new xt(t._repo,be(t._path,e))}function tA(t,e){t=we(t),Eo("push",t._path),r_("push",e,t._path,!0);const n=c_(t._repo),s=pS(n),i=ki(t,s),r=ki(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function nA(t){return Eo("remove",t._path),p_(t,null)}function p_(t,e){t=we(t),Eo("set",t._path),r_("set",e,t._path,!1);const n=new Ms;return sS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function mS(t,e){qT("update",e,t._path);const n=new Ms;return iS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function yS(t){t=we(t);const e=new f_(()=>{}),n=new To(e);return nS(t._repo,t,n).then(s=>new xs(s,new xt(t._repo,t._path),t._queryParams.getIndex()))}class To{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new _S("value",this,new xs(e.snapshotNode,new xt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gS(this,e,n):null}matches(e){return e instanceof To?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function vS(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Th(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new f_(n,r||void 0),a=new To(o);return oS(t._repo,t,a),()=>Th(t._repo,t,a)}function __(t,e,n,s){return vS(t,"value",e,n,s)}yT(xt);IT(xt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="FIREBASE_DATABASE_EMULATOR_HOST",qa={};let bS=!1;function wS(t,e,n,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=Rn(r);t.repoInfo_=new yp(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function IS(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Sh(r,i),a=o.repoInfo,l;typeof process<"u"&&zu&&(l=zu[ES]),l?(r=`http://${l}?ns=${a.namespace}`,o=Sh(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new DI(t.name,t.options,e);KT("Invalid Firebase Database URL",o),Q(o.path)||Jt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=TS(a,t,c,new xI(t,n));return new SS(u,t)}function CS(t,e){const n=qa[e];(!n||n[t.key]!==t)&&Jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),aS(t),delete n[t.key]}function TS(t,e,n,s){let i=qa[e.name];i||(i={},qa[e.name]=i);let r=i[t.toURLString()];return r&&Jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ZT(t,bS,n,s),i[t.toURLString()]=r,r}class SS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xt(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jt("Cannot call "+e+" on a deleted database.")}}function RS(t=ao(),e){const n=oo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=gf("database");s&&AS(n,...s)}return n}function AS(t,e,n,s={}){t=we(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&$n(s,r.repoInfo_.emulatorOptions))return;Jt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ur(ur.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:vf(s.mockUserToken,t.app.options.projectId);o=new ur(a)}Rn(e)&&(vl(e),El("Database",!0)),wS(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t){yI(Xn),Gn(new wn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return IS(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Nt(Ku,Yu,t),Nt(Ku,Yu,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function sA(t,e,n){if(t=we(t),Eo("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const s=!0,i=new Ms,r=(a,l,c)=>{let u=null;a?i.reject(a):(u=new xs(c,new xt(t._repo,t._path),ye),i.resolve(new PS(l,u)))},o=__(t,()=>{});return lS(t._repo,t._path,e,r,o,s),i.promise}Gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};NS();var kS="firebase",OS="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(kS,OS,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="firebasestorage.googleapis.com",m_="storageBucket",xS=120*1e3,DS=600*1e3,MS=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends Zt{constructor(e,n,s=0){super(sa(e),`Firebase Storage: ${n} (${sa(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _e;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_e||(_e={}));function sa(t){return"storage/"+t}function fc(){const t="An unknown error occurred, please check the error payload for server response.";return new ve(_e.UNKNOWN,t)}function LS(t){return new ve(_e.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function US(t){return new ve(_e.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function FS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ve(_e.UNAUTHENTICATED,t)}function BS(){return new ve(_e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function HS(t){return new ve(_e.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function y_(){return new ve(_e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function v_(){return new ve(_e.CANCELED,"User canceled the upload/download.")}function VS(t){return new ve(_e.INVALID_URL,"Invalid URL '"+t+"'.")}function WS(t){return new ve(_e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function jS(){return new ve(_e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+m_+"' property when initializing the app?")}function E_(){return new ve(_e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $S(){return new ve(_e.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function GS(){return new ve(_e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qS(t){return new ve(_e.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function za(t){return new ve(_e.INVALID_ARGUMENT,t)}function b_(){return new ve(_e.APP_DELETED,"The Firebase app was deleted.")}function zS(t){return new ve(_e.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function pi(t,e){return new ve(_e.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ys(t){throw new ve(_e.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=st.makeFromUrl(e,n)}catch{return new st(e,"")}if(s.path==="")return s;throw WS(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},y=n===g_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",N=new RegExp(`^https?://${y}/${i}/${T}`,"i"),P=[{regex:a,indices:l,postModify:r},{regex:f,indices:g,postModify:c},{regex:N,indices:{bucket:1,path:2},postModify:c}];for(let R=0;R<P.length;R++){const W=P[R],fe=W.regex.exec(e);if(fe){const Z=fe[W.indices.bucket];let G=fe[W.indices.path];G||(G=""),s=new st(Z,G),W.postModify(s);break}}if(s==null)throw VS(e);return s}}class KS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...T){c||(c=!0,e.apply(null,T))}function h(T){i=setTimeout(()=>{i=null,t(f,l())},T)}function d(){r&&clearTimeout(r)}function f(T,...N){if(c){d();return}if(T){d(),u.call(null,T,...N);return}if(l()||o){d(),u.call(null,T,...N);return}s<64&&(s*=2);let P;a===1?(a=2,P=0):P=(s+Math.random())*1e3,h(P)}let g=!1;function y(T){g||(g=!0,d(),!c&&(i!==null?(T||(a=2),clearTimeout(i),h(0)):T||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function QS(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t){return t!==void 0}function XS(t){return typeof t=="function"}function ZS(t){return typeof t=="object"&&!Array.isArray(t)}function So(t){return typeof t=="string"||t instanceof String}function Nh(t){return pc()&&t instanceof Blob}function pc(){return typeof Blob<"u"}function Ph(t,e,n,s){if(s<e)throw za(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw za(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function w_(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var Wn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Wn||(Wn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0,f=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.isUsingEmulator=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new er(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Wn.NO_ERROR,l=r.getStatus();if(!a||I_(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Wn.ABORT;s(!1,new er(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new er(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());JS(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=fc();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?b_():v_();o(l)}else{const l=y_();o(l)}};this.canceled_?n(!1,new er(!1,null,!0)):this.backoffId_=YS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class er{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function tR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function nR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function sR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function iR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rR(t,e,n,s,i,r,o=!0,a=!1){const l=w_(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return sR(u,e),tR(u,n),nR(u,r),iR(u,s),new eR(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function aR(...t){const e=oR();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(pc())return new Blob(t);throw new ve(_e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function lR(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){if(typeof atob>"u")throw qS("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ia{constructor(e,n){this.data=e,this.contentType=n||null}}function uR(t,e){switch(t){case Rt.RAW:return new ia(C_(e));case Rt.BASE64:case Rt.BASE64URL:return new ia(T_(t,e));case Rt.DATA_URL:return new ia(dR(e),fR(e))}throw fc()}function C_(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function hR(t){let e;try{e=decodeURIComponent(t)}catch{throw pi(Rt.DATA_URL,"Malformed data URL.")}return C_(e)}function T_(t,e){switch(t){case Rt.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw pi(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Rt.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw pi(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=cR(e)}catch(i){throw i.message.includes("polyfill")?i:pi(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class S_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw pi(Rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=pR(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function dR(t){const e=new S_(t);return e.base64?T_(Rt.BASE64,e.rest):hR(e.rest)}function fR(t){return new S_(t).contentType}function pR(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n){let s=0,i="";Nh(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Nh(this.data_)){const s=this.data_,i=lR(s,e,n);return i===null?null:new dn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new dn(s,!0)}}static getBlob(...e){if(pc()){const n=e.map(s=>s instanceof dn?s.data_:s);return new dn(aR.apply(null,n))}else{const n=e.map(o=>So(o)?uR(Rt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new dn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t){let e;try{e=JSON.parse(t)}catch{return null}return ZS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function gR(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function A_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t,e){return e}class Fe{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||mR}}let tr=null;function yR(t){return!So(t)||t.length<2?t:A_(t)}function N_(){if(tr)return tr;const t=[];t.push(new Fe("bucket")),t.push(new Fe("generation")),t.push(new Fe("metageneration")),t.push(new Fe("name","fullPath",!0));function e(r,o){return yR(o)}const n=new Fe("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new Fe("size");return i.xform=s,t.push(i),t.push(new Fe("timeCreated")),t.push(new Fe("updated")),t.push(new Fe("md5Hash",null,!0)),t.push(new Fe("cacheControl",null,!0)),t.push(new Fe("contentDisposition",null,!0)),t.push(new Fe("contentEncoding",null,!0)),t.push(new Fe("contentLanguage",null,!0)),t.push(new Fe("contentType",null,!0)),t.push(new Fe("metadata","customMetadata",!0)),tr=t,tr}function vR(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new st(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function ER(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return vR(s,t),s}function P_(t,e,n){const s=R_(e);return s===null?null:ER(t,s,n)}function bR(t,e,n,s){const i=R_(e);if(i===null||!So(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=Hs(d,n,s),g=w_({alt:"media",token:c});return f+g})[0]}function k_(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class ss{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){if(!t)throw fc()}function _c(t,e){function n(s,i){const r=P_(t,i,e);return qt(r!==null),r}return n}function wR(t,e){function n(s,i){const r=P_(t,i,e);return qt(r!==null),bR(r,i,t.host,t._protocol)}return n}function qi(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=BS():i=FS():n.getStatus()===402?i=US(t.bucket):n.getStatus()===403?i=HS(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function gc(t){const e=qi(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=LS(t.path)),r.serverResponse=i.serverResponse,r}return n}function IR(t,e,n){const s=e.fullServerUrl(),i=Hs(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new ss(i,r,_c(t,n),o);return a.errorHandler=gc(e),a}function CR(t,e,n){const s=e.fullServerUrl(),i=Hs(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new ss(i,r,wR(t,n),o);return a.errorHandler=gc(e),a}function TR(t,e){const n=e.fullServerUrl(),s=Hs(n,t.host,t._protocol),i="DELETE",r=t.maxOperationRetryTime;function o(l,c){}const a=new ss(s,i,o,r);return a.successCodes=[200,204],a.errorHandler=gc(e),a}function SR(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function O_(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=SR(null,e)),s}function RR(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let P="";for(let R=0;R<2;R++)P=P+Math.random().toString().slice(2);return P}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=O_(e,s,i),u=k_(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=dn.getBlob(h,s,d);if(f===null)throw E_();const g={name:c.fullPath},y=Hs(r,t.host,t._protocol),T="POST",N=t.maxUploadRetryTime,S=new ss(y,T,_c(t,n),N);return S.urlParams=g,S.headers=o,S.body=f.uploadData(),S.errorHandler=qi(e),S}class jr{constructor(e,n,s,i){this.current=e,this.total=n,this.finalized=!!s,this.metadata=i||null}}function mc(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{qt(!1)}return qt(!!n&&(e||["active"]).indexOf(n)!==-1),n}function AR(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o=O_(e,s,i),a={name:o.fullPath},l=Hs(r,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=k_(o,n),d=t.maxUploadRetryTime;function f(y){mc(y);let T;try{T=y.getResponseHeader("X-Goog-Upload-URL")}catch{qt(!1)}return qt(So(T)),T}const g=new ss(l,c,f,d);return g.urlParams=a,g.headers=u,g.body=h,g.errorHandler=qi(e),g}function NR(t,e,n,s){const i={"X-Goog-Upload-Command":"query"};function r(c){const u=mc(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{qt(!1)}h||qt(!1);const d=Number(h);return qt(!isNaN(d)),new jr(d,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new ss(n,o,r,a);return l.headers=i,l.errorHandler=qi(e),l}const kh=256*1024;function PR(t,e,n,s,i,r,o,a){const l=new jr(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw $S();const c=l.total-l.current;let u=c;i>0&&(u=Math.min(u,i));const h=l.current,d=h+u;let f="";u===0?f="finalize":c===u?f="upload, finalize":f="upload";const g={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},y=s.slice(h,d);if(y===null)throw E_();function T(R,W){const fe=mc(R,["active","final"]),Z=l.current+u,G=s.size();let z;return fe==="final"?z=_c(e,r)(R,W):z=null,new jr(Z,G,fe==="final",z)}const N="POST",S=e.maxUploadRetryTime,P=new ss(n,N,T,S);return P.headers=g,P.body=y.uploadData(),P.progressCallback=a||null,P.errorHandler=qi(t),P}const Ye={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ra(t){switch(t){case"running":case"pausing":case"canceling":return Ye.RUNNING;case"paused":return Ye.PAUSED;case"success":return Ye.SUCCESS;case"canceled":return Ye.CANCELED;case"error":return Ye.ERROR;default:return Ye.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,s){if(XS(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class OR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Wn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Wn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i,r){if(this.sent_)throw Ys("cannot .send() more than once");if(Rn(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ys("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ys("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ys("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ys("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xR extends OR{initXhr(){this.xhr_.responseType="text"}}function Mn(){return new xR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=N_(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(_e.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(I_(i.status,[]))if(r)i=y_();else{this.sleepTime=Math.max(this.sleepTime*2,MS),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(_e.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=AR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Mn,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const i=NR(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,Mn,n,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=kh*this._chunkMultiplier,n=new jr(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=PR(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Mn,i,r,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){kh*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=IR(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,Mn,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=RR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Mn,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=v_(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ra(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,i){const r=new kR(n||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ra(this._state)){case Ye.SUCCESS:cs(this._resolve.bind(null,this.snapshot))();break;case Ye.CANCELED:case Ye.ERROR:const n=this._reject;cs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ra(this._state)){case Ye.RUNNING:case Ye.PAUSED:e.next&&cs(e.next.bind(e,this.snapshot))();break;case Ye.SUCCESS:e.complete&&cs(e.complete.bind(e))();break;case Ye.CANCELED:case Ye.ERROR:e.error&&cs(e.error.bind(e,this._error))();break;default:e.error&&cs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){this._service=e,n instanceof st?this._location=n:this._location=st.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Qn(e,n)}get root(){const e=new st(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return A_(this._location.path)}get storage(){return this._service}get parent(){const e=_R(this._location.path);if(e===null)return null;const n=new st(this._location.bucket,e);return new Qn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zS(e)}}function MR(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new DR(t,new dn(e),n)}function LR(t){t._throwIfRoot("getDownloadURL");const e=CR(t.storage,t._location,N_());return t.storage.makeRequestWithTokens(e,Mn).then(n=>{if(n===null)throw GS();return n})}function UR(t){t._throwIfRoot("deleteObject");const e=TR(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Mn)}function FR(t,e){const n=gR(t._location.path,e),s=new st(t._location.bucket,n);return new Qn(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(t){return/^[A-Za-z]+:\/\//.test(t)}function HR(t,e){return new Qn(t,e)}function x_(t,e){if(t instanceof yc){const n=t;if(n._bucket==null)throw jS();const s=new Qn(n,n._bucket);return e!=null?x_(s,e):s}else return e!==void 0?FR(t,e):t}function VR(t,e){if(e&&BR(e)){if(t instanceof yc)return HR(t,e);throw za("To use ref(service, url), the first argument must be a Storage instance.")}else return x_(t,e)}function Oh(t,e){const n=e?.[m_];return n==null?null:st.makeFromBucketSpec(n,t)}function WR(t,e,n,s={}){t.host=`${e}:${n}`;const i=Rn(e);i&&(vl(`https://${t.host}/b`),El("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:vf(r,t.app.options.projectId))}class yc{constructor(e,n,s,i,r,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=g_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xS,this._maxUploadRetryTime=DS,this._requests=new Set,i!=null?this._bucket=st.makeFromBucketSpec(i,this._host):this._bucket=Oh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=st.makeFromBucketSpec(this._url,e):this._bucket=Oh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ph("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ph("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qn(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new KS(b_());{const o=rR(e,this._appId,s,i,n,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const xh="@firebase/storage",Dh="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="storage";function iA(t,e,n){return t=we(t),MR(t,e,n)}function rA(t){return t=we(t),LR(t)}function oA(t){return t=we(t),UR(t)}function aA(t,e){return t=we(t),VR(t,e)}function jR(t=ao(),e){t=we(t);const s=oo(t,D_).getImmediate({identifier:e}),i=gf("storage");return i&&$R(s,...i),s}function $R(t,e,n,s={}){WR(t,e,n,s)}function GR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new yc(n,s,i,e,Xn)}function qR(){Gn(new wn(D_,GR,"PUBLIC").setMultipleInstances(!0)),Nt(xh,Dh,""),Nt(xh,Dh,"esm2020")}qR();const M_={apiKey:"AIzaSyA01qxVQJP_MFKplOBbZqHhcleuw93L9KQ",authDomain:"students-artwork-wall.firebaseapp.com",projectId:"students-artwork-wall",storageBucket:"students-artwork-wall.firebasestorage.app",appId:"1:711931818353:web:141fc08fb89ecd513706d0",databaseURL:"https://students-artwork-wall-default-rtdb.firebaseio.com"};Object.values(M_).some(t=>!t)&&console.warn("[firebase] Missing configuration value. Please check your environment variables.");const vc=ib().length>0?ao():Cf(M_),oa=gI(vc),L_=new Vt;L_.setCustomParameters({prompt:"select_account"});const Mh=RS(vc),lA=jR(vc);"http://localhost:5173".split(",").map(t=>t.trim()).filter(Boolean);const aa=t=>typeof t=="string"?t.toLowerCase()==="true":t===!0,Lh=30,zR=yy("auth",{state:()=>({status:"idle",error:null,firebaseUser:null,profile:null,isInitialized:!1,profileUnsubscribe:null,authUnsubscribe:null}),getters:{isAuthenticated:t=>!!t.firebaseUser,isAdmin:t=>aa(t.profile?.isAdmin),activeUserId:t=>t.firebaseUser?.uid??null},actions:{async init(){this.isInitialized||(this.status="loading",await new Promise(t=>{const e=iw(oa,async n=>{this.firebaseUser=n,n?(await this.ensureUserRecord(n),await this.subscribeToProfile(n.uid)):(this.profile=null,this.unsubscribeFromProfile()),this.status="ready",this.isInitialized=!0,t()});this.authUnsubscribe=e}))},async signInWithGoogle(){this.error=null,this.status="loading";try{await Tw(oa,L_)}catch(t){throw console.error("[auth] signInWithGoogle error",t),this.error=t instanceof Error?t.message:"Google 登入失敗，請稍後再試。",t}finally{this.status="ready"}},async signOut(){this.error=null,this.status="loading";try{await rw(oa),this.unsubscribeFromProfile(),this.profile=null,this.firebaseUser=null}catch(t){throw console.error("[auth] signOut error",t),this.error=t instanceof Error?t.message:"登出時發生錯誤。",t}finally{this.status="ready"}},async ensureUserRecord(t){const e=Ah(Mh,`users/${t.uid}`),n=await yS(e),s={displayName:t.displayName??null,email:t.email??null,photoURL:t.photoURL??null,isAdmin:aa(n.child("profile/isAdmin").val())};if(!n.exists()){await p_(e,{profile:s,stats:{count:0,quota:Lh}});return}await mS(e,{"profile/displayName":s.displayName,"profile/email":s.email,"profile/photoURL":s.photoURL}),(!t.displayName||!t.photoURL)&&await tw(t,{displayName:s.displayName??void 0,photoURL:s.photoURL??void 0})},async subscribeToProfile(t){if(this.profileUnsubscribe)return;const e=Ah(Mh,`users/${t}`);await new Promise(n=>{let s=!1;this.profileUnsubscribe=__(e,i=>{const r=i.val();if(!r)this.profile=null;else{const o=r.profile??{},a=r.stats??{};this.profile={uid:t,displayName:o.displayName??this.firebaseUser?.displayName??null,email:o.email??this.firebaseUser?.email??null,photoURL:o.photoURL??this.firebaseUser?.photoURL??null,isAdmin:aa(o.isAdmin),count:a.count??0,quota:a.quota??Lh}}s||(s=!0,n())},i=>{console.error("[auth] subscribeToProfile",i),this.error="無法同步使用者資料，請重新整理畫面。",s||(s=!0,n())})})},unsubscribeFromProfile(){this.profileUnsubscribe&&(this.profileUnsubscribe(),this.profileUnsubscribe=null)},stop(){this.unsubscribeFromProfile(),this.authUnsubscribe&&(this.authUnsubscribe(),this.authUnsubscribe=null),this.isInitialized=!1,this.status="idle",this.firebaseUser=null,this.profile=null}}}),U_=Ov({history:uv("./"),scrollBehavior:()=>({top:0}),routes:[{path:"/",redirect:{name:"gallery"}},{path:"/login",name:"login",component:()=>Qi(()=>import("./LoginView-ytZZn-jO.js"),[],import.meta.url),meta:{public:!0}},{path:"/gallery",name:"gallery",component:()=>Qi(()=>import("./GalleryView-BXj6twqD.js"),__vite__mapDeps([0,1]),import.meta.url),meta:{requiresAuth:!0}},{path:"/admin",name:"admin",component:()=>Qi(()=>import("./AdminDashboard-B2aihoC1.js"),__vite__mapDeps([2,1]),import.meta.url),meta:{requiresAuth:!0,requiresAdmin:!0}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>Qi(()=>import("./NotFoundView-kdiHDoJU.js"),[],import.meta.url),meta:{public:!0}}]}),KR=async(t,e,n)=>{const s=zR();return s.isInitialized||await s.init(),t.meta.requiresAdmin&&!s.isAdmin?n({name:"gallery"}):t.name==="login"&&s.isAuthenticated?n({name:"gallery"}):t.meta.requiresAuth&&!s.isAuthenticated?n({name:"login",query:{redirect:t.fullPath}}):n()};U_.beforeEach(KR);const Ec=cy(Iy);Ec.use(dy());Ec.use(U_);Ec.mount("#app");export{lA as A,oA as B,nA as C,sA as D,tA as E,Ft as F,iA as G,rA as H,p_ as I,Qe as J,Ag as K,Gg as L,vy as _,eA as a,Tm as b,ot as c,md as d,Wd as e,Nm as f,JR as g,gs as h,ZR as i,Bg as j,QR as k,YR as l,yy as m,Za as n,Bd as o,Ah as p,Mh as q,ll as r,__ as s,K_ as t,zR as u,XR as v,si as w,yS as x,mS as y,aA as z};
